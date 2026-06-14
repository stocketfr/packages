import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { ActionEmailStrings, CommonStrings } from '../i18n/index';

export interface ActionEmailProps {
  readonly strings: ActionEmailStrings;
  readonly common: CommonStrings;
  readonly brandName: string;
  readonly userName: string;
  readonly actionUrl: string;
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

const button = {
  backgroundColor: '#18181b',
  borderRadius: '6px',
  color: '#ffffff',
  display: 'inline-block',
  fontSize: '14px',
  fontWeight: 600,
  padding: '12px 20px',
  textDecoration: 'none',
} as const;

const muted = {
  color: '#71717a',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0 0 8px',
} as const;

const fallbackLink = {
  color: '#2563eb',
  fontSize: '12px',
  lineHeight: '18px',
  wordBreak: 'break-all',
} as const;

const divider = { borderColor: '#e4e4e7', margin: '24px 0' } as const;

export function ActionEmail({
  strings,
  common,
  brandName,
  userName,
  actionUrl,
  lang,
}: ActionEmailProps): React.JSX.Element {
  return (
    <Html lang={lang}>
      <Head />
      <Preview>{strings.preview}</Preview>
      <Body style={body}>
        <Container style={card}>
          <Text style={brand}>{brandName}</Text>
          <Heading style={heading}>{strings.heading}</Heading>
          <Text style={paragraph}>{common.greeting(userName)}</Text>
          <Text style={paragraph}>{strings.body(brandName)}</Text>
          <Section style={{ margin: '24px 0' }}>
            <Button href={actionUrl} style={button}>
              {strings.button}
            </Button>
          </Section>
          <Text style={muted}>{common.linkFallback}</Text>
          <Link href={actionUrl} style={fallbackLink}>
            {actionUrl}
          </Link>
          <Hr style={divider} />
          <Text style={muted}>{common.ignoreNotice}</Text>
          <Text style={muted}>{common.signature(brandName)}</Text>
        </Container>
      </Body>
    </Html>
  );
}
