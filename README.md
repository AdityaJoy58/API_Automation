# API_Automation
API Automation Platform to automate API's via JavaScript
Steps to run the tests:

  1) Open Command Terminal where this project is downloaded
  2) npm install -g mocha // Mocha is the Test runner 
  3) npm install // To install all the dependencies/libraries from Package.json which is like a pom.xml for java project
  4) npm start // To run the tests
  5) Once the tests are run, the results will be in form of xml which later can be converted to a html reporter as well
      API_Automation/test-result/result.xml
      
      
      Further Steps:
      1) This can be later extended to run the tests as a batch script (.sh)
      2) Create a dockerfile which takes the batch script as an entry point to run the tests that will be used on Jenkins CI.
      3) Create your Jenkins Job and run the job to see the test results
      
