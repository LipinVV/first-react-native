import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from '../tokens';

interface IAlertBox {
	error?: string;
}

export const AlertBox = ({ error }: IAlertBox) => {
	const [isShown, setIsShown] = useState(false);
	const animatedFadingValue = new Animated.Value(0);
	const onEnterLayout = () => {
		Animated.timing(animatedFadingValue, {
			toValue: 50,
			duration: 300,
			useNativeDriver: true,
		}).start(() => console.log('error!'));
	};

	useEffect(() => {
		if (!error) {
			return;
		}

		setIsShown(true);

		const timerId = setTimeout(() => setIsShown(false), 3000);
		return () => clearTimeout(timerId);
	}, [error]);

	if (!isShown) {
		return <></>;
	}

	return (
		<Animated.View
			style={{ ...styles.error, transform: [{ translateY: animatedFadingValue } as any] }}
			onLayout={onEnterLayout}
		>
			<Text style={styles.text}>{error}</Text>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		width: Dimensions.get('screen').width,
		backgroundColor: Colors.red,
		padding: 15,
		top: 0,
	},
	text: {
		fontSize: Fonts.f16,
		color: Colors.white,
		textAlign: 'center',
	},
});
