agrochain-hts/
│
├── contracts/                 # For future smart contracts (EVM optional)
├── docs/                      # Tokenomics, flowcharts, future plan
├── media/                     # Images, demo video, logo
├── src/                       # Any frontend MVP code or simulation
│
├── README.md                  # Main hackathon project explanation
├── LICENSE                    # MIT or open-source license
├── .gitignore                 # Files to ignore
└── AgroTokenSpec.md           # HTS token definition + logic
# 🌾 AgroToken - Powered by Hedera HTS 🌿

AgroToken is a utility token built on the Hedera Token Service (HTS), designed to represent real agricultural value. It helps farmers tokenize harvests, inputs, and community support in a decentralized and verifiable way.

## 🔧 Features
- 🌱 HTS Token Creation (AgroToken)
- 🔁 Transfer Simulation / Distribution
- 🔐 Transparency in local cooperatives
- 📈 Expandable via EVM contracts

## 💡 How It Works
1. Farmers get AgroTokens for every harvest registered
2. Tokens can be used in the local market or redeemed
3. Future smart contracts will control rewards, savings, and loans

## 📹 Demo
[YouTube Demo Video](your-link-here)
# AgroToken Specification (HTS)

## Overview
AgroToken is a utility and reward token designed to power Agrochain's ecosystem on Hedera. It uses the Hedera Token Service (HTS) for minting, transferring, and burning.

---

## Token Details

- **Token Name**: AgroToken
- **Symbol**: AGRO
- **Type**: Fungible Token (HTS)
- **Decimals**: 2
- **Initial Supply**: 1,000,000 AGRO
- **Max Supply**: 10,000,000 AGRO (mintable)
- **Treasury Account**: (to be generated)
- **Admin Key**: Held by Agrochain Team
- **Supply Key**: Controlled by Governance contract (future)

---

## Token Logic

- **Minting**: Admin can mint up to max supply.
- **Burning**: Users can burn unused AGRO to reduce supply.
- **Transfer**: P2P and platform-based transfers enabled.

---

## Use Cases

1. Rewarding farmers for verified produce
2. Discount on agro inputs via partners
3. Loyalty system for long-term users
4. Access to premium services in future Agrochain dApp

---

## Future Upgrade Plans

- Bridge to EVM for DeFi
- DAO governance integration
- Staking & liquidity pools
## 💻 Tech Stack
- Hedera HTS
- Optional: EVM / Solidity
- GitHub + DoraHacks + YouTube

## 📚 Future Plan
- Real token deployment on Hedera
- Farmer wallet
- Marketplaces for input/output trade

## 🔗 Useful Links
- GitHub Repo
- Project Twitter Thread
- TokenSpec Document
