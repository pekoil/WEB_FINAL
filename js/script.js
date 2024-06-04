
    function clearFields() {
    document.getElementById("userid").value = "";
    document.getElementById("pw").value = "";
}

    // 顯示/隱藏密碼功能
    var checkEye = document.getElementById("checkEye");
    var pw = document.getElementById("pw");
    checkEye.addEventListener("click", function (e) {
    if (pw.type === "password") {
    pw.type = "text";
    checkEye.classList.remove('fa-eye');
    checkEye.classList.add('fa-eye-slash');
} else {
    pw.type = "password";
    checkEye.classList.remove('fa-eye-slash');
    checkEye.classList.add('fa-eye');
}
});

    //機器人驗證
    var robotCheckbox = document.querySelector('.robot input[type="checkbox"]');
    var idleTimeout;
    robotCheckbox.addEventListener('change', function (e) {
    if (this.checked) {
    this.disabled = true;
    this.style.outlineColor = "";
    startIdleTimer();
}
});
    function startIdleTimer() {
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(function () {
    robotCheckbox.checked = false;
    robotCheckbox.disabled = false;
}, 30000); // 閒置30s後取消勾選
}

    // 設置檢測任何活動的事件監聽器
    ['mousemove', 'keypress', 'click'].forEach(function(event) {
    document.addEventListener(event, resetIdleTimer);
});

    function resetIdleTimer() {
    if (robotCheckbox.checked) {
    startIdleTimer();
}
}
    document.querySelector('form').addEventListener('submit', function (e) {
    if(robotCheckbox.checked){
    e.preventDefault();
    alert("登入成功?")
    window.location.href = "https://www.gamer.com.tw/";
}
    else{
    e.preventDefault();
    alert("請勾選\"我不是機器人\"")
}
});