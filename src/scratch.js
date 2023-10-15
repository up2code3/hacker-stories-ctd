function firstResponse() {
    console.log("who's there?");
}

function secondResponse(name) {
    console.log(`${name} who?`);
}

function badJoke(firstResponseHandler, secondResponseHandler) {
    console.log("knock, knock.");
    firstResponseHandler();
    console.log("Nobel.")
    secondResponseHandler("Nobel");
    console.log("Nobel... that's why I Knocked.")
}

console.log(badJoke(firstResponse, secondResponse));