const path = require('path');
const router = require('express').Router();



router.route('/')
  .get((req, res)=>{
    /* res.sendFile(path.resolve(__dirname, '../../public/index.html')); */
    res.sendFile(path.resolve(__dirname, '../../../fe/build/index.html'));
    console.log("send...")
  })
  .post((req, res)=>{
    res.send('POST Works!!!');
  });

module.exports = router;