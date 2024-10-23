/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * VerdanTech-Backend
 * Backend API of the VerdanTech software project.
 * OpenAPI spec version: 0.1.0
 */
import type { AnnualLifecycleProfileUpdateCommandFirstToLastHarvest } from './annualLifecycleProfileUpdateCommandFirstToLastHarvest';
import type { AnnualLifecycleProfileUpdateCommandGermToFirstHarvest } from './annualLifecycleProfileUpdateCommandGermToFirstHarvest';
import type { AnnualLifecycleProfileUpdateCommandGermToTransplant } from './annualLifecycleProfileUpdateCommandGermToTransplant';
import type { AnnualLifecycleProfileUpdateCommandSeedToGerm } from './annualLifecycleProfileUpdateCommandSeedToGerm';

export interface AnnualLifecycleProfileUpdateCommand {
	first_to_last_harvest?: AnnualLifecycleProfileUpdateCommandFirstToLastHarvest;
	germ_to_first_harvest?: AnnualLifecycleProfileUpdateCommandGermToFirstHarvest;
	germ_to_transplant?: AnnualLifecycleProfileUpdateCommandGermToTransplant;
	seed_to_germ?: AnnualLifecycleProfileUpdateCommandSeedToGerm;
}