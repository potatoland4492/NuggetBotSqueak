console.log("Including libraries;");

const { Client, MessageEmbed, Permissions } = require('discord.js');
const config = require('./config');
const commands = require('./help');


const version = 'v2.1.0 stable';
const id = '817214551740776479';
const invite = 'https://discord.com/api/oauth2/authorize?client_id=915726505663938621&permissions=277092682944&scope=bot%20applications.commands';
const gitrepo = 'https://github.com/potatoland4492/NuggetBotSqueak';

// Developer Mode
const devmode = false;
// Run ID: https://passwordsgenerator.net/?length=6&symbols=0&numbers=1&lowercase=1&uppercase=0&similar=1&ambiguous=1&client=1&autoselect=1
const runid = '0006';

// Leafy's Discord ID
const leafid = '489608179810959390';
// Developer Discord IDs: Akhil, Ethan
const devids = [id, '662780533406826531']

console.log("Creating Client;");

let bot = new Client({
	presence: {
		status: 'online',
		activity: {
			name: `${config.prefix}help`,
			type: 'PLAYING'
		}
	}
});


function fromdat(newDate) {
	let month = String(newDate.getMonth() + 1);
	let date = String(newDate.getDate());
	let year = String(newDate.getFullYear());
	let hour = String(newDate.getHours());
	let min = String(newDate.getMinutes());
	let sec = String(newDate.getSeconds());
	if (month.length < 2) month = '0' + month;
	if (date.length < 2) date = '0' + date;
	if (hour.length < 2) hour = '0' + hour;
	if (min.length < 2) min = '0' + min;
	if (sec.length < 2) sec = '0' + sec;
	return `${month}/${date}/${year} ${hour}:${min}:${sec} PST`;
}
function dat() {
	let d = new Date();
	let localTime = d.getTime();
	let localOffset = d.getTimezoneOffset() * 60000;
	let utc = localTime + localOffset;
	let target_offset = -8;	// PST from UTC 8 hours behind
	let los_angles = utc + (3600000 * target_offset);
	nd = new Date(los_angles);
	return fromdat(nd);
}

bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag} at ${dat()}.`);
	if (devmode) {
		bot.user.setPresence({
			status: 'idle',
			activity: {
				name: 'Unstable Developer Mode',
				type: 'PLAYING'
			}
		});
		console.log("Mode: Developer;");
	} else {
		console.log("Mode: Stable;")
	}
	console.log(`Run ID: ${runid}`);
});

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));

bot.on('guildCreate', async guild => {
	guild.systemChannel.send(new MessageEmbed()
		.setTitle("NuggetBotSqueak is here!")
		.setDescription(`Basic commands: \`;help\`, \`;version\`, \`;status\``)
	);
});

