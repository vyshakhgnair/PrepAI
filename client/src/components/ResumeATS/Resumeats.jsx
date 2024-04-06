import React, { useState } from 'react';
import './Resumeats.css';
//import pdfParse from 'pdf-parse';

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, like uploading the resume and job description to a server
    //const resumeText = await pdfParse(resume);
    //console.log('Resume:', resumeText);
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


