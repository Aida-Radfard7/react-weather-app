import {React , useContext , useEffect} from 'react'
import SearchContext from '../context/SearchContext';
import axios from 'axios';


export const GeocodingAPI = () => {

  const searchedCity = useContext(SearchContext);
  const ApiKey = '6fea295cc75018102c65895744133aab';
  const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&appid=${ApiKey}`
  

  useEffect(() => {
    axios.get(apiUrl)
    .then(res => {console.log(res)})      
    
  }, [])
  
}
