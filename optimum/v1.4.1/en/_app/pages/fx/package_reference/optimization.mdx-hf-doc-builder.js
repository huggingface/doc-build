import{S as Lr,i as Dr,s as qr,e as s,k as p,w as $,t as u,M as Fr,c as n,d as r,m as c,a as i,x as v,h,b as _,G as t,g as w,y as b,q as x,o as y,B as T,v as Cr,L as me}from"../../../chunks/vendor-hf-doc-builder.js";import{D as M}from"../../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../../chunks/CodeBlock-hf-doc-builder.js";import{I as Pt}from"../../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Nr(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers import BertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>transformed_model = composition(traced)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Pr(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers import BertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Ar(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers import BertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Rr(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers import BertModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>restored_model = transformation(transformed_model, reverse=<span class="hljs-literal">True</span>)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Gr(z){let a,g;return a=new le({props:{code:`     Conv2d
     /   \\
    /     \\
ReLU   BatchNorm2d`,highlighted:`     Co<span class="hljs-symbol">nv2</span>d
     /   \\
    /     \\
ReLU   Batch<span class="hljs-symbol">Norm2</span>d`}}),{c(){$(a.$$.fragment)},l(l){v(a.$$.fragment,l)},m(l,m){b(a,l,m),g=!0},p:me,i(l){g||(x(a.$$.fragment,l),g=!0)},o(l){y(a.$$.fragment,l),g=!1},d(l){T(a,l)}}}function Vr(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers.utils.fx import symbolic_trace
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
transformed_model = transformation(traced_model)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Sr(z){let a,g;return a=new le({props:{code:`     Linear
     /   \\
    /     \\
ReLU   BatchNorm1d`,highlighted:`     Linear
     /   <span class="hljs-string">\\</span>
    /     <span class="hljs-string">\\</span>
