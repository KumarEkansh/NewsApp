import { Container } from '@material-ui/core'
import React from 'react'
import NewsCard from '../Component/NewsCard/NewsCard'
import './NewsContent.css'

const NewsContent = ({newsArray , newsResults}) => {
    return (
    <Container maxWidth="md" >
        <div className="content">
            <div className="downloadMessage">
                <span className="downloadText">
                    For the best experince use inshorts app
                    </span> 
                    <img  alt="App Store" height="40%" width="10%" src="https://assets.inshorts.com/website_assets/images/appstore.png"></img>
                     <img  alt="Play store" width="10%" height="40%" src="https://assets.inshorts.com/website_assets/images/playstore.png"></img>
                                
            </div>
            {
                     newsArray.map((newsItems)=>(
                        <NewsCard newsItems={newsItems} key={newsItems.title}/>
                     ))
             }
              

        </div>

    </Container>
          
        
    )
}

export default NewsContent
