
var formId = '1MRjM3YSFTB3xtxJ1s1uRn1_O7p9NWpJXVwRD-paX6Xc';
var form = FormApp.openById(formId);
form.getItems().map(form.deleteItem);

function addQuestion(questionText) {
    form.addGridItem();
        item.setTitle(questionText)
        .setRows(['For individual work', 'At the team level', 'At the organizational level'])
        .setColumns(['Almost Never', 'Seldom', 'Sometimes', 'Often', 'Almost Always']);
}

function main() {
    addQustion('You leave things better than you found them');
    addQustion('Others come to you for direction or guidance');
    addQustion('Others enjoy working with you, and want you on their team');
    addQustion('You demonstrate improvement');
    addQustion('You bring the right people into the organization and/or team');
    addQustion('You reframe problems to come up with better solutions');
    addQustion('You demonstrate the ability to deliver value quickly, and maximize work not done');
    addQustion('You know when to build consensus, and can recognize premature convergence');
    addQustion('You have conversations at the right level of detail, and bring clarity to discussions');
    addQustion('You think about total cost of ownership, and optimize for overall value');
    addQustion('You design simple systems');
    addQustion('You design systems to remove business constraints');
    addQustion('You can manage time and logistics');
    addQustion('You are proactive in doing the right thing without being asked; you take ownership');
}