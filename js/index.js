// 游戏头部显示隐藏
let ifshow = false;
$(".video .grame").click(function () {
    $('.grame-down').css({
        display: (ifshow ? 'none':'block')   
    })
    if(ifshow){
        $('.video .grame span').attr('class','layui-icon layui-icon-down g')
    }else{
        $('.video .grame span').attr('class','layui-icon layui-icon-up g')
    }
    
    ifshow = !ifshow;
})
//电子竞技
let ifshow1 = false;
$(".video .athletics").click(function () {
    console.log(666)
    $('.athletics_down').css({
        display: (ifshow1 ? 'none':'block')   
    })
    if(ifshow1){
        $('.video .athletics span').attr('class','layui-icon layui-icon-down g')
    }else{
        $('.video .athletics span').attr('class','layui-icon layui-icon-up g')
    }
    
    ifshow1 = !ifshow1;
})
//登录注册
let ifshow2 = false;
$(".video .header_right_r").click(function () {
    $('.video .last').css({
        display: (ifshow2 ? 'none':'block')   
    })
    if(ifshow2){
        $('.video .header_right_r span').attr('class','layui-icon layui-icon-down g')
    }else{
        $('.video .header_right_r span').attr('class','layui-icon layui-icon-up g')
    }
    
    ifshow2 = !ifshow2;
})
// 导航部分
let ifshow3 = false;
$(".video_bar .hide_box").click(function () {
    $('.video_bar .hide').css({
        display: (ifshow3 ? 'none':'block')   
    })
    if(ifshow3){
        $('.video .hide_box span').attr('class','layui-icon layui-icon-down dow')
    }else{
        $('.video .hide_box span').attr('class','layui-icon layui-icon-up dow')
    }
    
    ifshow3 = !ifshow3;
})

let ifshow4 = false;
$(".video_bar .hide_box1").click(function () {
    $('.hide_box1 .hide1').css({
        display: (ifshow4 ? 'none':'block')   
    })
    if(ifshow4){
        $('.video .hide_box1 span').attr('class','layui-icon layui-icon-down dow')
    }else{
        $('.video .hide_box1 span').attr('class','layui-icon layui-icon-up dow')
    }
    
    ifshow4 = !ifshow4;
})
// 头部导航栏移动
var nav=document.querySelector(".video_bar")
var video = document.querySelector('.video_bar_box')
			window.onscroll=function(){
				var scrolly=window.pageYoffset||document.body.scrollTop+document.documentElement.scrollTop;
				if(scrolly>82){
					nav.style.position="fixed"
                    nav.style.top="0px"
                    video.style.width = '100%'
				}
				else{
					nav.style.position="absolute"
                    nav.style.top="80px"
                    video.style.width = '1519px'
				}
			}
// 轮播图
var li = document.querySelectorAll(".message li")
let bigimg = document.querySelector('.carousel_img img');
let description = document.querySelector('.description .description_cont')
let str = [`<h2><i>D.Va</i></h2>
<p>一名前职业玩家，而现在则利用自己的技巧驾驶一台尖端机甲保卫国家。</p>`,
`<h2><i>奥丽莎</i></h2>
<p>维护努巴尼秩序并保护努巴尼人民的维和机器人。</p>`,
`<h2><i>莱因哈特</i></h2>
<p>一名属于过去的勇士，时刻铭记着骑士的信条：无畏、公正、勇敢。</p>`,
`<h2><i>路霸</i></h2>
<p>一名残暴的杀手，因残忍和肆意破坏而臭名昭著。</p>`,
`<h2><i>温斯顿</i></h2>
<p>一只经过基因改造，拥有高等智慧的大猩猩，也是一位出色的科学家和代表着人类潜力的勇士。</p>`,
`<h2><i>查莉娅</i></h2>
<p>世界上最强壮的女性之一。为了保卫祖国，毅然放弃了个人荣誉。</p>`,
`<h2><i>破坏球</i></h2>
<p>驾驶这台滚动式坦克的是一只经过基因改造的仓鼠，他来自月球基地。</p>`,
`<h2><i>巴蒂斯特</i></h2>
<p>一位配备了新型治疗设备的精英战地医疗兵。</p>`,
`<h2><i>艾什</i></h2>
<p>肆虐美国西南部、臭名昭著的死局帮的首脑。</p>`,
`<h2><i>堡垒</i></h2>
<p>一名可以切换形态的机器人，为自然着迷而探索世界，同时也对人类保持着戒心。</p>`
] 
for(var i=0;i<li.length;i++){
    lunbo(i)
}

function lunbo(i){
    li[i].onmouseover = function(){
        for(let i=0;i<str.length;i++){
         }
        bigimg.src = this.dataset.src;
        description.innerHTML=str[i];
    }
}






