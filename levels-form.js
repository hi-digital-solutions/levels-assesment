
var formId = '1MRjM3YSFTB3xtxJ1s1uRn1_O7p9NWpJXVwRD-paX6Xc';
var form = FormApp.openById(formId);
form.getItems().map(x => form.deleteItem(x));

function addQuestion(questionText) {
    form.addGridItem()
        .setTitle(questionText)
        .setRows(['At the individual level', 'At the team level', 'At the organizational level'])
        .setColumns(['Almost Never', 'Seldom', 'Sometimes', 'Often', 'Almost Always']);
}

function addSingleQuestion(questionText) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(questionText)
        .setChoices([
            item.createChoice('Almost Never'),
            item.createChoice('Seldom'),
            item.createChoice('Sometimes'),
            item.createChoice('Often'),
            item.createChoice('Almost Always')
         ]);
}

function main() {
    var item = form.addListItem();
    item.setTitle('Who are you evaluating?')
        .setChoices([
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***'),
            item.createChoice('***REMOVED***')
         ])
    addQuestion('They leave things better than they found them');
    addQuestion('Others seek them out for direction or guidance');
    addSingleQuestion('Others enjoy working with them, and want them on their team'); 
    addQuestion('They demonstrate improvement'); 
    addQuestion('They bring the right people into the organization'); // participating in interviews, working on interview process, growing org culture
    addQuestion('They reframe problems to come up with better solutions');
    addQuestion('They deliver value quickly, and maximize work not done');
    addQuestion('They build consensus, and avoid premature convergence');
    addQuestion('They have conversations at the right level of detail, and bring clarity to discussions');
    addQuestion('They think about total cost of ownership, and optimize for overall value');
    addQuestion('They create simple systems');
    addQuestion('They create systems to remove business constraints');
    addQuestion('They can manage time and logistics');
    addQuestion('They do the right thing without being asked');
}