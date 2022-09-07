import{S as Bs,i as Fs,s as Is,e as n,k as m,w as ms,t as p,M as Gs,c as l,d as a,m as q,a as e,x as qs,h as o,b as c,G as t,g as i,y as gs,L as Hs,q as _s,o as bs,B as vs,v as Js}from"../chunks/vendor-hf-doc-builder.js";import{I as Us}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Os}from"../chunks/CodeBlock-hf-doc-builder.js";function zs(ys){let f,O,d,g,k,b,V,M,W,B,r,X,T,v,Y,Z,D,ss,as,L,ts,ns,N,y,ps,ls,F,h,os,$,us,es,E,cs,rs,I,P,is,G,x,H,_,hs,w,js,fs,J,R,C,ds,U,S,z;return b=new Us({}),x=new Os({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset_name}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset_name}'}}),S=new Os({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),{c(){f=n("meta"),O=m(),d=n("h1"),g=n("a"),k=n("span"),ms(b.$$.fragment),V=m(),M=n("span"),W=p("Splits"),B=m(),r=n("p"),X=p("A dataset generally contains multiple "),T=n("em"),v=n("a"),Y=p("splits"),Z=p(", a specific subset of a dataset like "),D=n("code"),ss=p("train"),as=p(" and "),L=n("code"),ts=p("test"),ns=p(". The dataset can also contain "),N=n("em"),y=n("a"),ps=p("configurations"),ls=p(", a sub-dataset of the larger dataset."),F=m(),h=n("p"),os=p("See the "),$=n("a"),us=p("documentation"),es=p(" of the "),E=n("a"),cs=p("\u{1F917} Datasets"),rs=p(" library to read more in depth about the concepts."),I=m(),P=n("p"),is=p("To get the list of splits and configurations of a dataset:"),G=m(),ms(x.$$.fragment),H=m(),_=n("p"),hs=p("For example, the "),w=n("a"),js=p("duorc"),fs=p(" dataset has six splits and two configurations:"),J=m(),R=n("p"),C=n("a"),ds=p("https://datasets-server.huggingface.co/splits?dataset=duorc"),U=m(),ms(S.$$.fragment),this.h()},l(s){const u=Gs('[data-svelte="svelte-1phssyn"]',document.head);f=l(u,"META",{name:!0,content:!0}),u.forEach(a),O=q(s),d=l(s,"H1",{class:!0});var K=e(d);g=l(K,"A",{id:!0,class:!0,href:!0});var $s=e(g);k=l($s,"SPAN",{});var Es=e(k);qs(b.$$.fragment,Es),Es.forEach(a),$s.forEach(a),V=q(K),M=l(K,"SPAN",{});var xs=e(M);W=o(xs,"Splits"),xs.forEach(a),K.forEach(a),B=q(s),r=l(s,"P",{});var j=e(r);X=o(j,"A dataset generally contains multiple "),T=l(j,"EM",{});var ws=e(T);v=l(ws,"A",{href:!0,rel:!0});var Cs=e(v);Y=o(Cs,"splits"),Cs.forEach(a),ws.forEach(a),Z=o(j,", a specific subset of a dataset like "),D=l(j,"CODE",{});var Ss=e(D);ss=o(Ss,"train"),Ss.forEach(a),as=o(j," and "),L=l(j,"CODE",{});var Ps=e(L);ts=o(Ps,"test"),Ps.forEach(a),ns=o(j,". The dataset can also contain "),N=l(j,"EM",{});var Rs=e(N);y=l(Rs,"A",{href:!0,rel:!0});var As=e(y);ps=o(As,"configurations"),As.forEach(a),Rs.forEach(a),ls=o(j,", a sub-dataset of the larger dataset."),j.forEach(a),F=q(s),h=l(s,"P",{});var A=e(h);os=o(A,"See the "),$=l(A,"A",{href:!0,rel:!0});var ks=e($);us=o(ks,"documentation"),ks.forEach(a),es=o(A," of the "),E=l(A,"A",{href:!0,rel:!0});var Ms=e(E);cs=o(Ms,"\u{1F917} Datasets"),Ms.forEach(a),rs=o(A," library to read more in depth about the concepts."),A.forEach(a),I=q(s),P=l(s,"P",{});var Ts=e(P);is=o(Ts,"To get the list of splits and configurations of a dataset:"),Ts.forEach(a),G=q(s),qs(x.$$.fragment,s),H=q(s),_=l(s,"P",{});var Q=e(_);hs=o(Q,"For example, the "),w=l(Q,"A",{href:!0,rel:!0});var Ds=e(w);js=o(Ds,"duorc"),Ds.forEach(a),fs=o(Q," dataset has six splits and two configurations:"),Q.forEach(a),J=q(s),R=l(s,"P",{});var Ls=e(R);C=l(Ls,"A",{href:!0,rel:!0});var Ns=e(C);ds=o(Ns,"https://datasets-server.huggingface.co/splits?dataset=duorc"),Ns.forEach(a),Ls.forEach(a),U=q(s),qs(S.$$.fragment,s),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(Ks)),c(g,"id","splits"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#splits"),c(d,"class","relative group"),c(v,"href","https://huggingface.co/docs/datasets/load_hub#splits"),c(v,"rel","nofollow"),c(y,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),c(y,"rel","nofollow"),c($,"href","https://huggingface.co/docs/datasets"),c($,"rel","nofollow"),c(E,"href","https://github.com/huggingface/datasets"),c(E,"rel","nofollow"),c(w,"href","https://huggingface.co/datasets/duorc"),c(w,"rel","nofollow"),c(C,"href","https://datasets-server.huggingface.co/splits?dataset=duorc"),c(C,"rel","nofollow")},m(s,u){t(document.head,f),i(s,O,u),i(s,d,u),t(d,g),t(g,k),gs(b,k,null),t(d,V),t(d,M),t(M,W),i(s,B,u),i(s,r,u),t(r,X),t(r,T),t(T,v),t(v,Y),t(r,Z),t(r,D),t(D,ss),t(r,as),t(r,L),t(L,ts),t(r,ns),t(r,N),t(N,y),t(y,ps),t(r,ls),i(s,F,u),i(s,h,u),t(h,os),t(h,$),t($,us),t(h,es),t(h,E),t(E,cs),t(h,rs),i(s,I,u),i(s,P,u),t(P,is),i(s,G,u),gs(x,s,u),i(s,H,u),i(s,_,u),t(_,hs),t(_,w),t(w,js),t(_,fs),i(s,J,u),i(s,R,u),t(R,C),t(C,ds),i(s,U,u),gs(S,s,u),z=!0},p:Hs,i(s){z||(_s(b.$$.fragment,s),_s(x.$$.fragment,s),_s(S.$$.fragment,s),z=!0)},o(s){bs(b.$$.fragment,s),bs(x.$$.fragment,s),bs(S.$$.fragment,s),z=!1},d(s){a(f),s&&a(O),s&&a(d),vs(b),s&&a(B),s&&a(r),s&&a(F),s&&a(h),s&&a(I),s&&a(P),s&&a(G),vs(x,s),s&&a(H),s&&a(_),s&&a(J),s&&a(R),s&&a(U),vs(S,s)}}}const Ks={local:"splits",title:"Splits"};function Qs(ys){return Js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ys extends Bs{constructor(f){super();Fs(this,f,Qs,zs,Is,{})}}export{Ys as default,Ks as metadata};
