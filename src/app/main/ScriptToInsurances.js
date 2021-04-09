useEffect(() => {
    const newInsurances = [
      { index: 1, toggler: false, src: '/insurances/VideoA.png', video: 'https://www.youtube.com/embed/wqPSDe-AdN4', label: 'Glosario A' },
      { index: 2, toggler: false, src: '/insurances/VideoB.png', video: 'https://www.youtube.com/embed/p8oY34MmZ0Y', label: 'Glosario B' },
      { index: 3, toggler: false, src: '/insurances/VideoC.png', video: 'https://www.youtube.com/embed/2Occ4utV8s0', label: 'Glosario C' },
      { index: 4, toggler: false, src: '/insurances/VideoCPP.png', video: 'https://www.youtube.com/embed/j6a9Re_rnAE', label: 'Covid Protect Plus' },
      { index: 5, toggler: false, src: '/insurances/VideoS.png', video: 'https://www.youtube.com/embed/WYjNHS3Rzwk', label: 'Sofía Niño de Rivera nos Habla de Seguros' },
      { index: 6, toggler: false, src: '/insurances/VideoM.png', video: 'https://www.youtube.com/embed/kzrt8_LwsM4', label: 'Interprotección Seguro Seguro (Manifiesto)' },
      { index: 7, toggler: false, src: '/insurances/Video07.png', video: 'https://www.youtube.com/embed/0vFyKnBUxaU', label: 'Bien seguro. Protege tu casa y sus contenidos.' },
    ];
    setTimeout(() => {
      setInsurances(newInsurances);
      setLoading(false);
    }, 1500);
  }, [])

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="prev-arrow"
        onClick={onClick}
      />
    );
  }

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="next-arrow"
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        }
      }
    ]
  };

  const setTogglerItem = index => {
    const filteredItem = insurances.filter(i => i.index === index)[0];
    filteredItem.toggler = !filteredItem.toggler;
    const restFilters = insurances.filter(i => i.index !== index);
    restFilters.push(filteredItem);
    restFilters.sort((a, b) => a.index - b.index);
    setInsurances(restFilters);
  };