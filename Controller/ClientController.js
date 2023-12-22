const Contact = require("../model/ContactClient");

exports.AddContactClient = async (req, res) => {
  try {
    let new_Contact = new Contact({
      Nom: req.body.Nom, //undefined !!!
      Email: req.body.Email,
      NumTel: req.body.NumTel,
      Message: req.body. Message,
    });

    await new_Contact.save();
    res
      .status(200)
      .send({ msg: "enregistrement effectue avec succes!", new_Contact });
  } catch (err) {
    console.log(err);
  }
};

//hzthi taffiche les plas eli mawjoudin lkol f base
exports.getContactClient = async (req, res) => {
  try {
    await Contact.find().then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
//hethi t3ml update lel fruits

exports.Update_Contact = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.findOneAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Contact updated" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot edit  this Event",
      error,
    });
  }
};
//hzthi tfas5  ml base

exports.Delete_Client = async (req, res) => {
  try {
    const { _id } = req.params;
    await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Contact deleted" });
  } catch (error) {
    res.status(400).send({
      msg: "cannot delete  this Contact",
      error,
    });
  }
};
