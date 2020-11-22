context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  })
//Wrong Register
//existing Register
//different repeatedPassword
//empty form
  // it('.visitRegister() - visit register page', () => {
  // cy.contains('Register').click()
  // })

  it('.insertRightCredentials() - fill in page', () => {
  cy.get('input[name="customer.firstName"]').type('Robert')
  cy.get('input[name="customer.lastName"]').type('Kiyosaki')
  cy.get('input[name="customer.address.street"]').type('43 Pacific Rd Blvd')
  cy.get('input[name="customer.address.city"]').type('Narnia')
  cy.get('input[name="customer.address.state"]').type('US')
  cy.get('input[name="customer.address.zipCode"]').type('1852641')
  cy.get('input[name="customer.phoneNumber"]').type('6049153510')
  cy.get('input[name="customer.ssn"]').type('784562153')


  cy.get('input[name="customer.username"]').type('tester@gmail.com')
  cy.get('input[name="customer.password"]').type('tester123LetMeIn!')
  cy.get('input[name="repeatedPassword"]').type('tester123LetMeIn!')

  cy.get('[type=submit]').contains('Register').click()
  })


})
