import{S as Rr,i as Sr,s as Or,e as s,k as m,w as $,t as p,M as Gr,c as r,d as o,m as l,a as n,x as v,h as f,b as g,G as e,g as d,y as b,q as x,o as y,B as w,v as Vr,L as wt}from"../../chunks/vendor-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as D}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as yt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Wr(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers import BertModel
from transformers.utils.fx import symbolic_trace
from optimum.fx.optimization import ChangeTrueDivToMulByInverse, MergeLinears, compose

model = BertModel.from_pretrained("bert-base-uncased")
traced = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "token_type_ids"],
)
composition = compose(ChangeTrueDivToMulByInverse(), MergeLinears())
transformed_model = composition(traced)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> ChangeTrueDivToMulByInverse, MergeLinears, compose

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>traced = symbolic_trace(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
<span class="hljs-meta">&gt;&gt;&gt; </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>composition = compose(ChangeTrueDivToMulByInverse(), MergeLinears())
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = composition(traced)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Hr(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers import BertModel
from transformers.utils.fx import symbolic_trace
from optimum.fx.optimization import MergeLinears

model = BertModel.from_pretrained("bert-base-uncased")
traced = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "token_type_ids"],
)
transformation = MergeLinears()
transformed_model = transformation(traced)
restored_model = transformation(transformed_model, reverse=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> MergeLinears

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>traced = symbolic_trace(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
<span class="hljs-meta">&gt;&gt;&gt; </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transformation = MergeLinears()
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = transformation(traced)
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Ur(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers import BertModel
from transformers.utils.fx import symbolic_trace
from optimum.fx.optimization import FuseBiasInLinear

model = BertModel.from_pretrained("bert-base-uncased")
traced = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "token_type_ids"],
)
transformation = FuseBiasInLinear()
transformed_model = transformation(traced)
restored_model = transformation(transformed_model, reverse=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> FuseBiasInLinear

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>traced = symbolic_trace(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
<span class="hljs-meta">&gt;&gt;&gt; </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transformation = FuseBiasInLinear()
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = transformation(traced)
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Jr(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers import BertModel
from transformers.utils.fx import symbolic_trace
from optimum.fx.optimization import ChangeTrueDivToMulByInverse

model = BertModel.from_pretrained("bert-base-uncased")
traced = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "token_type_ids"],
)
transformation = ChangeTrueDivToMulByInverse()
transformed_model = transformation(traced)
restored_model = transformation(transformed_model, reverse=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> ChangeTrueDivToMulByInverse

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>traced = symbolic_trace(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
<span class="hljs-meta">&gt;&gt;&gt; </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transformation = ChangeTrueDivToMulByInverse()
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = transformation(traced)
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Kr(z){let c,j;return c=new D({props:{code:`     Conv2d
     /   \\
    /     \\
ReLU   BatchNorm2d`,highlighted:`     Co<span class="hljs-symbol">nv2</span>d
     /   \\
    /     \\
ReLU   Batch<span class="hljs-symbol">Norm2</span>d`}}),{c(){$(c.$$.fragment)},l(u){v(c.$$.fragment,u)},m(u,h){b(c,u,h),j=!0},p:wt,i(u){j||(x(c.$$.fragment,u),j=!0)},o(u){y(c.$$.fragment,u),j=!1},d(u){w(c,u)}}}function Qr(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers.utils.fx import symbolic_trace
from transformers import AutoModelForImageClassification

from optimum.fx.optimization import FuseBatchNorm2dInConv2d

model = AutoModelForImageClassification.from_pretrained("microsoft/resnet-50")
model.eval()

traced_model = symbolic_trace(
    model,
    input_names=["pixel_values"],
    disable_check=True
)

transformation = FuseBatchNorm2dInConv2d()
transformed_model = transformation(traced_model)`,highlighted:`<span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

<span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> FuseBatchNorm2dInConv2d

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/resnet-50&quot;</span>)
model.<span class="hljs-built_in">eval</span>()

traced_model = symbolic_trace(
    model,
    input_names=[<span class="hljs-string">&quot;pixel_values&quot;</span>],
    disable_check=<span class="hljs-literal">True</span>
)

transformation = FuseBatchNorm2dInConv2d()
transformed_model = transformation(traced_model)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Xr(z){let c,j;return c=new D({props:{code:`     Linear
     /   \\
    /     \\
ReLU   BatchNorm1d`,highlighted:`     Linear
     /   <span class="hljs-string">\\</span>
    /     <span class="hljs-string">\\</span>
ReLU   BatchNorm1d`}}),{c(){$(c.$$.fragment)},l(u){v(c.$$.fragment,u)},m(u,h){b(c,u,h),j=!0},p:wt,i(u){j||(x(c.$$.fragment,u),j=!0)},o(u){y(c.$$.fragment,u),j=!1},d(u){w(c,u)}}}function Yr(z){let c,j,u,h,T;return h=new D({props:{code:`from transformers.utils.fx import symbolic_trace
from transformers import AutoModel

from optimum.fx.optimization import FuseBatchNorm1dInLinear

model = AutoModel.from_pretrained("nvidia/groupvit-gcc-yfcc")
model.eval()

traced_model = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "pixel_values"],
    disable_check=True
)

transformation = FuseBatchNorm1dInLinear()
transformed_model = transformation(traced_model)`,highlighted:`<span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

<span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> FuseBatchNorm1dInLinear

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;nvidia/groupvit-gcc-yfcc&quot;</span>)
model.<span class="hljs-built_in">eval</span>()

traced_model = symbolic_trace(
    model,
    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;pixel_values&quot;</span>],
    disable_check=<span class="hljs-literal">True</span>
)

transformation = FuseBatchNorm1dInLinear()
transformed_model = transformation(traced_model)`}}),{c(){c=s("p"),j=p("Example:"),u=m(),$(h.$$.fragment)},l(a){c=r(a,"P",{});var _=n(c);j=f(_,"Example:"),_.forEach(o),u=l(a),v(h.$$.fragment,a)},m(a,_){d(a,c,_),e(c,j),d(a,u,_),b(h,a,_),T=!0},p:wt,i(a){T||(x(h.$$.fragment,a),T=!0)},o(a){y(h.$$.fragment,a),T=!1},d(a){a&&o(c),a&&o(u),w(h,a)}}}function Zr(z){let c,j,u,h,T,a,_,ke,Jo,lo,Z,Ko,ze,Qo,Xo,po,W,tt,Ee,jt,Yo,Me,Zo,fo,ee,ta,co,H,et,Ie,Tt,ea,Be,oa,ho,O,aa,oe,sa,ra,ae,na,ia,uo,se,ma,go,kt,_o,re,la,$o,zt,vo,U,ot,Le,Et,pa,qe,fa,bo,q,ca,ne,da,ha,ie,ua,ga,me,_a,$a,xo,le,va,yo,Mt,wo,J,at,Ae,It,ba,De,xa,jo,st,ya,pe,wa,ja,To,Bt,ko,K,rt,Ce,Lt,Ta,Fe,ka,zo,Q,nt,Ne,qt,za,Pe,Ea,Eo,k,At,Ma,Re,Ia,Ba,Dt,La,fe,qa,Aa,Da,ce,Ct,Ca,de,Ft,Fa,it,Nt,Na,Se,Pa,Ra,he,Pt,Sa,ue,Rt,Mo,E,St,Oa,Oe,Ga,Va,X,Wa,ge,Ha,Ua,_e,Ja,Ka,Qa,$e,Ot,Xa,mt,Gt,Ya,Ge,Za,ts,ve,Vt,Io,C,Wt,es,Ve,os,as,lt,Bo,Y,pt,We,Ht,ss,He,rs,Lo,F,Ut,ns,Ue,is,ms,ft,qo,N,Jt,ls,Je,ps,fs,ct,Ao,P,Kt,cs,Ke,ds,hs,dt,Do,B,Qt,us,R,gs,Qe,_s,$s,Xe,vs,bs,Ye,xs,ys,ws,Ze,js,Ts,ht,ks,ut,Co,L,Xt,zs,S,Es,to,Ms,Is,eo,Bs,Ls,oo,qs,As,Ds,ao,Cs,Fs,gt,Ns,_t,Fo;return a=new xt({}),jt=new xt({}),Tt=new xt({}),kt=new D({props:{code:`from optimum.fx.optimization import Transformation

class ChangeMulToAdd(Transformation):
    def transform(self, graph_module):
        for node in graph_module.graph.nodes:
            if node.op == "call_function" and node.target == operator.mul:
                node.target = operator.add
        return graph_module`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> Transformation

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">ChangeMulToAdd</span>(<span class="hljs-title class_ inherited__">Transformation</span>):
<span class="hljs-meta">&gt;&gt;&gt; </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">transform</span>(<span class="hljs-params">self, graph_module</span>):
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">for</span> node <span class="hljs-keyword">in</span> graph_module.graph.nodes:
<span class="hljs-meta">&gt;&gt;&gt; </span>            <span class="hljs-keyword">if</span> node.op == <span class="hljs-string">&quot;call_function&quot;</span> <span class="hljs-keyword">and</span> node.target == operator.mul:
<span class="hljs-meta">&gt;&gt;&gt; </span>                node.target = operator.add
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">return</span> graph_module`}}),zt=new D({props:{code:`from transformers import BertModel
from transformers.utils.fx import symbolic_trace

model = BertModel.from_pretrained("bert-base-uncased")
traced = symbolic_trace(
    model,
    input_names=["input_ids", "attention_mask", "token_type_ids"],
)

transformation = ChangeMulToAdd()
transformed_model = transformation(traced)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.utils.fx <span class="hljs-keyword">import</span> symbolic_trace

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>traced = symbolic_trace(
<span class="hljs-meta">&gt;&gt;&gt; </span>    model,
<span class="hljs-meta">&gt;&gt;&gt; </span>    input_names=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
<span class="hljs-meta">&gt;&gt;&gt; </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>transformation = ChangeMulToAdd()
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = transformation(traced)`}}),Et=new xt({}),Mt=new D({props:{code:`from optimum.fx.optimization import ReversibleTransformation

class MulToMulTimesTwo(ReversibleTransformation):
    def transform(self, graph_module):
        for node in graph_module.graph.nodes:
            if node.op == "call_function" and node.target == operator.mul:
                x, y = node.args
                node.args = (2 * x, y)
        return graph_module

    def reverse(self, graph_module):
        for node in graph_module.graph.nodes:
            if node.op == "call_function" and node.target == operator.mul:
                x, y = node.args
                node.args = (x / 2, y)
        return graph_module`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> ReversibleTransformation

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">MulToMulTimesTwo</span>(<span class="hljs-title class_ inherited__">ReversibleTransformation</span>):
<span class="hljs-meta">&gt;&gt;&gt; </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">transform</span>(<span class="hljs-params">self, graph_module</span>):
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">for</span> node <span class="hljs-keyword">in</span> graph_module.graph.nodes:
<span class="hljs-meta">&gt;&gt;&gt; </span>            <span class="hljs-keyword">if</span> node.op == <span class="hljs-string">&quot;call_function&quot;</span> <span class="hljs-keyword">and</span> node.target == operator.mul:
<span class="hljs-meta">&gt;&gt;&gt; </span>                x, y = node.args
<span class="hljs-meta">&gt;&gt;&gt; </span>                node.args = (<span class="hljs-number">2</span> * x, y)
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">return</span> graph_module

<span class="hljs-meta">&gt;&gt;&gt; </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">reverse</span>(<span class="hljs-params">self, graph_module</span>):
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">for</span> node <span class="hljs-keyword">in</span> graph_module.graph.nodes:
<span class="hljs-meta">&gt;&gt;&gt; </span>            <span class="hljs-keyword">if</span> node.op == <span class="hljs-string">&quot;call_function&quot;</span> <span class="hljs-keyword">and</span> node.target == operator.mul:
<span class="hljs-meta">&gt;&gt;&gt; </span>                x, y = node.args
<span class="hljs-meta">&gt;&gt;&gt; </span>                node.args = (x / <span class="hljs-number">2</span>, y)
<span class="hljs-meta">&gt;&gt;&gt; </span>        <span class="hljs-keyword">return</span> graph_module`}}),It=new xt({}),Bt=new D({props:{code:`from optimum.fx.optimization import compose
composition = compose(MulToMulTimesTwo(), ChangeMulToAdd())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.fx.optimization <span class="hljs-keyword">import</span> compose
<span class="hljs-meta">&gt;&gt;&gt; </span>composition = compose(MulToMulTimesTwo(), ChangeMulToAdd())`}}),Lt=new xt({}),qt=new xt({}),At=new I({props:{name:"class optimum.fx.optimization.Transformation",anchor:"optimum.fx.optimization.Transformation",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L89"}}),Ct=new I({props:{name:"__call__",anchor:"optimum.fx.optimization.Transformation.__call__",parameters:[{name:"graph_module",val:": GraphModule"},{name:"lint_and_recompile",val:": bool = True"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.__call__.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"},{anchor:"optimum.fx.optimization.Transformation.__call__.lint_and_recompile",description:`<strong>lint_and_recompile</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the transformed module should be linted and recompiled.
This can be set to <code>False</code> when chaining transformations together to perform this operation only once.`,name:"lint_and_recompile"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L112",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),Ft=new I({props:{name:"get_transformed_nodes",anchor:"optimum.fx.optimization.Transformation.get_transformed_nodes",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.get_transformed_nodes.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The graph_module to get the nodes from.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L165",returnDescription:`
<p>Gives the list of nodes that were transformed by the transformation.</p>
`,returnType:`
<p><code>List[torch.fx.Node]</code></p>
`}}),Nt=new I({props:{name:"mark_as_transformed",anchor:"optimum.fx.optimization.Transformation.mark_as_transformed",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.mark_as_transformed.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to mark as transformed.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L141"}}),Pt=new I({props:{name:"transform",anchor:"optimum.fx.optimization.Transformation.transform",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.transform.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L99",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),Rt=new I({props:{name:"transformed",anchor:"optimum.fx.optimization.Transformation.transformed",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.transformed.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to check.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L153",returnDescription:`
<p>Specifies whether the node was transformed by this transformation or not.</p>
`,returnType:`
<p><code>bool</code></p>
`}}),St=new I({props:{name:"class optimum.fx.optimization.ReversibleTransformation",anchor:"optimum.fx.optimization.ReversibleTransformation",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L180"}}),Ot=new I({props:{name:"__call__",anchor:"optimum.fx.optimization.ReversibleTransformation.__call__",parameters:[{name:"graph_module",val:": GraphModule"},{name:"lint_and_recompile",val:": bool = True"},{name:"reverse",val:": bool = False"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"},{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.lint_and_recompile",description:`<strong>lint_and_recompile</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the transformed module should be linted and recompiled.
This can be set to <code>False</code> when chaining transformations together to perform this operation only once.`,name:"lint_and_recompile"},{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.reverse",description:`<strong>reverse</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the reverse transformation is performed.`,name:"reverse"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L201",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),Gt=new I({props:{name:"mark_as_restored",anchor:"optimum.fx.optimization.ReversibleTransformation.mark_as_restored",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.mark_as_restored.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to mark as restored.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L226"}}),Vt=new I({props:{name:"reverse",anchor:"optimum.fx.optimization.ReversibleTransformation.reverse",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.reverse.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L188",returnDescription:`
<p>The reverse transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),Wt=new I({props:{name:"optimum.fx.optimization.compose",anchor:"optimum.fx.optimization.compose",parameters:[{name:"*args",val:": Transformation"},{name:"inplace",val:": bool = True"}],parametersDescription:[{anchor:"optimum.fx.optimization.compose.args",description:`<strong>args</strong> (<a href="/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation">Transformation</a>) &#x2014;
The transformations to compose together.`,name:"args"},{anchor:"optimum.fx.optimization.compose.inplace",description:`<strong>inplace</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the resulting transformation should be inplace, or create a new graph module.`,name:"inplace"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L725",returnDescription:`
<p>The composition transformation object.</p>
`}}),lt=new yt({props:{anchor:"optimum.fx.optimization.compose.example",$$slots:{default:[Wr]},$$scope:{ctx:z}}}),Ht=new xt({}),Ut=new I({props:{name:"class optimum.fx.optimization.MergeLinears",anchor:"optimum.fx.optimization.MergeLinears",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.MergeLinears.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L241"}}),ft=new yt({props:{anchor:"optimum.fx.optimization.MergeLinears.example",$$slots:{default:[Hr]},$$scope:{ctx:z}}}),Jt=new I({props:{name:"class optimum.fx.optimization.FuseBiasInLinear",anchor:"optimum.fx.optimization.FuseBiasInLinear",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBiasInLinear.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L397"}}),ct=new yt({props:{anchor:"optimum.fx.optimization.FuseBiasInLinear.example",$$slots:{default:[Ur]},$$scope:{ctx:z}}}),Kt=new I({props:{name:"class optimum.fx.optimization.ChangeTrueDivToMulByInverse",anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L451"}}),dt=new yt({props:{anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse.example",$$slots:{default:[Jr]},$$scope:{ctx:z}}}),Qt=new I({props:{name:"class optimum.fx.optimization.FuseBatchNorm2dInConv2d",anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L482"}}),ht=new yt({props:{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.example",$$slots:{default:[Kr]},$$scope:{ctx:z}}}),ut=new yt({props:{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.example-2",$$slots:{default:[Qr]},$$scope:{ctx:z}}}),Xt=new I({props:{name:"class optimum.fx.optimization.FuseBatchNorm1dInLinear",anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/fx/optimization/transformations.py#L565"}}),gt=new yt({props:{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.example",$$slots:{default:[Xr]},$$scope:{ctx:z}}}),_t=new yt({props:{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.example-2",$$slots:{default:[Yr]},$$scope:{ctx:z}}}),{c(){c=s("meta"),j=m(),u=s("h1"),h=s("a"),T=s("span"),$(a.$$.fragment),_=m(),ke=s("span"),Jo=p("Optimization"),lo=m(),Z=s("p"),Ko=p("The "),ze=s("code"),Qo=p("optimum.fx.optimization"),Xo=p(" module provides a set of torch.fx graph transformations, along with classes and functions to write your own transformations and compose them."),po=m(),W=s("h2"),tt=s("a"),Ee=s("span"),$(jt.$$.fragment),Yo=m(),Me=s("span"),Zo=p("The transformation guide"),fo=m(),ee=s("p"),ta=p("In \u{1F917} Optimum, there are two kinds of transformations: reversible and non-reversible transformations."),co=m(),H=s("h3"),et=s("a"),Ie=s("span"),$(Tt.$$.fragment),ea=m(),Be=s("span"),oa=p("Write a non-reversible transformation"),ho=m(),O=s("p"),aa=p("The most basic case of transformations is non-reversible transformations. Those transformations cannot be reversed, meaning that after applying them to a graph module, there is no way to get the original model back. To implement such transformations in \u{1F917} Optimum, it is very easy: you just need to subclass "),oe=s("a"),sa=p("Transformation"),ra=p(" and implement the "),ae=s("a"),na=p("transform()"),ia=p(" method."),uo=m(),se=s("p"),ma=p("For instance, the following transformation changes all the multiplications to additions:"),go=m(),$(kt.$$.fragment),_o=m(),re=s("p"),la=p("After implementing it, your transformation can be used as a regular function:"),$o=m(),$(zt.$$.fragment),vo=m(),U=s("h3"),ot=s("a"),Le=s("span"),$(Et.$$.fragment),pa=m(),qe=s("span"),fa=p("Write a reversible transformation"),bo=m(),q=s("p"),ca=p("A reversible transformation implements both the transformation and its reverse, allowing to retrieve the original model from the transformed one. To implement such transformation, you need to subclass "),ne=s("a"),da=p("ReversibleTransformation"),ha=p(" and implement the "),ie=s("a"),ua=p("transform()"),ga=p(" and "),me=s("a"),_a=p("reverse()"),$a=p(" methods."),xo=m(),le=s("p"),va=p("For instance, the following transformation is reversible:"),yo=m(),$(Mt.$$.fragment),wo=m(),J=s("h3"),at=s("a"),Ae=s("span"),$(It.$$.fragment),ba=m(),De=s("span"),xa=p("Composing transformations together"),jo=m(),st=s("p"),ya=p("As applying mutilple transformations in chain is needed more often that not, "),pe=s("a"),wa=p("compose()"),ja=p(" is provided. It is an utility function that allows you to create a transformation by chaining multiple other transformations."),To=m(),$(Bt.$$.fragment),ko=m(),K=s("h2"),rt=s("a"),Ce=s("span"),$(Lt.$$.fragment),Ta=m(),Fe=s("span"),ka=p("The Optimization API"),zo=m(),Q=s("h3"),nt=s("a"),Ne=s("span"),$(qt.$$.fragment),za=m(),Pe=s("span"),Ea=p("Main classes and functions"),Eo=m(),k=s("div"),$(At.$$.fragment),Ma=m(),Re=s("p"),Ia=p("A torch.fx graph transformation."),Ba=m(),Dt=s("p"),La=p("It  must implemement the "),fe=s("a"),qa=p("transform()"),Aa=p(` method, and be used as a
callable.`),Da=m(),ce=s("div"),$(Ct.$$.fragment),Ca=m(),de=s("div"),$(Ft.$$.fragment),Fa=m(),it=s("div"),$(Nt.$$.fragment),Na=m(),Se=s("p"),Pa=p("Marks a node as transformed by this transformation."),Ra=m(),he=s("div"),$(Pt.$$.fragment),Sa=m(),ue=s("div"),$(Rt.$$.fragment),Mo=m(),E=s("div"),$(St.$$.fragment),Oa=m(),Oe=s("p"),Ga=p("A torch.fx graph transformation that is reversible."),Va=m(),X=s("p"),Wa=p("It must implemement the "),ge=s("a"),Ha=p("transform()"),Ua=p(` and
`),_e=s("a"),Ja=p("reverse()"),Ka=p(" methods, and be used as a callable."),Qa=m(),$e=s("div"),$(Ot.$$.fragment),Xa=m(),mt=s("div"),$(Gt.$$.fragment),Ya=m(),Ge=s("p"),Za=p("Marks a node as restored back to its original state."),ts=m(),ve=s("div"),$(Vt.$$.fragment),Io=m(),C=s("div"),$(Wt.$$.fragment),es=m(),Ve=s("p"),os=p("Composes a list of transformations together."),as=m(),$(lt.$$.fragment),Bo=m(),Y=s("h3"),pt=s("a"),We=s("span"),$(Ht.$$.fragment),ss=m(),He=s("span"),rs=p("Transformations"),Lo=m(),F=s("div"),$(Ut.$$.fragment),ns=m(),Ue=s("p"),is=p("Transformation that merges linear layers that take the same input into one big linear layer."),ms=m(),$(ft.$$.fragment),qo=m(),N=s("div"),$(Jt.$$.fragment),ls=m(),Je=s("p"),ps=p("Transformation that fuses the bias to the weight in torch.nn.Linear."),fs=m(),$(ct.$$.fragment),Ao=m(),P=s("div"),$(Kt.$$.fragment),cs=m(),Ke=s("p"),ds=p(`Transformation that changes truediv nodes to multiplication by the inverse nodes when the denominator is static.
For example, that is sometimes the case for the scaling factor in attention layers.`),hs=m(),$(dt.$$.fragment),Do=m(),B=s("div"),$(Qt.$$.fragment),us=m(),R=s("p"),gs=p("Transformation that fuses "),Qe=s("code"),_s=p("nn.BatchNorm2d"),$s=p(" following "),Xe=s("code"),vs=p("nn.Conv2d"),bs=p(" into a single "),Ye=s("code"),xs=p("nn.Conv2d"),ys=p(`.
The fusion will be done only if the convolution has the batch normalization as sole following node.`),ws=m(),Ze=s("p"),js=p("For example, fusion will not be done in the case"),Ts=m(),$(ht.$$.fragment),ks=m(),$(ut.$$.fragment),Co=m(),L=s("div"),$(Xt.$$.fragment),zs=m(),S=s("p"),Es=p("Transformation that fuses "),to=s("code"),Ms=p("nn.BatchNorm1d"),Is=p(" following or preceding "),eo=s("code"),Bs=p("nn.Linear"),Ls=p(" into a single "),oo=s("code"),qs=p("nn.Linear"),As=p(`.
The fusion will be done only if the linear layer has the batch normalization as sole following node, or the batch normalization
has the linear layer as sole following node.`),Ds=m(),ao=s("p"),Cs=p("For example, fusion will not be done in the case"),Fs=m(),$(gt.$$.fragment),Ns=m(),$(_t.$$.fragment),this.h()},l(t){const i=Gr('[data-svelte="svelte-1phssyn"]',document.head);c=r(i,"META",{name:!0,content:!0}),i.forEach(o),j=l(t),u=r(t,"H1",{class:!0});var Yt=n(u);h=r(Yt,"A",{id:!0,class:!0,href:!0});var so=n(h);T=r(so,"SPAN",{});var ro=n(T);v(a.$$.fragment,ro),ro.forEach(o),so.forEach(o),_=l(Yt),ke=r(Yt,"SPAN",{});var no=n(ke);Jo=f(no,"Optimization"),no.forEach(o),Yt.forEach(o),lo=l(t),Z=r(t,"P",{});var Zt=n(Z);Ko=f(Zt,"The "),ze=r(Zt,"CODE",{});var io=n(ze);Qo=f(io,"optimum.fx.optimization"),io.forEach(o),Xo=f(Zt," module provides a set of torch.fx graph transformations, along with classes and functions to write your own transformations and compose them."),Zt.forEach(o),po=l(t),W=r(t,"H2",{class:!0});var te=n(W);tt=r(te,"A",{id:!0,class:!0,href:!0});var mo=n(tt);Ee=r(mo,"SPAN",{});var Ps=n(Ee);v(jt.$$.fragment,Ps),Ps.forEach(o),mo.forEach(o),Yo=l(te),Me=r(te,"SPAN",{});var Rs=n(Me);Zo=f(Rs,"The transformation guide"),Rs.forEach(o),te.forEach(o),fo=l(t),ee=r(t,"P",{});var Ss=n(ee);ta=f(Ss,"In \u{1F917} Optimum, there are two kinds of transformations: reversible and non-reversible transformations."),Ss.forEach(o),co=l(t),H=r(t,"H3",{class:!0});var No=n(H);et=r(No,"A",{id:!0,class:!0,href:!0});var Os=n(et);Ie=r(Os,"SPAN",{});var Gs=n(Ie);v(Tt.$$.fragment,Gs),Gs.forEach(o),Os.forEach(o),ea=l(No),Be=r(No,"SPAN",{});var Vs=n(Be);oa=f(Vs,"Write a non-reversible transformation"),Vs.forEach(o),No.forEach(o),ho=l(t),O=r(t,"P",{});var be=n(O);aa=f(be,"The most basic case of transformations is non-reversible transformations. Those transformations cannot be reversed, meaning that after applying them to a graph module, there is no way to get the original model back. To implement such transformations in \u{1F917} Optimum, it is very easy: you just need to subclass "),oe=r(be,"A",{href:!0});var Ws=n(oe);sa=f(Ws,"Transformation"),Ws.forEach(o),ra=f(be," and implement the "),ae=r(be,"A",{href:!0});var Hs=n(ae);na=f(Hs,"transform()"),Hs.forEach(o),ia=f(be," method."),be.forEach(o),uo=l(t),se=r(t,"P",{});var Us=n(se);ma=f(Us,"For instance, the following transformation changes all the multiplications to additions:"),Us.forEach(o),go=l(t),v(kt.$$.fragment,t),_o=l(t),re=r(t,"P",{});var Js=n(re);la=f(Js,"After implementing it, your transformation can be used as a regular function:"),Js.forEach(o),$o=l(t),v(zt.$$.fragment,t),vo=l(t),U=r(t,"H3",{class:!0});var Po=n(U);ot=r(Po,"A",{id:!0,class:!0,href:!0});var Ks=n(ot);Le=r(Ks,"SPAN",{});var Qs=n(Le);v(Et.$$.fragment,Qs),Qs.forEach(o),Ks.forEach(o),pa=l(Po),qe=r(Po,"SPAN",{});var Xs=n(qe);fa=f(Xs,"Write a reversible transformation"),Xs.forEach(o),Po.forEach(o),bo=l(t),q=r(t,"P",{});var $t=n(q);ca=f($t,"A reversible transformation implements both the transformation and its reverse, allowing to retrieve the original model from the transformed one. To implement such transformation, you need to subclass "),ne=r($t,"A",{href:!0});var Ys=n(ne);da=f(Ys,"ReversibleTransformation"),Ys.forEach(o),ha=f($t," and implement the "),ie=r($t,"A",{href:!0});var Zs=n(ie);ua=f(Zs,"transform()"),Zs.forEach(o),ga=f($t," and "),me=r($t,"A",{href:!0});var tr=n(me);_a=f(tr,"reverse()"),tr.forEach(o),$a=f($t," methods."),$t.forEach(o),xo=l(t),le=r(t,"P",{});var er=n(le);va=f(er,"For instance, the following transformation is reversible:"),er.forEach(o),yo=l(t),v(Mt.$$.fragment,t),wo=l(t),J=r(t,"H3",{class:!0});var Ro=n(J);at=r(Ro,"A",{id:!0,class:!0,href:!0});var or=n(at);Ae=r(or,"SPAN",{});var ar=n(Ae);v(It.$$.fragment,ar),ar.forEach(o),or.forEach(o),ba=l(Ro),De=r(Ro,"SPAN",{});var sr=n(De);xa=f(sr,"Composing transformations together"),sr.forEach(o),Ro.forEach(o),jo=l(t),st=r(t,"P",{});var So=n(st);ya=f(So,"As applying mutilple transformations in chain is needed more often that not, "),pe=r(So,"A",{href:!0});var rr=n(pe);wa=f(rr,"compose()"),rr.forEach(o),ja=f(So," is provided. It is an utility function that allows you to create a transformation by chaining multiple other transformations."),So.forEach(o),To=l(t),v(Bt.$$.fragment,t),ko=l(t),K=r(t,"H2",{class:!0});var Oo=n(K);rt=r(Oo,"A",{id:!0,class:!0,href:!0});var nr=n(rt);Ce=r(nr,"SPAN",{});var ir=n(Ce);v(Lt.$$.fragment,ir),ir.forEach(o),nr.forEach(o),Ta=l(Oo),Fe=r(Oo,"SPAN",{});var mr=n(Fe);ka=f(mr,"The Optimization API"),mr.forEach(o),Oo.forEach(o),zo=l(t),Q=r(t,"H3",{class:!0});var Go=n(Q);nt=r(Go,"A",{id:!0,class:!0,href:!0});var lr=n(nt);Ne=r(lr,"SPAN",{});var pr=n(Ne);v(qt.$$.fragment,pr),pr.forEach(o),lr.forEach(o),za=l(Go),Pe=r(Go,"SPAN",{});var fr=n(Pe);Ea=f(fr,"Main classes and functions"),fr.forEach(o),Go.forEach(o),Eo=l(t),k=r(t,"DIV",{class:!0});var M=n(k);v(At.$$.fragment,M),Ma=l(M),Re=r(M,"P",{});var cr=n(Re);Ia=f(cr,"A torch.fx graph transformation."),cr.forEach(o),Ba=l(M),Dt=r(M,"P",{});var Vo=n(Dt);La=f(Vo,"It  must implemement the "),fe=r(Vo,"A",{href:!0});var dr=n(fe);qa=f(dr,"transform()"),dr.forEach(o),Aa=f(Vo,` method, and be used as a
callable.`),Vo.forEach(o),Da=l(M),ce=r(M,"DIV",{class:!0});var hr=n(ce);v(Ct.$$.fragment,hr),hr.forEach(o),Ca=l(M),de=r(M,"DIV",{class:!0});var ur=n(de);v(Ft.$$.fragment,ur),ur.forEach(o),Fa=l(M),it=r(M,"DIV",{class:!0});var Wo=n(it);v(Nt.$$.fragment,Wo),Na=l(Wo),Se=r(Wo,"P",{});var gr=n(Se);Pa=f(gr,"Marks a node as transformed by this transformation."),gr.forEach(o),Wo.forEach(o),Ra=l(M),he=r(M,"DIV",{class:!0});var _r=n(he);v(Pt.$$.fragment,_r),_r.forEach(o),Sa=l(M),ue=r(M,"DIV",{class:!0});var $r=n(ue);v(Rt.$$.fragment,$r),$r.forEach(o),M.forEach(o),Mo=l(t),E=r(t,"DIV",{class:!0});var A=n(E);v(St.$$.fragment,A),Oa=l(A),Oe=r(A,"P",{});var vr=n(Oe);Ga=f(vr,"A torch.fx graph transformation that is reversible."),vr.forEach(o),Va=l(A),X=r(A,"P",{});var xe=n(X);Wa=f(xe,"It must implemement the "),ge=r(xe,"A",{href:!0});var br=n(ge);Ha=f(br,"transform()"),br.forEach(o),Ua=f(xe,` and
`),_e=r(xe,"A",{href:!0});var xr=n(_e);Ja=f(xr,"reverse()"),xr.forEach(o),Ka=f(xe," methods, and be used as a callable."),xe.forEach(o),Qa=l(A),$e=r(A,"DIV",{class:!0});var yr=n($e);v(Ot.$$.fragment,yr),yr.forEach(o),Xa=l(A),mt=r(A,"DIV",{class:!0});var Ho=n(mt);v(Gt.$$.fragment,Ho),Ya=l(Ho),Ge=r(Ho,"P",{});var wr=n(Ge);Za=f(wr,"Marks a node as restored back to its original state."),wr.forEach(o),Ho.forEach(o),ts=l(A),ve=r(A,"DIV",{class:!0});var jr=n(ve);v(Vt.$$.fragment,jr),jr.forEach(o),A.forEach(o),Io=l(t),C=r(t,"DIV",{class:!0});var ye=n(C);v(Wt.$$.fragment,ye),es=l(ye),Ve=r(ye,"P",{});var Tr=n(Ve);os=f(Tr,"Composes a list of transformations together."),Tr.forEach(o),as=l(ye),v(lt.$$.fragment,ye),ye.forEach(o),Bo=l(t),Y=r(t,"H3",{class:!0});var Uo=n(Y);pt=r(Uo,"A",{id:!0,class:!0,href:!0});var kr=n(pt);We=r(kr,"SPAN",{});var zr=n(We);v(Ht.$$.fragment,zr),zr.forEach(o),kr.forEach(o),ss=l(Uo),He=r(Uo,"SPAN",{});var Er=n(He);rs=f(Er,"Transformations"),Er.forEach(o),Uo.forEach(o),Lo=l(t),F=r(t,"DIV",{class:!0});var we=n(F);v(Ut.$$.fragment,we),ns=l(we),Ue=r(we,"P",{});var Mr=n(Ue);is=f(Mr,"Transformation that merges linear layers that take the same input into one big linear layer."),Mr.forEach(o),ms=l(we),v(ft.$$.fragment,we),we.forEach(o),qo=l(t),N=r(t,"DIV",{class:!0});var je=n(N);v(Jt.$$.fragment,je),ls=l(je),Je=r(je,"P",{});var Ir=n(Je);ps=f(Ir,"Transformation that fuses the bias to the weight in torch.nn.Linear."),Ir.forEach(o),fs=l(je),v(ct.$$.fragment,je),je.forEach(o),Ao=l(t),P=r(t,"DIV",{class:!0});var Te=n(P);v(Kt.$$.fragment,Te),cs=l(Te),Ke=r(Te,"P",{});var Br=n(Ke);ds=f(Br,`Transformation that changes truediv nodes to multiplication by the inverse nodes when the denominator is static.
For example, that is sometimes the case for the scaling factor in attention layers.`),Br.forEach(o),hs=l(Te),v(dt.$$.fragment,Te),Te.forEach(o),Do=l(t),B=r(t,"DIV",{class:!0});var G=n(B);v(Qt.$$.fragment,G),us=l(G),R=r(G,"P",{});var vt=n(R);gs=f(vt,"Transformation that fuses "),Qe=r(vt,"CODE",{});var Lr=n(Qe);_s=f(Lr,"nn.BatchNorm2d"),Lr.forEach(o),$s=f(vt," following "),Xe=r(vt,"CODE",{});var qr=n(Xe);vs=f(qr,"nn.Conv2d"),qr.forEach(o),bs=f(vt," into a single "),Ye=r(vt,"CODE",{});var Ar=n(Ye);xs=f(Ar,"nn.Conv2d"),Ar.forEach(o),ys=f(vt,`.
The fusion will be done only if the convolution has the batch normalization as sole following node.`),vt.forEach(o),ws=l(G),Ze=r(G,"P",{});var Dr=n(Ze);js=f(Dr,"For example, fusion will not be done in the case"),Dr.forEach(o),Ts=l(G),v(ht.$$.fragment,G),ks=l(G),v(ut.$$.fragment,G),G.forEach(o),Co=l(t),L=r(t,"DIV",{class:!0});var V=n(L);v(Xt.$$.fragment,V),zs=l(V),S=r(V,"P",{});var bt=n(S);Es=f(bt,"Transformation that fuses "),to=r(bt,"CODE",{});var Cr=n(to);Ms=f(Cr,"nn.BatchNorm1d"),Cr.forEach(o),Is=f(bt," following or preceding "),eo=r(bt,"CODE",{});var Fr=n(eo);Bs=f(Fr,"nn.Linear"),Fr.forEach(o),Ls=f(bt," into a single "),oo=r(bt,"CODE",{});var Nr=n(oo);qs=f(Nr,"nn.Linear"),Nr.forEach(o),As=f(bt,`.
The fusion will be done only if the linear layer has the batch normalization as sole following node, or the batch normalization
has the linear layer as sole following node.`),bt.forEach(o),Ds=l(V),ao=r(V,"P",{});var Pr=n(ao);Cs=f(Pr,"For example, fusion will not be done in the case"),Pr.forEach(o),Fs=l(V),v(gt.$$.fragment,V),Ns=l(V),v(_t.$$.fragment,V),V.forEach(o),this.h()},h(){g(c,"name","hf:doc:metadata"),g(c,"content",JSON.stringify(tn)),g(h,"id","optimization"),g(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(h,"href","#optimization"),g(u,"class","relative group"),g(tt,"id","the-transformation-guide"),g(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(tt,"href","#the-transformation-guide"),g(W,"class","relative group"),g(et,"id","write-a-nonreversible-transformation"),g(et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(et,"href","#write-a-nonreversible-transformation"),g(H,"class","relative group"),g(oe,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation"),g(ae,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation.transform"),g(ot,"id","write-a-reversible-transformation"),g(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ot,"href","#write-a-reversible-transformation"),g(U,"class","relative group"),g(ne,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.ReversibleTransformation"),g(ie,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation.transform"),g(me,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.ReversibleTransformation.reverse"),g(at,"id","composing-transformations-together"),g(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(at,"href","#composing-transformations-together"),g(J,"class","relative group"),g(pe,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.compose"),g(rt,"id","the-optimization-api"),g(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(rt,"href","#the-optimization-api"),g(K,"class","relative group"),g(nt,"id","optimum.fx.optimization.Transformation"),g(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nt,"href","#optimum.fx.optimization.Transformation"),g(Q,"class","relative group"),g(fe,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation.transform"),g(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ge,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.Transformation.transform"),g(_e,"href","/docs/optimum/main/en/fx/optimization#optimum.fx.optimization.ReversibleTransformation.reverse"),g($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"id","optimum.fx.optimization.MergeLinears"),g(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(pt,"href","#optimum.fx.optimization.MergeLinears"),g(Y,"class","relative group"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,i){e(document.head,c),d(t,j,i),d(t,u,i),e(u,h),e(h,T),b(a,T,null),e(u,_),e(u,ke),e(ke,Jo),d(t,lo,i),d(t,Z,i),e(Z,Ko),e(Z,ze),e(ze,Qo),e(Z,Xo),d(t,po,i),d(t,W,i),e(W,tt),e(tt,Ee),b(jt,Ee,null),e(W,Yo),e(W,Me),e(Me,Zo),d(t,fo,i),d(t,ee,i),e(ee,ta),d(t,co,i),d(t,H,i),e(H,et),e(et,Ie),b(Tt,Ie,null),e(H,ea),e(H,Be),e(Be,oa),d(t,ho,i),d(t,O,i),e(O,aa),e(O,oe),e(oe,sa),e(O,ra),e(O,ae),e(ae,na),e(O,ia),d(t,uo,i),d(t,se,i),e(se,ma),d(t,go,i),b(kt,t,i),d(t,_o,i),d(t,re,i),e(re,la),d(t,$o,i),b(zt,t,i),d(t,vo,i),d(t,U,i),e(U,ot),e(ot,Le),b(Et,Le,null),e(U,pa),e(U,qe),e(qe,fa),d(t,bo,i),d(t,q,i),e(q,ca),e(q,ne),e(ne,da),e(q,ha),e(q,ie),e(ie,ua),e(q,ga),e(q,me),e(me,_a),e(q,$a),d(t,xo,i),d(t,le,i),e(le,va),d(t,yo,i),b(Mt,t,i),d(t,wo,i),d(t,J,i),e(J,at),e(at,Ae),b(It,Ae,null),e(J,ba),e(J,De),e(De,xa),d(t,jo,i),d(t,st,i),e(st,ya),e(st,pe),e(pe,wa),e(st,ja),d(t,To,i),b(Bt,t,i),d(t,ko,i),d(t,K,i),e(K,rt),e(rt,Ce),b(Lt,Ce,null),e(K,Ta),e(K,Fe),e(Fe,ka),d(t,zo,i),d(t,Q,i),e(Q,nt),e(nt,Ne),b(qt,Ne,null),e(Q,za),e(Q,Pe),e(Pe,Ea),d(t,Eo,i),d(t,k,i),b(At,k,null),e(k,Ma),e(k,Re),e(Re,Ia),e(k,Ba),e(k,Dt),e(Dt,La),e(Dt,fe),e(fe,qa),e(Dt,Aa),e(k,Da),e(k,ce),b(Ct,ce,null),e(k,Ca),e(k,de),b(Ft,de,null),e(k,Fa),e(k,it),b(Nt,it,null),e(it,Na),e(it,Se),e(Se,Pa),e(k,Ra),e(k,he),b(Pt,he,null),e(k,Sa),e(k,ue),b(Rt,ue,null),d(t,Mo,i),d(t,E,i),b(St,E,null),e(E,Oa),e(E,Oe),e(Oe,Ga),e(E,Va),e(E,X),e(X,Wa),e(X,ge),e(ge,Ha),e(X,Ua),e(X,_e),e(_e,Ja),e(X,Ka),e(E,Qa),e(E,$e),b(Ot,$e,null),e(E,Xa),e(E,mt),b(Gt,mt,null),e(mt,Ya),e(mt,Ge),e(Ge,Za),e(E,ts),e(E,ve),b(Vt,ve,null),d(t,Io,i),d(t,C,i),b(Wt,C,null),e(C,es),e(C,Ve),e(Ve,os),e(C,as),b(lt,C,null),d(t,Bo,i),d(t,Y,i),e(Y,pt),e(pt,We),b(Ht,We,null),e(Y,ss),e(Y,He),e(He,rs),d(t,Lo,i),d(t,F,i),b(Ut,F,null),e(F,ns),e(F,Ue),e(Ue,is),e(F,ms),b(ft,F,null),d(t,qo,i),d(t,N,i),b(Jt,N,null),e(N,ls),e(N,Je),e(Je,ps),e(N,fs),b(ct,N,null),d(t,Ao,i),d(t,P,i),b(Kt,P,null),e(P,cs),e(P,Ke),e(Ke,ds),e(P,hs),b(dt,P,null),d(t,Do,i),d(t,B,i),b(Qt,B,null),e(B,us),e(B,R),e(R,gs),e(R,Qe),e(Qe,_s),e(R,$s),e(R,Xe),e(Xe,vs),e(R,bs),e(R,Ye),e(Ye,xs),e(R,ys),e(B,ws),e(B,Ze),e(Ze,js),e(B,Ts),b(ht,B,null),e(B,ks),b(ut,B,null),d(t,Co,i),d(t,L,i),b(Xt,L,null),e(L,zs),e(L,S),e(S,Es),e(S,to),e(to,Ms),e(S,Is),e(S,eo),e(eo,Bs),e(S,Ls),e(S,oo),e(oo,qs),e(S,As),e(L,Ds),e(L,ao),e(ao,Cs),e(L,Fs),b(gt,L,null),e(L,Ns),b(_t,L,null),Fo=!0},p(t,[i]){const Yt={};i&2&&(Yt.$$scope={dirty:i,ctx:t}),lt.$set(Yt);const so={};i&2&&(so.$$scope={dirty:i,ctx:t}),ft.$set(so);const ro={};i&2&&(ro.$$scope={dirty:i,ctx:t}),ct.$set(ro);const no={};i&2&&(no.$$scope={dirty:i,ctx:t}),dt.$set(no);const Zt={};i&2&&(Zt.$$scope={dirty:i,ctx:t}),ht.$set(Zt);const io={};i&2&&(io.$$scope={dirty:i,ctx:t}),ut.$set(io);const te={};i&2&&(te.$$scope={dirty:i,ctx:t}),gt.$set(te);const mo={};i&2&&(mo.$$scope={dirty:i,ctx:t}),_t.$set(mo)},i(t){Fo||(x(a.$$.fragment,t),x(jt.$$.fragment,t),x(Tt.$$.fragment,t),x(kt.$$.fragment,t),x(zt.$$.fragment,t),x(Et.$$.fragment,t),x(Mt.$$.fragment,t),x(It.$$.fragment,t),x(Bt.$$.fragment,t),x(Lt.$$.fragment,t),x(qt.$$.fragment,t),x(At.$$.fragment,t),x(Ct.$$.fragment,t),x(Ft.$$.fragment,t),x(Nt.$$.fragment,t),x(Pt.$$.fragment,t),x(Rt.$$.fragment,t),x(St.$$.fragment,t),x(Ot.$$.fragment,t),x(Gt.$$.fragment,t),x(Vt.$$.fragment,t),x(Wt.$$.fragment,t),x(lt.$$.fragment,t),x(Ht.$$.fragment,t),x(Ut.$$.fragment,t),x(ft.$$.fragment,t),x(Jt.$$.fragment,t),x(ct.$$.fragment,t),x(Kt.$$.fragment,t),x(dt.$$.fragment,t),x(Qt.$$.fragment,t),x(ht.$$.fragment,t),x(ut.$$.fragment,t),x(Xt.$$.fragment,t),x(gt.$$.fragment,t),x(_t.$$.fragment,t),Fo=!0)},o(t){y(a.$$.fragment,t),y(jt.$$.fragment,t),y(Tt.$$.fragment,t),y(kt.$$.fragment,t),y(zt.$$.fragment,t),y(Et.$$.fragment,t),y(Mt.$$.fragment,t),y(It.$$.fragment,t),y(Bt.$$.fragment,t),y(Lt.$$.fragment,t),y(qt.$$.fragment,t),y(At.$$.fragment,t),y(Ct.$$.fragment,t),y(Ft.$$.fragment,t),y(Nt.$$.fragment,t),y(Pt.$$.fragment,t),y(Rt.$$.fragment,t),y(St.$$.fragment,t),y(Ot.$$.fragment,t),y(Gt.$$.fragment,t),y(Vt.$$.fragment,t),y(Wt.$$.fragment,t),y(lt.$$.fragment,t),y(Ht.$$.fragment,t),y(Ut.$$.fragment,t),y(ft.$$.fragment,t),y(Jt.$$.fragment,t),y(ct.$$.fragment,t),y(Kt.$$.fragment,t),y(dt.$$.fragment,t),y(Qt.$$.fragment,t),y(ht.$$.fragment,t),y(ut.$$.fragment,t),y(Xt.$$.fragment,t),y(gt.$$.fragment,t),y(_t.$$.fragment,t),Fo=!1},d(t){o(c),t&&o(j),t&&o(u),w(a),t&&o(lo),t&&o(Z),t&&o(po),t&&o(W),w(jt),t&&o(fo),t&&o(ee),t&&o(co),t&&o(H),w(Tt),t&&o(ho),t&&o(O),t&&o(uo),t&&o(se),t&&o(go),w(kt,t),t&&o(_o),t&&o(re),t&&o($o),w(zt,t),t&&o(vo),t&&o(U),w(Et),t&&o(bo),t&&o(q),t&&o(xo),t&&o(le),t&&o(yo),w(Mt,t),t&&o(wo),t&&o(J),w(It),t&&o(jo),t&&o(st),t&&o(To),w(Bt,t),t&&o(ko),t&&o(K),w(Lt),t&&o(zo),t&&o(Q),w(qt),t&&o(Eo),t&&o(k),w(At),w(Ct),w(Ft),w(Nt),w(Pt),w(Rt),t&&o(Mo),t&&o(E),w(St),w(Ot),w(Gt),w(Vt),t&&o(Io),t&&o(C),w(Wt),w(lt),t&&o(Bo),t&&o(Y),w(Ht),t&&o(Lo),t&&o(F),w(Ut),w(ft),t&&o(qo),t&&o(N),w(Jt),w(ct),t&&o(Ao),t&&o(P),w(Kt),w(dt),t&&o(Do),t&&o(B),w(Qt),w(ht),w(ut),t&&o(Co),t&&o(L),w(Xt),w(gt),w(_t)}}}const tn={local:"optimization",sections:[{local:"the-transformation-guide",sections:[{local:"write-a-nonreversible-transformation",title:"Write a non-reversible transformation"},{local:"write-a-reversible-transformation",title:"Write a reversible transformation"},{local:"composing-transformations-together",title:"Composing transformations together"}],title:"The transformation guide"},{local:"the-optimization-api",sections:[{local:"optimum.fx.optimization.Transformation",title:"Main classes and functions"},{local:"optimum.fx.optimization.MergeLinears",title:"Transformations"}],title:"The Optimization API"}],title:"Optimization"};function en(z){return Vr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mn extends Rr{constructor(c){super();Sr(this,c,en,Zr,Or,{})}}export{mn as default,tn as metadata};
