import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
            <section id="about" className="about mt-5 mb-3">
                <Container className="container" data-aos="fade-up">
                    <Row className="row gy-4">
                        <Col className="col-lg-6">
                            <h3>Aktif Peduli dengan Lingkungan</h3>
                            <img src="https://trade-leaks.org/wp-content/uploads/2017/06/Slideshow-1.jpg" className="img-fluid rounded-4 mb-4" alt="" />
                            <p>My Nature hadir karena bumi yang rapuh ini perlu suara.
                                Butuh solusi. Butuh perubahan. Butuh aksi. My Nature
                                memiliki landasan prinsip dan nilai-nilai dasar yang tercermin
                                dalam setiap aksi kampanye lingkungan kami.</p>
                            <p> Kami akan melakukan suatu perubahan
                                positif untuk lingkungan di seluruh Indonesia yang dimulai dari lingkup terkecil.
                                Terima kasih atas kepedulian dan bantuanmu. Inilah kemenangan kita, inilah kemenangan
                                untuk lingkungan!</p>
                        </Col>

                        <Col className="col-lg-6">
                            <div className="content ps-0 ps-lg-5">
                                <p className="fst-italic">
                                    My Nature memiliki Visi Misi yang melandasi semangat kami
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle-fill"></i> Kedaulatan masyarakat untuk pengelolaan sumber daya alam yang berkeadilan dan berkelanjutan
                                    </li>
                                    <li><i className="bi bi-check-circle-fill"></i> Merancang, melakukan riset dan mengkampanyekan langkah-langkah nyata demi terwujudnya masa depan yang hijau dan damai bagi kita semua
                                    </li>
                                    <li><i className="bi bi-check-circle-fill"></i> Meningkatkan kepedulian dan kesadaran generasi penerus akan pentingnya menjaga bumi</li>
                                </ul>


                                <div className="position-relative mt-4">
                                    <img src="https://photo.kontan.co.id/photo/2022/02/27/677516015p.jpg" className="img-fluid rounded-4" alt="" />
                                    <a href="https://youtu.be/MAWv4SlDg-E" className="glightbox play-btn"></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="team" className="team text-center mt-5 mb-5">
                <Container className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Our Team</h2>
                        <p>FE 12 MyNature </p>
                    </div>

                    <Row id="team-card" className="row gy-4 text-center">

                        <Col className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="member">
                                <img src="https://i.pinimg.com/originals/22/f2/3d/22f23da7fc6822bd30102d525b653165.jpg" className="img-fluid" alt="" />
                                <h4>Donita Primi</h4>
                                <span>Front-End Development</span>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/donitaprimi"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/donitaprimimw"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="member">
                                <img src="https://i.kym-cdn.com/entries/icons/original/000/009/803/spongebob-squarepants-patrick-spongebob-patrick-star-background-225039.jpg" className="img-fluid" alt="" />
                                <h4>Tegar Risqy Ys</h4>
                                <span>Front-End Development</span>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/tgr_rys/" target="_blank"><i className="bi bi-instagram"></i></a>
                                    <a href="https://www.linkedin.com/in/tegar-risqy-yulian-santoso/" target="_blank"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                            <div className="member">
                                <img src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/05/spongebob.jpg?w=1000&h=600&crop=1" className="img-fluid" alt="" />
                                <h4>Reza Saputra</h4>
                                <span>Front-End Development</span>
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About