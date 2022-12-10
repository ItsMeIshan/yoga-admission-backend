const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/database");

const Customer = sequelize.define("Customer", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  batchTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dateOfJoining: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Customer;

// module.exports = (Sequelize, DataTypes) => {
//   const Customer = Sequelize.define("Customer", {
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     lastname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     age: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     batchTime: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     dateOfJoining: {
//       type: DataTypes.DATEONLY,
//       allowNull: false,
//     },
//   });

//   return Customer;
// };
