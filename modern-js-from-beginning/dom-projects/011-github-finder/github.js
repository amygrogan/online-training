class GitHub {
    constructor() {
        this.client_id = '11566f41d9c64ff90aaa';
        this.client_secret = '6005fe3ace70700fc38200cd881cf16c25195c2f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        const reposData = await repoResponse.json();

        return {
            profile: profileData, 
            repos: reposData
        }
    }
}