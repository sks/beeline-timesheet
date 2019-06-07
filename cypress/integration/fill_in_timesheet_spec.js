describe('Filling in the timesheet', () => {
    let config;
    before((done) => {
        cy.clearCookies();
        const configFile = process.env.CFG_FILE || "config.json";
        cy.fixture(configFile).then((cfg) => {
            config = cfg;
            done();
        });
    })
    it('goes to beeling website and waits for the input to be visible', () => {
        console.log(`Logging into ${config.url}`);
        cy.visit(config.url);
        cy.get('#beelineForm_UserLoginForm_userNameText').click();
    });
    it('fills in the user credentials', () => {
        cy.get('#beelineForm_UserLoginForm_userNameText').type(config.creds.username);
        cy.get('#beelineForm_UserLoginForm_passwordText').type(config.creds.password);
        cy.get("#loginButton").click();
    });
    it('should have logged in the user in', () => {
        config.timesheet.forEach((t) => {
            cy.get(".TimeAndExpenseTextBox").type(t.market);
            cy.get("#Assignment_0_AssignmentDetail_0_TimesheetRowGroup_1_Task_0_ProjectComboSelector_ItemsDiv").click();
            cy.get("#Assignment_0_AssignmentDetail_0_TimesheetRowGroup_1_Task_0_TaskComboSelector_Input").type(t.project);
            cy.get("#Assignment_0_AssignmentDetail_0_TimesheetRowGroup_1_Task_0_TaskComboSelector_beelineComboSelectorItem_73270_Onboarding_Lots").click();
            for(let i=0;i<5;i++){
                cy.get(`#Assignment_0_AssignmentDetail_0_TimesheetRowGroup_1_Task_0_EntryTextBox_${i}`).click();
                cy.get("#timesheetEntryControl_TimeInTextBox").type("08:00 AM");
                cy.get("#timesheetEntryControl_TimeOutTextBox").type("04:30 PM");
                cy.get("#timesheetEntryControl_BreakComboSelector_Input").type(30);
                cy.get("#timesheetEntryControl_BreakComboSelector_beelineComboSelectorItem_30").click();
                cy.get("#Assignment_0_AssignmentDetail_0_TimesheetRowGroup_1_Fieldset").click();
            }
            cy.get("#saveTimesheetButton").click();
            // cy.get("#submitTimesheetButton").click()
        });
    });
});
