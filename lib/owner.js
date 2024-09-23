const fs = require("fs");
const toMs = require("ms");

const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))

const addOwnerUser = (userId, expired, _dir) => {
	const cekUser = owner.find((user) => user.id == userId);
	if (cekUser) {
		cekUser.expired = cekUser.expired + toMs(expired);
	} else {
		const obj = { id: userId, expired: Date.now() + toMs(expired) };
		_dir.push(obj);
	}
	fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(_dir));
};

const getOwnerPosition = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

const getOwnerExpired = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return _dir[position].expired;
	}
};

const checkOwnerUser = (userId, _dir) => {
	let status = false;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			status = true;
		}
	});
	return status;
};

const expiredOwnerCheck = (arxzy, msg, _dir) => {
	setInterval(() => {
		let position = null;
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i;
			}
		});
		if (position !== null) {
			idny = _dir[position].id;
			console.log(`Owner expired: ${_dir[position].id}`);
			_dir.splice(position, 1);
			fs.writeFileSync("./src/data/role/owner.json", JSON.stringify(_dir));
			idny ? arxzy.sendMessage(idny, { text: "Owner anda sudah habis silahkan untuk membeli lagi." }) : "";
			idny = false;
		}
	}, 1000);
};

const getAllOwnerUser = (_dir) => {
	const array = [];
	Object.keys(_dir).forEach((i) => {
		array.push(_dir[i].id);
	});
	return array;
};

module.exports = {
	addOwnerUser,
	getOwnerExpired,
	getOwnerPosition,
	expiredOwnerCheck,
	checkOwnerUser,
	getAllOwnerUser,
};