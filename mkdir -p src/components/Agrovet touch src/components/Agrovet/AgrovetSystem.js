// src/components/AgrovetSystem.js
import React, { useState } from 'react';
import { HashConnect } from 'hashconnect';

const AgrovetSystem = () => {
  // State variables
  const [hashconnect, setHashconnect] = useState(null);
  const [accountId, setAccountId] = useState('');
  const [supplies] = useState([
    { name: 'Takins', price: 50 },
    { name: 'Iro', price: 30 },
    { name: 'Kwayoyin Kashe Kwari', price: 70 }
  ]);
  const [quantities, setQuantities] = useState([0, 0, 0]);
  const [orderStatus, setOrderStatus] = useState('');

  // Connect to HashPack wallet
  const connectWallet = async () => {
    try {
      const hc = new HashConnect();
      await hc.init();
      const pairingData = await hc.connect();
      
      if (pairingData.accountIds.length > 0) {
        setHashconnect(hc);
        setAccountId(pairingData.accountIds[0]);
        setOrderStatus('An haɗe wallet!');
      }
    } catch (error) {
      setOrderStatus(`Kuskure: ${error.message}`);
    }
  };

  // Update quantity
  const updateQuantity = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(0, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  // Calculate total
  const calculateTotal = () => {
    return supplies.reduce((total, item, index) => 
      total + (item.price * quantities[index]), 0);
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
      
      // Simulate transaction (replace with real Hedera call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setOrderStatus(`An nasara! Oda #${Math.floor(Math.random() * 1000)}`);
      setQuantities([0, 0, 0]);
    } catch (error) {
      setOrderStatus('Babban kuskure: ' + error.message);
    }
  };

  // Inline CSS (No need for separate file)
  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '25px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      border: '1px solid #e0e0e0'
    },
    header: {
      textAlign: 'center',
      color: '#2E7D32',
      marginBottom: '25px',
      fontSize: '28px'
    },
    walletInfo: {
      textAlign: 'center',
      margin: '15px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px'
    },
    supplyItem: {
      border: '1px solid #ddd',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '10px',
      backgroundColor: '#f8fff8'
    },
    quantityControl: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginTop: '10px'
    },
    quantityBtn: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: '1px solid #ddd',
      backgroundColor: 'white',
      fontSize: '18px',
      cursor: 'pointer'
    },
    orderBtn: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '14px 28px',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      display: 'block',
      width: '100%',
      maxWidth: '300px',
      margin: '20px auto',
      transition: 'all 0.3s'
    },
    status: {
      color: '#27ae60',
      fontWeight: '600',
      textAlign: 'center',
      margin: '15px 0',
      padding: '10px',
      borderRadius: '8px',
      backgroundColor: 'rgba(39, 174, 96, 0.1)'
    },
    instructions: {
      marginTop: '35px',
      backgroundColor: '#f9f9f9',
      padding: '25px',
      borderRadius: '10px',
      borderLeft: '4px solid #2E7D32'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Tsarin Agrovet na Agrochain</h1>
      
      {accountId ? (
        <div style={styles.walletInfo}>
          Wallet: {accountId.slice(0, 6)}...{accountId.slice(-4)}
        </div>
      ) : (
        <button 
          onClick={connectWallet}
          style={styles.orderBtn}
        >
          Haɗa HashPack Wallet
        </button>
      )}

      <div>
        <h2>Zaɓi Kayayyakin Noma:</h2>
        {supplies.map((item, index) => (
          <div key={index} style={styles.supplyItem}>
            <h3>{item.name}</h3>
            <p>Farashin: {item.price} AgroToken</p>
            <div style={styles.quantityControl}>
              <button 
                onClick={() => updateQuantity(index, -1)}
                style={styles.quantityBtn}
              >
                -
              </button>
              <span>{quantities[index]}</span>
              <button 
                onClick={() => updateQuantity(index, 1)}
                style={styles.quantityBtn}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Taƙaitaccen Oda:</h2>
        <p>Jimlar Kuɗi: <strong>{calculateTotal()} AgroToken</strong></p>
        <button 
          onClick={placeOrder}
          style={{ ...styles.orderBtn, backgroundColor: quantities.reduce((a, b) => a + b, 0) ? '#4CAF50' : '#cccccc' }}
          disabled={!quantities.reduce((a, b) => a + b, 0)}
        >
          Yi Oda Yanzu
        </button>
        {orderStatus && <p style={styles.status}>{orderStatus}</p>}
      </div>

      <div style={styles.instructions}>
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
