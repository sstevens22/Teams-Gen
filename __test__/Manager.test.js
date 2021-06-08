
const Manager = require('../lib/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Taylor', 30, 'misterconnell@gmail.com', 3);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Taylor', 30, 'misterconnell@gmail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 