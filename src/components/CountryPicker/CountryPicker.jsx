import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl, StylesProvider} from '@material-ui/core'

import styles from './CountryPicker.module.css'

import {fetchcountries} from '../../api';

const CountryPicker=()=>{

    const [fetchedCountries, setFetchedCountries]= useState([]);

    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCountries(await fetchcountries());
        }
        fetchAPI();
    },[])

    return(
        <FormControl className={StylesProvider.formControl}>
            <NativeSelect>
                <option value="global">Global</option>
                
                {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;