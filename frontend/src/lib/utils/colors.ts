import colors, { type Color } from '$lib/colors.config';

/**
 * Retrieves the correct hex code for a color given the current theme.
 * @param name The name of the color.
 * @param number The index of the color within Radix UI's system.
 * @param mode String representing the theme.
 * @returns A hex value for the color.
 */
export function getColor(
	name: Color,
	number: number,
	mode: 'light' | 'dark' | undefined
): string {
	const colorId = `${colors[name].radixId}${number}`;
	if (mode == 'light') {
		return colors[name].radixLightValue[colorId];
	} else if (mode == 'dark') {
		return colors[name].radixDarkValue[colorId];
	} else {
		return colors[name].radixLightValue[colorId];
	}
}