import { Schema } from 'effect';
import { AuditEntityType } from './audit-entity-type.enum';

export const AuditEntityTypeSchema = Schema.Enums(AuditEntityType).annotations({ identifier: 'AuditEntityType' });
