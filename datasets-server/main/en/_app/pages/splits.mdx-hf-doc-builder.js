import{S as Xs,i as Qs,s as Vs,e as h,k as v,w as E,t as o,M as Ws,c as f,d as e,m as b,a as d,x as k,h as r,b as j,G as n,g as m,y as A,q as P,o as x,B as C,v as Ys,L as os}from"../chunks/vendor-hf-doc-builder.js";import{T as Zs,I as sa,M as Is}from"../chunks/InferenceApi-hf-doc-builder.js";import{I as aa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as rs}from"../chunks/CodeBlock-hf-doc-builder.js";function ta(q){let a,l=" ",s,p,i,y,S;return{c(){a=o("Currently, only "),s=o(l),p=v(),i=h("a"),y=o("streamable"),S=o(` datasets
  are supported so Datasets Server can extract the first 100 rows without downloading the
  whole dataset. This is especially useful for large datasets where downloading
  an entire dataset may take hours!`),this.h()},l(c){a=r(c,"Currently, only "),s=r(c,l),p=b(c),i=f(c,"A",{href:!0});var _=d(i);y=r(_,"streamable"),_.forEach(e),S=r(c,` datasets
  are supported so Datasets Server can extract the first 100 rows without downloading the
  whole dataset. This is especially useful for large datasets where downloading
  an entire dataset may take hours!`),this.h()},h(){j(i,"href","https://huggingface.co/docs/datasets/stream")},m(c,_){m(c,a,_),m(c,s,_),m(c,p,_),m(c,i,_),n(i,y),m(c,S,_)},p:os,d(c){c&&e(a),c&&e(s),c&&e(p),c&&e(i),c&&e(S)}}}function na(q){let a,l;return a=new rs({props:{code:`import requests
headers = {"Authorization": f"Bearer {API_TOKEN}"}
API_URL = "https://datasets-server.huggingface.co/splits?dataset=duorc"
def query():
    response = requests.request("GET", API_URL, headers=headers)
    return response.json()
data = query()`,highlighted:`<span class="hljs-keyword">import</span> requests
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
API_URL = <span class="hljs-string">&quot;https://datasets-server.huggingface.co/splits?dataset=duorc&quot;</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">query</span>():
    response = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, API_URL, headers=headers)
    <span class="hljs-keyword">return</span> response.json()
data = query()`}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p:os,i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function ea(q){let a,l;return a=new Is({props:{$$slots:{default:[na]},$$scope:{ctx:q}}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p(s,p){const i={};p&2&&(i.$$scope={dirty:p,ctx:s}),a.$set(i)},i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function la(q){let a,l;return a=new rs({props:{code:`import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://datasets-server.huggingface.co/splits?dataset=duorc",
        {
            headers: { Authorization: \`Bearer \${API_TOKEN}\` },
            method: "GET"
        }
    );
    const result = await response.json();
    return result;
}
query().then((response) => {
    console.log(JSON.stringify(response));
});`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">query</span>(<span class="hljs-params">data</span>) {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(
        <span class="hljs-string">&quot;https://datasets-server.huggingface.co/splits?dataset=duorc&quot;</span>,
        {
            <span class="hljs-attr">headers</span>: { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span> },
            <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;GET&quot;</span>
        }
    );
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> response.<span class="hljs-title function_">json</span>();
    <span class="hljs-keyword">return</span> result;
}
<span class="hljs-title function_">query</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});`}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p:os,i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function pa(q){let a,l;return a=new Is({props:{$$slots:{default:[la]},$$scope:{ctx:q}}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p(s,p){const i={};p&2&&(i.$$scope={dirty:p,ctx:s}),a.$set(i)},i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function oa(q){let a,l;return a=new rs({props:{code:`curl https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H "Authorization: Bearer \${API_TOKEN}"`,highlighted:`<span class="hljs-attribute">curl</span> https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>`}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p:os,i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function ra(q){let a,l;return a=new Is({props:{$$slots:{default:[oa]},$$scope:{ctx:q}}}),{c(){E(a.$$.fragment)},l(s){k(a.$$.fragment,s)},m(s,p){A(a,s,p),l=!0},p(s,p){const i={};p&2&&(i.$$scope={dirty:p,ctx:s}),a.$set(i)},i(s){l||(P(a.$$.fragment,s),l=!0)},o(s){x(a.$$.fragment,s),l=!1},d(s){C(a,s)}}}function ua(q){let a,l,s,p,i,y,S,c,_,W,g,us,H,cs,is,J,hs,fs,U,ds,ms,F,js,gs,D,qs,$s,Y,R,Z,$,_s,X,ws,ys,L,vs,bs,B,Es,ks,G,As,ss,I,Ps,Q,xs,Cs,as,O,ts,N,Ts,M,Ss,Rs,ns,z,es;return y=new aa({}),R=new Zs({props:{warning:!0,$$slots:{default:[ta]},$$scope:{ctx:q}}}),O=new sa({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[ra],js:[pa],python:[ea]},$$scope:{ctx:q}}}),z=new rs({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),{c(){a=h("meta"),l=v(),s=h("h1"),p=h("a"),i=h("span"),E(y.$$.fragment),S=v(),c=h("span"),_=o("List splits and configurations"),W=v(),g=h("p"),us=o("Datasets typically have splits and may also have configurations. A "),H=h("em"),cs=o("split"),is=o(" is a subset of the dataset, like "),J=h("code"),hs=o("train"),fs=o(" and "),U=h("code"),ds=o("test"),ms=o(", that are used during different stages of training and evaluating a model. A "),F=h("em"),js=o("configuration"),gs=o(" is a sub-dataset contained within a larger dataset. Configurations are especially common in multilingual speech datasets where there may be a different configuration for each language. If you\u2019re interested in learning more about splits and configurations, check out the "),D=h("a"),qs=o("Load a dataset from the Hub tutorial"),$s=o("!"),Y=v(),E(R.$$.fragment),Z=v(),$=h("p"),_s=o("This guide shows you how to use Datasets Server\u2019s "),X=h("code"),ws=o("/split"),ys=o(" endpoint to retrieve a dataset\u2019s splits and configurations programmatically. Feel free to also try it out with "),L=h("a"),vs=o("Postman"),bs=o(", "),B=h("a"),Es=o("RapidAPI"),ks=o(", or "),G=h("a"),As=o("ReDoc"),ss=v(),I=h("p"),Ps=o("The "),Q=h("code"),xs=o("/split"),Cs=o(" endpoint accepts the dataset name as it\u2019s query parameter:"),as=v(),E(O.$$.fragment),ts=v(),N=h("p"),Ts=o("The endpoint response is a JSON containing a list of the dataset\u2019s splits and configurations. For example, the "),M=h("a"),Ss=o("duorc"),Rs=o(" dataset has six splits and two configurations:"),ns=v(),E(z.$$.fragment),this.h()},l(t){const u=Ws('[data-svelte="svelte-1phssyn"]',document.head);a=f(u,"META",{name:!0,content:!0}),u.forEach(e),l=b(t),s=f(t,"H1",{class:!0});var K=d(s);p=f(K,"A",{id:!0,class:!0,href:!0});var V=d(p);i=f(V,"SPAN",{});var Os=d(i);k(y.$$.fragment,Os),Os.forEach(e),V.forEach(e),S=b(K),c=f(K,"SPAN",{});var Ns=d(c);_=r(Ns,"List splits and configurations"),Ns.forEach(e),K.forEach(e),W=b(t),g=f(t,"P",{});var w=d(g);us=r(w,"Datasets typically have splits and may also have configurations. A "),H=f(w,"EM",{});var Ds=d(H);cs=r(Ds,"split"),Ds.forEach(e),is=r(w," is a subset of the dataset, like "),J=f(w,"CODE",{});var Ls=d(J);hs=r(Ls,"train"),Ls.forEach(e),fs=r(w," and "),U=f(w,"CODE",{});var Bs=d(U);ds=r(Bs,"test"),Bs.forEach(e),ms=r(w,", that are used during different stages of training and evaluating a model. A "),F=f(w,"EM",{});var Gs=d(F);js=r(Gs,"configuration"),Gs.forEach(e),gs=r(w," is a sub-dataset contained within a larger dataset. Configurations are especially common in multilingual speech datasets where there may be a different configuration for each language. If you\u2019re interested in learning more about splits and configurations, check out the "),D=f(w,"A",{href:!0,rel:!0});var Ms=d(D);qs=r(Ms,"Load a dataset from the Hub tutorial"),Ms.forEach(e),$s=r(w,"!"),w.forEach(e),Y=b(t),k(R.$$.fragment,t),Z=b(t),$=f(t,"P",{});var T=d($);_s=r(T,"This guide shows you how to use Datasets Server\u2019s "),X=f(T,"CODE",{});var zs=d(X);ws=r(zs,"/split"),zs.forEach(e),ys=r(T," endpoint to retrieve a dataset\u2019s splits and configurations programmatically. Feel free to also try it out with "),L=f(T,"A",{href:!0,rel:!0});var Ks=d(L);vs=r(Ks,"Postman"),Ks.forEach(e),bs=r(T,", "),B=f(T,"A",{href:!0,rel:!0});var Hs=d(B);Es=r(Hs,"RapidAPI"),Hs.forEach(e),ks=r(T,", or "),G=f(T,"A",{href:!0,rel:!0});var Js=d(G);As=r(Js,"ReDoc"),Js.forEach(e),T.forEach(e),ss=b(t),I=f(t,"P",{});var ls=d(I);Ps=r(ls,"The "),Q=f(ls,"CODE",{});var Us=d(Q);xs=r(Us,"/split"),Us.forEach(e),Cs=r(ls," endpoint accepts the dataset name as it\u2019s query parameter:"),ls.forEach(e),as=b(t),k(O.$$.fragment,t),ts=b(t),N=f(t,"P",{});var ps=d(N);Ts=r(ps,"The endpoint response is a JSON containing a list of the dataset\u2019s splits and configurations. For example, the "),M=f(ps,"A",{href:!0,rel:!0});var Fs=d(M);Ss=r(Fs,"duorc"),Fs.forEach(e),Rs=r(ps," dataset has six splits and two configurations:"),ps.forEach(e),ns=b(t),k(z.$$.fragment,t),this.h()},h(){j(a,"name","hf:doc:metadata"),j(a,"content",JSON.stringify(ca)),j(p,"id","list-splits-and-configurations"),j(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(p,"href","#list-splits-and-configurations"),j(s,"class","relative group"),j(D,"href","https://huggingface.co/docs/datasets/main/en/load_hub"),j(D,"rel","nofollow"),j(L,"href","https://www.postman.com/huggingface/workspace/hugging-face-apis/request/23242779-f0cde3b9-c2ee-4062-aaca-65c4cfdd96f8"),j(L,"rel","nofollow"),j(B,"href","https://rapidapi.com/hugging-face-hugging-face-default/api/hugging-face-datasets-api"),j(B,"rel","nofollow"),j(G,"href","https://redocly.github.io/redoc/?url=https://datasets-server.huggingface.co/openapi.json#operation/listSplits"),j(G,"rel","nofollow"),j(M,"href","https://huggingface.co/datasets/duorc"),j(M,"rel","nofollow")},m(t,u){n(document.head,a),m(t,l,u),m(t,s,u),n(s,p),n(p,i),A(y,i,null),n(s,S),n(s,c),n(c,_),m(t,W,u),m(t,g,u),n(g,us),n(g,H),n(H,cs),n(g,is),n(g,J),n(J,hs),n(g,fs),n(g,U),n(U,ds),n(g,ms),n(g,F),n(F,js),n(g,gs),n(g,D),n(D,qs),n(g,$s),m(t,Y,u),A(R,t,u),m(t,Z,u),m(t,$,u),n($,_s),n($,X),n(X,ws),n($,ys),n($,L),n(L,vs),n($,bs),n($,B),n(B,Es),n($,ks),n($,G),n(G,As),m(t,ss,u),m(t,I,u),n(I,Ps),n(I,Q),n(Q,xs),n(I,Cs),m(t,as,u),A(O,t,u),m(t,ts,u),m(t,N,u),n(N,Ts),n(N,M),n(M,Ss),n(N,Rs),m(t,ns,u),A(z,t,u),es=!0},p(t,[u]){const K={};u&2&&(K.$$scope={dirty:u,ctx:t}),R.$set(K);const V={};u&2&&(V.$$scope={dirty:u,ctx:t}),O.$set(V)},i(t){es||(P(y.$$.fragment,t),P(R.$$.fragment,t),P(O.$$.fragment,t),P(z.$$.fragment,t),es=!0)},o(t){x(y.$$.fragment,t),x(R.$$.fragment,t),x(O.$$.fragment,t),x(z.$$.fragment,t),es=!1},d(t){e(a),t&&e(l),t&&e(s),C(y),t&&e(W),t&&e(g),t&&e(Y),C(R,t),t&&e(Z),t&&e($),t&&e(ss),t&&e(I),t&&e(as),C(O,t),t&&e(ts),t&&e(N),t&&e(ns),C(z,t)}}}const ca={local:"list-splits-and-configurations",title:"List splits and configurations"};function ia(q){return Ys(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ja extends Xs{constructor(a){super();Qs(this,a,ia,ua,Vs,{})}}export{ja as default,ca as metadata};
