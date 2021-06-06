class Github {
    constructor() {
        this.base_url = 'https://api.github.com/users';
        this.config = {
            headers: {
                Authorization: '4fb7120d8d5ea47103ddffe0a782dc7c8d46b2ae',
            },
        }
        this.count = 5;
        this.repos_sort = 'created:asc';
    }

    async getUser(username) {
        //make a call to fetch, return an promise
        const returnedResponce = await fetch(`${this.base_url}/${username}`, this.config);

        const returnedRepos = await fetch(`${this.base_url}/${username}/repos?per_page=${this.count}&sort=${this.repos_sort}`, this.config);
        //return a json object
        const json = await returnedResponce.json();
        const retunredrepos = await returnedRepos.json();
        return {
            profile: json,
            reposiotories: retunredrepos
        }
    }
}