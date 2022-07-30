import React from 'react'
import './home.scss'
import Top from './Top';
import Mid from './Mid';
import Bottom from './Bottom';
import Table from './Table';
function Home() {
  return (
    <div className="home ">
        
          <Top/>
          <Mid/>
          <Bottom/>
          <Table/>
          
    
    </div>
    
  )
}

export default Home;