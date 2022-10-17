import{S as nh,i as ih,s as ph,e as o,k as d,w as u,t as s,M as ch,c as l,d as a,m as h,a as n,x as f,h as r,b as c,G as t,g as p,y as _,L as dh,q as g,o as v,B as w,v as hh}from"../../chunks/vendor-hf-doc-builder.js";import{I as $t}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as E}from"../../chunks/CodeBlock-hf-doc-builder.js";function mh(jp){let Y,zs,K,le,Ht,ke,oo,Yt,lo,Cs,T,Ee,no,io,Me,po,co,je,ho,mo,Pe,uo,fo,Te,_o,go,Is,X,ne,Kt,$e,vo,Xt,wo,Ss,Lt,bo,Ns,M,yo,Jt,ko,Eo,Zt,Mo,jo,Qt,Po,To,Le,$o,Lo,De,Do,Oo,Gs,k,qo,ea,xo,Ao,ta,zo,Co,aa,Io,So,sa,No,Go,Oe,Fo,Ro,qe,Bo,Uo,Fs,m,Wo,ra,Vo,Ho,oa,Yo,Ko,la,Xo,Jo,na,Zo,Qo,ia,el,tl,pa,al,sl,ca,rl,ol,da,ll,nl,ha,il,pl,xe,cl,dl,Rs,x,hl,ma,ml,ul,Ae,fl,_l,ze,gl,vl,Bs,F,wl,ua,bl,yl,Ce,kl,El,Us,ie,Ml,fa,jl,Pl,Ws,$,Tl,_a,$l,Ll,ga,Dl,Ol,va,ql,xl,wa,Al,zl,Vs,pe,Cl,ba,Il,Sl,Hs,J,ce,ya,Ie,Nl,ka,Gl,Ys,R,Fl,Se,Rl,Bl,Ne,Ul,Wl,Ks,Dt,Vl,Xs,Ot,Ea,Hl,Js,Ge,Zs,Fe,Ma,Yl,Qs,Re,er,Be,ja,Kl,tr,Ue,ar,We,Pa,Xl,sr,Ve,rr,Z,de,Ta,He,Jl,$a,Zl,or,he,Ql,La,en,tn,lr,Ye,nr,qt,an,ir,Ke,pr,me,sn,Da,rn,on,cr,xt,Xe,ln,Oa,nn,pn,dr,Je,hr,Ze,qa,cn,mr,Qe,ur,et,xa,dn,fr,tt,_r,at,At,hn,Aa,mn,gr,st,vr,B,un,za,fn,_n,Ca,gn,vn,wr,rt,br,zt,wn,yr,ot,kr,ue,bn,Ia,yn,kn,Er,Q,fe,Sa,lt,En,Na,Mn,Mr,Ct,jn,jr,It,O,Pn,Ga,Tn,$n,Fa,Ln,Dn,Ra,On,qn,Ba,xn,An,Pr,nt,Tr,it,Ua,zn,$r,L,Cn,Wa,In,Sn,Va,Nn,Gn,Ha,Fn,Rn,pt,Bn,Un,Lr,ct,Dr,U,Wn,Ya,Vn,Hn,Ka,Yn,Kn,Or,dt,qr,j,Xn,Xa,Jn,Zn,Ja,Qn,ei,Za,ti,ai,Qa,si,ri,es,oi,li,xr,ht,Ar,ee,_e,ts,mt,ni,as,ii,zr,ge,ss,St,pi,ut,ci,di,rs,os,hi,Cr,ft,Ir,_t,C,mi,ls,ui,fi,ns,_i,gi,is,vi,wi,Sr,gt,Nr,te,ve,ps,vt,bi,cs,yi,Gr,y,ds,hs,ki,Ei,ms,ae,Mi,us,ji,Pi,fs,Ti,$i,Li,_s,I,Di,gs,Oi,qi,vs,xi,Ai,ws,zi,Ci,Ii,bs,se,Si,ys,Ni,Gi,ks,Fi,Ri,Bi,Es,Ms,Ui,Wi,js,Nt,Ps,Vi,Hi,Yi,Ts,re,Ki,$s,Xi,Ji,Ls,Zi,Qi,ep,Ds,Os,tp,Fr,S,ap,wt,sp,rp,qs,op,lp,bt,np,Rr,N,ip,yt,pp,cp,xs,dp,hp,kt,mp,Br,q,up,Et,fp,_p,As,gp,vp,Mt,wp,bp,jt,yp,Ur;return ke=new $t({}),$e=new $t({}),Ie=new $t({}),Ge=new E({props:{code:"conda create --name ml",highlighted:'conda <span class="hljs-built_in">create</span> <span class="hljs-comment">--name ml</span>'}}),Re=new E({props:{code:"conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",highlighted:'<span class="hljs-attribute">conda</span> install pytorch torchvision torchaudio cudatoolkit=<span class="hljs-number">11</span>.<span class="hljs-number">3</span> -c pytorch'}}),Ue=new E({props:{code:`git clone https://github.com/NVIDIA/apex
cd apex
pip install -v --disable-pip-version-check --no-cache-dir --global-option="--cpp_ext" --global-option="--cuda_ext" ./
cd ..`,highlighted:`git clone https:<span class="hljs-string">//github.com/NVIDIA/apex</span>
<span class="hljs-keyword">cd</span> apex
pip install -v <span class="hljs-params">--disable-pip-version-check</span> <span class="hljs-params">--no-cache-dir</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cpp_ext&quot;</span> <span class="hljs-params">--global-option=</span><span class="hljs-string">&quot;--cuda_ext&quot;</span> <span class="hljs-string">./</span>
<span class="hljs-keyword">cd</span> <span class="hljs-string">..</span>`}}),Ve=new E({props:{code:"pip install git+https://github.com/huggingface/Megatron-LM.git",highlighted:'pip install git+https:<span class="hljs-regexp">//gi</span>thub.com<span class="hljs-regexp">/huggingface/</span>Megatron-LM.git'}}),He=new $t({}),Ye=new E({props:{code:`:~$ accelerate config --config_file "megatron_gpt_config.yaml"
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
How many GPU(s) should be used for distributed training? [1]:4
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
How many GPU(s) should be used <span class="hljs-keyword">for</span> distributed training? [1]:4
Do you wish to use FP16 or BF16 (mixed precision)? [NO/fp16/bf16]: bf16`}}),Ke=new E({props:{code:`~$ cat megatron_gpt_config.yaml 
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
num_processes: 4
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
<span class="hljs-attr">num_processes:</span> <span class="hljs-number">4</span>
<span class="hljs-attr">rdzv_backend:</span> <span class="hljs-string">static</span>
<span class="hljs-attr">same_network:</span> <span class="hljs-literal">true</span>
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),Je=new E({props:{code:`from accelerate.utils import MegatronLMDummyScheduler

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
    )`}}),Qe=new E({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
else:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`,highlighted:`<span class="hljs-keyword">if</span> accelerator.distributed_type == DistributedType.MEGATRON_LM:
    total_batch_size = accelerator.state.megatron_lm_plugin.global_batch_size
<span class="hljs-keyword">else</span>:
    total_batch_size = args.per_device_train_batch_size * accelerator.num_processes * args.gradient_accumulation_steps`}}),tt=new E({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
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
    losses = torch.cat(losses)`}}),st=new E({props:{code:`if accelerator.distributed_type == DistributedType.MEGATRON_LM:
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
    )`}}),rt=new E({props:{code:`accelerate launch --config_file megatron_gpt_config.yaml \\
examples/by_feature/megatron_lm_gpt_pretraining.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name wikitext \\
--dataset_config_name wikitext-2-raw-v1 \\
--block_size 1024 \\
--learning_rate 5e-5 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
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
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 5 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span> \\
--output_dir <span class="hljs-string">&quot;awesome_model&quot;</span>`}}),ot=new E({props:{code:"done with compiling and loading fused kernels. Compilation time: 3.569 seconds",highlighted:`Loading extension module fused_dense_cuda...
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
100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 245/245 [05:27&lt;00:00,  1.28s/it]`}}),lt=new $t({}),nt=new E({props:{code:`from accelerate.utils import MegatronLMDummyScheduler, GPTTrainStep, avg_losses_across_data_parallel_group

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
    }`}}),ct=new E({props:{code:`from accelerate.utils import MegatronLMDummyDataLoader

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
accelerator.state.megatron_lm_plugin.megatron_dataset_flag = <span class="hljs-literal">True</span>`}}),dt=new E({props:{code:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`,highlighted:`model, optimizer, lr_scheduler, train_dataloader, eval_dataloader, _ = accelerator.prepare(
    model, optimizer, lr_scheduler, megatron_dataloader, megatron_dataloader, megatron_dataloader
)`}}),ht=new E({props:{code:`while completed_steps < args.max_train_steps:
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
                outputs = model(**batch)`}}),mt=new $t({}),ft=new E({props:{code:`python checkpoint_reshaping_and_interoperability.py \\
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
--print-checkpoint-structure`}}),gt=new E({props:{code:`python checkpoint_utils/megatgron_gpt2/checkpoint_reshaping_and_interoperability.py \\
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
--print-checkpoint-structure`}}),vt=new $t({}),{c(){Y=o("meta"),zs=d(),K=o("h1"),le=o("a"),Ht=o("span"),u(ke.$$.fragment),oo=d(),Yt=o("span"),lo=s("Megatron-LM"),Cs=d(),T=o("p"),Ee=o("a"),no=s("Megatron-LM"),io=s(` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),Me=o("a"),po=s("GPT"),co=s(" (Decoder Only), "),je=o("a"),ho=s("BERT"),mo=s(" (Encoder Only) and "),Pe=o("a"),uo=s("T5"),fo=s(` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),Te=o("a"),_o=s("repo"),go=s("."),Is=d(),X=o("h2"),ne=o("a"),Kt=o("span"),u($e.$$.fragment),vo=d(),Xt=o("span"),wo=s("What is integrated?"),Ss=d(),Lt=o("p"),bo=s(`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),Ns=d(),M=o("p"),yo=s("a. "),Jt=o("strong"),ko=s("Tensor Parallelism (TP)"),Eo=s(`: Reduces memory footprint without much additional communication on intra-node ranks.
Each tensor is split into multiple chunks with each shard residing on separate GPU. At each step, the same mini-batch of data is processed
independently and in parallel by each shard followed by syncing across all GPUs (`),Zt=o("code"),Mo=s("all-reduce"),jo=s(` operation).
In a simple transformer layer, this leads to 2 `),Qt=o("code"),Po=s("all-reduces"),To=s(` in the forward path and 2 in the backward path.
For more details, please refer research paper `),Le=o("a"),$o=s(`Megatron-LM: Training Multi-Billion Parameter Language Models Using
Model Parallelism`),Lo=s(` and
this section of \u{1F917} blogpost `),De=o("a"),Do=s("The Technology Behind BLOOM Training"),Oo=s("."),Gs=d(),k=o("p"),qo=s("b. "),ea=o("strong"),xo=s("Pipeline Parallelism (PP)"),Ao=s(`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages. For example, if a model has `),ta=o("code"),zo=s("24"),Co=s(" layers and we have "),aa=o("code"),Io=s("4"),So=s(` GPUs for
pipeline parallelism, each GPU will have `),sa=o("code"),No=s("6"),Go=s(` layers (24/4). For more details on schedules to reduce the idle time of PP,
please refer to the research paper `),Oe=o("a"),Fo=s(`Efficient Large-Scale Language Model Training on GPU Clusters
Using Megatron-LM`),Ro=s(` and
this section of \u{1F917} blogpost `),qe=o("a"),Bo=s("The Technology Behind BLOOM Training"),Uo=s("."),Fs=d(),m=o("p"),Wo=s("c. "),ra=o("strong"),Vo=s("Sequence Parallelism (SP)"),Ho=s(`: Reduces memory footprint without any additional communication. Only applicable when using TP.
It reduces activation memory required as it prevents the same copies to be on the tensor parallel ranks
post `),oa=o("code"),Yo=s("all-reduce"),Ko=s(" by replacing then with "),la=o("code"),Xo=s("reduce-scatter"),Jo=s(" and "),na=o("code"),Zo=s("no-op"),Qo=s(" operation would be replaced by "),ia=o("code"),el=s("all-gather"),tl=s(`.
As `),pa=o("code"),al=s("all-reduce = reduce-scatter + all-gather"),sl=s(`, this saves a ton of activation memory at no added communication cost.
To put it simply, it shards the outputs of each transformer layer along sequence dimension, e.g.,
if the sequence length is `),ca=o("code"),rl=s("1024"),ol=s(" and the TP size is "),da=o("code"),ll=s("4"),nl=s(", each GPU will have "),ha=o("code"),il=s("256"),pl=s(` tokens (1024/4) for each sample.
This increases the batch size that can be supported for training. For more details, please refer to the research paper
`),xe=o("a"),cl=s("Reducing Activation Recomputation in Large Transformer Models"),dl=s("."),Rs=d(),x=o("p"),hl=s("d. "),ma=o("strong"),ml=s("Data Parallelism (DP)"),ul=s(` via Distributed Optimizer: Reduces the memory footprint by sharding optimizer states and gradients across DP ranks
(versus the traditional method of replicating the optimizer state across data parallel ranks).
For example, when using Adam optimizer with mixed-precision training, each parameter accounts for 12 bytes of memory.
This gets distributed equally across the GPUs, i.e., each parameter would account for 3 bytes (12/4) if we have 4 GPUs.
For more details, please refer the research paper `),Ae=o("a"),fl=s(`ZeRO: Memory Optimizations Toward Training Trillion
Parameter Models`),_l=s(` and following section of \u{1F917} blog
`),ze=o("a"),gl=s("The Technology Behind BLOOM Training"),vl=s("."),Bs=d(),F=o("p"),wl=s("e. "),ua=o("strong"),bl=s("Selective Activation Recomputation"),yl=s(`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.
For example, for GPT-3, this leads to 70% reduction in required memory for activations at the expense of
only 2.7% FLOPs overhead for recomputation of activations. For more details, please refer to the research paper
`),Ce=o("a"),kl=s("Reducing Activation Recomputation in Large Transformer Models"),El=s("."),Us=d(),ie=o("p"),Ml=s("f. "),fa=o("strong"),jl=s("Fused Kernels"),Pl=s(`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),Ws=d(),$=o("p"),Tl=s("g. "),_a=o("strong"),$l=s("Support for Indexed datasets"),Ll=s(": Efficient binary format of datasets for large scale training. Support for the "),ga=o("code"),Dl=s("mmap"),Ol=s(", "),va=o("code"),ql=s("cached"),xl=s(" index file and the "),wa=o("code"),Al=s("lazy"),zl=s(" loader format."),Vs=d(),pe=o("p"),Cl=s("h. "),ba=o("strong"),Il=s("Checkpoint reshaping and interoperability"),Sl=s(`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),Hs=d(),J=o("h2"),ce=o("a"),ya=o("span"),u(Ie.$$.fragment),Nl=d(),ka=o("span"),Gl=s("Pre-Requisites"),Ys=d(),R=o("p"),Fl=s("You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),Se=o("a"),Rl=s("APEX"),Bl=s(` releases and the nltk library.
See `),Ne=o("a"),Ul=s("documentation"),Wl=s(` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),Ks=d(),Dt=o("p"),Vl=s("Below is a step-by-step method to set up the conda environment:"),Xs=d(),Ot=o("ol"),Ea=o("li"),Hl=s("Create a virtual environment"),Js=d(),u(Ge.$$.fragment),Zs=d(),Fe=o("ol"),Ma=o("li"),Yl=s("Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),Qs=d(),u(Re.$$.fragment),er=d(),Be=o("ol"),ja=o("li"),Kl=s("Install Nvidia APEX"),tr=d(),u(Ue.$$.fragment),ar=d(),We=o("ol"),Pa=o("li"),Xl=s("Installing Megatron-LM"),sr=d(),u(Ve.$$.fragment),rr=d(),Z=o("h2"),de=o("a"),Ta=o("span"),u(He.$$.fragment),Jl=d(),$a=o("span"),Zl=s("Accelerate Megatron-LM Plugin"),or=d(),he=o("p"),Ql=s("Important features are directly supported via the "),La=o("code"),en=s("accelerate config"),tn=s(` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),lr=d(),u(Ye.$$.fragment),nr=d(),qt=o("p"),an=s("The resulting config is shown below:"),ir=d(),u(Ke.$$.fragment),pr=d(),me=o("p"),sn=s("We will take the example of GPT pre-training. The minimal changes required to the official "),Da=o("code"),rn=s("run_clm_no_trainer.py"),on=s(`
to use Megatron-LM are as follows:`),cr=d(),xt=o("ol"),Xe=o("li"),ln=s(`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),Oa=o("code"),nn=s("accelerate.utils.MegatronLMDummyScheduler"),pn=s(`.
Example is given below:`),dr=d(),u(Je.$$.fragment),hr=d(),Ze=o("ol"),qa=o("li"),cn=s(`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),mr=d(),u(Qe.$$.fragment),ur=d(),et=o("ol"),xa=o("li"),dn=s("When using Megatron-LM, the losses are already averaged across the data parallel group"),fr=d(),u(tt.$$.fragment),_r=d(),at=o("ol"),At=o("li"),hn=s("For Megatron-LM, we need to save the model using "),Aa=o("code"),mn=s("accelerator.save_state"),gr=d(),u(st.$$.fragment),vr=d(),B=o("p"),un=s("That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),za=o("code"),fn=s("accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),_n=s(`.
Let\u2019s run it for `),Ca=o("code"),gn=s("gpt-large"),vn=s(" model architecture using 4 A100-80GB GPUs."),wr=d(),u(rt.$$.fragment),br=d(),zt=o("p"),wn=s("Below are some important excerpts from the output logs:"),yr=d(),u(ot.$$.fragment),kr=d(),ue=o("p"),bn=s("There are a large number of other options/features that one can set using "),Ia=o("code"),yn=s("accelerate.utils.MegatronLMPlugin"),kn=s("."),Er=d(),Q=o("h2"),fe=o("a"),Sa=o("span"),u(lt.$$.fragment),En=d(),Na=o("span"),Mn=s("Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),Mr=d(),Ct=o("p"),jn=s("For leveraging more features, please go through below details."),jr=d(),It=o("ol"),O=o("li"),Pn=s(`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),Ga=o("code"),Tn=s("accelerate.utils.AbstractTrainStep"),$n=s(` or inherit from their corresponding children
`),Fa=o("code"),Ln=s("accelerate.utils.GPTTrainStep"),Dn=s(", "),Ra=o("code"),On=s("accelerate.utils.BertTrainStep"),qn=s(" or "),Ba=o("code"),xn=s("accelerate.utils.T5TrainStep"),An=s("."),Pr=d(),u(nt.$$.fragment),Tr=d(),it=o("ol"),Ua=o("li"),zn=s(`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),$r=d(),L=o("p"),Cn=s("a. For Megatron-LM indexed datasets, we need to use "),Wa=o("code"),In=s("MegatronLMDummyDataLoader"),Sn=s(`
and pass the required dataset args to it such as `),Va=o("code"),Nn=s("data_path"),Gn=s(", "),Ha=o("code"),Fn=s("seq_length"),Rn=s(` etc.
See `),pt=o("a"),Bn=s("here"),Un=s(" for the list of available args."),Lr=d(),u(ct.$$.fragment),Dr=d(),U=o("p"),Wn=s("b. "),Ya=o("code"),Vn=s("megatron_dataloader"),Hn=s(` is repeated 3 times to get training, validation and test dataloaders
as per the `),Ka=o("code"),Yn=s("args.splits_string"),Kn=s(" proportions"),Or=d(),u(dt.$$.fragment),qr=d(),j=o("p"),Xn=s(`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),Xa=o("code"),Jn=s("None"),Zn=s(` else provide empty dict
As such, we loop using `),Ja=o("code"),Qn=s("while"),ei=s(" loop and break when "),Za=o("code"),ti=s("completed_steps"),ai=s(" is equal to "),Qa=o("code"),si=s("args.max_train_steps"),ri=s(`
This is similar to the Megatron-LM setup wherein user has to provide `),es=o("code"),oi=s("max_train_steps"),li=s(` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),xr=d(),u(ht.$$.fragment),Ar=d(),ee=o("h2"),_e=o("a"),ts=o("span"),u(mt.$$.fragment),ni=d(),as=o("span"),ii=s("Utility for Checkpoint reshaping and interoperability"),zr=d(),ge=o("ol"),ss=o("li"),St=o("p"),pi=s(`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),ut=o("a"),ci=s("checkpoint_reshaping_and_interoperability.py"),di=d(),rs=o("li"),os=o("p"),hi=s("Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),Cr=d(),u(ft.$$.fragment),Ir=d(),_t=o("ol"),C=o("li"),mi=s("Conversion of checkpoint from transformers to megatron with "),ls=o("code"),ui=s("tp_size=2"),fi=s(", "),ns=o("code"),_i=s("pp_size=2"),gi=s(" and "),is=o("code"),vi=s("dp_size=2"),wi=s("."),Sr=d(),u(gt.$$.fragment),Nr=d(),te=o("h2"),ve=o("a"),ps=o("span"),u(vt.$$.fragment),bi=d(),cs=o("span"),yi=s("Caveats"),Gr=d(),y=o("ol"),ds=o("li"),hs=o("p"),ki=s(`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Ei=d(),ms=o("li"),ae=o("p"),Mi=s(`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),us=o("code"),ji=s("model(**batch_data)"),Pi=s(` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),fs=o("code"),Ti=s("perplexity"),$i=s(" using the loss."),Li=d(),_s=o("li"),I=o("p"),Di=s(`The main process is the last rank as the losses are available in the last stage of pipeline.
`),gs=o("code"),Oi=s("accelerator.is_main_process"),qi=s(" and "),vs=o("code"),xi=s("accelerator.is_local_main_process"),Ai=s(" return "),ws=o("code"),zi=s("True"),Ci=s(` for last rank when using
Megatron-LM integration.`),Ii=d(),bs=o("li"),se=o("p"),Si=s("In "),ys=o("code"),Ni=s("accelerator.prepare"),Gi=s(` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),ks=o("code"),Fi=s("accelerator.load_state"),Ri=s(" to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),Bi=d(),Es=o("li"),Ms=o("p"),Ui=s(`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),Wi=d(),js=o("li"),Nt=o("p"),Ps=o("code"),Vi=s("gradient_accumulation_steps"),Hi=s(` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),Yi=d(),Ts=o("li"),re=o("p"),Ki=s("When using Megatron-LM, use "),$s=o("code"),Xi=s("accelerator.save_state"),Ji=s(" and "),Ls=o("code"),Zi=s("accelerator.load_state"),Qi=s(" for saving and loading checkpoints."),ep=d(),Ds=o("li"),Os=o("p"),tp=s(`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),Fr=d(),S=o("p"),ap=s("a. Megatron-LM "),wt=o("a"),sp=s("BertModel"),rp=s(` :
\u{1F917} transformers models with `),qs=o("code"),op=s("megatron-bert"),lp=s(` in config\u2019s model type, e.g.,
`),bt=o("a"),np=s("MegatronBERT"),Rr=d(),N=o("p"),ip=s("b. Megatron-LM "),yt=o("a"),pp=s("GPTModel"),cp=s(` :
\u{1F917} transformers models with `),xs=o("code"),dp=s("gpt2"),hp=s(` in config\u2019s model type, e.g.,
`),kt=o("a"),mp=s("OpenAI GPT2"),Br=d(),q=o("p"),up=s("c. Megatron-LM "),Et=o("a"),fp=s("T5Model"),_p=s(` :
\u{1F917} transformers models with `),As=o("code"),gp=s("t5"),vp=s(` in  config\u2019s model type, e.g.,
`),Mt=o("a"),wp=s("T5"),bp=s(` and
`),jt=o("a"),yp=s("MT5"),this.h()},l(e){const i=ch('[data-svelte="svelte-1phssyn"]',document.head);Y=l(i,"META",{name:!0,content:!0}),i.forEach(a),zs=h(e),K=l(e,"H1",{class:!0});var Wr=n(K);le=l(Wr,"A",{id:!0,class:!0,href:!0});var Pp=n(le);Ht=l(Pp,"SPAN",{});var Tp=n(Ht);f(ke.$$.fragment,Tp),Tp.forEach(a),Pp.forEach(a),oo=h(Wr),Yt=l(Wr,"SPAN",{});var $p=n(Yt);lo=r($p,"Megatron-LM"),$p.forEach(a),Wr.forEach(a),Cs=h(e),T=l(e,"P",{});var G=n(T);Ee=l(G,"A",{href:!0,rel:!0});var Lp=n(Ee);no=r(Lp,"Megatron-LM"),Lp.forEach(a),io=r(G,` enables training large transformer language models at scale.
It provides efficient tensor, pipeline and sequence based model parallelism for pre-training transformer based
Language Models such as `),Me=l(G,"A",{href:!0,rel:!0});var Dp=n(Me);po=r(Dp,"GPT"),Dp.forEach(a),co=r(G," (Decoder Only), "),je=l(G,"A",{href:!0,rel:!0});var Op=n(je);ho=r(Op,"BERT"),Op.forEach(a),mo=r(G," (Encoder Only) and "),Pe=l(G,"A",{href:!0,rel:!0});var qp=n(Pe);uo=r(qp,"T5"),qp.forEach(a),fo=r(G,` (Encoder-Decoder).
For detailed information and how things work behind the scene please refer the github `),Te=l(G,"A",{href:!0,rel:!0});var xp=n(Te);_o=r(xp,"repo"),xp.forEach(a),go=r(G,"."),G.forEach(a),Is=h(e),X=l(e,"H2",{class:!0});var Vr=n(X);ne=l(Vr,"A",{id:!0,class:!0,href:!0});var Ap=n(ne);Kt=l(Ap,"SPAN",{});var zp=n(Kt);f($e.$$.fragment,zp),zp.forEach(a),Ap.forEach(a),vo=h(Vr),Xt=l(Vr,"SPAN",{});var Cp=n(Xt);wo=r(Cp,"What is integrated?"),Cp.forEach(a),Vr.forEach(a),Ss=h(e),Lt=l(e,"P",{});var Ip=n(Lt);bo=r(Ip,`Accelerate integrates following feature of Megatron-LM to enable large scale pre-training/finetuning
of BERT (Encoder), GPT (Decoder) or T5 models (Encoder and Decoder):`),Ip.forEach(a),Ns=h(e),M=l(e,"P",{});var A=n(M);yo=r(A,"a. "),Jt=l(A,"STRONG",{});var Sp=n(Jt);ko=r(Sp,"Tensor Parallelism (TP)"),Sp.forEach(a),Eo=r(A,`: Reduces memory footprint without much additional communication on intra-node ranks.
Each tensor is split into multiple chunks with each shard residing on separate GPU. At each step, the same mini-batch of data is processed
independently and in parallel by each shard followed by syncing across all GPUs (`),Zt=l(A,"CODE",{});var Np=n(Zt);Mo=r(Np,"all-reduce"),Np.forEach(a),jo=r(A,` operation).
In a simple transformer layer, this leads to 2 `),Qt=l(A,"CODE",{});var Gp=n(Qt);Po=r(Gp,"all-reduces"),Gp.forEach(a),To=r(A,` in the forward path and 2 in the backward path.
For more details, please refer research paper `),Le=l(A,"A",{href:!0,rel:!0});var Fp=n(Le);$o=r(Fp,`Megatron-LM: Training Multi-Billion Parameter Language Models Using
Model Parallelism`),Fp.forEach(a),Lo=r(A,` and
this section of \u{1F917} blogpost `),De=l(A,"A",{href:!0,rel:!0});var Rp=n(De);Do=r(Rp,"The Technology Behind BLOOM Training"),Rp.forEach(a),Oo=r(A,"."),A.forEach(a),Gs=h(e),k=l(e,"P",{});var D=n(k);qo=r(D,"b. "),ea=l(D,"STRONG",{});var Bp=n(ea);xo=r(Bp,"Pipeline Parallelism (PP)"),Bp.forEach(a),Ao=r(D,`: Reduces memory footprint and enables large scale training via inter-node parallelization.
Reduces the bubble of naive PP via PipeDream-Flush schedule/1F1B schedule and Interleaved 1F1B schedule.
Layers are distributed uniformly across PP stages. For example, if a model has `),ta=l(D,"CODE",{});var Up=n(ta);zo=r(Up,"24"),Up.forEach(a),Co=r(D," layers and we have "),aa=l(D,"CODE",{});var Wp=n(aa);Io=r(Wp,"4"),Wp.forEach(a),So=r(D,` GPUs for
pipeline parallelism, each GPU will have `),sa=l(D,"CODE",{});var Vp=n(sa);No=r(Vp,"6"),Vp.forEach(a),Go=r(D,` layers (24/4). For more details on schedules to reduce the idle time of PP,
please refer to the research paper `),Oe=l(D,"A",{href:!0,rel:!0});var Hp=n(Oe);Fo=r(Hp,`Efficient Large-Scale Language Model Training on GPU Clusters
Using Megatron-LM`),Hp.forEach(a),Ro=r(D,` and
this section of \u{1F917} blogpost `),qe=l(D,"A",{href:!0,rel:!0});var Yp=n(qe);Bo=r(Yp,"The Technology Behind BLOOM Training"),Yp.forEach(a),Uo=r(D,"."),D.forEach(a),Fs=h(e),m=l(e,"P",{});var b=n(m);Wo=r(b,"c. "),ra=l(b,"STRONG",{});var Kp=n(ra);Vo=r(Kp,"Sequence Parallelism (SP)"),Kp.forEach(a),Ho=r(b,`: Reduces memory footprint without any additional communication. Only applicable when using TP.
It reduces activation memory required as it prevents the same copies to be on the tensor parallel ranks
post `),oa=l(b,"CODE",{});var Xp=n(oa);Yo=r(Xp,"all-reduce"),Xp.forEach(a),Ko=r(b," by replacing then with "),la=l(b,"CODE",{});var Jp=n(la);Xo=r(Jp,"reduce-scatter"),Jp.forEach(a),Jo=r(b," and "),na=l(b,"CODE",{});var Zp=n(na);Zo=r(Zp,"no-op"),Zp.forEach(a),Qo=r(b," operation would be replaced by "),ia=l(b,"CODE",{});var Qp=n(ia);el=r(Qp,"all-gather"),Qp.forEach(a),tl=r(b,`.
As `),pa=l(b,"CODE",{});var ec=n(pa);al=r(ec,"all-reduce = reduce-scatter + all-gather"),ec.forEach(a),sl=r(b,`, this saves a ton of activation memory at no added communication cost.
To put it simply, it shards the outputs of each transformer layer along sequence dimension, e.g.,
if the sequence length is `),ca=l(b,"CODE",{});var tc=n(ca);rl=r(tc,"1024"),tc.forEach(a),ol=r(b," and the TP size is "),da=l(b,"CODE",{});var ac=n(da);ll=r(ac,"4"),ac.forEach(a),nl=r(b,", each GPU will have "),ha=l(b,"CODE",{});var sc=n(ha);il=r(sc,"256"),sc.forEach(a),pl=r(b,` tokens (1024/4) for each sample.
This increases the batch size that can be supported for training. For more details, please refer to the research paper
`),xe=l(b,"A",{href:!0,rel:!0});var rc=n(xe);cl=r(rc,"Reducing Activation Recomputation in Large Transformer Models"),rc.forEach(a),dl=r(b,"."),b.forEach(a),Rs=h(e),x=l(e,"P",{});var we=n(x);hl=r(we,"d. "),ma=l(we,"STRONG",{});var oc=n(ma);ml=r(oc,"Data Parallelism (DP)"),oc.forEach(a),ul=r(we,` via Distributed Optimizer: Reduces the memory footprint by sharding optimizer states and gradients across DP ranks
(versus the traditional method of replicating the optimizer state across data parallel ranks).
For example, when using Adam optimizer with mixed-precision training, each parameter accounts for 12 bytes of memory.
This gets distributed equally across the GPUs, i.e., each parameter would account for 3 bytes (12/4) if we have 4 GPUs.
For more details, please refer the research paper `),Ae=l(we,"A",{href:!0,rel:!0});var lc=n(Ae);fl=r(lc,`ZeRO: Memory Optimizations Toward Training Trillion
Parameter Models`),lc.forEach(a),_l=r(we,` and following section of \u{1F917} blog
`),ze=l(we,"A",{href:!0,rel:!0});var nc=n(ze);gl=r(nc,"The Technology Behind BLOOM Training"),nc.forEach(a),vl=r(we,"."),we.forEach(a),Bs=h(e),F=l(e,"P",{});var Gt=n(F);wl=r(Gt,"e. "),ua=l(Gt,"STRONG",{});var ic=n(ua);bl=r(ic,"Selective Activation Recomputation"),ic.forEach(a),yl=r(Gt,`: Reduces the memory footprint of activations significantly via smart activation checkpointing.
It doesn\u2019t store activations occupying large memory while being fast to recompute thereby achieving great tradeoff between memory and recomputation.
For example, for GPT-3, this leads to 70% reduction in required memory for activations at the expense of
only 2.7% FLOPs overhead for recomputation of activations. For more details, please refer to the research paper
`),Ce=l(Gt,"A",{href:!0,rel:!0});var pc=n(Ce);kl=r(pc,"Reducing Activation Recomputation in Large Transformer Models"),pc.forEach(a),El=r(Gt,"."),Gt.forEach(a),Us=h(e),ie=l(e,"P",{});var Hr=n(ie);Ml=r(Hr,"f. "),fa=l(Hr,"STRONG",{});var cc=n(fa);jl=r(cc,"Fused Kernels"),cc.forEach(a),Pl=r(Hr,`: Fused Softmax, Mixed Precision Fused Layer Norm and  Fused gradient accumulation to weight gradient computation of linear layer.
PyTorch JIT compiled Fused GeLU and Fused Bias+Dropout+Residual addition.`),Hr.forEach(a),Ws=h(e),$=l(e,"P",{});var W=n($);Tl=r(W,"g. "),_a=l(W,"STRONG",{});var dc=n(_a);$l=r(dc,"Support for Indexed datasets"),dc.forEach(a),Ll=r(W,": Efficient binary format of datasets for large scale training. Support for the "),ga=l(W,"CODE",{});var hc=n(ga);Dl=r(hc,"mmap"),hc.forEach(a),Ol=r(W,", "),va=l(W,"CODE",{});var mc=n(va);ql=r(mc,"cached"),mc.forEach(a),xl=r(W," index file and the "),wa=l(W,"CODE",{});var uc=n(wa);Al=r(uc,"lazy"),uc.forEach(a),zl=r(W," loader format."),W.forEach(a),Vs=h(e),pe=l(e,"P",{});var Yr=n(pe);Cl=r(Yr,"h. "),ba=l(Yr,"STRONG",{});var fc=n(ba);Il=r(fc,"Checkpoint reshaping and interoperability"),fc.forEach(a),Sl=r(Yr,`: Utility for reshaping Megatron-LM checkpoints of variable
tensor and pipeline parallel sizes to the beloved \u{1F917} Transformers sharded checkpoints as it has great support with plethora of tools
such as \u{1F917} Accelerate Big Model Inference, Megatron-DeepSpeed Inference etc.
Support is also available for converting \u{1F917} Transformers sharded checkpoints to Megatron-LM checkpoint of variable tensor and pipeline parallel sizes
for large scale training.`),Yr.forEach(a),Hs=h(e),J=l(e,"H2",{class:!0});var Kr=n(J);ce=l(Kr,"A",{id:!0,class:!0,href:!0});var _c=n(ce);ya=l(_c,"SPAN",{});var gc=n(ya);f(Ie.$$.fragment,gc),gc.forEach(a),_c.forEach(a),Nl=h(Kr),ka=l(Kr,"SPAN",{});var vc=n(ka);Gl=r(vc,"Pre-Requisites"),vc.forEach(a),Kr.forEach(a),Ys=h(e),R=l(e,"P",{});var Ft=n(R);Fl=r(Ft,"You will need to install the latest pytorch, cuda, nccl, and NVIDIA "),Se=l(Ft,"A",{href:!0,rel:!0});var wc=n(Se);Rl=r(wc,"APEX"),wc.forEach(a),Bl=r(Ft,` releases and the nltk library.
See `),Ne=l(Ft,"A",{href:!0,rel:!0});var bc=n(Ne);Ul=r(bc,"documentation"),bc.forEach(a),Wl=r(Ft,` for more details.
Another way to setup the environment is to pull an NVIDIA PyTorch Container that comes with all the required installations from NGC.`),Ft.forEach(a),Ks=h(e),Dt=l(e,"P",{});var yc=n(Dt);Vl=r(yc,"Below is a step-by-step method to set up the conda environment:"),yc.forEach(a),Xs=h(e),Ot=l(e,"OL",{});var kc=n(Ot);Ea=l(kc,"LI",{});var Ec=n(Ea);Hl=r(Ec,"Create a virtual environment"),Ec.forEach(a),kc.forEach(a),Js=h(e),f(Ge.$$.fragment,e),Zs=h(e),Fe=l(e,"OL",{start:!0});var Mc=n(Fe);Ma=l(Mc,"LI",{});var jc=n(Ma);Yl=r(jc,"Assuming that the machine has CUDA 11.3 installed, installing the corresponding PyTorch GPU Version"),jc.forEach(a),Mc.forEach(a),Qs=h(e),f(Re.$$.fragment,e),er=h(e),Be=l(e,"OL",{start:!0});var Pc=n(Be);ja=l(Pc,"LI",{});var Tc=n(ja);Kl=r(Tc,"Install Nvidia APEX"),Tc.forEach(a),Pc.forEach(a),tr=h(e),f(Ue.$$.fragment,e),ar=h(e),We=l(e,"OL",{start:!0});var $c=n(We);Pa=l($c,"LI",{});var Lc=n(Pa);Xl=r(Lc,"Installing Megatron-LM"),Lc.forEach(a),$c.forEach(a),sr=h(e),f(Ve.$$.fragment,e),rr=h(e),Z=l(e,"H2",{class:!0});var Xr=n(Z);de=l(Xr,"A",{id:!0,class:!0,href:!0});var Dc=n(de);Ta=l(Dc,"SPAN",{});var Oc=n(Ta);f(He.$$.fragment,Oc),Oc.forEach(a),Dc.forEach(a),Jl=h(Xr),$a=l(Xr,"SPAN",{});var qc=n($a);Zl=r(qc,"Accelerate Megatron-LM Plugin"),qc.forEach(a),Xr.forEach(a),or=h(e),he=l(e,"P",{});var Jr=n(he);Ql=r(Jr,"Important features are directly supported via the "),La=l(Jr,"CODE",{});var xc=n(La);en=r(xc,"accelerate config"),xc.forEach(a),tn=r(Jr,` command.
An example of thr corresponding questions for using Megatron-LM features is shown below:`),Jr.forEach(a),lr=h(e),f(Ye.$$.fragment,e),nr=h(e),qt=l(e,"P",{});var Ac=n(qt);an=r(Ac,"The resulting config is shown below:"),Ac.forEach(a),ir=h(e),f(Ke.$$.fragment,e),pr=h(e),me=l(e,"P",{});var Zr=n(me);sn=r(Zr,"We will take the example of GPT pre-training. The minimal changes required to the official "),Da=l(Zr,"CODE",{});var zc=n(Da);rn=r(zc,"run_clm_no_trainer.py"),zc.forEach(a),on=r(Zr,`
to use Megatron-LM are as follows:`),Zr.forEach(a),cr=h(e),xt=l(e,"OL",{});var Cc=n(xt);Xe=l(Cc,"LI",{});var Qr=n(Xe);ln=r(Qr,`As Megatron-LM uses its own implementation of Optimizer, the corresponding scheduler compatible with it needs to be used.
As such, support for only the Megatron-LM\u2019s scheduler is present. User will need to create `),Oa=l(Qr,"CODE",{});var Ic=n(Oa);nn=r(Ic,"accelerate.utils.MegatronLMDummyScheduler"),Ic.forEach(a),pn=r(Qr,`.
Example is given below:`),Qr.forEach(a),Cc.forEach(a),dr=h(e),f(Je.$$.fragment,e),hr=h(e),Ze=l(e,"OL",{start:!0});var Sc=n(Ze);qa=l(Sc,"LI",{});var Nc=n(qa);cn=r(Nc,`Getting the details of the total batch size now needs to be cognization of tensor and pipeline parallel sizes.
Example of getting the effective total batch size is shown below:`),Nc.forEach(a),Sc.forEach(a),mr=h(e),f(Qe.$$.fragment,e),ur=h(e),et=l(e,"OL",{start:!0});var Gc=n(et);xa=l(Gc,"LI",{});var Fc=n(xa);dn=r(Fc,"When using Megatron-LM, the losses are already averaged across the data parallel group"),Fc.forEach(a),Gc.forEach(a),fr=h(e),f(tt.$$.fragment,e),_r=h(e),at=l(e,"OL",{start:!0});var Rc=n(at);At=l(Rc,"LI",{});var kp=n(At);hn=r(kp,"For Megatron-LM, we need to save the model using "),Aa=l(kp,"CODE",{});var Bc=n(Aa);mn=r(Bc,"accelerator.save_state"),Bc.forEach(a),kp.forEach(a),Rc.forEach(a),gr=h(e),f(st.$$.fragment,e),vr=h(e),B=l(e,"P",{});var Rt=n(B);un=r(Rt,"That\u2019s it! We are good to go \u{1F680}. Please find the example script in the examples folder at the path "),za=l(Rt,"CODE",{});var Uc=n(za);fn=r(Uc,"accelerate/examples/by_feature/megatron_lm_gpt_pretraining.py"),Uc.forEach(a),_n=r(Rt,`.
Let\u2019s run it for `),Ca=l(Rt,"CODE",{});var Wc=n(Ca);gn=r(Wc,"gpt-large"),Wc.forEach(a),vn=r(Rt," model architecture using 4 A100-80GB GPUs."),Rt.forEach(a),wr=h(e),f(rt.$$.fragment,e),br=h(e),zt=l(e,"P",{});var Vc=n(zt);wn=r(Vc,"Below are some important excerpts from the output logs:"),Vc.forEach(a),yr=h(e),f(ot.$$.fragment,e),kr=h(e),ue=l(e,"P",{});var eo=n(ue);bn=r(eo,"There are a large number of other options/features that one can set using "),Ia=l(eo,"CODE",{});var Hc=n(Ia);yn=r(Hc,"accelerate.utils.MegatronLMPlugin"),Hc.forEach(a),kn=r(eo,"."),eo.forEach(a),Er=h(e),Q=l(e,"H2",{class:!0});var to=n(Q);fe=l(to,"A",{id:!0,class:!0,href:!0});var Yc=n(fe);Sa=l(Yc,"SPAN",{});var Kc=n(Sa);f(lt.$$.fragment,Kc),Kc.forEach(a),Yc.forEach(a),En=h(to),Na=l(to,"SPAN",{});var Xc=n(Na);Mn=r(Xc,"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"),Xc.forEach(a),to.forEach(a),Mr=h(e),Ct=l(e,"P",{});var Jc=n(Ct);jn=r(Jc,"For leveraging more features, please go through below details."),Jc.forEach(a),jr=h(e),It=l(e,"OL",{});var Zc=n(It);O=l(Zc,"LI",{});var V=n(O);Pn=r(V,`Below is an example of changes required to customize the Train Step while using Megatron-LM.
You will implement the `),Ga=l(V,"CODE",{});var Qc=n(Ga);Tn=r(Qc,"accelerate.utils.AbstractTrainStep"),Qc.forEach(a),$n=r(V,` or inherit from their corresponding children
`),Fa=l(V,"CODE",{});var ed=n(Fa);Ln=r(ed,"accelerate.utils.GPTTrainStep"),ed.forEach(a),Dn=r(V,", "),Ra=l(V,"CODE",{});var td=n(Ra);On=r(td,"accelerate.utils.BertTrainStep"),td.forEach(a),qn=r(V," or "),Ba=l(V,"CODE",{});var ad=n(Ba);xn=r(ad,"accelerate.utils.T5TrainStep"),ad.forEach(a),An=r(V,"."),V.forEach(a),Zc.forEach(a),Pr=h(e),f(nt.$$.fragment,e),Tr=h(e),it=l(e,"OL",{start:!0});var sd=n(it);Ua=l(sd,"LI",{});var rd=n(Ua);zn=r(rd,`For using the Megatron-LM datasets, a few more changes are required. Dataloaders for these datasets
are available only on rank 0 of each tensor parallel group. As such, there are rank where dataloader won\u2019t be
avaiable and this requires tweaks to the training loop. Being able to do all this shows how
felixble and extensible \u{1F917} Accelerate is. The changes required are as follows.`),rd.forEach(a),sd.forEach(a),$r=h(e),L=l(e,"P",{});var H=n(L);Cn=r(H,"a. For Megatron-LM indexed datasets, we need to use "),Wa=l(H,"CODE",{});var od=n(Wa);In=r(od,"MegatronLMDummyDataLoader"),od.forEach(a),Sn=r(H,`
and pass the required dataset args to it such as `),Va=l(H,"CODE",{});var ld=n(Va);Nn=r(ld,"data_path"),ld.forEach(a),Gn=r(H,", "),Ha=l(H,"CODE",{});var nd=n(Ha);Fn=r(nd,"seq_length"),nd.forEach(a),Rn=r(H,` etc.
See `),pt=l(H,"A",{href:!0,rel:!0});var id=n(pt);Bn=r(id,"here"),id.forEach(a),Un=r(H," for the list of available args."),H.forEach(a),Lr=h(e),f(ct.$$.fragment,e),Dr=h(e),U=l(e,"P",{});var Bt=n(U);Wn=r(Bt,"b. "),Ya=l(Bt,"CODE",{});var pd=n(Ya);Vn=r(pd,"megatron_dataloader"),pd.forEach(a),Hn=r(Bt,` is repeated 3 times to get training, validation and test dataloaders
as per the `),Ka=l(Bt,"CODE",{});var cd=n(Ka);Yn=r(cd,"args.splits_string"),cd.forEach(a),Kn=r(Bt," proportions"),Bt.forEach(a),Or=h(e),f(dt.$$.fragment,e),qr=h(e),j=l(e,"P",{});var z=n(j);Xn=r(z,`c. Changes to training and evaluation loops as dataloader is only available on tensor parallel ranks 0
So, we need to iterate only if the dataloader isn\u2019t `),Xa=l(z,"CODE",{});var dd=n(Xa);Jn=r(dd,"None"),dd.forEach(a),Zn=r(z,` else provide empty dict
As such, we loop using `),Ja=l(z,"CODE",{});var hd=n(Ja);Qn=r(hd,"while"),hd.forEach(a),ei=r(z," loop and break when "),Za=l(z,"CODE",{});var md=n(Za);ti=r(md,"completed_steps"),md.forEach(a),ai=r(z," is equal to "),Qa=l(z,"CODE",{});var ud=n(Qa);si=r(ud,"args.max_train_steps"),ud.forEach(a),ri=r(z,`
This is similar to the Megatron-LM setup wherein user has to provide `),es=l(z,"CODE",{});var fd=n(es);oi=r(fd,"max_train_steps"),fd.forEach(a),li=r(z,` when using Megaton-LM indexed datasets.
This displays how flexible and extensible \u{1F917} Accelerate is.`),z.forEach(a),xr=h(e),f(ht.$$.fragment,e),Ar=h(e),ee=l(e,"H2",{class:!0});var ao=n(ee);_e=l(ao,"A",{id:!0,class:!0,href:!0});var _d=n(_e);ts=l(_d,"SPAN",{});var gd=n(ts);f(mt.$$.fragment,gd),gd.forEach(a),_d.forEach(a),ni=h(ao),as=l(ao,"SPAN",{});var vd=n(as);ii=r(vd,"Utility for Checkpoint reshaping and interoperability"),vd.forEach(a),ao.forEach(a),zr=h(e),ge=l(e,"OL",{});var so=n(ge);ss=l(so,"LI",{});var wd=n(ss);St=l(wd,"P",{});var Ep=n(St);pi=r(Ep,`The scripts for these are present in \u{1F917} Transformers library under respective models.
Currently, it is available for GPT model `),ut=l(Ep,"A",{href:!0,rel:!0});var bd=n(ut);ci=r(bd,"checkpoint_reshaping_and_interoperability.py"),bd.forEach(a),Ep.forEach(a),wd.forEach(a),di=h(so),rs=l(so,"LI",{});var yd=n(rs);os=l(yd,"P",{});var kd=n(os);hi=r(kd,"Below is an example of conversion of checkpoint from Megatron-LM to universal \u{1F917} Transformers sharded checkpoint."),kd.forEach(a),yd.forEach(a),so.forEach(a),Cr=h(e),f(ft.$$.fragment,e),Ir=h(e),_t=l(e,"OL",{start:!0});var Ed=n(_t);C=l(Ed,"LI",{});var be=n(C);mi=r(be,"Conversion of checkpoint from transformers to megatron with "),ls=l(be,"CODE",{});var Md=n(ls);ui=r(Md,"tp_size=2"),Md.forEach(a),fi=r(be,", "),ns=l(be,"CODE",{});var jd=n(ns);_i=r(jd,"pp_size=2"),jd.forEach(a),gi=r(be," and "),is=l(be,"CODE",{});var Pd=n(is);vi=r(Pd,"dp_size=2"),Pd.forEach(a),wi=r(be,"."),be.forEach(a),Ed.forEach(a),Sr=h(e),f(gt.$$.fragment,e),Nr=h(e),te=l(e,"H2",{class:!0});var ro=n(te);ve=l(ro,"A",{id:!0,class:!0,href:!0});var Td=n(ve);ps=l(Td,"SPAN",{});var $d=n(ps);f(vt.$$.fragment,$d),$d.forEach(a),Td.forEach(a),bi=h(ro),cs=l(ro,"SPAN",{});var Ld=n(cs);yi=r(Ld,"Caveats"),Ld.forEach(a),ro.forEach(a),Gr=h(e),y=l(e,"OL",{});var P=n(y);ds=l(P,"LI",{});var Dd=n(ds);hs=l(Dd,"P",{});var Od=n(hs);ki=r(Od,`Supports Transformers GPT2, Megatron-BERT and T5 models.
This covers Decoder only, Encode only and Encoder-Decoder model classes.`),Od.forEach(a),Dd.forEach(a),Ei=h(P),ms=l(P,"LI",{});var qd=n(ms);ae=l(qd,"P",{});var Ut=n(ae);Mi=r(Ut,`Only loss is returned from model forward pass as
there is quite complex interplay of pipeline, tensor and data parallelsim behind the scenes.
The `),us=l(Ut,"CODE",{});var xd=n(us);ji=r(xd,"model(**batch_data)"),xd.forEach(a),Pi=r(Ut,` call return loss(es) averaged across the data parallel ranks.
This is fine for most cases wherein pre-training jobs are run using Megatron-LM features and
you can easily compute the `),fs=l(Ut,"CODE",{});var Ad=n(fs);Ti=r(Ad,"perplexity"),Ad.forEach(a),$i=r(Ut," using the loss."),Ut.forEach(a),qd.forEach(a),Li=h(P),_s=l(P,"LI",{});var zd=n(_s);I=l(zd,"P",{});var ye=n(I);Di=r(ye,`The main process is the last rank as the losses are available in the last stage of pipeline.
`),gs=l(ye,"CODE",{});var Cd=n(gs);Oi=r(Cd,"accelerator.is_main_process"),Cd.forEach(a),qi=r(ye," and "),vs=l(ye,"CODE",{});var Id=n(vs);xi=r(Id,"accelerator.is_local_main_process"),Id.forEach(a),Ai=r(ye," return "),ws=l(ye,"CODE",{});var Sd=n(ws);zi=r(Sd,"True"),Sd.forEach(a),Ci=r(ye,` for last rank when using
Megatron-LM integration.`),ye.forEach(a),zd.forEach(a),Ii=h(P),bs=l(P,"LI",{});var Nd=n(bs);se=l(Nd,"P",{});var Wt=n(se);Si=r(Wt,"In "),ys=l(Wt,"CODE",{});var Gd=n(ys);Ni=r(Gd,"accelerator.prepare"),Gd.forEach(a),Gi=r(Wt,` call, a Megatron-LM model corresponding to a given Transformers model is created
with random weights. Please use `),ks=l(Wt,"CODE",{});var Fd=n(ks);Fi=r(Fd,"accelerator.load_state"),Fd.forEach(a),Ri=r(Wt," to load the Megatron-LM checkpoint with matching TP, PP and DP partitions."),Wt.forEach(a),Nd.forEach(a),Bi=h(P),Es=l(P,"LI",{});var Rd=n(Es);Ms=l(Rd,"P",{});var Bd=n(Ms);Ui=r(Bd,`Currently, checkpoint reshaping and interoperability support is only available for GPT.
Soon it will be extended to BERT and T5.`),Bd.forEach(a),Rd.forEach(a),Wi=h(P),js=l(P,"LI",{});var Ud=n(js);Nt=l(Ud,"P",{});var Mp=n(Nt);Ps=l(Mp,"CODE",{});var Wd=n(Ps);Vi=r(Wd,"gradient_accumulation_steps"),Wd.forEach(a),Hi=r(Mp,` needs to be 1. When using Megatron-LM, micro batches in pipeline parallelism
setting is synonymous with gradient accumulation.`),Mp.forEach(a),Ud.forEach(a),Yi=h(P),Ts=l(P,"LI",{});var Vd=n(Ts);re=l(Vd,"P",{});var Vt=n(re);Ki=r(Vt,"When using Megatron-LM, use "),$s=l(Vt,"CODE",{});var Hd=n($s);Xi=r(Hd,"accelerator.save_state"),Hd.forEach(a),Ji=r(Vt," and "),Ls=l(Vt,"CODE",{});var Yd=n(Ls);Zi=r(Yd,"accelerator.load_state"),Yd.forEach(a),Qi=r(Vt," for saving and loading checkpoints."),Vt.forEach(a),Vd.forEach(a),ep=h(P),Ds=l(P,"LI",{});var Kd=n(Ds);Os=l(Kd,"P",{});var Xd=n(Os);tp=r(Xd,`Below are the mapping from Megatron-LM model architectures to the the equivalent \u{1F917} transformers model architectures.
Only these \u{1F917} transformers model architectures are supported.`),Xd.forEach(a),Kd.forEach(a),P.forEach(a),Fr=h(e),S=l(e,"P",{});var Pt=n(S);ap=r(Pt,"a. Megatron-LM "),wt=l(Pt,"A",{href:!0,rel:!0});var Jd=n(wt);sp=r(Jd,"BertModel"),Jd.forEach(a),rp=r(Pt,` :
\u{1F917} transformers models with `),qs=l(Pt,"CODE",{});var Zd=n(qs);op=r(Zd,"megatron-bert"),Zd.forEach(a),lp=r(Pt,` in config\u2019s model type, e.g.,
`),bt=l(Pt,"A",{href:!0,rel:!0});var Qd=n(bt);np=r(Qd,"MegatronBERT"),Qd.forEach(a),Pt.forEach(a),Rr=h(e),N=l(e,"P",{});var Tt=n(N);ip=r(Tt,"b. Megatron-LM "),yt=l(Tt,"A",{href:!0,rel:!0});var eh=n(yt);pp=r(eh,"GPTModel"),eh.forEach(a),cp=r(Tt,` :
\u{1F917} transformers models with `),xs=l(Tt,"CODE",{});var th=n(xs);dp=r(th,"gpt2"),th.forEach(a),hp=r(Tt,` in config\u2019s model type, e.g.,
`),kt=l(Tt,"A",{href:!0,rel:!0});var ah=n(kt);mp=r(ah,"OpenAI GPT2"),ah.forEach(a),Tt.forEach(a),Br=h(e),q=l(e,"P",{});var oe=n(q);up=r(oe,"c. Megatron-LM "),Et=l(oe,"A",{href:!0,rel:!0});var sh=n(Et);fp=r(sh,"T5Model"),sh.forEach(a),_p=r(oe,` :
\u{1F917} transformers models with `),As=l(oe,"CODE",{});var rh=n(As);gp=r(rh,"t5"),rh.forEach(a),vp=r(oe,` in  config\u2019s model type, e.g.,
`),Mt=l(oe,"A",{href:!0,rel:!0});var oh=n(Mt);wp=r(oh,"T5"),oh.forEach(a),bp=r(oe,` and
`),jt=l(oe,"A",{href:!0,rel:!0});var lh=n(jt);yp=r(lh,"MT5"),lh.forEach(a),oe.forEach(a),this.h()},h(){c(Y,"name","hf:doc:metadata"),c(Y,"content",JSON.stringify(uh)),c(le,"id","megatronlm"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#megatronlm"),c(K,"class","relative group"),c(Ee,"href","https://github.com/NVIDIA/Megatron-LM"),c(Ee,"rel","nofollow"),c(Me,"href","https://arxiv.org/abs/2005.14165"),c(Me,"rel","nofollow"),c(je,"href","https://arxiv.org/pdf/1810.04805.pdf"),c(je,"rel","nofollow"),c(Pe,"href","https://arxiv.org/abs/1910.10683"),c(Pe,"rel","nofollow"),c(Te,"href","https://github.com/NVIDIA/Megatron-LM"),c(Te,"rel","nofollow"),c(ne,"id","what-is-integrated"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#what-is-integrated"),c(X,"class","relative group"),c(Le,"href","https://arxiv.org/pdf/1909.08053.pdf"),c(Le,"rel","nofollow"),c(De,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#tensor-parallelism"),c(De,"rel","nofollow"),c(Oe,"href","https://arxiv.org/pdf/2104.04473.pdf"),c(Oe,"rel","nofollow"),c(qe,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#pipeline-parallelism"),c(qe,"rel","nofollow"),c(xe,"href","https://arxiv.org/pdf/2205.05198.pdf"),c(xe,"rel","nofollow"),c(Ae,"href","https://arxiv.org/pdf/1910.02054.pdf"),c(Ae,"rel","nofollow"),c(ze,"href","https://huggingface.co/blog/bloom-megatron-deepspeed#zero-data-parallelism"),c(ze,"rel","nofollow"),c(Ce,"href","https://arxiv.org/pdf/2205.05198.pdf"),c(Ce,"rel","nofollow"),c(ce,"id","prerequisites"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#prerequisites"),c(J,"class","relative group"),c(Se,"href","https://github.com/NVIDIA/apex#quick-start"),c(Se,"rel","nofollow"),c(Ne,"href","https://github.com/NVIDIA/Megatron-LM#setup"),c(Ne,"rel","nofollow"),c(Fe,"start","2"),c(Be,"start","3"),c(We,"start","4"),c(de,"id","accelerate-megatronlm-plugin"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#accelerate-megatronlm-plugin"),c(Z,"class","relative group"),c(Ze,"start","2"),c(et,"start","3"),c(at,"start","4"),c(fe,"id","advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets"),c(Q,"class","relative group"),c(it,"start","2"),c(pt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/arguments.py#L804"),c(pt,"rel","nofollow"),c(_e,"id","utility-for-checkpoint-reshaping-and-interoperability"),c(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_e,"href","#utility-for-checkpoint-reshaping-and-interoperability"),c(ee,"class","relative group"),c(ut,"href","https://github.com/huggingface/transformers/blob/main/src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py"),c(ut,"rel","nofollow"),c(_t,"start","3"),c(ve,"id","caveats"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#caveats"),c(te,"class","relative group"),c(wt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/bert_model.py"),c(wt,"rel","nofollow"),c(bt,"href","https://huggingface.co/docs/transformers/model_doc/megatron-bert"),c(bt,"rel","nofollow"),c(yt,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/gpt_model.py"),c(yt,"rel","nofollow"),c(kt,"href","https://huggingface.co/docs/transformers/model_doc/gpt2"),c(kt,"rel","nofollow"),c(Et,"href","https://github.com/NVIDIA/Megatron-LM/blob/main/megatron/model/t5_model.py"),c(Et,"rel","nofollow"),c(Mt,"href","https://huggingface.co/docs/transformers/model_doc/t5"),c(Mt,"rel","nofollow"),c(jt,"href","https://huggingface.co/docs/transformers/model_doc/mt5"),c(jt,"rel","nofollow")},m(e,i){t(document.head,Y),p(e,zs,i),p(e,K,i),t(K,le),t(le,Ht),_(ke,Ht,null),t(K,oo),t(K,Yt),t(Yt,lo),p(e,Cs,i),p(e,T,i),t(T,Ee),t(Ee,no),t(T,io),t(T,Me),t(Me,po),t(T,co),t(T,je),t(je,ho),t(T,mo),t(T,Pe),t(Pe,uo),t(T,fo),t(T,Te),t(Te,_o),t(T,go),p(e,Is,i),p(e,X,i),t(X,ne),t(ne,Kt),_($e,Kt,null),t(X,vo),t(X,Xt),t(Xt,wo),p(e,Ss,i),p(e,Lt,i),t(Lt,bo),p(e,Ns,i),p(e,M,i),t(M,yo),t(M,Jt),t(Jt,ko),t(M,Eo),t(M,Zt),t(Zt,Mo),t(M,jo),t(M,Qt),t(Qt,Po),t(M,To),t(M,Le),t(Le,$o),t(M,Lo),t(M,De),t(De,Do),t(M,Oo),p(e,Gs,i),p(e,k,i),t(k,qo),t(k,ea),t(ea,xo),t(k,Ao),t(k,ta),t(ta,zo),t(k,Co),t(k,aa),t(aa,Io),t(k,So),t(k,sa),t(sa,No),t(k,Go),t(k,Oe),t(Oe,Fo),t(k,Ro),t(k,qe),t(qe,Bo),t(k,Uo),p(e,Fs,i),p(e,m,i),t(m,Wo),t(m,ra),t(ra,Vo),t(m,Ho),t(m,oa),t(oa,Yo),t(m,Ko),t(m,la),t(la,Xo),t(m,Jo),t(m,na),t(na,Zo),t(m,Qo),t(m,ia),t(ia,el),t(m,tl),t(m,pa),t(pa,al),t(m,sl),t(m,ca),t(ca,rl),t(m,ol),t(m,da),t(da,ll),t(m,nl),t(m,ha),t(ha,il),t(m,pl),t(m,xe),t(xe,cl),t(m,dl),p(e,Rs,i),p(e,x,i),t(x,hl),t(x,ma),t(ma,ml),t(x,ul),t(x,Ae),t(Ae,fl),t(x,_l),t(x,ze),t(ze,gl),t(x,vl),p(e,Bs,i),p(e,F,i),t(F,wl),t(F,ua),t(ua,bl),t(F,yl),t(F,Ce),t(Ce,kl),t(F,El),p(e,Us,i),p(e,ie,i),t(ie,Ml),t(ie,fa),t(fa,jl),t(ie,Pl),p(e,Ws,i),p(e,$,i),t($,Tl),t($,_a),t(_a,$l),t($,Ll),t($,ga),t(ga,Dl),t($,Ol),t($,va),t(va,ql),t($,xl),t($,wa),t(wa,Al),t($,zl),p(e,Vs,i),p(e,pe,i),t(pe,Cl),t(pe,ba),t(ba,Il),t(pe,Sl),p(e,Hs,i),p(e,J,i),t(J,ce),t(ce,ya),_(Ie,ya,null),t(J,Nl),t(J,ka),t(ka,Gl),p(e,Ys,i),p(e,R,i),t(R,Fl),t(R,Se),t(Se,Rl),t(R,Bl),t(R,Ne),t(Ne,Ul),t(R,Wl),p(e,Ks,i),p(e,Dt,i),t(Dt,Vl),p(e,Xs,i),p(e,Ot,i),t(Ot,Ea),t(Ea,Hl),p(e,Js,i),_(Ge,e,i),p(e,Zs,i),p(e,Fe,i),t(Fe,Ma),t(Ma,Yl),p(e,Qs,i),_(Re,e,i),p(e,er,i),p(e,Be,i),t(Be,ja),t(ja,Kl),p(e,tr,i),_(Ue,e,i),p(e,ar,i),p(e,We,i),t(We,Pa),t(Pa,Xl),p(e,sr,i),_(Ve,e,i),p(e,rr,i),p(e,Z,i),t(Z,de),t(de,Ta),_(He,Ta,null),t(Z,Jl),t(Z,$a),t($a,Zl),p(e,or,i),p(e,he,i),t(he,Ql),t(he,La),t(La,en),t(he,tn),p(e,lr,i),_(Ye,e,i),p(e,nr,i),p(e,qt,i),t(qt,an),p(e,ir,i),_(Ke,e,i),p(e,pr,i),p(e,me,i),t(me,sn),t(me,Da),t(Da,rn),t(me,on),p(e,cr,i),p(e,xt,i),t(xt,Xe),t(Xe,ln),t(Xe,Oa),t(Oa,nn),t(Xe,pn),p(e,dr,i),_(Je,e,i),p(e,hr,i),p(e,Ze,i),t(Ze,qa),t(qa,cn),p(e,mr,i),_(Qe,e,i),p(e,ur,i),p(e,et,i),t(et,xa),t(xa,dn),p(e,fr,i),_(tt,e,i),p(e,_r,i),p(e,at,i),t(at,At),t(At,hn),t(At,Aa),t(Aa,mn),p(e,gr,i),_(st,e,i),p(e,vr,i),p(e,B,i),t(B,un),t(B,za),t(za,fn),t(B,_n),t(B,Ca),t(Ca,gn),t(B,vn),p(e,wr,i),_(rt,e,i),p(e,br,i),p(e,zt,i),t(zt,wn),p(e,yr,i),_(ot,e,i),p(e,kr,i),p(e,ue,i),t(ue,bn),t(ue,Ia),t(Ia,yn),t(ue,kn),p(e,Er,i),p(e,Q,i),t(Q,fe),t(fe,Sa),_(lt,Sa,null),t(Q,En),t(Q,Na),t(Na,Mn),p(e,Mr,i),p(e,Ct,i),t(Ct,jn),p(e,jr,i),p(e,It,i),t(It,O),t(O,Pn),t(O,Ga),t(Ga,Tn),t(O,$n),t(O,Fa),t(Fa,Ln),t(O,Dn),t(O,Ra),t(Ra,On),t(O,qn),t(O,Ba),t(Ba,xn),t(O,An),p(e,Pr,i),_(nt,e,i),p(e,Tr,i),p(e,it,i),t(it,Ua),t(Ua,zn),p(e,$r,i),p(e,L,i),t(L,Cn),t(L,Wa),t(Wa,In),t(L,Sn),t(L,Va),t(Va,Nn),t(L,Gn),t(L,Ha),t(Ha,Fn),t(L,Rn),t(L,pt),t(pt,Bn),t(L,Un),p(e,Lr,i),_(ct,e,i),p(e,Dr,i),p(e,U,i),t(U,Wn),t(U,Ya),t(Ya,Vn),t(U,Hn),t(U,Ka),t(Ka,Yn),t(U,Kn),p(e,Or,i),_(dt,e,i),p(e,qr,i),p(e,j,i),t(j,Xn),t(j,Xa),t(Xa,Jn),t(j,Zn),t(j,Ja),t(Ja,Qn),t(j,ei),t(j,Za),t(Za,ti),t(j,ai),t(j,Qa),t(Qa,si),t(j,ri),t(j,es),t(es,oi),t(j,li),p(e,xr,i),_(ht,e,i),p(e,Ar,i),p(e,ee,i),t(ee,_e),t(_e,ts),_(mt,ts,null),t(ee,ni),t(ee,as),t(as,ii),p(e,zr,i),p(e,ge,i),t(ge,ss),t(ss,St),t(St,pi),t(St,ut),t(ut,ci),t(ge,di),t(ge,rs),t(rs,os),t(os,hi),p(e,Cr,i),_(ft,e,i),p(e,Ir,i),p(e,_t,i),t(_t,C),t(C,mi),t(C,ls),t(ls,ui),t(C,fi),t(C,ns),t(ns,_i),t(C,gi),t(C,is),t(is,vi),t(C,wi),p(e,Sr,i),_(gt,e,i),p(e,Nr,i),p(e,te,i),t(te,ve),t(ve,ps),_(vt,ps,null),t(te,bi),t(te,cs),t(cs,yi),p(e,Gr,i),p(e,y,i),t(y,ds),t(ds,hs),t(hs,ki),t(y,Ei),t(y,ms),t(ms,ae),t(ae,Mi),t(ae,us),t(us,ji),t(ae,Pi),t(ae,fs),t(fs,Ti),t(ae,$i),t(y,Li),t(y,_s),t(_s,I),t(I,Di),t(I,gs),t(gs,Oi),t(I,qi),t(I,vs),t(vs,xi),t(I,Ai),t(I,ws),t(ws,zi),t(I,Ci),t(y,Ii),t(y,bs),t(bs,se),t(se,Si),t(se,ys),t(ys,Ni),t(se,Gi),t(se,ks),t(ks,Fi),t(se,Ri),t(y,Bi),t(y,Es),t(Es,Ms),t(Ms,Ui),t(y,Wi),t(y,js),t(js,Nt),t(Nt,Ps),t(Ps,Vi),t(Nt,Hi),t(y,Yi),t(y,Ts),t(Ts,re),t(re,Ki),t(re,$s),t($s,Xi),t(re,Ji),t(re,Ls),t(Ls,Zi),t(re,Qi),t(y,ep),t(y,Ds),t(Ds,Os),t(Os,tp),p(e,Fr,i),p(e,S,i),t(S,ap),t(S,wt),t(wt,sp),t(S,rp),t(S,qs),t(qs,op),t(S,lp),t(S,bt),t(bt,np),p(e,Rr,i),p(e,N,i),t(N,ip),t(N,yt),t(yt,pp),t(N,cp),t(N,xs),t(xs,dp),t(N,hp),t(N,kt),t(kt,mp),p(e,Br,i),p(e,q,i),t(q,up),t(q,Et),t(Et,fp),t(q,_p),t(q,As),t(As,gp),t(q,vp),t(q,Mt),t(Mt,wp),t(q,bp),t(q,jt),t(jt,yp),Ur=!0},p:dh,i(e){Ur||(g(ke.$$.fragment,e),g($e.$$.fragment,e),g(Ie.$$.fragment,e),g(Ge.$$.fragment,e),g(Re.$$.fragment,e),g(Ue.$$.fragment,e),g(Ve.$$.fragment,e),g(He.$$.fragment,e),g(Ye.$$.fragment,e),g(Ke.$$.fragment,e),g(Je.$$.fragment,e),g(Qe.$$.fragment,e),g(tt.$$.fragment,e),g(st.$$.fragment,e),g(rt.$$.fragment,e),g(ot.$$.fragment,e),g(lt.$$.fragment,e),g(nt.$$.fragment,e),g(ct.$$.fragment,e),g(dt.$$.fragment,e),g(ht.$$.fragment,e),g(mt.$$.fragment,e),g(ft.$$.fragment,e),g(gt.$$.fragment,e),g(vt.$$.fragment,e),Ur=!0)},o(e){v(ke.$$.fragment,e),v($e.$$.fragment,e),v(Ie.$$.fragment,e),v(Ge.$$.fragment,e),v(Re.$$.fragment,e),v(Ue.$$.fragment,e),v(Ve.$$.fragment,e),v(He.$$.fragment,e),v(Ye.$$.fragment,e),v(Ke.$$.fragment,e),v(Je.$$.fragment,e),v(Qe.$$.fragment,e),v(tt.$$.fragment,e),v(st.$$.fragment,e),v(rt.$$.fragment,e),v(ot.$$.fragment,e),v(lt.$$.fragment,e),v(nt.$$.fragment,e),v(ct.$$.fragment,e),v(dt.$$.fragment,e),v(ht.$$.fragment,e),v(mt.$$.fragment,e),v(ft.$$.fragment,e),v(gt.$$.fragment,e),v(vt.$$.fragment,e),Ur=!1},d(e){a(Y),e&&a(zs),e&&a(K),w(ke),e&&a(Cs),e&&a(T),e&&a(Is),e&&a(X),w($e),e&&a(Ss),e&&a(Lt),e&&a(Ns),e&&a(M),e&&a(Gs),e&&a(k),e&&a(Fs),e&&a(m),e&&a(Rs),e&&a(x),e&&a(Bs),e&&a(F),e&&a(Us),e&&a(ie),e&&a(Ws),e&&a($),e&&a(Vs),e&&a(pe),e&&a(Hs),e&&a(J),w(Ie),e&&a(Ys),e&&a(R),e&&a(Ks),e&&a(Dt),e&&a(Xs),e&&a(Ot),e&&a(Js),w(Ge,e),e&&a(Zs),e&&a(Fe),e&&a(Qs),w(Re,e),e&&a(er),e&&a(Be),e&&a(tr),w(Ue,e),e&&a(ar),e&&a(We),e&&a(sr),w(Ve,e),e&&a(rr),e&&a(Z),w(He),e&&a(or),e&&a(he),e&&a(lr),w(Ye,e),e&&a(nr),e&&a(qt),e&&a(ir),w(Ke,e),e&&a(pr),e&&a(me),e&&a(cr),e&&a(xt),e&&a(dr),w(Je,e),e&&a(hr),e&&a(Ze),e&&a(mr),w(Qe,e),e&&a(ur),e&&a(et),e&&a(fr),w(tt,e),e&&a(_r),e&&a(at),e&&a(gr),w(st,e),e&&a(vr),e&&a(B),e&&a(wr),w(rt,e),e&&a(br),e&&a(zt),e&&a(yr),w(ot,e),e&&a(kr),e&&a(ue),e&&a(Er),e&&a(Q),w(lt),e&&a(Mr),e&&a(Ct),e&&a(jr),e&&a(It),e&&a(Pr),w(nt,e),e&&a(Tr),e&&a(it),e&&a($r),e&&a(L),e&&a(Lr),w(ct,e),e&&a(Dr),e&&a(U),e&&a(Or),w(dt,e),e&&a(qr),e&&a(j),e&&a(xr),w(ht,e),e&&a(Ar),e&&a(ee),w(mt),e&&a(zr),e&&a(ge),e&&a(Cr),w(ft,e),e&&a(Ir),e&&a(_t),e&&a(Sr),w(gt,e),e&&a(Nr),e&&a(te),w(vt),e&&a(Gr),e&&a(y),e&&a(Fr),e&&a(S),e&&a(Rr),e&&a(N),e&&a(Br),e&&a(q)}}}const uh={local:"megatronlm",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"prerequisites",title:"Pre-Requisites "},{local:"accelerate-megatronlm-plugin",title:"Accelerate Megatron-LM Plugin"},{local:"advanced-features-to-leverage-writing-custom-train-step-and-megatronlm-indexed-datasets",title:"Advanced features to leverage writing custom train step and Megatron-LM Indexed Datasets"},{local:"utility-for-checkpoint-reshaping-and-interoperability",title:"Utility for Checkpoint reshaping and interoperability"},{local:"caveats",title:"Caveats"}],title:"Megatron-LM"};function fh(jp){return hh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wh extends nh{constructor(Y){super();ih(this,Y,fh,mh,ph,{})}}export{wh as default,uh as metadata};
