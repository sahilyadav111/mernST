const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ysahil432:sahil112@cluster0.mhsgavh.mongodb.net/?retryWrites=true&w=majority"
)
.then(() => console.log("connected"));