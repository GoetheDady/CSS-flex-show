function CodeShow() {
  this.html = $(`
  <script type="text/template" class="code-show-html">
    <pre class="code-pre">
.box {
  display: flex;
  flex-direction: <%- boxCSS.flexDirection %>;
  flex-wrap: <%- boxCSS.flexWrap %>;
  justify-content: <%- boxCSS.justifyContent %>;
  align-items: <%- boxCSS.alignItems %>;
  align-content: <%- boxCSS.alignContent %>;
}
.item:nth-child(<%- itemCSS.index %>) {
  order: <%- itemCSS.defaultValue.order %>,
  flex-grow: <%- itemCSS.defaultValue.flexGrow %>,
  flex-shrink: <%- itemCSS.defaultValue.flexShrink %>,
  flex-basis: <%- itemCSS.defaultValue.flexBasis %>,
  align-self: <%- itemCSS.defaultValue.alignSelf %>,
}
    </pre>
  </script>`);
  this.boxCSS = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    alignContent: 'stretch',
  };
  this.render();
}

CodeShow.prototype.render = function(itemCSS) {
  var itemCSS = itemCSS || {};
  var _this = this;
  var data = {
    boxCSS: {
      ..._this.boxCSS
    },
    itemCSS: {
      defaultValue: {
        ...itemCSS.defaultValue
      },
      index: itemCSS.index
    }
  }
  $(".code-pre").remove();
  $('.left').prepend(_.template(_this.html.html())(data));
}
