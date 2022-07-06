import{S as Ta,i as Sa,s as qa,e as o,k as l,w as f,t as g,M as Wa,c as r,d as t,m as p,a as n,x as c,h as v,b as s,G as a,g as h,y as u,L as Ia,q as d,o as m,B as w,v as Ha}from"../../chunks/vendor-hf-doc-builder.js";import{I as $}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{Q as y}from"../../chunks/Question-hf-doc-builder.js";function Ba(Jt){let x,Ue,k,W,me,Q,yt,we,xt,Ce,de,kt,Le,b,I,ge,Y,bt,ve,zt,De,j,Oe,z,H,$e,F,_t,G,Et,ye,Pt,Nt,Me,J,Re,_,B,xe,K,At,ke,Tt,Qe,V,Ye,E,U,be,X,St,Z,qt,ze,Wt,It,je,ee,Fe,P,C,_e,te,Ht,ae,Bt,Ee,Ut,Ct,Ge,oe,Je,N,L,Pe,re,Lt,Ne,Dt,Ke,ne,Ve,A,D,Ae,ie,Ot,Te,Mt,Xe,se,Ze,T,O,Se,he,Rt,qe,Qt,et,le,tt,S,M,We,pe,Yt,Ie,jt,at,fe,ot,q,R,He,ce,Ft,Be,Gt,rt,ue,nt;return Q=new $({}),Y=new $({}),j=new y({props:{choices:[{text:"When your dataset is similar to that used by an existing pretrained model, and you want to pretrain a new model",explain:"In this case, to save time and compute resources, a better choice would be to use the same tokenizer as the pretrained model and fine-tune that model instead."},{text:"When your dataset is similar to that used by an existing pretrained model, and you want to fine-tune a new model using this pretrained model",explain:"To fine-tune a model from a pretrained model, you should always use the same tokenizer."},{text:"When your dataset is different from the one used by an existing pretrained model, and you want to pretrain a new model",explain:"Correct! In this case there's no advantage to using the same tokenizer.",correct:!0},{text:"When your dataset is different from the one used by an existing pretrained model, but you want to fine-tune a new model using this pretrained model",explain:"To fine-tune a model from a pretrained model, you should always use the same tokenizer."}]}}),F=new $({}),J=new y({props:{choices:[{text:"That's the only type the method <code>train_new_from_iterator()</code> accepts.",explain:"A list of lists of texts is a particular kind of generator of lists of texts, so the method will accept this too. Try again!"},{text:"You will avoid loading the whole dataset into memory at once.",explain:"Right! Each batch of texts will be released from memory when you iterate, and the gain will be especially visible if you use \u{1F917} Datasets to store your texts.",correct:!0},{text:"This will allow the \u{1F917} Tokenizers library to use multiprocessing.",explain:"No, it will use multiprocessing either way."},{text:"The tokenizer you train will generate better texts.",explain:"The tokenizer does not generate text -- are you confusing it with a language model?"}]}}),K=new $({}),V=new y({props:{choices:[{text:"It can process inputs faster than a slow tokenizer when you batch lots of inputs together.",explain:"Correct! Thanks to parallelism implemented in Rust, it will be faster on batches of inputs. What other benefit can you think of?",correct:!0},{text:"Fast tokenizers always tokenize faster than their slow counterparts.",explain:"A fast tokenizer can actually be slower when you only give it one or very few texts, since it can't use parallelism."},{text:"It can apply padding and truncation.",explain:"True, but slow tokenizers also do that."},{text:"It has some additional features allowing you to map tokens to the span of text that created them.",explain:"Indeed -- those are called offset mappings. That's not the only advantage, though.",correct:!0}]}}),X=new $({}),ee=new y({props:{choices:[{text:"The entities with the same label are merged into one entity.",explain:"That's oversimplifying things a little. Try again!"},{text:"There is a label for the beginning of an entity and a label for the continuation of an entity.",explain:"Correct!",correct:!0},{text:"In a given word, as long as the first token has the label of the entity, the whole word is considered labeled with that entity.",explain:"That's one strategy to handle entities. What other answers here apply?",correct:!0},{text:"When a token has the label of a given entity, any other following token with the same label is considered part of the same entity, unless it's labeled as the start of a new entity.",explain:"That's the most common way to group entities together -- it's not the only right answer, though.",correct:!0}]}}),te=new $({}),oe=new y({props:{choices:[{text:"It doesn't really, as it truncates the long context at the maximum length accepted by the model.",explain:"There is a trick you can use to handle long contexts. Do you remember what it is?"},{text:"It splits the context into several parts and averages the results obtained.",explain:"No, it wouldn't make sense to average the results, as some parts of the context won't include the answer."},{text:"It splits the context into several parts (with overlap) and finds the maximum score for an answer in each part.",explain:"That's the correct answer!",correct:!0},{text:"It splits the context into several parts (without overlap, for efficiency) and finds the maximum score for an answer in each part.",explain:"No, it includes some overlap between the parts to avoid a situation where the answer would be split across two parts."}]}}),re=new $({}),ne=new y({props:{choices:[{text:"It's any cleanup the tokenizer performs on the texts in the initial stages.",explain:"That's correct -- for instance, it might involve removing accents or whitespace, or lowercasing the inputs.",correct:!0},{text:"It's a data augmentation technique that involves making the text more normal by removing rare words.",explain:"That's incorrect! Try again."},{text:"It's the final post-processing step where the tokenizer adds the special tokens.",explain:"That stage is simply called post-processing."},{text:"It's when the embeddings are made with mean 0 and standard deviation 1, by subtracting the mean and dividing by the std.",explain:"That process is commonly called normalization when applied to pixel values in computer vision, but it's not what normalization means in NLP."}]}}),ie=new $({}),se=new y({props:{choices:[{text:"It's the step before the tokenization, where data augmentation (like random masking) is applied.",explain:"No, that step is part of the preprocessing."},{text:"It's the step before the tokenization, where the desired cleanup operations are applied to the text.",explain:"No, that's the normalization step."},{text:"It's the step before the tokenizer model is applied, to split the input into words.",explain:"That's the correct answer!",correct:!0},{text:"It's the step before the tokenizer model is applied, to split the input into tokens.",explain:"No, splitting into tokens is the job of the tokenizer model."}]}}),he=new $({}),le=new y({props:{choices:[{text:"BPE is a subword tokenization algorithm that starts with a small vocabulary and learns merge rules.",explain:"That's the case indeed!",correct:!0},{text:"BPE is a subword tokenization algorithm that starts with a big vocabulary and progressively removes tokens from it.",explain:"No, that's the approach taken by a different tokenization algorithm."},{text:"BPE tokenizers learn merge rules by merging the pair of tokens that is the most frequent.",explain:"That's correct!",correct:!0},{text:"A BPE tokenizer learns a merge rule by merging the pair of tokens that maximizes a score that privileges frequent pairs with less frequent individual parts.",explain:"No, that's the strategy applied by another tokenization algorithm."},{text:"BPE tokenizes words into subwords by splitting them into characters and then applying the merge rules.",explain:"That's correct!",correct:!0},{text:"BPE tokenizes words into subwords by finding the longest subword starting from the beginning that is in the vocabulary, then repeating the process for the rest of the text.",explain:"No, that's another tokenization algorithm's way of doing things."}]}}),pe=new $({}),fe=new y({props:{choices:[{text:"WordPiece is a subword tokenization algorithm that starts with a small vocabulary and learns merge rules.",explain:"That's the case indeed!",correct:!0},{text:"WordPiece is a subword tokenization algorithm that starts with a big vocabulary and progressively removes tokens from it.",explain:"No, that's the approach taken by a different tokenization algorithm."},{text:"WordPiece tokenizers learn merge rules by merging the pair of tokens that is the most frequent.",explain:"No, that's the strategy applied by another tokenization algorithm."},{text:"A WordPiece tokenizer learns a merge rule by merging the pair of tokens that maximizes a score that privileges frequent pairs with less frequent individual parts.",explain:"That's correct!",correct:!0},{text:"WordPiece tokenizes words into subwords by finding the most likely segmentation into tokens, according to the model.",explain:"No, that's how another tokenization algorithm works."},{text:"WordPiece tokenizes words into subwords by finding the longest subword starting from the beginning that is in the vocabulary, then repeating the process for the rest of the text.",explain:"Yes, this is how WordPiece proceeds for the encoding.",correct:!0}]}}),ce=new $({}),ue=new y({props:{choices:[{text:"Unigram is a subword tokenization algorithm that starts with a small vocabulary and learns merge rules.",explain:"No, that's the approach taken by a different tokenization algorithm."},{text:"Unigram is a subword tokenization algorithm that starts with a big vocabulary and progressively removes tokens from it.",explain:"That's correct!",correct:!0},{text:"Unigram adapts its vocabulary by minimizing a loss computed over the whole corpus.",explain:"That's correct!",correct:!0},{text:"Unigram adapts its vocabulary by keeping the most frequent subwords.",explain:"No, this incorrect."},{text:"Unigram tokenizes words into subwords by finding the most likely segmentation into tokens, according to the model.",explain:"That's correct!",correct:!0},{text:"Unigram tokenizes words into subwords by splitting them into characters, then applying the merge rules.",explain:"No, that's how another tokenization algorithm works."}]}}),{c(){x=o("meta"),Ue=l(),k=o("h1"),W=o("a"),me=o("span"),f(Q.$$.fragment),yt=l(),we=o("span"),xt=g("End-of-chapter quiz"),Ce=l(),de=o("p"),kt=g("Let\u2019s test what you learned in this chapter!"),Le=l(),b=o("h3"),I=o("a"),ge=o("span"),f(Y.$$.fragment),bt=l(),ve=o("span"),zt=g("1. When should you train a new tokenizer?"),De=l(),f(j.$$.fragment),Oe=l(),z=o("h3"),H=o("a"),$e=o("span"),f(F.$$.fragment),_t=l(),G=o("span"),Et=g("2. What is the advantage of using a generator of lists of texts compared to a list of lists of texts when using "),ye=o("code"),Pt=g("train_new_from_iterator()"),Nt=g("?"),Me=l(),f(J.$$.fragment),Re=l(),_=o("h3"),B=o("a"),xe=o("span"),f(K.$$.fragment),At=l(),ke=o("span"),Tt=g("3. What are the advantages of using a \u201Cfast\u201D tokenizer?"),Qe=l(),f(V.$$.fragment),Ye=l(),E=o("h3"),U=o("a"),be=o("span"),f(X.$$.fragment),St=l(),Z=o("span"),qt=g("4. How does the "),ze=o("code"),Wt=g("token-classification"),It=g(" pipeline handle entities that span over several tokens?"),je=l(),f(ee.$$.fragment),Fe=l(),P=o("h3"),C=o("a"),_e=o("span"),f(te.$$.fragment),Ht=l(),ae=o("span"),Bt=g("5. How does the "),Ee=o("code"),Ut=g("question-answering"),Ct=g(" pipeline handle long contexts?"),Ge=l(),f(oe.$$.fragment),Je=l(),N=o("h3"),L=o("a"),Pe=o("span"),f(re.$$.fragment),Lt=l(),Ne=o("span"),Dt=g("6. What is normalization?"),Ke=l(),f(ne.$$.fragment),Ve=l(),A=o("h3"),D=o("a"),Ae=o("span"),f(ie.$$.fragment),Ot=l(),Te=o("span"),Mt=g("7. What is pre-tokenization for a subword tokenizer?"),Xe=l(),f(se.$$.fragment),Ze=l(),T=o("h3"),O=o("a"),Se=o("span"),f(he.$$.fragment),Rt=l(),qe=o("span"),Qt=g("8. Select the sentences that apply to the BPE model of tokenization."),et=l(),f(le.$$.fragment),tt=l(),S=o("h3"),M=o("a"),We=o("span"),f(pe.$$.fragment),Yt=l(),Ie=o("span"),jt=g("9. Select the sentences that apply to the WordPiece model of tokenization."),at=l(),f(fe.$$.fragment),ot=l(),q=o("h3"),R=o("a"),He=o("span"),f(ce.$$.fragment),Ft=l(),Be=o("span"),Gt=g("10. Select the sentences that apply to the Unigram model of tokenization."),rt=l(),f(ue.$$.fragment),this.h()},l(e){const i=Wa('[data-svelte="svelte-1phssyn"]',document.head);x=r(i,"META",{name:!0,content:!0}),i.forEach(t),Ue=p(e),k=r(e,"H1",{class:!0});var it=n(k);W=r(it,"A",{id:!0,class:!0,href:!0});var Kt=n(W);me=r(Kt,"SPAN",{});var Vt=n(me);c(Q.$$.fragment,Vt),Vt.forEach(t),Kt.forEach(t),yt=p(it),we=r(it,"SPAN",{});var Xt=n(we);xt=v(Xt,"End-of-chapter quiz"),Xt.forEach(t),it.forEach(t),Ce=p(e),de=r(e,"P",{});var Zt=n(de);kt=v(Zt,"Let\u2019s test what you learned in this chapter!"),Zt.forEach(t),Le=p(e),b=r(e,"H3",{class:!0});var st=n(b);I=r(st,"A",{id:!0,class:!0,href:!0});var ea=n(I);ge=r(ea,"SPAN",{});var ta=n(ge);c(Y.$$.fragment,ta),ta.forEach(t),ea.forEach(t),bt=p(st),ve=r(st,"SPAN",{});var aa=n(ve);zt=v(aa,"1. When should you train a new tokenizer?"),aa.forEach(t),st.forEach(t),De=p(e),c(j.$$.fragment,e),Oe=p(e),z=r(e,"H3",{class:!0});var ht=n(z);H=r(ht,"A",{id:!0,class:!0,href:!0});var oa=n(H);$e=r(oa,"SPAN",{});var ra=n($e);c(F.$$.fragment,ra),ra.forEach(t),oa.forEach(t),_t=p(ht),G=r(ht,"SPAN",{});var lt=n(G);Et=v(lt,"2. What is the advantage of using a generator of lists of texts compared to a list of lists of texts when using "),ye=r(lt,"CODE",{});var na=n(ye);Pt=v(na,"train_new_from_iterator()"),na.forEach(t),Nt=v(lt,"?"),lt.forEach(t),ht.forEach(t),Me=p(e),c(J.$$.fragment,e),Re=p(e),_=r(e,"H3",{class:!0});var pt=n(_);B=r(pt,"A",{id:!0,class:!0,href:!0});var ia=n(B);xe=r(ia,"SPAN",{});var sa=n(xe);c(K.$$.fragment,sa),sa.forEach(t),ia.forEach(t),At=p(pt),ke=r(pt,"SPAN",{});var ha=n(ke);Tt=v(ha,"3. What are the advantages of using a \u201Cfast\u201D tokenizer?"),ha.forEach(t),pt.forEach(t),Qe=p(e),c(V.$$.fragment,e),Ye=p(e),E=r(e,"H3",{class:!0});var ft=n(E);U=r(ft,"A",{id:!0,class:!0,href:!0});var la=n(U);be=r(la,"SPAN",{});var pa=n(be);c(X.$$.fragment,pa),pa.forEach(t),la.forEach(t),St=p(ft),Z=r(ft,"SPAN",{});var ct=n(Z);qt=v(ct,"4. How does the "),ze=r(ct,"CODE",{});var fa=n(ze);Wt=v(fa,"token-classification"),fa.forEach(t),It=v(ct," pipeline handle entities that span over several tokens?"),ct.forEach(t),ft.forEach(t),je=p(e),c(ee.$$.fragment,e),Fe=p(e),P=r(e,"H3",{class:!0});var ut=n(P);C=r(ut,"A",{id:!0,class:!0,href:!0});var ca=n(C);_e=r(ca,"SPAN",{});var ua=n(_e);c(te.$$.fragment,ua),ua.forEach(t),ca.forEach(t),Ht=p(ut),ae=r(ut,"SPAN",{});var dt=n(ae);Bt=v(dt,"5. How does the "),Ee=r(dt,"CODE",{});var da=n(Ee);Ut=v(da,"question-answering"),da.forEach(t),Ct=v(dt," pipeline handle long contexts?"),dt.forEach(t),ut.forEach(t),Ge=p(e),c(oe.$$.fragment,e),Je=p(e),N=r(e,"H3",{class:!0});var mt=n(N);L=r(mt,"A",{id:!0,class:!0,href:!0});var ma=n(L);Pe=r(ma,"SPAN",{});var wa=n(Pe);c(re.$$.fragment,wa),wa.forEach(t),ma.forEach(t),Lt=p(mt),Ne=r(mt,"SPAN",{});var ga=n(Ne);Dt=v(ga,"6. What is normalization?"),ga.forEach(t),mt.forEach(t),Ke=p(e),c(ne.$$.fragment,e),Ve=p(e),A=r(e,"H3",{class:!0});var wt=n(A);D=r(wt,"A",{id:!0,class:!0,href:!0});var va=n(D);Ae=r(va,"SPAN",{});var $a=n(Ae);c(ie.$$.fragment,$a),$a.forEach(t),va.forEach(t),Ot=p(wt),Te=r(wt,"SPAN",{});var ya=n(Te);Mt=v(ya,"7. What is pre-tokenization for a subword tokenizer?"),ya.forEach(t),wt.forEach(t),Xe=p(e),c(se.$$.fragment,e),Ze=p(e),T=r(e,"H3",{class:!0});var gt=n(T);O=r(gt,"A",{id:!0,class:!0,href:!0});var xa=n(O);Se=r(xa,"SPAN",{});var ka=n(Se);c(he.$$.fragment,ka),ka.forEach(t),xa.forEach(t),Rt=p(gt),qe=r(gt,"SPAN",{});var ba=n(qe);Qt=v(ba,"8. Select the sentences that apply to the BPE model of tokenization."),ba.forEach(t),gt.forEach(t),et=p(e),c(le.$$.fragment,e),tt=p(e),S=r(e,"H3",{class:!0});var vt=n(S);M=r(vt,"A",{id:!0,class:!0,href:!0});var za=n(M);We=r(za,"SPAN",{});var _a=n(We);c(pe.$$.fragment,_a),_a.forEach(t),za.forEach(t),Yt=p(vt),Ie=r(vt,"SPAN",{});var Ea=n(Ie);jt=v(Ea,"9. Select the sentences that apply to the WordPiece model of tokenization."),Ea.forEach(t),vt.forEach(t),at=p(e),c(fe.$$.fragment,e),ot=p(e),q=r(e,"H3",{class:!0});var $t=n(q);R=r($t,"A",{id:!0,class:!0,href:!0});var Pa=n(R);He=r(Pa,"SPAN",{});var Na=n(He);c(ce.$$.fragment,Na),Na.forEach(t),Pa.forEach(t),Ft=p($t),Be=r($t,"SPAN",{});var Aa=n(Be);Gt=v(Aa,"10. Select the sentences that apply to the Unigram model of tokenization."),Aa.forEach(t),$t.forEach(t),rt=p(e),c(ue.$$.fragment,e),this.h()},h(){s(x,"name","hf:doc:metadata"),s(x,"content",JSON.stringify(Ua)),s(W,"id","endofchapter-quiz"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#endofchapter-quiz"),s(k,"class","relative group"),s(I,"id","1.-when-should-you-train-a-new-tokenizer?"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#1.-when-should-you-train-a-new-tokenizer?"),s(b,"class","relative group"),s(H,"id","2.-what-is-the-advantage-of-using-a-generator-of-lists-of-texts-compared-to-a-list-of-lists-of-texts-when-using-<code>train_new_from_iterator()</code>?"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#2.-what-is-the-advantage-of-using-a-generator-of-lists-of-texts-compared-to-a-list-of-lists-of-texts-when-using-<code>train_new_from_iterator()</code>?"),s(z,"class","relative group"),s(B,"id","3.-what-are-the-advantages-of-using-a-\u201Cfast\u201D-tokenizer?"),s(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(B,"href","#3.-what-are-the-advantages-of-using-a-\u201Cfast\u201D-tokenizer?"),s(_,"class","relative group"),s(U,"id","4.-how-does-the-<code>token-classification</code>-pipeline-handle-entities-that-span-over-several-tokens?"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#4.-how-does-the-<code>token-classification</code>-pipeline-handle-entities-that-span-over-several-tokens?"),s(E,"class","relative group"),s(C,"id","5.-how-does-the-<code>question-answering</code>-pipeline-handle-long-contexts?"),s(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(C,"href","#5.-how-does-the-<code>question-answering</code>-pipeline-handle-long-contexts?"),s(P,"class","relative group"),s(L,"id","6.-what-is-normalization?"),s(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(L,"href","#6.-what-is-normalization?"),s(N,"class","relative group"),s(D,"id","7.-what-is-pre-tokenization-for-a-subword-tokenizer?"),s(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(D,"href","#7.-what-is-pre-tokenization-for-a-subword-tokenizer?"),s(A,"class","relative group"),s(O,"id","8.-select-the-sentences-that-apply-to-the-bpe-model-of-tokenization."),s(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(O,"href","#8.-select-the-sentences-that-apply-to-the-bpe-model-of-tokenization."),s(T,"class","relative group"),s(M,"id","9.-select-the-sentences-that-apply-to-the-wordpiece-model-of-tokenization."),s(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(M,"href","#9.-select-the-sentences-that-apply-to-the-wordpiece-model-of-tokenization."),s(S,"class","relative group"),s(R,"id","10.-select-the-sentences-that-apply-to-the-unigram-model-of-tokenization."),s(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(R,"href","#10.-select-the-sentences-that-apply-to-the-unigram-model-of-tokenization."),s(q,"class","relative group")},m(e,i){a(document.head,x),h(e,Ue,i),h(e,k,i),a(k,W),a(W,me),u(Q,me,null),a(k,yt),a(k,we),a(we,xt),h(e,Ce,i),h(e,de,i),a(de,kt),h(e,Le,i),h(e,b,i),a(b,I),a(I,ge),u(Y,ge,null),a(b,bt),a(b,ve),a(ve,zt),h(e,De,i),u(j,e,i),h(e,Oe,i),h(e,z,i),a(z,H),a(H,$e),u(F,$e,null),a(z,_t),a(z,G),a(G,Et),a(G,ye),a(ye,Pt),a(G,Nt),h(e,Me,i),u(J,e,i),h(e,Re,i),h(e,_,i),a(_,B),a(B,xe),u(K,xe,null),a(_,At),a(_,ke),a(ke,Tt),h(e,Qe,i),u(V,e,i),h(e,Ye,i),h(e,E,i),a(E,U),a(U,be),u(X,be,null),a(E,St),a(E,Z),a(Z,qt),a(Z,ze),a(ze,Wt),a(Z,It),h(e,je,i),u(ee,e,i),h(e,Fe,i),h(e,P,i),a(P,C),a(C,_e),u(te,_e,null),a(P,Ht),a(P,ae),a(ae,Bt),a(ae,Ee),a(Ee,Ut),a(ae,Ct),h(e,Ge,i),u(oe,e,i),h(e,Je,i),h(e,N,i),a(N,L),a(L,Pe),u(re,Pe,null),a(N,Lt),a(N,Ne),a(Ne,Dt),h(e,Ke,i),u(ne,e,i),h(e,Ve,i),h(e,A,i),a(A,D),a(D,Ae),u(ie,Ae,null),a(A,Ot),a(A,Te),a(Te,Mt),h(e,Xe,i),u(se,e,i),h(e,Ze,i),h(e,T,i),a(T,O),a(O,Se),u(he,Se,null),a(T,Rt),a(T,qe),a(qe,Qt),h(e,et,i),u(le,e,i),h(e,tt,i),h(e,S,i),a(S,M),a(M,We),u(pe,We,null),a(S,Yt),a(S,Ie),a(Ie,jt),h(e,at,i),u(fe,e,i),h(e,ot,i),h(e,q,i),a(q,R),a(R,He),u(ce,He,null),a(q,Ft),a(q,Be),a(Be,Gt),h(e,rt,i),u(ue,e,i),nt=!0},p:Ia,i(e){nt||(d(Q.$$.fragment,e),d(Y.$$.fragment,e),d(j.$$.fragment,e),d(F.$$.fragment,e),d(J.$$.fragment,e),d(K.$$.fragment,e),d(V.$$.fragment,e),d(X.$$.fragment,e),d(ee.$$.fragment,e),d(te.$$.fragment,e),d(oe.$$.fragment,e),d(re.$$.fragment,e),d(ne.$$.fragment,e),d(ie.$$.fragment,e),d(se.$$.fragment,e),d(he.$$.fragment,e),d(le.$$.fragment,e),d(pe.$$.fragment,e),d(fe.$$.fragment,e),d(ce.$$.fragment,e),d(ue.$$.fragment,e),nt=!0)},o(e){m(Q.$$.fragment,e),m(Y.$$.fragment,e),m(j.$$.fragment,e),m(F.$$.fragment,e),m(J.$$.fragment,e),m(K.$$.fragment,e),m(V.$$.fragment,e),m(X.$$.fragment,e),m(ee.$$.fragment,e),m(te.$$.fragment,e),m(oe.$$.fragment,e),m(re.$$.fragment,e),m(ne.$$.fragment,e),m(ie.$$.fragment,e),m(se.$$.fragment,e),m(he.$$.fragment,e),m(le.$$.fragment,e),m(pe.$$.fragment,e),m(fe.$$.fragment,e),m(ce.$$.fragment,e),m(ue.$$.fragment,e),nt=!1},d(e){t(x),e&&t(Ue),e&&t(k),w(Q),e&&t(Ce),e&&t(de),e&&t(Le),e&&t(b),w(Y),e&&t(De),w(j,e),e&&t(Oe),e&&t(z),w(F),e&&t(Me),w(J,e),e&&t(Re),e&&t(_),w(K),e&&t(Qe),w(V,e),e&&t(Ye),e&&t(E),w(X),e&&t(je),w(ee,e),e&&t(Fe),e&&t(P),w(te),e&&t(Ge),w(oe,e),e&&t(Je),e&&t(N),w(re),e&&t(Ke),w(ne,e),e&&t(Ve),e&&t(A),w(ie),e&&t(Xe),w(se,e),e&&t(Ze),e&&t(T),w(he),e&&t(et),w(le,e),e&&t(tt),e&&t(S),w(pe),e&&t(at),w(fe,e),e&&t(ot),e&&t(q),w(ce),e&&t(rt),w(ue,e)}}}const Ua={local:"endofchapter-quiz",title:"End-of-chapter quiz"};function Ca(Jt){return Ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ma extends Ta{constructor(x){super();Sa(this,x,Ca,Ba,qa,{})}}export{Ma as default,Ua as metadata};
