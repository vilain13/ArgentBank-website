export async function getUserProfile(token) {
    try {
        // Log la requête
        console.log("Envoi de la requête pour obtenir le profil utilisateur");

        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        // Log la réponse brute
        console.log("Réponse brute:", response);

        if (!response.ok) {
            // Si la réponse n'est pas OK, log l'erreur
            const errorText = await response.text();
            console.error("Erreur de la réponse:", errorText);
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const data = await response.json();

        // Log les données JSON renvoyées
        console.log("Données JSON reçues:", data);

        return data;
    } catch (error) {
        // Log toute erreur qui survient
        console.error("Erreur lors de la requête de profil utilisateur:", error);
        throw error;
    }
}
  