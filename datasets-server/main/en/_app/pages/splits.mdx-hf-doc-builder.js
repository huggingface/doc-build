import{S as Me,i as Ue,s as Ke,e as n,k as d,w as T,t as r,M as Je,c as l,d as a,m as g,a as o,x as A,h as p,b as c,G as s,g as m,y as R,q as k,o as P,B as x,v as Fe,L as Xa}from"../chunks/vendor-hf-doc-builder.js";import{I as Qe,C as Qs}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as Ve,M as Ya}from"../chunks/InferenceApi-hf-doc-builder.js";function Xe($){let u,i;return u=new Qs({props:{code:`import requests
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
data = query()`}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p:Xa,i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function Ye($){let u,i;return u=new Ya({props:{$$slots:{default:[Xe]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function We($){let u,i;return u=new Qs({props:{code:`import fetch from "node-fetch";
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
});`}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p:Xa,i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function Ze($){let u,i;return u=new Ya({props:{$$slots:{default:[We]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function sn($){let u,i;return u=new Qs({props:{code:`curl https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H "Authorization: Bearer \${API_TOKEN}"`,highlighted:`<span class="hljs-attribute">curl</span> https://datasets-server.huggingface.co/splits?dataset=duorc \\
        -X GET \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>`}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p:Xa,i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function tn($){let u,i;return u=new Ya({props:{$$slots:{default:[sn]},$$scope:{ctx:$}}}),{c(){T(u.$$.fragment)},l(e){A(u.$$.fragment,e)},m(e,f){R(u,e,f),i=!0},p(e,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:e}),u.$set(_)},i(e){i||(k(u.$$.fragment,e),i=!0)},o(e){P(u.$$.fragment,e),i=!1},d(e){x(u,e)}}}function an($){let u,i,e,f,_,M,wt,bs,Tt,Vs,q,At,ws,U,Rt,kt,Ts,Pt,xt,As,St,Dt,Rs,Ot,Ct,Xs,E,Nt,ks,K,It,Gt,J,Lt,Bt,F,zt,Ht,Ys,D,Mt,Q,Ut,Kt,Ws,O,Jt,Ps,Ft,Qt,Zs,V,st,fs,Vt,tt,C,xs,X,ds,Xt,Yt,Ss,Wt,Ds,Y,W,Os,Zt,sa,ta,S,aa,Cs,ea,na,Ns,la,at,j,oa,Z,ra,pa,ss,ua,ca,ts,ia,ha,as,fa,da,es,ga,ma,et,N,nt,I,ja,Is,_a,qa,lt,G,Gs,ns,gs,va,$a,Ls,Ea,v,ls,ms,Bs,ya,ba,js,wa,Ta,os,_s,zs,Aa,Ra,qs,ka,Pa,rs,vs,Hs,xa,Sa,$s,Da,Oa,ps,Es,Ms,Ca,Na,L,Ia,Us,Ga,La,Ba,us,ys,Ks,za,Ha,B,Ma,Js,Ua,Ka,ot,z,Ja,cs,Fa,Qa,rt,is,pt;return M=new Qe({}),V=new Qs({props:{code:"https://datasets-server.huggingface.co/splits?dataset={dataset}",highlighted:'https:<span class="hljs-regexp">//</span>datasets-server.huggingface.co/splits?dataset={dataset}'}}),N=new Ve({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[tn],js:[Ze],python:[Ye]},$$scope:{ctx:$}}}),is=new Qs({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),{c(){u=n("meta"),i=d(),e=n("h1"),f=n("a"),_=n("span"),T(M.$$.fragment),wt=d(),bs=n("span"),Tt=r("Splits"),Vs=d(),q=n("p"),At=r("The datasets aimed at training and evaluating a Machine Learning model are generally divided into multiple "),ws=n("em"),U=n("a"),Rt=r("splits"),kt=r(", for example "),Ts=n("code"),Pt=r("train"),xt=r(", "),As=n("code"),St=r("test"),Dt=r(" and "),Rs=n("code"),Ot=r("validation"),Ct=r("."),Xs=d(),E=n("p"),Nt=r("Some datasets also use "),ks=n("em"),K=n("a"),It=r("configurations"),Gt=r(" (sub-datasets) to group similar examples: "),J=n("a"),Lt=r("CommonVoice"),Bt=r("\u2019s configurations embed the audio recordings of each language ; "),F=n("a"),zt=r("GLUE"),Ht=r(" provides one configuration for every evaluation task."),Ys=d(),D=n("p"),Mt=r("Read more in depth about the concepts in the "),Q=n("a"),Ut=r("\u{1F917} Datasets library documentation"),Kt=r("."),Ws=d(),O=n("p"),Jt=r("The /splits endpoints gives the "),Ps=n("strong"),Ft=r("list of configurations and splits"),Qt=r(" of a dataset."),Zs=d(),T(V.$$.fragment),st=d(),fs=n("p"),Vt=r("The endpoint takes one query parameter:"),tt=d(),C=n("table"),xs=n("thead"),X=n("tr"),ds=n("th"),Xt=r("Query parameter"),Yt=d(),Ss=n("th"),Wt=d(),Ds=n("tbody"),Y=n("tr"),W=n("td"),Os=n("strong"),Zt=r("dataset"),sa=r(" (required)"),ta=d(),S=n("td"),aa=r("the dataset name, for example "),Cs=n("code"),ea=r("glue"),na=r(" or "),Ns=n("code"),la=r("mozilla-foundation/common_voice_10_0"),at=d(),j=n("p"),oa=r("Try it in your "),Z=n("a"),ra=r("browser"),pa=r(", with "),ss=n("a"),ua=r("Postman"),ca=r(", with "),ts=n("a"),ia=r("RapidAPI"),ha=r(", with "),as=n("a"),fa=r("ReDoc"),da=r(", or programmatically. Pass your API token if you query a "),es=n("a"),ga=r("gated dataset"),ma=r("."),et=d(),T(N.$$.fragment),nt=d(),I=n("p"),ja=r("The response is a JSON. The list of splits is nested under the "),Is=n("code"),_a=r("splits"),qa=r(" key. The fields of every split are:"),lt=d(),G=n("table"),Gs=n("thead"),ns=n("tr"),gs=n("th"),va=r("Response: split fields"),$a=d(),Ls=n("th"),Ea=d(),v=n("tbody"),ls=n("tr"),ms=n("td"),Bs=n("strong"),ya=r("dataset"),ba=d(),js=n("td"),wa=r("the name of the dataset"),Ta=d(),os=n("tr"),_s=n("td"),zs=n("strong"),Aa=r("config"),Ra=d(),qs=n("td"),ka=r("the name of the configuration"),Pa=d(),rs=n("tr"),vs=n("td"),Hs=n("strong"),xa=r("split"),Sa=d(),$s=n("td"),Da=r("the name of the split"),Oa=d(),ps=n("tr"),Es=n("td"),Ms=n("strong"),Ca=r("num_bytes"),Na=d(),L=n("td"),Ia=r("the size in bytes (can be "),Us=n("code"),Ga=r("null"),La=r(")"),Ba=d(),us=n("tr"),ys=n("td"),Ks=n("strong"),za=r("num_examples"),Ha=d(),B=n("td"),Ma=r("the number of examples (can be "),Js=n("code"),Ua=r("null"),Ka=r(")"),ot=d(),z=n("p"),Ja=r("For example, the "),cs=n("a"),Fa=r("duorc"),Qa=r(" dataset has six splits and two configurations:"),rt=d(),T(is.$$.fragment),this.h()},l(t){const h=Je('[data-svelte="svelte-1phssyn"]',document.head);u=l(h,"META",{name:!0,content:!0}),h.forEach(a),i=g(t),e=l(t,"H1",{class:!0});var hs=o(e);f=l(hs,"A",{id:!0,class:!0,href:!0});var Wa=o(f);_=l(Wa,"SPAN",{});var Za=o(_);A(M.$$.fragment,Za),Za.forEach(a),Wa.forEach(a),wt=g(hs),bs=l(hs,"SPAN",{});var se=o(bs);Tt=p(se,"Splits"),se.forEach(a),hs.forEach(a),Vs=g(t),q=l(t,"P",{});var b=o(q);At=p(b,"The datasets aimed at training and evaluating a Machine Learning model are generally divided into multiple "),ws=l(b,"EM",{});var te=o(ws);U=l(te,"A",{href:!0,rel:!0});var ae=o(U);Rt=p(ae,"splits"),ae.forEach(a),te.forEach(a),kt=p(b,", for example "),Ts=l(b,"CODE",{});var ee=o(Ts);Pt=p(ee,"train"),ee.forEach(a),xt=p(b,", "),As=l(b,"CODE",{});var ne=o(As);St=p(ne,"test"),ne.forEach(a),Dt=p(b," and "),Rs=l(b,"CODE",{});var le=o(Rs);Ot=p(le,"validation"),le.forEach(a),Ct=p(b,"."),b.forEach(a),Xs=g(t),E=l(t,"P",{});var H=o(E);Nt=p(H,"Some datasets also use "),ks=l(H,"EM",{});var oe=o(ks);K=l(oe,"A",{href:!0,rel:!0});var re=o(K);It=p(re,"configurations"),re.forEach(a),oe.forEach(a),Gt=p(H," (sub-datasets) to group similar examples: "),J=l(H,"A",{href:!0,rel:!0});var pe=o(J);Lt=p(pe,"CommonVoice"),pe.forEach(a),Bt=p(H,"\u2019s configurations embed the audio recordings of each language ; "),F=l(H,"A",{href:!0,rel:!0});var ue=o(F);zt=p(ue,"GLUE"),ue.forEach(a),Ht=p(H," provides one configuration for every evaluation task."),H.forEach(a),Ys=g(t),D=l(t,"P",{});var ut=o(D);Mt=p(ut,"Read more in depth about the concepts in the "),Q=l(ut,"A",{href:!0,rel:!0});var ce=o(Q);Ut=p(ce,"\u{1F917} Datasets library documentation"),ce.forEach(a),Kt=p(ut,"."),ut.forEach(a),Ws=g(t),O=l(t,"P",{});var ct=o(O);Jt=p(ct,"The /splits endpoints gives the "),Ps=l(ct,"STRONG",{});var ie=o(Ps);Ft=p(ie,"list of configurations and splits"),ie.forEach(a),Qt=p(ct," of a dataset."),ct.forEach(a),Zs=g(t),A(V.$$.fragment,t),st=g(t),fs=l(t,"P",{});var he=o(fs);Vt=p(he,"The endpoint takes one query parameter:"),he.forEach(a),tt=g(t),C=l(t,"TABLE",{});var it=o(C);xs=l(it,"THEAD",{});var fe=o(xs);X=l(fe,"TR",{});var ht=o(X);ds=l(ht,"TH",{align:!0});var de=o(ds);Xt=p(de,"Query parameter"),de.forEach(a),Yt=g(ht),Ss=l(ht,"TH",{align:!0}),o(Ss).forEach(a),ht.forEach(a),fe.forEach(a),Wt=g(it),Ds=l(it,"TBODY",{});var ge=o(Ds);Y=l(ge,"TR",{});var ft=o(Y);W=l(ft,"TD",{align:!0});var Va=o(W);Os=l(Va,"STRONG",{});var me=o(Os);Zt=p(me,"dataset"),me.forEach(a),sa=p(Va," (required)"),Va.forEach(a),ta=g(ft),S=l(ft,"TD",{align:!0});var Fs=o(S);aa=p(Fs,"the dataset name, for example "),Cs=l(Fs,"CODE",{});var je=o(Cs);ea=p(je,"glue"),je.forEach(a),na=p(Fs," or "),Ns=l(Fs,"CODE",{});var _e=o(Ns);la=p(_e,"mozilla-foundation/common_voice_10_0"),_e.forEach(a),Fs.forEach(a),ft.forEach(a),ge.forEach(a),it.forEach(a),at=g(t),j=l(t,"P",{});var y=o(j);oa=p(y,"Try it in your "),Z=l(y,"A",{href:!0,rel:!0});var qe=o(Z);ra=p(qe,"browser"),qe.forEach(a),pa=p(y,", with "),ss=l(y,"A",{href:!0,rel:!0});var ve=o(ss);ua=p(ve,"Postman"),ve.forEach(a),ca=p(y,", with "),ts=l(y,"A",{href:!0,rel:!0});var $e=o(ts);ia=p($e,"RapidAPI"),$e.forEach(a),ha=p(y,", with "),as=l(y,"A",{href:!0,rel:!0});var Ee=o(as);fa=p(Ee,"ReDoc"),Ee.forEach(a),da=p(y,", or programmatically. Pass your API token if you query a "),es=l(y,"A",{href:!0,rel:!0});var ye=o(es);ga=p(ye,"gated dataset"),ye.forEach(a),ma=p(y,"."),y.forEach(a),et=g(t),A(N.$$.fragment,t),nt=g(t),I=l(t,"P",{});var dt=o(I);ja=p(dt,"The response is a JSON. The list of splits is nested under the "),Is=l(dt,"CODE",{});var be=o(Is);_a=p(be,"splits"),be.forEach(a),qa=p(dt," key. The fields of every split are:"),dt.forEach(a),lt=g(t),G=l(t,"TABLE",{});var gt=o(G);Gs=l(gt,"THEAD",{});var we=o(Gs);ns=l(we,"TR",{});var mt=o(ns);gs=l(mt,"TH",{align:!0});var Te=o(gs);va=p(Te,"Response: split fields"),Te.forEach(a),$a=g(mt),Ls=l(mt,"TH",{align:!0}),o(Ls).forEach(a),mt.forEach(a),we.forEach(a),Ea=g(gt),v=l(gt,"TBODY",{});var w=o(v);ls=l(w,"TR",{});var jt=o(ls);ms=l(jt,"TD",{align:!0});var Ae=o(ms);Bs=l(Ae,"STRONG",{});var Re=o(Bs);ya=p(Re,"dataset"),Re.forEach(a),Ae.forEach(a),ba=g(jt),js=l(jt,"TD",{align:!0});var ke=o(js);wa=p(ke,"the name of the dataset"),ke.forEach(a),jt.forEach(a),Ta=g(w),os=l(w,"TR",{});var _t=o(os);_s=l(_t,"TD",{align:!0});var Pe=o(_s);zs=l(Pe,"STRONG",{});var xe=o(zs);Aa=p(xe,"config"),xe.forEach(a),Pe.forEach(a),Ra=g(_t),qs=l(_t,"TD",{align:!0});var Se=o(qs);ka=p(Se,"the name of the configuration"),Se.forEach(a),_t.forEach(a),Pa=g(w),rs=l(w,"TR",{});var qt=o(rs);vs=l(qt,"TD",{align:!0});var De=o(vs);Hs=l(De,"STRONG",{});var Oe=o(Hs);xa=p(Oe,"split"),Oe.forEach(a),De.forEach(a),Sa=g(qt),$s=l(qt,"TD",{align:!0});var Ce=o($s);Da=p(Ce,"the name of the split"),Ce.forEach(a),qt.forEach(a),Oa=g(w),ps=l(w,"TR",{});var vt=o(ps);Es=l(vt,"TD",{align:!0});var Ne=o(Es);Ms=l(Ne,"STRONG",{});var Ie=o(Ms);Ca=p(Ie,"num_bytes"),Ie.forEach(a),Ne.forEach(a),Na=g(vt),L=l(vt,"TD",{align:!0});var $t=o(L);Ia=p($t,"the size in bytes (can be "),Us=l($t,"CODE",{});var Ge=o(Us);Ga=p(Ge,"null"),Ge.forEach(a),La=p($t,")"),$t.forEach(a),vt.forEach(a),Ba=g(w),us=l(w,"TR",{});var Et=o(us);ys=l(Et,"TD",{align:!0});var Le=o(ys);Ks=l(Le,"STRONG",{});var Be=o(Ks);za=p(Be,"num_examples"),Be.forEach(a),Le.forEach(a),Ha=g(Et),B=l(Et,"TD",{align:!0});var yt=o(B);Ma=p(yt,"the number of examples (can be "),Js=l(yt,"CODE",{});var ze=o(Js);Ua=p(ze,"null"),ze.forEach(a),Ka=p(yt,")"),yt.forEach(a),Et.forEach(a),w.forEach(a),gt.forEach(a),ot=g(t),z=l(t,"P",{});var bt=o(z);Ja=p(bt,"For example, the "),cs=l(bt,"A",{href:!0,rel:!0});var He=o(cs);Fa=p(He,"duorc"),He.forEach(a),Qa=p(bt," dataset has six splits and two configurations:"),bt.forEach(a),rt=g(t),A(is.$$.fragment,t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(en)),c(f,"id","splits"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#splits"),c(e,"class","relative group"),c(U,"href","https://huggingface.co/docs/datasets/load_hub#splits"),c(U,"rel","nofollow"),c(K,"href","https://huggingface.co/docs/datasets/load_hub#configurations"),c(K,"rel","nofollow"),c(J,"href","https://huggingface.co/datasets/mozilla-foundation/common_voice_10_0"),c(J,"rel","nofollow"),c(F,"href","https://huggingface.co/datasets/glue"),c(F,"rel","nofollow"),c(Q,"href","https://huggingface.co/docs/datasets"),c(Q,"rel","nofollow"),c(ds,"align","left"),c(Ss,"align","left"),c(W,"align","left"),c(S,"align","left"),c(Z,"href","https://huggingface.co/datasets/splits?dataset=duorc"),c(Z,"rel","nofollow"),c(ss,"href","https://www.postman.com/huggingface/workspace/hugging-face-apis/request/23242779-f0cde3b9-c2ee-4062-aaca-65c4cfdd96f8"),c(ss,"rel","nofollow"),c(ts,"href","https://rapidapi.com/hugging-face-hugging-face-default/api/hugging-face-datasets-api"),c(ts,"rel","nofollow"),c(as,"href","https://redocly.github.io/redoc/?url=https://datasets-server.huggingface.co/openapi.json#operation/listSplits"),c(as,"rel","nofollow"),c(es,"href","https://huggingface.co/docs/hub/datasets-gated"),c(es,"rel","nofollow"),c(gs,"align","left"),c(Ls,"align","left"),c(ms,"align","left"),c(js,"align","left"),c(_s,"align","left"),c(qs,"align","left"),c(vs,"align","left"),c($s,"align","left"),c(Es,"align","left"),c(L,"align","left"),c(ys,"align","left"),c(B,"align","left"),c(cs,"href","https://huggingface.co/datasets/duorc"),c(cs,"rel","nofollow")},m(t,h){s(document.head,u),m(t,i,h),m(t,e,h),s(e,f),s(f,_),R(M,_,null),s(e,wt),s(e,bs),s(bs,Tt),m(t,Vs,h),m(t,q,h),s(q,At),s(q,ws),s(ws,U),s(U,Rt),s(q,kt),s(q,Ts),s(Ts,Pt),s(q,xt),s(q,As),s(As,St),s(q,Dt),s(q,Rs),s(Rs,Ot),s(q,Ct),m(t,Xs,h),m(t,E,h),s(E,Nt),s(E,ks),s(ks,K),s(K,It),s(E,Gt),s(E,J),s(J,Lt),s(E,Bt),s(E,F),s(F,zt),s(E,Ht),m(t,Ys,h),m(t,D,h),s(D,Mt),s(D,Q),s(Q,Ut),s(D,Kt),m(t,Ws,h),m(t,O,h),s(O,Jt),s(O,Ps),s(Ps,Ft),s(O,Qt),m(t,Zs,h),R(V,t,h),m(t,st,h),m(t,fs,h),s(fs,Vt),m(t,tt,h),m(t,C,h),s(C,xs),s(xs,X),s(X,ds),s(ds,Xt),s(X,Yt),s(X,Ss),s(C,Wt),s(C,Ds),s(Ds,Y),s(Y,W),s(W,Os),s(Os,Zt),s(W,sa),s(Y,ta),s(Y,S),s(S,aa),s(S,Cs),s(Cs,ea),s(S,na),s(S,Ns),s(Ns,la),m(t,at,h),m(t,j,h),s(j,oa),s(j,Z),s(Z,ra),s(j,pa),s(j,ss),s(ss,ua),s(j,ca),s(j,ts),s(ts,ia),s(j,ha),s(j,as),s(as,fa),s(j,da),s(j,es),s(es,ga),s(j,ma),m(t,et,h),R(N,t,h),m(t,nt,h),m(t,I,h),s(I,ja),s(I,Is),s(Is,_a),s(I,qa),m(t,lt,h),m(t,G,h),s(G,Gs),s(Gs,ns),s(ns,gs),s(gs,va),s(ns,$a),s(ns,Ls),s(G,Ea),s(G,v),s(v,ls),s(ls,ms),s(ms,Bs),s(Bs,ya),s(ls,ba),s(ls,js),s(js,wa),s(v,Ta),s(v,os),s(os,_s),s(_s,zs),s(zs,Aa),s(os,Ra),s(os,qs),s(qs,ka),s(v,Pa),s(v,rs),s(rs,vs),s(vs,Hs),s(Hs,xa),s(rs,Sa),s(rs,$s),s($s,Da),s(v,Oa),s(v,ps),s(ps,Es),s(Es,Ms),s(Ms,Ca),s(ps,Na),s(ps,L),s(L,Ia),s(L,Us),s(Us,Ga),s(L,La),s(v,Ba),s(v,us),s(us,ys),s(ys,Ks),s(Ks,za),s(us,Ha),s(us,B),s(B,Ma),s(B,Js),s(Js,Ua),s(B,Ka),m(t,ot,h),m(t,z,h),s(z,Ja),s(z,cs),s(cs,Fa),s(z,Qa),m(t,rt,h),R(is,t,h),pt=!0},p(t,[h]){const hs={};h&2&&(hs.$$scope={dirty:h,ctx:t}),N.$set(hs)},i(t){pt||(k(M.$$.fragment,t),k(V.$$.fragment,t),k(N.$$.fragment,t),k(is.$$.fragment,t),pt=!0)},o(t){P(M.$$.fragment,t),P(V.$$.fragment,t),P(N.$$.fragment,t),P(is.$$.fragment,t),pt=!1},d(t){a(u),t&&a(i),t&&a(e),x(M),t&&a(Vs),t&&a(q),t&&a(Xs),t&&a(E),t&&a(Ys),t&&a(D),t&&a(Ws),t&&a(O),t&&a(Zs),x(V,t),t&&a(st),t&&a(fs),t&&a(tt),t&&a(C),t&&a(at),t&&a(j),t&&a(et),x(N,t),t&&a(nt),t&&a(I),t&&a(lt),t&&a(G),t&&a(ot),t&&a(z),t&&a(rt),x(is,t)}}}const en={local:"splits",title:"Splits"};function nn($){return Fe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pn extends Me{constructor(u){super();Ue(this,u,nn,an,Ke,{})}}export{pn as default,en as metadata};
