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
// Agrochain-HTS/src/AgrovetSystem.js
import React, { useState } from 'react';
import { HashConnect } from 'hashconnect';

const AgrovetSystem = () => {
  // State variables
  const [hashconnect, setHashconnect] = useState(null);
  const [accountId, setAccountId] = useState('');
  const [supplies, setSupplies] = useState([
    { name: 'Takins', quantity: 0, price: 50 },
    { name: 'Iro', quantity: 0, price: 30 },
    { name: 'Kwayoyin Kashe Kwari', quantity: 0, price: 70 }
  ]);
  const [orderStatus, setOrderStatus] = useState('');

  // Initialize HashPack wallet connection
  const connectWallet = async () => {
    const hc = new HashConnect();
    await hc.init();
    const pairingData = await hc.connect();
    
    if (pairingData.pairingString) {
      setHashconnect(hc);
      setAccountId(pairingData.accountIds[0]);
      return 'An haɗe HashPack!';
    }
    return 'An sami kuskure';
  };

  // Update supply quantity
  const updateQuantity = (index, change) => {
    const newSupplies = [...supplies];
    const newQty = newSupplies[index].quantity + change;
    newSupplies[index].quantity = newQty < 0 ? 0 : newQty;
    setSupplies(newSupplies);
  };

  // Calculate total cost in AgroTokens
  const calculateTotal = () => {
    return supplies.reduce((total, item) => 
      total + (item.quantity * item.price), 0);
  };

  // Place order function
  const placeOrder = async () => {
    if (!hashconnect) {
      setOrderStatus('Tohiru wallet da farko!');
      return;
    }

    const total = calculateTotal();
    if (total === 0) {
      setOrderStatus('Zaɓi aƙalla abu ɗaya!');
      return;
    }

    try {
      setOrderStatus('Ana aiwatar da oda...');
      
      // Create transfer transaction
      const transferTx = {
        tokenId: '0.0.1234567', // ID na AgroToken
        receiverId: '0.0.agrovet', // Agrovet wallet ID
        amount: total,
        memo: 'Agrovet Order'
      };

      // Send transaction
      const response = await hashconnect.sendTransaction(
        accountId, 
        transferTx
      );

      if (response.success) {
        setOrderStatus(`An nasara! Oda #${response.txId}`);
        // Reset form
        setSupplies(supplies.map(item => ({...item, quantity: 0})));
      } else {
        setOrderStatus('Kuskure: ' + response.error);
      }
    } catch (error) {
      setOrderStatus('Babban kuskure: ' + error.message);
    }
  };

  return (
    <div className="agrovet-system">
      <h1>Tsarin Agrovet na Agrochain</h1>
      
      {!accountId ? (
        <button onClick={connectWallet} className="connect-btn">
          Haɗa HashPack Wallet
        </button>
      ) : (
        <p>Wallet: {accountId}</p>
      )}

      <div className="supply-list">
        <h2>Zaɓi Kayayyakin Noma:</h2>
        {supplies.map((item, index) => (
          <div key={index} className="supply-item">
            <h3>{item.name}</h3>
            <p>Farashin: {item.price} AgroToken</p>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(index, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(index, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>Taƙaitaccen Oda:</h2>
        <p>Jimlar Kuɗi: <strong>{calculateTotal()} AgroToken</strong></p>
        <button onClick={placeOrder} className="order-btn">
          Yi Oda Yanzu
        </button>
        {orderStatus && <p className="status">{orderStatus}</p>}
      </div>

      <div className="instructions">
        <h3>Yadda Ake Amfani:</h3>
        <ol>
          <li>Haɗa HashPack Wallet dinku</li>
          <li>Zaɓi kayayyakin da kuke so</li>
          <li>Danna "Yi Oda Yanzu"</li>
          <li>Tabbatar da ma'amala a cikin wallet</li>
          <li>Za a aika kayayyakin zuwa gidanku!</li>
        </ol>
      </div>
    </div>
  );
};

export default AgrovetSystem;
// src/App.js
import React from 'react';
import AgrovetSystem from './components/AgrovetSystem';
import './App.css';

function App() {
  return (
    <div className="App">
      <AgrovetSystem />
    </div>
  );
}

export default App;
