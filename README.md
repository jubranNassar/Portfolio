# Portfolio



- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**My Portfolio** is a project I've been really excited to work on, It's a great way for employers to reach out to me and see how creative I can be!  


<br>

## MVP

- Back End   
  - Build a Ruby on Rails server
  - Make use of RESTful JSON endpoints
  - Implement working Full CRUD 


- Front End   
  - Build Front End using React.js
  - Consume data from Ruby on Rails API 

- Styling
  - Style using CSS
  - utilize AOS(Animations On Scroll) React Library
  - Implement media queries for mobile view

- Deployment   
  - Deploy Front End with Netlify
  - Deploy Back End with Heroku


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | npm i react |
|   React Router   | npm i react-router-dom |
| AOS |   npm install aos --save |
| Axios | npm i axios |
|  JWT  | gem jwt |
| Bcrypt| gem bcrypt |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

![Imgur](https://imgur.com/Ik1Jxrz.png)

- Mobile View

![Imgur](https://imgur.com/DyzFHo6.png)


#### Component Tree

![Imgur](https://imgur.com/9kHmLUb.png)


``` structure

src
|__ screens/
      |__ Home.jsx
      |__ Login.jsx
      |__AddProject.jsx
      |__EditProject.jsx 

|__ components/
      |__Nav.jsx
      |__AboutMe.jsx
      |__Projects.jsx
      |__Resume.jsx
      |__Contact.jsx
      |__ProjectButtons.jsx
      |__Comment.jsx
       
      
|__ services/
        |__projects.js
        |__users.js
```

#### Time Estimates

| Task | Estimated Time | Time Invested |
| ---- | :------------: |:-----: | 
| Rails Backend | 3H | hrs|
| Create CRUD Actions | 3H| hrs |
| Seed Data | 2H | hrs |
| Routes | 4H | hrs |
| Services Folder | 3H | hrs |
| Front-End CRUD | 4H | hrs |
| Debugging | 6H | hrs |
| TOTAL | 25H|hrs|   


<br>

### Server (Back End)

#### ERD Model

![Imgur](https://imgur.com/QyV9gWn.png)

***

## Post-MVP

- Add more Projects
- Advance my CSS

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.