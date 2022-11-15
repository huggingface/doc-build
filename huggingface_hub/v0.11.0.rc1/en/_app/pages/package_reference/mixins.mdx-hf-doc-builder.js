import{S as In,i as Fn,s as qn,e as a,k as d,w as b,t as s,M as Un,c as n,d as t,m as c,a as r,x as v,h as i,b as h,G as e,g as u,y,q as w,o as $,B as x,v as Cn,L as An}from"../../chunks/vendor-hf-doc-builder.js";import{T as Wa}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ln}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as eo}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Sn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Kn(O){let l,k,m,f,M;return{c(){l=a("p"),k=s("Passing "),m=a("code"),f=s("token=True"),M=s(` is required when you want to use a
private model.`)},l(g){l=n(g,"P",{});var _=r(l);k=i(_,"Passing "),m=n(_,"CODE",{});var T=r(m);f=i(T,"token=True"),T.forEach(t),M=i(_,` is required when you want to use a
private model.`),_.forEach(t)},m(g,_){u(g,l,_),e(l,k),e(l,m),e(m,f),e(l,M)},d(g){g&&t(l)}}}function Vn(O){let l,k,m,f,M;return f=new Ln({props:{code:`import torch
import torch.nn as nn
from huggingface_hub import PyTorchModelHubMixin


class MyModel(nn.Module, PyTorchModelHubMixin):
    def __init__(self):
        super().__init__()
        self.param = nn.Parameter(torch.rand(3, 4))
        self.linear = nn.Linear(4, 5)

    def forward(self, x):
        return self.linear(x + self.param)


model = MyModel()
# Save model weights to local directory
model.save_pretrained("my-awesome-model")
# Push model weights to the Hub
model.push_to_hub("my-awesome-model")
# Download and initialize weights from the Hub
model = MyModel.from_pretrained("username/my-awesome-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> PyTorchModelHubMixin


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">MyModel</span>(nn.Module, PyTorchModelHubMixin):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-built_in">super</span>().__init__()
<span class="hljs-meta">... </span>        self.param = nn.Parameter(torch.rand(<span class="hljs-number">3</span>, <span class="hljs-number">4</span>))
<span class="hljs-meta">... </span>        self.linear = nn.Linear(<span class="hljs-number">4</span>, <span class="hljs-number">5</span>)

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, x</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> self.linear(x + self.param)


<span class="hljs-meta">&gt;&gt;&gt; </span>model = MyModel()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Save model weights to local directory</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Push model weights to the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download and initialize weights from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MyModel.from_pretrained(<span class="hljs-string">&quot;username/my-awesome-model&quot;</span>)`}}),{c(){l=a("p"),k=s("Example:"),m=d(),b(f.$$.fragment)},l(g){l=n(g,"P",{});var _=r(l);k=i(_,"Example:"),_.forEach(t),m=c(g),v(f.$$.fragment,g)},m(g,_){u(g,l,_),e(l,k),u(g,m,_),y(f,g,_),M=!0},p:An,i(g){M||(w(f.$$.fragment,g),M=!0)},o(g){$(f.$$.fragment,g),M=!1},d(g){g&&t(l),g&&t(m),x(f,g)}}}function Wn(O){let l,k;return l=new Ln({props:{code:`import tensorflow as tf
from huggingface_hub import KerasModelHubMixin


class MyModel(tf.keras.Model, KerasModelHubMixin):
    def __init__(self, **kwargs):
        super().__init__()
        self.config = kwargs.pop("config", None)
        self.dummy_inputs = ...
        self.layer = ...

    def call(self, *args):
        return ...


# Initialize and compile the model as you normally would
model = MyModel()
model.compile(...)
# Build the graph by training it or passing dummy inputs
_ = model(model.dummy_inputs)
# Save model weights to local directory
model.save_pretrained("my-awesome-model")
# Push model weights to the Hub
model.push_to_hub("my-awesome-model")
# Download and initialize weights from the Hub
model = MyModel.from_pretrained("username/super-cool-model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> KerasModelHubMixin


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">MyModel</span>(tf.keras.Model, KerasModelHubMixin):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, **kwargs</span>):
<span class="hljs-meta">... </span>        <span class="hljs-built_in">super</span>().__init__()
<span class="hljs-meta">... </span>        self.config = kwargs.pop(<span class="hljs-string">&quot;config&quot;</span>, <span class="hljs-literal">None</span>)
<span class="hljs-meta">... </span>        self.dummy_inputs = ...
<span class="hljs-meta">... </span>        self.layer = ...

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">call</span>(<span class="hljs-params">self, *args</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> ...


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initialize and compile the model as you normally would</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MyModel()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(...)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Build the graph by training it or passing dummy inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>_ = model(model.dummy_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Save model weights to local directory</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Push model weights to the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download and initialize weights from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MyModel.from_pretrained(<span class="hljs-string">&quot;username/super-cool-model&quot;</span>)`}}),{c(){b(l.$$.fragment)},l(m){v(l.$$.fragment,m)},m(m,f){y(l,m,f),k=!0},p:An,i(m){k||(w(l.$$.fragment,m),k=!0)},o(m){$(l.$$.fragment,m),k=!1},d(m){x(l,m)}}}function Rn(O){let l,k,m,f,M;return{c(){l=a("p"),k=s("Passing "),m=a("code"),f=s("token=True"),M=s(` is required when you want to use a private
model.`)},l(g){l=n(g,"P",{});var _=r(l);k=i(_,"Passing "),m=n(_,"CODE",{});var T=r(m);f=i(T,"token=True"),T.forEach(t),M=i(_,` is required when you want to use a private
model.`),_.forEach(t)},m(g,_){u(g,l,_),e(l,k),e(l,m),e(m,f),e(l,M)},d(g){g&&t(l)}}}function Bn(O){let l,k,m,f,M,g,_,T,ve;return{c(){l=a("p"),k=s("Raises the following error:"),m=d(),f=a("ul"),M=a("li"),g=a("a"),_=a("em"),T=s("ValueError"),ve=s(`
if the user is not log on to the Hugging Face Hub.`),this.h()},l(E){l=n(E,"P",{});var j=r(l);k=i(j,"Raises the following error:"),j.forEach(t),m=c(E),f=n(E,"UL",{});var z=r(f);M=n(z,"LI",{});var B=r(M);g=n(B,"A",{href:!0,rel:!0});var V=r(g);_=n(V,"EM",{});var Ce=r(_);T=i(Ce,"ValueError"),Ce.forEach(t),V.forEach(t),ve=i(B,`
if the user is not log on to the Hugging Face Hub.`),B.forEach(t),z.forEach(t),this.h()},h(){h(g,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),h(g,"rel","nofollow")},m(E,j){u(E,l,j),e(l,k),u(E,m,j),u(E,f,j),e(f,M),e(M,g),e(g,_),e(_,T),e(M,ve)},d(E){E&&t(l),E&&t(m),E&&t(f)}}}function Gn(O){let l,k,m,f,M,g,_,T,ve,E,j,z,B,V,Ce,oo,dt,Ao,ee,ct,to,ht,pt,Lo,G,oe,ao,ye,gt,no,mt,Io,H,we,ut,S,ft,ro,_t,bt,so,vt,yt,Ke,wt,$t,xt,te,$e,kt,io,Mt,Ht,ae,xe,Et,lo,jt,Tt,W,ke,Pt,co,Nt,Dt,ne,Ot,R,Me,zt,ho,St,At,A,Lt,po,It,Ft,go,qt,Ut,Ve,Ct,Kt,Vt,re,He,Wt,mo,Rt,Fo,Y,se,uo,Ee,Bt,fo,Gt,qo,L,je,Yt,I,Jt,We,Qt,Xt,_o,Zt,ea,bo,oa,ta,aa,ie,Uo,J,le,vo,Te,na,yo,ra,Co,F,Pe,sa,Ne,ia,Re,la,da,ca,de,Ko,q,De,ha,Oe,pa,wo,ga,ma,ua,ce,Vo,U,ze,fa,Se,_a,$o,ba,va,ya,C,wa,xo,$a,xa,ko,ka,Ma,Be,Ha,Ea,Wo,Q,Ae,ja,Mo,Ta,Ro,X,he,Ho,Le,Pa,Eo,Na,Bo,Z,Ie,Da,jo,Oa,Go,N,Fe,za,To,Sa,Aa,K,La,Po,Ia,Fa,No,qa,Ua,Do,Ca,Ka,Va,pe,Yo;return g=new eo({}),V=new eo({}),ye=new eo({}),we=new D({props:{name:"class huggingface_hub.ModelHubMixin",anchor:"huggingface_hub.ModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L23"}}),$e=new D({props:{name:"_save_pretrained",anchor:"huggingface_hub.ModelHubMixin._save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, pathlib.Path]"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L93"}}),xe=new D({props:{name:"_from_pretrained",anchor:"huggingface_hub.ModelHubMixin._from_pretrained",parameters:[{name:"model_id",val:""},{name:"revision",val:""},{name:"cache_dir",val:""},{name:"force_download",val:""},{name:"proxies",val:""},{name:"resume_download",val:""},{name:"local_files_only",val:""},{name:"token",val:""},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L220"}}),ke=new D({props:{name:"from_pretrained",anchor:"huggingface_hub.ModelHubMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": str"},{name:"force_download",val:": bool = False"},{name:"resume_download",val:": bool = False"},{name:"proxies",val:": typing.Optional[typing.Dict] = None"},{name:"token",val:": typing.Union[str, bool, NoneType] = None"},{name:"cache_dir",val:": typing.Optional[str] = None"},{name:"local_files_only",val:": bool = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:<ul>
<li>A string, the <code>model id</code> of a pretrained model
hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level,
like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like
<code>dbmdz/bert-base-german-cased</code>.</li>
<li>You can add <code>revision</code> by appending <code>@</code> at the end
of model_id simply like this:
<code>dbmdz/bert-base-german-cased@main</code> Revision is
the specific model version to use. It can be a
branch name, a tag name, or a commit id, since we
use a git-based system for storing models and
other artifacts on huggingface.co, so <code>revision</code>
can be any identifier allowed by git.</li>
<li>A path to a <code>directory</code> containing model weights
saved using
<a href="https://huggingface.co/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained" rel="nofollow">save_pretrained</a>,
e.g., <code>./my_model_directory/</code>.</li>
<li><code>None</code> if you are both providing the configuration
and state dictionary (resp. with keyword arguments
<code>config</code> and <code>state_dict</code>).</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to force the (re-)download of the model weights
and configuration files, overriding the cached versions
if they exist.`,name:"force_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to delete incompletely received files. Will
attempt to resume the download if such a file exists.`,name:"resume_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or
endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are
used on each request.`,name:"proxies"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.token",description:`<strong>token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote
files. If <code>True</code>, will use the token generated when
running <code>transformers-cli login</code> (stored in
<code>~/.huggingface</code>).`,name:"token"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained
model configuration should be cached if the standard
cache should not be used.`,name:"cache_dir"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to
download the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during
initialization`,name:"model_kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L99"}}),ne=new Wa({props:{$$slots:{default:[Kn]},$$scope:{ctx:O}}}),Me=new D({props:{name:"push_to_hub",anchor:"huggingface_hub.ModelHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"commit_message",val:": str = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"skip_lfs_files",val:": bool = False"},{name:"repo_id",val:": typing.Optional[str] = None"},{name:"branch",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Repository name to which push.`,name:"repo_id"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing.`,name:"commit_message"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files.
If not set, will use the token set when logging in with
<code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"token"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.branch",description:`<strong>branch</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git branch on which to push the model. This defaults to
the default branch as specified in your repository, which
defaults to <code>&quot;main&quot;</code>.`,name:"branch"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>branch</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.allow_patterns",description:`<strong>allow_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, only files matching at least one pattern are pushed.`,name:"allow_patterns"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.ignore_patterns",description:`<strong>ignore_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, files matching any of the patterns are not pushed.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L237",returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),He=new D({props:{name:"save_pretrained",anchor:"huggingface_hub.ModelHubMixin.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, pathlib.Path]"},{name:"config",val:": typing.Optional[dict] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>Path</code>) &#x2014;
Specify directory in which you want to save weights.`,name:"save_directory"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Specify config (must be dict) in case you want to save
it.`,name:"config"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face Hub after
saving it. You can specify the repository you want to push to with
<code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the
<code>~utils.PushToHubMixin.push_to_hub</code> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L32"}}),Ee=new eo({}),je=new D({props:{name:"class huggingface_hub.PyTorchModelHubMixin",anchor:"huggingface_hub.PyTorchModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/hub_mixin.py#L405"}}),ie=new Sn({props:{anchor:"huggingface_hub.PyTorchModelHubMixin.example",$$slots:{default:[Vn]},$$scope:{ctx:O}}}),Te=new eo({}),Pe=new D({props:{name:"class huggingface_hub.KerasModelHubMixin",anchor:"huggingface_hub.KerasModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/keras_mixin.py#L534"}}),de=new Sn({props:{anchor:"huggingface_hub.KerasModelHubMixin.example",$$slots:{default:[Wn]},$$scope:{ctx:O}}}),De=new D({props:{name:"huggingface_hub.from_pretrained_keras",anchor:"huggingface_hub.from_pretrained_keras",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.from_pretrained_keras.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:<ul>
<li>A string, the <code>model id</code> of a pretrained model hosted inside a
model repo on huggingface.co. Valid model ids can be located
at the root-level, like <code>bert-base-uncased</code>, or namespaced
under a user or organization name, like
<code>dbmdz/bert-base-german-cased</code>.</li>
<li>You can add <code>revision</code> by appending <code>@</code> at the end of model_id
simply like this: <code>dbmdz/bert-base-german-cased@main</code> Revision
is the specific model version to use. It can be a branch name,
a tag name, or a commit id, since we use a git-based system
for storing models and other artifacts on huggingface.co, so
<code>revision</code> can be any identifier allowed by git.</li>
<li>A path to a <code>directory</code> containing model weights saved using
<a href="https://huggingface.co/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained" rel="nofollow">save_pretrained</a>, e.g.,
<code>./my_model_directory/</code>.</li>
<li><code>None</code> if you are both providing the configuration and state
dictionary (resp. with keyword arguments <code>config</code> and
<code>state_dict</code>).</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"huggingface_hub.from_pretrained_keras.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to force the (re-)download of the model weights and
configuration files, overriding the cached versions if they exist.`,name:"force_download"},{anchor:"huggingface_hub.from_pretrained_keras.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to delete incompletely received files. Will attempt to
resume the download if such a file exists.`,name:"resume_download"},{anchor:"huggingface_hub.from_pretrained_keras.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g.,
<code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The
proxies are used on each request.`,name:"proxies"},{anchor:"huggingface_hub.from_pretrained_keras.token",description:`<strong>token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<code>True</code>, will use the token generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"token"},{anchor:"huggingface_hub.from_pretrained_keras.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model
configuration should be cached if the standard cache should not be
used.`,name:"cache_dir"},{anchor:"huggingface_hub.from_pretrained_keras.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to download
the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.from_pretrained_keras.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during initialization`,name:"model_kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/keras_mixin.py#L232"}}),ce=new Wa({props:{$$slots:{default:[Rn]},$$scope:{ctx:O}}}),ze=new D({props:{name:"huggingface_hub.push_to_hub_keras",anchor:"huggingface_hub.push_to_hub_keras",parameters:[{name:"model",val:""},{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"log_dir",val:": typing.Optional[str] = None"},{name:"commit_message",val:": str = 'Add Keras model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": bool = False"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"include_optimizer",val:": bool = False"},{name:"tags",val:": typing.Union[list, str, NoneType] = None"},{name:"plot_model",val:": bool = True"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_id",val:": typing.Optional[str] = None"},{name:"branch",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"**model_save_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.push_to_hub_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="%60https://www.tensorflow.org/api_docs/python/tf/keras/Model%60">Keras
model</a>
you&#x2019;d like to push to the Hub. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.push_to_hub_keras.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
Repository name to which push`,name:"repo_id"},{anchor:"huggingface_hub.push_to_hub_keras.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;Add Keras model&#x201D;) &#x2014;
Message to commit while pushing.`,name:"commit_message"},{anchor:"huggingface_hub.push_to_hub_keras.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.push_to_hub_keras.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.push_to_hub_keras.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
not set, will use the token set when logging in with
<code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"token"},{anchor:"huggingface_hub.push_to_hub_keras.branch",description:`<strong>branch</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git branch on which to push the model. This defaults to
the default branch as specified in your repository, which
defaults to <code>&quot;main&quot;</code>.`,name:"branch"},{anchor:"huggingface_hub.push_to_hub_keras.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>branch</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.push_to_hub_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.push_to_hub_keras.allow_patterns",description:`<strong>allow_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, only files matching at least one pattern are pushed.`,name:"allow_patterns"},{anchor:"huggingface_hub.push_to_hub_keras.ignore_patterns",description:`<strong>ignore_patterns</strong> (<code>List[str]</code> or <code>str</code>, <em>optional</em>) &#x2014;
If provided, files matching any of the patterns are not pushed.`,name:"ignore_patterns"},{anchor:"huggingface_hub.push_to_hub_keras.log_dir",description:`<strong>log_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
TensorBoard logging directory to be pushed. The Hub automatically
hosts and displays a TensorBoard instance if log files are included
in the repository.`,name:"log_dir"},{anchor:"huggingface_hub.push_to_hub_keras.include_optimizer",description:`<strong>include_optimizer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer during serialization.`,name:"include_optimizer"},{anchor:"huggingface_hub.push_to_hub_keras.tags",description:`<strong>tags</strong> (Union[<code>list</code>, <code>str</code>], <em>optional</em>) &#x2014;
List of tags that are related to model or string of a single tag. See example tags
<a href="https://github.com/huggingface/hub-docs/blame/main/modelcard.md" rel="nofollow">here</a>.`,name:"tags"},{anchor:"huggingface_hub.push_to_hub_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.push_to_hub_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/keras_mixin.py#L291",returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),Ae=new D({props:{name:"huggingface_hub.save_pretrained_keras",anchor:"huggingface_hub.save_pretrained_keras",parameters:[{name:"model",val:""},{name:"save_directory",val:": typing.Union[str, pathlib.Path]"},{name:"config",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"include_optimizer",val:": bool = False"},{name:"plot_model",val:": bool = True"},{name:"tags",val:": typing.Union[list, str, NoneType] = None"},{name:"**model_save_kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.save_pretrained_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Keras
model</a>
you&#x2019;d like to save. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.save_pretrained_keras.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>Path</code>) &#x2014;
Specify directory in which you want to save the Keras model.`,name:"save_directory"},{anchor:"huggingface_hub.save_pretrained_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.save_pretrained_keras.include_optimizer(bool,",description:`<strong>include_optimizer(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer in serialization.`,name:"include_optimizer(bool,"},{anchor:"huggingface_hub.save_pretrained_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.save_pretrained_keras.tags",description:`<strong>tags</strong> (Union[<code>str</code>,<code>list</code>], <em>optional</em>) &#x2014;
List of tags that are related to model or string of a single tag. See example tags
<a href="https://github.com/huggingface/hub-docs/blame/main/modelcard.md" rel="nofollow">here</a>.`,name:"tags"},{anchor:"huggingface_hub.save_pretrained_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/keras_mixin.py#L139"}}),Le=new eo({}),Ie=new D({props:{name:"huggingface_hub.from_pretrained_fastai",anchor:"huggingface_hub.from_pretrained_fastai",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.from_pretrained_fastai.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The location where the pickled fastai.Learner is. It can be either of the two:<ul>
<li>Hosted on the Hugging Face Hub. E.g.: &#x2018;espejelomar/fatai-pet-breeds-classification&#x2019; or &#x2018;distilgpt2&#x2019;.
You can add a <code>revision</code> by appending <code>@</code> at the end of <code>repo_id</code>. E.g.: <code>dbmdz/bert-base-german-cased@main</code>.
Revision is the specific model version to use. Since we use a git-based system for storing models and other
artifacts on the Hugging Face Hub, it can be a branch name, a tag name, or a commit id.</li>
<li>Hosted locally. <code>repo_id</code> would be a directory containing the pickle and a pyproject.toml
indicating the fastai and fastcore versions used to build the <code>fastai.Learner</code>. E.g.: <code>./my_model_directory/</code>.</li>
</ul>`,name:"repo_id"},{anchor:"huggingface_hub.from_pretrained_fastai.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Revision at which the repo&#x2019;s files are downloaded. See documentation of <code>snapshot_download</code>.`,name:"revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/fastai_utils.py#L311",returnDescription:`
<p>The <code>fastai.Learner</code> model in the <code>repo_id</code> repo.</p>
`}}),Fe=new D({props:{name:"huggingface_hub.push_to_hub_fastai",anchor:"huggingface_hub.push_to_hub_fastai",parameters:[{name:"learner",val:""},{name:"repo_id",val:": str"},{name:"commit_message",val:": str = 'Add model'"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"branch",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"allow_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"ignore_patterns",val:": typing.Union[typing.List[str], str, NoneType] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.push_to_hub_fastai.learner",description:`<strong>learner</strong> (<em>Learner</em>) &#x2014;
The *fastai.Learner&#x2019; you&#x2019;d like to push to the Hub.`,name:"learner"},{anchor:"huggingface_hub.push_to_hub_fastai.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository id for your model in Hub in the format of &#x201C;namespace/repo_name&#x201D;. The namespace can be your individual account or an organization to which you have write access (for example, &#x2018;stanfordnlp/stanza-de&#x2019;).`,name:"repo_id"},{anchor:"huggingface_hub.push_to_hub_fastai.commit_message",description:"<strong>commit_message</strong> (<em>str`, </em>optional*) &#x2014; Message to commit while pushing. Will default to <code>&quot;add model&quot;</code>.",name:"commit_message"},{anchor:"huggingface_hub.push_to_hub_fastai.private",description:`<strong>private</strong> (<em>bool</em>, <em>optional</em>, defaults to <em>False</em>) &#x2014;
Whether or not the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.push_to_hub_fastai.token",description:`<strong>token</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The Hugging Face account token to use as HTTP bearer authorization for remote files. If <code>None</code>, the token will be asked by a prompt.`,name:"token"},{anchor:"huggingface_hub.push_to_hub_fastai.config",description:`<strong>config</strong> (<em>dict</em>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.push_to_hub_fastai.branch",description:`<strong>branch</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The git branch on which to push the model. This defaults to
the default branch as specified in your repository, which
defaults to <em>&#x201C;main&#x201D;</em>.`,name:"branch"},{anchor:"huggingface_hub.push_to_hub_fastai.create_pr",description:`<strong>create_pr</strong> (<em>boolean</em>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <em>branch</em> with that commit.
Defaults to <em>False</em>.`,name:"create_pr"},{anchor:"huggingface_hub.push_to_hub_fastai.api_endpoint",description:`<strong>api_endpoint</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.push_to_hub_fastai.allow_patterns",description:`<strong>allow_patterns</strong> (<em>List[str]</em> or <em>str</em>, <em>optional</em>) &#x2014;
If provided, only files matching at least one pattern are pushed.`,name:"allow_patterns"},{anchor:"huggingface_hub.push_to_hub_fastai.ignore_patterns",description:`<strong>ignore_patterns</strong> (<em>List[str]</em> or <em>str</em>, <em>optional</em>) &#x2014;
If provided, files matching any of the patterns are not pushed.`,name:"ignore_patterns"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.11.0.rc1/src/huggingface_hub/fastai_utils.py#L356",returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),pe=new Wa({props:{$$slots:{default:[Bn]},$$scope:{ctx:O}}}),{c(){l=a("meta"),k=d(),m=a("h1"),f=a("a"),M=a("span"),b(g.$$.fragment),_=d(),T=a("span"),ve=s("Mixins & serialization methods"),E=d(),j=a("h2"),z=a("a"),B=a("span"),b(V.$$.fragment),Ce=d(),oo=a("span"),dt=s("Mixins"),Ao=d(),ee=a("p"),ct=s("The "),to=a("code"),ht=s("huggingface_hub"),pt=s(` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),Lo=d(),G=a("h3"),oe=a("a"),ao=a("span"),b(ye.$$.fragment),gt=d(),no=a("span"),mt=s("Generic"),Io=d(),H=a("div"),b(we.$$.fragment),ut=d(),S=a("p"),ft=s(`A generic Hub mixin for machine learning models. Define your own mixin for
any framework by inheriting from this class and overwriting the
`),ro=a("code"),_t=s("_from_pretrained"),bt=s(" and "),so=a("code"),vt=s("_save_pretrained"),yt=s(` methods to define custom logic
for saving and loading your classes. See `),Ke=a("a"),wt=s("PyTorchModelHubMixin"),$t=s(` for an
example.`),xt=d(),te=a("div"),b($e.$$.fragment),kt=d(),io=a("p"),Mt=s("Overwrite this method in subclass to define how to save your model."),Ht=d(),ae=a("div"),b(xe.$$.fragment),Et=d(),lo=a("p"),jt=s(`Overwrite this method in subclass to define how to load your model from
pretrained`),Tt=d(),W=a("div"),b(ke.$$.fragment),Pt=d(),co=a("p"),Nt=s("Download and instantiate a model from the Hugging Face Hub."),Dt=d(),b(ne.$$.fragment),Ot=d(),R=a("div"),b(Me.$$.fragment),zt=d(),ho=a("p"),St=s("Upload model checkpoint to the Hub."),At=d(),A=a("p"),Lt=s("Use "),po=a("code"),It=s("allow_patterns"),Ft=s(" and "),go=a("code"),qt=s("ignore_patterns"),Ut=s(` to precisely filter which files
should be pushed to the hub. See `),Ve=a("a"),Ct=s("upload_folder()"),Kt=s(" reference for more details."),Vt=d(),re=a("div"),b(He.$$.fragment),Wt=d(),mo=a("p"),Rt=s("Save weights in local directory."),Fo=d(),Y=a("h3"),se=a("a"),uo=a("span"),b(Ee.$$.fragment),Bt=d(),fo=a("span"),Gt=s("PyTorch"),qo=d(),L=a("div"),b(je.$$.fragment),Yt=d(),I=a("p"),Jt=s("Implementation of "),We=a("a"),Qt=s("ModelHubMixin"),Xt=s(` to provide model Hub upload/download
capabilities to PyTorch models. The model is set in evaluation mode by
default using `),_o=a("code"),Zt=s("model.eval()"),ea=s(` (dropout modules are deactivated). To train
the model, you should first set it back in training mode with
`),bo=a("code"),oa=s("model.train()"),ta=s("."),aa=d(),b(ie.$$.fragment),Uo=d(),J=a("h3"),le=a("a"),vo=a("span"),b(Te.$$.fragment),na=d(),yo=a("span"),ra=s("Keras"),Co=d(),F=a("div"),b(Pe.$$.fragment),sa=d(),Ne=a("p"),ia=s("Implementation of "),Re=a("a"),la=s("ModelHubMixin"),da=s(` to provide model Hub upload/download
capabilities to Keras models.`),ca=d(),b(de.$$.fragment),Ko=d(),q=a("div"),b(De.$$.fragment),ha=d(),Oe=a("p"),pa=s(`Instantiate a pretrained Keras model from a pre-trained model from the Hub.
The model is expected to be in `),wo=a("code"),ga=s("SavedModel"),ma=s(" format."),ua=d(),b(ce.$$.fragment),Vo=d(),U=a("div"),b(ze.$$.fragment),fa=d(),Se=a("p"),_a=s(`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),$o=a("code"),ba=s("repo_path_or_name"),va=s("."),ya=d(),C=a("p"),wa=s("Use "),xo=a("code"),$a=s("allow_patterns"),xa=s(" and "),ko=a("code"),ka=s("ignore_patterns"),Ma=s(` to precisely filter which files should be
pushed to the hub. See `),Be=a("a"),Ha=s("upload_folder()"),Ea=s(" reference for more details."),Wo=d(),Q=a("div"),b(Ae.$$.fragment),ja=d(),Mo=a("p"),Ta=s(`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),Ro=d(),X=a("h3"),he=a("a"),Ho=a("span"),b(Le.$$.fragment),Pa=d(),Eo=a("span"),Na=s("Fastai"),Bo=d(),Z=a("div"),b(Ie.$$.fragment),Da=d(),jo=a("p"),Oa=s("Load pretrained fastai model from the Hub or from a local directory."),Go=d(),N=a("div"),b(Fe.$$.fragment),za=d(),To=a("p"),Sa=s("Upload learner checkpoint files to the Hub."),Aa=d(),K=a("p"),La=s("Use "),Po=a("em"),Ia=s("allow_patterns"),Fa=s(" and "),No=a("em"),qa=s("ignore_patterns"),Ua=s(` to precisely filter which files should be
pushed to the hub. See [`),Do=a("em"),Ca=s("upload_folder"),Ka=s("] reference for more details."),Va=d(),b(pe.$$.fragment),this.h()},l(o){const p=Un('[data-svelte="svelte-1phssyn"]',document.head);l=n(p,"META",{name:!0,content:!0}),p.forEach(t),k=c(o),m=n(o,"H1",{class:!0});var qe=r(m);f=n(qe,"A",{id:!0,class:!0,href:!0});var Oo=r(f);M=n(Oo,"SPAN",{});var zo=r(M);v(g.$$.fragment,zo),zo.forEach(t),Oo.forEach(t),_=c(qe),T=n(qe,"SPAN",{});var So=r(T);ve=i(So,"Mixins & serialization methods"),So.forEach(t),qe.forEach(t),E=c(o),j=n(o,"H2",{class:!0});var Ue=r(j);z=n(Ue,"A",{id:!0,class:!0,href:!0});var Ra=r(z);B=n(Ra,"SPAN",{});var Ba=r(B);v(V.$$.fragment,Ba),Ba.forEach(t),Ra.forEach(t),Ce=c(Ue),oo=n(Ue,"SPAN",{});var Ga=r(oo);dt=i(Ga,"Mixins"),Ga.forEach(t),Ue.forEach(t),Ao=c(o),ee=n(o,"P",{});var Jo=r(ee);ct=i(Jo,"The "),to=n(Jo,"CODE",{});var Ya=r(to);ht=i(Ya,"huggingface_hub"),Ya.forEach(t),pt=i(Jo,` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),Jo.forEach(t),Lo=c(o),G=n(o,"H3",{class:!0});var Qo=r(G);oe=n(Qo,"A",{id:!0,class:!0,href:!0});var Ja=r(oe);ao=n(Ja,"SPAN",{});var Qa=r(ao);v(ye.$$.fragment,Qa),Qa.forEach(t),Ja.forEach(t),gt=c(Qo),no=n(Qo,"SPAN",{});var Xa=r(no);mt=i(Xa,"Generic"),Xa.forEach(t),Qo.forEach(t),Io=c(o),H=n(o,"DIV",{class:!0});var P=r(H);v(we.$$.fragment,P),ut=c(P),S=n(P,"P",{});var ge=r(S);ft=i(ge,`A generic Hub mixin for machine learning models. Define your own mixin for
any framework by inheriting from this class and overwriting the
`),ro=n(ge,"CODE",{});var Za=r(ro);_t=i(Za,"_from_pretrained"),Za.forEach(t),bt=i(ge," and "),so=n(ge,"CODE",{});var en=r(so);vt=i(en,"_save_pretrained"),en.forEach(t),yt=i(ge,` methods to define custom logic
for saving and loading your classes. See `),Ke=n(ge,"A",{href:!0});var on=r(Ke);wt=i(on,"PyTorchModelHubMixin"),on.forEach(t),$t=i(ge,` for an
example.`),ge.forEach(t),xt=c(P),te=n(P,"DIV",{class:!0});var Xo=r(te);v($e.$$.fragment,Xo),kt=c(Xo),io=n(Xo,"P",{});var tn=r(io);Mt=i(tn,"Overwrite this method in subclass to define how to save your model."),tn.forEach(t),Xo.forEach(t),Ht=c(P),ae=n(P,"DIV",{class:!0});var Zo=r(ae);v(xe.$$.fragment,Zo),Et=c(Zo),lo=n(Zo,"P",{});var an=r(lo);jt=i(an,`Overwrite this method in subclass to define how to load your model from
pretrained`),an.forEach(t),Zo.forEach(t),Tt=c(P),W=n(P,"DIV",{class:!0});var Ge=r(W);v(ke.$$.fragment,Ge),Pt=c(Ge),co=n(Ge,"P",{});var nn=r(co);Nt=i(nn,"Download and instantiate a model from the Hugging Face Hub."),nn.forEach(t),Dt=c(Ge),v(ne.$$.fragment,Ge),Ge.forEach(t),Ot=c(P),R=n(P,"DIV",{class:!0});var Ye=r(R);v(Me.$$.fragment,Ye),zt=c(Ye),ho=n(Ye,"P",{});var rn=r(ho);St=i(rn,"Upload model checkpoint to the Hub."),rn.forEach(t),At=c(Ye),A=n(Ye,"P",{});var me=r(A);Lt=i(me,"Use "),po=n(me,"CODE",{});var sn=r(po);It=i(sn,"allow_patterns"),sn.forEach(t),Ft=i(me," and "),go=n(me,"CODE",{});var ln=r(go);qt=i(ln,"ignore_patterns"),ln.forEach(t),Ut=i(me,` to precisely filter which files
should be pushed to the hub. See `),Ve=n(me,"A",{href:!0});var dn=r(Ve);Ct=i(dn,"upload_folder()"),dn.forEach(t),Kt=i(me," reference for more details."),me.forEach(t),Ye.forEach(t),Vt=c(P),re=n(P,"DIV",{class:!0});var et=r(re);v(He.$$.fragment,et),Wt=c(et),mo=n(et,"P",{});var cn=r(mo);Rt=i(cn,"Save weights in local directory."),cn.forEach(t),et.forEach(t),P.forEach(t),Fo=c(o),Y=n(o,"H3",{class:!0});var ot=r(Y);se=n(ot,"A",{id:!0,class:!0,href:!0});var hn=r(se);uo=n(hn,"SPAN",{});var pn=r(uo);v(Ee.$$.fragment,pn),pn.forEach(t),hn.forEach(t),Bt=c(ot),fo=n(ot,"SPAN",{});var gn=r(fo);Gt=i(gn,"PyTorch"),gn.forEach(t),ot.forEach(t),qo=c(o),L=n(o,"DIV",{class:!0});var Je=r(L);v(je.$$.fragment,Je),Yt=c(Je),I=n(Je,"P",{});var ue=r(I);Jt=i(ue,"Implementation of "),We=n(ue,"A",{href:!0});var mn=r(We);Qt=i(mn,"ModelHubMixin"),mn.forEach(t),Xt=i(ue,` to provide model Hub upload/download
capabilities to PyTorch models. The model is set in evaluation mode by
default using `),_o=n(ue,"CODE",{});var un=r(_o);Zt=i(un,"model.eval()"),un.forEach(t),ea=i(ue,` (dropout modules are deactivated). To train
the model, you should first set it back in training mode with
`),bo=n(ue,"CODE",{});var fn=r(bo);oa=i(fn,"model.train()"),fn.forEach(t),ta=i(ue,"."),ue.forEach(t),aa=c(Je),v(ie.$$.fragment,Je),Je.forEach(t),Uo=c(o),J=n(o,"H3",{class:!0});var tt=r(J);le=n(tt,"A",{id:!0,class:!0,href:!0});var _n=r(le);vo=n(_n,"SPAN",{});var bn=r(vo);v(Te.$$.fragment,bn),bn.forEach(t),_n.forEach(t),na=c(tt),yo=n(tt,"SPAN",{});var vn=r(yo);ra=i(vn,"Keras"),vn.forEach(t),tt.forEach(t),Co=c(o),F=n(o,"DIV",{class:!0});var Qe=r(F);v(Pe.$$.fragment,Qe),sa=c(Qe),Ne=n(Qe,"P",{});var at=r(Ne);ia=i(at,"Implementation of "),Re=n(at,"A",{href:!0});var yn=r(Re);la=i(yn,"ModelHubMixin"),yn.forEach(t),da=i(at,` to provide model Hub upload/download
capabilities to Keras models.`),at.forEach(t),ca=c(Qe),v(de.$$.fragment,Qe),Qe.forEach(t),Ko=c(o),q=n(o,"DIV",{class:!0});var Xe=r(q);v(De.$$.fragment,Xe),ha=c(Xe),Oe=n(Xe,"P",{});var nt=r(Oe);pa=i(nt,`Instantiate a pretrained Keras model from a pre-trained model from the Hub.
The model is expected to be in `),wo=n(nt,"CODE",{});var wn=r(wo);ga=i(wn,"SavedModel"),wn.forEach(t),ma=i(nt," format."),nt.forEach(t),ua=c(Xe),v(ce.$$.fragment,Xe),Xe.forEach(t),Vo=c(o),U=n(o,"DIV",{class:!0});var Ze=r(U);v(ze.$$.fragment,Ze),fa=c(Ze),Se=n(Ze,"P",{});var rt=r(Se);_a=i(rt,`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),$o=n(rt,"CODE",{});var $n=r($o);ba=i($n,"repo_path_or_name"),$n.forEach(t),va=i(rt,"."),rt.forEach(t),ya=c(Ze),C=n(Ze,"P",{});var fe=r(C);wa=i(fe,"Use "),xo=n(fe,"CODE",{});var xn=r(xo);$a=i(xn,"allow_patterns"),xn.forEach(t),xa=i(fe," and "),ko=n(fe,"CODE",{});var kn=r(ko);ka=i(kn,"ignore_patterns"),kn.forEach(t),Ma=i(fe,` to precisely filter which files should be
pushed to the hub. See `),Be=n(fe,"A",{href:!0});var Mn=r(Be);Ha=i(Mn,"upload_folder()"),Mn.forEach(t),Ea=i(fe," reference for more details."),fe.forEach(t),Ze.forEach(t),Wo=c(o),Q=n(o,"DIV",{class:!0});var st=r(Q);v(Ae.$$.fragment,st),ja=c(st),Mo=n(st,"P",{});var Hn=r(Mo);Ta=i(Hn,`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),Hn.forEach(t),st.forEach(t),Ro=c(o),X=n(o,"H3",{class:!0});var it=r(X);he=n(it,"A",{id:!0,class:!0,href:!0});var En=r(he);Ho=n(En,"SPAN",{});var jn=r(Ho);v(Le.$$.fragment,jn),jn.forEach(t),En.forEach(t),Pa=c(it),Eo=n(it,"SPAN",{});var Tn=r(Eo);Na=i(Tn,"Fastai"),Tn.forEach(t),it.forEach(t),Bo=c(o),Z=n(o,"DIV",{class:!0});var lt=r(Z);v(Ie.$$.fragment,lt),Da=c(lt),jo=n(lt,"P",{});var Pn=r(jo);Oa=i(Pn,"Load pretrained fastai model from the Hub or from a local directory."),Pn.forEach(t),lt.forEach(t),Go=c(o),N=n(o,"DIV",{class:!0});var _e=r(N);v(Fe.$$.fragment,_e),za=c(_e),To=n(_e,"P",{});var Nn=r(To);Sa=i(Nn,"Upload learner checkpoint files to the Hub."),Nn.forEach(t),Aa=c(_e),K=n(_e,"P",{});var be=r(K);La=i(be,"Use "),Po=n(be,"EM",{});var Dn=r(Po);Ia=i(Dn,"allow_patterns"),Dn.forEach(t),Fa=i(be," and "),No=n(be,"EM",{});var On=r(No);qa=i(On,"ignore_patterns"),On.forEach(t),Ua=i(be,` to precisely filter which files should be
pushed to the hub. See [`),Do=n(be,"EM",{});var zn=r(Do);Ca=i(zn,"upload_folder"),zn.forEach(t),Ka=i(be,"] reference for more details."),be.forEach(t),Va=c(_e),v(pe.$$.fragment,_e),_e.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(Yn)),h(f,"id","mixins-serialization-methods"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#mixins-serialization-methods"),h(m,"class","relative group"),h(z,"id","mixins"),h(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(z,"href","#mixins"),h(j,"class","relative group"),h(oe,"id","huggingface_hub.ModelHubMixin"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#huggingface_hub.ModelHubMixin"),h(G,"class","relative group"),h(Ke,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/mixins#huggingface_hub.PyTorchModelHubMixin"),h(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ve,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/hf_api#huggingface_hub.HfApi.upload_folder"),h(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"id","huggingface_hub.PyTorchModelHubMixin"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#huggingface_hub.PyTorchModelHubMixin"),h(Y,"class","relative group"),h(We,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/mixins#huggingface_hub.ModelHubMixin"),h(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"id","huggingface_hub.KerasModelHubMixin"),h(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(le,"href","#huggingface_hub.KerasModelHubMixin"),h(J,"class","relative group"),h(Re,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/mixins#huggingface_hub.ModelHubMixin"),h(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"href","/docs/huggingface_hub/v0.11.0.rc1/en/package_reference/hf_api#huggingface_hub.HfApi.upload_folder"),h(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"id","huggingface_hub.from_pretrained_fastai"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#huggingface_hub.from_pretrained_fastai"),h(X,"class","relative group"),h(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,p){e(document.head,l),u(o,k,p),u(o,m,p),e(m,f),e(f,M),y(g,M,null),e(m,_),e(m,T),e(T,ve),u(o,E,p),u(o,j,p),e(j,z),e(z,B),y(V,B,null),e(j,Ce),e(j,oo),e(oo,dt),u(o,Ao,p),u(o,ee,p),e(ee,ct),e(ee,to),e(to,ht),e(ee,pt),u(o,Lo,p),u(o,G,p),e(G,oe),e(oe,ao),y(ye,ao,null),e(G,gt),e(G,no),e(no,mt),u(o,Io,p),u(o,H,p),y(we,H,null),e(H,ut),e(H,S),e(S,ft),e(S,ro),e(ro,_t),e(S,bt),e(S,so),e(so,vt),e(S,yt),e(S,Ke),e(Ke,wt),e(S,$t),e(H,xt),e(H,te),y($e,te,null),e(te,kt),e(te,io),e(io,Mt),e(H,Ht),e(H,ae),y(xe,ae,null),e(ae,Et),e(ae,lo),e(lo,jt),e(H,Tt),e(H,W),y(ke,W,null),e(W,Pt),e(W,co),e(co,Nt),e(W,Dt),y(ne,W,null),e(H,Ot),e(H,R),y(Me,R,null),e(R,zt),e(R,ho),e(ho,St),e(R,At),e(R,A),e(A,Lt),e(A,po),e(po,It),e(A,Ft),e(A,go),e(go,qt),e(A,Ut),e(A,Ve),e(Ve,Ct),e(A,Kt),e(H,Vt),e(H,re),y(He,re,null),e(re,Wt),e(re,mo),e(mo,Rt),u(o,Fo,p),u(o,Y,p),e(Y,se),e(se,uo),y(Ee,uo,null),e(Y,Bt),e(Y,fo),e(fo,Gt),u(o,qo,p),u(o,L,p),y(je,L,null),e(L,Yt),e(L,I),e(I,Jt),e(I,We),e(We,Qt),e(I,Xt),e(I,_o),e(_o,Zt),e(I,ea),e(I,bo),e(bo,oa),e(I,ta),e(L,aa),y(ie,L,null),u(o,Uo,p),u(o,J,p),e(J,le),e(le,vo),y(Te,vo,null),e(J,na),e(J,yo),e(yo,ra),u(o,Co,p),u(o,F,p),y(Pe,F,null),e(F,sa),e(F,Ne),e(Ne,ia),e(Ne,Re),e(Re,la),e(Ne,da),e(F,ca),y(de,F,null),u(o,Ko,p),u(o,q,p),y(De,q,null),e(q,ha),e(q,Oe),e(Oe,pa),e(Oe,wo),e(wo,ga),e(Oe,ma),e(q,ua),y(ce,q,null),u(o,Vo,p),u(o,U,p),y(ze,U,null),e(U,fa),e(U,Se),e(Se,_a),e(Se,$o),e($o,ba),e(Se,va),e(U,ya),e(U,C),e(C,wa),e(C,xo),e(xo,$a),e(C,xa),e(C,ko),e(ko,ka),e(C,Ma),e(C,Be),e(Be,Ha),e(C,Ea),u(o,Wo,p),u(o,Q,p),y(Ae,Q,null),e(Q,ja),e(Q,Mo),e(Mo,Ta),u(o,Ro,p),u(o,X,p),e(X,he),e(he,Ho),y(Le,Ho,null),e(X,Pa),e(X,Eo),e(Eo,Na),u(o,Bo,p),u(o,Z,p),y(Ie,Z,null),e(Z,Da),e(Z,jo),e(jo,Oa),u(o,Go,p),u(o,N,p),y(Fe,N,null),e(N,za),e(N,To),e(To,Sa),e(N,Aa),e(N,K),e(K,La),e(K,Po),e(Po,Ia),e(K,Fa),e(K,No),e(No,qa),e(K,Ua),e(K,Do),e(Do,Ca),e(K,Ka),e(N,Va),y(pe,N,null),Yo=!0},p(o,[p]){const qe={};p&2&&(qe.$$scope={dirty:p,ctx:o}),ne.$set(qe);const Oo={};p&2&&(Oo.$$scope={dirty:p,ctx:o}),ie.$set(Oo);const zo={};p&2&&(zo.$$scope={dirty:p,ctx:o}),de.$set(zo);const So={};p&2&&(So.$$scope={dirty:p,ctx:o}),ce.$set(So);const Ue={};p&2&&(Ue.$$scope={dirty:p,ctx:o}),pe.$set(Ue)},i(o){Yo||(w(g.$$.fragment,o),w(V.$$.fragment,o),w(ye.$$.fragment,o),w(we.$$.fragment,o),w($e.$$.fragment,o),w(xe.$$.fragment,o),w(ke.$$.fragment,o),w(ne.$$.fragment,o),w(Me.$$.fragment,o),w(He.$$.fragment,o),w(Ee.$$.fragment,o),w(je.$$.fragment,o),w(ie.$$.fragment,o),w(Te.$$.fragment,o),w(Pe.$$.fragment,o),w(de.$$.fragment,o),w(De.$$.fragment,o),w(ce.$$.fragment,o),w(ze.$$.fragment,o),w(Ae.$$.fragment,o),w(Le.$$.fragment,o),w(Ie.$$.fragment,o),w(Fe.$$.fragment,o),w(pe.$$.fragment,o),Yo=!0)},o(o){$(g.$$.fragment,o),$(V.$$.fragment,o),$(ye.$$.fragment,o),$(we.$$.fragment,o),$($e.$$.fragment,o),$(xe.$$.fragment,o),$(ke.$$.fragment,o),$(ne.$$.fragment,o),$(Me.$$.fragment,o),$(He.$$.fragment,o),$(Ee.$$.fragment,o),$(je.$$.fragment,o),$(ie.$$.fragment,o),$(Te.$$.fragment,o),$(Pe.$$.fragment,o),$(de.$$.fragment,o),$(De.$$.fragment,o),$(ce.$$.fragment,o),$(ze.$$.fragment,o),$(Ae.$$.fragment,o),$(Le.$$.fragment,o),$(Ie.$$.fragment,o),$(Fe.$$.fragment,o),$(pe.$$.fragment,o),Yo=!1},d(o){t(l),o&&t(k),o&&t(m),x(g),o&&t(E),o&&t(j),x(V),o&&t(Ao),o&&t(ee),o&&t(Lo),o&&t(G),x(ye),o&&t(Io),o&&t(H),x(we),x($e),x(xe),x(ke),x(ne),x(Me),x(He),o&&t(Fo),o&&t(Y),x(Ee),o&&t(qo),o&&t(L),x(je),x(ie),o&&t(Uo),o&&t(J),x(Te),o&&t(Co),o&&t(F),x(Pe),x(de),o&&t(Ko),o&&t(q),x(De),x(ce),o&&t(Vo),o&&t(U),x(ze),o&&t(Wo),o&&t(Q),x(Ae),o&&t(Ro),o&&t(X),x(Le),o&&t(Bo),o&&t(Z),x(Ie),o&&t(Go),o&&t(N),x(Fe),x(pe)}}}const Yn={local:"mixins-serialization-methods",sections:[{local:"mixins",sections:[{local:"huggingface_hub.ModelHubMixin",title:"Generic"},{local:"huggingface_hub.PyTorchModelHubMixin",title:"PyTorch"},{local:"huggingface_hub.KerasModelHubMixin",title:"Keras"},{local:"huggingface_hub.from_pretrained_fastai",title:"Fastai"}],title:"Mixins"}],title:"Mixins & serialization methods"};function Jn(O){return Cn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ar extends In{constructor(l){super();Fn(this,l,Jn,Gn,qn,{})}}export{ar as default,Yn as metadata};
