const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/weather", { useNewUrlParser: true })
.catch((err) => console.log(err))

const Schema = mongoose.Schema

const weatherSchema = new Schema({
    name: String,
    temperature: Number,
    condition: String,
    conditionPic: String
})
Weather = mongoose.model("Weather", weatherSchema);
module.exports = Weather
