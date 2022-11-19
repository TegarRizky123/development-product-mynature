import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './hero-img.svg';
import './Home.css'
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <>
            <section id="hero" className="hero">
                <Container className="container position-relative">
                    <Row className="row gy-5" data-aos="fade-in">
                        <Col className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Selamat Datang Di <span>MyNature</span></h2>
                            <h3>Ayo Berperan Aktif Dalam Menjaga Lingkungan</h3>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Link to={"articles"} className="btn-get-started">Get Started</Link>
                                <a href="https://youtu.be/JoufeKJbUIs" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </Col>
                        <Col className="col-lg-6 order-1 order-lg-2">
                            <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1668869299/hero-img_xvgjko.svg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                        </Col>
                    </Row>
                </Container>

                <div className="icon-boxes position-relative">
                    <Container className=" position-relative">
                        <Row className="row gy-4 mt-5">
                            <Col className="col-xl-3 md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <img className='icon' src="https://storage.googleapis.com/planet4-indonesia-stateless-develop/2018/09/24ef8336-offices-150x150.png" alt="" />
                                </div>
                            </Col>
                            <Col className="col-xl-3 md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <img className='icon' src="https://storage.googleapis.com/planet4-indonesia-stateless-develop/2018/06/a58ce16f-history-150x150.png" alt="" />
                                </div>
                            </Col>
                            <Col className="col-xl-3 md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <img className='icon' src="https://storage.googleapis.com/planet4-indonesia-stateless-develop/2018/06/3e1abd7b-resist.png" alt="" />
                                </div>
                            </Col>
                            <Col className="col-xl-3 md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <img className='icon' src="https://storage.googleapis.com/planet4-indonesia-stateless-develop/2018/06/5e74800c-support-us.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            <section id="stats-counter" className="stats-counter">
                <Container className="container" data-aos="fade-up">

                    <Row className="row gy-4 align-items-center">

                        <Col className="lg-6">
                            <img src="https://res.cloudinary.com/dzgtndwwd/image/upload/v1668869290/stats-img_yrdcsc.svg" alt="" className="img-fluid" />
                        </Col>

                        <Col className="lg-6">

                            <div className="stats-item d-flex align-items-center">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong style={{ color: '#008d7d', fontSize: '30px' }}>213</strong> Orang Berpartisipasi</p>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </section>


            <section id="harapan" className="harapan mt-5 mb-5">
                <Container className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2 className='harapan text-center'>Harapan</h2>
                    </div>

                    <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="harapan-wrap">
                                    <div className="harapan-item">
                                        <div className="d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/sheha_w541d2.svg" className="harapan-img flex-shrink-0" alt="" />
                                            <div>
                                                <h3>Donita Primi</h3>
                                                <h4>Participant</h4>
                                            </div>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>Semoga banyak generasi muda di Indonesia yang semakin sadar betapa pentingnya menjaga lingkungan
                                            dan dapat ikut aktif dalam melakukan perubahan perubahan demi memperbaiki kerusakan yang telah kita buat
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="harapan-wrap">
                                    <div className="harapan-item">
                                        <div className="d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/tegar_olhhfz.svg" className="harapan-img flex-shrink-0" alt="" />
                                            <div>
                                                <h3>Tegar Rys</h3>
                                                <h4>Participant</h4>
                                            </div>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            Masyarakat kita harus banyak mengetahui informasi tentang isu lingkungan
                                            yang sedang terjadi saat ini agar mereka bisa peduli dan ikut kontribusi menanggulangi
                                            masalah tersebut karena kita harus bersatu untuk bisa merubah Indonesia yang lebih baik
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="harapan-wrap">
                                    <div className="harapan-item">
                                        <div className="d-flex align-items-center">
                                            <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1666273663/tech4impact/reza_jnvba2.svg" className="harapan-img flex-shrink-0" alt="" />
                                            <div>
                                                <h3>Reza Saputra</h3>
                                                <h4>Participant</h4>
                                            </div>
                                        </div>
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            Indonesia harus bisa kembali hijau lagi seperti dulu dan terus menjadi paru paru dunia
                                            demi keberlangsungan hidup kita semua. Sebagai penerus bangsa maka kita harus bisa membawa perubahan
                                            baru yang positif
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Home