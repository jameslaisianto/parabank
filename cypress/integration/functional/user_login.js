context('Actions', () => {

  it('.login() - fill in page', () => {
    cy.visit({
          url:'https://parabank.parasoft.com/parabank/login.htm',
        method: "POST",
        body: {
                username: "tester@gmail.com",
                password: "tester123LetMeIn!"
        }})

  // cy.get('input[name="username"]').type('tester@gmail.com')
  // cy.get('input[name="password"]').type('tester123LetMeIn!')
  //
  // cy.get('[type=submit]').contains('Log In').click()
  })


})
