
let Test = {
	init(APP, spawn) {

		// setTimeout(() => spawn.data.toolbar.els.play.trigger("click"), 400);
		// setTimeout(() => spawn.data.toolbar.els.play.trigger("click"), 1000);

		// setTimeout(() => $(".def-desktop_").trigger("mousedown").trigger("mouseup"), 400);
		// return setTimeout(() => spawn.data.tabs.active.file._ws.skip(3), 800);

		// setTimeout(() => APP.dispatch({ type: "close-file", spawn }), 300);
		// setTimeout(() => APP.dispatch({ type: "tab.new", spawn }), 500);
		// setTimeout(() => APP.dispatch({ type: "close-tab", spawn }), 500);
		// return;

		return setTimeout(() => {
			let file = spawn.data.tabs.active.file;
			// file._ws.skip(5);
			// return file._ws.zoom(200);
			// file._ws.setVolume(.1);

			file._regions.addRegion({
				id: "region-selected",
				start: 1.15,
				end: 2.5,
			});

			setTimeout(() => APP.dispatch({ type: "open-dialog", arg: "dlgGain", spawn }), 200);
		}, 500);

		// return setTimeout(() => APP.dispatch({ type: "tab.new", spawn }), 500);
		// return setTimeout(() => {
		// 	spawn.find(".sample:nth(1)").trigger("click");

		// }, 500);

		return setTimeout(() => {
			let focusedId = $(`.antwin-focused_`).data("sId");
			if (spawn._sId === focusedId) {
				if (Object.keys(spawn.data.tabs._stack).length) {
					APP.spawn.dispatch({ type: "merge-all-windows", spawn });

					// console.log( "master", spawn._sId );

					// setTimeout(() => spawn.find(".tabbar-next-active_").trigger("click"), 1000);
				}
			}
		}, 1000);
		
		// return setTimeout(() => window.find(`.toolbar-tool_[data-menu="view-settings"]`).trigger("mousedown"), 300);
	}
};
