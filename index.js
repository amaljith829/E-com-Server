require('dotenv').config()
const cors = require('cors')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoutes');
const path = require('path')
mongoose.connect(process.env.MONGO_URL)

app.use(cors());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use('/',productRouter);
app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000');
});