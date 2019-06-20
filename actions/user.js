import Firebase from '../config/Firebase.js'

// define types

export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// actions

export const updateEmail = email => {
	return {
		type: UPDATE_EMAIL,
		payload: email
	}
}

export const updatePassword = password => {
	return {
		type: UPDATE_PASSWORD,
		payload: password
	}
}

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch({ type: LOGIN, payload: response.user })
		} catch (e) {
			console.log(e)
		}
	}
}

export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
			dispatch({ type: SIGNUP, payload: response.user })
		} catch (e) {
			console.log(e)
		}
	}
}
