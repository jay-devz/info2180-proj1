document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        const emailValue = emailInput.value.trim();
        
        if (emailValue === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${emailValue} has been added to our mailing list!`;
        }
    });
});