import{S as xe,i as Pe,s as we,e as t,k as c,w as ye,t as s,M as Ae,c as r,d as a,m as f,a as i,x as Ie,h as n,b as m,G as o,g as d,y as Ce,L as $e,q as Ne,o as je,B as Le,v as Te}from"../../chunks/vendor-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Oe(de){let h,L,v,z,A,g,H,I,J,T,_,R,x,F,K,S,p,V,q,W,X,E,Y,Z,O,P,ee,M,l,C,oe,ae,$,te,re,N,se,ie,j,ne,D,k,ue,w,le,me,Q;return g=new Se({}),{c(){h=t("meta"),L=c(),v=t("h1"),z=t("a"),A=t("span"),ye(g.$$.fragment),H=c(),I=t("span"),J=s("Introdu\xE7\xE3o"),T=c(),_=t("p"),R=s("No "),x=t("a"),F=s("Cap\xEDtulo 3"),K=s(", n\xF3s estudamos como realizar o ajuste fino em um modelo para uma dada tarefa. Quando n\xF3s fazemos isso, usamos o mesmo tokenizador utilizado pelo modelo pr\xE9-treinado \u2014 mas o que podemos fazer quando queremos treinar um modelo do in\xEDcio? Nestes casos, utilizar um tokenizador que foi pr\xE9-treinado em um corpus de outro dom\xEDnio ou linguagem \xE9 tipicamente sub\xF3timo. Por exemplo, um tokenizador que \xE9 treinado em um corpus de lingua inglesa ter\xE1 um desempenho ruim em um corpus de textos em japon\xEAs, visto que o uso de espa\xE7os e pontua\xE7\xF5es \xE9 muito diferente nestes dois idiomas."),S=c(),p=t("p"),V=s("Neste cap\xEDtulo, voc\xEA aprender\xE1 como treinar um novo tokenizador em um corpus de textos, para ent\xE3o ser usado no treinamento de um modelo de linguagem. Isto tudo ser\xE1 feito com ajuda da biblioteca "),q=t("a"),W=s("\u{1F917} Tokenizers"),X=s(", que prov\xEA o tokenizador r\xE1pido na biblioteca "),E=t("a"),Y=s("\u{1F917} Transformers"),Z=s(". Daremos uma olhada a fundo sobre as funcionalidades oferecidas pela biblioteca, e explorar como os tokenizadores r\xE1pidos diferem das vers\xF5es \u201Clentas\u201D."),O=c(),P=t("p"),ee=s("Os t\xF3picos que iremos cobrir incluem:"),M=c(),l=t("ul"),C=t("li"),oe=s("Como treinar um novo tokenizador semelhante ao usado por um determinado checkpoint em um novo corpus de textos"),ae=c(),$=t("li"),te=s("Os recursos especiais dos tokenizadores r\xE1pidos"),re=c(),N=t("li"),se=s("As diferen\xE7as entre os tr\xEAs principais algoritmos de tokeniza\xE7\xE3o de subpalavras usados \u200B\u200Bno processamento de linguagem natural hoje"),ie=c(),j=t("li"),ne=s("Como construir um tokenizador do zero com a biblioteca \u{1F917} Tokenizers e trein\xE1-lo em alguns dados"),D=c(),k=t("p"),ue=s("As t\xE9cnicas introduzidas neste cap\xEDtulo ir\xE3o te preparar para a se\xE7\xE3o no "),w=t("a"),le=s("Cap\xEDtulo 7"),me=s(" onde iremos analisar a cria\xE7\xE3o de um modelo de linguagem para a linguagem Python. Primeiramente, vamos come\xE7ar analisando o que significa \u201Ctreinar\u201D um tokenizador."),this.h()},l(e){const u=Ae('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(a),L=f(e),v=r(e,"H1",{class:!0});var U=i(v);z=r(U,"A",{id:!0,class:!0,href:!0});var pe=i(z);A=r(pe,"SPAN",{});var ce=i(A);Ie(g.$$.fragment,ce),ce.forEach(a),pe.forEach(a),H=f(U),I=r(U,"SPAN",{});var fe=i(I);J=n(fe,"Introdu\xE7\xE3o"),fe.forEach(a),U.forEach(a),T=f(e),_=r(e,"P",{});var B=i(_);R=n(B,"No "),x=r(B,"A",{href:!0});var he=i(x);F=n(he,"Cap\xEDtulo 3"),he.forEach(a),K=n(B,", n\xF3s estudamos como realizar o ajuste fino em um modelo para uma dada tarefa. Quando n\xF3s fazemos isso, usamos o mesmo tokenizador utilizado pelo modelo pr\xE9-treinado \u2014 mas o que podemos fazer quando queremos treinar um modelo do in\xEDcio? Nestes casos, utilizar um tokenizador que foi pr\xE9-treinado em um corpus de outro dom\xEDnio ou linguagem \xE9 tipicamente sub\xF3timo. Por exemplo, um tokenizador que \xE9 treinado em um corpus de lingua inglesa ter\xE1 um desempenho ruim em um corpus de textos em japon\xEAs, visto que o uso de espa\xE7os e pontua\xE7\xF5es \xE9 muito diferente nestes dois idiomas."),B.forEach(a),S=f(e),p=r(e,"P",{});var y=i(p);V=n(y,"Neste cap\xEDtulo, voc\xEA aprender\xE1 como treinar um novo tokenizador em um corpus de textos, para ent\xE3o ser usado no treinamento de um modelo de linguagem. Isto tudo ser\xE1 feito com ajuda da biblioteca "),q=r(y,"A",{href:!0,rel:!0});var ve=i(q);W=n(ve,"\u{1F917} Tokenizers"),ve.forEach(a),X=n(y,", que prov\xEA o tokenizador r\xE1pido na biblioteca "),E=r(y,"A",{href:!0,rel:!0});var ze=i(E);Y=n(ze,"\u{1F917} Transformers"),ze.forEach(a),Z=n(y,". Daremos uma olhada a fundo sobre as funcionalidades oferecidas pela biblioteca, e explorar como os tokenizadores r\xE1pidos diferem das vers\xF5es \u201Clentas\u201D."),y.forEach(a),O=f(e),P=r(e,"P",{});var _e=i(P);ee=n(_e,"Os t\xF3picos que iremos cobrir incluem:"),_e.forEach(a),M=f(e),l=r(e,"UL",{});var b=i(l);C=r(b,"LI",{});var ke=i(C);oe=n(ke,"Como treinar um novo tokenizador semelhante ao usado por um determinado checkpoint em um novo corpus de textos"),ke.forEach(a),ae=f(b),$=r(b,"LI",{});var be=i($);te=n(be,"Os recursos especiais dos tokenizadores r\xE1pidos"),be.forEach(a),re=f(b),N=r(b,"LI",{});var ge=i(N);se=n(ge,"As diferen\xE7as entre os tr\xEAs principais algoritmos de tokeniza\xE7\xE3o de subpalavras usados \u200B\u200Bno processamento de linguagem natural hoje"),ge.forEach(a),ie=f(b),j=r(b,"LI",{});var qe=i(j);ne=n(qe,"Como construir um tokenizador do zero com a biblioteca \u{1F917} Tokenizers e trein\xE1-lo em alguns dados"),qe.forEach(a),b.forEach(a),D=f(e),k=r(e,"P",{});var G=i(k);ue=n(G,"As t\xE9cnicas introduzidas neste cap\xEDtulo ir\xE3o te preparar para a se\xE7\xE3o no "),w=r(G,"A",{href:!0});var Ee=i(w);le=n(Ee,"Cap\xEDtulo 7"),Ee.forEach(a),me=n(G," onde iremos analisar a cria\xE7\xE3o de um modelo de linguagem para a linguagem Python. Primeiramente, vamos come\xE7ar analisando o que significa \u201Ctreinar\u201D um tokenizador."),G.forEach(a),this.h()},h(){m(h,"name","hf:doc:metadata"),m(h,"content",JSON.stringify(Me)),m(z,"id","introduo"),m(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(z,"href","#introduo"),m(v,"class","relative group"),m(x,"href","/course/chapter3"),m(q,"href","https://github.com/huggingface/tokenizers"),m(q,"rel","nofollow"),m(E,"href","https://github.com/huggingface/transformers"),m(E,"rel","nofollow"),m(w,"href","/course/chapter7/6")},m(e,u){o(document.head,h),d(e,L,u),d(e,v,u),o(v,z),o(z,A),Ce(g,A,null),o(v,H),o(v,I),o(I,J),d(e,T,u),d(e,_,u),o(_,R),o(_,x),o(x,F),o(_,K),d(e,S,u),d(e,p,u),o(p,V),o(p,q),o(q,W),o(p,X),o(p,E),o(E,Y),o(p,Z),d(e,O,u),d(e,P,u),o(P,ee),d(e,M,u),d(e,l,u),o(l,C),o(C,oe),o(l,ae),o(l,$),o($,te),o(l,re),o(l,N),o(N,se),o(l,ie),o(l,j),o(j,ne),d(e,D,u),d(e,k,u),o(k,ue),o(k,w),o(w,le),o(k,me),Q=!0},p:$e,i(e){Q||(Ne(g.$$.fragment,e),Q=!0)},o(e){je(g.$$.fragment,e),Q=!1},d(e){a(h),e&&a(L),e&&a(v),Le(g),e&&a(T),e&&a(_),e&&a(S),e&&a(p),e&&a(O),e&&a(P),e&&a(M),e&&a(l),e&&a(D),e&&a(k)}}}const Me={local:"introduo",title:"Introdu\xE7\xE3o"};function De(de){return Te(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Be extends xe{constructor(h){super();Pe(this,h,De,Oe,we,{})}}export{Be as default,Me as metadata};
