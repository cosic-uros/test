const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
    description: { type: String, required: true },
    dueTo: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('Task', TaskSchema);