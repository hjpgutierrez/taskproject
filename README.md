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

## ENDPOINTS

**To create rows use POST** `http://localhost:4000/api/v1/tasks`
{
"description": "Do homework",
"author": "Group sixth"
}

**To get all rows use GET** `http://localhost:4000/api/v1/tasks`

**To get one row use GET and specific id** `http://localhost:4000/api/v1/tasks/:id`

**To update one row use PUT/PATCH and specific id** `http://localhost:4000/api/v1/tasks/:id`
{
"description": "Do homework",
"author": "Group sixth"
}

**To delete one row use DELETE and specific id** `http://localhost:4000/api/v1/tasks/:id`
