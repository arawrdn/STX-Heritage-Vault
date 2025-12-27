# Heritage Vault (Stacks/Bitcoin L2)

A decentralized "Dead Man's Switch" for the Bitcoin ecosystem. Heritage Vault ensures your digital assets aren't lost forever if you lose access to your wallet or pass away.

## Features
- **Non-Custodial**: You retain control. Only the smart contract can move funds, and only if you stop checking in.
- **Time-Locked Recovery**: Uses Stacks `block-height` for immutable timing.
- **AppKit Integration**: Seamlessly connect Xverse, Leather, or use Social Login (via Reown WalletKit) for heirs.

## Technical Setup

### Prerequisites
- Node.js & NPM
- [Clarinet](https://github.com/hirosystems/clarinet) (for Clarity testing)
- Reown Project ID: `180a7164cfa9e5388daf1160841f65a0`

### Installation
```bash
npm install @reown/appkit @reown/appkit-adapter-stacks @stacks/connect
