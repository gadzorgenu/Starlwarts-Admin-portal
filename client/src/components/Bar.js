import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: [
                    '2014','2015','2016','2017','2018','2019','2020'
                ],
                datasets: [
                    {
                        label: 'Orders',
                        data:[
                            1434,6332,1224,3367,4637,
                            4345,2354

                        ],
                        backgroundColor: [
                            'red','blue','green','violet','pink','gray', 'black'
                        ]
                    }
                ]
            }

        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition:'right'
        }
    render(){
        return(
            <div className="chart" >
                <Bar
                    data = { this.state.chartData}
                    options= {{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Orders Year by Year',
                            fontColor:'black',
                            fontSize: 25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}


                />
            </div>
        )
    }

}
export default BarChart;