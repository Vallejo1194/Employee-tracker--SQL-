const inquirer = require('inquirer');
const db = require('./database');

// Menu 

const firstMenu = () => {
inquirer.prompt({
    type: 'list',
    name: 'principalMenu',
    message: 'How would you like to proceed ?',
    choices: ['View', 'Add', 'Update', 'Delete', 'Exit']
})
.then((answer) => {
    switch (answer.principalMenu) {
        //View
        case 'View':
            displayMenu();
            break;

        //Add 
        case 'Add':
            add();
            break;

        // Update

        case 'Update':
            update();
            break;

        case 'Delete':
            deleteDatabase();
            break;

            default:
                process.exit();
    }
});

};

// Menu 

const displayMenu = () => {
inquirer.prompt ({
    type: 'list',
    name: 'showMenu',
    message: 'showing',
    choices: [
        "All Departments",
        "All Roles",
        "Employee by Department",
        "employee by Manager",
        "Budget of department", 
        "<= return"]
})
.then ((answer) => {
    if (answer.displayMenu === "<= return") { return firstMenu();}
    db.showInfo(answer.displayMenu)
});

}

// add 

const add = () => {
    inquirer.prompt({
type: 'list',
name: 'addtodatabase',
message: 'showing',
choices: ['Department', 'Role', 'Employee', '<= return']
    })
    .then ((answer) => {
        if (answer.displayMenu === "<= return") { return firstMenu();}
        db.update(answer.updateTable)
    });

}

// delete 

const deleteDatabase = () => {
    inquirer.prompt({
type: 'list',
name: 'delete',
message: 'showing',
choices: ['Delete a department', 'Delete a role', 'Delete an Employee', '<= return']
    })
    .then ((answer) => {
        if (answer.displayMenu === "<= return") { return firstMenu();}
        db.deleteOption(answer.deleteOption)
    });

}

// start inquirer


module.exports = firstMenu();