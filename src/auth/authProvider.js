import React, { useContext, createContext, useState, useEffect, useCallback } from 'react';
import requestNewAccessToken from './requestNewAccessToken';
import { API_url } from '../auth/const';

const AuthContext = createContext({
	isAuthenticated: false,
	getAccessToken: () => {},
	setAccessTokenAndRefreshToken: (_accessToken, _refreshToken) => {},
	getRefreshToken: () => {},
	saveUser: (_userData) => {},
	getUser: () => ({}),
	signout: () => {},
	onlySaveUser: (_userData) => {},
	accessToken: '',
	refreshToken: ''
});

export function AuthProvider({ children }) {
	const [ user, setUser ] = useState({});
	const [ accessToken, setAccessToken ] = useState('');
	const [ refreshToken, setRefreshToken ] = useState('');
	const [ isAuthenticated, setIsAuthenticated ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(true);
	const memoizedcheckAuth = useCallback(checkAuth, [accessToken]); // Memoize 'checkAuth' function

	useEffect(
		() => {
			memoizedcheckAuth();
		},
		[ memoizedcheckAuth ]
	); // Include memoized dependency

	function getAccessToken() {
		return accessToken;
	}

	function saveUser(userData) {
		setAccessTokenAndRefreshToken(userData.body.accessToken, userData.body.refreshToken);
		setUser(userData.body.user);
	}

	function setAccessTokenAndRefreshToken(accessToken, refreshToken) {
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);

		localStorage.setItem('token', JSON.stringify({ refreshToken }));
	}

	function getRefreshToken() {
		if (!!refreshToken) {
			return refreshToken;
		}
		const token = localStorage.getItem('token');
		if (token) {
			const { refreshToken } = JSON.parse(token);
			setRefreshToken(refreshToken);
			return refreshToken;
		}
		return null;
	}

	async function getNewAccessToken(refreshToken) {
		try {
			const token = await requestNewAccessToken(refreshToken);
			return token;
		} catch (error) {
			console.error('Error refreshing access token:', error);
			return null;
		}
	}

	function getUser() {
		return user;
	}

	function signout() {
		localStorage.removeItem('token');
		setAccessToken('');
		setRefreshToken('');
		setUser(null);
		setIsAuthenticated(false);
	}

	async function checkAuth() {
		try {
			// if (!!accessToken) {
			// 	// Existe access token
			// 	const userInfo = await retrieveUserInfo(accessToken);
			// 	setUser(userInfo);
			// 		setIsAuthenticated(true);
			// } else {
				// No existe access token
				const token = localStorage.getItem('token');
				if (token) {
					const refreshToken = JSON.parse(token).refreshToken;
					// Pedir nuevo access token
					const newToken = await getNewAccessToken(refreshToken);
					if (newToken) {
						const userInfo = await retrieveUserInfo(newToken);
						setUser(userInfo);
						setAccessToken(newToken);
						setIsAuthenticated(true);
					}
				}
			// }
		} catch (error) {
			console.error('Error checking authentication:', error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				getAccessToken,
				setAccessTokenAndRefreshToken,
				getRefreshToken,
				saveUser,
				getUser,
				signout,
				accessToken,
				refreshToken
			}}
		>
			{' '}
			  {isLoading ? <div> Loading... </div> : children}  {' '}
		</AuthContext.Provider>
	);
}

async function retrieveUserInfo(accessToken) {
	try {
		const response = await fetch(`${API_url}/user`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`
			}
		});

		if (response.ok) {
			const json = await response.json();
			return json.body;
		}
	} catch (error) {
		console.error('Error retrieving user info:', error);
		return null;
	}
}

export const useAuth = () => useContext(AuthContext);
