(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{518:function(e,t,r){e.exports=r.p+"assets/img/BTCPay-PrestaShop-Modules-Install.f1082be9.jpg"},687:function(e,t,r){"use strict";r.r(t);var o=r(25),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"prestashop-integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-integration"}},[e._v("#")]),e._v(" Prestashop integration")]),e._v(" "),o("p",[e._v("This document explains how to "),o("strong",[e._v("integrate BTCPay Server into your PrestaShop store")]),e._v(".\nIf you do not have a store yet, follow "),o("a",{attrs:{href:"https://blog.templatetoaster.com/how-to-install-prestashop/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this step by step article"),o("OutboundLink")],1),e._v(" to create one from scratch.")]),e._v(" "),o("p",[e._v("To integrate BTCPay Server into an existing PrestaShop store, follow the steps below.")]),e._v(" "),o("h2",{attrs:{id:"0-server-requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#0-server-requirements"}},[e._v("#")]),e._v(" 0. Server Requirements")]),e._v(" "),o("p",[e._v("Please ensure that you meet the following requirements before installing this plugin.")]),e._v(" "),o("ul",[o("li",[e._v("You are using PHP 7.3 or higher")]),e._v(" "),o("li",[e._v("Your PrestaShop is version 1.7.7.0 or higher.")]),e._v(" "),o("li",[e._v("The curl, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),o("li",[e._v("You have a BTCPay Server, either "),o("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),o("RouterLink",{attrs:{to:"/ThirdPartyHosting/"}},[e._v("hosted by a third-party")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've a BTCPay store on the instance")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've a wallet connected to your store")])],1)]),e._v(" "),o("h2",{attrs:{id:"1-install-btcpay-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#1-install-btcpay-plugin"}},[e._v("#")]),e._v(" 1. Install BTCPay Plugin")]),e._v(" "),o("ol",[o("li",[o("a",{attrs:{href:"https://github.com/btcpayserver/prestashop-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the latest BTCPay plugin"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("PrestaShop > Modules > Module Manager > Upload a module")]),e._v(" "),o("li",[e._v("Upload the "),o("code",[e._v(".zip")]),e._v("-file you just downloaded")]),e._v(" "),o("li",[e._v("Click on "),o("code",[e._v("configure")]),e._v(" to setup the module")])]),e._v(" "),o("figure",[o("img",{attrs:{src:r(518),alt:"BTCPay PrestaShop plugin installation"}})]),e._v(" "),o("h2",{attrs:{id:"2-pairing-the-store"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#2-pairing-the-store"}},[e._v("#")]),e._v(" 2. Pairing the store")]),e._v(" "),o("p",[e._v("BTCPay PrestaShop plugin is a "),o("strong",[e._v("bridge between your server (payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution from step 2, the pairing process is identical.")]),e._v(" "),o("ol",[o("li",[e._v("In the "),o("code",[e._v("BTCPay server url")]),e._v("-field, enter the full URL of your host (including the https) – https://btcpay.mydomain.com")]),e._v(" "),o("li",[e._v("Select the default transaction speed (this will change how much BTCPay recommends as transaction fee)")]),e._v(" "),o("li",[e._v("Select the relevant order mode for your store (order is created before or after payment)")]),e._v(" "),o("li",[e._v('Go to your BTCPay server, select a store, open its settings and select "Access Tokens".')]),e._v(" "),o("li",[e._v('Click on "Create a new token", select your store and then approve.\n5.1. You will see: "Server initiated pairing code: XXXX".')]),e._v(" "),o("li",[e._v("Enter your pairing code.")]),e._v(" "),o("li",[e._v("Press save. Prestashop will now attempt to make a connection with your BTCPayServer.")]),e._v(" "),o("li",[e._v("A message will be shown if the connection was successful.")]),e._v(" "),o("li",[e._v("It's recommended to do a test purchase.")])]),e._v(" "),o("h2",{attrs:{id:"3-contribute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#3-contribute"}},[e._v("#")]),e._v(" 3. Contribute")]),e._v(" "),o("p",[e._v("BTCPay is built and maintained entirely by volunteer contributors around the internet. We welcome and appreciate new contributions.")]),e._v(" "),o("p",[e._v("Contributors looking to help out, before opening a pull request, please "),o("a",{attrs:{href:"https://github.com/btcpayserver/prestashop-plugin/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("create an issue"),o("OutboundLink")],1),e._v("\nor join "),o("a",{attrs:{href:"https://chat.btcpayserver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("our community chat"),o("OutboundLink")],1),e._v(" to get early feedback, discuss best ways to tackle the problem and to ensure there is no work duplication.")]),e._v(" "),o("h2",{attrs:{id:"prestashop-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-support"}},[e._v("#")]),e._v(" PrestaShop Support")]),e._v(" "),o("p",[e._v("PrestaShop support can be found through its official channels.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.prestashop.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homepage"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://doc.prestashop.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.prestashop.com/forums",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support Forums"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);