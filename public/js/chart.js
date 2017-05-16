var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2', '3', '4', '5', '6', '7', ],
    datasets: [{
      label: 'Sectors exposure',
      data: [81, 68, 38, 36, 86,  43, ],
      backgroundColor: "rgba(47, 104, 196)"
    }, ]
  }
});