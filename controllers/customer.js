const { StatusCodes } = require("http-status-codes");
const Customer = require("../models/customer");

const createCustomer = async (req, res) => {
  const { firstName, lastname, age, dateOfJoining, batchTime } = req.body;
  if (!firstName || !lastname || !age || !dateOfJoining || !batchTime) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all the details" });
  }

  try {
    const result = await Customer.create({
      firstName: firstName,
      lastname: lastname,
      age: age,
      dateOfJoining: dateOfJoining,
      batchTime: batchTime,
    });
    res.status(StatusCodes.CREATED).json({ msg: "Welcome to the Yoga Club!" });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "try again after sometime" });
  }
};
module.exports = createCustomer;
