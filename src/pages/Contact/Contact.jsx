import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'


const Contact = () => {
    return (
        <>
            <section id="contact" className="contact mt-5 mb-5">
                <Container className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Contact</h2>
                        <h5>Terima kasih atas minat kamu pada My Nature.</h5>
                        <p>Jika kamu mempunyai pertanyaan, atau keperluan silakan langsung hubungi kami melalui email,
                            telepon, atau berkunjung langsung ke kantor kami.</p>
                    </div>

                    <Row className="row gx-lg-0 gy-4">

                        <Col className="col-lg-4">

                            <div className="info-container d-flex flex-column align-items-center justify-content-center">
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>Kecamatan Menteng, Jakarta Pusat</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info.id@greenpeace.org</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+62 21 3148521</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-clock flex-shrink-0"></i>
                                    <div>
                                        <h4>Open Hours:</h4>
                                        <p>Mon-Sat: 11AM - 5PM</p>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col className="col-lg-8">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="7" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact