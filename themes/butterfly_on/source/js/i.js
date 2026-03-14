/**
@copyright
Copyright (c) 2026 AdminCmd(http://admincmd.xyz) <admi_ncmd@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// 主 JS 文件
/*
*/
// debugger;
const LICENSE = () => `

Copyright (c) 2026 AdminCmd(http://admincmd.xyz) <admi_ncmd@outlook.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;
const information = `
Github: https://github.com/admincmd-a/blog-code
`;

const debug = localStorage.getItem("debug") === "true";// 检查网页是否有调试参数

var updateVarIntervalID = 0;
var oldUrl = window.location.pathname;
var ocsTime = 0;

var nowTime = new Date();// 获取当前日期、时间
var now = {
    year: nowTime.getFullYear(),
    month: nowTime.getMonth() + 1,
    day: nowTime.getDate(),
    hour: nowTime.getHours(),
    minute: nowTime.getMinutes(),
    second: nowTime.getSeconds(),

    monthDay: `${this.month}-${this.day}`,
}
var nowMonthDay = `${now.month}-${now.day}`;// 使用模板字符串
// 检查今日是否已经弹窗
var todayKey = `${now.year}-${now.month}-${now.day}`;
var hasShownToday = localStorage.getItem(todayKey);
var today = nowTime;
// 获取今天的农历日期
var lunarDate = LunarCalendar.solarToLunar(today.getFullYear(), today.getMonth() + 1, today.getDate());
var nowZhData = `${today.getMonth() + 1}-${today.getDate()}`// 换为农历
// 格式化农历日期为中文
var lunarDateChinese = `${lunarDate.lunarYear}年${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;
var lunarDateChineseNY = `${lunarDate.lunarMonthName}${lunarDate.lunarDayName}`;

const FOOTER = document.getElementById("footer");
const WORKBOARD = document.getElementById("workboard");
const systemLightMode = window.matchMedia("(prefers-color-scheme: light)");
const urlParams = new URLSearchParams(window.location.search);

var PROGRESS_BAR = document.getElementsByClassName('time-flies');
var currentTimeHtml = "";
var img = "";
var description = "";
var PAGE_MAIN_ID = "page-main";
var OK;
/** DOM 树加载完成？ */
var OK_DOM = false;
/** JavaScript 主循环初始化完成？ */
var DOM_OK = false;
// var errorCode = undefined;
// var errorMsg = "";



// 定义一个文本型数组——用于湖人
const phrases = [
    "<span>！！！Minecraft 免费了 ！！！</span><br /><br /><img scr=\"/img/mcmfl.jpeg\" clsss=\"img-fluid\" alt=\"Minecraft 免费了\"></img>",
    "最新消息：美国灭国了。",
    "突发新闻：日本岛沉没了！",
    "非常抱歉，因为不可控原因，博客将于明天停止运营，感谢您的陪伴，再见",
    "((?) => ?)",
];

const CURRENT_URL = window.location.href;
const FOCUS_TYPE = {
    TYPE: {
        UNEDFINED: 0,
        LOST_TITLE: 1,
        GAINED_TITLE: 2
    }
};
const AUDIO_CONTEXT = {
    TYPE: {
        SINE: 'sine',
        SQUARE: 'square',
        SAWTOOTH: 'sawtooth',
        TRIANGLE: 'triangle'
    }
};

var timeWinDivTitleText = "0";// 专用变量，请勿乱改
var timeWinDivText = "---";
/** 设定等级，默认为0，即弹窗，1 为显示消息 */
var timeWinLevel = 0;
var timeChange;// 欢迎语

var times = 100;// 主循环间隔时间
var timer = 0;// 主循环计数器


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

// 许是个大傻逼，他居然把自己的名字写成了tushengxi，这简直就是个笑话。(AI 生成)
// 钟景岑天天看Bilibili，这简直就是个笑话。(AI 生成)

//  ----------------------------------------------------------
// JS 文件内需要公共调用的东西

const errorCodesFunction = (
    (oldErrorCodes = null) => {
        // let errorCode = 0x00000;
        // let errorMsg = "";
        let errors = {};

        const ERROR_TYPES = {
            SILENT: 0x0,// 静默
            WARN: 0x1,// 警告
            ERROR: 0x2,// 错误
            FATAL: 0x3,// 致命错误
        };

        const DATA_TYPE = {
            STAORAGE: 'refresh',
        };

        const ERROR_CODE_MSG_ZH_CN = {
            errorCodeNotNumber: "错误码必须是数字类型",
            errorMsgNotString: "错误信息必须是字符串类型",
            errorTypeNotValid: "错误类型不合法",

        };

        const ERROR_CODE_MSG = ERROR_CODE_MSG_ZH_CN;

        if (sessionStorage.getItem(DATA_TYPE.STAORAGE)) { oldErrorCodes = sessionStorage.getItem(DATA_TYPE.STAORAGE); }
        // 参数校验函数
        const validateParams = (code, message, warn) => {
            if (typeof code !== 'number') {
                throw new TypeError(ERROR_CODE_MSG.errorCodeNotNumber);
            }
            // if (typeof message !== 'string') {
            //     throw new TypeError(ERROR_CODE_MSG.errorMsgNotString);
            // }
            if (!Object.values(ERROR_TYPES).includes(warn)) {
                throw new RangeError(ERROR_CODE_MSG.errorTypeNotValid);
            }
        };

        // 显示 Snackbar 的封装（可替换 UI 库）
        const showToast = (message) => {
            try {
                Snackbar.show({
                    text: message,
                    pos: 'top-right',
                    action: 4000,
                });
            } catch (e) {
                console.error('Snackbar 显示失败:', e);
            }
        };

        // 格式化错误码（补零处理）
        const formatErrorCode = (code) => {
            return '0x' + code.toString(16).toUpperCase().padStart(5, '0');
        };

        // 初始化
        if (oldErrorCodes) {
            oldErrorCodes = sessionStorage.getItem(DATA_TYPE.STAORAGE)
        } if (oldErrorCodes) {
            errors = oldErrorCodes;
        } else { }

        return {
            /**
             * 记录一个新的错误码和信息
             * @param {number} code 错误码
             * @param {any} message 错误信息
             * @param {number} warn 【0x0=静默，0x1=警告，0x2=错误，0x3=致命错误】实际应使用 {@link errorCodes.ERROR_TYPES} 常量,注：0x3 时会引发页面重载。
             * @param {boolean} returnID 是否返回错误ID，缺省值为 false
             * @returns {false | string} 返回 {@linkcode false}，若 {@link returnID} 为true,则返回错误ID
             * @example } catch (message) {return errorCodes.addError(code, message, errorCodes.ERROR_TYPES.ERROR, false);} // 返回 false，减少了单独的返回语句（反正它也不需要处理这个函数的错误）
             * @function {@link errorCodes.getErrorCode} 获取错误码和信息
             * @function {@link errorCodes.clearError} 清除错误信息
             */
            addError: (code = 0x00000, message = "未知错误", warn = ERROR_TYPES.WARN, returnID = false) => {
                try {
                    let errorID;
                    if (crypto) {// 通过合适的算法生成随机ID
                        try {
                            errorID = crypto.randomUUID();
                        } catch (error) {
                            getErrorIDtoMD5String();
                        }
                    } else {
                        getErrorIDtoMD5String();
                    }

                    validateParams(code, message, warn);

                    errors[errorID] = {
                        code: code,
                        message: message,
                        warn: warn,
                        time: new Date().toLocaleString(),
                    };

                    const fullMessage = `运行时出错: (${formatErrorCode(code)})`;

                    console.error(fullMessage, message); // 抛出错误
                    debugger; // 尝试暂停程序

                    switch (warn) {
                        case ERROR_TYPES.WARN:
                            showToast(fullMessage);
                            break;
                        case ERROR_TYPES.ERROR:
                            showToast(fullMessage);
                            break;
                        case ERROR_TYPES.FATAL:
                            sessionStorage.setItem(DATA_TYPE.STAORAGE, JSON.stringify({
                                error: errors,
                            }));
                            window.location.reload(); // 重载界面
                            break;
                        default:
                            break;
                    };

                    if (returnID) return errorID;
                } catch (e) {
                    console.error('错误处理失败:', e);
                }
                return false;

                function getErrorIDtoMD5String() {
                    errorID = Date.now().toString(36)
                            + Math.random().toString(36).slice(2, 10)
                            + performance.now().toString(36).replace('.', '');
                }
            },

            /**
             * 取得错误码和信息
             * @param {string} id 错误ID
             * @returns {object} 错误码和信息对象
             * @function {@link errorCodes.addError} 设置错误码和信息
             * @function {@link errorCodes.clearError} 清除错误信息
             */
            getErrorCode: (id) => ({
                code: errors[id].code,
                message: errors[id].message,
                time: errors[id].time,
            }),

            /**
             * 通过 错误码 取到错误信息
             * @param {number} errorCode 错误码
             * @returns {object} 错误码和信息对象
             * @function {@link errorCodes.addError} 设置错误码和信息
             * @function {@link errorCodes.clearError} 清除错误信息
             */
            getErrors: (errorCode) => {
                let result = {
                    message: "让我康康有神马错误 (　o=^•ェ•)o　┏━┓",
                    code: 201,
                    items: {},
                    length: 0
                };
                for (let errorID in errors) {
                    if (errors[errorID].code === errorCode) {
                        result.items[errorID] = errors[errorID];
                        result.length++;
                        if (result.code === 201) {
                            result.code = 200;
                        }
                    }
                } if (result.code === 201) {
                    result.message = "啥也木有 (　o=^•ェ•)o　┏━┓";
                    result.code = 201;
                    return result;
                }
                return result;
            },


            /**
             * 返回所有已被记录的错误码和信息
             * @returns {{code: number, message: string, items: {code: number, message: string, warn: number, time: Date}[...], length: number}}
             * @function {@link errorCodes.addError} 设置错误码和信息
             * @function {@link errorCodes.getErrorCode} 取得错误码和信息
             */
            getAllErrorCodes: () => {
                if (errors == {}) {
                    return {
                        items: {},
                        length: 0,
                        message: "啥也木有 (　o=^•ェ•)o　┏━┓",
                        items: {}
                    }   
                } else {
                    return {
                        code: 200,
                        length: Object.keys(errors).length,
                        message: "获取成功 (*≧︶≦))(￣▽￣* )ゞ",
                        items: errors
                    }
                }
            },

            /**
             * 清除错误信息
             * @returns {null}
             * @function {@link errorCodes.addError} 设置错误码和信息
             * @function {@link errorCodes.getErrorCode} 取得错误码和信息
             */
            clearError: () => {
                errors = null;
            },

            // 暴露常量
            ERROR_TYPES: ERROR_TYPES,
            DATA_TYPE: DATA_TYPE,
            errors: errors
        };
    });

const errorCodes = errorCodesFunction(null);

/**
 * 对界面模糊化处理
 */
var pageBlur = {
    /** 是否开启模糊 */
    is: false,
    get blur() {
        return this.is;
    },
    set blur(value) {
        this.is = value;
    },
    /** 修改对象的 ID */
    /** 修改对象的 ID */
    byId: 'page-main',
    /** 修改对象的 class */
    byClass: 'page-main',

    /** 元素DOM预制定 */
    id_dom: document.getElementById(this.byId),
    /** 元素DOM预制定 */
    class_dom: document.getElementsByClassName(this.byClass),

    /** 模糊度 */
    px: 20,

    /**
     * 更新
     */
    topWin() {
        this.id_dom = document.getElementById(this.id_dom);
        this.class_dom = document.getElementsByClassName(this.class_dom);
    },

    /**
     * 开启模糊
     * @returns {boolean} 是否开启成功
     * @function pageBlur.setFalse 关闭模糊
     * @function pageBlur.setSwitch 切换模糊状态
     */
    setTrue() {
        try {

            if (isPcOrNotNarrow()) {
                document.getElementById(this.byId).style = `filter: blur(${this.px}px); pointerEvents: none; opacity: 0.7`;
                document.getElementsByClassName(this.byClass).style = `filter: blur(${this.px}px); pointerEvents: none; opacity: 0.7`;
            }

            this.Blur = true;
            return true;
        } catch (error) {
            console.warn('开启模糊失败:', error);
            return false;
        }
    },

    /**
     * 关闭模糊效果
     * @returns {boolean} 是否成功关闭模糊
     * @function pageBlur.setTrue 开启模糊
     * @function pageBlur.setSwitch 切换模糊状态
     */
    setFalse() {
        try {
            document.getElementById(this.byId).style = ``;
            document.getElementsByClassName(this.byClass).style = ``;

            this.Blur = false;
            return true;
        } catch (error) {
            return errorCodes.addError(0x00001, "关闭模糊失败", errorCodes.ERROR_TYPES.SILENT, false);
        }
    },

    /**
     * 切换模糊状态
     * @returns {null}
     * @function pageBlur.setTrue 开启模糊
     * @function pageBlur.setFalse 关闭模糊
     */
    setSwitch() {
        if (this.Blur) this.setFalse(); else this.setTrue();
    },

    /**
     * 设置模糊的DOM id
     * @param {string} id 元素id
     */
    setConfigId(id) {
        this.byId = id;
        this.id_dom = document.getElementById(this.byId);
    },

    /**
     * 设置模糊的DOM class
     * @param {string} class_name 元素class 
     */
    setConfigClass(class_name) {
        this.byClass = class_name;
        this.class_dom = document.getElementsByClassName(this.byClass);
    },

    /**
     * 设置并调整模糊度
     * @param {number} px 模糊度
     */
    setConfigPx(px) {
        this.px = px;
    },

    up() {
        if (!this.blur) {
            return;
        }

        if (isPcOrNotNarrow()) {
            this.setTrue()
        } else {
            this.setFalse()
        }
    }
}


// 消息窗口 

/** 消息窗口对象 */
const msgWin = {
    timeOutId: null,
    id: "messageWin",
    class: "messageWin",

    /**
     * 打开消息窗口
     * @param {string} title 主标题
     * @param {string} content 下附文本
     * @param {boolean} vague 是否将背景高斯模糊
     * @param {number} timeOut 显示超时时间，单位ms
     * @return {boolean} true = 已成功打开 false = 移动端，将打开Snackbar提示
     */
    show(title, content, timeOut = null, vague = true) {
        if (isUAMobile()) {
            Snackbar.show({
                text: content,
                actionText: '',
                duration: 4000,
                actionTextColor: '#fff',
            });
            return false;
        } else {
            if (!(timeOut === false || 0 || undefined || null)) {
                // 设置超时时间，逾期退出
                this.timeOutId = setTimeout(msgWin.close(), timeOut);
            }
            try {
                if (vague) pageBlur.setTrue(); /* 开启模糊 */
                document.getElementById(this.id).style.display = null;
                document.getElementById(this.id).innerHTML = `
                <p id="messageWin-title" class="messageWin-title">${title}</p>
                <p id="messageWin-text" class="messageWin-text">${content}</p>
                <br />
                <a class="messageWin-closeWin" href="javascript:msgWin.close()" id="messageWin-closeWin">关闭</a>
                <br />
                `;
            } catch (error) {
                return errorCodes.addError(0x00002, `打开消息窗口失败：${error}`, errorCodes.ERROR_TYPES.ERROR, false);
            }
        }
    },

    /** 关闭消息窗口 */
    close() {
        window.document.getElementById(this.id).style.display = "none";
        pageBlur.setFalse(); // 关闭模糊
        if (this.timeOutId !== null) clearTimeout(this.timeOutId); // 注销定时器
        return;
    },

    /**
     * 设置消息窗口的DOM id
     * @param {string} id id名称
     * @param {undefined} class_name class名称，未使用
     * @returns {null}
     */
    setDiv(id, class_name) {
        this.id = id;
        this.class = class_name;
        return;
    },

    initialize() {
        document.getElementById(this.id).style.display = "none";
        return;
    },
};


// 明亮/暗黑模式切换
// ----------------------------------------------------------------------------
// 2024-12-28 解决了首次访问时,没有coockie时导致if执行失败,导致部分图片没有切换.
// 2025-02-21 现在没有Cookie时，会根据时间自动切换模式。
// 2025-03-04 修复了会导致一直是白天模式bug。
// 2025-04-15 修复逻辑问题,统一将Cookies更换为sessionStorage
// 2025-04-28 继续优化和修复一些小问题
// 2025-05-04 重写了切换逻辑
// 2025-07-06 修复了用户自定义切换 JavaScript 代码的代码问题
// 2025-07-21 添加了可以跟随系统模式切换的功能

const lightDarkTheme = (() => {
    const DATA_TYPE = {
        LIGHT: "light",
        DARK: "dark",
        AUTO: "auto",
        HTML_KEY: "data-theme",
        STORAGE_KEY: "lightDarkTheme"
    };

    let theme = DATA_TYPE.AUTO; // [ light | dark | auto ]

    // 初始化主题
    const initializeTheme = () => {
        const storedTheme = sessionStorage.getItem(DATA_TYPE.STORAGE_KEY);
        if (storedTheme) {
            theme = storedTheme;
            lightDarkTheme.setTheme(storedTheme, false);
        } else {
            theme = DATA_TYPE.AUTO;
            autoTheme(false, false);
        }
    };

    /** 
     * 切换当前页面 明亮/暗黑 主题状态
     * 若为 自动 | 未定义 则适应当前时间自动切换
     * @param {boolean} enableSnackbar 是否显示切换提示，缺省值为 true
     * @param {boolean} setStorage 保存配置?
     */
    const switchTheme = (enableSnackbar = true, setStorage = false) => {
        if (theme === DATA_TYPE.AUTO) {
            autoTheme(enableSnackbar, setStorage);
            // const currentTheme = document.documentElement.getAttribute(DATA_TYPE.HTML_KEY);
            // if (currentTheme === DATA_TYPE.DARK) {
            //     lightTheme(enableSnackbar);
            // } else {
            //     darkTheme(enableSnackbar);
            // }
        } else {
            if (theme === DATA_TYPE.DARK) {
                lightTheme(enableSnackbar, setStorage);
            } else if (theme === DATA_TYPE.LIGHT) {
                darkTheme(enableSnackbar, setStorage);
            } else {
                autoTheme(enableSnackbar, setStorage);
            }
        }
    };

    /**
     * 将当前主题设置为 明亮模式
     * @param {boolean} enableSnackbar 
     */
    const lightTheme = (enableSnackbar = true, setStorage = false) => {
        theme = DATA_TYPE.LIGHT;
        document.documentElement.setAttribute(DATA_TYPE.HTML_KEY, DATA_TYPE.LIGHT);
        if (setStorage)  _setStorageItem(DATA_TYPE.LIGHT); // 存储配置
        if (enableSnackbar) GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
        try {
            _lightUserPug();
        } catch (error) {
            return errorCodes.addError(0x01010, `用户自定义切换 JavaScript 代码出现错误：${error}`, errorCodes.ERROR_TYPES.ERROR)
        }
    };

    /**
     * 将当前主题设置为 暗黑模式
     * @param {boolean} enableSnackbar  是否显示切换提示，缺省值为 true
     * @param {boolean} setStorage 保存配置
     */
    const darkTheme = (enableSnackbar = true, setStorage = false) => {
        theme = DATA_TYPE.DARK;
        document.documentElement.setAttribute(DATA_TYPE.HTML_KEY, DATA_TYPE.DARK);
        if (setStorage) _setStorageItem(DATA_TYPE.DARK);
        if (enableSnackbar) GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
        try {
            _darkUserPug();
        } catch (error) {
            return errorCodes.addError(0x01011, `用户自定义切换 JavaScript 代码出现错误：${error}`, errorCodes.ERROR_TYPES.ERROR)
        }
    };

    /**
     * 自动模式切换
     * @param {boolean} enableSnackbar 是否显示切换提示，缺省值为 true
     * @param {boolean} setStorage 保存配置
     */
    const autoTheme = (enableSnackbar = true, setStorage = false) => {
        let currentHour;
        let darkThemeThreshold;
        if (!systemLightMode) {
            currentHour = new Date().getHours();
            darkThemeThreshold = 18; // 18点之后切换为暗黑模式
        }

        if (systemLightMode || currentHour >= darkThemeThreshold) {
            darkTheme(enableSnackbar, setStorage);
        } else {
            lightTheme(enableSnackbar, setStorage);
        }
    };

    /**
     * 写入本地存储的值
     * @param {string} value 欲存储值
     * @returns {boolean} 是否成功写入
     */
    const _setStorageItem = (value) => {
        try {
            sessionStorage.setItem(DATA_TYPE.STORAGE_KEY, value);
            return true;
        } catch (error) {
            return errorCodes.addError(0x00001, `写入本地存储失败：${error}`, errorCodes.ERROR_TYPES.ERROR);
        }
    };

    return {
        /**
         * 取当前主题
         * @returns {string} 当前主题
         */
        getTheme: () => theme,

        /**
         * 刷新主题设置，其实就是重新读取本地存储的主题设置
         * 保持没有通知
         */
        refreshTheme: () => initializeTheme(),

        /**
         * 设置主题
         * @param {string} newTheme 新的主题
         * @param {boolean} enableSnackbar 是否显示切换提示，缺省值为 true
         * @returns {boolean} 是否成功设置
         */
        setTheme: (newTheme, enableSnackbar = true, setStorage = false) => {
            if (newTheme === DATA_TYPE.LIGHT) {
                lightTheme(enableSnackbar, setStorage);
            } else if (newTheme === DATA_TYPE.DARK) {
                darkTheme(enableSnackbar, setStorage);
            } else if (newTheme === DATA_TYPE.AUTO) {
                autoTheme(enableSnackbar, setStorage);
            } else {
                return errorCodes.addError(0x00002, `无效的主题：${newTheme}`, errorCodes.ERROR_TYPES.ERROR);
            }
            return true;
        },

        /**
         * 手动切换主题
         * @param {boolean} enableSnackbar 是否显示切换提示，缺省值为 true
         */
        toggleTheme: (enableSnackbar = true) => {
            if (!isBoolean(enableSnackbar)) enableSnackbar = true;
            switchTheme(enableSnackbar, true);
        },

        // 暴露常量
        DATA_TYPE
    };
})();

// 向下兼容
/**
 * 调整到夜间模式
 * @deprecated 已弃用，请使用 {@link lightDarkTheme.setTheme()}
 */
function activateLightMode() { lightDarkTheme.setTheme(lightDarkTheme.DATA_TYPE.LIGHT, true, true); }

/**
 * 调整到明亮模式
 * @deprecated 已弃用，请使用 {@link lightDarkTheme.setTheme()}
 */
function activateDarkMode() { lightDarkTheme.setTheme(lightDarkTheme.DATA_TYPE.DARK, true, true); }

// End ---------------------------------------------------------------------------------------------

/**
* 判断是否是移动端
* @information 本函数使用 UA 解析，若要使用其他方式解析，请使用 {@link isMobileOrNarrow()}
* @return {boolean} true: 移动端 false: PC端
*/
function isUAMobile() {
    if (window.navigator.userAgent.match
        (
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
    ) {
        return true; // 移动端
    } else {
        return false; // PC端
    }
}

/**
 * 判断是否是PC端
 * @returns {boolean} true: 是PC端 false: 是移动端
 * @information 本函数使用 UA 解析，若要使用页面宽度判断解析，请使用 {@link isPcOrNotNarrow()}
 */
function isUAPC() { return !isUAMobile(); }

/**
 * 使用当前页面宽度判断是否为移动端或页面过窄
 * @returns {boolean} 是否页面过窄
 * @function {@link isUAMobile()} 使用 UserAgent 解析
 * @function {@link isPcOrNotNarrow} 反式
 */
function isMobileOrNarrow() {
    // 获取当前页面的宽度
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const MAX = 768; // 移动端或页面过窄的最大宽度

    // 判断页面宽度是否小于等于768px
    if (windowWidth <= MAX) {
        return true; // 移动端或页面过窄
    } else {
        return false; // 不是移动端，页面宽度足够
    }
}

/**
 * 使用当前页面宽度判断是否为PC端或页面宽度正常
 * @returns {boolean} 是否页面为标准宽度
 * @function {@link isUAPC} 使用 UserAgent 解析
 * @function {@link isMobileOrNarrow} 反式
 */
function isPcOrNotNarrow() { return !isMobileOrNarrow(); }

/**
 * 更改主循环的间隔时间
 * @param {number} ontimes 控制主循环的间隔时间，单位ms
 */
function setBarsTime(ontimes) {
    times = ontimes;
}

/**
 * 检查是否是url
 * @param {any} url 要判断的url
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
 * 检查一个指定的对象是否为布尔值
 * @param {any} value 要检查的值
 * @returns 是否为布尔值
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}

/**
 * 判断是否是调试模式
 * @returns {boolean} true: 是调试模式 false: 不是调试模式
 */
function isDebug() {
    return debug;
}

/**
 * 计算地球两经纬度之间的球面弧线距离
 * @param {number} e1 A 点经度
 * @param {number} n1 A 点纬度
 * @param {number} e2 B 点经度
 * @param {number} n2 B 点纬度
 * @returns 2 点之间的地面直线距离，单位 KM
 */
function getDistanceAMLS(e1, n1, e2, n2) {
    const R = 6371 // km 地球半径
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
 * 设置全局字体
 * @param {string} font 字体在 CSS 中的名称
 * @param {boolean} enableReturn 返回？
 * @returns { boolean | null } 是否设置成功
 * @example setFont('Arial'); // 设置字体为 Arial
 */
function setFont(font, enableReturn = false) {
    try {
        if (typeof font !== 'string' || font.trim() === '') {
            console.error('无效的字体参数: ', font); // 错误处理
            return false;
        }
        document.body.style.fontFamily = font; // 根据传入的font参数，动态修改body的字体样式
        localStorage.setItem('font', font); // 将字体参数保存到localStorage
        if (enableReturn) return true;
    } catch (error) {
        console.error('设置字体过程中出错:', error);
        if (enableReturn) return false;
    }
}

/**
 * 清除 Cookies、localStorage，显示确认按钮。
 * @warn 清除后将刷新页面
 * @param {boolean} enableReturn 是否返回清除结果
 * @returns {boolean} 是否清除成功
 */
function clearCookies(enableReturn = false) {
    if (confirm("确定要清除所有 Cookie 和 localStorage 吗？\n\n 确定=清除 取消=取消")) {
        try {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;) {
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
                }
            }
            localStorage.clear();
            location.reload();
            if (enableReturn) return true;
        } catch (error) {
            if (enableReturn) return errorCodes.addError(0x00001, `清除 Cookie 失败: ${error}`, 1);
        }
    } else {
        Snackbar.show({
            text: '操作已取消。',
            pos: 'top-right',
            action: 2000,
        });
        if (enableReturn) return false;
    }
}

/**
 * 取到当前页面的被选中文本
 * @returns { string | null } 当前选中的文本，如果没有选中返回 “”，如果失败则返回 null
 */
function getSelectedText() {
    if (window.getSelection) {
        var selection = window.getSelection().toString();
        if (selection === '') {
            return '';
        }
        return selection;
    } else if (document.selection) { // IE < 9
        var range = document.selection.createRange();
        if (range.text.trim() === '') {
            return '';
        }
        return document.selection.createRange().text.trim();
    }
    return null;
}

/**
 * 将指定的文本复制到剪贴板
 * @param {string} copyText 欲写入剪贴板的文本
 */
function setClipboardText(copyText) { navigator.clipboard.writeText(copyText); }

/**
 * 取剪贴板内容
 * @returns { Promise<string> } 剪贴板的内容
 * @information 异步函数，需要使用 await 关键字调用
 * @example const clipboardText = await getClipboardText();
 */
function getClipboardText() {
    return new Promise(resolve => {
        navigator.clipboard.readText().then(resolve);
    });
}

/**
 * 获取当前时间的毫秒数
 * @returns {number} 当前时间的毫秒数,自 UNIX 纪元开始
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now
 */
function getNowTimeMills() {
    return Date.now();
}

/**
 * 休眠线程
 * @param {number} ms 休眠时间，单位 ms
 * @returns {null} 等他返回了程序不就继续了吗
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/** 随机跳转 */
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
                    text: `Error`,
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
            if (randomLine === window.location.href) { // 避免跳转到当前页面
                justLookAround();
            }
            if (randomLine) {
                window.location.href = randomLine; // 跳转到随机选择的链接
            } else {
                justLookAround(); // 再次尝试
            }
        })
        .catch(error => {
            errorCodes.addError(0x00001, `读取 sitemap.txt 失败: ${error}`, errorCodes.ERROR_TYPES.SILENT);
            window.location.href = '/'
        });

}

