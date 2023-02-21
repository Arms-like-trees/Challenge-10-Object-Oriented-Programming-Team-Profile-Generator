
const inquirer = require('inquirer');
const fs = require('fs');


const emplSelect = {
    //Used to determine which eployee selected
    type: 'list',
    message: 'What is employee classification?',
    name: 'employee',
    choices: ['Intern', 'Engineer', 'Manager']
}

const emplAllQuestions = 
[{
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

const emplManager = () => {
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

const emplEngin = () => {
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

const emplIntern = () => {

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

const init = () => {
    return (
        inquirer
            .prompt(emplSelect)
            .then((select) => {
                console.log(select);
                if (select.employee === 'Manager') {
                    emplManager();
                    inquirer
                    .prompt(emplAllQuestions)
                } else if (select.employee === 'Engineer') {
                    emplEngin();
                    inquirer
                    .prompt(emplAllQuestions)
                } else {
                    emplIntern();
                    inquirer
                    .prompt(emplAllQuestions)
                }


            })
            // .then((data) => {
            //     console.log(JSON.stringify(data));
            // })
    )
}

init();