import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomLink } from '../shared/CustomLink/CustomLink';
import { Colors, Fonts, Gaps } from '../shared/tokens';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnmatchedPage() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Image
					resizeMode={'center'}
					style={styles.image}
					source={require('../assets/images/unmatched.png')}
				/>
				<Text style={styles.text}>Something went wrong. Try to return to the homepage</Text>
				<CustomLink href={'/'} text={'Return to homepage'} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	image: {
		justifyContent: 'center',
		flex: 1,
		width: 204,
		height: 282,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.black,
		padding: 55,
		justifyContent: 'center',
	},
	content: {
		flex: 1,
		alignItems: 'center',
		gap: Gaps.gap50,
	},
	text: { color: Colors.white, fontSize: Fonts.f18, textAlign: 'center' },
});
