const Station = require('../models/ChargingStation');

exports.createStation = async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.status(201).json(station);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStations = async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
};

exports.updateStation = async (req, res) => {
  const { id } = req.params;
  const updated = await Station.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

exports.deleteStation = async (req, res) => {
  await Station.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};