const express = require('express');
const { Row } = require('react-bootstrap');
const router = express.Router();
const conn = require('../config/db');

router.post('/login', (req,res)=>{
    let body = req.body;
    console.log(body);
    const input_id = req.body.input_id;
    const input_pw = req.body.input_pw;
    const sql1 = 'SELECT input_id FROM user_info WHERE input_id = ?'
    conn.query(sql1, [input_id], (err, data) => {
        if (!err) {
            if(data[0] === undefined) {
                res.send("<script>alert('존재하지 않는 아이디입니다.'); location.href='/login';</script>");
            } else {
                res.send({ 'msg' : '입력하신 id가 일치합니다.' })
            }
        }
        else { 
            res.send(err);
        }
    })
});

module.exports = router;