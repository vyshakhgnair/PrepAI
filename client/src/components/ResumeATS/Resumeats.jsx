import React, { useState } from 'react';
import './Resumeats.css';

const ResumeUploader = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions here, like uploading the resume and job description to a server
    console.log('Resume:', resume);
    console.log('Job Description:', jobDescription);
  };

  return (
    <div>
      <h1>Resume ATS Checker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resume">Upload Resume PDF:</label>
          <input type="file" id="resume" accept=".pdf" onChange={handleResumeUpload} />
        </div>
        <div>
          <label htmlFor="jobDescription">Add Job Description:</label>
          <textarea id="jobDescription" value={jobDescription} onChange={handleJobDescriptionChange} />
        </div>
        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default ResumeUploader;
