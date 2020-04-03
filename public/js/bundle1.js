(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=USA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
	}
}

$.ajax(settings).done(function (covidData) {
	console.log(covidData);

    var covidStats = covidData.data.covid19Stats

	//var minnStats = covidStats.filter(stat => stat.province === 'Minnesota')

	var hennStats = covidStats.filter(stat => stat.city === 'Hennepin')
	
	var hennConfirmed = hennStats[0].confirmed
	var hennDeaths = hennStats[0].deaths
	var hennRecovered = hennStats[0].recovered

	var displayConfirmed = $("<div></div>").text("Confirmed Cases: " + hennConfirmed)
    var displayDeaths = $("<div></div>").text("Deaths: " + hennDeaths)
    var displayRecov = $("<div></div>").text("Recovered: " + hennRecovered)

	displayConfirmed.addClass("cityStats")
	displayDeaths.addClass("cityStats")
	displayRecov.addClass("cityStats")

	$("#minneapolisData2").append(displayConfirmed)
	$("#minneapolisData2").append(displayDeaths)
	$("#minneapolisData2").append(displayRecov)
// var unirest = require("unirest");

// var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

// req.headers({
// 	"x-rapidapi-host": "covid-193.p.rapidapi.com",
// 	"x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
// });


// req.end(function (res) {
//     if (res.error) throw new Error(res.error);

//     var staats = res.body.response
    
//     var usaStats = staats.filter(stat => stat.country === 'USA')
// var activeCases = usaStats[0].cases.active
//     var criticalCases = usaStats[0].cases.critical
//     var hennRecovered = usaStats[0].cases.recovered
//     var totalCases = usaStats[0].cases.total
//     var hennDeaths = usaStats[0].deaths.total 
    
//     var displayActive = $("<div></div>").text("Active Cases: " + activeCases)
//     var displayCrit = $("<div></div>").text("Active Cases: " + criticalCases)
//     var displayRecov = $("<div></div>").text("Recovered: " + hennRecovered)
//     var displayTotal = $("<div></div>").text("Active Cases: " + totalCases)
//     var displayDeaths = $("<div></div>").text("Deaths: " + hennDeaths)
    

//     displayActive.addClass("cityStats")
//     displayCrit.addClass("cityStats")
//     displayRecov.addClass("cityStats")
//     displayTotal.addClass("cityStats")
//     displayDeaths.addClass("cityStats")

// 	$("#minneapolisData").append(displayActive)
//     $("#minneapolisData").append(displayCrit)
//     $("#minneapolisData").append(displayRecov)
//     $("#minneapolisData").append(displayTotal)
//     $("#minneapolisData").append(displayDeaths)
//     console.log(usaStats)

//     console.log(usaStats[0].cases.active);
    
    
// });
});
},{}]},{},[1]);
