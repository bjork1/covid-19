var unirest = require("unirest");

var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats");

req.query({
	"country": "US"
});

req.headers({
	"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
	"x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
});


req.end(function (covidData) {
	if (covidData.error) throw new Error(covidData.error);

	console.log(covidData.body.data);
	var covidStats = covidData.body.data
	module.exports = covidStats;
});



