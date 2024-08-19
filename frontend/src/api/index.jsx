

// Appel API pour récupérer les infos USER à afficher sur la page Profile via composant userEdit et dans Header

export async function getUserProfile(token) {
    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        // Log toute erreur qui survient
        console.error("Erreur lors de la requête de profil utilisateur:", error);
        throw error;
    }
}
  

// Appel API pour modifier le UserName
  
  export async function changeUsername(newUsername, token) {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUsername }),
      });
  
      if (!response.ok) {
        let errorMessage = `Echec de changement userName. Statut: ${response.status}`;
        if (response.status === 401) {
          errorMessage = 'Non autorisé : verifiez vos données de connexion.';
        }
        throw new Error(errorMessage);
      }
  
      const data = await response.json();
  
      return data.body; 
  
    } catch (error) {
      throw new Error(`Erreur de changement userName: ${error.message}`);
    }
  }
  