import{S as vr,i as br,s as $r,e as o,k as _,w as f,t as n,M as wr,c as r,d as t,m as c,a as i,x as m,h as l,b as h,N as Er,G as a,g as p,y as d,q as g,o as v,B as b,v as Dr}from"../../chunks/vendor-hf-doc-builder.js";import{T as gr}from"../../chunks/Tip-hf-doc-builder.js";import{I as L}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";function yr(Be){let u,w,$,D,I;return{c(){u=o("p"),w=n("Dreambooth fine-tuning is very sensitive to hyperparameters and easy to overfit. We recommend you take a look at our "),$=o("a"),D=n("in-depth analysis"),I=n(" with recommended settings for different subjects, and go from there."),this.h()},l(E){u=r(E,"P",{});var x=i(u);w=l(x,"Dreambooth fine-tuning is very sensitive to hyperparameters and easy to overfit. We recommend you take a look at our "),$=r(x,"A",{href:!0,rel:!0});var G=i($);D=l(G,"in-depth analysis"),G.forEach(t),I=l(x," with recommended settings for different subjects, and go from there."),x.forEach(t),this.h()},h(){h($,"href","https://wandb.ai/psuraj/dreambooth/reports/Dreambooth-Training-Analysis--VmlldzoyNzk0NDc3"),h($,"rel","nofollow")},m(E,x){p(E,u,x),a(u,w),a(u,$),a($,D),a(u,I)},d(E){E&&t(u)}}}function Ar(Be){let u;return{c(){u=n("Training the text encoder requires additional memory, so training won't fit on a 16GB GPU. You'll need at least 24GB VRAM to use this option.")},l(w){u=l(w,"Training the text encoder requires additional memory, so training won't fit on a 16GB GPU. You'll need at least 24GB VRAM to use this option.")},m(w,$){p(w,u,$)},d(w){w&&t(u)}}}function xr(Be){let u,w,$,D,I,E,x,G,Ra,Tt,_e,ce,Ua,Ma,kt,z,Ve,mo,Oa,ue,La,fe,Ga,za,Pt,B,Ba,me,Va,Ha,It,V,jt,j,H,Qe,de,Fa,Xe,Wa,Nt,N,F,et,ge,Ya,tt,Ja,qt,S,Za,at,Ka,Qa,st,Xa,es,Ct,ve,Rt,W,ts,be,as,ss,Ut,$e,Mt,T,os,ot,rs,is,we,ns,ls,Ot,Y,ps,Ee,hs,_s,Lt,He,cs,Gt,De,zt,Fe,us,Bt,q,J,rt,ye,fs,it,ms,Vt,Z,ds,Ae,gs,vs,Ht,We,bs,Ft,xe,Wt,C,K,nt,Se,$s,lt,ws,Yt,Ye,Es,Jt,Q,Ds,pt,ys,As,Zt,Te,Kt,R,X,ht,ke,xs,_t,Ss,Qt,ee,Ts,Pe,ks,Ps,Xt,Ie,ea,te,Is,ct,js,Ns,ta,je,aa,U,ae,ut,Ne,qs,ft,Cs,sa,y,Rs,mt,Us,Ms,dt,Os,Ls,qe,Gs,zs,oa,se,Bs,gt,Vs,Hs,ra,oe,ia,Ce,na,M,re,vt,Re,Fs,bt,Ws,la,ie,Ys,Ue,Js,Zs,pa,k,Ks,$t,Qs,Xs,Me,eo,to,ha,ne,ao,wt,so,oo,_a,Oe,ca,O,le,Et,Le,ro,Dt,io,ua,A,no,yt,lo,po,At,ho,_o,xt,co,uo,fa,Ge,ma;return E=new L({}),V=new gr({props:{warning:!0,$$slots:{default:[yr]},$$scope:{ctx:Be}}}),de=new L({}),ge=new L({}),ve=new P({props:{code:`pip install git+https://github.com/huggingface/diffusers
pip install -U -r diffusers/examples/dreambooth/requirements.txt`,highlighted:`pip install git+https://github.com/huggingface/diffusers
pip install -U -r diffusers/examples/dreambooth/requirements.txt`}}),$e=new P({props:{code:"accelerate config",highlighted:"accelerate config"}}),De=new P({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),ye=new L({}),xe=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
export INSTANCE_DIR="path_to_training_images"
export OUTPUT_DIR="path_to_saved_model"

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=$MODEL_NAME  \\
  --instance_data_dir=$INSTANCE_DIR \\
  --output_dir=$OUTPUT_DIR \\
  --instance_prompt="a photo of sks dog" \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=1 \\
  --learning_rate=5e-6 \\
  --lr_scheduler="constant" \\
  --lr_warmup_steps=0 \\
  --max_train_steps=400`,highlighted:`<span class="hljs-built_in">export</span> MODEL_NAME=<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
<span class="hljs-built_in">export</span> INSTANCE_DIR=<span class="hljs-string">&quot;path_to_training_images&quot;</span>
<span class="hljs-built_in">export</span> OUTPUT_DIR=<span class="hljs-string">&quot;path_to_saved_model&quot;</span>

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=<span class="hljs-variable">$MODEL_NAME</span>  \\
  --instance_data_dir=<span class="hljs-variable">$INSTANCE_DIR</span> \\
  --output_dir=<span class="hljs-variable">$OUTPUT_DIR</span> \\
  --instance_prompt=<span class="hljs-string">&quot;a photo of sks dog&quot;</span> \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=1 \\
  --learning_rate=5e-6 \\
  --lr_scheduler=<span class="hljs-string">&quot;constant&quot;</span> \\
  --lr_warmup_steps=0 \\
  --max_train_steps=400`}}),Se=new L({}),Te=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
export INSTANCE_DIR="path_to_training_images"
export CLASS_DIR="path_to_class_images"
export OUTPUT_DIR="path_to_saved_model"

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=$MODEL_NAME  \\
  --instance_data_dir=$INSTANCE_DIR \\
  --class_data_dir=$CLASS_DIR \\
  --output_dir=$OUTPUT_DIR \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt="a photo of sks dog" \\
  --class_prompt="a photo of dog" \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=1 \\
  --learning_rate=5e-6 \\
  --lr_scheduler="constant" \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`,highlighted:`<span class="hljs-built_in">export</span> MODEL_NAME=<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
