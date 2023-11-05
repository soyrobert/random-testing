describe('Monkey Testing with random events on https://losestudiantes.co', () => {
  it('navigates through the site and interacts with random elements', () => {
    cy.visit('https://losestudiantes.co');
    cy.wait(1000);

    randomEvent(10); 
  });
});

function randomEvent(eventsLeft) {
    if (eventsLeft <= 0) {
      return; 
    }
  
    let actions = [
      clickRandomLink,
      fillRandomInput,
      selectRandomDropdown,
      clickRandomButton
    ];
    
    const action = actions[Cypress._.random(0, actions.length - 1)];
  
    if (typeof action === 'function') {
      action().then(() => {
        randomEvent(eventsLeft - 1);
      });
    }
  }
  
  
function randomClick(monkeysLeft) {
    if (monkeysLeft > 0) {
      cy.get('body').then($body => {
        if ($body.find('a').length) {
          cy.get('a').filter(':visible').then($links => {
            const randomIndex = Cypress._.random(0, $links.length - 1);
            const randomLink = $links.eq(randomIndex);
            if (Cypress.dom.isVisible(randomLink)) {
              cy.wrap(randomLink).click({ force: true });
              cy.wait(1000);
              randomClick(monkeysLeft - 1);
            } else {
              cy.wait(1000);
              randomClick(monkeysLeft);
            }
          });
        } else {
          cy.wait(1000);
          randomClick(monkeysLeft - 1);
        }
      });
    }
  }
  

function clickRandomLink() {
  return cy.get('body').then($body => {
    if ($body.find('a').length) {
      cy.get('a').filter(':visible').click({ multiple: true, force: true });
    } else {
        return cy.noop();
    }
  });
}

function fillRandomInput() {
  return cy.get('body').then($body => {
    if ($body.find('input:visible:not([type="hidden"])').length) {
      cy.get('input:visible:not([type="hidden"])').then($inputs => {
        const randomInput = $inputs.eq(Cypress._.random(0, $inputs.length - 1));
        cy.wrap(randomInput).type('Random text!', { force: true });
      });
    } else {
        return cy.noop();
    }
  });
}

function selectRandomDropdown() {
  return cy.get('body').then($body => {
    if ($body.find('select').length) {
      cy.get('select').then($selects => {
        const visibleSelects = $selects.filter(':visible');
        if (visibleSelects.length) {
          const randomSelect = visibleSelects.eq(Cypress._.random(0, visibleSelects.length - 1));
          const optionsCount = Cypress.$(randomSelect).children('option').length;
          const randomOption = Cypress._.random(0, optionsCount - 1);
          cy.wrap(randomSelect).select(randomOption, { force: true });
        }
      });
    } else {
        return cy.noop();
    }
  });
}

function clickRandomButton() {
  return cy.get('body').then($body => {
    if ($body.find('button').length) {
      cy.get('button').filter(':visible').then($buttons => {
        const randomButton = $buttons.eq(Cypress._.random(0, $buttons.length - 1));
        cy.wrap(randomButton).click({ force: true });
      });
    } else {
        return cy.noop();
    }
  });
}
