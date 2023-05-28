import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Styles from './Games.module.css';

const gamesList = [
  {
    id: 1,
    title: 'Little Nightmare 2',
    price: '69$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3797878-little-nightmares-ii.jpg'
  },
  {
    id: 2,
    title: 'Fortnite',
    price: '100$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission ',
    imageUrl: 'https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3797878-little-nightmares-ii.jpg'
  },
  {
    id: 3,
    title: 'FIFA 23',
    price: '25$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 5,
    title: 'Grand Theft Auto V',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
  {
    id: 4,
    title: 'Cyberpunk 2077',
    price: '30$',
    description: 'Little Nightmares II is a suspense adventure game in which you play as Mono, a young boy trapped in a world that has been distorted by an evil transmission',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg'
  },
];

function Games() {
  return (
    <div className="container">
      <h1 className='text-white mb-5'>Our Games</h1>
      <div className="row">
        {gamesList.map((game) => (
          <div key={game.id} className=" h-100 col-sm-12 col-md-6 col-lg-3  mb-2 ">
            <Card className={` ${Styles.gamecard} overflow-hidden `} >
              <Card.Img variant="top" className={`${Styles.img} `} style={{height: '10rem', objectFit: 'cover'}} src={game.imageUrl} />
              <Card.Body>
                <Card.Title className='text-bold'><h6 className='text-main'>{game.title}</h6></Card.Title>
                <Card.Title ><p>{game.price}</p></Card.Title>
                <Button variant="info" className={`btn ${Styles.Game} w-100`} >Add +</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;