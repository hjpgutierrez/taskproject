var taskArray = [];

exports.all = (req, res, next) => {
  res.json({
    data: taskArray,
  });
};

exports.create = (req, res, next) => {
  const { body = {} } = req;
  body.id = taskArray.length + 1;
  body.createdAt = new Date();
  body.updatedAt = new Date();
  taskArray.push(body);

  res.json({
    data: body,
  });
};

exports.read = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;

  let itemTask = taskArray.find((element) => element.id == id);

  res.json({
    data: {
      itemTask,
    },
  });
};

exports.update = (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id = "" } = params;
  let itemTask = taskArray.find((element) => element.id == id);
  taskArray = arrayRemove(taskArray, id);
  let newItem = {
    description: body.description,
    author: body.author,
    id: itemTask.id,
    createdAt: itemTask.createdAt,
    updatedAt: new Date(),
  };
  taskArray.push(newItem);

  res.json({
    data: newItem,
    included: {
      params,
      body,
    },
  });
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id = "" } = params;
  taskArray = arrayRemove(taskArray, id);
  res.json({});
};

function arrayRemove(arr, value) {
  return arr.filter(function (element) {
    return element.id != value;
  });
}
