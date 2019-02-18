var targeted = [];
var pressed = false;
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

console.log($(window).height())
var arr = [
    "刘露",
    "王麾",
    "陆白也",
    "张祺隆",
    "郭浩",
    "杨林钧",
    "孙静",
    "张雅琼",
    "贾纪东",
    "李敏",
    "孙一凡",
    "边江飞",
    "孙艳艳",
    "冯一雄",
    "许景彦"
];
var bg_music = document.getElementById("bg_music");
var stop_music = document.getElementById("stop_music");

$(document).ready(function() {
    $(".body").css("height", $(window).height());
    $("#start").css("margin-top", 450 * $(window).height() / 850);
})
//进入全屏
function requestFullScreen() {
    var de = document.documentElement;
    if (de.requestFullscreen) {
        de.requestFullscreen();
    } else if (de.mozRequestFullScreen) {
        de.mozRequestFullScreen();
    } else if (de.webkitRequestFullScreen) {
        de.webkitRequestFullScreen();
    }

    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}
//退出全屏
function exitFullscreen() {
    var de = document;
    if (de.exitFullscreen) {
        de.exitFullscreen();
    } else if (de.mozCancelFullScreen) {
        de.mozCancelFullScreen();
    } else if (de.webkitCancelFullScreen) {
        de.webkitCancelFullScreen();
    }
    setTimeout("$('.body').css('height', $(window).height());", 100);
    setTimeout("$('.body').css('height', $(window).height());", 300);
    setTimeout("$('.body').css('height', $(window).height());", 500); //确保高度等于屏幕高度
}

function start() {
    if (!pressed) {
	if (arr.length > 0) {
	     pressed = true;
        bg_music.currentTime = 0;
        bg_music.play();
        $('#btn').text("结束");
        id = setInterval("document.getElementById('target').innerHTML = show();", 20);
	}else {
 	 document.getElementById('target').innerHTML = "抽奖结束";
	}
        
    } else {
        clearInterval(id);
        pressed = false;
        bg_music.pause();
        bg_music.currentTime = 0;
        $('#btn').text("开始");
        swfshow();
        stop_music.currentTime = 0;
        stop_music.play();
        var m = write();
        targeted.push(m)
        arr.remove(m);
        document.getElementById('target').innerHTML = m;
        console.log("已中奖：" + targeted)
        console.log("未中奖：" + arr)
        setTimeout("swfhidden()", 5000) //修改烟花多久后消失。3000代表3秒
    }

}

function swfshow() {
    $('#swfbg').show();
}

function swfhidden() {
    $('#swfbg').hide();
}

function show() {
    var one = getOne()
    var index = $.inArray(one, targeted);
    return one;
}

function write() {
    var one = getOne()
    var index = $.inArray(one, targeted);
    return one;
}

function getOne() {
    var name = '';
    var length = arr.length;
    var num = Math.ceil(Math.random() * length) - 1
    return arr[num];
}