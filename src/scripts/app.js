const github = new Github();
const ui = new UI();

const serchField = document.getElementById('searchuser');
serchField.addEventListener('keyup', function (event) {
    const userText = event.target.value;
    if (userText === '') {

    } else {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showError("User Not Found", 'alert alert-danger');
                    ui.clearContents();
                } else {
                    ui.showProfile(data.profile);
                }
            });
    }
});