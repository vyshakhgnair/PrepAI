import React from 'react';
import ProfileCard from './ProfileCard';
import TestScoresTable from './TestScoresTable';
import OverallRank from './OverallRank';
import ATSScoresCard from './ATSScoresCard';
import './Dashboard.css'
import Previous from './Previous';
import QuickLinks from './QuickLinks';

function Dashboard() {
  return (
     <div className="dashboard">

    <div className="right-column">
      <div className="card small-card">
      <ProfileCard/>     
      </div>
      <div className="card small-card">
        <OverallRank/>    
      </div>
        <div className="card small-card">
          <ATSScoresCard/>
        </div>
    </div>
    <div className="left-column">
      <div className="card large-card">
      <TestScoresTable/>
      </div>
      <div className="card small-card">
        <Previous/>
      </div>
    </div>
    <div className="rig-column">
      <div className="card small-card">

      <QuickLinks/>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
