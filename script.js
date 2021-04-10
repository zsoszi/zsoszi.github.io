let photo01 = {
    photo: './images/agg-telek.jpg',
    title: 'Aggteleki cseppkőbarlang',
    description: 'Az Aggteleki-cseppkőbarlang járatait a befolyó vizek tágították oldó hatásukkal, és a vízzel besodort kavicsok pusztító munkájával.'
};

let photo02 = {
    photo: './images/bazaltorgona.jpg',
    title: 'Szent György-hegyi Bazaltorgona',
    description: 'A bazaltorgonák a forró lávából jöttek létre úgy, hogy a láva gyors kihűlése során sokszögletű oszlopokra vált, amiket aztán az időjárás tovább formált.'
}

let photo03 = {
    photo: './images/boldog-ko-vara.jpg',
    title: 'Boldogkő vára',
    description: 'A várat a tatárjárás után emelte Árpád-házi IV. Béla király ösztönzésére a környező vidéken élő Tomaj nemzetségből származó Jaak fia Tyba ispán, vagy családjának egyik tagja.'
}

let photo04 = {
    photo: './images/egerszalok-sodomb.jpg',
    title: 'Egerszalók sódombja',
    description: 'Fehér mészkőteraszok, csipkés párkányok és mészkőfüggönyök jönnek létre, ahogy a víz megakad a talaj természetes domborulatain.'
}

let photo05 = {
    photo: './images/hegyestu.jpg',
    title: 'A Káli-medence és Hegyestű',
    description: 'A Káli-medence kapujának őre a Zánka és Monoszló között magasodó Hegyestű.'
}

let photo06 = {
    photo: './images/kazar-riolittufa.jpg',
    title: 'Kazár riolittufa',
    description: 'Az egyedülálló geológiai képződmény a világon alig több mint hat helyen figyelhető meg. Mintegy 20 millió évvel ezelőtt, a Mátra vulkáni kitöréseinek nyomán keletkezett.'
}

let photo07 = {
    photo: './images/predikaloszek.jpg',
    title: 'Prédikálószék',
    description: 'A természetjárók körében nemcsak a fantasztikus panoráma miatt népszerű a Prédikálószék hegycsúcsa, hanem például az elérhető közelségben lévő, szintén rendkívül frekventált kirándulócélpontok, a Rám-szakadék és a Vadálló-kövek miatt is.'
}

let photo08 = {
    photo: './images/szalajka.jpg',
    title: 'Szalajka-völgy',
    description: 'A Fátyol-vízesés a Szalajka-völgy egyik fő nevezetessége, hazánk egyik kiemelkedő természeti szépsége.'
}

let currentPhoto = 0

let imagesData = [photo01, photo02, photo03, photo04, photo05, photo06, photo07, photo08];

let = loadPhoto = (photonumber) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto);

$('#jobb').click(() => {
    currentPhoto++;
    if (currentPhoto < imagesData.length) {
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto)
    }
});

$('#bal').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
        currentPhoto = imagesData.length - 1;
        loadPhoto(currentPhoto);
    } else
        loadPhoto(currentPhoto)
});


let counter = 0;
imagesData.forEach(photo => {
    $("#thumbnails").append(
        '<div class="container" id="kontener-' + counter + '"><img src="' + photo.photo + '" data-number="' + counter + '" id="containerPhoto"><blockquote class="speech-bubble">' + photo.title + '</blockquote></div>'
    );
    counter++;
});

$(".container").on("click", function(event) {
    currentPhoto = $(event.target).attr("data-number");
    loadPhoto(currentPhoto);
    let id = "#kontener-" + currentPhoto;
    $(id).css("transform", "scale(1.1)");
    for (let counter2 = 0; counter2 < imagesData.length; counter2++) {
        if (counter2 != currentPhoto) {
            let id2 = "#kontener-" + counter2;
            $(id2).css("transform", "scale(1.0)");
        }
    }
});