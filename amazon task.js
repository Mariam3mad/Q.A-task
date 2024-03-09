describe('Amazon task ', ()=>{
    it('should filter by samsung brand in computers and tablets in computers in shop by department ', ()=>{
        cy.viewport(1000, 660)
        cy.visit('https://amazon.com/')
         cy.get('.hm-icon').click().wait(2000)
         cy.get('.hmenu-visible > :nth-child(8) > .hmenu-item').click().wait(2500)
         cy.get(':nth-child(34) > :nth-child(5) > .hmenu-item').click().wait(2500)
         cy.get('#nav-search-submit-button').click()
         cy.contains('SAMSUNG').click();
         cy.get('[data-asin="B0CQ3RRS23"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus').click()
         cy.get('#add-to-cart-button').click().wait(2500)
         cy.get('#nav-cart-count').should('contain', '1').click()
         cy.get('.sc-action-delete > .a-declarative > .a-color-link').click()
         cy.get('#nav-cart-count').should('contain', '0').click()
    	    });
});
