
var form = FormApp.create('DS Levels Assessment');

function addQuestion() {
    form.addScaleItem()
        .setTitle('Test')
        .setBounds(1, 5)
        .setLabels('Strongly Disagree', 'Strongly Agree')
}

function main() {
    addQuestion();
}