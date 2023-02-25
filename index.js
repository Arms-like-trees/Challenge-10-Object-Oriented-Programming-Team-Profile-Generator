const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./dist/generatHTML');

const inquirer = require('inquirer');
const fs = require('fs');

const arrAssets = [];

const emplSelect = {
    //Used to determine which eployee selected
    type: 'list',
    message: 'What is employee classification?',
    name: 'employee',
    choices: ['Intern', 'Engineer', 'Manager']
}


const init = () => {
    return (
        inquirer
            .prompt(emplSelect)
            .then((select) => {
                console.log(select);
                if (select.employee === 'Manager') {
                        inquirer
                            .prompt([{
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
                                name: 'id',
                                validate: function (input) {
                        
                                    if (isNaN(parseInt(input))) {
                                        return 'Please enter # for employee ID#'
                                    }
                                    return true
                                }
                            },
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


                            .then((data) => {
                                const manager = new Manager(
                                    data.name,
                                    data.id,
                                    data.email,
                                    data.officeNumber
                                );
                                console.log((manager))
                                arrAssets.push(manager)
                                console.log(arrAssets)
                                createHTML();
                                anotherEmpl();
                            }
                            )
                    
                } else if (select.employee === 'Engineer') {
                        inquirer
                            .prompt([{
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
                                name: 'id',
                                validate: function (input) {
                        
                                    if (isNaN(parseInt(input))) {
                                        return 'Please enter # for employee ID#'
                                    }
                                    return true
                                }
                            },
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
                            .then((data) => {
                                const engineer = new Engineer(
                                    data.name,
                                    data.id,
                                    data.email,
                                    data.username
                                );
                                console.log((engineer))
                                arrAssets.push(engineer)
                                console.log(arrAssets)
                                createHTML();
                                anotherEmpl();
                            })
                    
                } else {
                        inquirer
                            .prompt([{
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
                                name: 'id',
                                validate: function (input) {
                        
                                    if (isNaN(parseInt(input))) {
                                        return 'Please enter # for employee ID#'
                                    }
                                    return true
                                }
                            },
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
                                }}
                            ])

                            .then((data) => {
                                const intern = new Intern(
                                    data.name,
                                    data.id,
                                    data.email,
                                    data.school
                                );
                                console.log((intern))
                                arrAssets.push(intern)
                                console.log(arrAssets)
                                createHTML();
                                anotherEmpl();
                            })
                    
                }


            })
        // .then((data) => {
        //     console.log(JSON.stringify(data));
        // })
    )
}

const anotherEmpl = () => {
    inquirer
        .prompt({
            type: 'list',
            message: 'Add another employee?',
            name: 'another',
            choices: ['yes', 'no']
        })
        .then((again) => {
            if (again.another === 'yes') {
                init();
            } else { console.log('Team setup complete') }
        })
}

const createHTML = () => {
    const data = generateHTML(arrAssets);
    fs.writeFile('index.html', data, (err) => { return err ? console.error(err) : console.log('Success - writfile') })

}

init();