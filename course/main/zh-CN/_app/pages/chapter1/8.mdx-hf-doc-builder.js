import{S as us,i as cs,s as fs,e as n,k as c,w as L,t as f,M as hs,c as o,d as a,m as h,a as i,x as G,h as d,b as p,G as e,g as r,y as I,L as ds,q as W,o as z,B as H,v as ks}from"../../chunks/vendor-hf-doc-builder.js";import{I as ws}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ms}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as _s}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function $s(as){let m,B,u,k,q,w,J,A,O,S,_,T,j,U,P,v,F,C,$,M,b,N,l,Q,g,V,X,x,Y,Z,R,y,ss,K;return w=new ws({}),_=new _s({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter1/section8.ipynb"}]}}),$=new ms({props:{code:`from transformers import pipeline

unmasker = pipeline("fill-mask", model="bert-base-uncased")
result = unmasker("This man works as a [MASK].")
print([r["token_str"] for r in result])

result = unmasker("This woman works as a [MASK].")
print([r["token_str"] for r in result])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

unmasker = pipeline(<span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
result = unmasker(<span class="hljs-string">&quot;This man works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])

result = unmasker(<span class="hljs-string">&quot;This woman works as a [MASK].&quot;</span>)
<span class="hljs-built_in">print</span>([r[<span class="hljs-string">&quot;token_str&quot;</span>] <span class="hljs-keyword">for</span> r <span class="hljs-keyword">in</span> result])`}}),b=new ms({props:{code:`['lawyer', 'carpenter', 'doctor', 'waiter', 'mechanic']
['nurse', 'waitress', 'teacher', 'maid', 'prostitute']`,highlighted:`[<span class="hljs-string">&#x27;lawyer&#x27;</span>, <span class="hljs-string">&#x27;carpenter&#x27;</span>, <span class="hljs-string">&#x27;doctor&#x27;</span>, <span class="hljs-string">&#x27;waiter&#x27;</span>, <span class="hljs-string">&#x27;mechanic&#x27;</span>]
[<span class="hljs-string">&#x27;nurse&#x27;</span>, <span class="hljs-string">&#x27;waitress&#x27;</span>, <span class="hljs-string">&#x27;teacher&#x27;</span>, <span class="hljs-string">&#x27;maid&#x27;</span>, <span class="hljs-string">&#x27;prostitute&#x27;</span>]`}}),{c(){m=n("meta"),B=c(),u=n("h1"),k=n("a"),q=n("span"),L(w.$$.fragment),J=c(),A=n("span"),O=f("Bias and limitations"),S=c(),L(_.$$.fragment),T=c(),j=n("p"),U=f("\u5982\u679C\u60A8\u6253\u7B97\u5728\u6B63\u5F0F\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u7ECF\u8FC7\u9884\u8BAD\u7EC3\u6216\u7ECF\u8FC7\u5FAE\u8C03\u7684\u6A21\u578B\u3002\u8BF7\u6CE8\u610F\uFF1A\u867D\u7136\u8FD9\u4E9B\u6A21\u578B\u662F\u5F88\u5F3A\u5927\uFF0C\u4F46\u5B83\u4EEC\u4E5F\u6709\u5C40\u9650\u6027\u3002\u5176\u4E2D\u6700\u5927\u7684\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u4E3A\u4E86\u5BF9\u5927\u91CF\u6570\u636E\u8FDB\u884C\u9884\u8BAD\u7EC3\uFF0C\u7814\u7A76\u4EBA\u5458\u901A\u5E38\u4F1A\u641C\u96C6\u6240\u6709\u4ED6\u4EEC\u80FD\u627E\u5230\u7684\u5185\u5BB9\uFF0C\u4E2D\u95F4\u53EF\u80FD\u5939\u5E26\u4E00\u4E9B\u610F\u8BC6\u5F62\u6001\u6216\u8005\u4EF7\u503C\u89C2\u7684\u523B\u677F\u5370\u8C61\u3002"),P=c(),v=n("p"),F=f("\u4E3A\u4E86\u5FEB\u901F\u89E3\u91CA\u6E05\u695A\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BA9\u6211\u4EEC\u56DE\u5230\u4E00\u4E2A\u4F7F\u7528BERT\u6A21\u578B\u7684pipeline\u7684\u4F8B\u5B50\uFF1A"),C=c(),L($.$$.fragment),M=c(),L(b.$$.fragment),N=c(),l=n("p"),Q=f("\u5F53\u8981\u6C42\u6A21\u578B\u586B\u5199\u8FD9\u4E24\u53E5\u8BDD\u4E2D\u7F3A\u5C11\u7684\u5355\u8BCD\u65F6\uFF0C\u6A21\u578B\u7ED9\u51FA\u7684\u7B54\u6848\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u4E0E\u6027\u522B\u65E0\u5173\uFF08\u670D\u52A1\u5458/\u5973\u670D\u52A1\u5458\uFF09\u3002\u5176\u4ED6\u804C\u4E1A\u901A\u5E38\u4E0E\u67D0\u4E00\u7279\u5B9A\u6027\u522B\u76F8\u5173\uFF0C\u5993\u5973\u6700\u7EC8\u8FDB\u5165\u4E86\u6A21\u578B\u4E2D\u4E0E\u201C\u5973\u4EBA\u201D\u548C\u201C\u5DE5\u4F5C\u201D\u76F8\u5173\u7684\u524D\u4E94\u4F4D\u3002\u5C3D\u7BA1BERT\u662F\u4F7F\u7528\u7ECF\u8FC7\u7B5B\u9009\u548C\u6E05\u6D17\u540E\uFF0C\u660E\u663E\u4E2D\u7ACB\u7684\u6570\u636E\u96C6\u4E0A\u5EFA\u7ACB\u7684\u7684Transformer\u6A21\u578B\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u4ECE\u4E92\u8054\u7F51\u4E0A\u641C\u96C6\u6570\u636E\uFF08\u5B83\u662F\u5728"),g=n("a"),V=f("Wikipedia \u82F1\u6587"),X=f("\u548C"),x=n("a"),Y=f("BookCorpus"),Z=f("\u6570\u636E\u96C6\uFF09\u3002"),R=c(),y=n("p"),ss=f("\u56E0\u6B64\uFF0C\u5F53\u60A8\u4F7F\u7528\u8FD9\u4E9B\u5DE5\u5177\u65F6\uFF0C\u60A8\u9700\u8981\u8BB0\u4F4F\uFF0C\u4F7F\u7528\u7684\u539F\u59CB\u6A21\u578B\u7684\u65F6\u5019\uFF0C\u5F88\u5BB9\u6613\u751F\u6210\u6027\u522B\u6B67\u89C6\u3001\u79CD\u65CF\u4E3B\u4E49\u6216\u6050\u540C\u5185\u5BB9\u3002\u8FD9\u79CD\u56FA\u6709\u504F\u89C1\u4E0D\u4F1A\u968F\u7740\u5FAE\u8C03\u6A21\u578B\u800C\u4F7F\u6D88\u5931\u3002"),this.h()},l(s){const t=hs('[data-svelte="svelte-1phssyn"]',document.head);m=o(t,"META",{name:!0,content:!0}),t.forEach(a),B=h(s),u=o(s,"H1",{class:!0});var D=i(u);k=o(D,"A",{id:!0,class:!0,href:!0});var ts=i(k);q=o(ts,"SPAN",{});var es=i(q);G(w.$$.fragment,es),es.forEach(a),ts.forEach(a),J=h(D),A=o(D,"SPAN",{});var rs=i(A);O=d(rs,"Bias and limitations"),rs.forEach(a),D.forEach(a),S=h(s),G(_.$$.fragment,s),T=h(s),j=o(s,"P",{});var ns=i(j);U=d(ns,"\u5982\u679C\u60A8\u6253\u7B97\u5728\u6B63\u5F0F\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u7ECF\u8FC7\u9884\u8BAD\u7EC3\u6216\u7ECF\u8FC7\u5FAE\u8C03\u7684\u6A21\u578B\u3002\u8BF7\u6CE8\u610F\uFF1A\u867D\u7136\u8FD9\u4E9B\u6A21\u578B\u662F\u5F88\u5F3A\u5927\uFF0C\u4F46\u5B83\u4EEC\u4E5F\u6709\u5C40\u9650\u6027\u3002\u5176\u4E2D\u6700\u5927\u7684\u4E00\u4E2A\u95EE\u9898\u662F\uFF0C\u4E3A\u4E86\u5BF9\u5927\u91CF\u6570\u636E\u8FDB\u884C\u9884\u8BAD\u7EC3\uFF0C\u7814\u7A76\u4EBA\u5458\u901A\u5E38\u4F1A\u641C\u96C6\u6240\u6709\u4ED6\u4EEC\u80FD\u627E\u5230\u7684\u5185\u5BB9\uFF0C\u4E2D\u95F4\u53EF\u80FD\u5939\u5E26\u4E00\u4E9B\u610F\u8BC6\u5F62\u6001\u6216\u8005\u4EF7\u503C\u89C2\u7684\u523B\u677F\u5370\u8C61\u3002"),ns.forEach(a),P=h(s),v=o(s,"P",{});var os=i(v);F=d(os,"\u4E3A\u4E86\u5FEB\u901F\u89E3\u91CA\u6E05\u695A\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8BA9\u6211\u4EEC\u56DE\u5230\u4E00\u4E2A\u4F7F\u7528BERT\u6A21\u578B\u7684pipeline\u7684\u4F8B\u5B50\uFF1A"),os.forEach(a),C=h(s),G($.$$.fragment,s),M=h(s),G(b.$$.fragment,s),N=h(s),l=o(s,"P",{});var E=i(l);Q=d(E,"\u5F53\u8981\u6C42\u6A21\u578B\u586B\u5199\u8FD9\u4E24\u53E5\u8BDD\u4E2D\u7F3A\u5C11\u7684\u5355\u8BCD\u65F6\uFF0C\u6A21\u578B\u7ED9\u51FA\u7684\u7B54\u6848\u4E2D\uFF0C\u53EA\u6709\u4E00\u4E2A\u4E0E\u6027\u522B\u65E0\u5173\uFF08\u670D\u52A1\u5458/\u5973\u670D\u52A1\u5458\uFF09\u3002\u5176\u4ED6\u804C\u4E1A\u901A\u5E38\u4E0E\u67D0\u4E00\u7279\u5B9A\u6027\u522B\u76F8\u5173\uFF0C\u5993\u5973\u6700\u7EC8\u8FDB\u5165\u4E86\u6A21\u578B\u4E2D\u4E0E\u201C\u5973\u4EBA\u201D\u548C\u201C\u5DE5\u4F5C\u201D\u76F8\u5173\u7684\u524D\u4E94\u4F4D\u3002\u5C3D\u7BA1BERT\u662F\u4F7F\u7528\u7ECF\u8FC7\u7B5B\u9009\u548C\u6E05\u6D17\u540E\uFF0C\u660E\u663E\u4E2D\u7ACB\u7684\u6570\u636E\u96C6\u4E0A\u5EFA\u7ACB\u7684\u7684Transformer\u6A21\u578B\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u4ECE\u4E92\u8054\u7F51\u4E0A\u641C\u96C6\u6570\u636E\uFF08\u5B83\u662F\u5728"),g=o(E,"A",{href:!0,rel:!0});var ls=i(g);V=d(ls,"Wikipedia \u82F1\u6587"),ls.forEach(a),X=d(E,"\u548C"),x=o(E,"A",{href:!0,rel:!0});var is=i(x);Y=d(is,"BookCorpus"),is.forEach(a),Z=d(E,"\u6570\u636E\u96C6\uFF09\u3002"),E.forEach(a),R=h(s),y=o(s,"P",{});var ps=i(y);ss=d(ps,"\u56E0\u6B64\uFF0C\u5F53\u60A8\u4F7F\u7528\u8FD9\u4E9B\u5DE5\u5177\u65F6\uFF0C\u60A8\u9700\u8981\u8BB0\u4F4F\uFF0C\u4F7F\u7528\u7684\u539F\u59CB\u6A21\u578B\u7684\u65F6\u5019\uFF0C\u5F88\u5BB9\u6613\u751F\u6210\u6027\u522B\u6B67\u89C6\u3001\u79CD\u65CF\u4E3B\u4E49\u6216\u6050\u540C\u5185\u5BB9\u3002\u8FD9\u79CD\u56FA\u6709\u504F\u89C1\u4E0D\u4F1A\u968F\u7740\u5FAE\u8C03\u6A21\u578B\u800C\u4F7F\u6D88\u5931\u3002"),ps.forEach(a),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(bs)),p(k,"id","bias-and-limitations"),p(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(k,"href","#bias-and-limitations"),p(u,"class","relative group"),p(g,"href","https://huggingface.co/datasets/wikipedia"),p(g,"rel","nofollow"),p(x,"href","https://huggingface.co/datasets/bookcorpus"),p(x,"rel","nofollow")},m(s,t){e(document.head,m),r(s,B,t),r(s,u,t),e(u,k),e(k,q),I(w,q,null),e(u,J),e(u,A),e(A,O),r(s,S,t),I(_,s,t),r(s,T,t),r(s,j,t),e(j,U),r(s,P,t),r(s,v,t),e(v,F),r(s,C,t),I($,s,t),r(s,M,t),I(b,s,t),r(s,N,t),r(s,l,t),e(l,Q),e(l,g),e(g,V),e(l,X),e(l,x),e(x,Y),e(l,Z),r(s,R,t),r(s,y,t),e(y,ss),K=!0},p:ds,i(s){K||(W(w.$$.fragment,s),W(_.$$.fragment,s),W($.$$.fragment,s),W(b.$$.fragment,s),K=!0)},o(s){z(w.$$.fragment,s),z(_.$$.fragment,s),z($.$$.fragment,s),z(b.$$.fragment,s),K=!1},d(s){a(m),s&&a(B),s&&a(u),H(w),s&&a(S),H(_,s),s&&a(T),s&&a(j),s&&a(P),s&&a(v),s&&a(C),H($,s),s&&a(M),H(b,s),s&&a(N),s&&a(l),s&&a(R),s&&a(y)}}}const bs={local:"bias-and-limitations",title:"Bias and limitations"};function gs(as){return ks(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Es extends us{constructor(m){super();cs(this,m,gs,$s,fs,{})}}export{Es as default,bs as metadata};
