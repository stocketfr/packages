import { Schema } from 'effect';
import { Resource } from './resource.enum';

export const ResourceSchema = Schema.Enums(Resource).annotations({
  identifier: 'Resource',
});
