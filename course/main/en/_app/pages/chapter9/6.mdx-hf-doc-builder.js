import{S as is,i as ls,s as ps,e as a,k as h,w as ie,t as n,M as cs,c as o,d as t,m as u,a as r,x as le,h as i,b as p,N as ns,G as s,g as c,y as pe,L as hs,q as ce,o as he,B as ue,v as us}from"../../chunks/vendor-hf-doc-builder.js";import{I as It}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as rs}from"../../chunks/CodeBlock-hf-doc-builder.js";function ds(At){let b,de,v,j,z,$,Le,W,Oe,fe,H,De,me,_,E,R,I,Ue,V,Be,we,q,Fe,Y,Je,ze,ge,L,We,ye,g,A,Re,K,Ve,Ye,Ke,N,Qe,Q,Xe,Ze,et,P,tt,X,st,at,be,O,ot,ve,S,_e,m,Nt,ke,D,nt,je,k,x,Z,T,rt,ee,it,Ee,U,lt,qe,G,xe,B,pt,$e,w,Pt,Ie,d,ct,te,ht,ut,se,dt,ft,ae,mt,wt,C,gt,yt,oe,bt,vt,M,_t,kt,Ae,y,jt,ne,Et,qt,re,xt,$t,Ne;return $=new It({}),I=new It({}),S=new rs({props:{code:`import random

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
iface.launch()`}}),T=new It({}),G=new rs({props:{code:`import requests
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
).launch()`}}),{c(){b=a("meta"),de=h(),v=a("h1"),j=a("a"),z=a("span"),ie($.$$.fragment),Le=h(),W=a("span"),Oe=n("Advanced Interface features"),fe=h(),H=a("p"),De=n("Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state and interpretation."),me=h(),_=a("h3"),E=a("a"),R=a("span"),ie(I.$$.fragment),Ue=h(),V=a("span"),Be=n("Using state to persist data"),we=h(),q=a("p"),Fe=n("Gradio supports "),Y=a("em"),Je=n("session state"),ze=n(`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),ge=h(),L=a("p"),We=n("To store data in a session state, you need to do three things:"),ye=h(),g=a("ol"),A=a("li"),Re=n("Pass in an "),K=a("em"),Ve=n("extra parameter"),Ye=n(" into your function, which represents the state of the interface."),Ke=h(),N=a("li"),Qe=n("At the end of the function, return the updated value of the state as an "),Q=a("em"),Xe=n("extra return value"),Ze=n("."),et=h(),P=a("li"),tt=n("Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),X=a("code"),st=n("Interface"),at=n("."),be=h(),O=a("p"),ot=n("See the chatbot example below:"),ve=h(),ie(S.$$.fragment),_e=h(),m=a("iframe"),ke=h(),D=a("p"),nt=n(`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),je=h(),k=a("h3"),x=a("a"),Z=a("span"),ie(T.$$.fragment),rt=h(),ee=a("span"),it=n("Using interpretation to understand predictions"),Ee=h(),U=a("p"),lt=n("Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),qe=h(),ie(G.$$.fragment),xe=h(),B=a("p"),pt=n("Test the interpretation function by submitting an input then clicking Interpret under the output component."),$e=h(),w=a("iframe"),Ie=h(),d=a("p"),ct=n("Besides the default interpretation method Gradio provides, you can also specify "),te=a("code"),ht=n("shap"),ut=n(" for the "),se=a("code"),dt=n("interpretation"),ft=n(" parameter and set the "),ae=a("code"),mt=n("num_shap"),wt=n(" parameter. This uses Shapley-based interpretation, which you can read more about "),C=a("a"),gt=n("here"),yt=n(`.
Lastly, you can also pass in your own interpretation function into the `),oe=a("code"),bt=n("interpretation"),vt=n(" parameter. See an example in Gradio\u2019s getting started page "),M=a("a"),_t=n("here"),kt=n("."),Ae=h(),y=a("p"),jt=n("This wraps up our deep dive into the "),ne=a("code"),Et=n("Interface"),qt=n(" class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),re=a("code"),xt=n("Interface"),$t=n(" into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),this.h()},l(e){const l=cs('[data-svelte="svelte-1phssyn"]',document.head);b=o(l,"META",{name:!0,content:!0}),l.forEach(t),de=u(e),v=o(e,"H1",{class:!0});var Pe=r(v);j=o(Pe,"A",{id:!0,class:!0,href:!0});var St=r(j);z=o(St,"SPAN",{});var Tt=r(z);le($.$$.fragment,Tt),Tt.forEach(t),St.forEach(t),Le=u(Pe),W=o(Pe,"SPAN",{});var Gt=r(W);Oe=i(Gt,"Advanced Interface features"),Gt.forEach(t),Pe.forEach(t),fe=u(e),H=o(e,"P",{});var Ct=r(H);De=i(Ct,"Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state and interpretation."),Ct.forEach(t),me=u(e),_=o(e,"H3",{class:!0});var Se=r(_);E=o(Se,"A",{id:!0,class:!0,href:!0});var Mt=r(E);R=o(Mt,"SPAN",{});var Ht=r(R);le(I.$$.fragment,Ht),Ht.forEach(t),Mt.forEach(t),Ue=u(Se),V=o(Se,"SPAN",{});var Lt=r(V);Be=i(Lt,"Using state to persist data"),Lt.forEach(t),Se.forEach(t),we=u(e),q=o(e,"P",{});var Te=r(q);Fe=i(Te,"Gradio supports "),Y=o(Te,"EM",{});var Ot=r(Y);Je=i(Ot,"session state"),Ot.forEach(t),ze=i(Te,`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),Te.forEach(t),ge=u(e),L=o(e,"P",{});var Dt=r(L);We=i(Dt,"To store data in a session state, you need to do three things:"),Dt.forEach(t),ye=u(e),g=o(e,"OL",{});var F=r(g);A=o(F,"LI",{});var Ge=r(A);Re=i(Ge,"Pass in an "),K=o(Ge,"EM",{});var Ut=r(K);Ve=i(Ut,"extra parameter"),Ut.forEach(t),Ye=i(Ge," into your function, which represents the state of the interface."),Ge.forEach(t),Ke=u(F),N=o(F,"LI",{});var Ce=r(N);Qe=i(Ce,"At the end of the function, return the updated value of the state as an "),Q=o(Ce,"EM",{});var Bt=r(Q);Xe=i(Bt,"extra return value"),Bt.forEach(t),Ze=i(Ce,"."),Ce.forEach(t),et=u(F),P=o(F,"LI",{});var Me=r(P);tt=i(Me,"Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),X=o(Me,"CODE",{});var Ft=r(X);st=i(Ft,"Interface"),Ft.forEach(t),at=i(Me,"."),Me.forEach(t),F.forEach(t),be=u(e),O=o(e,"P",{});var Jt=r(O);ot=i(Jt,"See the chatbot example below:"),Jt.forEach(t),ve=u(e),le(S.$$.fragment,e),_e=u(e),m=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(m).forEach(t),ke=u(e),D=o(e,"P",{});var zt=r(D);nt=i(zt,`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),zt.forEach(t),je=u(e),k=o(e,"H3",{class:!0});var He=r(k);x=o(He,"A",{id:!0,class:!0,href:!0});var Wt=r(x);Z=o(Wt,"SPAN",{});var Rt=r(Z);le(T.$$.fragment,Rt),Rt.forEach(t),Wt.forEach(t),rt=u(He),ee=o(He,"SPAN",{});var Vt=r(ee);it=i(Vt,"Using interpretation to understand predictions"),Vt.forEach(t),He.forEach(t),Ee=u(e),U=o(e,"P",{});var Yt=r(U);lt=i(Yt,"Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),Yt.forEach(t),qe=u(e),le(G.$$.fragment,e),xe=u(e),B=o(e,"P",{});var Kt=r(B);pt=i(Kt,"Test the interpretation function by submitting an input then clicking Interpret under the output component."),Kt.forEach(t),$e=u(e),w=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(w).forEach(t),Ie=u(e),d=o(e,"P",{});var f=r(d);ct=i(f,"Besides the default interpretation method Gradio provides, you can also specify "),te=o(f,"CODE",{});var Qt=r(te);ht=i(Qt,"shap"),Qt.forEach(t),ut=i(f," for the "),se=o(f,"CODE",{});var Xt=r(se);dt=i(Xt,"interpretation"),Xt.forEach(t),ft=i(f," parameter and set the "),ae=o(f,"CODE",{});var Zt=r(ae);mt=i(Zt,"num_shap"),Zt.forEach(t),wt=i(f," parameter. This uses Shapley-based interpretation, which you can read more about "),C=o(f,"A",{href:!0,rel:!0});var es=r(C);gt=i(es,"here"),es.forEach(t),yt=i(f,`.
Lastly, you can also pass in your own interpretation function into the `),oe=o(f,"CODE",{});var ts=r(oe);bt=i(ts,"interpretation"),ts.forEach(t),vt=i(f," parameter. See an example in Gradio\u2019s getting started page "),M=o(f,"A",{href:!0,rel:!0});var ss=r(M);_t=i(ss,"here"),ss.forEach(t),kt=i(f,"."),f.forEach(t),Ae=u(e),y=o(e,"P",{});var J=r(y);jt=i(J,"This wraps up our deep dive into the "),ne=o(J,"CODE",{});var as=r(ne);Et=i(as,"Interface"),as.forEach(t),qt=i(J," class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),re=o(J,"CODE",{});var os=r(re);xt=i(os,"Interface"),os.forEach(t),$t=i(J," into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),J.forEach(t),this.h()},h(){p(b,"name","hf:doc:metadata"),p(b,"content",JSON.stringify(fs)),p(j,"id","advanced-interface-features"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#advanced-interface-features"),p(v,"class","relative group"),p(E,"id","using-state-to-persist-data"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#using-state-to-persist-data"),p(_,"class","relative group"),ns(m.src,Nt="https://hf.space/gradioiframe/course-demos/Chatbot-Demo/+")||p(m,"src",Nt),p(m,"frameborder","0"),p(m,"height","350"),p(m,"title","Gradio app"),p(m,"class","container p-0 flex-grow space-iframe"),p(m,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(m,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(x,"id","using-interpretation-to-understand-predictions"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#using-interpretation-to-understand-predictions"),p(k,"class","relative group"),ns(w.src,Pt="https://hf.space/gradioiframe/course-demos/gradio-image-interpretation/+")||p(w,"src",Pt),p(w,"frameborder","0"),p(w,"height","570"),p(w,"title","Gradio app"),p(w,"class","container p-0 flex-grow space-iframe"),p(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(C,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(C,"rel","nofollow"),p(M,"href","https://gradio.app/getting_started/"),p(M,"rel","nofollow")},m(e,l){s(document.head,b),c(e,de,l),c(e,v,l),s(v,j),s(j,z),pe($,z,null),s(v,Le),s(v,W),s(W,Oe),c(e,fe,l),c(e,H,l),s(H,De),c(e,me,l),c(e,_,l),s(_,E),s(E,R),pe(I,R,null),s(_,Ue),s(_,V),s(V,Be),c(e,we,l),c(e,q,l),s(q,Fe),s(q,Y),s(Y,Je),s(q,ze),c(e,ge,l),c(e,L,l),s(L,We),c(e,ye,l),c(e,g,l),s(g,A),s(A,Re),s(A,K),s(K,Ve),s(A,Ye),s(g,Ke),s(g,N),s(N,Qe),s(N,Q),s(Q,Xe),s(N,Ze),s(g,et),s(g,P),s(P,tt),s(P,X),s(X,st),s(P,at),c(e,be,l),c(e,O,l),s(O,ot),c(e,ve,l),pe(S,e,l),c(e,_e,l),c(e,m,l),c(e,ke,l),c(e,D,l),s(D,nt),c(e,je,l),c(e,k,l),s(k,x),s(x,Z),pe(T,Z,null),s(k,rt),s(k,ee),s(ee,it),c(e,Ee,l),c(e,U,l),s(U,lt),c(e,qe,l),pe(G,e,l),c(e,xe,l),c(e,B,l),s(B,pt),c(e,$e,l),c(e,w,l),c(e,Ie,l),c(e,d,l),s(d,ct),s(d,te),s(te,ht),s(d,ut),s(d,se),s(se,dt),s(d,ft),s(d,ae),s(ae,mt),s(d,wt),s(d,C),s(C,gt),s(d,yt),s(d,oe),s(oe,bt),s(d,vt),s(d,M),s(M,_t),s(d,kt),c(e,Ae,l),c(e,y,l),s(y,jt),s(y,ne),s(ne,Et),s(y,qt),s(y,re),s(re,xt),s(y,$t),Ne=!0},p:hs,i(e){Ne||(ce($.$$.fragment,e),ce(I.$$.fragment,e),ce(S.$$.fragment,e),ce(T.$$.fragment,e),ce(G.$$.fragment,e),Ne=!0)},o(e){he($.$$.fragment,e),he(I.$$.fragment,e),he(S.$$.fragment,e),he(T.$$.fragment,e),he(G.$$.fragment,e),Ne=!1},d(e){t(b),e&&t(de),e&&t(v),ue($),e&&t(fe),e&&t(H),e&&t(me),e&&t(_),ue(I),e&&t(we),e&&t(q),e&&t(ge),e&&t(L),e&&t(ye),e&&t(g),e&&t(be),e&&t(O),e&&t(ve),ue(S,e),e&&t(_e),e&&t(m),e&&t(ke),e&&t(D),e&&t(je),e&&t(k),ue(T),e&&t(Ee),e&&t(U),e&&t(qe),ue(G,e),e&&t(xe),e&&t(B),e&&t($e),e&&t(w),e&&t(Ie),e&&t(d),e&&t(Ae),e&&t(y)}}}const fs={local:"advanced-interface-features",sections:[{local:"using-state-to-persist-data",title:"Using state to persist data"},{local:"using-interpretation-to-understand-predictions",title:"Using interpretation to understand predictions"}],title:"Advanced Interface features"};function ms(At){return us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bs extends is{constructor(b){super();ls(this,b,ms,ds,ps,{})}}export{bs as default,fs as metadata};
