import{S as fe,i as he,s as pe,e as c,k as A,w as V,t as I,M as me,c as u,d as a,m as x,a as d,x as T,h as S,b as h,G as i,g as w,y as P,q as L,o as N,B as D,v as $e,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{D as ee}from"../../chunks/Docstring-hf-doc-builder.js";import{I as te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{T as _e,M as ne}from"../../chunks/TokenizersLanguageContent-hf-doc-builder.js";function ve(z){let t,o,e,n,l,f,$,_,E,k,v,g,s,p,m,R,M,q,j,y,C,K,F,Q,X,B,H,Y,U,Z,G;return n=new te({}),k=new ee({props:{name:"class tokenizers.tools.Annotation",anchor:"tokenizers.tools.Annotation",parameters:[{name:"start",val:": int"},{name:"end",val:": int"},{name:"label",val:": str"}],source:"https://github.com/huggingface/tokenizers/blob/v0.13.0/src/tokenizers/tools/visualizer.py#L16"}}),m=new te({}),C=new ee({props:{name:"class tokenizers.tools.EncodingVisualizer",anchor:"tokenizers.tools.EncodingVisualizer",parameters:[{name:"tokenizer",val:": Tokenizer"},{name:"default_to_notebook",val:": bool = True"},{name:"annotation_converter",val:": typing.Union[typing.Callable[[typing.Any], tokenizers.tools.visualizer.Annotation], NoneType] = None"}],parametersDescription:[{anchor:"tokenizers.tools.EncodingVisualizer.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/tokenizers/v0.13.0/en/api/tokenizer#tokenizers.Tokenizer">Tokenizer</a>) &#x2014;
A tokenizer instance`,name:"tokenizer"},{anchor:"tokenizers.tools.EncodingVisualizer.default_to_notebook",description:`<strong>default_to_notebook</strong> (<code>bool</code>) &#x2014;
Whether to render html output in a notebook by default`,name:"default_to_notebook"},{anchor:"tokenizers.tools.EncodingVisualizer.annotation_converter",description:`<strong>annotation_converter</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
An optional (lambda) function that takes an annotation in any format and returns
an Annotation object`,name:"annotation_converter"}],source:"https://github.com/huggingface/tokenizers/blob/v0.13.0/src/tokenizers/tools/visualizer.py#L67"}}),H=new ee({props:{name:"__call__",anchor:"tokenizers.tools.EncodingVisualizer.__call__",parameters:[{name:"text",val:": str"},{name:"annotations",val:": typing.List[tokenizers.tools.visualizer.Annotation] = []"},{name:"default_to_notebook",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"tokenizers.tools.EncodingVisualizer.__call__.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The text to tokenize`,name:"text"},{anchor:"tokenizers.tools.EncodingVisualizer.__call__.annotations",description:`<strong>annotations</strong> (<code>List[Annotation]</code>, <em>optional</em>) &#x2014;
An optional list of annotations of the text. The can either be an annotation class
or anything else if you instantiated the visualizer with a converter function`,name:"annotations"},{anchor:"tokenizers.tools.EncodingVisualizer.__call__.default_to_notebook",description:`<strong>default_to_notebook</strong> (<code>bool</code>, <em>optional</em>, defaults to <em>False</em>) &#x2014;
If True, will render the html in a notebook. Otherwise returns an html string.`,name:"default_to_notebook"}],source:"https://github.com/huggingface/tokenizers/blob/v0.13.0/src/tokenizers/tools/visualizer.py#L108",returnDescription:`
<p>The HTML string if default_to_notebook is False, otherwise (default) returns None and
renders the HTML in the notebook</p>
`}}),{c(){t=c("h2"),o=c("a"),e=c("span"),V(n.$$.fragment),l=A(),f=c("span"),$=I("Annotation"),_=A(),E=c("div"),V(k.$$.fragment),v=A(),g=c("h2"),s=c("a"),p=c("span"),V(m.$$.fragment),R=A(),M=c("span"),q=I("EncodingVisualizer"),j=A(),y=c("div"),V(C.$$.fragment),K=A(),F=c("p"),Q=I("Build an EncodingVisualizer"),X=A(),B=c("div"),V(H.$$.fragment),Y=A(),U=c("p"),Z=I("Build a visualization of the given text"),this.h()},l(r){t=u(r,"H2",{class:!0});var b=d(t);o=u(b,"A",{id:!0,class:!0,href:!0});var oe=d(o);e=u(oe,"SPAN",{});var re=d(e);T(n.$$.fragment,re),re.forEach(a),oe.forEach(a),l=x(b),f=u(b,"SPAN",{});var ae=d(f);$=S(ae,"Annotation"),ae.forEach(a),b.forEach(a),_=x(r),E=u(r,"DIV",{class:!0});var se=d(E);T(k.$$.fragment,se),se.forEach(a),v=x(r),g=u(r,"H2",{class:!0});var J=d(g);s=u(J,"A",{id:!0,class:!0,href:!0});var ie=d(s);p=u(ie,"SPAN",{});var le=d(p);T(m.$$.fragment,le),le.forEach(a),ie.forEach(a),R=x(J),M=u(J,"SPAN",{});var ce=d(M);q=S(ce,"EncodingVisualizer"),ce.forEach(a),J.forEach(a),j=x(r),y=u(r,"DIV",{class:!0});var O=d(y);T(C.$$.fragment,O),K=x(O),F=u(O,"P",{});var ue=d(F);Q=S(ue,"Build an EncodingVisualizer"),ue.forEach(a),X=x(O),B=u(O,"DIV",{class:!0});var W=d(B);T(H.$$.fragment,W),Y=x(W),U=u(W,"P",{});var de=d(U);Z=S(de,"Build a visualization of the given text"),de.forEach(a),W.forEach(a),O.forEach(a),this.h()},h(){h(o,"id","tokenizers.tools.Annotation"),h(o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(o,"href","#tokenizers.tools.Annotation"),h(t,"class","relative group"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(s,"id","tokenizers.tools.EncodingVisualizer"),h(s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(s,"href","#tokenizers.tools.EncodingVisualizer"),h(g,"class","relative group"),h(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,b){w(r,t,b),i(t,o),i(o,e),P(n,e,null),i(t,l),i(t,f),i(f,$),w(r,_,b),w(r,E,b),P(k,E,null),w(r,v,b),w(r,g,b),i(g,s),i(s,p),P(m,p,null),i(g,R),i(g,M),i(M,q),w(r,j,b),w(r,y,b),P(C,y,null),i(y,K),i(y,F),i(F,Q),i(y,X),i(y,B),P(H,B,null),i(B,Y),i(B,U),i(U,Z),G=!0},p:ge,i(r){G||(L(n.$$.fragment,r),L(k.$$.fragment,r),L(m.$$.fragment,r),L(C.$$.fragment,r),L(H.$$.fragment,r),G=!0)},o(r){N(n.$$.fragment,r),N(k.$$.fragment,r),N(m.$$.fragment,r),N(C.$$.fragment,r),N(H.$$.fragment,r),G=!1},d(r){r&&a(t),D(n),r&&a(_),r&&a(E),D(k),r&&a(v),r&&a(g),D(m),r&&a(j),r&&a(y),D(C),D(H)}}}function ze(z){let t,o;return t=new ne({props:{$$slots:{default:[ve]},$$scope:{ctx:z}}}),{c(){V(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,n){P(t,e,n),o=!0},p(e,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){o||(L(t.$$.fragment,e),o=!0)},o(e){N(t.$$.fragment,e),o=!1},d(e){D(t,e)}}}function ke(z){let t,o,e,n,l;return{c(){t=c("p"),o=I("The Rust API Reference is available directly on the "),e=c("a"),n=I("Docs.rs"),l=I(" website."),this.h()},l(f){t=u(f,"P",{});var $=d(t);o=S($,"The Rust API Reference is available directly on the "),e=u($,"A",{href:!0,rel:!0});var _=d(e);n=S(_,"Docs.rs"),_.forEach(a),l=S($," website."),$.forEach(a),this.h()},h(){h(e,"href","https://docs.rs/tokenizers/latest/tokenizers/"),h(e,"rel","nofollow")},m(f,$){w(f,t,$),i(t,o),i(t,e),i(e,n),i(t,l)},d(f){f&&a(t)}}}function be(z){let t,o;return t=new ne({props:{$$slots:{default:[ke]},$$scope:{ctx:z}}}),{c(){V(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,n){P(t,e,n),o=!0},p(e,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){o||(L(t.$$.fragment,e),o=!0)},o(e){N(t.$$.fragment,e),o=!1},d(e){D(t,e)}}}function we(z){let t,o;return{c(){t=c("p"),o=I("The node API has not been documented yet.")},l(e){t=u(e,"P",{});var n=d(t);o=S(n,"The node API has not been documented yet."),n.forEach(a)},m(e,n){w(e,t,n),i(t,o)},d(e){e&&a(t)}}}function Ee(z){let t,o;return t=new ne({props:{$$slots:{default:[we]},$$scope:{ctx:z}}}),{c(){V(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,n){P(t,e,n),o=!0},p(e,n){const l={};n&2&&(l.$$scope={dirty:n,ctx:e}),t.$set(l)},i(e){o||(L(t.$$.fragment,e),o=!0)},o(e){N(t.$$.fragment,e),o=!1},d(e){D(t,e)}}}function ye(z){let t,o,e,n,l,f,$,_,E,k,v,g;return f=new te({}),v=new _e({props:{python:!0,rust:!0,node:!0,$$slots:{node:[Ee],rust:[be],python:[ze]},$$scope:{ctx:z}}}),{c(){t=c("meta"),o=A(),e=c("h1"),n=c("a"),l=c("span"),V(f.$$.fragment),$=A(),_=c("span"),E=I("Visualizer"),k=A(),V(v.$$.fragment),this.h()},l(s){const p=me('[data-svelte="svelte-1phssyn"]',document.head);t=u(p,"META",{name:!0,content:!0}),p.forEach(a),o=x(s),e=u(s,"H1",{class:!0});var m=d(e);n=u(m,"A",{id:!0,class:!0,href:!0});var R=d(n);l=u(R,"SPAN",{});var M=d(l);T(f.$$.fragment,M),M.forEach(a),R.forEach(a),$=x(m),_=u(m,"SPAN",{});var q=d(_);E=S(q,"Visualizer"),q.forEach(a),m.forEach(a),k=x(s),T(v.$$.fragment,s),this.h()},h(){h(t,"name","hf:doc:metadata"),h(t,"content",JSON.stringify(Ae)),h(n,"id","visualizer"),h(n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(n,"href","#visualizer"),h(e,"class","relative group")},m(s,p){i(document.head,t),w(s,o,p),w(s,e,p),i(e,n),i(n,l),P(f,l,null),i(e,$),i(e,_),i(_,E),w(s,k,p),P(v,s,p),g=!0},p(s,[p]){const m={};p&2&&(m.$$scope={dirty:p,ctx:s}),v.$set(m)},i(s){g||(L(f.$$.fragment,s),L(v.$$.fragment,s),g=!0)},o(s){N(f.$$.fragment,s),N(v.$$.fragment,s),g=!1},d(s){a(t),s&&a(o),s&&a(e),D(f),s&&a(k),D(v,s)}}}const Ae={local:"visualizer",sections:[{local:"tokenizers.tools.Annotation",title:"Annotation"},{local:"tokenizers.tools.EncodingVisualizer",title:"EncodingVisualizer"}],title:"Visualizer"};function xe(z){return $e(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ne extends fe{constructor(t){super();he(this,t,xe,ye,pe,{})}}export{Ne as default,Ae as metadata};
