document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Username:', username);
        console.log('Password:', password);
        form.reset();
    });
});
