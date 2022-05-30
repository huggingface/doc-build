import{S as ps,i as cs,s as hs,e as a,k as h,w as W,t as r,M as us,c as o,d as t,m as u,a as i,x as R,h as l,b as c,N as is,G as s,g as p,y as V,L as fs,q as Y,o as K,B as Q,v as ds}from"../../chunks/vendor-hf-doc-builder.js";import{I as Nt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ls}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as ms}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";function ws(Pt){let b,de,v,j,X,x,Oe,Z,Ue,me,I,we,H,Be,ge,_,E,ee,A,Fe,te,ze,ye,$,Je,se,We,Re,be,L,Ve,ve,g,N,Ye,ae,Ke,Qe,Xe,P,Ze,oe,et,tt,st,S,at,ne,ot,nt,_e,O,rt,ke,T,je,m,St,Ee,U,it,$e,k,q,re,G,lt,ie,pt,qe,B,ct,xe,C,Ie,F,ht,Ae,w,Tt,Ne,f,ut,le,ft,dt,pe,mt,wt,ce,gt,yt,D,bt,vt,he,_t,kt,M,jt,Et,Pe,y,$t,ue,qt,xt,fe,It,At,Se;return x=new Nt({}),I=new ms({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter9/section6.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter9/section6.ipynb"}]}}),A=new Nt({}),T=new ls({props:{code:`import random

import gradio as gr


def chat(message, history):
    history = history or []
    if message.startswith("How many"):
        response = random.randint(1, 10)
    elif message.startswith("How"):
        response = random.choice(["Great", "Good", "Okay", "Bad"])
    elif message.startswith("Where"):
        response = random.choice(["Here", "There", "Somewhere"])
    else:
        response = "I don't know"
    history.append((message, response))
    return history, history


iface = gr.Interface(
    chat,
    ["text", "state"],
    ["chatbot", "state"],
    allow_screenshot=False,
    allow_flagging="never",
)
iface.launch()`,highlighted:`<span class="hljs-keyword">import</span> random

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">chat</span>(<span class="hljs-params">message, history</span>):
    history = history <span class="hljs-keyword">or</span> []
    <span class="hljs-keyword">if</span> message.startswith(<span class="hljs-string">&quot;How many&quot;</span>):
        response = random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>)
    <span class="hljs-keyword">elif</span> message.startswith(<span class="hljs-string">&quot;How&quot;</span>):
        response = random.choice([<span class="hljs-string">&quot;Great&quot;</span>, <span class="hljs-string">&quot;Good&quot;</span>, <span class="hljs-string">&quot;Okay&quot;</span>, <span class="hljs-string">&quot;Bad&quot;</span>])
    <span class="hljs-keyword">elif</span> message.startswith(<span class="hljs-string">&quot;Where&quot;</span>):
        response = random.choice([<span class="hljs-string">&quot;Here&quot;</span>, <span class="hljs-string">&quot;There&quot;</span>, <span class="hljs-string">&quot;Somewhere&quot;</span>])
    <span class="hljs-keyword">else</span>:
        response = <span class="hljs-string">&quot;I don&#x27;t know&quot;</span>
    history.append((message, response))
    <span class="hljs-keyword">return</span> history, history


iface = gr.Interface(
    chat,
    [<span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;state&quot;</span>],
    [<span class="hljs-string">&quot;chatbot&quot;</span>, <span class="hljs-string">&quot;state&quot;</span>],
    allow_screenshot=<span class="hljs-literal">False</span>,
    allow_flagging=<span class="hljs-string">&quot;never&quot;</span>,
)
iface.launch()`}}),G=new Nt({}),C=new ls({props:{code:`import requests
import tensorflow as tf

import gradio as gr

inception_net = tf.keras.applications.MobileNetV2()  # load the model

# Download human-readable labels for ImageNet.
response = requests.get("https://git.io/JJkYN")
labels = response.text.split("\\n")


def classify_image(inp):
    inp = inp.reshape((-1, 224, 224, 3))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    return {labels[i]: float(prediction[i]) for i in range(1000)}


image = gr.Image(shape=(224, 224))
label = gr.Label(num_top_classes=3)

title = "Gradio Image Classifiction + Interpretation Example"
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation="default", title=title
).launch()`,highlighted:`<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

inception_net = tf.keras.applications.MobileNetV2()  <span class="hljs-comment"># load the model</span>

<span class="hljs-comment"># Download human-readable labels for ImageNet.</span>
response = requests.get(<span class="hljs-string">&quot;https://git.io/JJkYN&quot;</span>)
labels = response.text.split(<span class="hljs-string">&quot;\\n&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">classify_image</span>(<span class="hljs-params">inp</span>):
    inp = inp.reshape((-<span class="hljs-number">1</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>, <span class="hljs-number">3</span>))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    <span class="hljs-keyword">return</span> {labels[i]: <span class="hljs-built_in">float</span>(prediction[i]) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)}


image = gr.Image(shape=(<span class="hljs-number">224</span>, <span class="hljs-number">224</span>))
label = gr.Label(num_top_classes=<span class="hljs-number">3</span>)

title = <span class="hljs-string">&quot;Gradio Image Classifiction + Interpretation Example&quot;</span>
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation=<span class="hljs-string">&quot;default&quot;</span>, title=title
).launch()`}}),{c(){b=a("meta"),de=h(),v=a("h1"),j=a("a"),X=a("span"),W(x.$$.fragment),Oe=h(),Z=a("span"),Ue=r("Advanced Interface features"),me=h(),W(I.$$.fragment),we=h(),H=a("p"),Be=r("Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, and interpretation."),ge=h(),_=a("h3"),E=a("a"),ee=a("span"),W(A.$$.fragment),Fe=h(),te=a("span"),ze=r("Using state to persist data"),ye=h(),$=a("p"),Je=r("Gradio supports "),se=a("em"),We=r("session state"),Re=r(`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),be=h(),L=a("p"),Ve=r("To store data in a session state, you need to do three things:"),ve=h(),g=a("ol"),N=a("li"),Ye=r("Pass in an "),ae=a("em"),Ke=r("extra parameter"),Qe=r(" into your function, which represents the state of the interface."),Xe=h(),P=a("li"),Ze=r("At the end of the function, return the updated value of the state as an "),oe=a("em"),et=r("extra return value"),tt=r("."),st=h(),S=a("li"),at=r("Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),ne=a("code"),ot=r("Interface"),nt=r("."),_e=h(),O=a("p"),rt=r("See the chatbot example below:"),ke=h(),W(T.$$.fragment),je=h(),m=a("iframe"),Ee=h(),U=a("p"),it=r(`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),$e=h(),k=a("h3"),q=a("a"),re=a("span"),W(G.$$.fragment),lt=h(),ie=a("span"),pt=r("Using interpretation to understand predictions"),qe=h(),B=a("p"),ct=r("Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),xe=h(),W(C.$$.fragment),Ie=h(),F=a("p"),ht=r("Test the interpretation function by submitting an input then clicking Interpret under the output component."),Ae=h(),w=a("iframe"),Ne=h(),f=a("p"),ut=r("Besides the default interpretation method Gradio provides, you can also specify "),le=a("code"),ft=r("shap"),dt=r(" for the "),pe=a("code"),mt=r("interpretation"),wt=r(" parameter and set the "),ce=a("code"),gt=r("num_shap"),yt=r(" parameter. This uses Shapley-based interpretation, which you can read more about "),D=a("a"),bt=r("here"),vt=r(`.
Lastly, you can also pass in your own interpretation function into the `),he=a("code"),_t=r("interpretation"),kt=r(" parameter. See an example in Gradio\u2019s getting started page "),M=a("a"),jt=r("here"),Et=r("."),Pe=h(),y=a("p"),$t=r("This wraps up our deep dive into the "),ue=a("code"),qt=r("Interface"),xt=r(" class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),fe=a("code"),It=r("Interface"),At=r(" into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),this.h()},l(e){const n=us('[data-svelte="svelte-1phssyn"]',document.head);b=o(n,"META",{name:!0,content:!0}),n.forEach(t),de=u(e),v=o(e,"H1",{class:!0});var Te=i(v);j=o(Te,"A",{id:!0,class:!0,href:!0});var Gt=i(j);X=o(Gt,"SPAN",{});var Ct=i(X);R(x.$$.fragment,Ct),Ct.forEach(t),Gt.forEach(t),Oe=u(Te),Z=o(Te,"SPAN",{});var Dt=i(Z);Ue=l(Dt,"Advanced Interface features"),Dt.forEach(t),Te.forEach(t),me=u(e),R(I.$$.fragment,e),we=u(e),H=o(e,"P",{});var Mt=i(H);Be=l(Mt,"Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, and interpretation."),Mt.forEach(t),ge=u(e),_=o(e,"H3",{class:!0});var Ge=i(_);E=o(Ge,"A",{id:!0,class:!0,href:!0});var Ht=i(E);ee=o(Ht,"SPAN",{});var Lt=i(ee);R(A.$$.fragment,Lt),Lt.forEach(t),Ht.forEach(t),Fe=u(Ge),te=o(Ge,"SPAN",{});var Ot=i(te);ze=l(Ot,"Using state to persist data"),Ot.forEach(t),Ge.forEach(t),ye=u(e),$=o(e,"P",{});var Ce=i($);Je=l(Ce,"Gradio supports "),se=o(Ce,"EM",{});var Ut=i(se);We=l(Ut,"session state"),Ut.forEach(t),Re=l(Ce,`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),Ce.forEach(t),be=u(e),L=o(e,"P",{});var Bt=i(L);Ve=l(Bt,"To store data in a session state, you need to do three things:"),Bt.forEach(t),ve=u(e),g=o(e,"OL",{});var z=i(g);N=o(z,"LI",{});var De=i(N);Ye=l(De,"Pass in an "),ae=o(De,"EM",{});var Ft=i(ae);Ke=l(Ft,"extra parameter"),Ft.forEach(t),Qe=l(De," into your function, which represents the state of the interface."),De.forEach(t),Xe=u(z),P=o(z,"LI",{});var Me=i(P);Ze=l(Me,"At the end of the function, return the updated value of the state as an "),oe=o(Me,"EM",{});var zt=i(oe);et=l(zt,"extra return value"),zt.forEach(t),tt=l(Me,"."),Me.forEach(t),st=u(z),S=o(z,"LI",{});var He=i(S);at=l(He,"Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),ne=o(He,"CODE",{});var Jt=i(ne);ot=l(Jt,"Interface"),Jt.forEach(t),nt=l(He,"."),He.forEach(t),z.forEach(t),_e=u(e),O=o(e,"P",{});var Wt=i(O);rt=l(Wt,"See the chatbot example below:"),Wt.forEach(t),ke=u(e),R(T.$$.fragment,e),je=u(e),m=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(m).forEach(t),Ee=u(e),U=o(e,"P",{});var Rt=i(U);it=l(Rt,`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),Rt.forEach(t),$e=u(e),k=o(e,"H3",{class:!0});var Le=i(k);q=o(Le,"A",{id:!0,class:!0,href:!0});var Vt=i(q);re=o(Vt,"SPAN",{});var Yt=i(re);R(G.$$.fragment,Yt),Yt.forEach(t),Vt.forEach(t),lt=u(Le),ie=o(Le,"SPAN",{});var Kt=i(ie);pt=l(Kt,"Using interpretation to understand predictions"),Kt.forEach(t),Le.forEach(t),qe=u(e),B=o(e,"P",{});var Qt=i(B);ct=l(Qt,"Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),Qt.forEach(t),xe=u(e),R(C.$$.fragment,e),Ie=u(e),F=o(e,"P",{});var Xt=i(F);ht=l(Xt,"Test the interpretation function by submitting an input then clicking Interpret under the output component."),Xt.forEach(t),Ae=u(e),w=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),i(w).forEach(t),Ne=u(e),f=o(e,"P",{});var d=i(f);ut=l(d,"Besides the default interpretation method Gradio provides, you can also specify "),le=o(d,"CODE",{});var Zt=i(le);ft=l(Zt,"shap"),Zt.forEach(t),dt=l(d," for the "),pe=o(d,"CODE",{});var es=i(pe);mt=l(es,"interpretation"),es.forEach(t),wt=l(d," parameter and set the "),ce=o(d,"CODE",{});var ts=i(ce);gt=l(ts,"num_shap"),ts.forEach(t),yt=l(d," parameter. This uses Shapley-based interpretation, which you can read more about "),D=o(d,"A",{href:!0,rel:!0});var ss=i(D);bt=l(ss,"here"),ss.forEach(t),vt=l(d,`.
Lastly, you can also pass in your own interpretation function into the `),he=o(d,"CODE",{});var as=i(he);_t=l(as,"interpretation"),as.forEach(t),kt=l(d," parameter. See an example in Gradio\u2019s getting started page "),M=o(d,"A",{href:!0,rel:!0});var os=i(M);jt=l(os,"here"),os.forEach(t),Et=l(d,"."),d.forEach(t),Pe=u(e),y=o(e,"P",{});var J=i(y);$t=l(J,"This wraps up our deep dive into the "),ue=o(J,"CODE",{});var ns=i(ue);qt=l(ns,"Interface"),ns.forEach(t),xt=l(J," class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),fe=o(J,"CODE",{});var rs=i(fe);It=l(rs,"Interface"),rs.forEach(t),At=l(J," into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),J.forEach(t),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(gs)),c(j,"id","advanced-interface-features"),c(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(j,"href","#advanced-interface-features"),c(v,"class","relative group"),c(E,"id","using-state-to-persist-data"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#using-state-to-persist-data"),c(_,"class","relative group"),is(m.src,St="https://hf.space/gradioiframe/course-demos/Chatbot-Demo/+")||c(m,"src",St),c(m,"frameborder","0"),c(m,"height","350"),c(m,"title","Gradio app"),c(m,"class","container p-0 flex-grow space-iframe"),c(m,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(m,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(q,"id","using-interpretation-to-understand-predictions"),c(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(q,"href","#using-interpretation-to-understand-predictions"),c(k,"class","relative group"),is(w.src,Tt="https://hf.space/gradioiframe/course-demos/gradio-image-interpretation/+")||c(w,"src",Tt),c(w,"frameborder","0"),c(w,"height","570"),c(w,"title","Gradio app"),c(w,"class","container p-0 flex-grow space-iframe"),c(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(D,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),c(D,"rel","nofollow"),c(M,"href","https://gradio.app/getting_started/"),c(M,"rel","nofollow")},m(e,n){s(document.head,b),p(e,de,n),p(e,v,n),s(v,j),s(j,X),V(x,X,null),s(v,Oe),s(v,Z),s(Z,Ue),p(e,me,n),V(I,e,n),p(e,we,n),p(e,H,n),s(H,Be),p(e,ge,n),p(e,_,n),s(_,E),s(E,ee),V(A,ee,null),s(_,Fe),s(_,te),s(te,ze),p(e,ye,n),p(e,$,n),s($,Je),s($,se),s(se,We),s($,Re),p(e,be,n),p(e,L,n),s(L,Ve),p(e,ve,n),p(e,g,n),s(g,N),s(N,Ye),s(N,ae),s(ae,Ke),s(N,Qe),s(g,Xe),s(g,P),s(P,Ze),s(P,oe),s(oe,et),s(P,tt),s(g,st),s(g,S),s(S,at),s(S,ne),s(ne,ot),s(S,nt),p(e,_e,n),p(e,O,n),s(O,rt),p(e,ke,n),V(T,e,n),p(e,je,n),p(e,m,n),p(e,Ee,n),p(e,U,n),s(U,it),p(e,$e,n),p(e,k,n),s(k,q),s(q,re),V(G,re,null),s(k,lt),s(k,ie),s(ie,pt),p(e,qe,n),p(e,B,n),s(B,ct),p(e,xe,n),V(C,e,n),p(e,Ie,n),p(e,F,n),s(F,ht),p(e,Ae,n),p(e,w,n),p(e,Ne,n),p(e,f,n),s(f,ut),s(f,le),s(le,ft),s(f,dt),s(f,pe),s(pe,mt),s(f,wt),s(f,ce),s(ce,gt),s(f,yt),s(f,D),s(D,bt),s(f,vt),s(f,he),s(he,_t),s(f,kt),s(f,M),s(M,jt),s(f,Et),p(e,Pe,n),p(e,y,n),s(y,$t),s(y,ue),s(ue,qt),s(y,xt),s(y,fe),s(fe,It),s(y,At),Se=!0},p:fs,i(e){Se||(Y(x.$$.fragment,e),Y(I.$$.fragment,e),Y(A.$$.fragment,e),Y(T.$$.fragment,e),Y(G.$$.fragment,e),Y(C.$$.fragment,e),Se=!0)},o(e){K(x.$$.fragment,e),K(I.$$.fragment,e),K(A.$$.fragment,e),K(T.$$.fragment,e),K(G.$$.fragment,e),K(C.$$.fragment,e),Se=!1},d(e){t(b),e&&t(de),e&&t(v),Q(x),e&&t(me),Q(I,e),e&&t(we),e&&t(H),e&&t(ge),e&&t(_),Q(A),e&&t(ye),e&&t($),e&&t(be),e&&t(L),e&&t(ve),e&&t(g),e&&t(_e),e&&t(O),e&&t(ke),Q(T,e),e&&t(je),e&&t(m),e&&t(Ee),e&&t(U),e&&t($e),e&&t(k),Q(G),e&&t(qe),e&&t(B),e&&t(xe),Q(C,e),e&&t(Ie),e&&t(F),e&&t(Ae),e&&t(w),e&&t(Ne),e&&t(f),e&&t(Pe),e&&t(y)}}}const gs={local:"advanced-interface-features",sections:[{local:"using-state-to-persist-data",title:"Using state to persist data"},{local:"using-interpretation-to-understand-predictions",title:"Using interpretation to understand predictions"}],title:"Advanced Interface features"};function ys(Pt){return ds(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class js extends ps{constructor(b){super();cs(this,b,ys,ws,hs,{})}}export{js as default,gs as metadata};
