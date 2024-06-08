declare global {
    interface Window {
        wc?: {
            wcBlocksRegistry?: object;
            blocksCheckout?: object;
            blocksComponents?: object;
            wcBlocksData?: object;
            priceFormat?: object;
            wcSettings?: object;
        };
        wp?: {
            htmlEntities?: object;
            escapeHtml?: object;
            element?: object;
            dom?: object;
            domReady?: object;
            i18n?: object;
        }
    }
}

export {}