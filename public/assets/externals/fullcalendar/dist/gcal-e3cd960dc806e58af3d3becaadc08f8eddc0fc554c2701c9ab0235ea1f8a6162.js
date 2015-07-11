/*!
 * FullCalendar v2.2.6 Google Calendar Plugin
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function a(a,r,t,d,c){function i(o,n){var r=n||[{message:o}],l=window.console,t=l?l.warn||l.log:null;(a.googleCalendarError||e.noop).apply(c,r),(c.options.googleCalendarError||e.noop).apply(c,r),t&&t.apply(l,[o].concat(n||[]))}var s,u,g=n+"/"+encodeURIComponent(a.googleCalendarId)+"/events?callback=?",p=a.googleCalendarApiKey||c.options.googleCalendarApiKey,m=a.success;return p?(r.hasZone()||(r=r.clone().utc().add(-1,"day")),t.hasZone()||(t=t.clone().utc().add(1,"day")),d&&"local"!=d&&(u=d.replace(" ","_")),s=e.extend({},a.data||{},{key:p,timeMin:r.format(),timeMax:t.format(),timeZone:u,singleEvents:!0,maxResults:9999}),e.extend({},a,{googleCalendarId:null,url:g,data:s,startParam:!1,endParam:!1,timezoneParam:!1,success:function(a){var n,r,t=[];if(a.error)i("Google Calendar API: "+a.error.message,a.error.errors);else if(a.items&&(e.each(a.items,function(e,a){var n=a.htmlLink;u&&(n=o(n,"ctz="+u)),t.push({id:a.id,title:a.summary,start:a.start.dateTime||a.start.date,end:a.end.dateTime||a.end.date,url:n,location:a.location,description:a.description})}),n=[t].concat(Array.prototype.slice.call(arguments,1)),r=l(m,this,n),e.isArray(r)))return r;return t}})):(i("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"),{})}function o(e,a){return e.replace(/(\?.*?)?(#|$)/,function(e,o,n){return(o?o+"&":"?")+a+n})}var n="https://www.googleapis.com/calendar/v3/calendars",r=e.fullCalendar,l=r.applyAll;r.sourceNormalizers.push(function(e){var a,o=e.googleCalendarId,n=e.url;!o&&n&&((a=/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(n))?o=n:((a=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(n))||(a=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(n)))&&(o=decodeURIComponent(a[1])),o&&(e.googleCalendarId=o)),o&&(null==e.editable&&(e.editable=!1),e.url=o)}),r.sourceFetchers.push(function(e,o,n,r){return e.googleCalendarId?a(e,o,n,r,this):void 0})});