!function(i,o,t){function e(){var o=this;o.name="Footable Striping",o.init=function(t){o.footable=t,i(t.table).unbind("striping").bind({"footable_initialized.striping footable_row_removed.striping footable_redrawn.striping footable_sorted.striping footable_filtered.striping":function(){i(this).data("striping")!==!1&&o.setupStriping(t)}})},o.setupStriping=function(o){var t=0;i(o.table).find("> tbody > tr:not(.footable-row-detail)").each(function(){var e=i(this);e.removeClass(o.options.classes.striping.even).removeClass(o.options.classes.striping.odd),e.addClass(t%2===0?o.options.classes.striping.even:o.options.classes.striping.odd),t++})}}if(o.footable===t||null===o.foobox)throw new Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.");var n={striping:{enabled:!0},classes:{striping:{odd:"footable-odd",even:"footable-even"}}};o.footable.plugins.register(e,n)}(jQuery,window);