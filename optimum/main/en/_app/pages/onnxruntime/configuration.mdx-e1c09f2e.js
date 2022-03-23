import{S as oe,i as te,s as ne,e as n,k as y,w as E,t as M,M as ae,c as a,d as o,m as v,a as r,x as I,h as k,b as i,F as t,g as _,y as W,L as ie,q as U,o as X,B,v as re}from"../../chunks/vendor-19e06bd2.js";import{D as le}from"../../chunks/Docstring-395e5a9c.js";import{I as ee}from"../../chunks/IconCopyLink-3c713d38.js";function se(G){let l,q,s,u,b,h,L,z,F,T,d,m,w,g,S,x,P,C,c,f,R,O,A,N;return h=new ee({}),g=new ee({}),f=new le({props:{name:"class optimum.onnxruntime.ORTConfig",anchor:"optimum.onnxruntime.ORTConfig",parameters:[{name:"opset",val:": typing.Optional[int] = None"},{name:"opt_level",val:": typing.Optional[int] = None"},{name:"use_gpu",val:": typing.Optional[bool] = False"},{name:"only_onnxruntime",val:": typing.Optional[bool] = False"},{name:"quantization_approach",val:": typing.Optional[str] = None"},{name:"optimize_model",val:": typing.Optional[bool] = True"},{name:"per_channel",val:": typing.Optional[bool] = False"},{name:"reduce_range",val:": typing.Optional[bool] = False"},{name:"activation_type",val:": typing.Optional[str] = 'uint8'"},{name:"weight_type",val:": typing.Optional[str] = 'uint8'"},{name:"quant_format",val:": typing.Optional[str] = 'operator'"},{name:"calibration_method",val:": typing.Optional[str] = 'minmax'"},{name:"split",val:": typing.Optional[str] = 'train'"},{name:"max_samples",val:": typing.Optional[int] = 80"},{name:"calib_batch_size",val:": typing.Optional[int] = 8"},{name:"seed",val:": typing.Optional[int] = 42"},{name:"use_external_data_format",val:": typing.Optional[bool] = False"},{name:"op_types_to_quantize",val:": typing.Optional[typing.List] = None"},{name:"nodes_to_quantize",val:": typing.Optional[typing.List] = None"},{name:"nodes_to_exclude",val:": typing.Optional[typing.List] = None"},{name:"extra_options",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"}],source:"https://github.com/huggingface/optimum/blob/main/src/optimum/onnxruntime/configuration.py#L20",parametersDescription:[{anchor:"optimum.onnxruntime.ORTConfig.opset",description:`<strong>opset</strong> (<code>int</code>, <code>optional</code>) &#x2014;
ONNX opset version to export the model with.`,name:"opset"},{anchor:"optimum.onnxruntime.ORTConfig.use_external_data_format",description:`<strong>use_external_data_format</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) &#x2014;
Allow exporting model &gt;= than 2Gb.`,name:"use_external_data_format"},{anchor:"optimum.onnxruntime.ORTConfig.seed",description:`<strong>seed</strong> (<code>int</code>, <code>optional</code>, defaults to 42) &#x2014;
The seed used to ensure reproducibility across runs.`,name:"seed"}],parameterGroups:[{title:"Parameters for optimization",parametersDescription:`
<ul>
<li><strong>opt_level</strong> (<code>int</code>, <code>optional</code>) \u2014
Optimization level performed by ONNX Runtime of the loaded graph.
Supported optimization level are 0, 1, 2 and 99.
0 will disable all optimizations.
1 will enable basic optimizations.
2 will enable basic and extended optimizations, including complex node fusions applied to the nodes
assigned to the CPU or CUDA execution provider, making the resulting optimized graph hardware dependent.
99 will enable all available optimizations including layout optimizations.</li>
<li><strong>use_gpu</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to optimize the model for GPU inference.
The optimized graph might contain operators for GPU or CPU only when opt_level > 1.</li>
<li><strong>only_onnxruntime</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to only use ONNX Runtime to optimize the model and no graph fusion in Python.</li>
</ul>
`},{title:"Parameters for quantization",parametersDescription:`
<ul>
<li><strong>quantization_approach</strong> (<code>str</code>, <code>optional</code>) \u2014
The quantization approach to apply. Supported approach are static and dynamic.</li>
<li><strong>optimize_model</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>True</code>) \u2014
Whether to optimize the model before quantization.</li>
<li><strong>per_channel</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to quantize the weights per channel.</li>
<li><strong>reduce_range</strong> (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>) \u2014
Whether to quantize the weights with 7-bits. It may improve the accuracy for some models running on
non-VNNI machine, especially for per-channel mode</li>
<li><strong>activation_type</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"uint8"</code>) \u2014
The quantization data type of activation.
Currently, OnnxRuntime CPU only supports activation with type uint8.</li>
<li><strong>weight_type</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"uint8"</code>) \u2014
The quantization data type of weight. Supported data type are uint8 and int8.</li>
<li><strong>quant_format</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"operator"</code>) \u2014
ONNX quantization representation format.
Supported quantization representation format are \u201Coperator\u201D and \u201Cqdq\u201D.
\u201Coperator\u201D : Operator Oriented (QOperator) : all the quantized operators have their own ONNX definitions.
\u201Cqdq\u201D : Tensor Oriented (QDQ) : this format quantize the model by inserting QuantizeLinear/DeQuantizeLinear
on the tensor to simulate the quantize and dequantize process.
QuantizeLinear and DeQuantizeLinear operators carry the quantization parameters.</li>
<li><strong>calibration_method</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"minmax"</code>) \u2014
The method chosen to calculate the activations quantization parameters using the calibration dataset.
Current supported calibration methods are \u201Cminmax\u201D, \u201Centropy\u201D and \u201Cpercentile\u201D.</li>
<li><strong>split</strong> (<code>str</code>, <code>optional</code>, defaults to <code>"train"</code>) \u2014
Which split of the calibration dataset to load.
Depending on the calibration dataset to load, the possible values are \u201Ctrain\u201D, \u201Cvalidation\u201D and \u201Ctest\u201D.</li>
<li><strong>max_samples</strong> (<code>int</code>, <code>optional</code>, defaults to 80) \u2014
Maximum number of examples to use for the calibration step resulting from static quantization.</li>
<li><strong>calib_batch_size</strong> (<code>int</code>, <code>optional</code>, defaults to 8) \u2014
The batch size to use for the calibration step resulting from static quantization.</li>
<li><strong>op_types_to_quantize</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the types of operators to quantize. By default, all the supported operators are quantized.</li>
<li><strong>nodes_to_quantize</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the nodes names to quantize.</li>
<li><strong>nodes_to_exclude</strong> (<code>List</code>, <code>optional</code>) \u2014
List of the nodes names to exclude when applying quantization.</li>
<li><strong>extra_options</strong> (<code>Dict[str, Any]</code>, <code>optional</code>) \u2014
The dictionary mapping each extra options to the desired value, such as :
ActivationSymmetric (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
Symmetrize calibration data for activations.
WeightSymmetric (<code>bool</code>, <code>optional</code>, defaults to <code>True</code>):
Symmetrize calibration data for weights.
EnableSubgraph (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, subgraph will be quantized.
DisableShapeInference (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
In dynamic quantization mode, shape inference is not mandatory and can be disabled in case it causes
issues.
ForceQuantizeNoInputCheck (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
By default, the outputs of some latent operators such as maxpool or transpose are not quantized if
the corresponding input is not already quantized. When set to True, this option will force such
operator to always quantize their input, resulting in quantized output.
MatMulConstBOnly (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, only MatMul with const B will be quantized.
AddQDQPairToWeight (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
By default, floating-point weights are quantized and feed to solely inserted DeQuantizeLinear node.
If set to True, the floating-point weights will remain and both QuantizeLinear/DeQuantizeLinear
nodes will be inserted.
OpTypesToExcludeOutputQuantization (<code>List</code>, <code>optional</code>, defaults to <code>[]</code>):
If any op type is specified, the output of ops with this specific op types will not be quantized.
DedicatedQDQPair (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
When inserting QDQ pair, multiple nodes can share a single QDQ pair as their inputs. If True, it
will create an identical and dedicated QDQ pair for each node.
QDQOpTypePerChannelSupportToAxis (<code>Dict</code>, <code>optional</code>, defaults to <code>&#123;&#125;</code>):
Set the channel axis for a specific op type. Effective only when per channel quantization is
supported and per_channel is set to True.
CalibMovingAverage (<code>bool</code>, <code>optional</code>, defaults to <code>False</code>):
If enabled, the moving average of the minimum and maximum values will be computed when the
calibration method selected is MinMax.
CalibMovingAverage (<code>float</code>, <code>optional</code>, defaults to <code>0.01</code>):
Constant smoothing factor to use when computing the moving average of the minimum and maximum
values. Effective only when the calibration method selected is MinMax and when CalibMovingAverage
is set to True.</li>
</ul>
`}]}}),{c(){l=n("meta"),q=y(),s=n("h1"),u=n("a"),b=n("span"),E(h.$$.fragment),L=y(),z=n("span"),F=M("Configuration"),T=y(),d=n("h2"),m=n("a"),w=n("span"),E(g.$$.fragment),S=y(),x=n("span"),P=M("ORTConfig"),C=y(),c=n("div"),E(f.$$.fragment),R=y(),O=n("p"),A=M("ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),this.h()},l(e){const p=ae('[data-svelte="svelte-1phssyn"]',document.head);l=a(p,"META",{name:!0,content:!0}),p.forEach(o),q=v(e),s=a(e,"H1",{class:!0});var $=r(s);u=a($,"A",{id:!0,class:!0,href:!0});var H=r(u);b=a(H,"SPAN",{});var V=r(b);I(h.$$.fragment,V),V.forEach(o),H.forEach(o),L=v($),z=a($,"SPAN",{});var J=r(z);F=k(J,"Configuration"),J.forEach(o),$.forEach(o),T=v(e),d=a(e,"H2",{class:!0});var D=r(d);m=a(D,"A",{id:!0,class:!0,href:!0});var j=r(m);w=a(j,"SPAN",{});var K=r(w);I(g.$$.fragment,K),K.forEach(o),j.forEach(o),S=v(D),x=a(D,"SPAN",{});var Y=r(x);P=k(Y,"ORTConfig"),Y.forEach(o),D.forEach(o),C=v(e),c=a(e,"DIV",{class:!0});var Q=r(c);I(f.$$.fragment,Q),R=v(Q),O=a(Q,"P",{});var Z=r(O);A=k(Z,"ORTConfig is the configuration class handling all the ONNX Runtime optimization and quantization parameters."),Z.forEach(o),Q.forEach(o),this.h()},h(){i(l,"name","hf:doc:metadata"),i(l,"content",JSON.stringify(de)),i(u,"id","configuration"),i(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(u,"href","#configuration"),i(s,"class","relative group"),i(m,"id","optimum.onnxruntime.ORTConfig"),i(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(m,"href","#optimum.onnxruntime.ORTConfig"),i(d,"class","relative group"),i(c,"class","docstring")},m(e,p){t(document.head,l),_(e,q,p),_(e,s,p),t(s,u),t(u,b),W(h,b,null),t(s,L),t(s,z),t(z,F),_(e,T,p),_(e,d,p),t(d,m),t(m,w),W(g,w,null),t(d,S),t(d,x),t(x,P),_(e,C,p),_(e,c,p),W(f,c,null),t(c,R),t(c,O),t(O,A),N=!0},p:ie,i(e){N||(U(h.$$.fragment,e),U(g.$$.fragment,e),U(f.$$.fragment,e),N=!0)},o(e){X(h.$$.fragment,e),X(g.$$.fragment,e),X(f.$$.fragment,e),N=!1},d(e){o(l),e&&o(q),e&&o(s),B(h),e&&o(T),e&&o(d),B(g),e&&o(C),e&&o(c),B(f)}}}const de={local:"configuration",sections:[{local:"optimum.onnxruntime.ORTConfig",title:"ORTConfig"}],title:"Configuration"};function ce(G){return re(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class he extends oe{constructor(l){super();te(this,l,ce,se,ne,{})}}export{he as default,de as metadata};
