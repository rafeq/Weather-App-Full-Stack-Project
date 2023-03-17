w = new Weather()
function renderAll() {
    w.getsAllCities()

}

renderAll()

function search() {
    searchValue = $("#search-by-name").val()
    w.getCityData(searchValue)
}

function saveCity() {
    cityName = $(this).data("name")
    temperature = $(this).data("temperature")
    condition = $(this).data("condition")
    conditionPic = $(this).data("conditionpic")
    weatherObject = {
        "name": cityName,
        "temperature": temperature,
        "condition": condition,
        "conditionPic": conditionPic,
        "flag": true
    }
    w.saveCityToData(weatherObject)
}

function removeCity() {
    cityName = $(this).data("name")
    w.deleteCityFromData(cityName)
}


$("#weatherId").on("click", "#add", saveCity)
$("#weatherId").on("click", "#remove", removeCity)
