import{S as ua,i as ca,s as ia,e as l,k as h,w as J,t as u,M as ha,c as p,d as a,m as r,a as e,x as U,h as c,b as i,G as t,g as o,y as K,L as ra,q as Q,o as V,B as X,v as ja}from"../chunks/vendor-hf-doc-builder.js";import{I as oa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as As}from"../chunks/CodeBlock-hf-doc-builder.js";function da(zs){let q,Y,f,g,O,_,fs,G,ms,Z,j,gs,P,ws,ys,C,vs,_s,ss,b,as,R,bs,ts,d,xs,A,Ts,Ss,z,Ms,ks,ns,E,x,$s,ls,T,ps,m,w,B,S,Cs,W,Rs,es,D,Es,os,y,Ds,F,Ns,Hs,us,v,Is,M,L,Os,Gs,cs,N,k,Ps,is,$,hs;return _=new oa({}),b=new As({props:{code:"https://datasets-server.huggingface.co/rows?dataset={dataset_name}&config={config_name}&split={split_name}",highlighted:'<span class="language-xml">https://datasets-server.huggingface.co/rows?dataset=</span><span class="hljs-template-variable">{dataset_name}</span><span class="language-xml">&amp;config=</span><span class="hljs-template-variable">{config_name}</span><span class="language-xml">&amp;split=</span><span class="hljs-template-variable">{split_name}</span>'}}),T=new As({props:{code:`{
  "columns": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 0,
      "column": { "name": "plot_id", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 1,
      "column": { "name": "plot", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 2,
      "column": { "name": "title", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 3,
      "column": { "name": "question_id", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 4,
      "column": { "name": "question", "type": "STRING" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 5,
      "column": { "name": "answers", "type": "JSON" }
    },
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
      "column_idx": 6,
      "column": { "name": "no_answer", "type": "BOOL" }
    }
  ],
  "rows": [
    {
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
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
      "dataset": "duorc",
      "config": "SelfRC",
      "split": "train",
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
    },
    ...`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;columns&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot_id&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;plot&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;title&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question_id&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;question&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;STRING&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;answers&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;JSON&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">6</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;column&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;no_answer&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;BOOL&quot;</span> <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
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
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;duorc&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;SelfRC&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;train&quot;</span><span class="hljs-punctuation">,</span>
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
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    ...`}}),S=new oa({}),$=new As({props:{code:`  ...
  "rows": [
    {
      "dataset": "ett",
      "config": "m2",
      "split": "test",
      "row_idx": 0,
      "row": {
        "start": 1467331200.0,
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    },
    {
      "dataset": "ett",
      "config": "m2",
      "split": "test",
      "row_idx": 1,
      "row": {
        "start": 1467331200.0,
        "target": "[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039",
        "feat_static_cat": [0],
        "feat_dynamic_real": "[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611",
        "item_id": "OT"
      },
      "truncated_cells": ["target", "feat_dynamic_real"]
    }
  ...`,highlighted:`  ...
  <span class="hljs-attr">&quot;rows&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ett&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;m2&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1467331200.0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;dataset&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;ett&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;config&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;m2&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;split&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;test&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row_idx&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;row&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;start&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1467331200.0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;target&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[38.6619987487793,38.222999572753906,37.34400177001953,37.124000549316406,37.124000549316406,36.9039&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_static_cat&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;[[41.130001068115234,39.62200164794922,38.86800003051758,35.518001556396484,37.52799987792969,37.611&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;item_id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;OT&quot;</span>
      <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;truncated_cells&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">&quot;target&quot;</span><span class="hljs-punctuation">,</span> <span class="hljs-string">&quot;feat_dynamic_real&quot;</span><span class="hljs-punctuation">]</span>
    <span class="hljs-punctuation">}</span>
  ...`}}),{c(){q=l("meta"),Y=h(),f=l("h1"),g=l("a"),O=l("span"),J(_.$$.fragment),fs=h(),G=l("span"),ms=u("First rows"),Z=h(),j=l("p"),gs=u("The endpoint "),P=l("code"),ws=u("/rows"),ys=u(" provides the columns and the first rows of a dataset "),C=l("a"),vs=u("split"),_s=u(":"),ss=h(),J(b.$$.fragment),as=h(),R=l("p"),bs=u("The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),ts=h(),d=l("p"),xs=u("For example, here are the columns and the first rows of the "),A=l("code"),Ts=u("duorc"),Ss=u(" / "),z=l("code"),Ms=u("SelfRC"),ks=u(" train split."),ns=h(),E=l("p"),x=l("a"),$s=u("https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),ls=h(),J(T.$$.fragment),ps=h(),m=l("h2"),w=l("a"),B=l("span"),J(S.$$.fragment),Cs=h(),W=l("span"),Rs=u("Truncated responses"),es=h(),D=l("p"),Es=u("When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),os=h(),y=l("p"),Ds=u("If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),F=l("code"),Ns=u("truncated_cells"),Hs=u(" field."),us=h(),v=l("p"),Is=u("See for example the "),M=l("a"),L=l("code"),Os=u("ett"),Gs=u(" dataset: only 10 rows are returned, and the content of two of the columns are truncated."),cs=h(),N=l("p"),k=l("a"),Ps=u("https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),is=h(),J($.$$.fragment),this.h()},l(s){const n=ha('[data-svelte="svelte-1phssyn"]',document.head);q=p(n,"META",{name:!0,content:!0}),n.forEach(a),Y=r(s),f=p(s,"H1",{class:!0});var rs=e(f);g=p(rs,"A",{id:!0,class:!0,href:!0});var Bs=e(g);O=p(Bs,"SPAN",{});var Ws=e(O);U(_.$$.fragment,Ws),Ws.forEach(a),Bs.forEach(a),fs=r(rs),G=p(rs,"SPAN",{});var Fs=e(G);ms=c(Fs,"First rows"),Fs.forEach(a),rs.forEach(a),Z=r(s),j=p(s,"P",{});var H=e(j);gs=c(H,"The endpoint "),P=p(H,"CODE",{});var Ls=e(P);ws=c(Ls,"/rows"),Ls.forEach(a),ys=c(H," provides the columns and the first rows of a dataset "),C=p(H,"A",{href:!0});var Js=e(C);vs=c(Js,"split"),Js.forEach(a),_s=c(H,":"),H.forEach(a),ss=r(s),U(b.$$.fragment,s),as=r(s),R=p(s,"P",{});var Us=e(R);bs=c(Us,"The first 100 rows, or all the rows if the split contains less than 100 rows, are returned. The list of columns contain the data type."),Us.forEach(a),ts=r(s),d=p(s,"P",{});var I=e(d);xs=c(I,"For example, here are the columns and the first rows of the "),A=p(I,"CODE",{});var Ks=e(A);Ts=c(Ks,"duorc"),Ks.forEach(a),Ss=c(I," / "),z=p(I,"CODE",{});var Qs=e(z);Ms=c(Qs,"SelfRC"),Qs.forEach(a),ks=c(I," train split."),I.forEach(a),ns=r(s),E=p(s,"P",{});var Vs=e(E);x=p(Vs,"A",{href:!0,rel:!0});var Xs=e(x);$s=c(Xs,"https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),Xs.forEach(a),Vs.forEach(a),ls=r(s),U(T.$$.fragment,s),ps=r(s),m=p(s,"H2",{class:!0});var js=e(m);w=p(js,"A",{id:!0,class:!0,href:!0});var Ys=e(w);B=p(Ys,"SPAN",{});var Zs=e(B);U(S.$$.fragment,Zs),Zs.forEach(a),Ys.forEach(a),Cs=r(js),W=p(js,"SPAN",{});var sa=e(W);Rs=c(sa,"Truncated responses"),sa.forEach(a),js.forEach(a),es=r(s),D=p(s,"P",{});var aa=e(D);Es=c(aa,"When the response size for 100 rows is too big, the last rows are removed until the response size is under 1MB."),aa.forEach(a),os=r(s),y=p(s,"P",{});var ds=e(y);Ds=c(ds,"If even the first rows generate a response that does not fit within the limit, the content of the cells themselves is truncated and converted to a string. In this case, the truncated cells are listed in the "),F=p(ds,"CODE",{});var ta=e(F);Ns=c(ta,"truncated_cells"),ta.forEach(a),Hs=c(ds," field."),ds.forEach(a),us=r(s),v=p(s,"P",{});var qs=e(v);Is=c(qs,"See for example the "),M=p(qs,"A",{href:!0,rel:!0});var na=e(M);L=p(na,"CODE",{});var la=e(L);Os=c(la,"ett"),la.forEach(a),na.forEach(a),Gs=c(qs," dataset: only 10 rows are returned, and the content of two of the columns are truncated."),qs.forEach(a),cs=r(s),N=p(s,"P",{});var pa=e(N);k=p(pa,"A",{href:!0,rel:!0});var ea=e(k);Ps=c(ea,"https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),ea.forEach(a),pa.forEach(a),is=r(s),U($.$$.fragment,s),this.h()},h(){i(q,"name","hf:doc:metadata"),i(q,"content",JSON.stringify(qa)),i(g,"id","first-rows"),i(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(g,"href","#first-rows"),i(f,"class","relative group"),i(C,"href","./splits"),i(x,"href","https://datasets-server.huggingface.co/rows?dataset=duorc&config=SelfRC&split=train"),i(x,"rel","nofollow"),i(w,"id","truncated-responses"),i(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(w,"href","#truncated-responses"),i(m,"class","relative group"),i(M,"href","https://huggingface.co/datasets/ett/viewer/m2/test"),i(M,"rel","nofollow"),i(k,"href","https://datasets-server.huggingface.co/rows?dataset=ett&config=m2&split=test"),i(k,"rel","nofollow")},m(s,n){t(document.head,q),o(s,Y,n),o(s,f,n),t(f,g),t(g,O),K(_,O,null),t(f,fs),t(f,G),t(G,ms),o(s,Z,n),o(s,j,n),t(j,gs),t(j,P),t(P,ws),t(j,ys),t(j,C),t(C,vs),t(j,_s),o(s,ss,n),K(b,s,n),o(s,as,n),o(s,R,n),t(R,bs),o(s,ts,n),o(s,d,n),t(d,xs),t(d,A),t(A,Ts),t(d,Ss),t(d,z),t(z,Ms),t(d,ks),o(s,ns,n),o(s,E,n),t(E,x),t(x,$s),o(s,ls,n),K(T,s,n),o(s,ps,n),o(s,m,n),t(m,w),t(w,B),K(S,B,null),t(m,Cs),t(m,W),t(W,Rs),o(s,es,n),o(s,D,n),t(D,Es),o(s,os,n),o(s,y,n),t(y,Ds),t(y,F),t(F,Ns),t(y,Hs),o(s,us,n),o(s,v,n),t(v,Is),t(v,M),t(M,L),t(L,Os),t(v,Gs),o(s,cs,n),o(s,N,n),t(N,k),t(k,Ps),o(s,is,n),K($,s,n),hs=!0},p:ra,i(s){hs||(Q(_.$$.fragment,s),Q(b.$$.fragment,s),Q(T.$$.fragment,s),Q(S.$$.fragment,s),Q($.$$.fragment,s),hs=!0)},o(s){V(_.$$.fragment,s),V(b.$$.fragment,s),V(T.$$.fragment,s),V(S.$$.fragment,s),V($.$$.fragment,s),hs=!1},d(s){a(q),s&&a(Y),s&&a(f),X(_),s&&a(Z),s&&a(j),s&&a(ss),X(b,s),s&&a(as),s&&a(R),s&&a(ts),s&&a(d),s&&a(ns),s&&a(E),s&&a(ls),X(T,s),s&&a(ps),s&&a(m),X(S),s&&a(es),s&&a(D),s&&a(os),s&&a(y),s&&a(us),s&&a(v),s&&a(cs),s&&a(N),s&&a(is),X($,s)}}}const qa={local:"first-rows",sections:[{local:"truncated-responses",title:"Truncated responses"}],title:"First rows"};function fa(zs){return ja(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ya extends ua{constructor(q){super();ca(this,q,fa,da,ia,{})}}export{ya as default,qa as metadata};
