import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export class Chart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "User Statistics"
			},
			axisY: {
				title: "",
				suffix: ""
			},
			data: [{
				type: "splineArea",
				xValueFormatString: "YYYY",
				
				showInLegend: true,
				legendText: "Yearly",
				dataPoints: [
					{ x: new Date(2008, 0), y: 0 },
					{ x: new Date(2009, 0), y: 100 },
					{ x: new Date(2010, 0), y: 200 },
					{ x: new Date(2011, 0), y: 300 },
					{ x: new Date(2012, 0), y: 400 },
					{ x: new Date(2013, 0), y: 500 }
					
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				
			/>
			
		</div>
		);
	}
}
module.exports = Chart;                              
