# Task API

This is the task for the course

## Installation

`npm install`

Copy `.env.example` to `.env` and set your environment variables

## Folder

Once you have downloaded the repository, go to the folder `./task-api`

## Start

`npm start`

## URL base

Use this URL to test `http://localhost:4000/api/v1/`

## ENDPOINTS (TASKS)

**To create task rows use POST** `http://localhost:4000/api/v1/tasks`

{

"description": "Do homework",

"userId": GUID

}

**To get all task rows use GET** `http://localhost:4000/api/v1/tasks`

**To get one task row use GET and specific id** `http://localhost:4000/api/v1/tasks/:id`

**To update one task row use PUT/PATCH and specific id** `http://localhost:4000/api/v1/tasks/:id`

{

"description": "Do homework",

"userId": GUID

}

**To delete one task row use DELETE and specific id** `http://localhost:4000/api/v1/tasks/:id`

## ENDPOINTS (USERS)

**To create user rows use POST (By default, the users are created in an enabled state (true))** `http://localhost:4000/api/v1/users`

{

"firstname": "Henry" ,

"lastname": "Paez" ,

"email": "hpaez@gmail.com"

}

**To get all user rows use GET** `http://localhost:4000/api/v1/users`

**To update one user row use PUT/PATCH and specific id (here you can update data such as the email or names, as well as the state to enable/disable the user)** `http://localhost:4000/api/v1/users/:id`

{

"firstname": "José" ,

"lastname": "Jiménez Molina" ,

"email": "jjimenez3442@gmail.com",

"state": false

}
