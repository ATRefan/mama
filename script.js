const kum_blended = document.getElementById('kum_blended_graph');

    new Chart(kum_blended, {
        type: 'doughnut',
        data: {
        // labels: ['Red', 'Blue'],
        datasets: [{
            // label: '# of Votes',
            data: [92, 8],
            backgroundColor:[
                'rgb(103, 178, 232)',
                'rgb(255, 183, 0)'
            ],
            hoverOffset:4
        }]
        }
    });

    const kum = document.getElementById('kum_graph');

    new Chart(kum, {
        type: 'doughnut',
        data: {
        // labels: ['Red', 'Blue'],
        datasets: [{
            // label: '# of Votes',
            data: [70, 30],
            backgroundColor:[
                'rgb(103, 178, 232)',
                'rgb(255, 183, 0)'
            ],
            hoverOffset:4
        }]
        }
    });

    const kur = document.getElementById('kur_graph');

    new Chart(kur, {
        type: 'doughnut',
        data: {
        // labels: ['Red', 'Blue'],
        datasets: [{
            // label: '# of Votes',
            data: [14, 86],
            backgroundColor:[
                'rgb(66, 230, 245)',
                'rgb(103, 178, 232)'
            ],
            hoverOffset:4
        }]
        }
    });

    const run_off = document.getElementById('runoff_graph');

    new Chart(run_off, {
        type: 'doughnut',
        data: {
        // labels: ['Red', 'Blue'],
        datasets: [{
            // label: '# of Votes',
            data: [9, 91],
            backgroundColor:[
                'rgb(66, 230, 245)',
                'rgb(103, 178, 232)'
            ],
            hoverOffset:4
        }]
        }
    });

    
    const kpi_chart = document.getElementById('kpi_chart');

    new Chart(kpi_chart, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul'],
        datasets: [{
            data: [12, 19, 20, 26, 43, 50],
            fill: false,
            borderWidth: 1,
            tension: 0.1
        }]
      },
      options: {
        scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        y: {
            display: false
        }
        },
        plugins: {
            legend: {
                display: false
            }
        }
      }
    })


    const ctx = document.getElementById('area_graph');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Area A', 'Area B', 'Area C'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            // position: 'right',
            display: false
          },
        //   title: {
        //     display: true,
        //     text: 'Chart.js Horizontal Bar Chart'
        //   }
        }
      },
    });
  