!function(n){"function"==typeof define&&define.amd?define(["jquery","moment"],n):n(jQuery,moment)}(function(n,T){(T.defineLocale||T.lang).call(T,"vi",{months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY LT",LLLL:"dddd, D MMMM [n\u0103m] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[H\xf4m nay l\xfac] LT",nextDay:"[Ng\xe0y mai l\xfac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\xfac] LT",lastDay:"[H\xf4m qua l\xfac] LT",lastWeek:"dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\xe0i gi\xe2y",m:"m\u1ed9t ph\xfat",mm:"%d ph\xfat",h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\xe0y",dd:"%d ng\xe0y",M:"m\u1ed9t th\xe1ng",MM:"%d th\xe1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},ordinalParse:/\d{1,2}/,ordinal:function(n){return n},week:{dow:1,doy:4}}),n.fullCalendar.datepickerLang("vi","vi",{closeText:"\u0110\xf3ng",prevText:"&#x3C;Tr\u01b0\u1edbc",nextText:"Ti\u1ebfp&#x3E;",currentText:"H\xf4m nay",monthNames:["Th\xe1ng M\u1ed9t","Th\xe1ng Hai","Th\xe1ng Ba","Th\xe1ng T\u01b0","Th\xe1ng N\u0103m","Th\xe1ng S\xe1u","Th\xe1ng B\u1ea3y","Th\xe1ng T\xe1m","Th\xe1ng Ch\xedn","Th\xe1ng M\u01b0\u1eddi","Th\xe1ng M\u01b0\u1eddi M\u1ed9t","Th\xe1ng M\u01b0\u1eddi Hai"],monthNamesShort:["Th\xe1ng 1","Th\xe1ng 2","Th\xe1ng 3","Th\xe1ng 4","Th\xe1ng 5","Th\xe1ng 6","Th\xe1ng 7","Th\xe1ng 8","Th\xe1ng 9","Th\xe1ng 10","Th\xe1ng 11","Th\xe1ng 12"],dayNames:["Ch\u1ee7 Nh\u1eadt","Th\u1ee9 Hai","Th\u1ee9 Ba","Th\u1ee9 T\u01b0","Th\u1ee9 N\u0103m","Th\u1ee9 S\xe1u","Th\u1ee9 B\u1ea3y"],dayNamesShort:["CN","T2","T3","T4","T5","T6","T7"],dayNamesMin:["CN","T2","T3","T4","T5","T6","T7"],weekHeader:"Tu",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""}),n.fullCalendar.lang("vi",{defaultButtonText:{month:"Th\xe1ng",week:"Tu\xe2\u0300n",day:"Ng\xe0y",list:"L\u1ecbch bi\u1ec3u"},allDayText:"C\u1ea3 ng\xe0y",eventLimitText:function(n){return"+ th\xeam "+n}})});