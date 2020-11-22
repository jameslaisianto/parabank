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
  it('.openTransferFunds() - log in and open transfer funds page', () => {
    cy.contains('Transfer Funds').click()
    cy.wait(2000)
  })

  it('.transferAFund() - transfer $100 from one account to another', () => {
    cy.contains('Transfer Funds').click()
    cy.wait(2000)
    cy.get('input[id="amount"]').type('100')
    // const account = cy.get(':nth-child(3) > #toAccountId')
    // cy.get('select').get('select[id=toAccountId]').select(account)
    cy.get('[type=submit]').contains('Transfer').click()
    cy.wait(2000)
  })
})
