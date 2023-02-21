// const Employee = require('./lib/employee');
// const Engineer = require('./lib/engineer');
// const Intern = require('./lib/intern');
// const Manager = require('./lib/manager');
// const generateHTML = require('./dist/generatHTML');
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the employee name?',
            name: 'name',
            validate: function (input) {
                if (input === "") {
                    return 'Please enter employee name.'
                }
                return true
            }
        },
        {
            type: 'input',
            message: 'What is employee email?',
            name: 'email',
            validate: function (input) {
                if (input === "") {
                    return 'Please enter employee email.'
                }
                return true
            }
        },
        {
            type: 'input',
            message: 'What is employee ID#?',
            name: 'ID',
            validate: function (input) {

                if (isNaN(parseInt(input))) {
                    return 'Please enter # for employee ID#'
                }
                return true
            }
        },
        {//how can I use this question to break the seperate questions apart determined by employee?
            type: 'list',
            message: 'What is employee classification?',
            name: 'employee',
            choices: ['Intern', 'Engineer', 'Manager']
        },

    ])
    .then((data) => {
        console.log(JSON.stringify(data));
        if (data.employee === 'Manager') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the Office number?',
                        name: 'officeNumber',
                        validate: function (input) {
                            //can I validate by checking for interger here if so how so?
                            if (isNaN(parseInt(input))) {
                                return 'Please enter office number.'
                            }
                            return true
                        }
                    }
                ])
        } else if (data.employee === 'Intern') {
            inquirer
                .prompt([
                    {
                        type: 'input',
            message: 'What school does intern attend?',
            name: 'school',
            validate: function (input) {
                //can I validate by checking for interger here if so how so?
                if (input === "") {
                    return 'Please enter school name.'
                }
                return true
            }
                    }
                ])
        } else if (data.employee === 'Engineer') {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is employee Github username?',
                        name: 'username',
                        //validation code
                        validate: function (input) {
                            if (input === "") {
                                return 'Please enter the Github username!'
                            }
                            return true
                        }
                    }
                ])
        }

    })
    .then((data) => {
        console.log(JSON.stringify(data));
    });