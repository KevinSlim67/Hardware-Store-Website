const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
    version: {
        type: String,
        required: true
    },

    price : {
        type: Number,
        required: true
    }
})

const diskSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['hdd', 'ssd'],
        required: true
    },

    storage : {
        type: String,
        required: true
    }
})

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ['laptop','smartphone','tablet','smartwatch'],
        required: true
    },

    brand: {
        type: String,
        enum: ['apple, samsung'],
        required: true
    },

    version: {
        type: versionSchema,
        required: true
    },

    release_date: {
        type: Date,
        required: true
    },

    color: {
        type: String,
        required: true
    },

    ram: {
        type: String,
        enum: ['1GB', '2GB', '4GB', '8GB', '16GB', '32GB'],
        required: true
    },

    cpu: {
        type: String,
        required: true
    },

    disk: {
        type: String,
    },

    numberSold: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model("Product", productSchema);