const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCF7z3AwilOp2DTSDGNYGWhYuoqsmqCFlk',
    Promise: Promise
  });





  
  exports.findAdress = function (street, numberst, city, province){

    geocode(street,numberst,city, province);
    return "jestem 1";
  }


  function geocode(street,numberst,city, province)
 {
   var findedAdress =street + " "+ numberst + " "+ city + " "+ province + " Polska";
  googleMapsClient.geocode({
    address: findedAdress
  })
  .asPromise()
  .then((response) => {
    console.log(response.json.results);
  })
  .catch((err) => {
    console.log(err);
  });
}