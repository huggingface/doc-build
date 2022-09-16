import{S as ri,i as ai,s as si,e as s,k as c,w as C,t as r,M as ni,c as n,d as o,m as h,a as i,x as w,h as a,b as l,N as ii,G as e,g as f,y as k,q as $,o as O,B as y,v as li,L as oi}from"../../chunks/vendor-hf-doc-builder.js";import{T as ei}from"../../chunks/Tip-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{C as As}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as xt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ti}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function di(S){let p,R,u,g,T;return g=new As({props:{code:`from transformers import TrOCRForCausalLM, TrOCRConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){p=s("p"),R=r("Example:"),u=c(),C(g.$$.fragment)},l(m){p=n(m,"P",{});var _=i(p);R=a(_,"Example:"),_.forEach(o),u=h(m),w(g.$$.fragment,m)},m(m,_){f(m,p,_),e(p,R),f(m,u,_),k(g,m,_),T=!0},p:oi,i(m){T||($(g.$$.fragment,m),T=!0)},o(m){O(g.$$.fragment,m),T=!1},d(m){m&&o(p),m&&o(u),y(g,m)}}}function ci(S){let p,R,u,g,T,m,_,D;return{c(){p=s("p"),R=r(`This class method is simply calling the feature extractor
`),u=s("a"),g=r("from_pretrained()"),T=r(` and the tokenizer
`),m=s("code"),_=r("from_pretrained"),D=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){p=n(j,"P",{});var b=i(p);R=a(b,`This class method is simply calling the feature extractor
`),u=n(b,"A",{href:!0});var L=i(u);g=a(L,"from_pretrained()"),L.forEach(o),T=a(b,` and the tokenizer
`),m=n(b,"CODE",{});var F=i(m);_=a(F,"from_pretrained"),F.forEach(o),D=a(b,` methods. Please refer to the docstrings of the
methods above for more information.`),b.forEach(o),this.h()},h(){l(u,"href","/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(j,b){f(j,p,b),e(p,R),e(p,u),e(u,g),e(p,T),e(p,m),e(m,_),e(p,D)},d(j){j&&o(p)}}}function hi(S){let p,R,u,g,T,m,_,D;return{c(){p=s("p"),R=r("This class method is simply calling "),u=s("a"),g=r("save_pretrained()"),T=r(` and
`),m=s("code"),_=r("save_pretrained"),D=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(j){p=n(j,"P",{});var b=i(p);R=a(b,"This class method is simply calling "),u=n(b,"A",{href:!0});var L=i(u);g=a(L,"save_pretrained()"),L.forEach(o),T=a(b,` and
`),m=n(b,"CODE",{});var F=i(m);_=a(F,"save_pretrained"),F.forEach(o),D=a(b,`. Please refer to the docstrings of the methods
above for more information.`),b.forEach(o),this.h()},h(){l(u,"href","/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(j,b){f(j,p,b),e(p,R),e(p,u),e(u,g),e(p,T),e(p,m),e(m,_),e(p,D)},d(j){j&&o(p)}}}function mi(S){let p,R,u,g,T;return g=new As({props:{code:`from transformers import (
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
<span class="hljs-string">&#x27;industry, &quot; Mr. Brown commented icily. &quot; Let us have a&#x27;</span>`}}),{c(){p=s("p"),R=r("Example:"),u=c(),C(g.$$.fragment)},l(m){p=n(m,"P",{});var _=i(p);R=a(_,"Example:"),_.forEach(o),u=h(m),w(g.$$.fragment,m)},m(m,_){f(m,p,_),e(p,R),f(m,u,_),k(g,m,_),T=!0},p:oi,i(m){T||($(g.$$.fragment,m),T=!0)},o(m){O(g.$$.fragment,m),T=!1},d(m){m&&o(p),m&&o(u),y(g,m)}}}function fi(S){let p,R,u,g,T,m,_,D,j,b,L,F,Pt,ke,Qo,Mt,er,fo,W,tr,$e,or,rr,Oe,ar,sr,po,rt,nr,uo,at,jt,ir,go,oe,Is,_o,re,lr,st,dr,cr,vo,ae,hr,Lt,mr,fr,To,H,pr,ye,ur,gr,Ee,_r,vr,bo,nt,Tr,Co,B,Re,br,xe,Cr,wr,kr,I,$r,Pe,Or,yr,Me,Er,Rr,je,xr,Pr,Mr,Le,jr,it,Lr,zr,wo,Z,se,zt,ze,Fr,Ft,Dr,ko,G,qr,Dt,Ar,Ir,lt,Vr,Nr,$o,v,Sr,qt,Wr,Hr,At,Br,Gr,It,Xr,Ur,Vt,Zr,Jr,dt,Yr,Kr,Nt,Qr,ea,St,ta,oa,Wt,ra,aa,Ht,sa,na,Oo,ct,Bt,ia,yo,Fe,Eo,ne,la,De,da,ca,Ro,J,ie,Gt,qe,ha,Xt,ma,xo,q,Ae,fa,Y,pa,ht,ua,ga,Ie,_a,va,Ta,K,ba,mt,Ca,wa,ft,ka,$a,Oa,le,Po,Q,de,Ut,Ve,ya,Zt,Ea,Mo,E,Ne,Ra,Jt,xa,Pa,P,pt,Ma,ja,Yt,La,za,Kt,Fa,Da,Qt,qa,Aa,eo,Ia,Va,Se,to,Na,Sa,Wa,ut,Ha,Ba,Ga,ce,We,Xa,V,Ua,oo,Za,Ja,ro,Ya,Ka,ao,Qa,es,ts,X,He,os,so,rs,as,he,ss,U,Be,ns,Ge,is,gt,ls,ds,cs,me,hs,fe,Xe,ms,Ue,fs,_t,ps,us,gs,pe,Ze,_s,Je,vs,vt,Ts,bs,jo,ee,ue,no,Ye,Cs,io,ws,Lo,A,Ke,ks,N,$s,Tt,Os,ys,lo,Es,Rs,bt,xs,Ps,Ms,Qe,js,et,Ls,zs,Fs,ge,tt,Ds,_e,zo;return m=new xt({}),ke=new xt({}),ze=new xt({}),Fe=new As({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>] `}}),qe=new xt({}),Ae=new te({props:{name:"class transformers.TrOCRConfig",anchor:"transformers.TrOCRConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"d_model",val:" = 1024"},{name:"decoder_layers",val:" = 12"},{name:"decoder_attention_heads",val:" = 16"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"activation_function",val:" = 'gelu'"},{name:"max_position_embeddings",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = False"},{name:"scale_embedding",val:" = False"},{name:"use_learned_position_embeddings",val:" = True"},{name:"layernorm_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the TrOCR model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRForCausalLM">TrOCRForCausalLM</a>.`,name:"vocab_size"},{anchor:"transformers.TrOCRConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.TrOCRConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.TrOCRConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.TrOCRConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to scale the word embeddings by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.TrOCRConfig.use_learned_position_embeddings",description:`<strong>use_learned_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use learned position embeddings. If not, sinusoidal position embeddings will be used.`,name:"use_learned_position_embeddings"},{anchor:"transformers.TrOCRConfig.layernorm_embedding",description:`<strong>layernorm_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a layernorm after the word + position embeddings.`,name:"layernorm_embedding"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/configuration_trocr.py#L31"}}),le=new ti({props:{anchor:"transformers.TrOCRConfig.example",$$slots:{default:[di]},$$scope:{ctx:S}}}),Ve=new xt({}),Ne=new te({props:{name:"class transformers.TrOCRProcessor",anchor:"transformers.TrOCRProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.feature_extractor",description:`<strong>feature_extractor</strong> ([<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]) &#x2014;
An instance of [<code>ViTFeatureExtractor</code>/<code>DeiTFeatureExtractor</code>]. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.TrOCRProcessor.tokenizer",description:`<strong>tokenizer</strong> ([<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]) &#x2014;
An instance of [<code>RobertaTokenizer</code>/<code>XLMRobertaTokenizer</code>]. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/processing_trocr.py#L24"}}),We=new te({props:{name:"__call__",anchor:"transformers.TrOCRProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/processing_trocr.py#L46"}}),He=new te({props:{name:"from_pretrained",anchor:"transformers.TrOCRProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.22.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/processing_utils.py#L152"}}),he=new ei({props:{$$slots:{default:[ci]},$$scope:{ctx:S}}}),Be=new te({props:{name:"save_pretrained",anchor:"transformers.TrOCRProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TrOCRProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.TrOCRProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/processing_utils.py#L94"}}),me=new ei({props:{$$slots:{default:[hi]},$$scope:{ctx:S}}}),Xe=new te({props:{name:"batch_decode",anchor:"transformers.TrOCRProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/processing_trocr.py#L79"}}),Ze=new te({props:{name:"decode",anchor:"transformers.TrOCRProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/processing_trocr.py#L86"}}),Ye=new xt({}),Ke=new te({props:{name:"class transformers.TrOCRForCausalLM",anchor:"transformers.TrOCRForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRConfig">TrOCRConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/modeling_trocr.py#L787"}}),tt=new te({props:{name:"forward",anchor:"transformers.TrOCRForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TrOCRForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <code>TrOCRTokenizer</code>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/trocr/modeling_trocr.py#L818",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_e=new ti({props:{anchor:"transformers.TrOCRForCausalLM.forward.example",$$slots:{default:[mi]},$$scope:{ctx:S}}}),{c(){p=s("meta"),R=c(),u=s("h1"),g=s("a"),T=s("span"),C(m.$$.fragment),_=c(),D=s("span"),j=r("TrOCR"),b=c(),L=s("h2"),F=s("a"),Pt=s("span"),C(ke.$$.fragment),Qo=c(),Mt=s("span"),er=r("Overview"),fo=c(),W=s("p"),tr=r("The TrOCR model was proposed in "),$e=s("a"),or=r(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),rr=r(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),Oe=s("a"),ar=r("optical character recognition (OCR)"),sr=r("."),po=c(),rt=s("p"),nr=r("The abstract from the paper is the following:"),uo=c(),at=s("p"),jt=s("em"),ir=r(`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),go=c(),oe=s("img"),_o=c(),re=s("small"),lr=r("TrOCR architecture. Taken from the "),st=s("a"),dr=r("original paper"),cr=r("."),vo=c(),ae=s("p"),hr=r("Please refer to the "),Lt=s("code"),mr=r("VisionEncoderDecoder"),fr=r(" class on how to use this model."),To=c(),H=s("p"),pr=r("This model was contributed by "),ye=s("a"),ur=r("nielsr"),gr=r(`. The original code can be found
`),Ee=s("a"),_r=r("here"),vr=r("."),bo=c(),nt=s("p"),Tr=r("Tips:"),Co=c(),B=s("ul"),Re=s("li"),br=r("The quickest way to get started with TrOCR is by checking the "),xe=s("a"),Cr=r(`tutorial
notebooks`),wr=r(`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),kr=c(),I=s("li"),$r=r(`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),Pe=s("a"),Or=r("SROIE dataset"),yr=r(" and handwritten (e.g. the "),Me=s("a"),Er=r(`IAM
Handwriting dataset`),Rr=r(` text recognition tasks. For more
information, see the `),je=s("a"),xr=r("official models"),Pr=r("."),Mr=c(),Le=s("li"),jr=r("TrOCR is always used within the "),it=s("a"),Lr=r("VisionEncoderDecoder"),zr=r(" framework."),wo=c(),Z=s("h2"),se=s("a"),zt=s("span"),C(ze.$$.fragment),Fr=c(),Ft=s("span"),Dr=r("Inference"),ko=c(),G=s("p"),qr=r("TrOCR\u2019s "),Dt=s("code"),Ar=r("VisionEncoderDecoder"),Ir=r(` model accepts images as input and makes use of
`),lt=s("a"),Vr=r("generate()"),Nr=r(" to autoregressively generate text given the input image."),$o=c(),v=s("p"),Sr=r("The ["),qt=s("code"),Wr=r("ViTFeatureExtractor"),Hr=r("/"),At=s("code"),Br=r("DeiTFeatureExtractor"),Gr=r(`] class is responsible for preprocessing the input image and
[`),It=s("code"),Xr=r("RobertaTokenizer"),Ur=r("/"),Vt=s("code"),Zr=r("XLMRobertaTokenizer"),Jr=r(`] decodes the generated target tokens to the target string. The
`),dt=s("a"),Yr=r("TrOCRProcessor"),Kr=r(" wraps ["),Nt=s("code"),Qr=r("ViTFeatureExtractor"),ea=r("/"),St=s("code"),ta=r("DeiTFeatureExtractor"),oa=r("] and ["),Wt=s("code"),ra=r("RobertaTokenizer"),aa=r("/"),Ht=s("code"),sa=r("XLMRobertaTokenizer"),na=r(`]
into a single instance to both extract the input features and decode the predicted token ids.`),Oo=c(),ct=s("ul"),Bt=s("li"),ia=r("Step-by-step Optical Character Recognition (OCR)"),yo=c(),C(Fe.$$.fragment),Eo=c(),ne=s("p"),la=r("See the "),De=s("a"),da=r("model hub"),ca=r(" to look for TrOCR checkpoints."),Ro=c(),J=s("h2"),ie=s("a"),Gt=s("span"),C(qe.$$.fragment),ha=c(),Xt=s("span"),ma=r("TrOCRConfig"),xo=c(),q=s("div"),C(Ae.$$.fragment),fa=c(),Y=s("p"),pa=r("This is the configuration class to store the configuration of a "),ht=s("a"),ua=r("TrOCRForCausalLM"),ga=r(`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),Ie=s("a"),_a=r("microsoft/trocr-base-handwritten"),va=r(" architecture."),Ta=c(),K=s("p"),ba=r("Configuration objects inherit from "),mt=s("a"),Ca=r("PretrainedConfig"),wa=r(` and can be used to control the model outputs. Read the
documentation from `),ft=s("a"),ka=r("PretrainedConfig"),$a=r(" for more information."),Oa=c(),C(le.$$.fragment),Po=c(),Q=s("h2"),de=s("a"),Ut=s("span"),C(Ve.$$.fragment),ya=c(),Zt=s("span"),Ea=r("TrOCRProcessor"),Mo=c(),E=s("div"),C(Ne.$$.fragment),Ra=c(),Jt=s("p"),xa=r("Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),Pa=c(),P=s("p"),pt=s("a"),Ma=r("TrOCRProcessor"),ja=r(" offers all the functionalities of ["),Yt=s("code"),La=r("ViTFeatureExtractor"),za=r("/"),Kt=s("code"),Fa=r("DeiTFeatureExtractor"),Da=r(`] and
[`),Qt=s("code"),qa=r("RobertaTokenizer"),Aa=r("/"),eo=s("code"),Ia=r("XLMRobertaTokenizer"),Va=r("]. See the "),Se=s("a"),to=s("strong"),Na=r("call"),Sa=r("()"),Wa=r(" and "),ut=s("a"),Ha=r("decode()"),Ba=r(` for
more information.`),Ga=c(),ce=s("div"),C(We.$$.fragment),Xa=c(),V=s("p"),Ua=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),oo=s("code"),Za=r("__call__()"),Ja=r(` and returns its output. If used in the context
`),ro=s("code"),Ya=r("as_target_processor()"),Ka=r(` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),ao=s("code"),Qa=r("__call__"),es=r(". Please refer to the doctsring of the above two methods for more information."),ts=c(),X=s("div"),C(He.$$.fragment),os=c(),so=s("p"),rs=r("Instantiate a processor associated with a pretrained model."),as=c(),C(he.$$.fragment),ss=c(),U=s("div"),C(Be.$$.fragment),ns=c(),Ge=s("p"),is=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),gt=s("a"),ls=r("from_pretrained()"),ds=r(" method."),cs=c(),C(me.$$.fragment),hs=c(),fe=s("div"),C(Xe.$$.fragment),ms=c(),Ue=s("p"),fs=r("This method forwards all its arguments to TrOCRTokenizer\u2019s "),_t=s("a"),ps=r("batch_decode()"),us=r(`. Please refer
to the docstring of this method for more information.`),gs=c(),pe=s("div"),C(Ze.$$.fragment),_s=c(),Je=s("p"),vs=r("This method forwards all its arguments to TrOCRTokenizer\u2019s "),vt=s("a"),Ts=r("decode()"),bs=r(`. Please refer to the
docstring of this method for more information.`),jo=c(),ee=s("h2"),ue=s("a"),no=s("span"),C(Ye.$$.fragment),Cs=c(),io=s("span"),ws=r("TrOCRForCausalLM"),Lo=c(),A=s("div"),C(Ke.$$.fragment),ks=c(),N=s("p"),$s=r("The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),Tt=s("a"),Os=r("EncoderDecoderModel"),ys=r(" and "),lo=s("code"),Es=r("VisionEncoderDecoder"),Rs=r(`.
This model inherits from `),bt=s("a"),xs=r("PreTrainedModel"),Ps=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ms=c(),Qe=s("p"),js=r("This model is also a PyTorch "),et=s("a"),Ls=r("torch.nn.Module"),zs=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fs=c(),ge=s("div"),C(tt.$$.fragment),Ds=c(),C(_e.$$.fragment),this.h()},l(t){const d=ni('[data-svelte="svelte-1phssyn"]',document.head);p=n(d,"META",{name:!0,content:!0}),d.forEach(o),R=h(t),u=n(t,"H1",{class:!0});var ot=i(u);g=n(ot,"A",{id:!0,class:!0,href:!0});var co=i(g);T=n(co,"SPAN",{});var ho=i(T);w(m.$$.fragment,ho),ho.forEach(o),co.forEach(o),_=h(ot),D=n(ot,"SPAN",{});var mo=i(D);j=a(mo,"TrOCR"),mo.forEach(o),ot.forEach(o),b=h(t),L=n(t,"H2",{class:!0});var Fo=i(L);F=n(Fo,"A",{id:!0,class:!0,href:!0});var Vs=i(F);Pt=n(Vs,"SPAN",{});var Ns=i(Pt);w(ke.$$.fragment,Ns),Ns.forEach(o),Vs.forEach(o),Qo=h(Fo),Mt=n(Fo,"SPAN",{});var Ss=i(Mt);er=a(Ss,"Overview"),Ss.forEach(o),Fo.forEach(o),fo=h(t),W=n(t,"P",{});var Ct=i(W);tr=a(Ct,"The TrOCR model was proposed in "),$e=n(Ct,"A",{href:!0,rel:!0});var Ws=i($e);or=a(Ws,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Ws.forEach(o),rr=a(Ct,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei. TrOCR consists of an image Transformer encoder and an autoregressive text Transformer decoder to
perform `),Oe=n(Ct,"A",{href:!0,rel:!0});var Hs=i(Oe);ar=a(Hs,"optical character recognition (OCR)"),Hs.forEach(o),sr=a(Ct,"."),Ct.forEach(o),po=h(t),rt=n(t,"P",{});var Bs=i(rt);nr=a(Bs,"The abstract from the paper is the following:"),Bs.forEach(o),uo=h(t),at=n(t,"P",{});var Gs=i(at);jt=n(Gs,"EM",{});var Xs=i(jt);ir=a(Xs,`Text recognition is a long-standing research problem for document digitalization. Existing approaches for text recognition
are usually built based on CNN for image understanding and RNN for char-level text generation. In addition, another language
model is usually needed to improve the overall accuracy as a post-processing step. In this paper, we propose an end-to-end
text recognition approach with pre-trained image Transformer and text Transformer models, namely TrOCR, which leverages the
Transformer architecture for both image understanding and wordpiece-level text generation. The TrOCR model is simple but
effective, and can be pre-trained with large-scale synthetic data and fine-tuned with human-labeled datasets. Experiments
show that the TrOCR model outperforms the current state-of-the-art models on both printed and handwritten text recognition
tasks.`),Xs.forEach(o),Gs.forEach(o),go=h(t),oe=n(t,"IMG",{src:!0,alt:!0,width:!0}),_o=h(t),re=n(t,"SMALL",{});var Do=i(re);lr=a(Do,"TrOCR architecture. Taken from the "),st=n(Do,"A",{href:!0});var Us=i(st);dr=a(Us,"original paper"),Us.forEach(o),cr=a(Do,"."),Do.forEach(o),vo=h(t),ae=n(t,"P",{});var qo=i(ae);hr=a(qo,"Please refer to the "),Lt=n(qo,"CODE",{});var Zs=i(Lt);mr=a(Zs,"VisionEncoderDecoder"),Zs.forEach(o),fr=a(qo," class on how to use this model."),qo.forEach(o),To=h(t),H=n(t,"P",{});var wt=i(H);pr=a(wt,"This model was contributed by "),ye=n(wt,"A",{href:!0,rel:!0});var Js=i(ye);ur=a(Js,"nielsr"),Js.forEach(o),gr=a(wt,`. The original code can be found
`),Ee=n(wt,"A",{href:!0,rel:!0});var Ys=i(Ee);_r=a(Ys,"here"),Ys.forEach(o),vr=a(wt,"."),wt.forEach(o),bo=h(t),nt=n(t,"P",{});var Ks=i(nt);Tr=a(Ks,"Tips:"),Ks.forEach(o),Co=h(t),B=n(t,"UL",{});var kt=i(B);Re=n(kt,"LI",{});var Ao=i(Re);br=a(Ao,"The quickest way to get started with TrOCR is by checking the "),xe=n(Ao,"A",{href:!0,rel:!0});var Qs=i(xe);Cr=a(Qs,`tutorial
notebooks`),Qs.forEach(o),wr=a(Ao,`, which show how to use the model
at inference time as well as fine-tuning on custom data.`),Ao.forEach(o),kr=h(kt),I=n(kt,"LI",{});var ve=i(I);$r=a(ve,`TrOCR is pre-trained in 2 stages before being fine-tuned on downstream datasets. It achieves state-of-the-art results
on both printed (e.g. the `),Pe=n(ve,"A",{href:!0,rel:!0});var en=i(Pe);Or=a(en,"SROIE dataset"),en.forEach(o),yr=a(ve," and handwritten (e.g. the "),Me=n(ve,"A",{href:!0,rel:!0});var tn=i(Me);Er=a(tn,`IAM
Handwriting dataset`),tn.forEach(o),Rr=a(ve,` text recognition tasks. For more
information, see the `),je=n(ve,"A",{href:!0,rel:!0});var on=i(je);xr=a(on,"official models"),on.forEach(o),Pr=a(ve,"."),ve.forEach(o),Mr=h(kt),Le=n(kt,"LI",{});var Io=i(Le);jr=a(Io,"TrOCR is always used within the "),it=n(Io,"A",{href:!0});var rn=i(it);Lr=a(rn,"VisionEncoderDecoder"),rn.forEach(o),zr=a(Io," framework."),Io.forEach(o),kt.forEach(o),wo=h(t),Z=n(t,"H2",{class:!0});var Vo=i(Z);se=n(Vo,"A",{id:!0,class:!0,href:!0});var an=i(se);zt=n(an,"SPAN",{});var sn=i(zt);w(ze.$$.fragment,sn),sn.forEach(o),an.forEach(o),Fr=h(Vo),Ft=n(Vo,"SPAN",{});var nn=i(Ft);Dr=a(nn,"Inference"),nn.forEach(o),Vo.forEach(o),ko=h(t),G=n(t,"P",{});var $t=i(G);qr=a($t,"TrOCR\u2019s "),Dt=n($t,"CODE",{});var ln=i(Dt);Ar=a(ln,"VisionEncoderDecoder"),ln.forEach(o),Ir=a($t,` model accepts images as input and makes use of
`),lt=n($t,"A",{href:!0});var dn=i(lt);Vr=a(dn,"generate()"),dn.forEach(o),Nr=a($t," to autoregressively generate text given the input image."),$t.forEach(o),$o=h(t),v=n(t,"P",{});var x=i(v);Sr=a(x,"The ["),qt=n(x,"CODE",{});var cn=i(qt);Wr=a(cn,"ViTFeatureExtractor"),cn.forEach(o),Hr=a(x,"/"),At=n(x,"CODE",{});var hn=i(At);Br=a(hn,"DeiTFeatureExtractor"),hn.forEach(o),Gr=a(x,`] class is responsible for preprocessing the input image and
[`),It=n(x,"CODE",{});var mn=i(It);Xr=a(mn,"RobertaTokenizer"),mn.forEach(o),Ur=a(x,"/"),Vt=n(x,"CODE",{});var fn=i(Vt);Zr=a(fn,"XLMRobertaTokenizer"),fn.forEach(o),Jr=a(x,`] decodes the generated target tokens to the target string. The
`),dt=n(x,"A",{href:!0});var pn=i(dt);Yr=a(pn,"TrOCRProcessor"),pn.forEach(o),Kr=a(x," wraps ["),Nt=n(x,"CODE",{});var un=i(Nt);Qr=a(un,"ViTFeatureExtractor"),un.forEach(o),ea=a(x,"/"),St=n(x,"CODE",{});var gn=i(St);ta=a(gn,"DeiTFeatureExtractor"),gn.forEach(o),oa=a(x,"] and ["),Wt=n(x,"CODE",{});var _n=i(Wt);ra=a(_n,"RobertaTokenizer"),_n.forEach(o),aa=a(x,"/"),Ht=n(x,"CODE",{});var vn=i(Ht);sa=a(vn,"XLMRobertaTokenizer"),vn.forEach(o),na=a(x,`]
into a single instance to both extract the input features and decode the predicted token ids.`),x.forEach(o),Oo=h(t),ct=n(t,"UL",{});var Tn=i(ct);Bt=n(Tn,"LI",{});var bn=i(Bt);ia=a(bn,"Step-by-step Optical Character Recognition (OCR)"),bn.forEach(o),Tn.forEach(o),yo=h(t),w(Fe.$$.fragment,t),Eo=h(t),ne=n(t,"P",{});var No=i(ne);la=a(No,"See the "),De=n(No,"A",{href:!0,rel:!0});var Cn=i(De);da=a(Cn,"model hub"),Cn.forEach(o),ca=a(No," to look for TrOCR checkpoints."),No.forEach(o),Ro=h(t),J=n(t,"H2",{class:!0});var So=i(J);ie=n(So,"A",{id:!0,class:!0,href:!0});var wn=i(ie);Gt=n(wn,"SPAN",{});var kn=i(Gt);w(qe.$$.fragment,kn),kn.forEach(o),wn.forEach(o),ha=h(So),Xt=n(So,"SPAN",{});var $n=i(Xt);ma=a($n,"TrOCRConfig"),$n.forEach(o),So.forEach(o),xo=h(t),q=n(t,"DIV",{class:!0});var Te=i(q);w(Ae.$$.fragment,Te),fa=h(Te),Y=n(Te,"P",{});var Ot=i(Y);pa=a(Ot,"This is the configuration class to store the configuration of a "),ht=n(Ot,"A",{href:!0});var On=i(ht);ua=a(On,"TrOCRForCausalLM"),On.forEach(o),ga=a(Ot,`. It is used to instantiate an
TrOCR model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the TrOCR
`),Ie=n(Ot,"A",{href:!0,rel:!0});var yn=i(Ie);_a=a(yn,"microsoft/trocr-base-handwritten"),yn.forEach(o),va=a(Ot," architecture."),Ot.forEach(o),Ta=h(Te),K=n(Te,"P",{});var yt=i(K);ba=a(yt,"Configuration objects inherit from "),mt=n(yt,"A",{href:!0});var En=i(mt);Ca=a(En,"PretrainedConfig"),En.forEach(o),wa=a(yt,` and can be used to control the model outputs. Read the
documentation from `),ft=n(yt,"A",{href:!0});var Rn=i(ft);ka=a(Rn,"PretrainedConfig"),Rn.forEach(o),$a=a(yt," for more information."),yt.forEach(o),Oa=h(Te),w(le.$$.fragment,Te),Te.forEach(o),Po=h(t),Q=n(t,"H2",{class:!0});var Wo=i(Q);de=n(Wo,"A",{id:!0,class:!0,href:!0});var xn=i(de);Ut=n(xn,"SPAN",{});var Pn=i(Ut);w(Ve.$$.fragment,Pn),Pn.forEach(o),xn.forEach(o),ya=h(Wo),Zt=n(Wo,"SPAN",{});var Mn=i(Zt);Ea=a(Mn,"TrOCRProcessor"),Mn.forEach(o),Wo.forEach(o),Mo=h(t),E=n(t,"DIV",{class:!0});var M=i(E);w(Ne.$$.fragment,M),Ra=h(M),Jt=n(M,"P",{});var jn=i(Jt);xa=a(jn,"Constructs a TrOCR processor which wraps a vision feature extractor and a TrOCR tokenizer into a single processor."),jn.forEach(o),Pa=h(M),P=n(M,"P",{});var z=i(P);pt=n(z,"A",{href:!0});var Ln=i(pt);Ma=a(Ln,"TrOCRProcessor"),Ln.forEach(o),ja=a(z," offers all the functionalities of ["),Yt=n(z,"CODE",{});var zn=i(Yt);La=a(zn,"ViTFeatureExtractor"),zn.forEach(o),za=a(z,"/"),Kt=n(z,"CODE",{});var Fn=i(Kt);Fa=a(Fn,"DeiTFeatureExtractor"),Fn.forEach(o),Da=a(z,`] and
[`),Qt=n(z,"CODE",{});var Dn=i(Qt);qa=a(Dn,"RobertaTokenizer"),Dn.forEach(o),Aa=a(z,"/"),eo=n(z,"CODE",{});var qn=i(eo);Ia=a(qn,"XLMRobertaTokenizer"),qn.forEach(o),Va=a(z,"]. See the "),Se=n(z,"A",{href:!0});var qs=i(Se);to=n(qs,"STRONG",{});var An=i(to);Na=a(An,"call"),An.forEach(o),Sa=a(qs,"()"),qs.forEach(o),Wa=a(z," and "),ut=n(z,"A",{href:!0});var In=i(ut);Ha=a(In,"decode()"),In.forEach(o),Ba=a(z,` for
more information.`),z.forEach(o),Ga=h(M),ce=n(M,"DIV",{class:!0});var Ho=i(ce);w(We.$$.fragment,Ho),Xa=h(Ho),V=n(Ho,"P",{});var be=i(V);Ua=a(be,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),oo=n(be,"CODE",{});var Vn=i(oo);Za=a(Vn,"__call__()"),Vn.forEach(o),Ja=a(be,` and returns its output. If used in the context
`),ro=n(be,"CODE",{});var Nn=i(ro);Ya=a(Nn,"as_target_processor()"),Nn.forEach(o),Ka=a(be,` this method forwards all its arguments to TrOCRTokenizer\u2019s
`),ao=n(be,"CODE",{});var Sn=i(ao);Qa=a(Sn,"__call__"),Sn.forEach(o),es=a(be,". Please refer to the doctsring of the above two methods for more information."),be.forEach(o),Ho.forEach(o),ts=h(M),X=n(M,"DIV",{class:!0});var Et=i(X);w(He.$$.fragment,Et),os=h(Et),so=n(Et,"P",{});var Wn=i(so);rs=a(Wn,"Instantiate a processor associated with a pretrained model."),Wn.forEach(o),as=h(Et),w(he.$$.fragment,Et),Et.forEach(o),ss=h(M),U=n(M,"DIV",{class:!0});var Rt=i(U);w(Be.$$.fragment,Rt),ns=h(Rt),Ge=n(Rt,"P",{});var Bo=i(Ge);is=a(Bo,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),gt=n(Bo,"A",{href:!0});var Hn=i(gt);ls=a(Hn,"from_pretrained()"),Hn.forEach(o),ds=a(Bo," method."),Bo.forEach(o),cs=h(Rt),w(me.$$.fragment,Rt),Rt.forEach(o),hs=h(M),fe=n(M,"DIV",{class:!0});var Go=i(fe);w(Xe.$$.fragment,Go),ms=h(Go),Ue=n(Go,"P",{});var Xo=i(Ue);fs=a(Xo,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),_t=n(Xo,"A",{href:!0});var Bn=i(_t);ps=a(Bn,"batch_decode()"),Bn.forEach(o),us=a(Xo,`. Please refer
to the docstring of this method for more information.`),Xo.forEach(o),Go.forEach(o),gs=h(M),pe=n(M,"DIV",{class:!0});var Uo=i(pe);w(Ze.$$.fragment,Uo),_s=h(Uo),Je=n(Uo,"P",{});var Zo=i(Je);vs=a(Zo,"This method forwards all its arguments to TrOCRTokenizer\u2019s "),vt=n(Zo,"A",{href:!0});var Gn=i(vt);Ts=a(Gn,"decode()"),Gn.forEach(o),bs=a(Zo,`. Please refer to the
docstring of this method for more information.`),Zo.forEach(o),Uo.forEach(o),M.forEach(o),jo=h(t),ee=n(t,"H2",{class:!0});var Jo=i(ee);ue=n(Jo,"A",{id:!0,class:!0,href:!0});var Xn=i(ue);no=n(Xn,"SPAN",{});var Un=i(no);w(Ye.$$.fragment,Un),Un.forEach(o),Xn.forEach(o),Cs=h(Jo),io=n(Jo,"SPAN",{});var Zn=i(io);ws=a(Zn,"TrOCRForCausalLM"),Zn.forEach(o),Jo.forEach(o),Lo=h(t),A=n(t,"DIV",{class:!0});var Ce=i(A);w(Ke.$$.fragment,Ce),ks=h(Ce),N=n(Ce,"P",{});var we=i(N);$s=a(we,"The TrOCR Decoder with a language modeling head. Can be used as the decoder part of "),Tt=n(we,"A",{href:!0});var Jn=i(Tt);Os=a(Jn,"EncoderDecoderModel"),Jn.forEach(o),ys=a(we," and "),lo=n(we,"CODE",{});var Yn=i(lo);Es=a(Yn,"VisionEncoderDecoder"),Yn.forEach(o),Rs=a(we,`.
This model inherits from `),bt=n(we,"A",{href:!0});var Kn=i(bt);xs=a(Kn,"PreTrainedModel"),Kn.forEach(o),Ps=a(we,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),we.forEach(o),Ms=h(Ce),Qe=n(Ce,"P",{});var Yo=i(Qe);js=a(Yo,"This model is also a PyTorch "),et=n(Yo,"A",{href:!0,rel:!0});var Qn=i(et);Ls=a(Qn,"torch.nn.Module"),Qn.forEach(o),zs=a(Yo,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yo.forEach(o),Fs=h(Ce),ge=n(Ce,"DIV",{class:!0});var Ko=i(ge);w(tt.$$.fragment,Ko),Ds=h(Ko),w(_e.$$.fragment,Ko),Ko.forEach(o),Ce.forEach(o),this.h()},h(){l(p,"name","hf:doc:metadata"),l(p,"content",JSON.stringify(pi)),l(g,"id","trocr"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#trocr"),l(u,"class","relative group"),l(F,"id","overview"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#overview"),l(L,"class","relative group"),l($e,"href","https://arxiv.org/abs/2109.10282"),l($e,"rel","nofollow"),l(Oe,"href","https://en.wikipedia.org/wiki/Optical_character_recognition"),l(Oe,"rel","nofollow"),ii(oe.src,Is="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/trocr_architecture.jpg")||l(oe,"src",Is),l(oe,"alt","drawing"),l(oe,"width","600"),l(st,"href","https://arxiv.org/abs/2109.10282"),l(ye,"href","https://huggingface.co/nielsr"),l(ye,"rel","nofollow"),l(Ee,"href","https://github.com/microsoft/unilm/tree/6f60612e7cc86a2a1ae85c47231507a587ab4e01/trocr"),l(Ee,"rel","nofollow"),l(xe,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/TrOCR"),l(xe,"rel","nofollow"),l(Pe,"href","https://paperswithcode.com/dataset/sroie"),l(Pe,"rel","nofollow"),l(Me,"href","https://fki.tic.heia-fr.ch/databases/iam-handwriting-database%3E"),l(Me,"rel","nofollow"),l(je,"href","https://huggingface.co/models?other=trocr%3E"),l(je,"rel","nofollow"),l(it,"href","vision-encoder-decoder"),l(se,"id","inference"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#inference"),l(Z,"class","relative group"),l(lt,"href","/docs/transformers/v4.22.1/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(dt,"href","/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRProcessor"),l(De,"href","https://huggingface.co/models?filter=trocr"),l(De,"rel","nofollow"),l(ie,"id","transformers.TrOCRConfig"),l(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ie,"href","#transformers.TrOCRConfig"),l(J,"class","relative group"),l(ht,"href","/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRForCausalLM"),l(Ie,"href","https://huggingface.co/microsoft/trocr-base-handwritten"),l(Ie,"rel","nofollow"),l(mt,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(ft,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(de,"id","transformers.TrOCRProcessor"),l(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(de,"href","#transformers.TrOCRProcessor"),l(Q,"class","relative group"),l(pt,"href","/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRProcessor"),l(Se,"href","/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRProcessor.__call__"),l(ut,"href","/docs/transformers/v4.22.1/en/model_doc/trocr#transformers.TrOCRProcessor.decode"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(gt,"href","/docs/transformers/v4.22.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_t,"href","/docs/transformers/v4.22.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),l(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(vt,"href","/docs/transformers/v4.22.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),l(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"id","transformers.TrOCRForCausalLM"),l(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ue,"href","#transformers.TrOCRForCausalLM"),l(ee,"class","relative group"),l(Tt,"href","/docs/transformers/v4.22.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(bt,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),l(et,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(et,"rel","nofollow"),l(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,d){e(document.head,p),f(t,R,d),f(t,u,d),e(u,g),e(g,T),k(m,T,null),e(u,_),e(u,D),e(D,j),f(t,b,d),f(t,L,d),e(L,F),e(F,Pt),k(ke,Pt,null),e(L,Qo),e(L,Mt),e(Mt,er),f(t,fo,d),f(t,W,d),e(W,tr),e(W,$e),e($e,or),e(W,rr),e(W,Oe),e(Oe,ar),e(W,sr),f(t,po,d),f(t,rt,d),e(rt,nr),f(t,uo,d),f(t,at,d),e(at,jt),e(jt,ir),f(t,go,d),f(t,oe,d),f(t,_o,d),f(t,re,d),e(re,lr),e(re,st),e(st,dr),e(re,cr),f(t,vo,d),f(t,ae,d),e(ae,hr),e(ae,Lt),e(Lt,mr),e(ae,fr),f(t,To,d),f(t,H,d),e(H,pr),e(H,ye),e(ye,ur),e(H,gr),e(H,Ee),e(Ee,_r),e(H,vr),f(t,bo,d),f(t,nt,d),e(nt,Tr),f(t,Co,d),f(t,B,d),e(B,Re),e(Re,br),e(Re,xe),e(xe,Cr),e(Re,wr),e(B,kr),e(B,I),e(I,$r),e(I,Pe),e(Pe,Or),e(I,yr),e(I,Me),e(Me,Er),e(I,Rr),e(I,je),e(je,xr),e(I,Pr),e(B,Mr),e(B,Le),e(Le,jr),e(Le,it),e(it,Lr),e(Le,zr),f(t,wo,d),f(t,Z,d),e(Z,se),e(se,zt),k(ze,zt,null),e(Z,Fr),e(Z,Ft),e(Ft,Dr),f(t,ko,d),f(t,G,d),e(G,qr),e(G,Dt),e(Dt,Ar),e(G,Ir),e(G,lt),e(lt,Vr),e(G,Nr),f(t,$o,d),f(t,v,d),e(v,Sr),e(v,qt),e(qt,Wr),e(v,Hr),e(v,At),e(At,Br),e(v,Gr),e(v,It),e(It,Xr),e(v,Ur),e(v,Vt),e(Vt,Zr),e(v,Jr),e(v,dt),e(dt,Yr),e(v,Kr),e(v,Nt),e(Nt,Qr),e(v,ea),e(v,St),e(St,ta),e(v,oa),e(v,Wt),e(Wt,ra),e(v,aa),e(v,Ht),e(Ht,sa),e(v,na),f(t,Oo,d),f(t,ct,d),e(ct,Bt),e(Bt,ia),f(t,yo,d),k(Fe,t,d),f(t,Eo,d),f(t,ne,d),e(ne,la),e(ne,De),e(De,da),e(ne,ca),f(t,Ro,d),f(t,J,d),e(J,ie),e(ie,Gt),k(qe,Gt,null),e(J,ha),e(J,Xt),e(Xt,ma),f(t,xo,d),f(t,q,d),k(Ae,q,null),e(q,fa),e(q,Y),e(Y,pa),e(Y,ht),e(ht,ua),e(Y,ga),e(Y,Ie),e(Ie,_a),e(Y,va),e(q,Ta),e(q,K),e(K,ba),e(K,mt),e(mt,Ca),e(K,wa),e(K,ft),e(ft,ka),e(K,$a),e(q,Oa),k(le,q,null),f(t,Po,d),f(t,Q,d),e(Q,de),e(de,Ut),k(Ve,Ut,null),e(Q,ya),e(Q,Zt),e(Zt,Ea),f(t,Mo,d),f(t,E,d),k(Ne,E,null),e(E,Ra),e(E,Jt),e(Jt,xa),e(E,Pa),e(E,P),e(P,pt),e(pt,Ma),e(P,ja),e(P,Yt),e(Yt,La),e(P,za),e(P,Kt),e(Kt,Fa),e(P,Da),e(P,Qt),e(Qt,qa),e(P,Aa),e(P,eo),e(eo,Ia),e(P,Va),e(P,Se),e(Se,to),e(to,Na),e(Se,Sa),e(P,Wa),e(P,ut),e(ut,Ha),e(P,Ba),e(E,Ga),e(E,ce),k(We,ce,null),e(ce,Xa),e(ce,V),e(V,Ua),e(V,oo),e(oo,Za),e(V,Ja),e(V,ro),e(ro,Ya),e(V,Ka),e(V,ao),e(ao,Qa),e(V,es),e(E,ts),e(E,X),k(He,X,null),e(X,os),e(X,so),e(so,rs),e(X,as),k(he,X,null),e(E,ss),e(E,U),k(Be,U,null),e(U,ns),e(U,Ge),e(Ge,is),e(Ge,gt),e(gt,ls),e(Ge,ds),e(U,cs),k(me,U,null),e(E,hs),e(E,fe),k(Xe,fe,null),e(fe,ms),e(fe,Ue),e(Ue,fs),e(Ue,_t),e(_t,ps),e(Ue,us),e(E,gs),e(E,pe),k(Ze,pe,null),e(pe,_s),e(pe,Je),e(Je,vs),e(Je,vt),e(vt,Ts),e(Je,bs),f(t,jo,d),f(t,ee,d),e(ee,ue),e(ue,no),k(Ye,no,null),e(ee,Cs),e(ee,io),e(io,ws),f(t,Lo,d),f(t,A,d),k(Ke,A,null),e(A,ks),e(A,N),e(N,$s),e(N,Tt),e(Tt,Os),e(N,ys),e(N,lo),e(lo,Es),e(N,Rs),e(N,bt),e(bt,xs),e(N,Ps),e(A,Ms),e(A,Qe),e(Qe,js),e(Qe,et),e(et,Ls),e(Qe,zs),e(A,Fs),e(A,ge),k(tt,ge,null),e(ge,Ds),k(_e,ge,null),zo=!0},p(t,[d]){const ot={};d&2&&(ot.$$scope={dirty:d,ctx:t}),le.$set(ot);const co={};d&2&&(co.$$scope={dirty:d,ctx:t}),he.$set(co);const ho={};d&2&&(ho.$$scope={dirty:d,ctx:t}),me.$set(ho);const mo={};d&2&&(mo.$$scope={dirty:d,ctx:t}),_e.$set(mo)},i(t){zo||($(m.$$.fragment,t),$(ke.$$.fragment,t),$(ze.$$.fragment,t),$(Fe.$$.fragment,t),$(qe.$$.fragment,t),$(Ae.$$.fragment,t),$(le.$$.fragment,t),$(Ve.$$.fragment,t),$(Ne.$$.fragment,t),$(We.$$.fragment,t),$(He.$$.fragment,t),$(he.$$.fragment,t),$(Be.$$.fragment,t),$(me.$$.fragment,t),$(Xe.$$.fragment,t),$(Ze.$$.fragment,t),$(Ye.$$.fragment,t),$(Ke.$$.fragment,t),$(tt.$$.fragment,t),$(_e.$$.fragment,t),zo=!0)},o(t){O(m.$$.fragment,t),O(ke.$$.fragment,t),O(ze.$$.fragment,t),O(Fe.$$.fragment,t),O(qe.$$.fragment,t),O(Ae.$$.fragment,t),O(le.$$.fragment,t),O(Ve.$$.fragment,t),O(Ne.$$.fragment,t),O(We.$$.fragment,t),O(He.$$.fragment,t),O(he.$$.fragment,t),O(Be.$$.fragment,t),O(me.$$.fragment,t),O(Xe.$$.fragment,t),O(Ze.$$.fragment,t),O(Ye.$$.fragment,t),O(Ke.$$.fragment,t),O(tt.$$.fragment,t),O(_e.$$.fragment,t),zo=!1},d(t){o(p),t&&o(R),t&&o(u),y(m),t&&o(b),t&&o(L),y(ke),t&&o(fo),t&&o(W),t&&o(po),t&&o(rt),t&&o(uo),t&&o(at),t&&o(go),t&&o(oe),t&&o(_o),t&&o(re),t&&o(vo),t&&o(ae),t&&o(To),t&&o(H),t&&o(bo),t&&o(nt),t&&o(Co),t&&o(B),t&&o(wo),t&&o(Z),y(ze),t&&o(ko),t&&o(G),t&&o($o),t&&o(v),t&&o(Oo),t&&o(ct),t&&o(yo),y(Fe,t),t&&o(Eo),t&&o(ne),t&&o(Ro),t&&o(J),y(qe),t&&o(xo),t&&o(q),y(Ae),y(le),t&&o(Po),t&&o(Q),y(Ve),t&&o(Mo),t&&o(E),y(Ne),y(We),y(He),y(he),y(Be),y(me),y(Xe),y(Ze),t&&o(jo),t&&o(ee),y(Ye),t&&o(Lo),t&&o(A),y(Ke),y(tt),y(_e)}}}const pi={local:"trocr",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.TrOCRConfig",title:"TrOCRConfig"},{local:"transformers.TrOCRProcessor",title:"TrOCRProcessor"},{local:"transformers.TrOCRForCausalLM",title:"TrOCRForCausalLM"}],title:"TrOCR"};function ui(S){return li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wi extends ri{constructor(p){super();ai(this,p,ui,fi,si,{})}}export{wi as default,pi as metadata};
