!function(a,b){"use strict";var c,d,e,f="._tap",g="._tapActive",h="tap",i=10,j=400,k="clientX clientY screenX screenY pageX pageY".split(" "),l={count:0,event:0},m=function(a,c){var d=c.originalEvent,e=b.Event(d);e.type=a;for(var f=0,g=k.length;g>f;f++)e[k[f]]=c[k[f]];return e},n=function(a){if(a.isTrigger)return!1;var b=l.event,c=Math.abs(a.pageX-b.pageX),d=Math.abs(a.pageY-b.pageY),e=Math.max(c,d);return a.timeStamp-b.timeStamp<j&&i>e&&(!b.touches||1===l.count)&&q.isTracking},o=function(a){if(!e)return!1;var b=Math.abs(a.pageX-e.pageX),c=Math.abs(a.pageY-e.pageY),d=Math.max(b,c);return Math.abs(a.timeStamp-e.timeStamp)<750&&i>d},p=function(a){if(0===a.type.indexOf("touch")){a.touches=a.originalEvent.changedTouches;for(var b=a.touches[0],c=0,d=k.length;d>c;c++)a[k[c]]=b[k[c]]}a.timeStamp=Date.now?Date.now():+new Date},q={isEnabled:!1,isTracking:!1,enable:function(){q.isEnabled||(q.isEnabled=!0,c=b(a.body).on("touchstart"+f,q.onStart).on("mousedown"+f,q.onStart).on("click"+f,q.onClick))},disable:function(){q.isEnabled&&(q.isEnabled=!1,c.off(f))},onStart:function(a){a.isTrigger||(p(a),a.touches&&(l.count=a.touches.length),q.isTracking||(a.touches||!o(a))&&(q.isTracking=!0,l.event=a,a.touches?(e=a,c.on("touchend"+f+g,q.onEnd).on("touchcancel"+f+g,q.onCancel)):c.on("mouseup"+f+g,q.onEnd)))},onEnd:function(a){var c;a.isTrigger||(p(a),n(a)&&(c=m(h,a),d=c,b(l.event.target).trigger(c)),q.onCancel(a))},onCancel:function(a){a&&"touchcancel"===a.type&&a.preventDefault(),q.isTracking=!1,c.off(g)},onClick:function(a){return!a.isTrigger&&d&&d.isDefaultPrevented()&&d.target===a.target&&d.pageX===a.pageX&&d.pageY===a.pageY&&a.timeStamp-d.timeStamp<750?(d=null,!1):void 0}};b(a).ready(q.enable)}(document,jQuery);



    var mySwiper = new Swiper('.index-banner',{
        pagination: '.index-pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        onSlideChangeEnd : function() {
            var bannerTitle = $(".index-banner ul li.swiper-slide-active img").attr("title");
            $(".banner-title p").text(bannerTitle);
        }
    });

    function fjcHeight(){
        $(".proportion").each(function(i,n){
                var FjcHeight=$(this).attr("F");
                var nowWidth=$(this).width();
                var thisHeight=nowWidth*parseFloat(FjcHeight);
                $(this).css("height",thisHeight+"px");
        });     
    }

    $(window).resize(function(){
        fjcHeight();
    });
    fjcHeight();

    var bannerFstTitle = $(".index-banner ul li.swiper-slide-active img").attr("title");
    $(".banner-title p").text(bannerFstTitle);
    
    $(".index-banner img").show();


    $(".JS-show-share").click(function(){
        $('#JS-share-page').show();
    });

    $("body").on('click', '.lyclose, .lycancel', function(){
        $(this).parents('.m-layer').hide();
    });

    $("#JS-show-game-categories").click(function(){
        $("#JS-game-categories").toggle();
    });
