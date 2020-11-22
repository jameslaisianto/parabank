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
  it('.openNewAccount() - log in and open new account', () => {
    cy.contains('Open New Account').click()
    cy.wait(2000)
  })
  it('.createChecking() - open new checking account', () => {
  cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
  cy.get('select').get('select[id=type]').select('CHECKING').should('have.value', '0')
  cy.wait(2000)
  cy.get('[type=submit]').contains('Open New Account').click()
  cy.wait(3000)
  })

  it('.createSaving() - open new saving account', () => {
  cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
  cy.get('select').get('select[id=type]').select('SAVINGS').should('have.value', '1')
  cy.wait(2000)
  cy.get('[type=submit]').contains('Open New Account').click()
  cy.wait(3000)
  })
})
