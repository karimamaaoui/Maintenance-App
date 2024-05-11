const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const verifyRole = require('../middleware/verifyRole');

router.post('/tasks', verifyRole, taskController.createTask);

router.get('/tasks/:technicianId', verifyRole, taskController.getAssignedTasks);

router.put('/tasks/:taskId', verifyRole, taskController.updateTaskStatus);

module.exports = router;
