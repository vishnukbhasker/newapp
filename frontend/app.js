const form = document.getElementById('userForm');
const usersDiv = document.getElementById('users');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const response = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
        alert('User added successfully');
        fetchUsers();
    } else {
        alert('Error adding user');
    }
});

async function fetchUsers() {
    const response = await fetch('http://localhost:8000/users/');
    if (response.ok) {
        const users = await response.json();
        usersDiv.innerHTML = users.map(user => `<p>${user.name} (${user.age})</p>`).join('');
    }
}

fetchUsers();
