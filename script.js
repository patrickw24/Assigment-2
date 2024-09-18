let data= [];

function songValidation(){

    event.preventDefault()

let songName= inputSongName.value
let artistName= inputArtistName.value
let songDuration= parseInt(inputSongDuration.value)

let validationSongName= false
let validationArtistName= false
let validationSongDuration= false

if (songName.length != ""){
    validationSongName= true

}else{
    console.log("Please enter a song name")
}

if (artistName.length != ""){
    validationArtistName=true
}else{
    console.log("Please enter an artist/band name")
}

if (songDuration < 300){
    validationSongDuration=true
}else{
    console.log("Please enter a song that is less than 300 seconds")
}

if (validationSongName === true && validationArtistName === true && validationSongDuration === true){
    let tmp={
        songName,
        artistName,
        songDuration,
    };
    
    data.push(tmp);
    
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
    
    songTable.innerHTML= tableLayout

}else{
    console.log("Failed Validation")
}

}