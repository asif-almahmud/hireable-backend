const Sector = require("../models/sector");

//# get
//-> get all sectors data
const getSectorData = async (req, res) => {
  const sectorData = await Sector.find({});

  res.status(200).json(sectorData);
};

module.exports = {
  getSectorData,
};
