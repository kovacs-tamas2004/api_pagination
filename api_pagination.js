let jelenlegi = 1;

function keres(){
    const beirMezo = document.getElementById("szoveg").value;

    fetch("https://www.balldontlie.io/api/v1/players?search=" + beirMezo)
    .then(response => response.json())
    .then(adat => {
        for(player of adat.data){
            document.getElementById("eredmeny").innerHTML += 
            "Keresztnév: " + player.first_name + " " + "Vezetéknév: " + player.last_name + " " + "Csapata: " + player.team.full_name + "<br>";
        }
        //document.getElementById("eredmeny").innerHTML = JSON.stringify(data, null, 2);
        console.log(data);
    })
    .catch(error => console.error("Hiba!" + error))
}

function elozoOldal() {
    if (jelenlegi > 1) {
        jelenlegi--;
        document.getElementById("eredmeny").innerHTML = "";
        keres();
    }
}

function kovetkezoOldal() {
    jelenlegi++;
    document.getElementById("eredmeny").innerHTML = "";
    keres();
}