import React, { useState, useEffect } from 'react';
import './CarPage.css';

const images = [
  "/ph-1 (1).JPG",
  "/ph-1 (2).jpg",
  "/ph-1 (3).jpg",
  "/ph-1 (4).jpg",
  "/ph-1 (5).jpg",
  "/ph-1 (6).jpg",
  "/ph-1 (7).jpg",
  "/ph-1 (8).jpg",
  "/ph-1 (9).jpg",
  "/ph-1 (10).jpg",
  "/ph-1 (11).jpg",
  "/ph-1 (12).jpg",
  "/ph-1 (13).jpg",
  "/ph-1 (14).jpg",
  "/ph-1 (15).jpeg",
  "/ph-1 (16).jpeg",
  "/ph-1 (17).jpeg",
  "/ph-1 (18).jpeg",
  "/ph-1 (19).jpeg",
  "/ph-1 (20).jpeg",
  "/ph-1 (21).jpeg",
  "/ph-1 (22).jpeg",
  "/ph-1 (23).jpeg",
  "/ph-1 (24).jpeg",
  "/ph-1 (25).jpeg",
  "/ph-1 (26).jpeg",
  "/ph-1 (27).jpeg",
  "/ph-1 (28).jpeg",
  "/ph-1 (29).jpeg",
  "/ph-1 (30).jpeg",
  "/ph-1 (31).jpeg",
  "/ph-1 (32).jpeg",
  "/ph-1 (33).jpeg",
];

function getRandomTransform() {
  const randX = Math.random() * (window.innerWidth - 150); // Random X position within window width
  const randY = Math.random() * (window.innerHeight - 150); // Random Y position within window height
  const rotateDeg = Math.random() * 360; // Random rotation degree

  return `translate(${randX}px, ${randY}px) rotateZ(${rotateDeg}deg)`;
}

function getRandomAnimationDuration() {
  return Math.random() * 20 + 10; // Random duration between 10 and 30 seconds
}

function CarouselPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
      thumbnail.style.animation = `fly ${getRandomAnimationDuration()}s linear infinite`;
      thumbnail.style.transform = getRandomTransform();
    });
  }, []);

  return (
    <div className="gallery-container">
      <h1 className="timeline-heading">Timeline</h1>
      <small className='timeline-heading'>Just click on the image to enlarge and view it and click ouside the image to close it</small>

      <div className="thumbnails">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => openImage(imageUrl)}
          >
            <img src={imageUrl} alt={`Thumbnail ${index}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="enlarged-view" onClick={closeImage}>
          <img src={selectedImage} alt="Enlarged View" />
        </div>
      )}

      {/* Ready to move on text and button */}
      <div className="move-on-container">
        <p className="ready-to-move">Ready to move on? Make sure see all the photos before moving on</p>
        <a href="/sur-video" className="move-on-button">Move on</a>
      </div>
    </div>
  );
}

export default CarouselPage;
