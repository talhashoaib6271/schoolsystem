/*!
 AlphabetSearch for DataTables v1.0.0
 2014 SpryMedia Ltd - datatables.net/license
*/

(function(){function f(b,c){c.empty();c.append("Search: ");for(var a=b.column(0).data(),d,e={},g=0,f=a.length;g<f;g++)d=a[g].charAt(0).toUpperCase(),e[d]?e[d]++:e[d]=1;$('<span class="clear active"/>').data("letter","").data("match-count",a.length).html("None").appendTo(c);for(a=0;26>a;a++)d=String.fromCharCode(65+a),$("<span/>").data("letter",d).data("match-count",e[d]||0).addClass(!e[d]?"empty":"").html(d).appendTo(c);$('<div class="alphabetInfo"></div>').appendTo(c)}$.fn.dataTable.Api.register("alphabetSearch()",
function(b){this.iterator("table",function(c){c.alphabetSearch=b});return this});$.fn.dataTable.Api.register("alphabetSearch.recalc()",function(){this.iterator("table",function(b){f(new $.fn.dataTable.Api(b),$("div.alphabet",this.table().container()))});return this});$.fn.dataTable.ext.search.push(function(b,c){return!b.alphabetSearch||c[0].charAt(0)===b.alphabetSearch?!0:!1});$.fn.dataTable.AlphabetSearch=function(b){var c=new $.fn.dataTable.Api(b),a=$('<div class="alphabet"/>');f(c,a);a.on("click",
"span",function(){a.find(".active").removeClass("active");$(this).addClass("active");c.alphabetSearch($(this).data("letter")).draw()});a.on("mouseenter","span",function(){a.find("div.alphabetInfo").css({opacity:1,left:$(this).position().left,width:$(this).width()}).html($(this).data("match-count"))}).on("mouseleave","span",function(){a.find("div.alphabetInfo").css("opacity",0)});this.node=function(){return a}};$.fn.DataTable.AlphabetSearch=$.fn.dataTable.AlphabetSearch;$.fn.dataTable.ext.feature.push({fnInit:function(b){return(new $.fn.dataTable.AlphabetSearch(b)).node()},
cFeature:"A"})})();
