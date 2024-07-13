import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook for redirection
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';

function MainPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  let count = 0;
  const history = useNavigate(); // Initialize useHistory hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Please enter your username';
    if (!formData.password) newErrors.password = 'Please enter your password';
    if (formData.password && formData.password !== formData.username) {
      newErrors.password = 'Username and password must be the same';
    }
    if (formData.password === "aadhith" && formData.password === formData.username) {
      newErrors.password = 'Username and password cannot be "aadhith"';
      newErrors.username = 'Username and password cannot be "aadhith"';
    }
    if (formData.username && formData.password && (formData.username === "aadhi" && formData.password === "aadhi")) {
      count++;
    }
    if (count === 1) {
      setShowToast(true);
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
  };

  const handleToastLogin = () => {
    history('/main-vid')
  };

  return (
    <Container fluid className="split">
      <Row>
        <Col md={6} className="left d-flex align-items-center justify-content-center">
          <img src="main-page-image.gif" alt="Gif" className="gif" />
        </Col>

        <Col md={6} className="right d-flex align-items-center justify-content-center">
          <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group controlId="username" className='mt-4'>
              <Form.Label><strong>Username</strong></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label><strong>Password</strong></Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <small style={{"color":"white"}}><i className="bi bi-lightbulb"></i> Hint: The username is your name and the password is the same as the username</small>

            <br />
            <Button variant="primary" type="submit" block className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={30000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">HAHAHAHAHAHHAHAH</strong>
        </Toast.Header>
        <Toast.Body>Did you think it would be that easy? But I'll let you login for now!
          <br />
          <Button variant="primary" onClick={handleToastLogin}>Log in</Button>
        </Toast.Body>
      </Toast>
    </Container>
  );
}

export default MainPage;
