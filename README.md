This is a ReactJS + Redux ToDo List project done for a job application.

All code done by: Mateus Villas Boas

## The Beagle Todo List

It's a simple Todo List Web App, with the cute design of a Beagle! :D 

### How did I start?

I used as a base for my project the official Redux+JS template for Create React App (https://github.com/reduxjs/cra-template-redux)
<br />
<br />
Usage:
<br />
```sh
npx create-react-app my-app --template redux
```

### Features
Features requested for the app:
* Clicking on the first rectangle enables users to write a todo.
* After the todo is written, cliking on the plus sign adds the todo to the bottom of the last todo.
* Users can edit a todo at anytime by clicking on it and edit the text.
* Clicking on the X sign removes the todo.

### New Features:
Features not requested but I've implemented to make the app better:
* When you've written a todo, pressing enter will add it aswell.
* When you edit the todo and leave it empty, it is deleted.

### How to view and test the project?
There is a live version at: https://beagle-todo.netlify.app/
<br />
It is conected to this git repository. 
<br />
Everytime a new commit is pushed to the master branch, a new version is eployed to netlify.

### How to run the project locally?
After you clone the repository to your machine, visit the folder with a terminal and use the following code to run it locally:
```sh
npm start
```
or
```sh
yarn start
```
After running, you can access the WebApp via http://localhost:3000/ on your browser.