/** 空函数，用于占位 */
function nullFunction() { }

/**
 * 通过参数键获取 URL 参数值
 * @param {string} key 欲取参数
 * @returns { string | null } 取到参数值，如果没有则返回 null
 * @see https://developer.mozilla.org/docs/Web/API/URLSearchParams
 */
function getUrlParams(key) {
    return urlParams.get(key);
}

// /**
//  * 输出调试文本
//  * @param {any} text 要输出的文本
//  * @returns {undefined}
//  */
// function console.debug(text) {
//     if (debug) {
//         return undefined;
//     } else {
//         console.debug(text);
//     }
// }




// 初始化主题
async function start() {
    if (window.__cycleLock) return; // 检查循环锁🔒，避免重复初始化
    
    lightDarkTheme.refreshTheme();
    pageBlur.topWin();
    msgWin.initialize();
    await timeWindow();
    await displayWelcomeMessageInit();

    if (isUAMobile()) {
        document.getElementsByTagName("pcEnable_false").style = "";
    }
    if (debug) {
        Snackbar.show({
            text: '调试模式已开启。',
            pos: 'top-right',
            showAction: false
        });
    }
    
    UPDATE_PROGRESS_BARS_INIT = false;
    console.info(`系统已在系统时钟 ${Date.now().toString()} 初始化完毕。`)
}
console.info(`系统已在系统时钟 ${Date.now().toString()} 启动。`);
updateVar();
void 0;

