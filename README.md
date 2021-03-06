# Portfolio



- [Overview](#overview)
- [MVP](#mvp)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
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


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | import and use essential react hooks such a useState and useEffect   |
|   React Router   | import and use Link and Route and useHistory to redirect to different pages |
| AOS | add nice animation and effects on scroll throughout the page |
| Axios | make axios calls to the backend |
|  JWT  | used for authentication and validation |
| Bcrypt| used for encrypting passwords |

<br>

### Client (Front End)

#### Wireframes

- Desktop View

![Imgur](https://imgur.com/7KluIZE.png)

- Mobile View

![Imgur](https://imgur.com/7oSBQgh.png)


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


### Server (Back End)

#### ERD Model

![Imgur](https://imgur.com/cPcDrW8.png)

## Code Showcase



## Code Issues & Resolutions
