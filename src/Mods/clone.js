import actions from "../API/actions";

let offset = 0;

function clone(amount) {
    localStorage.clear();
    const webClient = document.querySelector("#webclient");

    if (!webClient) {
        console.error("Element with ID 'webclient' not found.");
        return;
    }

    window.meetingURL = window.meetingURL || webClient.src;

    for (let i = 0; i < amount; i++) {
        let newTab = window.open(meetingURL, "_blank");

        (newTab.webpackChunkwebclient = newTab.webpackChunkwebclient || []).push([[Symbol()], {}, function (require) {
            require(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
        }]);

        newTab.focus();
    }
}

export default clone;