// 主循环模块 ----------------------------------------------------

/** 主循环执行函数，首次调用会加载初始化模块 */
function updateVar() {
    // 增加页面可见性检查
    if (document.hidden) return;
    if (oldUrl !== window.location.pathname) {
        console.info(`页面切换至 ${window.location.pathname}。`);
        clearInterval(updateVarIntervalID);
        
        // 增加完整的清理流程
        if (typeof pageBlur?.cleanup === 'function') {
            // pageBlur.cleanup();
        }
        
        console.log(`系统已在系统时间 ${Date.now().toString()} 停止主循环函数。(${timer}/${ocsTime})`);
        oldUrl = window.location.pathname;
        timer = 0;
        OK_DOM = false;
        DOM_OK = false;
        
        // 使用立即执行函数重启循环
        (function init() {
            clearInterval(updateVarIntervalID);
            updateVarIntervalID = setInterval(updateVar, 100);
            // updateVar(); // 立即执行一次
        })();
        // return;
    }
    // 增加初始化状态锁
    if ((timer === 0 && !window.__cycleLock) ||// 第 1 次在（可能）页面未加载完全情况下执行初始化
       (OK_DOM && !DOM_OK)) // 在页面 DOM 树加载完毕但未初始化完毕的情况下执行主循环初始化
    {
        try {
            console.log(`系统已在系统时间 ${Date.now().toString()} 启动主循环函数。(${timer}/${ocsTime})`);
            start();
        } catch (e) {
            errorCodes.addError(0x00001, `初始化过程中出错: ${e}`, errorCodes.ERROR_TYPES.SILENT);
        } finally {
            window.__cycleLock = true; // 锁定初始化状态
            if (OK_DOM) {// 如果 DOM 树已加载完毕，则表示这是不在 timer = 0 的 JAVASCRIPT 加载运行时所执行的
                DOM_OK = true;// 初始化完毕
            }
        }

    }
    if (!OK_DOM && !DOM_OK) {// 检查 DOM 树是否已加载完毕，且从未初始化
        try {
            document.getElementById("dom_ok").style = "";// 检查 DOM 树的最后一个元素是否已加载入page
            OK_DOM = true;// 如果取值成功，则表示 DOM 树已加载完毕
            // console.dir
        } catch {
            if (!updateVarIntervalID) {
                updateVarIntervalID = setInterval(updateVar, 100);
            }
            OK_DOM = false;
            timer++;
            ocsTime++;/*在系统时间 ${Date.now().toString()} 第 ${timer}/${ocsTime} 次*/
            console.warn(`系统尝试尝试启动主循环运行时失败。\n原因： DOM 树未加载完毕\n\n如果本警告位于页面切换或页面加载时发出，是正常现象。`)
            return;
        }
    }
    
    
    
    if (timer % 10 === 0) {
        updateVar10(); // 刷新
    } else if (timer % 100 === 0) {
        updateVar100(); // 刷新
    } else if (timer % 1000 === 0) {
        updateVar1000();
    } else if (timer % 10000 === 0) {
        updateVar10000();
    }

    if (PROGRESS_BAR) {// 判断是否存在进度条元素, 防止重复执行，免得tm控制台里全是报错
        updateProgressBars();
    }

    // console.debug(`系统已在系统时间 ${Date.now().toString()} 进行第 ${timer}/${ocsTime} 次主循环运行。`);
    timer++; // 计时器
    ocsTime++;
}

