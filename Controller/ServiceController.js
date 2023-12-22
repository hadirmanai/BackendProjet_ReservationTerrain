const Service = require("../model/Service");

exports.AddService = async (req, res) => {
  try {
    let new_Service = new Service({
      Nom: req.body.Nom, //undefined !!!
      Description: req.body.Description,
    });

    await new_Service.save();
    res
      .status(200)
      .send({ msg: "enregistrement effectue avec succes!", new_Service });
  } catch (err) {
    console.log(err);
  }
};

//hzthi taffiche les plas eli mawjoudin lkol f base
exports.getService = async (req, res) => {
  try {
    await Service.find().then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};


exports.Delete_Service  = async (req, res) => {
  try {
      const { _id } = req.params;
      await Service.findOneAndDelete({ _id });
      res.status(200).send({ msg: "Service  deleted" });
  } catch (error) {
      res.status(400).send({
          msg: "cannot delete  this Rendez_vous",
          error,
      });
  }
};


exports.UpdateService= async (req, res) => {
  try {
      const { _id } = req.params;
      const result = await Service.findOneAndUpdate(
          { _id },
          { $set: { ...req.body } }
      );
      res.status(200).send({ msg: "Service updated" });
  } catch (error) {
      res.status(400).send({
          msg: "cannot edit  this Service",
          error,
      });
  }
};
