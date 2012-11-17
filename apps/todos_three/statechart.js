TodosThree.statechart = SC.Statechart.create({
	trace: YES,
	rootState: SC.State.design({
		initialSubstate: "READY",

		READY: SC.State.plugin('TodosThree.READY_IN'),

		LOGGING_IN: SC.State.plugin('TodosThree.LOGGING_APP'),

		SHOWING_APP: SC.State.plugin('TodosThree.SHOWING_APP'),

		SHOWING_DESTROY_CONFIRMATION: SC.State.plugin('TodosThree.SHOWING_DESTROY_CONFIRMATION')
	})
  
  // someOtherState: SC.State.plugin('TodosThree.SomeOtherState')

});