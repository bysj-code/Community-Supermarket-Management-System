(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-info/userinfo"],{"15ae":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,o){try{var i=e[a](o),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var o=e.apply(t,n);function i(e){a(o,r,u,i,c,"next",e)}function c(e){a(o,r,u,i,c,"throw",e)}i(void 0)}))}}var i={data:function(){return{ruleForm:{},tableName:"",sexTypesOptions:[],sexTypesIndex:0}},onLoad:function(){var t=this;return o(r.default.mark((function n(){var u,a,o,i;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return u=e.getStorageSync("nowTable"),n.next=3,t.$api.session(u);case 3:if(a=n.sent,t.ruleForm=a.data,t.tableName=u,"yonghu"!=t.tableName){n.next=12;break}return o={page:1,limit:100,dicCode:"sex_types"},n.next=10,t.$api.page("dictionary",o);case 10:i=n.sent,t.sexTypesOptions=i.data.list;case 12:case"end":return n.stop()}}),n)})))()},methods:{createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},logout:function(){e.setStorageSync("token",""),this.$utils.jump("../login/login")},update:function(){var t=this;return o(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.username||"yonghu"!=t.tableName){n.next=3;break}return t.$utils.msg("账户不能为空"),n.abrupt("return");case 3:if(t.ruleForm.yonghuName||"yonghu"!=t.tableName){n.next=6;break}return t.$utils.msg("用户姓名不能为空"),n.abrupt("return");case 6:if(t.ruleForm.yonghuPhoto||"yonghu"!=t.tableName){n.next=9;break}return t.$utils.msg("头像不能为空"),n.abrupt("return");case 9:if("yonghu"!=t.tableName||!t.ruleForm.yonghuPhone||t.$validate.isMobile(t.ruleForm.yonghuPhone)){n.next=12;break}return t.$utils.msg("用户手机号应输入正确格式"),n.abrupt("return");case 12:if("yonghu"!=t.tableName||!t.ruleForm.yonghuIdNumber||t.$validate.checkIdCard(t.ruleForm.yonghuIdNumber)){n.next=15;break}return t.$utils.msg("用户身份证号应输入正确格式"),n.abrupt("return");case 15:return u=e.getStorageSync("nowTable"),n.next=18,t.$api.update(u,t.ruleForm);case 18:t.$utils.msgBack("修改成功");case 20:case"end":return n.stop()}}),n)})))()},yonghuPhotoTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.yonghuPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate()}))},toggleTab:function(e){this.$refs[e].show()}}};t.default=i}).call(this,n("543d")["default"])},"177b":function(e,t,n){"use strict";n.r(t);var r=n("15ae"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},2239:function(e,t,n){"use strict";var r=n("3313"),u=n.n(r);u.a},3313:function(e,t,n){},"9e67":function(e,t,n){"use strict";n.r(t);var r=n("cf89"),u=n("177b");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("2239");var o,i=n("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"b0ea953e",null,!1,r["a"],o);t["default"]=c.exports},ab21:function(e,t,n){"use strict";(function(e){n("f032");r(n("66fd"));var t=r(n("9e67"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},cf89:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"b4a5"))}},u=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["ab21","common/runtime","common/vendor"]]]);