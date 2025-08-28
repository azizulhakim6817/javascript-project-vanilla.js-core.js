# 📞 Emergency Hotline Web App

This is a simple **JavaScript Project** that displays emergency hotline services in **card format**.  
Users can interact with the services using **Copy** and **Call** buttons, track call history, and manage coin balance with a **heart/copy counter**.

---

## 🚀 Features

- 🧭 **Navbar** with website logo, ❤️ heart counter, 💰 coin balance (default 100), and 📋 copy count.
- 🎨 **Hero Section** with gradient background, logo, title, and slogan.
- 🃏 **Card Section** showing at least 6 emergency services with:
  - Service icon & name (Bangla + English)
  - Hotline number
  - Category badge
  - ❤️ Heart icon
  - 📋 Copy & 📞 Call buttons
- 📜 **History Section** that stores all previous calls dynamically.
- ☎️ **Emergency Hotline Section** following Figma layout.
- 📱 **Responsive Design** for mobile and tablet view.

---

## ⚡ Functionalities

### ❤️ Heart Icon

- Clicking a heart on a card increases the **heart count** in Navbar.

### 📞 Call Button

- Shows alert with **service name & number**.
- Deducts **20 coins** from balance.
- If coins < 20 → show alert and **stop process**.
- Adds service details (**name, number, time**) to **History Section**.

### 📋 Copy Button

- Copies hotline number to **clipboard**.
- Shows success alert.
- Increases **Copy Count** in Navbar.

### 🕑 Call History Section

- Displays all calls made with **name, number, and time**.
- `Clear History` button removes all history.

---

## 📱 Responsiveness

- ✅ Fully responsive for **mobile and tablet** devices.

---

## 📚 Q&A Section

### 1️⃣ What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

- `getElementById(id)` → Selects a **single element** by unique `id`. Returns only **one element**.
- `getElementsByClassName(class)` → Selects **multiple elements** with the same class. Returns an **HTMLCollection (live)**.
- `querySelector(selector)` → Selects the **first matching element** using CSS selectors (`#id`, `.class`, `tag`).
- `querySelectorAll(selector)` → Selects **all matching elements**. Returns a **NodeList (static)**.

---

### 2️⃣ How do you create and insert a new element into the DOM?

```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);
createElement() → creates a new element.
textContent → adds text.
appendChild() → inserts it into DOM.

3️⃣ What is Event Bubbling and how does it work?
Event bubbling means when an event occurs on an element, it first runs on the target element and then bubbles up to its parent, grandparent, until reaching document.

👉 Example: Clicking a button inside a div triggers both the button’s event and the parent div’s event unless stopped.

4️⃣ What is Event Delegation in JavaScript? Why is it useful?
Event delegation is attaching a single event listener to a parent element instead of multiple child elements.

✅ Useful because it reduces memory usage and works for dynamically created elements.

👉 Example:
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});
5️⃣ What is the difference between preventDefault() and stopPropagation()?
preventDefault() → Prevents default browser action (e.g., form submission, link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements.

🧪 Challenges
✅ Copy Button
Copies the hotline number to clipboard.
Increases copy count in Navbar.

✅ Call Button
Deducts 20 coins on each call.
Shows alert with service name & number.
If coins < 20 → block call.
Adds call entry (name, number, time) into history.

✅ History Section
Stores call history dynamically.
Clear History button removes all history.
✅ Local Time on Call
let now = new Date().toLocaleString();
Shows exact local date & time of call in history.

📂 Project Structure
/project-root
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
✍️ Made with HTML, CSS, JavaScript
```
