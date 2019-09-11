// next.config.js
const withStylus = require('@zeit/next-stylus')
const poststylus = require('poststylus')
const autoprefixer = require('autoprefixer')

module.exports = withStylus({
	/* config options here */
	cssModules: true,
    cssLoaderOptions: {
		modules: "global",
        localIdentName: "[local]___[hash:base64:5]",
        importLoaders: 2
    },
    stylusLoaderOptions: {
        use: [
            poststylus([
                autoprefixer()
            ])
        ]
    }
})