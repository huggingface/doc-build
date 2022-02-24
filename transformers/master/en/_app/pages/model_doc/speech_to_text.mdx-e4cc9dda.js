import{S as pp,i as mp,s as fp,e as a,k as c,w as T,t as n,M as up,c as r,d as t,m as l,a as i,x as v,h as s,b as d,F as e,g as p,y as k,q as x,o as b,B as y}from"../../chunks/vendor-4833417e.js";import{T as Yt}from"../../chunks/Tip-fffd6df1.js";import{D}from"../../chunks/Docstring-44c5af16.js";import{C as ln}from"../../chunks/CodeBlock-90ffda97.js";import{I as We}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-04a16537.js";function _p(G){let h,$,u,_,S,g,w,E;return{c(){h=a("p"),$=n(`This class method is simply calling the feature extractor
`),u=a("a"),_=n("from_pretrained()"),S=n(` and the tokenizer
`),g=a("code"),w=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){h=r(A,"P",{});var q=i(h);$=s(q,`This class method is simply calling the feature extractor
`),u=r(q,"A",{href:!0});var z=i(u);_=s(z,"from_pretrained()"),z.forEach(t),S=s(q,` and the tokenizer
`),g=r(q,"CODE",{});var N=i(g);w=s(N,"from_pretrained"),N.forEach(t),E=s(q,` methods. Please refer to the docstrings of the
methods above for more information.`),q.forEach(t),this.h()},h(){d(u,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,q){p(A,h,q),e(h,$),e(h,u),e(u,_),e(h,S),e(h,g),e(g,w),e(h,E)},d(A){A&&t(h)}}}function gp(G){let h,$,u,_,S,g,w,E;return{c(){h=a("p"),$=n("This class method is simply calling "),u=a("a"),_=n("save_pretrained()"),S=n(` and
`),g=a("code"),w=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){h=r(A,"P",{});var q=i(h);$=s(q,"This class method is simply calling "),u=r(q,"A",{href:!0});var z=i(u);_=s(z,"save_pretrained()"),z.forEach(t),S=s(q,` and
`),g=r(q,"CODE",{});var N=i(g);w=s(N,"save_pretrained"),N.forEach(t),E=s(q,`. Please refer to the docstrings of the methods
above for more information.`),q.forEach(t),this.h()},h(){d(u,"href","/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,q){p(A,h,q),e(h,$),e(h,u),e(u,_),e(h,S),e(h,g),e(g,w),e(h,E)},d(A){A&&t(h)}}}function Tp(G){let h,$,u,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(w,"CODE",{});var E=i(u);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,u),e(u,_),e(h,S)},d(g){g&&t(h)}}}function vp(G){let h,$,u,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(w,"CODE",{});var E=i(u);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,u),e(u,_),e(h,S)},d(g){g&&t(h)}}}function kp(G){let h,$,u,_,S,g,w,E,A,q,z,N,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),N=n("This second option is useful when using "),R=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=a("code"),Pe=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),j=a("ul"),C=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Ce=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){h=r(f,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=l(f),_=r(f,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(f),z=r(f,"P",{});var Q=i(z);N=s(Q,"This second option is useful when using "),R=r(Q,"CODE",{});var Ue=i(R);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=r(Q,"CODE",{});var _e=i(V);Pe=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(f),J=r(f,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(f),j=r(f,"UL",{});var W=i(j);C=r(W,"LI",{});var ce=i(C);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Ce=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var He=i(se);ae=s(He,"model(input_ids)"),He.forEach(t),ce.forEach(t),Me=l(W),O=r(W,"LI",{});var P=i(O);Ee=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(P,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),P.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(f,F){p(f,h,F),e(h,$),p(f,u,F),p(f,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),p(f,q,F),p(f,z,F),e(z,N),e(z,R),e(R,ee),e(z,Fe),e(z,V),e(V,Pe),e(z,$e),p(f,M,F),p(f,J,F),e(J,te),p(f,ye,F),p(f,j,F),e(j,C),e(C,je),e(C,oe),e(oe,ne),e(C,Ce),e(C,se),e(se,ae),e(j,Me),e(j,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(j,de),e(j,K),e(K,De),e(K,Z),e(Z,Y)},d(f){f&&t(h),f&&t(u),f&&t(_),f&&t(q),f&&t(z),f&&t(M),f&&t(J),f&&t(ye),f&&t(j)}}}function xp(G){let h,$,u,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(w,"CODE",{});var E=i(u);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,u),e(u,_),e(h,S)},d(g){g&&t(h)}}}function bp(G){let h,$,u,_,S,g,w,E,A,q,z,N,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y;return{c(){h=a("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=c(),_=a("ul"),S=a("li"),g=n("having all inputs as keyword arguments (like PyTorch models), or"),w=c(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),q=c(),z=a("p"),N=n("This second option is useful when using "),R=a("code"),ee=n("tf.keras.Model.fit"),Fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=a("code"),Pe=n("model(inputs)"),$e=n("."),M=c(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye=c(),j=a("ul"),C=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Ce=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Me=c(),O=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),de=c(),K=a("li"),De=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){h=r(f,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=l(f),_=r(f,"UL",{});var X=i(_);S=r(X,"LI",{});var st=i(S);g=s(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(X),E=r(X,"LI",{});var Ne=i(E);A=s(Ne,"having all inputs as a list, tuple or dict in the first positional arguments."),Ne.forEach(t),X.forEach(t),q=l(f),z=r(f,"P",{});var Q=i(z);N=s(Q,"This second option is useful when using "),R=r(Q,"CODE",{});var Ue=i(R);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Fe=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=r(Q,"CODE",{});var _e=i(V);Pe=s(_e,"model(inputs)"),_e.forEach(t),$e=s(Q,"."),Q.forEach(t),M=l(f),J=r(f,"P",{});var at=i(J);te=s(at,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),at.forEach(t),ye=l(f),j=r(f,"UL",{});var W=i(j);C=r(W,"LI",{});var ce=i(C);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var rt=i(oe);ne=s(rt,"input_ids"),rt.forEach(t),Ce=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var He=i(se);ae=s(He,"model(input_ids)"),He.forEach(t),ce.forEach(t),Me=l(W),O=r(W,"LI",{});var P=i(O);Ee=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(P,"CODE",{});var it=i(L);Ae=s(it,"model([input_ids, attention_mask])"),it.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var ze=i(ie);Ie=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),P.forEach(t),de=l(W),K=r(W,"LI",{});var Le=i(K);De=s(Le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Le,"CODE",{});var dt=i(Z);Y=s(dt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),dt.forEach(t),Le.forEach(t),W.forEach(t)},m(f,F){p(f,h,F),e(h,$),p(f,u,F),p(f,_,F),e(_,S),e(S,g),e(_,w),e(_,E),e(E,A),p(f,q,F),p(f,z,F),e(z,N),e(z,R),e(R,ee),e(z,Fe),e(z,V),e(V,Pe),e(z,$e),p(f,M,F),p(f,J,F),e(J,te),p(f,ye,F),p(f,j,F),e(j,C),e(C,je),e(C,oe),e(oe,ne),e(C,Ce),e(C,se),e(se,ae),e(j,Me),e(j,O),e(O,Ee),e(O,L),e(L,Ae),e(O,re),e(O,ie),e(ie,Ie),e(j,de),e(j,K),e(K,De),e(K,Z),e(Z,Y)},d(f){f&&t(h),f&&t(u),f&&t(_),f&&t(q),f&&t(z),f&&t(M),f&&t(J),f&&t(ye),f&&t(j)}}}function yp(G){let h,$,u,_,S;return{c(){h=a("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),S=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(g){h=r(g,"P",{});var w=i(h);$=s(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(w,"CODE",{});var E=i(u);_=s(E,"Module"),E.forEach(t),S=s(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(g,w){p(g,h,w),e(h,$),e(h,u),e(u,_),e(h,S)},d(g){g&&t(h)}}}function wp(G){let h,$,u,_,S,g,w,E,A,q,z,N,R,ee,Fe,V,Pe,$e,M,J,te,ye,j,C,je,oe,ne,Ce,se,ae,Me,O,Ee,L,Ae,re,ie,Ie,de,K,De,Z,Y,f,F,X,st,Ne,Q,Ue,_e,at,W,ce,rt,He,P,it,ze,Le,dt,hn,tr,or,pn,nr,sr,mn,ar,rr,Zs,U,ir,Yn,dr,cr,Xn,lr,hr,Qn,pr,mr,Zn,fr,ur,es,_r,gr,Xt,Tr,vr,ts,kr,ea,fn,os,xr,ta,Qt,oa,un,Zt,ns,br,yr,le,wr,ss,Sr,$r,as,Er,zr,rs,qr,Fr,is,Pr,jr,ds,Cr,Mr,na,eo,sa,yt,Ar,to,Ir,Dr,aa,ct,wt,cs,oo,Nr,ls,Lr,ra,he,no,Or,lt,Gr,_n,Wr,Ur,so,Hr,Br,Rr,ht,Vr,gn,Jr,Kr,Tn,Yr,Xr,Qr,hs,Zr,ei,ao,ia,pt,St,ps,ro,ti,ms,oi,da,H,io,ni,fs,si,ai,co,ri,vn,ii,di,ci,$t,lo,li,us,hi,pi,Et,ho,mi,po,fi,_s,ui,_i,gi,Be,mo,Ti,kn,vi,xn,ki,xi,gs,bi,yi,bn,fo,ca,mt,zt,Ts,uo,wi,vs,Si,la,pe,_o,$i,ks,Ei,zi,go,qi,yn,Fi,Pi,ji,xs,Ci,Mi,qt,To,Ai,bs,Ii,ha,ft,Ft,ys,vo,Di,ws,Ni,pa,I,ko,Li,Ss,Oi,Gi,ge,wn,Wi,Ui,Sn,Hi,Bi,$n,Ri,Vi,xo,$s,Ji,Ki,Yi,En,Xi,Qi,Zi,Pt,bo,ed,Oe,td,yo,Es,od,nd,sd,zn,ad,rd,wo,zs,id,dd,cd,ld,Re,So,hd,qs,pd,md,jt,fd,Ve,$o,ud,Eo,_d,qn,gd,Td,vd,Ct,kd,Mt,zo,xd,qo,bd,Fn,yd,wd,Sd,At,Fo,$d,Po,Ed,Pn,zd,qd,Fd,It,jo,Pd,Fs,jd,ma,ut,Dt,Ps,Co,Cd,js,Md,fa,we,Mo,Ad,Ao,Id,jn,Dd,Nd,Ld,Io,Od,Do,Gd,Wd,Ud,Te,No,Hd,_t,Bd,Cn,Rd,Vd,Cs,Jd,Kd,Yd,Nt,Xd,Ms,Qd,Zd,Lo,ua,gt,Lt,As,Oo,ec,Is,tc,_a,Se,Go,oc,Wo,nc,Mn,sc,ac,rc,Uo,ic,Ho,dc,cc,lc,ve,Bo,hc,Tt,pc,An,mc,fc,Ds,uc,_c,gc,Ot,Tc,Ns,vc,kc,Ro,ga,vt,Gt,Ls,Vo,xc,Os,bc,Ta,me,Jo,yc,Ko,wc,In,Sc,$c,Ec,Yo,zc,Xo,qc,Fc,Pc,Wt,jc,ke,Qo,Cc,kt,Mc,Dn,Ac,Ic,Gs,Dc,Nc,Lc,Ut,Oc,Ws,Gc,Wc,Zo,va,xt,Ht,Us,en,Uc,Hs,Hc,ka,fe,tn,Bc,on,Rc,Nn,Vc,Jc,Kc,nn,Yc,sn,Xc,Qc,Zc,Bt,el,xe,an,tl,bt,ol,Ln,nl,sl,Bs,al,rl,il,Rt,dl,Rs,cl,ll,rn,xa;return g=new We({}),ee=new We({}),X=new We({}),Qt=new ln({props:{code:`import torch
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

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

