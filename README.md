# messu_webapp

## Description

Digital collection and voting management system.

## Installation

1. MongoDB:

   - download and MongoDB Community Server from ´https://www.mongodb.com/try/download/community`
   - during installation make sure to check MongoDB Compass (GUI) installation checkbox
   - to insure that installation was performed correctly, run ´mongosh` in command prompt, you should see at least two lines:
   - ´Using MongoDB: <version>`
   - ´Using Mongosh: <version>`
   - if not the case, repeat installation process

2. MongoDB Shell:

   - download and extract MongoDB Shell zip archive from ´https://www.mongodb.com/try/download/shell`
   - use either MongoDB Shell or MongoDB Compass to interact with the database
   - add desired mockdata either via MongoDB Compass or MongoDB Shell
   - MongoDB Compass:

   1. New Connection
   2. Connect (URI should default to ´mongodb://localhost:27017`, if not - add URI manually)
   3. Create a database
   4. Create collections and fill them with mock data, for instance: - collection ´visitors`, add data, insert document - document: {
      "firstname": "John",
      "lastname": "Doe",
      "group": "PIPOS1",
      "student number": "133795"
      }
      Later on data will be generated with a mongosh script.

   - MongoDB Shell:

   1. ´mongosh` in any terminal
   2. use <database name> to create a database
   3. db.createCollection("<collection name>") to create a collection
   4. db.<collection name>.insertOne({
      "firstname": "John",
      "lastname": "Doe",
      "group": "PIPOS1",
      "student number": "133795"
      })

   Later data will be generated with a mongosh script.

## Backend

1. navigate to directory via terminal ´cd backend`
2. run ´npm install mongoose` for integration with MongoDB
3. run ´npm i` to install necessary backend dependencies
4. start backend using ´node server.js` in terminal while inside backend directory

## Frontend

1. navigate to directory via terminal ´cd frontend`
2. run ´npm i` to install necessary backend dependencies
3. run ´npm run start` to start up frontend
4. browser window will open as soon as frontend will finish starting

## Troubleshooting

- missing module -> ´npm i`
- failure to connect to database -> check MongoDB Server service, needs to be running (Win + R -> services.msc)

## License

MIT License

## Authors

- Yan Zborovskij (Timoshkin)

## Software

Programming languages: JavaScript, HTML, CSS
Frameworks: React
Libraries: Express.js, Mongoose.js
Development tools: Visual Studio Code, Git, GitHub
Database software: MongoDB, MongoDB Compass, MongoDB Shell
Additional tools or services: npm, Node.js
