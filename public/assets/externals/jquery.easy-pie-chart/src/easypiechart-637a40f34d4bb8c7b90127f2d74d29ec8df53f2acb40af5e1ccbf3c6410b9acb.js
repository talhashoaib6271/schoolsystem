var EasyPieChart=function(e,t){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,n,a,r){return t/=r/2,1>t?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},onStart:function(){},onStep:function(){},onStop:function(){}};if("undefined"!=typeof CanvasRenderer)n.renderer=CanvasRenderer;else{if("undefined"==typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");n.renderer=SVGRenderer}var a={},r=0,i=function(){this.el=e,this.options=a;for(var i in n)n.hasOwnProperty(i)&&(a[i]=t&&"undefined"!=typeof t[i]?t[i]:n[i],"function"==typeof a[i]&&(a[i]=a[i].bind(this)));a.easing="string"==typeof a.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[a.easing])?jQuery.easing[a.easing]:n.easing,"number"==typeof a.animate&&(a.animate={duration:a.animate,enabled:!0}),"boolean"!=typeof a.animate||a.animate||(a.animate={duration:1e3,enabled:a.animate}),this.renderer=new a.renderer(e,a),this.renderer.draw(r),e.dataset&&e.dataset.percent?this.update(parseFloat(e.dataset.percent)):e.getAttribute&&e.getAttribute("data-percent")&&this.update(parseFloat(e.getAttribute("data-percent")))}.bind(this);this.update=function(e){return e=parseFloat(e),a.animate.enabled?this.renderer.animate(r,e):this.renderer.draw(e),r=e,this}.bind(this),this.disableAnimation=function(){return a.animate.enabled=!1,this},this.enableAnimation=function(){return a.animate.enabled=!0,this},i()};