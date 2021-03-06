/**
 *  2020/03/06
 * */
const EnterAntForest=function(){
    ClearPopup();
    ClickClose();
    app.startActivity({
        action: "VIEW",
	data: "alipays://platformapi/startapp?appId=60000002"
    });
    sleep(1000)
}

function StartAlipay()
{
    toast("启动支付宝")
    app.launchApp("支付宝");
    toast("启动完成");
    sleep(1000);
}

function FindImg()
{
    //toast("截图中...");
    var img = captureScreen();
    while(!img)
    {
        sleep(100);
        img = captureScreen();
    }
    toast("截图完成!");
    var icon = images.read("icon.jpg");
    var points = images.matchTemplate(img,icon,{threshold:0.7}).points;
    return points;
}

// 关闭提醒弹窗
const ClearPopup = function() {
    // 合种/添加快捷方式提醒
    threads.start(function() {
      let popup = idEndsWith("J_pop_treedialog_close").findOne(2000);
      if (popup) popup.click();
    });
    // 活动
    threads.start(function() {
      let popup = descEndsWith("关闭蒙层").findOne(2000);
      if (popup) popup.click();
    }); 
  }
  const ClickClose = function () {
    if (descEndsWith('关闭').exists()) {
      descEndsWith('关闭')
        .findOne(1000)
        .click()
    } else if (textEndsWith('关闭').exists()) {
      textEndsWith('关闭')
        .findOne(1000)
        .click()
    }
  }

function FriendsPower(){
    var cnt = 0;
    do {
        var powerList = className("android.widget.Button").textStartsWith("收集能量").find();
        powerList.forEach(function(item){
            press(item.bounds().centerX(), item.bounds().centerY(), 80);
            //item.click();
            toast("收取一次");
            sleep(200);
        });
        if(cnt++>=10) break;
    } while (powerList.length);
    toast("未成熟");
    sleep(500);
    //ClickClose();
}

//&&className("android.view.View").textEndsWith("排行榜").exists()

function Friends()
{
    log("摘取取好友能量开始");
    className("android.view.View").text("查看更多好友").findOne().click();
    sleep(1000);
    toast("收集好友能量");
    var skip_cnt = 0;
    var invitation = 0;
    
    do{
        if(className("android.view.View").text("查看更多好友").exists()){
            className("android.view.View").text("查看更多好友").findOne().click();
        }
        if(id("tab_description").className("android.widget.TextView").text("首页").exists()){
            EnterAntForest();
        }
        var points = FindImg();
        sleep(500);
        if(points)
        {
            toast("找到");
            points.forEach(point =>{
                click(point.x-500, point.y+50);
                var cnt = 0;
                while(cnt<5)
                {
                    if(className("android.widget.Button").text("浇水").exists())
                    {
                        FriendsPower();
                        back();
                        sleep(1000);
                        break;
                    }
                    else
                    {
                        cnt ++;
                        sleep(500);
                    }
                }
            });
            skip_cnt = 0;
        }
        toast("上滑");
        scrollDown();
        skip_cnt += 1;
        if(className("android.view.View").text("邀请").exists()){
            invitation++;
        }
    }while(invitation<2);
    //skip_cnt<15&&(
    toast("结束退出！");
    log("搜取好友能量结束");
    ClickClose();
}

 // 收取自己的能量
 const myPowers = function() {
    log("搜取自己的能量");
    var cnt = 0;
    do {
        var powerList = className("android.widget.Button").textStartsWith("收集能量").find();
        log("find my energy");
        powerList.forEach(function(item){
            press(item.bounds().centerX(), item.bounds().centerY(), 80);
            // item.click();
            toast("收取一次");
            sleep(200);
        });
        if(cnt++>=5) break;
    } while (powerList.length);
    toast("未成熟");
    sleep(500);
    log("搜取自己能量结束");
  }

function My(){
    if(id("tab_description").className("android.widget.TextView").text("首页").exists()){
        log("进入蚂蚁森林");
        id("tab_description").className("android.widget.TextView").text("首页").findOne.click();
        EnterAntForest();
    }
    myPowers();
}

function StartAll(){
    
    StartAlipay();
    EnterAntForest();
    log("enterAntForest ok");
    sleep(2000);
    My();
    sleep(1000);
    Friends();
    sleep(1000);
    ClickClose();
}

function main(){
  log("唤醒设备");
  device.wakeUp();
  sleep(1000);
  swipe(500,1800,500,500,100);
  log("swipe over");
  sleep(1000);
  gesture(1000, [540,1425], [250,1700],[560,1700],[540,2020],[840,1700]);
  log("gesture over");
  sleep(1000);
  log("唤醒完毕");
  log("start antForest");
  StartAll();
}

//程序从这里开始
auto();
alert("需开启无障碍服务、通知栏权限，音量上键可中止脚本");
alert("注意！请核对'小手'图片存放位置，可在findImg()函数中修改，如果图片跟脚本是同一个目录，就不用改。默认: icon.jpg");

console.show();
var interval = 30000; 
interval = console.rawInput("请输入摘取间隔时间(s), 如30000:");
console.log(">> 间隔时间: "+interval);
sleep(1000);
console.hide();
toast("Ready Go .....");
sleep(500)
log("检查截图功能");
if(!requestScreenCapture()){
    toast("请求截图失败");
    log("请求截图失败");
    exit();
} else {
    log("截图功能检查成功");
}

main()
setInterval(main,interval);

threads.start(function(){
    //在子线程中调用observeKey()从而使按键事件处理在子线程执行
    events.observeKey();
    events.on("key_down", function(keyCode, events){
        //音量键关闭脚本
        if(keyCode == keys.volume_down){
           ClickClose();
           exit();
        }
    });
});
events.on("exit", function(){
    toast("脚本已结束");
});
