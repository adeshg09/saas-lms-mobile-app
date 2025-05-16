/* Imports */
import { StyleSheet } from 'react-native'

/* Local Imports */
import { fontFamily, getLineHeight, scaleText } from './fonts'

const gStyles = StyleSheet.create({
	// HeadingH1
	headingH1Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(48),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(48, 120)),
		letterSpacing: 0,
	},

	// HeadingH2
	headingH2Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(40),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(40, 120)),
		letterSpacing: 0,
	},

	// HeadingH3
	headingH3Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(32),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(32, 120)),
		letterSpacing: 0,
	},

	// HeadingH4
	headingH4Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(24),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(24, 120)),
		letterSpacing: 0,
	},

	// HeadingH5
	headingH5Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(20),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(20, 120)),
		letterSpacing: 0,
	},

	// HeadingH4
	headingH6Bold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(18),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(18, 120)),
		letterSpacing: 0,
	},

	// BodyXLarge
	bodyXlargeRegular: {
		fontFamily: fontFamily.regular,
		fontSize: scaleText(18),
		fontWeight: '400',
		lineHeight: scaleText(getLineHeight(18, 140)),
		letterSpacing: 0.2,
	},
	bodyXlargeMedium: {
		fontFamily: fontFamily.medium,
		fontSize: scaleText(18),
		fontWeight: '500',
		lineHeight: scaleText(getLineHeight(18, 140)),
		letterSpacing: 0.2,
	},
	bodyXlargeSemiBold: {
		fontFamily: fontFamily.semiBold,
		fontSize: scaleText(18),
		fontWeight: '600',
		lineHeight: scaleText(getLineHeight(18, 140)),
		letterSpacing: 0.2,
	},
	bodyXlargeBold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(18),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(18, 140)),
		letterSpacing: 0.2,
	},

	// BodyLarge
	bodyLargeRegular: {
		fontFamily: fontFamily.regular,
		fontSize: scaleText(16),
		fontWeight: '400',
		lineHeight: scaleText(getLineHeight(16, 140)),
		letterSpacing: 0.2,
	},
	bodyLargeMedium: {
		fontFamily: fontFamily.medium,
		fontSize: scaleText(16),
		fontWeight: '500',
		lineHeight: scaleText(getLineHeight(16, 140)),
		letterSpacing: 0.2,
	},
	bodyLargeSemiBold: {
		fontFamily: fontFamily.semiBold,
		fontSize: scaleText(16),
		fontWeight: '600',
		lineHeight: scaleText(getLineHeight(16, 140)),
		letterSpacing: 0.2,
	},
	bodyLargeBold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(16),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(16, 140)),
		letterSpacing: 0.2,
	},

	// BodyMedium
	bodyMediumRegular: {
		fontFamily: fontFamily.regular,
		fontSize: scaleText(14),
		fontWeight: '400',
		lineHeight: scaleText(getLineHeight(14, 140)),
		letterSpacing: 0.2,
	},
	bodyMediumMedium: {
		fontFamily: fontFamily.medium,
		fontSize: scaleText(14),
		fontWeight: '500',
		lineHeight: scaleText(getLineHeight(14, 140)),
		letterSpacing: 0.2,
	},
	bodyMediumSemiBold: {
		fontFamily: fontFamily.semiBold,
		fontSize: scaleText(14),
		fontWeight: '600',
		lineHeight: scaleText(getLineHeight(14, 140)),
		letterSpacing: 0.2,
	},
	bodyMediumBold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(14),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(14, 140)),
		letterSpacing: 0.2,
	},

	// BodySmall
	bodySmallRegular: {
		fontFamily: fontFamily.regular,
		fontSize: scaleText(12),
		fontWeight: '400',
		lineHeight: scaleText(getLineHeight(12, 100)),
		letterSpacing: 0.2,
	},
	bodySmallMedium: {
		fontFamily: fontFamily.medium,
		fontSize: scaleText(12),
		fontWeight: '500',
		lineHeight: scaleText(getLineHeight(12, 100)),
		letterSpacing: 0.2,
	},
	bodySmallSemiBold: {
		fontFamily: fontFamily.semiBold,
		fontSize: scaleText(12),
		fontWeight: '600',
		lineHeight: scaleText(getLineHeight(12, 100)),
		letterSpacing: 0.2,
	},
	bodySmallBold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(12),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(12, 100)),
		letterSpacing: 0.2,
	},

	// BodyXSmall
	bodyXsmallRegular: {
		fontFamily: fontFamily.regular,
		fontSize: scaleText(10),
		fontWeight: '400',
		lineHeight: scaleText(getLineHeight(10, 100)),
		letterSpacing: 0.2,
	},
	bodyXsmallMedium: {
		fontFamily: fontFamily.medium,
		fontSize: scaleText(10),
		fontWeight: '500',
		lineHeight: scaleText(getLineHeight(10, 100)),
		letterSpacing: 0.2,
	},
	bodyXsmallSemiBold: {
		fontFamily: fontFamily.semiBold,
		fontSize: scaleText(10),
		fontWeight: '600',
		lineHeight: scaleText(getLineHeight(10, 100)),
		letterSpacing: 0.2,
	},
	bodyXsmallBold: {
		fontFamily: fontFamily.bold,
		fontSize: scaleText(10),
		fontWeight: '700',
		lineHeight: scaleText(getLineHeight(10, 100)),
		letterSpacing: 0.2,
	},
})

export default gStyles
