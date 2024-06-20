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

## Database Schema

### Artists Table

The `artists` table stores information about the artists.

```sql
CREATE TABLE IF NOT EXISTS
  artists (
    artist_id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_name TEXT,
    fullname TEXT,
    email TEXT,
    password TEXT
  );
```

| Column      | Type    | Description                       |
| ----------- | ------- | --------------------------------- |
| artist_id   | INTEGER | Primary key, autoincrement        |
| artist_name | TEXT    | The stage name of the artist      |
| fullname    | TEXT    | The full name of the artist       |
| email       | TEXT    | The email address of the artist   |
| password    | TEXT    | The hashed password of the artist |

### Songs Table

The `songs` table stores information about the songs.

```sql
CREATE TABLE IF NOT EXISTS
  songs (
    song_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    artist_id INTEGER,
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id)
  );

ALTER TABLE songs
ADD COLUMN photo TEXT;
```

| Column    | Type    | Description                              |
| --------- | ------- | ---------------------------------------- |
| song_id   | INTEGER | Primary key, autoincrement               |
| title     | TEXT    | The title of the song                    |
| artist_id | INTEGER | Foreign key referencing `artists` table  |
| photo     | TEXT    | The filename or path of the song's photo |

### Platforms Table

The `platforms` table stores information about the platforms where songs are available.

```sql
CREATE TABLE IF NOT EXISTS
  platforms (
    platform_id INTEGER PRIMARY KEY AUTOINCREMENT,
    platform TEXT,
    link TEXT,
    song_id INTEGER,
    FOREIGN KEY (song_id) REFERENCES songs (song_id)
  );
```

| Column      | Type    | Description                           |
| ----------- | ------- | ------------------------------------- |
| platform_id | INTEGER | Primary key, autoincrement            |
| platform    | TEXT    | The name of the platform              |
| link        | TEXT    | The link to the song on the platform  |
| song_id     | INTEGER | Foreign key referencing `songs` table |

## Dependencies

### @libsql/client

**Version**: ^0.6.2

This package provides a client for interacting with the `libsql` database. It simplifies database operations and helps in establishing a connection with the database.

### bcrypt

**Version**: ^5.1.1

`bcrypt` is a library for hashing passwords. It provides a way to securely store passwords by hashing them before saving them in the database.

### jsonwebtoken

**Version**: ^9.0.2

`jsonwebtoken` is a library to work with JSON Web Tokens (JWT). It is commonly used for authentication and securely transmitting information between parties as a JSON object.

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
