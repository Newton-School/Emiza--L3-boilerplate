const users   = require("../models/user.js");
const tasks   = require("../models/task.js");
const bcrypt  = require('bcrypt');
const { valid } = require("joi");

const createTask =async (req, res) => {

    //creator_id is user id who have created this task.

    const { heading, description, creator_id  } = req.body;

    var newtask = {
        "heading":heading,
        "description":description,
        "creator_id": creator_id
    };

    var creator = await 

    tasks.create(newtask).then((task) => {

        users.updateOne(
            { _id: creator_id },
            { $push: { tasks: task._id } }
        ).then((user) => {});

        res.status(200).json({
            "message": 'Task added successfully',
            "task_id": task._id,
            "status": 'success'
        });
    })
    .catch((error) => {
        res.status(404).json({
            "status": 'fail',
            "message": error.message
        });
    });

}


/*

Taskdetail Controller

req.body = {
    "task_id" : task_id,
    "user_id" : user_id
}

1. Implement the middleware isowner in ../middleware/taskmiddleware.js (This will handel if task with given _id doesnot exist).
2. Return the detail of the task with given task_id.

Response --> 

1. Success

200 Status code

json = {
  status: 'success',
  data: {
    Status: 'pending',
    creationdate: '2023-04-07T10:31:23.885Z',
    _id: 'mxcnbxzcn-khscc',
    heading: 'Study Doglapan',
    description: 'Need to study atleast 10 Pages',
    creator_id: 'kdjhgsdjgmsbmbs',
  }
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/

const Taskdetail = async (req, res) => {

    const {task_id, user_id} = req.body;

    //Write your code here.

}


/*

Taskupdate Controller

In req.body only those field will be given from "heading", "description" and "status" that is being Updated.

req.body = {
    "task_id"    : task_id,
    "user_id"    : user_id,
    "heading"    : ... ,
    "description": ... ,
    "status"     : ...
}


1. Middleware isowner is Implemented in ../middleware/taskmiddleware.js (This will handel if task with given _id doesnot exist).
2. Return the detail of the task with given task_id.

Response --> 

1. Success

200 Status code

json = {
  status: 'success',
  data: {
    Status: 'pending',
    creationdate: '2023-04-07T10:31:23.885Z',
    _id: 'mxcnbxzcn-khscc',
    heading: 'Study Doglapan',
    description: 'Need to study atleast 10 Pages',
    creator_id: 'kdjhgsdjgmsbmbs',
  }
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/


Taskupdate = async (req, res) => {
    
    const task_id = req.body.task_id;

    //Write your code here.


}


/*

Taskdelete Controller

In req.body only those field will be given from "heading", "description" and "status" that is being Updated.

req.body = {
    "task_id"    : task_id,
    "user_id"    : user_id
}


1. Middleware isowner is Implemented in ../middleware/taskmiddleware.js (This will handel if task with given _id doesnot exist).
2. delete the task with given task_id.
3. remove the task_id from tasks array of user_id. (Remove given task fromm the creator tasks list).

Response --> 

1. Success

200 Status code
json = {
  status: 'success',
  message: 'Task deleted successfully'
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}


//this case will be handel by Middleware.
3. Task Doesnot exist
403 Status Code
json = {
    "status": 'fail',
    "message": 'Given task doesnot exist'
}

*/

Taskdelete = async (req, res) => {

    const {task_id, user_id} = req.body;

    //Write your code here.

}


module.exports = { createTask, Taskdetail, Taskupdate, Taskdelete };