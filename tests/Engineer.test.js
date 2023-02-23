const Engineer = require('../lib/engineer');

describe('Engineer', () => {

    describe('name check', () => {
        it('name shoudl match .getname', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const gitUser = 'joeThePlumber'

            const testEngineer = new Engineer(name, id, email, gitUser)

            expect(testEngineer.getName()).toBe(name)

        })
    });
    describe('ID check', () => {
        it('ID should match .getId', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const gitUser = 'joeThePlumber'

            const testEngineer = new Engineer(name, id, email, gitUser)

            expect(testEngineer.getId()).toBe(id)

        })
    });
    describe('email check', () => {
        it('email should match .getemail', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const gitUser = 'joeThePlumber'

            const testEngineer = new Engineer(name, id, email, gitUser)

            expect(testEngineer.getEmail()).toBe(email)

        })
    });
    describe('gitUser check', () => {
        it('gitUser should match .getGitHub', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const gitUser = 'joeThePlumber'

            const testEngineer = new Engineer(name, id, email, gitUser)

            expect(testEngineer.getGithub()).toBe(gitUser)

        })
    });

    
    describe('role check', () => {
        it('getRole should = Engineer', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const gitUser = 'joeThePlumber'

            const testEngineer = new Engineer(name, id, email, gitUser)

            expect(testEngineer.getRole()).toBe('Engineer')

        });
    })

})