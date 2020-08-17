const restify = require("restify");
const server = restify.createServer({
    name: 'RabbitMQ Demo',
    version: '1.0.0'
});

const config = require('./config');


const rawData = require('./sample.json');

const sampleRawData = JSON.stringify(rawData);

const producer = require('./producer');
producer(config.rabbit.queue, sampleRawData, durable = false);

server.listen(config.port, () => {
    console.log('%s listening at %s', server.name, server.url);
});


