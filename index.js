// Write the code to access element which is having id as "text"
let tx=document.getElementById('text');
console.log(tx.innerText);

// Write the code to access element which is having tag as "h1"
let h=document.getElementsByTagName('h1');
console.log(h[0].innerText);

// Write the code to access element which is having class as "box"
let box=document.getElementsByClassName('box');
console.log(box[0].innerText);

// "<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
let h1=document.getElementsByTagName('h1');
function txxt(){
    h1[1].innerText="Hello World";
}

// Create an HTML page having content as Hello world and a button named Replace Text. When user will
//  click on this button page content should be changed to "Welcome to Elevation academy"
let value=document.getElementById('value');
let chge=document.getElementById('chnge');
chge.addEventListener('click', () => {
    value.setAttribute('style','color:red');
    value.innerText="Heading"
})

// "<h1>Hello </h1>
// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" 
// in the above given h1 tag using DOM functions"
let txt=document.getElementById('txt');
function Rplce(){
    txt.innerText="Welcome to Elevation Academy";
}

// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also 
// create button at the bottom named "Change Flex direction". When user clicks on this button,
// the cards arrangement should be changed to vertical direction.
let parent = document.getElementById('main');
let btn=document.getElementById('button');
let count=0;
btn.addEventListener('click', () => {
    if(count%2 === 0){
    parent.setAttribute('style', 'flex-direction:column');
    count++;
    }
    else{
        parent.setAttribute('style', 'flex-direction:row');
        count++;
    }
})

// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function clck(){
   let date =  new Date();
   let hrs = date.getHours();
   let mins = date.getMinutes();
   let secs = date.getSeconds();
   
   if(hrs>12){
    hrs=hrs-12;
   }
   let time = `HH : ${hrs} MM : ${mins} SS : ${secs}`
   clock.innerText = time;
} 
setInterval(() => {
    clck();
}, 1000 )



