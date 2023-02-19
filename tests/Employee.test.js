const Employee = require('../lib/employee');

describe('Employee', () => {

    describe('name check', () => {
        it('name shoudl match .getname', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"

            const testEmployee = new Employee(name, id, email)

            expect(testEmployee.getName()).toBe(name)

        })
    });
    describe('ID check', () => {
        it('ID should match .getId', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"

            const testEmployee = new Employee(name, id, email)

            expect(testEmployee.getId()).toBe(id)

        })
    });
    describe('email check', () => {
        it('email should match .getemail', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"

            const testEmployee = new Employee(name, id, email)

            expect(testEmployee.getEmail()).toBe(email)

        })
    })
    describe('role check', () => {
        it('getRole should = Employee', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"

            const testEmployee = new Employee(name, id, email)

            expect(testEmployee.getRole()).toBe('Employee')

        })
    })

})