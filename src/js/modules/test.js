
let Test = {
	init(APP, spawn) {

		// setTimeout(() => spawn.data.toolbar.els.play.trigger("click"), 400);
		// setTimeout(() => spawn.data.toolbar.els.play.trigger("click"), 1000);

		return;
		return setTimeout(() => APP.dispatch({ type: "tab.new", spawn }), 500);
		// return setTimeout(() => {
		// 	spawn.find(".sample:nth(1)").trigger("click");

		// 	// setTimeout(() => APP.dispatch({ type: "close-tab", spawn }), 500);
		// }, 500);

		return setTimeout(() => {
			if (Object.keys(spawn.data.tabs._stack).length) {
				APP.spawn.dispatch({ type: "merge-all-windows", spawn });
			}
		}, 500);
		// setTimeout(() => APP.dispatch({ type: "close-file", spawn }), 300);
		
		// return setTimeout(() => window.find(`.toolbar-tool_[data-menu="view-settings"]`).trigger("mousedown"), 300);
		
		setTimeout(() => {
			let file = APP.data.tabs.active.file;
			// file._ws.skip(5);
			// file._ws.zoom(200);
			// file._ws.setVolume(.1);

			file._regions.addRegion({
				id: "region-selected",
				start: 1.5,
				end: 2,
			});

			// setTimeout(() => APP.toolbar.els.play.trigger("click"), 200);
		}, 300);

	}
};
