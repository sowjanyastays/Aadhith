import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components styles
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/last-bg.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const DoorsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #fff; /* Make text inside DoorsContainer white */
`;

const Heading = styled.h1`
  color: #fff; /* Make heading white */
`;

const BackDoorContainer = styled.div`
  display: inline-block;
  margin: 20px;
  position: relative; /* Added relative positioning */
`;

const Door = styled.div`
  background-color: brown;
  position: relative;
  width: 200px;
  height: 300px;
  transform-origin: left;
  transition: all 0.5s ease-in-out;
  margin-bottom: 10px;
  cursor: pointer;

  /* Additional styles when door is open */
  &.doorOpen {
    transform: perspective(1200px) translateZ(0) translateX(0) translateY(0) rotateY(-105deg);
    z-index: 1; /* Ensure the door is above the video */
  }
`;

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10; /* Ensure modal is above everything else */
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  position: relative;
  overflow: hidden;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #333;
  font-size: 20px;
`;

const DoorComponent = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDoorIndex, setSelectedDoorIndex] = useState(null);

  // Array of video paths
  const videoPaths = [
    '/sec-vid-1 (2).mp4',
    '/sec-vid-2.mp4',
    '/sec-vid-3.mp4',
    '/sec-vid-4.mp4'
  ];

  const toggleDoor = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);

    if (newOpenState[index]) {
      setSelectedDoorIndex(index);
      setSelectedVideo(videoPaths[index]); // Set the selected video path
      setModalOpen(true); // Open the modal when door is clicked
    } else {
      setSelectedDoorIndex(null);
      setSelectedVideo(null);
      setModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsOpen((prevOpenState) => {
      const newOpenState = [...prevOpenState];
      newOpenState[selectedDoorIndex] = false; // Close the selected door
      return newOpenState;
    });
    setSelectedVideo(null);
    setModalOpen(false);
  };

  return (
    <>
      <BackgroundContainer />
      <DoorsContainer>
        <Heading>YAY MORE SURPRISE!</Heading>
        {[0, 1, 2, 3].map((index) => (
          <BackDoorContainer key={index}>
            <Door className={`door ${isOpen[index] ? 'doorOpen' : ''}`} onClick={() => toggleDoor(index)} />
            {/* Render the modal only when isOpen[index] is true */}
            {isOpen[index] && modalOpen && (
              <ModalBackdrop onClick={closeModal}>
                <ModalContent>
                  <CloseButton onClick={closeModal}>&times;</CloseButton>
                  <VideoPlayer controls autoPlay>
                    <source src={videoPaths[index]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </VideoPlayer>
                </ModalContent>
              </ModalBackdrop>
            )}
          </BackDoorContainer>
        ))}
                <Heading>THATS ALL NOW GO ENJOY!!</Heading>
      </DoorsContainer>
    </>
  );
};

export default DoorComponent;
