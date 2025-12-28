import { createAppKit } from 'https://esm.sh/@reown/appkit'
import { EthersAdapter } from 'https://esm.sh/@reown/appkit-adapter-ethers'
import { base } from 'https://esm.sh/@reown/appkit/networks'
import { ethers } from 'https://esm.sh/ethers@6.x'

const projectId = 'a5f9260bc9bca570190d3b01f477fc45';
const contractAddress = 'YOUR_DEPLOYED_VAULT_ADDRESS';
const abi = [
    "function deposit() external payable",
    "function withdraw(uint256 _amount) external",
    "function getVaultBalance() external view returns (uint256)"
];

const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [base],
  projectId
});

const vaultUI = document.getElementById('vault-ui');
const balanceEl = document.getElementById('balance');

modal.subscribeAccount(state => {
    if (state.isConnected) {
        vaultUI.classList.remove('hidden');
        refreshBalance();
    } else {
        vaultUI.classList.add('hidden');
    }
});

async function refreshBalance() {
    const provider = new ethers.JsonRpcProvider('https://mainnet.base.org');
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const bal = await contract.getVaultBalance();
    balanceEl.innerText = `${ethers.formatEther(bal)} ETH`;
}

document.getElementById('deposit-btn').onclick = async () => {
    const val = document.getElementById('amount').value;
    const provider = new ethers.BrowserProvider(modal.getWalletProvider());
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    const tx = await contract.deposit({ value: ethers.parseEther(val) });
    await tx.wait();
    refreshBalance();
};

document.getElementById('withdraw-btn').onclick = async () => {
    const val = document.getElementById('amount').value;
    const provider = new ethers.BrowserProvider(modal.getWalletProvider());
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    
    const tx = await contract.withdraw(ethers.parseEther(val));
    await tx.wait();
    refreshBalance();
};
