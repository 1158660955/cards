/**
 * Created by Administrator on 2016/8/17 0017.
 */
(function () {

    var CAROUSEL_WIDTH=800;
    var CAROUSEL_HEIGHT=600;
    var SWITCH_IMAGE_ANIMATION_DURATION=500;//切换图片的动画效果的播放时长
    var carouselContent=document.querySelector
    ("#carousel .carousel-content");
    var imageIndex=0;//图片在数组中的位置
    var switchImageTimerId=-1;//由于切换图片的计时器
    var switchImageAnimationPlaying=false;//用于知识当前是否在切换图片

    /**
     * 把一个对象从某位置移动到目标位置
     * @param target 被移动的对象
     * @param fromX 开始left的位置
     * @param toX 结束点的left位置
     * @param fromY 开始点的top位置
     * @param toY 结束点的top位置
     * @param duration 动画效果总共花费的时间，单位毫秒
     * @param completeHandler 动画完成后的毁掉函数
     */
    function moveTo(target,fromX,toX,fromY,toY,duration,
    completeHandler) {

        var fps=50;//帧率
        var frameDuration=Math.round(1000/fps);//一帧所需要的时间
        var frames=Math.round(duration/1000*fps);//动画效果总共多少帧
        var frameIndex=0;
        var x=fromX,y=fromY;
        var speedX=(toX-fromX)/frames;
        var speedY=(toY-fromY)/frames;
        
        var id =setInterval(function () {

            x+=speedX;
            y+=speedY;
            frameIndex++;
            if (frameIndex>=frames){
                clearInterval(id);


            x+=toX;
            y+=toY;

              if (completeHandler){
                completeHandler(target);
              }
            }
            target.style.left=x+"px";
            target.style.top=y+"px";
        },frameDuration);
        
    }


})();