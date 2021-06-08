
const Intern = require('../lib/Intern');


test('creates an Intern object', () => {
    const intern = new Intern('Amanda', 25, 'amandabananda@gmail.com', 'UOABC');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Amanda', 25, 'amandabananda@gmail.com', 'UOABC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Amanda', 25, 'amandabananda@gmail.com.com', 'UOABC');

    expect(intern.getRole()).toEqual("Intern");
}); 