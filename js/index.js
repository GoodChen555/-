$(function () {
  // 1 设置索引.设置第一张图片为默认显示
  let index = 0;
  $('.idx-banner>ul>li').eq(index).fadeIn(1000)

  // 2 右边按钮的设置
  $('#next').click(function () {
    index++;
    if (index == $('.idx-banner>ul>li').length) {
      index = 0
    }
    // 2-1 当前图片显示,其他图片隐藏
    $('.idx-banner>ul>li').eq(index).fadeIn(1000).siblings().fadeOut(1000)
  });

  // 3 左边按钮的设置
  $('#prev').click(function () {
    index--;
    if (index < 0) {
      index = $('.idx-banner>ul>li').length - 1
    }
    // 3-1 当前图片显示,其他图片隐藏
    $('.idx-banner>ul>li').eq(index).fadeIn(1000).siblings().fadeOut(1000)
  });

  // 设置定时器自动播放
  let times = setInterval(function () {
    $('#next').click();
  }, 3000)

  // 给slider绑定鼠标移入和移出事件
  $('.idx-banner').mouseenter(function () {
    clearInterval(times);
  });

  $('.idx-banner').mouseleave(function () {
    times = setInterval(function () {
      $('#next').click();
    }, 3000)
  });
})