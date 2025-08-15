
let CONFIG = {
    ITEM: [
        {
            TAG: "main",
            ID: "config_page_main",
            TITLE: "控制面板",
            CONTENT: "调整网站的设置。"
        },
        {
            TAG: "font",
            ID: "config_page_font",
            TITLE: "字体设置",
            CONTENT: "调整网站的字体。"
        },
        {
            TAG: "color",
            ID: "config_page_color",
            TITLE: "颜色设置",
            CONTENT: "调整网站的颜色。"
        },
        {
            TAG: "privacy",
            ID: "config_page_privacy",
            TITLE: "隐私设置",
            CONTENT: "调整网站的隐私设置。"
        }
        
    ],
    USER_CONFIG: _USER_CONFIG.CONFIG_PAGE
};
const page_obj = {
    configWindowItem     : document.getElementById("config_page"),
    configPageItems      : document.getElementsByClassName("config_page"),
    configPageTopButton  : document.getElementById("configPageTopBtn"),
    configPageQuitButton : document.getElementById("configWinCloseBtn"),
    configPageUndefes    : document.getElementById("config_page_undefes"),
    configPageTitle      : document.getElementById("config_title"),
    configPage2Title     : document.getElementById("config_2title"),
}

for (let i = 0; i < configPageItems.length; i++) {
    let item = configPageItems[i];
    item.style.display = "none"; // 隐藏所有config_page元素
    if (i == configPageItems.length - 1) {
        
    }
}

const configFunc = function() {
    var html = configWindowItem.innerHTML;
    var title = "";
    var index = "";

    const setHtml = () => {
        configPageUndefes.innerHTML = html;
    }
    const setTitle = (_title, _index) => {
        title = _title || "配置页面";
        index = _index || "";
    }

    /**
     * ss
     * @returns {boolean} s
     */
    const setPageHtmlDiv = function(setClass) {
        try {
            for (let i = 0; i < configPageItems.length; i++) {
                var element = configPageItems[i];
                element.style.display = "none";
            } // 隐藏所有config_page元素
            var element = document.getElementById("config_page_" + setClass);
            element.style.display = "block"; // 显示指定config_page元素
        } catch (error) {
            return errorCodes.addError(0x0A0012, "设置页面HTML失败", ERROR_TYPES.ERROR, true);
        }
    }

    return {
        setHtmlPage: (_title, _index, _html) => {
            setTitle(_title, _index);
            setHtml(_html);
        }
    }
}
const configWin = configFunc();
