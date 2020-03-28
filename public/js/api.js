var unirest = require("unirest");

var req = unirest(
  "GET",
  "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats"
);

req.query({
  country: "US"
});

req.headers({
  "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  "x-rapidapi-key": "2e6a00a0b7mshb40a079e7a67f38p181597jsn5910590141c3"
});

req.end(function(covidData) {
  if (covidData.error) throw new Error(covidData.error);
  {
    var covidStats = covidData.body.data.covid19Stats;

    let minnStats = covidStats.filter(stat => stat.province === "Minnesota");

    console.table(minnStats);

    // function isCherries(covidStats) {
    // 	return fruit.name === 'cherries';
    //   }

    //   console.log(inventory.find(isCherries));}

    // const result = covidStats.find( ({ province }) => province === 'Minneapolis' );

    // console.log(result)

    // covidStats.find(function(covidStat) {
    // 		if (covidStats.province === 'Minnesota') {
    // 		return covidStat
    // 		}console.table(covidStat);
    //   });

    // covidStats.forEach(function(covidStat) {
    // 	if (covidStat.province === 'Minnesota') {
    // 		return covidStat
    // 	}console.table(covidStat)
    // })

    // for (var i = 0; i < covidStats.length; i++) {

    // 	if (info[i].province === "Minnesota") {
    // 		return info[i];
    // }console.log(info[i])
    // 		//console.log(info)
    // 	}

    //console.log(covidData.body.data);
  }
});
module.exports = minnStats;
