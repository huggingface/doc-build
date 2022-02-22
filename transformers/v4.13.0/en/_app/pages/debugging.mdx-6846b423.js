import{S as ir,i as cr,s as hr,e as r,k as i,w as j,t as n,L as dr,c as o,d as s,m as c,a as p,x as _,h as t,b as E,J as a,g as u,y as v,q as y,o as g,B as $}from"../chunks/vendor-e859c359.js";import{T as Vt}from"../chunks/Tip-edc75249.js";import{I as Xt}from"../chunks/IconCopyLink-5fae3b20.js";import{C as F}from"../chunks/CodeBlock-ce4317c2.js";import"../chunks/CopyButton-77addb3d.js";function fr(I){let h,w;return{c(){h=r("p"),w=n("This feature is currently available for PyTorch-only.")},l(d){h=o(d,"P",{});var f=p(h);w=t(f,"This feature is currently available for PyTorch-only."),f.forEach(s)},m(d,f){u(d,h,f),a(h,w)},d(d){d&&s(h)}}}function mr(I){let h,w,d,f,x;return{c(){h=r("p"),w=n("For multi-GPU training it requires DDP ("),d=r("code"),f=n("torch.distributed.launch"),x=n(").")},l(b){h=o(b,"P",{});var D=p(h);w=t(D,"For multi-GPU training it requires DDP ("),d=o(D,"CODE",{});var N=p(d);f=t(N,"torch.distributed.launch"),N.forEach(s),x=t(D,")."),D.forEach(s)},m(b,D){u(b,h,D),a(h,w),a(h,d),a(d,f),a(h,x)},d(b){b&&s(h)}}}function br(I){let h,w,d,f,x;return{c(){h=r("p"),w=n("This feature can be used with any "),d=r("code"),f=n("nn.Module"),x=n("-based model.")},l(b){h=o(b,"P",{});var D=p(h);w=t(D,"This feature can be used with any "),d=o(D,"CODE",{});var N=p(d);f=t(N,"nn.Module"),N.forEach(s),x=t(D,"-based model."),D.forEach(s)},m(b,D){u(b,h,D),a(h,w),a(h,d),a(d,f),a(h,x)},d(b){b&&s(h)}}}function wr(I){let h,w,d,f,x,b,D,N,Ga,Ss,q,Y,Me,re,Ua,He,Ia,Rs,K,Fs,z,Ns,B,Gs,C,qa,Ye,Ma,Ha,Ke,Ya,Ka,ze,za,Ba,Us,J,Ja,ge,Wa,Qa,Is,oe,qs,G,Va,Be,Xa,Za,$e,en,sn,Ms,De,an,Hs,pe,Ys,T,Ee,nn,tn,Je,ln,rn,We,on,pn,Qe,un,cn,Ks,ue,zs,ke,hn,Bs,m,dn,Ve,fn,mn,Xe,bn,wn,Ze,jn,_n,es,vn,yn,ss,gn,$n,as,Dn,En,ns,kn,On,Js,W,xn,ts,Tn,Cn,Ws,Oe,Pn,Qs,ie,Vs,xe,Ln,Xs,P,An,ls,Sn,Rn,rs,Fn,Nn,os,Gn,Un,Zs,Te,In,ea,ce,sa,k,qn,ps,Mn,Hn,us,Yn,Kn,is,zn,Bn,cs,Jn,Wn,hs,Qn,Vn,aa,L,Xn,ds,Zn,et,fs,st,at,ms,nt,tt,na,Ce,lt,ta,Q,rt,bs,ot,pt,la,he,ra,V,ut,ws,it,ct,oa,X,ht,js,dt,ft,pa,A,mt,_s,bt,wt,vs,jt,_t,ys,vt,yt,ua,de,ia,U,gt,gs,$t,Dt,$s,Et,kt,ca,fe,ha,S,Ot,Ds,xt,Tt,Es,Ct,Pt,ks,Lt,At,da,Pe,St,fa,Le,Rt,ma,me,ba,M,Z,Os,be,Ft,xs,Nt,wa,Ae,Gt,ja,ee,Ut,Ts,It,qt,_a,we,va,Se,Mt,ya,Re,Ht,ga,Fe,Yt,$a,je,Da,Ne,Kt,Ea,_e,Cs,Ps,zt,Bt,ka,Ge,Jt,Oa,Ue,Wt,xa,ve,Ta;return b=new Xt({}),re=new Xt({}),K=new Vt({props:{$$slots:{default:[fr]},$$scope:{ctx:I}}}),z=new Vt({props:{$$slots:{default:[mr]},$$scope:{ctx:I}}}),B=new Vt({props:{$$slots:{default:[br]},$$scope:{ctx:I}}}),oe=new F({props:{code:"--debug underflow_overflow,",highlighted:"--debug underflow_overflow"}}),pe=new F({props:{code:`from .debug_utils import DebugUnderflowOverflow
debug_overflow = DebugUnderflowOverflow(model),`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow
debug_overflow = DebugUnderflowOverflow(model)`}}),ue=new F({props:{code:`Detected inf/nan during batch_number=0
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
0.00e+00      inf output,`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
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
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),ie=new F({props:{code:"encoder.block.2.layer.1.layer_norm T5LayerNorm,",highlighted:'encoder<span class="hljs-selector-class">.block</span>.<span class="hljs-number">2</span><span class="hljs-selector-class">.layer</span>.<span class="hljs-number">1</span><span class="hljs-selector-class">.layer_norm</span> T5LayerNorm'}}),ce=new F({props:{code:`Detected inf/nan during batch_number=0
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
0.00e+00      inf output,`,highlighted:`<span class="hljs-attribute">Detected</span> inf/nan during batch_number=<span class="hljs-number">0</span>
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
<span class="hljs-attribute">0</span>.<span class="hljs-number">00</span>e+<span class="hljs-number">00</span>      inf output`}}),he=new F({props:{code:`class T5DenseGatedGeluDense(nn.Module):
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
        return hidden_states,`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5DenseGatedGeluDense</span>(nn.Module):
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
        <span class="hljs-keyword">return</span> hidden_states`}}),de=new F({props:{code:`def _forward(self, hidden_states):
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
         return self._forward(hidden_states),`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, hidden_states</span>):
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
         <span class="hljs-keyword">return</span> self._forward(hidden_states)`}}),fe=new F({props:{code:`from debug_utils import detect_overflow

class T5LayerFF(nn.Module):
    [...]
    def forward(self, hidden_states):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, "after layer_norm")
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, "after DenseReluDense")
        return hidden_states + self.dropout(forwarded_states),`,highlighted:`<span class="hljs-keyword">from</span> debug_utils <span class="hljs-keyword">import</span> detect_overflow

<span class="hljs-keyword">class</span> <span class="hljs-title class_">T5LayerFF</span>(nn.Module):
    [...]
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, hidden_states</span>):
        forwarded_states = self.layer_norm(hidden_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after layer_norm&quot;</span>)
        forwarded_states = self.DenseReluDense(forwarded_states)
        detect_overflow(forwarded_states, <span class="hljs-string">&quot;after DenseReluDense&quot;</span>)
        <span class="hljs-keyword">return</span> hidden_states + self.dropout(forwarded_states)`}}),me=new F({props:{code:`from .debug_utils import DebugUnderflowOverflow
debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=100),`,highlighted:`<span class="hljs-keyword">from</span> .debug_utils <span class="hljs-keyword">import</span> DebugUnderflowOverflow
debug_overflow = DebugUnderflowOverflow(model, max_frames_to_save=<span class="hljs-number">100</span>)`}}),be=new Xt({}),we=new F({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1,3]),",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>])'}}),je=new F({props:{code:"*** Starting batch number=1 ***,",highlighted:'<span class="hljs-bullet">*** </span>Starting batch number=1 <span class="hljs-strong">***</span>'}}),ve=new F({props:{code:"debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[1,3], abort_after_batch_num=3),",highlighted:'debug_overflow = DebugUnderflowOverflow(model, trace_batch_nums=[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>], abort_after_batch_num=<span class="hljs-number">3</span>)'}}),{c(){h=r("meta"),w=i(),d=r("h1"),f=r("a"),x=r("span"),j(b.$$.fragment),D=i(),N=r("span"),Ga=n("Debugging"),Ss=i(),q=r("h2"),Y=r("a"),Me=r("span"),j(re.$$.fragment),Ua=i(),He=r("span"),Ia=n("Underflow and Overflow Detection"),Rs=i(),j(K.$$.fragment),Fs=i(),j(z.$$.fragment),Ns=i(),j(B.$$.fragment),Gs=i(),C=r("p"),qa=n("If you start getting "),Ye=r("code"),Ma=n("loss=NaN"),Ha=n(" or the model inhibits some other abnormal behavior due to "),Ke=r("code"),Ya=n("inf"),Ka=n(" or "),ze=r("code"),za=n("nan"),Ba=n(` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),Us=i(),J=r("p"),Ja=n("If you\u2019re using "),ge=r("a"),Wa=n("Trainer"),Qa=n(", you just need to add:"),Is=i(),j(oe.$$.fragment),qs=i(),G=r("p"),Va=n("to the normal command line arguments, or pass "),Be=r("code"),Xa=n('debug="underflow_overflow"'),Za=n(` when creating the
`),$e=r("a"),en=n("TrainingArguments"),sn=n(" object."),Ms=i(),De=r("p"),an=n("If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),Hs=i(),j(pe.$$.fragment),Ys=i(),T=r("p"),Ee=r("a"),nn=n("DebugUnderflowOverflow"),tn=n(` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),Je=r("code"),ln=n("inf"),rn=n(` or
`),We=r("code"),on=n("nan"),pn=n(` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),Qe=r("code"),un=n("google/mt5-small"),cn=n(" under fp16 mixed precision):"),Ks=i(),j(ue.$$.fragment),zs=i(),ke=r("p"),hn=n("The example output has been trimmed in the middle for brevity."),Bs=i(),m=r("p"),dn=n(`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),Ve=r("code"),fn=n("1e4"),mn=n(`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),Xe=r("code"),bn=n("fp16"),wn=n(" the largest number before "),Ze=r("code"),jn=n("inf"),_n=n(" is "),es=r("code"),vn=n("64e3"),yn=n(`). To avoid overflows under
`),ss=r("code"),gn=n("fp16"),$n=n(" the activations must remain way below "),as=r("code"),Dn=n("1e4"),En=n(", because "),ns=r("code"),kn=n("1e4 * 1e4 = 1e8"),On=n(` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),Js=i(),W=r("p"),xn=n("At the very start of the trace you can discover at which batch number the problem occurred (here "),ts=r("code"),Tn=n("Detected inf/nan during batch_number=0"),Cn=n(" means the problem occurred on the first batch)."),Ws=i(),Oe=r("p"),Pn=n(`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),Qs=i(),j(ie.$$.fragment),Vs=i(),xe=r("p"),Ln=n(`8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output`),Xs=i(),P=r("p"),An=n("Here, "),ls=r("code"),Sn=n("encoder.block.2.layer.1.layer_norm"),Rn=n(` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),rs=r("code"),Fn=n("forward"),Nn=n(" is "),os=r("code"),Gn=n("T5LayerNorm"),Un=n("."),Zs=i(),Te=r("p"),In=n("Let\u2019s look at the last few frames of that report:"),ea=i(),j(ce.$$.fragment),sa=i(),k=r("p"),qn=n("The last frame reports for "),ps=r("code"),Mn=n("Dropout.forward"),Hn=n(` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),us=r("code"),Yn=n("dropout"),Kn=n(" inside "),is=r("code"),zn=n("DenseReluDense"),Bn=n(` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),cs=r("code"),Jn=n("6.27e+04"),Wn=n(" and same for the output was "),hs=r("code"),Qn=n("inf"),Vn=n("."),aa=i(),L=r("p"),Xn=n("You can see here, that "),ds=r("code"),Zn=n("T5DenseGatedGeluDense.forward"),et=n(` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),fs=r("code"),st=n("Dropout"),at=n(` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),ms=r("code"),nt=n("inf"),tt=n(")."),na=i(),Ce=r("p"),lt=n(`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),ta=i(),Q=r("p"),rt=n("Let\u2019s match the report to the code from "),bs=r("code"),ot=n("models/t5/modeling_t5.py"),pt=n(":"),la=i(),j(he.$$.fragment),ra=i(),V=r("p"),ut=n("Now it\u2019s easy to see the "),ws=r("code"),it=n("dropout"),ct=n(" call, and all the previous calls as well."),oa=i(),X=r("p"),ht=n("Since the detection is happening in a forward hook, these reports are printed immediately after each "),js=r("code"),dt=n("forward"),ft=n(`
returns.`),pa=i(),A=r("p"),mt=n(`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),_s=r("code"),bt=n("fp32"),wt=n(` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),vs=r("code"),jt=n("amp"),_t=n(` temporarily if it\u2019s
enabled, after moving the original `),ys=r("code"),vt=n("forward"),yt=n(" into a helper wrapper, like so:"),ua=i(),j(de.$$.fragment),ia=i(),U=r("p"),gt=n(`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),gs=r("code"),$t=n("forward"),Dt=n(` function as well. In such a case you can use the
`),$s=r("code"),Et=n("detect_overflow"),kt=n(" helper function to inject the detector where you want it, for example:"),ca=i(),j(fe.$$.fragment),ha=i(),S=r("p"),Ot=n("You can see that we added 2 of these and now we track if "),Ds=r("code"),xt=n("inf"),Tt=n(" or "),Es=r("code"),Ct=n("nan"),Pt=n(" for "),ks=r("code"),Lt=n("forwarded_states"),At=n(` was detected
somewhere in between.`),da=i(),Pe=r("p"),St=n("Actually, the detector already reports these because each of the calls in the example above is a `nn.Module\u201C, but\nlet\u2019s say if you had some local direct calculations this is how you\u2019d do that."),fa=i(),Le=r("p"),Rt=n(`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),ma=i(),j(me.$$.fragment),ba=i(),M=r("h3"),Z=r("a"),Os=r("span"),j(be.$$.fragment),Ft=i(),xs=r("span"),Nt=n("Specific batch absolute mix and max value tracing"),wa=i(),Ae=r("p"),Gt=n("The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),ja=i(),ee=r("p"),Ut=n("Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Ts=r("code"),It=n("forward"),qt=n(` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),_a=i(),j(we.$$.fragment),va=i(),Se=r("p"),Mt=n("And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),ya=i(),Re=r("p"),Ht=n("Batches are 0-indexed."),ga=i(),Fe=r("p"),Yt=n(`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),$a=i(),j(je.$$.fragment),Da=i(),Ne=r("p"),Kt=n(`abs min  abs max  metadata
shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.47e+04 input[0]
5.36e-05 7.92e+02 output
[\u2026]
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
not a tensor output`),Ea=i(),_e=r("p"),Cs=r("strong"),Ps=r("em"),zt=n("Starting batch number=3"),Bt=n(`
abs min  abs max  metadata
shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.78e+04 input[0]
5.36e-05 7.92e+02 output
[\u2026]`),ka=i(),Ge=r("p"),Jt=n(`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),Oa=i(),Ue=r("p"),Wt=n("You can also specify the batch number after which to stop the training, with:"),xa=i(),j(ve.$$.fragment),this.h()},l(e){const l=dr('[data-svelte="svelte-1phssyn"]',document.head);h=o(l,"META",{name:!0,content:!0}),l.forEach(s),w=c(e),d=o(e,"H1",{class:!0});var ye=p(d);f=o(ye,"A",{id:!0,class:!0,href:!0});var Ls=p(f);x=o(Ls,"SPAN",{});var As=p(x);_(b.$$.fragment,As),As.forEach(s),Ls.forEach(s),D=c(ye),N=o(ye,"SPAN",{});var Zt=p(N);Ga=t(Zt,"Debugging"),Zt.forEach(s),ye.forEach(s),Ss=c(e),q=o(e,"H2",{class:!0});var Ca=p(q);Y=o(Ca,"A",{id:!0,class:!0,href:!0});var el=p(Y);Me=o(el,"SPAN",{});var sl=p(Me);_(re.$$.fragment,sl),sl.forEach(s),el.forEach(s),Ua=c(Ca),He=o(Ca,"SPAN",{});var al=p(He);Ia=t(al,"Underflow and Overflow Detection"),al.forEach(s),Ca.forEach(s),Rs=c(e),_(K.$$.fragment,e),Fs=c(e),_(z.$$.fragment,e),Ns=c(e),_(B.$$.fragment,e),Gs=c(e),C=o(e,"P",{});var se=p(C);qa=t(se,"If you start getting "),Ye=o(se,"CODE",{});var nl=p(Ye);Ma=t(nl,"loss=NaN"),nl.forEach(s),Ha=t(se," or the model inhibits some other abnormal behavior due to "),Ke=o(se,"CODE",{});var tl=p(Ke);Ya=t(tl,"inf"),tl.forEach(s),Ka=t(se," or "),ze=o(se,"CODE",{});var ll=p(ze);za=t(ll,"nan"),ll.forEach(s),Ba=t(se,` in
activations or weights one needs to discover where the first underflow or overflow happens and what led to it. Luckily
you can accomplish that easily by activating a special module that will do the detection automatically.`),se.forEach(s),Us=c(e),J=o(e,"P",{});var Pa=p(J);Ja=t(Pa,"If you\u2019re using "),ge=o(Pa,"A",{href:!0});var rl=p(ge);Wa=t(rl,"Trainer"),rl.forEach(s),Qa=t(Pa,", you just need to add:"),Pa.forEach(s),Is=c(e),_(oe.$$.fragment,e),qs=c(e),G=o(e,"P",{});var Ie=p(G);Va=t(Ie,"to the normal command line arguments, or pass "),Be=o(Ie,"CODE",{});var ol=p(Be);Xa=t(ol,'debug="underflow_overflow"'),ol.forEach(s),Za=t(Ie,` when creating the
`),$e=o(Ie,"A",{href:!0});var pl=p($e);en=t(pl,"TrainingArguments"),pl.forEach(s),sn=t(Ie," object."),Ie.forEach(s),Ms=c(e),De=o(e,"P",{});var ul=p(De);an=t(ul,"If you\u2019re using your own training loop or another Trainer you can accomplish the same with:"),ul.forEach(s),Hs=c(e),_(pe.$$.fragment,e),Ys=c(e),T=o(e,"P",{});var H=p(T);Ee=o(H,"A",{href:!0});var il=p(Ee);nn=t(il,"DebugUnderflowOverflow"),il.forEach(s),tn=t(H,` inserts hooks into the model that immediately after each
forward call will test input and output variables and also the corresponding module\u2019s weights. As soon as `),Je=o(H,"CODE",{});var cl=p(Je);ln=t(cl,"inf"),cl.forEach(s),rn=t(H,` or
`),We=o(H,"CODE",{});var hl=p(We);on=t(hl,"nan"),hl.forEach(s),pn=t(H,` is detected in at least one element of the activations or weights, the program will assert and print a report
like this (this was caught with `),Qe=o(H,"CODE",{});var dl=p(Qe);un=t(dl,"google/mt5-small"),dl.forEach(s),cn=t(H," under fp16 mixed precision):"),H.forEach(s),Ks=c(e),_(ue.$$.fragment,e),zs=c(e),ke=o(e,"P",{});var fl=p(ke);hn=t(fl,"The example output has been trimmed in the middle for brevity."),fl.forEach(s),Bs=c(e),m=o(e,"P",{});var O=p(m);dn=t(O,`The second column shows the value of the absolute largest element, so if you have a closer look at the last few frames,
the inputs and outputs were in the range of `),Ve=o(O,"CODE",{});var ml=p(Ve);fn=t(ml,"1e4"),ml.forEach(s),mn=t(O,`. So when this training was done under fp16 mixed precision the very
last step overflowed (since under `),Xe=o(O,"CODE",{});var bl=p(Xe);bn=t(bl,"fp16"),bl.forEach(s),wn=t(O," the largest number before "),Ze=o(O,"CODE",{});var wl=p(Ze);jn=t(wl,"inf"),wl.forEach(s),_n=t(O," is "),es=o(O,"CODE",{});var jl=p(es);vn=t(jl,"64e3"),jl.forEach(s),yn=t(O,`). To avoid overflows under
`),ss=o(O,"CODE",{});var _l=p(ss);gn=t(_l,"fp16"),_l.forEach(s),$n=t(O," the activations must remain way below "),as=o(O,"CODE",{});var vl=p(as);Dn=t(vl,"1e4"),vl.forEach(s),En=t(O,", because "),ns=o(O,"CODE",{});var yl=p(ns);kn=t(yl,"1e4 * 1e4 = 1e8"),yl.forEach(s),On=t(O,` so any matrix multiplication with
large activations is going to lead to a numerical overflow condition.`),O.forEach(s),Js=c(e),W=o(e,"P",{});var La=p(W);xn=t(La,"At the very start of the trace you can discover at which batch number the problem occurred (here "),ts=o(La,"CODE",{});var gl=p(ts);Tn=t(gl,"Detected inf/nan during batch_number=0"),gl.forEach(s),Cn=t(La," means the problem occurred on the first batch)."),La.forEach(s),Ws=c(e),Oe=o(e,"P",{});var $l=p(Oe);Pn=t($l,`Each reported frame starts by declaring the fully qualified entry for the corresponding module this frame is reporting
for. If we look just at this frame:`),$l.forEach(s),Qs=c(e),_(ie.$$.fragment,e),Vs=c(e),xe=o(e,"P",{});var Dl=p(xe);Ln=t(Dl,`8.69e-02 4.18e-01 weight
2.65e-04 3.42e+03 input[0]
1.79e-06 4.65e+00 output`),Dl.forEach(s),Xs=c(e),P=o(e,"P",{});var ae=p(P);An=t(ae,"Here, "),ls=o(ae,"CODE",{});var El=p(ls);Sn=t(El,"encoder.block.2.layer.1.layer_norm"),El.forEach(s),Rn=t(ae,` indicates that it was a layer norm for the first layer, of the second
block of the encoder. And the specific calls of the `),rs=o(ae,"CODE",{});var kl=p(rs);Fn=t(kl,"forward"),kl.forEach(s),Nn=t(ae," is "),os=o(ae,"CODE",{});var Ol=p(os);Gn=t(Ol,"T5LayerNorm"),Ol.forEach(s),Un=t(ae,"."),ae.forEach(s),Zs=c(e),Te=o(e,"P",{});var xl=p(Te);In=t(xl,"Let\u2019s look at the last few frames of that report:"),xl.forEach(s),ea=c(e),_(ce.$$.fragment,e),sa=c(e),k=o(e,"P",{});var R=p(k);qn=t(R,"The last frame reports for "),ps=o(R,"CODE",{});var Tl=p(ps);Mn=t(Tl,"Dropout.forward"),Tl.forEach(s),Hn=t(R,` function with the first entry for the only input and the second for the
only output. You can see that it was called from an attribute `),us=o(R,"CODE",{});var Cl=p(us);Yn=t(Cl,"dropout"),Cl.forEach(s),Kn=t(R," inside "),is=o(R,"CODE",{});var Pl=p(is);zn=t(Pl,"DenseReluDense"),Pl.forEach(s),Bn=t(R,` class. We can see
that it happened during the first layer, of the 2nd block, during the very first batch. Finally, the absolute largest
input elements was `),cs=o(R,"CODE",{});var Ll=p(cs);Jn=t(Ll,"6.27e+04"),Ll.forEach(s),Wn=t(R," and same for the output was "),hs=o(R,"CODE",{});var Al=p(hs);Qn=t(Al,"inf"),Al.forEach(s),Vn=t(R,"."),R.forEach(s),aa=c(e),L=o(e,"P",{});var ne=p(L);Xn=t(ne,"You can see here, that "),ds=o(ne,"CODE",{});var Sl=p(ds);Zn=t(Sl,"T5DenseGatedGeluDense.forward"),Sl.forEach(s),et=t(ne,` resulted in output activations, whose absolute max value was
around 62.7K, which is very close to fp16\u2019s top limit of 64K. In the next frame we have `),fs=o(ne,"CODE",{});var Rl=p(fs);st=t(Rl,"Dropout"),Rl.forEach(s),at=t(ne,` which renormalizes
the weights, after it zeroed some of the elements, which pushes the absolute max value to more than 64K, and we get an
overflow (`),ms=o(ne,"CODE",{});var Fl=p(ms);nt=t(Fl,"inf"),Fl.forEach(s),tt=t(ne,")."),ne.forEach(s),na=c(e),Ce=o(e,"P",{});var Nl=p(Ce);lt=t(Nl,`As you can see it\u2019s the previous frames that we need to look into when the numbers start going into very large for fp16
numbers.`),Nl.forEach(s),ta=c(e),Q=o(e,"P",{});var Aa=p(Q);rt=t(Aa,"Let\u2019s match the report to the code from "),bs=o(Aa,"CODE",{});var Gl=p(bs);ot=t(Gl,"models/t5/modeling_t5.py"),Gl.forEach(s),pt=t(Aa,":"),Aa.forEach(s),la=c(e),_(he.$$.fragment,e),ra=c(e),V=o(e,"P",{});var Sa=p(V);ut=t(Sa,"Now it\u2019s easy to see the "),ws=o(Sa,"CODE",{});var Ul=p(ws);it=t(Ul,"dropout"),Ul.forEach(s),ct=t(Sa," call, and all the previous calls as well."),Sa.forEach(s),oa=c(e),X=o(e,"P",{});var Ra=p(X);ht=t(Ra,"Since the detection is happening in a forward hook, these reports are printed immediately after each "),js=o(Ra,"CODE",{});var Il=p(js);dt=t(Il,"forward"),Il.forEach(s),ft=t(Ra,`
returns.`),Ra.forEach(s),pa=c(e),A=o(e,"P",{});var te=p(A);mt=t(te,`Going back to the full report, to act on it and to fix the problem, we need to go a few frames up where the numbers
started to go up and most likely switch to the `),_s=o(te,"CODE",{});var ql=p(_s);bt=t(ql,"fp32"),ql.forEach(s),wt=t(te,` mode here, so that the numbers don\u2019t overflow when multiplied
or summed up. Of course, there might be other solutions. For example, we could turn off `),vs=o(te,"CODE",{});var Ml=p(vs);jt=t(Ml,"amp"),Ml.forEach(s),_t=t(te,` temporarily if it\u2019s
enabled, after moving the original `),ys=o(te,"CODE",{});var Hl=p(ys);vt=t(Hl,"forward"),Hl.forEach(s),yt=t(te," into a helper wrapper, like so:"),te.forEach(s),ua=c(e),_(de.$$.fragment,e),ia=c(e),U=o(e,"P",{});var qe=p(U);gt=t(qe,`Since the automatic detector only reports on inputs and outputs of full frames, once you know where to look, you may
want to analyse the intermediary stages of any specific `),gs=o(qe,"CODE",{});var Yl=p(gs);$t=t(Yl,"forward"),Yl.forEach(s),Dt=t(qe,` function as well. In such a case you can use the
`),$s=o(qe,"CODE",{});var Kl=p($s);Et=t(Kl,"detect_overflow"),Kl.forEach(s),kt=t(qe," helper function to inject the detector where you want it, for example:"),qe.forEach(s),ca=c(e),_(fe.$$.fragment,e),ha=c(e),S=o(e,"P",{});var le=p(S);Ot=t(le,"You can see that we added 2 of these and now we track if "),Ds=o(le,"CODE",{});var zl=p(Ds);xt=t(zl,"inf"),zl.forEach(s),Tt=t(le," or "),Es=o(le,"CODE",{});var Bl=p(Es);Ct=t(Bl,"nan"),Bl.forEach(s),Pt=t(le," for "),ks=o(le,"CODE",{});var Jl=p(ks);Lt=t(Jl,"forwarded_states"),Jl.forEach(s),At=t(le,` was detected
somewhere in between.`),le.forEach(s),da=c(e),Pe=o(e,"P",{});var Wl=p(Pe);St=t(Wl,"Actually, the detector already reports these because each of the calls in the example above is a `nn.Module\u201C, but\nlet\u2019s say if you had some local direct calculations this is how you\u2019d do that."),Wl.forEach(s),fa=c(e),Le=o(e,"P",{});var Ql=p(Le);Rt=t(Ql,`Additionally, if you\u2019re instantiating the debugger in your own code, you can adjust the number of frames printed from
its default, e.g.:`),Ql.forEach(s),ma=c(e),_(me.$$.fragment,e),ba=c(e),M=o(e,"H3",{class:!0});var Fa=p(M);Z=o(Fa,"A",{id:!0,class:!0,href:!0});var Vl=p(Z);Os=o(Vl,"SPAN",{});var Xl=p(Os);_(be.$$.fragment,Xl),Xl.forEach(s),Vl.forEach(s),Ft=c(Fa),xs=o(Fa,"SPAN",{});var Zl=p(xs);Nt=t(Zl,"Specific batch absolute mix and max value tracing"),Zl.forEach(s),Fa.forEach(s),wa=c(e),Ae=o(e,"P",{});var er=p(Ae);Gt=t(er,"The same debugging class can be used for per-batch tracing with the underflow/overflow detection feature turned off."),er.forEach(s),ja=c(e),ee=o(e,"P",{});var Na=p(ee);Ut=t(Na,"Let\u2019s say you want to watch the absolute min and max values for all the ingredients of each "),Ts=o(Na,"CODE",{});var sr=p(Ts);It=t(sr,"forward"),sr.forEach(s),qt=t(Na,` call of a given
batch, and only do that for batches 1 and 3. Then you instantiate this class as:`),Na.forEach(s),_a=c(e),_(we.$$.fragment,e),va=c(e),Se=o(e,"P",{});var ar=p(Se);Mt=t(ar,"And now full batches 1 and 3 will be traced using the same format as the underflow/overflow detector does."),ar.forEach(s),ya=c(e),Re=o(e,"P",{});var nr=p(Re);Ht=t(nr,"Batches are 0-indexed."),nr.forEach(s),ga=c(e),Fe=o(e,"P",{});var tr=p(Fe);Yt=t(tr,`This is helpful if you know that the program starts misbehaving after a certain batch number, so you can fast-forward
right to that area. Here is a sample truncated output for such configuration:`),tr.forEach(s),$a=c(e),_(je.$$.fragment,e),Da=c(e),Ne=o(e,"P",{});var lr=p(Ne);Kt=t(lr,`abs min  abs max  metadata
shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.47e+04 input[0]
5.36e-05 7.92e+02 output
[\u2026]
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
not a tensor output`),lr.forEach(s),Ea=c(e),_e=o(e,"P",{});var Qt=p(_e);Cs=o(Qt,"STRONG",{});var rr=p(Cs);Ps=o(rr,"EM",{});var or=p(Ps);zt=t(or,"Starting batch number=3"),or.forEach(s),rr.forEach(s),Bt=t(Qt,`
abs min  abs max  metadata
shared Embedding
1.01e-06 7.92e+02 weight
0.00e+00 2.78e+04 input[0]
5.36e-05 7.92e+02 output
[\u2026]`),Qt.forEach(s),ka=c(e),Ge=o(e,"P",{});var pr=p(Ge);Jt=t(pr,`Here you will get a huge number of frames dumped - as many as there were forward calls in your model, so it may or may
not what you want, but sometimes it can be easier to use for debugging purposes than a normal debugger. For example, if
a problem starts happening at batch number 150. So you can dump traces for batches 149 and 150 and compare where
numbers started to diverge.`),pr.forEach(s),Oa=c(e),Ue=o(e,"P",{});var ur=p(Ue);Wt=t(ur,"You can also specify the batch number after which to stop the training, with:"),ur.forEach(s),xa=c(e),_(ve.$$.fragment,e),this.h()},h(){E(h,"name","hf:doc:metadata"),E(h,"content",JSON.stringify(jr)),E(f,"id","debugging"),E(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(f,"href","#debugging"),E(d,"class","relative group"),E(Y,"id","underflow-and-overflow-detection"),E(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(Y,"href","#underflow-and-overflow-detection"),E(q,"class","relative group"),E(ge,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),E($e,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),E(Ee,"href","/docs/transformers/master/en/internal/trainer_utils#transformers.debug_utils.DebugUnderflowOverflow"),E(Z,"id","specific-batch-absolute-mix-and-max-value-tracing"),E(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),E(Z,"href","#specific-batch-absolute-mix-and-max-value-tracing"),E(M,"class","relative group")},m(e,l){a(document.head,h),u(e,w,l),u(e,d,l),a(d,f),a(f,x),v(b,x,null),a(d,D),a(d,N),a(N,Ga),u(e,Ss,l),u(e,q,l),a(q,Y),a(Y,Me),v(re,Me,null),a(q,Ua),a(q,He),a(He,Ia),u(e,Rs,l),v(K,e,l),u(e,Fs,l),v(z,e,l),u(e,Ns,l),v(B,e,l),u(e,Gs,l),u(e,C,l),a(C,qa),a(C,Ye),a(Ye,Ma),a(C,Ha),a(C,Ke),a(Ke,Ya),a(C,Ka),a(C,ze),a(ze,za),a(C,Ba),u(e,Us,l),u(e,J,l),a(J,Ja),a(J,ge),a(ge,Wa),a(J,Qa),u(e,Is,l),v(oe,e,l),u(e,qs,l),u(e,G,l),a(G,Va),a(G,Be),a(Be,Xa),a(G,Za),a(G,$e),a($e,en),a(G,sn),u(e,Ms,l),u(e,De,l),a(De,an),u(e,Hs,l),v(pe,e,l),u(e,Ys,l),u(e,T,l),a(T,Ee),a(Ee,nn),a(T,tn),a(T,Je),a(Je,ln),a(T,rn),a(T,We),a(We,on),a(T,pn),a(T,Qe),a(Qe,un),a(T,cn),u(e,Ks,l),v(ue,e,l),u(e,zs,l),u(e,ke,l),a(ke,hn),u(e,Bs,l),u(e,m,l),a(m,dn),a(m,Ve),a(Ve,fn),a(m,mn),a(m,Xe),a(Xe,bn),a(m,wn),a(m,Ze),a(Ze,jn),a(m,_n),a(m,es),a(es,vn),a(m,yn),a(m,ss),a(ss,gn),a(m,$n),a(m,as),a(as,Dn),a(m,En),a(m,ns),a(ns,kn),a(m,On),u(e,Js,l),u(e,W,l),a(W,xn),a(W,ts),a(ts,Tn),a(W,Cn),u(e,Ws,l),u(e,Oe,l),a(Oe,Pn),u(e,Qs,l),v(ie,e,l),u(e,Vs,l),u(e,xe,l),a(xe,Ln),u(e,Xs,l),u(e,P,l),a(P,An),a(P,ls),a(ls,Sn),a(P,Rn),a(P,rs),a(rs,Fn),a(P,Nn),a(P,os),a(os,Gn),a(P,Un),u(e,Zs,l),u(e,Te,l),a(Te,In),u(e,ea,l),v(ce,e,l),u(e,sa,l),u(e,k,l),a(k,qn),a(k,ps),a(ps,Mn),a(k,Hn),a(k,us),a(us,Yn),a(k,Kn),a(k,is),a(is,zn),a(k,Bn),a(k,cs),a(cs,Jn),a(k,Wn),a(k,hs),a(hs,Qn),a(k,Vn),u(e,aa,l),u(e,L,l),a(L,Xn),a(L,ds),a(ds,Zn),a(L,et),a(L,fs),a(fs,st),a(L,at),a(L,ms),a(ms,nt),a(L,tt),u(e,na,l),u(e,Ce,l),a(Ce,lt),u(e,ta,l),u(e,Q,l),a(Q,rt),a(Q,bs),a(bs,ot),a(Q,pt),u(e,la,l),v(he,e,l),u(e,ra,l),u(e,V,l),a(V,ut),a(V,ws),a(ws,it),a(V,ct),u(e,oa,l),u(e,X,l),a(X,ht),a(X,js),a(js,dt),a(X,ft),u(e,pa,l),u(e,A,l),a(A,mt),a(A,_s),a(_s,bt),a(A,wt),a(A,vs),a(vs,jt),a(A,_t),a(A,ys),a(ys,vt),a(A,yt),u(e,ua,l),v(de,e,l),u(e,ia,l),u(e,U,l),a(U,gt),a(U,gs),a(gs,$t),a(U,Dt),a(U,$s),a($s,Et),a(U,kt),u(e,ca,l),v(fe,e,l),u(e,ha,l),u(e,S,l),a(S,Ot),a(S,Ds),a(Ds,xt),a(S,Tt),a(S,Es),a(Es,Ct),a(S,Pt),a(S,ks),a(ks,Lt),a(S,At),u(e,da,l),u(e,Pe,l),a(Pe,St),u(e,fa,l),u(e,Le,l),a(Le,Rt),u(e,ma,l),v(me,e,l),u(e,ba,l),u(e,M,l),a(M,Z),a(Z,Os),v(be,Os,null),a(M,Ft),a(M,xs),a(xs,Nt),u(e,wa,l),u(e,Ae,l),a(Ae,Gt),u(e,ja,l),u(e,ee,l),a(ee,Ut),a(ee,Ts),a(Ts,It),a(ee,qt),u(e,_a,l),v(we,e,l),u(e,va,l),u(e,Se,l),a(Se,Mt),u(e,ya,l),u(e,Re,l),a(Re,Ht),u(e,ga,l),u(e,Fe,l),a(Fe,Yt),u(e,$a,l),v(je,e,l),u(e,Da,l),u(e,Ne,l),a(Ne,Kt),u(e,Ea,l),u(e,_e,l),a(_e,Cs),a(Cs,Ps),a(Ps,zt),a(_e,Bt),u(e,ka,l),u(e,Ge,l),a(Ge,Jt),u(e,Oa,l),u(e,Ue,l),a(Ue,Wt),u(e,xa,l),v(ve,e,l),Ta=!0},p(e,[l]){const ye={};l&2&&(ye.$$scope={dirty:l,ctx:e}),K.$set(ye);const Ls={};l&2&&(Ls.$$scope={dirty:l,ctx:e}),z.$set(Ls);const As={};l&2&&(As.$$scope={dirty:l,ctx:e}),B.$set(As)},i(e){Ta||(y(b.$$.fragment,e),y(re.$$.fragment,e),y(K.$$.fragment,e),y(z.$$.fragment,e),y(B.$$.fragment,e),y(oe.$$.fragment,e),y(pe.$$.fragment,e),y(ue.$$.fragment,e),y(ie.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(de.$$.fragment,e),y(fe.$$.fragment,e),y(me.$$.fragment,e),y(be.$$.fragment,e),y(we.$$.fragment,e),y(je.$$.fragment,e),y(ve.$$.fragment,e),Ta=!0)},o(e){g(b.$$.fragment,e),g(re.$$.fragment,e),g(K.$$.fragment,e),g(z.$$.fragment,e),g(B.$$.fragment,e),g(oe.$$.fragment,e),g(pe.$$.fragment,e),g(ue.$$.fragment,e),g(ie.$$.fragment,e),g(ce.$$.fragment,e),g(he.$$.fragment,e),g(de.$$.fragment,e),g(fe.$$.fragment,e),g(me.$$.fragment,e),g(be.$$.fragment,e),g(we.$$.fragment,e),g(je.$$.fragment,e),g(ve.$$.fragment,e),Ta=!1},d(e){s(h),e&&s(w),e&&s(d),$(b),e&&s(Ss),e&&s(q),$(re),e&&s(Rs),$(K,e),e&&s(Fs),$(z,e),e&&s(Ns),$(B,e),e&&s(Gs),e&&s(C),e&&s(Us),e&&s(J),e&&s(Is),$(oe,e),e&&s(qs),e&&s(G),e&&s(Ms),e&&s(De),e&&s(Hs),$(pe,e),e&&s(Ys),e&&s(T),e&&s(Ks),$(ue,e),e&&s(zs),e&&s(ke),e&&s(Bs),e&&s(m),e&&s(Js),e&&s(W),e&&s(Ws),e&&s(Oe),e&&s(Qs),$(ie,e),e&&s(Vs),e&&s(xe),e&&s(Xs),e&&s(P),e&&s(Zs),e&&s(Te),e&&s(ea),$(ce,e),e&&s(sa),e&&s(k),e&&s(aa),e&&s(L),e&&s(na),e&&s(Ce),e&&s(ta),e&&s(Q),e&&s(la),$(he,e),e&&s(ra),e&&s(V),e&&s(oa),e&&s(X),e&&s(pa),e&&s(A),e&&s(ua),$(de,e),e&&s(ia),e&&s(U),e&&s(ca),$(fe,e),e&&s(ha),e&&s(S),e&&s(da),e&&s(Pe),e&&s(fa),e&&s(Le),e&&s(ma),$(me,e),e&&s(ba),e&&s(M),$(be),e&&s(wa),e&&s(Ae),e&&s(ja),e&&s(ee),e&&s(_a),$(we,e),e&&s(va),e&&s(Se),e&&s(ya),e&&s(Re),e&&s(ga),e&&s(Fe),e&&s($a),$(je,e),e&&s(Da),e&&s(Ne),e&&s(Ea),e&&s(_e),e&&s(ka),e&&s(Ge),e&&s(Oa),e&&s(Ue),e&&s(xa),$(ve,e)}}}const jr={local:"debugging",sections:[{local:"underflow-and-overflow-detection",sections:[{local:"specific-batch-absolute-mix-and-max-value-tracing",title:"Specific batch absolute mix and max value tracing"}],title:"Underflow and Overflow Detection"}],title:"Debugging"};function _r(I,h,w){let{fw:d}=h;return I.$$set=f=>{"fw"in f&&w(0,d=f.fw)},[d]}class Er extends ir{constructor(h){super();cr(this,h,_r,wr,hr,{fw:0})}}export{Er as default,jr as metadata};
