TodosThree = SC.Application.create(
  /** @scope TodosThree.prototype */ {
 
  NAMESPACE: 'TodosThree',
  VERSION: '0.1.0',
 
  store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_three');