require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  'process.env': {
    NODE_ENV,
  },
};
