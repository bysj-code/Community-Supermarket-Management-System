(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpin/list"],{"2a1d":function(t,e,n){"use strict";var r=n("b77d"),a=n.n(r);a.a},"6f31":function(t,e,n){"use strict";(function(t){n("f032");r(n("66fd"));var e=r(n("fb7d"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"817b":function(t,e,n){"use strict";n.r(e);var r=n("d63d"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},b77d:function(t,e,n){},d63d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,i,o){try{var s=t[i](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){i(o,r,a,s,c,"next",t)}function c(t){i(o,r,a,s,c,"throw",t)}s(void 0)}))}}var s={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品信息名称"}],sactiveItem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(242, 199, 68, 1)",backgroundColor:"rgba(242, 199, 68, 1)",color:"rgba(0, 0, 0, 1)",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(215, 215, 215, 1)",backgroundColor:"rgba(247, 247, 247, 1)",color:"#333",borderRadius:"40rpx",borderWidth:"2rpx",width:"auto",lineHeight:"56rpx",fontSize:"24rpx",borderStyle:"solid"},list:[],user:{},mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},shangpinTypesList:[],shangxiaTypesList:[],categoryName:0,CustomBar:"0"}},onShow:function(){var e=this;return o(r.default.mark((function n(){var a,i,o,s,c;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.btnColor=e.btnColor.sort((function(){return.5-Math.random()})),a=e,i=t.getStorageSync("nowTable"),n.next=5,a.$api.session(i);case 5:return o=n.sent,a.user=o.data,a.btnColor=a.btnColor.sort((function(){return.5-Math.random()})),n.next=10,e.$api.page("dictionary",{page:1,limit:100,dicCode:"shangpin_types"});case 10:return s=n.sent,e.shangpinTypesList=s.data.list,n.next=14,e.$api.page("dictionary",{page:1,limit:100,dicCode:"shangxia_types"});case 14:c=n.sent,e.shangxiaTypesList=c.data.list,e.hasNext=!0,e.mescroll&&e.mescroll.resetUpScroll();case 18:case"end":return n.stop()}}),n)})))()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.searchForm.shangpinName=""},categoryClick:function(t){this.categoryName=t,this.mescroll.resetUpScroll()},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var e=this;return o(r.default.mark((function n(){var a,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={page:t.num,limit:t.size,shangpinDelete:1,shangxiaTypes:1},0!=e.categoryName&&(a.shangpinTypes=e.categoryName),n.next=4,e.$api.list("shangpin",a);case 4:i=n.sent,1==t.num&&(e.list=[]),e.list=e.list.concat(i.data.list),0==i.data.list.length&&(e.hasNext=!1),t.endSuccess(t.size,e.hasNext);case 9:case"end":return n.stop()}}),n)})))()},onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(r.default.mark((function t(a){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=5;break}return t.next=3,n.$api.del("shangpin",JSON.stringify([e]));case 3:n.hasNext=!0,n.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function a(e){return t.apply(this,arguments)}return a}()})},search:function(){var t=this;return o(r.default.mark((function e(){var n,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.mescroll.num=1,n={page:t.mescroll.num,limit:t.mescroll.size,shangpinDelete:1,shangxiaTypes:1},t.searchForm.shangpinName&&(n["shangpinName"]=t.searchForm.shangpinName),e.next=5,t.$api.list("shangpin",n);case 5:a=e.sent,1==t.mescroll.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),t.mescroll.endSuccess(t.mescroll.size,t.hasNext);case 10:case"end":return e.stop()}}),e)})))()}}};e.default=s}).call(this,n("543d")["default"])},df8c:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"03d0"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.isAuth("shangpin","修改")),r=t.isAuth("shangpin","删除"),a=t.__map(t.list,(function(e,n){var r=t.__get_orig(e),a=e.shangpinPhoto?e.shangpinPhoto.split(","):null;return{$orig:r,g0:a}})),i=t.isAuth("shangpin","新增");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r,l0:a,m2:i}})},i=[]},fb7d:function(t,e,n){"use strict";n.r(e);var r=n("df8c"),a=n("817b");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("2a1d");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=c.exports}},[["6f31","common/runtime","common/vendor"]]]);