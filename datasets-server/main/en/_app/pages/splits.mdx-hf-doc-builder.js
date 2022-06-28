import{S as Hs,i as Js,s as Ls,F as Gs,e as i,c as h,a as f,d as a,b as d,g as m,H as Us,I as Vs,J as zs,q as L,o as G,k as v,w as as,t as u,M as Ks,m as $,x as ts,h as c,G as n,y as ns,B as ls,v as Qs}from"../chunks/vendor-hf-doc-builder.js";import{I as Ws}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Os}from"../chunks/CodeBlock-hf-doc-builder.js";function Xs(q){let p,r;const j=q[3].default,l=Gs(j,q,q[2],null);return{c(){p=i("div"),l&&l.c(),this.h()},l(t){p=h(t,"DIV",{class:!0});var e=f(p);l&&l.l(e),e.forEach(a),this.h()},h(){d(p,"class","course-tip "+(q[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+q[0]+"-500 dark:before:border-"+q[0]+"-800 from-"+q[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+q[0]+"-50 text-"+q[0]+"-700 dark:text-gray-400")},m(t,e){m(t,p,e),l&&l.m(p,null),r=!0},p(t,[e]){l&&l.p&&(!r||e&4)&&Us(l,j,t,t[2],r?zs(j,t[2],e,null):Vs(t[2]),null)},i(t){r||(L(l,t),r=!0)},o(t){G(l,t),r=!1},d(t){t&&a(p),l&&l.d(t)}}}function Ys(q,p,r){let{$$slots:j={},$$scope:l}=p,{warning:t=!1}=p;const e=t?"orange":"green";return q.$$set=w=>{"warning"in w&&r(1,t=w.warning),"$$scope"in w&&r(2,l=w.$$scope)},[e,t,l,j]}class Zs extends Hs{constructor(p){super();Js(this,p,Ys,Xs,Ls,{warning:1})}}function sa(q){let p,r,j,l;return{c(){p=u("Currently, the API only returns rows of the "),r=i("a"),j=u('"streamable" datasets'),l=u(". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},l(t){p=c(t,"Currently, the API only returns rows of the "),r=h(t,"A",{href:!0});var e=f(r);j=c(e,'"streamable" datasets'),e.forEach(a),l=c(t,". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},h(){d(r,"href","https://huggingface.co/docs/datasets/stream")},m(t,e){m(t,p,e),m(t,r,e),n(r,j),m(t,l,e)},d(t){t&&a(p),t&&a(r),t&&a(l)}}}function aa(q){let p,r,j,l,t,e,w,F,ps,U,g,es,N,C,os,us,O,cs,rs,H,is,hs,J,x,fs,ds,V,_,js,P,ms,qs,S,gs,_s,z,D,bs,K,k,Q,y,W,E,vs,A,$s,ws,X,M,R,ys,Y,I,Z;return e=new Ws({}),k=new Os({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset_name}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset_name}'}}),y=new Zs({props:{warning:!0,$$slots:{default:[sa]},$$scope:{ctx:q}}}),I=new Os({props:{code:`{
  "splits": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "num_bytes": 239852925,
      "num_examples": 60721
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "validation",
      "num_bytes": 51662575,
      "num_examples": 12961
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "test",
      "num_bytes": 49142766,
      "num_examples": 12559
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "train",
      "num_bytes": 496683105,
      "num_examples": 69524
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "validation",
      "num_bytes": 106510545,
      "num_examples": 15591
    },
    {
      "dataset": "duorc",
      "config": "ParaphraseRC",
      "split": "test",
      "num_bytes": 115215816,
      "num_examples": 15857
    }
  ]
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;splits&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">239852925</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">60721</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;validation&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">51662575</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12961</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">49142766</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12559</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">496683105</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">69524</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;validation&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">106510545</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">15591</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ParaphraseRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_bytes&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">115215816</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;num_examples&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">15857</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>`}}),{c(){p=i("meta"),r=v(),j=i("h1"),l=i("a"),t=i("span"),as(e.$$.fragment),w=v(),F=i("span"),ps=u("Splits"),U=v(),g=i("p"),es=u("A dataset generally contains multiple "),N=i("em"),C=i("a"),os=u("splits"),us=u(", a specific subset of a dataset like "),O=i("code"),cs=u("train"),rs=u(" and "),H=i("code"),is=u("test"),hs=u(". The dataset can also contain "),J=i("em"),x=i("a"),fs=u("configurations"),ds=u(", a sub-dataset of the larger dataset."),V=v(),_=i("p"),js=u("See the "),P=i("a"),ms=u("documentation"),qs=u(" of the "),S=i("a"),gs=u("\u{1F917} Datasets"),_s=u(" library to read more in depth about the concepts."),z=v(),D=i("p"),bs=u("To get the list of splits and configurations of a dataset:"),K=v(),as(k.$$.fragment),Q=v(),as(y.$$.fragment),W=v(),E=i("p"),vs=u("For example, the "),A=i("a"),$s=u("duorc"),ws=u(" dataset has six splits and two configurations:"),X=v(),M=i("p"),R=i("a"),ys=u("https://datasets-server.huggingface.co/splits?dataset=duorc"),Y=v(),as(I.$$.fragment),this.h()},l(s){const o=Ks('[data-svelte="svelte-1phssyn"]',document.head);p=h(o,"META",{name:!0,content:!0}),o.forEach(a),r=$(s),j=h(s,"H1",{class:!0});var T=f(j);l=h(T,"A",{id:!0,class:!0,href:!0});var Es=f(l);t=h(Es,"SPAN",{});var Cs=f(t);ts(e.$$.fragment,Cs),Cs.forEach(a),Es.forEach(a),w=$(T),F=h(T,"SPAN",{});var xs=f(F);ps=c(xs,"Splits"),xs.forEach(a),T.forEach(a),U=$(s),g=h(s,"P",{});var b=f(g);es=c(b,"A dataset generally contains multiple "),N=h(b,"EM",{});var Ps=f(N);C=h(Ps,"A",{href:!0,rel:!0});var Ss=f(C);os=c(Ss,"splits"),Ss.forEach(a),Ps.forEach(a),us=c(b,", a specific subset of a dataset like "),O=h(b,"CODE",{});var ks=f(O);cs=c(ks,"train"),ks.forEach(a),rs=c(b," and "),H=h(b,"CODE",{});var As=f(H);is=c(As,"test"),As.forEach(a),hs=c(b,". The dataset can also contain "),J=h(b,"EM",{});var Rs=f(J);x=h(Rs,"A",{href:!0,rel:!0});var Is=f(x);fs=c(Is,"configurations"),Is.forEach(a),Rs.forEach(a),ds=c(b,", a sub-dataset of the larger dataset."),b.forEach(a),V=$(s),_=h(s,"P",{});var B=f(_);js=c(B,"See the "),P=h(B,"A",{href:!0,rel:!0});var Ts=f(P);ms=c(Ts,"documentation"),Ts.forEach(a),qs=c(B," of the "),S=h(B,"A",{href:!0,rel:!0});var Ds=f(S);gs=c(Ds,"\u{1F917} Datasets"),Ds.forEach(a),_s=c(B," library to read more in depth about the concepts."),B.forEach(a),z=$(s),D=h(s,"P",{});var Ms=f(D);bs=c(Ms,"To get the list of splits and configurations of a dataset:"),Ms.forEach(a),K=$(s),ts(k.$$.fragment,s),Q=$(s),ts(y.$$.fragment,s),W=$(s),E=h(s,"P",{});var ss=f(E);vs=c(ss,"For example, the "),A=h(ss,"A",{href:!0,rel:!0});var Bs=f(A);$s=c(Bs,"duorc"),Bs.forEach(a),ws=c(ss," dataset has six splits and two configurations:"),ss.forEach(a),X=$(s),M=h(s,"P",{});var Fs=f(M);R=h(Fs,"A",{href:!0,rel:!0});var Ns=f(R);ys=c(Ns,"https://datasets-server.huggingface.co/splits?dataset=duorc"),Ns.forEach(a),Fs.forEach(a),Y=$(s),ts(I.$$.fragment,s),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(ta)),d(l,"id","splits"),d(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(l,"href","#splits"),d(j,"class","relative group"),d(C,"href","https://huggingface.co/docs/datasets/load_hub#splits"),d(C,"rel","nofollow"),d(x,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),d(x,"rel","nofollow"),d(P,"href","https://huggingface.co/docs/datasets"),d(P,"rel","nofollow"),d(S,"href","https://github.com/huggingface/datasets"),d(S,"rel","nofollow"),d(A,"href","https://huggingface.co/datasets/duorc"),d(A,"rel","nofollow"),d(R,"href","https://datasets-server.huggingface.co/splits?dataset=duorc"),d(R,"rel","nofollow")},m(s,o){n(document.head,p),m(s,r,o),m(s,j,o),n(j,l),n(l,t),ns(e,t,null),n(j,w),n(j,F),n(F,ps),m(s,U,o),m(s,g,o),n(g,es),n(g,N),n(N,C),n(C,os),n(g,us),n(g,O),n(O,cs),n(g,rs),n(g,H),n(H,is),n(g,hs),n(g,J),n(J,x),n(x,fs),n(g,ds),m(s,V,o),m(s,_,o),n(_,js),n(_,P),n(P,ms),n(_,qs),n(_,S),n(S,gs),n(_,_s),m(s,z,o),m(s,D,o),n(D,bs),m(s,K,o),ns(k,s,o),m(s,Q,o),ns(y,s,o),m(s,W,o),m(s,E,o),n(E,vs),n(E,A),n(A,$s),n(E,ws),m(s,X,o),m(s,M,o),n(M,R),n(R,ys),m(s,Y,o),ns(I,s,o),Z=!0},p(s,[o]){const T={};o&2&&(T.$$scope={dirty:o,ctx:s}),y.$set(T)},i(s){Z||(L(e.$$.fragment,s),L(k.$$.fragment,s),L(y.$$.fragment,s),L(I.$$.fragment,s),Z=!0)},o(s){G(e.$$.fragment,s),G(k.$$.fragment,s),G(y.$$.fragment,s),G(I.$$.fragment,s),Z=!1},d(s){a(p),s&&a(r),s&&a(j),ls(e),s&&a(U),s&&a(g),s&&a(V),s&&a(_),s&&a(z),s&&a(D),s&&a(K),ls(k,s),s&&a(Q),ls(y,s),s&&a(W),s&&a(E),s&&a(X),s&&a(M),s&&a(Y),ls(I,s)}}}const ta={local:"splits",title:"Splits"};function na(q){return Qs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oa extends Hs{constructor(p){super();Js(this,p,na,aa,Ls,{})}}export{oa as default,ta as metadata};
