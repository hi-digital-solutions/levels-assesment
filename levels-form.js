
var formId = '1MRjM3YSFTB3xtxJ1s1uRn1_O7p9NWpJXVwRD-paX6Xc';
var form = FormApp.openById(formId);
form.getItems().map(x => form.deleteItem(x));

function addQuestion(questionText, helpText = '') {
    form.addGridItem()
        .setTitle(questionText)
        .setHelpText(helpText)
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
    addQuestion(
        'They leave things better than they found them',
        `Examples:  
        
        Individual - Adding tests, refactoring existing code, facilitating a more effective retrospective, bringing a topic for team learning.
        
        Team - Helping a teammate learn TDD, improving team norms around story slicing.
        
        Org - Getting teams involved earlier in projects, improving onboarding process for new hires 
        `
    );
    addQuestion(
        'Others seek them out for direction or guidance',
        `Examples:
        
        Individual - Guidance about specific work - "How do I send an email in outlook?", "How did you come up with your problem statement in Initiation?"

        Team - Guidance about team dynamics - "How do you handle collaboration with other teams?", "What do you do when folks on your team can't agree?"

        Org - Guidance about cross-cutting concerns - "How should this project interact with master data?", "What outcomes do we want from Initiation?"
        `
    );
    addSingleQuestion(
        'Others enjoy working with them, and want them on their team'
    ); 
    addQuestion(
        'They demonstrate improvement',
        `Examples:
        
        Individual - Learning C# or Terraform, Knowing when to use dependency injection, better meeting facilitation

        Team - Better cycle time and defect rates, smaller stories, shorter projects

        Org - Identifying blind spots in the org, Learning budget/book stipend, monthly financial review, project slicing 
        
        `
    ); 
    addQuestion(
        'They bring the right people into the organization',
        `Examples:
        
        Individual - Participating in interviews, making referrals 

        Team - Recognizing when someone isn't a good team fit, identifying hiring needs within a team

        Org - Identifying gaps within the org (hiring Erica), improving the hiring process
        `     
    ); // participating in interviews, working on interview process, growing org culture
    addQuestion(
        'They reframe problems to come up with better solutions',
        `Examples:
        
        Individual - Using WireMock for unit tests, rather than wrapping HttpClient

        Team - Coming up with good objectives for projects (Outcomes, not activities)

        Org - Moving scope from one project to another (CIAM/Empower, Costsharing/Integrated Care) 
        `     
    );
    addQuestion(
        'They deliver value quickly, and maximize work not done',
        `Examples:
        
        Individual - Working in vertical slices, not over-architecting

        Team - Identifying and removing silos within a team, having successful demos weekly

        Org - Structuring teams to minimize queues and handoffs, making sure projects are valuable
        `     
    );
    addQuestion(
        'They build consensus, and avoid premature convergence',
        `Examples:
        
        Individual - Coming up with at least 3 possible solutions to a problem, spiking out technical solutions

        Team - Disagree and commit, Experimenting, "How will we know this is the right thing?", hearing from everyone, not just the loudest person

        Org - Levels, Soliciting feedback about DS rolling into HISC
        `     
    );
    addSingleQuestion(
        'They have conversations at the right level of detail, and bring clarity to discussions',
    );
    addQuestion(
        'They think about total cost of ownership, and optimize for overall value',
        `Examples:
        
        Individual - Estimating Azure costs for technical designs, including support team in work planning

        Team - Providing cost and value estimates for projects, considering team cost, knowing touch time versus wait time

        Org - Budgeting for overhead and learning, making sure maintenance costs are included in Closure
        `     
    );
    addQuestion(
        'They create simple systems',
        `Examples:
        
        Individual - Single responsibility principle, clear domain boundaries between models, shared Teams channels for communication

        Team - lightweight-but-accurate estimation, working as close to "stickies on a wall" as possible (Trello vs Jira)

        Org - Giving everyone a company credit card, routing IT Support work directly to teams
        `     
    );
    addQuestion(
        'They create systems to remove business constraints',
        `Examples:
        
        Individual - Asking "What would happen if we ran this process daily instead of weekly?", Designing for self-service

        Team - Scheduling offsites to allow business owners time away from their "day job"

        Org - Designing teams to minimize handoffs and queues, managing shared services
        `     
    );
    addQuestion(
        'They can manage time and logistics',
        `Examples:
        
        Individual - Being on time to meetings, providing agendas/documents ahead of time, filling out timesheets, communicating PTO

        Team - Getting all the right people in the room, managing deadlines, handling dependencies

        Org - Balancing PTO and overhead against profit, estimating cost/benefit of external clients
        `     
    );
    addQuestion(
        'They do the right thing without being asked',
        `Examples:
        
        Individual - Refactoring, working through interpersonal issues, asking for help or raising up blockers

        Team - Making work visible, tracking flow metrics, making time for improvement

        Org - Creating clear processes, rather than decisions
        `     
    );
}