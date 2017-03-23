sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/unified/ShellHeadItem",
	"sap/m/Title"
], function (UIComponent, JSONModel, ResourceModel, ShellHeadItem,Title) {
	"use strict";
 
	return UIComponent.extend("demo.Component", {
 
		metadata : {
			rootView: "demo.view.App"
		},
 
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
 
			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
//			Lanchepad Shell 设置
			var oShell = sap.ui.getCore().byId("shell");
			var oTitle = new Title({
				text : "TitleText"
			});
			//oShell.setHeader(oTitle);
//			get Shell header
			var oShellHeader = oShell.getHeader();
			console.log(oShellHeader);
			
			//oShell.setSearchVisible(false);
//			var oHeaderItems = oShell.getHeadItems();
//			for(var i=0;i<oHeaderItems.length;i++){
//				console.log(oHeaderItems[i]);
//				oHeaderItems[i].setVisible(false);
//			}
			var oHeadEndItems = oShell.getHeadEndItems();
			for(var i=0;i<oHeadEndItems.length;i++){
				console.log(oHeadEndItems[i]);
				oHeadEndItems[i].setVisible(false);
			}
//			var newHeaderItem = new ShellHeadItem({
//				title : "newHeaderItem",
//				icon: "sap-icon://home"
//			});
//			oShell.insertHeadEndItem(newHeaderItem, 0);
//			console.log(oShell);
			
			//console.log(shell);
			
			// set i18n model
			var i18nModel = new ResourceModel({
				bundleName : "demo.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}
	});
 
});