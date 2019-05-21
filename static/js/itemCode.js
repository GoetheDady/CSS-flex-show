function ItemCode () {
  this.html = $(`
    <script type="text/template">
      <div class="item-code">
        .item:nth-child(<%- index %>) {<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<label for="order">order:&nbsp;&nbsp;</label>
          <input type="txt" name="order" id="order" value="<%- defaultValue.order %>"/><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<label for="flexGrow">flex-grow:&nbsp;&nbsp;</label>
          <input type="txt" name="flexGrow" id="flexGrow"  value="<%- defaultValue.flexGrow %>"/><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<label for="flexShrink">flex-shrink:&nbsp;&nbsp;</label>
          <input type="txt" name="flexShrink" id="flexShrink"  value="<%- defaultValue.flexShrink %>"/><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<label for="flexBasis">flex-basis:&nbsp;&nbsp;</label>
          <input type="txt" name="flexBasis" id="flexBasis"  value="<%- defaultValue.flexBasis %>"/><br>
          &nbsp;&nbsp;&nbsp;&nbsp;<label for="alignSelf">align-self:&nbsp;&nbsp;</label>
          <select name="alignSelf" id="alignSelf">
            <option value="auto" <%- defaultValue.alignSelf === 'auto' ? 'selected' : '' %> >auto</option>
            <option value="flex-start" <%- defaultValue.alignSelf === 'flex-start' ? 'selected' : '' %> >flex-start</option>
            <option value="flex-end" <%- defaultValue.alignSelf === 'flex-end' ? 'selected' : '' %> >flex-end</option>
            <option value="center" <%- defaultValue.alignSelf === 'center' ? 'selected' : '' %> >center</option>
            <option value="baseline" <%- defaultValue.alignSelf === 'baseline' ? 'selected' : '' %> >baseline</option>
            <option value="stretch" <%- defaultValue.alignSelf === 'stretch' ? 'selected' : '' %> >stretch</option>
          </select><br>
        }
      </div>
    </script>
  `);
  this.data = {
    defaultValue: {
      order: 0,
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'auto',
    },
    index: 'n',
  };
  this.editItemIndex = '';
  this.itemCSS = [];
  this.render();
  this.bindEvent();
}

ItemCode.prototype.render = function () {
  var _this = this;  
  _this.editItemIndex = '';
  $('.left').append(_.template(this.html.html())(_this.data));
}

ItemCode.prototype.pushItem = function (index) {
  var data = {
    index: index,
    defaultValue: {
      ...this.data.defaultValue
    }
  }
  this.itemCSS.push(data)
}

ItemCode.prototype.setTargetItemCSS = function (index) {
  var _this = this;
  _this.editItemIndex = index;
  $('.item-code').remove('');
  $('.left').append(_.template(this.html.html())(_this.itemCSS[index]));
  _this.bindEvent();
}

ItemCode.prototype.setIndexCSS = function (key, value) {
  var _this = this;
  _this.itemCSS[_this.editItemIndex].defaultValue[key] = value;
  $('.item').eq(_this.editItemIndex).css(_this.itemCSS[_this.editItemIndex].defaultValue)
}

ItemCode.prototype.resetItemCSS = function () {
  var _this = this;
  if (_this.itemCSS.length !== 0) {
    console.log(this.itemCSS)
    _.times(_this.itemCSS.length, function (index) {
      console.log(1)
      $('.item').eq(index + 1).css(_this.itemCSS[index].defaultValue)
    })
  }
}

ItemCode.prototype.bindEvent = function () {
  var _this = this;
  $('.item-code').on('input', 'input', function () {
    console.log(_this.editItemIndex)
    if (_this.editItemIndex !== '') {
      _this.setIndexCSS($(this).attr('id'), $(this).val());
      codeShow.render(_this.itemCSS[_this.editItemIndex])
    };
  }).on('change', '#alignSelf', function () {
    _this.setIndexCSS($(this).attr('id'), $(this).val())
    codeShow.render(_this.itemCSS[_this.editItemIndex])
  })
}
