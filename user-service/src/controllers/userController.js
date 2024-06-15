const userService = require('../services/userService');

exports.createUser = async (req, res) => {
	try {
		const user = await userService.createUser(req.query);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const user = await userService.updateUser(req.params.id, req.query);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};