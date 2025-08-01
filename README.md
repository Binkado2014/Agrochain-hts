![Hedera](https://img.shields.io/badge/Hedera-HTS-blue)
![MIT License](https://img.shields.io/badge/license-MIT-green)
![Hackathon](https://img.shields.io/badge/project-hackathon-orange)

# 🌾 AgroChain Multichain (Hedera ↔ Sonic)
...# 🌾 AgroChain Multichain (Hedera ↔ Sonic)

AgroChain is evolving into a multichain ecosystem. We combine **Hedera HTS** for trusted agricultural tokenization with **Sonic** for scalable DeFi, marketplaces, and liquidity—bridging value between the two.

## Vision  
Empower smallholder farmers with transparent, tokenized agricultural value and scalable access to markets and rewards by linking Hedera’s low-fee tokenization with Sonic’s high-throughput DeFi infrastructure.

## Problem  
Rural farmers need traceable value, reliable liquidity, and global market access. Single-chain solutions face limits in throughput or composability.

## Solution  
Deploy **AgroToken (AGRO)** on Hedera for native farming incentives, then **bridge** or represent that value on Sonic to enable:
- High-speed marketplaces  
- Yield-style rewards (DeFi)  
- Cross-chain dashboard and liquidity access  

## Architecture Overview

1. **Hedera HTS**: AgroToken issuance, farmer reward minting, traceability.  
2. **Bridge Layer**: Mirror/lock logic to represent AGRO on Sonic (wrapped AGRO).  
3. **Sonic Layer**: Marketplace, staking/liquidity pools using wrapped AGRO.  
4. **Relayer**: Watches Hedera events and mints/burns wrapped tokens on Sonic.

## Core Features
- Tokenized farming rewards on Hedera  
- Cross-chain value representation on Sonic  
- Scalable AgroMarket & liquidity pools  
- Traceability via both chains  

## Tech Stack
- Hedera HTS  
- Sonic (EVM layer)  
- Bridge/Relayer service  
- GitHub + DoraHacks  

## Getting Started
1. Checkout this branch: `sonic-integration`  
2. Update `AgroTokenSpec.md` with cross-chain parameters.  
3. Prototype the relayer watching Hedera and minting wrapped AGRO on Sonic.  

## Team
- Abdulkadir Muhammed Gidado – Lead  
- Nura Muhammad Hassan – Field  
- Muhammadu Ado Duwan – Tech Support  
- Jeffumista – Research  
- Vedika – Frontend  

## Contact  
amgk3hotline@gmail.com  
https://github.com/Binkado2014/Agrochain-hts 

## License  
MIT License
---
![Hedera](https://img.shields.io/badge/Hedera-HTS-blue)
![MIT License](https://img.shields.io/badge/license-MIT-green)
![Hackathon](https://img.shields.io/badge/project-hackathon-orange)
# 🌾 Agrochain-HTS

AgroToken is a utility token built on the Hedera Token Service (HTS), designed to represent real agricultural value. It helps farmers tokenize harvests, inputs, and community support in a decentralized and verifiable way.

---

## 📁 Project Structure
---

## 📚 Table of Contents

- [Features](#-features)
- [How It Works](#-how-it-works)
- [Demo](#-demo)
- [About Us](#-about-us)
- [Team Members](#-team-members)
- [Tech Stack](#-tech-stack)
- [Token Specification](#-agrotoken-specification-hts)
- [Tokenomics](#-agrotoken-tokenomics)
- [Roadmap](#-agrochain-project-roadmap)
- [Contact Info](#-contact-info)
- [License](#-license)

---

## 🔧 Features

- 🌱 HTS Token Creation (AgroToken)
- 🔁 Transfer Simulation / Distribution
- 🔐 Transparency in local cooperatives
- 📈 Expandable via EVM contracts

---

## 💡 How It Works

1. Farmers get AgroTokens for every harvest registered
2. Tokens can be used in the local market or redeemed
3. Future smart contracts will control rewards, savings, and loans

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Binkado2014/Agrochain-hts.git
   cd Agrochain-htsgit checkout sonic-integration

## 📹 Demo  
[Watch on YouTube](https://youtube.com/shorts/H2ztwOlKZyw?si=EzqHHky9Vx_OpDov)

---

## 🌍 About Us

We are a grassroots tech-agro innovation team based in Katsina, Nigeria, committed to transforming agriculture through decentralized and inclusive technology. Our journey started with educating over 3,000 people about Web3 and Pi Network, and now we're expanding into practical tools using Hedera Hashgraph and other blockchain technologies.

---

## 👥 Team Members

### 1. Nura Muhammad Hassan
- 📍 Role: Field Lead / Community Organizer  
- 🔗 Telegram: [@hassannura](https://t.me/hassannura)

### 2. Muhammadu Ado Duwan
- 📍 Role: Tech Support / Outreach Coordinator  
- 🔗 Telegram: [@Muhdwakili](https://t.me/Muhdwakili)

### 3. Jeffumista
- 📍 Role: Research & Documentation  
- 🔗 Telegram: *Coming soon...*

---

## 💻 Tech Stack

- Hedera HTS
- Optional: EVM / Solidity
- GitHub + DoraHacks + YouTube

---

## 🔗 Token Specification (HTS)

**Overview:**  
AgroToken is a utility and reward token designed to power Agrochain's ecosystem on Hedera. It uses the Hedera Token Service (HTS) for minting, transferring, and burning.

### Token Details:

- **Token Name:** AgroToken  
- **Symbol:** AGRO  
- **Type:** Fungible Token (HTS)  
- **Decimals:** 2  
- **Initial Supply:** 1,000,000 AGRO  
- **Max Supply:** 10,000,000 AGRO (mintable)  
  **Treasury Account:** `0.0.9341135`
- **Admin Key:** Held by Agrochain Team  
- **Supply Key:** Controlled by Governance contract (future)

### Token Logic:

- **Minting:** Admin can mint up to max supply.  
- **Burning:** Users can burn unused AGRO to reduce supply.  
- **Transfer:** P2P and platform-based transfers enabled.

### Use Cases:

1. Rewarding farmers for verified produce  
2. Discount on agro inputs via partners  
3. Loyalty system for long-term users  
4. Access to premium services in future Agrochain dApp

---

## 💰 AgroToken Tokenomics

AgroToken is a utility token designed to support agricultural value chain incentives, traceability, and digital inclusion across farming communities.

### Token Supply

- **Total Supply:** 100,000,000 AGT  
- **Decimals:** 8  
- **Mintable:** No  
- **Burnable:** Yes (via smart contract upgrade if needed)

### Allocation

| Category              | Allocation | Description |
|-----------------------|------------|-------------|
| Community Rewards     | 40%        | Distributed to farmers, partners, and contributors |
| Team & Founders       | 20%        | Locked for 1 year, then vested monthly for 24 months |
| Partnerships & Grants | 15%        | For collaborations and hackathons |
| Liquidity Reserve     | 15%        | For exchanges and utility pools |
| Operations & Treasury | 10%        | For sustainability, audits, and future development |

### Future Upgrade Plans

- Bridge to EVM for DeFi  
- DAO governance integration  
- Staking & liquidity pools  

---

## 🗺️ Agrochain Project Roadmap

### ✅ Phase 1: MVP Development (July 2025)

- Setup GitHub Repo & Folder Structure  
- HTS Token Spec Drafting  
- Demo Video & Submission for Hackathons  

### 🚧 Phase 2: Testing & Feedback (Aug–Sep 2025)

- Simulate farming token use in controlled environment  
- Launch mock campaigns with community  
- Gather feedback from early testers  

### 🚀 Phase 3: Pilot Deployment (Oct–Nov 2025)

- Deploy AgroToken on Hedera Testnet  
- Partner with 1–2 real farming groups  
- Introduce Mobile Access and Data Collection tools  

### 🌍 Phase 4: DAO & Community Layer (Late 2025–2026)

- Develop on-chain DAO voting for community proposals  
- Launch educational training for token holders  
- Explore inter-chain integration using EVM-compatible bridges  

---

## 📞 Contact Info

**Project Lead:** Abdulkadir Muhammed Gidado  
- 📧 Email: amgk3hotline@gmail.com  
- 🐦 Twitter: [@Amg_k3Hub](https://twitter.com/Amg_k3Hub)  
- 💬 Telegram: [@AMG_K3HUB1](https://t.me/AMG_K3HUB1)

**Organization:** Bin Kado Agro Pro Enterprises  
- 🌍 Location: Dutsin Safe Low-Cost, Katsina, Nigeria  
- 📱 Phone: +234 803 557 9935

---

## 🧾 License  

This project is licensed under the [MIT License](./LICENSE).  
© 2025 Binkado2014 — All rights reserved.
