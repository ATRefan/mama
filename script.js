// variabel global buat fetch data dari BE
// const data = fetch("http://localhost:5000/{link_dari_BE}", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
  // body: JSON.stringify(nama_data_dari_BE)
//   body: JSON.stringify()
// })


//user credential

//username
let user_name = document.getElementById("name");
// user_name.innerHTML = data.username;
user_name.innerHTML = "username";


//donut graph

let kredit_percentage = 92;

const kredit = document.getElementById('kredit_graph');

  new Chart(kredit, {
      type: 'doughnut',
      data: {
      datasets: [{
          data: [kredit_percentage, 100-kredit_percentage],
          backgroundColor:[
              'rgb(103, 178, 232)',
              'rgb(255, 183, 0)'
          ],
          hoverOffset:4
      }]
      }
  });

let kredit_val = document.getElementById('kredit_val');
kredit_val.innerHTML = "kredit"

let dana_percentage = 14;
const dana = document.getElementById('dana_graph');

  new Chart(dana, {
      type: 'doughnut',
      data: {
      datasets: [{
          data: [dana_percentage, 100-dana_percentage],
          backgroundColor:[
              'rgb(66, 230, 245)',
              'rgb(103, 178, 232)'
          ],
          hoverOffset:4
      }]
      }
  });

  let dana_val = document.getElementById('dana_val');
  dana_val.innerHTML = "dana"  

  
let kum_percentage = 70
const kum = document.getElementById('kum_graph');

  new Chart(kum, {
      type: 'doughnut',
      data: {
      datasets: [{
          data: [kum_percentage, 100-kum_percentage],
          backgroundColor:[
              'rgb(103, 178, 232)',
              'rgb(255, 183, 0)'
          ],
          hoverOffset:4
      }]
      }
  });

let kum_val = document.getElementById('kum_val');
kum_val.innerHTML = "kum"

let kur_percentage = 9;
const kur = document.getElementById('kur_graph');

  new Chart(kur, {
      type: 'doughnut',
      data: {
      datasets: [{
          data: [kur_percentage, 100-kur_percentage],
          backgroundColor:[
              'rgb(66, 230, 245)',
              'rgb(103, 178, 232)'
          ],
          hoverOffset:4
      }]
      }
  });

let kur_val = document.getElementById('kur_val');
kur_val.innerHTML = "kur"

//leads section
let kum_blended_person_val = document.querySelector('.kum_blended_person_val');
kum_blended_person_val.innerHTML = "xx";

let kum_person_val = document.querySelector('.kum_person_val');
kum_person_val.innerHTML = "xx";

let kur_person_val = document.querySelector('.kur_person_val');
kur_person_val.innerHTML = "xx";

//debitur section
let jatuh_tempo_npl_val = document.querySelector('.jatuh_tempo_npl_val');
jatuh_tempo_npl_val.innerHTML = "xx";

let kol2a_npl_val = document.querySelector('.kol2a_npl_val');
kol2a_npl_val.innerHTML = "xx";

let npl_val = document.querySelector('.npl_val');
npl_val.innerHTML = "xx";

let npl_rasio_val = document.querySelector('.npl_rasio_val');
npl_rasio_val.innerHTML = "xx";

//NPL area overview section

//NPL area overview graph
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
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
        }
      },
    });
  

//KPI graph section

// KPI graph
let kpi_chart_label = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul']
let kpi_chart_data = [12, 19, 20, 26, 43, 50]
const kpi_chart = document.getElementById('kpi_chart');

  new Chart(kpi_chart, {
    type: 'line',
    data: {
      labels: kpi_chart_label,
      datasets: [{
          data: kpi_chart_data,
          fill: false,
          borderWidth: 1,
          tension: 0.1
      }]
      },
    options: {
      scales: {

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

// upload file overlay
const overlay = document.querySelector('.overlay_upload');
const upload_file_box = document.querySelector('.upload_file');
const upload_overlay = document.querySelector('.navigation_share');
upload_overlay.addEventListener("click", show_overlay);


function show_overlay(){
  overlay.style.width='600px';
  overlay.style.height='100%';
  upload_file_box.style.position='relative';
}

const close_overlay = document.querySelector('.close');
close_overlay.addEventListener("click", function(){
  overlay.style.width = '0';
  overlay.style.height = '0';
})
