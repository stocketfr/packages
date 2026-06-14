export interface ActionEmailStrings {
  readonly subject: (brand: string) => string;
  readonly preview: string;
  readonly heading: string;
  readonly body: (brand: string) => string;
  readonly button: string;
}

export interface LowStockEmailStrings {
  readonly subject: (brand: string) => string;
  readonly preview: string;
  readonly heading: string;
  readonly body: (
    productName: string,
    sku: string,
    locationName: string,
    quantity: number,
    reorderPoint: number,
  ) => string;
  readonly reorderPrompt: string;
}

export interface CommonStrings {
  readonly greeting: (name: string) => string;
  readonly ignoreNotice: string;
  readonly linkFallback: string;
  readonly signature: (brand: string) => string;
}

export interface EmailStrings {
  readonly common: CommonStrings;
  readonly 'verify-email': ActionEmailStrings;
  readonly 'reset-password': ActionEmailStrings;
  readonly 'welcome-set-password': ActionEmailStrings;
  readonly 'low-stock': LowStockEmailStrings;
}
