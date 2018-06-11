console.log('PakmanBotStatus: Active');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('hola :v');
	}
	if (message.content == 'p!oye conoces a jose?') {
		message.channel.sendMessage('cual jose?');
	}
	if (message.content == 'p!el que te cogio y se fue') {
		message.channel.sendMessage('ah se fue con maria');
	}
	if (message.content == 'p!cual maria') {
		message.channel.sendMessage('la que solo queria ser tu amiga :v');
	}
	if (message.content == 'p!permitame estrechar su mano de poeta a poeta') {
		message.channel.sendMessage(';v');
	}
	if (message.content == 'p!Normies') {
		message.channel.sendMessage('DONDE ESTAN ESOS PENDEJOS PARA MATARLES >:v');
	}
	if (message.content == 'p!Normies') {
		message.channel.sendMessage('PRRAS ESAS');
	}
	if (message.content == 'p!Normies') {
		message.channel.sendMessage('Gays :v');
	}
	if (message.content == 'p!Normies') {
		message.channel.sendMessage('GET OUT OF MY CHART');
	}
	if (message.content == 'p!c mamo') {
		message.channel.sendMessage('c bastian');
	}
	if (message.content == 'p!c mamut') {
		message.channel.sendMessage('c fue con otro');
	}
	if (message.content == 'p!c marnat') {
		message.channel.sendMessage('c ñora su hijo esta viendo nopor :v');
	}
	if (message.content == 'p!c pillin') {
		message.channel.sendMessage('c cretaria de educacion');
	}
	if (message.content == 'p!omae wa mou shindeirou') {
		message.channel.sendMessage('NANI!?!?! O.O');
	}
	if (message.content == 'p!sad') {
		message.channel.sendMessage('toma clorox :,v');
	}
	if (message.content == 'p!ella') {
		message.channel.sendMessage('no te ama :,v');
	}
	if (message.content == 'p!Yo+Ella*La Vida') {
		message.channel.sendMessage('es igual a que ella no te ama :,v');
	}
});
bot.login('NDM4NDUxMjM2MDMxNjkyODAx.DcEzIQ.FXQokmgNW_NWBpgeFGG9JD0adXM');
