import{S as ga,i as wa,s as ya,F as _a,e as p,c as o,a as u,d as a,b as f,g as r,H as va,I as ba,J as $a,q as I,o as z,k as g,w as L,t as c,M as ka,m as w,x as U,h as i,G as t,y as K,B as Q,v as xa}from"../chunks/vendor-hf-doc-builder.js";import{I as ma}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Qs}from"../chunks/CodeBlock-hf-doc-builder.js";function Ta(m){let h,j;const q=m[3].default,l=_a(q,m,m[2],null);return{c(){h=p("div"),l&&l.c(),this.h()},l(n){h=o(n,"DIV",{class:!0});var d=u(h);l&&l.l(d),d.forEach(a),this.h()},h(){f(h,"class","course-tip "+(m[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+m[0]+"-500 dark:before:border-"+m[0]+"-800 from-"+m[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+m[0]+"-50 text-"+m[0]+"-700 dark:text-gray-400")},m(n,d){r(n,h,d),l&&l.m(h,null),j=!0},p(n,[d]){l&&l.p&&(!j||d&4)&&va(l,q,n,n[2],j?$a(q,n[2],d,null):ba(n[2]),null)},i(n){j||(I(l,n),j=!0)},o(n){z(l,n),j=!1},d(n){n&&a(h),l&&l.d(n)}}}function Ma(m,h,j){let{$$slots:q={},$$scope:l}=h,{warning:n=!1}=h;const d=n?"orange":"green";return m.$$set=$=>{"warning"in $&&j(1,n=$.warning),"$$scope"in $&&j(2,l=$.$$scope)},[d,n,l,q]}class Ea extends ga{constructor(h){super();wa(this,h,Ma,Ta,ya,{warning:1})}}function Da(m){let h,j,q,l;return{c(){h=c("Currently, the API only returns rows of the "),j=p("a"),q=c('"streamable" datasets'),l=c(". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},l(n){h=i(n,"Currently, the API only returns rows of the "),j=o(n,"A",{href:!0});var d=u(j);q=i(d,'"streamable" datasets'),d.forEach(a),l=i(n,". By loading a dataset in streaming mode, the first rows can be extracted without downloading the whole dataset."),this.h()},h(){f(j,"href","https://huggingface.co/docs/datasets/stream")},m(n,d){r(n,h,d),r(n,j,d),t(j,q),r(n,l,d)},d(n){n&&a(h),n&&a(j),n&&a(l)}}}function Ca(m){let h,j,q,l,n,d,$,X,bs,ps,y,$s,Y,ks,xs,B,Ts,Ms,os,E,us,_,Es,D,Ds,Cs,Z,Ss,Hs,cs,k,is,v,As,ss,Ps,Os,as,Vs,Is,rs,N,C,zs,hs,S,ds,b,x,ts,H,Bs,ns,Ns,js,R,Rs,fs,T,Ws,es,Fs,Gs,qs,M,Js,A,ls,Ls,Us,ms,W,P,Ks,gs,O,ws;return d=new ma({}),E=new Qs({props:{code:"https://datasets-server.huggingface.co/first-rows?dataset={dataset_name}&config={config_name}&split={split_name}",highlighted:'<span class="language-xml">https://datasets-server.huggingface.co/first-rows?dataset=</span><span class="hljs-template-variable">{dataset_name}</span><span class="language-xml">&amp;config=</span><span class="hljs-template-variable">{config_name}</span><span class="language-xml">&amp;split=</span><span class="hljs-template-variable">{split_name}</span>'}}),k=new Ea({props:{warning:!0,$$slots:{default:[Da]},$$scope:{ctx:m}}}),S=new Qs({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),H=new ma({}),O=new Qs({props:{code:`  ...
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
  ...`}}),{c(){h=p("meta"),j=g(),q=p("h1"),l=p("a"),n=p("span"),L(d.$$.fragment),$=g(),X=p("span"),bs=c("First rows"),ps=g(),y=p("p"),$s=c("The endpoint "),Y=p("code"),ks=c("/first-rows"),xs=c(" provides the columns and the first rows of a dataset "),B=p("a"),Ts=c("split"),Ms=c(":"),os=g(),L(E.$$.fragment),us=g(),_=p("p"),Es=c("The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns (called "),D=p("a"),Ds=c("features"),Cs=c(" to stick with the "),Z=p("code"),Ss=c("datasets"),Hs=c(" library) contain the data type."),cs=g(),L(k.$$.fragment),is=g(),v=p("p"),As=c("For example, here are the features and the first rows of the "),ss=p("code"),Ps=c("duorc"),Os=c(" / "),as=p("code"),Vs=c("SelfRC"),Is=c(" train split."),rs=g(),N=p("p"),C=p("a"),zs=c("https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train"),hs=g(),L(S.$$.fragment),ds=g(),b=p("h2"),x=p("a"),ts=p("span"),L(H.$$.fragment),Bs=g(),ns=p("span"),Ns=c("Truncated responses"),js=g(),R=p("p"),Rs=c("When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),fs=g(),T=p("p"),Ws=c("If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),es=p("code"),Fs=c("truncated_cells"),Gs=c(" field."),qs=g(),M=p("p"),Js=c("See for example the "),A=p("a"),ls=p("code"),Ls=c("ett"),Us=c(" dataset: only 10 rows are returned, and the content of two of the columns are truncated."),ms=g(),W=p("p"),P=p("a"),Ks=c("https://datasets-server.huggingface.co/first-rows?dataset=ett&config=m2&split=test"),gs=g(),L(O.$$.fragment),this.h()},l(s){const e=ka('[data-svelte="svelte-1phssyn"]',document.head);h=o(e,"META",{name:!0,content:!0}),e.forEach(a),j=w(s),q=o(s,"H1",{class:!0});var V=u(q);l=o(V,"A",{id:!0,class:!0,href:!0});var Xs=u(l);n=o(Xs,"SPAN",{});var Ys=u(n);U(d.$$.fragment,Ys),Ys.forEach(a),Xs.forEach(a),$=w(V),X=o(V,"SPAN",{});var Zs=u(X);bs=i(Zs,"First rows"),Zs.forEach(a),V.forEach(a),ps=w(s),y=o(s,"P",{});var F=u(y);$s=i(F,"The endpoint "),Y=o(F,"CODE",{});var sa=u(Y);ks=i(sa,"/first-rows"),sa.forEach(a),xs=i(F," provides the columns and the first rows of a dataset "),B=o(F,"A",{href:!0});var aa=u(B);Ts=i(aa,"split"),aa.forEach(a),Ms=i(F,":"),F.forEach(a),os=w(s),U(E.$$.fragment,s),us=w(s),_=o(s,"P",{});var G=u(_);Es=i(G,"The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns (called "),D=o(G,"A",{href:!0,rel:!0});var ta=u(D);Ds=i(ta,"features"),ta.forEach(a),Cs=i(G," to stick with the "),Z=o(G,"CODE",{});var na=u(Z);Ss=i(na,"datasets"),na.forEach(a),Hs=i(G," library) contain the data type."),G.forEach(a),cs=w(s),U(k.$$.fragment,s),is=w(s),v=o(s,"P",{});var J=u(v);As=i(J,"For example, here are the features and the first rows of the "),ss=o(J,"CODE",{});var ea=u(ss);Ps=i(ea,"duorc"),ea.forEach(a),Os=i(J," / "),as=o(J,"CODE",{});var la=u(as);Vs=i(la,"SelfRC"),la.forEach(a),Is=i(J," train split."),J.forEach(a),rs=w(s),N=o(s,"P",{});var pa=u(N);C=o(pa,"A",{href:!0,rel:!0});var oa=u(C);zs=i(oa,"https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train"),oa.forEach(a),pa.forEach(a),hs=w(s),U(S.$$.fragment,s),ds=w(s),b=o(s,"H2",{class:!0});var ys=u(b);x=o(ys,"A",{id:!0,class:!0,href:!0});var ua=u(x);ts=o(ua,"SPAN",{});var ca=u(ts);U(H.$$.fragment,ca),ca.forEach(a),ua.forEach(a),Bs=w(ys),ns=o(ys,"SPAN",{});var ia=u(ns);Ns=i(ia,"Truncated responses"),ia.forEach(a),ys.forEach(a),js=w(s),R=o(s,"P",{});var ra=u(R);Rs=i(ra,"When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),ra.forEach(a),fs=w(s),T=o(s,"P",{});var _s=u(T);Ws=i(_s,"If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),es=o(_s,"CODE",{});var ha=u(es);Fs=i(ha,"truncated_cells"),ha.forEach(a),Gs=i(_s," field."),_s.forEach(a),qs=w(s),M=o(s,"P",{});var vs=u(M);Js=i(vs,"See for example the "),A=o(vs,"A",{href:!0,rel:!0});var da=u(A);ls=o(da,"CODE",{});var ja=u(ls);Ls=i(ja,"ett"),ja.forEach(a),da.forEach(a),Us=i(vs," dataset: only 10 rows are returned, and the content of two of the columns are truncated."),vs.forEach(a),ms=w(s),W=o(s,"P",{});var fa=u(W);P=o(fa,"A",{href:!0,rel:!0});var qa=u(P);Ks=i(qa,"https://datasets-server.huggingface.co/first-rows?dataset=ett&config=m2&split=test"),qa.forEach(a),fa.forEach(a),gs=w(s),U(O.$$.fragment,s),this.h()},h(){f(h,"name","hf:doc:metadata"),f(h,"content",JSON.stringify(Sa)),f(l,"id","first-rows"),f(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(l,"href","#first-rows"),f(q,"class","relative group"),f(B,"href","./splits"),f(D,"href","https://huggingface.co/docs/datasets/about_dataset_features"),f(D,"rel","nofollow"),f(C,"href","https://datasets-server.huggingface.co/first-rows?dataset=duorc&config=SelfRC&split=train"),f(C,"rel","nofollow"),f(x,"id","truncated-responses"),f(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(x,"href","#truncated-responses"),f(b,"class","relative group"),f(A,"href","https://huggingface.co/datasets/ett/viewer/m2/test"),f(A,"rel","nofollow"),f(P,"href","https://datasets-server.huggingface.co/first-rows?dataset=ett&config=m2&split=test"),f(P,"rel","nofollow")},m(s,e){t(document.head,h),r(s,j,e),r(s,q,e),t(q,l),t(l,n),K(d,n,null),t(q,$),t(q,X),t(X,bs),r(s,ps,e),r(s,y,e),t(y,$s),t(y,Y),t(Y,ks),t(y,xs),t(y,B),t(B,Ts),t(y,Ms),r(s,os,e),K(E,s,e),r(s,us,e),r(s,_,e),t(_,Es),t(_,D),t(D,Ds),t(_,Cs),t(_,Z),t(Z,Ss),t(_,Hs),r(s,cs,e),K(k,s,e),r(s,is,e),r(s,v,e),t(v,As),t(v,ss),t(ss,Ps),t(v,Os),t(v,as),t(as,Vs),t(v,Is),r(s,rs,e),r(s,N,e),t(N,C),t(C,zs),r(s,hs,e),K(S,s,e),r(s,ds,e),r(s,b,e),t(b,x),t(x,ts),K(H,ts,null),t(b,Bs),t(b,ns),t(ns,Ns),r(s,js,e),r(s,R,e),t(R,Rs),r(s,fs,e),r(s,T,e),t(T,Ws),t(T,es),t(es,Fs),t(T,Gs),r(s,qs,e),r(s,M,e),t(M,Js),t(M,A),t(A,ls),t(ls,Ls),t(M,Us),r(s,ms,e),r(s,W,e),t(W,P),t(P,Ks),r(s,gs,e),K(O,s,e),ws=!0},p(s,[e]){const V={};e&2&&(V.$$scope={dirty:e,ctx:s}),k.$set(V)},i(s){ws||(I(d.$$.fragment,s),I(E.$$.fragment,s),I(k.$$.fragment,s),I(S.$$.fragment,s),I(H.$$.fragment,s),I(O.$$.fragment,s),ws=!0)},o(s){z(d.$$.fragment,s),z(E.$$.fragment,s),z(k.$$.fragment,s),z(S.$$.fragment,s),z(H.$$.fragment,s),z(O.$$.fragment,s),ws=!1},d(s){a(h),s&&a(j),s&&a(q),Q(d),s&&a(ps),s&&a(y),s&&a(os),Q(E,s),s&&a(us),s&&a(_),s&&a(cs),Q(k,s),s&&a(is),s&&a(v),s&&a(rs),s&&a(N),s&&a(hs),Q(S,s),s&&a(ds),s&&a(b),Q(H),s&&a(js),s&&a(R),s&&a(fs),s&&a(T),s&&a(qs),s&&a(M),s&&a(ms),s&&a(W),s&&a(gs),Q(O,s)}}}const Sa={local:"first-rows",sections:[{local:"truncated-responses",title:"Truncated responses"}],title:"First rows"};function Ha(m){return xa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Va extends ga{constructor(h){super();wa(this,h,Ha,Ca,ya,{})}}export{Va as default,Sa as metadata};
