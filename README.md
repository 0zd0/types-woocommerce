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
import { getSetting } from '@woocommerce/settings'
import type {
    PaymentMethodBaseProps,
    PaymentMethodConfiguration,
    PaymentMethodProps,
} from '@woocommerce/types/payments'
import { decodeEntities } from '@wordpress/html-entities'
import * as React from 'react'

type Settings = {
    title: string
    description: string
    supports: string[]
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.wc || !window.wc.wcBlocksRegistry || !window.wc.wcSettings)
        return
    const PAYMENT_METHOD_NAME = window.TOKENPAY_SETTINGS.gatewayId
    const settings = getSetting<Partial<Settings>>(
        `${PAYMENT_METHOD_NAME}_data`,
        {},
    )
    const title = decodeEntities(settings.title ?? '')
    const description = decodeEntities(settings.description ?? '')

    const Label: React.FC<PaymentMethodBaseProps> = ({ components }) => {
        const { PaymentMethodLabel } = components
        return (
            <PaymentMethodLabel
                icon={''}
                text={title}
            />
        )
    }

    const Content: React.FC<PaymentMethodProps> = () => {
        return <div>{description}</div>
    }

    const paymentMethod: PaymentMethodConfiguration = {
        ariaLabel: title,
        canMakePayment: () => true,
        content: React.createElement(Content),
        edit: React.createElement(Content),
        label: React.createElement(Label),
        name: PAYMENT_METHOD_NAME,
        supports: {
            features: settings.supports,
        },
    }
    registerPaymentMethod(paymentMethod)
})

```

## Vite
To replace these aliases in vite, use the [rollup-plugin-woocommerce-dependency-extraction](https://www.npmjs.com/package/rollup-plugin-woocommerce-dependency-extraction) plugin