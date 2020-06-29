const { request } = require('http')
const { response } = require('express')

const Pool = require('pg').Pool  //standard library object for connecting to DB
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'DataBaseProject',
  password: '!QAZxsw2',
  port: 5432, //5432 is Postgres default 
})


// Create New User Functionality 
const createUser = (req, res) => {
    const { user } = request.body  //pull body from json submitted object
    pool.query('INSERT INTO "Users" ("firstName", "lastName", "email") VALUES ($1, $2, $3)', 
        [firstName, lastName, email], 
        (error, results) => {
            if (error){
                throw error
            }
            response.status(201).send(`Student added with ID: ${result.insertId}`)
        })
}

  //Function get 1 student based on passed in value
  const userDetails = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM "Users" WHERE "userId" = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //Function to update existing User Requires passed in firstName, lastName, Email and valid ID#
  //#TODO on the app side error check that all values are submitted or defaults are used
  const updateUser = (request, response) => {
    const id = parseInt(request.query.userId)
    const firstName = request.query.firstName
    const lastName = request.query.lastName
    const email = request.query.email
  
    pool.query(
      //'UPDATE "Users" SET "firstName", "lastName", "email" VALUE ($1,$2,$3) WHERE "userId" = $4', [firstName, lastName, email, id],
      'UPDATE "Users" SET "firstName" = $1, "lastName" =$2, "email" = $3 WHERE "userId" = $4', 
      [firstName, lastName, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  //Function to delete existing User.  Required ID#
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    console.log("in the delete user funciton")
    pool.query('DELETE FROM "Users" WHERE "userId" = $1', [id], (error, results) => {      
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

//Function Get all Users
const getUsers = (request, response) => {
    pool.query('SELECT * FROM "Users" ORDER BY "userId" ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = {
    createUser,
    userDetails,
    updateUser,
    deleteUser,
    getUsers
  }
