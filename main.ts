import { Graph } from './Graph';
import { Question } from './Question';

const graph = new Graph();

// Questions related to basic computer troubleshooting
const questions = [
    new Question("Q1", "Is your computer turned on?"),
    new Question("Q2", "Is the monitor turned on?"),
    new Question("Q3", "Are all cables connected properly?"),
    new Question("Q4", "Is the operating system loading up?"),
    new Question("Q5", "Are you able to log in to your user account?"),
    new Question("Q6", "Is the internet working on other devices?"),
    new Question("Q7", "Are there any unusual noises coming from the computer?"),
    new Question("Q8", "Is the computer overheating?"),
    new Question("Q9", "Are error messages appearing on the screen?"),
    new Question("Q10", "Have you tried restarting your computer?")
];

// Adding questions to the graph
questions.forEach(question => graph.addQuestion(question));

// Establishing paths between questions
// This is a simplified example - adjust the paths according to your logic
graph.addPath(questions[0], questions[1]);
graph.addPath(questions[1], questions[2]);
graph.addPath(questions[1], questions[6]);
graph.addPath(questions[2], questions[3]);
graph.addPath(questions[3], questions[4]);
graph.addPath(questions[4], questions[5]);
graph.addPath(questions[5], questions[6]);
graph.addPath(questions[6], questions[7]);
graph.addPath(questions[7], questions[8]);
graph.addPath(questions[8], questions[9]);

// Calling the describe method to print the graph
graph.describe();
