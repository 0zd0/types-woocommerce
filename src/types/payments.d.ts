declare module '@woocommerce/types/payments' {
    import type {
        CartResponse,
        CartResponseBillingAddress,
        CartResponseShippingAddress,
        CartTotals,
    } from '@woocommerce/types/cart'
    import type { ApiErrorResponse } from '@woocommerce/types/api'
    import type {
        PaymentMethodInterface,
        PaymentMethodBaseInterface,
    } from '@woocommerce/types/payment-method'
    import type { ReactNode, FunctionComponentElement } from 'react'
    import type { CheckoutResponseSuccess } from '@woocommerce/types/checkout'
    import type { EmptyObjectType } from '@woocommerce/types/objects'

    export const STORE_KEY = 'wc/store/payment'

    export enum STATUS {
        IDLE = 'idle',
        EXPRESS_STARTED = 'express_started',
        PROCESSING = 'processing',
        READY = 'ready',
        ERROR = 'has_error',
    }

    /**
     * The shape of objects on the `globalPaymentMethods` object from `allSettings`.
     */
    export interface GlobalPaymentMethod {
        id: string | number
        title: string
        description: string
    }

    export interface SupportsConfiguration {
        showSavedCards?: boolean
        showSaveOption?: boolean
        features?: string[]
        // Deprecated, in favour of showSavedCards and showSaveOption
        savePaymentInfo?: boolean
    }

    // we assign a value in the class for supports.features
    export interface Supports extends SupportsConfiguration {
        features: string[]
    }

    export interface CanMakePaymentArgument {
        cart: CanMakePaymentArgumentCart
        cartTotals: CartTotals
        cartNeedsShipping: boolean
        billingData: CartResponseBillingAddress // This needs to stay as billingData as third parties already use this key
        shippingAddress: CartResponseShippingAddress
        billingAddress: CartResponseBillingAddress
        selectedShippingMethods: Record<string, unknown>
        paymentRequirements: string[]
        paymentMethods: string[]
    }

    export interface CanMakePaymentArgumentCart {
        billingAddress: CartResponse['billing_address']
        billingData: CartResponse['billing_address']
        cartCoupons: CartResponse['coupons']
        cartErrors: ApiErrorResponse[]
        cartFees: CartResponse['fees']
        cartHasCalculatedShipping: CartResponse['has_calculated_shipping']
        cartIsLoading: boolean
        cartItemErrors: CartResponse['errors']
        cartItems: CartResponse['items']
        cartItemsCount: CartResponse['items_count']
        cartItemsWeight: CartResponse['items_weight']
        cartNeedsPayment: CartResponse['needs_payment']
        cartNeedsShipping: CartResponse['needs_shipping']
        cartTotals: CartResponse['totals']
        extensions: CartResponse['extensions']
        crossSellsProducts: CartResponse['cross_sells']
        isLoadingRates: boolean
        paymentRequirements: CartResponse['payment_requirements']
        receiveCart: (response: CartResponse) => void
        shippingAddress: CartResponse['shipping_address']
        shippingRates: CartResponse['shipping_rates']
    }

    export type CanMakePaymentReturnType =
        | boolean
        | Promise<boolean | { error: { message: string } }>

    export type CanMakePaymentCallback = (
        cartData: CanMakePaymentArgument,
    ) => CanMakePaymentReturnType

    export type CanMakePaymentExtensionCallback = (
        cartData: CanMakePaymentArgument,
    ) => boolean

    export interface PaymentMethodIcon {
        id: string
        src: string | null
        alt: string
    }

    export type PaymentMethodIcons = (PaymentMethodIcon | string)[]

    export type PaymentMethodProps = PaymentMethodInterface
    export type PaymentMethodBaseProps = PaymentMethodBaseInterface

    export interface PaymentMethodConfiguration {
        // A unique string to identify the payment method client side.
        name: string
        // A react node for your payment method UI.
        content: FunctionComponentElement<PaymentMethodProps>
        // A react node to display a preview of your payment method in the editor.
        edit: FunctionComponentElement<PaymentMethodProps>
        // A callback to determine whether the payment method should be shown in the checkout.
        canMakePayment: CanMakePaymentCallback
        // A unique string to represent the payment method server side. If not provided, defaults to name.
        paymentMethodId?: string
        // Object that describes various features provided by the payment method.
        supports: SupportsConfiguration
        // Array of card types (brands) supported by the payment method.
        icons?: null | PaymentMethodIcons
        // A react node that will be used as a label for the payment method in the checkout.
        label: FunctionComponentElement<PaymentMethodBaseProps>
        // An accessibility label. Screen readers will output this label when the payment method is selected.
        ariaLabel: string
        // Optionally customize the label text for the checkout submit (`Place Order`) button.
        placeOrderButtonLabel?: string
        // A React node that contains logic handling any processing your payment method has to do with saved payment methods if your payment method supports them
        savedTokenComponent?: ReactNode | null
    }

    export interface PaymentMethodConfigInstance {
        name: string
        content: ReactNode
        edit: ReactNode
        paymentMethodId?: string
        supports: Supports
        icons: null | PaymentMethodIcons
        label: ReactNode
        ariaLabel: string
        placeOrderButtonLabel?: string
        savedTokenComponent?: ReactNode | null
        canMakePaymentFromConfig: CanMakePaymentCallback
        canMakePayment: CanMakePaymentCallback
    }

    export interface ExpressPaymentMethodConfigInstance {
        name: string
        content: ReactNode
        edit: ReactNode
        paymentMethodId?: string
        placeOrderButtonLabel?: string
        supports: Supports
        canMakePaymentFromConfig: CanMakePaymentCallback
        canMakePayment: CanMakePaymentCallback
    }

    export type ExpressPaymentMethodConfiguration = Omit<
        PaymentMethodConfiguration,
        'icons' | 'label' | 'ariaLabel' | 'placeOrderButtonLabel'
    >

    export interface PaymentResult {
        message: string
        paymentStatus:
            | CheckoutResponseSuccess['payment_result']['payment_status']
            | 'not set'
        paymentDetails: Record<string, string> | Record<string, never>
        redirectUrl: string
    }

    export type PaymentMethods =
        | Record<string, PaymentMethodConfigInstance>
        | EmptyObjectType

    export type ExpressPaymentMethods =
        | Record<string, ExpressPaymentMethodConfigInstance>
        | EmptyObjectType
}
