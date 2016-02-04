$(document).ready(function () {
    $("#btn-login").click(function () {
        var username = $("#login-username").val();
        var password = $("#login-password").val();
        if (username && password) {
            $.post(
                '/login/validate', {
                    username: username,
                    password: password
                },
                function (data) {
                    console.log(data);
                }
            ).fail(function (res) {
                alert("Error: " + res.getResponseHeader("error"));
            });
        } else {
            alert("A username and password is required");
        }
    });
});
