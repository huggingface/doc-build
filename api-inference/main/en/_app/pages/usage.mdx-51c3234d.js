import{S as cs,i as us,s as ds,e as i,k as m,w,t as $,M as hs,c,d as o,m as g,a as u,x as j,h as _,b as f,N as fs,F as r,g as p,y as q,q as y,o as v,B as k,v as ms,L as R}from"../chunks/vendor-7c454903.js";import{T as gs}from"../chunks/Tip-735285fc.js";import{I as Ce}from"../chunks/IconCopyLink-5457534b.js";import{I as is,M as Q,C as V}from"../chunks/InferenceApi-041dc1b2.js";function $s(d){let s,a;return s=new V({props:{code:`import requests
api_url = "https://api-inference.huggingface.co/usage/pinned_models"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
response = requests.get(api_url, headers=headers)
# {"pinned_models": [...], "allowed_pinned_models": 5}`,highlighted:`<span class="hljs-keyword">import</span> requests
api_url = <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
response = requests.get(api_url, headers=headers)
<span class="hljs-comment"># {&quot;pinned_models&quot;: [...], &quot;allowed_pinned_models&quot;: 5}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function _s(d){let s,a;return s=new Q({props:{$$slots:{default:[$s]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function ws(d){let s,a;return s=new V({props:{code:`import fetch from "node-fetch";
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
<span class="hljs-comment">// {{&#x27;pinned_models&#x27;: [....], &#x27;allowed_pinned_models&#x27;: 5}}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function js(d){let s,a;return s=new Q({props:{$$slots:{default:[ws]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function qs(d){let s,a;return s=new V({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {{'pinned_models': [....], 'allowed_pinned_models': 5}}`,highlighted:`<span class="language-xml">curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H &quot;Authorization: Bearer \${API_TOKEN}&quot;
# </span><span class="hljs-template-variable">{{<span class="hljs-name">&#x27;pinned_models&#x27;</span>: [....], <span class="hljs-string">&#x27;allowed_pinned_models&#x27;</span>: <span class="hljs-number">5</span>}}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function ys(d){let s,a;return s=new Q({props:{$$slots:{default:[qs]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function vs(d){let s,a;return{c(){s=i("p"),a=$("Be careful, you need to specify ALL the pinned models each time !")},l(e){s=c(e,"P",{});var t=u(s);a=_(t,"Be careful, you need to specify ALL the pinned models each time !"),t.forEach(o)},m(e,t){p(e,s,t),r(s,a)},d(e){e&&o(s)}}}function ks(d){let s,a;return s=new V({props:{code:`import json
import requests
api_url = "https://api-inference.huggingface.co/usage/pinned_models"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
# XXX: Put ALL the models you want to pin at once, this will override
# the previous values.
data = json.dumps({"pinned_models": [{"model_id": "gpt2", "compute_type": "cpu"}]})
response = requests.post(api_url, headers=headers, data=data)
# {"ok":"Pinned 1 models, please wait while we load them.","pinned_models":[{"model_id": "gpt2", "compute_type": "cpu"}]}'`,highlighted:`<span class="hljs-keyword">import</span> json
<span class="hljs-keyword">import</span> requests
api_url = <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
<span class="hljs-comment"># <span class="hljs-doctag">XXX:</span> Put ALL the models you want to pin at once, this will override</span>
<span class="hljs-comment"># the previous values.</span>
data = json.dumps({<span class="hljs-string">&quot;pinned_models&quot;</span>: [{<span class="hljs-string">&quot;model_id&quot;</span>: <span class="hljs-string">&quot;gpt2&quot;</span>, <span class="hljs-string">&quot;compute_type&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>}]})
response = requests.post(api_url, headers=headers, data=data)
<span class="hljs-comment"># {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;,&quot;pinned_models&quot;:[{&quot;model_id&quot;: &quot;gpt2&quot;, &quot;compute_type&quot;: &quot;cpu&quot;}]}&#x27;</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function Ps(d){let s,a;return s=new Q({props:{$$slots:{default:[ks]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function As(d){let s,a;return s=new V({props:{code:`import fetch from "node-fetch";
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
set_pinned_models({pinned_models: [{model_id:"gpt2",compute_type:"cpu"}]}).then((response) => {
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
<span class="hljs-title function_">set_pinned_models</span>({<span class="hljs-attr">pinned_models</span>: [{<span class="hljs-attr">model_id</span>:<span class="hljs-string">&quot;gpt2&quot;</span>,<span class="hljs-attr">compute_type</span>:<span class="hljs-string">&quot;cpu&quot;</span>}]}).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(response));
});
<span class="hljs-comment">// {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;}&#x27;</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function bs(d){let s,a;return s=new Q({props:{$$slots:{default:[As]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function Es(d){let s,a;return s=new V({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -X POST \\
        -d '{"pinned_models": [{"model_id":"gpt2","compute_type":"cpu"}]}' \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {"ok":"Pinned 1 models, please wait while we load them."}'`,highlighted:`curl https:<span class="hljs-comment">//api-inference.huggingface.co/usage/pinned_models \\</span>
        -X <span class="hljs-keyword">POST</span> \\
        -<span class="hljs-keyword">d</span> &#x27;{<span class="hljs-string">&quot;pinned_models&quot;</span>: [{<span class="hljs-string">&quot;model_id&quot;</span>:<span class="hljs-string">&quot;gpt2&quot;</span>,<span class="hljs-string">&quot;compute_type&quot;</span>:<span class="hljs-string">&quot;cpu&quot;</span>}]}&#x27; \\
        -<span class="hljs-keyword">H</span> <span class="hljs-string">&quot;Authorization: Bearer \${API_TOKEN}&quot;</span>
# {<span class="hljs-string">&quot;ok&quot;</span>:<span class="hljs-string">&quot;Pinned 1 models, please wait while we load them.&quot;</span>}&#x27;`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p:R,i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function Is(d){let s,a;return s=new Q({props:{$$slots:{default:[Es]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,t){q(s,e,t),a=!0},p(e,t){const h={};t&2&&(h.$$scope={dirty:t,ctx:e}),s.$set(h)},i(e){a||(y(s.$$.fragment,e),a=!0)},o(e){v(s.$$.fragment,e),a=!1},d(e){k(s,e)}}}function Ts(d){let s,a,e,t,h,z,Pe,W,Ae,oe,P,b,Z,B,be,ee,Ee,le,E,Ie,L,Te,xe,re,I,Ne,J,Se,Oe,pe,K,Ye,ie,A,T,se,H,ze,ne,Be,ce,D,Le,ue,x,Ke,U,He,Ue,de,C,Me,he,Y,M,Xe,fe,F,Je,me,N,ge,G,De,$e,S,_e,O,we;return z=new Ce({}),B=new Ce({}),H=new Ce({}),N=new is({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[ys],js:[js],python:[_s]},$$scope:{ctx:d}}}),S=new gs({props:{warning:!0,$$slots:{default:[vs]},$$scope:{ctx:d}}}),O=new is({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[Is],js:[bs],python:[Ps]},$$scope:{ctx:d}}}),{c(){s=i("meta"),a=m(),e=i("h1"),t=i("a"),h=i("span"),w(z.$$.fragment),Pe=m(),W=i("span"),Ae=$("Detailed usage and pinned models"),oe=m(),P=i("h2"),b=i("a"),Z=i("span"),w(B.$$.fragment),be=m(),ee=i("span"),Ee=$("API Usage dashboard"),le=m(),E=i("p"),Ie=$("The "),L=i("a"),Te=$("API Usage Dashboard"),xe=$(` (beta) shows
historical number of requests and input characters per model for an API Token.`),re=m(),I=i("p"),Ne=$(`Please note that each user account, and each organization, has its own
API Token. Lab, Startup and Enterprise subscriptions are billed
according to the organization API Token usage. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),J=i("a"),Se=$("api-entreprise@hugginface.co"),Oe=$("."),pe=m(),K=i("img"),ie=m(),A=i("h2"),T=i("a"),se=i("span"),w(H.$$.fragment),ze=m(),ne=i("span"),Be=$("Pinned models"),ce=m(),D=i("p"),Le=$(`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),ue=m(),x=i("p"),Ke=$(`Lab, Startup and Enterprise organization subscriptions can have a number
of models pinned to their organization API Token - `),U=i("a"),He=$(`see
pricing`),Ue=$(" for details."),de=m(),C=i("p"),Me=$("You can set pinned models to your API Token in the API Usage dashboard."),he=m(),Y=i("p"),M=i("a"),Xe=$("Pinned models"),fe=m(),F=i("p"),Je=$(`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),me=m(),w(N.$$.fragment),ge=m(),G=i("p"),De=$("Pinning models is done that way."),$e=m(),w(S.$$.fragment),_e=m(),w(O.$$.fragment),this.h()},l(n){const l=hs('[data-svelte="svelte-1phssyn"]',document.head);s=c(l,"META",{name:!0,content:!0}),l.forEach(o),a=g(n),e=c(n,"H1",{class:!0});var X=u(e);t=c(X,"A",{id:!0,class:!0,href:!0});var ae=u(t);h=c(ae,"SPAN",{});var te=u(h);j(z.$$.fragment,te),te.forEach(o),ae.forEach(o),Pe=g(X),W=c(X,"SPAN",{});var Fe=u(W);Ae=_(Fe,"Detailed usage and pinned models"),Fe.forEach(o),X.forEach(o),oe=g(n),P=c(n,"H2",{class:!0});var je=u(P);b=c(je,"A",{id:!0,class:!0,href:!0});var Ge=u(b);Z=c(Ge,"SPAN",{});var Re=u(Z);j(B.$$.fragment,Re),Re.forEach(o),Ge.forEach(o),be=g(je),ee=c(je,"SPAN",{});var Qe=u(ee);Ee=_(Qe,"API Usage dashboard"),Qe.forEach(o),je.forEach(o),le=g(n),E=c(n,"P",{});var qe=u(E);Ie=_(qe,"The "),L=c(qe,"A",{href:!0,rel:!0});var Ve=u(L);Te=_(Ve,"API Usage Dashboard"),Ve.forEach(o),xe=_(qe,` (beta) shows
historical number of requests and input characters per model for an API Token.`),qe.forEach(o),re=g(n),I=c(n,"P",{});var ye=u(I);Ne=_(ye,`Please note that each user account, and each organization, has its own
API Token. Lab, Startup and Enterprise subscriptions are billed
according to the organization API Token usage. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),J=c(ye,"A",{href:!0});var We=u(J);Se=_(We,"api-entreprise@hugginface.co"),We.forEach(o),Oe=_(ye,"."),ye.forEach(o),pe=g(n),K=c(n,"IMG",{src:!0,width:!0}),ie=g(n),A=c(n,"H2",{class:!0});var ve=u(A);T=c(ve,"A",{id:!0,class:!0,href:!0});var Ze=u(T);se=c(Ze,"SPAN",{});var es=u(se);j(H.$$.fragment,es),es.forEach(o),Ze.forEach(o),ze=g(ve),ne=c(ve,"SPAN",{});var ss=u(ne);Be=_(ss,"Pinned models"),ss.forEach(o),ve.forEach(o),ce=g(n),D=c(n,"P",{});var ns=u(D);Le=_(ns,`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),ns.forEach(o),ue=g(n),x=c(n,"P",{});var ke=u(x);Ke=_(ke,`Lab, Startup and Enterprise organization subscriptions can have a number
of models pinned to their organization API Token - `),U=c(ke,"A",{href:!0,rel:!0});var as=u(U);He=_(as,`see
pricing`),as.forEach(o),Ue=_(ke," for details."),ke.forEach(o),de=g(n),C=c(n,"P",{});var ts=u(C);Me=_(ts,"You can set pinned models to your API Token in the API Usage dashboard."),ts.forEach(o),he=g(n),Y=c(n,"P",{});var os=u(Y);M=c(os,"A",{href:!0,rel:!0});var ls=u(M);Xe=_(ls,"Pinned models"),ls.forEach(o),os.forEach(o),fe=g(n),F=c(n,"P",{});var rs=u(F);Je=_(rs,`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),rs.forEach(o),me=g(n),j(N.$$.fragment,n),ge=g(n),G=c(n,"P",{});var ps=u(G);De=_(ps,"Pinning models is done that way."),ps.forEach(o),$e=g(n),j(S.$$.fragment,n),_e=g(n),j(O.$$.fragment,n),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(xs)),f(t,"id","detailed-usage-and-pinned-models"),f(t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(t,"href","#detailed-usage-and-pinned-models"),f(e,"class","relative group"),f(b,"id","api-usage-dashboard"),f(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(b,"href","#api-usage-dashboard"),f(P,"class","relative group"),f(L,"href","https://api-inference.huggingface.co/dashboard/"),f(L,"rel","nofollow"),f(J,"href","mailto:api-entreprise@hugginface.co"),fs(K.src,Ye="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/inference-api/dashboard_example.png")||f(K,"src",Ye),f(K,"width","600"),f(T,"id","pinned-models"),f(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(T,"href","#pinned-models"),f(A,"class","relative group"),f(U,"href","https://huggingface.co/pricing"),f(U,"rel","nofollow"),f(M,"href","https://api-inference.huggingface.co/dashboard/pinned_models"),f(M,"rel","nofollow")},m(n,l){r(document.head,s),p(n,a,l),p(n,e,l),r(e,t),r(t,h),q(z,h,null),r(e,Pe),r(e,W),r(W,Ae),p(n,oe,l),p(n,P,l),r(P,b),r(b,Z),q(B,Z,null),r(P,be),r(P,ee),r(ee,Ee),p(n,le,l),p(n,E,l),r(E,Ie),r(E,L),r(L,Te),r(E,xe),p(n,re,l),p(n,I,l),r(I,Ne),r(I,J),r(J,Se),r(I,Oe),p(n,pe,l),p(n,K,l),p(n,ie,l),p(n,A,l),r(A,T),r(T,se),q(H,se,null),r(A,ze),r(A,ne),r(ne,Be),p(n,ce,l),p(n,D,l),r(D,Le),p(n,ue,l),p(n,x,l),r(x,Ke),r(x,U),r(U,He),r(x,Ue),p(n,de,l),p(n,C,l),r(C,Me),p(n,he,l),p(n,Y,l),r(Y,M),r(M,Xe),p(n,fe,l),p(n,F,l),r(F,Je),p(n,me,l),q(N,n,l),p(n,ge,l),p(n,G,l),r(G,De),p(n,$e,l),q(S,n,l),p(n,_e,l),q(O,n,l),we=!0},p(n,[l]){const X={};l&2&&(X.$$scope={dirty:l,ctx:n}),N.$set(X);const ae={};l&2&&(ae.$$scope={dirty:l,ctx:n}),S.$set(ae);const te={};l&2&&(te.$$scope={dirty:l,ctx:n}),O.$set(te)},i(n){we||(y(z.$$.fragment,n),y(B.$$.fragment,n),y(H.$$.fragment,n),y(N.$$.fragment,n),y(S.$$.fragment,n),y(O.$$.fragment,n),we=!0)},o(n){v(z.$$.fragment,n),v(B.$$.fragment,n),v(H.$$.fragment,n),v(N.$$.fragment,n),v(S.$$.fragment,n),v(O.$$.fragment,n),we=!1},d(n){o(s),n&&o(a),n&&o(e),k(z),n&&o(oe),n&&o(P),k(B),n&&o(le),n&&o(E),n&&o(re),n&&o(I),n&&o(pe),n&&o(K),n&&o(ie),n&&o(A),k(H),n&&o(ce),n&&o(D),n&&o(ue),n&&o(x),n&&o(de),n&&o(C),n&&o(he),n&&o(Y),n&&o(fe),n&&o(F),n&&o(me),k(N,n),n&&o(ge),n&&o(G),n&&o($e),k(S,n),n&&o(_e),k(O,n)}}}const xs={local:"detailed-usage-and-pinned-models",sections:[{local:"api-usage-dashboard",title:"API Usage dashboard"},{local:"pinned-models",title:"Pinned models"}],title:"Detailed usage and pinned models"};function Ns(d){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ls extends cs{constructor(s){super();us(this,s,Ns,Ts,ds,{})}}export{Ls as default,xs as metadata};
