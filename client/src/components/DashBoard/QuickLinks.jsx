import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';


function QuickLinks() {
    const references = [
        { id: 1, title: 'Technical', link: '/voicechat' },
        { id: 2, title: 'HR', link: '/voicechat' },
        { id: 3, title: 'Managerial', link: '/voicechat' },
       
        // Add more references as needed
      ];
  return (
    <div className="reference-cards">
      <h1>Mock Interviews</h1>
      <div className="card-container">
        {references.map(reference => (
          <div key={reference.id} className="refcard">
            <h2>{reference.title}</h2>
            <Link to={reference.link}></Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuickLinks