This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Trackshare

This is a web aplication to upload the links from your songs, you can upload as many platforms as you want with the respective song photo. This automaticly creates a personalized page to show your song in social media and anyone can click on their favorite platforms to listen your songs.

## Table of Contents

- [Dependencies](#dependencies)
  - [@libsql/client](#libsqlclient)
  - [@types/bcrypt](#typesbcrypt)
  - [bcrypt](#bcrypt)
  - [jsonwebtoken](#jsonwebtoken)
  - [next](#next)
  - [react](#react)
  - [react-dom](#react-dom)
  - [sonner](#sonner)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Dependencies

### @libsql/client

**Version**: ^0.6.2

This package provides a client for interacting with the `libsql` database. It simplifies database operations and helps in establishing a connection with the database.

### @types/bcrypt

**Version**: ^5.0.2

This package contains TypeScript type definitions for `bcrypt`. It is essential for ensuring type safety when using `bcrypt` in a TypeScript project.

### bcrypt

**Version**: ^5.1.1

`bcrypt` is a library for hashing passwords. It provides a way to securely store passwords by hashing them before saving them in the database.

### jsonwebtoken

**Version**: ^9.0.2

`jsonwebtoken` is a library to work with JSON Web Tokens (JWT). It is commonly used for authentication and securely transmitting information between parties as a JSON object.

### next

**Version**: 14.2.3

`next` is the core package for Next.js, a React framework for server-rendered applications, static websites, and more. This package provides the framework and utilities for building and running a Next.js application.

### react

**Version**: ^18

`react` is a JavaScript library for building user interfaces. This package is a peer dependency for Next.js and is required for creating React components.

### react-dom

**Version**: ^18

`react-dom` is a package that provides DOM-specific methods that can be used at the top level of a React app. This package is also a peer dependency for Next.js.

### sonner

**Version**: ^1.5.0

`sonner` is a library for creating notifications in a React application. It helps in showing alerts, success messages, and other types of notifications to the user.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
