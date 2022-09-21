import{S as xn,i as $n,s as En,e as l,k as d,w as q,t,M as wn,c as r,d as s,m as h,a as o,x as T,h as n,b as u,G as a,g as p,y as O,q as P,o as L,B as N,v as An}from"../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../chunks/Tip-hf-doc-builder.js";import{I as bn}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as Ne}from"../chunks/CodeBlock-hf-doc-builder.js";function Cn(z){let c,b,f,g,j;return{c(){c=l("p"),b=t("Refer to "),f=l("a"),g=t("Value"),j=t(" for a full list of supported data types."),this.h()},l(m){c=r(m,"P",{});var _=o(c);b=n(_,"Refer to "),f=r(_,"A",{href:!0});var $=o(f);g=n($,"Value"),$.forEach(s),j=n(_," for a full list of supported data types."),_.forEach(s),this.h()},h(){u(f,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Value")},m(m,_){p(m,c,_),a(c,b),a(c,f),a(f,g),a(c,j)},d(m){m&&s(c)}}}function kn(z){let c,b,f,g,j;return{c(){c=l("p"),b=t("See the "),f=l("a"),g=t("flatten"),j=t(" section to learn how you can extract the nested subfields as their own independent columns."),this.h()},l(m){c=r(m,"P",{});var _=o(c);b=n(_,"See the "),f=r(_,"A",{href:!0});var $=o(f);g=n($,"flatten"),$.forEach(s),j=n(_," section to learn how you can extract the nested subfields as their own independent columns."),_.forEach(s),this.h()},h(){u(f,"href","./process#flatten")},m(m,_){p(m,c,_),a(c,b),a(c,f),a(f,g),a(c,j)},d(m){m&&s(c)}}}function Dn(z){let c,b,f,g,j,m,_,$;return{c(){c=l("p"),b=t("Index into an audio dataset using the row index first and then the "),f=l("code"),g=t("audio"),j=t(" column - "),m=l("code"),_=t('dataset[0]["audio"]'),$=t(" - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset.")},l(U){c=r(U,"P",{});var A=o(c);b=n(A,"Index into an audio dataset using the row index first and then the "),f=r(A,"CODE",{});var x=o(f);g=n(x,"audio"),x.forEach(s),j=n(A," column - "),m=r(A,"CODE",{});var V=o(m);_=n(V,'dataset[0]["audio"]'),V.forEach(s),$=n(A," - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset."),A.forEach(s)},m(U,A){p(U,c,A),a(c,b),a(c,f),a(f,g),a(c,j),a(c,m),a(m,_),a(c,$)},d(U){U&&s(c)}}}function qn(z){let c,b,f,g,j,m,_,$,U,A,x,V,Ua,Va,de,Wa,Ra,he,Ma,za,fe,Ja,Ya,ia,S,Ga,ue,Ba,Ha,Se,Qa,Ka,pa,me,Xa,ca,te,da,J,Za,_e,es,as,ha,Y,W,ss,Ie,ts,ns,Fe,ls,rs,os,D,is,Ue,ps,cs,Ve,ds,hs,We,fs,us,fa,C,ms,Re,_s,gs,Me,vs,ys,ze,js,bs,ua,G,ma,v,xs,ge,$s,Es,Je,ws,As,Ye,Cs,ks,Ge,Ds,qs,ve,Ts,Os,ye,Ps,Ls,_a,B,Ns,je,Ss,Is,ga,ne,va,y,Fs,Be,Us,Vs,be,Ws,Rs,He,Ms,zs,Qe,Js,Ys,Ke,Gs,Bs,Xe,Hs,Qs,ya,H,ja,I,Ks,xe,Xs,Zs,$e,et,at,ba,le,xa,Ee,st,$a,re,Ea,R,Q,Ze,oe,tt,ea,nt,wa,K,lt,we,rt,ot,Aa,F,Ae,aa,it,pt,ct,Ce,sa,dt,ht,ft,ke,ta,ut,mt,Ca,X,_t,De,gt,vt,ka,ie,Da,Z,qa,k,yt,na,jt,bt,qe,xt,$t,la,Et,wt,Ta,pe,Oa;return m=new bn({}),te=new Ne({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),G=new Dt({props:{$$slots:{default:[Cn]},$$scope:{ctx:z}}}),ne=new Ne({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;answers&#x27;</span>: <span class="hljs-type">Sequence</span>(feature={<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;answer_start&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, length=-<span class="hljs-number">1</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;context&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;id&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;question&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;title&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}`}}),H=new Dt({props:{$$slots:{default:[kn]},$$scope:{ctx:z}}}),le=new Ne({props:{code:"features = Features({'a': Array2D(shape=(1, 3), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array2D(shape=(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),re=new Ne({props:{code:"features = Features({'a': Array3D(shape=(None, 5, 2), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array3D(shape=(<span class="hljs-literal">None</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),oe=new bn({}),ie=new Ne({props:{code:`from datasets import load_dataset, Audio

dataset = load_dataset("PolyAI/minds14", "en-US", split="train")
dataset[0]["audio"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.00024414</span>, -<span class="hljs-number">0.00024414</span>, ..., -<span class="hljs-number">0.00024414</span>,
         <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        ], dtype=float32),
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>}`}}),Z=new Dt({props:{warning:!0,$$slots:{default:[Dn]},$$scope:{ctx:z}}}),pe=new Ne({props:{code:`dataset = load_dataset("PolyAI/minds14", "en-US", split="train").cast_column("audio", Audio(decode=False))
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>).cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(decode=<span class="hljs-literal">False</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;bytes&#x27;</span>: <span class="hljs-literal">None</span>,
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>},
 <span class="hljs-string">&#x27;english_transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>,
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">11</span>,
 <span class="hljs-string">&#x27;lang_id&#x27;</span>: <span class="hljs-number">4</span>,
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>}`}}),{c(){c=l("meta"),b=d(),f=l("h1"),g=l("a"),j=l("span"),q(m.$$.fragment),_=d(),$=l("span"),U=t("Dataset features"),A=d(),x=l("p"),V=l("a"),Ua=t("Features"),Va=t(" defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),de=l("a"),Wa=t("Features"),Ra=t(" contains high-level information about everything from the column names and types, to the "),he=l("a"),Ma=t("ClassLabel"),za=t(". You can think of "),fe=l("a"),Ja=t("Features"),Ya=t(" as the backbone of a dataset."),ia=d(),S=l("p"),Ga=t("The "),ue=l("a"),Ba=t("Features"),Ha=t(" format is simple: "),Se=l("code"),Qa=t("dict[column_name, column_type]"),Ka=t(". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),pa=d(),me=l("p"),Xa=t("Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),ca=d(),q(te.$$.fragment),da=d(),J=l("p"),Za=t("The "),_e=l("a"),es=t("Value"),as=t(" feature tells \u{1F917} Datasets:"),ha=d(),Y=l("ul"),W=l("li"),ss=t("The "),Ie=l("code"),ts=t("idx"),ns=t(" data type is "),Fe=l("code"),ls=t("int32"),rs=t("."),os=d(),D=l("li"),is=t("The "),Ue=l("code"),ps=t("sentence1"),cs=t(" and "),Ve=l("code"),ds=t("sentence2"),hs=t(" data types are "),We=l("code"),fs=t("string"),us=t("."),fa=d(),C=l("p"),ms=t("\u{1F917} Datasets supports many other data types such as "),Re=l("code"),_s=t("bool"),gs=t(", "),Me=l("code"),vs=t("float32"),ys=t(" and "),ze=l("code"),js=t("binary"),bs=t(" to name just a few."),ua=d(),q(G.$$.fragment),ma=d(),v=l("p"),xs=t("The "),ge=l("a"),$s=t("ClassLabel"),Es=t(" feature informs \u{1F917} Datasets the "),Je=l("code"),ws=t("label"),As=t(" column contains two classes. The classes are labeled "),Ye=l("code"),Cs=t("not_equivalent"),ks=t(" and "),Ge=l("code"),Ds=t("equivalent"),qs=t(". Labels are stored as integers in the dataset. When you retrieve the labels, "),ve=l("a"),Ts=t("ClassLabel.int2str()"),Os=t(" and "),ye=l("a"),Ps=t("ClassLabel.str2int()"),Ls=t(" carries out the conversion from integer value to label name, and vice versa."),_a=d(),B=l("p"),Ns=t("If your data type contains a list of objects, then you want to use the "),je=l("a"),Ss=t("Sequence"),Is=t(" feature. Remember the SQuAD dataset?"),ga=d(),q(ne.$$.fragment),va=d(),y=l("p"),Fs=t("The "),Be=l("code"),Us=t("answers"),Vs=t(" field is constructed using the "),be=l("a"),Ws=t("Sequence"),Rs=t(" feature because it contains two subfields, "),He=l("code"),Ms=t("text"),zs=t(" and "),Qe=l("code"),Js=t("answer_start"),Ys=t(", which are lists of "),Ke=l("code"),Gs=t("string"),Bs=t(" and "),Xe=l("code"),Hs=t("int32"),Qs=t(", respectively."),ya=d(),q(H.$$.fragment),ja=d(),I=l("p"),Ks=t("The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),xe=l("a"),Xs=t("Array2D"),Zs=t(", and even arrays with five dimensions using "),$e=l("a"),et=t("Array5D"),at=t("."),ba=d(),q(le.$$.fragment),xa=d(),Ee=l("p"),st=t("The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),$a=d(),q(re.$$.fragment),Ea=d(),R=l("h1"),Q=l("a"),Ze=l("span"),q(oe.$$.fragment),tt=d(),ea=l("span"),nt=t("The Audio type"),wa=d(),K=l("p"),lt=t("Audio datasets have a column with type "),we=l("a"),rt=t("Audio"),ot=t(", which contains three important fields:"),Aa=d(),F=l("ul"),Ae=l("li"),aa=l("code"),it=t("array"),pt=t(": the decoded audio data represented as a 1-dimensional array."),ct=d(),Ce=l("li"),sa=l("code"),dt=t("path"),ht=t(": the path to the downloaded audio file."),ft=d(),ke=l("li"),ta=l("code"),ut=t("sampling_rate"),mt=t(": the sampling rate of the audio data."),Ca=d(),X=l("p"),_t=t("When you load an audio dataset and call the audio column, the "),De=l("a"),gt=t("Audio"),vt=t(" feature automatically decodes and resamples the audio file:"),ka=d(),q(ie.$$.fragment),Da=d(),q(Z.$$.fragment),qa=d(),k=l("p"),yt=t("With "),na=l("code"),jt=t("decode=False"),bt=t(", the "),qe=l("a"),xt=t("Audio"),$t=t(" type simply gives you the path or the bytes of the audio file, without decoding it into an "),la=l("code"),Et=t("array"),wt=t(","),Ta=d(),q(pe.$$.fragment),this.h()},l(e){const i=wn('[data-svelte="svelte-1phssyn"]',document.head);c=r(i,"META",{name:!0,content:!0}),i.forEach(s),b=h(e),f=r(e,"H1",{class:!0});var ce=o(f);g=r(ce,"A",{id:!0,class:!0,href:!0});var ra=o(g);j=r(ra,"SPAN",{});var oa=o(j);T(m.$$.fragment,oa),oa.forEach(s),ra.forEach(s),_=h(ce),$=r(ce,"SPAN",{});var qt=o($);U=n(qt,"Dataset features"),qt.forEach(s),ce.forEach(s),A=h(e),x=r(e,"P",{});var M=o(x);V=r(M,"A",{href:!0});var Tt=o(V);Ua=n(Tt,"Features"),Tt.forEach(s),Va=n(M," defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),de=r(M,"A",{href:!0});var Ot=o(de);Wa=n(Ot,"Features"),Ot.forEach(s),Ra=n(M," contains high-level information about everything from the column names and types, to the "),he=r(M,"A",{href:!0});var Pt=o(he);Ma=n(Pt,"ClassLabel"),Pt.forEach(s),za=n(M,". You can think of "),fe=r(M,"A",{href:!0});var Lt=o(fe);Ja=n(Lt,"Features"),Lt.forEach(s),Ya=n(M," as the backbone of a dataset."),M.forEach(s),ia=h(e),S=r(e,"P",{});var Te=o(S);Ga=n(Te,"The "),ue=r(Te,"A",{href:!0});var Nt=o(ue);Ba=n(Nt,"Features"),Nt.forEach(s),Ha=n(Te," format is simple: "),Se=r(Te,"CODE",{});var St=o(Se);Qa=n(St,"dict[column_name, column_type]"),St.forEach(s),Ka=n(Te,". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),Te.forEach(s),pa=h(e),me=r(e,"P",{});var It=o(me);Xa=n(It,"Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),It.forEach(s),ca=h(e),T(te.$$.fragment,e),da=h(e),J=r(e,"P",{});var Pa=o(J);Za=n(Pa,"The "),_e=r(Pa,"A",{href:!0});var Ft=o(_e);es=n(Ft,"Value"),Ft.forEach(s),as=n(Pa," feature tells \u{1F917} Datasets:"),Pa.forEach(s),ha=h(e),Y=r(e,"UL",{});var La=o(Y);W=r(La,"LI",{});var Oe=o(W);ss=n(Oe,"The "),Ie=r(Oe,"CODE",{});var Ut=o(Ie);ts=n(Ut,"idx"),Ut.forEach(s),ns=n(Oe," data type is "),Fe=r(Oe,"CODE",{});var Vt=o(Fe);ls=n(Vt,"int32"),Vt.forEach(s),rs=n(Oe,"."),Oe.forEach(s),os=h(La),D=r(La,"LI",{});var ee=o(D);is=n(ee,"The "),Ue=r(ee,"CODE",{});var Wt=o(Ue);ps=n(Wt,"sentence1"),Wt.forEach(s),cs=n(ee," and "),Ve=r(ee,"CODE",{});var Rt=o(Ve);ds=n(Rt,"sentence2"),Rt.forEach(s),hs=n(ee," data types are "),We=r(ee,"CODE",{});var Mt=o(We);fs=n(Mt,"string"),Mt.forEach(s),us=n(ee,"."),ee.forEach(s),La.forEach(s),fa=h(e),C=r(e,"P",{});var ae=o(C);ms=n(ae,"\u{1F917} Datasets supports many other data types such as "),Re=r(ae,"CODE",{});var zt=o(Re);_s=n(zt,"bool"),zt.forEach(s),gs=n(ae,", "),Me=r(ae,"CODE",{});var Jt=o(Me);vs=n(Jt,"float32"),Jt.forEach(s),ys=n(ae," and "),ze=r(ae,"CODE",{});var Yt=o(ze);js=n(Yt,"binary"),Yt.forEach(s),bs=n(ae," to name just a few."),ae.forEach(s),ua=h(e),T(G.$$.fragment,e),ma=h(e),v=r(e,"P",{});var E=o(v);xs=n(E,"The "),ge=r(E,"A",{href:!0});var Gt=o(ge);$s=n(Gt,"ClassLabel"),Gt.forEach(s),Es=n(E," feature informs \u{1F917} Datasets the "),Je=r(E,"CODE",{});var Bt=o(Je);ws=n(Bt,"label"),Bt.forEach(s),As=n(E," column contains two classes. The classes are labeled "),Ye=r(E,"CODE",{});var Ht=o(Ye);Cs=n(Ht,"not_equivalent"),Ht.forEach(s),ks=n(E," and "),Ge=r(E,"CODE",{});var Qt=o(Ge);Ds=n(Qt,"equivalent"),Qt.forEach(s),qs=n(E,". Labels are stored as integers in the dataset. When you retrieve the labels, "),ve=r(E,"A",{href:!0});var Kt=o(ve);Ts=n(Kt,"ClassLabel.int2str()"),Kt.forEach(s),Os=n(E," and "),ye=r(E,"A",{href:!0});var Xt=o(ye);Ps=n(Xt,"ClassLabel.str2int()"),Xt.forEach(s),Ls=n(E," carries out the conversion from integer value to label name, and vice versa."),E.forEach(s),_a=h(e),B=r(e,"P",{});var Na=o(B);Ns=n(Na,"If your data type contains a list of objects, then you want to use the "),je=r(Na,"A",{href:!0});var Zt=o(je);Ss=n(Zt,"Sequence"),Zt.forEach(s),Is=n(Na," feature. Remember the SQuAD dataset?"),Na.forEach(s),ga=h(e),T(ne.$$.fragment,e),va=h(e),y=r(e,"P",{});var w=o(y);Fs=n(w,"The "),Be=r(w,"CODE",{});var en=o(Be);Us=n(en,"answers"),en.forEach(s),Vs=n(w," field is constructed using the "),be=r(w,"A",{href:!0});var an=o(be);Ws=n(an,"Sequence"),an.forEach(s),Rs=n(w," feature because it contains two subfields, "),He=r(w,"CODE",{});var sn=o(He);Ms=n(sn,"text"),sn.forEach(s),zs=n(w," and "),Qe=r(w,"CODE",{});var tn=o(Qe);Js=n(tn,"answer_start"),tn.forEach(s),Ys=n(w,", which are lists of "),Ke=r(w,"CODE",{});var nn=o(Ke);Gs=n(nn,"string"),nn.forEach(s),Bs=n(w," and "),Xe=r(w,"CODE",{});var ln=o(Xe);Hs=n(ln,"int32"),ln.forEach(s),Qs=n(w,", respectively."),w.forEach(s),ya=h(e),T(H.$$.fragment,e),ja=h(e),I=r(e,"P",{});var Pe=o(I);Ks=n(Pe,"The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),xe=r(Pe,"A",{href:!0});var rn=o(xe);Xs=n(rn,"Array2D"),rn.forEach(s),Zs=n(Pe,", and even arrays with five dimensions using "),$e=r(Pe,"A",{href:!0});var on=o($e);et=n(on,"Array5D"),on.forEach(s),at=n(Pe,"."),Pe.forEach(s),ba=h(e),T(le.$$.fragment,e),xa=h(e),Ee=r(e,"P",{});var pn=o(Ee);st=n(pn,"The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),pn.forEach(s),$a=h(e),T(re.$$.fragment,e),Ea=h(e),R=r(e,"H1",{class:!0});var Sa=o(R);Q=r(Sa,"A",{id:!0,class:!0,href:!0});var cn=o(Q);Ze=r(cn,"SPAN",{});var dn=o(Ze);T(oe.$$.fragment,dn),dn.forEach(s),cn.forEach(s),tt=h(Sa),ea=r(Sa,"SPAN",{});var hn=o(ea);nt=n(hn,"The Audio type"),hn.forEach(s),Sa.forEach(s),wa=h(e),K=r(e,"P",{});var Ia=o(K);lt=n(Ia,"Audio datasets have a column with type "),we=r(Ia,"A",{href:!0});var fn=o(we);rt=n(fn,"Audio"),fn.forEach(s),ot=n(Ia,", which contains three important fields:"),Ia.forEach(s),Aa=h(e),F=r(e,"UL",{});var Le=o(F);Ae=r(Le,"LI",{});var At=o(Ae);aa=r(At,"CODE",{});var un=o(aa);it=n(un,"array"),un.forEach(s),pt=n(At,": the decoded audio data represented as a 1-dimensional array."),At.forEach(s),ct=h(Le),Ce=r(Le,"LI",{});var Ct=o(Ce);sa=r(Ct,"CODE",{});var mn=o(sa);dt=n(mn,"path"),mn.forEach(s),ht=n(Ct,": the path to the downloaded audio file."),Ct.forEach(s),ft=h(Le),ke=r(Le,"LI",{});var kt=o(ke);ta=r(kt,"CODE",{});var _n=o(ta);ut=n(_n,"sampling_rate"),_n.forEach(s),mt=n(kt,": the sampling rate of the audio data."),kt.forEach(s),Le.forEach(s),Ca=h(e),X=r(e,"P",{});var Fa=o(X);_t=n(Fa,"When you load an audio dataset and call the audio column, the "),De=r(Fa,"A",{href:!0});var gn=o(De);gt=n(gn,"Audio"),gn.forEach(s),vt=n(Fa," feature automatically decodes and resamples the audio file:"),Fa.forEach(s),ka=h(e),T(ie.$$.fragment,e),Da=h(e),T(Z.$$.fragment,e),qa=h(e),k=r(e,"P",{});var se=o(k);yt=n(se,"With "),na=r(se,"CODE",{});var vn=o(na);jt=n(vn,"decode=False"),vn.forEach(s),bt=n(se,", the "),qe=r(se,"A",{href:!0});var yn=o(qe);xt=n(yn,"Audio"),yn.forEach(s),$t=n(se," type simply gives you the path or the bytes of the audio file, without decoding it into an "),la=r(se,"CODE",{});var jn=o(la);Et=n(jn,"array"),jn.forEach(s),wt=n(se,","),se.forEach(s),Ta=h(e),T(pe.$$.fragment,e),this.h()},h(){u(c,"name","hf:doc:metadata"),u(c,"content",JSON.stringify(Tn)),u(g,"id","dataset-features"),u(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(g,"href","#dataset-features"),u(f,"class","relative group"),u(V,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),u(de,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),u(he,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),u(fe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),u(ue,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Features"),u(_e,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Value"),u(ge,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel"),u(ve,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel.int2str"),u(ye,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.ClassLabel.str2int"),u(je,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Sequence"),u(be,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Sequence"),u(xe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Array2D"),u($e,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Array5D"),u(Q,"id","the-audio-type"),u(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Q,"href","#the-audio-type"),u(R,"class","relative group"),u(we,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Audio"),u(De,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Audio"),u(qe,"href","/docs/datasets/main/en/package_reference/main_classes#datasets.Audio")},m(e,i){a(document.head,c),p(e,b,i),p(e,f,i),a(f,g),a(g,j),O(m,j,null),a(f,_),a(f,$),a($,U),p(e,A,i),p(e,x,i),a(x,V),a(V,Ua),a(x,Va),a(x,de),a(de,Wa),a(x,Ra),a(x,he),a(he,Ma),a(x,za),a(x,fe),a(fe,Ja),a(x,Ya),p(e,ia,i),p(e,S,i),a(S,Ga),a(S,ue),a(ue,Ba),a(S,Ha),a(S,Se),a(Se,Qa),a(S,Ka),p(e,pa,i),p(e,me,i),a(me,Xa),p(e,ca,i),O(te,e,i),p(e,da,i),p(e,J,i),a(J,Za),a(J,_e),a(_e,es),a(J,as),p(e,ha,i),p(e,Y,i),a(Y,W),a(W,ss),a(W,Ie),a(Ie,ts),a(W,ns),a(W,Fe),a(Fe,ls),a(W,rs),a(Y,os),a(Y,D),a(D,is),a(D,Ue),a(Ue,ps),a(D,cs),a(D,Ve),a(Ve,ds),a(D,hs),a(D,We),a(We,fs),a(D,us),p(e,fa,i),p(e,C,i),a(C,ms),a(C,Re),a(Re,_s),a(C,gs),a(C,Me),a(Me,vs),a(C,ys),a(C,ze),a(ze,js),a(C,bs),p(e,ua,i),O(G,e,i),p(e,ma,i),p(e,v,i),a(v,xs),a(v,ge),a(ge,$s),a(v,Es),a(v,Je),a(Je,ws),a(v,As),a(v,Ye),a(Ye,Cs),a(v,ks),a(v,Ge),a(Ge,Ds),a(v,qs),a(v,ve),a(ve,Ts),a(v,Os),a(v,ye),a(ye,Ps),a(v,Ls),p(e,_a,i),p(e,B,i),a(B,Ns),a(B,je),a(je,Ss),a(B,Is),p(e,ga,i),O(ne,e,i),p(e,va,i),p(e,y,i),a(y,Fs),a(y,Be),a(Be,Us),a(y,Vs),a(y,be),a(be,Ws),a(y,Rs),a(y,He),a(He,Ms),a(y,zs),a(y,Qe),a(Qe,Js),a(y,Ys),a(y,Ke),a(Ke,Gs),a(y,Bs),a(y,Xe),a(Xe,Hs),a(y,Qs),p(e,ya,i),O(H,e,i),p(e,ja,i),p(e,I,i),a(I,Ks),a(I,xe),a(xe,Xs),a(I,Zs),a(I,$e),a($e,et),a(I,at),p(e,ba,i),O(le,e,i),p(e,xa,i),p(e,Ee,i),a(Ee,st),p(e,$a,i),O(re,e,i),p(e,Ea,i),p(e,R,i),a(R,Q),a(Q,Ze),O(oe,Ze,null),a(R,tt),a(R,ea),a(ea,nt),p(e,wa,i),p(e,K,i),a(K,lt),a(K,we),a(we,rt),a(K,ot),p(e,Aa,i),p(e,F,i),a(F,Ae),a(Ae,aa),a(aa,it),a(Ae,pt),a(F,ct),a(F,Ce),a(Ce,sa),a(sa,dt),a(Ce,ht),a(F,ft),a(F,ke),a(ke,ta),a(ta,ut),a(ke,mt),p(e,Ca,i),p(e,X,i),a(X,_t),a(X,De),a(De,gt),a(X,vt),p(e,ka,i),O(ie,e,i),p(e,Da,i),O(Z,e,i),p(e,qa,i),p(e,k,i),a(k,yt),a(k,na),a(na,jt),a(k,bt),a(k,qe),a(qe,xt),a(k,$t),a(k,la),a(la,Et),a(k,wt),p(e,Ta,i),O(pe,e,i),Oa=!0},p(e,[i]){const ce={};i&2&&(ce.$$scope={dirty:i,ctx:e}),G.$set(ce);const ra={};i&2&&(ra.$$scope={dirty:i,ctx:e}),H.$set(ra);const oa={};i&2&&(oa.$$scope={dirty:i,ctx:e}),Z.$set(oa)},i(e){Oa||(P(m.$$.fragment,e),P(te.$$.fragment,e),P(G.$$.fragment,e),P(ne.$$.fragment,e),P(H.$$.fragment,e),P(le.$$.fragment,e),P(re.$$.fragment,e),P(oe.$$.fragment,e),P(ie.$$.fragment,e),P(Z.$$.fragment,e),P(pe.$$.fragment,e),Oa=!0)},o(e){L(m.$$.fragment,e),L(te.$$.fragment,e),L(G.$$.fragment,e),L(ne.$$.fragment,e),L(H.$$.fragment,e),L(le.$$.fragment,e),L(re.$$.fragment,e),L(oe.$$.fragment,e),L(ie.$$.fragment,e),L(Z.$$.fragment,e),L(pe.$$.fragment,e),Oa=!1},d(e){s(c),e&&s(b),e&&s(f),N(m),e&&s(A),e&&s(x),e&&s(ia),e&&s(S),e&&s(pa),e&&s(me),e&&s(ca),N(te,e),e&&s(da),e&&s(J),e&&s(ha),e&&s(Y),e&&s(fa),e&&s(C),e&&s(ua),N(G,e),e&&s(ma),e&&s(v),e&&s(_a),e&&s(B),e&&s(ga),N(ne,e),e&&s(va),e&&s(y),e&&s(ya),N(H,e),e&&s(ja),e&&s(I),e&&s(ba),N(le,e),e&&s(xa),e&&s(Ee),e&&s($a),N(re,e),e&&s(Ea),e&&s(R),N(oe),e&&s(wa),e&&s(K),e&&s(Aa),e&&s(F),e&&s(Ca),e&&s(X),e&&s(ka),N(ie,e),e&&s(Da),N(Z,e),e&&s(qa),e&&s(k),e&&s(Ta),N(pe,e)}}}const Tn={local:"the-audio-type",title:"The Audio type"};function On(z){return An(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class In extends xn{constructor(c){super();$n(this,c,On,qn,En,{})}}export{In as default,Tn as metadata};
