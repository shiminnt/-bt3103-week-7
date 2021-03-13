import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        datacollection: {
            labels: [],
            datasets: []
        },
        options: {
            legend: { display: true },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By Region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data.items.forEach(items => { 
                this.datacollection.labels.push(items.timestamp)
            });
            response.data.region_metadata.forEach(region_metadata => {
                this.datacollection.datasets.push(
                    {
                        "data": [],
                        "label": region_metadata.name,
                        "fill": false
                    }
                )
            });
            this.datacollection.datasets[0].borderColor = "#CCE1F2";
            this.datacollection.datasets[1].borderColor = "#C6F8E5";
            this.datacollection.datasets[2].borderColor = "#FBF7D5";
            this.datacollection.datasets[3].borderColor = "#F9DED7";
            this.datacollection.datasets[4].borderColor = "#F5CDDE";
            this.datacollection.datasets[5].borderColor = "#E2BEF1";
            response.data.items.forEach(items => {
                this.datacollection.datasets[0].data.push(items.readings.psi_twenty_four_hourly.west);
                this.datacollection.datasets[1].data.push(items.readings.psi_twenty_four_hourly.national);
                this.datacollection.datasets[2].data.push(items.readings.psi_twenty_four_hourly.east);
                this.datacollection.datasets[3].data.push(items.readings.psi_twenty_four_hourly.central);
                this.datacollection.datasets[4].data.push(items.readings.psi_twenty_four_hourly.south);
                this.datacollection.datasets[5].data.push(items.readings.psi_twenty_four_hourly.north);
            });
            this.renderChart(this.datacollection, this.options)
        })
    }
  },
  created () {
    this.fetchItems()
  }
}