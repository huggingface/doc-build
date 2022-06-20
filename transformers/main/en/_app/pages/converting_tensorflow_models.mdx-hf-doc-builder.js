import{S as Da,i as Xa,s as Ua,e as o,k as h,w as m,t as n,M as Ma,c as a,d as t,m as c,a as s,x as v,h as l,b as f,G as r,g as p,y as u,q as d,o as T,B as $,v as Ka}from"../chunks/vendor-hf-doc-builder.js";import{T as Ya}from"../chunks/Tip-hf-doc-builder.js";import{I as M}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ce}from"../chunks/CodeBlock-hf-doc-builder.js";function qa(Pt){let _,K,P,g,I,A,k,H,R,Y,N;return{c(){_=o("p"),K=n("Since 2.3.0 the conversion script is now part of the transformers CLI ("),P=o("strong"),g=n("transformers-cli"),I=n(`) available in any
transformers >= 2.3.0 installation.`),A=h(),k=o("p"),H=n("The documentation below reflects the "),R=o("strong"),Y=n("transformers-cli convert"),N=n(" command format.")},l(b){_=a(b,"P",{});var w=s(_);K=l(w,"Since 2.3.0 the conversion script is now part of the transformers CLI ("),P=a(w,"STRONG",{});var Ge=s(P);g=l(Ge,"transformers-cli"),Ge.forEach(t),I=l(w,`) available in any
transformers >= 2.3.0 installation.`),w.forEach(t),A=c(b),k=a(b,"P",{});var q=s(k);H=l(q,"The documentation below reflects the "),R=a(q,"STRONG",{});var _e=s(R);Y=l(_e,"transformers-cli convert"),_e.forEach(t),N=l(q," command format."),q.forEach(t)},m(b,w){p(b,_,w),r(_,K),r(_,P),r(P,g),r(_,I),p(b,A,w),p(b,k,w),r(k,H),r(k,R),r(R,Y),r(k,N)},d(b){b&&t(_),b&&t(A),b&&t(k)}}}function Ja(Pt){let _,K,P,g,I,A,k,H,R,Y,N,b,w,Ge,q,_e,J,bt,S,z,qe,me,$r,Je,Er,wt,x,Pr,ve,br,wr,ue,yr,gr,yt,E,Ar,ze,kr,Nr,Qe,Or,xr,Ve,Cr,Lr,De,Ir,Hr,de,Rr,Sr,gt,y,Fr,We,jr,Br,Ze,Gr,Dr,et,Xr,Ur,tt,Mr,Kr,At,Q,Yr,rt,qr,Jr,kt,V,zr,ot,Qr,Vr,Nt,Te,Ot,W,Wr,$e,Zr,eo,xt,F,Z,at,Ee,to,st,ro,Ct,ee,oo,Pe,ao,so,Lt,C,no,nt,lo,io,lt,po,fo,It,te,ho,it,co,_o,Ht,be,Rt,re,mo,we,vo,uo,St,j,oe,pt,ye,To,ft,$o,Ft,ae,Eo,ge,Po,bo,jt,Ae,Bt,B,se,ht,ke,wo,ct,yo,Gt,ne,go,Ne,Ao,ko,Dt,Oe,Xt,G,le,_t,xe,No,mt,Oo,Ut,ie,xo,Ce,Co,Lo,Mt,Le,Kt,D,pe,vt,Ie,Io,ut,Ho,Yt,Xe,Ro,qt,He,Jt,X,fe,dt,Re,So,Tt,Fo,zt,Ue,jo,Qt,Se,Vt,U,he,$t,Fe,Bo,Et,Go,Wt,Me,Do,Zt,je,er;return A=new M({}),J=new Ya({props:{$$slots:{default:[qa]},$$scope:{ctx:Pt}}}),me=new M({}),Te=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_model.ckpt \\
  --config <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$BERT_BASE_DIR</span>/pytorch_model.bin`}}),Ee=new M({}),be=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint <span class="hljs-variable">$ALBERT_BASE_DIR</span>/model.ckpt-best \\
  --config <span class="hljs-variable">$ALBERT_BASE_DIR</span>/albert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$ALBERT_BASE_DIR</span>/pytorch_model.bin`}}),ye=new M({}),Ae=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\`}}),ke=new M({}),Oe=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT2_CHECKPOINT_PATH=/path/to/gpt2/pretrained/weights

transformers-cli convert --model_type gpt2 \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT2_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK]`}}),xe=new M({}),Le=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_FOLDER_PATH=/path/to/transfo/xl/checkpoint

