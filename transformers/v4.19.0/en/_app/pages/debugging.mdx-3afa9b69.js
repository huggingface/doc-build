import{S as Vr,i as Xr,s as Zr,e as r,k as u,w as f,t,M as eo,c as o,d as s,m as c,a as i,x as m,h as n,b as y,F as a,g as p,y as b,q as w,o as j,B as _,v as so}from"../chunks/vendor-6b77c823.js";import{T as Al}from"../chunks/Tip-39098574.js";import{I as it}from"../chunks/IconCopyLink-7a11ce68.js";import{C as P}from"../chunks/CodeBlock-3a8b25a8.js";function ao(Y){let h,E;return{c(){h=r("p"),E=t("This feature is currently available for PyTorch-only.")},l(d){h=o(d,"P",{});var v=i(h);E=n(v,"This feature is currently available for PyTorch-only."),v.forEach(s)},m(d,v){p(d,h,v),a(h,E)},d(d){d&&s(h)}}}function to(Y){let h,E,d,v,C;return{c(){h=r("p"),E=t("For multi-GPU training it requires DDP ("),d=r("code"),v=t("torch.distributed.launch"),C=t(").")},l($){h=o($,"P",{});var D=i(h);E=n(D,"For multi-GPU training it requires DDP ("),d=o(D,"CODE",{});var F=i(d);v=n(F,"torch.distributed.launch"),F.forEach(s),C=n(D,")."),D.forEach(s)},m($,D){p($,h,D),a(h,E),a(h,d),a(d,v),a(h,C)},d($){$&&s(h)}}}function no(Y){let h,E,d,v,C;return{c(){h=r("p"),E=t("This feature can be used with any "),d=r("code"),v=t("nn.Module"),C=t("-based model.")},l($){h=o($,"P",{});var D=i(h);E=n(D,"This feature can be used with any "),d=o(D,"CODE",{});var F=i(d);v=n(F,"nn.Module"),F.forEach(s),C=n(D,"-based model."),D.forEach(s)},m($,D){p($,h,D),a(h,E),a(h,d),a(d,v),a(h,C)},d($){$&&s(h)}}}function lo(Y){let h,E,d,v,C,$,D,F,ut,zs,I,B,Xe,ce,ct,Ze,ht,Ws,K,dt,es,ft,mt,Js,he,Qs,xe,bt,Vs,de,Xs,Te,wt,Zs,Le,jt,ea,Ae,_t,sa,z,vt,ss,yt,gt,aa,fe,ta,Ne,$t,na,M,W,as,me,Dt,ts,Et,la,J,ra,Q,oa,V,pa,T,kt,ns,Ot,Pt,ls,Ct,xt,rs,Tt,Lt,ia,X,At,Ue,Nt,Ut,ua,be,ca,S,Gt,os,Ft,St,Ge,Rt,It,ha,Fe,Mt,da,we,fa,x,Se,qt,Ht,ps,Yt,Bt,is,Kt,zt,us,Wt,Jt,ma,je,ba,Re,Qt,wa,g,Vt,cs,Xt,Zt,hs,en,sn,ds,an,tn,fs,nn,ln,ms,rn,on,bs,pn,un,ws,cn,hn,ja,Z,dn,js,fn,mn,_a,Ie,bn,va,_e,ya,L,wn,_s,jn,_n,vs,vn,yn,ys,gn,$n,ga,Me,Dn,$a,ve,Da,k,En,gs,kn,On,$s,Pn,Cn,Ds,xn,Tn,Es,Ln,An,ks,Nn,Un,Ea,A,Gn,Os,Fn,Sn,Ps,Rn,In,Cs,Mn,qn,ka,qe,Hn,Oa,ee,Yn,xs,Bn,Kn,Pa,ye,Ca,se,zn,Ts,Wn,Jn,xa,ae,Qn,Ls,Vn,Xn,Ta,N,Zn,As,el,sl,Ns,al,tl,Us,nl,ll,La,ge,Aa,R,rl,Gs,ol,pl,Fs,il,ul,Na,$e,Ua,U,cl,Ss,hl,dl,Rs,fl,ml,Is,bl,wl,Ga,te,jl,Ms,_l,vl,Fa,He,yl,Sa,De,Ra,q,ne,qs,Ee,gl,Hs,$l,Ia,Ye,Dl,Ma,le,El,Ys,kl,Ol,qa,ke,Ha,Be,Pl,Ya,Ke,Cl,Ba,ze,xl,Ka,Oe,za,We,Tl,Wa,Je,Ll,Ja,Pe,Qa;return $=new it({}),ce=new it({}),he=new P({props:{code:"wget https://raw.githubusercontent.com/huggingface/transformers/main/scripts/distributed/torch-distributed-gpu-test.py",highlighted:"wget https://raw.githubusercontent.com/huggingface/transformers/main/scripts/distributed/torch-distributed-gpu-test.py"}}),de=new P({props:{code:"python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py",highlighted:"python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py"}}),fe=new P({props:{code:"NCCL_DEBUG=INFO python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py",highlighted:"NCCL_DEBUG=INFO python -m torch.distributed.run --nproc_per_node 2 --nnodes 1 torch-distributed-gpu-test.py"}}),me=new it({}),J=new Al({props:{$$slots:{default:[ao]},$$scope:{ctx:Y}}}),Q=new Al({props:{$$slots:{default:[to]},$$scope:{ctx:Y}}}),V=new Al({props:{$$slots:{default:[no]},$$scope:{ctx:Y}}}),be=new P({props:{code:"--debug underflow_overflow",highlighted:"--debug underflow_overflow"}}),we=new P({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model)`}}),je=new P({props:{code:`Detected inf/nan during batch_number=0
Last 21 forward frames:
abs min  abs max  metadata
                  encoder.block.1.layer.1.DenseReluDense.dropout Dropout
0.00e+00 2.57e+02 input[0]
0.00e+00 2.85e+02 output
[...]
                  encoder.block.2.layer.0 T5LayerSelfAttention
6.78e-04 3.15e+03 input[0]
2.65e-04 3.42e+03 output[0]
             None output[1]
2.25e-01 1.00e+04 output[2]
                  encoder.block.2.layer.1.layer_norm T5LayerNorm
8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output
                  encoder.block.2.layer.1.DenseReluDense.wi_0 Linear
2.17e-07 4.50e+00 weight
1.79e-06 4.65e+00 input[0]
2.68e-06 3.70e+01 output
                  encoder.block.2.layer.1.DenseReluDense.wi_1 Linear
8.08e-07 2.66e+01 weight
1.79e-06 4.65e+00 input[0]
1.27e-04 2.37e+02 output
                  encoder.block.2.layer.1.DenseReluDense.dropout Dropout
0.00e+00 8.76e+03 input[0]
0.00e+00 9.74e+03 output
                  encoder.block.2.layer.1.DenseReluDense.wo Linear
1.01e-06 6.44e+00 weight
0.00e+00 9.74e+03 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.DenseReluDense T5DenseGatedGeluDense
1.79e-06 4.65e+00 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.dropout Dropout
3.18e-04 6.27e+04 input[0]
0.00e+00      inf output`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
<span class="hljs-attribute">Last</span> <span class="hljs-number">21</span> forward frames:
<span class="hljs-attribute">abs</span> min  abs max  metadata
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">1</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.dropout Dropout
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">2</span>.<span class="hljs-number">57</span>e+<span class="hljs-number">02</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">2</span>.<span class="hljs-number">85</span>e+<span class="hljs-number">02</span> output<span class="hljs-meta">
[...]</span>
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">0</span> T5LayerSelfAttention
<span class="hljs-attribute">6</span>.<span class="hljs-number">78</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">15</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> output[<span class="hljs-number">0</span>]
             <span class="hljs-attribute">None</span> output[<span class="hljs-number">1</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">25</span>e-<span class="hljs-number">01</span> <span class="hljs-number">1</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">04</span> output[<span class="hljs-number">2</span>]
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.layer_norm T5LayerNorm
<span class="hljs-attribute">8</span>.<span class="hljs-number">69</span>e-<span class="hljs-number">02</span> <span class="hljs-number">4</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">01</span> weight
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_0 Linear
<span class="hljs-attribute">2</span>.<span class="hljs-number">17</span>e-<span class="hljs-number">07</span> <span class="hljs-number">4</span>.<span class="hljs-number">50</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">68</span>e-<span class="hljs-number">06</span> <span class="hljs-number">3</span>.<span class="hljs-number">70</span>e+<span class="hljs-number">01</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_1 Linear
<span class="hljs-attribute">8</span>.<span class="hljs-number">08</span>e-<span class="hljs-number">07</span> <span class="hljs-number">2</span>.<span class="hljs-number">66</span>e+<span class="hljs-number">01</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">27</span>e-<span class="hljs-number">04</span> <span class="hljs-number">2</span>.<span class="hljs-number">37</span>e+<span class="hljs-number">02</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.dropout Dropout
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">8</span>.<span class="hljs-number">76</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wo Linear
<span class="hljs-attribute">1</span>.<span class="hljs-number">01</span>e-<span class="hljs-number">06</span> <span class="hljs-number">6</span>.<span class="hljs-number">44</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense T5DenseGatedGeluDense
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.dropout Dropout
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),_e=new P({props:{code:`                  encoder.block.2.layer.1.layer_norm T5LayerNorm
8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output`,highlighted:`                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.layer_norm T5LayerNorm
<span class="hljs-attribute">8</span>.<span class="hljs-number">69</span>e-<span class="hljs-number">02</span> <span class="hljs-number">4</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">01</span> weight
<span class="hljs-attribute">2</span>.<span class="hljs-number">65</span>e-<span class="hljs-number">04</span> <span class="hljs-number">3</span>.<span class="hljs-number">42</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> output`}}),ve=new P({props:{code:`Detected inf/nan during batch_number=0
Last 21 forward frames:
abs min  abs max  metadata
[...]
                  encoder.block.2.layer.1.DenseReluDense.wi_0 Linear
2.17e-07 4.50e+00 weight
1.79e-06 4.65e+00 input[0]
2.68e-06 3.70e+01 output
                  encoder.block.2.layer.1.DenseReluDense.wi_1 Linear
8.08e-07 2.66e+01 weight
1.79e-06 4.65e+00 input[0]
1.27e-04 2.37e+02 output
                  encoder.block.2.layer.1.DenseReluDense.wo Linear
1.01e-06 6.44e+00 weight
0.00e+00 9.74e+03 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.DenseReluDense T5DenseGatedGeluDense
1.79e-06 4.65e+00 input[0]
3.18e-04 6.27e+04 output
                  encoder.block.2.layer.1.dropout Dropout
3.18e-04 6.27e+04 input[0]
0.00e+00      inf output`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
<span class="hljs-attribute">Last</span> <span class="hljs-number">21</span> forward frames:
<span class="hljs-attribute">abs</span> min  abs max  metadata<span class="hljs-meta">
[...]</span>
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_0 Linear
<span class="hljs-attribute">2</span>.<span class="hljs-number">17</span>e-<span class="hljs-number">07</span> <span class="hljs-number">4</span>.<span class="hljs-number">50</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">2</span>.<span class="hljs-number">68</span>e-<span class="hljs-number">06</span> <span class="hljs-number">3</span>.<span class="hljs-number">70</span>e+<span class="hljs-number">01</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wi_1 Linear
<span class="hljs-attribute">8</span>.<span class="hljs-number">08</span>e-<span class="hljs-number">07</span> <span class="hljs-number">2</span>.<span class="hljs-number">66</span>e+<span class="hljs-number">01</span> weight
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">1</span>.<span class="hljs-number">27</span>e-<span class="hljs-number">04</span> <span class="hljs-number">2</span>.<span class="hljs-number">37</span>e+<span class="hljs-number">02</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense.wo Linear
<span class="hljs-attribute">1</span>.<span class="hljs-number">01</span>e-<span class="hljs-number">06</span> <span class="hljs-number">6</span>.<span class="hljs-number">44</span>e+<span class="hljs-number">00</span> weight
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span> <span class="hljs-number">9</span>.<span class="hljs-number">74</span>e+<span class="hljs-number">03</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.DenseReluDense T5DenseGatedGeluDense
<span class="hljs-attribute">1</span>.<span class="hljs-number">79</span>e-<span class="hljs-number">06</span> <span class="hljs-number">4</span>.<span class="hljs-number">65</span>e+<span class="hljs-number">00</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> output
                  <span class="hljs-attribute">encoder</span>.block.<span class="hljs-number">2</span>.layer.<span class="hljs-number">1</span>.dropout Dropout
<span class="hljs-attribute">3</span>.<span class="hljs-number">18</span>e-<span class="hljs-number">04</span> <span class="hljs-number">6</span>.<span class="hljs-number">27</span>e+<span class="hljs-number">04</span> input[<span class="hljs-number">0</span>]
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),ye=new P({props:{code:`class T5DenseGatedGeluDense(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.wi_0 = nn.Linear(config.d_model, config.d_ff, bias=False)
        self.wi_1 = nn.Linear(config.d_model, config.d_ff, bias=False)
        self.wo = nn.Linear(config.d_ff, config.d_model, bias=False)
        self.dropout = nn.Dropout(config.dropout_rate)
        self.gelu_act = ACT2FN["gelu_new"]

    def forward(self, hidden_states):
        hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
        hidden_linear = self.wi_1(hidden_states)
        hidden_states = hidden_gelu * hidden_linear
        hidden_states = self.dropout(hidden_states)
        hidden_states = self.wo(hidden_states)
        return hidden_states`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5DenseGatedGeluDense</span>(nn.Module):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__()
        self.wi_0 = nn.Linear(config.d_model, config.d_ff, bias=<span class="hljs-literal">False</span>)
        self.wi_1 = nn.Linear(config.d_model, config.d_ff, bias=<span class="hljs-literal">False</span>)
        self.wo = nn.Linear(config.d_ff, config.d_model, bias=<span class="hljs-literal">False</span>)
        self.dropout = nn.Dropout(config.dropout_rate)
        self.gelu_act = ACT2FN[<span class="hljs-string">&quot;gelu_new&quot;</span>]

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
        hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
        hidden_linear = self.wi_1(hidden_states)
        hidden_states = hidden_gelu * hidden_linear
        hidden_states = self.dropout(hidden_states)
        hidden_states = self.wo(hidden_states)
        <span class="hljs-keyword">return</span> hidden_states`}}),ge=new P({props:{code:`def _forward(self, hidden_states):
    hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
    hidden_linear = self.wi_1(hidden_states)
    hidden_states = hidden_gelu * hidden_linear
    hidden_states = self.dropout(hidden_states)
    hidden_states = self.wo(hidden_states)
    return hidden_states


import torch


def forward(self, hidden_states):
    if torch.is_autocast_enabled():
        with torch.cuda.amp.autocast(enabled=False):
            return self._forward(hidden_states)
    else:
        return self._forward(hidden_states)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, hidden_states</span>):
    hidden_gelu = self.gelu_act(self.wi_0(hidden_states))
    hidden_linear = self.wi_1(hidden_states)
    hidden_states = hidden_gelu * hidden_linear
    hidden_states = self.dropout(hidden_states)
    hidden_states = self.wo(hidden_states)
    <span class="hljs-keyword">return</span> hidden_states


<span class="hljs-keyword">import</span> torch


<span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
    <span class="hljs-keyword">if</span> torch.is_autocast_enabled():
        <span class="hljs-keyword">with</span> torch.cuda.amp.autocast(enabled=<span class="hljs-literal">False</span>):
            <span class="hljs-keyword">return</span> self._forward(hidden_states)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> self._forward(hidden_states)`}}),$e=new P({props:{code:`from debug_utils import detect_overflow


class T5LayerFF(nn.Module):
    [...]

    def forward(self, hidden_states):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, "after layer_norm")
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, "after DenseReluDense")
        return hidden_states + self.dropout(forwarded_states)`,highlighted:`<span class="hljs-keyword">from</span> debug_utils <span class="hljs-keyword">import</span> detect_overflow


<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5LayerFF</span>(nn.Module):
    [...]

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after layer_norm&quot;</span>)
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after DenseReluDense&quot;</span>)
        <span class="hljs-keyword">return</span> hidden_states + self.dropout(forwarded_states)`}}),De=new P({props:{code:`from .debug_utils import DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=100)`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow

debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=<span class="hljs-number">100</span>)`}}),Ee=new it({}),ke=new P({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3])",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>])'}}),Oe=new P({props:{code:`                  *** Starting batch number=1 ***
abs min  abs max  metadata
                  shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.47e+04 input[0]
5.36e-05 7.92e+02 output
[...]
                  decoder.dropout Dropout
1.60e-07 2.27e+01 input[0]
0.00e+00 2.52e+01 output
                  decoder T5Stack
     not a tensor output
                  lm_head Linear
1.01e-06 7.92e+02 weight
0.00e+00 1.11e+00 input[0]
6.06e-02 8.39e+01 output
                   T5ForConditionalGeneration
     not a tensor output

                  *** Starting batch number=3 ***
abs min  abs max  metadata
                  shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.78e+04 input[0]
5.36e-05 7.92e+02 output
[...]`,highlighted:`                  *** Starting batch number=1 ***
abs min  abs max  metadata
                  shared Embedding
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 2.47e<span class="hljs-string">+04</span> input[0]
5.36e<span class="hljs-string">-05</span> 7.92e<span class="hljs-string">+02</span> output
[...]
                  decoder.dropout Dropout
1.60e<span class="hljs-string">-07</span> 2.27e<span class="hljs-string">+01</span> input[0]
0.00e<span class="hljs-string">+00</span> 2.52e<span class="hljs-string">+01</span> output
                  decoder T5Stack
     not a tensor output
                  lm_head Linear
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 1.11e<span class="hljs-string">+00</span> input[0]
6.06e<span class="hljs-string">-02</span> 8.39e<span class="hljs-string">+01</span> output
                   T5ForConditionalGeneration
     not a tensor output

                  *** Starting batch number=3 ***
abs min  abs max  metadata
                  shared Embedding
1.01e<span class="hljs-string">-06</span> 7.92e<span class="hljs-string">+02</span> weight
0.00e<span class="hljs-string">+00</span> 2.78e<span class="hljs-string">+04</span> input[0]
5.36e<span class="hljs-string">-05</span> 7.92e<span class="hljs-string">+02</span> output
[...]`}}),Pe=new P({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1, 3], abort_after_batch_num=3)",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>], abort_after_batch_num=<span class="hljs-number">3</span>)'}}),{c(){h=r("meta"),E=u(),d=r("h1"),v=r("a"),C=r("span"),f($.$$.fragment),D=u(),F=r("span"),ut=t("Debugging"),zs=u(),I=r("h2"),B=r("a"),Xe=r("span"),f(ce.$$.fragment),ct=u(),Ze=r("span"),ht=t("Multi-GPU Network Issues Debug"),Ws=u(),K=r("p"),dt=t("When training or inferencing with "),es=r("code"),ft=t("DistributedDataParallel"),mt=t(" and multiple GPU, if you run into issue of inter-communication between processes and/or nodes, you can use the following script to diagnose network issues."),Js=u(),f(he.$$.fragment),Qs=u(),xe=r("p"),bt=t("For example to test how 2 GPUs interact do:"),Vs=u(),f(de.$$.fragment),Xs=u(),Te=r("p"),wt=t("If both processes can talk to each and allocate GPU memory each will print an OK status."),Zs=u(),Le=r("p"),jt=t("For more GPUs or nodes adjust the arguments in the script."),ea=u(),Ae=r("p"),_t=t("You will find a lot more details inside the diagnostics script and even a recipe to how you could run it in a SLURM environment."),sa=u(),z=r("p"),vt=t("An additional level of debug is to add "),ss=r("code"),yt=t("NCCL_DEBUG=INFO"),gt=t(" environment variable as follows:"),aa=u(),f(fe.$$.fragment),ta=u(),Ne=r("p"),$t=t("This will dump a lot of NCCL-related debug information, which you can then search online if you find that some problems are reported. Or if you\u2019re not sure how to interpret the output you can share the log file in an Issue."),na=u(),M=r("h2"),W=r("a"),as=r("span"),f(me.$$.fragment),Dt=u(),ts=r("span"),Et=t("Underflow and Overflow Detection"),la=u(),f(J.$$.fragment),ra=u(),f(Q.$$.fragment),oa=u(),f(V.$$.fragment),pa=u(),T=r("p"),kt=t("If you start getting "),ns=r("code"),Ot=t("loss=NaN"),Pt=t(" or the model inhibits some other abnormal behavior due to "),ls=r("code"),Ct=t("inf"),xt=t(" or "),rs=r("code"),Tt=t("nan"),Lt=t(` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),ia=u(),X=r("p"),At=t("If you\u2019re using "),Ue=r("a"),Nt=t("Trainer"),Ut=t(", you just need to add:"),ua=u(),f(be.$$.fragment),ca=u(),S=r("p"),Gt=t("to the normal command line arguments, or pass "),os=r("code"),Ft=t('debug="underflow_overflow"'),St=t(` when creating the
`),Ge=r("a"),Rt=t("TrainingArguments"),It=t(" object."),ha=u(),Fe=r("p"),Mt=t("If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),da=u(),f(we.$$.fragment),fa=u(),x=r("p"),Se=r("a"),qt=t("DebugUnderflowOverflow"),Ht=t(` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),ps=r("code"),Yt=t("inf"),Bt=t(` or
`),is=r("code"),Kt=t("nan"),zt=t(` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),us=r("code"),Wt=t("google/mt5-small"),Jt=t(" under fp16 mixed precision):"),ma=u(),f(je.$$.fragment),ba=u(),Re=r("p"),Qt=t("The example output has been trimmed in the middle for brevity."),wa=u(),g=r("p"),Vt=t(`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),cs=r("code"),Xt=t("1e4"),Zt=t(`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),hs=r("code"),en=t("fp16"),sn=t(" the largest number before "),ds=r("code"),an=t("inf"),tn=t(" is "),fs=r("code"),nn=t("64e3"),ln=t(`). To avoid overflows under
`),ms=r("code"),rn=t("fp16"),on=t(" the activations must remain way below "),bs=r("code"),pn=t("1e4"),un=t(", because "),ws=r("code"),cn=t("1e4 * 1e4 = 1e8"),hn=t(` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),ja=u(),Z=r("p"),dn=t("At the very start of the trace you can discover at which batch number the problem occurred (here "),js=r("code"),fn=t("Detected inf/nan during batch_number=0"),mn=t(" means the problem occurred on the first batch)."),_a=u(),Ie=r("p"),bn=t(`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),va=u(),f(_e.$$.fragment),ya=u(),L=r("p"),wn=t("Here, "),_s=r("code"),jn=t("encoder.block.2.layer.1.layer_norm"),_n=t(` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),vs=r("code"),vn=t("forward"),yn=t(" is "),ys=r("code"),gn=t("T5LayerNorm"),$n=t("."),ga=u(),Me=r("p"),Dn=t("Let\u2019s look at the last few frames of that report:"),$a=u(),f(ve.$$.fragment),Da=u(),k=r("p"),En=t("The last frame reports for "),gs=r("code"),kn=t("Dropout.forward"),On=t(` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),$s=r("code"),Pn=t("dropout"),Cn=t(" inside "),Ds=r("code"),xn=t("DenseReluDense"),Tn=t(` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),Es=r("code"),Ln=t("6.27e+04"),An=t(" and same for the output was "),ks=r("code"),Nn=t("inf"),Un=t("."),Ea=u(),A=r("p"),Gn=t("You can see here, that "),Os=r("code"),Fn=t("T5DenseGatedGeluDense.forward"),Sn=t(` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),Ps=r("code"),Rn=t("Dropout"),In=t(` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),Cs=r("code"),Mn=t("inf"),qn=t(")."),ka=u(),qe=r("p"),Hn=t(`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),Oa=u(),ee=r("p"),Yn=t("Let\u2019s match the report to the code from "),xs=r("code"),Bn=t("models/t5/modeling_t5.py"),Kn=t(":"),Pa=u(),f(ye.$$.fragment),Ca=u(),se=r("p"),zn=t("Now it\u2019s easy to see the "),Ts=r("code"),Wn=t("dropout"),Jn=t(" call, and all the previous calls as well."),xa=u(),ae=r("p"),Qn=t("Since the detection is happening in a forward hook, these reports are printed immediately after each "),Ls=r("code"),Vn=t("forward"),Xn=t(`
returns.`),Ta=u(),N=r("p"),Zn=t(`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),As=r("code"),el=t("fp32"),sl=t(` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),Ns=r("code"),al=t("amp"),tl=t(` temporarily if it\u2019s
enabled, after moving the original `),Us=r("code"),nl=t("forward"),ll=t(" into a helper wrapper, like so:"),La=u(),f(ge.$$.fragment),Aa=u(),R=r("p"),rl=t(`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),Gs=r("code"),ol=t("forward"),pl=t(` function as well. In such a case you can use the
`),Fs=r("code"),il=t("detect_overflow"),ul=t(" helper function to inject the detector where you want it, for example:"),Na=u(),f($e.$$.fragment),Ua=u(),U=r("p"),cl=t("You can see that we added 2 of these and now we track if "),Ss=r("code"),hl=t("inf"),dl=t(" or "),Rs=r("code"),fl=t("nan"),ml=t(" for "),Is=r("code"),bl=t("forwarded_states"),wl=t(` was detected
somewhere in between.`),Ga=u(),te=r("p"),jl=t("Actually, the detector already reports these because each of the calls in the example above is a "),Ms=r("code"),_l=t("nn.Module"),vl=t(`, but
let\u2019s say if you had some local direct calculations this is how you\u2019d do that.`),Fa=u(),He=r("p"),yl=t(`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),Sa=u(),f(De.$$.fragment),Ra=u(),q=r("h3"),ne=r("a"),qs=r("span"),f(Ee.$$.fragment),gl=u(),Hs=r("span"),$l=t("Specific batch absolute mix and max value tracing"),Ia=u(),Ye=r("p"),Dl=t("The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),Ma=u(),le=r("p"),El=t("Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Ys=r("code"),kl=t("forward"),Ol=t(` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),qa=u(),f(ke.$$.fragment),Ha=u(),Be=r("p"),Pl=t("And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),Ya=u(),Ke=r("p"),Cl=t("Batches are 0-indexed."),Ba=u(),ze=r("p"),xl=t(`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),Ka=u(),f(Oe.$$.fragment),za=u(),We=r("p"),Tl=t(`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),Wa=u(),Je=r("p"),Ll=t("You can also specify the batch number after which to stop the training, with:"),Ja=u(),f(Pe.$$.fragment),this.h()},l(e){const l=eo('[data-svelte="svelte-1phssyn"]',document.head);h=o(l,"META",{name:!0,content:!0}),l.forEach(s),E=c(e),d=o(e,"H1",{class:!0});var Ce=i(d);v=o(Ce,"A",{id:!0,class:!0,href:!0});var Bs=i(v);C=o(Bs,"SPAN",{});var Ks=i(C);m($.$$.fragment,Ks),Ks.forEach(s),Bs.forEach(s),D=c(Ce),F=o(Ce,"SPAN",{});var Nl=i(F);ut=n(Nl,"Debugging"),Nl.forEach(s),Ce.forEach(s),zs=c(e),I=o(e,"H2",{class:!0});var Va=i(I);B=o(Va,"A",{id:!0,class:!0,href:!0});var Ul=i(B);Xe=o(Ul,"SPAN",{});var Gl=i(Xe);m(ce.$$.fragment,Gl),Gl.forEach(s),Ul.forEach(s),ct=c(Va),Ze=o(Va,"SPAN",{});var Fl=i(Ze);ht=n(Fl,"Multi-GPU Network Issues Debug"),Fl.forEach(s),Va.forEach(s),Ws=c(e),K=o(e,"P",{});var Xa=i(K);dt=n(Xa,"When training or inferencing with "),es=o(Xa,"CODE",{});var Sl=i(es);ft=n(Sl,"DistributedDataParallel"),Sl.forEach(s),mt=n(Xa," and multiple GPU, if you run into issue of inter-communication between processes and/or nodes, you can use the following script to diagnose network issues."),Xa.forEach(s),Js=c(e),m(he.$$.fragment,e),Qs=c(e),xe=o(e,"P",{});var Rl=i(xe);bt=n(Rl,"For example to test how 2 GPUs interact do:"),Rl.forEach(s),Vs=c(e),m(de.$$.fragment,e),Xs=c(e),Te=o(e,"P",{});var Il=i(Te);wt=n(Il,"If both processes can talk to each and allocate GPU memory each will print an OK status."),Il.forEach(s),Zs=c(e),Le=o(e,"P",{});var Ml=i(Le);jt=n(Ml,"For more GPUs or nodes adjust the arguments in the script."),Ml.forEach(s),ea=c(e),Ae=o(e,"P",{});var ql=i(Ae);_t=n(ql,"You will find a lot more details inside the diagnostics script and even a recipe to how you could run it in a SLURM environment."),ql.forEach(s),sa=c(e),z=o(e,"P",{});var Za=i(z);vt=n(Za,"An additional level of debug is to add "),ss=o(Za,"CODE",{});var Hl=i(ss);yt=n(Hl,"NCCL_DEBUG=INFO"),Hl.forEach(s),gt=n(Za," environment variable as follows:"),Za.forEach(s),aa=c(e),m(fe.$$.fragment,e),ta=c(e),Ne=o(e,"P",{});var Yl=i(Ne);$t=n(Yl,"This will dump a lot of NCCL-related debug information, which you can then search online if you find that some problems are reported. Or if you\u2019re not sure how to interpret the output you can share the log file in an Issue."),Yl.forEach(s),na=c(e),M=o(e,"H2",{class:!0});var et=i(M);W=o(et,"A",{id:!0,class:!0,href:!0});var Bl=i(W);as=o(Bl,"SPAN",{});var Kl=i(as);m(me.$$.fragment,Kl),Kl.forEach(s),Bl.forEach(s),Dt=c(et),ts=o(et,"SPAN",{});var zl=i(ts);Et=n(zl,"Underflow and Overflow Detection"),zl.forEach(s),et.forEach(s),la=c(e),m(J.$$.fragment,e),ra=c(e),m(Q.$$.fragment,e),oa=c(e),m(V.$$.fragment,e),pa=c(e),T=o(e,"P",{});var re=i(T);kt=n(re,"If you start getting "),ns=o(re,"CODE",{});var Wl=i(ns);Ot=n(Wl,"loss=NaN"),Wl.forEach(s),Pt=n(re," or the model inhibits some other abnormal behavior due to "),ls=o(re,"CODE",{});var Jl=i(ls);Ct=n(Jl,"inf"),Jl.forEach(s),xt=n(re," or "),rs=o(re,"CODE",{});var Ql=i(rs);Tt=n(Ql,"nan"),Ql.forEach(s),Lt=n(re,` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),re.forEach(s),ia=c(e),X=o(e,"P",{});var st=i(X);At=n(st,"If you\u2019re using "),Ue=o(st,"A",{href:!0});var Vl=i(Ue);Nt=n(Vl,"Trainer"),Vl.forEach(s),Ut=n(st,", you just need to add:"),st.forEach(s),ua=c(e),m(be.$$.fragment,e),ca=c(e),S=o(e,"P",{});var Qe=i(S);Gt=n(Qe,"to the normal command line arguments, or pass "),os=o(Qe,"CODE",{});var Xl=i(os);Ft=n(Xl,'debug="underflow_overflow"'),Xl.forEach(s),St=n(Qe,` when creating the
`),Ge=o(Qe,"A",{href:!0});var Zl=i(Ge);Rt=n(Zl,"TrainingArguments"),Zl.forEach(s),It=n(Qe," object."),Qe.forEach(s),ha=c(e),Fe=o(e,"P",{});var er=i(Fe);Mt=n(er,"If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),er.forEach(s),da=c(e),m(we.$$.fragment,e),fa=c(e),x=o(e,"P",{});var H=i(x);Se=o(H,"A",{href:!0});var sr=i(Se);qt=n(sr,"DebugUnderflowOverflow"),sr.forEach(s),Ht=n(H,` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),ps=o(H,"CODE",{});var ar=i(ps);Yt=n(ar,"inf"),ar.forEach(s),Bt=n(H,` or
`),is=o(H,"CODE",{});var tr=i(is);Kt=n(tr,"nan"),tr.forEach(s),zt=n(H,` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),us=o(H,"CODE",{});var nr=i(us);Wt=n(nr,"google/mt5-small"),nr.forEach(s),Jt=n(H," under fp16 mixed precision):"),H.forEach(s),ma=c(e),m(je.$$.fragment,e),ba=c(e),Re=o(e,"P",{});var lr=i(Re);Qt=n(lr,"The example output has been trimmed in the middle for brevity."),lr.forEach(s),wa=c(e),g=o(e,"P",{});var O=i(g);Vt=n(O,`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),cs=o(O,"CODE",{});var rr=i(cs);Xt=n(rr,"1e4"),rr.forEach(s),Zt=n(O,`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),hs=o(O,"CODE",{});var or=i(hs);en=n(or,"fp16"),or.forEach(s),sn=n(O," the largest number before "),ds=o(O,"CODE",{});var pr=i(ds);an=n(pr,"inf"),pr.forEach(s),tn=n(O," is "),fs=o(O,"CODE",{});var ir=i(fs);nn=n(ir,"64e3"),ir.forEach(s),ln=n(O,`). To avoid overflows under
`),ms=o(O,"CODE",{});var ur=i(ms);rn=n(ur,"fp16"),ur.forEach(s),on=n(O," the activations must remain way below "),bs=o(O,"CODE",{});var cr=i(bs);pn=n(cr,"1e4"),cr.forEach(s),un=n(O,", because "),ws=o(O,"CODE",{});var hr=i(ws);cn=n(hr,"1e4 * 1e4 = 1e8"),hr.forEach(s),hn=n(O,` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),O.forEach(s),ja=c(e),Z=o(e,"P",{});var at=i(Z);dn=n(at,"At the very start of the trace you can discover at which batch number the problem occurred (here "),js=o(at,"CODE",{});var dr=i(js);fn=n(dr,"Detected inf/nan during batch_number=0"),dr.forEach(s),mn=n(at," means the problem occurred on the first batch)."),at.forEach(s),_a=c(e),Ie=o(e,"P",{});var fr=i(Ie);bn=n(fr,`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),fr.forEach(s),va=c(e),m(_e.$$.fragment,e),ya=c(e),L=o(e,"P",{});var oe=i(L);wn=n(oe,"Here, "),_s=o(oe,"CODE",{});var mr=i(_s);jn=n(mr,"encoder.block.2.layer.1.layer_norm"),mr.forEach(s),_n=n(oe,` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),vs=o(oe,"CODE",{});var br=i(vs);vn=n(br,"forward"),br.forEach(s),yn=n(oe," is "),ys=o(oe,"CODE",{});var wr=i(ys);gn=n(wr,"T5LayerNorm"),wr.forEach(s),$n=n(oe,"."),oe.forEach(s),ga=c(e),Me=o(e,"P",{});var jr=i(Me);Dn=n(jr,"Let\u2019s look at the last few frames of that report:"),jr.forEach(s),$a=c(e),m(ve.$$.fragment,e),Da=c(e),k=o(e,"P",{});var G=i(k);En=n(G,"The last frame reports for "),gs=o(G,"CODE",{});var _r=i(gs);kn=n(_r,"Dropout.forward"),_r.forEach(s),On=n(G,` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),$s=o(G,"CODE",{});var vr=i($s);Pn=n(vr,"dropout"),vr.forEach(s),Cn=n(G," inside "),Ds=o(G,"CODE",{});var yr=i(Ds);xn=n(yr,"DenseReluDense"),yr.forEach(s),Tn=n(G,` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),Es=o(G,"CODE",{});var gr=i(Es);Ln=n(gr,"6.27e+04"),gr.forEach(s),An=n(G," and same for the output was "),ks=o(G,"CODE",{});var $r=i(ks);Nn=n($r,"inf"),$r.forEach(s),Un=n(G,"."),G.forEach(s),Ea=c(e),A=o(e,"P",{});var pe=i(A);Gn=n(pe,"You can see here, that "),Os=o(pe,"CODE",{});var Dr=i(Os);Fn=n(Dr,"T5DenseGatedGeluDense.forward"),Dr.forEach(s),Sn=n(pe,` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),Ps=o(pe,"CODE",{});var Er=i(Ps);Rn=n(Er,"Dropout"),Er.forEach(s),In=n(pe,` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),Cs=o(pe,"CODE",{});var kr=i(Cs);Mn=n(kr,"inf"),kr.forEach(s),qn=n(pe,")."),pe.forEach(s),ka=c(e),qe=o(e,"P",{});var Or=i(qe);Hn=n(Or,`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),Or.forEach(s),Oa=c(e),ee=o(e,"P",{});var tt=i(ee);Yn=n(tt,"Let\u2019s match the report to the code from "),xs=o(tt,"CODE",{});var Pr=i(xs);Bn=n(Pr,"models/t5/modeling_t5.py"),Pr.forEach(s),Kn=n(tt,":"),tt.forEach(s),Pa=c(e),m(ye.$$.fragment,e),Ca=c(e),se=o(e,"P",{});var nt=i(se);zn=n(nt,"Now it\u2019s easy to see the "),Ts=o(nt,"CODE",{});var Cr=i(Ts);Wn=n(Cr,"dropout"),Cr.forEach(s),Jn=n(nt," call, and all the previous calls as well."),nt.forEach(s),xa=c(e),ae=o(e,"P",{});var lt=i(ae);Qn=n(lt,"Since the detection is happening in a forward hook, these reports are printed immediately after each "),Ls=o(lt,"CODE",{});var xr=i(Ls);Vn=n(xr,"forward"),xr.forEach(s),Xn=n(lt,`
returns.`),lt.forEach(s),Ta=c(e),N=o(e,"P",{});var ie=i(N);Zn=n(ie,`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),As=o(ie,"CODE",{});var Tr=i(As);el=n(Tr,"fp32"),Tr.forEach(s),sl=n(ie,` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),Ns=o(ie,"CODE",{});var Lr=i(Ns);al=n(Lr,"amp"),Lr.forEach(s),tl=n(ie,` temporarily if it\u2019s
enabled, after moving the original `),Us=o(ie,"CODE",{});var Ar=i(Us);nl=n(Ar,"forward"),Ar.forEach(s),ll=n(ie," into a helper wrapper, like so:"),ie.forEach(s),La=c(e),m(ge.$$.fragment,e),Aa=c(e),R=o(e,"P",{});var Ve=i(R);rl=n(Ve,`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),Gs=o(Ve,"CODE",{});var Nr=i(Gs);ol=n(Nr,"forward"),Nr.forEach(s),pl=n(Ve,` function as well. In such a case you can use the
`),Fs=o(Ve,"CODE",{});var Ur=i(Fs);il=n(Ur,"detect_overflow"),Ur.forEach(s),ul=n(Ve," helper function to inject the detector where you want it, for example:"),Ve.forEach(s),Na=c(e),m($e.$$.fragment,e),Ua=c(e),U=o(e,"P",{});var ue=i(U);cl=n(ue,"You can see that we added 2 of these and now we track if "),Ss=o(ue,"CODE",{});var Gr=i(Ss);hl=n(Gr,"inf"),Gr.forEach(s),dl=n(ue," or "),Rs=o(ue,"CODE",{});var Fr=i(Rs);fl=n(Fr,"nan"),Fr.forEach(s),ml=n(ue," for "),Is=o(ue,"CODE",{});var Sr=i(Is);bl=n(Sr,"forwarded_states"),Sr.forEach(s),wl=n(ue,` was detected
somewhere in between.`),ue.forEach(s),Ga=c(e),te=o(e,"P",{});var rt=i(te);jl=n(rt,"Actually, the detector already reports these because each of the calls in the example above is a "),Ms=o(rt,"CODE",{});var Rr=i(Ms);_l=n(Rr,"nn.Module"),Rr.forEach(s),vl=n(rt,`, but
let\u2019s say if you had some local direct calculations this is how you\u2019d do that.`),rt.forEach(s),Fa=c(e),He=o(e,"P",{});var Ir=i(He);yl=n(Ir,`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),Ir.forEach(s),Sa=c(e),m(De.$$.fragment,e),Ra=c(e),q=o(e,"H3",{class:!0});var ot=i(q);ne=o(ot,"A",{id:!0,class:!0,href:!0});var Mr=i(ne);qs=o(Mr,"SPAN",{});var qr=i(qs);m(Ee.$$.fragment,qr),qr.forEach(s),Mr.forEach(s),gl=c(ot),Hs=o(ot,"SPAN",{});var Hr=i(Hs);$l=n(Hr,"Specific batch absolute mix and max value tracing"),Hr.forEach(s),ot.forEach(s),Ia=c(e),Ye=o(e,"P",{});var Yr=i(Ye);Dl=n(Yr,"The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),Yr.forEach(s),Ma=c(e),le=o(e,"P",{});var pt=i(le);El=n(pt,"Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Ys=o(pt,"CODE",{});var Br=i(Ys);kl=n(Br,"forward"),Br.forEach(s),Ol=n(pt,` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),pt.forEach(s),qa=c(e),m(ke.$$.fragment,e),Ha=c(e),Be=o(e,"P",{});var Kr=i(Be);Pl=n(Kr,"And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),Kr.forEach(s),Ya=c(e),Ke=o(e,"P",{});var zr=i(Ke);Cl=n(zr,"Batches are 0-indexed."),zr.forEach(s),Ba=c(e),ze=o(e,"P",{});var Wr=i(ze);xl=n(Wr,`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),Wr.forEach(s),Ka=c(e),m(Oe.$$.fragment,e),za=c(e),We=o(e,"P",{});var Jr=i(We);Tl=n(Jr,`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),Jr.forEach(s),Wa=c(e),Je=o(e,"P",{});var Qr=i(Je);Ll=n(Qr,"You can also specify the batch number after which to stop the training, with:"),Qr.forEach(s),Ja=c(e),m(Pe.$$.fragment,e),this.h()},h(){y(h,"name","hf:doc:metadata"),y(h,"content",JSON.stringify(ro)),y(v,"id","debugging"),y(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(v,"href","#debugging"),y(d,"class","relative group"),y(B,"id","multigpu-network-issues-debug"),y(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(B,"href","#multigpu-network-issues-debug"),y(I,"class","relative group"),y(W,"id","underflow-and-overflow-detection"),y(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(W,"href","#underflow-and-overflow-detection"),y(M,"class","relative group"),y(Ue,"href","/docs/transformers/v4.19.0/en/main_classes/trainer#transformers.Trainer"),y(Ge,"href","/docs/transformers/v4.19.0/en/main_classes/trainer#transformers.TrainingArguments"),y(Se,"href","/docs/transformers/v4.19.0/en/internal/trainer_utils#transformers.debug_utils.DebugUnderflowOverflow"),y(ne,"id","specific-batch-absolute-mix-and-max-value-tracing"),y(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(ne,"href","#specific-batch-absolute-mix-and-max-value-tracing"),y(q,"class","relative group")},m(e,l){a(document.head,h),p(e,E,l),p(e,d,l),a(d,v),a(v,C),b($,C,null),a(d,D),a(d,F),a(F,ut),p(e,zs,l),p(e,I,l),a(I,B),a(B,Xe),b(ce,Xe,null),a(I,ct),a(I,Ze),a(Ze,ht),p(e,Ws,l),p(e,K,l),a(K,dt),a(K,es),a(es,ft),a(K,mt),p(e,Js,l),b(he,e,l),p(e,Qs,l),p(e,xe,l),a(xe,bt),p(e,Vs,l),b(de,e,l),p(e,Xs,l),p(e,Te,l),a(Te,wt),p(e,Zs,l),p(e,Le,l),a(Le,jt),p(e,ea,l),p(e,Ae,l),a(Ae,_t),p(e,sa,l),p(e,z,l),a(z,vt),a(z,ss),a(ss,yt),a(z,gt),p(e,aa,l),b(fe,e,l),p(e,ta,l),p(e,Ne,l),a(Ne,$t),p(e,na,l),p(e,M,l),a(M,W),a(W,as),b(me,as,null),a(M,Dt),a(M,ts),a(ts,Et),p(e,la,l),b(J,e,l),p(e,ra,l),b(Q,e,l),p(e,oa,l),b(V,e,l),p(e,pa,l),p(e,T,l),a(T,kt),a(T,ns),a(ns,Ot),a(T,Pt),a(T,ls),a(ls,Ct),a(T,xt),a(T,rs),a(rs,Tt),a(T,Lt),p(e,ia,l),p(e,X,l),a(X,At),a(X,Ue),a(Ue,Nt),a(X,Ut),p(e,ua,l),b(be,e,l),p(e,ca,l),p(e,S,l),a(S,Gt),a(S,os),a(os,Ft),a(S,St),a(S,Ge),a(Ge,Rt),a(S,It),p(e,ha,l),p(e,Fe,l),a(Fe,Mt),p(e,da,l),b(we,e,l),p(e,fa,l),p(e,x,l),a(x,Se),a(Se,qt),a(x,Ht),a(x,ps),a(ps,Yt),a(x,Bt),a(x,is),a(is,Kt),a(x,zt),a(x,us),a(us,Wt),a(x,Jt),p(e,ma,l),b(je,e,l),p(e,ba,l),p(e,Re,l),a(Re,Qt),p(e,wa,l),p(e,g,l),a(g,Vt),a(g,cs),a(cs,Xt),a(g,Zt),a(g,hs),a(hs,en),a(g,sn),a(g,ds),a(ds,an),a(g,tn),a(g,fs),a(fs,nn),a(g,ln),a(g,ms),a(ms,rn),a(g,on),a(g,bs),a(bs,pn),a(g,un),a(g,ws),a(ws,cn),a(g,hn),p(e,ja,l),p(e,Z,l),a(Z,dn),a(Z,js),a(js,fn),a(Z,mn),p(e,_a,l),p(e,Ie,l),a(Ie,bn),p(e,va,l),b(_e,e,l),p(e,ya,l),p(e,L,l),a(L,wn),a(L,_s),a(_s,jn),a(L,_n),a(L,vs),a(vs,vn),a(L,yn),a(L,ys),a(ys,gn),a(L,$n),p(e,ga,l),p(e,Me,l),a(Me,Dn),p(e,$a,l),b(ve,e,l),p(e,Da,l),p(e,k,l),a(k,En),a(k,gs),a(gs,kn),a(k,On),a(k,$s),a($s,Pn),a(k,Cn),a(k,Ds),a(Ds,xn),a(k,Tn),a(k,Es),a(Es,Ln),a(k,An),a(k,ks),a(ks,Nn),a(k,Un),p(e,Ea,l),p(e,A,l),a(A,Gn),a(A,Os),a(Os,Fn),a(A,Sn),a(A,Ps),a(Ps,Rn),a(A,In),a(A,Cs),a(Cs,Mn),a(A,qn),p(e,ka,l),p(e,qe,l),a(qe,Hn),p(e,Oa,l),p(e,ee,l),a(ee,Yn),a(ee,xs),a(xs,Bn),a(ee,Kn),p(e,Pa,l),b(ye,e,l),p(e,Ca,l),p(e,se,l),a(se,zn),a(se,Ts),a(Ts,Wn),a(se,Jn),p(e,xa,l),p(e,ae,l),a(ae,Qn),a(ae,Ls),a(Ls,Vn),a(ae,Xn),p(e,Ta,l),p(e,N,l),a(N,Zn),a(N,As),a(As,el),a(N,sl),a(N,Ns),a(Ns,al),a(N,tl),a(N,Us),a(Us,nl),a(N,ll),p(e,La,l),b(ge,e,l),p(e,Aa,l),p(e,R,l),a(R,rl),a(R,Gs),a(Gs,ol),a(R,pl),a(R,Fs),a(Fs,il),a(R,ul),p(e,Na,l),b($e,e,l),p(e,Ua,l),p(e,U,l),a(U,cl),a(U,Ss),a(Ss,hl),a(U,dl),a(U,Rs),a(Rs,fl),a(U,ml),a(U,Is),a(Is,bl),a(U,wl),p(e,Ga,l),p(e,te,l),a(te,jl),a(te,Ms),a(Ms,_l),a(te,vl),p(e,Fa,l),p(e,He,l),a(He,yl),p(e,Sa,l),b(De,e,l),p(e,Ra,l),p(e,q,l),a(q,ne),a(ne,qs),b(Ee,qs,null),a(q,gl),a(q,Hs),a(Hs,$l),p(e,Ia,l),p(e,Ye,l),a(Ye,Dl),p(e,Ma,l),p(e,le,l),a(le,El),a(le,Ys),a(Ys,kl),a(le,Ol),p(e,qa,l),b(ke,e,l),p(e,Ha,l),p(e,Be,l),a(Be,Pl),p(e,Ya,l),p(e,Ke,l),a(Ke,Cl),p(e,Ba,l),p(e,ze,l),a(ze,xl),p(e,Ka,l),b(Oe,e,l),p(e,za,l),p(e,We,l),a(We,Tl),p(e,Wa,l),p(e,Je,l),a(Je,Ll),p(e,Ja,l),b(Pe,e,l),Qa=!0},p(e,[l]){const Ce={};l&2&&(Ce.$$scope={dirty:l,ctx:e}),J.$set(Ce);const Bs={};l&2&&(Bs.$$scope={dirty:l,ctx:e}),Q.$set(Bs);const Ks={};l&2&&(Ks.$$scope={dirty:l,ctx:e}),V.$set(Ks)},i(e){Qa||(w($.$$.fragment,e),w(ce.$$.fragment,e),w(he.$$.fragment,e),w(de.$$.fragment,e),w(fe.$$.fragment,e),w(me.$$.fragment,e),w(J.$$.fragment,e),w(Q.$$.fragment,e),w(V.$$.fragment,e),w(be.$$.fragment,e),w(we.$$.fragment,e),w(je.$$.fragment,e),w(_e.$$.fragment,e),w(ve.$$.fragment,e),w(ye.$$.fragment,e),w(ge.$$.fragment,e),w($e.$$.fragment,e),w(De.$$.fragment,e),w(Ee.$$.fragment,e),w(ke.$$.fragment,e),w(Oe.$$.fragment,e),w(Pe.$$.fragment,e),Qa=!0)},o(e){j($.$$.fragment,e),j(ce.$$.fragment,e),j(he.$$.fragment,e),j(de.$$.fragment,e),j(fe.$$.fragment,e),j(me.$$.fragment,e),j(J.$$.fragment,e),j(Q.$$.fragment,e),j(V.$$.fragment,e),j(be.$$.fragment,e),j(we.$$.fragment,e),j(je.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(ye.$$.fragment,e),j(ge.$$.fragment,e),j($e.$$.fragment,e),j(De.$$.fragment,e),j(Ee.$$.fragment,e),j(ke.$$.fragment,e),j(Oe.$$.fragment,e),j(Pe.$$.fragment,e),Qa=!1},d(e){s(h),e&&s(E),e&&s(d),_($),e&&s(zs),e&&s(I),_(ce),e&&s(Ws),e&&s(K),e&&s(Js),_(he,e),e&&s(Qs),e&&s(xe),e&&s(Vs),_(de,e),e&&s(Xs),e&&s(Te),e&&s(Zs),e&&s(Le),e&&s(ea),e&&s(Ae),e&&s(sa),e&&s(z),e&&s(aa),_(fe,e),e&&s(ta),e&&s(Ne),e&&s(na),e&&s(M),_(me),e&&s(la),_(J,e),e&&s(ra),_(Q,e),e&&s(oa),_(V,e),e&&s(pa),e&&s(T),e&&s(ia),e&&s(X),e&&s(ua),_(be,e),e&&s(ca),e&&s(S),e&&s(ha),e&&s(Fe),e&&s(da),_(we,e),e&&s(fa),e&&s(x),e&&s(ma),_(je,e),e&&s(ba),e&&s(Re),e&&s(wa),e&&s(g),e&&s(ja),e&&s(Z),e&&s(_a),e&&s(Ie),e&&s(va),_(_e,e),e&&s(ya),e&&s(L),e&&s(ga),e&&s(Me),e&&s($a),_(ve,e),e&&s(Da),e&&s(k),e&&s(Ea),e&&s(A),e&&s(ka),e&&s(qe),e&&s(Oa),e&&s(ee),e&&s(Pa),_(ye,e),e&&s(Ca),e&&s(se),e&&s(xa),e&&s(ae),e&&s(Ta),e&&s(N),e&&s(La),_(ge,e),e&&s(Aa),e&&s(R),e&&s(Na),_($e,e),e&&s(Ua),e&&s(U),e&&s(Ga),e&&s(te),e&&s(Fa),e&&s(He),e&&s(Sa),_(De,e),e&&s(Ra),e&&s(q),_(Ee),e&&s(Ia),e&&s(Ye),e&&s(Ma),e&&s(le),e&&s(qa),_(ke,e),e&&s(Ha),e&&s(Be),e&&s(Ya),e&&s(Ke),e&&s(Ba),e&&s(ze),e&&s(Ka),_(Oe,e),e&&s(za),e&&s(We),e&&s(Wa),e&&s(Je),e&&s(Ja),_(Pe,e)}}}const ro={local:"debugging",sections:[{local:"multigpu-network-issues-debug",title:"Multi-GPU Network Issues Debug"},{local:"underflow-and-overflow-detection",sections:[{local:"specific-batch-absolute-mix-and-max-value-tracing",title:"Specific batch absolute mix and max value tracing"}],title:"Underflow and Overflow Detection"}],title:"Debugging"};function oo(Y){return so(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ho extends Vr{constructor(h){super();Xr(this,h,oo,lo,Zr,{})}}export{ho as default,ro as metadata};
