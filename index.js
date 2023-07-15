const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const connectDB = require("./server");


const carsDetailsRoutes = require('./routes/carsDetailsRouters');
const commentsRoutes = require('./routes/commentsRoutes');
const userRoutes = require('./routes//usersRoutes');
const userLogRoutes = require('./routes/usersLogRoutes');
const getMeRoutes = require('./routes/getMeRoutes');
const bookingsRoutes = require('./routes/bookingsRoutes');
const wishListRoutes = require('./routes/wishListRoutes');
const earningsRoutes = require('./routes/earningsRoutes');
const driverRequestBookingsRoutes = require('./routes/driverRequestBookingsRoutes');
const driverReqBookRoutes = require('./routes/driverReqBookModalRoutes');
const publishRidesRoutes = require('./routes/publishRidesRoutes');
const publishRidesBookingsRoutes = require('./routes/publishRidesBookingsRoutes');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


app.use('/carsDetails', carsDetailsRoutes);
app.use('/comments', commentsRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/usersReg', userRoutes);
app.use('/usersLog', userLogRoutes);
app.use('/getMe', getMeRoutes);
app.use('/wishList', wishListRoutes);
app.use('/earnings', earningsRoutes);
app.use('/driverRequestBookings', driverRequestBookingsRoutes);
app.use('/driverReqBookModal', driverReqBookRoutes);
app.use('/DriPubRides', publishRidesRoutes);
app.use('/pubRidesBooking', publishRidesBookingsRoutes);



connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});



// index.js -> routes -> controllers -> services -> models.