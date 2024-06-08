declare module '@woocommerce/types' {
    import {ReactNode} from "react";
    import {BillingAddress, ShippingAddress} from "@woocommerce/settings";

    export interface Currency {
        /**
         * ISO 4217 Currency Code
         */
        code: CurrencyCode;
        /**
         * String which separates the decimals from the integer
         */
        decimalSeparator: string;
        /**
         * @todo Description of this currently unknown
         */
        minorUnit: number;
        /**
         * String to prefix the currency with.
         *
         * This property is generally exclusive with `suffix`.
         */
        prefix: string;
        /**
         * String to suffix the currency with.
         *
         * This property is generally exclusive with `prefix`.
         */
        suffix: string;
        /**
         * Currency symbol
         */
        symbol: string; // @todo create a list of allowed currency symbols
        /**
         * String which separates the thousands
         */
        thousandSeparator: string;
    }

    export interface CurrencyResponse {
        currency_code: CurrencyCode;
        currency_symbol: string;
        currency_minor_unit: number;
        currency_decimal_separator: string;
        currency_thousand_separator: string;
        currency_prefix: string;
        currency_suffix: string;
    }

    export type SymbolPosition = 'left' | 'left_space' | 'right' | 'right_space';

    export type CurrencyCode =
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BRL'
        | 'BSD'
        | 'BTC'
        | 'BTN'
        | 'BWP'
        | 'BYR'
        | 'BYN'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GGP'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'IMP'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'IRT'
        | 'ISK'
        | 'JEP'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MRU'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PRB'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SRD'
        | 'SSP'
        | 'STN'
        | 'SYP'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'UYU'
        | 'UZS'
        | 'VEF'
        | 'VES'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XCD'
        | 'XOF'
        | 'XPF'
        | 'YER'
        | 'ZAR'
        | 'ZMW';

    export interface CartResponseTotalsItem extends CurrencyResponse {
        total_discount: string;
        total_discount_tax: string;
    }

    export interface CartResponseCouponItem {
        code: string;
        discount_type: string;
        totals: CartResponseTotalsItem;
    }

    export interface CartResponseCouponItemWithLabel
        extends CartResponseCouponItem {
        label: string;
    }

    export type CartResponseCoupons = CartResponseCouponItemWithLabel[];

    export interface ResponseFirstNameLastName {
        first_name: string;
        last_name: string;
    }

    export interface ResponseBaseAddress {
        address_1: string;
        address_2: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
    }

    export interface ShippingRateItem {
        key: string;
        name: string;
        quantity: number;
    }

    export interface MetaKeyValue {
        key: string;
        value: string;
    }

    export type ExtensionsData =
        | Record<string, unknown>
        | Record<string, never>;

    export interface CartResponseShippingPackageShippingRate
        extends CurrencyResponse {
        rate_id: string;
        name: string;
        description: string;
        delivery_time: string;
        price: string;
        taxes: string;
        instance_id: number;
        method_id: string;
        meta_data: Array<MetaKeyValue>;
        selected: boolean;
    }

    export interface CartResponseShippingRate {
        /* PackageId can be a string, WooCommerce Subscriptions uses strings for example, but WooCommerce core uses numbers */
        package_id: number | string;
        name: string;
        destination: ResponseBaseAddress;
        items: Array<ShippingRateItem>;
        shipping_rates: Array<CartResponseShippingPackageShippingRate>;
    }

    export interface CartResponseShippingAddress
        extends ResponseBaseAddress,
            ResponseFirstNameLastName {
        company: string;
        phone: string;
    }

    export interface CartResponseBillingAddress
        extends CartResponseShippingAddress {
        email: string;
    }

    export interface CartResponseImageItem {
        id: number;
        src: string;
        thumbnail: string;
        srcset: string;
        sizes: string;
        name: string;
        alt: string;
    }

    export interface CartResponseVariationItem {
        attribute: string;
        value: string;
    }

    export interface CartResponseItemPrices extends CurrencyResponse {
        price: string;
        regular_price: string;
        sale_price: string;
        price_range: null | { min_amount: string; max_amount: string };
        raw_prices: {
            precision: number;
            price: string;
            regular_price: string;
            sale_price: string;
        };
    }

    export interface CartResponseItemTotals extends CurrencyResponse {
        line_subtotal: string;
        line_subtotal_tax: string;
        line_total: string;
        line_total_tax: string;
    }

    export type CartResponseItem = CartItem;

    export interface CartResponseTotalsTaxLineItem {
        name: string;
        price: string;
        rate: string;
    }

    export interface CartResponseFeeItemTotals extends CurrencyResponse {
        total: string;
        total_tax: string;
    }

    export type CartResponseFeeItem = {
        id: string;
        name: string;
        totals: CartResponseFeeItemTotals;
    };

    export interface CartResponseTotals extends CurrencyResponse {
        total_items: string;
        total_items_tax: string;
        total_fees: string;
        total_fees_tax: string;
        total_discount: string;
        total_discount_tax: string;
        total_shipping: string;
        total_shipping_tax: string;
        total_price: string;
        total_tax: string;
        tax_lines: Array<CartResponseTotalsTaxLineItem>;
    }

    export interface CartResponseErrorItem {
        code: string;
        message: string;
    }

    export interface CartResponseExtensionItem {
        [key: string]: unknown;
    }

    export interface CartResponse {
        coupons: Array<CartResponseCouponItem>;
        shipping_rates: Array<CartResponseShippingRate>;
        shipping_address: CartResponseShippingAddress;
        billing_address: CartResponseBillingAddress;
        items: Array<CartResponseItem>;
        items_count: number;
        items_weight: number;
        cross_sells: Array<ProductResponseItem>;
        needs_payment: boolean;
        needs_shipping: boolean;
        has_calculated_shipping: boolean;
        fees: Array<CartResponseFeeItem>;
        totals: CartResponseTotals;
        errors: Array<CartResponseErrorItem>;
        payment_methods: string[];
        payment_requirements: string[];
        extensions: ExtensionsData;
    }

    // This is the standard API response data when an error is returned.
    export type ApiErrorResponse = {
        code: string;
        message: string;
        data?: ApiErrorResponseData | undefined;
    };

// API errors contain data with the status, and more in-depth error details. This may be null.
    export type ApiErrorResponseData = {
        status: number;
        params: Record<string, string>;
        details: Record<string, ApiErrorResponseDataDetails>;
        // Some endpoints return cart data to update the client.
        cart?: CartResponse | undefined;
    } | null;

// The details object lists individual errors for each field.
    export type ApiErrorResponseDataDetails = {
        code: string;
        message: string;
        data: ApiErrorResponseData;
        additional_errors: ApiErrorResponse[];
    };

    export interface CheckoutResponseSuccess {
        billing_address: BillingAddress;
        customer_id: number;
        customer_note: string;
        extensions: Record<string, unknown>;
        order_id: number;
        order_key: string;
        payment_method: string;
        payment_result: {
            payment_details: Record<string, string> | Record<string, never>;
            payment_status: 'success' | 'failure' | 'pending' | 'error';
            redirect_url: string;
        };
        shipping_address: ShippingAddress;
        status: string;
    }

    export type CheckoutResponseError = ApiErrorResponse;

    export type CheckoutResponse = CheckoutResponseSuccess | CheckoutResponseError;

    export type ObjectType = Record<string, unknown>;
    export type EmptyObjectType = Record<string, never>;

    /**
     * The shape of objects on the `globalPaymentMethods` object from `allSettings`.
     */
    export interface GlobalPaymentMethod {
        id: string | number;
        title: string;
        description: string;
    }

    export interface SupportsConfiguration {
        showSavedCards?: boolean;
        showSaveOption?: boolean;
        features?: string[];
        // Deprecated, in favour of showSavedCards and showSaveOption
        savePaymentInfo?: boolean;
    }

// we assign a value in the class for supports.features
    export interface Supports extends SupportsConfiguration {
        features: string[];
    }

    export interface CanMakePaymentArgument {
        cart: CanMakePaymentArgumentCart;
        cartTotals: CartTotals;

        cartNeedsShipping: boolean;
        billingData: CartResponseBillingAddress; // This needs to stay as billingData as third parties already use this key
        shippingAddress: CartResponseShippingAddress;
        billingAddress: CartResponseBillingAddress;
        selectedShippingMethods: Record<string, unknown>;
        paymentRequirements: string[];
        paymentMethods: string[];
    }

    export interface CanMakePaymentArgumentCart {
        billingAddress: CartResponse[ 'billing_address' ];
        billingData: CartResponse[ 'billing_address' ];
        cartCoupons: CartResponse[ 'coupons' ];
        cartErrors: ApiErrorResponse[];
        cartFees: CartResponse[ 'fees' ];
        cartHasCalculatedShipping: CartResponse[ 'has_calculated_shipping' ];
        cartIsLoading: boolean;
        cartItemErrors: CartResponse[ 'errors' ];
        cartItems: CartResponse[ 'items' ];
        cartItemsCount: CartResponse[ 'items_count' ];
        cartItemsWeight: CartResponse[ 'items_weight' ];
        cartNeedsPayment: CartResponse[ 'needs_payment' ];
        cartNeedsShipping: CartResponse[ 'needs_shipping' ];
        cartTotals: CartResponse[ 'totals' ];
        extensions: CartResponse[ 'extensions' ];
        crossSellsProducts: CartResponse[ 'cross_sells' ];
        isLoadingRates: boolean;
        paymentRequirements: CartResponse[ 'payment_requirements' ];
        receiveCart: (response: CartResponse) => void;
        shippingAddress: CartResponse[ 'shipping_address' ];
        shippingRates: CartResponse[ 'shipping_rates' ];
    }

    export type CanMakePaymentReturnType =
        | boolean
        | Promise<boolean | { error: { message: string } }>;

    export type CanMakePaymentCallback = (
        cartData: CanMakePaymentArgument
    ) => CanMakePaymentReturnType;

    export type CanMakePaymentExtensionCallback = (
        cartData: CanMakePaymentArgument
    ) => boolean;

    export interface PaymentMethodIcon {
        id: string;
        src: string | null;
        alt: string;
    }

    export type PaymentMethodIcons = (PaymentMethodIcon | string)[];

    export interface CorePaymentMethodConfiguration {
        // A unique string to identify the payment method client side.
        name: string;
        // A react node for your payment method UI.
        content: ReactNode;
        // A react node to display a preview of your payment method in the editor.
        edit: ReactNode;
        // A callback to determine whether the payment method should be shown in the checkout.
        canMakePayment: CanMakePaymentCallback;
        // A unique string to represent the payment method server side. If not provided, defaults to name.
        paymentMethodId?: string;
        // Object that describes various features provided by the payment method.
        supports: SupportsConfiguration;
        // Array of card types (brands) supported by the payment method.
        icons?: null | PaymentMethodIcons;
        // A react node that will be used as a label for the payment method in the checkout.
        label: ReactNode;
        // An accessibility label. Screen readers will output this label when the payment method is selected.
        ariaLabel: string;
        // Optionally customize the label text for the checkout submit (`Place Order`) button.
        placeOrderButtonLabel?: string;
        // A React node that contains logic handling any processing your payment method has to do with saved payment methods if your payment method supports them
        savedTokenComponent?: ReactNode | null;
    }

    export type ExpressPaymentMethodConfiguration = Omit<
        CorePaymentMethodConfiguration,
        'icons' | 'label' | 'ariaLabel' | 'placeOrderButtonLabel'
    >;

    export interface PaymentResult {
        message: string;
        paymentStatus:
            | CheckoutResponseSuccess[ 'payment_result' ][ 'payment_status' ]
            | 'not set';
        paymentDetails: Record<string, string> | Record<string, never>;
        redirectUrl: string;
    }

    export interface ProductResponseItemPrices extends CurrencyResponse {
        price: string;
        regular_price: string;
        sale_price: string;
        price_range: null | { min_amount: string; max_amount: string };
    }

    export interface ProductResponseItemBaseData {
        value: string;
        display?: string;
        hidden?: boolean;
        className?: string;
    }

    export type ProductResponseItemData = ProductResponseItemBaseData &
        ({ key: string; name?: never } | { key?: never; name: string });

    export interface ProductResponseImageItem {
        id: number;
        src: string;
        thumbnail: string;
        srcset: string;
        sizes: string;
        name: string;
        alt: string;
    }

    export interface ProductResponseTermItem {
        default?: boolean;
        id: number;
        name: string;
        slug: string;
        link?: string;
    }

    export interface ProductResponseAttributeItem {
        id: number;
        name: string;
        taxonomy: string;
        has_variations: boolean;
        terms: Array<ProductResponseTermItem>;
    }

    export interface ProductResponseVariationsItem {
        id: number;
        attributes: Array<ProductResponseVariationAttributeItem>;
    }

    export interface ProductResponseVariationAttributeItem {
        name: string;
        value: string;
    }

    export interface ProductResponseItem {
        id: number;
        name: string;
        parent: number;
        type: string;
        variation: string;
        permalink: string;
        sku: string;
        short_description: string;
        description: string;
        on_sale: boolean;
        prices: ProductResponseItemPrices;
        price_html: string;
        average_rating: string;
        review_count: number;
        images: Array<ProductResponseImageItem>;
        categories: Array<ProductResponseTermItem>;
        tags: Array<ProductResponseTermItem>;
        attributes: Array<ProductResponseAttributeItem>;
        variations: Array<ProductResponseVariationsItem>;
        has_options: boolean;
        is_purchasable: boolean;
        is_in_stock: boolean;
        is_on_backorder: boolean;
        low_stock_remaining: null | number;
        sold_individually: boolean;
        add_to_cart: {
            text: string;
            description: string;
            url: string;
            minimum: number;
            maximum: number;
            multiple_of: number;
        };
        slug: string;
    }

    export interface CurrencyInfo {
        currency_code: CurrencyCode;
        currency_symbol: string;
        currency_minor_unit: number;
        currency_decimal_separator: string;
        currency_thousand_separator: string;
        currency_prefix: string;
        currency_suffix: string;
    }

    export interface CartTotalsItem extends CurrencyInfo {
        total_discount: string;
        total_discount_tax: string;
    }

    export interface CartCouponItem {
        code: string;
        label: string;
        discount_type: string;
        totals: CartTotalsItem;
    }

    export interface FirstNameLastName {
        first_name: string;
        last_name: string;
    }

    export interface BaseAddress {
        address_1: string;
        address_2: string;
        city: string;
        state: string;
        postcode: string;
        country: string;
    }

    export interface CartShippingPackageShippingRate extends CurrencyInfo {
        rate_id: string;
        name: string;
        description: string;
        delivery_time: string;
        price: string;
        taxes: string;
        instance_id: number;
        method_id: string;
        meta_data: Array<MetaKeyValue>;
        selected: boolean;
    }

    export interface CartShippingRate {
        package_id: string | number;
        name: string;
        destination: BaseAddress;
        items: Array<ShippingRateItem>;
        shipping_rates: Array<CartShippingPackageShippingRate>;
    }

    export interface CartShippingAddress extends BaseAddress, FirstNameLastName {
        company: string;
        phone: string;
    }

    export interface CartBillingAddress extends CartShippingAddress {
        email: string;
    }

    export interface CartImageItem {
        id: number;
        src: string;
        thumbnail: string;
        srcset: string;
        sizes: string;
        name: string;
        alt: string;
    }

    export interface CartVariationItem {
        attribute: string;
        value: string;
    }

    export interface CartItemPrices extends CurrencyInfo {
        price: string;
        regular_price: string;
        sale_price: string;
        price_range: null | { min_amount: string; max_amount: string };
        raw_prices: {
            precision: number;
            price: string;
            regular_price: string;
            sale_price: string;
        };
    }

    export interface CartItemTotals extends CurrencyInfo {
        line_subtotal: string;
        line_subtotal_tax: string;
        line_total: string;
        line_total_tax: string;
    }

    export type CatalogVisibility = 'catalog' | 'hidden' | 'search' | 'visible';

    export interface CartItem {
        key: string;
        id: number;
        type: string;
        quantity: number;
        catalog_visibility: CatalogVisibility;
        quantity_limits: {
            minimum: number;
            maximum: number;
            multiple_of: number;
            editable: boolean;
        };
        name: string;
        summary: string;
        short_description: string;
        description: string;
        sku: string;
        low_stock_remaining: null | number;
        backorders_allowed: boolean;
        show_backorder_badge: boolean;
        sold_individually: boolean;
        permalink: string;
        images: Array<CartImageItem>;
        variation: Array<CartVariationItem>;
        prices: CartItemPrices;
        totals: CartItemTotals;
        extensions: ExtensionsData;
        item_data: ProductResponseItemData[];
    }

    export interface CartTotalsTaxLineItem {
        name: string;
        price: string;
        rate: string;
    }

    export interface CartFeeItemTotals extends CurrencyInfo {
        total: string;
        total_tax: string;
    }

    export interface CartFeeItem {
        key: string;
        id: string;
        name: string;
        totals: CartFeeItemTotals;
    }

    export interface CartTotals extends CurrencyInfo {
        total_items: string;
        total_items_tax: string;
        total_fees: string;
        total_fees_tax: string;
        total_discount: string;
        total_discount_tax: string;
        total_shipping: string;
        total_shipping_tax: string;
        total_price: string;
        total_tax: string;
        tax_lines: Array<CartTotalsTaxLineItem>;
    }

    export interface CartErrorItem {
        code: string;
        message: string;
    }

    export interface Cart extends Record<string, unknown> {
        coupons: Array<CartCouponItem>;
        shippingRates: Array<CartShippingRate>;
        shippingAddress: CartShippingAddress;
        billingAddress: CartBillingAddress;
        items: Array<CartItem>;
        itemsCount: number;
        itemsWeight: number;
        crossSells: Array<ProductResponseItem>;
        needsPayment: boolean;
        needsShipping: boolean;
        hasCalculatedShipping: boolean;
        fees: Array<CartFeeItem>;
        totals: CartTotals;
        errors: Array<CartErrorItem>;
        paymentMethods: Array<string>;
        paymentRequirements: Array<string>;
        extensions: ExtensionsData;
    }

    export interface CartMeta {
        updatingCustomerData: boolean;
        updatingSelectedRate: boolean;
        isCartDataStale: boolean;
        applyingCoupon: string;
        removingCoupon: string;
    }

    export interface ExtensionCartUpdateArgs {
        data: Record<string, unknown>;
        namespace: string;
    }

    export interface BillingAddressShippingAddress {
        billing_address: Partial<CartBillingAddress>;
        shipping_address: Partial<CartShippingAddress>;
    }
}