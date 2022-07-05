import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
const navigate = useNavigate()
    const [keyword, setKeyword] = useState('');

    const handleForm = (e) =>{
        e.preventDefault();
        if(keyword.trim()){
            navigate(`/search/${keyword}`);
        }else{
            navigate('/');
        }
    }
  return (
    <div className='searchform_wrapper'>
        <form onSubmit={handleForm} >
                <div className="input-group">
            <div className="form-outline">
                <input  name='q' onChange={(e)=>setKeyword(e.target.value)} type="text" id="form1" className="form-control" />
                <label className="form-label" htmlFor="form1">Search product...</label>
            </div>
                <button type="submit" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            
        </form>
    </div>
 
  )
}

export default SearchBox