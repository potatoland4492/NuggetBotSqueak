module.exports = {
	'advpoll': {
		description: 'Creates a new advanced poll and pings everyone with the **@PollPingers** role. This command is only allowed for users with the **@Pollers** role.',
		format: 'advpoll <poll-channel> <ask question> ;q; <option 1> ;; <option 2> ;; [option 3] ;; [option 4] ;; [option 5] ;; [option 6] ;; [option 7] ;; [option 8] ;; [option 9] ;; [option 10]'
	},
	'arson': {
		description: 'Commits arson. While this feature is pseudorandomly generated, certain users may experience a pattern. This is intentional.',
		format: 'arson'
	},
	'developer': {
		aliases: ['dev'],
		description: 'Returns developer info. Not for public use.',
		format: 'developer'
	},
	'invite': {
		description: 'Returns a URL to the bot invite page.',
		format: 'invite'
	},
	'guild': {
		description: 'Returns guild info.',
		format: 'guild'
	},
	'help': {
		description: 'Shows the list of commands (no arguments) or help on specified command (pass command name as argument).',
		format: 'help [command-name]'
	},
	'ping': {
		description: 'Checks connectivity with discord\'s servers.',
		format: 'ping'
	},
	'simpoll': {
		description: 'Creates a new poll and pings everyone with the **@PollPingers** role. This command is only available for **@Pollers**.',
		format: 'simpoll <poll-channel> <Question to be asked in the poll?>'
	},
	'status': {
		description: 'Returns a URL to the status page.',
		format: 'status'
	},
	'version': {
		description: 'Returns version notes.',
		format: 'version'
	},
}
