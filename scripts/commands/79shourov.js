const fs = require("fs");

module.exports.config = {
    name: "owners",
    version: "1.1.1",
    prefix: true,
    permission: 0,
    credits: "Md Fahim Islam", 
    description: "",
    category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    let react = event.body.toLowerCase();
    
    if (react.includes("owner") || react.includes("boss shourov") || react.includes("king shourov ")) {
        var msg = {
            body: "╭╼|━━━━━━━━━━━━━━|╾╮\n          king shourov \n╰╼|━━━━━━━━━━━━━━|╾╯"
        };

        api.sendMessage(msg, threadID, messageID);

        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
    }
};

module.exports.run = function({ api, event, client, __GLOBAL }) {
    
};
