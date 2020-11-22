context('Actions', () => {
  //Account Registration
  it('.goToRegisterPage() - visit register page', () => {
  cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  })

  it('.insertNewCustomer() - fill in form for new customer account', () => {
  cy.wait(2000)
  cy.get('input[name="customer.firstName"]').type('James')
  cy.get('input[name="customer.lastName"]').type('Laisianto')
  cy.get('input[name="customer.address.street"]').type('14 Pacific Rd Blvd')
  cy.get('input[name="customer.address.city"]').type('Narnia')
  cy.get('input[name="customer.address.state"]').type('US')
  cy.get('input[name="customer.address.zipCode"]').type('1852741')
  cy.get('input[name="customer.phoneNumber"]').type('6049153511')
  cy.get('input[name="customer.ssn"]').type('784562154')

  cy.get('input[name="customer.username"]').type('test@gmail.com')
  cy.get('input[name="customer.password"]').type('tester123LetMeIn!')
  cy.get('input[name="repeatedPassword"]').type('tester123LetMeIn!')

  cy.get('[type=submit]').contains('Register').click()
  })

})

context('Actions', () => {
beforeEach(() => {
  cy.visit({
        url:'https://parabank.parasoft.com/parabank/login.htm',
      method: "POST",
      body: {
              username: "test@gmail.com",
              password: "tester123LetMeIn!"
      }})
})
  //New Account for Checking and Savings
  it('.createChecking() - open new checking account', () => {
  cy.contains('Open New Account').click()
  cy.get('select').get('select[id=type]').select('CHECKING').should('have.value', '0')
  cy.wait(2000)
  cy.get('[type=submit]').contains('Open New Account').click()
  // Cypress.env("accountNumberChecking", cy.get('a[id=newAccountId]'))
  cy.wait(3000)
  })

  it('.createSaving() - open new saving account', () => {
  cy.contains('Open New Account').click()
  cy.get('select').get('select[id=type]').select('SAVINGS').should('have.value', '1')
  cy.wait(2000)
  cy.get('[type=submit]').contains('Open New Account').click()
  cy.wait(3000)
  })

  //Accounts Overview
  it('.openAccountOverview() - log in and open account overview page', () => {
    cy.contains('Accounts Overview').click()
    cy.wait(2000)
  })

  it('.clickOldestAccount() - check account to ensure it can be opened', () => {
    cy.contains('Accounts Overview').click()
    cy.get(':nth-child(1) > :nth-child(1) > .ng-binding').click()
    cy.wait(2000)
  })

  //Transfer Funds
  it('.openTransferFunds() - log in and open transfer funds page', () => {
    cy.contains('Transfer Funds').click()
    cy.wait(2000)
  })

  it('.transferAFund() - transfer $100 from one account to another', () => {
    cy.contains('Transfer Funds').click()
    cy.wait(2000)
    cy.get('input[id="amount"]').type('100')
    // cy.get('select').get('select[id=toAccountId]').select(Cypress.env('accountNumberChecking')).should('have.value', Cypress.env('accountNumberChecking'))
    cy.get('[type=submit]').contains('Transfer').click()
    cy.wait(2000)
  })

  it('.openBillPay() - log in and open new account', () => {
    cy.contains('Bill Pay').click()
    cy.wait(2000)
  })

  //Bill Payment
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

  //Find transactions
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

  //Logout
  it('.logOut() - log out from page', () => {
  cy.contains('Log Out').click()
  })
})

context('Actions', () => {
  //LoginLogout
  it('.loginAndOut() - log in and out from page', () => {
  cy.get('input[name="username"]').type('tester@gmail.com')
  cy.get('input[name="password"]').type('tester123LetMeIn!')

  cy.get('[type=submit]').contains('Log In').click()
  cy.contains('Log Out').click()
  })
})
