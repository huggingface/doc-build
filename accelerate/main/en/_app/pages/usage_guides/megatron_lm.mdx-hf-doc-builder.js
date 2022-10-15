import{S as Lh,i as qh,s as Dh,e as o,k as d,w as u,t as s,M as Ah,c as l,d as a,m as h,a as n,x as m,h as r,b as c,G as t,g as p,y as f,L as Oh,q as _,o as g,B as v,v as xh}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ot}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as k}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ih(Up){let X,Bs,J,ie,Zt,Me,mo,Qt,fo,Us,$,je,_o,go,Pe,vo,wo,Te,bo,yo,$e,ko,Eo,Le,Mo,jo,Ws,Z,pe,ea,qe,Po,ta,To,Vs,xt,$o,Hs,j,Lo,aa,qo,Do,sa,Ao,Oo,ra,xo,Io,De,zo,Co,Ae,So,No,Ys,E,Go,oa,Ro,Fo,la,Bo,Uo,na,Wo,Vo,ia,Ho,Yo,Oe,Ko,Xo,xe,Jo,Zo,Ks,w,Qo,pa,el,tl,ca,al,sl,da,rl,ol,ha,ll,nl,ua,il,pl,ma,cl,dl,fa,hl,ul,_a,ml,fl,ga,_l,gl,Ie,vl,wl,Xs,I,bl,va,yl,kl,ze,El,Ml,Ce,jl,Pl,Js,B,Tl,wa,$l,Ll,Se,ql,Dl,Zs,ce,Al,ba,Ol,xl,Qs,L,Il,ya,zl,Cl,ka,Sl,Nl,Ea,Gl,Rl,Ma,Fl,Bl,er,de,Ul,ja,Wl,Vl,tr,Q,he,Pa,Ne,Hl,Ta,Yl,ar,U,Kl,Ge,Xl,Jl,Re,Zl,Ql,sr,It,en,rr,zt,$a,tn,or,Fe,lr,Be,La,an,nr,Ue,ir,We,qa,sn,pr,Ve,cr,He,M,Da,rn,on,Aa,ln,nn,Ye,pn,Ke,cn,Oa,dn,hn,un,Xe,mn,xa,fn,_n,Je,dr,ee,ue,Ia,Ze,gn,za,vn,hr,me,wn,Ca,bn,yn,ur,Qe,mr,Ct,kn,fr,et,_r,fe,En,Sa,Mn,jn,gr,St,tt,Pn,Na,Tn,$n,vr,at,wr,st,Ga,Ln,br,rt,yr,ot,Ra,qn,kr,lt,Er,nt,Nt,Dn,Fa,An,Mr,it,jr,W,On,Ba,xn,In,Ua,zn,Cn,Pr,pt,Tr,Gt,Sn,$r,ct,Lr,_e,Nn,Wa,Gn,Rn,qr,te,ge,Va,dt,Fn,Ha,Bn,Dr,Rt,Un,Ar,Ft,O,Wn,Ya,Vn,Hn,Ka,Yn,Kn,Xa,Xn,Jn,Ja,Zn,Qn,Or,ht,xr,ut,Za,ei,Ir,q,ti,Qa,ai,si,es,ri,oi,ts,li,ni,mt,ii,pi,zr,ft,Cr,V,ci,as,di,hi,ss,ui,mi,Sr,_t,Nr,P,fi,rs,_i,gi,os,vi,wi,ls,bi,yi,ns,ki,Ei,is,Mi,ji,Gr,gt,Rr,ae,ve,ps,vt,Pi,cs,Ti,Fr,we,ds,Bt,$i,wt,Li,qi,hs,us,Di,Br,bt,Ur,yt,S,Ai,ms,Oi,xi,fs,Ii,zi,_s,Ci,Si,Wr,kt,Vr,se,be,gs,Et,Ni,vs,Gi,Hr,y,ws,bs,Ri,Fi,ys,re,Bi,ks,Ui,Wi,Es,Vi,Hi,Yi,Ms,N,Ki,js,Xi,Ji,Ps,Zi,Qi,Ts,ep,tp,ap,$s,oe,sp,Ls,rp,op,qs,lp,np,ip,Ds,As,pp,cp,Os,Ut,xs,dp,hp,up,Is,le,mp,zs,fp,_p,Cs,gp,vp,wp,Ss,Ns,bp,Yr,G,yp,Mt,kp,Ep,Gs,Mp,jp,jt,Pp,Kr,R,Tp,Pt,$p,Lp,Rs,qp,Dp,Tt,Ap,Xr,x,Op,$t,xp,Ip,Fs,zp,Cp,Lt,Sp,Np,qt,Gp,Jr;return Me=new Ot({}),qe=new Ot({}),Ne=new Ot({}),Fe=new k({props:{code:"conda create --name ml",highlighted:'conda <span class="hljs-built_in">create</span> <span class="hljs-comment">--name ml</span>'}}),Ue=new k({props:{code:"conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",highlighted:'<span class="hljs-attribute">conda</span> install pytorch torchvision torchaudio cudatoolkit=<span class="hljs-number">11</span>.<span class="hljs-number">3</span> -c pytorch'}}),Ve=new k({props:{code:`git clone https://github.com/NVIDIA/apex
cd apex
pip install -v --disable-pip-version-check --no-cache-dir --global-option="--cpp_ext" --global-option="--cuda_ext" ./
cd ..`,highlighted:`git clone https:<span class="hljs-string">//github.com/NVIDIA/apex</span>
<span class="hljs-keyword">cd</span> apex
pip install -v <span class="hljs-params">--disable-pip-version-check</span> <span class="hljs-params">--no-cache-dir</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cpp_ext&quot;</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cuda_ext&quot;</span> <span class="hljs-string">./</span>
<span class="hljs-keyword">cd</span> <span class="hljs-string">..</span>`}}),Ye=new k({props:{code:`git clone https://github.com/NVIDIA/Megatron-LM.git
cd Megatron-LM`,highlighted:`git clone https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/NVIDIA/</span>Megatron-LM.git
cd Megatron-LM`}}),Xe=new k({props:{code:`"""Setup for pip package."""

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
)`}}),Je=new k({props:{code:'pip install "."',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;.&quot;</span>'}}),Ze=new Ot({}),Qe=new k({props:{code:`:~$ accelerate config --config_file "megatron_gpt_config.yaml"
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
Do you wish to use FP16 or BF16 (mixed precision)? [NO/fp16/bf16]: bf16`}}),et=new k({props:{code:`~$ cat megatron_gpt_config.yaml 
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
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),at=new k({props:{code:`from accelerate.utils import MegatronLMDummyScheduler

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
    )`}}),rt=new k({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
else:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`,highlighted:`<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
<span class="hljs-keyword">else</span>:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`}}),lt=new k({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
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
    losses = torch.cat(losses)`}}),it=new k({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
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
    )`}}),pt=new k({props:{code:`accelerate launch --config_file megatron_gpt_config.yaml \\
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
--output_dir <span class="hljs-string">&quot;awesome_model&quot;</span>`}}),ct=new k({props:{code:"done with compiling and loading fused kernels. Compilation time: 3.569 seconds",highlighted:`Loading extension module fused_dense_cuda...
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
100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 245/245 [05:27&lt;00:00,  1.28s/it]`}}),dt=new Ot({}),ht=new k({props:{code:`from accelerate.utils import MegatronLMDummyScheduler, GPTTrainStep, avg_losses_across_data_parallel_group

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
    }`}}),ft=new k({props:{code:`from accelerate.utils import MegatronLMDummyDataLoader

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
accelerator.state.megatron_lm_plugin.megatron_dataset_flag = <span class="hljs-literal">True</span>`}}),_t=new k({props:{code:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`,highlighted:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`}}),gt=new k({props:{code:`while completed_steps < args.max_train_steps:
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
                outputs = model(**batch)`}}),vt=new Ot({}),bt=new k({props:{code:`python checkpoint_reshaping_and_interoperability.py \\
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
--print-checkpoint-structure`}}),kt=new k({props:{code:`python checkpoint_utils/megatgron_gpt2/checkpoint_reshaping_and_interoperability.py \\
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
--print-checkpoint-structure`}}),Et=new Ot({}),{c(){X=o("meta"),Bs=d(),J=o("h1"),ie=o("a"),Zt=o("span"),u(Me.$$.fragment),mo=d(),Qt=o("span"),fo=s("Megatron-LM"),Us=d(),$=o("p"),je=o("a"),_o=s("Megatron-LM"),go=s(` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),Pe=o("a"),vo=s("GPT"),wo=s(" (Decoder Only), "),Te=o("a"),bo=s("BERT"),yo=s(" (Encoder Only) and "),$e=o("a"),ko=s("T5"),Eo=s(` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),Le=o("a"),Mo=s("repo"),jo=s("."),Ws=d(),Z=o("h2"),pe=o("a"),ea=o("span"),u(qe.$$.fragment),Po=d(),ta=o("span"),To=s("What is integrated?"),Vs=d(),xt=o("p"),$o=s(`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),Hs=d(),j=o("p"),Lo=s("a. "),aa=o("strong"),qo=s("Tensor Parallelism (TP)"),Do=s(`: Reduces memory footprint without much additional communication on intra-node ranks.
Each tensor is split into multiple chunks with each shard residing on separate GPU. At each step, the same mini-batch of data is processed
independently and in parallel by each shard followed by syncing across all GPUs (`),sa=o("code"),Ao=s("all-reduce"),Oo=s(` operation).
In a simple transformer layer, this leads to 2 `),ra=o("code"),xo=s("all-reduces"),Io=s(` in the forward path and 2 in the backward path.
For more details, please refer research paper `),De=o("a"),zo=s(`Megatron-LM: Training Multi-Billion Parameter Language Models Using
Model Parallelism`),Co=s(` and
this section of \u{1F917} blogpost `),Ae=o("a"),So=s("The Technology Behind BLOOM Training"),No=s("."),Ys=d(),E=o("p"),Go=s("b. "),oa=o("strong"),Ro=s("Pipeline Parallelism (PP)"),Fo=s(`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages. For example, if a model has `),la=o("code"),Bo=s("24"),Uo=s(" layers and we have "),na=o("code"),Wo=s("4"),Vo=s(` GPUs for
pipeline parallelism, each GPU will have `),ia=o("code"),Ho=s("6"),Yo=s(` layers (24/4). For more details on schedules to reduce the idle time of PP,
please refer to the research paper `),Oe=o("a"),Ko=s(`Efficient Large-Scale Language Model Training on GPU Clusters
Using Megatron-LM`),Xo=s(` and
this section of \u{1F917} blogpost `),xe=o("a"),Jo=s("The Technology Behind BLOOM Training"),Zo=s("."),Ks=d(),w=o("p"),Qo=s("c. "),pa=o("strong"),el=s("Sequence Parallelism (SP)"),tl=s(`: Reduces memory footprint without any additional communication. Only applicable when using TP.
It reduces activation memory required as it prevents the same copies to be on the tensor parallel ranks
post `),ca=o("code"),al=s("all-reduce"),sl=s(" by replacing then with "),da=o("code"),rl=s("reduce-scatter"),ol=s(" and "),ha=o("code"),ll=s("no-op"),nl=s(" operation would be replaced by "),ua=o("code"),il=s("all-gather"),pl=s(`.
As `),ma=o("code"),cl=s("all-reduce = reduce-scatter + all-gather"),dl=s(`, this saves a ton of activation memory at no added communication cost.
To put it simply, it shards the outputs of each transformer layer along sequence dimension, e.g.,
if the sequence length is `),fa=o("code"),hl=s("1024"),ul=s(" and the TP size is "),_a=o("code"),ml=s("4"),fl=s(", each GPU will have "),ga=o("code"),_l=s("256"),gl=s(` tokens (1024/4) for each sample.
This increases the batch size that can be supported for training. For more details, please refer to the research paper
`),Ie=o("a"),vl=s("Reducing Activation Recomputation in Large Transformer Models"),wl=s("."),Xs=d(),I=o("p"),bl=s("d. "),va=o("strong"),yl=s("Data Parallelism (DP)"),kl=s(` via Distributed Optimizer: Reduces the memory footprint by sharding optimizer states and gradients across DP ranks
(versus the traditional method of replicating the optimizer state across data parallel ranks).
For example, when using Adam optimizer with mixed-precision training, each parameter accounts for 12 bytes of memory.
This gets distributed equally across the GPUs, i.e., each parameter would account for 3 bytes (12/4) if we have 4 GPUs.
For more details, please refer the research paper `),ze=o("a"),El=s(`ZeRO: Memory Optimizations Toward Training Trillion
Parameter Models`),Ml=s(` and following section of \u{1F917} blog
`),Ce=o("a"),jl=s("The Technology Behind BLOOM Training"),Pl=s("."),Js=d(),B=o("p"),Tl=s("e. "),wa=o("strong"),$l=s("Selective Activation Recomputation"),Ll=s(`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.
For example, for GPT-3, this leads to 70% reduction in required memory for activations at the expense of
only 2.7% FLOPs overhead for recomputation of activations. For more details, please refer to the research paper
`),Se=o("a"),ql=s("Reducing Activation Recomputation in Large Transformer Models"),Dl=s("."),Zs=d(),ce=o("p"),Al=s("f. "),ba=o("strong"),Ol=s("Fused Kernels"),xl=s(`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),Qs=d(),L=o("p"),Il=s("g. "),ya=o("strong"),zl=s("Support for Indexed datasets"),Cl=s(": Efficient binary format of datasets for large scale training. Support for the "),ka=o("code"),Sl=s("mmap"),Nl=s(", "),Ea=o("code"),Gl=s("cached"),Rl=s(" index file and the "),Ma=o("code"),Fl=s("lazy"),Bl=s(" loader format."),er=d(),de=o("p"),Ul=s("h. "),ja=o("strong"),Wl=s("Checkpoint reshaping and interoperability"),Vl=s(`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),tr=d(),Q=o("h2"),he=o("a"),Pa=o("span"),u(Ne.$$.fragment),Hl=d(),Ta=o("span"),Yl=s("Pre-Requisites"),ar=d(),U=o("p"),Kl=s("You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),Ge=o("a"),Xl=s("APEX"),Jl=s(` releases and the nltk library.
See `),Re=o("a"),Zl=s("documentation"),Ql=s(` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),sr=d(),It=o("p"),en=s("Below is a step-by-step method to set up the conda environment:"),rr=d(),zt=o("ol"),$a=o("li"),tn=s("Create a virtual environment"),or=d(),u(Fe.$$.fragment),lr=d(),Be=o("ol"),La=o("li"),an=s("Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),nr=d(),u(Ue.$$.fragment),ir=d(),We=o("ol"),qa=o("li"),sn=s("Install Nvidia APEX"),pr=d(),u(Ve.$$.fragment),cr=d(),He=o("ol"),M=o("li"),Da=o("p"),rn=s("Installing Megatron-LM"),on=d(),Aa=o("p"),ln=s("a. Cloning the Megatron-LM repo"),nn=d(),u(Ye.$$.fragment),pn=d(),Ke=o("p"),cn=s("b. Create a file "),Oa=o("code"),dn=s("setup.py"),hn=s(", paste the below code and put in the root folder"),un=d(),u(Xe.$$.fragment),mn=d(),xa=o("p"),fn=s("c. installing via below command"),_n=d(),u(Je.$$.fragment),dr=d(),ee=o("h2"),ue=o("a"),Ia=o("span"),u(Ze.$$.fragment),gn=d(),za=o("span"),vn=s("Accelerate Megatron-LM Plugin"),hr=d(),me=o("p"),wn=s("Important features are directly supported via the "),Ca=o("code"),bn=s("accelerate config"),yn=s(` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),ur=d(),u(Qe.$$.fragment),mr=d(),Ct=o("p"),kn=s("The resulting config is shown below:"),fr=d(),u(et.$$.fragment),_r=d(),fe=o("p"),En=s("We will take the example of GPT pre-training. The minimal changes required to the official "),Sa=o("code"),Mn=s("run_clm_no_trainer.py"),jn=s(`
to use Megatron-LM are as follows:`),gr=d(),St=o("ol"),tt=o("li"),Pn=s(`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),Na=o("code"),Tn=s("accelerate.utils.MegatronLMDummyScheduler"),$n=s(`.
Example is given below:`),vr=d(),u(at.$$.fragment),wr=d(),st=o("ol"),Ga=o("li"),Ln=s(`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),br=d(),u(rt.$$.fragment),yr=d(),ot=o("ol"),Ra=o("li"),qn=s("When using Megatron-LM, the losses are already averaged across the data parallel group"),kr=d(),u(lt.$$.fragment),Er=d(),nt=o("ol"),Nt=o("li"),Dn=s("For Megatron-LM, we need to save the model using "),Fa=o("code"),An=s("accelerator.save_state"),Mr=d(),u(it.$$.fragment),jr=d(),W=o("p"),On=s("That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),Ba=o("code"),xn=s("accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),In=s(`.
Let\u2019s run it for `),Ua=o("code"),zn=s("gpt-large"),Cn=s(" model architecture using 4 A100-80GB GPUs."),Pr=d(),u(pt.$$.fragment),Tr=d(),Gt=o("p"),Sn=s("Below are some important excerpts from the output logs:"),$r=d(),u(ct.$$.fragment),Lr=d(),_e=o("p"),Nn=s("There are a large number of other options/features that one can set using "),Wa=o("code"),Gn=s("accelerate.utils.MegatronLMPlugin"),Rn=s("."),qr=d(),te=o("h2"),ge=o("a"),Va=o("span"),u(dt.$$.fragment),Fn=d(),Ha=o("span"),Bn=s("Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),Dr=d(),Rt=o("p"),Un=s("For leveraging more features, please go through below details."),Ar=d(),Ft=o("ol"),O=o("li"),Wn=s(`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),Ya=o("code"),Vn=s("accelerate.utils.AbstractTrainStep"),Hn=s(` or inherit from their corresponding children
`),Ka=o("code"),Yn=s("accelerate.utils.GPTTrainStep"),Kn=s(", "),Xa=o("code"),Xn=s("accelerate.utils.BertTrainStep"),Jn=s(" or "),Ja=o("code"),Zn=s("accelerate.utils.T5TrainStep"),Qn=s("."),Or=d(),u(ht.$$.fragment),xr=d(),ut=o("ol"),Za=o("li"),ei=s(`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),Ir=d(),q=o("p"),ti=s("a. For Megatron-LM indexed datasets, we need to use "),Qa=o("code"),ai=s("MegatronLMDummyDataLoader"),si=s(`
and pass the required dataset args to it such as `),es=o("code"),ri=s("data_path"),oi=s(", "),ts=o("code"),li=s("seq_length"),ni=s(` etc.
See `),mt=o("a"),ii=s("here"),pi=s(" for the list of available args."),zr=d(),u(ft.$$.fragment),Cr=d(),V=o("p"),ci=s("b. "),as=o("code"),di=s("megatron_dataloader"),hi=s(` is repeated 3 times to get training, validation and test dataloaders
as per the `),ss=o("code"),ui=s("args.splits_string"),mi=s(" proportions"),Sr=d(),u(_t.$$.fragment),Nr=d(),P=o("p"),fi=s(`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),rs=o("code"),_i=s("None"),gi=s(` else provide empty dict
As such, we loop using `),os=o("code"),vi=s("while"),wi=s(" loop and break when "),ls=o("code"),bi=s("completed_steps"),yi=s(" is equal to "),ns=o("code"),ki=s("args.max_train_steps"),Ei=s(`
This is similar to the Megatron-LM setup wherein user has to provide `),is=o("code"),Mi=s("max_train_steps"),ji=s(` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),Gr=d(),u(gt.$$.fragment),Rr=d(),ae=o("h2"),ve=o("a"),ps=o("span"),u(vt.$$.fragment),Pi=d(),cs=o("span"),Ti=s("Utility for Checkpoint reshaping and interoperability"),Fr=d(),we=o("ol"),ds=o("li"),Bt=o("p"),$i=s(`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),wt=o("a"),Li=s("checkpoint_reshaping_and_interoperability.py"),qi=d(),hs=o("li"),us=o("p"),Di=s("Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),Br=d(),u(bt.$$.fragment),Ur=d(),yt=o("ol"),S=o("li"),Ai=s("Conversion of checkpoint from transformers to megatron with "),ms=o("code"),Oi=s("tp_size=2"),xi=s(", "),fs=o("code"),Ii=s("pp_size=2"),zi=s(" and "),_s=o("code"),Ci=s("dp_size=2"),Si=s("."),Wr=d(),u(kt.$$.fragment),Vr=d(),se=o("h2"),be=o("a"),gs=o("span"),u(Et.$$.fragment),Ni=d(),vs=o("span"),Gi=s("Caveats"),Hr=d(),y=o("ol"),ws=o("li"),bs=o("p"),Ri=s(`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Fi=d(),ys=o("li"),re=o("p"),Bi=s(`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),ks=o("code"),Ui=s("model(**batch_data)"),Wi=s(` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),Es=o("code"),Vi=s("perplexity"),Hi=s(" using the loss."),Yi=d(),Ms=o("li"),N=o("p"),Ki=s(`The main process is the last rank as the losses are available in the last stage of pipeline.
`),js=o("code"),Xi=s("accelerator.is_main_process"),Ji=s(" and "),Ps=o("code"),Zi=s("accelerator.is_local_main_process"),Qi=s(" return "),Ts=o("code"),ep=s("True"),tp=s(` for last rank when using
Megatron-LM integration.`),ap=d(),$s=o("li"),oe=o("p"),sp=s("In "),Ls=o("code"),rp=s("accelerator.prepare"),op=s(` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),qs=o("code"),lp=s("accelerator.load_state"),np=s(" to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),ip=d(),Ds=o("li"),As=o("p"),pp=s(`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),cp=d(),Os=o("li"),Ut=o("p"),xs=o("code"),dp=s("gradient_accumulation_steps"),hp=s(` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),up=d(),Is=o("li"),le=o("p"),mp=s("When using Megatron-LM, use "),zs=o("code"),fp=s("accelerator.save_state"),_p=s(" and "),Cs=o("code"),gp=s("accelerator.load_state"),vp=s(" for saving and loading checkpoints."),wp=d(),Ss=o("li"),Ns=o("p"),bp=s(`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),Yr=d(),G=o("p"),yp=s("a. Megatron-LM "),Mt=o("a"),kp=s("BertModel"),Ep=s(` :
\u{1F917} transformers models with `),Gs=o("code"),Mp=s("megatron-bert"),jp=s(` in config\u2019s model type, e.g.,
`),jt=o("a"),Pp=s("MegatronBERT"),Kr=d(),R=o("p"),Tp=s("b. Megatron-LM "),Pt=o("a"),$p=s("GPTModel"),Lp=s(` :
\u{1F917} transformers models with `),Rs=o("code"),qp=s("gpt2"),Dp=s(` in config\u2019s model type, e.g.,
`),Tt=o("a"),Ap=s("OpenAI GPT2"),Xr=d(),x=o("p"),Op=s("c. Megatron-LM "),$t=o("a"),xp=s("T5Model"),Ip=s(` :
\u{1F917} transformers models with `),Fs=o("code"),zp=s("t5"),Cp=s(` in  config\u2019s model type, e.g.,
`),Lt=o("a"),Sp=s("T5"),Np=s(` and
`),qt=o("a"),Gp=s("MT5"),this.h()},l(e){const i=Ah('[data-svelte="svelte-1phssyn"]',document.head);X=l(i,"META",{name:!0,content:!0}),i.forEach(a),Bs=h(e),J=l(e,"H1",{class:!0});var Zr=n(J);ie=l(Zr,"A",{id:!0,class:!0,href:!0});var Wp=n(ie);Zt=l(Wp,"SPAN",{});var Vp=n(Zt);m(Me.$$.fragment,Vp),Vp.forEach(a),Wp.forEach(a),mo=h(Zr),Qt=l(Zr,"SPAN",{});var Hp=n(Qt);fo=r(Hp,"Megatron-LM"),Hp.forEach(a),Zr.forEach(a),Us=h(e),$=l(e,"P",{});var F=n($);je=l(F,"A",{href:!0,rel:!0});var Yp=n(je);_o=r(Yp,"Megatron-LM"),Yp.forEach(a),go=r(F,` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),Pe=l(F,"A",{href:!0,rel:!0});var Kp=n(Pe);vo=r(Kp,"GPT"),Kp.forEach(a),wo=r(F," (Decoder Only), "),Te=l(F,"A",{href:!0,rel:!0});var Xp=n(Te);bo=r(Xp,"BERT"),Xp.forEach(a),yo=r(F," (Encoder Only) and "),$e=l(F,"A",{href:!0,rel:!0});var Jp=n($e);ko=r(Jp,"T5"),Jp.forEach(a),Eo=r(F,` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),Le=l(F,"A",{href:!0,rel:!0});var Zp=n(Le);Mo=r(Zp,"repo"),Zp.forEach(a),jo=r(F,"."),F.forEach(a),Ws=h(e),Z=l(e,"H2",{class:!0});var Qr=n(Z);pe=l(Qr,"A",{id:!0,class:!0,href:!0});var Qp=n(pe);ea=l(Qp,"SPAN",{});var ec=n(ea);m(qe.$$.fragment,ec),ec.forEach(a),Qp.forEach(a),Po=h(Qr),ta=l(Qr,"SPAN",{});var tc=n(ta);To=r(tc,"What is integrated?"),tc.forEach(a),Qr.forEach(a),Vs=h(e),xt=l(e,"P",{});var ac=n(xt);$o=r(ac,`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),ac.forEach(a),Hs=h(e),j=l(e,"P",{});var z=n(j);Lo=r(z,"a. "),aa=l(z,"STRONG",{});var sc=n(aa);qo=r(sc,"Tensor Parallelism (TP)"),sc.forEach(a),Do=r(z,`: Reduces memory footprint without much additional communication on intra-node ranks.
Each tensor is split into multiple chunks with each shard residing on separate GPU. At each step, the same mini-batch of data is processed
independently and in parallel by each shard followed by syncing across all GPUs (`),sa=l(z,"CODE",{});var rc=n(sa);Ao=r(rc,"all-reduce"),rc.forEach(a),Oo=r(z,` operation).
In a simple transformer layer, this leads to 2 `),ra=l(z,"CODE",{});var oc=n(ra);xo=r(oc,"all-reduces"),oc.forEach(a),Io=r(z,` in the forward path and 2 in the backward path.
For more details, please refer research paper `),De=l(z,"A",{href:!0,rel:!0});var lc=n(De);zo=r(lc,`Megatron-LM: Training Multi-Billion Parameter Language Models Using
Model Parallelism`),lc.forEach(a),Co=r(z,` and
this section of \u{1F917} blogpost `),Ae=l(z,"A",{href:!0,rel:!0});var nc=n(Ae);So=r(nc,"The Technology Behind BLOOM Training"),nc.forEach(a),No=r(z,"."),z.forEach(a),Ys=h(e),E=l(e,"P",{});var D=n(E);Go=r(D,"b. "),oa=l(D,"STRONG",{});var ic=n(oa);Ro=r(ic,"Pipeline Parallelism (PP)"),ic.forEach(a),Fo=r(D,`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages. For example, if a model has `),la=l(D,"CODE",{});var pc=n(la);Bo=r(pc,"24"),pc.forEach(a),Uo=r(D," layers and we have "),na=l(D,"CODE",{});var cc=n(na);Wo=r(cc,"4"),cc.forEach(a),Vo=r(D,` GPUs for
pipeline parallelism, each GPU will have `),ia=l(D,"CODE",{});var dc=n(ia);Ho=r(dc,"6"),dc.forEach(a),Yo=r(D,` layers (24/4). For more details on schedules to reduce the idle time of PP,
please refer to the research paper `),Oe=l(D,"A",{href:!0,rel:!0});var hc=n(Oe);Ko=r(hc,`Efficient Large-Scale Language Model Training on GPU Clusters
Using Megatron-LM`),hc.forEach(a),Xo=r(D,` and
this section of \u{1F917} blogpost `),xe=l(D,"A",{href:!0,rel:!0});var uc=n(xe);Jo=r(uc,"The Technology Behind BLOOM Training"),uc.forEach(a),Zo=r(D,"."),D.forEach(a),Ks=h(e),w=l(e,"P",{});var b=n(w);Qo=r(b,"c. "),pa=l(b,"STRONG",{});var mc=n(pa);el=r(mc,"Sequence Parallelism (SP)"),mc.forEach(a),tl=r(b,`: Reduces memory footprint without any additional communication. Only applicable when using TP.
It reduces activation memory required as it prevents the same copies to be on the tensor parallel ranks
post `),ca=l(b,"CODE",{});var fc=n(ca);al=r(fc,"all-reduce"),fc.forEach(a),sl=r(b," by replacing then with "),da=l(b,"CODE",{});var _c=n(da);rl=r(_c,"reduce-scatter"),_c.forEach(a),ol=r(b," and "),ha=l(b,"CODE",{});var gc=n(ha);ll=r(gc,"no-op"),gc.forEach(a),nl=r(b," operation would be replaced by "),ua=l(b,"CODE",{});var vc=n(ua);il=r(vc,"all-gather"),vc.forEach(a),pl=r(b,`.
As `),ma=l(b,"CODE",{});var wc=n(ma);cl=r(wc,"all-reduce = reduce-scatter + all-gather"),wc.forEach(a),dl=r(b,`, this saves a ton of activation memory at no added communication cost.
To put it simply, it shards the outputs of each transformer layer along sequence dimension, e.g.,
if the sequence length is `),fa=l(b,"CODE",{});var bc=n(fa);hl=r(bc,"1024"),bc.forEach(a),ul=r(b," and the TP size is "),_a=l(b,"CODE",{});var yc=n(_a);ml=r(yc,"4"),yc.forEach(a),fl=r(b,", each GPU will have "),ga=l(b,"CODE",{});var kc=n(ga);_l=r(kc,"256"),kc.forEach(a),gl=r(b,` tokens (1024/4) for each sample.
This increases the batch size that can be supported for training. For more details, please refer to the research paper
`),Ie=l(b,"A",{href:!0,rel:!0});var Ec=n(Ie);vl=r(Ec,"Reducing Activation Recomputation in Large Transformer Models"),Ec.forEach(a),wl=r(b,"."),b.forEach(a),Xs=h(e),I=l(e,"P",{});var ye=n(I);bl=r(ye,"d. "),va=l(ye,"STRONG",{});var Mc=n(va);yl=r(Mc,"Data Parallelism (DP)"),Mc.forEach(a),kl=r(ye,` via Distributed Optimizer: Reduces the memory footprint by sharding optimizer states and gradients across DP ranks
(versus the traditional method of replicating the optimizer state across data parallel ranks).
For example, when using Adam optimizer with mixed-precision training, each parameter accounts for 12 bytes of memory.
This gets distributed equally across the GPUs, i.e., each parameter would account for 3 bytes (12/4) if we have 4 GPUs.
For more details, please refer the research paper `),ze=l(ye,"A",{href:!0,rel:!0});var jc=n(ze);El=r(jc,`ZeRO: Memory Optimizations Toward Training Trillion
Parameter Models`),jc.forEach(a),Ml=r(ye,` and following section of \u{1F917} blog
`),Ce=l(ye,"A",{href:!0,rel:!0});var Pc=n(Ce);jl=r(Pc,"The Technology Behind BLOOM Training"),Pc.forEach(a),Pl=r(ye,"."),ye.forEach(a),Js=h(e),B=l(e,"P",{});var Wt=n(B);Tl=r(Wt,"e. "),wa=l(Wt,"STRONG",{});var Tc=n(wa);$l=r(Tc,"Selective Activation Recomputation"),Tc.forEach(a),Ll=r(Wt,`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.
For example, for GPT-3, this leads to 70% reduction in required memory for activations at the expense of
only 2.7% FLOPs overhead for recomputation of activations. For more details, please refer to the research paper
`),Se=l(Wt,"A",{href:!0,rel:!0});var $c=n(Se);ql=r($c,"Reducing Activation Recomputation in Large Transformer Models"),$c.forEach(a),Dl=r(Wt,"."),Wt.forEach(a),Zs=h(e),ce=l(e,"P",{});var eo=n(ce);Al=r(eo,"f. "),ba=l(eo,"STRONG",{});var Lc=n(ba);Ol=r(Lc,"Fused Kernels"),Lc.forEach(a),xl=r(eo,`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),eo.forEach(a),Qs=h(e),L=l(e,"P",{});var H=n(L);Il=r(H,"g. "),ya=l(H,"STRONG",{});var qc=n(ya);zl=r(qc,"Support for Indexed datasets"),qc.forEach(a),Cl=r(H,": Efficient binary format of datasets for large scale training. Support for the "),ka=l(H,"CODE",{});var Dc=n(ka);Sl=r(Dc,"mmap"),Dc.forEach(a),Nl=r(H,", "),Ea=l(H,"CODE",{});var Ac=n(Ea);Gl=r(Ac,"cached"),Ac.forEach(a),Rl=r(H," index file and the "),Ma=l(H,"CODE",{});var Oc=n(Ma);Fl=r(Oc,"lazy"),Oc.forEach(a),Bl=r(H," loader format."),H.forEach(a),er=h(e),de=l(e,"P",{});var to=n(de);Ul=r(to,"h. "),ja=l(to,"STRONG",{});var xc=n(ja);Wl=r(xc,"Checkpoint reshaping and interoperability"),xc.forEach(a),Vl=r(to,`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),to.forEach(a),tr=h(e),Q=l(e,"H2",{class:!0});var ao=n(Q);he=l(ao,"A",{id:!0,class:!0,href:!0});var Ic=n(he);Pa=l(Ic,"SPAN",{});var zc=n(Pa);m(Ne.$$.fragment,zc),zc.forEach(a),Ic.forEach(a),Hl=h(ao),Ta=l(ao,"SPAN",{});var Cc=n(Ta);Yl=r(Cc,"Pre-Requisites"),Cc.forEach(a),ao.forEach(a),ar=h(e),U=l(e,"P",{});var Vt=n(U);Kl=r(Vt,"You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),Ge=l(Vt,"A",{href:!0,rel:!0});var Sc=n(Ge);Xl=r(Sc,"APEX"),Sc.forEach(a),Jl=r(Vt,` releases and the nltk library.
See `),Re=l(Vt,"A",{href:!0,rel:!0});var Nc=n(Re);Zl=r(Nc,"documentation"),Nc.forEach(a),Ql=r(Vt,` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),Vt.forEach(a),sr=h(e),It=l(e,"P",{});var Gc=n(It);en=r(Gc,"Below is a step-by-step method to set up the conda environment:"),Gc.forEach(a),rr=h(e),zt=l(e,"OL",{});var Rc=n(zt);$a=l(Rc,"LI",{});var Fc=n($a);tn=r(Fc,"Create a virtual environment"),Fc.forEach(a),Rc.forEach(a),or=h(e),m(Fe.$$.fragment,e),lr=h(e),Be=l(e,"OL",{start:!0});var Bc=n(Be);La=l(Bc,"LI",{});var Uc=n(La);an=r(Uc,"Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),Uc.forEach(a),Bc.forEach(a),nr=h(e),m(Ue.$$.fragment,e),ir=h(e),We=l(e,"OL",{start:!0});var Wc=n(We);qa=l(Wc,"LI",{});var Vc=n(qa);sn=r(Vc,"Install Nvidia APEX"),Vc.forEach(a),Wc.forEach(a),pr=h(e),m(Ve.$$.fragment,e),cr=h(e),He=l(e,"OL",{start:!0});var Hc=n(He);M=l(Hc,"LI",{});var A=n(M);Da=l(A,"P",{});var Yc=n(Da);rn=r(Yc,"Installing Megatron-LM"),Yc.forEach(a),on=h(A),Aa=l(A,"P",{});var Kc=n(Aa);ln=r(Kc,"a. Cloning the Megatron-LM repo"),Kc.forEach(a),nn=h(A),m(Ye.$$.fragment,A),pn=h(A),Ke=l(A,"P",{});var so=n(Ke);cn=r(so,"b. Create a file "),Oa=l(so,"CODE",{});var Xc=n(Oa);dn=r(Xc,"setup.py"),Xc.forEach(a),hn=r(so,", paste the below code and put in the root folder"),so.forEach(a),un=h(A),m(Xe.$$.fragment,A),mn=h(A),xa=l(A,"P",{});var Jc=n(xa);fn=r(Jc,"c. installing via below command"),Jc.forEach(a),_n=h(A),m(Je.$$.fragment,A),A.forEach(a),Hc.forEach(a),dr=h(e),ee=l(e,"H2",{class:!0});var ro=n(ee);ue=l(ro,"A",{id:!0,class:!0,href:!0});var Zc=n(ue);Ia=l(Zc,"SPAN",{});var Qc=n(Ia);m(Ze.$$.fragment,Qc),Qc.forEach(a),Zc.forEach(a),gn=h(ro),za=l(ro,"SPAN",{});var ed=n(za);vn=r(ed,"Accelerate Megatron-LM Plugin"),ed.forEach(a),ro.forEach(a),hr=h(e),me=l(e,"P",{});var oo=n(me);wn=r(oo,"Important features are directly supported via the "),Ca=l(oo,"CODE",{});var td=n(Ca);bn=r(td,"accelerate config"),td.forEach(a),yn=r(oo,` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),oo.forEach(a),ur=h(e),m(Qe.$$.fragment,e),mr=h(e),Ct=l(e,"P",{});var ad=n(Ct);kn=r(ad,"The resulting config is shown below:"),ad.forEach(a),fr=h(e),m(et.$$.fragment,e),_r=h(e),fe=l(e,"P",{});var lo=n(fe);En=r(lo,"We will take the example of GPT pre-training. The minimal changes required to the official "),Sa=l(lo,"CODE",{});var sd=n(Sa);Mn=r(sd,"run_clm_no_trainer.py"),sd.forEach(a),jn=r(lo,`
to use Megatron-LM are as follows:`),lo.forEach(a),gr=h(e),St=l(e,"OL",{});var rd=n(St);tt=l(rd,"LI",{});var no=n(tt);Pn=r(no,`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),Na=l(no,"CODE",{});var od=n(Na);Tn=r(od,"accelerate.utils.MegatronLMDummyScheduler"),od.forEach(a),$n=r(no,`.
Example is given below:`),no.forEach(a),rd.forEach(a),vr=h(e),m(at.$$.fragment,e),wr=h(e),st=l(e,"OL",{start:!0});var ld=n(st);Ga=l(ld,"LI",{});var nd=n(Ga);Ln=r(nd,`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),nd.forEach(a),ld.forEach(a),br=h(e),m(rt.$$.fragment,e),yr=h(e),ot=l(e,"OL",{start:!0});var id=n(ot);Ra=l(id,"LI",{});var pd=n(Ra);qn=r(pd,"When using Megatron-LM, the losses are already averaged across the data parallel group"),pd.forEach(a),id.forEach(a),kr=h(e),m(lt.$$.fragment,e),Er=h(e),nt=l(e,"OL",{start:!0});var cd=n(nt);Nt=l(cd,"LI",{});var Rp=n(Nt);Dn=r(Rp,"For Megatron-LM, we need to save the model using "),Fa=l(Rp,"CODE",{});var dd=n(Fa);An=r(dd,"accelerator.save_state"),dd.forEach(a),Rp.forEach(a),cd.forEach(a),Mr=h(e),m(it.$$.fragment,e),jr=h(e),W=l(e,"P",{});var Ht=n(W);On=r(Ht,"That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),Ba=l(Ht,"CODE",{});var hd=n(Ba);xn=r(hd,"accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),hd.forEach(a),In=r(Ht,`.
Let\u2019s run it for `),Ua=l(Ht,"CODE",{});var ud=n(Ua);zn=r(ud,"gpt-large"),ud.forEach(a),Cn=r(Ht," model architecture using 4 A100-80GB GPUs."),Ht.forEach(a),Pr=h(e),m(pt.$$.fragment,e),Tr=h(e),Gt=l(e,"P",{});var md=n(Gt);Sn=r(md,"Below are some important excerpts from the output logs:"),md.forEach(a),$r=h(e),m(ct.$$.fragment,e),Lr=h(e),_e=l(e,"P",{});var io=n(_e);Nn=r(io,"There are a large number of other options/features that one can set using "),Wa=l(io,"CODE",{});var fd=n(Wa);Gn=r(fd,"accelerate.utils.MegatronLMPlugin"),fd.forEach(a),Rn=r(io,"."),io.forEach(a),qr=h(e),te=l(e,"H2",{class:!0});var po=n(te);ge=l(po,"A",{id:!0,class:!0,href:!0});var _d=n(ge);Va=l(_d,"SPAN",{});var gd=n(Va);m(dt.$$.fragment,gd),gd.forEach(a),_d.forEach(a),Fn=h(po),Ha=l(po,"SPAN",{});var vd=n(Ha);Bn=r(vd,"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),vd.forEach(a),po.forEach(a),Dr=h(e),Rt=l(e,"P",{});var wd=n(Rt);Un=r(wd,"For leveraging more features, please go through below details."),wd.forEach(a),Ar=h(e),Ft=l(e,"OL",{});var bd=n(Ft);O=l(bd,"LI",{});var Y=n(O);Wn=r(Y,`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),Ya=l(Y,"CODE",{});var yd=n(Ya);Vn=r(yd,"accelerate.utils.AbstractTrainStep"),yd.forEach(a),Hn=r(Y,` or inherit from their corresponding children
`),Ka=l(Y,"CODE",{});var kd=n(Ka);Yn=r(kd,"accelerate.utils.GPTTrainStep"),kd.forEach(a),Kn=r(Y,", "),Xa=l(Y,"CODE",{});var Ed=n(Xa);Xn=r(Ed,"accelerate.utils.BertTrainStep"),Ed.forEach(a),Jn=r(Y," or "),Ja=l(Y,"CODE",{});var Md=n(Ja);Zn=r(Md,"accelerate.utils.T5TrainStep"),Md.forEach(a),Qn=r(Y,"."),Y.forEach(a),bd.forEach(a),Or=h(e),m(ht.$$.fragment,e),xr=h(e),ut=l(e,"OL",{start:!0});var jd=n(ut);Za=l(jd,"LI",{});var Pd=n(Za);ei=r(Pd,`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),Pd.forEach(a),jd.forEach(a),Ir=h(e),q=l(e,"P",{});var K=n(q);ti=r(K,"a. For Megatron-LM indexed datasets, we need to use "),Qa=l(K,"CODE",{});var Td=n(Qa);ai=r(Td,"MegatronLMDummyDataLoader"),Td.forEach(a),si=r(K,`
and pass the required dataset args to it such as `),es=l(K,"CODE",{});var $d=n(es);ri=r($d,"data_path"),$d.forEach(a),oi=r(K,", "),ts=l(K,"CODE",{});var Ld=n(ts);li=r(Ld,"seq_length"),Ld.forEach(a),ni=r(K,` etc.
See `),mt=l(K,"A",{href:!0,rel:!0});var qd=n(mt);ii=r(qd,"here"),qd.forEach(a),pi=r(K," for the list of available args."),K.forEach(a),zr=h(e),m(ft.$$.fragment,e),Cr=h(e),V=l(e,"P",{});var Yt=n(V);ci=r(Yt,"b. "),as=l(Yt,"CODE",{});var Dd=n(as);di=r(Dd,"megatron_dataloader"),Dd.forEach(a),hi=r(Yt,` is repeated 3 times to get training, validation and test dataloaders
as per the `),ss=l(Yt,"CODE",{});var Ad=n(ss);ui=r(Ad,"args.splits_string"),Ad.forEach(a),mi=r(Yt," proportions"),Yt.forEach(a),Sr=h(e),m(_t.$$.fragment,e),Nr=h(e),P=l(e,"P",{});var C=n(P);fi=r(C,`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),rs=l(C,"CODE",{});var Od=n(rs);_i=r(Od,"None"),Od.forEach(a),gi=r(C,` else provide empty dict
As such, we loop using `),os=l(C,"CODE",{});var xd=n(os);vi=r(xd,"while"),xd.forEach(a),wi=r(C," loop and break when "),ls=l(C,"CODE",{});var Id=n(ls);bi=r(Id,"completed_steps"),Id.forEach(a),yi=r(C," is equal to "),ns=l(C,"CODE",{});var zd=n(ns);ki=r(zd,"args.max_train_steps"),zd.forEach(a),Ei=r(C,`
This is similar to the Megatron-LM setup wherein user has to provide `),is=l(C,"CODE",{});var Cd=n(is);Mi=r(Cd,"max_train_steps"),Cd.forEach(a),ji=r(C,` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),C.forEach(a),Gr=h(e),m(gt.$$.fragment,e),Rr=h(e),ae=l(e,"H2",{class:!0});var co=n(ae);ve=l(co,"A",{id:!0,class:!0,href:!0});var Sd=n(ve);ps=l(Sd,"SPAN",{});var Nd=n(ps);m(vt.$$.fragment,Nd),Nd.forEach(a),Sd.forEach(a),Pi=h(co),cs=l(co,"SPAN",{});var Gd=n(cs);Ti=r(Gd,"Utility for Checkpoint reshaping and interoperability"),Gd.forEach(a),co.forEach(a),Fr=h(e),we=l(e,"OL",{});var ho=n(we);ds=l(ho,"LI",{});var Rd=n(ds);Bt=l(Rd,"P",{});var Fp=n(Bt);$i=r(Fp,`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),wt=l(Fp,"A",{href:!0,rel:!0});var Fd=n(wt);Li=r(Fd,"checkpoint_reshaping_and_interoperability.py"),Fd.forEach(a),Fp.forEach(a),Rd.forEach(a),qi=h(ho),hs=l(ho,"LI",{});var Bd=n(hs);us=l(Bd,"P",{});var Ud=n(us);Di=r(Ud,"Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),Ud.forEach(a),Bd.forEach(a),ho.forEach(a),Br=h(e),m(bt.$$.fragment,e),Ur=h(e),yt=l(e,"OL",{start:!0});var Wd=n(yt);S=l(Wd,"LI",{});var ke=n(S);Ai=r(ke,"Conversion of checkpoint from transformers to megatron with "),ms=l(ke,"CODE",{});var Vd=n(ms);Oi=r(Vd,"tp_size=2"),Vd.forEach(a),xi=r(ke,", "),fs=l(ke,"CODE",{});var Hd=n(fs);Ii=r(Hd,"pp_size=2"),Hd.forEach(a),zi=r(ke," and "),_s=l(ke,"CODE",{});var Yd=n(_s);Ci=r(Yd,"dp_size=2"),Yd.forEach(a),Si=r(ke,"."),ke.forEach(a),Wd.forEach(a),Wr=h(e),m(kt.$$.fragment,e),Vr=h(e),se=l(e,"H2",{class:!0});var uo=n(se);be=l(uo,"A",{id:!0,class:!0,href:!0});var Kd=n(be);gs=l(Kd,"SPAN",{});var Xd=n(gs);m(Et.$$.fragment,Xd),Xd.forEach(a),Kd.forEach(a),Ni=h(uo),vs=l(uo,"SPAN",{});var Jd=n(vs);Gi=r(Jd,"Caveats"),Jd.forEach(a),uo.forEach(a),Hr=h(e),y=l(e,"OL",{});var T=n(y);ws=l(T,"LI",{});var Zd=n(ws);bs=l(Zd,"P",{});var Qd=n(bs);Ri=r(Qd,`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Qd.forEach(a),Zd.forEach(a),Fi=h(T),ys=l(T,"LI",{});var eh=n(ys);re=l(eh,"P",{});var Kt=n(re);Bi=r(Kt,`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),ks=l(Kt,"CODE",{});var th=n(ks);Ui=r(th,"model(**batch_data)"),th.forEach(a),Wi=r(Kt,` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),Es=l(Kt,"CODE",{});var ah=n(Es);Vi=r(ah,"perplexity"),ah.forEach(a),Hi=r(Kt," using the loss."),Kt.forEach(a),eh.forEach(a),Yi=h(T),Ms=l(T,"LI",{});var sh=n(Ms);N=l(sh,"P",{});var Ee=n(N);Ki=r(Ee,`The main process is the last rank as the losses are available in the last stage of pipeline.
`),js=l(Ee,"CODE",{});var rh=n(js);Xi=r(rh,"accelerator.is_main_process"),rh.forEach(a),Ji=r(Ee," and "),Ps=l(Ee,"CODE",{});var oh=n(Ps);Zi=r(oh,"accelerator.is_local_main_process"),oh.forEach(a),Qi=r(Ee," return "),Ts=l(Ee,"CODE",{});var lh=n(Ts);ep=r(lh,"True"),lh.forEach(a),tp=r(Ee,` for last rank when using
Megatron-LM integration.`),Ee.forEach(a),sh.forEach(a),ap=h(T),$s=l(T,"LI",{});var nh=n($s);oe=l(nh,"P",{});var Xt=n(oe);sp=r(Xt,"In "),Ls=l(Xt,"CODE",{});var ih=n(Ls);rp=r(ih,"accelerator.prepare"),ih.forEach(a),op=r(Xt,` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),qs=l(Xt,"CODE",{});var ph=n(qs);lp=r(ph,"accelerator.load_state"),ph.forEach(a),np=r(Xt," to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),Xt.forEach(a),nh.forEach(a),ip=h(T),Ds=l(T,"LI",{});var ch=n(Ds);As=l(ch,"P",{});var dh=n(As);pp=r(dh,`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),dh.forEach(a),ch.forEach(a),cp=h(T),Os=l(T,"LI",{});var hh=n(Os);Ut=l(hh,"P",{});var Bp=n(Ut);xs=l(Bp,"CODE",{});var uh=n(xs);dp=r(uh,"gradient_accumulation_steps"),uh.forEach(a),hp=r(Bp,` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),Bp.forEach(a),hh.forEach(a),up=h(T),Is=l(T,"LI",{});var mh=n(Is);le=l(mh,"P",{});var Jt=n(le);mp=r(Jt,"When using Megatron-LM, use "),zs=l(Jt,"CODE",{});var fh=n(zs);fp=r(fh,"accelerator.save_state"),fh.forEach(a),_p=r(Jt," and "),Cs=l(Jt,"CODE",{});var _h=n(Cs);gp=r(_h,"accelerator.load_state"),_h.forEach(a),vp=r(Jt," for saving and loading checkpoints."),Jt.forEach(a),mh.forEach(a),wp=h(T),Ss=l(T,"LI",{});var gh=n(Ss);Ns=l(gh,"P",{});var vh=n(Ns);bp=r(vh,`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),vh.forEach(a),gh.forEach(a),T.forEach(a),Yr=h(e),G=l(e,"P",{});var Dt=n(G);yp=r(Dt,"a. Megatron-LM "),Mt=l(Dt,"A",{href:!0,rel:!0});var wh=n(Mt);kp=r(wh,"BertModel"),wh.forEach(a),Ep=r(Dt,` :
\u{1F917} transformers models with `),Gs=l(Dt,"CODE",{});var bh=n(Gs);Mp=r(bh,"megatron-bert"),bh.forEach(a),jp=r(Dt,` in config\u2019s model type, e.g.,
`),jt=l(Dt,"A",{href:!0,rel:!0});var yh=n(jt);Pp=r(yh,"MegatronBERT"),yh.forEach(a),Dt.forEach(a),Kr=h(e),R=l(e,"P",{});var At=n(R);Tp=r(At,"b. Megatron-LM "),Pt=l(At,"A",{href:!0,rel:!0});var kh=n(Pt);$p=r(kh,"GPTModel"),kh.forEach(a),Lp=r(At,` :
\u{1F917} transformers models with `),Rs=l(At,"CODE",{});var Eh=n(Rs);qp=r(Eh,"gpt2"),Eh.forEach(a),Dp=r(At,` in config\u2019s model type, e.g.,
`),Tt=l(At,"A",{href:!0,rel:!0});var Mh=n(Tt);Ap=r(Mh,"OpenAI GPT2"),Mh.forEach(a),At.forEach(a),Xr=h(e),x=l(e,"P",{});var ne=n(x);Op=r(ne,"c. Megatron-LM "),$t=l(ne,"A",{href:!0,rel:!0});var jh=n($t);xp=r(jh,"T5Model"),jh.forEach(a),Ip=r(ne,` :
\u{1F917} transformers models with `),Fs=l(ne,"CODE",{});var Ph=n(Fs);zp=r(Ph,"t5"),Ph.forEach(a),Cp=r(ne,` in  config\u2019s model type, e.g.,
`),Lt=l(ne,"A",{href:!0,rel:!0});var Th=n(Lt);Sp=r(Th,"T5"),Th.forEach(a),Np=r(ne,` and
`),qt=l(ne,"A",{href:!0,rel:!0});var $h=n(qt);Gp=r($h,"MT5"),$h.forEach(a),ne.forEach(a),this.h()},h(){c(X,"name","hf:doc:metadata"),c(X,"content",JSON.stringify(zh)),c(ie,"id","megatronlm"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#megatronlm"),c(J,"class","relative group"),c(je,"href","https://github.com/NVIDIA/Megatron-LM"),c(je,"rel","nofollow"),c(Pe,"href","https://arxiv.org/abs/2005.14165"),c(Pe,"rel","nofollow"),c(Te,"href","https://arxiv.org/pdf/1810.04805.pdf"),c(Te,"rel","nofollow"),c($e,"href","https://arxiv.org/abs/1910.10683"),c($e,"rel","nofollow"),c(Le,"href","https://github.com/NVIDIA/Megatron-LM"),c(Le,"rel","nofollow"),c(pe,"id","what-is-integrated"),c(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pe,"href","#what-is-integrated"),c(Z,"class","relative group"),c(De,"href","https://arxiv.org/pdf/1909.08053.pdf"),c(De,"rel","nofollow"),c(Ae,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#tensor-parallelism"),c(Ae,"rel","nofollow"),c(Oe,"href","https://arxiv.org/pdf/2104.04473.pdf"),c(Oe,"rel","nofollow"),c(xe,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#pipeline-parallelism"),c(xe,"rel","nofollow"),c(Ie,"href","https://arxiv.org/pdf/2205.05198.pdf"),c(Ie,"rel","nofollow"),c(ze,"href","https://arxiv.org/pdf/1910.02054.pdf"),c(ze,"rel","nofollow"),c(Ce,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#zero-data-parallelism"),c(Ce,"rel","nofollow"),c(Se,"href","https://arxiv.org/pdf/2205.05198.pdf"),c(Se,"rel","nofollow"),c(he,"id","prerequisites"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#prerequisites"),c(Q,"class","relative group"),c(Ge,"href","https://github.com/NVIDIA/apex#quick-start"),c(Ge,"rel","nofollow"),c(Re,"href","https://github.com/NVIDIA/Megatron-LM#setup"),c(Re,"rel","nofollow"),c(Be,"start","2"),c(We,"start","3"),c(He,"start","4"),c(ue,"id","accelerate-megatronlm-plugin"),c(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ue,"href","#accelerate-megatronlm-plugin"),c(ee,"class","relative group"),c(st,"start","2"),c(ot,"start","3"),c(nt,"start","4"),c(ge,"id","advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),c(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ge,"href","#advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),c(te,"class","relative group"),c(ut,"start","2"),c(mt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/arguments.py#L804"),c(mt,"rel","nofollow"),c(ve,"id","utility-for-checkpoint-reshaping-and-interoperability"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#utility-for-checkpoint-reshaping-and-interoperability"),c(ae,"class","relative group"),c(wt,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py"),c(wt,"rel","nofollow"),c(yt,"start","3"),c(be,"id","caveats"),c(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(be,"href","#caveats"),c(se,"class","relative group"),c(Mt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/bert_model.py"),c(Mt,"rel","nofollow"),c(jt,"href","https://huggingface.co/docs/transformers/model_doc/megatron-bert"),c(jt,"rel","nofollow"),c(Pt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/gpt_model.py"),c(Pt,"rel","nofollow"),c(Tt,"href","https://huggingface.co/docs/transformers/model_doc/gpt2"),c(Tt,"rel","nofollow"),c($t,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/t5_model.py"),c($t,"rel","nofollow"),c(Lt,"href","https://huggingface.co/docs/transformers/model_doc/t5"),c(Lt,"rel","nofollow"),c(qt,"href","https://huggingface.co/docs/transformers/model_doc/mt5"),c(qt,"rel","nofollow")},m(e,i){t(document.head,X),p(e,Bs,i),p(e,J,i),t(J,ie),t(ie,Zt),f(Me,Zt,null),t(J,mo),t(J,Qt),t(Qt,fo),p(e,Us,i),p(e,$,i),t($,je),t(je,_o),t($,go),t($,Pe),t(Pe,vo),t($,wo),t($,Te),t(Te,bo),t($,yo),t($,$e),t($e,ko),t($,Eo),t($,Le),t(Le,Mo),t($,jo),p(e,Ws,i),p(e,Z,i),t(Z,pe),t(pe,ea),f(qe,ea,null),t(Z,Po),t(Z,ta),t(ta,To),p(e,Vs,i),p(e,xt,i),t(xt,$o),p(e,Hs,i),p(e,j,i),t(j,Lo),t(j,aa),t(aa,qo),t(j,Do),t(j,sa),t(sa,Ao),t(j,Oo),t(j,ra),t(ra,xo),t(j,Io),t(j,De),t(De,zo),t(j,Co),t(j,Ae),t(Ae,So),t(j,No),p(e,Ys,i),p(e,E,i),t(E,Go),t(E,oa),t(oa,Ro),t(E,Fo),t(E,la),t(la,Bo),t(E,Uo),t(E,na),t(na,Wo),t(E,Vo),t(E,ia),t(ia,Ho),t(E,Yo),t(E,Oe),t(Oe,Ko),t(E,Xo),t(E,xe),t(xe,Jo),t(E,Zo),p(e,Ks,i),p(e,w,i),t(w,Qo),t(w,pa),t(pa,el),t(w,tl),t(w,ca),t(ca,al),t(w,sl),t(w,da),t(da,rl),t(w,ol),t(w,ha),t(ha,ll),t(w,nl),t(w,ua),t(ua,il),t(w,pl),t(w,ma),t(ma,cl),t(w,dl),t(w,fa),t(fa,hl),t(w,ul),t(w,_a),t(_a,ml),t(w,fl),t(w,ga),t(ga,_l),t(w,gl),t(w,Ie),t(Ie,vl),t(w,wl),p(e,Xs,i),p(e,I,i),t(I,bl),t(I,va),t(va,yl),t(I,kl),t(I,ze),t(ze,El),t(I,Ml),t(I,Ce),t(Ce,jl),t(I,Pl),p(e,Js,i),p(e,B,i),t(B,Tl),t(B,wa),t(wa,$l),t(B,Ll),t(B,Se),t(Se,ql),t(B,Dl),p(e,Zs,i),p(e,ce,i),t(ce,Al),t(ce,ba),t(ba,Ol),t(ce,xl),p(e,Qs,i),p(e,L,i),t(L,Il),t(L,ya),t(ya,zl),t(L,Cl),t(L,ka),t(ka,Sl),t(L,Nl),t(L,Ea),t(Ea,Gl),t(L,Rl),t(L,Ma),t(Ma,Fl),t(L,Bl),p(e,er,i),p(e,de,i),t(de,Ul),t(de,ja),t(ja,Wl),t(de,Vl),p(e,tr,i),p(e,Q,i),t(Q,he),t(he,Pa),f(Ne,Pa,null),t(Q,Hl),t(Q,Ta),t(Ta,Yl),p(e,ar,i),p(e,U,i),t(U,Kl),t(U,Ge),t(Ge,Xl),t(U,Jl),t(U,Re),t(Re,Zl),t(U,Ql),p(e,sr,i),p(e,It,i),t(It,en),p(e,rr,i),p(e,zt,i),t(zt,$a),t($a,tn),p(e,or,i),f(Fe,e,i),p(e,lr,i),p(e,Be,i),t(Be,La),t(La,an),p(e,nr,i),f(Ue,e,i),p(e,ir,i),p(e,We,i),t(We,qa),t(qa,sn),p(e,pr,i),f(Ve,e,i),p(e,cr,i),p(e,He,i),t(He,M),t(M,Da),t(Da,rn),t(M,on),t(M,Aa),t(Aa,ln),t(M,nn),f(Ye,M,null),t(M,pn),t(M,Ke),t(Ke,cn),t(Ke,Oa),t(Oa,dn),t(Ke,hn),t(M,un),f(Xe,M,null),t(M,mn),t(M,xa),t(xa,fn),t(M,_n),f(Je,M,null),p(e,dr,i),p(e,ee,i),t(ee,ue),t(ue,Ia),f(Ze,Ia,null),t(ee,gn),t(ee,za),t(za,vn),p(e,hr,i),p(e,me,i),t(me,wn),t(me,Ca),t(Ca,bn),t(me,yn),p(e,ur,i),f(Qe,e,i),p(e,mr,i),p(e,Ct,i),t(Ct,kn),p(e,fr,i),f(et,e,i),p(e,_r,i),p(e,fe,i),t(fe,En),t(fe,Sa),t(Sa,Mn),t(fe,jn),p(e,gr,i),p(e,St,i),t(St,tt),t(tt,Pn),t(tt,Na),t(Na,Tn),t(tt,$n),p(e,vr,i),f(at,e,i),p(e,wr,i),p(e,st,i),t(st,Ga),t(Ga,Ln),p(e,br,i),f(rt,e,i),p(e,yr,i),p(e,ot,i),t(ot,Ra),t(Ra,qn),p(e,kr,i),f(lt,e,i),p(e,Er,i),p(e,nt,i),t(nt,Nt),t(Nt,Dn),t(Nt,Fa),t(Fa,An),p(e,Mr,i),f(it,e,i),p(e,jr,i),p(e,W,i),t(W,On),t(W,Ba),t(Ba,xn),t(W,In),t(W,Ua),t(Ua,zn),t(W,Cn),p(e,Pr,i),f(pt,e,i),p(e,Tr,i),p(e,Gt,i),t(Gt,Sn),p(e,$r,i),f(ct,e,i),p(e,Lr,i),p(e,_e,i),t(_e,Nn),t(_e,Wa),t(Wa,Gn),t(_e,Rn),p(e,qr,i),p(e,te,i),t(te,ge),t(ge,Va),f(dt,Va,null),t(te,Fn),t(te,Ha),t(Ha,Bn),p(e,Dr,i),p(e,Rt,i),t(Rt,Un),p(e,Ar,i),p(e,Ft,i),t(Ft,O),t(O,Wn),t(O,Ya),t(Ya,Vn),t(O,Hn),t(O,Ka),t(Ka,Yn),t(O,Kn),t(O,Xa),t(Xa,Xn),t(O,Jn),t(O,Ja),t(Ja,Zn),t(O,Qn),p(e,Or,i),f(ht,e,i),p(e,xr,i),p(e,ut,i),t(ut,Za),t(Za,ei),p(e,Ir,i),p(e,q,i),t(q,ti),t(q,Qa),t(Qa,ai),t(q,si),t(q,es),t(es,ri),t(q,oi),t(q,ts),t(ts,li),t(q,ni),t(q,mt),t(mt,ii),t(q,pi),p(e,zr,i),f(ft,e,i),p(e,Cr,i),p(e,V,i),t(V,ci),t(V,as),t(as,di),t(V,hi),t(V,ss),t(ss,ui),t(V,mi),p(e,Sr,i),f(_t,e,i),p(e,Nr,i),p(e,P,i),t(P,fi),t(P,rs),t(rs,_i),t(P,gi),t(P,os),t(os,vi),t(P,wi),t(P,ls),t(ls,bi),t(P,yi),t(P,ns),t(ns,ki),t(P,Ei),t(P,is),t(is,Mi),t(P,ji),p(e,Gr,i),f(gt,e,i),p(e,Rr,i),p(e,ae,i),t(ae,ve),t(ve,ps),f(vt,ps,null),t(ae,Pi),t(ae,cs),t(cs,Ti),p(e,Fr,i),p(e,we,i),t(we,ds),t(ds,Bt),t(Bt,$i),t(Bt,wt),t(wt,Li),t(we,qi),t(we,hs),t(hs,us),t(us,Di),p(e,Br,i),f(bt,e,i),p(e,Ur,i),p(e,yt,i),t(yt,S),t(S,Ai),t(S,ms),t(ms,Oi),t(S,xi),t(S,fs),t(fs,Ii),t(S,zi),t(S,_s),t(_s,Ci),t(S,Si),p(e,Wr,i),f(kt,e,i),p(e,Vr,i),p(e,se,i),t(se,be),t(be,gs),f(Et,gs,null),t(se,Ni),t(se,vs),t(vs,Gi),p(e,Hr,i),p(e,y,i),t(y,ws),t(ws,bs),t(bs,Ri),t(y,Fi),t(y,ys),t(ys,re),t(re,Bi),t(re,ks),t(ks,Ui),t(re,Wi),t(re,Es),t(Es,Vi),t(re,Hi),t(y,Yi),t(y,Ms),t(Ms,N),t(N,Ki),t(N,js),t(js,Xi),t(N,Ji),t(N,Ps),t(Ps,Zi),t(N,Qi),t(N,Ts),t(Ts,ep),t(N,tp),t(y,ap),t(y,$s),t($s,oe),t(oe,sp),t(oe,Ls),t(Ls,rp),t(oe,op),t(oe,qs),t(qs,lp),t(oe,np),t(y,ip),t(y,Ds),t(Ds,As),t(As,pp),t(y,cp),t(y,Os),t(Os,Ut),t(Ut,xs),t(xs,dp),t(Ut,hp),t(y,up),t(y,Is),t(Is,le),t(le,mp),t(le,zs),t(zs,fp),t(le,_p),t(le,Cs),t(Cs,gp),t(le,vp),t(y,wp),t(y,Ss),t(Ss,Ns),t(Ns,bp),p(e,Yr,i),p(e,G,i),t(G,yp),t(G,Mt),t(Mt,kp),t(G,Ep),t(G,Gs),t(Gs,Mp),t(G,jp),t(G,jt),t(jt,Pp),p(e,Kr,i),p(e,R,i),t(R,Tp),t(R,Pt),t(Pt,$p),t(R,Lp),t(R,Rs),t(Rs,qp),t(R,Dp),t(R,Tt),t(Tt,Ap),p(e,Xr,i),p(e,x,i),t(x,Op),t(x,$t),t($t,xp),t(x,Ip),t(x,Fs),t(Fs,zp),t(x,Cp),t(x,Lt),t(Lt,Sp),t(x,Np),t(x,qt),t(qt,Gp),Jr=!0},p:Oh,i(e){Jr||(_(Me.$$.fragment,e),_(qe.$$.fragment,e),_(Ne.$$.fragment,e),_(Fe.$$.fragment,e),_(Ue.$$.fragment,e),_(Ve.$$.fragment,e),_(Ye.$$.fragment,e),_(Xe.$$.fragment,e),_(Je.$$.fragment,e),_(Ze.$$.fragment,e),_(Qe.$$.fragment,e),_(et.$$.fragment,e),_(at.$$.fragment,e),_(rt.$$.fragment,e),_(lt.$$.fragment,e),_(it.$$.fragment,e),_(pt.$$.fragment,e),_(ct.$$.fragment,e),_(dt.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(_t.$$.fragment,e),_(gt.$$.fragment,e),_(vt.$$.fragment,e),_(bt.$$.fragment,e),_(kt.$$.fragment,e),_(Et.$$.fragment,e),Jr=!0)},o(e){g(Me.$$.fragment,e),g(qe.$$.fragment,e),g(Ne.$$.fragment,e),g(Fe.$$.fragment,e),g(Ue.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Xe.$$.fragment,e),g(Je.$$.fragment,e),g(Ze.$$.fragment,e),g(Qe.$$.fragment,e),g(et.$$.fragment,e),g(at.$$.fragment,e),g(rt.$$.fragment,e),g(lt.$$.fragment,e),g(it.$$.fragment,e),g(pt.$$.fragment,e),g(ct.$$.fragment,e),g(dt.$$.fragment,e),g(ht.$$.fragment,e),g(ft.$$.fragment,e),g(_t.$$.fragment,e),g(gt.$$.fragment,e),g(vt.$$.fragment,e),g(bt.$$.fragment,e),g(kt.$$.fragment,e),g(Et.$$.fragment,e),Jr=!1},d(e){a(X),e&&a(Bs),e&&a(J),v(Me),e&&a(Us),e&&a($),e&&a(Ws),e&&a(Z),v(qe),e&&a(Vs),e&&a(xt),e&&a(Hs),e&&a(j),e&&a(Ys),e&&a(E),e&&a(Ks),e&&a(w),e&&a(Xs),e&&a(I),e&&a(Js),e&&a(B),e&&a(Zs),e&&a(ce),e&&a(Qs),e&&a(L),e&&a(er),e&&a(de),e&&a(tr),e&&a(Q),v(Ne),e&&a(ar),e&&a(U),e&&a(sr),e&&a(It),e&&a(rr),e&&a(zt),e&&a(or),v(Fe,e),e&&a(lr),e&&a(Be),e&&a(nr),v(Ue,e),e&&a(ir),e&&a(We),e&&a(pr),v(Ve,e),e&&a(cr),e&&a(He),v(Ye),v(Xe),v(Je),e&&a(dr),e&&a(ee),v(Ze),e&&a(hr),e&&a(me),e&&a(ur),v(Qe,e),e&&a(mr),e&&a(Ct),e&&a(fr),v(et,e),e&&a(_r),e&&a(fe),e&&a(gr),e&&a(St),e&&a(vr),v(at,e),e&&a(wr),e&&a(st),e&&a(br),v(rt,e),e&&a(yr),e&&a(ot),e&&a(kr),v(lt,e),e&&a(Er),e&&a(nt),e&&a(Mr),v(it,e),e&&a(jr),e&&a(W),e&&a(Pr),v(pt,e),e&&a(Tr),e&&a(Gt),e&&a($r),v(ct,e),e&&a(Lr),e&&a(_e),e&&a(qr),e&&a(te),v(dt),e&&a(Dr),e&&a(Rt),e&&a(Ar),e&&a(Ft),e&&a(Or),v(ht,e),e&&a(xr),e&&a(ut),e&&a(Ir),e&&a(q),e&&a(zr),v(ft,e),e&&a(Cr),e&&a(V),e&&a(Sr),v(_t,e),e&&a(Nr),e&&a(P),e&&a(Gr),v(gt,e),e&&a(Rr),e&&a(ae),v(vt),e&&a(Fr),e&&a(we),e&&a(Br),v(bt,e),e&&a(Ur),e&&a(yt),e&&a(Wr),v(kt,e),e&&a(Vr),e&&a(se),v(Et),e&&a(Hr),e&&a(y),e&&a(Yr),e&&a(G),e&&a(Kr),e&&a(R),e&&a(Xr),e&&a(x)}}}const zh={local:"megatronlm",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"prerequisites",title:"Pre-Requisites "},{local:"accelerate-megatronlm-plugin",title:"Accelerate Megatron-LM Plugin"},{local:"advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets",title:"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"},{local:"utility-for-checkpoint-reshaping-and-interoperability",title:"Utility for Checkpoint reshaping and interoperability"},{local:"caveats",title:"Caveats"}],title:"Megatron-LM"};function Ch(Up){return xh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rh extends Lh{constructor(X){super();qh(this,X,Ch,Ih,Dh,{})}}export{Rh as default,zh as metadata};
