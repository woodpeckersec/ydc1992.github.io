window._bd_share_main.F.module("share/share_api",function(n,t,a){n("base/tangram").T;var e=n("base/class").Class,i=n("component/comm_tools"),o=n("share/api_base");t.Api=e.create(function(n){function t(t){window._bd_share_main.F.use("trans/data",function(a){a.get({type:"share_count",url:n.bdUrl||i.getPageUrl(),callback:function(n,a){t&&t({count:n,display:a})}})})}var a=this,e={count:0,clicked:!1};a._init=function(){var n=a.getView();n.render(),n.on("getsharecount",function(){t(function(t){e.count=t.count,n.setNumber(t.count,t.display)})}),n.init()},a._processAction=function(n){return{data:{type:"share"}}}},o.ApiBase)});