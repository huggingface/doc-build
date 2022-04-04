import{S as _i,i as vi,s as Ti,e as s,k as d,w as v,t as r,M as bi,c as n,d as o,m as c,a as i,x as T,h as a,b as l,N as Ci,F as e,g as m,y as b,q as C,o as w,B as k,v as wi}from"../../chunks/vendor-6b77c823.js";import{T as gi}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as Zs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as zt}from"../../chunks/IconCopyLink-7a11ce68.js";function ki(at){let f,q,u,$,F,y,A,L;return{c(){f=s("p"),q=r(`This class method is simply calling the feature extractor
`),u=s("a"),$=r("from_pretrained()"),F=r(` and the tokenizer
`),y=s("code"),A=r("from_pretrained"),L=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(x){f=n(x,"P",{});var _=i(f);q=a(_,`This class method is simply calling the feature extractor
`),u=n(_,"A",{href:!0});var P=i(u);$=a(P,"from_pretrained()"),P.forEach(o),F=a(_,` and the tokenizer
`),y=n(_,"CODE",{});var z=i(y);A=a(z,"from_pretrained"),z.forEach(o),L=a(_,` methods. Please refer to the docstrings of the
methods above for more information.`),_.forEach(o),this.h()},h(){l(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(x,_){m(x,f,_),e(f,q),e(f,u),e(u,$),e(f,F),e(f,y),e(y,A),e(f,L)},d(x){x&&o(f)}}}function Oi(at){let f,q,u,$,F,y,A,L;return{c(){f=s("p"),q=r("This class method is simply calling "),u=s("a"),$=r("save_pretrained()"),F=r(` and
`),y=s("code"),A=r("save_pretrained"),L=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(x){f=n(x,"P",{});var _=i(f);q=a(_,"This class method is simply calling "),u=n(_,"A",{href:!0});var P=i(u);$=a(P,"save_pretrained()"),P.forEach(o),F=a(_,` and
`),y=n(_,"CODE",{});var z=i(y);A=a(z,"save_pretrained"),z.forEach(o),L=a(_,`. Please refer to the docstrings of the methods
above for more information.`),_.forEach(o),this.h()},h(){l(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(x,_){m(x,f,_),e(f,q),e(f,u),e(u,$),e(f,F),e(f,y),e(y,A),e(f,L)},d(x){x&&o(f)}}}function yi(at){let f,q,u,$,F,y,A,L,x,_,P,z,Ft,Ce,rr,Lt,ar,_o,S,sr,we,nr,ir,ke,lr,dr,vo,st,cr,To,nt,Dt,hr,bo,re,Js,Co,ae,mr,it,fr,pr,wo,se,ur,qt,gr,_r,ko,W,vr,Oe,Tr,br,ye,Cr,wr,Oo,lt,kr,yo,H,Re,Or,Ee,yr,Rr,Er,I,$r,$e,xr,Pr,xe,Mr,jr,Pe,zr,Fr,Lr,Me,Dr,dt,qr,Ar,Ro,Y,ne,At,je,Ir,It,Vr,Eo,B,Nr,Vt,Sr,Wr,ct,Hr,Br,$o,p,Ur,Nt,Xr,Gr,St,Zr,Jr,Wt,Yr,Kr,Ht,Qr,ea,ht,ta,oa,Bt,ra,aa,Ut,sa,na,Xt,ia,la,Gt,da,ca,xo,mt,Zt,ha,Po,ze,Mo,ie,ma,Fe,fa,pa,jo,K,le,Jt,Le,ua,Yt,ga,zo,M,De,_a,Q,va,ft,Ta,ba,qe,Ca,wa,ka,ee,Oa,pt,ya,Ra,ut,Ea,$a,xa,Kt,Pa,Ma,Ae,Fo,te,de,Qt,Ie,ja,eo,za,Lo,g,Ve,Fa,to,La,Da,R,gt,qa,Aa,oo,Ia,Va,ro,Na,Sa,ao,Wa,Ha,so,Ba,Ua,Ne,no,Xa,Ga,Za,_t,Ja,Ya,Ka,ce,Se,Qa,V,es,io,ts,os,vt,rs,as,lo,ss,ns,is,U,We,ls,co,ds,cs,he,hs,X,He,ms,Be,fs,Tt,ps,us,gs,me,_s,fe,Ue,vs,Xe,Ts,bt,bs,Cs,ws,pe,Ge,ks,Ze,Os,Ct,ys,Rs,Es,ue,Je,$s,ho,xs,Do,oe,ge,mo,Ye,Ps,fo,Ms,qo,D,Ke,js,N,zs,wt,Fs,Ls,po,Ds,qs,kt,As,Is,Vs,Qe,Ns,et,Ss,Ws,Hs,G,tt,Bs,uo,Us,Xs,ot,Ao;return y=new zt({}),Ce=new zt({}),je=new zt({}),ze=new Zs({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests 
from PIL import Image

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten") 
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset 
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg" 
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

pixel_values = processor(image, return_tensors="pt").pixel_values 
generated_ids = model.generate(pixel_values)

generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0] `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests 
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span> 
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values 
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>] `}}),Le=new zt({}),De=new J({props:{name:"class transformers.TrOCRConfig",anchor:"transformers.TrOCRConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"d_model",val:" = 1024"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"activation_function",val:" = 'gelu'"},{name:"max_position_embeddings",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = False"},{name:"scale_embedding",val:" = False"},{name:"use_learned_position_embeddings",val:" = True"},{name:"layernorm_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/configuration_trocr.py#L29",parametersDescription:[{anchor:"transformers.TrOCRConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the TrOCR model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRForCausalLM">TrOCRForCausalLM</a>.`,name:"vocab_size"},{anchor:"transformers.TrOCRConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.TrOCRConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.TrOCRConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.TrOCRConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.TrOCRConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.TrOCRConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TrOCRConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.TrOCRConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.TrOCRConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.TrOCRConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.TrOCRConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.TrOCRConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.TrOCRConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to scale the word embeddings by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.TrOCRConfig.use_learned_position_embeddings",description:`<strong>use_learned_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use learned position embeddings. If not, sinusoidal position embeddings will be used.`,name:"use_learned_position_embeddings"},{anchor:"transformers.TrOCRConfig.layernorm_embedding",description:`<strong>layernorm_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a layernorm after the word + position embeddings.`,name:"layernorm_embedding"}]}}),Ae=new Zs({props:{code:`from transformers import TrOCRForCausalLM, TrOCRConfig

# Initializing a TrOCR-base style configuration
configuration = TrOCRConfig()

# Initializing a model from the TrOCR-base style configuration
model = TrOCRForCausalLM(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRForCausalLM, TrOCRConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TrOCRConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the TrOCR-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TrOCRForCausalLM(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Ie=new zt({}),Ve=new J({props:{name:"class transformers.TrOCRProcessor",anchor:"transformers.TrOCRProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/processing_trocr.py#L23",parametersDescription:[{anchor:"transformers.TrOCRProcessor.feature_extractor",description:`<strong>feature_extractor</strong> ([<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]) &#x2014;
An instance of [<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.TrOCRProcessor.tokenizer",description:`<strong>tokenizer</strong> ([<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]) &#x2014;
An instance of [<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]. The tokenizer is a required input.`,name:"tokenizer"}]}}),Se=new J({props:{name:"__call__",anchor:"transformers.TrOCRProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/processing_trocr.py#L44"}}),We=new J({props:{name:"from_pretrained",anchor:"transformers.TrOCRProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L156",parametersDescription:[{anchor:"transformers.TrOCRProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}]}}),he=new gi({props:{$$slots:{default:[ki]},$$scope:{ctx:at}}}),He=new J({props:{name:"save_pretrained",anchor:"transformers.TrOCRProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94",parametersDescription:[{anchor:"transformers.TrOCRProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.TrOCRProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}]}}),me=new gi({props:{$$slots:{default:[Oi]},$$scope:{ctx:at}}}),Ue=new J({props:{name:"batch_decode",anchor:"transformers.TrOCRProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/processing_trocr.py#L53"}}),Ge=new J({props:{name:"decode",anchor:"transformers.TrOCRProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/processing_trocr.py#L60"}}),Je=new J({props:{name:"as_target_processor",anchor:"transformers.TrOCRProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/processing_trocr.py#L67"}}),Ye=new zt({}),Ke=new J({props:{name:"class transformers.TrOCRForCausalLM",anchor:"transformers.TrOCRForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/modeling_trocr.py#L775",parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRConfig">TrOCRConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tt=new J({props:{name:"forward",anchor:"transformers.TrOCRForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/trocr/modeling_trocr.py#L806",parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>TrOCRTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TrOCRForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TrOCRForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TrOCRForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TrOCRForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.TrOCRForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TrOCRForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TrOCRForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRConfig"
>TrOCRConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new Zs({props:{code:`from transformers import (
    TrOCRConfig,
    TrOCRProcessor,
    TrOCRForCausalLM,
    ViTConfig,
    ViTModel,
    VisionEncoderDecoderModel,
)
import requests
from PIL import Image

# TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel
# init vision2text model with random weights
encoder = ViTModel(ViTConfig())
decoder = TrOCRForCausalLM(TrOCRConfig())
model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

# If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`
processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")
pixel_values = processor(image, return_tensors="pt").pixel_values
text = "industry, ' Mr. Brown commented icily. ' Let us have a"

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values, labels=labels)
loss = outputs.loss
round(loss.item(), 2)

# inference
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
generated_text`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    TrOCRConfig,
<span class="hljs-meta">... </span>    TrOCRProcessor,
<span class="hljs-meta">... </span>    TrOCRForCausalLM,
<span class="hljs-meta">... </span>    ViTConfig,
<span class="hljs-meta">... </span>    ViTModel,
<span class="hljs-meta">... </span>    VisionEncoderDecoderModel,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># TrOCR is a decoder model and should be used within a VisionEncoderDecoderModel</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># init vision2text model with random weights</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = ViTModel(ViTConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = TrOCRForCausalLM(TrOCRConfig())
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(encoder=encoder, decoder=decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you want to start from the pretrained model, load the checkpoint with \`VisionEncoderDecoderModel\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;industry, &#x27; Mr. Brown commented icily. &#x27; Let us have a&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">5.30</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text
<span class="hljs-string">&#x27;industry, &quot; Mr. Brown commented icily. &quot; Let us have a&#x27;</span>`}}),{c(){f=s("meta"),q=d(),u=s("h1"),$=s("a"),F=s("span"),v(y.$$.fragment),A=d(),L=s("span"),x=r("TrOCR"),_=d(),P=s("h2"),z=s("a"),Ft=s("span"),v(Ce.$$.fragment),rr=d(),Lt=s("span"),ar=r("Overview"),_o=d(),S=s("p"),sr=r("The TrOCR model was proposed in "),we=s("a"),nr=r(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),ir=r(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),ke=s("a"),lr=r("optical character recognition (OCR)"),dr=r("."),vo=d(),st=s("p"),cr=r("The abstract from the paper is the following:"),To=d(),nt=s("p"),Dt=s("em"),hr=r(`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),bo=d(),re=s("img"),Co=d(),ae=s("small"),mr=r("TrOCR architecture. Taken from the "),it=s("a"),fr=r("original paper"),pr=r("."),wo=d(),se=s("p"),ur=r("Please refer to the "),qt=s("code"),gr=r("VisionEncoderDecoder"),_r=r(" class on how to use this model."),ko=d(),W=s("p"),vr=r("This model was contributed by "),Oe=s("a"),Tr=r("nielsr"),br=r(`. The original code can be found
`),ye=s("a"),Cr=r("here"),wr=r("."),Oo=d(),lt=s("p"),kr=r("Tips:"),yo=d(),H=s("ul"),Re=s("li"),Or=r("The quickest way to get started with TrOCR is by checking the "),Ee=s("a"),yr=r(`tutorial
notebooks`),Rr=r(`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Er=d(),I=s("li"),$r=r(`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),$e=s("a"),xr=r("SROIE dataset"),Pr=r(" and handwritten (e.g. the "),xe=s("a"),Mr=r(`IAM
Handwriting dataset`),jr=r(` text recognition tasks. For more
information, see the `),Pe=s("a"),zr=r("official models"),Fr=r("."),Lr=d(),Me=s("li"),Dr=r("TrOCR is always used within the "),dt=s("a"),qr=r("VisionEncoderDecoder"),Ar=r(" framework."),Ro=d(),Y=s("h2"),ne=s("a"),At=s("span"),v(je.$$.fragment),Ir=d(),It=s("span"),Vr=r("Inference"),Eo=d(),B=s("p"),Nr=r("TrOCR\u2019s "),Vt=s("code"),Sr=r("VisionEncoderDecoder"),Wr=r(` model accepts images as input and makes use of
`),ct=s("a"),Hr=r("generate()"),Br=r(" to autoregressively generate text given the input image."),$o=d(),p=s("p"),Ur=r("The ["),Nt=s("code"),Xr=r("ViTFeatureExtractor"),Gr=r("/"),St=s("code"),Zr=r("DeiTFeatureExtractor"),Jr=r(`] class is responsible for preprocessing the input image and
[`),Wt=s("code"),Yr=r("RobertaTokenizer"),Kr=r("/"),Ht=s("code"),Qr=r("XLMRobertaTokenizer"),ea=r(`] decodes the generated target tokens to the target string. The
`),ht=s("a"),ta=r("TrOCRProcessor"),oa=r(" wraps ["),Bt=s("code"),ra=r("ViTFeatureExtractor"),aa=r("/"),Ut=s("code"),sa=r("DeiTFeatureExtractor"),na=r("] and ["),Xt=s("code"),ia=r("RobertaTokenizer"),la=r("/"),Gt=s("code"),da=r("XLMRobertaTokenizer"),ca=r(`]
into a single instance to both extract the input features and decode the predicted token ids.`),xo=d(),mt=s("ul"),Zt=s("li"),ha=r("Step-by-step Optical Character Recognition (OCR)"),Po=d(),v(ze.$$.fragment),Mo=d(),ie=s("p"),ma=r("See the "),Fe=s("a"),fa=r("model hub"),pa=r(" to look for TrOCR checkpoints."),jo=d(),K=s("h2"),le=s("a"),Jt=s("span"),v(Le.$$.fragment),ua=d(),Yt=s("span"),ga=r("TrOCRConfig"),zo=d(),M=s("div"),v(De.$$.fragment),_a=d(),Q=s("p"),va=r("This is the configuration class to store the configuration of a "),ft=s("a"),Ta=r("TrOCRForCausalLM"),ba=r(`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),qe=s("a"),Ca=r("microsoft/trocr-base"),wa=r(" architecture."),ka=d(),ee=s("p"),Oa=r("Configuration objects inherit from "),pt=s("a"),ya=r("PretrainedConfig"),Ra=r(` and can be used to control the model outputs. Read the
documentation from `),ut=s("a"),Ea=r("PretrainedConfig"),$a=r(" for more information."),xa=d(),Kt=s("p"),Pa=r("Example:"),Ma=d(),v(Ae.$$.fragment),Fo=d(),te=s("h2"),de=s("a"),Qt=s("span"),v(Ie.$$.fragment),ja=d(),eo=s("span"),za=r("TrOCRProcessor"),Lo=d(),g=s("div"),v(Ve.$$.fragment),Fa=d(),to=s("p"),La=r("Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),Da=d(),R=s("p"),gt=s("a"),qa=r("TrOCRProcessor"),Aa=r(" offers all the functionalities of ["),oo=s("code"),Ia=r("ViTFeatureExtractor"),Va=r("/"),ro=s("code"),Na=r("DeiTFeatureExtractor"),Sa=r(`] and
[`),ao=s("code"),Wa=r("RobertaTokenizer"),Ha=r("/"),so=s("code"),Ba=r("XLMRobertaTokenizer"),Ua=r("]. See the "),Ne=s("a"),no=s("strong"),Xa=r("call"),Ga=r("()"),Za=r(" and "),_t=s("a"),Ja=r("decode()"),Ya=r(` for
more information.`),Ka=d(),ce=s("div"),v(Se.$$.fragment),Qa=d(),V=s("p"),es=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),io=s("code"),ts=r("__call__()"),os=r(`and returns its output. If used in the context
`),vt=s("a"),rs=r("as_target_processor()"),as=r(` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),lo=s("code"),ss=r("__call__"),ns=r(". Please refer to the doctsring of the above two methods for more information."),is=d(),U=s("div"),v(We.$$.fragment),ls=d(),co=s("p"),ds=r("Instantiate a processor associated with a pretrained model."),cs=d(),v(he.$$.fragment),hs=d(),X=s("div"),v(He.$$.fragment),ms=d(),Be=s("p"),fs=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=s("a"),ps=r("from_pretrained()"),us=r(" method."),gs=d(),v(me.$$.fragment),_s=d(),fe=s("div"),v(Ue.$$.fragment),vs=d(),Xe=s("p"),Ts=r("This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=s("a"),bs=r("batch_decode()"),Cs=r(`. Please refer
to the docstring of this method for more information.`),ws=d(),pe=s("div"),v(Ge.$$.fragment),ks=d(),Ze=s("p"),Os=r("This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=s("a"),ys=r("decode()"),Rs=r(`. Please refer to the
docstring of this method for more information.`),Es=d(),ue=s("div"),v(Je.$$.fragment),$s=d(),ho=s("p"),xs=r("Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),Do=d(),oe=s("h2"),ge=s("a"),mo=s("span"),v(Ye.$$.fragment),Ps=d(),fo=s("span"),Ms=r("TrOCRForCausalLM"),qo=d(),D=s("div"),v(Ke.$$.fragment),js=d(),N=s("p"),zs=r("The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=s("a"),Fs=r("EncoderDecoderModel"),Ls=r(" and "),po=s("code"),Ds=r("VisionEncoderDecoder"),qs=r(`.
This model inherits from `),kt=s("a"),As=r("PreTrainedModel"),Is=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vs=d(),Qe=s("p"),Ns=r("This model is also a PyTorch "),et=s("a"),Ss=r("torch.nn.Module"),Ws=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hs=d(),G=s("div"),v(tt.$$.fragment),Bs=d(),uo=s("p"),Us=r("Example:"),Xs=d(),v(ot.$$.fragment),this.h()},l(t){const h=bi('[data-svelte="svelte-1phssyn"]',document.head);f=n(h,"META",{name:!0,content:!0}),h.forEach(o),q=c(t),u=n(t,"H1",{class:!0});var rt=i(u);$=n(rt,"A",{id:!0,class:!0,href:!0});var go=i($);F=n(go,"SPAN",{});var Ys=i(F);T(y.$$.fragment,Ys),Ys.forEach(o),go.forEach(o),A=c(rt),L=n(rt,"SPAN",{});var Ks=i(L);x=a(Ks,"TrOCR"),Ks.forEach(o),rt.forEach(o),_=c(t),P=n(t,"H2",{class:!0});var Io=i(P);z=n(Io,"A",{id:!0,class:!0,href:!0});var Qs=i(z);Ft=n(Qs,"SPAN",{});var en=i(Ft);T(Ce.$$.fragment,en),en.forEach(o),Qs.forEach(o),rr=c(Io),Lt=n(Io,"SPAN",{});var tn=i(Lt);ar=a(tn,"Overview"),tn.forEach(o),Io.forEach(o),_o=c(t),S=n(t,"P",{});var Ot=i(S);sr=a(Ot,"The TrOCR model was proposed in "),we=n(Ot,"A",{href:!0,rel:!0});var on=i(we);nr=a(on,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),on.forEach(o),ir=a(Ot,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),ke=n(Ot,"A",{href:!0,rel:!0});var rn=i(ke);lr=a(rn,"optical character recognition (OCR)"),rn.forEach(o),dr=a(Ot,"."),Ot.forEach(o),vo=c(t),st=n(t,"P",{});var an=i(st);cr=a(an,"The abstract from the paper is the following:"),an.forEach(o),To=c(t),nt=n(t,"P",{});var sn=i(nt);Dt=n(sn,"EM",{});var nn=i(Dt);hr=a(nn,`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),nn.forEach(o),sn.forEach(o),bo=c(t),re=n(t,"IMG",{src:!0,alt:!0,width:!0}),Co=c(t),ae=n(t,"SMALL",{});var Vo=i(ae);mr=a(Vo,"TrOCR architecture. Taken from the "),it=n(Vo,"A",{href:!0});var ln=i(it);fr=a(ln,"original paper"),ln.forEach(o),pr=a(Vo,"."),Vo.forEach(o),wo=c(t),se=n(t,"P",{});var No=i(se);ur=a(No,"Please refer to the "),qt=n(No,"CODE",{});var dn=i(qt);gr=a(dn,"VisionEncoderDecoder"),dn.forEach(o),_r=a(No," class on how to use this model."),No.forEach(o),ko=c(t),W=n(t,"P",{});var yt=i(W);vr=a(yt,"This model was contributed by "),Oe=n(yt,"A",{href:!0,rel:!0});var cn=i(Oe);Tr=a(cn,"nielsr"),cn.forEach(o),br=a(yt,`. The original code can be found
`),ye=n(yt,"A",{href:!0,rel:!0});var hn=i(ye);Cr=a(hn,"here"),hn.forEach(o),wr=a(yt,"."),yt.forEach(o),Oo=c(t),lt=n(t,"P",{});var mn=i(lt);kr=a(mn,"Tips:"),mn.forEach(o),yo=c(t),H=n(t,"UL",{});var Rt=i(H);Re=n(Rt,"LI",{});var So=i(Re);Or=a(So,"The quickest way to get started with TrOCR is by checking the "),Ee=n(So,"A",{href:!0,rel:!0});var fn=i(Ee);yr=a(fn,`tutorial
notebooks`),fn.forEach(o),Rr=a(So,`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),So.forEach(o),Er=c(Rt),I=n(Rt,"LI",{});var _e=i(I);$r=a(_e,`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),$e=n(_e,"A",{href:!0,rel:!0});var pn=i($e);xr=a(pn,"SROIE dataset"),pn.forEach(o),Pr=a(_e," and handwritten (e.g. the "),xe=n(_e,"A",{href:!0,rel:!0});var un=i(xe);Mr=a(un,`IAM
Handwriting dataset`),un.forEach(o),jr=a(_e,` text recognition tasks. For more
information, see the `),Pe=n(_e,"A",{href:!0,rel:!0});var gn=i(Pe);zr=a(gn,"official models"),gn.forEach(o),Fr=a(_e,"."),_e.forEach(o),Lr=c(Rt),Me=n(Rt,"LI",{});var Wo=i(Me);Dr=a(Wo,"TrOCR is always used within the "),dt=n(Wo,"A",{href:!0});var _n=i(dt);qr=a(_n,"VisionEncoderDecoder"),_n.forEach(o),Ar=a(Wo," framework."),Wo.forEach(o),Rt.forEach(o),Ro=c(t),Y=n(t,"H2",{class:!0});var Ho=i(Y);ne=n(Ho,"A",{id:!0,class:!0,href:!0});var vn=i(ne);At=n(vn,"SPAN",{});var Tn=i(At);T(je.$$.fragment,Tn),Tn.forEach(o),vn.forEach(o),Ir=c(Ho),It=n(Ho,"SPAN",{});var bn=i(It);Vr=a(bn,"Inference"),bn.forEach(o),Ho.forEach(o),Eo=c(t),B=n(t,"P",{});var Et=i(B);Nr=a(Et,"TrOCR\u2019s "),Vt=n(Et,"CODE",{});var Cn=i(Vt);Sr=a(Cn,"VisionEncoderDecoder"),Cn.forEach(o),Wr=a(Et,` model accepts images as input and makes use of
`),ct=n(Et,"A",{href:!0});var wn=i(ct);Hr=a(wn,"generate()"),wn.forEach(o),Br=a(Et," to autoregressively generate text given the input image."),Et.forEach(o),$o=c(t),p=n(t,"P",{});var O=i(p);Ur=a(O,"The ["),Nt=n(O,"CODE",{});var kn=i(Nt);Xr=a(kn,"ViTFeatureExtractor"),kn.forEach(o),Gr=a(O,"/"),St=n(O,"CODE",{});var On=i(St);Zr=a(On,"DeiTFeatureExtractor"),On.forEach(o),Jr=a(O,`] class is responsible for preprocessing the input image and
[`),Wt=n(O,"CODE",{});var yn=i(Wt);Yr=a(yn,"RobertaTokenizer"),yn.forEach(o),Kr=a(O,"/"),Ht=n(O,"CODE",{});var Rn=i(Ht);Qr=a(Rn,"XLMRobertaTokenizer"),Rn.forEach(o),ea=a(O,`] decodes the generated target tokens to the target string. The
`),ht=n(O,"A",{href:!0});var En=i(ht);ta=a(En,"TrOCRProcessor"),En.forEach(o),oa=a(O," wraps ["),Bt=n(O,"CODE",{});var $n=i(Bt);ra=a($n,"ViTFeatureExtractor"),$n.forEach(o),aa=a(O,"/"),Ut=n(O,"CODE",{});var xn=i(Ut);sa=a(xn,"DeiTFeatureExtractor"),xn.forEach(o),na=a(O,"] and ["),Xt=n(O,"CODE",{});var Pn=i(Xt);ia=a(Pn,"RobertaTokenizer"),Pn.forEach(o),la=a(O,"/"),Gt=n(O,"CODE",{});var Mn=i(Gt);da=a(Mn,"XLMRobertaTokenizer"),Mn.forEach(o),ca=a(O,`]
into a single instance to both extract the input features and decode the predicted token ids.`),O.forEach(o),xo=c(t),mt=n(t,"UL",{});var jn=i(mt);Zt=n(jn,"LI",{});var zn=i(Zt);ha=a(zn,"Step-by-step Optical Character Recognition (OCR)"),zn.forEach(o),jn.forEach(o),Po=c(t),T(ze.$$.fragment,t),Mo=c(t),ie=n(t,"P",{});var Bo=i(ie);ma=a(Bo,"See the "),Fe=n(Bo,"A",{href:!0,rel:!0});var Fn=i(Fe);fa=a(Fn,"model hub"),Fn.forEach(o),pa=a(Bo," to look for TrOCR checkpoints."),Bo.forEach(o),jo=c(t),K=n(t,"H2",{class:!0});var Uo=i(K);le=n(Uo,"A",{id:!0,class:!0,href:!0});var Ln=i(le);Jt=n(Ln,"SPAN",{});var Dn=i(Jt);T(Le.$$.fragment,Dn),Dn.forEach(o),Ln.forEach(o),ua=c(Uo),Yt=n(Uo,"SPAN",{});var qn=i(Yt);ga=a(qn,"TrOCRConfig"),qn.forEach(o),Uo.forEach(o),zo=c(t),M=n(t,"DIV",{class:!0});var Z=i(M);T(De.$$.fragment,Z),_a=c(Z),Q=n(Z,"P",{});var $t=i(Q);va=a($t,"This is the configuration class to store the configuration of a "),ft=n($t,"A",{href:!0});var An=i(ft);Ta=a(An,"TrOCRForCausalLM"),An.forEach(o),ba=a($t,`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),qe=n($t,"A",{href:!0,rel:!0});var In=i(qe);Ca=a(In,"microsoft/trocr-base"),In.forEach(o),wa=a($t," architecture."),$t.forEach(o),ka=c(Z),ee=n(Z,"P",{});var xt=i(ee);Oa=a(xt,"Configuration objects inherit from "),pt=n(xt,"A",{href:!0});var Vn=i(pt);ya=a(Vn,"PretrainedConfig"),Vn.forEach(o),Ra=a(xt,` and can be used to control the model outputs. Read the
documentation from `),ut=n(xt,"A",{href:!0});var Nn=i(ut);Ea=a(Nn,"PretrainedConfig"),Nn.forEach(o),$a=a(xt," for more information."),xt.forEach(o),xa=c(Z),Kt=n(Z,"P",{});var Sn=i(Kt);Pa=a(Sn,"Example:"),Sn.forEach(o),Ma=c(Z),T(Ae.$$.fragment,Z),Z.forEach(o),Fo=c(t),te=n(t,"H2",{class:!0});var Xo=i(te);de=n(Xo,"A",{id:!0,class:!0,href:!0});var Wn=i(de);Qt=n(Wn,"SPAN",{});var Hn=i(Qt);T(Ie.$$.fragment,Hn),Hn.forEach(o),Wn.forEach(o),ja=c(Xo),eo=n(Xo,"SPAN",{});var Bn=i(eo);za=a(Bn,"TrOCRProcessor"),Bn.forEach(o),Xo.forEach(o),Lo=c(t),g=n(t,"DIV",{class:!0});var E=i(g);T(Ve.$$.fragment,E),Fa=c(E),to=n(E,"P",{});var Un=i(to);La=a(Un,"Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),Un.forEach(o),Da=c(E),R=n(E,"P",{});var j=i(R);gt=n(j,"A",{href:!0});var Xn=i(gt);qa=a(Xn,"TrOCRProcessor"),Xn.forEach(o),Aa=a(j," offers all the functionalities of ["),oo=n(j,"CODE",{});var Gn=i(oo);Ia=a(Gn,"ViTFeatureExtractor"),Gn.forEach(o),Va=a(j,"/"),ro=n(j,"CODE",{});var Zn=i(ro);Na=a(Zn,"DeiTFeatureExtractor"),Zn.forEach(o),Sa=a(j,`] and
[`),ao=n(j,"CODE",{});var Jn=i(ao);Wa=a(Jn,"RobertaTokenizer"),Jn.forEach(o),Ha=a(j,"/"),so=n(j,"CODE",{});var Yn=i(so);Ba=a(Yn,"XLMRobertaTokenizer"),Yn.forEach(o),Ua=a(j,"]. See the "),Ne=n(j,"A",{href:!0});var Gs=i(Ne);no=n(Gs,"STRONG",{});var Kn=i(no);Xa=a(Kn,"call"),Kn.forEach(o),Ga=a(Gs,"()"),Gs.forEach(o),Za=a(j," and "),_t=n(j,"A",{href:!0});var Qn=i(_t);Ja=a(Qn,"decode()"),Qn.forEach(o),Ya=a(j,` for
more information.`),j.forEach(o),Ka=c(E),ce=n(E,"DIV",{class:!0});var Go=i(ce);T(Se.$$.fragment,Go),Qa=c(Go),V=n(Go,"P",{});var ve=i(V);es=a(ve,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),io=n(ve,"CODE",{});var ei=i(io);ts=a(ei,"__call__()"),ei.forEach(o),os=a(ve,`and returns its output. If used in the context
`),vt=n(ve,"A",{href:!0});var ti=i(vt);rs=a(ti,"as_target_processor()"),ti.forEach(o),as=a(ve,` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),lo=n(ve,"CODE",{});var oi=i(lo);ss=a(oi,"__call__"),oi.forEach(o),ns=a(ve,". Please refer to the doctsring of the above two methods for more information."),ve.forEach(o),Go.forEach(o),is=c(E),U=n(E,"DIV",{class:!0});var Pt=i(U);T(We.$$.fragment,Pt),ls=c(Pt),co=n(Pt,"P",{});var ri=i(co);ds=a(ri,"Instantiate a processor associated with a pretrained model."),ri.forEach(o),cs=c(Pt),T(he.$$.fragment,Pt),Pt.forEach(o),hs=c(E),X=n(E,"DIV",{class:!0});var Mt=i(X);T(He.$$.fragment,Mt),ms=c(Mt),Be=n(Mt,"P",{});var Zo=i(Be);fs=a(Zo,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Tt=n(Zo,"A",{href:!0});var ai=i(Tt);ps=a(ai,"from_pretrained()"),ai.forEach(o),us=a(Zo," method."),Zo.forEach(o),gs=c(Mt),T(me.$$.fragment,Mt),Mt.forEach(o),_s=c(E),fe=n(E,"DIV",{class:!0});var Jo=i(fe);T(Ue.$$.fragment,Jo),vs=c(Jo),Xe=n(Jo,"P",{});var Yo=i(Xe);Ts=a(Yo,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),bt=n(Yo,"A",{href:!0});var si=i(bt);bs=a(si,"batch_decode()"),si.forEach(o),Cs=a(Yo,`. Please refer
to the docstring of this method for more information.`),Yo.forEach(o),Jo.forEach(o),ws=c(E),pe=n(E,"DIV",{class:!0});var Ko=i(pe);T(Ge.$$.fragment,Ko),ks=c(Ko),Ze=n(Ko,"P",{});var Qo=i(Ze);Os=a(Qo,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),Ct=n(Qo,"A",{href:!0});var ni=i(Ct);ys=a(ni,"decode()"),ni.forEach(o),Rs=a(Qo,`. Please refer to the
docstring of this method for more information.`),Qo.forEach(o),Ko.forEach(o),Es=c(E),ue=n(E,"DIV",{class:!0});var er=i(ue);T(Je.$$.fragment,er),$s=c(er),ho=n(er,"P",{});var ii=i(ho);xs=a(ii,"Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning TrOCR."),ii.forEach(o),er.forEach(o),E.forEach(o),Do=c(t),oe=n(t,"H2",{class:!0});var tr=i(oe);ge=n(tr,"A",{id:!0,class:!0,href:!0});var li=i(ge);mo=n(li,"SPAN",{});var di=i(mo);T(Ye.$$.fragment,di),di.forEach(o),li.forEach(o),Ps=c(tr),fo=n(tr,"SPAN",{});var ci=i(fo);Ms=a(ci,"TrOCRForCausalLM"),ci.forEach(o),tr.forEach(o),qo=c(t),D=n(t,"DIV",{class:!0});var Te=i(D);T(Ke.$$.fragment,Te),js=c(Te),N=n(Te,"P",{});var be=i(N);zs=a(be,"The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),wt=n(be,"A",{href:!0});var hi=i(wt);Fs=a(hi,"EncoderDecoderModel"),hi.forEach(o),Ls=a(be," and "),po=n(be,"CODE",{});var mi=i(po);Ds=a(mi,"VisionEncoderDecoder"),mi.forEach(o),qs=a(be,`.
This model inherits from `),kt=n(be,"A",{href:!0});var fi=i(kt);As=a(fi,"PreTrainedModel"),fi.forEach(o),Is=a(be,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),be.forEach(o),Vs=c(Te),Qe=n(Te,"P",{});var or=i(Qe);Ns=a(or,"This model is also a PyTorch "),et=n(or,"A",{href:!0,rel:!0});var pi=i(et);Ss=a(pi,"torch.nn.Module"),pi.forEach(o),Ws=a(or,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),or.forEach(o),Hs=c(Te),G=n(Te,"DIV",{class:!0});var jt=i(G);T(tt.$$.fragment,jt),Bs=c(jt),uo=n(jt,"P",{});var ui=i(uo);Us=a(ui,"Example:"),ui.forEach(o),Xs=c(jt),T(ot.$$.fragment,jt),jt.forEach(o),Te.forEach(o),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(Ri)),l($,"id","trocr"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#trocr"),l(u,"class","relative group"),l(z,"id","overview"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#overview"),l(P,"class","relative group"),l(we,"href","https://arxiv.org/abs/2109.10282"),l(we,"rel","nofollow"),l(ke,"href","https://en.wikipedia.org/wiki/Optical_character_recognition"),l(ke,"rel","nofollow"),Ci(re.src,Js="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/trocr_architecture.jpg")||l(re,"src",Js),l(re,"alt","drawing"),l(re,"width","600"),l(it,"href","https://arxiv.org/abs/2109.10282"),l(Oe,"href","https://huggingface.co/nielsr"),l(Oe,"rel","nofollow"),l(ye,"href","https://github.com/microsoft/unilm/tree/6f60612e7cc86a2a1ae85c47231507a587ab4e01/trocr"),l(ye,"rel","nofollow"),l(Ee,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/TrOCR"),l(Ee,"rel","nofollow"),l($e,"href","https://paperswithcode.com/dataset/sroie"),l($e,"rel","nofollow"),l(xe,"href","https://fki.tic.heia-fr.ch/databases/iam-handwriting-database%3E"),l(xe,"rel","nofollow"),l(Pe,"href","https://huggingface.co/models?other=trocr%3E"),l(Pe,"rel","nofollow"),l(dt,"href","vision-encoder-decoder"),l(ne,"id","inference"),l(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ne,"href","#inference"),l(Y,"class","relative group"),l(ct,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(ht,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor"),l(Fe,"href","https://huggingface.co/models?filter=trocr"),l(Fe,"rel","nofollow"),l(le,"id","transformers.TrOCRConfig"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.TrOCRConfig"),l(K,"class","relative group"),l(ft,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRForCausalLM"),l(qe,"href","https://huggingface.co/microsoft/trocr-base"),l(qe,"rel","nofollow"),l(pt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(ut,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(M,"class","docstring"),l(de,"id","transformers.TrOCRProcessor"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.TrOCRProcessor"),l(te,"class","relative group"),l(gt,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor"),l(Ne,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.__call__"),l(_t,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.decode"),l(vt,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.as_target_processor"),l(ce,"class","docstring"),l(U,"class","docstring"),l(Tt,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),l(X,"class","docstring"),l(bt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),l(fe,"class","docstring"),l(Ct,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),l(pe,"class","docstring"),l(ue,"class","docstring"),l(g,"class","docstring"),l(ge,"id","transformers.TrOCRForCausalLM"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.TrOCRForCausalLM"),l(oe,"class","relative group"),l(wt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(kt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(et,"rel","nofollow"),l(G,"class","docstring"),l(D,"class","docstring")},m(t,h){e(document.head,f),m(t,q,h),m(t,u,h),e(u,$),e($,F),b(y,F,null),e(u,A),e(u,L),e(L,x),m(t,_,h),m(t,P,h),e(P,z),e(z,Ft),b(Ce,Ft,null),e(P,rr),e(P,Lt),e(Lt,ar),m(t,_o,h),m(t,S,h),e(S,sr),e(S,we),e(we,nr),e(S,ir),e(S,ke),e(ke,lr),e(S,dr),m(t,vo,h),m(t,st,h),e(st,cr),m(t,To,h),m(t,nt,h),e(nt,Dt),e(Dt,hr),m(t,bo,h),m(t,re,h),m(t,Co,h),m(t,ae,h),e(ae,mr),e(ae,it),e(it,fr),e(ae,pr),m(t,wo,h),m(t,se,h),e(se,ur),e(se,qt),e(qt,gr),e(se,_r),m(t,ko,h),m(t,W,h),e(W,vr),e(W,Oe),e(Oe,Tr),e(W,br),e(W,ye),e(ye,Cr),e(W,wr),m(t,Oo,h),m(t,lt,h),e(lt,kr),m(t,yo,h),m(t,H,h),e(H,Re),e(Re,Or),e(Re,Ee),e(Ee,yr),e(Re,Rr),e(H,Er),e(H,I),e(I,$r),e(I,$e),e($e,xr),e(I,Pr),e(I,xe),e(xe,Mr),e(I,jr),e(I,Pe),e(Pe,zr),e(I,Fr),e(H,Lr),e(H,Me),e(Me,Dr),e(Me,dt),e(dt,qr),e(Me,Ar),m(t,Ro,h),m(t,Y,h),e(Y,ne),e(ne,At),b(je,At,null),e(Y,Ir),e(Y,It),e(It,Vr),m(t,Eo,h),m(t,B,h),e(B,Nr),e(B,Vt),e(Vt,Sr),e(B,Wr),e(B,ct),e(ct,Hr),e(B,Br),m(t,$o,h),m(t,p,h),e(p,Ur),e(p,Nt),e(Nt,Xr),e(p,Gr),e(p,St),e(St,Zr),e(p,Jr),e(p,Wt),e(Wt,Yr),e(p,Kr),e(p,Ht),e(Ht,Qr),e(p,ea),e(p,ht),e(ht,ta),e(p,oa),e(p,Bt),e(Bt,ra),e(p,aa),e(p,Ut),e(Ut,sa),e(p,na),e(p,Xt),e(Xt,ia),e(p,la),e(p,Gt),e(Gt,da),e(p,ca),m(t,xo,h),m(t,mt,h),e(mt,Zt),e(Zt,ha),m(t,Po,h),b(ze,t,h),m(t,Mo,h),m(t,ie,h),e(ie,ma),e(ie,Fe),e(Fe,fa),e(ie,pa),m(t,jo,h),m(t,K,h),e(K,le),e(le,Jt),b(Le,Jt,null),e(K,ua),e(K,Yt),e(Yt,ga),m(t,zo,h),m(t,M,h),b(De,M,null),e(M,_a),e(M,Q),e(Q,va),e(Q,ft),e(ft,Ta),e(Q,ba),e(Q,qe),e(qe,Ca),e(Q,wa),e(M,ka),e(M,ee),e(ee,Oa),e(ee,pt),e(pt,ya),e(ee,Ra),e(ee,ut),e(ut,Ea),e(ee,$a),e(M,xa),e(M,Kt),e(Kt,Pa),e(M,Ma),b(Ae,M,null),m(t,Fo,h),m(t,te,h),e(te,de),e(de,Qt),b(Ie,Qt,null),e(te,ja),e(te,eo),e(eo,za),m(t,Lo,h),m(t,g,h),b(Ve,g,null),e(g,Fa),e(g,to),e(to,La),e(g,Da),e(g,R),e(R,gt),e(gt,qa),e(R,Aa),e(R,oo),e(oo,Ia),e(R,Va),e(R,ro),e(ro,Na),e(R,Sa),e(R,ao),e(ao,Wa),e(R,Ha),e(R,so),e(so,Ba),e(R,Ua),e(R,Ne),e(Ne,no),e(no,Xa),e(Ne,Ga),e(R,Za),e(R,_t),e(_t,Ja),e(R,Ya),e(g,Ka),e(g,ce),b(Se,ce,null),e(ce,Qa),e(ce,V),e(V,es),e(V,io),e(io,ts),e(V,os),e(V,vt),e(vt,rs),e(V,as),e(V,lo),e(lo,ss),e(V,ns),e(g,is),e(g,U),b(We,U,null),e(U,ls),e(U,co),e(co,ds),e(U,cs),b(he,U,null),e(g,hs),e(g,X),b(He,X,null),e(X,ms),e(X,Be),e(Be,fs),e(Be,Tt),e(Tt,ps),e(Be,us),e(X,gs),b(me,X,null),e(g,_s),e(g,fe),b(Ue,fe,null),e(fe,vs),e(fe,Xe),e(Xe,Ts),e(Xe,bt),e(bt,bs),e(Xe,Cs),e(g,ws),e(g,pe),b(Ge,pe,null),e(pe,ks),e(pe,Ze),e(Ze,Os),e(Ze,Ct),e(Ct,ys),e(Ze,Rs),e(g,Es),e(g,ue),b(Je,ue,null),e(ue,$s),e(ue,ho),e(ho,xs),m(t,Do,h),m(t,oe,h),e(oe,ge),e(ge,mo),b(Ye,mo,null),e(oe,Ps),e(oe,fo),e(fo,Ms),m(t,qo,h),m(t,D,h),b(Ke,D,null),e(D,js),e(D,N),e(N,zs),e(N,wt),e(wt,Fs),e(N,Ls),e(N,po),e(po,Ds),e(N,qs),e(N,kt),e(kt,As),e(N,Is),e(D,Vs),e(D,Qe),e(Qe,Ns),e(Qe,et),e(et,Ss),e(Qe,Ws),e(D,Hs),e(D,G),b(tt,G,null),e(G,Bs),e(G,uo),e(uo,Us),e(G,Xs),b(ot,G,null),Ao=!0},p(t,[h]){const rt={};h&2&&(rt.$$scope={dirty:h,ctx:t}),he.$set(rt);const go={};h&2&&(go.$$scope={dirty:h,ctx:t}),me.$set(go)},i(t){Ao||(C(y.$$.fragment,t),C(Ce.$$.fragment,t),C(je.$$.fragment,t),C(ze.$$.fragment,t),C(Le.$$.fragment,t),C(De.$$.fragment,t),C(Ae.$$.fragment,t),C(Ie.$$.fragment,t),C(Ve.$$.fragment,t),C(Se.$$.fragment,t),C(We.$$.fragment,t),C(he.$$.fragment,t),C(He.$$.fragment,t),C(me.$$.fragment,t),C(Ue.$$.fragment,t),C(Ge.$$.fragment,t),C(Je.$$.fragment,t),C(Ye.$$.fragment,t),C(Ke.$$.fragment,t),C(tt.$$.fragment,t),C(ot.$$.fragment,t),Ao=!0)},o(t){w(y.$$.fragment,t),w(Ce.$$.fragment,t),w(je.$$.fragment,t),w(ze.$$.fragment,t),w(Le.$$.fragment,t),w(De.$$.fragment,t),w(Ae.$$.fragment,t),w(Ie.$$.fragment,t),w(Ve.$$.fragment,t),w(Se.$$.fragment,t),w(We.$$.fragment,t),w(he.$$.fragment,t),w(He.$$.fragment,t),w(me.$$.fragment,t),w(Ue.$$.fragment,t),w(Ge.$$.fragment,t),w(Je.$$.fragment,t),w(Ye.$$.fragment,t),w(Ke.$$.fragment,t),w(tt.$$.fragment,t),w(ot.$$.fragment,t),Ao=!1},d(t){o(f),t&&o(q),t&&o(u),k(y),t&&o(_),t&&o(P),k(Ce),t&&o(_o),t&&o(S),t&&o(vo),t&&o(st),t&&o(To),t&&o(nt),t&&o(bo),t&&o(re),t&&o(Co),t&&o(ae),t&&o(wo),t&&o(se),t&&o(ko),t&&o(W),t&&o(Oo),t&&o(lt),t&&o(yo),t&&o(H),t&&o(Ro),t&&o(Y),k(je),t&&o(Eo),t&&o(B),t&&o($o),t&&o(p),t&&o(xo),t&&o(mt),t&&o(Po),k(ze,t),t&&o(Mo),t&&o(ie),t&&o(jo),t&&o(K),k(Le),t&&o(zo),t&&o(M),k(De),k(Ae),t&&o(Fo),t&&o(te),k(Ie),t&&o(Lo),t&&o(g),k(Ve),k(Se),k(We),k(he),k(He),k(me),k(Ue),k(Ge),k(Je),t&&o(Do),t&&o(oe),k(Ye),t&&o(qo),t&&o(D),k(Ke),k(tt),k(ot)}}}const Ri={local:"trocr",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.TrOCRConfig",title:"TrOCRConfig"},{local:"transformers.TrOCRProcessor",title:"TrOCRProcessor"},{local:"transformers.TrOCRForCausalLM",title:"TrOCRForCausalLM"}],title:"TrOCR"};function Ei(at){return wi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zi extends _i{constructor(f){super();vi(this,f,Ei,yi,Ti,{})}}export{zi as default,Ri as metadata};