ReLU   BatchNorm1d`}}),{c(){$(a.$$.fragment)},l(l){v(a.$$.fragment,l)},m(l,m){b(a,l,m),g=!0},p:me,i(l){g||(x(a.$$.fragment,l),g=!0)},o(l){y(a.$$.fragment,l),g=!1},d(l){T(a,l)}}}function Or(z){let a,g,l,m,k;return m=new le({props:{code:`from transformers.utils.fx import symbolic_trace
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
transformed_model = transformation(traced_model)`}}),{c(){a=s("p"),g=u("Example:"),l=p(),$(m.$$.fragment)},l(o){a=n(o,"P",{});var d=i(a);g=h(d,"Example:"),d.forEach(r),l=c(o),v(m.$$.fragment,o)},m(o,d){w(o,a,d),t(a,g),w(o,l,d),b(m,o,d),k=!0},p:me,i(o){k||(x(m.$$.fragment,o),k=!0)},o(o){y(m.$$.fragment,o),k=!1},d(o){o&&r(a),o&&r(l),T(m,o)}}}function Wr(z){let a,g,l,m,k,o,d,Ue,At,xt,V,U,He,pe,Rt,Je,Gt,yt,j,ce,Vt,Ke,St,Ot,de,Wt,Le,Ut,Ht,Jt,De,fe,Kt,qe,ue,Qt,H,he,Xt,Qe,Yt,Zt,Fe,ge,eo,Ce,_e,Tt,S,J,Xe,$e,to,Ye,oo,wt,E,ve,ro,Ze,ao,so,O,no,Ne,io,mo,Pe,lo,po,co,Ae,be,fo,K,xe,uo,et,ho,go,Re,ye,kt,q,Te,_o,tt,$o,vo,Q,jt,W,X,ot,we,bo,rt,xo,zt,F,ke,yo,at,To,wo,Y,Et,C,je,ko,st,jo,zo,Z,It,N,ze,Eo,nt,Io,Mo,ee,Mt,B,Ee,Bo,P,Lo,it,Do,qo,mt,Fo,Co,lt,No,Po,Ao,pt,Ro,Go,te,Vo,oe,Bt,L,Ie,So,A,Oo,ct,Wo,Uo,dt,Ho,Jo,ft,Ko,Qo,Xo,ut,Yo,Zo,re,er,ae,Lt;return o=new Pt({}),pe=new Pt({}),ce=new M({props:{name:"class optimum.fx.optimization.Transformation",anchor:"optimum.fx.optimization.Transformation",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L89"}}),fe=new M({props:{name:"__call__",anchor:"optimum.fx.optimization.Transformation.__call__",parameters:[{name:"graph_module",val:": GraphModule"},{name:"lint_and_recompile",val:": bool = True"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.__call__.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"},{anchor:"optimum.fx.optimization.Transformation.__call__.lint_and_recompile",description:`<strong>lint_and_recompile</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the transformed module should be linted and recompiled.
This can be set to <code>False</code> when chaining transformations together to perform this operation only once.`,name:"lint_and_recompile"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L112",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),ue=new M({props:{name:"get_transformed_nodes",anchor:"optimum.fx.optimization.Transformation.get_transformed_nodes",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.get_transformed_nodes.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The graph_module to get the nodes from.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L165",returnDescription:`
<p>Gives the list of nodes that were transformed by the transformation.</p>
`,returnType:`
<p><code>List[torch.fx.Node]</code></p>
`}}),he=new M({props:{name:"mark_as_transformed",anchor:"optimum.fx.optimization.Transformation.mark_as_transformed",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.mark_as_transformed.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to mark as transformed.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L141"}}),ge=new M({props:{name:"transform",anchor:"optimum.fx.optimization.Transformation.transform",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.transform.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L99",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),_e=new M({props:{name:"transformed",anchor:"optimum.fx.optimization.Transformation.transformed",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.Transformation.transformed.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to check.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L153",returnDescription:`
<p>Specifies whether the node was transformed by this transformation or not.</p>
`,returnType:`
<p><code>bool</code></p>
`}}),$e=new Pt({}),ve=new M({props:{name:"class optimum.fx.optimization.ReversibleTransformation",anchor:"optimum.fx.optimization.ReversibleTransformation",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L180"}}),be=new M({props:{name:"__call__",anchor:"optimum.fx.optimization.ReversibleTransformation.__call__",parameters:[{name:"graph_module",val:": GraphModule"},{name:"lint_and_recompile",val:": bool = True"},{name:"reverse",val:": bool = False"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"},{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.lint_and_recompile",description:`<strong>lint_and_recompile</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the transformed module should be linted and recompiled.
This can be set to <code>False</code> when chaining transformations together to perform this operation only once.`,name:"lint_and_recompile"},{anchor:"optimum.fx.optimization.ReversibleTransformation.__call__.reverse",description:`<strong>reverse</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the reverse transformation is performed.`,name:"reverse"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L201",returnDescription:`
<p>The transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),xe=new M({props:{name:"mark_as_restored",anchor:"optimum.fx.optimization.ReversibleTransformation.mark_as_restored",parameters:[{name:"node",val:": Node"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.mark_as_restored.node",description:`<strong>node</strong> (<code>torch.fx.Node</code>) &#x2014;
The node to mark as restored.`,name:"node"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L226"}}),ye=new M({props:{name:"reverse",anchor:"optimum.fx.optimization.ReversibleTransformation.reverse",parameters:[{name:"graph_module",val:": GraphModule"}],parametersDescription:[{anchor:"optimum.fx.optimization.ReversibleTransformation.reverse.graph_module",description:`<strong>graph_module</strong> (<code>torch.fx.GraphModule</code>) &#x2014;
The module to transform.`,name:"graph_module"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L188",returnDescription:`
<p>The reverse transformed module.</p>
`,returnType:`
<p><code>torch.fx.GraphModule</code></p>
`}}),Te=new M({props:{name:"optimum.fx.optimization.compose",anchor:"optimum.fx.optimization.compose",parameters:[{name:"*args",val:": Transformation"},{name:"inplace",val:": bool = True"}],parametersDescription:[{anchor:"optimum.fx.optimization.compose.args",description:`<strong>args</strong> (<a href="/docs/optimum/v1.4.1/en/fx/package_reference/optimization#optimum.fx.optimization.Transformation">Transformation</a>) &#x2014;
The transformations to compose together.`,name:"args"},{anchor:"optimum.fx.optimization.compose.inplace",description:`<strong>inplace</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether the resulting transformation should be inplace, or create a new graph module.`,name:"inplace"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L725",returnDescription:`
<p>The composition transformation object.</p>
`}}),Q=new ie({props:{anchor:"optimum.fx.optimization.compose.example",$$slots:{default:[Nr]},$$scope:{ctx:z}}}),we=new Pt({}),ke=new M({props:{name:"class optimum.fx.optimization.MergeLinears",anchor:"optimum.fx.optimization.MergeLinears",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.MergeLinears.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L241"}}),Y=new ie({props:{anchor:"optimum.fx.optimization.MergeLinears.example",$$slots:{default:[Pr]},$$scope:{ctx:z}}}),je=new M({props:{name:"class optimum.fx.optimization.FuseBiasInLinear",anchor:"optimum.fx.optimization.FuseBiasInLinear",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBiasInLinear.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L397"}}),Z=new ie({props:{anchor:"optimum.fx.optimization.FuseBiasInLinear.example",$$slots:{default:[Ar]},$$scope:{ctx:z}}}),ze=new M({props:{name:"class optimum.fx.optimization.ChangeTrueDivToMulByInverse",anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L451"}}),ee=new ie({props:{anchor:"optimum.fx.optimization.ChangeTrueDivToMulByInverse.example",$$slots:{default:[Rr]},$$scope:{ctx:z}}}),Ee=new M({props:{name:"class optimum.fx.optimization.FuseBatchNorm2dInConv2d",anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L482"}}),te=new ie({props:{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.example",$$slots:{default:[Gr]},$$scope:{ctx:z}}}),oe=new ie({props:{anchor:"optimum.fx.optimization.FuseBatchNorm2dInConv2d.example-2",$$slots:{default:[Vr]},$$scope:{ctx:z}}}),Ie=new M({props:{name:"class optimum.fx.optimization.FuseBatchNorm1dInLinear",anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear",parameters:[],parametersDescription:[{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.preserves_computation",description:`<strong>preserves_computation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether the transformation preserves the graph computation or not. If <code>True</code>, the original and the
transformed graph should produce the same outputs.`,name:"preserves_computation"}],source:"https://github.com/huggingface/optimum/blob/v1.4.1/optimum/fx/optimization/transformations.py#L565"}}),re=new ie({props:{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.example",$$slots:{default:[Sr]},$$scope:{ctx:z}}}),ae=new ie({props:{anchor:"optimum.fx.optimization.FuseBatchNorm1dInLinear.example-2",$$slots:{default:[Or]},$$scope:{ctx:z}}}),{c(){a=s("meta"),g=p(),l=s("h1"),m=s("a"),k=s("span"),$(o.$$.fragment),d=p(),Ue=s("span"),At=u("Optimization"),xt=p(),V=s("h2"),U=s("a"),He=s("span"),$(pe.$$.fragment),Rt=p(),Je=s("span"),Gt=u("Transformation"),yt=p(),j=s("div"),$(ce.$$.fragment),Vt=p(),Ke=s("p"),St=u("A torch.fx graph transformation."),Ot=p(),de=s("p"),Wt=u("It  must implement the "),Le=s("a"),Ut=u("transform()"),Ht=u(` method, and be used as a
callable.`),Jt=p(),De=s("div"),$(fe.$$.fragment),Kt=p(),qe=s("div"),$(ue.$$.fragment),Qt=p(),H=s("div"),$(he.$$.fragment),Xt=p(),Qe=s("p"),Yt=u("Marks a node as transformed by this transformation."),Zt=p(),Fe=s("div"),$(ge.$$.fragment),eo=p(),Ce=s("div"),$(_e.$$.fragment),Tt=p(),S=s("h2"),J=s("a"),Xe=s("span"),$($e.$$.fragment),to=p(),Ye=s("span"),oo=u("Reversible transformation"),wt=p(),E=s("div"),$(ve.$$.fragment),ro=p(),Ze=s("p"),ao=u("A torch.fx graph transformation that is reversible."),so=p(),O=s("p"),no=u("It must implement the "),Ne=s("a"),io=u("transform()"),mo=u(` and
`),Pe=s("a"),lo=u("reverse()"),po=u(" methods, and be used as a callable."),co=p(),Ae=s("div"),$(be.$$.fragment),fo=p(),K=s("div"),$(xe.$$.fragment),uo=p(),et=s("p"),ho=u("Marks a node as restored back to its original state."),go=p(),Re=s("div"),$(ye.$$.fragment),kt=p(),q=s("div"),$(Te.$$.fragment),_o=p(),tt=s("p"),$o=u("Composes a list of transformations together."),vo=p(),$(Q.$$.fragment),jt=p(),W=s("h3"),X=s("a"),ot=s("span"),$(we.$$.fragment),bo=p(),rt=s("span"),xo=u("Transformations"),zt=p(),F=s("div"),$(ke.$$.fragment),yo=p(),at=s("p"),To=u("Transformation that merges linear layers that take the same input into one big linear layer."),wo=p(),$(Y.$$.fragment),Et=p(),C=s("div"),$(je.$$.fragment),ko=p(),st=s("p"),jo=u("Transformation that fuses the bias to the weight in torch.nn.Linear."),zo=p(),$(Z.$$.fragment),It=p(),N=s("div"),$(ze.$$.fragment),Eo=p(),nt=s("p"),Io=u(`Transformation that changes truediv nodes to multiplication by the inverse nodes when the denominator is static.
For example, that is sometimes the case for the scaling factor in attention layers.`),Mo=p(),$(ee.$$.fragment),Mt=p(),B=s("div"),$(Ee.$$.fragment),Bo=p(),P=s("p"),Lo=u("Transformation that fuses "),it=s("code"),Do=u("nn.BatchNorm2d"),qo=u(" following "),mt=s("code"),Fo=u("nn.Conv2d"),Co=u(" into a single "),lt=s("code"),No=u("nn.Conv2d"),Po=u(`.
The fusion will be done only if the convolution has the batch normalization as sole following node.`),Ao=p(),pt=s("p"),Ro=u("For example, fusion will not be done in the case"),Go=p(),$(te.$$.fragment),Vo=p(),$(oe.$$.fragment),Bt=p(),L=s("div"),$(Ie.$$.fragment),So=p(),A=s("p"),Oo=u("Transformation that fuses "),ct=s("code"),Wo=u("nn.BatchNorm1d"),Uo=u(" following or preceding "),dt=s("code"),Ho=u("nn.Linear"),Jo=u(" into a single "),ft=s("code"),Ko=u("nn.Linear"),Qo=u(`.
The fusion will be done only if the linear layer has the batch normalization as sole following node, or the batch normalization
has the linear layer as sole following node.`),Xo=p(),ut=s("p"),Yo=u("For example, fusion will not be done in the case"),Zo=p(),$(re.$$.fragment),er=p(),$(ae.$$.fragment),this.h()},l(e){const f=Fr('[data-svelte="svelte-1phssyn"]',document.head);a=n(f,"META",{name:!0,content:!0}),f.forEach(r),g=c(e),l=n(e,"H1",{class:!0});var Me=i(l);m=n(Me,"A",{id:!0,class:!0,href:!0});var ht=i(m);k=n(ht,"SPAN",{});var gt=i(k);v(o.$$.fragment,gt),gt.forEach(r),ht.forEach(r),d=c(Me),Ue=n(Me,"SPAN",{});var _t=i(Ue);At=h(_t,"Optimization"),_t.forEach(r),Me.forEach(r),xt=c(e),V=n(e,"H2",{class:!0});var Be=i(V);U=n(Be,"A",{id:!0,class:!0,href:!0});var $t=i(U);He=n($t,"SPAN",{});var vt=i(He);v(pe.$$.fragment,vt),vt.forEach(r),$t.forEach(r),Rt=c(Be),Je=n(Be,"SPAN",{});var bt=i(Je);Gt=h(bt,"Transformation"),bt.forEach(r),Be.forEach(r),yt=c(e),j=n(e,"DIV",{class:!0});var I=i(j);v(ce.$$.fragment,I),Vt=c(I),Ke=n(I,"P",{});var tr=i(Ke);St=h(tr,"A torch.fx graph transformation."),tr.forEach(r),Ot=c(I),de=n(I,"P",{});var Dt=i(de);Wt=h(Dt,"It  must implement the "),Le=n(Dt,"A",{href:!0});var or=i(Le);Ut=h(or,"transform()"),or.forEach(r),Ht=h(Dt,` method, and be used as a
callable.`),Dt.forEach(r),Jt=c(I),De=n(I,"DIV",{class:!0});var rr=i(De);v(fe.$$.fragment,rr),rr.forEach(r),Kt=c(I),qe=n(I,"DIV",{class:!0});var ar=i(qe);v(ue.$$.fragment,ar),ar.forEach(r),Qt=c(I),H=n(I,"DIV",{class:!0});var qt=i(H);v(he.$$.fragment,qt),Xt=c(qt),Qe=n(qt,"P",{});var sr=i(Qe);Yt=h(sr,"Marks a node as transformed by this transformation."),sr.forEach(r),qt.forEach(r),Zt=c(I),Fe=n(I,"DIV",{class:!0});var nr=i(Fe);v(ge.$$.fragment,nr),nr.forEach(r),eo=c(I),Ce=n(I,"DIV",{class:!0});var ir=i(Ce);v(_e.$$.fragment,ir),ir.forEach(r),I.forEach(r),Tt=c(e),S=n(e,"H2",{class:!0});var Ft=i(S);J=n(Ft,"A",{id:!0,class:!0,href:!0});var mr=i(J);Xe=n(mr,"SPAN",{});var lr=i(Xe);v($e.$$.fragment,lr),lr.forEach(r),mr.forEach(r),to=c(Ft),Ye=n(Ft,"SPAN",{});var pr=i(Ye);oo=h(pr,"Reversible transformation"),pr.forEach(r),Ft.forEach(r),wt=c(e),E=n(e,"DIV",{class:!0});var D=i(E);v(ve.$$.fragment,D),ro=c(D),Ze=n(D,"P",{});var cr=i(Ze);ao=h(cr,"A torch.fx graph transformation that is reversible."),cr.forEach(r),so=c(D),O=n(D,"P",{});var Ge=i(O);no=h(Ge,"It must implement the "),Ne=n(Ge,"A",{href:!0});var dr=i(Ne);io=h(dr,"transform()"),dr.forEach(r),mo=h(Ge,` and
`),Pe=n(Ge,"A",{href:!0});var fr=i(Pe);lo=h(fr,"reverse()"),fr.forEach(r),po=h(Ge," methods, and be used as a callable."),Ge.forEach(r),co=c(D),Ae=n(D,"DIV",{class:!0});var ur=i(Ae);v(be.$$.fragment,ur),ur.forEach(r),fo=c(D),K=n(D,"DIV",{class:!0});var Ct=i(K);v(xe.$$.fragment,Ct),uo=c(Ct),et=n(Ct,"P",{});var hr=i(et);ho=h(hr,"Marks a node as restored back to its original state."),hr.forEach(r),Ct.forEach(r),go=c(D),Re=n(D,"DIV",{class:!0});var gr=i(Re);v(ye.$$.fragment,gr),gr.forEach(r),D.forEach(r),kt=c(e),q=n(e,"DIV",{class:!0});var Ve=i(q);v(Te.$$.fragment,Ve),_o=c(Ve),tt=n(Ve,"P",{});var _r=i(tt);$o=h(_r,"Composes a list of transformations together."),_r.forEach(r),vo=c(Ve),v(Q.$$.fragment,Ve),Ve.forEach(r),jt=c(e),W=n(e,"H3",{class:!0});var Nt=i(W);X=n(Nt,"A",{id:!0,class:!0,href:!0});var $r=i(X);ot=n($r,"SPAN",{});var vr=i(ot);v(we.$$.fragment,vr),vr.forEach(r),$r.forEach(r),bo=c(Nt),rt=n(Nt,"SPAN",{});var br=i(rt);xo=h(br,"Transformations"),br.forEach(r),Nt.forEach(r),zt=c(e),F=n(e,"DIV",{class:!0});var Se=i(F);v(ke.$$.fragment,Se),yo=c(Se),at=n(Se,"P",{});var xr=i(at);To=h(xr,"Transformation that merges linear layers that take the same input into one big linear layer."),xr.forEach(r),wo=c(Se),v(Y.$$.fragment,Se),Se.forEach(r),Et=c(e),C=n(e,"DIV",{class:!0});var Oe=i(C);v(je.$$.fragment,Oe),ko=c(Oe),st=n(Oe,"P",{});var yr=i(st);jo=h(yr,"Transformation that fuses the bias to the weight in torch.nn.Linear."),yr.forEach(r),zo=c(Oe),v(Z.$$.fragment,Oe),Oe.forEach(r),It=c(e),N=n(e,"DIV",{class:!0});var We=i(N);v(ze.$$.fragment,We),Eo=c(We),nt=n(We,"P",{});var Tr=i(nt);Io=h(Tr,`Transformation that changes truediv nodes to multiplication by the inverse nodes when the denominator is static.
For example, that is sometimes the case for the scaling factor in attention layers.`),Tr.forEach(r),Mo=c(We),v(ee.$$.fragment,We),We.forEach(r),Mt=c(e),B=n(e,"DIV",{class:!0});var R=i(B);v(Ee.$$.fragment,R),Bo=c(R),P=n(R,"P",{});var se=i(P);Lo=h(se,"Transformation that fuses "),it=n(se,"CODE",{});var wr=i(it);Do=h(wr,"nn.BatchNorm2d"),wr.forEach(r),qo=h(se," following "),mt=n(se,"CODE",{});var kr=i(mt);Fo=h(kr,"nn.Conv2d"),kr.forEach(r),Co=h(se," into a single "),lt=n(se,"CODE",{});var jr=i(lt);No=h(jr,"nn.Conv2d"),jr.forEach(r),Po=h(se,`.
The fusion will be done only if the convolution has the batch normalization as sole following node.`),se.forEach(r),Ao=c(R),pt=n(R,"P",{});var zr=i(pt);Ro=h(zr,"For example, fusion will not be done in the case"),zr.forEach(r),Go=c(R),v(te.$$.fragment,R),Vo=c(R),v(oe.$$.fragment,R),R.forEach(r),Bt=c(e),L=n(e,"DIV",{class:!0});var G=i(L);v(Ie.$$.fragment,G),So=c(G),A=n(G,"P",{});var ne=i(A);Oo=h(ne,"Transformation that fuses "),ct=n(ne,"CODE",{});var Er=i(ct);Wo=h(Er,"nn.BatchNorm1d"),Er.forEach(r),Uo=h(ne," following or preceding "),dt=n(ne,"CODE",{});var Ir=i(dt);Ho=h(Ir,"nn.Linear"),Ir.forEach(r),Jo=h(ne," into a single "),ft=n(ne,"CODE",{});var Mr=i(ft);Ko=h(Mr,"nn.Linear"),Mr.forEach(r),Qo=h(ne,`.
The fusion will be done only if the linear layer has the batch normalization as sole following node, or the batch normalization
has the linear layer as sole following node.`),ne.forEach(r),Xo=c(G),ut=n(G,"P",{});var Br=i(ut);Yo=h(Br,"For example, fusion will not be done in the case"),Br.forEach(r),Zo=c(G),v(re.$$.fragment,G),er=c(G),v(ae.$$.fragment,G),G.forEach(r),this.h()},h(){_(a,"name","hf:doc:metadata"),_(a,"content",JSON.stringify(Ur)),_(m,"id","optimization"),_(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(m,"href","#optimization"),_(l,"class","relative group"),_(U,"id","optimum.fx.optimization.Transformation"),_(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(U,"href","#optimum.fx.optimization.Transformation"),_(V,"class","relative group"),_(Le,"href","/docs/optimum/v1.4.1/en/fx/package_reference/optimization#optimum.fx.optimization.Transformation.transform"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(J,"id","optimum.fx.optimization.ReversibleTransformation"),_(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(J,"href","#optimum.fx.optimization.ReversibleTransformation"),_(S,"class","relative group"),_(Ne,"href","/docs/optimum/v1.4.1/en/fx/package_reference/optimization#optimum.fx.optimization.Transformation.transform"),_(Pe,"href","/docs/optimum/v1.4.1/en/fx/package_reference/optimization#optimum.fx.optimization.ReversibleTransformation.reverse"),_(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(X,"id","optimum.fx.optimization.MergeLinears"),_(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(X,"href","#optimum.fx.optimization.MergeLinears"),_(W,"class","relative group"),_(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,f){t(document.head,a),w(e,g,f),w(e,l,f),t(l,m),t(m,k),b(o,k,null),t(l,d),t(l,Ue),t(Ue,At),w(e,xt,f),w(e,V,f),t(V,U),t(U,He),b(pe,He,null),t(V,Rt),t(V,Je),t(Je,Gt),w(e,yt,f),w(e,j,f),b(ce,j,null),t(j,Vt),t(j,Ke),t(Ke,St),t(j,Ot),t(j,de),t(de,Wt),t(de,Le),t(Le,Ut),t(de,Ht),t(j,Jt),t(j,De),b(fe,De,null),t(j,Kt),t(j,qe),b(ue,qe,null),t(j,Qt),t(j,H),b(he,H,null),t(H,Xt),t(H,Qe),t(Qe,Yt),t(j,Zt),t(j,Fe),b(ge,Fe,null),t(j,eo),t(j,Ce),b(_e,Ce,null),w(e,Tt,f),w(e,S,f),t(S,J),t(J,Xe),b($e,Xe,null),t(S,to),t(S,Ye),t(Ye,oo),w(e,wt,f),w(e,E,f),b(ve,E,null),t(E,ro),t(E,Ze),t(Ze,ao),t(E,so),t(E,O),t(O,no),t(O,Ne),t(Ne,io),t(O,mo),t(O,Pe),t(Pe,lo),t(O,po),t(E,co),t(E,Ae),b(be,Ae,null),t(E,fo),t(E,K),b(xe,K,null),t(K,uo),t(K,et),t(et,ho),t(E,go),t(E,Re),b(ye,Re,null),w(e,kt,f),w(e,q,f),b(Te,q,null),t(q,_o),t(q,tt),t(tt,$o),t(q,vo),b(Q,q,null),w(e,jt,f),w(e,W,f),t(W,X),t(X,ot),b(we,ot,null),t(W,bo),t(W,rt),t(rt,xo),w(e,zt,f),w(e,F,f),b(ke,F,null),t(F,yo),t(F,at),t(at,To),t(F,wo),b(Y,F,null),w(e,Et,f),w(e,C,f),b(je,C,null),t(C,ko),t(C,st),t(st,jo),t(C,zo),b(Z,C,null),w(e,It,f),w(e,N,f),b(ze,N,null),t(N,Eo),t(N,nt),t(nt,Io),t(N,Mo),b(ee,N,null),w(e,Mt,f),w(e,B,f),b(Ee,B,null),t(B,Bo),t(B,P),t(P,Lo),t(P,it),t(it,Do),t(P,qo),t(P,mt),t(mt,Fo),t(P,Co),t(P,lt),t(lt,No),t(P,Po),t(B,Ao),t(B,pt),t(pt,Ro),t(B,Go),b(te,B,null),t(B,Vo),b(oe,B,null),w(e,Bt,f),w(e,L,f),b(Ie,L,null),t(L,So),t(L,A),t(A,Oo),t(A,ct),t(ct,Wo),t(A,Uo),t(A,dt),t(dt,Ho),t(A,Jo),t(A,ft),t(ft,Ko),t(A,Qo),t(L,Xo),t(L,ut),t(ut,Yo),t(L,Zo),b(re,L,null),t(L,er),b(ae,L,null),Lt=!0},p(e,[f]){const Me={};f&2&&(Me.$$scope={dirty:f,ctx:e}),Q.$set(Me);const ht={};f&2&&(ht.$$scope={dirty:f,ctx:e}),Y.$set(ht);const gt={};f&2&&(gt.$$scope={dirty:f,ctx:e}),Z.$set(gt);const _t={};f&2&&(_t.$$scope={dirty:f,ctx:e}),ee.$set(_t);const Be={};f&2&&(Be.$$scope={dirty:f,ctx:e}),te.$set(Be);const $t={};f&2&&($t.$$scope={dirty:f,ctx:e}),oe.$set($t);const vt={};f&2&&(vt.$$scope={dirty:f,ctx:e}),re.$set(vt);const bt={};f&2&&(bt.$$scope={dirty:f,ctx:e}),ae.$set(bt)},i(e){Lt||(x(o.$$.fragment,e),x(pe.$$.fragment,e),x(ce.$$.fragment,e),x(fe.$$.fragment,e),x(ue.$$.fragment,e),x(he.$$.fragment,e),x(ge.$$.fragment,e),x(_e.$$.fragment,e),x($e.$$.fragment,e),x(ve.$$.fragment,e),x(be.$$.fragment,e),x(xe.$$.fragment,e),x(ye.$$.fragment,e),x(Te.$$.fragment,e),x(Q.$$.fragment,e),x(we.$$.fragment,e),x(ke.$$.fragment,e),x(Y.$$.fragment,e),x(je.$$.fragment,e),x(Z.$$.fragment,e),x(ze.$$.fragment,e),x(ee.$$.fragment,e),x(Ee.$$.fragment,e),x(te.$$.fragment,e),x(oe.$$.fragment,e),x(Ie.$$.fragment,e),x(re.$$.fragment,e),x(ae.$$.fragment,e),Lt=!0)},o(e){y(o.$$.fragment,e),y(pe.$$.fragment,e),y(ce.$$.fragment,e),y(fe.$$.fragment,e),y(ue.$$.fragment,e),y(he.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y($e.$$.fragment,e),y(ve.$$.fragment,e),y(be.$$.fragment,e),y(xe.$$.fragment,e),y(ye.$$.fragment,e),y(Te.$$.fragment,e),y(Q.$$.fragment,e),y(we.$$.fragment,e),y(ke.$$.fragment,e),y(Y.$$.fragment,e),y(je.$$.fragment,e),y(Z.$$.fragment,e),y(ze.$$.fragment,e),y(ee.$$.fragment,e),y(Ee.$$.fragment,e),y(te.$$.fragment,e),y(oe.$$.fragment,e),y(Ie.$$.fragment,e),y(re.$$.fragment,e),y(ae.$$.fragment,e),Lt=!1},d(e){r(a),e&&r(g),e&&r(l),T(o),e&&r(xt),e&&r(V),T(pe),e&&r(yt),e&&r(j),T(ce),T(fe),T(ue),T(he),T(ge),T(_e),e&&r(Tt),e&&r(S),T($e),e&&r(wt),e&&r(E),T(ve),T(be),T(xe),T(ye),e&&r(kt),e&&r(q),T(Te),T(Q),e&&r(jt),e&&r(W),T(we),e&&r(zt),e&&r(F),T(ke),T(Y),e&&r(Et),e&&r(C),T(je),T(Z),e&&r(It),e&&r(N),T(ze),T(ee),e&&r(Mt),e&&r(B),T(Ee),T(te),T(oe),e&&r(Bt),e&&r(L),T(Ie),T(re),T(ae)}}}const Ur={local:"optimization",sections:[{local:"optimum.fx.optimization.Transformation",title:"Transformation"},{local:"optimum.fx.optimization.ReversibleTransformation",sections:[{local:"optimum.fx.optimization.MergeLinears",title:"Transformations"}],title:"Reversible transformation"}],title:"Optimization"};function Hr(z){return Cr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zr extends Lr{constructor(a){super();Dr(this,a,Hr,Wr,qr,{})}}export{Zr as default,Ur as metadata};
