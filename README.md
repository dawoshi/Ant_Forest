# Ant_Forest  
蚂蚁森林自动收能量，支持自动解锁和自动触发  
目前支持收自己的、收好友能量  

## QQ群
406853323
https://github.com/dawoshi/Ant_Forest
  

  
0、效果演示：  

1、脚本实现功能
   a、可以自己设置时间间隔，>50000s。
   b、程序根据时间间隔自动唤醒，解锁，
      启动支付宝，
      跳转到蚂蚁森林，
      并收取自己和好友的能量，
      等待下次时间间隔重复上述过程。
   c、音量上键可停止脚本。
   d、大致过程如日志所示：
   ![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/111.png)
   ![video](https://github.com/dawoshi/Ant_Forest/blob/master/video.mp4)
   

2、下载源码和autojs app

   a、auto.js(Auto.js_v4.1.1.apk)
      链接: https://pan.baidu.com/s/1EWFWjO8tZhmS0VGFlk2htA 提取码: 6ye3

   b、程序代码
      https://github.com/dawoshi/Ant_Forest/blob/master/

2.5 、解压小手图片并放到自己能记住的路径下，等会要填到程序里的findImg()！！  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/11.png)

3、解压并导入到app
解压源码后，放到手机存储下的“脚本”目录；也可以是其他的，记得就行  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/4.png)   
打开autojs app，点击导入  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/5.png)  

4、打开蚂蚁森林能量提醒功能  
进入蚂蚁森林，点右上角“...”，进入设置，开启提醒  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/1.png)
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/2.png)
 
5、打开无障碍服务、通知权限  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/7.png)  
点击后如有跳转，就对应的完成设置  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/8.png)  

6、将autojs加入电池白名单、保护锁定，防止被后台关闭（这个大家都会的吧）  

7、初次使用，程序中main()中的gesture()函数，是解锁功能，需要修改成自己的锁屏手势。  
如果不改呢，就只是不能解锁而已，其他没影响  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/3.png) 

可通过打开开发者选项中的指针位置查看坐标。  
![image](https://github.com/dawoshi/Ant_Forest/blob/master/pic/9.png)

8、运行脚本即可

9、由于是通过蚂蚁森林通知触发，所以输入时间并启动后，虽然没有任何动静，但只要不报错，一般就可以了；
输入时间处，点“确定”按钮左边的横线位置，就会弹出键盘。
如果想立即看到效果，可以在这里添加RunApp();后再运行：




10、如果想测试解锁，可以单独测试这个函数  
```
function main1(){
  log("唤醒设备");
  device.wakeUp();
  sleep(1000);
  swipe(500,1800,500,500,100);
  log("swipe over");
  sleep(1000);
  gesture(1000, [540,1425], [250,1700],[560,1700],[50,20],[80,10]);
  log("gesture over");
  sleep(1000);
  log("唤醒完毕");
  log("start antForest");
  StartAll();
  //ClickClose();
}
```

然后按照点击运行、输入时间、锁屏，静待手机自动解锁

11、报错情况  
可能是通知栏权限没开  
可能是无障碍服务没开  
  
12、进入支付宝后无反应  
无障碍服务是否开启  
是否安卓7.0及以上  
更新下支付宝

欢迎评论留言
github：https://github.com/dawoshi/Ant_Forest
