
var form = FormApp.create('DS Levels Assessment');

function addQuestion(questionText) {
    var section = form.addPageBreakItem();
    section.setHelpText(questionText)
    form.addScaleItem()
        .setTitle('... individual work')
        .setBounds(1, 5)
        .setLabels('Strongly Disagree', 'Strongly Agree')
    form.addScaleItem()
        .setTitle('... team work and dynamics')
        .setBounds(1, 5)
        .setLabels('Strongly Disagree', 'Strongly Agree')
    form.addScaleItem()
        .setTitle('... organizational')
        .setBounds(1, 5)
        .setLabels('Strongly Disagree', 'Strongly Agree')
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