//Functions for color change in 1st button
function Button1Func(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button1_black', 'white');
  r.style.setProperty('--button1_white', 'black');
}
function Button1RevFunc(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button1_black', 'black');
  r.style.setProperty('--button1_white', 'white');
}
//Functions for block position change in 2nd button
function Button2Func(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button2_pos', 'translate(8px, -8px)');
}
function Button2RevFunc(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button2_pos', 'translate(0px, 0px)');
}
//Functions for lower block width change (stripe) in 4th block
function Button4Func(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button4_wid', '150px');
}
function Button4RevFunc(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button4_wid', '0px');
}
//Functions for position change in 6th button and getting value (on or off)
let isOn = 0;
function Button6Func(){
  if(!isOn){
    let r = document.querySelector(':root');
    r.style.setProperty('--button6_black', 'white');
    r.style.setProperty('--button6_white', 'black');
    r.style.setProperty('--button6_transform', 'translate(225px)');
    isOn = 1;
    console.log(isOn);
  }
  else{
    let r = document.querySelector(':root');
    r.style.setProperty('--button6_black', 'black');
    r.style.setProperty('--button6_white', 'white');
    r.style.setProperty('--button6_transform', 'translate(0px)');
    isOn = 0;
    console.log(isOn);
  }
}
//Function for block display in 8th button 
let isShown = 0;
function Button8Func(){
  if(!isShown){
    let r = document.querySelector(':root');
    r.style.setProperty('--button8_height', '150px');
    r.style.setProperty('--button8_transform', 'rotate(180deg)');
    isShown = 1;
  }
  else{
    let r = document.querySelector(':root');
    r.style.setProperty('--button8_height', '0px');
    r.style.setProperty('--button8_transform', 'rotate(0deg)');
    isShown = 0;
  }
}
//Functions for text position change in 9th button
function Button9Func(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button9_transform', 'translate(0px, -50px)');
}
function Button9RevFunc(){
  let r = document.querySelector(':root');
  r.style.setProperty('--button9_transform', 'translate(0px, 0px)');
}
//Function for 12th button (favorite)
isFav = 0;
function Button12Func(){
  if(!isFav){
    let r = document.querySelector(':root');
    r.style.setProperty('--button12_opacity', '100%');
    isFav = 1;
  }
  else{
    let r = document.querySelector(':root');
    r.style.setProperty('--button12_opacity', '0%');
    isFav = 0;
  }
}