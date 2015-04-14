Package.describe({
  name: 'orionjs:epic',
  summary: 'Epic editor for orion',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'orionjs:core@0.7.0',
    'meteor-platform',
    'less',
    'aldeed:autoform@5.1.1', 
    'd4nyll:epic@1.2.0',
    'jquery@1.0.0'
    ]);

  api.imply([
    'd4nyll:epic',
    'markdown'
    ]);

  api.addFiles([
    'lib/attribute.js',
    ]);

  api.addFiles([
    'lib/template/template.html',
    'lib/template/template.js',
    'lib/template/template.less',
    ], 'client');
});