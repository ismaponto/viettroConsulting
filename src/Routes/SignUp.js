import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';
import { useAuth } from '../auth/authProvider';
import { API_url } from '../auth/const';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ name, setName ] = useState('');
	const [ surname, setSurname ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ passwordMessage, setPasswordMessage ] = useState(
		'La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo. '
	);
	const [ errorResponse, setErrorresponse ] = useState('');
	const auth = useAuth();
	const goTo = useNavigate();

// 	function isEmail(cadena) {
// 		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)+$/;
// 		return regex.test(cadena);
// 	}
//   function isSafePassword(password) {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
//     return regex.test(password);
// }
	async function handleSubmit(e) {
		e.preventDefault();
		// if (!isEmail(email)) {
		// 	setErrorresponse('Formato de correo electrónico no válido');
		// 	return;
		// }
    // if (!isSafePassword(email)) {
		// 	setErrorresponse('La contraseña no es segura, por favor utiliza una contraseña con una mayuscula, una minuscula, un numero y un simbolo');
		// 	return;
		// }

		try {
			const response = await fetch(`${API_url}/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					name,
					surname,
					password
				})
			});

			if (response.ok) {
				setErrorresponse('');
				setPasswordMessage('');
				console.log('user created');
				goTo('/login');
			} else {
				const json = await response.json();
				console.log('Something went wrong');
				setErrorresponse(json.body.error);
			}
		} catch (error) {
			console.log(error);
		}
	}

	if (auth.isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<div className="flex flex-col items-center w-full">
			<NavigationBar className="block w-full" />
			<div className="w-full flex flex-col center items-center max-w-xs">
				<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
					<h1> Registro de nuevo usuario </h1>{' '}
					{!!errorResponse && <p className="text-red-500"> {errorResponse} </p>}{' '}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Email </label>{' '}
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="text"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>{' '}
					</div>{' '}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Nombre </label>{' '}
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							placeholder="Nombre"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>{' '}
					</div>{' '}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Apellido </label>{' '}
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="surname"
							type="text"
							placeholder="Apellido"
							value={surname}
							onChange={(e) => setSurname(e.target.value)}
						/>{' '}
					</div>{' '}
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Contraseña </label>{' '}
						<input
							className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="******************"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>{' '}
						{!!passwordMessage && <p className="text-xs italic"> {passwordMessage} </p>}{' '}
					</div>{' '}
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Registrarse{' '}
						</button>{' '}
					</div>{' '}
				</form>{' '}
			</div>{' '}
			<Footer />
		</div>
	);
}
