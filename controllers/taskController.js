const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, assignedTechnicianId } = req.body;

    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      assignedTechnician: assignedTechnicianId
    });

    await task.save();

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create task' });
  }
};

const getAssignedTasks = async (req, res) => {
    try {
      const technicianId = req.params.technicianId;
  
      if (req.userRole === 'TECHNICIEN' && req.userId !== technicianId) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      const tasks = await Task.find({ assignedTechnician: technicianId });
  
      res.json(tasks);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to find tasks' });
    }
  };
  

const updateTaskStatus = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const { status } = req.body;

    await Task.findByIdAndUpdate(taskId, { status });

    res.json({ message: 'Task status updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update task' });
  }
};

module.exports = {
  createTask,
  getAssignedTasks,
  updateTaskStatus
};
