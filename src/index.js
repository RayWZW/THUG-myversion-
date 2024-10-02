import Menu from "./menu";
import core from "./API";
import autoUnmute from "./Mods/autoUnmute";
import botMeeting from "./Mods/bot";
import chatSpammer from "./Mods/chatSpammer";
import handSpammer from "./Mods/handSpammer";
import nameSpammer from "./Mods/nameSpammer";
import reactionSpammer from "./Mods/reactionSpammer";
import trollIframe from "./Mods/BB";
import meetingRecorder from "./Mods/meetingrecorder";
import clone from "./Mods/clone";
import "./config";
import nameChange from "./Mods/nameChange";

const bannerUrl = 'https://us04images.zoom.us/p/v2/8549d108896fd231d80a827f65472f1d43c26f55457be4d9cee1b894f1dfee1f/135b3d03-55be-4bb7-afe2-5789e89b4b57?type=large&_=5352'; 
let menu = Menu("THUGWARE", bannerUrl); 



Menu.addSeparator(menu);
Menu.addSeparator(menu);
Menu.addSubtitle(menu, '<b>BROUGHT TO YOU BY GEORGE FLOYD NEGROID INDUSTRIES</b>');
Menu.addSeparator(menu);
Menu.addSeparator(menu);

Menu.addButton(menu, 'Auto Unmute', true, autoUnmute, autoUnmute.stop);
Menu.addButton(menu, 'Chat Spammer', true, chatSpammer, chatSpammer.stop);
Menu.addButton(menu, 'BYPASS KICK', false, () => {
    localStorage.clear();
    sessionStorage.clear();
    core.frame.location.reload();
});
Menu.addSeparator(menu); 
Menu.addSeparator(menu); 
Menu.addButton(menu, 'Impersonate Guests', true, nameSpammer, nameSpammer.stop);
Menu.addButton(menu, 'Speed Rename', true, nameChange, nameChange.stop);
Menu.addSeparator(menu); 
Menu.addSeparator(menu); 

Menu.addSeparator(menu);
Menu.addButton(menu, 'Background Bots', false, () => {
    trollIframe(false);
}, () => {
    console.log('Button disabled!');
}, false, 'PAIR WITH SPEED RENAME FOR BEST RESULTS'); // Tooltip text


Menu.addButton(menu, 'Raise Hand Spammer', true, handSpammer, handSpammer.stop);
Menu.addButton(menu, 'Bot Meeting', false, botMeeting);
Menu.addButton(menu, 'Reaction Spammer', true, reactionSpammer, reactionSpammer.stop);
Menu.addButton(menu, 'Meeting Recorder', true, meetingRecorder, meetingRecorder.stop);
Menu.addButton(menu, 'Duplicate Meeting', true, () => {
    const amount = 1; 
    clone(amount); 
});


Menu.addSeparator(menu); 
Menu.addButton(menu, 'DISCORD', false, () => {
    window.open('https://discord.gg/bosinn', '_blank'); 
});

