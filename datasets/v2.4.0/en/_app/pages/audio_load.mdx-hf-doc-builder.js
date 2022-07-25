import{S as Nt,i as Ft,s as Jt,e as l,k as f,w as B,t as s,M as Mt,c as n,d as e,m,a as d,x as H,h as o,b as _,G as t,g as c,y as W,q as G,o as R,B as z,v as Bt}from"../chunks/vendor-hf-doc-builder.js";import{T as Tt}from"../chunks/Tip-hf-doc-builder.js";import{I as Lt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as _t}from"../chunks/CodeBlock-hf-doc-builder.js";function Ht(K){let r,E,u,g,y,h,b,j;return{c(){r=l("p"),E=s("To work with audio datasets, you need to have the "),u=l("code"),g=s("audio"),y=s(" dependency installed. Check out the "),h=l("a"),b=s("installation"),j=s(" guide to learn how to install it."),this.h()},l($){r=n($,"P",{});var p=d(r);E=o(p,"To work with audio datasets, you need to have the "),u=n(p,"CODE",{});var v=d(u);g=o(v,"audio"),v.forEach(e),y=o(p," dependency installed. Check out the "),h=n(p,"A",{href:!0});var C=d(h);b=o(C,"installation"),C.forEach(e),j=o(p," guide to learn how to install it."),p.forEach(e),this.h()},h(){_(h,"href","./installation#audio")},m($,p){c($,r,p),t(r,E),t(r,u),t(u,g),t(r,y),t(r,h),t(h,b),t(r,j)},d($){$&&e(r)}}}function Wt(K){let r,E,u,g,y,h,b,j;return{c(){r=l("p"),E=s("Index into an audio dataset using the row index first and then the "),u=l("code"),g=s("audio"),y=s(" column - "),h=l("code"),b=s('dataset[0]["audio"]'),j=s(" - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset.")},l($){r=n($,"P",{});var p=d(r);E=o(p,"Index into an audio dataset using the row index first and then the "),u=n(p,"CODE",{});var v=d(u);g=o(v,"audio"),v.forEach(e),y=o(p," column - "),h=n(p,"CODE",{});var C=d(h);b=o(C,'dataset[0]["audio"]'),C.forEach(e),j=o(p," - to avoid decoding and resampling all the audio files in the dataset. Otherwise, this can be a slow and time-consuming process if you have a large dataset."),p.forEach(e)},m($,p){c($,r,p),t(r,E),t(r,u),t(u,g),t(r,y),t(r,h),t(h,b),t(r,j)},d($){$&&e(r)}}}function Gt(K){let r,E,u,g,y,h,b,j,$,p,v,C,oa,Ia,Pa,_a,A,Q,la,Da,Sa,Ua,V,na,Ta,La,Na,X,da,Fa,Ja,ga,I,$a,k,Ma,ia,Ba,Ha,Y,Wa,Ga,va,T,wa,P,ya,D,Ra,L,za,Ka,ja,O,S,ra,N,Qa,ca,Va,Ea,w,Xa,pa,Ya,Za,Z,at,tt,ua,et,st,aa,ot,lt,xa,F,ba,x,nt,ha,dt,it,fa,rt,ct,ta,pt,ut,Aa,J,ka;return h=new Lt({}),I=new Tt({props:{$$slots:{default:[Ht]},$$scope:{ctx:K}}}),T=new _t({props:{code:`from datasets import load_dataset, Audio

dataset = load_dataset("PolyAI/minds14", "en-US", split="train")
dataset[0]["audio"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Audio

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.00024414</span>, -<span class="hljs-number">0.00024414</span>, ..., -<span class="hljs-number">0.00024414</span>,
         <span class="hljs-number">0.</span>        ,  <span class="hljs-number">0.</span>        ], dtype=float32),
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">8000</span>}`}}),P=new Tt({props:{warning:!0,$$slots:{default:[Wt]},$$scope:{ctx:K}}}),N=new Lt({}),F=new _t({props:{code:'audio_dataset = Dataset.from_dict({"audio": ["path/to/audio_1", "path/to/audio_2", ..., "path/to/audio_n"]}).cast_column("audio", Audio())',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>audio_dataset = Dataset.from_dict({<span class="hljs-string">&quot;audio&quot;</span>: [<span class="hljs-string">&quot;path/to/audio_1&quot;</span>, <span class="hljs-string">&quot;path/to/audio_2&quot;</span>, ..., <span class="hljs-string">&quot;path/to/audio_n&quot;</span>]}).cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio())'}}),J=new _t({props:{code:`dataset = load_dataset("PolyAI/minds14", "en-US", split="train").cast_column("audio", Audio(decode=False))
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;PolyAI/minds14&quot;</span>, <span class="hljs-string">&quot;en-US&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>).cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(decode=<span class="hljs-literal">False</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;bytes&#x27;</span>: <span class="hljs-literal">None</span>,
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>},
 <span class="hljs-string">&#x27;english_transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>,
 <span class="hljs-string">&#x27;intent_class&#x27;</span>: <span class="hljs-number">11</span>,
 <span class="hljs-string">&#x27;lang_id&#x27;</span>: <span class="hljs-number">4</span>,
 <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/f14948e0e84be638dd7943ac36518a4cf3324e8b7aa331c5ab11541518e9368c/en-US~JOINT_ACCOUNT/602ba55abb1e6d0fbce92065.wav&#x27;</span>,
 <span class="hljs-string">&#x27;transcription&#x27;</span>: <span class="hljs-string">&#x27;I would like to set up a joint account with my partner&#x27;</span>}`}}),{c(){r=l("meta"),E=f(),u=l("h1"),g=l("a"),y=l("span"),B(h.$$.fragment),b=f(),j=l("span"),$=s("Load audio data"),p=f(),v=l("p"),C=s("Audio datasets are loaded from the "),oa=l("code"),Ia=s("audio"),Pa=s(" column, which contains three important fields:"),_a=f(),A=l("ul"),Q=l("li"),la=l("code"),Da=s("array"),Sa=s(": the decoded audio data represented as a 1-dimensional array."),Ua=f(),V=l("li"),na=l("code"),Ta=s("path"),La=s(": the path to the downloaded audio file."),Na=f(),X=l("li"),da=l("code"),Fa=s("sampling_rate"),Ja=s(": the sampling rate of the audio data."),ga=f(),B(I.$$.fragment),$a=f(),k=l("p"),Ma=s("When you load an audio dataset and call the "),ia=l("code"),Ba=s("audio"),Ha=s(" column, the "),Y=l("a"),Wa=s("Audio"),Ga=s(" feature automatically decodes and resamples the audio file:"),va=f(),B(T.$$.fragment),wa=f(),B(P.$$.fragment),ya=f(),D=l("p"),Ra=s("For a guide on how to load any type of dataset, take a look at the "),L=l("a"),za=s("general loading guide"),Ka=s("."),ja=f(),O=l("h2"),S=l("a"),ra=l("span"),B(N.$$.fragment),Qa=f(),ca=l("span"),Va=s("Local files"),Ea=f(),w=l("p"),Xa=s("The "),pa=l("code"),Ya=s("path"),Za=s(" is useful for loading your own dataset. Use the "),Z=l("a"),at=s("cast_column()"),tt=s(" function to take a column of audio file paths, and decode it into "),ua=l("code"),et=s("array"),st=s("\u2019s with the "),aa=l("a"),ot=s("Audio"),lt=s(" feature:"),xa=f(),B(F.$$.fragment),ba=f(),x=l("p"),nt=s("If you only want to load the underlying path to the audio dataset without decoding the audio file into an "),ha=l("code"),dt=s("array"),it=s(", set "),fa=l("code"),rt=s("decode=False"),ct=s(" in the "),ta=l("a"),pt=s("Audio"),ut=s(" feature:"),Aa=f(),B(J.$$.fragment),this.h()},l(a){const i=Mt('[data-svelte="svelte-1phssyn"]',document.head);r=n(i,"META",{name:!0,content:!0}),i.forEach(e),E=m(a),u=n(a,"H1",{class:!0});var M=d(u);g=n(M,"A",{id:!0,class:!0,href:!0});var ma=d(g);y=n(ma,"SPAN",{});var gt=d(y);H(h.$$.fragment,gt),gt.forEach(e),ma.forEach(e),b=m(M),j=n(M,"SPAN",{});var $t=d(j);$=o($t,"Load audio data"),$t.forEach(e),M.forEach(e),p=m(a),v=n(a,"P",{});var qa=d(v);C=o(qa,"Audio datasets are loaded from the "),oa=n(qa,"CODE",{});var vt=d(oa);Ia=o(vt,"audio"),vt.forEach(e),Pa=o(qa," column, which contains three important fields:"),qa.forEach(e),_a=m(a),A=n(a,"UL",{});var ea=d(A);Q=n(ea,"LI",{});var ht=d(Q);la=n(ht,"CODE",{});var wt=d(la);Da=o(wt,"array"),wt.forEach(e),Sa=o(ht,": the decoded audio data represented as a 1-dimensional array."),ht.forEach(e),Ua=m(ea),V=n(ea,"LI",{});var ft=d(V);na=n(ft,"CODE",{});var yt=d(na);Ta=o(yt,"path"),yt.forEach(e),La=o(ft,": the path to the downloaded audio file."),ft.forEach(e),Na=m(ea),X=n(ea,"LI",{});var mt=d(X);da=n(mt,"CODE",{});var jt=d(da);Fa=o(jt,"sampling_rate"),jt.forEach(e),Ja=o(mt,": the sampling rate of the audio data."),mt.forEach(e),ea.forEach(e),ga=m(a),H(I.$$.fragment,a),$a=m(a),k=n(a,"P",{});var sa=d(k);Ma=o(sa,"When you load an audio dataset and call the "),ia=n(sa,"CODE",{});var Et=d(ia);Ba=o(Et,"audio"),Et.forEach(e),Ha=o(sa," column, the "),Y=n(sa,"A",{href:!0});var xt=d(Y);Wa=o(xt,"Audio"),xt.forEach(e),Ga=o(sa," feature automatically decodes and resamples the audio file:"),sa.forEach(e),va=m(a),H(T.$$.fragment,a),wa=m(a),H(P.$$.fragment,a),ya=m(a),D=n(a,"P",{});var Ca=d(D);Ra=o(Ca,"For a guide on how to load any type of dataset, take a look at the "),L=n(Ca,"A",{class:!0,href:!0});var bt=d(L);za=o(bt,"general loading guide"),bt.forEach(e),Ka=o(Ca,"."),Ca.forEach(e),ja=m(a),O=n(a,"H2",{class:!0});var Oa=d(O);S=n(Oa,"A",{id:!0,class:!0,href:!0});var At=d(S);ra=n(At,"SPAN",{});var kt=d(ra);H(N.$$.fragment,kt),kt.forEach(e),At.forEach(e),Qa=m(Oa),ca=n(Oa,"SPAN",{});var qt=d(ca);Va=o(qt,"Local files"),qt.forEach(e),Oa.forEach(e),Ea=m(a),w=n(a,"P",{});var q=d(w);Xa=o(q,"The "),pa=n(q,"CODE",{});var Ct=d(pa);Ya=o(Ct,"path"),Ct.forEach(e),Za=o(q," is useful for loading your own dataset. Use the "),Z=n(q,"A",{href:!0});var Ot=d(Z);at=o(Ot,"cast_column()"),Ot.forEach(e),tt=o(q," function to take a column of audio file paths, and decode it into "),ua=n(q,"CODE",{});var It=d(ua);et=o(It,"array"),It.forEach(e),st=o(q,"\u2019s with the "),aa=n(q,"A",{href:!0});var Pt=d(aa);ot=o(Pt,"Audio"),Pt.forEach(e),lt=o(q," feature:"),q.forEach(e),xa=m(a),H(F.$$.fragment,a),ba=m(a),x=n(a,"P",{});var U=d(x);nt=o(U,"If you only want to load the underlying path to the audio dataset without decoding the audio file into an "),ha=n(U,"CODE",{});var Dt=d(ha);dt=o(Dt,"array"),Dt.forEach(e),it=o(U,", set "),fa=n(U,"CODE",{});var St=d(fa);rt=o(St,"decode=False"),St.forEach(e),ct=o(U," in the "),ta=n(U,"A",{href:!0});var Ut=d(ta);pt=o(Ut,"Audio"),Ut.forEach(e),ut=o(U," feature:"),U.forEach(e),Aa=m(a),H(J.$$.fragment,a),this.h()},h(){_(r,"name","hf:doc:metadata"),_(r,"content",JSON.stringify(Rt)),_(g,"id","load-audio-data"),_(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(g,"href","#load-audio-data"),_(u,"class","relative group"),_(Y,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Audio"),_(L,"class","underline decoration-sky-400 decoration-2 font-semibold"),_(L,"href","./loading"),_(S,"id","local-files"),_(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(S,"href","#local-files"),_(O,"class","relative group"),_(Z,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.cast_column"),_(aa,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Audio"),_(ta,"href","/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Audio")},m(a,i){t(document.head,r),c(a,E,i),c(a,u,i),t(u,g),t(g,y),W(h,y,null),t(u,b),t(u,j),t(j,$),c(a,p,i),c(a,v,i),t(v,C),t(v,oa),t(oa,Ia),t(v,Pa),c(a,_a,i),c(a,A,i),t(A,Q),t(Q,la),t(la,Da),t(Q,Sa),t(A,Ua),t(A,V),t(V,na),t(na,Ta),t(V,La),t(A,Na),t(A,X),t(X,da),t(da,Fa),t(X,Ja),c(a,ga,i),W(I,a,i),c(a,$a,i),c(a,k,i),t(k,Ma),t(k,ia),t(ia,Ba),t(k,Ha),t(k,Y),t(Y,Wa),t(k,Ga),c(a,va,i),W(T,a,i),c(a,wa,i),W(P,a,i),c(a,ya,i),c(a,D,i),t(D,Ra),t(D,L),t(L,za),t(D,Ka),c(a,ja,i),c(a,O,i),t(O,S),t(S,ra),W(N,ra,null),t(O,Qa),t(O,ca),t(ca,Va),c(a,Ea,i),c(a,w,i),t(w,Xa),t(w,pa),t(pa,Ya),t(w,Za),t(w,Z),t(Z,at),t(w,tt),t(w,ua),t(ua,et),t(w,st),t(w,aa),t(aa,ot),t(w,lt),c(a,xa,i),W(F,a,i),c(a,ba,i),c(a,x,i),t(x,nt),t(x,ha),t(ha,dt),t(x,it),t(x,fa),t(fa,rt),t(x,ct),t(x,ta),t(ta,pt),t(x,ut),c(a,Aa,i),W(J,a,i),ka=!0},p(a,[i]){const M={};i&2&&(M.$$scope={dirty:i,ctx:a}),I.$set(M);const ma={};i&2&&(ma.$$scope={dirty:i,ctx:a}),P.$set(ma)},i(a){ka||(G(h.$$.fragment,a),G(I.$$.fragment,a),G(T.$$.fragment,a),G(P.$$.fragment,a),G(N.$$.fragment,a),G(F.$$.fragment,a),G(J.$$.fragment,a),ka=!0)},o(a){R(h.$$.fragment,a),R(I.$$.fragment,a),R(T.$$.fragment,a),R(P.$$.fragment,a),R(N.$$.fragment,a),R(F.$$.fragment,a),R(J.$$.fragment,a),ka=!1},d(a){e(r),a&&e(E),a&&e(u),z(h),a&&e(p),a&&e(v),a&&e(_a),a&&e(A),a&&e(ga),z(I,a),a&&e($a),a&&e(k),a&&e(va),z(T,a),a&&e(wa),z(P,a),a&&e(ya),a&&e(D),a&&e(ja),a&&e(O),z(N),a&&e(Ea),a&&e(w),a&&e(xa),z(F,a),a&&e(ba),a&&e(x),a&&e(Aa),z(J,a)}}}const Rt={local:"load-audio-data",sections:[{local:"local-files",title:"Local files"}],title:"Load audio data"};function zt(K){return Bt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yt extends Nt{constructor(r){super();Ft(this,r,zt,Gt,Jt,{})}}export{Yt as default,Rt as metadata};
