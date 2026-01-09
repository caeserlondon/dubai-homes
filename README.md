# Dubai Homes 🏙️

### Under maintenance

## The Bayut API was removed from the RapidAPI Platform on December 16, 2025.

<div>
<img src="/public/images/rapidapi.png" width="40%"  alt="Rapid api email"/>

<img src="/public/images/undermaintenance.png" width="40%"  alt="Under maintenance"/>
</div>

<div>
<img src="/public/images/dubai-home.png" width="40%" alt="Dubai front page image"/>

<img src="/public/images/dubai-search.png" width="40%" alt="Dubai search page image"/>
</div>

[Visit the live website @ https://dubai-homes.vercel.app](https://dubai-homes.vercel.app/) Under maintenance

A modern real estate web application built with **Next.js** that showcases live property listings in Dubai.  
Dubai Homes fetches **real-time data** from the [Bayut API (RapidAPI)](https://rapidapi.com/apidojo/api/bayut/) to display properties available **for sale** and **for rent** — allowing users to explore the Dubai property market interactively.

---

## 🚀 Features

- **Live data** from Bayut via RapidAPI
- **Search functionality** for properties (rent or sale)
- **Dynamic pages** using Next.js `getServerSideProps` and `getStaticProps`
- **Responsive UI** built with [Chakra UI](https://chakra-ui.com/)
- **Smooth animations** powered by [Framer Motion](https://www.framer.com/motion/)
- **Loading progress bar** using [NProgress](https://ricostacruz.com/nprogress/)
- **Clean and modern interface** with real-time updates

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 12](https://nextjs.org/)
- **Language:** JavaScript (React 18)
- **Styling:** Chakra UI & Emotion
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Utilities:** Millify, NProgress, React Icons

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/dubai-homes.git
cd dubai-homes
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add your RapidAPI credentials

Create a `.env.local` file in the project root and add:

```bash
RAPID_API_KEY=your_rapidapi_key_here
RAPID_API_HOST=bayut.p.rapidapi.com
```

### 4️⃣ Run the development server

```bash
npm run dev
```

Then open your browser and navigate to 👉 [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
dubai-homes/
├── components/       # Reusable UI components
├── pages/            # Next.js pages
│   ├── index.js      # Home page
│   ├── search.js     # Search results page
│   ├── property/     # Dynamic property details pages
├── styles/           # Global styles
├── utils/            # Helper functions (e.g., API calls)
└── public/           # Static assets
```

---

## 🌍 Live Data Source

Data is fetched from the **Bayut API** hosted on [RapidAPI](https://rapidapi.com/apidojo/api/bayut/), providing real-time property listings in Dubai.

---

## 🧑‍💻 Author

**Caeser Ibrahim**  
[LinkedIn](https://www.linkedin.com/in/caeser-ibrahim/) • [GitHub](https://github.com/caeserlondon)

---

## 📝 License

This project is licensed under the MIT License — feel free to use and modify it for your own learning or projects.

---

### ⭐ If you like this project, consider giving it a star on GitHub
