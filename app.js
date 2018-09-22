const mosca = require('mosca');

const settings = {
  port: 1883,
};

const server = new mosca.Server(settings);

server.on('clientConnected', (client) => {
    console.log('Cliente conectado: ', client.id);
});

// fired when a message is received
server.on('published', (packet, client) => {
  console.log('Tópico:', packet.topic)
  console.log('Mensagem:', packet.payload.toString())
});

let topics = []
// fired when a client subscribes to a topic
server.on('subscribed', (topic, client) => {
  console.log("Alguém se inscreveu no tópico:", topic);
  topics.push(topic)
  console.log("Tópicos criados:")
  topics.forEach((item) => console.log(item))
});

server.on('ready', () => console.log("Mqtt broker on"));
