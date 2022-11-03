import{S as os,i as ls,s as rs,e as i,k as _,w as j,t as m,M as ps,c as u,d as o,m as w,a as d,x as q,h as $,b as f,N as is,G as r,g as p,y,q as v,o as P,B as k,v as us,L as se}from"../chunks/vendor-hf-doc-builder.js";import{T as ns}from"../chunks/Tip-hf-doc-builder.js";import{I as Me}from"../chunks/IconCopyLink-hf-doc-builder.js";import{I as as,M as te,C as ne}from"../chunks/InferenceApi-hf-doc-builder.js";function cs(h){let s,n,e,a,c,A,X,T,x,O,E;return{c(){s=i("p"),n=m("Model pinning is only supported for existing customers."),e=_(),a=i("p"),c=m("If you\u2019re interested in having a model that you can "),A=i("a"),X=m(`readily deploy for
inference`),T=m(", take a look at our "),x=i("a"),O=m(`Inference
Endpoints`),E=m(` solution! It is a secure production environment with dedicated
and autoscaling infrastructure, and you have the flexibility to choose between CPU and GPU resources.`),this.h()},l(g){s=u(g,"P",{});var I=d(s);n=$(I,"Model pinning is only supported for existing customers."),I.forEach(o),e=w(g),a=u(g,"P",{});var b=d(a);c=$(b,"If you\u2019re interested in having a model that you can "),A=u(b,"A",{href:!0,rel:!0});var R=d(A);X=$(R,`readily deploy for
inference`),R.forEach(o),T=$(b,", take a look at our "),x=u(b,"A",{href:!0,rel:!0});var S=d(x);O=$(S,`Inference
Endpoints`),S.forEach(o),E=$(b,` solution! It is a secure production environment with dedicated
and autoscaling infrastructure, and you have the flexibility to choose between CPU and GPU resources.`),b.forEach(o),this.h()},h(){f(A,"href","https://ui.endpoints.huggingface.co/new"),f(A,"rel","nofollow"),f(x,"href","https://huggingface.co/inference-endpoints"),f(x,"rel","nofollow")},m(g,I){p(g,s,I),r(s,n),p(g,e,I),p(g,a,I),r(a,c),r(a,A),r(A,X),r(a,T),r(a,x),r(x,O),r(a,E)},d(g){g&&o(s),g&&o(e),g&&o(a)}}}function ds(h){let s,n;return s=new ne({props:{code:`import requests
api_url = "https://api-inference.huggingface.co/usage/pinned_models"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
response = requests.get(api_url, headers=headers)
# {"pinned_models": [...], "allowed_pinned_models": 5}`,highlighted:`<span class="hljs-keyword">import</span> requests
api_url = <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
response = requests.get(api_url, headers=headers)
<span class="hljs-comment"># {&quot;pinned_models&quot;: [...], &quot;allowed_pinned_models&quot;: 5}</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function hs(h){let s,n;return s=new te({props:{$$slots:{default:[ds]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function fs(h){let s,n;return s=new ne({props:{code:`import fetch from "node-fetch";
async function pinned_models() {
    const response = await fetch(
        "https://api-inference.huggingface.co/usage/pinned_models",
        {
            headers: { Authorization: \`Bearer \${API_TOKEN}\` },
        }
    );
    const result = await response.json();
    return result;
}
pinned_models().then((response) => {
    console.log(JSON.stringify(response));
});
// {{'pinned_models': [....], 'allowed_pinned_models': 5}}`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">pinned_models</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(
        <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>,
        {
            <span class="hljs-attr">headers</span>: { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span> },
        }
    );
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> response.<span class="hljs-title function_">json</span>();
    <span class="hljs-keyword">return</span> result;
}
<span class="hljs-title function_">pinned_models</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});
<span class="hljs-comment">// {{&#x27;pinned_models&#x27;: [....], &#x27;allowed_pinned_models&#x27;: 5}}</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function ms(h){let s,n;return s=new te({props:{$$slots:{default:[fs]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function $s(h){let s,n;return s=new ne({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {{'pinned_models': [....], 'allowed_pinned_models': 5}}`,highlighted:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># {{&#x27;pinned_models&#x27;: [....], &#x27;allowed_pinned_models&#x27;: 5}}</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function gs(h){let s,n;return s=new te({props:{$$slots:{default:[$s]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function _s(h){let s,n;return{c(){s=i("p"),n=m("Be careful, you need to specify ALL the pinned models each time !")},l(e){s=u(e,"P",{});var a=d(s);n=$(a,"Be careful, you need to specify ALL the pinned models each time !"),a.forEach(o)},m(e,a){p(e,s,a),r(s,n)},d(e){e&&o(s)}}}function ws(h){let s,n;return s=new ne({props:{code:`import json
import requests
api_url = "https://api-inference.huggingface.co/usage/pinned_models"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
# XXX: Put ALL the models you want to pin at once, this will override
# the previous values.
data = json.dumps({"pinned_models": [{"model_id": "gpt2", "compute_type": "cpu", "replicas": 1}]})
response = requests.post(api_url, headers=headers, data=data)
# {"ok":"Pinned 1 models, please wait while we load them.","pinned_models":[{"model_id": "gpt2", "compute_type": "cpu"}]}'`,highlighted:`<span class="hljs-keyword">import</span> json
<span class="hljs-keyword">import</span> requests
api_url = <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
<span class="hljs-comment"># <span class="hljs-doctag">XXX:</span> Put ALL the models you want to pin at once, this will override</span>
<span class="hljs-comment"># the previous values.</span>
data = json.dumps({<span class="hljs-string">&quot;pinned_models&quot;</span>: [{<span class="hljs-string">&quot;model_id&quot;</span>: <span class="hljs-string">&quot;gpt2&quot;</span>, <span class="hljs-string">&quot;compute_type&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>, <span class="hljs-string">&quot;replicas&quot;</span>: <span class="hljs-number">1</span>}]})
response = requests.post(api_url, headers=headers, data=data)
<span class="hljs-comment"># {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;,&quot;pinned_models&quot;:[{&quot;model_id&quot;: &quot;gpt2&quot;, &quot;compute_type&quot;: &quot;cpu&quot;}]}&#x27;</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function js(h){let s,n;return s=new te({props:{$$slots:{default:[ws]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function qs(h){let s,n;return s=new ne({props:{code:`import fetch from "node-fetch";
async function set_pinned_models(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/usage/pinned_models",
        {
            headers: { Authorization: \`Bearer \${API_TOKEN}\` },
            method: "POST",
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}
set_pinned_models({pinned_models: [{model_id:"gpt2",compute_type:"cpu","replicas": 1}]}).then((response) => {
    console.log(JSON.stringify(response));
});
// {"ok":"Pinned 1 models, please wait while we load them."}'`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">set_pinned_models</span>(<span class="hljs-params">data</span>) {
    <span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> <span class="hljs-title function_">fetch</span>(
        <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>,
        {
            <span class="hljs-attr">headers</span>: { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">\${API_TOKEN}</span>\`</span> },
            <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;POST&quot;</span>,
            <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data)
        }
    );
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> response.<span class="hljs-title function_">json</span>();
    <span class="hljs-keyword">return</span> result;
}
<span class="hljs-title function_">set_pinned_models</span>({<span class="hljs-attr">pinned_models</span>: [{<span class="hljs-attr">model_id</span>:<span class="hljs-string">&quot;gpt2&quot;</span>,<span class="hljs-attr">compute_type</span>:<span class="hljs-string">&quot;cpu&quot;</span>,<span class="hljs-string">&quot;replicas&quot;</span>: <span class="hljs-number">1</span>}]}).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});
<span class="hljs-comment">// {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;}&#x27;</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function ys(h){let s,n;return s=new te({props:{$$slots:{default:[qs]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function vs(h){let s,n;return s=new ne({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -X POST \\
        -d '{"pinned_models": [{"model_id":"gpt2","compute_type":"cpu","replicas": 1}]}' \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {"ok":"Pinned 1 models, please wait while we load them."}'`,highlighted:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -X POST \\
        -d <span class="hljs-string">&#x27;{&quot;pinned_models&quot;: [{&quot;model_id&quot;:&quot;gpt2&quot;,&quot;compute_type&quot;:&quot;cpu&quot;,&quot;replicas&quot;: 1}]}&#x27;</span> \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;}&#x27;</span>`}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p:se,i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function Ps(h){let s,n;return s=new te({props:{$$slots:{default:[vs]},$$scope:{ctx:h}}}),{c(){j(s.$$.fragment)},l(e){q(s.$$.fragment,e)},m(e,a){y(s,e,a),n=!0},p(e,a){const c={};a&2&&(c.$$scope={dirty:a,ctx:e}),s.$set(c)},i(e){n||(v(s.$$.fragment,e),n=!0)},o(e){P(s.$$.fragment,e),n=!1},d(e){k(s,e)}}}function ks(h){let s,n,e,a,c,A,X,T,x,O,E,g,I,b,R,S,be,ie,B,Ee,J,Ie,xe,ue,z,Te,F,Ne,Oe,ce,C,Xe,de,N,U,ae,D,Se,oe,Be,he,K,fe,Q,ze,me,V,Ue,$e,W,G,Ke,ge,Z,He,_e,H,we,ee,Le,je,L,qe,M,ye;return A=new Me({}),b=new Me({}),D=new Me({}),K=new ns({props:{$$slots:{default:[cs]},$$scope:{ctx:h}}}),H=new as({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[gs],js:[ms],python:[hs]},$$scope:{ctx:h}}}),L=new ns({props:{warning:!0,$$slots:{default:[_s]},$$scope:{ctx:h}}}),M=new as({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[Ps],js:[ys],python:[js]},$$scope:{ctx:h}}}),{c(){s=i("meta"),n=_(),e=i("h1"),a=i("a"),c=i("span"),j(A.$$.fragment),X=_(),T=i("span"),x=m("Detailed usage and pinned models"),O=_(),E=i("h2"),g=i("a"),I=i("span"),j(b.$$.fragment),R=_(),S=i("span"),be=m("API Usage dashboard"),ie=_(),B=i("p"),Ee=m("The "),J=i("a"),Ie=m("API Usage Dashboard"),xe=m(` (beta) shows
historical number of requests and input characters per model for an API Token.`),ue=_(),z=i("p"),Te=m(`Please note that each user account, and each organization, has its own
API Token. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),F=i("a"),Ne=m("api-entreprise@hugginface.co"),Oe=m("."),ce=_(),C=i("img"),de=_(),N=i("h2"),U=i("a"),ae=i("span"),j(D.$$.fragment),Se=_(),oe=i("span"),Be=m("Pinned models"),he=_(),j(K.$$.fragment),fe=_(),Q=i("p"),ze=m(`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),me=_(),V=i("p"),Ue=m("You can set pinned models to your API Token in the API Usage dashboard."),$e=_(),W=i("p"),G=i("a"),Ke=m("Pinned models"),ge=_(),Z=i("p"),He=m(`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),_e=_(),j(H.$$.fragment),we=_(),ee=i("p"),Le=m("Pinning models is done that way."),je=_(),j(L.$$.fragment),qe=_(),j(M.$$.fragment),this.h()},l(t){const l=ps('[data-svelte="svelte-1phssyn"]',document.head);s=u(l,"META",{name:!0,content:!0}),l.forEach(o),n=w(t),e=u(t,"H1",{class:!0});var Y=d(e);a=u(Y,"A",{id:!0,class:!0,href:!0});var le=d(a);c=u(le,"SPAN",{});var re=d(c);q(A.$$.fragment,re),re.forEach(o),le.forEach(o),X=w(Y),T=u(Y,"SPAN",{});var pe=d(T);x=$(pe,"Detailed usage and pinned models"),pe.forEach(o),Y.forEach(o),O=w(t),E=u(t,"H2",{class:!0});var ve=d(E);g=u(ve,"A",{id:!0,class:!0,href:!0});var Je=d(g);I=u(Je,"SPAN",{});var Ce=d(I);q(b.$$.fragment,Ce),Ce.forEach(o),Je.forEach(o),R=w(ve),S=u(ve,"SPAN",{});var De=d(S);be=$(De,"API Usage dashboard"),De.forEach(o),ve.forEach(o),ie=w(t),B=u(t,"P",{});var Pe=d(B);Ee=$(Pe,"The "),J=u(Pe,"A",{href:!0,rel:!0});var Ge=d(J);Ie=$(Ge,"API Usage Dashboard"),Ge.forEach(o),xe=$(Pe,` (beta) shows
historical number of requests and input characters per model for an API Token.`),Pe.forEach(o),ue=w(t),z=u(t,"P",{});var ke=d(z);Te=$(ke,`Please note that each user account, and each organization, has its own
API Token. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),F=u(ke,"A",{href:!0});var Ye=d(F);Ne=$(Ye,"api-entreprise@hugginface.co"),Ye.forEach(o),Oe=$(ke,"."),ke.forEach(o),ce=w(t),C=u(t,"IMG",{src:!0,width:!0}),de=w(t),N=u(t,"H2",{class:!0});var Ae=d(N);U=u(Ae,"A",{id:!0,class:!0,href:!0});var Re=d(U);ae=u(Re,"SPAN",{});var Fe=d(ae);q(D.$$.fragment,Fe),Fe.forEach(o),Re.forEach(o),Se=w(Ae),oe=u(Ae,"SPAN",{});var Qe=d(oe);Be=$(Qe,"Pinned models"),Qe.forEach(o),Ae.forEach(o),he=w(t),q(K.$$.fragment,t),fe=w(t),Q=u(t,"P",{});var Ve=d(Q);ze=$(Ve,`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),Ve.forEach(o),me=w(t),V=u(t,"P",{});var We=d(V);Ue=$(We,"You can set pinned models to your API Token in the API Usage dashboard."),We.forEach(o),$e=w(t),W=u(t,"P",{});var Ze=d(W);G=u(Ze,"A",{href:!0,rel:!0});var es=d(G);Ke=$(es,"Pinned models"),es.forEach(o),Ze.forEach(o),ge=w(t),Z=u(t,"P",{});var ss=d(Z);He=$(ss,`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),ss.forEach(o),_e=w(t),q(H.$$.fragment,t),we=w(t),ee=u(t,"P",{});var ts=d(ee);Le=$(ts,"Pinning models is done that way."),ts.forEach(o),je=w(t),q(L.$$.fragment,t),qe=w(t),q(M.$$.fragment,t),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(As)),f(a,"id","detailed-usage-and-pinned-models"),f(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(a,"href","#detailed-usage-and-pinned-models"),f(e,"class","relative group"),f(g,"id","api-usage-dashboard"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#api-usage-dashboard"),f(E,"class","relative group"),f(J,"href","https://api-inference.huggingface.co/dashboard/"),f(J,"rel","nofollow"),f(F,"href","mailto:api-entreprise@hugginface.co"),is(C.src,Xe="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/inference-api/dashboard_example.png")||f(C,"src",Xe),f(C,"width","600"),f(U,"id","pinned-models"),f(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(U,"href","#pinned-models"),f(N,"class","relative group"),f(G,"href","https://api-inference.huggingface.co/dashboard/pinned_models"),f(G,"rel","nofollow")},m(t,l){r(document.head,s),p(t,n,l),p(t,e,l),r(e,a),r(a,c),y(A,c,null),r(e,X),r(e,T),r(T,x),p(t,O,l),p(t,E,l),r(E,g),r(g,I),y(b,I,null),r(E,R),r(E,S),r(S,be),p(t,ie,l),p(t,B,l),r(B,Ee),r(B,J),r(J,Ie),r(B,xe),p(t,ue,l),p(t,z,l),r(z,Te),r(z,F),r(F,Ne),r(z,Oe),p(t,ce,l),p(t,C,l),p(t,de,l),p(t,N,l),r(N,U),r(U,ae),y(D,ae,null),r(N,Se),r(N,oe),r(oe,Be),p(t,he,l),y(K,t,l),p(t,fe,l),p(t,Q,l),r(Q,ze),p(t,me,l),p(t,V,l),r(V,Ue),p(t,$e,l),p(t,W,l),r(W,G),r(G,Ke),p(t,ge,l),p(t,Z,l),r(Z,He),p(t,_e,l),y(H,t,l),p(t,we,l),p(t,ee,l),r(ee,Le),p(t,je,l),y(L,t,l),p(t,qe,l),y(M,t,l),ye=!0},p(t,[l]){const Y={};l&2&&(Y.$$scope={dirty:l,ctx:t}),K.$set(Y);const le={};l&2&&(le.$$scope={dirty:l,ctx:t}),H.$set(le);const re={};l&2&&(re.$$scope={dirty:l,ctx:t}),L.$set(re);const pe={};l&2&&(pe.$$scope={dirty:l,ctx:t}),M.$set(pe)},i(t){ye||(v(A.$$.fragment,t),v(b.$$.fragment,t),v(D.$$.fragment,t),v(K.$$.fragment,t),v(H.$$.fragment,t),v(L.$$.fragment,t),v(M.$$.fragment,t),ye=!0)},o(t){P(A.$$.fragment,t),P(b.$$.fragment,t),P(D.$$.fragment,t),P(K.$$.fragment,t),P(H.$$.fragment,t),P(L.$$.fragment,t),P(M.$$.fragment,t),ye=!1},d(t){o(s),t&&o(n),t&&o(e),k(A),t&&o(O),t&&o(E),k(b),t&&o(ie),t&&o(B),t&&o(ue),t&&o(z),t&&o(ce),t&&o(C),t&&o(de),t&&o(N),k(D),t&&o(he),k(K,t),t&&o(fe),t&&o(Q),t&&o(me),t&&o(V),t&&o($e),t&&o(W),t&&o(ge),t&&o(Z),t&&o(_e),k(H,t),t&&o(we),t&&o(ee),t&&o(je),k(L,t),t&&o(qe),k(M,t)}}}const As={local:"detailed-usage-and-pinned-models",sections:[{local:"api-usage-dashboard",title:"API Usage dashboard"},{local:"pinned-models",title:"Pinned models"}],title:"Detailed usage and pinned models"};function bs(h){return us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ns extends os{constructor(s){super();ls(this,s,bs,ks,rs,{})}}export{Ns as default,As as metadata};
