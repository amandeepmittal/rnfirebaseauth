import firebase from 'firebase'
import {
	API_KEY,
	AUTH_DOMAIN,
	DATABASE_URL,
	PROJECT_ID,
	MESSAGE_SENDER_ID,
	APP_ID
} from 'react-native-dotenv'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: DATABASE_URL,
	projectId: PROJECT_ID,
	storageBucket: '',
	messagingSenderId: MESSAGE_SENDER_ID,
	appId: APP_ID
}

// Initialize Firebase
let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
