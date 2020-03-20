
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
    addQuestion('This person does great at ______');
    addQuestion('For _____, this person is OK');
}