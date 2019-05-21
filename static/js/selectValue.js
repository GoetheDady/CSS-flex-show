function SelectValue() {
  this.html = $(`
    <script type="text/template">
      <div class="controller">
        .box{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;<label for="flexDirection">flex-direction:&nbsp;&nbsp;</label>
        <select name="flexDirection" id="flexDirection">
          <option value="row">row</option>
          <option value="row-reverse">row-reverse</option>
          <option value="column">column</option>
          <option value="column-reverse">column-reverse</option>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<label for="flexWrap">flex-wrap:&nbsp;&nbsp;</label>
        <select name="flexWrap" id="flexWrap">
          <option value="nowrap">nowrap</option>
          <option value="wrap">wrap</option>
          <option value="wrap-reverse">wrap-reverse</option>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<label for="justifyContent">justify-content:&nbsp;&nbsp;</label>
        <select name="justifyContent" id="justifyContent">
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<label for="alignItems">align-items:&nbsp;&nbsp;</label>
        <select name="alignItems" id="alignItems">
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="baseline">baseline</option>
        </select><br>
        &nbsp;&nbsp;&nbsp;&nbsp;<label for="alignContent">align-content:&nbsp;&nbsp;</label>
        <select name="alignContent" id="alignContent">
          <option value="stretch">stretch</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
          <option value="center">center</option>
          <option value="space-between">space-between</option>
          <option value="space-around">space-around</option>
        </select><br>
      }
      </div>
    </script>
  `);
  this.render();
  this.bindEvent();
};

SelectValue.prototype.render = function () {
  $('.left').append(_.template(this.html.html())());
};

SelectValue.prototype.setCSS = function () {
  $('.box').css(codeShow.boxCSS);
}

SelectValue.prototype.bindEvent = function () {
  var _this = this;
  $('select').change(function () {
    _this.getSelectValue($(this).attr('id'), $(this).val());
    _this.setCSS();
  })
}

SelectValue.prototype.getSelectValue = function (key, value) {
  codeShow.boxCSS[key] = value;
  codeShow.render();
}