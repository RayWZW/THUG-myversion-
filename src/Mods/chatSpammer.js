import actions from "../API/actions";

function chatSpammer() {
    const message = "THIS MEETING IS BEING HACKED BY UTC AND GEORGE FLOYD NEGROID INDUSTRIES GET FUCKED RETARD NIGGERS KILL ALL NIGGERS FUCK ALL NIGGERS HEIL HITLER BURN A NIGGER INTO THE SUN CURBSTOMP ALL THEM FUCKING NIGGERS KILL THEM RAPE THEM BURN THEM UNTIL THEY LEARN THAT THEY ARE BLACK FILTHY PATHETIC NIGGERS!!! https://discord.gg/bosinn";
    chatSpammer.isActive = true;

    const sendMessage = () => {
        if (chatSpammer.isActive) {
            actions.sendMessage(message);
            setTimeout(sendMessage, 0);
        }
    };

    sendMessage();
}

chatSpammer.isActive = false;

chatSpammer.stop = () => {
    chatSpammer.isActive = false;
};

export default chatSpammer;
