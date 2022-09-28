import{S as as,i as ns,s as ts,e as c,k as v,w as H,t as j,M as rs,c as o,d as a,m as y,a as f,x as B,h as x,b as m,G as n,g as _,y as F,q as N,o as T,B as D,v as ls,L as ps}from"../../chunks/vendor-hf-doc-builder.js";import{D as is}from"../../chunks/Docstring-hf-doc-builder.js";import{C as cs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as os}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as gs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function us(C){let t,d,l,r,g;return r=new cs({props:{code:`from huggingface_hub.inference_api import InferenceApi

# Mask-fill example
inference = InferenceApi("bert-base-uncased")
inference(inputs="The goal of life is [MASK].")

# Question Answering example
inference = InferenceApi("deepset/roberta-base-squad2")
inputs = {
    "question": "What's my name?",
    "context": "My name is Clara and I live in Berkeley.",
}
inference(inputs)

# Zero-shot example
inference = InferenceApi("typeform/distilbert-base-uncased-mnli")
inputs = "Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"
params = {"candidate_labels": ["refund", "legal", "faq"]}
inference(inputs, params)

# Overriding configured task
inference = InferenceApi("bert-base-uncased", task="feature-extraction")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.inference_api <span class="hljs-keyword">import</span> InferenceApi

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Mask-fill example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs=<span class="hljs-string">&quot;The goal of life is [MASK].&quot;</span>)
[{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;the goal of life is life.&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.10933292657136917</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2166</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;life&#x27;</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Question Answering example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;question&quot;</span>: <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;context&quot;</span>: <span class="hljs-string">&quot;My name is Clara and I live in Berkeley.&quot;</span>,
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs)
{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9326569437980652</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">11</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">16</span>, <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Clara&#x27;</span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Zero-shot example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;typeform/distilbert-base-uncased-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = <span class="hljs-string">&quot;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>params = {<span class="hljs-string">&quot;candidate_labels&quot;</span>: [<span class="hljs-string">&quot;refund&quot;</span>, <span class="hljs-string">&quot;legal&quot;</span>, <span class="hljs-string">&quot;faq&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs, params)
{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>: [<span class="hljs-string">&#x27;refund&#x27;</span>, <span class="hljs-string">&#x27;faq&#x27;</span>, <span class="hljs-string">&#x27;legal&#x27;</span>], <span class="hljs-string">&#x27;scores&#x27;</span>: [<span class="hljs-number">0.9378499388694763</span>, <span class="hljs-number">0.04914155602455139</span>, <span class="hljs-number">0.013008488342165947</span>]}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Overriding configured task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, task=<span class="hljs-string">&quot;feature-extraction&quot;</span>)`}}),{c(){t=c("p"),d=j("Example:"),l=v(),H(r.$$.fragment)},l(e){t=o(e,"P",{});var u=f(t);d=x(u,"Example:"),u.forEach(a),l=y(e),B(r.$$.fragment,e)},m(e,u){_(e,t,u),n(t,d),_(e,l,u),F(r,e,u),g=!0},p:ps,i(e){g||(N(r.$$.fragment,e),g=!0)},o(e){T(r.$$.fragment,e),g=!1},d(e){e&&a(t),e&&a(l),D(r,e)}}}function hs(C){let t,d,l,r,g,e,u,w,L,M,h,K,E,Q,W,I,Z,G,S,i,q,J,P,R,U,b,O;return e=new os({}),q=new is({props:{name:"class huggingface_hub.InferenceApi",anchor:"huggingface_hub.InferenceApi",parameters:[{name:"repo_id",val:": str"},{name:"task",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"gpu",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.10.0/src/huggingface_hub/inference_api.py#L46"}}),b=new gs({props:{anchor:"huggingface_hub.InferenceApi.example",$$slots:{default:[us]},$$scope:{ctx:C}}}),{c(){t=c("meta"),d=v(),l=c("h1"),r=c("a"),g=c("span"),H(e.$$.fragment),u=v(),w=c("span"),L=j("Inference API"),M=v(),h=c("p"),K=j("The "),E=c("code"),Q=j("huggingface_hub"),W=j(" library allows users to programmatically access the Inference API. For more information about the Accelerated Inference API, please refer to the documentation "),I=c("a"),Z=j("here"),G=j("."),S=v(),i=c("div"),H(q.$$.fragment),J=v(),P=c("p"),R=j("Client to configure requests and make calls to the HuggingFace Inference API."),U=v(),H(b.$$.fragment),this.h()},l(s){const p=rs('[data-svelte="svelte-1phssyn"]',document.head);t=o(p,"META",{name:!0,content:!0}),p.forEach(a),d=y(s),l=o(s,"H1",{class:!0});var $=f(l);r=o($,"A",{id:!0,class:!0,href:!0});var V=f(r);g=o(V,"SPAN",{});var z=f(g);B(e.$$.fragment,z),z.forEach(a),V.forEach(a),u=y($),w=o($,"SPAN",{});var X=f(w);L=x(X,"Inference API"),X.forEach(a),$.forEach(a),M=y(s),h=o(s,"P",{});var A=f(h);K=x(A,"The "),E=o(A,"CODE",{});var Y=f(E);Q=x(Y,"huggingface_hub"),Y.forEach(a),W=x(A," library allows users to programmatically access the Inference API. For more information about the Accelerated Inference API, please refer to the documentation "),I=o(A,"A",{href:!0,rel:!0});var ss=f(I);Z=x(ss,"here"),ss.forEach(a),G=x(A,"."),A.forEach(a),S=y(s),i=o(s,"DIV",{class:!0});var k=f(i);B(q.$$.fragment,k),J=y(k),P=o(k,"P",{});var es=f(P);R=x(es,"Client to configure requests and make calls to the HuggingFace Inference API."),es.forEach(a),U=y(k),B(b.$$.fragment,k),k.forEach(a),this.h()},h(){m(t,"name","hf:doc:metadata"),m(t,"content",JSON.stringify(fs)),m(r,"id","huggingface_hub.InferenceApi"),m(r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(r,"href","#huggingface_hub.InferenceApi"),m(l,"class","relative group"),m(I,"href","https://huggingface.co/docs/api-inference/index"),m(I,"rel","nofollow"),m(i,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,p){n(document.head,t),_(s,d,p),_(s,l,p),n(l,r),n(r,g),F(e,g,null),n(l,u),n(l,w),n(w,L),_(s,M,p),_(s,h,p),n(h,K),n(h,E),n(E,Q),n(h,W),n(h,I),n(I,Z),n(h,G),_(s,S,p),_(s,i,p),F(q,i,null),n(i,J),n(i,P),n(P,R),n(i,U),F(b,i,null),O=!0},p(s,[p]){const $={};p&2&&($.$$scope={dirty:p,ctx:s}),b.$set($)},i(s){O||(N(e.$$.fragment,s),N(q.$$.fragment,s),N(b.$$.fragment,s),O=!0)},o(s){T(e.$$.fragment,s),T(q.$$.fragment,s),T(b.$$.fragment,s),O=!1},d(s){a(t),s&&a(d),s&&a(l),D(e),s&&a(M),s&&a(h),s&&a(S),s&&a(i),D(q),D(b)}}}const fs={local:"huggingface_hub.InferenceApi",title:"Inference API"};function ms(C){return ls(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Is extends as{constructor(t){super();ns(this,t,ms,hs,ts,{})}}export{Is as default,fs as metadata};
