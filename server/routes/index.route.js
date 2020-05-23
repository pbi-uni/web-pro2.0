const express = require('express');
const userRoutes = require('../api/user');
const productRouter = require('../api/product')

const router = express.Router(); // eslint-disable-line new-cap


router.use('/user', userRoutes);
router.use('/product', productRouter);

module.exports = router;



// import path from 'path';

// export default function(app) {
//   // Insert routes below
// //   app.use('/api/requests', require('./api/request'));
// //   app.use('/api/uploads', require('./api/upload'));
// //   app.use('/api/orders', require('./api/order'));
// //   // app.use('/api/variants', require('./api/variant'));
// //   // app.use('/api/reviews', require('./api/review'));
// //   // app.use('/api/images', require('./api/image'));
// //   app.use('/api/catalogs', require('./api/catalog'));
// //   app.use('/api/products', require('./api/product'));
// //   app.use('/api/things', require('./api/thing'));
//   app.use('/api/users', require('./api/user'));

//   app.use('/auth', require('./auth'));

//   // All undefined asset or api routes should return a 404


//   // All other routes should redirect to the index.html

// }
