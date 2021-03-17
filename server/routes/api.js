const router = require('express').Router();

const { getTasks, postTask, updateTask, deleteTask } = require('../controllers/api');

router.get('/', (req, res) => {
    getTasks(req, res);
});

router.post('/', (req, res) => {
    postTask(req, res);
});

router.put('/:id', (req, res) => {
    updateTask(req, res);
});

router.delete('/:id', (req, res) => {
    deleteTask(req, res);
});

module.exports = router;
