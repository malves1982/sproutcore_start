TodosThree.main = function () {
  TodosThree.statechart.initStatechart();
};
 
function main() { TodosThree.main(); }; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_three');