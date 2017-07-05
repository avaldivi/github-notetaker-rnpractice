import * as firebase from 'firebase'

class Firebase {
	// static init() {
	// 	return firebase.initilizeApp({
	// 		apiKey: "AIzaSyBiOE1Ahl5AbnL2YLe11iBwmGgBA7wBkLc",
	// 	    authDomain: "github-saver-5336a.firebaseapp.com",
	// 	    databaseURL: "https://github-saver-5336a.firebaseio.com",
	// 	    storageBucket: "github-saver-5336a.appspot.com",
	// 	});
	// }

	static config() {
		return {
			apiKey: "AIzaSyBiOE1Ahl5AbnL2YLe11iBwmGgBA7wBkLc",
		    authDomain: "github-saver-5336a.firebaseapp.com",
		    databaseURL: "https://github-saver-5336a.firebaseio.com",
		    projectId: "github-saver-5336a",
		    storageBucket: "github-saver-5336a.appspot.com",
		    messagingSenderId: "424662147990"
		}
	}
}

module.exports = Firebase;