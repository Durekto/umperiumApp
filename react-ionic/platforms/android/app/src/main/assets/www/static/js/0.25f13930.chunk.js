(this["webpackJsonpreact-ionic"]=this["webpackJsonpreact-ionic"]||[]).push([[0],{215:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return a}));var r=n(31),a=function(t,e,n,a,i){var c=t.ownerDocument.defaultView;return Object(r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;a(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,r=e/n,a=t.velocityX,o=n/2,u=a>=0&&(a>.2||t.deltaX>o),s=(u?1-r:r)*n,d=0;if(s>5){var h=s/Math.abs(a);d=Math.min(h,540)}i(u,r<=0?.01:r,d)}})}}}]);
//# sourceMappingURL=0.25f13930.chunk.js.map