bot.on('roleCreate', role => {
	role.guild.systemChannel.send(new MessageEmbed()
		.setTitle("New Role")
		.setDescription(`Role Name: ${role.name}
		Role Mention: ${role.toString()}
		Role Color: ${role.hexColor}
		Role ID: ${role.id}
		Number of Members: ${role.members.size}
		Integration Role: ${role.managed}
		Created Timestamp: ${fromdat(role.createdAt)}
		Role Settings:
			Display Role Seperately: ${role.hoist}
			Mentionable by @everyone: ${role.mentionable}
			Create Invite: ${role.permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)}
			Kick Members: ${role.permissions.has(Permissions.FLAGS.KICK_MEMBERS)}
			Ban Members: ${role.permissions.has(Permissions.FLAGS.BAN_MEMBERS)}
			Manage Roles: ${role.permissions.has(Permissions.FLAGS.MANAGE_ROLES)}
			Manage Server: ${role.permissions.has(Permissions.FLAGS.MANAGE_GUILD)}
			View Audit Log:  ${role.permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG)}
			View Insights: ${role.permissions.has(Permissions.FLAGS.VIEW_GUILD_INSIGHTS)}
			Manage Webhooks: ${role.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS)}
			View Channels: ${role.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)}
			Manage Channels: ${role.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)}
			Send Messages: ${role.permissions.has(Permissions.FLAGS.SEND_MESSAGES)}
			Manage Messages: ${role.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)}
			Embed Links: ${role.permissions.has(Permissions.FLAGS.EMBED_LINKS)}
			Attach Files: ${role.permissions.has(Permissions.FLAGS.ATTACH_FILES)}
			Add Reactions: ${role.permissions.has(Permissions.FLAGS.ADD_REACTIONS)}
			Mention Everyone: ${role.permissions.has(Permissions.FLAGS.MENTION_EVERYONE)}
			Use External Emoji: ${role.permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS)}
			Read Message History: ${role.permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)}
			Send TTS Messages: ${role.permissions.has(Permissions.FLAGS.SEND_TTS_MESSAGES)}
			Connect to VC: ${role.permissions.has(Permissions.FLAGS.CONNECT)}
			Speak in VC: ${role.permissions.has(Permissions.FLAGS.SPEAK)}
			Use Voice Activity: ${role.permissions.has(Permissions.FLAGS.USE_VAD)}
			Priority Speaker: ${role.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)}
			Stream Video: ${role.permissions.has(Permissions.FLAGS.STREAM)}
			Mute Members: ${role.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)}
			Deafen Members: ${role.permissions.has(Permissions.FLAGS.DEAFEN_MEMBERS)}
			Administrator: ${role.permissions.has(Permissions.FLAGS.ADMINISTRATOR)}`)
	);
});
bot.on('roleUpdate', (oldrole, newrole) => {
	oldrole.guild.systemChannel.send(new MessageEmbed()
		.setTitle("New Role")
		.setDescription(`Role Name: ${oldrole.name}
		Role Mention: ${oldrole.toString()}
		Role Color: ${oldrole.hexColor}
		Role ID: ${oldrole.id}
		Number of Members: ${oldrole.members.size}
		Integration Role: ${oldrole.managed}
		Created Timestamp: ${fromdat(oldrole.createdAt)}
		Role Settings:
			Display Role Seperately: ${oldrole.hoist}
			Mentionable by @everyone: ${oldrole.mentionable}
			Create Invite: ${oldrole.permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)}
			Kick Members: ${oldrole.permissions.has(Permissions.FLAGS.KICK_MEMBERS)}
			Ban Members: ${oldrole.permissions.has(Permissions.FLAGS.BAN_MEMBERS)}
			Manage Roles: ${oldrole.permissions.has(Permissions.FLAGS.MANAGE_ROLES)}
			Manage Server: ${oldrole.permissions.has(Permissions.FLAGS.MANAGE_GUILD)}
			View Audit Log:  ${oldrole.permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG)}
			View Insights: ${oldrole.permissions.has(Permissions.FLAGS.VIEW_GUILD_INSIGHTS)}
			Manage Webhooks: ${oldrole.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS)}
			View Channels: ${oldrole.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)}
			Manage Channels: ${oldrole.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)}
			Send Messages: ${oldrole.permissions.has(Permissions.FLAGS.SEND_MESSAGES)}
			Manage Messages: ${oldrole.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)}
			Embed Links: ${oldrole.permissions.has(Permissions.FLAGS.EMBED_LINKS)}
			Attach Files: ${oldrole.permissions.has(Permissions.FLAGS.ATTACH_FILES)}
			Add Reactions: ${oldrole.permissions.has(Permissions.FLAGS.ADD_REACTIONS)}
			Mention Everyone: ${oldrole.permissions.has(Permissions.FLAGS.MENTION_EVERYONE)}
			Use External Emoji: ${oldrole.permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS)}
			Read Message History: ${oldrole.permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)}
			Send TTS Messages: ${oldrole.permissions.has(Permissions.FLAGS.SEND_TTS_MESSAGES)}
			Connect to VC: ${oldrole.permissions.has(Permissions.FLAGS.CONNECT)}
			Speak in VC: ${oldrole.permissions.has(Permissions.FLAGS.SPEAK)}
			Use Voice Activity: ${oldrole.permissions.has(Permissions.FLAGS.USE_VAD)}
			Priority Speaker: ${oldrole.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)}
			Stream Video: ${oldrole.permissions.has(Permissions.FLAGS.STREAM)}
			Mute Members: ${oldrole.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)}
			Deafen Members: ${oldrole.permissions.has(Permissions.FLAGS.DEAFEN_MEMBERS)}
			Administrator: ${oldrole.permissions.has(Permissions.FLAGS.ADMINISTRATOR)}`)
	);
	newrole.guild.systemChannel.send(new MessageEmbed()
		.setTitle("New Role")
		.setDescription(`Role Name: ${newrole.name}
		Role Mention: ${newrole.toString()}
		Role Color: ${newrole.hexColor}
		Role ID: ${newrole.id}
		Number of Members: ${newrole.members.size}
		Integration Role: ${newrole.managed}
		Created Timestamp: ${fromdat(newrole.createdAt)}
		Role Settings:
			Display Role Seperately: ${newrole.hoist}
			Mentionable by @everyone: ${newrole.mentionable}
			Create Invite: ${newrole.permissions.has(Permissions.FLAGS.CREATE_INSTANT_INVITE)}
			Kick Members: ${newrole.permissions.has(Permissions.FLAGS.KICK_MEMBERS)}
			Ban Members: ${newrole.permissions.has(Permissions.FLAGS.BAN_MEMBERS)}
			Manage Roles: ${newrole.permissions.has(Permissions.FLAGS.MANAGE_ROLES)}
			Manage Server: ${newrole.permissions.has(Permissions.FLAGS.MANAGE_GUILD)}
			View Audit Log:  ${newrole.permissions.has(Permissions.FLAGS.VIEW_AUDIT_LOG)}
			View Insights: ${newrole.permissions.has(Permissions.FLAGS.VIEW_GUILD_INSIGHTS)}
			Manage Webhooks: ${newrole.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS)}
			View Channels: ${newrole.permissions.has(Permissions.FLAGS.VIEW_CHANNEL)}
			Manage Channels: ${newrole.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS)}
			Send Messages: ${newrole.permissions.has(Permissions.FLAGS.SEND_MESSAGES)}
			Manage Messages: ${newrole.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)}
			Embed Links: ${newrole.permissions.has(Permissions.FLAGS.EMBED_LINKS)}
			Attach Files: ${newrole.permissions.has(Permissions.FLAGS.ATTACH_FILES)}
			Add Reactions: ${newrole.permissions.has(Permissions.FLAGS.ADD_REACTIONS)}
			Mention Everyone: ${newrole.permissions.has(Permissions.FLAGS.MENTION_EVERYONE)}
			Use External Emoji: ${newrole.permissions.has(Permissions.FLAGS.USE_EXTERNAL_EMOJIS)}
			Read Message History: ${newrole.permissions.has(Permissions.FLAGS.READ_MESSAGE_HISTORY)}
			Send TTS Messages: ${newrole.permissions.has(Permissions.FLAGS.SEND_TTS_MESSAGES)}
			Connect to VC: ${newrole.permissions.has(Permissions.FLAGS.CONNECT)}
			Speak in VC: ${newrole.permissions.has(Permissions.FLAGS.SPEAK)}
			Use Voice Activity: ${newrole.permissions.has(Permissions.FLAGS.USE_VAD)}
			Priority Speaker: ${newrole.permissions.has(Permissions.FLAGS.PRIORITY_SPEAKER)}
			Stream Video: ${newrole.permissions.has(Permissions.FLAGS.STREAM)}
			Mute Members: ${newrole.permissions.has(Permissions.FLAGS.MUTE_MEMBERS)}
			Deafen Members: ${newrole.permissions.has(Permissions.FLAGS.DEAFEN_MEMBERS)}
			Administrator: ${newrole.permissions.has(Permissions.FLAGS.ADMINISTRATOR)}`)
	);
});
bot.on('inviteCreate', async invite => {
	invite.guild.systemChannel.send(new MessageEmbed()
		.setTitle("New Invite")
		.setDescription(`
		Invite Code: ${invite.code}
		Invite URL: ${invite.url}
		Invite Channel: ${invite.channel}
		Created Timestamp: ${fromdat(invite.createdAt)}
		Expiration Timestamp: ${fromdat(invite.expiresAt)}
		Created By: ${invite.inviter}
		Maximum Age: ${invite.maxAge / 86400}
		Maximum Uses: ${invite.maxUses}
		Temporary Invite: ${invite.temporary}`)
	);
});
bot.on('guildMemberAdd', async user => {
	user.guild.systemChannel.send(new MessageEmbed()
		.setTitle(`${user.guild.name} has a new member`)
		.setDescription(`Everyone welcome <@!${user.id}>!`)
	);
});
bot.on('guildMemberRemove', async user => {
	user.guild.systemChannel.send(new MessageEmbed()
		.setTitle(`A member left ${user.guild.name}`)
		.setDescription(`The little carroting potato masquerading as <@!${user.id}> left the server. Good riddance!`)
	);
});
bot.on('guildScheduledEventCreate', async event => {
	event.guild.systemChannel.send(new MessageEmbed()
		.setTitle("New Event")
		.setDescription(`Event Name: ${event.name}
		Event Description: ${event.description}
		Start Time: ${fromdat(event.scheduledStartAt)}
		End Time: ${fromdat(event.scheduledEndAt)}
		Event Creator: ${event.creator}
		Event URL: ${event.url}`)
	);
});
bot.on('guildScheduledEventUpdate', async (oldevent, newevent) => {
	event.guild.systemChannel.send(new MessageEmbed()
		.setTitle("Updated Event")
		.addField('Old Event', `Event Name: ${oldevent.name}
		Event Description: ${oldevent.description}
		Start Time: ${fromdat(oldevent.scheduledStartAt)}
		End Time: ${fromdat(oldevent.scheduledEndAt)}
		Event Creator: ${oldevent.creator}
		Event URL: ${oldevent.url}`)
		.addField('New Event', `Event Name: ${newevent.name}
		Event Description: ${newevent.description}
		Start Time: ${fromdat(newevent.scheduledStartAt)}
		End Time: ${fromdat(newevent.scheduledEndAt)}
		Event Creator: ${newevent.creator}
		Event URL: ${newevent.url}`)
	);
});
bot.on('guildScheduledEventDelete', async event => {
	event.guild.systemChannel.send(new MessageEmbed()
		.setTitle("Deleted Event")
		.setDescription(`Event Name: ${event.name}
		Event Description: ${event.description}
		Start Time: ${fromdat(event.scheduledStartAt)}
		End Time: ${fromdat(event.scheduledEndAt)}
		Event Creator: ${event.creator}
		Event URL: ${event.url}`)
	);
});

