[rewrite_local]
#~ Bilibili大会员 (2022-12-05) @ddgksf2013
^http[s]?:\/\/((ap|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header Bliprocrack.js

[mitm]
hostname=app.bilibili.com, grpc.biliapi.net, *.biliapi.net, app.bilibili.com, api.bilibili.com, api.live.bilibili.com, api.vc.bilibili.com, dataflow.biliapi.com, 124.239.240.*, 101.89.57.66，218.94.210.66, 240e:b1:9801:206:11:0:0:*


***********************************/


var modifiedHeaders = $requested['headers'];
modifiedHeaders['Cookie'] = '';
modifiedHeaders['x-bili-device-bin'] = '';
modifiedHeaders['Authorization'] = '';
modifiedHeaders['User-Agent' ] = '';
modifiedHeaders['buvid'] = '';
modifiedHeaders['x-bili-metadata-bin'] = '';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '';
modifiedHeaders['x-bili-exps-bin'] = '';
modifiedHeaders['xbili-network-bin'] = '';
$done({'headers':modifiedHeaders});
       


