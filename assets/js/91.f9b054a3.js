(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{695:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"reverse-proxy-to-tor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-to-tor"}},[t._v("#")]),t._v(" Reverse proxy to Tor")]),t._v(" "),a("h2",{attrs:{id:"advantages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[t._v("#")]),t._v(" Advantages")]),t._v(" "),a("ul",[a("li",[t._v("no port forwarding needed on the LAN of the host")]),t._v(" "),a("li",[t._v("encrypted connection")]),t._v(" "),a("li",[t._v("hides the IP of the host")])]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("a Virtual Private Server (VPS) - eg. a minimal package on Lunanode for ~3.5$/month")]),t._v(" "),a("li",[t._v("root access on the VPS - you need to set up webserver and install packages")])]),t._v(" "),a("p",[t._v("Get the Tor "),a("code",[t._v(".onion")]),t._v(" address of your BTCPay Server via the "),a("code",[t._v("Server settings > Services")]),t._v(' page.\nSee information in the "HTTP-based TOR hidden services" section.')]),t._v(" "),a("h2",{attrs:{id:"vps-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vps-setup"}},[t._v("#")]),t._v(" VPS Setup")]),t._v(" "),a("p",[t._v("You will create a nginx reverse proxy and a "),a("code",[t._v("socat")]),t._v(" service, which forwards requests to your BTCPay Server.")]),t._v(" "),a("p",[t._v("Login as root and install the required dependencies: (example assumes a Debian based system)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# switch to root user (if not logged in as root)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependencies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y certbot nginx socat tor\n")])])]),a("h3",{attrs:{id:"socat-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socat-setup"}},[t._v("#")]),t._v(" Socat setup")]),t._v(" "),a("p",[t._v("Create the service file "),a("code",[t._v("/etc/systemd/system/http-to-socks-proxy@.service")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Unit]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("HTTP-to-SOCKS proxy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network.target")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Service]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EnvironmentFile")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("/etc/http-to-socks-proxy/%i.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("/usr/bin/socat tcp4-LISTEN:${LOCAL_PORT},reuseaddr,fork,keepalive,bind=127.0.0.1 SOCKS4A:${PROXY_HOST}:${REMOTE_HOST}:${REMOTE_PORT},socksport=${PROXY_PORT}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Install]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("multi-user.target")]),t._v("\n")])])]),a("p",[t._v("Create the configuration for the service in "),a("code",[t._v("/etc/http-to-socks-proxy/btcpayserver.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the directory")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /etc/http-to-socks-proxy/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the file with the content below")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/http-to-socks-proxy/btcpayserver.conf\n")])])]),a("p",[t._v("Replace the "),a("code",[t._v("REMOTE_HOST")]),t._v(" and adapt the ports if needed:")]),t._v(" "),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("PROXY_HOST=127.0.0.1\nPROXY_PORT=9050\nLOCAL_PORT=9081\nREMOTE_HOST=heregoesthebtcpayserverhiddenserviceaddress.onion\nREMOTE_PORT=80\n")])])]),a("p",[t._v("Create a symlink in "),a("code",[t._v("/etc/systemd/system/multi-user.target.wants")]),t._v(" to enable the service and start it:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/systemd/system/http-to-socks-proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("@.service /etc/systemd/system/multi-user.target.wants/http-to-socks-proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("@btcpayserver.service\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# start")]),t._v("\nsystemctl start http-to-socks-proxy@btcpayserver\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check service status")]),t._v("\nsystemctl status http-to-socks-proxy@btcpayserver\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check if tunnel is active")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tulpn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" socat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# should give something like this:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tcp        0      0 127.0.0.1:9081          0.0.0.0:*               LISTEN      951/socat")]),t._v("\n")])])]),a("h3",{attrs:{id:"webserver-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webserver-setup"}},[t._v("#")]),t._v(" Webserver setup")]),t._v(" "),a("h4",{attrs:{id:"prepare-ssl-and-lets-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-ssl-and-lets-encrypt"}},[t._v("#")]),t._v(" Prepare SSL and Let's Encrypt")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generate 4096 bit DH params to strengthen the security, may take a while")]),t._v("\nopenssl dhparam -out /etc/ssl/certs/dhparam.pem "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create directory for Let's Encrypt files")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /var/lib/letsencrypt/.well-known\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v(" www-data /var/lib/letsencrypt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" g+s /var/lib/letsencrypt\n")])])]),a("h4",{attrs:{id:"nginx-configuration-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-configuration-http"}},[t._v("#")]),t._v(" nginx configuration: http")]),t._v(" "),a("p",[t._v("Create a variable mapping to forward the correct protocol setting and check if the Upgrade header is sent by the client, e.g. "),a("code",[t._v("/etc/nginx/conf.d/map.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_proto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_x_forwarded_proto")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  default "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_x_forwarded_proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection_upgrade")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  default upgrade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("      close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Create a config file for the domain, e.g. "),a("code",[t._v("/etc/nginx/sites-available/btcpayserver.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" mydomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Let's Encrypt verification requests")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("well"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("known"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("acme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("challenge"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("allow")]),t._v(" all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("letsencrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default_type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redirect everything else to https")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$server_name")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("We will configure the https server part in the same config file once we obtained the SSL certificate.")]),t._v(" "),a("p",[t._v("Enable the web server config by creating a symlink and restarting nginx:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s /etc/nginx/sites-available/btcpayserver.conf /etc/nginx/sites-enabled/btcpayserver.conf\n\nsystemctl restart nginx\n")])])]),a("h4",{attrs:{id:"obtain-ssl-certificate-via-lets-encrypt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtain-ssl-certificate-via-lets-encrypt"}},[t._v("#")]),t._v(" Obtain SSL certificate via Let's Encrypt")]),t._v(" "),a("p",[t._v("Run the following command with adapted email and domain parameters:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("certbot certonly --agree-tos --email admin@mydomain.com --webroot -w /var/lib/letsencrypt/ -d mydomain.com\n")])])]),a("h4",{attrs:{id:"nginx-configuration-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-configuration-https"}},[t._v("#")]),t._v(" nginx configuration: https")]),t._v(" "),a("p",[t._v("Now that we have a valid SSL certificate, add the https server part at the end of "),a("code",[t._v("/etc/nginx/sites-available/btcpayserver.conf")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" mydomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL settings")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_stapling")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_stapling_verify")]),t._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_cache")]),t._v(" shared"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SSL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_session_tickets")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Update this with the path of your certificate files")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("letsencrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mydomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("fullchain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("letsencrypt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("live"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mydomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("privkey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_dhparam")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("certs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dhparam"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ECDSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES128"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES128"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ECDSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ECDSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CHACHA20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("POLY1305"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CHACHA20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("POLY1305"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES128"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resolver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.8")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".8")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.8")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".4")]),t._v(" valid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resolver_timeout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Strict"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Transport"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Security "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max-age=63072000"')]),t._v(" always"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Frame"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options SAMEORIGIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options nosniff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy requests to the socat service")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9081")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_x_forwarded_proto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$connection_upgrade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Restart nginx once more:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl restart nginx\n")])])]),a("p",[t._v("Now, visiting "),a("code",[t._v("mydomain.com")]),t._v(" should show your BTCPay Server instance.")]),t._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://itgala.xyz/nginx-reverse-proxy-to-onion-site-in-tor-network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx reverse proxy to .onion site in TOR network"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/openoms/bitcoin-tutorials/blob/master/tor2ip_tunnel.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tor-to-IP tunnel service"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/55487324/how-to-make-a-nginx-reverse-proxy-direct-to-tor-hidden-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to make a nginx reverse proxy direct to tor hidden service"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://linuxize.com/post/secure-nginx-with-let-s-encrypt-on-debian-10/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secure Nginx with Let's Encrypt on Debian 10 Linux"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://nginx.org/en/docs/http/websocket.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx WebSocket proxying"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);