declare module '@woocommerce/blocks-registry' {
    import type {
        ExpressPaymentMethods,
        PaymentMethods,
    } from '@woocommerce/types/payments'
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

    export function __experimentalDeRegisterPaymentMethod(
        paymentMethodName: string,
    ): void

    export function __experimentalDeRegisterExpressPaymentMethod(
        paymentMethodName: string,
    ): void

    export function getPaymentMethods(): PaymentMethods
    export function getExpressPaymentMethods(): ExpressPaymentMethods
}
