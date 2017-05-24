var ctx = document.getElementById('myChartindustry').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Consumer Discretionary', 'Consumer Staples', 'Energy','Financials', 'Health Care', 'Industrials' ,'Materials' ,'Technology', 'Utilities', 'ETFs' ],
    datasets: [{
      label: 'Sectors exposure',
      data: [15, 5, 8, 7, 8, 6, 3, 27, 2, 19],
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
        "orange",
        "pink",
        "#3d3634",
      ],
    }, ]
  }
});

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Industrial'],
    datasets: [{
      label: 'Sectors exposure',
      data: [10,10],
      backgroundColor: "#2ecc71",
    }, ]
  }
});