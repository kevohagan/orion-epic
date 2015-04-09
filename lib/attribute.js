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
  }
});