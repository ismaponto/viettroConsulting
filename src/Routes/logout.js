export default function Logout() {
    async function logout (){
        try {
          const response = await fetch(`${API_url}/logout`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
          });} catch (error) {}

    return <h1> Going out </h1>}
}