#!/usr/bin/env node

const amqp = require("amqplib");
const config = require("./config");

/**
 * 
 * @param {*} queue 
 * @param {*} message 
 * @param {*} durable - Makes sure that messages are not lost when there is a broker restart or failure 
 */
const publishToQueue = async (queue, message, durable = false) => {
    try {
        console.log(config.rabbit.connectionString);
        const cluster = await amqp.connect(config.rabbit.connectionString);
        const channel = await cluster.createChannel();
        await channel.assertQueue(queue, durable = false);
        await channel.sendToQueue(queue, Buffer.from(message));

        console.info(' [x] Sending message to queue', queue, message);
    } catch(error) {
        console.error(error, 'Unable to connect to cluster.');
        process.exit(1);
    }
}

module.exports = publishToQueue;
