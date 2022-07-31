import React from 'react'
import './home.scss'
import Top from './top/Top';
import Mid from './mid/Mid';
import Bottom from './bottom/Bottom';
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