import{S as af,i as rf,s as df,e as a,k as i,w as _,t as n,M as lf,c as r,d as t,m as l,a as d,x as g,h as s,b as c,F as e,g as h,y as v,q as T,o as k,B as b}from"../../chunks/vendor-ab4e3193.js";import{T as lo}from"../../chunks/Tip-b5c6375a.js";import{D as M}from"../../chunks/Docstring-b69c0bd4.js";import{C as co}from"../../chunks/CodeBlock-516df0c5.js";import{I as Ce}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function cf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function hf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function pf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function uf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function ff(N){let u,q,m,w,L,E,y,D,Oe,pe,z,J,H,Y,Pe,R,Ae,Fe,I,W,ee,ye,S,O,ue,te,$e,fe,U,Ne,xe,C,je,Z,$,x,B,Ie,Be,A,Ge,oe,Ee;return{c(){u=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=i(),w=a("ul"),L=a("li"),E=n("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=a("li"),Oe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=i(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Y=n("tf.keras.Model.fit"),Pe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),R=a("code"),Ae=n("model(inputs)"),Fe=n("."),I=i(),W=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ye=i(),S=a("ul"),O=a("li"),ue=n("a single Tensor with "),te=a("code"),$e=n("input_ids"),fe=n(" only and nothing else: "),U=a("code"),Ne=n("model(input_ids)"),xe=i(),C=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),$=n("model([input_ids, attention_mask])"),x=n(" or "),B=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),Be=i(),A=a("li"),Ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=a("code"),Ee=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=r(f,"P",{});var F=d(u);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=r(f,"UL",{});var ne=d(w);L=r(ne,"LI",{});var ot=d(L);E=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),y=l(ne),D=r(ne,"LI",{});var nt=d(D);Oe=s(nt,"having all inputs as a list, tuple or dict in the first positional arguments."),nt.forEach(t),ne.forEach(t),pe=l(f),z=r(f,"P",{});var j=d(z);J=s(j,"This second option is useful when using "),H=r(j,"CODE",{});var st=d(H);Y=s(st,"tf.keras.Model.fit"),st.forEach(t),Pe=s(j,` method which currently requires having all
the tensors in the first argument of the model call function: `),R=r(j,"CODE",{});var at=d(R);Ae=s(at,"model(inputs)"),at.forEach(t),Fe=s(j,"."),j.forEach(t),I=l(f),W=r(f,"P",{});var Me=d(W);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Me.forEach(t),ye=l(f),S=r(f,"UL",{});var V=d(S);O=r(V,"LI",{});var se=d(O);ue=s(se,"a single Tensor with "),te=r(se,"CODE",{});var Se=d(te);$e=s(Se,"input_ids"),Se.forEach(t),fe=s(se," only and nothing else: "),U=r(se,"CODE",{});var rt=d(U);Ne=s(rt,"model(input_ids)"),rt.forEach(t),se.forEach(t),xe=l(V),C=r(V,"LI",{});var ae=d(C);je=s(ae,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(ae,"CODE",{});var dt=d(Z);$=s(dt,"model([input_ids, attention_mask])"),dt.forEach(t),x=s(ae," or "),B=r(ae,"CODE",{});var re=d(B);Ie=s(re,"model([input_ids, attention_mask, token_type_ids])"),re.forEach(t),ae.forEach(t),Be=l(V),A=r(V,"LI",{});var Qe=d(A);Ge=s(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=r(Qe,"CODE",{});var He=d(oe);Ee=s(He,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),He.forEach(t),Qe.forEach(t),V.forEach(t)},m(f,F){h(f,u,F),e(u,q),h(f,m,F),h(f,w,F),e(w,L),e(L,E),e(w,y),e(w,D),e(D,Oe),h(f,pe,F),h(f,z,F),e(z,J),e(z,H),e(H,Y),e(z,Pe),e(z,R),e(R,Ae),e(z,Fe),h(f,I,F),h(f,W,F),e(W,ee),h(f,ye,F),h(f,S,F),e(S,O),e(O,ue),e(O,te),e(te,$e),e(O,fe),e(O,U),e(U,Ne),e(S,xe),e(S,C),e(C,je),e(C,Z),e(Z,$),e(C,x),e(C,B),e(B,Ie),e(S,Be),e(S,A),e(A,Ge),e(A,oe),e(oe,Ee)},d(f){f&&t(u),f&&t(m),f&&t(w),f&&t(pe),f&&t(z),f&&t(I),f&&t(W),f&&t(ye),f&&t(S)}}}function mf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function _f(N){let u,q,m,w,L,E,y,D,Oe,pe,z,J,H,Y,Pe,R,Ae,Fe,I,W,ee,ye,S,O,ue,te,$e,fe,U,Ne,xe,C,je,Z,$,x,B,Ie,Be,A,Ge,oe,Ee;return{c(){u=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),m=i(),w=a("ul"),L=a("li"),E=n("having all inputs as keyword arguments (like PyTorch models), or"),y=i(),D=a("li"),Oe=n("having all inputs as a list, tuple or dict in the first positional arguments."),pe=i(),z=a("p"),J=n("This second option is useful when using "),H=a("code"),Y=n("tf.keras.Model.fit"),Pe=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),R=a("code"),Ae=n("model(inputs)"),Fe=n("."),I=i(),W=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ye=i(),S=a("ul"),O=a("li"),ue=n("a single Tensor with "),te=a("code"),$e=n("input_ids"),fe=n(" only and nothing else: "),U=a("code"),Ne=n("model(input_ids)"),xe=i(),C=a("li"),je=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),$=n("model([input_ids, attention_mask])"),x=n(" or "),B=a("code"),Ie=n("model([input_ids, attention_mask, token_type_ids])"),Be=i(),A=a("li"),Ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=a("code"),Ee=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){u=r(f,"P",{});var F=d(u);q=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),m=l(f),w=r(f,"UL",{});var ne=d(w);L=r(ne,"LI",{});var ot=d(L);E=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(t),y=l(ne),D=r(ne,"LI",{});var nt=d(D);Oe=s(nt,"having all inputs as a list, tuple or dict in the first positional arguments."),nt.forEach(t),ne.forEach(t),pe=l(f),z=r(f,"P",{});var j=d(z);J=s(j,"This second option is useful when using "),H=r(j,"CODE",{});var st=d(H);Y=s(st,"tf.keras.Model.fit"),st.forEach(t),Pe=s(j,` method which currently requires having all
the tensors in the first argument of the model call function: `),R=r(j,"CODE",{});var at=d(R);Ae=s(at,"model(inputs)"),at.forEach(t),Fe=s(j,"."),j.forEach(t),I=l(f),W=r(f,"P",{});var Me=d(W);ee=s(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Me.forEach(t),ye=l(f),S=r(f,"UL",{});var V=d(S);O=r(V,"LI",{});var se=d(O);ue=s(se,"a single Tensor with "),te=r(se,"CODE",{});var Se=d(te);$e=s(Se,"input_ids"),Se.forEach(t),fe=s(se," only and nothing else: "),U=r(se,"CODE",{});var rt=d(U);Ne=s(rt,"model(input_ids)"),rt.forEach(t),se.forEach(t),xe=l(V),C=r(V,"LI",{});var ae=d(C);je=s(ae,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(ae,"CODE",{});var dt=d(Z);$=s(dt,"model([input_ids, attention_mask])"),dt.forEach(t),x=s(ae," or "),B=r(ae,"CODE",{});var re=d(B);Ie=s(re,"model([input_ids, attention_mask, token_type_ids])"),re.forEach(t),ae.forEach(t),Be=l(V),A=r(V,"LI",{});var Qe=d(A);Ge=s(Qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),oe=r(Qe,"CODE",{});var He=d(oe);Ee=s(He,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),He.forEach(t),Qe.forEach(t),V.forEach(t)},m(f,F){h(f,u,F),e(u,q),h(f,m,F),h(f,w,F),e(w,L),e(L,E),e(w,y),e(w,D),e(D,Oe),h(f,pe,F),h(f,z,F),e(z,J),e(z,H),e(H,Y),e(z,Pe),e(z,R),e(R,Ae),e(z,Fe),h(f,I,F),h(f,W,F),e(W,ee),h(f,ye,F),h(f,S,F),e(S,O),e(O,ue),e(O,te),e(te,$e),e(O,fe),e(O,U),e(U,Ne),e(S,xe),e(S,C),e(C,je),e(C,Z),e(Z,$),e(C,x),e(C,B),e(B,Ie),e(S,Be),e(S,A),e(A,Ge),e(A,oe),e(oe,Ee)},d(f){f&&t(u),f&&t(m),f&&t(w),f&&t(pe),f&&t(z),f&&t(I),f&&t(W),f&&t(ye),f&&t(S)}}}function gf(N){let u,q,m,w,L;return{c(){u=a("p"),q=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=a("code"),w=n("Module"),L=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(E){u=r(E,"P",{});var y=d(u);q=s(y,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),m=r(y,"CODE",{});var D=d(m);w=s(D,"Module"),D.forEach(t),L=s(y,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),y.forEach(t)},m(E,y){h(E,u,y),e(u,q),e(u,m),e(m,w),e(u,L)},d(E){E&&t(u)}}}function vf(N){let u,q,m,w,L,E,y,D,Oe,pe,z,J,H,Y,Pe,R,Ae,Fe,I,W,ee,ye,S,O,ue,te,$e,fe,U,Ne,xe,C,je,Z,$,x,B,Ie,Be,A,Ge,oe,Ee,f,F,ne,ot,nt,j,st,at,Me,V,se,Se,rt,ae,dt,re,Qe,He,Zr,Kr,gs,Yr,ed,td,Le,od,vs,nd,sd,Ts,ad,rd,Sn,dd,id,ks,ld,cd,hd,X,pd,bs,ud,fd,ws,md,_d,Cn,gd,vd,ys,Td,kd,Es,bd,wd,Ls,yd,Ed,Ld,it,qd,qs,Dd,zd,Ds,Fd,$d,xd,ho,Md,po,Sd,Cd,Od,uo,Pd,fo,Ad,Nd,Oa,Pt,jd,mo,Id,Bd,Pa,lt,At,zs,_o,Gd,Fs,Qd,Aa,Re,go,Hd,ct,Rd,On,Wd,Ud,vo,Vd,Xd,Jd,ht,Zd,Pn,Kd,Yd,An,ei,ti,Na,pt,Nt,$s,To,oi,xs,ni,ja,P,ko,si,Ms,ai,ri,jt,Nn,di,ii,jn,li,ci,hi,bo,pi,In,ui,fi,mi,We,wo,_i,Ss,gi,vi,yo,Bn,Ti,Cs,ki,bi,Gn,wi,Os,yi,Ei,It,Eo,Li,Lo,qi,Ps,Di,zi,Fi,Bt,qo,$i,As,xi,Mi,Ns,Ia,ut,Gt,js,Do,Si,Is,Ci,Ba,qe,zo,Oi,Fo,Pi,Bs,Ai,Ni,ji,Qt,Qn,Ii,Bi,Hn,Gi,Qi,Hi,$o,Ri,Rn,Wi,Ui,Ga,ft,Ht,Gs,xo,Vi,Qs,Xi,Qa,mt,Mo,Ji,Hs,Zi,Ha,_t,So,Ki,Rs,Yi,Ra,gt,Co,el,Ws,tl,Wa,vt,Oo,ol,Us,nl,Ua,Tt,Po,sl,Vs,al,Va,kt,Ao,rl,Xs,dl,Xa,bt,No,il,Js,ll,Ja,wt,jo,cl,Zs,hl,Za,yt,Rt,Ks,Io,pl,Ys,ul,Ka,De,Bo,fl,Go,ml,Wn,_l,gl,vl,Qo,Tl,Ho,kl,bl,wl,me,Ro,yl,Et,El,Un,Ll,ql,ea,Dl,zl,Fl,Wt,$l,ta,xl,Ml,Wo,Ya,Lt,Ut,oa,Uo,Sl,na,Cl,er,ze,Vo,Ol,Xo,Pl,Vn,Al,Nl,jl,Jo,Il,Zo,Bl,Gl,Ql,G,Ko,Hl,qt,Rl,Xn,Wl,Ul,sa,Vl,Xl,Jl,Vt,Zl,aa,Kl,Yl,Yo,ec,ra,tc,oc,en,tr,Dt,Xt,da,tn,nc,ia,sc,or,de,on,ac,la,rc,dc,nn,ic,Jn,lc,cc,hc,sn,pc,an,uc,fc,mc,Q,rn,_c,zt,gc,Zn,vc,Tc,ca,kc,bc,wc,Jt,yc,ha,Ec,Lc,dn,qc,pa,Dc,zc,ln,nr,Ft,Zt,ua,cn,Fc,fa,$c,sr,ie,hn,xc,$t,Mc,ma,Sc,Cc,_a,Oc,Pc,Ac,pn,Nc,Kn,jc,Ic,Bc,un,Gc,fn,Qc,Hc,Rc,_e,mn,Wc,xt,Uc,Yn,Vc,Xc,ga,Jc,Zc,Kc,Kt,Yc,va,eh,th,_n,ar,Mt,Yt,Ta,gn,oh,ka,nh,rr,le,vn,sh,Tn,ah,es,rh,dh,ih,kn,lh,bn,ch,hh,ph,eo,uh,ge,wn,fh,St,mh,ts,_h,gh,ba,vh,Th,kh,to,bh,wa,wh,yh,yn,dr,Ct,oo,ya,En,Eh,Ea,Lh,ir,ce,Ln,qh,qn,Dh,os,zh,Fh,$h,Dn,xh,zn,Mh,Sh,Ch,no,Oh,ve,Fn,Ph,Ot,Ah,ns,Nh,jh,La,Ih,Bh,Gh,so,Qh,qa,Hh,Rh,$n,lr;return E=new Ce({}),Y=new Ce({}),_o=new Ce({}),go=new M({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/configuration_led.py#L31",parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated<em>normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.
decoder<em>layerdrop &#x2014; (<code>float</code>, _optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)</p>
<p>Example &#x2014;:`,name:"use_cache"}]}}),To=new Ce({}),ko=new M({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/tokenization_led.py#L39"}}),wo=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/roberta/tokenization_roberta.py#L174",parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/roberta/tokenization_roberta.py#L199",parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qo=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/roberta/tokenization_roberta.py#L226",parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Do=new Ce({}),zo=new M({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/tokenization_led_fast.py#L40"}}),xo=new Ce({}),Mo=new M({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L1110",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),So=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L1154",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Co=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L1222",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Oo=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L1289",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Po=new M({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L1356",parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Ao=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L1307",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),No=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L1350",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),jo=new M({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"past_key_values",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"decoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"cross_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_last_hidden_state",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"encoder_global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L1418",parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"encoder_global_attentions"}]}}),Io=new Ce({}),Bo=new M({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2151",parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new M({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2178",parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wt=new lo({props:{$$slots:{default:[cf]},$$scope:{ctx:N}}}),Wo=new co({props:{code:`from transformers import LEDTokenizer, LEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Uo=new Ce({}),Vo=new M({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2274",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ko=new M({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2318",parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new lo({props:{$$slots:{default:[hf]},$$scope:{ctx:N}}}),Yo=new co({props:{code:`from transformers import LEDTokenizer, LEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),en=new co({props:{code:`import torch
from transformers import LEDTokenizer, LEDForConditionalGeneration

model = LEDForConditionalGeneration.from_pretrained('allenai/led-large-16384-arxiv')
tokenizer = LEDTokenizer.from_pretrained('allenai/led-large-16384-arxiv')

ARTICLE_TO_SUMMARIZE = '''Transformers (Vaswani et al., 2017) have achieved state-of-the-art
results in a wide range of natural language tasks including generative
language modeling (Dai et al., 2019; Radford et al., 2019) and discriminative
language understanding (Devlin et al., 2019). This success is partly due to
the self-attention component which enables the network to capture contextual
information from the entire sequence. While powerful, the memory and computational
requirements of self-attention grow quadratically with sequence length, making
it infeasible (or very expensive) to process long sequences.
To address this limitation, we present Longformer, a modified Transformer
architecture with a self-attention operation that scales linearly with the
sequence length, making it versatile for processing long documents (Fig 1). This
is an advantage for natural language tasks such as long document classification,
question answering (QA), and coreference resolution, where existing approaches
partition or shorten the long context into smaller sequences that fall within the
typical 512 token limit of BERT-style pretrained models. Such partitioning could
potentially result in loss of important cross-partition information, and to
mitigate this problem, existing methods often rely on complex architectures to
address such interactions. On the other hand, our proposed Longformer is able to
build contextual representations of the entire context using multiple layers of
attention, reducing the need for task-specific architectures.'''
inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors='pt')

# Global attention on the first token (cf. Beltagy et al. 2020)
global_attention_mask = torch.zeros_like(inputs)
global_attention_mask[:, 0] = 1

# Generate Summary
summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask,
                             num_beams=3, max_length=32, early_stopping=True)
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=True)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&#x27;allenai/led-large-16384-arxiv&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-large-16384-arxiv&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>results in a wide range of natural language tasks including generative
<span class="hljs-meta">... </span>language modeling (Dai et al., 2019; Radford et al., 2019) and discriminative
<span class="hljs-meta">... </span>language understanding (Devlin et al., 2019). This success is partly due to
<span class="hljs-meta">... </span>the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>information from the entire sequence. While powerful, the memory and computational
<span class="hljs-meta">... </span>requirements of self-attention grow quadratically with sequence length, making
<span class="hljs-meta">... </span>it infeasible (or very expensive) to process long sequences.
...
<span class="hljs-meta">... </span>To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>architecture with a self-attention operation that scales linearly with the
<span class="hljs-meta">... </span>sequence length, making it versatile for processing long documents (Fig 1). This
<span class="hljs-meta">... </span>is an advantage for natural language tasks such as long document classification,
<span class="hljs-meta">... </span>question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>partition or shorten the long context into smaller sequences that fall within the
<span class="hljs-meta">... </span>typical 512 token limit of BERT-style pretrained models. Such partitioning could
<span class="hljs-meta">... </span>potentially result in loss of important cross-partition information, and to
<span class="hljs-meta">... </span>mitigate this problem, existing methods often rely on complex architectures to
<span class="hljs-meta">... </span>address such interactions. On the other hand, our proposed Longformer is able to
<span class="hljs-meta">... </span>build contextual representations of the entire context using multiple layers of
<span class="hljs-meta">... </span>attention, reducing the need for task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask,
<span class="hljs-meta">... </span>                             num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>, early_stopping=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`}}),tn=new Ce({}),on=new M({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2460",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rn=new M({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2473",parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new lo({props:{$$slots:{default:[pf]},$$scope:{ctx:N}}}),dn=new co({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
import torch

tokenizer = LEDTokenizer.from_pretrained('allenai/led-base-16384')
model = LEDForSequenceClassification.from_pretrained('allenai/led-base-16384')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer, LEDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;allenai/led-base-16384&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ln=new co({props:{code:`from transformers import LEDTokenizer, LEDForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),cn=new Ce({}),hn=new M({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2588",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new M({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_led.py#L2600",parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
instead of all \`<code>decoder_input_ids\`\`\` of shape </code>(batch<em>size, sequence_length)<code>. - **inputs_embeds** (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)\`, _optional</em>) &#x2014; Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new lo({props:{$$slots:{default:[uf]},$$scope:{ctx:N}}}),_n=new co({props:{code:`from transformers import LEDTokenizer, LEDForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),gn=new Ce({}),vn=new M({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L2219",parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),eo=new lo({props:{$$slots:{default:[ff]},$$scope:{ctx:N}}}),wn=new M({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput, NoneType] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L2231",parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>TFLEDSeq2SeqModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),to=new lo({props:{$$slots:{default:[mf]},$$scope:{ctx:N}}}),yn=new co({props:{code:`from transformers import LEDTokenizer, TFLEDModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),En=new Ce({}),Ln=new M({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L2324",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"}]}}),no=new lo({props:{$$slots:{default:[_f]},$$scope:{ctx:N}}}),Fn=new M({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput] = None"},{name:"global_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.14.1/src/transformers/models/led/modeling_tf_led.py#L2357",parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.14.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
<a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.14.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
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
Whether or not to return a <a href="/docs/transformers/v4.14.1/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>TFLEDSeq2SeqLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDConfig"
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
  href="/docs/transformers/v4.14.1/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),so=new lo({props:{$$slots:{default:[gf]},$$scope:{ctx:N}}}),$n=new co({props:{code:`from transformers import LEDTokenizer, TFLEDForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),{c(){u=a("meta"),q=i(),m=a("h1"),w=a("a"),L=a("span"),_(E.$$.fragment),y=i(),D=a("span"),Oe=n("LED"),pe=i(),z=a("h2"),J=a("a"),H=a("span"),_(Y.$$.fragment),Pe=i(),R=a("span"),Ae=n("Overview"),Fe=i(),I=a("p"),W=n("The LED model was proposed in "),ee=a("a"),ye=n("Longformer: The Long-Document Transformer"),S=n(` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),O=i(),ue=a("p"),te=n("The abstract from the paper is the following:"),$e=i(),fe=a("p"),U=a("em"),Ne=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),xe=i(),C=a("p"),je=n("Tips:"),Z=i(),$=a("ul"),x=a("li"),B=a("a"),Ie=n("LEDForConditionalGeneration"),Be=n(` is an extension of
`),A=a("a"),Ge=n("BartForConditionalGeneration"),oe=n(" exchanging the traditional "),Ee=a("em"),f=n("self-attention"),F=n(` layer with
`),ne=a("em"),ot=n("Longformer"),nt=n("\u2019s "),j=a("em"),st=n("chunked self-attention"),at=n(" layer. "),Me=a("a"),V=n("LEDTokenizer"),se=n(` is an alias of
`),Se=a("a"),rt=n("BartTokenizer"),ae=n("."),dt=i(),re=a("li"),Qe=n("LED works very well on long-range "),He=a("em"),Zr=n("sequence-to-sequence"),Kr=n(" tasks where the "),gs=a("code"),Yr=n("input_ids"),ed=n(` largely exceed a length of
1024 tokens.`),td=i(),Le=a("li"),od=n("LED pads the "),vs=a("code"),nd=n("input_ids"),sd=n(" to be a multiple of "),Ts=a("code"),ad=n("config.attention_window"),rd=n(` if required. Therefore a small speed-up is
gained, when `),Sn=a("a"),dd=n("LEDTokenizer"),id=n(" is used with the "),ks=a("code"),ld=n("pad_to_multiple_of"),cd=n(" argument."),hd=i(),X=a("li"),pd=n("LED makes use of "),bs=a("em"),ud=n("global attention"),fd=n(" by means of the "),ws=a("code"),md=n("global_attention_mask"),_d=n(` (see
`),Cn=a("a"),gd=n("LongformerModel"),vd=n("). For summarization, it is advised to put "),ys=a("em"),Td=n("global attention"),kd=n(` only on the first
`),Es=a("code"),bd=n("<s>"),wd=n(" token. For question answering, it is advised to put "),Ls=a("em"),yd=n("global attention"),Ed=n(" on all tokens of the question."),Ld=i(),it=a("li"),qd=n("To fine-tune LED on all 16384, it is necessary to enable "),qs=a("em"),Dd=n("gradient checkpointing"),zd=n(` by executing
`),Ds=a("code"),Fd=n("model.gradient_checkpointing_enable()"),$d=n("."),xd=i(),ho=a("li"),Md=n("A notebook showing how to evaluate LED, can be accessed "),po=a("a"),Sd=n("here"),Cd=n("."),Od=i(),uo=a("li"),Pd=n("A notebook showing how to fine-tune LED, can be accessed "),fo=a("a"),Ad=n("here"),Nd=n("."),Oa=i(),Pt=a("p"),jd=n("This model was contributed by "),mo=a("a"),Id=n("patrickvonplaten"),Bd=n("."),Pa=i(),lt=a("h2"),At=a("a"),zs=a("span"),_(_o.$$.fragment),Gd=i(),Fs=a("span"),Qd=n("LEDConfig"),Aa=i(),Re=a("div"),_(go.$$.fragment),Hd=i(),ct=a("p"),Rd=n("This is the configuration class to store the configuration of a "),On=a("a"),Wd=n("LEDModel"),Ud=n(`. It is used to
instantiate an LED model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LED `),vo=a("a"),Vd=n("allenai/led-base-16384"),Xd=n(" architecture."),Jd=i(),ht=a("p"),Zd=n("Configuration objects inherit from "),Pn=a("a"),Kd=n("PretrainedConfig"),Yd=n(` and can be used to control the model
outputs. Read the documentation from `),An=a("a"),ei=n("PretrainedConfig"),ti=n(" for more information."),Na=i(),pt=a("h2"),Nt=a("a"),$s=a("span"),_(To.$$.fragment),oi=i(),xs=a("span"),ni=n("LEDTokenizer"),ja=i(),P=a("div"),_(ko.$$.fragment),si=i(),Ms=a("p"),ai=n("Construct a LED tokenizer."),ri=i(),jt=a("p"),Nn=a("a"),di=n("LEDTokenizer"),ii=n(" is identical to "),jn=a("a"),li=n("BartTokenizer"),ci=n(` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),hi=i(),bo=a("p"),pi=n("Refer to superclass "),In=a("a"),ui=n("BartTokenizer"),fi=n(` for usage examples and documentation concerning
parameters.`),mi=i(),We=a("div"),_(wo.$$.fragment),_i=i(),Ss=a("p"),gi=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),vi=i(),yo=a("ul"),Bn=a("li"),Ti=n("single sequence: "),Cs=a("code"),ki=n("<s> X </s>"),bi=i(),Gn=a("li"),wi=n("pair of sequences: "),Os=a("code"),yi=n("<s> A </s></s> B </s>"),Ei=i(),It=a("div"),_(Eo.$$.fragment),Li=i(),Lo=a("p"),qi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=a("code"),Di=n("prepare_for_model"),zi=n(" method."),Fi=i(),Bt=a("div"),_(qo.$$.fragment),$i=i(),As=a("p"),xi=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Mi=i(),Ns=a("div"),Ia=i(),ut=a("h2"),Gt=a("a"),js=a("span"),_(Do.$$.fragment),Si=i(),Is=a("span"),Ci=n("LEDTokenizerFast"),Ba=i(),qe=a("div"),_(zo.$$.fragment),Oi=i(),Fo=a("p"),Pi=n("Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Bs=a("em"),Ai=n("tokenizers"),Ni=n(" library)."),ji=i(),Qt=a("p"),Qn=a("a"),Ii=n("LEDTokenizerFast"),Bi=n(" is identical to "),Hn=a("a"),Gi=n("BartTokenizerFast"),Qi=n(` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),Hi=i(),$o=a("p"),Ri=n("Refer to superclass "),Rn=a("a"),Wi=n("BartTokenizerFast"),Ui=n(` for usage examples and documentation concerning
parameters.`),Ga=i(),ft=a("h2"),Ht=a("a"),Gs=a("span"),_(xo.$$.fragment),Vi=i(),Qs=a("span"),Xi=n("LED specific outputs"),Qa=i(),mt=a("div"),_(Mo.$$.fragment),Ji=i(),Hs=a("p"),Zi=n("Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Ha=i(),_t=a("div"),_(So.$$.fragment),Ki=i(),Rs=a("p"),Yi=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Ra=i(),gt=a("div"),_(Co.$$.fragment),el=i(),Ws=a("p"),tl=n("Base class for sequence-to-sequence language models outputs."),Wa=i(),vt=a("div"),_(Oo.$$.fragment),ol=i(),Us=a("p"),nl=n("Base class for outputs of sequence-to-sequence sentence classification models."),Ua=i(),Tt=a("div"),_(Po.$$.fragment),sl=i(),Vs=a("p"),al=n("Base class for outputs of sequence-to-sequence question answering models."),Va=i(),kt=a("div"),_(Ao.$$.fragment),rl=i(),Xs=a("p"),dl=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Xa=i(),bt=a("div"),_(No.$$.fragment),il=i(),Js=a("p"),ll=n(`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Ja=i(),wt=a("div"),_(jo.$$.fragment),cl=i(),Zs=a("p"),hl=n("Base class for sequence-to-sequence language models outputs."),Za=i(),yt=a("h2"),Rt=a("a"),Ks=a("span"),_(Io.$$.fragment),pl=i(),Ys=a("span"),ul=n("LEDModel"),Ka=i(),De=a("div"),_(Bo.$$.fragment),fl=i(),Go=a("p"),ml=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Wn=a("a"),_l=n("PreTrainedModel"),gl=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),vl=i(),Qo=a("p"),Tl=n("This model is also a PyTorch "),Ho=a("a"),kl=n("torch.nn.Module"),bl=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),wl=i(),me=a("div"),_(Ro.$$.fragment),yl=i(),Et=a("p"),El=n("The "),Un=a("a"),Ll=n("LEDModel"),ql=n(" forward method, overrides the "),ea=a("code"),Dl=n("__call__"),zl=n(" special method."),Fl=i(),_(Wt.$$.fragment),$l=i(),ta=a("p"),xl=n("Example:"),Ml=i(),_(Wo.$$.fragment),Ya=i(),Lt=a("h2"),Ut=a("a"),oa=a("span"),_(Uo.$$.fragment),Sl=i(),na=a("span"),Cl=n("LEDForConditionalGeneration"),er=i(),ze=a("div"),_(Vo.$$.fragment),Ol=i(),Xo=a("p"),Pl=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vn=a("a"),Al=n("PreTrainedModel"),Nl=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),jl=i(),Jo=a("p"),Il=n("This model is also a PyTorch "),Zo=a("a"),Bl=n("torch.nn.Module"),Gl=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ql=i(),G=a("div"),_(Ko.$$.fragment),Hl=i(),qt=a("p"),Rl=n("The "),Xn=a("a"),Wl=n("LEDForConditionalGeneration"),Ul=n(" forward method, overrides the "),sa=a("code"),Vl=n("__call__"),Xl=n(" special method."),Jl=i(),_(Vt.$$.fragment),Zl=i(),aa=a("p"),Kl=n("Conditional generation example:"),Yl=i(),_(Yo.$$.fragment),ec=i(),ra=a("p"),tc=n("Summarization example:"),oc=i(),_(en.$$.fragment),tr=i(),Dt=a("h2"),Xt=a("a"),da=a("span"),_(tn.$$.fragment),nc=i(),ia=a("span"),sc=n("LEDForSequenceClassification"),or=i(),de=a("div"),_(on.$$.fragment),ac=i(),la=a("p"),rc=n(`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),dc=i(),nn=a("p"),ic=n("This model inherits from "),Jn=a("a"),lc=n("PreTrainedModel"),cc=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),hc=i(),sn=a("p"),pc=n("This model is also a PyTorch "),an=a("a"),uc=n("torch.nn.Module"),fc=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mc=i(),Q=a("div"),_(rn.$$.fragment),_c=i(),zt=a("p"),gc=n("The "),Zn=a("a"),vc=n("LEDForSequenceClassification"),Tc=n(" forward method, overrides the "),ca=a("code"),kc=n("__call__"),bc=n(" special method."),wc=i(),_(Jt.$$.fragment),yc=i(),ha=a("p"),Ec=n("Example of single-label classification:"),Lc=i(),_(dn.$$.fragment),qc=i(),pa=a("p"),Dc=n("Example of multi-label classification:"),zc=i(),_(ln.$$.fragment),nr=i(),Ft=a("h2"),Zt=a("a"),ua=a("span"),_(cn.$$.fragment),Fc=i(),fa=a("span"),$c=n("LEDForQuestionAnswering"),sr=i(),ie=a("div"),_(hn.$$.fragment),xc=i(),$t=a("p"),Mc=n(`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),ma=a("em"),Sc=n("span start logits"),Cc=n(" and "),_a=a("em"),Oc=n("span end logits"),Pc=n(")."),Ac=i(),pn=a("p"),Nc=n("This model inherits from "),Kn=a("a"),jc=n("PreTrainedModel"),Ic=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Bc=i(),un=a("p"),Gc=n("This model is also a PyTorch "),fn=a("a"),Qc=n("torch.nn.Module"),Hc=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Rc=i(),_e=a("div"),_(mn.$$.fragment),Wc=i(),xt=a("p"),Uc=n("The "),Yn=a("a"),Vc=n("LEDForQuestionAnswering"),Xc=n(" forward method, overrides the "),ga=a("code"),Jc=n("__call__"),Zc=n(" special method."),Kc=i(),_(Kt.$$.fragment),Yc=i(),va=a("p"),eh=n("Example:"),th=i(),_(_n.$$.fragment),ar=i(),Mt=a("h2"),Yt=a("a"),Ta=a("span"),_(gn.$$.fragment),oh=i(),ka=a("span"),nh=n("TFLEDModel"),rr=i(),le=a("div"),_(vn.$$.fragment),sh=i(),Tn=a("p"),ah=n(`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=a("a"),rh=n("TFPreTrainedModel"),dh=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ih=i(),kn=a("p"),lh=n("This model is also a "),bn=a("a"),ch=n("tf.keras.Model"),hh=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ph=i(),_(eo.$$.fragment),uh=i(),ge=a("div"),_(wn.$$.fragment),fh=i(),St=a("p"),mh=n("The "),ts=a("a"),_h=n("TFLEDModel"),gh=n(" forward method, overrides the "),ba=a("code"),vh=n("__call__"),Th=n(" special method."),kh=i(),_(to.$$.fragment),bh=i(),wa=a("p"),wh=n("Example:"),yh=i(),_(yn.$$.fragment),dr=i(),Ct=a("h2"),oo=a("a"),ya=a("span"),_(En.$$.fragment),Eh=i(),Ea=a("span"),Lh=n("TFLEDForConditionalGeneration"),ir=i(),ce=a("div"),_(Ln.$$.fragment),qh=i(),qn=a("p"),Dh=n(`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),os=a("a"),zh=n("TFPreTrainedModel"),Fh=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$h=i(),Dn=a("p"),xh=n("This model is also a "),zn=a("a"),Mh=n("tf.keras.Model"),Sh=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ch=i(),_(no.$$.fragment),Oh=i(),ve=a("div"),_(Fn.$$.fragment),Ph=i(),Ot=a("p"),Ah=n("The "),ns=a("a"),Nh=n("TFLEDForConditionalGeneration"),jh=n(" forward method, overrides the "),La=a("code"),Ih=n("__call__"),Bh=n(" special method."),Gh=i(),_(so.$$.fragment),Qh=i(),qa=a("p"),Hh=n("Examples:"),Rh=i(),_($n.$$.fragment),this.h()},l(o){const p=lf('[data-svelte="svelte-1phssyn"]',document.head);u=r(p,"META",{name:!0,content:!0}),p.forEach(t),q=l(o),m=r(o,"H1",{class:!0});var xn=d(m);w=r(xn,"A",{id:!0,class:!0,href:!0});var Da=d(w);L=r(Da,"SPAN",{});var za=d(L);g(E.$$.fragment,za),za.forEach(t),Da.forEach(t),y=l(xn),D=r(xn,"SPAN",{});var Fa=d(D);Oe=s(Fa,"LED"),Fa.forEach(t),xn.forEach(t),pe=l(o),z=r(o,"H2",{class:!0});var Mn=d(z);J=r(Mn,"A",{id:!0,class:!0,href:!0});var $a=d(J);H=r($a,"SPAN",{});var xa=d(H);g(Y.$$.fragment,xa),xa.forEach(t),$a.forEach(t),Pe=l(Mn),R=r(Mn,"SPAN",{});var Ma=d(R);Ae=s(Ma,"Overview"),Ma.forEach(t),Mn.forEach(t),Fe=l(o),I=r(o,"P",{});var cr=d(I);W=s(cr,"The LED model was proposed in "),ee=r(cr,"A",{href:!0,rel:!0});var Vh=d(ee);ye=s(Vh,"Longformer: The Long-Document Transformer"),Vh.forEach(t),S=s(cr,` by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`),cr.forEach(t),O=l(o),ue=r(o,"P",{});var Xh=d(ue);te=s(Xh,"The abstract from the paper is the following:"),Xh.forEach(t),$e=l(o),fe=r(o,"P",{});var Jh=d(fe);U=r(Jh,"EM",{});var Zh=d(U);Ne=s(Zh,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.`),Zh.forEach(t),Jh.forEach(t),xe=l(o),C=r(o,"P",{});var Kh=d(C);je=s(Kh,"Tips:"),Kh.forEach(t),Z=l(o),$=r(o,"UL",{});var Te=d($);x=r(Te,"LI",{});var he=d(x);B=r(he,"A",{href:!0});var Yh=d(B);Ie=s(Yh,"LEDForConditionalGeneration"),Yh.forEach(t),Be=s(he,` is an extension of
`),A=r(he,"A",{href:!0});var ep=d(A);Ge=s(ep,"BartForConditionalGeneration"),ep.forEach(t),oe=s(he," exchanging the traditional "),Ee=r(he,"EM",{});var tp=d(Ee);f=s(tp,"self-attention"),tp.forEach(t),F=s(he,` layer with
`),ne=r(he,"EM",{});var op=d(ne);ot=s(op,"Longformer"),op.forEach(t),nt=s(he,"\u2019s "),j=r(he,"EM",{});var np=d(j);st=s(np,"chunked self-attention"),np.forEach(t),at=s(he," layer. "),Me=r(he,"A",{href:!0});var sp=d(Me);V=s(sp,"LEDTokenizer"),sp.forEach(t),se=s(he,` is an alias of
`),Se=r(he,"A",{href:!0});var ap=d(Se);rt=s(ap,"BartTokenizer"),ap.forEach(t),ae=s(he,"."),he.forEach(t),dt=l(Te),re=r(Te,"LI",{});var ss=d(re);Qe=s(ss,"LED works very well on long-range "),He=r(ss,"EM",{});var rp=d(He);Zr=s(rp,"sequence-to-sequence"),rp.forEach(t),Kr=s(ss," tasks where the "),gs=r(ss,"CODE",{});var dp=d(gs);Yr=s(dp,"input_ids"),dp.forEach(t),ed=s(ss,` largely exceed a length of
1024 tokens.`),ss.forEach(t),td=l(Te),Le=r(Te,"LI",{});var Ue=d(Le);od=s(Ue,"LED pads the "),vs=r(Ue,"CODE",{});var ip=d(vs);nd=s(ip,"input_ids"),ip.forEach(t),sd=s(Ue," to be a multiple of "),Ts=r(Ue,"CODE",{});var lp=d(Ts);ad=s(lp,"config.attention_window"),lp.forEach(t),rd=s(Ue,` if required. Therefore a small speed-up is
gained, when `),Sn=r(Ue,"A",{href:!0});var cp=d(Sn);dd=s(cp,"LEDTokenizer"),cp.forEach(t),id=s(Ue," is used with the "),ks=r(Ue,"CODE",{});var hp=d(ks);ld=s(hp,"pad_to_multiple_of"),hp.forEach(t),cd=s(Ue," argument."),Ue.forEach(t),hd=l(Te),X=r(Te,"LI",{});var ke=d(X);pd=s(ke,"LED makes use of "),bs=r(ke,"EM",{});var pp=d(bs);ud=s(pp,"global attention"),pp.forEach(t),fd=s(ke," by means of the "),ws=r(ke,"CODE",{});var up=d(ws);md=s(up,"global_attention_mask"),up.forEach(t),_d=s(ke,` (see
`),Cn=r(ke,"A",{href:!0});var fp=d(Cn);gd=s(fp,"LongformerModel"),fp.forEach(t),vd=s(ke,"). For summarization, it is advised to put "),ys=r(ke,"EM",{});var mp=d(ys);Td=s(mp,"global attention"),mp.forEach(t),kd=s(ke,` only on the first
`),Es=r(ke,"CODE",{});var _p=d(Es);bd=s(_p,"<s>"),_p.forEach(t),wd=s(ke," token. For question answering, it is advised to put "),Ls=r(ke,"EM",{});var gp=d(Ls);yd=s(gp,"global attention"),gp.forEach(t),Ed=s(ke," on all tokens of the question."),ke.forEach(t),Ld=l(Te),it=r(Te,"LI",{});var as=d(it);qd=s(as,"To fine-tune LED on all 16384, it is necessary to enable "),qs=r(as,"EM",{});var vp=d(qs);Dd=s(vp,"gradient checkpointing"),vp.forEach(t),zd=s(as,` by executing
`),Ds=r(as,"CODE",{});var Tp=d(Ds);Fd=s(Tp,"model.gradient_checkpointing_enable()"),Tp.forEach(t),$d=s(as,"."),as.forEach(t),xd=l(Te),ho=r(Te,"LI",{});var hr=d(ho);Md=s(hr,"A notebook showing how to evaluate LED, can be accessed "),po=r(hr,"A",{href:!0,rel:!0});var kp=d(po);Sd=s(kp,"here"),kp.forEach(t),Cd=s(hr,"."),hr.forEach(t),Od=l(Te),uo=r(Te,"LI",{});var pr=d(uo);Pd=s(pr,"A notebook showing how to fine-tune LED, can be accessed "),fo=r(pr,"A",{href:!0,rel:!0});var bp=d(fo);Ad=s(bp,"here"),bp.forEach(t),Nd=s(pr,"."),pr.forEach(t),Te.forEach(t),Oa=l(o),Pt=r(o,"P",{});var ur=d(Pt);jd=s(ur,"This model was contributed by "),mo=r(ur,"A",{href:!0,rel:!0});var wp=d(mo);Id=s(wp,"patrickvonplaten"),wp.forEach(t),Bd=s(ur,"."),ur.forEach(t),Pa=l(o),lt=r(o,"H2",{class:!0});var fr=d(lt);At=r(fr,"A",{id:!0,class:!0,href:!0});var yp=d(At);zs=r(yp,"SPAN",{});var Ep=d(zs);g(_o.$$.fragment,Ep),Ep.forEach(t),yp.forEach(t),Gd=l(fr),Fs=r(fr,"SPAN",{});var Lp=d(Fs);Qd=s(Lp,"LEDConfig"),Lp.forEach(t),fr.forEach(t),Aa=l(o),Re=r(o,"DIV",{class:!0});var rs=d(Re);g(go.$$.fragment,rs),Hd=l(rs),ct=r(rs,"P",{});var ds=d(ct);Rd=s(ds,"This is the configuration class to store the configuration of a "),On=r(ds,"A",{href:!0});var qp=d(On);Wd=s(qp,"LEDModel"),qp.forEach(t),Ud=s(ds,`. It is used to
instantiate an LED model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LED `),vo=r(ds,"A",{href:!0,rel:!0});var Dp=d(vo);Vd=s(Dp,"allenai/led-base-16384"),Dp.forEach(t),Xd=s(ds," architecture."),ds.forEach(t),Jd=l(rs),ht=r(rs,"P",{});var is=d(ht);Zd=s(is,"Configuration objects inherit from "),Pn=r(is,"A",{href:!0});var zp=d(Pn);Kd=s(zp,"PretrainedConfig"),zp.forEach(t),Yd=s(is,` and can be used to control the model
outputs. Read the documentation from `),An=r(is,"A",{href:!0});var Fp=d(An);ei=s(Fp,"PretrainedConfig"),Fp.forEach(t),ti=s(is," for more information."),is.forEach(t),rs.forEach(t),Na=l(o),pt=r(o,"H2",{class:!0});var mr=d(pt);Nt=r(mr,"A",{id:!0,class:!0,href:!0});var $p=d(Nt);$s=r($p,"SPAN",{});var xp=d($s);g(To.$$.fragment,xp),xp.forEach(t),$p.forEach(t),oi=l(mr),xs=r(mr,"SPAN",{});var Mp=d(xs);ni=s(Mp,"LEDTokenizer"),Mp.forEach(t),mr.forEach(t),ja=l(o),P=r(o,"DIV",{class:!0});var K=d(P);g(ko.$$.fragment,K),si=l(K),Ms=r(K,"P",{});var Sp=d(Ms);ai=s(Sp,"Construct a LED tokenizer."),Sp.forEach(t),ri=l(K),jt=r(K,"P",{});var Sa=d(jt);Nn=r(Sa,"A",{href:!0});var Cp=d(Nn);di=s(Cp,"LEDTokenizer"),Cp.forEach(t),ii=s(Sa," is identical to "),jn=r(Sa,"A",{href:!0});var Op=d(jn);li=s(Op,"BartTokenizer"),Op.forEach(t),ci=s(Sa,` and runs end-to-end
tokenization: punctuation splitting and wordpiece.`),Sa.forEach(t),hi=l(K),bo=r(K,"P",{});var _r=d(bo);pi=s(_r,"Refer to superclass "),In=r(_r,"A",{href:!0});var Pp=d(In);ui=s(Pp,"BartTokenizer"),Pp.forEach(t),fi=s(_r,` for usage examples and documentation concerning
parameters.`),_r.forEach(t),mi=l(K),We=r(K,"DIV",{class:!0});var ls=d(We);g(wo.$$.fragment,ls),_i=l(ls),Ss=r(ls,"P",{});var Ap=d(Ss);gi=s(Ap,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Ap.forEach(t),vi=l(ls),yo=r(ls,"UL",{});var gr=d(yo);Bn=r(gr,"LI",{});var Wh=d(Bn);Ti=s(Wh,"single sequence: "),Cs=r(Wh,"CODE",{});var Np=d(Cs);ki=s(Np,"<s> X </s>"),Np.forEach(t),Wh.forEach(t),bi=l(gr),Gn=r(gr,"LI",{});var Uh=d(Gn);wi=s(Uh,"pair of sequences: "),Os=r(Uh,"CODE",{});var jp=d(Os);yi=s(jp,"<s> A </s></s> B </s>"),jp.forEach(t),Uh.forEach(t),gr.forEach(t),ls.forEach(t),Ei=l(K),It=r(K,"DIV",{class:!0});var vr=d(It);g(Eo.$$.fragment,vr),Li=l(vr),Lo=r(vr,"P",{});var Tr=d(Lo);qi=s(Tr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=r(Tr,"CODE",{});var Ip=d(Ps);Di=s(Ip,"prepare_for_model"),Ip.forEach(t),zi=s(Tr," method."),Tr.forEach(t),vr.forEach(t),Fi=l(K),Bt=r(K,"DIV",{class:!0});var kr=d(Bt);g(qo.$$.fragment,kr),$i=l(kr),As=r(kr,"P",{});var Bp=d(As);xi=s(Bp,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Bp.forEach(t),kr.forEach(t),Mi=l(K),Ns=r(K,"DIV",{class:!0}),d(Ns).forEach(t),K.forEach(t),Ia=l(o),ut=r(o,"H2",{class:!0});var br=d(ut);Gt=r(br,"A",{id:!0,class:!0,href:!0});var Gp=d(Gt);js=r(Gp,"SPAN",{});var Qp=d(js);g(Do.$$.fragment,Qp),Qp.forEach(t),Gp.forEach(t),Si=l(br),Is=r(br,"SPAN",{});var Hp=d(Is);Ci=s(Hp,"LEDTokenizerFast"),Hp.forEach(t),br.forEach(t),Ba=l(o),qe=r(o,"DIV",{class:!0});var ao=d(qe);g(zo.$$.fragment,ao),Oi=l(ao),Fo=r(ao,"P",{});var wr=d(Fo);Pi=s(wr,"Construct a \u201Cfast\u201D LED tokenizer (backed by HuggingFace\u2019s "),Bs=r(wr,"EM",{});var Rp=d(Bs);Ai=s(Rp,"tokenizers"),Rp.forEach(t),Ni=s(wr," library)."),wr.forEach(t),ji=l(ao),Qt=r(ao,"P",{});var Ca=d(Qt);Qn=r(Ca,"A",{href:!0});var Wp=d(Qn);Ii=s(Wp,"LEDTokenizerFast"),Wp.forEach(t),Bi=s(Ca," is identical to "),Hn=r(Ca,"A",{href:!0});var Up=d(Hn);Gi=s(Up,"BartTokenizerFast"),Up.forEach(t),Qi=s(Ca,` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),Ca.forEach(t),Hi=l(ao),$o=r(ao,"P",{});var yr=d($o);Ri=s(yr,"Refer to superclass "),Rn=r(yr,"A",{href:!0});var Vp=d(Rn);Wi=s(Vp,"BartTokenizerFast"),Vp.forEach(t),Ui=s(yr,` for usage examples and documentation concerning
parameters.`),yr.forEach(t),ao.forEach(t),Ga=l(o),ft=r(o,"H2",{class:!0});var Er=d(ft);Ht=r(Er,"A",{id:!0,class:!0,href:!0});var Xp=d(Ht);Gs=r(Xp,"SPAN",{});var Jp=d(Gs);g(xo.$$.fragment,Jp),Jp.forEach(t),Xp.forEach(t),Vi=l(Er),Qs=r(Er,"SPAN",{});var Zp=d(Qs);Xi=s(Zp,"LED specific outputs"),Zp.forEach(t),Er.forEach(t),Qa=l(o),mt=r(o,"DIV",{class:!0});var Lr=d(mt);g(Mo.$$.fragment,Lr),Ji=l(Lr),Hs=r(Lr,"P",{});var Kp=d(Hs);Zi=s(Kp,"Base class for LEDEncoder\u2019s outputs, with potential hidden states, local and global attentions."),Kp.forEach(t),Lr.forEach(t),Ha=l(o),_t=r(o,"DIV",{class:!0});var qr=d(_t);g(So.$$.fragment,qr),Ki=l(qr),Rs=r(qr,"P",{});var Yp=d(Rs);Yi=s(Yp,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),Yp.forEach(t),qr.forEach(t),Ra=l(o),gt=r(o,"DIV",{class:!0});var Dr=d(gt);g(Co.$$.fragment,Dr),el=l(Dr),Ws=r(Dr,"P",{});var eu=d(Ws);tl=s(eu,"Base class for sequence-to-sequence language models outputs."),eu.forEach(t),Dr.forEach(t),Wa=l(o),vt=r(o,"DIV",{class:!0});var zr=d(vt);g(Oo.$$.fragment,zr),ol=l(zr),Us=r(zr,"P",{});var tu=d(Us);nl=s(tu,"Base class for outputs of sequence-to-sequence sentence classification models."),tu.forEach(t),zr.forEach(t),Ua=l(o),Tt=r(o,"DIV",{class:!0});var Fr=d(Tt);g(Po.$$.fragment,Fr),sl=l(Fr),Vs=r(Fr,"P",{});var ou=d(Vs);al=s(ou,"Base class for outputs of sequence-to-sequence question answering models."),ou.forEach(t),Fr.forEach(t),Va=l(o),kt=r(o,"DIV",{class:!0});var $r=d(kt);g(Ao.$$.fragment,$r),rl=l($r),Xs=r($r,"P",{});var nu=d(Xs);dl=s(nu,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),nu.forEach(t),$r.forEach(t),Xa=l(o),bt=r(o,"DIV",{class:!0});var xr=d(bt);g(No.$$.fragment,xr),il=l(xr),Js=r(xr,"P",{});var su=d(Js);ll=s(su,`Base class for model encoder\u2019s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`),su.forEach(t),xr.forEach(t),Ja=l(o),wt=r(o,"DIV",{class:!0});var Mr=d(wt);g(jo.$$.fragment,Mr),cl=l(Mr),Zs=r(Mr,"P",{});var au=d(Zs);hl=s(au,"Base class for sequence-to-sequence language models outputs."),au.forEach(t),Mr.forEach(t),Za=l(o),yt=r(o,"H2",{class:!0});var Sr=d(yt);Rt=r(Sr,"A",{id:!0,class:!0,href:!0});var ru=d(Rt);Ks=r(ru,"SPAN",{});var du=d(Ks);g(Io.$$.fragment,du),du.forEach(t),ru.forEach(t),pl=l(Sr),Ys=r(Sr,"SPAN",{});var iu=d(Ys);ul=s(iu,"LEDModel"),iu.forEach(t),Sr.forEach(t),Ka=l(o),De=r(o,"DIV",{class:!0});var ro=d(De);g(Bo.$$.fragment,ro),fl=l(ro),Go=r(ro,"P",{});var Cr=d(Go);ml=s(Cr,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Wn=r(Cr,"A",{href:!0});var lu=d(Wn);_l=s(lu,"PreTrainedModel"),lu.forEach(t),gl=s(Cr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Cr.forEach(t),vl=l(ro),Qo=r(ro,"P",{});var Or=d(Qo);Tl=s(Or,"This model is also a PyTorch "),Ho=r(Or,"A",{href:!0,rel:!0});var cu=d(Ho);kl=s(cu,"torch.nn.Module"),cu.forEach(t),bl=s(Or,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Or.forEach(t),wl=l(ro),me=r(ro,"DIV",{class:!0});var Ve=d(me);g(Ro.$$.fragment,Ve),yl=l(Ve),Et=r(Ve,"P",{});var cs=d(Et);El=s(cs,"The "),Un=r(cs,"A",{href:!0});var hu=d(Un);Ll=s(hu,"LEDModel"),hu.forEach(t),ql=s(cs," forward method, overrides the "),ea=r(cs,"CODE",{});var pu=d(ea);Dl=s(pu,"__call__"),pu.forEach(t),zl=s(cs," special method."),cs.forEach(t),Fl=l(Ve),g(Wt.$$.fragment,Ve),$l=l(Ve),ta=r(Ve,"P",{});var uu=d(ta);xl=s(uu,"Example:"),uu.forEach(t),Ml=l(Ve),g(Wo.$$.fragment,Ve),Ve.forEach(t),ro.forEach(t),Ya=l(o),Lt=r(o,"H2",{class:!0});var Pr=d(Lt);Ut=r(Pr,"A",{id:!0,class:!0,href:!0});var fu=d(Ut);oa=r(fu,"SPAN",{});var mu=d(oa);g(Uo.$$.fragment,mu),mu.forEach(t),fu.forEach(t),Sl=l(Pr),na=r(Pr,"SPAN",{});var _u=d(na);Cl=s(_u,"LEDForConditionalGeneration"),_u.forEach(t),Pr.forEach(t),er=l(o),ze=r(o,"DIV",{class:!0});var io=d(ze);g(Vo.$$.fragment,io),Ol=l(io),Xo=r(io,"P",{});var Ar=d(Xo);Pl=s(Ar,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),Vn=r(Ar,"A",{href:!0});var gu=d(Vn);Al=s(gu,"PreTrainedModel"),gu.forEach(t),Nl=s(Ar,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ar.forEach(t),jl=l(io),Jo=r(io,"P",{});var Nr=d(Jo);Il=s(Nr,"This model is also a PyTorch "),Zo=r(Nr,"A",{href:!0,rel:!0});var vu=d(Zo);Bl=s(vu,"torch.nn.Module"),vu.forEach(t),Gl=s(Nr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Nr.forEach(t),Ql=l(io),G=r(io,"DIV",{class:!0});var be=d(G);g(Ko.$$.fragment,be),Hl=l(be),qt=r(be,"P",{});var hs=d(qt);Rl=s(hs,"The "),Xn=r(hs,"A",{href:!0});var Tu=d(Xn);Wl=s(Tu,"LEDForConditionalGeneration"),Tu.forEach(t),Ul=s(hs," forward method, overrides the "),sa=r(hs,"CODE",{});var ku=d(sa);Vl=s(ku,"__call__"),ku.forEach(t),Xl=s(hs," special method."),hs.forEach(t),Jl=l(be),g(Vt.$$.fragment,be),Zl=l(be),aa=r(be,"P",{});var bu=d(aa);Kl=s(bu,"Conditional generation example:"),bu.forEach(t),Yl=l(be),g(Yo.$$.fragment,be),ec=l(be),ra=r(be,"P",{});var wu=d(ra);tc=s(wu,"Summarization example:"),wu.forEach(t),oc=l(be),g(en.$$.fragment,be),be.forEach(t),io.forEach(t),tr=l(o),Dt=r(o,"H2",{class:!0});var jr=d(Dt);Xt=r(jr,"A",{id:!0,class:!0,href:!0});var yu=d(Xt);da=r(yu,"SPAN",{});var Eu=d(da);g(tn.$$.fragment,Eu),Eu.forEach(t),yu.forEach(t),nc=l(jr),ia=r(jr,"SPAN",{});var Lu=d(ia);sc=s(Lu,"LEDForSequenceClassification"),Lu.forEach(t),jr.forEach(t),or=l(o),de=r(o,"DIV",{class:!0});var Xe=d(de);g(on.$$.fragment,Xe),ac=l(Xe),la=r(Xe,"P",{});var qu=d(la);rc=s(qu,`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),qu.forEach(t),dc=l(Xe),nn=r(Xe,"P",{});var Ir=d(nn);ic=s(Ir,"This model inherits from "),Jn=r(Ir,"A",{href:!0});var Du=d(Jn);lc=s(Du,"PreTrainedModel"),Du.forEach(t),cc=s(Ir,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Ir.forEach(t),hc=l(Xe),sn=r(Xe,"P",{});var Br=d(sn);pc=s(Br,"This model is also a PyTorch "),an=r(Br,"A",{href:!0,rel:!0});var zu=d(an);uc=s(zu,"torch.nn.Module"),zu.forEach(t),fc=s(Br,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Br.forEach(t),mc=l(Xe),Q=r(Xe,"DIV",{class:!0});var we=d(Q);g(rn.$$.fragment,we),_c=l(we),zt=r(we,"P",{});var ps=d(zt);gc=s(ps,"The "),Zn=r(ps,"A",{href:!0});var Fu=d(Zn);vc=s(Fu,"LEDForSequenceClassification"),Fu.forEach(t),Tc=s(ps," forward method, overrides the "),ca=r(ps,"CODE",{});var $u=d(ca);kc=s($u,"__call__"),$u.forEach(t),bc=s(ps," special method."),ps.forEach(t),wc=l(we),g(Jt.$$.fragment,we),yc=l(we),ha=r(we,"P",{});var xu=d(ha);Ec=s(xu,"Example of single-label classification:"),xu.forEach(t),Lc=l(we),g(dn.$$.fragment,we),qc=l(we),pa=r(we,"P",{});var Mu=d(pa);Dc=s(Mu,"Example of multi-label classification:"),Mu.forEach(t),zc=l(we),g(ln.$$.fragment,we),we.forEach(t),Xe.forEach(t),nr=l(o),Ft=r(o,"H2",{class:!0});var Gr=d(Ft);Zt=r(Gr,"A",{id:!0,class:!0,href:!0});var Su=d(Zt);ua=r(Su,"SPAN",{});var Cu=d(ua);g(cn.$$.fragment,Cu),Cu.forEach(t),Su.forEach(t),Fc=l(Gr),fa=r(Gr,"SPAN",{});var Ou=d(fa);$c=s(Ou,"LEDForQuestionAnswering"),Ou.forEach(t),Gr.forEach(t),sr=l(o),ie=r(o,"DIV",{class:!0});var Je=d(ie);g(hn.$$.fragment,Je),xc=l(Je),$t=r(Je,"P",{});var us=d($t);Mc=s(us,`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute `),ma=r(us,"EM",{});var Pu=d(ma);Sc=s(Pu,"span start logits"),Pu.forEach(t),Cc=s(us," and "),_a=r(us,"EM",{});var Au=d(_a);Oc=s(Au,"span end logits"),Au.forEach(t),Pc=s(us,")."),us.forEach(t),Ac=l(Je),pn=r(Je,"P",{});var Qr=d(pn);Nc=s(Qr,"This model inherits from "),Kn=r(Qr,"A",{href:!0});var Nu=d(Kn);jc=s(Nu,"PreTrainedModel"),Nu.forEach(t),Ic=s(Qr,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Qr.forEach(t),Bc=l(Je),un=r(Je,"P",{});var Hr=d(un);Gc=s(Hr,"This model is also a PyTorch "),fn=r(Hr,"A",{href:!0,rel:!0});var ju=d(fn);Qc=s(ju,"torch.nn.Module"),ju.forEach(t),Hc=s(Hr,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Hr.forEach(t),Rc=l(Je),_e=r(Je,"DIV",{class:!0});var Ze=d(_e);g(mn.$$.fragment,Ze),Wc=l(Ze),xt=r(Ze,"P",{});var fs=d(xt);Uc=s(fs,"The "),Yn=r(fs,"A",{href:!0});var Iu=d(Yn);Vc=s(Iu,"LEDForQuestionAnswering"),Iu.forEach(t),Xc=s(fs," forward method, overrides the "),ga=r(fs,"CODE",{});var Bu=d(ga);Jc=s(Bu,"__call__"),Bu.forEach(t),Zc=s(fs," special method."),fs.forEach(t),Kc=l(Ze),g(Kt.$$.fragment,Ze),Yc=l(Ze),va=r(Ze,"P",{});var Gu=d(va);eh=s(Gu,"Example:"),Gu.forEach(t),th=l(Ze),g(_n.$$.fragment,Ze),Ze.forEach(t),Je.forEach(t),ar=l(o),Mt=r(o,"H2",{class:!0});var Rr=d(Mt);Yt=r(Rr,"A",{id:!0,class:!0,href:!0});var Qu=d(Yt);Ta=r(Qu,"SPAN",{});var Hu=d(Ta);g(gn.$$.fragment,Hu),Hu.forEach(t),Qu.forEach(t),oh=l(Rr),ka=r(Rr,"SPAN",{});var Ru=d(ka);nh=s(Ru,"TFLEDModel"),Ru.forEach(t),Rr.forEach(t),rr=l(o),le=r(o,"DIV",{class:!0});var Ke=d(le);g(vn.$$.fragment,Ke),sh=l(Ke),Tn=r(Ke,"P",{});var Wr=d(Tn);ah=s(Wr,`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from `),es=r(Wr,"A",{href:!0});var Wu=d(es);rh=s(Wu,"TFPreTrainedModel"),Wu.forEach(t),dh=s(Wr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wr.forEach(t),ih=l(Ke),kn=r(Ke,"P",{});var Ur=d(kn);lh=s(Ur,"This model is also a "),bn=r(Ur,"A",{href:!0,rel:!0});var Uu=d(bn);ch=s(Uu,"tf.keras.Model"),Uu.forEach(t),hh=s(Ur,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ur.forEach(t),ph=l(Ke),g(eo.$$.fragment,Ke),uh=l(Ke),ge=r(Ke,"DIV",{class:!0});var Ye=d(ge);g(wn.$$.fragment,Ye),fh=l(Ye),St=r(Ye,"P",{});var ms=d(St);mh=s(ms,"The "),ts=r(ms,"A",{href:!0});var Vu=d(ts);_h=s(Vu,"TFLEDModel"),Vu.forEach(t),gh=s(ms," forward method, overrides the "),ba=r(ms,"CODE",{});var Xu=d(ba);vh=s(Xu,"__call__"),Xu.forEach(t),Th=s(ms," special method."),ms.forEach(t),kh=l(Ye),g(to.$$.fragment,Ye),bh=l(Ye),wa=r(Ye,"P",{});var Ju=d(wa);wh=s(Ju,"Example:"),Ju.forEach(t),yh=l(Ye),g(yn.$$.fragment,Ye),Ye.forEach(t),Ke.forEach(t),dr=l(o),Ct=r(o,"H2",{class:!0});var Vr=d(Ct);oo=r(Vr,"A",{id:!0,class:!0,href:!0});var Zu=d(oo);ya=r(Zu,"SPAN",{});var Ku=d(ya);g(En.$$.fragment,Ku),Ku.forEach(t),Zu.forEach(t),Eh=l(Vr),Ea=r(Vr,"SPAN",{});var Yu=d(Ea);Lh=s(Yu,"TFLEDForConditionalGeneration"),Yu.forEach(t),Vr.forEach(t),ir=l(o),ce=r(o,"DIV",{class:!0});var et=d(ce);g(Ln.$$.fragment,et),qh=l(et),qn=r(et,"P",{});var Xr=d(qn);Dh=s(Xr,`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from `),os=r(Xr,"A",{href:!0});var ef=d(os);zh=s(ef,"TFPreTrainedModel"),ef.forEach(t),Fh=s(Xr,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Xr.forEach(t),$h=l(et),Dn=r(et,"P",{});var Jr=d(Dn);xh=s(Jr,"This model is also a "),zn=r(Jr,"A",{href:!0,rel:!0});var tf=d(zn);Mh=s(tf,"tf.keras.Model"),tf.forEach(t),Sh=s(Jr,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),Ch=l(et),g(no.$$.fragment,et),Oh=l(et),ve=r(et,"DIV",{class:!0});var tt=d(ve);g(Fn.$$.fragment,tt),Ph=l(tt),Ot=r(tt,"P",{});var _s=d(Ot);Ah=s(_s,"The "),ns=r(_s,"A",{href:!0});var of=d(ns);Nh=s(of,"TFLEDForConditionalGeneration"),of.forEach(t),jh=s(_s," forward method, overrides the "),La=r(_s,"CODE",{});var nf=d(La);Ih=s(nf,"__call__"),nf.forEach(t),Bh=s(_s," special method."),_s.forEach(t),Gh=l(tt),g(so.$$.fragment,tt),Qh=l(tt),qa=r(tt,"P",{});var sf=d(qa);Hh=s(sf,"Examples:"),sf.forEach(t),Rh=l(tt),g($n.$$.fragment,tt),tt.forEach(t),et.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Tf)),c(w,"id","led"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#led"),c(m,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(z,"class","relative group"),c(ee,"href","https://arxiv.org/abs/2004.05150"),c(ee,"rel","nofollow"),c(B,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(A,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Me,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer"),c(Se,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartTokenizer"),c(Sn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer"),c(Cn,"href","/docs/transformers/v4.14.1/en/model_doc/longformer#transformers.LongformerModel"),c(po,"href","https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing"),c(po,"rel","nofollow"),c(fo,"href","https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing"),c(fo,"rel","nofollow"),c(mo,"href","https://huggingface.co/patrickvonplaten"),c(mo,"rel","nofollow"),c(At,"id","transformers.LEDConfig"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.LEDConfig"),c(lt,"class","relative group"),c(On,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDModel"),c(vo,"href","https://huggingface.co/allenai/led-base-16384"),c(vo,"rel","nofollow"),c(Pn,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(An,"href","/docs/transformers/v4.14.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Re,"class","docstring"),c(Nt,"id","transformers.LEDTokenizer"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.LEDTokenizer"),c(pt,"class","relative group"),c(Nn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizer"),c(jn,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartTokenizer"),c(In,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartTokenizer"),c(We,"class","docstring"),c(It,"class","docstring"),c(Bt,"class","docstring"),c(Ns,"class","docstring"),c(P,"class","docstring"),c(Gt,"id","transformers.LEDTokenizerFast"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.LEDTokenizerFast"),c(ut,"class","relative group"),c(Qn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDTokenizerFast"),c(Hn,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartTokenizerFast"),c(Rn,"href","/docs/transformers/v4.14.1/en/model_doc/bart#transformers.BartTokenizerFast"),c(qe,"class","docstring"),c(Ht,"id","transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.models.led.modeling_led.LEDEncoderBaseModelOutput"),c(ft,"class","relative group"),c(mt,"class","docstring"),c(_t,"class","docstring"),c(gt,"class","docstring"),c(vt,"class","docstring"),c(Tt,"class","docstring"),c(kt,"class","docstring"),c(bt,"class","docstring"),c(wt,"class","docstring"),c(Rt,"id","transformers.LEDModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.LEDModel"),c(yt,"class","relative group"),c(Wn,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ho,"rel","nofollow"),c(Un,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDModel"),c(me,"class","docstring"),c(De,"class","docstring"),c(Ut,"id","transformers.LEDForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.LEDForConditionalGeneration"),c(Lt,"class","relative group"),c(Vn,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zo,"rel","nofollow"),c(Xn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDForConditionalGeneration"),c(G,"class","docstring"),c(ze,"class","docstring"),c(Xt,"id","transformers.LEDForSequenceClassification"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.LEDForSequenceClassification"),c(Dt,"class","relative group"),c(Jn,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(an,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(an,"rel","nofollow"),c(Zn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDForSequenceClassification"),c(Q,"class","docstring"),c(de,"class","docstring"),c(Zt,"id","transformers.LEDForQuestionAnswering"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.LEDForQuestionAnswering"),c(Ft,"class","relative group"),c(Kn,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.PreTrainedModel"),c(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fn,"rel","nofollow"),c(Yn,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.LEDForQuestionAnswering"),c(_e,"class","docstring"),c(ie,"class","docstring"),c(Yt,"id","transformers.TFLEDModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.TFLEDModel"),c(Mt,"class","relative group"),c(es,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bn,"rel","nofollow"),c(ts,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.TFLEDModel"),c(ge,"class","docstring"),c(le,"class","docstring"),c(oo,"id","transformers.TFLEDForConditionalGeneration"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.TFLEDForConditionalGeneration"),c(Ct,"class","relative group"),c(os,"href","/docs/transformers/v4.14.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zn,"rel","nofollow"),c(ns,"href","/docs/transformers/v4.14.1/en/model_doc/led#transformers.TFLEDForConditionalGeneration"),c(ve,"class","docstring"),c(ce,"class","docstring")},m(o,p){e(document.head,u),h(o,q,p),h(o,m,p),e(m,w),e(w,L),v(E,L,null),e(m,y),e(m,D),e(D,Oe),h(o,pe,p),h(o,z,p),e(z,J),e(J,H),v(Y,H,null),e(z,Pe),e(z,R),e(R,Ae),h(o,Fe,p),h(o,I,p),e(I,W),e(I,ee),e(ee,ye),e(I,S),h(o,O,p),h(o,ue,p),e(ue,te),h(o,$e,p),h(o,fe,p),e(fe,U),e(U,Ne),h(o,xe,p),h(o,C,p),e(C,je),h(o,Z,p),h(o,$,p),e($,x),e(x,B),e(B,Ie),e(x,Be),e(x,A),e(A,Ge),e(x,oe),e(x,Ee),e(Ee,f),e(x,F),e(x,ne),e(ne,ot),e(x,nt),e(x,j),e(j,st),e(x,at),e(x,Me),e(Me,V),e(x,se),e(x,Se),e(Se,rt),e(x,ae),e($,dt),e($,re),e(re,Qe),e(re,He),e(He,Zr),e(re,Kr),e(re,gs),e(gs,Yr),e(re,ed),e($,td),e($,Le),e(Le,od),e(Le,vs),e(vs,nd),e(Le,sd),e(Le,Ts),e(Ts,ad),e(Le,rd),e(Le,Sn),e(Sn,dd),e(Le,id),e(Le,ks),e(ks,ld),e(Le,cd),e($,hd),e($,X),e(X,pd),e(X,bs),e(bs,ud),e(X,fd),e(X,ws),e(ws,md),e(X,_d),e(X,Cn),e(Cn,gd),e(X,vd),e(X,ys),e(ys,Td),e(X,kd),e(X,Es),e(Es,bd),e(X,wd),e(X,Ls),e(Ls,yd),e(X,Ed),e($,Ld),e($,it),e(it,qd),e(it,qs),e(qs,Dd),e(it,zd),e(it,Ds),e(Ds,Fd),e(it,$d),e($,xd),e($,ho),e(ho,Md),e(ho,po),e(po,Sd),e(ho,Cd),e($,Od),e($,uo),e(uo,Pd),e(uo,fo),e(fo,Ad),e(uo,Nd),h(o,Oa,p),h(o,Pt,p),e(Pt,jd),e(Pt,mo),e(mo,Id),e(Pt,Bd),h(o,Pa,p),h(o,lt,p),e(lt,At),e(At,zs),v(_o,zs,null),e(lt,Gd),e(lt,Fs),e(Fs,Qd),h(o,Aa,p),h(o,Re,p),v(go,Re,null),e(Re,Hd),e(Re,ct),e(ct,Rd),e(ct,On),e(On,Wd),e(ct,Ud),e(ct,vo),e(vo,Vd),e(ct,Xd),e(Re,Jd),e(Re,ht),e(ht,Zd),e(ht,Pn),e(Pn,Kd),e(ht,Yd),e(ht,An),e(An,ei),e(ht,ti),h(o,Na,p),h(o,pt,p),e(pt,Nt),e(Nt,$s),v(To,$s,null),e(pt,oi),e(pt,xs),e(xs,ni),h(o,ja,p),h(o,P,p),v(ko,P,null),e(P,si),e(P,Ms),e(Ms,ai),e(P,ri),e(P,jt),e(jt,Nn),e(Nn,di),e(jt,ii),e(jt,jn),e(jn,li),e(jt,ci),e(P,hi),e(P,bo),e(bo,pi),e(bo,In),e(In,ui),e(bo,fi),e(P,mi),e(P,We),v(wo,We,null),e(We,_i),e(We,Ss),e(Ss,gi),e(We,vi),e(We,yo),e(yo,Bn),e(Bn,Ti),e(Bn,Cs),e(Cs,ki),e(yo,bi),e(yo,Gn),e(Gn,wi),e(Gn,Os),e(Os,yi),e(P,Ei),e(P,It),v(Eo,It,null),e(It,Li),e(It,Lo),e(Lo,qi),e(Lo,Ps),e(Ps,Di),e(Lo,zi),e(P,Fi),e(P,Bt),v(qo,Bt,null),e(Bt,$i),e(Bt,As),e(As,xi),e(P,Mi),e(P,Ns),h(o,Ia,p),h(o,ut,p),e(ut,Gt),e(Gt,js),v(Do,js,null),e(ut,Si),e(ut,Is),e(Is,Ci),h(o,Ba,p),h(o,qe,p),v(zo,qe,null),e(qe,Oi),e(qe,Fo),e(Fo,Pi),e(Fo,Bs),e(Bs,Ai),e(Fo,Ni),e(qe,ji),e(qe,Qt),e(Qt,Qn),e(Qn,Ii),e(Qt,Bi),e(Qt,Hn),e(Hn,Gi),e(Qt,Qi),e(qe,Hi),e(qe,$o),e($o,Ri),e($o,Rn),e(Rn,Wi),e($o,Ui),h(o,Ga,p),h(o,ft,p),e(ft,Ht),e(Ht,Gs),v(xo,Gs,null),e(ft,Vi),e(ft,Qs),e(Qs,Xi),h(o,Qa,p),h(o,mt,p),v(Mo,mt,null),e(mt,Ji),e(mt,Hs),e(Hs,Zi),h(o,Ha,p),h(o,_t,p),v(So,_t,null),e(_t,Ki),e(_t,Rs),e(Rs,Yi),h(o,Ra,p),h(o,gt,p),v(Co,gt,null),e(gt,el),e(gt,Ws),e(Ws,tl),h(o,Wa,p),h(o,vt,p),v(Oo,vt,null),e(vt,ol),e(vt,Us),e(Us,nl),h(o,Ua,p),h(o,Tt,p),v(Po,Tt,null),e(Tt,sl),e(Tt,Vs),e(Vs,al),h(o,Va,p),h(o,kt,p),v(Ao,kt,null),e(kt,rl),e(kt,Xs),e(Xs,dl),h(o,Xa,p),h(o,bt,p),v(No,bt,null),e(bt,il),e(bt,Js),e(Js,ll),h(o,Ja,p),h(o,wt,p),v(jo,wt,null),e(wt,cl),e(wt,Zs),e(Zs,hl),h(o,Za,p),h(o,yt,p),e(yt,Rt),e(Rt,Ks),v(Io,Ks,null),e(yt,pl),e(yt,Ys),e(Ys,ul),h(o,Ka,p),h(o,De,p),v(Bo,De,null),e(De,fl),e(De,Go),e(Go,ml),e(Go,Wn),e(Wn,_l),e(Go,gl),e(De,vl),e(De,Qo),e(Qo,Tl),e(Qo,Ho),e(Ho,kl),e(Qo,bl),e(De,wl),e(De,me),v(Ro,me,null),e(me,yl),e(me,Et),e(Et,El),e(Et,Un),e(Un,Ll),e(Et,ql),e(Et,ea),e(ea,Dl),e(Et,zl),e(me,Fl),v(Wt,me,null),e(me,$l),e(me,ta),e(ta,xl),e(me,Ml),v(Wo,me,null),h(o,Ya,p),h(o,Lt,p),e(Lt,Ut),e(Ut,oa),v(Uo,oa,null),e(Lt,Sl),e(Lt,na),e(na,Cl),h(o,er,p),h(o,ze,p),v(Vo,ze,null),e(ze,Ol),e(ze,Xo),e(Xo,Pl),e(Xo,Vn),e(Vn,Al),e(Xo,Nl),e(ze,jl),e(ze,Jo),e(Jo,Il),e(Jo,Zo),e(Zo,Bl),e(Jo,Gl),e(ze,Ql),e(ze,G),v(Ko,G,null),e(G,Hl),e(G,qt),e(qt,Rl),e(qt,Xn),e(Xn,Wl),e(qt,Ul),e(qt,sa),e(sa,Vl),e(qt,Xl),e(G,Jl),v(Vt,G,null),e(G,Zl),e(G,aa),e(aa,Kl),e(G,Yl),v(Yo,G,null),e(G,ec),e(G,ra),e(ra,tc),e(G,oc),v(en,G,null),h(o,tr,p),h(o,Dt,p),e(Dt,Xt),e(Xt,da),v(tn,da,null),e(Dt,nc),e(Dt,ia),e(ia,sc),h(o,or,p),h(o,de,p),v(on,de,null),e(de,ac),e(de,la),e(la,rc),e(de,dc),e(de,nn),e(nn,ic),e(nn,Jn),e(Jn,lc),e(nn,cc),e(de,hc),e(de,sn),e(sn,pc),e(sn,an),e(an,uc),e(sn,fc),e(de,mc),e(de,Q),v(rn,Q,null),e(Q,_c),e(Q,zt),e(zt,gc),e(zt,Zn),e(Zn,vc),e(zt,Tc),e(zt,ca),e(ca,kc),e(zt,bc),e(Q,wc),v(Jt,Q,null),e(Q,yc),e(Q,ha),e(ha,Ec),e(Q,Lc),v(dn,Q,null),e(Q,qc),e(Q,pa),e(pa,Dc),e(Q,zc),v(ln,Q,null),h(o,nr,p),h(o,Ft,p),e(Ft,Zt),e(Zt,ua),v(cn,ua,null),e(Ft,Fc),e(Ft,fa),e(fa,$c),h(o,sr,p),h(o,ie,p),v(hn,ie,null),e(ie,xc),e(ie,$t),e($t,Mc),e($t,ma),e(ma,Sc),e($t,Cc),e($t,_a),e(_a,Oc),e($t,Pc),e(ie,Ac),e(ie,pn),e(pn,Nc),e(pn,Kn),e(Kn,jc),e(pn,Ic),e(ie,Bc),e(ie,un),e(un,Gc),e(un,fn),e(fn,Qc),e(un,Hc),e(ie,Rc),e(ie,_e),v(mn,_e,null),e(_e,Wc),e(_e,xt),e(xt,Uc),e(xt,Yn),e(Yn,Vc),e(xt,Xc),e(xt,ga),e(ga,Jc),e(xt,Zc),e(_e,Kc),v(Kt,_e,null),e(_e,Yc),e(_e,va),e(va,eh),e(_e,th),v(_n,_e,null),h(o,ar,p),h(o,Mt,p),e(Mt,Yt),e(Yt,Ta),v(gn,Ta,null),e(Mt,oh),e(Mt,ka),e(ka,nh),h(o,rr,p),h(o,le,p),v(vn,le,null),e(le,sh),e(le,Tn),e(Tn,ah),e(Tn,es),e(es,rh),e(Tn,dh),e(le,ih),e(le,kn),e(kn,lh),e(kn,bn),e(bn,ch),e(kn,hh),e(le,ph),v(eo,le,null),e(le,uh),e(le,ge),v(wn,ge,null),e(ge,fh),e(ge,St),e(St,mh),e(St,ts),e(ts,_h),e(St,gh),e(St,ba),e(ba,vh),e(St,Th),e(ge,kh),v(to,ge,null),e(ge,bh),e(ge,wa),e(wa,wh),e(ge,yh),v(yn,ge,null),h(o,dr,p),h(o,Ct,p),e(Ct,oo),e(oo,ya),v(En,ya,null),e(Ct,Eh),e(Ct,Ea),e(Ea,Lh),h(o,ir,p),h(o,ce,p),v(Ln,ce,null),e(ce,qh),e(ce,qn),e(qn,Dh),e(qn,os),e(os,zh),e(qn,Fh),e(ce,$h),e(ce,Dn),e(Dn,xh),e(Dn,zn),e(zn,Mh),e(Dn,Sh),e(ce,Ch),v(no,ce,null),e(ce,Oh),e(ce,ve),v(Fn,ve,null),e(ve,Ph),e(ve,Ot),e(Ot,Ah),e(Ot,ns),e(ns,Nh),e(Ot,jh),e(Ot,La),e(La,Ih),e(Ot,Bh),e(ve,Gh),v(so,ve,null),e(ve,Qh),e(ve,qa),e(qa,Hh),e(ve,Rh),v($n,ve,null),lr=!0},p(o,[p]){const xn={};p&2&&(xn.$$scope={dirty:p,ctx:o}),Wt.$set(xn);const Da={};p&2&&(Da.$$scope={dirty:p,ctx:o}),Vt.$set(Da);const za={};p&2&&(za.$$scope={dirty:p,ctx:o}),Jt.$set(za);const Fa={};p&2&&(Fa.$$scope={dirty:p,ctx:o}),Kt.$set(Fa);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),eo.$set(Mn);const $a={};p&2&&($a.$$scope={dirty:p,ctx:o}),to.$set($a);const xa={};p&2&&(xa.$$scope={dirty:p,ctx:o}),no.$set(xa);const Ma={};p&2&&(Ma.$$scope={dirty:p,ctx:o}),so.$set(Ma)},i(o){lr||(T(E.$$.fragment,o),T(Y.$$.fragment,o),T(_o.$$.fragment,o),T(go.$$.fragment,o),T(To.$$.fragment,o),T(ko.$$.fragment,o),T(wo.$$.fragment,o),T(Eo.$$.fragment,o),T(qo.$$.fragment,o),T(Do.$$.fragment,o),T(zo.$$.fragment,o),T(xo.$$.fragment,o),T(Mo.$$.fragment,o),T(So.$$.fragment,o),T(Co.$$.fragment,o),T(Oo.$$.fragment,o),T(Po.$$.fragment,o),T(Ao.$$.fragment,o),T(No.$$.fragment,o),T(jo.$$.fragment,o),T(Io.$$.fragment,o),T(Bo.$$.fragment,o),T(Ro.$$.fragment,o),T(Wt.$$.fragment,o),T(Wo.$$.fragment,o),T(Uo.$$.fragment,o),T(Vo.$$.fragment,o),T(Ko.$$.fragment,o),T(Vt.$$.fragment,o),T(Yo.$$.fragment,o),T(en.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(rn.$$.fragment,o),T(Jt.$$.fragment,o),T(dn.$$.fragment,o),T(ln.$$.fragment,o),T(cn.$$.fragment,o),T(hn.$$.fragment,o),T(mn.$$.fragment,o),T(Kt.$$.fragment,o),T(_n.$$.fragment,o),T(gn.$$.fragment,o),T(vn.$$.fragment,o),T(eo.$$.fragment,o),T(wn.$$.fragment,o),T(to.$$.fragment,o),T(yn.$$.fragment,o),T(En.$$.fragment,o),T(Ln.$$.fragment,o),T(no.$$.fragment,o),T(Fn.$$.fragment,o),T(so.$$.fragment,o),T($n.$$.fragment,o),lr=!0)},o(o){k(E.$$.fragment,o),k(Y.$$.fragment,o),k(_o.$$.fragment,o),k(go.$$.fragment,o),k(To.$$.fragment,o),k(ko.$$.fragment,o),k(wo.$$.fragment,o),k(Eo.$$.fragment,o),k(qo.$$.fragment,o),k(Do.$$.fragment,o),k(zo.$$.fragment,o),k(xo.$$.fragment,o),k(Mo.$$.fragment,o),k(So.$$.fragment,o),k(Co.$$.fragment,o),k(Oo.$$.fragment,o),k(Po.$$.fragment,o),k(Ao.$$.fragment,o),k(No.$$.fragment,o),k(jo.$$.fragment,o),k(Io.$$.fragment,o),k(Bo.$$.fragment,o),k(Ro.$$.fragment,o),k(Wt.$$.fragment,o),k(Wo.$$.fragment,o),k(Uo.$$.fragment,o),k(Vo.$$.fragment,o),k(Ko.$$.fragment,o),k(Vt.$$.fragment,o),k(Yo.$$.fragment,o),k(en.$$.fragment,o),k(tn.$$.fragment,o),k(on.$$.fragment,o),k(rn.$$.fragment,o),k(Jt.$$.fragment,o),k(dn.$$.fragment,o),k(ln.$$.fragment,o),k(cn.$$.fragment,o),k(hn.$$.fragment,o),k(mn.$$.fragment,o),k(Kt.$$.fragment,o),k(_n.$$.fragment,o),k(gn.$$.fragment,o),k(vn.$$.fragment,o),k(eo.$$.fragment,o),k(wn.$$.fragment,o),k(to.$$.fragment,o),k(yn.$$.fragment,o),k(En.$$.fragment,o),k(Ln.$$.fragment,o),k(no.$$.fragment,o),k(Fn.$$.fragment,o),k(so.$$.fragment,o),k($n.$$.fragment,o),lr=!1},d(o){t(u),o&&t(q),o&&t(m),b(E),o&&t(pe),o&&t(z),b(Y),o&&t(Fe),o&&t(I),o&&t(O),o&&t(ue),o&&t($e),o&&t(fe),o&&t(xe),o&&t(C),o&&t(Z),o&&t($),o&&t(Oa),o&&t(Pt),o&&t(Pa),o&&t(lt),b(_o),o&&t(Aa),o&&t(Re),b(go),o&&t(Na),o&&t(pt),b(To),o&&t(ja),o&&t(P),b(ko),b(wo),b(Eo),b(qo),o&&t(Ia),o&&t(ut),b(Do),o&&t(Ba),o&&t(qe),b(zo),o&&t(Ga),o&&t(ft),b(xo),o&&t(Qa),o&&t(mt),b(Mo),o&&t(Ha),o&&t(_t),b(So),o&&t(Ra),o&&t(gt),b(Co),o&&t(Wa),o&&t(vt),b(Oo),o&&t(Ua),o&&t(Tt),b(Po),o&&t(Va),o&&t(kt),b(Ao),o&&t(Xa),o&&t(bt),b(No),o&&t(Ja),o&&t(wt),b(jo),o&&t(Za),o&&t(yt),b(Io),o&&t(Ka),o&&t(De),b(Bo),b(Ro),b(Wt),b(Wo),o&&t(Ya),o&&t(Lt),b(Uo),o&&t(er),o&&t(ze),b(Vo),b(Ko),b(Vt),b(Yo),b(en),o&&t(tr),o&&t(Dt),b(tn),o&&t(or),o&&t(de),b(on),b(rn),b(Jt),b(dn),b(ln),o&&t(nr),o&&t(Ft),b(cn),o&&t(sr),o&&t(ie),b(hn),b(mn),b(Kt),b(_n),o&&t(ar),o&&t(Mt),b(gn),o&&t(rr),o&&t(le),b(vn),b(eo),b(wn),b(to),b(yn),o&&t(dr),o&&t(Ct),b(En),o&&t(ir),o&&t(ce),b(Ln),b(no),b(Fn),b(so),b($n)}}}const Tf={local:"led",sections:[{local:"overview",title:"Overview"},{local:"transformers.LEDConfig",title:"LEDConfig"},{local:"transformers.LEDTokenizer",title:"LEDTokenizer"},{local:"transformers.LEDTokenizerFast",title:"LEDTokenizerFast"},{local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",title:"LED specific outputs"},{local:"transformers.LEDModel",title:"LEDModel"},{local:"transformers.LEDForConditionalGeneration",title:"LEDForConditionalGeneration"},{local:"transformers.LEDForSequenceClassification",title:"LEDForSequenceClassification"},{local:"transformers.LEDForQuestionAnswering",title:"LEDForQuestionAnswering"},{local:"transformers.TFLEDModel",title:"TFLEDModel"},{local:"transformers.TFLEDForConditionalGeneration",title:"TFLEDForConditionalGeneration"}],title:"LED"};function kf(N,u,q){let{fw:m}=u;return N.$$set=w=>{"fw"in w&&q(0,m=w.fw)},[m]}class Df extends af{constructor(u){super();rf(this,u,kf,vf,df,{fw:0})}}export{Df as default,Tf as metadata};
