declare module '@woocommerce/settings' {
    /**
     * External dependencies
     */
    import type { AllHTMLAttributes, AriaAttributes } from 'react'
    import type { CompareOperator } from 'compare-versions'
    import type {
        CurrencyCode,
        SymbolPosition,
    } from '@woocommerce/types/currency'

    // A list of attributes that can be added to a custom field when registering it.
    type CustomFieldAttributes = Pick<
        AllHTMLAttributes<HTMLInputElement>,
        | 'maxLength'
        | 'readOnly'
        | 'pattern'
        | 'title'
        | 'autoCapitalize'
        | 'autoComplete'
    > &
        AriaAttributes

    export interface ComboboxControlOption {
        label: string
        value: string
    }

    export interface FormField {
        // The label for the field.
        label: string
        // The label for the field if made optional.
        optionalLabel: string
        // The HTML autocomplete attribute value. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
        autocomplete: string
        // How this field value is capitalized.
        autocapitalize?: string
        // Set to true if the field is required.
        required: boolean
        // Set to true if the field should not be rendered.
        hidden: boolean
        // Fields will be sorted and render in this order, lowest to highest.
        index: number
        // The type of input to render. Defaults to text.
        type?: string
        // The options if this is a select field
        options?: ComboboxControlOption[]
        // Additional attributes added when registering a field. String in key is required for data attributes.
        attributes?: Record<keyof CustomFieldAttributes, string>
    }

    export interface LocaleSpecificFormField extends Partial<FormField> {
        priority?: number | undefined
    }

    export interface CoreAddressForm {
        first_name: FormField
        last_name: FormField
        company: FormField
        address_1: FormField
        address_2: FormField
        country: FormField
        city: FormField
        state: FormField
        postcode: FormField
        phone: FormField
    }

    export interface CoreContactForm {
        email: FormField
    }

    export type AddressForm = CoreAddressForm & Record<string, FormField>
    export type ContactForm = CoreContactForm & Record<string, FormField>
    export type FormFields = AddressForm & ContactForm
    export type AddressFormValues = Omit<ShippingAddress, 'email'>
    export type ContactFormValues = { email: string }
    export type AdditionalInformationFormValues = Record<string, string>
    export type FormType =
        | 'billing'
        | 'shipping'
        | 'contact'
        | 'additional-information'

    export interface CoreAddress {
        first_name: string
        last_name: string
        company: string
        address_1: string
        address_2: string
        country: string
        city: string
        state: string
        postcode: string
        phone: string
    }

    export type AdditionalValues = Record<
        Exclude<string, keyof CoreAddress>,
        string | boolean
    >

    export type ShippingAddress = CoreAddress
    export interface BillingAddress extends ShippingAddress {
        email: string
    }

    export type KeyedFormField = FormField & {
        key: keyof FormFields
        errorMessage?: string
    }

    export type CountryAddressForm = Record<string, FormFields>

    export type FormFieldsConfig = Record<keyof FormFields, Partial<FormField>>

    export interface WooCommerceSiteCurrency {
        // The ISO code for the currency.
        code: CurrencyCode
        // The precision (decimal places).
        precision: number
        // The symbol for the currency (eg '$')
        symbol: string
        // The position for the symbol ('left', or 'right')
        symbolPosition: SymbolPosition
        // The string used for the decimal separator.
        decimalSeparator: string
        // The string used for the thousands' separator.
        thousandSeparator: string
        // The format string use for displaying an amount in this currency.
        priceFormat: string
    }

    export interface WooCommerceSiteLocale {
        // The locale string for the current site.
        siteLocale: string
        // The locale string for the current user.
        userLocale: string
        // An array of short weekday strings in the current user's locale.
        weekdaysShort: string[]
    }

    export interface WooCommerceSharedSettings {
        adminUrl: string
        countries: Record<string, string> | never[]
        currency: WooCommerceSiteCurrency
        currentUserId: number
        currentUserIsAdmin: boolean
        homeUrl: string
        locale: WooCommerceSiteLocale
        orderStatuses: Record<string, string> | never[]
        placeholderImgSrc: string
        siteTitle: string
        storePages: Record<string, string> | never[]
        wcAssetUrl: string
        wcVersion: string
        wpLoginUrl: string
        wpVersion: string
    }

    /**
     * Returns a string with the site's wp-admin URL appended. JS version of `admin_url`.
     *
     * @param {string} path Relative path.
     * @return {string} Full admin URL.
     */
    export function getAdminLink(path: string): string

    /**
     * Retrieves a setting value from the setting state.
     *
     * If a setting with key `settingName` does not exist or is undefined,
     * the `defaultValue` will be returned instead. An optional `resolveValue`
     * callback can be passed to format the returned value.
     *
     * @param settingName - The name of the setting to retrieve.
     * @param defaultValue - The value to return if the setting is not found.
     * @param resolveValue - A function to format the returned value.
     * @returns The setting value or the default value.
     */
    export function getSetting<T>(
        settingName: string,
        defaultValue?: unknown,
        resolveValue?: (value: unknown, defaultValue: unknown) => unknown,
    ): T

    /**
     * Compare the current WC version with the provided `version` param using the
     * `operator`.
     *
     * For example `isWcVersion( '4.9.0', '<=' )` returns true if the site WC version
     * is smaller or equal than `4.9`.
     */
    export function isWcVersion(
        version: string,
        operator?: CompareOperator,
    ): boolean

    /**
     * Compare the current WP version with the provided `version` param using the
     * `operator`.
     *
     * For example `isWpVersion( '5.6', '<=' )` returns true if the site WP version
     * is smaller or equal than `5.6` .
     */
    export function isWpVersion(
        version: string,
        operator: CompareOperator,
    ): boolean
}
