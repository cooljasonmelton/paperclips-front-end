import React from 'react'
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux'
import { simplifyThisDate } from '../../date_functions/dates'

const LineChart = props =>{

    const { entries } = props.state.login
    let sortedEntries = entries.sort(function(a, b) {
        let keyA = new Date(a.created_at),
            keyB = new Date(b.created_at);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

    let dateLabels = []
    let dataWordCount = []
    let i;
    for (i = 0; i < sortedEntries.length; i++) {
        dateLabels.push(simplifyThisDate(sortedEntries[i].created_at))
        dataWordCount.push(sortedEntries[i].wordcount)
    }

    const inputData = {
        labels: dateLabels,
        datasets: [
          {
            label: 'Word Count',
            fill: true,
            lineTension: 0.5,
            backgroundColor: '#b5e6cb',
            borderColor: '#83a473',
            borderWidth: 2,
            data: dataWordCount
          }
        ]
    }
    return(
    <div>
        <Line
        data={inputData}
        options={{
          title:{
            display:false,
          },
          legend:{
            display:false,
          }
        }} 
        />
    </div>
    )
}


const mapStateToProps = state => {
    return {
      state: state
    }
  }
  
  
export default connect(mapStateToProps)(LineChart);
  
