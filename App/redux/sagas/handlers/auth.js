import { cps, call, apply, put, delay } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
// import RNBootSplash from 'react-native-bootsplash';

import { setUserSuccess, loginSuccess, loginFailure, logout } from '../../ducks/authSlice';

// export function* setUser(user) {
// 	console.log('userSAGFA: ', user);
// 	// console.log('payload: ', payload);
// 	// const { email, password } = payload;
// 	try {
// 		yield put(setUserSuccess(user));
// 		// yield RNBootSplash.hide({ fade: true });
// 		// auth()
// 		// 	.signInWithEmailAndPassword(email, password)
// 		// 	.then(() => {
// 		// 		console.log('User account created & signed in!');
// 		// 	})
// 		// 	.catch(error => {
// 		// 		if (error.code === 'auth/email-already-in-use') {
// 		// 			console.log('That email address is already in use!');
// 		// 		}
// 		// 		if (error.code === 'auth/invalid-email') {
// 		// 			console.log('That email address is invalid!');
// 		// 		}
// 		// 		console.error(error);
// 		// 	});
// 	} catch (e) {
// 		console.log('eAUTh: ', e);
// 		// yield put(loginFailure({ message: e.message }));
// 	}
// }

export function* loginSaga({ payload }) {
	console.log('payload: ', payload);
	const { email, password } = payload;
	console.log(' email, password: ', email, password);
	try {
		const user = yield auth().signInWithEmailAndPassword(email, password);
		console.log('userS: ', user);
	} catch (e) {
		console.log('loginFailure CATCh: ', e);
		yield put(loginFailure({ message: e.message }));
	}
}

export function* logoutSaga() {
	try {
		yield auth().signOut();
		yield put(logout());
	} catch (e) {
		console.log('e: ', e);
		// yield put(loginFailure({ message: e.message }));
	}
}