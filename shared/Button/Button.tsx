import {
	Animated,
	GestureResponderEvent,
	Pressable,
	PressableProps,
	StyleSheet,
	Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export const Button = ({ title, ...properties }: PressableProps & { title: string }) => {
	const animatedValue = new Animated.Value(100);
	const animatedColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.primaryHover, Colors.primary],
	});

	Animated.timing(animatedValue, {
		toValue: 0,
		duration: 3000,
		useNativeDriver: false,
	}).start();

	const fadeIn = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
		properties.onPressIn && properties.onPressIn(event);
	};

	const fadeOut = (event: GestureResponderEvent) => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
		properties.onPressOut && properties.onPressOut(event);
	};

	return (
		<Pressable {...properties} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View
				style={{
					...styles.button,
					backgroundColor: animatedColor as any,
				}}
			>
				<Text style={styles.title}>{title}</Text>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Radius.r10,
		height: 58,
	},
	title: {
		color: Colors.white,
		fontSize: Fonts.f18,
		fontFamily: Fonts.regular,
	},
});
