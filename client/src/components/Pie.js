import React, {Component} from 'react';
import { Pie} from 'react-chartjs-2';

class PieChart extends Component{

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: [
                    'Cancelled','Pending', 'Approved'
                ],
                datasets: [
                    {
                        
                        data:[
                            32,34,34

                        ],
                        backgroundColor: [
                            'red','green','violet','pink'
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
              
                <Pie
                    data = { this.state.chartData}
                    options= {{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Orders Status',
                            fontColor:'Blue',
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
export default PieChart;