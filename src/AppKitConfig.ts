import { createAppKit } from '@reown/appkit/react'
import { StacksAdapter } from '@reown/appkit-adapter-stacks'
import { stacks, stacksTestnet } from '@reown/appkit/networks'

export const projectId = '180a7164cfa9e5388daf1160841f65a0'

export const appKit = createAppKit({
  adapters: [new StacksAdapter()],
  networks: [stacks, stacksTestnet],
  projectId,
  metadata: {
    name: 'Heritage Vault',
    description: 'Secure your STX Legacy',
    url: 'https://heritage.stx',
    icons: ['https://cryptologos.cc/logos/stacks-stx-logo.png']
  },
  features: {
    email: true, // WalletKit Email login for non-crypto heirs
    socials: ['google', 'apple'],
    analytics: true
  }
})
