
const inquirer = require('inquirer');
const fs = require('fs');


var emplSelect = {
    //Used to determine which eployee selected
    type: 'list',
    message: 'What is employee classification?',
    name: 'employee',
    choices: ['Intern', 'Engineer', 'Manager']
}

var emplAllQuestions = [{
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
}
]

var emplManager = () => {
    emplAllQuestions.push({
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
    })
}

var emplEngin = () => {
    emplAllQuestions.push({
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
    })
}

var emplIntern = () => {

    emplAllQuestions.push({
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
    })
}

var init = () => {
    return (
        inquirer
            .prompt(emplSelect)
            .then((choice) => {
                if (choice.employee === 'Manager') {
                    emplManager()
                } else if (choice.employee === 'Engineer') {
                    emplEngin()
                } else {
                    emplIntern()
                }


            })
            .then((data) => {
                console.log(JSON.stringify(data));
            })
    )
}

init();