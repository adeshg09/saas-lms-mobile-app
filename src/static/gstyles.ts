/* Imports */
import { StyleSheet } from 'react-native'

/* Local Imports */
import { fontFamily } from './fonts'
import colors from './colors'
import { ThemeType } from '../context/ThemeContext'
import { createTextStyle, getThemeColor } from '../utils/helpers'

export const getTypographyStyles = (theme: ThemeType) => {
	/* Constants */
	const defaultColor = getThemeColor(
		theme,
		colors.grey[900],
		colors.others.white,
	)

	/* Styles */
	return StyleSheet.create({
		// HeadingH1
		headingH1Bold: {
			...createTextStyle(fontFamily.bold, 48, '700', 120, 0),
			color: defaultColor,
		},

		// HeadingH2
		headingH2Bold: {
			...createTextStyle(fontFamily.bold, 40, '700', 120, 0),
			color: defaultColor,
		},

		// HeadingH3
		headingH3Bold: {
			...createTextStyle(fontFamily.bold, 32, '700', 120, 0),
			color: defaultColor,
		},

		// HeadingH4
		headingH4Bold: {
			...createTextStyle(fontFamily.bold, 24, '700', 120, 0),
			color: defaultColor,
		},

		// HeadingH5
		headingH5Bold: {
			...createTextStyle(fontFamily.bold, 20, '700', 120, 0),
			color: defaultColor,
		},

		// HeadingH4
		headingH6Bold: {
			...createTextStyle(fontFamily.bold, 18, '700', 120, 0),
			color: defaultColor,
		},

		// BodyXLarge
		bodyXlargeRegular: {
			...createTextStyle(fontFamily.regular, 18, '400', 140, 0.2),
			color: defaultColor,
		},
		bodyXlargeMedium: {
			...createTextStyle(fontFamily.medium, 18, '500', 140, 0.2),
			color: defaultColor,
		},
		bodyXlargeSemiBold: {
			...createTextStyle(fontFamily.semiBold, 18, '600', 140, 0.2),
			color: defaultColor,
		},
		bodyXlargeBold: {
			...createTextStyle(fontFamily.bold, 18, '700', 140, 0.2),
			color: defaultColor,
		},

		// BodyLarge
		bodyLargeRegular: {
			...createTextStyle(fontFamily.regular, 16, '400', 140, 0.2),
			color: defaultColor,
		},
		bodyLargeMedium: {
			...createTextStyle(fontFamily.medium, 16, '500', 140, 0.2),
			color: defaultColor,
		},
		bodyLargeSemiBold: {
			...createTextStyle(fontFamily.semiBold, 16, '600', 140, 0.2),
			color: defaultColor,
		},
		bodyLargeBold: {
			...createTextStyle(fontFamily.bold, 16, '700', 140, 0.2),
			color: defaultColor,
		},

		// BodyMedium
		bodyMediumRegular: {
			...createTextStyle(fontFamily.regular, 14, '400', 140, 0.2),
			color: defaultColor,
		},
		bodyMediumMedium: {
			...createTextStyle(fontFamily.medium, 14, '500', 140, 0.2),
			color: defaultColor,
		},
		bodyMediumSemiBold: {
			...createTextStyle(fontFamily.semiBold, 14, '600', 140, 0.2),
			color: defaultColor,
		},
		bodyMediumBold: {
			...createTextStyle(fontFamily.bold, 14, '700', 140, 0.2),
			color: defaultColor,
		},

		// BodySmall
		bodySmallRegular: {
			...createTextStyle(fontFamily.regular, 12, '400', 100, 0.2),
			color: defaultColor,
		},
		bodySmallMedium: {
			...createTextStyle(fontFamily.medium, 12, '500', 100, 0.2),
			color: defaultColor,
		},
		bodySmallSemiBold: {
			...createTextStyle(fontFamily.semiBold, 12, '600', 100, 0.2),
			color: defaultColor,
		},
		bodySmallBold: {
			...createTextStyle(fontFamily.bold, 12, '700', 100, 0.2),
			color: defaultColor,
		},

		// BodyXSmall
		bodyXsmallRegular: {
			...createTextStyle(fontFamily.regular, 10, '400', 100, 0.2),
			color: defaultColor,
		},
		bodyXsmallMedium: {
			...createTextStyle(fontFamily.medium, 10, '500', 100, 0.2),
			color: defaultColor,
		},
		bodyXsmallSemiBold: {
			...createTextStyle(fontFamily.semiBold, 10, '600', 100, 0.2),
			color: defaultColor,
		},
		bodyXsmallBold: {
			...createTextStyle(fontFamily.bold, 10, '700', 100, 0.2),
			color: defaultColor,
		},
	})
}
