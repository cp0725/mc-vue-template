(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cac92a86","chunk-2d0ab1a4"],{"0cce":function(e,t,n){var i=n("76a4"),a=n("149d"),r=n("5063"),o=n("5eae"),s=o.encodeHTML,l=i.extend({type:"series.radar",dependencies:["radar"],init:function(e){l.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()}},getInitialData:function(e,t){return a(this,{generateCoord:"indicator_",generateCoordCount:1/0})},formatTooltip:function(e){var t=this.getData(),n=this.coordinateSystem,i=n.getIndicatorAxes(),a=this.getData().getName(e);return s(""===a?this.name:a)+"<br/>"+r.map(i,function(n,i){var a=t.get(t.mapDimension(n.dim),e);return s(n.name+" : "+a)}).join("<br />")},defaultOption:{zlevel:0,z:2,coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid"},label:{position:"top"},symbol:"emptyCircle",symbolSize:4}}),c=l;e.exports=c},"0ea0":function(e,t,n){var i=n("5063"),a=n("6d91");function r(e,t,n){a.call(this,e,t,n),this.type="value",this.angle=0,this.name="",this.model}i.inherits(r,a);var o=r;e.exports=o},"149d":function(e,t,n){var i=n("e65d"),a=n("ca8e"),r=n("5063"),o=r.extend,s=r.isArray;function l(e,t,n){t=s(t)&&{coordDimensions:t}||o({},t);var r=e.getSource(),l=i(r,t),c=new a(l,e);return c.initData(r,n),c}e.exports=l},"1ca4":function(e,t){function n(e){return{seriesType:e,reset:function(e,t){var n=t.findComponents({mainType:"legend"});if(n&&n.length){var i=e.getData();i.filterSelf(function(e){for(var t=i.getName(e),a=0;a<n.length;a++)if(!n[a].isSelected(t))return!1;return!0})}}}}e.exports=n},4409:function(e,t){function n(e,t,n){return{seriesType:e,performRawSeries:!0,reset:function(e,i,a){var r=e.getData(),o=e.get("symbol")||t,s=e.get("symbolSize"),l=e.get("symbolKeepAspect");if(r.setVisual({legendSymbol:n||o,symbol:o,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(e)){var c="function"===typeof s;return{dataEach:r.hasItemOption||c?h:null}}function h(t,n){if("function"===typeof s){var i=e.getRawValue(n),a=e.getDataParams(n);t.setItemVisual(n,"symbolSize",s(i,a))}if(t.hasItemOption){var r=t.getItemModel(n),o=r.getShallow("symbol",!0),l=r.getShallow("symbolSize",!0),c=r.getShallow("symbolKeepAspect",!0);null!=o&&t.setItemVisual(n,"symbol",o),null!=l&&t.setItemVisual(n,"symbolSize",l),null!=c&&t.setItemVisual(n,"symbolKeepAspect",c)}}}}}e.exports=n},4711:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"radar-chart"},[n("ve-radar",{attrs:{data:e.chartData,settings:e.chartSettings}})],1)},a=[],r=n("a5e1"),o=n.n(r),s={components:{VeRadar:o.a},name:"RadarChart",data:function(){return{chartSettings:{labelMap:{"日期":"date","访问用户":"PV","下单用户":"Order","下单率":"orderRate"}},chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},l=s,c=(n("d383"),n("048f")),h=Object(c["a"])(l,i,a,!1,null,null,null);h.options.__file="RadarChart.vue";t["default"]=h.exports},5268:function(e,t,n){var i=n("5063"),a=n("0ea0"),r=n("777b"),o=n("05af"),s=n("b296"),l=s.getScaleExtent,c=s.niceScaleExtent,h=n("5872");function d(e,t,n){this._model=e,this.dimensions=[],this._indicatorAxes=i.map(e.getIndicatorModels(),function(e,t){var n="indicator_"+t,i=new a(n,new r);return i.name=e.get("name"),i.model=e,e.axis=i,this.dimensions.push(n),i},this),this.resize(e,n),this.cx,this.cy,this.r,this.startAngle}d.prototype.getIndicatorAxes=function(){return this._indicatorAxes},d.prototype.dataToPoint=function(e,t){var n=this._indicatorAxes[t];return this.coordToPoint(n.dataToCoord(e),t)},d.prototype.coordToPoint=function(e,t){var n=this._indicatorAxes[t],i=n.angle,a=this.cx+e*Math.cos(i),r=this.cy-e*Math.sin(i);return[a,r]},d.prototype.pointToData=function(e){var t=e[0]-this.cx,n=e[1]-this.cy,i=Math.sqrt(t*t+n*n);t/=i,n/=i;for(var a,r=Math.atan2(-n,t),o=1/0,s=-1,l=0;l<this._indicatorAxes.length;l++){var c=this._indicatorAxes[l],h=Math.abs(r-c.angle);h<o&&(a=c,s=l,o=h)}return[s,+(a&&a.coodToData(i))]},d.prototype.resize=function(e,t){var n=e.get("center"),a=t.getWidth(),r=t.getHeight(),s=Math.min(a,r)/2;this.cx=o.parsePercent(n[0],a),this.cy=o.parsePercent(n[1],r),this.startAngle=e.get("startAngle")*Math.PI/180,this.r=o.parsePercent(e.get("radius"),s),i.each(this._indicatorAxes,function(e,t){e.setExtent(0,this.r);var n=this.startAngle+t*Math.PI*2/this._indicatorAxes.length;n=Math.atan2(Math.sin(n),Math.cos(n)),e.angle=n},this)},d.prototype.update=function(e,t){var n=this._indicatorAxes,a=this._model;i.each(n,function(e){e.scale.setExtent(1/0,-1/0)}),e.eachSeriesByType("radar",function(t,r){if("radar"===t.get("coordinateSystem")&&e.getComponent("radar",t.get("radarIndex"))===a){var o=t.getData();i.each(n,function(e){e.scale.unionExtentFromData(o,o.mapDimension(e.dim))})}},this);var r=a.get("splitNumber");function s(e){var t=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),n=e/t;return 2===n?n=5:n*=2,n*t}i.each(n,function(e,t){var n=l(e.scale,e.model);c(e.scale,e.model);var i=e.model,a=e.scale,h=i.getMin(),d=i.getMax(),u=a.getInterval();if(null!=h&&null!=d)a.setExtent(+h,+d),a.setInterval((d-h)/r);else if(null!=h){var f;do{f=h+u*r,a.setExtent(+h,f),a.setInterval(u),u=s(u)}while(f<n[1]&&isFinite(f)&&isFinite(n[1]))}else if(null!=d){var p;do{p=d-u*r,a.setExtent(p,+d),a.setInterval(u),u=s(u)}while(p>n[0]&&isFinite(p)&&isFinite(n[0]))}else{var m=a.getTicks().length-1;m>r&&(u=s(u));var g=Math.round((n[0]+n[1])/2/u)*u,y=Math.round(r/2);a.setExtent(o.round(g-y*u),o.round(g+(r-y)*u)),a.setInterval(u)}})},d.dimensions=[],d.create=function(e,t){var n=[];return e.eachComponent("radar",function(i){var a=new d(i,e,t);n.push(a),i.coordinateSystem=a}),e.eachSeriesByType("radar",function(e){"radar"===e.get("coordinateSystem")&&(e.coordinateSystem=n[e.get("radarIndex")||0])}),n},h.register("radar",d);var u=d;e.exports=u},"59c8":function(e,t,n){var i=n("5063");function a(e){var t=e.polar;if(t){i.isArray(t)||(t=[t]);var n=[];i.each(t,function(t,a){t.indicator?(t.type&&!t.shape&&(t.shape=t.type),e.radar=e.radar||[],i.isArray(e.radar)||(e.radar=[e.radar]),e.radar.push(t)):n.push(t)}),e.polar=n}i.each(e.series,function(e){e&&"radar"===e.type&&e.polarIndex&&(e.radarIndex=e.polarIndex)})}e.exports=a},"5c8e":function(e,t,n){var i=n("5063"),a={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},r={};r.categoryAxis=i.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},a),r.valueAxis=i.merge({boundaryGap:[0,0],splitNumber:5},a),r.timeAxis=i.defaults({scale:!0,min:"dataMin",max:"dataMax"},r.valueAxis),r.logAxis=i.defaults({scale:!0,logBase:10},r.valueAxis);var o=r;e.exports=o},6134:function(e,t){function n(e){e.eachSeriesByType("radar",function(e){var t=e.getData(),n=[],i=e.coordinateSystem;if(i){for(var a=i.getIndicatorAxes(),r=0;r<a.length;r++)t.each(t.mapDimension(a[r].dim),o);t.each(function(e){n[e][0]&&n[e].push(n[e][0].slice()),t.setItemLayout(e,n[e])})}function o(e,t){n[t]=n[t]||[],n[t][r]=i.dataToPoint(e,r)}})}e.exports=n},"65d6":function(e,t,n){var i=n("5063"),a=i.createHashMap;function r(e){return{getTargetSeries:function(t){var n={},i=a();return t.eachSeriesByType(e,function(e){e.__paletteScope=n,i.set(e.uid,e)}),i},reset:function(e,t){var n=e.getRawData(),i={},a=e.getData();a.each(function(e){var t=a.getRawIndex(e);i[t]=e}),n.each(function(t){var r=i[t],o=null!=r&&a.getItemVisual(r,"color",!0);if(o)n.setItemVisual(t,"color",o);else{var s=n.getItemModel(t),l=s.get("itemStyle.color")||e.getColorFromPalette(n.getName(t)||t+"",e.__paletteScope,n.count());n.setItemVisual(t,"color",l),null!=r&&a.setItemVisual(r,"color",l)}})}}}e.exports=r},"7e4f":function(e,t,n){},"9c3e":function(e,t,n){n("5268"),n("d6dd"),n("ed22")},a5e1:function(e,t,n){(function(t,i){e.exports=i(n("dae3"),n("2c14"),n("f4b0"),n("a79d"))})(0,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e["default"]:e;var t={categoryAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},valueAxis:{axisLine:{show:!1}},line:{smooth:!0},grid:{containLabel:!0,left:10,right:10}},n=["#19d4ae","#5ab1ef","#fa6e86","#ffb980","#0067a6","#c4b4e4","#d87a80","#9cbbff","#d9d0c7","#87a997","#d49ea2","#5b4947","#7ba3a8"],i=function(e){return['<span style="',"background-color:"+e+";","display: inline-block;","width: 10px;","height: 10px;","border-radius: 50%;","margin-right:2px;",'"></span>'].join("")},a=["initOptions","loading","dataEmpty","judgeWidth","widthChangeDelay"],r=["grid","dataZoom","visualMap","toolbox","title","legend","xAxis","yAxis","radar","tooltip","axisPointer","brush","geo","timeline","graphic","series","backgroundColor","textStyle"],o={th:3,mi:6,bi:9,tr:12},s={zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0,abbrLabel:{th:"k",mi:"m",bi:"b",tr:"t"}},l=1e12,c=1e9,h=1e6,d=1e3;function u(e){return"number"===typeof e&&isNaN(e)}function f(e,t,n,i){var a=e.toString().split("."),r=t-(i||0),o=2===a.length?Math.min(Math.max(a[1].length,r),t):r,s=Math.pow(10,o),l=(n(e+"e+"+o)/s).toFixed(o);if(i>t-o){var c=new RegExp("\\.?0{1,"+(i-(t-o))+"}$");l=l.replace(c,"")}return l}function p(e,t,n,i){var a=Math.abs(t),r=!1,s=!1,u="",p="",m=!1,g=void 0,y=void 0;n=n||"",t=t||0,~n.indexOf("(")?(r=!0,n=n.replace(/[(|)]/g,"")):(~n.indexOf("+")||~n.indexOf("-"))&&(y=~n.indexOf("+")?n.indexOf("+"):t<0?n.indexOf("-"):-1,n=n.replace(/[+|-]/g,"")),~n.indexOf("a")&&(g=n.match(/a(k|m|b|t)?/),g=!!g&&g[1],~n.indexOf(" a")&&(u=" "),n=n.replace(new RegExp(u+"a[kmbt]?"),""),a>=l&&!g||"t"===g?(u+=e.abbrLabel.tr,t/=l):a<l&&a>=c&&!g||"b"===g?(u+=e.abbrLabel.bi,t/=c):a<c&&a>=h&&!g||"m"===g?(u+=e.abbrLabel.mi,t/=h):(a<h&&a>=d&&!g||"k"===g)&&(u+=e.abbrLabel.th,t/=d)),~n.indexOf("[.]")&&(s=!0,n=n.replace("[.]","."));var v=t.toString().split(".")[0],b=n.split(".")[1],x=n.indexOf(","),S=(n.split(".")[0].split(",")[0].match(/0/g)||[]).length;if(b?(~b.indexOf("[")?(b=b.replace("]",""),b=b.split("["),p=f(t,b[0].length+b[1].length,i,b[1].length)):p=f(t,b.length,i),v=p.split(".")[0],p=~p.indexOf(".")?"."+p.split(".")[1]:"",s&&0===+p.slice(1)&&(p="")):v=f(t,0,i),u&&!g&&+v>=1e3&&u!==o.trillion&&(v=""+ +v/1e3,u=o.million),~v.indexOf("-")&&(v=v.slice(1),m=!0),v.length<S)for(var O=S-v.length;O>0;O--)v="0"+v;x>-1&&(v=v.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")),n.indexOf(".")||(v="");var A=v+p+(u||"");return r?A=(r&&m?"(":"")+A+(r&&m?")":""):y>=0?A=0===y?(m?"-":"+")+A:A+(m?"-":"+"):m&&(A="-"+A),A}function m(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}var g={regexp:/%/,format:function(e,t,n,i){var a=~t.indexOf(" %")?" ":"",r=void 0;return i.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?%/,""),r=i._numberToFormat(e,t,n),~r.indexOf(")")?(r=r.split(""),r.splice(-1,0,a+"%"),r=r.join("")):r=r+a+"%",r}},y={},v={};function b(e,t,n){t=t||y.defaultFormat,n=n||Math.round;var i=void 0,a=void 0;if(0===e&&null!==y.zeroFormat)i=y.zeroFormat;else if(null===e&&null!==y.nullFormat)i=y.nullFormat;else{for(var r in v)if(v[r]&&t.match(v[r].regexp)){a=v[r].format;break}a=a||p.bind(null,y),i=a(e,t,n,x)}return i}function x(e,t,n){var i=void 0;return i=0===e||"undefined"===typeof e?0:null===e||u(e)?null:"string"===typeof e?y.zeroFormat&&e===y.zeroFormat?0:y.nullFormat&&e===y.nullFormat||!e.replace(/[^0-9]+/g,"").length?null:+e:+e||null,b(i,t,n)}m(y,s),x.options=y,x._numberToFormat=p.bind(null,y),x.register=function(e,t){v[e]=t},x.unregister=function(e){v[e]=null},x.setOptions=function(e){m(y,e)},x.reset=function(){m(y,s)},x.register("percentage",g);var S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function A(e,t){var n=null;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(i,a)},t)}}function w(e,t,n){if(t){var i=e,a=t.split(".");a.forEach(function(e,t){t===a.length-1?i[e]=n:(i[e]||(i[e]={}),i=i[e])})}}var _="function"===typeof Symbol&&"symbol"===S(Symbol.iterator)?function(e){return"undefined"===typeof e?"undefined":S(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"===typeof e?"undefined":S(e)};function j(e){return Object.prototype.toString.call(e)}function M(e){return"undefined"===typeof e?"undefined":_(e)}function k(e){return"[object Object]"===j(e)}function z(e){return"[object Array]"===j(e)}function L(e){return"[object Function]"===j(e)}function I(e){return JSON.parse(JSON.stringify(e))}function E(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e,t){if(e===t)return!0;if(null===e||null===t||"object"!==M(e)||"object"!==M(t))return e===t;for(var n in e)if(P(e,n)){var i=e[n],a=t[n],r=M(i);if("undefined"===M(a))return!1;if("object"===r){if(!T(i,a))return!1}else if(i!==a)return!1}for(var o in t)if(P(t,o)&&"undefined"===M(e)[o])return!1;return!0}var C=function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-";if(isNaN(e))return i;if(!t)return e;if(L(t))return t(e,x);n=isNaN(n)?0:++n;var a=".["+new Array(n).join(0)+"]",r=t;switch(t){case"KMB":r=n?"0,0"+a+"a":"0,0a";break;case"normal":r=n?"0,0"+a:"0,0";break;case"percent":r=n?"0,0"+a+"%":"0,0.[00]%";break}return x(e,r)};function D(e,t,n){var i=e.map(function(e){return e[t]});return{data:i,formatter:function(e){return null!=n[e]?n[e]:e}}}function F(e,t,n){var a=[],r=[];return t.indicator.map(function(t,n){a[n]=e[t.name],r[n]=t.name}),{formatter:function(e){var t=[];return t.push(i(e.color)),t.push(e.name+"<br />"),e.data.value.forEach(function(e,i){t.push(r[i]+": "),t.push(C(e,a[i],n)+"<br />")}),t.join("")}}}function R(e,t,n){var i={indicator:[],shape:"circle",splitNumber:5},a={};return e.forEach(function(e){t.forEach(function(t){var i=null!=n[t]?n[t]:t;a[i]?a[i].push(e[t]):a[i]=[e[t]]})}),i.indicator=Object.keys(a).map(function(e){return{name:e,max:Math.max.apply(null,a[e])}}),i}function H(e){var t=e.rows,n=e.dimension,i=e.metrics,a=e.radar,r=e.label,o=e.itemStyle,s=e.lineStyle,l=e.labelMap,c=e.areaStyle,h={};a.indicator.forEach(function(e,t){var n=e.name;h[n]=t});var d=t.map(function(e){var t={value:[],name:e[n]};return Object.keys(e).forEach(function(n){if(~i.indexOf(n)){var a=null!=l[n]?h[l[n]]:h[n];t.value[a]=e[n]}}),t}),u={name:n,type:"radar",data:d};return r&&(u.label=r),o&&(u.itemStyle=o),s&&(u.lineStyle=s),c&&(u.areaStyle=c),[u]}var V=function(e,t,n,i){var a=n.dataType,r=void 0===a?{}:a,o=n.legendName,s=void 0===o?{}:o,l=n.labelMap,c=void 0===l?{}:l,h=n.dimension,d=void 0===h?e[0]:h,u=n.digit,f=void 0===u?2:u,p=n.label,m=n.itemStyle,g=n.lineStyle,y=n.areaStyle,v=i.tooltipVisible,b=i.legendVisible,x=e.slice();n.metrics?x=n.metrics:x.splice(e.indexOf(d),1);var S=b&&D(t,d,s),O=R(t,x,c),A=v&&F(r,O,f),w=H({rows:t,dimension:d,metrics:x,radar:O,label:p,itemStyle:m,lineStyle:g,labelMap:c,areaStyle:y}),_={legend:S,tooltip:A,radar:O,series:w};return _},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-charts-component-loading"},[n("div",{staticClass:"loader"},[n("div",{staticClass:"loading-spinner"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])])},staticRenderFns:[]},$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-charts-data-empty"},[e._v(" 暂无数据 ")])},staticRenderFns:[]};function B(e,t){Object.keys(t).forEach(function(n){var i=t[n];~n.indexOf(".")?w(e,n,i):"function"===typeof i?e[n]=i(e[n]):z(e[n])&&k(e[n][0])?e[n].forEach(function(t,a){e[n][a]=O({},t,i)}):k(e[n])?e[n]=O({},e[n],i):e[n]=i})}function G(e,t){Object.keys(t).forEach(function(n){t[n]&&(e[n]=t[n])})}function W(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}var K={render:function(e){return e("div",{class:[E(this.$options.name||this.$options._componentTag)],style:this.canvasStyle},[e("div",{style:this.canvasStyle,class:{"v-charts-mask-status":this.dataEmpty||this.loading},ref:"canvas"}),e($,{style:{display:this.dataEmpty?"":"none"}}),e(N,{style:{display:this.loading?"":"none"}}),this.$slots.default])},props:{data:{type:[Object,Array],default:function(){return{}}},settings:{type:Object,default:function(){return{}}},width:{type:String,default:"auto"},height:{type:String,default:"400px"},beforeConfig:{type:Function},afterConfig:{type:Function},afterSetOption:{type:Function},afterSetOptionOnce:{type:Function},events:{type:Object},grid:{type:[Object,Array]},colors:{type:Array},tooltipVisible:{type:Boolean,default:!0},legendVisible:{type:Boolean,default:!0},legendPosition:{type:String},markLine:{type:Object},markArea:{type:Object},markPoint:{type:Object},visualMap:{type:[Object,Array]},dataZoom:{type:[Object,Array]},toolbox:{type:[Object,Array]},initOptions:{type:Object,default:function(){return{}}},title:[Object,Array],legend:[Object,Array],xAxis:[Object,Array],yAxis:[Object,Array],radar:Object,tooltip:Object,axisPointer:[Object,Array],brush:[Object,Array],geo:[Object,Array],timeline:[Object,Array],graphic:[Object,Array],series:[Object,Array],backgroundColor:[Object,String],textStyle:[Object,Array],animation:Object,theme:Object,themeName:String,loading:Boolean,dataEmpty:Boolean,extend:Object,judgeWidth:{type:Boolean,default:!1},widthChangeDelay:{type:Number,default:300},tooltipFormatter:{type:Function},resizeable:{type:Boolean,default:!0},resizeDelay:{type:Number,default:200},changeDelay:{type:Number,default:0},setOptionOpts:{type:[Boolean,Object],default:!0},cancelResizeCheck:Boolean,notSetUnchange:Array,log:Boolean},watch:{data:{deep:!0,handler:function(e){e&&this.changeHandler()}},settings:{deep:!0,handler:function(e){e.type&&this.chartLib&&(this.chartHandler=this.chartLib[e.type]),this.changeHandler()}},width:"nextTickResize",height:"nextTickResize",events:{deep:!0,handler:"createEventProxy"},theme:{deep:!0,handler:"themeChange"},themeName:"themeChange",resizeable:"resizeableHandler"},computed:{canvasStyle:function(){return{width:this.width,height:this.height,position:"relative"}},chartColor:function(){return this.colors||this.theme&&this.theme.color||n}},methods:{dataHandler:function(){if(this.chartHandler){var e=this.data,t=e,n=t.columns,i=void 0===n?[]:n,a=t.rows,r=void 0===a?[]:a,o={tooltipVisible:this.tooltipVisible,legendVisible:this.legendVisible,echarts:this.echarts,color:this.chartColor,tooltipFormatter:this.tooltipFormatter,_once:this._once};this.beforeConfig&&(e=this.beforeConfig(e));var s=this.chartHandler(i,r,this.settings,o);s&&("function"===typeof s.then?s.then(this.optionsHandler):this.optionsHandler(s))}},nextTickResize:function(){this.$nextTick(this.resize)},resize:function(){this.cancelResizeCheck?this.echartsResize():this.$el&&this.$el.clientWidth&&this.$el.clientHeight&&this.echartsResize()},echartsResize:function(){this.echarts&&this.echarts.resize()},optionsHandler:function(t){var n=this;if(this.legendPosition&&t.legend&&(t.legend[this.legendPosition]=10,~["left","right"].indexOf(this.legendPosition)&&(t.legend.top="middle",t.legend.orient="vertical")),t.color=this.chartColor,r.forEach(function(e){n[e]&&(t[e]=n[e])}),this.animation&&W(t,this.animation),this.markArea||this.markLine||this.markPoint){var i={markArea:this.markArea,markLine:this.markLine,markPoint:this.markPoint},a=t.series;z(a)?a.forEach(function(e){G(e,i)}):k(a)&&G(a,i)}this.extend&&B(t,this.extend),this.afterConfig&&(t=this.afterConfig(t));var o=this.setOptionOpts;!this.settings.bmap&&!this.settings.amap||k(o)||(o=!1),this.notSetUnchange&&this.notSetUnchange.length&&(this.notSetUnchange.forEach(function(e){var i=t[e];i&&(T(i,n._store[e])?t[e]=void 0:n._store[e]=I(i))}),k(o)?o.notMerge=!1:o=!1),this._isDestroyed||(this.log&&console.log(t),this.echarts.setOption(t,o),this.$emit("ready",this.echarts,t,e),this._once["ready-once"]||(this._once["ready-once"]=!0,this.$emit("ready-once",this.echarts,t,e)),this.judgeWidth&&this.judgeWidthHandler(t),this.afterSetOption&&this.afterSetOption(this.echarts,t,e),this.afterSetOptionOnce&&!this._once["afterSetOptionOnce"]&&(this._once["afterSetOptionOnce"]=!0,this.afterSetOptionOnce(this.echarts,t,e)))},judgeWidthHandler:function(e){var t=this,n=this.widthChangeDelay,i=this.resize;this.$el.clientWidth||this.$el.clientHeight?i():this.$nextTick(function(e){t.$el.clientWidth||t.$el.clientHeight?i():setTimeout(function(e){i(),t.$el.clientWidth&&t.$el.clientHeight||console.warn(" Can't get dom width or height ")},n)})},resizeableHandler:function(e){e&&!this._once.onresize&&this.addResizeListener(),!e&&this._once.onresize&&this.removeResizeListener()},init:function(){if(!this.echarts){var n=this.themeName||this.theme||t;this.echarts=e.init(this.$refs.canvas,n,this.initOptions),this.data&&this.changeHandler(),this.createEventProxy(),this.resizeable&&this.addResizeListener()}},addResizeListener:function(){window.addEventListener("resize",this.resizeHandler),this._once.onresize=!0},removeResizeListener:function(){window.removeEventListener("resize",this.resizeHandler),this._once.onresize=!1},addWatchToProps:function(){var e=this,t=this._watchers.map(function(e){return e.expression});Object.keys(this.$props).forEach(function(n){if(!~t.indexOf(n)&&!~a.indexOf(n)){var i={};~["[object Object]","[object Array]"].indexOf(j(e.$props[n]))&&(i.deep=!0),e.$watch(n,function(){e.changeHandler()},i)}})},createEventProxy:function(){var e=this,t=this,n=Object.keys(this.events||{});n.length&&n.forEach(function(n){-1===e.registeredEvents.indexOf(n)&&(e.registeredEvents.push(n),e.echarts.on(n,function(e){return function(){if(e in t.events){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];t.events[e].apply(null,i)}}}(n)))})},themeChange:function(e){this.clean(),this.echarts=null,this.init()},clean:function(){this.resizeable&&this.removeResizeListener(),this.echarts.dispose()}},created:function(){this.echarts=null,this.registeredEvents=[],this._once={},this._store={},this.resizeHandler=A(this.resize,this.resizeDelay),this.changeHandler=A(this.dataHandler,this.changeDelay),this.addWatchToProps()},mounted:function(){this.init()},beforeDestroy:function(){this.clean()},_numerify:x},U=O({},K,{name:"VeRadar",data:function(){return this.chartHandler=V,{}}});return U})},a79d:function(e,t,n){var i=n("dae3");n("9c3e"),n("0cce"),n("d3f5");var a=n("65d6"),r=n("4409"),o=n("6134"),s=n("1ca4"),l=n("59c8");i.registerVisual(a("radar")),i.registerVisual(r("radar","circle")),i.registerLayout(o),i.registerProcessor(s("radar")),i.registerPreprocessor(l)},d383:function(e,t,n){"use strict";var i=n("7e4f"),a=n.n(i);a.a},d3f5:function(e,t,n){var i=n("dae3"),a=n("17b2"),r=n("5063"),o=n("3774");function s(e){return r.isArray(e)||(e=[+e,+e]),e}var l=i.extendChartView({type:"radar",render:function(e,t,n){var i=e.coordinateSystem,l=this.group,c=e.getData(),h=this._data;function d(e,t){var n=e.getItemVisual(t,"symbol")||"circle",i=e.getItemVisual(t,"color");if("none"!==n){var a=s(e.getItemVisual(t,"symbolSize")),r=o.createSymbol(n,-1,-1,2,2,i);return r.attr({style:{strokeNoScale:!0},z2:100,scale:[a[0]/2,a[1]/2]}),r}}function u(t,n,i,r,o,s){i.removeAll();for(var l=0;l<n.length-1;l++){var c=d(r,o);c&&(c.__dimIdx=l,t[l]?(c.attr("position",t[l]),a[s?"initProps":"updateProps"](c,{position:n[l]},e,o)):c.attr("position",n[l]),i.add(c))}}function f(e){return r.map(e,function(e){return[i.cx,i.cy]})}c.diff(h).add(function(t){var n=c.getItemLayout(t);if(n){var i=new a.Polygon,r=new a.Polyline,o={shape:{points:n}};i.shape.points=f(n),r.shape.points=f(n),a.initProps(i,o,e,t),a.initProps(r,o,e,t);var s=new a.Group,l=new a.Group;s.add(r),s.add(i),s.add(l),u(r.shape.points,n,l,c,t,!0),c.setItemGraphicEl(t,s)}}).update(function(t,n){var i=h.getItemGraphicEl(n),r=i.childAt(0),o=i.childAt(1),s=i.childAt(2),l={shape:{points:c.getItemLayout(t)}};l.shape.points&&(u(r.shape.points,l.shape.points,s,c,t,!1),a.updateProps(r,l,e),a.updateProps(o,l,e),c.setItemGraphicEl(t,i))}).remove(function(e){l.remove(h.getItemGraphicEl(e))}).execute(),c.eachItemGraphicEl(function(e,t){var n=c.getItemModel(t),i=e.childAt(0),o=e.childAt(1),s=e.childAt(2),h=c.getItemVisual(t,"color");l.add(e),i.useStyle(r.defaults(n.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:h})),i.hoverStyle=n.getModel("emphasis.lineStyle").getLineStyle();var d=n.getModel("areaStyle"),u=n.getModel("emphasis.areaStyle"),f=d.isEmpty()&&d.parentModel.isEmpty(),p=u.isEmpty()&&u.parentModel.isEmpty();p=p&&f,o.ignore=f,o.useStyle(r.defaults(d.getAreaStyle(),{fill:h,opacity:.7})),o.hoverStyle=u.getAreaStyle();var m=n.getModel("itemStyle").getItemStyle(["color"]),g=n.getModel("emphasis.itemStyle").getItemStyle(),y=n.getModel("label"),v=n.getModel("emphasis.label");function b(){o.attr("ignore",p)}function x(){o.attr("ignore",f)}s.eachChild(function(e){e.setStyle(m),e.hoverStyle=r.clone(g),a.setLabelStyle(e.style,e.hoverStyle,y,v,{labelFetcher:c.hostModel,labelDataIndex:t,labelDimIndex:e.__dimIdx,defaultText:c.get(c.dimensions[e.__dimIdx],t),autoColor:h,isRectText:!0})}),e.off("mouseover").off("mouseout").off("normal").off("emphasis"),e.on("emphasis",b).on("mouseover",b).on("normal",x).on("mouseout",x),a.setHoverStyle(e)}),this._data=c},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});e.exports=l},d6dd:function(e,t,n){var i=n("dae3"),a=n("5063"),r=n("5c8e"),o=n("1c25"),s=n("d01f"),l=r.valueAxis;function c(e,t){return a.defaults({show:t},e)}var h=i.extendComponentModel({type:"radar",optionUpdated:function(){var e=this.get("boundaryGap"),t=this.get("splitNumber"),n=this.get("scale"),i=this.get("axisLine"),r=this.get("axisTick"),l=this.get("axisLabel"),c=this.get("name"),h=this.get("name.show"),d=this.get("name.formatter"),u=this.get("nameGap"),f=this.get("triggerEvent"),p=a.map(this.get("indicator")||[],function(p){null!=p.max&&p.max>0&&!p.min?p.min=0:null!=p.min&&p.min<0&&!p.max&&(p.max=0);var m=c;if(null!=p.color&&(m=a.defaults({color:p.color},c)),p=a.merge(a.clone(p),{boundaryGap:e,splitNumber:t,scale:n,axisLine:i,axisTick:r,axisLabel:l,name:p.text,nameLocation:"end",nameGap:u,nameTextStyle:m,triggerEvent:f},!1),h||(p.name=""),"string"===typeof d){var g=p.name;p.name=d.replace("{value}",null!=g?g:"")}else"function"===typeof d&&(p.name=d(p.name,p));var y=a.extend(new o(p,null,this.ecModel),s);return y.mainType="radar",y.componentIndex=this.componentIndex,y},this);this.getIndicatorModels=function(){return p}},defaultOption:{zlevel:0,z:0,center:["50%","50%"],radius:"75%",startAngle:90,name:{show:!0},boundaryGap:[0,0],splitNumber:5,nameGap:15,scale:!1,shape:"polygon",axisLine:a.merge({lineStyle:{color:"#bbb"}},l.axisLine),axisLabel:c(l.axisLabel,!1),axisTick:c(l.axisTick,!1),splitLine:c(l.splitLine,!0),splitArea:c(l.splitArea,!0),indicator:[]}}),d=h;e.exports=d},ed22:function(e,t,n){var i=n("78f0"),a=(i.__DEV__,n("dae3")),r=n("5063"),o=n("ada9"),s=n("17b2"),l=["axisLine","axisTickLabel","axisName"],c=a.extendComponentView({type:"radar",render:function(e,t,n){var i=this.group;i.removeAll(),this._buildAxes(e),this._buildSplitLineAndArea(e)},_buildAxes:function(e){var t=e.coordinateSystem,n=t.getIndicatorAxes(),i=r.map(n,function(e){var n=new o(e.model,{position:[t.cx,t.cy],rotation:e.angle,labelDirection:-1,tickDirection:-1,nameDirection:1});return n});r.each(i,function(e){r.each(l,e.add,e),this.group.add(e.getGroup())},this)},_buildSplitLineAndArea:function(e){var t=e.coordinateSystem,n=t.getIndicatorAxes();if(n.length){var i=e.get("shape"),a=e.getModel("splitLine"),o=e.getModel("splitArea"),l=a.getModel("lineStyle"),c=o.getModel("areaStyle"),h=a.get("show"),d=o.get("show"),u=l.get("color"),f=c.get("color");u=r.isArray(u)?u:[u],f=r.isArray(f)?f:[f];var p=[],m=[];if("circle"===i)for(var g=n[0].getTicksCoords(),y=t.cx,v=t.cy,b=0;b<g.length;b++){if(h){var x=k(p,u,b);p[x].push(new s.Circle({shape:{cx:y,cy:v,r:g[b].coord}}))}if(d&&b<g.length-1){x=k(m,f,b);m[x].push(new s.Ring({shape:{cx:y,cy:v,r0:g[b].coord,r:g[b+1].coord}}))}}else{var S,O=r.map(n,function(e,n){var i=e.getTicksCoords();return S=null==S?i.length-1:Math.min(i.length-1,S),r.map(i,function(e){return t.coordToPoint(e.coord,n)})}),A=[];for(b=0;b<=S;b++){for(var w=[],_=0;_<n.length;_++)w.push(O[_][b]);if(w[0]&&w.push(w[0].slice()),h){x=k(p,u,b);p[x].push(new s.Polyline({shape:{points:w}}))}if(d&&A){x=k(m,f,b-1);m[x].push(new s.Polygon({shape:{points:w.concat(A)}}))}A=w.slice().reverse()}}var j=l.getLineStyle(),M=c.getAreaStyle();r.each(m,function(e,t){this.group.add(s.mergePath(e,{style:r.defaults({stroke:"none",fill:f[t%f.length]},M),silent:!0}))},this),r.each(p,function(e,t){this.group.add(s.mergePath(e,{style:r.defaults({fill:"none",stroke:u[t%u.length]},j),silent:!0}))},this)}function k(e,t,n){var i=n%t.length;return e[i]=e[i]||[],i}}});e.exports=c}}]);
//# sourceMappingURL=chunk-cac92a86.e2a3fec0.js.map