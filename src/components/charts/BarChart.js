import { Bar } from 'vue-chartjs'
import database from '../../firebase.js';

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: [{
                label: "Total number of each dish",
                backgroundColor: ["#CCE1F2", "#C6F8E5","#FBF7D5","#F9DED7","#F5CDDE","#E2BEF1"],
                data: []
              }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Total number of each dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
        }
    }
  },
  methods: {
    fetchItems: function () {
      database.collection('menu').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.labels.push(doc.data().name)
            this.datacollection.datasets[0].data.push(0)
        })
        this.renderChart(this.datacollection, this.options)
      });
      database.collection('orders').get().then(querySnapShot => {
        querySnapShot.forEach(doc => {
          var order = doc.data().order;
          for (var i = 0; i < order.length; i++) {
            if (order[i].itemName == "Prawn omelette") {
              var current = this.datacollection.datasets[0].data[0];
              current += order[i].itemQty;
              this.datacollection.datasets[0].data[0] = current;
            } else if (order[i].itemName == "Dry Beef Hor Fun") {
              var current1 = this.datacollection.datasets[0].data[1];
              current1 += order[i].itemQty;
              this.datacollection.datasets[0].data[1] = current1;
            } else if (order[i].itemName == "Sambal KangKung") {
            var current2 = this.datacollection.datasets[0].data[2];
            current2 += order[i].itemQty;
            this.datacollection.datasets[0].data[2] = current2;
            } else if (order[i].itemName == "Pork Fried Rice") {
              var current3 = this.datacollection.datasets[0].data[3];
              current3 += order[i].itemQty;
              this.datacollection.datasets[0].data[3] = current3;
            } else if (order[i].itemName == "Mapo Tofu") {
              var current4 = this.datacollection.datasets[0].data[4];
              current4 += order[i].itemQty;
              this.datacollection.datasets[0].data[4] = current4;
            } else {
              var current5 = this.datacollection.datasets[0].data[5];
              current5 += order[i].itemQty;
              this.datacollection.datasets[0].data[5] = current5;
            }
          }
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}