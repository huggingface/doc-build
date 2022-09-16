import{S as Re,i as Ke,s as et,e as r,k as f,w as Ce,t as s,M as tt,c as n,d as t,m as u,a as i,x as Fe,h as l,b as h,G as a,g as c,y as Qe,L as at,q as Ve,o as Ye,B as Ze,v as rt}from"../../chunks/vendor-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";function nt(Se){let d,B,m,g,M,T,re,j,ne,X,v,w,z,E,ie,H,oe,q,b,se,L,le,he,I,U,ce,C,$,O,fe,F,G,ue,Q,p,W,pe,de,x,me,A,ve,ge,we,N,be,P,ye,V,y,_e,k,Te,Ee,Y,_,Le,S,xe,Pe,Z;return T=new Je({}),E=new Je({}),{c(){d=r("meta"),B=f(),m=r("h1"),g=r("a"),M=r("span"),Ce(T.$$.fragment),re=f(),j=r("span"),ne=s("UL2"),X=f(),v=r("h2"),w=r("a"),z=r("span"),Ce(E.$$.fragment),ie=f(),H=r("span"),oe=s("Overview"),q=f(),b=r("p"),se=s("The T5 model was presented in "),L=r("a"),le=s("Unifying Language Learning Paradigms"),he=s(" by Yi Tay, Mostafa Dehghani, Vinh Q. Tran, Xavier Garcia, Dara Bahri, Tal Schuster, Huaixiu Steven Zheng, Neil Houlsby, Donald Metzler."),I=f(),U=r("p"),ce=s("The abstract from the paper is the following:"),C=f(),$=r("p"),O=r("em"),fe=s("Existing pre-trained models are generally geared towards a particular class of problems. To date, there seems to be still no consensus on what the right architecture and pre-training setup should be. This paper presents a unified framework for pre-training models that are universally effective across datasets and setups. We begin by disentangling architectural archetypes with pre-training objectives \u2014 two concepts that are commonly conflated. Next, we present a generalized and unified perspective for self-supervision in NLP and show how different pre-training objectives can be cast as one another and how interpolating between different objectives can be effective. We then propose Mixture-of-Denoisers (MoD), a pre-training objective that combines diverse pre-training paradigms together. We furthermore introduce a notion of mode switching, wherein downstream fine-tuning is associated with specific pre-training schemes. We conduct extensive ablative experiments to compare multiple pre-training objectives and find that our method pushes the Pareto-frontier by outperforming T5 and/or GPT-like models across multiple diverse setups. Finally, by scaling our model up to 20B parameters, we achieve SOTA performance on 50 well-established supervised NLP tasks ranging from language generation (with automated and human evaluation), language understanding, text classification, question answering, commonsense reasoning, long text reasoning, structured knowledge grounding and information retrieval. Our model also achieve strong results at in-context learning, outperforming 175B GPT-3 on zero-shot SuperGLUE and tripling the performance of T5-XXL on one-shot summarization."),F=f(),G=r("p"),ue=s("Tips:"),Q=f(),p=r("ul"),W=r("li"),pe=s("UL2 is an encoder-decoder model pre-trained on a mixture of denoising functions as well as fine-tuned on an array of downstream tasks."),de=f(),x=r("li"),me=s("UL2 has the same architecture as "),A=r("a"),ve=s("T5v1.1"),ge=s(" but uses the Gated-SiLU activation function instead of Gated-GELU."),we=f(),N=r("li"),be=s("The authors release checkpoints of one architecture which can be seen "),P=r("a"),ye=s("here"),V=f(),y=r("p"),_e=s("The original code can be found "),k=r("a"),Te=s("here"),Ee=s("."),Y=f(),_=r("p"),Le=s("This model was contributed by "),S=r("a"),xe=s("DanielHesslow"),Pe=s("."),this.h()},l(e){const o=tt('[data-svelte="svelte-1phssyn"]',document.head);d=n(o,"META",{name:!0,content:!0}),o.forEach(t),B=u(e),m=n(e,"H1",{class:!0});var J=i(m);g=n(J,"A",{id:!0,class:!0,href:!0});var Ue=i(g);M=n(Ue,"SPAN",{});var $e=i(M);Fe(T.$$.fragment,$e),$e.forEach(t),Ue.forEach(t),re=u(J),j=n(J,"SPAN",{});var Ge=i(j);ne=l(Ge,"UL2"),Ge.forEach(t),J.forEach(t),X=u(e),v=n(e,"H2",{class:!0});var R=i(v);w=n(R,"A",{id:!0,class:!0,href:!0});var Ae=i(w);z=n(Ae,"SPAN",{});var Ne=i(z);Fe(E.$$.fragment,Ne),Ne.forEach(t),Ae.forEach(t),ie=u(R),H=n(R,"SPAN",{});var De=i(H);oe=l(De,"Overview"),De.forEach(t),R.forEach(t),q=u(e),b=n(e,"P",{});var K=i(b);se=l(K,"The T5 model was presented in "),L=n(K,"A",{href:!0,rel:!0});var Me=i(L);le=l(Me,"Unifying Language Learning Paradigms"),Me.forEach(t),he=l(K," by Yi Tay, Mostafa Dehghani, Vinh Q. Tran, Xavier Garcia, Dara Bahri, Tal Schuster, Huaixiu Steven Zheng, Neil Houlsby, Donald Metzler."),K.forEach(t),I=u(e),U=n(e,"P",{});var je=i(U);ce=l(je,"The abstract from the paper is the following:"),je.forEach(t),C=u(e),$=n(e,"P",{});var ze=i($);O=n(ze,"EM",{});var He=i(O);fe=l(He,"Existing pre-trained models are generally geared towards a particular class of problems. To date, there seems to be still no consensus on what the right architecture and pre-training setup should be. This paper presents a unified framework for pre-training models that are universally effective across datasets and setups. We begin by disentangling architectural archetypes with pre-training objectives \u2014 two concepts that are commonly conflated. Next, we present a generalized and unified perspective for self-supervision in NLP and show how different pre-training objectives can be cast as one another and how interpolating between different objectives can be effective. We then propose Mixture-of-Denoisers (MoD), a pre-training objective that combines diverse pre-training paradigms together. We furthermore introduce a notion of mode switching, wherein downstream fine-tuning is associated with specific pre-training schemes. We conduct extensive ablative experiments to compare multiple pre-training objectives and find that our method pushes the Pareto-frontier by outperforming T5 and/or GPT-like models across multiple diverse setups. Finally, by scaling our model up to 20B parameters, we achieve SOTA performance on 50 well-established supervised NLP tasks ranging from language generation (with automated and human evaluation), language understanding, text classification, question answering, commonsense reasoning, long text reasoning, structured knowledge grounding and information retrieval. Our model also achieve strong results at in-context learning, outperforming 175B GPT-3 on zero-shot SuperGLUE and tripling the performance of T5-XXL on one-shot summarization."),He.forEach(t),ze.forEach(t),F=u(e),G=n(e,"P",{});var Oe=i(G);ue=l(Oe,"Tips:"),Oe.forEach(t),Q=u(e),p=n(e,"UL",{});var D=i(p);W=n(D,"LI",{});var We=i(W);pe=l(We,"UL2 is an encoder-decoder model pre-trained on a mixture of denoising functions as well as fine-tuned on an array of downstream tasks."),We.forEach(t),de=u(D),x=n(D,"LI",{});var ee=i(x);me=l(ee,"UL2 has the same architecture as "),A=n(ee,"A",{href:!0});var Be=i(A);ve=l(Be,"T5v1.1"),Be.forEach(t),ge=l(ee," but uses the Gated-SiLU activation function instead of Gated-GELU."),ee.forEach(t),we=u(D),N=n(D,"LI",{});var ke=i(N);be=l(ke,"The authors release checkpoints of one architecture which can be seen "),P=n(ke,"A",{href:!0,rel:!0});var Xe=i(P);ye=l(Xe,"here"),Xe.forEach(t),ke.forEach(t),D.forEach(t),V=u(e),y=n(e,"P",{});var te=i(y);_e=l(te,"The original code can be found "),k=n(te,"A",{href:!0,rel:!0});var qe=i(k);Te=l(qe,"here"),qe.forEach(t),Ee=l(te,"."),te.forEach(t),Y=u(e),_=n(e,"P",{});var ae=i(_);Le=l(ae,"This model was contributed by "),S=n(ae,"A",{href:!0,rel:!0});var Ie=i(S);xe=l(Ie,"DanielHesslow"),Ie.forEach(t),Pe=l(ae,"."),ae.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(it)),h(g,"id","ul2"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#ul2"),h(m,"class","relative group"),h(w,"id","overview"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#overview"),h(v,"class","relative group"),h(L,"href","https://arxiv.org/pdf/2205.05131v1.pdf"),h(L,"rel","nofollow"),h(A,"href","t5v1.1"),h(P,"href","https://huggingface.co/google/ul2"),h(P,"rel","nofollow"),h(k,"href","https://github.com/google-research/google-research/tree/master/ul2"),h(k,"rel","nofollow"),h(S,"href","https://huggingface.co/Seledorn"),h(S,"rel","nofollow")},m(e,o){a(document.head,d),c(e,B,o),c(e,m,o),a(m,g),a(g,M),Qe(T,M,null),a(m,re),a(m,j),a(j,ne),c(e,X,o),c(e,v,o),a(v,w),a(w,z),Qe(E,z,null),a(v,ie),a(v,H),a(H,oe),c(e,q,o),c(e,b,o),a(b,se),a(b,L),a(L,le),a(b,he),c(e,I,o),c(e,U,o),a(U,ce),c(e,C,o),c(e,$,o),a($,O),a(O,fe),c(e,F,o),c(e,G,o),a(G,ue),c(e,Q,o),c(e,p,o),a(p,W),a(W,pe),a(p,de),a(p,x),a(x,me),a(x,A),a(A,ve),a(x,ge),a(p,we),a(p,N),a(N,be),a(N,P),a(P,ye),c(e,V,o),c(e,y,o),a(y,_e),a(y,k),a(k,Te),a(y,Ee),c(e,Y,o),c(e,_,o),a(_,Le),a(_,S),a(S,xe),a(_,Pe),Z=!0},p:at,i(e){Z||(Ve(T.$$.fragment,e),Ve(E.$$.fragment,e),Z=!0)},o(e){Ye(T.$$.fragment,e),Ye(E.$$.fragment,e),Z=!1},d(e){t(d),e&&t(B),e&&t(m),Ze(T),e&&t(X),e&&t(v),Ze(E),e&&t(q),e&&t(b),e&&t(I),e&&t(U),e&&t(C),e&&t($),e&&t(F),e&&t(G),e&&t(Q),e&&t(p),e&&t(V),e&&t(y),e&&t(Y),e&&t(_)}}}const it={local:"ul2",sections:[{local:"overview",title:"Overview"}],title:"UL2"};function ot(Se){return rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends Re{constructor(d){super();Ke(this,d,ot,nt,et,{})}}export{ht as default,it as metadata};
