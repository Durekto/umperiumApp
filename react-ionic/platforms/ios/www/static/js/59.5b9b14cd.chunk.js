(this["webpackJsonpreact-ionic"]=this["webpackJsonpreact-ionic"]||[]).push([[59],{132:function(t,i,o){"use strict";o.r(i),o.d(i,"ion_fab",(function(){return a})),o.d(i,"ion_fab_button",(function(){return s})),o.d(i,"ion_fab_list",(function(){return c}));var r=o(2),n=o(25),e=(o(5),o(195)),a=function(){function t(t){var i=this;Object(n.l)(this,t),this.edge=!1,this.activated=!1,this.onClick=function(){var t=!!i.el.querySelector("ion-fab-list"),o=i.getFab(),r=o&&o.disabled;t&&!r&&(i.activated=!i.activated)}}return t.prototype.activatedChanged=function(){var t=this.activated,i=this.getFab();i&&(i.activated=t),Array.from(this.el.querySelectorAll("ion-fab-list")).forEach((function(i){i.activated=t}))},t.prototype.componentDidLoad=function(){this.activated&&this.activatedChanged()},t.prototype.close=function(){return Object(r.a)(this,void 0,void 0,(function(){return Object(r.c)(this,(function(t){return this.activated=!1,[2]}))}))},t.prototype.getFab=function(){return this.el.querySelector("ion-fab-button")},t.prototype.render=function(){var t,i=this.horizontal,o=this.vertical,r=this.edge,e=Object(n.e)(this);return Object(n.i)(n.a,{onClick:this.onClick,class:(t={},t[e]=!0,t["fab-horizontal-"+i]=void 0!==i,t["fab-vertical-"+o]=void 0!==o,t["fab-edge"]=r,t)},Object(n.i)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:absolute;z-index:999}:host(.fab-horizontal-center){left:50%;margin-left:-28px}:host-context([dir=rtl]).fab-horizontal-center,:host-context([dir=rtl]):host(.fab-horizontal-center){left:unset;right:unset;right:50%}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-horizontal-center){margin-left:unset;-webkit-margin-start:-28px;margin-inline-start:-28px}}:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]).fab-horizontal-start,:host-context([dir=rtl]):host(.fab-horizontal-start){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]).fab-horizontal-end,:host-context([dir=rtl]):host(.fab-horizontal-end){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){var i=this;Object(n.l)(this,t),this.activated=!1,this.disabled=!1,this.routerDirection="forward",this.show=!1,this.translucent=!1,this.type="button",this.onFocus=function(){i.ionFocus.emit()},this.onBlur=function(){i.ionBlur.emit()},this.ionFocus=Object(n.d)(this,"ionFocus",7),this.ionBlur=Object(n.d)(this,"ionBlur",7)}return t.prototype.render=function(){var t,i=this,o=this,r=o.el,a=o.disabled,s=o.color,c=o.href,l=o.activated,b=o.show,d=o.translucent,f=o.size,u=Object(e.c)("ion-fab-list",r),p=Object(n.e)(this),h=void 0===c?"button":"a",g="button"===h?{type:this.type}:{download:this.download,href:c,rel:this.rel,target:this.target};return Object(n.i)(n.a,{"aria-disabled":a?"true":null,class:Object.assign(Object.assign({},Object(e.a)(s)),(t={},t[p]=!0,t["fab-button-in-list"]=u,t["fab-button-translucent-in-list"]=u&&d,t["fab-button-close-active"]=l,t["fab-button-show"]=b,t["fab-button-disabled"]=a,t["fab-button-translucent"]=d,t["ion-activatable"]=!0,t["ion-focusable"]=!0,t["fab-button-"+f]=void 0!==f,t))},Object(n.i)(h,Object.assign({},g,{class:"button-native",disabled:a,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(t){return Object(e.d)(c,t,i.routerDirection)}}),Object(n.i)("span",{class:"close-icon"},Object(n.i)("ion-icon",{name:"close",lazy:!1})),Object(n.i)("span",{class:"button-inner"},Object(n.i)("slot",null)),"md"===p&&Object(n.i)("ion-ripple-effect",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--color-hover:var(--color);--background-hover:var(--ion-color-primary-tint,#4c8dff);--transition:background-color,opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.fab-button-disabled){opacity:.5;pointer-events:none}:host(.fab-button-disabled) .button-native{cursor:default;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}:host(.ion-color:hover) .button-native{background:var(--ion-color-tint);color:var(--ion-color-contrast)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade)}:host(.activated) .button-native{background:var(--background-activated);color:var(--color-activated)}:host(.ion-color.activated) .button-native,:host(.ion-color.ion-focused) .button-native{background:var(--ion-color-shade);color:var(--ion-color-contrast)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(.4) rotate(-45deg);transform:scale(.4) rotate(-45deg);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;opacity:0}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotate(0deg);transform:scale(1) rotate(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(.4) rotate(45deg);transform:scale(.4) rotate(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--background);--background-focused:var(--background-activated);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--color-activated);--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--transition:box-shadow 280ms cubic-bezier(0.4,0,0.2,1),background-color 280ms cubic-bezier(0.4,0,0.2,1),color 280ms cubic-bezier(0.4,0,0.2,1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0,0,0.2,1) 0ms}:host(.activated){--box-shadow:0 7px 8px -4px rgba(0,0,0,0.2),0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12)}.close-icon,::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-activated:rgba(var(--ion-text-color-rgb,0,0,0),0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light,#f4f5f8);--background-activated:var(--ion-color-light-shade,#d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint,#f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(t){Object(n.l)(this,t),this.activated=!1,this.side="bottom"}return t.prototype.activatedChanged=function(t){var i=Array.from(this.el.querySelectorAll("ion-fab-button")),o=t?30:0;i.forEach((function(i,r){setTimeout((function(){return i.show=t}),r*o)}))},t.prototype.render=function(){var t,i=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},t[i]=!0,t["fab-list-active"]=this.activated,t["fab-list-side-"+this.side]=!0,t)},Object(n.i)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list),:host(.fab-list-side-top) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:5px;margin-right:5px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end) ::slotted(.fab-button-in-list),:host(.fab-list-side-start) ::slotted(.fab-button-in-list){margin-left:unset;margin-right:unset;-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px}}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;right:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-start){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-start,:host-context([dir=rtl]):host(.fab-list-side-start){left:unset;right:unset;left:0}:host(.fab-list-side-end){margin-left:66px;margin-right:66px;margin-top:0;margin-bottom:0;left:0;-ms-flex-direction:row;flex-direction:row}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.fab-list-side-end){margin-left:unset;margin-right:unset;-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px}}:host-context([dir=rtl]).fab-list-side-end,:host-context([dir=rtl]):host(.fab-list-side-end){left:unset;right:unset;right:0}"},enumerable:!0,configurable:!0}),t}()},195:function(t,i,o){"use strict";o.d(i,"a",(function(){return e})),o.d(i,"b",(function(){return a})),o.d(i,"c",(function(){return n})),o.d(i,"d",(function(){return c}));var r=o(2),n=function(t,i){return null!==i.closest(t)},e=function(t){var i;return"string"===typeof t&&t.length>0?((i={"ion-color":!0})["ion-color-"+t]=!0,i):void 0},a=function(t){var i={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return i[t]=!0})),i},s=/^[a-z][a-z0-9+\-.]*:/,c=function(t,i,o){return Object(r.a)(void 0,void 0,void 0,(function(){var n;return Object(r.c)(this,(function(r){return null!=t&&"#"!==t[0]&&!s.test(t)&&(n=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,n.push(t,o)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=59.5b9b14cd.chunk.js.map