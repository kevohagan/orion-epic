Template.orionAttributesEpic.rendered = function () {
    var key = this.data.name;
    var parent = $('[data-schema-key="' + key + '"]')
    // Find the element
    var element = parent.find('#epicEditor');

    // Epic.create('#epicEditor', {})
};

Template.orionAttributesEpicColumn.helpers({
    preview: function () {
        var value = this.value;
        var tmp = document.createElement("DIV");
        var content = value.replace(/<(?:.|\n)*?>/gm, ' ');
        if(content.length > 50) content = content.substring(0, 47).trim() + '...';
        return content;
    }
});