function updateVar10() {
    
}

function updateVar100() {
    pageBlur.up()
    
}
function updateVar1000() { }
function updateVar10000() {
    nowTime = new Date(); // 更新当前时间
}

/** 立即刷新 */
function startUpdateVar() {
    updateVar100();
    updateVar1000();
    updateVar10000();
}

// 增加页面可见性监听
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        // oldUrl = '';
        timer = -1;
        updateVar();
    }
});
// 适配Instantpage的事件监听
if (window.InstantClick) {
    InstantClick.on('change', () => {
        clearInterval(updateVarIntervalID);
        // oldUrl = '';
        timer = -1;
        setTimeout(updateVar, 50); // 延迟确保DOM更新完成
    });
}
window.addEventListener("load", function () {
    console.log("页面及所有资源加载完毕");
    OK = true;
    start();
    // 这里可以执行相关的代码
});

// class mainCycle {
//     cycleSleep = 100; // 主循环休眠时间
//     cycleIntervalID = null; // 主循环定时器

//     constructor(cycleSleep, ) {}
// }


async function timeWindow() {
    // 欢迎语，cookie 提醒 --------------------------------------------
    // 首次访问，弹出Cookie提醒    

    console.log("农历日期:", lunarDateChinese);
    try {
        /**
         * {
         *  sun <= 阳历
         *  moon <= 农历
         *  {
         *      month: 1-12 <= 月份
         *      {
         *          day: 1-31 <= 日期
         *          {
         *              title: 标题
         *              text: 内容
         *          }
         *      }
         * }
         */
        const TIME_WINDOW_CONSOLE = {
            sun: {
                '7-7': {
                    title: `今天是 1937 年 7 月 7 日卢沟桥事变 ${now.year - 1937} 周年纪念日！`,
                    text: '卢沟桥事变的发生标志着日本帝国主义发动全面侵华战争<br />\n勿忘国耻，振兴中华'
                },
                '9-18': {
                    title: `今天是 1931 年 9 月 18 日九一八事变 ${now.year - 1931} 周年纪念日！`,
                    text: '九一八事变是日本帝国主义侵华的开端，标志着世界反法西斯战争的起点，揭开了第二次世界大战东方主战场的序幕。<br />\n勿忘国耻，振兴中华'
                },
                '12-13': {
                    title: '对所有在南京大屠杀中被无辜杀害的同胞表示深切哀悼！',
                    text: `勿忘国耻，振兴中华！ <br /> 今天是南京大屠杀 ${now.year - 1937} 年纪念日、国家公祭日 <br /> 为在南京大屠杀中被杀害的平民默哀，铭记历史，珍视和平，绝不让这样的悲剧再次发生。`
                },
                '1-1': {
                    title: '元旦快乐',
                    text: `新年快乐！ <br /> ${now.year} 年的进度条开始了！`
                },
                '12-31': {
                    title: '元旦快乐',
                    text: `新年快乐！ <br /> ${now.year + 1} 年的进度条马上就要开始了！<br />`
                },
                '3-8': {
                    title: '妇女节',
                    text: '各位女神们，妇女节快乐！'
                },
                '4-1': {
                    title: '非常抱歉，因为不可控原因，博客将于明天停止运营，感谢您的陪伴，再见',
                    text: '今天是愚人节，祝祝祝祝祝 UP 生日快乐！'
                },
                '4-5': {
                    title: '清明安康。',
                    text: ''
                },
                '5-1': {
                    title: '劳动节快乐！',
                    text: '为各行各业的辛勤工作劳动人民致敬！'
                },
                '5-4': {
                    title: '五四青年节',
                    text: '为百年前那些有思想政治觉悟，追求无产阶级、共产主义、马克思主义的青年们致敬！'
                },
                '6-1': {
                    title: '各位小朋友们，儿童节快乐！',
                    text: ''
                },
                '7-1': {
                    title: `中国共产党 ${now.year - 1921} 岁生日快乐`,
                    text: '今天时建党节。'
                },
                '8-15': {
                    title: `日本鬼子已宣布无条件投降 ${now.year - 1945} 年了！`,
                    text: '历史老师：标志着二战结束。'
                },
                '10-1': {
                    title: `中华人民共和国 ${now.year - 1949} 岁生日快乐！`,
                    text: '祝祖国母亲生日快乐！'
                },
                '10-2': '10-1',
                '10-3': '10-1',
                '10-4': '10-1',
                '10-5': '10-1',
                '10-6': '10-1',
                '10-7': '10-1',

                '8-11': {
                    title: 'sssssss',
                    text: 'seeqeee08937525235'

                }
            },
            moon: {
                '腊月廿九': {
                    title: `${lunarDate.lunarYear + 1} 年新年快乐！`,
                    text: ''
                },
                '腊月三十': '腊月廿九',
                '正月初一': {
                    title: `${lunarDate.lunarYear} 新年快乐！`,
                    text: ''
                },
                '正月初二': '正月初一',
                '正月初三': '正月初一',
                '正月初四': '正月初一',
                '正月初五': '正月初一',
                '正月初六': '正月初一',
                '正月十五': {
                    title: '元宵节快乐！',
                    text: '您吃汤圆了吗?'
                },
                '五月初五': {
                    title: '端午节快乐！',
                    text: '您吃粽子了吗?'
                },
                '八月十五': {
                    title: '中秋节快乐！',
                    text: '您吃月饼了吗? <br /><del>这是什么怪味月饼那!?</del>'
                },
                '九月初五': {
                    title: '重阳安康',
                    text: ''
                }
            }
        };

        // 修复节日判断逻辑
        if (TIME_WINDOW_CONSOLE.sun[nowMonthDay]) {
            let entry = TIME_WINDOW_CONSOLE.sun[nowMonthDay];
            let depth = 0;

            // 递归解析引用直到找到对象或达到最大深度
            while (typeof entry === 'string' && depth < 5) {
                entry = TIME_WINDOW_CONSOLE.sun[entry];
                depth++;
            }


            setDivVar(entry);
        } else if (TIME_WINDOW_CONSOLE.moon[lunarDateChineseNY]) {
            let entry = TIME_WINDOW_CONSOLE.moon[lunarDateChineseNY];
            let depth = 0;

            // 递归解析引用直到找到对象或达到最大深度
            while (typeof entry === 'string' && depth < 5) {
                entry = TIME_WINDOW_CONSOLE.moon[entry];
                depth++;
            }

            setDivVar(entry);
        }

        if (timeWinDivTitleText == "0") {// 其他不弹窗的情况放在这里
            // 如果没有匹配的节日，直接返回
            msgWin.close();
            return void 0;
        } else {
            console.log(timeWinDivTitleText);
            console.log(timeWinDivText);

            if (localStorage.getItem('shown') === todayKey) return void 0; // 今天已经显示过了，不再显示
            

            msgWin.show(timeWinDivTitleText, timeWinDivText, true, 10000);
        }
        // 设置今天已显示
        localStorage.setItem('shown', todayKey);
    } catch (error) {
        return errorCodes.addError(0x00001, `创建节日窗口时出错:: ${error}`, 1);
    } finally {
        return true;
    }
    
    function setDivVar(entry) {
        if (typeof entry === 'object') {
            timeWinDivTitleText = entry.title;
            timeWinDivText = entry.text;
            timeWinLevel = entry.level || 0;
        } else if (typeof entry.title === 'Array []') {
            const randomIndex = Math.floor(Math.random() * entry.length);
            timeWinDivTitleText = entry[randomIndex];
            timeWinDivText = entry.text;
        } else if (typeof entry.text === 'Array []') {
            const randomIndex = Math.floor(Math.random() * entry.length);
            timeWinDivTitleText = entry.title;
            timeWinDivText = entry[randomIndex];
        }
    }
}

