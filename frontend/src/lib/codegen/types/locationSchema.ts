/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * VerdanTech-Backend
 * Backend API of the VerdanTech software project.
 * OpenAPI spec version: 0.1.0
 */
import type { LocationSchemaPosition } from './locationSchemaPosition';
import type { LocationSchemaTime } from './locationSchemaTime';
import type { RefSchema } from './refSchema';

export interface LocationSchema {
	position?: LocationSchemaPosition;
	time?: LocationSchemaTime;
	workspace_ref: RefSchema;
}
