var unirest = require("unirest");
var mapdata = require('./mapdata')

var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

req.query({
	"country": "US"
});

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
});


req.end(function (covidData) {
	if (covidData.error) {
		 throw new Error(covidData.error)
	 } else {
		
	var covidStats = covidData.body.data.covid19Stats

	var minnStats = covidStats.filter(stat => stat.province === 'Minnesota')

	var hennStats = covidStats.filter(stat => stat.city === 'Hennepin')
	
	var hennConfirmed = hennStats[0].confirmed
	var hennDeaths = hennStats[0].deaths
	var hennRecovered = hennStats[0].recovered

	console.log(hennConfirmed)
	var hennDeaths = hennStats.hennDeaths
	var hennRecovered = hennStats.recovered
	var displayConfirmed = $("<div></div>").text("Confirmed Cases: " + hennConfirmed)
    var displayDeaths = $("<div></div>").text("Deaths: " + hennDeaths)
    var displayRecov = $("<div></div>").text("Recovered: " + hennRecovered)

	displayConfirmed.addClass("cityStats")
	displayDeaths.addClass("cityStats")
	displayRecov.addClass("cityStats")

	$("#minneapolisData").append(displayConfirmed)
	$("#minneapolisData").append(displayDeaths)
	$("#minneapolisData").append(displayRecov)
	
	
	
	//module.exports = minnStats

	console.log(hennStats)
	console.table(minnStats)
	return minnStats
	}
})
console.log(mapdata)
 