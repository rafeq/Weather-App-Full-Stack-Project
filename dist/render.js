function renderAllWeather(weatherArray) {
    $(".weather-container").empty()
    const source = $("#search-template").html()
    const template = Handlebars.compile(source)
    let newHtml = template({weatherArray})
    $(".weather-container").append(newHtml)
}