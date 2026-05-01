---
title: 为你的博客添加一个时光飞逝的页面
date: 2026-01-10 22:51:05
color:

top_img: https://s2.loli.net/2024/06/24/hVfA4KUwHTBb1zl.png
cover: https://s2.loli.net/2024/06/24/2uXjkeD8hE71Irw.png
categories: 
- 教程
- 博客
tags:
- 魔改
- hexo
- Butterfly
---
<!-- <meta name='description' content='在Butterfly主题的基础上添加一个时光飞逝的页面，显示现在的年度、月度、日度、小时的过度情况。（欢迎进站访问|´・ω・) ノ）'> -->


## 前序
忘了在哪看到的这个东西，总之看到了一次就忘不掉了
然后就拿我那差的要命的技术写了个这

~~屎山~~这个东西还没到这个程度

{% note info modern %}
建议你先将文章过一遍，这样可以更清楚的知道自己下一步要干什么。

这东东貌似有小BUG
{% endnote %}
{% note info modern %}
%ThemeSource%
位于`~\themes\Butterfly\source\`
%Source%
位于`~\source\`
%ThemeLayout%
位于`~\themes\Butterfly\layout\`
{% endnote %}
## 预览
页面正常的话，标题后面不就是的吗？

<div class="time-flies"></div>

单独页面

[https://blog.admincmd.xyz/favi/](https://blog.admincmd.xyz/url.html?url=https://blog.admincmd.xyz/favi/)

<!-- Github 仓库
[https://github.com/admincmd-a/Time-flies](https://blog.admincmd.xyz/url.html?url=https://github.com/admincmd-a/Time-flies)

Gitee 页面
[https://gitee.com/administrator-command-prompt/Time-flies](https://blog.admincmd.xyz/url.html?url=https://gitee.com/administrator-command-prompt/Time-flies) -->

### 特性

- 支持夜间模式，需要 HTML 标签
- 支持自定义每行精度

## 引入
<style>
  div#opst-info {
    z-index: 1;background-color: #12121260;
  }
  header div.time-files {
    height: 75%;width: 75%;left: 10%;position: absolute;z-index: 0;top: 15%;color: #FFFFFF;
  }

</style>
<script>
    {  const obj = document.getElementById("page-header");
       obj.style.backgroundImage = "" ;
       obj.style.backgroundColor = "white";
       obj.innerHTML = obj.innerHTML + `<div class="time-flies" id="post-info-div"><div class="progress-container">
                	<div class="progress-label">今年已经过了 <span class="year-progress"></span></div>
                	<div class="progress-bar">
                		<div class="year-progress-bar"><span class="year-progress-bar-fill"></span></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">这个月过去了 <span class="month-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="month-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 今天过去了 <span class="day-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="day-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 这一个小时过了 <span class="hour-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="hour-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">本分钟过了 <span class="minute-progress"></span></div>
                	<div class="progress-bar">
                		<div class="minute-progress-bar"></div>
                	</div>
                </div>
                </div>`;
            document.getElementById("post-info").style = "z-index:1;background-color:#12121260;"
            document.getElementById("post-info-div").style = "height:75%;width:75%;left:12%;position:absolute;z-index:0;top:15%;color:white;}"
            // var style = document.createElement('style');
            // var theHead = document.head || document.getElementsByTagName('head')[0];
            // style.appendChild(document.createTextNode('div#opst-info{z-index:1;background-color:#12121260}header div.time-files{height:75%;width:75%;     left:10%;      position:absolute;z-index:0;top:15%;color:#fff}'));
            // theHead.appendChild(style);
    }
</script>
### 引入 JS

这里的代码有可以自己启动、循环的形式，适用于整个页面没有主循环控制器的版本
也有需要在每次循环/触发的形式，适用于有主循环控制器的版本

请根据自己的页面作选择，如果不知道选那种，请选择前者。
{% note info modern %}
代码块单号的是已压缩的代码，多行的是原带注释代码。
{% endnote %}

#### 适用于自启动、自循环

这个代码随便找个能在页面加载时运行的位置扔着就行，不过建议找个地方放好，以后别忘了(￣y▽,￣)╭ 

```JavaScript
let UPDATE_PROGRESS_BARS_INIT=false;function updateProgressBars(){try{let now=new Date();if(UPDATE_PROGRESS_BARS_INIT===false){for(let i=0;i<document.getElementsByClassName('time-flies').length;i++){let length=document.getElementsByClassName('time-flies')[i];length.innerHTML=`<div class="progress-container"><div class="progress-label">今年已经过了<span class="year-progress"></span></div><div class="progress-bar"><div class="year-progress-bar"><span class="year-progress-bar-fill"></span></div></div></div><div class="progress-container"><div class="progress-label">这个月过去了<span class="month-progress"></span></div><div class="progress-bar"><div class="month-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">今天过去了<span class="day-progress"></span></div><div class="progress-bar">div class="day-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">这一个小时过了<span class="hour-progress"></span></div><div class="progress-bar"><div class="hour-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">本分钟过了<span class="minute-progress"></span></div><div class="progress-bar"><div class="minute-progress-bar"></div></div></div><p>珍惜时间，时光飞逝。</p>`}UPDATE_PROGRESS_BARS_INIT=false}const yearStart=new Date(now.getFullYear(),0,1).getTime();const yearEnd=new Date(now.getFullYear()+1,0,1).getTime();const yearProgress=((now.getTime()-yearStart)/(yearEnd-yearStart))*100;const monthStart=new Date(now.getFullYear(),now.getMonth(),1).getTime();const monthEnd=new Date(now.getFullYear(),now.getMonth()+1,1).getTime();const monthProgress=((now.getTime()-monthStart)/(monthEnd-monthStart))*100;const dayStart=new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime();const dayEnd=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1).getTime();const dayProgress=((now.getTime()-dayStart)/(dayEnd-dayStart))*100;const hourStart=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()).getTime();const hourEnd=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()+1).getTime();const hourProgress=((now.getTime()-hourStart)/(hourEnd-hourStart))*100;const minuteProgress=(now.getSeconds()*1000+now.getMilliseconds())/1000/60*100;updateDisplay('year',yearProgress,7);updateDisplay('month',monthProgress,6);updateDisplay('day',dayProgress,5);updateDisplay('hour',hourProgress,3);updateDisplay('minute',minuteProgress,2)}catch(error){console.error('更新模块：时光飞逝 时发生错误:',error)}function updateDisplay(period,progress,decimalPlaces){let lengthDiv=document.getElementsByClassName('time-flies');let lengthProgress=document.getElementsByClassName(`${period}-progress`);let lengthProgressBar=document.getElementsByClassName(`${period}-progress-bar`);for(let i=0;i<lengthDiv.length;i++){lengthProgress[i].textContent=progress.toFixed(decimalPlaces)+'%';lengthProgressBar[i].style.width=progress.toFixed(decimalPlaces)+'%'}}}setInterval(updateProgressBars,1000);
```
``` JavaScript
let UPDATE_PROGRESS_BARS_INIT = false;
function updateProgressBars() {
    try {
        let now = new Date();
        if (UPDATE_PROGRESS_BARS_INIT === false) {// 初始化
            for (let i = 0; i < document.getElementsByClassName('time-flies').length; i++) {
                let length = document.getElementsByClassName('time-flies')[i];
                length.innerHTML = `
                <div class="progress-container">
                	<div class="progress-label">今年已经过了 <span class="year-progress"></span></div>
                	<div class="progress-bar">
                		<div class="year-progress-bar"><span class="year-progress-bar-fill"></span></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">这个月过去了 <span class="month-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="month-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 今天过去了 <span class="day-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="day-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 这一个小时过了 <span class="hour-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="hour-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">本分钟过了 <span class="minute-progress"></span></div>
                	<div class="progress-bar">
                		<div class="minute-progress-bar"></div>
                	</div>
                </div>
                <p>珍惜时间，时光飞逝。</p>`;
            }
            UPDATE_PROGRESS_BARS_INIT = true;
        }

        const yearStart = new Date(now.getFullYear(), 0, 1).getTime(); // 计算这个时间单位的起始位置
        const yearEnd = new Date(now.getFullYear() + 1, 0, 1).getTime(); // 计算这个时间单位的终止位置
        const yearProgress = ((now.getTime() - yearStart) / (yearEnd - yearStart)) * 100; // 然后将当前时间与起始位置的差值除以终止位置与起始位置的差值，得到百分比

        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        const monthProgress = ((now.getTime() - monthStart) / (monthEnd - monthStart)) * 100;

        const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
        const dayProgress = ((now.getTime() - dayStart) / (dayEnd - dayStart)) * 100;

        const hourStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()).getTime();
        const hourEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1).getTime();
        const hourProgress = ((now.getTime() - hourStart) / (hourEnd - hourStart)) * 100; // 上面均通过计算当前时间与起始位置的差值除以起始位置与终止位置的差值得到百分比

        const minuteProgress = (
            now.getSeconds() * 1000 +
            now.getMilliseconds()
        ) / 1000 / 60 * 100; // 计算一个分钟已过秒数，精确到毫秒，除以60，乘以100，得到百分比

        // 更新进度条和文本显示
        updateDisplay('year', yearProgress, 7);
        updateDisplay('month', monthProgress, 6);
        updateDisplay('day', dayProgress, 5);
        updateDisplay('hour', hourProgress, 3);
        updateDisplay('minute', minuteProgress, 2);

    } catch (error) {
        console.error('更新模块：时光飞逝 时发生错误:', error);
    }

    // 更新显示函数
    function updateDisplay(period, progress, decimalPlaces) {
        // 进度条文本，值，精度(小数点后 x 位)
        let lengthDiv = document.getElementsByClassName('time-flies');
        let lengthProgress = document.getElementsByClassName(`${period}-progress`);
        let lengthProgressBar = document.getElementsByClassName(`${period}-progress-bar`);
        for (let i = 0; i < lengthDiv.length; i++) {
            lengthProgress[i].textContent = progress.toFixed(decimalPlaces) + '%';
            lengthProgressBar[i].style.width = progress.toFixed(decimalPlaces) + '%';
        }
    }
}
setInterval(updateProgressBars, 1000);// 每秒更新一次

