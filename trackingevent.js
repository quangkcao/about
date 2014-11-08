var links = document.getElementsByTagName('a')
for(var i=0;i<links.length;i++){
	links[i].onclick = function(){
		var click= this.getAttribute('name') + ' Click'
		var label = this.getAttribute('name') + ' View'

		var cat = this.getAttribute('class');
		switch(cat){
			case 'event_social':
				cat= 'Social Profile';
				break;
			case 'event_com':
				cat= 'Company';
				break;
			default:
				break;
		}
		ga('send', 'event', cat, click, label)
	}
}