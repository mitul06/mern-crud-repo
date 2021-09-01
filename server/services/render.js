const axios = require('axios')

exports.homeRouters = (req,res)=> {

    axios.get('http://localhost:4000/api/rest')
        .then(function(response){
            res.render('index',{rest : response.data})

        })
        .catch(err=> {
            res.send(err)
        })


}
exports.add_rest = (req,res)=> {
    res.render('add_rest')
}
exports.update_rest = (req,res)=> {
    axios.get('http://localhost:4000/api/rest', {params : {id:req.query.id}})
    .then(function(restdata){
        res.render('update_rest',{rest:restdata.data})
    })
    .catch(err => {
        res.send(err)
    })
}