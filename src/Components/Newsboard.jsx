import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { Row,Col } from 'react-bootstrap'
import Typew from '../Typew'
import Typewriter from 'typewriter-effect'
const Newsboard = ({category}) => {

     const [articles,setArticles]=useState([])
    //  const myapi=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c6700923155e4980ae660a93ca3f480d`
    let API_KEY="c6700923155e4980ae660a93ca3f480d"
    // let news=GET "https://newsapi.org/v2/everything?q=keyword&apiKey=c6700923155e4980ae660a93ca3f480d"
    useEffect(()=>{
        let url=  `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        // USING FETCH DATA 
        fetch(url)
        .then((response) => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the response JSON
            return response.json();
        })
        .then((data) => {
            // Check if data.articles exists before accessing it
            if (data.articles) {
                // Update state with articles
                setArticles(data.articles);
            } else {
                // Log an error or handle the absence of articles data
                console.error('No articles found in the response:', data);
            }
        })
        .catch((error) => {
            // Handle fetch errors
            console.error('Error fetching data:', error);
        });
        // fetch(url).then((response)=>{
        //     if(!response.ok){
        //         throw new Error ("Network was Not Ok");
        //     }
        // }).then((data)=>{
        //     if(data.articles){
        //         // check if data.article found update state
        //         setArticles(data.articles)
        //     }
        //     // if not found any articles
        //    console.error("NO articles found in response,data")
        // }).catch((error)=>{
        //     // handle fetch error
        //     console.error("handle fetch error")
        // })
      
},[category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='text-white badge bg-danger '>News</span></h2>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={12}></Col>
        <div  className="bg-danger"style={{
    border: '2px solid black', // Blue border
    padding: '20px',
    fontFamily: "Lucida Handwriting",
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom:"5px",
    height: '120px', // Adjust height as needed
    overflow: 'hidden',
    fontSize:"2rem",}}><Typewriter  options={{strings:["Project Build Using  Following Technologies "," React js","React Bootstrap. && Vite"," Live Data Get Blog News-Api",],
    autoStart: true,
    loop: true,
    typingSpeed:30,
    delay:3,
    deleteSpeed:60
    }} ></Typewriter></div>
        </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={12}></Col>
       <div className=' fs-5 text-white bg-primary' style={{
    border: '2px solid black', // Blue border
    padding: '20px',
    fontFamily: "Lucida Handwriting",
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
    marginTop: '50px',
    marginBottom:"5px",
    height: '120px', // Adjust height as needed
    overflow: 'hidden',
    fontSize:"2rem",
    // Hide overflow text
  }}> <Typew/> </div>
  
  
  
    
      <Col xs={12} md={8} lg={12}></Col>
       {articles.map((news,index)=>(
        <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} publish={news.publishedAt} content={news.content}/>
          
            //we render here NewsItem componenets and pass props.....
            
       )
      
    )

} 

/</Row>
</div>
  )
}

export default Newsboard
