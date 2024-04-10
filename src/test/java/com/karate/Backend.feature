@testBackend
Feature: BlazeDemo Service API

  Background:

    * configure ssl = true
    * def loginUrl = 'https://api.demoblaze.com/login'
    * def signupUrl = 'https://api.demoblaze.com/signup'

  @Login
  Scenario: Test Login

    Given url loginUrl
    And request { username: 'juanpablo2', password: 'juanpablo1'}
    When method post
    Then status 200
    * print "RESPONSE: ", response

  @errorLogin
  Scenario: Test errorLogin

    Given url loginUrl
    And request { username: 'juanpablo2', password: 'juanpablo2'}
    When method post
    Then status 200
    * print "RESPONSE: ", response

  @signup
  Scenario: Test signup with dynamic username

    Given url signupUrl
    * def dynamicUsername = 'user_' + java.time.LocalDateTime.now().toString().replaceAll(':', '-')
    * print 'El usuario a registrar es: ', dynamicUsername
    And request { username: '#(dynamicUsername)', password: 'abc123'}
    When method post
    Then status 200
    * print "RESPONSE: ", response

  @errorSignup
  Scenario Outline: Test errorSignup

    Given url signupUrl
    And request { username: '<username>', password: '<password>'}
    When method post
    Then status 200
    * print "RESPONSE: ", response
    * match response.errorMessage == '<errorMessage>'

    Examples:
      | username   | password   | errorMessage             |
      | juanpablo2 | juanpablo1 | This user already exist. |


