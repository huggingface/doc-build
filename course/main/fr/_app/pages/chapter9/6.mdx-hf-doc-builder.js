import{S as pa,i as ua,s as ca,e as n,k as c,w as R,t as a,M as ma,c as o,d as t,m,a as l,x as U,h as r,b as p,N as wt,G as s,g as u,y as B,L as da,q as Y,o as W,B as K,v as fa}from"../../chunks/vendor-hf-doc-builder.js";import{I as ps}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as bt}from"../../chunks/CodeBlock-hf-doc-builder.js";function ha(qt){let j,Ne,y,I,ne,A,us,oe,cs,Ae,Q,ms,Ge,E,z,le,G,ds,ie,fs,Me,k,pe,hs,vs,ue,gs,_s,Le,X,ws,Se,w,M,bs,ce,qs,js,ys,L,Es,me,ks,$s,xs,S,Is,de,zs,Ps,Oe,Z,Cs,He,O,De,v,jt,Je,$,P,fe,H,Ns,he,As,Te,ee,Gs,Fe,D,Ve,se,Ms,Re,g,yt,Ue,d,Ls,ve,Ss,Os,ge,Hs,Ds,_e,Js,Ts,we,Fs,Vs,J,Rs,Us,be,Bs,Ys,qe,Ws,Ks,T,Qs,Xs,Be,x,C,je,F,Zs,ye,et,Ye,N,st,Ee,tt,at,We,h,rt,ke,nt,ot,$e,lt,it,xe,pt,ut,Ie,ct,mt,Ke,te,dt,Qe,V,Xe,_,Et,Ze,b,ft,ze,ht,vt,Pe,gt,_t,es;return A=new ps({}),G=new ps({}),O=new bt({props:{code:`import random

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
iface.launch()`}}),H=new ps({}),D=new bt({props:{code:`import requests
import tensorflow as tf

import gradio as gr

inception_net = tf.keras.applications.MobileNetV2()  # charger le mod\xE8le

# T\xE9l\xE9charger des \xE9tiquettes lisibles par l'homme pour ImageNet
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

inception_net = tf.keras.applications.MobileNetV2()  <span class="hljs-comment"># charger le mod\xE8le</span>

<span class="hljs-comment"># T\xE9l\xE9charger des \xE9tiquettes lisibles par l&#x27;homme pour ImageNet</span>
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
).launch()`}}),F=new ps({}),V=new bt({props:{code:`import requests
import tensorflow as tf

import gradio as gr

inception_net = tf.keras.applications.MobileNetV2()  # charger le mod\xE8le

# T\xE9l\xE9charger des \xE9tiquettes lisibles par l'homme pour ImageNet
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

inception_net = tf.keras.applications.MobileNetV2()  <span class="hljs-comment"># charger le mod\xE8le</span>

<span class="hljs-comment"># T\xE9l\xE9charger des \xE9tiquettes lisibles par l&#x27;homme pour ImageNet</span>
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
).launch(auth=(<span class="hljs-string">&quot;admin&quot;</span>, <span class="hljs-string">&quot;pass1234&quot;</span>))`}}),{c(){j=n("meta"),Ne=c(),y=n("h1"),I=n("a"),ne=n("span"),R(A.$$.fragment),us=c(),oe=n("span"),cs=a("Fonctionnalit\xE9s avanc\xE9es de l'interface"),Ae=c(),Q=n("p"),ms=a("Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),Ge=c(),E=n("h3"),z=n("a"),le=n("span"),R(G.$$.fragment),ds=c(),ie=n("span"),fs=a("Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),Me=c(),k=n("p"),pe=n("em"),hs=a("Gradio"),vs=a(" supporte "),ue=n("em"),gs=a("l\u2019\xE9tat de session"),_s=a(" o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Le=c(),X=n("p"),ws=a("Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),Se=c(),w=n("ul"),M=n("li"),bs=a("Passez un "),ce=n("em"),qs=a("param\xE8tre suppl\xE9mentaire"),js=a(" dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),ys=c(),L=n("li"),Es=a("A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),me=n("em"),ks=a("valeur de retour suppl\xE9mentaire"),$s=a("."),xs=c(),S=n("li"),Is=a("Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),de=n("code"),zs=a("Interface"),Ps=a("."),Oe=c(),Z=n("p"),Cs=a("Voir l\u2019exemple de chatbot ci-dessous :"),He=c(),R(O.$$.fragment),De=c(),v=n("iframe"),Je=a(`
Remarquez comment l'\xE9tat du composant de sortie persiste entre les soumissions. 
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l'\xE9tat.
`),$=n("h3"),P=n("a"),fe=n("span"),R(H.$$.fragment),Ns=c(),he=n("span"),As=a("Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Te=c(),ee=n("p"),Gs=a("La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Fe=c(),R(D.$$.fragment),Ve=c(),se=n("p"),Ms=a("Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Re=c(),g=n("iframe"),Ue=c(),d=n("p"),Ls=a("En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ve=n("em"),Ss=a("Gradio"),Os=a(", vous pouvez \xE9galement sp\xE9cifier "),ge=n("code"),Hs=a("shap"),Ds=a(" pour le param\xE8tre "),_e=n("code"),Js=a("interpretation"),Ts=a(" et d\xE9finir le param\xE8tre "),we=n("code"),Fs=a("num_shap"),Vs=a(". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),J=n("a"),Rs=a("ici"),Us=a(`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),be=n("code"),Bs=a("interpretation"),Ys=a(". Vous trouverez un exemple dans la page de d\xE9marrage de "),qe=n("em"),Ws=a("Gradio"),Ks=c(),T=n("a"),Qs=a("ici"),Xs=a("."),Be=c(),x=n("h3"),C=n("a"),je=n("span"),R(F.$$.fragment),Zs=c(),ye=n("span"),et=a("Ajouter l'authentification"),Ye=c(),N=n("p"),st=a("Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),Ee=n("em"),tt=a("Gradio"),at=a(" afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),We=c(),h=n("p"),rt=a("L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),ke=n("code"),nt=a("auth"),ot=a(" de la m\xE9thode "),$e=n("code"),lt=a("launch()"),it=a(". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),xe=n("code"),pt=a("True"),ut=a(" pour permettre l\u2019authentification, "),Ie=n("code"),ct=a("False"),mt=a(" sinon."),Ke=c(),te=n("p"),dt=a("Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),Qe=c(),R(V.$$.fragment),Xe=c(),_=n("iframe"),Ze=c(),b=n("p"),ft=a("Ceci conclut notre plong\xE9e dans la classe "),ze=n("code"),ht=a("Interface"),vt=a(" de "),Pe=n("em"),gt=a("Gradio"),_t=a(". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),this.h()},l(e){const i=ma('[data-svelte="svelte-1phssyn"]',document.head);j=o(i,"META",{name:!0,content:!0}),i.forEach(t),Ne=m(e),y=o(e,"H1",{class:!0});var ss=l(y);I=o(ss,"A",{id:!0,class:!0,href:!0});var kt=l(I);ne=o(kt,"SPAN",{});var $t=l(ne);U(A.$$.fragment,$t),$t.forEach(t),kt.forEach(t),us=m(ss),oe=o(ss,"SPAN",{});var xt=l(oe);cs=r(xt,"Fonctionnalit\xE9s avanc\xE9es de l'interface"),xt.forEach(t),ss.forEach(t),Ae=m(e),Q=o(e,"P",{});var It=l(Q);ms=r(It,"Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),It.forEach(t),Ge=m(e),E=o(e,"H3",{class:!0});var ts=l(E);z=o(ts,"A",{id:!0,class:!0,href:!0});var zt=l(z);le=o(zt,"SPAN",{});var Pt=l(le);U(G.$$.fragment,Pt),Pt.forEach(t),zt.forEach(t),ds=m(ts),ie=o(ts,"SPAN",{});var Ct=l(ie);fs=r(Ct,"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),Ct.forEach(t),ts.forEach(t),Me=m(e),k=o(e,"P",{});var Ce=l(k);pe=o(Ce,"EM",{});var Nt=l(pe);hs=r(Nt,"Gradio"),Nt.forEach(t),vs=r(Ce," supporte "),ue=o(Ce,"EM",{});var At=l(ue);gs=r(At,"l\u2019\xE9tat de session"),At.forEach(t),_s=r(Ce," o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Ce.forEach(t),Le=m(e),X=o(e,"P",{});var Gt=l(X);ws=r(Gt,"Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),Gt.forEach(t),Se=m(e),w=o(e,"UL",{});var ae=l(w);M=o(ae,"LI",{});var as=l(M);bs=r(as,"Passez un "),ce=o(as,"EM",{});var Mt=l(ce);qs=r(Mt,"param\xE8tre suppl\xE9mentaire"),Mt.forEach(t),js=r(as," dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),as.forEach(t),ys=m(ae),L=o(ae,"LI",{});var rs=l(L);Es=r(rs,"A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),me=o(rs,"EM",{});var Lt=l(me);ks=r(Lt,"valeur de retour suppl\xE9mentaire"),Lt.forEach(t),$s=r(rs,"."),rs.forEach(t),xs=m(ae),S=o(ae,"LI",{});var ns=l(S);Is=r(ns,"Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),de=o(ns,"CODE",{});var St=l(de);zs=r(St,"Interface"),St.forEach(t),Ps=r(ns,"."),ns.forEach(t),ae.forEach(t),Oe=m(e),Z=o(e,"P",{});var Ot=l(Z);Cs=r(Ot,"Voir l\u2019exemple de chatbot ci-dessous :"),Ot.forEach(t),He=m(e),U(O.$$.fragment,e),De=m(e),v=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(v).forEach(t),Je=r(e,`
Remarquez comment l'\xE9tat du composant de sortie persiste entre les soumissions. 
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l'\xE9tat.
`),$=o(e,"H3",{class:!0});var os=l($);P=o(os,"A",{id:!0,class:!0,href:!0});var Ht=l(P);fe=o(Ht,"SPAN",{});var Dt=l(fe);U(H.$$.fragment,Dt),Dt.forEach(t),Ht.forEach(t),Ns=m(os),he=o(os,"SPAN",{});var Jt=l(he);As=r(Jt,"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Jt.forEach(t),os.forEach(t),Te=m(e),ee=o(e,"P",{});var Tt=l(ee);Gs=r(Tt,"La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Tt.forEach(t),Fe=m(e),U(D.$$.fragment,e),Ve=m(e),se=o(e,"P",{});var Ft=l(se);Ms=r(Ft,"Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Ft.forEach(t),Re=m(e),g=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(t),Ue=m(e),d=o(e,"P",{});var f=l(d);Ls=r(f,"En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ve=o(f,"EM",{});var Vt=l(ve);Ss=r(Vt,"Gradio"),Vt.forEach(t),Os=r(f,", vous pouvez \xE9galement sp\xE9cifier "),ge=o(f,"CODE",{});var Rt=l(ge);Hs=r(Rt,"shap"),Rt.forEach(t),Ds=r(f," pour le param\xE8tre "),_e=o(f,"CODE",{});var Ut=l(_e);Js=r(Ut,"interpretation"),Ut.forEach(t),Ts=r(f," et d\xE9finir le param\xE8tre "),we=o(f,"CODE",{});var Bt=l(we);Fs=r(Bt,"num_shap"),Bt.forEach(t),Vs=r(f,". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),J=o(f,"A",{href:!0,rel:!0});var Yt=l(J);Rs=r(Yt,"ici"),Yt.forEach(t),Us=r(f,`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),be=o(f,"CODE",{});var Wt=l(be);Bs=r(Wt,"interpretation"),Wt.forEach(t),Ys=r(f,". Vous trouverez un exemple dans la page de d\xE9marrage de "),qe=o(f,"EM",{});var Kt=l(qe);Ws=r(Kt,"Gradio"),Kt.forEach(t),Ks=m(f),T=o(f,"A",{href:!0,rel:!0});var Qt=l(T);Qs=r(Qt,"ici"),Qt.forEach(t),Xs=r(f,"."),f.forEach(t),Be=m(e),x=o(e,"H3",{class:!0});var ls=l(x);C=o(ls,"A",{id:!0,class:!0,href:!0});var Xt=l(C);je=o(Xt,"SPAN",{});var Zt=l(je);U(F.$$.fragment,Zt),Zt.forEach(t),Xt.forEach(t),Zs=m(ls),ye=o(ls,"SPAN",{});var ea=l(ye);et=r(ea,"Ajouter l'authentification"),ea.forEach(t),ls.forEach(t),Ye=m(e),N=o(e,"P",{});var is=l(N);st=r(is,"Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),Ee=o(is,"EM",{});var sa=l(Ee);tt=r(sa,"Gradio"),sa.forEach(t),at=r(is," afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),is.forEach(t),We=m(e),h=o(e,"P",{});var q=l(h);rt=r(q,"L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),ke=o(q,"CODE",{});var ta=l(ke);nt=r(ta,"auth"),ta.forEach(t),ot=r(q," de la m\xE9thode "),$e=o(q,"CODE",{});var aa=l($e);lt=r(aa,"launch()"),aa.forEach(t),it=r(q,". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),xe=o(q,"CODE",{});var ra=l(xe);pt=r(ra,"True"),ra.forEach(t),ut=r(q," pour permettre l\u2019authentification, "),Ie=o(q,"CODE",{});var na=l(Ie);ct=r(na,"False"),na.forEach(t),mt=r(q," sinon."),q.forEach(t),Ke=m(e),te=o(e,"P",{});var oa=l(te);dt=r(oa,"Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),oa.forEach(t),Qe=m(e),U(V.$$.fragment,e),Xe=m(e),_=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(_).forEach(t),Ze=m(e),b=o(e,"P",{});var re=l(b);ft=r(re,"Ceci conclut notre plong\xE9e dans la classe "),ze=o(re,"CODE",{});var la=l(ze);ht=r(la,"Interface"),la.forEach(t),vt=r(re," de "),Pe=o(re,"EM",{});var ia=l(Pe);gt=r(ia,"Gradio"),ia.forEach(t),_t=r(re,". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),re.forEach(t),this.h()},h(){p(j,"name","hf:doc:metadata"),p(j,"content",JSON.stringify(va)),p(I,"id","fonctionnalits-avances-de-linterface"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#fonctionnalits-avances-de-linterface"),p(y,"class","relative group"),p(z,"id","utilisation-de-ltat-pour-faire-persister-les-donnes"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#utilisation-de-ltat-pour-faire-persister-les-donnes"),p(E,"class","relative group"),wt(v.src,jt="https://hf.space/gradioiframe/course-demos/Chatbot-Demo/+")||p(v,"src",jt),p(v,"frameborder","0"),p(v,"height","350"),p(v,"title","Gradio app"),p(v,"class","container p-0 flex-grow space-iframe"),p(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(P,"id","utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p($,"class","relative group"),wt(g.src,yt="https://hf.space/gradioiframe/akhaliq/gradio-image-interpretation/+")||p(g,"src",yt),p(g,"frameborder","0"),p(g,"height","570"),p(g,"title","Gradio app"),p(g,"class","container p-0 flex-grow space-iframe"),p(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(J,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(J,"rel","nofollow"),p(T,"href","https://gradio.app/getting_started/"),p(T,"rel","nofollow"),p(C,"id","ajouter-lauthentification"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#ajouter-lauthentification"),p(x,"class","relative group"),wt(_.src,Et="https://hf.space/gradioiframe/course-demos/gradio-image-interpretation/+")||p(_,"src",Et),p(_,"frameborder","0"),p(_,"height","570"),p(_,"title","Gradio app"),p(_,"class","container p-0 flex-grow space-iframe"),p(_,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(_,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){s(document.head,j),u(e,Ne,i),u(e,y,i),s(y,I),s(I,ne),B(A,ne,null),s(y,us),s(y,oe),s(oe,cs),u(e,Ae,i),u(e,Q,i),s(Q,ms),u(e,Ge,i),u(e,E,i),s(E,z),s(z,le),B(G,le,null),s(E,ds),s(E,ie),s(ie,fs),u(e,Me,i),u(e,k,i),s(k,pe),s(pe,hs),s(k,vs),s(k,ue),s(ue,gs),s(k,_s),u(e,Le,i),u(e,X,i),s(X,ws),u(e,Se,i),u(e,w,i),s(w,M),s(M,bs),s(M,ce),s(ce,qs),s(M,js),s(w,ys),s(w,L),s(L,Es),s(L,me),s(me,ks),s(L,$s),s(w,xs),s(w,S),s(S,Is),s(S,de),s(de,zs),s(S,Ps),u(e,Oe,i),u(e,Z,i),s(Z,Cs),u(e,He,i),B(O,e,i),u(e,De,i),u(e,v,i),u(e,Je,i),u(e,$,i),s($,P),s(P,fe),B(H,fe,null),s($,Ns),s($,he),s(he,As),u(e,Te,i),u(e,ee,i),s(ee,Gs),u(e,Fe,i),B(D,e,i),u(e,Ve,i),u(e,se,i),s(se,Ms),u(e,Re,i),u(e,g,i),u(e,Ue,i),u(e,d,i),s(d,Ls),s(d,ve),s(ve,Ss),s(d,Os),s(d,ge),s(ge,Hs),s(d,Ds),s(d,_e),s(_e,Js),s(d,Ts),s(d,we),s(we,Fs),s(d,Vs),s(d,J),s(J,Rs),s(d,Us),s(d,be),s(be,Bs),s(d,Ys),s(d,qe),s(qe,Ws),s(d,Ks),s(d,T),s(T,Qs),s(d,Xs),u(e,Be,i),u(e,x,i),s(x,C),s(C,je),B(F,je,null),s(x,Zs),s(x,ye),s(ye,et),u(e,Ye,i),u(e,N,i),s(N,st),s(N,Ee),s(Ee,tt),s(N,at),u(e,We,i),u(e,h,i),s(h,rt),s(h,ke),s(ke,nt),s(h,ot),s(h,$e),s($e,lt),s(h,it),s(h,xe),s(xe,pt),s(h,ut),s(h,Ie),s(Ie,ct),s(h,mt),u(e,Ke,i),u(e,te,i),s(te,dt),u(e,Qe,i),B(V,e,i),u(e,Xe,i),u(e,_,i),u(e,Ze,i),u(e,b,i),s(b,ft),s(b,ze),s(ze,ht),s(b,vt),s(b,Pe),s(Pe,gt),s(b,_t),es=!0},p:da,i(e){es||(Y(A.$$.fragment,e),Y(G.$$.fragment,e),Y(O.$$.fragment,e),Y(H.$$.fragment,e),Y(D.$$.fragment,e),Y(F.$$.fragment,e),Y(V.$$.fragment,e),es=!0)},o(e){W(A.$$.fragment,e),W(G.$$.fragment,e),W(O.$$.fragment,e),W(H.$$.fragment,e),W(D.$$.fragment,e),W(F.$$.fragment,e),W(V.$$.fragment,e),es=!1},d(e){t(j),e&&t(Ne),e&&t(y),K(A),e&&t(Ae),e&&t(Q),e&&t(Ge),e&&t(E),K(G),e&&t(Me),e&&t(k),e&&t(Le),e&&t(X),e&&t(Se),e&&t(w),e&&t(Oe),e&&t(Z),e&&t(He),K(O,e),e&&t(De),e&&t(v),e&&t(Je),e&&t($),K(H),e&&t(Te),e&&t(ee),e&&t(Fe),K(D,e),e&&t(Ve),e&&t(se),e&&t(Re),e&&t(g),e&&t(Ue),e&&t(d),e&&t(Be),e&&t(x),K(F),e&&t(Ye),e&&t(N),e&&t(We),e&&t(h),e&&t(Ke),e&&t(te),e&&t(Qe),K(V,e),e&&t(Xe),e&&t(_),e&&t(Ze),e&&t(b)}}}const va={local:"fonctionnalits-avances-de-linterface",sections:[{local:"utilisation-de-ltat-pour-faire-persister-les-donnes",title:"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"},{local:"utilisation-de-linterprtation-pour-comprendre-les-prdictions",title:"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"},{local:"ajouter-lauthentification",title:"Ajouter l'authentification"}],title:"Fonctionnalit\xE9s avanc\xE9es de l'interface"};function ga(qt){return fa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends pa{constructor(j){super();ua(this,j,ga,ha,ca,{})}}export{qa as default,va as metadata};
