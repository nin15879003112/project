"use strict";for(var shoesBox=document.getElementsByClassName("bg-shoes")[0],sportBox=document.getElementsByClassName("sport")[0],bgBtn=document.getElementsByClassName("sport-btn")[0],sportBtn=document.getElementsByClassName("bg-btn")[0],newCommodity=document.getElementsByClassName("new-commodity")[0],commodityPic=document.querySelector(".new-commodity-pic"),leftBtn=document.querySelector(".leftBtn"),rightBtn=document.querySelector(".rightBtn"),width=commodityPic.clientWidth,data=[{id:"101400544",src:"//i2.ygimg.cn/pics/belle/2020/101400544/101400544_01_mb.jpg?11",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"589"},{id:"101386120",src:"//i2.ygimg.cn/pics/belle/2020/101386120/101386120_01_mb.jpg?9",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"英伦 满帮鞋",price:"999"},{id:"101400949",src:"//i2.ygimg.cn/pics/teenmix/2020/101400949/101400949_01_mb.jpg?4",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-teenmix.png",name:"简约 短靴",price:"1099"},{id:"101399658",src:"//i2.ygimg.cn/pics/belle/2020/101399658/101399658_01_mb.jpg?5",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"559"},{id:"101392232",src:"//i2.ygimg.cn/pics/tata/2020/101392232/101392232_01_mb.jpg?4",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-tata.png",name:"休闲 短靴",price:"719"},{id:"101386474",src:"//i1.ygimg.cn/pics/belle/2020/101386474/101386474_01_mb.jpg?15",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"商务 满帮鞋",price:"789"},{id:"101400544",src:"//i2.ygimg.cn/pics/belle/2020/101400544/101400544_01_mb.jpg?11",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"589"},{id:"101386474",src:"//i1.ygimg.cn/pics/belle/2020/101386474/101386474_01_mb.jpg?15",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"商务 满帮鞋",price:"789"},{id:"101400545",src:"//i1.ygimg.cn/pics/belle/2020/101400545/101400545_01_mb.jpg?10",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"589"},{id:"101400603",src:"//i2.ygimg.cn/pics/teenmix/2020/101400603/101400603_01_mb.jpg?4",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-teenmix.png",name:"简约 短靴",price:"1399"},{id:"101386474",src:"//i1.ygimg.cn/pics/belle/2020/101386474/101386474_01_mb.jpg?15",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"商务 满帮鞋",price:"789"},{id:"101400590",src:"//i1.ygimg.cn/pics/teenmix/2020/101400590/101400590_01_mb.jpg?4",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-teenmix.png",name:"简约 短靴",price:"1299"},{id:"101401751",src:"//i1.ygimg.cn/pics/belle/2020/101401751/101401751_01_mb.jpg?15",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"659"},{id:"101392232",src:"//i2.ygimg.cn/pics/tata/2020/101392232/101392232_01_mb.jpg?4",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-tata.png",name:"休闲 短靴",price:"719"},{id:"101410551",src:"//i1.ygimg.cn/pics/belle/2020/101410551/101410551_01_mb.jpg?6",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"OL通勤 浅口鞋",price:"959"},{id:"101401751",src:"//i1.ygimg.cn/pics/belle/2020/101401751/101401751_01_mb.jpg?15",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-belle.png",name:"休闲 满帮鞋",price:"659"}],str="",i=0;i<data.length;i++)str+='  <li>\n<dl>\n    <dt><a href="html/detail.html?id='+(i+1)+'"><img src="'+data[i].src+'" alt=""></a></dt>\n    <dd>\n        <h4><img src="'+data[i].src1+'" alt=""></h4>\n        <p>'+data[i].name+"</p>\n        <h5><span>￥</span>"+data[i].price+"<i>❤</i></h5>\n    </dd>\n</dl>\n</li>";shoesBox.innerHTML=str;var data1=[{src:"//i2.ygimg.cn/pics/adidasclassic/2020/101384230/101384230_01_mb.jpg?5",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidasoriginals.png",name:"夹克",price:"559"},{src:"//i1.ygimg.cn/pics/nike/2020/101365822/101365822_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-nike.png",name:"篮球鞋",price:"1099"},{src:"//i2.ygimg.cn/pics/nike/2020/101367027/101367027_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-nike.png",name:"长裤",price:"449"},{src:"//i2.ygimg.cn/pics/nike/2020/101366483/101366483_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-nike.png",name:"篮球鞋",price:"1199"},{src:"//i1.ygimg.cn/pics/adidasneo/2020/101373024/101373024_01_mb.jpg?3",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidasneo.png",name:"帽子",price:"189"},{src:"//i2.ygimg.cn/pics/adidasneo/2020/101373738/101373738_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidasneo.png",name:"T恤",price:"159"},{src:"//i2.ygimg.cn/pics/nike/2020/101366725/101366725_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-nike.png",name:"板鞋/复刻鞋",price:"699"},{src:"//i2.ygimg.cn/pics/adidas/2020/101385952/101385952_01_mb.jpg?3",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidas.png",name:"夹克",price:"469"},{src:"//i1.ygimg.cn/pics/adidasneo/2020/101373024/101373024_01_mb.jpg?3",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidasneo.png",name:"帽子",price:"189"},{src:"//i1.ygimg.cn/pics/adidas/2020/101382989/101382989_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidas.png",name:"足球鞋",price:"429"},{src:"//i1.ygimg.cn/pics/adidas/2020/101382989/101382989_01_mb.jpg?2",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-adidas.png",name:"足球鞋",price:"429"},{src:"//i1.ygimg.cn/pics/nike/2020/101366214/101366214_01_mb.jpg?3",src1:"https://i1.ygimg.cn/pics/brandlogo/brandlogforcms/blackL-nike.png",name:"板鞋/复刻鞋",price:"419"}],str1="";for(i=0;i<data1.length;i++)str1+='  <li>\n<dl>\n    <dt><a href="html/detail.html?id='+(i+1)+'"><img src="'+data1[i].src+'" alt=""></a></dt>\n    <dd>\n        <h4><img src="'+data1[i].src1+'" alt=""></h4>\n        <p>'+data1[i].name+"</p>\n        <h5><span>￥</span>"+data1[i].price+"<i>❤</i></h5>\n    </dd>\n</dl>\n</li>";function animate(i){var c=commodityPic.querySelector(i),n=c.clientWidth,s=0,g=!0;rightBtn.onclick=function(){g&&(g=!1,s++,move(c,{left:-width*s},1e3,function(){n-width<=width*s&&(console.log(2),console.log(-width*s),c.style.left=-n+"px",s--),g=!0}))},leftBtn.onclick=function(){g&&(g=!1,s--,move(c,{left:-width*s},1e3,function(){0<=width*-s&&(console.log(1),c.style.left=0,s++),g=!0}),console.log(s))}}sportBox.innerHTML=str1,newCommodity.onclick=function(i){"bg-btn"===(i=i||window.event).target.className&&(sportBox.style.display="none",shoesBox.style.display="block",i.target.nextElementSibling.style.borderBottom="0",i.target.style.borderBottom="1px solid #333",animate(".bg-shoes")),"sport-btn"===i.target.className&&(shoesBox.style.display="none",sportBox.style.display="block",i.target.previousElementSibling.style.borderBottom="0",i.target.style.borderBottom="1px solid #333",animate(".sport"))};