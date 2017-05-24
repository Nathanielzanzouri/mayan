var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Industrial', 'Basicmaterials' ,  'Technology' ,  'Consumernoncyclial' ,  'Financial' , 'Utilities' , 'Communications',  'Consumercyclial' , 'Energy' ,  'Diversified' , 'Funds' ],
    datasets: [{
      label: 'Sectors exposure',
      data: [81, 68, 38, 36, 86,  43,81, 68, 38, 36, 87,],
      backgroundColor: "rgba(47, 104, 196)"
    }, ]
  }
});