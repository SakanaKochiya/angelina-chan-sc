const Command = require("../structures/Command.js");

module.exports = new Command({
    name: "ship",
    description: "Lets see how much likely you can marry the other person",

    async run(message, args, client) {
        if (message.author.bot) return;
        
        var numba = Math.floor(Math.random() * 101);
    if (args.slice(2).join(" ")==="") {
        var name = message.author.username
        var l = 0;
        } else {
            var name = args.slice(2).join(" ");
            var l = name.length+1;
        }
    var name2 = args.slice(1).join(" ");
    var te=0
    
    var l2 = name2.length
    var name2 = name2.substr(0, l2-l)

    console.log(message.author,"used a!ship", name2, name)
    if (name2 === 'Angelina'){
        if (name === 'Sakura Kaslana'){
         message.reply(`${name} x ${name2}: 100 %`)
        } else if (name === 'Sakura'){
            message.reply(`${name} x ${name2}: 100 %`)
           } else {var te=1}} else if (name2 === 'W'){
            if (name === 'N1K0'){
             message.reply(`${name} x ${name2}: 100 %`)
        } else {var te=1}} else if (name2 === 'Dusk'){
                    if (name === 'FreelanceCash53'){
                     message.reply(`${name} x ${name2}: 100 %`)
        } else {var te=1}}else {var te=1}
    if (te===1) {
        const s = args.slice(1).join(" ");
        var sp = false;
        var check = false;
        if (s.indexOf('-')>-1){
            var check = true;
        }
        if (s.indexOf(' - ')>-1){
            var sp = true;
        }

        if (check === true){
            if (sp === false){
        var name = s.substring(0, s.indexOf('-')); 
        var name2 = s.substring(s.indexOf('-')+1, s.length)
            } else {
        var name = s.substring(0, s.indexOf(' -')); 
        var name2 = s.substring(s.indexOf('- ')+2, s.length)
    }
        
        } else {
            var name2 = args.slice(1).join(" ");
            var name = message.author.username;
        }
        if (args.slice(1).join(" ")==="") {message.reply("No arguments were given")} else {message.reply(`${name2} x ${name}: ${numba} %`)}
        
        
    }

    }
});
