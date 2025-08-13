// Demo product data
const products = {
    "AGRO-123": {
        name: "Organic Tomatoes",
        farmer: "Katsina Co-op",
        journey: [
            { step: "Harvested", date: "2023-05-01" },
            { step: "Shipped", date: "2023-05-03" }
        ]
    }
};

// Simulate QR scan
document.querySelector('.btn').addEventListener('click', function() {
    const productId = "AGRO-123"; // Demo ID
    const product = products[productId];
    
    document.getElementById('product-info').innerHTML = `
        <h3>${product.name}</h3>
        <p>Farmer: ${product.farmer}</p>
        <ul>
            ${product.journey.map(item => `
                <li>${item.step} on ${item.date}</li>
            `).join('')}
        </ul>
    `;
});
