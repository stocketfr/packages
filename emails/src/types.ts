export const EMAIL_LOCALES = ['en', 'fr', 'de'] as const;

export type EmailLocale = (typeof EMAIL_LOCALES)[number];

export type EmailTemplate =
  | { readonly kind: 'verify-email'; readonly userName: string; readonly actionUrl: string }
  | { readonly kind: 'reset-password'; readonly userName: string; readonly actionUrl: string }
  | { readonly kind: 'welcome-set-password'; readonly userName: string; readonly actionUrl: string }
  | {
      readonly kind: 'low-stock';
      readonly userName?: string;
      readonly sku: string;
      readonly productName: string;
      readonly locationName: string;
      readonly quantity: number;
      readonly reorderPoint: number;
    };

export interface RenderedEmail {
  readonly subject: string;
  readonly html: string;
  readonly text: string;
}

export interface RenderOptions {
  readonly brandName?: string;
}
