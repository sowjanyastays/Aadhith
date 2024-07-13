import React, { useState, useEffect } from 'react';
import './MainOutPage.css';
import { useNavigate } from 'react-router-dom';

function Box({ onHover }) {
  return (
    <div className="main-page-box center" onMouseEnter={onHover}>
      <div className="main-page-box-body">
        <div className="main-page-box-lid">
          <div className="main-page-box-bowtie"></div>
        </div>
      </div>
    </div>
  );
}

function MainPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNextButton(true);
    }, 30000); // Show button after 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleHover = () => {
    setTimeout(() => {
      setModalOpen(true);
    }, 1000); // Open modal after 1 second
  };

  const handleMouseLeave = () => {
    setModalOpen(false);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const password = event.target.elements.password.value.trim().toLowerCase();

    if (password === 'sowji') {
      // Open drive link in new tab
      alert("Please come back here once you have watched the entire video");
      window.open('https://drive.google.com/file/d/1SLqN3xpDhgPsdZ_fZ8JZU79gB4kU9F82/view', '_blank');
    } else if (password === 'sowjanya') {
      alert("A little bit shorter, the way you usually call me.");
    } else {
      alert("EXCUSE ME?????????? PLEASE RETRY");
    }

    // Close the modal after handling password
    setModalOpen(false);
  };

  const handleNextButtonClick = () => {
    history('/video');
  };

  return (
    <React.Fragment>
      <div className="main-page-container">
        <div className="row">
          <Box onHover={handleHover} />
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleMouseLeave}>&times;</span>
            <small>Hint: Who is the greatest sister ever? You have to type in only one password to unlock the special video.</small>
            <form onSubmit={handlePasswordSubmit}>
              <h2>Enter Password</h2>
              <input type="password" name="password" placeholder="Enter password" required />
              <button type="submit">Submit</button>
              {showNextButton && (
                <button className="next-button" onClick={handleNextButtonClick}>WAIT THERE IS MORE?? OF COURSE THERE IS, CLICK ME!!!</button>
              )}
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default MainPage;
