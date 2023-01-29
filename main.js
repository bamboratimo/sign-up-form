let pwdFields = document.querySelectorAll(".error");
const notMatch = document.querySelector(".not-match-txt");

pwdFields.forEach(pwd => {
    pwd.classList.add("errorborder");
});

pwdFields.forEach(pwd => {
    pwd.addEventListener("focusout", checkPwds2);
});

function checkPwds2(e) {
    console.log(pwdFields[0].value, pwdFields[1].value)
    if (pwdFields[0].value !== pwdFields[1].value || (pwdFields[0].value.length === 0 || pwdFields[1].value.length === 0)) {
        pwdFields.forEach(pwd => {
            pwd.classList.remove("valid");
            pwd.classList.add("errorborder");
            notMatch.style.visibility = "visible";
        });
    } else if (pwdFields[0].value === pwdFields[1].value) {
        pwdFields.forEach(pwd => {
            pwd.classList.remove("errorborder");
            pwd.classList.add("valid");
            notMatch.style.visibility = "hidden";
        });
    }
}