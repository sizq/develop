var settlementReportDetailsColumns = ["fee_name","merchand_id", "site_user", "site_name", "posted_date", "acc_date","settlement_id", "order_id", "settlement_type", "settlement_description", "transaction_type", "sku", "prdt_code", "prdt_name","snm", "qty", "fulfillment_id", "fulfillment_name","account_type", "tax_collection_model", "product_sales", "product_sales_tax","shipping_credits","shipping_credits_tax", "gift_wrap_credits", "giftwrap_credits_tax", "promotional_rebates","promotional_rebates_tax", "marketplace_withheld_tax", "sales_tax_collected", "selling_fees", "fba_fees", "amtn_points_granted", "other_transaction_fees", "other","marketplace_facilitator_tax","low_value_goods", "total", "currency", "sw_order", "is_return_back", "cancel_return_reason","cancel_user","cancel_date","afs_regist_id","created_user_name","created", "modified","properties_name","spc","prdt_type_name","wh_code","wh_name","invalid_memo","memo_info", "send_date"];
var settlementReportDetailsExtends = ["src_id","wms_no"];
var settlementReportSummaryColumns = ["site_user", "site_name", "settlement_type", "tax_collection_model", "product_sales", "product_sales_tax", "shipping_credits", "shipping_credits_tax", "gift_wrap_credits","giftwrap_credits_tax", "promotional_rebates", "promotional_rebates_tax","marketplace_withheld_tax", "sales_tax_collected", "selling_fees", "fba_fees", "amtn_points_granted", "other_transaction_fees", "other","marketplace_facilitator_tax","low_value_goods", "total", "currency"];
var settlementReportSummaryExtends = [];
var settlementReportDetailsCustoms = [];
var settlementReportDetailsVisible = [];
var settlementReportSummaryCustoms = [];
var settlementReportSummaryVisible = [];

var customerReturnsDetailsColumns = ["merchand_id", "site_user", "site_name", "fulfillment_name", "back_date" , "back_date_str" , "order_id", "asin", "fnsku", "sku", "prdt_code", "product_name", "qty", "amtn_refunds", "currency", "fulfillment_center", "detailed_disposition", "reason","fulfillment_id", "status", "wh_code", "wh_name", "afs_regist_id", "created", "modified","prdt_name","snm", "prdt_type_name","properties_name","spc"];
var customerReturnsDetailsExtends = [];
var customerReturnsSummaryColumns = ["fnsku", "sku", "prdt_code","snm", "prdt_type_name", "product_name", "qty", "wh_code", "wh_name", "afs_regist_id"];
var customerReturnsSummaryExtends = [];
var customerReturnsDetailsCustoms = [];
var customerReturnsDetailsVisible = [];
var customerReturnsSummaryCustoms = [];
var customerReturnsSummaryVisible = [];

var inventoryAdjustmentsDetailsColumns = ["wh_code", "wh_name", "adjusted_date","adjusted_date_str", "item_id", "fnsku", "sku", "prdt_code", "product_name", "qty", "fulfillment_center", "reason", "disposition", "stk_dec_no", "stk_inc_no", "created", "modified","prdt_name","properties_name","spc","reason_memo","reason_group"];
var inventoryAdjustmentsDetailsExtends = [];
var inventoryAdjustmentsSummaryColumns = ["wh_code", "wh_name", "fnsku", "sku", "prdt_code", "product_name", "qty", "stk_dec_no", "stk_inc_no"];
var inventoryAdjustmentsSummaryExtends = [];
var inventoryAdjustmentsDetailsCustoms = [];
var inventoryAdjustmentsDetailsVisible = [];
var inventoryAdjustmentsSummaryCustoms = [];
var inventoryAdjustmentsSummaryVisible = [];

var removalOrderDetailDetailsColumns = ["wh_code", "wh_name", "request_date","request_date_str", "order_id", "order_type", "order_status", "fnsku", "sku", "prdt_code", "disposition", "requested_qty", "shipped_qty", "cancelled_qty", "disposed_qty", "in_process_qty", "removal_fee", "currency", "region", "stk_dec_no", "created", "modified","prdt_name","properties_name","spc"];
var removalOrderDetailDetailsExtends = [];
var removalOrderDetailSummaryColumns = ["wh_code", "wh_name", "fnsku", "sku", "prdt_code", "requested_qty", "shipped_qty", "cancelled_qty", "disposed_qty", "in_process_qty", "stk_dec_no"];
var removalOrderDetailSummaryExtends = [];
var removalOrderDetailDetailsCustoms = [];
var removalOrderDetailDetailsVisible = [];
var removalOrderDetailSummaryCustoms = [];
var removalOrderDetailSummaryVisible = [];

var restockInventoryDetailsColumns = ["wh_code", "wh_name", "compile_date", "sku", "fnsku", "asin", "prdt_code", "product_name", "condition", "qty_beginning", "qty_received", "qty_sold", "qty_returned", "qty_found", "qty_lost", "qty_damaged", "qty_disposed", "qty_other", "qty_removed", "qty_total", "stk_dec_no", "stk_inc_no", "created", "modified","prdt_name","properties_name","spc"];
var restockInventoryDetailsExtends = [];
var restockInventorySummaryColumns = [];
var restockInventorySummaryExtends = [];
var restockInventoryDetailsCustoms = [];
var restockInventoryDetailsVisible = [];
var restockinventorySummaryDetailsCustomss = [];
var restockinventorySummaryDetailsVisible = [];

var inventorySummaryDetailsColumns = ["wh_code", "wh_name", "request_date", "fnsku", "sku", "prdt_code", "product_name", "qty_average", "qty_end", "fulfillment_id", "detailed_disposition", "country", "stk_dec_no", "stk_inc_no", "created", "modified","prdt_name","properties_name","spc"];
var inventorySummaryDetailsExtends = [];
var inventorySummarySummaryColumns = ["wh_code", "wh_name", "request_date", "fnsku", "sku", "prdt_code", "product_name", "qty_end", "qty_stock", "qty_dif", "stk_dec_no", "stk_inc_no", "created", "modified"];
var inventorySummarySummaryExtends = [];
var inventorySummaryDetailsCustoms = [];
var inventorySummaryDetailsVisible = [];
var inventorySummarySummaryCustoms = [];
var inventorySummarySummaryVisible = [];

var inventoryDetailsDetailsColumns = ["wh_code", "wh_name", "request_date","snapshot_date_str", "fnsku", "sku", "product_name", "qty" , "fulfillment_center_id" , "prdt_code" , "prdt_name","properties_name", "disposition", "transaction_type", "created" ];
var inventoryDetailsDetailsExtends = [];
var inventoryDetailsDetailsVisible = [];
var inventoryDetailsDetailsCustoms = [];

var receiptsDetailsDetailsColumns = ["wh_code", "wh_name", "request_date","received_date_str", "fnsku", "sku", "fba_shipment_id", "product_name", "fulfillment_center_id" , "qty" , "prdt_code" , "prdt_name","properties_name", "created" ];
var receiptsDetailsDetailsExtends = [];
var receiptsDetailsDetailsVisible = [];
var receiptsDetailsDetailsCustoms = [];

var claimDemageDetailsColumns = ["site_name","request_date","reimbursement_id","case_id","amazon_order_id","reason","sku","fnsku","asin","product_name","condition","cur_code","unit_price","compensate_qty_cash","compensate_qty_stock","compensate_qty_total","amtn","original_reimbursement_id","original_reimbursement_type" ];
var claimDemageDetailsExtends = [];
var claimDemageDetailsVisible = [];
var claimDemageDetailsCustoms = [];

var changeDetailsColumns = {};
var changeSummaryColumns = {};

var removalShipmentDetailsColumns = ["wh_code", "wh_name", "request_date_removal","order_id", "shipment_date","sku", "fnsku","disposition", "qty", "carrier", "tracking_number", "prdt_code", "prdt_name", "properties_name", "stk_move_no", "created", "request_date_init", "shipment_date_str"];
var removalShipmentDetailsExtends = [];
var removalShipmentDetailsCustoms = [];
var removalShipmentDetailsVisible = [];

var tableName = "";
//@Bind view.onReady
!function(self, arg, tbAccFba, conditionPanel,customerReturnsExport,inventoryAdjustmentsExport,removalOrderDetailExport,restockInventoryExport,inventoryDetailExport,dsRestockInventoryDelete){
	var rightValue = tbAccFba.get("rightValue");
	if (rightValue == "*" || rightValue.indexOf("download=1") > -1) {
		conditionPanel.get("buttons")[0].set("visible", true);
	}
	dsRestockInventoryDelete.insert({});
}

