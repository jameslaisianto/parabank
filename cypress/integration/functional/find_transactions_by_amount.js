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
  it('.findByDate() - log in and open new account', () => {
    cy.contains('Find Transactions').click()
    const todaysDate = Cypress.moment().format('MM-DD-YYYY')
    cy.get('input[id="criteria.onDate"]').type(todaysDate)
    cy.get(':nth-child(9) > .button').contains('Find Transactions').click()
    cy.wait(2000)
  })
  it('.findByDateRange() - 1 month log in and open new account', () => {
    cy.contains('Find Transactions').click()
    const todaysDate = Cypress.moment().format('MM-DD-YYYY')
    const dayOneThisMonth = Cypress.moment().format('MM-01-YYYY')
    cy.get('input[id="criteria.fromDate"]').type(dayOneThisMonth)
    cy.get('input[id="criteria.toDate"]').type(todaysDate)
    cy.get(':nth-child(13) > .button').contains('Find Transactions').click()
    cy.wait(2000)
  })
  it('.findByAmount() - find by amount of transaction', () => {
    cy.contains('Find Transactions').click()
    cy.get('input[id="criteria.amount"]').type(100)
    cy.get(':nth-child(17) > .button').contains('Find Transactions').click()
    cy.wait(2000)
  })
})
