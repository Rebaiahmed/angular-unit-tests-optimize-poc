# Angular Unit Test Optimization POC

This is a proof of concept project demonstrating techniques for optimizing the execution time of unit tests in Angular applications.

# Getting Started
Clone the repository: git clone https://github.com/Rebaiahmed/angular-unit-tests-optimize-poc.git
Install the dependencies: npm install
Run the tests: npm run test
Techniques Demonstrated
Using the --only-changed flag in the Angular CLI to run only relevant tests
Resetting the testing module between tests using TestBed.resetTestingModule()
Asynchronously running tests with the async and fakeAsync helpers
Disabling the watch mode using the ng test --watch=false flag
Running tests in a headless browser using Karma or Protractor


# Additional Resources:
- Angular documentation on testing
- Karma documentation
- Protractor documentation
