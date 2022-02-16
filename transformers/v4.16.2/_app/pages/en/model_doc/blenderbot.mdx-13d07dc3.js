import{S as Uf,i as Rf,s as Hf,e as n,k as i,w as _,t as s,L as Kf,c as r,d as t,m as l,a,x as g,h as d,b as c,J as e,g as p,y as b,q as v,o as k,B as y}from"../../../chunks/vendor-b1433968.js";import{T as po}from"../../../chunks/Tip-c3840994.js";import{D as A}from"../../../chunks/Docstring-ff504c58.js";import{C as pt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as he}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Vf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Qf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Jf(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,ae,$e,fe,H,Se,qe,M,Le,U,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),q=n("p"),ke=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),re=n("code"),Pe=s("model(inputs)"),Fe=s("."),G=i(),P=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),N=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Se=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=r(m,"UL",{});var Te=a(T);z=r(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),q=r(m,"P",{});var j=a(q);ke=d(j,"This second option is useful when using "),oe=r(j,"CODE",{});var _e=a(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),re=r(j,"CODE",{});var Ge=a(re);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),P=r(m,"P",{});var we=a(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=r(m,"UL",{});var K=a(E);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=r(K,"LI",{});var O=a(N);me=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(O,"CODE",{});var Be=a(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(O," or "),H=r(O,"CODE",{});var mt=a(H);Se=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),M=r(K,"LI",{});var se=a(M);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var ft=a(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,ue,$),p(m,q,$),e(q,ke),e(q,oe),e(oe,je),e(q,ne),e(q,re),e(re,Pe),e(q,Fe),p(m,G,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,N),e(N,me),e(N,ae),e(ae,$e),e(N,fe),e(N,H),e(H,Se),e(E,qe),e(E,M),e(M,Le),e(M,U),e(U,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(q),m&&t(G),m&&t(P),m&&t(R),m&&t(E)}}}function Xf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Yf(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,ae,$e,fe,H,Se,qe,M,Le,U,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),q=n("p"),ke=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),re=n("code"),Pe=s("model(inputs)"),Fe=s("."),G=i(),P=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),N=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Se=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=r(m,"UL",{});var Te=a(T);z=r(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),q=r(m,"P",{});var j=a(q);ke=d(j,"This second option is useful when using "),oe=r(j,"CODE",{});var _e=a(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),re=r(j,"CODE",{});var Ge=a(re);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),P=r(m,"P",{});var we=a(P);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=r(m,"UL",{});var K=a(E);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=r(K,"LI",{});var O=a(N);me=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(O,"CODE",{});var Be=a(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(O," or "),H=r(O,"CODE",{});var mt=a(H);Se=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),O.forEach(t),qe=l(K),M=r(K,"LI",{});var se=a(M);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var ft=a(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,ue,$),p(m,q,$),e(q,ke),e(q,oe),e(oe,je),e(q,ne),e(q,re),e(re,Pe),e(q,Fe),p(m,G,$),p(m,P,$),e(P,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,N),e(N,me),e(N,ae),e(ae,$e),e(N,fe),e(N,H),e(H,Se),e(E,qe),e(E,M),e(M,Le),e(M,U),e(U,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(q),m&&t(G),m&&t(P),m&&t(R),m&&t(E)}}}function Zf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function e_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function t_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function o_(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,P,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,N,me,ae,$e,fe,H,Se,qe,M,Le,U,De,m,$,Te,ht,Ve,j,_e,Ge,we,K,V,ut,Qe,O,Be,mt,se,ft,Nd,Od,ho,Ad,uo,Id,Sd,Ld,We,Dd,$r,Gd,Wd,qr,Ud,Rd,Wn,Hd,Kd,qs,_t,Nt,Er,mo,Vd,Mr,Qd,Es,Un,Jd,Ms,fo,Cs,gt,Ot,Cr,_o,Xd,jr,Yd,js,de,go,Zd,bt,ei,Rn,ti,oi,bo,ni,ri,ai,vt,si,Hn,di,ii,Kn,li,ci,pi,Pr,hi,ui,vo,Ps,kt,At,Nr,ko,mi,Or,fi,Ns,ie,yo,_i,Ar,gi,bi,It,Ir,vi,ki,Vn,yi,Ti,wi,To,Bi,Qn,zi,xi,Fi,Je,wo,$i,Sr,qi,Ei,Lr,Jn,Mi,Dr,Ci,Os,yt,St,Gr,Bo,ji,Wr,Pi,As,le,zo,Ni,xo,Oi,Ur,Ai,Ii,Si,Lt,Rr,Li,Di,Xn,Gi,Wi,Ui,Fo,Ri,Yn,Hi,Ki,Vi,Xe,$o,Qi,Hr,Ji,Xi,Kr,Zn,Yi,Vr,Zi,Is,Tt,Dt,Qr,qo,el,Jr,tl,Ss,Ue,ol,Xr,nl,rl,Yr,al,sl,Zr,dl,Ls,ze,Eo,il,Mo,ll,er,cl,pl,hl,Co,ul,jo,ml,fl,_l,ge,Po,gl,wt,bl,tr,vl,kl,ea,yl,Tl,wl,Gt,Bl,ta,zl,xl,No,Ds,Bt,Wt,oa,Oo,Fl,na,$l,Gs,Re,ql,or,El,Ml,ra,Cl,jl,aa,Pl,Ws,xe,Ao,Nl,Io,Ol,nr,Al,Il,Sl,So,Ll,Lo,Dl,Gl,Wl,X,Do,Ul,zt,Rl,rr,Hl,Kl,sa,Vl,Ql,Jl,Ut,Xl,da,Yl,Zl,ia,la,ca,pa,ec,tc,ha,ua,ma,Go,oc,fa,nc,rc,Us,xt,Rt,_a,Wo,ac,ga,sc,Rs,Uo,Ye,Ro,dc,ba,ic,lc,Ho,Hs,Ft,Ht,va,Ko,cc,ka,pc,Ks,ce,Vo,hc,Qo,uc,ar,mc,fc,_c,Jo,gc,Xo,bc,vc,kc,Kt,yc,be,Yo,Tc,$t,wc,sr,Bc,zc,ya,xc,Fc,$c,Vt,qc,Ta,Ec,Mc,Zo,Vs,qt,Qt,wa,en,Cc,Ba,jc,Qs,pe,tn,Pc,on,Nc,dr,Oc,Ac,Ic,nn,Sc,rn,Lc,Dc,Gc,Jt,Wc,Y,an,Uc,Et,Rc,ir,Hc,Kc,za,Vc,Qc,Jc,Xt,Xc,xa,Yc,Zc,Fa,$a,qa,Ea,ep,tp,Ma,Ca,ja,sn,op,Pa,np,rp,Js,Mt,Yt,Na,dn,ap,Oa,sp,Xs,I,ln,dp,cn,ip,lr,lp,cp,pp,pn,hp,hn,up,mp,fp,Aa,_p,gp,He,Ia,un,bp,vp,Sa,mn,kp,yp,La,fn,Tp,wp,Da,_n,Bp,zp,ve,gn,xp,Ct,Fp,Ga,$p,qp,Wa,Ep,Mp,Cp,Zt,jp,Ua,Pp,Np,bn,Op,Ze,vn,Ap,Ra,Ip,Sp,kn,Lp,et,yn,Dp,Ha,Gp,Wp,Tn,Ys,jt,eo,Ka,wn,Up,Va,Rp,Zs,S,Bn,Hp,zn,Kp,cr,Vp,Qp,Jp,xn,Xp,Fn,Yp,Zp,eh,Qa,th,oh,Ke,Ja,$n,nh,rh,Xa,qn,ah,sh,Ya,En,dh,ih,Za,Mn,lh,ch,L,Cn,ph,Pt,hh,es,uh,mh,ts,fh,_h,gh,to,bh,os,vh,kh,ns,rs,as,ss,yh,Th,ds,is,ls,cs,wh,Bh,ps,hs,us,ms,zh,xh,fs,_s,jn,oo,no,gs,Pn,Fh,bs,$h,qh,vs,Eh,Mh,tt,Nn,Ch,ks,jh,Ph,On,Nh,ot,An,Oh,ys,Ah,Ih,In,ed;return B=new he({}),R=new he({}),we=new he({}),mo=new he({}),fo=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

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
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),_o=new he({}),go=new A({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ko=new he({}),yo=new A({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),wo=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new he({}),zo=new A({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),$o=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qo=new he({}),Eo=new A({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1064",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new A({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1102",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new po({props:{$$slots:{default:[Vf]},$$scope:{ctx:D}}}),No=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new he({}),Ao=new A({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new A({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1257",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ut=new po({props:{$$slots:{default:[Qf]},$$scope:{ctx:D}}}),Wo=new he({}),Ro=new A({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_blenderbot.py#L1421",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new he({}),Vo=new A({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1171",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kt=new po({props:{$$slots:{default:[Jf]},$$scope:{ctx:D}}}),Yo=new A({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1196",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new po({props:{$$slots:{default:[Xf]},$$scope:{ctx:D}}}),Zo=new pt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new he({}),tn=new A({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1291",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jt=new po({props:{$$slots:{default:[Yf]},$$scope:{ctx:D}}}),an=new A({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1337",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xt=new po({props:{$$slots:{default:[Zf]},$$scope:{ctx:D}}}),dn=new he({}),ln=new A({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new po({props:{$$slots:{default:[e_]},$$scope:{ctx:D}}}),bn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new pt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),wn=new he({}),Bn=new A({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new po({props:{$$slots:{default:[t_]},$$scope:{ctx:D}}}),Pn=new he({}),Nn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),An=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new pt({props:{code:`import jax.numpy as jnp
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),F=n("span"),Ce=s("Blenderbot"),ue=i(),q=n("p"),ke=n("strong"),oe=s("DISCLAIMER:"),je=s(" If you see something strange, file a "),ne=n("a"),re=s("Github Issue"),Pe=s(" ."),Fe=i(),G=n("h2"),P=n("a"),ye=n("span"),_(R.$$.fragment),E=i(),C=n("span"),Ne=s("Overview"),Q=i(),J=n("p"),Oe=s("The Blender chatbot model was proposed in "),W=n("a"),Ae=s("Recipes for building an open-domain chatbot"),Ie=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),me=n("p"),ae=s("The abstract of the paper is the following:"),$e=i(),fe=n("p"),H=n("em"),Se=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),M=n("p"),Le=s("This model was contributed by "),U=n("a"),De=s("sshleifer"),m=s(". The authors\u2019 code can be found "),$=n("a"),Te=s("here"),ht=s(" ."),Ve=i(),j=n("h2"),_e=n("a"),Ge=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=s("Implementation Notes"),Qe=i(),O=n("ul"),Be=n("li"),mt=s("Blenderbot uses a standard "),se=n("a"),ft=s("seq2seq model transformer"),Nd=s(" based architecture."),Od=i(),ho=n("li"),Ad=s("Available checkpoints can be found in the "),uo=n("a"),Id=s("model hub"),Sd=s("."),Ld=i(),We=n("li"),Dd=s("This is the "),$r=n("em"),Gd=s("default"),Wd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),qr=n("code"),Ud=s("facebook/blenderbot_small_90M"),Rd=s(`, have a different architecture and consequently should be used with
`),Wn=n("a"),Hd=s("BlenderbotSmall"),Kd=s("."),qs=i(),_t=n("h2"),Nt=n("a"),Er=n("span"),_(mo.$$.fragment),Vd=i(),Mr=n("span"),Qd=s("Usage"),Es=i(),Un=n("p"),Jd=s("Here is an example of model usage:"),Ms=i(),_(fo.$$.fragment),Cs=i(),gt=n("h2"),Ot=n("a"),Cr=n("span"),_(_o.$$.fragment),Xd=i(),jr=n("span"),Yd=s("BlenderbotConfig"),js=i(),de=n("div"),_(go.$$.fragment),Zd=i(),bt=n("p"),ei=s("This is the configuration class to store the configuration of a "),Rn=n("a"),ti=s("BlenderbotModel"),oi=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=n("a"),ni=s("facebook/blenderbot-3B"),ri=s(" architecture."),ai=i(),vt=n("p"),si=s("Configuration objects inherit from "),Hn=n("a"),di=s("PretrainedConfig"),ii=s(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),li=s("PretrainedConfig"),ci=s(" for more information."),pi=i(),Pr=n("p"),hi=s("Example:"),ui=i(),_(vo.$$.fragment),Ps=i(),kt=n("h2"),At=n("a"),Nr=n("span"),_(ko.$$.fragment),mi=i(),Or=n("span"),fi=s("BlenderbotTokenizer"),Ns=i(),ie=n("div"),_(yo.$$.fragment),_i=i(),Ar=n("p"),gi=s("Construct a Blenderbot tokenizer."),bi=i(),It=n("p"),Ir=n("code"),vi=s("Blenderbot"),ki=s(" is nearly identical to "),Vn=n("a"),yi=s("RobertaTokenizer"),Ti=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),wi=i(),To=n("p"),Bi=s("Refer to superclass "),Qn=n("a"),zi=s("RobertaTokenizer"),xi=s(" for usage examples and documentation concerning parameters."),Fi=i(),Je=n("div"),_(wo.$$.fragment),$i=i(),Sr=n("p"),qi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ei=i(),Lr=n("ul"),Jn=n("li"),Mi=s("single sequence: "),Dr=n("code"),Ci=s("X </s>"),Os=i(),yt=n("h2"),St=n("a"),Gr=n("span"),_(Bo.$$.fragment),ji=i(),Wr=n("span"),Pi=s("BlenderbotTokenizerFast"),As=i(),le=n("div"),_(zo.$$.fragment),Ni=i(),xo=n("p"),Oi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ur=n("em"),Ai=s("tokenizers"),Ii=s(" library)."),Si=i(),Lt=n("p"),Rr=n("code"),Li=s("BlenderbotFast"),Di=s(" is nearly identical to "),Xn=n("a"),Gi=s("RobertaTokenizerFast"),Wi=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Ui=i(),Fo=n("p"),Ri=s("Refer to superclass "),Yn=n("a"),Hi=s("RobertaTokenizerFast"),Ki=s(" for usage examples and documentation concerning parameters."),Vi=i(),Xe=n("div"),_($o.$$.fragment),Qi=i(),Hr=n("p"),Ji=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Xi=i(),Kr=n("ul"),Zn=n("li"),Yi=s("single sequence: "),Vr=n("code"),Zi=s("X </s>"),Is=i(),Tt=n("h2"),Dt=n("a"),Qr=n("span"),_(qo.$$.fragment),el=i(),Jr=n("span"),tl=s("BlenderbotModel"),Ss=i(),Ue=n("p"),ol=s("See "),Xr=n("code"),nl=s("transformers.BartModel"),rl=s(" for arguments to "),Yr=n("em"),al=s("forward"),sl=s(" and "),Zr=n("em"),dl=s("generate"),Ls=i(),ze=n("div"),_(Eo.$$.fragment),il=i(),Mo=n("p"),ll=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),er=n("a"),cl=s("PreTrainedModel"),pl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl=i(),Co=n("p"),ul=s("This model is also a PyTorch "),jo=n("a"),ml=s("torch.nn.Module"),fl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l=i(),ge=n("div"),_(Po.$$.fragment),gl=i(),wt=n("p"),bl=s("The "),tr=n("a"),vl=s("BlenderbotModel"),kl=s(" forward method, overrides the "),ea=n("code"),yl=s("__call__"),Tl=s(" special method."),wl=i(),_(Gt.$$.fragment),Bl=i(),ta=n("p"),zl=s("Example:"),xl=i(),_(No.$$.fragment),Ds=i(),Bt=n("h2"),Wt=n("a"),oa=n("span"),_(Oo.$$.fragment),Fl=i(),na=n("span"),$l=s("BlenderbotForConditionalGeneration"),Gs=i(),Re=n("p"),ql=s("See "),or=n("a"),El=s("BartForConditionalGeneration"),Ml=s(" for arguments to "),ra=n("em"),Cl=s("forward"),jl=s(" and "),aa=n("em"),Pl=s("generate"),Ws=i(),xe=n("div"),_(Ao.$$.fragment),Nl=i(),Io=n("p"),Ol=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=n("a"),Al=s("PreTrainedModel"),Il=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sl=i(),So=n("p"),Ll=s("This model is also a PyTorch "),Lo=n("a"),Dl=s("torch.nn.Module"),Gl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl=i(),X=n("div"),_(Do.$$.fragment),Ul=i(),zt=n("p"),Rl=s("The "),rr=n("a"),Hl=s("BlenderbotForConditionalGeneration"),Kl=s(" forward method, overrides the "),sa=n("code"),Vl=s("__call__"),Ql=s(" special method."),Jl=i(),_(Ut.$$.fragment),Xl=i(),da=n("p"),Yl=s("Conversation example::"),Zl=i(),ia=n("blockquote"),la=n("blockquote"),ca=n("blockquote"),pa=n("p"),ec=s(`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),tc=i(),ha=n("blockquote"),ua=n("blockquote"),ma=n("blockquote"),Go=n("p"),oc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),fa=n("s"),nc=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),rc=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Us=i(),xt=n("h2"),Rt=n("a"),_a=n("span"),_(Wo.$$.fragment),ac=i(),ga=n("span"),sc=s("BlenderbotForCausalLM"),Rs=i(),Uo=n("div"),Ye=n("div"),_(Ro.$$.fragment),dc=i(),ba=n("p"),ic=s("Example:"),lc=i(),_(Ho.$$.fragment),Hs=i(),Ft=n("h2"),Ht=n("a"),va=n("span"),_(Ko.$$.fragment),cc=i(),ka=n("span"),pc=s("TFBlenderbotModel"),Ks=i(),ce=n("div"),_(Vo.$$.fragment),hc=i(),Qo=n("p"),uc=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=n("a"),mc=s("TFPreTrainedModel"),fc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=i(),Jo=n("p"),gc=s("This model is also a "),Xo=n("a"),bc=s("tf.keras.Model"),vc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kc=i(),_(Kt.$$.fragment),yc=i(),be=n("div"),_(Yo.$$.fragment),Tc=i(),$t=n("p"),wc=s("The "),sr=n("a"),Bc=s("TFBlenderbotModel"),zc=s(" forward method, overrides the "),ya=n("code"),xc=s("__call__"),Fc=s(" special method."),$c=i(),_(Vt.$$.fragment),qc=i(),Ta=n("p"),Ec=s("Example:"),Mc=i(),_(Zo.$$.fragment),Vs=i(),qt=n("h2"),Qt=n("a"),wa=n("span"),_(en.$$.fragment),Cc=i(),Ba=n("span"),jc=s("TFBlenderbotForConditionalGeneration"),Qs=i(),pe=n("div"),_(tn.$$.fragment),Pc=i(),on=n("p"),Nc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=n("a"),Oc=s("TFPreTrainedModel"),Ac=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=i(),nn=n("p"),Sc=s("This model is also a "),rn=n("a"),Lc=s("tf.keras.Model"),Dc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gc=i(),_(Jt.$$.fragment),Wc=i(),Y=n("div"),_(an.$$.fragment),Uc=i(),Et=n("p"),Rc=s("The "),ir=n("a"),Hc=s("TFBlenderbotForConditionalGeneration"),Kc=s(" forward method, overrides the "),za=n("code"),Vc=s("__call__"),Qc=s(" special method."),Jc=i(),_(Xt.$$.fragment),Xc=i(),xa=n("p"),Yc=s("Conversation example::"),Zc=i(),Fa=n("blockquote"),$a=n("blockquote"),qa=n("blockquote"),Ea=n("p"),ep=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),tp=i(),Ma=n("blockquote"),Ca=n("blockquote"),ja=n("blockquote"),sn=n("p"),op=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Pa=n("s"),np=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),rp=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Js=i(),Mt=n("h2"),Yt=n("a"),Na=n("span"),_(dn.$$.fragment),ap=i(),Oa=n("span"),sp=s("FlaxBlenderbotModel"),Xs=i(),I=n("div"),_(ln.$$.fragment),dp=i(),cn=n("p"),ip=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),lr=n("a"),lp=s("FlaxPreTrainedModel"),cp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=i(),pn=n("p"),hp=s(`This model is also a Flax Linen
`),hn=n("a"),up=s("flax.nn.Module"),mp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fp=i(),Aa=n("p"),_p=s("Finally, this model supports inherent JAX features such as:"),gp=i(),He=n("ul"),Ia=n("li"),un=n("a"),bp=s("Just-In-Time (JIT) compilation"),vp=i(),Sa=n("li"),mn=n("a"),kp=s("Automatic Differentiation"),yp=i(),La=n("li"),fn=n("a"),Tp=s("Vectorization"),wp=i(),Da=n("li"),_n=n("a"),Bp=s("Parallelization"),zp=i(),ve=n("div"),_(gn.$$.fragment),xp=i(),Ct=n("p"),Fp=s("The "),Ga=n("code"),$p=s("FlaxBlenderbotPreTrainedModel"),qp=s("forward method, overrides the "),Wa=n("code"),Ep=s("__call__"),Mp=s(" special method."),Cp=i(),_(Zt.$$.fragment),jp=i(),Ua=n("p"),Pp=s("Example:"),Np=i(),_(bn.$$.fragment),Op=i(),Ze=n("div"),_(vn.$$.fragment),Ap=i(),Ra=n("p"),Ip=s("Example:"),Sp=i(),_(kn.$$.fragment),Lp=i(),et=n("div"),_(yn.$$.fragment),Dp=i(),Ha=n("p"),Gp=s("Example:"),Wp=i(),_(Tn.$$.fragment),Ys=i(),jt=n("h2"),eo=n("a"),Ka=n("span"),_(wn.$$.fragment),Up=i(),Va=n("span"),Rp=s("FlaxBlenderbotForConditionalGeneration"),Zs=i(),S=n("div"),_(Bn.$$.fragment),Hp=i(),zn=n("p"),Kp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cr=n("a"),Vp=s("FlaxPreTrainedModel"),Qp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jp=i(),xn=n("p"),Xp=s(`This model is also a Flax Linen
`),Fn=n("a"),Yp=s("flax.nn.Module"),Zp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eh=i(),Qa=n("p"),th=s("Finally, this model supports inherent JAX features such as:"),oh=i(),Ke=n("ul"),Ja=n("li"),$n=n("a"),nh=s("Just-In-Time (JIT) compilation"),rh=i(),Xa=n("li"),qn=n("a"),ah=s("Automatic Differentiation"),sh=i(),Ya=n("li"),En=n("a"),dh=s("Vectorization"),ih=i(),Za=n("li"),Mn=n("a"),lh=s("Parallelization"),ch=i(),L=n("div"),_(Cn.$$.fragment),ph=i(),Pt=n("p"),hh=s("The "),es=n("code"),uh=s("FlaxBlenderbotPreTrainedModel"),mh=s("forward method, overrides the "),ts=n("code"),fh=s("__call__"),_h=s(" special method."),gh=i(),_(to.$$.fragment),bh=i(),os=n("p"),vh=s("Conversation example::"),kh=i(),ns=n("blockquote"),rs=n("blockquote"),as=n("blockquote"),ss=n("p"),yh=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Th=i(),ds=n("blockquote"),is=n("blockquote"),ls=n("blockquote"),cs=n("p"),wh=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Bh=i(),ps=n("blockquote"),hs=n("blockquote"),us=n("blockquote"),ms=n("p"),zh=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),xh=i(),fs=n("blockquote"),_s=n("blockquote"),jn=n("blockquote"),oo=n("h1"),no=n("a"),gs=n("span"),_(Pn.$$.fragment),Fh=i(),bs=n("span"),$h=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),qh=i(),vs=n("p"),Eh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Mh=i(),tt=n("div"),_(Nn.$$.fragment),Ch=i(),ks=n("p"),jh=s("Example:"),Ph=i(),_(On.$$.fragment),Nh=i(),ot=n("div"),_(An.$$.fragment),Oh=i(),ys=n("p"),Ah=s("Example:"),Ih=i(),_(In.$$.fragment),this.h()},l(o){const h=Kf('[data-svelte="svelte-1phssyn"]',document.head);u=r(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),f=r(o,"H1",{class:!0});var Sn=a(f);T=r(Sn,"A",{id:!0,class:!0,href:!0});var Ts=a(T);z=r(Ts,"SPAN",{});var ws=a(z);g(B.$$.fragment,ws),ws.forEach(t),Ts.forEach(t),w=l(Sn),F=r(Sn,"SPAN",{});var Bs=a(F);Ce=d(Bs,"Blenderbot"),Bs.forEach(t),Sn.forEach(t),ue=l(o),q=r(o,"P",{});var ro=a(q);ke=r(ro,"STRONG",{});var zs=a(ke);oe=d(zs,"DISCLAIMER:"),zs.forEach(t),je=d(ro," If you see something strange, file a "),ne=r(ro,"A",{href:!0,rel:!0});var xs=a(ne);re=d(xs,"Github Issue"),xs.forEach(t),Pe=d(ro," ."),ro.forEach(t),Fe=l(o),G=r(o,"H2",{class:!0});var Ln=a(G);P=r(Ln,"A",{id:!0,class:!0,href:!0});var Dh=a(P);ye=r(Dh,"SPAN",{});var Gh=a(ye);g(R.$$.fragment,Gh),Gh.forEach(t),Dh.forEach(t),E=l(Ln),C=r(Ln,"SPAN",{});var Wh=a(C);Ne=d(Wh,"Overview"),Wh.forEach(t),Ln.forEach(t),Q=l(o),J=r(o,"P",{});var td=a(J);Oe=d(td,"The Blender chatbot model was proposed in "),W=r(td,"A",{href:!0,rel:!0});var Uh=a(W);Ae=d(Uh,"Recipes for building an open-domain chatbot"),Uh.forEach(t),Ie=d(td,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),td.forEach(t),N=l(o),me=r(o,"P",{});var Rh=a(me);ae=d(Rh,"The abstract of the paper is the following:"),Rh.forEach(t),$e=l(o),fe=r(o,"P",{});var Hh=a(fe);H=r(Hh,"EM",{});var Kh=a(H);Se=d(Kh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Kh.forEach(t),Hh.forEach(t),qe=l(o),M=r(o,"P",{});var pr=a(M);Le=d(pr,"This model was contributed by "),U=r(pr,"A",{href:!0,rel:!0});var Vh=a(U);De=d(Vh,"sshleifer"),Vh.forEach(t),m=d(pr,". The authors\u2019 code can be found "),$=r(pr,"A",{href:!0,rel:!0});var Qh=a($);Te=d(Qh,"here"),Qh.forEach(t),ht=d(pr," ."),pr.forEach(t),Ve=l(o),j=r(o,"H2",{class:!0});var od=a(j);_e=r(od,"A",{id:!0,class:!0,href:!0});var Jh=a(_e);Ge=r(Jh,"SPAN",{});var Xh=a(Ge);g(we.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),K=l(od),V=r(od,"SPAN",{});var Yh=a(V);ut=d(Yh,"Implementation Notes"),Yh.forEach(t),od.forEach(t),Qe=l(o),O=r(o,"UL",{});var hr=a(O);Be=r(hr,"LI",{});var nd=a(Be);mt=d(nd,"Blenderbot uses a standard "),se=r(nd,"A",{href:!0,rel:!0});var Zh=a(se);ft=d(Zh,"seq2seq model transformer"),Zh.forEach(t),Nd=d(nd," based architecture."),nd.forEach(t),Od=l(hr),ho=r(hr,"LI",{});var rd=a(ho);Ad=d(rd,"Available checkpoints can be found in the "),uo=r(rd,"A",{href:!0,rel:!0});var eu=a(uo);Id=d(eu,"model hub"),eu.forEach(t),Sd=d(rd,"."),rd.forEach(t),Ld=l(hr),We=r(hr,"LI",{});var ao=a(We);Dd=d(ao,"This is the "),$r=r(ao,"EM",{});var tu=a($r);Gd=d(tu,"default"),tu.forEach(t),Wd=d(ao,` Blenderbot model class. However, some smaller checkpoints, such as
`),qr=r(ao,"CODE",{});var ou=a(qr);Ud=d(ou,"facebook/blenderbot_small_90M"),ou.forEach(t),Rd=d(ao,`, have a different architecture and consequently should be used with
`),Wn=r(ao,"A",{href:!0});var nu=a(Wn);Hd=d(nu,"BlenderbotSmall"),nu.forEach(t),Kd=d(ao,"."),ao.forEach(t),hr.forEach(t),qs=l(o),_t=r(o,"H2",{class:!0});var ad=a(_t);Nt=r(ad,"A",{id:!0,class:!0,href:!0});var ru=a(Nt);Er=r(ru,"SPAN",{});var au=a(Er);g(mo.$$.fragment,au),au.forEach(t),ru.forEach(t),Vd=l(ad),Mr=r(ad,"SPAN",{});var su=a(Mr);Qd=d(su,"Usage"),su.forEach(t),ad.forEach(t),Es=l(o),Un=r(o,"P",{});var du=a(Un);Jd=d(du,"Here is an example of model usage:"),du.forEach(t),Ms=l(o),g(fo.$$.fragment,o),Cs=l(o),gt=r(o,"H2",{class:!0});var sd=a(gt);Ot=r(sd,"A",{id:!0,class:!0,href:!0});var iu=a(Ot);Cr=r(iu,"SPAN",{});var lu=a(Cr);g(_o.$$.fragment,lu),lu.forEach(t),iu.forEach(t),Xd=l(sd),jr=r(sd,"SPAN",{});var cu=a(jr);Yd=d(cu,"BlenderbotConfig"),cu.forEach(t),sd.forEach(t),js=l(o),de=r(o,"DIV",{class:!0});var nt=a(de);g(go.$$.fragment,nt),Zd=l(nt),bt=r(nt,"P",{});var ur=a(bt);ei=d(ur,"This is the configuration class to store the configuration of a "),Rn=r(ur,"A",{href:!0});var pu=a(Rn);ti=d(pu,"BlenderbotModel"),pu.forEach(t),oi=d(ur,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=r(ur,"A",{href:!0,rel:!0});var hu=a(bo);ni=d(hu,"facebook/blenderbot-3B"),hu.forEach(t),ri=d(ur," architecture."),ur.forEach(t),ai=l(nt),vt=r(nt,"P",{});var mr=a(vt);si=d(mr,"Configuration objects inherit from "),Hn=r(mr,"A",{href:!0});var uu=a(Hn);di=d(uu,"PretrainedConfig"),uu.forEach(t),ii=d(mr,` and can be used to control the model outputs. Read the
documentation from `),Kn=r(mr,"A",{href:!0});var mu=a(Kn);li=d(mu,"PretrainedConfig"),mu.forEach(t),ci=d(mr," for more information."),mr.forEach(t),pi=l(nt),Pr=r(nt,"P",{});var fu=a(Pr);hi=d(fu,"Example:"),fu.forEach(t),ui=l(nt),g(vo.$$.fragment,nt),nt.forEach(t),Ps=l(o),kt=r(o,"H2",{class:!0});var dd=a(kt);At=r(dd,"A",{id:!0,class:!0,href:!0});var _u=a(At);Nr=r(_u,"SPAN",{});var gu=a(Nr);g(ko.$$.fragment,gu),gu.forEach(t),_u.forEach(t),mi=l(dd),Or=r(dd,"SPAN",{});var bu=a(Or);fi=d(bu,"BlenderbotTokenizer"),bu.forEach(t),dd.forEach(t),Ns=l(o),ie=r(o,"DIV",{class:!0});var rt=a(ie);g(yo.$$.fragment,rt),_i=l(rt),Ar=r(rt,"P",{});var vu=a(Ar);gi=d(vu,"Construct a Blenderbot tokenizer."),vu.forEach(t),bi=l(rt),It=r(rt,"P",{});var Fs=a(It);Ir=r(Fs,"CODE",{});var ku=a(Ir);vi=d(ku,"Blenderbot"),ku.forEach(t),ki=d(Fs," is nearly identical to "),Vn=r(Fs,"A",{href:!0});var yu=a(Vn);yi=d(yu,"RobertaTokenizer"),yu.forEach(t),Ti=d(Fs,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Fs.forEach(t),wi=l(rt),To=r(rt,"P",{});var id=a(To);Bi=d(id,"Refer to superclass "),Qn=r(id,"A",{href:!0});var Tu=a(Qn);zi=d(Tu,"RobertaTokenizer"),Tu.forEach(t),xi=d(id," for usage examples and documentation concerning parameters."),id.forEach(t),Fi=l(rt),Je=r(rt,"DIV",{class:!0});var fr=a(Je);g(wo.$$.fragment,fr),$i=l(fr),Sr=r(fr,"P",{});var wu=a(Sr);qi=d(wu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wu.forEach(t),Ei=l(fr),Lr=r(fr,"UL",{});var Bu=a(Lr);Jn=r(Bu,"LI",{});var Sh=a(Jn);Mi=d(Sh,"single sequence: "),Dr=r(Sh,"CODE",{});var zu=a(Dr);Ci=d(zu,"X </s>"),zu.forEach(t),Sh.forEach(t),Bu.forEach(t),fr.forEach(t),rt.forEach(t),Os=l(o),yt=r(o,"H2",{class:!0});var ld=a(yt);St=r(ld,"A",{id:!0,class:!0,href:!0});var xu=a(St);Gr=r(xu,"SPAN",{});var Fu=a(Gr);g(Bo.$$.fragment,Fu),Fu.forEach(t),xu.forEach(t),ji=l(ld),Wr=r(ld,"SPAN",{});var $u=a(Wr);Pi=d($u,"BlenderbotTokenizerFast"),$u.forEach(t),ld.forEach(t),As=l(o),le=r(o,"DIV",{class:!0});var at=a(le);g(zo.$$.fragment,at),Ni=l(at),xo=r(at,"P",{});var cd=a(xo);Oi=d(cd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ur=r(cd,"EM",{});var qu=a(Ur);Ai=d(qu,"tokenizers"),qu.forEach(t),Ii=d(cd," library)."),cd.forEach(t),Si=l(at),Lt=r(at,"P",{});var $s=a(Lt);Rr=r($s,"CODE",{});var Eu=a(Rr);Li=d(Eu,"BlenderbotFast"),Eu.forEach(t),Di=d($s," is nearly identical to "),Xn=r($s,"A",{href:!0});var Mu=a(Xn);Gi=d(Mu,"RobertaTokenizerFast"),Mu.forEach(t),Wi=d($s,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),$s.forEach(t),Ui=l(at),Fo=r(at,"P",{});var pd=a(Fo);Ri=d(pd,"Refer to superclass "),Yn=r(pd,"A",{href:!0});var Cu=a(Yn);Hi=d(Cu,"RobertaTokenizerFast"),Cu.forEach(t),Ki=d(pd," for usage examples and documentation concerning parameters."),pd.forEach(t),Vi=l(at),Xe=r(at,"DIV",{class:!0});var _r=a(Xe);g($o.$$.fragment,_r),Qi=l(_r),Hr=r(_r,"P",{});var ju=a(Hr);Ji=d(ju,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),ju.forEach(t),Xi=l(_r),Kr=r(_r,"UL",{});var Pu=a(Kr);Zn=r(Pu,"LI",{});var Lh=a(Zn);Yi=d(Lh,"single sequence: "),Vr=r(Lh,"CODE",{});var Nu=a(Vr);Zi=d(Nu,"X </s>"),Nu.forEach(t),Lh.forEach(t),Pu.forEach(t),_r.forEach(t),at.forEach(t),Is=l(o),Tt=r(o,"H2",{class:!0});var hd=a(Tt);Dt=r(hd,"A",{id:!0,class:!0,href:!0});var Ou=a(Dt);Qr=r(Ou,"SPAN",{});var Au=a(Qr);g(qo.$$.fragment,Au),Au.forEach(t),Ou.forEach(t),el=l(hd),Jr=r(hd,"SPAN",{});var Iu=a(Jr);tl=d(Iu,"BlenderbotModel"),Iu.forEach(t),hd.forEach(t),Ss=l(o),Ue=r(o,"P",{});var Dn=a(Ue);ol=d(Dn,"See "),Xr=r(Dn,"CODE",{});var Su=a(Xr);nl=d(Su,"transformers.BartModel"),Su.forEach(t),rl=d(Dn," for arguments to "),Yr=r(Dn,"EM",{});var Lu=a(Yr);al=d(Lu,"forward"),Lu.forEach(t),sl=d(Dn," and "),Zr=r(Dn,"EM",{});var Du=a(Zr);dl=d(Du,"generate"),Du.forEach(t),Dn.forEach(t),Ls=l(o),ze=r(o,"DIV",{class:!0});var so=a(ze);g(Eo.$$.fragment,so),il=l(so),Mo=r(so,"P",{});var ud=a(Mo);ll=d(ud,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),er=r(ud,"A",{href:!0});var Gu=a(er);cl=d(Gu,"PreTrainedModel"),Gu.forEach(t),pl=d(ud,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ud.forEach(t),hl=l(so),Co=r(so,"P",{});var md=a(Co);ul=d(md,"This model is also a PyTorch "),jo=r(md,"A",{href:!0,rel:!0});var Wu=a(jo);ml=d(Wu,"torch.nn.Module"),Wu.forEach(t),fl=d(md,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),md.forEach(t),_l=l(so),ge=r(so,"DIV",{class:!0});var st=a(ge);g(Po.$$.fragment,st),gl=l(st),wt=r(st,"P",{});var gr=a(wt);bl=d(gr,"The "),tr=r(gr,"A",{href:!0});var Uu=a(tr);vl=d(Uu,"BlenderbotModel"),Uu.forEach(t),kl=d(gr," forward method, overrides the "),ea=r(gr,"CODE",{});var Ru=a(ea);yl=d(Ru,"__call__"),Ru.forEach(t),Tl=d(gr," special method."),gr.forEach(t),wl=l(st),g(Gt.$$.fragment,st),Bl=l(st),ta=r(st,"P",{});var Hu=a(ta);zl=d(Hu,"Example:"),Hu.forEach(t),xl=l(st),g(No.$$.fragment,st),st.forEach(t),so.forEach(t),Ds=l(o),Bt=r(o,"H2",{class:!0});var fd=a(Bt);Wt=r(fd,"A",{id:!0,class:!0,href:!0});var Ku=a(Wt);oa=r(Ku,"SPAN",{});var Vu=a(oa);g(Oo.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),Fl=l(fd),na=r(fd,"SPAN",{});var Qu=a(na);$l=d(Qu,"BlenderbotForConditionalGeneration"),Qu.forEach(t),fd.forEach(t),Gs=l(o),Re=r(o,"P",{});var Gn=a(Re);ql=d(Gn,"See "),or=r(Gn,"A",{href:!0});var Ju=a(or);El=d(Ju,"BartForConditionalGeneration"),Ju.forEach(t),Ml=d(Gn," for arguments to "),ra=r(Gn,"EM",{});var Xu=a(ra);Cl=d(Xu,"forward"),Xu.forEach(t),jl=d(Gn," and "),aa=r(Gn,"EM",{});var Yu=a(aa);Pl=d(Yu,"generate"),Yu.forEach(t),Gn.forEach(t),Ws=l(o),xe=r(o,"DIV",{class:!0});var io=a(xe);g(Ao.$$.fragment,io),Nl=l(io),Io=r(io,"P",{});var _d=a(Io);Ol=d(_d,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=r(_d,"A",{href:!0});var Zu=a(nr);Al=d(Zu,"PreTrainedModel"),Zu.forEach(t),Il=d(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(t),Sl=l(io),So=r(io,"P",{});var gd=a(So);Ll=d(gd,"This model is also a PyTorch "),Lo=r(gd,"A",{href:!0,rel:!0});var em=a(Lo);Dl=d(em,"torch.nn.Module"),em.forEach(t),Gl=d(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),Wl=l(io),X=r(io,"DIV",{class:!0});var Ee=a(X);g(Do.$$.fragment,Ee),Ul=l(Ee),zt=r(Ee,"P",{});var br=a(zt);Rl=d(br,"The "),rr=r(br,"A",{href:!0});var tm=a(rr);Hl=d(tm,"BlenderbotForConditionalGeneration"),tm.forEach(t),Kl=d(br," forward method, overrides the "),sa=r(br,"CODE",{});var om=a(sa);Vl=d(om,"__call__"),om.forEach(t),Ql=d(br," special method."),br.forEach(t),Jl=l(Ee),g(Ut.$$.fragment,Ee),Xl=l(Ee),da=r(Ee,"P",{});var nm=a(da);Yl=d(nm,"Conversation example::"),nm.forEach(t),Zl=l(Ee),ia=r(Ee,"BLOCKQUOTE",{});var rm=a(ia);la=r(rm,"BLOCKQUOTE",{});var am=a(la);ca=r(am,"BLOCKQUOTE",{});var sm=a(ca);pa=r(sm,"P",{});var dm=a(pa);ec=d(dm,`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),dm.forEach(t),sm.forEach(t),am.forEach(t),rm.forEach(t),tc=l(Ee),ha=r(Ee,"BLOCKQUOTE",{});var im=a(ha);ua=r(im,"BLOCKQUOTE",{});var lm=a(ua);ma=r(lm,"BLOCKQUOTE",{});var cm=a(ma);Go=r(cm,"P",{});var bd=a(Go);oc=d(bd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),fa=r(bd,"S",{});var pm=a(fa);nc=d(pm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),pm.forEach(t),rc=d(bd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),bd.forEach(t),cm.forEach(t),lm.forEach(t),im.forEach(t),Ee.forEach(t),io.forEach(t),Us=l(o),xt=r(o,"H2",{class:!0});var vd=a(xt);Rt=r(vd,"A",{id:!0,class:!0,href:!0});var hm=a(Rt);_a=r(hm,"SPAN",{});var um=a(_a);g(Wo.$$.fragment,um),um.forEach(t),hm.forEach(t),ac=l(vd),ga=r(vd,"SPAN",{});var mm=a(ga);sc=d(mm,"BlenderbotForCausalLM"),mm.forEach(t),vd.forEach(t),Rs=l(o),Uo=r(o,"DIV",{class:!0});var fm=a(Uo);Ye=r(fm,"DIV",{class:!0});var vr=a(Ye);g(Ro.$$.fragment,vr),dc=l(vr),ba=r(vr,"P",{});var _m=a(ba);ic=d(_m,"Example:"),_m.forEach(t),lc=l(vr),g(Ho.$$.fragment,vr),vr.forEach(t),fm.forEach(t),Hs=l(o),Ft=r(o,"H2",{class:!0});var kd=a(Ft);Ht=r(kd,"A",{id:!0,class:!0,href:!0});var gm=a(Ht);va=r(gm,"SPAN",{});var bm=a(va);g(Ko.$$.fragment,bm),bm.forEach(t),gm.forEach(t),cc=l(kd),ka=r(kd,"SPAN",{});var vm=a(ka);pc=d(vm,"TFBlenderbotModel"),vm.forEach(t),kd.forEach(t),Ks=l(o),ce=r(o,"DIV",{class:!0});var dt=a(ce);g(Vo.$$.fragment,dt),hc=l(dt),Qo=r(dt,"P",{});var yd=a(Qo);uc=d(yd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=r(yd,"A",{href:!0});var km=a(ar);mc=d(km,"TFPreTrainedModel"),km.forEach(t),fc=d(yd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yd.forEach(t),_c=l(dt),Jo=r(dt,"P",{});var Td=a(Jo);gc=d(Td,"This model is also a "),Xo=r(Td,"A",{href:!0,rel:!0});var ym=a(Xo);bc=d(ym,"tf.keras.Model"),ym.forEach(t),vc=d(Td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Td.forEach(t),kc=l(dt),g(Kt.$$.fragment,dt),yc=l(dt),be=r(dt,"DIV",{class:!0});var it=a(be);g(Yo.$$.fragment,it),Tc=l(it),$t=r(it,"P",{});var kr=a($t);wc=d(kr,"The "),sr=r(kr,"A",{href:!0});var Tm=a(sr);Bc=d(Tm,"TFBlenderbotModel"),Tm.forEach(t),zc=d(kr," forward method, overrides the "),ya=r(kr,"CODE",{});var wm=a(ya);xc=d(wm,"__call__"),wm.forEach(t),Fc=d(kr," special method."),kr.forEach(t),$c=l(it),g(Vt.$$.fragment,it),qc=l(it),Ta=r(it,"P",{});var Bm=a(Ta);Ec=d(Bm,"Example:"),Bm.forEach(t),Mc=l(it),g(Zo.$$.fragment,it),it.forEach(t),dt.forEach(t),Vs=l(o),qt=r(o,"H2",{class:!0});var wd=a(qt);Qt=r(wd,"A",{id:!0,class:!0,href:!0});var zm=a(Qt);wa=r(zm,"SPAN",{});var xm=a(wa);g(en.$$.fragment,xm),xm.forEach(t),zm.forEach(t),Cc=l(wd),Ba=r(wd,"SPAN",{});var Fm=a(Ba);jc=d(Fm,"TFBlenderbotForConditionalGeneration"),Fm.forEach(t),wd.forEach(t),Qs=l(o),pe=r(o,"DIV",{class:!0});var lt=a(pe);g(tn.$$.fragment,lt),Pc=l(lt),on=r(lt,"P",{});var Bd=a(on);Nc=d(Bd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=r(Bd,"A",{href:!0});var $m=a(dr);Oc=d($m,"TFPreTrainedModel"),$m.forEach(t),Ac=d(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),Ic=l(lt),nn=r(lt,"P",{});var zd=a(nn);Sc=d(zd,"This model is also a "),rn=r(zd,"A",{href:!0,rel:!0});var qm=a(rn);Lc=d(qm,"tf.keras.Model"),qm.forEach(t),Dc=d(zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zd.forEach(t),Gc=l(lt),g(Jt.$$.fragment,lt),Wc=l(lt),Y=r(lt,"DIV",{class:!0});var Me=a(Y);g(an.$$.fragment,Me),Uc=l(Me),Et=r(Me,"P",{});var yr=a(Et);Rc=d(yr,"The "),ir=r(yr,"A",{href:!0});var Em=a(ir);Hc=d(Em,"TFBlenderbotForConditionalGeneration"),Em.forEach(t),Kc=d(yr," forward method, overrides the "),za=r(yr,"CODE",{});var Mm=a(za);Vc=d(Mm,"__call__"),Mm.forEach(t),Qc=d(yr," special method."),yr.forEach(t),Jc=l(Me),g(Xt.$$.fragment,Me),Xc=l(Me),xa=r(Me,"P",{});var Cm=a(xa);Yc=d(Cm,"Conversation example::"),Cm.forEach(t),Zc=l(Me),Fa=r(Me,"BLOCKQUOTE",{});var jm=a(Fa);$a=r(jm,"BLOCKQUOTE",{});var Pm=a($a);qa=r(Pm,"BLOCKQUOTE",{});var Nm=a(qa);Ea=r(Nm,"P",{});var Om=a(Ea);ep=d(Om,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Om.forEach(t),Nm.forEach(t),Pm.forEach(t),jm.forEach(t),tp=l(Me),Ma=r(Me,"BLOCKQUOTE",{});var Am=a(Ma);Ca=r(Am,"BLOCKQUOTE",{});var Im=a(Ca);ja=r(Im,"BLOCKQUOTE",{});var Sm=a(ja);sn=r(Sm,"P",{});var xd=a(sn);op=d(xd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Pa=r(xd,"S",{});var Lm=a(Pa);np=d(Lm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Lm.forEach(t),rp=d(xd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),xd.forEach(t),Sm.forEach(t),Im.forEach(t),Am.forEach(t),Me.forEach(t),lt.forEach(t),Js=l(o),Mt=r(o,"H2",{class:!0});var Fd=a(Mt);Yt=r(Fd,"A",{id:!0,class:!0,href:!0});var Dm=a(Yt);Na=r(Dm,"SPAN",{});var Gm=a(Na);g(dn.$$.fragment,Gm),Gm.forEach(t),Dm.forEach(t),ap=l(Fd),Oa=r(Fd,"SPAN",{});var Wm=a(Oa);sp=d(Wm,"FlaxBlenderbotModel"),Wm.forEach(t),Fd.forEach(t),Xs=l(o),I=r(o,"DIV",{class:!0});var Z=a(I);g(ln.$$.fragment,Z),dp=l(Z),cn=r(Z,"P",{});var $d=a(cn);ip=d($d,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),lr=r($d,"A",{href:!0});var Um=a(lr);lp=d(Um,"FlaxPreTrainedModel"),Um.forEach(t),cp=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),pp=l(Z),pn=r(Z,"P",{});var qd=a(pn);hp=d(qd,`This model is also a Flax Linen
`),hn=r(qd,"A",{href:!0,rel:!0});var Rm=a(hn);up=d(Rm,"flax.nn.Module"),Rm.forEach(t),mp=d(qd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qd.forEach(t),fp=l(Z),Aa=r(Z,"P",{});var Hm=a(Aa);_p=d(Hm,"Finally, this model supports inherent JAX features such as:"),Hm.forEach(t),gp=l(Z),He=r(Z,"UL",{});var lo=a(He);Ia=r(lo,"LI",{});var Km=a(Ia);un=r(Km,"A",{href:!0,rel:!0});var Vm=a(un);bp=d(Vm,"Just-In-Time (JIT) compilation"),Vm.forEach(t),Km.forEach(t),vp=l(lo),Sa=r(lo,"LI",{});var Qm=a(Sa);mn=r(Qm,"A",{href:!0,rel:!0});var Jm=a(mn);kp=d(Jm,"Automatic Differentiation"),Jm.forEach(t),Qm.forEach(t),yp=l(lo),La=r(lo,"LI",{});var Xm=a(La);fn=r(Xm,"A",{href:!0,rel:!0});var Ym=a(fn);Tp=d(Ym,"Vectorization"),Ym.forEach(t),Xm.forEach(t),wp=l(lo),Da=r(lo,"LI",{});var Zm=a(Da);_n=r(Zm,"A",{href:!0,rel:!0});var ef=a(_n);Bp=d(ef,"Parallelization"),ef.forEach(t),Zm.forEach(t),lo.forEach(t),zp=l(Z),ve=r(Z,"DIV",{class:!0});var ct=a(ve);g(gn.$$.fragment,ct),xp=l(ct),Ct=r(ct,"P",{});var Tr=a(Ct);Fp=d(Tr,"The "),Ga=r(Tr,"CODE",{});var tf=a(Ga);$p=d(tf,"FlaxBlenderbotPreTrainedModel"),tf.forEach(t),qp=d(Tr,"forward method, overrides the "),Wa=r(Tr,"CODE",{});var of=a(Wa);Ep=d(of,"__call__"),of.forEach(t),Mp=d(Tr," special method."),Tr.forEach(t),Cp=l(ct),g(Zt.$$.fragment,ct),jp=l(ct),Ua=r(ct,"P",{});var nf=a(Ua);Pp=d(nf,"Example:"),nf.forEach(t),Np=l(ct),g(bn.$$.fragment,ct),ct.forEach(t),Op=l(Z),Ze=r(Z,"DIV",{class:!0});var wr=a(Ze);g(vn.$$.fragment,wr),Ap=l(wr),Ra=r(wr,"P",{});var rf=a(Ra);Ip=d(rf,"Example:"),rf.forEach(t),Sp=l(wr),g(kn.$$.fragment,wr),wr.forEach(t),Lp=l(Z),et=r(Z,"DIV",{class:!0});var Br=a(et);g(yn.$$.fragment,Br),Dp=l(Br),Ha=r(Br,"P",{});var af=a(Ha);Gp=d(af,"Example:"),af.forEach(t),Wp=l(Br),g(Tn.$$.fragment,Br),Br.forEach(t),Z.forEach(t),Ys=l(o),jt=r(o,"H2",{class:!0});var Ed=a(jt);eo=r(Ed,"A",{id:!0,class:!0,href:!0});var sf=a(eo);Ka=r(sf,"SPAN",{});var df=a(Ka);g(wn.$$.fragment,df),df.forEach(t),sf.forEach(t),Up=l(Ed),Va=r(Ed,"SPAN",{});var lf=a(Va);Rp=d(lf,"FlaxBlenderbotForConditionalGeneration"),lf.forEach(t),Ed.forEach(t),Zs=l(o),S=r(o,"DIV",{class:!0});var ee=a(S);g(Bn.$$.fragment,ee),Hp=l(ee),zn=r(ee,"P",{});var Md=a(zn);Kp=d(Md,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cr=r(Md,"A",{href:!0});var cf=a(cr);Vp=d(cf,"FlaxPreTrainedModel"),cf.forEach(t),Qp=d(Md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Md.forEach(t),Jp=l(ee),xn=r(ee,"P",{});var Cd=a(xn);Xp=d(Cd,`This model is also a Flax Linen
`),Fn=r(Cd,"A",{href:!0,rel:!0});var pf=a(Fn);Yp=d(pf,"flax.nn.Module"),pf.forEach(t),Zp=d(Cd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cd.forEach(t),eh=l(ee),Qa=r(ee,"P",{});var hf=a(Qa);th=d(hf,"Finally, this model supports inherent JAX features such as:"),hf.forEach(t),oh=l(ee),Ke=r(ee,"UL",{});var co=a(Ke);Ja=r(co,"LI",{});var uf=a(Ja);$n=r(uf,"A",{href:!0,rel:!0});var mf=a($n);nh=d(mf,"Just-In-Time (JIT) compilation"),mf.forEach(t),uf.forEach(t),rh=l(co),Xa=r(co,"LI",{});var ff=a(Xa);qn=r(ff,"A",{href:!0,rel:!0});var _f=a(qn);ah=d(_f,"Automatic Differentiation"),_f.forEach(t),ff.forEach(t),sh=l(co),Ya=r(co,"LI",{});var gf=a(Ya);En=r(gf,"A",{href:!0,rel:!0});var bf=a(En);dh=d(bf,"Vectorization"),bf.forEach(t),gf.forEach(t),ih=l(co),Za=r(co,"LI",{});var vf=a(Za);Mn=r(vf,"A",{href:!0,rel:!0});var kf=a(Mn);lh=d(kf,"Parallelization"),kf.forEach(t),vf.forEach(t),co.forEach(t),ch=l(ee),L=r(ee,"DIV",{class:!0});var te=a(L);g(Cn.$$.fragment,te),ph=l(te),Pt=r(te,"P",{});var zr=a(Pt);hh=d(zr,"The "),es=r(zr,"CODE",{});var yf=a(es);uh=d(yf,"FlaxBlenderbotPreTrainedModel"),yf.forEach(t),mh=d(zr,"forward method, overrides the "),ts=r(zr,"CODE",{});var Tf=a(ts);fh=d(Tf,"__call__"),Tf.forEach(t),_h=d(zr," special method."),zr.forEach(t),gh=l(te),g(to.$$.fragment,te),bh=l(te),os=r(te,"P",{});var wf=a(os);vh=d(wf,"Conversation example::"),wf.forEach(t),kh=l(te),ns=r(te,"BLOCKQUOTE",{});var Bf=a(ns);rs=r(Bf,"BLOCKQUOTE",{});var zf=a(rs);as=r(zf,"BLOCKQUOTE",{});var xf=a(as);ss=r(xf,"P",{});var Ff=a(ss);yh=d(Ff,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Ff.forEach(t),xf.forEach(t),zf.forEach(t),Bf.forEach(t),Th=l(te),ds=r(te,"BLOCKQUOTE",{});var $f=a(ds);is=r($f,"BLOCKQUOTE",{});var qf=a(is);ls=r(qf,"BLOCKQUOTE",{});var Ef=a(ls);cs=r(Ef,"P",{});var Mf=a(cs);wh=d(Mf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Mf.forEach(t),Ef.forEach(t),qf.forEach(t),$f.forEach(t),Bh=l(te),ps=r(te,"BLOCKQUOTE",{});var Cf=a(ps);hs=r(Cf,"BLOCKQUOTE",{});var jf=a(hs);us=r(jf,"BLOCKQUOTE",{});var Pf=a(us);ms=r(Pf,"P",{});var Nf=a(ms);zh=d(Nf,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Nf.forEach(t),Pf.forEach(t),jf.forEach(t),Cf.forEach(t),xh=l(te),fs=r(te,"BLOCKQUOTE",{});var Of=a(fs);_s=r(Of,"BLOCKQUOTE",{});var Af=a(_s);jn=r(Af,"BLOCKQUOTE",{});var jd=a(jn);oo=r(jd,"H1",{class:!0});var Pd=a(oo);no=r(Pd,"A",{id:!0,class:!0,href:!0});var If=a(no);gs=r(If,"SPAN",{});var Sf=a(gs);g(Pn.$$.fragment,Sf),Sf.forEach(t),If.forEach(t),Fh=l(Pd),bs=r(Pd,"SPAN",{});var Lf=a(bs);$h=d(Lf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Lf.forEach(t),Pd.forEach(t),qh=l(jd),vs=r(jd,"P",{});var Df=a(vs);Eh=d(Df,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Df.forEach(t),jd.forEach(t),Af.forEach(t),Of.forEach(t),te.forEach(t),Mh=l(ee),tt=r(ee,"DIV",{class:!0});var xr=a(tt);g(Nn.$$.fragment,xr),Ch=l(xr),ks=r(xr,"P",{});var Gf=a(ks);jh=d(Gf,"Example:"),Gf.forEach(t),Ph=l(xr),g(On.$$.fragment,xr),xr.forEach(t),Nh=l(ee),ot=r(ee,"DIV",{class:!0});var Fr=a(ot);g(An.$$.fragment,Fr),Oh=l(Fr),ys=r(Fr,"P",{});var Wf=a(ys);Ah=d(Wf,"Example:"),Wf.forEach(t),Ih=l(Fr),g(In.$$.fragment,Fr),Fr.forEach(t),ee.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(n_)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(ne,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ne,"rel","nofollow"),c(P,"id","overview"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(U,"href","https://huggingface.co/sshleifer"),c(U,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(_e,"id","implementation-notes"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#implementation-notes"),c(j,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(uo,"href","https://huggingface.co/models?search=blenderbot"),c(uo,"rel","nofollow"),c(Wn,"href","blenderbot-small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(Ot,"id","transformers.BlenderbotConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Rn,"href","/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(bo,"href","https://huggingface.co/facebook/blenderbot-3B"),c(bo,"rel","nofollow"),c(Hn,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring"),c(At,"id","transformers.BlenderbotTokenizer"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotTokenizer"),c(kt,"class","relative group"),c(Vn,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(ie,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Xn,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Yn,"href","/docs/transformers/v4.16.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Dt,"id","transformers.BlenderbotModel"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(er,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(jo,"rel","nofollow"),c(tr,"href","/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ge,"class","docstring"),c(ze,"class","docstring"),c(Wt,"id","transformers.BlenderbotForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(or,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(nr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lo,"rel","nofollow"),c(rr,"href","/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(xe,"class","docstring"),c(Rt,"id","transformers.BlenderbotForCausalLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Uo,"class","docstring"),c(Ht,"id","transformers.TFBlenderbotModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.TFBlenderbotModel"),c(Ft,"class","relative group"),c(ar,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xo,"rel","nofollow"),c(sr,"href","/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(ce,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(qt,"class","relative group"),c(dr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(ir,"href","/docs/transformers/v4.16.2/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Yt,"id","transformers.FlaxBlenderbotModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.FlaxBlenderbotModel"),c(Mt,"class","relative group"),c(lr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_n,"rel","nofollow"),c(ve,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(eo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(jt,"class","relative group"),c(cr,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fn,"rel","nofollow"),c($n,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mn,"rel","nofollow"),c(no,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(oo,"class","relative group"),c(L,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(S,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,f,h),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,F),e(F,Ce),p(o,ue,h),p(o,q,h),e(q,ke),e(ke,oe),e(q,je),e(q,ne),e(ne,re),e(q,Pe),p(o,Fe,h),p(o,G,h),e(G,P),e(P,ye),b(R,ye,null),e(G,E),e(G,C),e(C,Ne),p(o,Q,h),p(o,J,h),e(J,Oe),e(J,W),e(W,Ae),e(J,Ie),p(o,N,h),p(o,me,h),e(me,ae),p(o,$e,h),p(o,fe,h),e(fe,H),e(H,Se),p(o,qe,h),p(o,M,h),e(M,Le),e(M,U),e(U,De),e(M,m),e(M,$),e($,Te),e(M,ht),p(o,Ve,h),p(o,j,h),e(j,_e),e(_e,Ge),b(we,Ge,null),e(j,K),e(j,V),e(V,ut),p(o,Qe,h),p(o,O,h),e(O,Be),e(Be,mt),e(Be,se),e(se,ft),e(Be,Nd),e(O,Od),e(O,ho),e(ho,Ad),e(ho,uo),e(uo,Id),e(ho,Sd),e(O,Ld),e(O,We),e(We,Dd),e(We,$r),e($r,Gd),e(We,Wd),e(We,qr),e(qr,Ud),e(We,Rd),e(We,Wn),e(Wn,Hd),e(We,Kd),p(o,qs,h),p(o,_t,h),e(_t,Nt),e(Nt,Er),b(mo,Er,null),e(_t,Vd),e(_t,Mr),e(Mr,Qd),p(o,Es,h),p(o,Un,h),e(Un,Jd),p(o,Ms,h),b(fo,o,h),p(o,Cs,h),p(o,gt,h),e(gt,Ot),e(Ot,Cr),b(_o,Cr,null),e(gt,Xd),e(gt,jr),e(jr,Yd),p(o,js,h),p(o,de,h),b(go,de,null),e(de,Zd),e(de,bt),e(bt,ei),e(bt,Rn),e(Rn,ti),e(bt,oi),e(bt,bo),e(bo,ni),e(bt,ri),e(de,ai),e(de,vt),e(vt,si),e(vt,Hn),e(Hn,di),e(vt,ii),e(vt,Kn),e(Kn,li),e(vt,ci),e(de,pi),e(de,Pr),e(Pr,hi),e(de,ui),b(vo,de,null),p(o,Ps,h),p(o,kt,h),e(kt,At),e(At,Nr),b(ko,Nr,null),e(kt,mi),e(kt,Or),e(Or,fi),p(o,Ns,h),p(o,ie,h),b(yo,ie,null),e(ie,_i),e(ie,Ar),e(Ar,gi),e(ie,bi),e(ie,It),e(It,Ir),e(Ir,vi),e(It,ki),e(It,Vn),e(Vn,yi),e(It,Ti),e(ie,wi),e(ie,To),e(To,Bi),e(To,Qn),e(Qn,zi),e(To,xi),e(ie,Fi),e(ie,Je),b(wo,Je,null),e(Je,$i),e(Je,Sr),e(Sr,qi),e(Je,Ei),e(Je,Lr),e(Lr,Jn),e(Jn,Mi),e(Jn,Dr),e(Dr,Ci),p(o,Os,h),p(o,yt,h),e(yt,St),e(St,Gr),b(Bo,Gr,null),e(yt,ji),e(yt,Wr),e(Wr,Pi),p(o,As,h),p(o,le,h),b(zo,le,null),e(le,Ni),e(le,xo),e(xo,Oi),e(xo,Ur),e(Ur,Ai),e(xo,Ii),e(le,Si),e(le,Lt),e(Lt,Rr),e(Rr,Li),e(Lt,Di),e(Lt,Xn),e(Xn,Gi),e(Lt,Wi),e(le,Ui),e(le,Fo),e(Fo,Ri),e(Fo,Yn),e(Yn,Hi),e(Fo,Ki),e(le,Vi),e(le,Xe),b($o,Xe,null),e(Xe,Qi),e(Xe,Hr),e(Hr,Ji),e(Xe,Xi),e(Xe,Kr),e(Kr,Zn),e(Zn,Yi),e(Zn,Vr),e(Vr,Zi),p(o,Is,h),p(o,Tt,h),e(Tt,Dt),e(Dt,Qr),b(qo,Qr,null),e(Tt,el),e(Tt,Jr),e(Jr,tl),p(o,Ss,h),p(o,Ue,h),e(Ue,ol),e(Ue,Xr),e(Xr,nl),e(Ue,rl),e(Ue,Yr),e(Yr,al),e(Ue,sl),e(Ue,Zr),e(Zr,dl),p(o,Ls,h),p(o,ze,h),b(Eo,ze,null),e(ze,il),e(ze,Mo),e(Mo,ll),e(Mo,er),e(er,cl),e(Mo,pl),e(ze,hl),e(ze,Co),e(Co,ul),e(Co,jo),e(jo,ml),e(Co,fl),e(ze,_l),e(ze,ge),b(Po,ge,null),e(ge,gl),e(ge,wt),e(wt,bl),e(wt,tr),e(tr,vl),e(wt,kl),e(wt,ea),e(ea,yl),e(wt,Tl),e(ge,wl),b(Gt,ge,null),e(ge,Bl),e(ge,ta),e(ta,zl),e(ge,xl),b(No,ge,null),p(o,Ds,h),p(o,Bt,h),e(Bt,Wt),e(Wt,oa),b(Oo,oa,null),e(Bt,Fl),e(Bt,na),e(na,$l),p(o,Gs,h),p(o,Re,h),e(Re,ql),e(Re,or),e(or,El),e(Re,Ml),e(Re,ra),e(ra,Cl),e(Re,jl),e(Re,aa),e(aa,Pl),p(o,Ws,h),p(o,xe,h),b(Ao,xe,null),e(xe,Nl),e(xe,Io),e(Io,Ol),e(Io,nr),e(nr,Al),e(Io,Il),e(xe,Sl),e(xe,So),e(So,Ll),e(So,Lo),e(Lo,Dl),e(So,Gl),e(xe,Wl),e(xe,X),b(Do,X,null),e(X,Ul),e(X,zt),e(zt,Rl),e(zt,rr),e(rr,Hl),e(zt,Kl),e(zt,sa),e(sa,Vl),e(zt,Ql),e(X,Jl),b(Ut,X,null),e(X,Xl),e(X,da),e(da,Yl),e(X,Zl),e(X,ia),e(ia,la),e(la,ca),e(ca,pa),e(pa,ec),e(X,tc),e(X,ha),e(ha,ua),e(ua,ma),e(ma,Go),e(Go,oc),e(Go,fa),e(fa,nc),e(Go,rc),p(o,Us,h),p(o,xt,h),e(xt,Rt),e(Rt,_a),b(Wo,_a,null),e(xt,ac),e(xt,ga),e(ga,sc),p(o,Rs,h),p(o,Uo,h),e(Uo,Ye),b(Ro,Ye,null),e(Ye,dc),e(Ye,ba),e(ba,ic),e(Ye,lc),b(Ho,Ye,null),p(o,Hs,h),p(o,Ft,h),e(Ft,Ht),e(Ht,va),b(Ko,va,null),e(Ft,cc),e(Ft,ka),e(ka,pc),p(o,Ks,h),p(o,ce,h),b(Vo,ce,null),e(ce,hc),e(ce,Qo),e(Qo,uc),e(Qo,ar),e(ar,mc),e(Qo,fc),e(ce,_c),e(ce,Jo),e(Jo,gc),e(Jo,Xo),e(Xo,bc),e(Jo,vc),e(ce,kc),b(Kt,ce,null),e(ce,yc),e(ce,be),b(Yo,be,null),e(be,Tc),e(be,$t),e($t,wc),e($t,sr),e(sr,Bc),e($t,zc),e($t,ya),e(ya,xc),e($t,Fc),e(be,$c),b(Vt,be,null),e(be,qc),e(be,Ta),e(Ta,Ec),e(be,Mc),b(Zo,be,null),p(o,Vs,h),p(o,qt,h),e(qt,Qt),e(Qt,wa),b(en,wa,null),e(qt,Cc),e(qt,Ba),e(Ba,jc),p(o,Qs,h),p(o,pe,h),b(tn,pe,null),e(pe,Pc),e(pe,on),e(on,Nc),e(on,dr),e(dr,Oc),e(on,Ac),e(pe,Ic),e(pe,nn),e(nn,Sc),e(nn,rn),e(rn,Lc),e(nn,Dc),e(pe,Gc),b(Jt,pe,null),e(pe,Wc),e(pe,Y),b(an,Y,null),e(Y,Uc),e(Y,Et),e(Et,Rc),e(Et,ir),e(ir,Hc),e(Et,Kc),e(Et,za),e(za,Vc),e(Et,Qc),e(Y,Jc),b(Xt,Y,null),e(Y,Xc),e(Y,xa),e(xa,Yc),e(Y,Zc),e(Y,Fa),e(Fa,$a),e($a,qa),e(qa,Ea),e(Ea,ep),e(Y,tp),e(Y,Ma),e(Ma,Ca),e(Ca,ja),e(ja,sn),e(sn,op),e(sn,Pa),e(Pa,np),e(sn,rp),p(o,Js,h),p(o,Mt,h),e(Mt,Yt),e(Yt,Na),b(dn,Na,null),e(Mt,ap),e(Mt,Oa),e(Oa,sp),p(o,Xs,h),p(o,I,h),b(ln,I,null),e(I,dp),e(I,cn),e(cn,ip),e(cn,lr),e(lr,lp),e(cn,cp),e(I,pp),e(I,pn),e(pn,hp),e(pn,hn),e(hn,up),e(pn,mp),e(I,fp),e(I,Aa),e(Aa,_p),e(I,gp),e(I,He),e(He,Ia),e(Ia,un),e(un,bp),e(He,vp),e(He,Sa),e(Sa,mn),e(mn,kp),e(He,yp),e(He,La),e(La,fn),e(fn,Tp),e(He,wp),e(He,Da),e(Da,_n),e(_n,Bp),e(I,zp),e(I,ve),b(gn,ve,null),e(ve,xp),e(ve,Ct),e(Ct,Fp),e(Ct,Ga),e(Ga,$p),e(Ct,qp),e(Ct,Wa),e(Wa,Ep),e(Ct,Mp),e(ve,Cp),b(Zt,ve,null),e(ve,jp),e(ve,Ua),e(Ua,Pp),e(ve,Np),b(bn,ve,null),e(I,Op),e(I,Ze),b(vn,Ze,null),e(Ze,Ap),e(Ze,Ra),e(Ra,Ip),e(Ze,Sp),b(kn,Ze,null),e(I,Lp),e(I,et),b(yn,et,null),e(et,Dp),e(et,Ha),e(Ha,Gp),e(et,Wp),b(Tn,et,null),p(o,Ys,h),p(o,jt,h),e(jt,eo),e(eo,Ka),b(wn,Ka,null),e(jt,Up),e(jt,Va),e(Va,Rp),p(o,Zs,h),p(o,S,h),b(Bn,S,null),e(S,Hp),e(S,zn),e(zn,Kp),e(zn,cr),e(cr,Vp),e(zn,Qp),e(S,Jp),e(S,xn),e(xn,Xp),e(xn,Fn),e(Fn,Yp),e(xn,Zp),e(S,eh),e(S,Qa),e(Qa,th),e(S,oh),e(S,Ke),e(Ke,Ja),e(Ja,$n),e($n,nh),e(Ke,rh),e(Ke,Xa),e(Xa,qn),e(qn,ah),e(Ke,sh),e(Ke,Ya),e(Ya,En),e(En,dh),e(Ke,ih),e(Ke,Za),e(Za,Mn),e(Mn,lh),e(S,ch),e(S,L),b(Cn,L,null),e(L,ph),e(L,Pt),e(Pt,hh),e(Pt,es),e(es,uh),e(Pt,mh),e(Pt,ts),e(ts,fh),e(Pt,_h),e(L,gh),b(to,L,null),e(L,bh),e(L,os),e(os,vh),e(L,kh),e(L,ns),e(ns,rs),e(rs,as),e(as,ss),e(ss,yh),e(L,Th),e(L,ds),e(ds,is),e(is,ls),e(ls,cs),e(cs,wh),e(L,Bh),e(L,ps),e(ps,hs),e(hs,us),e(us,ms),e(ms,zh),e(L,xh),e(L,fs),e(fs,_s),e(_s,jn),e(jn,oo),e(oo,no),e(no,gs),b(Pn,gs,null),e(oo,Fh),e(oo,bs),e(bs,$h),e(jn,qh),e(jn,vs),e(vs,Eh),e(S,Mh),e(S,tt),b(Nn,tt,null),e(tt,Ch),e(tt,ks),e(ks,jh),e(tt,Ph),b(On,tt,null),e(S,Nh),e(S,ot),b(An,ot,null),e(ot,Oh),e(ot,ys),e(ys,Ah),e(ot,Ih),b(In,ot,null),ed=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Gt.$set(Sn);const Ts={};h&2&&(Ts.$$scope={dirty:h,ctx:o}),Ut.$set(Ts);const ws={};h&2&&(ws.$$scope={dirty:h,ctx:o}),Kt.$set(ws);const Bs={};h&2&&(Bs.$$scope={dirty:h,ctx:o}),Vt.$set(Bs);const ro={};h&2&&(ro.$$scope={dirty:h,ctx:o}),Jt.$set(ro);const zs={};h&2&&(zs.$$scope={dirty:h,ctx:o}),Xt.$set(zs);const xs={};h&2&&(xs.$$scope={dirty:h,ctx:o}),Zt.$set(xs);const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:o}),to.$set(Ln)},i(o){ed||(v(B.$$.fragment,o),v(R.$$.fragment,o),v(we.$$.fragment,o),v(mo.$$.fragment,o),v(fo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(vo.$$.fragment,o),v(ko.$$.fragment,o),v(yo.$$.fragment,o),v(wo.$$.fragment,o),v(Bo.$$.fragment,o),v(zo.$$.fragment,o),v($o.$$.fragment,o),v(qo.$$.fragment,o),v(Eo.$$.fragment,o),v(Po.$$.fragment,o),v(Gt.$$.fragment,o),v(No.$$.fragment,o),v(Oo.$$.fragment,o),v(Ao.$$.fragment,o),v(Do.$$.fragment,o),v(Ut.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Kt.$$.fragment,o),v(Yo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(Jt.$$.fragment,o),v(an.$$.fragment,o),v(Xt.$$.fragment,o),v(dn.$$.fragment,o),v(ln.$$.fragment,o),v(gn.$$.fragment,o),v(Zt.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(kn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(Bn.$$.fragment,o),v(Cn.$$.fragment,o),v(to.$$.fragment,o),v(Pn.$$.fragment,o),v(Nn.$$.fragment,o),v(On.$$.fragment,o),v(An.$$.fragment,o),v(In.$$.fragment,o),ed=!0)},o(o){k(B.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(mo.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(vo.$$.fragment,o),k(ko.$$.fragment,o),k(yo.$$.fragment,o),k(wo.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k($o.$$.fragment,o),k(qo.$$.fragment,o),k(Eo.$$.fragment,o),k(Po.$$.fragment,o),k(Gt.$$.fragment,o),k(No.$$.fragment,o),k(Oo.$$.fragment,o),k(Ao.$$.fragment,o),k(Do.$$.fragment,o),k(Ut.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Kt.$$.fragment,o),k(Yo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(Jt.$$.fragment,o),k(an.$$.fragment,o),k(Xt.$$.fragment,o),k(dn.$$.fragment,o),k(ln.$$.fragment,o),k(gn.$$.fragment,o),k(Zt.$$.fragment,o),k(bn.$$.fragment,o),k(vn.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(Cn.$$.fragment,o),k(to.$$.fragment,o),k(Pn.$$.fragment,o),k(Nn.$$.fragment,o),k(On.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),ed=!1},d(o){t(u),o&&t(x),o&&t(f),y(B),o&&t(ue),o&&t(q),o&&t(Fe),o&&t(G),y(R),o&&t(Q),o&&t(J),o&&t(N),o&&t(me),o&&t($e),o&&t(fe),o&&t(qe),o&&t(M),o&&t(Ve),o&&t(j),y(we),o&&t(Qe),o&&t(O),o&&t(qs),o&&t(_t),y(mo),o&&t(Es),o&&t(Un),o&&t(Ms),y(fo,o),o&&t(Cs),o&&t(gt),y(_o),o&&t(js),o&&t(de),y(go),y(vo),o&&t(Ps),o&&t(kt),y(ko),o&&t(Ns),o&&t(ie),y(yo),y(wo),o&&t(Os),o&&t(yt),y(Bo),o&&t(As),o&&t(le),y(zo),y($o),o&&t(Is),o&&t(Tt),y(qo),o&&t(Ss),o&&t(Ue),o&&t(Ls),o&&t(ze),y(Eo),y(Po),y(Gt),y(No),o&&t(Ds),o&&t(Bt),y(Oo),o&&t(Gs),o&&t(Re),o&&t(Ws),o&&t(xe),y(Ao),y(Do),y(Ut),o&&t(Us),o&&t(xt),y(Wo),o&&t(Rs),o&&t(Uo),y(Ro),y(Ho),o&&t(Hs),o&&t(Ft),y(Ko),o&&t(Ks),o&&t(ce),y(Vo),y(Kt),y(Yo),y(Vt),y(Zo),o&&t(Vs),o&&t(qt),y(en),o&&t(Qs),o&&t(pe),y(tn),y(Jt),y(an),y(Xt),o&&t(Js),o&&t(Mt),y(dn),o&&t(Xs),o&&t(I),y(ln),y(gn),y(Zt),y(bn),y(vn),y(kn),y(yn),y(Tn),o&&t(Ys),o&&t(jt),y(wn),o&&t(Zs),o&&t(S),y(Bn),y(Cn),y(to),y(Pn),y(Nn),y(On),y(An),y(In)}}}const n_={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function r_(D,u,x){let{fw:f}=u;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class p_ extends Uf{constructor(u){super();Rf(this,u,r_,o_,Hf,{fw:0})}}export{p_ as default,n_ as metadata};
