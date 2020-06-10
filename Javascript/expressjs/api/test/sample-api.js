const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const sampleJson = require('../../public/sample_json');

router.get('/', (req, res) => {
	res.json(sampleJson);
});

router.get('/:id', (req, res) => {
	if (found) {
		res.json(sampleJson.filter((entry) => entry.Id === parseInt(req.params.id)));
	} else {
		res.status(400).json({ msg: `sample with Id ${req.params.id} not found` });
	}
});

router.post('/', (req, res) => {
	if (!req.body.Name || !req.body.Age) {
		res.status(400).json({ msg: `Invalid email or name; received ${req.body.Name} ${req.body.Age}` });
	} else {
		const newSample = {
			Id: uuid.v4(),
			Name: req.body.Name,
			Age: req.body.Age
		};
		sampleJson.push(newSample);
		res.send(newSample);
	}
});

router.put('/:id', (req, res) => {
	var index = sampleJson.findIndex((entry) => entry.Id === parseInt(req.params.id));
	if (!index) {
		res.status(404).json({ msg: `Id ${req.params.id} is invalid` });
	} else if (!req.body.Name && !req.body.Age) {
		res.status(400).json({ msg: `Invalid email or name; received ${req.body.Name} ${req.body.Age}` });
	} else {
		const newSample = {
			Id: parseInt(req.params.id),
			Name: req.body.Name || sampleJson[index].Name,
			Age: req.body.Age || sampleJson[index].Age
		};
		sampleJson[index] = newSample;
		res.json(sampleJson);
	}
});

module.exports = router;
