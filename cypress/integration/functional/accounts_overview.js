context('Actions', () => {
  beforeEach(() => {
    cy.visit({
          url:'https://parabank.parasoft.com/parabank/login.htm',
        method: "POST",
        body: {
                username: "tester@gmail.com",
                password: "tester123LetMeIn!"
        }})
  })
  it('.openAccountOverview() - log in and open account overview page', () => {
    cy.contains('Accounts Overview').click()
    cy.wait(2000)
  })
})
