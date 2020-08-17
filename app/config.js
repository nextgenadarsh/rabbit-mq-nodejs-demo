const path = require("path");

require("dotenv").config({path: path.resolve(__dirname, '../.env')});

const config = {
    port: process.env.APP_PORT,
    rabbit: {
        connectionString: `amqp://${process.env.USER_NAME}:${process.env.PASS}@${process.env.HOST}/${process.env.VHOST}`,
        queue: process.env.QUEUE_NAME
    }
}

module.exports = config;