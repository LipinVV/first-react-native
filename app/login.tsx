import { StyleSheet, View } from 'react-native';
import { Colors, Gaps } from '../shared/tokens';
import PurpleSchoolIcon from '../assets/svgIcons/school-logo';
import { Button } from '../shared/Button/Button';
import { AlertBox } from '../shared/AlertBox/AlertBox';
import { useState } from 'react';
import { CustomInput } from '../shared/CustomInput/CustomInput';
import { CustomLink } from '../shared/CustomLink/CustomLink';

export default function Login() {
	const [error, setError] = useState<string | undefined>(undefined);

	const alertHandler = () => {
		setError('Incorrect login or password');
		// Alert.alert('Error', 'Incorrect login or password', [{text: 'All right', onPress: () => {}, style: 'cancel'}])
	};

	return (
		<View style={styles.container}>
			{error && <AlertBox error={error} />}
			<View style={styles.content}>
				<PurpleSchoolIcon />
				<View style={styles.form}>
					<CustomInput placeholder={'email'} placeholderTextColor={Colors.gray} />
					<CustomInput
						placeholder={'password'}
						placeholderTextColor={Colors.gray}
						isPassword={true}
					/>
					<Button onPress={alertHandler} title={'Log in'} />
				</View>
				<CustomLink href={'/restore'} text={'Restore password'} />
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
});
