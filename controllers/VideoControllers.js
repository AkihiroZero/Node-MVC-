const models  = require('../models');

const allVideo = async(req,res)=>{
    const video = await models.Video.findAll({
        raw:true
    }).catch(error=>console.log(error))
    await res.render('main',{result:video})
}

const allUser = async(req,res)=>{
    await res.render('test')
}

module.exports = {
    allVideo,   
}

