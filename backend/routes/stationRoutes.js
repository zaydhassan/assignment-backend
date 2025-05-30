const express = require('express');
const auth = require('../middleware/auth');
const {
  createStation,
  getStations,
  updateStation,
  deleteStation,
} = require('../controllers/stationController');

const router = express.Router();

router.get('/', auth, getStations);
router.post('/', auth, createStation);
router.put('/:id', auth, updateStation);
router.delete('/:id', auth, deleteStation);

module.exports = router;