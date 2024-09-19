let data= [];

function songValidation(){

    event.preventDefault()

   

let songName= inputSongName.value
let artistName= inputArtistName.value
let songDuration= parseInt(inputSongDuration.value)

let validationSongName= false
let validationArtistName= false
let validationSongDuration= false

if (songName.length === 0){
    
    errorSongName.innerHTML= "Please enter a song name"
}else{
    validationSongName= true
}

if (artistName.length === 0){
    
    errorArtistName.innerHTML= "Please enter an artist/band name"
}else{
    validationArtistName=true
}

if (songDuration > 300){
    
    errorDuration.innerHTML= "Please enter a song that is less than 300 seconds"
}else{
    validationSongDuration=true
}

if (validationSongName === true && validationArtistName === true && validationSongDuration === true){
    let tmp={
        songName,
        artistName,
        songDuration,
    };
    
    data.push(tmp);
    renderData();
    errorSongName.innerHTML=""
    errorArtistName.innerHTML=""
    errorDuration.innerHTML=""


}else{
    console.log("Failed Validation")
}

}

function renderData(){

    let tableLayout= `<tr>
    <th>Name</th>
    <th>Band</th>
    <th>Song Duration</th>
    </tr>`;
    
    for(let i=0; i<data.length;i++){
    
        tableLayout+=`<tr>
        <td>${data[i].songName}</td>
        <td>${data[i].artistName}</td>
        <td>${data[i].songDuration}</td>
        </tr>`;
}
songTable.innerHTML = tableLayout;
}