'use strict';

/**
 * Definition,
 * The tags controller of HTML
 *
 * Documentation found here: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list
 */
tagsModApp.controller('TagsC', function TagsC($scope, $http) {
	
	/**
	 *https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes 
	 */
	$scope.globalAttributes = {
		accesskey : 'accesskey',
		'class' : 'class',
		contenteditable : 'contenteditable',
		contextmenu : 'contextmenu',
		dir : 'dir',
		draggable : 'draggable',
		dropzone : 'dropzone',
		hidden : 'hidden',
		id : 'id',
		itemid : 'itemid',
		itemprop : 'itemprop',
		itemref : 'itemref',
		itemscope : 'itemscope',
		itemtype : 'itemtype',
		lang : 'lang',
		spellcheck : 'spellcheck',
		style : 'style',
		tabindex : 'tabindex',
		title : 'title'
	}; 

	/**
	 * Define an html element
	 */
	$scope.defineElement = function (name,desc,elements,attributes,rules){
		return {
			name: name, //Name of html tag
			desc: desc, //Description of html tag
			elements: elements, //Names of allowed elements
			attributes: $scope.mergeAttributes(attributes), //Predetermined atributes
			rules: rules
		};
	};
	
	/**
	 *Merge specific with global attributes 
	 */
	$scope.mergeAttributes = function(attributes){
		//copy, prevents share object with other tags
		var globals = angular.copy($scope.globalAttributes);
		
		//Exclude other types
		if (typeof attributes === "object"){
			//Exclude embedded data
			for (var a in attributes){
				globals[a] = attributes[a];
			}
		}
		
		return globals;
	};
	
	/**
	 * Define the elements namespace. 
	 * Here add all the html elements. 
	 */
	$scope.elements = {};
	
	$scope.elements.html = $scope.defineElement('html','Root element',
		{
			head:'head',
			body: 'body'
		},
		{
			style:'style',
			manifest:'manifest'
		},
		'Only one html element it is allowed');
		
	$scope.elements.head = $scope.defineElement('head','',{
			tittle:'tittle',
			base: 'base',
			link: 'link',
			meta: 'meta',
			style: 'style',
			script: 'script'
		},
		{}, //Does not have specific attrs
		'Only one head element it is allowed in an html tag');
		
	$scope.elements.tittle = $scope.defineElement('tittle','',{},{},'');
			
	$scope.elements.base = $scope.defineElement('base','',
		{}, //Does not allow inner tags
		{
			href: 'href',
			target: 'target'
		},'');
	
	$scope.elements.link = $scope.defineElement('link','',
		{}, //Does not allow inner tags
		{
			crossorigin : 'crossorigin',
			href: 'href',
			hreflang: 'hreflang',
			media: 'media',
			rel: 'rel',
			sizes : 'sizes',
			type: 'type'
		},'');
		
	$scope.elements.meta = $scope.defineElement('meta','',
		{}, //Does not allow inner tags
		{
			charset  : 'charset',
			content: 'content',
			'http-equiv': 'http-equiv',
			name: 'name',
			rel: 'rel',
			sizes : 'sizes',
			type: 'type'
		},'');
		
	$scope.elements.style = $scope.defineElement('style','',
		{}, //Does not allow inner tags
		{
			type  : 'type',
			media: 'media',
			scoped: 'scoped',
			title: 'title',
			disabled: 'disabled'
		},'');
		
	$scope.elements.script = $scope.defineElement('script','',
		{}, //Does not allow inner tags
		{
			async   : 'async',
			src: 'src',
			type: 'type',
			defer: 'defer'
		},'');		
		
	$scope.elements.noscript = $scope.defineElement('noscript','',{},{},'');
	
	$scope.elements.body = $scope.defineElement('body','',{
			section : 'section',
			nav : 'nav',
			article : 'article',
			aside : 'aside',
			h1 : 'h1',
			h2 : 'h2',
			h3 : 'h3',
			h4 : 'h4',
			h5 : 'h5',
			h6 : 'h6',
			header : 'header',
			footer : 'footer',
			address : 'address',
			main : 'main',
			script : 'script',
			noscript : 'noscript'
		},
		{
			onafterprint : 'onafterprint',
			onbeforeprint  : 'onbeforeprint',
			onbeforeunload : 'onbeforeunload',
			onblur : 'onblur',
			onerror : 'onerror',
			onfocus : 'onfocus',
			onhashchange : 'onhashchange',
			onload : 'onload',
			onmessage : 'onmessage',
			onoffline : 'onoffline',
			ononline : 'ononline',
			onpopstate : 'onpopstate',
			onredo : 'onredo',
			onresize : 'onresize',
			onstorage : 'onstorage',
			onundo : 'onundo',
			onunload  : 'onunload'
		},
		'Only one body element it is allowed in an html tag');
	
		$scope.elements.section = $scope.defineElement('section','',{},{},'');
		$scope.elements.nav = $scope.defineElement('nav','',{},{},'');
		$scope.elements.article = $scope.defineElement('article','',{},{},'');
		$scope.elements.aside = $scope.defineElement('aside','',{},{},'');
		$scope.elements.header = $scope.defineElement('header','',{},{},'');
		$scope.elements.footer = $scope.defineElement('footer','',{},{},'');
		$scope.elements.address = $scope.defineElement('address','',{},{},'');
	
	/**
	 * Restrictions:
	 * html: one node container of others
	 * head: restriction to only one into html
	 * body: restriction to only one into html
	 */
	$scope.types = {
		html : 'html',
		metadata : {
			head : 'head',
			elements : {
				tittle : 'tittle',
				base : 'base',
				link : 'link',
				meta : 'meta',
				style : 'style'
			}
		},
		scripting : {
			script : 'script',
			noscript : 'noscript'
		},
		sections : {
			body : 'body',
			section : 'section',
			nav : 'nav',
			article : 'article',
			aside : 'aside',
			h1 : 'h1',
			h2 : 'h2',
			h3 : 'h3',
			h4 : 'h4',
			h5 : 'h5',
			h6 : 'h6',
			header : 'header',
			footer : 'footer',
			address : 'address',
			main : 'main'
		},
		grouping : {
			p : 'p',
			hr : 'hr',
			pre : 'pre',
			blockquote : 'blockquote',
			ol : 'ol',
			ul : 'ul',
			li : 'li',
			dl : 'dl',
			dt : 'dt',
			dd : 'dd',
			figure : 'figure',
			figcaption : 'figcaption',
			div : 'div'
		},
		semantics : {
			a : 'a',
			em : 'em',
			strong : 'strong',
			small : 'small',
			s : 's',
			cite : 'cite',
			q : 'q',
			dfn : 'dfn',
			abbr : 'abbr',
			data : 'data',
			time : 'time',
			code : 'code',
			'var' : 'var',
			samp : 'samp',
			kbd : 'kbd',
			sub : 'sub',
			sup : 'sup',
			i : 'i',
			b : 'b',
			u : 'u',
			mark : 'mark',
			ruby : 'ruby',
			rt : 'rt',
			rp : 'rp',
			dbi : 'dbi',
			dbo : 'dbo',
			wbr : 'wbr'
		},
		edits : {
			ins : 'ins',
			del : 'del'
		},
		embedded : {
			img : 'img',
			iframe : 'iframe',
			embed : 'embed',
			object : 'object',
			param : 'param',
			video : 'video',
			audio : 'audio',
			source : 'source',
			track : 'track',
			canvas : 'canvas',
			map : 'map',
			area : 'area',
			svg : 'svg',
			math : 'math'
		},
		tabular : {
			table : 'table',
			caption : 'caption',
			colgroup : 'colgroup',
			col : 'col',
			tbody : 'tbody',
			thead : 'thead',
			tfoot : 'tfoot',
			tr : 'tr',
			td : 'td',
			th : 'th'
		},
		forms : {
			form : 'form',
			fieldset : 'fieldset',
			legend : 'legend',
			label : 'label',
			input : 'input',
			button : 'button',
			select : 'select',
			datalist : 'datalist',
			optgroup : 'optgroup',
			option : 'option',
			textarea : 'textarea',
			keygen : 'keygen',
			ouput : 'ouput',
			progress : 'progress',
			meter : 'meter'
		},
		interactive : {
			details : 'details',
			summnary : 'summnary',
			menuitem : 'menuitem',
			menu : 'menu'
		}
	}; 

});
