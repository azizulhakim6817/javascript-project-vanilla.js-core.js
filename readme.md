📂 Project Structure
Emergency-Hotline/
│── index.html
│── js/
│ └── home.js
│── assets/
│ ├── logo.png
│ ├── heart.png
│ ├── coin.png
│ ├── emergency.png
│ └── ...
│── README.md

✅ Functionalities Covered

Navbar with logo, website name, heart count, coins, copy count

Hero Section with gradient bg, logo, title, slogan

Cards (min. 6) with:

Icon

Service Name (Bangla/English)

Hotline Number

Category Badge

💗 Heart (click → increase heart count in navbar)

Copy Button (copy number → increase copy count)

Call Button (alert + deduct coins + add to history)

Call History Section (dynamic)

Clear History button

Responsiveness for mobile ✅

📜 Example README.md

# 🚨 Emergency Hotline Directory

This project is a simple **Emergency Hotline Directory** built using **HTML, TailwindCSS, DaisyUI, and Vanilla JavaScript**.  
It provides hotline numbers for important services with features like **copy number, call simulation, coin deduction, heart liking, and call history tracking**.

---

## ✨ Features

- 📌 Navbar with **logo, hearts, coins, copy counter**
- 🎨 Hero section with **gradient background**
- 📞 Cards showing hotline services
- 💗 Like button (increase heart count in navbar)
- 📋 Copy button (copy hotline number + increase counter)
- 📲 Call button (deduct 20 coins + add call to history with timestamp)
- 🕑 Call History section with clear option
- 📱 Fully responsive for all devices

---

## ⚙️ Technology Stack

- **HTML**
- **TailwindCSS**
- **DaisyUI**
- **Vanilla JavaScript**

---

## 📘 Q&A Section
```js
1. getElementById(id)

What it does:
Finds the first (and only) element with the given id.
Return type:
A single element object (HTMLElement) or null if not found.

Notes:
IDs are meant to be unique, so this method always returns at most one element.
Very fast because browsers optimize for IDs.
✅ Example:
let title = document.getElementById("main-title");
console.log(title.textContent);

2. getElementsByClassName(className)
What it does:
Finds all elements with the given class name.
Return type:
An HTMLCollection (live collection, not an array).
"Live" means it updates automatically if the DOM changes.

Notes:
Can match multiple elements.
Needs to be looped through (for...of or convert to array).
✅ Example:
let items = document.getElementsByClassName("list-item");
for (let item of items) {
  console.log(item.textContent);
}

3. querySelector(cssSelector)
What it does:
Finds the first element that matches a CSS selector (id, class, tag, attribute, etc.).
Return type:
A single element (HTMLElement) or null.

Notes:
More powerful than getElementById or getElementsByClassName since it supports full CSS selectors.
Slightly slower than ID lookup but more flexible.
✅ Example:
let firstItem = document.querySelector(".list-item"); // first element with class "list-item"
console.log(firstItem.textContent);

4. querySelectorAll(cssSelector)
What it does:
Finds all elements that match a CSS selector.
Return type:
A NodeList (static collection, not live).
Unlike HTMLCollection, it does not update if the DOM changes.

Notes:
You can use array methods on it (after spreading or using forEach).
✅ Example:
let allItems = document.querySelectorAll(".list-item");
allItems.forEach(item => console.log(item.textContent));

🔑 Quick Comparison:
Method	Selector Type	Returns	Live/Static	Example Usage
getElementById("id")	ID only	Single element or null	❌ (Single)	Fast unique lookup
getElementsByClassName("c")	Class only	HTMLCollection	✅ Live	Multiple by class
querySelector("css")	Any CSS selector	First match	❌ Static	Flexible single
querySelectorAll("css")	Any CSS selector	NodeList	❌ Static	Flexible multiple

👉 Rule of Thumb:
Use getElementById if you know the element’s ID.
Use getElementsByClassName if you want multiple elements by class.
Use querySelector / querySelectorAll for more powerful CSS-like selection (best for complex queries).

2. How to create and insert a new element into the DOM?
const newDiv = document.createElement("div");
newDiv.innerText = "Hello World!";
document.body.appendChild(newDiv);


👉 createElement() makes a new node, appendChild() inserts it into the DOM.
3. What is Event Bubbling and how does it work?
Event Bubbling means when an event happens on an element, it first runs on the target element, then goes up (bubble) to its parent, then ancestor elements.
Example: Clicking on a button inside a div triggers the button’s click event → then div → then body.

4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means assigning an event listener on a parent element instead of every child.
It uses bubbling to detect which child triggered the event.
👉 Useful for dynamic elements (e.g., adding new cards without re-attaching event listeners).

5. Difference between preventDefault() and stopPropagation()?
preventDefault() → Stops the default browser action (e.g., stopping form submit, stopping link redirect).
stopPropagation() → Stops the event from bubbling up to parent elements.

🧪 Challenges
✅ Copy button copies number to clipboard and increases counter
✅ Call button shows alert, deducts 20 coins, adds history with timestamp
✅ Show current time using:
const now = new Date().toLocaleTimeString();

✅ Clear button removes all history
```
