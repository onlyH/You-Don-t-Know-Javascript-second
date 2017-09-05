
// 动态
(function($){
	var PageSwitch=(function(){
		function PageSwitch(element,options){
			this.settins=$.$.extend(true, $.fn.PageSwitch.default,options||{});
			this.element=element;
			this.init();
			
		}
		PageSwitch.prototype={
			init:function(){

			}
		}
		return PageSwitch;
	})();
	
 $.fn.PageSwitch=function(options){
 	return this.each(function(){
 		var me=$(this),
 		instance=me.date("PageSwitch");
 		if(!instance){
 			instance=new PageSwitch(me, options);
 			me.date("PageSwitch",instance);
 		}
 		if ($.type(options)==="string") return instance[options]();
 		$("div").PageSwitch("init");
 	});

 }
 $.fn.PageSwitch.default={
 	selectors:{
 		sections:".section_group",
 		section:".section",
 		page : ".pages"
 		active : ".active"
 },
       index:0,
       easing:"ease",
       duration:500,
       loop:false,
       pagination:true,
       keyboard:true,
       direction:"vertical",
       callback:""
   }

})(jQuery);