```
#### 主循环的附属

此方式需要你手动将主函数`updateProgressBars`引入主循环的更新运行块中
{% hideToggle 有关主循环的 %}
本站的主 JS 是 `i.js`，在浏览器控制台中可以找到`主循环启动`的输出，单击索引便可以看到本站的主循环模块。
{% endhideToggle %}

```JavaScript
let UPDATE_PROGRESS_BARS_INIT=false;function updateProgressBars(){try{let now=new Date();if(UPDATE_PROGRESS_BARS_INIT===false){for(let i=0;i<document.getElementsByClassName('time-flies').length;i++){let length=document.getElementsByClassName('time-flies')[i];length.innerHTML=`<div class="progress-container"><div class="progress-label">今年已经过了<span class="year-progress"></span></div><div class="progress-bar"><div class="year-progress-bar"><span class="year-progress-bar-fill"></span></div></div></div><div class="progress-container"><div class="progress-label">这个月过去了<span class="month-progress"></span></div><div class="progress-bar"><div class="month-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">今天过去了<span class="day-progress"></span></div><div class="progress-bar"><div class="day-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">这一个小时过了<span class="hour-progress"></span></div><div class="progress-bar"><div class="hour-progress-bar"></div></div></div><div class="progress-container"><div class="progress-label">本分钟过了<span class="minute-progress"></span></div><div class="progress-bar"><div class="minute-progress-bar"></div></div></div><p>珍惜时间，时光飞逝。</p>`}UPDATE_PROGRESS_BARS_INIT=false}const yearStart=new Date(now.getFullYear(),0,1).getTime();const yearEnd=new Date(now.getFullYear()+1,0,1).getTime();const yearProgress=((now.getTime()-yearStart)/(yearEnd-yearStart))*100;const monthStart=new Date(now.getFullYear(),now.getMonth(),1).getTime();const monthEnd=new Date(now.getFullYear(),now.getMonth()+1,1).getTime();const monthProgress=((now.getTime()-monthStart)/(monthEnd-monthStart))*100;const dayStart=new Date(now.getFullYear(),now.getMonth(),now.getDate()).getTime();const dayEnd=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1).getTime();const dayProgress=((now.getTime()-dayStart)/(dayEnd-dayStart))*100;const hourStart=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()).getTime();const hourEnd=new Date(now.getFullYear(),now.getMonth(),now.getDate(),now.getHours()+1).getTime();const hourProgress=((now.getTime()-hourStart)/(hourEnd-hourStart))*100;const minuteProgress=(now.getSeconds()*1000+now.getMilliseconds())/1000/60*100;a('year',yearProgress,7);a('month',monthProgress,6);a('day',dayProgress,5);a('hour',hourProgress,3);a('minute',minuteProgress,2)}catch(error){console.error('更新模块：时光飞逝 时发生错误:',error)}function a(c,b,d){let lengthDiv=document.getElementsByClassName('time-flies');let lengthProgress=document.getElementsByClassName(`${c}-b`);let lengthProgressBar=document.getElementsByClassName(`${c}-b-bar`);for(let i=0;i<lengthDiv.length;i++){lengthProgress[i].textContent=b.toFixed(d)+'%';lengthProgressBar[i].style.width=b.toFixed(d)+'%'}}}
```

```JavaScript
let UPDATE_PROGRESS_BARS_INIT = false;
function updateProgressBars() {
    try {
        let now = new Date();
        if (UPDATE_PROGRESS_BARS_INIT === false) {// 初始化
            for (let i = 0; i < document.getElementsByClassName('time-flies').length; i++) {
                let length = document.getElementsByClassName('time-flies')[i];
                length.innerHTML = `
                <div class="progress-container">
                	<div class="progress-label">今年已经过了 <span class="year-progress"></span></div>
                	<div class="progress-bar">
                		<div class="year-progress-bar"><span class="year-progress-bar-fill"></span></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">这个月过去了 <span class="month-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="month-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 今天过去了 <span class="day-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="day-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label"> 这一个小时过了 <span class="hour-progress"></span> </div>
                	<div class="progress-bar">
                		<div class="hour-progress-bar"></div>
                	</div>
                </div>
                <div class="progress-container">
                	<div class="progress-label">本分钟过了 <span class="minute-progress"></span></div>
                	<div class="progress-bar">
                		<div class="minute-progress-bar"></div>
                	</div>
                </div>
                <p>珍惜时间，时光飞逝。</p>
                `;
            }
            UPDATE_PROGRESS_BARS_INIT = false;
        }

        const yearStart = new Date(now.getFullYear(), 0, 1).getTime(); // 计算这个时间单位的起始位置
        const yearEnd = new Date(now.getFullYear() + 1, 0, 1).getTime(); // 计算这个时间单位的终止位置
        const yearProgress = ((now.getTime() - yearStart) / (yearEnd - yearStart)) * 100; // 然后将当前时间与起始位置的差值除以终止位置与起始位置的差值，得到百分比

        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        const monthProgress = ((now.getTime() - monthStart) / (monthEnd - monthStart)) * 100;

        const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
        const dayProgress = ((now.getTime() - dayStart) / (dayEnd - dayStart)) * 100;

        const hourStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()).getTime();
        const hourEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1).getTime();
        const hourProgress = ((now.getTime() - hourStart) / (hourEnd - hourStart)) * 100; // 上面均通过计算当前时间与起始位置的差值除以起始位置与终止位置的差值得到百分比

        const minuteProgress = (
            now.getSeconds() * 1000 +
            now.getMilliseconds()
        ) / 1000 / 60 * 100; // 计算一个分钟已过秒数，精确到毫秒，除以60，乘100，得到百分比

        // 更新进度条和文本显示
        updateDisplay('year', yearProgress, 7);
        updateDisplay('month', monthProgress, 6);
        updateDisplay('day', dayProgress, 5);
        updateDisplay('hour', hourProgress, 3);
        updateDisplay('minute', minuteProgress, 2);

    } catch (error) {
        console.error('更新模块：时光飞逝 时发生错误:', error);
    }

    // 更新显示函数
    function updateDisplay(period, progress, decimalPlaces) {
        // 进度条文本，值，精度(小时点后 x 位)
        let lengthDiv = document.getElementsByClassName('time-flies');
        let lengthProgress = document.getElementsByClassName(`${period}-progress`);
        let lengthProgressBar = document.getElementsByClassName(`${period}-progress-bar`);
        for (let i = 0; i < lengthDiv.length; i++) {
            lengthProgress[i].textContent = progress.toFixed(decimalPlaces) + '%';
            lengthProgressBar[i].style.width = progress.toFixed(decimalPlaces) + '%';
        }
    }
}

