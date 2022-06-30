import{S as cs,i as us,s as ds,e as i,k as m,w,t as $,M as hs,c,d as o,m as g,a as u,x as j,h as _,b as f,N as fs,G as r,g as p,y as q,q as y,o as v,B as P,v as ms,L as F}from"../chunks/vendor-hf-doc-builder.js";import{T as gs}from"../chunks/Tip-hf-doc-builder.js";import{I as De}from"../chunks/IconCopyLink-hf-doc-builder.js";import{I as is,M as Q,C as V}from"../chunks/InferenceApi-hf-doc-builder.js";function $s(d){let s,t;return s=new V({props:{code:`import requests
api_url = "https://api-inference.huggingface.co/usage/pinned_models"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
response = requests.get(api_url, headers=headers)
# {"pinned_models": [...], "allowed_pinned_models": 5}`,highlighted:`<span class="hljs-keyword">import</span> requests
api_url = <span class="hljs-string">&quot;https://api-inference.huggingface.co/usage/pinned_models&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
response = requests.get(api_url, headers=headers)
<span class="hljs-comment"># {&quot;pinned_models&quot;: [...], &quot;allowed_pinned_models&quot;: 5}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function _s(d){let s,t;return s=new Q({props:{$$slots:{default:[$s]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function ws(d){let s,t;return s=new V({props:{code:`import fetch from "node-fetch";
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
<span class="hljs-comment">// {{&#x27;pinned_models&#x27;: [....], &#x27;allowed_pinned_models&#x27;: 5}}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function js(d){let s,t;return s=new Q({props:{$$slots:{default:[ws]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function qs(d){let s,t;return s=new V({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {{'pinned_models': [....], 'allowed_pinned_models': 5}}`,highlighted:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># {{&#x27;pinned_models&#x27;: [....], &#x27;allowed_pinned_models&#x27;: 5}}</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function ys(d){let s,t;return s=new Q({props:{$$slots:{default:[qs]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function vs(d){let s,t;return{c(){s=i("p"),t=$("Be careful, you need to specify ALL the pinned models each time !")},l(e){s=c(e,"P",{});var a=u(s);t=_(a,"Be careful, you need to specify ALL the pinned models each time !"),a.forEach(o)},m(e,a){p(e,s,a),r(s,t)},d(e){e&&o(s)}}}function Ps(d){let s,t;return s=new V({props:{code:`import json
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
<span class="hljs-comment"># {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;,&quot;pinned_models&quot;:[{&quot;model_id&quot;: &quot;gpt2&quot;, &quot;compute_type&quot;: &quot;cpu&quot;}]}&#x27;</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function ks(d){let s,t;return s=new Q({props:{$$slots:{default:[Ps]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function As(d){let s,t;return s=new V({props:{code:`import fetch from "node-fetch";
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
<span class="hljs-comment">// {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;}&#x27;</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function bs(d){let s,t;return s=new Q({props:{$$slots:{default:[As]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function Es(d){let s,t;return s=new V({props:{code:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -X POST \\
        -d '{"pinned_models": [{"model_id":"gpt2","compute_type":"cpu"}]}' \\
        -H "Authorization: Bearer \${API_TOKEN}"
# {"ok":"Pinned 1 models, please wait while we load them."}'`,highlighted:`curl https://api-inference.huggingface.co/usage/pinned_models \\
        -X POST \\
        -d <span class="hljs-string">&#x27;{&quot;pinned_models&quot;: [{&quot;model_id&quot;:&quot;gpt2&quot;,&quot;compute_type&quot;:&quot;cpu&quot;}]}&#x27;</span> \\
        -H <span class="hljs-string">&quot;Authorization: Bearer <span class="hljs-variable">\${API_TOKEN}</span>&quot;</span>
<span class="hljs-comment"># {&quot;ok&quot;:&quot;Pinned 1 models, please wait while we load them.&quot;}&#x27;</span>`}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p:F,i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function Is(d){let s,t;return s=new Q({props:{$$slots:{default:[Es]},$$scope:{ctx:d}}}),{c(){w(s.$$.fragment)},l(e){j(s.$$.fragment,e)},m(e,a){q(s,e,a),t=!0},p(e,a){const h={};a&2&&(h.$$scope={dirty:a,ctx:e}),s.$set(h)},i(e){t||(y(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){P(s,e)}}}function Ts(d){let s,t,e,a,h,S,ke,W,Ae,oe,k,b,Z,B,be,ee,Ee,le,E,Ie,L,Te,xe,re,I,Oe,X,Ne,ze,pe,K,Ge,ie,A,T,se,H,Se,ne,Be,ce,J,Le,ue,x,Ke,U,He,Ue,de,D,Ce,he,G,C,Me,fe,Y,Xe,me,O,ge,R,Je,$e,N,_e,z,we;return S=new De({}),B=new De({}),H=new De({}),O=new is({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[ys],js:[js],python:[_s]},$$scope:{ctx:d}}}),N=new gs({props:{warning:!0,$$slots:{default:[vs]},$$scope:{ctx:d}}}),z=new is({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[Is],js:[bs],python:[ks]},$$scope:{ctx:d}}}),{c(){s=i("meta"),t=m(),e=i("h1"),a=i("a"),h=i("span"),w(S.$$.fragment),ke=m(),W=i("span"),Ae=$("Detailed usage and pinned models"),oe=m(),k=i("h2"),b=i("a"),Z=i("span"),w(B.$$.fragment),be=m(),ee=i("span"),Ee=$("API Usage dashboard"),le=m(),E=i("p"),Ie=$("The "),L=i("a"),Te=$("API Usage Dashboard"),xe=$(` (beta) shows
historical number of requests and input characters per model for an API Token.`),re=m(),I=i("p"),Oe=$(`Please note that each user account, and each organization, has its own
API Token. Community Pro and Organization Lab subscriptions are billed
according to the organization API Token usage. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),X=i("a"),Ne=$("api-entreprise@hugginface.co"),ze=$("."),pe=m(),K=i("img"),ie=m(),A=i("h2"),T=i("a"),se=i("span"),w(H.$$.fragment),Se=m(),ne=i("span"),Be=$("Pinned models"),ce=m(),J=i("p"),Le=$(`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),ue=m(),x=i("p"),Ke=$(`Community Pro and Organization Lab subscriptions can have a number
of models pinned to their organization API Token - `),U=i("a"),He=$(`see
pricing`),Ue=$(" for details."),de=m(),D=i("p"),Ce=$("You can set pinned models to your API Token in the API Usage dashboard."),he=m(),G=i("p"),C=i("a"),Me=$("Pinned models"),fe=m(),Y=i("p"),Xe=$(`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),me=m(),w(O.$$.fragment),ge=m(),R=i("p"),Je=$("Pinning models is done that way."),$e=m(),w(N.$$.fragment),_e=m(),w(z.$$.fragment),this.h()},l(n){const l=hs('[data-svelte="svelte-1phssyn"]',document.head);s=c(l,"META",{name:!0,content:!0}),l.forEach(o),t=g(n),e=c(n,"H1",{class:!0});var M=u(e);a=c(M,"A",{id:!0,class:!0,href:!0});var te=u(a);h=c(te,"SPAN",{});var ae=u(h);j(S.$$.fragment,ae),ae.forEach(o),te.forEach(o),ke=g(M),W=c(M,"SPAN",{});var Ye=u(W);Ae=_(Ye,"Detailed usage and pinned models"),Ye.forEach(o),M.forEach(o),oe=g(n),k=c(n,"H2",{class:!0});var je=u(k);b=c(je,"A",{id:!0,class:!0,href:!0});var Re=u(b);Z=c(Re,"SPAN",{});var Fe=u(Z);j(B.$$.fragment,Fe),Fe.forEach(o),Re.forEach(o),be=g(je),ee=c(je,"SPAN",{});var Qe=u(ee);Ee=_(Qe,"API Usage dashboard"),Qe.forEach(o),je.forEach(o),le=g(n),E=c(n,"P",{});var qe=u(E);Ie=_(qe,"The "),L=c(qe,"A",{href:!0,rel:!0});var Ve=u(L);Te=_(Ve,"API Usage Dashboard"),Ve.forEach(o),xe=_(qe,` (beta) shows
historical number of requests and input characters per model for an API Token.`),qe.forEach(o),re=g(n),I=c(n,"P",{});var ye=u(I);Oe=_(ye,`Please note that each user account, and each organization, has its own
API Token. Community Pro and Organization Lab subscriptions are billed
according to the organization API Token usage. By default, you should
not have anything to do. However, if you have any doubt about what\u2019s
being shown to you, or you have a complex setup (user subscription,
multiple organizations and so on), please contact `),X=c(ye,"A",{href:!0});var We=u(X);Ne=_(We,"api-entreprise@hugginface.co"),We.forEach(o),ze=_(ye,"."),ye.forEach(o),pe=g(n),K=c(n,"IMG",{src:!0,width:!0}),ie=g(n),A=c(n,"H2",{class:!0});var ve=u(A);T=c(ve,"A",{id:!0,class:!0,href:!0});var Ze=u(T);se=c(Ze,"SPAN",{});var es=u(se);j(H.$$.fragment,es),es.forEach(o),Ze.forEach(o),Se=g(ve),ne=c(ve,"SPAN",{});var ss=u(ne);Be=_(ss,"Pinned models"),ss.forEach(o),ve.forEach(o),ce=g(n),J=c(n,"P",{});var ns=u(J);Le=_(ns,`A pinned model is a model which is preloaded for inference and instantly
available for requests authenticated with an API Token.`),ns.forEach(o),ue=g(n),x=c(n,"P",{});var Pe=u(x);Ke=_(Pe,`Community Pro and Organization Lab subscriptions can have a number
of models pinned to their organization API Token - `),U=c(Pe,"A",{href:!0,rel:!0});var ts=u(U);He=_(ts,`see
pricing`),ts.forEach(o),Ue=_(Pe," for details."),Pe.forEach(o),de=g(n),D=c(n,"P",{});var as=u(D);Ce=_(as,"You can set pinned models to your API Token in the API Usage dashboard."),as.forEach(o),he=g(n),G=c(n,"P",{});var os=u(G);C=c(os,"A",{href:!0,rel:!0});var ls=u(C);Me=_(ls,"Pinned models"),ls.forEach(o),os.forEach(o),fe=g(n),Y=c(n,"P",{});var rs=u(Y);Xe=_(rs,`Model pinning is also accessible directly from the API. Here is how you
see what your current pinned models are :`),rs.forEach(o),me=g(n),j(O.$$.fragment,n),ge=g(n),R=c(n,"P",{});var ps=u(R);Je=_(ps,"Pinning models is done that way."),ps.forEach(o),$e=g(n),j(N.$$.fragment,n),_e=g(n),j(z.$$.fragment,n),this.h()},h(){f(s,"name","hf:doc:metadata"),f(s,"content",JSON.stringify(xs)),f(a,"id","detailed-usage-and-pinned-models"),f(a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(a,"href","#detailed-usage-and-pinned-models"),f(e,"class","relative group"),f(b,"id","api-usage-dashboard"),f(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(b,"href","#api-usage-dashboard"),f(k,"class","relative group"),f(L,"href","https://api-inference.huggingface.co/dashboard/"),f(L,"rel","nofollow"),f(X,"href","mailto:api-entreprise@hugginface.co"),fs(K.src,Ge="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/inference-api/dashboard_example.png")||f(K,"src",Ge),f(K,"width","600"),f(T,"id","pinned-models"),f(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(T,"href","#pinned-models"),f(A,"class","relative group"),f(U,"href","https://huggingface.co/pricing"),f(U,"rel","nofollow"),f(C,"href","https://api-inference.huggingface.co/dashboard/pinned_models"),f(C,"rel","nofollow")},m(n,l){r(document.head,s),p(n,t,l),p(n,e,l),r(e,a),r(a,h),q(S,h,null),r(e,ke),r(e,W),r(W,Ae),p(n,oe,l),p(n,k,l),r(k,b),r(b,Z),q(B,Z,null),r(k,be),r(k,ee),r(ee,Ee),p(n,le,l),p(n,E,l),r(E,Ie),r(E,L),r(L,Te),r(E,xe),p(n,re,l),p(n,I,l),r(I,Oe),r(I,X),r(X,Ne),r(I,ze),p(n,pe,l),p(n,K,l),p(n,ie,l),p(n,A,l),r(A,T),r(T,se),q(H,se,null),r(A,Se),r(A,ne),r(ne,Be),p(n,ce,l),p(n,J,l),r(J,Le),p(n,ue,l),p(n,x,l),r(x,Ke),r(x,U),r(U,He),r(x,Ue),p(n,de,l),p(n,D,l),r(D,Ce),p(n,he,l),p(n,G,l),r(G,C),r(C,Me),p(n,fe,l),p(n,Y,l),r(Y,Xe),p(n,me,l),q(O,n,l),p(n,ge,l),p(n,R,l),r(R,Je),p(n,$e,l),q(N,n,l),p(n,_e,l),q(z,n,l),we=!0},p(n,[l]){const M={};l&2&&(M.$$scope={dirty:l,ctx:n}),O.$set(M);const te={};l&2&&(te.$$scope={dirty:l,ctx:n}),N.$set(te);const ae={};l&2&&(ae.$$scope={dirty:l,ctx:n}),z.$set(ae)},i(n){we||(y(S.$$.fragment,n),y(B.$$.fragment,n),y(H.$$.fragment,n),y(O.$$.fragment,n),y(N.$$.fragment,n),y(z.$$.fragment,n),we=!0)},o(n){v(S.$$.fragment,n),v(B.$$.fragment,n),v(H.$$.fragment,n),v(O.$$.fragment,n),v(N.$$.fragment,n),v(z.$$.fragment,n),we=!1},d(n){o(s),n&&o(t),n&&o(e),P(S),n&&o(oe),n&&o(k),P(B),n&&o(le),n&&o(E),n&&o(re),n&&o(I),n&&o(pe),n&&o(K),n&&o(ie),n&&o(A),P(H),n&&o(ce),n&&o(J),n&&o(ue),n&&o(x),n&&o(de),n&&o(D),n&&o(he),n&&o(G),n&&o(fe),n&&o(Y),n&&o(me),P(O,n),n&&o(ge),n&&o(R),n&&o($e),P(N,n),n&&o(_e),P(z,n)}}}const xs={local:"detailed-usage-and-pinned-models",sections:[{local:"api-usage-dashboard",title:"API Usage dashboard"},{local:"pinned-models",title:"Pinned models"}],title:"Detailed usage and pinned models"};function Os(d){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ls extends cs{constructor(s){super();us(this,s,Os,Ts,ds,{})}}export{Ls as default,xs as metadata};
