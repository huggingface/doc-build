import{S as Cn,i as qn,s as Fn,e as t,k as d,w as v,t as r,M as Ln,c as a,d as n,m as l,a as i,x as y,h as s,b as g,F as e,g as u,y as w,q as k,o as x,B as $,v as Kn}from"../../chunks/vendor-7b1da053.js";import{T as In}from"../../chunks/Tip-41a95816.js";import{D as Y}from"../../chunks/Docstring-f1352b16.js";import{I as so}from"../../chunks/IconCopyLink-d24e9a6f.js";function Wn(he){let h,T,m,f,M;return{c(){h=t("p"),T=r("Passing "),m=t("code"),f=r("use_auth_token=True"),M=r(` is required when you want to use a
private model.`)},l(p){h=a(p,"P",{});var _=i(h);T=s(_,"Passing "),m=a(_,"CODE",{});var E=i(m);f=s(E,"use_auth_token=True"),E.forEach(n),M=s(_,` is required when you want to use a
private model.`),_.forEach(n)},m(p,_){u(p,h,_),e(h,T),e(h,m),e(m,f),e(h,M)},d(p){p&&n(h)}}}function Un(he){let h,T,m,f,M;return{c(){h=t("p"),T=r("Passing "),m=t("code"),f=r("use_auth_token=True"),M=r(` is required when you want to use a private
model.`)},l(p){h=a(p,"P",{});var _=i(h);T=s(_,"Passing "),m=a(_,"CODE",{});var E=i(m);f=s(E,"use_auth_token=True"),E.forEach(n),M=s(_,` is required when you want to use a private
model.`),_.forEach(n)},m(p,_){u(p,h,_),e(h,T),e(h,m),e(m,f),e(h,M)},d(p){p&&n(h)}}}function Vn(he){let h,T,m,f,M,p,_,E,lo,Le,N,F,fe,J,co,be,ho,Ke,L,go,ve,uo,mo,We,S,K,ye,Q,po,we,_o,Ue,b,X,fo,H,bo,ke,vo,yo,xe,wo,ko,$e,xo,$o,Mo,O,Z,To,A,Eo,Me,Ho,zo,Te,Po,Oo,Do,W,No,U,ee,So,oe,Ao,Ee,Io,Co,qo,V,ne,Fo,He,Lo,Ve,I,j,ze,te,Ko,Pe,Wo,je,z,ae,Uo,Oe,Vo,jo,B,Be,C,ie,Bo,re,Ro,De,Go,Yo,Re,q,se,Jo,Ne,Qo,Ge,P,de,Xo,Se,Zo,en,le,ge,Ae,on,nn,tn,R,Ie,an,rn,Ce,sn,dn,Ye;return p=new so({}),J=new so({}),Q=new so({}),X=new Y({props:{name:"class huggingface_hub.ModelHubMixin",anchor:"huggingface_hub.ModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/hub_mixin.py#L22"}}),Z=new Y({props:{name:"from_pretrained",anchor:"huggingface_hub.ModelHubMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": str"},{name:"force_download",val:": bool = False"},{name:"resume_download",val:": bool = False"},{name:"proxies",val:": typing.Dict = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"},{name:"cache_dir",val:": typing.Optional[str] = None"},{name:"local_files_only",val:": bool = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/hub_mixin.py#L73",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
<code>save_pretrained</code>,
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
used on each request.`,name:"proxies"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote
files. If <code>True</code>, will use the token generated when
running <code>transformers-cli login</code> (stored in
<code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained
model configuration should be cached if the standard
cache should not be used.`,name:"cache_dir"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to
download the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during
initialization`,name:"model_kwargs"}]}}),W=new In({props:{$$slots:{default:[Wn]},$$scope:{ctx:he}}}),ee=new Y({props:{name:"push_to_hub",anchor:"huggingface_hub.ModelHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/hub_mixin.py#L211",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your model or tokenizer in
the Hub or a path to a local folder (in which case the
repository will have the name of that local folder). If not
specified, will default to the name given by <code>repo_url</code> and a
local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository
in the hub. If unspecified, a new repository will be created in
your namespace (unless you specify an <code>organization</code>) with
<code>repo_name</code>.`,name:"repo_url"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>,
<code>&quot;add tokenizer&quot;</code> or <code>&quot;add model&quot;</code> depending on the type of the
class.`,name:"commit_message"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your model or tokenizer
(you must be a member of this organization).`,name:"organization"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files.
If <code>True</code>, will use the token generated when running
<code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will
default to <code>True</code> if <code>repo_url</code> is not specified.`,name:"use_auth_token"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.git_user",description:`<strong>git_user</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.name</code> for committing and
pushing files to the hub.`,name:"git_user"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.git_email",description:`<strong>git_email</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.email</code> for committing and
pushing files to the hub.`,name:"git_email"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"}],returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),ne=new Y({props:{name:"save_pretrained",anchor:"huggingface_hub.ModelHubMixin.save_pretrained",parameters:[{name:"save_directory",val:": str"},{name:"config",val:": typing.Optional[dict] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/hub_mixin.py#L30",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
Specify directory in which you want to save weights.`,name:"save_directory"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
specify config (must be dict) in case you want to save
it.`,name:"config"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set it to <code>True</code> in case you want to push your weights
to huggingface_hub`,name:"push_to_hub"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
kwargs will be passed to <code>push_to_hub</code>`,name:"kwargs"}]}}),te=new so({}),ae=new Y({props:{name:"huggingface_hub.from_pretrained_keras",anchor:"huggingface_hub.from_pretrained_keras",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/keras_mixin.py#L208",parametersDescription:[{anchor:"huggingface_hub.from_pretrained_keras.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
<code>save_pretrained</code>, e.g.,
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
proxies are used on each request.`,name:"proxies"},{anchor:"huggingface_hub.from_pretrained_keras.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<code>True</code>, will use the token generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"huggingface_hub.from_pretrained_keras.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model
configuration should be cached if the standard cache should not be
used.`,name:"cache_dir"},{anchor:"huggingface_hub.from_pretrained_keras.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to download
the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.from_pretrained_keras.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during initialization`,name:"model_kwargs"}]}}),B=new In({props:{$$slots:{default:[Un]},$$scope:{ctx:he}}}),ie=new Y({props:{name:"huggingface_hub.push_to_hub_keras",anchor:"huggingface_hub.push_to_hub_keras",parameters:[{name:"model",val:""},{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"log_dir",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = True"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/keras_mixin.py#L267",parametersDescription:[{anchor:"huggingface_hub.push_to_hub_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="%60https://www.tensorflow.org/api_docs/python/tf/keras/Model%60">Keras
model</a>
you&#x2019;d like to push to the Hub. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.push_to_hub_keras.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your model or tokenizer in the
Hub or a path to a local folder (in which case the repository will
have the name of that local folder). If not specified, will default
to the name given by <code>repo_url</code> and a local directory with that name
will be created.`,name:"repo_path_or_name"},{anchor:"huggingface_hub.push_to_hub_keras.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in
the Hub. If unspecified, a new repository will be created in your
namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"huggingface_hub.push_to_hub_keras.log_dir",description:`<strong>log_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
TensorBoard logging directory to be pushed. The Hub automatically
hosts and displays a TensorBoard instance if log files are included
in the repository.`,name:"log_dir"},{anchor:"huggingface_hub.push_to_hub_keras.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;Add message&#x201D;) &#x2014;
Message to commit while pushing.`,name:"commit_message"},{anchor:"huggingface_hub.push_to_hub_keras.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your model or tokenizer (you
must be a member of this organization).`,name:"organization"},{anchor:"huggingface_hub.push_to_hub_keras.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.push_to_hub_keras.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.push_to_hub_keras.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<code>True</code>, will use the token generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code>.`,name:"use_auth_token"},{anchor:"huggingface_hub.push_to_hub_keras.git_user",description:`<strong>git_user</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.name</code> for committing and pushing
files to the Hub.`,name:"git_user"},{anchor:"huggingface_hub.push_to_hub_keras.git_email",description:`<strong>git_email</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.email</code> for committing and pushing
files to the Hub.`,name:"git_email"},{anchor:"huggingface_hub.push_to_hub_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.push_to_hub_keras.include_optimizer",description:`<strong>include_optimizer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer during serialization.`,name:"include_optimizer"},{anchor:"huggingface_hub.push_to_hub_keras.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the task the model was trained on. Available tasks
<a href="https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts" rel="nofollow">here</a>.`,name:"task_name"},{anchor:"huggingface_hub.push_to_hub_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.push_to_hub_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}],returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),se=new Y({props:{name:"huggingface_hub.save_pretrained_keras",anchor:"huggingface_hub.save_pretrained_keras",parameters:[{name:"model",val:""},{name:"save_directory",val:": str"},{name:"config",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/keras_mixin.py#L146",parametersDescription:[{anchor:"huggingface_hub.save_pretrained_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Keras
model</a>
you&#x2019;d like to save. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.save_pretrained_keras.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
Specify directory in which you want to save the Keras model.`,name:"save_directory"},{anchor:"huggingface_hub.save_pretrained_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.save_pretrained_keras.include_optimizer(bool,",description:`<strong>include_optimizer(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer in serialization.`,name:"include_optimizer(bool,"},{anchor:"huggingface_hub.save_pretrained_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.save_pretrained_keras.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the task the model was trained on. Available tasks
<a href="https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Types.ts" rel="nofollow">here</a>.`,name:"task_name"},{anchor:"huggingface_hub.save_pretrained_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}]}}),de=new Y({props:{name:"class huggingface_hub.KerasModelHubMixin",anchor:"huggingface_hub.KerasModelHubMixin",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/v0.5.1/src/huggingface_hub/keras_mixin.py#L408"}}),{c(){h=t("meta"),T=d(),m=t("h1"),f=t("a"),M=t("span"),v(p.$$.fragment),_=d(),E=t("span"),lo=r("Mixins & serialization methods"),Le=d(),N=t("h2"),F=t("a"),fe=t("span"),v(J.$$.fragment),co=d(),be=t("span"),ho=r("Mixins"),Ke=d(),L=t("p"),go=r("The "),ve=t("code"),uo=r("huggingface_hub"),mo=r(` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),We=d(),S=t("h3"),K=t("a"),ye=t("span"),v(Q.$$.fragment),po=d(),we=t("span"),_o=r("PyTorch"),Ue=d(),b=t("div"),v(X.$$.fragment),fo=d(),H=t("p"),bo=r(`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting `),ke=t("code"),vo=r("_from_pretrained"),yo=r(` and
`),xe=t("code"),wo=r("_save_pretrained"),ko=r(` to define custom logic for saving/loading your classes.
See `),$e=t("code"),xo=r("huggingface_hub.PyTorchModelHubMixin"),$o=r(" for an example."),Mo=d(),O=t("div"),v(Z.$$.fragment),To=d(),A=t("p"),Eo=r(`Instantiate a pretrained PyTorch model from a pre-trained model
configuration from huggingface-hub. The model is set in
evaluation mode by default using `),Me=t("code"),Ho=r("model.eval()"),zo=r(` (Dropout modules
are deactivated). To train the model, you should first set it
back in training mode with `),Te=t("code"),Po=r("model.train()"),Oo=r("."),Do=d(),v(W.$$.fragment),No=d(),U=t("div"),v(ee.$$.fragment),So=d(),oe=t("p"),Ao=r(`Upload model checkpoint or tokenizer files to the Hub while
synchronizing a local clone of the repo in `),Ee=t("code"),Io=r("repo_path_or_name"),Co=r("."),qo=d(),V=t("div"),v(ne.$$.fragment),Fo=d(),He=t("p"),Lo=r("Save weights in local directory."),Ve=d(),I=t("h3"),j=t("a"),ze=t("span"),v(te.$$.fragment),Ko=d(),Pe=t("span"),Wo=r("Keras"),je=d(),z=t("div"),v(ae.$$.fragment),Uo=d(),Oe=t("p"),Vo=r("Instantiate a pretrained Keras model from a pre-trained model from the Hub.\nThe model is expected to be in SavedModel format.```"),jo=d(),v(B.$$.fragment),Be=d(),C=t("div"),v(ie.$$.fragment),Bo=d(),re=t("p"),Ro=r(`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),De=t("code"),Go=r("repo_path_or_name"),Yo=r("."),Re=d(),q=t("div"),v(se.$$.fragment),Jo=d(),Ne=t("p"),Qo=r(`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),Ge=d(),P=t("div"),v(de.$$.fragment),Xo=d(),Se=t("p"),Zo=r(`Mixin to provide model Hub upload/download capabilities to Keras models.
Override this class to obtain the following internal methods:`),en=d(),le=t("ul"),ge=t("li"),Ae=t("code"),on=r("_from_pretrained"),nn=r(", to load a model from the Hub or from local files."),tn=d(),R=t("li"),Ie=t("code"),an=r("_save_pretrained"),rn=r(", to save a model in the "),Ce=t("code"),sn=r("SavedModel"),dn=r(" format."),this.h()},l(o){const c=Ln('[data-svelte="svelte-1phssyn"]',document.head);h=a(c,"META",{name:!0,content:!0}),c.forEach(n),T=l(o),m=a(o,"H1",{class:!0});var ce=i(m);f=a(ce,"A",{id:!0,class:!0,href:!0});var qe=i(f);M=a(qe,"SPAN",{});var cn=i(M);y(p.$$.fragment,cn),cn.forEach(n),qe.forEach(n),_=l(ce),E=a(ce,"SPAN",{});var hn=i(E);lo=s(hn,"Mixins & serialization methods"),hn.forEach(n),ce.forEach(n),Le=l(o),N=a(o,"H2",{class:!0});var Je=i(N);F=a(Je,"A",{id:!0,class:!0,href:!0});var gn=i(F);fe=a(gn,"SPAN",{});var un=i(fe);y(J.$$.fragment,un),un.forEach(n),gn.forEach(n),co=l(Je),be=a(Je,"SPAN",{});var mn=i(be);ho=s(mn,"Mixins"),mn.forEach(n),Je.forEach(n),Ke=l(o),L=a(o,"P",{});var Qe=i(L);go=s(Qe,"The "),ve=a(Qe,"CODE",{});var pn=i(ve);uo=s(pn,"huggingface_hub"),pn.forEach(n),mo=s(Qe,` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),Qe.forEach(n),We=l(o),S=a(o,"H3",{class:!0});var Xe=i(S);K=a(Xe,"A",{id:!0,class:!0,href:!0});var _n=i(K);ye=a(_n,"SPAN",{});var fn=i(ye);y(Q.$$.fragment,fn),fn.forEach(n),_n.forEach(n),po=l(Xe),we=a(Xe,"SPAN",{});var bn=i(we);_o=s(bn,"PyTorch"),bn.forEach(n),Xe.forEach(n),Ue=l(o),b=a(o,"DIV",{class:!0});var D=i(b);y(X.$$.fragment,D),fo=l(D),H=a(D,"P",{});var G=i(H);bo=s(G,`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting `),ke=a(G,"CODE",{});var vn=i(ke);vo=s(vn,"_from_pretrained"),vn.forEach(n),yo=s(G,` and
`),xe=a(G,"CODE",{});var yn=i(xe);wo=s(yn,"_save_pretrained"),yn.forEach(n),ko=s(G,` to define custom logic for saving/loading your classes.
See `),$e=a(G,"CODE",{});var wn=i($e);xo=s(wn,"huggingface_hub.PyTorchModelHubMixin"),wn.forEach(n),$o=s(G," for an example."),G.forEach(n),Mo=l(D),O=a(D,"DIV",{class:!0});var ue=i(O);y(Z.$$.fragment,ue),To=l(ue),A=a(ue,"P",{});var me=i(A);Eo=s(me,`Instantiate a pretrained PyTorch model from a pre-trained model
configuration from huggingface-hub. The model is set in
evaluation mode by default using `),Me=a(me,"CODE",{});var kn=i(Me);Ho=s(kn,"model.eval()"),kn.forEach(n),zo=s(me,` (Dropout modules
are deactivated). To train the model, you should first set it
back in training mode with `),Te=a(me,"CODE",{});var xn=i(Te);Po=s(xn,"model.train()"),xn.forEach(n),Oo=s(me,"."),me.forEach(n),Do=l(ue),y(W.$$.fragment,ue),ue.forEach(n),No=l(D),U=a(D,"DIV",{class:!0});var Ze=i(U);y(ee.$$.fragment,Ze),So=l(Ze),oe=a(Ze,"P",{});var eo=i(oe);Ao=s(eo,`Upload model checkpoint or tokenizer files to the Hub while
synchronizing a local clone of the repo in `),Ee=a(eo,"CODE",{});var $n=i(Ee);Io=s($n,"repo_path_or_name"),$n.forEach(n),Co=s(eo,"."),eo.forEach(n),Ze.forEach(n),qo=l(D),V=a(D,"DIV",{class:!0});var oo=i(V);y(ne.$$.fragment,oo),Fo=l(oo),He=a(oo,"P",{});var Mn=i(He);Lo=s(Mn,"Save weights in local directory."),Mn.forEach(n),oo.forEach(n),D.forEach(n),Ve=l(o),I=a(o,"H3",{class:!0});var no=i(I);j=a(no,"A",{id:!0,class:!0,href:!0});var Tn=i(j);ze=a(Tn,"SPAN",{});var En=i(ze);y(te.$$.fragment,En),En.forEach(n),Tn.forEach(n),Ko=l(no),Pe=a(no,"SPAN",{});var Hn=i(Pe);Wo=s(Hn,"Keras"),Hn.forEach(n),no.forEach(n),je=l(o),z=a(o,"DIV",{class:!0});var pe=i(z);y(ae.$$.fragment,pe),Uo=l(pe),Oe=a(pe,"P",{});var zn=i(Oe);Vo=s(zn,"Instantiate a pretrained Keras model from a pre-trained model from the Hub.\nThe model is expected to be in SavedModel format.```"),zn.forEach(n),jo=l(pe),y(B.$$.fragment,pe),pe.forEach(n),Be=l(o),C=a(o,"DIV",{class:!0});var to=i(C);y(ie.$$.fragment,to),Bo=l(to),re=a(to,"P",{});var ao=i(re);Ro=s(ao,`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),De=a(ao,"CODE",{});var Pn=i(De);Go=s(Pn,"repo_path_or_name"),Pn.forEach(n),Yo=s(ao,"."),ao.forEach(n),to.forEach(n),Re=l(o),q=a(o,"DIV",{class:!0});var io=i(q);y(se.$$.fragment,io),Jo=l(io),Ne=a(io,"P",{});var On=i(Ne);Qo=s(On,`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),On.forEach(n),io.forEach(n),Ge=l(o),P=a(o,"DIV",{class:!0});var _e=i(P);y(de.$$.fragment,_e),Xo=l(_e),Se=a(_e,"P",{});var Dn=i(Se);Zo=s(Dn,`Mixin to provide model Hub upload/download capabilities to Keras models.
Override this class to obtain the following internal methods:`),Dn.forEach(n),en=l(_e),le=a(_e,"UL",{});var ro=i(le);ge=a(ro,"LI",{});var ln=i(ge);Ae=a(ln,"CODE",{});var Nn=i(Ae);on=s(Nn,"_from_pretrained"),Nn.forEach(n),nn=s(ln,", to load a model from the Hub or from local files."),ln.forEach(n),tn=l(ro),R=a(ro,"LI",{});var Fe=i(R);Ie=a(Fe,"CODE",{});var Sn=i(Ie);an=s(Sn,"_save_pretrained"),Sn.forEach(n),rn=s(Fe,", to save a model in the "),Ce=a(Fe,"CODE",{});var An=i(Ce);sn=s(An,"SavedModel"),An.forEach(n),dn=s(Fe," format."),Fe.forEach(n),ro.forEach(n),_e.forEach(n),this.h()},h(){g(h,"name","hf:doc:metadata"),g(h,"content",JSON.stringify(jn)),g(f,"id","mixins-serialization-methods"),g(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(f,"href","#mixins-serialization-methods"),g(m,"class","relative group"),g(F,"id","mixins"),g(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(F,"href","#mixins"),g(N,"class","relative group"),g(K,"id","huggingface_hub.ModelHubMixin"),g(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(K,"href","#huggingface_hub.ModelHubMixin"),g(S,"class","relative group"),g(O,"class","docstring"),g(U,"class","docstring"),g(V,"class","docstring"),g(b,"class","docstring"),g(j,"id","huggingface_hub.from_pretrained_keras"),g(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(j,"href","#huggingface_hub.from_pretrained_keras"),g(I,"class","relative group"),g(z,"class","docstring"),g(C,"class","docstring"),g(q,"class","docstring"),g(P,"class","docstring")},m(o,c){e(document.head,h),u(o,T,c),u(o,m,c),e(m,f),e(f,M),w(p,M,null),e(m,_),e(m,E),e(E,lo),u(o,Le,c),u(o,N,c),e(N,F),e(F,fe),w(J,fe,null),e(N,co),e(N,be),e(be,ho),u(o,Ke,c),u(o,L,c),e(L,go),e(L,ve),e(ve,uo),e(L,mo),u(o,We,c),u(o,S,c),e(S,K),e(K,ye),w(Q,ye,null),e(S,po),e(S,we),e(we,_o),u(o,Ue,c),u(o,b,c),w(X,b,null),e(b,fo),e(b,H),e(H,bo),e(H,ke),e(ke,vo),e(H,yo),e(H,xe),e(xe,wo),e(H,ko),e(H,$e),e($e,xo),e(H,$o),e(b,Mo),e(b,O),w(Z,O,null),e(O,To),e(O,A),e(A,Eo),e(A,Me),e(Me,Ho),e(A,zo),e(A,Te),e(Te,Po),e(A,Oo),e(O,Do),w(W,O,null),e(b,No),e(b,U),w(ee,U,null),e(U,So),e(U,oe),e(oe,Ao),e(oe,Ee),e(Ee,Io),e(oe,Co),e(b,qo),e(b,V),w(ne,V,null),e(V,Fo),e(V,He),e(He,Lo),u(o,Ve,c),u(o,I,c),e(I,j),e(j,ze),w(te,ze,null),e(I,Ko),e(I,Pe),e(Pe,Wo),u(o,je,c),u(o,z,c),w(ae,z,null),e(z,Uo),e(z,Oe),e(Oe,Vo),e(z,jo),w(B,z,null),u(o,Be,c),u(o,C,c),w(ie,C,null),e(C,Bo),e(C,re),e(re,Ro),e(re,De),e(De,Go),e(re,Yo),u(o,Re,c),u(o,q,c),w(se,q,null),e(q,Jo),e(q,Ne),e(Ne,Qo),u(o,Ge,c),u(o,P,c),w(de,P,null),e(P,Xo),e(P,Se),e(Se,Zo),e(P,en),e(P,le),e(le,ge),e(ge,Ae),e(Ae,on),e(ge,nn),e(le,tn),e(le,R),e(R,Ie),e(Ie,an),e(R,rn),e(R,Ce),e(Ce,sn),e(R,dn),Ye=!0},p(o,[c]){const ce={};c&2&&(ce.$$scope={dirty:c,ctx:o}),W.$set(ce);const qe={};c&2&&(qe.$$scope={dirty:c,ctx:o}),B.$set(qe)},i(o){Ye||(k(p.$$.fragment,o),k(J.$$.fragment,o),k(Q.$$.fragment,o),k(X.$$.fragment,o),k(Z.$$.fragment,o),k(W.$$.fragment,o),k(ee.$$.fragment,o),k(ne.$$.fragment,o),k(te.$$.fragment,o),k(ae.$$.fragment,o),k(B.$$.fragment,o),k(ie.$$.fragment,o),k(se.$$.fragment,o),k(de.$$.fragment,o),Ye=!0)},o(o){x(p.$$.fragment,o),x(J.$$.fragment,o),x(Q.$$.fragment,o),x(X.$$.fragment,o),x(Z.$$.fragment,o),x(W.$$.fragment,o),x(ee.$$.fragment,o),x(ne.$$.fragment,o),x(te.$$.fragment,o),x(ae.$$.fragment,o),x(B.$$.fragment,o),x(ie.$$.fragment,o),x(se.$$.fragment,o),x(de.$$.fragment,o),Ye=!1},d(o){n(h),o&&n(T),o&&n(m),$(p),o&&n(Le),o&&n(N),$(J),o&&n(Ke),o&&n(L),o&&n(We),o&&n(S),$(Q),o&&n(Ue),o&&n(b),$(X),$(Z),$(W),$(ee),$(ne),o&&n(Ve),o&&n(I),$(te),o&&n(je),o&&n(z),$(ae),$(B),o&&n(Be),o&&n(C),$(ie),o&&n(Re),o&&n(q),$(se),o&&n(Ge),o&&n(P),$(de)}}}const jn={local:"mixins-serialization-methods",sections:[{local:"mixins",sections:[{local:"huggingface_hub.ModelHubMixin",title:"PyTorch"},{local:"huggingface_hub.from_pretrained_keras",title:"Keras"}],title:"Mixins"}],title:"Mixins & serialization methods"};function Bn(he){return Kn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qn extends Cn{constructor(h){super();qn(this,h,Bn,Vn,Fn,{})}}export{Qn as default,jn as metadata};
