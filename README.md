# Cypress-task

## Summary

This repository includes 11 automated test cases written using the Cypress framework and JavaScript. The tests verify the functionality of elements on the main, login, and register pages of the website [ RealWorld.](https://demo.realworld.io/#/). These tests ensure that critical elements and features of the website are working as expected.

## Requirements

- Node.js v14 or higher
- npm (Node Package Manager)
- Cypress

## Step to install 

1. Clone the repository:
    ```sh
    git clone https://github.com/haite4/cypress-test-task.git
    ```
2. Navigate to the project directory:
    ```sh 
    cd cypress-test-task
    ```
3. Install dependencies:
    ```sh
    npm install cypress --save-dev
    npm install 
    ``` 


## Steps to Launch

1. **Run all Cypress tests in headless mode**:
    ```sh
    npm run cypress:run
    ```

2. **Run tests with a specific browser**:
    - For Chrome:
        ```sh
        npm run test:chrome
        ```
    - For Firefox:
        ```sh
        npm run test:firefox
        ```
    - For Edge:
        ```sh
        npm run test:edge
        ```

3. **Open Cypress Test Runner for interactive testing**:
    ```sh
    npm run cypress:open
    ```
    This command will open the Cypress Test Runner, allowing you to run and debug tests interactively in the Cypress GUI.
    
4. **Run tests for specific pages**:
    - **Login Page Tests**:
        ```sh
        npm run test:login:run
        ```
    - **Main Page Tests**:
        ```sh
        npm run test:main:run
        ```
    - **Register Page Tests**:
        ```sh
        npm run test:register:run
        ```
