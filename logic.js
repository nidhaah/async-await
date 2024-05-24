search =async() =>{
    let countryName = country.value
    console.log(countryName);

    if(countryName){
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      response.json().then((data)=>{
       console.log(data[0]);
       //common name
       let cname = data[0].name.common
       console.log(cname);
       //official name
       let offname = data[0].name.official
       console.log(offname); 
       //capital
       let capital = data[0].capital
       console.log(capital);
       //border
       let border = data[0].borders
       console.log(border);
       //area
       let area = data[0].area
       console.log(area);
       //maps
       let maps = data[0].maps.googleMaps
       console.log(maps);
       //population
       let pop = data[0].population
       console.log(pop);
       //time zone
       let time = data[0].timezones
       console.log(time);
       //continent
       let continent = data[0].continents
       console.log(continent);
       //flag
       let flag = data[0].flags.png
       console.log(flag);
       //languages
       national_lang = []
       for(let lang in data[0].languages){
            national_lang.push(data[0].languages[lang])
       }
       console.log(national_lang);
       //currency 
       for(let curr in data[0].currencies){
            var currencyname = data[0].currencies[curr].name
            var currencysymbol = data[0].currencies[curr].symbol
       }
       console.log(currencysymbol,currencyname);


       result.innerHTML =  `<div class="card mb-3 " >
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${flag}" class="img-fluid rounded mt-5 ms-3 me-2" alt="...">
           <h3 class="card-title mt-2 text-center fw-bolder">${offname}</h3>
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <ul class="list-group">
              
               <li class="list-group-item">Borders : ${border}</li>
               <li class="list-group-item">Population : ${pop}</li>
               <li class="list-group-item">Time zone : ${time}</li>
               <li class="list-group-item">Area : ${area}</li>
               <li class="list-group-item">Continent : ${continent}</li>
               <li class="list-group-item">Languages : ${national_lang}</li>
               <li class="list-group-item">Currencies : ${currencysymbol} ,${currencyname}</li>

             </ul>
             <p class="card-text"><small class=""></small></p>
           </div>
         </div>
       </div>
     </div>`
      })
    }
    else{
     alert('Enter a valid input')
    }
 }