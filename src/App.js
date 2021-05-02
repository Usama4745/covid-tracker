import React from 'react';
import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
class App extends React.Component{

    state={
        data:{},
    }

    async componentDidMount(){
        const fetchdata =await fetchData()
        this.setState({data:fetchdata});
    }
    render(){
        const {data}=this.state
        return(
            <div className={styles.container}>
                <Cards data={data}></Cards>
                <CountryPicker></CountryPicker>
                <Chart></Chart>
            </div>
        )
    }
}

export default App;