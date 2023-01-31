const router = require('express').Router();
const IpBuilder = require('../../utilities/IpBuilder');

router.route('/api/ip-generator')
    .post((req, res)=>{
        let ip = req.query.ip.str
        
        let ipCollection = JSON.parse(new IpBuilder(ip).build());

        res.send({
            status: 400,
            response: { 
                collection: JSON.parse(ipCollection)
            }
        })
    })