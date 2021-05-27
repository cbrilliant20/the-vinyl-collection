# the vinyl exchange

# Overview

The Vinyl Exchange is a social marketplace to buy and sell new and old records.  Created using the MERN stack, T.V.E offers full CRUD capability, user authentication, and a home grown API.  

# Schema
```
const User = new Schema(
  {
    username: { type: String, required: true, },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)

const Product = new Schema(
  {
    artist: { type: String, required: true, },
    album: { type: String, required: true, },
    genre: { type: String, required: true, },
    year: { type: String, required: true, },
    price: { type: String, required: true, },
    imgURL: { type: String, required: true, },
  },
  { timestamps: true }
)
```
# Wireframe

https://www.figma.com/file/f2bs15tYmvPWujvPsBaxF9/Record-Store?node-id=0%3A1

# Whimsical Diagram

https://whimsical.com/t-v-e-MoyCoTfAZ3VzeW3od5b7Uq

# Team Expectations

https://docs.google.com/document/d/11SqTIc86dd7ZhK9EhQFu-CaBgJgMRBO0DhN6UJfgCpk/edit?usp=sharing


# MVP

1. Functional Backend
2. Connecting Axios Calls
3. Functional Components
4. Authentication
5. CSS

# Post-MVP

1. Filter related music options
2. Create admin level user privledges
3. Change password option
4. Comment section
