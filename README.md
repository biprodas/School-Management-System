# School-Management
> School Management System with admin panel built with MERN Stack (MongoDB, Express, React, Node).

## Quick Start
```bash
# Install dependencies for server
npm run server-install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```bash
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

## Main Technologies

Client Side
- [ ] React
- [ ] Redux
- [ ] Bootstap 4
- [ ] React-Router-DOM

Libraries used in Client-side
 - [ ] axios
 - [ ] classnames
 - [ ] react-moment
 - [ ] react-redux
 - [ ] redux-thunk
 - [ ] validator

Server Side
- [ ] Node.js / Express
- [ ] MongoDB 
- [ ] JWT
- [ ] Passport
- [ ] Passport-jwt

Libraries used in Server-side
- [ ] bcryptjs
- [ ] bluebird
- [ ] gravatar
- [ ] mongoose
- [ ] jwt-decode
- [ ] moment
- [ ] validator

Deployment
- [ ] Git
- [ ] Heroku

## APIs

### Users endpoints

POST
- /api/users/register
- /api/users/login
- /api/users/current private