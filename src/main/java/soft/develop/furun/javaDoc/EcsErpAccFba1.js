
	customerReturnsDetailsCustoms = [], customerReturnsDetailsVisible = {};
	if(customercfg){
		for(var v in customercfg){
			if(changeColumns[v]){
				customerReturnsDetailsCustoms.push(changeColumns[v]);
				customerReturnsDetailsVisible[v] = customercfg[v];
			}
		}
		if(customercfg._page_size_){
			customerReturnsDetailsVisible['_page_size_'] = customerReturnsDetailsVisible._page_size_;
		}
	}
	
	
	inventoryAdjustmentsDetailsCustoms = [], inventoryAdjustmentsDetailsVisible = {};
	if(inventorycfg){
		for(var v in inventorycfg){
			if(changeColumns[v]){
				inventoryAdjustmentsDetailsCustoms.push(changeColumns[v]);
				inventoryAdjustmentsDetailsVisible[v] = inventorycfg[v];
			}
		}
		if(inventorycfg._page_size_){
			inventoryAdjustmentsDetailsVisible['_page_size_'] = inventoryAdjustmentsDetailsVisible._page_size_;
		}
	}
	
	
	removalOrderDetailDetailsCustoms = [], removalOrderDetailDetailsVisible = {};
	if(removalcfg){
		for(var v in removalcfg){
			if(changeColumns[v]){
				removalOrderDetailDetailsCustoms.push(changeColumns[v]);
				removalOrderDetailDetailsVisible[v] = removalcfg[v];
			}
		}
		if(removalcfg._page_size_){
			removalOrderDetailDetailsVisible['_page_size_'] = removalOrderDetailDetailsVisible._page_size_;
		}
	}
	//4
	restockInventoryDetailsCustoms = [], restockInventoryDetailsVisible = {};
	if(restockcfg){
		for(var v in restockcfg){
			if(changeColumns[v]){
				restockInventoryDetailsCustoms.push(changeColumns[v]);
				restockInventoryDetailsVisible[v] = restockcfg[v];
			}
		}
		if(restockcfg._page_size_){
			restockInventoryDetailsVisible['_page_size_'] = restockInventoryDetailsVisible._page_size_;
		}
	}
	//5
	inventorySummaryDetailsCustoms = [], inventorySummaryDetailsVisible = {};
	if(inventorySummarycfg){
		for(var v in inventorySummarycfg){
			if(changeColumns[v]){
				inventorySummaryDetailsCustoms.push(changeColumns[v]);
				inventorySummaryDetailsVisible[v] = inventorySummarycfg[v];
			}
		}
		if(inventorySummarycfg._page_size_){
			inventorySummaryDetailsVisible['_page_size_'] = inventorySummaryDetailsVisible._page_size_;
		}
	}
	//6
	inventoryDetailsDetailsCustoms = [], inventoryDetailsDetailsVisible = {};
	if(inventoryDetailscfg){
		for(var v in inventoryDetailscfg){
			if(changeColumns[v]){
				inventoryDetailsDetailsCustoms.push(changeColumns[v]);
				inventoryDetailsDetailsVisible[v] = inventoryDetailscfg[v];
			}
		}
		if(inventoryDetailscfg._page_size_){
			inventoryDetailsDetailsVisible['_page_size_'] = inventoryDetailsDetailsVisible._page_size_;
		}
	}
	//7
	receiptsDetailsDetailsCustoms = [], receiptsDetailsDetailsVisible = {};
	if(receiptscfg){
		for(var v in receiptscfg){
			if(changeColumns[v]){
				receiptsDetailsDetailsCustoms.push(changeColumns[v]);
				receiptsDetailsDetailsVisible[v] = receiptscfg[v];
			}
		}
		if(receiptscfg._page_size_){
			receiptsDetailsDetailsVisible['_page_size_'] = receiptsDetailsDetailsVisible._page_size_;
		}
	}
	//8
	claimDemageDetailsCustoms = [], claimDemageDetailsVisible = {};
	if(claimDemagecfg){
		for(var v in claimDemagecfg){
			if(changeColumns[v]){
				claimDemageDetailsCustoms.push(changeColumns[v]);
				claimDemageDetailsVisible[v] = claimDemagecfg[v];
			}
		}
		if(claimDemagecfg._page_size_){
			claimDemageDetailsVisible['_page_size_'] = claimDemageDetailsVisible._page_size_;
		}
	}
	//9
	removalShipmentDetailsCustoms = [], removalShipmentDetailsVisible = {};
	if(removalShipmentcfg){
		for(var v in removalShipmentcfg){
			if(changeColumns[v]){
				removalShipmentDetailsCustoms.push(changeColumns[v]);
				removalShipmentDetailsVisible[v] = removalShipmentcfg[v];
			}
		}
		if(removalShipmentcfg._page_size_){
			removalShipmentDetailsVisible['_page_size_'] = removalShipmentDetailsVisible._page_size_;
		}
	}