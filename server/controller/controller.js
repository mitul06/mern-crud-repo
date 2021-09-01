var Restaurantdb = require("../model/model");

//create and save
exports.create = (req, res) => {
  //validate
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }

  //new rest
  const rest = new Restaurantdb({
    id: req.body.id,
    restname: req.body.restname,
    optime: req.body.optime,
    cltime: req.body.cltime,
    restfood: req.body.restfood,
  });

  // save rest in db
  rest
    .save(rest)
    .then((data) => {
    //   res.send(data);
    res.redirect('/add-rest')

    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error for create restaurant",
      });
    });
};

//get all / single get
exports.find = (req, res) => {
  if (req.query.id) {
      const id = req.query.id

      Restaurantdb.findById(id)
      .then(data=>{
          if(!data){
          res.status(404).send({message:`Not found with id ${id}`})
      }else{
          res.send(data)
      }
    })
    .catch(err => {
        res.status(500).send({message:`Error with id ${id}`})
    })
  } else {
    Restaurantdb.find()
      .then((rest) => {
        res.send(rest);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: err.message || "Error to find restaurant" });
      });
  }
};

//update
exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "data to update can not be empty" });
  }

  const id = req.params.id;
  Restaurantdb.findByIdAndUpdate(id, req.body, {
    userFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `connot update rest with ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error to find restaurant" });
    });
};

// delete
exports.delele = (req, res) => {
  const id = req.params.id;

  Restaurantdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot Delete with id ${id}` });
      } else {
        res.send({
          message: "Restaurant was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete restaurant with id = ${id}`,
      });
    });
};
