import { render, toPlainText } from '@react-email/render';
import { stringsByLocale } from './i18n/index';
import { ActionEmail } from './templates/action-email';
import { LowStockEmail } from './templates/low-stock-email';
import type { EmailLocale, EmailTemplate, RenderedEmail, RenderOptions } from './types';

export const DEFAULT_BRAND_NAME = 'Stocket';

export async function renderEmail(
  template: EmailTemplate,
  locale: EmailLocale,
  options?: RenderOptions,
): Promise<RenderedEmail> {
  const strings = stringsByLocale[locale];
  const brandName = options?.brandName ?? DEFAULT_BRAND_NAME;
  const element =
    template.kind === 'low-stock'
      ? LowStockEmail({
          strings: strings[template.kind],
          common: strings.common,
          brandName,
          userName: template.userName,
          productName: template.productName,
          sku: template.sku,
          locationName: template.locationName,
          quantity: template.quantity,
          reorderPoint: template.reorderPoint,
          lang: locale,
        })
      : ActionEmail({
          strings: strings[template.kind],
          common: strings.common,
          brandName,
          userName: template.userName,
          actionUrl: template.actionUrl,
          lang: locale,
        });

  // toPlainText derives the text part from the rendered HTML — same output as
  // render(element, { plainText: true }) without a second React render pass.
  const html = await render(element);
  const text = toPlainText(html);

  return { subject: strings[template.kind].subject(brandName), html, text };
}
