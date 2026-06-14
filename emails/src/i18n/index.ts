import type { EmailLocale } from '../types';
import type { EmailStrings } from './strings';
import { de } from './de';
import { en } from './en';
import { fr } from './fr';

export type {
  ActionEmailStrings,
  CommonStrings,
  EmailStrings,
  LowStockEmailStrings,
} from './strings';

export const stringsByLocale: Record<EmailLocale, EmailStrings> = { en, fr, de };