// 以下是欢迎语的流程
// -----------------------------------------------------------------------------
// 2024.12.21 修正了无法获取 KEY 的问题，将欢迎语显示合并，如果在武汉，那就是UP的老乡
// 2025.2.23 修正了在没有 Cookie 的情况下，无法显示欢迎语的问题
// 2025.6.28 重写逻辑
// 2025.7.10 配置化处理

// 请求数据

/** 载入旧数据或请求新的数据 */
async function displayWelcomeMessageInit() {
    console.group(`系统已在系统时钟 ${Date.now().toString()} 启动线程 ${displayWelcomeMessageInit.name} 以加载欢迎语信息。`);
    try {
        let ipLoacation = window.saveToLocal.get('ipLocation');
        if (!ipLoacation) {
            console.debug("无缓存数据，正在请求数据...");
            // 数据已过期或不存在
            var script = document.createElement('script');
            var url = `https://apis.map.qq.com/ws/location/v1/ip?key=${_USER_CONFIG.WELCOME_MAP.API_KEY}&output=jsonp`;
            script.src = url;
            window.QQmap = function (data) {
                ipLoacation = data;
                // 将数据保存到 localStorage，过期时间设置为 1 天
                window.saveToLocal.set('ipLocation', ipLoacation, 1);
                document.body.removeChild(script);
                delete window.QQmap;
                displayWelcomeMessage(ipLoacation); // 在获取到数据后调用显示欢迎语的函数
            };
            document.body.appendChild(script);
        } else {
            console.debug("已获取缓存数据，正在执行后续逻辑...");
            displayWelcomeMessage(ipLoacation); // 直接调用显示欢迎语的函数
        }
    } catch (e) {
        errorCodes.addError(0x00000000000000000000000002, "在请求欢迎语数据时，过程出错:" + e, errorCodes.ERROR_TYPES.ERROR, true);
    }
}

