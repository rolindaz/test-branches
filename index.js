let tears = 0;

function dropTears(tears){
    tears += 1;
    console.log(tears);
}

console.log(tears);

const bottone = document.getElementById('lacrime');
bottone.addEventListener('click', dropTears);