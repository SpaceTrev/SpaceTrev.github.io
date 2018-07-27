let name;
let email;
let message;
const config = {
    apiKey: "AIzaSyDSsfGgTtnBHmKdmEpWPIJ0Gd88dbYzbV8",
    authDomain: "space-trev-portfolio.firebaseapp.com",
    databaseURL: "https://space-trev-portfolio.firebaseio.com",
    projectId: "space-trev-portfolio",
    storageBucket: "space-trev-portfolio.appspot.com",
    messagingSenderId: "976235705469"
};
firebase.initializeApp(config);
const database = firebase.database();

$("#submit").on("click", function () {
    name = $("#icon_prefix").val();
    email = $("#icon_telephone").val();
    message = $("#icon_message").val();

    database.ref().push({
        name: name,
        email: email,
        message: message,
    });
    return formReset();
});

function formReset() {
    name = $("#icon_prefix").val(" ");
    email = $("#icon_telephone").val(" ");
    message = $("#icon_message").val(" ");
}