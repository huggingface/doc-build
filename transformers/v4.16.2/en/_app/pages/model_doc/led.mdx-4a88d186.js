import{S as Lm,i as Dm,s as zm,e as n,k as i,w as _,t as r,L as Fm,c as s,d as t,m as l,a,x as g,h as d,b as c,J as e,g as h,y as v,q as T,o as k,B as b}from"../../chunks/vendor-b1433968.js";import{T as go}from"../../chunks/Tip-c3840994.js";import{D as M}from"../../chunks/Docstring-ff504c58.js";import{C as At}from"../../chunks/CodeBlock-a320dbd7.js";import{I as fe}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function $m(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function xm(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function Mm(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function Sm(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function Cm(j){let u,L,m,w,q,E,y,D,Ae,me,z,Z,W,te,Ne,U,je,Me,B,V,oe,Le,S,P,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),m=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),Z=r("This second option is useful when using "),W=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),P=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=s(f,"P",{});var F=a(u);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=s(f,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Ae=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),me=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var at=a(W);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var rt=a(U);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(f),V=s(f,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);P=s(X,"LI",{});var re=a(P);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Pe=a(ne);Se=d(Pe,"input_ids"),Pe.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var Re=a(N);He=d(Re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(Re,"CODE",{});var We=a(se);De=d(We,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),We.forEach(t),Re.forEach(t),X.forEach(t)},m(f,F){h(f,u,F),e(u,L),h(f,m,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Ae),h(f,me,F),h(f,z,F),e(z,Z),e(z,W),e(W,te),e(z,Ne),e(z,U),e(U,je),e(z,Me),h(f,B,F),h(f,V,F),e(V,oe),h(f,Le,F),h(f,S,F),e(S,P),e(P,_e),e(P,ne),e(ne,Se),e(P,ge),e(P,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,$),e(C,x),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(f){f&&t(u),f&&t(m),f&&t(w),f&&t(me),f&&t(z),f&&t(B),f&&t(V),f&&t(Le),f&&t(S)}}}function Om(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function Pm(j){let u,L,m,w,q,E,y,D,Ae,me,z,Z,W,te,Ne,U,je,Me,B,V,oe,Le,S,P,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),m=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),Z=r("This second option is useful when using "),W=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),P=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=s(f,"P",{});var F=a(u);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=s(f,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Ae=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),me=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),W=s(I,"CODE",{});var at=a(W);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=s(I,"CODE",{});var rt=a(U);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(f),V=s(f,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);P=s(X,"LI",{});var re=a(P);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Pe=a(ne);Se=d(Pe,"input_ids"),Pe.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var Re=a(N);He=d(Re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(Re,"CODE",{});var We=a(se);De=d(We,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),We.forEach(t),Re.forEach(t),X.forEach(t)},m(f,F){h(f,u,F),e(u,L),h(f,m,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Ae),h(f,me,F),h(f,z,F),e(z,Z),e(z,W),e(W,te),e(z,Ne),e(z,U),e(U,je),e(z,Me),h(f,B,F),h(f,V,F),e(V,oe),h(f,Le,F),h(f,S,F),e(S,P),e(P,_e),e(P,ne),e(ne,Se),e(P,ge),e(P,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,$),e(C,x),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(f){f&&t(u),f&&t(m),f&&t(w),f&&t(me),f&&t(z),f&&t(B),f&&t(V),f&&t(Le),f&&t(S)}}}function Am(j){let u,L,m,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,m),e(m,w),e(u,q)},d(E){E&&t(u)}}}function Nm(j){let u,L,m,w,q,E,y,D,Ae,me,z,Z,W,te,Ne,U,je,Me,B,V,oe,Le,S,P,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De,f,F,ae,nt,st,I,at,rt,Oe,X,re,Pe,dt,de,it,ie,Re,We,Md,Sd,zs,Cd,Od,Pd,ze,Ad,Fs,Nd,jd,$s,Id,Bd,Rn,Gd,Qd,xs,Hd,Rd,Wd,J,Ud,Ms,Vd,Kd,Ss,Xd,Jd,Wn,Zd,Yd,Cs,ei,ti,Os,oi,ni,Ps,si,ai,ri,lt,di,As,ii,li,Ns,ci,hi,pi,vo,ui,To,fi,mi,_i,ko,gi,bo,vi,Ti,pr,Nt,ki,wo,bi,wi,ur,ct,jt,js,yo,yi,Is,Ei,fr,O,Eo,qi,ht,Li,Un,Di,zi,qo,Fi,$i,xi,pt,Mi,Vn,Si,Ci,Kn,Oi,Pi,Ai,Bs,Ni,ji,Lo,Ii,Gs,Qs,Hs,Rs,Bi,Gi,Ws,Us,Vs,It,Bt,Ks,Do,Qi,Xs,Hi,Ri,Js,Zs,zo,Gt,Qt,Ys,Fo,Wi,ea,Ui,Vi,ta,Ki,Xi,oa,na,sa,Ht,Rt,aa,$o,Ji,ra,Zi,mr,ut,Wt,da,xo,Yi,ia,el,_r,A,Mo,tl,la,ol,nl,Ut,Xn,sl,al,Jn,rl,dl,il,So,ll,Zn,cl,hl,pl,Ue,Co,ul,ca,fl,ml,Oo,Yn,_l,ha,gl,vl,es,Tl,pa,kl,bl,Vt,Po,wl,Ao,yl,ua,El,ql,Ll,Kt,No,Dl,fa,zl,Fl,ma,gr,ft,Xt,_a,jo,$l,ga,xl,vr,Fe,Io,Ml,Bo,Sl,va,Cl,Ol,Pl,Jt,ts,Al,Nl,os,jl,Il,Bl,Go,Gl,ns,Ql,Hl,Tr,mt,Zt,Ta,Qo,Rl,ka,Wl,kr,_t,Ho,Ul,ba,Vl,br,gt,Ro,Kl,wa,Xl,wr,vt,Wo,Jl,ya,Zl,yr,Tt,Uo,Yl,Ea,ec,Er,kt,Vo,tc,qa,oc,qr,bt,Ko,nc,La,sc,Lr,wt,Xo,ac,Da,rc,Dr,yt,Jo,dc,za,ic,zr,Et,Yt,Fa,Zo,lc,$a,cc,Fr,$e,Yo,hc,en,pc,ss,uc,fc,mc,tn,_c,on,gc,vc,Tc,ve,nn,kc,qt,bc,as,wc,yc,xa,Ec,qc,Lc,eo,Dc,Ma,zc,Fc,sn,$r,Lt,to,Sa,an,$c,Ca,xc,xr,xe,rn,Mc,dn,Sc,rs,Cc,Oc,Pc,ln,Ac,cn,Nc,jc,Ic,Q,hn,Bc,Dt,Gc,ds,Qc,Hc,Oa,Rc,Wc,Uc,oo,Vc,Pa,Kc,Xc,pn,Jc,Aa,Zc,Yc,un,Mr,zt,no,Na,fn,eh,ja,th,Sr,le,mn,oh,Ia,nh,sh,_n,ah,is,rh,dh,ih,gn,lh,vn,ch,hh,ph,H,Tn,uh,Ft,fh,ls,mh,_h,Ba,gh,vh,Th,so,kh,Ga,bh,wh,kn,yh,Qa,Eh,qh,bn,Cr,$t,ao,Ha,wn,Lh,Ra,Dh,Or,ce,yn,zh,xt,Fh,Wa,$h,xh,Ua,Mh,Sh,Ch,En,Oh,cs,Ph,Ah,Nh,qn,jh,Ln,Ih,Bh,Gh,Te,Dn,Qh,Mt,Hh,hs,Rh,Wh,Va,Uh,Vh,Kh,ro,Xh,Ka,Jh,Zh,zn,Pr,St,io,Xa,Fn,Yh,Ja,ep,Ar,he,$n,tp,xn,op,ps,np,sp,ap,Mn,rp,Sn,dp,ip,lp,lo,cp,ke,Cn,hp,Ct,pp,us,up,fp,Za,mp,_p,gp,co,vp,Ya,Tp,kp,On,Nr,Ot,ho,er,Pn,bp,tr,wp,jr,pe,An,yp,Nn,Ep,fs,qp,Lp,Dp,jn,zp,In,Fp,$p,xp,po,Mp,be,Bn,Sp,Pt,Cp,ms,Op,Pp,or,Ap,Np,jp,uo,Ip,nr,Bp,Gp,Gn,Ir;return E=new fe({}),te=new fe({}),yo=new fe({}),Eo=new M({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new At({props:{code:",",highlighted:""}}),Do=new fe({}),Fo=new fe({}),$o=new fe({}),xo=new fe({}),Mo=new M({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/tokenization_led.py#L39"}}),Co=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/roberta/tokenization_roberta.py#L181",parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/roberta/tokenization_roberta.py#L206",parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/roberta/tokenization_roberta.py#L233",parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new fe({}),Io=new M({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/tokenization_led_fast.py#L40"}}),Qo=new fe({}),Ho=new M({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Ro=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Wo=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Uo=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L1323",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Xo=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L1366",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Jo=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L1434",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new fe({}),Yo=new M({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nn=new M({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),eo=new go({props:{$$slots:{default:[$m]},$$scope:{ctx:j}}}),sn=new At({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new fe({}),rn=new M({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new M({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),oo=new go({props:{$$slots:{default:[xm]},$$scope:{ctx:j}}}),pn=new At({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),un=new At({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained("allenai/led-large-16384-arxiv")
tokenizer = LEDTokenizer.from_pretrained("allenai/led-large-16384-arxiv")

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
    results in a wide range of natural language tasks including generative language modeling
    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
    This success is partly due to the self-attention component which enables the network to capture contextual
    information from the entire sequence. While powerful, the memory and computational requirements of
    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
    process long sequences. To address this limitation, we present Longformer, a modified Transformer
    architecture with a self-attention operation that scales linearly with the sequence length, making it
    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
    long document classification, question answering (QA), and coreference resolution, where existing approaches
    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
    cross-partition information, and to mitigate this problem, existing methods often rely on complex
    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
    contextual representations of the entire context using multiple layers of attention, reducing the need for
    task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors="pt")

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=3, max_length=32)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new fe({}),mn=new M({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2465",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Tn=new M({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2478",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new go({props:{$$slots:{default:[Mm]},$$scope:{ctx:j}}}),kn=new At({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),bn=new At({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wn=new fe({}),yn=new M({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2593",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new M({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_led.py#L2605",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new go({props:{$$slots:{default:[Sm]},$$scope:{ctx:j}}}),zn=new At({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Fn=new fe({}),$n=new M({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L2230",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Cm]},$$scope:{ctx:j}}}),Cn=new M({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L2242",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new go({props:{$$slots:{default:[Om]},$$scope:{ctx:j}}}),On=new At({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new fe({}),An=new M({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L2335",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new go({props:{$$slots:{default:[Pm]},$$scope:{ctx:j}}}),Bn=new M({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/led/modeling_tf_led.py#L2368",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.16.2/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new go({props:{$$slots:{default:[Am]},$$scope:{ctx:j}}}),Gn=new At({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=i(),m=n("h1"),w=n("a"),q=n("span"),_(E.$$.fragment),y=i(),D=n("span"),Ae=r("LED"),me=i(),z=n("h2"),Z=n("a"),W=n("span"),_(te.$$.fragment),Ne=i(),U=n("span"),je=r("Overview"),Me=i(),B=n("p"),V=r("The LED model was proposed in "),oe=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),P=i(),_e=n("p"),ne=r("The abstract from the paper is the following:"),Se=i(),ge=n("p"),K=n("em"),Ie=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ce=i(),C=n("p"),Be=r("Tips:"),Y=i(),$=n("ul"),x=n("li"),G=n("a"),Ge=r("LEDForConditionalGeneration"),Qe=r(` is an extension of
`),N=n("a"),He=r("BartForConditionalGeneration"),se=r(" exchanging the traditional "),De=n("em"),f=r("self-attention"),F=r(` layer with
`),ae=n("em"),nt=r("Longformer"),st=r("\u2019s "),I=n("em"),at=r("chunked self-attention"),rt=r(" layer. "),Oe=n("a"),X=r("LEDTokenizer"),re=r(` is an alias of
`),Pe=n("a"),dt=r("BartTokenizer"),de=r("."),it=i(),ie=n("li"),Re=r("LED works very well on long-range "),We=n("em"),Md=r("sequence-to-sequence"),Sd=r(" tasks where the "),zs=n("code"),Cd=r("input_ids"),Od=r(` largely exceed a length of
1024 tokens.`),Pd=i(),ze=n("li"),Ad=r("LED pads the "),Fs=n("code"),Nd=r("input_ids"),jd=r(" to be a multiple of "),$s=n("code"),Id=r("config.attention_window"),Bd=r(` if required. Therefore a small speed-up is
gained, when `),Rn=n("a"),Gd=r("LEDTokenizer"),Qd=r(" is used with the "),xs=n("code"),Hd=r("pad_to_multiple_of"),Rd=r(" argument."),Wd=i(),J=n("li"),Ud=r("LED makes use of "),Ms=n("em"),Vd=r("global attention"),Kd=r(" by means of the "),Ss=n("code"),Xd=r("global_attention_mask"),Jd=r(` (see
`),Wn=n("a"),Zd=r("LongformerModel"),Yd=r("). For summarization, it is advised to put "),Cs=n("em"),ei=r("global attention"),ti=r(` only on the first
`),Os=n("code"),oi=r("<s>"),ni=r(" token. For question answering, it is advised to put "),Ps=n("em"),si=r("global attention"),ai=r(" on all tokens of the question."),ri=i(),lt=n("li"),di=r("To fine-tune LED on all 16384, it is necessary to enable "),As=n("em"),ii=r("gradient checkpointing"),li=r(` by executing
`),Ns=n("code"),ci=r("model.gradient_checkpointing_enable()"),hi=r("."),pi=i(),vo=n("li"),ui=r("A notebook showing how to evaluate LED, can be accessed "),To=n("a"),fi=r("here"),mi=r("."),_i=i(),ko=n("li"),gi=r("A notebook showing how to fine-tune LED, can be accessed "),bo=n("a"),vi=r("here"),Ti=r("."),pr=i(),Nt=n("p"),ki=r("This model was contributed by "),wo=n("a"),bi=r("patrickvonplaten"),wi=r("."),ur=i(),ct=n("h2"),jt=n("a"),js=n("span"),_(yo.$$.fragment),yi=i(),Is=n("span"),Ei=r("LEDConfig"),fr=i(),O=n("div"),_(Eo.$$.fragment),qi=i(),ht=n("p"),Li=r("This is the configuration class to store the configuration of a "),Un=n("a"),Di=r("LEDModel"),zi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Fi=r("allenai/led-base-16384"),$i=r(" architecture."),xi=i(),pt=n("p"),Mi=r("Configuration objects inherit from "),Vn=n("a"),Si=r("PretrainedConfig"),Ci=r(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),Oi=r("PretrainedConfig"),Pi=r(" for more information."),Ai=i(),Bs=n("p"),Ni=r("Example:"),ji=i(),_(Lo.$$.fragment),Ii=i(),Gs=n("blockquote"),Qs=n("blockquote"),Hs=n("blockquote"),Rs=n("p"),Bi=r("from transformers import LEDModel, LEDConfig"),Gi=i(),Ws=n("blockquote"),Us=n("blockquote"),Vs=n("blockquote"),It=n("h1"),Bt=n("a"),Ks=n("span"),_(Do.$$.fragment),Qi=i(),Xs=n("span"),Hi=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Ri=i(),Js=n("blockquote"),Zs=n("blockquote"),zo=n("blockquote"),Gt=n("h1"),Qt=n("a"),Ys=n("span"),_(Fo.$$.fragment),Wi=i(),ea=n("span"),Ui=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Vi=i(),ta=n("p"),Ki=r("LEDModel(configuration)"),Xi=i(),oa=n("blockquote"),na=n("blockquote"),sa=n("blockquote"),Ht=n("h1"),Rt=n("a"),aa=n("span"),_($o.$$.fragment),Ji=i(),ra=n("span"),Zi=r("Accessing the model configuration >>> configuration = model.config"),mr=i(),ut=n("h2"),Wt=n("a"),da=n("span"),_(xo.$$.fragment),Yi=i(),ia=n("span"),el=r("LEDTokenizer"),_r=i(),A=n("div"),_(Mo.$$.fragment),tl=i(),la=n("p"),ol=r("Construct a LED tokenizer."),nl=i(),Ut=n("p"),Xn=n("a"),sl=r("LEDTokenizer"),al=r(" is identical to "),Jn=n("a"),rl=r("BartTokenizer"),dl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),il=i(),So=n("p"),ll=r("Refer to superclass "),Zn=n("a"),cl=r("BartTokenizer"),hl=r(" for usage examples and documentation concerning parameters."),pl=i(),Ue=n("div"),_(Co.$$.fragment),ul=i(),ca=n("p"),fl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),ml=i(),Oo=n("ul"),Yn=n("li"),_l=r("single sequence: "),ha=n("code"),gl=r("<s> X </s>"),vl=i(),es=n("li"),Tl=r("pair of sequences: "),pa=n("code"),kl=r("<s> A </s></s> B </s>"),bl=i(),Vt=n("div"),_(Po.$$.fragment),wl=i(),Ao=n("p"),yl=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=n("code"),El=r("prepare_for_model"),ql=r(" method."),Ll=i(),Kt=n("div"),_(No.$$.fragment),Dl=i(),fa=n("p"),zl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Fl=i(),ma=n("div"),gr=i(),ft=n("h2"),Xt=n("a"),_a=n("span"),_(jo.$$.fragment),$l=i(),ga=n("span"),xl=r("LEDTokenizerFast"),vr=i(),Fe=n("div"),_(Io.$$.fragment),Ml=i(),Bo=n("p"),Sl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),va=n("em"),Cl=r("tokenizers"),Ol=r(" library)."),Pl=i(),Jt=n("p"),ts=n("a"),Al=r("LEDTokenizerFast"),Nl=r(" is identical to "),os=n("a"),jl=r("BartTokenizerFast"),Il=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Bl=i(),Go=n("p"),Gl=r("Refer to superclass "),ns=n("a"),Ql=r("BartTokenizerFast"),Hl=r(" for usage examples and documentation concerning parameters."),Tr=i(),mt=n("h2"),Zt=n("a"),Ta=n("span"),_(Qo.$$.fragment),Rl=i(),ka=n("span"),Wl=r("LED specific outputs"),kr=i(),_t=n("div"),_(Ho.$$.fragment),Ul=i(),ba=n("p"),Vl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),br=i(),gt=n("div"),_(Ro.$$.fragment),Kl=i(),wa=n("p"),Xl=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),wr=i(),vt=n("div"),_(Wo.$$.fragment),Jl=i(),ya=n("p"),Zl=r("Base class for sequence-to-sequence language models outputs."),yr=i(),Tt=n("div"),_(Uo.$$.fragment),Yl=i(),Ea=n("p"),ec=r("Base class for outputs of sequence-to-sequence sentence classification models."),Er=i(),kt=n("div"),_(Vo.$$.fragment),tc=i(),qa=n("p"),oc=r("Base class for outputs of sequence-to-sequence question answering models."),qr=i(),bt=n("div"),_(Ko.$$.fragment),nc=i(),La=n("p"),sc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Lr=i(),wt=n("div"),_(Xo.$$.fragment),ac=i(),Da=n("p"),rc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dr=i(),yt=n("div"),_(Jo.$$.fragment),dc=i(),za=n("p"),ic=r("Base class for sequence-to-sequence language models outputs."),zr=i(),Et=n("h2"),Yt=n("a"),Fa=n("span"),_(Zo.$$.fragment),lc=i(),$a=n("span"),cc=r("LEDModel"),Fr=i(),$e=n("div"),_(Yo.$$.fragment),hc=i(),en=n("p"),pc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=n("a"),uc=r("PreTrainedModel"),fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc=i(),tn=n("p"),_c=r("This model is also a PyTorch "),on=n("a"),gc=r("torch.nn.Module"),vc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=i(),ve=n("div"),_(nn.$$.fragment),kc=i(),qt=n("p"),bc=r("The "),as=n("a"),wc=r("LEDModel"),yc=r(" forward method, overrides the "),xa=n("code"),Ec=r("__call__"),qc=r(" special method."),Lc=i(),_(eo.$$.fragment),Dc=i(),Ma=n("p"),zc=r("Example:"),Fc=i(),_(sn.$$.fragment),$r=i(),Lt=n("h2"),to=n("a"),Sa=n("span"),_(an.$$.fragment),$c=i(),Ca=n("span"),xc=r("LEDForConditionalGeneration"),xr=i(),xe=n("div"),_(rn.$$.fragment),Mc=i(),dn=n("p"),Sc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=n("a"),Cc=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc=i(),ln=n("p"),Ac=r("This model is also a PyTorch "),cn=n("a"),Nc=r("torch.nn.Module"),jc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ic=i(),Q=n("div"),_(hn.$$.fragment),Bc=i(),Dt=n("p"),Gc=r("The "),ds=n("a"),Qc=r("LEDForConditionalGeneration"),Hc=r(" forward method, overrides the "),Oa=n("code"),Rc=r("__call__"),Wc=r(" special method."),Uc=i(),_(oo.$$.fragment),Vc=i(),Pa=n("p"),Kc=r("Conditional generation example:"),Xc=i(),_(pn.$$.fragment),Jc=i(),Aa=n("p"),Zc=r("Summarization example:"),Yc=i(),_(un.$$.fragment),Mr=i(),zt=n("h2"),no=n("a"),Na=n("span"),_(fn.$$.fragment),eh=i(),ja=n("span"),th=r("LEDForSequenceClassification"),Sr=i(),le=n("div"),_(mn.$$.fragment),oh=i(),Ia=n("p"),nh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),sh=i(),_n=n("p"),ah=r("This model inherits from "),is=n("a"),rh=r("PreTrainedModel"),dh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih=i(),gn=n("p"),lh=r("This model is also a PyTorch "),vn=n("a"),ch=r("torch.nn.Module"),hh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph=i(),H=n("div"),_(Tn.$$.fragment),uh=i(),Ft=n("p"),fh=r("The "),ls=n("a"),mh=r("LEDForSequenceClassification"),_h=r(" forward method, overrides the "),Ba=n("code"),gh=r("__call__"),vh=r(" special method."),Th=i(),_(so.$$.fragment),kh=i(),Ga=n("p"),bh=r("Example of single-label classification:"),wh=i(),_(kn.$$.fragment),yh=i(),Qa=n("p"),Eh=r("Example of multi-label classification:"),qh=i(),_(bn.$$.fragment),Cr=i(),$t=n("h2"),ao=n("a"),Ha=n("span"),_(wn.$$.fragment),Lh=i(),Ra=n("span"),Dh=r("LEDForQuestionAnswering"),Or=i(),ce=n("div"),_(yn.$$.fragment),zh=i(),xt=n("p"),Fh=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Wa=n("code"),$h=r("span start logits"),xh=r(" and "),Ua=n("code"),Mh=r("span end logits"),Sh=r(")."),Ch=i(),En=n("p"),Oh=r("This model inherits from "),cs=n("a"),Ph=r("PreTrainedModel"),Ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh=i(),qn=n("p"),jh=r("This model is also a PyTorch "),Ln=n("a"),Ih=r("torch.nn.Module"),Bh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gh=i(),Te=n("div"),_(Dn.$$.fragment),Qh=i(),Mt=n("p"),Hh=r("The "),hs=n("a"),Rh=r("LEDForQuestionAnswering"),Wh=r(" forward method, overrides the "),Va=n("code"),Uh=r("__call__"),Vh=r(" special method."),Kh=i(),_(ro.$$.fragment),Xh=i(),Ka=n("p"),Jh=r("Example:"),Zh=i(),_(zn.$$.fragment),Pr=i(),St=n("h2"),io=n("a"),Xa=n("span"),_(Fn.$$.fragment),Yh=i(),Ja=n("span"),ep=r("TFLEDModel"),Ar=i(),he=n("div"),_($n.$$.fragment),tp=i(),xn=n("p"),op=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=n("a"),np=r("TFPreTrainedModel"),sp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=i(),Mn=n("p"),rp=r("This model is also a "),Sn=n("a"),dp=r("tf.keras.Model"),ip=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lp=i(),_(lo.$$.fragment),cp=i(),ke=n("div"),_(Cn.$$.fragment),hp=i(),Ct=n("p"),pp=r("The "),us=n("a"),up=r("TFLEDModel"),fp=r(" forward method, overrides the "),Za=n("code"),mp=r("__call__"),_p=r(" special method."),gp=i(),_(co.$$.fragment),vp=i(),Ya=n("p"),Tp=r("Example:"),kp=i(),_(On.$$.fragment),Nr=i(),Ot=n("h2"),ho=n("a"),er=n("span"),_(Pn.$$.fragment),bp=i(),tr=n("span"),wp=r("TFLEDForConditionalGeneration"),jr=i(),pe=n("div"),_(An.$$.fragment),yp=i(),Nn=n("p"),Ep=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=n("a"),qp=r("TFPreTrainedModel"),Lp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp=i(),jn=n("p"),zp=r("This model is also a "),In=n("a"),Fp=r("tf.keras.Model"),$p=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xp=i(),_(po.$$.fragment),Mp=i(),be=n("div"),_(Bn.$$.fragment),Sp=i(),Pt=n("p"),Cp=r("The "),ms=n("a"),Op=r("TFLEDForConditionalGeneration"),Pp=r(" forward method, overrides the "),or=n("code"),Ap=r("__call__"),Np=r(" special method."),jp=i(),_(uo.$$.fragment),Ip=i(),nr=n("p"),Bp=r("Examples:"),Gp=i(),_(Gn.$$.fragment),this.h()},l(o){const p=Fm('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),m=s(o,"H1",{class:!0});var Qn=a(m);w=s(Qn,"A",{id:!0,class:!0,href:!0});var sr=a(w);q=s(sr,"SPAN",{});var ar=a(q);g(E.$$.fragment,ar),ar.forEach(t),sr.forEach(t),y=l(Qn),D=s(Qn,"SPAN",{});var rr=a(D);Ae=d(rr,"LED"),rr.forEach(t),Qn.forEach(t),me=l(o),z=s(o,"H2",{class:!0});var Hn=a(z);Z=s(Hn,"A",{id:!0,class:!0,href:!0});var dr=a(Z);W=s(dr,"SPAN",{});var ir=a(W);g(te.$$.fragment,ir),ir.forEach(t),dr.forEach(t),Ne=l(Hn),U=s(Hn,"SPAN",{});var lr=a(U);je=d(lr,"Overview"),lr.forEach(t),Hn.forEach(t),Me=l(o),B=s(o,"P",{});var Br=a(B);V=d(Br,"The LED model was proposed in "),oe=s(Br,"A",{href:!0,rel:!0});var Rp=a(oe);Le=d(Rp,"Longformer: The Long-Document Transformer"),Rp.forEach(t),S=d(Br,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Br.forEach(t),P=l(o),_e=s(o,"P",{});var Wp=a(_e);ne=d(Wp,"The abstract from the paper is the following:"),Wp.forEach(t),Se=l(o),ge=s(o,"P",{});var Up=a(ge);K=s(Up,"EM",{});var Vp=a(K);Ie=d(Vp,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Vp.forEach(t),Up.forEach(t),Ce=l(o),C=s(o,"P",{});var Kp=a(C);Be=d(Kp,"Tips:"),Kp.forEach(t),Y=l(o),$=s(o,"UL",{});var we=a($);x=s(we,"LI",{});var ue=a(x);G=s(ue,"A",{href:!0});var Xp=a(G);Ge=d(Xp,"LEDForConditionalGeneration"),Xp.forEach(t),Qe=d(ue,` is an extension of
`),N=s(ue,"A",{href:!0});var Jp=a(N);He=d(Jp,"BartForConditionalGeneration"),Jp.forEach(t),se=d(ue," exchanging the traditional "),De=s(ue,"EM",{});var Zp=a(De);f=d(Zp,"self-attention"),Zp.forEach(t),F=d(ue,` layer with
`),ae=s(ue,"EM",{});var Yp=a(ae);nt=d(Yp,"Longformer"),Yp.forEach(t),st=d(ue,"\u2019s "),I=s(ue,"EM",{});var eu=a(I);at=d(eu,"chunked self-attention"),eu.forEach(t),rt=d(ue," layer. "),Oe=s(ue,"A",{href:!0});var tu=a(Oe);X=d(tu,"LEDTokenizer"),tu.forEach(t),re=d(ue,` is an alias of
`),Pe=s(ue,"A",{href:!0});var ou=a(Pe);dt=d(ou,"BartTokenizer"),ou.forEach(t),de=d(ue,"."),ue.forEach(t),it=l(we),ie=s(we,"LI",{});var _s=a(ie);Re=d(_s,"LED works very well on long-range "),We=s(_s,"EM",{});var nu=a(We);Md=d(nu,"sequence-to-sequence"),nu.forEach(t),Sd=d(_s," tasks where the "),zs=s(_s,"CODE",{});var su=a(zs);Cd=d(su,"input_ids"),su.forEach(t),Od=d(_s,` largely exceed a length of
1024 tokens.`),_s.forEach(t),Pd=l(we),ze=s(we,"LI",{});var Ve=a(ze);Ad=d(Ve,"LED pads the "),Fs=s(Ve,"CODE",{});var au=a(Fs);Nd=d(au,"input_ids"),au.forEach(t),jd=d(Ve," to be a multiple of "),$s=s(Ve,"CODE",{});var ru=a($s);Id=d(ru,"config.attention_window"),ru.forEach(t),Bd=d(Ve,` if required. Therefore a small speed-up is
gained, when `),Rn=s(Ve,"A",{href:!0});var du=a(Rn);Gd=d(du,"LEDTokenizer"),du.forEach(t),Qd=d(Ve," is used with the "),xs=s(Ve,"CODE",{});var iu=a(xs);Hd=d(iu,"pad_to_multiple_of"),iu.forEach(t),Rd=d(Ve," argument."),Ve.forEach(t),Wd=l(we),J=s(we,"LI",{});var ye=a(J);Ud=d(ye,"LED makes use of "),Ms=s(ye,"EM",{});var lu=a(Ms);Vd=d(lu,"global attention"),lu.forEach(t),Kd=d(ye," by means of the "),Ss=s(ye,"CODE",{});var cu=a(Ss);Xd=d(cu,"global_attention_mask"),cu.forEach(t),Jd=d(ye,` (see
`),Wn=s(ye,"A",{href:!0});var hu=a(Wn);Zd=d(hu,"LongformerModel"),hu.forEach(t),Yd=d(ye,"). For summarization, it is advised to put "),Cs=s(ye,"EM",{});var pu=a(Cs);ei=d(pu,"global attention"),pu.forEach(t),ti=d(ye,` only on the first
`),Os=s(ye,"CODE",{});var uu=a(Os);oi=d(uu,"<s>"),uu.forEach(t),ni=d(ye," token. For question answering, it is advised to put "),Ps=s(ye,"EM",{});var fu=a(Ps);si=d(fu,"global attention"),fu.forEach(t),ai=d(ye," on all tokens of the question."),ye.forEach(t),ri=l(we),lt=s(we,"LI",{});var gs=a(lt);di=d(gs,"To fine-tune LED on all 16384, it is necessary to enable "),As=s(gs,"EM",{});var mu=a(As);ii=d(mu,"gradient checkpointing"),mu.forEach(t),li=d(gs,` by executing
`),Ns=s(gs,"CODE",{});var _u=a(Ns);ci=d(_u,"model.gradient_checkpointing_enable()"),_u.forEach(t),hi=d(gs,"."),gs.forEach(t),pi=l(we),vo=s(we,"LI",{});var Gr=a(vo);ui=d(Gr,"A notebook showing how to evaluate LED, can be accessed "),To=s(Gr,"A",{href:!0,rel:!0});var gu=a(To);fi=d(gu,"here"),gu.forEach(t),mi=d(Gr,"."),Gr.forEach(t),_i=l(we),ko=s(we,"LI",{});var Qr=a(ko);gi=d(Qr,"A notebook showing how to fine-tune LED, can be accessed "),bo=s(Qr,"A",{href:!0,rel:!0});var vu=a(bo);vi=d(vu,"here"),vu.forEach(t),Ti=d(Qr,"."),Qr.forEach(t),we.forEach(t),pr=l(o),Nt=s(o,"P",{});var Hr=a(Nt);ki=d(Hr,"This model was contributed by "),wo=s(Hr,"A",{href:!0,rel:!0});var Tu=a(wo);bi=d(Tu,"patrickvonplaten"),Tu.forEach(t),wi=d(Hr,"."),Hr.forEach(t),ur=l(o),ct=s(o,"H2",{class:!0});var Rr=a(ct);jt=s(Rr,"A",{id:!0,class:!0,href:!0});var ku=a(jt);js=s(ku,"SPAN",{});var bu=a(js);g(yo.$$.fragment,bu),bu.forEach(t),ku.forEach(t),yi=l(Rr),Is=s(Rr,"SPAN",{});var wu=a(Is);Ei=d(wu,"LEDConfig"),wu.forEach(t),Rr.forEach(t),fr=l(o),O=s(o,"DIV",{class:!0});var R=a(O);g(Eo.$$.fragment,R),qi=l(R),ht=s(R,"P",{});var vs=a(ht);Li=d(vs,"This is the configuration class to store the configuration of a "),Un=s(vs,"A",{href:!0});var yu=a(Un);Di=d(yu,"LEDModel"),yu.forEach(t),zi=d(vs,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(vs,"A",{href:!0,rel:!0});var Eu=a(qo);Fi=d(Eu,"allenai/led-base-16384"),Eu.forEach(t),$i=d(vs," architecture."),vs.forEach(t),xi=l(R),pt=s(R,"P",{});var Ts=a(pt);Mi=d(Ts,"Configuration objects inherit from "),Vn=s(Ts,"A",{href:!0});var qu=a(Vn);Si=d(qu,"PretrainedConfig"),qu.forEach(t),Ci=d(Ts,` and can be used to control the model outputs. Read the
documentation from `),Kn=s(Ts,"A",{href:!0});var Lu=a(Kn);Oi=d(Lu,"PretrainedConfig"),Lu.forEach(t),Pi=d(Ts," for more information."),Ts.forEach(t),Ai=l(R),Bs=s(R,"P",{});var Du=a(Bs);Ni=d(Du,"Example:"),Du.forEach(t),ji=l(R),g(Lo.$$.fragment,R),Ii=l(R),Gs=s(R,"BLOCKQUOTE",{});var zu=a(Gs);Qs=s(zu,"BLOCKQUOTE",{});var Fu=a(Qs);Hs=s(Fu,"BLOCKQUOTE",{});var $u=a(Hs);Rs=s($u,"P",{});var xu=a(Rs);Bi=d(xu,"from transformers import LEDModel, LEDConfig"),xu.forEach(t),$u.forEach(t),Fu.forEach(t),zu.forEach(t),Gi=l(R),Ws=s(R,"BLOCKQUOTE",{});var Mu=a(Ws);Us=s(Mu,"BLOCKQUOTE",{});var Su=a(Us);Vs=s(Su,"BLOCKQUOTE",{});var Cu=a(Vs);It=s(Cu,"H1",{class:!0});var Wr=a(It);Bt=s(Wr,"A",{id:!0,class:!0,href:!0});var Ou=a(Bt);Ks=s(Ou,"SPAN",{});var Pu=a(Ks);g(Do.$$.fragment,Pu),Pu.forEach(t),Ou.forEach(t),Qi=l(Wr),Xs=s(Wr,"SPAN",{});var Au=a(Xs);Hi=d(Au,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Au.forEach(t),Wr.forEach(t),Cu.forEach(t),Su.forEach(t),Mu.forEach(t),Ri=l(R),Js=s(R,"BLOCKQUOTE",{});var Nu=a(Js);Zs=s(Nu,"BLOCKQUOTE",{});var ju=a(Zs);zo=s(ju,"BLOCKQUOTE",{});var Ur=a(zo);Gt=s(Ur,"H1",{class:!0});var Vr=a(Gt);Qt=s(Vr,"A",{id:!0,class:!0,href:!0});var Iu=a(Qt);Ys=s(Iu,"SPAN",{});var Bu=a(Ys);g(Fo.$$.fragment,Bu),Bu.forEach(t),Iu.forEach(t),Wi=l(Vr),ea=s(Vr,"SPAN",{});var Gu=a(ea);Ui=d(Gu,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Gu.forEach(t),Vr.forEach(t),Vi=l(Ur),ta=s(Ur,"P",{});var Qu=a(ta);Ki=d(Qu,"LEDModel(configuration)"),Qu.forEach(t),Ur.forEach(t),ju.forEach(t),Nu.forEach(t),Xi=l(R),oa=s(R,"BLOCKQUOTE",{});var Hu=a(oa);na=s(Hu,"BLOCKQUOTE",{});var Ru=a(na);sa=s(Ru,"BLOCKQUOTE",{});var Wu=a(sa);Ht=s(Wu,"H1",{class:!0});var Kr=a(Ht);Rt=s(Kr,"A",{id:!0,class:!0,href:!0});var Uu=a(Rt);aa=s(Uu,"SPAN",{});var Vu=a(aa);g($o.$$.fragment,Vu),Vu.forEach(t),Uu.forEach(t),Ji=l(Kr),ra=s(Kr,"SPAN",{});var Ku=a(ra);Zi=d(Ku,"Accessing the model configuration >>> configuration = model.config"),Ku.forEach(t),Kr.forEach(t),Wu.forEach(t),Ru.forEach(t),Hu.forEach(t),R.forEach(t),mr=l(o),ut=s(o,"H2",{class:!0});var Xr=a(ut);Wt=s(Xr,"A",{id:!0,class:!0,href:!0});var Xu=a(Wt);da=s(Xu,"SPAN",{});var Ju=a(da);g(xo.$$.fragment,Ju),Ju.forEach(t),Xu.forEach(t),Yi=l(Xr),ia=s(Xr,"SPAN",{});var Zu=a(ia);el=d(Zu,"LEDTokenizer"),Zu.forEach(t),Xr.forEach(t),_r=l(o),A=s(o,"DIV",{class:!0});var ee=a(A);g(Mo.$$.fragment,ee),tl=l(ee),la=s(ee,"P",{});var Yu=a(la);ol=d(Yu,"Construct a LED tokenizer."),Yu.forEach(t),nl=l(ee),Ut=s(ee,"P",{});var cr=a(Ut);Xn=s(cr,"A",{href:!0});var ef=a(Xn);sl=d(ef,"LEDTokenizer"),ef.forEach(t),al=d(cr," is identical to "),Jn=s(cr,"A",{href:!0});var tf=a(Jn);rl=d(tf,"BartTokenizer"),tf.forEach(t),dl=d(cr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),cr.forEach(t),il=l(ee),So=s(ee,"P",{});var Jr=a(So);ll=d(Jr,"Refer to superclass "),Zn=s(Jr,"A",{href:!0});var of=a(Zn);cl=d(of,"BartTokenizer"),of.forEach(t),hl=d(Jr," for usage examples and documentation concerning parameters."),Jr.forEach(t),pl=l(ee),Ue=s(ee,"DIV",{class:!0});var ks=a(Ue);g(Co.$$.fragment,ks),ul=l(ks),ca=s(ks,"P",{});var nf=a(ca);fl=d(nf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),nf.forEach(t),ml=l(ks),Oo=s(ks,"UL",{});var Zr=a(Oo);Yn=s(Zr,"LI",{});var Qp=a(Yn);_l=d(Qp,"single sequence: "),ha=s(Qp,"CODE",{});var sf=a(ha);gl=d(sf,"<s> X </s>"),sf.forEach(t),Qp.forEach(t),vl=l(Zr),es=s(Zr,"LI",{});var Hp=a(es);Tl=d(Hp,"pair of sequences: "),pa=s(Hp,"CODE",{});var af=a(pa);kl=d(af,"<s> A </s></s> B </s>"),af.forEach(t),Hp.forEach(t),Zr.forEach(t),ks.forEach(t),bl=l(ee),Vt=s(ee,"DIV",{class:!0});var Yr=a(Vt);g(Po.$$.fragment,Yr),wl=l(Yr),Ao=s(Yr,"P",{});var ed=a(Ao);yl=d(ed,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ua=s(ed,"CODE",{});var rf=a(ua);El=d(rf,"prepare_for_model"),rf.forEach(t),ql=d(ed," method."),ed.forEach(t),Yr.forEach(t),Ll=l(ee),Kt=s(ee,"DIV",{class:!0});var td=a(Kt);g(No.$$.fragment,td),Dl=l(td),fa=s(td,"P",{});var df=a(fa);zl=d(df,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),df.forEach(t),td.forEach(t),Fl=l(ee),ma=s(ee,"DIV",{class:!0}),a(ma).forEach(t),ee.forEach(t),gr=l(o),ft=s(o,"H2",{class:!0});var od=a(ft);Xt=s(od,"A",{id:!0,class:!0,href:!0});var lf=a(Xt);_a=s(lf,"SPAN",{});var cf=a(_a);g(jo.$$.fragment,cf),cf.forEach(t),lf.forEach(t),$l=l(od),ga=s(od,"SPAN",{});var hf=a(ga);xl=d(hf,"LEDTokenizerFast"),hf.forEach(t),od.forEach(t),vr=l(o),Fe=s(o,"DIV",{class:!0});var fo=a(Fe);g(Io.$$.fragment,fo),Ml=l(fo),Bo=s(fo,"P",{});var nd=a(Bo);Sl=d(nd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),va=s(nd,"EM",{});var pf=a(va);Cl=d(pf,"tokenizers"),pf.forEach(t),Ol=d(nd," library)."),nd.forEach(t),Pl=l(fo),Jt=s(fo,"P",{});var hr=a(Jt);ts=s(hr,"A",{href:!0});var uf=a(ts);Al=d(uf,"LEDTokenizerFast"),uf.forEach(t),Nl=d(hr," is identical to "),os=s(hr,"A",{href:!0});var ff=a(os);jl=d(ff,"BartTokenizerFast"),ff.forEach(t),Il=d(hr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),hr.forEach(t),Bl=l(fo),Go=s(fo,"P",{});var sd=a(Go);Gl=d(sd,"Refer to superclass "),ns=s(sd,"A",{href:!0});var mf=a(ns);Ql=d(mf,"BartTokenizerFast"),mf.forEach(t),Hl=d(sd," for usage examples and documentation concerning parameters."),sd.forEach(t),fo.forEach(t),Tr=l(o),mt=s(o,"H2",{class:!0});var ad=a(mt);Zt=s(ad,"A",{id:!0,class:!0,href:!0});var _f=a(Zt);Ta=s(_f,"SPAN",{});var gf=a(Ta);g(Qo.$$.fragment,gf),gf.forEach(t),_f.forEach(t),Rl=l(ad),ka=s(ad,"SPAN",{});var vf=a(ka);Wl=d(vf,"LED specific outputs"),vf.forEach(t),ad.forEach(t),kr=l(o),_t=s(o,"DIV",{class:!0});var rd=a(_t);g(Ho.$$.fragment,rd),Ul=l(rd),ba=s(rd,"P",{});var Tf=a(ba);Vl=d(Tf,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Tf.forEach(t),rd.forEach(t),br=l(o),gt=s(o,"DIV",{class:!0});var dd=a(gt);g(Ro.$$.fragment,dd),Kl=l(dd),wa=s(dd,"P",{});var kf=a(wa);Xl=d(kf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),kf.forEach(t),dd.forEach(t),wr=l(o),vt=s(o,"DIV",{class:!0});var id=a(vt);g(Wo.$$.fragment,id),Jl=l(id),ya=s(id,"P",{});var bf=a(ya);Zl=d(bf,"Base class for sequence-to-sequence language models outputs."),bf.forEach(t),id.forEach(t),yr=l(o),Tt=s(o,"DIV",{class:!0});var ld=a(Tt);g(Uo.$$.fragment,ld),Yl=l(ld),Ea=s(ld,"P",{});var wf=a(Ea);ec=d(wf,"Base class for outputs of sequence-to-sequence sentence classification models."),wf.forEach(t),ld.forEach(t),Er=l(o),kt=s(o,"DIV",{class:!0});var cd=a(kt);g(Vo.$$.fragment,cd),tc=l(cd),qa=s(cd,"P",{});var yf=a(qa);oc=d(yf,"Base class for outputs of sequence-to-sequence question answering models."),yf.forEach(t),cd.forEach(t),qr=l(o),bt=s(o,"DIV",{class:!0});var hd=a(bt);g(Ko.$$.fragment,hd),nc=l(hd),La=s(hd,"P",{});var Ef=a(La);sc=d(Ef,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ef.forEach(t),hd.forEach(t),Lr=l(o),wt=s(o,"DIV",{class:!0});var pd=a(wt);g(Xo.$$.fragment,pd),ac=l(pd),Da=s(pd,"P",{});var qf=a(Da);rc=d(qf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),qf.forEach(t),pd.forEach(t),Dr=l(o),yt=s(o,"DIV",{class:!0});var ud=a(yt);g(Jo.$$.fragment,ud),dc=l(ud),za=s(ud,"P",{});var Lf=a(za);ic=d(Lf,"Base class for sequence-to-sequence language models outputs."),Lf.forEach(t),ud.forEach(t),zr=l(o),Et=s(o,"H2",{class:!0});var fd=a(Et);Yt=s(fd,"A",{id:!0,class:!0,href:!0});var Df=a(Yt);Fa=s(Df,"SPAN",{});var zf=a(Fa);g(Zo.$$.fragment,zf),zf.forEach(t),Df.forEach(t),lc=l(fd),$a=s(fd,"SPAN",{});var Ff=a($a);cc=d(Ff,"LEDModel"),Ff.forEach(t),fd.forEach(t),Fr=l(o),$e=s(o,"DIV",{class:!0});var mo=a($e);g(Yo.$$.fragment,mo),hc=l(mo),en=s(mo,"P",{});var md=a(en);pc=d(md,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=s(md,"A",{href:!0});var $f=a(ss);uc=d($f,"PreTrainedModel"),$f.forEach(t),fc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),mc=l(mo),tn=s(mo,"P",{});var _d=a(tn);_c=d(_d,"This model is also a PyTorch "),on=s(_d,"A",{href:!0,rel:!0});var xf=a(on);gc=d(xf,"torch.nn.Module"),xf.forEach(t),vc=d(_d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_d.forEach(t),Tc=l(mo),ve=s(mo,"DIV",{class:!0});var Ke=a(ve);g(nn.$$.fragment,Ke),kc=l(Ke),qt=s(Ke,"P",{});var bs=a(qt);bc=d(bs,"The "),as=s(bs,"A",{href:!0});var Mf=a(as);wc=d(Mf,"LEDModel"),Mf.forEach(t),yc=d(bs," forward method, overrides the "),xa=s(bs,"CODE",{});var Sf=a(xa);Ec=d(Sf,"__call__"),Sf.forEach(t),qc=d(bs," special method."),bs.forEach(t),Lc=l(Ke),g(eo.$$.fragment,Ke),Dc=l(Ke),Ma=s(Ke,"P",{});var Cf=a(Ma);zc=d(Cf,"Example:"),Cf.forEach(t),Fc=l(Ke),g(sn.$$.fragment,Ke),Ke.forEach(t),mo.forEach(t),$r=l(o),Lt=s(o,"H2",{class:!0});var gd=a(Lt);to=s(gd,"A",{id:!0,class:!0,href:!0});var Of=a(to);Sa=s(Of,"SPAN",{});var Pf=a(Sa);g(an.$$.fragment,Pf),Pf.forEach(t),Of.forEach(t),$c=l(gd),Ca=s(gd,"SPAN",{});var Af=a(Ca);xc=d(Af,"LEDForConditionalGeneration"),Af.forEach(t),gd.forEach(t),xr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);g(rn.$$.fragment,_o),Mc=l(_o),dn=s(_o,"P",{});var vd=a(dn);Sc=d(vd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=s(vd,"A",{href:!0});var Nf=a(rs);Cc=d(Nf,"PreTrainedModel"),Nf.forEach(t),Oc=d(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),Pc=l(_o),ln=s(_o,"P",{});var Td=a(ln);Ac=d(Td,"This model is also a PyTorch "),cn=s(Td,"A",{href:!0,rel:!0});var jf=a(cn);Nc=d(jf,"torch.nn.Module"),jf.forEach(t),jc=d(Td,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Td.forEach(t),Ic=l(_o),Q=s(_o,"DIV",{class:!0});var Ee=a(Q);g(hn.$$.fragment,Ee),Bc=l(Ee),Dt=s(Ee,"P",{});var ws=a(Dt);Gc=d(ws,"The "),ds=s(ws,"A",{href:!0});var If=a(ds);Qc=d(If,"LEDForConditionalGeneration"),If.forEach(t),Hc=d(ws," forward method, overrides the "),Oa=s(ws,"CODE",{});var Bf=a(Oa);Rc=d(Bf,"__call__"),Bf.forEach(t),Wc=d(ws," special method."),ws.forEach(t),Uc=l(Ee),g(oo.$$.fragment,Ee),Vc=l(Ee),Pa=s(Ee,"P",{});var Gf=a(Pa);Kc=d(Gf,"Conditional generation example:"),Gf.forEach(t),Xc=l(Ee),g(pn.$$.fragment,Ee),Jc=l(Ee),Aa=s(Ee,"P",{});var Qf=a(Aa);Zc=d(Qf,"Summarization example:"),Qf.forEach(t),Yc=l(Ee),g(un.$$.fragment,Ee),Ee.forEach(t),_o.forEach(t),Mr=l(o),zt=s(o,"H2",{class:!0});var kd=a(zt);no=s(kd,"A",{id:!0,class:!0,href:!0});var Hf=a(no);Na=s(Hf,"SPAN",{});var Rf=a(Na);g(fn.$$.fragment,Rf),Rf.forEach(t),Hf.forEach(t),eh=l(kd),ja=s(kd,"SPAN",{});var Wf=a(ja);th=d(Wf,"LEDForSequenceClassification"),Wf.forEach(t),kd.forEach(t),Sr=l(o),le=s(o,"DIV",{class:!0});var Xe=a(le);g(mn.$$.fragment,Xe),oh=l(Xe),Ia=s(Xe,"P",{});var Uf=a(Ia);nh=d(Uf,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Uf.forEach(t),sh=l(Xe),_n=s(Xe,"P",{});var bd=a(_n);ah=d(bd,"This model inherits from "),is=s(bd,"A",{href:!0});var Vf=a(is);rh=d(Vf,"PreTrainedModel"),Vf.forEach(t),dh=d(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(t),ih=l(Xe),gn=s(Xe,"P",{});var wd=a(gn);lh=d(wd,"This model is also a PyTorch "),vn=s(wd,"A",{href:!0,rel:!0});var Kf=a(vn);ch=d(Kf,"torch.nn.Module"),Kf.forEach(t),hh=d(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),ph=l(Xe),H=s(Xe,"DIV",{class:!0});var qe=a(H);g(Tn.$$.fragment,qe),uh=l(qe),Ft=s(qe,"P",{});var ys=a(Ft);fh=d(ys,"The "),ls=s(ys,"A",{href:!0});var Xf=a(ls);mh=d(Xf,"LEDForSequenceClassification"),Xf.forEach(t),_h=d(ys," forward method, overrides the "),Ba=s(ys,"CODE",{});var Jf=a(Ba);gh=d(Jf,"__call__"),Jf.forEach(t),vh=d(ys," special method."),ys.forEach(t),Th=l(qe),g(so.$$.fragment,qe),kh=l(qe),Ga=s(qe,"P",{});var Zf=a(Ga);bh=d(Zf,"Example of single-label classification:"),Zf.forEach(t),wh=l(qe),g(kn.$$.fragment,qe),yh=l(qe),Qa=s(qe,"P",{});var Yf=a(Qa);Eh=d(Yf,"Example of multi-label classification:"),Yf.forEach(t),qh=l(qe),g(bn.$$.fragment,qe),qe.forEach(t),Xe.forEach(t),Cr=l(o),$t=s(o,"H2",{class:!0});var yd=a($t);ao=s(yd,"A",{id:!0,class:!0,href:!0});var em=a(ao);Ha=s(em,"SPAN",{});var tm=a(Ha);g(wn.$$.fragment,tm),tm.forEach(t),em.forEach(t),Lh=l(yd),Ra=s(yd,"SPAN",{});var om=a(Ra);Dh=d(om,"LEDForQuestionAnswering"),om.forEach(t),yd.forEach(t),Or=l(o),ce=s(o,"DIV",{class:!0});var Je=a(ce);g(yn.$$.fragment,Je),zh=l(Je),xt=s(Je,"P",{});var Es=a(xt);Fh=d(Es,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Wa=s(Es,"CODE",{});var nm=a(Wa);$h=d(nm,"span start logits"),nm.forEach(t),xh=d(Es," and "),Ua=s(Es,"CODE",{});var sm=a(Ua);Mh=d(sm,"span end logits"),sm.forEach(t),Sh=d(Es,")."),Es.forEach(t),Ch=l(Je),En=s(Je,"P",{});var Ed=a(En);Oh=d(Ed,"This model inherits from "),cs=s(Ed,"A",{href:!0});var am=a(cs);Ph=d(am,"PreTrainedModel"),am.forEach(t),Ah=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Nh=l(Je),qn=s(Je,"P",{});var qd=a(qn);jh=d(qd,"This model is also a PyTorch "),Ln=s(qd,"A",{href:!0,rel:!0});var rm=a(Ln);Ih=d(rm,"torch.nn.Module"),rm.forEach(t),Bh=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Gh=l(Je),Te=s(Je,"DIV",{class:!0});var Ze=a(Te);g(Dn.$$.fragment,Ze),Qh=l(Ze),Mt=s(Ze,"P",{});var qs=a(Mt);Hh=d(qs,"The "),hs=s(qs,"A",{href:!0});var dm=a(hs);Rh=d(dm,"LEDForQuestionAnswering"),dm.forEach(t),Wh=d(qs," forward method, overrides the "),Va=s(qs,"CODE",{});var im=a(Va);Uh=d(im,"__call__"),im.forEach(t),Vh=d(qs," special method."),qs.forEach(t),Kh=l(Ze),g(ro.$$.fragment,Ze),Xh=l(Ze),Ka=s(Ze,"P",{});var lm=a(Ka);Jh=d(lm,"Example:"),lm.forEach(t),Zh=l(Ze),g(zn.$$.fragment,Ze),Ze.forEach(t),Je.forEach(t),Pr=l(o),St=s(o,"H2",{class:!0});var Ld=a(St);io=s(Ld,"A",{id:!0,class:!0,href:!0});var cm=a(io);Xa=s(cm,"SPAN",{});var hm=a(Xa);g(Fn.$$.fragment,hm),hm.forEach(t),cm.forEach(t),Yh=l(Ld),Ja=s(Ld,"SPAN",{});var pm=a(Ja);ep=d(pm,"TFLEDModel"),pm.forEach(t),Ld.forEach(t),Ar=l(o),he=s(o,"DIV",{class:!0});var Ye=a(he);g($n.$$.fragment,Ye),tp=l(Ye),xn=s(Ye,"P",{});var Dd=a(xn);op=d(Dd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(Dd,"A",{href:!0});var um=a(ps);np=d(um,"TFPreTrainedModel"),um.forEach(t),sp=d(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),ap=l(Ye),Mn=s(Ye,"P",{});var zd=a(Mn);rp=d(zd,"This model is also a "),Sn=s(zd,"A",{href:!0,rel:!0});var fm=a(Sn);dp=d(fm,"tf.keras.Model"),fm.forEach(t),ip=d(zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zd.forEach(t),lp=l(Ye),g(lo.$$.fragment,Ye),cp=l(Ye),ke=s(Ye,"DIV",{class:!0});var et=a(ke);g(Cn.$$.fragment,et),hp=l(et),Ct=s(et,"P",{});var Ls=a(Ct);pp=d(Ls,"The "),us=s(Ls,"A",{href:!0});var mm=a(us);up=d(mm,"TFLEDModel"),mm.forEach(t),fp=d(Ls," forward method, overrides the "),Za=s(Ls,"CODE",{});var _m=a(Za);mp=d(_m,"__call__"),_m.forEach(t),_p=d(Ls," special method."),Ls.forEach(t),gp=l(et),g(co.$$.fragment,et),vp=l(et),Ya=s(et,"P",{});var gm=a(Ya);Tp=d(gm,"Example:"),gm.forEach(t),kp=l(et),g(On.$$.fragment,et),et.forEach(t),Ye.forEach(t),Nr=l(o),Ot=s(o,"H2",{class:!0});var Fd=a(Ot);ho=s(Fd,"A",{id:!0,class:!0,href:!0});var vm=a(ho);er=s(vm,"SPAN",{});var Tm=a(er);g(Pn.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),bp=l(Fd),tr=s(Fd,"SPAN",{});var km=a(tr);wp=d(km,"TFLEDForConditionalGeneration"),km.forEach(t),Fd.forEach(t),jr=l(o),pe=s(o,"DIV",{class:!0});var tt=a(pe);g(An.$$.fragment,tt),yp=l(tt),Nn=s(tt,"P",{});var $d=a(Nn);Ep=d($d,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=s($d,"A",{href:!0});var bm=a(fs);qp=d(bm,"TFPreTrainedModel"),bm.forEach(t),Lp=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),Dp=l(tt),jn=s(tt,"P",{});var xd=a(jn);zp=d(xd,"This model is also a "),In=s(xd,"A",{href:!0,rel:!0});var wm=a(In);Fp=d(wm,"tf.keras.Model"),wm.forEach(t),$p=d(xd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xd.forEach(t),xp=l(tt),g(po.$$.fragment,tt),Mp=l(tt),be=s(tt,"DIV",{class:!0});var ot=a(be);g(Bn.$$.fragment,ot),Sp=l(ot),Pt=s(ot,"P",{});var Ds=a(Pt);Cp=d(Ds,"The "),ms=s(Ds,"A",{href:!0});var ym=a(ms);Op=d(ym,"TFLEDForConditionalGeneration"),ym.forEach(t),Pp=d(Ds," forward method, overrides the "),or=s(Ds,"CODE",{});var Em=a(or);Ap=d(Em,"__call__"),Em.forEach(t),Np=d(Ds," special method."),Ds.forEach(t),jp=l(ot),g(uo.$$.fragment,ot),Ip=l(ot),nr=s(ot,"P",{});var qm=a(nr);Bp=d(qm,"Examples:"),qm.forEach(t),Gp=l(ot),g(Gn.$$.fragment,ot),ot.forEach(t),tt.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(jm)),c(w,"id","led"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#led"),c(m,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(z,"class","relative group"),c(oe,"href","https://arxiv.org/abs/2004.05150"),c(oe,"rel","nofollow"),c(G,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(N,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer"),c(Pe,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),c(Rn,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer"),c(Wn,"href","/docs/transformers/v4.16.2/en/model_doc/longformer#transformers.LongformerModel"),c(To,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(To,"rel","nofollow"),c(bo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(bo,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ct,"class","relative group"),c(Un,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Vn,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Gt,"class","relative group"),c(Rt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(O,"class","docstring"),c(Wt,"id","transformers.LEDTokenizer"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.LEDTokenizer"),c(ut,"class","relative group"),c(Xn,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizer"),c(Jn,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),c(Zn,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizer"),c(Ue,"class","docstring"),c(Vt,"class","docstring"),c(Kt,"class","docstring"),c(ma,"class","docstring"),c(A,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(ts,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDTokenizerFast"),c(os,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizerFast"),c(ns,"href","/docs/transformers/v4.16.2/en/model_doc/bart#transformers.BartTokenizerFast"),c(Fe,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(mt,"class","relative group"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(Et,"class","relative group"),c(ss,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(on,"rel","nofollow"),c(as,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDModel"),c(ve,"class","docstring"),c($e,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Lt,"class","relative group"),c(rs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cn,"rel","nofollow"),c(ds,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(Q,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(is,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vn,"rel","nofollow"),c(ls,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDForSequenceClassification"),c(H,"class","docstring"),c(le,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c($t,"class","relative group"),c(cs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(hs,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(Te,"class","docstring"),c(ce,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(St,"class","relative group"),c(ps,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(us,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.TFLEDModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(Ot,"class","relative group"),c(fs,"href","/docs/transformers/v4.16.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(In,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(In,"rel","nofollow"),c(ms,"href","/docs/transformers/v4.16.2/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(be,"class","docstring"),c(pe,"class","docstring")},m(o,p){e(document.head,u),h(o,L,p),h(o,m,p),e(m,w),e(w,q),v(E,q,null),e(m,y),e(m,D),e(D,Ae),h(o,me,p),h(o,z,p),e(z,Z),e(Z,W),v(te,W,null),e(z,Ne),e(z,U),e(U,je),h(o,Me,p),h(o,B,p),e(B,V),e(B,oe),e(oe,Le),e(B,S),h(o,P,p),h(o,_e,p),e(_e,ne),h(o,Se,p),h(o,ge,p),e(ge,K),e(K,Ie),h(o,Ce,p),h(o,C,p),e(C,Be),h(o,Y,p),h(o,$,p),e($,x),e(x,G),e(G,Ge),e(x,Qe),e(x,N),e(N,He),e(x,se),e(x,De),e(De,f),e(x,F),e(x,ae),e(ae,nt),e(x,st),e(x,I),e(I,at),e(x,rt),e(x,Oe),e(Oe,X),e(x,re),e(x,Pe),e(Pe,dt),e(x,de),e($,it),e($,ie),e(ie,Re),e(ie,We),e(We,Md),e(ie,Sd),e(ie,zs),e(zs,Cd),e(ie,Od),e($,Pd),e($,ze),e(ze,Ad),e(ze,Fs),e(Fs,Nd),e(ze,jd),e(ze,$s),e($s,Id),e(ze,Bd),e(ze,Rn),e(Rn,Gd),e(ze,Qd),e(ze,xs),e(xs,Hd),e(ze,Rd),e($,Wd),e($,J),e(J,Ud),e(J,Ms),e(Ms,Vd),e(J,Kd),e(J,Ss),e(Ss,Xd),e(J,Jd),e(J,Wn),e(Wn,Zd),e(J,Yd),e(J,Cs),e(Cs,ei),e(J,ti),e(J,Os),e(Os,oi),e(J,ni),e(J,Ps),e(Ps,si),e(J,ai),e($,ri),e($,lt),e(lt,di),e(lt,As),e(As,ii),e(lt,li),e(lt,Ns),e(Ns,ci),e(lt,hi),e($,pi),e($,vo),e(vo,ui),e(vo,To),e(To,fi),e(vo,mi),e($,_i),e($,ko),e(ko,gi),e(ko,bo),e(bo,vi),e(ko,Ti),h(o,pr,p),h(o,Nt,p),e(Nt,ki),e(Nt,wo),e(wo,bi),e(Nt,wi),h(o,ur,p),h(o,ct,p),e(ct,jt),e(jt,js),v(yo,js,null),e(ct,yi),e(ct,Is),e(Is,Ei),h(o,fr,p),h(o,O,p),v(Eo,O,null),e(O,qi),e(O,ht),e(ht,Li),e(ht,Un),e(Un,Di),e(ht,zi),e(ht,qo),e(qo,Fi),e(ht,$i),e(O,xi),e(O,pt),e(pt,Mi),e(pt,Vn),e(Vn,Si),e(pt,Ci),e(pt,Kn),e(Kn,Oi),e(pt,Pi),e(O,Ai),e(O,Bs),e(Bs,Ni),e(O,ji),v(Lo,O,null),e(O,Ii),e(O,Gs),e(Gs,Qs),e(Qs,Hs),e(Hs,Rs),e(Rs,Bi),e(O,Gi),e(O,Ws),e(Ws,Us),e(Us,Vs),e(Vs,It),e(It,Bt),e(Bt,Ks),v(Do,Ks,null),e(It,Qi),e(It,Xs),e(Xs,Hi),e(O,Ri),e(O,Js),e(Js,Zs),e(Zs,zo),e(zo,Gt),e(Gt,Qt),e(Qt,Ys),v(Fo,Ys,null),e(Gt,Wi),e(Gt,ea),e(ea,Ui),e(zo,Vi),e(zo,ta),e(ta,Ki),e(O,Xi),e(O,oa),e(oa,na),e(na,sa),e(sa,Ht),e(Ht,Rt),e(Rt,aa),v($o,aa,null),e(Ht,Ji),e(Ht,ra),e(ra,Zi),h(o,mr,p),h(o,ut,p),e(ut,Wt),e(Wt,da),v(xo,da,null),e(ut,Yi),e(ut,ia),e(ia,el),h(o,_r,p),h(o,A,p),v(Mo,A,null),e(A,tl),e(A,la),e(la,ol),e(A,nl),e(A,Ut),e(Ut,Xn),e(Xn,sl),e(Ut,al),e(Ut,Jn),e(Jn,rl),e(Ut,dl),e(A,il),e(A,So),e(So,ll),e(So,Zn),e(Zn,cl),e(So,hl),e(A,pl),e(A,Ue),v(Co,Ue,null),e(Ue,ul),e(Ue,ca),e(ca,fl),e(Ue,ml),e(Ue,Oo),e(Oo,Yn),e(Yn,_l),e(Yn,ha),e(ha,gl),e(Oo,vl),e(Oo,es),e(es,Tl),e(es,pa),e(pa,kl),e(A,bl),e(A,Vt),v(Po,Vt,null),e(Vt,wl),e(Vt,Ao),e(Ao,yl),e(Ao,ua),e(ua,El),e(Ao,ql),e(A,Ll),e(A,Kt),v(No,Kt,null),e(Kt,Dl),e(Kt,fa),e(fa,zl),e(A,Fl),e(A,ma),h(o,gr,p),h(o,ft,p),e(ft,Xt),e(Xt,_a),v(jo,_a,null),e(ft,$l),e(ft,ga),e(ga,xl),h(o,vr,p),h(o,Fe,p),v(Io,Fe,null),e(Fe,Ml),e(Fe,Bo),e(Bo,Sl),e(Bo,va),e(va,Cl),e(Bo,Ol),e(Fe,Pl),e(Fe,Jt),e(Jt,ts),e(ts,Al),e(Jt,Nl),e(Jt,os),e(os,jl),e(Jt,Il),e(Fe,Bl),e(Fe,Go),e(Go,Gl),e(Go,ns),e(ns,Ql),e(Go,Hl),h(o,Tr,p),h(o,mt,p),e(mt,Zt),e(Zt,Ta),v(Qo,Ta,null),e(mt,Rl),e(mt,ka),e(ka,Wl),h(o,kr,p),h(o,_t,p),v(Ho,_t,null),e(_t,Ul),e(_t,ba),e(ba,Vl),h(o,br,p),h(o,gt,p),v(Ro,gt,null),e(gt,Kl),e(gt,wa),e(wa,Xl),h(o,wr,p),h(o,vt,p),v(Wo,vt,null),e(vt,Jl),e(vt,ya),e(ya,Zl),h(o,yr,p),h(o,Tt,p),v(Uo,Tt,null),e(Tt,Yl),e(Tt,Ea),e(Ea,ec),h(o,Er,p),h(o,kt,p),v(Vo,kt,null),e(kt,tc),e(kt,qa),e(qa,oc),h(o,qr,p),h(o,bt,p),v(Ko,bt,null),e(bt,nc),e(bt,La),e(La,sc),h(o,Lr,p),h(o,wt,p),v(Xo,wt,null),e(wt,ac),e(wt,Da),e(Da,rc),h(o,Dr,p),h(o,yt,p),v(Jo,yt,null),e(yt,dc),e(yt,za),e(za,ic),h(o,zr,p),h(o,Et,p),e(Et,Yt),e(Yt,Fa),v(Zo,Fa,null),e(Et,lc),e(Et,$a),e($a,cc),h(o,Fr,p),h(o,$e,p),v(Yo,$e,null),e($e,hc),e($e,en),e(en,pc),e(en,ss),e(ss,uc),e(en,fc),e($e,mc),e($e,tn),e(tn,_c),e(tn,on),e(on,gc),e(tn,vc),e($e,Tc),e($e,ve),v(nn,ve,null),e(ve,kc),e(ve,qt),e(qt,bc),e(qt,as),e(as,wc),e(qt,yc),e(qt,xa),e(xa,Ec),e(qt,qc),e(ve,Lc),v(eo,ve,null),e(ve,Dc),e(ve,Ma),e(Ma,zc),e(ve,Fc),v(sn,ve,null),h(o,$r,p),h(o,Lt,p),e(Lt,to),e(to,Sa),v(an,Sa,null),e(Lt,$c),e(Lt,Ca),e(Ca,xc),h(o,xr,p),h(o,xe,p),v(rn,xe,null),e(xe,Mc),e(xe,dn),e(dn,Sc),e(dn,rs),e(rs,Cc),e(dn,Oc),e(xe,Pc),e(xe,ln),e(ln,Ac),e(ln,cn),e(cn,Nc),e(ln,jc),e(xe,Ic),e(xe,Q),v(hn,Q,null),e(Q,Bc),e(Q,Dt),e(Dt,Gc),e(Dt,ds),e(ds,Qc),e(Dt,Hc),e(Dt,Oa),e(Oa,Rc),e(Dt,Wc),e(Q,Uc),v(oo,Q,null),e(Q,Vc),e(Q,Pa),e(Pa,Kc),e(Q,Xc),v(pn,Q,null),e(Q,Jc),e(Q,Aa),e(Aa,Zc),e(Q,Yc),v(un,Q,null),h(o,Mr,p),h(o,zt,p),e(zt,no),e(no,Na),v(fn,Na,null),e(zt,eh),e(zt,ja),e(ja,th),h(o,Sr,p),h(o,le,p),v(mn,le,null),e(le,oh),e(le,Ia),e(Ia,nh),e(le,sh),e(le,_n),e(_n,ah),e(_n,is),e(is,rh),e(_n,dh),e(le,ih),e(le,gn),e(gn,lh),e(gn,vn),e(vn,ch),e(gn,hh),e(le,ph),e(le,H),v(Tn,H,null),e(H,uh),e(H,Ft),e(Ft,fh),e(Ft,ls),e(ls,mh),e(Ft,_h),e(Ft,Ba),e(Ba,gh),e(Ft,vh),e(H,Th),v(so,H,null),e(H,kh),e(H,Ga),e(Ga,bh),e(H,wh),v(kn,H,null),e(H,yh),e(H,Qa),e(Qa,Eh),e(H,qh),v(bn,H,null),h(o,Cr,p),h(o,$t,p),e($t,ao),e(ao,Ha),v(wn,Ha,null),e($t,Lh),e($t,Ra),e(Ra,Dh),h(o,Or,p),h(o,ce,p),v(yn,ce,null),e(ce,zh),e(ce,xt),e(xt,Fh),e(xt,Wa),e(Wa,$h),e(xt,xh),e(xt,Ua),e(Ua,Mh),e(xt,Sh),e(ce,Ch),e(ce,En),e(En,Oh),e(En,cs),e(cs,Ph),e(En,Ah),e(ce,Nh),e(ce,qn),e(qn,jh),e(qn,Ln),e(Ln,Ih),e(qn,Bh),e(ce,Gh),e(ce,Te),v(Dn,Te,null),e(Te,Qh),e(Te,Mt),e(Mt,Hh),e(Mt,hs),e(hs,Rh),e(Mt,Wh),e(Mt,Va),e(Va,Uh),e(Mt,Vh),e(Te,Kh),v(ro,Te,null),e(Te,Xh),e(Te,Ka),e(Ka,Jh),e(Te,Zh),v(zn,Te,null),h(o,Pr,p),h(o,St,p),e(St,io),e(io,Xa),v(Fn,Xa,null),e(St,Yh),e(St,Ja),e(Ja,ep),h(o,Ar,p),h(o,he,p),v($n,he,null),e(he,tp),e(he,xn),e(xn,op),e(xn,ps),e(ps,np),e(xn,sp),e(he,ap),e(he,Mn),e(Mn,rp),e(Mn,Sn),e(Sn,dp),e(Mn,ip),e(he,lp),v(lo,he,null),e(he,cp),e(he,ke),v(Cn,ke,null),e(ke,hp),e(ke,Ct),e(Ct,pp),e(Ct,us),e(us,up),e(Ct,fp),e(Ct,Za),e(Za,mp),e(Ct,_p),e(ke,gp),v(co,ke,null),e(ke,vp),e(ke,Ya),e(Ya,Tp),e(ke,kp),v(On,ke,null),h(o,Nr,p),h(o,Ot,p),e(Ot,ho),e(ho,er),v(Pn,er,null),e(Ot,bp),e(Ot,tr),e(tr,wp),h(o,jr,p),h(o,pe,p),v(An,pe,null),e(pe,yp),e(pe,Nn),e(Nn,Ep),e(Nn,fs),e(fs,qp),e(Nn,Lp),e(pe,Dp),e(pe,jn),e(jn,zp),e(jn,In),e(In,Fp),e(jn,$p),e(pe,xp),v(po,pe,null),e(pe,Mp),e(pe,be),v(Bn,be,null),e(be,Sp),e(be,Pt),e(Pt,Cp),e(Pt,ms),e(ms,Op),e(Pt,Pp),e(Pt,or),e(or,Ap),e(Pt,Np),e(be,jp),v(uo,be,null),e(be,Ip),e(be,nr),e(nr,Bp),e(be,Gp),v(Gn,be,null),Ir=!0},p(o,[p]){const Qn={};p&2&&(Qn.$$scope={dirty:p,ctx:o}),eo.$set(Qn);const sr={};p&2&&(sr.$$scope={dirty:p,ctx:o}),oo.$set(sr);const ar={};p&2&&(ar.$$scope={dirty:p,ctx:o}),so.$set(ar);const rr={};p&2&&(rr.$$scope={dirty:p,ctx:o}),ro.$set(rr);const Hn={};p&2&&(Hn.$$scope={dirty:p,ctx:o}),lo.$set(Hn);const dr={};p&2&&(dr.$$scope={dirty:p,ctx:o}),co.$set(dr);const ir={};p&2&&(ir.$$scope={dirty:p,ctx:o}),po.$set(ir);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),uo.$set(lr)},i(o){Ir||(T(E.$$.fragment,o),T(te.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T(Fo.$$.fragment,o),T($o.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Po.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Qo.$$.fragment,o),T(Ho.$$.fragment,o),T(Ro.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(nn.$$.fragment,o),T(eo.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(hn.$$.fragment,o),T(oo.$$.fragment,o),T(pn.$$.fragment,o),T(un.$$.fragment,o),T(fn.$$.fragment,o),T(mn.$$.fragment,o),T(Tn.$$.fragment,o),T(so.$$.fragment,o),T(kn.$$.fragment,o),T(bn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(Dn.$$.fragment,o),T(ro.$$.fragment,o),T(zn.$$.fragment,o),T(Fn.$$.fragment,o),T($n.$$.fragment,o),T(lo.$$.fragment,o),T(Cn.$$.fragment,o),T(co.$$.fragment,o),T(On.$$.fragment,o),T(Pn.$$.fragment,o),T(An.$$.fragment,o),T(po.$$.fragment,o),T(Bn.$$.fragment,o),T(uo.$$.fragment,o),T(Gn.$$.fragment,o),Ir=!0)},o(o){k(E.$$.fragment,o),k(te.$$.fragment,o),k(yo.$$.fragment,o),k(Eo.$$.fragment,o),k(Lo.$$.fragment,o),k(Do.$$.fragment,o),k(Fo.$$.fragment,o),k($o.$$.fragment,o),k(xo.$$.fragment,o),k(Mo.$$.fragment,o),k(Co.$$.fragment,o),k(Po.$$.fragment,o),k(No.$$.fragment,o),k(jo.$$.fragment,o),k(Io.$$.fragment,o),k(Qo.$$.fragment,o),k(Ho.$$.fragment,o),k(Ro.$$.fragment,o),k(Wo.$$.fragment,o),k(Uo.$$.fragment,o),k(Vo.$$.fragment,o),k(Ko.$$.fragment,o),k(Xo.$$.fragment,o),k(Jo.$$.fragment,o),k(Zo.$$.fragment,o),k(Yo.$$.fragment,o),k(nn.$$.fragment,o),k(eo.$$.fragment,o),k(sn.$$.fragment,o),k(an.$$.fragment,o),k(rn.$$.fragment,o),k(hn.$$.fragment,o),k(oo.$$.fragment,o),k(pn.$$.fragment,o),k(un.$$.fragment,o),k(fn.$$.fragment,o),k(mn.$$.fragment,o),k(Tn.$$.fragment,o),k(so.$$.fragment,o),k(kn.$$.fragment,o),k(bn.$$.fragment,o),k(wn.$$.fragment,o),k(yn.$$.fragment,o),k(Dn.$$.fragment,o),k(ro.$$.fragment,o),k(zn.$$.fragment,o),k(Fn.$$.fragment,o),k($n.$$.fragment,o),k(lo.$$.fragment,o),k(Cn.$$.fragment,o),k(co.$$.fragment,o),k(On.$$.fragment,o),k(Pn.$$.fragment,o),k(An.$$.fragment,o),k(po.$$.fragment,o),k(Bn.$$.fragment,o),k(uo.$$.fragment,o),k(Gn.$$.fragment,o),Ir=!1},d(o){t(u),o&&t(L),o&&t(m),b(E),o&&t(me),o&&t(z),b(te),o&&t(Me),o&&t(B),o&&t(P),o&&t(_e),o&&t(Se),o&&t(ge),o&&t(Ce),o&&t(C),o&&t(Y),o&&t($),o&&t(pr),o&&t(Nt),o&&t(ur),o&&t(ct),b(yo),o&&t(fr),o&&t(O),b(Eo),b(Lo),b(Do),b(Fo),b($o),o&&t(mr),o&&t(ut),b(xo),o&&t(_r),o&&t(A),b(Mo),b(Co),b(Po),b(No),o&&t(gr),o&&t(ft),b(jo),o&&t(vr),o&&t(Fe),b(Io),o&&t(Tr),o&&t(mt),b(Qo),o&&t(kr),o&&t(_t),b(Ho),o&&t(br),o&&t(gt),b(Ro),o&&t(wr),o&&t(vt),b(Wo),o&&t(yr),o&&t(Tt),b(Uo),o&&t(Er),o&&t(kt),b(Vo),o&&t(qr),o&&t(bt),b(Ko),o&&t(Lr),o&&t(wt),b(Xo),o&&t(Dr),o&&t(yt),b(Jo),o&&t(zr),o&&t(Et),b(Zo),o&&t(Fr),o&&t($e),b(Yo),b(nn),b(eo),b(sn),o&&t($r),o&&t(Lt),b(an),o&&t(xr),o&&t(xe),b(rn),b(hn),b(oo),b(pn),b(un),o&&t(Mr),o&&t(zt),b(fn),o&&t(Sr),o&&t(le),b(mn),b(Tn),b(so),b(kn),b(bn),o&&t(Cr),o&&t($t),b(wn),o&&t(Or),o&&t(ce),b(yn),b(Dn),b(ro),b(zn),o&&t(Pr),o&&t(St),b(Fn),o&&t(Ar),o&&t(he),b($n),b(lo),b(Cn),b(co),b(On),o&&t(Nr),o&&t(Ot),b(Pn),o&&t(jr),o&&t(pe),b(An),b(po),b(Bn),b(uo),b(Gn)}}}const jm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Im(j,u,L){let{fw:m}=u;return j.$$set=w=>{"fw"in w&&L(0,m=w.fw)},[m]}class Um extends Lm{constructor(u){super();Dm(this,u,Im,Nm,zm,{fw:0})}}export{Um as default,jm as metadata};
