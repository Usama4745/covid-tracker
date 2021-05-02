import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import {Line,Bar} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI();
    }, [])

    if(dailyData.length){
        console.log("data exists");
        console.log(dailyData);
    }
    const lineChart = (
        dailyData.length?
        (<Line
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data:dailyData.map(({confirmed})=>confirmed),
                label:'infected',
                borderColor:'#3333ff',
                fill:true,

            },{
                data:dailyData.map(({deaths})=>deaths),
                label:'Death',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true,
            }]
        }}
        ></Line>):null

    );
    return (
 
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}


export default Chart;