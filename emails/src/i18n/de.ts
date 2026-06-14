import type { EmailStrings } from './strings';

export const de: EmailStrings = {
  common: {
    greeting: (name) => `Hallo ${name},`,
    ignoreNotice:
      'Wenn Sie diese Anfrage nicht gestellt haben, können Sie diese E-Mail ignorieren.',
    linkFallback:
      'Falls die Schaltfläche nicht funktioniert, kopieren Sie diesen Link in Ihren Browser:',
    signature: (brand) => `Ihr ${brand}-Team`,
  },
  'verify-email': {
    subject: () => 'Bestätigen Sie Ihre E-Mail-Adresse',
    preview: 'Bestätigen Sie Ihre E-Mail-Adresse, um Ihr Konto zu aktivieren.',
    heading: 'E-Mail-Adresse bestätigen',
    body: (brand) =>
      `Vielen Dank für Ihre Registrierung bei ${brand}. Klicken Sie auf die Schaltfläche unten, um Ihre E-Mail-Adresse zu bestätigen und Ihr Konto zu aktivieren.`,
    button: 'E-Mail-Adresse bestätigen',
  },
  'reset-password': {
    subject: () => 'Zurücksetzen Ihres Passworts',
    preview: 'Wählen Sie ein neues Passwort für Ihr Konto.',
    heading: 'Passwort zurücksetzen',
    body: (brand) =>
      `Sie haben das Zurücksetzen des Passworts für Ihr ${brand}-Konto angefordert. Klicken Sie auf die Schaltfläche unten, um ein neues Passwort zu wählen. Dieser Link ist nur für begrenzte Zeit gültig.`,
    button: 'Neues Passwort wählen',
  },
  'welcome-set-password': {
    subject: (brand) => `Willkommen bei ${brand} — legen Sie Ihr Passwort fest`,
    preview: 'Ihr Konto wartet auf Sie: Legen Sie Ihr Passwort fest.',
    heading: 'Ihr Konto ist bereit',
    body: (brand) =>
      `Für Sie wurde ein ${brand}-Konto erstellt. Klicken Sie auf die Schaltfläche unten, um Ihr Passwort festzulegen und auf Ihren Arbeitsbereich zuzugreifen.`,
    button: 'Passwort festlegen',
  },
  'low-stock': {
    subject: (brand) => `[${brand}] Warnung: niedriger Lagerbestand`,
    preview: 'Ein Produkt in Ihrem Bestand geht zur Neige.',
    heading: 'Warnung: niedriger Lagerbestand',
    body: (productName, sku, locationName, quantity, reorderPoint) =>
      `„${productName}“ (Artikelnummer ${sku}) an ${locationName} ist auf ${quantity} Einheit(en) gesunken und liegt damit unter dem Meldebestand von ${reorderPoint}. Bitte prüfen und nachbestellen.`,
    reorderPrompt:
      'Überprüfen Sie Ihren Bestand und bestellen Sie nach, um optimale Lagerbestände zu halten.',
  },
};
