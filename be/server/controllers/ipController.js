const IpBuilder = require('../../utilities/IpBuilder');

const ipBuilder = new IpBuilder()

//@description  IP Controller
//@method       GET
//@route        /ip-generator
//@access       Public

exports.getApiGeneratorController = (req, res)=>{
    let ip = req.query.ip.trim();

    if(ip.length >= 1 && !ip.match(/\D/g)){

        let ipCollection = ipBuilder.setString(ip).build();

        console.log(ipCollection);
        
        res.status(201).json({
            status: "success",
            collection: JSON.stringify(ipCollection)
        })
    }else{
        res.status(400).json({
            status: "failed",
            collection: []
        })
    }
};

//@description  IP Controller
//@method       POST
//@route        /ip-generator
//@access       Public

exports.postApiGeneratorController = (req, res)=>{
    let ip = JSON.stringify(req.body);

    console.log(ip);

    res.status(201).json({
        status: "success",
        collection: []
    })
};