par = document.createElement('div');
par.setAttribute("class", "container");
raw = document.createElement('row');
document.body.style.backgroundColor = "lightblue";


fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => {
        return res.json();
    })
    .then((result) => {
        for (i in result) {
            
            var Capital = result[i].capital;
            var Region = result[i].region;
            var Country_code = result[i].alpha3Code;
            var Name = result[i].name;
            var Flag = result[i].flag;
            var LatLng = result[i].latlng;
            
            createcard(Name, Flag, Capital, Region, Country_code, LatLng);
            
        }
        
    })
    .catch((err) => {
        console.log("try again")
    })

function createcard(name, flag, capital, region, code, latitude) {
        col=document.createElement('div');
        col.setAttribute("class", "col-lg-4 col-sm-12");
        card=document.createElement('div');
        card.setAttribute("class", "card");
        chead= document.createElement('div');
    chead.setAttribute("class", "card-header");
    chead.style.backgroundColor = "black";
    chead.style.color = "white";
    chead.style.textAlign = "center";
        chead.innerText = name
        cbody = document.createElement('div');
    cbody.setAttribute("class", "card-body");
    cbody.style.textAlign="center";
    image = document.createElement('img');
    image.setAttribute("class", "card-img");
    image.setAttribute("src", flag);
        content = document.createElement('div');
        content.innerHTML = "Capital: " + capital;
    para1 = document.createElement('div');
    para1.innerHTML = "Region: " + region;
    para2 = document.createElement('div');
    para2.innerHTML = "Country Code: " + code;
    btn = document.createElement('button');
    btn.setAttribute("class", "btn btn-primary ");
    
    btn.innerHTML = "Click for Weather";
        cbody.append(image,content, para1, para2,btn);
        card.append(chead,cbody);
        col.append(card);
        raw.appendChild(col);
        par.append(raw);
    document.body.append(par);
    btn.setAttribute("id", code);
    document.getElementById(code).addEventListener("click", function () {
        myFunction(latitude);
    })

}

function myFunction(lat) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat[0]}&lon=${lat[1]}&appid=bbdc4985a25172e37de1fe7bc414bd55`)
        .then((res) => {
            return res.json();
        })
        .then((resp) => {
            alert(resp.weather[0].main +" \nDescription:  " + resp.weather[0].description);
        })
        .catch((err) => {
            console.log(err);
    })

    
}





