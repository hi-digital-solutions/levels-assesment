
var formId = '1MRjM3YSFTB3xtxJ1s1uRn1_O7p9NWpJXVwRD-paX6Xc';
var form = FormApp.openById(formId);
form.getItems().map(x => form.deleteItem(x));

function addQuestion(questionText) {
    form.addGridItem()
        .setTitle(questionText)
        .setRows(['For individual work', 'At the team level', 'At the organizational level'])
        .setColumns(['Almost Never', 'Seldom', 'Sometimes', 'Often', 'Almost Always']);
}

function main() {
    addQuestion('They leave things better than they found them');
    addQuestion('Others come to them for direction or guidance');
    addQuestion('Others enjoy working with them, and want them on their team');
    addQuestion('They demonstrates improvement');
    addQuestion('They bring the right people into the organization');
    addQuestion('They reframe problems to come up with better solutions');
    addQuestion('They deliver value quickly, and maximize work not done');
    addQuestion('They know when to build consensus, and can recognize premature convergence');
    addQuestion('They have conversations at the right level of detail, and bring clarity to discussions');
    addQuestion('They think about total cost of ownership, and optimize for overall value');
    addQuestion('They design simple systems');
    addQuestion('They design systems to remove business constraints');
    addQuestion('They can manage time and logistics');
    addQuestion('They are proactive in doing the right thing without being asked; they take ownership');
}