declare module '@woocommerce/blocks-registry' {
    import type {
        ExpressPaymentMethodConfiguration,
        PaymentMethodConfiguration,
    } from '@woocommerce/types/payments'

    export function registerExpressPaymentMethod(
        options: ExpressPaymentMethodConfiguration,
    ): void
    export function registerPaymentMethod(
        options: PaymentMethodConfiguration,
    ): void
}
