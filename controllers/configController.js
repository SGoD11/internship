const Configuration = require("../models/Configuration");

// GET config by ID
exports.getConfiguration = async (req, res) => {
  try {
    const config = await Configuration.findOne({ configId: req.params.id });
    if (!config) return res.status(404).json({ message: "Config not found" });

    res.json(config.matrix);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE remark
exports.updateRemark = async (req, res) => {
  try {
    const { remark } = req.body;
    const config = await Configuration.findOneAndUpdate(
      { configId: req.params.id },
      { remark },
      { new: true }
    );

    if (!config) return res.status(404).json({ message: "Config not found" });

    res.json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
