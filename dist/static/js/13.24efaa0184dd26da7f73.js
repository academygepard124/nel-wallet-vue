webpackJsonp([13],{"2npo":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n.bonus-wrap .dde[data-v-1672ff59] {\n  color: #2dde4f;\n}\n.bonus-wrap .form-box[data-v-1672ff59] {\n  background: #454f60;\n  border-radius: 5px;\n  padding: 20px 50px;\n  margin-bottom: 20px;\n  color: #ffffff;\n}\n.bonus-wrap .form-box div[data-v-1672ff59] {\n  margin-bottom: 10px;\n  font-size: 14px;\n}\n.bonus-wrap .form-box div[data-v-1672ff59]:last-child {\n  margin-bottom: 0;\n}\n.bonus-wrap .form-box .mybonus[data-v-1672ff59] {\n  font-size: 20px;\n}\n.bonus-wrap .page .page-previous[data-v-1672ff59],\n.bonus-wrap .page .page-next[data-v-1672ff59] {\n  background: #55637b;\n}\n",""])},Aw9c:function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__decorate||function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(o,s){function r(t){try{c(i.next(t))}catch(t){s(t)}}function a(t){try{c(i.throw(t))}catch(t){s(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(r,a)}c((i=i.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(o)throw new TypeError("Generator is already executing.");for(;c;)try{if(o=1,s&&(r=s[2&n[0]?"return":n[0]?"throw":"next"])&&!(r=r.call(s,n[1])).done)return r;switch(s=0,r&&(n=[0,r.value]),n[0]){case 0:case 1:r=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,s=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!r||n[1]>r[0]&&n[1]<r[3])){c.label=n[1];break}if(6===n[0]&&c.label<r[1]){c.label=r[1],r=n;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(n);break}r[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(t){n=[6,t],s=0}finally{o=r=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var o,s,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a};Object.defineProperty(e,"__esModule",{value:!0});var c=n("/5sW"),l=n("EOM2"),u=n("VKSY"),f=n("6nHw"),p=function(t){function e(){var e=t.call(this)||this;return e.firstLoad=!0,e.currentAddress=f.LoginInfo.getCurrentAddress(),e.historyList=null,e.isPage=!1,e.pageMsg="",e.initHistory(e.currentAddress,e.firstLoad),e}return i(e,t),e.prototype.initHistory=function(t,e){return r(this,void 0,void 0,function(){var n,i,o,s,r,c,l;return a(this,function(a){switch(a.label){case 0:return n=null,e?[3,2]:[4,u.tools.wwwtool.getbonushistbyaddress(t,this.pageUtil.currentPage,this.pageUtil.pageSize)];case 1:return n=a.sent(),[3,4];case 2:return[4,u.tools.wwwtool.getbonushistbyaddress(t,1,5)];case 3:n=a.sent(),n&&(this.pageUtil=new f.PageUtil(n.count,5),this.firstLoad=!1),a.label=4;case 4:if(i=n.list,i.length){for(o in i)console.log(i[o].blocktime),i[o].blocktime=u.tools.timetool.getTime(i[o].blocktime?i[o].blocktime:"0");this.historyList=i,s=n.count,this.isPage=!0,this.isPage=s>5,r=this.pageUtil.currentPage*this.pageUtil.pageSize-this.pageUtil.pageSize,c=this.pageUtil.totalCount,l=c-r,l>5&&(c=this.pageUtil.currentPage*this.pageUtil.pageSize),this.pageMsg="History "+(r+1)+" to "+c+" of "+this.pageUtil.totalCount}return[2]}})})},e.prototype.next=function(){this.pageUtil.currentPage==this.pageUtil.totalPage?this.pageUtil.currentPage=this.pageUtil.totalPage:(this.pageUtil.currentPage+=1,this.initHistory(this.currentAddress,this.firstLoad))},e.prototype.previous=function(){this.pageUtil.currentPage<=1?this.pageUtil.currentPage=1:(this.pageUtil.currentPage-=1,this.initHistory(this.currentAddress,this.firstLoad))},e=o([l.Component({components:{}}),s("design:paramtypes",[])],e)}(c.default);e.default=p},fhUZ:function(t,e,n){var i=n("2npo");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0d85455b",i,!0)},t94M:function(t,e,n){"use strict";function i(t){n("fhUZ")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("Aw9c"),s=n.n(o),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bonus-wrap"},[i("div",{staticClass:"title"},[i("span",[t._v(t._s(t.$t("bonus.title")))])]),t._v(" "),t._l(t.historyList,function(e,n){return i("div",{key:n,staticClass:"form-box"},[i("div",{staticClass:"mybonus"},[t._v("\n        "+t._s(t.$t("bonus.mydividend"))),i("span",{staticClass:"dde"},[t._v(t._s(e.addrBonus))]),t._v(" CGAS\n       ")]),t._v(" "),i("div",[t._v(t._s(t.$t("bonus.distribution"))+t._s(e.totalBonus)+" CGas")]),t._v(" "),i("div",[t._v(t._s(t.$t("bonus.mytotal"))+t._s(e.balance)+" NNC")]),t._v(" "),i("div",[t._v(t._s(t.$t("bonus.snapshot"))+" "+t._s(e.blocktime))])])}),t._v(" "),i("div",{staticClass:"page-msg"},[t._v(t._s(t.pageMsg))]),t._v(" "),t.isPage?i("div",{staticClass:"page"},[i("div",{staticClass:"page-previous",on:{click:t.previous}},[i("img",{attrs:{src:n("tt5S"),alt:""}})]),t._v(" "),i("div",{staticStyle:{width:"1px"}}),t._v(" "),i("div",{staticClass:"page-next",on:{click:t.next}},[i("img",{attrs:{src:n("pp3u"),alt:""}})])]):t._e()],2)},a=[],c={render:r,staticRenderFns:a},l=c,u=n("VU/8"),f=i,p=u(s.a,l,!1,f,"data-v-1672ff59",null);e.default=p.exports}});