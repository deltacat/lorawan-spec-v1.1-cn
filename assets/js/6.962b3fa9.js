(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{351:function(s,a,t){s.exports=t.p+"assets/img/15649120293792.9b2076b9.jpg"},377:function(s,a,t){"use strict";t.r(a);var l=t(42),r=Object(l.a)({},(function(){var s=this,a=s.$createElement,l=s._self._c||a;return l("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[l("h1",{attrs:{id:"第2章-lorawan-选型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#第2章-lorawan-选型"}},[s._v("#")]),s._v(" 第2章 LoRaWAN 选型")]),s._v(" "),l("p",[s._v("LoRa™ 是由 "),l("a",{attrs:{href:"https://www.semtech.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Semtech"),l("OutboundLink")],1),s._v(" 面向长距离、低功耗、低速率应用开发的无线调制技术。本文档中，将 Class A 基础上实现了更多功能的设备称为“高级别终端”。")]),s._v(" "),l("h2",{attrs:{id:"_2-1-lorawan-级别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-lorawan-级别"}},[s._v("#")]),s._v(" 2.1 LoRaWAN 级别")]),s._v(" "),l("p",[s._v("LoRa 网络包含基础 LoRaWAN（称之为 Class A）和可选功能（Class B，Class C）:")]),s._v(" "),l("p",[l("img",{attrs:{src:t(351),alt:"图1.LoRaWAN Classes"}}),s._v(" "),l("i",{staticClass:"lora-table-name"},[s._v("图1. LoRaWAN 类别")])]),s._v(" "),l("ul",[l("li",[l("p",[l("strong",[s._v("双向传输终端（Class A）：")]),s._v(" Class A 的终端在每次上行后都会紧跟两个短暂的下行接收窗口，以此实现双向传输。终端基于自身通信需求来安排传输时隙，在随机时间的基础上具有较小的变化（即ALOHA协议）。这种 Class A 操作为应用提供了最低功耗的终端系统，只要求应用在终端上行传输后的很短时间内进行服务器的下行传输。服务器在其他任何时间进行的下行传输都得等终端的下一次上行。")])]),s._v(" "),l("li",[l("p",[l("strong",[s._v("设定接收时隙的双向传输终端（Class B）：")]),s._v(" Class B 的终端会有更多的接收时隙。除了 Class A 的随机接收窗口，Class B 设备还会在指定时间打开别的接收窗口。为了让终端可以在指定时间打开接收窗口，终端需要从网关接收"),l("strong",[s._v("时间同步的信标（Beacon）")]),s._v("。")])]),s._v(" "),l("li",[l("p",[l("strong",[s._v("最大化接收时隙的双向传输终端（Class C）：")]),s._v(" Class C 的终端基本是一直打开着接收窗口，只在发送时短暂关闭。Class C 的终端会比 Class A 和 Class B 更加耗电，但它们从服务器到终端下行的通信时延也是最短的。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);