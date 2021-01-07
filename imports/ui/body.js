import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
    tasks() {
        return Tasks.find({});
      },
});
 
// Template.body.helpers({
//   tasks: [
//     { text: 'Read a book' },
//     { text: 'Do some exercise' },
//     { text: 'Clean kitchen' },
//   ],
// });