```



### 引入 CSS
放在合适的位置即可

```CSS
.time-flies .progress-container{margin-bottom:10px;}.time-flies .progress-label{font-size:14px;   margin-bottom:5px;}.time-flies .year-progress-bar,.time-flies .month-progress-bar,.time-flies .day-progress-bar,.time-flies .hour-progress-bar,.time-flies .minute-progress-bar{   width:100%;   color:hsla(0,0%,31%,0.24);   border-radius:5px;   overflow:hidden;text-align:center;line-height:20px;transition:width 0.5s;height:12px;}.time-flies .year-progress-bar,.time-flies .month-progress-bar,.time-flies .day-progress-bar,.time-flies .hour-progress-bar,.time-flies .minute-progress-bar{   content:"";   position:absolute;background-image:linear-gradient(-45deg,rgba(255,255,255,0.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,0.2) 50%,rgba(255,255,255,0.2) 75%,transparent 75%,transparent);z-index:1;background-size:50px 50px;animation:move 5s linear infinite;border-top-right-radius:8px;border-bottom-right-radius:8px;border-top-left-radius:20px;border-bottom-left-radius:20px;   overflow:hidden;}.time-flies .year-progress-bar{background-color:#4caf50;}.time-flies .month-progress-bar{background-color:#4caf50;}.time-flies .day-progress-bar{background-color:#4caf50;}.time-flies .hour-progress-bar{background-color:#4caf50;}.time-flies .minute-progress-bar{background-color:#4caf50;}html[data-theme="dark"] .time-flies .year-progress-bar{background-color:#2e8330;}html[data-theme="dark"] .time-flies .month-progress-bar{background-color:#2e8330;}html[data-theme="dark"] .time-flies .day-progress-bar{background-color:#2e8330;}html[data-theme="dark"] .time-flies .hour-progress-bar{background-color:#2e8330;}html[data-theme="dark"] .time-flies .minute-progress-bar{background-color:#2e8330;#4caf50;}.time-flies .progress-bar{width:100%;background-color:$color-theme-light-2background;#dddborder-radius:5px;overflow:hidden;}html[data-theme="dark"] .time-flies .progress-bar{background-color:$color-theme-dark-2background}@keyframes move{0%{background-position:0 0;}100%{background-position:50px 50px;}}@-webkit-keyframes move{0%{background-position:0 0;}100%{background-position:50px 50px;}}
```

```CSS
/* 时光飞逝 Home -*/
.time-flies .progress-container {
  margin-bottom: 10px;
}
.time-flies .progress-label {
    font-size: 14px;
    margin-bottom: 5px;
}
.time-flies .year-progress-bar,.time-flies .month-progress-bar,.time-flies .day-progress-bar,.time-flies .hour-progress-bar,.time-flies .minute-progress-bar {
  width: 100%;
  color: hsla(0, 0%, 31%, 0.24); /* 进度条背景色 */
  border-radius: 5px;/*圆角*/
  overflow: hidden;
  text-align: center;
  line-height: 20px;
  transition: width 0.5s;/*一次到目标位置的速度*/
  height: 12px;/*进度条高度*/
}

.time-flies .year-progress-bar, .time-flies .month-progress-bar, .time-flies .day-progress-bar, .time-flies .hour-progress-bar, .time-flies .minute-progress-bar 
{
       content: "";
   position: absolute;
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  z-index: 1;
  background-size: 50px 50px;
  animation: move 5s linear infinite;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
   overflow: hidden;
}

.time-flies .year-progress-bar {
  background-color: #4caf50;/*进度条颜色*/
}
.time-flies .month-progress-bar {
  background-color: #4caf50;
}
.time-flies .day-progress-bar {
  background-color: #4caf50;
}
.time-flies .hour-progress-bar {
  background-color: #4caf50;
}
.time-flies .minute-progress-bar {
  background-color: #4caf50;
}

html[data-theme="dark"] .time-flies .year-progress-bar {
  background-color: #2e8330;/*进度条颜色*/
}
html[data-theme="dark"] .time-flies .month-progress-bar {
  background-color: #2e8330;
}
html[data-theme="dark"] .time-flies .day-progress-bar {
  background-color: #2e8330;
}
html[data-theme="dark"] .time-flies .hour-progress-bar {
  background-color: #2e8330;
}
html[data-theme="dark"] .time-flies .minute-progress-bar {
  background-color: #2e8330; //#4caf50;
}

.time-flies .progress-bar {
  width: 100%;
  background-color: $color-theme-light-2background;/*进度条背景色*/ //#ddd
  border-radius: 5px;/*圆角*/
  overflow: hidden;
}
html[data-theme="dark"] .time-flies .progress-bar {
    background-color: $color-theme-dark-2background
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

@-webkit-keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

/* 时光飞逝 End -*/
```

## 添加

### 单独页面(适用于Hexo + Butterfly)
创建`%ThemeLayout%\includes\page\time.pug`
放入以下内容
```Jade
.time-flies
```
找到`%ThemeLayout%\page.pug`
放入以下内容
```Pug
extends includes/layout.pug

[...]
      when 'about'
        include includes/page/about.pug
+      when 'time'
+        include includes/page/time.pug
[...]

    comments/index', {}, {cache: true})
```
{% note info modern %}
插入 + 后面的内容即可，删除 + 号后无需添加空格
{% endnote %}

创建`%Source%\time\index.md`
放入以下内容
```markdown
---
title: 时光飞逝
date: 2021-03-30 15:57:51
aside: false
top_img: false
comments: false
type: "time"
---
```

hexo g + s 即可看到效果

---

### 单独页面或边栏之类的
```HTML
<div class="time-flies"></div>
```

<!-- ## 调整和适应
其实大部分在没有压缩的 CSS 和 JS 的部分用注释写了出来
部分没有提到的在此处提一下 -->
## License
(仅包括文中的 JavaScript 和 CSS 代码块)

>The MIT License (MIT)
>
>Copyright © 2026 AdminCmd(http://admincmd.xyz)
>
>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

