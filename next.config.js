module.exports = {
	env: {
		github: 'https://github.com/istvan-kreisz',
		twitter: 'https://www.twitter.com/IKreisz',
		instagram: 'https://instagram.com/kreiszistvan',
		linkedin: 'https://www.linkedin.com/in/istvan-kreisz',
	},
	target: 'serverless',
	webpack: function (config, { isServer }) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		if (isServer) {
			require('./scripts/generate-sitemap')
		}
		return config
	},
}
