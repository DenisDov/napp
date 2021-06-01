import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Text } from '../../theme';

import Body from '../../components/Body';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const RegisterScreen = ({ navigation }) => {
	return (
		<Body>
			<SafeAreaView style={styles.container}>
				<Box flex={0.5} margin="m" justifyContent="space-between">
					<Text variant="header">Create account</Text>
					<Box>
						{/* <Input
							{...{ control, errors }}
							fieldName="email"
							ionicon="mail-outline"
							placeholder="Email"
						/>
						<Input
							{...{ control, errors }}
							fieldName="password"
							ionicon="lock-closed-outline"
							placeholder="Password"
							secureTextEntry
						/> */}

						{/* <Button text="Log in" onPress={handleSubmit(onSubmit)} /> */}
						<Button text="Sign up" />
						<Divider />
						<Button text="Log in" onPress={() => navigation.navigate('Login')} />
					</Box>
				</Box>
			</SafeAreaView>
		</Body>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default RegisterScreen;
