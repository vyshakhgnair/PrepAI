import React, { useState } from 'react';
import './Resumeats.css';
import { Page } from 'react-pdf';
import { getDocument } from 'pdfjs-dist';

const ResumeUploader = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);

  const handleResumeUpload = async (event) => {
    const file = event.target.files[0];
    setResume(file);
    const pdfDoc = await getDocument(file).promise;
    setPdfDoc(pdfDoc);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can perform further actions, such as uploading the resume content and job description to a server
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
      {pdfDoc && (
        <div>
          <h2>Resume Preview</h2>
          <Page pageNumber={1} width={pdfDoc.getPage(1).view[2]} height={pdfDoc.getPage(1).view[3]}>
            {({ page }) => (
              <div>
                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <svg width="100%" height="100%" viewBox={`0 0 ${page.view[2]} ${page.view[3]}`}>
                      {page.content.items.map((item, index) => {
                        if (item.kind === 'path') {
                          return (
                            <path key={index} fill={item.color} d={item.path} />
                          );
                        } else if (item.kind === 'text') {
                          return (
                            <text key={index} x={item.x} y={item.y} fill={item.color} fontFamily={item.fontFamily} fontSize={item.fontSize}>
                              {item.text}
                            </text>
                          );
                        }
                        return null;
                      })}
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </Page>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;