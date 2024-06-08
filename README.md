# types-woocommerce

Install:

```bash
bun install types-woocommerce -D
```

## tsconfig.json
```json
{
  "include": ["src", "node_modules/types-woocommerce"]
}
```

## Usage example
```tsx
import { registerPaymentMethod } from '@woocommerce/blocks-registry'
import type { CanMakePaymentReturnType } from '@woocommerce/types'

const create = {
    ariaLabel: '',
    canMakePayment(): CanMakePaymentReturnType {
        return true
    },
    content: <div>A react node</div>,
    edit: <div>A React node</div>,
    label: <div>A React node</div>,
    name: 'gatewayId',
    supports: {
        features: ['products'],
    },
}

document.addEventListener('DOMContentLoaded', function () {
    registerPaymentMethod(create)
})
```

## Vite
To replace these aliases in vite, use the [rollup-plugin-woocommerce-dependency-extraction](https://www.npmjs.com/package/rollup-plugin-woocommerce-dependency-extraction) plugin