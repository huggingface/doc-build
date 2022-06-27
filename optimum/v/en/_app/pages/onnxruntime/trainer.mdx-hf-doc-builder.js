import{S as Kn,i as Qn,s as Zn,e as r,k as l,w as v,t as i,M as er,c as a,d as n,m,a as o,x as _,h as s,b as d,G as e,g as O,y,q as b,o as T,B as x,v as tr}from"../../chunks/vendor-hf-doc-builder.js";import{T as nr}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{I as wn}from"../../chunks/IconCopyLink-hf-doc-builder.js";function rr(Fe){let p,I;return{c(){p=r("p"),I=i(`If your predictions or labels have different sequence lengths (for instance because you\u2019re doing dynamic
padding in a token classification task) the predictions will be padded (on the right) to allow for
concatenation into one array. The padding index is -100.`)},l(h){p=a(h,"P",{});var $=o(p);I=s($,`If your predictions or labels have different sequence lengths (for instance because you\u2019re doing dynamic
padding in a token classification task) the predictions will be padded (on the right) to allow for
concatenation into one array. The padding index is -100.`),$.forEach(n)},m(h,$){O(h,p,$),e(p,I)},d(h){h&&n(p)}}}function ar(Fe){let p,I,h,$,ye,j,lt,be,mt,He,N,A,Te,Y,dt,xe,ct,We,c,G,pt,M,J,ut,$e,ht,gt,z,K,ft,Q,vt,we,_t,yt,bt,U,Z,Tt,q,xt,Oe,$t,wt,ke,Ot,kt,Et,V,ee,Nt,te,qt,Ee,Rt,Dt,St,F,ne,Pt,R,Lt,Ne,Ct,It,qe,At,Mt,zt,H,re,Ut,Re,Vt,Xe,D,W,De,ae,Ft,Se,Ht,Be,w,oe,Wt,X,ie,Xt,se,Bt,Pe,jt,Yt,Gt,g,le,Jt,me,Kt,Le,Qt,Zt,en,B,tn,de,nn,Ce,rn,an,on,S,P,sn,Ie,ln,mn,Ae,dn,cn,pn,L,un,Me,hn,gn,ze,fn,vn,_n,C,yn,Ue,bn,Tn,Ve,xn,$n,je;return j=new wn({}),Y=new wn({}),G=new E({props:{name:"class optimum.onnxruntime.ORTTrainer",anchor:"optimum.onnxruntime.ORTTrainer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"feature",val:": str = 'default'"},{name:"args",val:": TrainingArguments = None"},{name:"data_collator",val:": typing.Optional[DataCollator] = None"},{name:"train_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"model_init",val:": typing.Callable[[], transformers.modeling_utils.PreTrainedModel] = None"},{name:"compute_metrics",val:": typing.Union[typing.Callable[[transformers.trainer_utils.EvalPrediction], typing.Dict], NoneType] = None"},{name:"callbacks",val:": typing.Optional[typing.List[transformers.trainer_callback.TrainerCallback]] = None"},{name:"optimizers",val:": typing.Tuple[torch.optim.optimizer.Optimizer, torch.optim.lr_scheduler.LambdaLR] = (None, None)"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike] = None"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L121"}}),J=new E({props:{name:"compute_loss_ort",anchor:"optimum.onnxruntime.ORTTrainer.compute_loss_ort",parameters:[{name:"model",val:""},{name:"inputs",val:""},{name:"input_names",val:""},{name:"output_names",val:""},{name:"return_outputs",val:" = False"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L1213"}}),K=new E({props:{name:"evaluate",anchor:"optimum.onnxruntime.ORTTrainer.evaluate",parameters:[{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"inference_with_ort",val:": bool = False"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L639"}}),Z=new E({props:{name:"evaluation_loop_ort",anchor:"optimum.onnxruntime.ORTTrainer.evaluation_loop_ort",parameters:[{name:"dataloader",val:": DataLoader"},{name:"description",val:": str"},{name:"prediction_loss_only",val:": typing.Optional[bool] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L761"}}),ee=new E({props:{name:"predict",anchor:"optimum.onnxruntime.ORTTrainer.predict",parameters:[{name:"test_dataset",val:": Dataset"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'test'"},{name:"inference_with_ort",val:": bool = False"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L706"}}),ne=new E({props:{name:"prediction_loop_ort",anchor:"optimum.onnxruntime.ORTTrainer.prediction_loop_ort",parameters:[{name:"dataloader",val:": DataLoader"},{name:"description",val:": str"},{name:"prediction_loss_only",val:": typing.Optional[bool] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L969"}}),re=new E({props:{name:"train",anchor:"optimum.onnxruntime.ORTTrainer.train",parameters:[{name:"resume_from_checkpoint",val:": typing.Union[bool, str, NoneType] = None"},{name:"trial",val:": typing.Union[ForwardRef('optuna.Trial'), typing.Dict[str, typing.Any]] = None"},{name:"ignore_keys_for_eval",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTTrainer.train.resume_from_checkpoint",description:`<strong>resume_from_checkpoint</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
If a <code>str</code>, local path to a saved checkpoint as saved by a previous instance of <code>Trainer</code>. If a
<code>bool</code> and equals <code>True</code>, load the last checkpoint in <em>args.output_dir</em> as saved by a previous instance
of <code>Trainer</code>. If present, training will resume from the model/optimizer/scheduler states loaded here.`,name:"resume_from_checkpoint"},{anchor:"optimum.onnxruntime.ORTTrainer.train.trial",description:`<strong>trial</strong> (<code>optuna.Trial</code> or <code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The trial run or the hyperparameter dictionary for hyperparameter search.`,name:"trial"},{anchor:"optimum.onnxruntime.ORTTrainer.train.ignore_keys_for_eval",description:`<strong>ignore_keys_for_eval</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions for evaluation during the training.
kwargs &#x2014;
Additional keyword arguments used to hide deprecated arguments`,name:"ignore_keys_for_eval"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer.py#L158"}}),ae=new wn({}),oe=new E({props:{name:"class optimum.onnxruntime.ORTSeq2SeqTrainer",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"feature",val:": str = 'default'"},{name:"args",val:": TrainingArguments = None"},{name:"data_collator",val:": typing.Optional[DataCollator] = None"},{name:"train_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"model_init",val:": typing.Callable[[], transformers.modeling_utils.PreTrainedModel] = None"},{name:"compute_metrics",val:": typing.Union[typing.Callable[[transformers.trainer_utils.EvalPrediction], typing.Dict], NoneType] = None"},{name:"callbacks",val:": typing.Optional[typing.List[transformers.trainer_callback.TrainerCallback]] = None"},{name:"optimizers",val:": typing.Tuple[torch.optim.optimizer.Optimizer, torch.optim.lr_scheduler.LambdaLR] = (None, None)"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike] = None"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer_seq2seq.py#L38"}}),ie=new E({props:{name:"evaluate",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate",parameters:[{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"inference_with_ort",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.eval_dataset",description:`<strong>eval_dataset</strong> (<code>Dataset</code>, <em>optional</em>) &#x2014;
Pass a dataset if you wish to override <code>self.eval_dataset</code>. If it is an <code>datasets.Dataset</code>,
columns not accepted by the <code>model.forward()</code> method are automatically removed. It must implement the
<code>__len__</code> method.`,name:"eval_dataset"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.ignore_keys",description:`<strong>ignore_keys</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions.`,name:"ignore_keys"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.metric_key_prefix",description:`<strong>metric_key_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;eval&quot;</code>) &#x2014;
An optional prefix to be used as the metrics key prefix. For example the metrics &#x201C;bleu&#x201D; will be named
&#x201C;eval_bleu&#x201D; if the prefix is <code>&quot;eval&quot;</code> (default)`,name:"metric_key_prefix"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum target length to use when predicting with the generate method.`,name:"max_length"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of beams for beam search that will be used when predicting with the generate method. 1 means no
beam search.`,name:"num_beams"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.inference_with_ort",description:`<strong>inference_with_ort</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether enable inference within ONNX Runtime backend. The inference will be done within PyTorch by default.`,name:"inference_with_ort"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer_seq2seq.py#L39",returnDescription:`
<p>A dictionary containing the evaluation loss(only within PyTorch) and the potential metrics computed from the predictions. The
dictionary also contains the epoch number which comes from the training state.</p>
`}}),le=new E({props:{name:"predict",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict",parameters:[{name:"test_dataset",val:": Dataset"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"inference_with_ort",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.test_dataset",description:`<strong>test_dataset</strong> (<code>Dataset</code>) &#x2014;
Dataset to run the predictions on. If it is an <code>datasets.Dataset</code>, columns not accepted by the
<code>model.forward()</code> method are automatically removed. Has to implement the method <code>__len__</code>`,name:"test_dataset"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.ignore_keys",description:`<strong>ignore_keys</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions.`,name:"ignore_keys"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.metric_key_prefix",description:`<strong>metric_key_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;eval&quot;</code>) &#x2014;
An optional prefix to be used as the metrics key prefix. For example the metrics &#x201C;bleu&#x201D; will be named
&#x201C;eval_bleu&#x201D; if the prefix is <code>&quot;eval&quot;</code> (default)`,name:"metric_key_prefix"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum target length to use when predicting with the generate method.`,name:"max_length"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of beams for beam search that will be used when predicting with the generate method. 1 means no
beam search.`,name:"num_beams"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.inference_with_ort",description:`<strong>inference_with_ort</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether enable inference within ONNX Runtime backend. The inference will be done within PyTorch by default.`,name:"inference_with_ort"}],source:"https://github.com/huggingface/optimum/blob/v/src/optimum/onnxruntime/trainer_seq2seq.py#L88"}}),B=new nr({props:{$$slots:{default:[rr]},$$scope:{ctx:Fe}}}),{c(){p=r("meta"),I=l(),h=r("h1"),$=r("a"),ye=r("span"),v(j.$$.fragment),lt=l(),be=r("span"),mt=i("Trainer"),He=l(),N=r("h2"),A=r("a"),Te=r("span"),v(Y.$$.fragment),dt=l(),xe=r("span"),ct=i("ORTTrainer"),We=l(),c=r("div"),v(G.$$.fragment),pt=l(),M=r("div"),v(J.$$.fragment),ut=l(),$e=r("p"),ht=i(`How the loss is computed by Trainer. By default, all models return the loss in the first element.
Subclass and override for custom behavior.`),gt=l(),z=r("div"),v(K.$$.fragment),ft=l(),Q=r("p"),vt=i("Run evaluation within ONNX Runtime or PyTorch backend and returns metrics.(Overriden from "),we=r("code"),_t=i("Trainer.evaluate()"),yt=i(")"),bt=l(),U=r("div"),v(Z.$$.fragment),Tt=l(),q=r("p"),xt=i("Prediction/evaluation loop, shared by "),Oe=r("code"),$t=i("ORTTrainer.evaluate()"),wt=i(" and "),ke=r("code"),Ot=i("ORTTrainer.predict()"),kt=i(`.
Works both with or without labels.`),Et=l(),V=r("div"),v(ee.$$.fragment),Nt=l(),te=r("p"),qt=i(`Run prediction within ONNX Runtime or PyTorch backend and returns predictions and potential metrics.
(Overriden from `),Ee=r("code"),Rt=i("Trainer.predict()"),Dt=i(")"),St=l(),F=r("div"),v(ne.$$.fragment),Pt=l(),R=r("p"),Lt=i("Prediction/evaluation loop, shared by "),Ne=r("code"),Ct=i("Trainer.evaluate()"),It=i(" and "),qe=r("code"),At=i("Trainer.predict()"),Mt=i(`.
Works both with or without labels.`),zt=l(),H=r("div"),v(re.$$.fragment),Ut=l(),Re=r("p"),Vt=i("Main onnxruntime training entry point."),Xe=l(),D=r("h2"),W=r("a"),De=r("span"),v(ae.$$.fragment),Ft=l(),Se=r("span"),Ht=i("ORTSeq2SeqTrainer"),Be=l(),w=r("div"),v(oe.$$.fragment),Wt=l(),X=r("div"),v(ie.$$.fragment),Xt=l(),se=r("p"),Bt=i(`Run evaluation and returns metrics.
The calling script will be responsible for providing a method to compute metrics, as they are task-dependent
(pass it to the init `),Pe=r("code"),jt=i("compute_metrics"),Yt=i(` argument).
You can also subclass and override this method to inject custom behavior.`),Gt=l(),g=r("div"),v(le.$$.fragment),Jt=l(),me=r("p"),Kt=i(`Run prediction and returns predictions and potential metrics.
Depending on the dataset and your use case, your test dataset may contain labels. In that case, this method
will also return metrics, like in `),Le=r("code"),Qt=i("evaluate()"),Zt=i("."),en=l(),v(B.$$.fragment),tn=l(),de=r("p"),nn=i("Returns: "),Ce=r("em"),rn=i("NamedTuple"),an=i(" A namedtuple with the following keys:"),on=l(),S=r("ul"),P=r("li"),sn=i("predictions ("),Ie=r("code"),ln=i("np.ndarray"),mn=i("): The predictions on "),Ae=r("code"),dn=i("test_dataset"),cn=i("."),pn=l(),L=r("li"),un=i("label_ids ("),Me=r("code"),hn=i("np.ndarray"),gn=i(", "),ze=r("em"),fn=i("optional"),vn=i("): The labels (if the dataset contained some)."),_n=l(),C=r("li"),yn=i("metrics ("),Ue=r("code"),bn=i("Dict[str, float]"),Tn=i(", "),Ve=r("em"),xn=i("optional"),$n=i(`): The potential dictionary of metrics (if the dataset
contained labels).`),this.h()},l(t){const u=er('[data-svelte="svelte-1phssyn"]',document.head);p=a(u,"META",{name:!0,content:!0}),u.forEach(n),I=m(t),h=a(t,"H1",{class:!0});var ce=o(h);$=a(ce,"A",{id:!0,class:!0,href:!0});var On=o($);ye=a(On,"SPAN",{});var kn=o(ye);_(j.$$.fragment,kn),kn.forEach(n),On.forEach(n),lt=m(ce),be=a(ce,"SPAN",{});var En=o(be);mt=s(En,"Trainer"),En.forEach(n),ce.forEach(n),He=m(t),N=a(t,"H2",{class:!0});var Ye=o(N);A=a(Ye,"A",{id:!0,class:!0,href:!0});var Nn=o(A);Te=a(Nn,"SPAN",{});var qn=o(Te);_(Y.$$.fragment,qn),qn.forEach(n),Nn.forEach(n),dt=m(Ye),xe=a(Ye,"SPAN",{});var Rn=o(xe);ct=s(Rn,"ORTTrainer"),Rn.forEach(n),Ye.forEach(n),We=m(t),c=a(t,"DIV",{class:!0});var f=o(c);_(G.$$.fragment,f),pt=m(f),M=a(f,"DIV",{class:!0});var Ge=o(M);_(J.$$.fragment,Ge),ut=m(Ge),$e=a(Ge,"P",{});var Dn=o($e);ht=s(Dn,`How the loss is computed by Trainer. By default, all models return the loss in the first element.
Subclass and override for custom behavior.`),Dn.forEach(n),Ge.forEach(n),gt=m(f),z=a(f,"DIV",{class:!0});var Je=o(z);_(K.$$.fragment,Je),ft=m(Je),Q=a(Je,"P",{});var Ke=o(Q);vt=s(Ke,"Run evaluation within ONNX Runtime or PyTorch backend and returns metrics.(Overriden from "),we=a(Ke,"CODE",{});var Sn=o(we);_t=s(Sn,"Trainer.evaluate()"),Sn.forEach(n),yt=s(Ke,")"),Ke.forEach(n),Je.forEach(n),bt=m(f),U=a(f,"DIV",{class:!0});var Qe=o(U);_(Z.$$.fragment,Qe),Tt=m(Qe),q=a(Qe,"P",{});var pe=o(q);xt=s(pe,"Prediction/evaluation loop, shared by "),Oe=a(pe,"CODE",{});var Pn=o(Oe);$t=s(Pn,"ORTTrainer.evaluate()"),Pn.forEach(n),wt=s(pe," and "),ke=a(pe,"CODE",{});var Ln=o(ke);Ot=s(Ln,"ORTTrainer.predict()"),Ln.forEach(n),kt=s(pe,`.
Works both with or without labels.`),pe.forEach(n),Qe.forEach(n),Et=m(f),V=a(f,"DIV",{class:!0});var Ze=o(V);_(ee.$$.fragment,Ze),Nt=m(Ze),te=a(Ze,"P",{});var et=o(te);qt=s(et,`Run prediction within ONNX Runtime or PyTorch backend and returns predictions and potential metrics.
(Overriden from `),Ee=a(et,"CODE",{});var Cn=o(Ee);Rt=s(Cn,"Trainer.predict()"),Cn.forEach(n),Dt=s(et,")"),et.forEach(n),Ze.forEach(n),St=m(f),F=a(f,"DIV",{class:!0});var tt=o(F);_(ne.$$.fragment,tt),Pt=m(tt),R=a(tt,"P",{});var ue=o(R);Lt=s(ue,"Prediction/evaluation loop, shared by "),Ne=a(ue,"CODE",{});var In=o(Ne);Ct=s(In,"Trainer.evaluate()"),In.forEach(n),It=s(ue," and "),qe=a(ue,"CODE",{});var An=o(qe);At=s(An,"Trainer.predict()"),An.forEach(n),Mt=s(ue,`.
Works both with or without labels.`),ue.forEach(n),tt.forEach(n),zt=m(f),H=a(f,"DIV",{class:!0});var nt=o(H);_(re.$$.fragment,nt),Ut=m(nt),Re=a(nt,"P",{});var Mn=o(Re);Vt=s(Mn,"Main onnxruntime training entry point."),Mn.forEach(n),nt.forEach(n),f.forEach(n),Xe=m(t),D=a(t,"H2",{class:!0});var rt=o(D);W=a(rt,"A",{id:!0,class:!0,href:!0});var zn=o(W);De=a(zn,"SPAN",{});var Un=o(De);_(ae.$$.fragment,Un),Un.forEach(n),zn.forEach(n),Ft=m(rt),Se=a(rt,"SPAN",{});var Vn=o(Se);Ht=s(Vn,"ORTSeq2SeqTrainer"),Vn.forEach(n),rt.forEach(n),Be=m(t),w=a(t,"DIV",{class:!0});var he=o(w);_(oe.$$.fragment,he),Wt=m(he),X=a(he,"DIV",{class:!0});var at=o(X);_(ie.$$.fragment,at),Xt=m(at),se=a(at,"P",{});var ot=o(se);Bt=s(ot,`Run evaluation and returns metrics.
The calling script will be responsible for providing a method to compute metrics, as they are task-dependent
(pass it to the init `),Pe=a(ot,"CODE",{});var Fn=o(Pe);jt=s(Fn,"compute_metrics"),Fn.forEach(n),Yt=s(ot,` argument).
You can also subclass and override this method to inject custom behavior.`),ot.forEach(n),at.forEach(n),Gt=m(he),g=a(he,"DIV",{class:!0});var k=o(g);_(le.$$.fragment,k),Jt=m(k),me=a(k,"P",{});var it=o(me);Kt=s(it,`Run prediction and returns predictions and potential metrics.
Depending on the dataset and your use case, your test dataset may contain labels. In that case, this method
will also return metrics, like in `),Le=a(it,"CODE",{});var Hn=o(Le);Qt=s(Hn,"evaluate()"),Hn.forEach(n),Zt=s(it,"."),it.forEach(n),en=m(k),_(B.$$.fragment,k),tn=m(k),de=a(k,"P",{});var st=o(de);nn=s(st,"Returns: "),Ce=a(st,"EM",{});var Wn=o(Ce);rn=s(Wn,"NamedTuple"),Wn.forEach(n),an=s(st," A namedtuple with the following keys:"),st.forEach(n),on=m(k),S=a(k,"UL",{});var ge=o(S);P=a(ge,"LI",{});var fe=o(P);sn=s(fe,"predictions ("),Ie=a(fe,"CODE",{});var Xn=o(Ie);ln=s(Xn,"np.ndarray"),Xn.forEach(n),mn=s(fe,"): The predictions on "),Ae=a(fe,"CODE",{});var Bn=o(Ae);dn=s(Bn,"test_dataset"),Bn.forEach(n),cn=s(fe,"."),fe.forEach(n),pn=m(ge),L=a(ge,"LI",{});var ve=o(L);un=s(ve,"label_ids ("),Me=a(ve,"CODE",{});var jn=o(Me);hn=s(jn,"np.ndarray"),jn.forEach(n),gn=s(ve,", "),ze=a(ve,"EM",{});var Yn=o(ze);fn=s(Yn,"optional"),Yn.forEach(n),vn=s(ve,"): The labels (if the dataset contained some)."),ve.forEach(n),_n=m(ge),C=a(ge,"LI",{});var _e=o(C);yn=s(_e,"metrics ("),Ue=a(_e,"CODE",{});var Gn=o(Ue);bn=s(Gn,"Dict[str, float]"),Gn.forEach(n),Tn=s(_e,", "),Ve=a(_e,"EM",{});var Jn=o(Ve);xn=s(Jn,"optional"),Jn.forEach(n),$n=s(_e,`): The potential dictionary of metrics (if the dataset
contained labels).`),_e.forEach(n),ge.forEach(n),k.forEach(n),he.forEach(n),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(or)),d($,"id","trainer"),d($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($,"href","#trainer"),d(h,"class","relative group"),d(A,"id","optimum.onnxruntime.ORTTrainer"),d(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(A,"href","#optimum.onnxruntime.ORTTrainer"),d(N,"class","relative group"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(W,"id","optimum.onnxruntime.ORTSeq2SeqTrainer"),d(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(W,"href","#optimum.onnxruntime.ORTSeq2SeqTrainer"),d(D,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,p),O(t,I,u),O(t,h,u),e(h,$),e($,ye),y(j,ye,null),e(h,lt),e(h,be),e(be,mt),O(t,He,u),O(t,N,u),e(N,A),e(A,Te),y(Y,Te,null),e(N,dt),e(N,xe),e(xe,ct),O(t,We,u),O(t,c,u),y(G,c,null),e(c,pt),e(c,M),y(J,M,null),e(M,ut),e(M,$e),e($e,ht),e(c,gt),e(c,z),y(K,z,null),e(z,ft),e(z,Q),e(Q,vt),e(Q,we),e(we,_t),e(Q,yt),e(c,bt),e(c,U),y(Z,U,null),e(U,Tt),e(U,q),e(q,xt),e(q,Oe),e(Oe,$t),e(q,wt),e(q,ke),e(ke,Ot),e(q,kt),e(c,Et),e(c,V),y(ee,V,null),e(V,Nt),e(V,te),e(te,qt),e(te,Ee),e(Ee,Rt),e(te,Dt),e(c,St),e(c,F),y(ne,F,null),e(F,Pt),e(F,R),e(R,Lt),e(R,Ne),e(Ne,Ct),e(R,It),e(R,qe),e(qe,At),e(R,Mt),e(c,zt),e(c,H),y(re,H,null),e(H,Ut),e(H,Re),e(Re,Vt),O(t,Xe,u),O(t,D,u),e(D,W),e(W,De),y(ae,De,null),e(D,Ft),e(D,Se),e(Se,Ht),O(t,Be,u),O(t,w,u),y(oe,w,null),e(w,Wt),e(w,X),y(ie,X,null),e(X,Xt),e(X,se),e(se,Bt),e(se,Pe),e(Pe,jt),e(se,Yt),e(w,Gt),e(w,g),y(le,g,null),e(g,Jt),e(g,me),e(me,Kt),e(me,Le),e(Le,Qt),e(me,Zt),e(g,en),y(B,g,null),e(g,tn),e(g,de),e(de,nn),e(de,Ce),e(Ce,rn),e(de,an),e(g,on),e(g,S),e(S,P),e(P,sn),e(P,Ie),e(Ie,ln),e(P,mn),e(P,Ae),e(Ae,dn),e(P,cn),e(S,pn),e(S,L),e(L,un),e(L,Me),e(Me,hn),e(L,gn),e(L,ze),e(ze,fn),e(L,vn),e(S,_n),e(S,C),e(C,yn),e(C,Ue),e(Ue,bn),e(C,Tn),e(C,Ve),e(Ve,xn),e(C,$n),je=!0},p(t,[u]){const ce={};u&2&&(ce.$$scope={dirty:u,ctx:t}),B.$set(ce)},i(t){je||(b(j.$$.fragment,t),b(Y.$$.fragment,t),b(G.$$.fragment,t),b(J.$$.fragment,t),b(K.$$.fragment,t),b(Z.$$.fragment,t),b(ee.$$.fragment,t),b(ne.$$.fragment,t),b(re.$$.fragment,t),b(ae.$$.fragment,t),b(oe.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(B.$$.fragment,t),je=!0)},o(t){T(j.$$.fragment,t),T(Y.$$.fragment,t),T(G.$$.fragment,t),T(J.$$.fragment,t),T(K.$$.fragment,t),T(Z.$$.fragment,t),T(ee.$$.fragment,t),T(ne.$$.fragment,t),T(re.$$.fragment,t),T(ae.$$.fragment,t),T(oe.$$.fragment,t),T(ie.$$.fragment,t),T(le.$$.fragment,t),T(B.$$.fragment,t),je=!1},d(t){n(p),t&&n(I),t&&n(h),x(j),t&&n(He),t&&n(N),x(Y),t&&n(We),t&&n(c),x(G),x(J),x(K),x(Z),x(ee),x(ne),x(re),t&&n(Xe),t&&n(D),x(ae),t&&n(Be),t&&n(w),x(oe),x(ie),x(le),x(B)}}}const or={local:"trainer",sections:[{local:"optimum.onnxruntime.ORTTrainer",title:"ORTTrainer"},{local:"optimum.onnxruntime.ORTSeq2SeqTrainer",title:"ORTSeq2SeqTrainer"}],title:"Trainer"};function ir(Fe){return tr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cr extends Kn{constructor(p){super();Qn(this,p,ir,ar,Zn,{})}}export{cr as default,or as metadata};
