$(function () {
  'use strict';
  var customCitiesData = [
    {
      c: '330000',
      n: '浙江省',
      s: [{
        c: '330100',
        n: '杭州市',
        s: [{c: '330102', n: '上城区'}, {c: '330103', n: '下城区'}, {c: '330104', n: '江干区'}, {
          c: '330105',
          n: '拱墅区'
        }, {c: '330106', n: '西湖区'}, {c: '330108', n: '滨江区'}, {c: '330109', n: '萧山区'}, { c: '330110',
          n: '余杭区'
        }, {c: '330183',
          n: '富阳区'
        }, {c: '330122', n: '桐庐县'}, {c: '330127', n: '淳安县'}, {c: '330182', n: '建德市'}, {c: '330185', n: '临安市'}]
      }, {
        c: '330200',
        n: '宁波市',
        s: [{c: '330203', n: '海曙区'}, {c: '330204', n: '江东区'}, {c: '330205', n: '江北区'}, {
          c: '330206',
          n: '北仑区'
        }, {c: '330211', n: '镇海区'}, {c: '330212', n: '鄞州区'}, {c: '330225', n: '象山县'}, {
          c: '330226',
          n: '宁海县'
        }, {c: '330281', n: '余姚市'}, {c: '330282', n: '慈溪市'}, {c: '330283', n: '奉化市'}]
      }, {
        c: '330300',
        n: '温州市',
        s: [{c: '330302', n: '鹿城区'}, {c: '330303', n: '龙湾区'}, {c: '330304', n: '瓯海区'}, {
          c: '330322',
          n: '洞头县'
        }, {c: '330324', n: '永嘉县'}, {c: '330326', n: '平阳县'}, {c: '330327', n: '苍南县'}, {
          c: '330328',
          n: '文成县'
        }, {c: '330329', n: '泰顺县'}, {c: '330381', n: '瑞安市'}, {c: '330382', n: '乐清市'}]
      }, {
        c: '330400',
        n: '嘉兴市',
        s: [{c: '330402', n: '南湖区'}, {c: '330411', n: '秀洲区'}, {c: '330421', n: '嘉善县'}, {
          c: '330424',
          n: '海盐县'
        }, {c: '330481', n: '海宁市'}, {c: '330482', n: '平湖市'}, {c: '330483', n: '桐乡市'}]
      }, {
        c: '330500',
        n: '湖州市',
        s: [{c: '330502', n: '吴兴区'}, {c: '330503', n: '南浔区'}, {c: '330521', n: '德清县'}, {
          c: '330522',
          n: '长兴县'
        }, {c: '330523', n: '安吉县'}]
      }, {
        c: '330600',
        n: '绍兴市',
        s: [{c: '330602', n: '越城区'}, {c: '330603', n: '柯桥区'}, {c: '330604', n: '上虞区'}, {
          c: '330624',
          n: '新昌县'
        }, {c: '330681', n: '诸暨市'}, {c: '330683', n: '嵊州市'}]
      }, {
        c: '330700',
        n: '金华市',
        s: [{c: '330702', n: '婺城区'}, {c: '330703', n: '金东区'}, {c: '330723', n: '武义县'}, {
          c: '330726',
          n: '浦江县'
        }, {c: '330727', n: '磐安县'}, {c: '330781', n: '兰溪市'}, {c: '330782', n: '义乌市'}, {
          c: '330783',
          n: '东阳市'
        }, {c: '330784', n: '永康市'}]
      }, {
        c: '330800',
        n: '衢州市',
        s: [{c: '330802', n: '柯城区'}, {c: '330803', n: '衢江区'}, {c: '330822', n: '常山县'}, {
          c: '330824',
          n: '开化县'
        }, {c: '330825', n: '龙游县'}, {c: '330881', n: '江山市'}]
      }, {
        c: '330900',
        n: '舟山市',
        s: [{c: '330902', n: '定海区'}, {c: '330903', n: '普陀区'}, {c: '330921', n: '岱山县'}, {
          c: '330922',
          n: '嵊泗县'
        }]
      }, {
        c: '331000',
        n: '台州市',
        s: [{c: '331002', n: '椒江区'}, {c: '331003', n: '黄岩区'}, {c: '331004', n: '路桥区'}, {
          c: '331021',
          n: '玉环县'
        }, {c: '331022', n: '三门县'}, {c: '331023', n: '天台县'}, {c: '331024', n: '仙居县'}, {
          c: '331081',
          n: '温岭市'
        }, {c: '331082', n: '临海市'}]
      }, {
        c: '331100',
        n: '丽水市',
        s: [{c: '331102', n: '莲都区'}, {c: '331121', n: '青田县'}, {c: '331122', n: '缙云县'}, {
          c: '331123',
          n: '遂昌县'
        }, {c: '331124', n: '松阳县'}, {c: '331125', n: '云和县'}, {c: '331126', n: '庆元县'}, {
          c: '331127',
          n: '景宁县'
        }, {c: '331181', n: '龙泉市'}]
      }]
    }];
  $(document).on("pageInit", "#page-ptr", function(e, id, page) {
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 2s timeout
      setTimeout(function() {
        var cardHTML = '<div class="card">' +
          '<div class="card-header">Title</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">Contents Contents Contents Contents Contents Contents Contents Contents Contents ' +
          '</div>' +
          '</div>' +
          '</div>';

        $content.find('.card-container').prepend(cardHTML);
        // Done
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });

  $(document).on('pageInit', '#page-city-picker', function(e, id, page) {

    var citypicker = $(page).find('#city-picker').cityPicker({
      code: true,
      onChangeComplete: function(picker) {
        var code = this.getCode(picker);
        var value = [];
        if(picker.value.length === 3) {
          value.push(picker.value[1]);
          value.push(picker.value[2]);
        } else {
          value = picker.value;
        }

        /*$('#city-picker-code').val(picker.params.getFormat(picker, code));*/
        $('#city-picker-value').val(value.join(' '));
      },
      rawCitiesData: customCitiesData
    });
    $(page).find('#city-picker-value').click(function(event){
      event.preventDefault();
      citypicker.trigger('click');
    });
  });


  $(document).on("pageInit", "#page-ptr-tabs", function(e, id, page) {
    $(page).find(".pull-to-refresh-content").on('refresh', function(e) {
      // 2s timeout
      var $this = $(this);
      setTimeout(function() {

        $this.find('.content-block').prepend("<p>New Content......</p>");
        // Done
        $.pullToRefreshDone($this);
      }, 2000);
    });
    $(page).find(".infinite-scroll").on('infinite', function(e) {
      // 2s timeout
      var $this = $(this);
      if($this.data("loading")) return;
      $this.data("loading", 1);
      setTimeout(function() {
        $this.find('.content-block').append("<p>New Content......</p><p>New Content......</p><p>New Content......</p>");
        $this.data("loading", 0);
      }, 2000);
    });
  });

  $(document).on("pageInit", "#page-infinite-scroll", function(e, id, page) {
    function addItems(number, lastIndex) {
      var html = '';
      for (var i = 0; i < 20; i++) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">Item</div></div></li>';
      }
      $('.infinite-scroll .list-container').append(html);
    }
    var loading = false;
    $(page).on('infinite', function() {

      if (loading) return;

      loading = true;

      setTimeout(function() {
        loading = false;

        addItems();
      }, 1000);
    });
  });


  $(document).on("pageInit", "#page-photo-browser", function(e, id, page) {
    var myPhotoBrowserStandalone = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ]
    });
    $(page).on('click','.pb-standalone',function () {
      myPhotoBrowserStandalone.open();
    });
    /*=== Popup ===*/
    var myPhotoBrowserPopup = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ],
      type: 'popup'
    });
    $(page).on('click','.pb-popup',function () {
      myPhotoBrowserPopup.open();
    });
    /*=== 有标题 ===*/
    var myPhotoBrowserCaptions = $.photoBrowser({
      photos : [
        {
          url: '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Caption 1 Text'
        },
        {
          url: '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Second Caption Text'
        },
        // 这个没有标题
        {
          url: '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
        },
      ],
      theme: 'dark',
      type: 'standalone'
    });
    $(page).on('click','.pb-standalone-captions',function () {
      myPhotoBrowserCaptions.open();
    });
  });
  

  //对话框
  $(document).on("pageInit", "#page-modal", function(e, id, page) {
    var $content = $(page).find('.content');
    $content.on('click','.alert-text',function () {
      $.alert('Hello Fool');
    });

    $content.on('click','.alert-text-title', function () {
      $.alert('Alter message', 'title!');
    });

    $content.on('click', '.alert-text-title-callback',function () {
      $.alert('Custom Alert message', 'custom alert title!', function () {
        $.alert('Yout clicked OK button!')
      });
    });
    $content.on('click','.confirm-ok', function () {
      $.confirm('Are you sure?', function () {
        $.alert('You clicked OK button!');
      });
    });
    $content.on('click','.prompt-ok', function () {
      $.prompt("What's your name?", function (value) {
        $.alert('Your name is "' + value + '"');
      });
    });
    $content.on('click','.show-toast', function () {
      $.toast("Toast");
    });
  });

  //操作表
  $(document).on("pageInit", "#page-action", function(e, id, page) {
    $(page).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: 'Please Choose',
          label: true
        },
        {
          text: 'Potato',
          bold: true,
          color: 'danger',
          onClick: function() {
            $.alert("You choosed Potato");
          }
        },
        {
          text: 'Tomato',
          color: "success",
          onClick: function() {
            $.alert("You choosed Tomato");
          }
        }
      ];
      var buttons2 = [
        {
          text: 'Cancel',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    }); 
  });

  $(document).on("pageInit", "#page-preloader", function(e, id, page) {
    $(page).on('click','.open-preloader-title', function () {
      $.showPreloader('Loading...')
      setTimeout(function () {
        $.hidePreloader();
      }, 2000);
    });
    $(page).on('click','.open-indicator', function () {
      $.showIndicator();
      setTimeout(function () {
        $.hideIndicator();
      }, 2000);
    });
  });


  $(document).on("click", ".select-color", function(e) {
    var b = $(e.target);
    document.body.className = "theme-" + (b.data("color") || "");
    b.parent().find(".active").removeClass("active");
    b.addClass("active");
  });

  //picker
  $(document).on("pageInit", "#page-picker", function(e, id, page) {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-left">\
      Btn\
      </button>\
      <button class="button button-link pull-right close-picker">\
      OK\
      </button>\
      <h1 class="title">Title</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }
      ]
    });
    $("#picker-name").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">Choose Name</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['Mr', 'Ms']
        },
        {
          textAlign: 'center',
          values: ['Amy', 'Bob', 'Cat', 'Dog', 'Ella', 'Fox', 'Google']
        }
      ]
    });
  });
  $(document).on("pageInit", "#page-datetime-picker", function(e) {
    $("#datetime-picker").datetimePicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">OK</button>\
      <h1 class="title">datetime</h1>\
      </header>'
    });
  });

  $(document).on("pageInit", "#page-city-picker", function(e, id, page) {
    var citypicker = $(page).find('#city-picker').cityPicker({
      code: true,
      onChangeComplete: function(picker) {
        var code = this.getCode(picker);
        var value = [];
        if(picker.value.length === 3) {
          value.push(picker.value[0]);
          value.push(picker.value[1]);
          value.push(picker.value[2]);
        } else {
          value = picker.value;
        }

        /*$('#city-picker-code').val(picker.params.getFormat(picker, code));*/
        $('#city-picker-value').val(value.join(' '));
      },
      rawCitiesData: customCitiesData,
      toolbarTemplate: '<header class="bar bar-nav">' +
      '<button class="button button-link pull-right close-picker">确定</button>' +
      '<h1 class="title">选择行驶城市</h1>' +
      '</header>'
    });
    $(page).find('#city-picker-value').click(function(event){
      event.preventDefault();
      citypicker.trigger('click');
    });
  });

  $(document).on("click", "#show-noti", function() {
    $.notification({
      title: "Baby",
      text: "I miss you",
      media: "<img src='/assets/img/i-wechat.png'>",
      data: "123",
      onClick: function(data) {
        $.alert("Click" + data);
      },
      onClose: function(data) {
        $.alert("Close "+data);
      }
    });
  });
  $(document).on("click", "#close-noti", function() {
    $.closeNotification();
  });

  $.init();
});
