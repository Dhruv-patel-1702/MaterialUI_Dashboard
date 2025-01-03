import React from 'react'
import Navbar from '../Components/Navbar'
import ScoringBox from '../Components/Scoringbox'
import Sidebar from './sidebar'

const Dashboard = () => {
  return (
    <div className='flex w-full h-[100vh]'>
      <div>
      <Sidebar/>
      </div>
      <div className='flex flex-col w-full h-[100vh]'>
        <Navbar/>
        <div className='px-5'>
          <ScoringBox/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
