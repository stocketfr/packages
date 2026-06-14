/**
 * Contract for the password-set/reset email links, shared by the three
 * parties to it: the backend producer (users module builds the redirect),
 * the backend parser (sendResetPassword hook picks the email template),
 * and the frontend page that switches its copy on the flow marker.
 */
export const RESET_PASSWORD_PATH = '/reset-password';
export const WELCOME_FLOW_PARAM = 'flow';
export const WELCOME_FLOW_VALUE = 'welcome';
