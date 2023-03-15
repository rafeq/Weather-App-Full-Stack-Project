const express = require('express')
const router = express.Router()
const axios = require('axios');
const Weather = require('/Users/rafeqabufiad/Desktop/home/code/bootcamp/projects/Weather/model/Weather');


router.get('/weather/:cityName', function (req, res) {
    const cityName = req.params.cityName
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},ils&APPID=e239f5f4f62e52ef77367a4391ce4146&units=metric`)
        .then(function (results) {
            _weatherData = { name: results.data.name, temperature: results.data['main'].temp, condition: results.data['weather'][0]['description'], conditionPic: results.data['weather'][0]['icon'] }
            res.send(_weatherData)
        })
})

router.get('/weather', function (req, res) {
    Weather.find({}).then(function(results){
        res.send(results)
    })
})

router.post("/weather", (req, res) => {
    const weather = new Weather({
        name: req.body.name,
        temperature: req.body.temperature,
        condition: req.body.condition,
        conditionPic: req.body.conditionPic
    })
    weather.save().then((res)=>{
        console.log("succ")
    })
})

function findByname(cityName){
    let _data
    Weather.find({}).then(function(results){
        _data=results.data
    })
    console.log(_data);
    for (const city of _data) {
        if(city.name==cityName){
            return city.id
        }
    }
}

router.delete('/deleteCity/:cityName', function (req, res) {
    let cityName = req.params.cityName
    cityId=findByname(cityName)
    Weather.findByIdAndRemove(cityId)
    res.end()
})

module.exports = router

