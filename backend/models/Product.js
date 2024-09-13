import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

import Sequelize from 'sequelize';


const Product = sequelize.define('Product', {
   
    Name:{
      type:DataTypes.STRING,
      allowNull:false

    }, 
    price:{
      type:DataTypes.STRING,
      allowNull:false

    },
    postedBy: {
        type: Sequelize.INTEGER, 
        allowNull: true,
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    description:{
        type: Sequelize.STRING,
        allowNull: true,

    },
    location:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    owner:{
        type: Sequelize.STRING,
        allowNull: true,

    }

  }, {
      sequelize,
      modelName: 'Product',
      timestamps: true,
  });
  
  
  
  export default Product;
  