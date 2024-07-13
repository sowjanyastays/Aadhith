import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VideoPage.css';
import { BsX } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const videos = [
  'vid-1.MP4',
  'vid-2.MP4',
  'vid-3.MP4',
  'vid-4.MP4',
  'vid-5.mp4',
  'vid-6.mp4',
  'vid-7.mp4',
  'vid-8.mp4',
  'vid-9.mp4',
  'vid-10.mp4',
  'vid-11.mp4',
  'vid-12.mp4',
  'vid-13.mp4',
  'vid-14.mp4',
  'vid-15.mp4',
];

function Box({ videoSrc, onOpen }) {
  return (
    <div className="box" onClick={() => onOpen(videoSrc)}>
      <div className="box-body">
        <video className="img" src={videoSrc} alt="Video thumbnail" />
        <div className="box-lid">
          <div className="box-bowtie"></div>
        </div>
      </div>
    </div>
  );
}

function VideoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOpenModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
  };

  const handleMorePhotosClick = () => {
    navigate('/photos'); // Navigate to /photos route
  };

  return (
    <div className='video-page'>
      <Container className="video-container">
        <Row className="justify-content-center">
          <Col xs={12}>
            <h3 className="text-center text-light my-5"><strong>A LITTLE BEHIND THE SCENES(Hover over the box, watch all)</strong></h3>
            <small>Make sure to watch all of them</small>
          </Col>
          {videos.map((videoSrc, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="d-flex justify-content-center my-2">
              <Box videoSrc={videoSrc} onOpen={handleOpenModal} />
            </Col>
          ))}
        </Row>
        <Modal show={modalOpen} onHide={handleCloseModal} centered>
          <Modal.Body className="bg-dark text-light">
            <video src={currentVideo} controls autoPlay className="w-100" />
            <small>Click outside the box to continue</small>
          </Modal.Body>
        </Modal>
        <Row className="justify-content-center mt-5">
          <Button variant="primary" size="lg" onClick={handleMorePhotosClick}>
            Oh no there is more click me
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default VideoPage;
