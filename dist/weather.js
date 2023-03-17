class Weather {

    constructor() {
        this.data = {};
        }

    getsAllCities() {
        $.ajax({
            method:"GET",
            url: '/weather',
            dataType: 'json',
            success: (info) => {
                this.data=info
                renderAllWeather(this.data)
            }
        })
        
    }

    getCityData(cityName) {
        $.ajax({
            method:"GET",
            url: `/weather/${cityName}`,
            dataType: 'json',
            success: (info) => {
                this.data.push(info)
                renderAllWeather(this.data)
            }
        })
    }

    saveCityToData(data) {
        $.ajax({
            method:"POST",
            url:'/weather',
            data:data,
            dataType: 'json',
            success: (info) => {
                //delete this.data then fill it
                console.log(info);
            }
        })
    }

    deleteCityFromData(cityName) {
        $.ajax({
            method:"DELETE",
            url: `/deleteCity/${cityName}`,
            dataType: 'json',
            success: (info) => {
                getsAllCities()
                console.log("deleted!");
            }
        })
    }
}
