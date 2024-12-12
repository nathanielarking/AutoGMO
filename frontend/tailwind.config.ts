import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import containerQueries from '@tailwindcss/container-queries';
import colors, { type Color } from './src/lib/colors.config';

const config: Config = {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [tailwindcssAnimate, containerQueries],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				neutral: getColorScale('neutral'),
				primary: getColorScale('primary'),
				secondary: getColorScale('secondary'),
				accent: getColorScale('accent'),
				destructive: getColorScale('destructive'),
				warning: getColorScale('warning'),
				success: getColorScale('success')
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite'
			}
		}
	}
};

/**
 * Generates a color scale object for Tailwind CSS with values from 1 to 12.
 * Used to alias Radix-UI colors into Tailwind colors.
 *
 * Taken from (https://fynn.at/shorts/2023-03-19-how-to-use-radix-colors-with-tailwind-css)
 *
 * @param name - The base name of the color scale from Radix-UI.
 * @returns An object representing the color scale, with keys from 1 to 12 and corresponding CSS variable values.
 */
function getColorScale(color: Color): Record<string, string> {
	const name = colors[color].radixId;
	const scale = {};
	for (let i = 1; i <= 12; i++) {
		scale[i] = `var(--${name}-${i})`;
		// next line only needed if using alpha values
		//scale[`a${i}`] = `var(--${name}-a${i})`;
	}

	return scale;
}

export default config;
