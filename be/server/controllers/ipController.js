const IpBuilder = require('../../utilities/IpBuilder');

const IpCollection = require('../../db/models/IpModel');

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

exports.postApiGeneratorController = async (req, res)=>{

    console.log(req.body);

    const { ip } = req.body;
    let { group } = await IpCollection.findOne({ ip }) || { group: null };

    console.log("find:", group)

    try{
        if( group ){
            res.json({
                status: "success",
                ip,
                group
            })
        }
        else{
        
            let group = ipBuilder.setString(ip).build();

            console.log("created:", ip, group);


            await IpCollection.create({
                ip,
                group
            });

            res.json({
                status: "success",
                ip,
                group
            });
        };
    }
    catch(e){
        console.log("fail..." + ip);
        res.json({
            status: "fail",
            ip,
            group: [],
            msg: e
        });
    }
};