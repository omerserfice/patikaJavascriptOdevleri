var name = prompt("İsminizi Giriniz:");

document.getElementById("myName").innerHTML = name;

const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime(){

  const d = new Date();
  let text = d.toTimeString();
  let day = days[d.getDay()];
  document.getElementById("myClock").innerHTML = text.slice(0,9)+day;
}