translation = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)`}}),oo=new We({}),no=new D({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29",parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ro=new We({}),io=new D({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),lo=new D({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),ho=new D({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mo=new D({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/tokenization_utils_base.py#L2864",parametersDescription:[{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.PreTrainedTokenizerBase.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fo=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),uo=new We({}),_o=new D({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L34",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}]}}),To=new D({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L127",parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}]}}),vo=new We({}),ko=new D({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23",parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}]}}),bo=new D({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),So=new D({props:{name:"from_pretrained",anchor:"transformers.ProcessorMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/processing_utils.py#L157",parametersDescription:[{anchor:"transformers.ProcessorMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/master/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),jt=new Yt({props:{$$slots:{default:[_p]},$$scope:{ctx:G}}}),$o=new D({props:{name:"save_pretrained",anchor:"transformers.ProcessorMixin.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/processing_utils.py#L95",parametersDescription:[{anchor:"transformers.ProcessorMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.ProcessorMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/master/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),Ct=new Yt({props:{$$slots:{default:[gp]},$$scope:{ctx:G}}}),zo=new D({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Fo=new D({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),jo=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Co=new We({}),Mo=new D({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1124",parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new D({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1146",parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
`}}),Nt=new Yt({props:{$$slots:{default:[Tp]},$$scope:{ctx:G}}}),Lo=new ln({props:{code:`from transformers import Speech2TextTokenizer, Speech2TextModel
import torch

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = Speech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, Speech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new We({}),Go=new D({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1237",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new D({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1274",parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
`}}),Ot=new Yt({props:{$$slots:{default:[vp]},$$scope:{ctx:G}}}),Ro=new ln({props:{code:`import torch
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

input_features = processor(
    ds["speech"][0], sampling_rate=16000, return_tensors="pt"
).input_features  # Batch size 1
generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),Vo=new We({}),Jo=new D({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1288",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wt=new Yt({props:{$$slots:{default:[kp]},$$scope:{ctx:G}}}),Qo=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1300",parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
`}}),Ut=new Yt({props:{$$slots:{default:[xp]},$$scope:{ctx:G}}}),Zo=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
import tensorflow as tf

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = TFSpeech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new We({}),tn=new D({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1393",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bt=new Yt({props:{$$slots:{default:[bp]},$$scope:{ctx:G}}}),an=new D({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1415",parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
`}}),Rt=new Yt({props:{$$slots:{default:[yp]},$$scope:{ctx:G}}}),rn=new ln({props:{code:`import tensorflow as tf
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

transcription = processor.batch_decode(generated_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){h=a("meta"),$=c(),u=a("h1"),_=a("a"),S=a("span"),T(g.$$.fragment),w=c(),E=a("span"),A=n("Speech2Text"),q=c(),z=a("h2"),N=a("a"),R=a("span"),T(ee.$$.fragment),Fe=c(),V=a("span"),Pe=n("Overview"),$e=c(),M=a("p"),J=n("The Speech2Text model was proposed in "),te=a("a"),ye=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),j=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),C=a("a"),je=n("LibriSpeech"),oe=n(", "),ne=a("a"),Ce=n("CoVoST 2"),se=n(", "),ae=a("a"),Me=n("MuST-C"),O=n("."),Ee=c(),L=a("p"),Ae=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),Ie=n(". The original code can be found "),de=a("a"),K=n("here"),De=n("."),Z=c(),Y=a("h2"),f=a("a"),F=a("span"),T(X.$$.fragment),st=c(),Ne=a("span"),Q=n("Inference"),Ue=c(),_e=a("p"),at=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=a("code"),ce=n("generate()"),rt=n(" method can be used for inference."),He=c(),P=a("p"),it=n("The "),ze=a("a"),Le=n("Speech2TextFeatureExtractor"),dt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),hn=a("a"),tr=n("Speech2TextProcessor"),or=n(" wraps "),pn=a("a"),nr=n("Speech2TextFeatureExtractor"),sr=n(` and
`),mn=a("a"),ar=n("Speech2TextTokenizer"),rr=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Zs=c(),U=a("p"),ir=n("The feature extractor depends on "),Yn=a("code"),dr=n("torchaudio"),cr=n(" and the tokenizer depends on "),Xn=a("code"),lr=n("sentencepiece"),hr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a("code"),pr=n('pip install transformers"[speech, sentencepiece]"'),mr=n(" or install the packages seperately with "),Zn=a("code"),fr=n("pip install torchaudio sentencepiece"),ur=n(". Also "),es=a("code"),_r=n("torchaudio"),gr=n(" requires the development version of the "),Xt=a("a"),Tr=n("libsndfile"),vr=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a("code"),kr=n("apt install libsndfile1-dev"),ea=c(),fn=a("ul"),os=a("li"),xr=n("ASR and Speech Translation"),ta=c(),T(Qt.$$.fragment),oa=c(),un=a("ul"),Zt=a("li"),ns=a("p"),br=n("Multilingual speech translation"),yr=c(),le=a("p"),wr=n("For multilingual speech translation models, "),ss=a("code"),Sr=n("eos_token_id"),$r=n(" is used as the "),as=a("code"),Er=n("decoder_start_token_id"),zr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=a("code"),qr=n("forced_bos_token_id"),Fr=n(" parameter to the "),is=a("code"),Pr=n("generate()"),jr=n(` method. The following
example shows how to transate English speech to French text using the `),ds=a("em"),Cr=n("facebook/s2t-medium-mustc-multilingual-st"),Mr=n(`
checkpoint.`),na=c(),T(eo.$$.fragment),sa=c(),yt=a("p"),Ar=n("See the "),to=a("a"),Ir=n("model hub"),Dr=n(" to look for Speech2Text checkpoints."),aa=c(),ct=a("h2"),wt=a("a"),cs=a("span"),T(oo.$$.fragment),Nr=c(),ls=a("span"),Lr=n("Speech2TextConfig"),ra=c(),he=a("div"),T(no.$$.fragment),Or=c(),lt=a("p"),Gr=n("This is the configuration class to store the configuration of a "),_n=a("a"),Wr=n("Speech2TextModel"),Ur=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=a("a"),Hr=n("facebook/s2t-small-librispeech-asr"),Br=n(" architecture."),Rr=c(),ht=a("p"),Vr=n("Configuration objects inherit from "),gn=a("a"),Jr=n("PretrainedConfig"),Kr=n(` and can be used to control the model outputs. Read the
documentation from `),Tn=a("a"),Yr=n("PretrainedConfig"),Xr=n(" for more information."),Qr=c(),hs=a("p"),Zr=n("Example:"),ei=c(),T(ao.$$.fragment),ia=c(),pt=a("h2"),St=a("a"),ps=a("span"),T(ro.$$.fragment),ti=c(),ms=a("span"),oi=n("Speech2TextTokenizer"),da=c(),H=a("div"),T(io.$$.fragment),ni=c(),fs=a("p"),si=n("Construct an Speech2Text tokenizer."),ai=c(),co=a("p"),ri=n("This tokenizer inherits from "),vn=a("a"),ii=n("PreTrainedTokenizer"),di=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ci=c(),$t=a("div"),T(lo.$$.fragment),li=c(),us=a("p"),hi=n("Build model inputs from a sequence by appending eos_token_id."),pi=c(),Et=a("div"),T(ho.$$.fragment),mi=c(),po=a("p"),fi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=a("code"),ui=n("prepare_for_model"),_i=n(" method."),gi=c(),Be=a("div"),T(mo.$$.fragment),Ti=c(),kn=a("p"),vi=n("Create the token type IDs corresponding to the sequences passed. "),xn=a("a"),ki=n(`What are token type
IDs?`),xi=c(),gs=a("p"),bi=n("Should be overridden in a subclass if the model has a special way of building those."),yi=c(),bn=a("div"),T(fo.$$.fragment),ca=c(),mt=a("h2"),zt=a("a"),Ts=a("span"),T(uo.$$.fragment),wi=c(),vs=a("span"),Si=n("Speech2TextFeatureExtractor"),la=c(),pe=a("div"),T(_o.$$.fragment),$i=c(),ks=a("p"),Ei=n("Constructs a Speech2Text feature extractor."),zi=c(),go=a("p"),qi=n("This feature extractor inherits from "),yn=a("a"),Fi=n("Speech2TextFeatureExtractor"),Pi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ji=c(),xs=a("p"),Ci=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Mi=c(),qt=a("div"),T(To.$$.fragment),Ai=c(),bs=a("p"),Ii=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ha=c(),ft=a("h2"),Ft=a("a"),ys=a("span"),T(vo.$$.fragment),Di=c(),ws=a("span"),Ni=n("Speech2TextProcessor"),pa=c(),I=a("div"),T(ko.$$.fragment),Li=c(),Ss=a("p"),Oi=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Gi=c(),ge=a("p"),wn=a("a"),Wi=n("Speech2TextProcessor"),Ui=n(" offers all the functionalities of "),Sn=a("a"),Hi=n("Speech2TextFeatureExtractor"),Bi=n(` and
`),$n=a("a"),Ri=n("Speech2TextTokenizer"),Vi=n(". See the "),xo=a("a"),$s=a("strong"),Ji=n("call"),Ki=n("()"),Yi=n(" and "),En=a("a"),Xi=n("decode()"),Qi=n(` for more
information.`),Zi=c(),Pt=a("div"),T(bo.$$.fragment),ed=c(),Oe=a("p"),td=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=a("a"),Es=a("strong"),od=n("call"),nd=n("()"),sd=n(` and returns its output. If used in the context
`),zn=a("a"),ad=n("as_target_processor()"),rd=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=a("a"),zs=a("strong"),id=n("call"),dd=n("()"),cd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ld=c(),Re=a("div"),T(So.$$.fragment),hd=c(),qs=a("p"),pd=n("Instantiate a processor associated with a pretrained model."),md=c(),T(jt.$$.fragment),fd=c(),Ve=a("div"),T($o.$$.fragment),ud=c(),Eo=a("p"),_d=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),qn=a("a"),gd=n("from_pretrained()"),Td=n(" method."),vd=c(),T(Ct.$$.fragment),kd=c(),Mt=a("div"),T(zo.$$.fragment),xd=c(),qo=a("p"),bd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=a("a"),yd=n("batch_decode()"),wd=n(`. Please
refer to the docstring of this method for more information.`),Sd=c(),At=a("div"),T(Fo.$$.fragment),$d=c(),Po=a("p"),Ed=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Pn=a("a"),zd=n("decode()"),qd=n(`. Please refer
to the docstring of this method for more information.`),Fd=c(),It=a("div"),T(jo.$$.fragment),Pd=c(),Fs=a("p"),jd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),ma=c(),ut=a("h2"),Dt=a("a"),Ps=a("span"),T(Co.$$.fragment),Cd=c(),js=a("span"),Md=n("Speech2TextModel"),fa=c(),we=a("div"),T(Mo.$$.fragment),Ad=c(),Ao=a("p"),Id=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=a("a"),Dd=n("PreTrainedModel"),Nd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ld=c(),Io=a("p"),Od=n("This model is also a PyTorch "),Do=a("a"),Gd=n("torch.nn.Module"),Wd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ud=c(),Te=a("div"),T(No.$$.fragment),Hd=c(),_t=a("p"),Bd=n("The "),Cn=a("a"),Rd=n("Speech2TextModel"),Vd=n(" forward method, overrides the "),Cs=a("code"),Jd=n("__call__"),Kd=n(" special method."),Yd=c(),T(Nt.$$.fragment),Xd=c(),Ms=a("p"),Qd=n("Example:"),Zd=c(),T(Lo.$$.fragment),ua=c(),gt=a("h2"),Lt=a("a"),As=a("span"),T(Oo.$$.fragment),ec=c(),Is=a("span"),tc=n("Speech2TextForConditionalGeneration"),_a=c(),Se=a("div"),T(Go.$$.fragment),oc=c(),Wo=a("p"),nc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a("a"),sc=n("PreTrainedModel"),ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc=c(),Uo=a("p"),ic=n("This model is also a PyTorch "),Ho=a("a"),dc=n("torch.nn.Module"),cc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=c(),ve=a("div"),T(Bo.$$.fragment),hc=c(),Tt=a("p"),pc=n("The "),An=a("a"),mc=n("Speech2TextForConditionalGeneration"),fc=n(" forward method, overrides the "),Ds=a("code"),uc=n("__call__"),_c=n(" special method."),gc=c(),T(Ot.$$.fragment),Tc=c(),Ns=a("p"),vc=n("Example:"),kc=c(),T(Ro.$$.fragment),ga=c(),vt=a("h2"),Gt=a("a"),Ls=a("span"),T(Vo.$$.fragment),xc=c(),Os=a("span"),bc=n("TFSpeech2TextModel"),Ta=c(),me=a("div"),T(Jo.$$.fragment),yc=c(),Ko=a("p"),wc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=a("a"),Sc=n("TFPreTrainedModel"),$c=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=c(),Yo=a("p"),zc=n("This model is also a "),Xo=a("a"),qc=n("tf.keras.Model"),Fc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pc=c(),T(Wt.$$.fragment),jc=c(),ke=a("div"),T(Qo.$$.fragment),Cc=c(),kt=a("p"),Mc=n("The "),Dn=a("a"),Ac=n("TFSpeech2TextModel"),Ic=n(" forward method, overrides the "),Gs=a("code"),Dc=n("__call__"),Nc=n(" special method."),Lc=c(),T(Ut.$$.fragment),Oc=c(),Ws=a("p"),Gc=n("Example:"),Wc=c(),T(Zo.$$.fragment),va=c(),xt=a("h2"),Ht=a("a"),Us=a("span"),T(en.$$.fragment),Uc=c(),Hs=a("span"),Hc=n("TFSpeech2TextForConditionalGeneration"),ka=c(),fe=a("div"),T(tn.$$.fragment),Bc=c(),on=a("p"),Rc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=a("a"),Vc=n("TFPreTrainedModel"),Jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc=c(),nn=a("p"),Yc=n("This model is also a "),sn=a("a"),Xc=n("tf.keras.Model"),Qc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zc=c(),T(Bt.$$.fragment),el=c(),xe=a("div"),T(an.$$.fragment),tl=c(),bt=a("p"),ol=n("The "),Ln=a("a"),nl=n("TFSpeech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Bs=a("code"),al=n("__call__"),rl=n(" special method."),il=c(),T(Rt.$$.fragment),dl=c(),Rs=a("p"),cl=n("Example:"),ll=c(),T(rn.$$.fragment),this.h()},l(o){const m=up('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),$=l(o),u=r(o,"H1",{class:!0});var dn=i(u);_=r(dn,"A",{id:!0,class:!0,href:!0});var Vs=i(_);S=r(Vs,"SPAN",{});var Js=i(S);v(g.$$.fragment,Js),Js.forEach(t),Vs.forEach(t),w=l(dn),E=r(dn,"SPAN",{});var Ks=i(E);A=s(Ks,"Speech2Text"),Ks.forEach(t),dn.forEach(t),q=l(o),z=r(o,"H2",{class:!0});var cn=i(z);N=r(cn,"A",{id:!0,class:!0,href:!0});var Ys=i(N);R=r(Ys,"SPAN",{});var Xs=i(R);v(ee.$$.fragment,Xs),Xs.forEach(t),Ys.forEach(t),Fe=l(cn),V=r(cn,"SPAN",{});var Qs=i(V);Pe=s(Qs,"Overview"),Qs.forEach(t),cn.forEach(t),$e=l(o),M=r(o,"P",{});var Je=i(M);J=s(Je,"The Speech2Text model was proposed in "),te=r(Je,"A",{href:!0,rel:!0});var ul=i(te);ye=s(ul,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),ul.forEach(t),j=s(Je,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),C=r(Je,"A",{href:!0,rel:!0});var _l=i(C);je=s(_l,"LibriSpeech"),_l.forEach(t),oe=s(Je,", "),ne=r(Je,"A",{href:!0,rel:!0});var gl=i(ne);Ce=s(gl,"CoVoST 2"),gl.forEach(t),se=s(Je,", "),ae=r(Je,"A",{href:!0,rel:!0});var Tl=i(ae);Me=s(Tl,"MuST-C"),Tl.forEach(t),O=s(Je,"."),Je.forEach(t),Ee=l(o),L=r(o,"P",{});var On=i(L);Ae=s(On,"This model was contributed by "),re=r(On,"A",{href:!0,rel:!0});var vl=i(re);ie=s(vl,"valhalla"),vl.forEach(t),Ie=s(On,". The original code can be found "),de=r(On,"A",{href:!0,rel:!0});var kl=i(de);K=s(kl,"here"),kl.forEach(t),De=s(On,"."),On.forEach(t),Z=l(o),Y=r(o,"H2",{class:!0});var ba=i(Y);f=r(ba,"A",{id:!0,class:!0,href:!0});var xl=i(f);F=r(xl,"SPAN",{});var bl=i(F);v(X.$$.fragment,bl),bl.forEach(t),xl.forEach(t),st=l(ba),Ne=r(ba,"SPAN",{});var yl=i(Ne);Q=s(yl,"Inference"),yl.forEach(t),ba.forEach(t),Ue=l(o),_e=r(o,"P",{});var ya=i(_e);at=s(ya,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=r(ya,"CODE",{});var wl=i(W);ce=s(wl,"generate()"),wl.forEach(t),rt=s(ya," method can be used for inference."),ya.forEach(t),He=l(o),P=r(o,"P",{});var Ke=i(P);it=s(Ke,"The "),ze=r(Ke,"A",{href:!0});var Sl=i(ze);Le=s(Sl,"Speech2TextFeatureExtractor"),Sl.forEach(t),dt=s(Ke,` class is responsible for extracting the log-mel filter-bank
features. The `),hn=r(Ke,"A",{href:!0});var $l=i(hn);tr=s($l,"Speech2TextProcessor"),$l.forEach(t),or=s(Ke," wraps "),pn=r(Ke,"A",{href:!0});var El=i(pn);nr=s(El,"Speech2TextFeatureExtractor"),El.forEach(t),sr=s(Ke,` and
`),mn=r(Ke,"A",{href:!0});var zl=i(mn);ar=s(zl,"Speech2TextTokenizer"),zl.forEach(t),rr=s(Ke,` into a single instance to both extract the input features and decode the
predicted token ids.`),Ke.forEach(t),Zs=l(o),U=r(o,"P",{});var ue=i(U);ir=s(ue,"The feature extractor depends on "),Yn=r(ue,"CODE",{});var ql=i(Yn);dr=s(ql,"torchaudio"),ql.forEach(t),cr=s(ue," and the tokenizer depends on "),Xn=r(ue,"CODE",{});var Fl=i(Xn);lr=s(Fl,"sentencepiece"),Fl.forEach(t),hr=s(ue,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r(ue,"CODE",{});var Pl=i(Qn);pr=s(Pl,'pip install transformers"[speech, sentencepiece]"'),Pl.forEach(t),mr=s(ue," or install the packages seperately with "),Zn=r(ue,"CODE",{});var jl=i(Zn);fr=s(jl,"pip install torchaudio sentencepiece"),jl.forEach(t),ur=s(ue,". Also "),es=r(ue,"CODE",{});var Cl=i(es);_r=s(Cl,"torchaudio"),Cl.forEach(t),gr=s(ue," requires the development version of the "),Xt=r(ue,"A",{href:!0,rel:!0});var Ml=i(Xt);Tr=s(Ml,"libsndfile"),Ml.forEach(t),vr=s(ue,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r(ue,"CODE",{});var Al=i(ts);kr=s(Al,"apt install libsndfile1-dev"),Al.forEach(t),ue.forEach(t),ea=l(o),fn=r(o,"UL",{});var Il=i(fn);os=r(Il,"LI",{});var Dl=i(os);xr=s(Dl,"ASR and Speech Translation"),Dl.forEach(t),Il.forEach(t),ta=l(o),v(Qt.$$.fragment,o),oa=l(o),un=r(o,"UL",{});var Nl=i(un);Zt=r(Nl,"LI",{});var wa=i(Zt);ns=r(wa,"P",{});var Ll=i(ns);br=s(Ll,"Multilingual speech translation"),Ll.forEach(t),yr=l(wa),le=r(wa,"P",{});var qe=i(le);wr=s(qe,"For multilingual speech translation models, "),ss=r(qe,"CODE",{});var Ol=i(ss);Sr=s(Ol,"eos_token_id"),Ol.forEach(t),$r=s(qe," is used as the "),as=r(qe,"CODE",{});var Gl=i(as);Er=s(Gl,"decoder_start_token_id"),Gl.forEach(t),zr=s(qe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=r(qe,"CODE",{});var Wl=i(rs);qr=s(Wl,"forced_bos_token_id"),Wl.forEach(t),Fr=s(qe," parameter to the "),is=r(qe,"CODE",{});var Ul=i(is);Pr=s(Ul,"generate()"),Ul.forEach(t),jr=s(qe,` method. The following
example shows how to transate English speech to French text using the `),ds=r(qe,"EM",{});var Hl=i(ds);Cr=s(Hl,"facebook/s2t-medium-mustc-multilingual-st"),Hl.forEach(t),Mr=s(qe,`
checkpoint.`),qe.forEach(t),wa.forEach(t),Nl.forEach(t),na=l(o),v(eo.$$.fragment,o),sa=l(o),yt=r(o,"P",{});var Sa=i(yt);Ar=s(Sa,"See the "),to=r(Sa,"A",{href:!0,rel:!0});var Bl=i(to);Ir=s(Bl,"model hub"),Bl.forEach(t),Dr=s(Sa," to look for Speech2Text checkpoints."),Sa.forEach(t),aa=l(o),ct=r(o,"H2",{class:!0});var $a=i(ct);wt=r($a,"A",{id:!0,class:!0,href:!0});var Rl=i(wt);cs=r(Rl,"SPAN",{});var Vl=i(cs);v(oo.$$.fragment,Vl),Vl.forEach(t),Rl.forEach(t),Nr=l($a),ls=r($a,"SPAN",{});var Jl=i(ls);Lr=s(Jl,"Speech2TextConfig"),Jl.forEach(t),$a.forEach(t),ra=l(o),he=r(o,"DIV",{class:!0});var Ye=i(he);v(no.$$.fragment,Ye),Or=l(Ye),lt=r(Ye,"P",{});var Gn=i(lt);Gr=s(Gn,"This is the configuration class to store the configuration of a "),_n=r(Gn,"A",{href:!0});var Kl=i(_n);Wr=s(Kl,"Speech2TextModel"),Kl.forEach(t),Ur=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),so=r(Gn,"A",{href:!0,rel:!0});var Yl=i(so);Hr=s(Yl,"facebook/s2t-small-librispeech-asr"),Yl.forEach(t),Br=s(Gn," architecture."),Gn.forEach(t),Rr=l(Ye),ht=r(Ye,"P",{});var Wn=i(ht);Vr=s(Wn,"Configuration objects inherit from "),gn=r(Wn,"A",{href:!0});var Xl=i(gn);Jr=s(Xl,"PretrainedConfig"),Xl.forEach(t),Kr=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),Tn=r(Wn,"A",{href:!0});var Ql=i(Tn);Yr=s(Ql,"PretrainedConfig"),Ql.forEach(t),Xr=s(Wn," for more information."),Wn.forEach(t),Qr=l(Ye),hs=r(Ye,"P",{});var Zl=i(hs);Zr=s(Zl,"Example:"),Zl.forEach(t),ei=l(Ye),v(ao.$$.fragment,Ye),Ye.forEach(t),ia=l(o),pt=r(o,"H2",{class:!0});var Ea=i(pt);St=r(Ea,"A",{id:!0,class:!0,href:!0});var eh=i(St);ps=r(eh,"SPAN",{});var th=i(ps);v(ro.$$.fragment,th),th.forEach(t),eh.forEach(t),ti=l(Ea),ms=r(Ea,"SPAN",{});var oh=i(ms);oi=s(oh,"Speech2TextTokenizer"),oh.forEach(t),Ea.forEach(t),da=l(o),H=r(o,"DIV",{class:!0});var be=i(H);v(io.$$.fragment,be),ni=l(be),fs=r(be,"P",{});var nh=i(fs);si=s(nh,"Construct an Speech2Text tokenizer."),nh.forEach(t),ai=l(be),co=r(be,"P",{});var za=i(co);ri=s(za,"This tokenizer inherits from "),vn=r(za,"A",{href:!0});var sh=i(vn);ii=s(sh,"PreTrainedTokenizer"),sh.forEach(t),di=s(za,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),za.forEach(t),ci=l(be),$t=r(be,"DIV",{class:!0});var qa=i($t);v(lo.$$.fragment,qa),li=l(qa),us=r(qa,"P",{});var ah=i(us);hi=s(ah,"Build model inputs from a sequence by appending eos_token_id."),ah.forEach(t),qa.forEach(t),pi=l(be),Et=r(be,"DIV",{class:!0});var Fa=i(Et);v(ho.$$.fragment,Fa),mi=l(Fa),po=r(Fa,"P",{});var Pa=i(po);fi=s(Pa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_s=r(Pa,"CODE",{});var rh=i(_s);ui=s(rh,"prepare_for_model"),rh.forEach(t),_i=s(Pa," method."),Pa.forEach(t),Fa.forEach(t),gi=l(be),Be=r(be,"DIV",{class:!0});var Un=i(Be);v(mo.$$.fragment,Un),Ti=l(Un),kn=r(Un,"P",{});var hl=i(kn);vi=s(hl,"Create the token type IDs corresponding to the sequences passed. "),xn=r(hl,"A",{href:!0});var ih=i(xn);ki=s(ih,`What are token type
IDs?`),ih.forEach(t),hl.forEach(t),xi=l(Un),gs=r(Un,"P",{});var dh=i(gs);bi=s(dh,"Should be overridden in a subclass if the model has a special way of building those."),dh.forEach(t),Un.forEach(t),yi=l(be),bn=r(be,"DIV",{class:!0});var ch=i(bn);v(fo.$$.fragment,ch),ch.forEach(t),be.forEach(t),ca=l(o),mt=r(o,"H2",{class:!0});var ja=i(mt);zt=r(ja,"A",{id:!0,class:!0,href:!0});var lh=i(zt);Ts=r(lh,"SPAN",{});var hh=i(Ts);v(uo.$$.fragment,hh),hh.forEach(t),lh.forEach(t),wi=l(ja),vs=r(ja,"SPAN",{});var ph=i(vs);Si=s(ph,"Speech2TextFeatureExtractor"),ph.forEach(t),ja.forEach(t),la=l(o),pe=r(o,"DIV",{class:!0});var Xe=i(pe);v(_o.$$.fragment,Xe),$i=l(Xe),ks=r(Xe,"P",{});var mh=i(ks);Ei=s(mh,"Constructs a Speech2Text feature extractor."),mh.forEach(t),zi=l(Xe),go=r(Xe,"P",{});var Ca=i(go);qi=s(Ca,"This feature extractor inherits from "),yn=r(Ca,"A",{href:!0});var fh=i(yn);Fi=s(fh,"Speech2TextFeatureExtractor"),fh.forEach(t),Pi=s(Ca,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ca.forEach(t),ji=l(Xe),xs=r(Xe,"P",{});var uh=i(xs);Ci=s(uh,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),uh.forEach(t),Mi=l(Xe),qt=r(Xe,"DIV",{class:!0});var Ma=i(qt);v(To.$$.fragment,Ma),Ai=l(Ma),bs=r(Ma,"P",{});var _h=i(bs);Ii=s(_h,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),_h.forEach(t),Ma.forEach(t),Xe.forEach(t),ha=l(o),ft=r(o,"H2",{class:!0});var Aa=i(ft);Ft=r(Aa,"A",{id:!0,class:!0,href:!0});var gh=i(Ft);ys=r(gh,"SPAN",{});var Th=i(ys);v(vo.$$.fragment,Th),Th.forEach(t),gh.forEach(t),Di=l(Aa),ws=r(Aa,"SPAN",{});var vh=i(ws);Ni=s(vh,"Speech2TextProcessor"),vh.forEach(t),Aa.forEach(t),pa=l(o),I=r(o,"DIV",{class:!0});var B=i(I);v(ko.$$.fragment,B),Li=l(B),Ss=r(B,"P",{});var kh=i(Ss);Oi=s(kh,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),kh.forEach(t),Gi=l(B),ge=r(B,"P",{});var Ge=i(ge);wn=r(Ge,"A",{href:!0});var xh=i(wn);Wi=s(xh,"Speech2TextProcessor"),xh.forEach(t),Ui=s(Ge," offers all the functionalities of "),Sn=r(Ge,"A",{href:!0});var bh=i(Sn);Hi=s(bh,"Speech2TextFeatureExtractor"),bh.forEach(t),Bi=s(Ge,` and
`),$n=r(Ge,"A",{href:!0});var yh=i($n);Ri=s(yh,"Speech2TextTokenizer"),yh.forEach(t),Vi=s(Ge,". See the "),xo=r(Ge,"A",{href:!0});var pl=i(xo);$s=r(pl,"STRONG",{});var wh=i($s);Ji=s(wh,"call"),wh.forEach(t),Ki=s(pl,"()"),pl.forEach(t),Yi=s(Ge," and "),En=r(Ge,"A",{href:!0});var Sh=i(En);Xi=s(Sh,"decode()"),Sh.forEach(t),Qi=s(Ge,` for more
information.`),Ge.forEach(t),Zi=l(B),Pt=r(B,"DIV",{class:!0});var Ia=i(Pt);v(bo.$$.fragment,Ia),ed=l(Ia),Oe=r(Ia,"P",{});var Vt=i(Oe);td=s(Vt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),yo=r(Vt,"A",{href:!0});var ml=i(yo);Es=r(ml,"STRONG",{});var $h=i(Es);od=s($h,"call"),$h.forEach(t),nd=s(ml,"()"),ml.forEach(t),sd=s(Vt,` and returns its output. If used in the context
`),zn=r(Vt,"A",{href:!0});var Eh=i(zn);ad=s(Eh,"as_target_processor()"),Eh.forEach(t),rd=s(Vt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),wo=r(Vt,"A",{href:!0});var fl=i(wo);zs=r(fl,"STRONG",{});var zh=i(zs);id=s(zh,"call"),zh.forEach(t),dd=s(fl,"()"),fl.forEach(t),cd=s(Vt,`. Please refer to the doctsring of the above two methods for more
information.`),Vt.forEach(t),Ia.forEach(t),ld=l(B),Re=r(B,"DIV",{class:!0});var Hn=i(Re);v(So.$$.fragment,Hn),hd=l(Hn),qs=r(Hn,"P",{});var qh=i(qs);pd=s(qh,"Instantiate a processor associated with a pretrained model."),qh.forEach(t),md=l(Hn),v(jt.$$.fragment,Hn),Hn.forEach(t),fd=l(B),Ve=r(B,"DIV",{class:!0});var Bn=i(Ve);v($o.$$.fragment,Bn),ud=l(Bn),Eo=r(Bn,"P",{});var Da=i(Eo);_d=s(Da,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),qn=r(Da,"A",{href:!0});var Fh=i(qn);gd=s(Fh,"from_pretrained()"),Fh.forEach(t),Td=s(Da," method."),Da.forEach(t),vd=l(Bn),v(Ct.$$.fragment,Bn),Bn.forEach(t),kd=l(B),Mt=r(B,"DIV",{class:!0});var Na=i(Mt);v(zo.$$.fragment,Na),xd=l(Na),qo=r(Na,"P",{});var La=i(qo);bd=s(La,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=r(La,"A",{href:!0});var Ph=i(Fn);yd=s(Ph,"batch_decode()"),Ph.forEach(t),wd=s(La,`. Please
refer to the docstring of this method for more information.`),La.forEach(t),Na.forEach(t),Sd=l(B),At=r(B,"DIV",{class:!0});var Oa=i(At);v(Fo.$$.fragment,Oa),$d=l(Oa),Po=r(Oa,"P",{});var Ga=i(Po);Ed=s(Ga,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Pn=r(Ga,"A",{href:!0});var jh=i(Pn);zd=s(jh,"decode()"),jh.forEach(t),qd=s(Ga,`. Please refer
to the docstring of this method for more information.`),Ga.forEach(t),Oa.forEach(t),Fd=l(B),It=r(B,"DIV",{class:!0});var Wa=i(It);v(jo.$$.fragment,Wa),Pd=l(Wa),Fs=r(Wa,"P",{});var Ch=i(Fs);jd=s(Ch,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Ch.forEach(t),Wa.forEach(t),B.forEach(t),ma=l(o),ut=r(o,"H2",{class:!0});var Ua=i(ut);Dt=r(Ua,"A",{id:!0,class:!0,href:!0});var Mh=i(Dt);Ps=r(Mh,"SPAN",{});var Ah=i(Ps);v(Co.$$.fragment,Ah),Ah.forEach(t),Mh.forEach(t),Cd=l(Ua),js=r(Ua,"SPAN",{});var Ih=i(js);Md=s(Ih,"Speech2TextModel"),Ih.forEach(t),Ua.forEach(t),fa=l(o),we=r(o,"DIV",{class:!0});var Jt=i(we);v(Mo.$$.fragment,Jt),Ad=l(Jt),Ao=r(Jt,"P",{});var Ha=i(Ao);Id=s(Ha,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=r(Ha,"A",{href:!0});var Dh=i(jn);Dd=s(Dh,"PreTrainedModel"),Dh.forEach(t),Nd=s(Ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ha.forEach(t),Ld=l(Jt),Io=r(Jt,"P",{});var Ba=i(Io);Od=s(Ba,"This model is also a PyTorch "),Do=r(Ba,"A",{href:!0,rel:!0});var Nh=i(Do);Gd=s(Nh,"torch.nn.Module"),Nh.forEach(t),Wd=s(Ba,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ba.forEach(t),Ud=l(Jt),Te=r(Jt,"DIV",{class:!0});var Qe=i(Te);v(No.$$.fragment,Qe),Hd=l(Qe),_t=r(Qe,"P",{});var Rn=i(_t);Bd=s(Rn,"The "),Cn=r(Rn,"A",{href:!0});var Lh=i(Cn);Rd=s(Lh,"Speech2TextModel"),Lh.forEach(t),Vd=s(Rn," forward method, overrides the "),Cs=r(Rn,"CODE",{});var Oh=i(Cs);Jd=s(Oh,"__call__"),Oh.forEach(t),Kd=s(Rn," special method."),Rn.forEach(t),Yd=l(Qe),v(Nt.$$.fragment,Qe),Xd=l(Qe),Ms=r(Qe,"P",{});var Gh=i(Ms);Qd=s(Gh,"Example:"),Gh.forEach(t),Zd=l(Qe),v(Lo.$$.fragment,Qe),Qe.forEach(t),Jt.forEach(t),ua=l(o),gt=r(o,"H2",{class:!0});var Ra=i(gt);Lt=r(Ra,"A",{id:!0,class:!0,href:!0});var Wh=i(Lt);As=r(Wh,"SPAN",{});var Uh=i(As);v(Oo.$$.fragment,Uh),Uh.forEach(t),Wh.forEach(t),ec=l(Ra),Is=r(Ra,"SPAN",{});var Hh=i(Is);tc=s(Hh,"Speech2TextForConditionalGeneration"),Hh.forEach(t),Ra.forEach(t),_a=l(o),Se=r(o,"DIV",{class:!0});var Kt=i(Se);v(Go.$$.fragment,Kt),oc=l(Kt),Wo=r(Kt,"P",{});var Va=i(Wo);nc=s(Va,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r(Va,"A",{href:!0});var Bh=i(Mn);sc=s(Bh,"PreTrainedModel"),Bh.forEach(t),ac=s(Va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Va.forEach(t),rc=l(Kt),Uo=r(Kt,"P",{});var Ja=i(Uo);ic=s(Ja,"This model is also a PyTorch "),Ho=r(Ja,"A",{href:!0,rel:!0});var Rh=i(Ho);dc=s(Rh,"torch.nn.Module"),Rh.forEach(t),cc=s(Ja,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ja.forEach(t),lc=l(Kt),ve=r(Kt,"DIV",{class:!0});var Ze=i(ve);v(Bo.$$.fragment,Ze),hc=l(Ze),Tt=r(Ze,"P",{});var Vn=i(Tt);pc=s(Vn,"The "),An=r(Vn,"A",{href:!0});var Vh=i(An);mc=s(Vh,"Speech2TextForConditionalGeneration"),Vh.forEach(t),fc=s(Vn," forward method, overrides the "),Ds=r(Vn,"CODE",{});var Jh=i(Ds);uc=s(Jh,"__call__"),Jh.forEach(t),_c=s(Vn," special method."),Vn.forEach(t),gc=l(Ze),v(Ot.$$.fragment,Ze),Tc=l(Ze),Ns=r(Ze,"P",{});var Kh=i(Ns);vc=s(Kh,"Example:"),Kh.forEach(t),kc=l(Ze),v(Ro.$$.fragment,Ze),Ze.forEach(t),Kt.forEach(t),ga=l(o),vt=r(o,"H2",{class:!0});var Ka=i(vt);Gt=r(Ka,"A",{id:!0,class:!0,href:!0});var Yh=i(Gt);Ls=r(Yh,"SPAN",{});var Xh=i(Ls);v(Vo.$$.fragment,Xh),Xh.forEach(t),Yh.forEach(t),xc=l(Ka),Os=r(Ka,"SPAN",{});var Qh=i(Os);bc=s(Qh,"TFSpeech2TextModel"),Qh.forEach(t),Ka.forEach(t),Ta=l(o),me=r(o,"DIV",{class:!0});var et=i(me);v(Jo.$$.fragment,et),yc=l(et),Ko=r(et,"P",{});var Ya=i(Ko);wc=s(Ya,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=r(Ya,"A",{href:!0});var Zh=i(In);Sc=s(Zh,"TFPreTrainedModel"),Zh.forEach(t),$c=s(Ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya.forEach(t),Ec=l(et),Yo=r(et,"P",{});var Xa=i(Yo);zc=s(Xa,"This model is also a "),Xo=r(Xa,"A",{href:!0,rel:!0});var ep=i(Xo);qc=s(ep,"tf.keras.Model"),ep.forEach(t),Fc=s(Xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),Pc=l(et),v(Wt.$$.fragment,et),jc=l(et),ke=r(et,"DIV",{class:!0});var tt=i(ke);v(Qo.$$.fragment,tt),Cc=l(tt),kt=r(tt,"P",{});var Jn=i(kt);Mc=s(Jn,"The "),Dn=r(Jn,"A",{href:!0});var tp=i(Dn);Ac=s(tp,"TFSpeech2TextModel"),tp.forEach(t),Ic=s(Jn," forward method, overrides the "),Gs=r(Jn,"CODE",{});var op=i(Gs);Dc=s(op,"__call__"),op.forEach(t),Nc=s(Jn," special method."),Jn.forEach(t),Lc=l(tt),v(Ut.$$.fragment,tt),Oc=l(tt),Ws=r(tt,"P",{});var np=i(Ws);Gc=s(np,"Example:"),np.forEach(t),Wc=l(tt),v(Zo.$$.fragment,tt),tt.forEach(t),et.forEach(t),va=l(o),xt=r(o,"H2",{class:!0});var Qa=i(xt);Ht=r(Qa,"A",{id:!0,class:!0,href:!0});var sp=i(Ht);Us=r(sp,"SPAN",{});var ap=i(Us);v(en.$$.fragment,ap),ap.forEach(t),sp.forEach(t),Uc=l(Qa),Hs=r(Qa,"SPAN",{});var rp=i(Hs);Hc=s(rp,"TFSpeech2TextForConditionalGeneration"),rp.forEach(t),Qa.forEach(t),ka=l(o),fe=r(o,"DIV",{class:!0});var ot=i(fe);v(tn.$$.fragment,ot),Bc=l(ot),on=r(ot,"P",{});var Za=i(on);Rc=s(Za,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=r(Za,"A",{href:!0});var ip=i(Nn);Vc=s(ip,"TFPreTrainedModel"),ip.forEach(t),Jc=s(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),Kc=l(ot),nn=r(ot,"P",{});var er=i(nn);Yc=s(er,"This model is also a "),sn=r(er,"A",{href:!0,rel:!0});var dp=i(sn);Xc=s(dp,"tf.keras.Model"),dp.forEach(t),Qc=s(er,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),er.forEach(t),Zc=l(ot),v(Bt.$$.fragment,ot),el=l(ot),xe=r(ot,"DIV",{class:!0});var nt=i(xe);v(an.$$.fragment,nt),tl=l(nt),bt=r(nt,"P",{});var Kn=i(bt);ol=s(Kn,"The "),Ln=r(Kn,"A",{href:!0});var cp=i(Ln);nl=s(cp,"TFSpeech2TextForConditionalGeneration"),cp.forEach(t),sl=s(Kn," forward method, overrides the "),Bs=r(Kn,"CODE",{});var lp=i(Bs);al=s(lp,"__call__"),lp.forEach(t),rl=s(Kn," special method."),Kn.forEach(t),il=l(nt),v(Rt.$$.fragment,nt),dl=l(nt),Rs=r(nt,"P",{});var hp=i(Rs);cl=s(hp,"Example:"),hp.forEach(t),ll=l(nt),v(rn.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Sp)),d(_,"id","speech2text"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#speech2text"),d(u,"class","relative group"),d(N,"id","overview"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#overview"),d(z,"class","relative group"),d(te,"href","https://arxiv.org/abs/2010.05171"),d(te,"rel","nofollow"),d(C,"href","http://www.openslr.org/12"),d(C,"rel","nofollow"),d(ne,"href","https://github.com/facebookresearch/covost"),d(ne,"rel","nofollow"),d(ae,"href","https://ict.fbk.eu/must-c/"),d(ae,"rel","nofollow"),d(re,"href","https://huggingface.co/valhalla"),d(re,"rel","nofollow"),d(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),d(de,"rel","nofollow"),d(f,"id","inference"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#inference"),d(Y,"class","relative group"),d(ze,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(hn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(pn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(mn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(Xt,"href","http://www.mega-nerd.com/libsndfile/"),d(Xt,"rel","nofollow"),d(to,"href","https://huggingface.co/models?filter=speech_to_text"),d(to,"rel","nofollow"),d(wt,"id","transformers.Speech2TextConfig"),d(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(wt,"href","#transformers.Speech2TextConfig"),d(ct,"class","relative group"),d(_n,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(so,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),d(so,"rel","nofollow"),d(gn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(Tn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(he,"class","docstring"),d(St,"id","transformers.Speech2TextTokenizer"),d(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(St,"href","#transformers.Speech2TextTokenizer"),d(pt,"class","relative group"),d(vn,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d($t,"class","docstring"),d(Et,"class","docstring"),d(xn,"href","../glossary#token-type-ids"),d(Be,"class","docstring"),d(bn,"class","docstring"),d(H,"class","docstring"),d(zt,"id","transformers.Speech2TextFeatureExtractor"),d(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(zt,"href","#transformers.Speech2TextFeatureExtractor"),d(mt,"class","relative group"),d(yn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d(qt,"class","docstring"),d(pe,"class","docstring"),d(Ft,"id","transformers.Speech2TextProcessor"),d(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ft,"href","#transformers.Speech2TextProcessor"),d(ft,"class","relative group"),d(wn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),d(Sn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),d($n,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),d(xo,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),d(En,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),d(yo,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),d(zn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),d(wo,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),d(Pt,"class","docstring"),d(Re,"class","docstring"),d(qn,"href","/docs/transformers/master/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),d(Ve,"class","docstring"),d(Fn,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),d(Mt,"class","docstring"),d(Pn,"href","/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),d(At,"class","docstring"),d(It,"class","docstring"),d(I,"class","docstring"),d(Dt,"id","transformers.Speech2TextModel"),d(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Dt,"href","#transformers.Speech2TextModel"),d(ut,"class","relative group"),d(jn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Do,"rel","nofollow"),d(Cn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextModel"),d(Te,"class","docstring"),d(we,"class","docstring"),d(Lt,"id","transformers.Speech2TextForConditionalGeneration"),d(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Lt,"href","#transformers.Speech2TextForConditionalGeneration"),d(gt,"class","relative group"),d(Mn,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ho,"rel","nofollow"),d(An,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),d(ve,"class","docstring"),d(Se,"class","docstring"),d(Gt,"id","transformers.TFSpeech2TextModel"),d(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Gt,"href","#transformers.TFSpeech2TextModel"),d(vt,"class","relative group"),d(In,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xo,"rel","nofollow"),d(Dn,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),d(ke,"class","docstring"),d(me,"class","docstring"),d(Ht,"id","transformers.TFSpeech2TextForConditionalGeneration"),d(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ht,"href","#transformers.TFSpeech2TextForConditionalGeneration"),d(xt,"class","relative group"),d(Nn,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(sn,"rel","nofollow"),d(Ln,"href","/docs/transformers/master/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),d(xe,"class","docstring"),d(fe,"class","docstring")},m(o,m){e(document.head,h),p(o,$,m),p(o,u,m),e(u,_),e(_,S),k(g,S,null),e(u,w),e(u,E),e(E,A),p(o,q,m),p(o,z,m),e(z,N),e(N,R),k(ee,R,null),e(z,Fe),e(z,V),e(V,Pe),p(o,$e,m),p(o,M,m),e(M,J),e(M,te),e(te,ye),e(M,j),e(M,C),e(C,je),e(M,oe),e(M,ne),e(ne,Ce),e(M,se),e(M,ae),e(ae,Me),e(M,O),p(o,Ee,m),p(o,L,m),e(L,Ae),e(L,re),e(re,ie),e(L,Ie),e(L,de),e(de,K),e(L,De),p(o,Z,m),p(o,Y,m),e(Y,f),e(f,F),k(X,F,null),e(Y,st),e(Y,Ne),e(Ne,Q),p(o,Ue,m),p(o,_e,m),e(_e,at),e(_e,W),e(W,ce),e(_e,rt),p(o,He,m),p(o,P,m),e(P,it),e(P,ze),e(ze,Le),e(P,dt),e(P,hn),e(hn,tr),e(P,or),e(P,pn),e(pn,nr),e(P,sr),e(P,mn),e(mn,ar),e(P,rr),p(o,Zs,m),p(o,U,m),e(U,ir),e(U,Yn),e(Yn,dr),e(U,cr),e(U,Xn),e(Xn,lr),e(U,hr),e(U,Qn),e(Qn,pr),e(U,mr),e(U,Zn),e(Zn,fr),e(U,ur),e(U,es),e(es,_r),e(U,gr),e(U,Xt),e(Xt,Tr),e(U,vr),e(U,ts),e(ts,kr),p(o,ea,m),p(o,fn,m),e(fn,os),e(os,xr),p(o,ta,m),k(Qt,o,m),p(o,oa,m),p(o,un,m),e(un,Zt),e(Zt,ns),e(ns,br),e(Zt,yr),e(Zt,le),e(le,wr),e(le,ss),e(ss,Sr),e(le,$r),e(le,as),e(as,Er),e(le,zr),e(le,rs),e(rs,qr),e(le,Fr),e(le,is),e(is,Pr),e(le,jr),e(le,ds),e(ds,Cr),e(le,Mr),p(o,na,m),k(eo,o,m),p(o,sa,m),p(o,yt,m),e(yt,Ar),e(yt,to),e(to,Ir),e(yt,Dr),p(o,aa,m),p(o,ct,m),e(ct,wt),e(wt,cs),k(oo,cs,null),e(ct,Nr),e(ct,ls),e(ls,Lr),p(o,ra,m),p(o,he,m),k(no,he,null),e(he,Or),e(he,lt),e(lt,Gr),e(lt,_n),e(_n,Wr),e(lt,Ur),e(lt,so),e(so,Hr),e(lt,Br),e(he,Rr),e(he,ht),e(ht,Vr),e(ht,gn),e(gn,Jr),e(ht,Kr),e(ht,Tn),e(Tn,Yr),e(ht,Xr),e(he,Qr),e(he,hs),e(hs,Zr),e(he,ei),k(ao,he,null),p(o,ia,m),p(o,pt,m),e(pt,St),e(St,ps),k(ro,ps,null),e(pt,ti),e(pt,ms),e(ms,oi),p(o,da,m),p(o,H,m),k(io,H,null),e(H,ni),e(H,fs),e(fs,si),e(H,ai),e(H,co),e(co,ri),e(co,vn),e(vn,ii),e(co,di),e(H,ci),e(H,$t),k(lo,$t,null),e($t,li),e($t,us),e(us,hi),e(H,pi),e(H,Et),k(ho,Et,null),e(Et,mi),e(Et,po),e(po,fi),e(po,_s),e(_s,ui),e(po,_i),e(H,gi),e(H,Be),k(mo,Be,null),e(Be,Ti),e(Be,kn),e(kn,vi),e(kn,xn),e(xn,ki),e(Be,xi),e(Be,gs),e(gs,bi),e(H,yi),e(H,bn),k(fo,bn,null),p(o,ca,m),p(o,mt,m),e(mt,zt),e(zt,Ts),k(uo,Ts,null),e(mt,wi),e(mt,vs),e(vs,Si),p(o,la,m),p(o,pe,m),k(_o,pe,null),e(pe,$i),e(pe,ks),e(ks,Ei),e(pe,zi),e(pe,go),e(go,qi),e(go,yn),e(yn,Fi),e(go,Pi),e(pe,ji),e(pe,xs),e(xs,Ci),e(pe,Mi),e(pe,qt),k(To,qt,null),e(qt,Ai),e(qt,bs),e(bs,Ii),p(o,ha,m),p(o,ft,m),e(ft,Ft),e(Ft,ys),k(vo,ys,null),e(ft,Di),e(ft,ws),e(ws,Ni),p(o,pa,m),p(o,I,m),k(ko,I,null),e(I,Li),e(I,Ss),e(Ss,Oi),e(I,Gi),e(I,ge),e(ge,wn),e(wn,Wi),e(ge,Ui),e(ge,Sn),e(Sn,Hi),e(ge,Bi),e(ge,$n),e($n,Ri),e(ge,Vi),e(ge,xo),e(xo,$s),e($s,Ji),e(xo,Ki),e(ge,Yi),e(ge,En),e(En,Xi),e(ge,Qi),e(I,Zi),e(I,Pt),k(bo,Pt,null),e(Pt,ed),e(Pt,Oe),e(Oe,td),e(Oe,yo),e(yo,Es),e(Es,od),e(yo,nd),e(Oe,sd),e(Oe,zn),e(zn,ad),e(Oe,rd),e(Oe,wo),e(wo,zs),e(zs,id),e(wo,dd),e(Oe,cd),e(I,ld),e(I,Re),k(So,Re,null),e(Re,hd),e(Re,qs),e(qs,pd),e(Re,md),k(jt,Re,null),e(I,fd),e(I,Ve),k($o,Ve,null),e(Ve,ud),e(Ve,Eo),e(Eo,_d),e(Eo,qn),e(qn,gd),e(Eo,Td),e(Ve,vd),k(Ct,Ve,null),e(I,kd),e(I,Mt),k(zo,Mt,null),e(Mt,xd),e(Mt,qo),e(qo,bd),e(qo,Fn),e(Fn,yd),e(qo,wd),e(I,Sd),e(I,At),k(Fo,At,null),e(At,$d),e(At,Po),e(Po,Ed),e(Po,Pn),e(Pn,zd),e(Po,qd),e(I,Fd),e(I,It),k(jo,It,null),e(It,Pd),e(It,Fs),e(Fs,jd),p(o,ma,m),p(o,ut,m),e(ut,Dt),e(Dt,Ps),k(Co,Ps,null),e(ut,Cd),e(ut,js),e(js,Md),p(o,fa,m),p(o,we,m),k(Mo,we,null),e(we,Ad),e(we,Ao),e(Ao,Id),e(Ao,jn),e(jn,Dd),e(Ao,Nd),e(we,Ld),e(we,Io),e(Io,Od),e(Io,Do),e(Do,Gd),e(Io,Wd),e(we,Ud),e(we,Te),k(No,Te,null),e(Te,Hd),e(Te,_t),e(_t,Bd),e(_t,Cn),e(Cn,Rd),e(_t,Vd),e(_t,Cs),e(Cs,Jd),e(_t,Kd),e(Te,Yd),k(Nt,Te,null),e(Te,Xd),e(Te,Ms),e(Ms,Qd),e(Te,Zd),k(Lo,Te,null),p(o,ua,m),p(o,gt,m),e(gt,Lt),e(Lt,As),k(Oo,As,null),e(gt,ec),e(gt,Is),e(Is,tc),p(o,_a,m),p(o,Se,m),k(Go,Se,null),e(Se,oc),e(Se,Wo),e(Wo,nc),e(Wo,Mn),e(Mn,sc),e(Wo,ac),e(Se,rc),e(Se,Uo),e(Uo,ic),e(Uo,Ho),e(Ho,dc),e(Uo,cc),e(Se,lc),e(Se,ve),k(Bo,ve,null),e(ve,hc),e(ve,Tt),e(Tt,pc),e(Tt,An),e(An,mc),e(Tt,fc),e(Tt,Ds),e(Ds,uc),e(Tt,_c),e(ve,gc),k(Ot,ve,null),e(ve,Tc),e(ve,Ns),e(Ns,vc),e(ve,kc),k(Ro,ve,null),p(o,ga,m),p(o,vt,m),e(vt,Gt),e(Gt,Ls),k(Vo,Ls,null),e(vt,xc),e(vt,Os),e(Os,bc),p(o,Ta,m),p(o,me,m),k(Jo,me,null),e(me,yc),e(me,Ko),e(Ko,wc),e(Ko,In),e(In,Sc),e(Ko,$c),e(me,Ec),e(me,Yo),e(Yo,zc),e(Yo,Xo),e(Xo,qc),e(Yo,Fc),e(me,Pc),k(Wt,me,null),e(me,jc),e(me,ke),k(Qo,ke,null),e(ke,Cc),e(ke,kt),e(kt,Mc),e(kt,Dn),e(Dn,Ac),e(kt,Ic),e(kt,Gs),e(Gs,Dc),e(kt,Nc),e(ke,Lc),k(Ut,ke,null),e(ke,Oc),e(ke,Ws),e(Ws,Gc),e(ke,Wc),k(Zo,ke,null),p(o,va,m),p(o,xt,m),e(xt,Ht),e(Ht,Us),k(en,Us,null),e(xt,Uc),e(xt,Hs),e(Hs,Hc),p(o,ka,m),p(o,fe,m),k(tn,fe,null),e(fe,Bc),e(fe,on),e(on,Rc),e(on,Nn),e(Nn,Vc),e(on,Jc),e(fe,Kc),e(fe,nn),e(nn,Yc),e(nn,sn),e(sn,Xc),e(nn,Qc),e(fe,Zc),k(Bt,fe,null),e(fe,el),e(fe,xe),k(an,xe,null),e(xe,tl),e(xe,bt),e(bt,ol),e(bt,Ln),e(Ln,nl),e(bt,sl),e(bt,Bs),e(Bs,al),e(bt,rl),e(xe,il),k(Rt,xe,null),e(xe,dl),e(xe,Rs),e(Rs,cl),e(xe,ll),k(rn,xe,null),xa=!0},p(o,[m]){const dn={};m&2&&(dn.$$scope={dirty:m,ctx:o}),jt.$set(dn);const Vs={};m&2&&(Vs.$$scope={dirty:m,ctx:o}),Ct.$set(Vs);const Js={};m&2&&(Js.$$scope={dirty:m,ctx:o}),Nt.$set(Js);const Ks={};m&2&&(Ks.$$scope={dirty:m,ctx:o}),Ot.$set(Ks);const cn={};m&2&&(cn.$$scope={dirty:m,ctx:o}),Wt.$set(cn);const Ys={};m&2&&(Ys.$$scope={dirty:m,ctx:o}),Ut.$set(Ys);const Xs={};m&2&&(Xs.$$scope={dirty:m,ctx:o}),Bt.$set(Xs);const Qs={};m&2&&(Qs.$$scope={dirty:m,ctx:o}),Rt.$set(Qs)},i(o){xa||(x(g.$$.fragment,o),x(ee.$$.fragment,o),x(X.$$.fragment,o),x(Qt.$$.fragment,o),x(eo.$$.fragment,o),x(oo.$$.fragment,o),x(no.$$.fragment,o),x(ao.$$.fragment,o),x(ro.$$.fragment,o),x(io.$$.fragment,o),x(lo.$$.fragment,o),x(ho.$$.fragment,o),x(mo.$$.fragment,o),x(fo.$$.fragment,o),x(uo.$$.fragment,o),x(_o.$$.fragment,o),x(To.$$.fragment,o),x(vo.$$.fragment,o),x(ko.$$.fragment,o),x(bo.$$.fragment,o),x(So.$$.fragment,o),x(jt.$$.fragment,o),x($o.$$.fragment,o),x(Ct.$$.fragment,o),x(zo.$$.fragment,o),x(Fo.$$.fragment,o),x(jo.$$.fragment,o),x(Co.$$.fragment,o),x(Mo.$$.fragment,o),x(No.$$.fragment,o),x(Nt.$$.fragment,o),x(Lo.$$.fragment,o),x(Oo.$$.fragment,o),x(Go.$$.fragment,o),x(Bo.$$.fragment,o),x(Ot.$$.fragment,o),x(Ro.$$.fragment,o),x(Vo.$$.fragment,o),x(Jo.$$.fragment,o),x(Wt.$$.fragment,o),x(Qo.$$.fragment,o),x(Ut.$$.fragment,o),x(Zo.$$.fragment,o),x(en.$$.fragment,o),x(tn.$$.fragment,o),x(Bt.$$.fragment,o),x(an.$$.fragment,o),x(Rt.$$.fragment,o),x(rn.$$.fragment,o),xa=!0)},o(o){b(g.$$.fragment,o),b(ee.$$.fragment,o),b(X.$$.fragment,o),b(Qt.$$.fragment,o),b(eo.$$.fragment,o),b(oo.$$.fragment,o),b(no.$$.fragment,o),b(ao.$$.fragment,o),b(ro.$$.fragment,o),b(io.$$.fragment,o),b(lo.$$.fragment,o),b(ho.$$.fragment,o),b(mo.$$.fragment,o),b(fo.$$.fragment,o),b(uo.$$.fragment,o),b(_o.$$.fragment,o),b(To.$$.fragment,o),b(vo.$$.fragment,o),b(ko.$$.fragment,o),b(bo.$$.fragment,o),b(So.$$.fragment,o),b(jt.$$.fragment,o),b($o.$$.fragment,o),b(Ct.$$.fragment,o),b(zo.$$.fragment,o),b(Fo.$$.fragment,o),b(jo.$$.fragment,o),b(Co.$$.fragment,o),b(Mo.$$.fragment,o),b(No.$$.fragment,o),b(Nt.$$.fragment,o),b(Lo.$$.fragment,o),b(Oo.$$.fragment,o),b(Go.$$.fragment,o),b(Bo.$$.fragment,o),b(Ot.$$.fragment,o),b(Ro.$$.fragment,o),b(Vo.$$.fragment,o),b(Jo.$$.fragment,o),b(Wt.$$.fragment,o),b(Qo.$$.fragment,o),b(Ut.$$.fragment,o),b(Zo.$$.fragment,o),b(en.$$.fragment,o),b(tn.$$.fragment,o),b(Bt.$$.fragment,o),b(an.$$.fragment,o),b(Rt.$$.fragment,o),b(rn.$$.fragment,o),xa=!1},d(o){t(h),o&&t($),o&&t(u),y(g),o&&t(q),o&&t(z),y(ee),o&&t($e),o&&t(M),o&&t(Ee),o&&t(L),o&&t(Z),o&&t(Y),y(X),o&&t(Ue),o&&t(_e),o&&t(He),o&&t(P),o&&t(Zs),o&&t(U),o&&t(ea),o&&t(fn),o&&t(ta),y(Qt,o),o&&t(oa),o&&t(un),o&&t(na),y(eo,o),o&&t(sa),o&&t(yt),o&&t(aa),o&&t(ct),y(oo),o&&t(ra),o&&t(he),y(no),y(ao),o&&t(ia),o&&t(pt),y(ro),o&&t(da),o&&t(H),y(io),y(lo),y(ho),y(mo),y(fo),o&&t(ca),o&&t(mt),y(uo),o&&t(la),o&&t(pe),y(_o),y(To),o&&t(ha),o&&t(ft),y(vo),o&&t(pa),o&&t(I),y(ko),y(bo),y(So),y(jt),y($o),y(Ct),y(zo),y(Fo),y(jo),o&&t(ma),o&&t(ut),y(Co),o&&t(fa),o&&t(we),y(Mo),y(No),y(Nt),y(Lo),o&&t(ua),o&&t(gt),y(Oo),o&&t(_a),o&&t(Se),y(Go),y(Bo),y(Ot),y(Ro),o&&t(ga),o&&t(vt),y(Vo),o&&t(Ta),o&&t(me),y(Jo),y(Wt),y(Qo),y(Ut),y(Zo),o&&t(va),o&&t(xt),y(en),o&&t(ka),o&&t(fe),y(tn),y(Bt),y(an),y(Rt),y(rn)}}}const Sp={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function $p(G,h,$){let{fw:u}=h;return G.$$set=_=>{"fw"in _&&$(0,u=_.fw)},[u]}class Cp extends pp{constructor(h){super();mp(this,h,$p,wp,fp,{fw:0})}}export{Cp as default,Sp as metadata};
