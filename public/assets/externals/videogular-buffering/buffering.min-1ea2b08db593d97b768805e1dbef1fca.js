"use strict";angular.module("com.2fdevs.videogular.plugins.buffering",[]).directive("vgBuffering",["VG_STATES","VG_UTILS",function(n,i){return{restrict:"E",require:"^videogular",template:"<div class='bufferingContainer'><div ng-class='spinnerClass' class='loadingSpinner'></div></div>",link:function(e,s,t,u){function r(){e.spinnerClass={stop:u.isBuffering},s.css("display","block")}function c(){e.spinnerClass={stop:u.isBuffering},s.css("display","none")}function f(n){n?r():c()}function o(i){i==n.STOP&&c()}function a(n){n&&c()}r(),i.isMobileDevice()?c():e.$watch(function(){return u.isReady},function(n,i){(1==u.isReady||n!=i)&&a(n)}),e.$watch(function(){return u.currentState},function(n,i){n!=i&&o(n)}),e.$watch(function(){return u.isBuffering},function(n,i){n!=i&&f(n)})}}}]);