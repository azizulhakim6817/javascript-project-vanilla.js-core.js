# JavaScript DOM & Event Handling

This README explains key concepts of JavaScript **DOM manipulation** and **event handling** with clear examples.

---

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

### `getElementById`
- Selects a single element by its **ID**.
- Returns **one element**.  

**Example:**
```javascript
const element = document.getElementById('myId');
getElementsByClassName
Selects all elements with a specific class.

Returns an HTMLCollection (live collection).

Example:

javascript
Copy code
const elements = document.getElementsByClassName('myClass');
querySelector / querySelectorAll
Selects elements using CSS selectors.

querySelector → returns the first matched element.

querySelectorAll → returns all matched elements as a NodeList.

Example:

javascript
Copy code
const element = document.querySelector('.myClass'); // first match
const elements = document.querySelectorAll('.myClass'); // all matches
2. How to create and insert a new element into the DOM
Use document.createElement() to create a new element.

Insert it using appendChild() or insertBefore().

Example:

javascript
Copy code
// Create a new div
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new element';

// Append it to a parent container
const container = document.getElementById('container');
container.appendChild(newDiv);
3. What is Event Bubbling and how does it work
Event Bubbling is when an event starts from the child element and propagates upwards to its parent elements.

Example:

javascript
Copy code
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

// Output when child is clicked:
// Child clicked
// Parent clicked
4. What is Event Delegation and why is it useful
Event Delegation allows attaching a single event listener to a parent element to handle events for its child elements.

Benefits:

Works for dynamically added child elements.

Reduces code and improves performance.

Example:

javascript
Copy code
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target && e.target.matches('button.delete')) {
    console.log('Delete button clicked');
  }
});
5. Difference between preventDefault() and stopPropagation()
Method	What it does	Use case
preventDefault()	Prevents the browser’s default behavior (e.g., form submit or link navigation)	When you want to stop default browser actions
stopPropagation()	Stops the event from bubbling or capturing further	When you don’t want the event to reach parent elements

Example:

javascript
Copy code
document.getElementById('link').addEventListener('click', (e) => {
  e.preventDefault(); // Stops link navigation
  e.stopPropagation(); // Stops event from bubbling to parent
});