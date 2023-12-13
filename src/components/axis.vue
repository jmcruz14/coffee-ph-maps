<template>
  <div>
    <h2>Test Chart</h2>
    <svg></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import { data } from '@/constants/test-data'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      const testData = data;
      const width = 800;
      const height = 500;
      const svg = d3.select("svg").attr("width", width).attr("height", height);
      const g = svg.append("g");
  
      const parseTime = d3.timeParse("%d-%b-%y");
  
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(testData, function (d) {
            return parseTime(d.date);
          })
        )
        .rangeRound([0, width]);
  
      const y = d3
        .scaleLinear()
        .domain(
          d3.extent(testData, function (d) {
            return d.amount;
          })
        )
        .rangeRound([height, 0]);
      
      const line = d3.line()
        .x(function (d) {
          return x(parseTime(d.date));
        })
        .y(function (d) {
          return y(d.amount);
        });
      
      g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
      g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Price ($)");
      
      g.append("path")
        .datum(testData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);
    })
  }
}

</script>