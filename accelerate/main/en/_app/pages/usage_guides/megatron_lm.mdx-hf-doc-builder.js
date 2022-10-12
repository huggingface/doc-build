import{S as Zc,i as ed,s as td,e as l,k as c,w as u,t as a,M as sd,c as n,d as s,m as d,a as o,x as m,h as r,b as h,G as t,g as p,y as _,L as ad,q as f,o as g,B as v,v as rd}from"../../chunks/vendor-hf-doc-builder.js";import{I as yt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as b}from"../../chunks/CodeBlock-hf-doc-builder.js";function ld(Oi){let F,ga,B,ee,Ct,be,Vr,Gt,Hr,va,M,ye,Yr,Kr,ke,Xr,Jr,Ee,Qr,Zr,Me,el,tl,je,sl,al,wa,W,te,Rt,$e,rl,Ft,ll,ba,kt,nl,ya,se,ol,Bt,il,pl,ka,ae,cl,Wt,dl,hl,Ea,re,ul,Ut,ml,_l,Ma,le,fl,Vt,gl,vl,ja,ne,wl,Ht,bl,yl,$a,oe,kl,Yt,El,Ml,Pa,j,jl,Kt,$l,Pl,Xt,ql,Ll,Jt,Tl,Dl,Qt,Al,Il,qa,ie,xl,Zt,Ol,Sl,La,U,pe,es,Pe,zl,ts,Nl,Ta,S,Cl,qe,Gl,Rl,Le,Fl,Bl,Da,Et,Wl,Aa,Mt,ss,Ul,Ia,Te,xa,De,as,Vl,Oa,Ae,Sa,Ie,rs,Hl,za,xe,Na,Oe,y,ls,Yl,Kl,ns,Xl,Jl,Se,Ql,ze,Zl,os,en,tn,sn,Ne,an,is,rn,ln,Ce,Ca,V,ce,ps,Ge,nn,cs,on,Ga,de,pn,ds,cn,dn,Ra,Re,Fa,jt,hn,Ba,Fe,Wa,he,un,hs,mn,_n,Ua,$t,Be,fn,us,gn,vn,Va,We,Ha,Ue,ms,wn,Ya,Ve,Ka,He,_s,bn,Xa,Ye,Ja,Ke,Pt,yn,fs,kn,Qa,Xe,Za,z,En,gs,Mn,jn,vs,$n,Pn,er,Je,tr,qt,qn,sr,Qe,ar,ue,Ln,ws,Tn,Dn,rr,H,me,bs,Ze,An,ys,In,lr,Lt,xn,nr,Tt,q,On,ks,Sn,zn,Es,Nn,Cn,Ms,Gn,Rn,js,Fn,Bn,or,et,ir,tt,$s,Wn,pr,$,Un,Ps,Vn,Hn,qs,Yn,Kn,Ls,Xn,Jn,st,Qn,Zn,cr,at,dr,N,eo,Ts,to,so,Ds,ao,ro,hr,rt,ur,k,lo,As,no,oo,Is,io,po,xs,co,ho,Os,uo,mo,Ss,_o,fo,mr,lt,_r,Y,_e,zs,nt,go,Ns,vo,fr,fe,Cs,Dt,wo,ot,bo,yo,Gs,Rs,ko,gr,it,vr,pt,D,Eo,Fs,Mo,jo,Bs,$o,Po,Ws,qo,Lo,wr,ct,br,K,ge,Us,dt,To,Vs,Do,yr,w,Hs,Ys,Ao,Io,Ks,X,xo,Xs,Oo,So,Js,zo,No,Co,Qs,A,Go,Zs,Ro,Fo,ea,Bo,Wo,ta,Uo,Vo,Ho,sa,J,Yo,aa,Ko,Xo,ra,Jo,Qo,Zo,la,na,ei,ti,oa,At,ia,si,ai,ri,pa,Q,li,ca,ni,oi,da,ii,pi,ci,ha,ua,di,kr,I,hi,ht,ui,mi,ma,_i,fi,ut,gi,Er,x,vi,mt,wi,bi,_a,yi,ki,_t,Ei,Mr,L,Mi,ft,ji,$i,fa,Pi,qi,gt,Li,Ti,vt,Di,jr;return be=new yt({}),$e=new yt({}),Pe=new yt({}),Te=new b({props:{code:"conda create --name ml",highlighted:'conda <span class="hljs-built_in">create</span> <span class="hljs-comment">--name ml</span>'}}),Ae=new b({props:{code:"conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",highlighted:'<span class="hljs-attribute">conda</span> install pytorch torchvision torchaudio cudatoolkit=<span class="hljs-number">11</span>.<span class="hljs-number">3</span> -c pytorch'}}),xe=new b({props:{code:`git clone https://github.com/NVIDIA/apex
cd apex
pip install -v --disable-pip-version-check --no-cache-dir --global-option="--cpp_ext" --global-option="--cuda_ext" ./
cd ..`,highlighted:`git clone https:<span class="hljs-string">//github.com/NVIDIA/apex</span>
<span class="hljs-keyword">cd</span> apex
pip install -v <span class="hljs-params">--disable-pip-version-check</span> <span class="hljs-params">--no-cache-dir</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cpp_ext&quot;</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cuda_ext&quot;</span> <span class="hljs-string">./</span>
<span class="hljs-keyword">cd</span> <span class="hljs-string">..</span>`}}),Se=new b({props:{code:`git clone https://github.com/NVIDIA/Megatron-LM.git
cd Megatron-LM`,highlighted:`git clone https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/NVIDIA/</span>Megatron-LM.git
cd Megatron-LM`}}),Ne=new b({props:{code:`"""Setup for pip package."""

import os
import sys
import setuptools

if sys.version_info < (3,):
    raise Exception("Python 2 is not supported by Megatron.")

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="megatron-lm",
    version="3.0.0",
    description="Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    # The project's main homepage.
    url="https://github.com/NVIDIA/Megatron-LM",
    author="NVIDIA INC",
    maintainer="NVIDIA INC",
    # The licence under which the project is released
    license="See https://github.com/NVIDIA/Megatron-LM/blob/master/LICENSE",
    classifiers=[
        "Intended Audience :: Developers",
        "Intended Audience :: Science/Research",
        "Intended Audience :: Information Technology",
        # Indicate what your project relates to
        "Topic :: Scientific/Engineering :: Artificial Intelligence",
        "Topic :: Software Development :: Libraries :: Python Modules",
        # Additional Setting
        "Environment :: Console",
        "Natural Language :: English",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.6",
    packages=setuptools.find_packages(),
    install_requires=["nltk", "six", "regex", "torch>=1.12.0", "pybind11"],
    # Add in any packaged data.
    include_package_data=True,
    zip_safe=False,
    # PyPI package information.
    keywords="deep learning, Megatron, gpu, NLP, nvidia, pytorch, torch, language",
)`,highlighted:`<span class="hljs-string">&quot;&quot;&quot;Setup for pip package.&quot;&quot;&quot;</span>

<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">import</span> sys
<span class="hljs-keyword">import</span> setuptools

<span class="hljs-keyword">if</span> sys.version_info &lt; (<span class="hljs-number">3</span>,):
    <span class="hljs-keyword">raise</span> Exception(<span class="hljs-string">&quot;Python 2 is not supported by Megatron.&quot;</span>)

<span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;README.md&quot;</span>, <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> fh:
    long_description = fh.read()

setuptools.setup(
    name=<span class="hljs-string">&quot;megatron-lm&quot;</span>,
    version=<span class="hljs-string">&quot;3.0.0&quot;</span>,
    description=<span class="hljs-string">&quot;Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism.&quot;</span>,
    long_description=long_description,
    long_description_content_type=<span class="hljs-string">&quot;text/markdown&quot;</span>,
    <span class="hljs-comment"># The project&#x27;s main homepage.</span>
    url=<span class="hljs-string">&quot;https://github.com/NVIDIA/Megatron-LM&quot;</span>,
    author=<span class="hljs-string">&quot;NVIDIA INC&quot;</span>,
    maintainer=<span class="hljs-string">&quot;NVIDIA INC&quot;</span>,
    <span class="hljs-comment"># The licence under which the project is released</span>
    license=<span class="hljs-string">&quot;See https://github.com/NVIDIA/Megatron-LM/blob/master/LICENSE&quot;</span>,
    classifiers=[
        <span class="hljs-string">&quot;Intended Audience :: Developers&quot;</span>,
        <span class="hljs-string">&quot;Intended Audience :: Science/Research&quot;</span>,
        <span class="hljs-string">&quot;Intended Audience :: Information Technology&quot;</span>,
        <span class="hljs-comment"># Indicate what your project relates to</span>
        <span class="hljs-string">&quot;Topic :: Scientific/Engineering :: Artificial Intelligence&quot;</span>,
        <span class="hljs-string">&quot;Topic :: Software Development :: Libraries :: Python Modules&quot;</span>,
        <span class="hljs-comment"># Additional Setting</span>
        <span class="hljs-string">&quot;Environment :: Console&quot;</span>,
        <span class="hljs-string">&quot;Natural Language :: English&quot;</span>,
        <span class="hljs-string">&quot;Operating System :: OS Independent&quot;</span>,
    ],
    python_requires=<span class="hljs-string">&quot;&gt;=3.6&quot;</span>,
    packages=setuptools.find_packages(),
    install_requires=[<span class="hljs-string">&quot;nltk&quot;</span>, <span class="hljs-string">&quot;six&quot;</span>, <span class="hljs-string">&quot;regex&quot;</span>, <span class="hljs-string">&quot;torch&gt;=1.12.0&quot;</span>, <span class="hljs-string">&quot;pybind11&quot;</span>],
    <span class="hljs-comment"># Add in any packaged data.</span>
    include_package_data=<span class="hljs-literal">True</span>,
    zip_safe=<span class="hljs-literal">False</span>,
    <span class="hljs-comment"># PyPI package information.</span>
    keywords=<span class="hljs-string">&quot;deep learning, Megatron, gpu, NLP, nvidia, pytorch, torch, language&quot;</span>,
)`}}),Ce=new b({props:{code:'pip install "."',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;.&quot;</span>'}}),Ge=new yt({}),Re=new b({props:{code:`:~$ accelerate config --config_file "megatron_gpt_config.yaml"
In which compute environment are you running? ([0] This machine, [1] AWS (Amazon SageMaker)): 0
Which type of machine are you using? ([0] No distributed training, [1] multi-CPU, [2] multi-GPU, [3] TPU [4] MPS): 2
How many different machines will you use (use more than 1 for multi-node training)? [1]: 
Do you want to use DeepSpeed? [yes/NO]: 
Do you want to use FullyShardedDataParallel? [yes/NO]: 
Do you want to use Megatron-LM ? [yes/NO]: yes
What is the Tensor Parallelism degree/size? [1]:2
Do you want to enable Sequence Parallelism? [YES/no]: 
What is the Pipeline Parallelism degree/size? [1]:2
What is the number of micro-batches? [1]:2
Do you want to enable selective activation recomputation? [YES/no]: 
Do you want to use distributed optimizer which shards optimizer state and gradients across data pralellel ranks? [YES/no]: 
What is the gradient clipping value based on global L2 Norm (0 to disable)? [1.0]: 
How many GPU(s) should be used for distributed training? [1]:8
Do you wish to use FP16 or BF16 (mixed precision)? [NO/fp16/bf16]: bf16`,highlighted:`:~$ accelerate config --config_file <span class="hljs-string">&quot;megatron_gpt_config.yaml&quot;</span>
In <span class="hljs-built_in">which</span> compute environment are you running? ([0] This machine, [1] AWS (Amazon SageMaker)): 0
Which <span class="hljs-built_in">type</span> of machine are you using? ([0] No distributed training, [1] multi-CPU, [2] multi-GPU, [3] TPU [4] MPS): 2
How many different machines will you use (use more than 1 <span class="hljs-keyword">for</span> multi-node training)? [1]: 
Do you want to use DeepSpeed? [<span class="hljs-built_in">yes</span>/NO]: 
Do you want to use FullyShardedDataParallel? [<span class="hljs-built_in">yes</span>/NO]: 
Do you want to use Megatron-LM ? [<span class="hljs-built_in">yes</span>/NO]: <span class="hljs-built_in">yes</span>
What is the Tensor Parallelism degree/size? [1]:2
Do you want to <span class="hljs-built_in">enable</span> Sequence Parallelism? [YES/no]: 
What is the Pipeline Parallelism degree/size? [1]:2
What is the number of micro-batches? [1]:2
Do you want to <span class="hljs-built_in">enable</span> selective activation recomputation? [YES/no]: 
Do you want to use distributed optimizer <span class="hljs-built_in">which</span> shards optimizer state and gradients across data pralellel ranks? [YES/no]: 
What is the gradient clipping value based on global L2 Norm (0 to <span class="hljs-built_in">disable</span>)? [1.0]: 
How many GPU(s) should be used <span class="hljs-keyword">for</span> distributed training? [1]:8
Do you wish to use FP16 or BF16 (mixed precision)? [NO/fp16/bf16]: bf16`}}),Fe=new b({props:{code:`~$ cat megatron_gpt_config.yaml 
compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: MEGATRON_LM
downcast_bf16: 'no'
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
megatron_lm_config:
  megatron_lm_gradient_clipping: 1.0
  megatron_lm_num_micro_batches: 2
  megatron_lm_pp_degree: 2
  megatron_lm_recompute_activations: true
  megatron_lm_sequence_parallelism: true
  megatron_lm_tp_degree: 2
  megatron_lm_use_distributed_optimizer: true
mixed_precision: bf16
num_machines: 1
num_processes: 8
rdzv_backend: static
same_network: true
use_cpu: false`,highlighted:`<span class="hljs-string">~$</span> <span class="hljs-string">cat</span> <span class="hljs-string">megatron_gpt_config.yaml</span> 
<span class="hljs-attr">compute_environment:</span> <span class="hljs-string">LOCAL_MACHINE</span>
<span class="hljs-attr">deepspeed_config:</span> {}
<span class="hljs-attr">distributed_type:</span> <span class="hljs-string">MEGATRON_LM</span>
<span class="hljs-attr">downcast_bf16:</span> <span class="hljs-string">&#x27;no&#x27;</span>
<span class="hljs-attr">fsdp_config:</span> {}
<span class="hljs-attr">machine_rank:</span> <span class="hljs-number">0</span>
<span class="hljs-attr">main_process_ip:</span> <span class="hljs-literal">null</span>
<span class="hljs-attr">main_process_port:</span> <span class="hljs-literal">null</span>
<span class="hljs-attr">main_training_function:</span> <span class="hljs-string">main</span>
<span class="hljs-attr">megatron_lm_config:</span>
  <span class="hljs-attr">megatron_lm_gradient_clipping:</span> <span class="hljs-number">1.0</span>
  <span class="hljs-attr">megatron_lm_num_micro_batches:</span> <span class="hljs-number">2</span>
  <span class="hljs-attr">megatron_lm_pp_degree:</span> <span class="hljs-number">2</span>
  <span class="hljs-attr">megatron_lm_recompute_activations:</span> <span class="hljs-literal">true</span>
  <span class="hljs-attr">megatron_lm_sequence_parallelism:</span> <span class="hljs-literal">true</span>
  <span class="hljs-attr">megatron_lm_tp_degree:</span> <span class="hljs-number">2</span>
  <span class="hljs-attr">megatron_lm_use_distributed_optimizer:</span> <span class="hljs-literal">true</span>
<span class="hljs-attr">mixed_precision:</span> <span class="hljs-string">bf16</span>
<span class="hljs-attr">num_machines:</span> <span class="hljs-number">1</span>
<span class="hljs-attr">num_processes:</span> <span class="hljs-number">8</span>
<span class="hljs-attr">rdzv_backend:</span> <span class="hljs-string">static</span>
<span class="hljs-attr">same_network:</span> <span class="hljs-literal">true</span>
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),We=new b({props:{code:`from accelerate.utils import MegatronLMDummyScheduler

if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    lr_scheduler = MegatronLMDummyScheduler(
        optimizer=optimizer,
        total_num_steps=args.max_train_steps,
        warmup_num_steps=args.num_warmup_steps,
    )
else:
    lr_scheduler = get_scheduler(
        name=args.lr_scheduler_type,
        optimizer=optimizer,
        num_warmup_steps=args.num_warmup_steps * args.gradient_accumulation_steps,
        num_training_steps=args.max_train_steps * args.gradient_accumulation_steps,
    )`,highlighted:`<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> MegatronLMDummyScheduler

<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    lr_scheduler = MegatronLMDummyScheduler(
        optimizer=optimizer,
        total_num_steps=args.max_train_steps,
        warmup_num_steps=args.num_warmup_steps,
    )
<span class="hljs-keyword">else</span>:
    lr_scheduler = get_scheduler(
        name=args.lr_scheduler_type,
        optimizer=optimizer,
        num_warmup_steps=args.num_warmup_steps * args.gradient_accumulation_steps,
        num_training_steps=args.max_train_steps * args.gradient_accumulation_steps,
    )`}}),Ve=new b({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
else:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`,highlighted:`<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
<span class="hljs-keyword">else</span>:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`}}),Ye=new b({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    losses.append(loss)
else:
    losses.append(accelerator.gather_for_metrics(loss.repeat(args.per_device_eval_batch_size)))

if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    losses = torch.tensor(losses)
else:
    losses = torch.cat(losses)`,highlighted:`<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    losses.append(loss)
<span class="hljs-keyword">else</span>:
    losses.append(accelerator.gather_for_metrics(loss.repeat(args.per_device_eval_batch_size)))

<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    losses = torch.tensor(losses)
<span class="hljs-keyword">else</span>:
    losses = torch.cat(losses)`}}),Xe=new b({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    accelerator.save_state(args.output_dir)
else:
    unwrapped_model = accelerator.unwrap_model(model)
    unwrapped_model.save_pretrained(
        args.output_dir, is_main_process=accelerator.is_main_process, save_function=accelerator.save
    )`,highlighted:`<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    accelerator.save_state(args.output_dir)
<span class="hljs-keyword">else</span>:
    unwrapped_model = accelerator.unwrap_model(model)
    unwrapped_model.save_pretrained(
        args.output_dir, is_main_process=accelerator.is_main_process, save_function=accelerator.save
    )`}}),Je=new b({props:{code:`accelerate launch --config_file megatron_gpt_config.yaml \\
examples/by_feature/megatron_lm_gpt_pretraining.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name wikitext \\
--dataset_config_name wikitext-2-raw-v1 \\
--block_size 1024 \\
--learning_rate 5e-5 \\
--per_device_train_batch_size 4 \\
--per_device_eval_batch_size 4 \\
--num_train_epochs 5 \\
--with_tracking \\
--report_to "wandb" \\
--output_dir "awesome_model"`,highlighted:`accelerate launch --config_file megatron_gpt_config.yaml \\
examples/by_feature/megatron_lm_gpt_pretraining.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name wikitext \\
--dataset_config_name wikitext-2-raw-v1 \\
--block_size 1024 \\
--learning_rate 5e-5 \\
--per_device_train_batch_size 4 \\
--per_device_eval_batch_size 4 \\
--num_train_epochs 5 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span> \\
--output_dir <span class="hljs-string">&quot;awesome_model&quot;</span>`}}),Qe=new b({props:{code:"done with compiling and loading fused kernels. Compilation time: 3.569 seconds",highlighted:`Loading extension module fused_dense_cuda...
&gt;&gt;&gt; <span class="hljs-keyword">done</span> with compiling and loading fused kernels. Compilation time: 3.569 seconds
 &gt; padded vocab (size: 50257) with 175 dummy tokens (new size: 50432)
Building gpt model <span class="hljs-keyword">in</span> the pre-training mode.
The Megatron LM model weights are initialized at random <span class="hljs-keyword">in</span> \`accelerator.prepare\`. Please use \`accelerator.load_checkpoint\` to load a pre-trained checkpoint matching the distributed setup.
Preparing dataloader
Preparing dataloader
Preparing model
 &gt; number of parameters on (tensor, pipeline) model parallel rank (1, 0): 210753280
 &gt; number of parameters on (tensor, pipeline) model parallel rank (1, 1): 209445120
 &gt; number of parameters on (tensor, pipeline) model parallel rank (0, 0): 210753280
 &gt; number of parameters on (tensor, pipeline) model parallel rank (0, 1): 209445120
Preparing optimizer
Preparing scheduler
&gt; learning rate decay style: linear
10/10/2022 22:57:22 - INFO - __main__ - ***** Running training *****
10/10/2022 22:57:22 - INFO - __main__ -   Num examples = 2318
10/10/2022 22:57:22 - INFO - __main__ -   Num Epochs = 5
10/10/2022 22:57:22 - INFO - __main__ -   Instantaneous batch size per device = 24
10/10/2022 22:57:22 - INFO - __main__ -   Total train batch size (w. parallel, distributed &amp; accumulation) = 48
10/10/2022 22:57:22 - INFO - __main__ -   Gradient Accumulation steps = 1
10/10/2022 22:57:22 - INFO - __main__ -   Total optimization steps = 245
 20%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258D                                                 | 49/245 [01:04&lt;04:09,  1.27s/it]
 10/10/2022 22:58:29 - INFO - __main__ - epoch 0: perplexity: 1222.1594275215962 eval_loss: 7.10837459564209
 40%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A                                     | 98/245 [02:10&lt;03:07,  1.28s/it]
 10/10/2022 22:59:35 - INFO - __main__ - epoch 1: perplexity: 894.5236583794557 eval_loss: 6.796291351318359
 60%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C                        | 147/245 [03:16&lt;02:05,  1.28s/it]
 10/10/2022 23:00:40 - INFO - __main__ - epoch 2: perplexity: 702.8458788508042 eval_loss: 6.555137634277344
 80%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A            | 196/245 [04:22&lt;01:02,  1.28s/it]
 10/10/2022 23:01:46 - INFO - __main__ - epoch 3: perplexity: 600.3220028695281 eval_loss: 6.39746618270874
100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 245/245 [05:27&lt;00:00,  1.28s/it]`}}),Ze=new yt({}),et=new b({props:{code:`from accelerate.utils import MegatronLMDummyScheduler, GPTTrainStep, avg_losses_across_data_parallel_group

# Custom loss function for the Megatron model
class GPTTrainStepWithCustomLoss(GPTTrainStep):
    def __init__(self, megatron_args, **kwargs):
        super().__init__(megatron_args)
        self.kwargs = kwargs

    def get_loss_func(self):
        def loss_func(inputs, loss_mask, output_tensor):
            batch_size, seq_length = output_tensor.shape
            losses = output_tensor.float()
            loss_mask = loss_mask.view(-1).float()
            loss = losses.view(-1) * loss_mask

            # Resize and average loss per sample
            loss_per_sample = loss.view(batch_size, seq_length).sum(axis=1)
            loss_mask_per_sample = loss_mask.view(batch_size, seq_length).sum(axis=1)
            loss_per_sample = loss_per_sample / loss_mask_per_sample

            # Calculate and scale weighting
            weights = torch.stack([(inputs == kt).float() for kt in self.kwargs["keytoken_ids"]]).sum(axis=[0, 2])
            weights = 1.0 + self.kwargs["alpha"] * weights
            # Calculate weighted average
            weighted_loss = (loss_per_sample * weights).mean()

            # Reduce loss across data parallel groups
            averaged_loss = avg_losses_across_data_parallel_group([weighted_loss])

            return weighted_loss, {"lm loss": averaged_loss[0]}

        return loss_func

    def get_forward_step_func(self):
        def forward_step(data_iterator, model):
            """Forward step."""
            # Get the batch.
            tokens, labels, loss_mask, attention_mask, position_ids = self.get_batch(data_iterator)
            output_tensor = model(tokens, position_ids, attention_mask, labels=labels)

            return output_tensor, partial(self.loss_func, tokens, loss_mask)

        return forward_step


def main():
    # Custom loss function for the Megatron model
    keytoken_ids = []
    keywords = ["plt", "pd", "sk", "fit", "predict", " plt", " pd", " sk", " fit", " predict"]
    for keyword in keywords:
        ids = tokenizer([keyword]).input_ids[0]
        if len(ids) == 1:
            keytoken_ids.append(ids[0])
    accelerator.print(f"Keytoken ids: {keytoken_ids}")
    accelerator.state.megatron_lm_plugin.custom_train_step_class = GPTTrainStepWithCustomLoss
    accelerator.state.megatron_lm_plugin.custom_train_step_kwargs = {
        "keytoken_ids": keytoken_ids,
        "alpha": 0.25,
    }`,highlighted:`<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> MegatronLMDummyScheduler, GPTTrainStep, avg_losses_across_data_parallel_group

<span class="hljs-comment"># Custom loss function for the Megatron model</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">GPTTrainStepWithCustomLoss</span>(<span class="hljs-title class_ inherited__">GPTTrainStep</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, megatron_args, **kwargs</span>):
        <span class="hljs-built_in">super</span>().__init__(megatron_args)
        self.kwargs = kwargs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_loss_func</span>(<span class="hljs-params">self</span>):
        <span class="hljs-keyword">def</span> <span class="hljs-title function_">loss_func</span>(<span class="hljs-params">inputs, loss_mask, output_tensor</span>):
            batch_size, seq_length = output_tensor.shape
            losses = output_tensor.<span class="hljs-built_in">float</span>()
            loss_mask = loss_mask.view(-<span class="hljs-number">1</span>).<span class="hljs-built_in">float</span>()
            loss = losses.view(-<span class="hljs-number">1</span>) * loss_mask

            <span class="hljs-comment"># Resize and average loss per sample</span>
            loss_per_sample = loss.view(batch_size, seq_length).<span class="hljs-built_in">sum</span>(axis=<span class="hljs-number">1</span>)
            loss_mask_per_sample = loss_mask.view(batch_size, seq_length).<span class="hljs-built_in">sum</span>(axis=<span class="hljs-number">1</span>)
            loss_per_sample = loss_per_sample / loss_mask_per_sample

            <span class="hljs-comment"># Calculate and scale weighting</span>
            weights = torch.stack([(inputs == kt).<span class="hljs-built_in">float</span>() <span class="hljs-keyword">for</span> kt <span class="hljs-keyword">in</span> self.kwargs[<span class="hljs-string">&quot;keytoken_ids&quot;</span>]]).<span class="hljs-built_in">sum</span>(axis=[<span class="hljs-number">0</span>, <span class="hljs-number">2</span>])
            weights = <span class="hljs-number">1.0</span> + self.kwargs[<span class="hljs-string">&quot;alpha&quot;</span>] * weights
            <span class="hljs-comment"># Calculate weighted average</span>
            weighted_loss = (loss_per_sample * weights).mean()

            <span class="hljs-comment"># Reduce loss across data parallel groups</span>
            averaged_loss = avg_losses_across_data_parallel_group([weighted_loss])

            <span class="hljs-keyword">return</span> weighted_loss, {<span class="hljs-string">&quot;lm loss&quot;</span>: averaged_loss[<span class="hljs-number">0</span>]}

        <span class="hljs-keyword">return</span> loss_func

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">get_forward_step_func</span>(<span class="hljs-params">self</span>):
        <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward_step</span>(<span class="hljs-params">data_iterator, model</span>):
            <span class="hljs-string">&quot;&quot;&quot;Forward step.&quot;&quot;&quot;</span>
            <span class="hljs-comment"># Get the batch.</span>
            tokens, labels, loss_mask, attention_mask, position_ids = self.get_batch(data_iterator)
            output_tensor = model(tokens, position_ids, attention_mask, labels=labels)

            <span class="hljs-keyword">return</span> output_tensor, partial(self.loss_func, tokens, loss_mask)

        <span class="hljs-keyword">return</span> forward_step


<span class="hljs-keyword">def</span> <span class="hljs-title function_">main</span>():
    <span class="hljs-comment"># Custom loss function for the Megatron model</span>
    keytoken_ids = []
    keywords = [<span class="hljs-string">&quot;plt&quot;</span>, <span class="hljs-string">&quot;pd&quot;</span>, <span class="hljs-string">&quot;sk&quot;</span>, <span class="hljs-string">&quot;fit&quot;</span>, <span class="hljs-string">&quot;predict&quot;</span>, <span class="hljs-string">&quot; plt&quot;</span>, <span class="hljs-string">&quot; pd&quot;</span>, <span class="hljs-string">&quot; sk&quot;</span>, <span class="hljs-string">&quot; fit&quot;</span>, <span class="hljs-string">&quot; predict&quot;</span>]
    <span class="hljs-keyword">for</span> keyword <span class="hljs-keyword">in</span> keywords:
        ids = tokenizer([keyword]).input_ids[<span class="hljs-number">0</span>]
        <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(ids) == <span class="hljs-number">1</span>:
            keytoken_ids.append(ids[<span class="hljs-number">0</span>])
    accelerator.<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Keytoken ids: <span class="hljs-subst">{keytoken_ids}</span>&quot;</span>)
    accelerator.state.megatron_lm_plugin.custom_train_step_class = GPTTrainStepWithCustomLoss
    accelerator.state.megatron_lm_plugin.custom_train_step_kwargs = {
        <span class="hljs-string">&quot;keytoken_ids&quot;</span>: keytoken_ids,
        <span class="hljs-string">&quot;alpha&quot;</span>: <span class="hljs-number">0.25</span>,
    }`}}),at=new b({props:{code:`from accelerate.utils import MegatronLMDummyDataLoader

megatron_dataloader_config = {
    "data_path": args.data_path,
    "splits_string": args.splits_string,
    "seq_length": args.block_size,
    "micro_batch_size": args.per_device_train_batch_size,
}
megatron_dataloader = MegatronLMDummyDataLoader(**megatron_dataloader_config)
accelerator.state.megatron_lm_plugin.megatron_dataset_flag = True`,highlighted:`<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> MegatronLMDummyDataLoader

megatron_dataloader_config = {
    <span class="hljs-string">&quot;data_path&quot;</span>: args.data_path,
    <span class="hljs-string">&quot;splits_string&quot;</span>: args.splits_string,
    <span class="hljs-string">&quot;seq_length&quot;</span>: args.block_size,
    <span class="hljs-string">&quot;micro_batch_size&quot;</span>: args.per_device_train_batch_size,
}
megatron_dataloader = MegatronLMDummyDataLoader(**megatron_dataloader_config)
accelerator.state.megatron_lm_plugin.megatron_dataset_flag = <span class="hljs-literal">True</span>`}}),rt=new b({props:{code:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`,highlighted:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`}}),lt=new b({props:{code:`while completed_steps < args.max_train_steps:
    model.train()
    batch = next(train_dataloader) if train_dataloader is not None else {}
    outputs = model(**batch)
    loss = outputs.loss
    ...

    if completed_steps % eval_interval == 0:
        eval_completed_steps = 0
        losses = []
        while eval_completed_steps < eval_iters:
            model.eval()
            with torch.no_grad():
                batch = next(eval_dataloader) if eval_dataloader is not None else {}
                outputs = model(**batch)`,highlighted:`<span class="hljs-keyword">while</span> completed_steps &lt; args.max_train_steps:
    model.train()
    batch = <span class="hljs-built_in">next</span>(train_dataloader) <span class="hljs-keyword">if</span> train_dataloader <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">else</span> {}
    outputs = model(**batch)
    loss = outputs.loss
    ...

    <span class="hljs-keyword">if</span> completed_steps % eval_interval == <span class="hljs-number">0</span>:
        eval_completed_steps = <span class="hljs-number">0</span>
        losses = []
        <span class="hljs-keyword">while</span> eval_completed_steps &lt; eval_iters:
            model.<span class="hljs-built_in">eval</span>()
            <span class="hljs-keyword">with</span> torch.no_grad():
                batch = <span class="hljs-built_in">next</span>(eval_dataloader) <span class="hljs-keyword">if</span> eval_dataloader <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">else</span> {}
                outputs = model(**batch)`}}),nt=new yt({}),it=new b({props:{code:`python checkpoint_reshaping_and_interoperability.py \\
--convert_checkpoint_from_megatron_to_transformers \\
--load_path "gpt/iter_0005000" \\
--save_path "gpt/trfs_checkpoint" \\
--max_shard_size "200MB" \\
--tokenizer_name "gpt2" \\
--print-checkpoint-structure`,highlighted:`python checkpoint_reshaping_and_interoperability.py \\
--convert_checkpoint_from_megatron_to_transformers \\
--load_path <span class="hljs-string">&quot;gpt/iter_0005000&quot;</span> \\
--save_path <span class="hljs-string">&quot;gpt/trfs_checkpoint&quot;</span> \\
--max_shard_size <span class="hljs-string">&quot;200MB&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2&quot;</span> \\
--print-checkpoint-structure`}}),ct=new b({props:{code:`python checkpoint_utils/megatgron_gpt2/checkpoint_reshaping_and_interoperability.py \\
--load_path "gpt/trfs_checkpoint" \\
--save_path "gpt/megatron_lm_checkpoint" \\
--target_tensor_model_parallel_size 2 \\
--target_pipeline_model_parallel_size 2 \\
--target_data_parallel_size 2 \\
--target_params_dtype "bf16" \\
--make_vocab_size_divisible_by 128 \\
--use_distributed_optimizer \\
--print-checkpoint-structure`,highlighted:`python checkpoint_utils/megatgron_gpt2/checkpoint_reshaping_and_interoperability.py \\
--load_path <span class="hljs-string">&quot;gpt/trfs_checkpoint&quot;</span> \\
--save_path <span class="hljs-string">&quot;gpt/megatron_lm_checkpoint&quot;</span> \\
--target_tensor_model_parallel_size 2 \\
--target_pipeline_model_parallel_size 2 \\
--target_data_parallel_size 2 \\
--target_params_dtype <span class="hljs-string">&quot;bf16&quot;</span> \\
--make_vocab_size_divisible_by 128 \\
--use_distributed_optimizer \\
--print-checkpoint-structure`}}),dt=new yt({}),{c(){F=l("meta"),ga=c(),B=l("h1"),ee=l("a"),Ct=l("span"),u(be.$$.fragment),Vr=c(),Gt=l("span"),Hr=a("Megatron-LM"),va=c(),M=l("p"),ye=l("a"),Yr=a("Megatron-LM"),Kr=a(` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),ke=l("a"),Xr=a("GPT"),Jr=a(" (Decoder Only), "),Ee=l("a"),Qr=a("BERT"),Zr=a(" (Encoder Only) and "),Me=l("a"),el=a("T5"),tl=a(` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),je=l("a"),sl=a("repo"),al=a("."),wa=c(),W=l("h2"),te=l("a"),Rt=l("span"),u($e.$$.fragment),rl=c(),Ft=l("span"),ll=a("What is integrated?"),ba=c(),kt=l("p"),nl=a(`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),ya=c(),se=l("p"),ol=a("a. "),Bt=l("strong"),il=a("Tensor Parallelism (TP)"),pl=a(": Reduces memory footprint without much additional communication on intra-node ranks"),ka=c(),ae=l("p"),cl=a("b. "),Wt=l("strong"),dl=a("Pipeline Parallelism (PP)"),hl=a(`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages.`),Ea=c(),re=l("p"),ul=a("c. "),Ut=l("strong"),ml=a("Sequence Parallelism (SP)"),_l=a(": Reduces memory footprint without any additional communication. Only applicable when using TP."),Ma=c(),le=l("p"),fl=a("d. "),Vt=l("strong"),gl=a("Data Parallelism (DP)"),vl=a(" via Distributed Optimizer: Reduces memory footprint by sharding optimizer states and gradients across DP ranks."),ja=c(),ne=l("p"),wl=a("e. "),Ht=l("strong"),bl=a("Selective Activation Recomputation"),yl=a(`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.`),$a=c(),oe=l("p"),kl=a("f. "),Yt=l("strong"),El=a("Fused Kernels"),Ml=a(`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),Pa=c(),j=l("p"),jl=a("g. "),Kt=l("strong"),$l=a("Support for Indexed datasets"),Pl=a(": Efficient binary format of datasets for large scale training. Support for the "),Xt=l("code"),ql=a("mmap"),Ll=a(", "),Jt=l("code"),Tl=a("cached"),Dl=a(" index file and the "),Qt=l("code"),Al=a("lazy"),Il=a(" loader format."),qa=c(),ie=l("p"),xl=a("h. "),Zt=l("strong"),Ol=a("Checkpoint reshaping and interoperability"),Sl=a(`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),La=c(),U=l("h2"),pe=l("a"),es=l("span"),u(Pe.$$.fragment),zl=c(),ts=l("span"),Nl=a("Pre-Requisites"),Ta=c(),S=l("p"),Cl=a("You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),qe=l("a"),Gl=a("APEX"),Rl=a(` releases and the nltk library.
See `),Le=l("a"),Fl=a("documentation"),Bl=a(` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),Da=c(),Et=l("p"),Wl=a("Below is a step-by-step method to set up the conda environment:"),Aa=c(),Mt=l("ol"),ss=l("li"),Ul=a("Create a virtual environment"),Ia=c(),u(Te.$$.fragment),xa=c(),De=l("ol"),as=l("li"),Vl=a("Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),Oa=c(),u(Ae.$$.fragment),Sa=c(),Ie=l("ol"),rs=l("li"),Hl=a("Install Nvidia APEX"),za=c(),u(xe.$$.fragment),Na=c(),Oe=l("ol"),y=l("li"),ls=l("p"),Yl=a("Installing Megatron-LM"),Kl=c(),ns=l("p"),Xl=a("a. Cloning the Megatron-LM repo"),Jl=c(),u(Se.$$.fragment),Ql=c(),ze=l("p"),Zl=a("b. Create a file "),os=l("code"),en=a("setup.py"),tn=a(", paste the below code and put in the root folder"),sn=c(),u(Ne.$$.fragment),an=c(),is=l("p"),rn=a("c. installing via below command"),ln=c(),u(Ce.$$.fragment),Ca=c(),V=l("h2"),ce=l("a"),ps=l("span"),u(Ge.$$.fragment),nn=c(),cs=l("span"),on=a("Accelerate Megatron-LM Plugin"),Ga=c(),de=l("p"),pn=a("Important features are directly supported via the "),ds=l("code"),cn=a("accelerate config"),dn=a(` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),Ra=c(),u(Re.$$.fragment),Fa=c(),jt=l("p"),hn=a("The resulting config is shown below:"),Ba=c(),u(Fe.$$.fragment),Wa=c(),he=l("p"),un=a("We will take the example of GPT pre-training. The minimal changes required to the official "),hs=l("code"),mn=a("run_clm_no_trainer.py"),_n=a(`
to use Megatron-LM are as follows:`),Ua=c(),$t=l("ol"),Be=l("li"),fn=a(`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),us=l("code"),gn=a("accelerate.utils.MegatronLMDummyScheduler"),vn=a(`.
Example is given below:`),Va=c(),u(We.$$.fragment),Ha=c(),Ue=l("ol"),ms=l("li"),wn=a(`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),Ya=c(),u(Ve.$$.fragment),Ka=c(),He=l("ol"),_s=l("li"),bn=a("When using Megatron-LM, the losses are already averaged across the data parallel group"),Xa=c(),u(Ye.$$.fragment),Ja=c(),Ke=l("ol"),Pt=l("li"),yn=a("For Megatron-LM, we need to save the model using "),fs=l("code"),kn=a("accelerator.save_state"),Qa=c(),u(Xe.$$.fragment),Za=c(),z=l("p"),En=a("That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),gs=l("code"),Mn=a("accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),jn=a(`.
Let\u2019s run it for `),vs=l("code"),$n=a("gpt-large"),Pn=a(" model architecture using 4 A100-80GB GPUs."),er=c(),u(Je.$$.fragment),tr=c(),qt=l("p"),qn=a("Below are some important excerpts from the output logs:"),sr=c(),u(Qe.$$.fragment),ar=c(),ue=l("p"),Ln=a("There are a large number of other options/features that one can set using "),ws=l("code"),Tn=a("accelerate.utils.MegatronLMPlugin"),Dn=a("."),rr=c(),H=l("h2"),me=l("a"),bs=l("span"),u(Ze.$$.fragment),An=c(),ys=l("span"),In=a("Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),lr=c(),Lt=l("p"),xn=a("For leveraging more features, please go through below details."),nr=c(),Tt=l("ol"),q=l("li"),On=a(`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),ks=l("code"),Sn=a("accelerate.utils.AbstractTrainStep"),zn=a(` or inherit from their corresponding children
`),Es=l("code"),Nn=a("accelerate.utils.GPTTrainStep"),Cn=a(", "),Ms=l("code"),Gn=a("accelerate.utils.BertTrainStep"),Rn=a(" or "),js=l("code"),Fn=a("accelerate.utils.T5TrainStep"),Bn=a("."),or=c(),u(et.$$.fragment),ir=c(),tt=l("ol"),$s=l("li"),Wn=a(`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),pr=c(),$=l("p"),Un=a("a. For Megatron-LM indexed datasets, we need to use "),Ps=l("code"),Vn=a("MegatronLMDummyDataLoader"),Hn=a(`
and pass the required dataset args to it such as `),qs=l("code"),Yn=a("data_path"),Kn=a(", "),Ls=l("code"),Xn=a("seq_length"),Jn=a(` etc.
See `),st=l("a"),Qn=a("here"),Zn=a(" for the list of available args."),cr=c(),u(at.$$.fragment),dr=c(),N=l("p"),eo=a("b. "),Ts=l("code"),to=a("megatron_dataloader"),so=a(` is repeated 3 times to get training, validation and test dataloaders
as per the `),Ds=l("code"),ao=a("args.splits_string"),ro=a(" proportions"),hr=c(),u(rt.$$.fragment),ur=c(),k=l("p"),lo=a(`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),As=l("code"),no=a("None"),oo=a(` else provide empty dict
As such, we loop using `),Is=l("code"),io=a("while"),po=a(" loop and break when "),xs=l("code"),co=a("completed_steps"),ho=a(" is equal to "),Os=l("code"),uo=a("args.max_train_steps"),mo=a(`
This is similar to the Megatron-LM setup wherein user has to provide `),Ss=l("code"),_o=a("max_train_steps"),fo=a(` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),mr=c(),u(lt.$$.fragment),_r=c(),Y=l("h2"),_e=l("a"),zs=l("span"),u(nt.$$.fragment),go=c(),Ns=l("span"),vo=a("Utility for Checkpoint reshaping and interoperability"),fr=c(),fe=l("ol"),Cs=l("li"),Dt=l("p"),wo=a(`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),ot=l("a"),bo=a("checkpoint_reshaping_and_interoperability.py"),yo=c(),Gs=l("li"),Rs=l("p"),ko=a("Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),gr=c(),u(it.$$.fragment),vr=c(),pt=l("ol"),D=l("li"),Eo=a("Conversion of checkpoint from transformers to megatron with "),Fs=l("code"),Mo=a("tp_size=2"),jo=a(", "),Bs=l("code"),$o=a("pp_size=2"),Po=a(" and "),Ws=l("code"),qo=a("dp_size=2"),Lo=a("."),wr=c(),u(ct.$$.fragment),br=c(),K=l("h2"),ge=l("a"),Us=l("span"),u(dt.$$.fragment),To=c(),Vs=l("span"),Do=a("Caveats"),yr=c(),w=l("ol"),Hs=l("li"),Ys=l("p"),Ao=a(`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Io=c(),Ks=l("li"),X=l("p"),xo=a(`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),Xs=l("code"),Oo=a("model(**batch_data)"),So=a(` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),Js=l("code"),zo=a("perplexity"),No=a(" using the loss."),Co=c(),Qs=l("li"),A=l("p"),Go=a(`The main process is the last rank as the losses are available in the last stage of pipeline.
`),Zs=l("code"),Ro=a("accelerator.is_main_process"),Fo=a(" and "),ea=l("code"),Bo=a("accelerator.is_local_main_process"),Wo=a(" return "),ta=l("code"),Uo=a("True"),Vo=a(` for last rank when using
Megatron-LM integration.`),Ho=c(),sa=l("li"),J=l("p"),Yo=a("In "),aa=l("code"),Ko=a("accelerator.prepare"),Xo=a(` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),ra=l("code"),Jo=a("accelerator.load_state"),Qo=a(" to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),Zo=c(),la=l("li"),na=l("p"),ei=a(`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),ti=c(),oa=l("li"),At=l("p"),ia=l("code"),si=a("gradient_accumulation_steps"),ai=a(` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),ri=c(),pa=l("li"),Q=l("p"),li=a("When using Megatron-LM, use "),ca=l("code"),ni=a("accelerator.save_state"),oi=a(" and "),da=l("code"),ii=a("accelerator.load_state"),pi=a(" for saving and loading checkpoints."),ci=c(),ha=l("li"),ua=l("p"),di=a(`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),kr=c(),I=l("p"),hi=a("a. Megatron-LM "),ht=l("a"),ui=a("BertModel"),mi=a(` :
\u{1F917} transformers models with `),ma=l("code"),_i=a("megatron-bert"),fi=a(` in config\u2019s model type, e.g.,
`),ut=l("a"),gi=a("MegatronBERT"),Er=c(),x=l("p"),vi=a("b. Megatron-LM "),mt=l("a"),wi=a("GPTModel"),bi=a(` :
\u{1F917} transformers models with `),_a=l("code"),yi=a("gpt2"),ki=a(` in config\u2019s model type, e.g.,
`),_t=l("a"),Ei=a("OpenAI GPT2"),Mr=c(),L=l("p"),Mi=a("c. Megatron-LM "),ft=l("a"),ji=a("T5Model"),$i=a(` :
\u{1F917} transformers models with `),fa=l("code"),Pi=a("t5"),qi=a(` in  config\u2019s model type, e.g.,
`),gt=l("a"),Li=a("T5"),Ti=a(` and
`),vt=l("a"),Di=a("MT5"),this.h()},l(e){const i=sd('[data-svelte="svelte-1phssyn"]',document.head);F=n(i,"META",{name:!0,content:!0}),i.forEach(s),ga=d(e),B=n(e,"H1",{class:!0});var $r=o(B);ee=n($r,"A",{id:!0,class:!0,href:!0});var Si=o(ee);Ct=n(Si,"SPAN",{});var zi=o(Ct);m(be.$$.fragment,zi),zi.forEach(s),Si.forEach(s),Vr=d($r),Gt=n($r,"SPAN",{});var Ni=o(Gt);Hr=r(Ni,"Megatron-LM"),Ni.forEach(s),$r.forEach(s),va=d(e),M=n(e,"P",{});var O=o(M);ye=n(O,"A",{href:!0,rel:!0});var Ci=o(ye);Yr=r(Ci,"Megatron-LM"),Ci.forEach(s),Kr=r(O,` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),ke=n(O,"A",{href:!0,rel:!0});var Gi=o(ke);Xr=r(Gi,"GPT"),Gi.forEach(s),Jr=r(O," (Decoder Only), "),Ee=n(O,"A",{href:!0,rel:!0});var Ri=o(Ee);Qr=r(Ri,"BERT"),Ri.forEach(s),Zr=r(O," (Encoder Only) and "),Me=n(O,"A",{href:!0,rel:!0});var Fi=o(Me);el=r(Fi,"T5"),Fi.forEach(s),tl=r(O,` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),je=n(O,"A",{href:!0,rel:!0});var Bi=o(je);sl=r(Bi,"repo"),Bi.forEach(s),al=r(O,"."),O.forEach(s),wa=d(e),W=n(e,"H2",{class:!0});var Pr=o(W);te=n(Pr,"A",{id:!0,class:!0,href:!0});var Wi=o(te);Rt=n(Wi,"SPAN",{});var Ui=o(Rt);m($e.$$.fragment,Ui),Ui.forEach(s),Wi.forEach(s),rl=d(Pr),Ft=n(Pr,"SPAN",{});var Vi=o(Ft);ll=r(Vi,"What is integrated?"),Vi.forEach(s),Pr.forEach(s),ba=d(e),kt=n(e,"P",{});var Hi=o(kt);nl=r(Hi,`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),Hi.forEach(s),ya=d(e),se=n(e,"P",{});var qr=o(se);ol=r(qr,"a. "),Bt=n(qr,"STRONG",{});var Yi=o(Bt);il=r(Yi,"Tensor Parallelism (TP)"),Yi.forEach(s),pl=r(qr,": Reduces memory footprint without much additional communication on intra-node ranks"),qr.forEach(s),ka=d(e),ae=n(e,"P",{});var Lr=o(ae);cl=r(Lr,"b. "),Wt=n(Lr,"STRONG",{});var Ki=o(Wt);dl=r(Ki,"Pipeline Parallelism (PP)"),Ki.forEach(s),hl=r(Lr,`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages.`),Lr.forEach(s),Ea=d(e),re=n(e,"P",{});var Tr=o(re);ul=r(Tr,"c. "),Ut=n(Tr,"STRONG",{});var Xi=o(Ut);ml=r(Xi,"Sequence Parallelism (SP)"),Xi.forEach(s),_l=r(Tr,": Reduces memory footprint without any additional communication. Only applicable when using TP."),Tr.forEach(s),Ma=d(e),le=n(e,"P",{});var Dr=o(le);fl=r(Dr,"d. "),Vt=n(Dr,"STRONG",{});var Ji=o(Vt);gl=r(Ji,"Data Parallelism (DP)"),Ji.forEach(s),vl=r(Dr," via Distributed Optimizer: Reduces memory footprint by sharding optimizer states and gradients across DP ranks."),Dr.forEach(s),ja=d(e),ne=n(e,"P",{});var Ar=o(ne);wl=r(Ar,"e. "),Ht=n(Ar,"STRONG",{});var Qi=o(Ht);bl=r(Qi,"Selective Activation Recomputation"),Qi.forEach(s),yl=r(Ar,`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.`),Ar.forEach(s),$a=d(e),oe=n(e,"P",{});var Ir=o(oe);kl=r(Ir,"f. "),Yt=n(Ir,"STRONG",{});var Zi=o(Yt);El=r(Zi,"Fused Kernels"),Zi.forEach(s),Ml=r(Ir,`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),Ir.forEach(s),Pa=d(e),j=n(e,"P",{});var C=o(j);jl=r(C,"g. "),Kt=n(C,"STRONG",{});var ep=o(Kt);$l=r(ep,"Support for Indexed datasets"),ep.forEach(s),Pl=r(C,": Efficient binary format of datasets for large scale training. Support for the "),Xt=n(C,"CODE",{});var tp=o(Xt);ql=r(tp,"mmap"),tp.forEach(s),Ll=r(C,", "),Jt=n(C,"CODE",{});var sp=o(Jt);Tl=r(sp,"cached"),sp.forEach(s),Dl=r(C," index file and the "),Qt=n(C,"CODE",{});var ap=o(Qt);Al=r(ap,"lazy"),ap.forEach(s),Il=r(C," loader format."),C.forEach(s),qa=d(e),ie=n(e,"P",{});var xr=o(ie);xl=r(xr,"h. "),Zt=n(xr,"STRONG",{});var rp=o(Zt);Ol=r(rp,"Checkpoint reshaping and interoperability"),rp.forEach(s),Sl=r(xr,`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),xr.forEach(s),La=d(e),U=n(e,"H2",{class:!0});var Or=o(U);pe=n(Or,"A",{id:!0,class:!0,href:!0});var lp=o(pe);es=n(lp,"SPAN",{});var np=o(es);m(Pe.$$.fragment,np),np.forEach(s),lp.forEach(s),zl=d(Or),ts=n(Or,"SPAN",{});var op=o(ts);Nl=r(op,"Pre-Requisites"),op.forEach(s),Or.forEach(s),Ta=d(e),S=n(e,"P",{});var It=o(S);Cl=r(It,"You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),qe=n(It,"A",{href:!0,rel:!0});var ip=o(qe);Gl=r(ip,"APEX"),ip.forEach(s),Rl=r(It,` releases and the nltk library.
See `),Le=n(It,"A",{href:!0,rel:!0});var pp=o(Le);Fl=r(pp,"documentation"),pp.forEach(s),Bl=r(It,` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),It.forEach(s),Da=d(e),Et=n(e,"P",{});var cp=o(Et);Wl=r(cp,"Below is a step-by-step method to set up the conda environment:"),cp.forEach(s),Aa=d(e),Mt=n(e,"OL",{});var dp=o(Mt);ss=n(dp,"LI",{});var hp=o(ss);Ul=r(hp,"Create a virtual environment"),hp.forEach(s),dp.forEach(s),Ia=d(e),m(Te.$$.fragment,e),xa=d(e),De=n(e,"OL",{start:!0});var up=o(De);as=n(up,"LI",{});var mp=o(as);Vl=r(mp,"Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),mp.forEach(s),up.forEach(s),Oa=d(e),m(Ae.$$.fragment,e),Sa=d(e),Ie=n(e,"OL",{start:!0});var _p=o(Ie);rs=n(_p,"LI",{});var fp=o(rs);Hl=r(fp,"Install Nvidia APEX"),fp.forEach(s),_p.forEach(s),za=d(e),m(xe.$$.fragment,e),Na=d(e),Oe=n(e,"OL",{start:!0});var gp=o(Oe);y=n(gp,"LI",{});var P=o(y);ls=n(P,"P",{});var vp=o(ls);Yl=r(vp,"Installing Megatron-LM"),vp.forEach(s),Kl=d(P),ns=n(P,"P",{});var wp=o(ns);Xl=r(wp,"a. Cloning the Megatron-LM repo"),wp.forEach(s),Jl=d(P),m(Se.$$.fragment,P),Ql=d(P),ze=n(P,"P",{});var Sr=o(ze);Zl=r(Sr,"b. Create a file "),os=n(Sr,"CODE",{});var bp=o(os);en=r(bp,"setup.py"),bp.forEach(s),tn=r(Sr,", paste the below code and put in the root folder"),Sr.forEach(s),sn=d(P),m(Ne.$$.fragment,P),an=d(P),is=n(P,"P",{});var yp=o(is);rn=r(yp,"c. installing via below command"),yp.forEach(s),ln=d(P),m(Ce.$$.fragment,P),P.forEach(s),gp.forEach(s),Ca=d(e),V=n(e,"H2",{class:!0});var zr=o(V);ce=n(zr,"A",{id:!0,class:!0,href:!0});var kp=o(ce);ps=n(kp,"SPAN",{});var Ep=o(ps);m(Ge.$$.fragment,Ep),Ep.forEach(s),kp.forEach(s),nn=d(zr),cs=n(zr,"SPAN",{});var Mp=o(cs);on=r(Mp,"Accelerate Megatron-LM Plugin"),Mp.forEach(s),zr.forEach(s),Ga=d(e),de=n(e,"P",{});var Nr=o(de);pn=r(Nr,"Important features are directly supported via the "),ds=n(Nr,"CODE",{});var jp=o(ds);cn=r(jp,"accelerate config"),jp.forEach(s),dn=r(Nr,` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),Nr.forEach(s),Ra=d(e),m(Re.$$.fragment,e),Fa=d(e),jt=n(e,"P",{});var $p=o(jt);hn=r($p,"The resulting config is shown below:"),$p.forEach(s),Ba=d(e),m(Fe.$$.fragment,e),Wa=d(e),he=n(e,"P",{});var Cr=o(he);un=r(Cr,"We will take the example of GPT pre-training. The minimal changes required to the official "),hs=n(Cr,"CODE",{});var Pp=o(hs);mn=r(Pp,"run_clm_no_trainer.py"),Pp.forEach(s),_n=r(Cr,`
to use Megatron-LM are as follows:`),Cr.forEach(s),Ua=d(e),$t=n(e,"OL",{});var qp=o($t);Be=n(qp,"LI",{});var Gr=o(Be);fn=r(Gr,`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),us=n(Gr,"CODE",{});var Lp=o(us);gn=r(Lp,"accelerate.utils.MegatronLMDummyScheduler"),Lp.forEach(s),vn=r(Gr,`.
Example is given below:`),Gr.forEach(s),qp.forEach(s),Va=d(e),m(We.$$.fragment,e),Ha=d(e),Ue=n(e,"OL",{start:!0});var Tp=o(Ue);ms=n(Tp,"LI",{});var Dp=o(ms);wn=r(Dp,`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),Dp.forEach(s),Tp.forEach(s),Ya=d(e),m(Ve.$$.fragment,e),Ka=d(e),He=n(e,"OL",{start:!0});var Ap=o(He);_s=n(Ap,"LI",{});var Ip=o(_s);bn=r(Ip,"When using Megatron-LM, the losses are already averaged across the data parallel group"),Ip.forEach(s),Ap.forEach(s),Xa=d(e),m(Ye.$$.fragment,e),Ja=d(e),Ke=n(e,"OL",{start:!0});var xp=o(Ke);Pt=n(xp,"LI",{});var Ai=o(Pt);yn=r(Ai,"For Megatron-LM, we need to save the model using "),fs=n(Ai,"CODE",{});var Op=o(fs);kn=r(Op,"accelerator.save_state"),Op.forEach(s),Ai.forEach(s),xp.forEach(s),Qa=d(e),m(Xe.$$.fragment,e),Za=d(e),z=n(e,"P",{});var xt=o(z);En=r(xt,"That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),gs=n(xt,"CODE",{});var Sp=o(gs);Mn=r(Sp,"accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),Sp.forEach(s),jn=r(xt,`.
Let\u2019s run it for `),vs=n(xt,"CODE",{});var zp=o(vs);$n=r(zp,"gpt-large"),zp.forEach(s),Pn=r(xt," model architecture using 4 A100-80GB GPUs."),xt.forEach(s),er=d(e),m(Je.$$.fragment,e),tr=d(e),qt=n(e,"P",{});var Np=o(qt);qn=r(Np,"Below are some important excerpts from the output logs:"),Np.forEach(s),sr=d(e),m(Qe.$$.fragment,e),ar=d(e),ue=n(e,"P",{});var Rr=o(ue);Ln=r(Rr,"There are a large number of other options/features that one can set using "),ws=n(Rr,"CODE",{});var Cp=o(ws);Tn=r(Cp,"accelerate.utils.MegatronLMPlugin"),Cp.forEach(s),Dn=r(Rr,"."),Rr.forEach(s),rr=d(e),H=n(e,"H2",{class:!0});var Fr=o(H);me=n(Fr,"A",{id:!0,class:!0,href:!0});var Gp=o(me);bs=n(Gp,"SPAN",{});var Rp=o(bs);m(Ze.$$.fragment,Rp),Rp.forEach(s),Gp.forEach(s),An=d(Fr),ys=n(Fr,"SPAN",{});var Fp=o(ys);In=r(Fp,"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),Fp.forEach(s),Fr.forEach(s),lr=d(e),Lt=n(e,"P",{});var Bp=o(Lt);xn=r(Bp,"For leveraging more features, please go through below details."),Bp.forEach(s),nr=d(e),Tt=n(e,"OL",{});var Wp=o(Tt);q=n(Wp,"LI",{});var G=o(q);On=r(G,`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),ks=n(G,"CODE",{});var Up=o(ks);Sn=r(Up,"accelerate.utils.AbstractTrainStep"),Up.forEach(s),zn=r(G,` or inherit from their corresponding children
`),Es=n(G,"CODE",{});var Vp=o(Es);Nn=r(Vp,"accelerate.utils.GPTTrainStep"),Vp.forEach(s),Cn=r(G,", "),Ms=n(G,"CODE",{});var Hp=o(Ms);Gn=r(Hp,"accelerate.utils.BertTrainStep"),Hp.forEach(s),Rn=r(G," or "),js=n(G,"CODE",{});var Yp=o(js);Fn=r(Yp,"accelerate.utils.T5TrainStep"),Yp.forEach(s),Bn=r(G,"."),G.forEach(s),Wp.forEach(s),or=d(e),m(et.$$.fragment,e),ir=d(e),tt=n(e,"OL",{start:!0});var Kp=o(tt);$s=n(Kp,"LI",{});var Xp=o($s);Wn=r(Xp,`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),Xp.forEach(s),Kp.forEach(s),pr=d(e),$=n(e,"P",{});var R=o($);Un=r(R,"a. For Megatron-LM indexed datasets, we need to use "),Ps=n(R,"CODE",{});var Jp=o(Ps);Vn=r(Jp,"MegatronLMDummyDataLoader"),Jp.forEach(s),Hn=r(R,`
and pass the required dataset args to it such as `),qs=n(R,"CODE",{});var Qp=o(qs);Yn=r(Qp,"data_path"),Qp.forEach(s),Kn=r(R,", "),Ls=n(R,"CODE",{});var Zp=o(Ls);Xn=r(Zp,"seq_length"),Zp.forEach(s),Jn=r(R,` etc.
See `),st=n(R,"A",{href:!0,rel:!0});var ec=o(st);Qn=r(ec,"here"),ec.forEach(s),Zn=r(R," for the list of available args."),R.forEach(s),cr=d(e),m(at.$$.fragment,e),dr=d(e),N=n(e,"P",{});var Ot=o(N);eo=r(Ot,"b. "),Ts=n(Ot,"CODE",{});var tc=o(Ts);to=r(tc,"megatron_dataloader"),tc.forEach(s),so=r(Ot,` is repeated 3 times to get training, validation and test dataloaders
as per the `),Ds=n(Ot,"CODE",{});var sc=o(Ds);ao=r(sc,"args.splits_string"),sc.forEach(s),ro=r(Ot," proportions"),Ot.forEach(s),hr=d(e),m(rt.$$.fragment,e),ur=d(e),k=n(e,"P",{});var T=o(k);lo=r(T,`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),As=n(T,"CODE",{});var ac=o(As);no=r(ac,"None"),ac.forEach(s),oo=r(T,` else provide empty dict
As such, we loop using `),Is=n(T,"CODE",{});var rc=o(Is);io=r(rc,"while"),rc.forEach(s),po=r(T," loop and break when "),xs=n(T,"CODE",{});var lc=o(xs);co=r(lc,"completed_steps"),lc.forEach(s),ho=r(T," is equal to "),Os=n(T,"CODE",{});var nc=o(Os);uo=r(nc,"args.max_train_steps"),nc.forEach(s),mo=r(T,`
This is similar to the Megatron-LM setup wherein user has to provide `),Ss=n(T,"CODE",{});var oc=o(Ss);_o=r(oc,"max_train_steps"),oc.forEach(s),fo=r(T,` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),T.forEach(s),mr=d(e),m(lt.$$.fragment,e),_r=d(e),Y=n(e,"H2",{class:!0});var Br=o(Y);_e=n(Br,"A",{id:!0,class:!0,href:!0});var ic=o(_e);zs=n(ic,"SPAN",{});var pc=o(zs);m(nt.$$.fragment,pc),pc.forEach(s),ic.forEach(s),go=d(Br),Ns=n(Br,"SPAN",{});var cc=o(Ns);vo=r(cc,"Utility for Checkpoint reshaping and interoperability"),cc.forEach(s),Br.forEach(s),fr=d(e),fe=n(e,"OL",{});var Wr=o(fe);Cs=n(Wr,"LI",{});var dc=o(Cs);Dt=n(dc,"P",{});var Ii=o(Dt);wo=r(Ii,`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),ot=n(Ii,"A",{href:!0,rel:!0});var hc=o(ot);bo=r(hc,"checkpoint_reshaping_and_interoperability.py"),hc.forEach(s),Ii.forEach(s),dc.forEach(s),yo=d(Wr),Gs=n(Wr,"LI",{});var uc=o(Gs);Rs=n(uc,"P",{});var mc=o(Rs);ko=r(mc,"Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),mc.forEach(s),uc.forEach(s),Wr.forEach(s),gr=d(e),m(it.$$.fragment,e),vr=d(e),pt=n(e,"OL",{start:!0});var _c=o(pt);D=n(_c,"LI",{});var ve=o(D);Eo=r(ve,"Conversion of checkpoint from transformers to megatron with "),Fs=n(ve,"CODE",{});var fc=o(Fs);Mo=r(fc,"tp_size=2"),fc.forEach(s),jo=r(ve,", "),Bs=n(ve,"CODE",{});var gc=o(Bs);$o=r(gc,"pp_size=2"),gc.forEach(s),Po=r(ve," and "),Ws=n(ve,"CODE",{});var vc=o(Ws);qo=r(vc,"dp_size=2"),vc.forEach(s),Lo=r(ve,"."),ve.forEach(s),_c.forEach(s),wr=d(e),m(ct.$$.fragment,e),br=d(e),K=n(e,"H2",{class:!0});var Ur=o(K);ge=n(Ur,"A",{id:!0,class:!0,href:!0});var wc=o(ge);Us=n(wc,"SPAN",{});var bc=o(Us);m(dt.$$.fragment,bc),bc.forEach(s),wc.forEach(s),To=d(Ur),Vs=n(Ur,"SPAN",{});var yc=o(Vs);Do=r(yc,"Caveats"),yc.forEach(s),Ur.forEach(s),yr=d(e),w=n(e,"OL",{});var E=o(w);Hs=n(E,"LI",{});var kc=o(Hs);Ys=n(kc,"P",{});var Ec=o(Ys);Ao=r(Ec,`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Ec.forEach(s),kc.forEach(s),Io=d(E),Ks=n(E,"LI",{});var Mc=o(Ks);X=n(Mc,"P",{});var St=o(X);xo=r(St,`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),Xs=n(St,"CODE",{});var jc=o(Xs);Oo=r(jc,"model(**batch_data)"),jc.forEach(s),So=r(St,` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),Js=n(St,"CODE",{});var $c=o(Js);zo=r($c,"perplexity"),$c.forEach(s),No=r(St," using the loss."),St.forEach(s),Mc.forEach(s),Co=d(E),Qs=n(E,"LI",{});var Pc=o(Qs);A=n(Pc,"P",{});var we=o(A);Go=r(we,`The main process is the last rank as the losses are available in the last stage of pipeline.
`),Zs=n(we,"CODE",{});var qc=o(Zs);Ro=r(qc,"accelerator.is_main_process"),qc.forEach(s),Fo=r(we," and "),ea=n(we,"CODE",{});var Lc=o(ea);Bo=r(Lc,"accelerator.is_local_main_process"),Lc.forEach(s),Wo=r(we," return "),ta=n(we,"CODE",{});var Tc=o(ta);Uo=r(Tc,"True"),Tc.forEach(s),Vo=r(we,` for last rank when using
Megatron-LM integration.`),we.forEach(s),Pc.forEach(s),Ho=d(E),sa=n(E,"LI",{});var Dc=o(sa);J=n(Dc,"P",{});var zt=o(J);Yo=r(zt,"In "),aa=n(zt,"CODE",{});var Ac=o(aa);Ko=r(Ac,"accelerator.prepare"),Ac.forEach(s),Xo=r(zt,` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),ra=n(zt,"CODE",{});var Ic=o(ra);Jo=r(Ic,"accelerator.load_state"),Ic.forEach(s),Qo=r(zt," to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),zt.forEach(s),Dc.forEach(s),Zo=d(E),la=n(E,"LI",{});var xc=o(la);na=n(xc,"P",{});var Oc=o(na);ei=r(Oc,`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),Oc.forEach(s),xc.forEach(s),ti=d(E),oa=n(E,"LI",{});var Sc=o(oa);At=n(Sc,"P",{});var xi=o(At);ia=n(xi,"CODE",{});var zc=o(ia);si=r(zc,"gradient_accumulation_steps"),zc.forEach(s),ai=r(xi,` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),xi.forEach(s),Sc.forEach(s),ri=d(E),pa=n(E,"LI",{});var Nc=o(pa);Q=n(Nc,"P",{});var Nt=o(Q);li=r(Nt,"When using Megatron-LM, use "),ca=n(Nt,"CODE",{});var Cc=o(ca);ni=r(Cc,"accelerator.save_state"),Cc.forEach(s),oi=r(Nt," and "),da=n(Nt,"CODE",{});var Gc=o(da);ii=r(Gc,"accelerator.load_state"),Gc.forEach(s),pi=r(Nt," for saving and loading checkpoints."),Nt.forEach(s),Nc.forEach(s),ci=d(E),ha=n(E,"LI",{});var Rc=o(ha);ua=n(Rc,"P",{});var Fc=o(ua);di=r(Fc,`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),Fc.forEach(s),Rc.forEach(s),E.forEach(s),kr=d(e),I=n(e,"P",{});var wt=o(I);hi=r(wt,"a. Megatron-LM "),ht=n(wt,"A",{href:!0,rel:!0});var Bc=o(ht);ui=r(Bc,"BertModel"),Bc.forEach(s),mi=r(wt,` :
\u{1F917} transformers models with `),ma=n(wt,"CODE",{});var Wc=o(ma);_i=r(Wc,"megatron-bert"),Wc.forEach(s),fi=r(wt,` in config\u2019s model type, e.g.,
`),ut=n(wt,"A",{href:!0,rel:!0});var Uc=o(ut);gi=r(Uc,"MegatronBERT"),Uc.forEach(s),wt.forEach(s),Er=d(e),x=n(e,"P",{});var bt=o(x);vi=r(bt,"b. Megatron-LM "),mt=n(bt,"A",{href:!0,rel:!0});var Vc=o(mt);wi=r(Vc,"GPTModel"),Vc.forEach(s),bi=r(bt,` :
\u{1F917} transformers models with `),_a=n(bt,"CODE",{});var Hc=o(_a);yi=r(Hc,"gpt2"),Hc.forEach(s),ki=r(bt,` in config\u2019s model type, e.g.,
`),_t=n(bt,"A",{href:!0,rel:!0});var Yc=o(_t);Ei=r(Yc,"OpenAI GPT2"),Yc.forEach(s),bt.forEach(s),Mr=d(e),L=n(e,"P",{});var Z=o(L);Mi=r(Z,"c. Megatron-LM "),ft=n(Z,"A",{href:!0,rel:!0});var Kc=o(ft);ji=r(Kc,"T5Model"),Kc.forEach(s),$i=r(Z,` :
\u{1F917} transformers models with `),fa=n(Z,"CODE",{});var Xc=o(fa);Pi=r(Xc,"t5"),Xc.forEach(s),qi=r(Z,` in  config\u2019s model type, e.g.,
`),gt=n(Z,"A",{href:!0,rel:!0});var Jc=o(gt);Li=r(Jc,"T5"),Jc.forEach(s),Ti=r(Z,` and
`),vt=n(Z,"A",{href:!0,rel:!0});var Qc=o(vt);Di=r(Qc,"MT5"),Qc.forEach(s),Z.forEach(s),this.h()},h(){h(F,"name","hf:doc:metadata"),h(F,"content",JSON.stringify(nd)),h(ee,"id","megatronlm"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#megatronlm"),h(B,"class","relative group"),h(ye,"href","https://github.com/NVIDIA/Megatron-LM"),h(ye,"rel","nofollow"),h(ke,"href","https://arxiv.org/abs/2005.14165"),h(ke,"rel","nofollow"),h(Ee,"href","https://arxiv.org/pdf/1810.04805.pdf"),h(Ee,"rel","nofollow"),h(Me,"href","https://arxiv.org/abs/1910.10683"),h(Me,"rel","nofollow"),h(je,"href","https://github.com/NVIDIA/Megatron-LM"),h(je,"rel","nofollow"),h(te,"id","what-is-integrated"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#what-is-integrated"),h(W,"class","relative group"),h(pe,"id","prerequisites"),h(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pe,"href","#prerequisites"),h(U,"class","relative group"),h(qe,"href","https://github.com/NVIDIA/apex#quick-start"),h(qe,"rel","nofollow"),h(Le,"href","https://github.com/NVIDIA/Megatron-LM#setup"),h(Le,"rel","nofollow"),h(De,"start","2"),h(Ie,"start","3"),h(Oe,"start","4"),h(ce,"id","accelerate-megatronlm-plugin"),h(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ce,"href","#accelerate-megatronlm-plugin"),h(V,"class","relative group"),h(Ue,"start","2"),h(He,"start","3"),h(Ke,"start","4"),h(me,"id","advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),h(H,"class","relative group"),h(tt,"start","2"),h(st,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/arguments.py#L804"),h(st,"rel","nofollow"),h(_e,"id","utility-for-checkpoint-reshaping-and-interoperability"),h(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_e,"href","#utility-for-checkpoint-reshaping-and-interoperability"),h(Y,"class","relative group"),h(ot,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py"),h(ot,"rel","nofollow"),h(pt,"start","3"),h(ge,"id","caveats"),h(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ge,"href","#caveats"),h(K,"class","relative group"),h(ht,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/bert_model.py"),h(ht,"rel","nofollow"),h(ut,"href","https://huggingface.co/docs/transformers/model_doc/megatron-bert"),h(ut,"rel","nofollow"),h(mt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/gpt_model.py"),h(mt,"rel","nofollow"),h(_t,"href","https://huggingface.co/docs/transformers/model_doc/gpt2"),h(_t,"rel","nofollow"),h(ft,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/t5_model.py"),h(ft,"rel","nofollow"),h(gt,"href","https://huggingface.co/docs/transformers/model_doc/t5"),h(gt,"rel","nofollow"),h(vt,"href","https://huggingface.co/docs/transformers/model_doc/mt5"),h(vt,"rel","nofollow")},m(e,i){t(document.head,F),p(e,ga,i),p(e,B,i),t(B,ee),t(ee,Ct),_(be,Ct,null),t(B,Vr),t(B,Gt),t(Gt,Hr),p(e,va,i),p(e,M,i),t(M,ye),t(ye,Yr),t(M,Kr),t(M,ke),t(ke,Xr),t(M,Jr),t(M,Ee),t(Ee,Qr),t(M,Zr),t(M,Me),t(Me,el),t(M,tl),t(M,je),t(je,sl),t(M,al),p(e,wa,i),p(e,W,i),t(W,te),t(te,Rt),_($e,Rt,null),t(W,rl),t(W,Ft),t(Ft,ll),p(e,ba,i),p(e,kt,i),t(kt,nl),p(e,ya,i),p(e,se,i),t(se,ol),t(se,Bt),t(Bt,il),t(se,pl),p(e,ka,i),p(e,ae,i),t(ae,cl),t(ae,Wt),t(Wt,dl),t(ae,hl),p(e,Ea,i),p(e,re,i),t(re,ul),t(re,Ut),t(Ut,ml),t(re,_l),p(e,Ma,i),p(e,le,i),t(le,fl),t(le,Vt),t(Vt,gl),t(le,vl),p(e,ja,i),p(e,ne,i),t(ne,wl),t(ne,Ht),t(Ht,bl),t(ne,yl),p(e,$a,i),p(e,oe,i),t(oe,kl),t(oe,Yt),t(Yt,El),t(oe,Ml),p(e,Pa,i),p(e,j,i),t(j,jl),t(j,Kt),t(Kt,$l),t(j,Pl),t(j,Xt),t(Xt,ql),t(j,Ll),t(j,Jt),t(Jt,Tl),t(j,Dl),t(j,Qt),t(Qt,Al),t(j,Il),p(e,qa,i),p(e,ie,i),t(ie,xl),t(ie,Zt),t(Zt,Ol),t(ie,Sl),p(e,La,i),p(e,U,i),t(U,pe),t(pe,es),_(Pe,es,null),t(U,zl),t(U,ts),t(ts,Nl),p(e,Ta,i),p(e,S,i),t(S,Cl),t(S,qe),t(qe,Gl),t(S,Rl),t(S,Le),t(Le,Fl),t(S,Bl),p(e,Da,i),p(e,Et,i),t(Et,Wl),p(e,Aa,i),p(e,Mt,i),t(Mt,ss),t(ss,Ul),p(e,Ia,i),_(Te,e,i),p(e,xa,i),p(e,De,i),t(De,as),t(as,Vl),p(e,Oa,i),_(Ae,e,i),p(e,Sa,i),p(e,Ie,i),t(Ie,rs),t(rs,Hl),p(e,za,i),_(xe,e,i),p(e,Na,i),p(e,Oe,i),t(Oe,y),t(y,ls),t(ls,Yl),t(y,Kl),t(y,ns),t(ns,Xl),t(y,Jl),_(Se,y,null),t(y,Ql),t(y,ze),t(ze,Zl),t(ze,os),t(os,en),t(ze,tn),t(y,sn),_(Ne,y,null),t(y,an),t(y,is),t(is,rn),t(y,ln),_(Ce,y,null),p(e,Ca,i),p(e,V,i),t(V,ce),t(ce,ps),_(Ge,ps,null),t(V,nn),t(V,cs),t(cs,on),p(e,Ga,i),p(e,de,i),t(de,pn),t(de,ds),t(ds,cn),t(de,dn),p(e,Ra,i),_(Re,e,i),p(e,Fa,i),p(e,jt,i),t(jt,hn),p(e,Ba,i),_(Fe,e,i),p(e,Wa,i),p(e,he,i),t(he,un),t(he,hs),t(hs,mn),t(he,_n),p(e,Ua,i),p(e,$t,i),t($t,Be),t(Be,fn),t(Be,us),t(us,gn),t(Be,vn),p(e,Va,i),_(We,e,i),p(e,Ha,i),p(e,Ue,i),t(Ue,ms),t(ms,wn),p(e,Ya,i),_(Ve,e,i),p(e,Ka,i),p(e,He,i),t(He,_s),t(_s,bn),p(e,Xa,i),_(Ye,e,i),p(e,Ja,i),p(e,Ke,i),t(Ke,Pt),t(Pt,yn),t(Pt,fs),t(fs,kn),p(e,Qa,i),_(Xe,e,i),p(e,Za,i),p(e,z,i),t(z,En),t(z,gs),t(gs,Mn),t(z,jn),t(z,vs),t(vs,$n),t(z,Pn),p(e,er,i),_(Je,e,i),p(e,tr,i),p(e,qt,i),t(qt,qn),p(e,sr,i),_(Qe,e,i),p(e,ar,i),p(e,ue,i),t(ue,Ln),t(ue,ws),t(ws,Tn),t(ue,Dn),p(e,rr,i),p(e,H,i),t(H,me),t(me,bs),_(Ze,bs,null),t(H,An),t(H,ys),t(ys,In),p(e,lr,i),p(e,Lt,i),t(Lt,xn),p(e,nr,i),p(e,Tt,i),t(Tt,q),t(q,On),t(q,ks),t(ks,Sn),t(q,zn),t(q,Es),t(Es,Nn),t(q,Cn),t(q,Ms),t(Ms,Gn),t(q,Rn),t(q,js),t(js,Fn),t(q,Bn),p(e,or,i),_(et,e,i),p(e,ir,i),p(e,tt,i),t(tt,$s),t($s,Wn),p(e,pr,i),p(e,$,i),t($,Un),t($,Ps),t(Ps,Vn),t($,Hn),t($,qs),t(qs,Yn),t($,Kn),t($,Ls),t(Ls,Xn),t($,Jn),t($,st),t(st,Qn),t($,Zn),p(e,cr,i),_(at,e,i),p(e,dr,i),p(e,N,i),t(N,eo),t(N,Ts),t(Ts,to),t(N,so),t(N,Ds),t(Ds,ao),t(N,ro),p(e,hr,i),_(rt,e,i),p(e,ur,i),p(e,k,i),t(k,lo),t(k,As),t(As,no),t(k,oo),t(k,Is),t(Is,io),t(k,po),t(k,xs),t(xs,co),t(k,ho),t(k,Os),t(Os,uo),t(k,mo),t(k,Ss),t(Ss,_o),t(k,fo),p(e,mr,i),_(lt,e,i),p(e,_r,i),p(e,Y,i),t(Y,_e),t(_e,zs),_(nt,zs,null),t(Y,go),t(Y,Ns),t(Ns,vo),p(e,fr,i),p(e,fe,i),t(fe,Cs),t(Cs,Dt),t(Dt,wo),t(Dt,ot),t(ot,bo),t(fe,yo),t(fe,Gs),t(Gs,Rs),t(Rs,ko),p(e,gr,i),_(it,e,i),p(e,vr,i),p(e,pt,i),t(pt,D),t(D,Eo),t(D,Fs),t(Fs,Mo),t(D,jo),t(D,Bs),t(Bs,$o),t(D,Po),t(D,Ws),t(Ws,qo),t(D,Lo),p(e,wr,i),_(ct,e,i),p(e,br,i),p(e,K,i),t(K,ge),t(ge,Us),_(dt,Us,null),t(K,To),t(K,Vs),t(Vs,Do),p(e,yr,i),p(e,w,i),t(w,Hs),t(Hs,Ys),t(Ys,Ao),t(w,Io),t(w,Ks),t(Ks,X),t(X,xo),t(X,Xs),t(Xs,Oo),t(X,So),t(X,Js),t(Js,zo),t(X,No),t(w,Co),t(w,Qs),t(Qs,A),t(A,Go),t(A,Zs),t(Zs,Ro),t(A,Fo),t(A,ea),t(ea,Bo),t(A,Wo),t(A,ta),t(ta,Uo),t(A,Vo),t(w,Ho),t(w,sa),t(sa,J),t(J,Yo),t(J,aa),t(aa,Ko),t(J,Xo),t(J,ra),t(ra,Jo),t(J,Qo),t(w,Zo),t(w,la),t(la,na),t(na,ei),t(w,ti),t(w,oa),t(oa,At),t(At,ia),t(ia,si),t(At,ai),t(w,ri),t(w,pa),t(pa,Q),t(Q,li),t(Q,ca),t(ca,ni),t(Q,oi),t(Q,da),t(da,ii),t(Q,pi),t(w,ci),t(w,ha),t(ha,ua),t(ua,di),p(e,kr,i),p(e,I,i),t(I,hi),t(I,ht),t(ht,ui),t(I,mi),t(I,ma),t(ma,_i),t(I,fi),t(I,ut),t(ut,gi),p(e,Er,i),p(e,x,i),t(x,vi),t(x,mt),t(mt,wi),t(x,bi),t(x,_a),t(_a,yi),t(x,ki),t(x,_t),t(_t,Ei),p(e,Mr,i),p(e,L,i),t(L,Mi),t(L,ft),t(ft,ji),t(L,$i),t(L,fa),t(fa,Pi),t(L,qi),t(L,gt),t(gt,Li),t(L,Ti),t(L,vt),t(vt,Di),jr=!0},p:ad,i(e){jr||(f(be.$$.fragment,e),f($e.$$.fragment,e),f(Pe.$$.fragment,e),f(Te.$$.fragment,e),f(Ae.$$.fragment,e),f(xe.$$.fragment,e),f(Se.$$.fragment,e),f(Ne.$$.fragment,e),f(Ce.$$.fragment,e),f(Ge.$$.fragment,e),f(Re.$$.fragment,e),f(Fe.$$.fragment,e),f(We.$$.fragment,e),f(Ve.$$.fragment,e),f(Ye.$$.fragment,e),f(Xe.$$.fragment,e),f(Je.$$.fragment,e),f(Qe.$$.fragment,e),f(Ze.$$.fragment,e),f(et.$$.fragment,e),f(at.$$.fragment,e),f(rt.$$.fragment,e),f(lt.$$.fragment,e),f(nt.$$.fragment,e),f(it.$$.fragment,e),f(ct.$$.fragment,e),f(dt.$$.fragment,e),jr=!0)},o(e){g(be.$$.fragment,e),g($e.$$.fragment,e),g(Pe.$$.fragment,e),g(Te.$$.fragment,e),g(Ae.$$.fragment,e),g(xe.$$.fragment,e),g(Se.$$.fragment,e),g(Ne.$$.fragment,e),g(Ce.$$.fragment,e),g(Ge.$$.fragment,e),g(Re.$$.fragment,e),g(Fe.$$.fragment,e),g(We.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Xe.$$.fragment,e),g(Je.$$.fragment,e),g(Qe.$$.fragment,e),g(Ze.$$.fragment,e),g(et.$$.fragment,e),g(at.$$.fragment,e),g(rt.$$.fragment,e),g(lt.$$.fragment,e),g(nt.$$.fragment,e),g(it.$$.fragment,e),g(ct.$$.fragment,e),g(dt.$$.fragment,e),jr=!1},d(e){s(F),e&&s(ga),e&&s(B),v(be),e&&s(va),e&&s(M),e&&s(wa),e&&s(W),v($e),e&&s(ba),e&&s(kt),e&&s(ya),e&&s(se),e&&s(ka),e&&s(ae),e&&s(Ea),e&&s(re),e&&s(Ma),e&&s(le),e&&s(ja),e&&s(ne),e&&s($a),e&&s(oe),e&&s(Pa),e&&s(j),e&&s(qa),e&&s(ie),e&&s(La),e&&s(U),v(Pe),e&&s(Ta),e&&s(S),e&&s(Da),e&&s(Et),e&&s(Aa),e&&s(Mt),e&&s(Ia),v(Te,e),e&&s(xa),e&&s(De),e&&s(Oa),v(Ae,e),e&&s(Sa),e&&s(Ie),e&&s(za),v(xe,e),e&&s(Na),e&&s(Oe),v(Se),v(Ne),v(Ce),e&&s(Ca),e&&s(V),v(Ge),e&&s(Ga),e&&s(de),e&&s(Ra),v(Re,e),e&&s(Fa),e&&s(jt),e&&s(Ba),v(Fe,e),e&&s(Wa),e&&s(he),e&&s(Ua),e&&s($t),e&&s(Va),v(We,e),e&&s(Ha),e&&s(Ue),e&&s(Ya),v(Ve,e),e&&s(Ka),e&&s(He),e&&s(Xa),v(Ye,e),e&&s(Ja),e&&s(Ke),e&&s(Qa),v(Xe,e),e&&s(Za),e&&s(z),e&&s(er),v(Je,e),e&&s(tr),e&&s(qt),e&&s(sr),v(Qe,e),e&&s(ar),e&&s(ue),e&&s(rr),e&&s(H),v(Ze),e&&s(lr),e&&s(Lt),e&&s(nr),e&&s(Tt),e&&s(or),v(et,e),e&&s(ir),e&&s(tt),e&&s(pr),e&&s($),e&&s(cr),v(at,e),e&&s(dr),e&&s(N),e&&s(hr),v(rt,e),e&&s(ur),e&&s(k),e&&s(mr),v(lt,e),e&&s(_r),e&&s(Y),v(nt),e&&s(fr),e&&s(fe),e&&s(gr),v(it,e),e&&s(vr),e&&s(pt),e&&s(wr),v(ct,e),e&&s(br),e&&s(K),v(dt),e&&s(yr),e&&s(w),e&&s(kr),e&&s(I),e&&s(Er),e&&s(x),e&&s(Mr),e&&s(L)}}}const nd={local:"megatronlm",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"prerequisites",title:"Pre-Requisites "},{local:"accelerate-megatronlm-plugin",title:"Accelerate Megatron-LM Plugin"},{local:"advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets",title:"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"},{local:"utility-for-checkpoint-reshaping-and-interoperability",title:"Utility for Checkpoint reshaping and interoperability"},{local:"caveats",title:"Caveats"}],title:"Megatron-LM"};function od(Oi){return rd(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dd extends Zc{constructor(F){super();ed(this,F,od,ld,td,{})}}export{dd as default,nd as metadata};
