/**
 * Created by Administrator on 2016/8/6.
 */
$(function () {
    //导航部分
    $('.nav-menu').mouseenter(function () {
        $('#slide-menu').slideDown(500);
    })
    $('.nav-menu').mouseleave(function () {
        $('#slide-menu').slideUp(500);
    })
    var menu=$('.nav-menu li');
    menu.hover(
        function(){
            moveTo=$(this).index()*13;
            $('#slide-menu .menu-center').stop().animate({'marginTop' : '-'+moveTo+'em' });
        }
    );
    //banner部分
    var banner= function () {
        var index=1;
        var len=$('#banner .list li').length;
        var timer;
        for(var i=0;i<len;i++){
            var btns=$('<li></li>').appendTo($('#banner .banner-btn'));
        }
        $('#banner .banner-btn li').eq(0).addClass('current');
        $('#banner .banner-btn li').mouseenter(function(){
            index = $("#banner .banner-btn li").index(this);
            show(index);
        })
        timer=setInterval(function(){
            show(index);
            index++;
            if(index==len){
                index=0;
            }
        },5000)
        function show(index){
            $('#banner .banner-btn li').eq(index).addClass('current').siblings('li').removeClass('current');
            $('#banner .list li').eq(index).fadeIn(900).siblings('li').fadeOut(600);
        }
    }
    banner();

    //canvas动画
    (function(){
        var stage = new Konva.Stage({
            container: 'container',
            width: window.innerWidth,
            height: window.innerHeight
        });
        var groupX = stage.width() / 2,
            groupY = stage.height() / 2,
            L3_Radius = 240,
            L2_Radius = 140,
            L1_Radius = 90,
            L0_Radius = 66;

        var bgLayer = new Konva.Layer({
            hitGraphEnabled : false
        });
        var circle_L3 = new Konva.Circle({
            x: groupX,
            y: groupY,
            radius: L3_Radius,
            stroke: '#a0a0a0',
            stokeWidth: 2,
            opacity: .8,
            dash: [10,4]
        });
        bgLayer.add(circle_L3);

        var circle_L2 = new Konva.Circle({
            x: groupX,
            y: groupY,
            radius: L2_Radius,
            stroke: '#2A3466',
            stokeWidth: 2,
            opacity: .8,
            dash: [10,4]
        });
        bgLayer.add(circle_L2);

        var cneterCircleText = new CircleText({
            text: "APP",
            innerRadius: L0_Radius,
            outerRadius: L1_Radius,
            fontSize: 20,
            fontFamily: '微软雅黑',
            fontFill: "#fff",
            fontX: -21,
            fontY: -8,
            x: groupX,
            y: groupY,
            innerFill: "#2A3466",
            outerFill: "#ddd",
            opacity: .8
        });
        var centerGroup = cneterCircleText.createCircleText();
        bgLayer.add(centerGroup);

        stage.add(bgLayer);

        var layer = new Konva.Layer({
        });
        stage.add(layer);

        var group = new Konva.Group({
            x: groupX,
            y: groupY,
            rotation: 0
        });

        var L3CircleData = [{
            text: "人性化",
            innerRadius: 40,
            outerRadius: 50,
            fontSize: 16,
            fontFamily: '微软雅黑',
            fontFill: "#fff",
            fontX: -24,
            fontY: -8,
            x: L3_Radius,
            y: 0,
            x: (Math.cos(20 * Math.PI / 180) * L3_Radius),
            y: (Math.sin(20 * Math.PI / 180) * L3_Radius),
            innerFill: "#CF2782",
            outerFill: "#ddd",
            opacity: .7
        },{
            text: "服务理念",
            innerRadius: 40,
            outerRadius: 50,
            fontSize: 16	,
            fontFamily: '微软雅黑',
            fontFill: "purple",
            fontX: -28,
            fontY: -7,
            x: 0,
            y: L3_Radius,
            innerFill: "#7CB9CE",
            outerFill: "#ddd",
            opacity: .7
        },{
            text: "设计理念",
            innerRadius: 40,
            outerRadius: 50,
            fontSize: 16	,
            fontFamily: '微软雅黑',
            fontFill: "purple",
            fontX: -30	,
            fontY: -7,
            x: -L3_Radius,
            y: 0,
            innerFill: "#68AAFC",
            outerFill: "#ddd",
            opacity: .7
        },{
            text: "用户需求",
            innerRadius: 40,
            outerRadius: 50,
            fontSize: 16	,
            fontFamily: '微软雅黑',
            fontFill: "purple",
            fontX: -30	,
            fontY: -7,
            x: (Math.cos(-115 * Math.PI / 180) * L3_Radius),
            y: (Math.sin(-115 * Math.PI / 180) * L3_Radius),
            innerFill: "yellow",
            outerFill: "#ddd",
            opacity: .7
        },{
            text: "量身定做",
            innerRadius: 40,
            outerRadius: 50,
            fontSize: 16	,
            fontFamily: '微软雅黑',
            fontFill: "purple",
            fontX: -30	,
            fontY: -7,
            x: (Math.cos(-45 * Math.PI / 180) * L3_Radius),
            y: (Math.sin(-45 * Math.PI / 180) * L3_Radius),
            innerFill: "green",
            outerFill: "#ddd",
            opacity: .7
        }];

        for( var i = 0; i < L3CircleData.length; i++ ) {
            var tempCircleText = new CircleText(L3CircleData[i]);
            var circleTextGroup = tempCircleText.createCircleText();
            group.add(circleTextGroup);
        }

        layer.add(group);

        var groupL2 = new Konva.Group({
            x: groupX,
            y: groupY,
            rotation: 0
        });

        var zeptoJSCircleText = new CircleText({
            text: "视觉",
            innerRadius: 30,
            outerRadius: 40,
            fontSize: 14	,
            fontFamily: '微软雅黑',
            fontFill: "blue",
            fontX: -15	,
            fontY: -7,
            x: (Math.cos(-75 * Math.PI / 180) * L2_Radius),
            y: (Math.sin(-75 * Math.PI / 180) * L2_Radius),
            innerFill: "orange",
            outerFill: "#ddd",
            opacity: .7
        });
        var groupZepto = zeptoJSCircleText.createCircleText();
        groupL2.add(groupZepto);


        var CSS3CircleText = new CircleText({
            text: "设计",
            innerRadius: 30,
            outerRadius: 40,
            fontSize: 14	,
            fontFamily: '微软雅黑',
            fontFill: "blue",
            fontX: -15	,
            fontY: -7,
            x: (Math.cos(105 * Math.PI / 180) * L2_Radius),
            y: (Math.sin(105 * Math.PI / 180) * L2_Radius),
            innerFill: "pink",
            outerFill: "#ddd",
            opacity: .7
        });
        var groupC3 = CSS3CircleText.createCircleText();
        groupL2.add(groupC3);

        layer.add(groupL2);

        layer.batchDraw();

        var angularSpeed = 60;
        var anim = new Konva.Animation(function(frame) {
            console.log(frame.timeDiff);
            var angleDiff = frame.timeDiff * angularSpeed / 1000;
            group.rotate(angleDiff);
            //
            group.getChildren().each(function(value, index){
                value.rotate(-angleDiff)
            });
            groupL2.rotate(-angleDiff);
            groupL2.getChildren().each(function(value, index){
                value.rotate(angleDiff)
            });

        }, layer);
        anim.start();


        group.on('mouseover touchstart',function(e){
            angularSpeed = 10;
        });

        group.on('mouseleave touchend',function(e){
            angularSpeed = 60;
        });
    })();

    function CircleText(option) {

        option = option || {};
        option.text = option.text || "canvas";
        option.innerRadius = option.innerRadius || 40;
        option.outerRadius = option.outerRadius || 60;
        option.fontSize =  option.fontSize || 14;
        option.fontWeight = option.fontWeight || "bold";
        option.fontFamily = option.fontFamily || '微软雅黑';
        option.fontFill = option.fontFill || "#FFF";
        option.fontX = option.fontX ||-20;
        option.fontY = option.fontY ||-7;
        option.x = option.x === 0 ? 0 : option.x || 217;
        option.y = option.y === 0 ? 0 : option.y || 217;
        option.innerFill = option.innerFill || "teal";
        option.outerFill = option.outerFill || "#ddd";
        option.opacity = option.opacity || .5;

        this.createCircleText = function() {
            var group = new Konva.Group({
                x: option.x,
                y: option.y,
                rotation: 0
            });


            var innerCircle = new Konva.Circle({
                x: 0,
                y: 0,
                radius: option.innerRadius,
                fill: option.innerFill,
                opacity: option.opacity,
                perfectDrawEnabled : false
            });
            group.add(innerCircle);

            var outerRing = new Konva.Ring({
                x: 0,
                y: 0,
                innerRadius: option.innerRadius,
                outerRadius: option.outerRadius,
                fill: option.outerFill,
                opacity: option.opacity,
                perfectDrawEnabled: false

            });

            group.add(outerRing);

            var text = new Konva.Text({
                text: option.text,
                fontSize: option.fontSize,
                fontFamily: option.fontFamily,
                fontStyle: 'bold',
                fill: option.fontFill,
                x: option.fontX,
                y: option.fontY,
                align: 'left'
            });
            group.add(text);
            return group;
        }
    }
})
