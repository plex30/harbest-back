const config = {
    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 5000,
    },
    db: {
        uri: process.env.DB_URI,
    },
};

module.exports = config;