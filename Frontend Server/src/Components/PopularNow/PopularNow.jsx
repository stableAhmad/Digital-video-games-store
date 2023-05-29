import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../PopularNow/PopularNow.module.css';
import { Helmet } from "react-helmet";

const gameSlides = [
    {
        mainImage: 'https://i.ytimg.com/vi/4uP2MyUL49s/maxresdefault.jpg',
        legend: 'Cats',
        title: 'Stray',
        description:
            'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.',

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
            'https://cdn.vox-cdn.com/thumbor/FYUO-naTFiuoBNJ_jTvOmq8XZnw=/0x0:2000x1125/1200x800/filters:focal(906x436:1226x756)/cdn.vox-cdn.com/uploads/chorus_image/image/66423112/FirstLook_Smoke_VALORANT.0.jpg',
            'https://i.guim.co.uk/img/media/4fcead14348c3eeb2958d4b9dc4a931d93b65b54/58_0_1749_1050/master/1749.jpg?width=465&quality=85&dpr=1&s=none',
        ],
    },
    {
        mainImage: 'https://i.kym-cdn.com/entries/icons/facebook/000/034/213/cover2.jpg',
        legend: 'Battle Royale',
        title: 'Fortnite',
        description:
            'VALORANT is a character-based 5v5 tactical shooter set on the global stage. Outwit, outplay, and outshine your competition with tactical abilities, precise gunplay, and adaptive teamwork.',

        smallImages: [
            'https://images.ctfassets.net/p0qf7j048i0q/22CA69A7D1C3463E86938EBD6DB7F15D/86cd3407b331765631a4a0260e2aeb52/070518_7_Things_I_Tell_Parents_of_Kids_With_ADHD_and_Social_Skills_Issues_About_Fortnite.jpg?w=3840&q=75&h=3840&fm=webp',
            'https://imageio.forbes.com/specials-images/imageserve/604f6b5c00178ba3ac7dc066/Fortnite/960x0.jpg?format=jpg&width=960',
        ],
    },


];


export default function PopularNow() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>POPULAR NOW 🔥</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="row ">

                {gameSlides.map((game) => (
                    <div className="col-sm-12 col-md-6 mb-5 col-sm">
                        <Card className={`${styles.PopCard} h-100 bg-transparent text-white`}>
                            <Card.Img variant="top" src={game.mainImage} />
                            <Card.Body>
                                <Card.Title>{game.title}</Card.Title>
                                <Card.Text className='mb-5'>
                                    {game.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>


        </>
    )
}
