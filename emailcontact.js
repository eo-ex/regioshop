document.addEventListener('DOMContentLoaded', function() {
    var emailElement = document.getElementById('email-link');
    var emailAddress = 'regioshopodenwaldbeta@gmail.com';

    emailElement.addEventListener('click', function() {
        window.location.href = 'mailto:' + emailAddress;
    });
});
