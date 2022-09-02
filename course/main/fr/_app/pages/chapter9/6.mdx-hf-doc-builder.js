import{S as ca,i as ma,s as da,e as n,k as c,w as A,t as a,M as fa,c as o,d as t,m,a as l,x as G,h as r,b as p,N as qt,G as s,g as u,y as M,L as ha,q as L,o as S,B as O,v as va}from"../../chunks/vendor-hf-doc-builder.js";import{I as cs}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as jt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{C as ga}from"../../chunks/CourseFloatingBanner-hf-doc-builder.js";function ba(yt){let j,Ae,y,I,oe,H,ms,le,ds,Ge,D,Me,X,fs,Le,E,z,ie,F,hs,pe,vs,Se,k,ue,gs,bs,ce,ws,_s,Oe,Z,qs,He,w,J,js,me,ys,Es,ks,T,$s,de,xs,Is,zs,V,Cs,fe,Ps,Ns,De,ee,As,Fe,R,Je,v,Et,Te,$,C,he,U,Gs,ve,Ms,Ve,se,Ls,Re,B,Ue,te,Ss,Be,g,kt,Ye,d,Os,ge,Hs,Ds,be,Fs,Js,we,Ts,Vs,_e,Rs,Us,Y,Bs,Ys,qe,Ws,Ks,je,Qs,Xs,W,Zs,et,We,x,P,ye,K,st,Ee,tt,Ke,N,at,ke,rt,nt,Qe,h,ot,$e,lt,it,xe,pt,ut,Ie,ct,mt,ze,dt,ft,Xe,ae,ht,Ze,Q,es,b,$t,ss,_,vt,Ce,gt,bt,Pe,wt,_t,ts;return H=new cs({}),D=new ga({props:{chapter:9,classNames:"absolute z-10 right-0 top-0",notebooks:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter9/section6.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter9/section6.ipynb"}]}}),F=new cs({}),R=new jt({props:{code:`import random

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
iface.launch()`}}),U=new cs({}),B=new jt({props:{code:`import requests
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
).launch()`}}),K=new cs({}),Q=new jt({props:{code:`import requests
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
).launch(auth=(<span class="hljs-string">&quot;admin&quot;</span>, <span class="hljs-string">&quot;pass1234&quot;</span>))`}}),{c(){j=n("meta"),Ae=c(),y=n("h1"),I=n("a"),oe=n("span"),A(H.$$.fragment),ms=c(),le=n("span"),ds=a("Fonctionnalit\xE9s avanc\xE9es de l'interface"),Ge=c(),A(D.$$.fragment),Me=c(),X=n("p"),fs=a("Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),Le=c(),E=n("h3"),z=n("a"),ie=n("span"),A(F.$$.fragment),hs=c(),pe=n("span"),vs=a("Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),Se=c(),k=n("p"),ue=n("em"),gs=a("Gradio"),bs=a(" supporte "),ce=n("em"),ws=a("l\u2019\xE9tat de session"),_s=a(" o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Oe=c(),Z=n("p"),qs=a("Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),He=c(),w=n("ul"),J=n("li"),js=a("Passez un "),me=n("em"),ys=a("param\xE8tre suppl\xE9mentaire"),Es=a(" dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),ks=c(),T=n("li"),$s=a("A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),de=n("em"),xs=a("valeur de retour suppl\xE9mentaire"),Is=a("."),zs=c(),V=n("li"),Cs=a("Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),fe=n("code"),Ps=a("Interface"),Ns=a("."),De=c(),ee=n("p"),As=a("Voir l\u2019exemple de chatbot ci-dessous :"),Fe=c(),A(R.$$.fragment),Je=c(),v=n("iframe"),Te=a(`
Remarquez comment l'\xE9tat du composant de sortie persiste entre les soumissions. 
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l'\xE9tat.
`),$=n("h3"),C=n("a"),he=n("span"),A(U.$$.fragment),Gs=c(),ve=n("span"),Ms=a("Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Ve=c(),se=n("p"),Ls=a("La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Re=c(),A(B.$$.fragment),Ue=c(),te=n("p"),Ss=a("Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Be=c(),g=n("iframe"),Ye=c(),d=n("p"),Os=a("En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ge=n("em"),Hs=a("Gradio"),Ds=a(", vous pouvez \xE9galement sp\xE9cifier "),be=n("code"),Fs=a("shap"),Js=a(" pour le param\xE8tre "),we=n("code"),Ts=a("interpretation"),Vs=a(" et d\xE9finir le param\xE8tre "),_e=n("code"),Rs=a("num_shap"),Us=a(". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),Y=n("a"),Bs=a("ici"),Ys=a(`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),qe=n("code"),Ws=a("interpretation"),Ks=a(". Vous trouverez un exemple dans la page de d\xE9marrage de "),je=n("em"),Qs=a("Gradio"),Xs=c(),W=n("a"),Zs=a("ici"),et=a("."),We=c(),x=n("h3"),P=n("a"),ye=n("span"),A(K.$$.fragment),st=c(),Ee=n("span"),tt=a("Ajouter l'authentification"),Ke=c(),N=n("p"),at=a("Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),ke=n("em"),rt=a("Gradio"),nt=a(" afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),Qe=c(),h=n("p"),ot=a("L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),$e=n("code"),lt=a("auth"),it=a(" de la m\xE9thode "),xe=n("code"),pt=a("launch()"),ut=a(". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),Ie=n("code"),ct=a("True"),mt=a(" pour permettre l\u2019authentification, "),ze=n("code"),dt=a("False"),ft=a(" sinon."),Xe=c(),ae=n("p"),ht=a("Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),Ze=c(),A(Q.$$.fragment),es=c(),b=n("iframe"),ss=c(),_=n("p"),vt=a("Ceci conclut notre plong\xE9e dans la classe "),Ce=n("code"),gt=a("Interface"),bt=a(" de "),Pe=n("em"),wt=a("Gradio"),_t=a(". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),this.h()},l(e){const i=fa('[data-svelte="svelte-1phssyn"]',document.head);j=o(i,"META",{name:!0,content:!0}),i.forEach(t),Ae=m(e),y=o(e,"H1",{class:!0});var as=l(y);I=o(as,"A",{id:!0,class:!0,href:!0});var xt=l(I);oe=o(xt,"SPAN",{});var It=l(oe);G(H.$$.fragment,It),It.forEach(t),xt.forEach(t),ms=m(as),le=o(as,"SPAN",{});var zt=l(le);ds=r(zt,"Fonctionnalit\xE9s avanc\xE9es de l'interface"),zt.forEach(t),as.forEach(t),Ge=m(e),G(D.$$.fragment,e),Me=m(e),X=o(e,"P",{});var Ct=l(X);fs=r(Ct,"Maintenant que nous pouvons construire et partager une interface de base, explorons quelques fonctionnalit\xE9s plus avanc\xE9es comme l\u2019\xE9tat, l\u2019interpr\xE9tation et l\u2019authentification."),Ct.forEach(t),Le=m(e),E=o(e,"H3",{class:!0});var rs=l(E);z=o(rs,"A",{id:!0,class:!0,href:!0});var Pt=l(z);ie=o(Pt,"SPAN",{});var Nt=l(ie);G(F.$$.fragment,Nt),Nt.forEach(t),Pt.forEach(t),hs=m(rs),pe=o(rs,"SPAN",{});var At=l(pe);vs=r(At,"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"),At.forEach(t),rs.forEach(t),Se=m(e),k=o(e,"P",{});var Ne=l(k);ue=o(Ne,"EM",{});var Gt=l(ue);gs=r(Gt,"Gradio"),Gt.forEach(t),bs=r(Ne," supporte "),ce=o(Ne,"EM",{});var Mt=l(ce);ws=r(Mt,"l\u2019\xE9tat de session"),Mt.forEach(t),_s=r(Ne," o\xF9 les donn\xE9es persistent \xE0 travers plusieurs soumissions dans un chargement de page. L\u2019\xE9tat de session est utile pour construire des d\xE9mos o\xF9 vous souhaitez faire persister les donn\xE9es au fur et \xE0 mesure que l\u2019utilisateur interagit avec le mod\xE8le (par exemple des chatbots). Notez que l\u2019\xE9tat de session ne partage pas les donn\xE9es entre les diff\xE9rents utilisateurs de votre mod\xE8le."),Ne.forEach(t),Oe=m(e),Z=o(e,"P",{});var Lt=l(Z);qs=r(Lt,"Pour stocker des donn\xE9es dans un \xE9tat de session, vous devez faire trois choses :"),Lt.forEach(t),He=m(e),w=o(e,"UL",{});var re=l(w);J=o(re,"LI",{});var ns=l(J);js=r(ns,"Passez un "),me=o(ns,"EM",{});var St=l(me);ys=r(St,"param\xE8tre suppl\xE9mentaire"),St.forEach(t),Es=r(ns," dans votre fonction, qui repr\xE9sente l\u2019\xE9tat de l\u2019interface."),ns.forEach(t),ks=m(re),T=o(re,"LI",{});var os=l(T);$s=r(os,"A la fin de la fonction, renvoyer la valeur mise \xE0 jour de l\u2019\xE9tat comme une "),de=o(os,"EM",{});var Ot=l(de);xs=r(Ot,"valeur de retour suppl\xE9mentaire"),Ot.forEach(t),Is=r(os,"."),os.forEach(t),zs=m(re),V=o(re,"LI",{});var ls=l(V);Cs=r(ls,"Ajoutez les composants \u201Cstate\u201D input et \u201Cstate\u201D output lors de la cr\xE9ation de votre "),fe=o(ls,"CODE",{});var Ht=l(fe);Ps=r(Ht,"Interface"),Ht.forEach(t),Ns=r(ls,"."),ls.forEach(t),re.forEach(t),De=m(e),ee=o(e,"P",{});var Dt=l(ee);As=r(Dt,"Voir l\u2019exemple de chatbot ci-dessous :"),Dt.forEach(t),Fe=m(e),G(R.$$.fragment,e),Je=m(e),v=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(v).forEach(t),Te=r(e,`
Remarquez comment l'\xE9tat du composant de sortie persiste entre les soumissions. 
Remarque : vous pouvez transmettre une valeur par d\xE9faut au param\xE8tre state, qui est utilis\xE9e comme valeur initiale de l'\xE9tat.
`),$=o(e,"H3",{class:!0});var is=l($);C=o(is,"A",{id:!0,class:!0,href:!0});var Ft=l(C);he=o(Ft,"SPAN",{});var Jt=l(he);G(U.$$.fragment,Jt),Jt.forEach(t),Ft.forEach(t),Gs=m(is),ve=o(is,"SPAN",{});var Tt=l(ve);Ms=r(Tt,"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"),Tt.forEach(t),is.forEach(t),Ve=m(e),se=o(e,"P",{});var Vt=l(se);Ls=r(Vt,"La plupart des mod\xE8les d\u2019apprentissage automatique sont des bo\xEEtes noires et la logique interne de la fonction est cach\xE9e \xE0 l\u2019utilisateur final. Pour encourager la transparence, nous avons fait en sorte qu\u2019il soit tr\xE8s facile d\u2019ajouter l\u2019interpr\xE9tation \xE0 votre mod\xE8le en d\xE9finissant simplement le mot-cl\xE9 interpr\xE9tation dans la classe Interface par d\xE9faut. Cela permet \xE0 vos utilisateurs de comprendre quelles parties de l\u2019entr\xE9e sont responsables de la sortie. Jetez un coup d\u2019\u0153il \xE0 l\u2019interface simple ci-dessous qui montre un classificateur d\u2019images incluant l\u2019interpr\xE9tation :"),Vt.forEach(t),Re=m(e),G(B.$$.fragment,e),Ue=m(e),te=o(e,"P",{});var Rt=l(te);Ss=r(Rt,"Testez la fonction d\u2019interpr\xE9tation en soumettant une entr\xE9e puis en cliquant sur \xAB Interpr\xE9ter \xBB sous le composant de sortie."),Rt.forEach(t),Be=m(e),g=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(t),Ye=m(e),d=o(e,"P",{});var f=l(d);Os=r(f,"En plus de la m\xE9thode d\u2019interpr\xE9tation par d\xE9faut fournie par "),ge=o(f,"EM",{});var Ut=l(ge);Hs=r(Ut,"Gradio"),Ut.forEach(t),Ds=r(f,", vous pouvez \xE9galement sp\xE9cifier "),be=o(f,"CODE",{});var Bt=l(be);Fs=r(Bt,"shap"),Bt.forEach(t),Js=r(f," pour le param\xE8tre "),we=o(f,"CODE",{});var Yt=l(we);Ts=r(Yt,"interpretation"),Yt.forEach(t),Vs=r(f," et d\xE9finir le param\xE8tre "),_e=o(f,"CODE",{});var Wt=l(_e);Rs=r(Wt,"num_shap"),Wt.forEach(t),Us=r(f,". Ceci utilise l\u2019interpr\xE9tation bas\xE9e sur Shapley, dont vous pouvez lire plus sur "),Y=o(f,"A",{href:!0,rel:!0});var Kt=l(Y);Bs=r(Kt,"ici"),Kt.forEach(t),Ys=r(f,`.
Enfin, vous pouvez aussi passer votre propre fonction d\u2019interpr\xE9tation dans le param\xE8tre `),qe=o(f,"CODE",{});var Qt=l(qe);Ws=r(Qt,"interpretation"),Qt.forEach(t),Ks=r(f,". Vous trouverez un exemple dans la page de d\xE9marrage de "),je=o(f,"EM",{});var Xt=l(je);Qs=r(Xt,"Gradio"),Xt.forEach(t),Xs=m(f),W=o(f,"A",{href:!0,rel:!0});var Zt=l(W);Zs=r(Zt,"ici"),Zt.forEach(t),et=r(f,"."),f.forEach(t),We=m(e),x=o(e,"H3",{class:!0});var ps=l(x);P=o(ps,"A",{id:!0,class:!0,href:!0});var ea=l(P);ye=o(ea,"SPAN",{});var sa=l(ye);G(K.$$.fragment,sa),sa.forEach(t),ea.forEach(t),st=m(ps),Ee=o(ps,"SPAN",{});var ta=l(Ee);tt=r(ta,"Ajouter l'authentification"),ta.forEach(t),ps.forEach(t),Ke=m(e),N=o(e,"P",{});var us=l(N);at=r(us,"Vous pouvez vouloir ajouter une authentification \xE0 votre interface "),ke=o(us,"EM",{});var aa=l(ke);rt=r(aa,"Gradio"),aa.forEach(t),nt=r(us," afin de contr\xF4ler qui peut acc\xE9der et utiliser votre d\xE9mo."),us.forEach(t),Qe=m(e),h=o(e,"P",{});var q=l(h);ot=r(q,"L\u2019authentification peut \xEAtre ajout\xE9e en fournissant une liste de tuples de nom d\u2019utilisateur/mot de passe au param\xE8tre "),$e=o(q,"CODE",{});var ra=l($e);lt=r(ra,"auth"),ra.forEach(t),it=r(q," de la m\xE9thode "),xe=o(q,"CODE",{});var na=l(xe);pt=r(na,"launch()"),na.forEach(t),ut=r(q,". Pour une gestion plus complexe de l\u2019authentification, vous pouvez passer une fonction qui prend un nom d\u2019utilisateur et un mot de passe comme arguments, et retourne "),Ie=o(q,"CODE",{});var oa=l(Ie);ct=r(oa,"True"),oa.forEach(t),mt=r(q," pour permettre l\u2019authentification, "),ze=o(q,"CODE",{});var la=l(ze);dt=r(la,"False"),la.forEach(t),ft=r(q," sinon."),q.forEach(t),Xe=m(e),ae=o(e,"P",{});var ia=l(ae);ht=r(ia,"Prenons la d\xE9mo de classification d\u2019images ci-dessus et ajoutons l\u2019authentification :"),ia.forEach(t),Ze=m(e),G(Q.$$.fragment,e),es=m(e),b=o(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(b).forEach(t),ss=m(e),_=o(e,"P",{});var ne=l(_);vt=r(ne,"Ceci conclut notre plong\xE9e dans la classe "),Ce=o(ne,"CODE",{});var pa=l(Ce);gt=r(pa,"Interface"),pa.forEach(t),bt=r(ne," de "),Pe=o(ne,"EM",{});var ua=l(Pe);wt=r(ua,"Gradio"),ua.forEach(t),_t=r(ne,". Comme nous l\u2019avons vu, cette classe permet de cr\xE9er facilement des d\xE9mos d\u2019apprentissage automatique en quelques lignes de code Python. Cependant, vous voudrez parfois personnaliser votre d\xE9mo en changeant la mise en page ou en encha\xEEnant plusieurs fonctions de pr\xE9diction. Ne serait-il pas agr\xE9able de pouvoir diviser l\u2019interface en blocs personnalisables ? Heureusement, c\u2019est possible ! C\u2019est le sujet de la derni\xE8re section."),ne.forEach(t),this.h()},h(){p(j,"name","hf:doc:metadata"),p(j,"content",JSON.stringify(wa)),p(I,"id","fonctionnalits-avances-de-linterface"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#fonctionnalits-avances-de-linterface"),p(y,"class","relative group"),p(z,"id","utilisation-de-ltat-pour-faire-persister-les-donnes"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#utilisation-de-ltat-pour-faire-persister-les-donnes"),p(E,"class","relative group"),qt(v.src,Et="https://hf.space/gradioiframe/course-demos/Chatbot-Demo/+")||p(v,"src",Et),p(v,"frameborder","0"),p(v,"height","350"),p(v,"title","Gradio app"),p(v,"class","container p-0 flex-grow space-iframe"),p(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(C,"id","utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#utilisation-de-linterprtation-pour-comprendre-les-prdictions"),p($,"class","relative group"),qt(g.src,kt="https://hf.space/gradioiframe/akhaliq/gradio-image-interpretation/+")||p(g,"src",kt),p(g,"frameborder","0"),p(g,"height","570"),p(g,"title","Gradio app"),p(g,"class","container p-0 flex-grow space-iframe"),p(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(Y,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(Y,"rel","nofollow"),p(W,"href","https://gradio.app/getting_started/"),p(W,"rel","nofollow"),p(P,"id","ajouter-lauthentification"),p(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(P,"href","#ajouter-lauthentification"),p(x,"class","relative group"),qt(b.src,$t="https://hf.space/gradioiframe/course-demos/gradio-image-interpretation/+")||p(b,"src",$t),p(b,"frameborder","0"),p(b,"height","570"),p(b,"title","Gradio app"),p(b,"class","container p-0 flex-grow space-iframe"),p(b,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(b,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,i){s(document.head,j),u(e,Ae,i),u(e,y,i),s(y,I),s(I,oe),M(H,oe,null),s(y,ms),s(y,le),s(le,ds),u(e,Ge,i),M(D,e,i),u(e,Me,i),u(e,X,i),s(X,fs),u(e,Le,i),u(e,E,i),s(E,z),s(z,ie),M(F,ie,null),s(E,hs),s(E,pe),s(pe,vs),u(e,Se,i),u(e,k,i),s(k,ue),s(ue,gs),s(k,bs),s(k,ce),s(ce,ws),s(k,_s),u(e,Oe,i),u(e,Z,i),s(Z,qs),u(e,He,i),u(e,w,i),s(w,J),s(J,js),s(J,me),s(me,ys),s(J,Es),s(w,ks),s(w,T),s(T,$s),s(T,de),s(de,xs),s(T,Is),s(w,zs),s(w,V),s(V,Cs),s(V,fe),s(fe,Ps),s(V,Ns),u(e,De,i),u(e,ee,i),s(ee,As),u(e,Fe,i),M(R,e,i),u(e,Je,i),u(e,v,i),u(e,Te,i),u(e,$,i),s($,C),s(C,he),M(U,he,null),s($,Gs),s($,ve),s(ve,Ms),u(e,Ve,i),u(e,se,i),s(se,Ls),u(e,Re,i),M(B,e,i),u(e,Ue,i),u(e,te,i),s(te,Ss),u(e,Be,i),u(e,g,i),u(e,Ye,i),u(e,d,i),s(d,Os),s(d,ge),s(ge,Hs),s(d,Ds),s(d,be),s(be,Fs),s(d,Js),s(d,we),s(we,Ts),s(d,Vs),s(d,_e),s(_e,Rs),s(d,Us),s(d,Y),s(Y,Bs),s(d,Ys),s(d,qe),s(qe,Ws),s(d,Ks),s(d,je),s(je,Qs),s(d,Xs),s(d,W),s(W,Zs),s(d,et),u(e,We,i),u(e,x,i),s(x,P),s(P,ye),M(K,ye,null),s(x,st),s(x,Ee),s(Ee,tt),u(e,Ke,i),u(e,N,i),s(N,at),s(N,ke),s(ke,rt),s(N,nt),u(e,Qe,i),u(e,h,i),s(h,ot),s(h,$e),s($e,lt),s(h,it),s(h,xe),s(xe,pt),s(h,ut),s(h,Ie),s(Ie,ct),s(h,mt),s(h,ze),s(ze,dt),s(h,ft),u(e,Xe,i),u(e,ae,i),s(ae,ht),u(e,Ze,i),M(Q,e,i),u(e,es,i),u(e,b,i),u(e,ss,i),u(e,_,i),s(_,vt),s(_,Ce),s(Ce,gt),s(_,bt),s(_,Pe),s(Pe,wt),s(_,_t),ts=!0},p:ha,i(e){ts||(L(H.$$.fragment,e),L(D.$$.fragment,e),L(F.$$.fragment,e),L(R.$$.fragment,e),L(U.$$.fragment,e),L(B.$$.fragment,e),L(K.$$.fragment,e),L(Q.$$.fragment,e),ts=!0)},o(e){S(H.$$.fragment,e),S(D.$$.fragment,e),S(F.$$.fragment,e),S(R.$$.fragment,e),S(U.$$.fragment,e),S(B.$$.fragment,e),S(K.$$.fragment,e),S(Q.$$.fragment,e),ts=!1},d(e){t(j),e&&t(Ae),e&&t(y),O(H),e&&t(Ge),O(D,e),e&&t(Me),e&&t(X),e&&t(Le),e&&t(E),O(F),e&&t(Se),e&&t(k),e&&t(Oe),e&&t(Z),e&&t(He),e&&t(w),e&&t(De),e&&t(ee),e&&t(Fe),O(R,e),e&&t(Je),e&&t(v),e&&t(Te),e&&t($),O(U),e&&t(Ve),e&&t(se),e&&t(Re),O(B,e),e&&t(Ue),e&&t(te),e&&t(Be),e&&t(g),e&&t(Ye),e&&t(d),e&&t(We),e&&t(x),O(K),e&&t(Ke),e&&t(N),e&&t(Qe),e&&t(h),e&&t(Xe),e&&t(ae),e&&t(Ze),O(Q,e),e&&t(es),e&&t(b),e&&t(ss),e&&t(_)}}}const wa={local:"fonctionnalits-avances-de-linterface",sections:[{local:"utilisation-de-ltat-pour-faire-persister-les-donnes",title:"Utilisation de l'\xE9tat pour faire persister les donn\xE9es"},{local:"utilisation-de-linterprtation-pour-comprendre-les-prdictions",title:"Utilisation de l'interpr\xE9tation pour comprendre les pr\xE9dictions"},{local:"ajouter-lauthentification",title:"Ajouter l'authentification"}],title:"Fonctionnalit\xE9s avanc\xE9es de l'interface"};function _a(yt){return va(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ka extends ca{constructor(j){super();ma(this,j,_a,ba,da,{})}}export{ka as default,wa as metadata};
