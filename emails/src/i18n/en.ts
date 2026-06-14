import type { EmailStrings } from './strings';

export const en: EmailStrings = {
  common: {
    greeting: (name) => `Hello ${name},`,
    ignoreNotice: "If you didn't request this, you can safely ignore this email.",
    linkFallback: "If the button doesn't work, copy this link into your browser:",
    signature: (brand) => `The ${brand} team`,
  },
  'verify-email': {
    subject: () => 'Verify your email address',
    preview: 'Confirm your email address to activate your account.',
    heading: 'Confirm your email address',
    body: (brand) =>
      `Thanks for signing up for ${brand}. Click the button below to confirm your email address and activate your account.`,
    button: 'Verify my email',
  },
  'reset-password': {
    subject: () => 'Reset your password',
    preview: 'Choose a new password for your account.',
    heading: 'Reset your password',
    body: (brand) =>
      `You requested a password reset for your ${brand} account. Click the button below to choose a new one. This link is only valid for a limited time.`,
    button: 'Choose a new password',
  },
  'welcome-set-password': {
    subject: (brand) => `Welcome to ${brand} — set your password`,
    preview: 'Your account is waiting: set your password.',
    heading: 'Your account is ready',
    body: (brand) =>
      `A ${brand} account has been created for you. Click the button below to set your password and access your workspace.`,
    button: 'Set my password',
  },
  'low-stock': {
    subject: (brand) => `[${brand}] Low stock alert`,
    preview: 'A product in your inventory is running low.',
    heading: 'Low stock alert',
    body: (productName, sku, locationName, quantity, reorderPoint) =>
      `"${productName}" (SKU ${sku}) at ${locationName} has dropped to ${quantity} unit(s), below the reorder point of ${reorderPoint}. Please review and replenish.`,
    reorderPrompt: 'Review your inventory and reorder to maintain optimal stock levels.',
  },
};
