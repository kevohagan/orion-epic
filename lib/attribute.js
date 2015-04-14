orion.attributes.registerAttribute('epic', {
  template: 'orionAttributesEpic',
  columnTemplate: 'orionAttributesEpicColumn',
  getSchema: function(options) {
    return {
      type: String
    };
  },
  valueOut: function() {
    // return this.find('.epic').code();
    var markdown = document.querySelector('.epicarea').value;
    var converter = new Showdown.converter();
    console.log(HTML.Raw(converter.makeHtml(markdown)).value);
    return HTML.Raw(converter.makeHtml(markdown)).value
  }
});