!function(t,e,i){function a(){var e=this;e.name="Footable Filter",e.init=function(i){if(e.footable=i,i.options.filter.enabled===!0){if(t(i.table).data("filter")===!1)return;i.timers.register("filter"),t(i.table).unbind(".filtering").bind({"footable_initialized.filtering":function(){var a=t(i.table),l={input:a.data("filter")||i.options.filter.input,timeout:a.data("filter-timeout")||i.options.filter.timeout,minimum:a.data("filter-minimum")||i.options.filter.minimum,disableEnter:a.data("filter-disable-enter")||i.options.filter.disableEnter};l.disableEnter&&t(l.input).keypress(function(t){return window.event?13!==window.event.keyCode:13!==t.which}),a.bind("footable_clear_filter",function(){t(l.input).val(""),e.clearFilter()}),a.bind("footable_filter",function(t,i){e.filter(i.filter)}),t(l.input).keyup(function(a){i.timers.filter.stop(),27===a.which&&t(l.input).val(""),i.timers.filter.start(function(){var i=t(l.input).val()||"";e.filter(i)},l.timeout)})},"footable_redrawn.filtering":function(){var a=t(i.table),l=a.data("filter-string");l&&e.filter(l)}}).data("footable-filter",e)}},e.filter=function(i){var a=e.footable,l=t(a.table),r=l.data("filter-minimum")||a.options.filter.minimum,o=!i,n=a.raise("footable_filtering",{filter:i,clear:o});if(!(n&&n.result===!1||n.filter&&r>n.filter.length))if(n.clear)e.clearFilter();else{var f=n.filter.split(" ");l.find("> tbody > tr").hide().addClass("footable-filtered");var s=l.find("> tbody > tr:not(.footable-row-detail)");t.each(f,function(t,e){e&&e.length>0&&(l.data("current-filter",e),s=s.filter(a.options.filter.filterFunction))}),s.each(function(){e.showRow(this,a),t(this).removeClass("footable-filtered")}),l.data("filter-string",n.filter),a.raise("footable_filtered",{filter:n.filter,clear:!1})}},e.clearFilter=function(){var i=e.footable,a=t(i.table);a.find("> tbody > tr:not(.footable-row-detail)").removeClass("footable-filtered").each(function(){e.showRow(this,i)}),a.removeData("filter-string"),i.raise("footable_filtered",{clear:!0})},e.showRow=function(e,i){var a=t(e),l=a.next(),r=t(i.table);a.is(":visible")||(r.hasClass("breakpoint")&&a.hasClass("footable-detail-show")&&l.hasClass("footable-row-detail")?(a.add(l).show(),i.createOrUpdateDetailRow(e)):a.show())}}if(e.footable===i||null===e.footable)throw Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.");var l={filter:{enabled:!0,input:".footable-filter",timeout:300,minimum:2,disableEnter:!1,filterFunction:function(){var e=t(this),i=e.parents("table:first"),a=i.data("current-filter").toUpperCase(),l=e.find("td").text();return i.data("filter-text-only")||e.find("td[data-value]").each(function(){l+=t(this).data("value")}),l.toUpperCase().indexOf(a)>=0}}};e.footable.plugins.register(a,l)}(jQuery,window);