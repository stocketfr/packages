import { Schema } from 'effect';
import { ClientStatus } from './client-status.enum';

export const ClientStatusSchema = Schema.Literal(
  ClientStatus.ACTIVE,
  ClientStatus.SUSPENDED,
  ClientStatus.INACTIVE,
).annotations({ identifier: 'ClientStatus' });
