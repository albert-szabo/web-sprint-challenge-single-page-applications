describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })

    const nameInput = () => cy.get('input[name=name]');
    const sausageCheckbox = () => cy.get('input[name=sausage]');
    const onionsCheckbox = () => cy.get('input[name=onions]');
    const hamCheckbox = () => cy.get('input[name=ham]');
    const pineappleCheckbox = () => cy.get('input[name=pineapple]');
    const addOrderButton = () => cy.get(`button[id='order-button']`);

    it('Sanity check to make sure tests work', () => {
        expect(99 * 99).to.equal(9801);
        expect(45 / 15 ).not.to.equal(2);
    })

    it('Check that the proper elements are showing', () => {
        nameInput().should('exist');
        sausageCheckbox().should('exist');
        onionsCheckbox().should('exist');
        hamCheckbox().should('exist');
        pineappleCheckbox().should('exist');
        addOrderButton().should('exist');

        cy.contains('Add to Order').should('exist');
    })

    // test that you can add text to the box
    // test that you can select multiple toppings
    // test that you can submit the form

    describe('Filling out the name box', () => {
        it('Can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('Can type in name box', () => {
            nameInput()
                .should('have.value', '')
                .type('firstName lastName')
                .should('have.value', 'firstName lastName');
        })
    })

    describe('Checking the toppings checkboxes', () => {
        it('Can check the sausage checkbox', () => {
            sausageCheckbox().click();
            sausageCheckbox().should('have.value', 'on');
        })

        it('Can check the onions checkbox', () => {
            onionsCheckbox().click();
            onionsCheckbox().should('have.value', 'on');
        })

        it('Can check the ham checkbox', () => {
            hamCheckbox().click();
            hamCheckbox().should('have.value', 'on');
        })

        it('Can check the pineapple checkbox', () => {
            pineappleCheckbox().click();
            pineappleCheckbox().should('have.value', 'on');
        })
    })

    describe('Can submit the form', () => {
        it('Can click the add order button', () => {
            addOrderButton().click();
        })
    })
})