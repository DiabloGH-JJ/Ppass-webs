document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const msg = form.querySelector('textarea[name="message"]').value.trim();

        if (!name || !email || !msg) {
            message.textContent = 'Please fill in all fields.';
            message.style.color = '#ff6f61';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            message.textContent = 'Please enter a valid email address.';
            message.style.color = '#ff6f61';
        } else {
            message.textContent = 'Message sent successfully! We’ll get back to you soon.';
            message.style.color = '#ffd700';
            form.reset();
        }
    });
});