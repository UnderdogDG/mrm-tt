const router = require('express').Router()

router.route('/')
  .get((req, res)=>{
    res.sendFile(path.resolve(__dirname, '../fe/public/index.html'));
  })
  .post((req, res)=>{
    res.send('POST Works!!!');
  });

module.exports = router;