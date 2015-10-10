require.config({
  baseUrl: "js",
  paths: {
    jquery: 'base/jquery-1.11.2.min',
    top: "mods/top",
    load: "mods/load",
    more: "mods/more"
  },
  shim: {
    "jquery":{
      exports : "$"
    }
  }
});

require(["jquery","top","load","more"],function($,top,load,more){
  var a= new top.top();
  var load=new load.load();
  load.subSomething();
  load.week();
  var more=new more.more();
});
