const path = require("path");

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src")
			}
		}
	},
	publicPath: process.env.NODE_ENV === "production" ? `/${process.env.CI_PROJECT_NAME}/` : "/"
};
