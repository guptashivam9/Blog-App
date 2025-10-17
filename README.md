# 🚀 Personal Blog App

A modern, responsive blog application built with **Next.js 14+ App Router**, **React 18**, and **Tailwind CSS**. It fetches blog posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com) and offers dynamic routing, form handling, and performance optimizations using Static Site Generation (SSG).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Frontend:** React 18, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Data Source:** JSONPlaceholder API


---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18.0 or higher)
- npm or yarn
- [Git](https://git-scm.com/) (optional)

---

## 🚀 Quick Start

### 1. Clone or Download the Project

```bash
# Using Git
git clone <your-repository-url>
cd personal-blog
Or download and extract the ZIP
```
### 2. Install Dependencies
-npm install
or
-yarn install
### 3. Start the Development Server
-npm run dev
-or yarn dev

### 4. Open Your Browser and Visit [http://localhost:3000](http://localhost:3000)

### Project Structure
```
personal-blog/
├── app/
│   ├── blog/
│   │   └── [id]/
│   │       └── page.js          # Individual blog post page
│   ├── components/
│   │   ├── BlogPostCard.js      # Blog post preview component
│   │   └── ContactForm.js       # Contact form component
│   ├── contact/
│   │   └── page.js              # Contact page
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── layout.js                # Root layout with navigation
│   └── page.js                  # Homepage (blog listing)
├── public/                      # Static assets
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```
### 🎯 Key Features Explained
```
 #1:Static Site Generation (SSG)
-Blog listing page is pre-rendered at build time for optimal performance
-Individual blog posts use generateStaticParams() for staticgeneration
-Faster loading times and better SEO

#2:Dynamic Routing
-Blog posts accessible via /blog/[id] routes
-Automatic route generation for all available posts
-Clean, SEO-friendly URLs

#3:Responsive Design
-Mobile-first approach using Tailwind CSS
-Responsive grid layouts that adapt to different screen sizes
-Touch-friendly interface for mobile devices

#4:Form Handling
-Client-side form validation
-Success/error state management
-Accessible form design with proper labels
```
### 🌐 API Integration
```
##This application fetches data from the JSONPlaceholder API:

-Base URL: https://jsonplaceholder.typicode.com
-Posts Endpoint: /posts - Retrieves all blog posts
-Individual Post: /posts/{id} - Retrieves specific post details
```

