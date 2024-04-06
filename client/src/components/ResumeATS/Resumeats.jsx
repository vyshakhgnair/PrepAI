import React, { useState } from 'react';
import './Resumeats.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumeUploader = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [resumeContent, setResumeContent] = useState('');

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
    // Read the contents of the PDF file
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      setResumeContent(content);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can perform further actions here, like uploading the resume content and job description to a server
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
      {resumeContent && (
        <div>
          <h2>Resume Content</h2>
          <pre>{resumeContent}</pre>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
