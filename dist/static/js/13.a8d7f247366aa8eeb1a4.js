webpackJsonp([13],{"6M52":function(t,n,o){"use strict";function s(t){o("Rd8h")}Object.defineProperty(n,"__esModule",{value:!0});var e=o("DaUf"),a=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);var r=o("tlAw"),u=o("VU/8"),l=s,p=u(a.a,r.a,!1,l,"data-v-621d41f6",null);n.default=p.exports},DaUf:function(t,n,o){"use strict";var s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])};return function(n,o){function s(){this.constructor=n}t(n,o),n.prototype=null===o?Object.create(o):(s.prototype=o.prototype,new s)}}(),e=this&&this.__decorate||function(t,n,o,s){var e,a=arguments.length,i=a<3?n:null===s?s=Object.getOwnPropertyDescriptor(n,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,o,s);else for(var r=t.length-1;r>=0;r--)(e=t[r])&&(i=(a<3?e(i):a>3?e(n,o,i):e(n,o))||i);return a>3&&i&&Object.defineProperty(n,o,i),i},a=this&&this.__metadata||function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)},i=this&&this.__awaiter||function(t,n,o,s){return new(o||(o=Promise))(function(e,a){function i(t){try{u(s.next(t))}catch(t){a(t)}}function r(t){try{u(s.throw(t))}catch(t){a(t)}}function u(t){t.done?e(t.value):new o(function(n){n(t.value)}).then(i,r)}u((s=s.apply(t,n||[])).next())})},r=this&&this.__generator||function(t,n){function o(t){return function(n){return s([t,n])}}function s(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,a=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(i=u.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(t,u)}catch(t){o=[6,t],a=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var e,a,i,r,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r};Object.defineProperty(n,"__esModule",{value:!0});var u=o("/5sW"),l=o("443i"),p=o("VKSY"),c=o("6nHw"),f=function(t){function n(){var n=t.call(this)||this;return n.totalSend="0",n.blocktime="",n.mybalance="0",n.currentAddress=c.LoginInfo.getCurrentAddress(),n.bonusList=null,n.isPage=!1,n.myBonusPageUtil=new c.PageUtil(0,5),n.isBonusPage=!1,n.myBonus="0",n.isApplyBonus=0,n.initMyBonus(n.currentAddress),n.initBonusHistory(n.currentAddress,!0),n}return s(n,t),n.prototype.initMyBonus=function(t){return i(this,void 0,void 0,function(){var n,o;return r(this,function(s){switch(s.label){case 0:return[4,p.tools.wwwtool.getcurrentbonus(t)];case 1:return n=s.sent(),n&&(this.myBonus=n.send,this.totalSend=n.totalSend,this.mybalance=n.balance,o=parseInt(n.blocktime),this.blocktime=p.tools.timetool.getTime(o||0),""!=n.txid?(this.myBonus="0",this.isApplyBonus=3):n.applied?this.isApplyBonus=2:this.isApplyBonus=1),[2]}})})},n.prototype.toApplyBonus=function(){return i(this,void 0,void 0,function(){var t;return r(this,function(n){switch(n.label){case 0:return[4,p.tools.wwwtool.applybonus(this.currentAddress)];case 1:return t=n.sent(),t.result?this.isApplyBonus=2:this.isApplyBonus=1,[2]}})})},n.prototype.initBonusHistory=function(t,n){return i(this,void 0,void 0,function(){var o,s,e,a;return r(this,function(i){switch(i.label){case 0:return o=null,n?[3,2]:[4,p.tools.wwwtool.getbonusbyaddress(t,this.myBonusPageUtil.currentPage,this.myBonusPageUtil.pageSize)];case 1:return o=i.sent(),[3,4];case 2:return[4,p.tools.wwwtool.getbonusbyaddress(t,1,5)];case 3:o=i.sent(),o&&(this.myBonusPageUtil=new c.PageUtil(o.count,5)),i.label=4;case 4:if(s=o.list,s.length){for(e in s)s[e].blocktime=p.tools.timetool.getTime(s[e].blocktime?s[e].blocktime:"0");this.bonusList=s,a=o.count,this.isBonusPage=!0,a>this.myBonusPageUtil.pageSize?this.isPage=!0:this.isPage=!1}return[2]}})})},n.prototype.nextBonus=function(){this.myBonusPageUtil.currentPage==this.myBonusPageUtil.totalPage?this.myBonusPageUtil.currentPage=this.myBonusPageUtil.totalPage:(this.myBonusPageUtil.currentPage+=1,this.initBonusHistory(this.currentAddress,!1))},n.prototype.previousBonus=function(){this.myBonusPageUtil.currentPage<=1?this.myBonusPageUtil.currentPage=1:(this.myBonusPageUtil.currentPage-=1,this.initBonusHistory(this.currentAddress,!1))},n=e([l.Component({components:{}}),a("design:paramtypes",[])],n)}(u.default);n.default=f},Rd8h:function(t,n,o){var s=o("bc7/");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o("rjj0")("4da62045",s,!0,{})},"bc7/":function(t,n,o){n=t.exports=o("FZ+f")(!1),n.push([t.i,"\n.bonus-wrap .dde[data-v-621d41f6] {\n  color: #2dde4f;\n}\n.bonus-wrap .bonus-tips[data-v-621d41f6] {\n  font-size: 14px;\n  color: #c5c5c5;\n  margin-top: 50px;\n}\n.bonus-wrap .btn[data-v-621d41f6] {\n  margin-bottom: 20px;\n}\n.bonus-wrap .btn[data-v-621d41f6]:last-child {\n  margin-bottom: 0;\n}\n.bonus-wrap .btn.btn-disable[data-v-621d41f6] {\n  background: #77bcf6;\n  opacity: 1;\n}\n.bonus-wrap .form-box[data-v-621d41f6] {\n  background: #454f60;\n  border-radius: 5px;\n  padding: 30px 50px;\n  margin-bottom: 20px;\n  color: #ffffff;\n  position: relative;\n}\n.bonus-wrap .form-box .nnc-wrap strong[data-v-621d41f6] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.bonus-wrap .form-box .nnc-wrap strong span[data-v-621d41f6] {\n  font-size: 30px;\n}\n.bonus-wrap .form-box .nnc-wrap p[data-v-621d41f6] {\n  font-size: 14px;\n  color: #ffffff;\n  margin-bottom: 5px;\n}\n.bonus-wrap .form-box .mybonus-wrap[data-v-621d41f6] {\n  border: 1px solid #b2b2b2;\n  border-radius: 5px;\n  padding: 20px 15px 10px 15px;\n  margin-bottom: 20px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linetop-text[data-v-621d41f6] {\n  font-size: 14px;\n  color: #ffffff;\n  margin-bottom: 15px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linetop-text.mybonus-text[data-v-621d41f6] {\n  font-size: 20px;\n}\n.bonus-wrap .form-box .mybonus-wrap hr[data-v-621d41f6] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.bonus-wrap .form-box .mybonus-wrap .linedown-text[data-v-621d41f6] {\n  font-size: 12px;\n  color: #ffffff;\n}\n.bonus-wrap .form-box .btn-right[data-v-621d41f6] {\n  position: absolute;\n  top: 50%;\n  right: 30px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.bonus-wrap .form-box .btn-right .status-text[data-v-621d41f6] {\n  font-size: 18px;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 30px;\n}\n.bonus-wrap .page .page-previous[data-v-621d41f6],\n.bonus-wrap .page .page-next[data-v-621d41f6] {\n  background: #55637b;\n  cursor: pointer;\n}\n.bonus-wrap .page .page-previous.notallow[data-v-621d41f6],\n.bonus-wrap .page .page-next.notallow[data-v-621d41f6] {\n  background: #33393d;\n  cursor: not-allowed;\n}\n",""])},tlAw:function(t,n,o){"use strict";var s=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"bonus-wrap"},[s("div",{staticClass:"bonus-tips"},[t._v(t._s(t.$t("bonus.tips")))]),t._v(" "),s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("bonus.title")))])]),t._v(" "),s("div",{staticClass:"form-box"},[s("div",{staticClass:"nnc-wrap"},[s("strong",[t._v("\n        "+t._s(t.$t("bonus.mydividend"))+"\n        "),s("span",{staticClass:"dde"},[t._v(t._s(t.myBonus))]),t._v(" CGAS\n      ")]),t._v(" "),s("p",[t._v(t._s(t.$t("bonus.distribution"))+t._s(t.totalSend)+" CGas")]),t._v(" "),s("p",[t._v(t._s(t.$t("bonus.mytotal"))+t._s(t.mybalance)+" NNC")]),t._v(" "),s("p",[t._v(t._s(t.$t("bonus.snapshot"))+t._s(t.blocktime))])]),t._v(" "),s("div",{staticClass:"btn-right"},[2==t.isApplyBonus?s("button",{staticClass:"btn btn-nel btn-bid btn-disable"},[t._v(t._s(t.$t("btn.applying")))]):3==t.isApplyBonus?s("button",{staticClass:"btn btn-nel btn-bid btn-disable"},[t._v(t._s(t.$t("btn.applyed")))]):s("button",{staticClass:"btn btn-nel btn-bid",class:{"btn-disable":0==t.isApplyBonus},attrs:{disabled:0==t.isApplyBonus},on:{click:t.toApplyBonus}},[t._v(t._s(t.$t("btn.apply")))])])]),t._v(" "),0!=t.myBonusPageUtil.totalCount?s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("bonus.title2")))])]):t._e(),t._v(" "),0!=t.myBonusPageUtil.totalCount?s("div",{staticClass:"form-box"},[t._l(t.bonusList,function(n,o){return s("div",{key:o,staticClass:"mybonus-wrap"},[s("div",{staticClass:"linetop-text mybonus-text"},[s("span",{staticClass:"dde"},[t._v("+"+t._s(n.send))]),t._v(" CGas\n      ")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"linedown-text"},[t._v(t._s(n.blocktime))])])}),t._v(" "),t.isBonusPage?s("div",{staticClass:"page-msg"},[t._v(t._s(t.$t("page.page"))+t._s(t.myBonusPageUtil.currentPage)+t._s(t.$t("page.total1"))+t._s(t.myBonusPageUtil.totalPage)+t._s(t.$t("page.total2")))]):t._e(),t._v(" "),t.isBonusPage?s("div",{staticClass:"page"},[s("div",{staticClass:"page-previous",on:{click:t.previousBonus}},[s("img",{attrs:{src:o("tt5S"),alt:""}})]),t._v(" "),s("div",{staticStyle:{width:"1px"}}),t._v(" "),s("div",{staticClass:"page-next",on:{click:t.nextBonus}},[s("img",{attrs:{src:o("pp3u"),alt:""}})])]):t._e()],2):t._e()])},e=[],a={render:s,staticRenderFns:e};n.a=a}});