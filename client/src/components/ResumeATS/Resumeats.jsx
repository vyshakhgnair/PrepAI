import React, { useState } from 'react';
import './Resumeats.css';

const ResumeUploader = () => {
  const [resumeContent, setResumeContent] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [similarityScore, setSimilarityScore] = useState(null);

  const handleResumeContentChange = (event) => {
    setResumeContent(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const calculateSimilarityScore = () => {
    const resumeWords = resumeContent.toLowerCase().split(/\W+/);
    const jobDescriptionWords = jobDescription.toLowerCase().split(/\W+/);
    const intersection = resumeWords.filter(word => jobDescriptionWords.includes(word));
    const similarity = (intersection.length / Math.sqrt(resumeWords.length * jobDescriptionWords.length)) * 100;
    return similarity.toFixed(2); // Round to 2 decimal places
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Calculate similarity score
    const score = calculateSimilarityScore();
    setSimilarityScore(score);

    // Log the resume content, job description, and similarity score to the console
    console.log('Resume Content:', resumeContent);
    console.log('Job Description:', jobDescription);
    console.log('Similarity Score:', score);

    // Here you can perform further actions based on the similarity score
    // For example, you can display the similarity score to the user or take specific actions depending on the score
  };

  return (
    <div>
      <h1>Resume ATS Checker</h1>
      {similarityScore !== null && (
        <div>
          <h2>ATS Score</h2>
          <p>Score: {similarityScore}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resumeContent">Paste or type your resume:</label>
          <textarea id="resumeContent" value={resumeContent} onChange={handleResumeContentChange} />
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
