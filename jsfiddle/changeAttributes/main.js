// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

document.getElementById('lhl-logo').width = '200';


setTimeout(() => document.getElementById('lhl-logo').width = '400','1000');

