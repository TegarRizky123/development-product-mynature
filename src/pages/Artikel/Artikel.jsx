import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from 'react-bootstrap'
import './Artikel.css'

const Artikel = () => {


    const [articles, setArticle] = useState([]);

    useEffect(() => {
        getArticle();
    }, []);

    const getArticle = async () => {
        const response = await axios.get("https://634c3a82acb391d34a818933.mockapi.io/artikel");
        setArticle(response.data);
    };

    const navigation = useNavigate();
    const handleDetail = (id) => {
        // untuk pindah halaman ke page detail sekaligus membawa id params
        navigation(`/articles/detail/${id}`);
    };




    return (
        <>
            <div>
                {articles.map((artikel) => (
                    <section id="Artikel" className="Artikel mt-4" key={artikel.id}>
                        <Container className='position-relative'>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="Artikel-wrap">
                                        <div className="Artikel-item">
                                            <div className="itemCard">
                                                <div className="itemCardTitle">
                                                    <img src={artikel.images} className="Artikel-img flex-shrink-0" alt="" />
                                                    <h3>{artikel.title}</h3>
                                                </div>
                                                <button className="detailButton" type='button' onClick={() => handleDetail(artikel.id)}>Baca Selengkapnya</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>
                ))}
            </div>
        </>
    )
}

export default Artikel