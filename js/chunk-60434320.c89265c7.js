(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60434320"],{"8f81":function(t,e,n){},bb61:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"content"},[n("h1",[t._v("List room")]),n("div",{staticClass:"list-img"},[n("el-row",t._l(t.listRoom,(function(e){return n("el-col",{key:e.id,staticClass:"content",attrs:{lg:4,xs:12}},[n("span",[t._v(t._s(e.roomName))]),n("br"),n("span",[t._v("Slot: "+t._s(e.numberPlayer))]),n("br"),n("el-button",{attrs:{type:"success",round:""},on:{click:function(n){return t.onClickJoinRoom(e.id)}}},[t._v("Join")])],1)})),1)],1)])},a=[],i=n("d225"),s=n("b0b4"),c=n("308d"),r=n("6bb5"),u=n("4e2b"),l=n("9ab4"),b=n("60a3"),f=n("2b0e"),d=n("3d8f"),h=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.ROOT_API="https://hello1129.herokuapp.com/room",t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"getAllRoom",value:function(){return f["default"].axios.get(this.ROOT_API+"/get/all",{headers:Object(d["a"])()})}},{key:"getRoomById",value:function(t){return f["default"].axios.get(this.ROOT_API+"/get/"+t,{headers:Object(d["a"])()})}}]),e}(f["default"]),m=new h,O=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.isLoading=!1,t.listRoom="",t}return Object(u["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this;this.isLoading=!0,m.getAllRoom().then((function(e){200===e.status&&(t.listRoom=e.data)})).catch((function(t){console.log(t)})).finally((function(){t.isLoading=!1}))}},{key:"onClickJoinRoom",value:function(t){this.$router.push({name:"room-join",query:{id:t}})}}]),e}(b["c"]);O=Object(l["a"])([Object(b["a"])({components:{}})],O);var v=O,p=v,g=(n("f287"),n("2877")),j=Object(g["a"])(p,o,a,!1,null,"f470f032",null);e["default"]=j.exports},f287:function(t,e,n){"use strict";var o=n("8f81"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-60434320.c89265c7.js.map