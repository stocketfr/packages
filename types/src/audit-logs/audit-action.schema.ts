import { Schema } from 'effect';
import { AuditAction } from './audit-action.enum';

export const AuditActionSchema = Schema.Enums(AuditAction).annotations({
  identifier: 'AuditAction',
});
