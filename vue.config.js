module.exports = {
    // outputDir: 'dist',
    // assetsDir: 'assets',
    // lintOnSave: false,
    devServer: {
        // open: true,
        // host: "localhost",
        // port: "8080",
        https: false,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}