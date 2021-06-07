export default (req, res) => {
  const {
    query: { action },
  } = req;

  switch (action) {
    case "signup":
      //sign user up
      res.send(200);
      res.end();
      break;

    default:
      break;
  }
};
