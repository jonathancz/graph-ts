import { Graph } from './Graph';
import { Question } from './Question';

const graph = new Graph();

// Adding questions to the graph
const question1 = new Question("Q1", "What is your favorite color?");
const question2 = new Question("Q2", "What is your quest?");
const question3 = new Question("Q3", "What is the air-speed velocity of an unladen swallow?");

graph.addQuestion(question1);
graph.addQuestion(question2);
graph.addQuestion(question3);

// Establishing paths between questions
graph.addPath(question1, question2);
graph.addPath(question1, question3);

// Calling the describe method to print the graph
graph.describe();
