import React, { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";

export default () => {
    const slider = useRef();
    const [elements] = useState([
        { index: 1, image: '/slider/Slider.ico_01.svg', title: 'Más de 40 años', titleStrong: 'de experiencia' },
        { index: 2, image: '/slider/Slider.ico_02.svg', title: 'Nuestros', titleStrong: 'clientes' },
        { index: 3, image: '/slider/Slider.ico_03.svg', title: '24/7 Gente', titleStrong: 'Gente experta' },
        { index: 4, image: '/slider/Slider.ico_04.svg', title: 'Orgullosamente', titleStrong: 'Mexicanos' }
    ]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       centerMode: true,
        //       nextArrow: <SampleNextArrowMob />,
        //       prevArrow: <SamplePrevArrowMob />,
        //     }
        //   }
        // ]
    };

    const handlePrev = () => {
        slider.current.slickPrev();
    }

    const handleNext = () => {
        slider.current.slickNext();
    }

    return (
        <Container fluid style={{ backgroundColor: '#F5F5F5', paddingTop: '80px', paddingBottom: '80px' }}>
            <Container style={{ position: 'relative' }}>
                <div className="content-titles-slider">
                    <p style={{ WebkitTextStrokeWidth: '1.4px', WebkitTextStrokeColor: '#0A3949', color: '#F5F5F5', letterSpacing: '0.02em', margin: '0' }}>
                        ¿Por qué somos {' '}
                    </p>
                    <p style={{ color: '#0A3949', margin: '0', marginTop: '-12px' }}>
                        el mejor broker
          </p>
                    <p style={{ color: '#0A3949', margin: '0', marginTop: '-12px' }}>
                        de méxico?
          </p>
                </div>
                <Slider className="slider-best" ref={slider} {...settings} className="containerCarousel">
                    {
                        elements.map(item => (
                            <div key={item.index} style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
                                <div className="special-item-titles">
                                    <p className="item-title-slider">{item.title}</p>
                                    <p className="item-title-strong-slider">{item.titleStrong}</p>
                                </div>
                                <img
                                    className="d-block m-auto d-block"
                                    width="50%"
                                    height="100px"
                                    src={item.image}
                                    alt="First slide"
                                />
                                <div style={{ position: 'relative' }} className="w-100 mt-4">
                                    {/* LABEL SECTION */}
                                    {item.index === 1 && (
                                        <div className="label-section-slider">
                                            <p className="m-0">
                                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>CLIENTES</span>
                                            </p>
                                            <p className="m-0">
                                                <span style={{ fontWeight: 'bold' }}>+300k</span> Digitales
                      </p>
                                            <p className="m-0">
                                                <span style={{ fontWeight: 'bold' }}>+5k</span> Corporativos
                      </p>
                                            <p className="m-0">
                                                <span style={{ fontWeight: 'bold' }}>+20k</span> Microseguros
                      </p>
                                        </div>
                                    )}
                                    {item.index === 2 && (
                                        <div className="label-section-slider">
                                            <p className="m-0">
                                                Siendo un <span style={{ fontWeight: 'bold' }}>INTER</span>mediario entre las aseguradoras y nuestros clientes para protegerlos con los mejores productos y el mejor servicio
                      </p>
                                        </div>
                                    )}
                                    {item.index === 3 && (
                                        <div className="label-section-slider">
                                            <p className="m-0">
                                                <span style={{ fontWeight: 'bold' }}>Te ofrecemos:</span>
                                            </p>
                                            <p className="m-0">
                                                Plan a tu medida
                      </p>
                                            <p className="m-0">
                                                Sin letras chiquitas
                      </p>
                                            <p className="m-0">
                                                Ni costos ocultos
                      </p>
                                        </div>
                                    )}
                                    {item.index === 4 && (
                                        <div className="label-section-slider">
                                            <p className="m-0">
                                                Presentes en 8 estados de la República.
                      </p>
                                            <p className="m-0">
                                                CDMX | MTY | MÉRIDA | TIJUANA | TORREÓN | CELAYA | GUADALAJARA | CULIACÁN
                      </p>
                                        </div>
                                    )}
                                    {/* END LABEL SECTION */}
                                    <div className="line-top-slider"></div>
                                    <div className="slider-control">
                                        <p className="item-title-slider">{item.title}</p>
                                        <p className="item-title-strong-slider">{item.titleStrong}</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                            <div onClick={() => handlePrev()} style={{ cursor: 'pointer' }}><img style={{ width: '16px', height: '16px', margin: '10px' }} src="/BigArrow_L.svg" /></div>
                                            <div>
                                                <p style={{ fontSize: '16px', fontWeight: '900', fontStyle: 'normal', color: '#DA0080', marginTop: '7px' }}>
                                                    {`0 ${item.index}`} <span style={{ fontSize: '16px', fontWeight: 'normal', fontStyle: 'normal', color: '#0A3949' }}> ─ {`0 ${elements.length}`} </span>
                                                </p>
                                            </div>
                                            <div onClick={() => handleNext()} style={{ cursor: 'pointer' }}><img style={{ width: '16px', height: '16px', margin: '10px' }} src="/BigArrow_R.svg" /></div>
                                        </div>
                                        <div style={{ borderBottom: '2px solid #DA0080' }}></div>
                                    </div>
                                    <div className="line-bottom-slider"></div>
                                </div>
                                <div className="slider-control-special">
                                    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                        <div onClick={() => handlePrev()} style={{ cursor: 'pointer' }}><img style={{ width: '16px', height: '16px', margin: '10px' }} src="/BigArrow_L.svg" /></div>
                                        <div>
                                            <p style={{ fontSize: '16px', fontWeight: '900', fontStyle: 'normal', color: '#DA0080', marginTop: '7px' }}>
                                                {`0 ${item.index}`} <span style={{ fontSize: '16px', fontWeight: 'normal', fontStyle: 'normal', color: '#0A3949' }}> ─ {`0 ${elements.length}`} </span>
                                            </p>
                                        </div>
                                        <div onClick={() => handleNext()} style={{ cursor: 'pointer' }}><img style={{ width: '16px', height: '16px', margin: '10px' }} src="/BigArrow_R.svg" /></div>
                                    </div>
                                    <div style={{ borderBottom: '2px solid #DA0080' }}></div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </Container>
        </Container>
    );
}
