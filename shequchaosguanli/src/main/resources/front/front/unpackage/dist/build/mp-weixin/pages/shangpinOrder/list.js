(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinOrder/list"],{"0bb7":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([t.e("common/vendor"),t.e("components/mescroll-uni/mescroll-uni")]).then(t.bind(null,"03d0"))},uniPopup:function(){return t.e("components/uni-popup/uni-popup").then(t.bind(null,"d26e"))}},a=function(){var n=this,e=n.$createElement;n._self._c},s=[]},"52fe":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function s(n,e,t,r,a,s,i){try{var u=n[s](i),c=u.value}catch(o){return void t(o)}u.done?e(c):Promise.resolve(c).then(r,a)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function u(n){s(i,r,a,u,c,"next",n)}function c(n){s(i,r,a,u,c,"throw",n)}u(void 0)}))}}var u={data:function(){return{navlist:[],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,shangpinLiuyanText:"",user:"",shangpinId:null,shangpinCommentbackText:null}},onShow:function(){var e=this;return i(r.default.mark((function t(){var a,s,i,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.getStorageSync("nowTable"),t.next=3,e.$api.session(a);case 3:return s=t.sent,e.user=s.data,e.hasNext=!0,i={page:1,limit:100,dicCode:"shangpin_order_types"},t.next=9,e.$api.page("dictionary",i);case 9:u=t.sent,e.navlist=u.data.list,e.mescroll&&e.mescroll.resetUpScroll();case 12:case"end":return t.stop()}}),t)})))()},methods:{navselect:function(n){this.currentIndex=n,this.shangpinOrderTypes=n,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(n){this.mescroll=n},downCallback:function(n){this.hasNext=!0,n.resetUpScroll()},upCallback:function(n){var e=this;return i(r.default.mark((function t(){var a,s;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:n.num,limit:n.size},e.shangpinOrderTypes&&(a["shangpinOrderTypes"]=e.shangpinOrderTypes),t.next=4,e.$api.page("shangpinOrder",a);case 4:s=t.sent,1==n.num&&(e.list=[]),e.list=e.list.concat(s.data.list),0==s.data.list.length&&(e.hasNext=!1),n.endSuccess(n.size,e.hasNext);case 9:case"end":return t.stop()}}),t)})))()},onCancelTap:function(e){var t=this;return i(r.default.mark((function a(){var s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=t,n.showModal({title:"提示",content:"是否确认退款",success:function(){var n=i(r.default.mark((function n(t){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.confirm){n.next=7;break}return a=[{key:"id",val:e.id}],n.next=4,s.$api.requestCondition("shangpinOrder","refund",a);case 4:n.sent,s.$utils.msgBack("退款成功"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}()});case 2:case"end":return a.stop()}}),a)})))()},onChatTap:function(n){this.shangpinId=null,this.shangpinId=n,this.$refs.popup.open()},onFinishTap:function(){var n=this;return i(r.default.mark((function e(){var t,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=n,t.shangpinCommentbackText){e.next=4;break}return t.$utils.msg("请填写评价内容"),e.abrupt("return");case 4:return a=[{key:"id",val:t.shangpinId},{key:"commentbackText",val:t.shangpinCommentbackText}],e.next=7,t.$api.requestCondition("shangpinOrder","commentback",a);case 7:t.$utils.msg("评论成功"),t.$refs.popup.close();case 9:case"end":return e.stop()}}),e)})))()},onCloseWinTap:function(){this.$refs.popup.close()},onshouhuoTap:function(e){var t=this;return i(r.default.mark((function a(){var s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=t,n.showModal({title:"提示",content:"是否确认要收货吗？",success:function(){var n=i(r.default.mark((function n(t){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.confirm){n.next=7;break}return a=[{key:"id",val:e}],n.next=4,s.$api.requestCondition("shangpinOrder","receiving",a);case 4:n.sent,s.$utils.msgBack("操作成功"),s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}()});case 2:case"end":return a.stop()}}),a)})))()}}};e.default=u}).call(this,t("543d")["default"])},"661b":function(n,e,t){"use strict";t.r(e);var r=t("0bb7"),a=t("70c3");for(var s in a)"default"!==s&&function(n){t.d(e,n,(function(){return a[n]}))}(s);t("e2d7");var i,u=t("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},"70c3":function(n,e,t){"use strict";t.r(e);var r=t("52fe"),a=t.n(r);for(var s in r)"default"!==s&&function(n){t.d(e,n,(function(){return r[n]}))}(s);e["default"]=a.a},bc58:function(n,e,t){"use strict";(function(n){t("f032");r(t("66fd"));var e=r(t("661b"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},caaf:function(n,e,t){},e2d7:function(n,e,t){"use strict";var r=t("caaf"),a=t.n(r);a.a}},[["bc58","common/runtime","common/vendor"]]]);