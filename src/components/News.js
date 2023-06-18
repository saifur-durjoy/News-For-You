import React, { Component } from 'react'
import NewPara from './NewPara'

export class News extends Component {
    article = [
        {
            "source": {
                "id": "goteborgs-posten",
                "name": "Göteborgs-Posten"
            },
            "author": "Sandra Divinyi",
            "title": "Man döms för brutal kvinnomisshandel",
            "description": "Blodiga offret bad grannarna om hjälp – men fick ingen • Våldet fångades på film.",
            "url": "http://www.gp.se/nyheter/g%C3%B6teborg/man-d%C3%B6ms-f%C3%B6r-brutal-kvinnomisshandel-1.102395421",
            "urlToImage": "https://www.gp.se/image/policy:1.102395397:1687019464/image.jpg?f=Wide%26w=1200%26%24p%24f%24w=834285a",
            "publishedAt": "2023-06-17T18:30:52Z",
            "content": null
        },
        {
            "source": {
                "id": "t3n",
                "name": "T3n"
            },
            "author": null,
            "title": "Vision Pro und Metaverse? Diese 14 Filme und Serien bereiten dich vor",
            "description": "Virtual- und Augmented Reality sind schon seit Jahrzehnten ein großes Thema in Hollywood.",
            "url": "https://t3n.de/news/vision-pro-metaverse-filme-serien-1445642/",
            "urlToImage": "https://t3n.de/news/wp-content/uploads/2022/01/Metaversefilme.jpg",
            "publishedAt": "2023-06-17T17:30:00Z",
            "content": "Hinweis: Wir haben in diesem Artikel Provisions-Links verwendet und sie durch \"*\" gekennzeichnet. Erfolgt über diese Links eine Bestellung, erhält t3n.de eine Provision.\r\n Einige der Filme und Serien… [+18867 chars]"
        },
        {
            "source": {
                "id": "la-repubblica",
                "name": "La Repubblica"
            },
            "author": "La Repubblica",
            "title": "Incidente a Casal Palocco, Matteo Di Pietro e il video con il padre in Ferrari senza cinture di sicurezza. \"C…",
            "description": "In un filmato da 1,5 milioni di visualizzazioni, lo youtuber indagato per omicidio stradale regala per 24 ore una Portofino bianca a papà Paolo, dipende…",
            "url": "https://roma.repubblica.it/cronaca/2023/06/16/news/incidente_casal_palocco_di_pietro_theborderline_padre_ferrari_challenge-404743673/",
            "urlToImage": "https://www.repstatic.it/content/localirep/img/rep-roma/2023/06/16/233402630-1a7a6004-abf9-41aa-abfa-20af4059d5d2.jpg",
            "publishedAt": "2023-06-16T21:34:54Z",
            "content": "\"Che spettacolo!\". Parte così, con il grido di gioia del padre di Matteo Di Pietro, uno dei tanti video pubblicati sul canale TheBorderline. Il filmato si intitola \"Realizzo 10 sogni dei miei amici\",… [+212 chars]"
        },
        {
            "source": {
                "id": "rtl-nieuws",
                "name": "RTL Nieuws"
            },
            "author": "RTL Nieuws",
            "title": "Kijk onbeperkt series en films - home",
            "description": "Kijk onbeperkt series en films. Geniet altijd en overal van de beste series en films vanaf 4,99 per maand. Probeer nu de eerste 2 weken gratis!",
            "url": "https://www.videoland.com?utm_source=rtlnieuws&utm_medium=web&utm_campaign=headerbrandlink",
            "urlToImage": "https://videoland.com/welkom-app/uploads/2023/05/Group-20.png",
            "publishedAt": "2023-06-16T13:07:22.1063147Z",
            "content": "Videoland heeft met duizenden films en series uit binnen- en buitenland het grootste en meest gevarieerde online aanbod van Nederland. Hier vind je een overzicht van het aanbod. Daarnaast biedt Video… [+624 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Oli Welsh",
            "title": "Batman: The Brave and the Bold director will be The Flash’s Andy Muschietti",
            "description": "The director of Stephen King’s It movies will take on the first Batman film in James Gunn and Peter Safran’s rebooted DCU, adapted from the Grant Morrison comic",
            "url": "https://www.polygon.com/23763230/batman-dcu-the-brave-and-the-bold-the-flash-andy-muschietti",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/lR0e04p6c7Vx8IKZawtXXp_wYgQ=/0x0:1024x536/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24398838/batman_grant_morrison_e1449431704674_1024x648.jpg",
            "publishedAt": "2023-06-16T11:07:01Z",
            "content": "Andy Muschietti, whose new film The Flash has just opened in theaters, has been lined up to direct Batman: The Brave and the Bold, which will be the first Batman film in James Gunn and Peter Safrans … [+2247 chars]"
        },
        {
            "source": {
                "id": "blasting-news-br",
                "name": "Blasting News (BR)"
            },
            "author": "Gabriel A.B.",
            "title": "5 filmes excelentes para assistir em família no final de semana",
            "description": "Um bom filme pode ser mais do que necessário para juntar a família para compartilhar um momento de ternura",
            "url": "https://br.blastingnews.com/curiosidades/2023/06/5-filmes-excelentes-para-assistir-em-familia-no-final-de-semana-003706507.html",
            "urlToImage": "https://staticr1.blastingcdn.com/media/photogallery/2023/6/15/os/b_1200x630x82/monstros-sa-esta-disponivel-no-catalogo-do-disney-plus-divulgacaodisney_2934273.jpg",
            "publishedAt": "2023-06-15T21:20:36Z",
            "content": "Clássico dos anos 1990, o filme é uma ótima pedida para assistir em família. Disponível em: Disney+.\r\n\"A Creche do Papai\" (2003)\r\nO filme já virou um clássico! É uma comédia leve, divertida e ideal p… [+226 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Owen S. Good",
            "title": "Grand Theft Auto writer and Rockstar founder Dan Houser starts new studio",
            "description": "Dan Houser and his new studio, Absurd Ventures, announced they are open for business and will seek to create content for video games, film, animation, and podcasts.",
            "url": "https://www.polygon.com/23762438/rockstar-founder-studio-absurd-ventures-dan-houser-gta-red-dead",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/4HhfhwyCguhW4Z_LWF4PPJ2RCvA=/0x0:3500x1832/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24730622/853151462.jpg",
            "publishedAt": "2023-06-15T18:55:27Z",
            "content": "Absurd Ventures to create new universes and tell great stories, Dan Houser says"
        },
        {
            "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
            },
            "author": "chainwire",
            "title": "OKX and McLaren Racing Host Panel on Technology in Sports and Film at Tribeca Festival | NextBigFuture.com",
            "description": "New York City, New York, June 15th, 2023, Chainwire",
            "url": "https://www.nextbigfuture.com/2023/06/okx-and-mclaren-racing-host-panel-on-technology-in-sports-and-film-at-tribeca-festival.html",
            "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2023/06/Blog_1600x844-8_16867035833Jj2V7BUtL.jpg",
            "publishedAt": "2023-06-15T03:19:44Z",
            "content": "New York City, New York, June 15th, 2023, Chainwire\r\n<ul><li>Panelists included OKX Chief Marketing Officer Haider Rafique, McLaren Racing Chief Executive Officer Zak Brown, McLaren F1 Driver Lando N… [+6947 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Chris Calcino",
            "title": "Cairns artist David Hudson recalls Island of Dr Moreau experience with Marlon Brando and Val Kilmer",
            "description": "David Hudson has led an extraordinary life, but his stint as a half-human, half-bison hybrid alongside the Godfather star and Val Kilmer while filming The Island of Dr Moreau remains his strangest claim to fame.",
            "url": "http://www.abc.net.au/news/2023-04-03/david-hudson-bison-man-brando-island-doctor-moreau-cairns/102171602",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/80c7fd8e780bcaa4cddfa095c6fdf2a1?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485",
            "publishedAt": "2023-04-03T00:40:54Z",
            "content": "David Hudson has led an extraordinary life, but a three-month stint working as a human-bison hybrid alongside Marlon Brando and Val Kilmer in Far North Queensland stands as his strangest claim to fam… [+5646 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Collier Jennings",
            "title": "Best Action Movies on Netflix Right Now (September 2022) - IGN",
            "description": "These are the best action movies on Netflix right now -- blockbusters, fight films, animated adventures and shootouts galore.",
            "url": "https://www.ign.com/articles/best-action-movies-on-netflix-right-now",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/07/28/rrr-1659047262112.jpg?width=1280",
            "publishedAt": "2022-09-01T18:03:14Z",
            "content": "There is nothing like a good action movie on Netflix. The perfectly choreographed fight scenes that let you feel every punch and kick on screen; the shootouts that see bullets and bodies hitting the … [+11394 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Wired",
            "title": "5 Best High-End Compact Cameras: Fujifilm, Sony, Ricoh, Leica, and Canon",
            "description": "Your phone’s portrait mode is no match for these portable, powerful point-and-shoot cams.",
            "url": "https://www.wired.com/gallery/best-compact-cameras",
            "urlToImage": "https://media.wired.com/photos/648ba9b2f2de86183cf5b4d9/191:100/w_2580,c_limit/Sony-RX100VA-Compact-Camera-Gear.jpg",
            "publishedAt": "2018-08-05T13:00:00Z",
            "content": "While smartphones ate the low-end camera world, camera manufacturers have been making some extraordinary strides in what an advanced compact camera can do.\r\nSure, for day-to-day photography, a smartp… [+3972 chars]"
        }
    ]
    constructor(){
        super();
        this.state = {
            articles: this.article
        }
        

    };
  
    render() {
    return (
    <>
    <div className="container my-3">
        <h1> Top News </h1>

        <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 ">
                <NewPara title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} 
                         imgSrc={!element.urlToImage?"https://videoland.com/welkom-app/uploads/2023/05/Group-20.png":element.urlToImage} url={element.url} />
                     </div>
            })}
        </div>
        <div className="d-flex justify-content-between mx-5">
            <button type="button" class="btn btn-dark">Previous</button>
            <button type="button" class="btn btn-dark">Next</button>
        </div>
    
    
    </div>

    </>
      
    )
  }
}

export default News