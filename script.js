let cakeCount = 0;  // 跟踪已生成的蛋糕数量
const maxCakeCount = 50;  // 最大蛋糕数量

function celebrate() {
    // 显示弹出窗口并添加动画
    const popup = document.getElementById("popup-message");

    // 重置弹窗位置，确保每次打开时都不偏移
    popup.style.top = '50%';  // 弹窗垂直居中
    popup.style.left = '50%';  // 弹窗水平居中
    popup.style.transform = 'translate(-50%, -50%)';  // 确保弹窗完全居中


    popup.classList.remove("hidden");
    popup.classList.remove("hide");
    popup.classList.add("show");
    
    

    // 激活蛋糕雨背景
    const cakeRain = document.getElementById("cake-rain");
    cakeRain.style.display = "block";  // 显示蛋糕雨

    // 限制蛋糕生成数量
    const cakeInterval = setInterval(() => {
        if (cakeCount < maxCakeCount) {
            createCake();
            cakeCount++;
        } else {
            clearInterval(cakeInterval);  // 达到最大数量后停止生成
        }
    }, 500);  // 每500毫秒生成一个新的蛋糕
}

function closePopup() {
    // 隐藏弹窗并关闭蛋糕雨
    const popup = document.getElementById("popup-message");
    popup.classList.remove("show");
    popup.classList.add("hide");

    // 隐藏蛋糕雨
    const cakeRain = document.getElementById("cake-rain");
    cakeRain.style.display = "none";

    // 清除所有已生成的蛋糕
    clearCakeRain();

    // 重置蛋糕数量
    cakeCount = 0;
}

// 创建一个蛋糕并使其下落
function createCake() {
    const cake = document.createElement('div');
    cake.classList.add('cake');

    // 随机生成蛋糕的位置
    const left = Math.random() * 100;
    cake.style.left = left + '%';

    // 随机旋转角度
    const rotate = Math.random() * 360;  // 生成一个 0 到 360 之间的随机数
    cake.style.transform = `rotate(${rotate}deg)`;  // 应用旋转

    // 添加到蛋糕雨容器中
    const cakeRain = document.getElementById('cake-rain');
    cakeRain.appendChild(cake);

    // 删除动画结束后的蛋糕
    cake.addEventListener('animationend', () => {
        cake.remove();
        cakeCount--; // 每移除一个蛋糕，减少计数
    });
}

// 清除蛋糕雨容器中的所有蛋糕
function clearCakeRain() {
    const cakeRain = document.getElementById('cake-rain');
    cakeRain.innerHTML = '';  // 清空容器中的所有元素
}

var script = document.createElement("script");
script.setAttribute("type","text/javascript");
script.setAttribute("id","myhk");
script.setAttribute("src","https://myhkw.cn/api/player/1732946239132");
script.setAttribute("key","1732946239132");
script.setAttribute("m","1");
document.documentElement.appendChild(script);