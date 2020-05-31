import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineGraph extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: [
                    '2016','2017','2018','2019','2020'
                ],
                datasets: [
                    {
                        label: 'Customers',
                        data:[
                            5352,1224,3367,1242,
                            4345

                        ],
                        backgroundColor: [
                            'orange'
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
                <Line
                    data = { this.state.chartData}
                    options= {{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Customers Year by Year',
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
export default LineGraph;