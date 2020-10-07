import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import CovidMap from './CovidMap'
import Legend from './Legend'
import LoadCountriesTask from '../tasks/LoadCountriesTask'
import legendItems from '../entities/LegendItems'

const Covid19 = () => {

   const [countries, setCountries] = useState([])

   const legendItemsInReverse = [...legendItems].reverse()

   const load = () => {
      const loadCountriesTask = new LoadCountriesTask();
      loadCountriesTask.load((countries)=> setCountries(countries))
   }

   useEffect(load, []); 


   return ( 
            countries.length === 0
            ?  <Loading/>
            :  <div>
                  <CovidMap countries={countries}/>
                  <Legend legendItems={legendItemsInReverse}/>
               </div>
    );
}
 
export default Covid19;