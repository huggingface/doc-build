import{S as Of,i as Cf,s as Af,e as n,k as d,w as f,t as r,M as Pf,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as h,y as g,q as T,o as v,B as b,v as Nf}from"../../chunks/vendor-6b77c823.js";import{T as go}from"../../chunks/Tip-39098574.js";import{D as $}from"../../chunks/Docstring-abef54e3.js";import{C as Ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as _e}from"../../chunks/IconCopyLink-7a11ce68.js";function jf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function If(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Gf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Bf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Qf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,R,ne,Ie,V,Ge,Me,B,K,se,Le,S,A,Te,ae,Se,ve,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),k=d(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=d(),F=n("p"),Y=r("This second option is useful when using "),R=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),Ge=r("model(inputs)"),Me=r("."),B=d(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=d(),S=n("ul"),A=n("li"),Te=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),ve=r(" only and nothing else: "),X=n("code"),Be=r("model(input_ids)"),Oe=d(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var z=a(u);L=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),k=l(m),E=s(m,"UL",{});var ie=a(E);q=s(ie,"LI",{});var st=a(q);y=i(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(ie),D=s(ie,"LI",{});var at=a(D);je=i(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),ie.forEach(t),ge=l(m),F=s(m,"P",{});var I=a(F);Y=i(I,"This second option is useful when using "),R=s(I,"CODE",{});var rt=a(R);ne=i(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(I,"CODE",{});var it=a(V);Ge=i(it,"model(inputs)"),it.forEach(t),Me=i(I,"."),I.forEach(t),B=l(m),K=s(m,"P",{});var Ce=a(K);se=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var de=a(A);Te=i(de,"a single Tensor with "),ae=s(de,"CODE",{});var Ae=a(ae);Se=i(Ae,"input_ids"),Ae.forEach(t),ve=i(de," only and nothing else: "),X=s(de,"CODE",{});var dt=a(X);Be=i(dt,"model(input_ids)"),dt.forEach(t),de.forEach(t),Oe=l(J),O=s(J,"LI",{});var le=a(O);Qe=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=i(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=i(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=i(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Re=a(j);Ue=i(Re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Re,"CODE",{});var Ve=a(re);De=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Re.forEach(t),J.forEach(t)},m(m,z){h(m,u,z),e(u,L),h(m,k,z),h(m,E,z),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,z),h(m,F,z),e(F,Y),e(F,R),e(R,ne),e(F,Ie),e(F,V),e(V,Ge),e(F,Me),h(m,B,z),h(m,K,z),e(K,se),h(m,Le,z),h(m,S,z),e(S,A),e(A,Te),e(A,ae),e(ae,Se),e(A,ve),e(A,X),e(X,Be),e(S,Oe),e(S,O),e(O,Qe),e(O,ee),e(ee,x),e(O,M),e(O,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(k),m&&t(E),m&&t(ge),m&&t(F),m&&t(B),m&&t(K),m&&t(Le),m&&t(S)}}}function Hf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Wf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,R,ne,Ie,V,Ge,Me,B,K,se,Le,S,A,Te,ae,Se,ve,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),k=d(),E=n("ul"),q=n("li"),y=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),D=n("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),ge=d(),F=n("p"),Y=r("This second option is useful when using "),R=n("code"),ne=r("tf.keras.Model.fit"),Ie=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),V=n("code"),Ge=r("model(inputs)"),Me=r("."),B=d(),K=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=d(),S=n("ul"),A=n("li"),Te=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),ve=r(" only and nothing else: "),X=n("code"),Be=r("model(input_ids)"),Oe=d(),O=n("li"),Qe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),Q=n("code"),He=r("model([input_ids, attention_mask, token_type_ids])"),We=d(),j=n("li"),Ue=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var z=a(u);L=i(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),k=l(m),E=s(m,"UL",{});var ie=a(E);q=s(ie,"LI",{});var st=a(q);y=i(st,"having all inputs as keyword arguments (like PyTorch models), or"),st.forEach(t),w=l(ie),D=s(ie,"LI",{});var at=a(D);je=i(at,"having all inputs as a list, tuple or dict in the first positional arguments."),at.forEach(t),ie.forEach(t),ge=l(m),F=s(m,"P",{});var I=a(F);Y=i(I,"This second option is useful when using "),R=s(I,"CODE",{});var rt=a(R);ne=i(rt,"tf.keras.Model.fit"),rt.forEach(t),Ie=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),V=s(I,"CODE",{});var it=a(V);Ge=i(it,"model(inputs)"),it.forEach(t),Me=i(I,"."),I.forEach(t),B=l(m),K=s(m,"P",{});var Ce=a(K);se=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),Le=l(m),S=s(m,"UL",{});var J=a(S);A=s(J,"LI",{});var de=a(A);Te=i(de,"a single Tensor with "),ae=s(de,"CODE",{});var Ae=a(ae);Se=i(Ae,"input_ids"),Ae.forEach(t),ve=i(de," only and nothing else: "),X=s(de,"CODE",{});var dt=a(X);Be=i(dt,"model(input_ids)"),dt.forEach(t),de.forEach(t),Oe=l(J),O=s(J,"LI",{});var le=a(O);Qe=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=s(le,"CODE",{});var lt=a(ee);x=i(lt,"model([input_ids, attention_mask])"),lt.forEach(t),M=i(le," or "),Q=s(le,"CODE",{});var ce=a(Q);He=i(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),We=l(J),j=s(J,"LI",{});var Re=a(j);Ue=i(Re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Re,"CODE",{});var Ve=a(re);De=i(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Re.forEach(t),J.forEach(t)},m(m,z){h(m,u,z),e(u,L),h(m,k,z),h(m,E,z),e(E,q),e(q,y),e(E,w),e(E,D),e(D,je),h(m,ge,z),h(m,F,z),e(F,Y),e(F,R),e(R,ne),e(F,Ie),e(F,V),e(V,Ge),e(F,Me),h(m,B,z),h(m,K,z),e(K,se),h(m,Le,z),h(m,S,z),e(S,A),e(A,Te),e(A,ae),e(ae,Se),e(A,ve),e(A,X),e(X,Be),e(S,Oe),e(S,O),e(O,Qe),e(O,ee),e(ee,x),e(O,M),e(O,Q),e(Q,He),e(S,We),e(S,j),e(j,Ue),e(j,re),e(re,De)},d(m){m&&t(u),m&&t(k),m&&t(E),m&&t(ge),m&&t(F),m&&t(B),m&&t(K),m&&t(Le),m&&t(S)}}}function Uf(G){let u,L,k,E,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),k=n("code"),E=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(y){u=s(y,"P",{});var w=a(u);L=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),k=s(w,"CODE",{});var D=a(k);E=i(D,"Module"),D.forEach(t),q=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(y,w){h(y,u,w),e(u,L),e(u,k),e(k,E),e(u,q)},d(y){y&&t(u)}}}function Rf(G){let u,L,k,E,q,y,w,D,je,ge,F,Y,R,ne,Ie,V,Ge,Me,B,K,se,Le,S,A,Te,ae,Se,ve,X,Be,Oe,O,Qe,ee,x,M,Q,He,We,j,Ue,re,De,m,z,ie,st,at,I,rt,it,Ce,J,de,Ae,dt,le,lt,ce,Re,Ve,Ai,Pi,Ss,Ni,ji,Ii,Fe,Gi,Os,Bi,Qi,Cs,Hi,Wi,Kn,Ui,Ri,As,Vi,Ki,Xi,Z,Ji,Ps,Zi,Yi,Ns,ed,td,Xn,od,nd,js,sd,ad,Is,rd,id,Gs,dd,ld,cd,ct,hd,Bs,pd,ud,Qs,md,fd,_d,To,gd,vo,Td,vd,bd,bo,kd,ko,wd,yd,_r,Nt,Ed,wo,qd,Ld,gr,ht,jt,Hs,yo,Dd,Ws,Fd,Tr,C,Eo,zd,pt,$d,Jn,xd,Md,qo,Sd,Od,Cd,ut,Ad,Zn,Pd,Nd,Yn,jd,Id,Gd,Us,Bd,Qd,Lo,Hd,Rs,Vs,Ks,Xs,Wd,Ud,Js,Zs,Ys,It,Gt,ea,Do,Rd,ta,Vd,Kd,oa,na,Fo,Bt,Qt,sa,zo,Xd,aa,Jd,Zd,ra,Yd,el,ia,da,la,Ht,Wt,ca,$o,tl,ha,ol,vr,mt,Ut,pa,xo,nl,ua,sl,br,N,Mo,al,ma,rl,il,Rt,es,dl,ll,ts,cl,hl,pl,So,ul,os,ml,fl,_l,Ke,Oo,gl,fa,Tl,vl,Co,ns,bl,_a,kl,wl,ss,yl,ga,El,ql,Vt,Ao,Ll,Po,Dl,Ta,Fl,zl,$l,Kt,No,xl,va,Ml,Sl,as,jo,kr,ft,Xt,ba,Io,Ol,ka,Cl,wr,ze,Go,Al,Bo,Pl,wa,Nl,jl,Il,Jt,rs,Gl,Bl,is,Ql,Hl,Wl,Qo,Ul,ds,Rl,Vl,yr,_t,Zt,ya,Ho,Kl,Ea,Xl,Er,gt,Wo,Jl,qa,Zl,qr,Tt,Uo,Yl,La,ec,Lr,vt,Ro,tc,Da,oc,Dr,bt,Vo,nc,Fa,sc,Fr,kt,Ko,ac,za,rc,zr,wt,Xo,ic,$a,dc,$r,yt,Jo,lc,xa,cc,xr,Et,Zo,hc,Ma,pc,Mr,qt,Yt,Sa,Yo,uc,Oa,mc,Sr,$e,en,fc,tn,_c,ls,gc,Tc,vc,on,bc,nn,kc,wc,yc,be,sn,Ec,Lt,qc,cs,Lc,Dc,Ca,Fc,zc,$c,eo,xc,Aa,Mc,Sc,an,Or,Dt,to,Pa,rn,Oc,Na,Cc,Cr,xe,dn,Ac,ln,Pc,hs,Nc,jc,Ic,cn,Gc,hn,Bc,Qc,Hc,H,pn,Wc,Ft,Uc,ps,Rc,Vc,ja,Kc,Xc,Jc,oo,Zc,Ia,Yc,eh,un,th,Ga,oh,nh,mn,Ar,zt,no,Ba,fn,sh,Qa,ah,Pr,he,_n,rh,Ha,ih,dh,gn,lh,us,ch,hh,ph,Tn,uh,vn,mh,fh,_h,P,bn,gh,$t,Th,ms,vh,bh,Wa,kh,wh,yh,so,Eh,Ua,qh,Lh,kn,Dh,wn,Fh,Ra,zh,$h,yn,xh,En,Nr,xt,ao,Va,qn,Mh,Ka,Sh,jr,pe,Ln,Oh,Mt,Ch,Xa,Ah,Ph,Ja,Nh,jh,Ih,Dn,Gh,fs,Bh,Qh,Hh,Fn,Wh,zn,Uh,Rh,Vh,te,$n,Kh,St,Xh,_s,Jh,Zh,Za,Yh,ep,tp,ro,op,Ya,np,sp,xn,ap,Mn,Ir,Ot,io,er,Sn,rp,tr,ip,Gr,ue,On,dp,Cn,lp,gs,cp,hp,pp,An,up,Pn,mp,fp,_p,lo,gp,ke,Nn,Tp,Ct,vp,Ts,bp,kp,or,wp,yp,Ep,co,qp,nr,Lp,Dp,jn,Br,At,ho,sr,In,Fp,ar,zp,Qr,me,Gn,$p,Bn,xp,vs,Mp,Sp,Op,Qn,Cp,Hn,Ap,Pp,Np,po,jp,we,Wn,Ip,Pt,Gp,bs,Bp,Qp,rr,Hp,Wp,Up,uo,Rp,ir,Vp,Kp,Un,Hr;return y=new _e({}),ne=new _e({}),yo=new _e({}),Eo=new $({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new Ne({props:{code:"",highlighted:""}}),Do=new _e({}),zo=new _e({}),$o=new _e({}),xo=new _e({}),Mo=new $({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led.py#L43"}}),Oo=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new $({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bart/tokenization_bart.py#L309"}}),Io=new _e({}),Go=new $({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L44"}}),Ho=new _e({}),Wo=new $({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Uo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ro=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Xo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1330",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Jo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1373",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1441",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Yo=new _e({}),en=new $({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new $({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new go({props:{$$slots:{default:[jf]},$$scope:{ctx:G}}}),an=new Ne({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rn=new _e({}),dn=new $({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new $({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new go({props:{$$slots:{default:[If]},$$scope:{ctx:G}}}),un=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained("allenai/led-base-16384")
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),mn=new Ne({props:{code:`import torch
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
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new _e({}),_n=new $({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2468",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new $({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2481",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new go({props:{$$slots:{default:[Gf]},$$scope:{ctx:G}}}),kn=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),wn=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),yn=new Ne({props:{code:`import torch
from transformers import LEDTokenizer, LEDForSequenceClassification

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),En=new Ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),qn=new _e({}),Ln=new $({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2596",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new $({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_led.py#L2608",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new go({props:{$$slots:{default:[Bf]},$$scope:{ctx:G}}}),xn=new Ne({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForQuestionAnswering.from_pretrained("allenai/led-base-16384")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Mn=new Ne({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Sn=new _e({}),On=new $({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2191",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Qf]},$$scope:{ctx:G}}}),Nn=new $({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2203",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new go({props:{$$slots:{default:[Hf]},$$scope:{ctx:G}}}),jn=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = TFLEDModel.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),In=new _e({}),Gn=new $({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2279",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new go({props:{$$slots:{default:[Wf]},$$scope:{ctx:G}}}),Wn=new $({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2312",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new go({props:{$$slots:{default:[Uf]},$$scope:{ctx:G}}}),Un=new Ne({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf

mname = "allenai/led-base-16384"
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors="tf")
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=d(),k=n("h1"),E=n("a"),q=n("span"),f(y.$$.fragment),w=d(),D=n("span"),je=r("LED"),ge=d(),F=n("h2"),Y=n("a"),R=n("span"),f(ne.$$.fragment),Ie=d(),V=n("span"),Ge=r("Overview"),Me=d(),B=n("p"),K=r("The LED model was proposed in "),se=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=d(),Te=n("p"),ae=r("The abstract from the paper is the following:"),Se=d(),ve=n("p"),X=n("em"),Be=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Oe=d(),O=n("p"),Qe=r("Tips:"),ee=d(),x=n("ul"),M=n("li"),Q=n("a"),He=r("LEDForConditionalGeneration"),We=r(` is an extension of
`),j=n("a"),Ue=r("BartForConditionalGeneration"),re=r(" exchanging the traditional "),De=n("em"),m=r("self-attention"),z=r(` layer with
`),ie=n("em"),st=r("Longformer"),at=r("\u2019s "),I=n("em"),rt=r("chunked self-attention"),it=r(" layer. "),Ce=n("a"),J=r("LEDTokenizer"),de=r(` is an alias of
`),Ae=n("a"),dt=r("BartTokenizer"),le=r("."),lt=d(),ce=n("li"),Re=r("LED works very well on long-range "),Ve=n("em"),Ai=r("sequence-to-sequence"),Pi=r(" tasks where the "),Ss=n("code"),Ni=r("input_ids"),ji=r(` largely exceed a length of
1024 tokens.`),Ii=d(),Fe=n("li"),Gi=r("LED pads the "),Os=n("code"),Bi=r("input_ids"),Qi=r(" to be a multiple of "),Cs=n("code"),Hi=r("config.attention_window"),Wi=r(` if required. Therefore a small speed-up is
gained, when `),Kn=n("a"),Ui=r("LEDTokenizer"),Ri=r(" is used with the "),As=n("code"),Vi=r("pad_to_multiple_of"),Ki=r(" argument."),Xi=d(),Z=n("li"),Ji=r("LED makes use of "),Ps=n("em"),Zi=r("global attention"),Yi=r(" by means of the "),Ns=n("code"),ed=r("global_attention_mask"),td=r(` (see
`),Xn=n("a"),od=r("LongformerModel"),nd=r("). For summarization, it is advised to put "),js=n("em"),sd=r("global attention"),ad=r(` only on the first
`),Is=n("code"),rd=r("<s>"),id=r(" token. For question answering, it is advised to put "),Gs=n("em"),dd=r("global attention"),ld=r(" on all tokens of the question."),cd=d(),ct=n("li"),hd=r("To fine-tune LED on all 16384, it is necessary to enable "),Bs=n("em"),pd=r("gradient checkpointing"),ud=r(` by executing
`),Qs=n("code"),md=r("model.gradient_checkpointing_enable()"),fd=r("."),_d=d(),To=n("li"),gd=r("A notebook showing how to evaluate LED, can be accessed "),vo=n("a"),Td=r("here"),vd=r("."),bd=d(),bo=n("li"),kd=r("A notebook showing how to fine-tune LED, can be accessed "),ko=n("a"),wd=r("here"),yd=r("."),_r=d(),Nt=n("p"),Ed=r("This model was contributed by "),wo=n("a"),qd=r("patrickvonplaten"),Ld=r("."),gr=d(),ht=n("h2"),jt=n("a"),Hs=n("span"),f(yo.$$.fragment),Dd=d(),Ws=n("span"),Fd=r("LEDConfig"),Tr=d(),C=n("div"),f(Eo.$$.fragment),zd=d(),pt=n("p"),$d=r("This is the configuration class to store the configuration of a "),Jn=n("a"),xd=r("LEDModel"),Md=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Sd=r("allenai/led-base-16384"),Od=r(" architecture."),Cd=d(),ut=n("p"),Ad=r("Configuration objects inherit from "),Zn=n("a"),Pd=r("PretrainedConfig"),Nd=r(` and can be used to control the model outputs. Read the
documentation from `),Yn=n("a"),jd=r("PretrainedConfig"),Id=r(" for more information."),Gd=d(),Us=n("p"),Bd=r("Example:"),Qd=d(),f(Lo.$$.fragment),Hd=d(),Rs=n("blockquote"),Vs=n("blockquote"),Ks=n("blockquote"),Xs=n("p"),Wd=r("from transformers import LEDModel, LEDConfig"),Ud=d(),Js=n("blockquote"),Zs=n("blockquote"),Ys=n("blockquote"),It=n("h1"),Gt=n("a"),ea=n("span"),f(Do.$$.fragment),Rd=d(),ta=n("span"),Vd=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Kd=d(),oa=n("blockquote"),na=n("blockquote"),Fo=n("blockquote"),Bt=n("h1"),Qt=n("a"),sa=n("span"),f(zo.$$.fragment),Xd=d(),aa=n("span"),Jd=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Zd=d(),ra=n("p"),Yd=r("LEDModel(configuration)"),el=d(),ia=n("blockquote"),da=n("blockquote"),la=n("blockquote"),Ht=n("h1"),Wt=n("a"),ca=n("span"),f($o.$$.fragment),tl=d(),ha=n("span"),ol=r("Accessing the model configuration >>> configuration = model.config"),vr=d(),mt=n("h2"),Ut=n("a"),pa=n("span"),f(xo.$$.fragment),nl=d(),ua=n("span"),sl=r("LEDTokenizer"),br=d(),N=n("div"),f(Mo.$$.fragment),al=d(),ma=n("p"),rl=r("Construct a LED tokenizer."),il=d(),Rt=n("p"),es=n("a"),dl=r("LEDTokenizer"),ll=r(" is identical to "),ts=n("a"),cl=r("BartTokenizer"),hl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),pl=d(),So=n("p"),ul=r("Refer to superclass "),os=n("a"),ml=r("BartTokenizer"),fl=r(" for usage examples and documentation concerning parameters."),_l=d(),Ke=n("div"),f(Oo.$$.fragment),gl=d(),fa=n("p"),Tl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),vl=d(),Co=n("ul"),ns=n("li"),bl=r("single sequence: "),_a=n("code"),kl=r("<s> X </s>"),wl=d(),ss=n("li"),yl=r("pair of sequences: "),ga=n("code"),El=r("<s> A </s></s> B </s>"),ql=d(),Vt=n("div"),f(Ao.$$.fragment),Ll=d(),Po=n("p"),Dl=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ta=n("code"),Fl=r("prepare_for_model"),zl=r(" method."),$l=d(),Kt=n("div"),f(No.$$.fragment),xl=d(),va=n("p"),Ml=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Sl=d(),as=n("div"),f(jo.$$.fragment),kr=d(),ft=n("h2"),Xt=n("a"),ba=n("span"),f(Io.$$.fragment),Ol=d(),ka=n("span"),Cl=r("LEDTokenizerFast"),wr=d(),ze=n("div"),f(Go.$$.fragment),Al=d(),Bo=n("p"),Pl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=n("em"),Nl=r("tokenizers"),jl=r(" library)."),Il=d(),Jt=n("p"),rs=n("a"),Gl=r("LEDTokenizerFast"),Bl=r(" is identical to "),is=n("a"),Ql=r("BartTokenizerFast"),Hl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Wl=d(),Qo=n("p"),Ul=r("Refer to superclass "),ds=n("a"),Rl=r("BartTokenizerFast"),Vl=r(" for usage examples and documentation concerning parameters."),yr=d(),_t=n("h2"),Zt=n("a"),ya=n("span"),f(Ho.$$.fragment),Kl=d(),Ea=n("span"),Xl=r("LED specific outputs"),Er=d(),gt=n("div"),f(Wo.$$.fragment),Jl=d(),qa=n("p"),Zl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),qr=d(),Tt=n("div"),f(Uo.$$.fragment),Yl=d(),La=n("p"),ec=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lr=d(),vt=n("div"),f(Ro.$$.fragment),tc=d(),Da=n("p"),oc=r("Base class for sequence-to-sequence language models outputs."),Dr=d(),bt=n("div"),f(Vo.$$.fragment),nc=d(),Fa=n("p"),sc=r("Base class for outputs of sequence-to-sequence sentence classification models."),Fr=d(),kt=n("div"),f(Ko.$$.fragment),ac=d(),za=n("p"),rc=r("Base class for outputs of sequence-to-sequence question answering models."),zr=d(),wt=n("div"),f(Xo.$$.fragment),ic=d(),$a=n("p"),dc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),$r=d(),yt=n("div"),f(Jo.$$.fragment),lc=d(),xa=n("p"),cc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),xr=d(),Et=n("div"),f(Zo.$$.fragment),hc=d(),Ma=n("p"),pc=r("Base class for sequence-to-sequence language models outputs."),Mr=d(),qt=n("h2"),Yt=n("a"),Sa=n("span"),f(Yo.$$.fragment),uc=d(),Oa=n("span"),mc=r("LEDModel"),Sr=d(),$e=n("div"),f(en.$$.fragment),fc=d(),tn=n("p"),_c=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=n("a"),gc=r("PreTrainedModel"),Tc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc=d(),on=n("p"),bc=r("This model is also a PyTorch "),nn=n("a"),kc=r("torch.nn.Module"),wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc=d(),be=n("div"),f(sn.$$.fragment),Ec=d(),Lt=n("p"),qc=r("The "),cs=n("a"),Lc=r("LEDModel"),Dc=r(" forward method, overrides the "),Ca=n("code"),Fc=r("__call__"),zc=r(" special method."),$c=d(),f(eo.$$.fragment),xc=d(),Aa=n("p"),Mc=r("Example:"),Sc=d(),f(an.$$.fragment),Or=d(),Dt=n("h2"),to=n("a"),Pa=n("span"),f(rn.$$.fragment),Oc=d(),Na=n("span"),Cc=r("LEDForConditionalGeneration"),Cr=d(),xe=n("div"),f(dn.$$.fragment),Ac=d(),ln=n("p"),Pc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=n("a"),Nc=r("PreTrainedModel"),jc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=d(),cn=n("p"),Gc=r("This model is also a PyTorch "),hn=n("a"),Bc=r("torch.nn.Module"),Qc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc=d(),H=n("div"),f(pn.$$.fragment),Wc=d(),Ft=n("p"),Uc=r("The "),ps=n("a"),Rc=r("LEDForConditionalGeneration"),Vc=r(" forward method, overrides the "),ja=n("code"),Kc=r("__call__"),Xc=r(" special method."),Jc=d(),f(oo.$$.fragment),Zc=d(),Ia=n("p"),Yc=r("Conditional generation example:"),eh=d(),f(un.$$.fragment),th=d(),Ga=n("p"),oh=r("Summarization example:"),nh=d(),f(mn.$$.fragment),Ar=d(),zt=n("h2"),no=n("a"),Ba=n("span"),f(fn.$$.fragment),sh=d(),Qa=n("span"),ah=r("LEDForSequenceClassification"),Pr=d(),he=n("div"),f(_n.$$.fragment),rh=d(),Ha=n("p"),ih=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),dh=d(),gn=n("p"),lh=r("This model inherits from "),us=n("a"),ch=r("PreTrainedModel"),hh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph=d(),Tn=n("p"),uh=r("This model is also a PyTorch "),vn=n("a"),mh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=d(),P=n("div"),f(bn.$$.fragment),gh=d(),$t=n("p"),Th=r("The "),ms=n("a"),vh=r("LEDForSequenceClassification"),bh=r(" forward method, overrides the "),Wa=n("code"),kh=r("__call__"),wh=r(" special method."),yh=d(),f(so.$$.fragment),Eh=d(),Ua=n("p"),qh=r("Example of single-label classification:"),Lh=d(),f(kn.$$.fragment),Dh=d(),f(wn.$$.fragment),Fh=d(),Ra=n("p"),zh=r("Example of multi-label classification:"),$h=d(),f(yn.$$.fragment),xh=d(),f(En.$$.fragment),Nr=d(),xt=n("h2"),ao=n("a"),Va=n("span"),f(qn.$$.fragment),Mh=d(),Ka=n("span"),Sh=r("LEDForQuestionAnswering"),jr=d(),pe=n("div"),f(Ln.$$.fragment),Oh=d(),Mt=n("p"),Ch=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=n("code"),Ah=r("span start logits"),Ph=r(" and "),Ja=n("code"),Nh=r("span end logits"),jh=r(")."),Ih=d(),Dn=n("p"),Gh=r("This model inherits from "),fs=n("a"),Bh=r("PreTrainedModel"),Qh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=d(),Fn=n("p"),Wh=r("This model is also a PyTorch "),zn=n("a"),Uh=r("torch.nn.Module"),Rh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vh=d(),te=n("div"),f($n.$$.fragment),Kh=d(),St=n("p"),Xh=r("The "),_s=n("a"),Jh=r("LEDForQuestionAnswering"),Zh=r(" forward method, overrides the "),Za=n("code"),Yh=r("__call__"),ep=r(" special method."),tp=d(),f(ro.$$.fragment),op=d(),Ya=n("p"),np=r("Example:"),sp=d(),f(xn.$$.fragment),ap=d(),f(Mn.$$.fragment),Ir=d(),Ot=n("h2"),io=n("a"),er=n("span"),f(Sn.$$.fragment),rp=d(),tr=n("span"),ip=r("TFLEDModel"),Gr=d(),ue=n("div"),f(On.$$.fragment),dp=d(),Cn=n("p"),lp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=n("a"),cp=r("TFPreTrainedModel"),hp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=d(),An=n("p"),up=r("This model is also a "),Pn=n("a"),mp=r("tf.keras.Model"),fp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p=d(),f(lo.$$.fragment),gp=d(),ke=n("div"),f(Nn.$$.fragment),Tp=d(),Ct=n("p"),vp=r("The "),Ts=n("a"),bp=r("TFLEDModel"),kp=r(" forward method, overrides the "),or=n("code"),wp=r("__call__"),yp=r(" special method."),Ep=d(),f(co.$$.fragment),qp=d(),nr=n("p"),Lp=r("Example:"),Dp=d(),f(jn.$$.fragment),Br=d(),At=n("h2"),ho=n("a"),sr=n("span"),f(In.$$.fragment),Fp=d(),ar=n("span"),zp=r("TFLEDForConditionalGeneration"),Qr=d(),me=n("div"),f(Gn.$$.fragment),$p=d(),Bn=n("p"),xp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),vs=n("a"),Mp=r("TFPreTrainedModel"),Sp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op=d(),Qn=n("p"),Cp=r("This model is also a "),Hn=n("a"),Ap=r("tf.keras.Model"),Pp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Np=d(),f(po.$$.fragment),jp=d(),we=n("div"),f(Wn.$$.fragment),Ip=d(),Pt=n("p"),Gp=r("The "),bs=n("a"),Bp=r("TFLEDForConditionalGeneration"),Qp=r(" forward method, overrides the "),rr=n("code"),Hp=r("__call__"),Wp=r(" special method."),Up=d(),f(uo.$$.fragment),Rp=d(),ir=n("p"),Vp=r("Examples:"),Kp=d(),f(Un.$$.fragment),this.h()},l(o){const p=Pf('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),k=s(o,"H1",{class:!0});var Rn=a(k);E=s(Rn,"A",{id:!0,class:!0,href:!0});var dr=a(E);q=s(dr,"SPAN",{});var lr=a(q);_(y.$$.fragment,lr),lr.forEach(t),dr.forEach(t),w=l(Rn),D=s(Rn,"SPAN",{});var cr=a(D);je=i(cr,"LED"),cr.forEach(t),Rn.forEach(t),ge=l(o),F=s(o,"H2",{class:!0});var Vn=a(F);Y=s(Vn,"A",{id:!0,class:!0,href:!0});var hr=a(Y);R=s(hr,"SPAN",{});var pr=a(R);_(ne.$$.fragment,pr),pr.forEach(t),hr.forEach(t),Ie=l(Vn),V=s(Vn,"SPAN",{});var ur=a(V);Ge=i(ur,"Overview"),ur.forEach(t),Vn.forEach(t),Me=l(o),B=s(o,"P",{});var Wr=a(B);K=i(Wr,"The LED model was proposed in "),se=s(Wr,"A",{href:!0,rel:!0});var Zp=a(se);Le=i(Zp,"Longformer: The Long-Document Transformer"),Zp.forEach(t),S=i(Wr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Wr.forEach(t),A=l(o),Te=s(o,"P",{});var Yp=a(Te);ae=i(Yp,"The abstract from the paper is the following:"),Yp.forEach(t),Se=l(o),ve=s(o,"P",{});var eu=a(ve);X=s(eu,"EM",{});var tu=a(X);Be=i(tu,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),tu.forEach(t),eu.forEach(t),Oe=l(o),O=s(o,"P",{});var ou=a(O);Qe=i(ou,"Tips:"),ou.forEach(t),ee=l(o),x=s(o,"UL",{});var ye=a(x);M=s(ye,"LI",{});var fe=a(M);Q=s(fe,"A",{href:!0});var nu=a(Q);He=i(nu,"LEDForConditionalGeneration"),nu.forEach(t),We=i(fe,` is an extension of
`),j=s(fe,"A",{href:!0});var su=a(j);Ue=i(su,"BartForConditionalGeneration"),su.forEach(t),re=i(fe," exchanging the traditional "),De=s(fe,"EM",{});var au=a(De);m=i(au,"self-attention"),au.forEach(t),z=i(fe,` layer with
`),ie=s(fe,"EM",{});var ru=a(ie);st=i(ru,"Longformer"),ru.forEach(t),at=i(fe,"\u2019s "),I=s(fe,"EM",{});var iu=a(I);rt=i(iu,"chunked self-attention"),iu.forEach(t),it=i(fe," layer. "),Ce=s(fe,"A",{href:!0});var du=a(Ce);J=i(du,"LEDTokenizer"),du.forEach(t),de=i(fe,` is an alias of
`),Ae=s(fe,"A",{href:!0});var lu=a(Ae);dt=i(lu,"BartTokenizer"),lu.forEach(t),le=i(fe,"."),fe.forEach(t),lt=l(ye),ce=s(ye,"LI",{});var ks=a(ce);Re=i(ks,"LED works very well on long-range "),Ve=s(ks,"EM",{});var cu=a(Ve);Ai=i(cu,"sequence-to-sequence"),cu.forEach(t),Pi=i(ks," tasks where the "),Ss=s(ks,"CODE",{});var hu=a(Ss);Ni=i(hu,"input_ids"),hu.forEach(t),ji=i(ks,` largely exceed a length of
1024 tokens.`),ks.forEach(t),Ii=l(ye),Fe=s(ye,"LI",{});var Xe=a(Fe);Gi=i(Xe,"LED pads the "),Os=s(Xe,"CODE",{});var pu=a(Os);Bi=i(pu,"input_ids"),pu.forEach(t),Qi=i(Xe," to be a multiple of "),Cs=s(Xe,"CODE",{});var uu=a(Cs);Hi=i(uu,"config.attention_window"),uu.forEach(t),Wi=i(Xe,` if required. Therefore a small speed-up is
gained, when `),Kn=s(Xe,"A",{href:!0});var mu=a(Kn);Ui=i(mu,"LEDTokenizer"),mu.forEach(t),Ri=i(Xe," is used with the "),As=s(Xe,"CODE",{});var fu=a(As);Vi=i(fu,"pad_to_multiple_of"),fu.forEach(t),Ki=i(Xe," argument."),Xe.forEach(t),Xi=l(ye),Z=s(ye,"LI",{});var Ee=a(Z);Ji=i(Ee,"LED makes use of "),Ps=s(Ee,"EM",{});var _u=a(Ps);Zi=i(_u,"global attention"),_u.forEach(t),Yi=i(Ee," by means of the "),Ns=s(Ee,"CODE",{});var gu=a(Ns);ed=i(gu,"global_attention_mask"),gu.forEach(t),td=i(Ee,` (see
`),Xn=s(Ee,"A",{href:!0});var Tu=a(Xn);od=i(Tu,"LongformerModel"),Tu.forEach(t),nd=i(Ee,"). For summarization, it is advised to put "),js=s(Ee,"EM",{});var vu=a(js);sd=i(vu,"global attention"),vu.forEach(t),ad=i(Ee,` only on the first
`),Is=s(Ee,"CODE",{});var bu=a(Is);rd=i(bu,"<s>"),bu.forEach(t),id=i(Ee," token. For question answering, it is advised to put "),Gs=s(Ee,"EM",{});var ku=a(Gs);dd=i(ku,"global attention"),ku.forEach(t),ld=i(Ee," on all tokens of the question."),Ee.forEach(t),cd=l(ye),ct=s(ye,"LI",{});var ws=a(ct);hd=i(ws,"To fine-tune LED on all 16384, it is necessary to enable "),Bs=s(ws,"EM",{});var wu=a(Bs);pd=i(wu,"gradient checkpointing"),wu.forEach(t),ud=i(ws,` by executing
`),Qs=s(ws,"CODE",{});var yu=a(Qs);md=i(yu,"model.gradient_checkpointing_enable()"),yu.forEach(t),fd=i(ws,"."),ws.forEach(t),_d=l(ye),To=s(ye,"LI",{});var Ur=a(To);gd=i(Ur,"A notebook showing how to evaluate LED, can be accessed "),vo=s(Ur,"A",{href:!0,rel:!0});var Eu=a(vo);Td=i(Eu,"here"),Eu.forEach(t),vd=i(Ur,"."),Ur.forEach(t),bd=l(ye),bo=s(ye,"LI",{});var Rr=a(bo);kd=i(Rr,"A notebook showing how to fine-tune LED, can be accessed "),ko=s(Rr,"A",{href:!0,rel:!0});var qu=a(ko);wd=i(qu,"here"),qu.forEach(t),yd=i(Rr,"."),Rr.forEach(t),ye.forEach(t),_r=l(o),Nt=s(o,"P",{});var Vr=a(Nt);Ed=i(Vr,"This model was contributed by "),wo=s(Vr,"A",{href:!0,rel:!0});var Lu=a(wo);qd=i(Lu,"patrickvonplaten"),Lu.forEach(t),Ld=i(Vr,"."),Vr.forEach(t),gr=l(o),ht=s(o,"H2",{class:!0});var Kr=a(ht);jt=s(Kr,"A",{id:!0,class:!0,href:!0});var Du=a(jt);Hs=s(Du,"SPAN",{});var Fu=a(Hs);_(yo.$$.fragment,Fu),Fu.forEach(t),Du.forEach(t),Dd=l(Kr),Ws=s(Kr,"SPAN",{});var zu=a(Ws);Fd=i(zu,"LEDConfig"),zu.forEach(t),Kr.forEach(t),Tr=l(o),C=s(o,"DIV",{class:!0});var W=a(C);_(Eo.$$.fragment,W),zd=l(W),pt=s(W,"P",{});var ys=a(pt);$d=i(ys,"This is the configuration class to store the configuration of a "),Jn=s(ys,"A",{href:!0});var $u=a(Jn);xd=i($u,"LEDModel"),$u.forEach(t),Md=i(ys,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(ys,"A",{href:!0,rel:!0});var xu=a(qo);Sd=i(xu,"allenai/led-base-16384"),xu.forEach(t),Od=i(ys," architecture."),ys.forEach(t),Cd=l(W),ut=s(W,"P",{});var Es=a(ut);Ad=i(Es,"Configuration objects inherit from "),Zn=s(Es,"A",{href:!0});var Mu=a(Zn);Pd=i(Mu,"PretrainedConfig"),Mu.forEach(t),Nd=i(Es,` and can be used to control the model outputs. Read the
documentation from `),Yn=s(Es,"A",{href:!0});var Su=a(Yn);jd=i(Su,"PretrainedConfig"),Su.forEach(t),Id=i(Es," for more information."),Es.forEach(t),Gd=l(W),Us=s(W,"P",{});var Ou=a(Us);Bd=i(Ou,"Example:"),Ou.forEach(t),Qd=l(W),_(Lo.$$.fragment,W),Hd=l(W),Rs=s(W,"BLOCKQUOTE",{});var Cu=a(Rs);Vs=s(Cu,"BLOCKQUOTE",{});var Au=a(Vs);Ks=s(Au,"BLOCKQUOTE",{});var Pu=a(Ks);Xs=s(Pu,"P",{});var Nu=a(Xs);Wd=i(Nu,"from transformers import LEDModel, LEDConfig"),Nu.forEach(t),Pu.forEach(t),Au.forEach(t),Cu.forEach(t),Ud=l(W),Js=s(W,"BLOCKQUOTE",{});var ju=a(Js);Zs=s(ju,"BLOCKQUOTE",{});var Iu=a(Zs);Ys=s(Iu,"BLOCKQUOTE",{});var Gu=a(Ys);It=s(Gu,"H1",{class:!0});var Xr=a(It);Gt=s(Xr,"A",{id:!0,class:!0,href:!0});var Bu=a(Gt);ea=s(Bu,"SPAN",{});var Qu=a(ea);_(Do.$$.fragment,Qu),Qu.forEach(t),Bu.forEach(t),Rd=l(Xr),ta=s(Xr,"SPAN",{});var Hu=a(ta);Vd=i(Hu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Hu.forEach(t),Xr.forEach(t),Gu.forEach(t),Iu.forEach(t),ju.forEach(t),Kd=l(W),oa=s(W,"BLOCKQUOTE",{});var Wu=a(oa);na=s(Wu,"BLOCKQUOTE",{});var Uu=a(na);Fo=s(Uu,"BLOCKQUOTE",{});var Jr=a(Fo);Bt=s(Jr,"H1",{class:!0});var Zr=a(Bt);Qt=s(Zr,"A",{id:!0,class:!0,href:!0});var Ru=a(Qt);sa=s(Ru,"SPAN",{});var Vu=a(sa);_(zo.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),Xd=l(Zr),aa=s(Zr,"SPAN",{});var Ku=a(aa);Jd=i(Ku,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ku.forEach(t),Zr.forEach(t),Zd=l(Jr),ra=s(Jr,"P",{});var Xu=a(ra);Yd=i(Xu,"LEDModel(configuration)"),Xu.forEach(t),Jr.forEach(t),Uu.forEach(t),Wu.forEach(t),el=l(W),ia=s(W,"BLOCKQUOTE",{});var Ju=a(ia);da=s(Ju,"BLOCKQUOTE",{});var Zu=a(da);la=s(Zu,"BLOCKQUOTE",{});var Yu=a(la);Ht=s(Yu,"H1",{class:!0});var Yr=a(Ht);Wt=s(Yr,"A",{id:!0,class:!0,href:!0});var em=a(Wt);ca=s(em,"SPAN",{});var tm=a(ca);_($o.$$.fragment,tm),tm.forEach(t),em.forEach(t),tl=l(Yr),ha=s(Yr,"SPAN",{});var om=a(ha);ol=i(om,"Accessing the model configuration >>> configuration = model.config"),om.forEach(t),Yr.forEach(t),Yu.forEach(t),Zu.forEach(t),Ju.forEach(t),W.forEach(t),vr=l(o),mt=s(o,"H2",{class:!0});var ei=a(mt);Ut=s(ei,"A",{id:!0,class:!0,href:!0});var nm=a(Ut);pa=s(nm,"SPAN",{});var sm=a(pa);_(xo.$$.fragment,sm),sm.forEach(t),nm.forEach(t),nl=l(ei),ua=s(ei,"SPAN",{});var am=a(ua);sl=i(am,"LEDTokenizer"),am.forEach(t),ei.forEach(t),br=l(o),N=s(o,"DIV",{class:!0});var oe=a(N);_(Mo.$$.fragment,oe),al=l(oe),ma=s(oe,"P",{});var rm=a(ma);rl=i(rm,"Construct a LED tokenizer."),rm.forEach(t),il=l(oe),Rt=s(oe,"P",{});var mr=a(Rt);es=s(mr,"A",{href:!0});var im=a(es);dl=i(im,"LEDTokenizer"),im.forEach(t),ll=i(mr," is identical to "),ts=s(mr,"A",{href:!0});var dm=a(ts);cl=i(dm,"BartTokenizer"),dm.forEach(t),hl=i(mr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),mr.forEach(t),pl=l(oe),So=s(oe,"P",{});var ti=a(So);ul=i(ti,"Refer to superclass "),os=s(ti,"A",{href:!0});var lm=a(os);ml=i(lm,"BartTokenizer"),lm.forEach(t),fl=i(ti," for usage examples and documentation concerning parameters."),ti.forEach(t),_l=l(oe),Ke=s(oe,"DIV",{class:!0});var qs=a(Ke);_(Oo.$$.fragment,qs),gl=l(qs),fa=s(qs,"P",{});var cm=a(fa);Tl=i(cm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),cm.forEach(t),vl=l(qs),Co=s(qs,"UL",{});var oi=a(Co);ns=s(oi,"LI",{});var Xp=a(ns);bl=i(Xp,"single sequence: "),_a=s(Xp,"CODE",{});var hm=a(_a);kl=i(hm,"<s> X </s>"),hm.forEach(t),Xp.forEach(t),wl=l(oi),ss=s(oi,"LI",{});var Jp=a(ss);yl=i(Jp,"pair of sequences: "),ga=s(Jp,"CODE",{});var pm=a(ga);El=i(pm,"<s> A </s></s> B </s>"),pm.forEach(t),Jp.forEach(t),oi.forEach(t),qs.forEach(t),ql=l(oe),Vt=s(oe,"DIV",{class:!0});var ni=a(Vt);_(Ao.$$.fragment,ni),Ll=l(ni),Po=s(ni,"P",{});var si=a(Po);Dl=i(si,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ta=s(si,"CODE",{});var um=a(Ta);Fl=i(um,"prepare_for_model"),um.forEach(t),zl=i(si," method."),si.forEach(t),ni.forEach(t),$l=l(oe),Kt=s(oe,"DIV",{class:!0});var ai=a(Kt);_(No.$$.fragment,ai),xl=l(ai),va=s(ai,"P",{});var mm=a(va);Ml=i(mm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),mm.forEach(t),ai.forEach(t),Sl=l(oe),as=s(oe,"DIV",{class:!0});var fm=a(as);_(jo.$$.fragment,fm),fm.forEach(t),oe.forEach(t),kr=l(o),ft=s(o,"H2",{class:!0});var ri=a(ft);Xt=s(ri,"A",{id:!0,class:!0,href:!0});var _m=a(Xt);ba=s(_m,"SPAN",{});var gm=a(ba);_(Io.$$.fragment,gm),gm.forEach(t),_m.forEach(t),Ol=l(ri),ka=s(ri,"SPAN",{});var Tm=a(ka);Cl=i(Tm,"LEDTokenizerFast"),Tm.forEach(t),ri.forEach(t),wr=l(o),ze=s(o,"DIV",{class:!0});var mo=a(ze);_(Go.$$.fragment,mo),Al=l(mo),Bo=s(mo,"P",{});var ii=a(Bo);Pl=i(ii,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),wa=s(ii,"EM",{});var vm=a(wa);Nl=i(vm,"tokenizers"),vm.forEach(t),jl=i(ii," library)."),ii.forEach(t),Il=l(mo),Jt=s(mo,"P",{});var fr=a(Jt);rs=s(fr,"A",{href:!0});var bm=a(rs);Gl=i(bm,"LEDTokenizerFast"),bm.forEach(t),Bl=i(fr," is identical to "),is=s(fr,"A",{href:!0});var km=a(is);Ql=i(km,"BartTokenizerFast"),km.forEach(t),Hl=i(fr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),fr.forEach(t),Wl=l(mo),Qo=s(mo,"P",{});var di=a(Qo);Ul=i(di,"Refer to superclass "),ds=s(di,"A",{href:!0});var wm=a(ds);Rl=i(wm,"BartTokenizerFast"),wm.forEach(t),Vl=i(di," for usage examples and documentation concerning parameters."),di.forEach(t),mo.forEach(t),yr=l(o),_t=s(o,"H2",{class:!0});var li=a(_t);Zt=s(li,"A",{id:!0,class:!0,href:!0});var ym=a(Zt);ya=s(ym,"SPAN",{});var Em=a(ya);_(Ho.$$.fragment,Em),Em.forEach(t),ym.forEach(t),Kl=l(li),Ea=s(li,"SPAN",{});var qm=a(Ea);Xl=i(qm,"LED specific outputs"),qm.forEach(t),li.forEach(t),Er=l(o),gt=s(o,"DIV",{class:!0});var ci=a(gt);_(Wo.$$.fragment,ci),Jl=l(ci),qa=s(ci,"P",{});var Lm=a(qa);Zl=i(Lm,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Lm.forEach(t),ci.forEach(t),qr=l(o),Tt=s(o,"DIV",{class:!0});var hi=a(Tt);_(Uo.$$.fragment,hi),Yl=l(hi),La=s(hi,"P",{});var Dm=a(La);ec=i(Dm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dm.forEach(t),hi.forEach(t),Lr=l(o),vt=s(o,"DIV",{class:!0});var pi=a(vt);_(Ro.$$.fragment,pi),tc=l(pi),Da=s(pi,"P",{});var Fm=a(Da);oc=i(Fm,"Base class for sequence-to-sequence language models outputs."),Fm.forEach(t),pi.forEach(t),Dr=l(o),bt=s(o,"DIV",{class:!0});var ui=a(bt);_(Vo.$$.fragment,ui),nc=l(ui),Fa=s(ui,"P",{});var zm=a(Fa);sc=i(zm,"Base class for outputs of sequence-to-sequence sentence classification models."),zm.forEach(t),ui.forEach(t),Fr=l(o),kt=s(o,"DIV",{class:!0});var mi=a(kt);_(Ko.$$.fragment,mi),ac=l(mi),za=s(mi,"P",{});var $m=a(za);rc=i($m,"Base class for outputs of sequence-to-sequence question answering models."),$m.forEach(t),mi.forEach(t),zr=l(o),wt=s(o,"DIV",{class:!0});var fi=a(wt);_(Xo.$$.fragment,fi),ic=l(fi),$a=s(fi,"P",{});var xm=a($a);dc=i(xm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),xm.forEach(t),fi.forEach(t),$r=l(o),yt=s(o,"DIV",{class:!0});var _i=a(yt);_(Jo.$$.fragment,_i),lc=l(_i),xa=s(_i,"P",{});var Mm=a(xa);cc=i(Mm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Mm.forEach(t),_i.forEach(t),xr=l(o),Et=s(o,"DIV",{class:!0});var gi=a(Et);_(Zo.$$.fragment,gi),hc=l(gi),Ma=s(gi,"P",{});var Sm=a(Ma);pc=i(Sm,"Base class for sequence-to-sequence language models outputs."),Sm.forEach(t),gi.forEach(t),Mr=l(o),qt=s(o,"H2",{class:!0});var Ti=a(qt);Yt=s(Ti,"A",{id:!0,class:!0,href:!0});var Om=a(Yt);Sa=s(Om,"SPAN",{});var Cm=a(Sa);_(Yo.$$.fragment,Cm),Cm.forEach(t),Om.forEach(t),uc=l(Ti),Oa=s(Ti,"SPAN",{});var Am=a(Oa);mc=i(Am,"LEDModel"),Am.forEach(t),Ti.forEach(t),Sr=l(o),$e=s(o,"DIV",{class:!0});var fo=a($e);_(en.$$.fragment,fo),fc=l(fo),tn=s(fo,"P",{});var vi=a(tn);_c=i(vi,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ls=s(vi,"A",{href:!0});var Pm=a(ls);gc=i(Pm,"PreTrainedModel"),Pm.forEach(t),Tc=i(vi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi.forEach(t),vc=l(fo),on=s(fo,"P",{});var bi=a(on);bc=i(bi,"This model is also a PyTorch "),nn=s(bi,"A",{href:!0,rel:!0});var Nm=a(nn);kc=i(Nm,"torch.nn.Module"),Nm.forEach(t),wc=i(bi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bi.forEach(t),yc=l(fo),be=s(fo,"DIV",{class:!0});var Je=a(be);_(sn.$$.fragment,Je),Ec=l(Je),Lt=s(Je,"P",{});var Ls=a(Lt);qc=i(Ls,"The "),cs=s(Ls,"A",{href:!0});var jm=a(cs);Lc=i(jm,"LEDModel"),jm.forEach(t),Dc=i(Ls," forward method, overrides the "),Ca=s(Ls,"CODE",{});var Im=a(Ca);Fc=i(Im,"__call__"),Im.forEach(t),zc=i(Ls," special method."),Ls.forEach(t),$c=l(Je),_(eo.$$.fragment,Je),xc=l(Je),Aa=s(Je,"P",{});var Gm=a(Aa);Mc=i(Gm,"Example:"),Gm.forEach(t),Sc=l(Je),_(an.$$.fragment,Je),Je.forEach(t),fo.forEach(t),Or=l(o),Dt=s(o,"H2",{class:!0});var ki=a(Dt);to=s(ki,"A",{id:!0,class:!0,href:!0});var Bm=a(to);Pa=s(Bm,"SPAN",{});var Qm=a(Pa);_(rn.$$.fragment,Qm),Qm.forEach(t),Bm.forEach(t),Oc=l(ki),Na=s(ki,"SPAN",{});var Hm=a(Na);Cc=i(Hm,"LEDForConditionalGeneration"),Hm.forEach(t),ki.forEach(t),Cr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);_(dn.$$.fragment,_o),Ac=l(_o),ln=s(_o,"P",{});var wi=a(ln);Pc=i(wi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),hs=s(wi,"A",{href:!0});var Wm=a(hs);Nc=i(Wm,"PreTrainedModel"),Wm.forEach(t),jc=i(wi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi.forEach(t),Ic=l(_o),cn=s(_o,"P",{});var yi=a(cn);Gc=i(yi,"This model is also a PyTorch "),hn=s(yi,"A",{href:!0,rel:!0});var Um=a(hn);Bc=i(Um,"torch.nn.Module"),Um.forEach(t),Qc=i(yi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yi.forEach(t),Hc=l(_o),H=s(_o,"DIV",{class:!0});var qe=a(H);_(pn.$$.fragment,qe),Wc=l(qe),Ft=s(qe,"P",{});var Ds=a(Ft);Uc=i(Ds,"The "),ps=s(Ds,"A",{href:!0});var Rm=a(ps);Rc=i(Rm,"LEDForConditionalGeneration"),Rm.forEach(t),Vc=i(Ds," forward method, overrides the "),ja=s(Ds,"CODE",{});var Vm=a(ja);Kc=i(Vm,"__call__"),Vm.forEach(t),Xc=i(Ds," special method."),Ds.forEach(t),Jc=l(qe),_(oo.$$.fragment,qe),Zc=l(qe),Ia=s(qe,"P",{});var Km=a(Ia);Yc=i(Km,"Conditional generation example:"),Km.forEach(t),eh=l(qe),_(un.$$.fragment,qe),th=l(qe),Ga=s(qe,"P",{});var Xm=a(Ga);oh=i(Xm,"Summarization example:"),Xm.forEach(t),nh=l(qe),_(mn.$$.fragment,qe),qe.forEach(t),_o.forEach(t),Ar=l(o),zt=s(o,"H2",{class:!0});var Ei=a(zt);no=s(Ei,"A",{id:!0,class:!0,href:!0});var Jm=a(no);Ba=s(Jm,"SPAN",{});var Zm=a(Ba);_(fn.$$.fragment,Zm),Zm.forEach(t),Jm.forEach(t),sh=l(Ei),Qa=s(Ei,"SPAN",{});var Ym=a(Qa);ah=i(Ym,"LEDForSequenceClassification"),Ym.forEach(t),Ei.forEach(t),Pr=l(o),he=s(o,"DIV",{class:!0});var Ze=a(he);_(_n.$$.fragment,Ze),rh=l(Ze),Ha=s(Ze,"P",{});var ef=a(Ha);ih=i(ef,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ef.forEach(t),dh=l(Ze),gn=s(Ze,"P",{});var qi=a(gn);lh=i(qi,"This model inherits from "),us=s(qi,"A",{href:!0});var tf=a(us);ch=i(tf,"PreTrainedModel"),tf.forEach(t),hh=i(qi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qi.forEach(t),ph=l(Ze),Tn=s(Ze,"P",{});var Li=a(Tn);uh=i(Li,"This model is also a PyTorch "),vn=s(Li,"A",{href:!0,rel:!0});var of=a(vn);mh=i(of,"torch.nn.Module"),of.forEach(t),fh=i(Li,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Li.forEach(t),_h=l(Ze),P=s(Ze,"DIV",{class:!0});var U=a(P);_(bn.$$.fragment,U),gh=l(U),$t=s(U,"P",{});var Fs=a($t);Th=i(Fs,"The "),ms=s(Fs,"A",{href:!0});var nf=a(ms);vh=i(nf,"LEDForSequenceClassification"),nf.forEach(t),bh=i(Fs," forward method, overrides the "),Wa=s(Fs,"CODE",{});var sf=a(Wa);kh=i(sf,"__call__"),sf.forEach(t),wh=i(Fs," special method."),Fs.forEach(t),yh=l(U),_(so.$$.fragment,U),Eh=l(U),Ua=s(U,"P",{});var af=a(Ua);qh=i(af,"Example of single-label classification:"),af.forEach(t),Lh=l(U),_(kn.$$.fragment,U),Dh=l(U),_(wn.$$.fragment,U),Fh=l(U),Ra=s(U,"P",{});var rf=a(Ra);zh=i(rf,"Example of multi-label classification:"),rf.forEach(t),$h=l(U),_(yn.$$.fragment,U),xh=l(U),_(En.$$.fragment,U),U.forEach(t),Ze.forEach(t),Nr=l(o),xt=s(o,"H2",{class:!0});var Di=a(xt);ao=s(Di,"A",{id:!0,class:!0,href:!0});var df=a(ao);Va=s(df,"SPAN",{});var lf=a(Va);_(qn.$$.fragment,lf),lf.forEach(t),df.forEach(t),Mh=l(Di),Ka=s(Di,"SPAN",{});var cf=a(Ka);Sh=i(cf,"LEDForQuestionAnswering"),cf.forEach(t),Di.forEach(t),jr=l(o),pe=s(o,"DIV",{class:!0});var Ye=a(pe);_(Ln.$$.fragment,Ye),Oh=l(Ye),Mt=s(Ye,"P",{});var zs=a(Mt);Ch=i(zs,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Xa=s(zs,"CODE",{});var hf=a(Xa);Ah=i(hf,"span start logits"),hf.forEach(t),Ph=i(zs," and "),Ja=s(zs,"CODE",{});var pf=a(Ja);Nh=i(pf,"span end logits"),pf.forEach(t),jh=i(zs,")."),zs.forEach(t),Ih=l(Ye),Dn=s(Ye,"P",{});var Fi=a(Dn);Gh=i(Fi,"This model inherits from "),fs=s(Fi,"A",{href:!0});var uf=a(fs);Bh=i(uf,"PreTrainedModel"),uf.forEach(t),Qh=i(Fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fi.forEach(t),Hh=l(Ye),Fn=s(Ye,"P",{});var zi=a(Fn);Wh=i(zi,"This model is also a PyTorch "),zn=s(zi,"A",{href:!0,rel:!0});var mf=a(zn);Uh=i(mf,"torch.nn.Module"),mf.forEach(t),Rh=i(zi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zi.forEach(t),Vh=l(Ye),te=s(Ye,"DIV",{class:!0});var Pe=a(te);_($n.$$.fragment,Pe),Kh=l(Pe),St=s(Pe,"P",{});var $s=a(St);Xh=i($s,"The "),_s=s($s,"A",{href:!0});var ff=a(_s);Jh=i(ff,"LEDForQuestionAnswering"),ff.forEach(t),Zh=i($s," forward method, overrides the "),Za=s($s,"CODE",{});var _f=a(Za);Yh=i(_f,"__call__"),_f.forEach(t),ep=i($s," special method."),$s.forEach(t),tp=l(Pe),_(ro.$$.fragment,Pe),op=l(Pe),Ya=s(Pe,"P",{});var gf=a(Ya);np=i(gf,"Example:"),gf.forEach(t),sp=l(Pe),_(xn.$$.fragment,Pe),ap=l(Pe),_(Mn.$$.fragment,Pe),Pe.forEach(t),Ye.forEach(t),Ir=l(o),Ot=s(o,"H2",{class:!0});var $i=a(Ot);io=s($i,"A",{id:!0,class:!0,href:!0});var Tf=a(io);er=s(Tf,"SPAN",{});var vf=a(er);_(Sn.$$.fragment,vf),vf.forEach(t),Tf.forEach(t),rp=l($i),tr=s($i,"SPAN",{});var bf=a(tr);ip=i(bf,"TFLEDModel"),bf.forEach(t),$i.forEach(t),Gr=l(o),ue=s(o,"DIV",{class:!0});var et=a(ue);_(On.$$.fragment,et),dp=l(et),Cn=s(et,"P",{});var xi=a(Cn);lp=i(xi,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),gs=s(xi,"A",{href:!0});var kf=a(gs);cp=i(kf,"TFPreTrainedModel"),kf.forEach(t),hp=i(xi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xi.forEach(t),pp=l(et),An=s(et,"P",{});var Mi=a(An);up=i(Mi,"This model is also a "),Pn=s(Mi,"A",{href:!0,rel:!0});var wf=a(Pn);mp=i(wf,"tf.keras.Model"),wf.forEach(t),fp=i(Mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mi.forEach(t),_p=l(et),_(lo.$$.fragment,et),gp=l(et),ke=s(et,"DIV",{class:!0});var tt=a(ke);_(Nn.$$.fragment,tt),Tp=l(tt),Ct=s(tt,"P",{});var xs=a(Ct);vp=i(xs,"The "),Ts=s(xs,"A",{href:!0});var yf=a(Ts);bp=i(yf,"TFLEDModel"),yf.forEach(t),kp=i(xs," forward method, overrides the "),or=s(xs,"CODE",{});var Ef=a(or);wp=i(Ef,"__call__"),Ef.forEach(t),yp=i(xs," special method."),xs.forEach(t),Ep=l(tt),_(co.$$.fragment,tt),qp=l(tt),nr=s(tt,"P",{});var qf=a(nr);Lp=i(qf,"Example:"),qf.forEach(t),Dp=l(tt),_(jn.$$.fragment,tt),tt.forEach(t),et.forEach(t),Br=l(o),At=s(o,"H2",{class:!0});var Si=a(At);ho=s(Si,"A",{id:!0,class:!0,href:!0});var Lf=a(ho);sr=s(Lf,"SPAN",{});var Df=a(sr);_(In.$$.fragment,Df),Df.forEach(t),Lf.forEach(t),Fp=l(Si),ar=s(Si,"SPAN",{});var Ff=a(ar);zp=i(Ff,"TFLEDForConditionalGeneration"),Ff.forEach(t),Si.forEach(t),Qr=l(o),me=s(o,"DIV",{class:!0});var ot=a(me);_(Gn.$$.fragment,ot),$p=l(ot),Bn=s(ot,"P",{});var Oi=a(Bn);xp=i(Oi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),vs=s(Oi,"A",{href:!0});var zf=a(vs);Mp=i(zf,"TFPreTrainedModel"),zf.forEach(t),Sp=i(Oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oi.forEach(t),Op=l(ot),Qn=s(ot,"P",{});var Ci=a(Qn);Cp=i(Ci,"This model is also a "),Hn=s(Ci,"A",{href:!0,rel:!0});var $f=a(Hn);Ap=i($f,"tf.keras.Model"),$f.forEach(t),Pp=i(Ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ci.forEach(t),Np=l(ot),_(po.$$.fragment,ot),jp=l(ot),we=s(ot,"DIV",{class:!0});var nt=a(we);_(Wn.$$.fragment,nt),Ip=l(nt),Pt=s(nt,"P",{});var Ms=a(Pt);Gp=i(Ms,"The "),bs=s(Ms,"A",{href:!0});var xf=a(bs);Bp=i(xf,"TFLEDForConditionalGeneration"),xf.forEach(t),Qp=i(Ms," forward method, overrides the "),rr=s(Ms,"CODE",{});var Mf=a(rr);Hp=i(Mf,"__call__"),Mf.forEach(t),Wp=i(Ms," special method."),Ms.forEach(t),Up=l(nt),_(uo.$$.fragment,nt),Rp=l(nt),ir=s(nt,"P",{});var Sf=a(ir);Vp=i(Sf,"Examples:"),Sf.forEach(t),Kp=l(nt),_(Un.$$.fragment,nt),nt.forEach(t),ot.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Vf)),c(E,"id","led"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#led"),c(k,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(F,"class","relative group"),c(se,"href","https://arxiv.org/abs/2004.05150"),c(se,"rel","nofollow"),c(Q,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(j,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Ce,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Ae,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Kn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(Xn,"href","/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel"),c(vo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(vo,"rel","nofollow"),c(ko,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(ko,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ht,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Zn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Gt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Bt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(C,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(mt,"class","relative group"),c(es,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer"),c(ts,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(os,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer"),c(Ke,"class","docstring"),c(Vt,"class","docstring"),c(Kt,"class","docstring"),c(as,"class","docstring"),c(N,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(rs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizerFast"),c(is,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c(ds,"href","/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizerFast"),c(ze,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(_t,"class","relative group"),c(gt,"class","docstring"),c(Tt,"class","docstring"),c(vt,"class","docstring"),c(bt,"class","docstring"),c(kt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Et,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(qt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDModel"),c(be,"class","docstring"),c($e,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Dt,"class","relative group"),c(hs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(ps,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(H,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(us,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vn,"rel","nofollow"),c(ms,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification"),c(P,"class","docstring"),c(he,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c(xt,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(te,"class","docstring"),c(pe,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(Ot,"class","relative group"),c(gs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(Ts,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(At,"class","relative group"),c(vs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Hn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hn,"rel","nofollow"),c(bs,"href","/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(we,"class","docstring"),c(me,"class","docstring")},m(o,p){e(document.head,u),h(o,L,p),h(o,k,p),e(k,E),e(E,q),g(y,q,null),e(k,w),e(k,D),e(D,je),h(o,ge,p),h(o,F,p),e(F,Y),e(Y,R),g(ne,R,null),e(F,Ie),e(F,V),e(V,Ge),h(o,Me,p),h(o,B,p),e(B,K),e(B,se),e(se,Le),e(B,S),h(o,A,p),h(o,Te,p),e(Te,ae),h(o,Se,p),h(o,ve,p),e(ve,X),e(X,Be),h(o,Oe,p),h(o,O,p),e(O,Qe),h(o,ee,p),h(o,x,p),e(x,M),e(M,Q),e(Q,He),e(M,We),e(M,j),e(j,Ue),e(M,re),e(M,De),e(De,m),e(M,z),e(M,ie),e(ie,st),e(M,at),e(M,I),e(I,rt),e(M,it),e(M,Ce),e(Ce,J),e(M,de),e(M,Ae),e(Ae,dt),e(M,le),e(x,lt),e(x,ce),e(ce,Re),e(ce,Ve),e(Ve,Ai),e(ce,Pi),e(ce,Ss),e(Ss,Ni),e(ce,ji),e(x,Ii),e(x,Fe),e(Fe,Gi),e(Fe,Os),e(Os,Bi),e(Fe,Qi),e(Fe,Cs),e(Cs,Hi),e(Fe,Wi),e(Fe,Kn),e(Kn,Ui),e(Fe,Ri),e(Fe,As),e(As,Vi),e(Fe,Ki),e(x,Xi),e(x,Z),e(Z,Ji),e(Z,Ps),e(Ps,Zi),e(Z,Yi),e(Z,Ns),e(Ns,ed),e(Z,td),e(Z,Xn),e(Xn,od),e(Z,nd),e(Z,js),e(js,sd),e(Z,ad),e(Z,Is),e(Is,rd),e(Z,id),e(Z,Gs),e(Gs,dd),e(Z,ld),e(x,cd),e(x,ct),e(ct,hd),e(ct,Bs),e(Bs,pd),e(ct,ud),e(ct,Qs),e(Qs,md),e(ct,fd),e(x,_d),e(x,To),e(To,gd),e(To,vo),e(vo,Td),e(To,vd),e(x,bd),e(x,bo),e(bo,kd),e(bo,ko),e(ko,wd),e(bo,yd),h(o,_r,p),h(o,Nt,p),e(Nt,Ed),e(Nt,wo),e(wo,qd),e(Nt,Ld),h(o,gr,p),h(o,ht,p),e(ht,jt),e(jt,Hs),g(yo,Hs,null),e(ht,Dd),e(ht,Ws),e(Ws,Fd),h(o,Tr,p),h(o,C,p),g(Eo,C,null),e(C,zd),e(C,pt),e(pt,$d),e(pt,Jn),e(Jn,xd),e(pt,Md),e(pt,qo),e(qo,Sd),e(pt,Od),e(C,Cd),e(C,ut),e(ut,Ad),e(ut,Zn),e(Zn,Pd),e(ut,Nd),e(ut,Yn),e(Yn,jd),e(ut,Id),e(C,Gd),e(C,Us),e(Us,Bd),e(C,Qd),g(Lo,C,null),e(C,Hd),e(C,Rs),e(Rs,Vs),e(Vs,Ks),e(Ks,Xs),e(Xs,Wd),e(C,Ud),e(C,Js),e(Js,Zs),e(Zs,Ys),e(Ys,It),e(It,Gt),e(Gt,ea),g(Do,ea,null),e(It,Rd),e(It,ta),e(ta,Vd),e(C,Kd),e(C,oa),e(oa,na),e(na,Fo),e(Fo,Bt),e(Bt,Qt),e(Qt,sa),g(zo,sa,null),e(Bt,Xd),e(Bt,aa),e(aa,Jd),e(Fo,Zd),e(Fo,ra),e(ra,Yd),e(C,el),e(C,ia),e(ia,da),e(da,la),e(la,Ht),e(Ht,Wt),e(Wt,ca),g($o,ca,null),e(Ht,tl),e(Ht,ha),e(ha,ol),h(o,vr,p),h(o,mt,p),e(mt,Ut),e(Ut,pa),g(xo,pa,null),e(mt,nl),e(mt,ua),e(ua,sl),h(o,br,p),h(o,N,p),g(Mo,N,null),e(N,al),e(N,ma),e(ma,rl),e(N,il),e(N,Rt),e(Rt,es),e(es,dl),e(Rt,ll),e(Rt,ts),e(ts,cl),e(Rt,hl),e(N,pl),e(N,So),e(So,ul),e(So,os),e(os,ml),e(So,fl),e(N,_l),e(N,Ke),g(Oo,Ke,null),e(Ke,gl),e(Ke,fa),e(fa,Tl),e(Ke,vl),e(Ke,Co),e(Co,ns),e(ns,bl),e(ns,_a),e(_a,kl),e(Co,wl),e(Co,ss),e(ss,yl),e(ss,ga),e(ga,El),e(N,ql),e(N,Vt),g(Ao,Vt,null),e(Vt,Ll),e(Vt,Po),e(Po,Dl),e(Po,Ta),e(Ta,Fl),e(Po,zl),e(N,$l),e(N,Kt),g(No,Kt,null),e(Kt,xl),e(Kt,va),e(va,Ml),e(N,Sl),e(N,as),g(jo,as,null),h(o,kr,p),h(o,ft,p),e(ft,Xt),e(Xt,ba),g(Io,ba,null),e(ft,Ol),e(ft,ka),e(ka,Cl),h(o,wr,p),h(o,ze,p),g(Go,ze,null),e(ze,Al),e(ze,Bo),e(Bo,Pl),e(Bo,wa),e(wa,Nl),e(Bo,jl),e(ze,Il),e(ze,Jt),e(Jt,rs),e(rs,Gl),e(Jt,Bl),e(Jt,is),e(is,Ql),e(Jt,Hl),e(ze,Wl),e(ze,Qo),e(Qo,Ul),e(Qo,ds),e(ds,Rl),e(Qo,Vl),h(o,yr,p),h(o,_t,p),e(_t,Zt),e(Zt,ya),g(Ho,ya,null),e(_t,Kl),e(_t,Ea),e(Ea,Xl),h(o,Er,p),h(o,gt,p),g(Wo,gt,null),e(gt,Jl),e(gt,qa),e(qa,Zl),h(o,qr,p),h(o,Tt,p),g(Uo,Tt,null),e(Tt,Yl),e(Tt,La),e(La,ec),h(o,Lr,p),h(o,vt,p),g(Ro,vt,null),e(vt,tc),e(vt,Da),e(Da,oc),h(o,Dr,p),h(o,bt,p),g(Vo,bt,null),e(bt,nc),e(bt,Fa),e(Fa,sc),h(o,Fr,p),h(o,kt,p),g(Ko,kt,null),e(kt,ac),e(kt,za),e(za,rc),h(o,zr,p),h(o,wt,p),g(Xo,wt,null),e(wt,ic),e(wt,$a),e($a,dc),h(o,$r,p),h(o,yt,p),g(Jo,yt,null),e(yt,lc),e(yt,xa),e(xa,cc),h(o,xr,p),h(o,Et,p),g(Zo,Et,null),e(Et,hc),e(Et,Ma),e(Ma,pc),h(o,Mr,p),h(o,qt,p),e(qt,Yt),e(Yt,Sa),g(Yo,Sa,null),e(qt,uc),e(qt,Oa),e(Oa,mc),h(o,Sr,p),h(o,$e,p),g(en,$e,null),e($e,fc),e($e,tn),e(tn,_c),e(tn,ls),e(ls,gc),e(tn,Tc),e($e,vc),e($e,on),e(on,bc),e(on,nn),e(nn,kc),e(on,wc),e($e,yc),e($e,be),g(sn,be,null),e(be,Ec),e(be,Lt),e(Lt,qc),e(Lt,cs),e(cs,Lc),e(Lt,Dc),e(Lt,Ca),e(Ca,Fc),e(Lt,zc),e(be,$c),g(eo,be,null),e(be,xc),e(be,Aa),e(Aa,Mc),e(be,Sc),g(an,be,null),h(o,Or,p),h(o,Dt,p),e(Dt,to),e(to,Pa),g(rn,Pa,null),e(Dt,Oc),e(Dt,Na),e(Na,Cc),h(o,Cr,p),h(o,xe,p),g(dn,xe,null),e(xe,Ac),e(xe,ln),e(ln,Pc),e(ln,hs),e(hs,Nc),e(ln,jc),e(xe,Ic),e(xe,cn),e(cn,Gc),e(cn,hn),e(hn,Bc),e(cn,Qc),e(xe,Hc),e(xe,H),g(pn,H,null),e(H,Wc),e(H,Ft),e(Ft,Uc),e(Ft,ps),e(ps,Rc),e(Ft,Vc),e(Ft,ja),e(ja,Kc),e(Ft,Xc),e(H,Jc),g(oo,H,null),e(H,Zc),e(H,Ia),e(Ia,Yc),e(H,eh),g(un,H,null),e(H,th),e(H,Ga),e(Ga,oh),e(H,nh),g(mn,H,null),h(o,Ar,p),h(o,zt,p),e(zt,no),e(no,Ba),g(fn,Ba,null),e(zt,sh),e(zt,Qa),e(Qa,ah),h(o,Pr,p),h(o,he,p),g(_n,he,null),e(he,rh),e(he,Ha),e(Ha,ih),e(he,dh),e(he,gn),e(gn,lh),e(gn,us),e(us,ch),e(gn,hh),e(he,ph),e(he,Tn),e(Tn,uh),e(Tn,vn),e(vn,mh),e(Tn,fh),e(he,_h),e(he,P),g(bn,P,null),e(P,gh),e(P,$t),e($t,Th),e($t,ms),e(ms,vh),e($t,bh),e($t,Wa),e(Wa,kh),e($t,wh),e(P,yh),g(so,P,null),e(P,Eh),e(P,Ua),e(Ua,qh),e(P,Lh),g(kn,P,null),e(P,Dh),g(wn,P,null),e(P,Fh),e(P,Ra),e(Ra,zh),e(P,$h),g(yn,P,null),e(P,xh),g(En,P,null),h(o,Nr,p),h(o,xt,p),e(xt,ao),e(ao,Va),g(qn,Va,null),e(xt,Mh),e(xt,Ka),e(Ka,Sh),h(o,jr,p),h(o,pe,p),g(Ln,pe,null),e(pe,Oh),e(pe,Mt),e(Mt,Ch),e(Mt,Xa),e(Xa,Ah),e(Mt,Ph),e(Mt,Ja),e(Ja,Nh),e(Mt,jh),e(pe,Ih),e(pe,Dn),e(Dn,Gh),e(Dn,fs),e(fs,Bh),e(Dn,Qh),e(pe,Hh),e(pe,Fn),e(Fn,Wh),e(Fn,zn),e(zn,Uh),e(Fn,Rh),e(pe,Vh),e(pe,te),g($n,te,null),e(te,Kh),e(te,St),e(St,Xh),e(St,_s),e(_s,Jh),e(St,Zh),e(St,Za),e(Za,Yh),e(St,ep),e(te,tp),g(ro,te,null),e(te,op),e(te,Ya),e(Ya,np),e(te,sp),g(xn,te,null),e(te,ap),g(Mn,te,null),h(o,Ir,p),h(o,Ot,p),e(Ot,io),e(io,er),g(Sn,er,null),e(Ot,rp),e(Ot,tr),e(tr,ip),h(o,Gr,p),h(o,ue,p),g(On,ue,null),e(ue,dp),e(ue,Cn),e(Cn,lp),e(Cn,gs),e(gs,cp),e(Cn,hp),e(ue,pp),e(ue,An),e(An,up),e(An,Pn),e(Pn,mp),e(An,fp),e(ue,_p),g(lo,ue,null),e(ue,gp),e(ue,ke),g(Nn,ke,null),e(ke,Tp),e(ke,Ct),e(Ct,vp),e(Ct,Ts),e(Ts,bp),e(Ct,kp),e(Ct,or),e(or,wp),e(Ct,yp),e(ke,Ep),g(co,ke,null),e(ke,qp),e(ke,nr),e(nr,Lp),e(ke,Dp),g(jn,ke,null),h(o,Br,p),h(o,At,p),e(At,ho),e(ho,sr),g(In,sr,null),e(At,Fp),e(At,ar),e(ar,zp),h(o,Qr,p),h(o,me,p),g(Gn,me,null),e(me,$p),e(me,Bn),e(Bn,xp),e(Bn,vs),e(vs,Mp),e(Bn,Sp),e(me,Op),e(me,Qn),e(Qn,Cp),e(Qn,Hn),e(Hn,Ap),e(Qn,Pp),e(me,Np),g(po,me,null),e(me,jp),e(me,we),g(Wn,we,null),e(we,Ip),e(we,Pt),e(Pt,Gp),e(Pt,bs),e(bs,Bp),e(Pt,Qp),e(Pt,rr),e(rr,Hp),e(Pt,Wp),e(we,Up),g(uo,we,null),e(we,Rp),e(we,ir),e(ir,Vp),e(we,Kp),g(Un,we,null),Hr=!0},p(o,[p]){const Rn={};p&2&&(Rn.$$scope={dirty:p,ctx:o}),eo.$set(Rn);const dr={};p&2&&(dr.$$scope={dirty:p,ctx:o}),oo.$set(dr);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),so.$set(lr);const cr={};p&2&&(cr.$$scope={dirty:p,ctx:o}),ro.$set(cr);const Vn={};p&2&&(Vn.$$scope={dirty:p,ctx:o}),lo.$set(Vn);const hr={};p&2&&(hr.$$scope={dirty:p,ctx:o}),co.$set(hr);const pr={};p&2&&(pr.$$scope={dirty:p,ctx:o}),po.$set(pr);const ur={};p&2&&(ur.$$scope={dirty:p,ctx:o}),uo.$set(ur)},i(o){Hr||(T(y.$$.fragment,o),T(ne.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T(zo.$$.fragment,o),T($o.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Oo.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Go.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(sn.$$.fragment,o),T(eo.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(dn.$$.fragment,o),T(pn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(mn.$$.fragment,o),T(fn.$$.fragment,o),T(_n.$$.fragment,o),T(bn.$$.fragment,o),T(so.$$.fragment,o),T(kn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(qn.$$.fragment,o),T(Ln.$$.fragment,o),T($n.$$.fragment,o),T(ro.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(Sn.$$.fragment,o),T(On.$$.fragment,o),T(lo.$$.fragment,o),T(Nn.$$.fragment,o),T(co.$$.fragment,o),T(jn.$$.fragment,o),T(In.$$.fragment,o),T(Gn.$$.fragment,o),T(po.$$.fragment,o),T(Wn.$$.fragment,o),T(uo.$$.fragment,o),T(Un.$$.fragment,o),Hr=!0)},o(o){v(y.$$.fragment,o),v(ne.$$.fragment,o),v(yo.$$.fragment,o),v(Eo.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v(zo.$$.fragment,o),v($o.$$.fragment,o),v(xo.$$.fragment,o),v(Mo.$$.fragment,o),v(Oo.$$.fragment,o),v(Ao.$$.fragment,o),v(No.$$.fragment,o),v(jo.$$.fragment,o),v(Io.$$.fragment,o),v(Go.$$.fragment,o),v(Ho.$$.fragment,o),v(Wo.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Vo.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(en.$$.fragment,o),v(sn.$$.fragment,o),v(eo.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(dn.$$.fragment,o),v(pn.$$.fragment,o),v(oo.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(fn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(so.$$.fragment,o),v(kn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(En.$$.fragment,o),v(qn.$$.fragment,o),v(Ln.$$.fragment,o),v($n.$$.fragment,o),v(ro.$$.fragment,o),v(xn.$$.fragment,o),v(Mn.$$.fragment,o),v(Sn.$$.fragment,o),v(On.$$.fragment,o),v(lo.$$.fragment,o),v(Nn.$$.fragment,o),v(co.$$.fragment,o),v(jn.$$.fragment,o),v(In.$$.fragment,o),v(Gn.$$.fragment,o),v(po.$$.fragment,o),v(Wn.$$.fragment,o),v(uo.$$.fragment,o),v(Un.$$.fragment,o),Hr=!1},d(o){t(u),o&&t(L),o&&t(k),b(y),o&&t(ge),o&&t(F),b(ne),o&&t(Me),o&&t(B),o&&t(A),o&&t(Te),o&&t(Se),o&&t(ve),o&&t(Oe),o&&t(O),o&&t(ee),o&&t(x),o&&t(_r),o&&t(Nt),o&&t(gr),o&&t(ht),b(yo),o&&t(Tr),o&&t(C),b(Eo),b(Lo),b(Do),b(zo),b($o),o&&t(vr),o&&t(mt),b(xo),o&&t(br),o&&t(N),b(Mo),b(Oo),b(Ao),b(No),b(jo),o&&t(kr),o&&t(ft),b(Io),o&&t(wr),o&&t(ze),b(Go),o&&t(yr),o&&t(_t),b(Ho),o&&t(Er),o&&t(gt),b(Wo),o&&t(qr),o&&t(Tt),b(Uo),o&&t(Lr),o&&t(vt),b(Ro),o&&t(Dr),o&&t(bt),b(Vo),o&&t(Fr),o&&t(kt),b(Ko),o&&t(zr),o&&t(wt),b(Xo),o&&t($r),o&&t(yt),b(Jo),o&&t(xr),o&&t(Et),b(Zo),o&&t(Mr),o&&t(qt),b(Yo),o&&t(Sr),o&&t($e),b(en),b(sn),b(eo),b(an),o&&t(Or),o&&t(Dt),b(rn),o&&t(Cr),o&&t(xe),b(dn),b(pn),b(oo),b(un),b(mn),o&&t(Ar),o&&t(zt),b(fn),o&&t(Pr),o&&t(he),b(_n),b(bn),b(so),b(kn),b(wn),b(yn),b(En),o&&t(Nr),o&&t(xt),b(qn),o&&t(jr),o&&t(pe),b(Ln),b($n),b(ro),b(xn),b(Mn),o&&t(Ir),o&&t(Ot),b(Sn),o&&t(Gr),o&&t(ue),b(On),b(lo),b(Nn),b(co),b(jn),o&&t(Br),o&&t(At),b(In),o&&t(Qr),o&&t(me),b(Gn),b(po),b(Wn),b(uo),b(Un)}}}const Vf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Kf(G){return Nf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t_ extends Of{constructor(u){super();Cf(this,u,Kf,Rf,Af,{})}}export{t_ as default,Vf as metadata};
