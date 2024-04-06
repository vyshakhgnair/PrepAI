import React from 'react';
import './style.css'

const Previous = () => {
  // Sample image data, replace with your actual image URLs
  const images = [
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
    'https://banner2.cleanpng.com/20231219/yzv/transparent-cartoon-file-folder-documents-report-pie-charts-blue-folder-icon-with-various-documents-1710967192885.webp',
  ];

  return (
    <div className="gallery">
    <h3>Previous Reports</h3>
 <div className="scrollable-container">
        <div className="grid">
          {images.map((imageUrl, index) => (
            <div key={index} className="cards grid-item">
              <img src={imageUrl} alt={`Image ${index + 1}`} className="square-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Previous;
