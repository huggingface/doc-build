import{S as zt,i as xt,s as Dt,e as s,k as h,w as b,t as g,M as Tt,c as n,d as t,m,a as i,x as y,h as _,b as d,G as a,g as u,y as P,q as E,o as z,B as x,v as Ct,L as At}from"../../chunks/vendor-hf-doc-builder.js";import{D as ge}from"../../chunks/Docstring-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{T as Bt,M as ot}from"../../chunks/TokenizersLanguageContent-hf-doc-builder.js";function Mt(A){let o,c,r,l,$,v,D,T,C,B,M,W,p,w,k,S,J,N,Le,le,We,_e,L,K,Ne,ie,Ie,He,I,Re,re,Ve,qe,oe,Ue,Ge,ke,H,O,ce,Q,Je,de,Oe,we,R,X,je,pe,Fe,be,V,j,fe,Y,Ke,he,Qe,ye,q,Z,Xe,me,Ye,Pe,U,F,ue,ee,Ze,$e,et,Ee,G,te,tt,ve,rt,ze;return l=new ne({}),B=new ge({props:{name:"class tokenizers.decoders.BPEDecoder",anchor:"tokenizers.decoders.BPEDecoder",parameters:[{name:"suffix",val:" = '</w>'"}],parametersDescription:[{anchor:"tokenizers.decoders.BPEDecoder.suffix",description:`<strong>suffix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;/w&gt;</code>) &#x2014;
The suffix that was used to caracterize an end-of-word. This suffix will
be replaced by whitespaces during the decoding`,name:"suffix"}]}}),N=new ne({}),K=new ge({props:{name:"class tokenizers.decoders.ByteLevel",anchor:"tokenizers.decoders.ByteLevel",parameters:[]}}),Q=new ne({}),X=new ge({props:{name:"class tokenizers.decoders.CTC",anchor:"tokenizers.decoders.CTC",parameters:[{name:"pad_token",val:" = '<pad>'"},{name:"word_delimiter_token",val:" = '|'"},{name:"cleanup",val:" = True"}],parametersDescription:[{anchor:"tokenizers.decoders.CTC.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;pad&gt;</code>) &#x2014;
The pad token used by CTC to delimit a new token.`,name:"pad_token"},{anchor:"tokenizers.decoders.CTC.word_delimiter_token",description:`<strong>word_delimiter_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>|</code>) &#x2014;
The word delimiter token. It will be replaced by a <space></space>`,name:"word_delimiter_token"},{anchor:"tokenizers.decoders.CTC.cleanup",description:`<strong>cleanup</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to cleanup some tokenization artifacts.
Mainly spaces before punctuation, and some abbreviated english forms.`,name:"cleanup"}]}}),Y=new ne({}),Z=new ge({props:{name:"class tokenizers.decoders.Metaspace",anchor:"tokenizers.decoders.Metaspace",parameters:"",parametersDescription:[{anchor:"tokenizers.decoders.Metaspace.replacement",description:`<strong>replacement</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&#x2581;</code>) &#x2014;
The replacement character. Must be exactly one character. By default we
use the <em>&#x2581;</em> (U+2581) meta symbol (Same as in SentencePiece).`,name:"replacement"},{anchor:"tokenizers.decoders.Metaspace.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a space to the first word if there isn&#x2019;t already one. This
lets us treat <em>hello</em> exactly like <em>say hello</em>.`,name:"add_prefix_space"}]}}),ee=new ne({}),te=new ge({props:{name:"class tokenizers.decoders.WordPiece",anchor:"tokenizers.decoders.WordPiece",parameters:[{name:"prefix",val:" = '##'"},{name:"cleanup",val:" = True"}],parametersDescription:[{anchor:"tokenizers.decoders.WordPiece.prefix",description:`<strong>prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>##</code>) &#x2014;
The prefix to use for subwords that are not a beginning-of-word`,name:"prefix"},{anchor:"tokenizers.decoders.WordPiece.cleanup",description:`<strong>cleanup</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to cleanup some tokenization artifacts. Mainly spaces before punctuation,
and some abbreviated english forms.`,name:"cleanup"}]}}),{c(){o=s("h2"),c=s("a"),r=s("span"),b(l.$$.fragment),$=h(),v=s("span"),D=g("BPEDecoder"),T=h(),C=s("div"),b(B.$$.fragment),M=h(),W=s("p"),p=g("BPEDecoder Decoder"),w=h(),k=s("h2"),S=s("a"),J=s("span"),b(N.$$.fragment),Le=h(),le=s("span"),We=g("ByteLevel"),_e=h(),L=s("div"),b(K.$$.fragment),Ne=h(),ie=s("p"),Ie=g("ByteLevel Decoder"),He=h(),I=s("p"),Re=g("This decoder is to be used in tandem with the "),re=s("a"),Ve=g("ByteLevel"),qe=h(),oe=s("a"),Ue=g("PreTokenizer"),Ge=g("."),ke=h(),H=s("h2"),O=s("a"),ce=s("span"),b(Q.$$.fragment),Je=h(),de=s("span"),Oe=g("CTC"),we=h(),R=s("div"),b(X.$$.fragment),je=h(),pe=s("p"),Fe=g("CTC Decoder"),be=h(),V=s("h2"),j=s("a"),fe=s("span"),b(Y.$$.fragment),Ke=h(),he=s("span"),Qe=g("Metaspace"),ye=h(),q=s("div"),b(Z.$$.fragment),Xe=h(),me=s("p"),Ye=g("Metaspace Decoder"),Pe=h(),U=s("h2"),F=s("a"),ue=s("span"),b(ee.$$.fragment),Ze=h(),$e=s("span"),et=g("WordPiece"),Ee=h(),G=s("div"),b(te.$$.fragment),tt=h(),ve=s("p"),rt=g("WordPiece Decoder"),this.h()},l(e){o=n(e,"H2",{class:!0});var f=i(o);c=n(f,"A",{id:!0,class:!0,href:!0});var at=i(c);r=n(at,"SPAN",{});var st=i(r);y(l.$$.fragment,st),st.forEach(t),at.forEach(t),$=m(f),v=n(f,"SPAN",{});var nt=i(v);D=_(nt,"BPEDecoder"),nt.forEach(t),f.forEach(t),T=m(e),C=n(e,"DIV",{class:!0});var xe=i(C);y(B.$$.fragment,xe),M=m(xe),W=n(xe,"P",{});var lt=i(W);p=_(lt,"BPEDecoder Decoder"),lt.forEach(t),xe.forEach(t),w=m(e),k=n(e,"H2",{class:!0});var De=i(k);S=n(De,"A",{id:!0,class:!0,href:!0});var it=i(S);J=n(it,"SPAN",{});var ct=i(J);y(N.$$.fragment,ct),ct.forEach(t),it.forEach(t),Le=m(De),le=n(De,"SPAN",{});var dt=i(le);We=_(dt,"ByteLevel"),dt.forEach(t),De.forEach(t),_e=m(e),L=n(e,"DIV",{class:!0});var ae=i(L);y(K.$$.fragment,ae),Ne=m(ae),ie=n(ae,"P",{});var pt=i(ie);Ie=_(pt,"ByteLevel Decoder"),pt.forEach(t),He=m(ae),I=n(ae,"P",{});var se=i(I);Re=_(se,"This decoder is to be used in tandem with the "),re=n(se,"A",{href:!0});var ft=i(re);Ve=_(ft,"ByteLevel"),ft.forEach(t),qe=m(se),oe=n(se,"A",{href:!0});var ht=i(oe);Ue=_(ht,"PreTokenizer"),ht.forEach(t),Ge=_(se,"."),se.forEach(t),ae.forEach(t),ke=m(e),H=n(e,"H2",{class:!0});var Te=i(H);O=n(Te,"A",{id:!0,class:!0,href:!0});var mt=i(O);ce=n(mt,"SPAN",{});var ut=i(ce);y(Q.$$.fragment,ut),ut.forEach(t),mt.forEach(t),Je=m(Te),de=n(Te,"SPAN",{});var $t=i(de);Oe=_($t,"CTC"),$t.forEach(t),Te.forEach(t),we=m(e),R=n(e,"DIV",{class:!0});var Ce=i(R);y(X.$$.fragment,Ce),je=m(Ce),pe=n(Ce,"P",{});var vt=i(pe);Fe=_(vt,"CTC Decoder"),vt.forEach(t),Ce.forEach(t),be=m(e),V=n(e,"H2",{class:!0});var Ae=i(V);j=n(Ae,"A",{id:!0,class:!0,href:!0});var gt=i(j);fe=n(gt,"SPAN",{});var _t=i(fe);y(Y.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Ke=m(Ae),he=n(Ae,"SPAN",{});var kt=i(he);Qe=_(kt,"Metaspace"),kt.forEach(t),Ae.forEach(t),ye=m(e),q=n(e,"DIV",{class:!0});var Be=i(q);y(Z.$$.fragment,Be),Xe=m(Be),me=n(Be,"P",{});var wt=i(me);Ye=_(wt,"Metaspace Decoder"),wt.forEach(t),Be.forEach(t),Pe=m(e),U=n(e,"H2",{class:!0});var Me=i(U);F=n(Me,"A",{id:!0,class:!0,href:!0});var bt=i(F);ue=n(bt,"SPAN",{});var yt=i(ue);y(ee.$$.fragment,yt),yt.forEach(t),bt.forEach(t),Ze=m(Me),$e=n(Me,"SPAN",{});var Pt=i($e);et=_(Pt,"WordPiece"),Pt.forEach(t),Me.forEach(t),Ee=m(e),G=n(e,"DIV",{class:!0});var Se=i(G);y(te.$$.fragment,Se),tt=m(Se),ve=n(Se,"P",{});var Et=i(ve);rt=_(Et,"WordPiece Decoder"),Et.forEach(t),Se.forEach(t),this.h()},h(){d(c,"id","tokenizers.decoders.BPEDecoder"),d(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(c,"href","#tokenizers.decoders.BPEDecoder"),d(o,"class","relative group"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(S,"id","tokenizers.decoders.ByteLevel"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#tokenizers.decoders.ByteLevel"),d(k,"class","relative group"),d(re,"href","/docs/tokenizers/v0.13.0/en/api/pre-tokenizers#tokenizers.pre_tokenizers.ByteLevel"),d(oe,"href","/docs/tokenizers/v0.13.0/en/api/pre-tokenizers#tokenizers.pre_tokenizers.PreTokenizer"),d(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(O,"id","tokenizers.decoders.CTC"),d(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(O,"href","#tokenizers.decoders.CTC"),d(H,"class","relative group"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"id","tokenizers.decoders.Metaspace"),d(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(j,"href","#tokenizers.decoders.Metaspace"),d(V,"class","relative group"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"id","tokenizers.decoders.WordPiece"),d(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(F,"href","#tokenizers.decoders.WordPiece"),d(U,"class","relative group"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,f){u(e,o,f),a(o,c),a(c,r),P(l,r,null),a(o,$),a(o,v),a(v,D),u(e,T,f),u(e,C,f),P(B,C,null),a(C,M),a(C,W),a(W,p),u(e,w,f),u(e,k,f),a(k,S),a(S,J),P(N,J,null),a(k,Le),a(k,le),a(le,We),u(e,_e,f),u(e,L,f),P(K,L,null),a(L,Ne),a(L,ie),a(ie,Ie),a(L,He),a(L,I),a(I,Re),a(I,re),a(re,Ve),a(I,qe),a(I,oe),a(oe,Ue),a(I,Ge),u(e,ke,f),u(e,H,f),a(H,O),a(O,ce),P(Q,ce,null),a(H,Je),a(H,de),a(de,Oe),u(e,we,f),u(e,R,f),P(X,R,null),a(R,je),a(R,pe),a(pe,Fe),u(e,be,f),u(e,V,f),a(V,j),a(j,fe),P(Y,fe,null),a(V,Ke),a(V,he),a(he,Qe),u(e,ye,f),u(e,q,f),P(Z,q,null),a(q,Xe),a(q,me),a(me,Ye),u(e,Pe,f),u(e,U,f),a(U,F),a(F,ue),P(ee,ue,null),a(U,Ze),a(U,$e),a($e,et),u(e,Ee,f),u(e,G,f),P(te,G,null),a(G,tt),a(G,ve),a(ve,rt),ze=!0},p:At,i(e){ze||(E(l.$$.fragment,e),E(B.$$.fragment,e),E(N.$$.fragment,e),E(K.$$.fragment,e),E(Q.$$.fragment,e),E(X.$$.fragment,e),E(Y.$$.fragment,e),E(Z.$$.fragment,e),E(ee.$$.fragment,e),E(te.$$.fragment,e),ze=!0)},o(e){z(l.$$.fragment,e),z(B.$$.fragment,e),z(N.$$.fragment,e),z(K.$$.fragment,e),z(Q.$$.fragment,e),z(X.$$.fragment,e),z(Y.$$.fragment,e),z(Z.$$.fragment,e),z(ee.$$.fragment,e),z(te.$$.fragment,e),ze=!1},d(e){e&&t(o),x(l),e&&t(T),e&&t(C),x(B),e&&t(w),e&&t(k),x(N),e&&t(_e),e&&t(L),x(K),e&&t(ke),e&&t(H),x(Q),e&&t(we),e&&t(R),x(X),e&&t(be),e&&t(V),x(Y),e&&t(ye),e&&t(q),x(Z),e&&t(Pe),e&&t(U),x(ee),e&&t(Ee),e&&t(G),x(te)}}}function St(A){let o,c;return o=new ot({props:{$$slots:{default:[Mt]},$$scope:{ctx:A}}}),{c(){b(o.$$.fragment)},l(r){y(o.$$.fragment,r)},m(r,l){P(o,r,l),c=!0},p(r,l){const $={};l&2&&($.$$scope={dirty:l,ctx:r}),o.$set($)},i(r){c||(E(o.$$.fragment,r),c=!0)},o(r){z(o.$$.fragment,r),c=!1},d(r){x(o,r)}}}function Lt(A){let o,c,r,l,$;return{c(){o=s("p"),c=g("The Rust API Reference is available directly on the "),r=s("a"),l=g("Docs.rs"),$=g(" website."),this.h()},l(v){o=n(v,"P",{});var D=i(o);c=_(D,"The Rust API Reference is available directly on the "),r=n(D,"A",{href:!0,rel:!0});var T=i(r);l=_(T,"Docs.rs"),T.forEach(t),$=_(D," website."),D.forEach(t),this.h()},h(){d(r,"href","https://docs.rs/tokenizers/latest/tokenizers/"),d(r,"rel","nofollow")},m(v,D){u(v,o,D),a(o,c),a(o,r),a(r,l),a(o,$)},d(v){v&&t(o)}}}function Wt(A){let o,c;return o=new ot({props:{$$slots:{default:[Lt]},$$scope:{ctx:A}}}),{c(){b(o.$$.fragment)},l(r){y(o.$$.fragment,r)},m(r,l){P(o,r,l),c=!0},p(r,l){const $={};l&2&&($.$$scope={dirty:l,ctx:r}),o.$set($)},i(r){c||(E(o.$$.fragment,r),c=!0)},o(r){z(o.$$.fragment,r),c=!1},d(r){x(o,r)}}}function Nt(A){let o,c;return{c(){o=s("p"),c=g("The node API has not been documented yet.")},l(r){o=n(r,"P",{});var l=i(o);c=_(l,"The node API has not been documented yet."),l.forEach(t)},m(r,l){u(r,o,l),a(o,c)},d(r){r&&t(o)}}}function It(A){let o,c;return o=new ot({props:{$$slots:{default:[Nt]},$$scope:{ctx:A}}}),{c(){b(o.$$.fragment)},l(r){y(o.$$.fragment,r)},m(r,l){P(o,r,l),c=!0},p(r,l){const $={};l&2&&($.$$scope={dirty:l,ctx:r}),o.$set($)},i(r){c||(E(o.$$.fragment,r),c=!0)},o(r){z(o.$$.fragment,r),c=!1},d(r){x(o,r)}}}function Ht(A){let o,c,r,l,$,v,D,T,C,B,M,W;return v=new ne({}),M=new Bt({props:{python:!0,rust:!0,node:!0,$$slots:{node:[It],rust:[Wt],python:[St]},$$scope:{ctx:A}}}),{c(){o=s("meta"),c=h(),r=s("h1"),l=s("a"),$=s("span"),b(v.$$.fragment),D=h(),T=s("span"),C=g("Decoders"),B=h(),b(M.$$.fragment),this.h()},l(p){const w=Tt('[data-svelte="svelte-1phssyn"]',document.head);o=n(w,"META",{name:!0,content:!0}),w.forEach(t),c=m(p),r=n(p,"H1",{class:!0});var k=i(r);l=n(k,"A",{id:!0,class:!0,href:!0});var S=i(l);$=n(S,"SPAN",{});var J=i($);y(v.$$.fragment,J),J.forEach(t),S.forEach(t),D=m(k),T=n(k,"SPAN",{});var N=i(T);C=_(N,"Decoders"),N.forEach(t),k.forEach(t),B=m(p),y(M.$$.fragment,p),this.h()},h(){d(o,"name","hf:doc:metadata"),d(o,"content",JSON.stringify(Rt)),d(l,"id","decoders"),d(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(l,"href","#decoders"),d(r,"class","relative group")},m(p,w){a(document.head,o),u(p,c,w),u(p,r,w),a(r,l),a(l,$),P(v,$,null),a(r,D),a(r,T),a(T,C),u(p,B,w),P(M,p,w),W=!0},p(p,[w]){const k={};w&2&&(k.$$scope={dirty:w,ctx:p}),M.$set(k)},i(p){W||(E(v.$$.fragment,p),E(M.$$.fragment,p),W=!0)},o(p){z(v.$$.fragment,p),z(M.$$.fragment,p),W=!1},d(p){t(o),p&&t(c),p&&t(r),x(v),p&&t(B),x(M,p)}}}const Rt={local:"decoders",sections:[{local:"tokenizers.decoders.BPEDecoder",title:"BPEDecoder"},{local:"tokenizers.decoders.ByteLevel",title:"ByteLevel"},{local:"tokenizers.decoders.CTC",title:"CTC"},{local:"tokenizers.decoders.Metaspace",title:"Metaspace"},{local:"tokenizers.decoders.WordPiece",title:"WordPiece"}],title:"Decoders"};function Vt(A){return Ct(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ot extends zt{constructor(o){super();xt(this,o,Vt,Ht,Dt,{})}}export{Ot as default,Rt as metadata};
