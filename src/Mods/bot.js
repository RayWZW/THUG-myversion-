let offset = 0;

function botMeeting(invisible = false) {
    let amount = prompt("How many bots?");

    localStorage.clear();
    window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;

    // Open a new tab for the bot panel
    let botWindow = window.open("about:blank", "Bot Panel - " + offset);

    offset++;

    botWindow.document.title = "Bot Panel";
    botWindow.document.body.style.backgroundColor = "black";

    let container = document.createElement("div");
    container.style.display = "flex"; // Changed to 'flex' for better layout
    container.style.flexWrap = "wrap"; // To allow wrapping of iframes
    botWindow.document.body.appendChild(container);

    for (let i = 0; i < amount; i++) {
        let frame = document.createElement('iframe');
        frame.src = meetingURL;

        if (!invisible) {
            frame.style.width = "700px"; // Increased width
            frame.style.height = "900px"; // Increased height
            frame.style.border = "none";
            frame.style.margin = "5px";
            frame.style.resize = "both"; // Allow resizing
        } else {
            frame.style.width = "0%";
            frame.style.height = "0%";
            frame.style.display = "none";
        }
        
        container.appendChild(frame);

        let scope = frame.contentWindow;  
        (scope.webpackChunkwebclient = scope.webpackChunkwebclient || []).push([[Symbol()], {}, function (require) {
            require(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7); // Bypass Zoom checking UID
        }]);
    }
}

export default botMeeting;
