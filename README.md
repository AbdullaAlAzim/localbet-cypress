# Localbet Cypress Automation Project

This project automates end-to-end testing using Cypress. It includes a test suite for verifying key workflows like login, registration, and other core functionality.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Custom Commands](#custom-commands)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
This project contains automated end-to-end tests written in JavaScript using the Cypress framework.

## Prerequisites
Ensure you have the following tools installed:
- [Node.js](https://nodejs.org/en/) (Version 14.x or higher)
- npm (comes with Node.js)
- After installation, verify it by opening Command Prompt and running:
   node -v
   npm -v
****

## Installation
1. Clone the repository:
   git clone https://github.com/SOFTIC-OPC/LocalBet-Cypress-Automation.git
   
   cd cypress-automation-project


2. Install the dependencies: 
```bash
   npm install cypress --save-dev
```

 ## Running Tests

### Interactive Mode:
To open the Cypress test runner, run:
```bash 
npx cypress open
 ```
This will allow you to manually run specific tests interactively.

### Headless Mode:
To run all tests in headless mode, use the following command:
```bash
npx cypress run
```
This will execute all tests and provide results in the terminal.

### Run a Specific Test:
To run a specific test file in headless mode:
npx cypress run --spec "cypress/e2e/tests/loginTest.cy.js"

## Project Structure

```bash
cypress/
├── e2e/                   # Contains test cases
│   └── tests/             # Specific test scripts
├── fixtures/              # Test data and mocks
├── support/               # Custom commands and test hooks
├── downloads/             # Downloaded files

``` 



## Custom Commands

This project includes custom Cypress commands located in \`cypress/support/commands.js\`. For example, a command to log in using credentials from a file:

##javascript
```bash
Cypress.Commands.add("read_data_with_login", () => {
  const filePath = 'cypress/downloads/login-credentials.txt';
  cy.readFile(filePath).then((text) => {
    const regex = /AccountId:\\s*(\\S+)\\s*Password:\\s*(\\S+)/;
    const matches = text.match(regex);
    if (matches) {
      cy.get("#username").type(matches[1]);
      cy.get("#password").type(matches[2]);
      cy.get("button[type='submit']").click();
    }
  });
});
``` 


## Contributing
Contributions are welcome! Please follow the standard GitHub workflow:
1. Fork the repository.
2. Create a feature branch:  
   git checkout -b feature-branch
3. Commit your changes:  
   git commit -m "Add new feature"  
4. Push to your branch: 
   git push origin feature-branch  
5. Open a pull request.

## License
This project is licensed under the MIT License.

