function PageShow() {
  this.html = $(`
    <script type="text/template">
      <div class="btnWrapper">
        <button type="button" class="btn btn-primary add">添加节点</button>
        <button type="button" class="btn btn-danger delete">删除节点</button>
      </div>
      <div class="box" style="display: flex">
        <% _.forEach(items, function(item) { %>
          <div class="item"><%- item %></div>
        <% }); %>
      </div>
    </script>
  `);
  this.data = {
    items: []
  };
  this.render();
  this.bindEvent();
}

PageShow.prototype.render = function () {
  var _this = this;
  var rightNode = $('.right');
  rightNode.html('').append(_.template(_this.html.html())(_this.data))
}

PageShow.prototype.bindEvent = function () {
  var _this = this;
  $('.right').on('click', '.add', function () {
    _this.data.items.push(_this.data.items.length + 1);
    itemCode.pushItem(_this.data.items.length - 0);
    _this.render();
  }).on('click', '.delete', function () {
    if (_this.data.items.length !== 0) {
      _this.data.items.pop();
      itemCode.itemCSS.pop();
      $('.item-code').remove();
      itemCode.render();
      itemCode.bindEvent();
      _this.render();
    }
  }).on('click', '.item', function () {
    itemCode.setTargetItemCSS($(this).index())
    codeShow.render(itemCode.itemCSS[itemCode.editItemIndex])
  })
}
