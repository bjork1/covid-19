var unirest = require("unirest");

var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

req.headers({
	"x-rapidapi-host": "covid-193.p.rapidapi.com",
	"x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
});


req.end(function (res) {
    if (res.error) throw new Error(res.error);

    var staats = res.body.response
    
    var usaStats = staats.filter(stat => stat.country === 'USA')
var activeCases = usaStats[0].cases.active
    var criticalCases = usaStats[0].cases.critical
    var hennRecovered = usaStats[0].cases.recovered
    var totalCases = usaStats[0].cases.total
    var hennDeaths = usaStats[0].deaths.total 
    
    var displayActive = $("<div></div>").text("Active Cases: " + activeCases)
    var displayCrit = $("<div></div>").text("Critical Cases: " + criticalCases)
    var displayRecov = $("<div></div>").text("Recovered: " + hennRecovered)
    var displayTotal = $("<div></div>").text("Active Cases: " + totalCases)
    var displayDeaths = $("<div></div>").text("Deaths: " + hennDeaths)
    

    displayActive.addClass("cityStats")
    displayCrit.addClass("cityStats")
    displayRecov.addClass("cityStats")
    displayTotal.addClass("cityStats")
    displayDeaths.addClass("cityStats")

	$("#minneapolisData").append(displayActive)
    $("#minneapolisData").append(displayCrit)
    $("#minneapolisData").append(displayRecov)
    $("#minneapolisData").append(displayTotal)
    $("#minneapolisData").append(displayDeaths)
    console.log(usaStats)

    console.log(usaStats[0].cases.active);
    
    
});