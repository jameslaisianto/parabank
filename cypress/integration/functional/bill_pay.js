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
  it('.openBillPay() - log in and open new account', () => {
    cy.contains('Bill Pay').click()
    cy.wait(2000)
  })

  it('.enterPayeeInformation() - fill in page for payee', () => {
  cy.contains('Bill Pay').click()
  cy.get('input[name="payee.name"]').type('AFC')
  cy.get('input[name="payee.address.street"]').type('14 Backstreet Rd')
  cy.get('input[name="payee.address.city"]').type('Atlantis')
  cy.get('input[name="payee.address.state"]').type('IDN')
  cy.get('input[name="payee.address.zipCode"]').type('1814231')
  cy.get('input[name="payee.phoneNumber"]').type('6041562510')

  cy.get('input[name="payee.accountNumber"]').type('204940')
  cy.get('input[name="verifyAccount"]').type('204940')

  cy.get('input[name="amount"]').type('100')

  cy.get('[type=submit]').contains('Send Payment').click()
  })

})
