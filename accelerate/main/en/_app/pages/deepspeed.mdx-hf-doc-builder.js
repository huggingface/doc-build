import{S as Ph,i as xh,s as Ch,e as a,k as c,w as h,t as l,M as Rh,c as n,d as s,m as u,a as o,x as f,h as p,b as d,$ as Ih,G as t,g as i,y as m,L as Ah,q as _,o as g,B as w,v as Zh}from"../chunks/vendor-hf-doc-builder.js";import{D as Vt}from"../chunks/Docstring-hf-doc-builder.js";import{C as b}from"../chunks/CodeBlock-hf-doc-builder.js";import{I as U}from"../chunks/IconCopyLink-hf-doc-builder.js";function Th(Yc){let M,gn,G,ue,Es,Ne,jl,Ss,bl,wn,F,Le,yl,$l,Ue,El,Sl,vn,y,Ds,Dl,ql,qs,kl,zl,ks,Ol,Pl,zs,xl,Cl,Os,Rl,Il,Ps,Al,jn,I,Zl,Me,Tl,Nl,Ge,Ll,Ul,bn,Yt,Ml,yn,Jt,Gl,$n,de,Fl,Fe,Wl,Hl,En,he,W,Bl,xs,Vl,Yl,Cs,Jl,Kl,Ql,We,Xl,Rs,ep,tp,Sn,H,fe,Is,He,sp,As,ap,Dn,Kt,np,qn,Qt,me,op,Be,lp,pp,Xt,Jc,kn,_e,rp,Ve,ip,cp,zn,ge,up,Zs,dp,hp,On,we,fp,Ts,mp,_p,Pn,ve,gp,Ns,wp,vp,xn,je,jp,Ls,bp,yp,Cn,be,$p,Us,Ep,Sp,Rn,es,Dp,In,ts,qp,An,ss,Ye,kp,as,zp,Op,Zn,B,ye,Ms,Je,Pp,Gs,xp,Tn,V,Fs,Cp,Rp,Ke,Ip,Ap,Nn,A,Zp,Ws,Tp,Np,Hs,Lp,Up,Ln,Y,$e,Bs,Qe,Mp,Vs,Gp,Un,Xe,Mn,ns,Fp,Gn,et,Fn,Ee,Wp,Ys,Hp,Bp,Wn,os,Js,Vp,Hn,tt,Bn,st,Vn,ls,Ks,Yp,Yn,at,Jn,nt,Kn,Se,Jp,Qs,Kp,Qp,Qn,ot,Xn,ps,Xp,eo,J,De,Xs,lt,er,ea,tr,to,pt,so,rs,sr,ao,rt,no,qe,ar,ta,nr,or,oo,is,sa,lr,lo,it,po,ke,pr,aa,rr,ir,ro,ct,io,ut,co,cs,na,cr,uo,dt,ho,ze,ur,oa,dr,hr,fo,ht,mo,ft,_o,us,la,fr,go,Oe,$,K,mr,mt,_r,gr,_t,wr,vr,jr,E,br,pa,yr,$r,ra,Er,Sr,ia,Dr,qr,ca,kr,zr,ua,Or,Pr,xr,gt,Cr,q,Rr,da,Ir,Ar,ha,Zr,Tr,fa,Nr,Lr,ma,Ur,Mr,Gr,Q,Fr,_a,Wr,Hr,ga,Br,Vr,Yr,wt,Jr,wa,Kr,Qr,Xr,va,S,ei,ja,ti,si,ba,ai,ni,ya,oi,li,$a,pi,ri,Ea,ii,ci,wo,X,Pe,Sa,vt,ui,Da,di,vo,xe,qa,ka,hi,fi,v,jt,mi,za,_i,gi,wi,D,vi,Oa,ji,bi,Pa,yi,$i,xa,Ei,Si,Ca,Di,qi,Ra,ki,zi,Oi,bt,Pi,ee,xi,Ia,Ci,Ri,Aa,Ii,Ai,Zi,yt,Ti,te,Ni,Za,Li,Ui,Mi,Gi,Fi,$t,Wi,Ta,Hi,Bi,Et,Vi,Na,Yi,Ji,St,Ki,La,Qi,jo,se,Ce,Ua,Dt,Xi,Ma,ec,bo,qt,yo,ae,Re,Ga,kt,tc,Fa,sc,$o,Z,Wa,ac,nc,zt,oc,Ha,lc,pc,rc,Ot,ic,Ba,cc,uc,Eo,ne,Ie,Va,Pt,dc,Ya,hc,So,R,xt,fc,Ja,mc,_c,Ae,Ct,gc,Ka,wc,Do,oe,Rt,vc,Qa,jc,qo,le,It,bc,Xa,yc,ko,pe,At,$c,en,Ec,zo,re,Zt,Sc,tn,Dc,Oo,ie,Tt,qc,sn,kc,Po,ce,Ze,an,Nt,zc,nn,Oc,xo,k,on,Lt,Pc,xc,ln,Ut,Cc,Rc,pn,Mt,Ic,Ac,rn,Gt,Zc,Co,ds,Tc,Ro,T,cn,Ft,Nc,Lc,un,Wt,Uc,Mc,dn,Ht,Gc,Io,N,Fc,hn,Wc,Hc,Bt,Bc,Vc,Ao;return Ne=new U({}),He=new U({}),Je=new U({}),Qe=new U({}),Xe=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),et=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),tt=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 gradient_accumulation_steps: 1
 gradient_clipping: 1.0
 offload_optimizer_device: none
 offload_param_device: none
 zero3_init_flag: true
 zero_stage: 2
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 gradient_accumulation_steps: 1
 gradient_clipping: 1.0
 offload_optimizer_device: none
 offload_param_device: none
 zero3_init_flag: <span class="hljs-literal">true</span>
 zero_stage: 2
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),st=new b({props:{code:"accelerate launch examples/nlp_example.py --mixed_precision fp16",highlighted:"accelerate launch examples/nlp_example.py --mixed_precision fp16"}}),at=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
  gradient_accumulation_steps: 1
  gradient_clipping: 1.0
  offload_optimizer_device: cpu
  offload_param_device: cpu
  zero3_init_flag: true
  zero3_save_16bit_model: true
  zero_stage: 3
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
  gradient_accumulation_steps: 1
  gradient_clipping: 1.0
  offload_optimizer_device: cpu
  offload_param_device: cpu
  zero3_init_flag: <span class="hljs-literal">true</span>
  zero3_save_16bit_model: <span class="hljs-literal">true</span>
  zero_stage: 3
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),nt=new b({props:{code:"accelerate launch examples/nlp_example.py --mixed_precision fp16",highlighted:"accelerate launch examples/nlp_example.py --mixed_precision fp16"}}),ot=new b({props:{code:"`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO >= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to enable `deepspeed.zero.Init` for constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` for FP32 training, `fp16` for FP16 mixed-precision training and `bf16` for BF16 mixed-precision training. ",highlighted:'`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO &gt;= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to <span class="hljs-built_in">enable</span> `deepspeed.zero.Init` <span class="hljs-keyword">for</span> constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` <span class="hljs-keyword">for</span> FP32 training, `fp16` <span class="hljs-keyword">for</span> FP16 mixed-precision training and `bf16` <span class="hljs-keyword">for</span> BF16 mixed-precision training. '}}),lt=new U({}),pt=new b({props:{code:"accelerate config",highlighted:"accelerate config"}}),rt=new b({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),it=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage2_config.json
 zero3_init_flag: true
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage2_config.json
 zero3_init_flag: <span class="hljs-literal">true</span>
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),ct=new b({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },
    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "weight_decay": "auto",
            "torch_adam": true,
            "adam_w_mode": true
        }
    },
    "scheduler": {
        "type": "WarmupDecayLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto",
            "total_num_steps": "auto"
        }
    },
    "zero_optimization": {
        "stage": 2,
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": "auto",
        "contiguous_gradients": true
    },
    "gradient_accumulation_steps": 1,
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;torch_adam&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;adam_w_mode&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),ut=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage2_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage2_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 24 \\
--per_device_eval_batch_size 24 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),dt=new b({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage3_offload_config.json
 zero3_init_flag: true
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: false`,highlighted:`compute_environment: LOCAL_MACHINE
deepspeed_config:
 deepspeed_config_file: /home/ubuntu/accelerate/examples/configs/deepspeed_config_templates/zero_stage3_offload_config.json
 zero3_init_flag: <span class="hljs-literal">true</span>
distributed_type: DEEPSPEED
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 2
use_cpu: <span class="hljs-literal">false</span>`}}),ht=new b({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },
    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "weight_decay": "auto"
        }
    },
    "scheduler": {
        "type": "WarmupDecayLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto",
            "total_num_steps": "auto"
        }
    },
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "sub_group_size": 1e9,
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": "auto"
    },
    "gradient_accumulation_steps": 1,
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),ft=new b({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name "gpt2-large" \\
--tokenizer_name "gpt2-large" \\
--dataset_name "wikitext" \\
--dataset_config_name "wikitext-2-raw-v1" \\
--block_size 128 \\
--output_dir "./clm/clm_deepspeed_stage3_offload_accelerate" \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to "wandb"\\`,highlighted:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
--config_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--tokenizer_name <span class="hljs-string">&quot;gpt2-large&quot;</span> \\
--dataset_name <span class="hljs-string">&quot;wikitext&quot;</span> \\
--dataset_config_name <span class="hljs-string">&quot;wikitext-2-raw-v1&quot;</span> \\
--block_size 128 \\
--output_dir <span class="hljs-string">&quot;./clm/clm_deepspeed_stage3_offload_accelerate&quot;</span> \\
--learning_rate 5e-4 \\
--per_device_train_batch_size 32 \\
--per_device_eval_batch_size 32 \\
--num_train_epochs 3 \\
--with_tracking \\
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),gt=new b({props:{code:"",highlighted:` <span class="hljs-comment"># Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer</span>
 optimizer_cls = (
     torch.optim.AdamW
     <span class="hljs-keyword">if</span> accelerator.state.deepspeed_plugin <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span>
     <span class="hljs-keyword">or</span> <span class="hljs-string">&quot;optimizer&quot;</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> accelerator.state.deepspeed_plugin.deepspeed_config
     <span class="hljs-keyword">else</span> DummyOptim
 )
 optimizer = optimizer_cls(optimizer_grouped_parameters, lr=args.learning_rate)

 <span class="hljs-comment"># Creates Dummy Scheduler if \`scheduler\` was spcified in the config file else creates \`args.lr_scheduler_type\` Scheduler</span>
 <span class="hljs-keyword">if</span> (
     accelerator.state.deepspeed_plugin <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span>
     <span class="hljs-keyword">or</span> <span class="hljs-string">&quot;scheduler&quot;</span> <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> accelerator.state.deepspeed_plugin.deepspeed_config
 ):
     lr_scheduler = get_scheduler(
         name=args.lr_scheduler_type,
         optimizer=optimizer,
         num_warmup_steps=args.num_warmup_steps,
         num_training_steps=args.max_train_steps,
     )
 <span class="hljs-keyword">else</span>:
     lr_scheduler = DummyScheduler(
         optimizer, total_num_steps=args.max_train_steps, warmup_num_steps=args.num_warmup_steps
     )`}}),vt=new U({}),bt=new b({props:{code:"",highlighted:`unwrapped_model = accelerator.unwrap_model(model)

<span class="hljs-comment"># New Code #</span>
<span class="hljs-comment"># Saves the whole/unpartitioned fp16 model when in ZeRO Stage-3 to the output directory if</span>
<span class="hljs-comment"># \`stage3_gather_16bit_weights_on_model_save\` is True in DeepSpeed Config file or</span>
<span class="hljs-comment"># \`zero3_save_16bit_model\` is True in DeepSpeed Plugin.</span>
<span class="hljs-comment"># For Zero Stages 1 and 2, models are saved as usual in the output directory.</span>
<span class="hljs-comment"># The model name saved is \`pytorch_model.bin\`</span>
unwrapped_model.save_pretrained(
    args.output_dir,
    is_main_process=accelerator.is_main_process,
    save_function=accelerator.save,
    state_dict=accelerator.get_state_dict(model),
)`}}),yt=new b({props:{code:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = "checkpointing: PATH={}, ckpt_id={}".format(PATH, ckpt_id)
if success:
    logging.info(f"Success {status_msg}")
else:
    logging.warning(f"Failure {status_msg}")`,highlighted:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = <span class="hljs-string">&quot;checkpointing: PATH={}, ckpt_id={}&quot;</span>.<span class="hljs-built_in">format</span>(PATH, ckpt_id)
<span class="hljs-keyword">if</span> success:
    logging.info(<span class="hljs-string">f&quot;Success <span class="hljs-subst">{status_msg}</span>&quot;</span>)
<span class="hljs-keyword">else</span>:
    logging.warning(<span class="hljs-string">f&quot;Failure <span class="hljs-subst">{status_msg}</span>&quot;</span>)`}}),$t=new b({props:{code:`$ cd /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of type zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`,highlighted:`$ <span class="hljs-built_in">cd</span> /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of <span class="hljs-built_in">type</span> zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`}}),Et=new b({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

unwrapped_model = accelerator.unwrap_model(model)
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`}}),St=new b({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),Dt=new U({}),qt=new b({props:{code:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)",highlighted:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)"}}),kt=new U({}),Pt=new U({}),xt=new Vt({props:{name:"class accelerate.DeepSpeedPlugin",anchor:"accelerate.DeepSpeedPlugin",parameters:[{name:"hf_ds_config",val:": typing.Any = None"},{name:"gradient_accumulation_steps",val:": int = None"},{name:"gradient_clipping",val:": float = None"},{name:"zero_stage",val:": int = None"},{name:"is_train_batch_min",val:": str = True"},{name:"offload_optimizer_device",val:": bool = None"},{name:"offload_param_device",val:": bool = None"},{name:"zero3_init_flag",val:": bool = None"},{name:"zero3_save_16bit_model",val:": bool = None"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L230"}}),Ct=new Vt({props:{name:"deepspeed_config_process",anchor:"accelerate.DeepSpeedPlugin.deepspeed_config_process",parameters:[{name:"prefix",val:" = ''"},{name:"mismatches",val:" = None"},{name:"config",val:" = None"},{name:"must_match",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/dataclasses.py#L362"}}),Rt=new Vt({props:{name:"class accelerate.utils.DummyOptim",anchor:"accelerate.utils.DummyOptim",parameters:[{name:"params",val:""},{name:"lr",val:" = 0.001"},{name:"weight_decay",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyOptim.lr",description:`<strong>lr</strong> (float) &#x2014;
Learning rate.`,name:"lr"},{anchor:"accelerate.utils.DummyOptim.params",description:`<strong>params</strong> (iterable) &#x2014; iterable of parameters to optimize or dicts defining
parameter groups`,name:"params"},{anchor:"accelerate.utils.DummyOptim.weight_decay",description:`<strong>weight_decay</strong> (float) &#x2014;
Weight decay.
**kwargs &#x2014;
Other arguments.`,name:"weight_decay"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L209"}}),It=new Vt({props:{name:"class accelerate.utils.DummyScheduler",anchor:"accelerate.utils.DummyScheduler",parameters:[{name:"optimizer",val:""},{name:"total_num_steps",val:" = None"},{name:"warmup_num_steps",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"accelerate.utils.DummyScheduler.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"},{anchor:"accelerate.utils.DummyScheduler.total_num_steps",description:`<strong>total_num_steps</strong> (int) &#x2014;
Total number of steps.`,name:"total_num_steps"},{anchor:"accelerate.utils.DummyScheduler.warmup_num_steps",description:`<strong>warmup_num_steps</strong> (int) &#x2014;
Number of steps for warmup.
**kwargs &#x2014;
Other arguments.`,name:"warmup_num_steps"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L232"}}),At=new Vt({props:{name:"class accelerate.utils.DeepSpeedEngineWrapper",anchor:"accelerate.utils.DeepSpeedEngineWrapper",parameters:[{name:"engine",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedEngineWrapper.engine",description:"<strong>engine</strong> (deepspeed.runtime.engine.DeepSpeedEngine) &#x2014; deepspeed engine to wrap",name:"engine"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L143"}}),Zt=new Vt({props:{name:"class accelerate.utils.DeepSpeedOptimizerWrapper",anchor:"accelerate.utils.DeepSpeedOptimizerWrapper",parameters:[{name:"optimizer",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedOptimizerWrapper.optimizer",description:`<strong>optimizer</strong> (<code>torch.optim.optimizer.Optimizer</code>) &#x2014;
The optimizer to wrap.`,name:"optimizer"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L168"}}),Tt=new Vt({props:{name:"class accelerate.utils.DeepSpeedSchedulerWrapper",anchor:"accelerate.utils.DeepSpeedSchedulerWrapper",parameters:[{name:"scheduler",val:""},{name:"optimizers",val:""}],parametersDescription:[{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.scheduler",description:`<strong>scheduler</strong> (<code>torch.optim.lr_scheduler.LambdaLR</code>) &#x2014;
The scheduler to wrap.`,name:"scheduler"},{anchor:"accelerate.utils.DeepSpeedSchedulerWrapper.optimizers",description:"<strong>optimizers</strong> (one or a list of <code>torch.optim.Optimizer</code>) &#x2014;",name:"optimizers"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/deepspeed.py#L192"}}),Nt=new U({}),{c(){M=a("meta"),gn=c(),G=a("h1"),ue=a("a"),Es=a("span"),h(Ne.$$.fragment),jl=c(),Ss=a("span"),bl=l("DeepSpeed"),wn=c(),F=a("p"),Le=a("a"),yl=l("DeepSpeed"),$l=l(" implements everything described in the "),Ue=a("a"),El=l("ZeRO paper"),Sl=l(". Currently it provides full support for:"),vn=c(),y=a("ol"),Ds=a("li"),Dl=l("Optimizer state partitioning (ZeRO stage 1)"),ql=c(),qs=a("li"),kl=l("Gradient partitioning (ZeRO stage 2)"),zl=c(),ks=a("li"),Ol=l("Parameter partitioning (ZeRO stage 3)"),Pl=c(),zs=a("li"),xl=l("Custom mixed precision training handling"),Cl=c(),Os=a("li"),Rl=l("A range of fast CUDA-extension-based optimizers"),Il=c(),Ps=a("li"),Al=l("ZeRO-Offload to CPU and Disk/NVMe"),jn=c(),I=a("p"),Zl=l("ZeRO-Offload has its own dedicated paper: "),Me=a("a"),Tl=l("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Nl=l(". And NVMe-support is described in the paper "),Ge=a("a"),Ll=l(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),Ul=l("."),bn=c(),Yt=a("p"),Ml=l("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),yn=c(),Jt=a("p"),Gl=l(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),$n=c(),de=a("p"),Fl=l("\u{1F917} Accelerate integrates "),Fe=a("a"),Wl=l("DeepSpeed"),Hl=l(" via 2 options:"),En=c(),he=a("ol"),W=a("li"),Bl=l("Integration of the DeepSpeed features via "),xs=a("code"),Vl=l("deepspeed config file"),Yl=l(" specification in "),Cs=a("code"),Jl=l("accelerate config"),Kl=l(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Ql=c(),We=a("li"),Xl=l("Integration via "),Rs=a("code"),ep=l("deepspeed_plugin"),tp=l(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Sn=c(),H=a("h2"),fe=a("a"),Is=a("span"),h(He.$$.fragment),sp=c(),As=a("span"),ap=l("What is integrated?"),Dn=c(),Kt=a("p"),np=l("Training:"),qn=c(),Qt=a("ol"),me=a("li"),op=l(`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Be=a("a"),lp=l("blog post"),pp=c(),Xt=a("img"),kn=c(),_e=a("p"),rp=l("(Source: "),Ve=a("a"),ip=l("link"),cp=l(")"),zn=c(),ge=a("p"),up=l("a. "),Zs=a("strong"),dp=l("Stage 1"),hp=l(" : Shards optimizer states across data parallel workers/GPUs"),On=c(),we=a("p"),fp=l("b. "),Ts=a("strong"),mp=l("Stage 2"),_p=l(" : Shards optimizer states + gradients across data parallel workers/GPUs"),Pn=c(),ve=a("p"),gp=l("c. "),Ns=a("strong"),wp=l("Stage 3"),vp=l(": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),xn=c(),je=a("p"),jp=l("d. "),Ls=a("strong"),bp=l("Optimizer Offload"),yp=l(": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),Cn=c(),be=a("p"),$p=l("e. "),Us=a("strong"),Ep=l("Param Offload"),Sp=l(": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),Rn=c(),es=a("u"),Dp=l("Note"),In=l(`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),ts=a("p"),qp=l("Inference:"),An=c(),ss=a("ol"),Ye=a("li"),kp=l(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),as=a("a"),zp=l("deepspeed-zero-inference"),Op=l("."),Zn=c(),B=a("h2"),ye=a("a"),Ms=a("span"),h(Je.$$.fragment),Pp=c(),Gs=a("span"),xp=l("How it works?"),Tn=c(),V=a("p"),Fs=a("strong"),Cp=l("Pre-Requisites"),Rp=l(": Install DeepSpeed version >=0.6.5. Please refer to the "),Ke=a("a"),Ip=l("DeepSpeed Insallation details"),Ap=l(`
for more information.`),Nn=c(),A=a("p"),Zp=l("We will first look at easy to use integration via "),Ws=a("code"),Tp=l("accelerate config"),Np=l(`.
Followed by more flexible and feature rich `),Hs=a("code"),Lp=l("deepspeed config file"),Up=l(" integration."),Ln=c(),Y=a("h3"),$e=a("a"),Bs=a("span"),h(Qe.$$.fragment),Mp=c(),Vs=a("span"),Gp=l("Accelerate DeepSpeed Plugin"),Un=l(`

On your machine(s) just run:

	`),h(Xe.$$.fragment),Mn=c(),ns=a("p"),Fp=l(`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Gn=c(),h(et.$$.fragment),Fn=c(),Ee=a("p"),Wp=l("For instance, here is how you would run the NLP example "),Ys=a("code"),Hp=l("examples/nlp_example.py"),Bp=l(" (from the root of the repo) with DeepSpeed Plugin:"),Wn=c(),os=a("p"),Js=a("strong"),Vp=l("ZeRO Stage-2 DeepSpeed Plugin Example"),Hn=c(),h(tt.$$.fragment),Bn=c(),h(st.$$.fragment),Vn=c(),ls=a("p"),Ks=a("strong"),Yp=l("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),Yn=c(),h(at.$$.fragment),Jn=c(),h(nt.$$.fragment),Kn=c(),Se=a("p"),Jp=l("Currently, "),Qs=a("code"),Kp=l("Accelerate"),Qp=l(" supports following config through the CLI:"),Qn=c(),h(ot.$$.fragment),Xn=c(),ps=a("p"),Xp=l("To be able to tweak more options, you will need to use a DeepSpeed config file."),eo=c(),J=a("h3"),De=a("a"),Xs=a("span"),h(lt.$$.fragment),er=c(),ea=a("span"),tr=l("DeepSpeed Config File"),to=l(`

On your machine(s) just run:

	`),h(pt.$$.fragment),so=c(),rs=a("p"),sr=l(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),ao=c(),h(rt.$$.fragment),no=c(),qe=a("p"),ar=l("For instance, here is how you would run the NLP example "),ta=a("code"),nr=l("examples/by_feature/deepspeed_with_config_support.py"),or=l(" (from the root of the repo) with DeepSpeed Config File:"),oo=c(),is=a("p"),sa=a("strong"),lr=l("ZeRO Stage-2 DeepSpeed Config File Example"),lo=c(),h(it.$$.fragment),po=c(),ke=a("p"),pr=l("with the contents of "),aa=a("code"),rr=l("zero_stage2_config.json"),ir=l(" being:"),ro=c(),h(ct.$$.fragment),io=c(),h(ut.$$.fragment),co=c(),cs=a("p"),na=a("strong"),cr=l("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),uo=c(),h(dt.$$.fragment),ho=c(),ze=a("p"),ur=l("with the contents of "),oa=a("code"),dr=l("zero_stage3_offload_config.json"),hr=l(" being:"),fo=c(),h(ht.$$.fragment),mo=c(),h(ft.$$.fragment),_o=c(),us=a("p"),la=a("strong"),fr=l("Important code changes when using DeepSpeed Config File"),go=c(),Oe=a("ol"),$=a("li"),K=a("p"),mr=l(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),mt=a("a"),_r=l("DeepSpeed Optimizers"),gr=l(" and "),_t=a("a"),wr=l("DeepSpeed Schedulers"),vr=l(` documentation.
We will look at the changes needed in the code when using these.`),jr=c(),E=a("p"),br=l("a. DS Optim + DS Scheduler: The case when both "),pa=a("code"),yr=l("optimizer"),$r=l(" and "),ra=a("code"),Er=l("scheduler"),Sr=l(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),ia=a("code"),Dr=l("accelerate.utils.DummyOptim"),qr=l(" and "),ca=a("code"),kr=l("accelerate.utils.DummyScheduler"),zr=l(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),ua=a("code"),Or=l("examples/by_feature/deepspeed_with_config_support.py"),Pr=l(" showing this:"),xr=c(),h(gt.$$.fragment),Cr=c(),q=a("p"),Rr=l("b. Custom Optim + Custom Scheduler: The case when both "),da=a("code"),Ir=l("optimizer"),Ar=l(" and "),ha=a("code"),Zr=l("scheduler"),Tr=l(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),fa=a("code"),Nr=l("optimizer"),Lr=l(" and "),ma=a("code"),Ur=l("scheduler"),Mr=l(" keys are absent in the DeepSpeed config file."),Gr=c(),Q=a("p"),Fr=l("c. Custom Optim + DS Scheduler: The case when only "),_a=a("code"),Wr=l("scheduler"),Hr=l(` key is present in the DeepSpeed config file.
In this situation, user has to use `),ga=a("code"),Br=l("accelerate.utils.DummyScheduler"),Vr=l(" to replace the PyTorch/Custom scheduler in their code."),Yr=c(),wt=a("p"),Jr=l("d. DS Optim + Custom Scheduler: The case when only "),wa=a("code"),Kr=l("optimizer"),Qr=l(` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),Xr=c(),va=a("li"),S=a("p"),ei=l("Notice the "),ja=a("code"),ti=l("auto"),si=l(" values in the above example DeepSpeed config files. These are automatically handled by "),ba=a("code"),ai=l("prepare"),ni=l(` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),ya=a("code"),oi=l("prepare"),li=l(` method.
Only the `),$a=a("code"),pi=l("auto"),ri=l(" fields specified in above examples are handled by "),Ea=a("code"),ii=l("prepare"),ci=l(" method and the rest have to be explicitly specified by the user."),wo=c(),X=a("h2"),Pe=a("a"),Sa=a("span"),h(vt.$$.fragment),ui=c(),Da=a("span"),di=l("Saving and loading"),vo=c(),xe=a("ol"),qa=a("li"),ka=a("p"),hi=l("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),fi=c(),v=a("li"),jt=a("p"),mi=l("under ZeRO Stage-3, "),za=a("code"),_i=l("state_dict"),gi=l(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),wi=c(),D=a("p"),vi=l("a. Saving the entire 16bit model weights to directly load later on using "),Oa=a("code"),ji=l("model.load_state_dict(torch.load(pytorch_model.bin))"),bi=l(`.
For this, either set `),Pa=a("code"),yi=l("zero_optimization.stage3_gather_16bit_weights_on_model_save"),$i=l(` to True in DeepSpeed Config file or set
`),xa=a("code"),Ei=l("zero3_save_16bit_model"),Si=l(` to True in DeepSpeed Plugin.
`),Ca=a("strong"),Di=l("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),qi=l(`
Below is the snippet from `),Ra=a("code"),ki=l("examples/by_feature/deepspeed_with_config_support.py"),zi=l(" showing this:"),Oi=c(),h(bt.$$.fragment),Pi=c(),ee=a("p"),xi=l("b. To get 32bit weights, first save the model using "),Ia=a("code"),Ci=l("model.save_checkpoint()"),Ri=l(`.
Below is the snippet from `),Aa=a("code"),Ii=l("examples/by_feature/deepspeed_with_config_support.py"),Ai=l(" showing this:"),Zi=c(),h(yt.$$.fragment),Ti=c(),te=a("p"),Ni=l("This will create ZeRO model and optimizer partitions along with "),Za=a("code"),Li=l("zero_to_fp32.py"),Ui=l(` script in checkpoint directory.
One can use this script to do offline consolidation.`),Mi=a("br"),Gi=l(`
It requires no configuration files or GPUs. Here is an example of its usage:`),Fi=c(),h($t.$$.fragment),Wi=c(),Ta=a("p"),Hi=l("To get 32bit model for saving/inference, one can do the following:"),Bi=c(),h(Et.$$.fragment),Vi=c(),Na=a("p"),Yi=l("If only interested in state_dict, one can do the following:"),Ji=c(),h(St.$$.fragment),Ki=c(),La=a("p"),Qi=l("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),jo=c(),se=a("h2"),Ce=a("a"),Ua=a("span"),h(Dt.$$.fragment),Xi=c(),Ma=a("span"),ec=l("ZeRO Inference"),bo=l(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),h(qt.$$.fragment),yo=c(),ae=a("h2"),Re=a("a"),Ga=a("span"),h(kt.$$.fragment),tc=c(),Fa=a("span"),sc=l("Few caveats to be aware of"),$o=c(),Z=a("ol"),Wa=a("li"),ac=l("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),nc=c(),zt=a("li"),oc=l("Current integration doesn\u2019t support "),Ha=a("code"),lc=l("mpu"),pc=l(", limiting the tensor parallelism which is supported in Megatron-LM."),rc=c(),Ot=a("li"),ic=l("Current integration doesn\u2019t support multiple models for a given "),Ba=a("code"),cc=l("accelerator"),uc=l(" object."),Eo=c(),ne=a("h2"),Ie=a("a"),Va=a("span"),h(Pt.$$.fragment),dc=c(),Ya=a("span"),hc=l("Internals"),So=c(),R=a("div"),h(xt.$$.fragment),fc=c(),Ja=a("p"),mc=l("This plugin is used to integrate DeepSpeed."),_c=c(),Ae=a("div"),h(Ct.$$.fragment),gc=c(),Ka=a("p"),wc=l("Process the DeepSpeed config with the values from the kwargs."),Do=c(),oe=a("div"),h(Rt.$$.fragment),vc=c(),Qa=a("p"),jc=l(`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),qo=c(),le=a("div"),h(It.$$.fragment),bc=c(),Xa=a("p"),yc=l(`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),ko=c(),pe=a("div"),h(At.$$.fragment),$c=c(),en=a("p"),Ec=l("Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),zo=c(),re=a("div"),h(Zt.$$.fragment),Sc=c(),tn=a("p"),Dc=l("Internal wrapper around a deepspeed optimizer."),Oo=c(),ie=a("div"),h(Tt.$$.fragment),qc=c(),sn=a("p"),kc=l("Internal wrapper around a deepspeed scheduler."),Po=c(),ce=a("h2"),Ze=a("a"),an=a("span"),h(Nt.$$.fragment),zc=c(),nn=a("span"),Oc=l("Main DeepSpeed Resources"),xo=c(),k=a("ul"),on=a("li"),Lt=a("a"),Pc=l("Project\u2019s github"),xc=c(),ln=a("li"),Ut=a("a"),Cc=l("Usage docs"),Rc=c(),pn=a("li"),Mt=a("a"),Ic=l("API docs"),Ac=c(),rn=a("li"),Gt=a("a"),Zc=l("Blog posts"),Co=c(),ds=a("p"),Tc=l("Papers:"),Ro=c(),T=a("ul"),cn=a("li"),Ft=a("a"),Nc=l("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Lc=c(),un=a("li"),Wt=a("a"),Uc=l("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Mc=c(),dn=a("li"),Ht=a("a"),Gc=l("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),Io=c(),N=a("p"),Fc=l("Finally, please, remember that, \u{1F917} "),hn=a("code"),Wc=l("Accelerate"),Hc=l(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Bt=a("a"),Bc=l("DeepSpeed GitHub"),Vc=l("."),this.h()},l(e){const r=Rh('[data-svelte="svelte-1phssyn"]',document.head);M=n(r,"META",{name:!0,content:!0}),r.forEach(s),gn=u(e),G=n(e,"H1",{class:!0});var Zo=o(G);ue=n(Zo,"A",{id:!0,class:!0,href:!0});var Kc=o(ue);Es=n(Kc,"SPAN",{});var Qc=o(Es);f(Ne.$$.fragment,Qc),Qc.forEach(s),Kc.forEach(s),jl=u(Zo),Ss=n(Zo,"SPAN",{});var Xc=o(Ss);bl=p(Xc,"DeepSpeed"),Xc.forEach(s),Zo.forEach(s),wn=u(e),F=n(e,"P",{});var fn=o(F);Le=n(fn,"A",{href:!0,rel:!0});var eu=o(Le);yl=p(eu,"DeepSpeed"),eu.forEach(s),$l=p(fn," implements everything described in the "),Ue=n(fn,"A",{href:!0,rel:!0});var tu=o(Ue);El=p(tu,"ZeRO paper"),tu.forEach(s),Sl=p(fn,". Currently it provides full support for:"),fn.forEach(s),vn=u(e),y=n(e,"OL",{});var z=o(y);Ds=n(z,"LI",{});var su=o(Ds);Dl=p(su,"Optimizer state partitioning (ZeRO stage 1)"),su.forEach(s),ql=u(z),qs=n(z,"LI",{});var au=o(qs);kl=p(au,"Gradient partitioning (ZeRO stage 2)"),au.forEach(s),zl=u(z),ks=n(z,"LI",{});var nu=o(ks);Ol=p(nu,"Parameter partitioning (ZeRO stage 3)"),nu.forEach(s),Pl=u(z),zs=n(z,"LI",{});var ou=o(zs);xl=p(ou,"Custom mixed precision training handling"),ou.forEach(s),Cl=u(z),Os=n(z,"LI",{});var lu=o(Os);Rl=p(lu,"A range of fast CUDA-extension-based optimizers"),lu.forEach(s),Il=u(z),Ps=n(z,"LI",{});var pu=o(Ps);Al=p(pu,"ZeRO-Offload to CPU and Disk/NVMe"),pu.forEach(s),z.forEach(s),jn=u(e),I=n(e,"P",{});var hs=o(I);Zl=p(hs,"ZeRO-Offload has its own dedicated paper: "),Me=n(hs,"A",{href:!0,rel:!0});var ru=o(Me);Tl=p(ru,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),ru.forEach(s),Nl=p(hs,". And NVMe-support is described in the paper "),Ge=n(hs,"A",{href:!0,rel:!0});var iu=o(Ge);Ll=p(iu,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),iu.forEach(s),Ul=p(hs,"."),hs.forEach(s),bn=u(e),Yt=n(e,"P",{});var cu=o(Yt);Ml=p(cu,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),cu.forEach(s),yn=u(e),Jt=n(e,"P",{});var uu=o(Jt);Gl=p(uu,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),uu.forEach(s),$n=u(e),de=n(e,"P",{});var To=o(de);Fl=p(To,"\u{1F917} Accelerate integrates "),Fe=n(To,"A",{href:!0,rel:!0});var du=o(Fe);Wl=p(du,"DeepSpeed"),du.forEach(s),Hl=p(To," via 2 options:"),To.forEach(s),En=u(e),he=n(e,"OL",{});var No=o(he);W=n(No,"LI",{});var fs=o(W);Bl=p(fs,"Integration of the DeepSpeed features via "),xs=n(fs,"CODE",{});var hu=o(xs);Vl=p(hu,"deepspeed config file"),hu.forEach(s),Yl=p(fs," specification in "),Cs=n(fs,"CODE",{});var fu=o(Cs);Jl=p(fu,"accelerate config"),fu.forEach(s),Kl=p(fs,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),fs.forEach(s),Ql=u(No),We=n(No,"LI",{});var Lo=o(We);Xl=p(Lo,"Integration via "),Rs=n(Lo,"CODE",{});var mu=o(Rs);ep=p(mu,"deepspeed_plugin"),mu.forEach(s),tp=p(Lo,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Lo.forEach(s),No.forEach(s),Sn=u(e),H=n(e,"H2",{class:!0});var Uo=o(H);fe=n(Uo,"A",{id:!0,class:!0,href:!0});var _u=o(fe);Is=n(_u,"SPAN",{});var gu=o(Is);f(He.$$.fragment,gu),gu.forEach(s),_u.forEach(s),sp=u(Uo),As=n(Uo,"SPAN",{});var wu=o(As);ap=p(wu,"What is integrated?"),wu.forEach(s),Uo.forEach(s),Dn=u(e),Kt=n(e,"P",{});var vu=o(Kt);np=p(vu,"Training:"),vu.forEach(s),qn=u(e),Qt=n(e,"OL",{});var ju=o(Qt);me=n(ju,"LI",{});var mn=o(me);op=p(mn,`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Be=n(mn,"A",{href:!0,rel:!0});var bu=o(Be);lp=p(bu,"blog post"),bu.forEach(s),pp=u(mn),Xt=n(mn,"IMG",{src:!0,alt:!0}),mn.forEach(s),ju.forEach(s),kn=u(e),_e=n(e,"P",{});var Mo=o(_e);rp=p(Mo,"(Source: "),Ve=n(Mo,"A",{href:!0,rel:!0});var yu=o(Ve);ip=p(yu,"link"),yu.forEach(s),cp=p(Mo,")"),Mo.forEach(s),zn=u(e),ge=n(e,"P",{});var Go=o(ge);up=p(Go,"a. "),Zs=n(Go,"STRONG",{});var $u=o(Zs);dp=p($u,"Stage 1"),$u.forEach(s),hp=p(Go," : Shards optimizer states across data parallel workers/GPUs"),Go.forEach(s),On=u(e),we=n(e,"P",{});var Fo=o(we);fp=p(Fo,"b. "),Ts=n(Fo,"STRONG",{});var Eu=o(Ts);mp=p(Eu,"Stage 2"),Eu.forEach(s),_p=p(Fo," : Shards optimizer states + gradients across data parallel workers/GPUs"),Fo.forEach(s),Pn=u(e),ve=n(e,"P",{});var Wo=o(ve);gp=p(Wo,"c. "),Ns=n(Wo,"STRONG",{});var Su=o(Ns);wp=p(Su,"Stage 3"),Su.forEach(s),vp=p(Wo,": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),Wo.forEach(s),xn=u(e),je=n(e,"P",{});var Ho=o(je);jp=p(Ho,"d. "),Ls=n(Ho,"STRONG",{});var Du=o(Ls);bp=p(Du,"Optimizer Offload"),Du.forEach(s),yp=p(Ho,": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),Ho.forEach(s),Cn=u(e),be=n(e,"P",{});var Bo=o(be);$p=p(Bo,"e. "),Us=n(Bo,"STRONG",{});var qu=o(Us);Ep=p(qu,"Param Offload"),qu.forEach(s),Sp=p(Bo,": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),Bo.forEach(s),Rn=u(e),es=n(e,"U",{});var ku=o(es);Dp=p(ku,"Note"),ku.forEach(s),In=p(e,`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),ts=n(e,"P",{});var zu=o(ts);qp=p(zu,"Inference:"),zu.forEach(s),An=u(e),ss=n(e,"OL",{});var Ou=o(ss);Ye=n(Ou,"LI",{});var Vo=o(Ye);kp=p(Vo,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),as=n(Vo,"A",{href:!0});var Pu=o(as);zp=p(Pu,"deepspeed-zero-inference"),Pu.forEach(s),Op=p(Vo,"."),Vo.forEach(s),Ou.forEach(s),Zn=u(e),B=n(e,"H2",{class:!0});var Yo=o(B);ye=n(Yo,"A",{id:!0,class:!0,href:!0});var xu=o(ye);Ms=n(xu,"SPAN",{});var Cu=o(Ms);f(Je.$$.fragment,Cu),Cu.forEach(s),xu.forEach(s),Pp=u(Yo),Gs=n(Yo,"SPAN",{});var Ru=o(Gs);xp=p(Ru,"How it works?"),Ru.forEach(s),Yo.forEach(s),Tn=u(e),V=n(e,"P",{});var _n=o(V);Fs=n(_n,"STRONG",{});var Iu=o(Fs);Cp=p(Iu,"Pre-Requisites"),Iu.forEach(s),Rp=p(_n,": Install DeepSpeed version >=0.6.5. Please refer to the "),Ke=n(_n,"A",{href:!0,rel:!0});var Au=o(Ke);Ip=p(Au,"DeepSpeed Insallation details"),Au.forEach(s),Ap=p(_n,`
for more information.`),_n.forEach(s),Nn=u(e),A=n(e,"P",{});var ms=o(A);Zp=p(ms,"We will first look at easy to use integration via "),Ws=n(ms,"CODE",{});var Zu=o(Ws);Tp=p(Zu,"accelerate config"),Zu.forEach(s),Np=p(ms,`.
Followed by more flexible and feature rich `),Hs=n(ms,"CODE",{});var Tu=o(Hs);Lp=p(Tu,"deepspeed config file"),Tu.forEach(s),Up=p(ms," integration."),ms.forEach(s),Ln=u(e),Y=n(e,"H3",{class:!0});var Jo=o(Y);$e=n(Jo,"A",{id:!0,class:!0,href:!0});var Nu=o($e);Bs=n(Nu,"SPAN",{});var Lu=o(Bs);f(Qe.$$.fragment,Lu),Lu.forEach(s),Nu.forEach(s),Mp=u(Jo),Vs=n(Jo,"SPAN",{});var Uu=o(Vs);Gp=p(Uu,"Accelerate DeepSpeed Plugin"),Uu.forEach(s),Jo.forEach(s),Un=p(e,`

On your machine(s) just run:

	`),f(Xe.$$.fragment,e),Mn=u(e),ns=n(e,"P",{});var Mu=o(ns);Fp=p(Mu,`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Mu.forEach(s),Gn=u(e),f(et.$$.fragment,e),Fn=u(e),Ee=n(e,"P",{});var Ko=o(Ee);Wp=p(Ko,"For instance, here is how you would run the NLP example "),Ys=n(Ko,"CODE",{});var Gu=o(Ys);Hp=p(Gu,"examples/nlp_example.py"),Gu.forEach(s),Bp=p(Ko," (from the root of the repo) with DeepSpeed Plugin:"),Ko.forEach(s),Wn=u(e),os=n(e,"P",{});var Fu=o(os);Js=n(Fu,"STRONG",{});var Wu=o(Js);Vp=p(Wu,"ZeRO Stage-2 DeepSpeed Plugin Example"),Wu.forEach(s),Fu.forEach(s),Hn=u(e),f(tt.$$.fragment,e),Bn=u(e),f(st.$$.fragment,e),Vn=u(e),ls=n(e,"P",{});var Hu=o(ls);Ks=n(Hu,"STRONG",{});var Bu=o(Ks);Yp=p(Bu,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),Bu.forEach(s),Hu.forEach(s),Yn=u(e),f(at.$$.fragment,e),Jn=u(e),f(nt.$$.fragment,e),Kn=u(e),Se=n(e,"P",{});var Qo=o(Se);Jp=p(Qo,"Currently, "),Qs=n(Qo,"CODE",{});var Vu=o(Qs);Kp=p(Vu,"Accelerate"),Vu.forEach(s),Qp=p(Qo," supports following config through the CLI:"),Qo.forEach(s),Qn=u(e),f(ot.$$.fragment,e),Xn=u(e),ps=n(e,"P",{});var Yu=o(ps);Xp=p(Yu,"To be able to tweak more options, you will need to use a DeepSpeed config file."),Yu.forEach(s),eo=u(e),J=n(e,"H3",{class:!0});var Xo=o(J);De=n(Xo,"A",{id:!0,class:!0,href:!0});var Ju=o(De);Xs=n(Ju,"SPAN",{});var Ku=o(Xs);f(lt.$$.fragment,Ku),Ku.forEach(s),Ju.forEach(s),er=u(Xo),ea=n(Xo,"SPAN",{});var Qu=o(ea);tr=p(Qu,"DeepSpeed Config File"),Qu.forEach(s),Xo.forEach(s),to=p(e,`

On your machine(s) just run:

	`),f(pt.$$.fragment,e),so=u(e),rs=n(e,"P",{});var Xu=o(rs);sr=p(Xu,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Xu.forEach(s),ao=u(e),f(rt.$$.fragment,e),no=u(e),qe=n(e,"P",{});var el=o(qe);ar=p(el,"For instance, here is how you would run the NLP example "),ta=n(el,"CODE",{});var ed=o(ta);nr=p(ed,"examples/by_feature/deepspeed_with_config_support.py"),ed.forEach(s),or=p(el," (from the root of the repo) with DeepSpeed Config File:"),el.forEach(s),oo=u(e),is=n(e,"P",{});var td=o(is);sa=n(td,"STRONG",{});var sd=o(sa);lr=p(sd,"ZeRO Stage-2 DeepSpeed Config File Example"),sd.forEach(s),td.forEach(s),lo=u(e),f(it.$$.fragment,e),po=u(e),ke=n(e,"P",{});var tl=o(ke);pr=p(tl,"with the contents of "),aa=n(tl,"CODE",{});var ad=o(aa);rr=p(ad,"zero_stage2_config.json"),ad.forEach(s),ir=p(tl," being:"),tl.forEach(s),ro=u(e),f(ct.$$.fragment,e),io=u(e),f(ut.$$.fragment,e),co=u(e),cs=n(e,"P",{});var nd=o(cs);na=n(nd,"STRONG",{});var od=o(na);cr=p(od,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),od.forEach(s),nd.forEach(s),uo=u(e),f(dt.$$.fragment,e),ho=u(e),ze=n(e,"P",{});var sl=o(ze);ur=p(sl,"with the contents of "),oa=n(sl,"CODE",{});var ld=o(oa);dr=p(ld,"zero_stage3_offload_config.json"),ld.forEach(s),hr=p(sl," being:"),sl.forEach(s),fo=u(e),f(ht.$$.fragment,e),mo=u(e),f(ft.$$.fragment,e),_o=u(e),us=n(e,"P",{});var pd=o(us);la=n(pd,"STRONG",{});var rd=o(la);fr=p(rd,"Important code changes when using DeepSpeed Config File"),rd.forEach(s),pd.forEach(s),go=u(e),Oe=n(e,"OL",{});var al=o(Oe);$=n(al,"LI",{});var O=o($);K=n(O,"P",{});var _s=o(K);mr=p(_s,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),mt=n(_s,"A",{href:!0,rel:!0});var id=o(mt);_r=p(id,"DeepSpeed Optimizers"),id.forEach(s),gr=p(_s," and "),_t=n(_s,"A",{href:!0,rel:!0});var cd=o(_t);wr=p(cd,"DeepSpeed Schedulers"),cd.forEach(s),vr=p(_s,` documentation.
We will look at the changes needed in the code when using these.`),_s.forEach(s),jr=u(O),E=n(O,"P",{});var P=o(E);br=p(P,"a. DS Optim + DS Scheduler: The case when both "),pa=n(P,"CODE",{});var ud=o(pa);yr=p(ud,"optimizer"),ud.forEach(s),$r=p(P," and "),ra=n(P,"CODE",{});var dd=o(ra);Er=p(dd,"scheduler"),dd.forEach(s),Sr=p(P,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),ia=n(P,"CODE",{});var hd=o(ia);Dr=p(hd,"accelerate.utils.DummyOptim"),hd.forEach(s),qr=p(P," and "),ca=n(P,"CODE",{});var fd=o(ca);kr=p(fd,"accelerate.utils.DummyScheduler"),fd.forEach(s),zr=p(P,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),ua=n(P,"CODE",{});var md=o(ua);Or=p(md,"examples/by_feature/deepspeed_with_config_support.py"),md.forEach(s),Pr=p(P," showing this:"),P.forEach(s),xr=u(O),f(gt.$$.fragment,O),Cr=u(O),q=n(O,"P",{});var L=o(q);Rr=p(L,"b. Custom Optim + Custom Scheduler: The case when both "),da=n(L,"CODE",{});var _d=o(da);Ir=p(_d,"optimizer"),_d.forEach(s),Ar=p(L," and "),ha=n(L,"CODE",{});var gd=o(ha);Zr=p(gd,"scheduler"),gd.forEach(s),Tr=p(L,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),fa=n(L,"CODE",{});var wd=o(fa);Nr=p(wd,"optimizer"),wd.forEach(s),Lr=p(L," and "),ma=n(L,"CODE",{});var vd=o(ma);Ur=p(vd,"scheduler"),vd.forEach(s),Mr=p(L," keys are absent in the DeepSpeed config file."),L.forEach(s),Gr=u(O),Q=n(O,"P",{});var gs=o(Q);Fr=p(gs,"c. Custom Optim + DS Scheduler: The case when only "),_a=n(gs,"CODE",{});var jd=o(_a);Wr=p(jd,"scheduler"),jd.forEach(s),Hr=p(gs,` key is present in the DeepSpeed config file.
In this situation, user has to use `),ga=n(gs,"CODE",{});var bd=o(ga);Br=p(bd,"accelerate.utils.DummyScheduler"),bd.forEach(s),Vr=p(gs," to replace the PyTorch/Custom scheduler in their code."),gs.forEach(s),Yr=u(O),wt=n(O,"P",{});var nl=o(wt);Jr=p(nl,"d. DS Optim + Custom Scheduler: The case when only "),wa=n(nl,"CODE",{});var yd=o(wa);Kr=p(yd,"optimizer"),yd.forEach(s),Qr=p(nl,` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),nl.forEach(s),O.forEach(s),Xr=u(al),va=n(al,"LI",{});var $d=o(va);S=n($d,"P",{});var x=o(S);ei=p(x,"Notice the "),ja=n(x,"CODE",{});var Ed=o(ja);ti=p(Ed,"auto"),Ed.forEach(s),si=p(x," values in the above example DeepSpeed config files. These are automatically handled by "),ba=n(x,"CODE",{});var Sd=o(ba);ai=p(Sd,"prepare"),Sd.forEach(s),ni=p(x,` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),ya=n(x,"CODE",{});var Dd=o(ya);oi=p(Dd,"prepare"),Dd.forEach(s),li=p(x,` method.
Only the `),$a=n(x,"CODE",{});var qd=o($a);pi=p(qd,"auto"),qd.forEach(s),ri=p(x," fields specified in above examples are handled by "),Ea=n(x,"CODE",{});var kd=o(Ea);ii=p(kd,"prepare"),kd.forEach(s),ci=p(x," method and the rest have to be explicitly specified by the user."),x.forEach(s),$d.forEach(s),al.forEach(s),wo=u(e),X=n(e,"H2",{class:!0});var ol=o(X);Pe=n(ol,"A",{id:!0,class:!0,href:!0});var zd=o(Pe);Sa=n(zd,"SPAN",{});var Od=o(Sa);f(vt.$$.fragment,Od),Od.forEach(s),zd.forEach(s),ui=u(ol),Da=n(ol,"SPAN",{});var Pd=o(Da);di=p(Pd,"Saving and loading"),Pd.forEach(s),ol.forEach(s),vo=u(e),xe=n(e,"OL",{});var ll=o(xe);qa=n(ll,"LI",{});var xd=o(qa);ka=n(xd,"P",{});var Cd=o(ka);hi=p(Cd,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Cd.forEach(s),xd.forEach(s),fi=u(ll),v=n(ll,"LI",{});var j=o(v);jt=n(j,"P",{});var pl=o(jt);mi=p(pl,"under ZeRO Stage-3, "),za=n(pl,"CODE",{});var Rd=o(za);_i=p(Rd,"state_dict"),Rd.forEach(s),gi=p(pl,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),pl.forEach(s),wi=u(j),D=n(j,"P",{});var C=o(D);vi=p(C,"a. Saving the entire 16bit model weights to directly load later on using "),Oa=n(C,"CODE",{});var Id=o(Oa);ji=p(Id,"model.load_state_dict(torch.load(pytorch_model.bin))"),Id.forEach(s),bi=p(C,`.
For this, either set `),Pa=n(C,"CODE",{});var Ad=o(Pa);yi=p(Ad,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),Ad.forEach(s),$i=p(C,` to True in DeepSpeed Config file or set
`),xa=n(C,"CODE",{});var Zd=o(xa);Ei=p(Zd,"zero3_save_16bit_model"),Zd.forEach(s),Si=p(C,` to True in DeepSpeed Plugin.
`),Ca=n(C,"STRONG",{});var Td=o(Ca);Di=p(Td,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),Td.forEach(s),qi=p(C,`
Below is the snippet from `),Ra=n(C,"CODE",{});var Nd=o(Ra);ki=p(Nd,"examples/by_feature/deepspeed_with_config_support.py"),Nd.forEach(s),zi=p(C," showing this:"),C.forEach(s),Oi=u(j),f(bt.$$.fragment,j),Pi=u(j),ee=n(j,"P",{});var ws=o(ee);xi=p(ws,"b. To get 32bit weights, first save the model using "),Ia=n(ws,"CODE",{});var Ld=o(Ia);Ci=p(Ld,"model.save_checkpoint()"),Ld.forEach(s),Ri=p(ws,`.
Below is the snippet from `),Aa=n(ws,"CODE",{});var Ud=o(Aa);Ii=p(Ud,"examples/by_feature/deepspeed_with_config_support.py"),Ud.forEach(s),Ai=p(ws," showing this:"),ws.forEach(s),Zi=u(j),f(yt.$$.fragment,j),Ti=u(j),te=n(j,"P",{});var vs=o(te);Ni=p(vs,"This will create ZeRO model and optimizer partitions along with "),Za=n(vs,"CODE",{});var Md=o(Za);Li=p(Md,"zero_to_fp32.py"),Md.forEach(s),Ui=p(vs,` script in checkpoint directory.
One can use this script to do offline consolidation.`),Mi=n(vs,"BR",{}),Gi=p(vs,`
It requires no configuration files or GPUs. Here is an example of its usage:`),vs.forEach(s),Fi=u(j),f($t.$$.fragment,j),Wi=u(j),Ta=n(j,"P",{});var Gd=o(Ta);Hi=p(Gd,"To get 32bit model for saving/inference, one can do the following:"),Gd.forEach(s),Bi=u(j),f(Et.$$.fragment,j),Vi=u(j),Na=n(j,"P",{});var Fd=o(Na);Yi=p(Fd,"If only interested in state_dict, one can do the following:"),Fd.forEach(s),Ji=u(j),f(St.$$.fragment,j),Ki=u(j),La=n(j,"P",{});var Wd=o(La);Qi=p(Wd,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Wd.forEach(s),j.forEach(s),ll.forEach(s),jo=u(e),se=n(e,"H2",{class:!0});var rl=o(se);Ce=n(rl,"A",{id:!0,class:!0,href:!0});var Hd=o(Ce);Ua=n(Hd,"SPAN",{});var Bd=o(Ua);f(Dt.$$.fragment,Bd),Bd.forEach(s),Hd.forEach(s),Xi=u(rl),Ma=n(rl,"SPAN",{});var Vd=o(Ma);ec=p(Vd,"ZeRO Inference"),Vd.forEach(s),rl.forEach(s),bo=p(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),f(qt.$$.fragment,e),yo=u(e),ae=n(e,"H2",{class:!0});var il=o(ae);Re=n(il,"A",{id:!0,class:!0,href:!0});var Yd=o(Re);Ga=n(Yd,"SPAN",{});var Jd=o(Ga);f(kt.$$.fragment,Jd),Jd.forEach(s),Yd.forEach(s),tc=u(il),Fa=n(il,"SPAN",{});var Kd=o(Fa);sc=p(Kd,"Few caveats to be aware of"),Kd.forEach(s),il.forEach(s),$o=u(e),Z=n(e,"OL",{});var js=o(Z);Wa=n(js,"LI",{});var Qd=o(Wa);ac=p(Qd,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),Qd.forEach(s),nc=u(js),zt=n(js,"LI",{});var cl=o(zt);oc=p(cl,"Current integration doesn\u2019t support "),Ha=n(cl,"CODE",{});var Xd=o(Ha);lc=p(Xd,"mpu"),Xd.forEach(s),pc=p(cl,", limiting the tensor parallelism which is supported in Megatron-LM."),cl.forEach(s),rc=u(js),Ot=n(js,"LI",{});var ul=o(Ot);ic=p(ul,"Current integration doesn\u2019t support multiple models for a given "),Ba=n(ul,"CODE",{});var eh=o(Ba);cc=p(eh,"accelerator"),eh.forEach(s),uc=p(ul," object."),ul.forEach(s),js.forEach(s),Eo=u(e),ne=n(e,"H2",{class:!0});var dl=o(ne);Ie=n(dl,"A",{id:!0,class:!0,href:!0});var th=o(Ie);Va=n(th,"SPAN",{});var sh=o(Va);f(Pt.$$.fragment,sh),sh.forEach(s),th.forEach(s),dc=u(dl),Ya=n(dl,"SPAN",{});var ah=o(Ya);hc=p(ah,"Internals"),ah.forEach(s),dl.forEach(s),So=u(e),R=n(e,"DIV",{class:!0});var bs=o(R);f(xt.$$.fragment,bs),fc=u(bs),Ja=n(bs,"P",{});var nh=o(Ja);mc=p(nh,"This plugin is used to integrate DeepSpeed."),nh.forEach(s),_c=u(bs),Ae=n(bs,"DIV",{class:!0});var hl=o(Ae);f(Ct.$$.fragment,hl),gc=u(hl),Ka=n(hl,"P",{});var oh=o(Ka);wc=p(oh,"Process the DeepSpeed config with the values from the kwargs."),oh.forEach(s),hl.forEach(s),bs.forEach(s),Do=u(e),oe=n(e,"DIV",{class:!0});var fl=o(oe);f(Rt.$$.fragment,fl),vc=u(fl),Qa=n(fl,"P",{});var lh=o(Qa);jc=p(lh,`Dummy optimizer presents model parameters or param groups, this is primarily used to follow conventional training
loop when optimizer config is specified in the deepspeed config file.`),lh.forEach(s),fl.forEach(s),qo=u(e),le=n(e,"DIV",{class:!0});var ml=o(le);f(It.$$.fragment,ml),bc=u(ml),Xa=n(ml,"P",{});var ph=o(Xa);yc=p(ph,`Dummy scheduler presents model parameters or param groups, this is primarily used to follow conventional training
loop when scheduler config is specified in the deepspeed config file.`),ph.forEach(s),ml.forEach(s),ko=u(e),pe=n(e,"DIV",{class:!0});var _l=o(pe);f(At.$$.fragment,_l),$c=u(_l),en=n(_l,"P",{});var rh=o(en);Ec=p(rh,"Internal wrapper for deepspeed.runtime.engine.DeepSpeedEngine. This is used to follow conventional training loop."),rh.forEach(s),_l.forEach(s),zo=u(e),re=n(e,"DIV",{class:!0});var gl=o(re);f(Zt.$$.fragment,gl),Sc=u(gl),tn=n(gl,"P",{});var ih=o(tn);Dc=p(ih,"Internal wrapper around a deepspeed optimizer."),ih.forEach(s),gl.forEach(s),Oo=u(e),ie=n(e,"DIV",{class:!0});var wl=o(ie);f(Tt.$$.fragment,wl),qc=u(wl),sn=n(wl,"P",{});var ch=o(sn);kc=p(ch,"Internal wrapper around a deepspeed scheduler."),ch.forEach(s),wl.forEach(s),Po=u(e),ce=n(e,"H2",{class:!0});var vl=o(ce);Ze=n(vl,"A",{id:!0,class:!0,href:!0});var uh=o(Ze);an=n(uh,"SPAN",{});var dh=o(an);f(Nt.$$.fragment,dh),dh.forEach(s),uh.forEach(s),zc=u(vl),nn=n(vl,"SPAN",{});var hh=o(nn);Oc=p(hh,"Main DeepSpeed Resources"),hh.forEach(s),vl.forEach(s),xo=u(e),k=n(e,"UL",{});var Te=o(k);on=n(Te,"LI",{});var fh=o(on);Lt=n(fh,"A",{href:!0,rel:!0});var mh=o(Lt);Pc=p(mh,"Project\u2019s github"),mh.forEach(s),fh.forEach(s),xc=u(Te),ln=n(Te,"LI",{});var _h=o(ln);Ut=n(_h,"A",{href:!0,rel:!0});var gh=o(Ut);Cc=p(gh,"Usage docs"),gh.forEach(s),_h.forEach(s),Rc=u(Te),pn=n(Te,"LI",{});var wh=o(pn);Mt=n(wh,"A",{href:!0,rel:!0});var vh=o(Mt);Ic=p(vh,"API docs"),vh.forEach(s),wh.forEach(s),Ac=u(Te),rn=n(Te,"LI",{});var jh=o(rn);Gt=n(jh,"A",{href:!0,rel:!0});var bh=o(Gt);Zc=p(bh,"Blog posts"),bh.forEach(s),jh.forEach(s),Te.forEach(s),Co=u(e),ds=n(e,"P",{});var yh=o(ds);Tc=p(yh,"Papers:"),yh.forEach(s),Ro=u(e),T=n(e,"UL",{});var ys=o(T);cn=n(ys,"LI",{});var $h=o(cn);Ft=n($h,"A",{href:!0,rel:!0});var Eh=o(Ft);Nc=p(Eh,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Eh.forEach(s),$h.forEach(s),Lc=u(ys),un=n(ys,"LI",{});var Sh=o(un);Wt=n(Sh,"A",{href:!0,rel:!0});var Dh=o(Wt);Uc=p(Dh,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),Dh.forEach(s),Sh.forEach(s),Mc=u(ys),dn=n(ys,"LI",{});var qh=o(dn);Ht=n(qh,"A",{href:!0,rel:!0});var kh=o(Ht);Gc=p(kh,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),kh.forEach(s),qh.forEach(s),ys.forEach(s),Io=u(e),N=n(e,"P",{});var $s=o(N);Fc=p($s,"Finally, please, remember that, \u{1F917} "),hn=n($s,"CODE",{});var zh=o(hn);Wc=p(zh,"Accelerate"),zh.forEach(s),Hc=p($s,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Bt=n($s,"A",{href:!0,rel:!0});var Oh=o(Bt);Bc=p(Oh,"DeepSpeed GitHub"),Oh.forEach(s),Vc=p($s,"."),$s.forEach(s),this.h()},h(){d(M,"name","hf:doc:metadata"),d(M,"content",JSON.stringify(Nh)),d(ue,"id","deepspeed"),d(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ue,"href","#deepspeed"),d(G,"class","relative group"),d(Le,"href","https://github.com/microsoft/DeepSpeed"),d(Le,"rel","nofollow"),d(Ue,"href","https://arxiv.org/abs/1910.02054"),d(Ue,"rel","nofollow"),d(Me,"href","https://arxiv.org/abs/2101.06840"),d(Me,"rel","nofollow"),d(Ge,"href","https://arxiv.org/abs/2104.07857"),d(Ge,"rel","nofollow"),d(Fe,"href","https://github.com/microsoft/DeepSpeed"),d(Fe,"rel","nofollow"),d(fe,"id","what-is-integrated"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#what-is-integrated"),d(H,"class","relative group"),d(Be,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),d(Be,"rel","nofollow"),Ih(Xt.src,Jc="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/parallelism-zero.png")||d(Xt,"src",Jc),d(Xt,"alt","ZeRO Data Parallelism"),d(Ve,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),d(Ve,"rel","nofollow"),d(as,"href","#deepspeed-zero-inference"),d(ye,"id","how-it-works"),d(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ye,"href","#how-it-works"),d(B,"class","relative group"),d(Ke,"href","https://github.com/microsoft/DeepSpeed#installation"),d(Ke,"rel","nofollow"),d($e,"id","accelerate-deepspeed-plugin"),d($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($e,"href","#accelerate-deepspeed-plugin"),d(Y,"class","relative group"),d(De,"id","deepspeed-config-file"),d(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(De,"href","#deepspeed-config-file"),d(J,"class","relative group"),d(mt,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),d(mt,"rel","nofollow"),d(_t,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),d(_t,"rel","nofollow"),d(Pe,"id","saving-and-loading"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#saving-and-loading"),d(X,"class","relative group"),d(Ce,"id","zero-inference"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#zero-inference"),d(se,"class","relative group"),d(Re,"id","few-caveats-to-be-aware-of"),d(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Re,"href","#few-caveats-to-be-aware-of"),d(ae,"class","relative group"),d(Ie,"id","accelerate.DeepSpeedPlugin"),d(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ie,"href","#accelerate.DeepSpeedPlugin"),d(ne,"class","relative group"),d(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ze,"id","main-deepspeed-resources"),d(Ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ze,"href","#main-deepspeed-resources"),d(ce,"class","relative group"),d(Lt,"href","https://github.com/microsoft/deepspeed"),d(Lt,"rel","nofollow"),d(Ut,"href","https://www.deepspeed.ai/getting-started/"),d(Ut,"rel","nofollow"),d(Mt,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),d(Mt,"rel","nofollow"),d(Gt,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),d(Gt,"rel","nofollow"),d(Ft,"href","https://arxiv.org/abs/1910.02054"),d(Ft,"rel","nofollow"),d(Wt,"href","https://arxiv.org/abs/2101.06840"),d(Wt,"rel","nofollow"),d(Ht,"href","https://arxiv.org/abs/2104.07857"),d(Ht,"rel","nofollow"),d(Bt,"href","https://github.com/microsoft/DeepSpeed/issues"),d(Bt,"rel","nofollow")},m(e,r){t(document.head,M),i(e,gn,r),i(e,G,r),t(G,ue),t(ue,Es),m(Ne,Es,null),t(G,jl),t(G,Ss),t(Ss,bl),i(e,wn,r),i(e,F,r),t(F,Le),t(Le,yl),t(F,$l),t(F,Ue),t(Ue,El),t(F,Sl),i(e,vn,r),i(e,y,r),t(y,Ds),t(Ds,Dl),t(y,ql),t(y,qs),t(qs,kl),t(y,zl),t(y,ks),t(ks,Ol),t(y,Pl),t(y,zs),t(zs,xl),t(y,Cl),t(y,Os),t(Os,Rl),t(y,Il),t(y,Ps),t(Ps,Al),i(e,jn,r),i(e,I,r),t(I,Zl),t(I,Me),t(Me,Tl),t(I,Nl),t(I,Ge),t(Ge,Ll),t(I,Ul),i(e,bn,r),i(e,Yt,r),t(Yt,Ml),i(e,yn,r),i(e,Jt,r),t(Jt,Gl),i(e,$n,r),i(e,de,r),t(de,Fl),t(de,Fe),t(Fe,Wl),t(de,Hl),i(e,En,r),i(e,he,r),t(he,W),t(W,Bl),t(W,xs),t(xs,Vl),t(W,Yl),t(W,Cs),t(Cs,Jl),t(W,Kl),t(he,Ql),t(he,We),t(We,Xl),t(We,Rs),t(Rs,ep),t(We,tp),i(e,Sn,r),i(e,H,r),t(H,fe),t(fe,Is),m(He,Is,null),t(H,sp),t(H,As),t(As,ap),i(e,Dn,r),i(e,Kt,r),t(Kt,np),i(e,qn,r),i(e,Qt,r),t(Qt,me),t(me,op),t(me,Be),t(Be,lp),t(me,pp),t(me,Xt),i(e,kn,r),i(e,_e,r),t(_e,rp),t(_e,Ve),t(Ve,ip),t(_e,cp),i(e,zn,r),i(e,ge,r),t(ge,up),t(ge,Zs),t(Zs,dp),t(ge,hp),i(e,On,r),i(e,we,r),t(we,fp),t(we,Ts),t(Ts,mp),t(we,_p),i(e,Pn,r),i(e,ve,r),t(ve,gp),t(ve,Ns),t(Ns,wp),t(ve,vp),i(e,xn,r),i(e,je,r),t(je,jp),t(je,Ls),t(Ls,bp),t(je,yp),i(e,Cn,r),i(e,be,r),t(be,$p),t(be,Us),t(Us,Ep),t(be,Sp),i(e,Rn,r),i(e,es,r),t(es,Dp),i(e,In,r),i(e,ts,r),t(ts,qp),i(e,An,r),i(e,ss,r),t(ss,Ye),t(Ye,kp),t(Ye,as),t(as,zp),t(Ye,Op),i(e,Zn,r),i(e,B,r),t(B,ye),t(ye,Ms),m(Je,Ms,null),t(B,Pp),t(B,Gs),t(Gs,xp),i(e,Tn,r),i(e,V,r),t(V,Fs),t(Fs,Cp),t(V,Rp),t(V,Ke),t(Ke,Ip),t(V,Ap),i(e,Nn,r),i(e,A,r),t(A,Zp),t(A,Ws),t(Ws,Tp),t(A,Np),t(A,Hs),t(Hs,Lp),t(A,Up),i(e,Ln,r),i(e,Y,r),t(Y,$e),t($e,Bs),m(Qe,Bs,null),t(Y,Mp),t(Y,Vs),t(Vs,Gp),i(e,Un,r),m(Xe,e,r),i(e,Mn,r),i(e,ns,r),t(ns,Fp),i(e,Gn,r),m(et,e,r),i(e,Fn,r),i(e,Ee,r),t(Ee,Wp),t(Ee,Ys),t(Ys,Hp),t(Ee,Bp),i(e,Wn,r),i(e,os,r),t(os,Js),t(Js,Vp),i(e,Hn,r),m(tt,e,r),i(e,Bn,r),m(st,e,r),i(e,Vn,r),i(e,ls,r),t(ls,Ks),t(Ks,Yp),i(e,Yn,r),m(at,e,r),i(e,Jn,r),m(nt,e,r),i(e,Kn,r),i(e,Se,r),t(Se,Jp),t(Se,Qs),t(Qs,Kp),t(Se,Qp),i(e,Qn,r),m(ot,e,r),i(e,Xn,r),i(e,ps,r),t(ps,Xp),i(e,eo,r),i(e,J,r),t(J,De),t(De,Xs),m(lt,Xs,null),t(J,er),t(J,ea),t(ea,tr),i(e,to,r),m(pt,e,r),i(e,so,r),i(e,rs,r),t(rs,sr),i(e,ao,r),m(rt,e,r),i(e,no,r),i(e,qe,r),t(qe,ar),t(qe,ta),t(ta,nr),t(qe,or),i(e,oo,r),i(e,is,r),t(is,sa),t(sa,lr),i(e,lo,r),m(it,e,r),i(e,po,r),i(e,ke,r),t(ke,pr),t(ke,aa),t(aa,rr),t(ke,ir),i(e,ro,r),m(ct,e,r),i(e,io,r),m(ut,e,r),i(e,co,r),i(e,cs,r),t(cs,na),t(na,cr),i(e,uo,r),m(dt,e,r),i(e,ho,r),i(e,ze,r),t(ze,ur),t(ze,oa),t(oa,dr),t(ze,hr),i(e,fo,r),m(ht,e,r),i(e,mo,r),m(ft,e,r),i(e,_o,r),i(e,us,r),t(us,la),t(la,fr),i(e,go,r),i(e,Oe,r),t(Oe,$),t($,K),t(K,mr),t(K,mt),t(mt,_r),t(K,gr),t(K,_t),t(_t,wr),t(K,vr),t($,jr),t($,E),t(E,br),t(E,pa),t(pa,yr),t(E,$r),t(E,ra),t(ra,Er),t(E,Sr),t(E,ia),t(ia,Dr),t(E,qr),t(E,ca),t(ca,kr),t(E,zr),t(E,ua),t(ua,Or),t(E,Pr),t($,xr),m(gt,$,null),t($,Cr),t($,q),t(q,Rr),t(q,da),t(da,Ir),t(q,Ar),t(q,ha),t(ha,Zr),t(q,Tr),t(q,fa),t(fa,Nr),t(q,Lr),t(q,ma),t(ma,Ur),t(q,Mr),t($,Gr),t($,Q),t(Q,Fr),t(Q,_a),t(_a,Wr),t(Q,Hr),t(Q,ga),t(ga,Br),t(Q,Vr),t($,Yr),t($,wt),t(wt,Jr),t(wt,wa),t(wa,Kr),t(wt,Qr),t(Oe,Xr),t(Oe,va),t(va,S),t(S,ei),t(S,ja),t(ja,ti),t(S,si),t(S,ba),t(ba,ai),t(S,ni),t(S,ya),t(ya,oi),t(S,li),t(S,$a),t($a,pi),t(S,ri),t(S,Ea),t(Ea,ii),t(S,ci),i(e,wo,r),i(e,X,r),t(X,Pe),t(Pe,Sa),m(vt,Sa,null),t(X,ui),t(X,Da),t(Da,di),i(e,vo,r),i(e,xe,r),t(xe,qa),t(qa,ka),t(ka,hi),t(xe,fi),t(xe,v),t(v,jt),t(jt,mi),t(jt,za),t(za,_i),t(jt,gi),t(v,wi),t(v,D),t(D,vi),t(D,Oa),t(Oa,ji),t(D,bi),t(D,Pa),t(Pa,yi),t(D,$i),t(D,xa),t(xa,Ei),t(D,Si),t(D,Ca),t(Ca,Di),t(D,qi),t(D,Ra),t(Ra,ki),t(D,zi),t(v,Oi),m(bt,v,null),t(v,Pi),t(v,ee),t(ee,xi),t(ee,Ia),t(Ia,Ci),t(ee,Ri),t(ee,Aa),t(Aa,Ii),t(ee,Ai),t(v,Zi),m(yt,v,null),t(v,Ti),t(v,te),t(te,Ni),t(te,Za),t(Za,Li),t(te,Ui),t(te,Mi),t(te,Gi),t(v,Fi),m($t,v,null),t(v,Wi),t(v,Ta),t(Ta,Hi),t(v,Bi),m(Et,v,null),t(v,Vi),t(v,Na),t(Na,Yi),t(v,Ji),m(St,v,null),t(v,Ki),t(v,La),t(La,Qi),i(e,jo,r),i(e,se,r),t(se,Ce),t(Ce,Ua),m(Dt,Ua,null),t(se,Xi),t(se,Ma),t(Ma,ec),i(e,bo,r),m(qt,e,r),i(e,yo,r),i(e,ae,r),t(ae,Re),t(Re,Ga),m(kt,Ga,null),t(ae,tc),t(ae,Fa),t(Fa,sc),i(e,$o,r),i(e,Z,r),t(Z,Wa),t(Wa,ac),t(Z,nc),t(Z,zt),t(zt,oc),t(zt,Ha),t(Ha,lc),t(zt,pc),t(Z,rc),t(Z,Ot),t(Ot,ic),t(Ot,Ba),t(Ba,cc),t(Ot,uc),i(e,Eo,r),i(e,ne,r),t(ne,Ie),t(Ie,Va),m(Pt,Va,null),t(ne,dc),t(ne,Ya),t(Ya,hc),i(e,So,r),i(e,R,r),m(xt,R,null),t(R,fc),t(R,Ja),t(Ja,mc),t(R,_c),t(R,Ae),m(Ct,Ae,null),t(Ae,gc),t(Ae,Ka),t(Ka,wc),i(e,Do,r),i(e,oe,r),m(Rt,oe,null),t(oe,vc),t(oe,Qa),t(Qa,jc),i(e,qo,r),i(e,le,r),m(It,le,null),t(le,bc),t(le,Xa),t(Xa,yc),i(e,ko,r),i(e,pe,r),m(At,pe,null),t(pe,$c),t(pe,en),t(en,Ec),i(e,zo,r),i(e,re,r),m(Zt,re,null),t(re,Sc),t(re,tn),t(tn,Dc),i(e,Oo,r),i(e,ie,r),m(Tt,ie,null),t(ie,qc),t(ie,sn),t(sn,kc),i(e,Po,r),i(e,ce,r),t(ce,Ze),t(Ze,an),m(Nt,an,null),t(ce,zc),t(ce,nn),t(nn,Oc),i(e,xo,r),i(e,k,r),t(k,on),t(on,Lt),t(Lt,Pc),t(k,xc),t(k,ln),t(ln,Ut),t(Ut,Cc),t(k,Rc),t(k,pn),t(pn,Mt),t(Mt,Ic),t(k,Ac),t(k,rn),t(rn,Gt),t(Gt,Zc),i(e,Co,r),i(e,ds,r),t(ds,Tc),i(e,Ro,r),i(e,T,r),t(T,cn),t(cn,Ft),t(Ft,Nc),t(T,Lc),t(T,un),t(un,Wt),t(Wt,Uc),t(T,Mc),t(T,dn),t(dn,Ht),t(Ht,Gc),i(e,Io,r),i(e,N,r),t(N,Fc),t(N,hn),t(hn,Wc),t(N,Hc),t(N,Bt),t(Bt,Bc),t(N,Vc),Ao=!0},p:Ah,i(e){Ao||(_(Ne.$$.fragment,e),_(He.$$.fragment,e),_(Je.$$.fragment,e),_(Qe.$$.fragment,e),_(Xe.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(st.$$.fragment,e),_(at.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(lt.$$.fragment,e),_(pt.$$.fragment,e),_(rt.$$.fragment,e),_(it.$$.fragment,e),_(ct.$$.fragment,e),_(ut.$$.fragment,e),_(dt.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(vt.$$.fragment,e),_(bt.$$.fragment,e),_(yt.$$.fragment,e),_($t.$$.fragment,e),_(Et.$$.fragment,e),_(St.$$.fragment,e),_(Dt.$$.fragment,e),_(qt.$$.fragment,e),_(kt.$$.fragment,e),_(Pt.$$.fragment,e),_(xt.$$.fragment,e),_(Ct.$$.fragment,e),_(Rt.$$.fragment,e),_(It.$$.fragment,e),_(At.$$.fragment,e),_(Zt.$$.fragment,e),_(Tt.$$.fragment,e),_(Nt.$$.fragment,e),Ao=!0)},o(e){g(Ne.$$.fragment,e),g(He.$$.fragment,e),g(Je.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(et.$$.fragment,e),g(tt.$$.fragment,e),g(st.$$.fragment,e),g(at.$$.fragment,e),g(nt.$$.fragment,e),g(ot.$$.fragment,e),g(lt.$$.fragment,e),g(pt.$$.fragment,e),g(rt.$$.fragment,e),g(it.$$.fragment,e),g(ct.$$.fragment,e),g(ut.$$.fragment,e),g(dt.$$.fragment,e),g(ht.$$.fragment,e),g(ft.$$.fragment,e),g(gt.$$.fragment,e),g(vt.$$.fragment,e),g(bt.$$.fragment,e),g(yt.$$.fragment,e),g($t.$$.fragment,e),g(Et.$$.fragment,e),g(St.$$.fragment,e),g(Dt.$$.fragment,e),g(qt.$$.fragment,e),g(kt.$$.fragment,e),g(Pt.$$.fragment,e),g(xt.$$.fragment,e),g(Ct.$$.fragment,e),g(Rt.$$.fragment,e),g(It.$$.fragment,e),g(At.$$.fragment,e),g(Zt.$$.fragment,e),g(Tt.$$.fragment,e),g(Nt.$$.fragment,e),Ao=!1},d(e){s(M),e&&s(gn),e&&s(G),w(Ne),e&&s(wn),e&&s(F),e&&s(vn),e&&s(y),e&&s(jn),e&&s(I),e&&s(bn),e&&s(Yt),e&&s(yn),e&&s(Jt),e&&s($n),e&&s(de),e&&s(En),e&&s(he),e&&s(Sn),e&&s(H),w(He),e&&s(Dn),e&&s(Kt),e&&s(qn),e&&s(Qt),e&&s(kn),e&&s(_e),e&&s(zn),e&&s(ge),e&&s(On),e&&s(we),e&&s(Pn),e&&s(ve),e&&s(xn),e&&s(je),e&&s(Cn),e&&s(be),e&&s(Rn),e&&s(es),e&&s(In),e&&s(ts),e&&s(An),e&&s(ss),e&&s(Zn),e&&s(B),w(Je),e&&s(Tn),e&&s(V),e&&s(Nn),e&&s(A),e&&s(Ln),e&&s(Y),w(Qe),e&&s(Un),w(Xe,e),e&&s(Mn),e&&s(ns),e&&s(Gn),w(et,e),e&&s(Fn),e&&s(Ee),e&&s(Wn),e&&s(os),e&&s(Hn),w(tt,e),e&&s(Bn),w(st,e),e&&s(Vn),e&&s(ls),e&&s(Yn),w(at,e),e&&s(Jn),w(nt,e),e&&s(Kn),e&&s(Se),e&&s(Qn),w(ot,e),e&&s(Xn),e&&s(ps),e&&s(eo),e&&s(J),w(lt),e&&s(to),w(pt,e),e&&s(so),e&&s(rs),e&&s(ao),w(rt,e),e&&s(no),e&&s(qe),e&&s(oo),e&&s(is),e&&s(lo),w(it,e),e&&s(po),e&&s(ke),e&&s(ro),w(ct,e),e&&s(io),w(ut,e),e&&s(co),e&&s(cs),e&&s(uo),w(dt,e),e&&s(ho),e&&s(ze),e&&s(fo),w(ht,e),e&&s(mo),w(ft,e),e&&s(_o),e&&s(us),e&&s(go),e&&s(Oe),w(gt),e&&s(wo),e&&s(X),w(vt),e&&s(vo),e&&s(xe),w(bt),w(yt),w($t),w(Et),w(St),e&&s(jo),e&&s(se),w(Dt),e&&s(bo),w(qt,e),e&&s(yo),e&&s(ae),w(kt),e&&s($o),e&&s(Z),e&&s(Eo),e&&s(ne),w(Pt),e&&s(So),e&&s(R),w(xt),w(Ct),e&&s(Do),e&&s(oe),w(Rt),e&&s(qo),e&&s(le),w(It),e&&s(ko),e&&s(pe),w(At),e&&s(zo),e&&s(re),w(Zt),e&&s(Oo),e&&s(ie),w(Tt),e&&s(Po),e&&s(ce),w(Nt),e&&s(xo),e&&s(k),e&&s(Co),e&&s(ds),e&&s(Ro),e&&s(T),e&&s(Io),e&&s(N)}}}const Nh={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"accelerate.DeepSpeedPlugin",title:"Internals"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed "};function Lh(Yc){return Zh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wh extends Ph{constructor(M){super();xh(this,M,Lh,Th,Ch,{})}}export{Wh as default,Nh as metadata};
