import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './GameSlider.module.css';
import { Slide, ToastContainer, toast } from 'react-toastify';

//NOTE - GameSlider Array that Represent the games
const gameSlides = [
  {
    mainImage: 'https://i.ytimg.com/vi/4uP2MyUL49s/maxresdefault.jpg',
    legend: 'Cats',
    title: 'Stray',
    description:
      'Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten cybercity and find their way home.',
    smallImages: [
      'https://cdn.mos.cms.futurecdn.net/8oa8SS9q2TsBrvGcHsqpbc.jpg',
      'https://i.ytimg.com/vi/4uP2MyUL49s/maxresdefault.jpg',
    ],
  },
  {
    mainImage: 'https://cdn.arstechnica.net/wp-content/uploads/2020/04/valorant-listing-800x450.jpg',
    legend: '5v5',
    title: 'Valorant',
    description:
      'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.',
    smallImages: [
      'https://images.ctfassets.net/p0qf7j048i0q/22CA69A7D1C3463E86938EBD6DB7F15D/86cd3407b331765631a4a0260e2aeb52/070518_7_Things_I_Tell_Parents_of_Kids_With_ADHD_and_Social_Skills_Issues_About_Fortnite.jpg?w=3840&q=75&h=3840&fm=webp',
      'https://imageio.forbes.com/specials-images/imageserve/604f6b5c00178ba3ac7dc066/Fortnite/960x0.jpg?format=jpg&width=960',
    ],
  },
  {
    mainImage: 'https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg',
    legend: 'Battle Royale',
    title: 'Fortnite',
    description:
      'Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator-made games, including racing, parkour, zombie survival, and more. Find it all in Fortnite!',
    smallImages: [
      'https://images.ctfassets.net/p0qf7j048i0q/22CA69A7D1C3463E86938EBD6DB7F15D/86cd3407b331765631a4a0260e2aeb52/070518_7_Things_I_Tell_Parents_of_Kids_With_ADHD_and_Social_Skills_Issues_About_Fortnite.jpg?w=3840&q=75&h=3840&fm=webp',
      'https://imageio.forbes.com/specials-images/imageserve/604f6b5c00178ba3ac7dc066/Fortnite/960x0.jpg?format=jpg&width=960',
    ],
  },
];


//NOTE - handleLogin function
function handleAddToCardToast(values) {

  toastMessage(`Added To Card 👍`)
}


//NOTE - Display toastMessage
const toastMessage = (msg) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide
  });
}




export default function GameSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleSlider() {
    console.log('clicked');
  }

  useEffect(() => {
    handleSlider();
  }, []);

  function handleSlideChange(index) {
    setCurrentSlide(index);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-auto col-md-9 mb-3">
          <Carousel
            className={styles.mainSlide}
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            useKeyboardArrows={true}
            onChange={handleSlideChange}
            swipeScrollTolerance={true}
          >
            {gameSlides.map((slide, index) => (
              <div className={`container-fluid ${styles.slideContainer}`} key={index}>
                <div className="row ">
                  <div className="col-12">
                    <div className={styles.slideInfo}>
                      {/* Main image in the slider */}
                      <img src={slide.mainImage} alt={`slide ${index + 1}`} className={styles.slideImage} />
                      <p className={`${styles.legend} legend`}>{slide.legend}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 ">
          <div className={`col-lg-12 ${styles.slideInfo} d-flex flex-column`}>
            {/* Info card */}
            <div className={`${styles.info} card mb-5 p-4 `}>
              <h2>{gameSlides[currentSlide].title}</h2>
              <p className={styles.description}>{gameSlides[currentSlide].description.split(' ').splice(0, 15).join(' ')}</p>
              <button className={`${styles.Addbtn} btn m-2  `} onClick={() => {
                handleAddToCardToast();
              }}>Add to Cart</button>
            </div>
            {/* Images under the card */}
            <div className="d-flex">
              {gameSlides[currentSlide].smallImages.map((image, imageIndex) => (

                <img src={image} alt={`slide 1`} className={`${styles.smallImage} `} key={imageIndex} />


              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
