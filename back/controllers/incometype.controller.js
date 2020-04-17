function createIncomeType(req, res) {
    if (!req.body) {
      res.status(400).send({ menssage: "REQUEST IS EMPTY" });
      return;
    }
    const newIncomeTypeObject = {
      IncomesTypeName: req.body.IncomesTypeName,    
      IncomesTypeIncomeID: req.body.IncomesTypeIncomeID,      
    };
    dbManager.IncomesType.create(newIncomeTypeObject)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send({
          menssage: "SOMENTHING HAPPENED, ERROR"
        });
      });
  }
    
  async function changeStatusIncomeType(req, res) {
    try {
      const { idIncomeType } = req.params;
      const IncomeType = await dbManager.IncomeType.update(
        { IncomeTypeState: 0 },
        { returning: true, where: { IncomeTypeId: idIncomeType } }
      )
  
      res.json({ message: "Income Type deleted" });
    } catch (error) {
      res.status(500).send({
        menssage: "ERROR, SORRY"
      });
    }
  }
  
  exports.createIncomeType = createIncomeType;
  exports.changeStatusIncomeType = changeStatusIncomeType;
