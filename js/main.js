const PhotoContainer = document.getElementById("photo-container");

let content = "<div class='column'>"

for(let i=0; i<20; i++){
    
    if( i != 0 && (i % 5 == 0)){
        content += `</div><div class='column'>${getPhotoElement(i+1)}`;
    } else {
        content += getPhotoElement(i+1);
    }
}

content += "</div>";

PhotoContainer.innerHTML = content;

function getPhotoElement(photo_id){
    return  `<a href="#" class="photo" ><img alt="Photo ${photo_id}" src="img/${photo_id}.jpg" /></a>`;
}

