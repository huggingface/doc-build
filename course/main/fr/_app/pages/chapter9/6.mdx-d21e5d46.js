import{S as da,i as fa,s as ha,e as n,k as c,w as R,t as a,M as va,c as o,d as s,m,a as l,x as U,h as r,b as p,N as jt,F as t,g as u,y as B,L as ga,q as Y,o as W,B as K,v as _a}from"../../chunks/vendor-1e8b365d.js";import{I as cs}from"../../chunks/IconCopyLink-483c28ba.js";import{C as yt}from"../../chunks/CodeBlock-e5764662.js";function wa(Et){let j,Ne,y,I,oe,N,ms,le,ds,Ge,Q,fs,Me,E,z,ie,G,hs,pe,vs,Le,k,ue,gs,_s,ce,ws,bs,Se,X,qs,Oe,w,M,js,me,ys,Es,ks,L,$s,de,xs,Is,zs,S,Ps,fe,Cs,As,He,Z,Ns,De,O,Fe,v,kt,Je,ee,Gs,Te,$,P,he,H,Ms,ve,Ls,Ve,se,Ss,Re,D,Ue,te,Os,Be,g,$t,Ye,d,Hs,ge,Ds,Fs,_e,Js,Ts,we,Vs,Rs,be,Us,Bs,F,Ys,Ws,qe,Ks,Qs,je,Xs,Zs,J,et,st,We,x,C,ye,T,tt,Ee,at,Ke,A,rt,ke,nt,ot,Qe,h,lt,$e,it,pt,xe,ut,ct,Ie,mt,dt,ze,ft,ht,Xe,ae,vt,Ze,V,es,_,xt,ss,b,gt,Pe,_t,wt,Ce,bt,qt,ts;return N=new cs({}),G=new cs({}),O=new yt({props:{code:`import random

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
iface.launch()`}}),H=new cs({}),D=new yt({props:{code:`import requests
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
).launch()`}}),T=new cs({}),V=new yt({props:{code:`import requests
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
).launch(auth=(<span class="hljs-string">&quot;admin&quot;</span>, <span class="hljs-string">&quot;pass1234&quot;</span>))`}}),{c(){j=n("meta"),Ne=c(),y=n("h1"),I=n("a"),oe=n("span"),R(N.$$.fragment),ms=c(),le=n("span"),ds=a("Fonctionnalit\xE9s avanc\xE9es de l'interface"),Ge=c(),Q=n("p"),fs=a("Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),Me=c(),E=n("h3"),z=n("a"),ie=n("span"),R(G.$$.fragment),hs=c(),pe=n("span"),vs=a("Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),Le=c(),k=n("p"),ue=n("em"),gs=a("Gradio"),_s=a(" supporte "),ce=n("em"),ws=a("l\u2019\xE9tat de session"),bs=a(" o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Se=c(),X=n("p"),qs=a("Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),Oe=c(),w=n("ul"),M=n("li"),js=a("Passez un "),me=n("em"),ys=a("param\xE8tre suppl\xE9mentaire"),Es=a(" dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),ks=c(),L=n("li"),$s=a("A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),de=n("em"),xs=a("valeur de retour suppl\xE9mentaire"),Is=a("."),zs=c(),S=n("li"),Ps=a("Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),fe=n("code"),Cs=a("Interface"),As=a("."),He=c(),Z=n("p"),Ns=a("Voir l\u2019exemple de chatbot ci-dessous :"),De=c(),R(O.$$.fragment),Fe=c(),v=n("iframe"),Je=c(),ee=n("p"),Gs=a(`Remarquez comment l\u2019\xE9tat du composant de sortie persiste entre les soumissions.
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l\u2019\xE9tat.`),Te=c(),$=n("h3"),P=n("a"),he=n("span"),R(H.$$.fragment),Ms=c(),ve=n("span"),Ls=a("Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Ve=c(),se=n("p"),Ss=a("La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Re=c(),R(D.$$.fragment),Ue=c(),te=n("p"),Os=a("Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Be=c(),g=n("iframe"),Ye=c(),d=n("p"),Hs=a("En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ge=n("em"),Ds=a("Gradio"),Fs=a(", vous pouvez \xE9galement sp\xE9cifier "),_e=n("code"),Js=a("shap"),Ts=a(" pour le param\xE8tre "),we=n("code"),Vs=a("interpretation"),Rs=a(" et d\xE9finir le param\xE8tre "),be=n("code"),Us=a("num_shap"),Bs=a(". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),F=n("a"),Ys=a("ici"),Ws=a(`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),qe=n("code"),Ks=a("interpretation"),Qs=a(". Vous trouverez un exemple dans la page de d\xE9marrage de "),je=n("em"),Xs=a("Gradio"),Zs=c(),J=n("a"),et=a("ici"),st=a("."),We=c(),x=n("h3"),C=n("a"),ye=n("span"),R(T.$$.fragment),tt=c(),Ee=n("span"),at=a("Ajouter l'authentification"),Ke=c(),A=n("p"),rt=a("Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),ke=n("em"),nt=a("Gradio"),ot=a(" afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),Qe=c(),h=n("p"),lt=a("L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),$e=n("code"),it=a("auth"),pt=a(" de la m\xE9thode "),xe=n("code"),ut=a("launch()"),ct=a(". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),Ie=n("code"),mt=a("True"),dt=a(" pour permettre l\u2019authentification, "),ze=n("code"),ft=a("False"),ht=a(" sinon."),Xe=c(),ae=n("p"),vt=a("Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),Ze=c(),R(V.$$.fragment),es=c(),_=n("iframe"),ss=c(),b=n("p"),gt=a("Ceci conclut notre plong\xE9e dans la classe "),Pe=n("code"),_t=a("Interface"),wt=a(" de "),Ce=n("em"),bt=a("Gradio"),qt=a(". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),this.h()},l(e){const i=va('[data-svelte="svelte-1phssyn"]',document.head);j=o(i,"META",{name:!0,content:!0}),i.forEach(s),Ne=m(e),y=o(e,"H1",{class:!0});var as=l(y);I=o(as,"A",{id:!0,class:!0,href:!0});var It=l(I);oe=o(It,"SPAN",{});var zt=l(oe);U(N.$$.fragment,zt),zt.forEach(s),It.forEach(s),ms=m(as),le=o(as,"SPAN",{});var Pt=l(le);ds=r(Pt,"Fonctionnalit\xE9s avanc\xE9es de l'interface"),Pt.forEach(s),as.forEach(s),Ge=m(e),Q=o(e,"P",{});var Ct=l(Q);fs=r(Ct,"Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),Ct.forEach(s),Me=m(e),E=o(e,"H3",{class:!0});var rs=l(E);z=o(rs,"A",{id:!0,class:!0,href:!0});var At=l(z);ie=o(At,"SPAN",{});var Nt=l(ie);U(G.$$.fragment,Nt),Nt.forEach(s),At.forEach(s),hs=m(rs),pe=o(rs,"SPAN",{});var Gt=l(pe);vs=r(Gt,"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),Gt.forEach(s),rs.forEach(s),Le=m(e),k=o(e,"P",{});var Ae=l(k);ue=o(Ae,"EM",{});var Mt=l(ue);gs=r(Mt,"Gradio"),Mt.forEach(s),_s=r(Ae," supporte "),ce=o(Ae,"EM",{});var Lt=l(ce);ws=r(Lt,"l\u2019\xE9tat de session"),Lt.forEach(s),bs=r(Ae," o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Ae.forEach(s),Se=m(e),X=o(e,"P",{});var St=l(X);qs=r(St,"Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),St.forEach(s),Oe=m(e),w=o(e,"UL",{});var re=l(w);M=o(re,"LI",{});var ns=l(M);js=r(ns,"Passez un "),me=o(ns,"EM",{});var Ot=l(me);ys=r(Ot,"param\xE8tre suppl\xE9mentaire"),Ot.forEach(s),Es=r(ns," dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),ns.forEach(s),ks=m(re),L=o(re,"LI",{});var os=l(L);$s=r(os,"A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),de=o(os,"EM",{});var Ht=l(de);xs=r(Ht,"valeur de retour suppl\xE9mentaire"),Ht.forEach(s),Is=r(os,"."),os.forEach(s),zs=m(re),S=o(re,"LI",{});var ls=l(S);Ps=r(ls,"Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),fe=o(ls,"CODE",{});var Dt=l(fe);Cs=r(Dt,"Interface"),Dt.forEach(s),As=r(ls,"."),ls.forEach(s),re.forEach(s),He=m(e),Z=o(e,"P",{});var Ft=l(Z);Ns=r(Ft,"Voir l\u2019exemple de chatbot ci-dessous :"),Ft.forEach(s),De=m(e),U(O.$$.fragment,e),Fe=m(e),v=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(v).forEach(s),Je=m(e),ee=o(e,"P",{});var Jt=l(ee);Gs=r(Jt,`Remarquez comment l\u2019\xE9tat du composant de sortie persiste entre les soumissions.
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l\u2019\xE9tat.`),Jt.forEach(s),Te=m(e),$=o(e,"H3",{class:!0});var is=l($);P=o(is,"A",{id:!0,class:!0,href:!0});var Tt=l(P);he=o(Tt,"SPAN",{});var Vt=l(he);U(H.$$.fragment,Vt),Vt.forEach(s),Tt.forEach(s),Ms=m(is),ve=o(is,"SPAN",{});var Rt=l(ve);Ls=r(Rt,"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Rt.forEach(s),is.forEach(s),Ve=m(e),se=o(e,"P",{});var Ut=l(se);Ss=r(Ut,"La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Ut.forEach(s),Re=m(e),U(D.$$.fragment,e),Ue=m(e),te=o(e,"P",{});var Bt=l(te);Os=r(Bt,"Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Bt.forEach(s),Be=m(e),g=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(s),Ye=m(e),d=o(e,"P",{});var f=l(d);Hs=r(f,"En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ge=o(f,"EM",{});var Yt=l(ge);Ds=r(Yt,"Gradio"),Yt.forEach(s),Fs=r(f,", vous pouvez \xE9galement sp\xE9cifier "),_e=o(f,"CODE",{});var Wt=l(_e);Js=r(Wt,"shap"),Wt.forEach(s),Ts=r(f," pour le param\xE8tre "),we=o(f,"CODE",{});var Kt=l(we);Vs=r(Kt,"interpretation"),Kt.forEach(s),Rs=r(f," et d\xE9finir le param\xE8tre "),be=o(f,"CODE",{});var Qt=l(be);Us=r(Qt,"num_shap"),Qt.forEach(s),Bs=r(f,". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),F=o(f,"A",{href:!0,rel:!0});var Xt=l(F);Ys=r(Xt,"ici"),Xt.forEach(s),Ws=r(f,`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),qe=o(f,"CODE",{});var Zt=l(qe);Ks=r(Zt,"interpretation"),Zt.forEach(s),Qs=r(f,". Vous trouverez un exemple dans la page de d\xE9marrage de "),je=o(f,"EM",{});var ea=l(je);Xs=r(ea,"Gradio"),ea.forEach(s),Zs=m(f),J=o(f,"A",{href:!0,rel:!0});var sa=l(J);et=r(sa,"ici"),sa.forEach(s),st=r(f,"."),f.forEach(s),We=m(e),x=o(e,"H3",{class:!0});var ps=l(x);C=o(ps,"A",{id:!0,class:!0,href:!0});var ta=l(C);ye=o(ta,"SPAN",{});var aa=l(ye);U(T.$$.fragment,aa),aa.forEach(s),ta.forEach(s),tt=m(ps),Ee=o(ps,"SPAN",{});var ra=l(Ee);at=r(ra,"Ajouter l'authentification"),ra.forEach(s),ps.forEach(s),Ke=m(e),A=o(e,"P",{});var us=l(A);rt=r(us,"Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),ke=o(us,"EM",{});var na=l(ke);nt=r(na,"Gradio"),na.forEach(s),ot=r(us," afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),us.forEach(s),Qe=m(e),h=o(e,"P",{});var q=l(h);lt=r(q,"L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),$e=o(q,"CODE",{});var oa=l($e);it=r(oa,"auth"),oa.forEach(s),pt=r(q," de la m\xE9thode "),xe=o(q,"CODE",{});var la=l(xe);ut=r(la,"launch()"),la.forEach(s),ct=r(q,". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),Ie=o(q,"CODE",{});var ia=l(Ie);mt=r(ia,"True"),ia.forEach(s),dt=r(q," pour permettre l\u2019authentification, "),ze=o(q,"CODE",{});var pa=l(ze);ft=r(pa,"False"),pa.forEach(s),ht=r(q," sinon."),q.forEach(s),Xe=m(e),ae=o(e,"P",{});var ua=l(ae);vt=r(ua,"Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),ua.forEach(s),Ze=m(e),U(V.$$.fragment,e),es=m(e),_=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(_).forEach(s),ss=m(e),b=o(e,"P",{});var ne=l(b);gt=r(ne,"Ceci conclut notre plong\xE9e dans la classe "),Pe=o(ne,"CODE",{});var ca=l(Pe);_t=r(ca,"Interface"),ca.forEach(s),wt=r(ne," de "),Ce=o(ne,"EM",{});var ma=l(Ce);bt=r(ma,"Gradio"),ma.forEach(s),qt=r(ne,". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),ne.forEach(s),this.h()},h(){p(j,"name","hf:doc:metadata"),p(j,"content",JSON.stringify(ba)),p(I,"id","fonctionnalits-avances-de-linterface"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#fonctionnalits-avances-de-linterface"),p(y,"class","relative group"),p(z,"id","utilisation-de-ltat-pour-faire-persister-les-donnes"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#utilisation-de-ltat-pour-faire-persister-les-donnes"),p(E,"class","relative group"),jt(v.src,kt="https://hf.space/gradioiframe/dawood/Chatbot-Demo/+")||p(v,"src",kt),p(v,"frameborder","0"),p(v,"height","350"),p(v,"title","Gradio app"),p(v,"class","container p-0 flex-grow space-iframe"),p(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(P,"id","utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p($,"class","relative group"),jt(g.src,$t="https://hf.space/gradioiframe/akhaliq/gradio-image-interpretation/+")||p(g,"src",$t),p(g,"frameborder","0"),p(g,"height","570"),p(g,"title","Gradio app"),p(g,"class","container p-0 flex-grow space-iframe"),p(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(F,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(F,"rel","nofollow"),p(J,"href","https://gradio.app/getting_started/"),p(J,"rel","nofollow"),p(C,"id","ajouter-lauthentification"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#ajouter-lauthentification"),p(x,"class","relative group"),jt(_.src,xt="https://hf.space/gradioiframe/dawood/Auth-Image-Classification/+")||p(_,"src",xt),p(_,"frameborder","0"),p(_,"height","570"),p(_,"title","Gradio app"),p(_,"class","container p-0 flex-grow space-iframe"),p(_,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(_,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){t(document.head,j),u(e,Ne,i),u(e,y,i),t(y,I),t(I,oe),B(N,oe,null),t(y,ms),t(y,le),t(le,ds),u(e,Ge,i),u(e,Q,i),t(Q,fs),u(e,Me,i),u(e,E,i),t(E,z),t(z,ie),B(G,ie,null),t(E,hs),t(E,pe),t(pe,vs),u(e,Le,i),u(e,k,i),t(k,ue),t(ue,gs),t(k,_s),t(k,ce),t(ce,ws),t(k,bs),u(e,Se,i),u(e,X,i),t(X,qs),u(e,Oe,i),u(e,w,i),t(w,M),t(M,js),t(M,me),t(me,ys),t(M,Es),t(w,ks),t(w,L),t(L,$s),t(L,de),t(de,xs),t(L,Is),t(w,zs),t(w,S),t(S,Ps),t(S,fe),t(fe,Cs),t(S,As),u(e,He,i),u(e,Z,i),t(Z,Ns),u(e,De,i),B(O,e,i),u(e,Fe,i),u(e,v,i),u(e,Je,i),u(e,ee,i),t(ee,Gs),u(e,Te,i),u(e,$,i),t($,P),t(P,he),B(H,he,null),t($,Ms),t($,ve),t(ve,Ls),u(e,Ve,i),u(e,se,i),t(se,Ss),u(e,Re,i),B(D,e,i),u(e,Ue,i),u(e,te,i),t(te,Os),u(e,Be,i),u(e,g,i),u(e,Ye,i),u(e,d,i),t(d,Hs),t(d,ge),t(ge,Ds),t(d,Fs),t(d,_e),t(_e,Js),t(d,Ts),t(d,we),t(we,Vs),t(d,Rs),t(d,be),t(be,Us),t(d,Bs),t(d,F),t(F,Ys),t(d,Ws),t(d,qe),t(qe,Ks),t(d,Qs),t(d,je),t(je,Xs),t(d,Zs),t(d,J),t(J,et),t(d,st),u(e,We,i),u(e,x,i),t(x,C),t(C,ye),B(T,ye,null),t(x,tt),t(x,Ee),t(Ee,at),u(e,Ke,i),u(e,A,i),t(A,rt),t(A,ke),t(ke,nt),t(A,ot),u(e,Qe,i),u(e,h,i),t(h,lt),t(h,$e),t($e,it),t(h,pt),t(h,xe),t(xe,ut),t(h,ct),t(h,Ie),t(Ie,mt),t(h,dt),t(h,ze),t(ze,ft),t(h,ht),u(e,Xe,i),u(e,ae,i),t(ae,vt),u(e,Ze,i),B(V,e,i),u(e,es,i),u(e,_,i),u(e,ss,i),u(e,b,i),t(b,gt),t(b,Pe),t(Pe,_t),t(b,wt),t(b,Ce),t(Ce,bt),t(b,qt),ts=!0},p:ga,i(e){ts||(Y(N.$$.fragment,e),Y(G.$$.fragment,e),Y(O.$$.fragment,e),Y(H.$$.fragment,e),Y(D.$$.fragment,e),Y(T.$$.fragment,e),Y(V.$$.fragment,e),ts=!0)},o(e){W(N.$$.fragment,e),W(G.$$.fragment,e),W(O.$$.fragment,e),W(H.$$.fragment,e),W(D.$$.fragment,e),W(T.$$.fragment,e),W(V.$$.fragment,e),ts=!1},d(e){s(j),e&&s(Ne),e&&s(y),K(N),e&&s(Ge),e&&s(Q),e&&s(Me),e&&s(E),K(G),e&&s(Le),e&&s(k),e&&s(Se),e&&s(X),e&&s(Oe),e&&s(w),e&&s(He),e&&s(Z),e&&s(De),K(O,e),e&&s(Fe),e&&s(v),e&&s(Je),e&&s(ee),e&&s(Te),e&&s($),K(H),e&&s(Ve),e&&s(se),e&&s(Re),K(D,e),e&&s(Ue),e&&s(te),e&&s(Be),e&&s(g),e&&s(Ye),e&&s(d),e&&s(We),e&&s(x),K(T),e&&s(Ke),e&&s(A),e&&s(Qe),e&&s(h),e&&s(Xe),e&&s(ae),e&&s(Ze),K(V,e),e&&s(es),e&&s(_),e&&s(ss),e&&s(b)}}}const ba={local:"fonctionnalits-avances-de-linterface",sections:[{local:"utilisation-de-ltat-pour-faire-persister-les-donnes",title:"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"},{local:"utilisation-de-linterprtation-pour-comprendre-les-prdictions",title:"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"},{local:"ajouter-lauthentification",title:"Ajouter l'authentification"}],title:"Fonctionnalit\xE9s avanc\xE9es de l'interface"};function qa(Et){return _a(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ka extends da{constructor(j){super();fa(this,j,qa,wa,ha,{})}}export{ka as default,ba as metadata};
