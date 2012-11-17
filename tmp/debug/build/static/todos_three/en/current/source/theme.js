TodosThree.Theme = SC.AceTheme.create({
  name: 'todos-three'
});
 
SC.Theme.addTheme(TodosThree.Theme);
 
SC.defaultTheme = 'todos-three';; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_three');