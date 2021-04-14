import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DonutChart = (props) => {
  const ref = useRef(null);
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3.arc().innerRadius(props.innerRadius).outerRadius(props.outerRadius);

  useEffect(() => {
    const data = createPie(props.data);
    const group = d3.select(ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData.enter().append("g").attr("class", "arc");

    const path = groupWithUpdate.append("path").merge(groupWithData.select("path.arc"));

    path.attr("class", "arc").attr("d", createArc).attr("fill", "green");

    const text = groupWithUpdate.append("text").merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 16)
      .text((d) => d.value);
  }, [props.data]);

  return (
    <svg width={props.width} height={props.height}>
      <g ref={ref} transform={`translate(${props.outerRadius} ${props.outerRadius})`} />
    </svg>
  );
};

export default DonutChart;
