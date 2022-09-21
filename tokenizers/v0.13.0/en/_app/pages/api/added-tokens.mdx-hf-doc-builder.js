import{S as We,i as Xe,s as Ze,e as s,k,w as y,t as p,M as et,c as d,d as n,m as v,a as i,x,h as f,b as $,G as o,g as O,y as D,q as I,o as P,B as G,v as tt,L as ot}from"../../chunks/vendor-hf-doc-builder.js";import{D as Z}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Qe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{T as rt,M as Oe}from"../../chunks/TokenizersLanguageContent-hf-doc-builder.js";function nt(T){let t,a,e,r,m,u,w,b,h,A,z,E,c,g,S,Q,W,q,V,$e,X,ge,ee,ke,ve,F,L,we,K,_e,te,be,Te,Ae,C,H,ze,j,Ee,oe,ye,xe,De,M,B,Ie,J,Pe,re,Ge,Se,qe,R,U,Fe,Y,Ce,ne,Me,Re,ae;return r=new Qe({}),A=new Z({props:{name:"class tokenizers.AddedToken",anchor:"tokenizers.AddedToken",parameters:[{name:"content",val:""},{name:"single_word",val:" = False"},{name:"lstrip",val:" = False"},{name:"rstrip",val:" = False"},{name:"normalized",val:" = True"}],parametersDescription:[{anchor:"tokenizers.AddedToken.content",description:"<strong>content</strong> (<code>str</code>) &#x2014; The content of the token",name:"content"},{anchor:"tokenizers.AddedToken.single_word",description:`<strong>single_word</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Defines whether this token should only match single words. If <code>True</code>, this
token will never match inside of a word. For example the token <code>ing</code> would match
on <code>tokenizing</code> if this option is <code>False</code>, but not if it is <code>True</code>.
The notion of &#x201D;<em>inside of a word</em>&#x201D; is defined by the word boundaries pattern in
regular expressions (ie. the token should start and end with word boundaries).`,name:"single_word"},{anchor:"tokenizers.AddedToken.lstrip",description:`<strong>lstrip</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Defines whether this token should strip all potential whitespaces on its left side.
If <code>True</code>, this token will greedily match any whitespace on its left. For
example if we try to match the token <code>[MASK]</code> with <code>lstrip=True</code>, in the text
<code>&quot;I saw a [MASK]&quot;</code>, we would match on <code>&quot; [MASK]&quot;</code>. (Note the space on the left).`,name:"lstrip"},{anchor:"tokenizers.AddedToken.rstrip",description:`<strong>rstrip</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Defines whether this token should strip all potential whitespaces on its right
side. If <code>True</code>, this token will greedily match any whitespace on its right.
It works just like <code>lstrip</code> but on the right.`,name:"rstrip"},{anchor:"tokenizers.AddedToken.normalized",description:`<strong>normalized</strong> (<code>bool</code>, defaults to <code>True</code> with  &#x2014;meth:<em>~tokenizers.Tokenizer.add_tokens</em> and <code>False</code> with <code>add_special_tokens()</code>):
Defines whether this token should match against the normalized version of the input
text. For example, with the added token <code>&quot;yesterday&quot;</code>, and a normalizer in charge of
lowercasing the text, the token could be extract from the input <code>&quot;I saw a lion Yesterday&quot;</code>.`,name:"normalized"}]}}),V=new Z({props:{name:"content",anchor:"tokenizers.AddedToken.content",parameters:[],isGetSetDescriptor:!0}}),L=new Z({props:{name:"lstrip",anchor:"tokenizers.AddedToken.lstrip",parameters:[],isGetSetDescriptor:!0}}),H=new Z({props:{name:"normalized",anchor:"tokenizers.AddedToken.normalized",parameters:[],isGetSetDescriptor:!0}}),B=new Z({props:{name:"rstrip",anchor:"tokenizers.AddedToken.rstrip",parameters:[],isGetSetDescriptor:!0}}),U=new Z({props:{name:"single_word",anchor:"tokenizers.AddedToken.single_word",parameters:[],isGetSetDescriptor:!0}}),{c(){t=s("h2"),a=s("a"),e=s("span"),y(r.$$.fragment),m=k(),u=s("span"),w=p("AddedToken"),b=k(),h=s("div"),y(A.$$.fragment),z=k(),E=s("p"),c=p("Represents a token that can be be added to a "),g=s("a"),S=p("Tokenizer"),Q=p(`.
It can have special options that defines the way it should behave.`),W=k(),q=s("div"),y(V.$$.fragment),$e=k(),X=s("p"),ge=p("Get the content of this "),ee=s("code"),ke=p("AddedToken"),ve=k(),F=s("div"),y(L.$$.fragment),we=k(),K=s("p"),_e=p("Get the value of the "),te=s("code"),be=p("lstrip"),Te=p(" option"),Ae=k(),C=s("div"),y(H.$$.fragment),ze=k(),j=s("p"),Ee=p("Get the value of the "),oe=s("code"),ye=p("normalized"),xe=p(" option"),De=k(),M=s("div"),y(B.$$.fragment),Ie=k(),J=s("p"),Pe=p("Get the value of the "),re=s("code"),Ge=p("rstrip"),Se=p(" option"),qe=k(),R=s("div"),y(U.$$.fragment),Fe=k(),Y=s("p"),Ce=p("Get the value of the "),ne=s("code"),Me=p("single_word"),Re=p(" option"),this.h()},l(l){t=d(l,"H2",{class:!0});var N=i(t);a=d(N,"A",{id:!0,class:!0,href:!0});var Ve=i(a);e=d(Ve,"SPAN",{});var Le=i(e);x(r.$$.fragment,Le),Le.forEach(n),Ve.forEach(n),m=v(N),u=d(N,"SPAN",{});var Ke=i(u);w=f(Ke,"AddedToken"),Ke.forEach(n),N.forEach(n),b=v(l),h=d(l,"DIV",{class:!0});var _=i(h);x(A.$$.fragment,_),z=v(_),E=d(_,"P",{});var se=i(E);c=f(se,"Represents a token that can be be added to a "),g=d(se,"A",{href:!0});var He=i(g);S=f(He,"Tokenizer"),He.forEach(n),Q=f(se,`.
It can have special options that defines the way it should behave.`),se.forEach(n),W=v(_),q=d(_,"DIV",{class:!0});var de=i(q);x(V.$$.fragment,de),$e=v(de),X=d(de,"P",{});var Ne=i(X);ge=f(Ne,"Get the content of this "),ee=d(Ne,"CODE",{});var je=i(ee);ke=f(je,"AddedToken"),je.forEach(n),Ne.forEach(n),de.forEach(n),ve=v(_),F=d(_,"DIV",{class:!0});var ie=i(F);x(L.$$.fragment,ie),we=v(ie),K=d(ie,"P",{});var le=i(K);_e=f(le,"Get the value of the "),te=d(le,"CODE",{});var Be=i(te);be=f(Be,"lstrip"),Be.forEach(n),Te=f(le," option"),le.forEach(n),ie.forEach(n),Ae=v(_),C=d(_,"DIV",{class:!0});var ce=i(C);x(H.$$.fragment,ce),ze=v(ce),j=d(ce,"P",{});var he=i(j);Ee=f(he,"Get the value of the "),oe=d(he,"CODE",{});var Je=i(oe);ye=f(Je,"normalized"),Je.forEach(n),xe=f(he," option"),he.forEach(n),ce.forEach(n),De=v(_),M=d(_,"DIV",{class:!0});var pe=i(M);x(B.$$.fragment,pe),Ie=v(pe),J=d(pe,"P",{});var fe=i(J);Pe=f(fe,"Get the value of the "),re=d(fe,"CODE",{});var Ue=i(re);Ge=f(Ue,"rstrip"),Ue.forEach(n),Se=f(fe," option"),fe.forEach(n),pe.forEach(n),qe=v(_),R=d(_,"DIV",{class:!0});var me=i(R);x(U.$$.fragment,me),Fe=v(me),Y=d(me,"P",{});var ue=i(Y);Ce=f(ue,"Get the value of the "),ne=d(ue,"CODE",{});var Ye=i(ne);Me=f(Ye,"single_word"),Ye.forEach(n),Re=f(ue," option"),ue.forEach(n),me.forEach(n),_.forEach(n),this.h()},h(){$(a,"id","tokenizers.AddedToken"),$(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(a,"href","#tokenizers.AddedToken"),$(t,"class","relative group"),$(g,"href","/docs/tokenizers/v0.13.0/en/api/tokenizer#tokenizers.Tokenizer"),$(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,N){O(l,t,N),o(t,a),o(a,e),D(r,e,null),o(t,m),o(t,u),o(u,w),O(l,b,N),O(l,h,N),D(A,h,null),o(h,z),o(h,E),o(E,c),o(E,g),o(g,S),o(E,Q),o(h,W),o(h,q),D(V,q,null),o(q,$e),o(q,X),o(X,ge),o(X,ee),o(ee,ke),o(h,ve),o(h,F),D(L,F,null),o(F,we),o(F,K),o(K,_e),o(K,te),o(te,be),o(K,Te),o(h,Ae),o(h,C),D(H,C,null),o(C,ze),o(C,j),o(j,Ee),o(j,oe),o(oe,ye),o(j,xe),o(h,De),o(h,M),D(B,M,null),o(M,Ie),o(M,J),o(J,Pe),o(J,re),o(re,Ge),o(J,Se),o(h,qe),o(h,R),D(U,R,null),o(R,Fe),o(R,Y),o(Y,Ce),o(Y,ne),o(ne,Me),o(Y,Re),ae=!0},p:ot,i(l){ae||(I(r.$$.fragment,l),I(A.$$.fragment,l),I(V.$$.fragment,l),I(L.$$.fragment,l),I(H.$$.fragment,l),I(B.$$.fragment,l),I(U.$$.fragment,l),ae=!0)},o(l){P(r.$$.fragment,l),P(A.$$.fragment,l),P(V.$$.fragment,l),P(L.$$.fragment,l),P(H.$$.fragment,l),P(B.$$.fragment,l),P(U.$$.fragment,l),ae=!1},d(l){l&&n(t),G(r),l&&n(b),l&&n(h),G(A),G(V),G(L),G(H),G(B),G(U)}}}function at(T){let t,a;return t=new Oe({props:{$$slots:{default:[nt]},$$scope:{ctx:T}}}),{c(){y(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,r){D(t,e,r),a=!0},p(e,r){const m={};r&2&&(m.$$scope={dirty:r,ctx:e}),t.$set(m)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){G(t,e)}}}function st(T){let t,a,e,r,m;return{c(){t=s("p"),a=p("The Rust API Reference is available directly on the "),e=s("a"),r=p("Docs.rs"),m=p(" website."),this.h()},l(u){t=d(u,"P",{});var w=i(t);a=f(w,"The Rust API Reference is available directly on the "),e=d(w,"A",{href:!0,rel:!0});var b=i(e);r=f(b,"Docs.rs"),b.forEach(n),m=f(w," website."),w.forEach(n),this.h()},h(){$(e,"href","https://docs.rs/tokenizers/latest/tokenizers/"),$(e,"rel","nofollow")},m(u,w){O(u,t,w),o(t,a),o(t,e),o(e,r),o(t,m)},d(u){u&&n(t)}}}function dt(T){let t,a;return t=new Oe({props:{$$slots:{default:[st]},$$scope:{ctx:T}}}),{c(){y(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,r){D(t,e,r),a=!0},p(e,r){const m={};r&2&&(m.$$scope={dirty:r,ctx:e}),t.$set(m)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){G(t,e)}}}function it(T){let t,a;return{c(){t=s("p"),a=p("The node API has not been documented yet.")},l(e){t=d(e,"P",{});var r=i(t);a=f(r,"The node API has not been documented yet."),r.forEach(n)},m(e,r){O(e,t,r),o(t,a)},d(e){e&&n(t)}}}function lt(T){let t,a;return t=new Oe({props:{$$slots:{default:[it]},$$scope:{ctx:T}}}),{c(){y(t.$$.fragment)},l(e){x(t.$$.fragment,e)},m(e,r){D(t,e,r),a=!0},p(e,r){const m={};r&2&&(m.$$scope={dirty:r,ctx:e}),t.$set(m)},i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){P(t.$$.fragment,e),a=!1},d(e){G(t,e)}}}function ct(T){let t,a,e,r,m,u,w,b,h,A,z,E;return u=new Qe({}),z=new rt({props:{python:!0,rust:!0,node:!0,$$slots:{node:[lt],rust:[dt],python:[at]},$$scope:{ctx:T}}}),{c(){t=s("meta"),a=k(),e=s("h1"),r=s("a"),m=s("span"),y(u.$$.fragment),w=k(),b=s("span"),h=p("Added Tokens"),A=k(),y(z.$$.fragment),this.h()},l(c){const g=et('[data-svelte="svelte-1phssyn"]',document.head);t=d(g,"META",{name:!0,content:!0}),g.forEach(n),a=v(c),e=d(c,"H1",{class:!0});var S=i(e);r=d(S,"A",{id:!0,class:!0,href:!0});var Q=i(r);m=d(Q,"SPAN",{});var W=i(m);x(u.$$.fragment,W),W.forEach(n),Q.forEach(n),w=v(S),b=d(S,"SPAN",{});var q=i(b);h=f(q,"Added Tokens"),q.forEach(n),S.forEach(n),A=v(c),x(z.$$.fragment,c),this.h()},h(){$(t,"name","hf:doc:metadata"),$(t,"content",JSON.stringify(ht)),$(r,"id","added-tokens"),$(r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(r,"href","#added-tokens"),$(e,"class","relative group")},m(c,g){o(document.head,t),O(c,a,g),O(c,e,g),o(e,r),o(r,m),D(u,m,null),o(e,w),o(e,b),o(b,h),O(c,A,g),D(z,c,g),E=!0},p(c,[g]){const S={};g&2&&(S.$$scope={dirty:g,ctx:c}),z.$set(S)},i(c){E||(I(u.$$.fragment,c),I(z.$$.fragment,c),E=!0)},o(c){P(u.$$.fragment,c),P(z.$$.fragment,c),E=!1},d(c){n(t),c&&n(a),c&&n(e),G(u),c&&n(A),G(z,c)}}}const ht={local:"added-tokens",sections:[{local:"tokenizers.AddedToken",title:"AddedToken"}],title:"Added Tokens"};function pt(T){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gt extends We{constructor(t){super();Xe(this,t,pt,ct,Ze,{})}}export{gt as default,ht as metadata};
