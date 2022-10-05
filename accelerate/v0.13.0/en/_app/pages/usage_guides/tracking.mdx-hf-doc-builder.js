import{S as So,i as zo,s as No,e as l,k as p,w as u,t as r,M as Mo,c as o,d as a,m as d,a as n,x as f,h as s,b as h,G as t,g as c,y as m,q as _,o as g,B as v,v as Wo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Bo}from"../../chunks/Tip-hf-doc-builder.js";import{I as Vt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as b}from"../../chunks/CodeBlock-hf-doc-builder.js";function Uo(Xt){let k;return{c(){k=r("Make sure to only interact with trackers on the main process!")},l(A){k=s(A,"Make sure to only interact with trackers on the main process!")},m(A,E){c(A,k,E)},d(A){A&&a(k)}}}function Go(Xt){let k,A,E,M,Ye,Y,tr,Ze,ar,Yt,Z,rr,Oe,sr,Zt,x,W,et,ee,lr,tt,or,ea,B,nr,at,ir,cr,ta,j,rt,pr,dr,st,hr,ur,lt,fr,aa,q,mr,ot,_r,gr,nt,vr,yr,ra,te,sa,U,kr,Pe,wr,$r,la,ae,oa,T,Er,xe,br,Ar,it,jr,qr,na,re,ia,G,Tr,De,Cr,Ir,ca,se,pa,Le,Or,da,le,ha,D,F,ct,oe,Pr,pt,xr,ua,C,Dr,dt,Lr,Sr,ht,zr,Nr,fa,y,ne,Se,ut,Mr,Wr,Br,ie,ce,Ur,ft,Gr,Fr,Rr,pe,Hr,mt,Jr,Kr,Qr,de,ze,_t,Vr,Xr,Yr,gt,he,Zr,vt,es,ts,as,ue,Ne,yt,rs,ss,ls,kt,L,os,wt,ns,is,$t,cs,ps,ds,fe,R,Et,hs,us,bt,fs,ms,_s,me,_e,gs,At,vs,ys,ks,jt,ws,$s,ge,H,qt,Es,bs,Tt,As,js,qs,Ct,ve,Ts,It,Cs,Is,Os,ye,Me,Ot,Ps,xs,Ds,ke,we,Ls,Pt,Ss,zs,Ns,S,Ms,xt,Ws,Bs,Dt,Us,Gs,ma,We,Fs,_a,$e,ga,w,Rs,Lt,Hs,Js,St,Ks,Qs,zt,Vs,Xs,va,Ee,ya,J,Ys,Nt,Zs,el,ka,be,wa,z,K,Mt,Ae,tl,Wt,al,$a,I,rl,Be,sl,ll,Bt,ol,nl,Ea,Ue,il,ba,je,Aa,O,cl,Ut,pl,dl,Gt,hl,ul,ja,Q,qa,qe,Ta,N,V,Ft,Te,fl,Rt,ml,Ca,P,_l,Ht,gl,vl,Jt,yl,kl,Ia,Ce,Oa;return Y=new Vt({}),ee=new Vt({}),te=new b({props:{code:`from accelerate import Accelerator
from accelerate.utils import LoggerType

accelerator = Accelerator(log_with="all")  # For all available trackers in the environment
accelerator = Accelerator(log_with="wandb")
accelerator = Accelerator(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerator(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerator(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),ae=new b({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),re=new b({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),se=new b({props:{code:"accelerator.end_training()",highlighted:"accelerator.end_training()"}}),le=new b({props:{code:`from accelerate import Accelerator

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
accelerator.end_training()`}}),oe=new Vt({}),$e=new b({props:{code:`from accelerate.tracking import GeneralTracker
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
        wandb.log(values, step=step)`}}),Ee=new b({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=tracker)`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=tracker)`}}),be=new b({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=[tracker, "all"])`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=[tracker, <span class="hljs-string">&quot;all&quot;</span>])`}}),Ae=new Vt({}),je=new b({props:{code:'wandb_tracker = accelerator.get_tracker("wandb")',highlighted:'wandb_tracker = accelerator.get_tracker(<span class="hljs-string">&quot;wandb&quot;</span>)'}}),Q=new Bo({props:{warning:!0,$$slots:{default:[Uo]},$$scope:{ctx:Xt}}}),qe=new b({props:{code:`if accelerator.is_main_process:
    wandb_run.log_artifact(some_artifact_to_log)`,highlighted:`<span class="hljs-keyword">if</span> accelerator.is_main_process:
    wandb_run.log_artifact(some_artifact_to_log)`}}),Te=new Vt({}),Ce=new b({props:{code:`  from accelerate import Accelerator
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
<span class="hljs-addition">+             run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){k=l("meta"),A=p(),E=l("h1"),M=l("a"),Ye=l("span"),u(Y.$$.fragment),tr=p(),Ze=l("span"),ar=r("Tracking"),Yt=p(),Z=l("p"),rr=r(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),Oe=l("a"),sr=r("Accelerator.log()"),Zt=p(),x=l("h2"),W=l("a"),et=l("span"),u(ee.$$.fragment),lr=p(),tt=l("span"),or=r("Integrated Trackers"),ea=p(),B=l("p"),nr=r("Currently "),at=l("code"),ir=r("Accelerate"),cr=r(" supports three trackers out-of-the-box:"),ta=p(),j=l("ul"),rt=l("li"),pr=r("TensorBoard"),dr=p(),st=l("li"),hr=r("WandB"),ur=p(),lt=l("li"),fr=r("CometML"),aa=p(),q=l("p"),mr=r("To use any of them, pass in the selected type(s) to the "),ot=l("code"),_r=r("log_with"),gr=r(" parameter in "),nt=l("code"),vr=r("Accelerate"),yr=r(":"),ra=p(),u(te.$$.fragment),sa=p(),U=l("p"),kr=r("At the start of your experiment "),Pe=l("a"),wr=r("Accelerator.init_trackers()"),$r=r(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),la=p(),u(ae.$$.fragment),oa=p(),T=l("p"),Er=r("When you are ready to log any data, "),xe=l("a"),br=r("Accelerator.log()"),Ar=r(` should be used.
A `),it=l("code"),jr=r("step"),qr=r(" can also be passed in to correlate the data with a particular step in the training loop."),na=p(),u(re.$$.fragment),ia=p(),G=l("p"),Tr=r("Once you\u2019ve finished training, make sure to run "),De=l("a"),Cr=r("Accelerator.end_training()"),Ir=r(" so that all the trackers can run their finish functionalities if they have any."),ca=p(),u(se.$$.fragment),pa=p(),Le=l("p"),Or=r("A full example is below:"),da=p(),u(le.$$.fragment),ha=p(),D=l("h2"),F=l("a"),ct=l("span"),u(oe.$$.fragment),Pr=p(),pt=l("span"),xr=r("Implementing Custom Trackers"),ua=p(),C=l("p"),Dr=r("To implement a new tracker to be used in "),dt=l("code"),Lr=r("Accelerator"),Sr=r(", a new one can be made through implementing the "),ht=l("code"),zr=r("GeneralTracker"),Nr=r(` class.
Every tracker must implement three functions and have three properties:`),fa=p(),y=l("ul"),ne=l("li"),Se=l("p"),ut=l("code"),Mr=r("__init__"),Wr=r(":"),Br=p(),ie=l("ul"),ce=l("li"),Ur=r("Should store a "),ft=l("code"),Gr=r("run_name"),Fr=r(" and initialize the tracker API of the integrated library."),Rr=p(),pe=l("li"),Hr=r("If a tracker stores their data locally (such as TensorBoard), a "),mt=l("code"),Jr=r("logging_dir"),Kr=r(" parameter can be added."),Qr=p(),de=l("li"),ze=l("p"),_t=l("code"),Vr=r("store_init_configuration"),Xr=r(":"),Yr=p(),gt=l("ul"),he=l("li"),Zr=r("Should take in a "),vt=l("code"),es=r("values"),ts=r(" dictionary and store them as a one-time experiment configuration"),as=p(),ue=l("li"),Ne=l("p"),yt=l("code"),rs=r("log"),ss=r(":"),ls=p(),kt=l("ul"),L=l("li"),os=r("Should take in a "),wt=l("code"),ns=r("values"),is=r(" dictionary and a "),$t=l("code"),cs=r("step"),ps=r(", and should log them to the run"),ds=p(),fe=l("li"),R=l("p"),Et=l("code"),hs=r("name"),us=r(" ("),bt=l("code"),fs=r("str"),ms=r("):"),_s=p(),me=l("ul"),_e=l("li"),gs=r("A unique string name for the tracker, such as "),At=l("code"),vs=r('"wandb"'),ys=r(" for the wandb tracker."),ks=p(),jt=l("li"),ws=r("This will be used for interacting with this tracker specifically"),$s=p(),ge=l("li"),H=l("p"),qt=l("code"),Es=r("requires_logging_directory"),bs=r(" ("),Tt=l("code"),As=r("bool"),js=r("):"),qs=p(),Ct=l("ul"),ve=l("li"),Ts=r("Whether a "),It=l("code"),Cs=r("logging_dir"),Is=r(" is needed for this particular tracker and if it uses one."),Os=p(),ye=l("li"),Me=l("p"),Ot=l("code"),Ps=r("tracker"),xs=r(":"),Ds=p(),ke=l("ul"),we=l("li"),Ls=r("This should be implemented as a "),Pt=l("code"),Ss=r("@property"),zs=r(" function"),Ns=p(),S=l("li"),Ms=r("Should return the internal tracking mechanism the library uses, such as the "),xt=l("code"),Ws=r("run"),Bs=r(" object for "),Dt=l("code"),Us=r("wandb"),Gs=r("."),ma=p(),We=l("p"),Fs=r("A brief example can be seen below with an integration with Weights and Biases, containing only the relevant information:"),_a=p(),u($e.$$.fragment),ga=p(),w=l("p"),Rs=r("When you are ready to build your "),Lt=l("code"),Hs=r("Accelerator"),Js=r(" object, pass in an "),St=l("strong"),Ks=r("instance"),Qs=r(" of your tracker to "),zt=l("code"),Vs=r("Accelerator.log_with"),Xs=r(` to have it automatically
be used with the API:`),va=p(),u(Ee.$$.fragment),ya=p(),J=l("p"),Ys=r("These also can be mixed with existing trackers, including with "),Nt=l("code"),Zs=r('"all"'),el=r(":"),ka=p(),u(be.$$.fragment),wa=p(),z=l("h2"),K=l("a"),Mt=l("span"),u(Ae.$$.fragment),tl=p(),Wt=l("span"),al=r("Accessing the internal tracker"),$a=p(),I=l("p"),rl=r(`If some custom interactions with a tracker might be wanted directly, you can quickly access one using the
`),Be=l("a"),sl=r("Accelerator.get_tracker()"),ll=r(" method. Just pass in the string corresponding to a tracker\u2019s "),Bt=l("code"),ol=r(".name"),nl=r(` attribute
and it will return that tracker on the main process.`),Ea=p(),Ue=l("p"),il=r("This example shows doing so with wandb:"),ba=p(),u(je.$$.fragment),Aa=p(),O=l("p"),cl=r("From there you can interact with "),Ut=l("code"),pl=r("wandb"),dl=r("\u2019s "),Gt=l("code"),hl=r("run"),ul=r(" object like normal:"),ja=p(),u(Q.$$.fragment),qa=p(),u(qe.$$.fragment),Ta=p(),N=l("h2"),V=l("a"),Ft=l("span"),u(Te.$$.fragment),fl=p(),Rt=l("span"),ml=r("When a wrapper cannot work"),Ca=p(),P=l("p"),_l=r("If a library has an API that does not follow a strict "),Ht=l("code"),gl=r(".log"),vl=r(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Jt=l("code"),yl=r("if accelerator.is_main_process"),kl=r(" statement:"),Ia=p(),u(Ce.$$.fragment),this.h()},l(e){const i=Mo('[data-svelte="svelte-1phssyn"]',document.head);k=o(i,"META",{name:!0,content:!0}),i.forEach(a),A=d(e),E=o(e,"H1",{class:!0});var Ie=n(E);M=o(Ie,"A",{id:!0,class:!0,href:!0});var jl=n(M);Ye=o(jl,"SPAN",{});var ql=n(Ye);f(Y.$$.fragment,ql),ql.forEach(a),jl.forEach(a),tr=d(Ie),Ze=o(Ie,"SPAN",{});var Tl=n(Ze);ar=s(Tl,"Tracking"),Tl.forEach(a),Ie.forEach(a),Yt=d(e),Z=o(e,"P",{});var wl=n(Z);rr=s(wl,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
\u{1F917} Accelerate provides a general tracking API that can be used to log useful items during your script through `),Oe=o(wl,"A",{href:!0});var Cl=n(Oe);sr=s(Cl,"Accelerator.log()"),Cl.forEach(a),wl.forEach(a),Zt=d(e),x=o(e,"H2",{class:!0});var Pa=n(x);W=o(Pa,"A",{id:!0,class:!0,href:!0});var Il=n(W);et=o(Il,"SPAN",{});var Ol=n(et);f(ee.$$.fragment,Ol),Ol.forEach(a),Il.forEach(a),lr=d(Pa),tt=o(Pa,"SPAN",{});var Pl=n(tt);or=s(Pl,"Integrated Trackers"),Pl.forEach(a),Pa.forEach(a),ea=d(e),B=o(e,"P",{});var xa=n(B);nr=s(xa,"Currently "),at=o(xa,"CODE",{});var xl=n(at);ir=s(xl,"Accelerate"),xl.forEach(a),cr=s(xa," supports three trackers out-of-the-box:"),xa.forEach(a),ta=d(e),j=o(e,"UL",{});var Ge=n(j);rt=o(Ge,"LI",{});var Dl=n(rt);pr=s(Dl,"TensorBoard"),Dl.forEach(a),dr=d(Ge),st=o(Ge,"LI",{});var Ll=n(st);hr=s(Ll,"WandB"),Ll.forEach(a),ur=d(Ge),lt=o(Ge,"LI",{});var Sl=n(lt);fr=s(Sl,"CometML"),Sl.forEach(a),Ge.forEach(a),aa=d(e),q=o(e,"P",{});var Fe=n(q);mr=s(Fe,"To use any of them, pass in the selected type(s) to the "),ot=o(Fe,"CODE",{});var zl=n(ot);_r=s(zl,"log_with"),zl.forEach(a),gr=s(Fe," parameter in "),nt=o(Fe,"CODE",{});var Nl=n(nt);vr=s(Nl,"Accelerate"),Nl.forEach(a),yr=s(Fe,":"),Fe.forEach(a),ra=d(e),f(te.$$.fragment,e),sa=d(e),U=o(e,"P",{});var Da=n(U);kr=s(Da,"At the start of your experiment "),Pe=o(Da,"A",{href:!0});var Ml=n(Pe);wr=s(Ml,"Accelerator.init_trackers()"),Ml.forEach(a),$r=s(Da," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),Da.forEach(a),la=d(e),f(ae.$$.fragment,e),oa=d(e),T=o(e,"P",{});var Re=n(T);Er=s(Re,"When you are ready to log any data, "),xe=o(Re,"A",{href:!0});var Wl=n(xe);br=s(Wl,"Accelerator.log()"),Wl.forEach(a),Ar=s(Re,` should be used.
A `),it=o(Re,"CODE",{});var Bl=n(it);jr=s(Bl,"step"),Bl.forEach(a),qr=s(Re," can also be passed in to correlate the data with a particular step in the training loop."),Re.forEach(a),na=d(e),f(re.$$.fragment,e),ia=d(e),G=o(e,"P",{});var La=n(G);Tr=s(La,"Once you\u2019ve finished training, make sure to run "),De=o(La,"A",{href:!0});var Ul=n(De);Cr=s(Ul,"Accelerator.end_training()"),Ul.forEach(a),Ir=s(La," so that all the trackers can run their finish functionalities if they have any."),La.forEach(a),ca=d(e),f(se.$$.fragment,e),pa=d(e),Le=o(e,"P",{});var Gl=n(Le);Or=s(Gl,"A full example is below:"),Gl.forEach(a),da=d(e),f(le.$$.fragment,e),ha=d(e),D=o(e,"H2",{class:!0});var Sa=n(D);F=o(Sa,"A",{id:!0,class:!0,href:!0});var Fl=n(F);ct=o(Fl,"SPAN",{});var Rl=n(ct);f(oe.$$.fragment,Rl),Rl.forEach(a),Fl.forEach(a),Pr=d(Sa),pt=o(Sa,"SPAN",{});var Hl=n(pt);xr=s(Hl,"Implementing Custom Trackers"),Hl.forEach(a),Sa.forEach(a),ua=d(e),C=o(e,"P",{});var He=n(C);Dr=s(He,"To implement a new tracker to be used in "),dt=o(He,"CODE",{});var Jl=n(dt);Lr=s(Jl,"Accelerator"),Jl.forEach(a),Sr=s(He,", a new one can be made through implementing the "),ht=o(He,"CODE",{});var Kl=n(ht);zr=s(Kl,"GeneralTracker"),Kl.forEach(a),Nr=s(He,` class.
Every tracker must implement three functions and have three properties:`),He.forEach(a),fa=d(e),y=o(e,"UL",{});var $=n(y);ne=o($,"LI",{});var za=n(ne);Se=o(za,"P",{});var $l=n(Se);ut=o($l,"CODE",{});var Ql=n(ut);Mr=s(Ql,"__init__"),Ql.forEach(a),Wr=s($l,":"),$l.forEach(a),Br=d(za),ie=o(za,"UL",{});var Na=n(ie);ce=o(Na,"LI",{});var Ma=n(ce);Ur=s(Ma,"Should store a "),ft=o(Ma,"CODE",{});var Vl=n(ft);Gr=s(Vl,"run_name"),Vl.forEach(a),Fr=s(Ma," and initialize the tracker API of the integrated library."),Ma.forEach(a),Rr=d(Na),pe=o(Na,"LI",{});var Wa=n(pe);Hr=s(Wa,"If a tracker stores their data locally (such as TensorBoard), a "),mt=o(Wa,"CODE",{});var Xl=n(mt);Jr=s(Xl,"logging_dir"),Xl.forEach(a),Kr=s(Wa," parameter can be added."),Wa.forEach(a),Na.forEach(a),za.forEach(a),Qr=d($),de=o($,"LI",{});var Ba=n(de);ze=o(Ba,"P",{});var El=n(ze);_t=o(El,"CODE",{});var Yl=n(_t);Vr=s(Yl,"store_init_configuration"),Yl.forEach(a),Xr=s(El,":"),El.forEach(a),Yr=d(Ba),gt=o(Ba,"UL",{});var Zl=n(gt);he=o(Zl,"LI",{});var Ua=n(he);Zr=s(Ua,"Should take in a "),vt=o(Ua,"CODE",{});var eo=n(vt);es=s(eo,"values"),eo.forEach(a),ts=s(Ua," dictionary and store them as a one-time experiment configuration"),Ua.forEach(a),Zl.forEach(a),Ba.forEach(a),as=d($),ue=o($,"LI",{});var Ga=n(ue);Ne=o(Ga,"P",{});var bl=n(Ne);yt=o(bl,"CODE",{});var to=n(yt);rs=s(to,"log"),to.forEach(a),ss=s(bl,":"),bl.forEach(a),ls=d(Ga),kt=o(Ga,"UL",{});var ao=n(kt);L=o(ao,"LI",{});var Je=n(L);os=s(Je,"Should take in a "),wt=o(Je,"CODE",{});var ro=n(wt);ns=s(ro,"values"),ro.forEach(a),is=s(Je," dictionary and a "),$t=o(Je,"CODE",{});var so=n($t);cs=s(so,"step"),so.forEach(a),ps=s(Je,", and should log them to the run"),Je.forEach(a),ao.forEach(a),Ga.forEach(a),ds=d($),fe=o($,"LI",{});var Fa=n(fe);R=o(Fa,"P",{});var Kt=n(R);Et=o(Kt,"CODE",{});var lo=n(Et);hs=s(lo,"name"),lo.forEach(a),us=s(Kt," ("),bt=o(Kt,"CODE",{});var oo=n(bt);fs=s(oo,"str"),oo.forEach(a),ms=s(Kt,"):"),Kt.forEach(a),_s=d(Fa),me=o(Fa,"UL",{});var Ra=n(me);_e=o(Ra,"LI",{});var Ha=n(_e);gs=s(Ha,"A unique string name for the tracker, such as "),At=o(Ha,"CODE",{});var no=n(At);vs=s(no,'"wandb"'),no.forEach(a),ys=s(Ha," for the wandb tracker."),Ha.forEach(a),ks=d(Ra),jt=o(Ra,"LI",{});var io=n(jt);ws=s(io,"This will be used for interacting with this tracker specifically"),io.forEach(a),Ra.forEach(a),Fa.forEach(a),$s=d($),ge=o($,"LI",{});var Ja=n(ge);H=o(Ja,"P",{});var Qt=n(H);qt=o(Qt,"CODE",{});var co=n(qt);Es=s(co,"requires_logging_directory"),co.forEach(a),bs=s(Qt," ("),Tt=o(Qt,"CODE",{});var po=n(Tt);As=s(po,"bool"),po.forEach(a),js=s(Qt,"):"),Qt.forEach(a),qs=d(Ja),Ct=o(Ja,"UL",{});var ho=n(Ct);ve=o(ho,"LI",{});var Ka=n(ve);Ts=s(Ka,"Whether a "),It=o(Ka,"CODE",{});var uo=n(It);Cs=s(uo,"logging_dir"),uo.forEach(a),Is=s(Ka," is needed for this particular tracker and if it uses one."),Ka.forEach(a),ho.forEach(a),Ja.forEach(a),Os=d($),ye=o($,"LI",{});var Qa=n(ye);Me=o(Qa,"P",{});var Al=n(Me);Ot=o(Al,"CODE",{});var fo=n(Ot);Ps=s(fo,"tracker"),fo.forEach(a),xs=s(Al,":"),Al.forEach(a),Ds=d(Qa),ke=o(Qa,"UL",{});var Va=n(ke);we=o(Va,"LI",{});var Xa=n(we);Ls=s(Xa,"This should be implemented as a "),Pt=o(Xa,"CODE",{});var mo=n(Pt);Ss=s(mo,"@property"),mo.forEach(a),zs=s(Xa," function"),Xa.forEach(a),Ns=d(Va),S=o(Va,"LI",{});var Ke=n(S);Ms=s(Ke,"Should return the internal tracking mechanism the library uses, such as the "),xt=o(Ke,"CODE",{});var _o=n(xt);Ws=s(_o,"run"),_o.forEach(a),Bs=s(Ke," object for "),Dt=o(Ke,"CODE",{});var go=n(Dt);Us=s(go,"wandb"),go.forEach(a),Gs=s(Ke,"."),Ke.forEach(a),Va.forEach(a),Qa.forEach(a),$.forEach(a),ma=d(e),We=o(e,"P",{});var vo=n(We);Fs=s(vo,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevant information:"),vo.forEach(a),_a=d(e),f($e.$$.fragment,e),ga=d(e),w=o(e,"P",{});var X=n(w);Rs=s(X,"When you are ready to build your "),Lt=o(X,"CODE",{});var yo=n(Lt);Hs=s(yo,"Accelerator"),yo.forEach(a),Js=s(X," object, pass in an "),St=o(X,"STRONG",{});var ko=n(St);Ks=s(ko,"instance"),ko.forEach(a),Qs=s(X," of your tracker to "),zt=o(X,"CODE",{});var wo=n(zt);Vs=s(wo,"Accelerator.log_with"),wo.forEach(a),Xs=s(X,` to have it automatically
be used with the API:`),X.forEach(a),va=d(e),f(Ee.$$.fragment,e),ya=d(e),J=o(e,"P",{});var Ya=n(J);Ys=s(Ya,"These also can be mixed with existing trackers, including with "),Nt=o(Ya,"CODE",{});var $o=n(Nt);Zs=s($o,'"all"'),$o.forEach(a),el=s(Ya,":"),Ya.forEach(a),ka=d(e),f(be.$$.fragment,e),wa=d(e),z=o(e,"H2",{class:!0});var Za=n(z);K=o(Za,"A",{id:!0,class:!0,href:!0});var Eo=n(K);Mt=o(Eo,"SPAN",{});var bo=n(Mt);f(Ae.$$.fragment,bo),bo.forEach(a),Eo.forEach(a),tl=d(Za),Wt=o(Za,"SPAN",{});var Ao=n(Wt);al=s(Ao,"Accessing the internal tracker"),Ao.forEach(a),Za.forEach(a),$a=d(e),I=o(e,"P",{});var Qe=n(I);rl=s(Qe,`If some custom interactions with a tracker might be wanted directly, you can quickly access one using the
`),Be=o(Qe,"A",{href:!0});var jo=n(Be);sl=s(jo,"Accelerator.get_tracker()"),jo.forEach(a),ll=s(Qe," method. Just pass in the string corresponding to a tracker\u2019s "),Bt=o(Qe,"CODE",{});var qo=n(Bt);ol=s(qo,".name"),qo.forEach(a),nl=s(Qe,` attribute
and it will return that tracker on the main process.`),Qe.forEach(a),Ea=d(e),Ue=o(e,"P",{});var To=n(Ue);il=s(To,"This example shows doing so with wandb:"),To.forEach(a),ba=d(e),f(je.$$.fragment,e),Aa=d(e),O=o(e,"P",{});var Ve=n(O);cl=s(Ve,"From there you can interact with "),Ut=o(Ve,"CODE",{});var Co=n(Ut);pl=s(Co,"wandb"),Co.forEach(a),dl=s(Ve,"\u2019s "),Gt=o(Ve,"CODE",{});var Io=n(Gt);hl=s(Io,"run"),Io.forEach(a),ul=s(Ve," object like normal:"),Ve.forEach(a),ja=d(e),f(Q.$$.fragment,e),qa=d(e),f(qe.$$.fragment,e),Ta=d(e),N=o(e,"H2",{class:!0});var er=n(N);V=o(er,"A",{id:!0,class:!0,href:!0});var Oo=n(V);Ft=o(Oo,"SPAN",{});var Po=n(Ft);f(Te.$$.fragment,Po),Po.forEach(a),Oo.forEach(a),fl=d(er),Rt=o(er,"SPAN",{});var xo=n(Rt);ml=s(xo,"When a wrapper cannot work"),xo.forEach(a),er.forEach(a),Ca=d(e),P=o(e,"P",{});var Xe=n(P);_l=s(Xe,"If a library has an API that does not follow a strict "),Ht=o(Xe,"CODE",{});var Do=n(Ht);gl=s(Do,".log"),Do.forEach(a),vl=s(Xe," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Jt=o(Xe,"CODE",{});var Lo=n(Jt);yl=s(Lo,"if accelerator.is_main_process"),Lo.forEach(a),kl=s(Xe," statement:"),Xe.forEach(a),Ia=d(e),f(Ce.$$.fragment,e),this.h()},h(){h(k,"name","hf:doc:metadata"),h(k,"content",JSON.stringify(Fo)),h(M,"id","tracking"),h(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(M,"href","#tracking"),h(E,"class","relative group"),h(Oe,"href","/docs/accelerate/v0.13.0/en/package_reference/accelerator#accelerate.Accelerator.log"),h(W,"id","integrated-trackers"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#integrated-trackers"),h(x,"class","relative group"),h(Pe,"href","/docs/accelerate/v0.13.0/en/package_reference/accelerator#accelerate.Accelerator.init_trackers"),h(xe,"href","/docs/accelerate/v0.13.0/en/package_reference/accelerator#accelerate.Accelerator.log"),h(De,"href","/docs/accelerate/v0.13.0/en/package_reference/accelerator#accelerate.Accelerator.end_training"),h(F,"id","implementing-custom-trackers"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#implementing-custom-trackers"),h(D,"class","relative group"),h(K,"id","accessing-the-internal-tracker"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#accessing-the-internal-tracker"),h(z,"class","relative group"),h(Be,"href","/docs/accelerate/v0.13.0/en/package_reference/accelerator#accelerate.Accelerator.get_tracker"),h(V,"id","when-a-wrapper-cannot-work"),h(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(V,"href","#when-a-wrapper-cannot-work"),h(N,"class","relative group")},m(e,i){t(document.head,k),c(e,A,i),c(e,E,i),t(E,M),t(M,Ye),m(Y,Ye,null),t(E,tr),t(E,Ze),t(Ze,ar),c(e,Yt,i),c(e,Z,i),t(Z,rr),t(Z,Oe),t(Oe,sr),c(e,Zt,i),c(e,x,i),t(x,W),t(W,et),m(ee,et,null),t(x,lr),t(x,tt),t(tt,or),c(e,ea,i),c(e,B,i),t(B,nr),t(B,at),t(at,ir),t(B,cr),c(e,ta,i),c(e,j,i),t(j,rt),t(rt,pr),t(j,dr),t(j,st),t(st,hr),t(j,ur),t(j,lt),t(lt,fr),c(e,aa,i),c(e,q,i),t(q,mr),t(q,ot),t(ot,_r),t(q,gr),t(q,nt),t(nt,vr),t(q,yr),c(e,ra,i),m(te,e,i),c(e,sa,i),c(e,U,i),t(U,kr),t(U,Pe),t(Pe,wr),t(U,$r),c(e,la,i),m(ae,e,i),c(e,oa,i),c(e,T,i),t(T,Er),t(T,xe),t(xe,br),t(T,Ar),t(T,it),t(it,jr),t(T,qr),c(e,na,i),m(re,e,i),c(e,ia,i),c(e,G,i),t(G,Tr),t(G,De),t(De,Cr),t(G,Ir),c(e,ca,i),m(se,e,i),c(e,pa,i),c(e,Le,i),t(Le,Or),c(e,da,i),m(le,e,i),c(e,ha,i),c(e,D,i),t(D,F),t(F,ct),m(oe,ct,null),t(D,Pr),t(D,pt),t(pt,xr),c(e,ua,i),c(e,C,i),t(C,Dr),t(C,dt),t(dt,Lr),t(C,Sr),t(C,ht),t(ht,zr),t(C,Nr),c(e,fa,i),c(e,y,i),t(y,ne),t(ne,Se),t(Se,ut),t(ut,Mr),t(Se,Wr),t(ne,Br),t(ne,ie),t(ie,ce),t(ce,Ur),t(ce,ft),t(ft,Gr),t(ce,Fr),t(ie,Rr),t(ie,pe),t(pe,Hr),t(pe,mt),t(mt,Jr),t(pe,Kr),t(y,Qr),t(y,de),t(de,ze),t(ze,_t),t(_t,Vr),t(ze,Xr),t(de,Yr),t(de,gt),t(gt,he),t(he,Zr),t(he,vt),t(vt,es),t(he,ts),t(y,as),t(y,ue),t(ue,Ne),t(Ne,yt),t(yt,rs),t(Ne,ss),t(ue,ls),t(ue,kt),t(kt,L),t(L,os),t(L,wt),t(wt,ns),t(L,is),t(L,$t),t($t,cs),t(L,ps),t(y,ds),t(y,fe),t(fe,R),t(R,Et),t(Et,hs),t(R,us),t(R,bt),t(bt,fs),t(R,ms),t(fe,_s),t(fe,me),t(me,_e),t(_e,gs),t(_e,At),t(At,vs),t(_e,ys),t(me,ks),t(me,jt),t(jt,ws),t(y,$s),t(y,ge),t(ge,H),t(H,qt),t(qt,Es),t(H,bs),t(H,Tt),t(Tt,As),t(H,js),t(ge,qs),t(ge,Ct),t(Ct,ve),t(ve,Ts),t(ve,It),t(It,Cs),t(ve,Is),t(y,Os),t(y,ye),t(ye,Me),t(Me,Ot),t(Ot,Ps),t(Me,xs),t(ye,Ds),t(ye,ke),t(ke,we),t(we,Ls),t(we,Pt),t(Pt,Ss),t(we,zs),t(ke,Ns),t(ke,S),t(S,Ms),t(S,xt),t(xt,Ws),t(S,Bs),t(S,Dt),t(Dt,Us),t(S,Gs),c(e,ma,i),c(e,We,i),t(We,Fs),c(e,_a,i),m($e,e,i),c(e,ga,i),c(e,w,i),t(w,Rs),t(w,Lt),t(Lt,Hs),t(w,Js),t(w,St),t(St,Ks),t(w,Qs),t(w,zt),t(zt,Vs),t(w,Xs),c(e,va,i),m(Ee,e,i),c(e,ya,i),c(e,J,i),t(J,Ys),t(J,Nt),t(Nt,Zs),t(J,el),c(e,ka,i),m(be,e,i),c(e,wa,i),c(e,z,i),t(z,K),t(K,Mt),m(Ae,Mt,null),t(z,tl),t(z,Wt),t(Wt,al),c(e,$a,i),c(e,I,i),t(I,rl),t(I,Be),t(Be,sl),t(I,ll),t(I,Bt),t(Bt,ol),t(I,nl),c(e,Ea,i),c(e,Ue,i),t(Ue,il),c(e,ba,i),m(je,e,i),c(e,Aa,i),c(e,O,i),t(O,cl),t(O,Ut),t(Ut,pl),t(O,dl),t(O,Gt),t(Gt,hl),t(O,ul),c(e,ja,i),m(Q,e,i),c(e,qa,i),m(qe,e,i),c(e,Ta,i),c(e,N,i),t(N,V),t(V,Ft),m(Te,Ft,null),t(N,fl),t(N,Rt),t(Rt,ml),c(e,Ca,i),c(e,P,i),t(P,_l),t(P,Ht),t(Ht,gl),t(P,vl),t(P,Jt),t(Jt,yl),t(P,kl),c(e,Ia,i),m(Ce,e,i),Oa=!0},p(e,[i]){const Ie={};i&2&&(Ie.$$scope={dirty:i,ctx:e}),Q.$set(Ie)},i(e){Oa||(_(Y.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(se.$$.fragment,e),_(le.$$.fragment,e),_(oe.$$.fragment,e),_($e.$$.fragment,e),_(Ee.$$.fragment,e),_(be.$$.fragment,e),_(Ae.$$.fragment,e),_(je.$$.fragment,e),_(Q.$$.fragment,e),_(qe.$$.fragment,e),_(Te.$$.fragment,e),_(Ce.$$.fragment,e),Oa=!0)},o(e){g(Y.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(re.$$.fragment,e),g(se.$$.fragment,e),g(le.$$.fragment,e),g(oe.$$.fragment,e),g($e.$$.fragment,e),g(Ee.$$.fragment,e),g(be.$$.fragment,e),g(Ae.$$.fragment,e),g(je.$$.fragment,e),g(Q.$$.fragment,e),g(qe.$$.fragment,e),g(Te.$$.fragment,e),g(Ce.$$.fragment,e),Oa=!1},d(e){a(k),e&&a(A),e&&a(E),v(Y),e&&a(Yt),e&&a(Z),e&&a(Zt),e&&a(x),v(ee),e&&a(ea),e&&a(B),e&&a(ta),e&&a(j),e&&a(aa),e&&a(q),e&&a(ra),v(te,e),e&&a(sa),e&&a(U),e&&a(la),v(ae,e),e&&a(oa),e&&a(T),e&&a(na),v(re,e),e&&a(ia),e&&a(G),e&&a(ca),v(se,e),e&&a(pa),e&&a(Le),e&&a(da),v(le,e),e&&a(ha),e&&a(D),v(oe),e&&a(ua),e&&a(C),e&&a(fa),e&&a(y),e&&a(ma),e&&a(We),e&&a(_a),v($e,e),e&&a(ga),e&&a(w),e&&a(va),v(Ee,e),e&&a(ya),e&&a(J),e&&a(ka),v(be,e),e&&a(wa),e&&a(z),v(Ae),e&&a($a),e&&a(I),e&&a(Ea),e&&a(Ue),e&&a(ba),v(je,e),e&&a(Aa),e&&a(O),e&&a(ja),v(Q,e),e&&a(qa),v(qe,e),e&&a(Ta),e&&a(N),v(Te),e&&a(Ca),e&&a(P),e&&a(Ia),v(Ce,e)}}}const Fo={local:"tracking",sections:[{local:"integrated-trackers",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"accessing-the-internal-tracker",title:"Accessing the internal tracker "},{local:"when-a-wrapper-cannot-work",title:"When a wrapper cannot work"}],title:"Tracking"};function Ro(Xt){return Wo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vo extends So{constructor(k){super();zo(this,k,Ro,Go,No,{})}}export{Vo as default,Fo as metadata};
