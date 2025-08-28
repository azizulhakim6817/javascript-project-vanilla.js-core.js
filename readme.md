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

### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- `getElementById("id")` → Returns **one element** by its `id`.
- `getElementsByClassName("class")` → Returns a **live HTMLCollection** of all matching elements.
- `querySelector("selector")` → Returns the **first element** matching a CSS selector.
- `querySelectorAll("selector")` → Returns a **static NodeList** of all matches.

---

### 2. How to create and insert a new element into the DOM?

```js
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
