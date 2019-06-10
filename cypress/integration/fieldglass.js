describe('Timesheet filling against fieldglass', () => {
    let config;
    before((done) => {
        const configFile = process.env.CFG_FILE || "fieldglass_config.json";
        cy.fixture(configFile).then((cfg) => {
            config = cfg;
            done();
        });
    })
    it('goes to fieldglass website and waits for the input to be visible', () => {
        console.log(`Logging into ${config.url}`);
        cy.visit(config.url);
        cy.get('#usernameId_new').click();
    });
    it('fills in the user credentials', () => {
        cy.get('#usernameId_new').type(config.creds.username);
        cy.get('#passwordId_new').type(config.creds.password);
        cy.get("#passwordId_new").type('{enter}');
    });
    it('goes the latest timesheet to be filled', () => {
        cy.get('a').contains('Complete Time Sheet').click();
        cy.get('#usernameId_new').type(config.creds.username);
        cy.get('#passwordId_new').type(config.creds.password);
        cy.get("#passwordId_new").type('{enter}');
        cy.get('[name="timein00"]').click();
    })
    it('fills in the timesheet for the week', () => {
        for (let i=0; i<5; i++) {
            cy.get(`input[name="timein0${i}"]`).type(config.timesheet.time_in);
            cy.get('li').contains(config.timesheet.time_in).scrollIntoView().click({force: true});

            cy.get("th.captionBig").contains("Day").click();

            cy.get(`input[name="timein1${i}"]`).type(config.timesheet.out_for_lunch);
            cy.get('li').contains(config.timesheet.out_for_lunch).scrollIntoView().click({force: true});

            cy.get("th.captionBig").contains("Day").click();

            cy.get(`input[name="timein2${i}"]`).type(config.timesheet.back_from_lunch);
            cy.get('li').contains(config.timesheet.back_from_lunch).scrollIntoView().click({force: true});

            cy.get("th.captionBig").contains("Day").click();

            cy.get(`input[name="timein7${i}"]`).type(config.timesheet.time_out);
            cy.get('li').contains(config.timesheet.time_out).scrollIntoView().click({force: true});

            cy.get("th.captionBig").contains("Day").click();
        }
    })
    it("clicks on continue later button", () => {
        cy.get("input#fgTSSubmit").click();
    })
})