import { Graph } from './Graph';
import { Question } from './Question';
import { Workflow } from './Workflow';
import { Answer } from './Answer';

const workflow = new Workflow();

// Create Questions
const questions = [
    new Question("Q1", "Is the computer turned on?"),
    new Question("Q2", "Is the monitor turned on?"),
];

// Add Questions to Workflow
questions.forEach(question => workflow.addQuestion(question));

// Set up paths with conditions
// For simplicity, I'm using string answers and straightforward conditions
workflow.addPath("Q1", "Q2", (answer: Answer) => answer === "yes");
// ... other paths with conditions ...

// Set Answers to Some Questions
let q1 = workflow.getQuestion("Q1");
if (q1) {
    q1.setAnswer("yes");
}

// ... set more answers as needed ...

// Check Traversal Possibility
if (workflow.canTraverse("Q1", "Q2")) {
    console.log("Traversal from Q1 to Q2 is possible.");
} else {
    console.log("Traversal from Q1 to Q2 is not possible.");
}
