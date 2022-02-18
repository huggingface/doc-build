import{S as Ns,i as Rs,s as Bs,e as a,k as c,w,t as n,L as Gs,c as s,d as o,m as l,a as d,x as E,h as t,b as i,J as e,g as _,y as x,q as T,o as k,B as j}from"../../chunks/vendor-b1433968.js";import{T as Os}from"../../chunks/Tip-c3840994.js";import{D as oe}from"../../chunks/Docstring-ff504c58.js";import{C as tn}from"../../chunks/CodeBlock-a320dbd7.js";import{I as $n}from"../../chunks/IconCopyLink-7029626d.js";import"../../chunks/CopyButton-f65cb278.js";function Ws(me){let p,P,g,D,A;return{c(){p=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),D=n("Module"),A=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(M){p=s(M,"P",{});var $=d(p);P=t($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s($,"CODE",{});var L=d(g);D=t(L,"Module"),L.forEach(o),A=t($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(o)},m(M,$){_(M,p,$),e(p,P),e(p,g),e(g,D),e(p,A)},d(M){M&&o(p)}}}function Us(me){let p,P,g,D,A;return{c(){p=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),D=n("Module"),A=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(M){p=s(M,"P",{});var $=d(p);P=t($,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s($,"CODE",{});var L=d(g);D=t(L,"Module"),L.forEach(o),A=t($,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),$.forEach(o)},m(M,$){_(M,p,$),e(p,P),e(p,g),e(g,D),e(p,A)},d(M){M&&o(p)}}}function Hs(me){let p,P,g,D,A,M,$,L,Pn,rn,u,Cn,Je,qn,zn,To,Fn,An,Ye,Sn,Ln,Ke,In,On,Qe,Nn,Rn,ko,Bn,Gn,Xe,Wn,Un,eo,Hn,Zn,oo,Jn,Yn,an,ne,Kn,he,Qn,Xn,sn,I,et,no,ot,nt,to,tt,rt,dn,W,te,jo,fe,at,Do,st,cn,V,ge,dt,re,ro,it,ct,ao,lt,pt,mt,U,ht,so,ft,gt,io,ut,_t,vt,Mo,bt,yt,ue,wt,ae,_e,Et,ve,xt,co,Tt,kt,jt,se,be,Dt,H,Mt,Vo,Vt,$t,$o,Pt,Ct,ln,Z,de,Po,ye,qt,Co,zt,pn,h,we,Ft,J,At,qo,St,Lt,zo,It,Ot,Nt,Ee,Rt,xe,Bt,Gt,Wt,Te,Ut,ke,Ht,Zt,Jt,Fo,Yt,Kt,je,Qt,lo,Xt,er,or,De,nr,Me,tr,rr,ar,O,po,sr,dr,Ao,ir,cr,So,lr,pr,mr,C,Ve,hr,Y,fr,mo,gr,ur,Lo,_r,vr,br,ie,yr,Io,wr,Er,$e,xr,q,Pe,Tr,Oo,kr,jr,K,Dr,No,Mr,Vr,Ro,$r,Pr,Cr,Bo,qr,zr,Ce,mn,Q,ce,Go,qe,Fr,Wo,Ar,hn,f,ze,Sr,X,Lr,Uo,Ir,Or,Ho,Nr,Rr,Br,Fe,Gr,Ae,Wr,Ur,Hr,Se,Zr,Le,Jr,Yr,Kr,Zo,Qr,Xr,Ie,ea,ho,oa,na,ta,Oe,ra,Ne,aa,sa,da,N,fo,ia,ca,Jo,la,pa,Yo,ma,ha,fa,z,Re,ga,ee,ua,go,_a,va,Ko,ba,ya,wa,le,Ea,Qo,xa,Ta,Be,ka,S,Ge,ja,Xo,Da,Ma,en,Va,$a,We,fn;return M=new $n({}),fe=new $n({}),ge=new oe({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L27",parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration
object that defines the decoder config.</li>
</ul>`,name:"kwargs"}]}}),ue=new tn({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model from a ViT & bert-base-uncased style configurations
model = VisionEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder  = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained('my-model')

# loading model and config from pretrained folder
encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained('my-model')
model = VisionEncoderDecoderModel.from_pretrained('my-model', config=encoder_decoder_config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model from a ViT &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder  = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&#x27;my-model&#x27;</span>, config=encoder_decoder_config)`}}),_e=new oe({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),be=new oe({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),ye=new $n({}),we=new oe({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L150",parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ve=new oe({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L393",parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/v4.15.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See
<a href="/docs/transformers/v4.15.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code>
to the right, replacing -100 by the <code>pad_token_id</code> and prepending them with the
<code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>:
<code>attentions</code>) <code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output of the last layer of the
encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code>
(those that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code>
instead of all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code>
indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up
decoding (see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a
plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors
of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new Os({props:{$$slots:{default:[Ws]},$$scope:{ctx:me}}}),$e=new tn({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests
from PIL import Image
import torch

processor = TrOCRProcessor.from_pretrained('microsoft/trocr-base-handwritten')
model = VisionEncoderDecoderModel.from_pretrained('microsoft/trocr-base-handwritten')

# load image from the IAM dataset
url = "https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg"
image = Image.open(requests.get(url, stream=True).raw).convert("RGB")

# training
model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
model.config.pad_token_id = processor.tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

pixel_values = processor(image, return_tensors="pt").pixel_values
text = "hello world"
labels = processor.tokenizer(text, return_tensors="pt").input_ids
outputs = model(pixel_values=pixel_values, labels=labels)
loss = outputs.loss

# inference (generation)
generated_ids = model.generate(pixel_values)
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&#x27;microsoft/trocr-base-handwritten&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&#x27;microsoft/trocr-base-handwritten&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image from the IAM dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;https://fki.tic.heia-fr.ch/static/img/a01-122-02.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = processor.tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = processor.tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = processor.tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference (generation)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(pixel_values)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),Pe=new oe({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L247",parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided
as <code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (:obj: <em>str</em>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided
as <code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in
a PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),Ce=new tn({props:{code:`from transformers import VisionEncoderDecoderModel
# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained('google/vit-base-patch16-224-in21k', 'bert-base-uncased')
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = VisionEncoderDecoderModel.from_pretrained("./vit-bert"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>, <span class="hljs-string">&#x27;bert-base-uncased&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),qe=new $n({}),ze=new oe({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L273",parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the
model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on
GPUs) and <code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Re=new oe({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L584",parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/v4.15.0/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.15.0/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for
details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will
also be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead
of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new Os({props:{$$slots:{default:[Us]},$$scope:{ctx:me}}}),Be=new tn({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
from PIL import Image
import requests

url = 'http://images.cocodataset.org/val2017/000000039769.jpg'
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained('google/vit-base-patch16-224-in21k')

# load output tokenizer
tokenizer_output = GPT2Tokenizer.from_pretrained('gpt2')

# initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained('vit', 'gpt2')

pixel_values = feature_extractor(images=image, return_tensors="np").pixel_values

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

# generation
sequences = model.generate(pixel_values, num_beams=4, max_length=12).sequences

captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=True),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&#x27;gpt2&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;vit&#x27;</span>, <span class="hljs-string">&#x27;gpt2&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),Ge=new oe({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L707",parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (:obj: <em>Union[str, os.PathLike]</em>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (:obj: <em>Union[str, os.PathLike]</em>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under
a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}]}}),We=new tn({props:{code:`from transformers import FlaxVisionEncoderDecoderModel
# initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained('google/vit-base-patch16-224-in21k', 'gpt2')
# saving model after fine-tuning
model.save_pretrained("./vit-gpt2")
# load fine-tuned model
model = FlaxVisionEncoderDecoderModel.from_pretrained("./vit-gpt2"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&#x27;google/vit-base-patch16-224-in21k&#x27;</span>, <span class="hljs-string">&#x27;gpt2&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){p=a("meta"),P=c(),g=a("h1"),D=a("a"),A=a("span"),w(M.$$.fragment),$=c(),L=a("span"),Pn=n("Vision Encoder Decoder Models"),rn=c(),u=a("p"),Cn=n("The "),Je=a("a"),qn=n("VisionEncoderDecoderModel"),zn=n(` can be used to initialize an image-to-text-sequence model with any
pretrained vision autoencoding model as the encoder (`),To=a("em"),Fn=n("e.g."),An=c(),Ye=a("a"),Sn=n("ViT"),Ln=n(", "),Ke=a("a"),In=n("BEiT"),On=n(", "),Qe=a("a"),Nn=n("DeiT"),Rn=n(`)
and any pretrained language model as the decoder (`),ko=a("em"),Bn=n("e.g."),Gn=c(),Xe=a("a"),Wn=n("RoBERTa"),Un=n(", "),eo=a("a"),Hn=n("GPT2"),Zn=n(", "),oo=a("a"),Jn=n("BERT"),Yn=n(")."),an=c(),ne=a("p"),Kn=n(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),he=a("a"),Qn=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Xn=n(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),sn=c(),I=a("p"),et=n("An example of how to use a "),no=a("a"),ot=n("VisionEncoderDecoderModel"),nt=n(" for inference can be seen in "),to=a("a"),tt=n("TrOCR"),rt=n("."),dn=c(),W=a("h2"),te=a("a"),jo=a("span"),w(fe.$$.fragment),at=c(),Do=a("span"),st=n("VisionEncoderDecoderConfig"),cn=c(),V=a("div"),w(ge.$$.fragment),dt=c(),re=a("p"),ro=a("a"),it=n("VisionEncoderDecoderConfig"),ct=n(` is the configuration class to store the configuration of a
`),ao=a("a"),lt=n("VisionEncoderDecoderModel"),pt=n(`. It is used to instantiate a Vision-Encoder-Text-Decoder model
according to the specified arguments, defining the encoder and decoder configs.`),mt=c(),U=a("p"),ht=n("Configuration objects inherit from "),so=a("a"),ft=n("PretrainedConfig"),gt=n(` and can be used to control the model
outputs. Read the documentation from `),io=a("a"),ut=n("PretrainedConfig"),_t=n(" for more information."),vt=c(),Mo=a("p"),bt=n("Examples:"),yt=c(),w(ue.$$.fragment),wt=c(),ae=a("div"),w(_e.$$.fragment),Et=c(),ve=a("p"),xt=n("Instantiate a "),co=a("a"),Tt=n("VisionEncoderDecoderConfig"),kt=n(` (or a derived class) from a pre-trained encoder
model configuration and decoder model configuration.`),jt=c(),se=a("div"),w(be.$$.fragment),Dt=c(),H=a("p"),Mt=n("Serializes this instance to a Python dictionary. Override the default "),Vo=a("em"),Vt=n("to_dict()"),$t=n(" from "),$o=a("em"),Pt=n("PretrainedConfig"),Ct=n("."),ln=c(),Z=a("h2"),de=a("a"),Po=a("span"),w(ye.$$.fragment),qt=c(),Co=a("span"),zt=n("VisionEncoderDecoderModel"),pn=c(),h=a("div"),w(we.$$.fragment),Ft=c(),J=a("p"),At=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),qo=a("code"),St=n("from_pretrained()"),Lt=n(` function and the decoder is loaded via
`),zo=a("code"),It=n("from_pretrained()"),Ot=n(` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like image captioning.`),Nt=c(),Ee=a("p"),Rt=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),xe=a("a"),Bt=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Gt=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Wt=c(),Te=a("p"),Ut=n("Additionally, in "),ke=a("a"),Ht=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Zt=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Jt=c(),Fo=a("p"),Yt=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Kt=c(),je=a("p"),Qt=n("This model inherits from "),lo=a("a"),Xt=n("PreTrainedModel"),er=n(`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),or=c(),De=a("p"),nr=n("This model is also a PyTorch "),Me=a("a"),tr=n("torch.nn.Module"),rr=n(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ar=c(),O=a("p"),po=a("a"),sr=n("VisionEncoderDecoderModel"),dr=n(` is a generic model class that will be instantiated as a
transformer architecture with one of the base vision model classes of the library as encoder and another one as
decoder when created with the :meth`),Ao=a("em"),ir=n("~transformers.AutoModel.from_pretrained"),cr=n(` class method for the encoder and
:meth`),So=a("em"),lr=n("~transformers.AutoModelForCausalLM.from_pretrained"),pr=n(" class method for the decoder."),mr=c(),C=a("div"),w(Ve.$$.fragment),hr=c(),Y=a("p"),fr=n("The "),mo=a("a"),gr=n("VisionEncoderDecoderModel"),ur=n(" forward method, overrides the "),Lo=a("code"),_r=n("__call__"),vr=n(" special method."),br=c(),w(ie.$$.fragment),yr=c(),Io=a("p"),wr=n("Examples:"),Er=c(),w($e.$$.fragment),xr=c(),q=a("div"),w(Pe.$$.fragment),Tr=c(),Oo=a("p"),kr=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),jr=c(),K=a("p"),Dr=n("The model is set in evaluation mode by default using "),No=a("code"),Mr=n("model.eval()"),Vr=n(` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),Ro=a("code"),$r=n("model.train()"),Pr=n("."),Cr=c(),Bo=a("p"),qr=n("Example:"),zr=c(),w(Ce.$$.fragment),mn=c(),Q=a("h2"),ce=a("a"),Go=a("span"),w(qe.$$.fragment),Fr=c(),Wo=a("span"),Ar=n("FlaxVisionEncoderDecoderModel"),hn=c(),f=a("div"),w(ze.$$.fragment),Sr=c(),X=a("p"),Lr=n(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Uo=a("code"),Ir=n("from_pretrained()"),Or=n(` function and the decoder is loaded via
`),Ho=a("code"),Nr=n("from_pretrained()"),Rr=n(` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like image captioning.`),Br=c(),Fe=a("p"),Gr=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=a("a"),Wr=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ur=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Hr=c(),Se=a("p"),Zr=n("Additionally, in "),Le=a("a"),Jr=n("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Yr=n(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Kr=c(),Zo=a("p"),Qr=n(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Xr=c(),Ie=a("p"),ea=n("This model inherits from "),ho=a("a"),oa=n("FlaxPreTrainedModel"),na=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ta=c(),Oe=a("p"),ra=n("This model is also a Flax Linen "),Ne=a("a"),aa=n("flax.nn.Module"),sa=n(` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),da=c(),N=a("p"),fo=a("a"),ia=n("FlaxVisionEncoderDecoderModel"),ca=n(` is a generic model class that will be instantiated as a
transformer architecture with the module (flax.nn.Module) of one of the base vision model classes of the library as
encoder module and another one as decoder module when created with the
:meth`),Jo=a("em"),la=n("~transformers.FlaxAutoModel.from_pretrained"),pa=n(` class method for the encoder and
:meth`),Yo=a("em"),ma=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),ha=n(" class method for the decoder."),fa=c(),z=a("div"),w(Re.$$.fragment),ga=c(),ee=a("p"),ua=n("The "),go=a("a"),_a=n("FlaxVisionEncoderDecoderModel"),va=n(" forward method, overrides the "),Ko=a("code"),ba=n("__call__"),ya=n(" special method."),wa=c(),w(le.$$.fragment),Ea=c(),Qo=a("p"),xa=n("Examples:"),Ta=c(),w(Be.$$.fragment),ka=c(),S=a("div"),w(Ge.$$.fragment),ja=c(),Xo=a("p"),Da=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ma=c(),en=a("p"),Va=n("Example:"),$a=c(),w(We.$$.fragment),this.h()},l(r){const m=Gs('[data-svelte="svelte-1phssyn"]',document.head);p=s(m,"META",{name:!0,content:!0}),m.forEach(o),P=l(r),g=s(r,"H1",{class:!0});var Ue=d(g);D=s(Ue,"A",{id:!0,class:!0,href:!0});var on=d(D);A=s(on,"SPAN",{});var Pa=d(A);E(M.$$.fragment,Pa),Pa.forEach(o),on.forEach(o),$=l(Ue),L=s(Ue,"SPAN",{});var Ca=d(L);Pn=t(Ca,"Vision Encoder Decoder Models"),Ca.forEach(o),Ue.forEach(o),rn=l(r),u=s(r,"P",{});var v=d(u);Cn=t(v,"The "),Je=s(v,"A",{href:!0});var qa=d(Je);qn=t(qa,"VisionEncoderDecoderModel"),qa.forEach(o),zn=t(v,` can be used to initialize an image-to-text-sequence model with any
pretrained vision autoencoding model as the encoder (`),To=s(v,"EM",{});var za=d(To);Fn=t(za,"e.g."),za.forEach(o),An=l(v),Ye=s(v,"A",{href:!0});var Fa=d(Ye);Sn=t(Fa,"ViT"),Fa.forEach(o),Ln=t(v,", "),Ke=s(v,"A",{href:!0});var Aa=d(Ke);In=t(Aa,"BEiT"),Aa.forEach(o),On=t(v,", "),Qe=s(v,"A",{href:!0});var Sa=d(Qe);Nn=t(Sa,"DeiT"),Sa.forEach(o),Rn=t(v,`)
and any pretrained language model as the decoder (`),ko=s(v,"EM",{});var La=d(ko);Bn=t(La,"e.g."),La.forEach(o),Gn=l(v),Xe=s(v,"A",{href:!0});var Ia=d(Xe);Wn=t(Ia,"RoBERTa"),Ia.forEach(o),Un=t(v,", "),eo=s(v,"A",{href:!0});var Oa=d(eo);Hn=t(Oa,"GPT2"),Oa.forEach(o),Zn=t(v,", "),oo=s(v,"A",{href:!0});var Na=d(oo);Jn=t(Na,"BERT"),Na.forEach(o),Yn=t(v,")."),v.forEach(o),an=l(r),ne=s(r,"P",{});var gn=d(ne);Kn=t(gn,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),he=s(gn,"A",{href:!0,rel:!0});var Ra=d(he);Qn=t(Ra,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Ra.forEach(o),Xn=t(gn,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),gn.forEach(o),sn=l(r),I=s(r,"P",{});var uo=d(I);et=t(uo,"An example of how to use a "),no=s(uo,"A",{href:!0});var Ba=d(no);ot=t(Ba,"VisionEncoderDecoderModel"),Ba.forEach(o),nt=t(uo," for inference can be seen in "),to=s(uo,"A",{href:!0});var Ga=d(to);tt=t(Ga,"TrOCR"),Ga.forEach(o),rt=t(uo,"."),uo.forEach(o),dn=l(r),W=s(r,"H2",{class:!0});var un=d(W);te=s(un,"A",{id:!0,class:!0,href:!0});var Wa=d(te);jo=s(Wa,"SPAN",{});var Ua=d(jo);E(fe.$$.fragment,Ua),Ua.forEach(o),Wa.forEach(o),at=l(un),Do=s(un,"SPAN",{});var Ha=d(Do);st=t(Ha,"VisionEncoderDecoderConfig"),Ha.forEach(o),un.forEach(o),cn=l(r),V=s(r,"DIV",{class:!0});var F=d(V);E(ge.$$.fragment,F),dt=l(F),re=s(F,"P",{});var nn=d(re);ro=s(nn,"A",{href:!0});var Za=d(ro);it=t(Za,"VisionEncoderDecoderConfig"),Za.forEach(o),ct=t(nn,` is the configuration class to store the configuration of a
`),ao=s(nn,"A",{href:!0});var Ja=d(ao);lt=t(Ja,"VisionEncoderDecoderModel"),Ja.forEach(o),pt=t(nn,`. It is used to instantiate a Vision-Encoder-Text-Decoder model
according to the specified arguments, defining the encoder and decoder configs.`),nn.forEach(o),mt=l(F),U=s(F,"P",{});var _o=d(U);ht=t(_o,"Configuration objects inherit from "),so=s(_o,"A",{href:!0});var Ya=d(so);ft=t(Ya,"PretrainedConfig"),Ya.forEach(o),gt=t(_o,` and can be used to control the model
outputs. Read the documentation from `),io=s(_o,"A",{href:!0});var Ka=d(io);ut=t(Ka,"PretrainedConfig"),Ka.forEach(o),_t=t(_o," for more information."),_o.forEach(o),vt=l(F),Mo=s(F,"P",{});var Qa=d(Mo);bt=t(Qa,"Examples:"),Qa.forEach(o),yt=l(F),E(ue.$$.fragment,F),wt=l(F),ae=s(F,"DIV",{class:!0});var _n=d(ae);E(_e.$$.fragment,_n),Et=l(_n),ve=s(_n,"P",{});var vn=d(ve);xt=t(vn,"Instantiate a "),co=s(vn,"A",{href:!0});var Xa=d(co);Tt=t(Xa,"VisionEncoderDecoderConfig"),Xa.forEach(o),kt=t(vn,` (or a derived class) from a pre-trained encoder
model configuration and decoder model configuration.`),vn.forEach(o),_n.forEach(o),jt=l(F),se=s(F,"DIV",{class:!0});var bn=d(se);E(be.$$.fragment,bn),Dt=l(bn),H=s(bn,"P",{});var vo=d(H);Mt=t(vo,"Serializes this instance to a Python dictionary. Override the default "),Vo=s(vo,"EM",{});var es=d(Vo);Vt=t(es,"to_dict()"),es.forEach(o),$t=t(vo," from "),$o=s(vo,"EM",{});var os=d($o);Pt=t(os,"PretrainedConfig"),os.forEach(o),Ct=t(vo,"."),vo.forEach(o),bn.forEach(o),F.forEach(o),ln=l(r),Z=s(r,"H2",{class:!0});var yn=d(Z);de=s(yn,"A",{id:!0,class:!0,href:!0});var ns=d(de);Po=s(ns,"SPAN",{});var ts=d(Po);E(ye.$$.fragment,ts),ts.forEach(o),ns.forEach(o),qt=l(yn),Co=s(yn,"SPAN",{});var rs=d(Co);zt=t(rs,"VisionEncoderDecoderModel"),rs.forEach(o),yn.forEach(o),pn=l(r),h=s(r,"DIV",{class:!0});var b=d(h);E(we.$$.fragment,b),Ft=l(b),J=s(b,"P",{});var bo=d(J);At=t(bo,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),qo=s(bo,"CODE",{});var as=d(qo);St=t(as,"from_pretrained()"),as.forEach(o),Lt=t(bo,` function and the decoder is loaded via
`),zo=s(bo,"CODE",{});var ss=d(zo);It=t(ss,"from_pretrained()"),ss.forEach(o),Ot=t(bo,` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like image captioning.`),bo.forEach(o),Nt=l(b),Ee=s(b,"P",{});var wn=d(Ee);Rt=t(wn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),xe=s(wn,"A",{href:!0,rel:!0});var ds=d(xe);Bt=t(ds,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),ds.forEach(o),Gt=t(wn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wn.forEach(o),Wt=l(b),Te=s(b,"P",{});var En=d(Te);Ut=t(En,"Additionally, in "),ke=s(En,"A",{href:!0,rel:!0});var is=d(ke);Ht=t(is,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),is.forEach(o),Zt=t(En,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),En.forEach(o),Jt=l(b),Fo=s(b,"P",{});var cs=d(Fo);Yt=t(cs,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),cs.forEach(o),Kt=l(b),je=s(b,"P",{});var xn=d(je);Qt=t(xn,"This model inherits from "),lo=s(xn,"A",{href:!0});var ls=d(lo);Xt=t(ls,"PreTrainedModel"),ls.forEach(o),er=t(xn,`. Check the superclass documentation for the generic
methods the library implements for all its model (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),xn.forEach(o),or=l(b),De=s(b,"P",{});var Tn=d(De);nr=t(Tn,"This model is also a PyTorch "),Me=s(Tn,"A",{href:!0,rel:!0});var ps=d(Me);tr=t(ps,"torch.nn.Module"),ps.forEach(o),rr=t(Tn,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Tn.forEach(o),ar=l(b),O=s(b,"P",{});var He=d(O);po=s(He,"A",{href:!0});var ms=d(po);sr=t(ms,"VisionEncoderDecoderModel"),ms.forEach(o),dr=t(He,` is a generic model class that will be instantiated as a
transformer architecture with one of the base vision model classes of the library as encoder and another one as
decoder when created with the :meth`),Ao=s(He,"EM",{});var hs=d(Ao);ir=t(hs,"~transformers.AutoModel.from_pretrained"),hs.forEach(o),cr=t(He,` class method for the encoder and
:meth`),So=s(He,"EM",{});var fs=d(So);lr=t(fs,"~transformers.AutoModelForCausalLM.from_pretrained"),fs.forEach(o),pr=t(He," class method for the decoder."),He.forEach(o),mr=l(b),C=s(b,"DIV",{class:!0});var R=d(C);E(Ve.$$.fragment,R),hr=l(R),Y=s(R,"P",{});var yo=d(Y);fr=t(yo,"The "),mo=s(yo,"A",{href:!0});var gs=d(mo);gr=t(gs,"VisionEncoderDecoderModel"),gs.forEach(o),ur=t(yo," forward method, overrides the "),Lo=s(yo,"CODE",{});var us=d(Lo);_r=t(us,"__call__"),us.forEach(o),vr=t(yo," special method."),yo.forEach(o),br=l(R),E(ie.$$.fragment,R),yr=l(R),Io=s(R,"P",{});var _s=d(Io);wr=t(_s,"Examples:"),_s.forEach(o),Er=l(R),E($e.$$.fragment,R),R.forEach(o),xr=l(b),q=s(b,"DIV",{class:!0});var B=d(q);E(Pe.$$.fragment,B),Tr=l(B),Oo=s(B,"P",{});var vs=d(Oo);kr=t(vs,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),vs.forEach(o),jr=l(B),K=s(B,"P",{});var wo=d(K);Dr=t(wo,"The model is set in evaluation mode by default using "),No=s(wo,"CODE",{});var bs=d(No);Mr=t(bs,"model.eval()"),bs.forEach(o),Vr=t(wo,` (Dropout modules are deactivated). To
train the model, you need to first set it back in training mode with `),Ro=s(wo,"CODE",{});var ys=d(Ro);$r=t(ys,"model.train()"),ys.forEach(o),Pr=t(wo,"."),wo.forEach(o),Cr=l(B),Bo=s(B,"P",{});var ws=d(Bo);qr=t(ws,"Example:"),ws.forEach(o),zr=l(B),E(Ce.$$.fragment,B),B.forEach(o),b.forEach(o),mn=l(r),Q=s(r,"H2",{class:!0});var kn=d(Q);ce=s(kn,"A",{id:!0,class:!0,href:!0});var Es=d(ce);Go=s(Es,"SPAN",{});var xs=d(Go);E(qe.$$.fragment,xs),xs.forEach(o),Es.forEach(o),Fr=l(kn),Wo=s(kn,"SPAN",{});var Ts=d(Wo);Ar=t(Ts,"FlaxVisionEncoderDecoderModel"),Ts.forEach(o),kn.forEach(o),hn=l(r),f=s(r,"DIV",{class:!0});var y=d(f);E(ze.$$.fragment,y),Sr=l(y),X=s(y,"P",{});var Eo=d(X);Lr=t(Eo,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Uo=s(Eo,"CODE",{});var ks=d(Uo);Ir=t(ks,"from_pretrained()"),ks.forEach(o),Or=t(Eo,` function and the decoder is loaded via
`),Ho=s(Eo,"CODE",{});var js=d(Ho);Nr=t(js,"from_pretrained()"),js.forEach(o),Rr=t(Eo,` function. Cross-attention layers are automatically added
to the decoder and should be fine-tuned on a downstream generative task, like image captioning.`),Eo.forEach(o),Br=l(y),Fe=s(y,"P",{});var jn=d(Fe);Gr=t(jn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ae=s(jn,"A",{href:!0,rel:!0});var Ds=d(Ae);Wr=t(Ds,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Ds.forEach(o),Ur=t(jn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),jn.forEach(o),Hr=l(y),Se=s(y,"P",{});var Dn=d(Se);Zr=t(Dn,"Additionally, in "),Le=s(Dn,"A",{href:!0,rel:!0});var Ms=d(Le);Jr=t(Ms,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Ms.forEach(o),Yr=t(Dn,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Dn.forEach(o),Kr=l(y),Zo=s(y,"P",{});var Vs=d(Zo);Qr=t(Vs,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Vs.forEach(o),Xr=l(y),Ie=s(y,"P",{});var Mn=d(Ie);ea=t(Mn,"This model inherits from "),ho=s(Mn,"A",{href:!0});var $s=d(ho);oa=t($s,"FlaxPreTrainedModel"),$s.forEach(o),na=t(Mn,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Mn.forEach(o),ta=l(y),Oe=s(y,"P",{});var Vn=d(Oe);ra=t(Vn,"This model is also a Flax Linen "),Ne=s(Vn,"A",{href:!0,rel:!0});var Ps=d(Ne);aa=t(Ps,"flax.nn.Module"),Ps.forEach(o),sa=t(Vn,` subclass. Use it as a regular Flax
Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vn.forEach(o),da=l(y),N=s(y,"P",{});var Ze=d(N);fo=s(Ze,"A",{href:!0});var Cs=d(fo);ia=t(Cs,"FlaxVisionEncoderDecoderModel"),Cs.forEach(o),ca=t(Ze,` is a generic model class that will be instantiated as a
transformer architecture with the module (flax.nn.Module) of one of the base vision model classes of the library as
encoder module and another one as decoder module when created with the
:meth`),Jo=s(Ze,"EM",{});var qs=d(Jo);la=t(qs,"~transformers.FlaxAutoModel.from_pretrained"),qs.forEach(o),pa=t(Ze,` class method for the encoder and
:meth`),Yo=s(Ze,"EM",{});var zs=d(Yo);ma=t(zs,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),zs.forEach(o),ha=t(Ze," class method for the decoder."),Ze.forEach(o),fa=l(y),z=s(y,"DIV",{class:!0});var G=d(z);E(Re.$$.fragment,G),ga=l(G),ee=s(G,"P",{});var xo=d(ee);ua=t(xo,"The "),go=s(xo,"A",{href:!0});var Fs=d(go);_a=t(Fs,"FlaxVisionEncoderDecoderModel"),Fs.forEach(o),va=t(xo," forward method, overrides the "),Ko=s(xo,"CODE",{});var As=d(Ko);ba=t(As,"__call__"),As.forEach(o),ya=t(xo," special method."),xo.forEach(o),wa=l(G),E(le.$$.fragment,G),Ea=l(G),Qo=s(G,"P",{});var Ss=d(Qo);xa=t(Ss,"Examples:"),Ss.forEach(o),Ta=l(G),E(Be.$$.fragment,G),G.forEach(o),ka=l(y),S=s(y,"DIV",{class:!0});var pe=d(S);E(Ge.$$.fragment,pe),ja=l(pe),Xo=s(pe,"P",{});var Ls=d(Xo);Da=t(Ls,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Ls.forEach(o),Ma=l(pe),en=s(pe,"P",{});var Is=d(en);Va=t(Is,"Example:"),Is.forEach(o),$a=l(pe),E(We.$$.fragment,pe),pe.forEach(o),y.forEach(o),this.h()},h(){i(p,"name","hf:doc:metadata"),i(p,"content",JSON.stringify(Zs)),i(D,"id","vision-encoder-decoder-models"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#vision-encoder-decoder-models"),i(g,"class","relative group"),i(Je,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderModel"),i(Ye,"href","/docs/transformers/v4.15.0/en/vit"),i(Ke,"href","/docs/transformers/v4.15.0/en/beit"),i(Qe,"href","/docs/transformers/v4.15.0/en/deit"),i(Xe,"href","/docs/transformers/v4.15.0/en/roberta"),i(eo,"href","/docs/transformers/v4.15.0/en/gpt2"),i(oo,"href","/docs/transformers/v4.15.0/en/bert"),i(he,"href","https://arxiv.org/abs/2109.10282"),i(he,"rel","nofollow"),i(no,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderModel"),i(to,"href","/docs/transformers/v4.15.0/en/trocr"),i(te,"id","transformers.VisionEncoderDecoderConfig"),i(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(te,"href","#transformers.VisionEncoderDecoderConfig"),i(W,"class","relative group"),i(ro,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig"),i(ao,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderModel"),i(so,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(io,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),i(co,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderConfig"),i(ae,"class","docstring"),i(se,"class","docstring"),i(V,"class","docstring"),i(de,"id","transformers.VisionEncoderDecoderModel"),i(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(de,"href","#transformers.VisionEncoderDecoderModel"),i(Z,"class","relative group"),i(xe,"href","https://arxiv.org/abs/1907.12461"),i(xe,"rel","nofollow"),i(ke,"href","https://arxiv.org/abs/2109.10282"),i(ke,"rel","nofollow"),i(lo,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),i(Me,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(Me,"rel","nofollow"),i(po,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderModel"),i(mo,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.VisionEncoderDecoderModel"),i(C,"class","docstring"),i(q,"class","docstring"),i(h,"class","docstring"),i(ce,"id","transformers.FlaxVisionEncoderDecoderModel"),i(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ce,"href","#transformers.FlaxVisionEncoderDecoderModel"),i(Q,"class","relative group"),i(Ae,"href","https://arxiv.org/abs/1907.12461"),i(Ae,"rel","nofollow"),i(Le,"href","https://arxiv.org/abs/2109.10282"),i(Le,"rel","nofollow"),i(ho,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),i(Ne,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),i(Ne,"rel","nofollow"),i(fo,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.FlaxVisionEncoderDecoderModel"),i(go,"href","/docs/transformers/v4.15.0/en/model_doc/visionencoderdecoder#transformers.FlaxVisionEncoderDecoderModel"),i(z,"class","docstring"),i(S,"class","docstring"),i(f,"class","docstring")},m(r,m){e(document.head,p),_(r,P,m),_(r,g,m),e(g,D),e(D,A),x(M,A,null),e(g,$),e(g,L),e(L,Pn),_(r,rn,m),_(r,u,m),e(u,Cn),e(u,Je),e(Je,qn),e(u,zn),e(u,To),e(To,Fn),e(u,An),e(u,Ye),e(Ye,Sn),e(u,Ln),e(u,Ke),e(Ke,In),e(u,On),e(u,Qe),e(Qe,Nn),e(u,Rn),e(u,ko),e(ko,Bn),e(u,Gn),e(u,Xe),e(Xe,Wn),e(u,Un),e(u,eo),e(eo,Hn),e(u,Zn),e(u,oo),e(oo,Jn),e(u,Yn),_(r,an,m),_(r,ne,m),e(ne,Kn),e(ne,he),e(he,Qn),e(ne,Xn),_(r,sn,m),_(r,I,m),e(I,et),e(I,no),e(no,ot),e(I,nt),e(I,to),e(to,tt),e(I,rt),_(r,dn,m),_(r,W,m),e(W,te),e(te,jo),x(fe,jo,null),e(W,at),e(W,Do),e(Do,st),_(r,cn,m),_(r,V,m),x(ge,V,null),e(V,dt),e(V,re),e(re,ro),e(ro,it),e(re,ct),e(re,ao),e(ao,lt),e(re,pt),e(V,mt),e(V,U),e(U,ht),e(U,so),e(so,ft),e(U,gt),e(U,io),e(io,ut),e(U,_t),e(V,vt),e(V,Mo),e(Mo,bt),e(V,yt),x(ue,V,null),e(V,wt),e(V,ae),x(_e,ae,null),e(ae,Et),e(ae,ve),e(ve,xt),e(ve,co),e(co,Tt),e(ve,kt),e(V,jt),e(V,se),x(be,se,null),e(se,Dt),e(se,H),e(H,Mt),e(H,Vo),e(Vo,Vt),e(H,$t),e(H,$o),e($o,Pt),e(H,Ct),_(r,ln,m),_(r,Z,m),e(Z,de),e(de,Po),x(ye,Po,null),e(Z,qt),e(Z,Co),e(Co,zt),_(r,pn,m),_(r,h,m),x(we,h,null),e(h,Ft),e(h,J),e(J,At),e(J,qo),e(qo,St),e(J,Lt),e(J,zo),e(zo,It),e(J,Ot),e(h,Nt),e(h,Ee),e(Ee,Rt),e(Ee,xe),e(xe,Bt),e(Ee,Gt),e(h,Wt),e(h,Te),e(Te,Ut),e(Te,ke),e(ke,Ht),e(Te,Zt),e(h,Jt),e(h,Fo),e(Fo,Yt),e(h,Kt),e(h,je),e(je,Qt),e(je,lo),e(lo,Xt),e(je,er),e(h,or),e(h,De),e(De,nr),e(De,Me),e(Me,tr),e(De,rr),e(h,ar),e(h,O),e(O,po),e(po,sr),e(O,dr),e(O,Ao),e(Ao,ir),e(O,cr),e(O,So),e(So,lr),e(O,pr),e(h,mr),e(h,C),x(Ve,C,null),e(C,hr),e(C,Y),e(Y,fr),e(Y,mo),e(mo,gr),e(Y,ur),e(Y,Lo),e(Lo,_r),e(Y,vr),e(C,br),x(ie,C,null),e(C,yr),e(C,Io),e(Io,wr),e(C,Er),x($e,C,null),e(h,xr),e(h,q),x(Pe,q,null),e(q,Tr),e(q,Oo),e(Oo,kr),e(q,jr),e(q,K),e(K,Dr),e(K,No),e(No,Mr),e(K,Vr),e(K,Ro),e(Ro,$r),e(K,Pr),e(q,Cr),e(q,Bo),e(Bo,qr),e(q,zr),x(Ce,q,null),_(r,mn,m),_(r,Q,m),e(Q,ce),e(ce,Go),x(qe,Go,null),e(Q,Fr),e(Q,Wo),e(Wo,Ar),_(r,hn,m),_(r,f,m),x(ze,f,null),e(f,Sr),e(f,X),e(X,Lr),e(X,Uo),e(Uo,Ir),e(X,Or),e(X,Ho),e(Ho,Nr),e(X,Rr),e(f,Br),e(f,Fe),e(Fe,Gr),e(Fe,Ae),e(Ae,Wr),e(Fe,Ur),e(f,Hr),e(f,Se),e(Se,Zr),e(Se,Le),e(Le,Jr),e(Se,Yr),e(f,Kr),e(f,Zo),e(Zo,Qr),e(f,Xr),e(f,Ie),e(Ie,ea),e(Ie,ho),e(ho,oa),e(Ie,na),e(f,ta),e(f,Oe),e(Oe,ra),e(Oe,Ne),e(Ne,aa),e(Oe,sa),e(f,da),e(f,N),e(N,fo),e(fo,ia),e(N,ca),e(N,Jo),e(Jo,la),e(N,pa),e(N,Yo),e(Yo,ma),e(N,ha),e(f,fa),e(f,z),x(Re,z,null),e(z,ga),e(z,ee),e(ee,ua),e(ee,go),e(go,_a),e(ee,va),e(ee,Ko),e(Ko,ba),e(ee,ya),e(z,wa),x(le,z,null),e(z,Ea),e(z,Qo),e(Qo,xa),e(z,Ta),x(Be,z,null),e(f,ka),e(f,S),x(Ge,S,null),e(S,ja),e(S,Xo),e(Xo,Da),e(S,Ma),e(S,en),e(en,Va),e(S,$a),x(We,S,null),fn=!0},p(r,[m]){const Ue={};m&2&&(Ue.$$scope={dirty:m,ctx:r}),ie.$set(Ue);const on={};m&2&&(on.$$scope={dirty:m,ctx:r}),le.$set(on)},i(r){fn||(T(M.$$.fragment,r),T(fe.$$.fragment,r),T(ge.$$.fragment,r),T(ue.$$.fragment,r),T(_e.$$.fragment,r),T(be.$$.fragment,r),T(ye.$$.fragment,r),T(we.$$.fragment,r),T(Ve.$$.fragment,r),T(ie.$$.fragment,r),T($e.$$.fragment,r),T(Pe.$$.fragment,r),T(Ce.$$.fragment,r),T(qe.$$.fragment,r),T(ze.$$.fragment,r),T(Re.$$.fragment,r),T(le.$$.fragment,r),T(Be.$$.fragment,r),T(Ge.$$.fragment,r),T(We.$$.fragment,r),fn=!0)},o(r){k(M.$$.fragment,r),k(fe.$$.fragment,r),k(ge.$$.fragment,r),k(ue.$$.fragment,r),k(_e.$$.fragment,r),k(be.$$.fragment,r),k(ye.$$.fragment,r),k(we.$$.fragment,r),k(Ve.$$.fragment,r),k(ie.$$.fragment,r),k($e.$$.fragment,r),k(Pe.$$.fragment,r),k(Ce.$$.fragment,r),k(qe.$$.fragment,r),k(ze.$$.fragment,r),k(Re.$$.fragment,r),k(le.$$.fragment,r),k(Be.$$.fragment,r),k(Ge.$$.fragment,r),k(We.$$.fragment,r),fn=!1},d(r){o(p),r&&o(P),r&&o(g),j(M),r&&o(rn),r&&o(u),r&&o(an),r&&o(ne),r&&o(sn),r&&o(I),r&&o(dn),r&&o(W),j(fe),r&&o(cn),r&&o(V),j(ge),j(ue),j(_e),j(be),r&&o(ln),r&&o(Z),j(ye),r&&o(pn),r&&o(h),j(we),j(Ve),j(ie),j($e),j(Pe),j(Ce),r&&o(mn),r&&o(Q),j(qe),r&&o(hn),r&&o(f),j(ze),j(Re),j(le),j(Be),j(Ge),j(We)}}}const Zs={local:"vision-encoder-decoder-models",sections:[{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function Js(me,p,P){let{fw:g}=p;return me.$$set=D=>{"fw"in D&&P(0,g=D.fw)},[g]}class nd extends Ns{constructor(p){super();Rs(this,p,Js,Hs,Bs,{fw:0})}}export{nd as default,Zs as metadata};