/** 加载当前的位置，匹配欢迎语数据，显示欢迎语 */
async function displayWelcomeMessage(ipLoacation) {
    try {
        // 此处必须等待数据加载完成，否则 ipLoacation 为 NULL 导致报错
        while (!ipLoacation.result) {
            await sleep(50); // 等待数据加载完成
            ipLoacation = window.saveToLocal.get('ipLocation');
            console.debug("等待数据加载完成...");
        }
        console.debug("已获取到传输数据，耗时请去网络页面查看（如果有）：", ipLoacation);

        // 初始化配置
        let dist = getDistanceAMLS(
            _USER_CONFIG.WELCOME_MAP.AUTHOR_LONGITUDE,
            _USER_CONFIG.WELCOME_MAP.AUTHOR_LATITUDE,
            ipLoacation.result.location.lng,
            ipLoacation.result.location.lat
        );
        console.debug(`已获取 HTML 请求数据有关文本：`,_USER_CONFIG.WELCOME_MAP);

        // 读取欢迎语数据
        let pos = ipLoacation.result.ad_info.nation;
        let ip = ipLoacation.result.ip;
        let ipDZ;
        let posdesc; //要显示的信息
        const defaultAddress = _USER_CONFIG.WELCOME_MAP.DEFAULT_ADDRESS;
        const authorAddress = _USER_CONFIG.WELCOME_MAP.AUTHOR_ADDRESS;
        const data_scb = _USER_CONFIG.WELCOME_MAP.POSDESC_SWITCH | {default: "欢迎来到我的博客！"};
        let address = defaultAddress;

        console.debug(`已获取 IP 地址：${ip}，位置：${ipLoacation.result.ad_info}`);

        // 匹配数据
        // 根据国家、省份、城市信息自定义欢迎语
        // 腾讯 API 的海外地区不支持省份及城市信息
        if (data_scb[pos] || data_scb.default === undefined) {
            if (typeof data_scb[pos] === 'object') { // 检查是否位于国外.实际上如果 API 支持国外，也可以检查
                if (data_scb[pos].content) {
                    posdesc = data_scb[pos].content;
                } else {
                    let province = ipLoacation.result.ad_info.province.replace(/市$/, ''); // 去掉市字
                    let city = ipLoacation.result.ad_info.city.replace(/市$/, ''); // 去掉市字
                    let district = ipLoacation.result.ad_info.district;
                    console.debug(`已处理的信息：省份：${province}，城市：${city}，区县：${district}`);
                    if (data_scb[pos][province]) { // 省份信息
                        if (typeof data_scb[pos][province] === 'object') {
                            if (data_scb[pos][province].specialAdministrativeRegion) { // 特别行政区
                                posdesc = data_scb[pos][province].content;
                            } else if (data_scb[pos][province].municipalities) { // 直辖市
                                posdesc = data_scb[pos][province].content;
                            } else { // 一般省份
                                if (data_scb[pos][province][city]) {
                                    if (data_scb[pos][province][district]) {
                                        if (data_scb[pos][province][city][district]) {
                                            posdesc = data_scb[pos][province][city][district];
                                        } else {
                                            posdesc = data_scb[pos][province][city].default;
                                        } if (typeof entry === 'object' && data_scb[pos][province][city][district].authorLocations === true) {
                                            address = authorAddress;
                                        }
                                    } else {
                                        posdesc = data_scb[pos][province][city].default;
                                    } if (typeof entry === 'object' && [pos][province][city].authorLocations === true) {
                                        address = authorAddress;
                                    }
                                } else {
                                    posdesc = data_scb[pos][province].default;
                                } if (typeof entry === 'object' && data_scb[pos][province].authorLocations === true) {
                                    address = authorAddress;
                                }
                            }
                        } else {
                            posdesc = data_scb[pos][province];
                        } if (typeof entry === 'object' && data_scb[pos][province].authorLocations === true) {
                            address = authorAddress;
                        }
                    } else {
                        posdesc = data_scb[pos].default; // 省份信息不存在，使用默认信息
                    } if (data_scb[pos].connectProvincesCities) { // 连接省份和城市信息
                        pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city;
                    } if (typeof entry === 'object' && data_scb[pos].authorLocations === true) {
                        address = authorAddress;
                    }
                }
            } else {
                posdesc = data_scb[pos];
            } if (typeof entry === 'object' && data_scb[pos].authorLocations === true) {
                address = authorAddress;
            }
        } else {
            posdesc = data_scb.default;
        }

        // 判断时间
        const now = new Date();
        let timeChange = "";
        if (now.getHours() >= 5 && now.getHours() < 11) timeChange = "<span>上午好</span>，一日之计在于晨";
        else if (now.getHours() >= 11 && now.getHours() < 13) timeChange = "<span>中午好</span>，开——饭——了——";
        else if (now.getHours() >= 13 && now.getHours() < 15) timeChange = "<span>下午好</span>，懒懒地睡个午觉吧！";
        else if (now.getHours() >= 15 && now.getHours() < 16) timeChange = "<span>下午三点了</span>，上课摸鱼 ING...";
        else if (now.getHours() >= 16 && now.getHours() < 19) timeChange = "<span>夕阳无限好！</span>";
        else if (now.getHours() >= 19 && now.getHours() < 24) timeChange = "<span>晚上好</span>，我要写作业了……";
        else timeChange = "<span>Good night.</span>";

        // 检查 welcome-info 是否存在
        const welcomeInfoElement = document.getElementById("welcome-info");
        if (welcomeInfoElement) {
            // 用户定义，如无法查找则使用缺省值
            welcomeInfoElement.innerHTML = _welcomeInfoElement(pos, address, dist, timeChange, posdesc, ip)
                || `欢迎来自 <span>${pos}</span> 的 ${address}，${timeChange}<br />你距我约有 <span>${dist}</span> 公里，${posdesc}，你的 IP 地址是 ${ip}<hr>`
                || "Welcome!";
        }

        if (sessionStorage.getItem("popCookieWindow") != "0") {
            // 这里可以添加弹窗逻辑
        }
    } catch (e) {
        const welcomeInfoElement = document.getElementById("welcome-info");
        if (welcomeInfoElement) { // 放一点默认信息，要不然一条分割线看的很别扭
            welcomeInfoElement.innerHTML = "你好呀，欢迎来看我的博客！";
        }
        // 上报错误
        errorCodes.addError(0x00000000000000000000000000000001, "在显示欢迎语信息时，发生了一个错误：" + e, errorCodes.ERROR_TYPES.ERROR, true);
    } finally {
        console.log(`系统在系统时钟 ${Date.now().toString()} 完成线程 ${displayWelcomeMessage.name} 的工作。`)

    }
    console.groupEnd();
}


