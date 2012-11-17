sc_require('models/todo');
 
TodosThree.Todo.FIXTURES = [
 {
   guid: 0,
   isCompleted: YES,
   title: 'Add a SHOWING_APP state'
 },
 {
   guid: 1,
   isCompleted: YES,
   title: 'Edit the buildfile'
 },
 {
   guid: 2,
   isCompleted: YES,
   title: 'Add a TodosThree app'
 },
 {
   guid: 3,
   isCompleted: YES,
   title: 'Install SproutCore'
 }
];; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_three');