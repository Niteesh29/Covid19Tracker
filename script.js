$(document).ready(function()
{
    //Here we are taking the API of Covid19India from github
    var url = "https://api.covid19india.org/data.json"
   //getJSON  is a method inside jQuery to display the data in JSON form
    $.getJSON(url,function(data)
    {
        console.log(data)
         //declared 4 variables in these varibles we will fetch data from API 
        var total_confirmed, total_active,total_recovered,total_deaths
        //we have declared four  Empty Arrays and later  we will push data in each array for each state one by one
        var state = []
        var confirmed = []
        var recovered = []
        var deaths = []

        $.each(data.statewise,function(id,obj)
        {
            state.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })
       
        state.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        console.log(state)

        total_active = data.statewise[0].active
        total_confirmed = data.statewise[0].confirmed
        total_recovered = data.statewise[0].recovered
        total_deaths = data.statewise[0].deaths 

        $("#active").append(total_active)
        $("#confirmed").append(total_confirmed)
        $("#recovered").append(total_recovered)
        $("#deaths").append(total_deaths)

        var myChart = document.getElementById("chart").getContext('2d')

        var chart = new Chart (myChart,
            {
                type:'line',
                data:{
                      labels:state,
                       datasets:[
                           {
                               label:"Confirmed Cases",
                               data: confirmed,
                               backgroundColor:"red",
                               minBarLength:100
                           },
                         
                        {
                            label:"Recovered Cases",
                            data: recovered,
                            backgroundColor:"green",
                            minBarLength:100
                        },
                        {
                            label:"Deceased",
                            data: deaths,
                            backgroundColor:"skyblue",
                            minBarLength:100
                        },

                       ]
                     }
            })

    })
})