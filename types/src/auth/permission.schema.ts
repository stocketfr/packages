import { Schema } from 'effect';
import { Permission } from './permission.enum';

export const PermissionSchema = Schema.Enums(Permission).annotations({
  identifier: 'Permission',
});
