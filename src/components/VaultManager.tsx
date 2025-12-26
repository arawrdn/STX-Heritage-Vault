import { useAppKitAccount, useAppKitProvider } from '@reown/appkit/react'
import { openContractCall } from '@stacks/connect'
import { StacksMainnet } from '@stacks/network'

export default function VaultManager() {
  const { address, isConnected } = useAppKitAccount()
  
  const handleHeartbeat = async () => {
    await openContractCall({
      contractAddress: 'SP123...CONTRACT_ADDR',
      contractName: 'heritage-vault',
      functionName: 'heartbeat',
      functionArgs: [],
      network: new StacksMainnet(),
      onFinish: (data) => alert(`Check-in successful! TX: ${data.txId}`),
    });
  }

  return (
    <div className="vault-container">
      {isConnected ? (
        <>
          <h2>Vault Status: Secure 🛡️</h2>
          <p>Connected: {address}</p>
          <button onClick={handleHeartbeat} className="pulse-button">
            Send Heartbeat (Check-in)
          </button>
          <p className="hint">Click every 30 days to reset the inheritance timer.</p>
        </>
      ) : (
        <p>Please connect your wallet to manage your vault.</p>
      )}
    </div>
  )
}
