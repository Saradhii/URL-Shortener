import React from 'react';
import {useState,useEffect} from "react";
import axios from "axios";

const UrlShortner = () => {

    const [url,setUrl] = useState({});
    const [shortUrl,setShortUrl] = useState({});

    const handleChange = (e)=>{
      let data = e.target.name;
          setUrl({
          ...url,
          [data]: e.target.value,
      });
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      // console.log(url);
      axios.post(`http://localhost:5000/api/url/shorten`, url, {
            headers: { "Content-Type": "application/json" },
          }).then((responce) => {
            const { data } = responce;
            setShortUrl(data);
          });
      
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" name="longUrl" placeholder='Enter your url' onChange={handleChange}/><br></br><br></br>
      <input type="submit" value="create shortlink"/>
      </form>
      {}
      <p>sortened url</p>
      <a href={shortUrl.longUrl}>{shortUrl.shortUrl}</a>
    </div>
  )
}

export default UrlShortner