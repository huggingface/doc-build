import{S as Me,i as Ue,s as Ke,e as n,k as d,w as T,t as r,M as Je,c as l,d as a,m,a as o,x as k,h as p,b as c,G as s,g,y as A,q as R,o as P,B as x,v as Fe,L as Xa}from"../chunks/vendor-hf-doc-builder.js";import{I as Qe,C as Qs}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as Ve,M as Ya}from"../chunks/InferenceApi-hf-doc-builder.js";function Xe($){let u,i;return u=new Qs({props:{code:`import json
import requests
headers = {"Authorization": f"Bearer {API_TOKEN}"}
API_URL = "https://datasets-server.huggingface.co/splits?dataset=duorc"
def query():
    response = requests.request("GET", API_URL, headers=headers)
    return json.loads(response.content.decode("utf-8"))
data = query()`,highlighted:`<span class="hljs-keyword">import</span> json
<span class="hljs-keyword">import</span> requests
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
API_URL = <span class="hljs-string">&quot;https://datasets-server.huggingface.co/splits?dataset=duorc&quot;</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">query</span>():
    response = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, API_URL, headers=headers)
    <span class="hljs-keyword">return</span> json.loads(response.content.decode(<span class="hljs-string">&quot;utf-8&quot;</span>))
data = query()`}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p:Xa,i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function Ye($){let u,i;return u=new Ya({props:{$$slots:{default:[Xe]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function We($){let u,i;return u=new Qs({props:{code:`import fetch from "node-fetch";
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
});`}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p:Xa,i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function Ze($){let u,i;return u=new Ya({props:{$$slots:{default:[We]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function sn($){let u,i;return u=new Qs({props:{code:`curl https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H "Authorization: Bearer \${API_TOKEN}"`,highlighted:`<span class="hljs-attribute">curl</span> https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>`}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p:Xa,i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function tn($){let u,i;return u=new Ya({props:{$$slots:{default:[sn]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){k(u.$$.fragment,e)},m(e,f){A(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(R(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function an($){let u,i,e,f,_,M,wt,bs,Tt,Vs,q,kt,ws,U,At,Rt,Ts,Pt,xt,ks,St,Dt,As,Ot,Ct,Xs,E,Nt,Rs,K,It,Gt,J,Lt,Bt,F,zt,Ht,Ys,D,Mt,Q,Ut,Kt,Ws,O,Jt,Ps,Ft,Qt,Zs,V,st,fs,Vt,tt,C,xs,X,ds,Xt,Yt,Ss,Wt,Ds,Y,W,Os,Zt,sa,ta,S,aa,Cs,ea,na,Ns,la,at,j,oa,Z,ra,pa,ss,ua,ca,ts,ia,ha,as,fa,da,es,ma,ga,et,N,nt,I,ja,Is,_a,qa,lt,G,Gs,ns,ms,va,$a,Ls,Ea,v,ls,gs,Bs,ya,ba,js,wa,Ta,os,_s,zs,ka,Aa,qs,Ra,Pa,rs,vs,Hs,xa,Sa,$s,Da,Oa,ps,Es,Ms,Ca,Na,L,Ia,Us,Ga,La,Ba,us,ys,Ks,za,Ha,B,Ma,Js,Ua,Ka,ot,z,Ja,cs,Fa,Qa,rt,is,pt;return M=new Qe({}),V=new Qs({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset}'}}),N=new Ve({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[tn],js:[Ze],python:[Ye]},$$scope:{ctx:$}}}),is=new Qs({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),{c(){u=n("meta"),i=d(),e=n("h1"),f=n("a"),_=n("span"),T(M.$$.fragment),wt=d(),bs=n("span"),Tt=r("Splits"),Vs=d(),q=n("p"),kt=r("The datasets aimed at training and evaluating a Machine Learning model are generally divided into multiple "),ws=n("em"),U=n("a"),At=r("splits"),Rt=r(", for example "),Ts=n("code"),Pt=r("train"),xt=r(", "),ks=n("code"),St=r("test"),Dt=r(" and "),As=n("code"),Ot=r("validation"),Ct=r("."),Xs=d(),E=n("p"),Nt=r("Some datasets also use "),Rs=n("em"),K=n("a"),It=r("configurations"),Gt=r(" (sub-datasets) to group similar examples: "),J=n("a"),Lt=r("CommonVoice"),Bt=r("\u2019s configurations embed the audio recordings of each language ; "),F=n("a"),zt=r("GLUE"),Ht=r(" provides one configuration for every evaluation task."),Ys=d(),D=n("p"),Mt=r("Read more in depth about the concepts in the "),Q=n("a"),Ut=r("\u{1F917} Datasets library documentation"),Kt=r("."),Ws=d(),O=n("p"),Jt=r("The /splits endpoints gives the "),Ps=n("strong"),Ft=r("list of configurations and splits"),Qt=r(" of a dataset."),Zs=d(),T(V.$$.fragment),st=d(),fs=n("p"),Vt=r("The endpoint takes one query parameter:"),tt=d(),C=n("table"),xs=n("thead"),X=n("tr"),ds=n("th"),Xt=r("Query parameter"),Yt=d(),Ss=n("th"),Wt=d(),Ds=n("tbody"),Y=n("tr"),W=n("td"),Os=n("strong"),Zt=r("dataset"),sa=r(" (required)"),ta=d(),S=n("td"),aa=r("the dataset name, for example "),Cs=n("code"),ea=r("glue"),na=r(" or "),Ns=n("code"),la=r("mozilla-foundation/common_voice_10_0"),at=d(),j=n("p"),oa=r("Try it in your "),Z=n("a"),ra=r("browser"),pa=r(", with "),ss=n("a"),ua=r("Postman"),ca=r(", with "),ts=n("a"),ia=r("RapidAPI"),ha=r(", with "),as=n("a"),fa=r("ReDoc"),da=r(", or programmatically. Pass your API token if you query a "),es=n("a"),ma=r("gated dataset"),ga=r("."),et=d(),T(N.$$.fragment),nt=d(),I=n("p"),ja=r("The response is a JSON. The list of splits is nested under the "),Is=n("code"),_a=r("splits"),qa=r(" key. The fields of every split are:"),lt=d(),G=n("table"),Gs=n("thead"),ns=n("tr"),ms=n("th"),va=r("Response: split fields"),$a=d(),Ls=n("th"),Ea=d(),v=n("tbody"),ls=n("tr"),gs=n("td"),Bs=n("strong"),ya=r("dataset"),ba=d(),js=n("td"),wa=r("the name of the dataset"),Ta=d(),os=n("tr"),_s=n("td"),zs=n("strong"),ka=r("config"),Aa=d(),qs=n("td"),Ra=r("the name of the configuration"),Pa=d(),rs=n("tr"),vs=n("td"),Hs=n("strong"),xa=r("split"),Sa=d(),$s=n("td"),Da=r("the name of the split"),Oa=d(),ps=n("tr"),Es=n("td"),Ms=n("strong"),Ca=r("num_bytes"),Na=d(),L=n("td"),Ia=r("the size in bytes (can be "),Us=n("code"),Ga=r("null"),La=r(")"),Ba=d(),us=n("tr"),ys=n("td"),Ks=n("strong"),za=r("num_examples"),Ha=d(),B=n("td"),Ma=r("the number of examples (can be "),Js=n("code"),Ua=r("null"),Ka=r(")"),ot=d(),z=n("p"),Ja=r("For example, the "),cs=n("a"),Fa=r("duorc"),Qa=r(" dataset has six splits and two configurations:"),rt=d(),T(is.$$.fragment),this.h()},l(t){const h=Je('[data-svelte="svelte-1phssyn"]',document.head);u=l(h,"META",{name:!0,content:!0}),h.forEach(a),i=m(t),e=l(t,"H1",{class:!0});var hs=o(e);f=l(hs,"A",{id:!0,class:!0,href:!0});var Wa=o(f);_=l(Wa,"SPAN",{});var Za=o(_);k(M.$$.fragment,Za),Za.forEach(a),Wa.forEach(a),wt=m(hs),bs=l(hs,"SPAN",{});var se=o(bs);Tt=p(se,"Splits"),se.forEach(a),hs.forEach(a),Vs=m(t),q=l(t,"P",{});var b=o(q);kt=p(b,"The datasets aimed at training and evaluating a Machine Learning model are generally divided into multiple "),ws=l(b,"EM",{});var te=o(ws);U=l(te,"A",{href:!0,rel:!0});var ae=o(U);At=p(ae,"splits"),ae.forEach(a),te.forEach(a),Rt=p(b,", for example "),Ts=l(b,"CODE",{});var ee=o(Ts);Pt=p(ee,"train"),ee.forEach(a),xt=p(b,", "),ks=l(b,"CODE",{});var ne=o(ks);St=p(ne,"test"),ne.forEach(a),Dt=p(b," and "),As=l(b,"CODE",{});var le=o(As);Ot=p(le,"validation"),le.forEach(a),Ct=p(b,"."),b.forEach(a),Xs=m(t),E=l(t,"P",{});var H=o(E);Nt=p(H,"Some datasets also use "),Rs=l(H,"EM",{});var oe=o(Rs);K=l(oe,"A",{href:!0,rel:!0});var re=o(K);It=p(re,"configurations"),re.forEach(a),oe.forEach(a),Gt=p(H," (sub-datasets) to group similar examples: "),J=l(H,"A",{href:!0,rel:!0});var pe=o(J);Lt=p(pe,"CommonVoice"),pe.forEach(a),Bt=p(H,"\u2019s configurations embed the audio recordings of each language ; "),F=l(H,"A",{href:!0,rel:!0});var ue=o(F);zt=p(ue,"GLUE"),ue.forEach(a),Ht=p(H," provides one configuration for every evaluation task."),H.forEach(a),Ys=m(t),D=l(t,"P",{});var ut=o(D);Mt=p(ut,"Read more in depth about the concepts in the "),Q=l(ut,"A",{href:!0,rel:!0});var ce=o(Q);Ut=p(ce,"\u{1F917} Datasets library documentation"),ce.forEach(a),Kt=p(ut,"."),ut.forEach(a),Ws=m(t),O=l(t,"P",{});var ct=o(O);Jt=p(ct,"The /splits endpoints gives the "),Ps=l(ct,"STRONG",{});var ie=o(Ps);Ft=p(ie,"list of configurations and splits"),ie.forEach(a),Qt=p(ct," of a dataset."),ct.forEach(a),Zs=m(t),k(V.$$.fragment,t),st=m(t),fs=l(t,"P",{});var he=o(fs);Vt=p(he,"The endpoint takes one query parameter:"),he.forEach(a),tt=m(t),C=l(t,"TABLE",{});var it=o(C);xs=l(it,"THEAD",{});var fe=o(xs);X=l(fe,"TR",{});var ht=o(X);ds=l(ht,"TH",{align:!0});var de=o(ds);Xt=p(de,"Query parameter"),de.forEach(a),Yt=m(ht),Ss=l(ht,"TH",{align:!0}),o(Ss).forEach(a),ht.forEach(a),fe.forEach(a),Wt=m(it),Ds=l(it,"TBODY",{});var me=o(Ds);Y=l(me,"TR",{});var ft=o(Y);W=l(ft,"TD",{align:!0});var Va=o(W);Os=l(Va,"STRONG",{});var ge=o(Os);Zt=p(ge,"dataset"),ge.forEach(a),sa=p(Va," (required)"),Va.forEach(a),ta=m(ft),S=l(ft,"TD",{align:!0});var Fs=o(S);aa=p(Fs,"the dataset name, for example "),Cs=l(Fs,"CODE",{});var je=o(Cs);ea=p(je,"glue"),je.forEach(a),na=p(Fs," or "),Ns=l(Fs,"CODE",{});var _e=o(Ns);la=p(_e,"mozilla-foundation/common_voice_10_0"),_e.forEach(a),Fs.forEach(a),ft.forEach(a),me.forEach(a),it.forEach(a),at=m(t),j=l(t,"P",{});var y=o(j);oa=p(y,"Try it in your "),Z=l(y,"A",{href:!0,rel:!0});var qe=o(Z);ra=p(qe,"browser"),qe.forEach(a),pa=p(y,", with "),ss=l(y,"A",{href:!0,rel:!0});var ve=o(ss);ua=p(ve,"Postman"),ve.forEach(a),ca=p(y,", with "),ts=l(y,"A",{href:!0,rel:!0});var $e=o(ts);ia=p($e,"RapidAPI"),$e.forEach(a),ha=p(y,", with "),as=l(y,"A",{href:!0,rel:!0});var Ee=o(as);fa=p(Ee,"ReDoc"),Ee.forEach(a),da=p(y,", or programmatically. Pass your API token if you query a "),es=l(y,"A",{href:!0,rel:!0});var ye=o(es);ma=p(ye,"gated dataset"),ye.forEach(a),ga=p(y,"."),y.forEach(a),et=m(t),k(N.$$.fragment,t),nt=m(t),I=l(t,"P",{});var dt=o(I);ja=p(dt,"The response is a JSON. The list of splits is nested under the "),Is=l(dt,"CODE",{});var be=o(Is);_a=p(be,"splits"),be.forEach(a),qa=p(dt," key. The fields of every split are:"),dt.forEach(a),lt=m(t),G=l(t,"TABLE",{});var mt=o(G);Gs=l(mt,"THEAD",{});var we=o(Gs);ns=l(we,"TR",{});var gt=o(ns);ms=l(gt,"TH",{align:!0});var Te=o(ms);va=p(Te,"Response: split fields"),Te.forEach(a),$a=m(gt),Ls=l(gt,"TH",{align:!0}),o(Ls).forEach(a),gt.forEach(a),we.forEach(a),Ea=m(mt),v=l(mt,"TBODY",{});var w=o(v);ls=l(w,"TR",{});var jt=o(ls);gs=l(jt,"TD",{align:!0});var ke=o(gs);Bs=l(ke,"STRONG",{});var Ae=o(Bs);ya=p(Ae,"dataset"),Ae.forEach(a),ke.forEach(a),ba=m(jt),js=l(jt,"TD",{align:!0});var Re=o(js);wa=p(Re,"the name of the dataset"),Re.forEach(a),jt.forEach(a),Ta=m(w),os=l(w,"TR",{});var _t=o(os);_s=l(_t,"TD",{align:!0});var Pe=o(_s);zs=l(Pe,"STRONG",{});var xe=o(zs);ka=p(xe,"config"),xe.forEach(a),Pe.forEach(a),Aa=m(_t),qs=l(_t,"TD",{align:!0});var Se=o(qs);Ra=p(Se,"the name of the configuration"),Se.forEach(a),_t.forEach(a),Pa=m(w),rs=l(w,"TR",{});var qt=o(rs);vs=l(qt,"TD",{align:!0});var De=o(vs);Hs=l(De,"STRONG",{});var Oe=o(Hs);xa=p(Oe,"split"),Oe.forEach(a),De.forEach(a),Sa=m(qt),$s=l(qt,"TD",{align:!0});var Ce=o($s);Da=p(Ce,"the name of the split"),Ce.forEach(a),qt.forEach(a),Oa=m(w),ps=l(w,"TR",{});var vt=o(ps);Es=l(vt,"TD",{align:!0});var Ne=o(Es);Ms=l(Ne,"STRONG",{});var Ie=o(Ms);Ca=p(Ie,"num_bytes"),Ie.forEach(a),Ne.forEach(a),Na=m(vt),L=l(vt,"TD",{align:!0});var $t=o(L);Ia=p($t,"the size in bytes (can be "),Us=l($t,"CODE",{});var Ge=o(Us);Ga=p(Ge,"null"),Ge.forEach(a),La=p($t,")"),$t.forEach(a),vt.forEach(a),Ba=m(w),us=l(w,"TR",{});var Et=o(us);ys=l(Et,"TD",{align:!0});var Le=o(ys);Ks=l(Le,"STRONG",{});var Be=o(Ks);za=p(Be,"num_examples"),Be.forEach(a),Le.forEach(a),Ha=m(Et),B=l(Et,"TD",{align:!0});var yt=o(B);Ma=p(yt,"the number of examples (can be "),Js=l(yt,"CODE",{});var ze=o(Js);Ua=p(ze,"null"),ze.forEach(a),Ka=p(yt,")"),yt.forEach(a),Et.forEach(a),w.forEach(a),mt.forEach(a),ot=m(t),z=l(t,"P",{});var bt=o(z);Ja=p(bt,"For example, the "),cs=l(bt,"A",{href:!0,rel:!0});var He=o(cs);Fa=p(He,"duorc"),He.forEach(a),Qa=p(bt," dataset has six splits and two configurations:"),bt.forEach(a),rt=m(t),k(is.$$.fragment,t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(en)),c(f,"id","splits"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#splits"),c(e,"class","relative group"),c(U,"href","https://huggingface.co/docs/datasets/load_hub#splits"),c(U,"rel","nofollow"),c(K,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),c(K,"rel","nofollow"),c(J,"href","https://huggingface.co/datasets/mozilla-foundation/common_voice_10_0"),c(J,"rel","nofollow"),c(F,"href","https://huggingface.co/datasets/glue"),c(F,"rel","nofollow"),c(Q,"href","https://huggingface.co/docs/datasets"),c(Q,"rel","nofollow"),c(ds,"align","left"),c(Ss,"align","left"),c(W,"align","left"),c(S,"align","left"),c(Z,"href","https://huggingface.co/datasets/splits?dataset=duorc"),c(Z,"rel","nofollow"),c(ss,"href","https://www.postman.com/huggingface/workspace/hugging-face-apis/request/23242779-f0cde3b9-c2ee-4062-aaca-65c4cfdd96f8"),c(ss,"rel","nofollow"),c(ts,"href","https://rapidapi.com/hugging-face-hugging-face-default/api/hugging-face-datasets-api"),c(ts,"rel","nofollow"),c(as,"href","https://redocly.github.io/redoc/?url=https://datasets-server.huggingface.co/openapi.json#operation/listSplits"),c(as,"rel","nofollow"),c(es,"href","https://huggingface.co/docs/hub/datasets-gated"),c(es,"rel","nofollow"),c(ms,"align","left"),c(Ls,"align","left"),c(gs,"align","left"),c(js,"align","left"),c(_s,"align","left"),c(qs,"align","left"),c(vs,"align","left"),c($s,"align","left"),c(Es,"align","left"),c(L,"align","left"),c(ys,"align","left"),c(B,"align","left"),c(cs,"href","https://huggingface.co/datasets/duorc"),c(cs,"rel","nofollow")},m(t,h){s(document.head,u),g(t,i,h),g(t,e,h),s(e,f),s(f,_),A(M,_,null),s(e,wt),s(e,bs),s(bs,Tt),g(t,Vs,h),g(t,q,h),s(q,kt),s(q,ws),s(ws,U),s(U,At),s(q,Rt),s(q,Ts),s(Ts,Pt),s(q,xt),s(q,ks),s(ks,St),s(q,Dt),s(q,As),s(As,Ot),s(q,Ct),g(t,Xs,h),g(t,E,h),s(E,Nt),s(E,Rs),s(Rs,K),s(K,It),s(E,Gt),s(E,J),s(J,Lt),s(E,Bt),s(E,F),s(F,zt),s(E,Ht),g(t,Ys,h),g(t,D,h),s(D,Mt),s(D,Q),s(Q,Ut),s(D,Kt),g(t,Ws,h),g(t,O,h),s(O,Jt),s(O,Ps),s(Ps,Ft),s(O,Qt),g(t,Zs,h),A(V,t,h),g(t,st,h),g(t,fs,h),s(fs,Vt),g(t,tt,h),g(t,C,h),s(C,xs),s(xs,X),s(X,ds),s(ds,Xt),s(X,Yt),s(X,Ss),s(C,Wt),s(C,Ds),s(Ds,Y),s(Y,W),s(W,Os),s(Os,Zt),s(W,sa),s(Y,ta),s(Y,S),s(S,aa),s(S,Cs),s(Cs,ea),s(S,na),s(S,Ns),s(Ns,la),g(t,at,h),g(t,j,h),s(j,oa),s(j,Z),s(Z,ra),s(j,pa),s(j,ss),s(ss,ua),s(j,ca),s(j,ts),s(ts,ia),s(j,ha),s(j,as),s(as,fa),s(j,da),s(j,es),s(es,ma),s(j,ga),g(t,et,h),A(N,t,h),g(t,nt,h),g(t,I,h),s(I,ja),s(I,Is),s(Is,_a),s(I,qa),g(t,lt,h),g(t,G,h),s(G,Gs),s(Gs,ns),s(ns,ms),s(ms,va),s(ns,$a),s(ns,Ls),s(G,Ea),s(G,v),s(v,ls),s(ls,gs),s(gs,Bs),s(Bs,ya),s(ls,ba),s(ls,js),s(js,wa),s(v,Ta),s(v,os),s(os,_s),s(_s,zs),s(zs,ka),s(os,Aa),s(os,qs),s(qs,Ra),s(v,Pa),s(v,rs),s(rs,vs),s(vs,Hs),s(Hs,xa),s(rs,Sa),s(rs,$s),s($s,Da),s(v,Oa),s(v,ps),s(ps,Es),s(Es,Ms),s(Ms,Ca),s(ps,Na),s(ps,L),s(L,Ia),s(L,Us),s(Us,Ga),s(L,La),s(v,Ba),s(v,us),s(us,ys),s(ys,Ks),s(Ks,za),s(us,Ha),s(us,B),s(B,Ma),s(B,Js),s(Js,Ua),s(B,Ka),g(t,ot,h),g(t,z,h),s(z,Ja),s(z,cs),s(cs,Fa),s(z,Qa),g(t,rt,h),A(is,t,h),pt=!0},p(t,[h]){const hs={};h&2&&(hs.$$scope={dirty:h,ctx:t}),N.$set(hs)},i(t){pt||(R(M.$$.fragment,t),R(V.$$.fragment,t),R(N.$$.fragment,t),R(is.$$.fragment,t),pt=!0)},o(t){P(M.$$.fragment,t),P(V.$$.fragment,t),P(N.$$.fragment,t),P(is.$$.fragment,t),pt=!1},d(t){a(u),t&&a(i),t&&a(e),x(M),t&&a(Vs),t&&a(q),t&&a(Xs),t&&a(E),t&&a(Ys),t&&a(D),t&&a(Ws),t&&a(O),t&&a(Zs),x(V,t),t&&a(st),t&&a(fs),t&&a(tt),t&&a(C),t&&a(at),t&&a(j),t&&a(et),x(N,t),t&&a(nt),t&&a(I),t&&a(lt),t&&a(G),t&&a(ot),t&&a(z),t&&a(rt),x(is,t)}}}const en={local:"splits",title:"Splits"};function nn($){return Fe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pn extends Me{constructor(u){super();Ue(this,u,nn,an,Ke,{})}}export{pn as default,en as metadata};
