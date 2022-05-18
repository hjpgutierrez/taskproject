const { Model } = require("./model");

exports.all = async (req, res, next) => {
  try {
    const [data = [], total = 0] = await Promise.all([
      Model.find({}).exec(),
      Model.countDocuments(),
    ]);

    // const data = await Model.find({}).limit(limit).skip(skip).exec();
    // const total = await Model.countDocuments();

    res.json({
      data,
      meta: {
        total,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  const { body = {} } = req;

  const document = new Model(body);

  try {
    const data = await document.save();

    res.status(201);
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  const { body = {} } = req;
  const { email = "", password = "" } = body;

  const document = await Model.findOne({ email });

  if (document) {
    const verified = (await document.password) == password;
    if (verified) {
      res.json({
        data: document,
        meta: {
          id: document._id,
        },
      });
    } else {
      next({
        message: "Username or password are incorrect",
      });
    }
  } else {
    next({
      message: "Username or password are incorrect",
    });
  }
};

exports.id = async (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  try {
    const data = await Model.findById(id).exec();

    if (data) {
      req.doc = data;
      next();
    } else {
      next({
        statusCode: 404,
        message: "Document not found",
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id } = params;

  try {
    const data = await Model.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};
