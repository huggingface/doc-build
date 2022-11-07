import{S as Wo,i as Bo,s as Uo,e as s,k as p,w as f,t as r,M as Fo,c as o,d as a,m as d,a as n,x as u,h as l,b as h,G as t,g as c,y as m,q as _,o as g,B as v,v as Go}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ro}from"../../chunks/Tip-hf-doc-builder.js";import{I as Xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as A}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ho(Yt){let w;return{c(){w=r("Make sure to only interact with trackers on the main process!")},l(j){w=l(j,"Make sure to only interact with trackers on the main process!")},m(j,b){c(j,w,b)},d(j){j&&a(w)}}}function Jo(Yt){let w,j,b,M,Ye,Z,ar,Ze,rr,Zt,ee,lr,Pe,sr,ea,L,W,et,te,or,tt,nr,ta,B,ir,at,cr,pr,aa,k,rt,dr,hr,lt,fr,ur,st,mr,_r,ot,gr,ra,q,vr,nt,yr,wr,it,kr,$r,la,ae,sa,U,Er,Le,br,Ar,oa,re,na,T,jr,xe,qr,Tr,ct,Cr,Ir,ia,le,ca,F,Or,De,Pr,Lr,pa,se,da,Se,xr,ha,oe,fa,x,G,pt,ne,Dr,dt,Sr,ua,C,zr,ht,Nr,Mr,ft,Wr,Br,ma,y,ie,ze,ut,Ur,Fr,Gr,ce,pe,Rr,mt,Hr,Jr,Kr,de,Qr,_t,Vr,Xr,Yr,he,Ne,gt,Zr,el,tl,vt,fe,al,yt,rl,ll,sl,ue,Me,wt,ol,nl,il,kt,D,cl,$t,pl,dl,Et,hl,fl,ul,me,R,bt,ml,_l,At,gl,vl,yl,_e,ge,wl,jt,kl,$l,El,qt,bl,Al,ve,H,Tt,jl,ql,Ct,Tl,Cl,Il,It,ye,Ol,Ot,Pl,Ll,xl,we,We,Pt,Dl,Sl,zl,ke,$e,Nl,Lt,Ml,Wl,Bl,S,Ul,xt,Fl,Gl,Dt,Rl,Hl,_a,Be,Jl,ga,Ee,va,$,Kl,St,Ql,Vl,zt,Xl,Yl,Nt,Zl,es,ya,be,wa,J,ts,Mt,as,rs,ka,Ae,$a,z,K,Wt,je,ls,Bt,ss,Ea,I,os,Ue,ns,is,Ut,cs,ps,ba,Fe,ds,Aa,qe,ja,O,hs,Ft,fs,us,Gt,ms,_s,qa,Q,Ta,Te,Ca,N,V,Rt,Ce,gs,Ht,vs,Ia,P,ys,Jt,ws,ks,Kt,$s,Es,Oa,Ie,Pa;return Z=new Xt({}),te=new Xt({}),ae=new A({props:{code:`from accelerate import Accelerator
from accelerate.utils import LoggerType

accelerator = Accelerator(log_with="all")  # For all available trackers in the environment
accelerator = Accelerator(log_with="wandb")
accelerator = Accelerator(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerator(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerator(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),re=new A({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),le=new A({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),se=new A({props:{code:"accelerator.end_training()",highlighted:"accelerator.end_training()"}}),oe=new A({props:{code:`from accelerate import Accelerator

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
accelerator.end_training()`}}),ne=new Xt({}),Ee=new A({props:{code:`from accelerate.tracking import GeneralTracker
from typing import Optional

import wandb


class MyCustomTracker(GeneralTracker):
    name = "wandb"
    requires_logging_directory = False

    def __init__(self, run_name: str):
        self.run_name = run_name
        run = wandb.init(self.run_name)

    @property
    def tracker(self):
        return self.run.run

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
        run = wandb.init(self.run_name)

<span class="hljs-meta">    @property</span>
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">tracker</span>(<span class="hljs-params">self</span>):
        <span class="hljs-keyword">return</span> self.run.run

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">store_init_configuration</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span></span>):
        wandb.config(values)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span>, step: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span></span>):
        wandb.log(values, step=step)`}}),be=new A({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=tracker)`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=tracker)`}}),Ae=new A({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=[tracker, "all"])`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=[tracker, <span class="hljs-string">&quot;all&quot;</span>])`}}),je=new Xt({}),qe=new A({props:{code:'wandb_tracker = accelerator.get_tracker("wandb")',highlighted:'wandb_tracker = accelerator.get_tracker(<span class="hljs-string">&quot;wandb&quot;</span>)'}}),Q=new Ro({props:{warning:!0,$$slots:{default:[Ho]},$$scope:{ctx:Yt}}}),Te=new A({props:{code:`if accelerator.is_main_process:
    wandb_run.log_artifact(some_artifact_to_log)`,highlighted:`<span class="hljs-keyword">if</span> accelerator.is_main_process:
    wandb_run.log_artifact(some_artifact_to_log)`}}),Ce=new Xt({}),Ie=new A({props:{code:`  from accelerate import Accelerator
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
<span class="hljs-addition">+             run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){w=s("meta"),j=p(),b=s("h1"),M=s("a"),Ye=s("span"),f(Z.$$.fragment),ar=p(),Ze=s("span"),rr=r("Tracking"),Zt=p(),ee=s("p"),lr=r(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),Pe=s("a"),sr=r("Accelerator.log()"),ea=p(),L=s("h2"),W=s("a"),et=s("span"),f(te.$$.fragment),or=p(),tt=s("span"),nr=r("Integrated Trackers"),ta=p(),B=s("p"),ir=r("Currently "),at=s("code"),cr=r("Accelerate"),pr=r(" supports four trackers out-of-the-box:"),aa=p(),k=s("ul"),rt=s("li"),dr=r("TensorBoard"),hr=p(),lt=s("li"),fr=r("WandB"),ur=p(),st=s("li"),mr=r("CometML"),_r=p(),ot=s("li"),gr=r("MLFlow"),ra=p(),q=s("p"),vr=r("To use any of them, pass in the selected type(s) to the "),nt=s("code"),yr=r("log_with"),wr=r(" parameter in "),it=s("code"),kr=r("Accelerate"),$r=r(":"),la=p(),f(ae.$$.fragment),sa=p(),U=s("p"),Er=r("At the start of your experiment "),Le=s("a"),br=r("Accelerator.init_trackers()"),Ar=r(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),oa=p(),f(re.$$.fragment),na=p(),T=s("p"),jr=r("When you are ready to log any data, "),xe=s("a"),qr=r("Accelerator.log()"),Tr=r(` should be used.
A `),ct=s("code"),Cr=r("step"),Ir=r(" can also be passed in to correlate the data with a particular step in the training loop."),ia=p(),f(le.$$.fragment),ca=p(),F=s("p"),Or=r("Once you\u2019ve finished training, make sure to run "),De=s("a"),Pr=r("Accelerator.end_training()"),Lr=r(" so that all the trackers can run their finish functionalities if they have any."),pa=p(),f(se.$$.fragment),da=p(),Se=s("p"),xr=r("A full example is below:"),ha=p(),f(oe.$$.fragment),fa=p(),x=s("h2"),G=s("a"),pt=s("span"),f(ne.$$.fragment),Dr=p(),dt=s("span"),Sr=r("Implementing Custom Trackers"),ua=p(),C=s("p"),zr=r("To implement a new tracker to be used in "),ht=s("code"),Nr=r("Accelerator"),Mr=r(", a new one can be made through implementing the "),ft=s("code"),Wr=r("GeneralTracker"),Br=r(` class.
Every tracker must implement three functions and have three properties:`),ma=p(),y=s("ul"),ie=s("li"),ze=s("p"),ut=s("code"),Ur=r("__init__"),Fr=r(":"),Gr=p(),ce=s("ul"),pe=s("li"),Rr=r("Should store a "),mt=s("code"),Hr=r("run_name"),Jr=r(" and initialize the tracker API of the integrated library."),Kr=p(),de=s("li"),Qr=r("If a tracker stores their data locally (such as TensorBoard), a "),_t=s("code"),Vr=r("logging_dir"),Xr=r(" parameter can be added."),Yr=p(),he=s("li"),Ne=s("p"),gt=s("code"),Zr=r("store_init_configuration"),el=r(":"),tl=p(),vt=s("ul"),fe=s("li"),al=r("Should take in a "),yt=s("code"),rl=r("values"),ll=r(" dictionary and store them as a one-time experiment configuration"),sl=p(),ue=s("li"),Me=s("p"),wt=s("code"),ol=r("log"),nl=r(":"),il=p(),kt=s("ul"),D=s("li"),cl=r("Should take in a "),$t=s("code"),pl=r("values"),dl=r(" dictionary and a "),Et=s("code"),hl=r("step"),fl=r(", and should log them to the run"),ul=p(),me=s("li"),R=s("p"),bt=s("code"),ml=r("name"),_l=r(" ("),At=s("code"),gl=r("str"),vl=r("):"),yl=p(),_e=s("ul"),ge=s("li"),wl=r("A unique string name for the tracker, such as "),jt=s("code"),kl=r('"wandb"'),$l=r(" for the wandb tracker."),El=p(),qt=s("li"),bl=r("This will be used for interacting with this tracker specifically"),Al=p(),ve=s("li"),H=s("p"),Tt=s("code"),jl=r("requires_logging_directory"),ql=r(" ("),Ct=s("code"),Tl=r("bool"),Cl=r("):"),Il=p(),It=s("ul"),ye=s("li"),Ol=r("Whether a "),Ot=s("code"),Pl=r("logging_dir"),Ll=r(" is needed for this particular tracker and if it uses one."),xl=p(),we=s("li"),We=s("p"),Pt=s("code"),Dl=r("tracker"),Sl=r(":"),zl=p(),ke=s("ul"),$e=s("li"),Nl=r("This should be implemented as a "),Lt=s("code"),Ml=r("@property"),Wl=r(" function"),Bl=p(),S=s("li"),Ul=r("Should return the internal tracking mechanism the library uses, such as the "),xt=s("code"),Fl=r("run"),Gl=r(" object for "),Dt=s("code"),Rl=r("wandb"),Hl=r("."),_a=p(),Be=s("p"),Jl=r("A brief example can be seen below with an integration with Weights and Biases, containing only the relevant information:"),ga=p(),f(Ee.$$.fragment),va=p(),$=s("p"),Kl=r("When you are ready to build your "),St=s("code"),Ql=r("Accelerator"),Vl=r(" object, pass in an "),zt=s("strong"),Xl=r("instance"),Yl=r(" of your tracker to "),Nt=s("code"),Zl=r("Accelerator.log_with"),es=r(` to have it automatically
be used with the API:`),ya=p(),f(be.$$.fragment),wa=p(),J=s("p"),ts=r("These also can be mixed with existing trackers, including with "),Mt=s("code"),as=r('"all"'),rs=r(":"),ka=p(),f(Ae.$$.fragment),$a=p(),z=s("h2"),K=s("a"),Wt=s("span"),f(je.$$.fragment),ls=p(),Bt=s("span"),ss=r("Accessing the internal tracker"),Ea=p(),I=s("p"),os=r(`If some custom interactions with a tracker might be wanted directly, you can quickly access one using the
`),Ue=s("a"),ns=r("Accelerator.get_tracker()"),is=r(" method. Just pass in the string corresponding to a tracker\u2019s "),Ut=s("code"),cs=r(".name"),ps=r(` attribute
and it will return that tracker on the main process.`),ba=p(),Fe=s("p"),ds=r("This example shows doing so with wandb:"),Aa=p(),f(qe.$$.fragment),ja=p(),O=s("p"),hs=r("From there you can interact with "),Ft=s("code"),fs=r("wandb"),us=r("\u2019s "),Gt=s("code"),ms=r("run"),_s=r(" object like normal:"),qa=p(),f(Q.$$.fragment),Ta=p(),f(Te.$$.fragment),Ca=p(),N=s("h2"),V=s("a"),Rt=s("span"),f(Ce.$$.fragment),gs=p(),Ht=s("span"),vs=r("When a wrapper cannot work"),Ia=p(),P=s("p"),ys=r("If a library has an API that does not follow a strict "),Jt=s("code"),ws=r(".log"),ks=r(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Kt=s("code"),$s=r("if accelerator.is_main_process"),Es=r(" statement:"),Oa=p(),f(Ie.$$.fragment),this.h()},l(e){const i=Fo('[data-svelte="svelte-1phssyn"]',document.head);w=o(i,"META",{name:!0,content:!0}),i.forEach(a),j=d(e),b=o(e,"H1",{class:!0});var Oe=n(b);M=o(Oe,"A",{id:!0,class:!0,href:!0});var Cs=n(M);Ye=o(Cs,"SPAN",{});var Is=n(Ye);u(Z.$$.fragment,Is),Is.forEach(a),Cs.forEach(a),ar=d(Oe),Ze=o(Oe,"SPAN",{});var Os=n(Ze);rr=l(Os,"Tracking"),Os.forEach(a),Oe.forEach(a),Zt=d(e),ee=o(e,"P",{});var bs=n(ee);lr=l(bs,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),Pe=o(bs,"A",{href:!0});var Ps=n(Pe);sr=l(Ps,"Accelerator.log()"),Ps.forEach(a),bs.forEach(a),ea=d(e),L=o(e,"H2",{class:!0});var La=n(L);W=o(La,"A",{id:!0,class:!0,href:!0});var Ls=n(W);et=o(Ls,"SPAN",{});var xs=n(et);u(te.$$.fragment,xs),xs.forEach(a),Ls.forEach(a),or=d(La),tt=o(La,"SPAN",{});var Ds=n(tt);nr=l(Ds,"Integrated Trackers"),Ds.forEach(a),La.forEach(a),ta=d(e),B=o(e,"P",{});var xa=n(B);ir=l(xa,"Currently "),at=o(xa,"CODE",{});var Ss=n(at);cr=l(Ss,"Accelerate"),Ss.forEach(a),pr=l(xa," supports four trackers out-of-the-box:"),xa.forEach(a),aa=d(e),k=o(e,"UL",{});var X=n(k);rt=o(X,"LI",{});var zs=n(rt);dr=l(zs,"TensorBoard"),zs.forEach(a),hr=d(X),lt=o(X,"LI",{});var Ns=n(lt);fr=l(Ns,"WandB"),Ns.forEach(a),ur=d(X),st=o(X,"LI",{});var Ms=n(st);mr=l(Ms,"CometML"),Ms.forEach(a),_r=d(X),ot=o(X,"LI",{});var Ws=n(ot);gr=l(Ws,"MLFlow"),Ws.forEach(a),X.forEach(a),ra=d(e),q=o(e,"P",{});var Ge=n(q);vr=l(Ge,"To use any of them, pass in the selected type(s) to the "),nt=o(Ge,"CODE",{});var Bs=n(nt);yr=l(Bs,"log_with"),Bs.forEach(a),wr=l(Ge," parameter in "),it=o(Ge,"CODE",{});var Us=n(it);kr=l(Us,"Accelerate"),Us.forEach(a),$r=l(Ge,":"),Ge.forEach(a),la=d(e),u(ae.$$.fragment,e),sa=d(e),U=o(e,"P",{});var Da=n(U);Er=l(Da,"At the start of your experiment "),Le=o(Da,"A",{href:!0});var Fs=n(Le);br=l(Fs,"Accelerator.init_trackers()"),Fs.forEach(a),Ar=l(Da," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),Da.forEach(a),oa=d(e),u(re.$$.fragment,e),na=d(e),T=o(e,"P",{});var Re=n(T);jr=l(Re,"When you are ready to log any data, "),xe=o(Re,"A",{href:!0});var Gs=n(xe);qr=l(Gs,"Accelerator.log()"),Gs.forEach(a),Tr=l(Re,` should be used.
A `),ct=o(Re,"CODE",{});var Rs=n(ct);Cr=l(Rs,"step"),Rs.forEach(a),Ir=l(Re," can also be passed in to correlate the data with a particular step in the training loop."),Re.forEach(a),ia=d(e),u(le.$$.fragment,e),ca=d(e),F=o(e,"P",{});var Sa=n(F);Or=l(Sa,"Once you\u2019ve finished training, make sure to run "),De=o(Sa,"A",{href:!0});var Hs=n(De);Pr=l(Hs,"Accelerator.end_training()"),Hs.forEach(a),Lr=l(Sa," so that all the trackers can run their finish functionalities if they have any."),Sa.forEach(a),pa=d(e),u(se.$$.fragment,e),da=d(e),Se=o(e,"P",{});var Js=n(Se);xr=l(Js,"A full example is below:"),Js.forEach(a),ha=d(e),u(oe.$$.fragment,e),fa=d(e),x=o(e,"H2",{class:!0});var za=n(x);G=o(za,"A",{id:!0,class:!0,href:!0});var Ks=n(G);pt=o(Ks,"SPAN",{});var Qs=n(pt);u(ne.$$.fragment,Qs),Qs.forEach(a),Ks.forEach(a),Dr=d(za),dt=o(za,"SPAN",{});var Vs=n(dt);Sr=l(Vs,"Implementing Custom Trackers"),Vs.forEach(a),za.forEach(a),ua=d(e),C=o(e,"P",{});var He=n(C);zr=l(He,"To implement a new tracker to be used in "),ht=o(He,"CODE",{});var Xs=n(ht);Nr=l(Xs,"Accelerator"),Xs.forEach(a),Mr=l(He,", a new one can be made through implementing the "),ft=o(He,"CODE",{});var Ys=n(ft);Wr=l(Ys,"GeneralTracker"),Ys.forEach(a),Br=l(He,` class.
Every tracker must implement three functions and have three properties:`),He.forEach(a),ma=d(e),y=o(e,"UL",{});var E=n(y);ie=o(E,"LI",{});var Na=n(ie);ze=o(Na,"P",{});var As=n(ze);ut=o(As,"CODE",{});var Zs=n(ut);Ur=l(Zs,"__init__"),Zs.forEach(a),Fr=l(As,":"),As.forEach(a),Gr=d(Na),ce=o(Na,"UL",{});var Ma=n(ce);pe=o(Ma,"LI",{});var Wa=n(pe);Rr=l(Wa,"Should store a "),mt=o(Wa,"CODE",{});var eo=n(mt);Hr=l(eo,"run_name"),eo.forEach(a),Jr=l(Wa," and initialize the tracker API of the integrated library."),Wa.forEach(a),Kr=d(Ma),de=o(Ma,"LI",{});var Ba=n(de);Qr=l(Ba,"If a tracker stores their data locally (such as TensorBoard), a "),_t=o(Ba,"CODE",{});var to=n(_t);Vr=l(to,"logging_dir"),to.forEach(a),Xr=l(Ba," parameter can be added."),Ba.forEach(a),Ma.forEach(a),Na.forEach(a),Yr=d(E),he=o(E,"LI",{});var Ua=n(he);Ne=o(Ua,"P",{});var js=n(Ne);gt=o(js,"CODE",{});var ao=n(gt);Zr=l(ao,"store_init_configuration"),ao.forEach(a),el=l(js,":"),js.forEach(a),tl=d(Ua),vt=o(Ua,"UL",{});var ro=n(vt);fe=o(ro,"LI",{});var Fa=n(fe);al=l(Fa,"Should take in a "),yt=o(Fa,"CODE",{});var lo=n(yt);rl=l(lo,"values"),lo.forEach(a),ll=l(Fa," dictionary and store them as a one-time experiment configuration"),Fa.forEach(a),ro.forEach(a),Ua.forEach(a),sl=d(E),ue=o(E,"LI",{});var Ga=n(ue);Me=o(Ga,"P",{});var qs=n(Me);wt=o(qs,"CODE",{});var so=n(wt);ol=l(so,"log"),so.forEach(a),nl=l(qs,":"),qs.forEach(a),il=d(Ga),kt=o(Ga,"UL",{});var oo=n(kt);D=o(oo,"LI",{});var Je=n(D);cl=l(Je,"Should take in a "),$t=o(Je,"CODE",{});var no=n($t);pl=l(no,"values"),no.forEach(a),dl=l(Je," dictionary and a "),Et=o(Je,"CODE",{});var io=n(Et);hl=l(io,"step"),io.forEach(a),fl=l(Je,", and should log them to the run"),Je.forEach(a),oo.forEach(a),Ga.forEach(a),ul=d(E),me=o(E,"LI",{});var Ra=n(me);R=o(Ra,"P",{});var Qt=n(R);bt=o(Qt,"CODE",{});var co=n(bt);ml=l(co,"name"),co.forEach(a),_l=l(Qt," ("),At=o(Qt,"CODE",{});var po=n(At);gl=l(po,"str"),po.forEach(a),vl=l(Qt,"):"),Qt.forEach(a),yl=d(Ra),_e=o(Ra,"UL",{});var Ha=n(_e);ge=o(Ha,"LI",{});var Ja=n(ge);wl=l(Ja,"A unique string name for the tracker, such as "),jt=o(Ja,"CODE",{});var ho=n(jt);kl=l(ho,'"wandb"'),ho.forEach(a),$l=l(Ja," for the wandb tracker."),Ja.forEach(a),El=d(Ha),qt=o(Ha,"LI",{});var fo=n(qt);bl=l(fo,"This will be used for interacting with this tracker specifically"),fo.forEach(a),Ha.forEach(a),Ra.forEach(a),Al=d(E),ve=o(E,"LI",{});var Ka=n(ve);H=o(Ka,"P",{});var Vt=n(H);Tt=o(Vt,"CODE",{});var uo=n(Tt);jl=l(uo,"requires_logging_directory"),uo.forEach(a),ql=l(Vt," ("),Ct=o(Vt,"CODE",{});var mo=n(Ct);Tl=l(mo,"bool"),mo.forEach(a),Cl=l(Vt,"):"),Vt.forEach(a),Il=d(Ka),It=o(Ka,"UL",{});var _o=n(It);ye=o(_o,"LI",{});var Qa=n(ye);Ol=l(Qa,"Whether a "),Ot=o(Qa,"CODE",{});var go=n(Ot);Pl=l(go,"logging_dir"),go.forEach(a),Ll=l(Qa," is needed for this particular tracker and if it uses one."),Qa.forEach(a),_o.forEach(a),Ka.forEach(a),xl=d(E),we=o(E,"LI",{});var Va=n(we);We=o(Va,"P",{});var Ts=n(We);Pt=o(Ts,"CODE",{});var vo=n(Pt);Dl=l(vo,"tracker"),vo.forEach(a),Sl=l(Ts,":"),Ts.forEach(a),zl=d(Va),ke=o(Va,"UL",{});var Xa=n(ke);$e=o(Xa,"LI",{});var Ya=n($e);Nl=l(Ya,"This should be implemented as a "),Lt=o(Ya,"CODE",{});var yo=n(Lt);Ml=l(yo,"@property"),yo.forEach(a),Wl=l(Ya," function"),Ya.forEach(a),Bl=d(Xa),S=o(Xa,"LI",{});var Ke=n(S);Ul=l(Ke,"Should return the internal tracking mechanism the library uses, such as the "),xt=o(Ke,"CODE",{});var wo=n(xt);Fl=l(wo,"run"),wo.forEach(a),Gl=l(Ke," object for "),Dt=o(Ke,"CODE",{});var ko=n(Dt);Rl=l(ko,"wandb"),ko.forEach(a),Hl=l(Ke,"."),Ke.forEach(a),Xa.forEach(a),Va.forEach(a),E.forEach(a),_a=d(e),Be=o(e,"P",{});var $o=n(Be);Jl=l($o,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevant information:"),$o.forEach(a),ga=d(e),u(Ee.$$.fragment,e),va=d(e),$=o(e,"P",{});var Y=n($);Kl=l(Y,"When you are ready to build your "),St=o(Y,"CODE",{});var Eo=n(St);Ql=l(Eo,"Accelerator"),Eo.forEach(a),Vl=l(Y," object, pass in an "),zt=o(Y,"STRONG",{});var bo=n(zt);Xl=l(bo,"instance"),bo.forEach(a),Yl=l(Y," of your tracker to "),Nt=o(Y,"CODE",{});var Ao=n(Nt);Zl=l(Ao,"Accelerator.log_with"),Ao.forEach(a),es=l(Y,` to have it automatically
be used with the API:`),Y.forEach(a),ya=d(e),u(be.$$.fragment,e),wa=d(e),J=o(e,"P",{});var Za=n(J);ts=l(Za,"These also can be mixed with existing trackers, including with "),Mt=o(Za,"CODE",{});var jo=n(Mt);as=l(jo,'"all"'),jo.forEach(a),rs=l(Za,":"),Za.forEach(a),ka=d(e),u(Ae.$$.fragment,e),$a=d(e),z=o(e,"H2",{class:!0});var er=n(z);K=o(er,"A",{id:!0,class:!0,href:!0});var qo=n(K);Wt=o(qo,"SPAN",{});var To=n(Wt);u(je.$$.fragment,To),To.forEach(a),qo.forEach(a),ls=d(er),Bt=o(er,"SPAN",{});var Co=n(Bt);ss=l(Co,"Accessing the internal tracker"),Co.forEach(a),er.forEach(a),Ea=d(e),I=o(e,"P",{});var Qe=n(I);os=l(Qe,`If some custom interactions with a tracker might be wanted directly, you can quickly access one using the
`),Ue=o(Qe,"A",{href:!0});var Io=n(Ue);ns=l(Io,"Accelerator.get_tracker()"),Io.forEach(a),is=l(Qe," method. Just pass in the string corresponding to a tracker\u2019s "),Ut=o(Qe,"CODE",{});var Oo=n(Ut);cs=l(Oo,".name"),Oo.forEach(a),ps=l(Qe,` attribute
and it will return that tracker on the main process.`),Qe.forEach(a),ba=d(e),Fe=o(e,"P",{});var Po=n(Fe);ds=l(Po,"This example shows doing so with wandb:"),Po.forEach(a),Aa=d(e),u(qe.$$.fragment,e),ja=d(e),O=o(e,"P",{});var Ve=n(O);hs=l(Ve,"From there you can interact with "),Ft=o(Ve,"CODE",{});var Lo=n(Ft);fs=l(Lo,"wandb"),Lo.forEach(a),us=l(Ve,"\u2019s "),Gt=o(Ve,"CODE",{});var xo=n(Gt);ms=l(xo,"run"),xo.forEach(a),_s=l(Ve," object like normal:"),Ve.forEach(a),qa=d(e),u(Q.$$.fragment,e),Ta=d(e),u(Te.$$.fragment,e),Ca=d(e),N=o(e,"H2",{class:!0});var tr=n(N);V=o(tr,"A",{id:!0,class:!0,href:!0});var Do=n(V);Rt=o(Do,"SPAN",{});var So=n(Rt);u(Ce.$$.fragment,So),So.forEach(a),Do.forEach(a),gs=d(tr),Ht=o(tr,"SPAN",{});var zo=n(Ht);vs=l(zo,"When a wrapper cannot work"),zo.forEach(a),tr.forEach(a),Ia=d(e),P=o(e,"P",{});var Xe=n(P);ys=l(Xe,"If a library has an API that does not follow a strict "),Jt=o(Xe,"CODE",{});var No=n(Jt);ws=l(No,".log"),No.forEach(a),ks=l(Xe," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Kt=o(Xe,"CODE",{});var Mo=n(Kt);$s=l(Mo,"if accelerator.is_main_process"),Mo.forEach(a),Es=l(Xe," statement:"),Xe.forEach(a),Oa=d(e),u(Ie.$$.fragment,e),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(Ko)),h(M,"id","tracking"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#tracking"),h(b,"class","relative group"),h(Pe,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.log"),h(W,"id","integrated-trackers"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#integrated-trackers"),h(L,"class","relative group"),h(Le,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.init_trackers"),h(xe,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.log"),h(De,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.end_training"),h(G,"id","implementing-custom-trackers"),h(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(G,"href","#implementing-custom-trackers"),h(x,"class","relative group"),h(K,"id","accessing-the-internal-tracker"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#accessing-the-internal-tracker"),h(z,"class","relative group"),h(Ue,"href","/docs/accelerate/main/en/package_reference/accelerator#accelerate.Accelerator.get_tracker"),h(V,"id","when-a-wrapper-cannot-work"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#when-a-wrapper-cannot-work"),h(N,"class","relative group")},m(e,i){t(document.head,w),c(e,j,i),c(e,b,i),t(b,M),t(M,Ye),m(Z,Ye,null),t(b,ar),t(b,Ze),t(Ze,rr),c(e,Zt,i),c(e,ee,i),t(ee,lr),t(ee,Pe),t(Pe,sr),c(e,ea,i),c(e,L,i),t(L,W),t(W,et),m(te,et,null),t(L,or),t(L,tt),t(tt,nr),c(e,ta,i),c(e,B,i),t(B,ir),t(B,at),t(at,cr),t(B,pr),c(e,aa,i),c(e,k,i),t(k,rt),t(rt,dr),t(k,hr),t(k,lt),t(lt,fr),t(k,ur),t(k,st),t(st,mr),t(k,_r),t(k,ot),t(ot,gr),c(e,ra,i),c(e,q,i),t(q,vr),t(q,nt),t(nt,yr),t(q,wr),t(q,it),t(it,kr),t(q,$r),c(e,la,i),m(ae,e,i),c(e,sa,i),c(e,U,i),t(U,Er),t(U,Le),t(Le,br),t(U,Ar),c(e,oa,i),m(re,e,i),c(e,na,i),c(e,T,i),t(T,jr),t(T,xe),t(xe,qr),t(T,Tr),t(T,ct),t(ct,Cr),t(T,Ir),c(e,ia,i),m(le,e,i),c(e,ca,i),c(e,F,i),t(F,Or),t(F,De),t(De,Pr),t(F,Lr),c(e,pa,i),m(se,e,i),c(e,da,i),c(e,Se,i),t(Se,xr),c(e,ha,i),m(oe,e,i),c(e,fa,i),c(e,x,i),t(x,G),t(G,pt),m(ne,pt,null),t(x,Dr),t(x,dt),t(dt,Sr),c(e,ua,i),c(e,C,i),t(C,zr),t(C,ht),t(ht,Nr),t(C,Mr),t(C,ft),t(ft,Wr),t(C,Br),c(e,ma,i),c(e,y,i),t(y,ie),t(ie,ze),t(ze,ut),t(ut,Ur),t(ze,Fr),t(ie,Gr),t(ie,ce),t(ce,pe),t(pe,Rr),t(pe,mt),t(mt,Hr),t(pe,Jr),t(ce,Kr),t(ce,de),t(de,Qr),t(de,_t),t(_t,Vr),t(de,Xr),t(y,Yr),t(y,he),t(he,Ne),t(Ne,gt),t(gt,Zr),t(Ne,el),t(he,tl),t(he,vt),t(vt,fe),t(fe,al),t(fe,yt),t(yt,rl),t(fe,ll),t(y,sl),t(y,ue),t(ue,Me),t(Me,wt),t(wt,ol),t(Me,nl),t(ue,il),t(ue,kt),t(kt,D),t(D,cl),t(D,$t),t($t,pl),t(D,dl),t(D,Et),t(Et,hl),t(D,fl),t(y,ul),t(y,me),t(me,R),t(R,bt),t(bt,ml),t(R,_l),t(R,At),t(At,gl),t(R,vl),t(me,yl),t(me,_e),t(_e,ge),t(ge,wl),t(ge,jt),t(jt,kl),t(ge,$l),t(_e,El),t(_e,qt),t(qt,bl),t(y,Al),t(y,ve),t(ve,H),t(H,Tt),t(Tt,jl),t(H,ql),t(H,Ct),t(Ct,Tl),t(H,Cl),t(ve,Il),t(ve,It),t(It,ye),t(ye,Ol),t(ye,Ot),t(Ot,Pl),t(ye,Ll),t(y,xl),t(y,we),t(we,We),t(We,Pt),t(Pt,Dl),t(We,Sl),t(we,zl),t(we,ke),t(ke,$e),t($e,Nl),t($e,Lt),t(Lt,Ml),t($e,Wl),t(ke,Bl),t(ke,S),t(S,Ul),t(S,xt),t(xt,Fl),t(S,Gl),t(S,Dt),t(Dt,Rl),t(S,Hl),c(e,_a,i),c(e,Be,i),t(Be,Jl),c(e,ga,i),m(Ee,e,i),c(e,va,i),c(e,$,i),t($,Kl),t($,St),t(St,Ql),t($,Vl),t($,zt),t(zt,Xl),t($,Yl),t($,Nt),t(Nt,Zl),t($,es),c(e,ya,i),m(be,e,i),c(e,wa,i),c(e,J,i),t(J,ts),t(J,Mt),t(Mt,as),t(J,rs),c(e,ka,i),m(Ae,e,i),c(e,$a,i),c(e,z,i),t(z,K),t(K,Wt),m(je,Wt,null),t(z,ls),t(z,Bt),t(Bt,ss),c(e,Ea,i),c(e,I,i),t(I,os),t(I,Ue),t(Ue,ns),t(I,is),t(I,Ut),t(Ut,cs),t(I,ps),c(e,ba,i),c(e,Fe,i),t(Fe,ds),c(e,Aa,i),m(qe,e,i),c(e,ja,i),c(e,O,i),t(O,hs),t(O,Ft),t(Ft,fs),t(O,us),t(O,Gt),t(Gt,ms),t(O,_s),c(e,qa,i),m(Q,e,i),c(e,Ta,i),m(Te,e,i),c(e,Ca,i),c(e,N,i),t(N,V),t(V,Rt),m(Ce,Rt,null),t(N,gs),t(N,Ht),t(Ht,vs),c(e,Ia,i),c(e,P,i),t(P,ys),t(P,Jt),t(Jt,ws),t(P,ks),t(P,Kt),t(Kt,$s),t(P,Es),c(e,Oa,i),m(Ie,e,i),Pa=!0},p(e,[i]){const Oe={};i&2&&(Oe.$$scope={dirty:i,ctx:e}),Q.$set(Oe)},i(e){Pa||(_(Z.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(le.$$.fragment,e),_(se.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(Ee.$$.fragment,e),_(be.$$.fragment,e),_(Ae.$$.fragment,e),_(je.$$.fragment,e),_(qe.$$.fragment,e),_(Q.$$.fragment,e),_(Te.$$.fragment,e),_(Ce.$$.fragment,e),_(Ie.$$.fragment,e),Pa=!0)},o(e){g(Z.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(re.$$.fragment,e),g(le.$$.fragment,e),g(se.$$.fragment,e),g(oe.$$.fragment,e),g(ne.$$.fragment,e),g(Ee.$$.fragment,e),g(be.$$.fragment,e),g(Ae.$$.fragment,e),g(je.$$.fragment,e),g(qe.$$.fragment,e),g(Q.$$.fragment,e),g(Te.$$.fragment,e),g(Ce.$$.fragment,e),g(Ie.$$.fragment,e),Pa=!1},d(e){a(w),e&&a(j),e&&a(b),v(Z),e&&a(Zt),e&&a(ee),e&&a(ea),e&&a(L),v(te),e&&a(ta),e&&a(B),e&&a(aa),e&&a(k),e&&a(ra),e&&a(q),e&&a(la),v(ae,e),e&&a(sa),e&&a(U),e&&a(oa),v(re,e),e&&a(na),e&&a(T),e&&a(ia),v(le,e),e&&a(ca),e&&a(F),e&&a(pa),v(se,e),e&&a(da),e&&a(Se),e&&a(ha),v(oe,e),e&&a(fa),e&&a(x),v(ne),e&&a(ua),e&&a(C),e&&a(ma),e&&a(y),e&&a(_a),e&&a(Be),e&&a(ga),v(Ee,e),e&&a(va),e&&a($),e&&a(ya),v(be,e),e&&a(wa),e&&a(J),e&&a(ka),v(Ae,e),e&&a($a),e&&a(z),v(je),e&&a(Ea),e&&a(I),e&&a(ba),e&&a(Fe),e&&a(Aa),v(qe,e),e&&a(ja),e&&a(O),e&&a(qa),v(Q,e),e&&a(Ta),v(Te,e),e&&a(Ca),e&&a(N),v(Ce),e&&a(Ia),e&&a(P),e&&a(Oa),v(Ie,e)}}}const Ko={local:"tracking",sections:[{local:"integrated-trackers",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"accessing-the-internal-tracker",title:"Accessing the internal tracker "},{local:"when-a-wrapper-cannot-work",title:"When a wrapper cannot work"}],title:"Tracking"};function Qo(Yt){return Go(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class en extends Wo{constructor(w){super();Bo(this,w,Qo,Jo,Uo,{})}}export{en as default,Ko as metadata};
