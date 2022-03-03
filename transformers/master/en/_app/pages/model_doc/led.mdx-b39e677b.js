import{S as zf,i as Ff,s as $f,e as n,k as i,w as f,t as r,M as xf,c as s,d as t,m as l,a,x as _,h as d,b as c,F as e,g as h,y as g,q as v,o as T,B as k}from"../../chunks/vendor-4833417e.js";import{T as go}from"../../chunks/Tip-fffd6df1.js";import{D as $}from"../../chunks/Docstring-7b52c3d4.js";import{C as Pt}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as me}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Mf(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function Sf(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function Cf(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function Of(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function Af(j){let u,L,b,w,q,E,y,D,Pe,fe,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,x,M,G,Ge,Qe,N,He,se,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var F=a(u);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(m),w=s(m,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Pe=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),fe=l(m),z=s(m,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var at=a(U);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var rt=a(R);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(m),V=s(m,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(m),S=s(m,"UL",{});var X=a(S);A=s(X,"LI",{});var re=a(A);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Ae=a(ne);Se=d(Ae,"input_ids"),Ae.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);x=d(it,"model([input_ids, attention_mask])"),it.forEach(t),M=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var We=a(N);He=d(We,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(We,"CODE",{});var Ue=a(se);De=d(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),We.forEach(t),X.forEach(t)},m(m,F){h(m,u,F),e(u,L),h(m,b,F),h(m,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Pe),h(m,fe,F),h(m,z,F),e(z,Z),e(z,U),e(U,te),e(z,Ne),e(z,R),e(R,je),e(z,Me),h(m,B,F),h(m,V,F),e(V,oe),h(m,Le,F),h(m,S,F),e(S,A),e(A,_e),e(A,ne),e(ne,Se),e(A,ge),e(A,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,x),e(C,M),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(fe),m&&t(z),m&&t(B),m&&t(V),m&&t(Le),m&&t(S)}}}function Pf(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function Nf(j){let u,L,b,w,q,E,y,D,Pe,fe,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,x,M,G,Ge,Qe,N,He,se,De;return{c(){u=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),fe=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),x=r("model([input_ids, attention_mask])"),M=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var F=a(u);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(m),w=s(m,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Pe=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),fe=l(m),z=s(m,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var at=a(U);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var rt=a(R);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(m),V=s(m,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(m),S=s(m,"UL",{});var X=a(S);A=s(X,"LI",{});var re=a(A);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Ae=a(ne);Se=d(Ae,"input_ids"),Ae.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);x=d(it,"model([input_ids, attention_mask])"),it.forEach(t),M=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var We=a(N);He=d(We,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(We,"CODE",{});var Ue=a(se);De=d(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),We.forEach(t),X.forEach(t)},m(m,F){h(m,u,F),e(u,L),h(m,b,F),h(m,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Pe),h(m,fe,F),h(m,z,F),e(z,Z),e(z,U),e(U,te),e(z,Ne),e(z,R),e(R,je),e(z,Me),h(m,B,F),h(m,V,F),e(V,oe),h(m,Le,F),h(m,S,F),e(S,A),e(A,_e),e(A,ne),e(ne,Se),e(A,ge),e(A,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,x),e(C,M),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(m){m&&t(u),m&&t(b),m&&t(w),m&&t(fe),m&&t(z),m&&t(B),m&&t(V),m&&t(Le),m&&t(S)}}}function jf(j){let u,L,b,w,q;return{c(){u=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){u=s(E,"P",{});var y=a(u);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,L),e(u,b),e(b,w),e(u,q)},d(E){E&&t(u)}}}function If(j){let u,L,b,w,q,E,y,D,Pe,fe,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,x,M,G,Ge,Qe,N,He,se,De,m,F,ae,nt,st,I,at,rt,Oe,X,re,Ae,dt,de,it,ie,We,Ue,Sd,Cd,$s,Od,Ad,Pd,ze,Nd,xs,jd,Id,Ms,Bd,Gd,Un,Qd,Hd,Ss,Wd,Ud,Rd,J,Vd,Cs,Kd,Xd,Os,Jd,Zd,Rn,Yd,ei,As,ti,oi,Ps,ni,si,Ns,ai,ri,di,lt,ii,js,li,ci,Is,hi,pi,ui,vo,mi,To,fi,_i,gi,ko,vi,bo,Ti,ki,ur,Nt,bi,wo,wi,yi,mr,ct,jt,Bs,yo,Ei,Gs,qi,fr,O,Eo,Li,ht,Di,Vn,zi,Fi,qo,$i,xi,Mi,pt,Si,Kn,Ci,Oi,Xn,Ai,Pi,Ni,Qs,ji,Ii,Lo,Bi,Hs,Ws,Us,Rs,Gi,Qi,Vs,Ks,Xs,It,Bt,Js,Do,Hi,Zs,Wi,Ui,Ys,ea,zo,Gt,Qt,ta,Fo,Ri,oa,Vi,Ki,na,Xi,Ji,sa,aa,ra,Ht,Wt,da,$o,Zi,ia,Yi,_r,ut,Ut,la,xo,el,ca,tl,gr,P,Mo,ol,ha,nl,sl,Rt,Jn,al,rl,Zn,dl,il,ll,So,cl,Yn,hl,pl,ul,Re,Co,ml,pa,fl,_l,Oo,es,gl,ua,vl,Tl,ts,kl,ma,bl,wl,Vt,Ao,yl,Po,El,fa,ql,Ll,Dl,Kt,No,zl,_a,Fl,$l,os,jo,vr,mt,Xt,ga,Io,xl,va,Ml,Tr,Fe,Bo,Sl,Go,Cl,Ta,Ol,Al,Pl,Jt,ns,Nl,jl,ss,Il,Bl,Gl,Qo,Ql,as,Hl,Wl,kr,ft,Zt,ka,Ho,Ul,ba,Rl,br,_t,Wo,Vl,wa,Kl,wr,gt,Uo,Xl,ya,Jl,yr,vt,Ro,Zl,Ea,Yl,Er,Tt,Vo,ec,qa,tc,qr,kt,Ko,oc,La,nc,Lr,bt,Xo,sc,Da,ac,Dr,wt,Jo,rc,za,dc,zr,yt,Zo,ic,Fa,lc,Fr,Et,Yt,$a,Yo,cc,xa,hc,$r,$e,en,pc,tn,uc,rs,mc,fc,_c,on,gc,nn,vc,Tc,kc,ve,sn,bc,qt,wc,ds,yc,Ec,Ma,qc,Lc,Dc,eo,zc,Sa,Fc,$c,an,xr,Lt,to,Ca,rn,xc,Oa,Mc,Mr,xe,dn,Sc,ln,Cc,is,Oc,Ac,Pc,cn,Nc,hn,jc,Ic,Bc,Q,pn,Gc,Dt,Qc,ls,Hc,Wc,Aa,Uc,Rc,Vc,oo,Kc,Pa,Xc,Jc,un,Zc,Na,Yc,eh,mn,Sr,zt,no,ja,fn,th,Ia,oh,Cr,le,_n,nh,Ba,sh,ah,gn,rh,cs,dh,ih,lh,vn,ch,Tn,hh,ph,uh,H,kn,mh,Ft,fh,hs,_h,gh,Ga,vh,Th,kh,so,bh,Qa,wh,yh,bn,Eh,Ha,qh,Lh,wn,Or,$t,ao,Wa,yn,Dh,Ua,zh,Ar,ce,En,Fh,xt,$h,Ra,xh,Mh,Va,Sh,Ch,Oh,qn,Ah,ps,Ph,Nh,jh,Ln,Ih,Dn,Bh,Gh,Qh,Te,zn,Hh,Mt,Wh,us,Uh,Rh,Ka,Vh,Kh,Xh,ro,Jh,Xa,Zh,Yh,Fn,Pr,St,io,Ja,$n,ep,Za,tp,Nr,he,xn,op,Mn,np,ms,sp,ap,rp,Sn,dp,Cn,ip,lp,cp,lo,hp,ke,On,pp,Ct,up,fs,mp,fp,Ya,_p,gp,vp,co,Tp,er,kp,bp,An,jr,Ot,ho,tr,Pn,wp,or,yp,Ir,pe,Nn,Ep,jn,qp,_s,Lp,Dp,zp,In,Fp,Bn,$p,xp,Mp,po,Sp,be,Gn,Cp,At,Op,gs,Ap,Pp,nr,Np,jp,Ip,uo,Bp,sr,Gp,Qp,Qn,Br;return E=new me({}),te=new me({}),yo=new me({}),Eo=new $({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/master/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new Pt({props:{code:"",highlighted:""}}),Do=new me({}),Fo=new me({}),$o=new me({}),xo=new me({}),Mo=new $({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/tokenization_led.py#L39"}}),Co=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new $({props:{name:"save_vocabulary",anchor:"transformers.BartTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bart/tokenization_bart.py#L309"}}),Io=new me({}),Bo=new $({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/tokenization_led_fast.py#L40"}}),Ho=new me({}),Wo=new $({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Uo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ro=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new $({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Xo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L1330",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Jo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L1373",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new $({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L1441",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Yo=new me({}),en=new $({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new $({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
`}}),eo=new go({props:{$$slots:{default:[Mf]},$$scope:{ctx:j}}}),an=new Pt({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rn=new me({}),dn=new $({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new $({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
`}}),oo=new go({props:{$$slots:{default:[Sf]},$$scope:{ctx:j}}}),un=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),mn=new Pt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new me({}),_n=new $({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2468",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new $({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2481",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
`}}),so=new go({props:{$$slots:{default:[Cf]},$$scope:{ctx:j}}}),bn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained("allenai/led-base-16384")
model = LEDForSequenceClassification.from_pretrained("allenai/led-base-16384", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yn=new me({}),En=new $({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2596",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new $({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_led.py#L2608",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
`}}),ro=new go({props:{$$slots:{default:[Of]},$$scope:{ctx:j}}}),Fn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),$n=new me({}),xn=new $({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L2256",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Af]},$$scope:{ctx:j}}}),On=new $({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L2268",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
<p>is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<ul>
<li><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code></li>
</ul>
`}}),co=new go({props:{$$slots:{default:[Pf]},$$scope:{ctx:j}}}),An=new Pt({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new me({}),Nn=new $({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L2363",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),po=new go({props:{$$slots:{default:[Nf]},$$scope:{ctx:j}}}),Gn=new $({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/led/modeling_tf_led.py#L2396",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/led#transformers.LEDConfig"
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
<p>is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<ul>
<li><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code></li>
</ul>
`}}),uo=new go({props:{$$slots:{default:[jf]},$$scope:{ctx:j}}}),Qn=new Pt({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=n("meta"),L=i(),b=n("h1"),w=n("a"),q=n("span"),f(E.$$.fragment),y=i(),D=n("span"),Pe=r("LED"),fe=i(),z=n("h2"),Z=n("a"),U=n("span"),f(te.$$.fragment),Ne=i(),R=n("span"),je=r("Overview"),Me=i(),B=n("p"),V=r("The LED model was proposed in "),oe=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=i(),_e=n("p"),ne=r("The abstract from the paper is the following:"),Se=i(),ge=n("p"),K=n("em"),Ie=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ce=i(),C=n("p"),Be=r("Tips:"),Y=i(),x=n("ul"),M=n("li"),G=n("a"),Ge=r("LEDForConditionalGeneration"),Qe=r(` is an extension of
`),N=n("a"),He=r("BartForConditionalGeneration"),se=r(" exchanging the traditional "),De=n("em"),m=r("self-attention"),F=r(` layer with
`),ae=n("em"),nt=r("Longformer"),st=r("\u2019s "),I=n("em"),at=r("chunked self-attention"),rt=r(" layer. "),Oe=n("a"),X=r("LEDTokenizer"),re=r(` is an alias of
`),Ae=n("a"),dt=r("BartTokenizer"),de=r("."),it=i(),ie=n("li"),We=r("LED works very well on long-range "),Ue=n("em"),Sd=r("sequence-to-sequence"),Cd=r(" tasks where the "),$s=n("code"),Od=r("input_ids"),Ad=r(` largely exceed a length of
1024 tokens.`),Pd=i(),ze=n("li"),Nd=r("LED pads the "),xs=n("code"),jd=r("input_ids"),Id=r(" to be a multiple of "),Ms=n("code"),Bd=r("config.attention_window"),Gd=r(` if required. Therefore a small speed-up is
gained, when `),Un=n("a"),Qd=r("LEDTokenizer"),Hd=r(" is used with the "),Ss=n("code"),Wd=r("pad_to_multiple_of"),Ud=r(" argument."),Rd=i(),J=n("li"),Vd=r("LED makes use of "),Cs=n("em"),Kd=r("global attention"),Xd=r(" by means of the "),Os=n("code"),Jd=r("global_attention_mask"),Zd=r(` (see
`),Rn=n("a"),Yd=r("LongformerModel"),ei=r("). For summarization, it is advised to put "),As=n("em"),ti=r("global attention"),oi=r(` only on the first
`),Ps=n("code"),ni=r("<s>"),si=r(" token. For question answering, it is advised to put "),Ns=n("em"),ai=r("global attention"),ri=r(" on all tokens of the question."),di=i(),lt=n("li"),ii=r("To fine-tune LED on all 16384, it is necessary to enable "),js=n("em"),li=r("gradient checkpointing"),ci=r(` by executing
`),Is=n("code"),hi=r("model.gradient_checkpointing_enable()"),pi=r("."),ui=i(),vo=n("li"),mi=r("A notebook showing how to evaluate LED, can be accessed "),To=n("a"),fi=r("here"),_i=r("."),gi=i(),ko=n("li"),vi=r("A notebook showing how to fine-tune LED, can be accessed "),bo=n("a"),Ti=r("here"),ki=r("."),ur=i(),Nt=n("p"),bi=r("This model was contributed by "),wo=n("a"),wi=r("patrickvonplaten"),yi=r("."),mr=i(),ct=n("h2"),jt=n("a"),Bs=n("span"),f(yo.$$.fragment),Ei=i(),Gs=n("span"),qi=r("LEDConfig"),fr=i(),O=n("div"),f(Eo.$$.fragment),Li=i(),ht=n("p"),Di=r("This is the configuration class to store the configuration of a "),Vn=n("a"),zi=r("LEDModel"),Fi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),$i=r("allenai/led-base-16384"),xi=r(" architecture."),Mi=i(),pt=n("p"),Si=r("Configuration objects inherit from "),Kn=n("a"),Ci=r("PretrainedConfig"),Oi=r(` and can be used to control the model outputs. Read the
documentation from `),Xn=n("a"),Ai=r("PretrainedConfig"),Pi=r(" for more information."),Ni=i(),Qs=n("p"),ji=r("Example:"),Ii=i(),f(Lo.$$.fragment),Bi=i(),Hs=n("blockquote"),Ws=n("blockquote"),Us=n("blockquote"),Rs=n("p"),Gi=r("from transformers import LEDModel, LEDConfig"),Qi=i(),Vs=n("blockquote"),Ks=n("blockquote"),Xs=n("blockquote"),It=n("h1"),Bt=n("a"),Js=n("span"),f(Do.$$.fragment),Hi=i(),Zs=n("span"),Wi=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Ui=i(),Ys=n("blockquote"),ea=n("blockquote"),zo=n("blockquote"),Gt=n("h1"),Qt=n("a"),ta=n("span"),f(Fo.$$.fragment),Ri=i(),oa=n("span"),Vi=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Ki=i(),na=n("p"),Xi=r("LEDModel(configuration)"),Ji=i(),sa=n("blockquote"),aa=n("blockquote"),ra=n("blockquote"),Ht=n("h1"),Wt=n("a"),da=n("span"),f($o.$$.fragment),Zi=i(),ia=n("span"),Yi=r("Accessing the model configuration >>> configuration = model.config"),_r=i(),ut=n("h2"),Ut=n("a"),la=n("span"),f(xo.$$.fragment),el=i(),ca=n("span"),tl=r("LEDTokenizer"),gr=i(),P=n("div"),f(Mo.$$.fragment),ol=i(),ha=n("p"),nl=r("Construct a LED tokenizer."),sl=i(),Rt=n("p"),Jn=n("a"),al=r("LEDTokenizer"),rl=r(" is identical to "),Zn=n("a"),dl=r("BartTokenizer"),il=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),ll=i(),So=n("p"),cl=r("Refer to superclass "),Yn=n("a"),hl=r("BartTokenizer"),pl=r(" for usage examples and documentation concerning parameters."),ul=i(),Re=n("div"),f(Co.$$.fragment),ml=i(),pa=n("p"),fl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),_l=i(),Oo=n("ul"),es=n("li"),gl=r("single sequence: "),ua=n("code"),vl=r("<s> X </s>"),Tl=i(),ts=n("li"),kl=r("pair of sequences: "),ma=n("code"),bl=r("<s> A </s></s> B </s>"),wl=i(),Vt=n("div"),f(Ao.$$.fragment),yl=i(),Po=n("p"),El=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=n("code"),ql=r("prepare_for_model"),Ll=r(" method."),Dl=i(),Kt=n("div"),f(No.$$.fragment),zl=i(),_a=n("p"),Fl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),$l=i(),os=n("div"),f(jo.$$.fragment),vr=i(),mt=n("h2"),Xt=n("a"),ga=n("span"),f(Io.$$.fragment),xl=i(),va=n("span"),Ml=r("LEDTokenizerFast"),Tr=i(),Fe=n("div"),f(Bo.$$.fragment),Sl=i(),Go=n("p"),Cl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Ta=n("em"),Ol=r("tokenizers"),Al=r(" library)."),Pl=i(),Jt=n("p"),ns=n("a"),Nl=r("LEDTokenizerFast"),jl=r(" is identical to "),ss=n("a"),Il=r("BartTokenizerFast"),Bl=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Gl=i(),Qo=n("p"),Ql=r("Refer to superclass "),as=n("a"),Hl=r("BartTokenizerFast"),Wl=r(" for usage examples and documentation concerning parameters."),kr=i(),ft=n("h2"),Zt=n("a"),ka=n("span"),f(Ho.$$.fragment),Ul=i(),ba=n("span"),Rl=r("LED specific outputs"),br=i(),_t=n("div"),f(Wo.$$.fragment),Vl=i(),wa=n("p"),Kl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),wr=i(),gt=n("div"),f(Uo.$$.fragment),Xl=i(),ya=n("p"),Jl=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),yr=i(),vt=n("div"),f(Ro.$$.fragment),Zl=i(),Ea=n("p"),Yl=r("Base class for sequence-to-sequence language models outputs."),Er=i(),Tt=n("div"),f(Vo.$$.fragment),ec=i(),qa=n("p"),tc=r("Base class for outputs of sequence-to-sequence sentence classification models."),qr=i(),kt=n("div"),f(Ko.$$.fragment),oc=i(),La=n("p"),nc=r("Base class for outputs of sequence-to-sequence question answering models."),Lr=i(),bt=n("div"),f(Xo.$$.fragment),sc=i(),Da=n("p"),ac=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Dr=i(),wt=n("div"),f(Jo.$$.fragment),rc=i(),za=n("p"),dc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),zr=i(),yt=n("div"),f(Zo.$$.fragment),ic=i(),Fa=n("p"),lc=r("Base class for sequence-to-sequence language models outputs."),Fr=i(),Et=n("h2"),Yt=n("a"),$a=n("span"),f(Yo.$$.fragment),cc=i(),xa=n("span"),hc=r("LEDModel"),$r=i(),$e=n("div"),f(en.$$.fragment),pc=i(),tn=n("p"),uc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=n("a"),mc=r("PreTrainedModel"),fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=i(),on=n("p"),gc=r("This model is also a PyTorch "),nn=n("a"),vc=r("torch.nn.Module"),Tc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kc=i(),ve=n("div"),f(sn.$$.fragment),bc=i(),qt=n("p"),wc=r("The "),ds=n("a"),yc=r("LEDModel"),Ec=r(" forward method, overrides the "),Ma=n("code"),qc=r("__call__"),Lc=r(" special method."),Dc=i(),f(eo.$$.fragment),zc=i(),Sa=n("p"),Fc=r("Example:"),$c=i(),f(an.$$.fragment),xr=i(),Lt=n("h2"),to=n("a"),Ca=n("span"),f(rn.$$.fragment),xc=i(),Oa=n("span"),Mc=r("LEDForConditionalGeneration"),Mr=i(),xe=n("div"),f(dn.$$.fragment),Sc=i(),ln=n("p"),Cc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=n("a"),Oc=r("PreTrainedModel"),Ac=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc=i(),cn=n("p"),Nc=r("This model is also a PyTorch "),hn=n("a"),jc=r("torch.nn.Module"),Ic=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bc=i(),Q=n("div"),f(pn.$$.fragment),Gc=i(),Dt=n("p"),Qc=r("The "),ls=n("a"),Hc=r("LEDForConditionalGeneration"),Wc=r(" forward method, overrides the "),Aa=n("code"),Uc=r("__call__"),Rc=r(" special method."),Vc=i(),f(oo.$$.fragment),Kc=i(),Pa=n("p"),Xc=r("Conditional generation example:"),Jc=i(),f(un.$$.fragment),Zc=i(),Na=n("p"),Yc=r("Summarization example:"),eh=i(),f(mn.$$.fragment),Sr=i(),zt=n("h2"),no=n("a"),ja=n("span"),f(fn.$$.fragment),th=i(),Ia=n("span"),oh=r("LEDForSequenceClassification"),Cr=i(),le=n("div"),f(_n.$$.fragment),nh=i(),Ba=n("p"),sh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ah=i(),gn=n("p"),rh=r("This model inherits from "),cs=n("a"),dh=r("PreTrainedModel"),ih=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh=i(),vn=n("p"),ch=r("This model is also a PyTorch "),Tn=n("a"),hh=r("torch.nn.Module"),ph=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uh=i(),H=n("div"),f(kn.$$.fragment),mh=i(),Ft=n("p"),fh=r("The "),hs=n("a"),_h=r("LEDForSequenceClassification"),gh=r(" forward method, overrides the "),Ga=n("code"),vh=r("__call__"),Th=r(" special method."),kh=i(),f(so.$$.fragment),bh=i(),Qa=n("p"),wh=r("Example of single-label classification:"),yh=i(),f(bn.$$.fragment),Eh=i(),Ha=n("p"),qh=r("Example of multi-label classification:"),Lh=i(),f(wn.$$.fragment),Or=i(),$t=n("h2"),ao=n("a"),Wa=n("span"),f(yn.$$.fragment),Dh=i(),Ua=n("span"),zh=r("LEDForQuestionAnswering"),Ar=i(),ce=n("div"),f(En.$$.fragment),Fh=i(),xt=n("p"),$h=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ra=n("code"),xh=r("span start logits"),Mh=r(" and "),Va=n("code"),Sh=r("span end logits"),Ch=r(")."),Oh=i(),qn=n("p"),Ah=r("This model inherits from "),ps=n("a"),Ph=r("PreTrainedModel"),Nh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh=i(),Ln=n("p"),Ih=r("This model is also a PyTorch "),Dn=n("a"),Bh=r("torch.nn.Module"),Gh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qh=i(),Te=n("div"),f(zn.$$.fragment),Hh=i(),Mt=n("p"),Wh=r("The "),us=n("a"),Uh=r("LEDForQuestionAnswering"),Rh=r(" forward method, overrides the "),Ka=n("code"),Vh=r("__call__"),Kh=r(" special method."),Xh=i(),f(ro.$$.fragment),Jh=i(),Xa=n("p"),Zh=r("Example:"),Yh=i(),f(Fn.$$.fragment),Pr=i(),St=n("h2"),io=n("a"),Ja=n("span"),f($n.$$.fragment),ep=i(),Za=n("span"),tp=r("TFLEDModel"),Nr=i(),he=n("div"),f(xn.$$.fragment),op=i(),Mn=n("p"),np=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=n("a"),sp=r("TFPreTrainedModel"),ap=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp=i(),Sn=n("p"),dp=r("This model is also a "),Cn=n("a"),ip=r("tf.keras.Model"),lp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cp=i(),f(lo.$$.fragment),hp=i(),ke=n("div"),f(On.$$.fragment),pp=i(),Ct=n("p"),up=r("The "),fs=n("a"),mp=r("TFLEDModel"),fp=r(" forward method, overrides the "),Ya=n("code"),_p=r("__call__"),gp=r(" special method."),vp=i(),f(co.$$.fragment),Tp=i(),er=n("p"),kp=r("Example:"),bp=i(),f(An.$$.fragment),jr=i(),Ot=n("h2"),ho=n("a"),tr=n("span"),f(Pn.$$.fragment),wp=i(),or=n("span"),yp=r("TFLEDForConditionalGeneration"),Ir=i(),pe=n("div"),f(Nn.$$.fragment),Ep=i(),jn=n("p"),qp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),_s=n("a"),Lp=r("TFPreTrainedModel"),Dp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=i(),In=n("p"),Fp=r("This model is also a "),Bn=n("a"),$p=r("tf.keras.Model"),xp=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp=i(),f(po.$$.fragment),Sp=i(),be=n("div"),f(Gn.$$.fragment),Cp=i(),At=n("p"),Op=r("The "),gs=n("a"),Ap=r("TFLEDForConditionalGeneration"),Pp=r(" forward method, overrides the "),nr=n("code"),Np=r("__call__"),jp=r(" special method."),Ip=i(),f(uo.$$.fragment),Bp=i(),sr=n("p"),Gp=r("Examples:"),Qp=i(),f(Qn.$$.fragment),this.h()},l(o){const p=xf('[data-svelte="svelte-1phssyn"]',document.head);u=s(p,"META",{name:!0,content:!0}),p.forEach(t),L=l(o),b=s(o,"H1",{class:!0});var Hn=a(b);w=s(Hn,"A",{id:!0,class:!0,href:!0});var ar=a(w);q=s(ar,"SPAN",{});var rr=a(q);_(E.$$.fragment,rr),rr.forEach(t),ar.forEach(t),y=l(Hn),D=s(Hn,"SPAN",{});var dr=a(D);Pe=d(dr,"LED"),dr.forEach(t),Hn.forEach(t),fe=l(o),z=s(o,"H2",{class:!0});var Wn=a(z);Z=s(Wn,"A",{id:!0,class:!0,href:!0});var ir=a(Z);U=s(ir,"SPAN",{});var lr=a(U);_(te.$$.fragment,lr),lr.forEach(t),ir.forEach(t),Ne=l(Wn),R=s(Wn,"SPAN",{});var cr=a(R);je=d(cr,"Overview"),cr.forEach(t),Wn.forEach(t),Me=l(o),B=s(o,"P",{});var Gr=a(B);V=d(Gr,"The LED model was proposed in "),oe=s(Gr,"A",{href:!0,rel:!0});var Up=a(oe);Le=d(Up,"Longformer: The Long-Document Transformer"),Up.forEach(t),S=d(Gr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Gr.forEach(t),A=l(o),_e=s(o,"P",{});var Rp=a(_e);ne=d(Rp,"The abstract from the paper is the following:"),Rp.forEach(t),Se=l(o),ge=s(o,"P",{});var Vp=a(ge);K=s(Vp,"EM",{});var Kp=a(K);Ie=d(Kp,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Kp.forEach(t),Vp.forEach(t),Ce=l(o),C=s(o,"P",{});var Xp=a(C);Be=d(Xp,"Tips:"),Xp.forEach(t),Y=l(o),x=s(o,"UL",{});var we=a(x);M=s(we,"LI",{});var ue=a(M);G=s(ue,"A",{href:!0});var Jp=a(G);Ge=d(Jp,"LEDForConditionalGeneration"),Jp.forEach(t),Qe=d(ue,` is an extension of
`),N=s(ue,"A",{href:!0});var Zp=a(N);He=d(Zp,"BartForConditionalGeneration"),Zp.forEach(t),se=d(ue," exchanging the traditional "),De=s(ue,"EM",{});var Yp=a(De);m=d(Yp,"self-attention"),Yp.forEach(t),F=d(ue,` layer with
`),ae=s(ue,"EM",{});var eu=a(ae);nt=d(eu,"Longformer"),eu.forEach(t),st=d(ue,"\u2019s "),I=s(ue,"EM",{});var tu=a(I);at=d(tu,"chunked self-attention"),tu.forEach(t),rt=d(ue," layer. "),Oe=s(ue,"A",{href:!0});var ou=a(Oe);X=d(ou,"LEDTokenizer"),ou.forEach(t),re=d(ue,` is an alias of
`),Ae=s(ue,"A",{href:!0});var nu=a(Ae);dt=d(nu,"BartTokenizer"),nu.forEach(t),de=d(ue,"."),ue.forEach(t),it=l(we),ie=s(we,"LI",{});var vs=a(ie);We=d(vs,"LED works very well on long-range "),Ue=s(vs,"EM",{});var su=a(Ue);Sd=d(su,"sequence-to-sequence"),su.forEach(t),Cd=d(vs," tasks where the "),$s=s(vs,"CODE",{});var au=a($s);Od=d(au,"input_ids"),au.forEach(t),Ad=d(vs,` largely exceed a length of
1024 tokens.`),vs.forEach(t),Pd=l(we),ze=s(we,"LI",{});var Ve=a(ze);Nd=d(Ve,"LED pads the "),xs=s(Ve,"CODE",{});var ru=a(xs);jd=d(ru,"input_ids"),ru.forEach(t),Id=d(Ve," to be a multiple of "),Ms=s(Ve,"CODE",{});var du=a(Ms);Bd=d(du,"config.attention_window"),du.forEach(t),Gd=d(Ve,` if required. Therefore a small speed-up is
gained, when `),Un=s(Ve,"A",{href:!0});var iu=a(Un);Qd=d(iu,"LEDTokenizer"),iu.forEach(t),Hd=d(Ve," is used with the "),Ss=s(Ve,"CODE",{});var lu=a(Ss);Wd=d(lu,"pad_to_multiple_of"),lu.forEach(t),Ud=d(Ve," argument."),Ve.forEach(t),Rd=l(we),J=s(we,"LI",{});var ye=a(J);Vd=d(ye,"LED makes use of "),Cs=s(ye,"EM",{});var cu=a(Cs);Kd=d(cu,"global attention"),cu.forEach(t),Xd=d(ye," by means of the "),Os=s(ye,"CODE",{});var hu=a(Os);Jd=d(hu,"global_attention_mask"),hu.forEach(t),Zd=d(ye,` (see
`),Rn=s(ye,"A",{href:!0});var pu=a(Rn);Yd=d(pu,"LongformerModel"),pu.forEach(t),ei=d(ye,"). For summarization, it is advised to put "),As=s(ye,"EM",{});var uu=a(As);ti=d(uu,"global attention"),uu.forEach(t),oi=d(ye,` only on the first
`),Ps=s(ye,"CODE",{});var mu=a(Ps);ni=d(mu,"<s>"),mu.forEach(t),si=d(ye," token. For question answering, it is advised to put "),Ns=s(ye,"EM",{});var fu=a(Ns);ai=d(fu,"global attention"),fu.forEach(t),ri=d(ye," on all tokens of the question."),ye.forEach(t),di=l(we),lt=s(we,"LI",{});var Ts=a(lt);ii=d(Ts,"To fine-tune LED on all 16384, it is necessary to enable "),js=s(Ts,"EM",{});var _u=a(js);li=d(_u,"gradient checkpointing"),_u.forEach(t),ci=d(Ts,` by executing
`),Is=s(Ts,"CODE",{});var gu=a(Is);hi=d(gu,"model.gradient_checkpointing_enable()"),gu.forEach(t),pi=d(Ts,"."),Ts.forEach(t),ui=l(we),vo=s(we,"LI",{});var Qr=a(vo);mi=d(Qr,"A notebook showing how to evaluate LED, can be accessed "),To=s(Qr,"A",{href:!0,rel:!0});var vu=a(To);fi=d(vu,"here"),vu.forEach(t),_i=d(Qr,"."),Qr.forEach(t),gi=l(we),ko=s(we,"LI",{});var Hr=a(ko);vi=d(Hr,"A notebook showing how to fine-tune LED, can be accessed "),bo=s(Hr,"A",{href:!0,rel:!0});var Tu=a(bo);Ti=d(Tu,"here"),Tu.forEach(t),ki=d(Hr,"."),Hr.forEach(t),we.forEach(t),ur=l(o),Nt=s(o,"P",{});var Wr=a(Nt);bi=d(Wr,"This model was contributed by "),wo=s(Wr,"A",{href:!0,rel:!0});var ku=a(wo);wi=d(ku,"patrickvonplaten"),ku.forEach(t),yi=d(Wr,"."),Wr.forEach(t),mr=l(o),ct=s(o,"H2",{class:!0});var Ur=a(ct);jt=s(Ur,"A",{id:!0,class:!0,href:!0});var bu=a(jt);Bs=s(bu,"SPAN",{});var wu=a(Bs);_(yo.$$.fragment,wu),wu.forEach(t),bu.forEach(t),Ei=l(Ur),Gs=s(Ur,"SPAN",{});var yu=a(Gs);qi=d(yu,"LEDConfig"),yu.forEach(t),Ur.forEach(t),fr=l(o),O=s(o,"DIV",{class:!0});var W=a(O);_(Eo.$$.fragment,W),Li=l(W),ht=s(W,"P",{});var ks=a(ht);Di=d(ks,"This is the configuration class to store the configuration of a "),Vn=s(ks,"A",{href:!0});var Eu=a(Vn);zi=d(Eu,"LEDModel"),Eu.forEach(t),Fi=d(ks,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(ks,"A",{href:!0,rel:!0});var qu=a(qo);$i=d(qu,"allenai/led-base-16384"),qu.forEach(t),xi=d(ks," architecture."),ks.forEach(t),Mi=l(W),pt=s(W,"P",{});var bs=a(pt);Si=d(bs,"Configuration objects inherit from "),Kn=s(bs,"A",{href:!0});var Lu=a(Kn);Ci=d(Lu,"PretrainedConfig"),Lu.forEach(t),Oi=d(bs,` and can be used to control the model outputs. Read the
documentation from `),Xn=s(bs,"A",{href:!0});var Du=a(Xn);Ai=d(Du,"PretrainedConfig"),Du.forEach(t),Pi=d(bs," for more information."),bs.forEach(t),Ni=l(W),Qs=s(W,"P",{});var zu=a(Qs);ji=d(zu,"Example:"),zu.forEach(t),Ii=l(W),_(Lo.$$.fragment,W),Bi=l(W),Hs=s(W,"BLOCKQUOTE",{});var Fu=a(Hs);Ws=s(Fu,"BLOCKQUOTE",{});var $u=a(Ws);Us=s($u,"BLOCKQUOTE",{});var xu=a(Us);Rs=s(xu,"P",{});var Mu=a(Rs);Gi=d(Mu,"from transformers import LEDModel, LEDConfig"),Mu.forEach(t),xu.forEach(t),$u.forEach(t),Fu.forEach(t),Qi=l(W),Vs=s(W,"BLOCKQUOTE",{});var Su=a(Vs);Ks=s(Su,"BLOCKQUOTE",{});var Cu=a(Ks);Xs=s(Cu,"BLOCKQUOTE",{});var Ou=a(Xs);It=s(Ou,"H1",{class:!0});var Rr=a(It);Bt=s(Rr,"A",{id:!0,class:!0,href:!0});var Au=a(Bt);Js=s(Au,"SPAN",{});var Pu=a(Js);_(Do.$$.fragment,Pu),Pu.forEach(t),Au.forEach(t),Hi=l(Rr),Zs=s(Rr,"SPAN",{});var Nu=a(Zs);Wi=d(Nu,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Nu.forEach(t),Rr.forEach(t),Ou.forEach(t),Cu.forEach(t),Su.forEach(t),Ui=l(W),Ys=s(W,"BLOCKQUOTE",{});var ju=a(Ys);ea=s(ju,"BLOCKQUOTE",{});var Iu=a(ea);zo=s(Iu,"BLOCKQUOTE",{});var Vr=a(zo);Gt=s(Vr,"H1",{class:!0});var Kr=a(Gt);Qt=s(Kr,"A",{id:!0,class:!0,href:!0});var Bu=a(Qt);ta=s(Bu,"SPAN",{});var Gu=a(ta);_(Fo.$$.fragment,Gu),Gu.forEach(t),Bu.forEach(t),Ri=l(Kr),oa=s(Kr,"SPAN",{});var Qu=a(oa);Vi=d(Qu,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Qu.forEach(t),Kr.forEach(t),Ki=l(Vr),na=s(Vr,"P",{});var Hu=a(na);Xi=d(Hu,"LEDModel(configuration)"),Hu.forEach(t),Vr.forEach(t),Iu.forEach(t),ju.forEach(t),Ji=l(W),sa=s(W,"BLOCKQUOTE",{});var Wu=a(sa);aa=s(Wu,"BLOCKQUOTE",{});var Uu=a(aa);ra=s(Uu,"BLOCKQUOTE",{});var Ru=a(ra);Ht=s(Ru,"H1",{class:!0});var Xr=a(Ht);Wt=s(Xr,"A",{id:!0,class:!0,href:!0});var Vu=a(Wt);da=s(Vu,"SPAN",{});var Ku=a(da);_($o.$$.fragment,Ku),Ku.forEach(t),Vu.forEach(t),Zi=l(Xr),ia=s(Xr,"SPAN",{});var Xu=a(ia);Yi=d(Xu,"Accessing the model configuration >>> configuration = model.config"),Xu.forEach(t),Xr.forEach(t),Ru.forEach(t),Uu.forEach(t),Wu.forEach(t),W.forEach(t),_r=l(o),ut=s(o,"H2",{class:!0});var Jr=a(ut);Ut=s(Jr,"A",{id:!0,class:!0,href:!0});var Ju=a(Ut);la=s(Ju,"SPAN",{});var Zu=a(la);_(xo.$$.fragment,Zu),Zu.forEach(t),Ju.forEach(t),el=l(Jr),ca=s(Jr,"SPAN",{});var Yu=a(ca);tl=d(Yu,"LEDTokenizer"),Yu.forEach(t),Jr.forEach(t),gr=l(o),P=s(o,"DIV",{class:!0});var ee=a(P);_(Mo.$$.fragment,ee),ol=l(ee),ha=s(ee,"P",{});var em=a(ha);nl=d(em,"Construct a LED tokenizer."),em.forEach(t),sl=l(ee),Rt=s(ee,"P",{});var hr=a(Rt);Jn=s(hr,"A",{href:!0});var tm=a(Jn);al=d(tm,"LEDTokenizer"),tm.forEach(t),rl=d(hr," is identical to "),Zn=s(hr,"A",{href:!0});var om=a(Zn);dl=d(om,"BartTokenizer"),om.forEach(t),il=d(hr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),hr.forEach(t),ll=l(ee),So=s(ee,"P",{});var Zr=a(So);cl=d(Zr,"Refer to superclass "),Yn=s(Zr,"A",{href:!0});var nm=a(Yn);hl=d(nm,"BartTokenizer"),nm.forEach(t),pl=d(Zr," for usage examples and documentation concerning parameters."),Zr.forEach(t),ul=l(ee),Re=s(ee,"DIV",{class:!0});var ws=a(Re);_(Co.$$.fragment,ws),ml=l(ws),pa=s(ws,"P",{});var sm=a(pa);fl=d(sm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),sm.forEach(t),_l=l(ws),Oo=s(ws,"UL",{});var Yr=a(Oo);es=s(Yr,"LI",{});var Hp=a(es);gl=d(Hp,"single sequence: "),ua=s(Hp,"CODE",{});var am=a(ua);vl=d(am,"<s> X </s>"),am.forEach(t),Hp.forEach(t),Tl=l(Yr),ts=s(Yr,"LI",{});var Wp=a(ts);kl=d(Wp,"pair of sequences: "),ma=s(Wp,"CODE",{});var rm=a(ma);bl=d(rm,"<s> A </s></s> B </s>"),rm.forEach(t),Wp.forEach(t),Yr.forEach(t),ws.forEach(t),wl=l(ee),Vt=s(ee,"DIV",{class:!0});var ed=a(Vt);_(Ao.$$.fragment,ed),yl=l(ed),Po=s(ed,"P",{});var td=a(Po);El=d(td,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fa=s(td,"CODE",{});var dm=a(fa);ql=d(dm,"prepare_for_model"),dm.forEach(t),Ll=d(td," method."),td.forEach(t),ed.forEach(t),Dl=l(ee),Kt=s(ee,"DIV",{class:!0});var od=a(Kt);_(No.$$.fragment,od),zl=l(od),_a=s(od,"P",{});var im=a(_a);Fl=d(im,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),im.forEach(t),od.forEach(t),$l=l(ee),os=s(ee,"DIV",{class:!0});var lm=a(os);_(jo.$$.fragment,lm),lm.forEach(t),ee.forEach(t),vr=l(o),mt=s(o,"H2",{class:!0});var nd=a(mt);Xt=s(nd,"A",{id:!0,class:!0,href:!0});var cm=a(Xt);ga=s(cm,"SPAN",{});var hm=a(ga);_(Io.$$.fragment,hm),hm.forEach(t),cm.forEach(t),xl=l(nd),va=s(nd,"SPAN",{});var pm=a(va);Ml=d(pm,"LEDTokenizerFast"),pm.forEach(t),nd.forEach(t),Tr=l(o),Fe=s(o,"DIV",{class:!0});var mo=a(Fe);_(Bo.$$.fragment,mo),Sl=l(mo),Go=s(mo,"P",{});var sd=a(Go);Cl=d(sd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Ta=s(sd,"EM",{});var um=a(Ta);Ol=d(um,"tokenizers"),um.forEach(t),Al=d(sd," library)."),sd.forEach(t),Pl=l(mo),Jt=s(mo,"P",{});var pr=a(Jt);ns=s(pr,"A",{href:!0});var mm=a(ns);Nl=d(mm,"LEDTokenizerFast"),mm.forEach(t),jl=d(pr," is identical to "),ss=s(pr,"A",{href:!0});var fm=a(ss);Il=d(fm,"BartTokenizerFast"),fm.forEach(t),Bl=d(pr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),pr.forEach(t),Gl=l(mo),Qo=s(mo,"P",{});var ad=a(Qo);Ql=d(ad,"Refer to superclass "),as=s(ad,"A",{href:!0});var _m=a(as);Hl=d(_m,"BartTokenizerFast"),_m.forEach(t),Wl=d(ad," for usage examples and documentation concerning parameters."),ad.forEach(t),mo.forEach(t),kr=l(o),ft=s(o,"H2",{class:!0});var rd=a(ft);Zt=s(rd,"A",{id:!0,class:!0,href:!0});var gm=a(Zt);ka=s(gm,"SPAN",{});var vm=a(ka);_(Ho.$$.fragment,vm),vm.forEach(t),gm.forEach(t),Ul=l(rd),ba=s(rd,"SPAN",{});var Tm=a(ba);Rl=d(Tm,"LED specific outputs"),Tm.forEach(t),rd.forEach(t),br=l(o),_t=s(o,"DIV",{class:!0});var dd=a(_t);_(Wo.$$.fragment,dd),Vl=l(dd),wa=s(dd,"P",{});var km=a(wa);Kl=d(km,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),km.forEach(t),dd.forEach(t),wr=l(o),gt=s(o,"DIV",{class:!0});var id=a(gt);_(Uo.$$.fragment,id),Xl=l(id),ya=s(id,"P",{});var bm=a(ya);Jl=d(bm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),bm.forEach(t),id.forEach(t),yr=l(o),vt=s(o,"DIV",{class:!0});var ld=a(vt);_(Ro.$$.fragment,ld),Zl=l(ld),Ea=s(ld,"P",{});var wm=a(Ea);Yl=d(wm,"Base class for sequence-to-sequence language models outputs."),wm.forEach(t),ld.forEach(t),Er=l(o),Tt=s(o,"DIV",{class:!0});var cd=a(Tt);_(Vo.$$.fragment,cd),ec=l(cd),qa=s(cd,"P",{});var ym=a(qa);tc=d(ym,"Base class for outputs of sequence-to-sequence sentence classification models."),ym.forEach(t),cd.forEach(t),qr=l(o),kt=s(o,"DIV",{class:!0});var hd=a(kt);_(Ko.$$.fragment,hd),oc=l(hd),La=s(hd,"P",{});var Em=a(La);nc=d(Em,"Base class for outputs of sequence-to-sequence question answering models."),Em.forEach(t),hd.forEach(t),Lr=l(o),bt=s(o,"DIV",{class:!0});var pd=a(bt);_(Xo.$$.fragment,pd),sc=l(pd),Da=s(pd,"P",{});var qm=a(Da);ac=d(qm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),qm.forEach(t),pd.forEach(t),Dr=l(o),wt=s(o,"DIV",{class:!0});var ud=a(wt);_(Jo.$$.fragment,ud),rc=l(ud),za=s(ud,"P",{});var Lm=a(za);dc=d(Lm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Lm.forEach(t),ud.forEach(t),zr=l(o),yt=s(o,"DIV",{class:!0});var md=a(yt);_(Zo.$$.fragment,md),ic=l(md),Fa=s(md,"P",{});var Dm=a(Fa);lc=d(Dm,"Base class for sequence-to-sequence language models outputs."),Dm.forEach(t),md.forEach(t),Fr=l(o),Et=s(o,"H2",{class:!0});var fd=a(Et);Yt=s(fd,"A",{id:!0,class:!0,href:!0});var zm=a(Yt);$a=s(zm,"SPAN",{});var Fm=a($a);_(Yo.$$.fragment,Fm),Fm.forEach(t),zm.forEach(t),cc=l(fd),xa=s(fd,"SPAN",{});var $m=a(xa);hc=d($m,"LEDModel"),$m.forEach(t),fd.forEach(t),$r=l(o),$e=s(o,"DIV",{class:!0});var fo=a($e);_(en.$$.fragment,fo),pc=l(fo),tn=s(fo,"P",{});var _d=a(tn);uc=d(_d,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),rs=s(_d,"A",{href:!0});var xm=a(rs);mc=d(xm,"PreTrainedModel"),xm.forEach(t),fc=d(_d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_d.forEach(t),_c=l(fo),on=s(fo,"P",{});var gd=a(on);gc=d(gd,"This model is also a PyTorch "),nn=s(gd,"A",{href:!0,rel:!0});var Mm=a(nn);vc=d(Mm,"torch.nn.Module"),Mm.forEach(t),Tc=d(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),kc=l(fo),ve=s(fo,"DIV",{class:!0});var Ke=a(ve);_(sn.$$.fragment,Ke),bc=l(Ke),qt=s(Ke,"P",{});var ys=a(qt);wc=d(ys,"The "),ds=s(ys,"A",{href:!0});var Sm=a(ds);yc=d(Sm,"LEDModel"),Sm.forEach(t),Ec=d(ys," forward method, overrides the "),Ma=s(ys,"CODE",{});var Cm=a(Ma);qc=d(Cm,"__call__"),Cm.forEach(t),Lc=d(ys," special method."),ys.forEach(t),Dc=l(Ke),_(eo.$$.fragment,Ke),zc=l(Ke),Sa=s(Ke,"P",{});var Om=a(Sa);Fc=d(Om,"Example:"),Om.forEach(t),$c=l(Ke),_(an.$$.fragment,Ke),Ke.forEach(t),fo.forEach(t),xr=l(o),Lt=s(o,"H2",{class:!0});var vd=a(Lt);to=s(vd,"A",{id:!0,class:!0,href:!0});var Am=a(to);Ca=s(Am,"SPAN",{});var Pm=a(Ca);_(rn.$$.fragment,Pm),Pm.forEach(t),Am.forEach(t),xc=l(vd),Oa=s(vd,"SPAN",{});var Nm=a(Oa);Mc=d(Nm,"LEDForConditionalGeneration"),Nm.forEach(t),vd.forEach(t),Mr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);_(dn.$$.fragment,_o),Sc=l(_o),ln=s(_o,"P",{});var Td=a(ln);Cc=d(Td,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),is=s(Td,"A",{href:!0});var jm=a(is);Oc=d(jm,"PreTrainedModel"),jm.forEach(t),Ac=d(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),Pc=l(_o),cn=s(_o,"P",{});var kd=a(cn);Nc=d(kd,"This model is also a PyTorch "),hn=s(kd,"A",{href:!0,rel:!0});var Im=a(hn);jc=d(Im,"torch.nn.Module"),Im.forEach(t),Ic=d(kd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kd.forEach(t),Bc=l(_o),Q=s(_o,"DIV",{class:!0});var Ee=a(Q);_(pn.$$.fragment,Ee),Gc=l(Ee),Dt=s(Ee,"P",{});var Es=a(Dt);Qc=d(Es,"The "),ls=s(Es,"A",{href:!0});var Bm=a(ls);Hc=d(Bm,"LEDForConditionalGeneration"),Bm.forEach(t),Wc=d(Es," forward method, overrides the "),Aa=s(Es,"CODE",{});var Gm=a(Aa);Uc=d(Gm,"__call__"),Gm.forEach(t),Rc=d(Es," special method."),Es.forEach(t),Vc=l(Ee),_(oo.$$.fragment,Ee),Kc=l(Ee),Pa=s(Ee,"P",{});var Qm=a(Pa);Xc=d(Qm,"Conditional generation example:"),Qm.forEach(t),Jc=l(Ee),_(un.$$.fragment,Ee),Zc=l(Ee),Na=s(Ee,"P",{});var Hm=a(Na);Yc=d(Hm,"Summarization example:"),Hm.forEach(t),eh=l(Ee),_(mn.$$.fragment,Ee),Ee.forEach(t),_o.forEach(t),Sr=l(o),zt=s(o,"H2",{class:!0});var bd=a(zt);no=s(bd,"A",{id:!0,class:!0,href:!0});var Wm=a(no);ja=s(Wm,"SPAN",{});var Um=a(ja);_(fn.$$.fragment,Um),Um.forEach(t),Wm.forEach(t),th=l(bd),Ia=s(bd,"SPAN",{});var Rm=a(Ia);oh=d(Rm,"LEDForSequenceClassification"),Rm.forEach(t),bd.forEach(t),Cr=l(o),le=s(o,"DIV",{class:!0});var Xe=a(le);_(_n.$$.fragment,Xe),nh=l(Xe),Ba=s(Xe,"P",{});var Vm=a(Ba);sh=d(Vm,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Vm.forEach(t),ah=l(Xe),gn=s(Xe,"P",{});var wd=a(gn);rh=d(wd,"This model inherits from "),cs=s(wd,"A",{href:!0});var Km=a(cs);dh=d(Km,"PreTrainedModel"),Km.forEach(t),ih=d(wd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wd.forEach(t),lh=l(Xe),vn=s(Xe,"P",{});var yd=a(vn);ch=d(yd,"This model is also a PyTorch "),Tn=s(yd,"A",{href:!0,rel:!0});var Xm=a(Tn);hh=d(Xm,"torch.nn.Module"),Xm.forEach(t),ph=d(yd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yd.forEach(t),uh=l(Xe),H=s(Xe,"DIV",{class:!0});var qe=a(H);_(kn.$$.fragment,qe),mh=l(qe),Ft=s(qe,"P",{});var qs=a(Ft);fh=d(qs,"The "),hs=s(qs,"A",{href:!0});var Jm=a(hs);_h=d(Jm,"LEDForSequenceClassification"),Jm.forEach(t),gh=d(qs," forward method, overrides the "),Ga=s(qs,"CODE",{});var Zm=a(Ga);vh=d(Zm,"__call__"),Zm.forEach(t),Th=d(qs," special method."),qs.forEach(t),kh=l(qe),_(so.$$.fragment,qe),bh=l(qe),Qa=s(qe,"P",{});var Ym=a(Qa);wh=d(Ym,"Example of single-label classification:"),Ym.forEach(t),yh=l(qe),_(bn.$$.fragment,qe),Eh=l(qe),Ha=s(qe,"P",{});var ef=a(Ha);qh=d(ef,"Example of multi-label classification:"),ef.forEach(t),Lh=l(qe),_(wn.$$.fragment,qe),qe.forEach(t),Xe.forEach(t),Or=l(o),$t=s(o,"H2",{class:!0});var Ed=a($t);ao=s(Ed,"A",{id:!0,class:!0,href:!0});var tf=a(ao);Wa=s(tf,"SPAN",{});var of=a(Wa);_(yn.$$.fragment,of),of.forEach(t),tf.forEach(t),Dh=l(Ed),Ua=s(Ed,"SPAN",{});var nf=a(Ua);zh=d(nf,"LEDForQuestionAnswering"),nf.forEach(t),Ed.forEach(t),Ar=l(o),ce=s(o,"DIV",{class:!0});var Je=a(ce);_(En.$$.fragment,Je),Fh=l(Je),xt=s(Je,"P",{});var Ls=a(xt);$h=d(Ls,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ra=s(Ls,"CODE",{});var sf=a(Ra);xh=d(sf,"span start logits"),sf.forEach(t),Mh=d(Ls," and "),Va=s(Ls,"CODE",{});var af=a(Va);Sh=d(af,"span end logits"),af.forEach(t),Ch=d(Ls,")."),Ls.forEach(t),Oh=l(Je),qn=s(Je,"P",{});var qd=a(qn);Ah=d(qd,"This model inherits from "),ps=s(qd,"A",{href:!0});var rf=a(ps);Ph=d(rf,"PreTrainedModel"),rf.forEach(t),Nh=d(qd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd.forEach(t),jh=l(Je),Ln=s(Je,"P",{});var Ld=a(Ln);Ih=d(Ld,"This model is also a PyTorch "),Dn=s(Ld,"A",{href:!0,rel:!0});var df=a(Dn);Bh=d(df,"torch.nn.Module"),df.forEach(t),Gh=d(Ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ld.forEach(t),Qh=l(Je),Te=s(Je,"DIV",{class:!0});var Ze=a(Te);_(zn.$$.fragment,Ze),Hh=l(Ze),Mt=s(Ze,"P",{});var Ds=a(Mt);Wh=d(Ds,"The "),us=s(Ds,"A",{href:!0});var lf=a(us);Uh=d(lf,"LEDForQuestionAnswering"),lf.forEach(t),Rh=d(Ds," forward method, overrides the "),Ka=s(Ds,"CODE",{});var cf=a(Ka);Vh=d(cf,"__call__"),cf.forEach(t),Kh=d(Ds," special method."),Ds.forEach(t),Xh=l(Ze),_(ro.$$.fragment,Ze),Jh=l(Ze),Xa=s(Ze,"P",{});var hf=a(Xa);Zh=d(hf,"Example:"),hf.forEach(t),Yh=l(Ze),_(Fn.$$.fragment,Ze),Ze.forEach(t),Je.forEach(t),Pr=l(o),St=s(o,"H2",{class:!0});var Dd=a(St);io=s(Dd,"A",{id:!0,class:!0,href:!0});var pf=a(io);Ja=s(pf,"SPAN",{});var uf=a(Ja);_($n.$$.fragment,uf),uf.forEach(t),pf.forEach(t),ep=l(Dd),Za=s(Dd,"SPAN",{});var mf=a(Za);tp=d(mf,"TFLEDModel"),mf.forEach(t),Dd.forEach(t),Nr=l(o),he=s(o,"DIV",{class:!0});var Ye=a(he);_(xn.$$.fragment,Ye),op=l(Ye),Mn=s(Ye,"P",{});var zd=a(Mn);np=d(zd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ms=s(zd,"A",{href:!0});var ff=a(ms);sp=d(ff,"TFPreTrainedModel"),ff.forEach(t),ap=d(zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zd.forEach(t),rp=l(Ye),Sn=s(Ye,"P",{});var Fd=a(Sn);dp=d(Fd,"This model is also a "),Cn=s(Fd,"A",{href:!0,rel:!0});var _f=a(Cn);ip=d(_f,"tf.keras.Model"),_f.forEach(t),lp=d(Fd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd.forEach(t),cp=l(Ye),_(lo.$$.fragment,Ye),hp=l(Ye),ke=s(Ye,"DIV",{class:!0});var et=a(ke);_(On.$$.fragment,et),pp=l(et),Ct=s(et,"P",{});var zs=a(Ct);up=d(zs,"The "),fs=s(zs,"A",{href:!0});var gf=a(fs);mp=d(gf,"TFLEDModel"),gf.forEach(t),fp=d(zs," forward method, overrides the "),Ya=s(zs,"CODE",{});var vf=a(Ya);_p=d(vf,"__call__"),vf.forEach(t),gp=d(zs," special method."),zs.forEach(t),vp=l(et),_(co.$$.fragment,et),Tp=l(et),er=s(et,"P",{});var Tf=a(er);kp=d(Tf,"Example:"),Tf.forEach(t),bp=l(et),_(An.$$.fragment,et),et.forEach(t),Ye.forEach(t),jr=l(o),Ot=s(o,"H2",{class:!0});var $d=a(Ot);ho=s($d,"A",{id:!0,class:!0,href:!0});var kf=a(ho);tr=s(kf,"SPAN",{});var bf=a(tr);_(Pn.$$.fragment,bf),bf.forEach(t),kf.forEach(t),wp=l($d),or=s($d,"SPAN",{});var wf=a(or);yp=d(wf,"TFLEDForConditionalGeneration"),wf.forEach(t),$d.forEach(t),Ir=l(o),pe=s(o,"DIV",{class:!0});var tt=a(pe);_(Nn.$$.fragment,tt),Ep=l(tt),jn=s(tt,"P",{});var xd=a(jn);qp=d(xd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),_s=s(xd,"A",{href:!0});var yf=a(_s);Lp=d(yf,"TFPreTrainedModel"),yf.forEach(t),Dp=d(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),zp=l(tt),In=s(tt,"P",{});var Md=a(In);Fp=d(Md,"This model is also a "),Bn=s(Md,"A",{href:!0,rel:!0});var Ef=a(Bn);$p=d(Ef,"tf.keras.Model"),Ef.forEach(t),xp=d(Md,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Md.forEach(t),Mp=l(tt),_(po.$$.fragment,tt),Sp=l(tt),be=s(tt,"DIV",{class:!0});var ot=a(be);_(Gn.$$.fragment,ot),Cp=l(ot),At=s(ot,"P",{});var Fs=a(At);Op=d(Fs,"The "),gs=s(Fs,"A",{href:!0});var qf=a(gs);Ap=d(qf,"TFLEDForConditionalGeneration"),qf.forEach(t),Pp=d(Fs," forward method, overrides the "),nr=s(Fs,"CODE",{});var Lf=a(nr);Np=d(Lf,"__call__"),Lf.forEach(t),jp=d(Fs," special method."),Fs.forEach(t),Ip=l(ot),_(uo.$$.fragment,ot),Bp=l(ot),sr=s(ot,"P",{});var Df=a(sr);Gp=d(Df,"Examples:"),Df.forEach(t),Qp=l(ot),_(Qn.$$.fragment,ot),ot.forEach(t),tt.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Bf)),c(w,"id","led"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#led"),c(b,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(z,"class","relative group"),c(oe,"href","https://arxiv.org/abs/2004.05150"),c(oe,"rel","nofollow"),c(G,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(N,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer"),c(Ae,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer"),c(Un,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer"),c(Rn,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(To,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(To,"rel","nofollow"),c(bo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(bo,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ct,"class","relative group"),c(Vn,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Kn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Xn,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Gt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(O,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(ut,"class","relative group"),c(Jn,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizer"),c(Zn,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer"),c(Yn,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizer"),c(Re,"class","docstring"),c(Vt,"class","docstring"),c(Kt,"class","docstring"),c(os,"class","docstring"),c(P,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(mt,"class","relative group"),c(ns,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDTokenizerFast"),c(ss,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizerFast"),c(as,"href","/docs/transformers/master/en/model_doc/bart#transformers.BartTokenizerFast"),c(Fe,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(ft,"class","relative group"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(Et,"class","relative group"),c(rs,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(ds,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDModel"),c(ve,"class","docstring"),c($e,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Lt,"class","relative group"),c(is,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(ls,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(Q,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(cs,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tn,"rel","nofollow"),c(hs,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDForSequenceClassification"),c(H,"class","docstring"),c(le,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c($t,"class","relative group"),c(ps,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(us,"href","/docs/transformers/master/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(Te,"class","docstring"),c(ce,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(St,"class","relative group"),c(ms,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cn,"rel","nofollow"),c(fs,"href","/docs/transformers/master/en/model_doc/led#transformers.TFLEDModel"),c(ke,"class","docstring"),c(he,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(Ot,"class","relative group"),c(_s,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bn,"rel","nofollow"),c(gs,"href","/docs/transformers/master/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(be,"class","docstring"),c(pe,"class","docstring")},m(o,p){e(document.head,u),h(o,L,p),h(o,b,p),e(b,w),e(w,q),g(E,q,null),e(b,y),e(b,D),e(D,Pe),h(o,fe,p),h(o,z,p),e(z,Z),e(Z,U),g(te,U,null),e(z,Ne),e(z,R),e(R,je),h(o,Me,p),h(o,B,p),e(B,V),e(B,oe),e(oe,Le),e(B,S),h(o,A,p),h(o,_e,p),e(_e,ne),h(o,Se,p),h(o,ge,p),e(ge,K),e(K,Ie),h(o,Ce,p),h(o,C,p),e(C,Be),h(o,Y,p),h(o,x,p),e(x,M),e(M,G),e(G,Ge),e(M,Qe),e(M,N),e(N,He),e(M,se),e(M,De),e(De,m),e(M,F),e(M,ae),e(ae,nt),e(M,st),e(M,I),e(I,at),e(M,rt),e(M,Oe),e(Oe,X),e(M,re),e(M,Ae),e(Ae,dt),e(M,de),e(x,it),e(x,ie),e(ie,We),e(ie,Ue),e(Ue,Sd),e(ie,Cd),e(ie,$s),e($s,Od),e(ie,Ad),e(x,Pd),e(x,ze),e(ze,Nd),e(ze,xs),e(xs,jd),e(ze,Id),e(ze,Ms),e(Ms,Bd),e(ze,Gd),e(ze,Un),e(Un,Qd),e(ze,Hd),e(ze,Ss),e(Ss,Wd),e(ze,Ud),e(x,Rd),e(x,J),e(J,Vd),e(J,Cs),e(Cs,Kd),e(J,Xd),e(J,Os),e(Os,Jd),e(J,Zd),e(J,Rn),e(Rn,Yd),e(J,ei),e(J,As),e(As,ti),e(J,oi),e(J,Ps),e(Ps,ni),e(J,si),e(J,Ns),e(Ns,ai),e(J,ri),e(x,di),e(x,lt),e(lt,ii),e(lt,js),e(js,li),e(lt,ci),e(lt,Is),e(Is,hi),e(lt,pi),e(x,ui),e(x,vo),e(vo,mi),e(vo,To),e(To,fi),e(vo,_i),e(x,gi),e(x,ko),e(ko,vi),e(ko,bo),e(bo,Ti),e(ko,ki),h(o,ur,p),h(o,Nt,p),e(Nt,bi),e(Nt,wo),e(wo,wi),e(Nt,yi),h(o,mr,p),h(o,ct,p),e(ct,jt),e(jt,Bs),g(yo,Bs,null),e(ct,Ei),e(ct,Gs),e(Gs,qi),h(o,fr,p),h(o,O,p),g(Eo,O,null),e(O,Li),e(O,ht),e(ht,Di),e(ht,Vn),e(Vn,zi),e(ht,Fi),e(ht,qo),e(qo,$i),e(ht,xi),e(O,Mi),e(O,pt),e(pt,Si),e(pt,Kn),e(Kn,Ci),e(pt,Oi),e(pt,Xn),e(Xn,Ai),e(pt,Pi),e(O,Ni),e(O,Qs),e(Qs,ji),e(O,Ii),g(Lo,O,null),e(O,Bi),e(O,Hs),e(Hs,Ws),e(Ws,Us),e(Us,Rs),e(Rs,Gi),e(O,Qi),e(O,Vs),e(Vs,Ks),e(Ks,Xs),e(Xs,It),e(It,Bt),e(Bt,Js),g(Do,Js,null),e(It,Hi),e(It,Zs),e(Zs,Wi),e(O,Ui),e(O,Ys),e(Ys,ea),e(ea,zo),e(zo,Gt),e(Gt,Qt),e(Qt,ta),g(Fo,ta,null),e(Gt,Ri),e(Gt,oa),e(oa,Vi),e(zo,Ki),e(zo,na),e(na,Xi),e(O,Ji),e(O,sa),e(sa,aa),e(aa,ra),e(ra,Ht),e(Ht,Wt),e(Wt,da),g($o,da,null),e(Ht,Zi),e(Ht,ia),e(ia,Yi),h(o,_r,p),h(o,ut,p),e(ut,Ut),e(Ut,la),g(xo,la,null),e(ut,el),e(ut,ca),e(ca,tl),h(o,gr,p),h(o,P,p),g(Mo,P,null),e(P,ol),e(P,ha),e(ha,nl),e(P,sl),e(P,Rt),e(Rt,Jn),e(Jn,al),e(Rt,rl),e(Rt,Zn),e(Zn,dl),e(Rt,il),e(P,ll),e(P,So),e(So,cl),e(So,Yn),e(Yn,hl),e(So,pl),e(P,ul),e(P,Re),g(Co,Re,null),e(Re,ml),e(Re,pa),e(pa,fl),e(Re,_l),e(Re,Oo),e(Oo,es),e(es,gl),e(es,ua),e(ua,vl),e(Oo,Tl),e(Oo,ts),e(ts,kl),e(ts,ma),e(ma,bl),e(P,wl),e(P,Vt),g(Ao,Vt,null),e(Vt,yl),e(Vt,Po),e(Po,El),e(Po,fa),e(fa,ql),e(Po,Ll),e(P,Dl),e(P,Kt),g(No,Kt,null),e(Kt,zl),e(Kt,_a),e(_a,Fl),e(P,$l),e(P,os),g(jo,os,null),h(o,vr,p),h(o,mt,p),e(mt,Xt),e(Xt,ga),g(Io,ga,null),e(mt,xl),e(mt,va),e(va,Ml),h(o,Tr,p),h(o,Fe,p),g(Bo,Fe,null),e(Fe,Sl),e(Fe,Go),e(Go,Cl),e(Go,Ta),e(Ta,Ol),e(Go,Al),e(Fe,Pl),e(Fe,Jt),e(Jt,ns),e(ns,Nl),e(Jt,jl),e(Jt,ss),e(ss,Il),e(Jt,Bl),e(Fe,Gl),e(Fe,Qo),e(Qo,Ql),e(Qo,as),e(as,Hl),e(Qo,Wl),h(o,kr,p),h(o,ft,p),e(ft,Zt),e(Zt,ka),g(Ho,ka,null),e(ft,Ul),e(ft,ba),e(ba,Rl),h(o,br,p),h(o,_t,p),g(Wo,_t,null),e(_t,Vl),e(_t,wa),e(wa,Kl),h(o,wr,p),h(o,gt,p),g(Uo,gt,null),e(gt,Xl),e(gt,ya),e(ya,Jl),h(o,yr,p),h(o,vt,p),g(Ro,vt,null),e(vt,Zl),e(vt,Ea),e(Ea,Yl),h(o,Er,p),h(o,Tt,p),g(Vo,Tt,null),e(Tt,ec),e(Tt,qa),e(qa,tc),h(o,qr,p),h(o,kt,p),g(Ko,kt,null),e(kt,oc),e(kt,La),e(La,nc),h(o,Lr,p),h(o,bt,p),g(Xo,bt,null),e(bt,sc),e(bt,Da),e(Da,ac),h(o,Dr,p),h(o,wt,p),g(Jo,wt,null),e(wt,rc),e(wt,za),e(za,dc),h(o,zr,p),h(o,yt,p),g(Zo,yt,null),e(yt,ic),e(yt,Fa),e(Fa,lc),h(o,Fr,p),h(o,Et,p),e(Et,Yt),e(Yt,$a),g(Yo,$a,null),e(Et,cc),e(Et,xa),e(xa,hc),h(o,$r,p),h(o,$e,p),g(en,$e,null),e($e,pc),e($e,tn),e(tn,uc),e(tn,rs),e(rs,mc),e(tn,fc),e($e,_c),e($e,on),e(on,gc),e(on,nn),e(nn,vc),e(on,Tc),e($e,kc),e($e,ve),g(sn,ve,null),e(ve,bc),e(ve,qt),e(qt,wc),e(qt,ds),e(ds,yc),e(qt,Ec),e(qt,Ma),e(Ma,qc),e(qt,Lc),e(ve,Dc),g(eo,ve,null),e(ve,zc),e(ve,Sa),e(Sa,Fc),e(ve,$c),g(an,ve,null),h(o,xr,p),h(o,Lt,p),e(Lt,to),e(to,Ca),g(rn,Ca,null),e(Lt,xc),e(Lt,Oa),e(Oa,Mc),h(o,Mr,p),h(o,xe,p),g(dn,xe,null),e(xe,Sc),e(xe,ln),e(ln,Cc),e(ln,is),e(is,Oc),e(ln,Ac),e(xe,Pc),e(xe,cn),e(cn,Nc),e(cn,hn),e(hn,jc),e(cn,Ic),e(xe,Bc),e(xe,Q),g(pn,Q,null),e(Q,Gc),e(Q,Dt),e(Dt,Qc),e(Dt,ls),e(ls,Hc),e(Dt,Wc),e(Dt,Aa),e(Aa,Uc),e(Dt,Rc),e(Q,Vc),g(oo,Q,null),e(Q,Kc),e(Q,Pa),e(Pa,Xc),e(Q,Jc),g(un,Q,null),e(Q,Zc),e(Q,Na),e(Na,Yc),e(Q,eh),g(mn,Q,null),h(o,Sr,p),h(o,zt,p),e(zt,no),e(no,ja),g(fn,ja,null),e(zt,th),e(zt,Ia),e(Ia,oh),h(o,Cr,p),h(o,le,p),g(_n,le,null),e(le,nh),e(le,Ba),e(Ba,sh),e(le,ah),e(le,gn),e(gn,rh),e(gn,cs),e(cs,dh),e(gn,ih),e(le,lh),e(le,vn),e(vn,ch),e(vn,Tn),e(Tn,hh),e(vn,ph),e(le,uh),e(le,H),g(kn,H,null),e(H,mh),e(H,Ft),e(Ft,fh),e(Ft,hs),e(hs,_h),e(Ft,gh),e(Ft,Ga),e(Ga,vh),e(Ft,Th),e(H,kh),g(so,H,null),e(H,bh),e(H,Qa),e(Qa,wh),e(H,yh),g(bn,H,null),e(H,Eh),e(H,Ha),e(Ha,qh),e(H,Lh),g(wn,H,null),h(o,Or,p),h(o,$t,p),e($t,ao),e(ao,Wa),g(yn,Wa,null),e($t,Dh),e($t,Ua),e(Ua,zh),h(o,Ar,p),h(o,ce,p),g(En,ce,null),e(ce,Fh),e(ce,xt),e(xt,$h),e(xt,Ra),e(Ra,xh),e(xt,Mh),e(xt,Va),e(Va,Sh),e(xt,Ch),e(ce,Oh),e(ce,qn),e(qn,Ah),e(qn,ps),e(ps,Ph),e(qn,Nh),e(ce,jh),e(ce,Ln),e(Ln,Ih),e(Ln,Dn),e(Dn,Bh),e(Ln,Gh),e(ce,Qh),e(ce,Te),g(zn,Te,null),e(Te,Hh),e(Te,Mt),e(Mt,Wh),e(Mt,us),e(us,Uh),e(Mt,Rh),e(Mt,Ka),e(Ka,Vh),e(Mt,Kh),e(Te,Xh),g(ro,Te,null),e(Te,Jh),e(Te,Xa),e(Xa,Zh),e(Te,Yh),g(Fn,Te,null),h(o,Pr,p),h(o,St,p),e(St,io),e(io,Ja),g($n,Ja,null),e(St,ep),e(St,Za),e(Za,tp),h(o,Nr,p),h(o,he,p),g(xn,he,null),e(he,op),e(he,Mn),e(Mn,np),e(Mn,ms),e(ms,sp),e(Mn,ap),e(he,rp),e(he,Sn),e(Sn,dp),e(Sn,Cn),e(Cn,ip),e(Sn,lp),e(he,cp),g(lo,he,null),e(he,hp),e(he,ke),g(On,ke,null),e(ke,pp),e(ke,Ct),e(Ct,up),e(Ct,fs),e(fs,mp),e(Ct,fp),e(Ct,Ya),e(Ya,_p),e(Ct,gp),e(ke,vp),g(co,ke,null),e(ke,Tp),e(ke,er),e(er,kp),e(ke,bp),g(An,ke,null),h(o,jr,p),h(o,Ot,p),e(Ot,ho),e(ho,tr),g(Pn,tr,null),e(Ot,wp),e(Ot,or),e(or,yp),h(o,Ir,p),h(o,pe,p),g(Nn,pe,null),e(pe,Ep),e(pe,jn),e(jn,qp),e(jn,_s),e(_s,Lp),e(jn,Dp),e(pe,zp),e(pe,In),e(In,Fp),e(In,Bn),e(Bn,$p),e(In,xp),e(pe,Mp),g(po,pe,null),e(pe,Sp),e(pe,be),g(Gn,be,null),e(be,Cp),e(be,At),e(At,Op),e(At,gs),e(gs,Ap),e(At,Pp),e(At,nr),e(nr,Np),e(At,jp),e(be,Ip),g(uo,be,null),e(be,Bp),e(be,sr),e(sr,Gp),e(be,Qp),g(Qn,be,null),Br=!0},p(o,[p]){const Hn={};p&2&&(Hn.$$scope={dirty:p,ctx:o}),eo.$set(Hn);const ar={};p&2&&(ar.$$scope={dirty:p,ctx:o}),oo.$set(ar);const rr={};p&2&&(rr.$$scope={dirty:p,ctx:o}),so.$set(rr);const dr={};p&2&&(dr.$$scope={dirty:p,ctx:o}),ro.$set(dr);const Wn={};p&2&&(Wn.$$scope={dirty:p,ctx:o}),lo.$set(Wn);const ir={};p&2&&(ir.$$scope={dirty:p,ctx:o}),co.$set(ir);const lr={};p&2&&(lr.$$scope={dirty:p,ctx:o}),po.$set(lr);const cr={};p&2&&(cr.$$scope={dirty:p,ctx:o}),uo.$set(cr)},i(o){Br||(v(E.$$.fragment,o),v(te.$$.fragment,o),v(yo.$$.fragment,o),v(Eo.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v(Fo.$$.fragment,o),v($o.$$.fragment,o),v(xo.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Ao.$$.fragment,o),v(No.$$.fragment,o),v(jo.$$.fragment,o),v(Io.$$.fragment,o),v(Bo.$$.fragment,o),v(Ho.$$.fragment,o),v(Wo.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Vo.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(en.$$.fragment,o),v(sn.$$.fragment,o),v(eo.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(dn.$$.fragment,o),v(pn.$$.fragment,o),v(oo.$$.fragment,o),v(un.$$.fragment,o),v(mn.$$.fragment,o),v(fn.$$.fragment,o),v(_n.$$.fragment,o),v(kn.$$.fragment,o),v(so.$$.fragment,o),v(bn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(En.$$.fragment,o),v(zn.$$.fragment,o),v(ro.$$.fragment,o),v(Fn.$$.fragment,o),v($n.$$.fragment,o),v(xn.$$.fragment,o),v(lo.$$.fragment,o),v(On.$$.fragment,o),v(co.$$.fragment,o),v(An.$$.fragment,o),v(Pn.$$.fragment,o),v(Nn.$$.fragment,o),v(po.$$.fragment,o),v(Gn.$$.fragment,o),v(uo.$$.fragment,o),v(Qn.$$.fragment,o),Br=!0)},o(o){T(E.$$.fragment,o),T(te.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T(Fo.$$.fragment,o),T($o.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Bo.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(sn.$$.fragment,o),T(eo.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(dn.$$.fragment,o),T(pn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(mn.$$.fragment,o),T(fn.$$.fragment,o),T(_n.$$.fragment,o),T(kn.$$.fragment,o),T(so.$$.fragment,o),T(bn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(zn.$$.fragment,o),T(ro.$$.fragment,o),T(Fn.$$.fragment,o),T($n.$$.fragment,o),T(xn.$$.fragment,o),T(lo.$$.fragment,o),T(On.$$.fragment,o),T(co.$$.fragment,o),T(An.$$.fragment,o),T(Pn.$$.fragment,o),T(Nn.$$.fragment,o),T(po.$$.fragment,o),T(Gn.$$.fragment,o),T(uo.$$.fragment,o),T(Qn.$$.fragment,o),Br=!1},d(o){t(u),o&&t(L),o&&t(b),k(E),o&&t(fe),o&&t(z),k(te),o&&t(Me),o&&t(B),o&&t(A),o&&t(_e),o&&t(Se),o&&t(ge),o&&t(Ce),o&&t(C),o&&t(Y),o&&t(x),o&&t(ur),o&&t(Nt),o&&t(mr),o&&t(ct),k(yo),o&&t(fr),o&&t(O),k(Eo),k(Lo),k(Do),k(Fo),k($o),o&&t(_r),o&&t(ut),k(xo),o&&t(gr),o&&t(P),k(Mo),k(Co),k(Ao),k(No),k(jo),o&&t(vr),o&&t(mt),k(Io),o&&t(Tr),o&&t(Fe),k(Bo),o&&t(kr),o&&t(ft),k(Ho),o&&t(br),o&&t(_t),k(Wo),o&&t(wr),o&&t(gt),k(Uo),o&&t(yr),o&&t(vt),k(Ro),o&&t(Er),o&&t(Tt),k(Vo),o&&t(qr),o&&t(kt),k(Ko),o&&t(Lr),o&&t(bt),k(Xo),o&&t(Dr),o&&t(wt),k(Jo),o&&t(zr),o&&t(yt),k(Zo),o&&t(Fr),o&&t(Et),k(Yo),o&&t($r),o&&t($e),k(en),k(sn),k(eo),k(an),o&&t(xr),o&&t(Lt),k(rn),o&&t(Mr),o&&t(xe),k(dn),k(pn),k(oo),k(un),k(mn),o&&t(Sr),o&&t(zt),k(fn),o&&t(Cr),o&&t(le),k(_n),k(kn),k(so),k(bn),k(wn),o&&t(Or),o&&t($t),k(yn),o&&t(Ar),o&&t(ce),k(En),k(zn),k(ro),k(Fn),o&&t(Pr),o&&t(St),k($n),o&&t(Nr),o&&t(he),k(xn),k(lo),k(On),k(co),k(An),o&&t(jr),o&&t(Ot),k(Pn),o&&t(Ir),o&&t(pe),k(Nn),k(po),k(Gn),k(uo),k(Qn)}}}const Bf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Gf(j,u,L){let{fw:b}=u;return j.$$set=w=>{"fw"in w&&L(0,b=w.fw)},[b]}class Kf extends zf{constructor(u){super();Ff(this,u,Gf,If,$f,{fw:0})}}export{Kf as default,Bf as metadata};
