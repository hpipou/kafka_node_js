var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'}),
    producer = new Producer(client),
    // Ajouter un message à la topic <testo> et la partiction <0>
    payloads = [
        { topic: 'testo', messages: 'Hola LAMINE 00', partition: 0 }
    ];

producer.on('ready', function () {

    // simuler un envoie de message chaque UNE SECONDE
    setInterval(()=>{

        producer.send(payloads, function (err, data) {
            console.log(data);
        });
        
    }, 1000)

});
 
producer.on('error', function (err) {
    console.log("ERROR")
})