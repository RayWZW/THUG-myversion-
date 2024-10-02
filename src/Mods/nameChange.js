import actions from "../API/actions";
import thugCore from "../API";

const firstNames = [
    "John", "Jane", "Alex", "Emily", "Michael", "Sarah", "David", "Laura", "Chris", "Jessica",
    "Robert", "Karen", "James", "Linda", "William", "Patricia", "Joseph", "Jennifer", "Charles", "Maria"
];

const lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"
];

function getRandomName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`; 
}

function nameChange() {
    if (nameChange.nameChangeInterval) {
        clearInterval(nameChange.nameChangeInterval);
    }

    const numberOfNames = 1000; 
    const namesArray = Array.from({ length: numberOfNames }, getRandomName); 
    let currentIndex = 0;

    nameChange.nameChangeInterval = setInterval(() => {
        if (namesArray.length === 0) return;

        const username = namesArray[currentIndex];
        const encodedUsername = username.includes(' ') ? username : encodeURIComponent(username);

        if (encodedUsername) {
            try {
                actions.changeUsername(encodedUsername);
            } catch (error) {
                console.warn(`Skipping user: ${username} - Error: ${error.message}`);
            }
        }

        currentIndex = (currentIndex + 1) % namesArray.length;
    }, 1); 
}

nameChange.nameChangeInterval = null;
nameChange.stop = () => clearInterval(nameChange.nameChangeInterval);

export default nameChange;