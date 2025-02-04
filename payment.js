// Initialize payment process
document.addEventListener('DOMContentLoaded', () => {
    const paymentMethod = document.getElementById('paymentMethod');
    const paymentOutput = document.querySelector('.payment-output');
    
    // Get order details from sessionStorage
    const orderTotal = sessionStorage.getItem('orderTotal');
    const orderItems = JSON.parse(sessionStorage.getItem('orderItems'));
    
    if (orderTotal && orderItems) {
        let orderDetails = '<h2>Order Details:</h2>';
        orderItems.forEach(item => {
            orderDetails += `
                <p>${item.name} x${item.quantity} - £${item.subtotal.toFixed(2)}</p>
            `;
        });
        orderDetails += `<h3>Total: £${parseFloat(orderTotal).toFixed(2)}</h3>`;
        orderDetails += '<p>Please select a payment method to continue</p>';
        
        paymentOutput.innerHTML = orderDetails;
    }

    paymentMethod.addEventListener('change', () => {
        const method = paymentMethod.value;
        if (method) {
            handlePaymentMethod(method);
        }
    });
});

function handlePaymentMethod(method) {
    const paymentOutput = document.querySelector('.payment-output');
    const orderTotal = parseFloat(sessionStorage.getItem('orderTotal'));
    const orderItems = JSON.parse(sessionStorage.getItem('orderItems'));

    let orderDetails = '<h2>Order Details:</h2>';
    orderItems.forEach(item => {
        orderDetails += `
            <p>${item.name} x${item.quantity} - £${item.subtotal.toFixed(2)}</p>
        `;
    });
    orderDetails += `<h3>Total: £${orderTotal.toFixed(2)}</h3>`;

    switch(method) {
        case 'cash':
            paymentOutput.innerHTML = `
                <h2>Cash Payment</h2>
                ${orderDetails}
                <div class="cash-payment-section">
                    <div class="cash-input-group">
                        <label for="cashAmount">Cash Amount:</label>
                        <div class="input-with-symbol">
                            <span class="currency-symbol">£</span>
                            <input type="text" 
                                id="cashAmount" 
                                placeholder="Enter cash amount"
                                onkeyup="validateAndCalculateChange(this, ${orderTotal})"
                                onchange="validateAndCalculateChange(this, ${orderTotal})">
                        </div>
                    </div>
                    <div class="change-display">
                        <p>Change Due: <span id="changeDue">£0.00</span></p>
                    </div>
                </div>
            `;
            break;
        case 'card':
            paymentOutput.innerHTML = `
                <h2>Card Payment</h2>
                ${orderDetails}
                <p>Please insert or tap card on the card reader</p>
            `;
            break;
        case 'contactless':
            paymentOutput.innerHTML = `
                <h2>Contactless Payment</h2>
                ${orderDetails}
                <p>Please tap your card or device on the reader</p>
            `;
            break;
    }
}

function validateAndCalculateChange(input, total) {
    let value = input.value.replace(/[^\d.]/g, '');
    const decimalPoints = value.match(/\./g);
    if (decimalPoints && decimalPoints.length > 1) {
        value = value.replace(/\./g, (match, index) => index === value.indexOf('.') ? match : '');
    }
    if (value.includes('.')) {
        const parts = value.split('.');
        value = `${parts[0]}.${parts[1].slice(0, 2)}`;
    }
    input.value = value;

    const cashAmount = parseFloat(value) || 0;
    const change = cashAmount - total;
    document.getElementById('changeDue').textContent = change >= 0 ? `£${change.toFixed(2)}` : '£0.00';
}

function openTill() {
    const button = document.querySelector('button[onclick="openTill()"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Opening Till...';

    // Show opening notification
    showNotification(
        'Opening Till',
        'Please wait while the till drawer opens...',
        'info'
    );

    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
        
        // Show success notification with more details
        showNotification(
            'Till Ready',
            '<i class="fas fa-cash-register"></i> Till drawer is now open and ready for cash handling',
            'success'
        );
    }, 1500);
}

function showNotification(title, message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Add appropriate icon based on notification type
    let icon;
    switch(type) {
        case 'success':
            icon = 'check-circle';
            break;
        case 'error':
            icon = 'exclamation-circle';
            break;
        case 'info':
            icon = 'info-circle';
            break;
        default:
            icon = 'bell';
    }

    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${icon} notification-icon"></i>
            <div class="notification-text">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
        </div>
    `;

    const container = document.querySelector('.notification-container');
    container.appendChild(notification);

    // Add the show class after a brief delay to trigger the animation
    setTimeout(() => notification.classList.add('show'), 10);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}