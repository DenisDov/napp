import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { loginRequest, socialRequest } from '../../redux/ducks/authSlice';

import { Box, Text } from '../../theme';

// import Body from '../../components/Body';
import BackgroundImage from '../../components/BackgroundImage';
import Button from '../../components/Button';
import ButtonSocial from '../../components/ButtonSocial';
import Input from '../../components/Input';
import Divider from '../../components/Divider';

const schema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(6, ({ min }) => `Password must be at least ${min} characters`)
		.required(),
});

const LoginScreen = ({ navigation }) => {
	const { t } = useTranslation();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const dispatch = useDispatch();
	const loading = useSelector(state => state.auth.loading);

	const onSubmit = data => {
		console.log('data: ', data);
		dispatch(loginRequest(data));
	};

	return (
		<BackgroundImage>
			{Platform.OS === 'android' && <StatusBar backgroundColor="#20111111" />}
			<SafeAreaView style={styles.container}>
				<Box flex={1} margin="m">
					<Text variant="header">{t('Welcome back')}</Text>
					<Box flex={1} marginVertical="xl">
						<Input
							{...{ control, errors }}
							fieldName="email"
							ionicon="mail-outline"
							placeholder={t('emailPlaceholder')}
							keyboardType="email-address"
						/>
						<Input
							{...{ control, errors }}
							fieldName="password"
							ionicon="lock-closed-outline"
							placeholder={t('passwordPlaceholder')}
							secureTextEntry
						/>

						<Button text={t('Login')} onPress={handleSubmit(onSubmit)} loading={loading} />
						<Divider />
						<Button text={t('Register')} onPress={() => navigation.navigate('Register')} />
						<Box flexDirection="row" marginTop="m">
							<ButtonSocial type="google" onPress={() => dispatch(socialRequest())} />
							<Box marginHorizontal="s" />
							<ButtonSocial type="facebook" onPress={() => alert('Coming soon')} />
						</Box>
					</Box>
					<Text textAlign="center" onPress={() => navigation.navigate('ForgotPassword')}>
						Forgot password?
					</Text>
				</Box>
			</SafeAreaView>
		</BackgroundImage>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default LoginScreen;
