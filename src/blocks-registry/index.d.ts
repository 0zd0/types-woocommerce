declare module '@woocommerce/blocks-registry' {
    import {CorePaymentMethodConfiguration, ExpressPaymentMethodConfiguration} from "@woocommerce/types";

    export function registerExpressPaymentMethod(options: ExpressPaymentMethodConfiguration): void;
    export function registerPaymentMethod(options: CorePaymentMethodConfiguration): void;
}