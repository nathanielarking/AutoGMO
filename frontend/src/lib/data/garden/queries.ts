import { useQuery } from '@sveltestack/svelte-query'
import type { UseQueryStoreResult, UseQueryOptions } from '@sveltestack/svelte-query'
import {
	gardenGenerateUniqueKeyQueryOp,
	gardenAssociatedPartialsQueryOp,
	gardenMostRelevantPartialsQueryOp,
	gardenPartialsByKeysQueryOp,
	gardenFullByKeyQueryOp
} from '$codegen'
import {
	GardenMostRelevantPartialsQueryOpParams,
	GardenPartialSchema,
	GardenFullSchema,
	GardenPartialsByKeysQueryOpParams,
	GardenFullByKeyQueryOpParams
} from '$codegen/types'

/**
 * Retrieves a unique garden key.
 */
export const gardenGenerateUniqueKeyQuery = () => {
	return useQuery('uniqueGardenKey', gardenGenerateUniqueKeyQueryOp, {
		staleTime: Infinity
	})
}

/**
 * Returns a partial representation of all gardens
 * that are associated withthe client.
 */
export const gardenAssociatedPartialsQuery = (options?: UseQueryOptions) => {
	return useQuery('userVisibleGardens', gardenAssociatedPartialsQueryOp, options)
}

/**
 * Returns a partial representation of the most relevant gardens to the client.
 * @param maxGardens The maximum number of gardens to return.
 */
export const gardenMostRelevantPartialsQuery = (
	data: GardenMostRelevantPartialsQueryOpParams,
	options?: UseQueryOptions<GardenPartialSchema[]>
) => {
	return useQuery<GardenPartialSchema[]>(
		['mostRelevantGardens', data.max_gardens],
		() => {
			return gardenMostRelevantPartialsQueryOp(data)
		},
		options
	)
}

/**
 * Returns a partial representation of gardens given by keys.
 * @param data The keys to query for.
 */
export const gardenPartialsQuery = (data: GardenPartialsByKeysQueryOpParams) => {
	return useQuery<GardenPartialSchema[]>(
		['partialsByKeys', [...data.garden_keys]],
		() => {
			return gardenPartialsByKeysQueryOp(data)
		}
	)
}

/**
 * Returns a full representation of a garden by its key.
 * @param data The key to query for.
 */
export const gardenFullQuery = (data: GardenFullByKeyQueryOpParams) => {
	return useQuery<GardenFullSchema>(['fullByKey', data.garden_key], () => {
		return gardenFullByKeyQueryOp(data)
	})
}