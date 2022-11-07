import{S as vi,i as bi,s as $i,e as o,k as _,w as f,t as n,M as wi,c as i,d as t,m as c,a as r,x as m,h as l,b as h,N as Ei,G as a,g as p,y as d,q as g,o as v,B as b,v as Di}from"../../chunks/vendor-hf-doc-builder.js";import{T as gi}from"../../chunks/Tip-hf-doc-builder.js";import{I as L}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";function yi(ze){let u,w,$,D,I;return{c(){u=o("p"),w=n("Dreambooth fine-tuning is very sensitive to hyperparameters and easy to overfit. We recommend you take a look at our "),$=o("a"),D=n("in-depth analysis"),I=n(" with recommended settings for different subjects, and go from there."),this.h()},l(E){u=i(E,"P",{});var x=r(u);w=l(x,"Dreambooth fine-tuning is very sensitive to hyperparameters and easy to overfit. We recommend you take a look at our "),$=i(x,"A",{href:!0,rel:!0});var G=r($);D=l(G,"in-depth analysis"),G.forEach(t),I=l(x," with recommended settings for different subjects, and go from there."),x.forEach(t),this.h()},h(){h($,"href","https://huggingface.co/blog/dreambooth"),h($,"rel","nofollow")},m(E,x){p(E,u,x),a(u,w),a(u,$),a($,D),a(u,I)},d(E){E&&t(u)}}}function Ai(ze){let u;return{c(){u=n("Training the text encoder requires additional memory, so training won't fit on a 16GB GPU. You'll need at least 24GB VRAM to use this option.")},l(w){u=l(w,"Training the text encoder requires additional memory, so training won't fit on a 16GB GPU. You'll need at least 24GB VRAM to use this option.")},m(w,$){p(w,u,$)},d(w){w&&t(u)}}}function xi(ze){let u,w,$,D,I,E,x,G,Ra,Tt,_e,ce,Ua,Ma,kt,B,Ve,mo,Oa,ue,La,fe,Ga,Ba,Pt,z,za,me,Va,Ha,It,V,jt,j,H,Qe,de,Fa,Xe,Wa,qt,q,F,et,ge,Ya,tt,Ja,Nt,S,Za,at,Ka,Qa,st,Xa,es,Ct,ve,Rt,W,ts,be,as,ss,Ut,$e,Mt,T,os,ot,is,rs,we,ns,ls,Ot,Y,ps,Ee,hs,_s,Lt,He,cs,Gt,De,Bt,Fe,us,zt,N,J,it,ye,fs,rt,ms,Vt,Z,ds,Ae,gs,vs,Ht,We,bs,Ft,xe,Wt,C,K,nt,Se,$s,lt,ws,Yt,Ye,Es,Jt,Q,Ds,pt,ys,As,Zt,Te,Kt,R,X,ht,ke,xs,_t,Ss,Qt,ee,Ts,Pe,ks,Ps,Xt,Ie,ea,te,Is,ct,js,qs,ta,je,aa,U,ae,ut,qe,Ns,ft,Cs,sa,y,Rs,mt,Us,Ms,dt,Os,Ls,Ne,Gs,Bs,oa,se,zs,gt,Vs,Hs,ia,oe,ra,Ce,na,M,ie,vt,Re,Fs,bt,Ws,la,re,Ys,Ue,Js,Zs,pa,k,Ks,$t,Qs,Xs,Me,eo,to,ha,ne,ao,wt,so,oo,_a,Oe,ca,O,le,Et,Le,io,Dt,ro,ua,A,no,yt,lo,po,At,ho,_o,xt,co,uo,fa,Ge,ma;return E=new L({}),V=new gi({props:{warning:!0,$$slots:{default:[yi]},$$scope:{ctx:ze}}}),de=new L({}),ge=new L({}),ve=new P({props:{code:`pip install git+https://github.com/huggingface/diffusers
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
  --max_train_steps=800`}}),qe=new L({}),oe=new gi({props:{$$slots:{default:[Ai]},$$scope:{ctx:ze}}}),Ce=new P({props:{code:`export MODEL_NAME="CompVis/stable-diffusion-v1-4"
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

