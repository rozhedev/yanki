import { STATE_LIST, TEXT_ERRORS, COMMON_VAL } from "../data/values";
import { isEmail } from "../data/regex";

const subscribeEmail = document.querySelector(".subscribe__form-inp");
const subscribeForm = document.getElementById("subscribe-form");


// * Email

function checkEmail(email) {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setErrorFor(email, TEXT_ERRORS.emptyInp);
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, TEXT_ERRORS.invalidMail);
    } else {
        setSuccessFor(email);
    }
}

// * Set functions

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.add(STATE_LIST.error)
    formControl.classList.remove(STATE_LIST.success);
    small.textContent = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.classList.remove(STATE_LIST.error)
    formControl.classList.add(STATE_LIST.success);
}

// * Call functions

if (subscribeEmail) {
    subscribeEmail.addEventListener("input", function (e) {
        e.preventDefault();
        setTimeout(() => {
            checkEmail(subscribeEmail);
        }, COMMON_VAL.eventInterval);
    });
}

if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        checkEmail(subscribeEmail);
    });
}