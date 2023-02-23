const Manager = require('../lib/manager');

describe('Manager', () => {

    describe('name check', () => {
        it('name shoudl match .getname', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const officeNumber = 65

            const testManager = new Manager(name, id, email, officeNumber)

            expect(testManager.getName()).toBe(name)

        })
    });
    describe('ID check', () => {
        it('ID should match .getId', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const officeNumber = 65

            const testManager = new Manager(name, id, email, officeNumber)

            expect(testManager.getId()).toBe(id)

        })
    });
    describe('email check', () => {
        it('email should match .getemail', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const officeNumber = 65

            const testManager = new Manager(name, id, email, officeNumber)

            expect(testManager.getEmail()).toBe(email)

        })
    });
    describe('officeNumber check', () => {
        it('officeNumber should match .getOfficeNumber', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const officeNumber = 65

            const testManager = new Manager(name, id, email, officeNumber)

            expect(testManager.getOfficeNumber()).toBe(officeNumber)

        })
    });

    
    describe('role check', () => {
        it('getRole should = Manager', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const officeNumber = 65

            const testManager = new Manager(name, id, email, officeNumber)

            expect(testManager.getRole()).toBe('Manager')

        });
    })

})