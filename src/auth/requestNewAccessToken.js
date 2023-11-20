import { API_url } from "./const";

export default async function requestNewAccessToken(refreshToken) {
    try {
        const response = await fetch(`${API_url}/refresh-token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (response.ok) {
            const json = await response.json();
            if (json.error) {
                throw new Error(json.error);
            }
            return json.body;
        } else {
            throw new Error("Unable to refresh access token.");
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}