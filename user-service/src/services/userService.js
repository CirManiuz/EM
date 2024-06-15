const db = require('../db');
const amqp = require('amqplib/callback_api');

function sendMessage(queue, msg) {
	amqp.connect('amqp://localhost', (err, conn) => {
		conn.createChannel((err, ch) => {
			ch.assertQueue(queue, { durable: false });
			ch. sendToQueue(queue, Buffer.from(msg));
			console.log(`Sent message to ${queue}: ${msg}`);
		});
		setTimeout(() => { conn.close(); }, 500);
	});
}


exports.createUser = async (userData) => {
	const [user] = await db('users').insert(userData).returning('*');
	sendMessage('user_actions', JSON.stringify({ userId: user.id, action: 'created' }));
	return user;
};

exports.updateUser = async (id, userData) => {
	const [user] = await db('users').where({ id }).update(userData).returning('*');
	sendMessage('user_actions', JSON.stringify({ userId: user.id, action: 'updated' }));
	return user;
};

exports.getUsers = async () => {
	return db('users').select('*');
};