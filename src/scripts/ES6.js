//UI class to manage User Interface
class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(userData) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img src="${userData.avatar_url}" class="img-fluid mb-2">
                <a href="${userData.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">view profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${userData.public_repos}</span>
                    <span class="badge badge-secondary">Public gists: ${userData.public_gists}</span>
                    <span class="badge badge-success">Public followers: ${userData.followers}</span>
                    <span class="badge badge-info">Public following: ${userData.following}</span>
                    <br>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">company: ${userData.company}</li>
                        <li class="list-group-item">webSite/blog: ${userData.blog}</li>
                        <li class="list-group-item">location: ${userData.location}</li>
                        <li class="list-group-item">Member Since: ${userData.created_at}</li>
                    </ul>
                </div>
         
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }


    //Show error message
    showError(message, alertClass) {
        this.clearAlert();
        //    Create div to show error
        const divElement = document.createElement('div');
        divElement.className = alertClass;
        divElement.appendChild(document.createTextNode(message));
        //    Insert into html document
        const continer = document.querySelector('.searchContainer');
        //    get search box
        const seachbox = document.querySelector('.search');
        continer.insertBefore(divElement, seachbox);
        setTimeout(function () {
            divElement.remove();
        }, 2000);

    }

    clearContents() {
        this.profile.innerHTML = '';
    }

    clearAlert() {
        const currentalert = document.querySelector('.alert');
        if (currentalert) {
            currentalert.remove();
        }
    }
}