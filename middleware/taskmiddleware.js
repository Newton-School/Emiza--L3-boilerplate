const tasks   = require("../models/task.js");

/*

req.body = {
    "task_id"    : task_id,
    "user_id"    : user_id
}

Response

1. if Given task_id does not exist is Tasks 

403 Status code

json = {
    "status": 'fail',
    'message': 'Given task doesnot exist'
}

2. if creator_id of task that belong to task_id is not same as user_id
   means this is not the owner of given task hence

404 Status code
json = 
{
    'status': 'fail',
    'message': 'Access Denied'
}

3. if creator_id of task that belong to task_id is same as user_id
   means this is the owner of given task hence

200 Status code with allowing further.

*/

function isowner() {
    try {
        return function (req, res, next) {
            //Write your code here.
        }
    } catch (err) {
        return res.status(400).json({
            'status': "error",
            'message': "Unable to check"
        })
    }
}

module.exports = { isowner };