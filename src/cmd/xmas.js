const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "christmas",
    description: "christmas countdown",
    alias:["xmas"],
    
    async run(message, args, client) {
        const now = new Date();
        var date_now = now.valueOf()
        var date_future = 1703350800000
        if (date_now < date_future){
        var delta = Math.abs(date_future - date_now) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var date_end=1703437200000
        message.reply(`There's ${days} days and ${hours} hours left until Christmas`);}
	else if (date_now >= date_future && date_now < date_end) {message.reply(`Merry Christmas!`);}
	else {message.reply(`Christmas's done already, go wait for new year's`);}
	var time = new Date().toLocaleTimeString('en-US', { hour12: false,
                                                 hour: "numeric",
                                                 minute: "numeric",
                                                 second: "numeric"})
        console.log("[",time,"]", message.author.username,`wanted to know when's christmas`);
	

    }   
});
