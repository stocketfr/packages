import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { CommonStrings, LowStockEmailStrings } from '../i18n/index';

export interface LowStockEmailProps {
  readonly strings: LowStockEmailStrings;
  readonly common: CommonStrings;
  readonly brandName: string;
  readonly userName?: string;
  readonly productName: string;
  readonly sku: string;
  readonly locationName: string;
  readonly quantity: number;
  readonly reorderPoint: number;
  readonly lang: string;
}

const body = {
  backgroundColor: '#f4f4f5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  margin: 0,
  padding: '24px 0',
} as const;

const card = {
  backgroundColor: '#ffffff',
  border: '1px solid #e4e4e7',
  borderRadius: '8px',
  margin: '0 auto',
  maxWidth: '480px',
  padding: '32px',
} as const;

const brand = {
  color: '#18181b',
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '0.02em',
  margin: '0 0 24px',
} as const;

const heading = {
  color: '#18181b',
  fontSize: '20px',
  fontWeight: 600,
  margin: '0 0 16px',
} as const;

const paragraph = {
  color: '#3f3f46',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 16px',
} as const;

const alertBox = {
  backgroundColor: '#fef2f2',
  border: '1px solid #fecaca',
  borderRadius: '6px',
  margin: '0 0 16px',
  padding: '16px',
} as const;

const alertText = {
  color: '#991b1b',
  fontSize: '14px',
  lineHeight: '22px',
  margin: 0,
} as const;

const muted = {
  color: '#71717a',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0 0 8px',
} as const;

const divider = { borderColor: '#e4e4e7', margin: '24px 0' } as const;

export function LowStockEmail({
  strings,
  common,
  brandName,
  userName,
  productName,
  sku,
  locationName,
  quantity,
  reorderPoint,
  lang,
}: LowStockEmailProps): React.JSX.Element {
  return (
    <Html lang={lang}>
      <Head />
      <Preview>{strings.preview}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Text style={brand}>{brandName}</Text>
          <Heading style={heading}>{strings.heading}</Heading>
          {userName ? (
            <Text style={paragraph}>{common.greeting(userName)}</Text>
          ) : null}
          <Section style={alertBox}>
            <Text style={alertText}>
              {strings.body(productName, sku, locationName, quantity, reorderPoint)}
            </Text>
          </Section>
          <Text style={paragraph}>{strings.reorderPrompt}</Text>
          <Hr style={divider} />
          <Text style={muted}>{common.signature(brandName)}</Text>
        </Container>
      </Body>
    </Html>
  );
}
