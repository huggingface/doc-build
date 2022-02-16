import{S as Um,i as Rm,s as Hm,e as n,k as i,w as _,t as s,L as Km,c as r,d as t,m as l,a,x as g,h as d,b as c,J as e,g as p,y as b,q as v,o as k,B as y}from"../../../chunks/vendor-b1433968.js";import{T as po}from"../../../chunks/Tip-c3840994.js";import{D as A}from"../../../chunks/Docstring-ff504c58.js";import{C as pt}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as he}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function Vm(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function Qm(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function Jm(D){let u,z,m,T,B,x,w,F,Ce,ue,E,ke,oe,Pe,ne,re,je,Fe,G,j,ye,R,M,C,Ne,Q,J,Oe,W,Ae,Ie,N,fe,ae,$e,me,H,Se,Ee,q,Le,U,De;return{c(){u=n("p"),z=s("TF 2.0 models accepts two formats as inputs:"),m=i(),T=n("ul"),B=n("li"),x=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),E=n("p"),ke=s("This second option is useful when using "),oe=n("code"),Pe=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),re=n("code"),je=s("model(inputs)"),Fe=s("."),G=i(),j=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),R=i(),M=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),N=n("li"),fe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),me=s(" or "),H=n("code"),Se=s("model([input_ids, attention_mask, token_type_ids])"),Ee=i(),q=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=r(f,"P",{});var $=a(u);z=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=l(f),T=r(f,"UL",{});var Te=a(T);B=r(Te,"LI",{});var ht=a(B);x=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(f),E=r(f,"P",{});var P=a(E);ke=d(P,"This second option is useful when using "),oe=r(P,"CODE",{});var _e=a(oe);Pe=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),re=r(P,"CODE",{});var Ge=a(re);je=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(P,"."),P.forEach(t),G=l(f),j=r(f,"P",{});var we=a(j);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),we.forEach(t),R=l(f),M=r(f,"UL",{});var K=a(M);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=r(K,"LI",{});var O=a(N);fe=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(O,"CODE",{});var xe=a(ae);$e=d(xe,"model([input_ids, attention_mask])"),xe.forEach(t),me=d(O," or "),H=r(O,"CODE",{});var ft=a(H);Se=d(ft,"model([input_ids, attention_mask, token_type_ids])"),ft.forEach(t),O.forEach(t),Ee=l(K),q=r(K,"LI",{});var se=a(q);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var mt=a(U);De=d(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),se.forEach(t),K.forEach(t)},m(f,$){p(f,u,$),e(u,z),p(f,m,$),p(f,T,$),e(T,B),e(B,x),e(T,w),e(T,F),e(F,Ce),p(f,ue,$),p(f,E,$),e(E,ke),e(E,oe),e(oe,Pe),e(E,ne),e(E,re),e(re,je),e(E,Fe),p(f,G,$),p(f,j,$),e(j,ye),p(f,R,$),p(f,M,$),e(M,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(M,Ie),e(M,N),e(N,fe),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Se),e(M,Ee),e(M,q),e(q,Le),e(q,U),e(U,De)},d(f){f&&t(u),f&&t(m),f&&t(T),f&&t(ue),f&&t(E),f&&t(G),f&&t(j),f&&t(R),f&&t(M)}}}function Xm(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function Ym(D){let u,z,m,T,B,x,w,F,Ce,ue,E,ke,oe,Pe,ne,re,je,Fe,G,j,ye,R,M,C,Ne,Q,J,Oe,W,Ae,Ie,N,fe,ae,$e,me,H,Se,Ee,q,Le,U,De;return{c(){u=n("p"),z=s("TF 2.0 models accepts two formats as inputs:"),m=i(),T=n("ul"),B=n("li"),x=s("having all inputs as keyword arguments (like PyTorch models), or"),w=i(),F=n("li"),Ce=s("having all inputs as a list, tuple or dict in the first positional arguments."),ue=i(),E=n("p"),ke=s("This second option is useful when using "),oe=n("code"),Pe=s("tf.keras.Model.fit"),ne=s(` method which currently requires having all
the tensors in the first argument of the model call function: `),re=n("code"),je=s("model(inputs)"),Fe=s("."),G=i(),j=n("p"),ye=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),R=i(),M=n("ul"),C=n("li"),Ne=s("a single Tensor with "),Q=n("code"),J=s("input_ids"),Oe=s(" only and nothing else: "),W=n("code"),Ae=s("model(input_ids)"),Ie=i(),N=n("li"),fe=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=n("code"),$e=s("model([input_ids, attention_mask])"),me=s(" or "),H=n("code"),Se=s("model([input_ids, attention_mask, token_type_ids])"),Ee=i(),q=n("li"),Le=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n("code"),De=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=r(f,"P",{});var $=a(u);z=d($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=l(f),T=r(f,"UL",{});var Te=a(T);B=r(Te,"LI",{});var ht=a(B);x=d(ht,"having all inputs as keyword arguments (like PyTorch models), or"),ht.forEach(t),w=l(Te),F=r(Te,"LI",{});var Ve=a(F);Ce=d(Ve,"having all inputs as a list, tuple or dict in the first positional arguments."),Ve.forEach(t),Te.forEach(t),ue=l(f),E=r(f,"P",{});var P=a(E);ke=d(P,"This second option is useful when using "),oe=r(P,"CODE",{});var _e=a(oe);Pe=d(_e,"tf.keras.Model.fit"),_e.forEach(t),ne=d(P,` method which currently requires having all
the tensors in the first argument of the model call function: `),re=r(P,"CODE",{});var Ge=a(re);je=d(Ge,"model(inputs)"),Ge.forEach(t),Fe=d(P,"."),P.forEach(t),G=l(f),j=r(f,"P",{});var we=a(j);ye=d(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),we.forEach(t),R=l(f),M=r(f,"UL",{});var K=a(M);C=r(K,"LI",{});var V=a(C);Ne=d(V,"a single Tensor with "),Q=r(V,"CODE",{});var ut=a(Q);J=d(ut,"input_ids"),ut.forEach(t),Oe=d(V," only and nothing else: "),W=r(V,"CODE",{});var Qe=a(W);Ae=d(Qe,"model(input_ids)"),Qe.forEach(t),V.forEach(t),Ie=l(K),N=r(K,"LI",{});var O=a(N);fe=d(O,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ae=r(O,"CODE",{});var xe=a(ae);$e=d(xe,"model([input_ids, attention_mask])"),xe.forEach(t),me=d(O," or "),H=r(O,"CODE",{});var ft=a(H);Se=d(ft,"model([input_ids, attention_mask, token_type_ids])"),ft.forEach(t),O.forEach(t),Ee=l(K),q=r(K,"LI",{});var se=a(q);Le=d(se,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(se,"CODE",{});var mt=a(U);De=d(mt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),mt.forEach(t),se.forEach(t),K.forEach(t)},m(f,$){p(f,u,$),e(u,z),p(f,m,$),p(f,T,$),e(T,B),e(B,x),e(T,w),e(T,F),e(F,Ce),p(f,ue,$),p(f,E,$),e(E,ke),e(E,oe),e(oe,Pe),e(E,ne),e(E,re),e(re,je),e(E,Fe),p(f,G,$),p(f,j,$),e(j,ye),p(f,R,$),p(f,M,$),e(M,C),e(C,Ne),e(C,Q),e(Q,J),e(C,Oe),e(C,W),e(W,Ae),e(M,Ie),e(M,N),e(N,fe),e(N,ae),e(ae,$e),e(N,me),e(N,H),e(H,Se),e(M,Ee),e(M,q),e(q,Le),e(q,U),e(U,De)},d(f){f&&t(u),f&&t(m),f&&t(T),f&&t(ue),f&&t(E),f&&t(G),f&&t(j),f&&t(R),f&&t(M)}}}function Zm(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function e_(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function t_(D){let u,z,m,T,B;return{c(){u=n("p"),z=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),T=s("Module"),B=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(x){u=r(x,"P",{});var w=a(u);z=d(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(w,"CODE",{});var F=a(m);T=d(F,"Module"),F.forEach(t),B=d(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(x,w){p(x,u,w),e(u,z),e(u,m),e(m,T),e(u,B)},d(x){x&&t(u)}}}function o_(D){let u,z,m,T,B,x,w,F,Ce,ue,E,ke,oe,Pe,ne,re,je,Fe,G,j,ye,R,M,C,Ne,Q,J,Oe,W,Ae,Ie,N,fe,ae,$e,me,H,Se,Ee,q,Le,U,De,f,$,Te,ht,Ve,P,_e,Ge,we,K,V,ut,Qe,O,xe,ft,se,mt,Nd,Od,ho,Ad,uo,Id,Sd,Ld,We,Dd,$r,Gd,Wd,Er,Ud,Rd,Wn,Hd,Kd,Es,_t,Nt,Mr,fo,Vd,qr,Qd,Ms,Un,Jd,qs,mo,Cs,gt,Ot,Cr,_o,Xd,Pr,Yd,Ps,de,go,Zd,bt,ei,Rn,ti,oi,bo,ni,ri,ai,vt,si,Hn,di,ii,Kn,li,ci,pi,jr,hi,ui,vo,js,kt,At,Nr,ko,fi,Or,mi,Ns,ie,yo,_i,Ar,gi,bi,It,Ir,vi,ki,Vn,yi,Ti,wi,To,xi,Qn,Bi,zi,Fi,Je,wo,$i,Sr,Ei,Mi,Lr,Jn,qi,Dr,Ci,Os,yt,St,Gr,xo,Pi,Wr,ji,As,le,Bo,Ni,zo,Oi,Ur,Ai,Ii,Si,Lt,Rr,Li,Di,Xn,Gi,Wi,Ui,Fo,Ri,Yn,Hi,Ki,Vi,Xe,$o,Qi,Hr,Ji,Xi,Kr,Zn,Yi,Vr,Zi,Is,Tt,Dt,Qr,Eo,el,Jr,tl,Ss,Ue,ol,Xr,nl,rl,Yr,al,sl,Zr,dl,Ls,Be,Mo,il,qo,ll,er,cl,pl,hl,Co,ul,Po,fl,ml,_l,ge,jo,gl,wt,bl,tr,vl,kl,ea,yl,Tl,wl,Gt,xl,ta,Bl,zl,No,Ds,xt,Wt,oa,Oo,Fl,na,$l,Gs,Re,El,or,Ml,ql,ra,Cl,Pl,aa,jl,Ws,ze,Ao,Nl,Io,Ol,nr,Al,Il,Sl,So,Ll,Lo,Dl,Gl,Wl,X,Do,Ul,Bt,Rl,rr,Hl,Kl,sa,Vl,Ql,Jl,Ut,Xl,da,Yl,Zl,ia,la,ca,pa,ec,tc,ha,ua,fa,Go,oc,ma,nc,rc,Us,zt,Rt,_a,Wo,ac,ga,sc,Rs,Uo,Ye,Ro,dc,ba,ic,lc,Ho,Hs,Ft,Ht,va,Ko,cc,ka,pc,Ks,ce,Vo,hc,Qo,uc,ar,fc,mc,_c,Jo,gc,Xo,bc,vc,kc,Kt,yc,be,Yo,Tc,$t,wc,sr,xc,Bc,ya,zc,Fc,$c,Vt,Ec,Ta,Mc,qc,Zo,Vs,Et,Qt,wa,en,Cc,xa,Pc,Qs,pe,tn,jc,on,Nc,dr,Oc,Ac,Ic,nn,Sc,rn,Lc,Dc,Gc,Jt,Wc,Y,an,Uc,Mt,Rc,ir,Hc,Kc,Ba,Vc,Qc,Jc,Xt,Xc,za,Yc,Zc,Fa,$a,Ea,Ma,ep,tp,qa,Ca,Pa,sn,op,ja,np,rp,Js,qt,Yt,Na,dn,ap,Oa,sp,Xs,I,ln,dp,cn,ip,lr,lp,cp,pp,pn,hp,hn,up,fp,mp,Aa,_p,gp,He,Ia,un,bp,vp,Sa,fn,kp,yp,La,mn,Tp,wp,Da,_n,xp,Bp,ve,gn,zp,Ct,Fp,Ga,$p,Ep,Wa,Mp,qp,Cp,Zt,Pp,Ua,jp,Np,bn,Op,Ze,vn,Ap,Ra,Ip,Sp,kn,Lp,et,yn,Dp,Ha,Gp,Wp,Tn,Ys,Pt,eo,Ka,wn,Up,Va,Rp,Zs,S,xn,Hp,Bn,Kp,cr,Vp,Qp,Jp,zn,Xp,Fn,Yp,Zp,eh,Qa,th,oh,Ke,Ja,$n,nh,rh,Xa,En,ah,sh,Ya,Mn,dh,ih,Za,qn,lh,ch,L,Cn,ph,jt,hh,es,uh,fh,ts,mh,_h,gh,to,bh,os,vh,kh,ns,rs,as,ss,yh,Th,ds,is,ls,cs,wh,xh,ps,hs,us,fs,Bh,zh,ms,_s,Pn,oo,no,gs,jn,Fh,bs,$h,Eh,vs,Mh,qh,tt,Nn,Ch,ks,Ph,jh,On,Nh,ot,An,Oh,ys,Ah,Ih,In,ed;return x=new he({}),R=new he({}),we=new he({}),fo=new he({}),mo=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
mname = 'facebook/blenderbot-400M-distill'
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([UTTERANCE], return_tensors='pt')
reply_ids = model.generate(**inputs)
print(tokenizer.batch_decode(reply_ids)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(reply_ids))
[<span class="hljs-string">&quot;&lt;s&gt; That&#x27;s unfortunate. Are they trying to lose weight or are they just trying to be healthier?&lt;/s&gt;&quot;</span>]`}}),_o=new he({}),go=new A({props:{name:"class transformers.BlenderbotConfig",anchor:"transformers.BlenderbotConfig",parameters:[{name:"vocab_size",val:" = 8008"},{name:"max_position_embeddings",val:" = 128"},{name:"encoder_layers",val:" = 2"},{name:"encoder_ffn_dim",val:" = 10240"},{name:"encoder_attention_heads",val:" = 32"},{name:"decoder_layers",val:" = 24"},{name:"decoder_ffn_dim",val:" = 10240"},{name:"decoder_attention_heads",val:" = 32"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 2560"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"encoder_no_repeat_ngram_size",val:" = 3"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/configuration_blenderbot.py#L29",parametersDescription:[{anchor:"transformers.BlenderbotConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Blenderbot model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> or
<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.TFBlenderbotModel">TFBlenderbotModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BlenderbotConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.BlenderbotConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),ko=new he({}),yo=new A({props:{name:"class transformers.BlenderbotTokenizer",anchor:"transformers.BlenderbotTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/tokenization_blenderbot.py#L46"}}),wo=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/tokenization_blenderbot.py#L61",parametersDescription:[{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new he({}),Bo=new A({props:{name:"class transformers.BlenderbotTokenizerFast",anchor:"transformers.BlenderbotTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L47"}}),$o=new A({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/tokenization_blenderbot_fast.py#L63",parametersDescription:[{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BlenderbotTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Will be ignored`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new he({}),Mo=new A({props:{name:"class transformers.BlenderbotModel",anchor:"transformers.BlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1070",parametersDescription:[{anchor:"transformers.BlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new A({props:{name:"forward",anchor:"transformers.BlenderbotModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1108",parametersDescription:[{anchor:"transformers.BlenderbotModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new po({props:{$$slots:{default:[Vm]},$$scope:{ctx:D}}}),No=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotModel

model = BlenderbotModel.from_pretrained("facebook/blenderbot-400M-distill")
tokenizer = BlenderbotTokenizer.from_pretrained("facebook/blenderbot-400M-distill")

input_ids = tokenizer("Studies have been shown that owning a dog is good for you", return_tensors="pt").input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot-400M-distill&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Oo=new he({}),Ao=new A({props:{name:"class transformers.BlenderbotForConditionalGeneration",anchor:"transformers.BlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1204",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new A({props:{name:"forward",anchor:"transformers.BlenderbotForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1261",parametersDescription:[{anchor:"transformers.BlenderbotForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Blenderbot uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ut=new po({props:{$$slots:{default:[Qm]},$$scope:{ctx:D}}}),Wo=new he({}),Ro=new A({props:{name:"forward",anchor:"transformers.BlenderbotForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_blenderbot.py#L1424",parametersDescription:[{anchor:"transformers.BlenderbotForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a>
for details.</p>
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
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2
tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional
tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two
additional tensors are only required when the model is used as a decoder in a Sequence to Sequence
model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential
decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the
cached key, value states of the self-attention and the cross-attention layers if model is used in
encoder-decoder setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new pt({props:{code:`from transformers import BlenderbotTokenizer, BlenderbotForCausalLM

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/bart-large')
model = BlenderbotForCausalLM.from_pretrained('facebook/bart-large', add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, BlenderbotForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotForCausalLM.from_pretrained(<span class="hljs-string">&#x27;facebook/bart-large&#x27;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new he({}),Vo=new A({props:{name:"class transformers.TFBlenderbotModel",anchor:"transformers.TFBlenderbotModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1180",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Kt=new po({props:{$$slots:{default:[Jm]},$$scope:{ctx:D}}}),Yo=new A({props:{name:"call",anchor:"transformers.TFBlenderbotModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1205",parametersDescription:[{anchor:"transformers.TFBlenderbotModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vt=new po({props:{$$slots:{default:[Xm]},$$scope:{ctx:D}}}),Zo=new pt({props:{code:`from transformers import BlenderbotTokenizer, TFBlenderbotModel
import tensorflow as tf

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')
model = TFBlenderbotModel.from_pretrained('facebook/blenderbot-400M-distill')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, TFBlenderbotModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),en=new he({}),tn=new A({props:{name:"class transformers.TFBlenderbotForConditionalGeneration",anchor:"transformers.TFBlenderbotForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1300",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Jt=new po({props:{$$slots:{default:[Ym]},$$scope:{ctx:D}}}),an=new A({props:{name:"call",anchor:"transformers.TFBlenderbotForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_tf_blenderbot.py#L1346",parametersDescription:[{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xt=new po({props:{$$slots:{default:[Zm]},$$scope:{ctx:D}}}),dn=new he({}),ln=new A({props:{name:"class transformers.FlaxBlenderbotModel",anchor:"transformers.FlaxBlenderbotModel",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1206",parametersDescription:[{anchor:"transformers.FlaxBlenderbotModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),gn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1141",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new po({props:{$$slots:{default:[e_]},$$scope:{ctx:D}}}),bn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotModel

tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')
model = FlaxBlenderbotModel.from_pretrained('facebook/blenderbot-400M-distill')

inputs = tokenizer("Hello, my dog is cute", return_tensors='jax')
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotModel.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),yn=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1026",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),wn=new he({}),xn=new A({props:{name:"class transformers.FlaxBlenderbotForConditionalGeneration",anchor:"transformers.FlaxBlenderbotForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1293",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig">BlenderbotConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),Cn=new A({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1141",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotConfig"
>BlenderbotConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new po({props:{$$slots:{default:[t_]},$$scope:{ctx:D}}}),jn=new he({}),Nn=new A({props:{name:"encode",anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L963",parametersDescription:[{anchor:"transformers.FlaxBlenderbotPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),An=new A({props:{name:"decode",anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/blenderbot/modeling_flax_blenderbot.py#L1297",parametersDescription:[{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotTokenizer">BlenderbotTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to
the right for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot.configuration_blenderbot.BlenderbotConfig'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached
key, value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new pt({props:{code:`from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

model = FlaxBlenderbotForConditionalGeneration.from_pretrained('facebook/blenderbot-400M-distill')
tokenizer = BlenderbotTokenizer.from_pretrained('facebook/blenderbot-400M-distill')

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors='jax')
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BlenderbotTokenizer.from_pretrained(<span class="hljs-string">&#x27;facebook/blenderbot-400M-distill&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&#x27;jax&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=n("meta"),z=i(),m=n("h1"),T=n("a"),B=n("span"),_(x.$$.fragment),w=i(),F=n("span"),Ce=s("Blenderbot"),ue=i(),E=n("p"),ke=n("strong"),oe=s("DISCLAIMER:"),Pe=s(" If you see something strange, file a "),ne=n("a"),re=s("Github Issue"),je=s(" ."),Fe=i(),G=n("h2"),j=n("a"),ye=n("span"),_(R.$$.fragment),M=i(),C=n("span"),Ne=s("Overview"),Q=i(),J=n("p"),Oe=s("The Blender chatbot model was proposed in "),W=n("a"),Ae=s("Recipes for building an open-domain chatbot"),Ie=s(` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),N=i(),fe=n("p"),ae=s("The abstract of the paper is the following:"),$e=i(),me=n("p"),H=n("em"),Se=s(`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Ee=i(),q=n("p"),Le=s("This model was contributed by "),U=n("a"),De=s("sshleifer"),f=s(". The authors\u2019 code can be found "),$=n("a"),Te=s("here"),ht=s(" ."),Ve=i(),P=n("h2"),_e=n("a"),Ge=n("span"),_(we.$$.fragment),K=i(),V=n("span"),ut=s("Implementation Notes"),Qe=i(),O=n("ul"),xe=n("li"),ft=s("Blenderbot uses a standard "),se=n("a"),mt=s("seq2seq model transformer"),Nd=s(" based architecture."),Od=i(),ho=n("li"),Ad=s("Available checkpoints can be found in the "),uo=n("a"),Id=s("model hub"),Sd=s("."),Ld=i(),We=n("li"),Dd=s("This is the "),$r=n("em"),Gd=s("default"),Wd=s(` Blenderbot model class. However, some smaller checkpoints, such as
`),Er=n("code"),Ud=s("facebook/blenderbot_small_90M"),Rd=s(`, have a different architecture and consequently should be used with
`),Wn=n("a"),Hd=s("BlenderbotSmall"),Kd=s("."),Es=i(),_t=n("h2"),Nt=n("a"),Mr=n("span"),_(fo.$$.fragment),Vd=i(),qr=n("span"),Qd=s("Usage"),Ms=i(),Un=n("p"),Jd=s("Here is an example of model usage:"),qs=i(),_(mo.$$.fragment),Cs=i(),gt=n("h2"),Ot=n("a"),Cr=n("span"),_(_o.$$.fragment),Xd=i(),Pr=n("span"),Yd=s("BlenderbotConfig"),Ps=i(),de=n("div"),_(go.$$.fragment),Zd=i(),bt=n("p"),ei=s("This is the configuration class to store the configuration of a "),Rn=n("a"),ti=s("BlenderbotModel"),oi=s(`. It is used
to instantiate an Blenderbot model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=n("a"),ni=s("facebook/blenderbot-3B"),ri=s(" architecture."),ai=i(),vt=n("p"),si=s("Configuration objects inherit from "),Hn=n("a"),di=s("PretrainedConfig"),ii=s(` and can be used to control the model
outputs. Read the documentation from `),Kn=n("a"),li=s("PretrainedConfig"),ci=s(" for more information."),pi=i(),jr=n("p"),hi=s("Example:"),ui=i(),_(vo.$$.fragment),js=i(),kt=n("h2"),At=n("a"),Nr=n("span"),_(ko.$$.fragment),fi=i(),Or=n("span"),mi=s("BlenderbotTokenizer"),Ns=i(),ie=n("div"),_(yo.$$.fragment),_i=i(),Ar=n("p"),gi=s("Construct a Blenderbot tokenizer."),bi=i(),It=n("p"),Ir=n("code"),vi=s("Blenderbot"),ki=s(" is nearly identical to "),Vn=n("a"),yi=s("RobertaTokenizer"),Ti=s(` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),wi=i(),To=n("p"),xi=s("Refer to superclass "),Qn=n("a"),Bi=s("RobertaTokenizer"),zi=s(` for usage examples and documentation concerning
parameters.`),Fi=i(),Je=n("div"),_(wo.$$.fragment),$i=i(),Sr=n("p"),Ei=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Mi=i(),Lr=n("ul"),Jn=n("li"),qi=s("single sequence: "),Dr=n("code"),Ci=s("X </s>"),Os=i(),yt=n("h2"),St=n("a"),Gr=n("span"),_(xo.$$.fragment),Pi=i(),Wr=n("span"),ji=s("BlenderbotTokenizerFast"),As=i(),le=n("div"),_(Bo.$$.fragment),Ni=i(),zo=n("p"),Oi=s("Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ur=n("em"),Ai=s("tokenizers"),Ii=s(" library)."),Si=i(),Lt=n("p"),Rr=n("code"),Li=s("BlenderbotFast"),Di=s(" is nearly identical to "),Xn=n("a"),Gi=s("RobertaTokenizerFast"),Wi=s(` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),Ui=i(),Fo=n("p"),Ri=s("Refer to superclass "),Yn=n("a"),Hi=s("RobertaTokenizerFast"),Ki=s(` for usage examples and documentation concerning
parameters.`),Vi=i(),Xe=n("div"),_($o.$$.fragment),Qi=i(),Hr=n("p"),Ji=s(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Xi=i(),Kr=n("ul"),Zn=n("li"),Yi=s("single sequence: "),Vr=n("code"),Zi=s("X </s>"),Is=i(),Tt=n("h2"),Dt=n("a"),Qr=n("span"),_(Eo.$$.fragment),el=i(),Jr=n("span"),tl=s("BlenderbotModel"),Ss=i(),Ue=n("p"),ol=s("See "),Xr=n("code"),nl=s("transformers.BartModel"),rl=s(" for arguments to "),Yr=n("em"),al=s("forward"),sl=s(" and "),Zr=n("em"),dl=s("generate"),Ls=i(),Be=n("div"),_(Mo.$$.fragment),il=i(),qo=n("p"),ll=s(`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),er=n("a"),cl=s("PreTrainedModel"),pl=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),hl=i(),Co=n("p"),ul=s("This model is also a PyTorch "),Po=n("a"),fl=s("torch.nn.Module"),ml=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),_l=i(),ge=n("div"),_(jo.$$.fragment),gl=i(),wt=n("p"),bl=s("The "),tr=n("a"),vl=s("BlenderbotModel"),kl=s(" forward method, overrides the "),ea=n("code"),yl=s("__call__"),Tl=s(" special method."),wl=i(),_(Gt.$$.fragment),xl=i(),ta=n("p"),Bl=s("Example:"),zl=i(),_(No.$$.fragment),Ds=i(),xt=n("h2"),Wt=n("a"),oa=n("span"),_(Oo.$$.fragment),Fl=i(),na=n("span"),$l=s("BlenderbotForConditionalGeneration"),Gs=i(),Re=n("p"),El=s("See "),or=n("a"),Ml=s("BartForConditionalGeneration"),ql=s(" for arguments to "),ra=n("em"),Cl=s("forward"),Pl=s(" and "),aa=n("em"),jl=s("generate"),Ws=i(),ze=n("div"),_(Ao.$$.fragment),Nl=i(),Io=n("p"),Ol=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=n("a"),Al=s("PreTrainedModel"),Il=s(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Sl=i(),So=n("p"),Ll=s("This model is also a PyTorch "),Lo=n("a"),Dl=s("torch.nn.Module"),Gl=s(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Wl=i(),X=n("div"),_(Do.$$.fragment),Ul=i(),Bt=n("p"),Rl=s("The "),rr=n("a"),Hl=s("BlenderbotForConditionalGeneration"),Kl=s(" forward method, overrides the "),sa=n("code"),Vl=s("__call__"),Ql=s(" special method."),Jl=i(),_(Ut.$$.fragment),Xl=i(),da=n("p"),Yl=s("Conversation example::"),Zl=i(),ia=n("blockquote"),la=n("blockquote"),ca=n("blockquote"),pa=n("p"),ec=s(`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
mname = \u2018facebook/blenderbot-400M-distill\u2019
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])`),tc=i(),ha=n("blockquote"),ua=n("blockquote"),fa=n("blockquote"),Go=n("p"),oc=s(`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> `),ma=n("s"),nc=s(`That\u2019s unfortunate. \u201D
\u2026 \u201CAre they trying to lose weight or are they just trying to be healthier?`),rc=s(` \u201D
\u2026 \u201D<s> I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Us=i(),zt=n("h2"),Rt=n("a"),_a=n("span"),_(Wo.$$.fragment),ac=i(),ga=n("span"),sc=s("BlenderbotForCausalLM"),Rs=i(),Uo=n("div"),Ye=n("div"),_(Ro.$$.fragment),dc=i(),ba=n("p"),ic=s("Example:"),lc=i(),_(Ho.$$.fragment),Hs=i(),Ft=n("h2"),Ht=n("a"),va=n("span"),_(Ko.$$.fragment),cc=i(),ka=n("span"),pc=s("TFBlenderbotModel"),Ks=i(),ce=n("div"),_(Vo.$$.fragment),hc=i(),Qo=n("p"),uc=s(`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=n("a"),fc=s("TFPreTrainedModel"),mc=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),_c=i(),Jo=n("p"),gc=s("This model is also a "),Xo=n("a"),bc=s("tf.keras.Model"),vc=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),kc=i(),_(Kt.$$.fragment),yc=i(),be=n("div"),_(Yo.$$.fragment),Tc=i(),$t=n("p"),wc=s("The "),sr=n("a"),xc=s("TFBlenderbotModel"),Bc=s(" forward method, overrides the "),ya=n("code"),zc=s("__call__"),Fc=s(" special method."),$c=i(),_(Vt.$$.fragment),Ec=i(),Ta=n("p"),Mc=s("Example:"),qc=i(),_(Zo.$$.fragment),Vs=i(),Et=n("h2"),Qt=n("a"),wa=n("span"),_(en.$$.fragment),Cc=i(),xa=n("span"),Pc=s("TFBlenderbotForConditionalGeneration"),Qs=i(),pe=n("div"),_(tn.$$.fragment),jc=i(),on=n("p"),Nc=s(`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=n("a"),Oc=s("TFPreTrainedModel"),Ac=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Ic=i(),nn=n("p"),Sc=s("This model is also a "),rn=n("a"),Lc=s("tf.keras.Model"),Dc=s(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Gc=i(),_(Jt.$$.fragment),Wc=i(),Y=n("div"),_(an.$$.fragment),Uc=i(),Mt=n("p"),Rc=s("The "),ir=n("a"),Hc=s("TFBlenderbotForConditionalGeneration"),Kc=s(" forward method, overrides the "),Ba=n("code"),Vc=s("__call__"),Qc=s(" special method."),Jc=i(),_(Xt.$$.fragment),Xc=i(),za=n("p"),Yc=s("Conversation example::"),Zc=i(),Fa=n("blockquote"),$a=n("blockquote"),Ea=n("blockquote"),Ma=n("p"),ep=s(`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration
mname = \u2018facebook/blenderbot-400M-distill\u2019
model = TFBlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])`),tp=i(),qa=n("blockquote"),Ca=n("blockquote"),Pa=n("blockquote"),sn=n("p"),op=s(`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> `),ja=n("s"),np=s(`That\u2019s unfortunate. \u201D
\u2026 \u201CAre they trying to lose weight or are they just trying to be healthier?`),rp=s(` \u201D
\u2026 \u201D<s> I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),Js=i(),qt=n("h2"),Yt=n("a"),Na=n("span"),_(dn.$$.fragment),ap=i(),Oa=n("span"),sp=s("FlaxBlenderbotModel"),Xs=i(),I=n("div"),_(ln.$$.fragment),dp=i(),cn=n("p"),ip=s(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),lr=n("a"),lp=s("FlaxPreTrainedModel"),cp=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pp=i(),pn=n("p"),hp=s("This model is also a Flax Linen "),hn=n("a"),up=s("flax.nn.Module"),fp=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),mp=i(),Aa=n("p"),_p=s("Finally, this model supports inherent JAX features such as:"),gp=i(),He=n("ul"),Ia=n("li"),un=n("a"),bp=s("Just-In-Time (JIT) compilation"),vp=i(),Sa=n("li"),fn=n("a"),kp=s("Automatic Differentiation"),yp=i(),La=n("li"),mn=n("a"),Tp=s("Vectorization"),wp=i(),Da=n("li"),_n=n("a"),xp=s("Parallelization"),Bp=i(),ve=n("div"),_(gn.$$.fragment),zp=i(),Ct=n("p"),Fp=s("The "),Ga=n("code"),$p=s("FlaxBlenderbotPreTrainedModel"),Ep=s(" forward method, overrides the "),Wa=n("code"),Mp=s("__call__"),qp=s(" special method."),Cp=i(),_(Zt.$$.fragment),Pp=i(),Ua=n("p"),jp=s("Example:"),Np=i(),_(bn.$$.fragment),Op=i(),Ze=n("div"),_(vn.$$.fragment),Ap=i(),Ra=n("p"),Ip=s("Example:"),Sp=i(),_(kn.$$.fragment),Lp=i(),et=n("div"),_(yn.$$.fragment),Dp=i(),Ha=n("p"),Gp=s("Example:"),Wp=i(),_(Tn.$$.fragment),Ys=i(),Pt=n("h2"),eo=n("a"),Ka=n("span"),_(wn.$$.fragment),Up=i(),Va=n("span"),Rp=s("FlaxBlenderbotForConditionalGeneration"),Zs=i(),S=n("div"),_(xn.$$.fragment),Hp=i(),Bn=n("p"),Kp=s(`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cr=n("a"),Vp=s("FlaxPreTrainedModel"),Qp=s(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Jp=i(),zn=n("p"),Xp=s("This model is also a Flax Linen "),Fn=n("a"),Yp=s("flax.nn.Module"),Zp=s(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),eh=i(),Qa=n("p"),th=s("Finally, this model supports inherent JAX features such as:"),oh=i(),Ke=n("ul"),Ja=n("li"),$n=n("a"),nh=s("Just-In-Time (JIT) compilation"),rh=i(),Xa=n("li"),En=n("a"),ah=s("Automatic Differentiation"),sh=i(),Ya=n("li"),Mn=n("a"),dh=s("Vectorization"),ih=i(),Za=n("li"),qn=n("a"),lh=s("Parallelization"),ch=i(),L=n("div"),_(Cn.$$.fragment),ph=i(),jt=n("p"),hh=s("The "),es=n("code"),uh=s("FlaxBlenderbotPreTrainedModel"),fh=s(" forward method, overrides the "),ts=n("code"),mh=s("__call__"),_h=s(" special method."),gh=i(),_(to.$$.fragment),bh=i(),os=n("p"),vh=s("Conversation example::"),kh=i(),ns=n("blockquote"),rs=n("blockquote"),as=n("blockquote"),ss=n("p"),yh=s("from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Th=i(),ds=n("blockquote"),is=n("blockquote"),ls=n("blockquote"),cs=n("p"),wh=s(`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),xh=i(),ps=n("blockquote"),hs=n("blockquote"),us=n("blockquote"),fs=n("p"),Bh=s(`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([UTTERANCE], max_length=1024, return_tensors=\u2018np\u2019)`),zh=i(),ms=n("blockquote"),_s=n("blockquote"),Pn=n("blockquote"),oo=n("h1"),no=n("a"),gs=n("span"),_(jn.$$.fragment),Fh=i(),bs=n("span"),$h=s("Generate Reply"),Eh=i(),vs=n("p"),Mh=s(`reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in reply_ids])`),qh=i(),tt=n("div"),_(Nn.$$.fragment),Ch=i(),ks=n("p"),Ph=s("Example:"),jh=i(),_(On.$$.fragment),Nh=i(),ot=n("div"),_(An.$$.fragment),Oh=i(),ys=n("p"),Ah=s("Example:"),Ih=i(),_(In.$$.fragment),this.h()},l(o){const h=Km('[data-svelte="svelte-1phssyn"]',document.head);u=r(h,"META",{name:!0,content:!0}),h.forEach(t),z=l(o),m=r(o,"H1",{class:!0});var Sn=a(m);T=r(Sn,"A",{id:!0,class:!0,href:!0});var Ts=a(T);B=r(Ts,"SPAN",{});var ws=a(B);g(x.$$.fragment,ws),ws.forEach(t),Ts.forEach(t),w=l(Sn),F=r(Sn,"SPAN",{});var xs=a(F);Ce=d(xs,"Blenderbot"),xs.forEach(t),Sn.forEach(t),ue=l(o),E=r(o,"P",{});var ro=a(E);ke=r(ro,"STRONG",{});var Bs=a(ke);oe=d(Bs,"DISCLAIMER:"),Bs.forEach(t),Pe=d(ro," If you see something strange, file a "),ne=r(ro,"A",{href:!0,rel:!0});var zs=a(ne);re=d(zs,"Github Issue"),zs.forEach(t),je=d(ro," ."),ro.forEach(t),Fe=l(o),G=r(o,"H2",{class:!0});var Ln=a(G);j=r(Ln,"A",{id:!0,class:!0,href:!0});var Dh=a(j);ye=r(Dh,"SPAN",{});var Gh=a(ye);g(R.$$.fragment,Gh),Gh.forEach(t),Dh.forEach(t),M=l(Ln),C=r(Ln,"SPAN",{});var Wh=a(C);Ne=d(Wh,"Overview"),Wh.forEach(t),Ln.forEach(t),Q=l(o),J=r(o,"P",{});var td=a(J);Oe=d(td,"The Blender chatbot model was proposed in "),W=r(td,"A",{href:!0,rel:!0});var Uh=a(W);Ae=d(Uh,"Recipes for building an open-domain chatbot"),Uh.forEach(t),Ie=d(td,` Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`),td.forEach(t),N=l(o),fe=r(o,"P",{});var Rh=a(fe);ae=d(Rh,"The abstract of the paper is the following:"),Rh.forEach(t),$e=l(o),me=r(o,"P",{});var Hh=a(me);H=r(Hh,"EM",{});var Kh=a(H);Se=d(Kh,`Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.`),Kh.forEach(t),Hh.forEach(t),Ee=l(o),q=r(o,"P",{});var pr=a(q);Le=d(pr,"This model was contributed by "),U=r(pr,"A",{href:!0,rel:!0});var Vh=a(U);De=d(Vh,"sshleifer"),Vh.forEach(t),f=d(pr,". The authors\u2019 code can be found "),$=r(pr,"A",{href:!0,rel:!0});var Qh=a($);Te=d(Qh,"here"),Qh.forEach(t),ht=d(pr," ."),pr.forEach(t),Ve=l(o),P=r(o,"H2",{class:!0});var od=a(P);_e=r(od,"A",{id:!0,class:!0,href:!0});var Jh=a(_e);Ge=r(Jh,"SPAN",{});var Xh=a(Ge);g(we.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),K=l(od),V=r(od,"SPAN",{});var Yh=a(V);ut=d(Yh,"Implementation Notes"),Yh.forEach(t),od.forEach(t),Qe=l(o),O=r(o,"UL",{});var hr=a(O);xe=r(hr,"LI",{});var nd=a(xe);ft=d(nd,"Blenderbot uses a standard "),se=r(nd,"A",{href:!0,rel:!0});var Zh=a(se);mt=d(Zh,"seq2seq model transformer"),Zh.forEach(t),Nd=d(nd," based architecture."),nd.forEach(t),Od=l(hr),ho=r(hr,"LI",{});var rd=a(ho);Ad=d(rd,"Available checkpoints can be found in the "),uo=r(rd,"A",{href:!0,rel:!0});var eu=a(uo);Id=d(eu,"model hub"),eu.forEach(t),Sd=d(rd,"."),rd.forEach(t),Ld=l(hr),We=r(hr,"LI",{});var ao=a(We);Dd=d(ao,"This is the "),$r=r(ao,"EM",{});var tu=a($r);Gd=d(tu,"default"),tu.forEach(t),Wd=d(ao,` Blenderbot model class. However, some smaller checkpoints, such as
`),Er=r(ao,"CODE",{});var ou=a(Er);Ud=d(ou,"facebook/blenderbot_small_90M"),ou.forEach(t),Rd=d(ao,`, have a different architecture and consequently should be used with
`),Wn=r(ao,"A",{href:!0});var nu=a(Wn);Hd=d(nu,"BlenderbotSmall"),nu.forEach(t),Kd=d(ao,"."),ao.forEach(t),hr.forEach(t),Es=l(o),_t=r(o,"H2",{class:!0});var ad=a(_t);Nt=r(ad,"A",{id:!0,class:!0,href:!0});var ru=a(Nt);Mr=r(ru,"SPAN",{});var au=a(Mr);g(fo.$$.fragment,au),au.forEach(t),ru.forEach(t),Vd=l(ad),qr=r(ad,"SPAN",{});var su=a(qr);Qd=d(su,"Usage"),su.forEach(t),ad.forEach(t),Ms=l(o),Un=r(o,"P",{});var du=a(Un);Jd=d(du,"Here is an example of model usage:"),du.forEach(t),qs=l(o),g(mo.$$.fragment,o),Cs=l(o),gt=r(o,"H2",{class:!0});var sd=a(gt);Ot=r(sd,"A",{id:!0,class:!0,href:!0});var iu=a(Ot);Cr=r(iu,"SPAN",{});var lu=a(Cr);g(_o.$$.fragment,lu),lu.forEach(t),iu.forEach(t),Xd=l(sd),Pr=r(sd,"SPAN",{});var cu=a(Pr);Yd=d(cu,"BlenderbotConfig"),cu.forEach(t),sd.forEach(t),Ps=l(o),de=r(o,"DIV",{class:!0});var nt=a(de);g(go.$$.fragment,nt),Zd=l(nt),bt=r(nt,"P",{});var ur=a(bt);ei=d(ur,"This is the configuration class to store the configuration of a "),Rn=r(ur,"A",{href:!0});var pu=a(Rn);ti=d(pu,"BlenderbotModel"),pu.forEach(t),oi=d(ur,`. It is used
to instantiate an Blenderbot model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Blenderbot
`),bo=r(ur,"A",{href:!0,rel:!0});var hu=a(bo);ni=d(hu,"facebook/blenderbot-3B"),hu.forEach(t),ri=d(ur," architecture."),ur.forEach(t),ai=l(nt),vt=r(nt,"P",{});var fr=a(vt);si=d(fr,"Configuration objects inherit from "),Hn=r(fr,"A",{href:!0});var uu=a(Hn);di=d(uu,"PretrainedConfig"),uu.forEach(t),ii=d(fr,` and can be used to control the model
outputs. Read the documentation from `),Kn=r(fr,"A",{href:!0});var fu=a(Kn);li=d(fu,"PretrainedConfig"),fu.forEach(t),ci=d(fr," for more information."),fr.forEach(t),pi=l(nt),jr=r(nt,"P",{});var mu=a(jr);hi=d(mu,"Example:"),mu.forEach(t),ui=l(nt),g(vo.$$.fragment,nt),nt.forEach(t),js=l(o),kt=r(o,"H2",{class:!0});var dd=a(kt);At=r(dd,"A",{id:!0,class:!0,href:!0});var _u=a(At);Nr=r(_u,"SPAN",{});var gu=a(Nr);g(ko.$$.fragment,gu),gu.forEach(t),_u.forEach(t),fi=l(dd),Or=r(dd,"SPAN",{});var bu=a(Or);mi=d(bu,"BlenderbotTokenizer"),bu.forEach(t),dd.forEach(t),Ns=l(o),ie=r(o,"DIV",{class:!0});var rt=a(ie);g(yo.$$.fragment,rt),_i=l(rt),Ar=r(rt,"P",{});var vu=a(Ar);gi=d(vu,"Construct a Blenderbot tokenizer."),vu.forEach(t),bi=l(rt),It=r(rt,"P",{});var Fs=a(It);Ir=r(Fs,"CODE",{});var ku=a(Ir);vi=d(ku,"Blenderbot"),ku.forEach(t),ki=d(Fs," is nearly identical to "),Vn=r(Fs,"A",{href:!0});var yu=a(Vn);yi=d(yu,"RobertaTokenizer"),yu.forEach(t),Ti=d(Fs,` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),Fs.forEach(t),wi=l(rt),To=r(rt,"P",{});var id=a(To);xi=d(id,"Refer to superclass "),Qn=r(id,"A",{href:!0});var Tu=a(Qn);Bi=d(Tu,"RobertaTokenizer"),Tu.forEach(t),zi=d(id,` for usage examples and documentation concerning
parameters.`),id.forEach(t),Fi=l(rt),Je=r(rt,"DIV",{class:!0});var mr=a(Je);g(wo.$$.fragment,mr),$i=l(mr),Sr=r(mr,"P",{});var wu=a(Sr);Ei=d(wu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),wu.forEach(t),Mi=l(mr),Lr=r(mr,"UL",{});var xu=a(Lr);Jn=r(xu,"LI",{});var Sh=a(Jn);qi=d(Sh,"single sequence: "),Dr=r(Sh,"CODE",{});var Bu=a(Dr);Ci=d(Bu,"X </s>"),Bu.forEach(t),Sh.forEach(t),xu.forEach(t),mr.forEach(t),rt.forEach(t),Os=l(o),yt=r(o,"H2",{class:!0});var ld=a(yt);St=r(ld,"A",{id:!0,class:!0,href:!0});var zu=a(St);Gr=r(zu,"SPAN",{});var Fu=a(Gr);g(xo.$$.fragment,Fu),Fu.forEach(t),zu.forEach(t),Pi=l(ld),Wr=r(ld,"SPAN",{});var $u=a(Wr);ji=d($u,"BlenderbotTokenizerFast"),$u.forEach(t),ld.forEach(t),As=l(o),le=r(o,"DIV",{class:!0});var at=a(le);g(Bo.$$.fragment,at),Ni=l(at),zo=r(at,"P",{});var cd=a(zo);Oi=d(cd,"Construct a \u201Cfast\u201D Blenderbot tokenizer (backed by HuggingFace\u2019s "),Ur=r(cd,"EM",{});var Eu=a(Ur);Ai=d(Eu,"tokenizers"),Eu.forEach(t),Ii=d(cd," library)."),cd.forEach(t),Si=l(at),Lt=r(at,"P",{});var $s=a(Lt);Rr=r($s,"CODE",{});var Mu=a(Rr);Li=d(Mu,"BlenderbotFast"),Mu.forEach(t),Di=d($s," is nearly identical to "),Xn=r($s,"A",{href:!0});var qu=a(Xn);Gi=d(qu,"RobertaTokenizerFast"),qu.forEach(t),Wi=d($s,` and runs
end-to-end tokenization: punctuation splitting and wordpiece. The only difference is that it doesn\u2019t add BOS token
to the beginning of sequences.`),$s.forEach(t),Ui=l(at),Fo=r(at,"P",{});var pd=a(Fo);Ri=d(pd,"Refer to superclass "),Yn=r(pd,"A",{href:!0});var Cu=a(Yn);Hi=d(Cu,"RobertaTokenizerFast"),Cu.forEach(t),Ki=d(pd,` for usage examples and documentation concerning
parameters.`),pd.forEach(t),Vi=l(at),Xe=r(at,"DIV",{class:!0});var _r=a(Xe);g($o.$$.fragment,_r),Qi=l(_r),Hr=r(_r,"P",{});var Pu=a(Hr);Ji=d(Pu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Blenderbot sequence has the following format:`),Pu.forEach(t),Xi=l(_r),Kr=r(_r,"UL",{});var ju=a(Kr);Zn=r(ju,"LI",{});var Lh=a(Zn);Yi=d(Lh,"single sequence: "),Vr=r(Lh,"CODE",{});var Nu=a(Vr);Zi=d(Nu,"X </s>"),Nu.forEach(t),Lh.forEach(t),ju.forEach(t),_r.forEach(t),at.forEach(t),Is=l(o),Tt=r(o,"H2",{class:!0});var hd=a(Tt);Dt=r(hd,"A",{id:!0,class:!0,href:!0});var Ou=a(Dt);Qr=r(Ou,"SPAN",{});var Au=a(Qr);g(Eo.$$.fragment,Au),Au.forEach(t),Ou.forEach(t),el=l(hd),Jr=r(hd,"SPAN",{});var Iu=a(Jr);tl=d(Iu,"BlenderbotModel"),Iu.forEach(t),hd.forEach(t),Ss=l(o),Ue=r(o,"P",{});var Dn=a(Ue);ol=d(Dn,"See "),Xr=r(Dn,"CODE",{});var Su=a(Xr);nl=d(Su,"transformers.BartModel"),Su.forEach(t),rl=d(Dn," for arguments to "),Yr=r(Dn,"EM",{});var Lu=a(Yr);al=d(Lu,"forward"),Lu.forEach(t),sl=d(Dn," and "),Zr=r(Dn,"EM",{});var Du=a(Zr);dl=d(Du,"generate"),Du.forEach(t),Dn.forEach(t),Ls=l(o),Be=r(o,"DIV",{class:!0});var so=a(Be);g(Mo.$$.fragment,so),il=l(so),qo=r(so,"P",{});var ud=a(qo);ll=d(ud,`The bare Blenderbot Model outputting raw hidden-states without any specific head on top.
This model inherits from `),er=r(ud,"A",{href:!0});var Gu=a(er);cl=d(Gu,"PreTrainedModel"),Gu.forEach(t),pl=d(ud,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ud.forEach(t),hl=l(so),Co=r(so,"P",{});var fd=a(Co);ul=d(fd,"This model is also a PyTorch "),Po=r(fd,"A",{href:!0,rel:!0});var Wu=a(Po);fl=d(Wu,"torch.nn.Module"),Wu.forEach(t),ml=d(fd,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),fd.forEach(t),_l=l(so),ge=r(so,"DIV",{class:!0});var st=a(ge);g(jo.$$.fragment,st),gl=l(st),wt=r(st,"P",{});var gr=a(wt);bl=d(gr,"The "),tr=r(gr,"A",{href:!0});var Uu=a(tr);vl=d(Uu,"BlenderbotModel"),Uu.forEach(t),kl=d(gr," forward method, overrides the "),ea=r(gr,"CODE",{});var Ru=a(ea);yl=d(Ru,"__call__"),Ru.forEach(t),Tl=d(gr," special method."),gr.forEach(t),wl=l(st),g(Gt.$$.fragment,st),xl=l(st),ta=r(st,"P",{});var Hu=a(ta);Bl=d(Hu,"Example:"),Hu.forEach(t),zl=l(st),g(No.$$.fragment,st),st.forEach(t),so.forEach(t),Ds=l(o),xt=r(o,"H2",{class:!0});var md=a(xt);Wt=r(md,"A",{id:!0,class:!0,href:!0});var Ku=a(Wt);oa=r(Ku,"SPAN",{});var Vu=a(oa);g(Oo.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),Fl=l(md),na=r(md,"SPAN",{});var Qu=a(na);$l=d(Qu,"BlenderbotForConditionalGeneration"),Qu.forEach(t),md.forEach(t),Gs=l(o),Re=r(o,"P",{});var Gn=a(Re);El=d(Gn,"See "),or=r(Gn,"A",{href:!0});var Ju=a(or);Ml=d(Ju,"BartForConditionalGeneration"),Ju.forEach(t),ql=d(Gn," for arguments to "),ra=r(Gn,"EM",{});var Xu=a(ra);Cl=d(Xu,"forward"),Xu.forEach(t),Pl=d(Gn," and "),aa=r(Gn,"EM",{});var Yu=a(aa);jl=d(Yu,"generate"),Yu.forEach(t),Gn.forEach(t),Ws=l(o),ze=r(o,"DIV",{class:!0});var io=a(ze);g(Ao.$$.fragment,io),Nl=l(io),Io=r(io,"P",{});var _d=a(Io);Ol=d(_d,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),nr=r(_d,"A",{href:!0});var Zu=a(nr);Al=d(Zu,"PreTrainedModel"),Zu.forEach(t),Il=d(_d,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),_d.forEach(t),Sl=l(io),So=r(io,"P",{});var gd=a(So);Ll=d(gd,"This model is also a PyTorch "),Lo=r(gd,"A",{href:!0,rel:!0});var ef=a(Lo);Dl=d(ef,"torch.nn.Module"),ef.forEach(t),Gl=d(gd,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),gd.forEach(t),Wl=l(io),X=r(io,"DIV",{class:!0});var Me=a(X);g(Do.$$.fragment,Me),Ul=l(Me),Bt=r(Me,"P",{});var br=a(Bt);Rl=d(br,"The "),rr=r(br,"A",{href:!0});var tf=a(rr);Hl=d(tf,"BlenderbotForConditionalGeneration"),tf.forEach(t),Kl=d(br," forward method, overrides the "),sa=r(br,"CODE",{});var of=a(sa);Vl=d(of,"__call__"),of.forEach(t),Ql=d(br," special method."),br.forEach(t),Jl=l(Me),g(Ut.$$.fragment,Me),Xl=l(Me),da=r(Me,"P",{});var nf=a(da);Yl=d(nf,"Conversation example::"),nf.forEach(t),Zl=l(Me),ia=r(Me,"BLOCKQUOTE",{});var rf=a(ia);la=r(rf,"BLOCKQUOTE",{});var af=a(la);ca=r(af,"BLOCKQUOTE",{});var sf=a(ca);pa=r(sf,"P",{});var df=a(pa);ec=d(df,`from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration
mname = \u2018facebook/blenderbot-400M-distill\u2019
model = BlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018pt\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])`),df.forEach(t),sf.forEach(t),af.forEach(t),rf.forEach(t),tc=l(Me),ha=r(Me,"BLOCKQUOTE",{});var lf=a(ha);ua=r(lf,"BLOCKQUOTE",{});var cf=a(ua);fa=r(cf,"BLOCKQUOTE",{});var pf=a(fa);Go=r(pf,"P",{});var bd=a(Go);oc=d(bd,`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> `),ma=r(bd,"S",{});var hf=a(ma);nc=d(hf,`That\u2019s unfortunate. \u201D
\u2026 \u201CAre they trying to lose weight or are they just trying to be healthier?`),hf.forEach(t),rc=d(bd,` \u201D
\u2026 \u201D<s> I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018pt\u2019)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),bd.forEach(t),pf.forEach(t),cf.forEach(t),lf.forEach(t),Me.forEach(t),io.forEach(t),Us=l(o),zt=r(o,"H2",{class:!0});var vd=a(zt);Rt=r(vd,"A",{id:!0,class:!0,href:!0});var uf=a(Rt);_a=r(uf,"SPAN",{});var ff=a(_a);g(Wo.$$.fragment,ff),ff.forEach(t),uf.forEach(t),ac=l(vd),ga=r(vd,"SPAN",{});var mf=a(ga);sc=d(mf,"BlenderbotForCausalLM"),mf.forEach(t),vd.forEach(t),Rs=l(o),Uo=r(o,"DIV",{class:!0});var _f=a(Uo);Ye=r(_f,"DIV",{class:!0});var vr=a(Ye);g(Ro.$$.fragment,vr),dc=l(vr),ba=r(vr,"P",{});var gf=a(ba);ic=d(gf,"Example:"),gf.forEach(t),lc=l(vr),g(Ho.$$.fragment,vr),vr.forEach(t),_f.forEach(t),Hs=l(o),Ft=r(o,"H2",{class:!0});var kd=a(Ft);Ht=r(kd,"A",{id:!0,class:!0,href:!0});var bf=a(Ht);va=r(bf,"SPAN",{});var vf=a(va);g(Ko.$$.fragment,vf),vf.forEach(t),bf.forEach(t),cc=l(kd),ka=r(kd,"SPAN",{});var kf=a(ka);pc=d(kf,"TFBlenderbotModel"),kf.forEach(t),kd.forEach(t),Ks=l(o),ce=r(o,"DIV",{class:!0});var dt=a(ce);g(Vo.$$.fragment,dt),hc=l(dt),Qo=r(dt,"P",{});var yd=a(Qo);uc=d(yd,`The bare BLENDERBOT Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=r(yd,"A",{href:!0});var yf=a(ar);fc=d(yf,"TFPreTrainedModel"),yf.forEach(t),mc=d(yd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),yd.forEach(t),_c=l(dt),Jo=r(dt,"P",{});var Td=a(Jo);gc=d(Td,"This model is also a "),Xo=r(Td,"A",{href:!0,rel:!0});var Tf=a(Xo);bc=d(Tf,"tf.keras.Model"),Tf.forEach(t),vc=d(Td,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Td.forEach(t),kc=l(dt),g(Kt.$$.fragment,dt),yc=l(dt),be=r(dt,"DIV",{class:!0});var it=a(be);g(Yo.$$.fragment,it),Tc=l(it),$t=r(it,"P",{});var kr=a($t);wc=d(kr,"The "),sr=r(kr,"A",{href:!0});var wf=a(sr);xc=d(wf,"TFBlenderbotModel"),wf.forEach(t),Bc=d(kr," forward method, overrides the "),ya=r(kr,"CODE",{});var xf=a(ya);zc=d(xf,"__call__"),xf.forEach(t),Fc=d(kr," special method."),kr.forEach(t),$c=l(it),g(Vt.$$.fragment,it),Ec=l(it),Ta=r(it,"P",{});var Bf=a(Ta);Mc=d(Bf,"Example:"),Bf.forEach(t),qc=l(it),g(Zo.$$.fragment,it),it.forEach(t),dt.forEach(t),Vs=l(o),Et=r(o,"H2",{class:!0});var wd=a(Et);Qt=r(wd,"A",{id:!0,class:!0,href:!0});var zf=a(Qt);wa=r(zf,"SPAN",{});var Ff=a(wa);g(en.$$.fragment,Ff),Ff.forEach(t),zf.forEach(t),Cc=l(wd),xa=r(wd,"SPAN",{});var $f=a(xa);Pc=d($f,"TFBlenderbotForConditionalGeneration"),$f.forEach(t),wd.forEach(t),Qs=l(o),pe=r(o,"DIV",{class:!0});var lt=a(pe);g(tn.$$.fragment,lt),jc=l(lt),on=r(lt,"P",{});var xd=a(on);Nc=d(xd,`The BLENDERBOT Model with a language modeling head. Can be used for summarization.
This model inherits from `),dr=r(xd,"A",{href:!0});var Ef=a(dr);Oc=d(Ef,"TFPreTrainedModel"),Ef.forEach(t),Ac=d(xd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xd.forEach(t),Ic=l(lt),nn=r(lt,"P",{});var Bd=a(nn);Sc=d(Bd,"This model is also a "),rn=r(Bd,"A",{href:!0,rel:!0});var Mf=a(rn);Lc=d(Mf,"tf.keras.Model"),Mf.forEach(t),Dc=d(Bd,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Bd.forEach(t),Gc=l(lt),g(Jt.$$.fragment,lt),Wc=l(lt),Y=r(lt,"DIV",{class:!0});var qe=a(Y);g(an.$$.fragment,qe),Uc=l(qe),Mt=r(qe,"P",{});var yr=a(Mt);Rc=d(yr,"The "),ir=r(yr,"A",{href:!0});var qf=a(ir);Hc=d(qf,"TFBlenderbotForConditionalGeneration"),qf.forEach(t),Kc=d(yr," forward method, overrides the "),Ba=r(yr,"CODE",{});var Cf=a(Ba);Vc=d(Cf,"__call__"),Cf.forEach(t),Qc=d(yr," special method."),yr.forEach(t),Jc=l(qe),g(Xt.$$.fragment,qe),Xc=l(qe),za=r(qe,"P",{});var Pf=a(za);Yc=d(Pf,"Conversation example::"),Pf.forEach(t),Zc=l(qe),Fa=r(qe,"BLOCKQUOTE",{});var jf=a(Fa);$a=r(jf,"BLOCKQUOTE",{});var Nf=a($a);Ea=r(Nf,"BLOCKQUOTE",{});var Of=a(Ea);Ma=r(Of,"P",{});var Af=a(Ma);ep=d(Af,`from transformers import BlenderbotTokenizer, TFBlenderbotForConditionalGeneration
mname = \u2018facebook/blenderbot-400M-distill\u2019
model = TFBlenderbotForConditionalGeneration.from_pretrained(mname)
tokenizer = BlenderbotTokenizer.from_pretrained(mname)
UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
print(\u201CHuman: \u201D, UTTERANCE)
inputs = tokenizer([UTTERANCE], return_tensors=\u2018tf\u2019)
reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(reply_ids, skip_special_tokens=True)[0])`),Af.forEach(t),Of.forEach(t),Nf.forEach(t),jf.forEach(t),tp=l(qe),qa=r(qe,"BLOCKQUOTE",{});var If=a(qa);Ca=r(If,"BLOCKQUOTE",{});var Sf=a(Ca);Pa=r(Sf,"BLOCKQUOTE",{});var Lf=a(Pa);sn=r(Lf,"P",{});var zd=a(sn);op=d(zd,`REPLY = \u201CI\u2019m not sure\u201D
print(\u201CHuman: \u201D, REPLY)
NEXT_UTTERANCE = (
\u2026 \u201CMy friends are cool but they eat too many carbs.</s> `),ja=r(zd,"S",{});var Df=a(ja);np=d(Df,`That\u2019s unfortunate. \u201D
\u2026 \u201CAre they trying to lose weight or are they just trying to be healthier?`),Df.forEach(t),rp=d(zd,` \u201D
\u2026 \u201D<s> I\u2019m not sure.\u201D
\u2026 )
inputs = tokenizer([NEXT_UTTERANCE], return_tensors=\u2018tf\u2019)
next_reply_ids = model.generate(**inputs)
print(\u201CBot: \u201D, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])`),zd.forEach(t),Lf.forEach(t),Sf.forEach(t),If.forEach(t),qe.forEach(t),lt.forEach(t),Js=l(o),qt=r(o,"H2",{class:!0});var Fd=a(qt);Yt=r(Fd,"A",{id:!0,class:!0,href:!0});var Gf=a(Yt);Na=r(Gf,"SPAN",{});var Wf=a(Na);g(dn.$$.fragment,Wf),Wf.forEach(t),Gf.forEach(t),ap=l(Fd),Oa=r(Fd,"SPAN",{});var Uf=a(Oa);sp=d(Uf,"FlaxBlenderbotModel"),Uf.forEach(t),Fd.forEach(t),Xs=l(o),I=r(o,"DIV",{class:!0});var Z=a(I);g(ln.$$.fragment,Z),dp=l(Z),cn=r(Z,"P",{});var $d=a(cn);ip=d($d,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),lr=r($d,"A",{href:!0});var Rf=a(lr);lp=d(Rf,"FlaxPreTrainedModel"),Rf.forEach(t),cp=d($d,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$d.forEach(t),pp=l(Z),pn=r(Z,"P",{});var Ed=a(pn);hp=d(Ed,"This model is also a Flax Linen "),hn=r(Ed,"A",{href:!0,rel:!0});var Hf=a(hn);up=d(Hf,"flax.nn.Module"),Hf.forEach(t),fp=d(Ed,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ed.forEach(t),mp=l(Z),Aa=r(Z,"P",{});var Kf=a(Aa);_p=d(Kf,"Finally, this model supports inherent JAX features such as:"),Kf.forEach(t),gp=l(Z),He=r(Z,"UL",{});var lo=a(He);Ia=r(lo,"LI",{});var Vf=a(Ia);un=r(Vf,"A",{href:!0,rel:!0});var Qf=a(un);bp=d(Qf,"Just-In-Time (JIT) compilation"),Qf.forEach(t),Vf.forEach(t),vp=l(lo),Sa=r(lo,"LI",{});var Jf=a(Sa);fn=r(Jf,"A",{href:!0,rel:!0});var Xf=a(fn);kp=d(Xf,"Automatic Differentiation"),Xf.forEach(t),Jf.forEach(t),yp=l(lo),La=r(lo,"LI",{});var Yf=a(La);mn=r(Yf,"A",{href:!0,rel:!0});var Zf=a(mn);Tp=d(Zf,"Vectorization"),Zf.forEach(t),Yf.forEach(t),wp=l(lo),Da=r(lo,"LI",{});var em=a(Da);_n=r(em,"A",{href:!0,rel:!0});var tm=a(_n);xp=d(tm,"Parallelization"),tm.forEach(t),em.forEach(t),lo.forEach(t),Bp=l(Z),ve=r(Z,"DIV",{class:!0});var ct=a(ve);g(gn.$$.fragment,ct),zp=l(ct),Ct=r(ct,"P",{});var Tr=a(Ct);Fp=d(Tr,"The "),Ga=r(Tr,"CODE",{});var om=a(Ga);$p=d(om,"FlaxBlenderbotPreTrainedModel"),om.forEach(t),Ep=d(Tr," forward method, overrides the "),Wa=r(Tr,"CODE",{});var nm=a(Wa);Mp=d(nm,"__call__"),nm.forEach(t),qp=d(Tr," special method."),Tr.forEach(t),Cp=l(ct),g(Zt.$$.fragment,ct),Pp=l(ct),Ua=r(ct,"P",{});var rm=a(Ua);jp=d(rm,"Example:"),rm.forEach(t),Np=l(ct),g(bn.$$.fragment,ct),ct.forEach(t),Op=l(Z),Ze=r(Z,"DIV",{class:!0});var wr=a(Ze);g(vn.$$.fragment,wr),Ap=l(wr),Ra=r(wr,"P",{});var am=a(Ra);Ip=d(am,"Example:"),am.forEach(t),Sp=l(wr),g(kn.$$.fragment,wr),wr.forEach(t),Lp=l(Z),et=r(Z,"DIV",{class:!0});var xr=a(et);g(yn.$$.fragment,xr),Dp=l(xr),Ha=r(xr,"P",{});var sm=a(Ha);Gp=d(sm,"Example:"),sm.forEach(t),Wp=l(xr),g(Tn.$$.fragment,xr),xr.forEach(t),Z.forEach(t),Ys=l(o),Pt=r(o,"H2",{class:!0});var Md=a(Pt);eo=r(Md,"A",{id:!0,class:!0,href:!0});var dm=a(eo);Ka=r(dm,"SPAN",{});var im=a(Ka);g(wn.$$.fragment,im),im.forEach(t),dm.forEach(t),Up=l(Md),Va=r(Md,"SPAN",{});var lm=a(Va);Rp=d(lm,"FlaxBlenderbotForConditionalGeneration"),lm.forEach(t),Md.forEach(t),Zs=l(o),S=r(o,"DIV",{class:!0});var ee=a(S);g(xn.$$.fragment,ee),Hp=l(ee),Bn=r(ee,"P",{});var qd=a(Bn);Kp=d(qd,`The Blenderbot Model with a language modeling head. Can be used for summarization.
This model inherits from `),cr=r(qd,"A",{href:!0});var cm=a(cr);Vp=d(cm,"FlaxPreTrainedModel"),cm.forEach(t),Qp=d(qd,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),qd.forEach(t),Jp=l(ee),zn=r(ee,"P",{});var Cd=a(zn);Xp=d(Cd,"This model is also a Flax Linen "),Fn=r(Cd,"A",{href:!0,rel:!0});var pm=a(Fn);Yp=d(pm,"flax.nn.Module"),pm.forEach(t),Zp=d(Cd,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cd.forEach(t),eh=l(ee),Qa=r(ee,"P",{});var hm=a(Qa);th=d(hm,"Finally, this model supports inherent JAX features such as:"),hm.forEach(t),oh=l(ee),Ke=r(ee,"UL",{});var co=a(Ke);Ja=r(co,"LI",{});var um=a(Ja);$n=r(um,"A",{href:!0,rel:!0});var fm=a($n);nh=d(fm,"Just-In-Time (JIT) compilation"),fm.forEach(t),um.forEach(t),rh=l(co),Xa=r(co,"LI",{});var mm=a(Xa);En=r(mm,"A",{href:!0,rel:!0});var _m=a(En);ah=d(_m,"Automatic Differentiation"),_m.forEach(t),mm.forEach(t),sh=l(co),Ya=r(co,"LI",{});var gm=a(Ya);Mn=r(gm,"A",{href:!0,rel:!0});var bm=a(Mn);dh=d(bm,"Vectorization"),bm.forEach(t),gm.forEach(t),ih=l(co),Za=r(co,"LI",{});var vm=a(Za);qn=r(vm,"A",{href:!0,rel:!0});var km=a(qn);lh=d(km,"Parallelization"),km.forEach(t),vm.forEach(t),co.forEach(t),ch=l(ee),L=r(ee,"DIV",{class:!0});var te=a(L);g(Cn.$$.fragment,te),ph=l(te),jt=r(te,"P",{});var Br=a(jt);hh=d(Br,"The "),es=r(Br,"CODE",{});var ym=a(es);uh=d(ym,"FlaxBlenderbotPreTrainedModel"),ym.forEach(t),fh=d(Br," forward method, overrides the "),ts=r(Br,"CODE",{});var Tm=a(ts);mh=d(Tm,"__call__"),Tm.forEach(t),_h=d(Br," special method."),Br.forEach(t),gh=l(te),g(to.$$.fragment,te),bh=l(te),os=r(te,"P",{});var wm=a(os);vh=d(wm,"Conversation example::"),wm.forEach(t),kh=l(te),ns=r(te,"BLOCKQUOTE",{});var xm=a(ns);rs=r(xm,"BLOCKQUOTE",{});var Bm=a(rs);as=r(Bm,"BLOCKQUOTE",{});var zm=a(as);ss=r(zm,"P",{});var Fm=a(ss);yh=d(Fm,"from transformers import BlenderbotTokenizer, FlaxBlenderbotForConditionalGeneration, BlenderbotConfig"),Fm.forEach(t),zm.forEach(t),Bm.forEach(t),xm.forEach(t),Th=l(te),ds=r(te,"BLOCKQUOTE",{});var $m=a(ds);is=r($m,"BLOCKQUOTE",{});var Em=a(is);ls=r(Em,"BLOCKQUOTE",{});var Mm=a(ls);cs=r(Mm,"P",{});var qm=a(cs);wh=d(qm,`model = FlaxBlenderbotForConditionalGeneration.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)
tokenizer = BlenderbotTokenizer.from_pretrained(\u2018facebook/blenderbot-400M-distill\u2019)`),qm.forEach(t),Mm.forEach(t),Em.forEach(t),$m.forEach(t),xh=l(te),ps=r(te,"BLOCKQUOTE",{});var Cm=a(ps);hs=r(Cm,"BLOCKQUOTE",{});var Pm=a(hs);us=r(Pm,"BLOCKQUOTE",{});var jm=a(us);fs=r(jm,"P",{});var Nm=a(fs);Bh=d(Nm,`UTTERANCE = \u201CMy friends are cool but they eat too many carbs.\u201D
inputs = tokenizer([UTTERANCE], max_length=1024, return_tensors=\u2018np\u2019)`),Nm.forEach(t),jm.forEach(t),Pm.forEach(t),Cm.forEach(t),zh=l(te),ms=r(te,"BLOCKQUOTE",{});var Om=a(ms);_s=r(Om,"BLOCKQUOTE",{});var Am=a(_s);Pn=r(Am,"BLOCKQUOTE",{});var Pd=a(Pn);oo=r(Pd,"H1",{class:!0});var jd=a(oo);no=r(jd,"A",{id:!0,class:!0,href:!0});var Im=a(no);gs=r(Im,"SPAN",{});var Sm=a(gs);g(jn.$$.fragment,Sm),Sm.forEach(t),Im.forEach(t),Fh=l(jd),bs=r(jd,"SPAN",{});var Lm=a(bs);$h=d(Lm,"Generate Reply"),Lm.forEach(t),jd.forEach(t),Eh=l(Pd),vs=r(Pd,"P",{});var Dm=a(vs);Mh=d(Dm,`reply_ids = model.generate(inputs[\u2018input_ids\u2019], num_beams=4, max_length=5, early_stopping=True).sequences
print([tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in reply_ids])`),Dm.forEach(t),Pd.forEach(t),Am.forEach(t),Om.forEach(t),te.forEach(t),qh=l(ee),tt=r(ee,"DIV",{class:!0});var zr=a(tt);g(Nn.$$.fragment,zr),Ch=l(zr),ks=r(zr,"P",{});var Gm=a(ks);Ph=d(Gm,"Example:"),Gm.forEach(t),jh=l(zr),g(On.$$.fragment,zr),zr.forEach(t),Nh=l(ee),ot=r(ee,"DIV",{class:!0});var Fr=a(ot);g(An.$$.fragment,Fr),Oh=l(Fr),ys=r(Fr,"P",{});var Wm=a(ys);Ah=d(Wm,"Example:"),Wm.forEach(t),Ih=l(Fr),g(In.$$.fragment,Fr),Fr.forEach(t),ee.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(n_)),c(T,"id","blenderbot"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#blenderbot"),c(m,"class","relative group"),c(ne,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ne,"rel","nofollow"),c(j,"id","overview"),c(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(j,"href","#overview"),c(G,"class","relative group"),c(W,"href","https://arxiv.org/pdf/2004.13637.pdf"),c(W,"rel","nofollow"),c(U,"href","https://huggingface.co/sshleifer"),c(U,"rel","nofollow"),c($,"href","https://github.com/facebookresearch/ParlAI"),c($,"rel","nofollow"),c(_e,"id","implementation-notes"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#implementation-notes"),c(P,"class","relative group"),c(se,"href","https://arxiv.org/pdf/1706.03762.pdf"),c(se,"rel","nofollow"),c(uo,"href","https://huggingface.co/models?search=blenderbot"),c(uo,"rel","nofollow"),c(Wn,"href","blenderbot_small"),c(Nt,"id","usage"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#usage"),c(_t,"class","relative group"),c(Ot,"id","transformers.BlenderbotConfig"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.BlenderbotConfig"),c(gt,"class","relative group"),c(Rn,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(bo,"href","https://huggingface.co/facebook/blenderbot-3B"),c(bo,"rel","nofollow"),c(Hn,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(de,"class","docstring"),c(At,"id","transformers.BlenderbotTokenizer"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.BlenderbotTokenizer"),c(kt,"class","relative group"),c(Vn,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Qn,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizer"),c(Je,"class","docstring"),c(ie,"class","docstring"),c(St,"id","transformers.BlenderbotTokenizerFast"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.BlenderbotTokenizerFast"),c(yt,"class","relative group"),c(Xn,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Yn,"href","/docs/transformers/v4.15.0/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(Xe,"class","docstring"),c(le,"class","docstring"),c(Dt,"id","transformers.BlenderbotModel"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.BlenderbotModel"),c(Tt,"class","relative group"),c(er,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Po,"rel","nofollow"),c(tr,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotModel"),c(ge,"class","docstring"),c(Be,"class","docstring"),c(Wt,"id","transformers.BlenderbotForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.BlenderbotForConditionalGeneration"),c(xt,"class","relative group"),c(or,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(nr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lo,"rel","nofollow"),c(rr,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration"),c(X,"class","docstring"),c(ze,"class","docstring"),c(Rt,"id","transformers.BlenderbotForCausalLM"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BlenderbotForCausalLM"),c(zt,"class","relative group"),c(Ye,"class","docstring"),c(Uo,"class","docstring"),c(Ht,"id","transformers.TFBlenderbotModel"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.TFBlenderbotModel"),c(Ft,"class","relative group"),c(ar,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xo,"rel","nofollow"),c(sr,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.TFBlenderbotModel"),c(be,"class","docstring"),c(ce,"class","docstring"),c(Qt,"id","transformers.TFBlenderbotForConditionalGeneration"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.TFBlenderbotForConditionalGeneration"),c(Et,"class","relative group"),c(dr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(ir,"href","/docs/transformers/v4.15.0/en/model_doc/blenderbot#transformers.TFBlenderbotForConditionalGeneration"),c(Y,"class","docstring"),c(pe,"class","docstring"),c(Yt,"id","transformers.FlaxBlenderbotModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.FlaxBlenderbotModel"),c(qt,"class","relative group"),c(lr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(hn,"rel","nofollow"),c(un,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(un,"rel","nofollow"),c(fn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fn,"rel","nofollow"),c(mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(mn,"rel","nofollow"),c(_n,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_n,"rel","nofollow"),c(ve,"class","docstring"),c(Ze,"class","docstring"),c(et,"class","docstring"),c(I,"class","docstring"),c(eo,"id","transformers.FlaxBlenderbotForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxBlenderbotForConditionalGeneration"),c(Pt,"class","relative group"),c(cr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Fn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Fn,"rel","nofollow"),c($n,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c($n,"rel","nofollow"),c(En,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(En,"rel","nofollow"),c(Mn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Mn,"rel","nofollow"),c(qn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(qn,"rel","nofollow"),c(no,"id","generate-reply"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#generate-reply"),c(oo,"class","relative group"),c(L,"class","docstring"),c(tt,"class","docstring"),c(ot,"class","docstring"),c(S,"class","docstring")},m(o,h){e(document.head,u),p(o,z,h),p(o,m,h),e(m,T),e(T,B),b(x,B,null),e(m,w),e(m,F),e(F,Ce),p(o,ue,h),p(o,E,h),e(E,ke),e(ke,oe),e(E,Pe),e(E,ne),e(ne,re),e(E,je),p(o,Fe,h),p(o,G,h),e(G,j),e(j,ye),b(R,ye,null),e(G,M),e(G,C),e(C,Ne),p(o,Q,h),p(o,J,h),e(J,Oe),e(J,W),e(W,Ae),e(J,Ie),p(o,N,h),p(o,fe,h),e(fe,ae),p(o,$e,h),p(o,me,h),e(me,H),e(H,Se),p(o,Ee,h),p(o,q,h),e(q,Le),e(q,U),e(U,De),e(q,f),e(q,$),e($,Te),e(q,ht),p(o,Ve,h),p(o,P,h),e(P,_e),e(_e,Ge),b(we,Ge,null),e(P,K),e(P,V),e(V,ut),p(o,Qe,h),p(o,O,h),e(O,xe),e(xe,ft),e(xe,se),e(se,mt),e(xe,Nd),e(O,Od),e(O,ho),e(ho,Ad),e(ho,uo),e(uo,Id),e(ho,Sd),e(O,Ld),e(O,We),e(We,Dd),e(We,$r),e($r,Gd),e(We,Wd),e(We,Er),e(Er,Ud),e(We,Rd),e(We,Wn),e(Wn,Hd),e(We,Kd),p(o,Es,h),p(o,_t,h),e(_t,Nt),e(Nt,Mr),b(fo,Mr,null),e(_t,Vd),e(_t,qr),e(qr,Qd),p(o,Ms,h),p(o,Un,h),e(Un,Jd),p(o,qs,h),b(mo,o,h),p(o,Cs,h),p(o,gt,h),e(gt,Ot),e(Ot,Cr),b(_o,Cr,null),e(gt,Xd),e(gt,Pr),e(Pr,Yd),p(o,Ps,h),p(o,de,h),b(go,de,null),e(de,Zd),e(de,bt),e(bt,ei),e(bt,Rn),e(Rn,ti),e(bt,oi),e(bt,bo),e(bo,ni),e(bt,ri),e(de,ai),e(de,vt),e(vt,si),e(vt,Hn),e(Hn,di),e(vt,ii),e(vt,Kn),e(Kn,li),e(vt,ci),e(de,pi),e(de,jr),e(jr,hi),e(de,ui),b(vo,de,null),p(o,js,h),p(o,kt,h),e(kt,At),e(At,Nr),b(ko,Nr,null),e(kt,fi),e(kt,Or),e(Or,mi),p(o,Ns,h),p(o,ie,h),b(yo,ie,null),e(ie,_i),e(ie,Ar),e(Ar,gi),e(ie,bi),e(ie,It),e(It,Ir),e(Ir,vi),e(It,ki),e(It,Vn),e(Vn,yi),e(It,Ti),e(ie,wi),e(ie,To),e(To,xi),e(To,Qn),e(Qn,Bi),e(To,zi),e(ie,Fi),e(ie,Je),b(wo,Je,null),e(Je,$i),e(Je,Sr),e(Sr,Ei),e(Je,Mi),e(Je,Lr),e(Lr,Jn),e(Jn,qi),e(Jn,Dr),e(Dr,Ci),p(o,Os,h),p(o,yt,h),e(yt,St),e(St,Gr),b(xo,Gr,null),e(yt,Pi),e(yt,Wr),e(Wr,ji),p(o,As,h),p(o,le,h),b(Bo,le,null),e(le,Ni),e(le,zo),e(zo,Oi),e(zo,Ur),e(Ur,Ai),e(zo,Ii),e(le,Si),e(le,Lt),e(Lt,Rr),e(Rr,Li),e(Lt,Di),e(Lt,Xn),e(Xn,Gi),e(Lt,Wi),e(le,Ui),e(le,Fo),e(Fo,Ri),e(Fo,Yn),e(Yn,Hi),e(Fo,Ki),e(le,Vi),e(le,Xe),b($o,Xe,null),e(Xe,Qi),e(Xe,Hr),e(Hr,Ji),e(Xe,Xi),e(Xe,Kr),e(Kr,Zn),e(Zn,Yi),e(Zn,Vr),e(Vr,Zi),p(o,Is,h),p(o,Tt,h),e(Tt,Dt),e(Dt,Qr),b(Eo,Qr,null),e(Tt,el),e(Tt,Jr),e(Jr,tl),p(o,Ss,h),p(o,Ue,h),e(Ue,ol),e(Ue,Xr),e(Xr,nl),e(Ue,rl),e(Ue,Yr),e(Yr,al),e(Ue,sl),e(Ue,Zr),e(Zr,dl),p(o,Ls,h),p(o,Be,h),b(Mo,Be,null),e(Be,il),e(Be,qo),e(qo,ll),e(qo,er),e(er,cl),e(qo,pl),e(Be,hl),e(Be,Co),e(Co,ul),e(Co,Po),e(Po,fl),e(Co,ml),e(Be,_l),e(Be,ge),b(jo,ge,null),e(ge,gl),e(ge,wt),e(wt,bl),e(wt,tr),e(tr,vl),e(wt,kl),e(wt,ea),e(ea,yl),e(wt,Tl),e(ge,wl),b(Gt,ge,null),e(ge,xl),e(ge,ta),e(ta,Bl),e(ge,zl),b(No,ge,null),p(o,Ds,h),p(o,xt,h),e(xt,Wt),e(Wt,oa),b(Oo,oa,null),e(xt,Fl),e(xt,na),e(na,$l),p(o,Gs,h),p(o,Re,h),e(Re,El),e(Re,or),e(or,Ml),e(Re,ql),e(Re,ra),e(ra,Cl),e(Re,Pl),e(Re,aa),e(aa,jl),p(o,Ws,h),p(o,ze,h),b(Ao,ze,null),e(ze,Nl),e(ze,Io),e(Io,Ol),e(Io,nr),e(nr,Al),e(Io,Il),e(ze,Sl),e(ze,So),e(So,Ll),e(So,Lo),e(Lo,Dl),e(So,Gl),e(ze,Wl),e(ze,X),b(Do,X,null),e(X,Ul),e(X,Bt),e(Bt,Rl),e(Bt,rr),e(rr,Hl),e(Bt,Kl),e(Bt,sa),e(sa,Vl),e(Bt,Ql),e(X,Jl),b(Ut,X,null),e(X,Xl),e(X,da),e(da,Yl),e(X,Zl),e(X,ia),e(ia,la),e(la,ca),e(ca,pa),e(pa,ec),e(X,tc),e(X,ha),e(ha,ua),e(ua,fa),e(fa,Go),e(Go,oc),e(Go,ma),e(ma,nc),e(Go,rc),p(o,Us,h),p(o,zt,h),e(zt,Rt),e(Rt,_a),b(Wo,_a,null),e(zt,ac),e(zt,ga),e(ga,sc),p(o,Rs,h),p(o,Uo,h),e(Uo,Ye),b(Ro,Ye,null),e(Ye,dc),e(Ye,ba),e(ba,ic),e(Ye,lc),b(Ho,Ye,null),p(o,Hs,h),p(o,Ft,h),e(Ft,Ht),e(Ht,va),b(Ko,va,null),e(Ft,cc),e(Ft,ka),e(ka,pc),p(o,Ks,h),p(o,ce,h),b(Vo,ce,null),e(ce,hc),e(ce,Qo),e(Qo,uc),e(Qo,ar),e(ar,fc),e(Qo,mc),e(ce,_c),e(ce,Jo),e(Jo,gc),e(Jo,Xo),e(Xo,bc),e(Jo,vc),e(ce,kc),b(Kt,ce,null),e(ce,yc),e(ce,be),b(Yo,be,null),e(be,Tc),e(be,$t),e($t,wc),e($t,sr),e(sr,xc),e($t,Bc),e($t,ya),e(ya,zc),e($t,Fc),e(be,$c),b(Vt,be,null),e(be,Ec),e(be,Ta),e(Ta,Mc),e(be,qc),b(Zo,be,null),p(o,Vs,h),p(o,Et,h),e(Et,Qt),e(Qt,wa),b(en,wa,null),e(Et,Cc),e(Et,xa),e(xa,Pc),p(o,Qs,h),p(o,pe,h),b(tn,pe,null),e(pe,jc),e(pe,on),e(on,Nc),e(on,dr),e(dr,Oc),e(on,Ac),e(pe,Ic),e(pe,nn),e(nn,Sc),e(nn,rn),e(rn,Lc),e(nn,Dc),e(pe,Gc),b(Jt,pe,null),e(pe,Wc),e(pe,Y),b(an,Y,null),e(Y,Uc),e(Y,Mt),e(Mt,Rc),e(Mt,ir),e(ir,Hc),e(Mt,Kc),e(Mt,Ba),e(Ba,Vc),e(Mt,Qc),e(Y,Jc),b(Xt,Y,null),e(Y,Xc),e(Y,za),e(za,Yc),e(Y,Zc),e(Y,Fa),e(Fa,$a),e($a,Ea),e(Ea,Ma),e(Ma,ep),e(Y,tp),e(Y,qa),e(qa,Ca),e(Ca,Pa),e(Pa,sn),e(sn,op),e(sn,ja),e(ja,np),e(sn,rp),p(o,Js,h),p(o,qt,h),e(qt,Yt),e(Yt,Na),b(dn,Na,null),e(qt,ap),e(qt,Oa),e(Oa,sp),p(o,Xs,h),p(o,I,h),b(ln,I,null),e(I,dp),e(I,cn),e(cn,ip),e(cn,lr),e(lr,lp),e(cn,cp),e(I,pp),e(I,pn),e(pn,hp),e(pn,hn),e(hn,up),e(pn,fp),e(I,mp),e(I,Aa),e(Aa,_p),e(I,gp),e(I,He),e(He,Ia),e(Ia,un),e(un,bp),e(He,vp),e(He,Sa),e(Sa,fn),e(fn,kp),e(He,yp),e(He,La),e(La,mn),e(mn,Tp),e(He,wp),e(He,Da),e(Da,_n),e(_n,xp),e(I,Bp),e(I,ve),b(gn,ve,null),e(ve,zp),e(ve,Ct),e(Ct,Fp),e(Ct,Ga),e(Ga,$p),e(Ct,Ep),e(Ct,Wa),e(Wa,Mp),e(Ct,qp),e(ve,Cp),b(Zt,ve,null),e(ve,Pp),e(ve,Ua),e(Ua,jp),e(ve,Np),b(bn,ve,null),e(I,Op),e(I,Ze),b(vn,Ze,null),e(Ze,Ap),e(Ze,Ra),e(Ra,Ip),e(Ze,Sp),b(kn,Ze,null),e(I,Lp),e(I,et),b(yn,et,null),e(et,Dp),e(et,Ha),e(Ha,Gp),e(et,Wp),b(Tn,et,null),p(o,Ys,h),p(o,Pt,h),e(Pt,eo),e(eo,Ka),b(wn,Ka,null),e(Pt,Up),e(Pt,Va),e(Va,Rp),p(o,Zs,h),p(o,S,h),b(xn,S,null),e(S,Hp),e(S,Bn),e(Bn,Kp),e(Bn,cr),e(cr,Vp),e(Bn,Qp),e(S,Jp),e(S,zn),e(zn,Xp),e(zn,Fn),e(Fn,Yp),e(zn,Zp),e(S,eh),e(S,Qa),e(Qa,th),e(S,oh),e(S,Ke),e(Ke,Ja),e(Ja,$n),e($n,nh),e(Ke,rh),e(Ke,Xa),e(Xa,En),e(En,ah),e(Ke,sh),e(Ke,Ya),e(Ya,Mn),e(Mn,dh),e(Ke,ih),e(Ke,Za),e(Za,qn),e(qn,lh),e(S,ch),e(S,L),b(Cn,L,null),e(L,ph),e(L,jt),e(jt,hh),e(jt,es),e(es,uh),e(jt,fh),e(jt,ts),e(ts,mh),e(jt,_h),e(L,gh),b(to,L,null),e(L,bh),e(L,os),e(os,vh),e(L,kh),e(L,ns),e(ns,rs),e(rs,as),e(as,ss),e(ss,yh),e(L,Th),e(L,ds),e(ds,is),e(is,ls),e(ls,cs),e(cs,wh),e(L,xh),e(L,ps),e(ps,hs),e(hs,us),e(us,fs),e(fs,Bh),e(L,zh),e(L,ms),e(ms,_s),e(_s,Pn),e(Pn,oo),e(oo,no),e(no,gs),b(jn,gs,null),e(oo,Fh),e(oo,bs),e(bs,$h),e(Pn,Eh),e(Pn,vs),e(vs,Mh),e(S,qh),e(S,tt),b(Nn,tt,null),e(tt,Ch),e(tt,ks),e(ks,Ph),e(tt,jh),b(On,tt,null),e(S,Nh),e(S,ot),b(An,ot,null),e(ot,Oh),e(ot,ys),e(ys,Ah),e(ot,Ih),b(In,ot,null),ed=!0},p(o,[h]){const Sn={};h&2&&(Sn.$$scope={dirty:h,ctx:o}),Gt.$set(Sn);const Ts={};h&2&&(Ts.$$scope={dirty:h,ctx:o}),Ut.$set(Ts);const ws={};h&2&&(ws.$$scope={dirty:h,ctx:o}),Kt.$set(ws);const xs={};h&2&&(xs.$$scope={dirty:h,ctx:o}),Vt.$set(xs);const ro={};h&2&&(ro.$$scope={dirty:h,ctx:o}),Jt.$set(ro);const Bs={};h&2&&(Bs.$$scope={dirty:h,ctx:o}),Xt.$set(Bs);const zs={};h&2&&(zs.$$scope={dirty:h,ctx:o}),Zt.$set(zs);const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:o}),to.$set(Ln)},i(o){ed||(v(x.$$.fragment,o),v(R.$$.fragment,o),v(we.$$.fragment,o),v(fo.$$.fragment,o),v(mo.$$.fragment,o),v(_o.$$.fragment,o),v(go.$$.fragment,o),v(vo.$$.fragment,o),v(ko.$$.fragment,o),v(yo.$$.fragment,o),v(wo.$$.fragment,o),v(xo.$$.fragment,o),v(Bo.$$.fragment,o),v($o.$$.fragment,o),v(Eo.$$.fragment,o),v(Mo.$$.fragment,o),v(jo.$$.fragment,o),v(Gt.$$.fragment,o),v(No.$$.fragment,o),v(Oo.$$.fragment,o),v(Ao.$$.fragment,o),v(Do.$$.fragment,o),v(Ut.$$.fragment,o),v(Wo.$$.fragment,o),v(Ro.$$.fragment,o),v(Ho.$$.fragment,o),v(Ko.$$.fragment,o),v(Vo.$$.fragment,o),v(Kt.$$.fragment,o),v(Yo.$$.fragment,o),v(Vt.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(Jt.$$.fragment,o),v(an.$$.fragment,o),v(Xt.$$.fragment,o),v(dn.$$.fragment,o),v(ln.$$.fragment,o),v(gn.$$.fragment,o),v(Zt.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(kn.$$.fragment,o),v(yn.$$.fragment,o),v(Tn.$$.fragment,o),v(wn.$$.fragment,o),v(xn.$$.fragment,o),v(Cn.$$.fragment,o),v(to.$$.fragment,o),v(jn.$$.fragment,o),v(Nn.$$.fragment,o),v(On.$$.fragment,o),v(An.$$.fragment,o),v(In.$$.fragment,o),ed=!0)},o(o){k(x.$$.fragment,o),k(R.$$.fragment,o),k(we.$$.fragment,o),k(fo.$$.fragment,o),k(mo.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(vo.$$.fragment,o),k(ko.$$.fragment,o),k(yo.$$.fragment,o),k(wo.$$.fragment,o),k(xo.$$.fragment,o),k(Bo.$$.fragment,o),k($o.$$.fragment,o),k(Eo.$$.fragment,o),k(Mo.$$.fragment,o),k(jo.$$.fragment,o),k(Gt.$$.fragment,o),k(No.$$.fragment,o),k(Oo.$$.fragment,o),k(Ao.$$.fragment,o),k(Do.$$.fragment,o),k(Ut.$$.fragment,o),k(Wo.$$.fragment,o),k(Ro.$$.fragment,o),k(Ho.$$.fragment,o),k(Ko.$$.fragment,o),k(Vo.$$.fragment,o),k(Kt.$$.fragment,o),k(Yo.$$.fragment,o),k(Vt.$$.fragment,o),k(Zo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(Jt.$$.fragment,o),k(an.$$.fragment,o),k(Xt.$$.fragment,o),k(dn.$$.fragment,o),k(ln.$$.fragment,o),k(gn.$$.fragment,o),k(Zt.$$.fragment,o),k(bn.$$.fragment,o),k(vn.$$.fragment,o),k(kn.$$.fragment,o),k(yn.$$.fragment,o),k(Tn.$$.fragment,o),k(wn.$$.fragment,o),k(xn.$$.fragment,o),k(Cn.$$.fragment,o),k(to.$$.fragment,o),k(jn.$$.fragment,o),k(Nn.$$.fragment,o),k(On.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),ed=!1},d(o){t(u),o&&t(z),o&&t(m),y(x),o&&t(ue),o&&t(E),o&&t(Fe),o&&t(G),y(R),o&&t(Q),o&&t(J),o&&t(N),o&&t(fe),o&&t($e),o&&t(me),o&&t(Ee),o&&t(q),o&&t(Ve),o&&t(P),y(we),o&&t(Qe),o&&t(O),o&&t(Es),o&&t(_t),y(fo),o&&t(Ms),o&&t(Un),o&&t(qs),y(mo,o),o&&t(Cs),o&&t(gt),y(_o),o&&t(Ps),o&&t(de),y(go),y(vo),o&&t(js),o&&t(kt),y(ko),o&&t(Ns),o&&t(ie),y(yo),y(wo),o&&t(Os),o&&t(yt),y(xo),o&&t(As),o&&t(le),y(Bo),y($o),o&&t(Is),o&&t(Tt),y(Eo),o&&t(Ss),o&&t(Ue),o&&t(Ls),o&&t(Be),y(Mo),y(jo),y(Gt),y(No),o&&t(Ds),o&&t(xt),y(Oo),o&&t(Gs),o&&t(Re),o&&t(Ws),o&&t(ze),y(Ao),y(Do),y(Ut),o&&t(Us),o&&t(zt),y(Wo),o&&t(Rs),o&&t(Uo),y(Ro),y(Ho),o&&t(Hs),o&&t(Ft),y(Ko),o&&t(Ks),o&&t(ce),y(Vo),y(Kt),y(Yo),y(Vt),y(Zo),o&&t(Vs),o&&t(Et),y(en),o&&t(Qs),o&&t(pe),y(tn),y(Jt),y(an),y(Xt),o&&t(Js),o&&t(qt),y(dn),o&&t(Xs),o&&t(I),y(ln),y(gn),y(Zt),y(bn),y(vn),y(kn),y(yn),y(Tn),o&&t(Ys),o&&t(Pt),y(wn),o&&t(Zs),o&&t(S),y(xn),y(Cn),y(to),y(jn),y(Nn),y(On),y(An),y(In)}}}const n_={local:"blenderbot",sections:[{local:"overview",title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"usage",title:"Usage"},{local:"transformers.BlenderbotConfig",title:"BlenderbotConfig"},{local:"transformers.BlenderbotTokenizer",title:"BlenderbotTokenizer"},{local:"transformers.BlenderbotTokenizerFast",title:"BlenderbotTokenizerFast"},{local:"transformers.BlenderbotModel",title:"BlenderbotModel"},{local:"transformers.BlenderbotForConditionalGeneration",title:"BlenderbotForConditionalGeneration"},{local:"transformers.BlenderbotForCausalLM",title:"BlenderbotForCausalLM"},{local:"transformers.TFBlenderbotModel",title:"TFBlenderbotModel"},{local:"transformers.TFBlenderbotForConditionalGeneration",title:"TFBlenderbotForConditionalGeneration"},{local:"transformers.FlaxBlenderbotModel",title:"FlaxBlenderbotModel"},{local:"transformers.FlaxBlenderbotForConditionalGeneration",title:"FlaxBlenderbotForConditionalGeneration"}],title:"Blenderbot"};function r_(D,u,z){let{fw:m}=u;return D.$$set=T=>{"fw"in T&&z(0,m=T.fw)},[m]}class p_ extends Um{constructor(u){super();Rm(this,u,r_,o_,Hm,{fw:0})}}export{p_ as default,n_ as metadata};
