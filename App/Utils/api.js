const api = {

	getBio(username){
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}`;
		// const url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	},
	
	getRepos(username){
		username = username.toLowerCase().trim();
		const url = `https://api.github.com/users/${username}/repos`;
		// const url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	},

	addNote(username, note){
		username = username.toLowerCase().trim();
		const url = `https://github-saver-5336a.firebaseio.com/${username}.json`;
		// const url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url, {
			method: 'post',
			body: JSON.stringify(note)
		}).then((res) => res.json());
	},

	getNotes(username){
		username = username.toLowerCase().trim();
		const url = `https://github-saver-5336a.firebaseio.com/${username}.json`;
		// const url = "https://api.github.com/users/" + username "+ "/respos";
		return fetch(url).then((res) => res.json());
	}
};

module.exports = api;