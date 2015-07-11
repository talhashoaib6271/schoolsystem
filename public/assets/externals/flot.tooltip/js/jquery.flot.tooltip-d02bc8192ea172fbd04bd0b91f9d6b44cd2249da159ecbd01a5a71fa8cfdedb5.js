!function(t){var e={tooltip:!1,tooltipOpts:{id:"flotTip",content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,monthNames:null,dayNames:null,shifts:{x:10,y:20},defaultTheme:!0,lines:{track:!1,threshold:.05},onHover:function(){},$compat:!1}},i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(e){function i(t){var i={};i.x=t.pageX,i.y=t.pageY,e.setTooltipPosition(i)}function o(i,o,n){var a=function(t,e,i,o){return Math.sqrt((i-t)*(i-t)+(o-e)*(o-e))},r=function(t,e,i,o,s,n,r){if(!r||(r=function(t,e,i,o,s,n){if("undefined"!=typeof i)return{x:i,y:e};if("undefined"!=typeof o)return{x:t,y:o};var a,r=-1/((n-o)/(s-i));return{x:a=(s*(t*r-e+o)+i*(t*-r+e-n))/(r*(s-i)+o-n),y:r*a-r*t+e}}(t,e,i,o,s,n),r.x>=Math.min(i,s)&&r.x<=Math.max(i,s)&&r.y>=Math.min(o,n)&&r.y<=Math.max(o,n))){var p=o-n,l=s-i,d=i*n-o*s;return Math.abs(p*t+l*e+d)/Math.sqrt(p*p+l*l)}var x=a(t,e,i,o),u=a(t,e,s,n);return x>u?u:x};if(n)e.showTooltip(n,o);else if(s.plotOptions.series.lines.show&&s.tooltipOptions.lines.track===!0){var p={distance:-1};t.each(e.getData(),function(t,i){for(var n=0,l=-1,d=1;d<i.data.length;d++)i.data[d-1][0]<=o.x&&i.data[d][0]>=o.x&&(n=d-1,l=d);if(-1===l)return void e.hideTooltip();var x={x:i.data[n][0],y:i.data[n][1]},u={x:i.data[l][0],y:i.data[l][1]},f=r(o.x,o.y,x.x,x.y,u.x,u.y,!1);if(f<s.tooltipOptions.lines.threshold){var h=a(x.x,x.y,o.x,o.y)<a(o.x,o.y,u.x,u.y)?n:l,c=(i.datapoints.pointsize,[o.x,x.y+(u.y-x.y)*((o.x-x.x)/(u.x-x.x))]),y={datapoint:c,dataIndex:h,series:i,seriesIndex:t};(-1===p.distance||f<p.distance)&&(p={distance:f,item:y})}}),-1!==p.distance?e.showTooltip(p.item,o):e.hideTooltip()}else e.hideTooltip()}var s=this,n=t.plot.plugins.length;if(this.plotPlugins=[],n)for(var a=0;n>a;a++)this.plotPlugins.push(t.plot.plugins[a].name);e.hooks.bindEvents.push(function(e,n){if(s.plotOptions=e.getOptions(),s.plotOptions.tooltip!==!1&&"undefined"!=typeof s.plotOptions.tooltip){s.tooltipOptions=s.plotOptions.tooltipOpts,s.tooltipOptions.$compat?(s.wfunc="width",s.hfunc="height"):(s.wfunc="innerWidth",s.hfunc="innerHeight");{s.getDomElement()}t(e.getPlaceholder()).bind("plothover",o),t(n).bind("mousemove",i)}}),e.hooks.shutdown.push(function(e,s){t(e.getPlaceholder()).unbind("plothover",o),t(s).unbind("mousemove",i)}),e.setTooltipPosition=function(e){var i=s.getDomElement(),o=i.outerWidth()+s.tooltipOptions.shifts.x,n=i.outerHeight()+s.tooltipOptions.shifts.y;e.x-t(window).scrollLeft()>t(window)[s.wfunc]()-o&&(e.x-=o),e.y-t(window).scrollTop()>t(window)[s.hfunc]()-n&&(e.y-=n),s.tipPosition.x=e.x,s.tipPosition.y=e.y},e.showTooltip=function(t,i){var o=s.getDomElement(),n=s.stringFormat(s.tooltipOptions.content,t);o.html(n),e.setTooltipPosition({x:i.pageX,y:i.pageY}),o.css({left:s.tipPosition.x+s.tooltipOptions.shifts.x,top:s.tipPosition.y+s.tooltipOptions.shifts.y}).show(),"function"==typeof s.tooltipOptions.onHover&&s.tooltipOptions.onHover(t,o)},e.hideTooltip=function(){s.getDomElement().hide().html("")}},i.prototype.getDomElement=function(){var e=t("#"+this.tooltipOptions.id);return 0===e.length&&(e=t("<div />").attr("id",this.tooltipOptions.id),e.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&e.css({background:"#fff","z-index":"1040",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),e},i.prototype.stringFormat=function(t,e){var i,o,s,n,a=/%p\.{0,1}(\d{0,})/,r=/%s/,p=/%lx/,l=/%ly/,d=/%x\.{0,1}(\d{0,})/,x=/%y\.{0,1}(\d{0,})/,u="%x",f="%y",h="%ct";if("undefined"!=typeof e.series.threshold?(i=e.datapoint[0],o=e.datapoint[1],s=e.datapoint[2]):"undefined"!=typeof e.series.lines&&e.series.lines.steps?(i=e.series.datapoints.points[2*e.dataIndex],o=e.series.datapoints.points[2*e.dataIndex+1],s=""):(i=e.series.data[e.dataIndex][0],o=e.series.data[e.dataIndex][1],s=e.series.data[e.dataIndex][2]),null===e.series.label&&e.series.originSeries&&(e.series.label=e.series.originSeries.label),"function"==typeof t&&(t=t(e.series.label,i,o,e)),"undefined"!=typeof e.series.percent?n=e.series.percent:"undefined"!=typeof e.series.percents&&(n=e.series.percents[e.dataIndex]),"number"==typeof n&&(t=this.adjustValPrecision(a,t,n)),t="undefined"!=typeof e.series.label?t.replace(r,e.series.label):t.replace(r,""),t=this.hasAxisLabel("xaxis",e)?t.replace(p,e.series.xaxis.options.axisLabel):t.replace(p,""),t=this.hasAxisLabel("yaxis",e)?t.replace(l,e.series.yaxis.options.axisLabel):t.replace(l,""),this.isTimeMode("xaxis",e)&&this.isXDateFormat(e)&&(t=t.replace(d,this.timestampToDate(i,this.tooltipOptions.xDateFormat,e.series.xaxis.options))),this.isTimeMode("yaxis",e)&&this.isYDateFormat(e)&&(t=t.replace(x,this.timestampToDate(o,this.tooltipOptions.yDateFormat,e.series.yaxis.options))),"number"==typeof i&&(t=this.adjustValPrecision(d,t,i)),"number"==typeof o&&(t=this.adjustValPrecision(x,t,o)),"undefined"!=typeof e.series.xaxis.ticks){var c;c=this.hasRotatedXAxisTicks(e)?"rotatedTicks":"ticks";var y=e.dataIndex+e.seriesIndex;if(e.series.xaxis[c].length>y&&!this.isTimeMode("xaxis",e)){var m=this.isCategoriesMode("xaxis",e)?e.series.xaxis[c][y].label:e.series.xaxis[c][y].v;m===i&&(t=t.replace(d,e.series.xaxis[c][y].label))}}if("undefined"!=typeof e.series.yaxis.ticks)for(var g in e.series.yaxis.ticks)if(e.series.yaxis.ticks.hasOwnProperty(g)){var v=this.isCategoriesMode("yaxis",e)?e.series.yaxis.ticks[g].label:e.series.yaxis.ticks[g].v;v===o&&(t=t.replace(x,e.series.yaxis.ticks[g].label))}return"undefined"!=typeof e.series.xaxis.tickFormatter&&(t=t.replace(u,e.series.xaxis.tickFormatter(i,e.series.xaxis).replace(/\$/g,"$$"))),"undefined"!=typeof e.series.yaxis.tickFormatter&&(t=t.replace(f,e.series.yaxis.tickFormatter(o,e.series.yaxis).replace(/\$/g,"$$"))),s&&(t=t.replace(h,s)),t},i.prototype.isTimeMode=function(t,e){return"undefined"!=typeof e.series[t].options.mode&&"time"===e.series[t].options.mode},i.prototype.isXDateFormat=function(){return"undefined"!=typeof this.tooltipOptions.xDateFormat&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(){return"undefined"!=typeof this.tooltipOptions.yDateFormat&&null!==this.tooltipOptions.yDateFormat},i.prototype.isCategoriesMode=function(t,e){return"undefined"!=typeof e.series[t].options.mode&&"categories"===e.series[t].options.mode},i.prototype.timestampToDate=function(e,i,o){var s=t.plot.dateGenerator(e,o);return t.plot.formatDate(s,i,this.tooltipOptions.monthNames,this.tooltipOptions.dayNames)},i.prototype.adjustValPrecision=function(t,e,i){var o,s=e.match(t);return null!==s&&""!==RegExp.$1&&(o=RegExp.$1,i=i.toFixed(o),e=e.replace(t,i)),e},i.prototype.hasAxisLabel=function(e,i){return-1!==t.inArray(this.plotPlugins,"axisLabels")&&"undefined"!=typeof i.series[e].options.axisLabel&&i.series[e].options.axisLabel.length>0},i.prototype.hasRotatedXAxisTicks=function(e){return-1!==t.inArray(this.plotPlugins,"tickRotor")&&"undefined"!=typeof e.series.xaxis.rotatedTicks};var o=function(t){new i(t)};t.plot.plugins.push({init:o,options:e,name:"tooltip",version:"0.8.4"})}(jQuery);