(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8eb261d8"],{"011b":function(t,e,i){var o=i("5063"),n=i("5c8e"),a=i("0b6c"),r=i("6869"),s=r.getLayoutParams,l=r.mergeLayoutParam,c=i("9ff2"),d=["value","category","time","log"];function u(t,e,i,r){o.each(d,function(a){e.extend({type:t+"Axis."+a,mergeDefaultAndTheme:function(e,n){var r=this.layoutMode,c=r?s(e):{},d=n.getTheme();o.merge(e,d.get(a+"Axis")),o.merge(e,this.getDefaultOption()),e.type=i(t,e),r&&l(e,c,r)},optionUpdated:function(){var t=this.option;"category"===t.type&&(this.__ordinalMeta=c.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:o.mergeAll([{},n[a+"Axis"],r],!0)})}),a.registerSubTypeDefaulter(t+"Axis",o.curry(i,t))}t.exports=u},"06a6":function(t,e,i){i("1d58");var o=i("0b6c"),n=o.extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});t.exports=n},1118:function(t,e,i){var o=i("5063"),n=i("6d91"),a=function(t,e,i,o,a){n.call(this,t,e,i),this.type=o||"value",this.position=a||"bottom"};a.prototype={constructor:a,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},o.inherits(a,n);var r=a;t.exports=r},"1d58":function(t,e,i){var o=i("5063"),n=i("0b6c"),a=i("011b"),r=i("d01f"),s=n.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function l(t,e){return e.type||(e.data?"category":"value")}o.merge(s.prototype,r);var c={offset:0};a("x",s,l,c),a("y",s,l,c);var d=s;t.exports=d},2231:function(t,e,i){var o=i("5063");function n(t){return this._axes[t]}var a=function(t){this._axes={},this._dimList=[],this.name=t||""};a.prototype={constructor:a,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return o.map(this._dimList,n,this)},getAxesByScale:function(t){return t=t.toLowerCase(),o.filter(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,o=t instanceof Array?[]:{},n=0;n<i.length;n++){var a=i[n],r=this._axes[a];o[a]=r[e](t[a])}return o}};var r=a;t.exports=r},"25d6":function(t,e,i){var o=i("5063"),n=i("17b2"),a=i("ada9"),r=i("4967"),s=i("a740"),l=["axisLine","axisTickLabel","axisName"],c=["splitArea","splitLine"],d=r.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,r){this.group.removeAll();var u=this._axisGroup;if(this._axisGroup=new n.Group,this.group.add(this._axisGroup),t.get("show")){var x=t.getCoordSysModel(),h=s.layout(x,t),g=new a(t,h);o.each(l,g.add,g),this._axisGroup.add(g.getGroup()),o.each(c,function(e){t.get(e+".show")&&this["_"+e](t,x)},this),n.groupTransition(u,this._axisGroup,t),d.superCall(this,"render",t,e,i,r)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var a=t.getModel("splitLine"),r=a.getModel("lineStyle"),s=r.get("color");s=o.isArray(s)?s:[s];for(var l=e.coordinateSystem.getRect(),c=i.isHorizontal(),d=0,u=i.getTicksCoords({tickModel:a}),x=[],h=[],g=r.getLineStyle(),f=0;f<u.length;f++){var p=i.toGlobalCoord(u[f].coord);c?(x[0]=p,x[1]=l.y,h[0]=p,h[1]=l.y+l.height):(x[0]=l.x,x[1]=p,h[0]=l.x+l.width,h[1]=p);var y=d++%s.length,m=u[f].tickValue;this._axisGroup.add(new n.Line(n.subPixelOptimizeLine({anid:null!=m?"line_"+u[f].tickValue:null,shape:{x1:x[0],y1:x[1],x2:h[0],y2:h[1]},style:o.defaults({stroke:s[y]},g),silent:!0})))}}},_splitArea:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var a=t.getModel("splitArea"),r=a.getModel("areaStyle"),s=r.get("color"),l=e.coordinateSystem.getRect(),c=i.getTicksCoords({tickModel:a,clamp:!0});if(c.length){var d=s.length,u=this._splitAreaColors,x=o.createHashMap(),h=0;if(u)for(var g=0;g<c.length;g++){var f=u.get(c[g].tickValue);if(null!=f){h=(f+(d-1)*g)%d;break}}var p=i.toGlobalCoord(c[0].coord),y=r.getAreaStyle();s=o.isArray(s)?s:[s];for(g=1;g<c.length;g++){var m,v,A,_,C=i.toGlobalCoord(c[g].coord);i.isHorizontal()?(m=p,v=l.y,A=C-m,_=l.height,p=m+A):(m=l.x,v=p,A=l.width,_=C-v,p=v+_);var b=c[g-1].tickValue;null!=b&&x.set(b,h),this._axisGroup.add(new n.Rect({anid:null!=b?"area_"+b:null,shape:{x:m,y:v,width:A,height:_},style:o.defaults({fill:s[h]},y),silent:!0})),h=(h+1)%d}this._splitAreaColors=x}}}});d.extend({type:"xAxis"}),d.extend({type:"yAxis"})},"5c8e":function(t,e,i){var o=i("5063"),n={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},a={};a.categoryAxis=o.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},n),a.valueAxis=o.merge({boundaryGap:[0,0],splitNumber:5},n),a.timeAxis=o.defaults({scale:!0,min:"dataMin",max:"dataMax"},a.valueAxis),a.logAxis=o.defaults({scale:!0,logBase:10},a.valueAxis);var r=a;t.exports=r},"5d85":function(t,e,i){var o=i("78f0"),n=(o.__DEV__,i("5063")),a=n.isObject,r=n.each,s=n.map,l=n.indexOf,c=(n.retrieve,i("6869")),d=c.getLayoutRect,u=i("b296"),x=u.createScaleByModel,h=u.ifAxisCrossZero,g=u.niceScaleExtent,f=u.estimateLabelUnionRect,p=i("d104"),y=i("1118"),m=i("5872"),v=i("cfe2"),A=v.getStackedDimension;function _(t,e,i){return t.getCoordSysModel()===e}function C(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}i("06a6");var b=C.prototype;function L(t,e,i){i.getAxesOnZeroOf=function(){return o?[o]:[]};var o,n=t[e],a=i.model,r=a.get("axisLine.onZero"),s=a.get("axisLine.onZeroAxisIndex");if(r)if(null==s){for(var l in n)if(n.hasOwnProperty(l)&&M(n[l])){o=n[l];break}}else M(n[s])&&(o=n[s])}function M(t){return t&&"category"!==t.type&&"time"!==t.type&&h(t)}function w(t,e){var i=t.getExtent(),o=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return o-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return o-t+e}}b.type="grid",b.axisPointerEnabled=!0,b.getRect=function(){return this._rect},b.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),r(i.x,function(t){g(t.scale,t.model)}),r(i.y,function(t){g(t.scale,t.model)}),r(i.x,function(t){L(i,"y",t)}),r(i.y,function(t){L(i,"x",t)}),this.resize(this.model,e)},b.resize=function(t,e,i){var o=d(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var n=this._axesList;function a(){r(n,function(t){var e=t.isHorizontal(),i=e?[0,o.width]:[0,o.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),w(t,e?o.x:o.y)})}a(),!i&&t.get("containLabel")&&(r(n,function(t){if(!t.model.get("axisLabel.inside")){var e=f(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");o[i]-=e[i]+n,"top"===t.position?o.y+=e.height+n:"left"===t.position&&(o.x+=e.width+n)}}}),a())},b.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var o in i)if(i.hasOwnProperty(o))return i[o];return i[e]}},b.getAxes=function(){return this._axesList.slice()},b.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}a(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var o=0,n=this._coordsList;o<n.length;o++)if(n[o].getAxis("x").index===t||n[o].getAxis("y").index===e)return n[o]},b.getCartesians=function(){return this._coordsList.slice()},b.convertToPixel=function(t,e,i){var o=this._findConvertTarget(t,e);return o.cartesian?o.cartesian.dataToPoint(i):o.axis?o.axis.toGlobalCoord(o.axis.dataToCoord(i)):null},b.convertFromPixel=function(t,e,i){var o=this._findConvertTarget(t,e);return o.cartesian?o.cartesian.pointToData(i):o.axis?o.axis.coordToData(o.axis.toLocalCoord(i)):null},b._findConvertTarget=function(t,e){var i,o,n=e.seriesModel,a=e.xAxisModel||n&&n.getReferringComponents("xAxis")[0],r=e.yAxisModel||n&&n.getReferringComponents("yAxis")[0],s=e.gridModel,c=this._coordsList;if(n)i=n.coordinateSystem,l(c,i)<0&&(i=null);else if(a&&r)i=this.getCartesian(a.componentIndex,r.componentIndex);else if(a)o=this.getAxis("x",a.componentIndex);else if(r)o=this.getAxis("y",r.componentIndex);else if(s){var d=s.coordinateSystem;d===this&&(i=this._coordsList[0])}return{cartesian:i,axis:o}},b.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},b._initCartesian=function(t,e,i){var o={left:!1,right:!1,top:!1,bottom:!1},n={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);function s(i){return function(r,s){if(_(r,t,e)){var l=r.get("position");"x"===i?"top"!==l&&"bottom"!==l&&(l="bottom",o[l]&&(l="top"===l?"bottom":"top")):"left"!==l&&"right"!==l&&(l="left",o[l]&&(l="left"===l?"right":"left")),o[l]=!0;var c=new y(i,x(r),[0,0],r.get("type"),l),d="category"===c.type;c.onBand=d&&r.get("boundaryGap"),c.inverse=r.get("inverse"),r.axis=c,c.model=r,c.grid=this,c.index=s,this._axesList.push(c),n[i][s]=c,a[i]++}}}this._axesMap=n,r(n.x,function(e,i){r(n.y,function(o,n){var a="x"+i+"y"+n,r=new p(a);r.grid=this,r.model=t,this._coordsMap[a]=r,this._coordsList.push(r),r.addAxis(e),r.addAxis(o)},this)},this)},b._updateScale=function(t,e){function i(t,e,i){r(t.mapDimension(e.dim,!0),function(i){e.scale.unionExtentFromData(t,A(t,i))})}r(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(o){if(D(o)){var n=T(o,t),a=n[0],r=n[1];if(!_(a,e,t)||!_(r,e,t))return;var s=this.getCartesian(a.componentIndex,r.componentIndex),l=o.getData(),c=s.getAxis("x"),d=s.getAxis("y");"list"===l.type&&(i(l,c,o),i(l,d,o))}},this)},b.getTooltipAxes=function(t){var e=[],i=[];return r(this.getCartesians(),function(o){var n=null!=t&&"auto"!==t?o.getAxis(t):o.getBaseAxis(),a=o.getOtherAxis(n);l(e,n)<0&&e.push(n),l(i,a)<0&&i.push(a)}),{baseAxes:e,otherAxes:i}};var S=["xAxis","yAxis"];function T(t,e){return s(S,function(e){var i=t.getReferringComponents(e)[0];return i})}function D(t){return"cartesian2d"===t.get("coordinateSystem")}C.create=function(t,e){var i=[];return t.eachComponent("grid",function(o,n){var a=new C(o,t,e);a.name="grid_"+n,a.resize(o,e,!0),o.coordinateSystem=a,i.push(a)}),t.eachSeries(function(e){if(D(e)){var i=T(e,t),o=i[0],n=i[1],a=o.getCoordSysModel(),r=a.coordinateSystem;e.coordinateSystem=r.getCartesian(o.componentIndex,n.componentIndex)}}),i},C.dimensions=C.prototype.dimensions=p.prototype.dimensions,m.register("cartesian2d",C);var G=C;t.exports=G},9470:function(t,e,i){i("1d58"),i("25d6")},b260:function(t,e,i){var o=i("8f59"),n=o.retrieveRawValue;function a(t,e){var i=t.mapDimension("defaultedLabel",!0),o=i.length;if(1===o)return n(t,e,i[0]);if(o){for(var a=[],r=0;r<i.length;r++){var s=n(t,e,i[r]);a.push(s)}return a.join(" ")}}e.getDefaultLabel=a},d104:function(t,e,i){var o=i("5063"),n=i("2231");function a(t){n.call(this,t)}a.prototype={constructor:a,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,i){var o=this.getAxis("x"),n=this.getAxis("y");return i=i||[],i[0]=o.toGlobalCoord(o.dataToCoord(t[0])),i[1]=n.toGlobalCoord(n.dataToCoord(t[1])),i},clampData:function(t,e){var i=this.getAxis("x").scale,o=this.getAxis("y").scale,n=i.getExtent(),a=o.getExtent(),r=i.parse(t[0]),s=o.parse(t[1]);return e=e||[],e[0]=Math.min(Math.max(Math.min(n[0],n[1]),r),Math.max(n[0],n[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var i=this.getAxis("x"),o=this.getAxis("y");return e=e||[],e[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=o.coordToData(o.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},o.inherits(a,n);var r=a;t.exports=r},ff8f:function(t,e,i){var o=i("dae3"),n=i("5063"),a=i("17b2");i("5d85"),i("9470"),o.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new a.Rect({shape:t.coordinateSystem.getRect(),style:n.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),o.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})})}}]);
//# sourceMappingURL=chunk-8eb261d8.cbad3e08.js.map