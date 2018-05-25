(function(){
  //   var menu=[
  //     {
  //         icon: 'el-icon-setting',
  //         index: 'dashboard',
  //         title: '系统首页'
  //     },
  //     {
  //         icon: 'el-icon-tickets',
  //         index: 'table',
  //         title: '基础表格'
  //     },
  //     {
  //         icon: 'el-icon-message',
  //         index: 'tabs',
  //         title: 'tab选项卡'
  //     },
  //     {
  //         icon: 'el-icon-date',
  //         index: '3',
  //         title: '表单相关',
  //         subs: [
  //             {
  //                 index: 'form',
  //                 title: '基本表单'
  //             },
  //             {
  //                 index: 'editor',
  //                 title: '富文本编辑器'
  //             },
  //             {
  //                 index: 'markdown',
  //                 title: 'markdown编辑器'
  //             },
  //             {
  //                 index: 'upload',
  //                 title: '文件上传'
  //             }
  //         ]
  //     },
  //     {
  //         icon: 'el-icon-star-on',
  //         index: 'charts',
  //         title: 'schart图表'
  //     },
  //     {
  //         icon: 'el-icon-rank',
  //         index: 'drag',
  //         title: '拖拽列表'
  //     },
  //     {
  //         icon: 'el-icon-warning',
  //         index: 'permission',
  //         title: '权限测试'
  //     },
  //     {
  //         icon: 'el-icon-error',
  //         index: '404',
  //         title: '404页面'
  //     }
  // ]
  var home={
    tabIndex:null
  }
  $(document).on('click',".orderList li",function(e){
    $(this).toggleClass('active').siblings().removeClass('active').find('.menu').slideUp(300);
    $(this).find('.menu').slideToggle(300);
    e.stopPropagation();
    var texts=$(this).data('text');
    console.log(texts,'kkkkkkkkkkkkkkkkk');
    var url=$(this).data('url');
    var li= $('<li class="tags-li"><a href="#" class="tags-li-title">'+texts+'</a><span class="glyphicon glyphicon-remove iconClose"></span></li>');
    var div=$('<div><iframe src="'+url+'" frameborder="0"></iframe></div>');
    if(texts!=undefined){
      $(".tabslist").append(li);
      $(".ifamecontainer").append(div);
      $('.content h4').text(texts);
      $(".tabslist>li:last-child").addClass('active').siblings().removeClass('active');
      $(".ifamecontainer>div:last-child").show().siblings().hide();  
    }
  })

  $(document).on('click',".tabslist>li a",function(e){
    e.stopPropagation(); 
    var  index=$(this).parent().index();
    var text=$(this).text();
         home.tabIndex=index;
    $(this).parent().addClass('active').siblings().removeClass('active');
    $(".ifamecontainer>div").eq(index).show().siblings().hide();
    $('.content h4').text(text);

  })
  $(document).on('click',".iconClose",function(e){
    e.stopPropagation();
    var len,texts;
    var li=$(this).parent('li');
    var index=li.index();
    li.remove();
    $(".ifamecontainer>div").eq(index).remove();
    texts=$(".tabslist>li:last-child").find('a').text();
    $('.content h4').text(texts);
    $(".tabslist>li:last-child").addClass('active').siblings().removeClass('active');
    $(".ifamecontainer>div:last-child").show().siblings().hide();  
  })







})()