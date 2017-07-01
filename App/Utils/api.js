var api = {

	getBio(username){
		username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}`;
		// var url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	},
	
	getRepos(username){
		username = username.toLowerCase().trim();
		var url = `https://api.github.com/users/${username}/repos`;
		// var url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	},

	addNote(username, note){
		username = username.toLowerCase().trim();
		var url = `https://github-saver-5336a.firebaseio.com/${username}.json`;
		// var url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url, {
			method: 'post',
			body: JSON.stringify(note)
		}).then((res) => res.json());
	},

	getNotes(username){
		username = username.toLowerCase().trim();
		var url = `https://github-saver-5336a.firebaseio.com/${username}.json`;
		// var url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;