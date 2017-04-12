document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    var msg = 'Zapisz się do newslettera, a otrzymasz rabat';

    function updateMsg() {
        var el = document.querySelector('.message');
        el.innerHTML = msg;
    }
    updateMsg();

  function calculateArea(parametr1, parametr2, parametr3){
    return parametr1 * parametr2 - parametr3;
  }
  console.log(calculateArea(3,5,1));
  console.log('---ex2----');
  function calculateVolume(par1, par2, par3){
    var area = par1 * par2;
    var volume = par1 * par2 *par3;
    var whole = [area, volume];
    return whole;
  }
 console.log(calculateVolume(1,2,3));
 console.log(calculateVolume(1,2,3)[0]);
 console.log(calculateVolume(1,2,3)[1]);

 console.log('IIFE');
   var square = (function() {
   var width = 3;
   var height = 2;
   return width * height;
 }());
 console.log(square);


 var motel = {
   name: 'Rex',
   rooms: 29,
   booked: 7,
   checkAvailability: function(){
    return this.rooms - this.booked;
   }
 };

    var elMotel = document.querySelector('.hotelName');
    elMotel.innerHTML = motel.name;
    var ava = document.querySelector('.rooms');
    ava.innerHTML = motel.checkAvailability();
  console.log("--SELF-OBJECT---")
    var motel = new Object();

    motel.name = 'Orbis';
    motel.rooms = 120;
    motel.booked = 90;
    motel.checkAvailability = function(){
      return this.rooms - this.booked
    }
    console.log(motel)
  console.log("--MANY OBJECTS---")
   function bungalow(name, rooms, booked){
     this.name = name;
     this.rooms = rooms;
     this.booked = booked;
     this.checkAvailability = function(){
       return this.rooms - this.booked;
     };
   }
    var OrbisGold = new bungalow('OrbisGold', 230, 30);
    var Mercure = new bungalow('Mercure', 340, 190);
    console.log(OrbisGold);
    console.log(Mercure);






});
