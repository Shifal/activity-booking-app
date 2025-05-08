import Activity from '../models/activity.model.js';

export const listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const createActivity = async (req, res) => {
  try {
    const activities = req.body;
    const saved = await Activity.insertMany(activities);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};