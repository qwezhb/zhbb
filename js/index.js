 $(document).ready(function(){
 	$(".globalcontent dd").hide();
    $(".globalcontent dt").click(function(){
        $(this).next().slideToggle();
        $(this).prevAll("dd").slideUp("slow");
        $(this).next().nextAll("dd").slideUp("slow");
        return false;
    });
});


/*切换按钮js*/
$(function(){
	$('.main_js b').click(function(){
    $('.main_layer_zz').fadeIn(1000);
    $('.main_layer').show();
    $('body').css('overflow','hidden');
	var mobilewidth=screen.width;//获取手机屏幕的可视宽度
    var mobileheight=screen.height;//获取屏幕的可是高度
    var layerwidth=$('.main_layer').width();//获取弹层的宽度 
    var layerheight=$('.main_layer').height();//获取弹层的高度
    var sjw=(mobilewidth-layerwidth)/2;
    var sjh=(mobileheight-layerheight)/2;
   $('.main_layer').css({'left':sjw+"px",'top':sjh+"px"});//是弹层放在屏幕正中间
	})
	
})
/*取消切换*/
$('.del,.main_layer_top i').click(function(){
	$('.main_layer_zz').fadeOut(1000);
    $('.main_layer').hide();
    $('body').css('overflow','auto');
})

/*将切换的用户名赋值到页面上*/
$('.layer_content li').on('click','a',function(){
	var username=$(this).text();//获取角色名称
	$('.main_js strong').html(username);
	$('.del').click();
})
/*打开目录*/
$('.menulogo').click(function(){
	$('.globalcontent').show();
})
/*点击其中一个子目录，目录自动消失*/
$('.globalcontent dl').on('click','dd',function(){
	$('.globalcontent').hide();
})


//安全中心
/*弹框*/
		function getinfo()
		{
			layer.alert('当前资料来源于师训平台，请到师训平台修改！', {
        icon: 0,
        skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
        })
		$('.layui-layer-dialog').css("width","5.5rem");
		$('.layui-layer-btn0').css("width","0.5rem");
	   var mobilewidth=screen.width;//获取手机屏幕的可视宽度
       var mobileheight=screen.height;//获取屏幕的可是高度
       var layerwidth=$('.layer-ext-moon').width();//获取弹层的宽度 
       var layerheight=$('.layer-ext-moon').height();//获取弹层的高度
       var sjwidth=(mobilewidth-layerwidth)/2;
       var sjheight=(mobileheight-layerheight)/2;
        $('.layer-ext-moon').css({'left':sjwidth+"px",'top':sjheight+"px"});//是弹层放在屏幕正中间
		}