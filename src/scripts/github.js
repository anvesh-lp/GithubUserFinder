class Github {
    constructor() {
        this.client_id = '9b0a80844a381fc7f4d2';
        this.client_secret = '5184922e6dcc7973e009ce32a5bdd5cd135d4676';
        this.base_url = 'https://api.github.com/users';
    }

    async getUser(username) {
        //make a call to fetch, return an promise
        const returnedResponce = await fetch(`${this.base_url}/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        //return a json object
        const json = await returnedResponce.json();
        return {
            profile: json
        }
    }
}