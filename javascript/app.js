$(document).ready(function() { 
    
// MESSAGE INPUT CAN NOT BE BLANK //
  
// Hide the alert messages

 $("#sendAlertText").hide();   
 $("#emptyAlertText").hide(); 
 



//CHECK THE INPUT FIELDS TO SEE IF ANY TEXT HAS BEEN ADDED AND RETURN THE APPROPRIATE ALERT MESSAGE//    

$('#sendButton').click(function() {
  var $nonempty = $('.myClass').filter(function() {
    return this.value !== '';
  });

  if ($nonempty.length === 0) {
     $( "#emptyAlertText" ).fadeIn( "slow" );

  } else {
       $( "#sendAlertText" ).fadeIn( "slow" );

  }
});   


//SEND ALERT TEXT, ALERT MESSAGE, TO FADE OUT WHEN CROSS IS CLICKED//

$( "#sentCross" ).click(function() {
  $( "#sendAlertText" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});

//EMPTY ALERT TEXT MESSAGE TO FADE OUT WHEN CROSS IS CLICKED//

$( "#sentCross2" ).click(function() {
  $( "#emptyAlertText" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});
    
    
// THE ALERT BOX FADE OUT THE MESSAGE ON CLICK//

$( ".cross" ).click(function() {
  $( "#alertBox" ).fadeOut( "slow", function() {
    // Animation complete.
  });
});

// CREATING THE CHARTS FOR THE DASHBOARD APP
  //

//General global settings for the charts
Chart.defaults.global.legend.display = false;
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontStyle = 100;

// LINE GRAPH CODE FOR THE WEB WIGIT  //

var ctx = document.getElementById('myLineChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [{
       data: [0, 750, 1250, 800, 1300, 1900, 1200, 1750, 1250, 1750, 2250, 1750, 2250],
       lineTension: 0,
      backgroundColor: "#E2E3F6",
      borderColor: "#7478BF",
      borderWidth: 1,
      borderJoinStyle: 'miter',
      pointBorderColor: "#7478BF",
      pointRadius: 5,
      pointBorderWidth: 1,
      pointBackgroundColor: "#fff",
    }]
  },
   
   
});



// BAR GRAPH CODE FOR THE WEB WIGIT //

var ctx = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
         backgroundColor: [ "#7478BF", "#7478BF", "#7478BF", "#7478BF", "#7478BF", "#7478BF", "#7478BF", "#7478BF"],
      data: [75, 100, 175, 125, 225, 200, 100]
    }]
      
  }

});



// DOUGHNUT CHART CODE FOR THE WEB WIGIT //


var ctx = document.getElementById("myDoughnutChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#7478BF",
      ],
      data: [50, 50, 260]
    }]
  },
     options: {
        legend: {
            display: true,
        }
}
    
});

    
    
    
 }); // CLOSING DOCUMENT.READY FUNCTION