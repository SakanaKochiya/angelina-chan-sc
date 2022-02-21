const { MessageFlags } = require("discord.js");
const Command = require("../structures/Command.js");
const op = require("../data/op.json")
module.exports = new Command({
    name: "operator",
    description: "show some operator infos",

    async run(message, args, client) {
        if (message.author.bot) return;
        var opname = args.slice(1).join(" ")
        
        console.log(message.author.tag,"used a!operator", opname)
        //6 stars
        if (opname === "Skalter"){
            message.channel.send(op.skalter)
        } else if (opname === "W"){
            message.channel.send("W is a Splash Sniper, specializing in dealing massive AOE physical attack. All of her skill is capable of stunning enemies, dealing more with her second Talent that will increase damage that stunned enemies recieve.\nShe excels from being a consistent source of damage. However, she have low HP stats, high DP cost and very long attack intervals. Fortunately, her second Talent can still benefit her allies even if W herself is between shots, making W a surprisingly good team player.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 1605\nAtk: 912\nDef: 133\nRes: 0\nDP: 29\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,8s\n\nRecommended skill: Jack-in-a-box (Skill 2)")
        } else if (opname === "Angelina"){
            message.channel.send(op.angelina)
        } else if (opname === "Ceobe"){
            message.channel.send(`Ceobe hurls her various weapons into the fray to deal extreme Arts damage and crowd-control her opponents, as what a ST Caster would do. She is especially good at changing the enemies she targets based on what you need her to do.\nFinding an isolated deployment spot to activate second Talent can be difficult on some maps, and first Talent doesn’t give much bonus damage against enemies with low DEF. Despite this, Ceobe is an absolute wrecking ball at destroying high-DEF enemies, which is usually the most important task for a ST Caster to fulfill. Give her an inch (of space) and this cerberus-inspired weaponsmaster will take a mile.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 1565\nAtk: 667\nDef: 128\nRes: 20\nDP: 21\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill:"Very Hot Blade"`)
        } else if (opname === "Dusk"){
            message.channel.send("Dusk, a Dispersion (Splash) Caster coming from her very own limited banner, takes on the daunting task of achieving relevance as a splash caster. As the branch is plagued with issues such as limited utility, poor range, and awful attack speed, Dusk's competitiveness against even the best of the casters is even more impressive. Dusk brings a strong, versatile kit that performs much better than the rest of her branch peers.\nHer most notable stat difference is her much considerably higher ATK stat compared to the rest of her branch. It helps set her up to be a better damage dealer, alongside a kit that allows her to make the most out of her scaling ATK.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 1801\nAtk: 918\nDef: 127\nRes: 20\nDP: 34\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,9s\n\nBtw did you know that it is Dusk Birthday today?")
        }else if (opname === "Chen"){
            message.channel.send("Chen, a Dual Strike Guard, capable of dealing consistent damage ~~and 1p auto deploy~~. Along with her trait that allows her to deal damage twice with each attack, what makes Chen so unique is the variety and effectiveness of her Skills.  Her role in battle changes based on the Skill she uses, and she is solid at all of them. \nChen’s greatest weakness is that she pays for her amazing Skills by only being able to charge them when she is attacking.  Although her Talent does soften the blow, it can be frustrating during breaks in battle watching Ch’en get no closer to her next Skill use while other Operators are charging.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 2880\nAtk: 610\nDef: 352\nRes: 0\nDP: 23\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,3s\n\nRecommended skill: Chi Xiao - Unsheath")
        } else if (opname === "Blaze"){
            message.channel.send("AoE Guard Blaze uses her combustive Originium powers to turn her chainsaw-on-a-stick into a weapon of mass destruction, dealing enormous amounts of DPS while also ensuring her own survival with various tools and tricks.Blaze’s main survival tools are her Talents.\nIn return for harnessing Blaze’s awesome power, Doctors have to pay the price with the usual weaknesses of AoE Guards. Blaze costs a lot of DP to deploy, and she doesn’t hit her full power until E2-promotion, which is when she finally gains Block-3 and can attack 3 enemies simultaneously. As a 6* unit, this costs a lot of resources. However, rest assured that Blaze will pay back this investment in spades.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 2821\nAtk: 765\nDef: 370\nRes: 0\nDP: 24\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: Chainsaw Extension Module (Skill 2)")
        } else if (opname === "Kaltsit"){
            message.channel.send("Kal'tsit is a Healer Medic who ironically does a poor job at healing. She is more akin to a guard operator thanks to her summon, Mon3tr, which her entire kit is built around. If you are in need of a powerful healer, using Kal will only lead to disappointment. Despite that, she is one of the best DPS operators in the game with her lane holding capabilities and powerful true damage bursts. She is easy to use for beginners and has a high skill ceiling, staying relevant even in the hardest content in the game. She will be a great addition to any player’s roster.\nKal’s stats are nothing special, being essentially what should be expected from her archetype. Most notably though is that, unlike the rest of her archetype, she has an entire extra row of range that is quite helpful in allowing her to reach further. Most importantly will be her summon’s stats\n\nStats+Summon stats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 2033/5433\nAtk: 490/1402\nDef: 255/405\nRes: 0/0\nDP: 20/10\nBlock: 1/3\nRedeploy time: 70s/25s\nAtkspd: 2,87s/2s\n\nRecommend skill: Command: Meltdown (skill 3)")
        } else if (opname === "Passenger"){
            message.channel.send(`Passenger, 6* Chain Caster Operator, skilled at AoE damage and rapidfire Slow effects.The array of complex machinery that Passenger wields is the source of the “chain lightning” Arts attacks of his archetype. These attacks bounce between multiple enemies (though they do not return to a target they have already hit), doing less damage with each bounce and inflicting a minor Slow effect.\nPassenger has a reputation for being a very weak 6* Operator. In general, the Chain Caster archetype has struggled to find a niche between the power of ST Casters and the better area control of AoE Casters, especially with high DP cost, slow ASPD, the brief duration of their Slow effect, and reliance on enemy positioning dragging them down. Passenger suffers extra roadblocks from his high SP costs and the many clunky aspects of his S3. It takes particular enemy positioning or lots of help from other Operators for Passenger to take center stage.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 1558\nAtk: 611\nDef: 130\nRes: 20\nDP: 33\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,3s\n\nRecommended skill: Glorious Shards (Skill 3)`)
        } else if (opname === "Chalter"){
            message.channel.send(`"This is not an official overview for this operator since he/she has not released for Global servers. All info in this overview are based on Aceship stats"\nChen the Holungday, also known as Chalter, is a 6* AOE close-range sniper, capable of deaing high amount of Physical damage to all enemies within range. She is well-known for her 3rd skill, and the 4th operator that have ammo-type skill, beside Ash, Toddifons and Tuye.\nChalter second Talent, Frugality, can be a great supporting talent for a full-auto bullet user like Ash. Her third skill, "Holiday storm", is very effective for mobs cleaning, crowd control and boss killing. A pack of debuffs (Def reduction, speed reduction) and buffs (attack increase, front row +150% from trait) is what made this skill really shine.But not all operator are completely flawless. Chalter suffer from a slow attack speed and high DP cost, just behind Mudrock and Passenger, in which can cause postioning operators against high attack ranged enemies like Faust a big problem.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 2501\nAtk: 773\nDef: 203\nRes: 0\nDP: 32\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,3s\n\nRecommended skill: “Holiday Storm” (Skill 3)\n\n"maybe write about chalter soon lel" - Chenotherapy`) 
        } else if (opname === "Skadi"){
            message.channel.send(`As a 6* Duelist Guard, Skadi specializes in DPS and Survival. Her Skill 2, Wave Strike, gives her a massive Attack buff for a short time right after she is deployed. This Skill is perfect for assassinating unarmored targets. Skill 3, Tidal Elegy, turns Skadi into an unstoppable juggernaut with boosted HP, Attack, and Defense. This Skill makes Skadi virtually invincible: your enemies will break upon her like waves upon the shore. Tidal Elegy is very expensive, so don't expect to use it several times in one fight, but it starts off with a huge chunk of SP, making it easy to use soon after Skadi is deployed.\nSkadi has one of the highest ATK and HP stats in Arknights, but the same can’t be said for her Defense. She is more on the fragile side when it comes to taking hits, despite her huge health pool. Along with only being able to Block-1, Skadi clearly excels at attacking rather than defending.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 3665\nAtk: 933\nDef: 263\nRes: 0\nDP: 19\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,5s\n\nRecommended skill: Tidal Elegy (Skill 3)`) 
        } else if (opname === "Mudrock"){
            message.channel.send(`Mudrock is a powerful Enimity Defender packing very strong offensive and defensive capabilities. She has the highest DP cost in the game, but makes up for it with an extremely high power ceiling, being able to take on most enemies in the game. She’s useful pretty much anywhere, and can be considered one of the most powerful operators in the entire game. Her only real downside is needing the DP to put her down.\nMudrock’s stats are very high as per the archetype, with a huge HP pool, strong ATK and DEF stats, and 3-block that more than make up for having the highest upfront DP cost of any operator in the game. She scales very well with additional levels, as her high stat growth contributes to all of her aspects including self-sustainability. Her archetype trait is that she cannot be directly healed by allies. However, this does not mean that she cannot be healed at all, as “regeneration” type heals will still work just fine on her - same as any other operator with a similar trait.\n\nStats(Elite 2 lvl 90, not include trust bonus and potential):\nHP: 3928\nAtk: 882\nDef: 602\nRes: 10\nDP: 36\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill: Crag Splitter (Skill 2)\n\n@Farming rocc for M3 Angie maybe mudrock next...`) 
        }
        //5 stars
        //4 stars
        else if (opname === "Ambriel"){
            message.channel.send(`4* Long-range Sniper with elements of crowd-control.Ambriel has a fascinating Talent called Precise Strike, which gives her a chance to Stun enemies when attacking them outside of her default range. In order to extend her reach and activate this Talent, she uses her two Skills.\nThe idea of an infinite-range Stun is extremely tempting, but Ambriel’s performance is not without flaws. Slow attack speed, especially while Radar Sweep is active, limits her DPS (despite her high ATK) and diminishes the activation chance of her Talent. If the RNG is feeling cruel, Ambriel may not be able to accomplish much in terms of crowd-control. On the other hand, when luck is on her side, Ambriel can Stun and assassinate opponents from the other side of the screen, long before they even get a glimpse of your frontline.\n\nStats(Elite 2 lvl 70, not include trust bonus and potential):\nHP: 1595\nAtk: 977\nDef: 122\nRes: 0\nDP: 20\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,7s\n\nRecommended skill: Radar Sweep (Skill 2)`)
        } 
        //3 stars
        else if (opname === "Fang"){
            message.channel.send(`Like all Skill-DP-Recovery Vanguards, Fang has the ability to block two enemies and recovers DP with a skill, in her case Charge 𝛂.  As her Defense stat is higher than the other Vanguards of her rarity, she is the best defensive choice of the bunch. With her talent reducing her already low DP cost, she is the cheapest of all Skill-Recovery Vanguards.  This may make her worth considering for maps with extremely fast starts where a few DP at the beginning will make the difference.\nAs a low rarity Operator, Fang’s biggest weakness is that she cannot be upgraded to Elite 2. This causes her to fall behind other operators at higher levels due to a lower stat cap and lack of additional utility.  Overall, Fang is a solid defense-oriented Vanguard option for Doctors in the early game, though she will eventually be outclassed by her higher-rarity counterparts.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1325\nAtk: 325\nDef: 260\nRes: 0\nDP: 11\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,05s\n\nRecommended skill: Charge α(Skill 1)`) 
        } else if (opname === "Vanilla"){
            message.channel.send(`A hard worker with a serious attitude, Vanilla has a softer side that reveals itself in her love for animals. She is an offensive Skill-DP-Recovery Vanguard.  As her most unique feature, her Command - Reinforcement skill increases Attack and gains DP.  This skill's manual trigger allows it to be saved for burst damage or used on Cooldown to maximize DP gain.  The drawback of this flexibility is that the DP recovery efficiency is rather low.\nVanilla’s biggest weakness is that her stats are, well… vanilla. There are better options for pure attack or defense purposes. Along with her rarity limiting her Elite status and combat stats, she also has very low base attack and defense stats relative to her rarity peers.  Overall, Vanilla might be useful to Doctors in the early game when they need a flexible option, but she will likely be replaced after obtaining higher rarity or specialized Operators.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1270\nAtk: 355\nDef: 240\nRes: 0\nDP: 9\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,05s\n\nRecommended skill: Command - Reinforcement(Skill 1)`) 
        } else if (opname === "Hibiscus"){
            message.channel.send(`Hibiscus is the bread-and-butter healer for many new Doctors. Her unimpressive base stats are buoyed by her Healing Up Talent and her Healing Up α Skill (noticing a pattern with the names there?), both of which increase her ATK so she can output more healing. She’s comparatively cheap to raise and to deploy, and the burst healing generated by Healing Up α can be crucial to surviving a nasty enemy wave.\nHibiscus is a very serviceable healer, but many Medics in Arknights also bring powerful forms of utility to their team, such as damage mitigation, offensive buffs, or unique healing ranges. Not only does Hibiscus lack such an advantage, but she is also unable to E2-promote, which limits her overall growth potential. That being said, a Medic’s primary job is to heal, and in the early game, Hibiscus delivers on this job admirably. Her battlefield duties should eventually be replaced by more combat-ready Operators, but reliable Hibiscus is always there for you in case you need her.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1220\nAtk: 345\nDef: 110\nRes: 0\nDP: 17\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,85s\n\nRecommended skill: Healing Up α(Skill 1)`) 
        } else if (opname === "Ansel"){
            message.channel.send(`Unlike other 3* single-target Medic, Ansel pack a surprisingly unique kit and a charmingly androgynous appearance. Ansel’s Talent, Additional Healing, grants a small chance to heal an extra ally, and though you can’t depend on it due to its random nature, a proc can give your team some breathing room in a fight. His Skill, Healing Range Up, is more reliable: when activated, it increases Ansel’s healing power and (more importantly) his range.\nAnsel’s emphasis on range makes him noteworthy even in comparison to higher-rarity Medics. Many players use Ansel for quite some time, and experienced Doctors can sustain some interesting formations with smart use of his Skill. Unfortunately, as a 3★ Operator, Ansel lacks an E2 promotion, so his stats won’t keep up with the needs of high-end content. This does not detract from Ansel’s value as a budget Medic with useful abilities who is well worth investing in, especially early game.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1220\nAtk: 345\nDef: 110\nRes: 0\nDP: 17\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,85s\n\nRecommended skill: Healing Up α(Skill 1)`) 
        } else if (opname === "Lava"){
            message.channel.send(`The textbook example of an AoE Caster, Lava’s wide-range Arts attacks are perfect for burning through groups of weak enemies that would otherwise overwhelm your Operators by sheer force of numbers. Her Talent, Quick Skill Usage, gives her SP when she is deployed so she can more quickly use her Skill, Tactical Chant α, which increases her attack speed. Slow attack speed is a big weakness for AoE Casters, so this is a helpful Skill indeed.\nLava can be very useful in the early game, when Doctors may not have access to many AoE options. However, she starts to fall behind as AoE Snipers, AoE Guards, and higher-rarity AoE Casters enter the picture. Her Talent doesn’t help her to stand out (most Operators are granted Initial SP for their Skills by default) and she can’t E2-promote, so her long-term growth is limited.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1070\nAtk: 535\nDef: 95\nRes: 15\nDP: 30\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,9s\n\nRecommended skill: Healing Up α(Skill 1)`) 
        } else if (opname === "Plume"){
            message.channel.send(`Plume specializes in DP-Recovery and DPS. She obtains 1 DP on every kill and her DP Cost is refunded in full upon retreating. Her talent and skill both support her role as an offense-oriented vanguard. The Attack Increase talent improves her attack by a small amount, while her Swift Strike 𝛂 skill further increases her attack and gives her additional attack speed. Relative to her cost, her ATK stat is quite high among vanguards, and at equal levels she rivals even some of the top rarity operators in her class.\nUnfortunately, she cannot be upgraded to Elite 2, which means her stats will be lower than her higher rarity counterparts late game. Additionally, Plume's low HP, and her skill’s high SP cost dampen her offensive potential. On the whole she is a low cost operator who can provide DPS in the first stages of a mission, while recovering some DP for deploying other units.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1226\nAtk: 445\nDef: 279\nRes: 0\nDP: 10\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1s\n\nRecommended skill: Swift strike α(Skill 1)`) 
        } else if (opname === "Steward"){
            message.channel.send(`Steward’s kit is beautifully simple. His Armor Break Talent gives him a passive ATK buff and inspires his unique A.I. targeting. Then, every few seconds, his Power Strike α Skill automatically amps up the damage of his next strike. Together, this means his DPS is quite a bit higher than his base ATK power would suggest, and his A.I. means he’s usually going to be leveraging it on the best targets in his range.\nTargeting alone does not a strong Caster make, however. You can make any Caster target a high-DEF enemy simply by killing everything else first. Steward’s unique A.I. is usually only important when a high-DEF enemy (i.e., an armored drone) sneaks up to you amidst a bunch of other foes, and you need that enemy to die right away. In most other cases, Steward’s limited potential (as a 3* unit, he lacks an E2 promotion) makes other Casters a stronger choice. However, when his specialty is needed, he can be quite uniquely useful to your strategy.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1100\nAtk: 470\nDef: 90\nRes: 15\nDP: 18\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill: Power strike α(Skill 1)`) 
        } else if (opname === "Kroos"){
            message.channel.send(`A 3★ Anti-Air Sniper with surprising burst damage potential, Kroos can even pull her weight in difficult late-game stages, especially if you don’t have multiple higher-rarity Snipers who can replace her. The trick is in how smoothly Kroos’s kit synergizes with itself. Her Talent, has a random chance to increase the damage of her attacks (like a critical hit in other games). Meanwhile, her Double Tap – Auto Skill automatically triggers every few attacks and causes her to shoot two stronger arrows at once.\nOf course, being a 3★ unit also means that Kroos cannot E2-promote, which puts a cap on how much she can grow to help the team. Promotion gives higher-rarity Operators access to more levels and additional Skills, giving them an advantage. On the other hand, many stages are easier if you deploy multiple Snipers, and while Kroos may fall behind over time, she’ll remain an excellent backup Sniper for much longer than you might expect.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1060\nAtk: 375\nDef: 126\nRes: 0\nDP: 11\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1s\n\nRecommended skill: Double Tap - Auto (Skill 1)`) 
        } else if (opname === "Adnachiel"){
            message.channel.send(`As a 3 stars, Adnachiel’s kit is simple and straightforward. Once promoted to E1, he gains the Shortcoming Breakthrough Talent, which increases his attack speed and causes him to prioritize ranged targets first, which is a fairly rare targeting priority. If you want to use Adnachiel, be sure to promote him quickly so he gains this ability. His Skill, ATK Up α, increases his ATK for the duration, which is simple but useful.\nUnfortunately, despite his status as a “genius,” Adnachiel has some flaws holding him back. As a 3★ Operator, Adnachiel can’t E2-promote, limiting his growth potential and his number of Skills. His niche is usually not necessary, 2★ Sniper Rangers is a better (and cheaper) choice for anti-air, and 3★ Sniper Kroos has better general-purpose DPS. However, if you’re struggling to pick off some annoying ranged enemies—or if you’re just charmed by his quirky visual design—then Adnachiel may be useful to you.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1080\nAtk: 365\nDef: 134\nRes: 0\nDP: 11\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1s\n\nRecommended skill: ATK Up α (Skill 1)`) 
        } else if (opname === "Orchid"){
            message.channel.send(`Using her trusty umbrella as a focal point for her Arts, Orchid plays the part of a Slowing Supporter Operator on the battlefield. In order to apply her Slow debuffs reliably, Orchid’s kit shines a spotlight on the benefits of attack speed. Her Talent, Casting Speed Up, is a simple attack speed buff, and her Swift Strike α Skill increases her Attack power and attack speed for its duration. High attack speed allows Orchid to keep her Slow applied to a single target consistently, and it also helps her switch to new targets quickly when her original target dies.\nAs with many other 3* Operators, low base stats and lack of an E2 promotion hold Orchid back from being an appealing long-term investment. The competition in the Slowing role is also fierce, with fellow Supporters possessing utility that Orchid can’t quite match. That being said, Orchid is remarkably accessible through Recruitment and can be a competent Slower and supplemental Arts DPS unit for players who are looking for a little extra utility\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 935\nAtk: 378\nDef: 83\nRes: 15\nDP: 12\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,9s\n\nRecommended skill: Swift Strike α (Skill 1)`) 
        } else if (opname === "Melantha"){
            message.channel.send(`Despite being a humble 3★ Guard, Melantha is one of the stronger low-level DPS Operators in Arknights, and many Doctors continue deploying her long after they have stopped using other 3★ units. Melantha is what some players call a “stat stick”: rather than fancy tricks, she packs her power into her raw stats. Her HP and ATK are ridiculously high for her rarity and DP cost, and the ATK buffs from her ATK Up Talent and ATK Up α Skill boost her already-high DPS to even more impressive levels.\nDespite this, Melantha does fall off in high-end content. Her kit lacks the utility that many higher-rarity Guards bring to the table, and her lack of an E2 promotion limits her potential in the long run. That being said, with the accessibility and low investment cost of a 3★ rarity on her side, it’s no surprise Melantha carries so many Doctors on her well-bred shoulders.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 2745\nAtk: 738\nDef: 155\nRes: 0\nDP: 15\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,5s\n\nRecommended skill: ATK Up α (Skill 1)\n\n"Activate Melantha skill" - Kyo, probably`) 
        } else if (opname === "Beagle"){
            message.channel.send(`Beagle is the baseline unit for Defenders in Arknights, even as a 3★ Defender. Everything about her kit is focused entirely on mitigating physical damage. She gains bonus DEF from her Potential bonuses, her Trust bonuses, and her Talent—appropriately called DEF Up—and her Skill, DEF Up α, offers another DEF buff on top of everything else. Because she can Block up to 3 enemies and shrug off their attacks fairly easily, she’s often one of the best Defenders for Doctors to raise early in their Arknights careers.\nBeing a 3* unit, Beagle can promote to E1, but not to E2, which limits her ability to keep up with higher-rarity Operators. She also has no way to mitigate enemy Arts damage, which becomes increasingly common in higher-end content. Despite this, Beagle remains useful for a surprisingly long time. Doctors often need multiple Defenders to cover different parts of a map, and Beagle’s low rarity means she is cheap to raise and has a comparatively low DP cost.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 2035\nAtk: 295\nDef: 490\nRes: 0\nDP: 18\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: DEF Up α (Skill 1)`) 
        } else if (opname === "Spot"){
            message.channel.send(`This 3* Operator is a healing Defender with a particular emphasis on helping his allies survive physical damage. In order to heal his allies, Spot makes use of his Skill, Secondary Healing Mode, which causes him to heal instead of attacking for the Skill’s duration. This Skill activates his Talent, Smoke Installation, which grants allies Physical Evasion after Spot heals them. Between these two abilities, Spot supplements the frontline well: he can bottleneck enemies with his Block-2 (Block-3 after promoting), he has innate RES to stand up to enemy Casters, and when the chips are down he can function as an extra healer.\nSpot’s low rarity makes him easier to max out in Potential than higher-rarity Defenders, but unfortunately it also hampers his maximum power. As a 3* Operator, Spot can never promote to E2, limiting his stats and abilities. The unreliability of Physical Evasion is also an issue. Early players in particular may find good use for Spot, since his combination of tankiness, extra healing, lucky buffs, and accessibility can be a lifesaver when resources are limited. However, he’ll have difficulty keeping up with other units when taking on more challenging content.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1833\nAtk: 320\nDef: 442\nRes: 10\nDP: 17\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: Secondary Healing Mode(Skill 1)`) 
        } else if (opname === "Cardigan"){
            message.channel.send(`Clumsy but cheerful, Cardigan supports as a 3* Defender with an emphasis on HP. Perhaps as a representation of her boundless energy, Cardigan’s Talent, Max HP Up, passively increases her maximum HP after E1 promotion. This works well with her Skill, Regeneration α, which restores a percentage of Cardigan’s max HP when activated. Judicious use of this Skill can make Cardigan a decent option for tanking enemy Casters despite her lack of RES, as she can shrug off their Arts with a self-heal and keep face-tanking for a while longer.\nCardigan runs into problems when facing strong enemies that hit harder than her HP pool can handle. Her self-heal is great for sustain, but it doesn’t increase her ability to mitigate damage. Lacking an E2 promotion also limits Cardigan’s ability to contribute in the long term, and at present she is not available from Recruitment, which makes her a little less accessible than her 3* ranking would suggest\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 2130\nAtk: 305\nDef: 475\nRes: 0\nDP: 18\nBlock: 3\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: Regeneration α(Skill 1)`) 
        } else if (opname === "Catapult"){
            message.channel.send(`Catapult is a 3★ Operator with the typical AoE Sniper attributes of extended attack range, high Attack, slow Attack Speed, and high Deployment cost. Lightweight, Catapult’s Talent, reduces her DP cost by 1. Since AoE Snipers are generally expensive to deploy, this may make her worth considering even over higher-rarity options for maps with tight DP restrictions. Catapult’s one and only Skill, Blast Range Up 𝛂, increases the Area of Effect of her attacks\nCatapult’s major shortcomings stem from her low rarity.  Lower base stats and the lack of an E2 upgrade mean she won’t have a place on your late-game roster.  For early game, however, you may find that her cheap investment costs and knack for blowing stuff up is exactly what you need to help you progress.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1150\nAtk: 617\nDef: 85\nRes: 0\nDP: 23\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,8s\n\nRecommended skill: Blast Range Up α(Skill 1)`) 
        } else if (opname === "Midnight"){
            message.channel.send(`An accessible 3★ DPS Guard who can deal Arts damage on demand, Midnight is a low-investment damage dealer whose unique talents may still be helpful on later maps with tight DP constraints. Midnight only has one Skill, but he knows that what really matters is how you use it. Enchant Weapon α gives Midnight a damage boost and turns his attacks into Arts damage. It’s a simple effect, but very useful against high-DEF enemies.\nUnfortunately, when you try to please two clients equally, you run the risk of pleasing neither. While Midnight can deal both physical and Arts damage, he sacrifices power in both areas for his flexibility. In some situations, it is better to have dedicated DPS units for both roles rather than trying to combine the two, especially since Midnight’s Skill is expensive and doesn’t last very long.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1653\nAtk: 497\nDef: 282\nRes: 10\nDP: 16\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,3s\n\nRecommended skill: Enchant Weapon α(Skill 1)`) 
        } else if (opname === "Popukar"){
            message.channel.send(`Popukar, 3* AoE Guard who can deal Physical damage to two enemies at once. Like most 3* Operators, Popukar's skillset is straightforward.  Her talent provides a percent HP and Attack buff, while her skill ATK Up α provides a manual attack buff on a medium cooldown and no starting SP.\nAs a 3* AoE Guard, Popukar cannot reach Elite 2, missing out on blocking/attacking three enemies like her higher rarity peers.  Although this may seem like it defeats the purpose of using an AoE Guard, Popukar has a comparable statline to her Archetype peers at Elite 1, making her as effective as a pure attacker at a much lower investment cost.\n\nStats(Elite 1 lvl 55, not include trust bonus and potential):\nHP: 1858\nAtk: 495\nDef: 245\nRes: 0\nDP: 19\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,2s\n\nRecommended skill: ATK Up α(Skill 1)`) 
        }
        //2 stars
        else if (opname === "Yato"){
            message.channel.send(`Yato is a low rarity Starter that can block 2 enemies. Yato has a very low DP cost in addition to the shortened redeployment time granted by her Fast Redeployment talent. Unlocking her potential will reduce these even further, making her an extremely cost efficient drop. But even off the battlefield, she can be a valuable asset in the Trading Post, as her RIIC skill is better than some higher rarity units.\nYato’s main downside is her rarity, which means her low level cap will make her quickly fall behind other operators and that she cannot use special skills. Noticeably, Yato cannot recover DP like typical Vanguards. Thus, she functions more as a redeployable, low-cost Guard.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1030\nAtk: 232\nDef: 192\nRes: 0\nDP: 7\nBlock: 2\nRedeploy time: 70s\nAtkspd: 1,05s\n\nRecommended skill: None`) 
        } else if (opname === "Durin"){
            message.channel.send(`As a 2* Operator, Durin has no Skills and cannot promote. She does gain the Lucky Lass Talent at level 30, which gives her an enormous amount of Arts Dodge. Combined with her innate RES, Durin can be a surprisingly good early-game option for tanking enemy Casters.Without promotion gains or Skills, Durin has a tough time competing with free 5* donki for a roster spot, let alone other Casters the player may pull. Her biggest selling point is probably her low DP cost, making her a cheap source of Arts damage for maps with limited DP. \n\nStats(lvl 30, not include trust bonus and potential):\nHP: 952\nAtk: 340\nDef: 62\nRes: 10\nDP: 12\nBlock: 1\nRedeploy time: 70s\nAtkspd: 1,6s\n\nRecommended skill: None`) 
        } else if (opname === "12F"){
            message.channel.send(`As a 2★ Starter Operator, 12F has no Skills and cannot be promoted. He does gain a Talent upon reaching level 30, though: Dodge Rate Up, which grants an enormous amount of passive Physical Dodge. Combined with his surprisingly high HP (even without promotion, his HP is higher than some 3★ Casters at max level), 12F can be unexpectedly survivable, especially if you stack additional sources of Physical Dodge on him from other Operators.\nAs an AoE Caster, 12F’s role is to do damage, usually to counter huge waves of weak enemies, and despite his purely defensive Talent and lack of promotion, his DPS is often sufficient to get the job done in the early game. As a 2★ unit, he also benefits from low DP cost (high DP cost is a drawback for most AoE Casters) and cheap upgrade costs, causing some Doctors to choose him over his higher-rarity, higher-DPS counterpart Lava.\n\nStats(lvl 30, not include trust bonus and potential):\nHP: 1378\nAtk: 400\nDef: 50\nRes: 10\nDP: 24\nBlock: 1\nRedeploy time: 70s\nAtkspd: 2,9s\n\nRecommended skill: None`) 
        }
        //list
        else if (opname === "list"){
            message.channel.send(`The database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** none\nRemember to make the first letter of the name CAP`) 
        } 
        //error message
        else message.reply(`Info fetched failed, the database currently have: \n**6 stars:** Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock\n**5 stars:** none \n**4 stars:** Ambriel \n**3 stars:** Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel, Orchid, Melantha, Beagle, Spot, Cardigan, Catapult, Midnight, Popukar\n**2 stars:** Yato, Durin, 12F\n**1 stars:** none\nps: If you typed in the operator in the database and still get this error, try checking the spelling and make the first letter cap`)
     //6 stars:Angelina, Skadi, Skalter, W, Ceobe, Dusk, Chen, Blaze, Kaltsit, Passenger, Chalter, Mudrock \n 4 stars: Ambriel \n3 stars: Fang, Plume, Vanilla, Hibiscus, Ansel, Lava, Steward, Kroos, Adnachiel
    }   
});
