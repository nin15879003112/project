"use strict";var username=document.getElementById("username"),password=document.getElementById("password"),submitBtn=document.getElementById("submitBtn"),val=username.value,user_lock=!1;username.onblur=function(){var e=username.value;QF.pGet("../php/checkusername.php",{username:e}).then(function(e){if(console.log(e),1!==e.error)throw username.parentElement.style.outline="red 2px solid",username.placeholder="用户名错误",password.disabled="disabled",username.value="",new Error(e.msg);console.log(e.error),password.disabled=null,username.style.background="white",username.parentElement.style.outline=null,user_lock=!0}).catch(function(e){console.log(e),user_lock=!1})},username.onfocus=function(){username.parentElement.style.outline=null,username.parentElement.style.border="gray solid 1px"},password.onfocus=function(){password.parentElement.style.border="gray solid 1px"},submitBtn.onclick=function(){user_lock&&QF.pPost("../php/login.php",{username:username.value,password:password.value}).then(function(e){0===e.error?location.href="http://www.yougou.com":(console.log(1),alert(e.msg))}).catch(function(e){alert("登录失败")})};