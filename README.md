# STX Heritage Vault

STX Heritage Vault is a decentralized platform built on the Stacks (STX) blockchain designed to secure, document, and preserve digital cultural heritage. The project leverages blockchain transparency and permanent storage to ensure historical data remains immutable and accessible.

## Key Features

* **Secure Archiving:** Store heritage metadata on-chain using Clarity Smart Contracts.
* **Decentralized Governance:** Voting mechanisms for approving new heritage entries via the VoteManager contract.
* **Contribution Rewards:** Issuance of Soulbound Tokens (SBT) to active contributors through the SBTReward contract.
* **Multi-Wallet Support:** Seamless integration with Hiro, Xverse, and WalletConnect.

## Tech Stack

* **Smart Contracts:** Clarity (Stacks Blockchain)
* **Frontend:** React.js / Vite
* **Blockchain Interaction:** @stacks/connect, @stacks/transactions
* **Wallet Integration:** WalletConnect v2
* **Storage:** IPFS (via Pinata or Web3.Storage)

## Prerequisites

Before starting, ensure you have the following installed:
* Clarinet (for smart contract development and testing)
* Node.js v18 or higher
* Hiro Wallet or Xverse Wallet browser extension

## Roadmap

The STX Heritage Vault aims to grow in key phases:

1. **Smart Contract Audits** – Strengthen security and reliability.
2. **UI/UX Improvements** – More intuitive heritage submission and dashboard.
3. **Multi-Chain Bridges** – Interoperability with Bitcoin layer-2 and other ecosystems.
4. **Community Curators** – DAO-style governance for content curation.
5. **Analytics Dashboard** – Visualization of heritage records & activity.


## Installation and Local Development

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/arawrdn/STX-Heritage-Vault.git](https://github.com/arawrdn/STX-Heritage-Vault.git)
    cd STX-Heritage-Vault
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Configuration**
    Create a `.env` file in the root directory and add the following parameters:
    ```env

4.  **Run the Application**
    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome. Please follow these steps:
1. Fork the project.
2. Create a feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add NewFeature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