<span class="hljs-built_in">export</span> INSTANCE_DIR=<span class="hljs-string">&quot;path_to_training_images&quot;</span>
<span class="hljs-built_in">export</span> CLASS_DIR=<span class="hljs-string">&quot;path_to_class_images&quot;</span>
<span class="hljs-built_in">export</span> OUTPUT_DIR=<span class="hljs-string">&quot;path_to_saved_model&quot;</span>

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=<span class="hljs-variable">$MODEL_NAME</span>  \\
  --instance_data_dir=<span class="hljs-variable">$INSTANCE_DIR</span> \\
  --class_data_dir=<span class="hljs-variable">$CLASS_DIR</span> \\
  --output_dir=<span class="hljs-variable">$OUTPUT_DIR</span> \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt=<span class="hljs-string">&quot;a photo of sks dog&quot;</span> \\
  --class_prompt=<span class="hljs-string">&quot;a photo of dog&quot;</span> \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=1 \\
  --learning_rate=5e-6 \\
  --lr_scheduler=<span class="hljs-string">&quot;constant&quot;</span> \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`}}),ke=new L({}),Ie=new P({props:{code:"pip install bitsandbytes",highlighted:"pip install bitsandbytes"}}),je=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
export INSTANCE_DIR="path_to_training_images"
export CLASS_DIR="path_to_class_images"
export OUTPUT_DIR="path_to_saved_model"

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=$MODEL_NAME  \\
  --instance_data_dir=$INSTANCE_DIR \\
  --class_data_dir=$CLASS_DIR \\
  --output_dir=$OUTPUT_DIR \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt="a photo of sks dog" \\
  --class_prompt="a photo of dog" \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=2 --gradient_checkpointing \\
  --use_8bit_adam \\
  --learning_rate=5e-6 \\
  --lr_scheduler="constant" \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`,highlighted:`<span class="hljs-built_in">export</span> MODEL_NAME=<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
<span class="hljs-built_in">export</span> INSTANCE_DIR=<span class="hljs-string">&quot;path_to_training_images&quot;</span>
<span class="hljs-built_in">export</span> CLASS_DIR=<span class="hljs-string">&quot;path_to_class_images&quot;</span>
<span class="hljs-built_in">export</span> OUTPUT_DIR=<span class="hljs-string">&quot;path_to_saved_model&quot;</span>

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=<span class="hljs-variable">$MODEL_NAME</span>  \\
  --instance_data_dir=<span class="hljs-variable">$INSTANCE_DIR</span> \\
  --class_data_dir=<span class="hljs-variable">$CLASS_DIR</span> \\
  --output_dir=<span class="hljs-variable">$OUTPUT_DIR</span> \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt=<span class="hljs-string">&quot;a photo of sks dog&quot;</span> \\
  --class_prompt=<span class="hljs-string">&quot;a photo of dog&quot;</span> \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --gradient_accumulation_steps=2 --gradient_checkpointing \\
  --use_8bit_adam \\
  --learning_rate=5e-6 \\
  --lr_scheduler=<span class="hljs-string">&quot;constant&quot;</span> \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`}}),Ne=new L({}),oe=new gr({props:{$$slots:{default:[Ar]},$$scope:{ctx:Be}}}),Ce=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
export INSTANCE_DIR="path_to_training_images"
export CLASS_DIR="path_to_class_images"
export OUTPUT_DIR="path_to_saved_model"

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=$MODEL_NAME  \\
  --train_text_encoder \\
  --instance_data_dir=$INSTANCE_DIR \\
  --class_data_dir=$CLASS_DIR \\
  --output_dir=$OUTPUT_DIR \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt="a photo of sks dog" \\
  --class_prompt="a photo of dog" \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --use_8bit_adam
  --gradient_checkpointing \\
  --learning_rate=2e-6 \\
  --lr_scheduler="constant" \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`,highlighted:`<span class="hljs-built_in">export</span> MODEL_NAME=<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
