import{S as Hf,i as Kf,s as Vf,e as n,k as i,w as _,t as s,M as Qf,c as r,d as t,m as l,a,x as g,h as d,b as c,F as e,g as p,y as b,q as v,o as k,B as y}from"../../chunks/vendor-4833417e.js";import{T as ho}from"../../chunks/Tip-fffd6df1.js";import{D as P}from"../../chunks/Docstring-4f315ed9.js";import{C as pt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as he}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Jf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Xf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function Yf(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,N,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,O,me,ae,$e,fe,H,Le,qe,M,Se,U,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),q=n("p"),ke=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),re=n("code"),Pe=s("model(inputs)"),Fe=s("."),G=i(),N=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),O=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Le=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=r(m,"UL",{});var Te=a(T);z=r(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),q=r(m,"P",{});var j=a(q);ke=d(j,"This second option is useful when using "),oe=r(j,"CODE",{});var _e=a(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),re=r(j,"CODE",{});var Ge=a(re);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),N=r(m,"P",{});var we=a(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=r(m,"UL",{});var K=a(E);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),O=r(K,"LI",{});var A=a(O);me=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(A,"CODE",{});var Be=a(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(A," or "),H=r(A,"CODE",{});var mt=a(H);Le=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),M=r(K,"LI",{});var se=a(M);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var ft=a(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,ue,$),p(m,q,$),e(q,ke),e(q,oe),e(oe,je),e(q,ne),e(q,re),e(re,Pe),e(q,Fe),p(m,G,$),p(m,N,$),e(N,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,O),e(O,me),e(O,ae),e(ae,$e),e(O,fe),e(O,H),e(H,Le),e(E,qe),e(E,M),e(M,Se),e(M,U),e(U,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(q),m&&t(G),m&&t(N),m&&t(R),m&&t(E)}}}function Zf(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function e_(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,N,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,O,me,ae,$e,fe,H,Le,qe,M,Se,U,De;return{c(){u=n("p"),x=s("TF 2.0 models accepts two formats as inputs:"),f=i(),T=n("ul"),z=n("li"),B=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),q=n("p"),ke=s("This second option is useful when using "),oe=n("code"),je=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),re=n("code"),Pe=s("model(inputs)"),Fe=s("."),G=i(),N=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=i(),E=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),O=n("li"),me=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),fe=s(" or "),H=n("code"),Le=s("model([input_ids, attention_mask, token_type_ids])"),qe=i(),M=n("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=r(m,"P",{});var $=a(u);x=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),f=l(m),T=r(m,"UL",{});var Te=a(T);z=r(Te,"LI",{});var ht=a(z);B=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(m),q=r(m,"P",{});var j=a(q);ke=d(j,"This second option is useful when using "),oe=r(j,"CODE",{});var _e=a(oe);je=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),re=r(j,"CODE",{});var Ge=a(re);Pe=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(j,"."),j.forEach(t),G=l(m),N=r(m,"P",{});var we=a(N);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),R=l(m),E=r(m,"UL",{});var K=a(E);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),O=r(K,"LI",{});var A=a(O);me=d(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(A,"CODE",{});var Be=a(ae);$e=d(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=d(A," or "),H=r(A,"CODE",{});var mt=a(H);Le=d(mt,"model([input_ids, attention_mask, token_type_ids])"),mt.forEach(t),A.forEach(t),qe=l(K),M=r(K,"LI",{});var se=a(M);Se=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var ft=a(U);De=d(ft,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ft.forEach(t),se.forEach(t),K.forEach(t)},m(m,$){p(m,u,$),e(u,x),p(m,f,$),p(m,T,$),e(T,z),e(z,B),e(T,w),e(T,F),e(F,Ce),p(m,ue,$),p(m,q,$),e(q,ke),e(q,oe),e(oe,je),e(q,ne),e(q,re),e(re,Pe),e(q,Fe),p(m,G,$),p(m,N,$),e(N,ye),p(m,R,$),p(m,E,$),e(E,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(E,Ie),e(E,O),e(O,me),e(O,ae),e(ae,$e),e(O,fe),e(O,H),e(H,Le),e(E,qe),e(E,M),e(M,Se),e(M,U),e(U,De)},d(m){m&&t(u),m&&t(f),m&&t(T),m&&t(ue),m&&t(q),m&&t(G),m&&t(N),m&&t(R),m&&t(E)}}}function t_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function o_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function n_(D){let u,x,f,T,z;return{c(){u=n("p"),x=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),T=s("Module"),z=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(B){u=r(B,"P",{});var w=a(u);x=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(w,"CODE",{});var F=a(f);T=d(F,"Module"),F.forEach(t),z=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(B,w){p(B,u,w),e(u,x),e(u,f),e(f,T),e(u,z)},d(B){B&&t(u)}}}function r_(D){let u,x,f,T,z,B,w,F,Ce,ue,q,ke,oe,je,ne,re,Pe,Fe,G,N,ye,R,E,C,Ne,Q,J,Oe,W,Ae,Ie,O,me,ae,$e,fe,H,Le,qe,M,Se,U,De,m,$,Te,ht,Ve,j,_e,Ge,we,K,V,ut,Qe,A,Be,mt,se,ft,Ad,Id,uo,Ld,mo,Sd,Dd,Gd,We,Wd,qr,Ud,Rd,Er,Hd,Kd,Un,Vd,Qd,Es,_t,Ot,Mr,fo,Jd,Cr,Xd,Ms,Rn,Yd,Cs,_o,js,gt,At,jr,go,Zd,Pr,ei,Ps,de,bo,ti,bt,oi,Hn,ni,ri,vo,ai,si,di,vt,ii,Kn,li,ci,Vn,pi,hi,ui,Nr,mi,fi,ko,Ns,kt,It,Or,yo,_i,Ar,gi,Os,ie,To,bi,Ir,vi,ki,Lt,Lr,yi,Ti,Qn,wi,Bi,zi,wo,xi,Jn,Fi,$i,qi,Je,Bo,Ei,Sr,Mi,Ci,Dr,Xn,ji,Gr,Pi,As,yt,St,Wr,zo,Ni,Ur,Oi,Is,le,xo,Ai,Fo,Ii,Rr,Li,Si,Di,Dt,Hr,Gi,Wi,Yn,Ui,Ri,Hi,$o,Ki,Zn,Vi,Qi,Ji,Xe,qo,Xi,Kr,Yi,Zi,Vr,er,el,Qr,tl,Ls,Tt,Gt,Jr,Eo,ol,Xr,nl,Ss,Ue,rl,Yr,al,sl,Zr,dl,il,ea,ll,Ds,ze,Mo,cl,Co,pl,tr,hl,ul,ml,jo,fl,Po,_l,gl,bl,ge,No,vl,wt,kl,or,yl,Tl,ta,wl,Bl,zl,Wt,xl,oa,Fl,$l,Oo,Gs,Bt,Ut,na,Ao,ql,ra,El,Ws,Re,Ml,nr,Cl,jl,aa,Pl,Nl,sa,Ol,Us,xe,Io,Al,Lo,Il,rr,Ll,Sl,Dl,So,Gl,Do,Wl,Ul,Rl,X,Go,Hl,zt,Kl,ar,Vl,Ql,da,Jl,Xl,Yl,Rt,Zl,ia,ec,tc,la,ca,pa,ha,oc,nc,ua,ma,fa,Wo,rc,_a,ac,sc,Rs,xt,Ht,ga,Uo,dc,ba,ic,Hs,Ft,Ro,lc,Ye,Ho,cc,va,pc,hc,Ko,Ks,$t,Kt,ka,Vo,uc,ya,mc,Vs,ce,Qo,fc,Jo,_c,sr,gc,bc,vc,Xo,kc,Yo,yc,Tc,wc,Vt,Bc,be,Zo,zc,qt,xc,dr,Fc,$c,Ta,qc,Ec,Mc,Qt,Cc,wa,jc,Pc,en,Qs,Et,Jt,Ba,tn,Nc,za,Oc,Js,pe,on,Ac,nn,Ic,ir,Lc,Sc,Dc,rn,Gc,an,Wc,Uc,Rc,Xt,Hc,Y,sn,Kc,Mt,Vc,lr,Qc,Jc,xa,Xc,Yc,Zc,Yt,ep,Fa,tp,op,$a,qa,Ea,Ma,np,rp,Ca,ja,Pa,dn,ap,Na,sp,dp,Xs,Ct,Zt,Oa,ln,ip,Aa,lp,Ys,I,cn,cp,pn,pp,cr,hp,up,mp,hn,fp,un,_p,gp,bp,Ia,vp,kp,He,La,mn,yp,Tp,Sa,fn,wp,Bp,Da,_n,zp,xp,Ga,gn,Fp,$p,ve,bn,qp,jt,Ep,Wa,Mp,Cp,Ua,jp,Pp,Np,eo,Op,Ra,Ap,Ip,vn,Lp,Ze,kn,Sp,Ha,Dp,Gp,yn,Wp,et,Tn,Up,Ka,Rp,Hp,wn,Zs,Pt,to,Va,Bn,Kp,Qa,Vp,ed,L,zn,Qp,xn,Jp,pr,Xp,Yp,Zp,Fn,eh,$n,th,oh,nh,Ja,rh,ah,Ke,Xa,qn,sh,dh,Ya,En,ih,lh,Za,Mn,ch,ph,es,Cn,hh,uh,S,jn,mh,Nt,fh,ts,_h,gh,os,bh,vh,kh,oo,yh,ns,Th,wh,rs,as,ss,ds,Bh,zh,is,ls,cs,ps,xh,Fh,hs,us,ms,fs,$h,qh,_s,gs,Pn,no,ro,bs,Nn,Eh,vs,Mh,Ch,ks,jh,Ph,tt,On,Nh,ys,Oh,Ah,An,Ih,ot,In,Lh,Ts,Sh,Dh,Ln,td;return B=new he({}),R=new he({}),we=new he({}),fo=new he({}),_o=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

mname = "facebook/blenderbot-400M-distill"
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors="pt")
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),go=new he({}),bo=new P({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),ko=new pt({props:{code:`from transformers import BlenderbotModel, BlenderbotConfig

# Initializing a Blenderbot facebook/blenderbot-3B style configuration
configuration = BlenderbotConfig()

# Initializing a model from the facebook/blenderbot-3B style configuration
model = BlenderbotModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotModel, BlenderbotConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Blenderbot facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/blenderbot-3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),yo=new he({}),To=new P({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),Bo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/tokenization_blenderbot.py#L59",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new he({}),xo=new P({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),qo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new he({}),Mo=new P({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1064",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new P({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1102",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new ho({props:{$$slots:{default:[Jf]},$$scope:{ctx:D}}}),Oo=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ao=new he({}),Io=new P({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Go=new P({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1257",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new ho({props:{$$slots:{default:[Xf]},$$scope:{ctx:D}}}),Uo=new he({}),Ro=new P({props:{name:"class transformers.BlenderbotForCausalLM",anchor:"transformers.BlenderbotForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1393"}}),Ho=new P({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1424",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = BlenderbotForCausalLM.from_pretrained(
    "facebook/blenderbot-400M-distill", add_cross_attention=False
)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Vo=new he({}),Qo=new P({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1175",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vt=new ho({props:{$$slots:{default:[Yf]},$$scope:{ctx:D}}}),Zo=new P({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1200",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qt=new ho({props:{$$slots:{default:[Zf]},$$scope:{ctx:D}}}),en=new pt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = TFBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tn=new he({}),on=new P({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1295",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xt=new ho({props:{$$slots:{default:[e_]},$$scope:{ctx:D}}}),sn=new P({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1341",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yt=new ho({props:{$$slots:{default:[t_]},$$scope:{ctx:D}}}),ln=new he({}),cn=new P({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1207",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new ho({props:{$$slots:{default:[o_]},$$scope:{ctx:D}}}),vn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")
model = FlaxBlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Tn=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Bn=new he({}),zn=new P({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1294",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new P({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1142",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ho({props:{$$slots:{default:[n_]},$$scope:{ctx:D}}}),Nn=new he({}),On=new P({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),In=new P({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.17.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1298",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See <a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.17.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.17.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
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
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),x=i(),f=n("h1"),T=n("a"),z=n("span"),_(B.$$.fragment),w=i(),F=n("span"),Ce=s("Blenderbot"),ue=i(),q=n("p"),ke=n("strong"),oe=s("DISCLAIMER:"),je=s(" If you see something strange, file a "),ne=n("a"),re=s("Github Issue"),Pe=s(" ."),Fe=i(),G=n("h2"),N=n("a"),ye=n("span"),_(R.$$.fragment),E=i(),C=n("span"),Ne=s("Overview"),Q=i(),J=n("p"),Oe=s("The Blender chatbot model was proposed in "),W=n("a"),Ae=s("Recipes for building an open-domain chatbot"),Ie=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),O=i(),me=n("p"),ae=s("The abstract of the paper is the following:"),$e=i(),fe=n("p"),H=n("em"),Le=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),qe=i(),M=n("p"),Se=s("This model was contributed by "),U=n("a"),De=s("sshleifer"),m=s(". The authors\u2019 code can be found "),$=n("a"),Te=s("here"),ht=s(" ."),Ve=i(),j=n("h2"),_e=n("a"),Ge=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=s("Implementation Notes"),Qe=i(),A=n("ul"),Be=n("li"),mt=s("Blenderbot uses a standard "),se=n("a"),ft=s("seq2seq model transformer"),Ad=s(" based architecture."),Id=i(),uo=n("li"),Ld=s("Available checkpoints can be found in the "),mo=n("a"),Sd=s("model hub"),Dd=s("."),Gd=i(),We=n("li"),Wd=s("This is the "),qr=n("em"),Ud=s("default"),Rd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),Er=n("code"),Hd=s("facebook/blenderbot_small_90M"),Kd=s(`, have a different architecture and consequently should be used with
`),Un=n("a"),Vd=s("BlenderbotSmall"),Qd=s("."),Es=i(),_t=n("h2"),Ot=n("a"),Mr=n("span"),_(fo.$$.fragment),Jd=i(),Cr=n("span"),Xd=s("Usage"),Ms=i(),Rn=n("p"),Yd=s("Here is an example of model usage:"),Cs=i(),_(_o.$$.fragment),js=i(),gt=n("h2"),At=n("a"),jr=n("span"),_(go.$$.fragment),Zd=i(),Pr=n("span"),ei=s("BlenderbotConfig"),Ps=i(),de=n("div"),_(bo.$$.fragment),ti=i(),bt=n("p"),oi=s("This is the configuration class to store the configuration of a "),Hn=n("a"),ni=s("BlenderbotModel"),ri=s(`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),vo=n("a"),ai=s("facebook/blenderbot-3B"),si=s(" architecture."),di=i(),vt=n("p"),ii=s("Configuration objects inherit from "),Kn=n("a"),li=s("PretrainedConfig"),ci=s(` and can be used to control the model outputs. Read the
documentation from `),Vn=n("a"),pi=s("PretrainedConfig"),hi=s(" for more information."),ui=i(),Nr=n("p"),mi=s("Example:"),fi=i(),_(ko.$$.fragment),Ns=i(),kt=n("h2"),It=n("a"),Or=n("span"),_(yo.$$.fragment),_i=i(),Ar=n("span"),gi=s("BlenderbotTokenizer"),Os=i(),ie=n("div"),_(To.$$.fragment),bi=i(),Ir=n("p"),vi=s("Construct a Blenderbot tokenizer."),ki=i(),Lt=n("p"),Lr=n("code"),yi=s("Blenderbot"),Ti=s(" is nearly identical to "),Qn=n("a"),wi=s("RobertaTokenizer"),Bi=s(` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),zi=i(),wo=n("p"),xi=s("Refer to superclass "),Jn=n("a"),Fi=s("RobertaTokenizer"),$i=s(" for usage examples and documentation concerning parameters."),qi=i(),Je=n("div"),_(Bo.$$.fragment),Ei=i(),Sr=n("p"),Mi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ci=i(),Dr=n("ul"),Xn=n("li"),ji=s("single sequence: "),Gr=n("code"),Pi=s("X </s>"),As=i(),yt=n("h2"),St=n("a"),Wr=n("span"),_(zo.$$.fragment),Ni=i(),Ur=n("span"),Oi=s("BlenderbotTokenizerFast"),Is=i(),le=n("div"),_(xo.$$.fragment),Ai=i(),Fo=n("p"),Ii=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rr=n("em"),Li=s("tokenizers"),Si=s(" library)."),Di=i(),Dt=n("p"),Hr=n("code"),Gi=s("BlenderbotFast"),Wi=s(" is nearly identical to "),Yn=n("a"),Ui=s("RobertaTokenizerFast"),Ri=s(` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),Hi=i(),$o=n("p"),Ki=s("Refer to superclass "),Zn=n("a"),Vi=s("RobertaTokenizerFast"),Qi=s(" for usage examples and documentation concerning parameters."),Ji=i(),Xe=n("div"),_(qo.$$.fragment),Xi=i(),Kr=n("p"),Yi=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Zi=i(),Vr=n("ul"),er=n("li"),el=s("single sequence: "),Qr=n("code"),tl=s("X </s>"),Ls=i(),Tt=n("h2"),Gt=n("a"),Jr=n("span"),_(Eo.$$.fragment),ol=i(),Xr=n("span"),nl=s("BlenderbotModel"),Ss=i(),Ue=n("p"),rl=s("See "),Yr=n("code"),al=s("transformers.BartModel"),sl=s(" for arguments to "),Zr=n("em"),dl=s("forward"),il=s(" and "),ea=n("em"),ll=s("generate"),Ds=i(),ze=n("div"),_(Mo.$$.fragment),cl=i(),Co=n("p"),pl=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),tr=n("a"),hl=s("PreTrainedModel"),ul=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml=i(),jo=n("p"),fl=s("This model is also a PyTorch "),Po=n("a"),_l=s("torch.nn.Module"),gl=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bl=i(),ge=n("div"),_(No.$$.fragment),vl=i(),wt=n("p"),kl=s("The "),or=n("a"),yl=s("BlenderbotModel"),Tl=s(" forward method, overrides the "),ta=n("code"),wl=s("__call__"),Bl=s(" special method."),zl=i(),_(Wt.$$.fragment),xl=i(),oa=n("p"),Fl=s("Example:"),$l=i(),_(Oo.$$.fragment),Gs=i(),Bt=n("h2"),Ut=n("a"),na=n("span"),_(Ao.$$.fragment),ql=i(),ra=n("span"),El=s("BlenderbotForConditionalGeneration"),Ws=i(),Re=n("p"),Ml=s("See "),nr=n("a"),Cl=s("BartForConditionalGeneration"),jl=s(" for arguments to "),aa=n("em"),Pl=s("forward"),Nl=s(" and "),sa=n("em"),Ol=s("generate"),Us=i(),xe=n("div"),_(Io.$$.fragment),Al=i(),Lo=n("p"),Il=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),rr=n("a"),Ll=s("PreTrainedModel"),Sl=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl=i(),So=n("p"),Gl=s("This model is also a PyTorch "),Do=n("a"),Wl=s("torch.nn.Module"),Ul=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=i(),X=n("div"),_(Go.$$.fragment),Hl=i(),zt=n("p"),Kl=s("The "),ar=n("a"),Vl=s("BlenderbotForConditionalGeneration"),Ql=s(" forward method, overrides the "),da=n("code"),Jl=s("__call__"),Xl=s(" special method."),Yl=i(),_(Rt.$$.fragment),Zl=i(),ia=n("p"),ec=s("Conversation example::"),tc=i(),la=n("blockquote"),ca=n("blockquote"),pa=n("blockquote"),ha=n("p"),oc=s(`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),nc=i(),ua=n("blockquote"),ma=n("blockquote"),fa=n("blockquote"),Wo=n("p"),rc=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),_a=n("s"),ac=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),sc=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Rs=i(),xt=n("h2"),Ht=n("a"),ga=n("span"),_(Uo.$$.fragment),dc=i(),ba=n("span"),ic=s("BlenderbotForCausalLM"),Hs=i(),Ft=n("div"),_(Ro.$$.fragment),lc=i(),Ye=n("div"),_(Ho.$$.fragment),cc=i(),va=n("p"),pc=s("Example:"),hc=i(),_(Ko.$$.fragment),Ks=i(),$t=n("h2"),Kt=n("a"),ka=n("span"),_(Vo.$$.fragment),uc=i(),ya=n("span"),mc=s("TFBlenderbotModel"),Vs=i(),ce=n("div"),_(Qo.$$.fragment),fc=i(),Jo=n("p"),_c=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sr=n("a"),gc=s("TFPreTrainedModel"),bc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=i(),Xo=n("p"),kc=s("This model is also a "),Yo=n("a"),yc=s("tf.keras.Model"),Tc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wc=i(),_(Vt.$$.fragment),Bc=i(),be=n("div"),_(Zo.$$.fragment),zc=i(),qt=n("p"),xc=s("The "),dr=n("a"),Fc=s("TFBlenderbotModel"),$c=s(" forward method, overrides the "),Ta=n("code"),qc=s("__call__"),Ec=s(" special method."),Mc=i(),_(Qt.$$.fragment),Cc=i(),wa=n("p"),jc=s("Example:"),Pc=i(),_(en.$$.fragment),Qs=i(),Et=n("h2"),Jt=n("a"),Ba=n("span"),_(tn.$$.fragment),Nc=i(),za=n("span"),Oc=s("TFBlenderbotForConditionalGeneration"),Js=i(),pe=n("div"),_(on.$$.fragment),Ac=i(),nn=n("p"),Ic=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ir=n("a"),Lc=s("TFPreTrainedModel"),Sc=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=i(),rn=n("p"),Gc=s("This model is also a "),an=n("a"),Wc=s("tf.keras.Model"),Uc=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rc=i(),_(Xt.$$.fragment),Hc=i(),Y=n("div"),_(sn.$$.fragment),Kc=i(),Mt=n("p"),Vc=s("The "),lr=n("a"),Qc=s("TFBlenderbotForConditionalGeneration"),Jc=s(" forward method, overrides the "),xa=n("code"),Xc=s("__call__"),Yc=s(" special method."),Zc=i(),_(Yt.$$.fragment),ep=i(),Fa=n("p"),tp=s("Conversation example::"),op=i(),$a=n("blockquote"),qa=n("blockquote"),Ea=n("blockquote"),Ma=n("p"),np=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),rp=i(),Ca=n("blockquote"),ja=n("blockquote"),Pa=n("blockquote"),dn=n("p"),ap=s(`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Na=n("s"),sp=s(`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),dp=s(` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),Xs=i(),Ct=n("h2"),Zt=n("a"),Oa=n("span"),_(ln.$$.fragment),ip=i(),Aa=n("span"),lp=s("FlaxBlenderbotModel"),Ys=i(),I=n("div"),_(cn.$$.fragment),cp=i(),pn=n("p"),pp=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cr=n("a"),hp=s("FlaxPreTrainedModel"),up=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=i(),hn=n("p"),fp=s(`This model is also a Flax Linen
`),un=n("a"),_p=s("flax.nn.Module"),gp=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),bp=i(),Ia=n("p"),vp=s("Finally, this model supports inherent JAX features such as:"),kp=i(),He=n("ul"),La=n("li"),mn=n("a"),yp=s("Just-In-Time (JIT) compilation"),Tp=i(),Sa=n("li"),fn=n("a"),wp=s("Automatic Differentiation"),Bp=i(),Da=n("li"),_n=n("a"),zp=s("Vectorization"),xp=i(),Ga=n("li"),gn=n("a"),Fp=s("Parallelization"),$p=i(),ve=n("div"),_(bn.$$.fragment),qp=i(),jt=n("p"),Ep=s("The "),Wa=n("code"),Mp=s("FlaxBlenderbotPreTrainedModel"),Cp=s("forward method, overrides the "),Ua=n("code"),jp=s("__call__"),Pp=s(" special method."),Np=i(),_(eo.$$.fragment),Op=i(),Ra=n("p"),Ap=s("Example:"),Ip=i(),_(vn.$$.fragment),Lp=i(),Ze=n("div"),_(kn.$$.fragment),Sp=i(),Ha=n("p"),Dp=s("Example:"),Gp=i(),_(yn.$$.fragment),Wp=i(),et=n("div"),_(Tn.$$.fragment),Up=i(),Ka=n("p"),Rp=s("Example:"),Hp=i(),_(wn.$$.fragment),Zs=i(),Pt=n("h2"),to=n("a"),Va=n("span"),_(Bn.$$.fragment),Kp=i(),Qa=n("span"),Vp=s("FlaxBlenderbotForConditionalGeneration"),ed=i(),L=n("div"),_(zn.$$.fragment),Qp=i(),xn=n("p"),Jp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pr=n("a"),Xp=s("FlaxPreTrainedModel"),Yp=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp=i(),Fn=n("p"),eh=s(`This model is also a Flax Linen
`),$n=n("a"),th=s("flax.nn.Module"),oh=s(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),nh=i(),Ja=n("p"),rh=s("Finally, this model supports inherent JAX features such as:"),ah=i(),Ke=n("ul"),Xa=n("li"),qn=n("a"),sh=s("Just-In-Time (JIT) compilation"),dh=i(),Ya=n("li"),En=n("a"),ih=s("Automatic Differentiation"),lh=i(),Za=n("li"),Mn=n("a"),ch=s("Vectorization"),ph=i(),es=n("li"),Cn=n("a"),hh=s("Parallelization"),uh=i(),S=n("div"),_(jn.$$.fragment),mh=i(),Nt=n("p"),fh=s("The "),ts=n("code"),_h=s("FlaxBlenderbotPreTrainedModel"),gh=s("forward method, overrides the "),os=n("code"),bh=s("__call__"),vh=s(" special method."),kh=i(),_(oo.$$.fragment),yh=i(),ns=n("p"),Th=s("Conversation example::"),wh=i(),rs=n("blockquote"),as=n("blockquote"),ss=n("blockquote"),ds=n("p"),Bh=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),zh=i(),is=n("blockquote"),ls=n("blockquote"),cs=n("blockquote"),ps=n("p"),xh=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),Fh=i(),hs=n("blockquote"),us=n("blockquote"),ms=n("blockquote"),fs=n("p"),$h=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),qh=i(),_s=n("blockquote"),gs=n("blockquote"),Pn=n("blockquote"),no=n("h1"),ro=n("a"),bs=n("span"),_(Nn.$$.fragment),Eh=i(),vs=n("span"),Mh=s("Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Ch=i(),ks=n("p"),jh=s(`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Ph=i(),tt=n("div"),_(On.$$.fragment),Nh=i(),ys=n("p"),Oh=s("Example:"),Ah=i(),_(An.$$.fragment),Ih=i(),ot=n("div"),_(In.$$.fragment),Lh=i(),Ts=n("p"),Sh=s("Example:"),Dh=i(),_(Ln.$$.fragment),this.h()},l(o){const h=Qf('[data-svelte="svelte-1phssyn"]',document.head);u=r(h,"META",{name:!0,content:!0}),h.forEach(t),x=l(o),f=r(o,"H1",{class:!0});var Sn=a(f);T=r(Sn,"A",{id:!0,class:!0,href:!0});var ws=a(T);z=r(ws,"SPAN",{});var Bs=a(z);g(B.$$.fragment,Bs),Bs.forEach(t),ws.forEach(t),w=l(Sn),F=r(Sn,"SPAN",{});var zs=a(F);Ce=d(zs,"Blenderbot"),zs.forEach(t),Sn.forEach(t),ue=l(o),q=r(o,"P",{});var ao=a(q);ke=r(ao,"STRONG",{});var xs=a(ke);oe=d(xs,"DISCLAIMER:"),xs.forEach(t),je=d(ao," If you see something strange, file a "),ne=r(ao,"A",{href:!0,rel:!0});var Fs=a(ne);re=d(Fs,"Github Issue"),Fs.forEach(t),Pe=d(ao," ."),ao.forEach(t),Fe=l(o),G=r(o,"H2",{class:!0});var Dn=a(G);N=r(Dn,"A",{id:!0,class:!0,href:!0});var Uh=a(N);ye=r(Uh,"SPAN",{});var Rh=a(ye);g(R.$$.fragment,Rh),Rh.forEach(t),Uh.forEach(t),E=l(Dn),C=r(Dn,"SPAN",{});var Hh=a(C);Ne=d(Hh,"Overview"),Hh.forEach(t),Dn.forEach(t),Q=l(o),J=r(o,"P",{});var od=a(J);Oe=d(od,"The Blender chatbot model was proposed in "),W=r(od,"A",{href:!0,rel:!0});var Kh=a(W);Ae=d(Kh,"Recipes for building an open-domain chatbot"),Kh.forEach(t),Ie=d(od,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),od.forEach(t),O=l(o),me=r(o,"P",{});var Vh=a(me);ae=d(Vh,"The abstract of the paper is the following:"),Vh.forEach(t),$e=l(o),fe=r(o,"P",{});var Qh=a(fe);H=r(Qh,"EM",{});var Jh=a(H);Le=d(Jh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Jh.forEach(t),Qh.forEach(t),qe=l(o),M=r(o,"P",{});var hr=a(M);Se=d(hr,"This model was contributed by "),U=r(hr,"A",{href:!0,rel:!0});var Xh=a(U);De=d(Xh,"sshleifer"),Xh.forEach(t),m=d(hr,". The authors\u2019 code can be found "),$=r(hr,"A",{href:!0,rel:!0});var Yh=a($);Te=d(Yh,"here"),Yh.forEach(t),ht=d(hr," ."),hr.forEach(t),Ve=l(o),j=r(o,"H2",{class:!0});var nd=a(j);_e=r(nd,"A",{id:!0,class:!0,href:!0});var Zh=a(_e);Ge=r(Zh,"SPAN",{});var eu=a(Ge);g(we.$$.fragment,eu),eu.forEach(t),Zh.forEach(t),K=l(nd),V=r(nd,"SPAN",{});var tu=a(V);ut=d(tu,"Implementation Notes"),tu.forEach(t),nd.forEach(t),Qe=l(o),A=r(o,"UL",{});var ur=a(A);Be=r(ur,"LI",{});var rd=a(Be);mt=d(rd,"Blenderbot uses a standard "),se=r(rd,"A",{href:!0,rel:!0});var ou=a(se);ft=d(ou,"seq2seq model transformer"),ou.forEach(t),Ad=d(rd," based architecture."),rd.forEach(t),Id=l(ur),uo=r(ur,"LI",{});var ad=a(uo);Ld=d(ad,"Available checkpoints can be found in the "),mo=r(ad,"A",{href:!0,rel:!0});var nu=a(mo);Sd=d(nu,"model hub"),nu.forEach(t),Dd=d(ad,"."),ad.forEach(t),Gd=l(ur),We=r(ur,"LI",{});var so=a(We);Wd=d(so,"This is the "),qr=r(so,"EM",{});var ru=a(qr);Ud=d(ru,"default"),ru.forEach(t),Rd=d(so,` Blenderbot model class. However, some smaller checkpoints, such as
`),Er=r(so,"CODE",{});var au=a(Er);Hd=d(au,"facebook/blenderbot_small_90M"),au.forEach(t),Kd=d(so,`, have a different architecture and consequently should be used with
`),Un=r(so,"A",{href:!0});var su=a(Un);Vd=d(su,"BlenderbotSmall"),su.forEach(t),Qd=d(so,"."),so.forEach(t),ur.forEach(t),Es=l(o),_t=r(o,"H2",{class:!0});var sd=a(_t);Ot=r(sd,"A",{id:!0,class:!0,href:!0});var du=a(Ot);Mr=r(du,"SPAN",{});var iu=a(Mr);g(fo.$$.fragment,iu),iu.forEach(t),du.forEach(t),Jd=l(sd),Cr=r(sd,"SPAN",{});var lu=a(Cr);Xd=d(lu,"Usage"),lu.forEach(t),sd.forEach(t),Ms=l(o),Rn=r(o,"P",{});var cu=a(Rn);Yd=d(cu,"Here is an example of model usage:"),cu.forEach(t),Cs=l(o),g(_o.$$.fragment,o),js=l(o),gt=r(o,"H2",{class:!0});var dd=a(gt);At=r(dd,"A",{id:!0,class:!0,href:!0});var pu=a(At);jr=r(pu,"SPAN",{});var hu=a(jr);g(go.$$.fragment,hu),hu.forEach(t),pu.forEach(t),Zd=l(dd),Pr=r(dd,"SPAN",{});var uu=a(Pr);ei=d(uu,"BlenderbotConfig"),uu.forEach(t),dd.forEach(t),Ps=l(o),de=r(o,"DIV",{class:!0});var nt=a(de);g(bo.$$.fragment,nt),ti=l(nt),bt=r(nt,"P",{});var mr=a(bt);oi=d(mr,"This is the configuration class to store the configuration of a "),Hn=r(mr,"A",{href:!0});var mu=a(Hn);ni=d(mu,"BlenderbotModel"),mu.forEach(t),ri=d(mr,`. It is used to instantiate an
Blenderbot model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),vo=r(mr,"A",{href:!0,rel:!0});var fu=a(vo);ai=d(fu,"facebook/blenderbot-3B"),fu.forEach(t),si=d(mr," architecture."),mr.forEach(t),di=l(nt),vt=r(nt,"P",{});var fr=a(vt);ii=d(fr,"Configuration objects inherit from "),Kn=r(fr,"A",{href:!0});var _u=a(Kn);li=d(_u,"PretrainedConfig"),_u.forEach(t),ci=d(fr,` and can be used to control the model outputs. Read the
documentation from `),Vn=r(fr,"A",{href:!0});var gu=a(Vn);pi=d(gu,"PretrainedConfig"),gu.forEach(t),hi=d(fr," for more information."),fr.forEach(t),ui=l(nt),Nr=r(nt,"P",{});var bu=a(Nr);mi=d(bu,"Example:"),bu.forEach(t),fi=l(nt),g(ko.$$.fragment,nt),nt.forEach(t),Ns=l(o),kt=r(o,"H2",{class:!0});var id=a(kt);It=r(id,"A",{id:!0,class:!0,href:!0});var vu=a(It);Or=r(vu,"SPAN",{});var ku=a(Or);g(yo.$$.fragment,ku),ku.forEach(t),vu.forEach(t),_i=l(id),Ar=r(id,"SPAN",{});var yu=a(Ar);gi=d(yu,"BlenderbotTokenizer"),yu.forEach(t),id.forEach(t),Os=l(o),ie=r(o,"DIV",{class:!0});var rt=a(ie);g(To.$$.fragment,rt),bi=l(rt),Ir=r(rt,"P",{});var Tu=a(Ir);vi=d(Tu,"Construct a Blenderbot tokenizer."),Tu.forEach(t),ki=l(rt),Lt=r(rt,"P",{});var $s=a(Lt);Lr=r($s,"CODE",{});var wu=a(Lr);yi=d(wu,"Blenderbot"),wu.forEach(t),Ti=d($s," is nearly identical to "),Qn=r($s,"A",{href:!0});var Bu=a(Qn);wi=d(Bu,"RobertaTokenizer"),Bu.forEach(t),Bi=d($s,` and runs end-to-end tokenization: punctuation splitting
and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),$s.forEach(t),zi=l(rt),wo=r(rt,"P",{});var ld=a(wo);xi=d(ld,"Refer to superclass "),Jn=r(ld,"A",{href:!0});var zu=a(Jn);Fi=d(zu,"RobertaTokenizer"),zu.forEach(t),$i=d(ld," for usage examples and documentation concerning parameters."),ld.forEach(t),qi=l(rt),Je=r(rt,"DIV",{class:!0});var _r=a(Je);g(Bo.$$.fragment,_r),Ei=l(_r),Sr=r(_r,"P",{});var xu=a(Sr);Mi=d(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),xu.forEach(t),Ci=l(_r),Dr=r(_r,"UL",{});var Fu=a(Dr);Xn=r(Fu,"LI",{});var Gh=a(Xn);ji=d(Gh,"single sequence: "),Gr=r(Gh,"CODE",{});var $u=a(Gr);Pi=d($u,"X </s>"),$u.forEach(t),Gh.forEach(t),Fu.forEach(t),_r.forEach(t),rt.forEach(t),As=l(o),yt=r(o,"H2",{class:!0});var cd=a(yt);St=r(cd,"A",{id:!0,class:!0,href:!0});var qu=a(St);Wr=r(qu,"SPAN",{});var Eu=a(Wr);g(zo.$$.fragment,Eu),Eu.forEach(t),qu.forEach(t),Ni=l(cd),Ur=r(cd,"SPAN",{});var Mu=a(Ur);Oi=d(Mu,"BlenderbotTokenizerFast"),Mu.forEach(t),cd.forEach(t),Is=l(o),le=r(o,"DIV",{class:!0});var at=a(le);g(xo.$$.fragment,at),Ai=l(at),Fo=r(at,"P",{});var pd=a(Fo);Ii=d(pd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Rr=r(pd,"EM",{});var Cu=a(Rr);Li=d(Cu,"tokenizers"),Cu.forEach(t),Si=d(pd," library)."),pd.forEach(t),Di=l(at),Dt=r(at,"P",{});var qs=a(Dt);Hr=r(qs,"CODE",{});var ju=a(Hr);Gi=d(ju,"BlenderbotFast"),ju.forEach(t),Wi=d(qs," is nearly identical to "),Yn=r(qs,"A",{href:!0});var Pu=a(Yn);Ui=d(Pu,"RobertaTokenizerFast"),Pu.forEach(t),Ri=d(qs,` and runs end-to-end tokenization: punctuation
splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token to the beginning of sequences.`),qs.forEach(t),Hi=l(at),$o=r(at,"P",{});var hd=a($o);Ki=d(hd,"Refer to superclass "),Zn=r(hd,"A",{href:!0});var Nu=a(Zn);Vi=d(Nu,"RobertaTokenizerFast"),Nu.forEach(t),Qi=d(hd," for usage examples and documentation concerning parameters."),hd.forEach(t),Ji=l(at),Xe=r(at,"DIV",{class:!0});var gr=a(Xe);g(qo.$$.fragment,gr),Xi=l(gr),Kr=r(gr,"P",{});var Ou=a(Kr);Yi=d(Ou,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Ou.forEach(t),Zi=l(gr),Vr=r(gr,"UL",{});var Au=a(Vr);er=r(Au,"LI",{});var Wh=a(er);el=d(Wh,"single sequence: "),Qr=r(Wh,"CODE",{});var Iu=a(Qr);tl=d(Iu,"X </s>"),Iu.forEach(t),Wh.forEach(t),Au.forEach(t),gr.forEach(t),at.forEach(t),Ls=l(o),Tt=r(o,"H2",{class:!0});var ud=a(Tt);Gt=r(ud,"A",{id:!0,class:!0,href:!0});var Lu=a(Gt);Jr=r(Lu,"SPAN",{});var Su=a(Jr);g(Eo.$$.fragment,Su),Su.forEach(t),Lu.forEach(t),ol=l(ud),Xr=r(ud,"SPAN",{});var Du=a(Xr);nl=d(Du,"BlenderbotModel"),Du.forEach(t),ud.forEach(t),Ss=l(o),Ue=r(o,"P",{});var Gn=a(Ue);rl=d(Gn,"See "),Yr=r(Gn,"CODE",{});var Gu=a(Yr);al=d(Gu,"transformers.BartModel"),Gu.forEach(t),sl=d(Gn," for arguments to "),Zr=r(Gn,"EM",{});var Wu=a(Zr);dl=d(Wu,"forward"),Wu.forEach(t),il=d(Gn," and "),ea=r(Gn,"EM",{});var Uu=a(ea);ll=d(Uu,"generate"),Uu.forEach(t),Gn.forEach(t),Ds=l(o),ze=r(o,"DIV",{class:!0});var io=a(ze);g(Mo.$$.fragment,io),cl=l(io),Co=r(io,"P",{});var md=a(Co);pl=d(md,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),tr=r(md,"A",{href:!0});var Ru=a(tr);hl=d(Ru,"PreTrainedModel"),Ru.forEach(t),ul=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),ml=l(io),jo=r(io,"P",{});var fd=a(jo);fl=d(fd,"This model is also a PyTorch "),Po=r(fd,"A",{href:!0,rel:!0});var Hu=a(Po);_l=d(Hu,"torch.nn.Module"),Hu.forEach(t),gl=d(fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd.forEach(t),bl=l(io),ge=r(io,"DIV",{class:!0});var st=a(ge);g(No.$$.fragment,st),vl=l(st),wt=r(st,"P",{});var br=a(wt);kl=d(br,"The "),or=r(br,"A",{href:!0});var Ku=a(or);yl=d(Ku,"BlenderbotModel"),Ku.forEach(t),Tl=d(br," forward method, overrides the "),ta=r(br,"CODE",{});var Vu=a(ta);wl=d(Vu,"__call__"),Vu.forEach(t),Bl=d(br," special method."),br.forEach(t),zl=l(st),g(Wt.$$.fragment,st),xl=l(st),oa=r(st,"P",{});var Qu=a(oa);Fl=d(Qu,"Example:"),Qu.forEach(t),$l=l(st),g(Oo.$$.fragment,st),st.forEach(t),io.forEach(t),Gs=l(o),Bt=r(o,"H2",{class:!0});var _d=a(Bt);Ut=r(_d,"A",{id:!0,class:!0,href:!0});var Ju=a(Ut);na=r(Ju,"SPAN",{});var Xu=a(na);g(Ao.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),ql=l(_d),ra=r(_d,"SPAN",{});var Yu=a(ra);El=d(Yu,"BlenderbotForConditionalGeneration"),Yu.forEach(t),_d.forEach(t),Ws=l(o),Re=r(o,"P",{});var Wn=a(Re);Ml=d(Wn,"See "),nr=r(Wn,"A",{href:!0});var Zu=a(nr);Cl=d(Zu,"BartForConditionalGeneration"),Zu.forEach(t),jl=d(Wn," for arguments to "),aa=r(Wn,"EM",{});var em=a(aa);Pl=d(em,"forward"),em.forEach(t),Nl=d(Wn," and "),sa=r(Wn,"EM",{});var tm=a(sa);Ol=d(tm,"generate"),tm.forEach(t),Wn.forEach(t),Us=l(o),xe=r(o,"DIV",{class:!0});var lo=a(xe);g(Io.$$.fragment,lo),Al=l(lo),Lo=r(lo,"P",{});var gd=a(Lo);Il=d(gd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),rr=r(gd,"A",{href:!0});var om=a(rr);Ll=d(om,"PreTrainedModel"),om.forEach(t),Sl=d(gd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd.forEach(t),Dl=l(lo),So=r(lo,"P",{});var bd=a(So);Gl=d(bd,"This model is also a PyTorch "),Do=r(bd,"A",{href:!0,rel:!0});var nm=a(Do);Wl=d(nm,"torch.nn.Module"),nm.forEach(t),Ul=d(bd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bd.forEach(t),Rl=l(lo),X=r(lo,"DIV",{class:!0});var Ee=a(X);g(Go.$$.fragment,Ee),Hl=l(Ee),zt=r(Ee,"P",{});var vr=a(zt);Kl=d(vr,"The "),ar=r(vr,"A",{href:!0});var rm=a(ar);Vl=d(rm,"BlenderbotForConditionalGeneration"),rm.forEach(t),Ql=d(vr," forward method, overrides the "),da=r(vr,"CODE",{});var am=a(da);Jl=d(am,"__call__"),am.forEach(t),Xl=d(vr," special method."),vr.forEach(t),Yl=l(Ee),g(Rt.$$.fragment,Ee),Zl=l(Ee),ia=r(Ee,"P",{});var sm=a(ia);ec=d(sm,"Conversation example::"),sm.forEach(t),tc=l(Ee),la=r(Ee,"BLOCKQUOTE",{});var dm=a(la);ca=r(dm,"BLOCKQUOTE",{});var im=a(ca);pa=r(im,"BLOCKQUOTE",{});var lm=a(pa);ha=r(lm,"P",{});var cm=a(ha);oc=d(cm,`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = BlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),cm.forEach(t),lm.forEach(t),im.forEach(t),dm.forEach(t),nc=l(Ee),ua=r(Ee,"BLOCKQUOTE",{});var pm=a(ua);ma=r(pm,"BLOCKQUOTE",{});var hm=a(ma);fa=r(hm,"BLOCKQUOTE",{});var um=a(fa);Wo=r(um,"P",{});var vd=a(Wo);rc=d(vd,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),_a=r(vd,"S",{});var mm=a(_a);ac=d(mm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),mm.forEach(t),sc=d(vd,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),vd.forEach(t),um.forEach(t),hm.forEach(t),pm.forEach(t),Ee.forEach(t),lo.forEach(t),Rs=l(o),xt=r(o,"H2",{class:!0});var kd=a(xt);Ht=r(kd,"A",{id:!0,class:!0,href:!0});var fm=a(Ht);ga=r(fm,"SPAN",{});var _m=a(ga);g(Uo.$$.fragment,_m),_m.forEach(t),fm.forEach(t),dc=l(kd),ba=r(kd,"SPAN",{});var gm=a(ba);ic=d(gm,"BlenderbotForCausalLM"),gm.forEach(t),kd.forEach(t),Hs=l(o),Ft=r(o,"DIV",{class:!0});var yd=a(Ft);g(Ro.$$.fragment,yd),lc=l(yd),Ye=r(yd,"DIV",{class:!0});var kr=a(Ye);g(Ho.$$.fragment,kr),cc=l(kr),va=r(kr,"P",{});var bm=a(va);pc=d(bm,"Example:"),bm.forEach(t),hc=l(kr),g(Ko.$$.fragment,kr),kr.forEach(t),yd.forEach(t),Ks=l(o),$t=r(o,"H2",{class:!0});var Td=a($t);Kt=r(Td,"A",{id:!0,class:!0,href:!0});var vm=a(Kt);ka=r(vm,"SPAN",{});var km=a(ka);g(Vo.$$.fragment,km),km.forEach(t),vm.forEach(t),uc=l(Td),ya=r(Td,"SPAN",{});var ym=a(ya);mc=d(ym,"TFBlenderbotModel"),ym.forEach(t),Td.forEach(t),Vs=l(o),ce=r(o,"DIV",{class:!0});var dt=a(ce);g(Qo.$$.fragment,dt),fc=l(dt),Jo=r(dt,"P",{});var wd=a(Jo);_c=d(wd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),sr=r(wd,"A",{href:!0});var Tm=a(sr);gc=d(Tm,"TFPreTrainedModel"),Tm.forEach(t),bc=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),vc=l(dt),Xo=r(dt,"P",{});var Bd=a(Xo);kc=d(Bd,"This model is also a "),Yo=r(Bd,"A",{href:!0,rel:!0});var wm=a(Yo);yc=d(wm,"tf.keras.Model"),wm.forEach(t),Tc=d(Bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bd.forEach(t),wc=l(dt),g(Vt.$$.fragment,dt),Bc=l(dt),be=r(dt,"DIV",{class:!0});var it=a(be);g(Zo.$$.fragment,it),zc=l(it),qt=r(it,"P",{});var yr=a(qt);xc=d(yr,"The "),dr=r(yr,"A",{href:!0});var Bm=a(dr);Fc=d(Bm,"TFBlenderbotModel"),Bm.forEach(t),$c=d(yr," forward method, overrides the "),Ta=r(yr,"CODE",{});var zm=a(Ta);qc=d(zm,"__call__"),zm.forEach(t),Ec=d(yr," special method."),yr.forEach(t),Mc=l(it),g(Qt.$$.fragment,it),Cc=l(it),wa=r(it,"P",{});var xm=a(wa);jc=d(xm,"Example:"),xm.forEach(t),Pc=l(it),g(en.$$.fragment,it),it.forEach(t),dt.forEach(t),Qs=l(o),Et=r(o,"H2",{class:!0});var zd=a(Et);Jt=r(zd,"A",{id:!0,class:!0,href:!0});var Fm=a(Jt);Ba=r(Fm,"SPAN",{});var $m=a(Ba);g(tn.$$.fragment,$m),$m.forEach(t),Fm.forEach(t),Nc=l(zd),za=r(zd,"SPAN",{});var qm=a(za);Oc=d(qm,"TFBlenderbotForConditionalGeneration"),qm.forEach(t),zd.forEach(t),Js=l(o),pe=r(o,"DIV",{class:!0});var lt=a(pe);g(on.$$.fragment,lt),Ac=l(lt),nn=r(lt,"P",{});var xd=a(nn);Ic=d(xd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),ir=r(xd,"A",{href:!0});var Em=a(ir);Lc=d(Em,"TFPreTrainedModel"),Em.forEach(t),Sc=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Dc=l(lt),rn=r(lt,"P",{});var Fd=a(rn);Gc=d(Fd,"This model is also a "),an=r(Fd,"A",{href:!0,rel:!0});var Mm=a(an);Wc=d(Mm,"tf.keras.Model"),Mm.forEach(t),Uc=d(Fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd.forEach(t),Rc=l(lt),g(Xt.$$.fragment,lt),Hc=l(lt),Y=r(lt,"DIV",{class:!0});var Me=a(Y);g(sn.$$.fragment,Me),Kc=l(Me),Mt=r(Me,"P",{});var Tr=a(Mt);Vc=d(Tr,"The "),lr=r(Tr,"A",{href:!0});var Cm=a(lr);Qc=d(Cm,"TFBlenderbotForConditionalGeneration"),Cm.forEach(t),Jc=d(Tr," forward method, overrides the "),xa=r(Tr,"CODE",{});var jm=a(xa);Xc=d(jm,"__call__"),jm.forEach(t),Yc=d(Tr," special method."),Tr.forEach(t),Zc=l(Me),g(Yt.$$.fragment,Me),ep=l(Me),Fa=r(Me,"P",{});var Pm=a(Fa);tp=d(Pm,"Conversation example::"),Pm.forEach(t),op=l(Me),$a=r(Me,"BLOCKQUOTE",{});var Nm=a($a);qa=r(Nm,"BLOCKQUOTE",{});var Om=a(qa);Ea=r(Om,"BLOCKQUOTE",{});var Am=a(Ea);Ma=r(Am,"P",{});var Im=a(Ma);np=d(Im,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration >>> mname =
\u2018facebook/blenderbot-400M-distill\u2019 >>> model = TFBlenderbotForConditionalGeneration.from_pretrained(mname) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(mname) >>> UTTERANCE = \u201CMy friends are cool but they eat too
many carbs.\u201D >>> print(\u201CHuman: \u201D, UTTERANCE) >>> inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019) >>>
reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids,
skip_special_tokens=True)[0])`),Im.forEach(t),Am.forEach(t),Om.forEach(t),Nm.forEach(t),rp=l(Me),Ca=r(Me,"BLOCKQUOTE",{});var Lm=a(Ca);ja=r(Lm,"BLOCKQUOTE",{});var Sm=a(ja);Pa=r(Sm,"BLOCKQUOTE",{});var Dm=a(Pa);dn=r(Dm,"P",{});var $d=a(dn);ap=d($d,`REPLY = \u201CI\u2019m not sure\u201D >>> print(\u201CHuman: \u201D, REPLY) >>> NEXT_UTTERANCE = ( \u2026 \u201CMy friends are cool but they
eat too many carbs.</s> `),Na=r($d,"S",{});var Gm=a(Na);sp=d(Gm,`That\u2019s unfortunate. \u201D \u2026 \u201CAre they trying to lose weight or are they just trying to
be healthier?`),Gm.forEach(t),dp=d($d,` \u201D \u2026 \u201D<s> I\u2019m not sure.\u201D \u2026 ) >>> inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs) >>> print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids,
skip_special_tokens=True)[0])`),$d.forEach(t),Dm.forEach(t),Sm.forEach(t),Lm.forEach(t),Me.forEach(t),lt.forEach(t),Xs=l(o),Ct=r(o,"H2",{class:!0});var qd=a(Ct);Zt=r(qd,"A",{id:!0,class:!0,href:!0});var Wm=a(Zt);Oa=r(Wm,"SPAN",{});var Um=a(Oa);g(ln.$$.fragment,Um),Um.forEach(t),Wm.forEach(t),ip=l(qd),Aa=r(qd,"SPAN",{});var Rm=a(Aa);lp=d(Rm,"FlaxBlenderbotModel"),Rm.forEach(t),qd.forEach(t),Ys=l(o),I=r(o,"DIV",{class:!0});var Z=a(I);g(cn.$$.fragment,Z),cp=l(Z),pn=r(Z,"P",{});var Ed=a(pn);pp=d(Ed,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),cr=r(Ed,"A",{href:!0});var Hm=a(cr);hp=d(Hm,"FlaxPreTrainedModel"),Hm.forEach(t),up=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),mp=l(Z),hn=r(Z,"P",{});var Md=a(hn);fp=d(Md,`This model is also a Flax Linen
`),un=r(Md,"A",{href:!0,rel:!0});var Km=a(un);_p=d(Km,"flax.nn.Module"),Km.forEach(t),gp=d(Md,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Md.forEach(t),bp=l(Z),Ia=r(Z,"P",{});var Vm=a(Ia);vp=d(Vm,"Finally, this model supports inherent JAX features such as:"),Vm.forEach(t),kp=l(Z),He=r(Z,"UL",{});var co=a(He);La=r(co,"LI",{});var Qm=a(La);mn=r(Qm,"A",{href:!0,rel:!0});var Jm=a(mn);yp=d(Jm,"Just-In-Time (JIT) compilation"),Jm.forEach(t),Qm.forEach(t),Tp=l(co),Sa=r(co,"LI",{});var Xm=a(Sa);fn=r(Xm,"A",{href:!0,rel:!0});var Ym=a(fn);wp=d(Ym,"Automatic Differentiation"),Ym.forEach(t),Xm.forEach(t),Bp=l(co),Da=r(co,"LI",{});var Zm=a(Da);_n=r(Zm,"A",{href:!0,rel:!0});var ef=a(_n);zp=d(ef,"Vectorization"),ef.forEach(t),Zm.forEach(t),xp=l(co),Ga=r(co,"LI",{});var tf=a(Ga);gn=r(tf,"A",{href:!0,rel:!0});var of=a(gn);Fp=d(of,"Parallelization"),of.forEach(t),tf.forEach(t),co.forEach(t),$p=l(Z),ve=r(Z,"DIV",{class:!0});var ct=a(ve);g(bn.$$.fragment,ct),qp=l(ct),jt=r(ct,"P",{});var wr=a(jt);Ep=d(wr,"The "),Wa=r(wr,"CODE",{});var nf=a(Wa);Mp=d(nf,"FlaxBlenderbotPreTrainedModel"),nf.forEach(t),Cp=d(wr,"forward method, overrides the "),Ua=r(wr,"CODE",{});var rf=a(Ua);jp=d(rf,"__call__"),rf.forEach(t),Pp=d(wr," special method."),wr.forEach(t),Np=l(ct),g(eo.$$.fragment,ct),Op=l(ct),Ra=r(ct,"P",{});var af=a(Ra);Ap=d(af,"Example:"),af.forEach(t),Ip=l(ct),g(vn.$$.fragment,ct),ct.forEach(t),Lp=l(Z),Ze=r(Z,"DIV",{class:!0});var Br=a(Ze);g(kn.$$.fragment,Br),Sp=l(Br),Ha=r(Br,"P",{});var sf=a(Ha);Dp=d(sf,"Example:"),sf.forEach(t),Gp=l(Br),g(yn.$$.fragment,Br),Br.forEach(t),Wp=l(Z),et=r(Z,"DIV",{class:!0});var zr=a(et);g(Tn.$$.fragment,zr),Up=l(zr),Ka=r(zr,"P",{});var df=a(Ka);Rp=d(df,"Example:"),df.forEach(t),Hp=l(zr),g(wn.$$.fragment,zr),zr.forEach(t),Z.forEach(t),Zs=l(o),Pt=r(o,"H2",{class:!0});var Cd=a(Pt);to=r(Cd,"A",{id:!0,class:!0,href:!0});var lf=a(to);Va=r(lf,"SPAN",{});var cf=a(Va);g(Bn.$$.fragment,cf),cf.forEach(t),lf.forEach(t),Kp=l(Cd),Qa=r(Cd,"SPAN",{});var pf=a(Qa);Vp=d(pf,"FlaxBlenderbotForConditionalGeneration"),pf.forEach(t),Cd.forEach(t),ed=l(o),L=r(o,"DIV",{class:!0});var ee=a(L);g(zn.$$.fragment,ee),Qp=l(ee),xn=r(ee,"P",{});var jd=a(xn);Jp=d(jd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),pr=r(jd,"A",{href:!0});var hf=a(pr);Xp=d(hf,"FlaxPreTrainedModel"),hf.forEach(t),Yp=d(jd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd.forEach(t),Zp=l(ee),Fn=r(ee,"P",{});var Pd=a(Fn);eh=d(Pd,`This model is also a Flax Linen
`),$n=r(Pd,"A",{href:!0,rel:!0});var uf=a($n);th=d(uf,"flax.nn.Module"),uf.forEach(t),oh=d(Pd,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pd.forEach(t),nh=l(ee),Ja=r(ee,"P",{});var mf=a(Ja);rh=d(mf,"Finally, this model supports inherent JAX features such as:"),mf.forEach(t),ah=l(ee),Ke=r(ee,"UL",{});var po=a(Ke);Xa=r(po,"LI",{});var ff=a(Xa);qn=r(ff,"A",{href:!0,rel:!0});var _f=a(qn);sh=d(_f,"Just-In-Time (JIT) compilation"),_f.forEach(t),ff.forEach(t),dh=l(po),Ya=r(po,"LI",{});var gf=a(Ya);En=r(gf,"A",{href:!0,rel:!0});var bf=a(En);ih=d(bf,"Automatic Differentiation"),bf.forEach(t),gf.forEach(t),lh=l(po),Za=r(po,"LI",{});var vf=a(Za);Mn=r(vf,"A",{href:!0,rel:!0});var kf=a(Mn);ch=d(kf,"Vectorization"),kf.forEach(t),vf.forEach(t),ph=l(po),es=r(po,"LI",{});var yf=a(es);Cn=r(yf,"A",{href:!0,rel:!0});var Tf=a(Cn);hh=d(Tf,"Parallelization"),Tf.forEach(t),yf.forEach(t),po.forEach(t),uh=l(ee),S=r(ee,"DIV",{class:!0});var te=a(S);g(jn.$$.fragment,te),mh=l(te),Nt=r(te,"P",{});var xr=a(Nt);fh=d(xr,"The "),ts=r(xr,"CODE",{});var wf=a(ts);_h=d(wf,"FlaxBlenderbotPreTrainedModel"),wf.forEach(t),gh=d(xr,"forward method, overrides the "),os=r(xr,"CODE",{});var Bf=a(os);bh=d(Bf,"__call__"),Bf.forEach(t),vh=d(xr," special method."),xr.forEach(t),kh=l(te),g(oo.$$.fragment,te),yh=l(te),ns=r(te,"P",{});var zf=a(ns);Th=d(zf,"Conversation example::"),zf.forEach(t),wh=l(te),rs=r(te,"BLOCKQUOTE",{});var xf=a(rs);as=r(xf,"BLOCKQUOTE",{});var Ff=a(as);ss=r(Ff,"BLOCKQUOTE",{});var $f=a(ss);ds=r($f,"P",{});var qf=a(ds);Bh=d(qf,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),qf.forEach(t),$f.forEach(t),Ff.forEach(t),xf.forEach(t),zh=l(te),is=r(te,"BLOCKQUOTE",{});var Ef=a(is);ls=r(Ef,"BLOCKQUOTE",{});var Mf=a(ls);cs=r(Mf,"BLOCKQUOTE",{});var Cf=a(cs);ps=r(Cf,"P",{});var jf=a(ps);xh=d(jf,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019) >>>
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),jf.forEach(t),Cf.forEach(t),Mf.forEach(t),Ef.forEach(t),Fh=l(te),hs=r(te,"BLOCKQUOTE",{});var Pf=a(hs);us=r(Pf,"BLOCKQUOTE",{});var Nf=a(us);ms=r(Nf,"BLOCKQUOTE",{});var Of=a(ms);fs=r(Of,"P",{});var Af=a(fs);$h=d(Af,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D >>> inputs = tokenizer([UTTERANCE],
max_length=1024, return_tensors=\u2018np\u2019)`),Af.forEach(t),Of.forEach(t),Nf.forEach(t),Pf.forEach(t),qh=l(te),_s=r(te,"BLOCKQUOTE",{});var If=a(_s);gs=r(If,"BLOCKQUOTE",{});var Lf=a(gs);Pn=r(Lf,"BLOCKQUOTE",{});var Nd=a(Pn);no=r(Nd,"H1",{class:!0});var Od=a(no);ro=r(Od,"A",{id:!0,class:!0,href:!0});var Sf=a(ro);bs=r(Sf,"SPAN",{});var Df=a(bs);g(Nn.$$.fragment,Df),Df.forEach(t),Sf.forEach(t),Eh=l(Od),vs=r(Od,"SPAN",{});var Gf=a(vs);Mh=d(Gf,"Generate Reply >>> reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5,"),Gf.forEach(t),Od.forEach(t),Ch=l(Nd),ks=r(Nd,"P",{});var Wf=a(ks);jh=d(Wf,`early_stopping=True).sequences >>> print([tokenizer.decode(g, skip_special_tokens=True,
clean_up_tokenization_spaces=False) for g in reply_ids])`),Wf.forEach(t),Nd.forEach(t),Lf.forEach(t),If.forEach(t),te.forEach(t),Ph=l(ee),tt=r(ee,"DIV",{class:!0});var Fr=a(tt);g(On.$$.fragment,Fr),Nh=l(Fr),ys=r(Fr,"P",{});var Uf=a(ys);Oh=d(Uf,"Example:"),Uf.forEach(t),Ah=l(Fr),g(An.$$.fragment,Fr),Fr.forEach(t),Ih=l(ee),ot=r(ee,"DIV",{class:!0});var $r=a(ot);g(In.$$.fragment,$r),Lh=l($r),Ts=r($r,"P",{});var Rf=a(Ts);Sh=d(Rf,"Example:"),Rf.forEach(t),Dh=l($r),g(Ln.$$.fragment,$r),$r.forEach(t),ee.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(a_)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(f,"class","relative group"),c(ne,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ne,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(U,"href","https://huggingface.co/sshleifer"),c(U,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(_e,"id","implementation-notes"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#implementation-notes"),c(j,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(mo,"href","https://huggingface.co/models?search=blenderbot"),c(mo,"rel","nofollow"),c(Un,"href","blenderbot-small"),c(Ot,"id","usage"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#usage"),c(_t,"class","relative group"),c(At,"id","transformers.BlenderbotConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Hn,"href","/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(vo,"href","https://huggingface.co/facebook/blenderbot-3B"),c(vo,"rel","nofollow"),c(Kn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vn,"href","/docs/transformers/v4.17.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring"),c(It,"id","transformers.BlenderbotTokenizer"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.BlenderbotTokenizer"),c(kt,"class","relative group"),c(Qn,"href","/docs/transformers/v4.17.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Jn,"href","/docs/transformers/v4.17.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(ie,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Yn,"href","/docs/transformers/v4.17.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Zn,"href","/docs/transformers/v4.17.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Gt,"id","transformers.BlenderbotModel"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(tr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(or,"href","/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ge,"class","docstring"),c(ze,"class","docstring"),c(Ut,"id","transformers.BlenderbotForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.BlenderbotForConditionalGeneration"),c(Bt,"class","relative group"),c(nr,"href","/docs/transformers/v4.17.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(rr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.PreTrainedModel"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(ar,"href","/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(xe,"class","docstring"),c(Ht,"id","transformers.BlenderbotForCausalLM"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.BlenderbotForCausalLM"),c(xt,"class","relative group"),c(Ye,"class","docstring"),c(Ft,"class","docstring"),c(Kt,"id","transformers.TFBlenderbotModel"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.TFBlenderbotModel"),c($t,"class","relative group"),c(sr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Yo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Yo,"rel","nofollow"),c(dr,"href","/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(ce,"class","docstring"),c(Jt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Et,"class","relative group"),c(ir,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(an,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(an,"rel","nofollow"),c(lr,"href","/docs/transformers/v4.17.0/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Zt,"id","transformers.FlaxBlenderbotModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.FlaxBlenderbotModel"),c(Ct,"class","relative group"),c(cr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(un,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(un,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(mn,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(_n,"rel","nofollow"),c(gn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(gn,"rel","nofollow"),c(ve,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(to,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(pr,"href","/docs/transformers/v4.17.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($n,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c($n,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qn,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(Cn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Cn,"rel","nofollow"),c(ro,"id","generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#generate-reply->>>-reply_ids-=-model.generate(inputs[\u2018input_ids\u2019],-num_beams=4,-max_length=5,"),c(no,"class","relative group"),c(S,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(L,"class","docstring")},m(o,h){e(document.head,u),p(o,x,h),p(o,f,h),e(f,T),e(T,z),b(B,z,null),e(f,w),e(f,F),e(F,Ce),p(o,ue,h),p(o,q,h),e(q,ke),e(ke,oe),e(q,je),e(q,ne),e(ne,re),e(q,Pe),p(o,Fe,h),p(o,G,h),e(G,N),e(N,ye),b(R,ye,null),e(G,E),e(G,C),e(C,Ne),p(o,Q,h),p(o,J,h),e(J,Oe),e(J,W),e(W,Ae),e(J,Ie),p(o,O,h),p(o,me,h),e(me,ae),p(o,$e,h),p(o,fe,h),e(fe,H),e(H,Le),p(o,qe,h),p(o,M,h),e(M,Se),e(M,U),e(U,De),e(M,m),e(M,$),e($,Te),e(M,ht),p(o,Ve,h),p(o,j,h),e(j,_e),e(_e,Ge),b(we,Ge,null),e(j,K),e(j,V),e(V,ut),p(o,Qe,h),p(o,A,h),e(A,Be),e(Be,mt),e(Be,se),e(se,ft),e(Be,Ad),e(A,Id),e(A,uo),e(uo,Ld),e(uo,mo),e(mo,Sd),e(uo,Dd),e(A,Gd),e(A,We),e(We,Wd),e(We,qr),e(qr,Ud),e(We,Rd),e(We,Er),e(Er,Hd),e(We,Kd),e(We,Un),e(Un,Vd),e(We,Qd),p(o,Es,h),p(o,_t,h),e(_t,Ot),e(Ot,Mr),b(fo,Mr,null),e(_t,Jd),e(_t,Cr),e(Cr,Xd),p(o,Ms,h),p(o,Rn,h),e(Rn,Yd),p(o,Cs,h),b(_o,o,h),p(o,js,h),p(o,gt,h),e(gt,At),e(At,jr),b(go,jr,null),e(gt,Zd),e(gt,Pr),e(Pr,ei),p(o,Ps,h),p(o,de,h),b(bo,de,null),e(de,ti),e(de,bt),e(bt,oi),e(bt,Hn),e(Hn,ni),e(bt,ri),e(bt,vo),e(vo,ai),e(bt,si),e(de,di),e(de,vt),e(vt,ii),e(vt,Kn),e(Kn,li),e(vt,ci),e(vt,Vn),e(Vn,pi),e(vt,hi),e(de,ui),e(de,Nr),e(Nr,mi),e(de,fi),b(ko,de,null),p(o,Ns,h),p(o,kt,h),e(kt,It),e(It,Or),b(yo,Or,null),e(kt,_i),e(kt,Ar),e(Ar,gi),p(o,Os,h),p(o,ie,h),b(To,ie,null),e(ie,bi),e(ie,Ir),e(Ir,vi),e(ie,ki),e(ie,Lt),e(Lt,Lr),e(Lr,yi),e(Lt,Ti),e(Lt,Qn),e(Qn,wi),e(Lt,Bi),e(ie,zi),e(ie,wo),e(wo,xi),e(wo,Jn),e(Jn,Fi),e(wo,$i),e(ie,qi),e(ie,Je),b(Bo,Je,null),e(Je,Ei),e(Je,Sr),e(Sr,Mi),e(Je,Ci),e(Je,Dr),e(Dr,Xn),e(Xn,ji),e(Xn,Gr),e(Gr,Pi),p(o,As,h),p(o,yt,h),e(yt,St),e(St,Wr),b(zo,Wr,null),e(yt,Ni),e(yt,Ur),e(Ur,Oi),p(o,Is,h),p(o,le,h),b(xo,le,null),e(le,Ai),e(le,Fo),e(Fo,Ii),e(Fo,Rr),e(Rr,Li),e(Fo,Si),e(le,Di),e(le,Dt),e(Dt,Hr),e(Hr,Gi),e(Dt,Wi),e(Dt,Yn),e(Yn,Ui),e(Dt,Ri),e(le,Hi),e(le,$o),e($o,Ki),e($o,Zn),e(Zn,Vi),e($o,Qi),e(le,Ji),e(le,Xe),b(qo,Xe,null),e(Xe,Xi),e(Xe,Kr),e(Kr,Yi),e(Xe,Zi),e(Xe,Vr),e(Vr,er),e(er,el),e(er,Qr),e(Qr,tl),p(o,Ls,h),p(o,Tt,h),e(Tt,Gt),e(Gt,Jr),b(Eo,Jr,null),e(Tt,ol),e(Tt,Xr),e(Xr,nl),p(o,Ss,h),p(o,Ue,h),e(Ue,rl),e(Ue,Yr),e(Yr,al),e(Ue,sl),e(Ue,Zr),e(Zr,dl),e(Ue,il),e(Ue,ea),e(ea,ll),p(o,Ds,h),p(o,ze,h),b(Mo,ze,null),e(ze,cl),e(ze,Co),e(Co,pl),e(Co,tr),e(tr,hl),e(Co,ul),e(ze,ml),e(ze,jo),e(jo,fl),e(jo,Po),e(Po,_l),e(jo,gl),e(ze,bl),e(ze,ge),b(No,ge,null),e(ge,vl),e(ge,wt),e(wt,kl),e(wt,or),e(or,yl),e(wt,Tl),e(wt,ta),e(ta,wl),e(wt,Bl),e(ge,zl),b(Wt,ge,null),e(ge,xl),e(ge,oa),e(oa,Fl),e(ge,$l),b(Oo,ge,null),p(o,Gs,h),p(o,Bt,h),e(Bt,Ut),e(Ut,na),b(Ao,na,null),e(Bt,ql),e(Bt,ra),e(ra,El),p(o,Ws,h),p(o,Re,h),e(Re,Ml),e(Re,nr),e(nr,Cl),e(Re,jl),e(Re,aa),e(aa,Pl),e(Re,Nl),e(Re,sa),e(sa,Ol),p(o,Us,h),p(o,xe,h),b(Io,xe,null),e(xe,Al),e(xe,Lo),e(Lo,Il),e(Lo,rr),e(rr,Ll),e(Lo,Sl),e(xe,Dl),e(xe,So),e(So,Gl),e(So,Do),e(Do,Wl),e(So,Ul),e(xe,Rl),e(xe,X),b(Go,X,null),e(X,Hl),e(X,zt),e(zt,Kl),e(zt,ar),e(ar,Vl),e(zt,Ql),e(zt,da),e(da,Jl),e(zt,Xl),e(X,Yl),b(Rt,X,null),e(X,Zl),e(X,ia),e(ia,ec),e(X,tc),e(X,la),e(la,ca),e(ca,pa),e(pa,ha),e(ha,oc),e(X,nc),e(X,ua),e(ua,ma),e(ma,fa),e(fa,Wo),e(Wo,rc),e(Wo,_a),e(_a,ac),e(Wo,sc),p(o,Rs,h),p(o,xt,h),e(xt,Ht),e(Ht,ga),b(Uo,ga,null),e(xt,dc),e(xt,ba),e(ba,ic),p(o,Hs,h),p(o,Ft,h),b(Ro,Ft,null),e(Ft,lc),e(Ft,Ye),b(Ho,Ye,null),e(Ye,cc),e(Ye,va),e(va,pc),e(Ye,hc),b(Ko,Ye,null),p(o,Ks,h),p(o,$t,h),e($t,Kt),e(Kt,ka),b(Vo,ka,null),e($t,uc),e($t,ya),e(ya,mc),p(o,Vs,h),p(o,ce,h),b(Qo,ce,null),e(ce,fc),e(ce,Jo),e(Jo,_c),e(Jo,sr),e(sr,gc),e(Jo,bc),e(ce,vc),e(ce,Xo),e(Xo,kc),e(Xo,Yo),e(Yo,yc),e(Xo,Tc),e(ce,wc),b(Vt,ce,null),e(ce,Bc),e(ce,be),b(Zo,be,null),e(be,zc),e(be,qt),e(qt,xc),e(qt,dr),e(dr,Fc),e(qt,$c),e(qt,Ta),e(Ta,qc),e(qt,Ec),e(be,Mc),b(Qt,be,null),e(be,Cc),e(be,wa),e(wa,jc),e(be,Pc),b(en,be,null),p(o,Qs,h),p(o,Et,h),e(Et,Jt),e(Jt,Ba),b(tn,Ba,null),e(Et,Nc),e(Et,za),e(za,Oc),p(o,Js,h),p(o,pe,h),b(on,pe,null),e(pe,Ac),e(pe,nn),e(nn,Ic),e(nn,ir),e(ir,Lc),e(nn,Sc),e(pe,Dc),e(pe,rn),e(rn,Gc),e(rn,an),e(an,Wc),e(rn,Uc),e(pe,Rc),b(Xt,pe,null),e(pe,Hc),e(pe,Y),b(sn,Y,null),e(Y,Kc),e(Y,Mt),e(Mt,Vc),e(Mt,lr),e(lr,Qc),e(Mt,Jc),e(Mt,xa),e(xa,Xc),e(Mt,Yc),e(Y,Zc),b(Yt,Y,null),e(Y,ep),e(Y,Fa),e(Fa,tp),e(Y,op),e(Y,$a),e($a,qa),e(qa,Ea),e(Ea,Ma),e(Ma,np),e(Y,rp),e(Y,Ca),e(Ca,ja),e(ja,Pa),e(Pa,dn),e(dn,ap),e(dn,Na),e(Na,sp),e(dn,dp),p(o,Xs,h),p(o,Ct,h),e(Ct,Zt),e(Zt,Oa),b(ln,Oa,null),e(Ct,ip),e(Ct,Aa),e(Aa,lp),p(o,Ys,h),p(o,I,h),b(cn,I,null),e(I,cp),e(I,pn),e(pn,pp),e(pn,cr),e(cr,hp),e(pn,up),e(I,mp),e(I,hn),e(hn,fp),e(hn,un),e(un,_p),e(hn,gp),e(I,bp),e(I,Ia),e(Ia,vp),e(I,kp),e(I,He),e(He,La),e(La,mn),e(mn,yp),e(He,Tp),e(He,Sa),e(Sa,fn),e(fn,wp),e(He,Bp),e(He,Da),e(Da,_n),e(_n,zp),e(He,xp),e(He,Ga),e(Ga,gn),e(gn,Fp),e(I,$p),e(I,ve),b(bn,ve,null),e(ve,qp),e(ve,jt),e(jt,Ep),e(jt,Wa),e(Wa,Mp),e(jt,Cp),e(jt,Ua),e(Ua,jp),e(jt,Pp),e(ve,Np),b(eo,ve,null),e(ve,Op),e(ve,Ra),e(Ra,Ap),e(ve,Ip),b(vn,ve,null),e(I,Lp),e(I,Ze),b(kn,Ze,null),e(Ze,Sp),e(Ze,Ha),e(Ha,Dp),e(Ze,Gp),b(yn,Ze,null),e(I,Wp),e(I,et),b(Tn,et,null),e(et,Up),e(et,Ka),e(Ka,Rp),e(et,Hp),b(wn,et,null),p(o,Zs,h),p(o,Pt,h),e(Pt,to),e(to,Va),b(Bn,Va,null),e(Pt,Kp),e(Pt,Qa),e(Qa,Vp),p(o,ed,h),p(o,L,h),b(zn,L,null),e(L,Qp),e(L,xn),e(xn,Jp),e(xn,pr),e(pr,Xp),e(xn,Yp),e(L,Zp),e(L,Fn),e(Fn,eh),e(Fn,$n),e($n,th),e(Fn,oh),e(L,nh),e(L,Ja),e(Ja,rh),e(L,ah),e(L,Ke),e(Ke,Xa),e(Xa,qn),e(qn,sh),e(Ke,dh),e(Ke,Ya),e(Ya,En),e(En,ih),e(Ke,lh),e(Ke,Za),e(Za,Mn),e(Mn,ch),e(Ke,ph),e(Ke,es),e(es,Cn),e(Cn,hh),e(L,uh),e(L,S),b(jn,S,null),e(S,mh),e(S,Nt),e(Nt,fh),e(Nt,ts),e(ts,_h),e(Nt,gh),e(Nt,os),e(os,bh),e(Nt,vh),e(S,kh),b(oo,S,null),e(S,yh),e(S,ns),e(ns,Th),e(S,wh),e(S,rs),e(rs,as),e(as,ss),e(ss,ds),e(ds,Bh),e(S,zh),e(S,is),e(is,ls),e(ls,cs),e(cs,ps),e(ps,xh),e(S,Fh),e(S,hs),e(hs,us),e(us,ms),e(ms,fs),e(fs,$h),e(S,qh),e(S,_s),e(_s,gs),e(gs,Pn),e(Pn,no),e(no,ro),e(ro,bs),b(Nn,bs,null),e(no,Eh),e(no,vs),e(vs,Mh),e(Pn,Ch),e(Pn,ks),e(ks,jh),e(L,Ph),e(L,tt),b(On,tt,null),e(tt,Nh),e(tt,ys),e(ys,Oh),e(tt,Ah),b(An,tt,null),e(L,Ih),e(L,ot),b(In,ot,null),e(ot,Lh),e(ot,Ts),e(Ts,Sh),e(ot,Dh),b(Ln,ot,null),td=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Wt.$set(Sn);const ws={};h&2&&(ws.$$scope={dirty:h,ctx:o}),Rt.$set(ws);const Bs={};h&2&&(Bs.$$scope={dirty:h,ctx:o}),Vt.$set(Bs);const zs={};h&2&&(zs.$$scope={dirty:h,ctx:o}),Qt.$set(zs);const ao={};h&2&&(ao.$$scope={dirty:h,ctx:o}),Xt.$set(ao);const xs={};h&2&&(xs.$$scope={dirty:h,ctx:o}),Yt.$set(xs);const Fs={};h&2&&(Fs.$$scope={dirty:h,ctx:o}),eo.$set(Fs);const Dn={};h&2&&(Dn.$$scope={dirty:h,ctx:o}),oo.$set(Dn)},i(o){td||(v(B.$$.fragment,o),v(R.$$.fragment,o),v(we.$$.fragment,o),v(fo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(bo.$$.fragment,o),v(ko.$$.fragment,o),v(yo.$$.fragment,o),v(To.$$.fragment,o),v(Bo.$$.fragment,o),v(zo.$$.fragment,o),v(xo.$$.fragment,o),v(qo.$$.fragment,o),v(Eo.$$.fragment,o),v(Mo.$$.fragment,o),v(No.$$.fragment,o),v(Wt.$$.fragment,o),v(Oo.$$.fragment,o),v(Ao.$$.fragment,o),v(Io.$$.fragment,o),v(Go.$$.fragment,o),v(Rt.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Qo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(Qt.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(Xt.$$.fragment,o),v(sn.$$.fragment,o),v(Yt.$$.fragment,o),v(ln.$$.fragment,o),v(cn.$$.fragment,o),v(bn.$$.fragment,o),v(eo.$$.fragment,o),v(vn.$$.fragment,o),v(kn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(Bn.$$.fragment,o),v(zn.$$.fragment,o),v(jn.$$.fragment,o),v(oo.$$.fragment,o),v(Nn.$$.fragment,o),v(On.$$.fragment,o),v(An.$$.fragment,o),v(In.$$.fragment,o),v(Ln.$$.fragment,o),td=!0)},o(o){k(B.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(bo.$$.fragment,o),k(ko.$$.fragment,o),k(yo.$$.fragment,o),k(To.$$.fragment,o),k(Bo.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(qo.$$.fragment,o),k(Eo.$$.fragment,o),k(Mo.$$.fragment,o),k(No.$$.fragment,o),k(Wt.$$.fragment,o),k(Oo.$$.fragment,o),k(Ao.$$.fragment,o),k(Io.$$.fragment,o),k(Go.$$.fragment,o),k(Rt.$$.fragment,o),k(Uo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Qo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(Qt.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(Xt.$$.fragment,o),k(sn.$$.fragment,o),k(Yt.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(bn.$$.fragment,o),k(eo.$$.fragment,o),k(vn.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(Bn.$$.fragment,o),k(zn.$$.fragment,o),k(jn.$$.fragment,o),k(oo.$$.fragment,o),k(Nn.$$.fragment,o),k(On.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(Ln.$$.fragment,o),td=!1},d(o){t(u),o&&t(x),o&&t(f),y(B),o&&t(ue),o&&t(q),o&&t(Fe),o&&t(G),y(R),o&&t(Q),o&&t(J),o&&t(O),o&&t(me),o&&t($e),o&&t(fe),o&&t(qe),o&&t(M),o&&t(Ve),o&&t(j),y(we),o&&t(Qe),o&&t(A),o&&t(Es),o&&t(_t),y(fo),o&&t(Ms),o&&t(Rn),o&&t(Cs),y(_o,o),o&&t(js),o&&t(gt),y(go),o&&t(Ps),o&&t(de),y(bo),y(ko),o&&t(Ns),o&&t(kt),y(yo),o&&t(Os),o&&t(ie),y(To),y(Bo),o&&t(As),o&&t(yt),y(zo),o&&t(Is),o&&t(le),y(xo),y(qo),o&&t(Ls),o&&t(Tt),y(Eo),o&&t(Ss),o&&t(Ue),o&&t(Ds),o&&t(ze),y(Mo),y(No),y(Wt),y(Oo),o&&t(Gs),o&&t(Bt),y(Ao),o&&t(Ws),o&&t(Re),o&&t(Us),o&&t(xe),y(Io),y(Go),y(Rt),o&&t(Rs),o&&t(xt),y(Uo),o&&t(Hs),o&&t(Ft),y(Ro),y(Ho),y(Ko),o&&t(Ks),o&&t($t),y(Vo),o&&t(Vs),o&&t(ce),y(Qo),y(Vt),y(Zo),y(Qt),y(en),o&&t(Qs),o&&t(Et),y(tn),o&&t(Js),o&&t(pe),y(on),y(Xt),y(sn),y(Yt),o&&t(Xs),o&&t(Ct),y(ln),o&&t(Ys),o&&t(I),y(cn),y(bn),y(eo),y(vn),y(kn),y(yn),y(Tn),y(wn),o&&t(Zs),o&&t(Pt),y(Bn),o&&t(ed),o&&t(L),y(zn),y(jn),y(oo),y(Nn),y(On),y(An),y(In),y(Ln)}}}const a_={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function s_(D,u,x){let{fw:f}=u;return D.$$set=T=>{"fw"in T&&x(0,f=T.fw)},[f]}class u_ extends Hf{constructor(u){super();Kf(this,u,s_,r_,Vf,{fw:0})}}export{u_ as default,a_ as metadata};
