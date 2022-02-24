import{S as Hf,i as Kf,s as Vf,e as n,k as i,w as _,t as s,L as Qf,c as a,d as t,m as l,a as r,x as g,h as d,b as c,J as e,g as p,y as b,q as k,o as v,B as y}from"../../chunks/vendor-9e2b328e.js";import{T as ho}from"../../chunks/Tip-76f97a76.js";import{D as P}from"../../chunks/Docstring-50fd6873.js";import{C as pt}from"../../chunks/CodeBlock-88e23343.js";import{I as he}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function Jf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Xf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Yf(D){let u,x,f,T,z,B,w,$,Ce,ue,E,ve,oe,je,ne,ae,Pe,$e,G,N,ye,R,q,C,Ne,Q,J,Ie,U,Ae,Oe,I,me,re,Fe,fe,H,Le,Ee,M,Se,W,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),$=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),E=n("p"),ve=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ae=n("code"),Pe=s("model(inputs)"),$e=s("."),G=i(),N=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),q=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Ie=s(" only and nothing else: "),U=n("code"),Ae=s("model(input_ids)"),Oe=i(),I=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Fe=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Le=s("model([input_ids, attention_mask, token_type_ids])"),Ee=i(),M=n("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var F=r(u);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),f=l(m),T=a(m,"UL",{});var Te=r(T);z=a(Te,"LI",{});var ht=r(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),$=a(Te,"LI",{});var Ve=r($);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),E=a(m,"P",{});var j=r(E);ve=d(j,"This second option is useful when using "),oe=a(j,"CODE",{});var _e=r(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ae=a(j,"CODE",{});var Ge=r(ae);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),$e=d(j,"."),j.forEach(t),G=l(m),N=a(m,"P",{});var we=r(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),q=a(m,"UL",{});var K=r(q);C=a(K,"LI",{});var V=r(C);Ne=d(V,"a single Tensor with "),Q=a(V,"CODE",{});var ut=r(Q);J=d(ut,"input_ids"),ut.forEach(t),Ie=d(V," only and nothing else: "),U=a(V,"CODE",{});var Qe=r(U);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Oe=l(K),I=a(K,"LI",{});var A=r(I);me=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(A,"CODE",{});var Be=r(re);Fe=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(A," or "),H=a(A,"CODE",{});var mt=r(H);Le=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),Ee=l(K),M=a(K,"LI",{});var se=r(M);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(se,"CODE",{});var ft=r(W);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,F){p(m,u,F),e(u,x),p(m,f,F),p(m,T,F),e(T,z),e(z,B),e(T,w),e(T,$),e($,Ce),p(m,ue,F),p(m,E,F),e(E,ve),e(E,oe),e(oe,je),e(E,ne),e(E,ae),e(ae,Pe),e(E,$e),p(m,G,F),p(m,N,F),e(N,ye),p(m,R,F),p(m,q,F),e(q,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Ie),e(C,U),e(U,Ae),e(q,Oe),e(q,I),e(I,me),e(I,re),e(re,Fe),e(I,fe),e(I,H),e(H,Le),e(q,Ee),e(q,M),e(M,Se),e(M,W),e(W,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(E),m&&t(G),m&&t(N),m&&t(R),m&&t(q)}}}function Zf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function e_(D){let u,x,f,T,z,B,w,$,Ce,ue,E,ve,oe,je,ne,ae,Pe,$e,G,N,ye,R,q,C,Ne,Q,J,Ie,U,Ae,Oe,I,me,re,Fe,fe,H,Le,Ee,M,Se,W,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),$=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),E=n("p"),ve=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),ae=n("code"),Pe=s("model(inputs)"),$e=s("."),G=i(),N=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),q=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Ie=s(" only and nothing else: "),U=n("code"),Ae=s("model(input_ids)"),Oe=i(),I=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=n("code"),Fe=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Le=s("model([input_ids, attention_mask, token_type_ids])"),Ee=i(),M=n("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=a(m,"P",{});var F=r(u);x=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),f=l(m),T=a(m,"UL",{});var Te=r(T);z=a(Te,"LI",{});var ht=r(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),$=a(Te,"LI",{});var Ve=r($);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),E=a(m,"P",{});var j=r(E);ve=d(j,"This second option is useful when using "),oe=a(j,"CODE",{});var _e=r(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),ae=a(j,"CODE",{});var Ge=r(ae);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),$e=d(j,"."),j.forEach(t),G=l(m),N=a(m,"P",{});var we=r(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),q=a(m,"UL",{});var K=r(q);C=a(K,"LI",{});var V=r(C);Ne=d(V,"a single Tensor with "),Q=a(V,"CODE",{});var ut=r(Q);J=d(ut,"input_ids"),ut.forEach(t),Ie=d(V," only and nothing else: "),U=a(V,"CODE",{});var Qe=r(U);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Oe=l(K),I=a(K,"LI",{});var A=r(I);me=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),re=a(A,"CODE",{});var Be=r(re);Fe=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(A," or "),H=a(A,"CODE",{});var mt=r(H);Le=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),Ee=l(K),M=a(K,"LI",{});var se=r(M);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(se,"CODE",{});var ft=r(W);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,F){p(m,u,F),e(u,x),p(m,f,F),p(m,T,F),e(T,z),e(z,B),e(T,w),e(T,$),e($,Ce),p(m,ue,F),p(m,E,F),e(E,ve),e(E,oe),e(oe,je),e(E,ne),e(E,ae),e(ae,Pe),e(E,$e),p(m,G,F),p(m,N,F),e(N,ye),p(m,R,F),p(m,q,F),e(q,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Ie),e(C,U),e(U,Ae),e(q,Oe),e(q,I),e(I,me),e(I,re),e(re,Fe),e(I,fe),e(I,H),e(H,Le),e(q,Ee),e(q,M),e(M,Se),e(M,W),e(W,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(E),m&&t(G),m&&t(N),m&&t(R),m&&t(q)}}}function t_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function o_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function n_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=a(B,"P",{});var w=r(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a(w,"CODE",{});var $=r(f);T=d($,"Module"),$.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function a_(D){let u,x,f,T,z,B,w,$,Ce,ue,E,ve,oe,je,ne,ae,Pe,$e,G,N,ye,R,q,C,Ne,Q,J,Ie,U,Ae,Oe,I,me,re,Fe,fe,H,Le,Ee,M,Se,W,De,m,F,Te,ht,Ve,j,_e,Ge,we,K,V,ut,Qe,A,Be,mt,se,ft,Ad,Od,uo,Ld,mo,Sd,Dd,Gd,Ue,Ud,Ea,Wd,Rd,qa,Hd,Kd,Wn,Vd,Qd,qs,_t,It,Ma,fo,Jd,Ca,Xd,Ms,Rn,Yd,Cs,_o,js,gt,At,ja,go,Zd,Pa,ei,Ps,de,bo,ti,bt,oi,Hn,ni,ai,ko,ri,si,di,kt,ii,Kn,li,ci,Vn,pi,hi,ui,Na,mi,fi,vo,Ns,vt,Ot,Ia,yo,_i,Aa,gi,Is,ie,To,bi,Oa,ki,vi,Lt,La,yi,Ti,Qn,wi,Bi,zi,wo,xi,Jn,$i,Fi,Ei,Je,Bo,qi,Sa,Mi,Ci,Da,Xn,ji,Ga,Pi,As,yt,St,Ua,zo,Ni,Wa,Ii,Os,le,xo,Ai,$o,Oi,Ra,Li,Si,Di,Dt,Ha,Gi,Ui,Yn,Wi,Ri,Hi,Fo,Ki,Zn,Vi,Qi,Ji,Xe,Eo,Xi,Ka,Yi,Zi,Va,ea,el,Qa,tl,Ls,Tt,Gt,Ja,qo,ol,Xa,nl,Ss,We,al,Ya,rl,sl,Za,dl,il,er,ll,Ds,ze,Mo,cl,Co,pl,ta,hl,ul,ml,jo,fl,Po,_l,gl,bl,ge,No,kl,wt,vl,oa,yl,Tl,tr,wl,Bl,zl,Ut,xl,or,$l,Fl,Io,Gs,Bt,Wt,nr,Ao,El,ar,ql,Us,Re,Ml,na,Cl,jl,rr,Pl,Nl,sr,Il,Ws,xe,Oo,Al,Lo,Ol,aa,Ll,Sl,Dl,So,Gl,Do,Ul,Wl,Rl,X,Go,Hl,zt,Kl,ra,Vl,Ql,dr,Jl,Xl,Yl,Rt,Zl,ir,ec,tc,lr,cr,pr,hr,oc,nc,ur,mr,fr,Uo,ac,_r,rc,sc,Rs,xt,Ht,gr,Wo,dc,br,ic,Hs,$t,Ro,lc,Ye,Ho,cc,kr,pc,hc,Ko,Ks,Ft,Kt,vr,Vo,uc,yr,mc,Vs,ce,Qo,fc,Jo,_c,sa,gc,bc,kc,Xo,vc,Yo,yc,Tc,wc,Vt,Bc,be,Zo,zc,Et,xc,da,$c,Fc,Tr,Ec,qc,Mc,Qt,Cc,wr,jc,Pc,en,Qs,qt,Jt,Br,tn,Nc,zr,Ic,Js,pe,on,Ac,nn,Oc,ia,Lc,Sc,Dc,an,Gc,rn,Uc,Wc,Rc,Xt,Hc,Y,sn,Kc,Mt,Vc,la,Qc,Jc,xr,Xc,Yc,Zc,Yt,ep,$r,tp,op,Fr,Er,qr,Mr,np,ap,Cr,jr,Pr,dn,rp,Nr,sp,dp,Xs,Ct,Zt,Ir,ln,ip,Ar,lp,Ys,O,cn,cp,pn,pp,ca,hp,up,mp,hn,fp,un,_p,gp,bp,Or,kp,vp,He,Lr,mn,yp,Tp,Sr,fn,wp,Bp,Dr,_n,zp,xp,Gr,gn,$p,Fp,ke,bn,Ep,jt,qp,Ur,Mp,Cp,Wr,jp,Pp,Np,eo,Ip,Rr,Ap,Op,kn,Lp,Ze,vn,Sp,Hr,Dp,Gp,yn,Up,et,Tn,Wp,Kr,Rp,Hp,wn,Zs,Pt,to,Vr,Bn,Kp,Qr,Vp,ed,L,zn,Qp,xn,Jp,pa,Xp,Yp,Zp,$n,eh,Fn,th,oh,nh,Jr,ah,rh,Ke,Xr,En,sh,dh,Yr,qn,ih,lh,Zr,Mn,ch,ph,es,Cn,hh,uh,S,jn,mh,Nt,fh,ts,_h,gh,os,bh,kh,vh,oo,yh,ns,Th,wh,as,rs,ss,ds,Bh,zh,is,ls,cs,ps,xh,$h,hs,us,ms,fs,Fh,Eh,_s,gs,Pn,no,ao,bs,Nn,qh,ks,Mh,Ch,vs,jh,Ph,tt,In,Nh,ys,Ih,Ah,An,Oh,ot,On,Lh,Ts,Sh,Dh,Ln,td;return B=new he({}),R=new he({}),we=new he({}),fo=new he({}),_o=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new he({}),bo=new P({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),vo=new pt({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),yo=new he({}),To=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Bo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new he({}),xo=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),Eo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qo=new he({}),Mo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1064",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1102",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Ut=new ho({props:{$$slots:{default:[Jf]},$$scope:{ctx:D}}}),Io=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ao=new he({}),Oo=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Go=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1257",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Rt=new ho({props:{$$slots:{default:[Xf]},$$scope:{ctx:D}}}),Wo=new he({}),Ro=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1393"}}),Ho=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_blenderbot.py#L1424",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),Ko=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Vo=new he({}),Qo=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1175",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vt=new ho({props:{$$slots:{default:[Yf]},$$scope:{ctx:D}}}),Zo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Qt=new ho({props:{$$slots:{default:[Zf]},$$scope:{ctx:D}}}),en=new pt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new he({}),on=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1295",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xt=new ho({props:{$$slots:{default:[e_]},$$scope:{ctx:D}}}),sn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1341",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
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
`}}),Yt=new ho({props:{$$slots:{default:[t_]},$$scope:{ctx:D}}}),ln=new he({}),cn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`}}),eo=new ho({props:{$$slots:{default:[o_]},$$scope:{ctx:D}}}),kn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),yn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`}}),wn=new pt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Bn=new he({}),zn=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`}}),oo=new ho({props:{$$slots:{default:[n_]},$$scope:{ctx:D}}}),Nn=new he({}),In=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`}}),An=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),On=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`}}),Ln=new pt({props:{code:`import jax.numpy as jnp
from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),$=n("span"),Ce=s("Blenderbot"),ue=i(),E=n("p"),ve=n("strong"),oe=s("DISCLAIMER:"),je=s(" If you see something strange, file a "),ne=n("a"),ae=s("Github Issue"),Pe=s(" ."),$e=i(),G=n("h2"),N=n("a"),ye=n("span"),_(R.$$.fragment),q=i(),C=n("span"),Ne=s("Overview"),Q=i(),J=n("p"),Ie=s("The Blender chatbot model was proposed in "),U=n("a"),Ae=s("Recipes for building an open-domain chatbot"),Oe=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),I=i(),me=n("p"),re=s("The abstract of the paper is the following:"),Fe=i(),fe=n("p"),H=n("em"),Le=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ee=i(),M=n("p"),Se=s("This model was contributed by "),W=n("a"),De=s("sshleifer"),m=s(". The authors\u2019 code can be found "),F=n("a"),Te=s("here"),ht=s(" ."),Ve=i(),j=n("h2"),_e=n("a"),Ge=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=s("Implementation Notes"),Qe=i(),A=n("ul"),Be=n("li"),mt=s("Blenderbot uses a standard "),se=n("a"),ft=s("seq2seq model transformer"),Ad=s(" based architecture."),Od=i(),uo=n("li"),Ld=s("Available checkpoints can be found in the "),mo=n("a"),Sd=s("model hub"),Dd=s("."),Gd=i(),Ue=n("li"),Ud=s("This is the "),Ea=n("em"),Wd=s("default"),Rd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),qa=n("code"),Hd=s("facebook/blenderbot_small_90M"),Kd=s(`, have a different architecture and consequently should be used with
`),Wn=n("a"),Vd=s("BlenderbotSmall"),Qd=s("."),qs=i(),_t=n("h2"),It=n("a"),Ma=n("span"),_(fo.$$.fragment),Jd=i(),Ca=n("span"),Xd=s("Usage"),Ms=i(),Rn=n("p"),Yd=s("Here is an example of model usage:"),Cs=i(),_(_o.$$.fragment),js=i(),gt=n("h2"),At=n("a"),ja=n("span"),_(go.$$.fragment),Zd=i(),Pa=n("span"),ei=s("BlenderbotConfig"),Ps=i(),de=n("div"),_(bo.$$.fragment),ti=i(),bt=n("p"),oi=s("This is the configuration class to store the configuration of a "),Hn=n("a"),ni=s("BlenderbotModel"),ai=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=n("a"),ri=s("facebook/blenderbot-3B"),si=s(" architecture."),di=i(),kt=n("p"),ii=s("Configuration objects inherit from "),Kn=n("a"),li=s("PretrainedConfig"),ci=s(` and can be used to control the model outputs. Read the
documentation from `),Vn=n("a"),pi=s("PretrainedConfig"),hi=s(" for more information."),ui=i(),Na=n("p"),mi=s("Example:"),fi=i(),_(vo.$$.fragment),Ns=i(),vt=n("h2"),Ot=n("a"),Ia=n("span"),_(yo.$$.fragment),_i=i(),Aa=n("span"),gi=s("BlenderbotTokenizer"),Is=i(),ie=n("div"),_(To.$$.fragment),bi=i(),Oa=n("p"),ki=s("Construct a Blenderbot tokenizer."),vi=i(),Lt=n("p"),La=n("code"),yi=s("Blenderbot"),Ti=s(" is nearly identical to "),Qn=n("a"),wi=s("RobertaTokenizer"),Bi=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),zi=i(),wo=n("p"),xi=s("Refer to superclass "),Jn=n("a"),$i=s("RobertaTokenizer"),Fi=s(" for usage examples and documentation concerning parameters."),Ei=i(),Je=n("div"),_(Bo.$$.fragment),qi=i(),Sa=n("p"),Mi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ci=i(),Da=n("ul"),Xn=n("li"),ji=s("single sequence: "),Ga=n("code"),Pi=s("X </s>"),As=i(),yt=n("h2"),St=n("a"),Ua=n("span"),_(zo.$$.fragment),Ni=i(),Wa=n("span"),Ii=s("BlenderbotTokenizerFast"),Os=i(),le=n("div"),_(xo.$$.fragment),Ai=i(),$o=n("p"),Oi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=n("em"),Li=s("tokenizers"),Si=s(" library)."),Di=i(),Dt=n("p"),Ha=n("code"),Gi=s("BlenderbotFast"),Ui=s(" is nearly identical to "),Yn=n("a"),Wi=s("RobertaTokenizerFast"),Ri=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Hi=i(),Fo=n("p"),Ki=s("Refer to superclass "),Zn=n("a"),Vi=s("RobertaTokenizerFast"),Qi=s(" for usage examples and documentation concerning parameters."),Ji=i(),Xe=n("div"),_(Eo.$$.fragment),Xi=i(),Ka=n("p"),Yi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Zi=i(),Va=n("ul"),ea=n("li"),el=s("single sequence: "),Qa=n("code"),tl=s("X </s>"),Ls=i(),Tt=n("h2"),Gt=n("a"),Ja=n("span"),_(qo.$$.fragment),ol=i(),Xa=n("span"),nl=s("BlenderbotModel"),Ss=i(),We=n("p"),al=s("See "),Ya=n("code"),rl=s("transformers.BartModel"),sl=s(" for arguments to "),Za=n("em"),dl=s("forward"),il=s(" and "),er=n("em"),ll=s("generate"),Ds=i(),ze=n("div"),_(Mo.$$.fragment),cl=i(),Co=n("p"),pl=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=n("a"),hl=s("PreTrainedModel"),ul=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml=i(),jo=n("p"),fl=s("This model is also a PyTorch "),Po=n("a"),_l=s("torch.nn.Module"),gl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bl=i(),ge=n("div"),_(No.$$.fragment),kl=i(),wt=n("p"),vl=s("The "),oa=n("a"),yl=s("BlenderbotModel"),Tl=s(" forward method, overrides the "),tr=n("code"),wl=s("__call__"),Bl=s(" special method."),zl=i(),_(Ut.$$.fragment),xl=i(),or=n("p"),$l=s("Example:"),Fl=i(),_(Io.$$.fragment),Gs=i(),Bt=n("h2"),Wt=n("a"),nr=n("span"),_(Ao.$$.fragment),El=i(),ar=n("span"),ql=s("BlenderbotForConditionalGeneration"),Us=i(),Re=n("p"),Ml=s("See "),na=n("a"),Cl=s("BartForConditionalGeneration"),jl=s(" for arguments to "),rr=n("em"),Pl=s("forward"),Nl=s(" and "),sr=n("em"),Il=s("generate"),Ws=i(),xe=n("div"),_(Oo.$$.fragment),Al=i(),Lo=n("p"),Ol=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=n("a"),Ll=s("PreTrainedModel"),Sl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl=i(),So=n("p"),Gl=s("This model is also a PyTorch "),Do=n("a"),Ul=s("torch.nn.Module"),Wl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=i(),X=n("div"),_(Go.$$.fragment),Hl=i(),zt=n("p"),Kl=s("The "),ra=n("a"),Vl=s("BlenderbotForConditionalGeneration"),Ql=s(" forward method, overrides the "),dr=n("code"),Jl=s("__call__"),Xl=s(" special method."),Yl=i(),_(Rt.$$.fragment),Zl=i(),ir=n("p"),ec=s("Conversation example::"),tc=i(),lr=n("blockquote"),cr=n("blockquote"),pr=n("blockquote"),hr=n("p"),oc=s(`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),nc=i(),ur=n("blockquote"),mr=n("blockquote"),fr=n("blockquote"),Uo=n("p"),ac=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),_r=n("s"),rc=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),sc=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Rs=i(),xt=n("h2"),Ht=n("a"),gr=n("span"),_(Wo.$$.fragment),dc=i(),br=n("span"),ic=s("BlenderbotForCausalLM"),Hs=i(),$t=n("div"),_(Ro.$$.fragment),lc=i(),Ye=n("div"),_(Ho.$$.fragment),cc=i(),kr=n("p"),pc=s("Example:"),hc=i(),_(Ko.$$.fragment),Ks=i(),Ft=n("h2"),Kt=n("a"),vr=n("span"),_(Vo.$$.fragment),uc=i(),yr=n("span"),mc=s("TFBlenderbotModel"),Vs=i(),ce=n("div"),_(Qo.$$.fragment),fc=i(),Jo=n("p"),_c=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=n("a"),gc=s("TFPreTrainedModel"),bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc=i(),Xo=n("p"),vc=s("This model is also a "),Yo=n("a"),yc=s("tf.keras.Model"),Tc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wc=i(),_(Vt.$$.fragment),Bc=i(),be=n("div"),_(Zo.$$.fragment),zc=i(),Et=n("p"),xc=s("The "),da=n("a"),$c=s("TFBlenderbotModel"),Fc=s(" forward method, overrides the "),Tr=n("code"),Ec=s("__call__"),qc=s(" special method."),Mc=i(),_(Qt.$$.fragment),Cc=i(),wr=n("p"),jc=s("Example:"),Pc=i(),_(en.$$.fragment),Qs=i(),qt=n("h2"),Jt=n("a"),Br=n("span"),_(tn.$$.fragment),Nc=i(),zr=n("span"),Ic=s("TFBlenderbotForConditionalGeneration"),Js=i(),pe=n("div"),_(on.$$.fragment),Ac=i(),nn=n("p"),Oc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=n("a"),Lc=s("TFPreTrainedModel"),Sc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=i(),an=n("p"),Gc=s("This model is also a "),rn=n("a"),Uc=s("tf.keras.Model"),Wc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rc=i(),_(Xt.$$.fragment),Hc=i(),Y=n("div"),_(sn.$$.fragment),Kc=i(),Mt=n("p"),Vc=s("The "),la=n("a"),Qc=s("TFBlenderbotForConditionalGeneration"),Jc=s(" forward method, overrides the "),xr=n("code"),Xc=s("__call__"),Yc=s(" special method."),Zc=i(),_(Yt.$$.fragment),ep=i(),$r=n("p"),tp=s("Conversation example::"),op=i(),Fr=n("blockquote"),Er=n("blockquote"),qr=n("blockquote"),Mr=n("p"),np=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),ap=i(),Cr=n("blockquote"),jr=n("blockquote"),Pr=n("blockquote"),dn=n("p"),rp=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Nr=n("s"),sp=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),dp=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Xs=i(),Ct=n("h2"),Zt=n("a"),Ir=n("span"),_(ln.$$.fragment),ip=i(),Ar=n("span"),lp=s("FlaxBlenderbotModel"),Ys=i(),O=n("div"),_(cn.$$.fragment),cp=i(),pn=n("p"),pp=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=n("a"),hp=s("FlaxPreTrainedModel"),up=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=i(),hn=n("p"),fp=s(`This model is also a Flax Linen
`),un=n("a"),_p=s("flax.nn.Module"),gp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bp=i(),Or=n("p"),kp=s("Finally, this model supports inherent JAX features such as:"),vp=i(),He=n("ul"),Lr=n("li"),mn=n("a"),yp=s("Just-In-Time (JIT) compilation"),Tp=i(),Sr=n("li"),fn=n("a"),wp=s("Automatic Differentiation"),Bp=i(),Dr=n("li"),_n=n("a"),zp=s("Vectorization"),xp=i(),Gr=n("li"),gn=n("a"),$p=s("Parallelization"),Fp=i(),ke=n("div"),_(bn.$$.fragment),Ep=i(),jt=n("p"),qp=s("The "),Ur=n("code"),Mp=s("FlaxBlenderbotPreTrainedModel"),Cp=s("forward method, overrides the "),Wr=n("code"),jp=s("__call__"),Pp=s(" special method."),Np=i(),_(eo.$$.fragment),Ip=i(),Rr=n("p"),Ap=s("Example:"),Op=i(),_(kn.$$.fragment),Lp=i(),Ze=n("div"),_(vn.$$.fragment),Sp=i(),Hr=n("p"),Dp=s("Example:"),Gp=i(),_(yn.$$.fragment),Up=i(),et=n("div"),_(Tn.$$.fragment),Wp=i(),Kr=n("p"),Rp=s("Example:"),Hp=i(),_(wn.$$.fragment),Zs=i(),Pt=n("h2"),to=n("a"),Vr=n("span"),_(Bn.$$.fragment),Kp=i(),Qr=n("span"),Vp=s("FlaxBlenderbotForConditionalGeneration"),ed=i(),L=n("div"),_(zn.$$.fragment),Qp=i(),xn=n("p"),Jp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=n("a"),Xp=s("FlaxPreTrainedModel"),Yp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp=i(),$n=n("p"),eh=s(`This model is also a Flax Linen
`),Fn=n("a"),th=s("flax.nn.Module"),oh=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),nh=i(),Jr=n("p"),ah=s("Finally, this model supports inherent JAX features such as:"),rh=i(),Ke=n("ul"),Xr=n("li"),En=n("a"),sh=s("Just-In-Time (JIT) compilation"),dh=i(),Yr=n("li"),qn=n("a"),ih=s("Automatic Differentiation"),lh=i(),Zr=n("li"),Mn=n("a"),ch=s("Vectorization"),ph=i(),es=n("li"),Cn=n("a"),hh=s("Parallelization"),uh=i(),S=n("div"),_(jn.$$.fragment),mh=i(),Nt=n("p"),fh=s("The "),ts=n("code"),_h=s("FlaxBlenderbotPreTrainedModel"),gh=s("forward method, overrides the "),os=n("code"),bh=s("__call__"),kh=s(" special method."),vh=i(),_(oo.$$.fragment),yh=i(),ns=n("p"),Th=s("Conversation example::"),wh=i(),as=n("blockquote"),rs=n("blockquote"),ss=n("blockquote"),ds=n("p"),Bh=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),zh=i(),is=n("blockquote"),ls=n("blockquote"),cs=n("blockquote"),ps=n("p"),xh=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),$h=i(),hs=n("blockquote"),us=n("blockquote"),ms=n("blockquote"),fs=n("p"),Fh=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Eh=i(),_s=n("blockquote"),gs=n("blockquote"),Pn=n("blockquote"),no=n("h1"),ao=n("a"),bs=n("span"),_(Nn.$$.fragment),qh=i(),ks=n("span"),Mh=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Ch=i(),vs=n("p"),jh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Ph=i(),tt=n("div"),_(In.$$.fragment),Nh=i(),ys=n("p"),Ih=s("Example:"),Ah=i(),_(An.$$.fragment),Oh=i(),ot=n("div"),_(On.$$.fragment),Lh=i(),Ts=n("p"),Sh=s("Example:"),Dh=i(),_(Ln.$$.fragment),this.h()},l(o){const h=Qf('[data-svelte="svelte-1phssyn"]',document.head);u=a(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),f=a(o,"H1",{class:!0});var Sn=r(f);T=a(Sn,"A",{id:!0,class:!0,href:!0});var ws=r(T);z=a(ws,"SPAN",{});var Bs=r(z);g(B.$$.fragment,Bs),Bs.forEach(t),ws.forEach(t),w=l(Sn),$=a(Sn,"SPAN",{});var zs=r($);Ce=d(zs,"Blenderbot"),zs.forEach(t),Sn.forEach(t),ue=l(o),E=a(o,"P",{});var ro=r(E);ve=a(ro,"STRONG",{});var xs=r(ve);oe=d(xs,"DISCLAIMER:"),xs.forEach(t),je=d(ro," If you see something strange, file a "),ne=a(ro,"A",{href:!0,rel:!0});var $s=r(ne);ae=d($s,"Github Issue"),$s.forEach(t),Pe=d(ro," ."),ro.forEach(t),$e=l(o),G=a(o,"H2",{class:!0});var Dn=r(G);N=a(Dn,"A",{id:!0,class:!0,href:!0});var Wh=r(N);ye=a(Wh,"SPAN",{});var Rh=r(ye);g(R.$$.fragment,Rh),Rh.forEach(t),Wh.forEach(t),q=l(Dn),C=a(Dn,"SPAN",{});var Hh=r(C);Ne=d(Hh,"Overview"),Hh.forEach(t),Dn.forEach(t),Q=l(o),J=a(o,"P",{});var od=r(J);Ie=d(od,"The Blender chatbot model was proposed in "),U=a(od,"A",{href:!0,rel:!0});var Kh=r(U);Ae=d(Kh,"Recipes for building an open-domain chatbot"),Kh.forEach(t),Oe=d(od,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),od.forEach(t),I=l(o),me=a(o,"P",{});var Vh=r(me);re=d(Vh,"The abstract of the paper is the following:"),Vh.forEach(t),Fe=l(o),fe=a(o,"P",{});var Qh=r(fe);H=a(Qh,"EM",{});var Jh=r(H);Le=d(Jh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Jh.forEach(t),Qh.forEach(t),Ee=l(o),M=a(o,"P",{});var ha=r(M);Se=d(ha,"This model was contributed by "),W=a(ha,"A",{href:!0,rel:!0});var Xh=r(W);De=d(Xh,"sshleifer"),Xh.forEach(t),m=d(ha,". The authors\u2019 code can be found "),F=a(ha,"A",{href:!0,rel:!0});var Yh=r(F);Te=d(Yh,"here"),Yh.forEach(t),ht=d(ha," ."),ha.forEach(t),Ve=l(o),j=a(o,"H2",{class:!0});var nd=r(j);_e=a(nd,"A",{id:!0,class:!0,href:!0});var Zh=r(_e);Ge=a(Zh,"SPAN",{});var eu=r(Ge);g(we.$$.fragment,eu),eu.forEach(t),Zh.forEach(t),K=l(nd),V=a(nd,"SPAN",{});var tu=r(V);ut=d(tu,"Implementation Notes"),tu.forEach(t),nd.forEach(t),Qe=l(o),A=a(o,"UL",{});var ua=r(A);Be=a(ua,"LI",{});var ad=r(Be);mt=d(ad,"Blenderbot uses a standard "),se=a(ad,"A",{href:!0,rel:!0});var ou=r(se);ft=d(ou,"seq2seq model transformer"),ou.forEach(t),Ad=d(ad," based architecture."),ad.forEach(t),Od=l(ua),uo=a(ua,"LI",{});var rd=r(uo);Ld=d(rd,"Available checkpoints can be found in the "),mo=a(rd,"A",{href:!0,rel:!0});var nu=r(mo);Sd=d(nu,"model hub"),nu.forEach(t),Dd=d(rd,"."),rd.forEach(t),Gd=l(ua),Ue=a(ua,"LI",{});var so=r(Ue);Ud=d(so,"This is the "),Ea=a(so,"EM",{});var au=r(Ea);Wd=d(au,"default"),au.forEach(t),Rd=d(so,` Blenderbot model class. However, some smaller checkpoints, such as
`),qa=a(so,"CODE",{});var ru=r(qa);Hd=d(ru,"facebook/blenderbot_small_90M"),ru.forEach(t),Kd=d(so,`, have a different architecture and consequently should be used with
`),Wn=a(so,"A",{href:!0});var su=r(Wn);Vd=d(su,"BlenderbotSmall"),su.forEach(t),Qd=d(so,"."),so.forEach(t),ua.forEach(t),qs=l(o),_t=a(o,"H2",{class:!0});var sd=r(_t);It=a(sd,"A",{id:!0,class:!0,href:!0});var du=r(It);Ma=a(du,"SPAN",{});var iu=r(Ma);g(fo.$$.fragment,iu),iu.forEach(t),du.forEach(t),Jd=l(sd),Ca=a(sd,"SPAN",{});var lu=r(Ca);Xd=d(lu,"Usage"),lu.forEach(t),sd.forEach(t),Ms=l(o),Rn=a(o,"P",{});var cu=r(Rn);Yd=d(cu,"Here is an example of model usage:"),cu.forEach(t),Cs=l(o),g(_o.$$.fragment,o),js=l(o),gt=a(o,"H2",{class:!0});var dd=r(gt);At=a(dd,"A",{id:!0,class:!0,href:!0});var pu=r(At);ja=a(pu,"SPAN",{});var hu=r(ja);g(go.$$.fragment,hu),hu.forEach(t),pu.forEach(t),Zd=l(dd),Pa=a(dd,"SPAN",{});var uu=r(Pa);ei=d(uu,"BlenderbotConfig"),uu.forEach(t),dd.forEach(t),Ps=l(o),de=a(o,"DIV",{class:!0});var nt=r(de);g(bo.$$.fragment,nt),ti=l(nt),bt=a(nt,"P",{});var ma=r(bt);oi=d(ma,"This is the configuration class to store the configuration of a "),Hn=a(ma,"A",{href:!0});var mu=r(Hn);ni=d(mu,"BlenderbotModel"),mu.forEach(t),ai=d(ma,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),ko=a(ma,"A",{href:!0,rel:!0});var fu=r(ko);ri=d(fu,"facebook/blenderbot-3B"),fu.forEach(t),si=d(ma," architecture."),ma.forEach(t),di=l(nt),kt=a(nt,"P",{});var fa=r(kt);ii=d(fa,"Configuration objects inherit from "),Kn=a(fa,"A",{href:!0});var _u=r(Kn);li=d(_u,"PretrainedConfig"),_u.forEach(t),ci=d(fa,` and can be used to control the model outputs. Read the
documentation from `),Vn=a(fa,"A",{href:!0});var gu=r(Vn);pi=d(gu,"PretrainedConfig"),gu.forEach(t),hi=d(fa," for more information."),fa.forEach(t),ui=l(nt),Na=a(nt,"P",{});var bu=r(Na);mi=d(bu,"Example:"),bu.forEach(t),fi=l(nt),g(vo.$$.fragment,nt),nt.forEach(t),Ns=l(o),vt=a(o,"H2",{class:!0});var id=r(vt);Ot=a(id,"A",{id:!0,class:!0,href:!0});var ku=r(Ot);Ia=a(ku,"SPAN",{});var vu=r(Ia);g(yo.$$.fragment,vu),vu.forEach(t),ku.forEach(t),_i=l(id),Aa=a(id,"SPAN",{});var yu=r(Aa);gi=d(yu,"BlenderbotTokenizer"),yu.forEach(t),id.forEach(t),Is=l(o),ie=a(o,"DIV",{class:!0});var at=r(ie);g(To.$$.fragment,at),bi=l(at),Oa=a(at,"P",{});var Tu=r(Oa);ki=d(Tu,"Construct a Blenderbot tokenizer."),Tu.forEach(t),vi=l(at),Lt=a(at,"P",{});var Fs=r(Lt);La=a(Fs,"CODE",{});var wu=r(La);yi=d(wu,"Blenderbot"),wu.forEach(t),Ti=d(Fs," is nearly identical to "),Qn=a(Fs,"A",{href:!0});var Bu=r(Qn);wi=d(Bu,"RobertaTokenizer"),Bu.forEach(t),Bi=d(Fs,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Fs.forEach(t),zi=l(at),wo=a(at,"P",{});var ld=r(wo);xi=d(ld,"Refer to superclass "),Jn=a(ld,"A",{href:!0});var zu=r(Jn);$i=d(zu,"RobertaTokenizer"),zu.forEach(t),Fi=d(ld," for usage examples and documentation concerning parameters."),ld.forEach(t),Ei=l(at),Je=a(at,"DIV",{class:!0});var _a=r(Je);g(Bo.$$.fragment,_a),qi=l(_a),Sa=a(_a,"P",{});var xu=r(Sa);Mi=d(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),xu.forEach(t),Ci=l(_a),Da=a(_a,"UL",{});var $u=r(Da);Xn=a($u,"LI",{});var Gh=r(Xn);ji=d(Gh,"single sequence: "),Ga=a(Gh,"CODE",{});var Fu=r(Ga);Pi=d(Fu,"X </s>"),Fu.forEach(t),Gh.forEach(t),$u.forEach(t),_a.forEach(t),at.forEach(t),As=l(o),yt=a(o,"H2",{class:!0});var cd=r(yt);St=a(cd,"A",{id:!0,class:!0,href:!0});var Eu=r(St);Ua=a(Eu,"SPAN",{});var qu=r(Ua);g(zo.$$.fragment,qu),qu.forEach(t),Eu.forEach(t),Ni=l(cd),Wa=a(cd,"SPAN",{});var Mu=r(Wa);Ii=d(Mu,"BlenderbotTokenizerFast"),Mu.forEach(t),cd.forEach(t),Os=l(o),le=a(o,"DIV",{class:!0});var rt=r(le);g(xo.$$.fragment,rt),Ai=l(rt),$o=a(rt,"P",{});var pd=r($o);Oi=d(pd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ra=a(pd,"EM",{});var Cu=r(Ra);Li=d(Cu,"tokenizers"),Cu.forEach(t),Si=d(pd," library)."),pd.forEach(t),Di=l(rt),Dt=a(rt,"P",{});var Es=r(Dt);Ha=a(Es,"CODE",{});var ju=r(Ha);Gi=d(ju,"BlenderbotFast"),ju.forEach(t),Ui=d(Es," is nearly identical to "),Yn=a(Es,"A",{href:!0});var Pu=r(Yn);Wi=d(Pu,"RobertaTokenizerFast"),Pu.forEach(t),Ri=d(Es,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Es.forEach(t),Hi=l(rt),Fo=a(rt,"P",{});var hd=r(Fo);Ki=d(hd,"Refer to superclass "),Zn=a(hd,"A",{href:!0});var Nu=r(Zn);Vi=d(Nu,"RobertaTokenizerFast"),Nu.forEach(t),Qi=d(hd," for usage examples and documentation concerning parameters."),hd.forEach(t),Ji=l(rt),Xe=a(rt,"DIV",{class:!0});var ga=r(Xe);g(Eo.$$.fragment,ga),Xi=l(ga),Ka=a(ga,"P",{});var Iu=r(Ka);Yi=d(Iu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Iu.forEach(t),Zi=l(ga),Va=a(ga,"UL",{});var Au=r(Va);ea=a(Au,"LI",{});var Uh=r(ea);el=d(Uh,"single sequence: "),Qa=a(Uh,"CODE",{});var Ou=r(Qa);tl=d(Ou,"X </s>"),Ou.forEach(t),Uh.forEach(t),Au.forEach(t),ga.forEach(t),rt.forEach(t),Ls=l(o),Tt=a(o,"H2",{class:!0});var ud=r(Tt);Gt=a(ud,"A",{id:!0,class:!0,href:!0});var Lu=r(Gt);Ja=a(Lu,"SPAN",{});var Su=r(Ja);g(qo.$$.fragment,Su),Su.forEach(t),Lu.forEach(t),ol=l(ud),Xa=a(ud,"SPAN",{});var Du=r(Xa);nl=d(Du,"BlenderbotModel"),Du.forEach(t),ud.forEach(t),Ss=l(o),We=a(o,"P",{});var Gn=r(We);al=d(Gn,"See "),Ya=a(Gn,"CODE",{});var Gu=r(Ya);rl=d(Gu,"transformers.BartModel"),Gu.forEach(t),sl=d(Gn," for arguments to "),Za=a(Gn,"EM",{});var Uu=r(Za);dl=d(Uu,"forward"),Uu.forEach(t),il=d(Gn," and "),er=a(Gn,"EM",{});var Wu=r(er);ll=d(Wu,"generate"),Wu.forEach(t),Gn.forEach(t),Ds=l(o),ze=a(o,"DIV",{class:!0});var io=r(ze);g(Mo.$$.fragment,io),cl=l(io),Co=a(io,"P",{});var md=r(Co);pl=d(md,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ta=a(md,"A",{href:!0});var Ru=r(ta);hl=d(Ru,"PreTrainedModel"),Ru.forEach(t),ul=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),ml=l(io),jo=a(io,"P",{});var fd=r(jo);fl=d(fd,"This model is also a PyTorch "),Po=a(fd,"A",{href:!0,rel:!0});var Hu=r(Po);_l=d(Hu,"torch.nn.Module"),Hu.forEach(t),gl=d(fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd.forEach(t),bl=l(io),ge=a(io,"DIV",{class:!0});var st=r(ge);g(No.$$.fragment,st),kl=l(st),wt=a(st,"P",{});var ba=r(wt);vl=d(ba,"The "),oa=a(ba,"A",{href:!0});var Ku=r(oa);yl=d(Ku,"BlenderbotModel"),Ku.forEach(t),Tl=d(ba," forward method, overrides the "),tr=a(ba,"CODE",{});var Vu=r(tr);wl=d(Vu,"__call__"),Vu.forEach(t),Bl=d(ba," special method."),ba.forEach(t),zl=l(st),g(Ut.$$.fragment,st),xl=l(st),or=a(st,"P",{});var Qu=r(or);$l=d(Qu,"Example:"),Qu.forEach(t),Fl=l(st),g(Io.$$.fragment,st),st.forEach(t),io.forEach(t),Gs=l(o),Bt=a(o,"H2",{class:!0});var _d=r(Bt);Wt=a(_d,"A",{id:!0,class:!0,href:!0});var Ju=r(Wt);nr=a(Ju,"SPAN",{});var Xu=r(nr);g(Ao.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),El=l(_d),ar=a(_d,"SPAN",{});var Yu=r(ar);ql=d(Yu,"BlenderbotForConditionalGeneration"),Yu.forEach(t),_d.forEach(t),Us=l(o),Re=a(o,"P",{});var Un=r(Re);Ml=d(Un,"See "),na=a(Un,"A",{href:!0});var Zu=r(na);Cl=d(Zu,"BartForConditionalGeneration"),Zu.forEach(t),jl=d(Un," for arguments to "),rr=a(Un,"EM",{});var em=r(rr);Pl=d(em,"forward"),em.forEach(t),Nl=d(Un," and "),sr=a(Un,"EM",{});var tm=r(sr);Il=d(tm,"generate"),tm.forEach(t),Un.forEach(t),Ws=l(o),xe=a(o,"DIV",{class:!0});var lo=r(xe);g(Oo.$$.fragment,lo),Al=l(lo),Lo=a(lo,"P",{});var gd=r(Lo);Ol=d(gd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),aa=a(gd,"A",{href:!0});var om=r(aa);Ll=d(om,"PreTrainedModel"),om.forEach(t),Sl=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Dl=l(lo),So=a(lo,"P",{});var bd=r(So);Gl=d(bd,"This model is also a PyTorch "),Do=a(bd,"A",{href:!0,rel:!0});var nm=r(Do);Ul=d(nm,"torch.nn.Module"),nm.forEach(t),Wl=d(bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bd.forEach(t),Rl=l(lo),X=a(lo,"DIV",{class:!0});var qe=r(X);g(Go.$$.fragment,qe),Hl=l(qe),zt=a(qe,"P",{});var ka=r(zt);Kl=d(ka,"The "),ra=a(ka,"A",{href:!0});var am=r(ra);Vl=d(am,"BlenderbotForConditionalGeneration"),am.forEach(t),Ql=d(ka," forward method, overrides the "),dr=a(ka,"CODE",{});var rm=r(dr);Jl=d(rm,"__call__"),rm.forEach(t),Xl=d(ka," special method."),ka.forEach(t),Yl=l(qe),g(Rt.$$.fragment,qe),Zl=l(qe),ir=a(qe,"P",{});var sm=r(ir);ec=d(sm,"Conversation example::"),sm.forEach(t),tc=l(qe),lr=a(qe,"BLOCKQUOTE",{});var dm=r(lr);cr=a(dm,"BLOCKQUOTE",{});var im=r(cr);pr=a(im,"BLOCKQUOTE",{});var lm=r(pr);hr=a(lm,"P",{});var cm=r(hr);oc=d(cm,`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),cm.forEach(t),lm.forEach(t),im.forEach(t),dm.forEach(t),nc=l(qe),ur=a(qe,"BLOCKQUOTE",{});var pm=r(ur);mr=a(pm,"BLOCKQUOTE",{});var hm=r(mr);fr=a(hm,"BLOCKQUOTE",{});var um=r(fr);Uo=a(um,"P",{});var kd=r(Uo);ac=d(kd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),_r=a(kd,"S",{});var mm=r(_r);rc=d(mm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),mm.forEach(t),sc=d(kd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),kd.forEach(t),um.forEach(t),hm.forEach(t),pm.forEach(t),qe.forEach(t),lo.forEach(t),Rs=l(o),xt=a(o,"H2",{class:!0});var vd=r(xt);Ht=a(vd,"A",{id:!0,class:!0,href:!0});var fm=r(Ht);gr=a(fm,"SPAN",{});var _m=r(gr);g(Wo.$$.fragment,_m),_m.forEach(t),fm.forEach(t),dc=l(vd),br=a(vd,"SPAN",{});var gm=r(br);ic=d(gm,"BlenderbotForCausalLM"),gm.forEach(t),vd.forEach(t),Hs=l(o),$t=a(o,"DIV",{class:!0});var yd=r($t);g(Ro.$$.fragment,yd),lc=l(yd),Ye=a(yd,"DIV",{class:!0});var va=r(Ye);g(Ho.$$.fragment,va),cc=l(va),kr=a(va,"P",{});var bm=r(kr);pc=d(bm,"Example:"),bm.forEach(t),hc=l(va),g(Ko.$$.fragment,va),va.forEach(t),yd.forEach(t),Ks=l(o),Ft=a(o,"H2",{class:!0});var Td=r(Ft);Kt=a(Td,"A",{id:!0,class:!0,href:!0});var km=r(Kt);vr=a(km,"SPAN",{});var vm=r(vr);g(Vo.$$.fragment,vm),vm.forEach(t),km.forEach(t),uc=l(Td),yr=a(Td,"SPAN",{});var ym=r(yr);mc=d(ym,"TFBlenderbotModel"),ym.forEach(t),Td.forEach(t),Vs=l(o),ce=a(o,"DIV",{class:!0});var dt=r(ce);g(Qo.$$.fragment,dt),fc=l(dt),Jo=a(dt,"P",{});var wd=r(Jo);_c=d(wd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sa=a(wd,"A",{href:!0});var Tm=r(sa);gc=d(Tm,"TFPreTrainedModel"),Tm.forEach(t),bc=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),kc=l(dt),Xo=a(dt,"P",{});var Bd=r(Xo);vc=d(Bd,"This model is also a "),Yo=a(Bd,"A",{href:!0,rel:!0});var wm=r(Yo);yc=d(wm,"tf.keras.Model"),wm.forEach(t),Tc=d(Bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd.forEach(t),wc=l(dt),g(Vt.$$.fragment,dt),Bc=l(dt),be=a(dt,"DIV",{class:!0});var it=r(be);g(Zo.$$.fragment,it),zc=l(it),Et=a(it,"P",{});var ya=r(Et);xc=d(ya,"The "),da=a(ya,"A",{href:!0});var Bm=r(da);$c=d(Bm,"TFBlenderbotModel"),Bm.forEach(t),Fc=d(ya," forward method, overrides the "),Tr=a(ya,"CODE",{});var zm=r(Tr);Ec=d(zm,"__call__"),zm.forEach(t),qc=d(ya," special method."),ya.forEach(t),Mc=l(it),g(Qt.$$.fragment,it),Cc=l(it),wr=a(it,"P",{});var xm=r(wr);jc=d(xm,"Example:"),xm.forEach(t),Pc=l(it),g(en.$$.fragment,it),it.forEach(t),dt.forEach(t),Qs=l(o),qt=a(o,"H2",{class:!0});var zd=r(qt);Jt=a(zd,"A",{id:!0,class:!0,href:!0});var $m=r(Jt);Br=a($m,"SPAN",{});var Fm=r(Br);g(tn.$$.fragment,Fm),Fm.forEach(t),$m.forEach(t),Nc=l(zd),zr=a(zd,"SPAN",{});var Em=r(zr);Ic=d(Em,"TFBlenderbotForConditionalGeneration"),Em.forEach(t),zd.forEach(t),Js=l(o),pe=a(o,"DIV",{class:!0});var lt=r(pe);g(on.$$.fragment,lt),Ac=l(lt),nn=a(lt,"P",{});var xd=r(nn);Oc=d(xd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ia=a(xd,"A",{href:!0});var qm=r(ia);Lc=d(qm,"TFPreTrainedModel"),qm.forEach(t),Sc=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Dc=l(lt),an=a(lt,"P",{});var $d=r(an);Gc=d($d,"This model is also a "),rn=a($d,"A",{href:!0,rel:!0});var Mm=r(rn);Uc=d(Mm,"tf.keras.Model"),Mm.forEach(t),Wc=d($d,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$d.forEach(t),Rc=l(lt),g(Xt.$$.fragment,lt),Hc=l(lt),Y=a(lt,"DIV",{class:!0});var Me=r(Y);g(sn.$$.fragment,Me),Kc=l(Me),Mt=a(Me,"P",{});var Ta=r(Mt);Vc=d(Ta,"The "),la=a(Ta,"A",{href:!0});var Cm=r(la);Qc=d(Cm,"TFBlenderbotForConditionalGeneration"),Cm.forEach(t),Jc=d(Ta," forward method, overrides the "),xr=a(Ta,"CODE",{});var jm=r(xr);Xc=d(jm,"__call__"),jm.forEach(t),Yc=d(Ta," special method."),Ta.forEach(t),Zc=l(Me),g(Yt.$$.fragment,Me),ep=l(Me),$r=a(Me,"P",{});var Pm=r($r);tp=d(Pm,"Conversation example::"),Pm.forEach(t),op=l(Me),Fr=a(Me,"BLOCKQUOTE",{});var Nm=r(Fr);Er=a(Nm,"BLOCKQUOTE",{});var Im=r(Er);qr=a(Im,"BLOCKQUOTE",{});var Am=r(qr);Mr=a(Am,"P",{});var Om=r(Mr);np=d(Om,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Om.forEach(t),Am.forEach(t),Im.forEach(t),Nm.forEach(t),ap=l(Me),Cr=a(Me,"BLOCKQUOTE",{});var Lm=r(Cr);jr=a(Lm,"BLOCKQUOTE",{});var Sm=r(jr);Pr=a(Sm,"BLOCKQUOTE",{});var Dm=r(Pr);dn=a(Dm,"P",{});var Fd=r(dn);rp=d(Fd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Nr=a(Fd,"S",{});var Gm=r(Nr);sp=d(Gm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Gm.forEach(t),dp=d(Fd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Fd.forEach(t),Dm.forEach(t),Sm.forEach(t),Lm.forEach(t),Me.forEach(t),lt.forEach(t),Xs=l(o),Ct=a(o,"H2",{class:!0});var Ed=r(Ct);Zt=a(Ed,"A",{id:!0,class:!0,href:!0});var Um=r(Zt);Ir=a(Um,"SPAN",{});var Wm=r(Ir);g(ln.$$.fragment,Wm),Wm.forEach(t),Um.forEach(t),ip=l(Ed),Ar=a(Ed,"SPAN",{});var Rm=r(Ar);lp=d(Rm,"FlaxBlenderbotModel"),Rm.forEach(t),Ed.forEach(t),Ys=l(o),O=a(o,"DIV",{class:!0});var Z=r(O);g(cn.$$.fragment,Z),cp=l(Z),pn=a(Z,"P",{});var qd=r(pn);pp=d(qd,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ca=a(qd,"A",{href:!0});var Hm=r(ca);hp=d(Hm,"FlaxPreTrainedModel"),Hm.forEach(t),up=d(qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd.forEach(t),mp=l(Z),hn=a(Z,"P",{});var Md=r(hn);fp=d(Md,`This model is also a Flax Linen
`),un=a(Md,"A",{href:!0,rel:!0});var Km=r(un);_p=d(Km,"flax.nn.Module"),Km.forEach(t),gp=d(Md,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Md.forEach(t),bp=l(Z),Or=a(Z,"P",{});var Vm=r(Or);kp=d(Vm,"Finally, this model supports inherent JAX features such as:"),Vm.forEach(t),vp=l(Z),He=a(Z,"UL",{});var co=r(He);Lr=a(co,"LI",{});var Qm=r(Lr);mn=a(Qm,"A",{href:!0,rel:!0});var Jm=r(mn);yp=d(Jm,"Just-In-Time (JIT) compilation"),Jm.forEach(t),Qm.forEach(t),Tp=l(co),Sr=a(co,"LI",{});var Xm=r(Sr);fn=a(Xm,"A",{href:!0,rel:!0});var Ym=r(fn);wp=d(Ym,"Automatic Differentiation"),Ym.forEach(t),Xm.forEach(t),Bp=l(co),Dr=a(co,"LI",{});var Zm=r(Dr);_n=a(Zm,"A",{href:!0,rel:!0});var ef=r(_n);zp=d(ef,"Vectorization"),ef.forEach(t),Zm.forEach(t),xp=l(co),Gr=a(co,"LI",{});var tf=r(Gr);gn=a(tf,"A",{href:!0,rel:!0});var of=r(gn);$p=d(of,"Parallelization"),of.forEach(t),tf.forEach(t),co.forEach(t),Fp=l(Z),ke=a(Z,"DIV",{class:!0});var ct=r(ke);g(bn.$$.fragment,ct),Ep=l(ct),jt=a(ct,"P",{});var wa=r(jt);qp=d(wa,"The "),Ur=a(wa,"CODE",{});var nf=r(Ur);Mp=d(nf,"FlaxBlenderbotPreTrainedModel"),nf.forEach(t),Cp=d(wa,"forward method, overrides the "),Wr=a(wa,"CODE",{});var af=r(Wr);jp=d(af,"__call__"),af.forEach(t),Pp=d(wa," special method."),wa.forEach(t),Np=l(ct),g(eo.$$.fragment,ct),Ip=l(ct),Rr=a(ct,"P",{});var rf=r(Rr);Ap=d(rf,"Example:"),rf.forEach(t),Op=l(ct),g(kn.$$.fragment,ct),ct.forEach(t),Lp=l(Z),Ze=a(Z,"DIV",{class:!0});var Ba=r(Ze);g(vn.$$.fragment,Ba),Sp=l(Ba),Hr=a(Ba,"P",{});var sf=r(Hr);Dp=d(sf,"Example:"),sf.forEach(t),Gp=l(Ba),g(yn.$$.fragment,Ba),Ba.forEach(t),Up=l(Z),et=a(Z,"DIV",{class:!0});var za=r(et);g(Tn.$$.fragment,za),Wp=l(za),Kr=a(za,"P",{});var df=r(Kr);Rp=d(df,"Example:"),df.forEach(t),Hp=l(za),g(wn.$$.fragment,za),za.forEach(t),Z.forEach(t),Zs=l(o),Pt=a(o,"H2",{class:!0});var Cd=r(Pt);to=a(Cd,"A",{id:!0,class:!0,href:!0});var lf=r(to);Vr=a(lf,"SPAN",{});var cf=r(Vr);g(Bn.$$.fragment,cf),cf.forEach(t),lf.forEach(t),Kp=l(Cd),Qr=a(Cd,"SPAN",{});var pf=r(Qr);Vp=d(pf,"FlaxBlenderbotForConditionalGeneration"),pf.forEach(t),Cd.forEach(t),ed=l(o),L=a(o,"DIV",{class:!0});var ee=r(L);g(zn.$$.fragment,ee),Qp=l(ee),xn=a(ee,"P",{});var jd=r(xn);Jp=d(jd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pa=a(jd,"A",{href:!0});var hf=r(pa);Xp=d(hf,"FlaxPreTrainedModel"),hf.forEach(t),Yp=d(jd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd.forEach(t),Zp=l(ee),$n=a(ee,"P",{});var Pd=r($n);eh=d(Pd,`This model is also a Flax Linen
`),Fn=a(Pd,"A",{href:!0,rel:!0});var uf=r(Fn);th=d(uf,"flax.nn.Module"),uf.forEach(t),oh=d(Pd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pd.forEach(t),nh=l(ee),Jr=a(ee,"P",{});var mf=r(Jr);ah=d(mf,"Finally, this model supports inherent JAX features such as:"),mf.forEach(t),rh=l(ee),Ke=a(ee,"UL",{});var po=r(Ke);Xr=a(po,"LI",{});var ff=r(Xr);En=a(ff,"A",{href:!0,rel:!0});var _f=r(En);sh=d(_f,"Just-In-Time (JIT) compilation"),_f.forEach(t),ff.forEach(t),dh=l(po),Yr=a(po,"LI",{});var gf=r(Yr);qn=a(gf,"A",{href:!0,rel:!0});var bf=r(qn);ih=d(bf,"Automatic Differentiation"),bf.forEach(t),gf.forEach(t),lh=l(po),Zr=a(po,"LI",{});var kf=r(Zr);Mn=a(kf,"A",{href:!0,rel:!0});var vf=r(Mn);ch=d(vf,"Vectorization"),vf.forEach(t),kf.forEach(t),ph=l(po),es=a(po,"LI",{});var yf=r(es);Cn=a(yf,"A",{href:!0,rel:!0});var Tf=r(Cn);hh=d(Tf,"Parallelization"),Tf.forEach(t),yf.forEach(t),po.forEach(t),uh=l(ee),S=a(ee,"DIV",{class:!0});var te=r(S);g(jn.$$.fragment,te),mh=l(te),Nt=a(te,"P",{});var xa=r(Nt);fh=d(xa,"The "),ts=a(xa,"CODE",{});var wf=r(ts);_h=d(wf,"FlaxBlenderbotPreTrainedModel"),wf.forEach(t),gh=d(xa,"forward method, overrides the "),os=a(xa,"CODE",{});var Bf=r(os);bh=d(Bf,"__call__"),Bf.forEach(t),kh=d(xa," special method."),xa.forEach(t),vh=l(te),g(oo.$$.fragment,te),yh=l(te),ns=a(te,"P",{});var zf=r(ns);Th=d(zf,"Conversation example::"),zf.forEach(t),wh=l(te),as=a(te,"BLOCKQUOTE",{});var xf=r(as);rs=a(xf,"BLOCKQUOTE",{});var $f=r(rs);ss=a($f,"BLOCKQUOTE",{});var Ff=r(ss);ds=a(Ff,"P",{});var Ef=r(ds);Bh=d(Ef,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Ef.forEach(t),Ff.forEach(t),$f.forEach(t),xf.forEach(t),zh=l(te),is=a(te,"BLOCKQUOTE",{});var qf=r(is);ls=a(qf,"BLOCKQUOTE",{});var Mf=r(ls);cs=a(Mf,"BLOCKQUOTE",{});var Cf=r(cs);ps=a(Cf,"P",{});var jf=r(ps);xh=d(jf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),jf.forEach(t),Cf.forEach(t),Mf.forEach(t),qf.forEach(t),$h=l(te),hs=a(te,"BLOCKQUOTE",{});var Pf=r(hs);us=a(Pf,"BLOCKQUOTE",{});var Nf=r(us);ms=a(Nf,"BLOCKQUOTE",{});var If=r(ms);fs=a(If,"P",{});var Af=r(fs);Fh=d(Af,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Af.forEach(t),If.forEach(t),Nf.forEach(t),Pf.forEach(t),Eh=l(te),_s=a(te,"BLOCKQUOTE",{});var Of=r(_s);gs=a(Of,"BLOCKQUOTE",{});var Lf=r(gs);Pn=a(Lf,"BLOCKQUOTE",{});var Nd=r(Pn);no=a(Nd,"H1",{class:!0});var Id=r(no);ao=a(Id,"A",{id:!0,class:!0,href:!0});var Sf=r(ao);bs=a(Sf,"SPAN",{});var Df=r(bs);g(Nn.$$.fragment,Df),Df.forEach(t),Sf.forEach(t),qh=l(Id),ks=a(Id,"SPAN",{});var Gf=r(ks);Mh=d(Gf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Gf.forEach(t),Id.forEach(t),Ch=l(Nd),vs=a(Nd,"P",{});var Uf=r(vs);jh=d(Uf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Uf.forEach(t),Nd.forEach(t),Lf.forEach(t),Of.forEach(t),te.forEach(t),Ph=l(ee),tt=a(ee,"DIV",{class:!0});var $a=r(tt);g(In.$$.fragment,$a),Nh=l($a),ys=a($a,"P",{});var Wf=r(ys);Ih=d(Wf,"Example:"),Wf.forEach(t),Ah=l($a),g(An.$$.fragment,$a),$a.forEach(t),Oh=l(ee),ot=a(ee,"DIV",{class:!0});var Fa=r(ot);g(On.$$.fragment,Fa),Lh=l(Fa),Ts=a(Fa,"P",{});var Rf=r(Ts);Sh=d(Rf,"Example:"),Rf.forEach(t),Dh=l(Fa),g(Ln.$$.fragment,Fa),Fa.forEach(t),ee.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(r_)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(ne,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ne,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(G,"class","relative group"),c(U,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(U,"rel","nofollow"),c(W,"href","https://huggingface.co/sshleifer"),c(W,"rel","nofollow"),c(F,"href","https://github.com/facebookresearch/ParlAI"),c(F,"rel","nofollow"),c(_e,"id","implementation-notes"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#implementation-notes"),c(j,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Wn,"href","blenderbot-small"),c(It,"id","usage"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ko,"href","https://huggingface.co/facebook/blenderbot-3B"),c(ko,"rel","nofollow"),c(Kn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring"),c(Ot,"id","transformers.BlenderbotTokenizer"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotTokenizer"),c(vt,"class","relative group"),c(Qn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Jn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(ie,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Yn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(ta,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(oa,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ge,"class","docstring"),c(ze,"class","docstring"),c(Wt,"id","transformers.BlenderbotForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(na,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(aa,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(ra,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(xe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c($t,"class","docstring"),c(Kt,"id","transformers.TFBlenderbotModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFBlenderbotModel"),c(Ft,"class","relative group"),c(sa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(da,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(ce,"class","docstring"),c(Jt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(qt,"class","relative group"),c(ia,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(la,"href","/docs/transformers/master/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(ca,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ke,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(O,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(pa,"href","/docs/transformers/master/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(En,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qn,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(ao,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(L,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,f,h),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,$),e($,Ce),p(o,ue,h),p(o,E,h),e(E,ve),e(ve,oe),e(E,je),e(E,ne),e(ne,ae),e(E,Pe),p(o,$e,h),p(o,G,h),e(G,N),e(N,ye),b(R,ye,null),e(G,q),e(G,C),e(C,Ne),p(o,Q,h),p(o,J,h),e(J,Ie),e(J,U),e(U,Ae),e(J,Oe),p(o,I,h),p(o,me,h),e(me,re),p(o,Fe,h),p(o,fe,h),e(fe,H),e(H,Le),p(o,Ee,h),p(o,M,h),e(M,Se),e(M,W),e(W,De),e(M,m),e(M,F),e(F,Te),e(M,ht),p(o,Ve,h),p(o,j,h),e(j,_e),e(_e,Ge),b(we,Ge,null),e(j,K),e(j,V),e(V,ut),p(o,Qe,h),p(o,A,h),e(A,Be),e(Be,mt),e(Be,se),e(se,ft),e(Be,Ad),e(A,Od),e(A,uo),e(uo,Ld),e(uo,mo),e(mo,Sd),e(uo,Dd),e(A,Gd),e(A,Ue),e(Ue,Ud),e(Ue,Ea),e(Ea,Wd),e(Ue,Rd),e(Ue,qa),e(qa,Hd),e(Ue,Kd),e(Ue,Wn),e(Wn,Vd),e(Ue,Qd),p(o,qs,h),p(o,_t,h),e(_t,It),e(It,Ma),b(fo,Ma,null),e(_t,Jd),e(_t,Ca),e(Ca,Xd),p(o,Ms,h),p(o,Rn,h),e(Rn,Yd),p(o,Cs,h),b(_o,o,h),p(o,js,h),p(o,gt,h),e(gt,At),e(At,ja),b(go,ja,null),e(gt,Zd),e(gt,Pa),e(Pa,ei),p(o,Ps,h),p(o,de,h),b(bo,de,null),e(de,ti),e(de,bt),e(bt,oi),e(bt,Hn),e(Hn,ni),e(bt,ai),e(bt,ko),e(ko,ri),e(bt,si),e(de,di),e(de,kt),e(kt,ii),e(kt,Kn),e(Kn,li),e(kt,ci),e(kt,Vn),e(Vn,pi),e(kt,hi),e(de,ui),e(de,Na),e(Na,mi),e(de,fi),b(vo,de,null),p(o,Ns,h),p(o,vt,h),e(vt,Ot),e(Ot,Ia),b(yo,Ia,null),e(vt,_i),e(vt,Aa),e(Aa,gi),p(o,Is,h),p(o,ie,h),b(To,ie,null),e(ie,bi),e(ie,Oa),e(Oa,ki),e(ie,vi),e(ie,Lt),e(Lt,La),e(La,yi),e(Lt,Ti),e(Lt,Qn),e(Qn,wi),e(Lt,Bi),e(ie,zi),e(ie,wo),e(wo,xi),e(wo,Jn),e(Jn,$i),e(wo,Fi),e(ie,Ei),e(ie,Je),b(Bo,Je,null),e(Je,qi),e(Je,Sa),e(Sa,Mi),e(Je,Ci),e(Je,Da),e(Da,Xn),e(Xn,ji),e(Xn,Ga),e(Ga,Pi),p(o,As,h),p(o,yt,h),e(yt,St),e(St,Ua),b(zo,Ua,null),e(yt,Ni),e(yt,Wa),e(Wa,Ii),p(o,Os,h),p(o,le,h),b(xo,le,null),e(le,Ai),e(le,$o),e($o,Oi),e($o,Ra),e(Ra,Li),e($o,Si),e(le,Di),e(le,Dt),e(Dt,Ha),e(Ha,Gi),e(Dt,Ui),e(Dt,Yn),e(Yn,Wi),e(Dt,Ri),e(le,Hi),e(le,Fo),e(Fo,Ki),e(Fo,Zn),e(Zn,Vi),e(Fo,Qi),e(le,Ji),e(le,Xe),b(Eo,Xe,null),e(Xe,Xi),e(Xe,Ka),e(Ka,Yi),e(Xe,Zi),e(Xe,Va),e(Va,ea),e(ea,el),e(ea,Qa),e(Qa,tl),p(o,Ls,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Ja),b(qo,Ja,null),e(Tt,ol),e(Tt,Xa),e(Xa,nl),p(o,Ss,h),p(o,We,h),e(We,al),e(We,Ya),e(Ya,rl),e(We,sl),e(We,Za),e(Za,dl),e(We,il),e(We,er),e(er,ll),p(o,Ds,h),p(o,ze,h),b(Mo,ze,null),e(ze,cl),e(ze,Co),e(Co,pl),e(Co,ta),e(ta,hl),e(Co,ul),e(ze,ml),e(ze,jo),e(jo,fl),e(jo,Po),e(Po,_l),e(jo,gl),e(ze,bl),e(ze,ge),b(No,ge,null),e(ge,kl),e(ge,wt),e(wt,vl),e(wt,oa),e(oa,yl),e(wt,Tl),e(wt,tr),e(tr,wl),e(wt,Bl),e(ge,zl),b(Ut,ge,null),e(ge,xl),e(ge,or),e(or,$l),e(ge,Fl),b(Io,ge,null),p(o,Gs,h),p(o,Bt,h),e(Bt,Wt),e(Wt,nr),b(Ao,nr,null),e(Bt,El),e(Bt,ar),e(ar,ql),p(o,Us,h),p(o,Re,h),e(Re,Ml),e(Re,na),e(na,Cl),e(Re,jl),e(Re,rr),e(rr,Pl),e(Re,Nl),e(Re,sr),e(sr,Il),p(o,Ws,h),p(o,xe,h),b(Oo,xe,null),e(xe,Al),e(xe,Lo),e(Lo,Ol),e(Lo,aa),e(aa,Ll),e(Lo,Sl),e(xe,Dl),e(xe,So),e(So,Gl),e(So,Do),e(Do,Ul),e(So,Wl),e(xe,Rl),e(xe,X),b(Go,X,null),e(X,Hl),e(X,zt),e(zt,Kl),e(zt,ra),e(ra,Vl),e(zt,Ql),e(zt,dr),e(dr,Jl),e(zt,Xl),e(X,Yl),b(Rt,X,null),e(X,Zl),e(X,ir),e(ir,ec),e(X,tc),e(X,lr),e(lr,cr),e(cr,pr),e(pr,hr),e(hr,oc),e(X,nc),e(X,ur),e(ur,mr),e(mr,fr),e(fr,Uo),e(Uo,ac),e(Uo,_r),e(_r,rc),e(Uo,sc),p(o,Rs,h),p(o,xt,h),e(xt,Ht),e(Ht,gr),b(Wo,gr,null),e(xt,dc),e(xt,br),e(br,ic),p(o,Hs,h),p(o,$t,h),b(Ro,$t,null),e($t,lc),e($t,Ye),b(Ho,Ye,null),e(Ye,cc),e(Ye,kr),e(kr,pc),e(Ye,hc),b(Ko,Ye,null),p(o,Ks,h),p(o,Ft,h),e(Ft,Kt),e(Kt,vr),b(Vo,vr,null),e(Ft,uc),e(Ft,yr),e(yr,mc),p(o,Vs,h),p(o,ce,h),b(Qo,ce,null),e(ce,fc),e(ce,Jo),e(Jo,_c),e(Jo,sa),e(sa,gc),e(Jo,bc),e(ce,kc),e(ce,Xo),e(Xo,vc),e(Xo,Yo),e(Yo,yc),e(Xo,Tc),e(ce,wc),b(Vt,ce,null),e(ce,Bc),e(ce,be),b(Zo,be,null),e(be,zc),e(be,Et),e(Et,xc),e(Et,da),e(da,$c),e(Et,Fc),e(Et,Tr),e(Tr,Ec),e(Et,qc),e(be,Mc),b(Qt,be,null),e(be,Cc),e(be,wr),e(wr,jc),e(be,Pc),b(en,be,null),p(o,Qs,h),p(o,qt,h),e(qt,Jt),e(Jt,Br),b(tn,Br,null),e(qt,Nc),e(qt,zr),e(zr,Ic),p(o,Js,h),p(o,pe,h),b(on,pe,null),e(pe,Ac),e(pe,nn),e(nn,Oc),e(nn,ia),e(ia,Lc),e(nn,Sc),e(pe,Dc),e(pe,an),e(an,Gc),e(an,rn),e(rn,Uc),e(an,Wc),e(pe,Rc),b(Xt,pe,null),e(pe,Hc),e(pe,Y),b(sn,Y,null),e(Y,Kc),e(Y,Mt),e(Mt,Vc),e(Mt,la),e(la,Qc),e(Mt,Jc),e(Mt,xr),e(xr,Xc),e(Mt,Yc),e(Y,Zc),b(Yt,Y,null),e(Y,ep),e(Y,$r),e($r,tp),e(Y,op),e(Y,Fr),e(Fr,Er),e(Er,qr),e(qr,Mr),e(Mr,np),e(Y,ap),e(Y,Cr),e(Cr,jr),e(jr,Pr),e(Pr,dn),e(dn,rp),e(dn,Nr),e(Nr,sp),e(dn,dp),p(o,Xs,h),p(o,Ct,h),e(Ct,Zt),e(Zt,Ir),b(ln,Ir,null),e(Ct,ip),e(Ct,Ar),e(Ar,lp),p(o,Ys,h),p(o,O,h),b(cn,O,null),e(O,cp),e(O,pn),e(pn,pp),e(pn,ca),e(ca,hp),e(pn,up),e(O,mp),e(O,hn),e(hn,fp),e(hn,un),e(un,_p),e(hn,gp),e(O,bp),e(O,Or),e(Or,kp),e(O,vp),e(O,He),e(He,Lr),e(Lr,mn),e(mn,yp),e(He,Tp),e(He,Sr),e(Sr,fn),e(fn,wp),e(He,Bp),e(He,Dr),e(Dr,_n),e(_n,zp),e(He,xp),e(He,Gr),e(Gr,gn),e(gn,$p),e(O,Fp),e(O,ke),b(bn,ke,null),e(ke,Ep),e(ke,jt),e(jt,qp),e(jt,Ur),e(Ur,Mp),e(jt,Cp),e(jt,Wr),e(Wr,jp),e(jt,Pp),e(ke,Np),b(eo,ke,null),e(ke,Ip),e(ke,Rr),e(Rr,Ap),e(ke,Op),b(kn,ke,null),e(O,Lp),e(O,Ze),b(vn,Ze,null),e(Ze,Sp),e(Ze,Hr),e(Hr,Dp),e(Ze,Gp),b(yn,Ze,null),e(O,Up),e(O,et),b(Tn,et,null),e(et,Wp),e(et,Kr),e(Kr,Rp),e(et,Hp),b(wn,et,null),p(o,Zs,h),p(o,Pt,h),e(Pt,to),e(to,Vr),b(Bn,Vr,null),e(Pt,Kp),e(Pt,Qr),e(Qr,Vp),p(o,ed,h),p(o,L,h),b(zn,L,null),e(L,Qp),e(L,xn),e(xn,Jp),e(xn,pa),e(pa,Xp),e(xn,Yp),e(L,Zp),e(L,$n),e($n,eh),e($n,Fn),e(Fn,th),e($n,oh),e(L,nh),e(L,Jr),e(Jr,ah),e(L,rh),e(L,Ke),e(Ke,Xr),e(Xr,En),e(En,sh),e(Ke,dh),e(Ke,Yr),e(Yr,qn),e(qn,ih),e(Ke,lh),e(Ke,Zr),e(Zr,Mn),e(Mn,ch),e(Ke,ph),e(Ke,es),e(es,Cn),e(Cn,hh),e(L,uh),e(L,S),b(jn,S,null),e(S,mh),e(S,Nt),e(Nt,fh),e(Nt,ts),e(ts,_h),e(Nt,gh),e(Nt,os),e(os,bh),e(Nt,kh),e(S,vh),b(oo,S,null),e(S,yh),e(S,ns),e(ns,Th),e(S,wh),e(S,as),e(as,rs),e(rs,ss),e(ss,ds),e(ds,Bh),e(S,zh),e(S,is),e(is,ls),e(ls,cs),e(cs,ps),e(ps,xh),e(S,$h),e(S,hs),e(hs,us),e(us,ms),e(ms,fs),e(fs,Fh),e(S,Eh),e(S,_s),e(_s,gs),e(gs,Pn),e(Pn,no),e(no,ao),e(ao,bs),b(Nn,bs,null),e(no,qh),e(no,ks),e(ks,Mh),e(Pn,Ch),e(Pn,vs),e(vs,jh),e(L,Ph),e(L,tt),b(In,tt,null),e(tt,Nh),e(tt,ys),e(ys,Ih),e(tt,Ah),b(An,tt,null),e(L,Oh),e(L,ot),b(On,ot,null),e(ot,Lh),e(ot,Ts),e(Ts,Sh),e(ot,Dh),b(Ln,ot,null),td=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Ut.$set(Sn);const ws={};h&2&&(ws.$$scope={dirty:h,ctx:o}),Rt.$set(ws);const Bs={};h&2&&(Bs.$$scope={dirty:h,ctx:o}),Vt.$set(Bs);const zs={};h&2&&(zs.$$scope={dirty:h,ctx:o}),Qt.$set(zs);const ro={};h&2&&(ro.$$scope={dirty:h,ctx:o}),Xt.$set(ro);const xs={};h&2&&(xs.$$scope={dirty:h,ctx:o}),Yt.$set(xs);const $s={};h&2&&($s.$$scope={dirty:h,ctx:o}),eo.$set($s);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){td||(k(B.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(vo.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(Eo.$$.fragment,o),k(qo.$$.fragment,o),k(Mo.$$.fragment,o),k(No.$$.fragment,o),k(Ut.$$.fragment,o),k(Io.$$.fragment,o),k(Ao.$$.fragment,o),k(Oo.$$.fragment,o),k(Go.$$.fragment,o),k(Rt.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Qo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(Qt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(sn.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(kn.$$.fragment,o),k(vn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(zn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(Nn.$$.fragment,o),k(In.$$.fragment,o),k(An.$$.fragment,o),k(On.$$.fragment,o),k(Ln.$$.fragment,o),td=!0)},o(o){v(B.$$.fragment,o),v(R.$$.fragment,o),v(we.$$.fragment,o),v(fo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(bo.$$.fragment,o),v(vo.$$.fragment,o),v(yo.$$.fragment,o),v(To.$$.fragment,o),v(Bo.$$.fragment,o),v(zo.$$.fragment,o),v(xo.$$.fragment,o),v(Eo.$$.fragment,o),v(qo.$$.fragment,o),v(Mo.$$.fragment,o),v(No.$$.fragment,o),v(Ut.$$.fragment,o),v(Io.$$.fragment,o),v(Ao.$$.fragment,o),v(Oo.$$.fragment,o),v(Go.$$.fragment,o),v(Rt.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Qo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(Qt.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(Xt.$$.fragment,o),v(sn.$$.fragment,o),v(Yt.$$.fragment,o),v(ln.$$.fragment,o),v(cn.$$.fragment,o),v(bn.$$.fragment,o),v(eo.$$.fragment,o),v(kn.$$.fragment,o),v(vn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(Bn.$$.fragment,o),v(zn.$$.fragment,o),v(jn.$$.fragment,o),v(oo.$$.fragment,o),v(Nn.$$.fragment,o),v(In.$$.fragment,o),v(An.$$.fragment,o),v(On.$$.fragment,o),v(Ln.$$.fragment,o),td=!1},d(o){t(u),o&&t(x),o&&t(f),y(B),o&&t(ue),o&&t(E),o&&t($e),o&&t(G),y(R),o&&t(Q),o&&t(J),o&&t(I),o&&t(me),o&&t(Fe),o&&t(fe),o&&t(Ee),o&&t(M),o&&t(Ve),o&&t(j),y(we),o&&t(Qe),o&&t(A),o&&t(qs),o&&t(_t),y(fo),o&&t(Ms),o&&t(Rn),o&&t(Cs),y(_o,o),o&&t(js),o&&t(gt),y(go),o&&t(Ps),o&&t(de),y(bo),y(vo),o&&t(Ns),o&&t(vt),y(yo),o&&t(Is),o&&t(ie),y(To),y(Bo),o&&t(As),o&&t(yt),y(zo),o&&t(Os),o&&t(le),y(xo),y(Eo),o&&t(Ls),o&&t(Tt),y(qo),o&&t(Ss),o&&t(We),o&&t(Ds),o&&t(ze),y(Mo),y(No),y(Ut),y(Io),o&&t(Gs),o&&t(Bt),y(Ao),o&&t(Us),o&&t(Re),o&&t(Ws),o&&t(xe),y(Oo),y(Go),y(Rt),o&&t(Rs),o&&t(xt),y(Wo),o&&t(Hs),o&&t($t),y(Ro),y(Ho),y(Ko),o&&t(Ks),o&&t(Ft),y(Vo),o&&t(Vs),o&&t(ce),y(Qo),y(Vt),y(Zo),y(Qt),y(en),o&&t(Qs),o&&t(qt),y(tn),o&&t(Js),o&&t(pe),y(on),y(Xt),y(sn),y(Yt),o&&t(Xs),o&&t(Ct),y(ln),o&&t(Ys),o&&t(O),y(cn),y(bn),y(eo),y(kn),y(vn),y(yn),y(Tn),y(wn),o&&t(Zs),o&&t(Pt),y(Bn),o&&t(ed),o&&t(L),y(zn),y(jn),y(oo),y(Nn),y(In),y(An),y(On),y(Ln)}}}const r_={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function s_(D,u,x){let{fw:f}=u;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class u_ extends Hf{constructor(u){super();Kf(this,u,s_,a_,Vf,{fw:0})}}export{u_ as default,r_ as metadata};
