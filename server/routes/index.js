const express = require('express');
const router = express.Router();
const conn = require('../config/db');

router.post('/login', (req,res)=>{
    let body = req.body;
    console.log(body);
    const input_id = req.body.input_id;
    const input_pw = req.body.input_pw;
    const sql1 = 'SELECT COUNT(*) AS result FROM user_info WHERE input_id'
    conn.query(sql1, input_id, (err, data) => {
        if (!err) {
            if(data[0].result < 1) {
                res.send({ 'msg' : '입력하신 id 가 일치하지 않습니다.' });
            } else {
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_info WHERE input_id = ? AND input_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT input_id FROM user_info WHERE input_id = ? AND input_pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_info WHERE input_id = ? AND input_pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT input_pw FROM user_info WHERE input_id = ? AND input_pw = ?)
                                END AS userPw`;
                const params = [input_id, input_pw];
                conn.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0]);
                    } else {
                        res.send(err);
                    }
                });
            }
        }
        else { 
            res.send(err);
        }
    })
});

module.exports = router;