image.save(<span class="hljs-string">&quot;dog-bucket.png&quot;</span>)`}}),{c(){u=o("meta"),w=_(),$=o("h1"),D=o("a"),I=o("span"),f(E.$$.fragment),x=_(),G=o("span"),Ra=n("DreamBooth fine-tuning example"),Tt=_(),_e=o("p"),ce=o("a"),Ua=n("DreamBooth"),Ma=n(" is a method to personalize text-to-image models like stable diffusion given just a few (3~5) images of a subject."),kt=_(),B=o("p"),Ve=o("img"),Oa=_(),ue=o("em"),La=n("Dreambooth examples from the "),fe=o("a"),Ga=n("project\u2019s blog"),Ba=n("."),Pt=_(),z=o("p"),za=n("The "),me=o("a"),Va=n("Dreambooth training script"),Ha=n(" shows how to implement this training procedure on a pre-trained Stable Diffusion model."),It=_(),f(V.$$.fragment),jt=_(),j=o("h2"),H=o("a"),Qe=o("span"),f(de.$$.fragment),Fa=_(),Xe=o("span"),Wa=n("Training locally"),qt=_(),q=o("h3"),F=o("a"),et=o("span"),f(ge.$$.fragment),Ya=_(),tt=o("span"),Ja=n("Installing the dependencies"),Nt=_(),S=o("p"),Za=n("Before running the scripts, make sure to install the library\u2019s training dependencies. We also recommend to install "),at=o("code"),Ka=n("diffusers"),Qa=n(" from the "),st=o("code"),Xa=n("main"),es=n(" github branch."),Ct=_(),f(ve.$$.fragment),Rt=_(),W=o("p"),ts=n("Then initialize and configure a "),be=o("a"),as=n("\u{1F917} Accelerate"),ss=n(" environment with:"),Ut=_(),f($e.$$.fragment),Mt=_(),T=o("p"),os=n("You need to accept the model license before downloading or using the weights. In this example we\u2019ll use model version "),ot=o("code"),is=n("v1-4"),rs=n(", so you\u2019ll need to visit "),we=o("a"),ns=n("its card"),ls=n(", read the license and tick the checkbox if you agree."),Ot=_(),Y=o("p"),ps=n("You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to "),Ee=o("a"),hs=n("this section of the documentation"),_s=n("."),Lt=_(),He=o("p"),cs=n("Run the following command to authenticate your token"),Gt=_(),f(De.$$.fragment),Bt=_(),Fe=o("p"),us=n("If you have already cloned the repo, then you won\u2019t need to go through these steps. Instead, you can pass the path to your local checkout to the training script and it will be loaded from there."),zt=_(),N=o("h3"),J=o("a"),it=o("span"),f(ye.$$.fragment),fs=_(),rt=o("span"),ms=n("Dog toy example"),Vt=_(),Z=o("p"),ds=n("In this example we\u2019ll use "),Ae=o("a"),gs=n("these images"),vs=n(" to add a new concept to Stable Diffusion using the Dreambooth process. They will be our training data. Please, download them and place them somewhere in your system."),Ht=_(),We=o("p"),bs=n("Then you can launch the training script using:"),Ft=_(),f(xe.$$.fragment),Wt=_(),C=o("h3"),K=o("a"),nt=o("span"),f(Se.$$.fragment),$s=_(),lt=o("span"),ws=n("Training with a prior-preserving loss"),Yt=_(),Ye=o("p"),Es=n("Prior preservation is used to avoid overfitting and language-drift. Please, refer to the paper to learn more about it if you are interested. For prior preservation, we use other images of the same class as part of the training process. The nice thing is that we can generate those images using the Stable Diffusion model itself! The training script will save the generated images to a local path we specify."),Jt=_(),Q=o("p"),Ds=n("According to the paper, it\u2019s recommended to generate "),pt=o("code"),ys=n("num_epochs * num_samples"),As=n(" images for prior preservation. 200-300 works well for most cases."),Zt=_(),f(Te.$$.fragment),Kt=_(),R=o("h3"),X=o("a"),ht=o("span"),f(ke.$$.fragment),xs=_(),_t=o("span"),Ss=n("Training on a 16GB GPU"),Qt=_(),ee=o("p"),Ts=n("With the help of gradient checkpointing and the 8-bit optimizer from "),Pe=o("a"),ks=n("bitsandbytes"),Ps=n(", it\u2019s possible to train dreambooth on a 16GB GPU."),Xt=_(),f(Ie.$$.fragment),ea=_(),te=o("p"),Is=n("Then pass the "),ct=o("code"),js=n("--use_8bit_adam"),qs=n(" option to the training script."),ta=_(),f(je.$$.fragment),aa=_(),U=o("h3"),ae=o("a"),ut=o("span"),f(qe.$$.fragment),Ns=_(),ft=o("span"),Cs=n("Fine-tune the text encoder in addition to the UNet"),sa=_(),y=o("p"),Rs=n("The script also allows to fine-tune the "),mt=o("code"),Us=n("text_encoder"),Ms=n(" along with the "),dt=o("code"),Os=n("unet"),Ls=n(". It has been observed experimentally that this gives much better results, especially on faces. Please, refer to "),Ne=o("a"),Gs=n("our blog"),Bs=n(" for more details."),oa=_(),se=o("p"),zs=n("To enable this option, pass the "),gt=o("code"),Vs=n("--train_text_encoder"),Hs=n(" argument to the training script."),ia=_(),f(oe.$$.fragment),ra=_(),f(Ce.$$.fragment),na=_(),M=o("h3"),ie=o("a"),vt=o("span"),f(Re.$$.fragment),Fs=_(),bt=o("span"),Ws=n("Training on a 8 GB GPU:"),la=_(),re=o("p"),Ys=n("Using "),Ue=o("a"),Js=n("DeepSpeed"),Zs=n(` it\u2019s even possible to offload some
tensors from VRAM to either CPU or NVME, allowing training to proceed with less GPU memory.`),pa=_(),k=o("p"),Ks=n("DeepSpeed needs to be enabled with "),$t=o("code"),Qs=n("accelerate config"),Xs=n(`. During configuration,
answer yes to \u201CDo you want to use DeepSpeed?\u201C. Combining DeepSpeed stage 2, fp16
mixed precision, and offloading both the model parameters and the optimizer state to CPU, it\u2019s
possible to train on under 8 GB VRAM. The drawback is that this requires more system RAM (about 25 GB). See `),Me=o("a"),eo=n("the DeepSpeed documentation"),to=n(" for more configuration options."),ha=_(),ne=o("p"),ao=n(`Changing the default Adam optimizer to DeepSpeed\u2019s special version of Adam
`),wt=o("code"),so=n("deepspeed.ops.adam.DeepSpeedCPUAdam"),oo=n(` gives a substantial speedup, but enabling
it requires the system\u2019s CUDA toolchain version to be the same as the one installed with PyTorch. 8-bit optimizers don\u2019t seem to be compatible with DeepSpeed at the moment.`),_a=_(),f(Oe.$$.fragment),ca=_(),O=o("h2"),le=o("a"),Et=o("span"),f(Le.$$.fragment),io=_(),Dt=o("span"),ro=n("Inference"),ua=_(),A=o("p"),no=n("Once you have trained a model, inference can be done using the "),yt=o("code"),lo=n("StableDiffusionPipeline"),po=n(", by simply indicating the path where the model was saved. Make sure that your prompts include the special "),At=o("code"),ho=n("identifier"),_o=n(" used during training ("),xt=o("code"),co=n("sks"),uo=n(" in the previous examples)."),fa=_(),f(Ge.$$.fragment),this.h()},l(e){const s=wi('[data-svelte="svelte-1phssyn"]',document.head);u=i(s,"META",{name:!0,content:!0}),s.forEach(t),w=c(e),$=i(e,"H1",{class:!0});var Be=r($);D=i(Be,"A",{id:!0,class:!0,href:!0});var St=r(D);I=i(St,"SPAN",{});var go=r(I);m(E.$$.fragment,go),go.forEach(t),St.forEach(t),x=c(Be),G=i(Be,"SPAN",{});var vo=r(G);Ra=l(vo,"DreamBooth fine-tuning example"),vo.forEach(t),Be.forEach(t),Tt=c(e),_e=i(e,"P",{});var fo=r(_e);ce=i(fo,"A",{href:!0,rel:!0});var bo=r(ce);Ua=l(bo,"DreamBooth"),bo.forEach(t),Ma=l(fo," is a method to personalize text-to-image models like stable diffusion given just a few (3~5) images of a subject."),fo.forEach(t),kt=c(e),B=i(e,"P",{});var da=r(B);Ve=i(da,"IMG",{src:!0,alt:!0}),Oa=c(da),ue=i(da,"EM",{});var ga=r(ue);La=l(ga,"Dreambooth examples from the "),fe=i(ga,"A",{href:!0,rel:!0});var $o=r(fe);Ga=l($o,"project\u2019s blog"),$o.forEach(t),Ba=l(ga,"."),ga.forEach(t),da.forEach(t),Pt=c(e),z=i(e,"P",{});var va=r(z);za=l(va,"The "),me=i(va,"A",{href:!0,rel:!0});var wo=r(me);Va=l(wo,"Dreambooth training script"),wo.forEach(t),Ha=l(va," shows how to implement this training procedure on a pre-trained Stable Diffusion model."),va.forEach(t),It=c(e),m(V.$$.fragment,e),jt=c(e),j=i(e,"H2",{class:!0});var ba=r(j);H=i(ba,"A",{id:!0,class:!0,href:!0});var Eo=r(H);Qe=i(Eo,"SPAN",{});var Do=r(Qe);m(de.$$.fragment,Do),Do.forEach(t),Eo.forEach(t),Fa=c(ba),Xe=i(ba,"SPAN",{});var yo=r(Xe);Wa=l(yo,"Training locally"),yo.forEach(t),ba.forEach(t),qt=c(e),q=i(e,"H3",{class:!0});var $a=r(q);F=i($a,"A",{id:!0,class:!0,href:!0});var Ao=r(F);et=i(Ao,"SPAN",{});var xo=r(et);m(ge.$$.fragment,xo),xo.forEach(t),Ao.forEach(t),Ya=c($a),tt=i($a,"SPAN",{});var So=r(tt);Ja=l(So,"Installing the dependencies"),So.forEach(t),$a.forEach(t),Nt=c(e),S=i(e,"P",{});var Je=r(S);Za=l(Je,"Before running the scripts, make sure to install the library\u2019s training dependencies. We also recommend to install "),at=i(Je,"CODE",{});var To=r(at);Ka=l(To,"diffusers"),To.forEach(t),Qa=l(Je," from the "),st=i(Je,"CODE",{});var ko=r(st);Xa=l(ko,"main"),ko.forEach(t),es=l(Je," github branch."),Je.forEach(t),Ct=c(e),m(ve.$$.fragment,e),Rt=c(e),W=i(e,"P",{});var wa=r(W);ts=l(wa,"Then initialize and configure a "),be=i(wa,"A",{href:!0,rel:!0});var Po=r(be);as=l(Po,"\u{1F917} Accelerate"),Po.forEach(t),ss=l(wa," environment with:"),wa.forEach(t),Ut=c(e),m($e.$$.fragment,e),Mt=c(e),T=i(e,"P",{});var Ze=r(T);os=l(Ze,"You need to accept the model license before downloading or using the weights. In this example we\u2019ll use model version "),ot=i(Ze,"CODE",{});var Io=r(ot);is=l(Io,"v1-4"),Io.forEach(t),rs=l(Ze,", so you\u2019ll need to visit "),we=i(Ze,"A",{href:!0,rel:!0});var jo=r(we);ns=l(jo,"its card"),jo.forEach(t),ls=l(Ze,", read the license and tick the checkbox if you agree."),Ze.forEach(t),Ot=c(e),Y=i(e,"P",{});var Ea=r(Y);ps=l(Ea,"You have to be a registered user in \u{1F917} Hugging Face Hub, and you\u2019ll also need to use an access token for the code to work. For more information on access tokens, please refer to "),Ee=i(Ea,"A",{href:!0,rel:!0});var qo=r(Ee);hs=l(qo,"this section of the documentation"),qo.forEach(t),_s=l(Ea,"."),Ea.forEach(t),Lt=c(e),He=i(e,"P",{});var No=r(He);cs=l(No,"Run the following command to authenticate your token"),No.forEach(t),Gt=c(e),m(De.$$.fragment,e),Bt=c(e),Fe=i(e,"P",{});var Co=r(Fe);us=l(Co,"If you have already cloned the repo, then you won\u2019t need to go through these steps. Instead, you can pass the path to your local checkout to the training script and it will be loaded from there."),Co.forEach(t),zt=c(e),N=i(e,"H3",{class:!0});var Da=r(N);J=i(Da,"A",{id:!0,class:!0,href:!0});var Ro=r(J);it=i(Ro,"SPAN",{});var Uo=r(it);m(ye.$$.fragment,Uo),Uo.forEach(t),Ro.forEach(t),fs=c(Da),rt=i(Da,"SPAN",{});var Mo=r(rt);ms=l(Mo,"Dog toy example"),Mo.forEach(t),Da.forEach(t),Vt=c(e),Z=i(e,"P",{});var ya=r(Z);ds=l(ya,"In this example we\u2019ll use "),Ae=i(ya,"A",{href:!0,rel:!0});var Oo=r(Ae);gs=l(Oo,"these images"),Oo.forEach(t),vs=l(ya," to add a new concept to Stable Diffusion using the Dreambooth process. They will be our training data. Please, download them and place them somewhere in your system."),ya.forEach(t),Ht=c(e),We=i(e,"P",{});var Lo=r(We);bs=l(Lo,"Then you can launch the training script using:"),Lo.forEach(t),Ft=c(e),m(xe.$$.fragment,e),Wt=c(e),C=i(e,"H3",{class:!0});var Aa=r(C);K=i(Aa,"A",{id:!0,class:!0,href:!0});var Go=r(K);nt=i(Go,"SPAN",{});var Bo=r(nt);m(Se.$$.fragment,Bo),Bo.forEach(t),Go.forEach(t),$s=c(Aa),lt=i(Aa,"SPAN",{});var zo=r(lt);ws=l(zo,"Training with a prior-preserving loss"),zo.forEach(t),Aa.forEach(t),Yt=c(e),Ye=i(e,"P",{});var Vo=r(Ye);Es=l(Vo,"Prior preservation is used to avoid overfitting and language-drift. Please, refer to the paper to learn more about it if you are interested. For prior preservation, we use other images of the same class as part of the training process. The nice thing is that we can generate those images using the Stable Diffusion model itself! The training script will save the generated images to a local path we specify."),Vo.forEach(t),Jt=c(e),Q=i(e,"P",{});var xa=r(Q);Ds=l(xa,"According to the paper, it\u2019s recommended to generate "),pt=i(xa,"CODE",{});var Ho=r(pt);ys=l(Ho,"num_epochs * num_samples"),Ho.forEach(t),As=l(xa," images for prior preservation. 200-300 works well for most cases."),xa.forEach(t),Zt=c(e),m(Te.$$.fragment,e),Kt=c(e),R=i(e,"H3",{class:!0});var Sa=r(R);X=i(Sa,"A",{id:!0,class:!0,href:!0});var Fo=r(X);ht=i(Fo,"SPAN",{});var Wo=r(ht);m(ke.$$.fragment,Wo),Wo.forEach(t),Fo.forEach(t),xs=c(Sa),_t=i(Sa,"SPAN",{});var Yo=r(_t);Ss=l(Yo,"Training on a 16GB GPU"),Yo.forEach(t),Sa.forEach(t),Qt=c(e),ee=i(e,"P",{});var Ta=r(ee);Ts=l(Ta,"With the help of gradient checkpointing and the 8-bit optimizer from "),Pe=i(Ta,"A",{href:!0,rel:!0});var Jo=r(Pe);ks=l(Jo,"bitsandbytes"),Jo.forEach(t),Ps=l(Ta,", it\u2019s possible to train dreambooth on a 16GB GPU."),Ta.forEach(t),Xt=c(e),m(Ie.$$.fragment,e),ea=c(e),te=i(e,"P",{});var ka=r(te);Is=l(ka,"Then pass the "),ct=i(ka,"CODE",{});var Zo=r(ct);js=l(Zo,"--use_8bit_adam"),Zo.forEach(t),qs=l(ka," option to the training script."),ka.forEach(t),ta=c(e),m(je.$$.fragment,e),aa=c(e),U=i(e,"H3",{class:!0});var Pa=r(U);ae=i(Pa,"A",{id:!0,class:!0,href:!0});var Ko=r(ae);ut=i(Ko,"SPAN",{});var Qo=r(ut);m(qe.$$.fragment,Qo),Qo.forEach(t),Ko.forEach(t),Ns=c(Pa),ft=i(Pa,"SPAN",{});var Xo=r(ft);Cs=l(Xo,"Fine-tune the text encoder in addition to the UNet"),Xo.forEach(t),Pa.forEach(t),sa=c(e),y=i(e,"P",{});var pe=r(y);Rs=l(pe,"The script also allows to fine-tune the "),mt=i(pe,"CODE",{});var ei=r(mt);Us=l(ei,"text_encoder"),ei.forEach(t),Ms=l(pe," along with the "),dt=i(pe,"CODE",{});var ti=r(dt);Os=l(ti,"unet"),ti.forEach(t),Ls=l(pe,". It has been observed experimentally that this gives much better results, especially on faces. Please, refer to "),Ne=i(pe,"A",{href:!0,rel:!0});var ai=r(Ne);Gs=l(ai,"our blog"),ai.forEach(t),Bs=l(pe," for more details."),pe.forEach(t),oa=c(e),se=i(e,"P",{});var Ia=r(se);zs=l(Ia,"To enable this option, pass the "),gt=i(Ia,"CODE",{});var si=r(gt);Vs=l(si,"--train_text_encoder"),si.forEach(t),Hs=l(Ia," argument to the training script."),Ia.forEach(t),ia=c(e),m(oe.$$.fragment,e),ra=c(e),m(Ce.$$.fragment,e),na=c(e),M=i(e,"H3",{class:!0});var ja=r(M);ie=i(ja,"A",{id:!0,class:!0,href:!0});var oi=r(ie);vt=i(oi,"SPAN",{});var ii=r(vt);m(Re.$$.fragment,ii),ii.forEach(t),oi.forEach(t),Fs=c(ja),bt=i(ja,"SPAN",{});var ri=r(bt);Ws=l(ri,"Training on a 8 GB GPU:"),ri.forEach(t),ja.forEach(t),la=c(e),re=i(e,"P",{});var qa=r(re);Ys=l(qa,"Using "),Ue=i(qa,"A",{href:!0,rel:!0});var ni=r(Ue);Js=l(ni,"DeepSpeed"),ni.forEach(t),Zs=l(qa,` it\u2019s even possible to offload some
tensors from VRAM to either CPU or NVME, allowing training to proceed with less GPU memory.`),qa.forEach(t),pa=c(e),k=i(e,"P",{});var Ke=r(k);Ks=l(Ke,"DeepSpeed needs to be enabled with "),$t=i(Ke,"CODE",{});var li=r($t);Qs=l(li,"accelerate config"),li.forEach(t),Xs=l(Ke,`. During configuration,
answer yes to \u201CDo you want to use DeepSpeed?\u201C. Combining DeepSpeed stage 2, fp16
mixed precision, and offloading both the model parameters and the optimizer state to CPU, it\u2019s
possible to train on under 8 GB VRAM. The drawback is that this requires more system RAM (about 25 GB). See `),Me=i(Ke,"A",{href:!0,rel:!0});var pi=r(Me);eo=l(pi,"the DeepSpeed documentation"),pi.forEach(t),to=l(Ke," for more configuration options."),Ke.forEach(t),ha=c(e),ne=i(e,"P",{});var Na=r(ne);ao=l(Na,`Changing the default Adam optimizer to DeepSpeed\u2019s special version of Adam
`),wt=i(Na,"CODE",{});var hi=r(wt);so=l(hi,"deepspeed.ops.adam.DeepSpeedCPUAdam"),hi.forEach(t),oo=l(Na,` gives a substantial speedup, but enabling
it requires the system\u2019s CUDA toolchain version to be the same as the one installed with PyTorch. 8-bit optimizers don\u2019t seem to be compatible with DeepSpeed at the moment.`),Na.forEach(t),_a=c(e),m(Oe.$$.fragment,e),ca=c(e),O=i(e,"H2",{class:!0});var Ca=r(O);le=i(Ca,"A",{id:!0,class:!0,href:!0});var _i=r(le);Et=i(_i,"SPAN",{});var ci=r(Et);m(Le.$$.fragment,ci),ci.forEach(t),_i.forEach(t),io=c(Ca),Dt=i(Ca,"SPAN",{});var ui=r(Dt);ro=l(ui,"Inference"),ui.forEach(t),Ca.forEach(t),ua=c(e),A=i(e,"P",{});var he=r(A);no=l(he,"Once you have trained a model, inference can be done using the "),yt=i(he,"CODE",{});var fi=r(yt);lo=l(fi,"StableDiffusionPipeline"),fi.forEach(t),po=l(he,", by simply indicating the path where the model was saved. Make sure that your prompts include the special "),At=i(he,"CODE",{});var mi=r(At);ho=l(mi,"identifier"),mi.forEach(t),_o=l(he," used during training ("),xt=i(he,"CODE",{});var di=r(xt);co=l(di,"sks"),di.forEach(t),uo=l(he," in the previous examples)."),he.forEach(t),fa=c(e),m(Ge.$$.fragment,e),this.h()},h(){h(u,"name","hf:doc:metadata"),h(u,"content",JSON.stringify(Si)),h(D,"id","dreambooth-finetuning-example"),h(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(D,"href","#dreambooth-finetuning-example"),h($,"class","relative group"),h(ce,"href","https://arxiv.org/abs/2208.12242"),h(ce,"rel","nofollow"),Ei(Ve.src,mo="https://dreambooth.github.io/DreamBooth_files/teaser_static.jpg")||h(Ve,"src",mo),h(Ve,"alt","Dreambooth examples from the project's blog"),h(fe,"href","https://dreambooth.github.io"),h(fe,"rel","nofollow"),h(me,"href","https://github.com/huggingface/diffusers/tree/main/examples/dreambooth"),h(me,"rel","nofollow"),h(H,"id","training-locally"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#training-locally"),h(j,"class","relative group"),h(F,"id","installing-the-dependencies"),h(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(F,"href","#installing-the-dependencies"),h(q,"class","relative group"),h(be,"href","https://github.com/huggingface/accelerate/"),h(be,"rel","nofollow"),h(we,"href","https://huggingface.co/CompVis/stable-diffusion-v1-4"),h(we,"rel","nofollow"),h(Ee,"href","https://huggingface.co/docs/hub/security-tokens"),h(Ee,"rel","nofollow"),h(J,"id","dog-toy-example"),h(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(J,"href","#dog-toy-example"),h(N,"class","relative group"),h(Ae,"href","https://drive.google.com/drive/folders/1BO_dyz-p65qhBRRMRA4TbZ8qW4rB99JZ"),h(Ae,"rel","nofollow"),h(K,"id","training-with-a-priorpreserving-loss"),h(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(K,"href","#training-with-a-priorpreserving-loss"),h(C,"class","relative group"),h(X,"id","training-on-a-16gb-gpu"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#training-on-a-16gb-gpu"),h(R,"class","relative group"),h(Pe,"href","https://github.com/TimDettmers/bitsandbytes"),h(Pe,"rel","nofollow"),h(ae,"id","finetune-the-text-encoder-in-addition-to-the-unet"),h(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ae,"href","#finetune-the-text-encoder-in-addition-to-the-unet"),h(U,"class","relative group"),h(Ne,"href","https://huggingface.co/blog/dreambooth"),h(Ne,"rel","nofollow"),h(ie,"id","training-on-a-8-gb-gpu"),h(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ie,"href","#training-on-a-8-gb-gpu"),h(M,"class","relative group"),h(Ue,"href","https://www.deepspeed.ai/"),h(Ue,"rel","nofollow"),h(Me,"href","https://huggingface.co/docs/accelerate/usage_guides/deepspeed"),h(Me,"rel","nofollow"),h(le,"id","inference"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#inference"),h(O,"class","relative group")},m(e,s){a(document.head,u),p(e,w,s),p(e,$,s),a($,D),a(D,I),d(E,I,null),a($,x),a($,G),a(G,Ra),p(e,Tt,s),p(e,_e,s),a(_e,ce),a(ce,Ua),a(_e,Ma),p(e,kt,s),p(e,B,s),a(B,Ve),a(B,Oa),a(B,ue),a(ue,La),a(ue,fe),a(fe,Ga),a(ue,Ba),p(e,Pt,s),p(e,z,s),a(z,za),a(z,me),a(me,Va),a(z,Ha),p(e,It,s),d(V,e,s),p(e,jt,s),p(e,j,s),a(j,H),a(H,Qe),d(de,Qe,null),a(j,Fa),a(j,Xe),a(Xe,Wa),p(e,qt,s),p(e,q,s),a(q,F),a(F,et),d(ge,et,null),a(q,Ya),a(q,tt),a(tt,Ja),p(e,Nt,s),p(e,S,s),a(S,Za),a(S,at),a(at,Ka),a(S,Qa),a(S,st),a(st,Xa),a(S,es),p(e,Ct,s),d(ve,e,s),p(e,Rt,s),p(e,W,s),a(W,ts),a(W,be),a(be,as),a(W,ss),p(e,Ut,s),d($e,e,s),p(e,Mt,s),p(e,T,s),a(T,os),a(T,ot),a(ot,is),a(T,rs),a(T,we),a(we,ns),a(T,ls),p(e,Ot,s),p(e,Y,s),a(Y,ps),a(Y,Ee),a(Ee,hs),a(Y,_s),p(e,Lt,s),p(e,He,s),a(He,cs),p(e,Gt,s),d(De,e,s),p(e,Bt,s),p(e,Fe,s),a(Fe,us),p(e,zt,s),p(e,N,s),a(N,J),a(J,it),d(ye,it,null),a(N,fs),a(N,rt),a(rt,ms),p(e,Vt,s),p(e,Z,s),a(Z,ds),a(Z,Ae),a(Ae,gs),a(Z,vs),p(e,Ht,s),p(e,We,s),a(We,bs),p(e,Ft,s),d(xe,e,s),p(e,Wt,s),p(e,C,s),a(C,K),a(K,nt),d(Se,nt,null),a(C,$s),a(C,lt),a(lt,ws),p(e,Yt,s),p(e,Ye,s),a(Ye,Es),p(e,Jt,s),p(e,Q,s),a(Q,Ds),a(Q,pt),a(pt,ys),a(Q,As),p(e,Zt,s),d(Te,e,s),p(e,Kt,s),p(e,R,s),a(R,X),a(X,ht),d(ke,ht,null),a(R,xs),a(R,_t),a(_t,Ss),p(e,Qt,s),p(e,ee,s),a(ee,Ts),a(ee,Pe),a(Pe,ks),a(ee,Ps),p(e,Xt,s),d(Ie,e,s),p(e,ea,s),p(e,te,s),a(te,Is),a(te,ct),a(ct,js),a(te,qs),p(e,ta,s),d(je,e,s),p(e,aa,s),p(e,U,s),a(U,ae),a(ae,ut),d(qe,ut,null),a(U,Ns),a(U,ft),a(ft,Cs),p(e,sa,s),p(e,y,s),a(y,Rs),a(y,mt),a(mt,Us),a(y,Ms),a(y,dt),a(dt,Os),a(y,Ls),a(y,Ne),a(Ne,Gs),a(y,Bs),p(e,oa,s),p(e,se,s),a(se,zs),a(se,gt),a(gt,Vs),a(se,Hs),p(e,ia,s),d(oe,e,s),p(e,ra,s),d(Ce,e,s),p(e,na,s),p(e,M,s),a(M,ie),a(ie,vt),d(Re,vt,null),a(M,Fs),a(M,bt),a(bt,Ws),p(e,la,s),p(e,re,s),a(re,Ys),a(re,Ue),a(Ue,Js),a(re,Zs),p(e,pa,s),p(e,k,s),a(k,Ks),a(k,$t),a($t,Qs),a(k,Xs),a(k,Me),a(Me,eo),a(k,to),p(e,ha,s),p(e,ne,s),a(ne,ao),a(ne,wt),a(wt,so),a(ne,oo),p(e,_a,s),d(Oe,e,s),p(e,ca,s),p(e,O,s),a(O,le),a(le,Et),d(Le,Et,null),a(O,io),a(O,Dt),a(Dt,ro),p(e,ua,s),p(e,A,s),a(A,no),a(A,yt),a(yt,lo),a(A,po),a(A,At),a(At,ho),a(A,_o),a(A,xt),a(xt,co),a(A,uo),p(e,fa,s),d(Ge,e,s),ma=!0},p(e,[s]){const Be={};s&2&&(Be.$$scope={dirty:s,ctx:e}),V.$set(Be);const St={};s&2&&(St.$$scope={dirty:s,ctx:e}),oe.$set(St)},i(e){ma||(g(E.$$.fragment,e),g(V.$$.fragment,e),g(de.$$.fragment,e),g(ge.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(De.$$.fragment,e),g(ye.$$.fragment,e),g(xe.$$.fragment,e),g(Se.$$.fragment,e),g(Te.$$.fragment,e),g(ke.$$.fragment,e),g(Ie.$$.fragment,e),g(je.$$.fragment,e),g(qe.$$.fragment,e),g(oe.$$.fragment,e),g(Ce.$$.fragment,e),g(Re.$$.fragment,e),g(Oe.$$.fragment,e),g(Le.$$.fragment,e),g(Ge.$$.fragment,e),ma=!0)},o(e){v(E.$$.fragment,e),v(V.$$.fragment,e),v(de.$$.fragment,e),v(ge.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(De.$$.fragment,e),v(ye.$$.fragment,e),v(xe.$$.fragment,e),v(Se.$$.fragment,e),v(Te.$$.fragment,e),v(ke.$$.fragment,e),v(Ie.$$.fragment,e),v(je.$$.fragment,e),v(qe.$$.fragment,e),v(oe.$$.fragment,e),v(Ce.$$.fragment,e),v(Re.$$.fragment,e),v(Oe.$$.fragment,e),v(Le.$$.fragment,e),v(Ge.$$.fragment,e),ma=!1},d(e){t(u),e&&t(w),e&&t($),b(E),e&&t(Tt),e&&t(_e),e&&t(kt),e&&t(B),e&&t(Pt),e&&t(z),e&&t(It),b(V,e),e&&t(jt),e&&t(j),b(de),e&&t(qt),e&&t(q),b(ge),e&&t(Nt),e&&t(S),e&&t(Ct),b(ve,e),e&&t(Rt),e&&t(W),e&&t(Ut),b($e,e),e&&t(Mt),e&&t(T),e&&t(Ot),e&&t(Y),e&&t(Lt),e&&t(He),e&&t(Gt),b(De,e),e&&t(Bt),e&&t(Fe),e&&t(zt),e&&t(N),b(ye),e&&t(Vt),e&&t(Z),e&&t(Ht),e&&t(We),e&&t(Ft),b(xe,e),e&&t(Wt),e&&t(C),b(Se),e&&t(Yt),e&&t(Ye),e&&t(Jt),e&&t(Q),e&&t(Zt),b(Te,e),e&&t(Kt),e&&t(R),b(ke),e&&t(Qt),e&&t(ee),e&&t(Xt),b(Ie,e),e&&t(ea),e&&t(te),e&&t(ta),b(je,e),e&&t(aa),e&&t(U),b(qe),e&&t(sa),e&&t(y),e&&t(oa),e&&t(se),e&&t(ia),b(oe,e),e&&t(ra),b(Ce,e),e&&t(na),e&&t(M),b(Re),e&&t(la),e&&t(re),e&&t(pa),e&&t(k),e&&t(ha),e&&t(ne),e&&t(_a),b(Oe,e),e&&t(ca),e&&t(O),b(Le),e&&t(ua),e&&t(A),e&&t(fa),b(Ge,e)}}}const Si={local:"dreambooth-finetuning-example",sections:[{local:"training-locally",sections:[{local:"installing-the-dependencies",title:"Installing the dependencies"},{local:"dog-toy-example",title:"Dog toy example"},{local:"training-with-a-priorpreserving-loss",title:"Training with a prior-preserving loss"},{local:"training-on-a-16gb-gpu",title:"Training on a 16GB GPU"},{local:"finetune-the-text-encoder-in-addition-to-the-unet",title:"Fine-tune the text encoder in addition to the UNet"},{local:"training-on-a-8-gb-gpu",title:"Training on a 8 GB GPU:"}],title:"Training locally "},{local:"inference",title:"Inference"}],title:"DreamBooth fine-tuning example"};function Ti(ze){return Di(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qi extends vi{constructor(u){super();bi(this,u,Ti,xi,$i,{})}}export{qi as default,Si as metadata};
