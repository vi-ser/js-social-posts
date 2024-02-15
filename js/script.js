/*
Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.

Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder.

Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

BONUS
- Formattare le date in formato italiano (gg/mm/aaaa)
- Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
- Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

const posts = [
    {
        id: 1,
        content: "Dopo una giornata intensa, mi fermo un attimo davanti alla finestra. La città si sfuma nel crepuscolo, regalandomi un momento di pace e riflessione mentre il mondo là fuori continua a vivere la sua frenetica vita.",
        media: "https://unsplash.it/600/400?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25",
    },
    {
        id: 2,
        content: "Un momento di serenità nella natura, dove il vento danza tra le spighe dorate di grano e gli alberi custodi sussurrano segreti millenari all'orecchio del mondo.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03",
    },
    {
        id: 3,
        content: "Le nuvole abbracciano la Torre Eiffel, rendendola ancora più affascinante nella sua solitudine. Mi chiedo quante storie si nascondano sotto il suo mantello di nebbia.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15",
    },
    {
        id: 4,
        content: "Tra le pagine di questo libro, trovo rifugio e ispirazione. Ogni parola è come un amico che mi accoglie a braccia aperte nel suo mondo di avventure e scoperte.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03",
    },
    {
        id: 5,
        content: "La mia scrivania è il mio regno creativo, un caos ordinato di colori, idee e progetti in attesa di prendere forma. Qui trovo la mia più grande libertà: la possibilità di dare vita ai miei sogni.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05",
    }
];

const postListElement = document.getElementById("container");


posts.forEach(function (currentPost) {

    // prima assegno un'immagine generica a chi non ce l'ha
    if (currentPost.author.image == null) {
        currentPost.author.image = "./img/profile-pic.png";
    }

    // Converto la data nel formato gg/mm/aaaa
    const dateSplit = currentPost.created.split('-');

    const italianDate = dateSplit[2] + '-' + dateSplit[1] + '-' + dateSplit[0];

    // inserisco l'elemento html dentro la lista dei post
    postListElement.innerHTML += `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">
            <div class="post-meta__icon">
                <img class="profile-pic" src="${currentPost.author.image}" alt="${currentPost.author.name}">
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${currentPost.author.name}</div>
                <div class="post-meta__time">${italianDate}</div>
            </div>
        </div>
    </div>
    <div class="post__text">${currentPost.content}</div>
    <div class="post__image">
        <img src="${currentPost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${currentPost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${currentPost.likes}</b> persone
            </div>
        </div>
    </div>
</div>
    `
})