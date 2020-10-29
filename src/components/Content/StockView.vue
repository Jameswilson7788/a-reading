<template>
  <div>
    <v-charts :options="candleStick"></v-charts>
  </div>
</template>

<script>
import axios from "axios";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";

export default {
  components: { "v-charts": ECharts },
  mounted() {
    this.getData();
  },
  methods: {
    convertcsvtojson(csv) {
      //var csv is the CSV file with headers
      var lines = csv.split("\n");

      var result = [];

      // NOTE: If your columns contain commas in their values, you'll need
      // to deal with those before doing the next step
      // (you might convert them to &&& or something, then covert them back later)
      // jsfiddle showing the issue https://jsfiddle.net/
      var headers = lines[0].split(",");

      for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
          obj[headers[j]] = currentline[j];
        }

        result.push(obj);
      }

      //return result; //JavaScript object
      return result; //JSON
    },
    async getData() {
      try {
        const res = await axios(
          "https://cors-anywhere.herokuapp.com/https://query1.finance.yahoo.com/v7/finance/download/2330.TW?period1=1601481600&period2=1603900800&interval=1d&events=history&crumb=hP2rOschxO0"
        );
        this.data = this.convertcsvtojson(res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  data() {
    return {
      candleStick: {
        xAxis: {
          data: ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"],
        },
        yAxis: {},
        series: [
          {
            type: "k",
            data: [
              [20, 30, 10, 35],
              [40, 35, 30, 55],
              [33, 38, 33, 40],
              [40, 40, 32, 42],
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>