//@Bind #dgDetail.onCreate
!function(self, arg) {
	var changeColumnsName = "", changeColumns = {};
	changeColumnsName = "changeDetailsColumns";
	changeColumns = eval(changeColumnsName);
	self.get("columns").each(function (column) {
		var property = column.get("property");
		if (property && property != "none") {
			if (!eval(changeColumnsName + "." + property)) {
				eval(changeColumnsName + "." + property + "={}");
				changeColumns[property] = column;
			}
		}
	});
	
//	var tabRptType = view.id("tabRptType");
//	var tabRptTypeName = tabRptType.get("currentTab").get("name");
//	if(tabRptTypeName == "settlementReport"){
//		suppotSaveColumn(self,9999999);
//	}
	
	var settlementcfg = {},
		customercfg = {},
		inventorycfg = {},
		removalcfg = {},
		restockcfg = {},
		inventorySummarycfg = {},
		inventoryDetailscfg = {},
		receiptscfg = {},
		claimDemagecfg = {},
		removalShipmentcfg = {};
	if(view.get("userData") && view.get("userData").gridValue){
		for(var k in view.get("userData").gridValue){
			var v = view.get("userData").gridValue[k];
			if (v.setting_id == 8009000) {
				settlementcfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009001) {
				customercfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009002) {
				inventorycfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009003) {
				removalcfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009004) {
				restockcfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009005) {
				inventorySummarycfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009006) {
				inventoryDetailscfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009007) {
				receiptscfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009008) {
				claimDemagecfg = eval("(" + v.griddata + ")");
			}else if (v.setting_id == 8009009) {
				removalShipmentcfg = eval("(" + v.griddata + ")");
			}
		}
	}
	//初始化加载已保存的列
	settlementReportDetailsCustoms = [], settlementReportDetailsVisible = {};
	if(settlementcfg){
		for(var v in settlementcfg){
			if(changeColumns[v]){
				settlementReportDetailsCustoms.push(changeColumns[v]);
				settlementReportDetailsVisible[v] = settlementcfg[v];
			}
		}
		if(settlementcfg._page_size_){
			settlementReportDetailsVisible['_page_size_'] = settlementReportDetailsVisible._page_size_;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	self.set("#operation.renderer", new OperationCellRenderer());
	var menu = self.getHeaderOptionMenu(true);
	menu.addItem({
		caption:"保存栏位",
		iconClass:"stufont icon-save",
		onClick:function(seal, arg){
			view.saveGridInfo("保存成功");
		}
	},0);
	menu.addItem({
		caption:"还原栏位",
		iconClass:"stufont icon-rechecked",
		onClick:function(){
			view.initDefaultGridInfo();
		}
	},1);
	
};

//@Bind #dgSummary.onCreate
!function(self, arg) {
	var changeColumnsName = "", changeColumns = {};
	changeColumnsName = "changeSummaryColumns";
	changeColumns = eval(changeColumnsName);
	self.get("columns").each(function (column) {
		var property = column.get("property");
		if (property && property != "none") {
			if (!eval(changeColumnsName + "." + property)) {
				eval(changeColumnsName + "." + property + "={}");
				changeColumns[property] = column;
			}
		}
	});
};
var firstQuery=false;
//@Bind #tabRptType.onTabChange
//@Bind #tabDataType.onTabChange
!function(self, arg) {
	// 先记录原来的表格列，之后再清空
	var tabRptType = view.id("tabRptType"), tabDataType = view.id("tabDataType"), 
	currentTabRptType = tabRptType.get("currentTab"), currentTabDataType = tabDataType.get("currentTab");
	if (currentTabRptType == null || currentTabDataType == null) {
		return;
	}
	var tabRptTypeName = tabRptType.get("currentTab").get("name");
	var tabId = self.get("id");
	if("tabRptType" == tabId){
		var itms = [ {
			key : "report_date",
			value : "账单时间"
		},{
			key : "created",
			value : "创建时间"
		},{
			key : "acc_date",
			value : "记账年月"
		} ];
		var itms2 = [ {
			key : "report_date",
			value : "账单时间"
		},{
			key : "created",
			value : "创建时间"
		}];
		if(tabRptTypeName == "settlementReport"){
			view.id("dateTypeList").set("trigger", {
				$type : "ListDropDown",
				items : itms,
				property : "key",
				displayProperty : "value"
			});
		}else {
			view.id("dateTypeList").set("trigger", {
				$type : "ListDropDown",
				items : itms2,
				property : "key",
				displayProperty : "value"
			});
		}
		view.id("dateTypeList").set("value", "report_date");
		view.id("dateTypeList").refresh();
	}
	
	var rptType = currentTabRptType.get("name"), dataType = currentTabDataType.get("name"),
	newTabName = arg.newTab.get("name"), oldTabName = arg.oldTab ? arg.oldTab.get("name") : "",
	dataSet, dataGrid, columns = [], changeColumns = [];
	if (dataType == "detail") {
		dataSet = view.id("dsDetail"), dataGrid = view.id("dgDetail"), columns = dataGrid.get("columns"), changeColumns = changeDetailsColumns;
	} else if (dataType == "summary") {
		dataSet = view.id("dsSummary"), dataGrid = view.id("dgSummary"), columns = dataGrid.get("columns"), changeColumns = changeSummaryColumns;
	}
	var rpt, type;
	if (oldTabName == "Detail") {
		rpt = rptType, type = "Details";
	} else if (oldTabName == "Summary") {
		rpt = rptType, type = "Summary";
	} else if (dataType == "detail") {
		rpt = oldTabName != "" ? oldTabName : rptType, type = "Details";
	} else if (dataType == "summary") {
		rpt = oldTabName != "" ? oldTabName : rptType, type = "Summary";
	}
	if (oldTabName == "") {
	} else if (newTabName != oldTabName) {
		var customs = [], visible = {};
		columns.each(function (column) {
			if (column instanceof dorado.widget.grid.DataColumn && column.get("property") != "none") {
				customs.push(column);
				visible[column.get("property")] = {'v': column.get("visible"),'w':column.get("width")+""};
			}
		});
		eval(rpt + type + "Customs=customs");
		eval(rpt + type + "Visible=visible");
		if(dataSet && dataSet.get("pageSize")){
			eval(rpt + type + "Visible['_page_size_']=" + dataSet.get("pageSize"));
		}
	}
	var columnCustom = eval(rptType + type + "Customs"), 
	columnVisible = eval(rptType + type + "Visible"), 
	columnsMain = eval(rptType + type + "Columns"), 
	columnsExtend = eval(rptType + type + "Extends");
	
	if(columnVisible && columnVisible._page_size_){
		dataSet.set("pageSize",columnVisible._page_size_);
	} else {
		dataSet.set("pageSize",50);
	}
	
	// 不要清空特殊表格列
	var delColumns = [];
	columns.each(function(column) {
		if (column instanceof dorado.widget.grid.DataColumn && column.get("property") != "none") {
			delColumns.push(column);
		}
	});
	delColumns.each(function(column) {
		dataGrid.removeColumn(column);
	});
	// 优先使用记录到的自定义表格列，之后再按默认排序
	if (columnCustom && columnCustom.length > 0) {
		columnCustom.each(function(column) {
			var property = column.get("property"), colVisible = columnVisible[property];
			if (colVisible) {
				column.set("visible", colVisible.v);
				column.set("width", colVisible.w+"");
			}
			if (property == "order_id") {
				if (rptType == "settlementReport" || rptType == "customerReturns") {
					column.set("caption", "网上订单号");
				} else {
					column.set("caption", "单据编码");
				}
			}
			if (property == "afs_regist_id") {
				if (rptType == "settlementReport") {
					column.set("caption", "售后退货编码");
				} else {
					column.set("caption", "售后编码");
				}
			}
			dataGrid.addColumn(column);
		});
	} else {
		if(columnsMain != null && columnsMain.length > 0){
			columnsMain.each(function (column) {
				var changeColumn = changeColumns[column];
				if (changeColumn) {
					var property = changeColumn.get("property");
					if (property == "order_id") {
						if (rptType == "settlementReport" || rptType == "customerReturns") {
							changeColumn.set("caption", "网上订单号");
						} else {
							changeColumn.set("caption", "单据编码");
						}
					}
					changeColumn.set("visible", true);
					dataGrid.addColumn(changeColumn);
				}
			});
		}
		if(columnsExtend != null && columnsExtend.length > 0){
			columnsExtend.each(function (column) {
				var changeColumn = changeColumns[column];
				if (changeColumn) {
					changeColumn.set("visible", false);
					dataGrid.addColumn(changeColumn);
				}
			});
		}
	}
	tabDataType.set("visible", "restockInventory" != rptType && "receiptsDetails" != rptType && "inventoryDetails" != rptType && "claimDemage" != rptType && "removalShipment" != rptType );
	if ("restockInventory" == rptType || "inventoryDetails" == rptType || "receiptsDetails" == rptType|| "claimDemage" == rptType) { 
		tabDataType.set("currentIndex", 0);
	}
	var tbAccFba = view.id("tbAccFba");
	tbAccFba.get("items").each(function(item){
		if ("settlementReportMarkReturn" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		} else if ("settlementReportExport" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("customerReturnsExport" == item.get("tags")) {
			item.set("visible", rptType == "customerReturns" && dataType == "detail");
		}else if ("inventoryAdjustmentsExport" == item.get("tags")) {
			item.set("visible", rptType == "inventoryAdjustments" && dataType == "detail");
		}else if ("removalOrderDetailExport" == item.get("tags")) {
			item.set("visible", rptType == "removalOrderDetail" && dataType == "detail");
		}else if ("restockInventoryExport" == item.get("tags")) {
			item.set("visible", rptType == "restockInventory" && dataType == "detail");
		}else if ("inventoryDetailExport" == item.get("tags")) {
			item.set("visible", rptType == "inventorySummary" && dataType == "detail");
		}else if ("AmazonSetlementSExport" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "summary");
		}else if ("CustormReturnSExport" == item.get("tags")) {
			item.set("visible", rptType == "customerReturns" && dataType == "summary");
		}else if ("StkSummaryExport" == item.get("tags")) {
			item.set("visible", rptType == "inventoryAdjustments" && dataType == "summary");
		}else if ("RemoveSummaryExport" == item.get("tags")) {
			item.set("visible", rptType == "removalOrderDetail" && dataType == "summary");
		}else if ("InventoryDetailsExport" == item.get("tags")) {
			item.set("visible", rptType == "inventoryDetails");
		}else if ("ClaimDemageExport" == item.get("tags")) {
			item.set("visible", rptType == "claimDemage");
		}else if ("ReceiptsDetailsExport" == item.get("tags")) {
			item.set("visible", rptType == "receiptsDetails" );
		}else if ("inventoryAdjustmentsHandlerStkAll" == item.get("tags")) {
			item.set("visible", rptType == "inventoryAdjustments" && dataType == "detail");
		} else if ("removalOrderDetailHandlerStkDec" == item.get("tags")) {
			item.set("visible", rptType == "removalOrderDetail" && dataType == "detail");
		} else if ("settlementReportLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		} else if ("customerReturnsLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "customerReturns" && dataType == "detail");
		} else if ("inventoryAdjustmentsLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "inventoryAdjustments" && dataType == "detail");
		} else if ("removalOrderDetailLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "removalOrderDetail" && dataType == "detail");
		} else if ("inventorySummaryLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "inventorySummary" && dataType == "summary");
		} else if ("restockInventoryImport" == item.get("tags")) {
			item.set("visible", rptType == "restockInventory" && dataType == "detail");
		} else if ("restockInventoryDelete" == item.get("tags")) {
			item.set("visible", rptType == "restockInventory" && dataType == "detail");
		} else if ("restockInventoryHandlerStkAll" == item.get("tags")) {
			item.set("visible", rptType == "restockInventory" && dataType == "detail");
		} else if ("customerReturnsReturnBack" == item.get("tags")) {
			item.set("visible", rptType == "customerReturns" && dataType == "detail");
		} else if ("customerReturnsImport" == item.get("tags")) {
			item.set("visible", rptType == "customerReturns" && dataType == "detail");
		} else if ("inventorySummaryHandlerStkAll" == item.get("tags")) {
			item.set("visible", rptType == "inventorySummary" && dataType == "summary");
		} else if ("inventorySummaryHandlerDiff" == item.get("tags")) {
			item.set("visible", rptType == "inventorySummary" && dataType == "summary");
		} else if ("inventorySummaryExport" == item.get("tags")) {
			item.set("visible", rptType == "inventorySummary" && dataType == "summary");
		}else if ("settlementReportImport" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("settlementReportSetting" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("settlementDelete" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("accTimeSetting" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("siteDataInfo" == item.get("tags")) {
			item.set("visible", rptType == "settlementReport" && dataType == "detail");
		}else if ("inventoryDetailsLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "inventoryDetails" && dataType == "detail");
		}else if ("receiptsDetailsLinkPrdt" == item.get("tags")) {
			item.set("visible", rptType == "receiptsDetails" && dataType == "detail");
		}else if ("removalOrderDetailImport" == item.get("tags")) {
			item.set("visible", rptType == "removalOrderDetail" && dataType == "detail");
		}else if("inventoryDetailsDelete" == item.get("tags")){
			item.set("visible", rptType == "inventoryDetails");
		}else if("receiptsDetailsDelete" == item.get("tags")){
			item.set("visible", rptType == "receiptsDetails");
		}else if("removalShipmentLinkPrdt" == item.get("tags")){
			item.set("visible", rptType == "removalShipment");
		}else if("removalShipmentTurnStkMove" == item.get("tags")){
			item.set("visible", rptType == "removalShipment");
		}else if("removalShipmentExport" == item.get("tags")){
			item.set("visible", rptType == "removalShipment");
		}
		
	})
	
	/* 打开时不自动查询数据 */
	if (!firstQuery && newTabName != oldTabName) {
		firstQuery=true;
	} else if (firstQuery) {
		flushGrid();
	}
};

// @Bind #conditionPanel.onDownButtonClick
!function(tbAccFba){
	var dialog = tbAccFba.createChildForm("iframe", "900", "450");
	dialog.setUrl("emgr.main.account.AmazonReportManager.d");
	dialog.set("caption", "下载报告");
	dialog.show();
};

/** @View */
function flushGrid() {
	var tabRptType = view.id("tabRptType"), tabDataType = view.id("tabDataType"), 
	dsDetail = view.id("dsDetail"), dsSummary = view.id("dsSummary"), 
	dgDetail = view.id("dgDetail"), dgSummary = view.id("dgSummary"), 
	dpDetail = view.id("dpDetail"), dpSummary = view.id("dpSummary"), cbDataGrid = view.id("cbDataGrid");
	flushData(tabRptType, tabDataType, dsDetail, dsSummary, dgDetail, dgSummary, dpDetail, dpSummary, cbDataGrid);
};

function flushData(tabRptType, tabDataType, dsDetail, dsSummary, dgDetail, dgSummary, dpDetail, dpSummary, cbDataGrid){
	var dataGrid, dataSet, currentTabRptType = tabRptType.get("currentTab"), currentTabDataType = tabDataType.get("currentTab");
	if (!currentTabDataType || currentTabDataType == null || !currentTabRptType || currentTabRptType == null) {
		return;
	} else if ("detail" == currentTabDataType.get("name")) {
		dataSet = dsDetail;
		dataGrid = dgDetail;
		dpDetail.set("visible", true);
		dpSummary.set("visible" , false);
		cbDataGrid.set("currentIndex", 0);
	} else if ("summary" == currentTabDataType.get("name")) {
		dataSet = dsSummary;
		dataGrid = dgSummary;
		dpDetail.set("visible", false);
		dpSummary.set("visible" , true);
		cbDataGrid.set("currentIndex", 1);
	}
	var result = [], selection = dataGrid.get("selection");
	if(selection){
		selection.each(function(obj) {
			result.push(obj.get("id"));
		});
	}
	var rptType = dataSet.get("parameter.report_type");
	dataSet.set('pageNo', dataSet.getData().pageNo);
	dataSet.flushAsync(function(obj) {
		if (rptType != dataGrid.get("dataSet").get("parameter.report_type")) {
			return;
		} else if (obj) {
			var scrollSeed = 0, isFindedPosition = false;
			obj.each(function(entity){
				if(!isFindedPosition){
					scrollSeed++;
				}
				var id = entity.get("id");
				if(id && result.indexOf(id) >= 0){
					entity.set("YN",true);
					isFindedPosition = true;
				}
			});
			scrollSeed = isFindedPosition ? scrollSeed : 0;
			$(dataGrid._innerGridDom).data("scrollSeed", scrollSeed);
		}
	});
};

//@Bind #conditionPanel.onQryButtonClick
!function(tabRptType, tabDataType, dsDetail, dsSummary, dgDetail, dgSummary, dpDetail, dpSummary, cbDataGrid) {
	firstQuery = true;
	flushData(tabRptType, tabDataType, dsDetail, dsSummary, dgDetail, dgSummary, dpDetail, dpSummary, cbDataGrid);
};

//@Bind #dsDetail.beforeLoadData
!function(self, arg, conditionPanel, tabRptType) {
	var currentTabRptType = tabRptType.get("currentTab"), filtervalue = conditionPanel.getValues();
	if (filtervalue) {
		self.set("parameter", {
			filter : encodeURIComponent(dorado.JSON.stringify(filtervalue)),
			report_type : currentTabRptType.get("name"),
			data_type : "detail"
		});
	}
};

//@Bind #dsSummary.beforeLoadData
!function(self, arg, conditionPanel, tabRptType) {
	var currentTabRptType = tabRptType.get("currentTab"), filtervalue = conditionPanel.getValues();
	if (filtervalue) {
		self.set("parameter", {
			filter : encodeURIComponent(dorado.JSON.stringify(filtervalue)),
			report_type : currentTabRptType.get("name"),
			data_type : "summary"
		});
	}
};

function getSelection(dataGrid) {
	var result = [], selection = dataGrid.get("selection");
	if (selection) {
		selection.each(function(obj) {
			result.push({
				id : "" + obj.get("id"),
				modified : obj.get("modified").formatDate("Y-m-d H:i:s"),
				siteId : obj.get("site_id"),
				currency : obj.get("currency"),
				whId: obj.get("wh_id")
			});
		});
	}
	return result;
};

function handlerData(self, arg) {
	if (arg.qryform == null) {
		return;
	}
	var updateAction = arg.qryform.updateAction, data = arg.qryform.updateData, tags = arg.qryform.get("tags")[0];
	if(tags != "inventorySummaryHandlerDiff"){//计算库存差异的时候是不需要选择数据的
		if (data == null || data.length <= 0 || updateAction == null) {
			return;
		} else if (data.length > 500) {
			dorado.MessageBox.alert("勾选的订单不能超过500笔,请重新选择!");
			return;
		}
	}
	var params = getPropertyValues(arg.qryform);
	if ("removalOrderDetailHandlerStkDec" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
	} else if ("inventoryAdjustmentsHandlerStkAll" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
	} else if ("customerReturnsHandlerStkAll" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
		if (!params.stk_dec_wh_id || params.stk_dec_wh_id == null) {
			dorado.MessageBox.alert("出库仓库不能为空！");
			return;
		}
	} else if ("settlementReportReturnNum" == tags) {
		if (params.qty_back == null || params.qty_back < 1 || params.qty_back > 999999) {
			dorado.MessageBox.alert("退货数量不正确！");
			return;
		}
	} else if ("settlementReportReturnBack" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
		if (!params.result_back_wh || params.result_back_wh == null) {
			dorado.MessageBox.alert("退回仓库不能为空！");
			return;
		}
		if (!params.cur_code || params.cur_code == null) {
			dorado.MessageBox.alert("币种不能为空！");
			return;
		}
	} else if ("restockInventoryHandlerStkAll" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
	} else if ("inventorySummaryHandlerStkAll" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
	}else if("settlementReportMarkReturn" == tags){
		if(!params.is_return_back){
			if(!params.cancel_return_reason){
				dorado.MessageBox.alert("退货原因不能为空！");
				return;
			}
			if(params.cancel_return_reason.length > 200){
				dorado.MessageBox.alert("退货原因最大可输入200个字！");
				return;
			}
		}
	} else if ("removalShipmentTurnStkMove" == tags) {
		if (params.bil_date == null || params.bil_date > new Date()) {
			dorado.MessageBox.alert("单据日期不能大于当前时间！");
			return;
		}
		params.bil_date = params.bil_date.formatDate("Y-m-d H:i:s");
		params.expected_date = params.expected_date.formatDate("Y-m-d H:i:s");
		if (!params.wh_id_in || params.wh_id_in == null) {
			dorado.MessageBox.alert("调入仓库不能为空！");
			return;
		}
		
		if (data == null || data.length <= 0 || updateAction == null) {
			return;
		} else if (data.length > 100) {
			dorado.MessageBox.alert("勾选的订单不能超过100笔,请重新选择!");
			return;
		}
	}
	params.data = dorado.JSON.stringify(data);
	params.handler_type = tags;
	if (updateAction._valid == undefined || updateAction._valid) {
		updateAction._valid = false;
		dorado.Core.setTimeout(updateAction, function() {
			var qryForm = arg.qryform;
			updateAction.clearListeners("onFailure");
			updateAction.addListener("onFailure", function(self) {
				self._valid = true;
				if (tags == "linkPrdt") {
					qryForm.close();
				}
				flushGrid();
			});
			updateAction.clearListeners("onSuccess");
			updateAction.addListener("onSuccess", function(self) {
				self._valid = true;
				qryForm.close();
				flushGrid();
			});
			updateAction.set("parameter", params).execute();
		}, 500);
	}
	return;
};

function getPropertyValues(dialog) {
	var res = new dorado.Entity();
	var children = dialog.get("children");
	if (children && children.length > 0) {
		children.each(function(obj) {
			if (obj instanceof dorado.widget.AutoForm) {
				var entity = obj.get("entity");
				dorado.Object.eachProperty(entity,function(p,v){
					res.set(p, v);
				});
			}
			if (obj instanceof dorado.widget.FormElement) {
				var field = "" + obj.get("property");
				var value = obj.get("value");
				if (field && value) {
					res.set(field, value);
				}
			}
		});
	}
	return res.toJSON();
};

//@Bind #tbAccFba.onButtonClick
!function(self, arg, tabDataType, dgDetail, dgSummary, handlerAjaxAction,inventoryDeleteDialog) {
	var data = [], tags = self.get('tags')[0], currentTabDataType = tabDataType.get("currentTab");
	if ("detail" == currentTabDataType.get("name")) {
		data = getSelection(dgDetail);
	} else if ("summary" == currentTabDataType.get("name")) {
		data = getSelection(dgSummary);
	}
	if ("restockInventoryImport" == tags || 
			"settlementReportImport" == tags || 
			"customerReturnsImport" == tags || 
			"inventorySummaryHandlerDiff" == tags || 
			"settlementReportExport" == tags || 
			"inventorySummaryExport" == tags || 
			"customerReturnsExport" == tags || 
			"inventoryAdjustmentsExport" == tags || 
			"removalOrderDetailExport" == tags || 
			"restockInventoryExport" == tags || 
			"inventoryDetailExport" == tags || 
			"AmazonSetlementSExport" == tags || 
			"CustormReturnSExport" == tags || 
			"StkSummaryExport" == tags || 
			"restockInventoryDelete" == tags || 
			"RemoveSummaryExport" == tags ||
			"settlementReportSetting" == tags ||
			"settlementDelete" == tags ||
			"accTimeSetting" == tags ||
			"siteDataInfo" == tags || 
			"InventoryDetailsExport" == tags ||
			"ReceiptsDetailsExport" == tags ||
			"ClaimDemageExport" == tags ||
			"inventoryDetailsDelete" == tags ||
			"receiptsDetailsDelete" == tags ||
			"removalOrderDetailImport" == tags
			|| "removalShipmentExport" == tags) {
	} else if (data == undefined || data.length <= 0){
		dorado.MessageBox.alert("请先勾选订单行！");
		return;
	}
	if (tags.indexOf("LinkPrdt") > 0) {
		linkPrdt(self, arg, handlerAjaxAction, data);
	} else if ("removalOrderDetailHandlerStkDec" == tags) {
		removalOrderDetailHandlerStkDec(self, arg, handlerAjaxAction, data);
	} else if ("customerReturnsHandlerStkAll" == tags) {
		customerReturnsHandlerStkAll(self, arg, handlerAjaxAction, data);
	} else if ("inventoryAdjustmentsHandlerStkAll" == tags) {
		inventoryAdjustmentsHandlerStkAll(self, arg, handlerAjaxAction, data);
	} else if ("settlementReportMarkReturn" == tags) {
		settlementReportMarkReturn(self, arg, handlerAjaxAction, data);
	} else if ("settlementReportReturnNum" == tags) {
		settlementReportReturnNum(self, arg, handlerAjaxAction, data);
	} else if ("settlementReportReturnBack" == tags) {
		settlementReportReturnBack(self, arg, handlerAjaxAction, data);
	} else if ("restockInventoryImport" == tags) {
		var dialog = arg.toolbar.createChildForm("iframe", 600, 430);
		dialog.setUrl("emgr.main.account.EcsErpAccRestockImport.d");
		dialog.set("caption", "EXCEL导入");
		dialog.show();
	} else if ("customerReturnsImport" == tags) {
		var dialog = arg.toolbar.createChildForm("iframe", 600, 430);
		dialog.setUrl("emgr.main.account.EcsErpCustomerReturnsImport.d");
		dialog.set("caption", "EXCEL导入");
		dialog.show();
	}else if ("restockInventoryHandlerStkAll" == tags) {
		restockInventoryHandlerStkAll(self, arg, handlerAjaxAction, data);
	} else if ("customerReturnsReturnBack" == tags) {
		customerReturnsReturnBack(self, arg, handlerAjaxAction, data);
	} else if ("inventorySummaryHandlerStkAll" == tags) {
		inventorySummaryHandlerStkAll(self, arg, handlerAjaxAction, data);
	} else if ("inventorySummaryHandlerDiff" == tags) {
		inventorySummaryHandlerDiff(self, arg, handlerAjaxAction, data);
	} else if ("settlementReportExport" == tags) {
		ExportOrder(self, arg);
	} else if ("inventorySummaryExport" == tags) {
		ExportOrder(self, arg);
	} else if ("customerReturnsExport" == tags) {
		ExportOrder(self, arg);
	}else if ("inventoryAdjustmentsExport" == tags) {
			ExportOrder(self, arg);
	}else if ("removalOrderDetailExport" == tags) {
		ExportOrder(self, arg);
	}else if ("restockInventoryExport" == tags) {
		ExportOrder(self, arg);
	}else if ("inventoryDetailExport" == tags) {
		ExportOrder(self, arg);
	}else if ("AmazonSetlementSExport" == tags) {
		ExportOrder(self, arg);
	}else if ("CustormReturnSExport" == tags) {
		ExportOrder(self, arg);
	}else if ("StkSummaryExport" == tags) {
		ExportOrder(self, arg);
	}else if ("RemoveSummaryExport" == tags) {
		ExportOrder(self, arg);
	}else if ("InventoryDetailsExport" == tags) {
		ExportOrder(self, arg);
	}else if ("ClaimDemageExport" == tags) {
		ExportOrder(self, arg);
	}else if ("ReceiptsDetailsExport" == tags) {
		ExportOrder(self, arg);
	}else if ("settlementReportImport" == tags) {
		var dialog = arg.toolbar.createChildForm("iframe", 700, 430);
		dialog.setUrl("emgr.main.account.EcsErpAccSettlementReportImport.d");
		dialog.set("caption", "EXCEL导入");
		dialog.show();
	}else if ("restockInventoryDelete" == tags) {
		view.id("restockInventoryDeleteDialog").show();
	}else if("settlementReportSetting" == tags){
		view.id("feeTypeSettingDialog").show();
		view.id("dsFeeSetting").flushAsync();
	}else if("settlementDelete" == tags){
		view.id("deleteDialog").show();
	}else if("accTimeSetting" == tags){
		view.id("accTimeSettingDialog").show();
	}else if("siteDataInfo" == tags){
		var dialog = arg.toolbar.createChildForm("iframe", 700, 430);
		dialog.setUrl("emgr.main.account.EcsErpAccFbaSiteDataInfo.d");
		dialog.set("caption", "网店数据情况");
		dialog.show();
	}else if ("removalOrderDetailImport" == tags) {
		var dialog = arg.toolbar.createChildForm("iframe", 750, 520);
		dialog.setUrl("emgr.main.account.EcsErpRemovalOrderDetailImport.d");
		dialog.set("caption", "EXCEL导入");
		dialog.show();
	}else if ("receiptsDetailsDelete" == tags) {
		tableName = "ecs_erp_amazon_receipts_details";
		inventoryDeleteDialog.show();
	}else if ("inventoryDetailsDelete" == tags) {
		tableName = "ecs_erp_amazon_inventory_details";
		inventoryDeleteDialog.show();
	}else if("removalShipmentExport" == tags){
		ExportOrder(self, arg);
	}else if ("removalShipmentTurnStkMove" == tags) {
		removalShipmentTurnStkMove(self, arg, handlerAjaxAction, data);
	}
};

//@Bind #restockInventoryDeleteDialog.beforeShow
!function(self, arg,searchCreateTimeAction,restockInventoryDeleteForm,dsRestockInventoryDelete,conditionPanel) {
	dsRestockInventoryDelete.clear();
	dsRestockInventoryDelete.insert({});
	var conditionPanelValues = conditionPanel.getValues();
	var dateType = conditionPanelValues.date_type;
	var startDate = conditionPanelValues.start_report_date;
	var endDate = conditionPanelValues.end_report_date;
	searchCreateTimeAction.set("parameter", {date_type:dateType, start_date : startDate, end_date :endDate});

	searchCreateTimeAction.execute(function(obj){
		if(obj){
			var restockInventoryDeleteCreateTime = restockInventoryDeleteForm.getElement("createTime");
			var editor = restockInventoryDeleteCreateTime.getEditor();
			var mapping = new Array();
			for(var i = 0;i<obj.length;i++){
				mapping.push({"key":obj[i],"value":obj[i]});
			}
			editor.set("mapping",mapping);
			editor.set("value",null);
			editor.post();
		}
	})
}
//@Bind #restockDeleteSureButton.onClick
!function(self, arg,dsRestockInventoryDelete,restockInventoryDeleteAction,dsDetail){
	if(dsRestockInventoryDelete.getData().validate()=="ok"){
		restockInventoryDeleteAction.set("parameter",{"createTime":dsRestockInventoryDelete.getData().get("createTime")});
		restockInventoryDeleteAction.execute(function(obj){
			view.id("restockInventoryDeleteDialog").close();
			dsDetail.flush();
		});
	}
}


function linkPrdt(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("linkPrdt", "400", "150");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "HtmlContainer",
			style : "padding-left:30px;padding-top:30px",
			content : "只对系统商品编码为空的记录重新关联本地商品！"
		},{
			$type : "FormElement",
			property : "report_type",
			labelAlign : "right",
			hideMode : "display",
			visible : false,
			editor : {
				$type:"TextEditor",
				value:view.id("tabRptType").get("currentTab").get("name")
			}
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}else{
		children[1].getEditor().set("value",view.id("tabRptType").get("currentTab").get("name"));
		children[1].getEditor().post();
	}
	dialog.show();
};

function removalOrderDetailHandlerStkDec(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("removalOrderDetailHandlerStkDec", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "FormElement",
			property : "bil_date",
			label : "单据日期",
			labelAlign : "right",
			style : "margin-top:10px;",
			width : 220,
			showHint:false,
			editor : {
				$type:"TextEditor",
				dataType:"Date",
				displayFormat:"Y-m-d",
				editable:false,
				value:new Date()
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type:"HtmlContainer",
			content:"只对请求数量大于零的商品记录产生待审核的其他出库单，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function removalShipmentTurnStkMove(self, arg, handlerAjaxAction, data) {
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), errorMsg = "";
	if (selection) {
		selection.each(function(obj){
			var prdtId = obj.get("prdt_id");
			if (null == prdtId) {
				errorMsg = "请选择系统商品编码不为空的数据！";
				return false;
			} 
			var stkMoveId = obj.get("stk_move_id");
			if (stkMoveId) {
				errorMsg = "请选择未产生库存调拨单的数据！";
				return false;
			}
		});
		if (errorMsg != "") {
			dorado.MessageBox.alert(errorMsg);
			return;
		}
	}
	var dialog = arg.toolbar.createChildForm("removalShipmentTurnStkMove", "500", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "AutoForm",
			cols : "*,*",
			width: 470,
			style : "padding-top:10px;",
			elements : [{
				$type : "FormElement",
				property : "bil_date",
				label : "单据日期",
				labelAlign : "right",
				showHint:false,
				editor : {
					$type:"TextEditor",
					dataType:"Date",
					displayFormat:"Y-m-d",
					editable:false
				},
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			},{
				$type : "FormElement",
				property : "expected_date",
				label : "预交日期",
				labelAlign : "right",
				showHint:false,
				editor : {
					$type:"TextEditor",
					dataType:"Date",
					displayFormat:"Y-m-d",
					editable:false
				},
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			},{
				$type : "FormElement",
				property : "wh_id_in",
				label : "调入仓库",
				labelAlign : "right",
				showHint:false,
				layoutConstraint: {
					colSpan: 2
				},
				editor : {
					$type:"TextEditor",
					editable:false,
					trigger:view.getComponentReference("sysWhQwind")
				},
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			}],
			onCreate : function(self,arg){
				self.set("entity", {
					bil_date : new Date(),
					expected_date : new Date(),
					wh_id_in : null
				});
			}
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function customerReturnsHandlerStkAll(self, arg, handlerAjaxAction, data) {
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), whIdFirst = null, whNameFirst = "", errorMsg = "";
	if (selection) {
		selection.each(function(obj){
			var whId = obj.get("wh_id");
			if (null == whId) {
				errorMsg = "不能对仓库为空的记录进行操作！";
				return false;
			} else if (null == whIdFirst) {
				whIdFirst = whId;
				whNameFirst = obj.get("wh_name");
			} else if (whIdFirst != whId) {
				errorMsg = "请选择相同仓库的数据！";
				return false;
			}
		});
		if (errorMsg != "") {
			dorado.MessageBox.alert(errorMsg);
			return;
		}
	}
	var dialog = arg.toolbar.createChildForm("customerReturnsHandlerStkAll", "500", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "AutoForm",
			cols : "*,*",
			width: 470,
			style : "padding-top:10px;",
			elements : [{
				$type : "FormElement",
				property : "bil_date",
				label : "单据日期",
				labelAlign : "right",
				showHint:false,
				editor : {
					$type:"TextEditor",
					dataType:"Date",
					displayFormat:"Y-m-d",
					editable:false
				},
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			},{
				$type : "Container"
			},{
				$type : "FormElement",
				property : "stk_inc_wh_id",
				label : "入库仓库",
				labelAlign : "right",
				showHint:false,
				readOnly:true,
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			},{
				$type : "FormElement",
				property : "stk_dec_wh_id",
				label : "出库仓库",
				labelAlign : "right",
				showHint:false,
				editor : {
					$type:"TextEditor",
					editable:false,
					trigger:view.getComponentReference("sysWhQwind")
				},
				onReady : function(self) {
					$fly(self._labelEl).toggleClass("form-label-required", true);
				}
			}],
			onCreate : function(self,arg){
				self.set("entity", {
					bil_date : new Date(),
					stk_inc_wh_id : whNameFirst,
					stk_dec_wh_id : null
				});
			}
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function inventoryAdjustmentsHandlerStkAll(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("inventoryAdjustmentsHandlerStkAll", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "FormElement",
			property : "bil_date",
			label : "单据日期",
			labelAlign : "right",
			style : "margin-top:10px;",
			width : 220,
			showHint:false,
			editor : {
				$type:"TextEditor",
				dataType:"Date",
				displayFormat:"Y-m-d",
				editable:false,
				value:new Date()
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type:"HtmlContainer",
			content:"只对数量不等于零的商品记录产生待审核的其他出入库单，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function displayAmount(obj){
	if (!obj || ""==obj) {
		return "0.00";
	}
	return obj.toFixed(2);
};

//@Bind #dgDetail.onRenderCell
//@Bind #dgSummary.onRenderCell
!function(self,arg,tabRptType){
	$(arg.dom).empty();
	var column=arg.column.get("name"), data=arg.data, Dom=arg.dom;
	if ("product_sales"==column) {
		Dom.innerText = displayAmount(data.get("amtn_principal"));
	} else if ("shipping_credits"==column) {
		Dom.innerText = displayAmount(data.get("amtn_shipping"));
	} else if ("gift_wrap_credits"==column) {
		Dom.innerText = displayAmount(data.get("gift_wrap_credits"));
	} else if ("promotional_rebates"==column) {
		Dom.innerText = (data.get("amtn_promotion_shipping") + 
		data.get("amtn_promotion_principal")).toFixed(2);
	} else if ("sales_tax_collected"==column) {
		Dom.innerText = displayAmount(data.get("sales_tax_collected"));
	} else if ("selling_fees"==column) {
		Dom.innerText = (data.get("amtn_commission") + 
				data.get("amtn_refund_commission")).toFixed(2);
	} else if ("fba_fees"==column) {
		Dom.innerText = (data.get("amtn_fba_perunitfulfillment") + 
				data.get("amtn_fba_perorderfulfillment") + 
				data.get("amtn_fba_weightbased") + 
				data.get("amtn_shipping_chargeback") + 
				data.get("amtn_shipping_hb") + 
				data.get("amtn_cod_fee")).toFixed(2);
	} else if ("amtn_points_granted"==column) {
		if ("Order"==data.get("transaction_type")){
			Dom.innerText = displayAmount(data.get("amtn_points_granted"));
		} else if ("Refund"==data.get("transaction_type")){
			Dom.innerText = displayAmount(data.get("amtn_points_returned"));
		} else if ("Order"==data.get("settlement_type")) {
			Dom.innerText = displayAmount(data.get("amtn_points_granted"));
		} else if ("Refund"==data.get("settlement_type")){
			Dom.innerText = displayAmount(data.get("amtn_points_returned"));
		} else {
			Dom.innerText = displayAmount(data.get("amtn_points_granted"));
		}
	} else if ("other_transaction_fees"==column) {
		Dom.innerText = displayAmount(data.get("other_transaction_fees"));
	} else if ("marketplace_facilitator_tax" == column) {
		Dom.innerText = displayAmount(data.get("marketplace_facilitator_tax"));
	} else if ("low_value_goods"==column) {
		Dom.innerText = displayAmount(data.get("low_value_goods"));
	} else if ("other"==column) {
		if ("Order"==data.get("transaction_type")){
			Dom.innerText = (data.get("amtn_fba_transportation") + 
			data.get("amtn_cod")).toFixed(2);
		} else if ("Refund"==data.get("transaction_type")){
			Dom.innerText = displayAmount(data.get("amtn_points_fee"));
		} else if ("Order"==data.get("settlement_type")) {
			Dom.innerText = (data.get("amtn_fba_transportation") + 
			data.get("amtn_cod")).toFixed(2);
		} else if ("Refund"==data.get("settlement_type")){
			Dom.innerText = displayAmount(data.get("amtn_points_fee"));
		} else {
			Dom.innerText = displayAmount(data.get("amtn_adjustment"));
		}
	} else if ("total"==column) {
		var currentTabRptType = tabRptType.get("currentTab");
		if (currentTabRptType && "settlementReport" == currentTabRptType.get("name")) {
			var total = data.get("total");
			if (null != total && total != 0) {
				Dom.innerText = total.toFixed(2);
				return;
			}
		}
		Dom.innerText = (data.get("amtn_principal") + 
		data.get("amtn_shipping") + 
		data.get("amtn_fba_transportation") + 
		data.get("amtn_fba_perunitfulfillment") + 
		data.get("amtn_fba_perorderfulfillment") + 
		data.get("amtn_commission") + 
		data.get("amtn_refund_commission") + 
		data.get("amtn_shipping_chargeback") + 
		data.get("amtn_shipping_hb") + 
		data.get("amtn_misc") + 
		data.get("amtn_adjustment") + 
		data.get("amtn_other") + 
		data.get("amtn_promotion_shipping") + 
		data.get("amtn_promotion_principal") + 
		data.get("amtn_fba_weightbased") + 
		data.get("amtn_giftwrap_chargeback") + 
		data.get("amtn_return_shipping") + 
		data.get("amtn_goodwill") + 
		data.get("amtn_points_fee") + 
		data.get("amtn_points_granted") + 
		data.get("amtn_points_returned") + 
		data.get("amtn_cod") + 
		data.get("other_transaction_fees") + 
		data.get("sales_tax_collected") + 
		data.get("gift_wrap_credits") + 
		data.get("marketplace_facilitator_tax") + 
		data.get("low_value_goods") + 
		data.get("amtn_cod_fee")).toFixed(2);
	} else if ("request_date"==column) {
		var currentTabRptType = tabRptType.get("currentTab");
		if (currentTabRptType && "inventorySummary" == currentTabRptType.get("name")) {
			Dom.innerText = new Date(data.get("request_date")).formatDate("m/Y");
			return;
		}
		arg.processDefault = true;
		return arg.processDefault;
	} else if ("product_sales_tax"==column) {
		Dom.innerText = displayAmount(data.get("product_sales_tax"));
	} else if ("shipping_credits_tax"==column) {
		Dom.innerText = displayAmount(data.get("shipping_credits_tax"));
	} else if ("giftwrap_credits_tax"==column) {
		Dom.innerText = displayAmount(data.get("giftwrap_credits_tax"));
	} else if ("promotional_rebates_tax"==column) {
		Dom.innerText = displayAmount(data.get("promotional_rebates_tax"));
	} else if ("marketplace_withheld_tax"==column) {
		Dom.innerText = displayAmount(data.get("marketplace_withheld_tax"));
	} else if("reason_memo"==column){
		switch (data.get("reason")) {
		case "6":
		case "7":
		case "E":
		case "H":
		case "K":
		case "U":
			Dom.innerText = "Damaged at Amazon fulfillment center";
			break;
		case "D":
			Dom.innerText = "Inventory disposed of";
			break;
		case "F":
		case "N":
			Dom.innerText = "Inventory found";
			break;
		case "M":
		case "5":
			Dom.innerText = "Inventory misplaced";
			break;
		case "3":
			Dom.innerText = "Product redefinition transfer in";
			break;
		case "4":
			Dom.innerText = "Product redefinition transfer out";
			break;
		case "O":
			Dom.innerText = "Inventory correction";
			break;
		case "P":
		case "Q":
			Dom.innerText = "Inventory disposition change";
			break;
		default:
			Dom.innerText = "";
			break;
		}
	}else if("reason_group"==column){
		switch (data.get("reason")) {
		case "6":
		case "7":
		case "E":
		case "H":
		case "K":
		case "U":
			Dom.innerText = "已残损";
			break;
		case "D":
			Dom.innerText = "已弃置";
			break;
		case "F":
		case "N":
			Dom.innerText = "已找到";
			break;
		case "M":
		case "5":
			Dom.innerText = "已丢失";
			break;
		case "3":
		case "4":
		case "O":
		case "P":
		case "Q":
			Dom.innerText = "其他";
			break;
		default:
			Dom.innerText = "";
			break;
		}
	} else if ("unit_price"==column) {
		Dom.innerText = displayAmount(data.get("unit_price"));
	} else {
		arg.processDefault = true;
		return arg.processDefault;
	}
};

function settlementReportMarkReturn(self, arg, handlerAjaxAction, data) {
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), siteIdFirst = null, errorMsg = "";
	if (selection) {
		selection.each(function(obj){
			var siteId = obj.get("site_id");
			if (null == siteId) {
				errorMsg = "不能对仓库为空的记录进行操作！";
				return false;
			} else if (null == siteIdFirst) {
				siteIdFirst = siteId;
			} else if (siteIdFirst != siteId) {
				errorMsg = "请选择相同网店的数据！";
				return false;
			}
			if ("Refund" != obj.get("settlement_type")) {
				errorMsg = "请选择结算类型为‘Refund’的数据！";
				return false;
			}
		});
		if (errorMsg != "") {
			dorado.MessageBox.alert(errorMsg);
			return;
		}
	}
	var dialog = arg.toolbar.createChildForm("settlementReportMarkReturn", "450", "250");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("layout", {
			$type : "Dock"
		});
		dialog.set("children", [{
			$type : "FormElement",
			property : "is_return_back",
			style : "padding-top:20px;padding-left:40px",
			width : 170,
			showHint:false,
			showLabel:false,
			editor : {
				$type:"CheckBox",
				caption:"需要退货"
			}
		},
		{
			$type : "FormElement",
			property : "cancel_return_reason",
			style : "padding-top:20px;padding-left:40px",
			showHint:false,
			showLabel:true,
			label:"取消退货标记原因",
			labelWidth:110,
			editor : {
				$type:"TextArea",
				caption:"取消退货标记原因",
				maxLength:200,
				width:260,
				height:60
			}
		}
		]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function settlementReportReturnNum(self, arg, handlerAjaxAction, data) {
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), siteIdFirst = null, errorMsg = "";
	if (selection) {
		selection.each(function(obj){
			var siteId = obj.get("site_id");
			if (null == siteId) {
				errorMsg = "不能对仓库为空的记录进行操作！";
				return false;
			} else if (null == siteIdFirst) {
				siteIdFirst = siteId;
			} else if (siteIdFirst != siteId) {
				errorMsg = "请选择相同网店的数据！";
				return false;
			}
			if ("Refund" != obj.get("settlement_type")) {
				errorMsg = "请选择结算类型为Refund的数据！";
				return false;
			}
		});
		if (errorMsg != "") {
			dorado.MessageBox.alert(errorMsg);
			return;
		}
	}
	var dialog = arg.toolbar.createChildForm("settlementReportReturnNum", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "FormElement",
			property : "qty_back",
			style : "padding-top:20px;margin-left:40px;",
			label : "退货数量",
			labelAlign : "right",
			width : 280,
			showHint:false,
			editor : {
				$type:"TextEditor",
				blankText:"请输入1-999999的整数"
			}
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function settlementReportReturnBack(self, arg, handlerAjaxAction, data) {
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), siteIdFirst = null, errorMsg = "";
	if (selection) {
		selection.each(function(obj){
			var siteId = obj.get("site_id");
			if (null == siteId) {
				errorMsg = "不能对仓库为空的记录进行操作！";
				return false;
			} else if (null == siteIdFirst) {
				siteIdFirst = siteId;
			} else if (siteIdFirst != siteId) {
				errorMsg = "请选择相同网店的数据！";
				return false;
			}
			if ("Refund" != obj.get("settlement_type")) {
				errorMsg = "请选择结算类型为Refund的数据！";
				return false;
			}
			if (0 >= obj.get("qty_back")) {
				errorMsg = "请选择退货数量大于零的数据！";
				return false;
			}
		});
		if (errorMsg != "") {
			dorado.MessageBox.alert(errorMsg);
			return;
		}
	}
	var dialog = arg.toolbar.createChildForm("settlementReportReturnBack", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("layout", {
			$type : "Form",
			cols : "*,*"
		});
		dialog.set("children", [{
			$type : "FormElement",
			property : "bil_date",
			label : "单据日期",
			labelWidth : 60,
			labelAlign : "right",
			style : "margin-top:10px;",
			showHint:false,
			editor : {
				$type:"TextEditor",
				dataType:"Date",
				displayFormat:"Y-m-d",
				editable:false,
				value:new Date()
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type:"HtmlContainer"
		},{
			$type : "FormElement",
			property : "result_back_wh",
			label : "退回仓库",
			labelWidth : 60,
			labelAlign : "right",
			showHint:false,
			editor : {
				$type:"TextEditor",
				editable:false,
				trigger:view.getComponentReference("sysWhQwind")
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type : "FormElement",
			property : "cur_code",
			label : "币种",
			labelWidth : 60,
			labelAlign : "right",
			showHint:false,
			editor : {
				$type:"TextEditor",
				editable:false,
				trigger:view.getComponentReference("sysCurQwind")
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function restockInventoryHandlerStkAll(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("restockInventoryHandlerStkAll", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "FormElement",
			property : "bil_date",
			label : "单据日期",
			labelAlign : "right",
			style : "margin-top:10px;",
			width : 220,
			showHint:false,
			editor : {
				$type:"TextEditor",
				dataType:"Date",
				displayFormat:"Y-m-d",
				editable:false,
				value:new Date()
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type:"HtmlContainer",
			content:"对找回数量+遗失数量+损坏数量+弃置数量+其他数量+移除数量不等于零<br />" +
					"的商品记录产生待审核的其他出入库单，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function customerReturnsReturnBack(self, arg, handlerAjaxAction, data) {
	if(data && data.length > 50){
		arg.processDefault = false;
		dorado.MessageBox.alert("最大设置记录数不能大于50条!");
		return;
	}
	var dgDetail = view.id("dgDetail"), selection = dgDetail.get("selection"), siteIdFirst = null, errorMsg = "";
	// var currencyFirst = selection[0].get("currency");
	var dialog = arg.toolbar.createChildForm("customerReturnsReturnBack", "450", "140");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type:"HtmlContainer",
			content:"将产生待处理的售后登记，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function inventorySummaryHandlerStkAll(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("inventorySummaryHandlerStkAll", "450", "180");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type : "FormElement",
			property : "bil_date",
			label : "单据日期",
			labelAlign : "right",
			style : "margin-top:10px;",
			width : 220,
			showHint:false,
			editor : {
				$type:"TextEditor",
				dataType:"Date",
				displayFormat:"Y-m-d",
				editable:false,
				value:new Date()
			},
			onReady : function(self) {
				$fly(self._labelEl).toggleClass("form-label-required", true);
			}
		},{
			$type:"HtmlContainer",
			content:"只对数量不等于零的商品记录产生待审核的其他出入库单，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function inventorySummaryHandlerDiff(self, arg, handlerAjaxAction, data) {
	var dialog = arg.toolbar.createChildForm("inventorySummaryHandlerDiff", "450", "140");
	dialog.updateAction = handlerAjaxAction;
	dialog.updateData = data;
	var children = dialog.get("children");
	if (!children || children.length <= 0) {
		dialog.set("children", [{
			$type:"HtmlContainer",
			content:"实际计算时只对出入库单号不为空的数据进行计算，是否继续？",
			style : "padding-top:15px;padding-left:20px;",
		}]);
		dialog.set("caption", self.get('caption'));
		dialog.addListener("onOKButtonClick", handlerData, {
			scope : dialog
		});
	}
	dialog.show();
};

function ExportOrder(self, arg){
		var taskId = view.id("tabRptType").get("currentTab").get("name");
		var type=view.id("tabDataType").get("currentTab").get("name");
		if ("settlementReport" == taskId&&"detail"==type) {
			taskId = "AmazonSettlementDetails";
		} else if ("inventorySummary" == taskId&&"summary"==type) {
			taskId = "AmazonStockSummary";
		}else if ("customerReturns" == taskId&&"detail"==type){
			taskId = "AmazonCustomer";
		}else if ("inventoryAdjustments" == taskId&&"detail"==type){
			taskId = "AmazonInventory";
		}else if ("removalOrderDetail" == taskId&&"detail"==type){
			taskId = "AmazonRemoval";
		}else if ("restockInventory" == taskId&&"detail"==type){
			taskId = "AmazonRestock";
		}else if ("inventorySummary" == taskId&&"detail"==type){
			taskId = "AmazonInventorySummary";
		}else if ("settlementReport" == taskId&&"summary"==type){
			taskId = "AmazonSettlementSummary";
		}else if ("customerReturns" == taskId&&"summary"==type){
			taskId = "AmazonCustomerSummary";
		}else if ("inventoryAdjustments" == taskId&&"summary"==type){
			taskId = "AmazonAdjustmentSummary";
		}else if ("removalOrderDetail" == taskId&&"summary"==type){
			taskId = "AmazonRemovalSummary";
		}else if("inventoryDetails" == taskId){
			taskId = "AmazonInvetory";
		}else if("receiptsDetails" == taskId){
			taskId = "AmazonReceipts";
		}else if("claimDemage" == taskId){
			taskId = "AmazonClaimDemage";
		}else if("removalShipment" == taskId){
			taskId = "AmazonRemovalShipment";
		}
		
		var entity = {};
		entity.filter = dorado.JSON.stringify(view.id("conditionPanel").getValues());
		entity.report_type = view.id("tabRptType").get("currentTab").get("name");
		entity.data_type = view.id("tabDataType").get("currentTab").get("name");
		view.id("tbAccFba").exportTask(taskId, entity);
};

//@Bind #btnSettingCancel.onClick
!function(self, arg,feeTypeSettingDialog){
	feeTypeSettingDialog.close();
}

//@Bind #dgFeeSetting.#option.onRenderHeaderCell
!function (self, arg, dsFeeSetting) {
	if($(arg.dom).children().length > 0){
		return;
	}
	new dorado.widget.Container({
		renderTo : arg.dom,
		contentOverflowY : "hidden",
		layout : {$type: "Form"},
		padding : 0,
		children :[{
			$type :"Label",
			text : "操作",
			padding : 0
		},{
			$type : "SimpleIconButton",
			iconClass : "stufont icon-toolbar-add",
			padding : 0,
			tip : "新增",
			listener:{
				onClick :function(){
					dsFeeSetting.insert({});
				}
			}
	 }]
	});
}

//@Bind #dgFeeSetting.#option.onRenderCell
!function(self, arg, dsFeeSetting){
	$(arg.dom).empty();
	var children = [];
	
	children.push({
		$type : "SimpleIconButton",  
		iconClass : "stufont icon-toolbar-add",
		tip : "添加",
		onClick : function() {
			var currentObj = view.id("dgFeeSetting").get("currentEntity");
			var data = dsFeeSetting.get("data");
			var newData = [];
			data.each(function(o){
				newData.push(o);
				if(currentObj == o){
					newData.push({});
				}
			})
			dsFeeSetting.setData(newData);
		}
	});
	children.push({
		$type : "SimpleIconButton",
        iconClass : "stufont icon-toolbar-delete",
		tip : "删除",
		onClick : function() {
			view.id("dgFeeSetting").get("currentEntity").remove();
		}
	});
	
	return new dorado.widget.Container({
		renderTo : arg.dom,
		children : children,
		layout:{
			$type:"HBox"
		}
	});
}

function GetDateDiff(startDate,endDate){  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    var dates = Math.abs((startTime - endTime))/(1000*60*60*24);     
    return  dates;    
}
//@Bind #btnSettingSave.onClick
!function(self,arg,saveFeeSettingAction,dsFeeSetting, fee_setting_type, bil_date_start, bil_date_end){
	if(!view.id("btnSettingSave").get("focused")){
		view.id("btnSettingSave").setFocus();
		return;
	}
	var data = dsFeeSetting.getData();
	if(data.entityCount > 50){
		arg.processDefault = false;
		dorado.MessageBox.alert("最大设置记录数不能大于50条!");
		return;
	}
	var start_date = bil_date_start.get("value").formatDate("Y-m-d H:i:s");;
	var end_date = bil_date_end.get("value").formatDate("Y-m-d H:i:s");;
	if(new Date(end_date).getTime() < new Date(start_date).getTime()){
		dorado.MessageBox.alert("日期：起期不能大于止期！");
		arg.processDefault = false;
		return;
	}
	if(GetDateDiff(start_date,end_date) > 180){
		dorado.MessageBox.alert("账单起止时间最大支持180天内，请重新选择");
		arg.processDefault = false;
		return;
	}
	var flag = false;
	var nm = [];
	var sort = 1;
	var exist = {};
	data.each(function(o){
		var fee_name = o.get("fee_name") || '';
		if(!fee_name){
			arg.processDefault = false;
			dorado.MessageBox.alert("费用科目不为空!");
			flag = true;
			return false;
		}
		var transaction_contain = o.get("transaction_contain") || '';
		var description_contain = o.get("description_contain") || '';
		var memo_contain = o.get("memo_contain") || '';
		var info = transaction_contain + description_contain + memo_contain;
		if(!info){
			arg.processDefault = false;
			dorado.MessageBox.alert("交易类型包含、描述包含、备注包含，3个至少有一个不为空!");
			flag = true;
			return false;
		}
		o.set("delete",false);
		o.set("sort",sort);
		nm.push(o);
		sort = sort + 1;
	});
	if(flag){
		arg.processDefault = false;
		return;
	}
	
	var delete_obj = dsFeeSetting.queryData("[#deleted]");
	delete_obj.each(function(obj){
		obj.set("delete",true);
		nm.push(obj);
	});
	var feeTypeSettingDialog = view.id("feeTypeSettingDialog");
	saveFeeSettingAction.set("parameter", {
				data : dorado.JSON.stringify(nm),
				start_date : start_date,
				end_date : end_date,
				fee_setting_type : fee_setting_type.get("value")
			});
	saveFeeSettingAction.execute(function(obj){
		if(obj && obj.code == 200){
			if(obj.msg == "账单时间起始时间须大于已月结月份！"){
				saveFeeSettingAction.set("successMessage","");
				dorado.MessageBox.confirm("账单时间包含已月结月份，是否继续重新分配", {
					detailCallback : function(button, text) {
						if (button == "yes") {
							var params = saveFeeSettingAction.get("parameter");
							$.extend(params,{"confirm":true});
							saveFeeSettingAction.set("parameter", params);
							saveFeeSettingAction.execute(function(obj){
								saveFeeSettingAction.set("successMessage","保存成功");
								feeTypeSettingDialog.close();
							});
						}else{
							feeTypeSettingDialog.close();
						}
					}
				});
			}else{
				saveFeeSettingAction.set("successMessage","保存成功");
				feeTypeSettingDialog.close();
			}
		}
	});
}
//@Bind #dsFeeSetting.onLoadData
!function(self, arg,dsFeeSetting, fee_setting_type, bil_date_start, bil_date_end){
	var data = dsFeeSetting.getData();
	var bilDate = new Date();
	if(data.entityCount > 0){
		fee_setting_type.set("value",data.getFirst().get("fee_setting_type"));
		bil_date_start.set("value",data.getFirst().get("bil_date_start"));
		bil_date_end.set("value",data.getFirst().get("bil_date_end"));
	}else{
		fee_setting_type.set("value",1);
		bil_date_start.set("value",new Date(bilDate.getFullYear(), bilDate.getMonth(), bilDate.getDate() - 6));
		bil_date_end.set("value",new Date(bilDate.getFullYear(), bilDate.getMonth(), bilDate.getDate(), 23, 59, 59))
	}
}

//@Bind #deleteDialog.beforeShow
!function(self, arg,queryAction,settlementDelFm,settlementDelDs,conditionPanel) {
	settlementDelDs.clear();
	settlementDelDs.insert({});
	var conditionPanelValues = conditionPanel.getValues();
	var dateType = conditionPanelValues.date_type;
	var startDate = conditionPanelValues.start_report_date;
	var endDate = conditionPanelValues.end_report_date;
	
	queryAction.set("parameter", {data : dorado.JSON.stringify({date_type:dateType, start_date : startDate, end_date :endDate }), tags : 'searchSettlementCreated'});
	queryAction.execute(function(obj){
		if(obj && obj.createdList){
			var mapping = new Array();
			var list = eval(obj.createdList);
			for(var i = 0;i<list.length;i++){
				mapping.push({"key":list[i],"value":list[i]});
			}
			settlementDelFm.getElement("createTime")._editor.set("mapping",mapping);
			settlementDelFm.getElement("createTime")._editor.set("value",null);
			settlementDelFm.getElement("createTime")._editor.post();
		}
		if(obj && obj.userList){
			var mapping = new Array();
			var list = eval(obj.userList);
			for(var i = 0;i<list.length;i++){
				mapping.push({"key":list[i].user_id,"value":list[i].user_name});
			}
			settlementDelFm.getElement("user_id")._editor.set("mapping",mapping);
			settlementDelFm.getElement("user_id")._editor.set("value",null);
			settlementDelFm.getElement("user_id")._editor.post();
		}
	})
}

//@Bind #cancleBtn.onClick
!function(self, arg){
	view.id("deleteDialog").close();
}

//@Bind #sureBtn.onClick
!function(self, arg, queryAction, settlementDelFm, delSettmentAction){
	var entity = settlementDelFm.get("entity");
	if(entity.validate() == "ok"){
		var data = {create_time : entity.get("createTime"), user_id : entity.get("user_id")};
		queryAction.set("parameter", {data : dorado.JSON.stringify(data), tags : 'chkSettlementCreated'});
		queryAction.execute(function(obj){
			if(obj){
				var isExist = obj.is_exist;
				if(isExist){
					dorado.MessageBox.confirm("账单包含已月结月份数据，是否继续删除？", function(){
						delSettmentAction.set("parameter", {data : dorado.JSON.stringify(data), tags : "delSettlement", conDel:true});
						delSettmentAction.execute();
					});
				}else{
					delSettmentAction.set("parameter", {data : dorado.JSON.stringify(data), tags : "delSettlement"});
					delSettmentAction.execute();
				}
			}
		});
	}
}
//@Bind #delSettmentAction.onSuccess
!function(self, arg, dsDetail){
	view.id("deleteDialog").close();
	dsDetail.flushAsync();
}

//@Bind #accTimeFm.onReady
!function(self, arg, dsAccTime){
	dsAccTime.setData({setting_type:1, acc_date : getAccDate(), start_date : getStartDate(), end_date : getEndDate()});
}

function getAccDate() {
	var now = new Date();
	now.setMonth(now.getMonth() - 1);
	now.setDate(1);
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	return now;
};

function getStartDate() {
	var now = new Date();
	now.setDate(1);
	now.setHours(0);
	now.setMinutes(0);
	now.setSeconds(0);
	return now;
};
function getEndDate() {
	var now = new Date();
	now.setDate(now.getDaysInMonth());
	now.setHours(23);
	now.setMinutes(59);
	now.setSeconds(59);
	return now;
};

//@Bind #cancleAccBtn.onClick
!function(self, arg){
	view.id("accTimeSettingDialog").close();
}

//@Bind #sureAccBtn.onClick
!function(self, arg, saveAccSettingAction, accTimeFm){
	var entity = accTimeFm.get("entity");
	var start_date = entity.get("start_date").formatDate("Y-m-d H:i:s");
	var end_date = entity.get("end_date").formatDate("Y-m-d H:i:s");
	if(new Date(end_date).getTime() < new Date(start_date).getTime()){
		dorado.MessageBox.alert("日期：起期不能大于止期！");
		arg.processDefault = false;
		return;
	}
	var params = {
			setting_type : entity.get("setting_type"),
			start_date : entity.get("start_date").formatDate("Y-m-d H:i:s"),
			end_date : entity.get("end_date").formatDate("Y-m-d H:i:s"),
			acc_date : entity.get("acc_date").formatDate("Y-m-d H:i:s"),
			memo_info : entity.get("memo_info")
	}
	dorado.MessageBox.confirm("是否确认设置记账年月？", function(){
		saveAccSettingAction.set("parameter",{data : dorado.JSON.stringify(params)});
		saveAccSettingAction.execute();
	});
}

//@Bind #inventoryDeleteCancelButton.onClick
!function(self, arg,inventoryDeleteDialog){
	inventoryDeleteDialog.close();
}

//@Bind #inventoryDeleteSureButton.onClick
!function(self, arg,inventoryDeleteDialog,inventoryDeleteForm,inventoryDeleteAction){
	var entity = inventoryDeleteForm.get("entity");
	inventoryDeleteAction.set("parameter",{
		"startTime":entity.startTime.formatDate("Y-m-d"),
		"endTime":entity.endTime.formatDate("Y-m-d"),
		"tableName":tableName
	});
	inventoryDeleteAction.execute(function(){
		inventoryDeleteDialog.close();
	})
	
}
