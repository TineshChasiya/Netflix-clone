# 🎬 Netflix Clone (React)

A responsive Netflix landing page clone built using **React.js**. This project focuses on recreating the core UI and interactions of Netflix such as sliders, FAQs accordion, grid layouts, and modern UI effects.

---

## 🚀 Live Preview

> 

---

## 📌 Features

* 🎥 Netflix-style **Trending Now slider**
* ➡️ Left / Right scroll buttons with hide & show logic
* 📱 Fully **responsive layout**
* ❓ **FAQs Accordion** (only one open at a time)
* 🎨 Modern UI inspired by Netflix
* 🖼️ Optimized movie thumbnails (fixed width & height)
* 🧩 Clean component-based structure

---

## 🛠️ Tech Stack

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Font Awesome Icons**

---

## 📂 Project Structure

```
/src
 ├── components
 │    ├── Trendingslider.jsx
 │    ├── Faqs.jsx
 ├── App.js
 ├── index.js
 ├── *.css
```

---

## ❓ FAQ Accordion Logic (Important Concept)

* FAQ data is stored in an **array of objects**
* `useState` stores the currently open FAQ index
* Clicking on a question:

  * Opens it if closed
  * Closes it if already open
* Ensures **only one FAQ is visible at a time**

---

## 🎯 Learning Outcomes

Through this project, I learned:

* How to use `map()` for dynamic UI
* Managing state with `useState`
* Handling scroll using `useRef`
* Conditional rendering in React
* Building reusable UI components
* Writing clean and readable React code

---

## 📸 Screenshots

> ### Home Page
![Full Page](./screenshots/fullPage.png)

---

## 🧠 Future Improvements

* Add video hover preview
* Authentication UI
* Dynamic data using API
* Dark/Light theme toggle

---

## 🙌 Acknowledgement

This project is inspired by the official **Netflix UI** and built purely for **learning & practice purposes**.

---

## 📬 Contact

* **Developer:** Tinesh Chaisya
* **GitHub:** https://github.com/TineshChasiya
* **Email:** tinesh0826@gmai.com

---

⭐ If you like this project, don't forget to star the repo!
