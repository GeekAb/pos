$(document).ready(function () {
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        if (username && password) {
            $.post(
                '/login/validate', {
                    username: username,
                    password: password
                },
                function (data) {
                    console.log(data);
                    alert(data);
                    window.location = '/user/showall';
                }
            ).fail(function (res) {
                alert("Error: " + res.getResponseHeader("error"));
            });
        } else {
            alert("A username and password is required");
        }
    });
});