transformers-cli convert --model_type transfo_xl \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config TRANSFO_XL_CONFIG] \\
  [--finetuning_task_name TRANSFO_XL_FINETUNED_TASK]`}}),Ie=new M({}),He=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
<span class="hljs-built_in">export</span> TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_PATH</span> \\
  --config <span class="hljs-variable">$TRANSFO_XL_CONFIG_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\`}}),Re=new M({}),Se=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint <span class="hljs-variable">$XLM_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span>
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK]`}}),Fe=new M({}),je=new ce({props:{code:"",highlighted:`<span class="hljs-built_in">export</span> T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint <span class="hljs-variable">$T5</span>/t5_model.ckpt \\
  --config <span class="hljs-variable">$T5</span>/t5_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$T5</span>/pytorch_model.bin`}}),{c(){_=o("meta"),K=h(),P=o("h1"),g=o("a"),I=o("span"),m(A.$$.fragment),k=h(),H=o("span"),R=n("Converting Tensorflow Checkpoints"),Y=h(),N=o("p"),b=n(`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),w=o("code"),Ge=n("from_pretrained"),q=n(" methods of the library."),_e=h(),m(J.$$.fragment),bt=h(),S=o("h2"),z=o("a"),qe=o("span"),m(me.$$.fragment),$r=h(),Je=o("span"),Er=n("BERT"),wt=h(),x=o("p"),Pr=n("You can convert any TensorFlow checkpoint for BERT (in particular "),ve=o("a"),br=n("the pre-trained models released by Google"),wr=n(`) in a PyTorch save file by using the
`),ue=o("a"),yr=n("convert_bert_original_tf_checkpoint_to_pytorch.py"),gr=n(" script."),yt=h(),E=o("p"),Ar=n("This CLI takes as input a TensorFlow checkpoint (three files starting with "),ze=o("code"),kr=n("bert_model.ckpt"),Nr=n(`) and the associated
configuration file (`),Qe=o("code"),Or=n("bert_config.json"),xr=n(`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),Ve=o("code"),Cr=n("from_pretrained()"),Lr=n(" (see example in "),De=o("a"),Ir=n("quicktour"),Hr=n(" , "),de=o("a"),Rr=n("run_glue.py"),Sr=n(" )."),gt=h(),y=o("p"),Fr=n("You only need to run this conversion script "),We=o("strong"),jr=n("once"),Br=n(` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),Ze=o("code"),Gr=n("bert_model.ckpt"),Dr=n(`) but be sure to keep the configuration file (\\
`),et=o("code"),Xr=n("bert_config.json"),Ur=n(") and the vocabulary file ("),tt=o("code"),Mr=n("vocab.txt"),Kr=n(") as these are needed for the PyTorch model too."),At=h(),Q=o("p"),Yr=n("To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=o("code"),qr=n("pip install tensorflow"),Jr=n("). The rest of the repository only requires PyTorch."),kt=h(),V=o("p"),zr=n("Here is an example of the conversion process for a pre-trained "),ot=o("code"),Qr=n("BERT-Base Uncased"),Vr=n(" model:"),Nt=h(),m(Te.$$.fragment),Ot=h(),W=o("p"),Wr=n("You can download Google\u2019s pre-trained models for the conversion "),$e=o("a"),Zr=n("here"),eo=n("."),xt=h(),F=o("h2"),Z=o("a"),at=o("span"),m(Ee.$$.fragment),to=h(),st=o("span"),ro=n("ALBERT"),Ct=h(),ee=o("p"),oo=n(`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=o("a"),ao=n("convert_albert_original_tf_checkpoint_to_pytorch.py"),so=n(" script."),Lt=h(),C=o("p"),no=n("The CLI takes as input a TensorFlow checkpoint (three files starting with "),nt=o("code"),lo=n("model.ckpt-best"),io=n(`) and the accompanying
configuration file (`),lt=o("code"),po=n("albert_config.json"),fo=n(`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),It=h(),te=o("p"),ho=n("Here is an example of the conversion process for the pre-trained "),it=o("code"),co=n("ALBERT Base"),_o=n(" model:"),Ht=h(),m(be.$$.fragment),Rt=h(),re=o("p"),mo=n("You can download Google\u2019s pre-trained models for the conversion "),we=o("a"),vo=n("here"),uo=n("."),St=h(),j=o("h2"),oe=o("a"),pt=o("span"),m(ye.$$.fragment),To=h(),ft=o("span"),$o=n("OpenAI GPT"),Ft=h(),ae=o("p"),Eo=n(`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),ge=o("a"),Po=n("here"),bo=n(`\\
)`),jt=h(),m(Ae.$$.fragment),Bt=h(),B=o("h2"),se=o("a"),ht=o("span"),m(ke.$$.fragment),wo=h(),ct=o("span"),yo=n("OpenAI GPT-2"),Gt=h(),ne=o("p"),go=n("Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Ne=o("a"),Ao=n("here"),ko=n(")"),Dt=h(),m(Oe.$$.fragment),Xt=h(),G=o("h2"),le=o("a"),_t=o("span"),m(xe.$$.fragment),No=h(),mt=o("span"),Oo=n("Transformer-XL"),Ut=h(),ie=o("p"),xo=n("Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=o("a"),Co=n("here"),Lo=n(")"),Mt=h(),m(Le.$$.fragment),Kt=h(),D=o("h2"),pe=o("a"),vt=o("span"),m(Ie.$$.fragment),Io=h(),ut=o("span"),Ho=n("XLNet"),Yt=h(),Xe=o("p"),Ro=n("Here is an example of the conversion process for a pre-trained XLNet model:"),qt=h(),m(He.$$.fragment),Jt=h(),X=o("h2"),fe=o("a"),dt=o("span"),m(Re.$$.fragment),So=h(),Tt=o("span"),Fo=n("XLM"),zt=h(),Ue=o("p"),jo=n("Here is an example of the conversion process for a pre-trained XLM model:"),Qt=h(),m(Se.$$.fragment),Vt=h(),U=o("h2"),he=o("a"),$t=o("span"),m(Fe.$$.fragment),Bo=h(),Et=o("span"),Go=n("T5"),Wt=h(),Me=o("p"),Do=n("Here is an example of the conversion process for a pre-trained T5 model:"),Zt=h(),m(je.$$.fragment),this.h()},l(e){const i=Ma('[data-svelte="svelte-1phssyn"]',document.head);_=a(i,"META",{name:!0,content:!0}),i.forEach(t),K=c(e),P=a(e,"H1",{class:!0});var Be=s(P);g=a(Be,"A",{id:!0,class:!0,href:!0});var Xo=s(g);I=a(Xo,"SPAN",{});var Uo=s(I);v(A.$$.fragment,Uo),Uo.forEach(t),Xo.forEach(t),k=c(Be),H=a(Be,"SPAN",{});var Mo=s(H);R=l(Mo,"Converting Tensorflow Checkpoints"),Mo.forEach(t),Be.forEach(t),Y=c(e),N=a(e,"P",{});var tr=s(N);b=l(tr,`A command-line interface is provided to convert original Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM checkpoints to models
that can be loaded using the `),w=a(tr,"CODE",{});var Ko=s(w);Ge=l(Ko,"from_pretrained"),Ko.forEach(t),q=l(tr," methods of the library."),tr.forEach(t),_e=c(e),v(J.$$.fragment,e),bt=c(e),S=a(e,"H2",{class:!0});var rr=s(S);z=a(rr,"A",{id:!0,class:!0,href:!0});var Yo=s(z);qe=a(Yo,"SPAN",{});var qo=s(qe);v(me.$$.fragment,qo),qo.forEach(t),Yo.forEach(t),$r=c(rr),Je=a(rr,"SPAN",{});var Jo=s(Je);Er=l(Jo,"BERT"),Jo.forEach(t),rr.forEach(t),wt=c(e),x=a(e,"P",{});var Ke=s(x);Pr=l(Ke,"You can convert any TensorFlow checkpoint for BERT (in particular "),ve=a(Ke,"A",{href:!0,rel:!0});var zo=s(ve);br=l(zo,"the pre-trained models released by Google"),zo.forEach(t),wr=l(Ke,`) in a PyTorch save file by using the
`),ue=a(Ke,"A",{href:!0,rel:!0});var Qo=s(ue);yr=l(Qo,"convert_bert_original_tf_checkpoint_to_pytorch.py"),Qo.forEach(t),gr=l(Ke," script."),Ke.forEach(t),yt=c(e),E=a(e,"P",{});var O=s(E);Ar=l(O,"This CLI takes as input a TensorFlow checkpoint (three files starting with "),ze=a(O,"CODE",{});var Vo=s(ze);kr=l(Vo,"bert_model.ckpt"),Vo.forEach(t),Nr=l(O,`) and the associated
configuration file (`),Qe=a(O,"CODE",{});var Wo=s(Qe);Or=l(Wo,"bert_config.json"),Wo.forEach(t),xr=l(O,`), and creates a PyTorch model for this configuration, loads the weights from
the TensorFlow checkpoint in the PyTorch model and saves the resulting model in a standard PyTorch save file that can
be imported using `),Ve=a(O,"CODE",{});var Zo=s(Ve);Cr=l(Zo,"from_pretrained()"),Zo.forEach(t),Lr=l(O," (see example in "),De=a(O,"A",{href:!0});var ea=s(De);Ir=l(ea,"quicktour"),ea.forEach(t),Hr=l(O," , "),de=a(O,"A",{href:!0,rel:!0});var ta=s(de);Rr=l(ta,"run_glue.py"),ta.forEach(t),Sr=l(O," )."),O.forEach(t),gt=c(e),y=a(e,"P",{});var L=s(y);Fr=l(L,"You only need to run this conversion script "),We=a(L,"STRONG",{});var ra=s(We);jr=l(ra,"once"),ra.forEach(t),Br=l(L,` to get a PyTorch model. You can then disregard the TensorFlow
checkpoint (the three files starting with `),Ze=a(L,"CODE",{});var oa=s(Ze);Gr=l(oa,"bert_model.ckpt"),oa.forEach(t),Dr=l(L,`) but be sure to keep the configuration file (\\
`),et=a(L,"CODE",{});var aa=s(et);Xr=l(aa,"bert_config.json"),aa.forEach(t),Ur=l(L,") and the vocabulary file ("),tt=a(L,"CODE",{});var sa=s(tt);Mr=l(sa,"vocab.txt"),sa.forEach(t),Kr=l(L,") as these are needed for the PyTorch model too."),L.forEach(t),At=c(e),Q=a(e,"P",{});var or=s(Q);Yr=l(or,"To run this specific conversion script you will need to have TensorFlow and PyTorch installed ("),rt=a(or,"CODE",{});var na=s(rt);qr=l(na,"pip install tensorflow"),na.forEach(t),Jr=l(or,"). The rest of the repository only requires PyTorch."),or.forEach(t),kt=c(e),V=a(e,"P",{});var ar=s(V);zr=l(ar,"Here is an example of the conversion process for a pre-trained "),ot=a(ar,"CODE",{});var la=s(ot);Qr=l(la,"BERT-Base Uncased"),la.forEach(t),Vr=l(ar," model:"),ar.forEach(t),Nt=c(e),v(Te.$$.fragment,e),Ot=c(e),W=a(e,"P",{});var sr=s(W);Wr=l(sr,"You can download Google\u2019s pre-trained models for the conversion "),$e=a(sr,"A",{href:!0,rel:!0});var ia=s($e);Zr=l(ia,"here"),ia.forEach(t),eo=l(sr,"."),sr.forEach(t),xt=c(e),F=a(e,"H2",{class:!0});var nr=s(F);Z=a(nr,"A",{id:!0,class:!0,href:!0});var pa=s(Z);at=a(pa,"SPAN",{});var fa=s(at);v(Ee.$$.fragment,fa),fa.forEach(t),pa.forEach(t),to=c(nr),st=a(nr,"SPAN",{});var ha=s(st);ro=l(ha,"ALBERT"),ha.forEach(t),nr.forEach(t),Ct=c(e),ee=a(e,"P",{});var lr=s(ee);oo=l(lr,`Convert TensorFlow model checkpoints of ALBERT to PyTorch using the
`),Pe=a(lr,"A",{href:!0,rel:!0});var ca=s(Pe);ao=l(ca,"convert_albert_original_tf_checkpoint_to_pytorch.py"),ca.forEach(t),so=l(lr," script."),lr.forEach(t),Lt=c(e),C=a(e,"P",{});var Ye=s(C);no=l(Ye,"The CLI takes as input a TensorFlow checkpoint (three files starting with "),nt=a(Ye,"CODE",{});var _a=s(nt);lo=l(_a,"model.ckpt-best"),_a.forEach(t),io=l(Ye,`) and the accompanying
configuration file (`),lt=a(Ye,"CODE",{});var ma=s(lt);po=l(ma,"albert_config.json"),ma.forEach(t),fo=l(Ye,`), then creates and saves a PyTorch model. To run this conversion you will
need to have TensorFlow and PyTorch installed.`),Ye.forEach(t),It=c(e),te=a(e,"P",{});var ir=s(te);ho=l(ir,"Here is an example of the conversion process for the pre-trained "),it=a(ir,"CODE",{});var va=s(it);co=l(va,"ALBERT Base"),va.forEach(t),_o=l(ir," model:"),ir.forEach(t),Ht=c(e),v(be.$$.fragment,e),Rt=c(e),re=a(e,"P",{});var pr=s(re);mo=l(pr,"You can download Google\u2019s pre-trained models for the conversion "),we=a(pr,"A",{href:!0,rel:!0});var ua=s(we);vo=l(ua,"here"),ua.forEach(t),uo=l(pr,"."),pr.forEach(t),St=c(e),j=a(e,"H2",{class:!0});var fr=s(j);oe=a(fr,"A",{id:!0,class:!0,href:!0});var da=s(oe);pt=a(da,"SPAN",{});var Ta=s(pt);v(ye.$$.fragment,Ta),Ta.forEach(t),da.forEach(t),To=c(fr),ft=a(fr,"SPAN",{});var $a=s(ft);$o=l($a,"OpenAI GPT"),$a.forEach(t),fr.forEach(t),Ft=c(e),ae=a(e,"P",{});var hr=s(ae);Eo=l(hr,`Here is an example of the conversion process for a pre-trained OpenAI GPT model, assuming that your NumPy checkpoint
save as the same format than OpenAI pretrained model (see `),ge=a(hr,"A",{href:!0,rel:!0});var Ea=s(ge);Po=l(Ea,"here"),Ea.forEach(t),bo=l(hr,`\\
)`),hr.forEach(t),jt=c(e),v(Ae.$$.fragment,e),Bt=c(e),B=a(e,"H2",{class:!0});var cr=s(B);se=a(cr,"A",{id:!0,class:!0,href:!0});var Pa=s(se);ht=a(Pa,"SPAN",{});var ba=s(ht);v(ke.$$.fragment,ba),ba.forEach(t),Pa.forEach(t),wo=c(cr),ct=a(cr,"SPAN",{});var wa=s(ct);yo=l(wa,"OpenAI GPT-2"),wa.forEach(t),cr.forEach(t),Gt=c(e),ne=a(e,"P",{});var _r=s(ne);go=l(_r,"Here is an example of the conversion process for a pre-trained OpenAI GPT-2 model (see "),Ne=a(_r,"A",{href:!0,rel:!0});var ya=s(Ne);Ao=l(ya,"here"),ya.forEach(t),ko=l(_r,")"),_r.forEach(t),Dt=c(e),v(Oe.$$.fragment,e),Xt=c(e),G=a(e,"H2",{class:!0});var mr=s(G);le=a(mr,"A",{id:!0,class:!0,href:!0});var ga=s(le);_t=a(ga,"SPAN",{});var Aa=s(_t);v(xe.$$.fragment,Aa),Aa.forEach(t),ga.forEach(t),No=c(mr),mt=a(mr,"SPAN",{});var ka=s(mt);Oo=l(ka,"Transformer-XL"),ka.forEach(t),mr.forEach(t),Ut=c(e),ie=a(e,"P",{});var vr=s(ie);xo=l(vr,"Here is an example of the conversion process for a pre-trained Transformer-XL model (see "),Ce=a(vr,"A",{href:!0,rel:!0});var Na=s(Ce);Co=l(Na,"here"),Na.forEach(t),Lo=l(vr,")"),vr.forEach(t),Mt=c(e),v(Le.$$.fragment,e),Kt=c(e),D=a(e,"H2",{class:!0});var ur=s(D);pe=a(ur,"A",{id:!0,class:!0,href:!0});var Oa=s(pe);vt=a(Oa,"SPAN",{});var xa=s(vt);v(Ie.$$.fragment,xa),xa.forEach(t),Oa.forEach(t),Io=c(ur),ut=a(ur,"SPAN",{});var Ca=s(ut);Ho=l(Ca,"XLNet"),Ca.forEach(t),ur.forEach(t),Yt=c(e),Xe=a(e,"P",{});var La=s(Xe);Ro=l(La,"Here is an example of the conversion process for a pre-trained XLNet model:"),La.forEach(t),qt=c(e),v(He.$$.fragment,e),Jt=c(e),X=a(e,"H2",{class:!0});var dr=s(X);fe=a(dr,"A",{id:!0,class:!0,href:!0});var Ia=s(fe);dt=a(Ia,"SPAN",{});var Ha=s(dt);v(Re.$$.fragment,Ha),Ha.forEach(t),Ia.forEach(t),So=c(dr),Tt=a(dr,"SPAN",{});var Ra=s(Tt);Fo=l(Ra,"XLM"),Ra.forEach(t),dr.forEach(t),zt=c(e),Ue=a(e,"P",{});var Sa=s(Ue);jo=l(Sa,"Here is an example of the conversion process for a pre-trained XLM model:"),Sa.forEach(t),Qt=c(e),v(Se.$$.fragment,e),Vt=c(e),U=a(e,"H2",{class:!0});var Tr=s(U);he=a(Tr,"A",{id:!0,class:!0,href:!0});var Fa=s(he);$t=a(Fa,"SPAN",{});var ja=s($t);v(Fe.$$.fragment,ja),ja.forEach(t),Fa.forEach(t),Bo=c(Tr),Et=a(Tr,"SPAN",{});var Ba=s(Et);Go=l(Ba,"T5"),Ba.forEach(t),Tr.forEach(t),Wt=c(e),Me=a(e,"P",{});var Ga=s(Me);Do=l(Ga,"Here is an example of the conversion process for a pre-trained T5 model:"),Ga.forEach(t),Zt=c(e),v(je.$$.fragment,e),this.h()},h(){f(_,"name","hf:doc:metadata"),f(_,"content",JSON.stringify(za)),f(g,"id","converting-tensorflow-checkpoints"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#converting-tensorflow-checkpoints"),f(P,"class","relative group"),f(z,"id","bert"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#bert"),f(S,"class","relative group"),f(ve,"href","https://github.com/google-research/bert#pre-trained-models"),f(ve,"rel","nofollow"),f(ue,"href","https://github.com/huggingface/transformers/tree/main/src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py"),f(ue,"rel","nofollow"),f(De,"href","quicktour"),f(de,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification/run_glue.py"),f(de,"rel","nofollow"),f($e,"href","https://github.com/google-research/bert#pre-trained-models"),f($e,"rel","nofollow"),f(Z,"id","albert"),f(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Z,"href","#albert"),f(F,"class","relative group"),f(Pe,"href","https://github.com/huggingface/transformers/tree/main/src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py"),f(Pe,"rel","nofollow"),f(we,"href","https://github.com/google-research/albert#pre-trained-models"),f(we,"rel","nofollow"),f(oe,"id","openai-gpt"),f(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oe,"href","#openai-gpt"),f(j,"class","relative group"),f(ge,"href","https://github.com/openai/finetune-transformer-lm"),f(ge,"rel","nofollow"),f(se,"id","openai-gpt2"),f(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(se,"href","#openai-gpt2"),f(B,"class","relative group"),f(Ne,"href","https://github.com/openai/gpt-2"),f(Ne,"rel","nofollow"),f(le,"id","transformerxl"),f(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(le,"href","#transformerxl"),f(G,"class","relative group"),f(Ce,"href","https://github.com/kimiyoung/transformer-xl/tree/master/tf#obtain-and-evaluate-pretrained-sota-models"),f(Ce,"rel","nofollow"),f(pe,"id","xlnet"),f(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pe,"href","#xlnet"),f(D,"class","relative group"),f(fe,"id","xlm"),f(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fe,"href","#xlm"),f(X,"class","relative group"),f(he,"id","t5"),f(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(he,"href","#t5"),f(U,"class","relative group")},m(e,i){r(document.head,_),p(e,K,i),p(e,P,i),r(P,g),r(g,I),u(A,I,null),r(P,k),r(P,H),r(H,R),p(e,Y,i),p(e,N,i),r(N,b),r(N,w),r(w,Ge),r(N,q),p(e,_e,i),u(J,e,i),p(e,bt,i),p(e,S,i),r(S,z),r(z,qe),u(me,qe,null),r(S,$r),r(S,Je),r(Je,Er),p(e,wt,i),p(e,x,i),r(x,Pr),r(x,ve),r(ve,br),r(x,wr),r(x,ue),r(ue,yr),r(x,gr),p(e,yt,i),p(e,E,i),r(E,Ar),r(E,ze),r(ze,kr),r(E,Nr),r(E,Qe),r(Qe,Or),r(E,xr),r(E,Ve),r(Ve,Cr),r(E,Lr),r(E,De),r(De,Ir),r(E,Hr),r(E,de),r(de,Rr),r(E,Sr),p(e,gt,i),p(e,y,i),r(y,Fr),r(y,We),r(We,jr),r(y,Br),r(y,Ze),r(Ze,Gr),r(y,Dr),r(y,et),r(et,Xr),r(y,Ur),r(y,tt),r(tt,Mr),r(y,Kr),p(e,At,i),p(e,Q,i),r(Q,Yr),r(Q,rt),r(rt,qr),r(Q,Jr),p(e,kt,i),p(e,V,i),r(V,zr),r(V,ot),r(ot,Qr),r(V,Vr),p(e,Nt,i),u(Te,e,i),p(e,Ot,i),p(e,W,i),r(W,Wr),r(W,$e),r($e,Zr),r(W,eo),p(e,xt,i),p(e,F,i),r(F,Z),r(Z,at),u(Ee,at,null),r(F,to),r(F,st),r(st,ro),p(e,Ct,i),p(e,ee,i),r(ee,oo),r(ee,Pe),r(Pe,ao),r(ee,so),p(e,Lt,i),p(e,C,i),r(C,no),r(C,nt),r(nt,lo),r(C,io),r(C,lt),r(lt,po),r(C,fo),p(e,It,i),p(e,te,i),r(te,ho),r(te,it),r(it,co),r(te,_o),p(e,Ht,i),u(be,e,i),p(e,Rt,i),p(e,re,i),r(re,mo),r(re,we),r(we,vo),r(re,uo),p(e,St,i),p(e,j,i),r(j,oe),r(oe,pt),u(ye,pt,null),r(j,To),r(j,ft),r(ft,$o),p(e,Ft,i),p(e,ae,i),r(ae,Eo),r(ae,ge),r(ge,Po),r(ae,bo),p(e,jt,i),u(Ae,e,i),p(e,Bt,i),p(e,B,i),r(B,se),r(se,ht),u(ke,ht,null),r(B,wo),r(B,ct),r(ct,yo),p(e,Gt,i),p(e,ne,i),r(ne,go),r(ne,Ne),r(Ne,Ao),r(ne,ko),p(e,Dt,i),u(Oe,e,i),p(e,Xt,i),p(e,G,i),r(G,le),r(le,_t),u(xe,_t,null),r(G,No),r(G,mt),r(mt,Oo),p(e,Ut,i),p(e,ie,i),r(ie,xo),r(ie,Ce),r(Ce,Co),r(ie,Lo),p(e,Mt,i),u(Le,e,i),p(e,Kt,i),p(e,D,i),r(D,pe),r(pe,vt),u(Ie,vt,null),r(D,Io),r(D,ut),r(ut,Ho),p(e,Yt,i),p(e,Xe,i),r(Xe,Ro),p(e,qt,i),u(He,e,i),p(e,Jt,i),p(e,X,i),r(X,fe),r(fe,dt),u(Re,dt,null),r(X,So),r(X,Tt),r(Tt,Fo),p(e,zt,i),p(e,Ue,i),r(Ue,jo),p(e,Qt,i),u(Se,e,i),p(e,Vt,i),p(e,U,i),r(U,he),r(he,$t),u(Fe,$t,null),r(U,Bo),r(U,Et),r(Et,Go),p(e,Wt,i),p(e,Me,i),r(Me,Do),p(e,Zt,i),u(je,e,i),er=!0},p(e,[i]){const Be={};i&2&&(Be.$$scope={dirty:i,ctx:e}),J.$set(Be)},i(e){er||(d(A.$$.fragment,e),d(J.$$.fragment,e),d(me.$$.fragment,e),d(Te.$$.fragment,e),d(Ee.$$.fragment,e),d(be.$$.fragment,e),d(ye.$$.fragment,e),d(Ae.$$.fragment,e),d(ke.$$.fragment,e),d(Oe.$$.fragment,e),d(xe.$$.fragment,e),d(Le.$$.fragment,e),d(Ie.$$.fragment,e),d(He.$$.fragment,e),d(Re.$$.fragment,e),d(Se.$$.fragment,e),d(Fe.$$.fragment,e),d(je.$$.fragment,e),er=!0)},o(e){T(A.$$.fragment,e),T(J.$$.fragment,e),T(me.$$.fragment,e),T(Te.$$.fragment,e),T(Ee.$$.fragment,e),T(be.$$.fragment,e),T(ye.$$.fragment,e),T(Ae.$$.fragment,e),T(ke.$$.fragment,e),T(Oe.$$.fragment,e),T(xe.$$.fragment,e),T(Le.$$.fragment,e),T(Ie.$$.fragment,e),T(He.$$.fragment,e),T(Re.$$.fragment,e),T(Se.$$.fragment,e),T(Fe.$$.fragment,e),T(je.$$.fragment,e),er=!1},d(e){t(_),e&&t(K),e&&t(P),$(A),e&&t(Y),e&&t(N),e&&t(_e),$(J,e),e&&t(bt),e&&t(S),$(me),e&&t(wt),e&&t(x),e&&t(yt),e&&t(E),e&&t(gt),e&&t(y),e&&t(At),e&&t(Q),e&&t(kt),e&&t(V),e&&t(Nt),$(Te,e),e&&t(Ot),e&&t(W),e&&t(xt),e&&t(F),$(Ee),e&&t(Ct),e&&t(ee),e&&t(Lt),e&&t(C),e&&t(It),e&&t(te),e&&t(Ht),$(be,e),e&&t(Rt),e&&t(re),e&&t(St),e&&t(j),$(ye),e&&t(Ft),e&&t(ae),e&&t(jt),$(Ae,e),e&&t(Bt),e&&t(B),$(ke),e&&t(Gt),e&&t(ne),e&&t(Dt),$(Oe,e),e&&t(Xt),e&&t(G),$(xe),e&&t(Ut),e&&t(ie),e&&t(Mt),$(Le,e),e&&t(Kt),e&&t(D),$(Ie),e&&t(Yt),e&&t(Xe),e&&t(qt),$(He,e),e&&t(Jt),e&&t(X),$(Re),e&&t(zt),e&&t(Ue),e&&t(Qt),$(Se,e),e&&t(Vt),e&&t(U),$(Fe),e&&t(Wt),e&&t(Me),e&&t(Zt),$(je,e)}}}const za={local:"converting-tensorflow-checkpoints",sections:[{local:"bert",title:"BERT"},{local:"albert",title:"ALBERT"},{local:"openai-gpt",title:"OpenAI GPT"},{local:"openai-gpt2",title:"OpenAI GPT-2"},{local:"transformerxl",title:"Transformer-XL"},{local:"xlnet",title:"XLNet"},{local:"xlm",title:"XLM"},{local:"t5",title:"T5"}],title:"Converting Tensorflow Checkpoints"};function Qa(Pt){return Ka(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Da{constructor(_){super();Xa(this,_,Qa,Ja,Ua,{})}}export{ts as default,za as metadata};
