import{S as fa,i as va,s as ha,e as n,k as p,w as d,t as a,M as ba,c as s,d as i,m as u,a as c,x as f,h as l,b as m,N as da,F as o,g as r,y as v,L as za,q as h,o as b,B as z,v as $a}from"../../chunks/vendor-aeea7ff3.js";import{I as Zi}from"../../chunks/IconCopyLink-9b178df0.js";import{C as _}from"../../chunks/CodeBlock-4d0385be.js";function ga(gt){let E,Xe,w,A,Ce,W,eo,ke,io,Ye,I,oo,he,to,ao,Ze,be,lo,ei,ze,ro,ii,$e,no,oi,S,so,V,co,po,ti,q,j,Ae,J,uo,Ie,mo,ai,ge,fo,li,T,vo,R,ho,bo,ri,_e,zo,ni,K,X,_t,si,y,$o,Se,go,_o,je,yo,Po,ci,Y,pi,ye,Eo,ui,Z,mi,ee,ie,yt,di,$,wo,Te,qo,Co,xe,ko,Ao,De,Io,So,fi,oe,vi,Pe,jo,hi,C,x,Oe,te,To,Qe,xo,bi,D,Do,ae,Oo,Qo,zi,O,Go,Ge,Lo,No,$i,Q,Mo,Le,Ho,Fo,gi,g,Bo,le,Uo,Wo,Ne,Vo,Jo,re,Me,Ro,Ko,_i,G,Xo,He,Yo,Zo,yi,ne,Pi,L,et,Fe,it,ot,Ei,se,wi,N,tt,Be,at,lt,qi,ce,Ci,pe,ki,P,rt,Ue,nt,st,We,ct,pt,Ai,ue,Ii,M,ut,Ve,mt,dt,Si,me,ji,de,Ti,k,H,Je,fe,ft,Re,vt,xi,F,ht,Ke,bt,zt,Di,ve,Oi,Ee,$t,Qi;return W=new Zi({}),J=new Zi({}),Y=new _({props:{code:"!pip install transformers",highlighted:'!pip <span class="hljs-keyword">install</span> transformers'}}),Z=new _({props:{code:"import transformers",highlighted:'<span class="hljs-keyword">import</span> transformers'}}),oe=new _({props:{code:"!pip install transformers[sentencepiece]",highlighted:'!pip <span class="hljs-keyword">install</span> transformers[sentencepiece]'}}),te=new Zi({}),ne=new _({props:{code:`mkdir ~/transformer-course
cd ~/transformer-course`,highlighted:`<span class="hljs-built_in">mkdir</span> ~/transformer-course
<span class="hljs-built_in">cd</span> ~/transformer-course`}}),se=new _({props:{code:"python -m venv .env",highlighted:'<span class="hljs-keyword">python</span> -m venv .<span class="hljs-keyword">env</span>'}}),ce=new _({props:{code:"ls -a",highlighted:'<span class="hljs-built_in">ls</span> -a'}}),pe=new _({props:{code:".      ..    .env",highlighted:'.      <span class="hljs-string">..</span>    <span class="hljs-string">.env</span>'}}),ue=new _({props:{code:`# Activate the virtual environment
source .env/bin/activate

# Deactivate the virtual environment
source .env/bin/deactivate`,highlighted:`<span class="hljs-comment"># Activate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate

<span class="hljs-comment"># Deactivate the virtual environment</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/deactivate`}}),me=new _({props:{code:"which python",highlighted:'<span class="hljs-built_in">which</span> python'}}),de=new _({props:{code:"/home/<user>/transformer-course/.env/bin/python",highlighted:'<span class="hljs-regexp">/home/</span>&lt;user&gt;<span class="hljs-regexp">/transformer-course/</span>.env<span class="hljs-regexp">/bin/</span>python'}}),fe=new Zi({}),ve=new _({props:{code:'pip install "transformers[sentencepiece]"',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;transformers[sentencepiece]&quot;</span>'}}),{c(){E=n("meta"),Xe=p(),w=n("h1"),A=n("a"),Ce=n("span"),d(W.$$.fragment),eo=p(),ke=n("span"),io=a("Introduzione"),Ye=p(),I=n("p"),oo=a("Benvenuto/a al corso di Hugging Face! In questo capitolo introduttivo, ti aiuteremo a configurare il tuo ambiente di lavoro. Se non hai ancora cominciato il corso, ti consigliamo di dare prima un occhio al "),he=n("a"),to=a("Capitolo 1"),ao=a(", per poi tornare qui a creare il tuo ambiente e cominciare a lavorare al codice."),Ze=p(),be=n("p"),lo=a("Tutte le librerie che useremo in questo corso sono disponibili come pacchetti Python. Qui ti mostreremo dapprima come configurare un ambiente Python e in seguito come installare le librerie di cui avrai bisogno."),ei=p(),ze=n("p"),ro=a("Copriremo due modi per configurare un ambiente di lavoro: usando un blocco note Colab, oppure un ambiente virtuale in Python. Sentiti libero/a di scegliere quello che ti sembra pi\xF9 adatto a te. Se sei un/a principiante, ti consigliamo vivamente di cominciare a lavorare con un blocco note Colab."),ii=p(),$e=n("p"),no=a("Nota che non copriremo Windows. Se utilizzi Windows come sistema operativo, il nostro consiglio \xE8 di seguire il corso utilizzando un blocco note Colab. Se invece utilizzi Linux oppure macOS, puoi scegliere uno qualsiasi degli approcci descritti qui in seguito."),oi=p(),S=n("p"),so=a("Buona parte del corso richiede un profilo di Hugging Face. Ti consigliamo dunque di crearne uno al pi\xF9 presto: "),V=n("a"),co=a("Crea un profilo"),po=a("."),ti=p(),q=n("h2"),j=n("a"),Ae=n("span"),d(J.$$.fragment),uo=p(),Ie=n("span"),mo=a("Come usare un blocco note Colab di Google"),ai=p(),ge=n("p"),fo=a("Il modo pi\xF9 semplice di configurare il tuo ambiente di lavoro \xE8 utilizzando Google Colab: una volta avviato un blocco note nel browser, puoi iniziare immediatamente a programmare!"),li=p(),T=n("p"),vo=a("Se non conosci bene Colab, ti raccomandiamo di iniziare dalla seguente "),R=n("a"),ho=a("introduzione"),bo=a(". Colab permette di utilizzare accelerazioni hardware come GPU o TPU, ed \xE8 gratuito per i carichi di lavoro pi\xF9 piccoli."),ri=p(),_e=n("p"),zo=a("Quando ti sentirai a tuo agio con Colab, crea un nuovo blocco note e inizia la configurazione:"),ni=p(),K=n("div"),X=n("img"),si=p(),y=n("p"),$o=a("Il passo successivo consiste nell\u2019installare le librerie che utilizzerai in questo corso. Per l\u2019installazione, useremo "),Se=n("code"),go=a("pip"),_o=a(", ossia il gestore di pacchetti di Python. In Google Colab, puoi inizializzare i tuoi comandi di sistema facendone precedere il nome dal carattere "),je=n("code"),yo=a("!"),Po=a(". La libreria \u{1F917} Transformers verr\xE0 quindi installata come segue:"),ci=p(),d(Y.$$.fragment),pi=p(),ye=n("p"),Eo=a("Puoi assicurarti che il pacchetto sia stato installato correttamente importandolo in Python:"),ui=p(),d(Z.$$.fragment),mi=p(),ee=n("div"),ie=n("img"),di=p(),$=n("p"),wo=a("Quest\u2019operazione installa una versione molto leggera degli \u{1F917} Transformers che non importa nessun framework ("),Te=n("em"),qo=a("quadro strutturale"),Co=a(") di machine learning ("),xe=n("em"),ko=a("apprendimento automatico"),Ao=a("), come ad esempio PyTorch o TensorFlow. Dato che useremo numerose features ("),De=n("em"),Io=a("caratteristiche"),So=a(") della libreria, ti raccomandiamo l\u2019installazione della versione per sviluppatori. Questa contiene praticamente tutte le dipendenze possibili e immaginabili:"),fi=p(),d(oe.$$.fragment),vi=p(),Pe=n("p"),jo=a("L\u2019operazione richieder\xE0 un po\u2019 di tempo, ma poi sarai pronto/a per il tutto resto del corso!"),hi=p(),C=n("h2"),x=n("a"),Oe=n("span"),d(te.$$.fragment),To=p(),Qe=n("span"),xo=a("Come usare un ambiente virtuale in Python"),bi=p(),D=n("p"),Do=a("Se preferisci utilizzare un ambiente virtuale in Python, il primo passo consiste nell\u2019installazione di Python nel tuo sistema. Ti raccomandiamo di aiutarti con "),ae=n("a"),Oo=a("questa guida"),Qo=a("."),zi=p(),O=n("p"),Go=a("Quando avrai installato Python, dovresti riuscire a eseguire qualsiasi comando in Python sul terminale. Prima di procedere ai passi successivi, prova a eseguire il seguente comando per assicurarti che Python sia installato correttamente: "),Ge=n("code"),Lo=a("python --version"),No=a(". Il comando dovrebbe stampare il nome della versione di Python installata nella tua macchina."),$i=p(),Q=n("p"),Mo=a("Quando esegui un comando in Python dal terminale, come ad esempio "),Le=n("code"),Ho=a("python --version"),Fo=a(", ti consigliamo di considerare il programma che esegue il tuo comando come l\u2019installazione \u201Cprincipale\u201D di Python del tuo sistema. La nostra raccomandazione \xE8 di tenere quest\u2019installazione principale libera da pacchetti di ogni tipo, e di usarla per creare ambienti diversi per ogni applicazione alla quale lavorerai. In questo modo, ogni applicazione avr\xE0 le proprie dipendenze e i propri pacchetti, e non dovrai preoccuparti di eventuali problemi di compatibilit\xE0 con altre applicazioni."),gi=p(),g=n("p"),Bo=a("In Python, quest\u2019operazione si effettua utilizzando i "),le=n("a"),Uo=a("virtual environments"),Wo=a(" ("),Ne=n("em"),Vo=a("ambienti virtuali"),Jo=a("). Questi ultimi sono degli alberi di directory autonomi che contengono installazioni di Python diverse, ossia particolari versioni di Python unite a tutti i pacchetti richiesti da una certa applicazione. La creazione di ambienti virtuali di questo tipo si pu\xF2 attuare a mezzo di strumenti diversi, anche se qui useremo esclusivamente il pacchetto ufficiale di Python, "),re=n("a"),Me=n("code"),Ro=a("venv"),Ko=a("."),_i=p(),G=n("p"),Xo=a("Innanzitutto, crea la cartella che ospiter\xE0 l\u2019applicazione in questione, come ad esempio una cartella di nome "),He=n("em"),Yo=a("transformer-course"),Zo=a(" alla radice della tua home directory:"),yi=p(),d(ne.$$.fragment),Pi=p(),L=n("p"),et=a("All\u2019interno di questa cartella, crea un ambiente virtuale utilizzando il modulo "),Fe=n("code"),it=a("venv"),ot=a(" di Python:"),Ei=p(),d(se.$$.fragment),wi=p(),N=n("p"),tt=a("A questo punto, dovresti avere una cartella chiamata "),Be=n("em"),at=a(".env"),lt=a(" in quella che era la tua cartella vuota:"),qi=p(),d(ce.$$.fragment),Ci=p(),d(pe.$$.fragment),ki=p(),P=n("p"),rt=a("Puoi entrare e uscire dall\u2019ambiente virtuale utilizzando gli script "),Ue=n("code"),nt=a("activate"),st=a(" e "),We=n("code"),ct=a("deactivate"),pt=a(":"),Ai=p(),d(ue.$$.fragment),Ii=p(),M=n("p"),ut=a("Assicurati che l\u2019ambiente sia configurato correttamente eseguendo il comando "),Ve=n("code"),mt=a("which python"),dt=a(": se come risposta ottieni l\u2019ambiente virtuale, significa che l\u2019hai attivato bene!"),Si=p(),d(me.$$.fragment),ji=p(),d(de.$$.fragment),Ti=p(),k=n("h3"),H=n("a"),Je=n("span"),d(fe.$$.fragment),ft=p(),Re=n("span"),vt=a("Installazione dipendenze"),xi=p(),F=n("p"),ht=a("Come gi\xE0 menzionato nella sezione su Google Colab, il passo successivo consiste nell\u2019installazione dei pacchetti richiesti dal corso. Ancora una volta, ti chiediamo di installare la versione per sviluppatori degli \u{1F917} Transformers utilizzando il gestore di pacchetti "),Ke=n("code"),bt=a("pip"),zt=a(":"),Di=p(),d(ve.$$.fragment),Oi=p(),Ee=n("p"),$t=a("Abbiamo finito con le installazioni! Ora sei pronto/a a iniziare."),this.h()},l(e){const t=ba('[data-svelte="svelte-1phssyn"]',document.head);E=s(t,"META",{name:!0,content:!0}),t.forEach(i),Xe=u(e),w=s(e,"H1",{class:!0});var Gi=c(w);A=s(Gi,"A",{id:!0,class:!0,href:!0});var Pt=c(A);Ce=s(Pt,"SPAN",{});var Et=c(Ce);f(W.$$.fragment,Et),Et.forEach(i),Pt.forEach(i),eo=u(Gi),ke=s(Gi,"SPAN",{});var wt=c(ke);io=l(wt,"Introduzione"),wt.forEach(i),Gi.forEach(i),Ye=u(e),I=s(e,"P",{});var Li=c(I);oo=l(Li,"Benvenuto/a al corso di Hugging Face! In questo capitolo introduttivo, ti aiuteremo a configurare il tuo ambiente di lavoro. Se non hai ancora cominciato il corso, ti consigliamo di dare prima un occhio al "),he=s(Li,"A",{href:!0});var qt=c(he);to=l(qt,"Capitolo 1"),qt.forEach(i),ao=l(Li,", per poi tornare qui a creare il tuo ambiente e cominciare a lavorare al codice."),Li.forEach(i),Ze=u(e),be=s(e,"P",{});var Ct=c(be);lo=l(Ct,"Tutte le librerie che useremo in questo corso sono disponibili come pacchetti Python. Qui ti mostreremo dapprima come configurare un ambiente Python e in seguito come installare le librerie di cui avrai bisogno."),Ct.forEach(i),ei=u(e),ze=s(e,"P",{});var kt=c(ze);ro=l(kt,"Copriremo due modi per configurare un ambiente di lavoro: usando un blocco note Colab, oppure un ambiente virtuale in Python. Sentiti libero/a di scegliere quello che ti sembra pi\xF9 adatto a te. Se sei un/a principiante, ti consigliamo vivamente di cominciare a lavorare con un blocco note Colab."),kt.forEach(i),ii=u(e),$e=s(e,"P",{});var At=c($e);no=l(At,"Nota che non copriremo Windows. Se utilizzi Windows come sistema operativo, il nostro consiglio \xE8 di seguire il corso utilizzando un blocco note Colab. Se invece utilizzi Linux oppure macOS, puoi scegliere uno qualsiasi degli approcci descritti qui in seguito."),At.forEach(i),oi=u(e),S=s(e,"P",{});var Ni=c(S);so=l(Ni,"Buona parte del corso richiede un profilo di Hugging Face. Ti consigliamo dunque di crearne uno al pi\xF9 presto: "),V=s(Ni,"A",{href:!0,rel:!0});var It=c(V);co=l(It,"Crea un profilo"),It.forEach(i),po=l(Ni,"."),Ni.forEach(i),ti=u(e),q=s(e,"H2",{class:!0});var Mi=c(q);j=s(Mi,"A",{id:!0,class:!0,href:!0});var St=c(j);Ae=s(St,"SPAN",{});var jt=c(Ae);f(J.$$.fragment,jt),jt.forEach(i),St.forEach(i),uo=u(Mi),Ie=s(Mi,"SPAN",{});var Tt=c(Ie);mo=l(Tt,"Come usare un blocco note Colab di Google"),Tt.forEach(i),Mi.forEach(i),ai=u(e),ge=s(e,"P",{});var xt=c(ge);fo=l(xt,"Il modo pi\xF9 semplice di configurare il tuo ambiente di lavoro \xE8 utilizzando Google Colab: una volta avviato un blocco note nel browser, puoi iniziare immediatamente a programmare!"),xt.forEach(i),li=u(e),T=s(e,"P",{});var Hi=c(T);vo=l(Hi,"Se non conosci bene Colab, ti raccomandiamo di iniziare dalla seguente "),R=s(Hi,"A",{href:!0,rel:!0});var Dt=c(R);ho=l(Dt,"introduzione"),Dt.forEach(i),bo=l(Hi,". Colab permette di utilizzare accelerazioni hardware come GPU o TPU, ed \xE8 gratuito per i carichi di lavoro pi\xF9 piccoli."),Hi.forEach(i),ri=u(e),_e=s(e,"P",{});var Ot=c(_e);zo=l(Ot,"Quando ti sentirai a tuo agio con Colab, crea un nuovo blocco note e inizia la configurazione:"),Ot.forEach(i),ni=u(e),K=s(e,"DIV",{class:!0});var Qt=c(K);X=s(Qt,"IMG",{src:!0,alt:!0,width:!0}),Qt.forEach(i),si=u(e),y=s(e,"P",{});var we=c(y);$o=l(we,"Il passo successivo consiste nell\u2019installare le librerie che utilizzerai in questo corso. Per l\u2019installazione, useremo "),Se=s(we,"CODE",{});var Gt=c(Se);go=l(Gt,"pip"),Gt.forEach(i),_o=l(we,", ossia il gestore di pacchetti di Python. In Google Colab, puoi inizializzare i tuoi comandi di sistema facendone precedere il nome dal carattere "),je=s(we,"CODE",{});var Lt=c(je);yo=l(Lt,"!"),Lt.forEach(i),Po=l(we,". La libreria \u{1F917} Transformers verr\xE0 quindi installata come segue:"),we.forEach(i),ci=u(e),f(Y.$$.fragment,e),pi=u(e),ye=s(e,"P",{});var Nt=c(ye);Eo=l(Nt,"Puoi assicurarti che il pacchetto sia stato installato correttamente importandolo in Python:"),Nt.forEach(i),ui=u(e),f(Z.$$.fragment,e),mi=u(e),ee=s(e,"DIV",{class:!0});var Mt=c(ee);ie=s(Mt,"IMG",{src:!0,alt:!0,width:!0}),Mt.forEach(i),di=u(e),$=s(e,"P",{});var B=c($);wo=l(B,"Quest\u2019operazione installa una versione molto leggera degli \u{1F917} Transformers che non importa nessun framework ("),Te=s(B,"EM",{});var Ht=c(Te);qo=l(Ht,"quadro strutturale"),Ht.forEach(i),Co=l(B,") di machine learning ("),xe=s(B,"EM",{});var Ft=c(xe);ko=l(Ft,"apprendimento automatico"),Ft.forEach(i),Ao=l(B,"), come ad esempio PyTorch o TensorFlow. Dato che useremo numerose features ("),De=s(B,"EM",{});var Bt=c(De);Io=l(Bt,"caratteristiche"),Bt.forEach(i),So=l(B,") della libreria, ti raccomandiamo l\u2019installazione della versione per sviluppatori. Questa contiene praticamente tutte le dipendenze possibili e immaginabili:"),B.forEach(i),fi=u(e),f(oe.$$.fragment,e),vi=u(e),Pe=s(e,"P",{});var Ut=c(Pe);jo=l(Ut,"L\u2019operazione richieder\xE0 un po\u2019 di tempo, ma poi sarai pronto/a per il tutto resto del corso!"),Ut.forEach(i),hi=u(e),C=s(e,"H2",{class:!0});var Fi=c(C);x=s(Fi,"A",{id:!0,class:!0,href:!0});var Wt=c(x);Oe=s(Wt,"SPAN",{});var Vt=c(Oe);f(te.$$.fragment,Vt),Vt.forEach(i),Wt.forEach(i),To=u(Fi),Qe=s(Fi,"SPAN",{});var Jt=c(Qe);xo=l(Jt,"Come usare un ambiente virtuale in Python"),Jt.forEach(i),Fi.forEach(i),bi=u(e),D=s(e,"P",{});var Bi=c(D);Do=l(Bi,"Se preferisci utilizzare un ambiente virtuale in Python, il primo passo consiste nell\u2019installazione di Python nel tuo sistema. Ti raccomandiamo di aiutarti con "),ae=s(Bi,"A",{href:!0,rel:!0});var Rt=c(ae);Oo=l(Rt,"questa guida"),Rt.forEach(i),Qo=l(Bi,"."),Bi.forEach(i),zi=u(e),O=s(e,"P",{});var Ui=c(O);Go=l(Ui,"Quando avrai installato Python, dovresti riuscire a eseguire qualsiasi comando in Python sul terminale. Prima di procedere ai passi successivi, prova a eseguire il seguente comando per assicurarti che Python sia installato correttamente: "),Ge=s(Ui,"CODE",{});var Kt=c(Ge);Lo=l(Kt,"python --version"),Kt.forEach(i),No=l(Ui,". Il comando dovrebbe stampare il nome della versione di Python installata nella tua macchina."),Ui.forEach(i),$i=u(e),Q=s(e,"P",{});var Wi=c(Q);Mo=l(Wi,"Quando esegui un comando in Python dal terminale, come ad esempio "),Le=s(Wi,"CODE",{});var Xt=c(Le);Ho=l(Xt,"python --version"),Xt.forEach(i),Fo=l(Wi,", ti consigliamo di considerare il programma che esegue il tuo comando come l\u2019installazione \u201Cprincipale\u201D di Python del tuo sistema. La nostra raccomandazione \xE8 di tenere quest\u2019installazione principale libera da pacchetti di ogni tipo, e di usarla per creare ambienti diversi per ogni applicazione alla quale lavorerai. In questo modo, ogni applicazione avr\xE0 le proprie dipendenze e i propri pacchetti, e non dovrai preoccuparti di eventuali problemi di compatibilit\xE0 con altre applicazioni."),Wi.forEach(i),gi=u(e),g=s(e,"P",{});var U=c(g);Bo=l(U,"In Python, quest\u2019operazione si effettua utilizzando i "),le=s(U,"A",{href:!0,rel:!0});var Yt=c(le);Uo=l(Yt,"virtual environments"),Yt.forEach(i),Wo=l(U," ("),Ne=s(U,"EM",{});var Zt=c(Ne);Vo=l(Zt,"ambienti virtuali"),Zt.forEach(i),Jo=l(U,"). Questi ultimi sono degli alberi di directory autonomi che contengono installazioni di Python diverse, ossia particolari versioni di Python unite a tutti i pacchetti richiesti da una certa applicazione. La creazione di ambienti virtuali di questo tipo si pu\xF2 attuare a mezzo di strumenti diversi, anche se qui useremo esclusivamente il pacchetto ufficiale di Python, "),re=s(U,"A",{href:!0,rel:!0});var ea=c(re);Me=s(ea,"CODE",{});var ia=c(Me);Ro=l(ia,"venv"),ia.forEach(i),ea.forEach(i),Ko=l(U,"."),U.forEach(i),_i=u(e),G=s(e,"P",{});var Vi=c(G);Xo=l(Vi,"Innanzitutto, crea la cartella che ospiter\xE0 l\u2019applicazione in questione, come ad esempio una cartella di nome "),He=s(Vi,"EM",{});var oa=c(He);Yo=l(oa,"transformer-course"),oa.forEach(i),Zo=l(Vi," alla radice della tua home directory:"),Vi.forEach(i),yi=u(e),f(ne.$$.fragment,e),Pi=u(e),L=s(e,"P",{});var Ji=c(L);et=l(Ji,"All\u2019interno di questa cartella, crea un ambiente virtuale utilizzando il modulo "),Fe=s(Ji,"CODE",{});var ta=c(Fe);it=l(ta,"venv"),ta.forEach(i),ot=l(Ji," di Python:"),Ji.forEach(i),Ei=u(e),f(se.$$.fragment,e),wi=u(e),N=s(e,"P",{});var Ri=c(N);tt=l(Ri,"A questo punto, dovresti avere una cartella chiamata "),Be=s(Ri,"EM",{});var aa=c(Be);at=l(aa,".env"),aa.forEach(i),lt=l(Ri," in quella che era la tua cartella vuota:"),Ri.forEach(i),qi=u(e),f(ce.$$.fragment,e),Ci=u(e),f(pe.$$.fragment,e),ki=u(e),P=s(e,"P",{});var qe=c(P);rt=l(qe,"Puoi entrare e uscire dall\u2019ambiente virtuale utilizzando gli script "),Ue=s(qe,"CODE",{});var la=c(Ue);nt=l(la,"activate"),la.forEach(i),st=l(qe," e "),We=s(qe,"CODE",{});var ra=c(We);ct=l(ra,"deactivate"),ra.forEach(i),pt=l(qe,":"),qe.forEach(i),Ai=u(e),f(ue.$$.fragment,e),Ii=u(e),M=s(e,"P",{});var Ki=c(M);ut=l(Ki,"Assicurati che l\u2019ambiente sia configurato correttamente eseguendo il comando "),Ve=s(Ki,"CODE",{});var na=c(Ve);mt=l(na,"which python"),na.forEach(i),dt=l(Ki,": se come risposta ottieni l\u2019ambiente virtuale, significa che l\u2019hai attivato bene!"),Ki.forEach(i),Si=u(e),f(me.$$.fragment,e),ji=u(e),f(de.$$.fragment,e),Ti=u(e),k=s(e,"H3",{class:!0});var Xi=c(k);H=s(Xi,"A",{id:!0,class:!0,href:!0});var sa=c(H);Je=s(sa,"SPAN",{});var ca=c(Je);f(fe.$$.fragment,ca),ca.forEach(i),sa.forEach(i),ft=u(Xi),Re=s(Xi,"SPAN",{});var pa=c(Re);vt=l(pa,"Installazione dipendenze"),pa.forEach(i),Xi.forEach(i),xi=u(e),F=s(e,"P",{});var Yi=c(F);ht=l(Yi,"Come gi\xE0 menzionato nella sezione su Google Colab, il passo successivo consiste nell\u2019installazione dei pacchetti richiesti dal corso. Ancora una volta, ti chiediamo di installare la versione per sviluppatori degli \u{1F917} Transformers utilizzando il gestore di pacchetti "),Ke=s(Yi,"CODE",{});var ua=c(Ke);bt=l(ua,"pip"),ua.forEach(i),zt=l(Yi,":"),Yi.forEach(i),Di=u(e),f(ve.$$.fragment,e),Oi=u(e),Ee=s(e,"P",{});var ma=c(Ee);$t=l(ma,"Abbiamo finito con le installazioni! Ora sei pronto/a a iniziare."),ma.forEach(i),this.h()},h(){m(E,"name","hf:doc:metadata"),m(E,"content",JSON.stringify(_a)),m(A,"id","introduzione"),m(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(A,"href","#introduzione"),m(w,"class","relative group"),m(he,"href","/course/chapter1"),m(V,"href","https://huggingface.co/join"),m(V,"rel","nofollow"),m(j,"id","come-usare-un-blocco-note-colab-di-google"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#come-usare-un-blocco-note-colab-di-google"),m(q,"class","relative group"),m(R,"href","https://colab.research.google.com/notebooks/intro.ipynb"),m(R,"rel","nofollow"),da(X.src,_t="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/new_colab.png")||m(X,"src",_t),m(X,"alt","An empty colab notebook"),m(X,"width","80%"),m(K,"class","flex justify-center"),da(ie.src,yt="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/install.gif")||m(ie,"src",yt),m(ie,"alt","A gif showing the result of the two commands above: installation and import"),m(ie,"width","80%"),m(ee,"class","flex justify-center"),m(x,"id","come-usare-un-ambiente-virtuale-in-python"),m(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(x,"href","#come-usare-un-ambiente-virtuale-in-python"),m(C,"class","relative group"),m(ae,"href","https://realpython.com/installing-python/"),m(ae,"rel","nofollow"),m(le,"href","https://docs.python.org/3/tutorial/venv.html"),m(le,"rel","nofollow"),m(re,"href","https://docs.python.org/3/library/venv.html#module-venv"),m(re,"rel","nofollow"),m(H,"id","installazione-dipendenze"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#installazione-dipendenze"),m(k,"class","relative group")},m(e,t){o(document.head,E),r(e,Xe,t),r(e,w,t),o(w,A),o(A,Ce),v(W,Ce,null),o(w,eo),o(w,ke),o(ke,io),r(e,Ye,t),r(e,I,t),o(I,oo),o(I,he),o(he,to),o(I,ao),r(e,Ze,t),r(e,be,t),o(be,lo),r(e,ei,t),r(e,ze,t),o(ze,ro),r(e,ii,t),r(e,$e,t),o($e,no),r(e,oi,t),r(e,S,t),o(S,so),o(S,V),o(V,co),o(S,po),r(e,ti,t),r(e,q,t),o(q,j),o(j,Ae),v(J,Ae,null),o(q,uo),o(q,Ie),o(Ie,mo),r(e,ai,t),r(e,ge,t),o(ge,fo),r(e,li,t),r(e,T,t),o(T,vo),o(T,R),o(R,ho),o(T,bo),r(e,ri,t),r(e,_e,t),o(_e,zo),r(e,ni,t),r(e,K,t),o(K,X),r(e,si,t),r(e,y,t),o(y,$o),o(y,Se),o(Se,go),o(y,_o),o(y,je),o(je,yo),o(y,Po),r(e,ci,t),v(Y,e,t),r(e,pi,t),r(e,ye,t),o(ye,Eo),r(e,ui,t),v(Z,e,t),r(e,mi,t),r(e,ee,t),o(ee,ie),r(e,di,t),r(e,$,t),o($,wo),o($,Te),o(Te,qo),o($,Co),o($,xe),o(xe,ko),o($,Ao),o($,De),o(De,Io),o($,So),r(e,fi,t),v(oe,e,t),r(e,vi,t),r(e,Pe,t),o(Pe,jo),r(e,hi,t),r(e,C,t),o(C,x),o(x,Oe),v(te,Oe,null),o(C,To),o(C,Qe),o(Qe,xo),r(e,bi,t),r(e,D,t),o(D,Do),o(D,ae),o(ae,Oo),o(D,Qo),r(e,zi,t),r(e,O,t),o(O,Go),o(O,Ge),o(Ge,Lo),o(O,No),r(e,$i,t),r(e,Q,t),o(Q,Mo),o(Q,Le),o(Le,Ho),o(Q,Fo),r(e,gi,t),r(e,g,t),o(g,Bo),o(g,le),o(le,Uo),o(g,Wo),o(g,Ne),o(Ne,Vo),o(g,Jo),o(g,re),o(re,Me),o(Me,Ro),o(g,Ko),r(e,_i,t),r(e,G,t),o(G,Xo),o(G,He),o(He,Yo),o(G,Zo),r(e,yi,t),v(ne,e,t),r(e,Pi,t),r(e,L,t),o(L,et),o(L,Fe),o(Fe,it),o(L,ot),r(e,Ei,t),v(se,e,t),r(e,wi,t),r(e,N,t),o(N,tt),o(N,Be),o(Be,at),o(N,lt),r(e,qi,t),v(ce,e,t),r(e,Ci,t),v(pe,e,t),r(e,ki,t),r(e,P,t),o(P,rt),o(P,Ue),o(Ue,nt),o(P,st),o(P,We),o(We,ct),o(P,pt),r(e,Ai,t),v(ue,e,t),r(e,Ii,t),r(e,M,t),o(M,ut),o(M,Ve),o(Ve,mt),o(M,dt),r(e,Si,t),v(me,e,t),r(e,ji,t),v(de,e,t),r(e,Ti,t),r(e,k,t),o(k,H),o(H,Je),v(fe,Je,null),o(k,ft),o(k,Re),o(Re,vt),r(e,xi,t),r(e,F,t),o(F,ht),o(F,Ke),o(Ke,bt),o(F,zt),r(e,Di,t),v(ve,e,t),r(e,Oi,t),r(e,Ee,t),o(Ee,$t),Qi=!0},p:za,i(e){Qi||(h(W.$$.fragment,e),h(J.$$.fragment,e),h(Y.$$.fragment,e),h(Z.$$.fragment,e),h(oe.$$.fragment,e),h(te.$$.fragment,e),h(ne.$$.fragment,e),h(se.$$.fragment,e),h(ce.$$.fragment,e),h(pe.$$.fragment,e),h(ue.$$.fragment,e),h(me.$$.fragment,e),h(de.$$.fragment,e),h(fe.$$.fragment,e),h(ve.$$.fragment,e),Qi=!0)},o(e){b(W.$$.fragment,e),b(J.$$.fragment,e),b(Y.$$.fragment,e),b(Z.$$.fragment,e),b(oe.$$.fragment,e),b(te.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),b(ce.$$.fragment,e),b(pe.$$.fragment,e),b(ue.$$.fragment,e),b(me.$$.fragment,e),b(de.$$.fragment,e),b(fe.$$.fragment,e),b(ve.$$.fragment,e),Qi=!1},d(e){i(E),e&&i(Xe),e&&i(w),z(W),e&&i(Ye),e&&i(I),e&&i(Ze),e&&i(be),e&&i(ei),e&&i(ze),e&&i(ii),e&&i($e),e&&i(oi),e&&i(S),e&&i(ti),e&&i(q),z(J),e&&i(ai),e&&i(ge),e&&i(li),e&&i(T),e&&i(ri),e&&i(_e),e&&i(ni),e&&i(K),e&&i(si),e&&i(y),e&&i(ci),z(Y,e),e&&i(pi),e&&i(ye),e&&i(ui),z(Z,e),e&&i(mi),e&&i(ee),e&&i(di),e&&i($),e&&i(fi),z(oe,e),e&&i(vi),e&&i(Pe),e&&i(hi),e&&i(C),z(te),e&&i(bi),e&&i(D),e&&i(zi),e&&i(O),e&&i($i),e&&i(Q),e&&i(gi),e&&i(g),e&&i(_i),e&&i(G),e&&i(yi),z(ne,e),e&&i(Pi),e&&i(L),e&&i(Ei),z(se,e),e&&i(wi),e&&i(N),e&&i(qi),z(ce,e),e&&i(Ci),z(pe,e),e&&i(ki),e&&i(P),e&&i(Ai),z(ue,e),e&&i(Ii),e&&i(M),e&&i(Si),z(me,e),e&&i(ji),z(de,e),e&&i(Ti),e&&i(k),z(fe),e&&i(xi),e&&i(F),e&&i(Di),z(ve,e),e&&i(Oi),e&&i(Ee)}}}const _a={local:"introduzione",sections:[{local:"come-usare-un-blocco-note-colab-di-google",title:"Come usare un blocco note Colab di Google"},{local:"come-usare-un-ambiente-virtuale-in-python",sections:[{local:"installazione-dipendenze",title:"Installazione dipendenze"}],title:"Come usare un ambiente virtuale in Python"}],title:"Introduzione"};function ya(gt){return $a(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qa extends fa{constructor(E){super();va(this,E,ya,ga,ha,{})}}export{qa as default,_a as metadata};
