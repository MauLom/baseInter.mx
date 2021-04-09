const [experiences, setExperiences] = useState([
    { index: 1, toggler: false, src: '/experiences/01.png', video: 'https://www.redbull.com/int-en/redbullracing' },
    { index: 2, toggler: false, src: '/experiences/02.jpg', video: 'https://sergioperez.mx/' },
    { index: 3, toggler: false, src: '/experiences/03.jpg', video: 'https://www.altiusmedia.com/' },
    { index: 4, toggler: false, src: '/experiences/04.png', video: 'https://abiertomexicanodetenis.com/' },
    { index: 5, toggler: false, src: '/experiences/05.png', video: 'https://pescadodemoctezuma.com/' },
    { index: 6, toggler: false, src: '/experiences/06.jpg', video: 'https://www.atlasfc.com.mx/home' },
  ])

  const setTogglerItem = index => {
    const filteredItem = experiences.filter(i => i.index === index)[0];
    filteredItem.toggler = !filteredItem.toggler;
    const restFilters = experiences.filter(i => i.index !== index);
    restFilters.push(filteredItem);
    restFilters.sort((a, b) => a.index - b.index);
    setExperiences(restFilters);
  };
