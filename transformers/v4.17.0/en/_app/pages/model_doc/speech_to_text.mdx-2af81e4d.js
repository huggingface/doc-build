import{S as pp,i as fp,s as up,e as a,k as c,w as v,t as n,M as mp,c as r,d as t,m as l,a as i,x as T,h as s,b as d,F as e,g as p,y as x,q as k,o as b,B as y}from"../../chunks/vendor-4833417e.js";import{T as Yt}from"../../chunks/Tip-fffd6df1.js";import{D}from"../../chunks/Docstring-4f315ed9.js";import{C as ln}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as We}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function _p(G){let h,$,m,_,S,g,w,E;return{c(){h=a("p"),$=n(`This class method is simply calling the feature extractor
`),m=a("a"),_=n("from_pretrained()"),S=n(` and the tokenizer
`),g=a("code"),w=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){h=r(A,"P",{});var q=i(h);$=s(q,`This class method is simply calling the feature extractor
`),m=r(q,"A",{href:!0});var z=i(m);_=s(z,"from_pretrained()"),z.forEach(t),S=s(q,` and the tokenizer
`),g=r(q,"CODE",{});var N=i(g);w=s(N,"from_pretrained"),N.forEach(t),E=s(q,` methods. Please refer to the docstrings of the
methods above for more information.`),q.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/v4.17.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,q){p(A,h,q),e(h,$),e(h,m),e(m,_),e(h,S),e(h,g),e(g,w),e(h,E)},d(A){A&&t(h)}}}function gp(G){let h,$,m,_,S,g,w,E;return{c(){h=a("p"),$=n("This class method is simply calling "),m=a("a"),_=n("save_pretrained()"),S=n(` and
`),g=a("code"),w=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){h=r(A,"P",{});var q=i(h);$=s(q,"This class method is simply calling "),m=r(q,"A",{href:!0});var z=i(m);_=s(z,"save_pretrained()"),z.forEach(t),S=s(q,` and
`),g=r(q,"CODE",{});var N=i(g);w=s(N,"save_pretrained"),N.forEach(t),E=s(q,`. Please refer to the docstrings of the methods
above for more information.`),q.forEach(t),this.h()},h(){d(m,"href","/docs/transformers/v4.17.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,q){p(A,h,q),e(h,$),e(h,m),e(m,_),e(h,S),e(h,g),e(g,w),e(h,E)},d(A){A&&t(h)}}}function vp(G){let h,$,m,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,m),e(m,_),e(h,S)},d(g){g&&t(h)}}}function Tp(G){let h,$,m,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,m),e(m,_),e(h,S)},d(g){g&&t(h)}}}function xp(G){let h,$,m,_,S,g,w,E,A,q,z,N,V,ee,Fe,B,je,$e,C,J,te,ye,P,M,Pe,oe,ne,Me,se,ae,Ce,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),m=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),N=n("This second option is useful when using "),V=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),C=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),P=a("ul"),M=a("li"),Pe=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ce=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=r(u,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),_=r(u,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(u),z=r(u,"P",{});var Q=i(z);N=s(Q,"This second option is useful when using "),V=r(Q,"CODE",{});var Ue=i(V);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),C=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),P=r(u,"UL",{});var W=i(P);M=r(W,"LI",{});var ce=i(M);Pe=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Re=i(se);ae=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ce=l(W),O=r(W,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),j.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(u,F){p(u,h,F),e(h,$),p(u,m,F),p(u,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),p(u,q,F),p(u,z,F),e(z,N),e(z,V),e(V,ee),e(z,Fe),e(z,B),e(B,je),e(z,$e),p(u,C,F),p(u,J,F),e(J,te),p(u,ye,F),p(u,P,F),e(P,M),e(M,Pe),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(P,Ce),e(P,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(P,de),e(P,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(h),u&&t(m),u&&t(_),u&&t(q),u&&t(z),u&&t(C),u&&t(J),u&&t(ye),u&&t(P)}}}function kp(G){let h,$,m,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,m),e(m,_),e(h,S)},d(g){g&&t(h)}}}function bp(G){let h,$,m,_,S,g,w,E,A,q,z,N,V,ee,Fe,B,je,$e,C,J,te,ye,P,M,Pe,oe,ne,Me,se,ae,Ce,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),m=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),N=n("This second option is useful when using "),V=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),je=n("model(inputs)"),$e=n("."),C=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),P=a("ul"),M=a("li"),Pe=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ce=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){h=r(u,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(u),_=r(u,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(u),z=r(u,"P",{});var Q=i(z);N=s(Q,"This second option is useful when using "),V=r(Q,"CODE",{});var Ue=i(V);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var _e=i(B);je=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),C=l(u),J=r(u,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(u),P=r(u,"UL",{});var W=i(P);M=r(W,"LI",{});var ce=i(M);Pe=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Re=i(se);ae=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ce=l(W),O=r(W,"LI",{});var j=i(O);Ee=s(j,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(j,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(j," or "),ie=r(j,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),j.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(u,F){p(u,h,F),e(h,$),p(u,m,F),p(u,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),p(u,q,F),p(u,z,F),e(z,N),e(z,V),e(V,ee),e(z,Fe),e(z,B),e(B,je),e(z,$e),p(u,C,F),p(u,J,F),e(J,te),p(u,ye,F),p(u,P,F),e(P,M),e(M,Pe),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(P,Ce),e(P,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(P,de),e(P,K),e(K,De),e(K,Z),e(Z,Y)},d(u){u&&t(h),u&&t(m),u&&t(_),u&&t(q),u&&t(z),u&&t(C),u&&t(J),u&&t(ye),u&&t(P)}}}function yp(G){let h,$,m,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var E=i(m);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,m),e(m,_),e(h,S)},d(g){g&&t(h)}}}function wp(G){let h,$,m,_,S,g,w,E,A,q,z,N,V,ee,Fe,B,je,$e,C,J,te,ye,P,M,Pe,oe,ne,Me,se,ae,Ce,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y,u,F,X,st,Ne,Q,Ue,_e,at,W,ce,rt,Re,j,it,ze,Le,dt,hn,tr,or,pn,nr,sr,fn,ar,rr,Zs,U,ir,Yn,dr,cr,Xn,lr,hr,Qn,pr,fr,Zn,ur,mr,es,_r,gr,Xt,vr,Tr,ts,xr,ea,un,os,kr,ta,Qt,oa,mn,Zt,ns,br,yr,le,wr,ss,Sr,$r,as,Er,zr,rs,qr,Fr,is,jr,Pr,ds,Mr,Cr,na,eo,sa,yt,Ar,to,Ir,Dr,aa,ct,wt,cs,oo,Nr,ls,Lr,ra,he,no,Or,lt,Gr,_n,Wr,Ur,so,Rr,Hr,Vr,ht,Br,gn,Jr,Kr,vn,Yr,Xr,Qr,hs,Zr,ei,ao,ia,pt,St,ps,ro,ti,fs,oi,da,R,io,ni,us,si,ai,co,ri,Tn,ii,di,ci,$t,lo,li,ms,hi,pi,Et,ho,fi,po,ui,_s,mi,_i,gi,He,fo,vi,xn,Ti,kn,xi,ki,gs,bi,yi,bn,uo,ca,ft,zt,vs,mo,wi,Ts,Si,la,pe,_o,$i,xs,Ei,zi,go,qi,yn,Fi,ji,Pi,ks,Mi,Ci,qt,vo,Ai,bs,Ii,ha,ut,Ft,ys,To,Di,ws,Ni,pa,I,xo,Li,Ss,Oi,Gi,ge,wn,Wi,Ui,Sn,Ri,Hi,$n,Vi,Bi,ko,$s,Ji,Ki,Yi,En,Xi,Qi,Zi,jt,bo,ed,Oe,td,yo,Es,od,nd,sd,zn,ad,rd,wo,zs,id,dd,cd,ld,Ve,So,hd,qs,pd,fd,Pt,ud,Be,$o,md,Eo,_d,qn,gd,vd,Td,Mt,xd,Ct,zo,kd,qo,bd,Fn,yd,wd,Sd,At,Fo,$d,jo,Ed,jn,zd,qd,Fd,It,Po,jd,Fs,Pd,fa,mt,Dt,js,Mo,Md,Ps,Cd,ua,we,Co,Ad,Ao,Id,Pn,Dd,Nd,Ld,Io,Od,Do,Gd,Wd,Ud,ve,No,Rd,_t,Hd,Mn,Vd,Bd,Ms,Jd,Kd,Yd,Nt,Xd,Cs,Qd,Zd,Lo,ma,gt,Lt,As,Oo,ec,Is,tc,_a,Se,Go,oc,Wo,nc,Cn,sc,ac,rc,Uo,ic,Ro,dc,cc,lc,Te,Ho,hc,vt,pc,An,fc,uc,Ds,mc,_c,gc,Ot,vc,Ns,Tc,xc,Vo,ga,Tt,Gt,Ls,Bo,kc,Os,bc,va,fe,Jo,yc,Ko,wc,In,Sc,$c,Ec,Yo,zc,Xo,qc,Fc,jc,Wt,Pc,xe,Qo,Mc,xt,Cc,Dn,Ac,Ic,Gs,Dc,Nc,Lc,Ut,Oc,Ws,Gc,Wc,Zo,Ta,kt,Rt,Us,en,Uc,Rs,Rc,xa,ue,tn,Hc,on,Vc,Nn,Bc,Jc,Kc,nn,Yc,sn,Xc,Qc,Zc,Ht,el,ke,an,tl,bt,ol,Ln,nl,sl,Hs,al,rl,il,Vt,dl,Vs,cl,ll,rn,ka;return g=new We({}),ee=new We({}),X=new We({}),Qt=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(input_ids=inputs["input_features"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids=inputs[<span class="hljs-string">&quot;input_features&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),eo=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(
    input_ids=inputs["input_features"],
    attention_mask=inputs["attention_mask"],
    forced_bos_token_id=processor.tokenizer.lang_code_to_id["fr"],
)

translation = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(
<span class="hljs-meta">... </span>    input_ids=inputs[<span class="hljs-string">&quot;input_features&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    forced_bos_token_id=processor.tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)`}}),oo=new We({}),no=new D({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29",parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2TextConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.Speech2TextConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2TextConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2TextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2TextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2TextConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2TextConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2TextConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.Speech2TextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2TextConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.Speech2TextConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.Speech2TextConfig.num_conv_layers",description:`<strong>num_conv_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of 1D convolutional layers in the conv module.`,name:"num_conv_layers"},{anchor:"transformers.Speech2TextConfig.conv_kernel_sizes",description:`<strong>conv_kernel_sizes</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 5)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the conv module. The length
of <code>conv_kernel_sizes</code> has to match <code>num_conv_layers</code>.`,name:"conv_kernel_sizes"},{anchor:"transformers.Speech2TextConfig.conv_channels",description:`<strong>conv_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
An integer defining the number of output channels of each convolution layers except the final one in the
conv module.`,name:"conv_channels"},{anchor:"transformers.Speech2TextConfig.input_feat_per_channel",description:`<strong>input_feat_per_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
An integer specifying the size of feature vector. This is also the dimensions of log-mel filter-bank
features.`,name:"input_feat_per_channel"},{anchor:"transformers.Speech2TextConfig.input_channels",description:`<strong>input_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}]}}),ao=new ln({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

# Initializing a Speech2Text s2t_transformer_s style configuration
configuration = Speech2TextConfig()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2TextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ro=new We({}),io=new D({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2TextTokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to the <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> model file`,name:"spm_file"},{anchor:"transformers.Speech2TextTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2TextTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2TextTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2TextTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Speech2TextTokenizer.do_upper_case",description:`<strong>do_upper_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to uppercase the output when decoding.`,name:"do_upper_case"},{anchor:"transformers.Speech2TextTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.Speech2TextTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.Speech2TextTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),lo=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),ho=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),uo=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),mo=new We({}),_o=new D({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L34",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}]}}),vo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L127",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.17.0/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Speech2TextTransoformer models, <code>attention_mask</code> should alwys be passed for batched inference, to
avoid subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.17.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}]}}),To=new We({}),xo=new D({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),bo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),So=new D({props:{name:"from_pretrained",anchor:"transformers.ProcessorMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/processing_utils.py#L157",parametersDescription:[{anchor:"transformers.ProcessorMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.17.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.17.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),Pt=new Yt({props:{$$slots:{default:[_p]},$$scope:{ctx:G}}}),$o=new D({props:{name:"save_pretrained",anchor:"transformers.ProcessorMixin.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/processing_utils.py#L95",parametersDescription:[{anchor:"transformers.ProcessorMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.ProcessorMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Mt=new Yt({props:{$$slots:{default:[gp]},$$scope:{ctx:G}}}),zo=new D({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Fo=new D({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Po=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Mo=new We({}),Co=new D({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1117",parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new D({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1139",parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nt=new Yt({props:{$$slots:{default:[vp]},$$scope:{ctx:G}}}),Lo=new ln({props:{code:`import torch
from transformers import Speech2TextModel, Speech2TextFeatureExtractor
from datasets import load_dataset

model = Speech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")
feature_extractor = Speech2TextFeatureExtractor.from_pretrained("facebook/s2t-small-librispeech-asr")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
input_features = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
).input_features
decoder_input_ids = torch.tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Speech2TextFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),Oo=new We({}),Go=new D({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1247",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ho=new D({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1284",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ot=new Yt({props:{$$slots:{default:[Tp]},$$scope:{ctx:G}}}),Vo=new ln({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

input_features = processor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
).input_features

generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),Bo=new We({}),Jo=new D({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1288",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new Yt({props:{$$slots:{default:[xp]},$$scope:{ctx:G}}}),Qo=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1300",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ut=new Yt({props:{$$slots:{default:[kp]},$$scope:{ctx:G}}}),Zo=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
import tensorflow as tf

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = TFSpeech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new We({}),tn=new D({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1393",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new Yt({props:{$$slots:{default:[bp]},$$scope:{ctx:G}}}),an=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1415",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new Yt({props:{$$slots:{default:[yp]},$$scope:{ctx:G}}}),rn=new ln({props:{code:`import tensorflow as tf
from transformers import Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = TFSpeech2TextForConditionalGeneration.from_pretrained(
    "facebook/s2t-small-librispeech-asr", from_pt=True
)
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)
ds.set_format(type="tf")

input_features = processor(
    ds["speech"][0], sampling_rate=16000, return_tensors="tf"
).input_features  # Batch size 1
generated_ids = model.generate(input_features)

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.set_format(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){h=a("meta"),$=c(),m=a("h1"),_=a("a"),S=a("span"),v(g.$$.fragment),w=c(),E=a("span"),A=n("Speech2Text"),q=c(),z=a("h2"),N=a("a"),V=a("span"),v(ee.$$.fragment),Fe=c(),B=a("span"),je=n("Overview"),$e=c(),C=a("p"),J=n("The Speech2Text model was proposed in "),te=a("a"),ye=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),P=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=a("a"),Pe=n("LibriSpeech"),oe=n(", "),ne=a("a"),Me=n("CoVoST 2"),se=n(", "),ae=a("a"),Ce=n("MuST-C"),O=n("."),Ee=c(),L=a("p"),Ae=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),Ie=n(". The original code can be found "),de=a("a"),K=n("here"),De=n("."),Z=c(),Y=a("h2"),u=a("a"),F=a("span"),v(X.$$.fragment),st=c(),Ne=a("span"),Q=n("Inference"),Ue=c(),_e=a("p"),at=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=a("code"),ce=n("generate()"),rt=n(" method can be used for inference."),Re=c(),j=a("p"),it=n("The "),ze=a("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),hn=a("a"),tr=n("Speech2TextProcessor"),or=n(" wraps "),pn=a("a"),nr=n("Speech2TextFeatureExtractor"),sr=n(` and
`),fn=a("a"),ar=n("Speech2TextTokenizer"),rr=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Zs=c(),U=a("p"),ir=n("The feature extractor depends on "),Yn=a("code"),dr=n("torchaudio"),cr=n(" and the tokenizer depends on "),Xn=a("code"),lr=n("sentencepiece"),hr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a("code"),pr=n('pip install transformers"[speech, sentencepiece]"'),fr=n(" or install the packages seperately with "),Zn=a("code"),ur=n("pip install torchaudio sentencepiece"),mr=n(". Also "),es=a("code"),_r=n("torchaudio"),gr=n(" requires the development version of the "),Xt=a("a"),vr=n("libsndfile"),Tr=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a("code"),xr=n("apt install libsndfile1-dev"),ea=c(),un=a("ul"),os=a("li"),kr=n("ASR and Speech Translation"),ta=c(),v(Qt.$$.fragment),oa=c(),mn=a("ul"),Zt=a("li"),ns=a("p"),br=n("Multilingual speech translation"),yr=c(),le=a("p"),wr=n("For multilingual speech translation models, "),ss=a("code"),Sr=n("eos_token_id"),$r=n(" is used as the "),as=a("code"),Er=n("decoder_start_token_id"),zr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=a("code"),qr=n("forced_bos_token_id"),Fr=n(" parameter to the "),is=a("code"),jr=n("generate()"),Pr=n(` method. The following
example shows how to transate English speech to French text using the `),ds=a("em"),Mr=n("facebook/s2t-medium-mustc-multilingual-st"),Cr=n(`
checkpoint.`),na=c(),v(eo.$$.fragment),sa=c(),yt=a("p"),Ar=n("See the "),to=a("a"),Ir=n("model hub"),Dr=n(" to look for Speech2Text checkpoints."),aa=c(),ct=a("h2"),wt=a("a"),cs=a("span"),v(oo.$$.fragment),Nr=c(),ls=a("span"),Lr=n("Speech2TextConfig"),ra=c(),he=a("div"),v(no.$$.fragment),Or=c(),lt=a("p"),Gr=n("This is the configuration class to store the configuration of a "),_n=a("a"),Wr=n("Speech2TextModel"),Ur=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a("a"),Rr=n("facebook/s2t-small-librispeech-asr"),Hr=n(" architecture."),Vr=c(),ht=a("p"),Br=n("Configuration objects inherit from "),gn=a("a"),Jr=n("PretrainedConfig"),Kr=n(` and can be used to control the model outputs. Read the
documentation from `),vn=a("a"),Yr=n("PretrainedConfig"),Xr=n(" for more information."),Qr=c(),hs=a("p"),Zr=n("Example:"),ei=c(),v(ao.$$.fragment),ia=c(),pt=a("h2"),St=a("a"),ps=a("span"),v(ro.$$.fragment),ti=c(),fs=a("span"),oi=n("Speech2TextTokenizer"),da=c(),R=a("div"),v(io.$$.fragment),ni=c(),us=a("p"),si=n("Construct an Speech2Text tokenizer."),ai=c(),co=a("p"),ri=n("This tokenizer inherits from "),Tn=a("a"),ii=n("PreTrainedTokenizer"),di=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ci=c(),$t=a("div"),v(lo.$$.fragment),li=c(),ms=a("p"),hi=n("Build model inputs from a sequence by appending eos_token_id."),pi=c(),Et=a("div"),v(ho.$$.fragment),fi=c(),po=a("p"),ui=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=a("code"),mi=n("prepare_for_model"),_i=n(" method."),gi=c(),He=a("div"),v(fo.$$.fragment),vi=c(),xn=a("p"),Ti=n("Create the token type IDs corresponding to the sequences passed. "),kn=a("a"),xi=n(`What are token type
IDs?`),ki=c(),gs=a("p"),bi=n("Should be overridden in a subclass if the model has a special way of building those."),yi=c(),bn=a("div"),v(uo.$$.fragment),ca=c(),ft=a("h2"),zt=a("a"),vs=a("span"),v(mo.$$.fragment),wi=c(),Ts=a("span"),Si=n("Speech2TextFeatureExtractor"),la=c(),pe=a("div"),v(_o.$$.fragment),$i=c(),xs=a("p"),Ei=n("Constructs a Speech2Text feature extractor."),zi=c(),go=a("p"),qi=n("This feature extractor inherits from "),yn=a("a"),Fi=n("Speech2TextFeatureExtractor"),ji=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pi=c(),ks=a("p"),Mi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Ci=c(),qt=a("div"),v(vo.$$.fragment),Ai=c(),bs=a("p"),Ii=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ha=c(),ut=a("h2"),Ft=a("a"),ys=a("span"),v(To.$$.fragment),Di=c(),ws=a("span"),Ni=n("Speech2TextProcessor"),pa=c(),I=a("div"),v(xo.$$.fragment),Li=c(),Ss=a("p"),Oi=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Gi=c(),ge=a("p"),wn=a("a"),Wi=n("Speech2TextProcessor"),Ui=n(" offers all the functionalities of "),Sn=a("a"),Ri=n("Speech2TextFeatureExtractor"),Hi=n(` and
`),$n=a("a"),Vi=n("Speech2TextTokenizer"),Bi=n(". See the "),ko=a("a"),$s=a("strong"),Ji=n("call"),Ki=n("()"),Yi=n(" and "),En=a("a"),Xi=n("decode()"),Qi=n(` for more
information.`),Zi=c(),jt=a("div"),v(bo.$$.fragment),ed=c(),Oe=a("p"),td=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=a("a"),Es=a("strong"),od=n("call"),nd=n("()"),sd=n(` and returns its output. If used in the context
`),zn=a("a"),ad=n("as_target_processor()"),rd=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=a("a"),zs=a("strong"),id=n("call"),dd=n("()"),cd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ld=c(),Ve=a("div"),v(So.$$.fragment),hd=c(),qs=a("p"),pd=n("Instantiate a processor associated with a pretrained model."),fd=c(),v(Pt.$$.fragment),ud=c(),Be=a("div"),v($o.$$.fragment),md=c(),Eo=a("p"),_d=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),qn=a("a"),gd=n("from_pretrained()"),vd=n(" method."),Td=c(),v(Mt.$$.fragment),xd=c(),Ct=a("div"),v(zo.$$.fragment),kd=c(),qo=a("p"),bd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=a("a"),yd=n("batch_decode()"),wd=n(`. Please
refer to the docstring of this method for more information.`),Sd=c(),At=a("div"),v(Fo.$$.fragment),$d=c(),jo=a("p"),Ed=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=a("a"),zd=n("decode()"),qd=n(`. Please refer
to the docstring of this method for more information.`),Fd=c(),It=a("div"),v(Po.$$.fragment),jd=c(),Fs=a("p"),Pd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),fa=c(),mt=a("h2"),Dt=a("a"),js=a("span"),v(Mo.$$.fragment),Md=c(),Ps=a("span"),Cd=n("Speech2TextModel"),ua=c(),we=a("div"),v(Co.$$.fragment),Ad=c(),Ao=a("p"),Id=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=a("a"),Dd=n("PreTrainedModel"),Nd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld=c(),Io=a("p"),Od=n("This model is also a PyTorch "),Do=a("a"),Gd=n("torch.nn.Module"),Wd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ud=c(),ve=a("div"),v(No.$$.fragment),Rd=c(),_t=a("p"),Hd=n("The "),Mn=a("a"),Vd=n("Speech2TextModel"),Bd=n(" forward method, overrides the "),Ms=a("code"),Jd=n("__call__"),Kd=n(" special method."),Yd=c(),v(Nt.$$.fragment),Xd=c(),Cs=a("p"),Qd=n("Example:"),Zd=c(),v(Lo.$$.fragment),ma=c(),gt=a("h2"),Lt=a("a"),As=a("span"),v(Oo.$$.fragment),ec=c(),Is=a("span"),tc=n("Speech2TextForConditionalGeneration"),_a=c(),Se=a("div"),v(Go.$$.fragment),oc=c(),Wo=a("p"),nc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=a("a"),sc=n("PreTrainedModel"),ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=c(),Uo=a("p"),ic=n("This model is also a PyTorch "),Ro=a("a"),dc=n("torch.nn.Module"),cc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=c(),Te=a("div"),v(Ho.$$.fragment),hc=c(),vt=a("p"),pc=n("The "),An=a("a"),fc=n("Speech2TextForConditionalGeneration"),uc=n(" forward method, overrides the "),Ds=a("code"),mc=n("__call__"),_c=n(" special method."),gc=c(),v(Ot.$$.fragment),vc=c(),Ns=a("p"),Tc=n("Example:"),xc=c(),v(Vo.$$.fragment),ga=c(),Tt=a("h2"),Gt=a("a"),Ls=a("span"),v(Bo.$$.fragment),kc=c(),Os=a("span"),bc=n("TFSpeech2TextModel"),va=c(),fe=a("div"),v(Jo.$$.fragment),yc=c(),Ko=a("p"),wc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=a("a"),Sc=n("TFPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Yo=a("p"),zc=n("This model is also a "),Xo=a("a"),qc=n("tf.keras.Model"),Fc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc=c(),v(Wt.$$.fragment),Pc=c(),xe=a("div"),v(Qo.$$.fragment),Mc=c(),xt=a("p"),Cc=n("The "),Dn=a("a"),Ac=n("TFSpeech2TextModel"),Ic=n(" forward method, overrides the "),Gs=a("code"),Dc=n("__call__"),Nc=n(" special method."),Lc=c(),v(Ut.$$.fragment),Oc=c(),Ws=a("p"),Gc=n("Example:"),Wc=c(),v(Zo.$$.fragment),Ta=c(),kt=a("h2"),Rt=a("a"),Us=a("span"),v(en.$$.fragment),Uc=c(),Rs=a("span"),Rc=n("TFSpeech2TextForConditionalGeneration"),xa=c(),ue=a("div"),v(tn.$$.fragment),Hc=c(),on=a("p"),Vc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=a("a"),Bc=n("TFPreTrainedModel"),Jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc=c(),nn=a("p"),Yc=n("This model is also a "),sn=a("a"),Xc=n("tf.keras.Model"),Qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=c(),v(Ht.$$.fragment),el=c(),ke=a("div"),v(an.$$.fragment),tl=c(),bt=a("p"),ol=n("The "),Ln=a("a"),nl=n("TFSpeech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Hs=a("code"),al=n("__call__"),rl=n(" special method."),il=c(),v(Vt.$$.fragment),dl=c(),Vs=a("p"),cl=n("Example:"),ll=c(),v(rn.$$.fragment),this.h()},l(o){const f=mp('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),$=l(o),m=r(o,"H1",{class:!0});var dn=i(m);_=r(dn,"A",{id:!0,class:!0,href:!0});var Bs=i(_);S=r(Bs,"SPAN",{});var Js=i(S);T(g.$$.fragment,Js),Js.forEach(t),Bs.forEach(t),w=l(dn),E=r(dn,"SPAN",{});var Ks=i(E);A=s(Ks,"Speech2Text"),Ks.forEach(t),dn.forEach(t),q=l(o),z=r(o,"H2",{class:!0});var cn=i(z);N=r(cn,"A",{id:!0,class:!0,href:!0});var Ys=i(N);V=r(Ys,"SPAN",{});var Xs=i(V);T(ee.$$.fragment,Xs),Xs.forEach(t),Ys.forEach(t),Fe=l(cn),B=r(cn,"SPAN",{});var Qs=i(B);je=s(Qs,"Overview"),Qs.forEach(t),cn.forEach(t),$e=l(o),C=r(o,"P",{});var Je=i(C);J=s(Je,"The Speech2Text model was proposed in "),te=r(Je,"A",{href:!0,rel:!0});var ml=i(te);ye=s(ml,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),ml.forEach(t),P=s(Je,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=r(Je,"A",{href:!0,rel:!0});var _l=i(M);Pe=s(_l,"LibriSpeech"),_l.forEach(t),oe=s(Je,", "),ne=r(Je,"A",{href:!0,rel:!0});var gl=i(ne);Me=s(gl,"CoVoST 2"),gl.forEach(t),se=s(Je,", "),ae=r(Je,"A",{href:!0,rel:!0});var vl=i(ae);Ce=s(vl,"MuST-C"),vl.forEach(t),O=s(Je,"."),Je.forEach(t),Ee=l(o),L=r(o,"P",{});var On=i(L);Ae=s(On,"This model was contributed by "),re=r(On,"A",{href:!0,rel:!0});var Tl=i(re);ie=s(Tl,"valhalla"),Tl.forEach(t),Ie=s(On,". The original code can be found "),de=r(On,"A",{href:!0,rel:!0});var xl=i(de);K=s(xl,"here"),xl.forEach(t),De=s(On,"."),On.forEach(t),Z=l(o),Y=r(o,"H2",{class:!0});var ba=i(Y);u=r(ba,"A",{id:!0,class:!0,href:!0});var kl=i(u);F=r(kl,"SPAN",{});var bl=i(F);T(X.$$.fragment,bl),bl.forEach(t),kl.forEach(t),st=l(ba),Ne=r(ba,"SPAN",{});var yl=i(Ne);Q=s(yl,"Inference"),yl.forEach(t),ba.forEach(t),Ue=l(o),_e=r(o,"P",{});var ya=i(_e);at=s(ya,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=r(ya,"CODE",{});var wl=i(W);ce=s(wl,"generate()"),wl.forEach(t),rt=s(ya," method can be used for inference."),ya.forEach(t),Re=l(o),j=r(o,"P",{});var Ke=i(j);it=s(Ke,"The "),ze=r(Ke,"A",{href:!0});var Sl=i(ze);Le=s(Sl,"Speech2TextFeatureExtractor"),Sl.forEach(t),dt=s(Ke,` class is responsible for extracting the log-mel filter-bank
features. The `),hn=r(Ke,"A",{href:!0});var $l=i(hn);tr=s($l,"Speech2TextProcessor"),$l.forEach(t),or=s(Ke," wraps "),pn=r(Ke,"A",{href:!0});var El=i(pn);nr=s(El,"Speech2TextFeatureExtractor"),El.forEach(t),sr=s(Ke,` and
`),fn=r(Ke,"A",{href:!0});var zl=i(fn);ar=s(zl,"Speech2TextTokenizer"),zl.forEach(t),rr=s(Ke,` into a single instance to both extract the input features and decode the
predicted token ids.`),Ke.forEach(t),Zs=l(o),U=r(o,"P",{});var me=i(U);ir=s(me,"The feature extractor depends on "),Yn=r(me,"CODE",{});var ql=i(Yn);dr=s(ql,"torchaudio"),ql.forEach(t),cr=s(me," and the tokenizer depends on "),Xn=r(me,"CODE",{});var Fl=i(Xn);lr=s(Fl,"sentencepiece"),Fl.forEach(t),hr=s(me,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r(me,"CODE",{});var jl=i(Qn);pr=s(jl,'pip install transformers"[speech, sentencepiece]"'),jl.forEach(t),fr=s(me," or install the packages seperately with "),Zn=r(me,"CODE",{});var Pl=i(Zn);ur=s(Pl,"pip install torchaudio sentencepiece"),Pl.forEach(t),mr=s(me,". Also "),es=r(me,"CODE",{});var Ml=i(es);_r=s(Ml,"torchaudio"),Ml.forEach(t),gr=s(me," requires the development version of the "),Xt=r(me,"A",{href:!0,rel:!0});var Cl=i(Xt);vr=s(Cl,"libsndfile"),Cl.forEach(t),Tr=s(me,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r(me,"CODE",{});var Al=i(ts);xr=s(Al,"apt install libsndfile1-dev"),Al.forEach(t),me.forEach(t),ea=l(o),un=r(o,"UL",{});var Il=i(un);os=r(Il,"LI",{});var Dl=i(os);kr=s(Dl,"ASR and Speech Translation"),Dl.forEach(t),Il.forEach(t),ta=l(o),T(Qt.$$.fragment,o),oa=l(o),mn=r(o,"UL",{});var Nl=i(mn);Zt=r(Nl,"LI",{});var wa=i(Zt);ns=r(wa,"P",{});var Ll=i(ns);br=s(Ll,"Multilingual speech translation"),Ll.forEach(t),yr=l(wa),le=r(wa,"P",{});var qe=i(le);wr=s(qe,"For multilingual speech translation models, "),ss=r(qe,"CODE",{});var Ol=i(ss);Sr=s(Ol,"eos_token_id"),Ol.forEach(t),$r=s(qe," is used as the "),as=r(qe,"CODE",{});var Gl=i(as);Er=s(Gl,"decoder_start_token_id"),Gl.forEach(t),zr=s(qe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=r(qe,"CODE",{});var Wl=i(rs);qr=s(Wl,"forced_bos_token_id"),Wl.forEach(t),Fr=s(qe," parameter to the "),is=r(qe,"CODE",{});var Ul=i(is);jr=s(Ul,"generate()"),Ul.forEach(t),Pr=s(qe,` method. The following
example shows how to transate English speech to French text using the `),ds=r(qe,"EM",{});var Rl=i(ds);Mr=s(Rl,"facebook/s2t-medium-mustc-multilingual-st"),Rl.forEach(t),Cr=s(qe,`
checkpoint.`),qe.forEach(t),wa.forEach(t),Nl.forEach(t),na=l(o),T(eo.$$.fragment,o),sa=l(o),yt=r(o,"P",{});var Sa=i(yt);Ar=s(Sa,"See the "),to=r(Sa,"A",{href:!0,rel:!0});var Hl=i(to);Ir=s(Hl,"model hub"),Hl.forEach(t),Dr=s(Sa," to look for Speech2Text checkpoints."),Sa.forEach(t),aa=l(o),ct=r(o,"H2",{class:!0});var $a=i(ct);wt=r($a,"A",{id:!0,class:!0,href:!0});var Vl=i(wt);cs=r(Vl,"SPAN",{});var Bl=i(cs);T(oo.$$.fragment,Bl),Bl.forEach(t),Vl.forEach(t),Nr=l($a),ls=r($a,"SPAN",{});var Jl=i(ls);Lr=s(Jl,"Speech2TextConfig"),Jl.forEach(t),$a.forEach(t),ra=l(o),he=r(o,"DIV",{class:!0});var Ye=i(he);T(no.$$.fragment,Ye),Or=l(Ye),lt=r(Ye,"P",{});var Gn=i(lt);Gr=s(Gn,"This is the configuration class to store the configuration of a "),_n=r(Gn,"A",{href:!0});var Kl=i(_n);Wr=s(Kl,"Speech2TextModel"),Kl.forEach(t),Ur=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r(Gn,"A",{href:!0,rel:!0});var Yl=i(so);Rr=s(Yl,"facebook/s2t-small-librispeech-asr"),Yl.forEach(t),Hr=s(Gn," architecture."),Gn.forEach(t),Vr=l(Ye),ht=r(Ye,"P",{});var Wn=i(ht);Br=s(Wn,"Configuration objects inherit from "),gn=r(Wn,"A",{href:!0});var Xl=i(gn);Jr=s(Xl,"PretrainedConfig"),Xl.forEach(t),Kr=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),vn=r(Wn,"A",{href:!0});var Ql=i(vn);Yr=s(Ql,"PretrainedConfig"),Ql.forEach(t),Xr=s(Wn," for more information."),Wn.forEach(t),Qr=l(Ye),hs=r(Ye,"P",{});var Zl=i(hs);Zr=s(Zl,"Example:"),Zl.forEach(t),ei=l(Ye),T(ao.$$.fragment,Ye),Ye.forEach(t),ia=l(o),pt=r(o,"H2",{class:!0});var Ea=i(pt);St=r(Ea,"A",{id:!0,class:!0,href:!0});var eh=i(St);ps=r(eh,"SPAN",{});var th=i(ps);T(ro.$$.fragment,th),th.forEach(t),eh.forEach(t),ti=l(Ea),fs=r(Ea,"SPAN",{});var oh=i(fs);oi=s(oh,"Speech2TextTokenizer"),oh.forEach(t),Ea.forEach(t),da=l(o),R=r(o,"DIV",{class:!0});var be=i(R);T(io.$$.fragment,be),ni=l(be),us=r(be,"P",{});var nh=i(us);si=s(nh,"Construct an Speech2Text tokenizer."),nh.forEach(t),ai=l(be),co=r(be,"P",{});var za=i(co);ri=s(za,"This tokenizer inherits from "),Tn=r(za,"A",{href:!0});var sh=i(Tn);ii=s(sh,"PreTrainedTokenizer"),sh.forEach(t),di=s(za,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),za.forEach(t),ci=l(be),$t=r(be,"DIV",{class:!0});var qa=i($t);T(lo.$$.fragment,qa),li=l(qa),ms=r(qa,"P",{});var ah=i(ms);hi=s(ah,"Build model inputs from a sequence by appending eos_token_id."),ah.forEach(t),qa.forEach(t),pi=l(be),Et=r(be,"DIV",{class:!0});var Fa=i(Et);T(ho.$$.fragment,Fa),fi=l(Fa),po=r(Fa,"P",{});var ja=i(po);ui=s(ja,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=r(ja,"CODE",{});var rh=i(_s);mi=s(rh,"prepare_for_model"),rh.forEach(t),_i=s(ja," method."),ja.forEach(t),Fa.forEach(t),gi=l(be),He=r(be,"DIV",{class:!0});var Un=i(He);T(fo.$$.fragment,Un),vi=l(Un),xn=r(Un,"P",{});var hl=i(xn);Ti=s(hl,"Create the token type IDs corresponding to the sequences passed. "),kn=r(hl,"A",{href:!0});var ih=i(kn);xi=s(ih,`What are token type
IDs?`),ih.forEach(t),hl.forEach(t),ki=l(Un),gs=r(Un,"P",{});var dh=i(gs);bi=s(dh,"Should be overridden in a subclass if the model has a special way of building those."),dh.forEach(t),Un.forEach(t),yi=l(be),bn=r(be,"DIV",{class:!0});var ch=i(bn);T(uo.$$.fragment,ch),ch.forEach(t),be.forEach(t),ca=l(o),ft=r(o,"H2",{class:!0});var Pa=i(ft);zt=r(Pa,"A",{id:!0,class:!0,href:!0});var lh=i(zt);vs=r(lh,"SPAN",{});var hh=i(vs);T(mo.$$.fragment,hh),hh.forEach(t),lh.forEach(t),wi=l(Pa),Ts=r(Pa,"SPAN",{});var ph=i(Ts);Si=s(ph,"Speech2TextFeatureExtractor"),ph.forEach(t),Pa.forEach(t),la=l(o),pe=r(o,"DIV",{class:!0});var Xe=i(pe);T(_o.$$.fragment,Xe),$i=l(Xe),xs=r(Xe,"P",{});var fh=i(xs);Ei=s(fh,"Constructs a Speech2Text feature extractor."),fh.forEach(t),zi=l(Xe),go=r(Xe,"P",{});var Ma=i(go);qi=s(Ma,"This feature extractor inherits from "),yn=r(Ma,"A",{href:!0});var uh=i(yn);Fi=s(uh,"Speech2TextFeatureExtractor"),uh.forEach(t),ji=s(Ma,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ma.forEach(t),Pi=l(Xe),ks=r(Xe,"P",{});var mh=i(ks);Mi=s(mh,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),mh.forEach(t),Ci=l(Xe),qt=r(Xe,"DIV",{class:!0});var Ca=i(qt);T(vo.$$.fragment,Ca),Ai=l(Ca),bs=r(Ca,"P",{});var _h=i(bs);Ii=s(_h,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),_h.forEach(t),Ca.forEach(t),Xe.forEach(t),ha=l(o),ut=r(o,"H2",{class:!0});var Aa=i(ut);Ft=r(Aa,"A",{id:!0,class:!0,href:!0});var gh=i(Ft);ys=r(gh,"SPAN",{});var vh=i(ys);T(To.$$.fragment,vh),vh.forEach(t),gh.forEach(t),Di=l(Aa),ws=r(Aa,"SPAN",{});var Th=i(ws);Ni=s(Th,"Speech2TextProcessor"),Th.forEach(t),Aa.forEach(t),pa=l(o),I=r(o,"DIV",{class:!0});var H=i(I);T(xo.$$.fragment,H),Li=l(H),Ss=r(H,"P",{});var xh=i(Ss);Oi=s(xh,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),xh.forEach(t),Gi=l(H),ge=r(H,"P",{});var Ge=i(ge);wn=r(Ge,"A",{href:!0});var kh=i(wn);Wi=s(kh,"Speech2TextProcessor"),kh.forEach(t),Ui=s(Ge," offers all the functionalities of "),Sn=r(Ge,"A",{href:!0});var bh=i(Sn);Ri=s(bh,"Speech2TextFeatureExtractor"),bh.forEach(t),Hi=s(Ge,` and
`),$n=r(Ge,"A",{href:!0});var yh=i($n);Vi=s(yh,"Speech2TextTokenizer"),yh.forEach(t),Bi=s(Ge,". See the "),ko=r(Ge,"A",{href:!0});var pl=i(ko);$s=r(pl,"STRONG",{});var wh=i($s);Ji=s(wh,"call"),wh.forEach(t),Ki=s(pl,"()"),pl.forEach(t),Yi=s(Ge," and "),En=r(Ge,"A",{href:!0});var Sh=i(En);Xi=s(Sh,"decode()"),Sh.forEach(t),Qi=s(Ge,` for more
information.`),Ge.forEach(t),Zi=l(H),jt=r(H,"DIV",{class:!0});var Ia=i(jt);T(bo.$$.fragment,Ia),ed=l(Ia),Oe=r(Ia,"P",{});var Bt=i(Oe);td=s(Bt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=r(Bt,"A",{href:!0});var fl=i(yo);Es=r(fl,"STRONG",{});var $h=i(Es);od=s($h,"call"),$h.forEach(t),nd=s(fl,"()"),fl.forEach(t),sd=s(Bt,` and returns its output. If used in the context
`),zn=r(Bt,"A",{href:!0});var Eh=i(zn);ad=s(Eh,"as_target_processor()"),Eh.forEach(t),rd=s(Bt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=r(Bt,"A",{href:!0});var ul=i(wo);zs=r(ul,"STRONG",{});var zh=i(zs);id=s(zh,"call"),zh.forEach(t),dd=s(ul,"()"),ul.forEach(t),cd=s(Bt,`. Please refer to the doctsring of the above two methods for more
information.`),Bt.forEach(t),Ia.forEach(t),ld=l(H),Ve=r(H,"DIV",{class:!0});var Rn=i(Ve);T(So.$$.fragment,Rn),hd=l(Rn),qs=r(Rn,"P",{});var qh=i(qs);pd=s(qh,"Instantiate a processor associated with a pretrained model."),qh.forEach(t),fd=l(Rn),T(Pt.$$.fragment,Rn),Rn.forEach(t),ud=l(H),Be=r(H,"DIV",{class:!0});var Hn=i(Be);T($o.$$.fragment,Hn),md=l(Hn),Eo=r(Hn,"P",{});var Da=i(Eo);_d=s(Da,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),qn=r(Da,"A",{href:!0});var Fh=i(qn);gd=s(Fh,"from_pretrained()"),Fh.forEach(t),vd=s(Da," method."),Da.forEach(t),Td=l(Hn),T(Mt.$$.fragment,Hn),Hn.forEach(t),xd=l(H),Ct=r(H,"DIV",{class:!0});var Na=i(Ct);T(zo.$$.fragment,Na),kd=l(Na),qo=r(Na,"P",{});var La=i(qo);bd=s(La,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=r(La,"A",{href:!0});var jh=i(Fn);yd=s(jh,"batch_decode()"),jh.forEach(t),wd=s(La,`. Please
refer to the docstring of this method for more information.`),La.forEach(t),Na.forEach(t),Sd=l(H),At=r(H,"DIV",{class:!0});var Oa=i(At);T(Fo.$$.fragment,Oa),$d=l(Oa),jo=r(Oa,"P",{});var Ga=i(jo);Ed=s(Ga,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),jn=r(Ga,"A",{href:!0});var Ph=i(jn);zd=s(Ph,"decode()"),Ph.forEach(t),qd=s(Ga,`. Please refer
to the docstring of this method for more information.`),Ga.forEach(t),Oa.forEach(t),Fd=l(H),It=r(H,"DIV",{class:!0});var Wa=i(It);T(Po.$$.fragment,Wa),jd=l(Wa),Fs=r(Wa,"P",{});var Mh=i(Fs);Pd=s(Mh,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Mh.forEach(t),Wa.forEach(t),H.forEach(t),fa=l(o),mt=r(o,"H2",{class:!0});var Ua=i(mt);Dt=r(Ua,"A",{id:!0,class:!0,href:!0});var Ch=i(Dt);js=r(Ch,"SPAN",{});var Ah=i(js);T(Mo.$$.fragment,Ah),Ah.forEach(t),Ch.forEach(t),Md=l(Ua),Ps=r(Ua,"SPAN",{});var Ih=i(Ps);Cd=s(Ih,"Speech2TextModel"),Ih.forEach(t),Ua.forEach(t),ua=l(o),we=r(o,"DIV",{class:!0});var Jt=i(we);T(Co.$$.fragment,Jt),Ad=l(Jt),Ao=r(Jt,"P",{});var Ra=i(Ao);Id=s(Ra,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=r(Ra,"A",{href:!0});var Dh=i(Pn);Dd=s(Dh,"PreTrainedModel"),Dh.forEach(t),Nd=s(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Ld=l(Jt),Io=r(Jt,"P",{});var Ha=i(Io);Od=s(Ha,"This model is also a PyTorch "),Do=r(Ha,"A",{href:!0,rel:!0});var Nh=i(Do);Gd=s(Nh,"torch.nn.Module"),Nh.forEach(t),Wd=s(Ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ha.forEach(t),Ud=l(Jt),ve=r(Jt,"DIV",{class:!0});var Qe=i(ve);T(No.$$.fragment,Qe),Rd=l(Qe),_t=r(Qe,"P",{});var Vn=i(_t);Hd=s(Vn,"The "),Mn=r(Vn,"A",{href:!0});var Lh=i(Mn);Vd=s(Lh,"Speech2TextModel"),Lh.forEach(t),Bd=s(Vn," forward method, overrides the "),Ms=r(Vn,"CODE",{});var Oh=i(Ms);Jd=s(Oh,"__call__"),Oh.forEach(t),Kd=s(Vn," special method."),Vn.forEach(t),Yd=l(Qe),T(Nt.$$.fragment,Qe),Xd=l(Qe),Cs=r(Qe,"P",{});var Gh=i(Cs);Qd=s(Gh,"Example:"),Gh.forEach(t),Zd=l(Qe),T(Lo.$$.fragment,Qe),Qe.forEach(t),Jt.forEach(t),ma=l(o),gt=r(o,"H2",{class:!0});var Va=i(gt);Lt=r(Va,"A",{id:!0,class:!0,href:!0});var Wh=i(Lt);As=r(Wh,"SPAN",{});var Uh=i(As);T(Oo.$$.fragment,Uh),Uh.forEach(t),Wh.forEach(t),ec=l(Va),Is=r(Va,"SPAN",{});var Rh=i(Is);tc=s(Rh,"Speech2TextForConditionalGeneration"),Rh.forEach(t),Va.forEach(t),_a=l(o),Se=r(o,"DIV",{class:!0});var Kt=i(Se);T(Go.$$.fragment,Kt),oc=l(Kt),Wo=r(Kt,"P",{});var Ba=i(Wo);nc=s(Ba,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cn=r(Ba,"A",{href:!0});var Hh=i(Cn);sc=s(Hh,"PreTrainedModel"),Hh.forEach(t),ac=s(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba.forEach(t),rc=l(Kt),Uo=r(Kt,"P",{});var Ja=i(Uo);ic=s(Ja,"This model is also a PyTorch "),Ro=r(Ja,"A",{href:!0,rel:!0});var Vh=i(Ro);dc=s(Vh,"torch.nn.Module"),Vh.forEach(t),cc=s(Ja,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ja.forEach(t),lc=l(Kt),Te=r(Kt,"DIV",{class:!0});var Ze=i(Te);T(Ho.$$.fragment,Ze),hc=l(Ze),vt=r(Ze,"P",{});var Bn=i(vt);pc=s(Bn,"The "),An=r(Bn,"A",{href:!0});var Bh=i(An);fc=s(Bh,"Speech2TextForConditionalGeneration"),Bh.forEach(t),uc=s(Bn," forward method, overrides the "),Ds=r(Bn,"CODE",{});var Jh=i(Ds);mc=s(Jh,"__call__"),Jh.forEach(t),_c=s(Bn," special method."),Bn.forEach(t),gc=l(Ze),T(Ot.$$.fragment,Ze),vc=l(Ze),Ns=r(Ze,"P",{});var Kh=i(Ns);Tc=s(Kh,"Example:"),Kh.forEach(t),xc=l(Ze),T(Vo.$$.fragment,Ze),Ze.forEach(t),Kt.forEach(t),ga=l(o),Tt=r(o,"H2",{class:!0});var Ka=i(Tt);Gt=r(Ka,"A",{id:!0,class:!0,href:!0});var Yh=i(Gt);Ls=r(Yh,"SPAN",{});var Xh=i(Ls);T(Bo.$$.fragment,Xh),Xh.forEach(t),Yh.forEach(t),kc=l(Ka),Os=r(Ka,"SPAN",{});var Qh=i(Os);bc=s(Qh,"TFSpeech2TextModel"),Qh.forEach(t),Ka.forEach(t),va=l(o),fe=r(o,"DIV",{class:!0});var et=i(fe);T(Jo.$$.fragment,et),yc=l(et),Ko=r(et,"P",{});var Ya=i(Ko);wc=s(Ya,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=r(Ya,"A",{href:!0});var Zh=i(In);Sc=s(Zh,"TFPreTrainedModel"),Zh.forEach(t),$c=s(Ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya.forEach(t),Ec=l(et),Yo=r(et,"P",{});var Xa=i(Yo);zc=s(Xa,"This model is also a "),Xo=r(Xa,"A",{href:!0,rel:!0});var ep=i(Xo);qc=s(ep,"tf.keras.Model"),ep.forEach(t),Fc=s(Xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),jc=l(et),T(Wt.$$.fragment,et),Pc=l(et),xe=r(et,"DIV",{class:!0});var tt=i(xe);T(Qo.$$.fragment,tt),Mc=l(tt),xt=r(tt,"P",{});var Jn=i(xt);Cc=s(Jn,"The "),Dn=r(Jn,"A",{href:!0});var tp=i(Dn);Ac=s(tp,"TFSpeech2TextModel"),tp.forEach(t),Ic=s(Jn," forward method, overrides the "),Gs=r(Jn,"CODE",{});var op=i(Gs);Dc=s(op,"__call__"),op.forEach(t),Nc=s(Jn," special method."),Jn.forEach(t),Lc=l(tt),T(Ut.$$.fragment,tt),Oc=l(tt),Ws=r(tt,"P",{});var np=i(Ws);Gc=s(np,"Example:"),np.forEach(t),Wc=l(tt),T(Zo.$$.fragment,tt),tt.forEach(t),et.forEach(t),Ta=l(o),kt=r(o,"H2",{class:!0});var Qa=i(kt);Rt=r(Qa,"A",{id:!0,class:!0,href:!0});var sp=i(Rt);Us=r(sp,"SPAN",{});var ap=i(Us);T(en.$$.fragment,ap),ap.forEach(t),sp.forEach(t),Uc=l(Qa),Rs=r(Qa,"SPAN",{});var rp=i(Rs);Rc=s(rp,"TFSpeech2TextForConditionalGeneration"),rp.forEach(t),Qa.forEach(t),xa=l(o),ue=r(o,"DIV",{class:!0});var ot=i(ue);T(tn.$$.fragment,ot),Hc=l(ot),on=r(ot,"P",{});var Za=i(on);Vc=s(Za,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=r(Za,"A",{href:!0});var ip=i(Nn);Bc=s(ip,"TFPreTrainedModel"),ip.forEach(t),Jc=s(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),Kc=l(ot),nn=r(ot,"P",{});var er=i(nn);Yc=s(er,"This model is also a "),sn=r(er,"A",{href:!0,rel:!0});var dp=i(sn);Xc=s(dp,"tf.keras.Model"),dp.forEach(t),Qc=s(er,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),er.forEach(t),Zc=l(ot),T(Ht.$$.fragment,ot),el=l(ot),ke=r(ot,"DIV",{class:!0});var nt=i(ke);T(an.$$.fragment,nt),tl=l(nt),bt=r(nt,"P",{});var Kn=i(bt);ol=s(Kn,"The "),Ln=r(Kn,"A",{href:!0});var cp=i(Ln);nl=s(cp,"TFSpeech2TextForConditionalGeneration"),cp.forEach(t),sl=s(Kn," forward method, overrides the "),Hs=r(Kn,"CODE",{});var lp=i(Hs);al=s(lp,"__call__"),lp.forEach(t),rl=s(Kn," special method."),Kn.forEach(t),il=l(nt),T(Vt.$$.fragment,nt),dl=l(nt),Vs=r(nt,"P",{});var hp=i(Vs);cl=s(hp,"Example:"),hp.forEach(t),ll=l(nt),T(rn.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Sp)),d(_,"id","speech2text"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#speech2text"),d(m,"class","relative group"),d(N,"id","overview"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#overview"),d(z,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(M,"href","http://www.openslr.org/12"),d(M,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(ae,"href","https://ict.fbk.eu/must-c/"),d(ae,"rel","nofollow"),d(re,"href","https://huggingface.co/valhalla"),d(re,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(u,"id","inference"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#inference"),d(Y,"class","relative group"),d(ze,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(hn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(pn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(fn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(_n,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(gn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(vn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(he,"class","docstring"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(pt,"class","relative group"),d(Tn,"href","/docs/transformers/v4.17.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring"),d(Et,"class","docstring"),d(kn,"href","../glossary#token-type-ids"),d(He,"class","docstring"),d(bn,"class","docstring"),d(R,"class","docstring"),d(zt,"id","transformers.Speech2TextFeatureExtractor"),d(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zt,"href","#transformers.Speech2TextFeatureExtractor"),d(ft,"class","relative group"),d(yn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(qt,"class","docstring"),d(pe,"class","docstring"),d(Ft,"id","transformers.Speech2TextProcessor"),d(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ft,"href","#transformers.Speech2TextProcessor"),d(ut,"class","relative group"),d(wn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(Sn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d($n,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(ko,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(En,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(yo,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d(zn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(wo,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(jt,"class","docstring"),d(Ve,"class","docstring"),d(qn,"href","/docs/transformers/v4.17.0/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),d(Be,"class","docstring"),d(Fn,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),d(Ct,"class","docstring"),d(jn,"href","/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),d(At,"class","docstring"),d(It,"class","docstring"),d(I,"class","docstring"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(mt,"class","relative group"),d(Pn,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),d(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Do,"rel","nofollow"),d(Mn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(ve,"class","docstring"),d(we,"class","docstring"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(Cn,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),d(Ro,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ro,"rel","nofollow"),d(An,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(Te,"class","docstring"),d(Se,"class","docstring"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(Tt,"class","relative group"),d(In,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xo,"rel","nofollow"),d(Dn,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(xe,"class","docstring"),d(fe,"class","docstring"),d(Rt,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Rt,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(kt,"class","relative group"),d(Nn,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),d(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(sn,"rel","nofollow"),d(Ln,"href","/docs/transformers/v4.17.0/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(ke,"class","docstring"),d(ue,"class","docstring")},m(o,f){e(document.head,h),p(o,$,f),p(o,m,f),e(m,_),e(_,S),x(g,S,null),e(m,w),e(m,E),e(E,A),p(o,q,f),p(o,z,f),e(z,N),e(N,V),x(ee,V,null),e(z,Fe),e(z,B),e(B,je),p(o,$e,f),p(o,C,f),e(C,J),e(C,te),e(te,ye),e(C,P),e(C,M),e(M,Pe),e(C,oe),e(C,ne),e(ne,Me),e(C,se),e(C,ae),e(ae,Ce),e(C,O),p(o,Ee,f),p(o,L,f),e(L,Ae),e(L,re),e(re,ie),e(L,Ie),e(L,de),e(de,K),e(L,De),p(o,Z,f),p(o,Y,f),e(Y,u),e(u,F),x(X,F,null),e(Y,st),e(Y,Ne),e(Ne,Q),p(o,Ue,f),p(o,_e,f),e(_e,at),e(_e,W),e(W,ce),e(_e,rt),p(o,Re,f),p(o,j,f),e(j,it),e(j,ze),e(ze,Le),e(j,dt),e(j,hn),e(hn,tr),e(j,or),e(j,pn),e(pn,nr),e(j,sr),e(j,fn),e(fn,ar),e(j,rr),p(o,Zs,f),p(o,U,f),e(U,ir),e(U,Yn),e(Yn,dr),e(U,cr),e(U,Xn),e(Xn,lr),e(U,hr),e(U,Qn),e(Qn,pr),e(U,fr),e(U,Zn),e(Zn,ur),e(U,mr),e(U,es),e(es,_r),e(U,gr),e(U,Xt),e(Xt,vr),e(U,Tr),e(U,ts),e(ts,xr),p(o,ea,f),p(o,un,f),e(un,os),e(os,kr),p(o,ta,f),x(Qt,o,f),p(o,oa,f),p(o,mn,f),e(mn,Zt),e(Zt,ns),e(ns,br),e(Zt,yr),e(Zt,le),e(le,wr),e(le,ss),e(ss,Sr),e(le,$r),e(le,as),e(as,Er),e(le,zr),e(le,rs),e(rs,qr),e(le,Fr),e(le,is),e(is,jr),e(le,Pr),e(le,ds),e(ds,Mr),e(le,Cr),p(o,na,f),x(eo,o,f),p(o,sa,f),p(o,yt,f),e(yt,Ar),e(yt,to),e(to,Ir),e(yt,Dr),p(o,aa,f),p(o,ct,f),e(ct,wt),e(wt,cs),x(oo,cs,null),e(ct,Nr),e(ct,ls),e(ls,Lr),p(o,ra,f),p(o,he,f),x(no,he,null),e(he,Or),e(he,lt),e(lt,Gr),e(lt,_n),e(_n,Wr),e(lt,Ur),e(lt,so),e(so,Rr),e(lt,Hr),e(he,Vr),e(he,ht),e(ht,Br),e(ht,gn),e(gn,Jr),e(ht,Kr),e(ht,vn),e(vn,Yr),e(ht,Xr),e(he,Qr),e(he,hs),e(hs,Zr),e(he,ei),x(ao,he,null),p(o,ia,f),p(o,pt,f),e(pt,St),e(St,ps),x(ro,ps,null),e(pt,ti),e(pt,fs),e(fs,oi),p(o,da,f),p(o,R,f),x(io,R,null),e(R,ni),e(R,us),e(us,si),e(R,ai),e(R,co),e(co,ri),e(co,Tn),e(Tn,ii),e(co,di),e(R,ci),e(R,$t),x(lo,$t,null),e($t,li),e($t,ms),e(ms,hi),e(R,pi),e(R,Et),x(ho,Et,null),e(Et,fi),e(Et,po),e(po,ui),e(po,_s),e(_s,mi),e(po,_i),e(R,gi),e(R,He),x(fo,He,null),e(He,vi),e(He,xn),e(xn,Ti),e(xn,kn),e(kn,xi),e(He,ki),e(He,gs),e(gs,bi),e(R,yi),e(R,bn),x(uo,bn,null),p(o,ca,f),p(o,ft,f),e(ft,zt),e(zt,vs),x(mo,vs,null),e(ft,wi),e(ft,Ts),e(Ts,Si),p(o,la,f),p(o,pe,f),x(_o,pe,null),e(pe,$i),e(pe,xs),e(xs,Ei),e(pe,zi),e(pe,go),e(go,qi),e(go,yn),e(yn,Fi),e(go,ji),e(pe,Pi),e(pe,ks),e(ks,Mi),e(pe,Ci),e(pe,qt),x(vo,qt,null),e(qt,Ai),e(qt,bs),e(bs,Ii),p(o,ha,f),p(o,ut,f),e(ut,Ft),e(Ft,ys),x(To,ys,null),e(ut,Di),e(ut,ws),e(ws,Ni),p(o,pa,f),p(o,I,f),x(xo,I,null),e(I,Li),e(I,Ss),e(Ss,Oi),e(I,Gi),e(I,ge),e(ge,wn),e(wn,Wi),e(ge,Ui),e(ge,Sn),e(Sn,Ri),e(ge,Hi),e(ge,$n),e($n,Vi),e(ge,Bi),e(ge,ko),e(ko,$s),e($s,Ji),e(ko,Ki),e(ge,Yi),e(ge,En),e(En,Xi),e(ge,Qi),e(I,Zi),e(I,jt),x(bo,jt,null),e(jt,ed),e(jt,Oe),e(Oe,td),e(Oe,yo),e(yo,Es),e(Es,od),e(yo,nd),e(Oe,sd),e(Oe,zn),e(zn,ad),e(Oe,rd),e(Oe,wo),e(wo,zs),e(zs,id),e(wo,dd),e(Oe,cd),e(I,ld),e(I,Ve),x(So,Ve,null),e(Ve,hd),e(Ve,qs),e(qs,pd),e(Ve,fd),x(Pt,Ve,null),e(I,ud),e(I,Be),x($o,Be,null),e(Be,md),e(Be,Eo),e(Eo,_d),e(Eo,qn),e(qn,gd),e(Eo,vd),e(Be,Td),x(Mt,Be,null),e(I,xd),e(I,Ct),x(zo,Ct,null),e(Ct,kd),e(Ct,qo),e(qo,bd),e(qo,Fn),e(Fn,yd),e(qo,wd),e(I,Sd),e(I,At),x(Fo,At,null),e(At,$d),e(At,jo),e(jo,Ed),e(jo,jn),e(jn,zd),e(jo,qd),e(I,Fd),e(I,It),x(Po,It,null),e(It,jd),e(It,Fs),e(Fs,Pd),p(o,fa,f),p(o,mt,f),e(mt,Dt),e(Dt,js),x(Mo,js,null),e(mt,Md),e(mt,Ps),e(Ps,Cd),p(o,ua,f),p(o,we,f),x(Co,we,null),e(we,Ad),e(we,Ao),e(Ao,Id),e(Ao,Pn),e(Pn,Dd),e(Ao,Nd),e(we,Ld),e(we,Io),e(Io,Od),e(Io,Do),e(Do,Gd),e(Io,Wd),e(we,Ud),e(we,ve),x(No,ve,null),e(ve,Rd),e(ve,_t),e(_t,Hd),e(_t,Mn),e(Mn,Vd),e(_t,Bd),e(_t,Ms),e(Ms,Jd),e(_t,Kd),e(ve,Yd),x(Nt,ve,null),e(ve,Xd),e(ve,Cs),e(Cs,Qd),e(ve,Zd),x(Lo,ve,null),p(o,ma,f),p(o,gt,f),e(gt,Lt),e(Lt,As),x(Oo,As,null),e(gt,ec),e(gt,Is),e(Is,tc),p(o,_a,f),p(o,Se,f),x(Go,Se,null),e(Se,oc),e(Se,Wo),e(Wo,nc),e(Wo,Cn),e(Cn,sc),e(Wo,ac),e(Se,rc),e(Se,Uo),e(Uo,ic),e(Uo,Ro),e(Ro,dc),e(Uo,cc),e(Se,lc),e(Se,Te),x(Ho,Te,null),e(Te,hc),e(Te,vt),e(vt,pc),e(vt,An),e(An,fc),e(vt,uc),e(vt,Ds),e(Ds,mc),e(vt,_c),e(Te,gc),x(Ot,Te,null),e(Te,vc),e(Te,Ns),e(Ns,Tc),e(Te,xc),x(Vo,Te,null),p(o,ga,f),p(o,Tt,f),e(Tt,Gt),e(Gt,Ls),x(Bo,Ls,null),e(Tt,kc),e(Tt,Os),e(Os,bc),p(o,va,f),p(o,fe,f),x(Jo,fe,null),e(fe,yc),e(fe,Ko),e(Ko,wc),e(Ko,In),e(In,Sc),e(Ko,$c),e(fe,Ec),e(fe,Yo),e(Yo,zc),e(Yo,Xo),e(Xo,qc),e(Yo,Fc),e(fe,jc),x(Wt,fe,null),e(fe,Pc),e(fe,xe),x(Qo,xe,null),e(xe,Mc),e(xe,xt),e(xt,Cc),e(xt,Dn),e(Dn,Ac),e(xt,Ic),e(xt,Gs),e(Gs,Dc),e(xt,Nc),e(xe,Lc),x(Ut,xe,null),e(xe,Oc),e(xe,Ws),e(Ws,Gc),e(xe,Wc),x(Zo,xe,null),p(o,Ta,f),p(o,kt,f),e(kt,Rt),e(Rt,Us),x(en,Us,null),e(kt,Uc),e(kt,Rs),e(Rs,Rc),p(o,xa,f),p(o,ue,f),x(tn,ue,null),e(ue,Hc),e(ue,on),e(on,Vc),e(on,Nn),e(Nn,Bc),e(on,Jc),e(ue,Kc),e(ue,nn),e(nn,Yc),e(nn,sn),e(sn,Xc),e(nn,Qc),e(ue,Zc),x(Ht,ue,null),e(ue,el),e(ue,ke),x(an,ke,null),e(ke,tl),e(ke,bt),e(bt,ol),e(bt,Ln),e(Ln,nl),e(bt,sl),e(bt,Hs),e(Hs,al),e(bt,rl),e(ke,il),x(Vt,ke,null),e(ke,dl),e(ke,Vs),e(Vs,cl),e(ke,ll),x(rn,ke,null),ka=!0},p(o,[f]){const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),Pt.$set(dn);const Bs={};f&2&&(Bs.$$scope={dirty:f,ctx:o}),Mt.$set(Bs);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Nt.$set(Js);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),Ot.$set(Ks);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:o}),Wt.$set(cn);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Ut.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Ht.$set(Xs);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Vt.$set(Qs)},i(o){ka||(k(g.$$.fragment,o),k(ee.$$.fragment,o),k(X.$$.fragment,o),k(Qt.$$.fragment,o),k(eo.$$.fragment,o),k(oo.$$.fragment,o),k(no.$$.fragment,o),k(ao.$$.fragment,o),k(ro.$$.fragment,o),k(io.$$.fragment,o),k(lo.$$.fragment,o),k(ho.$$.fragment,o),k(fo.$$.fragment,o),k(uo.$$.fragment,o),k(mo.$$.fragment,o),k(_o.$$.fragment,o),k(vo.$$.fragment,o),k(To.$$.fragment,o),k(xo.$$.fragment,o),k(bo.$$.fragment,o),k(So.$$.fragment,o),k(Pt.$$.fragment,o),k($o.$$.fragment,o),k(Mt.$$.fragment,o),k(zo.$$.fragment,o),k(Fo.$$.fragment,o),k(Po.$$.fragment,o),k(Mo.$$.fragment,o),k(Co.$$.fragment,o),k(No.$$.fragment,o),k(Nt.$$.fragment,o),k(Lo.$$.fragment,o),k(Oo.$$.fragment,o),k(Go.$$.fragment,o),k(Ho.$$.fragment,o),k(Ot.$$.fragment,o),k(Vo.$$.fragment,o),k(Bo.$$.fragment,o),k(Jo.$$.fragment,o),k(Wt.$$.fragment,o),k(Qo.$$.fragment,o),k(Ut.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(Ht.$$.fragment,o),k(an.$$.fragment,o),k(Vt.$$.fragment,o),k(rn.$$.fragment,o),ka=!0)},o(o){b(g.$$.fragment,o),b(ee.$$.fragment,o),b(X.$$.fragment,o),b(Qt.$$.fragment,o),b(eo.$$.fragment,o),b(oo.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(io.$$.fragment,o),b(lo.$$.fragment,o),b(ho.$$.fragment,o),b(fo.$$.fragment,o),b(uo.$$.fragment,o),b(mo.$$.fragment,o),b(_o.$$.fragment,o),b(vo.$$.fragment,o),b(To.$$.fragment,o),b(xo.$$.fragment,o),b(bo.$$.fragment,o),b(So.$$.fragment,o),b(Pt.$$.fragment,o),b($o.$$.fragment,o),b(Mt.$$.fragment,o),b(zo.$$.fragment,o),b(Fo.$$.fragment,o),b(Po.$$.fragment,o),b(Mo.$$.fragment,o),b(Co.$$.fragment,o),b(No.$$.fragment,o),b(Nt.$$.fragment,o),b(Lo.$$.fragment,o),b(Oo.$$.fragment,o),b(Go.$$.fragment,o),b(Ho.$$.fragment,o),b(Ot.$$.fragment,o),b(Vo.$$.fragment,o),b(Bo.$$.fragment,o),b(Jo.$$.fragment,o),b(Wt.$$.fragment,o),b(Qo.$$.fragment,o),b(Ut.$$.fragment,o),b(Zo.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(Ht.$$.fragment,o),b(an.$$.fragment,o),b(Vt.$$.fragment,o),b(rn.$$.fragment,o),ka=!1},d(o){t(h),o&&t($),o&&t(m),y(g),o&&t(q),o&&t(z),y(ee),o&&t($e),o&&t(C),o&&t(Ee),o&&t(L),o&&t(Z),o&&t(Y),y(X),o&&t(Ue),o&&t(_e),o&&t(Re),o&&t(j),o&&t(Zs),o&&t(U),o&&t(ea),o&&t(un),o&&t(ta),y(Qt,o),o&&t(oa),o&&t(mn),o&&t(na),y(eo,o),o&&t(sa),o&&t(yt),o&&t(aa),o&&t(ct),y(oo),o&&t(ra),o&&t(he),y(no),y(ao),o&&t(ia),o&&t(pt),y(ro),o&&t(da),o&&t(R),y(io),y(lo),y(ho),y(fo),y(uo),o&&t(ca),o&&t(ft),y(mo),o&&t(la),o&&t(pe),y(_o),y(vo),o&&t(ha),o&&t(ut),y(To),o&&t(pa),o&&t(I),y(xo),y(bo),y(So),y(Pt),y($o),y(Mt),y(zo),y(Fo),y(Po),o&&t(fa),o&&t(mt),y(Mo),o&&t(ua),o&&t(we),y(Co),y(No),y(Nt),y(Lo),o&&t(ma),o&&t(gt),y(Oo),o&&t(_a),o&&t(Se),y(Go),y(Ho),y(Ot),y(Vo),o&&t(ga),o&&t(Tt),y(Bo),o&&t(va),o&&t(fe),y(Jo),y(Wt),y(Qo),y(Ut),y(Zo),o&&t(Ta),o&&t(kt),y(en),o&&t(xa),o&&t(ue),y(tn),y(Ht),y(an),y(Vt),y(rn)}}}const Sp={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function $p(G,h,$){let{fw:m}=h;return G.$$set=_=>{"fw"in _&&$(0,m=_.fw)},[m]}class Mp extends pp{constructor(h){super();fp(this,h,$p,wp,up,{fw:0})}}export{Mp as default,Sp as metadata};
