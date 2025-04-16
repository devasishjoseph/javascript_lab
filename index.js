console.log('hello world')

// Alert Button

document.getElementById('alertMe').onclick = function() {
    alert('Hello world!');
};

// Hover Button 

document.getElementById('hoverButton').onmouseover = function() {
    document.getElementById('hoverButton').style.background = 'lightblue';
  };

  document.getElementById('hoverButton').onmouseleave = function() {
    document.getElementById('hoverButton').style.background = 'white';
  };

// Incrementing Button

let count = 0;

document.getElementById('buttonCounter').onclick = function() {
  count = count + 1;

  // Update button text
  const button = document.getElementById('buttonCounter');
  button.innerHTML = 'Count: ' + count;

  // Change background based on even/odd
  if (count % 2 === 0) {
    // Green = Even
    button.style.background = 'green';  
  } else {
    // Red = Odd
    button.style.background = 'red';    
  }

  console.log('Count is now: ' + count);
};

// For Loop

let initialValue = 0;
let stopValue = 5;

for (let i = initialValue; i < stopValue; i = i + 1) {
  document.getElementById('container').append(' great');
}