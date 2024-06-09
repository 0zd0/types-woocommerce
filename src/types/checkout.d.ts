declare module '@woocommerce/types/checkout' {
    import type { BillingAddress, ShippingAddress } from '@woocommerce/settings'
    import type { ApiErrorResponse } from '@woocommerce/types/api'

    export interface CheckoutResponseSuccess {
        billing_address: BillingAddress
        customer_id: number
        customer_note: string
        extensions: Record<string, unknown>
        order_id: number
        order_key: string
        payment_method: string
        payment_result: {
            payment_details: Record<string, string> | Record<string, never>
            payment_status: 'success' | 'failure' | 'pending' | 'error'
            redirect_url: string
        }
        shipping_address: ShippingAddress
        status: string
    }

    export type CheckoutResponseError = ApiErrorResponse

    export type CheckoutResponse =
        | CheckoutResponseSuccess
        | CheckoutResponseError
}
