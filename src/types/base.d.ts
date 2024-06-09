declare module '@woocommerce/types/base' {
    import type { Dispatch } from 'react'

    export enum responseTypes {
        SUCCESS = 'success',
        FAIL = 'failure',
        ERROR = 'error',
    }

    export enum noticeContexts {
        CART = 'wc/cart',
        CHECKOUT = 'wc/checkout',
        PAYMENTS = 'wc/checkout/payments',
        EXPRESS_PAYMENTS = 'wc/checkout/express-payments',
        CONTACT_INFORMATION = 'wc/checkout/contact-information',
        SHIPPING_ADDRESS = 'wc/checkout/shipping-address',
        BILLING_ADDRESS = 'wc/checkout/billing-address',
        SHIPPING_METHODS = 'wc/checkout/shipping-methods',
        CHECKOUT_ACTIONS = 'wc/checkout/checkout-actions',
        ORDER_INFORMATION = 'wc/checkout/additional-information',
    }

    export enum ACTION {
        ADD_EVENT_CALLBACK = 'add_event_callback',
        REMOVE_EVENT_CALLBACK = 'remove_event_callback',
    }

    export type ActionCallbackType = (...args: unknown[]) => unknown

    export type ActionType = {
        type: ACTION
        eventType: string
        id: string
        callback?: ActionCallbackType
        priority?: number
    }

    type EmitterCallbackType = (
        type: string,
        observerDispatch: Dispatch<ActionType>,
    ) => (callback: ActionCallbackType, priority?: number) => () => void
}
