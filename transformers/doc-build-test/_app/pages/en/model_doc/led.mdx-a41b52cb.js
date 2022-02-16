import{S as Lm,i as Dm,s as zm,e as n,k as i,w as _,t as r,L as Fm,c as s,d as t,m as l,a,x as g,h as d,b as c,J as e,g as h,y as b,q as v,o as T,B as k}from"../../../chunks/vendor-9e2b328e.js";import{T as go}from"../../../chunks/Tip-76f97a76.js";import{D as M}from"../../../chunks/Docstring-50fd6873.js";import{C as Pt}from"../../../chunks/CodeBlock-b9ff96e9.js";import{I as fe}from"../../../chunks/IconCopyLink-fd0e58fd.js";import"../../../chunks/CopyButton-4b97cbf7.js";function $m(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function xm(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function Mm(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function Sm(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function Cm(j){let p,L,m,w,q,E,y,D,Pe,me,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),m=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var F=a(p);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=s(f,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Pe=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),me=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var at=a(U);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var rt=a(R);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(f),V=s(f,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);A=s(X,"LI",{});var re=a(A);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Ae=a(ne);Se=d(Ae,"input_ids"),Ae.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var We=a(N);He=d(We,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(We,"CODE",{});var Ue=a(se);De=d(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),We.forEach(t),X.forEach(t)},m(f,F){h(f,p,F),e(p,L),h(f,m,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Pe),h(f,me,F),h(f,z,F),e(z,Z),e(z,U),e(U,te),e(z,Ne),e(z,R),e(R,je),e(z,Me),h(f,B,F),h(f,V,F),e(V,oe),h(f,Le,F),h(f,S,F),e(S,A),e(A,_e),e(A,ne),e(ne,Se),e(A,ge),e(A,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,$),e(C,x),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(f){f&&t(p),f&&t(m),f&&t(w),f&&t(me),f&&t(z),f&&t(B),f&&t(V),f&&t(Le),f&&t(S)}}}function Om(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function Am(j){let p,L,m,w,q,E,y,D,Pe,me,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De;return{c(){p=n("p"),L=r("TF 2.0 models accepts two formats as inputs:"),m=i(),w=n("ul"),q=n("li"),E=r("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=n("li"),Pe=r("having all inputs as a list, tuple or dict in the first positional arguments."),me=i(),z=n("p"),Z=r("This second option is useful when using "),U=n("code"),te=r("tf.keras.Model.fit"),Ne=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),R=n("code"),je=r("model(inputs)"),Me=r("."),B=i(),V=n("p"),oe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Le=i(),S=n("ul"),A=n("li"),_e=r("a single Tensor with "),ne=n("code"),Se=r("input_ids"),ge=r(" only and nothing else: "),K=n("code"),Ie=r("model(input_ids)"),Ce=i(),C=n("li"),Be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=n("code"),$=r("model([input_ids, attention_mask])"),x=r(" or "),G=n("code"),Ge=r("model([input_ids, attention_mask, token_type_ids])"),Qe=i(),N=n("li"),He=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=n("code"),De=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){p=s(f,"P",{});var F=a(p);L=d(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=s(f,"UL",{});var ae=a(w);q=s(ae,"LI",{});var nt=a(q);E=d(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),y=l(ae),D=s(ae,"LI",{});var st=a(D);Pe=d(st,"having all inputs as a list, tuple or dict in the first positional arguments."),st.forEach(t),ae.forEach(t),me=l(f),z=s(f,"P",{});var I=a(z);Z=d(I,"This second option is useful when using "),U=s(I,"CODE",{});var at=a(U);te=d(at,"tf.keras.Model.fit"),at.forEach(t),Ne=d(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),R=s(I,"CODE",{});var rt=a(R);je=d(rt,"model(inputs)"),rt.forEach(t),Me=d(I,"."),I.forEach(t),B=l(f),V=s(f,"P",{});var Oe=a(V);oe=d(Oe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Oe.forEach(t),Le=l(f),S=s(f,"UL",{});var X=a(S);A=s(X,"LI",{});var re=a(A);_e=d(re,"a single Tensor with "),ne=s(re,"CODE",{});var Ae=a(ne);Se=d(Ae,"input_ids"),Ae.forEach(t),ge=d(re," only and nothing else: "),K=s(re,"CODE",{});var dt=a(K);Ie=d(dt,"model(input_ids)"),dt.forEach(t),re.forEach(t),Ce=l(X),C=s(X,"LI",{});var de=a(C);Be=d(de,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Y=s(de,"CODE",{});var it=a(Y);$=d(it,"model([input_ids, attention_mask])"),it.forEach(t),x=d(de," or "),G=s(de,"CODE",{});var ie=a(G);Ge=d(ie,"model([input_ids, attention_mask, token_type_ids])"),ie.forEach(t),de.forEach(t),Qe=l(X),N=s(X,"LI",{});var We=a(N);He=d(We,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),se=s(We,"CODE",{});var Ue=a(se);De=d(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),We.forEach(t),X.forEach(t)},m(f,F){h(f,p,F),e(p,L),h(f,m,F),h(f,w,F),e(w,q),e(q,E),e(w,y),e(w,D),e(D,Pe),h(f,me,F),h(f,z,F),e(z,Z),e(z,U),e(U,te),e(z,Ne),e(z,R),e(R,je),e(z,Me),h(f,B,F),h(f,V,F),e(V,oe),h(f,Le,F),h(f,S,F),e(S,A),e(A,_e),e(A,ne),e(ne,Se),e(A,ge),e(A,K),e(K,Ie),e(S,Ce),e(S,C),e(C,Be),e(C,Y),e(Y,$),e(C,x),e(C,G),e(G,Ge),e(S,Qe),e(S,N),e(N,He),e(N,se),e(se,De)},d(f){f&&t(p),f&&t(m),f&&t(w),f&&t(me),f&&t(z),f&&t(B),f&&t(V),f&&t(Le),f&&t(S)}}}function Pm(j){let p,L,m,w,q;return{c(){p=n("p"),L=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),w=r("Module"),q=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(E){p=s(E,"P",{});var y=a(p);L=d(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(y,"CODE",{});var D=a(m);w=d(D,"Module"),D.forEach(t),q=d(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,p,y),e(p,L),e(p,m),e(m,w),e(p,q)},d(E){E&&t(p)}}}function Nm(j){let p,L,m,w,q,E,y,D,Pe,me,z,Z,U,te,Ne,R,je,Me,B,V,oe,Le,S,A,_e,ne,Se,ge,K,Ie,Ce,C,Be,Y,$,x,G,Ge,Qe,N,He,se,De,f,F,ae,nt,st,I,at,rt,Oe,X,re,Ae,dt,de,it,ie,We,Ue,Md,Sd,zs,Cd,Od,Ad,ze,Pd,Fs,Nd,jd,$s,Id,Bd,Wn,Gd,Qd,xs,Hd,Wd,Ud,J,Rd,Ms,Vd,Kd,Ss,Xd,Jd,Un,Zd,Yd,Cs,ei,ti,Os,oi,ni,As,si,ai,ri,lt,di,Ps,ii,li,Ns,ci,hi,ui,bo,pi,vo,fi,mi,_i,To,gi,ko,bi,vi,ur,Nt,Ti,wo,ki,wi,pr,ct,jt,js,yo,yi,Is,Ei,fr,O,Eo,qi,ht,Li,Rn,Di,zi,qo,Fi,$i,xi,ut,Mi,Vn,Si,Ci,Kn,Oi,Ai,Pi,Bs,Ni,ji,Lo,Ii,Gs,Qs,Hs,Ws,Bi,Gi,Us,Rs,Vs,It,Bt,Ks,Do,Qi,Xs,Hi,Wi,Js,Zs,zo,Gt,Qt,Ys,Fo,Ui,ea,Ri,Vi,ta,Ki,Xi,oa,na,sa,Ht,Wt,aa,$o,Ji,ra,Zi,mr,pt,Ut,da,xo,Yi,ia,el,_r,P,Mo,tl,la,ol,nl,Rt,Xn,sl,al,Jn,rl,dl,il,So,ll,Zn,cl,hl,ul,Re,Co,pl,ca,fl,ml,Oo,Yn,_l,ha,gl,bl,es,vl,ua,Tl,kl,Vt,Ao,wl,Po,yl,pa,El,ql,Ll,Kt,No,Dl,fa,zl,Fl,ma,gr,ft,Xt,_a,jo,$l,ga,xl,br,Fe,Io,Ml,Bo,Sl,ba,Cl,Ol,Al,Jt,ts,Pl,Nl,os,jl,Il,Bl,Go,Gl,ns,Ql,Hl,vr,mt,Zt,va,Qo,Wl,Ta,Ul,Tr,_t,Ho,Rl,ka,Vl,kr,gt,Wo,Kl,wa,Xl,wr,bt,Uo,Jl,ya,Zl,yr,vt,Ro,Yl,Ea,ec,Er,Tt,Vo,tc,qa,oc,qr,kt,Ko,nc,La,sc,Lr,wt,Xo,ac,Da,rc,Dr,yt,Jo,dc,za,ic,zr,Et,Yt,Fa,Zo,lc,$a,cc,Fr,$e,Yo,hc,en,uc,ss,pc,fc,mc,tn,_c,on,gc,bc,vc,be,nn,Tc,qt,kc,as,wc,yc,xa,Ec,qc,Lc,eo,Dc,Ma,zc,Fc,sn,$r,Lt,to,Sa,an,$c,Ca,xc,xr,xe,rn,Mc,dn,Sc,rs,Cc,Oc,Ac,ln,Pc,cn,Nc,jc,Ic,Q,hn,Bc,Dt,Gc,ds,Qc,Hc,Oa,Wc,Uc,Rc,oo,Vc,Aa,Kc,Xc,un,Jc,Pa,Zc,Yc,pn,Mr,zt,no,Na,fn,eh,ja,th,Sr,le,mn,oh,Ia,nh,sh,_n,ah,is,rh,dh,ih,gn,lh,bn,ch,hh,uh,H,vn,ph,Ft,fh,ls,mh,_h,Ba,gh,bh,vh,so,Th,Ga,kh,wh,Tn,yh,Qa,Eh,qh,kn,Cr,$t,ao,Ha,wn,Lh,Wa,Dh,Or,ce,yn,zh,xt,Fh,Ua,$h,xh,Ra,Mh,Sh,Ch,En,Oh,cs,Ah,Ph,Nh,qn,jh,Ln,Ih,Bh,Gh,ve,Dn,Qh,Mt,Hh,hs,Wh,Uh,Va,Rh,Vh,Kh,ro,Xh,Ka,Jh,Zh,zn,Ar,St,io,Xa,Fn,Yh,Ja,eu,Pr,he,$n,tu,xn,ou,us,nu,su,au,Mn,ru,Sn,du,iu,lu,lo,cu,Te,Cn,hu,Ct,uu,ps,pu,fu,Za,mu,_u,gu,co,bu,Ya,vu,Tu,On,Nr,Ot,ho,er,An,ku,tr,wu,jr,ue,Pn,yu,Nn,Eu,fs,qu,Lu,Du,jn,zu,In,Fu,$u,xu,uo,Mu,ke,Bn,Su,At,Cu,ms,Ou,Au,or,Pu,Nu,ju,po,Iu,nr,Bu,Gu,Gn,Ir;return E=new fe({}),te=new fe({}),yo=new fe({}),Eo=new M({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}]}}),Lo=new Pt({props:{code:",",highlighted:""}}),Do=new fe({}),Fo=new fe({}),$o=new fe({}),xo=new fe({}),Mo=new M({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/tokenization_led.py#L39"}}),Co=new M({props:{name:"build\\_inputs\\_with\\_special\\_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new M({props:{name:"get\\_special\\_tokens\\_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new M({props:{name:"create\\_token\\_type\\_ids\\_from\\_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),jo=new fe({}),Io=new M({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/tokenization_led_fast.py#L40"}}),Qo=new fe({}),Ho=new M({props:{name:"class transformers.models.led.modeling\\_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L1126",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Wo=new M({props:{name:"class transformers.models.led.modeling\\_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L1169",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Uo=new M({props:{name:"class transformers.models.led.modeling\\_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L1237",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ro=new M({props:{name:"class transformers.models.led.modeling\\_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L1304",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Vo=new M({props:{name:"class transformers.models.led.modeling\\_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L1371",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ko=new M({props:{name:"class transformers.models.led.modeling\\_tf\\_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L1330",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Xo=new M({props:{name:"class transformers.models.led.modeling\\_tf\\_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L1373",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Jo=new M({props:{name:"class transformers.models.led.modeling\\_tf\\_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L1441",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Zo=new fe({}),Yo=new M({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2154",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nn=new M({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2181",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new go({props:{$$slots:{default:[$m]},$$scope:{ctx:j}}}),sn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),an=new fe({}),rn=new M({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2277",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new M({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2321",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new go({props:{$$slots:{default:[xm]},$$scope:{ctx:j}}}),un=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),pn=new Pt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),fn=new fe({}),mn=new M({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2468",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new M({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2481",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new go({props:{$$slots:{default:[Mm]},$$scope:{ctx:j}}}),Tn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),kn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wn=new fe({}),yn=new M({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2596",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new M({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_led.py#L2608",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new go({props:{$$slots:{default:[Sm]},$$scope:{ctx:j}}}),zn=new Pt({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Fn=new fe({}),$n=new M({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L2256",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new go({props:{$$slots:{default:[Cm]},$$scope:{ctx:j}}}),Cn=new M({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L2268",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new go({props:{$$slots:{default:[Om]},$$scope:{ctx:j}}}),On=new Pt({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),An=new fe({}),Pn=new M({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L2363",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),uo=new go({props:{$$slots:{default:[Am]},$$scope:{ctx:j}}}),Bn=new M({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/doc-build-test/src/transformers/models/led/modeling_tf_led.py#L2396",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/doc-build-test/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/doc-build-test/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/doc-build-test/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/doc-build-test/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new go({props:{$$slots:{default:[Pm]},$$scope:{ctx:j}}}),Gn=new Pt({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){p=n("meta"),L=i(),m=n("h1"),w=n("a"),q=n("span"),_(E.$$.fragment),y=i(),D=n("span"),Pe=r("LED"),me=i(),z=n("h2"),Z=n("a"),U=n("span"),_(te.$$.fragment),Ne=i(),R=n("span"),je=r("Overview"),Me=i(),B=n("p"),V=r("The LED model was proposed in "),oe=n("a"),Le=r("Longformer: The Long-Document Transformer"),S=r(` by Iz
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
dataset.`),Ce=i(),C=n("p"),Be=r("Tips:"),Y=i(),$=n("ul"),x=n("li"),G=n("a"),Ge=r("LEDForConditionalGeneration"),Qe=r(` is an extension of
`),N=n("a"),He=r("BartForConditionalGeneration"),se=r(" exchanging the traditional "),De=n("em"),f=r("self-attention"),F=r(` layer with
`),ae=n("em"),nt=r("Longformer"),st=r("\u2019s "),I=n("em"),at=r("chunked self-attention"),rt=r(" layer. "),Oe=n("a"),X=r("LEDTokenizer"),re=r(` is an alias of
`),Ae=n("a"),dt=r("BartTokenizer"),de=r("."),it=i(),ie=n("li"),We=r("LED works very well on long-range "),Ue=n("em"),Md=r("sequence-to-sequence"),Sd=r(" tasks where the "),zs=n("code"),Cd=r("input_ids"),Od=r(` largely exceed a length of
1024 tokens.`),Ad=i(),ze=n("li"),Pd=r("LED pads the "),Fs=n("code"),Nd=r("input_ids"),jd=r(" to be a multiple of "),$s=n("code"),Id=r("config.attention_window"),Bd=r(` if required. Therefore a small speed-up is
gained, when `),Wn=n("a"),Gd=r("LEDTokenizer"),Qd=r(" is used with the "),xs=n("code"),Hd=r("pad_to_multiple_of"),Wd=r(" argument."),Ud=i(),J=n("li"),Rd=r("LED makes use of "),Ms=n("em"),Vd=r("global attention"),Kd=r(" by means of the "),Ss=n("code"),Xd=r("global_attention_mask"),Jd=r(` (see
`),Un=n("a"),Zd=r("LongformerModel"),Yd=r("). For summarization, it is advised to put "),Cs=n("em"),ei=r("global attention"),ti=r(` only on the first
`),Os=n("code"),oi=r("<s>"),ni=r(" token. For question answering, it is advised to put "),As=n("em"),si=r("global attention"),ai=r(" on all tokens of the question."),ri=i(),lt=n("li"),di=r("To fine-tune LED on all 16384, it is necessary to enable "),Ps=n("em"),ii=r("gradient checkpointing"),li=r(` by executing
`),Ns=n("code"),ci=r("model.gradient_checkpointing_enable()"),hi=r("."),ui=i(),bo=n("li"),pi=r("A notebook showing how to evaluate LED, can be accessed "),vo=n("a"),fi=r("here"),mi=r("."),_i=i(),To=n("li"),gi=r("A notebook showing how to fine-tune LED, can be accessed "),ko=n("a"),bi=r("here"),vi=r("."),ur=i(),Nt=n("p"),Ti=r("This model was contributed by "),wo=n("a"),ki=r("patrickvonplaten"),wi=r("."),pr=i(),ct=n("h2"),jt=n("a"),js=n("span"),_(yo.$$.fragment),yi=i(),Is=n("span"),Ei=r("LEDConfig"),fr=i(),O=n("div"),_(Eo.$$.fragment),qi=i(),ht=n("p"),Li=r("This is the configuration class to store the configuration of a "),Rn=n("a"),Di=r("LEDModel"),zi=r(`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=n("a"),Fi=r("allenai/led-base-16384"),$i=r(" architecture."),xi=i(),ut=n("p"),Mi=r("Configuration objects inherit from "),Vn=n("a"),Si=r("PretrainedConfig"),Ci=r(` and can be used to control the model outputs. Read the
documentation from `),Kn=n("a"),Oi=r("PretrainedConfig"),Ai=r(" for more information."),Pi=i(),Bs=n("p"),Ni=r("Example:"),ji=i(),_(Lo.$$.fragment),Ii=i(),Gs=n("blockquote"),Qs=n("blockquote"),Hs=n("blockquote"),Ws=n("p"),Bi=r("from transformers import LEDModel, LEDConfig"),Gi=i(),Us=n("blockquote"),Rs=n("blockquote"),Vs=n("blockquote"),It=n("h1"),Bt=n("a"),Ks=n("span"),_(Do.$$.fragment),Qi=i(),Xs=n("span"),Hi=r("Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Wi=i(),Js=n("blockquote"),Zs=n("blockquote"),zo=n("blockquote"),Gt=n("h1"),Qt=n("a"),Ys=n("span"),_(Fo.$$.fragment),Ui=i(),ea=n("span"),Ri=r("Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Vi=i(),ta=n("p"),Ki=r("LEDModel(configuration)"),Xi=i(),oa=n("blockquote"),na=n("blockquote"),sa=n("blockquote"),Ht=n("h1"),Wt=n("a"),aa=n("span"),_($o.$$.fragment),Ji=i(),ra=n("span"),Zi=r("Accessing the model configuration >>> configuration = model.config"),mr=i(),pt=n("h2"),Ut=n("a"),da=n("span"),_(xo.$$.fragment),Yi=i(),ia=n("span"),el=r("LEDTokenizer"),_r=i(),P=n("div"),_(Mo.$$.fragment),tl=i(),la=n("p"),ol=r("Construct a LED tokenizer."),nl=i(),Rt=n("p"),Xn=n("a"),sl=r("LEDTokenizer"),al=r(" is identical to "),Jn=n("a"),rl=r("BartTokenizer"),dl=r(` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),il=i(),So=n("p"),ll=r("Refer to superclass "),Zn=n("a"),cl=r("BartTokenizer"),hl=r(" for usage examples and documentation concerning parameters."),ul=i(),Re=n("div"),_(Co.$$.fragment),pl=i(),ca=n("p"),fl=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),ml=i(),Oo=n("ul"),Yn=n("li"),_l=r("single sequence: "),ha=n("code"),gl=r("<s> X </s>"),bl=i(),es=n("li"),vl=r("pair of sequences: "),ua=n("code"),Tl=r("<s> A </s></s> B </s>"),kl=i(),Vt=n("div"),_(Ao.$$.fragment),wl=i(),Po=n("p"),yl=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pa=n("code"),El=r("prepare_for_model"),ql=r(" method."),Ll=i(),Kt=n("div"),_(No.$$.fragment),Dl=i(),fa=n("p"),zl=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Fl=i(),ma=n("div"),gr=i(),ft=n("h2"),Xt=n("a"),_a=n("span"),_(jo.$$.fragment),$l=i(),ga=n("span"),xl=r("LEDTokenizerFast"),br=i(),Fe=n("div"),_(Io.$$.fragment),Ml=i(),Bo=n("p"),Sl=r("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ba=n("em"),Cl=r("tokenizers"),Ol=r(" library)."),Al=i(),Jt=n("p"),ts=n("a"),Pl=r("LEDTokenizerFast"),Nl=r(" is identical to "),os=n("a"),jl=r("BartTokenizerFast"),Il=r(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Bl=i(),Go=n("p"),Gl=r("Refer to superclass "),ns=n("a"),Ql=r("BartTokenizerFast"),Hl=r(" for usage examples and documentation concerning parameters."),vr=i(),mt=n("h2"),Zt=n("a"),va=n("span"),_(Qo.$$.fragment),Wl=i(),Ta=n("span"),Ul=r("LED specific outputs"),Tr=i(),_t=n("div"),_(Ho.$$.fragment),Rl=i(),ka=n("p"),Vl=r("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),kr=i(),gt=n("div"),_(Wo.$$.fragment),Kl=i(),wa=n("p"),Xl=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),wr=i(),bt=n("div"),_(Uo.$$.fragment),Jl=i(),ya=n("p"),Zl=r("Base class for sequence-to-sequence language models outputs."),yr=i(),vt=n("div"),_(Ro.$$.fragment),Yl=i(),Ea=n("p"),ec=r("Base class for outputs of sequence-to-sequence sentence classification models."),Er=i(),Tt=n("div"),_(Vo.$$.fragment),tc=i(),qa=n("p"),oc=r("Base class for outputs of sequence-to-sequence question answering models."),qr=i(),kt=n("div"),_(Ko.$$.fragment),nc=i(),La=n("p"),sc=r("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Lr=i(),wt=n("div"),_(Xo.$$.fragment),ac=i(),Da=n("p"),rc=r(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Dr=i(),yt=n("div"),_(Jo.$$.fragment),dc=i(),za=n("p"),ic=r("Base class for sequence-to-sequence language models outputs."),zr=i(),Et=n("h2"),Yt=n("a"),Fa=n("span"),_(Zo.$$.fragment),lc=i(),$a=n("span"),cc=r("LEDModel"),Fr=i(),$e=n("div"),_(Yo.$$.fragment),hc=i(),en=n("p"),uc=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=n("a"),pc=r("PreTrainedModel"),fc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc=i(),tn=n("p"),_c=r("This model is also a PyTorch "),on=n("a"),gc=r("torch.nn.Module"),bc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc=i(),be=n("div"),_(nn.$$.fragment),Tc=i(),qt=n("p"),kc=r("The "),as=n("a"),wc=r("LEDModel"),yc=r(" forward method, overrides the "),xa=n("code"),Ec=r("__call__"),qc=r(" special method."),Lc=i(),_(eo.$$.fragment),Dc=i(),Ma=n("p"),zc=r("Example:"),Fc=i(),_(sn.$$.fragment),$r=i(),Lt=n("h2"),to=n("a"),Sa=n("span"),_(an.$$.fragment),$c=i(),Ca=n("span"),xc=r("LEDForConditionalGeneration"),xr=i(),xe=n("div"),_(rn.$$.fragment),Mc=i(),dn=n("p"),Sc=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=n("a"),Cc=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac=i(),ln=n("p"),Pc=r("This model is also a PyTorch "),cn=n("a"),Nc=r("torch.nn.Module"),jc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ic=i(),Q=n("div"),_(hn.$$.fragment),Bc=i(),Dt=n("p"),Gc=r("The "),ds=n("a"),Qc=r("LEDForConditionalGeneration"),Hc=r(" forward method, overrides the "),Oa=n("code"),Wc=r("__call__"),Uc=r(" special method."),Rc=i(),_(oo.$$.fragment),Vc=i(),Aa=n("p"),Kc=r("Conditional generation example:"),Xc=i(),_(un.$$.fragment),Jc=i(),Pa=n("p"),Zc=r("Summarization example:"),Yc=i(),_(pn.$$.fragment),Mr=i(),zt=n("h2"),no=n("a"),Na=n("span"),_(fn.$$.fragment),eh=i(),ja=n("span"),th=r("LEDForSequenceClassification"),Sr=i(),le=n("div"),_(mn.$$.fragment),oh=i(),Ia=n("p"),nh=r(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),sh=i(),_n=n("p"),ah=r("This model inherits from "),is=n("a"),rh=r("PreTrainedModel"),dh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih=i(),gn=n("p"),lh=r("This model is also a PyTorch "),bn=n("a"),ch=r("torch.nn.Module"),hh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uh=i(),H=n("div"),_(vn.$$.fragment),ph=i(),Ft=n("p"),fh=r("The "),ls=n("a"),mh=r("LEDForSequenceClassification"),_h=r(" forward method, overrides the "),Ba=n("code"),gh=r("__call__"),bh=r(" special method."),vh=i(),_(so.$$.fragment),Th=i(),Ga=n("p"),kh=r("Example of single-label classification:"),wh=i(),_(Tn.$$.fragment),yh=i(),Qa=n("p"),Eh=r("Example of multi-label classification:"),qh=i(),_(kn.$$.fragment),Cr=i(),$t=n("h2"),ao=n("a"),Ha=n("span"),_(wn.$$.fragment),Lh=i(),Wa=n("span"),Dh=r("LEDForQuestionAnswering"),Or=i(),ce=n("div"),_(yn.$$.fragment),zh=i(),xt=n("p"),Fh=r(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ua=n("code"),$h=r("span start logits"),xh=r(" and "),Ra=n("code"),Mh=r("span end logits"),Sh=r(")."),Ch=i(),En=n("p"),Oh=r("This model inherits from "),cs=n("a"),Ah=r("PreTrainedModel"),Ph=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh=i(),qn=n("p"),jh=r("This model is also a PyTorch "),Ln=n("a"),Ih=r("torch.nn.Module"),Bh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gh=i(),ve=n("div"),_(Dn.$$.fragment),Qh=i(),Mt=n("p"),Hh=r("The "),hs=n("a"),Wh=r("LEDForQuestionAnswering"),Uh=r(" forward method, overrides the "),Va=n("code"),Rh=r("__call__"),Vh=r(" special method."),Kh=i(),_(ro.$$.fragment),Xh=i(),Ka=n("p"),Jh=r("Example:"),Zh=i(),_(zn.$$.fragment),Ar=i(),St=n("h2"),io=n("a"),Xa=n("span"),_(Fn.$$.fragment),Yh=i(),Ja=n("span"),eu=r("TFLEDModel"),Pr=i(),he=n("div"),_($n.$$.fragment),tu=i(),xn=n("p"),ou=r(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),us=n("a"),nu=r("TFPreTrainedModel"),su=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au=i(),Mn=n("p"),ru=r("This model is also a "),Sn=n("a"),du=r("tf.keras.Model"),iu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lu=i(),_(lo.$$.fragment),cu=i(),Te=n("div"),_(Cn.$$.fragment),hu=i(),Ct=n("p"),uu=r("The "),ps=n("a"),pu=r("TFLEDModel"),fu=r(" forward method, overrides the "),Za=n("code"),mu=r("__call__"),_u=r(" special method."),gu=i(),_(co.$$.fragment),bu=i(),Ya=n("p"),vu=r("Example:"),Tu=i(),_(On.$$.fragment),Nr=i(),Ot=n("h2"),ho=n("a"),er=n("span"),_(An.$$.fragment),ku=i(),tr=n("span"),wu=r("TFLEDForConditionalGeneration"),jr=i(),ue=n("div"),_(Pn.$$.fragment),yu=i(),Nn=n("p"),Eu=r(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=n("a"),qu=r("TFPreTrainedModel"),Lu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=i(),jn=n("p"),zu=r("This model is also a "),In=n("a"),Fu=r("tf.keras.Model"),$u=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xu=i(),_(uo.$$.fragment),Mu=i(),ke=n("div"),_(Bn.$$.fragment),Su=i(),At=n("p"),Cu=r("The "),ms=n("a"),Ou=r("TFLEDForConditionalGeneration"),Au=r(" forward method, overrides the "),or=n("code"),Pu=r("__call__"),Nu=r(" special method."),ju=i(),_(po.$$.fragment),Iu=i(),nr=n("p"),Bu=r("Examples:"),Gu=i(),_(Gn.$$.fragment),this.h()},l(o){const u=Fm('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),L=l(o),m=s(o,"H1",{class:!0});var Qn=a(m);w=s(Qn,"A",{id:!0,class:!0,href:!0});var sr=a(w);q=s(sr,"SPAN",{});var ar=a(q);g(E.$$.fragment,ar),ar.forEach(t),sr.forEach(t),y=l(Qn),D=s(Qn,"SPAN",{});var rr=a(D);Pe=d(rr,"LED"),rr.forEach(t),Qn.forEach(t),me=l(o),z=s(o,"H2",{class:!0});var Hn=a(z);Z=s(Hn,"A",{id:!0,class:!0,href:!0});var dr=a(Z);U=s(dr,"SPAN",{});var ir=a(U);g(te.$$.fragment,ir),ir.forEach(t),dr.forEach(t),Ne=l(Hn),R=s(Hn,"SPAN",{});var lr=a(R);je=d(lr,"Overview"),lr.forEach(t),Hn.forEach(t),Me=l(o),B=s(o,"P",{});var Br=a(B);V=d(Br,"The LED model was proposed in "),oe=s(Br,"A",{href:!0,rel:!0});var Wu=a(oe);Le=d(Wu,"Longformer: The Long-Document Transformer"),Wu.forEach(t),S=d(Br,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),Br.forEach(t),A=l(o),_e=s(o,"P",{});var Uu=a(_e);ne=d(Uu,"The abstract from the paper is the following:"),Uu.forEach(t),Se=l(o),ge=s(o,"P",{});var Ru=a(ge);K=s(Ru,"EM",{});var Vu=a(K);Ie=d(Vu,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Vu.forEach(t),Ru.forEach(t),Ce=l(o),C=s(o,"P",{});var Ku=a(C);Be=d(Ku,"Tips:"),Ku.forEach(t),Y=l(o),$=s(o,"UL",{});var we=a($);x=s(we,"LI",{});var pe=a(x);G=s(pe,"A",{href:!0});var Xu=a(G);Ge=d(Xu,"LEDForConditionalGeneration"),Xu.forEach(t),Qe=d(pe,` is an extension of
`),N=s(pe,"A",{href:!0});var Ju=a(N);He=d(Ju,"BartForConditionalGeneration"),Ju.forEach(t),se=d(pe," exchanging the traditional "),De=s(pe,"EM",{});var Zu=a(De);f=d(Zu,"self-attention"),Zu.forEach(t),F=d(pe,` layer with
`),ae=s(pe,"EM",{});var Yu=a(ae);nt=d(Yu,"Longformer"),Yu.forEach(t),st=d(pe,"\u2019s "),I=s(pe,"EM",{});var ep=a(I);at=d(ep,"chunked self-attention"),ep.forEach(t),rt=d(pe," layer. "),Oe=s(pe,"A",{href:!0});var tp=a(Oe);X=d(tp,"LEDTokenizer"),tp.forEach(t),re=d(pe,` is an alias of
`),Ae=s(pe,"A",{href:!0});var op=a(Ae);dt=d(op,"BartTokenizer"),op.forEach(t),de=d(pe,"."),pe.forEach(t),it=l(we),ie=s(we,"LI",{});var _s=a(ie);We=d(_s,"LED works very well on long-range "),Ue=s(_s,"EM",{});var np=a(Ue);Md=d(np,"sequence-to-sequence"),np.forEach(t),Sd=d(_s," tasks where the "),zs=s(_s,"CODE",{});var sp=a(zs);Cd=d(sp,"input_ids"),sp.forEach(t),Od=d(_s,` largely exceed a length of
1024 tokens.`),_s.forEach(t),Ad=l(we),ze=s(we,"LI",{});var Ve=a(ze);Pd=d(Ve,"LED pads the "),Fs=s(Ve,"CODE",{});var ap=a(Fs);Nd=d(ap,"input_ids"),ap.forEach(t),jd=d(Ve," to be a multiple of "),$s=s(Ve,"CODE",{});var rp=a($s);Id=d(rp,"config.attention_window"),rp.forEach(t),Bd=d(Ve,` if required. Therefore a small speed-up is
gained, when `),Wn=s(Ve,"A",{href:!0});var dp=a(Wn);Gd=d(dp,"LEDTokenizer"),dp.forEach(t),Qd=d(Ve," is used with the "),xs=s(Ve,"CODE",{});var ip=a(xs);Hd=d(ip,"pad_to_multiple_of"),ip.forEach(t),Wd=d(Ve," argument."),Ve.forEach(t),Ud=l(we),J=s(we,"LI",{});var ye=a(J);Rd=d(ye,"LED makes use of "),Ms=s(ye,"EM",{});var lp=a(Ms);Vd=d(lp,"global attention"),lp.forEach(t),Kd=d(ye," by means of the "),Ss=s(ye,"CODE",{});var cp=a(Ss);Xd=d(cp,"global_attention_mask"),cp.forEach(t),Jd=d(ye,` (see
`),Un=s(ye,"A",{href:!0});var hp=a(Un);Zd=d(hp,"LongformerModel"),hp.forEach(t),Yd=d(ye,"). For summarization, it is advised to put "),Cs=s(ye,"EM",{});var up=a(Cs);ei=d(up,"global attention"),up.forEach(t),ti=d(ye,` only on the first
`),Os=s(ye,"CODE",{});var pp=a(Os);oi=d(pp,"<s>"),pp.forEach(t),ni=d(ye," token. For question answering, it is advised to put "),As=s(ye,"EM",{});var fp=a(As);si=d(fp,"global attention"),fp.forEach(t),ai=d(ye," on all tokens of the question."),ye.forEach(t),ri=l(we),lt=s(we,"LI",{});var gs=a(lt);di=d(gs,"To fine-tune LED on all 16384, it is necessary to enable "),Ps=s(gs,"EM",{});var mp=a(Ps);ii=d(mp,"gradient checkpointing"),mp.forEach(t),li=d(gs,` by executing
`),Ns=s(gs,"CODE",{});var _p=a(Ns);ci=d(_p,"model.gradient_checkpointing_enable()"),_p.forEach(t),hi=d(gs,"."),gs.forEach(t),ui=l(we),bo=s(we,"LI",{});var Gr=a(bo);pi=d(Gr,"A notebook showing how to evaluate LED, can be accessed "),vo=s(Gr,"A",{href:!0,rel:!0});var gp=a(vo);fi=d(gp,"here"),gp.forEach(t),mi=d(Gr,"."),Gr.forEach(t),_i=l(we),To=s(we,"LI",{});var Qr=a(To);gi=d(Qr,"A notebook showing how to fine-tune LED, can be accessed "),ko=s(Qr,"A",{href:!0,rel:!0});var bp=a(ko);bi=d(bp,"here"),bp.forEach(t),vi=d(Qr,"."),Qr.forEach(t),we.forEach(t),ur=l(o),Nt=s(o,"P",{});var Hr=a(Nt);Ti=d(Hr,"This model was contributed by "),wo=s(Hr,"A",{href:!0,rel:!0});var vp=a(wo);ki=d(vp,"patrickvonplaten"),vp.forEach(t),wi=d(Hr,"."),Hr.forEach(t),pr=l(o),ct=s(o,"H2",{class:!0});var Wr=a(ct);jt=s(Wr,"A",{id:!0,class:!0,href:!0});var Tp=a(jt);js=s(Tp,"SPAN",{});var kp=a(js);g(yo.$$.fragment,kp),kp.forEach(t),Tp.forEach(t),yi=l(Wr),Is=s(Wr,"SPAN",{});var wp=a(Is);Ei=d(wp,"LEDConfig"),wp.forEach(t),Wr.forEach(t),fr=l(o),O=s(o,"DIV",{class:!0});var W=a(O);g(Eo.$$.fragment,W),qi=l(W),ht=s(W,"P",{});var bs=a(ht);Li=d(bs,"This is the configuration class to store the configuration of a "),Rn=s(bs,"A",{href:!0});var yp=a(Rn);Di=d(yp,"LEDModel"),yp.forEach(t),zi=d(bs,`. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
`),qo=s(bs,"A",{href:!0,rel:!0});var Ep=a(qo);Fi=d(Ep,"allenai/led-base-16384"),Ep.forEach(t),$i=d(bs," architecture."),bs.forEach(t),xi=l(W),ut=s(W,"P",{});var vs=a(ut);Mi=d(vs,"Configuration objects inherit from "),Vn=s(vs,"A",{href:!0});var qp=a(Vn);Si=d(qp,"PretrainedConfig"),qp.forEach(t),Ci=d(vs,` and can be used to control the model outputs. Read the
documentation from `),Kn=s(vs,"A",{href:!0});var Lp=a(Kn);Oi=d(Lp,"PretrainedConfig"),Lp.forEach(t),Ai=d(vs," for more information."),vs.forEach(t),Pi=l(W),Bs=s(W,"P",{});var Dp=a(Bs);Ni=d(Dp,"Example:"),Dp.forEach(t),ji=l(W),g(Lo.$$.fragment,W),Ii=l(W),Gs=s(W,"BLOCKQUOTE",{});var zp=a(Gs);Qs=s(zp,"BLOCKQUOTE",{});var Fp=a(Qs);Hs=s(Fp,"BLOCKQUOTE",{});var $p=a(Hs);Ws=s($p,"P",{});var xp=a(Ws);Bi=d(xp,"from transformers import LEDModel, LEDConfig"),xp.forEach(t),$p.forEach(t),Fp.forEach(t),zp.forEach(t),Gi=l(W),Us=s(W,"BLOCKQUOTE",{});var Mp=a(Us);Rs=s(Mp,"BLOCKQUOTE",{});var Sp=a(Rs);Vs=s(Sp,"BLOCKQUOTE",{});var Cp=a(Vs);It=s(Cp,"H1",{class:!0});var Ur=a(It);Bt=s(Ur,"A",{id:!0,class:!0,href:!0});var Op=a(Bt);Ks=s(Op,"SPAN",{});var Ap=a(Ks);g(Do.$$.fragment,Ap),Ap.forEach(t),Op.forEach(t),Qi=l(Ur),Xs=s(Ur,"SPAN",{});var Pp=a(Xs);Hi=d(Pp,"Initializing a LED allenai/led-base-16384 style configuration >>> configuration = LEDConfig()"),Pp.forEach(t),Ur.forEach(t),Cp.forEach(t),Sp.forEach(t),Mp.forEach(t),Wi=l(W),Js=s(W,"BLOCKQUOTE",{});var Np=a(Js);Zs=s(Np,"BLOCKQUOTE",{});var jp=a(Zs);zo=s(jp,"BLOCKQUOTE",{});var Rr=a(zo);Gt=s(Rr,"H1",{class:!0});var Vr=a(Gt);Qt=s(Vr,"A",{id:!0,class:!0,href:!0});var Ip=a(Qt);Ys=s(Ip,"SPAN",{});var Bp=a(Ys);g(Fo.$$.fragment,Bp),Bp.forEach(t),Ip.forEach(t),Ui=l(Vr),ea=s(Vr,"SPAN",{});var Gp=a(ea);Ri=d(Gp,"Initializing a model from the allenai/led-base-16384 style configuration >>> model ="),Gp.forEach(t),Vr.forEach(t),Vi=l(Rr),ta=s(Rr,"P",{});var Qp=a(ta);Ki=d(Qp,"LEDModel(configuration)"),Qp.forEach(t),Rr.forEach(t),jp.forEach(t),Np.forEach(t),Xi=l(W),oa=s(W,"BLOCKQUOTE",{});var Hp=a(oa);na=s(Hp,"BLOCKQUOTE",{});var Wp=a(na);sa=s(Wp,"BLOCKQUOTE",{});var Up=a(sa);Ht=s(Up,"H1",{class:!0});var Kr=a(Ht);Wt=s(Kr,"A",{id:!0,class:!0,href:!0});var Rp=a(Wt);aa=s(Rp,"SPAN",{});var Vp=a(aa);g($o.$$.fragment,Vp),Vp.forEach(t),Rp.forEach(t),Ji=l(Kr),ra=s(Kr,"SPAN",{});var Kp=a(ra);Zi=d(Kp,"Accessing the model configuration >>> configuration = model.config"),Kp.forEach(t),Kr.forEach(t),Up.forEach(t),Wp.forEach(t),Hp.forEach(t),W.forEach(t),mr=l(o),pt=s(o,"H2",{class:!0});var Xr=a(pt);Ut=s(Xr,"A",{id:!0,class:!0,href:!0});var Xp=a(Ut);da=s(Xp,"SPAN",{});var Jp=a(da);g(xo.$$.fragment,Jp),Jp.forEach(t),Xp.forEach(t),Yi=l(Xr),ia=s(Xr,"SPAN",{});var Zp=a(ia);el=d(Zp,"LEDTokenizer"),Zp.forEach(t),Xr.forEach(t),_r=l(o),P=s(o,"DIV",{class:!0});var ee=a(P);g(Mo.$$.fragment,ee),tl=l(ee),la=s(ee,"P",{});var Yp=a(la);ol=d(Yp,"Construct a LED tokenizer."),Yp.forEach(t),nl=l(ee),Rt=s(ee,"P",{});var cr=a(Rt);Xn=s(cr,"A",{href:!0});var ef=a(Xn);sl=d(ef,"LEDTokenizer"),ef.forEach(t),al=d(cr," is identical to "),Jn=s(cr,"A",{href:!0});var tf=a(Jn);rl=d(tf,"BartTokenizer"),tf.forEach(t),dl=d(cr,` and runs end-to-end tokenization: punctuation splitting and
wordpiece.`),cr.forEach(t),il=l(ee),So=s(ee,"P",{});var Jr=a(So);ll=d(Jr,"Refer to superclass "),Zn=s(Jr,"A",{href:!0});var of=a(Zn);cl=d(of,"BartTokenizer"),of.forEach(t),hl=d(Jr," for usage examples and documentation concerning parameters."),Jr.forEach(t),ul=l(ee),Re=s(ee,"DIV",{class:!0});var Ts=a(Re);g(Co.$$.fragment,Ts),pl=l(Ts),ca=s(Ts,"P",{});var nf=a(ca);fl=d(nf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),nf.forEach(t),ml=l(Ts),Oo=s(Ts,"UL",{});var Zr=a(Oo);Yn=s(Zr,"LI",{});var Qu=a(Yn);_l=d(Qu,"single sequence: "),ha=s(Qu,"CODE",{});var sf=a(ha);gl=d(sf,"<s> X </s>"),sf.forEach(t),Qu.forEach(t),bl=l(Zr),es=s(Zr,"LI",{});var Hu=a(es);vl=d(Hu,"pair of sequences: "),ua=s(Hu,"CODE",{});var af=a(ua);Tl=d(af,"<s> A </s></s> B </s>"),af.forEach(t),Hu.forEach(t),Zr.forEach(t),Ts.forEach(t),kl=l(ee),Vt=s(ee,"DIV",{class:!0});var Yr=a(Vt);g(Ao.$$.fragment,Yr),wl=l(Yr),Po=s(Yr,"P",{});var ed=a(Po);yl=d(ed,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pa=s(ed,"CODE",{});var rf=a(pa);El=d(rf,"prepare_for_model"),rf.forEach(t),ql=d(ed," method."),ed.forEach(t),Yr.forEach(t),Ll=l(ee),Kt=s(ee,"DIV",{class:!0});var td=a(Kt);g(No.$$.fragment,td),Dl=l(td),fa=s(td,"P",{});var df=a(fa);zl=d(df,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),df.forEach(t),td.forEach(t),Fl=l(ee),ma=s(ee,"DIV",{class:!0}),a(ma).forEach(t),ee.forEach(t),gr=l(o),ft=s(o,"H2",{class:!0});var od=a(ft);Xt=s(od,"A",{id:!0,class:!0,href:!0});var lf=a(Xt);_a=s(lf,"SPAN",{});var cf=a(_a);g(jo.$$.fragment,cf),cf.forEach(t),lf.forEach(t),$l=l(od),ga=s(od,"SPAN",{});var hf=a(ga);xl=d(hf,"LEDTokenizerFast"),hf.forEach(t),od.forEach(t),br=l(o),Fe=s(o,"DIV",{class:!0});var fo=a(Fe);g(Io.$$.fragment,fo),Ml=l(fo),Bo=s(fo,"P",{});var nd=a(Bo);Sl=d(nd,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),ba=s(nd,"EM",{});var uf=a(ba);Cl=d(uf,"tokenizers"),uf.forEach(t),Ol=d(nd," library)."),nd.forEach(t),Al=l(fo),Jt=s(fo,"P",{});var hr=a(Jt);ts=s(hr,"A",{href:!0});var pf=a(ts);Pl=d(pf,"LEDTokenizerFast"),pf.forEach(t),Nl=d(hr," is identical to "),os=s(hr,"A",{href:!0});var ff=a(os);jl=d(ff,"BartTokenizerFast"),ff.forEach(t),Il=d(hr,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),hr.forEach(t),Bl=l(fo),Go=s(fo,"P",{});var sd=a(Go);Gl=d(sd,"Refer to superclass "),ns=s(sd,"A",{href:!0});var mf=a(ns);Ql=d(mf,"BartTokenizerFast"),mf.forEach(t),Hl=d(sd," for usage examples and documentation concerning parameters."),sd.forEach(t),fo.forEach(t),vr=l(o),mt=s(o,"H2",{class:!0});var ad=a(mt);Zt=s(ad,"A",{id:!0,class:!0,href:!0});var _f=a(Zt);va=s(_f,"SPAN",{});var gf=a(va);g(Qo.$$.fragment,gf),gf.forEach(t),_f.forEach(t),Wl=l(ad),Ta=s(ad,"SPAN",{});var bf=a(Ta);Ul=d(bf,"LED specific outputs"),bf.forEach(t),ad.forEach(t),Tr=l(o),_t=s(o,"DIV",{class:!0});var rd=a(_t);g(Ho.$$.fragment,rd),Rl=l(rd),ka=s(rd,"P",{});var vf=a(ka);Vl=d(vf,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),vf.forEach(t),rd.forEach(t),kr=l(o),gt=s(o,"DIV",{class:!0});var dd=a(gt);g(Wo.$$.fragment,dd),Kl=l(dd),wa=s(dd,"P",{});var Tf=a(wa);Xl=d(Tf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Tf.forEach(t),dd.forEach(t),wr=l(o),bt=s(o,"DIV",{class:!0});var id=a(bt);g(Uo.$$.fragment,id),Jl=l(id),ya=s(id,"P",{});var kf=a(ya);Zl=d(kf,"Base class for sequence-to-sequence language models outputs."),kf.forEach(t),id.forEach(t),yr=l(o),vt=s(o,"DIV",{class:!0});var ld=a(vt);g(Ro.$$.fragment,ld),Yl=l(ld),Ea=s(ld,"P",{});var wf=a(Ea);ec=d(wf,"Base class for outputs of sequence-to-sequence sentence classification models."),wf.forEach(t),ld.forEach(t),Er=l(o),Tt=s(o,"DIV",{class:!0});var cd=a(Tt);g(Vo.$$.fragment,cd),tc=l(cd),qa=s(cd,"P",{});var yf=a(qa);oc=d(yf,"Base class for outputs of sequence-to-sequence question answering models."),yf.forEach(t),cd.forEach(t),qr=l(o),kt=s(o,"DIV",{class:!0});var hd=a(kt);g(Ko.$$.fragment,hd),nc=l(hd),La=s(hd,"P",{});var Ef=a(La);sc=d(Ef,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Ef.forEach(t),hd.forEach(t),Lr=l(o),wt=s(o,"DIV",{class:!0});var ud=a(wt);g(Xo.$$.fragment,ud),ac=l(ud),Da=s(ud,"P",{});var qf=a(Da);rc=d(qf,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),qf.forEach(t),ud.forEach(t),Dr=l(o),yt=s(o,"DIV",{class:!0});var pd=a(yt);g(Jo.$$.fragment,pd),dc=l(pd),za=s(pd,"P",{});var Lf=a(za);ic=d(Lf,"Base class for sequence-to-sequence language models outputs."),Lf.forEach(t),pd.forEach(t),zr=l(o),Et=s(o,"H2",{class:!0});var fd=a(Et);Yt=s(fd,"A",{id:!0,class:!0,href:!0});var Df=a(Yt);Fa=s(Df,"SPAN",{});var zf=a(Fa);g(Zo.$$.fragment,zf),zf.forEach(t),Df.forEach(t),lc=l(fd),$a=s(fd,"SPAN",{});var Ff=a($a);cc=d(Ff,"LEDModel"),Ff.forEach(t),fd.forEach(t),Fr=l(o),$e=s(o,"DIV",{class:!0});var mo=a($e);g(Yo.$$.fragment,mo),hc=l(mo),en=s(mo,"P",{});var md=a(en);uc=d(md,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ss=s(md,"A",{href:!0});var $f=a(ss);pc=d($f,"PreTrainedModel"),$f.forEach(t),fc=d(md,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md.forEach(t),mc=l(mo),tn=s(mo,"P",{});var _d=a(tn);_c=d(_d,"This model is also a PyTorch "),on=s(_d,"A",{href:!0,rel:!0});var xf=a(on);gc=d(xf,"torch.nn.Module"),xf.forEach(t),bc=d(_d,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_d.forEach(t),vc=l(mo),be=s(mo,"DIV",{class:!0});var Ke=a(be);g(nn.$$.fragment,Ke),Tc=l(Ke),qt=s(Ke,"P",{});var ks=a(qt);kc=d(ks,"The "),as=s(ks,"A",{href:!0});var Mf=a(as);wc=d(Mf,"LEDModel"),Mf.forEach(t),yc=d(ks," forward method, overrides the "),xa=s(ks,"CODE",{});var Sf=a(xa);Ec=d(Sf,"__call__"),Sf.forEach(t),qc=d(ks," special method."),ks.forEach(t),Lc=l(Ke),g(eo.$$.fragment,Ke),Dc=l(Ke),Ma=s(Ke,"P",{});var Cf=a(Ma);zc=d(Cf,"Example:"),Cf.forEach(t),Fc=l(Ke),g(sn.$$.fragment,Ke),Ke.forEach(t),mo.forEach(t),$r=l(o),Lt=s(o,"H2",{class:!0});var gd=a(Lt);to=s(gd,"A",{id:!0,class:!0,href:!0});var Of=a(to);Sa=s(Of,"SPAN",{});var Af=a(Sa);g(an.$$.fragment,Af),Af.forEach(t),Of.forEach(t),$c=l(gd),Ca=s(gd,"SPAN",{});var Pf=a(Ca);xc=d(Pf,"LEDForConditionalGeneration"),Pf.forEach(t),gd.forEach(t),xr=l(o),xe=s(o,"DIV",{class:!0});var _o=a(xe);g(rn.$$.fragment,_o),Mc=l(_o),dn=s(_o,"P",{});var bd=a(dn);Sc=d(bd,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),rs=s(bd,"A",{href:!0});var Nf=a(rs);Cc=d(Nf,"PreTrainedModel"),Nf.forEach(t),Oc=d(bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bd.forEach(t),Ac=l(_o),ln=s(_o,"P",{});var vd=a(ln);Pc=d(vd,"This model is also a PyTorch "),cn=s(vd,"A",{href:!0,rel:!0});var jf=a(cn);Nc=d(jf,"torch.nn.Module"),jf.forEach(t),jc=d(vd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vd.forEach(t),Ic=l(_o),Q=s(_o,"DIV",{class:!0});var Ee=a(Q);g(hn.$$.fragment,Ee),Bc=l(Ee),Dt=s(Ee,"P",{});var ws=a(Dt);Gc=d(ws,"The "),ds=s(ws,"A",{href:!0});var If=a(ds);Qc=d(If,"LEDForConditionalGeneration"),If.forEach(t),Hc=d(ws," forward method, overrides the "),Oa=s(ws,"CODE",{});var Bf=a(Oa);Wc=d(Bf,"__call__"),Bf.forEach(t),Uc=d(ws," special method."),ws.forEach(t),Rc=l(Ee),g(oo.$$.fragment,Ee),Vc=l(Ee),Aa=s(Ee,"P",{});var Gf=a(Aa);Kc=d(Gf,"Conditional generation example:"),Gf.forEach(t),Xc=l(Ee),g(un.$$.fragment,Ee),Jc=l(Ee),Pa=s(Ee,"P",{});var Qf=a(Pa);Zc=d(Qf,"Summarization example:"),Qf.forEach(t),Yc=l(Ee),g(pn.$$.fragment,Ee),Ee.forEach(t),_o.forEach(t),Mr=l(o),zt=s(o,"H2",{class:!0});var Td=a(zt);no=s(Td,"A",{id:!0,class:!0,href:!0});var Hf=a(no);Na=s(Hf,"SPAN",{});var Wf=a(Na);g(fn.$$.fragment,Wf),Wf.forEach(t),Hf.forEach(t),eh=l(Td),ja=s(Td,"SPAN",{});var Uf=a(ja);th=d(Uf,"LEDForSequenceClassification"),Uf.forEach(t),Td.forEach(t),Sr=l(o),le=s(o,"DIV",{class:!0});var Xe=a(le);g(mn.$$.fragment,Xe),oh=l(Xe),Ia=s(Xe,"P",{});var Rf=a(Ia);nh=d(Rf,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Rf.forEach(t),sh=l(Xe),_n=s(Xe,"P",{});var kd=a(_n);ah=d(kd,"This model inherits from "),is=s(kd,"A",{href:!0});var Vf=a(is);rh=d(Vf,"PreTrainedModel"),Vf.forEach(t),dh=d(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),ih=l(Xe),gn=s(Xe,"P",{});var wd=a(gn);lh=d(wd,"This model is also a PyTorch "),bn=s(wd,"A",{href:!0,rel:!0});var Kf=a(bn);ch=d(Kf,"torch.nn.Module"),Kf.forEach(t),hh=d(wd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wd.forEach(t),uh=l(Xe),H=s(Xe,"DIV",{class:!0});var qe=a(H);g(vn.$$.fragment,qe),ph=l(qe),Ft=s(qe,"P",{});var ys=a(Ft);fh=d(ys,"The "),ls=s(ys,"A",{href:!0});var Xf=a(ls);mh=d(Xf,"LEDForSequenceClassification"),Xf.forEach(t),_h=d(ys," forward method, overrides the "),Ba=s(ys,"CODE",{});var Jf=a(Ba);gh=d(Jf,"__call__"),Jf.forEach(t),bh=d(ys," special method."),ys.forEach(t),vh=l(qe),g(so.$$.fragment,qe),Th=l(qe),Ga=s(qe,"P",{});var Zf=a(Ga);kh=d(Zf,"Example of single-label classification:"),Zf.forEach(t),wh=l(qe),g(Tn.$$.fragment,qe),yh=l(qe),Qa=s(qe,"P",{});var Yf=a(Qa);Eh=d(Yf,"Example of multi-label classification:"),Yf.forEach(t),qh=l(qe),g(kn.$$.fragment,qe),qe.forEach(t),Xe.forEach(t),Cr=l(o),$t=s(o,"H2",{class:!0});var yd=a($t);ao=s(yd,"A",{id:!0,class:!0,href:!0});var em=a(ao);Ha=s(em,"SPAN",{});var tm=a(Ha);g(wn.$$.fragment,tm),tm.forEach(t),em.forEach(t),Lh=l(yd),Wa=s(yd,"SPAN",{});var om=a(Wa);Dh=d(om,"LEDForQuestionAnswering"),om.forEach(t),yd.forEach(t),Or=l(o),ce=s(o,"DIV",{class:!0});var Je=a(ce);g(yn.$$.fragment,Je),zh=l(Je),xt=s(Je,"P",{});var Es=a(xt);Fh=d(Es,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),Ua=s(Es,"CODE",{});var nm=a(Ua);$h=d(nm,"span start logits"),nm.forEach(t),xh=d(Es," and "),Ra=s(Es,"CODE",{});var sm=a(Ra);Mh=d(sm,"span end logits"),sm.forEach(t),Sh=d(Es,")."),Es.forEach(t),Ch=l(Je),En=s(Je,"P",{});var Ed=a(En);Oh=d(Ed,"This model inherits from "),cs=s(Ed,"A",{href:!0});var am=a(cs);Ah=d(am,"PreTrainedModel"),am.forEach(t),Ph=d(Ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ed.forEach(t),Nh=l(Je),qn=s(Je,"P",{});var qd=a(qn);jh=d(qd,"This model is also a PyTorch "),Ln=s(qd,"A",{href:!0,rel:!0});var rm=a(Ln);Ih=d(rm,"torch.nn.Module"),rm.forEach(t),Bh=d(qd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qd.forEach(t),Gh=l(Je),ve=s(Je,"DIV",{class:!0});var Ze=a(ve);g(Dn.$$.fragment,Ze),Qh=l(Ze),Mt=s(Ze,"P",{});var qs=a(Mt);Hh=d(qs,"The "),hs=s(qs,"A",{href:!0});var dm=a(hs);Wh=d(dm,"LEDForQuestionAnswering"),dm.forEach(t),Uh=d(qs," forward method, overrides the "),Va=s(qs,"CODE",{});var im=a(Va);Rh=d(im,"__call__"),im.forEach(t),Vh=d(qs," special method."),qs.forEach(t),Kh=l(Ze),g(ro.$$.fragment,Ze),Xh=l(Ze),Ka=s(Ze,"P",{});var lm=a(Ka);Jh=d(lm,"Example:"),lm.forEach(t),Zh=l(Ze),g(zn.$$.fragment,Ze),Ze.forEach(t),Je.forEach(t),Ar=l(o),St=s(o,"H2",{class:!0});var Ld=a(St);io=s(Ld,"A",{id:!0,class:!0,href:!0});var cm=a(io);Xa=s(cm,"SPAN",{});var hm=a(Xa);g(Fn.$$.fragment,hm),hm.forEach(t),cm.forEach(t),Yh=l(Ld),Ja=s(Ld,"SPAN",{});var um=a(Ja);eu=d(um,"TFLEDModel"),um.forEach(t),Ld.forEach(t),Pr=l(o),he=s(o,"DIV",{class:!0});var Ye=a(he);g($n.$$.fragment,Ye),tu=l(Ye),xn=s(Ye,"P",{});var Dd=a(xn);ou=d(Dd,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),us=s(Dd,"A",{href:!0});var pm=a(us);nu=d(pm,"TFPreTrainedModel"),pm.forEach(t),su=d(Dd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd.forEach(t),au=l(Ye),Mn=s(Ye,"P",{});var zd=a(Mn);ru=d(zd,"This model is also a "),Sn=s(zd,"A",{href:!0,rel:!0});var fm=a(Sn);du=d(fm,"tf.keras.Model"),fm.forEach(t),iu=d(zd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zd.forEach(t),lu=l(Ye),g(lo.$$.fragment,Ye),cu=l(Ye),Te=s(Ye,"DIV",{class:!0});var et=a(Te);g(Cn.$$.fragment,et),hu=l(et),Ct=s(et,"P",{});var Ls=a(Ct);uu=d(Ls,"The "),ps=s(Ls,"A",{href:!0});var mm=a(ps);pu=d(mm,"TFLEDModel"),mm.forEach(t),fu=d(Ls," forward method, overrides the "),Za=s(Ls,"CODE",{});var _m=a(Za);mu=d(_m,"__call__"),_m.forEach(t),_u=d(Ls," special method."),Ls.forEach(t),gu=l(et),g(co.$$.fragment,et),bu=l(et),Ya=s(et,"P",{});var gm=a(Ya);vu=d(gm,"Example:"),gm.forEach(t),Tu=l(et),g(On.$$.fragment,et),et.forEach(t),Ye.forEach(t),Nr=l(o),Ot=s(o,"H2",{class:!0});var Fd=a(Ot);ho=s(Fd,"A",{id:!0,class:!0,href:!0});var bm=a(ho);er=s(bm,"SPAN",{});var vm=a(er);g(An.$$.fragment,vm),vm.forEach(t),bm.forEach(t),ku=l(Fd),tr=s(Fd,"SPAN",{});var Tm=a(tr);wu=d(Tm,"TFLEDForConditionalGeneration"),Tm.forEach(t),Fd.forEach(t),jr=l(o),ue=s(o,"DIV",{class:!0});var tt=a(ue);g(Pn.$$.fragment,tt),yu=l(tt),Nn=s(tt,"P",{});var $d=a(Nn);Eu=d($d,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),fs=s($d,"A",{href:!0});var km=a(fs);qu=d(km,"TFPreTrainedModel"),km.forEach(t),Lu=d($d,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$d.forEach(t),Du=l(tt),jn=s(tt,"P",{});var xd=a(jn);zu=d(xd,"This model is also a "),In=s(xd,"A",{href:!0,rel:!0});var wm=a(In);Fu=d(wm,"tf.keras.Model"),wm.forEach(t),$u=d(xd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xd.forEach(t),xu=l(tt),g(uo.$$.fragment,tt),Mu=l(tt),ke=s(tt,"DIV",{class:!0});var ot=a(ke);g(Bn.$$.fragment,ot),Su=l(ot),At=s(ot,"P",{});var Ds=a(At);Cu=d(Ds,"The "),ms=s(Ds,"A",{href:!0});var ym=a(ms);Ou=d(ym,"TFLEDForConditionalGeneration"),ym.forEach(t),Au=d(Ds," forward method, overrides the "),or=s(Ds,"CODE",{});var Em=a(or);Pu=d(Em,"__call__"),Em.forEach(t),Nu=d(Ds," special method."),Ds.forEach(t),ju=l(ot),g(po.$$.fragment,ot),Iu=l(ot),nr=s(ot,"P",{});var qm=a(nr);Bu=d(qm,"Examples:"),qm.forEach(t),Gu=l(ot),g(Gn.$$.fragment,ot),ot.forEach(t),tt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(jm)),c(w,"id","led"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#led"),c(m,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(z,"class","relative group"),c(oe,"href","https://arxiv.org/abs/2004.05150"),c(oe,"rel","nofollow"),c(G,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(N,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Oe,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer"),c(Ae,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartTokenizer"),c(Wn,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer"),c(Un,"href","/docs/transformers/doc-build-test/en/model_doc/longformer#transformers.LongformerModel"),c(vo,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(vo,"rel","nofollow"),c(ko,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(ko,"rel","nofollow"),c(wo,"href","https://huggingface.co/patrickvonplaten"),c(wo,"rel","nofollow"),c(jt,"id","transformers.LEDConfig"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.LEDConfig"),c(ct,"class","relative group"),c(Rn,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDModel"),c(qo,"href","https://huggingface.co/allenai/led-base-16384"),c(qo,"rel","nofollow"),c(Vn,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(Kn,"href","/docs/transformers/doc-build-test/en/main_classes/configuration#transformers.PretrainedConfig"),c(Bt,"id","initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#initializing-a-led-allenai/led-base-16384-style-configuration->>>-configuration-=-ledconfig()"),c(It,"class","relative group"),c(Qt,"id","initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#initializing-a-model-from-the-allenai/led-base-16384-style-configuration->>>-model-="),c(Gt,"class","relative group"),c(Wt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(O,"class","docstring"),c(Ut,"id","transformers.LEDTokenizer"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDTokenizer"),c(pt,"class","relative group"),c(Xn,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizer"),c(Jn,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartTokenizer"),c(Zn,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartTokenizer"),c(Re,"class","docstring"),c(Vt,"class","docstring"),c(Kt,"class","docstring"),c(ma,"class","docstring"),c(P,"class","docstring"),c(Xt,"id","transformers.LEDTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDTokenizerFast"),c(ft,"class","relative group"),c(ts,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDTokenizerFast"),c(os,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartTokenizerFast"),c(ns,"href","/docs/transformers/doc-build-test/en/model_doc/bart#transformers.BartTokenizerFast"),c(Fe,"class","docstring"),c(Zt,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(mt,"class","relative group"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(bt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(wt,"class","docstring"),c(yt,"class","docstring"),c(Yt,"id","transformers.LEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LEDModel"),c(Et,"class","relative group"),c(ss,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(on,"rel","nofollow"),c(as,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDModel"),c(be,"class","docstring"),c($e,"class","docstring"),c(to,"id","transformers.LEDForConditionalGeneration"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.LEDForConditionalGeneration"),c(Lt,"class","relative group"),c(rs,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cn,"rel","nofollow"),c(ds,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(Q,"class","docstring"),c(xe,"class","docstring"),c(no,"id","transformers.LEDForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.LEDForSequenceClassification"),c(zt,"class","relative group"),c(is,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bn,"rel","nofollow"),c(ls,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDForSequenceClassification"),c(H,"class","docstring"),c(le,"class","docstring"),c(ao,"id","transformers.LEDForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.LEDForQuestionAnswering"),c($t,"class","relative group"),c(cs,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.PreTrainedModel"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(hs,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(ve,"class","docstring"),c(ce,"class","docstring"),c(io,"id","transformers.TFLEDModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFLEDModel"),c(St,"class","relative group"),c(us,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(ps,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.TFLEDModel"),c(Te,"class","docstring"),c(he,"class","docstring"),c(ho,"id","transformers.TFLEDForConditionalGeneration"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.TFLEDForConditionalGeneration"),c(Ot,"class","relative group"),c(fs,"href","/docs/transformers/doc-build-test/en/main_classes/model#transformers.TFPreTrainedModel"),c(In,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(In,"rel","nofollow"),c(ms,"href","/docs/transformers/doc-build-test/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(ke,"class","docstring"),c(ue,"class","docstring")},m(o,u){e(document.head,p),h(o,L,u),h(o,m,u),e(m,w),e(w,q),b(E,q,null),e(m,y),e(m,D),e(D,Pe),h(o,me,u),h(o,z,u),e(z,Z),e(Z,U),b(te,U,null),e(z,Ne),e(z,R),e(R,je),h(o,Me,u),h(o,B,u),e(B,V),e(B,oe),e(oe,Le),e(B,S),h(o,A,u),h(o,_e,u),e(_e,ne),h(o,Se,u),h(o,ge,u),e(ge,K),e(K,Ie),h(o,Ce,u),h(o,C,u),e(C,Be),h(o,Y,u),h(o,$,u),e($,x),e(x,G),e(G,Ge),e(x,Qe),e(x,N),e(N,He),e(x,se),e(x,De),e(De,f),e(x,F),e(x,ae),e(ae,nt),e(x,st),e(x,I),e(I,at),e(x,rt),e(x,Oe),e(Oe,X),e(x,re),e(x,Ae),e(Ae,dt),e(x,de),e($,it),e($,ie),e(ie,We),e(ie,Ue),e(Ue,Md),e(ie,Sd),e(ie,zs),e(zs,Cd),e(ie,Od),e($,Ad),e($,ze),e(ze,Pd),e(ze,Fs),e(Fs,Nd),e(ze,jd),e(ze,$s),e($s,Id),e(ze,Bd),e(ze,Wn),e(Wn,Gd),e(ze,Qd),e(ze,xs),e(xs,Hd),e(ze,Wd),e($,Ud),e($,J),e(J,Rd),e(J,Ms),e(Ms,Vd),e(J,Kd),e(J,Ss),e(Ss,Xd),e(J,Jd),e(J,Un),e(Un,Zd),e(J,Yd),e(J,Cs),e(Cs,ei),e(J,ti),e(J,Os),e(Os,oi),e(J,ni),e(J,As),e(As,si),e(J,ai),e($,ri),e($,lt),e(lt,di),e(lt,Ps),e(Ps,ii),e(lt,li),e(lt,Ns),e(Ns,ci),e(lt,hi),e($,ui),e($,bo),e(bo,pi),e(bo,vo),e(vo,fi),e(bo,mi),e($,_i),e($,To),e(To,gi),e(To,ko),e(ko,bi),e(To,vi),h(o,ur,u),h(o,Nt,u),e(Nt,Ti),e(Nt,wo),e(wo,ki),e(Nt,wi),h(o,pr,u),h(o,ct,u),e(ct,jt),e(jt,js),b(yo,js,null),e(ct,yi),e(ct,Is),e(Is,Ei),h(o,fr,u),h(o,O,u),b(Eo,O,null),e(O,qi),e(O,ht),e(ht,Li),e(ht,Rn),e(Rn,Di),e(ht,zi),e(ht,qo),e(qo,Fi),e(ht,$i),e(O,xi),e(O,ut),e(ut,Mi),e(ut,Vn),e(Vn,Si),e(ut,Ci),e(ut,Kn),e(Kn,Oi),e(ut,Ai),e(O,Pi),e(O,Bs),e(Bs,Ni),e(O,ji),b(Lo,O,null),e(O,Ii),e(O,Gs),e(Gs,Qs),e(Qs,Hs),e(Hs,Ws),e(Ws,Bi),e(O,Gi),e(O,Us),e(Us,Rs),e(Rs,Vs),e(Vs,It),e(It,Bt),e(Bt,Ks),b(Do,Ks,null),e(It,Qi),e(It,Xs),e(Xs,Hi),e(O,Wi),e(O,Js),e(Js,Zs),e(Zs,zo),e(zo,Gt),e(Gt,Qt),e(Qt,Ys),b(Fo,Ys,null),e(Gt,Ui),e(Gt,ea),e(ea,Ri),e(zo,Vi),e(zo,ta),e(ta,Ki),e(O,Xi),e(O,oa),e(oa,na),e(na,sa),e(sa,Ht),e(Ht,Wt),e(Wt,aa),b($o,aa,null),e(Ht,Ji),e(Ht,ra),e(ra,Zi),h(o,mr,u),h(o,pt,u),e(pt,Ut),e(Ut,da),b(xo,da,null),e(pt,Yi),e(pt,ia),e(ia,el),h(o,_r,u),h(o,P,u),b(Mo,P,null),e(P,tl),e(P,la),e(la,ol),e(P,nl),e(P,Rt),e(Rt,Xn),e(Xn,sl),e(Rt,al),e(Rt,Jn),e(Jn,rl),e(Rt,dl),e(P,il),e(P,So),e(So,ll),e(So,Zn),e(Zn,cl),e(So,hl),e(P,ul),e(P,Re),b(Co,Re,null),e(Re,pl),e(Re,ca),e(ca,fl),e(Re,ml),e(Re,Oo),e(Oo,Yn),e(Yn,_l),e(Yn,ha),e(ha,gl),e(Oo,bl),e(Oo,es),e(es,vl),e(es,ua),e(ua,Tl),e(P,kl),e(P,Vt),b(Ao,Vt,null),e(Vt,wl),e(Vt,Po),e(Po,yl),e(Po,pa),e(pa,El),e(Po,ql),e(P,Ll),e(P,Kt),b(No,Kt,null),e(Kt,Dl),e(Kt,fa),e(fa,zl),e(P,Fl),e(P,ma),h(o,gr,u),h(o,ft,u),e(ft,Xt),e(Xt,_a),b(jo,_a,null),e(ft,$l),e(ft,ga),e(ga,xl),h(o,br,u),h(o,Fe,u),b(Io,Fe,null),e(Fe,Ml),e(Fe,Bo),e(Bo,Sl),e(Bo,ba),e(ba,Cl),e(Bo,Ol),e(Fe,Al),e(Fe,Jt),e(Jt,ts),e(ts,Pl),e(Jt,Nl),e(Jt,os),e(os,jl),e(Jt,Il),e(Fe,Bl),e(Fe,Go),e(Go,Gl),e(Go,ns),e(ns,Ql),e(Go,Hl),h(o,vr,u),h(o,mt,u),e(mt,Zt),e(Zt,va),b(Qo,va,null),e(mt,Wl),e(mt,Ta),e(Ta,Ul),h(o,Tr,u),h(o,_t,u),b(Ho,_t,null),e(_t,Rl),e(_t,ka),e(ka,Vl),h(o,kr,u),h(o,gt,u),b(Wo,gt,null),e(gt,Kl),e(gt,wa),e(wa,Xl),h(o,wr,u),h(o,bt,u),b(Uo,bt,null),e(bt,Jl),e(bt,ya),e(ya,Zl),h(o,yr,u),h(o,vt,u),b(Ro,vt,null),e(vt,Yl),e(vt,Ea),e(Ea,ec),h(o,Er,u),h(o,Tt,u),b(Vo,Tt,null),e(Tt,tc),e(Tt,qa),e(qa,oc),h(o,qr,u),h(o,kt,u),b(Ko,kt,null),e(kt,nc),e(kt,La),e(La,sc),h(o,Lr,u),h(o,wt,u),b(Xo,wt,null),e(wt,ac),e(wt,Da),e(Da,rc),h(o,Dr,u),h(o,yt,u),b(Jo,yt,null),e(yt,dc),e(yt,za),e(za,ic),h(o,zr,u),h(o,Et,u),e(Et,Yt),e(Yt,Fa),b(Zo,Fa,null),e(Et,lc),e(Et,$a),e($a,cc),h(o,Fr,u),h(o,$e,u),b(Yo,$e,null),e($e,hc),e($e,en),e(en,uc),e(en,ss),e(ss,pc),e(en,fc),e($e,mc),e($e,tn),e(tn,_c),e(tn,on),e(on,gc),e(tn,bc),e($e,vc),e($e,be),b(nn,be,null),e(be,Tc),e(be,qt),e(qt,kc),e(qt,as),e(as,wc),e(qt,yc),e(qt,xa),e(xa,Ec),e(qt,qc),e(be,Lc),b(eo,be,null),e(be,Dc),e(be,Ma),e(Ma,zc),e(be,Fc),b(sn,be,null),h(o,$r,u),h(o,Lt,u),e(Lt,to),e(to,Sa),b(an,Sa,null),e(Lt,$c),e(Lt,Ca),e(Ca,xc),h(o,xr,u),h(o,xe,u),b(rn,xe,null),e(xe,Mc),e(xe,dn),e(dn,Sc),e(dn,rs),e(rs,Cc),e(dn,Oc),e(xe,Ac),e(xe,ln),e(ln,Pc),e(ln,cn),e(cn,Nc),e(ln,jc),e(xe,Ic),e(xe,Q),b(hn,Q,null),e(Q,Bc),e(Q,Dt),e(Dt,Gc),e(Dt,ds),e(ds,Qc),e(Dt,Hc),e(Dt,Oa),e(Oa,Wc),e(Dt,Uc),e(Q,Rc),b(oo,Q,null),e(Q,Vc),e(Q,Aa),e(Aa,Kc),e(Q,Xc),b(un,Q,null),e(Q,Jc),e(Q,Pa),e(Pa,Zc),e(Q,Yc),b(pn,Q,null),h(o,Mr,u),h(o,zt,u),e(zt,no),e(no,Na),b(fn,Na,null),e(zt,eh),e(zt,ja),e(ja,th),h(o,Sr,u),h(o,le,u),b(mn,le,null),e(le,oh),e(le,Ia),e(Ia,nh),e(le,sh),e(le,_n),e(_n,ah),e(_n,is),e(is,rh),e(_n,dh),e(le,ih),e(le,gn),e(gn,lh),e(gn,bn),e(bn,ch),e(gn,hh),e(le,uh),e(le,H),b(vn,H,null),e(H,ph),e(H,Ft),e(Ft,fh),e(Ft,ls),e(ls,mh),e(Ft,_h),e(Ft,Ba),e(Ba,gh),e(Ft,bh),e(H,vh),b(so,H,null),e(H,Th),e(H,Ga),e(Ga,kh),e(H,wh),b(Tn,H,null),e(H,yh),e(H,Qa),e(Qa,Eh),e(H,qh),b(kn,H,null),h(o,Cr,u),h(o,$t,u),e($t,ao),e(ao,Ha),b(wn,Ha,null),e($t,Lh),e($t,Wa),e(Wa,Dh),h(o,Or,u),h(o,ce,u),b(yn,ce,null),e(ce,zh),e(ce,xt),e(xt,Fh),e(xt,Ua),e(Ua,$h),e(xt,xh),e(xt,Ra),e(Ra,Mh),e(xt,Sh),e(ce,Ch),e(ce,En),e(En,Oh),e(En,cs),e(cs,Ah),e(En,Ph),e(ce,Nh),e(ce,qn),e(qn,jh),e(qn,Ln),e(Ln,Ih),e(qn,Bh),e(ce,Gh),e(ce,ve),b(Dn,ve,null),e(ve,Qh),e(ve,Mt),e(Mt,Hh),e(Mt,hs),e(hs,Wh),e(Mt,Uh),e(Mt,Va),e(Va,Rh),e(Mt,Vh),e(ve,Kh),b(ro,ve,null),e(ve,Xh),e(ve,Ka),e(Ka,Jh),e(ve,Zh),b(zn,ve,null),h(o,Ar,u),h(o,St,u),e(St,io),e(io,Xa),b(Fn,Xa,null),e(St,Yh),e(St,Ja),e(Ja,eu),h(o,Pr,u),h(o,he,u),b($n,he,null),e(he,tu),e(he,xn),e(xn,ou),e(xn,us),e(us,nu),e(xn,su),e(he,au),e(he,Mn),e(Mn,ru),e(Mn,Sn),e(Sn,du),e(Mn,iu),e(he,lu),b(lo,he,null),e(he,cu),e(he,Te),b(Cn,Te,null),e(Te,hu),e(Te,Ct),e(Ct,uu),e(Ct,ps),e(ps,pu),e(Ct,fu),e(Ct,Za),e(Za,mu),e(Ct,_u),e(Te,gu),b(co,Te,null),e(Te,bu),e(Te,Ya),e(Ya,vu),e(Te,Tu),b(On,Te,null),h(o,Nr,u),h(o,Ot,u),e(Ot,ho),e(ho,er),b(An,er,null),e(Ot,ku),e(Ot,tr),e(tr,wu),h(o,jr,u),h(o,ue,u),b(Pn,ue,null),e(ue,yu),e(ue,Nn),e(Nn,Eu),e(Nn,fs),e(fs,qu),e(Nn,Lu),e(ue,Du),e(ue,jn),e(jn,zu),e(jn,In),e(In,Fu),e(jn,$u),e(ue,xu),b(uo,ue,null),e(ue,Mu),e(ue,ke),b(Bn,ke,null),e(ke,Su),e(ke,At),e(At,Cu),e(At,ms),e(ms,Ou),e(At,Au),e(At,or),e(or,Pu),e(At,Nu),e(ke,ju),b(po,ke,null),e(ke,Iu),e(ke,nr),e(nr,Bu),e(ke,Gu),b(Gn,ke,null),Ir=!0},p(o,[u]){const Qn={};u&2&&(Qn.$$scope={dirty:u,ctx:o}),eo.$set(Qn);const sr={};u&2&&(sr.$$scope={dirty:u,ctx:o}),oo.$set(sr);const ar={};u&2&&(ar.$$scope={dirty:u,ctx:o}),so.$set(ar);const rr={};u&2&&(rr.$$scope={dirty:u,ctx:o}),ro.$set(rr);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:o}),lo.$set(Hn);const dr={};u&2&&(dr.$$scope={dirty:u,ctx:o}),co.$set(dr);const ir={};u&2&&(ir.$$scope={dirty:u,ctx:o}),uo.$set(ir);const lr={};u&2&&(lr.$$scope={dirty:u,ctx:o}),po.$set(lr)},i(o){Ir||(v(E.$$.fragment,o),v(te.$$.fragment,o),v(yo.$$.fragment,o),v(Eo.$$.fragment,o),v(Lo.$$.fragment,o),v(Do.$$.fragment,o),v(Fo.$$.fragment,o),v($o.$$.fragment,o),v(xo.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Ao.$$.fragment,o),v(No.$$.fragment,o),v(jo.$$.fragment,o),v(Io.$$.fragment,o),v(Qo.$$.fragment,o),v(Ho.$$.fragment,o),v(Wo.$$.fragment,o),v(Uo.$$.fragment,o),v(Ro.$$.fragment,o),v(Vo.$$.fragment,o),v(Ko.$$.fragment,o),v(Xo.$$.fragment,o),v(Jo.$$.fragment,o),v(Zo.$$.fragment,o),v(Yo.$$.fragment,o),v(nn.$$.fragment,o),v(eo.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(hn.$$.fragment,o),v(oo.$$.fragment,o),v(un.$$.fragment,o),v(pn.$$.fragment,o),v(fn.$$.fragment,o),v(mn.$$.fragment,o),v(vn.$$.fragment,o),v(so.$$.fragment,o),v(Tn.$$.fragment,o),v(kn.$$.fragment,o),v(wn.$$.fragment,o),v(yn.$$.fragment,o),v(Dn.$$.fragment,o),v(ro.$$.fragment,o),v(zn.$$.fragment,o),v(Fn.$$.fragment,o),v($n.$$.fragment,o),v(lo.$$.fragment,o),v(Cn.$$.fragment,o),v(co.$$.fragment,o),v(On.$$.fragment,o),v(An.$$.fragment,o),v(Pn.$$.fragment,o),v(uo.$$.fragment,o),v(Bn.$$.fragment,o),v(po.$$.fragment,o),v(Gn.$$.fragment,o),Ir=!0)},o(o){T(E.$$.fragment,o),T(te.$$.fragment,o),T(yo.$$.fragment,o),T(Eo.$$.fragment,o),T(Lo.$$.fragment,o),T(Do.$$.fragment,o),T(Fo.$$.fragment,o),T($o.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(Co.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Qo.$$.fragment,o),T(Ho.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Ro.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Xo.$$.fragment,o),T(Jo.$$.fragment,o),T(Zo.$$.fragment,o),T(Yo.$$.fragment,o),T(nn.$$.fragment,o),T(eo.$$.fragment,o),T(sn.$$.fragment,o),T(an.$$.fragment,o),T(rn.$$.fragment,o),T(hn.$$.fragment,o),T(oo.$$.fragment,o),T(un.$$.fragment,o),T(pn.$$.fragment,o),T(fn.$$.fragment,o),T(mn.$$.fragment,o),T(vn.$$.fragment,o),T(so.$$.fragment,o),T(Tn.$$.fragment,o),T(kn.$$.fragment,o),T(wn.$$.fragment,o),T(yn.$$.fragment,o),T(Dn.$$.fragment,o),T(ro.$$.fragment,o),T(zn.$$.fragment,o),T(Fn.$$.fragment,o),T($n.$$.fragment,o),T(lo.$$.fragment,o),T(Cn.$$.fragment,o),T(co.$$.fragment,o),T(On.$$.fragment,o),T(An.$$.fragment,o),T(Pn.$$.fragment,o),T(uo.$$.fragment,o),T(Bn.$$.fragment,o),T(po.$$.fragment,o),T(Gn.$$.fragment,o),Ir=!1},d(o){t(p),o&&t(L),o&&t(m),k(E),o&&t(me),o&&t(z),k(te),o&&t(Me),o&&t(B),o&&t(A),o&&t(_e),o&&t(Se),o&&t(ge),o&&t(Ce),o&&t(C),o&&t(Y),o&&t($),o&&t(ur),o&&t(Nt),o&&t(pr),o&&t(ct),k(yo),o&&t(fr),o&&t(O),k(Eo),k(Lo),k(Do),k(Fo),k($o),o&&t(mr),o&&t(pt),k(xo),o&&t(_r),o&&t(P),k(Mo),k(Co),k(Ao),k(No),o&&t(gr),o&&t(ft),k(jo),o&&t(br),o&&t(Fe),k(Io),o&&t(vr),o&&t(mt),k(Qo),o&&t(Tr),o&&t(_t),k(Ho),o&&t(kr),o&&t(gt),k(Wo),o&&t(wr),o&&t(bt),k(Uo),o&&t(yr),o&&t(vt),k(Ro),o&&t(Er),o&&t(Tt),k(Vo),o&&t(qr),o&&t(kt),k(Ko),o&&t(Lr),o&&t(wt),k(Xo),o&&t(Dr),o&&t(yt),k(Jo),o&&t(zr),o&&t(Et),k(Zo),o&&t(Fr),o&&t($e),k(Yo),k(nn),k(eo),k(sn),o&&t($r),o&&t(Lt),k(an),o&&t(xr),o&&t(xe),k(rn),k(hn),k(oo),k(un),k(pn),o&&t(Mr),o&&t(zt),k(fn),o&&t(Sr),o&&t(le),k(mn),k(vn),k(so),k(Tn),k(kn),o&&t(Cr),o&&t($t),k(wn),o&&t(Or),o&&t(ce),k(yn),k(Dn),k(ro),k(zn),o&&t(Ar),o&&t(St),k(Fn),o&&t(Pr),o&&t(he),k($n),k(lo),k(Cn),k(co),k(On),o&&t(Nr),o&&t(Ot),k(An),o&&t(jr),o&&t(ue),k(Pn),k(uo),k(Bn),k(po),k(Gn)}}}const jm={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function Im(j,p,L){let{fw:m}=p;return j.$$set=w=>{"fw"in w&&L(0,m=w.fw)},[m]}class Rm extends Lm{constructor(p){super();Dm(this,p,Im,Nm,zm,{fw:0})}}export{Rm as default,jm as metadata};
