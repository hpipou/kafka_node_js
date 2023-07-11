var kafka = require('kafka-node'),
Consumer = kafka.Consumer,
client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),
consumer = new Consumer(
    client,
    [
        // Lire à partir de la topic <testo> et de la partition <0>
        { topic: 'testo', partition:0,  groupId : 'CUSTOMERS1'}
    ],
    {
        // TRUE : lire une fois, supprime automatiquement le msg
        // FALSE : ne pas supprimer le message
        autoCommit: false
    }
);
consumer.on('message', function (message) {
    console.log(message);
});