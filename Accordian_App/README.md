# 📚 Accordion UI – React

A simple and responsive **Accordion UI** built with **React.js**.
This project demonstrates how to manage component state and conditionally render content using React Hooks.

## 🚀 Live Demo

🔗 Add your deployed project link here.

## 📸 Preview

Add a screenshot of your application here.

```text
Accordion UI

┌────────────────────────────────────┐
│ What is React?                   + │
└────────────────────────────────────┘

┌────────────────────────────────────┐
│ What is useState?                - │
├────────────────────────────────────┤
│ useState is a React Hook used to  │
│ manage state in a component.      │
└────────────────────────────────────┘
```

## ✨ Features

* 📖 Expand and collapse questions
* ➕ `+` icon when an item is closed
* ➖ `-` icon when an item is open
* 🔄 Toggle an already-open question
* 🎯 Only one question can be open at a time
* 📱 Responsive design for mobile devices
* 🎨 Clean and modern UI
* ⚛️ Built using React Hooks

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**

## 🧠 React Concepts Practiced

### `useState`

The project uses `useState` to keep track of which accordion item is currently open.

```js
const [showindex, setShowIndex] = useState();
```

### Conditional Rendering

The answer is displayed only when the selected item's index matches the current state.

```jsx
{index === showindex && (
  <p className="answer">
    {question.answer}
  </p>
)}
```

### Props

The questions are stored in the parent component and passed to the Accordion component using props.

```jsx
<Accordion questions={questions} />
```

### `.map()`

The questions array is rendered dynamically using JavaScript's `map()` method.

```jsx
questions.map((question, index) => {
  // render accordion item
})
```

## 📂 Project Structure

```text
Accordion_App/
│
├── public/
│
├── src/
│   ├── Components/
│   │   └── Accordion.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd Accordion_App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## 🎯 How It Works

Each question is assigned an index when the array is rendered.

When a question is clicked:

* If it is already open → it closes.
* If another question is open → the previous one closes and the selected one opens.
* The `showindex` state stores the index of the currently open question.

```js
const handleClick = (index) => {
  if (index === showindex) {
    setShowIndex(null);
  } else {
    setShowIndex(index);
  }
};
```

## 🔮 Future Improvements

* Add smooth open/close animations
* Allow multiple questions to remain open
* Add icons using React Icons
* Add keyboard accessibility
* Add search functionality
* Add dark mode

## 👨‍💻 Author

**Abdul Bari**

Learning and building projects with **React.js** to strengthen frontend development skills.

---

⭐ If you found this project useful, consider giving the repository a star!
