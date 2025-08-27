# JavaScript DOM & Event Handling

This README explains key concepts of **DOM manipulation** and **event handling** in JavaScript with clear examples.

---

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

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
const elements = document.getElementsByClassName('myClass');
querySelector / querySelectorAll
Selects elements using CSS selectors.
querySelector → returns the first matched element.
querySelectorAll → returns all matched elements as a NodeList.

Example:
const element = document.querySelector('.myClass'); 
const elements = document.querySelectorAll('.myClass'); 

2. How do you create and insert a new element into the DOM?
Use document.createElement() to create a new element.

Insert it using appendChild() or insertBefore().

Example:
// Create a new div
const newDiv = document.createElement('div');
newDiv.textContent = 'I am a new element';

// Append it to a parent container
const container = document.getElementById('container');
container.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
Event Bubbling occurs when an event starts from the child element and propagates upwards to parent elements.

Example:
document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation allows attaching a single event listener to a parent element to handle events for its child elements.

Benefits:
Works for dynamically added child elements.
Reduces code and improves performance.

Example:
document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target && e.target.matches('button.delete')) {
    console.log('Delete button clicked');
  }
});

5. What is the difference between preventDefault() and stopPropagation() methods?
Method	What it does	Use case
preventDefault()	Prevents the browser’s default behavior (e.g., form submit or link navigation)	When you want to stop default browser actions
stopPropagation()	Stops the event from bubbling or capturing further	When you don’t want the event to reach parent elements

Example:
document.getElementById('link').addEventListener('click', (e) => {
  e.preventDefault(); // Stops link navigation
  e.stopPropagation(); // Stops event from bubbling to parent
});

This README provides a clear, structured overview of DOM selection, element creation, event bubbling, delegation, and controlling event propagation in JavaScript.

markdown
Copy code

✅ Features in this design:
- Clear **headings** for each question  
- **Bullet points** for explanations  
- Proper **code blocks** for examples  
- **Table** for `preventDefault()` vs `stopPropagation()`  
- Consistent **spacing and Markdown styling**  

If you want, I can also **add a clickable Table of Contents** at the top for better navigation in GitHub.  

Do you want me to add that?