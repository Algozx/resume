import React, { useState } from "react";
import MedroomIcon from "../assets/images/icons/medroomicon.png";
import LigaIcon from "../assets/images/icons/ligaicon.png";
import Popup from "./PopUp";

//Bia Port
//GardenPass
import BingoShow1 from "../assets/images/bingoshow1.png";
import Poliana1 from "../assets/images/poliana1.png";
import LigaMain from "../assets/images/liga-main.png";
import BingoShow2 from "../assets/images/bingshow2.png";
import Poliana2 from "../assets/images/poliana2.png";

//Hestia
import MedroomInfo from "../assets/images/medroom1.png";
import MedroomInfo2 from "../assets/images/medroom2.png";
import MedroomInfo3 from "../assets/images/medroom3.png";
import MedroomInfo4 from "../assets/images/medroom4.png";
import MedroomMain from "../assets/images/medroom-main.png";
import MedroomInfo5 from "../assets/images/medroom5.png";

//Hackathon
import MedroomVideo from "../assets/videos/medroomVideo.mp4";

const Portfolio = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupData, setPopupData] = useState({});

  const handlePopupOpen = (e, popupContent) => {
    e.preventDefault();
    setPopupData(popupContent); // Atualiza o estado com o conteúdo do popup
    setIsPopupVisible(true);    // Torna o popup visível
  };

  const handlePopupClose = (e) => {
    e.preventDefault();
    setIsPopupVisible(false);   // Fecha o popup
  };

const popups = [
  {
    // --- LIGA FACENS  POP UP INFO ---
    title: "LIGA Facens Mobile Experience",
    subtitle: "LIGA Facens",
    iconSrc: LigaIcon,
    image1: LigaMain, // Imagem principal do grid

    // --- LIGA FACENS CONTENT ---
    contentBlocks: [
      { type: 'header', text: 'LIGA Facens & Licensed Mobile Games' }, // <-- Exemplo de novo título
      { type: 'paragraph', text: 
        'During my time at LIGA Facens, I worked on the development of mobile games licensed for major TV broadcasters (SBT), focusing on the hyper-casual and mass market. This experience served as my technical foundation in Unity for mobile, where I learned to balance visual fidelity with the performance required to run on a wide range of Android and iOS devices.'
       },
      { type: 'paragraph', text: 
        'I took ownership of the entire "end-to-end" development lifecycle, from implementing gameplay mechanics (such as Match-3 logic and Bingo systems) to integrating Ad SDKs, optimizing builds, and managing the final store publishing process (Google Play and App Store). As an intern, my biggest challenge—and achievement—was stepping up to handle responsibilities typically reserved for more senior roles'
       },
      { type: 'paragraph', text: ''},
      { type: 'image', src: BingoShow1, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: BingoShow2, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: Poliana2, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: Poliana1, alt: 'Primeira imagem do projeto', link: 'https://play.google.com/store/apps/details?id=com.liga.sbt.polianacakecrush'},
    ]
    },
  //************************************************************************************************************************************************************************************************** */
    {
    // --- MEDROOM POP UP INFO ---
    title: "Clinical Case",
    subtitle: "Medroom",
    iconSrc: MedroomIcon,
    image1: MedroomMain, // Imagem principal do grid

    // --- MEDROOM CONTENT ---
    contentBlocks: [
      { type: 'header', text: 'VR Medical Training' }, // <-- Exemplo de novo título
      { type: 'paragraph', text: 
        'Clinical Case is a Virtual Reality simulation designed to bridge the gap between theory and practice for medical students. It provides a safe environment to perform anamnesis, physical exams, and diagnose virtual patients.'
       },
      {
        type: 'paragraph3',
        text: '<b>Key Contributions (Junior to Senior Path):</b><br/>Over a 4-year tenure, I progressed from a Junior developer to a Senior role, taking ownership of core simulation features.',
        bulletItems: [
          { text: '<span class="indent-explanation"> <b>-</b> <b>Core Systems:</b> Engineered the anamnesis (dialogue) system and implemented interactive physical exam mechanics using VR controllers.</span>' },
          { text: '<span class="indent-explanation"> <b>-</b> <b>UI/UX Implementation:</b> Led the technical implementation of three major UI overhauls, working closely with the design team to improve accessibility and flow for students.</span>' },
          { text: '<span class="indent-explanation"> <b>-</b> <b>Reliability:</b> Collaborated with QA to maintain high stability standards required for educational software used by medical institutions.</span>' }
        ]
      },
      {
          type: 'local_video', // Novo tipo
          src: MedroomVideo,   // A variável importada (não é string entre aspas)
      },
      { type: 'paragraph', text: ''},
      { type: 'image', src: MedroomInfo, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: MedroomInfo2, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: MedroomInfo3, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: MedroomInfo4, alt: 'Primeira imagem do projeto' },
      { type: 'image', src: MedroomInfo5, alt: 'Primeira imagem do projeto',link: 'https://www.medroom.com.br/clinicalcase' },
    ]
    },
          /*
    {
    // --- Dados para o GRID do portfólio ---
    title: "Crypto App UI Design",
    subtitle: "Vimeo Video",
    image1: VimeoVideoImg, // Imagem principal do grid

    // --- Dados para o POPUP (NOVO) ---
    contentBlocks: [
      { type: 'header', text: 'Crypto App UI Design' },
      { type: 'meta', createdBy: "Design Studio", date: "15/01/2023", client: "Blockchain Inc.", category: "UI/UX" },
      { type: 'paragraph', text: 'Non vel eget pharetra vestibulum orci amet feugiat mi cras.' },
      { type: 'video', url: 'https://player.vimeo.com/video/259411563' }
    ]
  }
  */
];

  return (
      <>
        {/* <!-- ====================================== Section Portfolio ===================================== --> */}
        <section className="portfolio-section" id="portfolio">
          <div className="heading-container">
            <h2 className="section-heading-text coding-skill-text fade_up">
              Portfolio.
            </h2>
            <div className="line"></div>
              </div>
              {/* --- ADICIONE ESTA PARTE AQUI --- */}
              <p className="fade_up" style={{ color: '#cccccc', marginTop: '5px', fontSize: '16px' }}>
                  Click below for more details
              </p>
          <div className="portfolios-group-main">
            {popups.map((popupContent, index) => (
                <div key={index}>
                  <div
                      className="image-container popup-btn zoom_in"
                      onClick={(e) => handlePopupOpen(e, popupContent)}
                  >
                    <img src={popupContent.image1} alt={popupContent.title} />
                    <div className="overlay">
                      <img src={popupContent.iconSrc} alt="icon" className="vimeo-icon" />
                      <p className="overlay-text">{popupContent.title}</p>
                    </div>
                  </div>
                  <p className="Corporate zoom_in">{popupContent.title}</p>
                  <p className="Corporate-sub zoom_in">{popupContent.subtitle}</p>
                </div>
            ))}
          </div>
        </section>
        <Popup
            isVisible={isPopupVisible}
            onClose={handlePopupClose}
            {...popupData} // Passa os dados do popup de forma dinâmica
        />
        {/* <!-- ====================================== Section Portfolio End ===================================== --> */}
      </>
  );
};


export default Portfolio;