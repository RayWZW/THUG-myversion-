import actions from "../API/actions";
import thugCore from "../API";

function nameSpammer() {
    if (nameSpammer.nameSpammerInterval) {
        clearInterval(nameSpammer.nameSpammerInterval);
    }

    const attendees = thugCore.state.attendeesList.attendeesList.map(attendee => attendee.displayName);
    let currentIndex = 0;

    nameSpammer.nameSpammerInterval = setInterval(() => {
        if (attendees.length === 0) return;

        const username = attendees[currentIndex];
        const encodedUsername = username.includes(' ') ? username : encodeURIComponent(username);

        if (encodedUsername) {
            try {
                actions.changeUsername(encodedUsername);
            } catch (error) {
                console.warn(`Skipping user: ${username} - Error: ${error.message}`);
            }
        }

        currentIndex = (currentIndex + 1) % attendees.length;

        const updatedAttendees = thugCore.state.attendeesList.attendeesList.map(attendee => attendee.displayName);
        if (updatedAttendees.length !== attendees.length) {
            attendees.splice(0, attendees.length, ...updatedAttendees);
        }
    }, 1);
}

nameSpammer.nameSpammerInterval = null;
nameSpammer.stop = () => clearInterval(nameSpammer.nameSpammerInterval);

export default nameSpammer;
