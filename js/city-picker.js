(function ($) {
  'use strict';

  $.fn.cityPicker = function (params) {


    var raw = params.rawCitiesData || $.smConfig.rawCitiesData;

    var format = function (data) {
      var result = [];
      for (var i = 0; i < data.length; i++) {
        var d = data[i];
        //滚轮不需要判断是否添加请选择，先注释
        //if (d.name === '请选择') continue;
        result.push(d.n);
      }
      if (result.length) return result;
      return [''];
    };

    var sub = function (data) {
      if (!data.s) return [''];
      return format(data.s);
    };

    var getCities = function (d) {
      for (var i = 0; i < raw.length; i++) {
        if (raw[i].n === d)
          return sub(raw[i]);
      }
      return [''];
    };

    var getDistricts = function (p, c) {
      for (var i = 0; i < raw.length; i++) {
        if (raw[i].n === p) {
          for (var j = 0; j < raw[i].s.length; j++) {
            if (raw[i].s[j].n === c) {
              return sub(raw[i].s[j]);
            }
          }
        }
      }
      return [''];
    };

    // 获取城市代码
    var getCode = function (p, c, d) {
      var result = [];
      for (var i = 0; i < raw.length; i++) {
        if (raw[i].n === p) {
          result.push(raw[i].c);
          for (var j = 0; j < raw[i].s.length; j++) {
            if (raw[i].s[j].n === c) {
              result.push(raw[i].s[j].c);
              for (var k = 0; k < raw[i].s[j].s.length; k++) {
                if (raw[i].s[j].s[k].n === d) {
                  result.push(raw[i].s[j].s[k].c);
                }
              }
            }
          }
        }
      }
      if (result.length) return result;
      return [''];
    };

    var provinces = raw.map(function (d) {
      return d.n;
    });

    var initCities = sub(raw[0]);

    var initDistricts = getDistricts(provinces[0], initCities[0]);

    var currentProvince = provinces[0];
    var currentCity = initCities[0];
    var currentDistrict = initDistricts[0];

    var t;
    var defaults = {

      cssClass: 'city-picker',
      rotateEffect: false,  //为了性能
      code: false,

      onChange: function (picker, values, displayValues) {
        var newProvince = picker.cols[0].value;
        var newCity;
        if (newProvince !== currentProvince) {
          // 如果Province变化，节流以提高reRender性能
          clearTimeout(t);

          t = setTimeout(function () {
            var newCities = getCities(newProvince);
            newCity = newCities[0];
            var newDistricts = getDistricts(newProvince, newCity);
            picker.cols[1].replaceValues(newCities);
            picker.cols[2].replaceValues(newDistricts);
            currentProvince = newProvince;
            currentCity = newCity;
            picker.updateValue();
            if(typeof this.onChangeComplete === 'function')
              this.onChangeComplete(picker);
          }, 300);
          return;
        }
        newCity = picker.cols[1].value;
        if (newCity !== currentCity) {
          picker.cols[2].replaceValues(getDistricts(newProvince, newCity));
          currentCity = newCity;
          picker.updateValue();

        }
        if(typeof this.onChangeComplete === 'function')
          this.onChangeComplete(picker);
      },


      // 获取城市代码
      getCode: function (picker) {
        var result = [''];
        if (picker.params.code && picker.value)
          return getCode(picker.value[0], picker.value[1], picker.value[2]);
        return result;
      },

      // 格式化数据
      getFormat: function (picker, data) {
        return picker.params.formatValue ? picker.params.formatValue(picker, data, picker.displayValue) : data.join(' ');
      },

      cols: [
        {
          textAlign: 'center',
          values: provinces,
          cssClass: 'col-province'
        },
        {
          textAlign: 'center',
          values: initCities,
          cssClass: 'col-city'
        },
        {
          textAlign: 'center',
          values: initDistricts,
          cssClass: 'col-district'
        }
      ]
    };

    return this.each(function () {
      if (!this) return;

      var p = $.extend(defaults, params);

      //计算value
      if (p.value) {
        $(this).val(p.value.join(' '));
      } else {
        var val = $(this).val();
        if (val)
          p.value = val.split(' ');
      }

      if (p.value) {
        //p.value = val.split(' ');
        if (p.value[0]) {
          currentProvince = p.value[0];
          p.cols[1].values = getCities(p.value[0]);
        }
        if (p.value[1]) {
          currentCity = p.value[1];
          p.cols[2].values = getDistricts(p.value[0], p.value[1]);
        } else {
          p.cols[2].values = getDistricts(p.value[0], p.cols[1].values[0]);
        }
        if (!p.value[2])
          p.value[2] = '';
        currentDistrict = p.value[2];
      }
      $(this).picker(p);
    });
  };

})(jQuery);
