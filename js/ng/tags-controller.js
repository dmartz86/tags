/**
 * Definition,
 * The tags controller of HTML
 *
 * Documentation found here: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list
 */
tagsModApp.controller('TagsC', function TagsC($scope, $http) {

	//restricted restricted
	var elements = { 
		root :'html',
		metadata: {
			name: 'head',
			desc: '',
			elements: {
				tittle:'tittle', 
				base: 'base', 
				link: 'link', 
				meta: 'meta', 
				style: 'style'
			}
		},
		scripting: {
			script: 'script',
			noscript: 'noscript'
		},
		sections :{
			body: 'body',
			section: 'section',
			nav: 'nav',
			article :'article',
			aside:'aside',
			h1: 'h1',
			h2: 'h2',
			h3: 'h3',
			h4: 'h4',
			h5: 'h5',
			h6: 'h6',
			header: 'header',
			footer: 'footer',
			address: 'address',
			main: 'main'
		},
		grouping:{
			p:'p',
			hr: 'hr',
			pre: 'pre',
			blockquote: 'blockquote',
			ol:'ol',
			ul: 'ul',
			li: 'li',
			dl: 'dl',
			dt: 'dt',
			dd: 'dd',
			figure: 'figure',
			figcaption: 'figcaption',
			div: 'div'
		},
		semantics:{
			a: 'a',
			em: 'em',
			strong: 'strong',
			small: 'small',
			s: 's',
			cite: 'cite',
			q: 'q',
			dfn: 'dfn',
			abbr: 'abbr',
			data: 'data',
			time: 'time',
			code: 'code',
			'var' : 'var',
			samp: 'samp',
			kbd: 'kbd',
			sub: 'sub',
			sup: 'sup',
			i: 'i',
			b: 'b',
			u: 'u',
			mark: 'mark',
			ruby: 'ruby',
			rt: 'rt',
			rp: 'rp',
			dbi: 'dbi',
			dbo: 'dbo',
			wbr: 'wbr'
		},
		edits: {
			ins: 'ins',
			del: 'del'
		},
		embedded:{
			
		},
		tabular:{
			
		},
		forms:{
			
		},
		interactive:{
			
		}
	};
});
