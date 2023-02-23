const Intern = require('../lib/intern');

describe('Intern', () => {

    describe('name check', () => {
        it('name shoudl match .getname', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const school = 'Laffey Ducks clow school'

            const testIntern = new Intern(name, id, email, school)

            expect(testIntern.getName()).toBe(name)

        })
    });
    describe('ID check', () => {
        it('ID should match .getId', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const school = 'Laffey Ducks clow school'

            const testIntern = new Intern(name, id, email, school)

            expect(testIntern.getId()).toBe(id)

        })
    });
    describe('email check', () => {
        it('email should match .getemail', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const school = 'Laffey Ducks clow school'

            const testIntern = new Intern(name, id, email, school)

            expect(testIntern.getEmail()).toBe(email)

        })
    });
    describe('school check', () => {
        it('school should match .getSchool', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const school = 'Laffey Ducks clow school'

            const testIntern = new Intern(name, id, email, school)

            expect(testIntern.getSchool()).toBe(school)

        })
    });

    
    describe('role check', () => {
        it('getRole should = Intern', () => {
            const name = "TestName"
            const id = 3455343
            const email = "myemail@gmail.com"
            const school = 'Laffey Ducks clow school'

            const testIntern = new Intern(name, id, email, school)

            expect(testIntern.getRole()).toBe('Intern')

        });
    })

})