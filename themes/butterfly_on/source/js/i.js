// 主 JS 文件
/*
*/
// debugger;

const debug = false//isDeBug(); // 开启调试模式

// 设置主循环模块
update();

var now = new Date();// 获取当前日期、时间
var year = now.getFullYear();
var month = now.getMonth() + 1; // 月份从0开始，需加1
var day = now.getDate(); // 使用getDate获取当前日期
var md = `${month}-${day}`; // 使用模板字符串
// 检查今日是否已经弹窗
var todayKey = `${year}-${month}-${day}`;
var hasShownToday = localStorage.getItem(todayKey);
var today = now;
// 获取今天的农历日期
var lunarDate = LunarCalendar.solarToLunar(today.getFullYear(), today.getMonth() + 1, today.getDate());
var nowZhData = `${today.getMonth() + 1}-${today.getDate()}`// 换为农历
// 格式化农历日期为中文
var lunarDateChinese = `${lunarDate.lunarYear}年${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;
var lunarDateChineseNY = `${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;

const FOOTER = document.getElementById("footer");
const WORKBOARD = document.getElementById("workboard")

var PROGRESS_BAR = document.getElementById('year-progress-bar');
var currentTimeHtml = "";
var img = "";
var description = "";


// 定义一个文本型数组——用于湖人
const phrases = [
    "<span>！！！Minecraft 免费了 ！！！</span><br /><br /><img scr=\"/img/mcmfl.jpeg\" clsss=\"img-fluid\" alt=\"Minecraft 免费了\"></img>",
    "最新消息：美国灭国了。",
    "突发新闻：日本岛沉没了！",
    "非常抱歉，因为不可控原因，博客将于明天停止运营，感谢您的陪伴，再见",

];

var DText = "0";
var Text = "---";
var timeChange;// 欢迎语

var times = 100;// 主循环间隔时间
var timer = 0;// 定时器

// 往控制台里写点东西
console.log('Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,Hello,');
// 十分的胜景，害的我笑了一下
console.log(`                                                                                                                                     
      @@@@                  @@@                          @@@@                              @@@@@                                  @@@
      @@@@                  @@@                          @@@@                            @@@@@@@@@                                @@@
      @@@@                  @@@                          @@@@                           @@@@@@@@@@@                               @@@
     @@@@@@                 @@@                          @@@@                           @@@@@ @@@@@                               @@@
     @@@@@@                 @@@                          @@@@                          @@@@     @@@@                              @@@
     @@@@@@                 @@@                                                        @@@@     @@@@                              @@@
    @@@@@@@@                @@@                                                        @@@@     @@@@                              @@@
    @@@@@@@@         @@@@@@ @@@   @@@@@@@@@ @@@@         @@@@         @@@ @@@@@@      @@@@      @@@@  @@@@@@@@@ @@@@       @@@@@@ @@@
    @@@@ @@@        @@@@@@@@@@@   @@@@@@@@@@@@@@@        @@@@         @@@@@@@@@@@     @@@@      @@@@  @@@@@@@@@@@@@@@     @@@@@@@@@@@
    @@@  @@@       @@@@@@@@@@@@   @@@@@@@@@@@@@@@        @@@@         @@@@@@@@@@@@    @@@@            @@@@@@@@@@@@@@@    @@@@@@@@@@@@
   @@@@  @@@@      @@@@   @@@@@   @@@@@ @@@@@ @@@@       @@@@         @@@@@   @@@@    @@@@            @@@@@ @@@@@ @@@@   @@@@   @@@@@
   @@@@  @@@@     @@@@     @@@@   @@@@  @@@@  @@@@       @@@@         @@@@     @@@    @@@@            @@@@  @@@@  @@@@  @@@@     @@@@
   @@@@@@@@@@     @@@@     @@@@   @@@@  @@@@  @@@@       @@@@         @@@@     @@@    @@@@      @@@@  @@@@  @@@@  @@@@  @@@@     @@@@
  @@@@@@@@@@@@    @@@@      @@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@    @@@@      @@@@  @@@@  @@@@  @@@@  @@@@      @@@
  @@@@@@@@@@@@    @@@@      @@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@    @@@@      @@@@  @@@@  @@@@  @@@@  @@@@      @@@
  @@@@    @@@@    @@@@     @@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@    @@@@@     @@@@  @@@@  @@@@  @@@@  @@@@     @@@@
  @@@@    @@@@    @@@@     @@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@     @@@@     @@@@  @@@@  @@@@  @@@@  @@@@     @@@@
 @@@@      @@@@    @@@@   @@@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@     @@@@@   @@@@   @@@@  @@@@  @@@@   @@@@   @@@@@
 @@@@      @@@@    @@@@@@@@@@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@      @@@@@@@@@@@   @@@@  @@@@  @@@@   @@@@@@@@@@@@
 @@@@      @@@@     @@@@@@@@@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@      @@@@@@@@@@    @@@@  @@@@  @@@@    @@@@@@@@@@@
@@@@@       @@@@     @@@@@@@@@@   @@@@  @@@@  @@@@       @@@@         @@@      @@@        @@@@@@@     @@@@  @@@@  @@@@     @@@@@@@@@@
`)
// ----------------------
// HTTP透明端口转发：80 8080 8880 2052 2082 2086 2095
// HTTPS隧道端口转发：443 2053 2083 2087 2096 8443
// HTTP/HTTPS端口隧道转发，但以下端口禁用CDN缓存：2052 2053 2082 2083 2086 2087 2095 2096 8880 8443

/*
text 	null 	The text to displae inside the notification.
textColor 	#FFFFFF 	Text color of the notification text. Default is white.
pos 	bottom-left 	The position the notification will show. Refer to the examples above for possible positions.
customClass 	null 	Add a custom class to the notification for custom styling.
width 	auto 	Width of the notification. Used to shrink/expand window as you wish.
showAction 	true 	Boolean to show the action buton or not.
actionText 	Dismiss 	Text to display as the action button.
actionTextAria 	Dismiss, Description for Screen Readers 	Text for screen readers.
alertScreenReader 	false 	Determines if screen readers will annouce the snackbar message.
actionTextColor 	#4CAF50 	Text color of the action button.
backgroundColor 	#323232 	Background color of the notification window.
duration 	5000 	Time in milliseconds the notification is displayed before fading out.
onActionClick 	function(ele) 	Default action closes the notification.
onClose 	function(ele) 	Fires when the notification has been closed.

text null 通知内要显示的文本。
textColor #FFFFFF 通知文本的颜色。 默认为白色。
pos 左下角 通知将显示的位置。 有关可能的位置，请参阅上面的示例。
customClass null 为通知添加自定义样式的自定义类。
width auto 通知的宽度。 根据需要缩小/展开窗口。
showAction true 是否显示操作按钮的布尔值。
actionText 取消 作为操作按钮显示的文本。
actionTextAria 取消，屏幕阅读器说明 屏幕阅读器文本。
alertScreenReader false 决定屏幕阅读器是否会宣布小工具栏信息。
actionTextColor #4CAF50 操作按钮的文本颜色。
backgroundColor #323232 通知窗口的背景颜色。
duration 5000 通知淡出前的显示时间（毫秒）。
onActionClick function(ele) 默认动作为关闭通知。
onClose function(ele) 关闭通知时触发。

JSDoc 注释格式

JSDoc 注释以 \/** 开始，以 *\/ 结束，每行以 * 开头。注释中可以包含多个标签，每个标签提供不同类型的信息。以下是一些常用的 JSDoc 标签：

@param：描述函数的参数，包括类型和用途。

@returns 或 @return：描述函数的返回值。

@function 或 @method：指明一个函数或方法。

@type：指定变量的类型。

@example：提供代码示例。

@class：描述一个类。

@todo：列出待办事项或计划中的功能。

值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。

引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）
*/

// 邢昭博是个大傻逼，他居然把自己的名字写成了邢昭博，这简直就是个笑话。(AI 生成)



// 主循环模块 ----------------------------------------------------

/**
 * 主循环执行函数
 */
function update() {
    if (PROGRESS_BAR) {// 判断是否存在进度条元素, 防止重复执行，免得tm控制台里全是报错
        updateProgressBars(); // 每ms更新一次
    }


    /**
     * 下面是处理流程
     */
    {
        if (timer === 0) {
            setInterval(update, times)
        }
        timer++; // 计时器
    }
}


// 消息窗口 ----------------------------------------------------

/**
 * 消息窗口对象
 */
var messageWin = {
    /** 定时器标识 */
    DKtime: null,

    /**
     * 打开消息窗口
     * @param {string} title 主标题
     * @param {string} content 下附文本
     * @param {boolean} xh 是否将背景高斯模糊
     * @param {number} DKtime 显示超时时间，单位ms
     * @return {boolean} true -- 已成功打开 false -- 移动端，将打开Snackbar提示
     */
    show(title, content, DKtime, xh) {
        if (isMobile()) {
            Snackbar.show({
                text: content,
                actionText: '知道了',
                duration: 4000,
                actionTextColor: '#fff',
            });
        } else {
            if (DKtime == 0 || DKtime == undefined || DKtime == null) {
                DKtime = setTimeout(messageWin.close(), DKtime);
            }
            try {
                if (xh) {
                    // 模糊其他
                    document.getElementById("web").style = "filter: blur(100px);pointer-events: none;opacity: 0.7;";
                    // 定义模糊和禁用的类 全局模糊和禁用
                }
                document.getElementById("timeWin").style.display = "";
                document.getElementById("timeWin").innerHTML =
                `
                <p style="font-size:30px;color:#2F7AA1;text-align: center;">${title}</p>
                <p style="font-size:16px;color:#003152;text-align: center;">${content}</p>
                <br />
                <a class="closeWinbox" href="javascript:messageWin.close()" id="closeWin">关闭</a>
                <br />

                `;
            } catch (error) {
                console.error('打开消息窗口时发生错误:', error);
            }
        }
    },

    /**
     * 关闭消息窗口
     */
    close() {
        document.getElementById("timeWin").style.display = "none";
        document.getElementById("web").style = "";// 取消模糊
        clearTimeout(messageWin.DKtime);
    }
};


// 欢迎语，cookie 提醒 --------------------------------------------
// 首次访问，弹出Cookie提醒    

console.log("农历日期:", lunarDateChinese);
try {
    switch (md) { // 公历判断
        // 纪念日 --------------
        case "7-7":
            DText = `今天是 1937 年 7 月 7 日卢沟桥事变 ${year - 1937} 周年纪念日！`
            Text = "勿忘国耻，振兴中华。"
            break;
        case "9-18":
            DText = `今天是 1931 年 9 月 18 日九一八事变 ${year - 1931} 周年纪念日！`
            Text = "勿忘国耻，振兴中华。"
            break;
        case "12-13":
            document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(100%);");
            DText = "请起立默哀 30 秒";
            Text = `勿忘国耻，振兴中华！\n <br /> 今天是南京大屠杀 ${year - 1937} 年纪念日、国家公祭日 \n <br /> 为在南京大屠杀中被杀害的平民默哀，铭记历史，珍视和平，绝不让这样的悲剧再次发生。`;
            break;
        // 节假日 --------------
        case "1-1":
            DText = "元旦快乐";
            Text = `新年快乐！\n <br /> ${year} 年的进度条开始了！`;
            break;
        case "12-31":
            DText = "元旦快乐";
            Text = `新年快乐！\n <br /> ${year + 1} 年的进度条马上就要开始了！<br />
            <!--<audio controls>
              <source src="file:///H:/%E5%9B%BD%E6%A0%87/img/%E5%9B%BE%E6%81%92%E5%AE%87%E6%95%B0%E5%AD%97%E7%94%9F%E5%91%BD%E5%A4%87%E4%BB%BD.mp3" type="audio/mpeg">
            </audio>-->`;
            break;
        case "3-8":
            DText = "妇女节";
            Text = "各位女神们，妇女节快乐！";
            break;
        case "4-1":
            // 随机抽取一句
            const randomIndex = Math.floor(Math.random() * phrases.length);
            DText = phrases[randomIndex];
            Text = "祝祝祝祝祝 UP 生日快乐！";
            break;
        case "4-5":
            DText = "清明安康"
            Text = ""
            break;
        case "5-1":
            DText = "劳动节快乐！"
            Text = "为各行各业的辛勤工作劳动人民致敬！"
            break;
        case "5-4":
            DText = "五四青年节";
            Text = "为百年前那些有思想政治觉悟，追求无产阶级、共产主义、马克思主义的青年们致敬！";
            break;
        case "6-1":
            DText = "各位小朋友们，儿童节快乐！";
            Text = "";
            break;
        case "7-1":
            DText = `中国共产党 ${year - 1921} 岁生日快乐`;
            Text = "今天时建党节。"
            break;
        case ["10-1", "10-2", "10-3", "10-4", "10-5", "10-6", "10-7"]:
            DText = `中华人民共和国 ${year - 1949} 岁生日快乐！`
            Text = ``
            break;
        case "8-15"://81-5
            DText = `日本鬼子已宣布无条件投降 ${year - 1945} 年了！`
            Text = "历史老师：标志着二战结束。"
            break;
        default:
            break;
    }
    switch (lunarDateChineseNY) { // 农历判断
        case ["腊月廿九", "腊月三十"]:// 偶尔除夕会在腊月廿九，所以也要做判断,反正也隔不了几天
            DText = `${lunarDate.getYear() + 1} 年新年快乐！`
            Text = ``
            break;
        case ["正月初一", "正月初二", "正月初三", "正月初四", "正月初五", "正月初六"]:
            DText = `${lunarDate.getYear()} 新年快乐！`
            Text = ``
            break;
        case "正月十五":
            DText = `元宵节快乐！`
            Text = `您吃汤圆了吗？`
            break;
        case "五月初五":
            DText = `端午节快乐！`
            Text = `您吃粽子了吗？`
            break;
        case "八月十五":
            DText = `中秋节快乐！`
            Text = `您吃月饼了吗？<br /><del>这是啥怪味月饼那......难吃</del>`
            break;
        case "九月初五":
            DText = `重阳节快乐！`
            Text = ``
            break;
        default:
            break;
    } // 农历判断

    if (isDeBug()) {
        DText = `调试模式`
        Text = `管他，祝今天代码不出Error！`
    }

    if (DText == "0") {// 其他不弹窗的情况放在这里
        // 如果没有匹配的节日，直接返回
    } else {
        console.log(DText);
        console.log(Text);
        if (isMobile()) {
            // 判断是否是移动端,弹消息框,若为PC端则弹窗
            Snackbar.show({
                text: `${DText}<br /><br />${Text}`,
                actionText: "",
                duration: 10000,
            })
        } else {
            messageWin.show(DText, Text, null, true)
        }
    }
    // 设置今天已显示
    localStorage.setItem(todayKey, 'shown');
} catch (error) {
    console.error('创建节日窗口时出错:', error);
}


// 以下是欢迎语
// -----------------------------------------------------------------------------
// 2024.12.21 修正了无法获取 KEY 的问题，将欢迎语显示合并，如果在武汉，那就是UP的老乡
// 2025.2.23 修正了在没有 Cookie 的情况下，无法显示欢迎语的问题


// //请求数据
// ipLoacation = window.saveToLocal.get('ipLocation');
// if (ipLoacation == undefined) {
//     // 数据已过期或不存在
//     // ttttttttttttttttttt
//     var script = document.createElement('script');
//     var url = `https://apis.map.qq.com/ws/location/v1/ip?key=${txkey}&output=jsonp`;
//     script.src = url;
//     window.QQmap = function (data) {
//         ipLoacation = data;
//         // 将数据保存到 localStorage，过期时间设置为 1 天
//         window.saveToLocal.set('ipLocation', ipLoacation, 1);
//         document.body.removeChild(script);
//         delete window.QQmap;
//     };
//     document.body.appendChild(script);
// } else {
//     // 使用 ipLocation
// }


// let dist = getDistanceAMLS(114.305000, 30.592800, ipLoacation.result.location.lng, ipLoacation.result.location.lat)
// let pos = ipLoacation.result.ad_info.nation;
// let ip = ipLoacation.result.ip;
// let ipDZ;
// let posdesc;//要显示的信息
// let ass = visitor_address;

// //根据国家、省份、城市信息自定义欢迎语
// //海外地区不支持省份及城市信息
// switch (ipLoacation.result.ad_info.nation) {
//     case "日本":
//         posdesc = "よろしく、一緒に桜を見に行きますか？";
//         // 译文：你好，一起去看樱花吗？
//         break;
//     case "美国":
//         posdesc = "Make America Great Again!";
//         // 译文：让美国再次伟大！
//         // ？？？？？？
//         break;
//     case "英国":
//         posdesc = "I'd like to ride the London Eye with you at night.";
//         // 译文：想同你一起夜乘伦敦眼。
//         break;
//     case "俄罗斯":
//         posdesc = "До дна эту водку!";
//         // 译文：干了这瓶伏特加！
//         break;
//     case "法国":
//         posdesc = "C'est La Vie";
//         // 译文：这就是生活。
//         break;
//     case "德国":
//         posdesc = "Die Zeit verging im Fluge.";
//         // 译文：时间过得飞快。
//         break;
//     case "澳大利亚":
//         posdesc = "Let's go to the Great Barrier Reef together!";
//         // 译文：让我们一起去大堡礁吧！
//         break;
//     case "加拿大":
//         posdesc = "Prenez une feuille de carte et vous la donnez.";
//         // 译文：拾起一片枫叶赠予你。
//         break;
//     case "南极洲":
//         posdesc = "南极洲的风很大，你一定记得要带伞！";
//         // 译文：69
//         break;
//     case "中国":
//         pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city;
//         switch (ipLoacation.result.ad_info.province) {
//             case "北京市":
//                 pos = "北京市";
//                 posdesc = "北——京——欢迎你~~~";
//                 break;
//             case "天津市":
//                 pos = "天津市";
//                 posdesc = "讲段相声吧。";
//                 break;
//             case "重庆市":
//                 pos = "重庆市";
//                 posdesc = "高德地图:已到达重庆，下面切换百度地图导航。百度地图：已到达重庆，下面切换高德地图导航。"
//                 break;
//             case "河北省":
//                 posdesc = "山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";
//                 break;
//             case "山西省":
//                 posdesc = "展开坐具长三尺，已占山河五百余。";
//                 break;
//             case "内蒙古自治区":
//                 posdesc = "天苍苍，野茫茫，风吹草低见牛羊。";
//                 break;
//             case "辽宁省":
//                 posdesc = "我想吃烤鸡架！";
//                 break;
//             case "吉林省":
//                 posdesc = "状元阁就是东北烧烤之王。";
//                 break;
//             case "黑龙江省":
//                 posdesc = "哈尔滨红肠,东北饺子";
//                 break;
//             case "上海市":
//                 pos = "上海市";
//                 posdesc = "众所周知，中国只有 3 个城市。";
//                 break;
//             case "江苏省":
//                 switch (ipLoacation.result.ad_info.city) {
//                     case "南京市":
//                         posdesc = "欢迎来自安徽省南京市的小伙伴。";
//                         break;
//                     case "苏州市":
//                         posdesc = "上有天堂，下有苏杭。";
//                         break;
//                     default:
//                         posdesc = "散装是必须要散装的。";
//                         break;
//                 }
//                 break;
//             case "浙江省":
//                 posdesc = "东风渐绿西湖柳，雁已还人未南归。";
//                 break;
//             case "安徽省":
//                 posdesc = "蚌埠住了，芜湖起飞。";
//                 break;
//             case "福建省":
//                 posdesc = "井邑白云间，岩城远带山。";
//                 break;
//             case "江西省":
//                 posdesc = "落霞与孤鹜齐飞，秋水共长天一色。";
//                 break;
//             case "山东省":
//                 posdesc = "遥望齐州九点烟，一泓海水杯中泻。";
//                 break;
//             case "湖北省":
//                 switch (ipLoacation.result.ad_info.city) {
//                     case "武汉市":
//                         posdesc = "哟，我也住在武汉市。大江大河大武汉，走，吃热干面去！";
//                         break;
//                     case "咸宁市":
//                         posdesc = "我老家在咸宁。";
//                         break;
//                     default:
//                         posdesc = "老板，来碗热干面！";
//                         break;
//                 }
//                 break;
//             case "湖南省":
//                 posdesc = "74751，长沙斯塔克。";
//                 break;
//             case "广东省":
//                 posdesc = "老板来两斤福建人。";
//                 break;
//             case "广西壮族自治区":
//                 posdesc = "桂林山水甲天下。";
//                 break;
//             case "海南省":
//                 posdesc = "朝观日出逐白浪，夕看云起收霞光。";
//                 break;
//             case "四川省":
//                 posdesc = "康康川妹子。";
//                 break;
//             case "贵州省":
//                 posdesc = "茅台，学生，再塞200。";
//                 break;
//             case "云南省":
//                 posdesc = "玉龙飞舞云缠绕，万仞冰川直耸天。";
//                 break;
//             case "西藏自治区":
//                 posdesc = "躺在茫茫草原上，仰望蓝天。";
//                 break;
//             case "陕西省":
//                 posdesc = "来份臊子面加馍。";
//                 break;
//             case "甘肃省":
//                 posdesc = "羌笛何须怨杨柳，春风不度玉门关。";
//                 break;
//             case "青海省":
//                 posdesc = "牛肉干和老酸奶都好好吃。";
//                 break;
//             case "宁夏回族自治区":
//                 posdesc = "大漠孤烟直，长河落日圆。";
//                 break;
//             case "新疆维吾尔自治区":
//                 posdesc = "驼铃古道丝绸路，胡马犹闻唐汉风。";
//                 break;
//             case "台湾省":
//                 posdesc = "我在这头，大陆在那头。";
//                 break;
//             case "香港特别行政区":
//                 pos = "香港特别行政区";
//                 posdesc = "永定贼有残留地鬼嚎，迎击光非岁玉。";
//                 break;
//             case "澳门特别行政区":
//                 pos = "澳门特别行政区";
//                 posdesc = "性感荷官，在线发牌。";
//                 break;
//             default:
//                 posdesc = "社会主义大法好。";
//                 break;
//         }
//         break;
//     default:
//         posdesc = "带我去你的国家逛逛吧。";
//         break;
// }
// //判断时间

// if (now.getHours() >= 5 && now.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨";
// else if (now.getHours() >= 1 && now.getHours() < 13) timeChange = "<span>中午好</span>，开——饭——了——";
// else if (now.getHours() >= 13 && now.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
// else if (now.getHours() >= 15 && now.getHours() < 16) timeChange = "<span>下午三点了</span>，上课摸鱼 ING...";
// else if (now.getHours() >= 16 && now.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
// else if (now.getHours() >= 19 && now.getHours() < 24) timeChange = "<span>晚上好</span>，我要写作业了……";
// else timeChange = "都几点了，还在熬夜？";
// // 检查 welcome-info 是否存在
// const welcomeInfoElement = document.getElementById("welcome-info");
// if (!welcomeInfoElement) { }

// if (zz_city == ipLoacation.result.ad_info.city) ass = zz_address_lx; // 检查是否为配置中指定的位置，如果是，则替换默认的"小伙伴"

// //自定义文本需要放的位置
// welcomeInfoElement.innerHTML = `欢迎来自<span>${pos}</span>的${ass}，${timeChange}<br />你距我约有<span>${dist}</span>公里，${posdesc}，您的 IP 地址是 ${ip}`;
if (sessionStorage.getItem("popCookieWindow") != "0") {
    setTimeout(function () {
        Snackbar.show({
            text: '本站使用 Cookie 和 本地会话存储 保证浏览体验和网站统计',
            pos: 'top-right',
            actionText: "查看博客声明",
            onActionClick: function () {
                window.open("/license")
            },
        })
    }, 4500)
}
//不在弹出Cookie提醒
sessionStorage.setItem("popCookieWindow", "0");


let referrer = document.referrer || ' ? ? ? ';
let domain = referrer ? referrer.split("://")[1] : ' ? ? ? ';
domain = domain ? domain.split("/")[0] : ' ? ? ? ';
setTimeout(function () { // 康康是不是来自其他网站
    switch (domain) {
        case 'www.travellings.cn':
            Snackbar.show({
                text: '欢迎来自开往的穿梭者！',
                pos: 'top-center',
            })
            break;
        case 'blog.admincmd.xyz':
            console.log('由本站主站站点访问')
            break;
        case 'netlify-blog.admincmd.xyz':
            console.log('由本站镜像站点访问')
            break;
        case 'cf-blog.admincmd.xyz':
            console.log('由本站镜像站点访问')
            break;
        case ' ? ? ? ':
            console.log("无效")
            domain = pos;// 若来源为空，则使用定位信息

            // Snackbar.show({
            //     text: `欢迎从来自 ${domain} 的访客访问本站！`,
            //     pos: 'top-center',
            //     actionText: "",
            // });
            break;
        default:
            console.warn('');
            Snackbar.show({// 如果有
                text: `欢迎从来自 ${domain} 的访客访问本站！`,
                pos: 'top-center',
                actionText: "",
                onActionClick: function (element) {
                    window.open("")
                },
            });
            break;
    }
}, 2500)

//自带上文浏览器提示

function browserTC() {
    btf.snackbarShow("");
    Snackbar.show({
        text: '浏览器版本较低，网站样式可能错乱',
        actionText: 'OK',
        duration: '16000',
        pos: 'bottom-right'
    });
}
function browserVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //Edge浏览器
    var isFirefox = userAgent.indexOf("Firefox") > -1; //Firefox浏览器
    var isOpera = userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1; //Opera浏览器
    var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Chrome浏览器
    var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1 && userAgent.indexOf("Edge") == -1 && userAgent.indexOf("OPR") == -1; //Safari浏览器
    if (isEdge) {
        if (userAgent.split('Edge/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isFirefox) {
        if (userAgent.split('Firefox/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isOpera) {
        if (userAgent.split('OPR/')[1].split('.')[0] < 80) {
            browserTC()
        }
    } else if (isChrome) {
        if (userAgent.split('Chrome/')[1].split('.')[0] < 90) {
            browserTC()
        }
    } else if (isSafari) {
        //不知道Safari哪个版本是该淘汰的老旧版本
    }
}
//2022-10-29修正了一个错误：过期时间应使用toGMTString()，而不是toUTCString()，否则实际过期时间在中国差了8小时
function setCookies(obj, limitTime) {
    let data = new Date(new Date().getTime() + limitTime * 24 * 60 * 60 * 1000).toGMTString()
    for (let i in obj) {
        document.cookie = i + '=' + obj[i] + ';expires=' + data
    }
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
if (getCookie('browsertc') != 1) {
    setCookies({
        browsertc: 1,
    }, 1);
    browserVersion();
}

// 





// 明亮/暗黑模式切换
// -------------------------------------------------------------------------
// 2024-12-28 解决了首次访问时,没有coockie时导致if执行失败,导致部分图片没有切换.
// 2025-02-21 现在没有Cookie时，会根据时间自动切换模式。
// 2025-03-04 de了会导致一直是白天模式bug。

if (sessionStorage.getItem("ActivateMode") == "1") { // 向下兼容
    sessionStorage.setItem("ActivateMode", "dark");
} else if (sessionStorage.getItem("ActivateMode") == "0") {
    sessionStorage.setItem("ActivateMode", "light");
} else if (sessionStorage.getItem("ActivateMode" == null) || sessionStorage.getItem("ActivateMode") == "auto") {
    sessionStorage.setItem("ActivateMode", "auto");
    if (now.getHours() < 6) {
        // 白天
        sessionStorage.setItem("ActivateMode", "dark");
        LigheMode();
    } else {
        sessionStorage.setItem("ActivateMode", "light");
        DarkMode();
    }
} else {}
//页面加载后调用
//检查cook，并判断是否为暗黑模式

if (sessionStorage.getItem("ActivateMode") == "dark") DarkMode(); else LigheMode();// 取coockie,判断明亮/暗黑模式

function SwitchActivateLightMode() {
    sessionStorage.setItem("ActivateMode", "light"); //写个Cook
    LigheMode();
}
function SwichActivateDarkMode() {
    sessionStorage.setItem("ActivateMode", "dark");
    DarkMode();
    // 同上
    // 调整至暗黑模式
}

// ---------------------

function LigheMode() {
    activateLightMode();//调用调整至明亮模式
    document.getElementById("travellings-logo").src = "/img/travelling_b.svg";
    // 暗黑模式
    // 将需要调整的元素修改代码扔在这里
}

function DarkMode() {
    activateDarkMode();
    // 将需要调整的元素修改代码扔在这里
    // 调整至明亮模式
    document.getElementById("travellings-logo").src = "/img/travelling_w.svg";
    
}

// End ---------------------------------------------------------------------------------------------

function justLookAround() { // 读取 sitemap.txt 并随机跳转到其中一个链接,用于随便转转模块
    // 解决了原有 HTML 无法后退的问题
    fetch('/sitemap.txt')
        /*
        格式：
        单行一个URL，一行一个，不允许有空行
        如：
        https://example.com/page1
        https://example.com/page2
        https://example.com/page3
        */
        .then(response => {
            if (!response.ok) {
                Snackbar.show({
                    text: '；；；；；；；；；；；；；；；；；；；；；；！',
                    pos: 'top-right',
                    showAction: false
                });
            }
            return response.text(); // 修正为 response
        })
        .then(data => {
            const lines = data.split('\n'); // 将文件内容按行拆分
            const randomIndex = Math.floor(Math.random() * lines.length); // 随机生成索引
            const randomLine = lines[randomIndex].trim(); // 获取随机行并去除多余空格

            if (randomLine) {
                window.location.href = randomLine; // 跳转到随机选择的链接
            } else {
                console.error('随机行为空，无法跳转。');
                Snackbar.show({
                    text: '跳转时出错: 1',
                    pos: 'top-right',
                    showAction: false
                });
            }
        })
        .catch(error => {
            console.error('读取 sitemap.txt 失败:', error);
            Snackbar.show({
                text: '跳转时出错: 2 \n' + error,
                pos: 'top-right',
                showAction: false
            });
        });

}


window.addEventListener("load", function () {
    console.log("页面及所有资源加载完毕");

    // 这里可以执行相关的代码
});
/*
// 创建一个新的AudioContext
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// 创建一个OscillatorNode，它是一个可以产生周期性波形的音频源
const oscillator = audioContext.createOscillator();

// 设置波形的类型，可以选择'sine', 'square', 'sawtooth', 'triangle'
oscillator.type = 'sine';

// 设置音调（频率），单位是赫兹（Hz）
// 例如，设置为440Hz，即A4调
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

// 设置振幅（音量）
const gainNode = audioContext.createGain();
gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);

// 将振幅节点连接到音频上下文的目的节点
gainNode.connect(audioContext.destination);

// 将振荡器连接到振幅节点
oscillator.connect(gainNode);

// 开始发出声音
oscillator.start();

// 设置声音持续时间，例如1秒后停止
oscillator.stop(audioContext.currentTime + 1);
*/
const DFHyd = [
    // 高音
    349.23, // 1       - 1
    392, // 2       - 2
    440, // 3       - 3
    523.25, // 5       - 4
    587.33, // 6       - 5
    698.46, // 1 附点  - 6
    // 低音
    329.63, // 7       - 7
    293.66, // 6 附下点 - 8 
    261.63, // 5 附下点 - 9
];

const DFH = [ // 歌曲谱
    5, 6, 2, 1, 6000, 2, 5, 6, 1000, 6, 5,
    //  东 方 红，太 阳    升，中国  出      了 个
    //  毛 主 席，爱 人    民，他是  我      们 的
    // 
    1, 6000, 2, 5, 2, 1, 7, 6000,//5000,5,2,3,2,
    //  毛 泽   东，他为人民谋幸福，
    //  带 路   人，
    //    1,6000,2,3,2,1,2,1,7000,6000,5000,

];

function playDFH() {
    console.log(`
        东  方  红
        1 = F 4 / 2
        中速  庄严地
    `);


    let i = 0;
    let time = 1250; // 延迟播放时间
    function playDFH2() {
        if (i >= DFH.length) {
            clearInterval(intervalId);
            return;
        }

        let audioCtx;
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error('无法创建 AudioContext', e);
            return;
        }

        let oscillator = audioCtx.createOscillator();
        let gainNode = audioCtx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);

        let frequencyValue;
        switch (DFH[i]) {// 音符和
            case 0:
                frequencyValue = DFHyd[DFH[i - 1]];
                break;
            case 1:
                frequencyValue = DFHyd[0];
                break;
            case 2:
                frequencyValue = DFHyd[1];
                break;
            case 3:
                frequencyValue = DFHyd[2];
                break;
            case 5:
                frequencyValue = DFHyd[3];
                break;
            case 6:
                frequencyValue = DFHyd[4];
                break;
            case 7:
                frequencyValue = DFHyd[7];
                break;
            case 1000:
                frequencyValue = DFHyd[6];
                break;
            case 5000:
                frequencyValue = DFHyd[9]; // 修正了这里的索引
                break;
            case 6000:
                frequencyValue = DFHyd[8]; // 修正了这里的索引
                break;
            case 7000:
                // 计算
                break;
            case 10000:
                // 这里需要添加逻辑来处理 case 10000，即分符
                break;
            default:
                console.log("未知的音符", DFH[i]);
        }

        oscillator.frequency.setValueAtTime(frequencyValue, audioCtx.currentTime);
        oscillator.start(audioCtx.currentTime);

        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        oscillator.stop(audioCtx.currentTime + 1);

        console.log(DFH[i]);
        i++;
    }

    const intervalId = setInterval(playDFH2, time);
}


function playMUS(frequency) {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
    oscillator.start(audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    oscillator.stop(audioCtx.currentTime + 1);
    console.log(frequency);
}

// 用户跳过来弄过去改下标题
// 修改标题
document.addEventListener('DOMContentLoaded', (event) => {
    originalTitle = document.title; // 记录初始标题
    lostFocusTitle = `这都跑去干啥了？ 让我康康 | ${originalTitle}`; // 页面失去焦点时的标题
    gainedFocusTitle = `干啥去了，现在才回来……  | ${originalTitle}`; // 页面获得焦点时的标题

    // 监听页面失去焦点和获得焦点事件
    document.addEventListener('visibilitychange', () => {
        try {
            //if (shouldExclude) return; // 如果 URL 在排除列表中，则直接返回

            if (document.hidden) {
                // 页面失去焦点
                if (document.title !== '页面没有找到 | 管理员 - 命令提示符') {
                    document.title = lostFocusTitle; // 更改标题
                }
            } else {
                // 页面获得焦点
                document.title = gainedFocusTitle; // 更改标题
                setTimeout(() => {
                    if (!document.hidden) {
                        document.title = originalTitle; // 改回来
                    }
                }, 2500); // 等待2.5秒
            }
        } catch (error) {
            console.error('标题更改过程中出错:', error);
        }
    });
});


// APlayer 播放器 --------------------------------------------



// 进度条模块 ------------------------------

document.getElementsByClassName('time-progress').innerHTML = `
<div class="progress-container">
    <div class="progress-label">
        本年过了 <span class="year-progress">0.00000%</span>
    </div>
    <div class="progress-bar">
        <div  class="year-progress-bar"></div>
    </div>
</div>

<div class="progress-container">
    <div class="progress-label">
        本月过了 <span class="month-progress">0.00000%</span>
    </div>
    <div class="progress-bar">
        <div  class="month-progress-bar"></div>
    </div>
</div>

<div class="progress-container">
    <div class="progress-label">
        本天过了 <span class="day-progress">0.00000%</span>
    </div>
    <div class="progress-bar">
        <div class="day-progress-bar"></div>
    </div>
</div>

<div class="progress-container">
    <div class="progress-label">
        本小时过了 <span class="hour-progress">0.00000%</span>
    </div>
    <div class="progress-bar">
        <div class="hour-progress-bar"></div>
    </div>
</div>

<div class="progress-container">
    <div class="progress-label">
        本分钟过了 <span class="minute-progress">0.00000%</span>
    </div>
    <div class="progress-bar">
        <div class="minute-progress-bar"></div>
    </div>
</div>

<p>珍惜时间，时光飞逝。</p>
`;

function updateProgressBars() {
    try {
        const yearStart = new Date(now.getFullYear(), 0, 1).getTime();
        const yearEnd = new Date(now.getFullYear() + 1, 0, 1).getTime();
        const yearProgress = ((now.getTime() - yearStart) / (yearEnd - yearStart)) * 100;

        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        const monthProgress = ((now.getTime() - monthStart) / (monthEnd - monthStart)) * 100;

        const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
        const dayProgress = ((now.getTime() - dayStart) / (dayEnd - dayStart)) * 100;

        const hourStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()).getTime();
        const hourEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1).getTime();
        const hourProgress = ((now.getTime() - hourStart) / (hourEnd - hourStart)) * 100;

        const minuteProgress = ((now.getSeconds() / 60)) * 100; // 计算已过分钟百分比

        // 更新进度条和文本显示
        updateDisplay('year', yearProgress, 7);
        updateDisplay('month', monthProgress, 6);
        updateDisplay('day', dayProgress, 5);
        updateDisplay('hour', hourProgress, 3);
        updateDisplay('minute', minuteProgress, 2);

    } catch (error) {
        console.error('更新模块：时光飞逝 时发生错误:', error);
    }
}

// 更新显示函数
function updateDisplay(period, progress, decimalPlaces) {
    // 进度条文本，值，精度
    document.getElementsByClassName(`${period}-progress`).textContent = progress.toFixed(decimalPlaces) + '%';
    document.getElementsByClassName(`${period}-progress-bar`).style.width = progress.toFixed(decimalPlaces) + '%';
}

// API ----------------------------------------------------------

/**
* 判断是否是移动端
* @return {boolean} true: 移动端 false: PC端
*/
function isMobile() {
    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
}

/**
 * 更改主循环的间隔时间
 * @param {number} ontimes 控制主循环的间隔时间，单位ms
 */
function setBarsTime(ontimes) { times = ontimes; }

/**
 * 检查是否是url
 * @param {String} url 要判断的url
 * @returns {boolean} true: 是url false: 不是url
 */
function isUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}


/**
 * 判断是否是调试模式
 * @returns {boolean} true: 是调试模式 false: 不是调试模式
 */
function isDeBug() {
    if (debug == true) {
        console.log('调试模式已激活');
        window.__DEBUG__ = true; // 暴露全局标志
        return true;
    } else {
        return false;
    }
}

/**
 * 计算地球两经纬度之间的地面距离
 * @param {number} e1 1 点经度
 * @param {number} n1 1 点纬度
 * @param {number} e2 2 点经度
 * @param {number} n2 2 点纬度
 * @returns 2 点之间的地面距离，单位 KM
 */
function getDistanceAMLS(e1, n1, e2, n2) {
    const R = 6371
    const { sin, cos, asin, PI, hypot } = Math
    let getPoint = (e, n) => {
        e *= PI / 180
        n *= PI / 180
        return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
    }

    let a = getPoint(e1, n1)
    let b = getPoint(e2, n2)
    let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
    let r = asin(c / 2) * 2 * R
    return Math.round(r);
}

/**
 * 设置字体
 * @param {string} font 字体在 CSS 中的名称
 * @returns 是否设置成功
 * @example setFont('Arial'); // 设置字体为 Arial
 */
function setFont(font) {
    try {
        if (typeof font !== 'string' || font.trim() === '') {
            console.error('无效的字体参数: ', font); // 错误处理
            return false;
        }
        document.body.style.fontFamily = font; // 根据传入的font参数，动态修改body的字体样式
        localStorage.setItem('font', font); // 将字体参数保存到localStorage
        return true;
    } catch (error) {
        console.error('设置字体过程中出错:', error);
        return false;
    }
}
