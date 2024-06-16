import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../shared/Input/input';
import { Colors, Gaps } from '../shared/tokens';
import PurpleSchoolIcon from '../assets/svgIcons/school-logo';
import { Button } from '../shared/Button/button';
import { AlertBox } from '../shared/AlertBox/alert-box';
import { useState } from 'react';

export default function Index() {
	const [error, setError] = useState<string | undefined>(undefined);

	const alertHandler = () => {
		setError('Incorrect login or password');
		console.log('boom');
		// Alert.alert('Error', 'Incorrect login or password', [{text: 'All right', onPress: () => {}, style: 'cancel'}])
	};

	return (
		<View style={styles.container}>
			{error && <AlertBox error={error} />}
			<View style={styles.content}>
				<PurpleSchoolIcon />
				<View style={styles.form}>
					<Input placeholder={'email'} placeholderTextColor={Colors.gray} />
					<Input placeholder={'password'} placeholderTextColor={Colors.gray} isPassword={true} />
					<Button onPress={alertHandler} title={'Log in'} />
				</View>
				<Text>Restore password</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black,
		padding: 55,
		justifyContent: 'center',
	},
	content: {
		alignItems: 'center',
		gap: Gaps.gap50,
	},
	form: {
		alignSelf: 'stretch',
		gap: Gaps.gap16,
	},
	logo: {
		width: 220,
	},
});
