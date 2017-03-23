sap.ui.controller("demo.controller.SmartTable", {
	onInit: function() {

		oModel = new sap.ui.model.odata.ODataModel("", true);
		oModel.setCountSupported(false);
		this.getView().setModel(oModel);
		console.log(oModel);
	},
	onExit: function() {
	}
});

