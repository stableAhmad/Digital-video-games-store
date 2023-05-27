import React from 'react'

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
            'https://cdn.vox-cdn.com/thumbor/FYUO-naTFiuoBNJ_jTvOmq8XZnw=/0x0:2000x1125/1200x800/filters:focal(906x436:1226x756)/cdn.vox-cdn.com/uploads/chorus_image/image/66423112/FirstLook_Smoke_VALORANT.0.jpg',
            'https://i.guim.co.uk/img/media/4fcead14348c3eeb2958d4b9dc4a931d93b65b54/58_0_1749_1050/master/1749.jpg?width=465&quality=85&dpr=1&s=none',
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


export default function PopularNow() {
    return (
        <>

            <div className=" container-fluid bg-info w-75 mx-auto">
                <div className="row ">

                    {gameSlides.map((game) => (
                        <div className="col-md-4">
                            <div className="card w-100 bg-danger rounded overflow-hidden">
                                <img src={`${game.mainImage}`} alt="" />

                            </div>
                        </div>
                    ))}




                </div>
            </div>

        </>
    )
}
