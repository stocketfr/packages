import type { EmailStrings } from './strings';

export const fr: EmailStrings = {
  common: {
    greeting: (name) => `Bonjour ${name},`,
    ignoreNotice:
      "Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet e-mail.",
    linkFallback:
      'Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :',
    signature: (brand) => `L'équipe ${brand}`,
  },
  'verify-email': {
    subject: () => 'Vérifiez votre adresse e-mail',
    preview: 'Confirmez votre adresse e-mail pour activer votre compte.',
    heading: 'Confirmez votre adresse e-mail',
    body: (brand) =>
      `Merci de votre inscription sur ${brand}. Cliquez sur le bouton ci-dessous pour confirmer votre adresse e-mail et activer votre compte.`,
    button: 'Vérifier mon adresse',
  },
  'reset-password': {
    subject: () => 'Réinitialisation de votre mot de passe',
    preview: 'Choisissez un nouveau mot de passe pour votre compte.',
    heading: 'Réinitialisez votre mot de passe',
    body: (brand) =>
      `Vous avez demandé la réinitialisation du mot de passe de votre compte ${brand}. Cliquez sur le bouton ci-dessous pour en choisir un nouveau. Ce lien est valable pendant une durée limitée.`,
    button: 'Choisir un nouveau mot de passe',
  },
  'welcome-set-password': {
    subject: (brand) => `Bienvenue sur ${brand} — créez votre mot de passe`,
    preview: 'Votre compte vous attend : définissez votre mot de passe.',
    heading: 'Votre compte est prêt',
    body: (brand) =>
      `Un compte ${brand} a été créé pour vous. Cliquez sur le bouton ci-dessous pour définir votre mot de passe et accéder à votre espace.`,
    button: 'Définir mon mot de passe',
  },
  'low-stock': {
    subject: (brand) => `[${brand}] Alerte de stock faible`,
    preview: 'Un produit de votre inventaire arrive à épuisement.',
    heading: 'Alerte de stock faible',
    body: (productName, sku, locationName, quantity, reorderPoint) =>
      `« ${productName} » (référence ${sku}) à ${locationName} est descendu à ${quantity} unité(s), en dessous du seuil de réapprovisionnement de ${reorderPoint}. Veuillez vérifier et réapprovisionner.`,
    reorderPrompt:
      'Vérifiez votre inventaire et réapprovisionnez pour maintenir des niveaux de stock optimaux.',
  },
};
