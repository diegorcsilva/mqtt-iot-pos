const mosca = require('mosca');

const settings = {
  port: 1883,
};

const server = new mosca.Server(settings);

server.on('clientConnected', (client) => {
    console.log('client connected', client.id);
});

// fired when a message is received
server.on('published', (packet, client) => {
  console.log('Published', packet.payload);
});

server.on('ready', () => console.log("Mqtt broker on"));
