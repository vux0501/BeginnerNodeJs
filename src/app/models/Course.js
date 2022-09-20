const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String},
    description: { type: String, },
    image: { type: String},
    createdAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
    slug: { type: String },
    videoId: {type: String}
    
});

module.exports = mongoose.model('Course',Course);