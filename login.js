document.addEventListener('DOMContentLoaded', () => {
    const pinInput = document.getElementById('pinInput');
    const errorMessage = document.getElementById('errorMessage');
    const pinButtons = document.querySelectorAll('.pin-btn');
    
    // Define staff PINs with their roles
    const staffPins = {
        '1234': { role: 'manager', name: 'Manager' },
        '5678': { role: 'staff', name: 'Staff' },
        '9999': { role: 'admin', name: 'Admin' }
    };

    let isProcessing = false;

    pinButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (isProcessing) return;

            const value = button.dataset.value;
            const action = button.dataset.action;

            if (action === 'clear') {
                pinInput.value = '';
                errorMessage.textContent = '';
            } else if (action === 'enter') {
                if (pinInput.value.length !== 4) {
                    errorMessage.textContent = 'Please enter a 4-digit PIN';
                    return;
                }
                validatePin();
            } else if (pinInput.value.length < 4) {
                pinInput.value += value;
            }
        });
    });

    function validatePin() {
        isProcessing = true;
        errorMessage.textContent = 'Validating...';
        pinButtons.forEach(btn => btn.classList.add('disabled'));

        setTimeout(() => {
            const staffMember = staffPins[pinInput.value];
            
            if (staffMember) {
                errorMessage.textContent = `Welcome, ${staffMember.name}!`;
                errorMessage.style.color = '#2ecc71';
                
                // Store staff info in session
                sessionStorage.setItem('isLoggedIn', 'true');
                sessionStorage.setItem('staffRole', staffMember.role);
                sessionStorage.setItem('staffName', staffMember.name);
                
                setTimeout(() => {
                    window.location.href = 'home.html';
                }, 500);
            } else {
                errorMessage.textContent = 'Invalid PIN';
                errorMessage.style.color = '#e74c3c';
                pinInput.value = '';
                isProcessing = false;
                pinButtons.forEach(btn => btn.classList.remove('disabled'));
            }
        }, 1000);
    }

    // Handle keyboard input
    document.addEventListener('keydown', (e) => {
        if (isProcessing) return;

        if (e.key >= '0' && e.key <= '9' && pinInput.value.length < 4) {
            pinInput.value += e.key;
        } else if (e.key === 'Enter') {
            if (pinInput.value.length === 4) {
                validatePin();
            }
        } else if (e.key === 'Backspace') {
            pinInput.value = pinInput.value.slice(0, -1);
            errorMessage.textContent = '';
        }
    });
}); 