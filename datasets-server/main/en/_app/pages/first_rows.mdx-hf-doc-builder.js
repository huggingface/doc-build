import{S as Yt,i as Qt,s as Zt,e as p,k as j,w as b,t as l,M as sn,c as u,d as t,m as q,a as c,x as E,h as o,b as m,P as an,G as a,g as h,y as k,q as T,o as x,B as D,v as tn,L as ua}from"../chunks/vendor-hf-doc-builder.js";import{T as nn,I as en,M as jt}from"../chunks/InferenceApi-hf-doc-builder.js";import{I as Xt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ps}from"../chunks/CodeBlock-hf-doc-builder.js";function ln(w){let e,i=" ",n,d,g,M,I;return{c(){e=l("Currently, only "),n=l(i),d=j(),g=p("a"),M=l("streamable"),I=l(` datasets
  are supported so Datasets Server can extract the first 100 rows without downloading the
  whole dataset. This is especially useful for large datasets where downloading
  an entire dataset may take hours!`),this.h()},l(f){e=o(f,"Currently, only "),n=o(f,i),d=q(f),g=u(f,"A",{href:!0});var v=c(g);M=o(v,"streamable"),v.forEach(t),I=o(f,` datasets
  are supported so Datasets Server can extract the first 100 rows without downloading the
  whole dataset. This is especially useful for large datasets where downloading
  an entire dataset may take hours!`),this.h()},h(){m(g,"href","https://huggingface.co/docs/datasets/stream")},m(f,v){h(f,e,v),h(f,n,v),h(f,d,v),h(f,g,v),a(g,M),h(f,I,v)},p:ua,d(f){f&&t(e),f&&t(n),f&&t(d),f&&t(g),f&&t(I)}}}function on(w){let e,i;return e=new Ps({props:{code:`import requests
headers = {"Authorization": f"Bearer {API_TOKEN}"}
API_URL = "https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train"
def query():
    response = requests.request("GET", API_URL, headers=headers)
    return response.json()
data = query()`,highlighted:`<span class="hljs-keyword">import</span> requests
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
API_URL = <span class="hljs-string">&quot;https://datasets-server.huggingface.co/first-rows?dataset=duorc&amp;config=SelfRC&amp;split=train&quot;</span>
<span class="hljs-keyword">def</span> <span class="hljs-title function_">query</span>():
    response = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, API_URL, headers=headers)
    <span class="hljs-keyword">return</span> response.json()
data = query()`}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p:ua,i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function pn(w){let e,i;return e=new jt({props:{$$slots:{default:[on]},$$scope:{ctx:w}}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p(n,d){const g={};d&2&&(g.$$scope={dirty:d,ctx:n}),e.$set(g)},i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function un(w){let e,i;return e=new Ps({props:{code:`import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train",
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
        <span class="hljs-string">&quot;https://datasets-server.huggingface.co/first-rows?dataset=duorc&amp;config=SelfRC&amp;split=train&quot;</span>,
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
});`}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p:ua,i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function cn(w){let e,i;return e=new jt({props:{$$slots:{default:[un]},$$scope:{ctx:w}}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p(n,d){const g={};d&2&&(g.$$scope={dirty:d,ctx:n}),e.$set(g)},i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function rn(w){let e,i;return e=new Ps({props:{code:`curl https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train \\
        -X GET \\
        -H "Authorization: Bearer \${API_TOKEN}"`,highlighted:`curl https://datasets-server.huggingface.co/first-rows?dataset=duorc&amp;config=SelfRC&amp;<span class="hljs-built_in">split</span>=train \\
        -X GET \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>`}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p:ua,i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function hn(w){let e,i;return e=new jt({props:{$$slots:{default:[rn]},$$scope:{ctx:w}}}),{c(){b(e.$$.fragment)},l(n){E(e.$$.fragment,n)},m(n,d){k(e,n,d),i=!0},p(n,d){const g={};d&2&&(g.$$scope={dirty:d,ctx:n}),e.$set(g)},i(n){i||(T(e.$$.fragment,n),i=!0)},o(n){x(e.$$.fragment,n),i=!1},d(n){D(e,n)}}}function dn(w){let e,i,n,d,g,M,I,f,v,Ss,z,ca,rs,ra,ia,Is,ls,os,qt,zs,H,Hs,y,ha,is,da,fa,U,ja,qa,K,ma,ga,W,wa,ya,Rs,R,_a,hs,va,$a,Ns,C,P,ds,ba,Ea,fs,ka,Ta,js,xa,Da,J,qs,Ma,Ca,ms,Oa,Aa,X,gs,Pa,Sa,ws,Ia,Bs,N,Ls,ps,za,Vs,B,Y,Ha,Q,ys,Ra,Na,Ba,Z,La,_s,Va,Ga,Gs,_,Fa,vs,Ua,Ka,$s,Wa,Ja,bs,Xa,Ya,Es,Qa,Za,Fs,ss,Us,S,L,ks,as,st,Ts,at,Ks,V,tt,xs,nt,et,Ws,G,lt,Ds,ot,pt,Js,$,ut,ts,Ms,ct,rt,Cs,it,ht,Os,dt,ft,Xs,ns,Ys;return M=new Xt({}),H=new nn({props:{warning:!0,$$slots:{default:[ln]},$$scope:{ctx:w}}}),N=new en({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[hn],js:[cn],python:[pn]},$$scope:{ctx:w}}}),ss=new Ps({props:{code:`{
  "dataset": "duorc",
  "config": "SelfRC",
  "split": "train",
  "features": [
    {
      "feature_idx": 0,
      "name": "plot_id",
      "type": { "dtype": "string", "id": null, "_type": "Value" }
    },
    {
      "feature_idx": 1,
      "name": "plot",
      "type": { "dtype": "string", "id": null, "_type": "Value" }
    },
    {
      "feature_idx": 2,
      "name": "title",
      "type": { "dtype": "string", "id": null, "_type": "Value" }
    },
    {
      "feature_idx": 3,
      "name": "question_id",
      "type": { "dtype": "string", "id": null, "_type": "Value" }
    },
    {
      "feature_idx": 4,
      "name": "question",
      "type": { "dtype": "string", "id": null, "_type": "Value" }
    },
    {
      "feature_idx": 5,
      "name": "answers",
      "type": {
        "feature": { "dtype": "string", "id": null, "_type": "Value" },
        "length": -1,
        "id": null,
        "_type": "Sequence"
      }
    },
    {
      "feature_idx": 6,
      "name": "no_answer",
      "type": { "dtype": "bool", "id": null, "_type": "Value" }
    }
  ],
  "rows": [
    {
      "row_idx": 0,
      "row": {
        "plot_id": "/m/03vyhn",
        "plot": "200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She's not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won't ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.",
        "title": "Ghosts of Mars",
        "question_id": "b440de7d-9c3f-841c-eaec-a14bdff950d1",
        "question": "How did the police arrive at the Mars mining camp?",
        "answers": ["They arrived by train."],
        "no_answer": false
      },
      "truncated_cells": []
    },
    {
      "row_idx": 1,
      "row": {
        "plot_id": "/m/03vyhn",
        "plot": "200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She's not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won't ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.",
        "title": "Ghosts of Mars",
        "question_id": "a9f95c0d-121f-3ca9-1595-d497dc8bc56c",
        "question": "Who has colonized Mars 200 years in the future?",
        "answers": [
          "A high-tech company has colonized Mars 200 years in the future."
        ],
        "no_answer": false
      },
      "truncated_cells": []
    }
    ...
  ]
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;features&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot_id&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;title&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question_id&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;answers&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;feature&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;string&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;length&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">-1</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Sequence&quot;</span>
      <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;feature_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">6</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;no_answer&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;dtype&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;bool&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">null</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;_type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Value&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;plot_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/m/03vyhn&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;plot&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She&#x27;s not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won&#x27;t ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Ghosts of Mars&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;b440de7d-9c3f-841c-eaec-a14bdff950d1&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;How did the police arrive at the Mars mining camp?&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;answers&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;They arrived by train.&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;no_answer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;plot_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/m/03vyhn&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;plot&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;200 years in the future, Mars has been colonized by a high-tech company.\\nMelanie Ballard (Natasha Henstridge) arrives by train to a Mars mining camp which has cut all communication links with the company headquarters. She&#x27;s not alone, as she is with a group of fellow police officers. They find the mining camp deserted except for a person in the prison, Desolation Williams (Ice Cube), who seems to laugh about them because they are all going to die. They were supposed to take Desolation to headquarters, but decide to explore first to find out what happened.They find a man inside an encapsulated mining car, who tells them not to open it. However, they do and he tries to kill them. One of the cops witnesses strange men with deep scarred and heavily tattooed faces killing the remaining survivors. The cops realise they need to leave the place fast.Desolation explains that the miners opened a kind of Martian construction in the soil which unleashed red dust. Those who breathed that dust became violent psychopaths who started to build weapons and kill the uninfected. They changed genetically, becoming distorted but much stronger.The cops and Desolation leave the prison with difficulty, and devise a plan to kill all the genetically modified ex-miners on the way out. However, the plan goes awry, and only Melanie and Desolation reach headquarters alive. Melanie realises that her bosses won&#x27;t ever believe her. However, the red dust eventually arrives to headquarters, and Melanie and Desolation need to fight once again.&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;title&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Ghosts of Mars&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;a9f95c0d-121f-3ca9-1595-d497dc8bc56c&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;question&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Who has colonized Mars 200 years in the future?&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;answers&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
          <span class="hljs-string">&quot;A high-tech company has colonized Mars 200 years in the future.&quot;</span>
        <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;no_answer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span>
    ...
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>`}}),as=new Xt({}),ns=new Ps({props:{code:`  ...
  "rows": [
    {
      "row_idx": 0,
      "row": {
        "start": "2016-07-01T00:00:00",
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    },
    {
      "row_idx": 1,
      "row": {
        "start": "2016-07-01T00:00:00",
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    },
  ...`,highlighted:`  ...
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-07-01T00:00:00&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;2016-07-01T00:00:00&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  ...`}}),{c(){e=p("meta"),i=j(),n=p("h1"),d=p("a"),g=p("span"),b(M.$$.fragment),I=j(),f=p("span"),v=l("Preview a dataset"),Ss=j(),z=p("p"),ca=l("Datasets Server provides a "),rs=p("code"),ra=l("/first-rows"),ia=l(" endpoint for visualizing the first 100 rows of a dataset. This\u2019ll give you a good idea of the data types and example data contained in a dataset."),Is=j(),ls=p("p"),os=p("img"),zs=j(),b(H.$$.fragment),Hs=j(),y=p("p"),ha=l("This guide shows you how to use Datasets Server\u2019s "),is=p("code"),da=l("/first-rows"),fa=l(" endpoint to preview a dataset. Feel free to also try it out with "),U=p("a"),ja=l("Postman"),qa=l(", "),K=p("a"),ma=l("RapidAPI"),ga=l(", or "),W=p("a"),wa=l("ReDoc"),ya=l("."),Rs=j(),R=p("p"),_a=l("The "),hs=p("code"),va=l("/first-rows"),$a=l(" endpoint accepts three query parameters:"),Ns=j(),C=p("ul"),P=p("li"),ds=p("code"),ba=l("dataset"),Ea=l(": the dataset name, for example "),fs=p("code"),ka=l("glue"),Ta=l(" or "),js=p("code"),xa=l("mozilla-foundation/common_voice_10_0"),Da=j(),J=p("li"),qs=p("code"),Ma=l("config"),Ca=l(": the configuration name, for example "),ms=p("code"),Oa=l("cola"),Aa=j(),X=p("li"),gs=p("code"),Pa=l("split"),Sa=l(": the split name, for example "),ws=p("code"),Ia=l("train"),Bs=j(),b(N.$$.fragment),Ls=j(),ps=p("p"),za=l("The endpoint response is a JSON containing two keys:"),Vs=j(),B=p("ul"),Y=p("li"),Ha=l("The "),Q=p("a"),ys=p("code"),Ra=l("features"),Na=l(" of a dataset, including the column\u2019s name and data type."),Ba=j(),Z=p("li"),La=l("The first 100 "),_s=p("code"),Va=l("rows"),Ga=l(" of a dataset and the content contained in each column of a specific row."),Gs=j(),_=p("p"),Fa=l("For example, here are the "),vs=p("code"),Ua=l("features"),Ka=l(" and the first 100 "),$s=p("code"),Wa=l("rows"),Ja=l(" of the "),bs=p("code"),Xa=l("duorc"),Ya=l("/"),Es=p("code"),Qa=l("SelfRC"),Za=l(" train split:"),Fs=j(),b(ss.$$.fragment),Us=j(),S=p("h2"),L=p("a"),ks=p("span"),b(as.$$.fragment),st=j(),Ts=p("span"),at=l("Truncated responses"),Ks=j(),V=p("p"),tt=l("For some datasets, the response size from "),xs=p("code"),nt=l("/first-rows"),et=l(" may exceed 1MB, in which case the response is truncated until the size is under 1MB. This means you may not get 100 rows in your response because the rows are truncated."),Ws=j(),G=p("p"),lt=l("In some cases, if even the first few rows generate a response that exceeds 1MB, some of the columns are truncated and converted to a string. You\u2019ll see these listed in the "),Ds=p("code"),ot=l("truncated_cells"),pt=l(" field."),Js=j(),$=p("p"),ut=l("For example, the "),ts=p("a"),Ms=p("code"),ct=l("ett"),rt=l(" dataset only returns 10 rows, and the "),Cs=p("code"),it=l("target"),ht=l(" and "),Os=p("code"),dt=l("feat_dynamic_real"),ft=l(" columns are truncated:"),Xs=j(),b(ns.$$.fragment),this.h()},l(s){const r=sn('[data-svelte="svelte-1phssyn"]',document.head);e=u(r,"META",{name:!0,content:!0}),r.forEach(t),i=q(s),n=u(s,"H1",{class:!0});var es=c(n);d=u(es,"A",{id:!0,class:!0,href:!0});var As=c(d);g=u(As,"SPAN",{});var mt=c(g);E(M.$$.fragment,mt),mt.forEach(t),As.forEach(t),I=q(es),f=u(es,"SPAN",{});var gt=c(f);v=o(gt,"Preview a dataset"),gt.forEach(t),es.forEach(t),Ss=q(s),z=u(s,"P",{});var Qs=c(z);ca=o(Qs,"Datasets Server provides a "),rs=u(Qs,"CODE",{});var wt=c(rs);ra=o(wt,"/first-rows"),wt.forEach(t),ia=o(Qs," endpoint for visualizing the first 100 rows of a dataset. This\u2019ll give you a good idea of the data types and example data contained in a dataset."),Qs.forEach(t),Is=q(s),ls=u(s,"P",{});var yt=c(ls);os=u(yt,"IMG",{src:!0,alt:!0}),yt.forEach(t),zs=q(s),E(H.$$.fragment,s),Hs=q(s),y=u(s,"P",{});var O=c(y);ha=o(O,"This guide shows you how to use Datasets Server\u2019s "),is=u(O,"CODE",{});var _t=c(is);da=o(_t,"/first-rows"),_t.forEach(t),fa=o(O," endpoint to preview a dataset. Feel free to also try it out with "),U=u(O,"A",{href:!0,rel:!0});var vt=c(U);ja=o(vt,"Postman"),vt.forEach(t),qa=o(O,", "),K=u(O,"A",{href:!0,rel:!0});var $t=c(K);ma=o($t,"RapidAPI"),$t.forEach(t),ga=o(O,", or "),W=u(O,"A",{href:!0,rel:!0});var bt=c(W);wa=o(bt,"ReDoc"),bt.forEach(t),ya=o(O,"."),O.forEach(t),Rs=q(s),R=u(s,"P",{});var Zs=c(R);_a=o(Zs,"The "),hs=u(Zs,"CODE",{});var Et=c(hs);va=o(Et,"/first-rows"),Et.forEach(t),$a=o(Zs," endpoint accepts three query parameters:"),Zs.forEach(t),Ns=q(s),C=u(s,"UL",{});var us=c(C);P=u(us,"LI",{});var cs=c(P);ds=u(cs,"CODE",{});var kt=c(ds);ba=o(kt,"dataset"),kt.forEach(t),Ea=o(cs,": the dataset name, for example "),fs=u(cs,"CODE",{});var Tt=c(fs);ka=o(Tt,"glue"),Tt.forEach(t),Ta=o(cs," or "),js=u(cs,"CODE",{});var xt=c(js);xa=o(xt,"mozilla-foundation/common_voice_10_0"),xt.forEach(t),cs.forEach(t),Da=q(us),J=u(us,"LI",{});var sa=c(J);qs=u(sa,"CODE",{});var Dt=c(qs);Ma=o(Dt,"config"),Dt.forEach(t),Ca=o(sa,": the configuration name, for example "),ms=u(sa,"CODE",{});var Mt=c(ms);Oa=o(Mt,"cola"),Mt.forEach(t),sa.forEach(t),Aa=q(us),X=u(us,"LI",{});var aa=c(X);gs=u(aa,"CODE",{});var Ct=c(gs);Pa=o(Ct,"split"),Ct.forEach(t),Sa=o(aa,": the split name, for example "),ws=u(aa,"CODE",{});var Ot=c(ws);Ia=o(Ot,"train"),Ot.forEach(t),aa.forEach(t),us.forEach(t),Bs=q(s),E(N.$$.fragment,s),Ls=q(s),ps=u(s,"P",{});var At=c(ps);za=o(At,"The endpoint response is a JSON containing two keys:"),At.forEach(t),Vs=q(s),B=u(s,"UL",{});var ta=c(B);Y=u(ta,"LI",{});var na=c(Y);Ha=o(na,"The "),Q=u(na,"A",{href:!0,rel:!0});var Pt=c(Q);ys=u(Pt,"CODE",{});var St=c(ys);Ra=o(St,"features"),St.forEach(t),Pt.forEach(t),Na=o(na," of a dataset, including the column\u2019s name and data type."),na.forEach(t),Ba=q(ta),Z=u(ta,"LI",{});var ea=c(Z);La=o(ea,"The first 100 "),_s=u(ea,"CODE",{});var It=c(_s);Va=o(It,"rows"),It.forEach(t),Ga=o(ea," of a dataset and the content contained in each column of a specific row."),ea.forEach(t),ta.forEach(t),Gs=q(s),_=u(s,"P",{});var A=c(_);Fa=o(A,"For example, here are the "),vs=u(A,"CODE",{});var zt=c(vs);Ua=o(zt,"features"),zt.forEach(t),Ka=o(A," and the first 100 "),$s=u(A,"CODE",{});var Ht=c($s);Wa=o(Ht,"rows"),Ht.forEach(t),Ja=o(A," of the "),bs=u(A,"CODE",{});var Rt=c(bs);Xa=o(Rt,"duorc"),Rt.forEach(t),Ya=o(A,"/"),Es=u(A,"CODE",{});var Nt=c(Es);Qa=o(Nt,"SelfRC"),Nt.forEach(t),Za=o(A," train split:"),A.forEach(t),Fs=q(s),E(ss.$$.fragment,s),Us=q(s),S=u(s,"H2",{class:!0});var la=c(S);L=u(la,"A",{id:!0,class:!0,href:!0});var Bt=c(L);ks=u(Bt,"SPAN",{});var Lt=c(ks);E(as.$$.fragment,Lt),Lt.forEach(t),Bt.forEach(t),st=q(la),Ts=u(la,"SPAN",{});var Vt=c(Ts);at=o(Vt,"Truncated responses"),Vt.forEach(t),la.forEach(t),Ks=q(s),V=u(s,"P",{});var oa=c(V);tt=o(oa,"For some datasets, the response size from "),xs=u(oa,"CODE",{});var Gt=c(xs);nt=o(Gt,"/first-rows"),Gt.forEach(t),et=o(oa," may exceed 1MB, in which case the response is truncated until the size is under 1MB. This means you may not get 100 rows in your response because the rows are truncated."),oa.forEach(t),Ws=q(s),G=u(s,"P",{});var pa=c(G);lt=o(pa,"In some cases, if even the first few rows generate a response that exceeds 1MB, some of the columns are truncated and converted to a string. You\u2019ll see these listed in the "),Ds=u(pa,"CODE",{});var Ft=c(Ds);ot=o(Ft,"truncated_cells"),Ft.forEach(t),pt=o(pa," field."),pa.forEach(t),Js=q(s),$=u(s,"P",{});var F=c($);ut=o(F,"For example, the "),ts=u(F,"A",{href:!0,rel:!0});var Ut=c(ts);Ms=u(Ut,"CODE",{});var Kt=c(Ms);ct=o(Kt,"ett"),Kt.forEach(t),Ut.forEach(t),rt=o(F," dataset only returns 10 rows, and the "),Cs=u(F,"CODE",{});var Wt=c(Cs);it=o(Wt,"target"),Wt.forEach(t),ht=o(F," and "),Os=u(F,"CODE",{});var Jt=c(Os);dt=o(Jt,"feat_dynamic_real"),Jt.forEach(t),ft=o(F," columns are truncated:"),F.forEach(t),Xs=q(s),E(ns.$$.fragment,s),this.h()},h(){m(e,"name","hf:doc:metadata"),m(e,"content",JSON.stringify(fn)),m(d,"id","preview-a-dataset"),m(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(d,"href","#preview-a-dataset"),m(n,"class","relative group"),an(os.src,qt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/dataset-viewer.png")||m(os,"src",qt),m(os,"alt","dataset-viewer"),m(U,"href","https://www.postman.com/huggingface/workspace/hugging-face-apis/request/23242779-32d6a8be-b800-446a-8cee-f6b5ca1710df"),m(U,"rel","nofollow"),m(K,"href","https://rapidapi.com/hugging-face-hugging-face-default/api/hugging-face-datasets-api"),m(K,"rel","nofollow"),m(W,"href","https://redocly.github.io/redoc/?url=https://datasets-server.huggingface.co/openapi.json#operation/listFirstRows"),m(W,"rel","nofollow"),m(Q,"href","https://huggingface.co/docs/datasets/about_dataset_features"),m(Q,"rel","nofollow"),m(L,"id","truncated-responses"),m(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(L,"href","#truncated-responses"),m(S,"class","relative group"),m(ts,"href","https://datasets-server.huggingface.co/first-rows?dataset=ett&config=m2&split=test"),m(ts,"rel","nofollow")},m(s,r){a(document.head,e),h(s,i,r),h(s,n,r),a(n,d),a(d,g),k(M,g,null),a(n,I),a(n,f),a(f,v),h(s,Ss,r),h(s,z,r),a(z,ca),a(z,rs),a(rs,ra),a(z,ia),h(s,Is,r),h(s,ls,r),a(ls,os),h(s,zs,r),k(H,s,r),h(s,Hs,r),h(s,y,r),a(y,ha),a(y,is),a(is,da),a(y,fa),a(y,U),a(U,ja),a(y,qa),a(y,K),a(K,ma),a(y,ga),a(y,W),a(W,wa),a(y,ya),h(s,Rs,r),h(s,R,r),a(R,_a),a(R,hs),a(hs,va),a(R,$a),h(s,Ns,r),h(s,C,r),a(C,P),a(P,ds),a(ds,ba),a(P,Ea),a(P,fs),a(fs,ka),a(P,Ta),a(P,js),a(js,xa),a(C,Da),a(C,J),a(J,qs),a(qs,Ma),a(J,Ca),a(J,ms),a(ms,Oa),a(C,Aa),a(C,X),a(X,gs),a(gs,Pa),a(X,Sa),a(X,ws),a(ws,Ia),h(s,Bs,r),k(N,s,r),h(s,Ls,r),h(s,ps,r),a(ps,za),h(s,Vs,r),h(s,B,r),a(B,Y),a(Y,Ha),a(Y,Q),a(Q,ys),a(ys,Ra),a(Y,Na),a(B,Ba),a(B,Z),a(Z,La),a(Z,_s),a(_s,Va),a(Z,Ga),h(s,Gs,r),h(s,_,r),a(_,Fa),a(_,vs),a(vs,Ua),a(_,Ka),a(_,$s),a($s,Wa),a(_,Ja),a(_,bs),a(bs,Xa),a(_,Ya),a(_,Es),a(Es,Qa),a(_,Za),h(s,Fs,r),k(ss,s,r),h(s,Us,r),h(s,S,r),a(S,L),a(L,ks),k(as,ks,null),a(S,st),a(S,Ts),a(Ts,at),h(s,Ks,r),h(s,V,r),a(V,tt),a(V,xs),a(xs,nt),a(V,et),h(s,Ws,r),h(s,G,r),a(G,lt),a(G,Ds),a(Ds,ot),a(G,pt),h(s,Js,r),h(s,$,r),a($,ut),a($,ts),a(ts,Ms),a(Ms,ct),a($,rt),a($,Cs),a(Cs,it),a($,ht),a($,Os),a(Os,dt),a($,ft),h(s,Xs,r),k(ns,s,r),Ys=!0},p(s,[r]){const es={};r&2&&(es.$$scope={dirty:r,ctx:s}),H.$set(es);const As={};r&2&&(As.$$scope={dirty:r,ctx:s}),N.$set(As)},i(s){Ys||(T(M.$$.fragment,s),T(H.$$.fragment,s),T(N.$$.fragment,s),T(ss.$$.fragment,s),T(as.$$.fragment,s),T(ns.$$.fragment,s),Ys=!0)},o(s){x(M.$$.fragment,s),x(H.$$.fragment,s),x(N.$$.fragment,s),x(ss.$$.fragment,s),x(as.$$.fragment,s),x(ns.$$.fragment,s),Ys=!1},d(s){t(e),s&&t(i),s&&t(n),D(M),s&&t(Ss),s&&t(z),s&&t(Is),s&&t(ls),s&&t(zs),D(H,s),s&&t(Hs),s&&t(y),s&&t(Rs),s&&t(R),s&&t(Ns),s&&t(C),s&&t(Bs),D(N,s),s&&t(Ls),s&&t(ps),s&&t(Vs),s&&t(B),s&&t(Gs),s&&t(_),s&&t(Fs),D(ss,s),s&&t(Us),s&&t(S),D(as),s&&t(Ks),s&&t(V),s&&t(Ws),s&&t(G),s&&t(Js),s&&t($),s&&t(Xs),D(ns,s)}}}const fn={local:"preview-a-dataset",sections:[{local:"truncated-responses",title:"Truncated responses"}],title:"Preview a dataset"};function jn(w){return tn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yn extends Yt{constructor(e){super();Qt(this,e,jn,dn,Zt,{})}}export{yn as default,fn as metadata};
