import{S as Xa,i as Za,s as es,e as s,k as h,w as B,t as o,M as ts,c as n,d as t,m as u,a as r,x as Y,h as i,b as p,N as ca,F as a,g as c,y as z,L as as,q as R,o as V,B as W,v as ss}from"../../chunks/vendor-1e8b365d.js";import{I as rt}from"../../chunks/IconCopyLink-483c28ba.js";import{C as ha}from"../../chunks/CodeBlock-e5764662.js";function ns(ua){let k,Ie,j,x,re,S,it,ie,lt,Ae,K,pt,Ne,E,I,le,C,ct,pe,ht,Pe,A,ut,ce,dt,ft,Se,Q,mt,Ce,b,G,wt,he,gt,yt,bt,T,vt,ue,_t,kt,jt,D,Et,de,qt,$t,Ge,X,xt,Te,L,De,w,da,Le,Z,It,Me,q,N,fe,M,At,me,Nt,Oe,ee,Pt,Fe,O,He,te,St,Je,g,fa,Ue,d,Ct,we,Gt,Tt,ge,Dt,Lt,ye,Mt,Ot,F,Ft,Ht,be,Jt,Ut,H,Bt,Yt,Be,$,P,ve,J,zt,_e,Rt,Ye,ae,Vt,ze,f,Wt,ke,Kt,Qt,je,Xt,Zt,Ee,ea,ta,qe,aa,sa,Re,se,na,Ve,U,We,y,ma,Ke,v,oa,$e,ra,ia,xe,la,pa,Qe;return S=new rt({}),C=new rt({}),L=new ha({props:{code:`import random

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
iface.launch()`}}),M=new rt({}),O=new ha({props:{code:`import requests
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
).launch()`}}),J=new rt({}),U=new ha({props:{code:`import requests
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
).launch(auth=("admin", "pass1234"))`,highlighted:`<span class="hljs-keyword">import</span> requests
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
).launch(auth=(<span class="hljs-string">&quot;admin&quot;</span>, <span class="hljs-string">&quot;pass1234&quot;</span>))`}}),{c(){k=s("meta"),Ie=h(),j=s("h1"),x=s("a"),re=s("span"),B(S.$$.fragment),it=h(),ie=s("span"),lt=o("Advanced Interface features"),Ae=h(),K=s("p"),pt=o("Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, interpretation and authentication."),Ne=h(),E=s("h3"),I=s("a"),le=s("span"),B(C.$$.fragment),ct=h(),pe=s("span"),ht=o("Using state to persist data"),Pe=h(),A=s("p"),ut=o("Gradio supports "),ce=s("em"),dt=o("session state"),ft=o(`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),Se=h(),Q=s("p"),mt=o("To store data in a session state, you need to do three things:"),Ce=h(),b=s("ol"),G=s("li"),wt=o("Pass in an "),he=s("em"),gt=o("extra parameter"),yt=o(" into your function, which represents the state of the interface."),bt=h(),T=s("li"),vt=o("At the end of the function, return the updated value of the state as an "),ue=s("em"),_t=o("extra return value"),kt=o("."),jt=h(),D=s("li"),Et=o("Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),de=s("code"),qt=o("Interface"),$t=o("."),Ge=h(),X=s("p"),xt=o("See the chatbot example below:"),Te=h(),B(L.$$.fragment),De=h(),w=s("iframe"),Le=h(),Z=s("p"),It=o(`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),Me=h(),q=s("h3"),N=s("a"),fe=s("span"),B(M.$$.fragment),At=h(),me=s("span"),Nt=o("Using interpretation to understand predictions"),Oe=h(),ee=s("p"),Pt=o("Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),Fe=h(),B(O.$$.fragment),He=h(),te=s("p"),St=o("Test the interpretation function by submitting an input then clicking Interpret under the output component."),Je=h(),g=s("iframe"),Ue=h(),d=s("p"),Ct=o("Besides the default interpretation method Gradio provides, you can also specify "),we=s("code"),Gt=o("shap"),Tt=o(" for the "),ge=s("code"),Dt=o("interpretation"),Lt=o(" parameter and set the "),ye=s("code"),Mt=o("num_shap"),Ot=o(" parameter. This uses Shapley-based interpretation, which you can read more about "),F=s("a"),Ft=o("here"),Ht=o(`.
Lastly, you can also pass in your own interpretation function into the `),be=s("code"),Jt=o("interpretation"),Ut=o(" parameter. See an example in Gradio\u2019s getting started page "),H=s("a"),Bt=o("here"),Yt=o("."),Be=h(),$=s("h3"),P=s("a"),ve=s("span"),B(J.$$.fragment),zt=h(),_e=s("span"),Rt=o("Adding authentication"),Ye=h(),ae=s("p"),Vt=o("You may want to authenticate to your Gradio interface in order to control who can access and use your demo."),ze=h(),f=s("p"),Wt=o("Authentication can be added by providing a list of username/password tuples to the "),ke=s("code"),Kt=o("auth"),Qt=o(" parameter in the "),je=s("code"),Xt=o("launch()"),Zt=o(" method. For more complex authentication handling, you can pass a function that takes a username and password as arguments, and returns "),Ee=s("code"),ea=o("True"),ta=o(" to allow authentication, "),qe=s("code"),aa=o("False"),sa=o(" otherwise."),Re=h(),se=s("p"),na=o("Let\u2019s take the image classification demo above and add authentication:"),Ve=h(),B(U.$$.fragment),We=h(),y=s("iframe"),Ke=h(),v=s("p"),oa=o("This wraps up our deep dive into the "),$e=s("code"),ra=o("Interface"),ia=o(" class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),xe=s("code"),la=o("Interface"),pa=o(" into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),this.h()},l(e){const l=ts('[data-svelte="svelte-1phssyn"]',document.head);k=n(l,"META",{name:!0,content:!0}),l.forEach(t),Ie=u(e),j=n(e,"H1",{class:!0});var Xe=r(j);x=n(Xe,"A",{id:!0,class:!0,href:!0});var wa=r(x);re=n(wa,"SPAN",{});var ga=r(re);Y(S.$$.fragment,ga),ga.forEach(t),wa.forEach(t),it=u(Xe),ie=n(Xe,"SPAN",{});var ya=r(ie);lt=i(ya,"Advanced Interface features"),ya.forEach(t),Xe.forEach(t),Ae=u(e),K=n(e,"P",{});var ba=r(K);pt=i(ba,"Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, interpretation and authentication."),ba.forEach(t),Ne=u(e),E=n(e,"H3",{class:!0});var Ze=r(E);I=n(Ze,"A",{id:!0,class:!0,href:!0});var va=r(I);le=n(va,"SPAN",{});var _a=r(le);Y(C.$$.fragment,_a),_a.forEach(t),va.forEach(t),ct=u(Ze),pe=n(Ze,"SPAN",{});var ka=r(pe);ht=i(ka,"Using state to persist data"),ka.forEach(t),Ze.forEach(t),Pe=u(e),A=n(e,"P",{});var et=r(A);ut=i(et,"Gradio supports "),ce=n(et,"EM",{});var ja=r(ce);dt=i(ja,"session state"),ja.forEach(t),ft=i(et,`, where data persists across multiple submits within a
page load. Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model. Note that session state does not share data between different users of your model.`),et.forEach(t),Se=u(e),Q=n(e,"P",{});var Ea=r(Q);mt=i(Ea,"To store data in a session state, you need to do three things:"),Ea.forEach(t),Ce=u(e),b=n(e,"OL",{});var ne=r(b);G=n(ne,"LI",{});var tt=r(G);wt=i(tt,"Pass in an "),he=n(tt,"EM",{});var qa=r(he);gt=i(qa,"extra parameter"),qa.forEach(t),yt=i(tt," into your function, which represents the state of the interface."),tt.forEach(t),bt=u(ne),T=n(ne,"LI",{});var at=r(T);vt=i(at,"At the end of the function, return the updated value of the state as an "),ue=n(at,"EM",{});var $a=r(ue);_t=i($a,"extra return value"),$a.forEach(t),kt=i(at,"."),at.forEach(t),jt=u(ne),D=n(ne,"LI",{});var st=r(D);Et=i(st,"Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),de=n(st,"CODE",{});var xa=r(de);qt=i(xa,"Interface"),xa.forEach(t),$t=i(st,"."),st.forEach(t),ne.forEach(t),Ge=u(e),X=n(e,"P",{});var Ia=r(X);xt=i(Ia,"See the chatbot example below:"),Ia.forEach(t),Te=u(e),Y(L.$$.fragment,e),De=u(e),w=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(w).forEach(t),Le=u(e),Z=n(e,"P",{});var Aa=r(Z);It=i(Aa,`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),Aa.forEach(t),Me=u(e),q=n(e,"H3",{class:!0});var nt=r(q);N=n(nt,"A",{id:!0,class:!0,href:!0});var Na=r(N);fe=n(Na,"SPAN",{});var Pa=r(fe);Y(M.$$.fragment,Pa),Pa.forEach(t),Na.forEach(t),At=u(nt),me=n(nt,"SPAN",{});var Sa=r(me);Nt=i(Sa,"Using interpretation to understand predictions"),Sa.forEach(t),nt.forEach(t),Oe=u(e),ee=n(e,"P",{});var Ca=r(ee);Pt=i(Ca,"Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation:"),Ca.forEach(t),Fe=u(e),Y(O.$$.fragment,e),He=u(e),te=n(e,"P",{});var Ga=r(te);St=i(Ga,"Test the interpretation function by submitting an input then clicking Interpret under the output component."),Ga.forEach(t),Je=u(e),g=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(g).forEach(t),Ue=u(e),d=n(e,"P",{});var m=r(d);Ct=i(m,"Besides the default interpretation method Gradio provides, you can also specify "),we=n(m,"CODE",{});var Ta=r(we);Gt=i(Ta,"shap"),Ta.forEach(t),Tt=i(m," for the "),ge=n(m,"CODE",{});var Da=r(ge);Dt=i(Da,"interpretation"),Da.forEach(t),Lt=i(m," parameter and set the "),ye=n(m,"CODE",{});var La=r(ye);Mt=i(La,"num_shap"),La.forEach(t),Ot=i(m," parameter. This uses Shapley-based interpretation, which you can read more about "),F=n(m,"A",{href:!0,rel:!0});var Ma=r(F);Ft=i(Ma,"here"),Ma.forEach(t),Ht=i(m,`.
Lastly, you can also pass in your own interpretation function into the `),be=n(m,"CODE",{});var Oa=r(be);Jt=i(Oa,"interpretation"),Oa.forEach(t),Ut=i(m," parameter. See an example in Gradio\u2019s getting started page "),H=n(m,"A",{href:!0,rel:!0});var Fa=r(H);Bt=i(Fa,"here"),Fa.forEach(t),Yt=i(m,"."),m.forEach(t),Be=u(e),$=n(e,"H3",{class:!0});var ot=r($);P=n(ot,"A",{id:!0,class:!0,href:!0});var Ha=r(P);ve=n(Ha,"SPAN",{});var Ja=r(ve);Y(J.$$.fragment,Ja),Ja.forEach(t),Ha.forEach(t),zt=u(ot),_e=n(ot,"SPAN",{});var Ua=r(_e);Rt=i(Ua,"Adding authentication"),Ua.forEach(t),ot.forEach(t),Ye=u(e),ae=n(e,"P",{});var Ba=r(ae);Vt=i(Ba,"You may want to authenticate to your Gradio interface in order to control who can access and use your demo."),Ba.forEach(t),ze=u(e),f=n(e,"P",{});var _=r(f);Wt=i(_,"Authentication can be added by providing a list of username/password tuples to the "),ke=n(_,"CODE",{});var Ya=r(ke);Kt=i(Ya,"auth"),Ya.forEach(t),Qt=i(_," parameter in the "),je=n(_,"CODE",{});var za=r(je);Xt=i(za,"launch()"),za.forEach(t),Zt=i(_," method. For more complex authentication handling, you can pass a function that takes a username and password as arguments, and returns "),Ee=n(_,"CODE",{});var Ra=r(Ee);ea=i(Ra,"True"),Ra.forEach(t),ta=i(_," to allow authentication, "),qe=n(_,"CODE",{});var Va=r(qe);aa=i(Va,"False"),Va.forEach(t),sa=i(_," otherwise."),_.forEach(t),Re=u(e),se=n(e,"P",{});var Wa=r(se);na=i(Wa,"Let\u2019s take the image classification demo above and add authentication:"),Wa.forEach(t),Ve=u(e),Y(U.$$.fragment,e),We=u(e),y=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(y).forEach(t),Ke=u(e),v=n(e,"P",{});var oe=r(v);oa=i(oe,"This wraps up our deep dive into the "),$e=n(oe,"CODE",{});var Ka=r($e);ra=i(Ka,"Interface"),Ka.forEach(t),ia=i(oe," class of Gradio. As we\u2019ve seen, this class makes it simple to create machine learning demos in a few lines of Python code. However, sometimes you\u2019ll want to customise your demo by changing the layout or chaining multiple prediction functions together. Wouldn\u2019t it be nice if we could somehow split the "),xe=n(oe,"CODE",{});var Qa=r(xe);la=i(Qa,"Interface"),Qa.forEach(t),pa=i(oe," into customizable \u201Cblocks\u201D? Fortunately, there is! That\u2019s the topic of the final section."),oe.forEach(t),this.h()},h(){p(k,"name","hf:doc:metadata"),p(k,"content",JSON.stringify(os)),p(x,"id","advanced-interface-features"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#advanced-interface-features"),p(j,"class","relative group"),p(I,"id","using-state-to-persist-data"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#using-state-to-persist-data"),p(E,"class","relative group"),ca(w.src,da="https://hf.space/gradioiframe/dawood/Chatbot-Demo/+")||p(w,"src",da),p(w,"frameborder","0"),p(w,"height","350"),p(w,"title","Gradio app"),p(w,"class","container p-0 flex-grow space-iframe"),p(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(N,"id","using-interpretation-to-understand-predictions"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#using-interpretation-to-understand-predictions"),p(q,"class","relative group"),ca(g.src,fa="https://hf.space/gradioiframe/akhaliq/gradio-image-interpretation/+")||p(g,"src",fa),p(g,"frameborder","0"),p(g,"height","570"),p(g,"title","Gradio app"),p(g,"class","container p-0 flex-grow space-iframe"),p(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(F,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(F,"rel","nofollow"),p(H,"href","https://gradio.app/getting_started/"),p(H,"rel","nofollow"),p(P,"id","adding-authentication"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#adding-authentication"),p($,"class","relative group"),ca(y.src,ma="https://hf.space/gradioiframe/dawood/Auth-Image-Classification/+")||p(y,"src",ma),p(y,"frameborder","0"),p(y,"height","570"),p(y,"title","Gradio app"),p(y,"class","container p-0 flex-grow space-iframe"),p(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,l){a(document.head,k),c(e,Ie,l),c(e,j,l),a(j,x),a(x,re),z(S,re,null),a(j,it),a(j,ie),a(ie,lt),c(e,Ae,l),c(e,K,l),a(K,pt),c(e,Ne,l),c(e,E,l),a(E,I),a(I,le),z(C,le,null),a(E,ct),a(E,pe),a(pe,ht),c(e,Pe,l),c(e,A,l),a(A,ut),a(A,ce),a(ce,dt),a(A,ft),c(e,Se,l),c(e,Q,l),a(Q,mt),c(e,Ce,l),c(e,b,l),a(b,G),a(G,wt),a(G,he),a(he,gt),a(G,yt),a(b,bt),a(b,T),a(T,vt),a(T,ue),a(ue,_t),a(T,kt),a(b,jt),a(b,D),a(D,Et),a(D,de),a(de,qt),a(D,$t),c(e,Ge,l),c(e,X,l),a(X,xt),c(e,Te,l),z(L,e,l),c(e,De,l),c(e,w,l),c(e,Le,l),c(e,Z,l),a(Z,It),c(e,Me,l),c(e,q,l),a(q,N),a(N,fe),z(M,fe,null),a(q,At),a(q,me),a(me,Nt),c(e,Oe,l),c(e,ee,l),a(ee,Pt),c(e,Fe,l),z(O,e,l),c(e,He,l),c(e,te,l),a(te,St),c(e,Je,l),c(e,g,l),c(e,Ue,l),c(e,d,l),a(d,Ct),a(d,we),a(we,Gt),a(d,Tt),a(d,ge),a(ge,Dt),a(d,Lt),a(d,ye),a(ye,Mt),a(d,Ot),a(d,F),a(F,Ft),a(d,Ht),a(d,be),a(be,Jt),a(d,Ut),a(d,H),a(H,Bt),a(d,Yt),c(e,Be,l),c(e,$,l),a($,P),a(P,ve),z(J,ve,null),a($,zt),a($,_e),a(_e,Rt),c(e,Ye,l),c(e,ae,l),a(ae,Vt),c(e,ze,l),c(e,f,l),a(f,Wt),a(f,ke),a(ke,Kt),a(f,Qt),a(f,je),a(je,Xt),a(f,Zt),a(f,Ee),a(Ee,ea),a(f,ta),a(f,qe),a(qe,aa),a(f,sa),c(e,Re,l),c(e,se,l),a(se,na),c(e,Ve,l),z(U,e,l),c(e,We,l),c(e,y,l),c(e,Ke,l),c(e,v,l),a(v,oa),a(v,$e),a($e,ra),a(v,ia),a(v,xe),a(xe,la),a(v,pa),Qe=!0},p:as,i(e){Qe||(R(S.$$.fragment,e),R(C.$$.fragment,e),R(L.$$.fragment,e),R(M.$$.fragment,e),R(O.$$.fragment,e),R(J.$$.fragment,e),R(U.$$.fragment,e),Qe=!0)},o(e){V(S.$$.fragment,e),V(C.$$.fragment,e),V(L.$$.fragment,e),V(M.$$.fragment,e),V(O.$$.fragment,e),V(J.$$.fragment,e),V(U.$$.fragment,e),Qe=!1},d(e){t(k),e&&t(Ie),e&&t(j),W(S),e&&t(Ae),e&&t(K),e&&t(Ne),e&&t(E),W(C),e&&t(Pe),e&&t(A),e&&t(Se),e&&t(Q),e&&t(Ce),e&&t(b),e&&t(Ge),e&&t(X),e&&t(Te),W(L,e),e&&t(De),e&&t(w),e&&t(Le),e&&t(Z),e&&t(Me),e&&t(q),W(M),e&&t(Oe),e&&t(ee),e&&t(Fe),W(O,e),e&&t(He),e&&t(te),e&&t(Je),e&&t(g),e&&t(Ue),e&&t(d),e&&t(Be),e&&t($),W(J),e&&t(Ye),e&&t(ae),e&&t(ze),e&&t(f),e&&t(Re),e&&t(se),e&&t(Ve),W(U,e),e&&t(We),e&&t(y),e&&t(Ke),e&&t(v)}}}const os={local:"advanced-interface-features",sections:[{local:"using-state-to-persist-data",title:"Using state to persist data"},{local:"using-interpretation-to-understand-predictions",title:"Using interpretation to understand predictions"},{local:"adding-authentication",title:"Adding authentication"}],title:"Advanced Interface features"};function rs(ua){return ss(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cs extends Xa{constructor(k){super();Za(this,k,rs,ns,es,{})}}export{cs as default,os as metadata};
