/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * VerdanTech-Backend
 * Backend API of the VerdanTech software project.
 * OpenAPI spec version: 0.1.0
 */
import type { PlantingAreaCreateCommandDescription } from './plantingAreaCreateCommandDescription';
import type { GeometricHistoryPointCreateUpdateCommand } from './geometricHistoryPointCreateUpdateCommand';

export interface PlantingAreaCreateCommand {
	description?: PlantingAreaCreateCommandDescription;
	geometry: GeometricHistoryPointCreateUpdateCommand;
	/**
	 * A descriptive name for this planting area. Must be between 3 and 30 characters long and contain only alphanumeric characters, spaces, hyphens, and underscores.
	 * @minLength 3
	 * @maxLength 30
	 * @pattern [0-9A-Za-z _-]+
	 */
	name: string;
	workspace_ref: string;
}
