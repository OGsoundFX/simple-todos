import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'Read a book' },
    { text: 'Do some exercise' },
    { text: 'Clean kitchen' },
  ],
  priorities: [
    { text: 'high' },
    { text: 'medium' },
    { text: 'low' },
  ],
});