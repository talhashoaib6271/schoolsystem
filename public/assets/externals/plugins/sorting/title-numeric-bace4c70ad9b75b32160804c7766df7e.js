jQuery.extend(jQuery.fn.dataTableExt.oSort,{"title-numeric-pre":function(t){var e=t.match(/title="*(-?[0-9\.]+)/)[1];return parseFloat(e)},"title-numeric-asc":function(t,e){return e>t?-1:t>e?1:0},"title-numeric-desc":function(t,e){return e>t?1:t>e?-1:0}});