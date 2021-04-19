import React,{useEffect, useState} from 'react'
import  './App.css'
import NavBarinShorts from './Component/NavBarinShorts'
import NewsContent from './NewsContent/NewsContent'
import axios from 'axios'
import Footer from './Component/Footer/Footer'

function App() {
  const [category ,setCategory] =useState("general")
  const [newsArray , setnewsArray]=useState([]);
  const [newsResults, setNewsResult] =useState();
   const newsAPi = async()=>{
    try{
     const news =await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=1217c62d95d4422c808c52164e7e00c1`) 
     setnewsArray(news.data.articles)
     setNewsResult(news.data.totalResults)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect (()=>{
    newsAPi();
  },[newsResults ,category])
  
  return (
    <div className="App">
        <NavBarinShorts setCategory={setCategory} />

        <NewsContent newsArray={newsArray}  newsResults={newsResults}/>
        <Footer />
    </div>
  );
}

export default App;
