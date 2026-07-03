
async function renderUsers() {
    const listContainer = document.querySelector("#users");

    if (!listContainer) {
        return;
    }

    listContainer.innerHTML = "<p class='status'>Loading users...</p>";

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        listContainer.innerHTML = "";

        users.forEach((user) => {
            const userCard = document.createElement("article");
            userCard.className = "user-card";
            userCard.innerHTML = `
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;
            listContainer.appendChild(userCard);
        });


    }
    catch(error){
        listContainer.innerHTML = "<p class='status error'>Could not load users. Please try again.</p>";
        console.log(error);
    }
}


renderUsers();