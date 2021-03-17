const { serverError, clientError } = require('./errors');
const Task = require('../model/Task');

module.exports = {
    getTasks: async (req, res) => {
        try {
            const data = await Task.find();
            if(!data) return clientError(res);
            res.status(200).json(data);
        } catch (err) {
            serverError(res, err.message);
        }
    },

    postTask: async (req, res) => {
        try {
            const { description, dueTo } = req.body;
            if(!description) return clientError(res); 

            const newTask = new Task({
                description,
                dueTo
            });

            await newTask.save();

            res.status(201).json({ msg: 'Created successfully' });

        } catch (err) {
            serverError(res, err.message);
        }
    },

    updateTask: async (req, res) => {
        try {
            const { id } = req.params;
            const { description, dueTo } = req.body;

            if(!description) return clientError(res);

            const data = {
                description
            }

            if(dueTo) data['dueTo'] = dueTo;

            const update = await Task.findByIdAndUpdate(id, data);

            if(!update) return clientError(res);

            res.status(201).json({ msg: 'Successfully updated' });
        } catch (err) {
            serverError(res, err.message);
        }
    },

    deleteTask: async (req, res) => {
        try {
            const { id } = req.params;

            const delTask = await Task.findByIdAndDelete(id);
            if(!delTask) return clientError(res);

            return res.status(200).json({ msg: 'Successfully deleted' });

        } catch (err) {
            serverError(res, err.message);
        }
    }
}