let referrer = document.referrer || '-';
let domain = referrer ? referrer.split("://")[1] : '-';
domain = domain ? domain.split("/")[0] : '-';

if (sessionStorage.getItem('popDNname')) {
    sessionStorage.setItem('popDNname', domain);
}

setTimeout(function () {
    if (sessionStorage.getItem('popCookieWindow') != "0") {
        Snackbar.show({
            text: '本站使用 Cookie 和 本地会话存储 保证浏览体验和网站统计',
            pos: 'top-right',
            actionText: "查看博客声明",
            onActionClick: function () {
                window.open("/license");
            },
        });
    }
}, 4500);

setTimeout(function () {
    switch (domain) {
        case 'www.travellings.cn':
            Snackbar.show({
                text: '欢迎来自开往的穿梭者！',
                pos: 'top-center',
            });
            break;
        case 'admincmd.xyz':
            console.log('由本站主站站点访问');
            break;
        case '-':
            break;
        case window.location.hostname:
            break;
        default:
            Snackbar.show({
                text: `欢迎从来自 ${domain} 的访客访问本站！`,
                pos: 'top-center',
                actionText: "",
                onActionClick: function (element) {
                    window.open("");
                },
            });
            break;
    }
}, 2500);

//不在弹出Cookie提醒
sessionStorage.setItem("popCookieWindow", "0");


