# messu_webapp

## Description

Digital collection and voting management system.

## Software installation

1. MongoDB:

   - download and MongoDB Community Server from ´https://www.mongodb.com/try/download/community`
   - during installation make sure to check MongoDB Compass (GUI) installation checkbox
   - to insure that installation was performed correctly, run ´mongosh` in command prompt, you should see at least two lines:
   - ´Using MongoDB: <version>`
   - ´Using Mongosh: <version>`
   - if not the case, repeat the installation process

2. MongoDB Shell:

   - download and extract MongoDB Shell zip archive from ´https://www.mongodb.com/try/download/shell`
   - use either MongoDB Shell or MongoDB Compass to interact with the database

3. Node.js:

   - download Node.js from ´https://nodejs.org/en/download`
   - install Node.js runtime environment

4. Editor:

   - download and install preferred code editor, for instance VSCode from ´https://code.visualstudio.com/download`
   - open the project's root in preferred editor

## Backend

1. navigate to directory via terminal ´cd backend`
2. run ´npm install mongoose` for integration with MongoDB
3. run ´npm install` to install necessary backend dependencies
4. populate the database with mock data using ´node seed.js`
5. start backend project using ´node server.js`

## Frontend

1. navigate to directory via terminal ´cd frontend`
2. run ´npm install` to install necessary backend dependencies
3. run ´npm run dev` to start up frontend
4. o + Enter to open browser window at localhost

## Troubleshooting

- missing module -> ´npm install`
- failure to connect to database -> check MongoDB Server service, needs to be running (Win + R -> services.msc on Wndows OS)

## License

MIT License

## Authors

- Yan Zborovskij (Timoshkin)

## Software

Programming languages: JavaScript, HTML, CSS
Frameworks: Vite
Libraries: Express.js, Mongoose.js
Development tools: Visual Studio Code, Git, GitHub
Database software: MongoDB, MongoDB Compass, MongoDB Shell
Additional tools or services: npm, Node.js
