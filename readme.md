### JavaScript DOM & Event Handling Concepts :

6. Answer the Following Questions
### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById(id)
Returns a single DOM element that matches the given id.

Example:
const header = document.getElementById('main-header');
Only one element can have a particular id, so it returns a single element.
getElementsByClassName(className)
Returns a live HTMLCollection of all elements with the specified class name.

Example:
const boxes = document.getElementsByClassName('box');
You can access elements using index, e.g., boxes[0].
querySelector(selector) / querySelectorAll(selector)
querySelector returns the first element that matches a CSS selector.
querySelectorAll returns a static NodeList of all elements that match the selector.

Example:
const firstBox = document.querySelector('.box'); // first element
const allBoxes = document.querySelectorAll('.box'); // all elements

Summary:
getElementById → single element by ID
getElementsByClassName → live collection by class name
querySelector → first match by CSS selector
querySelectorAll → all matches by CSS selector

### 2. How do you create and insert a new element into the DOM?
Steps to create and insert a new element:
Create the element
const newDiv = document.createElement('div');
Add content or attributes
newDiv.textContent = 'Hello, I am new!';
newDiv.className = 'new-box';
Insert it into the DOM
const container = document.getElementById('container');
container.appendChild(newDiv); // adds at the end
// or
container.insertBefore(newDiv, container.firstChild); // adds at the beginning

### 3. What is Event Bubbling and how does it work?
Event Bubbling is a type of event propagation in JavaScript.
When an event happens on an element, it first triggers on the target element, then bubbles up to its parent elements, and continues up to the document root.

Example:
document.getElementById('child').addEventListener('click', () => {
console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
console.log('Parent clicked');
});

Clicking the child element prints:
Child clicked
Parent clicked

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where we attach a single event listener to a parent element to handle events on its child elements.
Instead of adding listeners to each child individually, the parent delegates the event handling.

Useful because:
Saves memory by reducing the number of listeners.
Handles dynamically added elements automatically.

Example:
document.getElementById('list').addEventListener('click', (event) => {
if(event.target.tagName === 'LI') {
console.log('List item clicked:', event.target.textContent);
}
});

### 5. What is the difference between preventDefault() and stopPropagation() methods?
   Method What it does Use case
   preventDefault() Stops the browser’s default action for an event Preventing a form from submitting or a link from navigating
   stopPropagation() Stops the event from bubbling up to parent elements Preventing parent click handlers from being triggered

Example:
document.getElementById('link').addEventListener('click', (e) => {
e.preventDefault(); // stops navigation
e.stopPropagation(); // stops bubbling
console.log('Link clicked');
});
