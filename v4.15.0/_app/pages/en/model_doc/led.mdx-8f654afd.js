import{S as Z_,i as Y_,s as eg,e as n,k as i,w as m,t as r,L as tg,c as s,d as t,m as l,a,x as _,h as d,b as c,J as e,g as h,y as g,q as v,o as T,B as k}from"../../../chunks/vendor-b1433968.js";import{T as ko}from"../../../chunks/Tip-c3840994.js";import{D as S}from"../../../chunks/Docstring-ff504c58.js";import{C as bo}from"../../../chunks/CodeBlock-a320dbd7.js";import{I as Y}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function og(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function ng(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function sg(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function ag(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function rg(B){let p,L,b,w,q,E,y,D,Ae,_e,z,ee,W,ne,Ne,K,Ie,Me,Q,V,se,Le,C,A,ge,ae,Se,ve,X,je,Ce,O,Be,te,$,x,H,Ge,Qe,j,He,re,De;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),_e=i(),z=n("p"),ee=r("This second option is useful when using "),W=n("code"),ne=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),K=n("code"),Ie=r("model(inputs)"),Me=r("."),Q=i(),V=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Le=i(),C=n("ul"),A=n("li"),ge=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),ve=r(" only and nothing else: "),X=n("code"),je=r("model(input_ids)"),Ce=i(),O=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),H=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),j=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var F=a(p);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(f),w=s(f,"UL",{});var de=a(w);q=s(de,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(de),D=s(de,"LI",{});var st=a(D);Ae=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),de.forEach(t),_e=l(f),z=s(f,"P",{});var G=a(z);ee=d(G,"This second option is useful when using "),W=s(G,"CODE",{});var at=a(W);ne=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(G,` method which currently requires having all
the tensors in the first argument of the model call function: `),K=s(G,"CODE",{});var rt=a(K);Ie=d(rt,"model(inputs)"),rt.forEach(t),Me=d(G,"."),G.forEach(t),Q=l(f),V=s(f,"P",{});var Oe=a(V);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Oe.forEach(t),Le=l(f),C=s(f,"UL",{});var J=a(C);A=s(J,"LI",{});var ie=a(A);ge=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Pe=a(ae);Se=d(Pe,"input_ids"),Pe.forEach(t),ve=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var dt=a(X);je=d(dt,"model(input_ids)"),dt.forEach(t),ie.forEach(t),Ce=l(J),O=s(J,"LI",{});var le=a(O);Be=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(le,"CODE",{});var it=a(te);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(le," or "),H=s(le,"CODE",{});var ce=a(H);Ge=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),Qe=l(J),j=s(J,"LI",{});var Ue=a(j);He=d(Ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ue,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ue.forEach(t),J.forEach(t)},m(f,F){h(f,p,F),e(p,L),h(f,b,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Ae),h(f,_e,F),h(f,z,F),e(z,ee),e(z,W),e(W,ne),e(z,Ne),e(z,K),e(K,Ie),e(z,Me),h(f,Q,F),h(f,V,F),e(V,se),h(f,Le,F),h(f,C,F),e(C,A),e(A,ge),e(A,ae),e(ae,Se),e(A,ve),e(A,X),e(X,je),e(C,Ce),e(C,O),e(O,Be),e(O,te),e(te,$),e(O,x),e(O,H),e(H,Ge),e(C,Qe),e(C,j),e(j,He),e(j,re),e(re,De)},d(f){f&&t(p),f&&t(b),f&&t(w),f&&t(_e),f&&t(z),f&&t(Q),f&&t(V),f&&t(Le),f&&t(C)}}}function dg(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function ig(B){let p,L,b,w,q,E,y,D,Ae,_e,z,ee,W,ne,Ne,K,Ie,Me,Q,V,se,Le,C,A,ge,ae,Se,ve,X,je,Ce,O,Be,te,$,x,H,Ge,Qe,j,He,re,De;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),b=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Ae=r("having all inputs as a list, tuple or dict in the first positional arguments."),_e=i(),z=n("p"),ee=r("This second option is useful when using "),W=n("code"),ne=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all
the tensors in the first argument of the model call function: `),K=n("code"),Ie=r("model(inputs)"),Me=r("."),Q=i(),V=n("p"),se=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Le=i(),C=n("ul"),A=n("li"),ge=r("a single Tensor with "),ae=n("code"),Se=r("input_ids"),ve=r(" only and nothing else: "),X=n("code"),je=r("model(input_ids)"),Ce=i(),O=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),H=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),j=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var F=a(p);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),b=l(f),w=s(f,"UL",{});var de=a(w);q=s(de,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(de),D=s(de,"LI",{});var st=a(D);Ae=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),de.forEach(t),_e=l(f),z=s(f,"P",{});var G=a(z);ee=d(G,"This second option is useful when using "),W=s(G,"CODE",{});var at=a(W);ne=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(G,` method which currently requires having all
the tensors in the first argument of the model call function: `),K=s(G,"CODE",{});var rt=a(K);Ie=d(rt,"model(inputs)"),rt.forEach(t),Me=d(G,"."),G.forEach(t),Q=l(f),V=s(f,"P",{});var Oe=a(V);se=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Oe.forEach(t),Le=l(f),C=s(f,"UL",{});var J=a(C);A=s(J,"LI",{});var ie=a(A);ge=d(ie,"a single Tensor with "),ae=s(ie,"CODE",{});var Pe=a(ae);Se=d(Pe,"input_ids"),Pe.forEach(t),ve=d(ie," only and nothing else: "),X=s(ie,"CODE",{});var dt=a(X);je=d(dt,"model(input_ids)"),dt.forEach(t),ie.forEach(t),Ce=l(J),O=s(J,"LI",{});var le=a(O);Be=d(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),te=s(le,"CODE",{});var it=a(te);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(le," or "),H=s(le,"CODE",{});var ce=a(H);Ge=d(ce,"model([input_ids, attention_mask, token_type_ids])"),ce.forEach(t),le.forEach(t),Qe=l(J),j=s(J,"LI",{});var Ue=a(j);He=d(Ue,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),re=s(Ue,"CODE",{});var Re=a(re);De=d(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Ue.forEach(t),J.forEach(t)},m(f,F){h(f,p,F),e(p,L),h(f,b,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Ae),h(f,_e,F),h(f,z,F),e(z,ee),e(z,W),e(W,ne),e(z,Ne),e(z,K),e(K,Ie),e(z,Me),h(f,Q,F),h(f,V,F),e(V,se),h(f,Le,F),h(f,C,F),e(C,A),e(A,ge),e(A,ae),e(ae,Se),e(A,ve),e(A,X),e(X,je),e(C,Ce),e(C,O),e(O,Be),e(O,te),e(te,$),e(O,x),e(O,H),e(H,Ge),e(C,Qe),e(C,j),e(j,He),e(j,re),e(re,De)},d(f){f&&t(p),f&&t(b),f&&t(w),f&&t(_e),f&&t(z),f&&t(Q),f&&t(V),f&&t(Le),f&&t(C)}}}function lg(B){let p,L,b,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(y,"CODE",{});var D=a(b);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,b),e(b,w),e(p,q)},d(E){E&&t(p)}}}function cg(B){let p,L,b,w,q,E,y,D,Ae,_e,z,ee,W,ne,Ne,K,Ie,Me,Q,V,se,Le,C,A,ge,ae,Se,ve,X,je,Ce,O,Be,te,$,x,H,Ge,Qe,j,He,re,De,f,F,de,nt,st,G,at,rt,Oe,J,ie,Pe,dt,le,it,ce,Ue,Re,mi,_i,As,gi,vi,Ti,ze,ki,Ns,bi,wi,Is,yi,Ei,es,qi,Li,js,Di,zi,Fi,Z,$i,Bs,xi,Mi,Gs,Si,Ci,ts,Oi,Pi,Qs,Ai,Ni,Hs,Ii,ji,Us,Bi,Gi,Qi,lt,Hi,Rs,Ui,Ri,Ws,Wi,Ki,Vi,wo,Xi,yo,Ji,Zi,Yi,Eo,el,qo,tl,ol,Qr,At,nl,Lo,sl,al,Hr,ct,Nt,Ks,Do,rl,Vs,dl,Ur,P,zo,il,ht,ll,os,cl,hl,Fo,ul,pl,fl,ut,ml,ns,_l,gl,ss,vl,Tl,kl,Xs,bl,wl,$o,yl,Js,Zs,Ys,ea,El,ql,ta,oa,xo,It,jt,na,Mo,Ll,sa,Dl,zl,aa,Fl,$l,ra,da,So,Bt,Gt,ia,Co,xl,la,Ml,Sl,ca,Cl,Ol,ha,ua,Oo,Qt,Ht,pa,Po,Pl,fa,Al,Nl,ma,Il,Rr,pt,Ut,_a,Ao,jl,ga,Bl,Wr,I,No,Gl,va,Ql,Hl,Rt,as,Ul,Rl,rs,Wl,Kl,Vl,Io,Xl,ds,Jl,Zl,Yl,We,jo,ec,Ta,tc,oc,Bo,is,nc,ka,sc,ac,ls,rc,ba,dc,ic,Wt,Go,lc,Qo,cc,wa,hc,uc,pc,Kt,Ho,fc,ya,mc,_c,Ea,Kr,ft,Vt,qa,Uo,gc,La,vc,Vr,Fe,Ro,Tc,Wo,kc,Da,bc,wc,yc,Xt,cs,Ec,qc,hs,Lc,Dc,zc,Ko,Fc,us,$c,xc,Xr,mt,Jt,za,Vo,Mc,Fa,Sc,Jr,_t,Xo,Cc,$a,Oc,Zr,gt,Jo,Pc,xa,Ac,Yr,vt,Zo,Nc,Ma,Ic,ed,Tt,Yo,jc,Sa,Bc,td,kt,en,Gc,Ca,Qc,od,bt,tn,Hc,Oa,Uc,nd,wt,on,Rc,Pa,Wc,sd,yt,nn,Kc,Aa,Vc,ad,Et,Zt,Na,sn,Xc,Ia,Jc,rd,$e,an,Zc,rn,Yc,ps,eh,th,oh,dn,nh,ln,sh,ah,rh,Te,cn,dh,qt,ih,fs,lh,ch,ja,hh,uh,ph,Yt,fh,Ba,mh,_h,hn,dd,Lt,eo,Ga,un,gh,Qa,vh,id,xe,pn,Th,fn,kh,ms,bh,wh,yh,mn,Eh,_n,qh,Lh,Dh,M,gn,zh,Dt,Fh,_s,$h,xh,Ha,Mh,Sh,Ch,to,Oh,Ua,Ph,Ah,vn,Nh,Ra,Ih,jh,Wa,Ka,Va,Xa,Bh,Gh,Ja,Za,Ya,er,Qh,Hh,tr,or,nr,sr,Uh,Rh,ar,rr,Tn,oo,no,dr,kn,Wh,ir,Kh,Vh,lr,Xh,Jh,cr,hr,bn,so,ao,ur,wn,Zh,pr,Yh,eu,fr,tu,ld,zt,ro,mr,yn,ou,_r,nu,cd,he,En,su,gr,au,ru,qn,du,gs,iu,lu,cu,Ln,hu,Dn,uu,pu,fu,U,zn,mu,Ft,_u,vs,gu,vu,vr,Tu,ku,bu,io,wu,Tr,yu,Eu,Fn,qu,kr,Lu,Du,$n,hd,$t,lo,br,xn,zu,wr,Fu,ud,ue,Mn,$u,xt,xu,yr,Mu,Su,Er,Cu,Ou,Pu,Sn,Au,Ts,Nu,Iu,ju,Cn,Bu,On,Gu,Qu,Hu,ke,Pn,Uu,Mt,Ru,ks,Wu,Ku,qr,Vu,Xu,Ju,co,Zu,Lr,Yu,ep,An,pd,St,ho,Dr,Nn,tp,zr,op,fd,pe,In,np,jn,sp,bs,ap,rp,dp,Bn,ip,Gn,lp,cp,hp,uo,up,be,Qn,pp,Ct,fp,ws,mp,_p,Fr,gp,vp,Tp,po,kp,$r,bp,wp,Hn,md,Ot,fo,xr,Un,yp,Mr,Ep,_d,fe,Rn,qp,Wn,Lp,ys,Dp,zp,Fp,Kn,$p,Vn,xp,Mp,Sp,mo,Cp,we,Xn,Op,Pt,Pp,Es,Ap,Np,Sr,Ip,jp,Bp,_o,Gp,Cr,Qp,Hp,Jn,gd;return E=new Y({}),ne=new Y({}),Do=new Y({}),zo=new S({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),$o=new bo({props:{code:",",highlighted:""}}),Mo=new Y({}),Co=new Y({}),Po=new Y({}),Ao=new Y({}),No=new S({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/tokenization_led.py#L39"}}),jo=new S({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/roberta/tokenization_roberta.py#L181",parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new S({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/roberta/tokenization_roberta.py#L206",parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ho=new S({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/roberta/tokenization_roberta.py#L233",parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Uo=new Y({}),Ro=new S({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/tokenization_led_fast.py#L40"}}),Vo=new Y({}),Xo=new S({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L1113",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention
mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining
<code>attention_window + 1</code> values). Note that the first <code>x</code> values refer to tokens with fixed positions in
the text, but the remaining <code>attention_window + 1</code> values refer to tokens with relative positions: the
attention weight of a token to itself is located at index <code>x + attention_window / 2</code> and the
<code>attention_window / 2</code> preceding (succeeding) values are the attention weights to the <code>attention_window / 2</code> preceding (succeeding) tokens. If the attention window contains a token with global attention, the
attention weight at the corresponding index is set to 0; the value should be accessed from the first <code>x</code>
attention weights. If a token has global attention, the attention weights to all other tokens in
<code>attentions</code> is set to 0, the values should be accessed from <code>global_attentions</code>.`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Jo=new S({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L1154",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new S({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L1216",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),Yo=new S({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L1278",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),en=new S({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L1340",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),tn=new S({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L1310",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining
<code>attention_window + 1</code> values). Note that the first <code>x</code> values refer to tokens with fixed positions in
the text, but the remaining <code>attention_window + 1</code> values refer to tokens with relative positions: the
attention weight of a token to itself is located at index <code>x + attention_window / 2</code> and the
<code>attention_window / 2</code> preceding (succeeding) values are the attention weights to the <code>attention_window / 2</code> preceding (succeeding) tokens. If the attention window contains a token with global attention, the
attention weight at the corresponding index is set to 0; the value should be accessed from the first <code>x</code>
attention weights. If a token has global attention, the attention weights to all other tokens in
<code>attentions</code> is set to 0, the values should be accessed from <code>global_attentions</code>.`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),on=new S({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L1351",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),nn=new S({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L1414",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}]}}),sn=new Y({}),an=new S({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2120",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new S({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2147",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),Yt=new ko({props:{$$slots:{default:[og]},$$scope:{ctx:B}}}),hn=new bo({props:{code:`from transformers import LEDTokenizer, LEDModel
import torch

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = LEDModel.from_pretrained('allenai/led-base-16384')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Y({}),pn=new S({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2243",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new S({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2287",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
`}}),to=new ko({props:{$$slots:{default:[ng]},$$scope:{ctx:B}}}),vn=new bo({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration
tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
TXT = "My friends are <mask> but they eat too many carbs."

model = LEDForConditionalGeneration.from_pretrained('allenai/led-base-16384')
input_ids = tokenizer([TXT], return_tensors='pt')['input_ids']

prediction = model.generate(input_ids)[0]
print(tokenizer.decode(prediction, skip_special_tokens=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),kn=new Y({}),wn=new Y({}),yn=new Y({}),En=new S({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2429",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new S({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2442",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new ko({props:{$$slots:{default:[sg]},$$scope:{ctx:B}}}),Fn=new bo({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = LEDForSequenceClassification.from_pretrained('allenai/led-base-16384')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0) # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new bo({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = LEDForSequenceClassification.from_pretrained('allenai/led-base-16384', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xn=new Y({}),Mn=new S({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2556",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new S({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_led.py#L2568",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
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
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>,
<em>optional</em>) is a sequence of hidden-states at the output of the last layer of the encoder. Used in the
cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code>
have to be input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code>
takes the value of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ko({props:{$$slots:{default:[ag]},$$scope:{ctx:B}}}),An=new bo({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
import torch

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = LEDForQuestionAnswering.from_pretrained('allenai/led-base-16384')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Nn=new Y({}),In=new S({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L2210",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),uo=new ko({props:{$$slots:{default:[rg]},$$scope:{ctx:B}}}),Qn=new S({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L2222",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new ko({props:{$$slots:{default:[dg]},$$scope:{ctx:B}}}),Hn=new bo({props:{code:`from transformers import LEDTokenizer, TFLEDModel
import tensorflow as tf

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = TFLEDModel.from_pretrained('allenai/led-base-16384')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Un=new Y({}),Rn=new S({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L2315",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),mo=new ko({props:{$$slots:{default:[ig]},$$scope:{ctx:B}}}),Xn=new S({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/led/modeling_tf_led.py#L2348",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
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
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDConfig"
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
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_o=new ko({props:{$$slots:{default:[lg]},$$scope:{ctx:B}}}),Jn=new bo({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
import tensorflow as tf
mname = 'allenai/led-base-16384'
tokenizer = LEDTokenizer.from_pretrained(mname)
TXT = "My friends are <mask> but they eat too many carbs."
model = TFLEDForConditionalGeneration.from_pretrained(mname)
batch = tokenizer([TXT], return_tensors='tf')
logits = model(inputs=batch.input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){p=n("meta"),L=i(),b=n("h1"),w=n("a"),q=n("span"),m(E.$$.fragment),y=i(),D=n("span"),Ae=r("LED"),_e=i(),z=n("h2"),ee=n("a"),W=n("span"),m(ne.$$.fragment),Ne=i(),K=n("span"),Ie=r("Overview"),Me=i(),Q=n("p"),V=r("The LED model was proposed in "),se=n("a"),Le=r("Longformer: The Long-Document Transformer"),C=r(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),A=i(),ge=n("p"),ae=r("The abstract from the paper is the following:"),Se=i(),ve=n("p"),X=n("em"),je=r(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Ce=i(),O=n("p"),Be=r("Tips:"),te=i(),$=n("ul"),x=n("li"),H=n("a"),Ge=r("LEDForConditionalGeneration"),Qe=r(` is an extension of
`),j=n("a"),He=r("BartForConditionalGeneration"),re=r(" exchanging the traditional "),De=n("em"),f=r("self-attention"),F=r(` layer with
`),de=n("em"),nt=r("Longformer"),st=r("\u2019s "),G=n("em"),at=r("chunked self-attention"),rt=r(" layer. "),Oe=n("a"),J=r("LEDTokenizer"),ie=r(` is an alias of
`),Pe=n("a"),dt=r("BartTokenizer"),le=r("."),it=i(),ce=n("li"),Ue=r("LED works very well on long-range "),Re=n("em"),mi=r("sequence-to-sequence"),_i=r(" tasks where the "),As=n("code"),gi=r("input_ids"),vi=r(` largely exceed a length of
1024 tokens.`),Ti=i(),ze=n("li"),ki=r("LED pads the "),Ns=n("code"),bi=r("input_ids"),wi=r(" to be a multiple of "),Is=n("code"),yi=r("config.attention_window"),Ei=r(` if required. Therefore a small speed-up is
gained, when `),es=n("a"),qi=r("LEDTokenizer"),Li=r(" is used with the "),js=n("code"),Di=r("pad_to_multiple_of"),zi=r(" argument."),Fi=i(),Z=n("li"),$i=r("LED makes use of "),Bs=n("em"),xi=r("global attention"),Mi=r(" by means of the "),Gs=n("code"),Si=r("global_attention_mask"),Ci=r(` (see
`),ts=n("a"),Oi=r("LongformerModel"),Pi=r("). For summarization, it is advised to put "),Qs=n("em"),Ai=r("global attention"),Ni=r(` only on the first
`),Hs=n("code"),Ii=r("<s>"),ji=r(" token. For question answering, it is advised to put "),Us=n("em"),Bi=r("global attention"),Gi=r(" on all tokens of the question."),Qi=i(),lt=n("li"),Hi=r("To fine-tune LED on all 16384, it is necessary to enable "),Rs=n("em"),Ui=r("gradient checkpointing"),Ri=r(` by executing
`),Ws=n("code"),Wi=r("model.gradient_checkpointing_enable()"),Ki=r("."),Vi=i(),wo=n("li"),Xi=r("A notebook showing how to evaluate LED, can be accessed "),yo=n("a"),Ji=r("here"),Zi=r("."),Yi=i(),Eo=n("li"),el=r("A notebook showing how to fine-tune LED, can be accessed "),qo=n("a"),tl=r("here"),ol=r("."),Qr=i(),At=n("p"),nl=r("This model was contributed by "),Lo=n("a"),sl=r("patrickvonplaten"),al=r("."),Hr=i(),ct=n("h2"),Nt=n("a"),Ks=n("span"),m(Do.$$.fragment),rl=i(),Vs=n("span"),dl=r("LEDConfig"),Ur=i(),P=n("div"),m(zo.$$.fragment),il=i(),ht=n("p"),ll=r("This is the configuration class to store the configuration of a "),os=n("a"),cl=r("LEDModel"),hl=r(`. It is used to
instantiate an LED model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LED `),Fo=n("a"),ul=r("allenai/led-base-16384"),pl=r(" architecture."),fl=i(),ut=n("p"),ml=r("Configuration objects inherit from "),ns=n("a"),_l=r("PretrainedConfig"),gl=r(` and can be used to control the model
outputs. Read the documentation from `),ss=n("a"),vl=r("PretrainedConfig"),Tl=r(" for more information."),kl=i(),Xs=n("p"),bl=r("Example:"),wl=i(),m($o.$$.fragment),yl=i(),Js=n("blockquote"),Zs=n("blockquote"),Ys=n("blockquote"),ea=n("p"),El=r("from transformers import LEDModel, LEDConfig"),ql=i(),ta=n("blockquote"),oa=n("blockquote"),xo=n("blockquote"),It=n("h1"),jt=n("a"),na=n("span"),m(Mo.$$.fragment),Ll=i(),sa=n("span"),Dl=r("Initializing a LED allenai/led-base-16384 style configuration"),zl=i(),aa=n("p"),Fl=r("configuration = LEDConfig()"),$l=i(),ra=n("blockquote"),da=n("blockquote"),So=n("blockquote"),Bt=n("h1"),Gt=n("a"),ia=n("span"),m(Co.$$.fragment),xl=i(),la=n("span"),Ml=r("Initializing a model from the allenai/led-base-16384 style configuration"),Sl=i(),ca=n("p"),Cl=r("model = LEDModel(configuration)"),Ol=i(),ha=n("blockquote"),ua=n("blockquote"),Oo=n("blockquote"),Qt=n("h1"),Ht=n("a"),pa=n("span"),m(Po.$$.fragment),Pl=i(),fa=n("span"),Al=r("Accessing the model configuration"),Nl=i(),ma=n("p"),Il=r("configuration = model.config"),Rr=i(),pt=n("h2"),Ut=n("a"),_a=n("span"),m(Ao.$$.fragment),jl=i(),ga=n("span"),Bl=r("LEDTokenizer"),Wr=i(),I=n("div"),m(No.$$.fragment),Gl=i(),va=n("p"),Ql=r("Construct a LED tokenizer."),Hl=i(),Rt=n("p"),as=n("a"),Ul=r("LEDTokenizer"),Rl=r(" is identical to "),rs=n("a"),Wl=r("BartTokenizer"),Kl=r(` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),Vl=i(),Io=n("p"),Xl=r("Refer to superclass "),ds=n("a"),Jl=r("BartTokenizer"),Zl=r(` for usage examples and documentation concerning
parameters.`),Yl=i(),We=n("div"),m(jo.$$.fragment),ec=i(),Ta=n("p"),tc=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),oc=i(),Bo=n("ul"),is=n("li"),nc=r("single sequence: "),ka=n("code"),sc=r("<s> X </s>"),ac=i(),ls=n("li"),rc=r("pair of sequences: "),ba=n("code"),dc=r("<s> A </s></s> B </s>"),ic=i(),Wt=n("div"),m(Go.$$.fragment),lc=i(),Qo=n("p"),cc=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wa=n("code"),hc=r("prepare_for_model"),uc=r(" method."),pc=i(),Kt=n("div"),m(Ho.$$.fragment),fc=i(),ya=n("p"),mc=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),_c=i(),Ea=n("div"),Kr=i(),ft=n("h2"),Vt=n("a"),qa=n("span"),m(Uo.$$.fragment),gc=i(),La=n("span"),vc=r("LEDTokenizerFast"),Vr=i(),Fe=n("div"),m(Ro.$$.fragment),Tc=i(),Wo=n("p"),kc=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Da=n("em"),bc=r("tokenizers"),wc=r(" library)."),yc=i(),Xt=n("p"),cs=n("a"),Ec=r("LEDTokenizerFast"),qc=r(" is identical to "),hs=n("a"),Lc=r("BartTokenizerFast"),Dc=r(` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),zc=i(),Ko=n("p"),Fc=r("Refer to superclass "),us=n("a"),$c=r("BartTokenizerFast"),xc=r(` for usage examples and documentation concerning
parameters.`),Xr=i(),mt=n("h2"),Jt=n("a"),za=n("span"),m(Vo.$$.fragment),Mc=i(),Fa=n("span"),Sc=r("LED specific outputs"),Jr=i(),_t=n("div"),m(Xo.$$.fragment),Cc=i(),$a=n("p"),Oc=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Zr=i(),gt=n("div"),m(Jo.$$.fragment),Pc=i(),xa=n("p"),Ac=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Yr=i(),vt=n("div"),m(Zo.$$.fragment),Nc=i(),Ma=n("p"),Ic=r("Base class for sequence-to-sequence language models outputs."),ed=i(),Tt=n("div"),m(Yo.$$.fragment),jc=i(),Sa=n("p"),Bc=r("Base class for outputs of sequence-to-sequence sentence classification models."),td=i(),kt=n("div"),m(en.$$.fragment),Gc=i(),Ca=n("p"),Qc=r("Base class for outputs of sequence-to-sequence question answering models."),od=i(),bt=n("div"),m(tn.$$.fragment),Hc=i(),Oa=n("p"),Uc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nd=i(),wt=n("div"),m(on.$$.fragment),Rc=i(),Pa=n("p"),Wc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),sd=i(),yt=n("div"),m(nn.$$.fragment),Kc=i(),Aa=n("p"),Vc=r("Base class for sequence-to-sequence language models outputs."),ad=i(),Et=n("h2"),Zt=n("a"),Na=n("span"),m(sn.$$.fragment),Xc=i(),Ia=n("span"),Jc=r("LEDModel"),rd=i(),$e=n("div"),m(an.$$.fragment),Zc=i(),rn=n("p"),Yc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=n("a"),eh=r("PreTrainedModel"),th=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),oh=i(),dn=n("p"),nh=r("This model is also a PyTorch "),ln=n("a"),sh=r("torch.nn.Module"),ah=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),rh=i(),Te=n("div"),m(cn.$$.fragment),dh=i(),qt=n("p"),ih=r("The "),fs=n("a"),lh=r("LEDModel"),ch=r(" forward method, overrides the "),ja=n("code"),hh=r("__call__"),uh=r(" special method."),ph=i(),m(Yt.$$.fragment),fh=i(),Ba=n("p"),mh=r("Example:"),_h=i(),m(hn.$$.fragment),dd=i(),Lt=n("h2"),eo=n("a"),Ga=n("span"),m(un.$$.fragment),gh=i(),Qa=n("span"),vh=r("LEDForConditionalGeneration"),id=i(),xe=n("div"),m(pn.$$.fragment),Th=i(),fn=n("p"),kh=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=n("a"),bh=r("PreTrainedModel"),wh=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),yh=i(),mn=n("p"),Eh=r("This model is also a PyTorch "),_n=n("a"),qh=r("torch.nn.Module"),Lh=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Dh=i(),M=n("div"),m(gn.$$.fragment),zh=i(),Dt=n("p"),Fh=r("The "),_s=n("a"),$h=r("LEDForConditionalGeneration"),xh=r(" forward method, overrides the "),Ha=n("code"),Mh=r("__call__"),Sh=r(" special method."),Ch=i(),m(to.$$.fragment),Oh=i(),Ua=n("p"),Ph=r("Conditional generation example:"),Ah=i(),m(vn.$$.fragment),Nh=i(),Ra=n("p"),Ih=r("Summarization example::"),jh=i(),Wa=n("blockquote"),Ka=n("blockquote"),Va=n("blockquote"),Xa=n("p"),Bh=r(`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration`),Gh=i(),Ja=n("blockquote"),Za=n("blockquote"),Ya=n("blockquote"),er=n("p"),Qh=r(`model = LEDForConditionalGeneration.from_pretrained(\u2018allenai/led-large-16384-arxiv\u2019)
tokenizer = LEDTokenizer.from_pretrained(\u2018allenai/led-large-16384-arxiv\u2019)`),Hh=i(),tr=n("blockquote"),or=n("blockquote"),nr=n("blockquote"),sr=n("p"),Uh=r(`ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
\u2026 results in a wide range of natural language tasks including generative
\u2026 language modeling (Dai et al., 2019; Radford et al., 2019) and discriminative
\u2026 language understanding (Devlin et al., 2019). This success is partly due to
\u2026 the self-attention component which enables the network to capture contextual
\u2026 information from the entire sequence. While powerful, the memory and computational
\u2026 requirements of self-attention grow quadratically with sequence length, making
\u2026 it infeasible (or very expensive) to process long sequences.
\u2026
\u2026 To address this limitation, we present Longformer, a modified Transformer
\u2026 architecture with a self-attention operation that scales linearly with the
\u2026 sequence length, making it versatile for processing long documents (Fig 1). This
\u2026 is an advantage for natural language tasks such as long document classification,
\u2026 question answering (QA), and coreference resolution, where existing approaches
\u2026 partition or shorten the long context into smaller sequences that fall within the
\u2026 typical 512 token limit of BERT-style pretrained models. Such partitioning could
\u2026 potentially result in loss of important cross-partition information, and to
\u2026 mitigate this problem, existing methods often rely on complex architectures to
\u2026 address such interactions. On the other hand, our proposed Longformer is able to
\u2026 build contextual representations of the entire context using multiple layers of
\u2026 attention, reducing the need for task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=\u2018pt\u2019)`),Rh=i(),ar=n("blockquote"),rr=n("blockquote"),Tn=n("blockquote"),oo=n("h1"),no=n("a"),dr=n("span"),m(kn.$$.fragment),Wh=i(),ir=n("span"),Kh=r("Global attention on the first token (cf. Beltagy et al. 2020)"),Vh=i(),lr=n("p"),Xh=r(`global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1`),Jh=i(),cr=n("blockquote"),hr=n("blockquote"),bn=n("blockquote"),so=n("h1"),ao=n("a"),ur=n("span"),m(wn.$$.fragment),Zh=i(),pr=n("span"),Yh=r("Generate Summary"),eu=i(),fr=n("p"),tu=r(`summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask,
\u2026                              num_beams=3, max_length=32, early_stopping=True)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`),ld=i(),zt=n("h2"),ro=n("a"),mr=n("span"),m(yn.$$.fragment),ou=i(),_r=n("span"),nu=r("LEDForSequenceClassification"),cd=i(),he=n("div"),m(En.$$.fragment),su=i(),gr=n("p"),au=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ru=i(),qn=n("p"),du=r("This model inherits from "),gs=n("a"),iu=r("PreTrainedModel"),lu=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),cu=i(),Ln=n("p"),hu=r("This model is also a PyTorch "),Dn=n("a"),uu=r("torch.nn.Module"),pu=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),fu=i(),U=n("div"),m(zn.$$.fragment),mu=i(),Ft=n("p"),_u=r("The "),vs=n("a"),gu=r("LEDForSequenceClassification"),vu=r(" forward method, overrides the "),vr=n("code"),Tu=r("__call__"),ku=r(" special method."),bu=i(),m(io.$$.fragment),wu=i(),Tr=n("p"),yu=r("Example of single-label classification:"),Eu=i(),m(Fn.$$.fragment),qu=i(),kr=n("p"),Lu=r("Example of multi-label classification:"),Du=i(),m($n.$$.fragment),hd=i(),$t=n("h2"),lo=n("a"),br=n("span"),m(xn.$$.fragment),zu=i(),wr=n("span"),Fu=r("LEDForQuestionAnswering"),ud=i(),ue=n("div"),m(Mn.$$.fragment),$u=i(),xt=n("p"),xu=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),yr=n("code"),Mu=r("span start logits"),Su=r(" and "),Er=n("code"),Cu=r("span end logits"),Ou=r(")."),Pu=i(),Sn=n("p"),Au=r("This model inherits from "),Ts=n("a"),Nu=r("PreTrainedModel"),Iu=r(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),ju=i(),Cn=n("p"),Bu=r("This model is also a PyTorch "),On=n("a"),Gu=r("torch.nn.Module"),Qu=r(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Hu=i(),ke=n("div"),m(Pn.$$.fragment),Uu=i(),Mt=n("p"),Ru=r("The "),ks=n("a"),Wu=r("LEDForQuestionAnswering"),Ku=r(" forward method, overrides the "),qr=n("code"),Vu=r("__call__"),Xu=r(" special method."),Ju=i(),m(co.$$.fragment),Zu=i(),Lr=n("p"),Yu=r("Example:"),ep=i(),m(An.$$.fragment),pd=i(),St=n("h2"),ho=n("a"),Dr=n("span"),m(Nn.$$.fragment),tp=i(),zr=n("span"),op=r("TFLEDModel"),fd=i(),pe=n("div"),m(In.$$.fragment),np=i(),jn=n("p"),sp=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bs=n("a"),ap=r("TFPreTrainedModel"),rp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),dp=i(),Bn=n("p"),ip=r("This model is also a "),Gn=n("a"),lp=r("tf.keras.Model"),cp=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hp=i(),m(uo.$$.fragment),up=i(),be=n("div"),m(Qn.$$.fragment),pp=i(),Ct=n("p"),fp=r("The "),ws=n("a"),mp=r("TFLEDModel"),_p=r(" forward method, overrides the "),Fr=n("code"),gp=r("__call__"),vp=r(" special method."),Tp=i(),m(po.$$.fragment),kp=i(),$r=n("p"),bp=r("Example:"),wp=i(),m(Hn.$$.fragment),md=i(),Ot=n("h2"),fo=n("a"),xr=n("span"),m(Un.$$.fragment),yp=i(),Mr=n("span"),Ep=r("TFLEDForConditionalGeneration"),_d=i(),fe=n("div"),m(Rn.$$.fragment),qp=i(),Wn=n("p"),Lp=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=n("a"),Dp=r("TFPreTrainedModel"),zp=r(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Fp=i(),Kn=n("p"),$p=r("This model is also a "),Vn=n("a"),xp=r("tf.keras.Model"),Mp=r(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Sp=i(),m(mo.$$.fragment),Cp=i(),we=n("div"),m(Xn.$$.fragment),Op=i(),Pt=n("p"),Pp=r("The "),Es=n("a"),Ap=r("TFLEDForConditionalGeneration"),Np=r(" forward method, overrides the "),Sr=n("code"),Ip=r("__call__"),jp=r(" special method."),Bp=i(),m(_o.$$.fragment),Gp=i(),Cr=n("p"),Qp=r("Examples:"),Hp=i(),m(Jn.$$.fragment),this.h()},l(o){const u=tg('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),L=l(o),b=s(o,"H1",{class:!0});var Zn=a(b);w=s(Zn,"A",{id:!0,class:!0,href:!0});var Or=a(w);q=s(Or,"SPAN",{});var Pr=a(q);_(E.$$.fragment,Pr),Pr.forEach(t),Or.forEach(t),y=l(Zn),D=s(Zn,"SPAN",{});var Ar=a(D);Ae=d(Ar,"LED"),Ar.forEach(t),Zn.forEach(t),_e=l(o),z=s(o,"H2",{class:!0});var Yn=a(z);ee=s(Yn,"A",{id:!0,class:!0,href:!0});var Nr=a(ee);W=s(Nr,"SPAN",{});var Ir=a(W);_(ne.$$.fragment,Ir),Ir.forEach(t),Nr.forEach(t),Ne=l(Yn),K=s(Yn,"SPAN",{});var jr=a(K);Ie=d(jr,"Overview"),jr.forEach(t),Yn.forEach(t),Me=l(o),Q=s(o,"P",{});var vd=a(Q);V=d(vd,"The LED model was proposed in "),se=s(vd,"A",{href:!0,rel:!0});var Wp=a(se);Le=d(Wp,"Longformer: The Long-Document Transformer"),Wp.forEach(t),C=d(vd,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),vd.forEach(t),A=l(o),ge=s(o,"P",{});var Kp=a(ge);ae=d(Kp,"The abstract from the paper is the following:"),Kp.forEach(t),Se=l(o),ve=s(o,"P",{});var Vp=a(ve);X=s(Vp,"EM",{});var Xp=a(X);je=d(Xp,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Xp.forEach(t),Vp.forEach(t),Ce=l(o),O=s(o,"P",{});var Jp=a(O);Be=d(Jp,"Tips:"),Jp.forEach(t),te=l(o),$=s(o,"UL",{});var ye=a($);x=s(ye,"LI",{});var me=a(x);H=s(me,"A",{href:!0});var Zp=a(H);Ge=d(Zp,"LEDForConditionalGeneration"),Zp.forEach(t),Qe=d(me,` is an extension of
`),j=s(me,"A",{href:!0});var Yp=a(j);He=d(Yp,"BartForConditionalGeneration"),Yp.forEach(t),re=d(me," exchanging the traditional "),De=s(me,"EM",{});var ef=a(De);f=d(ef,"self-attention"),ef.forEach(t),F=d(me,` layer with
`),de=s(me,"EM",{});var tf=a(de);nt=d(tf,"Longformer"),tf.forEach(t),st=d(me,"\u2019s "),G=s(me,"EM",{});var of=a(G);at=d(of,"chunked self-attention"),of.forEach(t),rt=d(me," layer. "),Oe=s(me,"A",{href:!0});var nf=a(Oe);J=d(nf,"LEDTokenizer"),nf.forEach(t),ie=d(me,` is an alias of
`),Pe=s(me,"A",{href:!0});var sf=a(Pe);dt=d(sf,"BartTokenizer"),sf.forEach(t),le=d(me,"."),me.forEach(t),it=l(ye),ce=s(ye,"LI",{});var qs=a(ce);Ue=d(qs,"LED works very well on long-range "),Re=s(qs,"EM",{});var af=a(Re);mi=d(af,"sequence-to-sequence"),af.forEach(t),_i=d(qs," tasks where the "),As=s(qs,"CODE",{});var rf=a(As);gi=d(rf,"input_ids"),rf.forEach(t),vi=d(qs,` largely exceed a length of
1024 tokens.`),qs.forEach(t),Ti=l(ye),ze=s(ye,"LI",{});var Ke=a(ze);ki=d(Ke,"LED pads the "),Ns=s(Ke,"CODE",{});var df=a(Ns);bi=d(df,"input_ids"),df.forEach(t),wi=d(Ke," to be a multiple of "),Is=s(Ke,"CODE",{});var lf=a(Is);yi=d(lf,"config.attention_window"),lf.forEach(t),Ei=d(Ke,` if required. Therefore a small speed-up is
gained, when `),es=s(Ke,"A",{href:!0});var cf=a(es);qi=d(cf,"LEDTokenizer"),cf.forEach(t),Li=d(Ke," is used with the "),js=s(Ke,"CODE",{});var hf=a(js);Di=d(hf,"pad_to_multiple_of"),hf.forEach(t),zi=d(Ke," argument."),Ke.forEach(t),Fi=l(ye),Z=s(ye,"LI",{});var Ee=a(Z);$i=d(Ee,"LED makes use of "),Bs=s(Ee,"EM",{});var uf=a(Bs);xi=d(uf,"global attention"),uf.forEach(t),Mi=d(Ee," by means of the "),Gs=s(Ee,"CODE",{});var pf=a(Gs);Si=d(pf,"global_attention_mask"),pf.forEach(t),Ci=d(Ee,` (see
`),ts=s(Ee,"A",{href:!0});var ff=a(ts);Oi=d(ff,"LongformerModel"),ff.forEach(t),Pi=d(Ee,"). For summarization, it is advised to put "),Qs=s(Ee,"EM",{});var mf=a(Qs);Ai=d(mf,"global attention"),mf.forEach(t),Ni=d(Ee,` only on the first
`),Hs=s(Ee,"CODE",{});var _f=a(Hs);Ii=d(_f,"<s>"),_f.forEach(t),ji=d(Ee," token. For question answering, it is advised to put "),Us=s(Ee,"EM",{});var gf=a(Us);Bi=d(gf,"global attention"),gf.forEach(t),Gi=d(Ee," on all tokens of the question."),Ee.forEach(t),Qi=l(ye),lt=s(ye,"LI",{});var Ls=a(lt);Hi=d(Ls,"To fine-tune LED on all 16384, it is necessary to enable "),Rs=s(Ls,"EM",{});var vf=a(Rs);Ui=d(vf,"gradient checkpointing"),vf.forEach(t),Ri=d(Ls,` by executing
`),Ws=s(Ls,"CODE",{});var Tf=a(Ws);Wi=d(Tf,"model.gradient_checkpointing_enable()"),Tf.forEach(t),Ki=d(Ls,"."),Ls.forEach(t),Vi=l(ye),wo=s(ye,"LI",{});var Td=a(wo);Xi=d(Td,"A notebook showing how to evaluate LED, can be accessed "),yo=s(Td,"A",{href:!0,rel:!0});var kf=a(yo);Ji=d(kf,"here"),kf.forEach(t),Zi=d(Td,"."),Td.forEach(t),Yi=l(ye),Eo=s(ye,"LI",{});var kd=a(Eo);el=d(kd,"A notebook showing how to fine-tune LED, can be accessed "),qo=s(kd,"A",{href:!0,rel:!0});var bf=a(qo);tl=d(bf,"here"),bf.forEach(t),ol=d(kd,"."),kd.forEach(t),ye.forEach(t),Qr=l(o),At=s(o,"P",{});var bd=a(At);nl=d(bd,"This model was contributed by "),Lo=s(bd,"A",{href:!0,rel:!0});var wf=a(Lo);sl=d(wf,"patrickvonplaten"),wf.forEach(t),al=d(bd,"."),bd.forEach(t),Hr=l(o),ct=s(o,"H2",{class:!0});var wd=a(ct);Nt=s(wd,"A",{id:!0,class:!0,href:!0});var yf=a(Nt);Ks=s(yf,"SPAN",{});var Ef=a(Ks);_(Do.$$.fragment,Ef),Ef.forEach(t),yf.forEach(t),rl=l(wd),Vs=s(wd,"SPAN",{});var qf=a(Vs);dl=d(qf,"LEDConfig"),qf.forEach(t),wd.forEach(t),Ur=l(o),P=s(o,"DIV",{class:!0});var R=a(P);_(zo.$$.fragment,R),il=l(R),ht=s(R,"P",{});var Ds=a(ht);ll=d(Ds,"This is the configuration class to store the configuration of a "),os=s(Ds,"A",{href:!0});var Lf=a(os);cl=d(Lf,"LEDModel"),Lf.forEach(t),hl=d(Ds,`. It is used to
instantiate an LED model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LED `),Fo=s(Ds,"A",{href:!0,rel:!0});var Df=a(Fo);ul=d(Df,"allenai/led-base-16384"),Df.forEach(t),pl=d(Ds," architecture."),Ds.forEach(t),fl=l(R),ut=s(R,"P",{});var zs=a(ut);ml=d(zs,"Configuration objects inherit from "),ns=s(zs,"A",{href:!0});var zf=a(ns);_l=d(zf,"PretrainedConfig"),zf.forEach(t),gl=d(zs,` and can be used to control the model
outputs. Read the documentation from `),ss=s(zs,"A",{href:!0});var Ff=a(ss);vl=d(Ff,"PretrainedConfig"),Ff.forEach(t),Tl=d(zs," for more information."),zs.forEach(t),kl=l(R),Xs=s(R,"P",{});var $f=a(Xs);bl=d($f,"Example:"),$f.forEach(t),wl=l(R),_($o.$$.fragment,R),yl=l(R),Js=s(R,"BLOCKQUOTE",{});var xf=a(Js);Zs=s(xf,"BLOCKQUOTE",{});var Mf=a(Zs);Ys=s(Mf,"BLOCKQUOTE",{});var Sf=a(Ys);ea=s(Sf,"P",{});var Cf=a(ea);El=d(Cf,"from transformers import LEDModel, LEDConfig"),Cf.forEach(t),Sf.forEach(t),Mf.forEach(t),xf.forEach(t),ql=l(R),ta=s(R,"BLOCKQUOTE",{});var Of=a(ta);oa=s(Of,"BLOCKQUOTE",{});var Pf=a(oa);xo=s(Pf,"BLOCKQUOTE",{});var yd=a(xo);It=s(yd,"H1",{class:!0});var Ed=a(It);jt=s(Ed,"A",{id:!0,class:!0,href:!0});var Af=a(jt);na=s(Af,"SPAN",{});var Nf=a(na);_(Mo.$$.fragment,Nf),Nf.forEach(t),Af.forEach(t),Ll=l(Ed),sa=s(Ed,"SPAN",{});var If=a(sa);Dl=d(If,"Initializing a LED allenai/led-base-16384 style configuration"),If.forEach(t),Ed.forEach(t),zl=l(yd),aa=s(yd,"P",{});var jf=a(aa);Fl=d(jf,"configuration = LEDConfig()"),jf.forEach(t),yd.forEach(t),Pf.forEach(t),Of.forEach(t),$l=l(R),ra=s(R,"BLOCKQUOTE",{});var Bf=a(ra);da=s(Bf,"BLOCKQUOTE",{});var Gf=a(da);So=s(Gf,"BLOCKQUOTE",{});var qd=a(So);Bt=s(qd,"H1",{class:!0});var Ld=a(Bt);Gt=s(Ld,"A",{id:!0,class:!0,href:!0});var Qf=a(Gt);ia=s(Qf,"SPAN",{});var Hf=a(ia);_(Co.$$.fragment,Hf),Hf.forEach(t),Qf.forEach(t),xl=l(Ld),la=s(Ld,"SPAN",{});var Uf=a(la);Ml=d(Uf,"Initializing a model from the allenai/led-base-16384 style configuration"),Uf.forEach(t),Ld.forEach(t),Sl=l(qd),ca=s(qd,"P",{});var Rf=a(ca);Cl=d(Rf,"model = LEDModel(configuration)"),Rf.forEach(t),qd.forEach(t),Gf.forEach(t),Bf.forEach(t),Ol=l(R),ha=s(R,"BLOCKQUOTE",{});var Wf=a(ha);ua=s(Wf,"BLOCKQUOTE",{});var Kf=a(ua);Oo=s(Kf,"BLOCKQUOTE",{});var Dd=a(Oo);Qt=s(Dd,"H1",{class:!0});var zd=a(Qt);Ht=s(zd,"A",{id:!0,class:!0,href:!0});var Vf=a(Ht);pa=s(Vf,"SPAN",{});var Xf=a(pa);_(Po.$$.fragment,Xf),Xf.forEach(t),Vf.forEach(t),Pl=l(zd),fa=s(zd,"SPAN",{});var Jf=a(fa);Al=d(Jf,"Accessing the model configuration"),Jf.forEach(t),zd.forEach(t),Nl=l(Dd),ma=s(Dd,"P",{});var Zf=a(ma);Il=d(Zf,"configuration = model.config"),Zf.forEach(t),Dd.forEach(t),Kf.forEach(t),Wf.forEach(t),R.forEach(t),Rr=l(o),pt=s(o,"H2",{class:!0});var Fd=a(pt);Ut=s(Fd,"A",{id:!0,class:!0,href:!0});var Yf=a(Ut);_a=s(Yf,"SPAN",{});var em=a(_a);_(Ao.$$.fragment,em),em.forEach(t),Yf.forEach(t),jl=l(Fd),ga=s(Fd,"SPAN",{});var tm=a(ga);Bl=d(tm,"LEDTokenizer"),tm.forEach(t),Fd.forEach(t),Wr=l(o),I=s(o,"DIV",{class:!0});var oe=a(I);_(No.$$.fragment,oe),Gl=l(oe),va=s(oe,"P",{});var om=a(va);Ql=d(om,"Construct a LED tokenizer."),om.forEach(t),Hl=l(oe),Rt=s(oe,"P",{});var Br=a(Rt);as=s(Br,"A",{href:!0});var nm=a(as);Ul=d(nm,"LEDTokenizer"),nm.forEach(t),Rl=d(Br," is identical to "),rs=s(Br,"A",{href:!0});var sm=a(rs);Wl=d(sm,"BartTokenizer"),sm.forEach(t),Kl=d(Br,` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),Br.forEach(t),Vl=l(oe),Io=s(oe,"P",{});var $d=a(Io);Xl=d($d,"Refer to superclass "),ds=s($d,"A",{href:!0});var am=a(ds);Jl=d(am,"BartTokenizer"),am.forEach(t),Zl=d($d,` for usage examples and documentation concerning
parameters.`),$d.forEach(t),Yl=l(oe),We=s(oe,"DIV",{class:!0});var Fs=a(We);_(jo.$$.fragment,Fs),ec=l(Fs),Ta=s(Fs,"P",{});var rm=a(Ta);tc=d(rm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),rm.forEach(t),oc=l(Fs),Bo=s(Fs,"UL",{});var xd=a(Bo);is=s(xd,"LI",{});var Up=a(is);nc=d(Up,"single sequence: "),ka=s(Up,"CODE",{});var dm=a(ka);sc=d(dm,"<s> X </s>"),dm.forEach(t),Up.forEach(t),ac=l(xd),ls=s(xd,"LI",{});var Rp=a(ls);rc=d(Rp,"pair of sequences: "),ba=s(Rp,"CODE",{});var im=a(ba);dc=d(im,"<s> A </s></s> B </s>"),im.forEach(t),Rp.forEach(t),xd.forEach(t),Fs.forEach(t),ic=l(oe),Wt=s(oe,"DIV",{class:!0});var Md=a(Wt);_(Go.$$.fragment,Md),lc=l(Md),Qo=s(Md,"P",{});var Sd=a(Qo);cc=d(Sd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wa=s(Sd,"CODE",{});var lm=a(wa);hc=d(lm,"prepare_for_model"),lm.forEach(t),uc=d(Sd," method."),Sd.forEach(t),Md.forEach(t),pc=l(oe),Kt=s(oe,"DIV",{class:!0});var Cd=a(Kt);_(Ho.$$.fragment,Cd),fc=l(Cd),ya=s(Cd,"P",{});var cm=a(ya);mc=d(cm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),cm.forEach(t),Cd.forEach(t),_c=l(oe),Ea=s(oe,"DIV",{class:!0}),a(Ea).forEach(t),oe.forEach(t),Kr=l(o),ft=s(o,"H2",{class:!0});var Od=a(ft);Vt=s(Od,"A",{id:!0,class:!0,href:!0});var hm=a(Vt);qa=s(hm,"SPAN",{});var um=a(qa);_(Uo.$$.fragment,um),um.forEach(t),hm.forEach(t),gc=l(Od),La=s(Od,"SPAN",{});var pm=a(La);vc=d(pm,"LEDTokenizerFast"),pm.forEach(t),Od.forEach(t),Vr=l(o),Fe=s(o,"DIV",{class:!0});var go=a(Fe);_(Ro.$$.fragment,go),Tc=l(go),Wo=s(go,"P",{});var Pd=a(Wo);kc=d(Pd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Da=s(Pd,"EM",{});var fm=a(Da);bc=d(fm,"tokenizers"),fm.forEach(t),wc=d(Pd," library)."),Pd.forEach(t),yc=l(go),Xt=s(go,"P",{});var Gr=a(Xt);cs=s(Gr,"A",{href:!0});var mm=a(cs);Ec=d(mm,"LEDTokenizerFast"),mm.forEach(t),qc=d(Gr," is identical to "),hs=s(Gr,"A",{href:!0});var _m=a(hs);Lc=d(_m,"BartTokenizerFast"),_m.forEach(t),Dc=d(Gr,` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),Gr.forEach(t),zc=l(go),Ko=s(go,"P",{});var Ad=a(Ko);Fc=d(Ad,"Refer to superclass "),us=s(Ad,"A",{href:!0});var gm=a(us);$c=d(gm,"BartTokenizerFast"),gm.forEach(t),xc=d(Ad,` for usage examples and documentation concerning
parameters.`),Ad.forEach(t),go.forEach(t),Xr=l(o),mt=s(o,"H2",{class:!0});var Nd=a(mt);Jt=s(Nd,"A",{id:!0,class:!0,href:!0});var vm=a(Jt);za=s(vm,"SPAN",{});var Tm=a(za);_(Vo.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),Mc=l(Nd),Fa=s(Nd,"SPAN",{});var km=a(Fa);Sc=d(km,"LED specific outputs"),km.forEach(t),Nd.forEach(t),Jr=l(o),_t=s(o,"DIV",{class:!0});var Id=a(_t);_(Xo.$$.fragment,Id),Cc=l(Id),$a=s(Id,"P",{});var bm=a($a);Oc=d(bm,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),bm.forEach(t),Id.forEach(t),Zr=l(o),gt=s(o,"DIV",{class:!0});var jd=a(gt);_(Jo.$$.fragment,jd),Pc=l(jd),xa=s(jd,"P",{});var wm=a(xa);Ac=d(wm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),wm.forEach(t),jd.forEach(t),Yr=l(o),vt=s(o,"DIV",{class:!0});var Bd=a(vt);_(Zo.$$.fragment,Bd),Nc=l(Bd),Ma=s(Bd,"P",{});var ym=a(Ma);Ic=d(ym,"Base class for sequence-to-sequence language models outputs."),ym.forEach(t),Bd.forEach(t),ed=l(o),Tt=s(o,"DIV",{class:!0});var Gd=a(Tt);_(Yo.$$.fragment,Gd),jc=l(Gd),Sa=s(Gd,"P",{});var Em=a(Sa);Bc=d(Em,"Base class for outputs of sequence-to-sequence sentence classification models."),Em.forEach(t),Gd.forEach(t),td=l(o),kt=s(o,"DIV",{class:!0});var Qd=a(kt);_(en.$$.fragment,Qd),Gc=l(Qd),Ca=s(Qd,"P",{});var qm=a(Ca);Qc=d(qm,"Base class for outputs of sequence-to-sequence question answering models."),qm.forEach(t),Qd.forEach(t),od=l(o),bt=s(o,"DIV",{class:!0});var Hd=a(bt);_(tn.$$.fragment,Hd),Hc=l(Hd),Oa=s(Hd,"P",{});var Lm=a(Oa);Uc=d(Lm,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Lm.forEach(t),Hd.forEach(t),nd=l(o),wt=s(o,"DIV",{class:!0});var Ud=a(wt);_(on.$$.fragment,Ud),Rc=l(Ud),Pa=s(Ud,"P",{});var Dm=a(Pa);Wc=d(Dm,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dm.forEach(t),Ud.forEach(t),sd=l(o),yt=s(o,"DIV",{class:!0});var Rd=a(yt);_(nn.$$.fragment,Rd),Kc=l(Rd),Aa=s(Rd,"P",{});var zm=a(Aa);Vc=d(zm,"Base class for sequence-to-sequence language models outputs."),zm.forEach(t),Rd.forEach(t),ad=l(o),Et=s(o,"H2",{class:!0});var Wd=a(Et);Zt=s(Wd,"A",{id:!0,class:!0,href:!0});var Fm=a(Zt);Na=s(Fm,"SPAN",{});var $m=a(Na);_(sn.$$.fragment,$m),$m.forEach(t),Fm.forEach(t),Xc=l(Wd),Ia=s(Wd,"SPAN",{});var xm=a(Ia);Jc=d(xm,"LEDModel"),xm.forEach(t),Wd.forEach(t),rd=l(o),$e=s(o,"DIV",{class:!0});var vo=a($e);_(an.$$.fragment,vo),Zc=l(vo),rn=s(vo,"P",{});var Kd=a(rn);Yc=d(Kd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ps=s(Kd,"A",{href:!0});var Mm=a(ps);eh=d(Mm,"PreTrainedModel"),Mm.forEach(t),th=d(Kd,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Kd.forEach(t),oh=l(vo),dn=s(vo,"P",{});var Vd=a(dn);nh=d(Vd,"This model is also a PyTorch "),ln=s(Vd,"A",{href:!0,rel:!0});var Sm=a(ln);sh=d(Sm,"torch.nn.Module"),Sm.forEach(t),ah=d(Vd,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Vd.forEach(t),rh=l(vo),Te=s(vo,"DIV",{class:!0});var Ve=a(Te);_(cn.$$.fragment,Ve),dh=l(Ve),qt=s(Ve,"P",{});var $s=a(qt);ih=d($s,"The "),fs=s($s,"A",{href:!0});var Cm=a(fs);lh=d(Cm,"LEDModel"),Cm.forEach(t),ch=d($s," forward method, overrides the "),ja=s($s,"CODE",{});var Om=a(ja);hh=d(Om,"__call__"),Om.forEach(t),uh=d($s," special method."),$s.forEach(t),ph=l(Ve),_(Yt.$$.fragment,Ve),fh=l(Ve),Ba=s(Ve,"P",{});var Pm=a(Ba);mh=d(Pm,"Example:"),Pm.forEach(t),_h=l(Ve),_(hn.$$.fragment,Ve),Ve.forEach(t),vo.forEach(t),dd=l(o),Lt=s(o,"H2",{class:!0});var Xd=a(Lt);eo=s(Xd,"A",{id:!0,class:!0,href:!0});var Am=a(eo);Ga=s(Am,"SPAN",{});var Nm=a(Ga);_(un.$$.fragment,Nm),Nm.forEach(t),Am.forEach(t),gh=l(Xd),Qa=s(Xd,"SPAN",{});var Im=a(Qa);vh=d(Im,"LEDForConditionalGeneration"),Im.forEach(t),Xd.forEach(t),id=l(o),xe=s(o,"DIV",{class:!0});var To=a(xe);_(pn.$$.fragment,To),Th=l(To),fn=s(To,"P",{});var Jd=a(fn);kh=d(Jd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ms=s(Jd,"A",{href:!0});var jm=a(ms);bh=d(jm,"PreTrainedModel"),jm.forEach(t),wh=d(Jd,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Jd.forEach(t),yh=l(To),mn=s(To,"P",{});var Zd=a(mn);Eh=d(Zd,"This model is also a PyTorch "),_n=s(Zd,"A",{href:!0,rel:!0});var Bm=a(_n);qh=d(Bm,"torch.nn.Module"),Bm.forEach(t),Lh=d(Zd,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Zd.forEach(t),Dh=l(To),M=s(To,"DIV",{class:!0});var N=a(M);_(gn.$$.fragment,N),zh=l(N),Dt=s(N,"P",{});var xs=a(Dt);Fh=d(xs,"The "),_s=s(xs,"A",{href:!0});var Gm=a(_s);$h=d(Gm,"LEDForConditionalGeneration"),Gm.forEach(t),xh=d(xs," forward method, overrides the "),Ha=s(xs,"CODE",{});var Qm=a(Ha);Mh=d(Qm,"__call__"),Qm.forEach(t),Sh=d(xs," special method."),xs.forEach(t),Ch=l(N),_(to.$$.fragment,N),Oh=l(N),Ua=s(N,"P",{});var Hm=a(Ua);Ph=d(Hm,"Conditional generation example:"),Hm.forEach(t),Ah=l(N),_(vn.$$.fragment,N),Nh=l(N),Ra=s(N,"P",{});var Um=a(Ra);Ih=d(Um,"Summarization example::"),Um.forEach(t),jh=l(N),Wa=s(N,"BLOCKQUOTE",{});var Rm=a(Wa);Ka=s(Rm,"BLOCKQUOTE",{});var Wm=a(Ka);Va=s(Wm,"BLOCKQUOTE",{});var Km=a(Va);Xa=s(Km,"P",{});var Vm=a(Xa);Bh=d(Vm,`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration`),Vm.forEach(t),Km.forEach(t),Wm.forEach(t),Rm.forEach(t),Gh=l(N),Ja=s(N,"BLOCKQUOTE",{});var Xm=a(Ja);Za=s(Xm,"BLOCKQUOTE",{});var Jm=a(Za);Ya=s(Jm,"BLOCKQUOTE",{});var Zm=a(Ya);er=s(Zm,"P",{});var Ym=a(er);Qh=d(Ym,`model = LEDForConditionalGeneration.from_pretrained(\u2018allenai/led-large-16384-arxiv\u2019)
tokenizer = LEDTokenizer.from_pretrained(\u2018allenai/led-large-16384-arxiv\u2019)`),Ym.forEach(t),Zm.forEach(t),Jm.forEach(t),Xm.forEach(t),Hh=l(N),tr=s(N,"BLOCKQUOTE",{});var e_=a(tr);or=s(e_,"BLOCKQUOTE",{});var t_=a(or);nr=s(t_,"BLOCKQUOTE",{});var o_=a(nr);sr=s(o_,"P",{});var n_=a(sr);Uh=d(n_,`ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
\u2026 results in a wide range of natural language tasks including generative
\u2026 language modeling (Dai et al., 2019; Radford et al., 2019) and discriminative
\u2026 language understanding (Devlin et al., 2019). This success is partly due to
\u2026 the self-attention component which enables the network to capture contextual
\u2026 information from the entire sequence. While powerful, the memory and computational
\u2026 requirements of self-attention grow quadratically with sequence length, making
\u2026 it infeasible (or very expensive) to process long sequences.
\u2026
\u2026 To address this limitation, we present Longformer, a modified Transformer
\u2026 architecture with a self-attention operation that scales linearly with the
\u2026 sequence length, making it versatile for processing long documents (Fig 1). This
\u2026 is an advantage for natural language tasks such as long document classification,
\u2026 question answering (QA), and coreference resolution, where existing approaches
\u2026 partition or shorten the long context into smaller sequences that fall within the
\u2026 typical 512 token limit of BERT-style pretrained models. Such partitioning could
\u2026 potentially result in loss of important cross-partition information, and to
\u2026 mitigate this problem, existing methods often rely on complex architectures to
\u2026 address such interactions. On the other hand, our proposed Longformer is able to
\u2026 build contextual representations of the entire context using multiple layers of
\u2026 attention, reducing the need for task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=\u2018pt\u2019)`),n_.forEach(t),o_.forEach(t),t_.forEach(t),e_.forEach(t),Rh=l(N),ar=s(N,"BLOCKQUOTE",{});var s_=a(ar);rr=s(s_,"BLOCKQUOTE",{});var a_=a(rr);Tn=s(a_,"BLOCKQUOTE",{});var Yd=a(Tn);oo=s(Yd,"H1",{class:!0});var ei=a(oo);no=s(ei,"A",{id:!0,class:!0,href:!0});var r_=a(no);dr=s(r_,"SPAN",{});var d_=a(dr);_(kn.$$.fragment,d_),d_.forEach(t),r_.forEach(t),Wh=l(ei),ir=s(ei,"SPAN",{});var i_=a(ir);Kh=d(i_,"Global attention on the first token (cf. Beltagy et al. 2020)"),i_.forEach(t),ei.forEach(t),Vh=l(Yd),lr=s(Yd,"P",{});var l_=a(lr);Xh=d(l_,`global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1`),l_.forEach(t),Yd.forEach(t),a_.forEach(t),s_.forEach(t),Jh=l(N),cr=s(N,"BLOCKQUOTE",{});var c_=a(cr);hr=s(c_,"BLOCKQUOTE",{});var h_=a(hr);bn=s(h_,"BLOCKQUOTE",{});var ti=a(bn);so=s(ti,"H1",{class:!0});var oi=a(so);ao=s(oi,"A",{id:!0,class:!0,href:!0});var u_=a(ao);ur=s(u_,"SPAN",{});var p_=a(ur);_(wn.$$.fragment,p_),p_.forEach(t),u_.forEach(t),Zh=l(oi),pr=s(oi,"SPAN",{});var f_=a(pr);Yh=d(f_,"Generate Summary"),f_.forEach(t),oi.forEach(t),eu=l(ti),fr=s(ti,"P",{});var m_=a(fr);tu=d(m_,`summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask,
\u2026                              num_beams=3, max_length=32, early_stopping=True)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True))`),m_.forEach(t),ti.forEach(t),h_.forEach(t),c_.forEach(t),N.forEach(t),To.forEach(t),ld=l(o),zt=s(o,"H2",{class:!0});var ni=a(zt);ro=s(ni,"A",{id:!0,class:!0,href:!0});var __=a(ro);mr=s(__,"SPAN",{});var g_=a(mr);_(yn.$$.fragment,g_),g_.forEach(t),__.forEach(t),ou=l(ni),_r=s(ni,"SPAN",{});var v_=a(_r);nu=d(v_,"LEDForSequenceClassification"),v_.forEach(t),ni.forEach(t),cd=l(o),he=s(o,"DIV",{class:!0});var Xe=a(he);_(En.$$.fragment,Xe),su=l(Xe),gr=s(Xe,"P",{});var T_=a(gr);au=d(T_,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),T_.forEach(t),ru=l(Xe),qn=s(Xe,"P",{});var si=a(qn);du=d(si,"This model inherits from "),gs=s(si,"A",{href:!0});var k_=a(gs);iu=d(k_,"PreTrainedModel"),k_.forEach(t),lu=d(si,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),si.forEach(t),cu=l(Xe),Ln=s(Xe,"P",{});var ai=a(Ln);hu=d(ai,"This model is also a PyTorch "),Dn=s(ai,"A",{href:!0,rel:!0});var b_=a(Dn);uu=d(b_,"torch.nn.Module"),b_.forEach(t),pu=d(ai,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ai.forEach(t),fu=l(Xe),U=s(Xe,"DIV",{class:!0});var qe=a(U);_(zn.$$.fragment,qe),mu=l(qe),Ft=s(qe,"P",{});var Ms=a(Ft);_u=d(Ms,"The "),vs=s(Ms,"A",{href:!0});var w_=a(vs);gu=d(w_,"LEDForSequenceClassification"),w_.forEach(t),vu=d(Ms," forward method, overrides the "),vr=s(Ms,"CODE",{});var y_=a(vr);Tu=d(y_,"__call__"),y_.forEach(t),ku=d(Ms," special method."),Ms.forEach(t),bu=l(qe),_(io.$$.fragment,qe),wu=l(qe),Tr=s(qe,"P",{});var E_=a(Tr);yu=d(E_,"Example of single-label classification:"),E_.forEach(t),Eu=l(qe),_(Fn.$$.fragment,qe),qu=l(qe),kr=s(qe,"P",{});var q_=a(kr);Lu=d(q_,"Example of multi-label classification:"),q_.forEach(t),Du=l(qe),_($n.$$.fragment,qe),qe.forEach(t),Xe.forEach(t),hd=l(o),$t=s(o,"H2",{class:!0});var ri=a($t);lo=s(ri,"A",{id:!0,class:!0,href:!0});var L_=a(lo);br=s(L_,"SPAN",{});var D_=a(br);_(xn.$$.fragment,D_),D_.forEach(t),L_.forEach(t),zu=l(ri),wr=s(ri,"SPAN",{});var z_=a(wr);Fu=d(z_,"LEDForQuestionAnswering"),z_.forEach(t),ri.forEach(t),ud=l(o),ue=s(o,"DIV",{class:!0});var Je=a(ue);_(Mn.$$.fragment,Je),$u=l(Je),xt=s(Je,"P",{});var Ss=a(xt);xu=d(Ss,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),yr=s(Ss,"CODE",{});var F_=a(yr);Mu=d(F_,"span start logits"),F_.forEach(t),Su=d(Ss," and "),Er=s(Ss,"CODE",{});var $_=a(Er);Cu=d($_,"span end logits"),$_.forEach(t),Ou=d(Ss,")."),Ss.forEach(t),Pu=l(Je),Sn=s(Je,"P",{});var di=a(Sn);Au=d(di,"This model inherits from "),Ts=s(di,"A",{href:!0});var x_=a(Ts);Nu=d(x_,"PreTrainedModel"),x_.forEach(t),Iu=d(di,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),di.forEach(t),ju=l(Je),Cn=s(Je,"P",{});var ii=a(Cn);Bu=d(ii,"This model is also a PyTorch "),On=s(ii,"A",{href:!0,rel:!0});var M_=a(On);Gu=d(M_,"torch.nn.Module"),M_.forEach(t),Qu=d(ii,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ii.forEach(t),Hu=l(Je),ke=s(Je,"DIV",{class:!0});var Ze=a(ke);_(Pn.$$.fragment,Ze),Uu=l(Ze),Mt=s(Ze,"P",{});var Cs=a(Mt);Ru=d(Cs,"The "),ks=s(Cs,"A",{href:!0});var S_=a(ks);Wu=d(S_,"LEDForQuestionAnswering"),S_.forEach(t),Ku=d(Cs," forward method, overrides the "),qr=s(Cs,"CODE",{});var C_=a(qr);Vu=d(C_,"__call__"),C_.forEach(t),Xu=d(Cs," special method."),Cs.forEach(t),Ju=l(Ze),_(co.$$.fragment,Ze),Zu=l(Ze),Lr=s(Ze,"P",{});var O_=a(Lr);Yu=d(O_,"Example:"),O_.forEach(t),ep=l(Ze),_(An.$$.fragment,Ze),Ze.forEach(t),Je.forEach(t),pd=l(o),St=s(o,"H2",{class:!0});var li=a(St);ho=s(li,"A",{id:!0,class:!0,href:!0});var P_=a(ho);Dr=s(P_,"SPAN",{});var A_=a(Dr);_(Nn.$$.fragment,A_),A_.forEach(t),P_.forEach(t),tp=l(li),zr=s(li,"SPAN",{});var N_=a(zr);op=d(N_,"TFLEDModel"),N_.forEach(t),li.forEach(t),fd=l(o),pe=s(o,"DIV",{class:!0});var Ye=a(pe);_(In.$$.fragment,Ye),np=l(Ye),jn=s(Ye,"P",{});var ci=a(jn);sp=d(ci,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bs=s(ci,"A",{href:!0});var I_=a(bs);ap=d(I_,"TFPreTrainedModel"),I_.forEach(t),rp=d(ci,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ci.forEach(t),dp=l(Ye),Bn=s(Ye,"P",{});var hi=a(Bn);ip=d(hi,"This model is also a "),Gn=s(hi,"A",{href:!0,rel:!0});var j_=a(Gn);lp=d(j_,"tf.keras.Model"),j_.forEach(t),cp=d(hi,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hi.forEach(t),hp=l(Ye),_(uo.$$.fragment,Ye),up=l(Ye),be=s(Ye,"DIV",{class:!0});var et=a(be);_(Qn.$$.fragment,et),pp=l(et),Ct=s(et,"P",{});var Os=a(Ct);fp=d(Os,"The "),ws=s(Os,"A",{href:!0});var B_=a(ws);mp=d(B_,"TFLEDModel"),B_.forEach(t),_p=d(Os," forward method, overrides the "),Fr=s(Os,"CODE",{});var G_=a(Fr);gp=d(G_,"__call__"),G_.forEach(t),vp=d(Os," special method."),Os.forEach(t),Tp=l(et),_(po.$$.fragment,et),kp=l(et),$r=s(et,"P",{});var Q_=a($r);bp=d(Q_,"Example:"),Q_.forEach(t),wp=l(et),_(Hn.$$.fragment,et),et.forEach(t),Ye.forEach(t),md=l(o),Ot=s(o,"H2",{class:!0});var ui=a(Ot);fo=s(ui,"A",{id:!0,class:!0,href:!0});var H_=a(fo);xr=s(H_,"SPAN",{});var U_=a(xr);_(Un.$$.fragment,U_),U_.forEach(t),H_.forEach(t),yp=l(ui),Mr=s(ui,"SPAN",{});var R_=a(Mr);Ep=d(R_,"TFLEDForConditionalGeneration"),R_.forEach(t),ui.forEach(t),_d=l(o),fe=s(o,"DIV",{class:!0});var tt=a(fe);_(Rn.$$.fragment,tt),qp=l(tt),Wn=s(tt,"P",{});var pi=a(Wn);Lp=d(pi,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),ys=s(pi,"A",{href:!0});var W_=a(ys);Dp=d(W_,"TFPreTrainedModel"),W_.forEach(t),zp=d(pi,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pi.forEach(t),Fp=l(tt),Kn=s(tt,"P",{});var fi=a(Kn);$p=d(fi,"This model is also a "),Vn=s(fi,"A",{href:!0,rel:!0});var K_=a(Vn);xp=d(K_,"tf.keras.Model"),K_.forEach(t),Mp=d(fi,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),fi.forEach(t),Sp=l(tt),_(mo.$$.fragment,tt),Cp=l(tt),we=s(tt,"DIV",{class:!0});var ot=a(we);_(Xn.$$.fragment,ot),Op=l(ot),Pt=s(ot,"P",{});var Ps=a(Pt);Pp=d(Ps,"The "),Es=s(Ps,"A",{href:!0});var V_=a(Es);Ap=d(V_,"TFLEDForConditionalGeneration"),V_.forEach(t),Np=d(Ps," forward method, overrides the "),Sr=s(Ps,"CODE",{});var X_=a(Sr);Ip=d(X_,"__call__"),X_.forEach(t),jp=d(Ps," special method."),Ps.forEach(t),Bp=l(ot),_(_o.$$.fragment,ot),Gp=l(ot),Cr=s(ot,"P",{});var J_=a(Cr);Qp=d(J_,"Examples:"),J_.forEach(t),Hp=l(ot),_(Jn.$$.fragment,ot),ot.forEach(t),tt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(hg)),c(w,"id","led"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#led"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(z,"class","relative group"),c(se,"href","https://arxiv.org/abs/2004.05150"),c(se,"rel","nofollow"),c(H,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(j,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer"),c(Pe,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer"),c(es,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer"),c(ts,"href","/docs/transformers/v4.15.0/en/model_doc/longformer#transformers.LongformerModel"),c(yo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(yo,"rel","nofollow"),c(qo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(qo,"rel","nofollow"),c(Lo,"href","https://huggingface.co/patrickvonplaten"),c(Lo,"rel","nofollow"),c(Nt,"id","transformers.LEDConfig"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.LEDConfig"),c(ct,"class","relative group"),c(os,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDModel"),c(Fo,"href","https://huggingface.co/allenai/led-base-16384"),c(Fo,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(ss,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(jt,"id","initializing-a-led-allenai/led-base-16384-style-configuration"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration"),c(It,"class","relative group"),c(Gt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration"),c(Bt,"class","relative group"),c(Ht,"id","accessing-the-model-configuration"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#accessing-the-model-configuration"),c(Qt,"class","relative group"),c(P,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(pt,"class","relative group"),c(as,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizer"),c(rs,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer"),c(ds,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizer"),c(We,"class","docstring"),c(Wt,"class","docstring"),c(Kt,"class","docstring"),c(Ea,"class","docstring"),c(I,"class","docstring"),c(Vt,"id","transformers.LEDTokenizerFast"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(cs,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDTokenizerFast"),c(hs,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizerFast"),c(us,"href","/docs/transformers/v4.15.0/en/model_doc/bart#transformers.BartTokenizerFast"),c(Fe,"class","docstring"),c(Jt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(mt,"class","relative group"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Zt,"id","transformers.LEDModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.LEDModel"),c(Et,"class","relative group"),c(ps,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ln,"rel","nofollow"),c(fs,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDModel"),c(Te,"class","docstring"),c($e,"class","docstring"),c(eo,"id","transformers.LEDForConditionalGeneration"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.LEDForConditionalGeneration"),c(Lt,"class","relative group"),c(ms,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(_s,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(no,"id","global-attention-on-the-first-token-(cf.-beltagy-et-al.-2020)"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#global-attention-on-the-first-token-(cf.-beltagy-et-al.-2020)"),c(oo,"class","relative group"),c(ao,"id","generate-summary"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#generate-summary"),c(so,"class","relative group"),c(M,"class","docstring"),c(xe,"class","docstring"),c(ro,"id","transformers.LEDForSequenceClassification"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(gs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(vs,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDForSequenceClassification"),c(U,"class","docstring"),c(he,"class","docstring"),c(lo,"id","transformers.LEDForQuestionAnswering"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.LEDForQuestionAnswering"),c($t,"class","relative group"),c(Ts,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),c(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(On,"rel","nofollow"),c(ks,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(ke,"class","docstring"),c(ue,"class","docstring"),c(ho,"id","transformers.TFLEDModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDModel"),c(St,"class","relative group"),c(bs,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Gn,"rel","nofollow"),c(ws,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.TFLEDModel"),c(be,"class","docstring"),c(pe,"class","docstring"),c(fo,"id","transformers.TFLEDForConditionalGeneration"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.TFLEDForConditionalGeneration"),c(Ot,"class","relative group"),c(ys,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vn,"rel","nofollow"),c(Es,"href","/docs/transformers/v4.15.0/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(we,"class","docstring"),c(fe,"class","docstring")},m(o,u){e(document.head,p),h(o,L,u),h(o,b,u),e(b,w),e(w,q),g(E,q,null),e(b,y),e(b,D),e(D,Ae),h(o,_e,u),h(o,z,u),e(z,ee),e(ee,W),g(ne,W,null),e(z,Ne),e(z,K),e(K,Ie),h(o,Me,u),h(o,Q,u),e(Q,V),e(Q,se),e(se,Le),e(Q,C),h(o,A,u),h(o,ge,u),e(ge,ae),h(o,Se,u),h(o,ve,u),e(ve,X),e(X,je),h(o,Ce,u),h(o,O,u),e(O,Be),h(o,te,u),h(o,$,u),e($,x),e(x,H),e(H,Ge),e(x,Qe),e(x,j),e(j,He),e(x,re),e(x,De),e(De,f),e(x,F),e(x,de),e(de,nt),e(x,st),e(x,G),e(G,at),e(x,rt),e(x,Oe),e(Oe,J),e(x,ie),e(x,Pe),e(Pe,dt),e(x,le),e($,it),e($,ce),e(ce,Ue),e(ce,Re),e(Re,mi),e(ce,_i),e(ce,As),e(As,gi),e(ce,vi),e($,Ti),e($,ze),e(ze,ki),e(ze,Ns),e(Ns,bi),e(ze,wi),e(ze,Is),e(Is,yi),e(ze,Ei),e(ze,es),e(es,qi),e(ze,Li),e(ze,js),e(js,Di),e(ze,zi),e($,Fi),e($,Z),e(Z,$i),e(Z,Bs),e(Bs,xi),e(Z,Mi),e(Z,Gs),e(Gs,Si),e(Z,Ci),e(Z,ts),e(ts,Oi),e(Z,Pi),e(Z,Qs),e(Qs,Ai),e(Z,Ni),e(Z,Hs),e(Hs,Ii),e(Z,ji),e(Z,Us),e(Us,Bi),e(Z,Gi),e($,Qi),e($,lt),e(lt,Hi),e(lt,Rs),e(Rs,Ui),e(lt,Ri),e(lt,Ws),e(Ws,Wi),e(lt,Ki),e($,Vi),e($,wo),e(wo,Xi),e(wo,yo),e(yo,Ji),e(wo,Zi),e($,Yi),e($,Eo),e(Eo,el),e(Eo,qo),e(qo,tl),e(Eo,ol),h(o,Qr,u),h(o,At,u),e(At,nl),e(At,Lo),e(Lo,sl),e(At,al),h(o,Hr,u),h(o,ct,u),e(ct,Nt),e(Nt,Ks),g(Do,Ks,null),e(ct,rl),e(ct,Vs),e(Vs,dl),h(o,Ur,u),h(o,P,u),g(zo,P,null),e(P,il),e(P,ht),e(ht,ll),e(ht,os),e(os,cl),e(ht,hl),e(ht,Fo),e(Fo,ul),e(ht,pl),e(P,fl),e(P,ut),e(ut,ml),e(ut,ns),e(ns,_l),e(ut,gl),e(ut,ss),e(ss,vl),e(ut,Tl),e(P,kl),e(P,Xs),e(Xs,bl),e(P,wl),g($o,P,null),e(P,yl),e(P,Js),e(Js,Zs),e(Zs,Ys),e(Ys,ea),e(ea,El),e(P,ql),e(P,ta),e(ta,oa),e(oa,xo),e(xo,It),e(It,jt),e(jt,na),g(Mo,na,null),e(It,Ll),e(It,sa),e(sa,Dl),e(xo,zl),e(xo,aa),e(aa,Fl),e(P,$l),e(P,ra),e(ra,da),e(da,So),e(So,Bt),e(Bt,Gt),e(Gt,ia),g(Co,ia,null),e(Bt,xl),e(Bt,la),e(la,Ml),e(So,Sl),e(So,ca),e(ca,Cl),e(P,Ol),e(P,ha),e(ha,ua),e(ua,Oo),e(Oo,Qt),e(Qt,Ht),e(Ht,pa),g(Po,pa,null),e(Qt,Pl),e(Qt,fa),e(fa,Al),e(Oo,Nl),e(Oo,ma),e(ma,Il),h(o,Rr,u),h(o,pt,u),e(pt,Ut),e(Ut,_a),g(Ao,_a,null),e(pt,jl),e(pt,ga),e(ga,Bl),h(o,Wr,u),h(o,I,u),g(No,I,null),e(I,Gl),e(I,va),e(va,Ql),e(I,Hl),e(I,Rt),e(Rt,as),e(as,Ul),e(Rt,Rl),e(Rt,rs),e(rs,Wl),e(Rt,Kl),e(I,Vl),e(I,Io),e(Io,Xl),e(Io,ds),e(ds,Jl),e(Io,Zl),e(I,Yl),e(I,We),g(jo,We,null),e(We,ec),e(We,Ta),e(Ta,tc),e(We,oc),e(We,Bo),e(Bo,is),e(is,nc),e(is,ka),e(ka,sc),e(Bo,ac),e(Bo,ls),e(ls,rc),e(ls,ba),e(ba,dc),e(I,ic),e(I,Wt),g(Go,Wt,null),e(Wt,lc),e(Wt,Qo),e(Qo,cc),e(Qo,wa),e(wa,hc),e(Qo,uc),e(I,pc),e(I,Kt),g(Ho,Kt,null),e(Kt,fc),e(Kt,ya),e(ya,mc),e(I,_c),e(I,Ea),h(o,Kr,u),h(o,ft,u),e(ft,Vt),e(Vt,qa),g(Uo,qa,null),e(ft,gc),e(ft,La),e(La,vc),h(o,Vr,u),h(o,Fe,u),g(Ro,Fe,null),e(Fe,Tc),e(Fe,Wo),e(Wo,kc),e(Wo,Da),e(Da,bc),e(Wo,wc),e(Fe,yc),e(Fe,Xt),e(Xt,cs),e(cs,Ec),e(Xt,qc),e(Xt,hs),e(hs,Lc),e(Xt,Dc),e(Fe,zc),e(Fe,Ko),e(Ko,Fc),e(Ko,us),e(us,$c),e(Ko,xc),h(o,Xr,u),h(o,mt,u),e(mt,Jt),e(Jt,za),g(Vo,za,null),e(mt,Mc),e(mt,Fa),e(Fa,Sc),h(o,Jr,u),h(o,_t,u),g(Xo,_t,null),e(_t,Cc),e(_t,$a),e($a,Oc),h(o,Zr,u),h(o,gt,u),g(Jo,gt,null),e(gt,Pc),e(gt,xa),e(xa,Ac),h(o,Yr,u),h(o,vt,u),g(Zo,vt,null),e(vt,Nc),e(vt,Ma),e(Ma,Ic),h(o,ed,u),h(o,Tt,u),g(Yo,Tt,null),e(Tt,jc),e(Tt,Sa),e(Sa,Bc),h(o,td,u),h(o,kt,u),g(en,kt,null),e(kt,Gc),e(kt,Ca),e(Ca,Qc),h(o,od,u),h(o,bt,u),g(tn,bt,null),e(bt,Hc),e(bt,Oa),e(Oa,Uc),h(o,nd,u),h(o,wt,u),g(on,wt,null),e(wt,Rc),e(wt,Pa),e(Pa,Wc),h(o,sd,u),h(o,yt,u),g(nn,yt,null),e(yt,Kc),e(yt,Aa),e(Aa,Vc),h(o,ad,u),h(o,Et,u),e(Et,Zt),e(Zt,Na),g(sn,Na,null),e(Et,Xc),e(Et,Ia),e(Ia,Jc),h(o,rd,u),h(o,$e,u),g(an,$e,null),e($e,Zc),e($e,rn),e(rn,Yc),e(rn,ps),e(ps,eh),e(rn,th),e($e,oh),e($e,dn),e(dn,nh),e(dn,ln),e(ln,sh),e(dn,ah),e($e,rh),e($e,Te),g(cn,Te,null),e(Te,dh),e(Te,qt),e(qt,ih),e(qt,fs),e(fs,lh),e(qt,ch),e(qt,ja),e(ja,hh),e(qt,uh),e(Te,ph),g(Yt,Te,null),e(Te,fh),e(Te,Ba),e(Ba,mh),e(Te,_h),g(hn,Te,null),h(o,dd,u),h(o,Lt,u),e(Lt,eo),e(eo,Ga),g(un,Ga,null),e(Lt,gh),e(Lt,Qa),e(Qa,vh),h(o,id,u),h(o,xe,u),g(pn,xe,null),e(xe,Th),e(xe,fn),e(fn,kh),e(fn,ms),e(ms,bh),e(fn,wh),e(xe,yh),e(xe,mn),e(mn,Eh),e(mn,_n),e(_n,qh),e(mn,Lh),e(xe,Dh),e(xe,M),g(gn,M,null),e(M,zh),e(M,Dt),e(Dt,Fh),e(Dt,_s),e(_s,$h),e(Dt,xh),e(Dt,Ha),e(Ha,Mh),e(Dt,Sh),e(M,Ch),g(to,M,null),e(M,Oh),e(M,Ua),e(Ua,Ph),e(M,Ah),g(vn,M,null),e(M,Nh),e(M,Ra),e(Ra,Ih),e(M,jh),e(M,Wa),e(Wa,Ka),e(Ka,Va),e(Va,Xa),e(Xa,Bh),e(M,Gh),e(M,Ja),e(Ja,Za),e(Za,Ya),e(Ya,er),e(er,Qh),e(M,Hh),e(M,tr),e(tr,or),e(or,nr),e(nr,sr),e(sr,Uh),e(M,Rh),e(M,ar),e(ar,rr),e(rr,Tn),e(Tn,oo),e(oo,no),e(no,dr),g(kn,dr,null),e(oo,Wh),e(oo,ir),e(ir,Kh),e(Tn,Vh),e(Tn,lr),e(lr,Xh),e(M,Jh),e(M,cr),e(cr,hr),e(hr,bn),e(bn,so),e(so,ao),e(ao,ur),g(wn,ur,null),e(so,Zh),e(so,pr),e(pr,Yh),e(bn,eu),e(bn,fr),e(fr,tu),h(o,ld,u),h(o,zt,u),e(zt,ro),e(ro,mr),g(yn,mr,null),e(zt,ou),e(zt,_r),e(_r,nu),h(o,cd,u),h(o,he,u),g(En,he,null),e(he,su),e(he,gr),e(gr,au),e(he,ru),e(he,qn),e(qn,du),e(qn,gs),e(gs,iu),e(qn,lu),e(he,cu),e(he,Ln),e(Ln,hu),e(Ln,Dn),e(Dn,uu),e(Ln,pu),e(he,fu),e(he,U),g(zn,U,null),e(U,mu),e(U,Ft),e(Ft,_u),e(Ft,vs),e(vs,gu),e(Ft,vu),e(Ft,vr),e(vr,Tu),e(Ft,ku),e(U,bu),g(io,U,null),e(U,wu),e(U,Tr),e(Tr,yu),e(U,Eu),g(Fn,U,null),e(U,qu),e(U,kr),e(kr,Lu),e(U,Du),g($n,U,null),h(o,hd,u),h(o,$t,u),e($t,lo),e(lo,br),g(xn,br,null),e($t,zu),e($t,wr),e(wr,Fu),h(o,ud,u),h(o,ue,u),g(Mn,ue,null),e(ue,$u),e(ue,xt),e(xt,xu),e(xt,yr),e(yr,Mu),e(xt,Su),e(xt,Er),e(Er,Cu),e(xt,Ou),e(ue,Pu),e(ue,Sn),e(Sn,Au),e(Sn,Ts),e(Ts,Nu),e(Sn,Iu),e(ue,ju),e(ue,Cn),e(Cn,Bu),e(Cn,On),e(On,Gu),e(Cn,Qu),e(ue,Hu),e(ue,ke),g(Pn,ke,null),e(ke,Uu),e(ke,Mt),e(Mt,Ru),e(Mt,ks),e(ks,Wu),e(Mt,Ku),e(Mt,qr),e(qr,Vu),e(Mt,Xu),e(ke,Ju),g(co,ke,null),e(ke,Zu),e(ke,Lr),e(Lr,Yu),e(ke,ep),g(An,ke,null),h(o,pd,u),h(o,St,u),e(St,ho),e(ho,Dr),g(Nn,Dr,null),e(St,tp),e(St,zr),e(zr,op),h(o,fd,u),h(o,pe,u),g(In,pe,null),e(pe,np),e(pe,jn),e(jn,sp),e(jn,bs),e(bs,ap),e(jn,rp),e(pe,dp),e(pe,Bn),e(Bn,ip),e(Bn,Gn),e(Gn,lp),e(Bn,cp),e(pe,hp),g(uo,pe,null),e(pe,up),e(pe,be),g(Qn,be,null),e(be,pp),e(be,Ct),e(Ct,fp),e(Ct,ws),e(ws,mp),e(Ct,_p),e(Ct,Fr),e(Fr,gp),e(Ct,vp),e(be,Tp),g(po,be,null),e(be,kp),e(be,$r),e($r,bp),e(be,wp),g(Hn,be,null),h(o,md,u),h(o,Ot,u),e(Ot,fo),e(fo,xr),g(Un,xr,null),e(Ot,yp),e(Ot,Mr),e(Mr,Ep),h(o,_d,u),h(o,fe,u),g(Rn,fe,null),e(fe,qp),e(fe,Wn),e(Wn,Lp),e(Wn,ys),e(ys,Dp),e(Wn,zp),e(fe,Fp),e(fe,Kn),e(Kn,$p),e(Kn,Vn),e(Vn,xp),e(Kn,Mp),e(fe,Sp),g(mo,fe,null),e(fe,Cp),e(fe,we),g(Xn,we,null),e(we,Op),e(we,Pt),e(Pt,Pp),e(Pt,Es),e(Es,Ap),e(Pt,Np),e(Pt,Sr),e(Sr,Ip),e(Pt,jp),e(we,Bp),g(_o,we,null),e(we,Gp),e(we,Cr),e(Cr,Qp),e(we,Hp),g(Jn,we,null),gd=!0},p(o,[u]){const Zn={};u&2&&(Zn.$$scope={dirty:u,ctx:o}),Yt.$set(Zn);const Or={};u&2&&(Or.$$scope={dirty:u,ctx:o}),to.$set(Or);const Pr={};u&2&&(Pr.$$scope={dirty:u,ctx:o}),io.$set(Pr);const Ar={};u&2&&(Ar.$$scope={dirty:u,ctx:o}),co.$set(Ar);const Yn={};u&2&&(Yn.$$scope={dirty:u,ctx:o}),uo.$set(Yn);const Nr={};u&2&&(Nr.$$scope={dirty:u,ctx:o}),po.$set(Nr);const Ir={};u&2&&(Ir.$$scope={dirty:u,ctx:o}),mo.$set(Ir);const jr={};u&2&&(jr.$$scope={dirty:u,ctx:o}),_o.$set(jr)},i(o){gd||(v(E.$$.fragment,o),v(ne.$$.fragment,o),v(Do.$$.fragment,o),v(zo.$$.fragment,o),v($o.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Po.$$.fragment,o),v(Ao.$$.fragment,o),v(No.$$.fragment,o),v(jo.$$.fragment,o),v(Go.$$.fragment,o),v(Ho.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Vo.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(nn.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(cn.$$.fragment,o),v(Yt.$$.fragment,o),v(hn.$$.fragment,o),v(un.$$.fragment,o),v(pn.$$.fragment,o),v(gn.$$.fragment,o),v(to.$$.fragment,o),v(vn.$$.fragment,o),v(kn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(En.$$.fragment,o),v(zn.$$.fragment,o),v(io.$$.fragment,o),v(Fn.$$.fragment,o),v($n.$$.fragment,o),v(xn.$$.fragment,o),v(Mn.$$.fragment,o),v(Pn.$$.fragment,o),v(co.$$.fragment,o),v(An.$$.fragment,o),v(Nn.$$.fragment,o),v(In.$$.fragment,o),v(uo.$$.fragment,o),v(Qn.$$.fragment,o),v(po.$$.fragment,o),v(Hn.$$.fragment,o),v(Un.$$.fragment,o),v(Rn.$$.fragment,o),v(mo.$$.fragment,o),v(Xn.$$.fragment,o),v(_o.$$.fragment,o),v(Jn.$$.fragment,o),gd=!0)},o(o){T(E.$$.fragment,o),T(ne.$$.fragment,o),T(Do.$$.fragment,o),T(zo.$$.fragment,o),T($o.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Po.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Go.$$.fragment,o),T(Ho.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(nn.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(cn.$$.fragment,o),T(Yt.$$.fragment,o),T(hn.$$.fragment,o),T(un.$$.fragment,o),T(pn.$$.fragment,o),T(gn.$$.fragment,o),T(to.$$.fragment,o),T(vn.$$.fragment,o),T(kn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(zn.$$.fragment,o),T(io.$$.fragment,o),T(Fn.$$.fragment,o),T($n.$$.fragment,o),T(xn.$$.fragment,o),T(Mn.$$.fragment,o),T(Pn.$$.fragment,o),T(co.$$.fragment,o),T(An.$$.fragment,o),T(Nn.$$.fragment,o),T(In.$$.fragment,o),T(uo.$$.fragment,o),T(Qn.$$.fragment,o),T(po.$$.fragment,o),T(Hn.$$.fragment,o),T(Un.$$.fragment,o),T(Rn.$$.fragment,o),T(mo.$$.fragment,o),T(Xn.$$.fragment,o),T(_o.$$.fragment,o),T(Jn.$$.fragment,o),gd=!1},d(o){t(p),o&&t(L),o&&t(b),k(E),o&&t(_e),o&&t(z),k(ne),o&&t(Me),o&&t(Q),o&&t(A),o&&t(ge),o&&t(Se),o&&t(ve),o&&t(Ce),o&&t(O),o&&t(te),o&&t($),o&&t(Qr),o&&t(At),o&&t(Hr),o&&t(ct),k(Do),o&&t(Ur),o&&t(P),k(zo),k($o),k(Mo),k(Co),k(Po),o&&t(Rr),o&&t(pt),k(Ao),o&&t(Wr),o&&t(I),k(No),k(jo),k(Go),k(Ho),o&&t(Kr),o&&t(ft),k(Uo),o&&t(Vr),o&&t(Fe),k(Ro),o&&t(Xr),o&&t(mt),k(Vo),o&&t(Jr),o&&t(_t),k(Xo),o&&t(Zr),o&&t(gt),k(Jo),o&&t(Yr),o&&t(vt),k(Zo),o&&t(ed),o&&t(Tt),k(Yo),o&&t(td),o&&t(kt),k(en),o&&t(od),o&&t(bt),k(tn),o&&t(nd),o&&t(wt),k(on),o&&t(sd),o&&t(yt),k(nn),o&&t(ad),o&&t(Et),k(sn),o&&t(rd),o&&t($e),k(an),k(cn),k(Yt),k(hn),o&&t(dd),o&&t(Lt),k(un),o&&t(id),o&&t(xe),k(pn),k(gn),k(to),k(vn),k(kn),k(wn),o&&t(ld),o&&t(zt),k(yn),o&&t(cd),o&&t(he),k(En),k(zn),k(io),k(Fn),k($n),o&&t(hd),o&&t($t),k(xn),o&&t(ud),o&&t(ue),k(Mn),k(Pn),k(co),k(An),o&&t(pd),o&&t(St),k(Nn),o&&t(fd),o&&t(pe),k(In),k(uo),k(Qn),k(po),k(Hn),o&&t(md),o&&t(Ot),k(Un),o&&t(_d),o&&t(fe),k(Rn),k(mo),k(Xn),k(_o),k(Jn)}}}const hg={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function ug(B,p,L){let{fw:b}=p;return B.$$set=w=>{"fw"in w&&L(0,b=w.fw)},[b]}class Tg extends Z_{constructor(p){super();Y_(this,p,ug,cg,eg,{fw:0})}}export{Tg as default,hg as metadata};
