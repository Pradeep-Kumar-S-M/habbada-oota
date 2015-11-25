require("./style.css");
require("./public/angularDemo.js");

var ReactDOM  = require('react-dom');
document.write("It works entryjs .");

var React = require('react');
var ReactHighcharts = require('react-highcharts/dist/bundle/highcharts');

var config = {
 chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
};

var config1 = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
  	
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  },{
    data: [129.9, 171.5, 106.4, 129.2, 244.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  }]
};

ReactDOM.render(<div>
					<ReactHighcharts config = {config}></ReactHighcharts>
					<ReactHighcharts config = {config1}></ReactHighcharts>
				</div>
				, document.body);