<span class="hljs-built_in">export</span> INSTANCE_DIR=<span class="hljs-string">&quot;path_to_training_images&quot;</span>
<span class="hljs-built_in">export</span> CLASS_DIR=<span class="hljs-string">&quot;path_to_class_images&quot;</span>
<span class="hljs-built_in">export</span> OUTPUT_DIR=<span class="hljs-string">&quot;path_to_saved_model&quot;</span>

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=<span class="hljs-variable">$MODEL_NAME</span>  \\
  --train_text_encoder \\
  --instance_data_dir=<span class="hljs-variable">$INSTANCE_DIR</span> \\
  --class_data_dir=<span class="hljs-variable">$CLASS_DIR</span> \\
  --output_dir=<span class="hljs-variable">$OUTPUT_DIR</span> \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt=<span class="hljs-string">&quot;a photo of sks dog&quot;</span> \\
  --class_prompt=<span class="hljs-string">&quot;a photo of dog&quot;</span> \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --use_8bit_adam
  --gradient_checkpointing \\
  --learning_rate=2e-6 \\
  --lr_scheduler=<span class="hljs-string">&quot;constant&quot;</span> \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800`}}),Re=new L({}),Oe=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
export INSTANCE_DIR="path_to_training_images"
export CLASS_DIR="path_to_class_images"
export OUTPUT_DIR="path_to_saved_model"

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=$MODEL_NAME \\
  --instance_data_dir=$INSTANCE_DIR \\
  --class_data_dir=$CLASS_DIR \\
  --output_dir=$OUTPUT_DIR \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt="a photo of sks dog" \\
  --class_prompt="a photo of dog" \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --sample_batch_size=1 \\
  --gradient_accumulation_steps=1 --gradient_checkpointing \\
  --learning_rate=5e-6 \\
  --lr_scheduler="constant" \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800 \\
  --mixed_precision=fp16`,highlighted:`<span class="hljs-built_in">export</span> MODEL_NAME=<span class="hljs-string">&quot;CompVis/stable-diffusion-v1-4&quot;</span>
<span class="hljs-built_in">export</span> INSTANCE_DIR=<span class="hljs-string">&quot;path_to_training_images&quot;</span>
<span class="hljs-built_in">export</span> CLASS_DIR=<span class="hljs-string">&quot;path_to_class_images&quot;</span>
<span class="hljs-built_in">export</span> OUTPUT_DIR=<span class="hljs-string">&quot;path_to_saved_model&quot;</span>

accelerate launch train_dreambooth.py \\
  --pretrained_model_name_or_path=<span class="hljs-variable">$MODEL_NAME</span> \\
  --instance_data_dir=<span class="hljs-variable">$INSTANCE_DIR</span> \\
  --class_data_dir=<span class="hljs-variable">$CLASS_DIR</span> \\
  --output_dir=<span class="hljs-variable">$OUTPUT_DIR</span> \\
  --with_prior_preservation --prior_loss_weight=1.0 \\
  --instance_prompt=<span class="hljs-string">&quot;a photo of sks dog&quot;</span> \\
  --class_prompt=<span class="hljs-string">&quot;a photo of dog&quot;</span> \\
  --resolution=512 \\
  --train_batch_size=1 \\
  --sample_batch_size=1 \\
  --gradient_accumulation_steps=1 --gradient_checkpointing \\
  --learning_rate=5e-6 \\
  --lr_scheduler=<span class="hljs-string">&quot;constant&quot;</span> \\
  --lr_warmup_steps=0 \\
  --num_class_images=200 \\
  --max_train_steps=800 \\
  --mixed_precision=fp16`}}),Le=new L({}),Ge=new P({props:{code:`from diffusers import StableDiffusionPipeline
import torch

model_id = "path_to_saved_model"
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16).to("cuda")

prompt = "A photo of sks dog in a bucket"
image = pipe(prompt, num_inference_steps=50, guidance_scale=7.5).images[0]

image.save("dog-bucket.png")`,highlighted:`<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionPipeline
<span class="hljs-keyword">import</span> torch

model_id = <span class="hljs-string">&quot;path_to_saved_model&quot;</span>
pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16).to(<span class="hljs-string">&quot;cuda&quot;</span>)

prompt = <span class="hljs-string">&quot;A photo of sks dog in a bucket&quot;</span>
image = pipe(prompt, num_inference_steps=<span class="hljs-number">50</span>, guidance_scale=<span class="hljs-number">7.5</span>).images[<span class="hljs-number">0</span>]

image.save(<span class="hljs-string">&quot;dog-bucket.png&quot;</span>)`}}),{c(){u=o("meta"),w=_(),$=o("h1"),D=o("a"),I=o("span"),f(E.$$.fragment),x=_(),G=o("span"),Ra=n("DreamBooth fine-tuning example"),Tt=_(),_e=o("p"),ce=o("a"),Ua=n("DreamBooth"),Ma=n(" is a method to personalize text-to-image models like stable diffusion given just a few (3~5) images of a subject."),kt=_(),z=o("p"),Ve=o("img"),Oa=_(),ue=o("em"),La=n("Dreambooth examples from the "),fe=o("a"),Ga=n("project\u2019s blog"),za=n("."),Pt=_(),B=o("p"),Ba=n("The "),me=o("a"),Va=n("Dreambooth training script"),Ha=n(" shows how to implement this training procedure on a pre-trained Stable Diffusion model."),It=_(),f(V.$$.fragment),jt=_(),j=o("h2"),H=o("a"),Qe=o("span"),f(de.$$.fragment),Fa=_(),Xe=o("span"),Wa=n("Training locally"),Nt=_(),N=o("h3"),F=o("a"),et=o("span"),f(ge.$$.fragment),Ya=_(),tt=o("span"),Ja=n("Installing the dependencies"),qt=_(),S=o("p"),Za=n("Before running the scripts, make sure to install the library\u2019s training dependencies. We also recommend to install "),at=o("code"),Ka=n("diffusers"),Qa=n(" from the "),st=o("code"),Xa=n("main"),es=n(" github branch."),Ct=_(),f(ve.$$.fragment),Rt=_(),W=o("p"),ts=n("Then initialize and configure a "),be=o("a"),as=n("\u{1F917} Accelerate"),ss=n(" environment with:"),Ut=_(),f($e.$$.fragment),Mt=_(),T=o("p"),os=n("You need to accept the model license before downloading or using the weights. In this example we\u2019ll use model version "),ot=o("code"),rs=n("v1-4"),is=n(", so you\u2019ll need to visit "),we=o("a"),ns=n("its card"),ls=n(", read the license and tick the checkbox if you agree."),Ot=_(),Y=o("p"),ps=n("You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to "),Ee=o("a"),hs=n("this section of the documentation"),_s=n("."),Lt=_(),He=o("p"),cs=n("Run the following command to authenticate your token"),Gt=_(),f(De.$$.fragment),zt=_(),Fe=o("p"),us=n("If you have already cloned the repo, then you won\u2019t need to go through these steps. Instead, you can pass the path to your local checkout to the training script and it will be loaded from there."),Bt=_(),q=o("h3"),J=o("a"),rt=o("span"),f(ye.$$.fragment),fs=_(),it=o("span"),ms=n("Dog toy example"),Vt=_(),Z=o("p"),ds=n("In this example we\u2019ll use "),Ae=o("a"),gs=n("these images"),vs=n(" to add a new concept to Stable Diffusion using the Dreambooth process. They will be our training data. Please, download them and place them somewhere in your system."),Ht=_(),We=o("p"),bs=n("Then you can launch the training script using:"),Ft=_(),f(xe.$$.fragment),Wt=_(),C=o("h3"),K=o("a"),nt=o("span"),f(Se.$$.fragment),$s=_(),lt=o("span"),ws=n("Training with a prior-preserving loss"),Yt=_(),Ye=o("p"),Es=n("Prior preservation is used to avoid overfitting and language-drift. Please, refer to the paper to learn more about it if you are interested. For prior preservation, we use other images of the same class as part of the training process. The nice thing is that we can generate those images using the Stable Diffusion model itself! The training script will save the generated images to a local path we specify."),Jt=_(),Q=o("p"),Ds=n("According to the paper, it\u2019s recommended to generate "),pt=o("code"),ys=n("num_epochs * num_samples"),As=n(" images for prior preservation. 200-300 works well for most cases."),Zt=_(),f(Te.$$.fragment),Kt=_(),R=o("h3"),X=o("a"),ht=o("span"),f(ke.$$.fragment),xs=_(),_t=o("span"),Ss=n("Training on a 16GB GPU"),Qt=_(),ee=o("p"),Ts=n("With the help of gradient checkpointing and the 8-bit optimizer from "),Pe=o("a"),ks=n("bitsandbytes"),Ps=n(", it\u2019s possible to train dreambooth on a 16GB GPU."),Xt=_(),f(Ie.$$.fragment),ea=_(),te=o("p"),Is=n("Then pass the "),ct=o("code"),js=n("--use_8bit_adam"),Ns=n(" option to the training script."),ta=_(),f(je.$$.fragment),aa=_(),U=o("h3"),ae=o("a"),ut=o("span"),f(Ne.$$.fragment),qs=_(),ft=o("span"),Cs=n("Fine-tune the text encoder in addition to the UNet"),sa=_(),y=o("p"),Rs=n("The script also allows to fine-tune the "),mt=o("code"),Us=n("text_encoder"),Ms=n(" along with the "),dt=o("code"),Os=n("unet"),Ls=n(". It has been observed experimentally that this gives much better results, especially on faces. Please, refer to "),qe=o("a"),Gs=n("our report"),zs=n(" for more details."),oa=_(),se=o("p"),Bs=n("To enable this option, pass the "),gt=o("code"),Vs=n("--train_text_encoder"),Hs=n(" argument to the training script."),ra=_(),f(oe.$$.fragment),ia=_(),f(Ce.$$.fragment),na=_(),M=o("h3"),re=o("a"),vt=o("span"),f(Re.$$.fragment),Fs=_(),bt=o("span"),Ws=n("Training on a 8 GB GPU:"),la=_(),ie=o("p"),Ys=n("Using "),Ue=o("a"),Js=n("DeepSpeed"),Zs=n(` it\u2019s even possible to offload some
tensors from VRAM to either CPU or NVME, allowing training to proceed with less GPU memory.`),pa=_(),k=o("p"),Ks=n("DeepSpeed needs to be enabled with "),$t=o("code"),Qs=n("accelerate config"),Xs=n(`. During configuration,
answer yes to \u201CDo you want to use DeepSpeed?\u201C. Combining DeepSpeed stage 2, fp16
mixed precision, and offloading both the model parameters and the optimizer state to CPU, it\u2019s
possible to train on under 8 GB VRAM. The drawback is that this requires more system RAM (about 25 GB). See `),Me=o("a"),eo=n("the DeepSpeed documentation"),to=n(" for more configuration options."),ha=_(),ne=o("p"),ao=n(`Changing the default Adam optimizer to DeepSpeed\u2019s special version of Adam
`),wt=o("code"),so=n("deepspeed.ops.adam.DeepSpeedCPUAdam"),oo=n(` gives a substantial speedup, but enabling
it requires the system\u2019s CUDA toolchain version to be the same as the one installed with PyTorch. 8-bit optimizers don\u2019t seem to be compatible with DeepSpeed at the moment.`),_a=_(),f(Oe.$$.fragment),ca=_(),O=o("h2"),le=o("a"),Et=o("span"),f(Le.$$.fragment),ro=_(),Dt=o("span"),io=n("Inference"),ua=_(),A=o("p"),no=n("Once you have trained a model, inference can be done using the "),yt=o("code"),lo=n("StableDiffusionPipeline"),po=n(", by simply indicating the path where the model was saved. Make sure that your prompts include the special "),At=o("code"),ho=n("identifier"),_o=n(" used during training ("),xt=o("code"),co=n("sks"),uo=n(" in the previous examples)."),fa=_(),f(Ge.$$.fragment),this.h()},l(e){const s=wr('[data-svelte="svelte-1phssyn"]',document.head);u=r(s,"META",{name:!0,content:!0}),s.forEach(t),w=c(e),$=r(e,"H1",{class:!0});var ze=i($);D=r(ze,"A",{id:!0,class:!0,href:!0});var St=i(D);I=r(St,"SPAN",{});var go=i(I);m(E.$$.fragment,go),go.forEach(t),St.forEach(t),x=c(ze),G=r(ze,"SPAN",{});var vo=i(G);Ra=l(vo,"DreamBooth fine-tuning example"),vo.forEach(t),ze.forEach(t),Tt=c(e),_e=r(e,"P",{});var fo=i(_e);ce=r(fo,"A",{href:!0,rel:!0});var bo=i(ce);Ua=l(bo,"DreamBooth"),bo.forEach(t),Ma=l(fo," is a method to personalize text-to-image models like stable diffusion given just a few (3~5) images of a subject."),fo.forEach(t),kt=c(e),z=r(e,"P",{});var da=i(z);Ve=r(da,"IMG",{src:!0,alt:!0}),Oa=c(da),ue=r(da,"EM",{});var ga=i(ue);La=l(ga,"Dreambooth examples from the "),fe=r(ga,"A",{href:!0,rel:!0});var $o=i(fe);Ga=l($o,"project\u2019s blog"),$o.forEach(t),za=l(ga,"."),ga.forEach(t),da.forEach(t),Pt=c(e),B=r(e,"P",{});var va=i(B);Ba=l(va,"The "),me=r(va,"A",{href:!0,rel:!0});var wo=i(me);Va=l(wo,"Dreambooth training script"),wo.forEach(t),Ha=l(va," shows how to implement this training procedure on a pre-trained Stable Diffusion model."),va.forEach(t),It=c(e),m(V.$$.fragment,e),jt=c(e),j=r(e,"H2",{class:!0});var ba=i(j);H=r(ba,"A",{id:!0,class:!0,href:!0});var Eo=i(H);Qe=r(Eo,"SPAN",{});var Do=i(Qe);m(de.$$.fragment,Do),Do.forEach(t),Eo.forEach(t),Fa=c(ba),Xe=r(ba,"SPAN",{});var yo=i(Xe);Wa=l(yo,"Training locally"),yo.forEach(t),ba.forEach(t),Nt=c(e),N=r(e,"H3",{class:!0});var $a=i(N);F=r($a,"A",{id:!0,class:!0,href:!0});var Ao=i(F);et=r(Ao,"SPAN",{});var xo=i(et);m(ge.$$.fragment,xo),xo.forEach(t),Ao.forEach(t),Ya=c($a),tt=r($a,"SPAN",{});var So=i(tt);Ja=l(So,"Installing the dependencies"),So.forEach(t),$a.forEach(t),qt=c(e),S=r(e,"P",{});var Je=i(S);Za=l(Je,"Before running the scripts, make sure to install the library\u2019s training dependencies. We also recommend to install "),at=r(Je,"CODE",{});var To=i(at);Ka=l(To,"diffusers"),To.forEach(t),Qa=l(Je," from the "),st=r(Je,"CODE",{});var ko=i(st);Xa=l(ko,"main"),ko.forEach(t),es=l(Je," github branch."),Je.forEach(t),Ct=c(e),m(ve.$$.fragment,e),Rt=c(e),W=r(e,"P",{});var wa=i(W);ts=l(wa,"Then initialize and configure a "),be=r(wa,"A",{href:!0,rel:!0});var Po=i(be);as=l(Po,"\u{1F917} Accelerate"),Po.forEach(t),ss=l(wa," environment with:"),wa.forEach(t),Ut=c(e),m($e.$$.fragment,e),Mt=c(e),T=r(e,"P",{});var Ze=i(T);os=l(Ze,"You need to accept the model license before downloading or using the weights. In this example we\u2019ll use model version "),ot=r(Ze,"CODE",{});var Io=i(ot);rs=l(Io,"v1-4"),Io.forEach(t),is=l(Ze,", so you\u2019ll need to visit "),we=r(Ze,"A",{href:!0,rel:!0});var jo=i(we);ns=l(jo,"its card"),jo.forEach(t),ls=l(Ze,", read the license and tick the checkbox if you agree."),Ze.forEach(t),Ot=c(e),Y=r(e,"P",{});var Ea=i(Y);ps=l(Ea,"You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to "),Ee=r(Ea,"A",{href:!0,rel:!0});var No=i(Ee);hs=l(No,"this section of the documentation"),No.forEach(t),_s=l(Ea,"."),Ea.forEach(t),Lt=c(e),He=r(e,"P",{});var qo=i(He);cs=l(qo,"Run the following command to authenticate your token"),qo.forEach(t),Gt=c(e),m(De.$$.fragment,e),zt=c(e),Fe=r(e,"P",{});var Co=i(Fe);us=l(Co,"If you have already cloned the repo, then you won\u2019t need to go through these steps. Instead, you can pass the path to your local checkout to the training script and it will be loaded from there."),Co.forEach(t),Bt=c(e),q=r(e,"H3",{class:!0});var Da=i(q);J=r(Da,"A",{id:!0,class:!0,href:!0});var Ro=i(J);rt=r(Ro,"SPAN",{});var Uo=i(rt);m(ye.$$.fragment,Uo),Uo.forEach(t),Ro.forEach(t),fs=c(Da),it=r(Da,"SPAN",{});var Mo=i(it);ms=l(Mo,"Dog toy example"),Mo.forEach(t),Da.forEach(t),Vt=c(e),Z=r(e,"P",{});var ya=i(Z);ds=l(ya,"In this example we\u2019ll use "),Ae=r(ya,"A",{href:!0,rel:!0});var Oo=i(Ae);gs=l(Oo,"these images"),Oo.forEach(t),vs=l(ya," to add a new concept to Stable Diffusion using the Dreambooth process. They will be our training data. Please, download them and place them somewhere in your system."),ya.forEach(t),Ht=c(e),We=r(e,"P",{});var Lo=i(We);bs=l(Lo,"Then you can launch the training script using:"),Lo.forEach(t),Ft=c(e),m(xe.$$.fragment,e),Wt=c(e),C=r(e,"H3",{class:!0});var Aa=i(C);K=r(Aa,"A",{id:!0,class:!0,href:!0});var Go=i(K);nt=r(Go,"SPAN",{});var zo=i(nt);m(Se.$$.fragment,zo),zo.forEach(t),Go.forEach(t),$s=c(Aa),lt=r(Aa,"SPAN",{});var Bo=i(lt);ws=l(Bo,"Training with a prior-preserving loss"),Bo.forEach(t),Aa.forEach(t),Yt=c(e),Ye=r(e,"P",{});var Vo=i(Ye);Es=l(Vo,"Prior preservation is used to avoid overfitting and language-drift. Please, refer to the paper to learn more about it if you are interested. For prior preservation, we use other images of the same class as part of the training process. The nice thing is that we can generate those images using the Stable Diffusion model itself! The training script will save the generated images to a local path we specify."),Vo.forEach(t),Jt=c(e),Q=r(e,"P",{});var xa=i(Q);Ds=l(xa,"According to the paper, it\u2019s recommended to generate "),pt=r(xa,"CODE",{});var Ho=i(pt);ys=l(Ho,"num_epochs * num_samples"),Ho.forEach(t),As=l(xa," images for prior preservation. 200-300 works well for most cases."),xa.forEach(t),Zt=c(e),m(Te.$$.fragment,e),Kt=c(e),R=r(e,"H3",{class:!0});var Sa=i(R);X=r(Sa,"A",{id:!0,class:!0,href:!0});var Fo=i(X);ht=r(Fo,"SPAN",{});var Wo=i(ht);m(ke.$$.fragment,Wo),Wo.forEach(t),Fo.forEach(t),xs=c(Sa),_t=r(Sa,"SPAN",{});var Yo=i(_t);Ss=l(Yo,"Training on a 16GB GPU"),Yo.forEach(t),Sa.forEach(t),Qt=c(e),ee=r(e,"P",{});var Ta=i(ee);Ts=l(Ta,"With the help of gradient checkpointing and the 8-bit optimizer from "),Pe=r(Ta,"A",{href:!0,rel:!0});var Jo=i(Pe);ks=l(Jo,"bitsandbytes"),Jo.forEach(t),Ps=l(Ta,", it\u2019s possible to train dreambooth on a 16GB GPU."),Ta.forEach(t),Xt=c(e),m(Ie.$$.fragment,e),ea=c(e),te=r(e,"P",{});var ka=i(te);Is=l(ka,"Then pass the "),ct=r(ka,"CODE",{});var Zo=i(ct);js=l(Zo,"--use_8bit_adam"),Zo.forEach(t),Ns=l(ka," option to the training script."),ka.forEach(t),ta=c(e),m(je.$$.fragment,e),aa=c(e),U=r(e,"H3",{class:!0});var Pa=i(U);ae=r(Pa,"A",{id:!0,class:!0,href:!0});var Ko=i(ae);ut=r(Ko,"SPAN",{});var Qo=i(ut);m(Ne.$$.fragment,Qo),Qo.forEach(t),Ko.forEach(t),qs=c(Pa),ft=r(Pa,"SPAN",{});var Xo=i(ft);Cs=l(Xo,"Fine-tune the text encoder in addition to the UNet"),Xo.forEach(t),Pa.forEach(t),sa=c(e),y=r(e,"P",{});var pe=i(y);Rs=l(pe,"The script also allows to fine-tune the "),mt=r(pe,"CODE",{});var er=i(mt);Us=l(er,"text_encoder"),er.forEach(t),Ms=l(pe," along with the "),dt=r(pe,"CODE",{});var tr=i(dt);Os=l(tr,"unet"),tr.forEach(t),Ls=l(pe,". It has been observed experimentally that this gives much better results, especially on faces. Please, refer to "),qe=r(pe,"A",{href:!0,rel:!0});var ar=i(qe);Gs=l(ar,"our report"),ar.forEach(t),zs=l(pe," for more details."),pe.forEach(t),oa=c(e),se=r(e,"P",{});var Ia=i(se);Bs=l(Ia,"To enable this option, pass the "),gt=r(Ia,"CODE",{});var sr=i(gt);Vs=l(sr,"--train_text_encoder"),sr.forEach(t),Hs=l(Ia," argument to the training script."),Ia.forEach(t),ra=c(e),m(oe.$$.fragment,e),ia=c(e),m(Ce.$$.fragment,e),na=c(e),M=r(e,"H3",{class:!0});var ja=i(M);re=r(ja,"A",{id:!0,class:!0,href:!0});var or=i(re);vt=r(or,"SPAN",{});var rr=i(vt);m(Re.$$.fragment,rr),rr.forEach(t),or.forEach(t),Fs=c(ja),bt=r(ja,"SPAN",{});var ir=i(bt);Ws=l(ir,"Training on a 8 GB GPU:"),ir.forEach(t),ja.forEach(t),la=c(e),ie=r(e,"P",{});var Na=i(ie);Ys=l(Na,"Using "),Ue=r(Na,"A",{href:!0,rel:!0});var nr=i(Ue);Js=l(nr,"DeepSpeed"),nr.forEach(t),Zs=l(Na,` it\u2019s even possible to offload some
tensors from VRAM to either CPU or NVME, allowing training to proceed with less GPU memory.`),Na.forEach(t),pa=c(e),k=r(e,"P",{});var Ke=i(k);Ks=l(Ke,"DeepSpeed needs to be enabled with "),$t=r(Ke,"CODE",{});var lr=i($t);Qs=l(lr,"accelerate config"),lr.forEach(t),Xs=l(Ke,`. During configuration,
answer yes to \u201CDo you want to use DeepSpeed?\u201C. Combining DeepSpeed stage 2, fp16
mixed precision, and offloading both the model parameters and the optimizer state to CPU, it\u2019s
possible to train on under 8 GB VRAM. The drawback is that this requires more system RAM (about 25 GB). See `),Me=r(Ke,"A",{href:!0,rel:!0});var pr=i(Me);eo=l(pr,"the DeepSpeed documentation"),pr.forEach(t),to=l(Ke," for more configuration options."),Ke.forEach(t),ha=c(e),ne=r(e,"P",{});var qa=i(ne);ao=l(qa,`Changing the default Adam optimizer to DeepSpeed\u2019s special version of Adam
`),wt=r(qa,"CODE",{});var hr=i(wt);so=l(hr,"deepspeed.ops.adam.DeepSpeedCPUAdam"),hr.forEach(t),oo=l(qa,` gives a substantial speedup, but enabling
it requires the system\u2019s CUDA toolchain version to be the same as the one installed with PyTorch. 8-bit optimizers don\u2019t seem to be compatible with DeepSpeed at the moment.`),qa.forEach(t),_a=c(e),m(Oe.$$.fragment,e),ca=c(e),O=r(e,"H2",{class:!0});var Ca=i(O);le=r(Ca,"A",{id:!0,class:!0,href:!0});var _r=i(le);Et=r(_r,"SPAN",{});var cr=i(Et);m(Le.$$.fragment,cr),cr.forEach(t),_r.forEach(t),ro=c(Ca),Dt=r(Ca,"SPAN",{});var ur=i(Dt);io=l(ur,"Inference"),ur.forEach(t),Ca.forEach(t),ua=c(e),A=r(e,"P",{});var he=i(A);no=l(he,"Once you have trained a model, inference can be done using the "),yt=r(he,"CODE",{});var fr=i(yt);lo=l(fr,"StableDiffusionPipeline"),fr.forEach(t),po=l(he,", by simply indicating the path where the model was saved. Make sure that your prompts include the special "),At=r(he,"CODE",{});var mr=i(At);ho=l(mr,"identifier"),mr.forEach(t),_o=l(he," used during training ("),xt=r(he,"CODE",{});var dr=i(xt);co=l(dr,"sks"),dr.forEach(t),uo=l(he," in the previous examples)."),he.forEach(t),fa=c(e),m(Ge.$$.fragment,e),this.h()},h(){h(u,"name","hf:doc:metadata"),h(u,"content",JSON.stringify(Sr)),h(D,"id","dreambooth-finetuning-example"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#dreambooth-finetuning-example"),h($,"class","relative group"),h(ce,"href","https://arxiv.org/abs/2208.12242"),h(ce,"rel","nofollow"),Er(Ve.src,mo="https://dreambooth.github.io/DreamBooth_files/teaser_static.jpg")||h(Ve,"src",mo),h(Ve,"alt","Dreambooth examples from the project's blog"),h(fe,"href","https://dreambooth.github.io"),h(fe,"rel","nofollow"),h(me,"href","https://github.com/huggingface/diffusers/tree/main/examples/dreambooth"),h(me,"rel","nofollow"),h(H,"id","training-locally"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#training-locally"),h(j,"class","relative group"),h(F,"id","installing-the-dependencies"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#installing-the-dependencies"),h(N,"class","relative group"),h(be,"href","https://github.com/huggingface/accelerate/"),h(be,"rel","nofollow"),h(we,"href","https://huggingface.co/CompVis/stable-diffusion-v1-4"),h(we,"rel","nofollow"),h(Ee,"href","https://huggingface.co/docs/hub/security-tokens"),h(Ee,"rel","nofollow"),h(J,"id","dog-toy-example"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#dog-toy-example"),h(q,"class","relative group"),h(Ae,"href","https://drive.google.com/drive/folders/1BO_dyz-p65qhBRRMRA4TbZ8qW4rB99JZ"),h(Ae,"rel","nofollow"),h(K,"id","training-with-a-priorpreserving-loss"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#training-with-a-priorpreserving-loss"),h(C,"class","relative group"),h(X,"id","training-on-a-16gb-gpu"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#training-on-a-16gb-gpu"),h(R,"class","relative group"),h(Pe,"href","https://github.com/TimDettmers/bitsandbytes"),h(Pe,"rel","nofollow"),h(ae,"id","finetune-the-text-encoder-in-addition-to-the-unet"),h(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ae,"href","#finetune-the-text-encoder-in-addition-to-the-unet"),h(U,"class","relative group"),h(qe,"href","https://wandb.ai/psuraj/dreambooth/reports/Dreambooth-Training-Analysis--VmlldzoyNzk0NDc3"),h(qe,"rel","nofollow"),h(re,"id","training-on-a-8-gb-gpu"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#training-on-a-8-gb-gpu"),h(M,"class","relative group"),h(Ue,"href","https://www.deepspeed.ai/"),h(Ue,"rel","nofollow"),h(Me,"href","https://huggingface.co/docs/accelerate/usage_guides/deepspeed"),h(Me,"rel","nofollow"),h(le,"id","inference"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#inference"),h(O,"class","relative group")},m(e,s){a(document.head,u),p(e,w,s),p(e,$,s),a($,D),a(D,I),d(E,I,null),a($,x),a($,G),a(G,Ra),p(e,Tt,s),p(e,_e,s),a(_e,ce),a(ce,Ua),a(_e,Ma),p(e,kt,s),p(e,z,s),a(z,Ve),a(z,Oa),a(z,ue),a(ue,La),a(ue,fe),a(fe,Ga),a(ue,za),p(e,Pt,s),p(e,B,s),a(B,Ba),a(B,me),a(me,Va),a(B,Ha),p(e,It,s),d(V,e,s),p(e,jt,s),p(e,j,s),a(j,H),a(H,Qe),d(de,Qe,null),a(j,Fa),a(j,Xe),a(Xe,Wa),p(e,Nt,s),p(e,N,s),a(N,F),a(F,et),d(ge,et,null),a(N,Ya),a(N,tt),a(tt,Ja),p(e,qt,s),p(e,S,s),a(S,Za),a(S,at),a(at,Ka),a(S,Qa),a(S,st),a(st,Xa),a(S,es),p(e,Ct,s),d(ve,e,s),p(e,Rt,s),p(e,W,s),a(W,ts),a(W,be),a(be,as),a(W,ss),p(e,Ut,s),d($e,e,s),p(e,Mt,s),p(e,T,s),a(T,os),a(T,ot),a(ot,rs),a(T,is),a(T,we),a(we,ns),a(T,ls),p(e,Ot,s),p(e,Y,s),a(Y,ps),a(Y,Ee),a(Ee,hs),a(Y,_s),p(e,Lt,s),p(e,He,s),a(He,cs),p(e,Gt,s),d(De,e,s),p(e,zt,s),p(e,Fe,s),a(Fe,us),p(e,Bt,s),p(e,q,s),a(q,J),a(J,rt),d(ye,rt,null),a(q,fs),a(q,it),a(it,ms),p(e,Vt,s),p(e,Z,s),a(Z,ds),a(Z,Ae),a(Ae,gs),a(Z,vs),p(e,Ht,s),p(e,We,s),a(We,bs),p(e,Ft,s),d(xe,e,s),p(e,Wt,s),p(e,C,s),a(C,K),a(K,nt),d(Se,nt,null),a(C,$s),a(C,lt),a(lt,ws),p(e,Yt,s),p(e,Ye,s),a(Ye,Es),p(e,Jt,s),p(e,Q,s),a(Q,Ds),a(Q,pt),a(pt,ys),a(Q,As),p(e,Zt,s),d(Te,e,s),p(e,Kt,s),p(e,R,s),a(R,X),a(X,ht),d(ke,ht,null),a(R,xs),a(R,_t),a(_t,Ss),p(e,Qt,s),p(e,ee,s),a(ee,Ts),a(ee,Pe),a(Pe,ks),a(ee,Ps),p(e,Xt,s),d(Ie,e,s),p(e,ea,s),p(e,te,s),a(te,Is),a(te,ct),a(ct,js),a(te,Ns),p(e,ta,s),d(je,e,s),p(e,aa,s),p(e,U,s),a(U,ae),a(ae,ut),d(Ne,ut,null),a(U,qs),a(U,ft),a(ft,Cs),p(e,sa,s),p(e,y,s),a(y,Rs),a(y,mt),a(mt,Us),a(y,Ms),a(y,dt),a(dt,Os),a(y,Ls),a(y,qe),a(qe,Gs),a(y,zs),p(e,oa,s),p(e,se,s),a(se,Bs),a(se,gt),a(gt,Vs),a(se,Hs),p(e,ra,s),d(oe,e,s),p(e,ia,s),d(Ce,e,s),p(e,na,s),p(e,M,s),a(M,re),a(re,vt),d(Re,vt,null),a(M,Fs),a(M,bt),a(bt,Ws),p(e,la,s),p(e,ie,s),a(ie,Ys),a(ie,Ue),a(Ue,Js),a(ie,Zs),p(e,pa,s),p(e,k,s),a(k,Ks),a(k,$t),a($t,Qs),a(k,Xs),a(k,Me),a(Me,eo),a(k,to),p(e,ha,s),p(e,ne,s),a(ne,ao),a(ne,wt),a(wt,so),a(ne,oo),p(e,_a,s),d(Oe,e,s),p(e,ca,s),p(e,O,s),a(O,le),a(le,Et),d(Le,Et,null),a(O,ro),a(O,Dt),a(Dt,io),p(e,ua,s),p(e,A,s),a(A,no),a(A,yt),a(yt,lo),a(A,po),a(A,At),a(At,ho),a(A,_o),a(A,xt),a(xt,co),a(A,uo),p(e,fa,s),d(Ge,e,s),ma=!0},p(e,[s]){const ze={};s&2&&(ze.$$scope={dirty:s,ctx:e}),V.$set(ze);const St={};s&2&&(St.$$scope={dirty:s,ctx:e}),oe.$set(St)},i(e){ma||(g(E.$$.fragment,e),g(V.$$.fragment,e),g(de.$$.fragment,e),g(ge.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(De.$$.fragment,e),g(ye.$$.fragment,e),g(xe.$$.fragment,e),g(Se.$$.fragment,e),g(Te.$$.fragment,e),g(ke.$$.fragment,e),g(Ie.$$.fragment,e),g(je.$$.fragment,e),g(Ne.$$.fragment,e),g(oe.$$.fragment,e),g(Ce.$$.fragment,e),g(Re.$$.fragment,e),g(Oe.$$.fragment,e),g(Le.$$.fragment,e),g(Ge.$$.fragment,e),ma=!0)},o(e){v(E.$$.fragment,e),v(V.$$.fragment,e),v(de.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(De.$$.fragment,e),v(ye.$$.fragment,e),v(xe.$$.fragment,e),v(Se.$$.fragment,e),v(Te.$$.fragment,e),v(ke.$$.fragment,e),v(Ie.$$.fragment,e),v(je.$$.fragment,e),v(Ne.$$.fragment,e),v(oe.$$.fragment,e),v(Ce.$$.fragment,e),v(Re.$$.fragment,e),v(Oe.$$.fragment,e),v(Le.$$.fragment,e),v(Ge.$$.fragment,e),ma=!1},d(e){t(u),e&&t(w),e&&t($),b(E),e&&t(Tt),e&&t(_e),e&&t(kt),e&&t(z),e&&t(Pt),e&&t(B),e&&t(It),b(V,e),e&&t(jt),e&&t(j),b(de),e&&t(Nt),e&&t(N),b(ge),e&&t(qt),e&&t(S),e&&t(Ct),b(ve,e),e&&t(Rt),e&&t(W),e&&t(Ut),b($e,e),e&&t(Mt),e&&t(T),e&&t(Ot),e&&t(Y),e&&t(Lt),e&&t(He),e&&t(Gt),b(De,e),e&&t(zt),e&&t(Fe),e&&t(Bt),e&&t(q),b(ye),e&&t(Vt),e&&t(Z),e&&t(Ht),e&&t(We),e&&t(Ft),b(xe,e),e&&t(Wt),e&&t(C),b(Se),e&&t(Yt),e&&t(Ye),e&&t(Jt),e&&t(Q),e&&t(Zt),b(Te,e),e&&t(Kt),e&&t(R),b(ke),e&&t(Qt),e&&t(ee),e&&t(Xt),b(Ie,e),e&&t(ea),e&&t(te),e&&t(ta),b(je,e),e&&t(aa),e&&t(U),b(Ne),e&&t(sa),e&&t(y),e&&t(oa),e&&t(se),e&&t(ra),b(oe,e),e&&t(ia),b(Ce,e),e&&t(na),e&&t(M),b(Re),e&&t(la),e&&t(ie),e&&t(pa),e&&t(k),e&&t(ha),e&&t(ne),e&&t(_a),b(Oe,e),e&&t(ca),e&&t(O),b(Le),e&&t(ua),e&&t(A),e&&t(fa),b(Ge,e)}}}const Sr={local:"dreambooth-finetuning-example",sections:[{local:"training-locally",sections:[{local:"installing-the-dependencies",title:"Installing the dependencies"},{local:"dog-toy-example",title:"Dog toy example"},{local:"training-with-a-priorpreserving-loss",title:"Training with a prior-preserving loss"},{local:"training-on-a-16gb-gpu",title:"Training on a 16GB GPU"},{local:"finetune-the-text-encoder-in-addition-to-the-unet",title:"Fine-tune the text encoder in addition to the UNet"},{local:"training-on-a-8-gb-gpu",title:"Training on a 8 GB GPU:"}],title:"Training locally "},{local:"inference",title:"Inference"}],title:"DreamBooth fine-tuning example"};function Tr(Be){return Dr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nr extends vr{constructor(u){super();br(this,u,Tr,xr,$r,{})}}export{Nr as default,Sr as metadata};
