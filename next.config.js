module.exports = {
	env: {
		github: 'https://github.com/istvan-kreisz',
		twitter: 'https://www.twitter.com/IKreisz',
		instagram: 'https://instagram.com/kreiszistvan',
		linkedin: 'https://www.linkedin.com/in/istvan-kreisz',
	},
	target: 'serverless',
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	},
}
