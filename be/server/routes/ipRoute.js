const router = require('express').Router();
const IpBuilder = require('../../utilities/IpBuilder');

router.route('/')
    .post((req, res)=>{
        
        let ip = req.query.ip;
        
        let ipCollection = new IpBuilder().setString(ip).build();

        console.log(ipCollection)
        res.send({
            status: 400,
            response: { 
                collection: JSON.stringify(ipCollection)
            }
        })
    }
);

module.exports = router;