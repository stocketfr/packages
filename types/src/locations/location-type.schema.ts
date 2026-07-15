import { Schema } from 'effect';
import { LocationType } from './location-type.enum';

export const LocationTypeSchema = Schema.Literal(
  LocationType.WAREHOUSE,
  LocationType.SUPPLIER,
  LocationType.IN_TRANSIT,
  LocationType.CLIENT,
).annotations({ identifier: 'LocationType' });
