!function(e){"function"==typeof define&&define.amd?define(["jquery","moment"],e):e(jQuery,moment)}(function(e,t){var n={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},a={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};(t.defineLocale||t.lang).call(t,"hi",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092c\u091c\u0947",LTS:"A h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092a\u093f\u091b\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092e\u0947\u0902",past:"%s \u092a\u0939\u0932\u0947",s:"\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",m:"\u090f\u0915 \u092e\u093f\u0928\u091f",mm:"%d \u092e\u093f\u0928\u091f",h:"\u090f\u0915 \u0918\u0902\u091f\u093e",hh:"%d \u0918\u0902\u091f\u0947",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",MM:"%d \u092e\u0939\u0940\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return a[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return n[e]})},meridiemParse:/\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,meridiemHour:function(e,t){return 12===e&&(e=0),"\u0930\u093e\u0924"===t?4>e?e:e+12:"\u0938\u0941\u092c\u0939"===t?e:"\u0926\u094b\u092a\u0939\u0930"===t?e>=10?e:e+12:"\u0936\u093e\u092e"===t?e+12:void 0},meridiem:function(e){return 4>e?"\u0930\u093e\u0924":10>e?"\u0938\u0941\u092c\u0939":17>e?"\u0926\u094b\u092a\u0939\u0930":20>e?"\u0936\u093e\u092e":"\u0930\u093e\u0924"},week:{dow:0,doy:6}}),e.fullCalendar.datepickerLang("hi","hi",{closeText:"\u092c\u0902\u0926",prevText:"\u092a\u093f\u091b\u0932\u093e",nextText:"\u0905\u0917\u0932\u093e",currentText:"\u0906\u091c",monthNames:["\u091c\u0928\u0935\u0930\u0940 ","\u092b\u0930\u0935\u0930\u0940","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0947\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0942\u0932\u093e\u0908","\u0905\u0917\u0938\u094d\u0924 ","\u0938\u093f\u0924\u092e\u094d\u092c\u0930","\u0905\u0915\u094d\u091f\u0942\u092c\u0930","\u0928\u0935\u092e\u094d\u092c\u0930","\u0926\u093f\u0938\u092e\u094d\u092c\u0930"],monthNamesShort:["\u091c\u0928","\u092b\u0930","\u092e\u093e\u0930\u094d\u091a","\u0905\u092a\u094d\u0930\u0947\u0932","\u092e\u0908","\u091c\u0942\u0928","\u091c\u0942\u0932\u093e\u0908","\u0905\u0917","\u0938\u093f\u0924","\u0905\u0915\u094d\u091f","\u0928\u0935","\u0926\u093f"],dayNames:["\u0930\u0935\u093f\u0935\u093e\u0930","\u0938\u094b\u092e\u0935\u093e\u0930","\u092e\u0902\u0917\u0932\u0935\u093e\u0930","\u092c\u0941\u0927\u0935\u093e\u0930","\u0917\u0941\u0930\u0941\u0935\u093e\u0930","\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930","\u0936\u0928\u093f\u0935\u093e\u0930"],dayNamesShort:["\u0930\u0935\u093f","\u0938\u094b\u092e","\u092e\u0902\u0917\u0932","\u092c\u0941\u0927","\u0917\u0941\u0930\u0941","\u0936\u0941\u0915\u094d\u0930","\u0936\u0928\u093f"],dayNamesMin:["\u0930\u0935\u093f","\u0938\u094b\u092e","\u092e\u0902\u0917\u0932","\u092c\u0941\u0927","\u0917\u0941\u0930\u0941","\u0936\u0941\u0915\u094d\u0930","\u0936\u0928\u093f"],weekHeader:"\u0939\u092b\u094d\u0924\u093e",dateFormat:"dd/mm/yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),e.fullCalendar.lang("hi",{defaultButtonText:{month:"\u092e\u0939\u0940\u0928\u093e",week:"\u0938\u092a\u094d\u0924\u093e\u0939",day:"\u0926\u093f\u0928",list:"\u0915\u093e\u0930\u094d\u092f\u0938\u0942\u091a\u0940"},allDayText:"\u0938\u092d\u0940 \u0926\u093f\u0928",eventLimitText:function(e){return"+\u0905\u0927\u093f\u0915 "+e}})});