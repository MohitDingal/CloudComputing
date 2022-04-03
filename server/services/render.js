const axios = require('axios');

const PORT2 = process.env.PORT || 3000
exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get(`http://20.40.202.29/api/users`)
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get(`http://20.40.202.29/api/users`, { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
