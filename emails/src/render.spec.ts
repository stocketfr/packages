import { describe, expect, it } from 'vitest';
import { renderEmail } from './render';
import { EMAIL_LOCALES, type EmailTemplate } from './types';

const ACTION_URL = 'https://app.stocket.localhost/reset-password?token=abc123';

const templates: EmailTemplate[] = [
  { kind: 'verify-email', userName: 'Jeanne', actionUrl: ACTION_URL },
  { kind: 'reset-password', userName: 'Jeanne', actionUrl: ACTION_URL },
  { kind: 'welcome-set-password', userName: 'Jeanne', actionUrl: ACTION_URL },
];

describe('renderEmail', () => {
  for (const template of templates) {
    for (const locale of EMAIL_LOCALES) {
      it(`renders ${template.kind} in ${locale}`, async () => {
        const email = await renderEmail(template, locale);

        expect(email.subject.length).toBeGreaterThan(0);
        expect(email.html).toContain(`lang="${locale}"`);
        expect(email.html).toContain(ACTION_URL.replace(/&/g, '&amp;'));
        expect(email.html).toContain('Jeanne');
        expect(email.text).toContain('Jeanne');
        expect(email.text).toContain(ACTION_URL);
      });
    }
  }

  it('uses the brand name in subject and body', async () => {
    const email = await renderEmail(
      { kind: 'welcome-set-password', userName: 'Jeanne', actionUrl: ACTION_URL },
      'fr',
      { brandName: 'Acme' },
    );

    expect(email.subject).toContain('Acme');
    expect(email.html).toContain('Acme');
    expect(email.html).not.toContain('Stocket');
  });

  it('produces distinct copy per locale', async () => {
    const [frEmail, deEmail] = await Promise.all([
      renderEmail(templates[0]!, 'fr'),
      renderEmail(templates[0]!, 'de'),
    ]);

    expect(frEmail.subject).not.toBe(deEmail.subject);
  });
});
