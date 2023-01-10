export function isFullname(fullname) {
    return /\b([A-Z]{1}[a-z]{1,30}[- ]{0,1}|[A-Z]{1}[- \"]{1}[A-Z]{0,1}[a-z]{1,30}[- ]{0,1}|[a-z]{1,2}[ -\"]{1}[A-Z]{1}[a-z]{1,30}){2,5}/.test(fullname);
}

export function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}