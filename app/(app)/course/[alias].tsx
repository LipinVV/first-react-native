import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CoursePage() {
	const { alias } = useLocalSearchParams();
	return (
		<View>
			<Text>{alias}</Text>
		</View>
	);
}
