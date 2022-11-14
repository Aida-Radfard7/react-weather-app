import {React , useRef , useEffect, useState} from 'react'
import './search.css';
import SearchIcon from '@mui/icons-material/Search';
import SearchContext from '../../context/SearchContext';
import axios from 'axios';
import { GeocodingAPI } from '../../API/GeocodingAPI';

export const Search = () => {

    const searchInput = useRef();
    const [searchedCity , setSearchedCity] = useState('');

    useEffect(() => {
      searchInput.current.focus();
    }, [])
    

    const handleClick = (city) => {
      setSearchedCity(city);
      searchInput.current.value = '' ;
    }

    const handleKeyDown = (e) => {
      if(e.key === 'Enter' ){
        handleClick(searchInput.current.value);
      }
    }

  return (
    <SearchContext.Provider value={searchedCity} >
      <div className='search-box'>
          <input type={'text'} ref={searchInput} className="search-input" onKeyDown={(e) => handleKeyDown(e)} />
          <button 
            onClick={() => handleClick(searchInput.current.value)} 
            className='search-btn'>
              <SearchIcon className='search-icon' />
          </button>
      </div>
      {searchedCity != '' ? <GeocodingAPI /> :null }
    </SearchContext.Provider>
  )
}