// let referrer = document.referrer || ' ? ? ? ';
// let domain = referrer ? referrer.split("://")[1] : ' ? ? ? ';
// domain = domain ? domain.split("/")[0] : ' ? ? ? ';
// setTimeout(function () { // 康康是不是来自其他网站
//     switch (domain) {
//         case 'www.travellings.cn':
//             Snackbar.show({
//                 text: '欢迎来自开往的穿梭者！',
//                 pos: 'top-center',
//             })
//             break;
//         case 'blog.admincmd.xyz':
//             console.log('由本站主站站点访问');
//             break;
//         case 'netlify-blog.admincmd.xyz':
//             console.log('由本站镜像站点访问');
//             break;
//         case 'cf-blog.admincmd.xyz':
//             console.log('由本站镜像站点访问');
//             break;
//         case ' ? ? ? ':
//             console.log("无效")
//             break;
//         default:
//             console.warn('');
//             Snackbar.show({// 如果有
//                 text: `欢迎从来自 ${domain} 的访客访问本站！`,
//                 pos: 'top-center',
//                 actionText: "",
//                 onActionClick: function (element) {
//                     window.open("")
//                 },
//             });
//             break;
//     }
// }, 2500)

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


/**
 * 使用震荡器播放音频
 * @param {number} frequency 频率，单位 Hz
 * @param {number} currentTime 持续时间，单位秒
 * @param {string} type 波形类型，可选 'sine', 'square', 'sawtooth', 'triangle'
 * @param {number} gain 音量，取值范围 0-1
 */
function playMUS(frequency, currentTime, type, gain) {
    window.AudioContext = window.AudioContext || window.AudioContext;
    var audioCtx = new AudioContext();
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(gain, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
    oscillator.start(audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    oscillator.stop(audioCtx.currentTime + currentTime);
    console.log(frequency);
}

function playButton() {
    playMUS(440, 1, AUDIO_CONTEXT.TYPE.SINE, 0.5);
}

// 用户跳过来弄过去改下标题
// 在页面加载完成后，获取初始标题，并设置失去焦点和获得焦点时的标题
document.addEventListener('DOMContentLoaded', (event) => {
    originalTitle = document.title; // 记录初始标题
    lostFocusTitle = getFocusTitle(FOCUS_TYPE.TYPE.LOST_TITLE, originalTitle); // 页面失去焦点时的标题
    gainedFocusTitle = getFocusTitle(FOCUS_TYPE.TYPE.GAINED_TITLE, originalTitle); // 页面获得焦点时的标题

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





// 进度条模块 ------------------------------


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
        ) / 1000 / 60 * 100; // 计算一个分钟已过秒数，精确到毫秒，除以60，乘100，得到百分比

        // 更新进度条和文本显示
        updateDisplay('year', yearProgress, 7);
        updateDisplay('month', monthProgress, 6);
        updateDisplay('day', dayProgress, 5);
        updateDisplay('hour', hourProgress, 3);
        updateDisplay('minute', minuteProgress, 2);

    } catch (error) {
        errorCodes.addError(0x1443B001, '更新模块：时光飞逝 时发生错误' + error, errorCodes.ERROR_TYPES.SILENT, false);
        if (errorCodes.getErrors(0x1443B001).length > 1) // 若如发现错误出现 1 个以上，重新初始化
        {
            UPDATE_PROGRESS_BARS_INIT = false;
        } else if (errorCodes.getErrors(0x1443B001).length > 1000) {
            errorCodes.addError(0x1443B001, '更新模块：时光飞逝 时发生错误' + error, errorCodes.ERROR_TYPES.FATAL, true);
            // 页面重载
        }
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


/*/ 1000 / 60)) * 100*/; // 计算已过分钟百分比    ;
function ___() {return null}
// 浏览器格式化累死
// 话说这括号彩灯挺好看的

// 一个无意义符号，存在于每台现代计算机中，但无人知晓它的意思 YYSD => ⍼
console.info(`系统已在系统时钟 ${new Date().toLocaleString()} 将主 JS 执行完毕。`);