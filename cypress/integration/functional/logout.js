context('Actions', () => {
  it('.insertRightCredentials() - fill in page', () => {
    cy.visit({
          url:'https://parabank.parasoft.com/parabank/login.htm',
        method: "POST",
        body: {
                username: "tester@gmail.com",
                password: "tester123LetMeIn!"
        }})
      })
  it('.logOut() - log out from page', () => {
  cy.contains('Log Out').click()
  })
})
