import{S as ns,i as is,s as cs,e as l,k as p,w as d,t as r,M as ps,c as o,d as a,m,a as n,x as h,h as s,b as u,G as t,g as c,y as f,L as ms,q as _,o as g,B as y,v as us}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as x}from"../../chunks/CodeBlock-hf-doc-builder.js";function ds(gr){let A,tt,q,O,be,G,Ft,$e,Ht,at,R,Jt,ce,Kt,rt,T,L,Ee,U,Qt,je,Vt,st,z,Xt,Ae,Yt,Zt,lt,w,qe,ea,ta,Te,aa,ra,Ce,sa,ot,k,la,Ie,oa,na,Pe,ia,ca,nt,F,it,D,pa,pe,ma,ua,ct,H,pt,b,da,me,ha,fa,xe,_a,ga,mt,J,ut,S,ya,ue,va,wa,dt,K,ht,de,ka,ft,Q,_t,C,N,Oe,V,ba,Le,$a,gt,$,Ea,ze,ja,Aa,De,qa,Ta,yt,E,X,Se,Ca,Ia,Y,Z,Pa,Ne,xa,Oa,La,ee,za,Be,Da,Sa,Na,te,Me,Ba,Ma,We,ae,Wa,Ge,Ga,Ra,Ua,re,Re,Fa,Ha,Ue,I,Ja,Fe,Ka,Qa,He,Va,Xa,vt,he,Ya,wt,se,kt,v,Za,Je,er,tr,Ke,ar,rr,Qe,sr,lr,bt,le,$t,B,or,Ve,nr,ir,Et,oe,jt,P,M,Xe,ne,cr,Ye,pr,At,j,mr,Ze,ur,dr,et,hr,fr,qt,ie,Tt;return G=new Ut({}),U=new Ut({}),F=new x({props:{code:`from accelerate import Accelerator
from accelerate.utils import LoggerType

accelerator = Accelerator(log_with="all")  # For all available trackers in the environment
accelerator = Accelerator(log_with="wandb")
accelerator = Accelerator(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerator(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerator(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),H=new x({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),J=new x({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),K=new x({props:{code:"accelerator.end_training()",highlighted:"accelerator.end_training()"}}),Q=new x({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(log_with="all")
config = {
    "num_iterations": 5,
    "learning_rate": 1e-2,
    "loss_function": str(my_loss_function),
}

accelerator.init_trackers("example_project", config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config["num_iterations"]:
    for step, batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({"training_loss": loss}, step=step)
accelerator.end_training()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)
config = {
    <span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>,
    <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>,
    <span class="hljs-string">&quot;loss_function&quot;</span>: <span class="hljs-built_in">str</span>(my_loss_function),
}

accelerator.init_trackers(<span class="hljs-string">&quot;example_project&quot;</span>, config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

<span class="hljs-keyword">for</span> iteration <span class="hljs-keyword">in</span> config[<span class="hljs-string">&quot;num_iterations&quot;</span>]:
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({<span class="hljs-string">&quot;training_loss&quot;</span>: loss}, step=step)
accelerator.end_training()`}}),V=new Ut({}),se=new x({props:{code:`from accelerate.tracking import GeneralTracker
from typing import Optional

import wandb


class MyCustomTracker(GeneralTracker):
    name = "wandb"
    requires_logging_directory = False

    def __init__(self, run_name: str):
        self.run_name = run_name
        wandb.init(self.run_name)

    def store_init_configuration(self, values: dict):
        wandb.config(values)

    def log(self, values: dict, step: Optional[int] = None):
        wandb.log(values, step=step)`,highlighted:`<span class="hljs-keyword">from</span> accelerate.tracking <span class="hljs-keyword">import</span> GeneralTracker
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>

<span class="hljs-keyword">import</span> wandb


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyCustomTracker</span>(<span class="hljs-title class_ inherited__">GeneralTracker</span>):
    name = <span class="hljs-string">&quot;wandb&quot;</span>
    requires_logging_directory = <span class="hljs-literal">False</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, run_name: <span class="hljs-built_in">str</span></span>):
        self.run_name = run_name
        wandb.init(self.run_name)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">store_init_configuration</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span></span>):
        wandb.config(values)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span>, step: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span></span>):
        wandb.log(values, step=step)`}}),le=new x({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=tracker)`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=tracker)`}}),oe=new x({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=[tracker, "all"])`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=[tracker, <span class="hljs-string">&quot;all&quot;</span>])`}}),ne=new Ut({}),ie=new x({props:{code:`  from accelerate import Accelerator
+ import neptune.new as neptune

  accelerator = Accelerator()
+ run = neptune.init(...)

  my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
  device = accelerator.device
  my_model.to(device)

  for iteration in config["num_iterations"]:
      for batch in my_training_dataloader:
          my_optimizer.zero_grad()
          inputs, targets = batch
          inputs = inputs.to(device)
          targets = targets.to(device)
          outputs = my_model(inputs)
          loss = my_loss_function(outputs, targets)
          total_loss += loss
          accelerator.backward(loss)
          my_optimizer.step()
+         if accelerator.is_main_process:
+             run["logs/training/batch/loss"].log(loss)`,highlighted:`  from accelerate import Accelerator
<span class="hljs-addition">+ import neptune.new as neptune</span>

  accelerator = Accelerator()
<span class="hljs-addition">+ run = neptune.init(...)</span>

  my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
  device = accelerator.device
  my_model.to(device)

  for iteration in config[&quot;num_iterations&quot;]:
      for batch in my_training_dataloader:
          my_optimizer.zero_grad()
          inputs, targets = batch
          inputs = inputs.to(device)
          targets = targets.to(device)
          outputs = my_model(inputs)
          loss = my_loss_function(outputs, targets)
          total_loss += loss
          accelerator.backward(loss)
          my_optimizer.step()
<span class="hljs-addition">+         if accelerator.is_main_process:</span>
<span class="hljs-addition">+             run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){A=l("meta"),tt=p(),q=l("h1"),O=l("a"),be=l("span"),d(G.$$.fragment),Ft=p(),$e=l("span"),Ht=r("Tracking"),at=p(),R=l("p"),Jt=r(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),ce=l("a"),Kt=r("log()"),rt=p(),T=l("h2"),L=l("a"),Ee=l("span"),d(U.$$.fragment),Qt=p(),je=l("span"),Vt=r("Integrated Trackers"),st=p(),z=l("p"),Xt=r("Currently "),Ae=l("code"),Yt=r("Accelerate"),Zt=r(" supports three trackers out-of-the-box:"),lt=p(),w=l("ul"),qe=l("li"),ea=r("TensorBoard"),ta=p(),Te=l("li"),aa=r("WandB"),ra=p(),Ce=l("li"),sa=r("CometML"),ot=p(),k=l("p"),la=r("To use any of them, pass in the selected type(s) to the "),Ie=l("code"),oa=r("log_with"),na=r(" parameter in "),Pe=l("code"),ia=r("Accelerate"),ca=r(":"),nt=p(),d(F.$$.fragment),it=p(),D=l("p"),pa=r("At the start of your experiment "),pe=l("a"),ma=r("init_trackers()"),ua=r(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),ct=p(),d(H.$$.fragment),pt=p(),b=l("p"),da=r("When you are ready to log any data, "),me=l("a"),ha=r("log()"),fa=r(` should be used.
A `),xe=l("code"),_a=r("step"),ga=r(" can also be passed in to correlate the data with a particular step in the training loop."),mt=p(),d(J.$$.fragment),ut=p(),S=l("p"),ya=r("Once you\u2019ve finished training, make sure to run "),ue=l("a"),va=r("end_training()"),wa=r(" so that all the trackers can run their finish functionalities if they have any."),dt=p(),d(K.$$.fragment),ht=p(),de=l("p"),ka=r("A full example is below:"),ft=p(),d(Q.$$.fragment),_t=p(),C=l("h2"),N=l("a"),Oe=l("span"),d(V.$$.fragment),ba=p(),Le=l("span"),$a=r("Implementing Custom Trackers"),gt=p(),$=l("p"),Ea=r("To implement a new tracker to be used in "),ze=l("code"),ja=r("Accelerator"),Aa=r(", a new one can be made through implementing the "),De=l("code"),qa=r("~GeneralTracker"),Ta=r(` class.
Every tracker must implement three functions:`),yt=p(),E=l("ul"),X=l("li"),Se=l("code"),Ca=r("__init__"),Ia=r(": "),Y=l("ul"),Z=l("li"),Pa=r("Should store a "),Ne=l("code"),xa=r("run_name"),Oa=r(" and initialize the tracker API of the integrated library."),La=p(),ee=l("li"),za=r("If a tracker stores their data locally (such as TensorBoard), a "),Be=l("code"),Da=r("logging_dir"),Sa=r(" parameter can be added."),Na=p(),te=l("li"),Me=l("code"),Ba=r("store_init_configuration"),Ma=r(": "),We=l("ul"),ae=l("li"),Wa=r("Should take in a "),Ge=l("code"),Ga=r("values"),Ra=r(" dictionary and store them as a one-time experiment configuration"),Ua=p(),re=l("li"),Re=l("code"),Fa=r("log"),Ha=r(": "),Ue=l("ul"),I=l("li"),Ja=r("Should take in a "),Fe=l("code"),Ka=r("values"),Qa=r(" dictionary and a "),He=l("code"),Va=r("step"),Xa=r(", and should log them to the run"),vt=p(),he=l("p"),Ya=r("A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),wt=p(),d(se.$$.fragment),kt=p(),v=l("p"),Za=r("When you are ready to build your "),Je=l("code"),er=r("Accelerator"),tr=r(" object, pass in an "),Ke=l("strong"),ar=r("instance"),rr=r(" of your tracker to "),Qe=l("code"),sr=r("log_with"),lr=r(` to have it automatically
be used with the API:`),bt=p(),d(le.$$.fragment),$t=p(),B=l("p"),or=r("These also can be mixed with existing trackers, including with "),Ve=l("code"),nr=r('"all"'),ir=r(":"),Et=p(),d(oe.$$.fragment),jt=p(),P=l("h2"),M=l("a"),Xe=l("span"),d(ne.$$.fragment),cr=p(),Ye=l("span"),pr=r("When a wrapper cannot work"),At=p(),j=l("p"),mr=r("If a library has an API that does not follow a strict "),Ze=l("code"),ur=r(".log"),dr=r(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),et=l("code"),hr=r("if accelerator.is_main_process"),fr=r(" statement:"),qt=p(),d(ie.$$.fragment),this.h()},l(e){const i=ps('[data-svelte="svelte-1phssyn"]',document.head);A=o(i,"META",{name:!0,content:!0}),i.forEach(a),tt=m(e),q=o(e,"H1",{class:!0});var Ct=n(q);O=o(Ct,"A",{id:!0,class:!0,href:!0});var yr=n(O);be=o(yr,"SPAN",{});var vr=n(be);h(G.$$.fragment,vr),vr.forEach(a),yr.forEach(a),Ft=m(Ct),$e=o(Ct,"SPAN",{});var wr=n($e);Ht=s(wr,"Tracking"),wr.forEach(a),Ct.forEach(a),at=m(e),R=o(e,"P",{});var _r=n(R);Jt=s(_r,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),ce=o(_r,"A",{href:!0});var kr=n(ce);Kt=s(kr,"log()"),kr.forEach(a),_r.forEach(a),rt=m(e),T=o(e,"H2",{class:!0});var It=n(T);L=o(It,"A",{id:!0,class:!0,href:!0});var br=n(L);Ee=o(br,"SPAN",{});var $r=n(Ee);h(U.$$.fragment,$r),$r.forEach(a),br.forEach(a),Qt=m(It),je=o(It,"SPAN",{});var Er=n(je);Vt=s(Er,"Integrated Trackers"),Er.forEach(a),It.forEach(a),st=m(e),z=o(e,"P",{});var Pt=n(z);Xt=s(Pt,"Currently "),Ae=o(Pt,"CODE",{});var jr=n(Ae);Yt=s(jr,"Accelerate"),jr.forEach(a),Zt=s(Pt," supports three trackers out-of-the-box:"),Pt.forEach(a),lt=m(e),w=o(e,"UL",{});var fe=n(w);qe=o(fe,"LI",{});var Ar=n(qe);ea=s(Ar,"TensorBoard"),Ar.forEach(a),ta=m(fe),Te=o(fe,"LI",{});var qr=n(Te);aa=s(qr,"WandB"),qr.forEach(a),ra=m(fe),Ce=o(fe,"LI",{});var Tr=n(Ce);sa=s(Tr,"CometML"),Tr.forEach(a),fe.forEach(a),ot=m(e),k=o(e,"P",{});var _e=n(k);la=s(_e,"To use any of them, pass in the selected type(s) to the "),Ie=o(_e,"CODE",{});var Cr=n(Ie);oa=s(Cr,"log_with"),Cr.forEach(a),na=s(_e," parameter in "),Pe=o(_e,"CODE",{});var Ir=n(Pe);ia=s(Ir,"Accelerate"),Ir.forEach(a),ca=s(_e,":"),_e.forEach(a),nt=m(e),h(F.$$.fragment,e),it=m(e),D=o(e,"P",{});var xt=n(D);pa=s(xt,"At the start of your experiment "),pe=o(xt,"A",{href:!0});var Pr=n(pe);ma=s(Pr,"init_trackers()"),Pr.forEach(a),ua=s(xt," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),xt.forEach(a),ct=m(e),h(H.$$.fragment,e),pt=m(e),b=o(e,"P",{});var ge=n(b);da=s(ge,"When you are ready to log any data, "),me=o(ge,"A",{href:!0});var xr=n(me);ha=s(xr,"log()"),xr.forEach(a),fa=s(ge,` should be used.
A `),xe=o(ge,"CODE",{});var Or=n(xe);_a=s(Or,"step"),Or.forEach(a),ga=s(ge," can also be passed in to correlate the data with a particular step in the training loop."),ge.forEach(a),mt=m(e),h(J.$$.fragment,e),ut=m(e),S=o(e,"P",{});var Ot=n(S);ya=s(Ot,"Once you\u2019ve finished training, make sure to run "),ue=o(Ot,"A",{href:!0});var Lr=n(ue);va=s(Lr,"end_training()"),Lr.forEach(a),wa=s(Ot," so that all the trackers can run their finish functionalities if they have any."),Ot.forEach(a),dt=m(e),h(K.$$.fragment,e),ht=m(e),de=o(e,"P",{});var zr=n(de);ka=s(zr,"A full example is below:"),zr.forEach(a),ft=m(e),h(Q.$$.fragment,e),_t=m(e),C=o(e,"H2",{class:!0});var Lt=n(C);N=o(Lt,"A",{id:!0,class:!0,href:!0});var Dr=n(N);Oe=o(Dr,"SPAN",{});var Sr=n(Oe);h(V.$$.fragment,Sr),Sr.forEach(a),Dr.forEach(a),ba=m(Lt),Le=o(Lt,"SPAN",{});var Nr=n(Le);$a=s(Nr,"Implementing Custom Trackers"),Nr.forEach(a),Lt.forEach(a),gt=m(e),$=o(e,"P",{});var ye=n($);Ea=s(ye,"To implement a new tracker to be used in "),ze=o(ye,"CODE",{});var Br=n(ze);ja=s(Br,"Accelerator"),Br.forEach(a),Aa=s(ye,", a new one can be made through implementing the "),De=o(ye,"CODE",{});var Mr=n(De);qa=s(Mr,"~GeneralTracker"),Mr.forEach(a),Ta=s(ye,` class.
Every tracker must implement three functions:`),ye.forEach(a),yt=m(e),E=o(e,"UL",{});var ve=n(E);X=o(ve,"LI",{});var zt=n(X);Se=o(zt,"CODE",{});var Wr=n(Se);Ca=s(Wr,"__init__"),Wr.forEach(a),Ia=s(zt,": "),Y=o(zt,"UL",{});var Dt=n(Y);Z=o(Dt,"LI",{});var St=n(Z);Pa=s(St,"Should store a "),Ne=o(St,"CODE",{});var Gr=n(Ne);xa=s(Gr,"run_name"),Gr.forEach(a),Oa=s(St," and initialize the tracker API of the integrated library."),St.forEach(a),La=m(Dt),ee=o(Dt,"LI",{});var Nt=n(ee);za=s(Nt,"If a tracker stores their data locally (such as TensorBoard), a "),Be=o(Nt,"CODE",{});var Rr=n(Be);Da=s(Rr,"logging_dir"),Rr.forEach(a),Sa=s(Nt," parameter can be added."),Nt.forEach(a),Dt.forEach(a),zt.forEach(a),Na=m(ve),te=o(ve,"LI",{});var Bt=n(te);Me=o(Bt,"CODE",{});var Ur=n(Me);Ba=s(Ur,"store_init_configuration"),Ur.forEach(a),Ma=s(Bt,": "),We=o(Bt,"UL",{});var Fr=n(We);ae=o(Fr,"LI",{});var Mt=n(ae);Wa=s(Mt,"Should take in a "),Ge=o(Mt,"CODE",{});var Hr=n(Ge);Ga=s(Hr,"values"),Hr.forEach(a),Ra=s(Mt," dictionary and store them as a one-time experiment configuration"),Mt.forEach(a),Fr.forEach(a),Bt.forEach(a),Ua=m(ve),re=o(ve,"LI",{});var Wt=n(re);Re=o(Wt,"CODE",{});var Jr=n(Re);Fa=s(Jr,"log"),Jr.forEach(a),Ha=s(Wt,": "),Ue=o(Wt,"UL",{});var Kr=n(Ue);I=o(Kr,"LI",{});var we=n(I);Ja=s(we,"Should take in a "),Fe=o(we,"CODE",{});var Qr=n(Fe);Ka=s(Qr,"values"),Qr.forEach(a),Qa=s(we," dictionary and a "),He=o(we,"CODE",{});var Vr=n(He);Va=s(Vr,"step"),Vr.forEach(a),Xa=s(we,", and should log them to the run"),we.forEach(a),Kr.forEach(a),Wt.forEach(a),ve.forEach(a),vt=m(e),he=o(e,"P",{});var Xr=n(he);Ya=s(Xr,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),Xr.forEach(a),wt=m(e),h(se.$$.fragment,e),kt=m(e),v=o(e,"P",{});var W=n(v);Za=s(W,"When you are ready to build your "),Je=o(W,"CODE",{});var Yr=n(Je);er=s(Yr,"Accelerator"),Yr.forEach(a),tr=s(W," object, pass in an "),Ke=o(W,"STRONG",{});var Zr=n(Ke);ar=s(Zr,"instance"),Zr.forEach(a),rr=s(W," of your tracker to "),Qe=o(W,"CODE",{});var es=n(Qe);sr=s(es,"log_with"),es.forEach(a),lr=s(W,` to have it automatically
be used with the API:`),W.forEach(a),bt=m(e),h(le.$$.fragment,e),$t=m(e),B=o(e,"P",{});var Gt=n(B);or=s(Gt,"These also can be mixed with existing trackers, including with "),Ve=o(Gt,"CODE",{});var ts=n(Ve);nr=s(ts,'"all"'),ts.forEach(a),ir=s(Gt,":"),Gt.forEach(a),Et=m(e),h(oe.$$.fragment,e),jt=m(e),P=o(e,"H2",{class:!0});var Rt=n(P);M=o(Rt,"A",{id:!0,class:!0,href:!0});var as=n(M);Xe=o(as,"SPAN",{});var rs=n(Xe);h(ne.$$.fragment,rs),rs.forEach(a),as.forEach(a),cr=m(Rt),Ye=o(Rt,"SPAN",{});var ss=n(Ye);pr=s(ss,"When a wrapper cannot work"),ss.forEach(a),Rt.forEach(a),At=m(e),j=o(e,"P",{});var ke=n(j);mr=s(ke,"If a library has an API that does not follow a strict "),Ze=o(ke,"CODE",{});var ls=n(Ze);ur=s(ls,".log"),ls.forEach(a),dr=s(ke," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),et=o(ke,"CODE",{});var os=n(et);hr=s(os,"if accelerator.is_main_process"),os.forEach(a),fr=s(ke," statement:"),ke.forEach(a),qt=m(e),h(ie.$$.fragment,e),this.h()},h(){u(A,"name","hf:doc:metadata"),u(A,"content",JSON.stringify(hs)),u(O,"id","tracking"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#tracking"),u(q,"class","relative group"),u(ce,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.log"),u(L,"id","integrated-trackers"),u(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(L,"href","#integrated-trackers"),u(T,"class","relative group"),u(pe,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.init_trackers"),u(me,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.log"),u(ue,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.end_training"),u(N,"id","implementing-custom-trackers"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#implementing-custom-trackers"),u(C,"class","relative group"),u(M,"id","when-a-wrapper-cannot-work"),u(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(M,"href","#when-a-wrapper-cannot-work"),u(P,"class","relative group")},m(e,i){t(document.head,A),c(e,tt,i),c(e,q,i),t(q,O),t(O,be),f(G,be,null),t(q,Ft),t(q,$e),t($e,Ht),c(e,at,i),c(e,R,i),t(R,Jt),t(R,ce),t(ce,Kt),c(e,rt,i),c(e,T,i),t(T,L),t(L,Ee),f(U,Ee,null),t(T,Qt),t(T,je),t(je,Vt),c(e,st,i),c(e,z,i),t(z,Xt),t(z,Ae),t(Ae,Yt),t(z,Zt),c(e,lt,i),c(e,w,i),t(w,qe),t(qe,ea),t(w,ta),t(w,Te),t(Te,aa),t(w,ra),t(w,Ce),t(Ce,sa),c(e,ot,i),c(e,k,i),t(k,la),t(k,Ie),t(Ie,oa),t(k,na),t(k,Pe),t(Pe,ia),t(k,ca),c(e,nt,i),f(F,e,i),c(e,it,i),c(e,D,i),t(D,pa),t(D,pe),t(pe,ma),t(D,ua),c(e,ct,i),f(H,e,i),c(e,pt,i),c(e,b,i),t(b,da),t(b,me),t(me,ha),t(b,fa),t(b,xe),t(xe,_a),t(b,ga),c(e,mt,i),f(J,e,i),c(e,ut,i),c(e,S,i),t(S,ya),t(S,ue),t(ue,va),t(S,wa),c(e,dt,i),f(K,e,i),c(e,ht,i),c(e,de,i),t(de,ka),c(e,ft,i),f(Q,e,i),c(e,_t,i),c(e,C,i),t(C,N),t(N,Oe),f(V,Oe,null),t(C,ba),t(C,Le),t(Le,$a),c(e,gt,i),c(e,$,i),t($,Ea),t($,ze),t(ze,ja),t($,Aa),t($,De),t(De,qa),t($,Ta),c(e,yt,i),c(e,E,i),t(E,X),t(X,Se),t(Se,Ca),t(X,Ia),t(X,Y),t(Y,Z),t(Z,Pa),t(Z,Ne),t(Ne,xa),t(Z,Oa),t(Y,La),t(Y,ee),t(ee,za),t(ee,Be),t(Be,Da),t(ee,Sa),t(E,Na),t(E,te),t(te,Me),t(Me,Ba),t(te,Ma),t(te,We),t(We,ae),t(ae,Wa),t(ae,Ge),t(Ge,Ga),t(ae,Ra),t(E,Ua),t(E,re),t(re,Re),t(Re,Fa),t(re,Ha),t(re,Ue),t(Ue,I),t(I,Ja),t(I,Fe),t(Fe,Ka),t(I,Qa),t(I,He),t(He,Va),t(I,Xa),c(e,vt,i),c(e,he,i),t(he,Ya),c(e,wt,i),f(se,e,i),c(e,kt,i),c(e,v,i),t(v,Za),t(v,Je),t(Je,er),t(v,tr),t(v,Ke),t(Ke,ar),t(v,rr),t(v,Qe),t(Qe,sr),t(v,lr),c(e,bt,i),f(le,e,i),c(e,$t,i),c(e,B,i),t(B,or),t(B,Ve),t(Ve,nr),t(B,ir),c(e,Et,i),f(oe,e,i),c(e,jt,i),c(e,P,i),t(P,M),t(M,Xe),f(ne,Xe,null),t(P,cr),t(P,Ye),t(Ye,pr),c(e,At,i),c(e,j,i),t(j,mr),t(j,Ze),t(Ze,ur),t(j,dr),t(j,et),t(et,hr),t(j,fr),c(e,qt,i),f(ie,e,i),Tt=!0},p:ms,i(e){Tt||(_(G.$$.fragment,e),_(U.$$.fragment,e),_(F.$$.fragment,e),_(H.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(se.$$.fragment,e),_(le.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(ie.$$.fragment,e),Tt=!0)},o(e){g(G.$$.fragment,e),g(U.$$.fragment,e),g(F.$$.fragment,e),g(H.$$.fragment,e),g(J.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(V.$$.fragment,e),g(se.$$.fragment,e),g(le.$$.fragment,e),g(oe.$$.fragment,e),g(ne.$$.fragment,e),g(ie.$$.fragment,e),Tt=!1},d(e){a(A),e&&a(tt),e&&a(q),y(G),e&&a(at),e&&a(R),e&&a(rt),e&&a(T),y(U),e&&a(st),e&&a(z),e&&a(lt),e&&a(w),e&&a(ot),e&&a(k),e&&a(nt),y(F,e),e&&a(it),e&&a(D),e&&a(ct),y(H,e),e&&a(pt),e&&a(b),e&&a(mt),y(J,e),e&&a(ut),e&&a(S),e&&a(dt),y(K,e),e&&a(ht),e&&a(de),e&&a(ft),y(Q,e),e&&a(_t),e&&a(C),y(V),e&&a(gt),e&&a($),e&&a(yt),e&&a(E),e&&a(vt),e&&a(he),e&&a(wt),y(se,e),e&&a(kt),e&&a(v),e&&a(bt),y(le,e),e&&a($t),e&&a(B),e&&a(Et),y(oe,e),e&&a(jt),e&&a(P),y(ne),e&&a(At),e&&a(j),e&&a(qt),y(ie,e)}}}const hs={local:"tracking",sections:[{local:"integrated-trackers",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"when-a-wrapper-cannot-work",title:"When a wrapper cannot work"}],title:"Tracking"};function fs(gr){return us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vs extends ns{constructor(A){super();is(this,A,fs,ds,cs,{})}}export{vs as default,hs as metadata};
