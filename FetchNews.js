import { useState,useEffect } from "react";
export const Fetchnews=()=>{
    const [news,setNews]=useState([]);
    const [searchQuery,setSearchQuery]=useState('react')
    const [loading,setloading]=useState(false)
    const fetchnew=()=>{
  
      fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then(result=>result.json())
      .then(data=>setNews(data.hits))
      .catch(err=>console.log(err))
    }
    useEffect(()=>{
      fetchnew();
    });
    const HandleChange=(event)=>{
        setloading(false)
        setSearchQuery(event.target.value)
    }
    const handleSubmit=()=>{
        setloading(true);
    }
    return(
         <div className="news-div">
          <h2 id="news-id"> NEWS</h2>
          <form>
            <input type="text"  onChange={HandleChange}/>
            <button  onClick={handleSubmit} disabled={loading}>search</button>
          </form>
          <ul>
           {news.map((value,index)=>(<li key={index} id="news-ids"> {value.title}</li> ))}
          </ul>
         </div>
    );
}