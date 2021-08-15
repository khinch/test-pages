describe('Hello World Test', () => {
    it('Visits Hello World page', () => {
        cy.visit('http://localhost:8080')
        cy.contains('Hello, World!')
    })
})