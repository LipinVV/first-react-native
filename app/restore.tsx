import { Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function Restore() {
	return (
		<View>
			<Stack.Screen
				options={{
					title: 'Restore password',
					// statusBarColor: Colors.black
				}}
			/>
			<Link href={'/'}>
				<Text>RestorePassword</Text>
			</Link>
		</View>
	);
}
