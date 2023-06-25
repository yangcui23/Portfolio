/* global require ,module*/


const Info = require('../models/info.model')
const mongoose = require('mongoose')


module.exports.createInfo = (req, res) => {
    Info.create(req.body)
        .then(info => res.json(info))
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}