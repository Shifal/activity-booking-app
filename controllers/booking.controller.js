import Booking from '../models/booking.model.js';
import Activity from '../models/activity.model.js';

export const bookActivity = async (req, res) => {
  const { activityId } = req.body;

  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const booking = await Booking.create({ user: req.userId, activity: activityId });
    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.userId }).populate('activity');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
