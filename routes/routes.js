//All routes for different entities in different files
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/amad', (req, res) => {
  const sqlSelect = "select b.cold_name, a.amadno, a.entry,a.party,a.vill,a.packets,a.kism,a.year,a.mark from amad a, cold_info b where a.cold_id=b.cold_id limit 1000;";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
})

module.exports = router;
