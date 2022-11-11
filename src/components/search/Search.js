import {React , useState , useRef , useEffect} from 'react'
import './search.css';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {

    const searchInput = useRef();

    useEffect(() => {
      searchInput.current.focus();
    }, [])
    

    const handleClick = () => {
      console.log(searchInput.current.value)
    }


  return (
    <div className='search-box'>
        <input type={'text'} ref={searchInput} className="search-input" />
        <button onClick={() => handleClick()} className='search-btn'><SearchIcon className='search-icon' /></button>
    </div>
  )
}
