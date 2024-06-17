import { SplashScreen, Stack } from 'expo-router';
import { Colors } from '../shared/tokens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
	// const insets = useSafeAreaInsets();
	// const { top } = insets;
	const [loaded] = useFonts({
		FiraSans: require('../assets/fonts/FiraSans-Regular.ttf'),
		FiraSansSemiBold: require('../assets/fonts/FiraSans-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) SplashScreen.hideAsync();
	}, [loaded]);

	if (!loaded) return null;

	return (
		<SafeAreaProvider>
			<StatusBar style={'light'} />
			<Stack
				screenOptions={{
					statusBarColor: Colors.black,
					headerShown: false,
					contentStyle: {
						// paddingTop: top,
					}, // стили для общей обёртки
				}}
			>
				<Stack.Screen name={'login'} />
				<Stack.Screen name={'restore'} />
			</Stack>
		</SafeAreaProvider>
	);
}
