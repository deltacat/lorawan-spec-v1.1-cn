(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{384:function(s,a,l){"use strict";l.r(a);var t=l(42),o=Object(t.a)({},(function(){var s=this,a=s.$createElement,l=s._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[l("h1",{attrs:{id:"第8章-class-b-介绍"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#第8章-class-b-介绍"}},[s._v("#")]),s._v(" 第8章 Class B 介绍")]),s._v(" "),l("p",[s._v("这部分（8至16章）描述了 LoRaWAN Class B 层，它为电池驱动的终端优化，终端可以是移动的或固定在某个位置。")]),s._v(" "),l("p",[s._v("这样的终端需要实现 Class B 的操作：终端需要开启一个具有固定时间间隔的接收窗口以获取服务端发起的下行消息。")]),s._v(" "),l("p",[s._v("LoRaWAN Class B 选项在终端增加一个经过同步的接收窗口。")]),s._v(" "),l("p",[s._v("LoRaWAN Class A 的限制之一就是终端发送数据使用的问候方法，这使得客户应用程序或者服务无法在可知的响应时间联系上终端。Class B 的目的就是在 Class A 终端随机上行后的接收窗口之外，让终端也能在可预见的时间内开启接收。Class B 是让网关周期性发送信标来同步网络中的所有终端，以便终端能够在周期时隙的确定时间点额外打开一个短暂接收窗口（叫做“ping slot”）。")]),s._v(" "),l("blockquote",[l("p",[l("strong",[s._v("注意")]),s._v("：是否要从Class A 切换到 Class B，这个要在终端的应用层进行处理。如果打算从网络端将Class A 切换到 Class B，客户程序只能利用终端 Class A 的上行通讯来反馈一个下行通讯给应用层，这需要终端的应用层来识别这个请求 —— 该处理过程不在 LoRaWAN 层面管理。")])])])}),[],!1,null,null,null);a.default=o.exports}}]);