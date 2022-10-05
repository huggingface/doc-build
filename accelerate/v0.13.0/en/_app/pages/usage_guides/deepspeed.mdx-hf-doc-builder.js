import{S as qh,i as $h,s as Sh,e as o,k as c,w as d,t as a,M as kh,c as l,d as t,m as u,a as p,x as f,h as n,b as h,$ as Dh,G as s,g as r,y as _,L as Oh,q as m,o as g,B as w,v as zh}from"../../chunks/vendor-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as y}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ph(Kr){let L,Ga,U,ne,pt,Pe,Io,it,Zo,Ha,M,xe,To,No,Ce,Lo,Uo,Wa,b,rt,Mo,Fo,ct,Go,Ho,ut,Wo,Bo,ht,Vo,Yo,dt,Jo,Ko,ft,Qo,Ba,R,Xo,Re,el,sl,Ae,tl,al,Va,xs,nl,Ya,Cs,ol,Ja,oe,ll,Ie,pl,il,Ka,le,F,rl,_t,cl,ul,mt,hl,dl,fl,Ze,_l,gt,ml,gl,Qa,G,pe,wt,Te,wl,vt,vl,Xa,Rs,jl,en,As,ie,yl,Ne,bl,El,Is,Qr,sn,re,ql,Le,$l,Sl,tn,ce,kl,jt,Dl,Ol,an,ue,zl,yt,Pl,xl,nn,he,Cl,bt,Rl,Al,on,de,Il,Et,Zl,Tl,ln,fe,Nl,qt,Ll,Ul,pn,Zs,Ml,rn,Ts,Fl,cn,Ns,Ue,Gl,Ls,Hl,Wl,un,H,_e,$t,Me,Bl,St,Vl,hn,W,kt,Yl,Jl,Fe,Kl,Ql,dn,A,Xl,Dt,ep,sp,Ot,tp,ap,fn,B,me,zt,Ge,np,Pt,op,_n,He,mn,Us,lp,gn,We,wn,ge,pp,xt,ip,rp,vn,Ms,Ct,cp,jn,Be,yn,Ve,bn,Fs,Rt,up,En,Ye,qn,Je,$n,we,hp,At,dp,fp,Sn,Ke,kn,Gs,_p,Dn,V,ve,It,Qe,mp,Zt,gp,On,Xe,zn,Hs,wp,Pn,es,xn,je,vp,Tt,jp,yp,Cn,Ws,Nt,bp,Rn,ss,An,ye,Ep,Lt,qp,$p,In,ts,Zn,as,Tn,Bs,Ut,Sp,Nn,ns,Ln,be,kp,Mt,Dp,Op,Un,os,Mn,ls,Fn,Vs,Ft,zp,Gn,Ee,E,Y,Pp,ps,xp,Cp,is,Rp,Ap,Ip,q,Zp,Gt,Tp,Np,Ht,Lp,Up,Wt,Mp,Fp,Bt,Gp,Hp,Vt,Wp,Bp,Vp,rs,Yp,k,Jp,Yt,Kp,Qp,Jt,Xp,ei,Kt,si,ti,Qt,ai,ni,oi,J,li,Xt,pi,ii,ea,ri,ci,ui,cs,hi,sa,di,fi,_i,ta,$,mi,aa,gi,wi,na,vi,ji,oa,yi,bi,la,Ei,qi,pa,$i,Si,Hn,K,qe,ia,us,ki,ra,Di,Wn,$e,ca,ua,Oi,zi,v,hs,Pi,ha,xi,Ci,Ri,S,Ai,da,Ii,Zi,fa,Ti,Ni,_a,Li,Ui,ma,Mi,Fi,ga,Gi,Hi,Wi,ds,Bi,Q,Vi,wa,Yi,Ji,va,Ki,Qi,Xi,fs,er,X,sr,ja,tr,ar,nr,or,lr,_s,pr,ya,ir,rr,ms,cr,gs,ur,ba,hr,dr,fr,ws,_r,Ea,mr,Bn,ee,Se,qa,vs,gr,$a,wr,Vn,js,Yn,se,ke,Sa,ys,vr,ka,jr,Jn,I,Da,yr,br,bs,Er,Oa,qr,$r,Sr,za,kr,Kn,te,De,Pa,Es,Dr,xa,Or,Qn,Oe,zr,Ys,Pr,xr,Xn,D,Ca,qs,Cr,Rr,Ra,$s,Ar,Ir,Aa,Ss,Zr,Tr,Ia,ks,Nr,eo,Js,Lr,so,Z,Za,Ds,Ur,Mr,Ta,Os,Fr,Gr,Na,zs,Hr,to,T,Wr,La,Br,Vr,Ps,Yr,Jr,ao;return Pe=new ae({}),Te=new ae({}),Me=new ae({}),Ge=new ae({}),He=new y({props:{code:"accelerate config",highlighted:"accelerate config"}}),We=new y({props:{code:"accelerate launch my_script.py --args_to_my_script",highlighted:"accelerate launch my_script.py --args_to_my_script"}}),Be=new y({props:{code:`compute_environment: LOCAL_MACHINE
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
fp32_model = load_state_dict_from_zero_checkpoint(unwrapped_model, checkpoint_dir)`}}),ws=new y({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)`}}),vs=new ae({}),js=new y({props:{code:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)",highlighted:"model, eval_dataloader = accelerator.prepare(model, eval_dataloader)"}}),ys=new ae({}),Es=new ae({}),{c(){L=o("meta"),Ga=c(),U=o("h1"),ne=o("a"),pt=o("span"),d(Pe.$$.fragment),Io=c(),it=o("span"),Zo=a("DeepSpeed"),Ha=c(),M=o("p"),xe=o("a"),To=a("DeepSpeed"),No=a(" implements everything described in the "),Ce=o("a"),Lo=a("ZeRO paper"),Uo=a(". Currently it provides full support for:"),Wa=c(),b=o("ol"),rt=o("li"),Mo=a("Optimizer state partitioning (ZeRO stage 1)"),Fo=c(),ct=o("li"),Go=a("Gradient partitioning (ZeRO stage 2)"),Ho=c(),ut=o("li"),Wo=a("Parameter partitioning (ZeRO stage 3)"),Bo=c(),ht=o("li"),Vo=a("Custom mixed precision training handling"),Yo=c(),dt=o("li"),Jo=a("A range of fast CUDA-extension-based optimizers"),Ko=c(),ft=o("li"),Qo=a("ZeRO-Offload to CPU and Disk/NVMe"),Ba=c(),R=o("p"),Xo=a("ZeRO-Offload has its own dedicated paper: "),Re=o("a"),el=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),sl=a(". And NVMe-support is described in the paper "),Ae=o("a"),tl=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),al=a("."),Va=c(),xs=o("p"),nl=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Ya=c(),Cs=o("p"),ol=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Ja=c(),oe=o("p"),ll=a("\u{1F917} Accelerate integrates "),Ie=o("a"),pl=a("DeepSpeed"),il=a(" via 2 options:"),Ka=c(),le=o("ol"),F=o("li"),rl=a("Integration of the DeepSpeed features via "),_t=o("code"),cl=a("deepspeed config file"),ul=a(" specification in "),mt=o("code"),hl=a("accelerate config"),dl=a(` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),fl=c(),Ze=o("li"),_l=a("Integration via "),gt=o("code"),ml=a("deepspeed_plugin"),gl=a(`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),Qa=c(),G=o("h2"),pe=o("a"),wt=o("span"),d(Te.$$.fragment),wl=c(),vt=o("span"),vl=a("What is integrated?"),Xa=c(),Rs=o("p"),jl=a("Training:"),en=c(),As=o("ol"),ie=o("li"),yl=a(`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Ne=o("a"),bl=a("blog post"),El=c(),Is=o("img"),sn=c(),re=o("p"),ql=a("(Source: "),Le=o("a"),$l=a("link"),Sl=a(")"),tn=c(),ce=o("p"),kl=a("a. "),jt=o("strong"),Dl=a("Stage 1"),Ol=a(" : Shards optimizer states across data parallel workers/GPUs"),an=c(),ue=o("p"),zl=a("b. "),yt=o("strong"),Pl=a("Stage 2"),xl=a(" : Shards optimizer states + gradients across data parallel workers/GPUs"),nn=c(),he=o("p"),Cl=a("c. "),bt=o("strong"),Rl=a("Stage 3"),Al=a(": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),on=c(),de=o("p"),Il=a("d. "),Et=o("strong"),Zl=a("Optimizer Offload"),Tl=a(": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),ln=c(),fe=o("p"),Nl=a("e. "),qt=o("strong"),Ll=a("Param Offload"),Ul=a(": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),pn=c(),Zs=o("u"),Ml=a("Note"),rn=a(`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),Ts=o("p"),Fl=a("Inference:"),cn=c(),Ns=o("ol"),Ue=o("li"),Gl=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ls=o("a"),Hl=a("deepspeed-zero-inference"),Wl=a("."),un=c(),H=o("h2"),_e=o("a"),$t=o("span"),d(Me.$$.fragment),Bl=c(),St=o("span"),Vl=a("How it works?"),hn=c(),W=o("p"),kt=o("strong"),Yl=a("Pre-Requisites"),Jl=a(": Install DeepSpeed version >=0.6.5. Please refer to the "),Fe=o("a"),Kl=a("DeepSpeed Installation details"),Ql=a(`
for more information.`),dn=c(),A=o("p"),Xl=a("We will first look at easy to use integration via "),Dt=o("code"),ep=a("accelerate config"),sp=a(`.
Followed by more flexible and feature rich `),Ot=o("code"),tp=a("deepspeed config file"),ap=a(" integration."),fn=c(),B=o("h3"),me=o("a"),zt=o("span"),d(Ge.$$.fragment),np=c(),Pt=o("span"),op=a("Accelerate DeepSpeed Plugin"),_n=a(`

On your machine(s) just run:

	`),d(He.$$.fragment),mn=c(),Us=o("p"),lp=a(`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),gn=c(),d(We.$$.fragment),wn=c(),ge=o("p"),pp=a("For instance, here is how you would run the NLP example "),xt=o("code"),ip=a("examples/nlp_example.py"),rp=a(" (from the root of the repo) with DeepSpeed Plugin:"),vn=c(),Ms=o("p"),Ct=o("strong"),cp=a("ZeRO Stage-2 DeepSpeed Plugin Example"),jn=c(),d(Be.$$.fragment),yn=c(),d(Ve.$$.fragment),bn=c(),Fs=o("p"),Rt=o("strong"),up=a("ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),En=c(),d(Ye.$$.fragment),qn=c(),d(Je.$$.fragment),$n=c(),we=o("p"),hp=a("Currently, "),At=o("code"),dp=a("Accelerate"),fp=a(" supports following config through the CLI:"),Sn=c(),d(Ke.$$.fragment),kn=c(),Gs=o("p"),_p=a("To be able to tweak more options, you will need to use a DeepSpeed config file."),Dn=c(),V=o("h3"),ve=o("a"),It=o("span"),d(Qe.$$.fragment),mp=c(),Zt=o("span"),gp=a("DeepSpeed Config File"),On=a(`

On your machine(s) just run:

	`),d(Xe.$$.fragment),zn=c(),Hs=o("p"),wp=a(`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Pn=c(),d(es.$$.fragment),xn=c(),je=o("p"),vp=a("For instance, here is how you would run the NLP example "),Tt=o("code"),jp=a("examples/by_feature/deepspeed_with_config_support.py"),yp=a(" (from the root of the repo) with DeepSpeed Config File:"),Cn=c(),Ws=o("p"),Nt=o("strong"),bp=a("ZeRO Stage-2 DeepSpeed Config File Example"),Rn=c(),d(ss.$$.fragment),An=c(),ye=o("p"),Ep=a("with the contents of "),Lt=o("code"),qp=a("zero_stage2_config.json"),$p=a(" being:"),In=c(),d(ts.$$.fragment),Zn=c(),d(as.$$.fragment),Tn=c(),Bs=o("p"),Ut=o("strong"),Sp=a("ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),Nn=c(),d(ns.$$.fragment),Ln=c(),be=o("p"),kp=a("with the contents of "),Mt=o("code"),Dp=a("zero_stage3_offload_config.json"),Op=a(" being:"),Un=c(),d(os.$$.fragment),Mn=c(),d(ls.$$.fragment),Fn=c(),Vs=o("p"),Ft=o("strong"),zp=a("Important code changes when using DeepSpeed Config File"),Gn=c(),Ee=o("ol"),E=o("li"),Y=o("p"),Pp=a(`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),ps=o("a"),xp=a("DeepSpeed Optimizers"),Cp=a(" and "),is=o("a"),Rp=a("DeepSpeed Schedulers"),Ap=a(` documentation.
We will look at the changes needed in the code when using these.`),Ip=c(),q=o("p"),Zp=a("a. DS Optim + DS Scheduler: The case when both "),Gt=o("code"),Tp=a("optimizer"),Np=a(" and "),Ht=o("code"),Lp=a("scheduler"),Up=a(` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Wt=o("code"),Mp=a("accelerate.utils.DummyOptim"),Fp=a(" and "),Bt=o("code"),Gp=a("accelerate.utils.DummyScheduler"),Hp=a(` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Vt=o("code"),Wp=a("examples/by_feature/deepspeed_with_config_support.py"),Bp=a(" showing this:"),Vp=c(),d(rs.$$.fragment),Yp=c(),k=o("p"),Jp=a("b. Custom Optim + Custom Scheduler: The case when both "),Yt=o("code"),Kp=a("optimizer"),Qp=a(" and "),Jt=o("code"),Xp=a("scheduler"),ei=a(` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code remains unchanged if the `),Kt=o("code"),si=a("optimizer"),ti=a(" and "),Qt=o("code"),ai=a("scheduler"),ni=a(" keys are absent in the DeepSpeed config file."),oi=c(),J=o("p"),li=a("c. Custom Optim + DS Scheduler: The case when only "),Xt=o("code"),pi=a("scheduler"),ii=a(` key is present in the DeepSpeed config file.
In this situation, user has to use `),ea=o("code"),ri=a("accelerate.utils.DummyScheduler"),ci=a(" to replace the PyTorch/Custom scheduler in their code."),ui=c(),cs=o("p"),hi=a("d. DS Optim + Custom Scheduler: The case when only "),sa=o("code"),di=a("optimizer"),fi=a(` key is present in the DeepSpeed config file.
This will result in an error because you can only use DS Scheduler when using DS Optim.`),_i=c(),ta=o("li"),$=o("p"),mi=a("Notice the "),aa=o("code"),gi=a("auto"),wi=a(" values in the above example DeepSpeed config files. These are automatically handled by "),na=o("code"),vi=a("prepare"),ji=a(` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),oa=o("code"),yi=a("prepare"),bi=a(` method.
Only the `),la=o("code"),Ei=a("auto"),qi=a(" fields specified in above examples are handled by "),pa=o("code"),$i=a("prepare"),Si=a(" method and the rest have to be explicitly specified by the user."),Hn=c(),K=o("h2"),qe=o("a"),ia=o("span"),d(us.$$.fragment),ki=c(),ra=o("span"),Di=a("Saving and loading"),Wn=c(),$e=o("ol"),ca=o("li"),ua=o("p"),Oi=a("Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),zi=c(),v=o("li"),hs=o("p"),Pi=a("under ZeRO Stage-3, "),ha=o("code"),xi=a("state_dict"),Ci=a(` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),Ri=c(),S=o("p"),Ai=a("a. Saving the entire 16bit model weights to directly load later on using "),da=o("code"),Ii=a("model.load_state_dict(torch.load(pytorch_model.bin))"),Zi=a(`.
For this, either set `),fa=o("code"),Ti=a("zero_optimization.stage3_gather_16bit_weights_on_model_save"),Ni=a(` to True in DeepSpeed Config file or set
`),_a=o("code"),Li=a("zero3_save_16bit_model"),Ui=a(` to True in DeepSpeed Plugin.
`),ma=o("strong"),Mi=a("Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),Fi=a(`
Below is the snippet from `),ga=o("code"),Gi=a("examples/by_feature/deepspeed_with_config_support.py"),Hi=a(" showing this:"),Wi=c(),d(ds.$$.fragment),Bi=c(),Q=o("p"),Vi=a("b. To get 32bit weights, first save the model using "),wa=o("code"),Yi=a("model.save_checkpoint()"),Ji=a(`.
Below is the snippet from `),va=o("code"),Ki=a("examples/by_feature/deepspeed_with_config_support.py"),Qi=a(" showing this:"),Xi=c(),d(fs.$$.fragment),er=c(),X=o("p"),sr=a("This will create ZeRO model and optimizer partitions along with "),ja=o("code"),tr=a("zero_to_fp32.py"),ar=a(` script in checkpoint directory.
You can use this script to do offline consolidation.`),nr=o("br"),or=a(`
It requires no configuration files or GPUs. Here is an example of its usage:`),lr=c(),d(_s.$$.fragment),pr=c(),ya=o("p"),ir=a("To get 32bit model for saving/inference, you can perform:"),rr=c(),d(ms.$$.fragment),cr=c(),gs=o("p"),ur=a("If you are only interested in the "),ba=o("code"),hr=a("state_dict"),dr=a(", you can do the following:"),fr=c(),d(ws.$$.fragment),_r=c(),Ea=o("p"),mr=a("Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Bn=c(),ee=o("h2"),Se=o("a"),qa=o("span"),d(vs.$$.fragment),gr=c(),$a=o("span"),wr=a("ZeRO Inference"),Vn=a(`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, you just need to prepare the model and dataloader as shown below:

	`),d(js.$$.fragment),Yn=c(),se=o("h2"),ke=o("a"),Sa=o("span"),d(ys.$$.fragment),vr=c(),ka=o("span"),jr=a("Few caveats to be aware of"),Jn=c(),I=o("ol"),Da=o("li"),yr=a("Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),br=c(),bs=o("li"),Er=a("Current integration doesn\u2019t support "),Oa=o("code"),qr=a("mpu"),$r=a(", limiting the tensor parallelism which is supported in Megatron-LM."),Sr=c(),za=o("li"),kr=a("Current integration doesn\u2019t support multiple models."),Kn=c(),te=o("h2"),De=o("a"),Pa=o("span"),d(Es.$$.fragment),Dr=c(),xa=o("span"),Or=a("DeepSpeed Resources"),Qn=c(),Oe=o("p"),zr=a("The documentation for the internals related to deepspeed can be found "),Ys=o("a"),Pr=a("here"),xr=a("."),Xn=c(),D=o("ul"),Ca=o("li"),qs=o("a"),Cr=a("Project\u2019s github"),Rr=c(),Ra=o("li"),$s=o("a"),Ar=a("Usage docs"),Ir=c(),Aa=o("li"),Ss=o("a"),Zr=a("API docs"),Tr=c(),Ia=o("li"),ks=o("a"),Nr=a("Blog posts"),eo=c(),Js=o("p"),Lr=a("Papers:"),so=c(),Z=o("ul"),Za=o("li"),Ds=o("a"),Ur=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),Mr=c(),Ta=o("li"),Os=o("a"),Fr=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),Gr=c(),Na=o("li"),zs=o("a"),Hr=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),to=c(),T=o("p"),Wr=a("Finally, please, remember that, \u{1F917} "),La=o("code"),Br=a("Accelerate"),Vr=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ps=o("a"),Yr=a("DeepSpeed GitHub"),Jr=a("."),this.h()},l(e){const i=kh('[data-svelte="svelte-1phssyn"]',document.head);L=l(i,"META",{name:!0,content:!0}),i.forEach(t),Ga=u(e),U=l(e,"H1",{class:!0});var no=p(U);ne=l(no,"A",{id:!0,class:!0,href:!0});var Xr=p(ne);pt=l(Xr,"SPAN",{});var ec=p(pt);f(Pe.$$.fragment,ec),ec.forEach(t),Xr.forEach(t),Io=u(no),it=l(no,"SPAN",{});var sc=p(it);Zo=n(sc,"DeepSpeed"),sc.forEach(t),no.forEach(t),Ha=u(e),M=l(e,"P",{});var Ua=p(M);xe=l(Ua,"A",{href:!0,rel:!0});var tc=p(xe);To=n(tc,"DeepSpeed"),tc.forEach(t),No=n(Ua," implements everything described in the "),Ce=l(Ua,"A",{href:!0,rel:!0});var ac=p(Ce);Lo=n(ac,"ZeRO paper"),ac.forEach(t),Uo=n(Ua,". Currently it provides full support for:"),Ua.forEach(t),Wa=u(e),b=l(e,"OL",{});var O=p(b);rt=l(O,"LI",{});var nc=p(rt);Mo=n(nc,"Optimizer state partitioning (ZeRO stage 1)"),nc.forEach(t),Fo=u(O),ct=l(O,"LI",{});var oc=p(ct);Go=n(oc,"Gradient partitioning (ZeRO stage 2)"),oc.forEach(t),Ho=u(O),ut=l(O,"LI",{});var lc=p(ut);Wo=n(lc,"Parameter partitioning (ZeRO stage 3)"),lc.forEach(t),Bo=u(O),ht=l(O,"LI",{});var pc=p(ht);Vo=n(pc,"Custom mixed precision training handling"),pc.forEach(t),Yo=u(O),dt=l(O,"LI",{});var ic=p(dt);Jo=n(ic,"A range of fast CUDA-extension-based optimizers"),ic.forEach(t),Ko=u(O),ft=l(O,"LI",{});var rc=p(ft);Qo=n(rc,"ZeRO-Offload to CPU and Disk/NVMe"),rc.forEach(t),O.forEach(t),Ba=u(e),R=l(e,"P",{});var Ks=p(R);Xo=n(Ks,"ZeRO-Offload has its own dedicated paper: "),Re=l(Ks,"A",{href:!0,rel:!0});var cc=p(Re);el=n(cc,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),cc.forEach(t),sl=n(Ks,". And NVMe-support is described in the paper "),Ae=l(Ks,"A",{href:!0,rel:!0});var uc=p(Ae);tl=n(uc,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),uc.forEach(t),al=n(Ks,"."),Ks.forEach(t),Va=u(e),xs=l(e,"P",{});var hc=p(xs);nl=n(hc,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),hc.forEach(t),Ya=u(e),Cs=l(e,"P",{});var dc=p(Cs);ol=n(dc,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),dc.forEach(t),Ja=u(e),oe=l(e,"P",{});var oo=p(oe);ll=n(oo,"\u{1F917} Accelerate integrates "),Ie=l(oo,"A",{href:!0,rel:!0});var fc=p(Ie);pl=n(fc,"DeepSpeed"),fc.forEach(t),il=n(oo," via 2 options:"),oo.forEach(t),Ka=u(e),le=l(e,"OL",{});var lo=p(le);F=l(lo,"LI",{});var Qs=p(F);rl=n(Qs,"Integration of the DeepSpeed features via "),_t=l(Qs,"CODE",{});var _c=p(_t);cl=n(_c,"deepspeed config file"),_c.forEach(t),ul=n(Qs," specification in "),mt=l(Qs,"CODE",{});var mc=p(mt);hl=n(mc,"accelerate config"),mc.forEach(t),dl=n(Qs,` . You just supply your custom config file or use our template. Most of
this document is focused on this feature. This supports all the core features of DeepSpeed and gives user a lot of flexibility.
User may have to change few lines of code depending on the config.`),Qs.forEach(t),fl=u(lo),Ze=l(lo,"LI",{});var po=p(Ze);_l=n(po,"Integration via "),gt=l(po,"CODE",{});var gc=p(gt);ml=n(gc,"deepspeed_plugin"),gc.forEach(t),gl=n(po,`.This supports subset of the DeepSpeed features and uses default options for the rest of the configurations.
User need not change any code and is good for those who are fine with most of the default settings of DeepSpeed.`),po.forEach(t),lo.forEach(t),Qa=u(e),G=l(e,"H2",{class:!0});var io=p(G);pe=l(io,"A",{id:!0,class:!0,href:!0});var wc=p(pe);wt=l(wc,"SPAN",{});var vc=p(wt);f(Te.$$.fragment,vc),vc.forEach(t),wc.forEach(t),wl=u(io),vt=l(io,"SPAN",{});var jc=p(vt);vl=n(jc,"What is integrated?"),jc.forEach(t),io.forEach(t),Xa=u(e),Rs=l(e,"P",{});var yc=p(Rs);jl=n(yc,"Training:"),yc.forEach(t),en=u(e),As=l(e,"OL",{});var bc=p(As);ie=l(bc,"LI",{});var Ma=p(ie);yl=n(Ma,`DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 as well as CPU/Disk offload of optimizer states, gradients and parameters.
Below is a short description of Data Parallelism using ZeRO - Zero Redundancy Optimizer along with diagram from this `),Ne=l(Ma,"A",{href:!0,rel:!0});var Ec=p(Ne);bl=n(Ec,"blog post"),Ec.forEach(t),El=u(Ma),Is=l(Ma,"IMG",{src:!0,alt:!0}),Ma.forEach(t),bc.forEach(t),sn=u(e),re=l(e,"P",{});var ro=p(re);ql=n(ro,"(Source: "),Le=l(ro,"A",{href:!0,rel:!0});var qc=p(Le);$l=n(qc,"link"),qc.forEach(t),Sl=n(ro,")"),ro.forEach(t),tn=u(e),ce=l(e,"P",{});var co=p(ce);kl=n(co,"a. "),jt=l(co,"STRONG",{});var $c=p(jt);Dl=n($c,"Stage 1"),$c.forEach(t),Ol=n(co," : Shards optimizer states across data parallel workers/GPUs"),co.forEach(t),an=u(e),ue=l(e,"P",{});var uo=p(ue);zl=n(uo,"b. "),yt=l(uo,"STRONG",{});var Sc=p(yt);Pl=n(Sc,"Stage 2"),Sc.forEach(t),xl=n(uo," : Shards optimizer states + gradients across data parallel workers/GPUs"),uo.forEach(t),nn=u(e),he=l(e,"P",{});var ho=p(he);Cl=n(ho,"c. "),bt=l(ho,"STRONG",{});var kc=p(bt);Rl=n(kc,"Stage 3"),kc.forEach(t),Al=n(ho,": Shards optimizer states + gradients + model parameters across data parallel workers/GPUs"),ho.forEach(t),on=u(e),de=l(e,"P",{});var fo=p(de);Il=n(fo,"d. "),Et=l(fo,"STRONG",{});var Dc=p(Et);Zl=n(Dc,"Optimizer Offload"),Dc.forEach(t),Tl=n(fo,": Offloads the gradients + optimizer states to CPU/Disk building on top of ZERO Stage 2"),fo.forEach(t),ln=u(e),fe=l(e,"P",{});var _o=p(fe);Nl=n(_o,"e. "),qt=l(_o,"STRONG",{});var Oc=p(qt);Ll=n(Oc,"Param Offload"),Oc.forEach(t),Ul=n(_o,": Offloads the model parameters to CPU/Disk building on top of ZERO Stage 3"),_o.forEach(t),pn=u(e),Zs=l(e,"U",{});var zc=p(Zs);Ml=n(zc,"Note"),zc.forEach(t),rn=n(e,`: With respect to Disk Offload, the disk should be an NVME for decent speed but it technically work on any Disk
`),Ts=l(e,"P",{});var Pc=p(Ts);Fl=n(Pc,"Inference:"),Pc.forEach(t),cn=u(e),Ns=l(e,"OL",{});var xc=p(Ns);Ue=l(xc,"LI",{});var mo=p(Ue);Gl=n(mo,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Ls=l(mo,"A",{href:!0});var Cc=p(Ls);Hl=n(Cc,"deepspeed-zero-inference"),Cc.forEach(t),Wl=n(mo,"."),mo.forEach(t),xc.forEach(t),un=u(e),H=l(e,"H2",{class:!0});var go=p(H);_e=l(go,"A",{id:!0,class:!0,href:!0});var Rc=p(_e);$t=l(Rc,"SPAN",{});var Ac=p($t);f(Me.$$.fragment,Ac),Ac.forEach(t),Rc.forEach(t),Bl=u(go),St=l(go,"SPAN",{});var Ic=p(St);Vl=n(Ic,"How it works?"),Ic.forEach(t),go.forEach(t),hn=u(e),W=l(e,"P",{});var Fa=p(W);kt=l(Fa,"STRONG",{});var Zc=p(kt);Yl=n(Zc,"Pre-Requisites"),Zc.forEach(t),Jl=n(Fa,": Install DeepSpeed version >=0.6.5. Please refer to the "),Fe=l(Fa,"A",{href:!0,rel:!0});var Tc=p(Fe);Kl=n(Tc,"DeepSpeed Installation details"),Tc.forEach(t),Ql=n(Fa,`
for more information.`),Fa.forEach(t),dn=u(e),A=l(e,"P",{});var Xs=p(A);Xl=n(Xs,"We will first look at easy to use integration via "),Dt=l(Xs,"CODE",{});var Nc=p(Dt);ep=n(Nc,"accelerate config"),Nc.forEach(t),sp=n(Xs,`.
Followed by more flexible and feature rich `),Ot=l(Xs,"CODE",{});var Lc=p(Ot);tp=n(Lc,"deepspeed config file"),Lc.forEach(t),ap=n(Xs," integration."),Xs.forEach(t),fn=u(e),B=l(e,"H3",{class:!0});var wo=p(B);me=l(wo,"A",{id:!0,class:!0,href:!0});var Uc=p(me);zt=l(Uc,"SPAN",{});var Mc=p(zt);f(Ge.$$.fragment,Mc),Mc.forEach(t),Uc.forEach(t),np=u(wo),Pt=l(wo,"SPAN",{});var Fc=p(Pt);op=n(Fc,"Accelerate DeepSpeed Plugin"),Fc.forEach(t),wo.forEach(t),_n=n(e,`

On your machine(s) just run:

	`),f(He.$$.fragment,e),mn=u(e),Us=l(e,"P",{});var Gc=p(Us);lp=n(Gc,`and answer the questions asked. It will ask whether you want to use a config file for DeepSpeed to which you should answer no. Then answer the following questions to generate a basic DeepSpeed config.
This will generate a config file that will be used automatically to properly set the
default options when doing`),Gc.forEach(t),gn=u(e),f(We.$$.fragment,e),wn=u(e),ge=l(e,"P",{});var vo=p(ge);pp=n(vo,"For instance, here is how you would run the NLP example "),xt=l(vo,"CODE",{});var Hc=p(xt);ip=n(Hc,"examples/nlp_example.py"),Hc.forEach(t),rp=n(vo," (from the root of the repo) with DeepSpeed Plugin:"),vo.forEach(t),vn=u(e),Ms=l(e,"P",{});var Wc=p(Ms);Ct=l(Wc,"STRONG",{});var Bc=p(Ct);cp=n(Bc,"ZeRO Stage-2 DeepSpeed Plugin Example"),Bc.forEach(t),Wc.forEach(t),jn=u(e),f(Be.$$.fragment,e),yn=u(e),f(Ve.$$.fragment,e),bn=u(e),Fs=l(e,"P",{});var Vc=p(Fs);Rt=l(Vc,"STRONG",{});var Yc=p(Rt);up=n(Yc,"ZeRO Stage-3 with CPU Offload DeepSpeed Plugin Example"),Yc.forEach(t),Vc.forEach(t),En=u(e),f(Ye.$$.fragment,e),qn=u(e),f(Je.$$.fragment,e),$n=u(e),we=l(e,"P",{});var jo=p(we);hp=n(jo,"Currently, "),At=l(jo,"CODE",{});var Jc=p(At);dp=n(Jc,"Accelerate"),Jc.forEach(t),fp=n(jo," supports following config through the CLI:"),jo.forEach(t),Sn=u(e),f(Ke.$$.fragment,e),kn=u(e),Gs=l(e,"P",{});var Kc=p(Gs);_p=n(Kc,"To be able to tweak more options, you will need to use a DeepSpeed config file."),Kc.forEach(t),Dn=u(e),V=l(e,"H3",{class:!0});var yo=p(V);ve=l(yo,"A",{id:!0,class:!0,href:!0});var Qc=p(ve);It=l(Qc,"SPAN",{});var Xc=p(It);f(Qe.$$.fragment,Xc),Xc.forEach(t),Qc.forEach(t),mp=u(yo),Zt=l(yo,"SPAN",{});var eu=p(Zt);gp=n(eu,"DeepSpeed Config File"),eu.forEach(t),yo.forEach(t),On=n(e,`

On your machine(s) just run:

	`),f(Xe.$$.fragment,e),zn=u(e),Hs=l(e,"P",{});var su=p(Hs);wp=n(su,`and answer the questions asked. It will ask whether you want to use a config file for deepspeed to which you answer yes
and provide the path to the deepspeed config file.
This will generate a config file that will be used automatically to properly set the
default options when doing`),su.forEach(t),Pn=u(e),f(es.$$.fragment,e),xn=u(e),je=l(e,"P",{});var bo=p(je);vp=n(bo,"For instance, here is how you would run the NLP example "),Tt=l(bo,"CODE",{});var tu=p(Tt);jp=n(tu,"examples/by_feature/deepspeed_with_config_support.py"),tu.forEach(t),yp=n(bo," (from the root of the repo) with DeepSpeed Config File:"),bo.forEach(t),Cn=u(e),Ws=l(e,"P",{});var au=p(Ws);Nt=l(au,"STRONG",{});var nu=p(Nt);bp=n(nu,"ZeRO Stage-2 DeepSpeed Config File Example"),nu.forEach(t),au.forEach(t),Rn=u(e),f(ss.$$.fragment,e),An=u(e),ye=l(e,"P",{});var Eo=p(ye);Ep=n(Eo,"with the contents of "),Lt=l(Eo,"CODE",{});var ou=p(Lt);qp=n(ou,"zero_stage2_config.json"),ou.forEach(t),$p=n(Eo," being:"),Eo.forEach(t),In=u(e),f(ts.$$.fragment,e),Zn=u(e),f(as.$$.fragment,e),Tn=u(e),Bs=l(e,"P",{});var lu=p(Bs);Ut=l(lu,"STRONG",{});var pu=p(Ut);Sp=n(pu,"ZeRO Stage-3 with CPU offload DeepSpeed Config File Example"),pu.forEach(t),lu.forEach(t),Nn=u(e),f(ns.$$.fragment,e),Ln=u(e),be=l(e,"P",{});var qo=p(be);kp=n(qo,"with the contents of "),Mt=l(qo,"CODE",{});var iu=p(Mt);Dp=n(iu,"zero_stage3_offload_config.json"),iu.forEach(t),Op=n(qo," being:"),qo.forEach(t),Un=u(e),f(os.$$.fragment,e),Mn=u(e),f(ls.$$.fragment,e),Fn=u(e),Vs=l(e,"P",{});var ru=p(Vs);Ft=l(ru,"STRONG",{});var cu=p(Ft);zp=n(cu,"Important code changes when using DeepSpeed Config File"),cu.forEach(t),ru.forEach(t),Gn=u(e),Ee=l(e,"OL",{});var $o=p(Ee);E=l($o,"LI",{});var z=p(E);Y=l(z,"P",{});var et=p(Y);Pp=n(et,`DeepSpeed Optimizers and Schedulers. For more information on these,
see the `),ps=l(et,"A",{href:!0,rel:!0});var uu=p(ps);xp=n(uu,"DeepSpeed Optimizers"),uu.forEach(t),Cp=n(et," and "),is=l(et,"A",{href:!0,rel:!0});var hu=p(is);Rp=n(hu,"DeepSpeed Schedulers"),hu.forEach(t),Ap=n(et,` documentation.
We will look at the changes needed in the code when using these.`),et.forEach(t),Ip=u(z),q=l(z,"P",{});var P=p(q);Zp=n(P,"a. DS Optim + DS Scheduler: The case when both "),Gt=l(P,"CODE",{});var du=p(Gt);Tp=n(du,"optimizer"),du.forEach(t),Np=n(P," and "),Ht=l(P,"CODE",{});var fu=p(Ht);Lp=n(fu,"scheduler"),fu.forEach(t),Up=n(P,` keys present in the DeepSpeed config file.
In this situation, those will be used and user has to use `),Wt=l(P,"CODE",{});var _u=p(Wt);Mp=n(_u,"accelerate.utils.DummyOptim"),_u.forEach(t),Fp=n(P," and "),Bt=l(P,"CODE",{});var mu=p(Bt);Gp=n(mu,"accelerate.utils.DummyScheduler"),mu.forEach(t),Hp=n(P,` to replace the PyTorch/Custom optimizers and schedulers in their code.
Below is the snippet from `),Vt=l(P,"CODE",{});var gu=p(Vt);Wp=n(gu,"examples/by_feature/deepspeed_with_config_support.py"),gu.forEach(t),Bp=n(P," showing this:"),P.forEach(t),Vp=u(z),f(rs.$$.fragment,z),Yp=u(z),k=l(z,"P",{});var N=p(k);Jp=n(N,"b. Custom Optim + Custom Scheduler: The case when both "),Yt=l(N,"CODE",{});var wu=p(Yt);Kp=n(wu,"optimizer"),wu.forEach(t),Qp=n(N," and "),Jt=l(N,"CODE",{});var vu=p(Jt);Xp=n(vu,"scheduler"),vu.forEach(t),ei=n(N,` keys are absent in the DeepSpeed config file.
In this situation, no code changes are needed from the user and this is the case when using integration via DeepSpeed Plugin.
In the above example we can see that the code remains unchanged if the `),Kt=l(N,"CODE",{});var ju=p(Kt);si=n(ju,"optimizer"),ju.forEach(t),ti=n(N," and "),Qt=l(N,"CODE",{});var yu=p(Qt);ai=n(yu,"scheduler"),yu.forEach(t),ni=n(N," keys are absent in the DeepSpeed config file."),N.forEach(t),oi=u(z),J=l(z,"P",{});var st=p(J);li=n(st,"c. Custom Optim + DS Scheduler: The case when only "),Xt=l(st,"CODE",{});var bu=p(Xt);pi=n(bu,"scheduler"),bu.forEach(t),ii=n(st,` key is present in the DeepSpeed config file.
In this situation, user has to use `),ea=l(st,"CODE",{});var Eu=p(ea);ri=n(Eu,"accelerate.utils.DummyScheduler"),Eu.forEach(t),ci=n(st," to replace the PyTorch/Custom scheduler in their code."),st.forEach(t),ui=u(z),cs=l(z,"P",{});var So=p(cs);hi=n(So,"d. DS Optim + Custom Scheduler: The case when only "),sa=l(So,"CODE",{});var qu=p(sa);di=n(qu,"optimizer"),qu.forEach(t),fi=n(So,` key is present in the DeepSpeed config file.
This will result in an error because you can only use DS Scheduler when using DS Optim.`),So.forEach(t),z.forEach(t),_i=u($o),ta=l($o,"LI",{});var $u=p(ta);$=l($u,"P",{});var x=p($);mi=n(x,"Notice the "),aa=l(x,"CODE",{});var Su=p(aa);gi=n(Su,"auto"),Su.forEach(t),wi=n(x," values in the above example DeepSpeed config files. These are automatically handled by "),na=l(x,"CODE",{});var ku=p(na);vi=n(ku,"prepare"),ku.forEach(t),ji=n(x,` method
based on model, dataloaders, dummy optimizer and dummy schedulers provided to `),oa=l(x,"CODE",{});var Du=p(oa);yi=n(Du,"prepare"),Du.forEach(t),bi=n(x,` method.
Only the `),la=l(x,"CODE",{});var Ou=p(la);Ei=n(Ou,"auto"),Ou.forEach(t),qi=n(x," fields specified in above examples are handled by "),pa=l(x,"CODE",{});var zu=p(pa);$i=n(zu,"prepare"),zu.forEach(t),Si=n(x," method and the rest have to be explicitly specified by the user."),x.forEach(t),$u.forEach(t),$o.forEach(t),Hn=u(e),K=l(e,"H2",{class:!0});var ko=p(K);qe=l(ko,"A",{id:!0,class:!0,href:!0});var Pu=p(qe);ia=l(Pu,"SPAN",{});var xu=p(ia);f(us.$$.fragment,xu),xu.forEach(t),Pu.forEach(t),ki=u(ko),ra=l(ko,"SPAN",{});var Cu=p(ra);Di=n(Cu,"Saving and loading"),Cu.forEach(t),ko.forEach(t),Wn=u(e),$e=l(e,"OL",{});var Do=p($e);ca=l(Do,"LI",{});var Ru=p(ca);ua=l(Ru,"P",{});var Au=p(ua);Oi=n(Au,"Saving and loading of models is unchanged for ZeRO Stage-1 and Stage-2."),Au.forEach(t),Ru.forEach(t),zi=u(Do),v=l(Do,"LI",{});var j=p(v);hs=l(j,"P",{});var Oo=p(hs);Pi=n(Oo,"under ZeRO Stage-3, "),ha=l(Oo,"CODE",{});var Iu=p(ha);xi=n(Iu,"state_dict"),Iu.forEach(t),Ci=n(Oo,` contains just the placeholders since the model weights are partitioned across multiple GPUs.
ZeRO Stage-3 has 2 options:`),Oo.forEach(t),Ri=u(j),S=l(j,"P",{});var C=p(S);Ai=n(C,"a. Saving the entire 16bit model weights to directly load later on using "),da=l(C,"CODE",{});var Zu=p(da);Ii=n(Zu,"model.load_state_dict(torch.load(pytorch_model.bin))"),Zu.forEach(t),Zi=n(C,`.
For this, either set `),fa=l(C,"CODE",{});var Tu=p(fa);Ti=n(Tu,"zero_optimization.stage3_gather_16bit_weights_on_model_save"),Tu.forEach(t),Ni=n(C,` to True in DeepSpeed Config file or set
`),_a=l(C,"CODE",{});var Nu=p(_a);Li=n(Nu,"zero3_save_16bit_model"),Nu.forEach(t),Ui=n(C,` to True in DeepSpeed Plugin.
`),ma=l(C,"STRONG",{});var Lu=p(ma);Mi=n(Lu,"Note that this option requires consolidation of the weights on one GPU it can be slow and memory demanding, so only use this feature when needed."),Lu.forEach(t),Fi=n(C,`
Below is the snippet from `),ga=l(C,"CODE",{});var Uu=p(ga);Gi=n(Uu,"examples/by_feature/deepspeed_with_config_support.py"),Uu.forEach(t),Hi=n(C," showing this:"),C.forEach(t),Wi=u(j),f(ds.$$.fragment,j),Bi=u(j),Q=l(j,"P",{});var tt=p(Q);Vi=n(tt,"b. To get 32bit weights, first save the model using "),wa=l(tt,"CODE",{});var Mu=p(wa);Yi=n(Mu,"model.save_checkpoint()"),Mu.forEach(t),Ji=n(tt,`.
Below is the snippet from `),va=l(tt,"CODE",{});var Fu=p(va);Ki=n(Fu,"examples/by_feature/deepspeed_with_config_support.py"),Fu.forEach(t),Qi=n(tt," showing this:"),tt.forEach(t),Xi=u(j),f(fs.$$.fragment,j),er=u(j),X=l(j,"P",{});var at=p(X);sr=n(at,"This will create ZeRO model and optimizer partitions along with "),ja=l(at,"CODE",{});var Gu=p(ja);tr=n(Gu,"zero_to_fp32.py"),Gu.forEach(t),ar=n(at,` script in checkpoint directory.
You can use this script to do offline consolidation.`),nr=l(at,"BR",{}),or=n(at,`
It requires no configuration files or GPUs. Here is an example of its usage:`),at.forEach(t),lr=u(j),f(_s.$$.fragment,j),pr=u(j),ya=l(j,"P",{});var Hu=p(ya);ir=n(Hu,"To get 32bit model for saving/inference, you can perform:"),Hu.forEach(t),rr=u(j),f(ms.$$.fragment,j),cr=u(j),gs=l(j,"P",{});var zo=p(gs);ur=n(zo,"If you are only interested in the "),ba=l(zo,"CODE",{});var Wu=p(ba);hr=n(Wu,"state_dict"),Wu.forEach(t),dr=n(zo,", you can do the following:"),zo.forEach(t),fr=u(j),f(ws.$$.fragment,j),_r=u(j),Ea=l(j,"P",{});var Bu=p(Ea);mr=n(Bu,"Note that all these functions require ~2x memory (general RAM) of the size of the final checkpoint."),Bu.forEach(t),j.forEach(t),Do.forEach(t),Bn=u(e),ee=l(e,"H2",{class:!0});var Po=p(ee);Se=l(Po,"A",{id:!0,class:!0,href:!0});var Vu=p(Se);qa=l(Vu,"SPAN",{});var Yu=p(qa);f(vs.$$.fragment,Yu),Yu.forEach(t),Vu.forEach(t),gr=u(Po),$a=l(Po,"SPAN",{});var Ju=p($a);wr=n(Ju,"ZeRO Inference"),Ju.forEach(t),Po.forEach(t),Vn=n(e,`

DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. 
It uses the same ZeRO protocol as training, but it doesn't use an optimizer and a lr scheduler and only stage 3 is relevant.
With accelerate integration, you just need to prepare the model and dataloader as shown below:

	`),f(js.$$.fragment,e),Yn=u(e),se=l(e,"H2",{class:!0});var xo=p(se);ke=l(xo,"A",{id:!0,class:!0,href:!0});var Ku=p(ke);Sa=l(Ku,"SPAN",{});var Qu=p(Sa);f(ys.$$.fragment,Qu),Qu.forEach(t),Ku.forEach(t),vr=u(xo),ka=l(xo,"SPAN",{});var Xu=p(ka);jr=n(Xu,"Few caveats to be aware of"),Xu.forEach(t),xo.forEach(t),Jn=u(e),I=l(e,"OL",{});var nt=p(I);Da=l(nt,"LI",{});var eh=p(Da);yr=n(eh,"Current integration doesn\u2019t support Pipeline Parallelism of DeepSpeed."),eh.forEach(t),br=u(nt),bs=l(nt,"LI",{});var Co=p(bs);Er=n(Co,"Current integration doesn\u2019t support "),Oa=l(Co,"CODE",{});var sh=p(Oa);qr=n(sh,"mpu"),sh.forEach(t),$r=n(Co,", limiting the tensor parallelism which is supported in Megatron-LM."),Co.forEach(t),Sr=u(nt),za=l(nt,"LI",{});var th=p(za);kr=n(th,"Current integration doesn\u2019t support multiple models."),th.forEach(t),nt.forEach(t),Kn=u(e),te=l(e,"H2",{class:!0});var Ro=p(te);De=l(Ro,"A",{id:!0,class:!0,href:!0});var ah=p(De);Pa=l(ah,"SPAN",{});var nh=p(Pa);f(Es.$$.fragment,nh),nh.forEach(t),ah.forEach(t),Dr=u(Ro),xa=l(Ro,"SPAN",{});var oh=p(xa);Or=n(oh,"DeepSpeed Resources"),oh.forEach(t),Ro.forEach(t),Qn=u(e),Oe=l(e,"P",{});var Ao=p(Oe);zr=n(Ao,"The documentation for the internals related to deepspeed can be found "),Ys=l(Ao,"A",{href:!0});var lh=p(Ys);Pr=n(lh,"here"),lh.forEach(t),xr=n(Ao,"."),Ao.forEach(t),Xn=u(e),D=l(e,"UL",{});var ze=p(D);Ca=l(ze,"LI",{});var ph=p(Ca);qs=l(ph,"A",{href:!0,rel:!0});var ih=p(qs);Cr=n(ih,"Project\u2019s github"),ih.forEach(t),ph.forEach(t),Rr=u(ze),Ra=l(ze,"LI",{});var rh=p(Ra);$s=l(rh,"A",{href:!0,rel:!0});var ch=p($s);Ar=n(ch,"Usage docs"),ch.forEach(t),rh.forEach(t),Ir=u(ze),Aa=l(ze,"LI",{});var uh=p(Aa);Ss=l(uh,"A",{href:!0,rel:!0});var hh=p(Ss);Zr=n(hh,"API docs"),hh.forEach(t),uh.forEach(t),Tr=u(ze),Ia=l(ze,"LI",{});var dh=p(Ia);ks=l(dh,"A",{href:!0,rel:!0});var fh=p(ks);Nr=n(fh,"Blog posts"),fh.forEach(t),dh.forEach(t),ze.forEach(t),eo=u(e),Js=l(e,"P",{});var _h=p(Js);Lr=n(_h,"Papers:"),_h.forEach(t),so=u(e),Z=l(e,"UL",{});var ot=p(Z);Za=l(ot,"LI",{});var mh=p(Za);Ds=l(mh,"A",{href:!0,rel:!0});var gh=p(Ds);Ur=n(gh,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),gh.forEach(t),mh.forEach(t),Mr=u(ot),Ta=l(ot,"LI",{});var wh=p(Ta);Os=l(wh,"A",{href:!0,rel:!0});var vh=p(Os);Fr=n(vh,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),vh.forEach(t),wh.forEach(t),Gr=u(ot),Na=l(ot,"LI",{});var jh=p(Na);zs=l(jh,"A",{href:!0,rel:!0});var yh=p(zs);Hr=n(yh,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),yh.forEach(t),jh.forEach(t),ot.forEach(t),to=u(e),T=l(e,"P",{});var lt=p(T);Wr=n(lt,"Finally, please, remember that, \u{1F917} "),La=l(lt,"CODE",{});var bh=p(La);Br=n(bh,"Accelerate"),bh.forEach(t),Vr=n(lt,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Ps=l(lt,"A",{href:!0,rel:!0});var Eh=p(Ps);Yr=n(Eh,"DeepSpeed GitHub"),Eh.forEach(t),Jr=n(lt,"."),lt.forEach(t),this.h()},h(){h(L,"name","hf:doc:metadata"),h(L,"content",JSON.stringify(xh)),h(ne,"id","deepspeed"),h(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ne,"href","#deepspeed"),h(U,"class","relative group"),h(xe,"href","https://github.com/microsoft/DeepSpeed"),h(xe,"rel","nofollow"),h(Ce,"href","https://arxiv.org/abs/1910.02054"),h(Ce,"rel","nofollow"),h(Re,"href","https://arxiv.org/abs/2101.06840"),h(Re,"rel","nofollow"),h(Ae,"href","https://arxiv.org/abs/2104.07857"),h(Ae,"rel","nofollow"),h(Ie,"href","https://github.com/microsoft/DeepSpeed"),h(Ie,"rel","nofollow"),h(pe,"id","what-is-integrated"),h(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pe,"href","#what-is-integrated"),h(G,"class","relative group"),h(Ne,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),h(Ne,"rel","nofollow"),Dh(Is.src,Qr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/parallelism-zero.png")||h(Is,"src",Qr),h(Is,"alt","ZeRO Data Parallelism"),h(Le,"href","https://www.microsoft.com/en-us/research/blog/zero-deepspeed-new-system-optimizations-enable-training-models-with-over-100-billion-parameters/"),h(Le,"rel","nofollow"),h(Ls,"href","#deepspeed-zero-inference"),h(_e,"id","how-it-works"),h(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_e,"href","#how-it-works"),h(H,"class","relative group"),h(Fe,"href","https://github.com/microsoft/DeepSpeed#installation"),h(Fe,"rel","nofollow"),h(me,"id","accelerate-deepspeed-plugin"),h(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(me,"href","#accelerate-deepspeed-plugin"),h(B,"class","relative group"),h(ve,"id","deepspeed-config-file"),h(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ve,"href","#deepspeed-config-file"),h(V,"class","relative group"),h(ps,"href","https://deepspeed.readthedocs.io/en/latest/optimizers.html"),h(ps,"rel","nofollow"),h(is,"href","https://deepspeed.readthedocs.io/en/latest/schedulers.html"),h(is,"rel","nofollow"),h(qe,"id","saving-and-loading"),h(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qe,"href","#saving-and-loading"),h(K,"class","relative group"),h(Se,"id","zero-inference"),h(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Se,"href","#zero-inference"),h(ee,"class","relative group"),h(ke,"id","few-caveats-to-be-aware-of"),h(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ke,"href","#few-caveats-to-be-aware-of"),h(se,"class","relative group"),h(De,"id","deepspeed-resources"),h(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(De,"href","#deepspeed-resources"),h(te,"class","relative group"),h(Ys,"href","../package_reference/deepspeed"),h(qs,"href","https://github.com/microsoft/deepspeed"),h(qs,"rel","nofollow"),h($s,"href","https://www.deepspeed.ai/getting-started/"),h($s,"rel","nofollow"),h(Ss,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(Ss,"rel","nofollow"),h(ks,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(ks,"rel","nofollow"),h(Ds,"href","https://arxiv.org/abs/1910.02054"),h(Ds,"rel","nofollow"),h(Os,"href","https://arxiv.org/abs/2101.06840"),h(Os,"rel","nofollow"),h(zs,"href","https://arxiv.org/abs/2104.07857"),h(zs,"rel","nofollow"),h(Ps,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Ps,"rel","nofollow")},m(e,i){s(document.head,L),r(e,Ga,i),r(e,U,i),s(U,ne),s(ne,pt),_(Pe,pt,null),s(U,Io),s(U,it),s(it,Zo),r(e,Ha,i),r(e,M,i),s(M,xe),s(xe,To),s(M,No),s(M,Ce),s(Ce,Lo),s(M,Uo),r(e,Wa,i),r(e,b,i),s(b,rt),s(rt,Mo),s(b,Fo),s(b,ct),s(ct,Go),s(b,Ho),s(b,ut),s(ut,Wo),s(b,Bo),s(b,ht),s(ht,Vo),s(b,Yo),s(b,dt),s(dt,Jo),s(b,Ko),s(b,ft),s(ft,Qo),r(e,Ba,i),r(e,R,i),s(R,Xo),s(R,Re),s(Re,el),s(R,sl),s(R,Ae),s(Ae,tl),s(R,al),r(e,Va,i),r(e,xs,i),s(xs,nl),r(e,Ya,i),r(e,Cs,i),s(Cs,ol),r(e,Ja,i),r(e,oe,i),s(oe,ll),s(oe,Ie),s(Ie,pl),s(oe,il),r(e,Ka,i),r(e,le,i),s(le,F),s(F,rl),s(F,_t),s(_t,cl),s(F,ul),s(F,mt),s(mt,hl),s(F,dl),s(le,fl),s(le,Ze),s(Ze,_l),s(Ze,gt),s(gt,ml),s(Ze,gl),r(e,Qa,i),r(e,G,i),s(G,pe),s(pe,wt),_(Te,wt,null),s(G,wl),s(G,vt),s(vt,vl),r(e,Xa,i),r(e,Rs,i),s(Rs,jl),r(e,en,i),r(e,As,i),s(As,ie),s(ie,yl),s(ie,Ne),s(Ne,bl),s(ie,El),s(ie,Is),r(e,sn,i),r(e,re,i),s(re,ql),s(re,Le),s(Le,$l),s(re,Sl),r(e,tn,i),r(e,ce,i),s(ce,kl),s(ce,jt),s(jt,Dl),s(ce,Ol),r(e,an,i),r(e,ue,i),s(ue,zl),s(ue,yt),s(yt,Pl),s(ue,xl),r(e,nn,i),r(e,he,i),s(he,Cl),s(he,bt),s(bt,Rl),s(he,Al),r(e,on,i),r(e,de,i),s(de,Il),s(de,Et),s(Et,Zl),s(de,Tl),r(e,ln,i),r(e,fe,i),s(fe,Nl),s(fe,qt),s(qt,Ll),s(fe,Ul),r(e,pn,i),r(e,Zs,i),s(Zs,Ml),r(e,rn,i),r(e,Ts,i),s(Ts,Fl),r(e,cn,i),r(e,Ns,i),s(Ns,Ue),s(Ue,Gl),s(Ue,Ls),s(Ls,Hl),s(Ue,Wl),r(e,un,i),r(e,H,i),s(H,_e),s(_e,$t),_(Me,$t,null),s(H,Bl),s(H,St),s(St,Vl),r(e,hn,i),r(e,W,i),s(W,kt),s(kt,Yl),s(W,Jl),s(W,Fe),s(Fe,Kl),s(W,Ql),r(e,dn,i),r(e,A,i),s(A,Xl),s(A,Dt),s(Dt,ep),s(A,sp),s(A,Ot),s(Ot,tp),s(A,ap),r(e,fn,i),r(e,B,i),s(B,me),s(me,zt),_(Ge,zt,null),s(B,np),s(B,Pt),s(Pt,op),r(e,_n,i),_(He,e,i),r(e,mn,i),r(e,Us,i),s(Us,lp),r(e,gn,i),_(We,e,i),r(e,wn,i),r(e,ge,i),s(ge,pp),s(ge,xt),s(xt,ip),s(ge,rp),r(e,vn,i),r(e,Ms,i),s(Ms,Ct),s(Ct,cp),r(e,jn,i),_(Be,e,i),r(e,yn,i),_(Ve,e,i),r(e,bn,i),r(e,Fs,i),s(Fs,Rt),s(Rt,up),r(e,En,i),_(Ye,e,i),r(e,qn,i),_(Je,e,i),r(e,$n,i),r(e,we,i),s(we,hp),s(we,At),s(At,dp),s(we,fp),r(e,Sn,i),_(Ke,e,i),r(e,kn,i),r(e,Gs,i),s(Gs,_p),r(e,Dn,i),r(e,V,i),s(V,ve),s(ve,It),_(Qe,It,null),s(V,mp),s(V,Zt),s(Zt,gp),r(e,On,i),_(Xe,e,i),r(e,zn,i),r(e,Hs,i),s(Hs,wp),r(e,Pn,i),_(es,e,i),r(e,xn,i),r(e,je,i),s(je,vp),s(je,Tt),s(Tt,jp),s(je,yp),r(e,Cn,i),r(e,Ws,i),s(Ws,Nt),s(Nt,bp),r(e,Rn,i),_(ss,e,i),r(e,An,i),r(e,ye,i),s(ye,Ep),s(ye,Lt),s(Lt,qp),s(ye,$p),r(e,In,i),_(ts,e,i),r(e,Zn,i),_(as,e,i),r(e,Tn,i),r(e,Bs,i),s(Bs,Ut),s(Ut,Sp),r(e,Nn,i),_(ns,e,i),r(e,Ln,i),r(e,be,i),s(be,kp),s(be,Mt),s(Mt,Dp),s(be,Op),r(e,Un,i),_(os,e,i),r(e,Mn,i),_(ls,e,i),r(e,Fn,i),r(e,Vs,i),s(Vs,Ft),s(Ft,zp),r(e,Gn,i),r(e,Ee,i),s(Ee,E),s(E,Y),s(Y,Pp),s(Y,ps),s(ps,xp),s(Y,Cp),s(Y,is),s(is,Rp),s(Y,Ap),s(E,Ip),s(E,q),s(q,Zp),s(q,Gt),s(Gt,Tp),s(q,Np),s(q,Ht),s(Ht,Lp),s(q,Up),s(q,Wt),s(Wt,Mp),s(q,Fp),s(q,Bt),s(Bt,Gp),s(q,Hp),s(q,Vt),s(Vt,Wp),s(q,Bp),s(E,Vp),_(rs,E,null),s(E,Yp),s(E,k),s(k,Jp),s(k,Yt),s(Yt,Kp),s(k,Qp),s(k,Jt),s(Jt,Xp),s(k,ei),s(k,Kt),s(Kt,si),s(k,ti),s(k,Qt),s(Qt,ai),s(k,ni),s(E,oi),s(E,J),s(J,li),s(J,Xt),s(Xt,pi),s(J,ii),s(J,ea),s(ea,ri),s(J,ci),s(E,ui),s(E,cs),s(cs,hi),s(cs,sa),s(sa,di),s(cs,fi),s(Ee,_i),s(Ee,ta),s(ta,$),s($,mi),s($,aa),s(aa,gi),s($,wi),s($,na),s(na,vi),s($,ji),s($,oa),s(oa,yi),s($,bi),s($,la),s(la,Ei),s($,qi),s($,pa),s(pa,$i),s($,Si),r(e,Hn,i),r(e,K,i),s(K,qe),s(qe,ia),_(us,ia,null),s(K,ki),s(K,ra),s(ra,Di),r(e,Wn,i),r(e,$e,i),s($e,ca),s(ca,ua),s(ua,Oi),s($e,zi),s($e,v),s(v,hs),s(hs,Pi),s(hs,ha),s(ha,xi),s(hs,Ci),s(v,Ri),s(v,S),s(S,Ai),s(S,da),s(da,Ii),s(S,Zi),s(S,fa),s(fa,Ti),s(S,Ni),s(S,_a),s(_a,Li),s(S,Ui),s(S,ma),s(ma,Mi),s(S,Fi),s(S,ga),s(ga,Gi),s(S,Hi),s(v,Wi),_(ds,v,null),s(v,Bi),s(v,Q),s(Q,Vi),s(Q,wa),s(wa,Yi),s(Q,Ji),s(Q,va),s(va,Ki),s(Q,Qi),s(v,Xi),_(fs,v,null),s(v,er),s(v,X),s(X,sr),s(X,ja),s(ja,tr),s(X,ar),s(X,nr),s(X,or),s(v,lr),_(_s,v,null),s(v,pr),s(v,ya),s(ya,ir),s(v,rr),_(ms,v,null),s(v,cr),s(v,gs),s(gs,ur),s(gs,ba),s(ba,hr),s(gs,dr),s(v,fr),_(ws,v,null),s(v,_r),s(v,Ea),s(Ea,mr),r(e,Bn,i),r(e,ee,i),s(ee,Se),s(Se,qa),_(vs,qa,null),s(ee,gr),s(ee,$a),s($a,wr),r(e,Vn,i),_(js,e,i),r(e,Yn,i),r(e,se,i),s(se,ke),s(ke,Sa),_(ys,Sa,null),s(se,vr),s(se,ka),s(ka,jr),r(e,Jn,i),r(e,I,i),s(I,Da),s(Da,yr),s(I,br),s(I,bs),s(bs,Er),s(bs,Oa),s(Oa,qr),s(bs,$r),s(I,Sr),s(I,za),s(za,kr),r(e,Kn,i),r(e,te,i),s(te,De),s(De,Pa),_(Es,Pa,null),s(te,Dr),s(te,xa),s(xa,Or),r(e,Qn,i),r(e,Oe,i),s(Oe,zr),s(Oe,Ys),s(Ys,Pr),s(Oe,xr),r(e,Xn,i),r(e,D,i),s(D,Ca),s(Ca,qs),s(qs,Cr),s(D,Rr),s(D,Ra),s(Ra,$s),s($s,Ar),s(D,Ir),s(D,Aa),s(Aa,Ss),s(Ss,Zr),s(D,Tr),s(D,Ia),s(Ia,ks),s(ks,Nr),r(e,eo,i),r(e,Js,i),s(Js,Lr),r(e,so,i),r(e,Z,i),s(Z,Za),s(Za,Ds),s(Ds,Ur),s(Z,Mr),s(Z,Ta),s(Ta,Os),s(Os,Fr),s(Z,Gr),s(Z,Na),s(Na,zs),s(zs,Hr),r(e,to,i),r(e,T,i),s(T,Wr),s(T,La),s(La,Br),s(T,Vr),s(T,Ps),s(Ps,Yr),s(T,Jr),ao=!0},p:Oh,i(e){ao||(m(Pe.$$.fragment,e),m(Te.$$.fragment,e),m(Me.$$.fragment,e),m(Ge.$$.fragment,e),m(He.$$.fragment,e),m(We.$$.fragment,e),m(Be.$$.fragment,e),m(Ve.$$.fragment,e),m(Ye.$$.fragment,e),m(Je.$$.fragment,e),m(Ke.$$.fragment,e),m(Qe.$$.fragment,e),m(Xe.$$.fragment,e),m(es.$$.fragment,e),m(ss.$$.fragment,e),m(ts.$$.fragment,e),m(as.$$.fragment,e),m(ns.$$.fragment,e),m(os.$$.fragment,e),m(ls.$$.fragment,e),m(rs.$$.fragment,e),m(us.$$.fragment,e),m(ds.$$.fragment,e),m(fs.$$.fragment,e),m(_s.$$.fragment,e),m(ms.$$.fragment,e),m(ws.$$.fragment,e),m(vs.$$.fragment,e),m(js.$$.fragment,e),m(ys.$$.fragment,e),m(Es.$$.fragment,e),ao=!0)},o(e){g(Pe.$$.fragment,e),g(Te.$$.fragment,e),g(Me.$$.fragment,e),g(Ge.$$.fragment,e),g(He.$$.fragment,e),g(We.$$.fragment,e),g(Be.$$.fragment,e),g(Ve.$$.fragment,e),g(Ye.$$.fragment,e),g(Je.$$.fragment,e),g(Ke.$$.fragment,e),g(Qe.$$.fragment,e),g(Xe.$$.fragment,e),g(es.$$.fragment,e),g(ss.$$.fragment,e),g(ts.$$.fragment,e),g(as.$$.fragment,e),g(ns.$$.fragment,e),g(os.$$.fragment,e),g(ls.$$.fragment,e),g(rs.$$.fragment,e),g(us.$$.fragment,e),g(ds.$$.fragment,e),g(fs.$$.fragment,e),g(_s.$$.fragment,e),g(ms.$$.fragment,e),g(ws.$$.fragment,e),g(vs.$$.fragment,e),g(js.$$.fragment,e),g(ys.$$.fragment,e),g(Es.$$.fragment,e),ao=!1},d(e){t(L),e&&t(Ga),e&&t(U),w(Pe),e&&t(Ha),e&&t(M),e&&t(Wa),e&&t(b),e&&t(Ba),e&&t(R),e&&t(Va),e&&t(xs),e&&t(Ya),e&&t(Cs),e&&t(Ja),e&&t(oe),e&&t(Ka),e&&t(le),e&&t(Qa),e&&t(G),w(Te),e&&t(Xa),e&&t(Rs),e&&t(en),e&&t(As),e&&t(sn),e&&t(re),e&&t(tn),e&&t(ce),e&&t(an),e&&t(ue),e&&t(nn),e&&t(he),e&&t(on),e&&t(de),e&&t(ln),e&&t(fe),e&&t(pn),e&&t(Zs),e&&t(rn),e&&t(Ts),e&&t(cn),e&&t(Ns),e&&t(un),e&&t(H),w(Me),e&&t(hn),e&&t(W),e&&t(dn),e&&t(A),e&&t(fn),e&&t(B),w(Ge),e&&t(_n),w(He,e),e&&t(mn),e&&t(Us),e&&t(gn),w(We,e),e&&t(wn),e&&t(ge),e&&t(vn),e&&t(Ms),e&&t(jn),w(Be,e),e&&t(yn),w(Ve,e),e&&t(bn),e&&t(Fs),e&&t(En),w(Ye,e),e&&t(qn),w(Je,e),e&&t($n),e&&t(we),e&&t(Sn),w(Ke,e),e&&t(kn),e&&t(Gs),e&&t(Dn),e&&t(V),w(Qe),e&&t(On),w(Xe,e),e&&t(zn),e&&t(Hs),e&&t(Pn),w(es,e),e&&t(xn),e&&t(je),e&&t(Cn),e&&t(Ws),e&&t(Rn),w(ss,e),e&&t(An),e&&t(ye),e&&t(In),w(ts,e),e&&t(Zn),w(as,e),e&&t(Tn),e&&t(Bs),e&&t(Nn),w(ns,e),e&&t(Ln),e&&t(be),e&&t(Un),w(os,e),e&&t(Mn),w(ls,e),e&&t(Fn),e&&t(Vs),e&&t(Gn),e&&t(Ee),w(rs),e&&t(Hn),e&&t(K),w(us),e&&t(Wn),e&&t($e),w(ds),w(fs),w(_s),w(ms),w(ws),e&&t(Bn),e&&t(ee),w(vs),e&&t(Vn),w(js,e),e&&t(Yn),e&&t(se),w(ys),e&&t(Jn),e&&t(I),e&&t(Kn),e&&t(te),w(Es),e&&t(Qn),e&&t(Oe),e&&t(Xn),e&&t(D),e&&t(eo),e&&t(Js),e&&t(so),e&&t(Z),e&&t(to),e&&t(T)}}}const xh={local:"deepspeed",sections:[{local:"what-is-integrated",title:"What is integrated?"},{local:"how-it-works",sections:[{local:"accelerate-deepspeed-plugin",title:"Accelerate DeepSpeed Plugin"},{local:"deepspeed-config-file",title:"DeepSpeed Config File"}],title:"How it works?"},{local:"saving-and-loading",title:"Saving and loading"},{local:"zero-inference",title:"ZeRO Inference"},{local:"few-caveats-to-be-aware-of",title:"Few caveats to be aware of "},{local:"deepspeed-resources",title:"DeepSpeed Resources"}],title:"DeepSpeed "};function Ch(Kr){return zh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zh extends qh{constructor(L){super();$h(this,L,Ch,Ph,Sh,{})}}export{Zh as default,xh as metadata};
