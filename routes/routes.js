//All routes for different entities in different files
import express from 'express';
import db from '../config/db';

const router = express.Router();

router.get('/amad', (req, res) => {
    const sqlSelect = "select b.cold_name, a.amadno, a.entry,a.party,a.vill,a.packets,a.kism,a.year,a.mark from amad a, cold_info b where a.cold_id=b.cold_id limit 1000;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

export default router;
