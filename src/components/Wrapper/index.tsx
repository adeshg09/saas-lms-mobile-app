/* Imports */
import React from 'react'
import {
	View,
	StatusBar,
	SafeAreaView,
	StatusBarStyle,
	Platform,
} from 'react-native'

/* Local Imports */
import { refHeightCalc } from '../../static/dimensions'
import colors from '../../static/colors'

// -----------------------------------------------------------------------------

/**
 * Component for Wrapper
 *
 * @component
 */
const Wrapper: React.FC<{
	children: React.ReactNode
	statusBarColor?: string
	statusBarStyle?: StatusBarStyle
}> = ({ children, statusBarColor, statusBarStyle }) => {
	/* Constants */
	const backgroundColor = statusBarColor ?? colors.others.white

	/* Output */
	return (
		<View style={{ backgroundColor: colors.others.white, flex: 5 }}>
			{/* iOS Status Bar color fix - only renders on iOS */}
			{Platform.OS === 'ios' && (
				<View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: 50 * refHeightCalc, // This height should be enough to cover the status bar area
						backgroundColor: backgroundColor,
						zIndex: 1,
					}}
				/>
			)}
			<StatusBar
				backgroundColor={backgroundColor}
				barStyle={statusBarStyle ?? 'dark-content'}
				translucent={Platform.OS === 'ios'}
			/>
			<SafeAreaView style={{ flex: 3 }}>{children}</SafeAreaView>
		</View>
	)
}

export default Wrapper