bot.on('message', async message => {
	// Censoring
	let swears = ['fuck', 'bitch', 'arse', 'ass', 'dick', 'shit', 'cock', 'coc'];
	for (i = 0; i < swears.length; i++) {
		if (message.content.includes(swears[i])) {
			message.delete();
			message.guild.systemChannel.send(`Deleted message from ${message.author} in ${message.channel}. Timestamp: ${dat()}`);
			break;
		}
	}

	if (message.content.startsWith(config.prefix)) {
		if (message.author.bot) {
			return;
		} else if (devmode && message.author.id != id) {
			message.reply("Developer Mode is on. You are not allowed to use this bot.");
			return;
		}
		let args = message.content.slice(config.prefix.length).split(' ');
		let command = args.shift().toLowerCase();
		let guild = message.guild;
		switch (command) {
			case 'test':
				if (!devids.includes(message.author.id)) {
					message.reply("You are not allowed to execute this command.")
					break;
				} else if (!args[0]) {
					message.reply("No Arguments");
					break;
				} else {
					switch (args[0]) {
						case 'guildMemberAdd':
							message.reply("guildMemberAdd");
							bot.emit('guildMemberAdd', message.member);
							break;
						case 'guildMemberRemove':
							message.reply("guildMemberRemove");
							bot.emit('guildMemberRemove', message.member);
							break;
						case 'guildCreate':
							message.reply('guildCreate');
							bot.emit('guildCreate', guild);
					}
				}
				break;

			case 'version':
				message.channel.send(new MessageEmbed()
					.setTitle(`NuggetBotSqueak \`${version}\``)
					.setColor("#ff00ff")
					.setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
					.setThumbnail(bot.user.displayAvatarURL())
					.addFields(
						{ name: `Bot Version`, value: `\`${version}\`` },
						{ name: `Head Developer`, value: `Akhil Pillai (@akhilzebra#4492) [\`<@!${id}\`>]` },
						{ name: `Language`, value: `Node.js` },
						{ name: `Discord API Interaction Library`, value: `Discord.js` },
						{ name: `Bot Invite Link`, value: `${invite}` },
						{ name: `Development Server`, value: `https://discord.gg/zB49aFyd2n` },
						{ name: `Git Repository`, value: `${gitrepo}` },
					)
				).catch(console.error('VersionEmbed Error'));
				break;

			case 'dev':
			case 'developer':
				if (devids.includes(message.author.id)) {
					message.channel.send(new MessageEmbed()
						.setTitle("Developer Info")
						.setColor('RED')
						.addFields(
							{ name: `Version`, value: `\`${version}\`` },
							{ name: `Developer Contact`, value: `@akhilzebra#4492` },
							{ name: `Language`, value: `Node.js` },
							{ name: `Discord API Library`, value: `Discord.js` },
							{ name: `Bot Invite`, value: `${invite}` },
							{ name: `Development Server`, value: `https://discord.gg/zB49aFyd2N` },
							{ name: `Git Repository`, value: `${gitrepo}` },
							{ name: `Run ID`, value: `\`${runid}\`` },
							{ name: `Developer Mode`, value: `\`${devmode}\`` },
						)
					);
				} else {
					message.reply("You are not allowed to run this command because you are not a bot developer. Please contact `@akhilzebra#4492` if you have questions or would like to help develop this bot.")
				}
				break;

			case 'invite':
			case 'link':
				message.channel.send(new MessageEmbed()
					.setTitle("Bot Invite Page")
					.setDescription(invite)
					.setColor("#ff00ff")
					.setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
					.setThumbnail(bot.user.displayAvatarURL())
				).catch(console.error('InviteLinkEmbed Error'));
				break;

			case 'status':
				message.channel.send(new MessageEmbed()
					.setTitle("Status Page")
					.setDescription("https://stats.uptimerobot.com/oJ59mUD826")
					.setColor("#ff00ff")
					.setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
					.setThumbnail(bot.user.displayAvatarURL())
				);
				break;

			case 'arson':
				if (message.author.id === leafid) { message.channel.send(`<@!${leafid}> burned himself at the stake.`); }
				let arsonarray = ['the White House!', 'the Pentagon.', 'the Statue of Liberty!', 'their own house! XD', 'their school.', 'a little carroting potato (who probably deserved it).', `Microsoft\'s headquarters? Three cheers for ${message.author}!`, 'a 7-Eleven. :-(', 'a Noodle Shop...', 'their neighbor\'s house!', 'a potato masquerading as a potato. *Hmmmmm.....*'];
				let arsonindex = Math.round(Math.random() * (arsonarray.length - 1));
				message.channel.send(`${message.author} burned down ${arsonarray[arsonindex]}`);
				break;

			case 'guild':
				guild.fetch();
				message.channel.send(new MessageEmbed()
					.setTitle("Guild Info")
					.setColor('PURPLE')
					.setDescription(`Name: ${guild.name}
					Description: ${guild.description}
					Member Count: ${guild.memberCount}
					Guild Owner: <@!${guild.ownerId}>
					Guild Birthday: ${fromdat(guild.createdAt)}
					Updates Channel: ${guild.publicUpdatesChannel}
					Rules Channel: ${guild.rulesChannel}
					System Channel: ${guild.systemChannel}
					AFK Voice Channel: ${guild.afkChannel}
					AFK Timeout: ${guild.afkTimeout}
					Default Notification Level: ${guild.defaultMessageNotifications}
					NuggetBotSqueak Join Timestamp: ${fromdat(guild.joinedAt)}
					Maximum Members: ${guild.maximumMembers}
					Maximum Presences: ${guild.maximumPresences}
					Discord Partner: ${guild.partnered}
					Boosts: ${guild.premiumSubscriptionCount}`)
					.setThumbnail(guild.bannerURL({ format: 'png', size: '4096' }))
					.setFooter("Powered by NuggetBotSqueak")
				);
				break;

			case 'advpoll':
				if (message.member.roles.cache.some(role => role.name === 'Pollers')) {
					let qChannel = message.mentions.channels.first();
					if (!qChannel) {
						return message.reply(`Mention a channel first`).catch(console.error("addchannel"));
					} else {
						var embedAdvpoll = new MessageEmbed().setColor("#ffff00");
						let opts = message.content.slice(config.prefix.length).split(" ");
						opts.shift();
						opts.shift();
						let argArr = opts.join(' ').split(';q;');
						let question = argArr[0];
						let len = question.split(' ').length;
						for (i = 1; i <= len; i++) {
							opts.shift();
						}
						let resps = opts.join(' ').split(' ;; ');
						if (resps.length > 10) {
							message.reply("The maximum amount of options is 10.")
							break;
						}
						embedAdvpoll.setTitle(`Poll - ${question}`)
						console.log(`Question: ${question}`);
						console.log(`resps.length: ${resps.length}`);
						for (i = 0; i <= resps.length - 1; i++) {
							switch (i) {
								case 0:
									global.emo = ":one:";
									break;
								case 1:
									global.emo = ":two:";
									break;
								case 2:
									global.emo = ":three:";
									break;
								case 3:
									global.emo = ":four:";
									break;
								case 4:
									global.emo = ":five:";
									break;
								case 5:
									global.emo = ":six:";
									break;
								case 6:
									global.emo = ":seven:";
									break;
								case 7:
									global.emo = ":eight:";
									break;
								case 8:
									global.emo = ":nine:";
									break;
								case 9:
									global.emo = ":ten:";
									break;
							}
							embedAdvpoll.addField(`${global.emo}`, `${resps[i]}`);
						}
						let advpollPingRole = guild.roles.cache.find(role => role.name === "PollPingers");
						message.channel.send(`Your advanced poll Is ready in <#${qChannel.id}>!`).catch(console.error("sentmessage"));
						qChannel.send(`${advpollPingRole}: New advanced poll by <@${message.author.id}>: ${question}`).catch(console.error("sendalert"));
						qChannel.send(embedAdvpoll).then(m => {
							for (i = 0; i <= resps.length - 1; i++) {
								switch (i) {
									case 0:
										m.react("1️⃣");
										break;
									case 1:
										m.react("2️⃣");
										break;
									case 2:
										m.react("3️⃣");
										break;
									case 3:
										m.react("4️⃣");
										break;
									case 4:
										m.react("5️⃣");
										break;
									case 5:
										m.react("6️⃣");
										break;
									case 6:
										m.react("7️⃣");
										break;
									case 7:
										m.react("8️⃣");
										break;
									case 8:
										m.react("9️⃣");
										break;
									case 9:
										m.react("🔟");
										break;
								}
								embedAdvpoll.addField(`${global.emo}`, `${resps[i]}`);
							}
						}).catch(console.error("AdvpollEmbedReact Error"));
					}
				} else {
					return message.reply('You are not allowed to execute this command. Please ask another server member with the `@Pollers` role to create the poll for you.').catch(console.error("UserNotAllowedToCreatePoll"));
				}
				break;

			case 'simpoll':
				if (message.member.roles.cache.some(role => role.name === 'Pollers')) {
					let sayChannel = message.mentions.channels.first();
					let sayMsg = args.slice(1 || 0, args.length).join(" ");
					if (!sayChannel) {
						return message.reply(`Mention a channel first`).catch(console.error("addchannel"));
					} else if (!sayMsg) {
						return message.reply(`Add a poll question`).catch(console.error("addquestion"));
					} else {
						var embedSimpoll = new MessageEmbed()
							.setColor("#ffff00")
							.addField('Poll question:', `${sayMsg}`);
						let pollPingRole = guild.roles.cache.find(role => role.name === "PollPingers");
						message.channel.send(`Your poll Is ready in <#${sayChannel.id}>!`).catch(console.error("sentmessage"));
						sayChannel.send(`${pollPingRole}: New poll by <@${message.author.id}>:`).catch(console.error("sendalert"));
						sayChannel.send(embedSimpoll).then(m => {
							m.react('👍');
							m.react('👎');
							m.react('🧐');
						}).catch(console.error("SimpollEmbedReact Error"));
					}
				} else {
					return message.reply('You are not allowed to execute this command. Please ask another server member with the `@Pollers` role to create the poll for you.').catch(console.error("UserNotAllowedToCreatePoll"));
				}
				break;

			case 'ping':
				let pingmsg = await message.reply('Pinging...');
				await pingmsg.edit(`PONG! Message round-trip took ${Date.now() - pingmsg.createdTimestamp}ms.`)
				break;

			// Unless you know what you're doing, don't change this command.
			case 'help':
				let embedHelp = new MessageEmbed()
					.setTitle('HELP MENU')
					.setColor('GREEN')
					.setFooter(`Requested by: ${message.member ? message.member.displayName : message.author.username}`, message.author.displayAvatarURL())
					.setThumbnail(bot.user.displayAvatarURL());
				if (!args[0])
					embedHelp
						.setDescription(Object.keys(commands).map(command => `\`${command.padEnd(Object.keys(commands).reduce((a, b) => b.length > a.length ? b : a, '').length)}\`: ${commands[command].description}`).join('\n')); // Change to `.join('\n\n')`?
				else {
					if (Object.keys(commands).includes(args[0].toLowerCase()) || Object.keys(commands).map(c => commands[c].aliases || []).flat().includes(args[0].toLowerCase())) {
						let command = Object.keys(commands).includes(args[0].toLowerCase()) ? args[0].toLowerCase() : Object.keys(commands).find(c => commands[c].aliases && commands[c].aliases.includes(args[0].toLowerCase()));
						embedHelp
							.setTitle(`COMMAND - ${command}`)

						if (commands[command].aliases)
							embedHelp.addField('Command aliases', `\`${commands[command].aliases.join('`, `')}\``);
						embedHelp
							.addField('DESCRIPTION', commands[command].description)
							.addField('FORMAT', `\`\`\`${config.prefix}${commands[command].format}\`\`\``);
					} else {
						embedHelp
							.setColor('RED')
							.setDescription('This command does not exist. Please use the help command without specifying any commands to list them all.');
					}
				}
				message.channel.send(embedHelp);
				break;
		}
	}
});

require('./server')();
bot.login(process.env.TOKEN);
console.log("Logging in;")
