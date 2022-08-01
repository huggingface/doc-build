import{S as jh,i as yh,s as bh,e as o,k as c,w as d,t as a,M as Eh,c as l,d as t,m as u,a as p,x as f,h as n,b as h,$ as qh,G as s,g as r,y as _,L as $h,q as m,o as g,B as w,v as Sh}from"../../chunks/vendor-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../../chunks/CodeBlock-hf-doc-builder.js";function kh(Br){let L,Fa,U,ne,lt,Pe,Ro,pt,Ao,Ga,M,xe,Io,Zo,Ce,To,No,Ha,b,it,Lo,Uo,rt,Mo,Fo,ct,Go,Ho,ut,Wo,Bo,ht,Vo,Yo,dt,Jo,Wa,R,Ko,Re,Qo,Xo,Ae,el,sl,Ba,Ps,tl,Va,xs,al,Ya,oe,nl,Ie,ol,ll,Ja,le,F,pl,ft,il,rl,_t,cl,ul,hl,Ze,dl,mt,fl,_l,Ka,G,pe,gt,Te,ml,wt,gl,Qa,Cs,wl,Xa,Rs,ie,vl,Ne,jl,yl,As,Vr,en,re,bl,Le,El,ql,sn,ce,$l,vt,Sl,kl,tn,ue,Dl,jt,Ol,zl,an,he,Pl,yt,xl,Cl,nn,de,Rl,bt,Al,Il,on,fe,Zl,Et,Tl,Nl,ln,Is,Ll,pn,Zs,Ul,rn,Ts,Ue,Ml,Ns,Fl,Gl,cn,H,_e,qt,Me,Hl,$t,Wl,un,W,St,Bl,Vl,Fe,Yl,Jl,hn,A,Kl,kt,Ql,Xl,Dt,ep,sp,dn,B,me,Ot,Ge,tp,zt,ap,fn,He,_n,Ls,np,mn,We,gn,ge,op,Pt,lp,pp,wn,Us,xt,ip,vn,Be,jn,Ve,yn,Ms,Ct,rp,bn,Ye,En,Je,qn,we,cp,Rt,up,hp,$n,Ke,Sn,Fs,dp,kn,V,ve,At,Qe,fp,It,_p,Dn,Xe,On,Gs,mp,zn,es,Pn,je,gp,Zt,wp,vp,xn,Hs,Tt,jp,Cn,ss,Rn,ye,yp,Nt,bp,Ep,An,ts,In,as,Zn,Ws,Lt,qp,Tn,ns,Nn,be,$p,Ut,Sp,kp,Ln,os,Un,ls,Mn,Bs,Mt,Dp,Fn,Ee,E,Y,Op,ps,zp,Pp,is,xp,Cp,Rp,q,Ap,Ft,Ip,Zp,Gt,Tp,Np,Ht,Lp,Up,Wt,Mp,Fp,Bt,Gp,Hp,Wp,rs,Bp,k,Vp,Vt,Yp,Jp,Yt,Kp,Qp,Jt,Xp,ei,Kt,si,ti,ai,J,ni,Qt,oi,li,Xt,pi,ii,ri,cs,ci,ea,ui,hi,di,sa,$,fi,ta,_i,mi,aa,gi,wi,na,vi,ji,oa,yi,bi,la,Ei,qi,Gn,K,qe,pa,us,$i,ia,Si,Hn,$e,ra,ca,ki,Di,v,hs,Oi,ua,zi,Pi,xi,S,Ci,ha,Ri,Ai,da,Ii,Zi,fa,Ti,Ni,_a,Li,Ui,ma,Mi,Fi,Gi,ds,Hi,Q,Wi,ga,Bi,Vi,wa,Yi,Ji,Ki,fs,Qi,X,Xi,va,er,sr,tr,ar,nr,_s,or,ja,lr,pr,ms,ir,ya,rr,cr,gs,ur,ba,hr,Wn,ee,Se,Ea,ws,dr,qa,fr,Bn,vs,Vn,se,ke,$a,js,_r,Sa,mr,Yn,I,ka,gr,wr,ys,vr,Da,jr,yr,br,Oa,Er,Jn,te,De,za,bs,qr,Pa,$r,Kn,Oe,Sr,Vs,kr,Dr,Qn,D,xa,Es,Or,zr,Ca,qs,Pr,xr,Ra,$s,Cr,Rr,Aa,Ss,Ar,Xn,Ys,Ir,eo,Z,Ia,ks,Zr,Tr,Za,Ds,Nr,Lr,Ta,Os,Ur,so,T,Mr,Na,Fr,Gr,zs,Hr,Wr,to;return Pe=new ae({}),Te=new ae({}),Me=new ae({}),Ge=new ae({}),He=new y({props:{code:"accelerate config",highlighted:"accelerate config"}}),We=new y({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),Be=new y({props:{code:`compute_environment: LOCAL_MACHINE
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
use_cpu: <span class="hljs-literal">false</span>`}}),Ve=new y({props:{code:"accelerate launch examples/nlp_example.py --mixed_precision fp16",highlighted:"accelerate launch examples/nlp_example.py --mixed_precision fp16"}}),Ye=new y({props:{code:`compute_environment: LOCAL_MACHINE
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
use_cpu: <span class="hljs-literal">false</span>`}}),Je=new y({props:{code:"accelerate launch examples/nlp_example.py --mixed_precision fp16",highlighted:"accelerate launch examples/nlp_example.py --mixed_precision fp16"}}),Ke=new y({props:{code:"`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO >= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to enable `deepspeed.zero.Init` for constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` for FP32 training, `fp16` for FP16 mixed-precision training and `bf16` for BF16 mixed-precision training. ",highlighted:'`zero_stage`: [0] Disabled, [1] optimizer state partitioning, [2] optimizer+gradient state partitioning and [3] optimizer+gradient+parameter partitioning\n`gradient_accumulation_steps`: Number of training steps to accumulate gradients before averaging and applying them.\n`gradient_clipping`: Enable gradient clipping with value.\n`offload_optimizer_device`: [none] Disable optimizer offloading, [cpu] offload optimizer to CPU, [nvme] offload optimizer to NVMe SSD. Only applicable with ZeRO &gt;= Stage-2.\n`offload_param_device`: [none] Disable parameter offloading, [cpu] offload parameters to CPU, [nvme] offload parameters to NVMe SSD. Only applicable with ZeRO Stage-3.\n`zero3_init_flag`: Decides whether to <span class="hljs-built_in">enable</span> `deepspeed.zero.Init` <span class="hljs-keyword">for</span> constructing massive models. Only applicable with ZeRO Stage-3.\n`zero3_save_16bit_model`: Decides whether to save 16-bit model weights when using ZeRO Stage-3.\n`mixed_precision`: `no` <span class="hljs-keyword">for</span> FP32 training, `fp16` <span class="hljs-keyword">for</span> FP16 mixed-precision training and `bf16` <span class="hljs-keyword">for</span> BF16 mixed-precision training. '}}),Qe=new ae({}),Xe=new y({props:{code:"accelerate config",highlighted:"accelerate config"}}),es=new y({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),ss=new y({props:{code:`compute_environment: LOCAL_MACHINE
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
use_cpu: <span class="hljs-literal">false</span>`}}),ts=new y({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),as=new y({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
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
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),ns=new y({props:{code:`compute_environment: LOCAL_MACHINE
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
use_cpu: <span class="hljs-literal">false</span>`}}),os=new y({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ls=new y({props:{code:`accelerate launch examples/by_feature/deepspeed_with_config_support.py \\
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
--report_to <span class="hljs-string">&quot;wandb&quot;</span>\\`}}),rs=new y({props:{code:` # Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer
 optimizer_cls = (
     torch.optim.AdamW
     if accelerator.state.deepspeed_plugin is None
     or "optimizer" not in accelerator.state.deepspeed_plugin.deepspeed_config
     else DummyOptim
 )
 optimizer = optimizer_cls(optimizer_grouped_parameters, lr=args.learning_rate)

 # Creates Dummy Scheduler if \`scheduler\` was spcified in the config file else creates \`args.lr_scheduler_type\` Scheduler
 if (
     accelerator.state.deepspeed_plugin is None
     or "scheduler" not in accelerator.state.deepspeed_plugin.deepspeed_config
 ):
     lr_scheduler = get_scheduler(
         name=args.lr_scheduler_type,
         optimizer=optimizer,
         num_warmup_steps=args.num_warmup_steps,
         num_training_steps=args.max_train_steps,
     )
 else:
     lr_scheduler = DummyScheduler(
         optimizer, total_num_steps=args.max_train_steps, warmup_num_steps=args.num_warmup_steps
     )`,highlighted:` <span class="hljs-comment"># Creates Dummy Optimizer if \`optimizer\` was spcified in the config file else creates Adam Optimizer</span>
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
     )`}}),us=new ae({}),ds=new y({props:{code:`unwrapped_model = accelerator.unwrap_model(model)

# New Code #
# Saves the whole/unpartitioned fp16 model when in ZeRO Stage-3 to the output directory if
# \`stage3_gather_16bit_weights_on_model_save\` is True in DeepSpeed Config file or
# \`zero3_save_16bit_model\` is True in DeepSpeed Plugin.
# For Zero Stages 1 and 2, models are saved as usual in the output directory.
# The model name saved is \`pytorch_model.bin\`
unwrapped_model.save_pretrained(
    args.output_dir,
    is_main_process=accelerator.is_main_process,
    save_function=accelerator.save,
    state_dict=accelerator.get_state_dict(model),
)`,highlighted:`unwrapped_model = accelerator.unwrap_model(model)

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
)`}}),fs=new y({props:{code:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = "checkpointing: PATH={}, ckpt_id={}".format(PATH, ckpt_id)
if success:
    logging.info(f"Success {status_msg}")
else:
    logging.warning(f"Failure {status_msg}")`,highlighted:`success = model.save_checkpoint(PATH, ckpt_id, checkpoint_state_dict)
status_msg = <span class="hljs-string">&quot;checkpointing: PATH={}, ckpt_id={}&quot;</span>.<span class="hljs-built_in">format</span>(PATH, ckpt_id)
<span class="hljs-keyword">if</span> success:
    logging.info(<span class="hljs-string">f&quot;Success <span class="hljs-subst">{status_msg}</span>&quot;</span>)
<span class="hljs-keyword">else</span>:
    logging.warning(<span class="hljs-string">f&quot;Failure <span class="hljs-subst">{status_msg}</span>&quot;</span>)`}}),_s=new y({props:{code:`$ cd /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of type zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`,highlighted:`$ <span class="hljs-built_in">cd</span> /path/to/checkpoint_dir
$ ./zero_to_fp32.py . pytorch_model.bin
Processing zero checkpoint at global_step1
Detected checkpoint of <span class="hljs-built_in">type</span> zero stage 3, world_size: 2
Saving fp32 state dict to pytorch_model.bin (total_numel=60506624)`}}),ms=new y({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

unwrapped_model = accelerator.unwrap_model(model)
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

unwrapped_model = accelerator.unwrap_model(model)
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`}}),gs=new y({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),ws=new ae({}),vs=new y({props:{code:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)",highlighted:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)"}}),js=new ae({}),bs=new ae({}),{c(){L=o("meta"),Fa=c(),U=o("h1"),ne=o("a"),lt=o("span"),d(Pe.$$.fragment),Ro=c(),pt=o("span"),Ao=a("DeepSpeed"),Ga=c(),M=o("p"),xe=o("a"),Io=a("DeepSpeed"),Zo=a(" implements everything described in the "),Ce=o("a"),To=a("ZeRO paper"),No=a(". Currently it provides full support for:"),Ha=c(),b=o("ol"),it=o("li"),Lo=a("Optimizer state partitioning (ZeRO stage 1)"),Uo=c(),rt=o("li"),Mo=a("Gradient partitioning (ZeRO stage 2)"),Fo=c(),ct=o("li"),Go=a("Parameter partitioning (ZeRO stage 3)"),Ho=c(),ut=o("li"),Wo=a("Custom mixed precision training handling"),Bo=c(),ht=o("li"),Vo=a("A range of fast CUDA-extension-based optimizers"),Yo=c(),dt=o("li"),Jo=a("ZeRO-Offload to CPU and Disk/NVMe"),Wa=c(),R=o("p"),Ko=a("ZeRO-Offload has its own dedicated paper: "),Re=o("a"),Qo=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Xo=a(". And NVMe-support is described in the paper "),Ae=o("a"),el=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),sl=a("."),Ba=c(),Ps=o("p"),tl=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Va=c(),xs=o("p"),al=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Ya=c(),oe=o("p"),nl=a("\u{1F917} Accelerate integrates "),Ie=o("a"),ol=a("DeepSpeed"),ll=a(" via 2 options:"),Ja=c(),le=o("ol"),F=o("li"),pl=a("Integration of the DeepSpeed features via "),ft=o("code"),il=a("deepspeed config file"),rl=a(" specification in "),_t=o("code"),cl=a("accelerate config"),ul=a(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),hl=c(),Ze=o("li"),dl=a("Integration via "),mt=o("code"),fl=a("deepspeed_plugin"),_l=a(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Ka=c(),G=o("h2"),pe=o("a"),gt=o("span"),d(Te.$$.fragment),ml=c(),wt=o("span"),gl=a("What is integrated?"),Qa=c(),Cs=o("p"),wl=a("Training:"),Xa=c(),Rs=o("ol"),ie=o("li"),vl=a(`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Ne=o("a"),jl=a("blog post"),yl=c(),As=o("img"),en=c(),re=o("p"),bl=a("(Source: "),Le=o("a"),El=a("link"),ql=a(")"),sn=c(),ce=o("p"),$l=a("a. "),vt=o("strong"),Sl=a("Stage 1"),kl=a(" : Shards optimizer states across data parallel workers/GPUs"),tn=c(),ue=o("p"),Dl=a("b. "),jt=o("strong"),Ol=a("Stage 2"),zl=a(" : Shards optimizer states + gradients across data parallel workers/GPUs"),an=c(),he=o("p"),Pl=a("c. "),yt=o("strong"),xl=a("Stage 3"),Cl=a(": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),nn=c(),de=o("p"),Rl=a("d. "),bt=o("strong"),Al=a("Optimizer Offload"),Il=a(": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),on=c(),fe=o("p"),Zl=a("e. "),Et=o("strong"),Tl=a("Param Offload"),Nl=a(": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),ln=c(),Is=o("u"),Ll=a("Note"),pn=a(`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),Zs=o("p"),Ul=a("Inference:"),rn=c(),Ts=o("ol"),Ue=o("li"),Ml=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ns=o("a"),Fl=a("deepspeed-zero-inference"),Gl=a("."),cn=c(),H=o("h2"),_e=o("a"),qt=o("span"),d(Me.$$.fragment),Hl=c(),$t=o("span"),Wl=a("How it works?"),un=c(),W=o("p"),St=o("strong"),Bl=a("Pre-Requisites"),Vl=a(": Install DeepSpeed version >=0.6.5. Please refer to the "),Fe=o("a"),Yl=a("DeepSpeed Insallation details"),Jl=a(`
for more information.`),hn=c(),A=o("p"),Kl=a("We will first look at easy to use integration via "),kt=o("code"),Ql=a("accelerate config"),Xl=a(`.
Followed by more flexible and feature rich `),Dt=o("code"),ep=a("deepspeed config file"),sp=a(" integration."),dn=c(),B=o("h3"),me=o("a"),Ot=o("span"),d(Ge.$$.fragment),tp=c(),zt=o("span"),ap=a("Accelerate DeepSpeed Plugin"),fn=a(`

On your machine(s) just run:

	`),d(He.$$.fragment),_n=c(),Ls=o("p"),np=a(`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),mn=c(),d(We.$$.fragment),gn=c(),ge=o("p"),op=a("For instance, here is how you would run the NLP example "),Pt=o("code"),lp=a("examples/nlp_example.py"),pp=a(" (from the root of the repo) with DeepSpeed Plugin:"),wn=c(),Us=o("p"),xt=o("strong"),ip=a("ZeRO Stage-2 DeepSpeed Plugin Example"),vn=c(),d(Be.$$.fragment),jn=c(),d(Ve.$$.fragment),yn=c(),Ms=o("p"),Ct=o("strong"),rp=a("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),bn=c(),d(Ye.$$.fragment),En=c(),d(Je.$$.fragment),qn=c(),we=o("p"),cp=a("Currently, "),Rt=o("code"),up=a("Accelerate"),hp=a(" supports following config through the CLI:"),$n=c(),d(Ke.$$.fragment),Sn=c(),Fs=o("p"),dp=a("To be able to tweak more options, you will need to use a DeepSpeed config file."),kn=c(),V=o("h3"),ve=o("a"),At=o("span"),d(Qe.$$.fragment),fp=c(),It=o("span"),_p=a("DeepSpeed Config File"),Dn=a(`

On your machine(s) just run:

	`),d(Xe.$$.fragment),On=c(),Gs=o("p"),mp=a(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),zn=c(),d(es.$$.fragment),Pn=c(),je=o("p"),gp=a("For instance, here is how you would run the NLP example "),Zt=o("code"),wp=a("examples/by_feature/deepspeed_with_config_support.py"),vp=a(" (from the root of the repo) with DeepSpeed Config File:"),xn=c(),Hs=o("p"),Tt=o("strong"),jp=a("ZeRO Stage-2 DeepSpeed Config File Example"),Cn=c(),d(ss.$$.fragment),Rn=c(),ye=o("p"),yp=a("with the contents of "),Nt=o("code"),bp=a("zero_stage2_config.json"),Ep=a(" being:"),An=c(),d(ts.$$.fragment),In=c(),d(as.$$.fragment),Zn=c(),Ws=o("p"),Lt=o("strong"),qp=a("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),Tn=c(),d(ns.$$.fragment),Nn=c(),be=o("p"),$p=a("with the contents of "),Ut=o("code"),Sp=a("zero_stage3_offload_config.json"),kp=a(" being:"),Ln=c(),d(os.$$.fragment),Un=c(),d(ls.$$.fragment),Mn=c(),Bs=o("p"),Mt=o("strong"),Dp=a("Important code changes when using DeepSpeed Config File"),Fn=c(),Ee=o("ol"),E=o("li"),Y=o("p"),Op=a(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),ps=o("a"),zp=a("DeepSpeed Optimizers"),Pp=a(" and "),is=o("a"),xp=a("DeepSpeed Schedulers"),Cp=a(` documentation.
We will look at the changes needed in the code when using these.`),Rp=c(),q=o("p"),Ap=a("a. DS Optim + DS Scheduler: The case when both "),Ft=o("code"),Ip=a("optimizer"),Zp=a(" and "),Gt=o("code"),Tp=a("scheduler"),Np=a(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Ht=o("code"),Lp=a("accelerate.utils.DummyOptim"),Up=a(" and "),Wt=o("code"),Mp=a("accelerate.utils.DummyScheduler"),Fp=a(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Bt=o("code"),Gp=a("examples/by_feature/deepspeed_with_config_support.py"),Hp=a(" showing this:"),Wp=c(),d(rs.$$.fragment),Bp=c(),k=o("p"),Vp=a("b. Custom Optim + Custom Scheduler: The case when both "),Vt=o("code"),Yp=a("optimizer"),Jp=a(" and "),Yt=o("code"),Kp=a("scheduler"),Qp=a(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Jt=o("code"),Xp=a("optimizer"),ei=a(" and "),Kt=o("code"),si=a("scheduler"),ti=a(" keys are absent in the DeepSpeed config file."),ai=c(),J=o("p"),ni=a("c. Custom Optim + DS Scheduler: The case when only "),Qt=o("code"),oi=a("scheduler"),li=a(` key is present in the DeepSpeed config file.
In this situation, user has to use `),Xt=o("code"),pi=a("accelerate.utils.DummyScheduler"),ii=a(" to replace the PyTorch/Custom scheduler in their code."),ri=c(),cs=o("p"),ci=a("d. DS Optim + Custom Scheduler: The case when only "),ea=o("code"),ui=a("optimizer"),hi=a(` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),di=c(),sa=o("li"),$=o("p"),fi=a("Notice the "),ta=o("code"),_i=a("auto"),mi=a(" values in the above example DeepSpeed config files. These are automatically handled by "),aa=o("code"),gi=a("prepare"),wi=a(` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),na=o("code"),vi=a("prepare"),ji=a(` method.
Only the `),oa=o("code"),yi=a("auto"),bi=a(" fields specified in above examples are handled by "),la=o("code"),Ei=a("prepare"),qi=a(" method and the rest have to be explicitly specified by the user."),Gn=c(),K=o("h2"),qe=o("a"),pa=o("span"),d(us.$$.fragment),$i=c(),ia=o("span"),Si=a("Saving and loading"),Hn=c(),$e=o("ol"),ra=o("li"),ca=o("p"),ki=a("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Di=c(),v=o("li"),hs=o("p"),Oi=a("under ZeRO Stage-3, "),ua=o("code"),zi=a("state_dict"),Pi=a(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),xi=c(),S=o("p"),Ci=a("a. Saving the entire 16bit model weights to directly load later on using "),ha=o("code"),Ri=a("model.load_state_dict(torch.load(pytorch_model.bin))"),Ai=a(`.
For this, either set `),da=o("code"),Ii=a("zero_optimization.stage3_gather_16bit_weights_on_model_save"),Zi=a(` to True in DeepSpeed Config file or set
`),fa=o("code"),Ti=a("zero3_save_16bit_model"),Ni=a(` to True in DeepSpeed Plugin.
`),_a=o("strong"),Li=a("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),Ui=a(`
Below is the snippet from `),ma=o("code"),Mi=a("examples/by_feature/deepspeed_with_config_support.py"),Fi=a(" showing this:"),Gi=c(),d(ds.$$.fragment),Hi=c(),Q=o("p"),Wi=a("b. To get 32bit weights, first save the model using "),ga=o("code"),Bi=a("model.save_checkpoint()"),Vi=a(`.
Below is the snippet from `),wa=o("code"),Yi=a("examples/by_feature/deepspeed_with_config_support.py"),Ji=a(" showing this:"),Ki=c(),d(fs.$$.fragment),Qi=c(),X=o("p"),Xi=a("This will create ZeRO model and optimizer partitions along with "),va=o("code"),er=a("zero_to_fp32.py"),sr=a(` script in checkpoint directory.
One can use this script to do offline consolidation.`),tr=o("br"),ar=a(`
It requires no configuration files or GPUs. Here is an example of its usage:`),nr=c(),d(_s.$$.fragment),or=c(),ja=o("p"),lr=a("To get 32bit model for saving/inference, one can do the following:"),pr=c(),d(ms.$$.fragment),ir=c(),ya=o("p"),rr=a("If only interested in state_dict, one can do the following:"),cr=c(),d(gs.$$.fragment),ur=c(),ba=o("p"),hr=a("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Wn=c(),ee=o("h2"),Se=o("a"),Ea=o("span"),d(ws.$$.fragment),dr=c(),qa=o("span"),fr=a("ZeRO Inference"),Bn=a(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),d(vs.$$.fragment),Vn=c(),se=o("h2"),ke=o("a"),$a=o("span"),d(js.$$.fragment),_r=c(),Sa=o("span"),mr=a("Few caveats to be aware of"),Yn=c(),I=o("ol"),ka=o("li"),gr=a("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),wr=c(),ys=o("li"),vr=a("Current integration doesn\u2019t support "),Da=o("code"),jr=a("mpu"),yr=a(", limiting the tensor parallelism which is supported in Megatron-LM."),br=c(),Oa=o("li"),Er=a("Current integration doesn\u2019t support multiple models."),Jn=c(),te=o("h2"),De=o("a"),za=o("span"),d(bs.$$.fragment),qr=c(),Pa=o("span"),$r=a("DeepSpeed Resources"),Kn=c(),Oe=o("p"),Sr=a("The documentation for the internals related to deepspeed can be found "),Vs=o("a"),kr=a("here"),Dr=a("."),Qn=c(),D=o("ul"),xa=o("li"),Es=o("a"),Or=a("Project\u2019s github"),zr=c(),Ca=o("li"),qs=o("a"),Pr=a("Usage docs"),xr=c(),Ra=o("li"),$s=o("a"),Cr=a("API docs"),Rr=c(),Aa=o("li"),Ss=o("a"),Ar=a("Blog posts"),Xn=c(),Ys=o("p"),Ir=a("Papers:"),eo=c(),Z=o("ul"),Ia=o("li"),ks=o("a"),Zr=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Tr=c(),Za=o("li"),Ds=o("a"),Nr=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Lr=c(),Ta=o("li"),Os=o("a"),Ur=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),so=c(),T=o("p"),Mr=a("Finally, please, remember that, \u{1F917} "),Na=o("code"),Fr=a("Accelerate"),Gr=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),zs=o("a"),Hr=a("DeepSpeed GitHub"),Wr=a("."),this.h()},l(e){const i=Eh('[data-svelte="svelte-1phssyn"]',document.head);L=l(i,"META",{name:!0,content:!0}),i.forEach(t),Fa=u(e),U=l(e,"H1",{class:!0});var ao=p(U);ne=l(ao,"A",{id:!0,class:!0,href:!0});var Yr=p(ne);lt=l(Yr,"SPAN",{});var Jr=p(lt);f(Pe.$$.fragment,Jr),Jr.forEach(t),Yr.forEach(t),Ro=u(ao),pt=l(ao,"SPAN",{});var Kr=p(pt);Ao=n(Kr,"DeepSpeed"),Kr.forEach(t),ao.forEach(t),Ga=u(e),M=l(e,"P",{});var La=p(M);xe=l(La,"A",{href:!0,rel:!0});var Qr=p(xe);Io=n(Qr,"DeepSpeed"),Qr.forEach(t),Zo=n(La," implements everything described in the "),Ce=l(La,"A",{href:!0,rel:!0});var Xr=p(Ce);To=n(Xr,"ZeRO paper"),Xr.forEach(t),No=n(La,". Currently it provides full support for:"),La.forEach(t),Ha=u(e),b=l(e,"OL",{});var O=p(b);it=l(O,"LI",{});var ec=p(it);Lo=n(ec,"Optimizer state partitioning (ZeRO stage 1)"),ec.forEach(t),Uo=u(O),rt=l(O,"LI",{});var sc=p(rt);Mo=n(sc,"Gradient partitioning (ZeRO stage 2)"),sc.forEach(t),Fo=u(O),ct=l(O,"LI",{});var tc=p(ct);Go=n(tc,"Parameter partitioning (ZeRO stage 3)"),tc.forEach(t),Ho=u(O),ut=l(O,"LI",{});var ac=p(ut);Wo=n(ac,"Custom mixed precision training handling"),ac.forEach(t),Bo=u(O),ht=l(O,"LI",{});var nc=p(ht);Vo=n(nc,"A range of fast CUDA-extension-based optimizers"),nc.forEach(t),Yo=u(O),dt=l(O,"LI",{});var oc=p(dt);Jo=n(oc,"ZeRO-Offload to CPU and Disk/NVMe"),oc.forEach(t),O.forEach(t),Wa=u(e),R=l(e,"P",{});var Js=p(R);Ko=n(Js,"ZeRO-Offload has its own dedicated paper: "),Re=l(Js,"A",{href:!0,rel:!0});var lc=p(Re);Qo=n(lc,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),lc.forEach(t),Xo=n(Js,". And NVMe-support is described in the paper "),Ae=l(Js,"A",{href:!0,rel:!0});var pc=p(Ae);el=n(pc,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),pc.forEach(t),sl=n(Js,"."),Js.forEach(t),Ba=u(e),Ps=l(e,"P",{});var ic=p(Ps);tl=n(ic,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),ic.forEach(t),Va=u(e),xs=l(e,"P",{});var rc=p(xs);al=n(rc,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),rc.forEach(t),Ya=u(e),oe=l(e,"P",{});var no=p(oe);nl=n(no,"\u{1F917} Accelerate integrates "),Ie=l(no,"A",{href:!0,rel:!0});var cc=p(Ie);ol=n(cc,"DeepSpeed"),cc.forEach(t),ll=n(no," via 2 options:"),no.forEach(t),Ja=u(e),le=l(e,"OL",{});var oo=p(le);F=l(oo,"LI",{});var Ks=p(F);pl=n(Ks,"Integration of the DeepSpeed features via "),ft=l(Ks,"CODE",{});var uc=p(ft);il=n(uc,"deepspeed config file"),uc.forEach(t),rl=n(Ks," specification in "),_t=l(Ks,"CODE",{});var hc=p(_t);cl=n(hc,"accelerate config"),hc.forEach(t),ul=n(Ks,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Ks.forEach(t),hl=u(oo),Ze=l(oo,"LI",{});var lo=p(Ze);dl=n(lo,"Integration via "),mt=l(lo,"CODE",{});var dc=p(mt);fl=n(dc,"deepspeed_plugin"),dc.forEach(t),_l=n(lo,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),lo.forEach(t),oo.forEach(t),Ka=u(e),G=l(e,"H2",{class:!0});var po=p(G);pe=l(po,"A",{id:!0,class:!0,href:!0});var fc=p(pe);gt=l(fc,"SPAN",{});var _c=p(gt);f(Te.$$.fragment,_c),_c.forEach(t),fc.forEach(t),ml=u(po),wt=l(po,"SPAN",{});var mc=p(wt);gl=n(mc,"What is integrated?"),mc.forEach(t),po.forEach(t),Qa=u(e),Cs=l(e,"P",{});var gc=p(Cs);wl=n(gc,"Training:"),gc.forEach(t),Xa=u(e),Rs=l(e,"OL",{});var wc=p(Rs);ie=l(wc,"LI",{});var Ua=p(ie);vl=n(Ua,`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Ne=l(Ua,"A",{href:!0,rel:!0});var vc=p(Ne);jl=n(vc,"blog post"),vc.forEach(t),yl=u(Ua),As=l(Ua,"IMG",{src:!0,alt:!0}),Ua.forEach(t),wc.forEach(t),en=u(e),re=l(e,"P",{});var io=p(re);bl=n(io,"(Source: "),Le=l(io,"A",{href:!0,rel:!0});var jc=p(Le);El=n(jc,"link"),jc.forEach(t),ql=n(io,")"),io.forEach(t),sn=u(e),ce=l(e,"P",{});var ro=p(ce);$l=n(ro,"a. "),vt=l(ro,"STRONG",{});var yc=p(vt);Sl=n(yc,"Stage 1"),yc.forEach(t),kl=n(ro," : Shards optimizer states across data parallel workers/GPUs"),ro.forEach(t),tn=u(e),ue=l(e,"P",{});var co=p(ue);Dl=n(co,"b. "),jt=l(co,"STRONG",{});var bc=p(jt);Ol=n(bc,"Stage 2"),bc.forEach(t),zl=n(co," : Shards optimizer states + gradients across data parallel workers/GPUs"),co.forEach(t),an=u(e),he=l(e,"P",{});var uo=p(he);Pl=n(uo,"c. "),yt=l(uo,"STRONG",{});var Ec=p(yt);xl=n(Ec,"Stage 3"),Ec.forEach(t),Cl=n(uo,": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),uo.forEach(t),nn=u(e),de=l(e,"P",{});var ho=p(de);Rl=n(ho,"d. "),bt=l(ho,"STRONG",{});var qc=p(bt);Al=n(qc,"Optimizer Offload"),qc.forEach(t),Il=n(ho,": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),ho.forEach(t),on=u(e),fe=l(e,"P",{});var fo=p(fe);Zl=n(fo,"e. "),Et=l(fo,"STRONG",{});var $c=p(Et);Tl=n($c,"Param Offload"),$c.forEach(t),Nl=n(fo,": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),fo.forEach(t),ln=u(e),Is=l(e,"U",{});var Sc=p(Is);Ll=n(Sc,"Note"),Sc.forEach(t),pn=n(e,`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),Zs=l(e,"P",{});var kc=p(Zs);Ul=n(kc,"Inference:"),kc.forEach(t),rn=u(e),Ts=l(e,"OL",{});var Dc=p(Ts);Ue=l(Dc,"LI",{});var _o=p(Ue);Ml=n(_o,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ns=l(_o,"A",{href:!0});var Oc=p(Ns);Fl=n(Oc,"deepspeed-zero-inference"),Oc.forEach(t),Gl=n(_o,"."),_o.forEach(t),Dc.forEach(t),cn=u(e),H=l(e,"H2",{class:!0});var mo=p(H);_e=l(mo,"A",{id:!0,class:!0,href:!0});var zc=p(_e);qt=l(zc,"SPAN",{});var Pc=p(qt);f(Me.$$.fragment,Pc),Pc.forEach(t),zc.forEach(t),Hl=u(mo),$t=l(mo,"SPAN",{});var xc=p($t);Wl=n(xc,"How it works?"),xc.forEach(t),mo.forEach(t),un=u(e),W=l(e,"P",{});var Ma=p(W);St=l(Ma,"STRONG",{});var Cc=p(St);Bl=n(Cc,"Pre-Requisites"),Cc.forEach(t),Vl=n(Ma,": Install DeepSpeed version >=0.6.5. Please refer to the "),Fe=l(Ma,"A",{href:!0,rel:!0});var Rc=p(Fe);Yl=n(Rc,"DeepSpeed Insallation details"),Rc.forEach(t),Jl=n(Ma,`
for more information.`),Ma.forEach(t),hn=u(e),A=l(e,"P",{});var Qs=p(A);Kl=n(Qs,"We will first look at easy to use integration via "),kt=l(Qs,"CODE",{});var Ac=p(kt);Ql=n(Ac,"accelerate config"),Ac.forEach(t),Xl=n(Qs,`.
Followed by more flexible and feature rich `),Dt=l(Qs,"CODE",{});var Ic=p(Dt);ep=n(Ic,"deepspeed config file"),Ic.forEach(t),sp=n(Qs," integration."),Qs.forEach(t),dn=u(e),B=l(e,"H3",{class:!0});var go=p(B);me=l(go,"A",{id:!0,class:!0,href:!0});var Zc=p(me);Ot=l(Zc,"SPAN",{});var Tc=p(Ot);f(Ge.$$.fragment,Tc),Tc.forEach(t),Zc.forEach(t),tp=u(go),zt=l(go,"SPAN",{});var Nc=p(zt);ap=n(Nc,"Accelerate DeepSpeed Plugin"),Nc.forEach(t),go.forEach(t),fn=n(e,`

On your machine(s) just run:

	`),f(He.$$.fragment,e),_n=u(e),Ls=l(e,"P",{});var Lc=p(Ls);np=n(Lc,`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Lc.forEach(t),mn=u(e),f(We.$$.fragment,e),gn=u(e),ge=l(e,"P",{});var wo=p(ge);op=n(wo,"For instance, here is how you would run the NLP example "),Pt=l(wo,"CODE",{});var Uc=p(Pt);lp=n(Uc,"examples/nlp_example.py"),Uc.forEach(t),pp=n(wo," (from the root of the repo) with DeepSpeed Plugin:"),wo.forEach(t),wn=u(e),Us=l(e,"P",{});var Mc=p(Us);xt=l(Mc,"STRONG",{});var Fc=p(xt);ip=n(Fc,"ZeRO Stage-2 DeepSpeed Plugin Example"),Fc.forEach(t),Mc.forEach(t),vn=u(e),f(Be.$$.fragment,e),jn=u(e),f(Ve.$$.fragment,e),yn=u(e),Ms=l(e,"P",{});var Gc=p(Ms);Ct=l(Gc,"STRONG",{});var Hc=p(Ct);rp=n(Hc,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),Hc.forEach(t),Gc.forEach(t),bn=u(e),f(Ye.$$.fragment,e),En=u(e),f(Je.$$.fragment,e),qn=u(e),we=l(e,"P",{});var vo=p(we);cp=n(vo,"Currently, "),Rt=l(vo,"CODE",{});var Wc=p(Rt);up=n(Wc,"Accelerate"),Wc.forEach(t),hp=n(vo," supports following config through the CLI:"),vo.forEach(t),$n=u(e),f(Ke.$$.fragment,e),Sn=u(e),Fs=l(e,"P",{});var Bc=p(Fs);dp=n(Bc,"To be able to tweak more options, you will need to use a DeepSpeed config file."),Bc.forEach(t),kn=u(e),V=l(e,"H3",{class:!0});var jo=p(V);ve=l(jo,"A",{id:!0,class:!0,href:!0});var Vc=p(ve);At=l(Vc,"SPAN",{});var Yc=p(At);f(Qe.$$.fragment,Yc),Yc.forEach(t),Vc.forEach(t),fp=u(jo),It=l(jo,"SPAN",{});var Jc=p(It);_p=n(Jc,"DeepSpeed Config File"),Jc.forEach(t),jo.forEach(t),Dn=n(e,`

On your machine(s) just run:

	`),f(Xe.$$.fragment,e),On=u(e),Gs=l(e,"P",{});var Kc=p(Gs);mp=n(Kc,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Kc.forEach(t),zn=u(e),f(es.$$.fragment,e),Pn=u(e),je=l(e,"P",{});var yo=p(je);gp=n(yo,"For instance, here is how you would run the NLP example "),Zt=l(yo,"CODE",{});var Qc=p(Zt);wp=n(Qc,"examples/by_feature/deepspeed_with_config_support.py"),Qc.forEach(t),vp=n(yo," (from the root of the repo) with DeepSpeed Config File:"),yo.forEach(t),xn=u(e),Hs=l(e,"P",{});var Xc=p(Hs);Tt=l(Xc,"STRONG",{});var eu=p(Tt);jp=n(eu,"ZeRO Stage-2 DeepSpeed Config File Example"),eu.forEach(t),Xc.forEach(t),Cn=u(e),f(ss.$$.fragment,e),Rn=u(e),ye=l(e,"P",{});var bo=p(ye);yp=n(bo,"with the contents of "),Nt=l(bo,"CODE",{});var su=p(Nt);bp=n(su,"zero_stage2_config.json"),su.forEach(t),Ep=n(bo," being:"),bo.forEach(t),An=u(e),f(ts.$$.fragment,e),In=u(e),f(as.$$.fragment,e),Zn=u(e),Ws=l(e,"P",{});var tu=p(Ws);Lt=l(tu,"STRONG",{});var au=p(Lt);qp=n(au,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),au.forEach(t),tu.forEach(t),Tn=u(e),f(ns.$$.fragment,e),Nn=u(e),be=l(e,"P",{});var Eo=p(be);$p=n(Eo,"with the contents of "),Ut=l(Eo,"CODE",{});var nu=p(Ut);Sp=n(nu,"zero_stage3_offload_config.json"),nu.forEach(t),kp=n(Eo," being:"),Eo.forEach(t),Ln=u(e),f(os.$$.fragment,e),Un=u(e),f(ls.$$.fragment,e),Mn=u(e),Bs=l(e,"P",{});var ou=p(Bs);Mt=l(ou,"STRONG",{});var lu=p(Mt);Dp=n(lu,"Important code changes when using DeepSpeed Config File"),lu.forEach(t),ou.forEach(t),Fn=u(e),Ee=l(e,"OL",{});var qo=p(Ee);E=l(qo,"LI",{});var z=p(E);Y=l(z,"P",{});var Xs=p(Y);Op=n(Xs,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),ps=l(Xs,"A",{href:!0,rel:!0});var pu=p(ps);zp=n(pu,"DeepSpeed Optimizers"),pu.forEach(t),Pp=n(Xs," and "),is=l(Xs,"A",{href:!0,rel:!0});var iu=p(is);xp=n(iu,"DeepSpeed Schedulers"),iu.forEach(t),Cp=n(Xs,` documentation.
We will look at the changes needed in the code when using these.`),Xs.forEach(t),Rp=u(z),q=l(z,"P",{});var P=p(q);Ap=n(P,"a. DS Optim + DS Scheduler: The case when both "),Ft=l(P,"CODE",{});var ru=p(Ft);Ip=n(ru,"optimizer"),ru.forEach(t),Zp=n(P," and "),Gt=l(P,"CODE",{});var cu=p(Gt);Tp=n(cu,"scheduler"),cu.forEach(t),Np=n(P,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Ht=l(P,"CODE",{});var uu=p(Ht);Lp=n(uu,"accelerate.utils.DummyOptim"),uu.forEach(t),Up=n(P," and "),Wt=l(P,"CODE",{});var hu=p(Wt);Mp=n(hu,"accelerate.utils.DummyScheduler"),hu.forEach(t),Fp=n(P,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Bt=l(P,"CODE",{});var du=p(Bt);Gp=n(du,"examples/by_feature/deepspeed_with_config_support.py"),du.forEach(t),Hp=n(P," showing this:"),P.forEach(t),Wp=u(z),f(rs.$$.fragment,z),Bp=u(z),k=l(z,"P",{});var N=p(k);Vp=n(N,"b. Custom Optim + Custom Scheduler: The case when both "),Vt=l(N,"CODE",{});var fu=p(Vt);Yp=n(fu,"optimizer"),fu.forEach(t),Jp=n(N," and "),Yt=l(N,"CODE",{});var _u=p(Yt);Kp=n(_u,"scheduler"),_u.forEach(t),Qp=n(N,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code reamins unchanged if the `),Jt=l(N,"CODE",{});var mu=p(Jt);Xp=n(mu,"optimizer"),mu.forEach(t),ei=n(N," and "),Kt=l(N,"CODE",{});var gu=p(Kt);si=n(gu,"scheduler"),gu.forEach(t),ti=n(N," keys are absent in the DeepSpeed config file."),N.forEach(t),ai=u(z),J=l(z,"P",{});var et=p(J);ni=n(et,"c. Custom Optim + DS Scheduler: The case when only "),Qt=l(et,"CODE",{});var wu=p(Qt);oi=n(wu,"scheduler"),wu.forEach(t),li=n(et,` key is present in the DeepSpeed config file.
In this situation, user has to use `),Xt=l(et,"CODE",{});var vu=p(Xt);pi=n(vu,"accelerate.utils.DummyScheduler"),vu.forEach(t),ii=n(et," to replace the PyTorch/Custom scheduler in their code."),et.forEach(t),ri=u(z),cs=l(z,"P",{});var $o=p(cs);ci=n($o,"d. DS Optim + Custom Scheduler: The case when only "),ea=l($o,"CODE",{});var ju=p(ea);ui=n(ju,"optimizer"),ju.forEach(t),hi=n($o,` key is present in the DeepSpeed config file.
This will result in an error because one can only use DS Scheduler when using DS Optim.`),$o.forEach(t),z.forEach(t),di=u(qo),sa=l(qo,"LI",{});var yu=p(sa);$=l(yu,"P",{});var x=p($);fi=n(x,"Notice the "),ta=l(x,"CODE",{});var bu=p(ta);_i=n(bu,"auto"),bu.forEach(t),mi=n(x," values in the above example DeepSpeed config files. These are automatically handled by "),aa=l(x,"CODE",{});var Eu=p(aa);gi=n(Eu,"prepare"),Eu.forEach(t),wi=n(x,` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),na=l(x,"CODE",{});var qu=p(na);vi=n(qu,"prepare"),qu.forEach(t),ji=n(x,` method.
Only the `),oa=l(x,"CODE",{});var $u=p(oa);yi=n($u,"auto"),$u.forEach(t),bi=n(x," fields specified in above examples are handled by "),la=l(x,"CODE",{});var Su=p(la);Ei=n(Su,"prepare"),Su.forEach(t),qi=n(x," method and the rest have to be explicitly specified by the user."),x.forEach(t),yu.forEach(t),qo.forEach(t),Gn=u(e),K=l(e,"H2",{class:!0});var So=p(K);qe=l(So,"A",{id:!0,class:!0,href:!0});var ku=p(qe);pa=l(ku,"SPAN",{});var Du=p(pa);f(us.$$.fragment,Du),Du.forEach(t),ku.forEach(t),$i=u(So),ia=l(So,"SPAN",{});var Ou=p(ia);Si=n(Ou,"Saving and loading"),Ou.forEach(t),So.forEach(t),Hn=u(e),$e=l(e,"OL",{});var ko=p($e);ra=l(ko,"LI",{});var zu=p(ra);ca=l(zu,"P",{});var Pu=p(ca);ki=n(Pu,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Pu.forEach(t),zu.forEach(t),Di=u(ko),v=l(ko,"LI",{});var j=p(v);hs=l(j,"P",{});var Do=p(hs);Oi=n(Do,"under ZeRO Stage-3, "),ua=l(Do,"CODE",{});var xu=p(ua);zi=n(xu,"state_dict"),xu.forEach(t),Pi=n(Do,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),Do.forEach(t),xi=u(j),S=l(j,"P",{});var C=p(S);Ci=n(C,"a. Saving the entire 16bit model weights to directly load later on using "),ha=l(C,"CODE",{});var Cu=p(ha);Ri=n(Cu,"model.load_state_dict(torch.load(pytorch_model.bin))"),Cu.forEach(t),Ai=n(C,`.
For this, either set `),da=l(C,"CODE",{});var Ru=p(da);Ii=n(Ru,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),Ru.forEach(t),Zi=n(C,` to True in DeepSpeed Config file or set
`),fa=l(C,"CODE",{});var Au=p(fa);Ti=n(Au,"zero3_save_16bit_model"),Au.forEach(t),Ni=n(C,` to True in DeepSpeed Plugin.
`),_a=l(C,"STRONG",{});var Iu=p(_a);Li=n(Iu,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),Iu.forEach(t),Ui=n(C,`
Below is the snippet from `),ma=l(C,"CODE",{});var Zu=p(ma);Mi=n(Zu,"examples/by_feature/deepspeed_with_config_support.py"),Zu.forEach(t),Fi=n(C," showing this:"),C.forEach(t),Gi=u(j),f(ds.$$.fragment,j),Hi=u(j),Q=l(j,"P",{});var st=p(Q);Wi=n(st,"b. To get 32bit weights, first save the model using "),ga=l(st,"CODE",{});var Tu=p(ga);Bi=n(Tu,"model.save_checkpoint()"),Tu.forEach(t),Vi=n(st,`.
Below is the snippet from `),wa=l(st,"CODE",{});var Nu=p(wa);Yi=n(Nu,"examples/by_feature/deepspeed_with_config_support.py"),Nu.forEach(t),Ji=n(st," showing this:"),st.forEach(t),Ki=u(j),f(fs.$$.fragment,j),Qi=u(j),X=l(j,"P",{});var tt=p(X);Xi=n(tt,"This will create ZeRO model and optimizer partitions along with "),va=l(tt,"CODE",{});var Lu=p(va);er=n(Lu,"zero_to_fp32.py"),Lu.forEach(t),sr=n(tt,` script in checkpoint directory.
One can use this script to do offline consolidation.`),tr=l(tt,"BR",{}),ar=n(tt,`
It requires no configuration files or GPUs. Here is an example of its usage:`),tt.forEach(t),nr=u(j),f(_s.$$.fragment,j),or=u(j),ja=l(j,"P",{});var Uu=p(ja);lr=n(Uu,"To get 32bit model for saving/inference, one can do the following:"),Uu.forEach(t),pr=u(j),f(ms.$$.fragment,j),ir=u(j),ya=l(j,"P",{});var Mu=p(ya);rr=n(Mu,"If only interested in state_dict, one can do the following:"),Mu.forEach(t),cr=u(j),f(gs.$$.fragment,j),ur=u(j),ba=l(j,"P",{});var Fu=p(ba);hr=n(Fu,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Fu.forEach(t),j.forEach(t),ko.forEach(t),Wn=u(e),ee=l(e,"H2",{class:!0});var Oo=p(ee);Se=l(Oo,"A",{id:!0,class:!0,href:!0});var Gu=p(Se);Ea=l(Gu,"SPAN",{});var Hu=p(Ea);f(ws.$$.fragment,Hu),Hu.forEach(t),Gu.forEach(t),dr=u(Oo),qa=l(Oo,"SPAN",{});var Wu=p(qa);fr=n(Wu,"ZeRO Inference"),Wu.forEach(t),Oo.forEach(t),Bn=n(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, one has to just prepare model and dataloader as shown below:

	`),f(vs.$$.fragment,e),Vn=u(e),se=l(e,"H2",{class:!0});var zo=p(se);ke=l(zo,"A",{id:!0,class:!0,href:!0});var Bu=p(ke);$a=l(Bu,"SPAN",{});var Vu=p($a);f(js.$$.fragment,Vu),Vu.forEach(t),Bu.forEach(t),_r=u(zo),Sa=l(zo,"SPAN",{});var Yu=p(Sa);mr=n(Yu,"Few caveats to be aware of"),Yu.forEach(t),zo.forEach(t),Yn=u(e),I=l(e,"OL",{});var at=p(I);ka=l(at,"LI",{});var Ju=p(ka);gr=n(Ju,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),Ju.forEach(t),wr=u(at),ys=l(at,"LI",{});var Po=p(ys);vr=n(Po,"Current integration doesn\u2019t support "),Da=l(Po,"CODE",{});var Ku=p(Da);jr=n(Ku,"mpu"),Ku.forEach(t),yr=n(Po,", limiting the tensor parallelism which is supported in Megatron-LM."),Po.forEach(t),br=u(at),Oa=l(at,"LI",{});var Qu=p(Oa);Er=n(Qu,"Current integration doesn\u2019t support multiple models."),Qu.forEach(t),at.forEach(t),Jn=u(e),te=l(e,"H2",{class:!0});var xo=p(te);De=l(xo,"A",{id:!0,class:!0,href:!0});var Xu=p(De);za=l(Xu,"SPAN",{});var eh=p(za);f(bs.$$.fragment,eh),eh.forEach(t),Xu.forEach(t),qr=u(xo),Pa=l(xo,"SPAN",{});var sh=p(Pa);$r=n(sh,"DeepSpeed Resources"),sh.forEach(t),xo.forEach(t),Kn=u(e),Oe=l(e,"P",{});var Co=p(Oe);Sr=n(Co,"The documentation for the internals related to deepspeed can be found "),Vs=l(Co,"A",{href:!0});var th=p(Vs);kr=n(th,"here"),th.forEach(t),Dr=n(Co,"."),Co.forEach(t),Qn=u(e),D=l(e,"UL",{});var ze=p(D);xa=l(ze,"LI",{});var ah=p(xa);Es=l(ah,"A",{href:!0,rel:!0});var nh=p(Es);Or=n(nh,"Project\u2019s github"),nh.forEach(t),ah.forEach(t),zr=u(ze),Ca=l(ze,"LI",{});var oh=p(Ca);qs=l(oh,"A",{href:!0,rel:!0});var lh=p(qs);Pr=n(lh,"Usage docs"),lh.forEach(t),oh.forEach(t),xr=u(ze),Ra=l(ze,"LI",{});var ph=p(Ra);$s=l(ph,"A",{href:!0,rel:!0});var ih=p($s);Cr=n(ih,"API docs"),ih.forEach(t),ph.forEach(t),Rr=u(ze),Aa=l(ze,"LI",{});var rh=p(Aa);Ss=l(rh,"A",{href:!0,rel:!0});var ch=p(Ss);Ar=n(ch,"Blog posts"),ch.forEach(t),rh.forEach(t),ze.forEach(t),Xn=u(e),Ys=l(e,"P",{});var uh=p(Ys);Ir=n(uh,"Papers:"),uh.forEach(t),eo=u(e),Z=l(e,"UL",{});var nt=p(Z);Ia=l(nt,"LI",{});var hh=p(Ia);ks=l(hh,"A",{href:!0,rel:!0});var dh=p(ks);Zr=n(dh,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),dh.forEach(t),hh.forEach(t),Tr=u(nt),Za=l(nt,"LI",{});var fh=p(Za);Ds=l(fh,"A",{href:!0,rel:!0});var _h=p(Ds);Nr=n(_h,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),_h.forEach(t),fh.forEach(t),Lr=u(nt),Ta=l(nt,"LI",{});var mh=p(Ta);Os=l(mh,"A",{href:!0,rel:!0});var gh=p(Os);Ur=n(gh,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),gh.forEach(t),mh.forEach(t),nt.forEach(t),so=u(e),T=l(e,"P",{});var ot=p(T);Mr=n(ot,"Finally, please, remember that, \u{1F917} "),Na=l(ot,"CODE",{});var wh=p(Na);Fr=n(wh,"Accelerate"),wh.forEach(t),Gr=n(ot,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),zs=l(ot,"A",{href:!0,rel:!0});var vh=p(zs);Hr=n(vh,"DeepSpeed GitHub"),vh.forEach(t),Wr=n(ot,"."),ot.forEach(t),this.h()},h(){h(L,"name","hf:doc:metadata"),h(L,"content",JSON.stringify(Dh)),h(ne,"id","deepspeed"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#deepspeed"),h(U,"class","relative group"),h(xe,"href","https://github.com/microsoft/DeepSpeed"),h(xe,"rel","nofollow"),h(Ce,"href","https://arxiv.org/abs/1910.02054"),h(Ce,"rel","nofollow"),h(Re,"href","https://arxiv.org/abs/2101.06840"),h(Re,"rel","nofollow"),h(Ae,"href","https://arxiv.org/abs/2104.07857"),h(Ae,"rel","nofollow"),h(Ie,"href","https://github.com/microsoft/DeepSpeed"),h(Ie,"rel","nofollow"),h(pe,"id","what-is-integrated"),h(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pe,"href","#what-is-integrated"),h(G,"class","relative group"),h(Ne,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),h(Ne,"rel","nofollow"),qh(As.src,Vr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/parallelism-zero.png")||h(As,"src",Vr),h(As,"alt","ZeRO Data Parallelism"),h(Le,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),h(Le,"rel","nofollow"),h(Ns,"href","#deepspeed-zero-inference"),h(_e,"id","how-it-works"),h(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_e,"href","#how-it-works"),h(H,"class","relative group"),h(Fe,"href","https://github.com/microsoft/DeepSpeed#installation"),h(Fe,"rel","nofollow"),h(me,"id","accelerate-deepspeed-plugin"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#accelerate-deepspeed-plugin"),h(B,"class","relative group"),h(ve,"id","deepspeed-config-file"),h(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ve,"href","#deepspeed-config-file"),h(V,"class","relative group"),h(ps,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),h(ps,"rel","nofollow"),h(is,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),h(is,"rel","nofollow"),h(qe,"id","saving-and-loading"),h(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qe,"href","#saving-and-loading"),h(K,"class","relative group"),h(Se,"id","zero-inference"),h(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Se,"href","#zero-inference"),h(ee,"class","relative group"),h(ke,"id","few-caveats-to-be-aware-of"),h(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ke,"href","#few-caveats-to-be-aware-of"),h(se,"class","relative group"),h(De,"id","deepspeed-resources"),h(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(De,"href","#deepspeed-resources"),h(te,"class","relative group"),h(Vs,"href","../package_reference/deepspeed"),h(Es,"href","https://github.com/microsoft/deepspeed"),h(Es,"rel","nofollow"),h(qs,"href","https://www.deepspeed.ai/getting-started/"),h(qs,"rel","nofollow"),h($s,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h($s,"rel","nofollow"),h(Ss,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(Ss,"rel","nofollow"),h(ks,"href","https://arxiv.org/abs/1910.02054"),h(ks,"rel","nofollow"),h(Ds,"href","https://arxiv.org/abs/2101.06840"),h(Ds,"rel","nofollow"),h(Os,"href","https://arxiv.org/abs/2104.07857"),h(Os,"rel","nofollow"),h(zs,"href","https://github.com/microsoft/DeepSpeed/issues"),h(zs,"rel","nofollow")},m(e,i){s(document.head,L),r(e,Fa,i),r(e,U,i),s(U,ne),s(ne,lt),_(Pe,lt,null),s(U,Ro),s(U,pt),s(pt,Ao),r(e,Ga,i),r(e,M,i),s(M,xe),s(xe,Io),s(M,Zo),s(M,Ce),s(Ce,To),s(M,No),r(e,Ha,i),r(e,b,i),s(b,it),s(it,Lo),s(b,Uo),s(b,rt),s(rt,Mo),s(b,Fo),s(b,ct),s(ct,Go),s(b,Ho),s(b,ut),s(ut,Wo),s(b,Bo),s(b,ht),s(ht,Vo),s(b,Yo),s(b,dt),s(dt,Jo),r(e,Wa,i),r(e,R,i),s(R,Ko),s(R,Re),s(Re,Qo),s(R,Xo),s(R,Ae),s(Ae,el),s(R,sl),r(e,Ba,i),r(e,Ps,i),s(Ps,tl),r(e,Va,i),r(e,xs,i),s(xs,al),r(e,Ya,i),r(e,oe,i),s(oe,nl),s(oe,Ie),s(Ie,ol),s(oe,ll),r(e,Ja,i),r(e,le,i),s(le,F),s(F,pl),s(F,ft),s(ft,il),s(F,rl),s(F,_t),s(_t,cl),s(F,ul),s(le,hl),s(le,Ze),s(Ze,dl),s(Ze,mt),s(mt,fl),s(Ze,_l),r(e,Ka,i),r(e,G,i),s(G,pe),s(pe,gt),_(Te,gt,null),s(G,ml),s(G,wt),s(wt,gl),r(e,Qa,i),r(e,Cs,i),s(Cs,wl),r(e,Xa,i),r(e,Rs,i),s(Rs,ie),s(ie,vl),s(ie,Ne),s(Ne,jl),s(ie,yl),s(ie,As),r(e,en,i),r(e,re,i),s(re,bl),s(re,Le),s(Le,El),s(re,ql),r(e,sn,i),r(e,ce,i),s(ce,$l),s(ce,vt),s(vt,Sl),s(ce,kl),r(e,tn,i),r(e,ue,i),s(ue,Dl),s(ue,jt),s(jt,Ol),s(ue,zl),r(e,an,i),r(e,he,i),s(he,Pl),s(he,yt),s(yt,xl),s(he,Cl),r(e,nn,i),r(e,de,i),s(de,Rl),s(de,bt),s(bt,Al),s(de,Il),r(e,on,i),r(e,fe,i),s(fe,Zl),s(fe,Et),s(Et,Tl),s(fe,Nl),r(e,ln,i),r(e,Is,i),s(Is,Ll),r(e,pn,i),r(e,Zs,i),s(Zs,Ul),r(e,rn,i),r(e,Ts,i),s(Ts,Ue),s(Ue,Ml),s(Ue,Ns),s(Ns,Fl),s(Ue,Gl),r(e,cn,i),r(e,H,i),s(H,_e),s(_e,qt),_(Me,qt,null),s(H,Hl),s(H,$t),s($t,Wl),r(e,un,i),r(e,W,i),s(W,St),s(St,Bl),s(W,Vl),s(W,Fe),s(Fe,Yl),s(W,Jl),r(e,hn,i),r(e,A,i),s(A,Kl),s(A,kt),s(kt,Ql),s(A,Xl),s(A,Dt),s(Dt,ep),s(A,sp),r(e,dn,i),r(e,B,i),s(B,me),s(me,Ot),_(Ge,Ot,null),s(B,tp),s(B,zt),s(zt,ap),r(e,fn,i),_(He,e,i),r(e,_n,i),r(e,Ls,i),s(Ls,np),r(e,mn,i),_(We,e,i),r(e,gn,i),r(e,ge,i),s(ge,op),s(ge,Pt),s(Pt,lp),s(ge,pp),r(e,wn,i),r(e,Us,i),s(Us,xt),s(xt,ip),r(e,vn,i),_(Be,e,i),r(e,jn,i),_(Ve,e,i),r(e,yn,i),r(e,Ms,i),s(Ms,Ct),s(Ct,rp),r(e,bn,i),_(Ye,e,i),r(e,En,i),_(Je,e,i),r(e,qn,i),r(e,we,i),s(we,cp),s(we,Rt),s(Rt,up),s(we,hp),r(e,$n,i),_(Ke,e,i),r(e,Sn,i),r(e,Fs,i),s(Fs,dp),r(e,kn,i),r(e,V,i),s(V,ve),s(ve,At),_(Qe,At,null),s(V,fp),s(V,It),s(It,_p),r(e,Dn,i),_(Xe,e,i),r(e,On,i),r(e,Gs,i),s(Gs,mp),r(e,zn,i),_(es,e,i),r(e,Pn,i),r(e,je,i),s(je,gp),s(je,Zt),s(Zt,wp),s(je,vp),r(e,xn,i),r(e,Hs,i),s(Hs,Tt),s(Tt,jp),r(e,Cn,i),_(ss,e,i),r(e,Rn,i),r(e,ye,i),s(ye,yp),s(ye,Nt),s(Nt,bp),s(ye,Ep),r(e,An,i),_(ts,e,i),r(e,In,i),_(as,e,i),r(e,Zn,i),r(e,Ws,i),s(Ws,Lt),s(Lt,qp),r(e,Tn,i),_(ns,e,i),r(e,Nn,i),r(e,be,i),s(be,$p),s(be,Ut),s(Ut,Sp),s(be,kp),r(e,Ln,i),_(os,e,i),r(e,Un,i),_(ls,e,i),r(e,Mn,i),r(e,Bs,i),s(Bs,Mt),s(Mt,Dp),r(e,Fn,i),r(e,Ee,i),s(Ee,E),s(E,Y),s(Y,Op),s(Y,ps),s(ps,zp),s(Y,Pp),s(Y,is),s(is,xp),s(Y,Cp),s(E,Rp),s(E,q),s(q,Ap),s(q,Ft),s(Ft,Ip),s(q,Zp),s(q,Gt),s(Gt,Tp),s(q,Np),s(q,Ht),s(Ht,Lp),s(q,Up),s(q,Wt),s(Wt,Mp),s(q,Fp),s(q,Bt),s(Bt,Gp),s(q,Hp),s(E,Wp),_(rs,E,null),s(E,Bp),s(E,k),s(k,Vp),s(k,Vt),s(Vt,Yp),s(k,Jp),s(k,Yt),s(Yt,Kp),s(k,Qp),s(k,Jt),s(Jt,Xp),s(k,ei),s(k,Kt),s(Kt,si),s(k,ti),s(E,ai),s(E,J),s(J,ni),s(J,Qt),s(Qt,oi),s(J,li),s(J,Xt),s(Xt,pi),s(J,ii),s(E,ri),s(E,cs),s(cs,ci),s(cs,ea),s(ea,ui),s(cs,hi),s(Ee,di),s(Ee,sa),s(sa,$),s($,fi),s($,ta),s(ta,_i),s($,mi),s($,aa),s(aa,gi),s($,wi),s($,na),s(na,vi),s($,ji),s($,oa),s(oa,yi),s($,bi),s($,la),s(la,Ei),s($,qi),r(e,Gn,i),r(e,K,i),s(K,qe),s(qe,pa),_(us,pa,null),s(K,$i),s(K,ia),s(ia,Si),r(e,Hn,i),r(e,$e,i),s($e,ra),s(ra,ca),s(ca,ki),s($e,Di),s($e,v),s(v,hs),s(hs,Oi),s(hs,ua),s(ua,zi),s(hs,Pi),s(v,xi),s(v,S),s(S,Ci),s(S,ha),s(ha,Ri),s(S,Ai),s(S,da),s(da,Ii),s(S,Zi),s(S,fa),s(fa,Ti),s(S,Ni),s(S,_a),s(_a,Li),s(S,Ui),s(S,ma),s(ma,Mi),s(S,Fi),s(v,Gi),_(ds,v,null),s(v,Hi),s(v,Q),s(Q,Wi),s(Q,ga),s(ga,Bi),s(Q,Vi),s(Q,wa),s(wa,Yi),s(Q,Ji),s(v,Ki),_(fs,v,null),s(v,Qi),s(v,X),s(X,Xi),s(X,va),s(va,er),s(X,sr),s(X,tr),s(X,ar),s(v,nr),_(_s,v,null),s(v,or),s(v,ja),s(ja,lr),s(v,pr),_(ms,v,null),s(v,ir),s(v,ya),s(ya,rr),s(v,cr),_(gs,v,null),s(v,ur),s(v,ba),s(ba,hr),r(e,Wn,i),r(e,ee,i),s(ee,Se),s(Se,Ea),_(ws,Ea,null),s(ee,dr),s(ee,qa),s(qa,fr),r(e,Bn,i),_(vs,e,i),r(e,Vn,i),r(e,se,i),s(se,ke),s(ke,$a),_(js,$a,null),s(se,_r),s(se,Sa),s(Sa,mr),r(e,Yn,i),r(e,I,i),s(I,ka),s(ka,gr),s(I,wr),s(I,ys),s(ys,vr),s(ys,Da),s(Da,jr),s(ys,yr),s(I,br),s(I,Oa),s(Oa,Er),r(e,Jn,i),r(e,te,i),s(te,De),s(De,za),_(bs,za,null),s(te,qr),s(te,Pa),s(Pa,$r),r(e,Kn,i),r(e,Oe,i),s(Oe,Sr),s(Oe,Vs),s(Vs,kr),s(Oe,Dr),r(e,Qn,i),r(e,D,i),s(D,xa),s(xa,Es),s(Es,Or),s(D,zr),s(D,Ca),s(Ca,qs),s(qs,Pr),s(D,xr),s(D,Ra),s(Ra,$s),s($s,Cr),s(D,Rr),s(D,Aa),s(Aa,Ss),s(Ss,Ar),r(e,Xn,i),r(e,Ys,i),s(Ys,Ir),r(e,eo,i),r(e,Z,i),s(Z,Ia),s(Ia,ks),s(ks,Zr),s(Z,Tr),s(Z,Za),s(Za,Ds),s(Ds,Nr),s(Z,Lr),s(Z,Ta),s(Ta,Os),s(Os,Ur),r(e,so,i),r(e,T,i),s(T,Mr),s(T,Na),s(Na,Fr),s(T,Gr),s(T,zs),s(zs,Hr),s(T,Wr),to=!0},p:$h,i(e){to||(m(Pe.$$.fragment,e),m(Te.$$.fragment,e),m(Me.$$.fragment,e),m(Ge.$$.fragment,e),m(He.$$.fragment,e),m(We.$$.fragment,e),m(Be.$$.fragment,e),m(Ve.$$.fragment,e),m(Ye.$$.fragment,e),m(Je.$$.fragment,e),m(Ke.$$.fragment,e),m(Qe.$$.fragment,e),m(Xe.$$.fragment,e),m(es.$$.fragment,e),m(ss.$$.fragment,e),m(ts.$$.fragment,e),m(as.$$.fragment,e),m(ns.$$.fragment,e),m(os.$$.fragment,e),m(ls.$$.fragment,e),m(rs.$$.fragment,e),m(us.$$.fragment,e),m(ds.$$.fragment,e),m(fs.$$.fragment,e),m(_s.$$.fragment,e),m(ms.$$.fragment,e),m(gs.$$.fragment,e),m(ws.$$.fragment,e),m(vs.$$.fragment,e),m(js.$$.fragment,e),m(bs.$$.fragment,e),to=!0)},o(e){g(Pe.$$.fragment,e),g(Te.$$.fragment,e),g(Me.$$.fragment,e),g(Ge.$$.fragment,e),g(He.$$.fragment,e),g(We.$$.fragment,e),g(Be.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Je.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(es.$$.fragment,e),g(ss.$$.fragment,e),g(ts.$$.fragment,e),g(as.$$.fragment,e),g(ns.$$.fragment,e),g(os.$$.fragment,e),g(ls.$$.fragment,e),g(rs.$$.fragment,e),g(us.$$.fragment,e),g(ds.$$.fragment,e),g(fs.$$.fragment,e),g(_s.$$.fragment,e),g(ms.$$.fragment,e),g(gs.$$.fragment,e),g(ws.$$.fragment,e),g(vs.$$.fragment,e),g(js.$$.fragment,e),g(bs.$$.fragment,e),to=!1},d(e){t(L),e&&t(Fa),e&&t(U),w(Pe),e&&t(Ga),e&&t(M),e&&t(Ha),e&&t(b),e&&t(Wa),e&&t(R),e&&t(Ba),e&&t(Ps),e&&t(Va),e&&t(xs),e&&t(Ya),e&&t(oe),e&&t(Ja),e&&t(le),e&&t(Ka),e&&t(G),w(Te),e&&t(Qa),e&&t(Cs),e&&t(Xa),e&&t(Rs),e&&t(en),e&&t(re),e&&t(sn),e&&t(ce),e&&t(tn),e&&t(ue),e&&t(an),e&&t(he),e&&t(nn),e&&t(de),e&&t(on),e&&t(fe),e&&t(ln),e&&t(Is),e&&t(pn),e&&t(Zs),e&&t(rn),e&&t(Ts),e&&t(cn),e&&t(H),w(Me),e&&t(un),e&&t(W),e&&t(hn),e&&t(A),e&&t(dn),e&&t(B),w(Ge),e&&t(fn),w(He,e),e&&t(_n),e&&t(Ls),e&&t(mn),w(We,e),e&&t(gn),e&&t(ge),e&&t(wn),e&&t(Us),e&&t(vn),w(Be,e),e&&t(jn),w(Ve,e),e&&t(yn),e&&t(Ms),e&&t(bn),w(Ye,e),e&&t(En),w(Je,e),e&&t(qn),e&&t(we),e&&t($n),w(Ke,e),e&&t(Sn),e&&t(Fs),e&&t(kn),e&&t(V),w(Qe),e&&t(Dn),w(Xe,e),e&&t(On),e&&t(Gs),e&&t(zn),w(es,e),e&&t(Pn),e&&t(je),e&&t(xn),e&&t(Hs),e&&t(Cn),w(ss,e),e&&t(Rn),e&&t(ye),e&&t(An),w(ts,e),e&&t(In),w(as,e),e&&t(Zn),e&&t(Ws),e&&t(Tn),w(ns,e),e&&t(Nn),e&&t(be),e&&t(Ln),w(os,e),e&&t(Un),w(ls,e),e&&t(Mn),e&&t(Bs),e&&t(Fn),e&&t(Ee),w(rs),e&&t(Gn),e&&t(K),w(us),e&&t(Hn),e&&t($e),w(ds),w(fs),w(_s),w(ms),w(gs),e&&t(Wn),e&&t(ee),w(ws),e&&t(Bn),w(vs,e),e&&t(Vn),e&&t(se),w(js),e&&t(Yn),e&&t(I),e&&t(Jn),e&&t(te),w(bs),e&&t(Kn),e&&t(Oe),e&&t(Qn),e&&t(D),e&&t(Xn),e&&t(Ys),e&&t(eo),e&&t(Z),e&&t(so),e&&t(T)}}}const Dh={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"deepspeed-resources",title:"DeepSpeed Resources"}],title:"DeepSpeed "};function Oh(Br){return Sh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ch extends jh{constructor(L){super();yh(this,L,Oh,kh,bh,{})}}export{Ch as default,Dh as metadata};
