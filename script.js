document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // QR Scanner Simulation
    const scanBtn = document.getElementById('scan-btn');
    const timeline = document.getElementById('product-timeline');
    
    scanBtn.addEventListener('click', function() {
        // Simulate scanning a product
        const sampleProduct = {
            id: 'AGRO-2023-05-001',
            name: 'Organic Tomatoes',
            harvestDate: '2023-05-15',
            farmer: 'Katsina Co-op Farm',
            journey: [
                { event: 'Harvested', date: '2023-05-15', location: 'Katsina Farm', details: 'Harvested at peak ripeness' },
                { event: 'Processed', date: '2023-05-16', location: 'Kano Processing', details: 'Washed and packaged' },
                { event: 'Shipped', date: '2023-05-18', location: 'To Lagos', details: 'Refrigerated transport' },
                { event: 'Delivered', date: '2023-05-20', location: 'Lagos Market', details: 'Available for sale' }
            ]
        };
        
        displayProductJourney(sampleProduct);
    });
    
    function displayProductJourney(product) {
        timeline.innerHTML = `
            <h4>${product.name} (${product.id})</h4>
            <p><strong>Harvest Date:</strong> ${product.harvestDate}</p>
            <p><strong>Farm:</strong> ${product.farmer}</p>
            <div class="journey-events">
                ${product.journey.map(event => `
                    <div class="event">
                        <h5>${event.event}</h5>
                        <p><strong>Date:</strong> ${event.date}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p>${event.details}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // AgroToken Balance Simulation
    const tokenBalance = document.getElementById('token-balance');
    const refreshBtn = document.getElementById('refresh-balance');
    const sendBtn = document.getElementById('send-tokens');
    const transactionsTable = document.querySelector('#transactions-table tbody');
    
    // Sample token data
    let balance = 1250.75;
    const transactions = [
        { date: '2023-05-15', type: 'Harvest Reward', amount: 500, status: 'Completed' },
        { date: '2023-05-10', type: 'Market Sale', amount: 750.75, status: 'Completed' },
        { date: '2023-05-05', type: 'Input Purchase', amount: -250, status: 'Completed' },
        { date: '2023-05-01', type: 'Co-op Bonus', amount: 250, status: 'Completed' }
    ];
    
    function updateBalance() {
        tokenBalance.textContent = balance.toFixed(2) + ' AGRO';
    }
    
    function updateTransactions() {
        transactionsTable.innerHTML = transactions.map(tx => `
            <tr>
                <td>${tx.date}</td>
                <td>${tx.type}</td>
                <td>${tx.amount > 0 ? '+' : ''}${tx.amount.toFixed(2)}</td>
                <td>${tx.status}</td>
            </tr>
        `).join('');
    }
    
    refreshBtn.addEventListener('click', function() {
        // Simulate balance refresh
        balance += Math.random() * 10;
        updateBalance();
    });
    
    sendBtn.addEventListener('click', function() {
        alert('Token transfer functionality will be implemented with Hedera Wallet Connect');
    });
    
    // Initialize
    updateBalance();
    updateTransactions();
});
