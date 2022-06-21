import{S as ni,i as ti,s as ri,e as s,k as m,w as y,t,M as ai,c as d,d as o,m as h,a as i,x as k,h as r,b as l,G as e,g as b,y as T,q as w,o as E,B as $,v as si,L as $o}from"../../chunks/vendor-hf-doc-builder.js";import{T as Us}from"../../chunks/Tip-hf-doc-builder.js";import{D as B}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Un}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Eo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function di(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

# Initializing a BERT bert-base-uncased style configuration
config_encoder = BertConfig()
config_decoder = BertConfig()

config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a Bert2Bert model from the bert-base-uncased style configurations
model = EncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = EncoderDecoderConfig.from_pretrained("my-model")
model = EncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, EncoderDecoderConfig, EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = EncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bert2Bert model from the bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = EncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){c=s("p"),v=t("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function ii(z){let c,v,u,p,_;return{c(){c=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),_=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=r(A,"Module"),A.forEach(o),_=r(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,c,f),e(c,v),e(c,u),e(u,p),e(c,_)},d(a){a&&o(c)}}}function ci(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import EncoderDecoderModel, BertTokenizer
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = EncoderDecoderModel.from_encoder_decoder_pretrained(
    "bert-base-uncased", "bert-base-uncased"
)  # initialize Bert2Bert from pre-trained checkpoints

# training
model.config.decoder_start_token_id = tokenizer.cls_token_id
model.config.pad_token_id = tokenizer.pad_token_id
model.config.vocab_size = model.config.decoder.vocab_size

input_ids = tokenizer("This is a really long text", return_tensors="pt").input_ids
labels = tokenizer("This is the corresponding summary", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2bert")
model = EncoderDecoderModel.from_pretrained("bert2bert")

# generation
generated = model.generate(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel, BertTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize Bert2Bert from pre-trained checkpoints</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.cls_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.vocab_size = model.config.decoder.vocab_size

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;This is a really long text&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;This is the corresponding summary&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){c=s("p"),v=t("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function li(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import EncoderDecoderModel

# initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = EncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "bert-base-uncased")
# saving model after fine-tuning
model.save_pretrained("./bert2bert")
# load fine-tuned model
model = EncoderDecoderModel.from_pretrained("./bert2bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> EncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2bert from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){c=s("p"),v=t("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function pi(z){let c,v,u,p,_;return{c(){c=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),_=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=r(A,"Module"),A.forEach(o),_=r(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,c,f),e(c,v),e(c,u),e(u,p),e(c,_)},d(a){a&&o(c)}}}function mi(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import TFEncoderDecoderModel, BertTokenizer

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")

# forward
input_ids = tokenizer.encode(
    "Hello, my dog is cute", add_special_tokens=True, return_tensors="tf"
)  # Batch size 1
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

# training
outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("bert2gpt2")
model = TFEncoderDecoderModel.from_pretrained("bert2gpt2")

# generation
generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel, BertTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer.encode(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=input_ids, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;bert2gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){c=s("p"),v=t("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function hi(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import TFEncoderDecoderModel

# initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-uncased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = TFEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from two pretrained BERT models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){c=s("p"),v=t("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function fi(z){let c,v,u,p,_;return{c(){c=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),_=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=r(A,"Module"),A.forEach(o),_=r(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,c,f),e(c,v),e(c,u),e(u,p),e(c,_)},d(a){a&&o(c)}}}function ui(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

# load a fine-tuned bert2gpt2 model
model = FlaxEncoderDecoderModel.from_pretrained("patrickvonplaten/bert2gpt2-cnn_dailymail-fp16")
# load input & output tokenizer
tokenizer_input = BertTokenizer.from_pretrained("bert-base-cased")
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

article = '''Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
singing a racist chant. SAE's national chapter suspended the students,
but University of Oklahoma President David Boren took it a step further,
saying the university's affiliation with the fraternity is permanently done.'''

input_ids = tokenizer_input(article, add_special_tokens=True, return_tensors="np").input_ids

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

sequences = model.generate(input_ids, num_beams=4, max_length=12).sequences

summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)[0]
assert summary == "SAS Alpha Epsilon suspended Sigma Alpha Epsilon members"`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel, BertTokenizer, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load a fine-tuned bert2gpt2 model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2gpt2-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load input &amp; output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_input = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&#x27;&#x27;&#x27;Sigma Alpha Epsilon is under fire for a video showing party-bound fraternity members
<span class="hljs-meta">&gt;&gt;&gt; </span>singing a racist chant. SAE&#x27;s national chapter suspended the students,
<span class="hljs-meta">&gt;&gt;&gt; </span>but University of Oklahoma President David Boren took it a step further,
<span class="hljs-meta">&gt;&gt;&gt; </span>saying the university&#x27;s affiliation with the fraternity is permanently done.&#x27;&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer_input(article, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>summary = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){c=s("p"),v=t("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function gi(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import FlaxEncoderDecoderModel

# initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained("bert-base-cased", "gpt2")
# saving model after fine-tuning
model.save_pretrained("./bert2gpt2")
# load fine-tuned model
model = FlaxEncoderDecoderModel.from_pretrained("./bert2gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_encoder_decoder_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){c=s("p"),v=t("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function _i(z){let c,v,u,p,_,a,f,A,$t,Hn,ie,xt,xo,Mt,Dt,Yn,ce,zt,Pe,qt,jt,Jn,le,Ft,Mo,Pt,At,Zn,O,Ct,Do,St,Nt,Ae,It,Lt,Kn,V,Bt,mn,Ot,Vt,hn,Wt,Rt,Qn,Ce,Xn,W,Gt,Se,Ut,Ht,Ne,Yt,Jt,et,J,pe,fn,Ie,Zt,un,Kt,ot,P,Le,Qt,me,zo,Xt,er,qo,or,nr,tr,Z,rr,jo,ar,sr,Fo,dr,ir,cr,he,lr,fe,Be,pr,Oe,mr,Po,hr,fr,ur,ue,Ve,gr,K,_r,gn,br,vr,_n,yr,kr,nt,Q,ge,bn,We,Tr,vn,wr,tt,x,Re,Er,X,$r,Ao,xr,Mr,Co,Dr,zr,qr,Ge,jr,Ue,Fr,Pr,Ar,yn,Cr,Sr,He,Nr,So,Ir,Lr,Br,Ye,Or,Je,Vr,Wr,Rr,R,No,Gr,Ur,kn,Hr,Yr,Tn,Jr,Zr,Kr,C,Ze,Qr,ee,Xr,Io,ea,oa,wn,na,ta,ra,_e,aa,be,sa,S,Ke,da,En,ia,ca,oe,la,$n,pa,ma,xn,ha,fa,ua,ve,rt,ne,ye,Mn,Qe,ga,Dn,_a,at,M,Xe,ba,te,va,Lo,ya,ka,Bo,Ta,wa,Ea,eo,$a,oo,xa,Ma,Da,zn,za,qa,no,ja,Oo,Fa,Pa,Aa,to,Ca,ro,Sa,Na,Ia,G,Vo,La,Ba,Wo,Oa,Va,Ro,Wa,Ra,Ga,N,ao,Ua,re,Ha,Go,Ya,Ja,qn,Za,Ka,Qa,ke,Xa,Te,es,U,so,os,jn,ns,ts,we,st,ae,Ee,Fn,io,rs,Pn,as,dt,D,co,ss,se,ds,Uo,is,cs,Ho,ls,ps,ms,lo,hs,po,fs,us,gs,An,_s,bs,mo,vs,Yo,ys,ks,Ts,ho,ws,fo,Es,$s,xs,H,Jo,Ms,Ds,Cn,zs,qs,Sn,js,Fs,Ps,I,uo,As,de,Cs,Zo,Ss,Ns,Nn,Is,Ls,Bs,$e,Os,xe,Vs,Y,go,Ws,In,Rs,Gs,Me,it;return a=new Un({}),Ce=new Fe({props:{code:`# a workaround to load from pytorch checkpoint
_model = EncoderDecoderModel.from_pretrained("patrickvonplaten/bert2bert-cnn_dailymail-fp16")
_model.encoder.save_pretrained("./encoder")
_model.decoder.save_pretrained("./decoder")
model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
    "./encoder", "./decoder", encoder_from_pt=True, decoder_from_pt=True
)
# This is only for copying some specific attributes of this particular model.
model.config = _model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># a workaround to load from pytorch checkpoint</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>_model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/bert2bert-cnn_dailymail-fp16&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.encoder.save_pretrained(<span class="hljs-string">&quot;./encoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>_model.decoder.save_pretrained(<span class="hljs-string">&quot;./decoder&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;./encoder&quot;</span>, <span class="hljs-string">&quot;./decoder&quot;</span>, encoder_from_pt=<span class="hljs-literal">True</span>, decoder_from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is only for copying some specific attributes of this particular model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Ie=new Un({}),Le=new B({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),he=new Eo({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[di]},$$scope:{ctx:z}}}),Be=new B({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ve=new B({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),We=new Un({}),Re=new B({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Ze=new B({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.EncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.EncoderDecoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.EncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.EncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.EncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.EncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.EncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_e=new Us({props:{$$slots:{default:[ii]},$$scope:{ctx:z}}}),be=new Eo({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[ci]},$$scope:{ctx:z}}}),Ke=new B({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaining positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),ve=new Eo({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[li]},$$scope:{ctx:z}}}),Qe=new Un({}),Xe=new B({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),ao=new B({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFEncoderDecoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as \`**decoder_kwargs&#x201C; for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ke=new Us({props:{$$slots:{default:[pi]},$$scope:{ctx:z}}}),Te=new Eo({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[mi]},$$scope:{ctx:z}}}),so=new B({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),we=new Eo({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[hi]},$$scope:{ctx:z}}}),io=new Un({}),co=new B({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),uo=new B({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For sequence to sequence training, <code>decoder_input_ids</code> should be provided. <code>decoder_input_ids</code> should be
created outside of the model by shifting the <code>labels</code> to the right, replacing -100 by the <code>pad_token_id</code>
and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.encoder.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Us({props:{$$slots:{default:[fi]},$$scope:{ctx:z}}}),xe=new Eo({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[ui]},$$scope:{ctx:z}}}),go=new B({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Me=new Eo({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[gi]},$$scope:{ctx:z}}}),{c(){c=s("meta"),v=m(),u=s("h1"),p=s("a"),_=s("span"),y(a.$$.fragment),f=m(),A=s("span"),$t=t("Encoder Decoder Models"),Hn=m(),ie=s("p"),xt=t("The "),xo=s("a"),Mt=t("EncoderDecoderModel"),Dt=t(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Yn=m(),ce=s("p"),zt=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Pe=s("a"),qt=t("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),jt=t(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Jn=m(),le=s("p"),Ft=t("After such an "),Mo=s("a"),Pt=t("EncoderDecoderModel"),At=t(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Zn=m(),O=s("p"),Ct=t("An application of this architecture could be to leverage two pretrained "),Do=s("a"),St=t("BertModel"),Nt=t(` as the encoder
and decoder for a summarization model as was shown in: `),Ae=s("a"),It=t("Text Summarization with Pretrained Encoders"),Lt=t(" by Yang Liu and Mirella Lapata."),Kn=m(),V=s("p"),Bt=t("The "),mn=s("code"),Ot=t("from_pretrained()"),Vt=t(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),hn=s("code"),Wt=t("from_pt=True"),Rt=t(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Qn=m(),y(Ce.$$.fragment),Xn=m(),W=s("p"),Gt=t("This model was contributed by "),Se=s("a"),Ut=t("thomwolf"),Ht=t(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Ne=s("a"),Yt=t("ydshieh"),Jt=t("."),et=m(),J=s("h2"),pe=s("a"),fn=s("span"),y(Ie.$$.fragment),Zt=m(),un=s("span"),Kt=t("EncoderDecoderConfig"),ot=m(),P=s("div"),y(Le.$$.fragment),Qt=m(),me=s("p"),zo=s("a"),Xt=t("EncoderDecoderConfig"),er=t(" is the configuration class to store the configuration of a "),qo=s("a"),or=t("EncoderDecoderModel"),nr=t(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),tr=m(),Z=s("p"),rr=t("Configuration objects inherit from "),jo=s("a"),ar=t("PretrainedConfig"),sr=t(` and can be used to control the model outputs. Read the
documentation from `),Fo=s("a"),dr=t("PretrainedConfig"),ir=t(" for more information."),cr=m(),y(he.$$.fragment),lr=m(),fe=s("div"),y(Be.$$.fragment),pr=m(),Oe=s("p"),mr=t("Instantiate a "),Po=s("a"),hr=t("EncoderDecoderConfig"),fr=t(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),ur=m(),ue=s("div"),y(Ve.$$.fragment),gr=m(),K=s("p"),_r=t("Serializes this instance to a Python dictionary. Override the default "),gn=s("em"),br=t("to_dict()"),vr=t(" from "),_n=s("em"),yr=t("PretrainedConfig"),kr=t("."),nt=m(),Q=s("h2"),ge=s("a"),bn=s("span"),y(We.$$.fragment),Tr=m(),vn=s("span"),wr=t("EncoderDecoderModel"),tt=m(),x=s("div"),y(Re.$$.fragment),Er=m(),X=s("p"),$r=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ao=s("a"),xr=t("from_pretrained()"),Mr=t(" function and the decoder is loaded via "),Co=s("a"),Dr=t("from_pretrained()"),zr=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),qr=m(),Ge=s("p"),jr=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ue=s("a"),Fr=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ar=m(),yn=s("p"),Cr=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Sr=m(),He=s("p"),Nr=t("This model inherits from "),So=s("a"),Ir=t("PreTrainedModel"),Lr=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br=m(),Ye=s("p"),Or=t("This model is also a PyTorch "),Je=s("a"),Vr=t("torch.nn.Module"),Wr=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=m(),R=s("p"),No=s("a"),Gr=t("EncoderDecoderModel"),Ur=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),kn=s("em"),Hr=t("~transformers.AutoModel.from_pretrained"),Yr=t(` class method for the encoder and
:meth`),Tn=s("em"),Jr=t("~transformers.AutoModelForCausalLM.from_pretrained"),Zr=t(" class method for the decoder."),Kr=m(),C=s("div"),y(Ze.$$.fragment),Qr=m(),ee=s("p"),Xr=t("The "),Io=s("a"),ea=t("EncoderDecoderModel"),oa=t(" forward method, overrides the "),wn=s("code"),na=t("__call__"),ta=t(" special method."),ra=m(),y(_e.$$.fragment),aa=m(),y(be.$$.fragment),sa=m(),S=s("div"),y(Ke.$$.fragment),da=m(),En=s("p"),ia=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ca=m(),oe=s("p"),la=t("The model is set in evaluation mode by default using "),$n=s("code"),pa=t("model.eval()"),ma=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),xn=s("code"),ha=t("model.train()"),fa=t("."),ua=m(),y(ve.$$.fragment),rt=m(),ne=s("h2"),ye=s("a"),Mn=s("span"),y(Qe.$$.fragment),ga=m(),Dn=s("span"),_a=t("TFEncoderDecoderModel"),at=m(),M=s("div"),y(Xe.$$.fragment),ba=m(),te=s("p"),va=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Lo=s("a"),ya=t("from_pretrained()"),ka=t(" function and the decoder is loaded via "),Bo=s("a"),Ta=t("from_pretrained()"),wa=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ea=m(),eo=s("p"),$a=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),oo=s("a"),xa=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ma=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Da=m(),zn=s("p"),za=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),qa=m(),no=s("p"),ja=t("This model inherits from "),Oo=s("a"),Fa=t("TFPreTrainedModel"),Pa=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Aa=m(),to=s("p"),Ca=t("This model is also a "),ro=s("a"),Sa=t("tf.keras.Model"),Na=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ia=m(),G=s("p"),Vo=s("a"),La=t("TFEncoderDecoderModel"),Ba=t(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Wo=s("a"),Oa=t("from_pretrained()"),Va=t(" class method for the encoder and "),Ro=s("a"),Wa=t("from_pretrained()"),Ra=t(` class
method for the decoder.`),Ga=m(),N=s("div"),y(ao.$$.fragment),Ua=m(),re=s("p"),Ha=t("The "),Go=s("a"),Ya=t("TFEncoderDecoderModel"),Ja=t(" forward method, overrides the "),qn=s("code"),Za=t("__call__"),Ka=t(" special method."),Qa=m(),y(ke.$$.fragment),Xa=m(),y(Te.$$.fragment),es=m(),U=s("div"),y(so.$$.fragment),os=m(),jn=s("p"),ns=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ts=m(),y(we.$$.fragment),st=m(),ae=s("h2"),Ee=s("a"),Fn=s("span"),y(io.$$.fragment),rs=m(),Pn=s("span"),as=t("FlaxEncoderDecoderModel"),dt=m(),D=s("div"),y(co.$$.fragment),ss=m(),se=s("p"),ds=t(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Uo=s("a"),is=t("from_pretrained()"),cs=t(" function and the decoder is loaded via "),Ho=s("a"),ls=t("from_pretrained()"),ps=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ms=m(),lo=s("p"),hs=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s("a"),fs=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),us=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gs=m(),An=s("p"),_s=t(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),bs=m(),mo=s("p"),vs=t("This model inherits from "),Yo=s("a"),ys=t("FlaxPreTrainedModel"),ks=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ts=m(),ho=s("p"),ws=t(`This model is also a Flax Linen
`),fo=s("a"),Es=t("flax.nn.Module"),$s=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xs=m(),H=s("p"),Jo=s("a"),Ms=t("FlaxEncoderDecoderModel"),Ds=t(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Cn=s("em"),zs=t("~transformers.FlaxAutoModel.from_pretrained"),qs=t(` class method for the
encoder and :meth`),Sn=s("em"),js=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Fs=t(" class method for the decoder."),Ps=m(),I=s("div"),y(uo.$$.fragment),As=m(),de=s("p"),Cs=t("The "),Zo=s("a"),Ss=t("FlaxEncoderDecoderModel"),Ns=t(" forward method, overrides the "),Nn=s("code"),Is=t("__call__"),Ls=t(" special method."),Bs=m(),y($e.$$.fragment),Os=m(),y(xe.$$.fragment),Vs=m(),Y=s("div"),y(go.$$.fragment),Ws=m(),In=s("p"),Rs=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gs=m(),y(Me.$$.fragment),this.h()},l(n){const g=ai('[data-svelte="svelte-1phssyn"]',document.head);c=d(g,"META",{name:!0,content:!0}),g.forEach(o),v=h(n),u=d(n,"H1",{class:!0});var _o=i(u);p=d(_o,"A",{id:!0,class:!0,href:!0});var Ln=i(p);_=d(Ln,"SPAN",{});var Bn=i(_);k(a.$$.fragment,Bn),Bn.forEach(o),Ln.forEach(o),f=h(_o),A=d(_o,"SPAN",{});var On=i(A);$t=r(On,"Encoder Decoder Models"),On.forEach(o),_o.forEach(o),Hn=h(n),ie=d(n,"P",{});var bo=i(ie);xt=r(bo,"The "),xo=d(bo,"A",{href:!0});var Vn=i(xo);Mt=r(Vn,"EncoderDecoderModel"),Vn.forEach(o),Dt=r(bo,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),bo.forEach(o),Yn=h(n),ce=d(n,"P",{});var vo=i(ce);zt=r(vo,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Pe=d(vo,"A",{href:!0,rel:!0});var Wn=i(Pe);qt=r(Wn,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Wn.forEach(o),jt=r(vo,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),vo.forEach(o),Jn=h(n),le=d(n,"P",{});var yo=i(le);Ft=r(yo,"After such an "),Mo=d(yo,"A",{href:!0});var Rn=i(Mo);Pt=r(Rn,"EncoderDecoderModel"),Rn.forEach(o),At=r(yo,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),yo.forEach(o),Zn=h(n),O=d(n,"P",{});var Ko=i(O);Ct=r(Ko,"An application of this architecture could be to leverage two pretrained "),Do=d(Ko,"A",{href:!0});var Hs=i(Do);St=r(Hs,"BertModel"),Hs.forEach(o),Nt=r(Ko,` as the encoder
and decoder for a summarization model as was shown in: `),Ae=d(Ko,"A",{href:!0,rel:!0});var Ys=i(Ae);It=r(Ys,"Text Summarization with Pretrained Encoders"),Ys.forEach(o),Lt=r(Ko," by Yang Liu and Mirella Lapata."),Ko.forEach(o),Kn=h(n),V=d(n,"P",{});var Qo=i(V);Bt=r(Qo,"The "),mn=d(Qo,"CODE",{});var Js=i(mn);Ot=r(Js,"from_pretrained()"),Js.forEach(o),Vt=r(Qo,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),hn=d(Qo,"CODE",{});var Zs=i(hn);Wt=r(Zs,"from_pt=True"),Zs.forEach(o),Rt=r(Qo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Qo.forEach(o),Qn=h(n),k(Ce.$$.fragment,n),Xn=h(n),W=d(n,"P",{});var Xo=i(W);Gt=r(Xo,"This model was contributed by "),Se=d(Xo,"A",{href:!0,rel:!0});var Ks=i(Se);Ut=r(Ks,"thomwolf"),Ks.forEach(o),Ht=r(Xo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Ne=d(Xo,"A",{href:!0,rel:!0});var Qs=i(Ne);Yt=r(Qs,"ydshieh"),Qs.forEach(o),Jt=r(Xo,"."),Xo.forEach(o),et=h(n),J=d(n,"H2",{class:!0});var ct=i(J);pe=d(ct,"A",{id:!0,class:!0,href:!0});var Xs=i(pe);fn=d(Xs,"SPAN",{});var ed=i(fn);k(Ie.$$.fragment,ed),ed.forEach(o),Xs.forEach(o),Zt=h(ct),un=d(ct,"SPAN",{});var od=i(un);Kt=r(od,"EncoderDecoderConfig"),od.forEach(o),ct.forEach(o),ot=h(n),P=d(n,"DIV",{class:!0});var L=i(P);k(Le.$$.fragment,L),Qt=h(L),me=d(L,"P",{});var Gn=i(me);zo=d(Gn,"A",{href:!0});var nd=i(zo);Xt=r(nd,"EncoderDecoderConfig"),nd.forEach(o),er=r(Gn," is the configuration class to store the configuration of a "),qo=d(Gn,"A",{href:!0});var td=i(qo);or=r(td,"EncoderDecoderModel"),td.forEach(o),nr=r(Gn,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Gn.forEach(o),tr=h(L),Z=d(L,"P",{});var en=i(Z);rr=r(en,"Configuration objects inherit from "),jo=d(en,"A",{href:!0});var rd=i(jo);ar=r(rd,"PretrainedConfig"),rd.forEach(o),sr=r(en,` and can be used to control the model outputs. Read the
documentation from `),Fo=d(en,"A",{href:!0});var ad=i(Fo);dr=r(ad,"PretrainedConfig"),ad.forEach(o),ir=r(en," for more information."),en.forEach(o),cr=h(L),k(he.$$.fragment,L),lr=h(L),fe=d(L,"DIV",{class:!0});var lt=i(fe);k(Be.$$.fragment,lt),pr=h(lt),Oe=d(lt,"P",{});var pt=i(Oe);mr=r(pt,"Instantiate a "),Po=d(pt,"A",{href:!0});var sd=i(Po);hr=r(sd,"EncoderDecoderConfig"),sd.forEach(o),fr=r(pt,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),pt.forEach(o),lt.forEach(o),ur=h(L),ue=d(L,"DIV",{class:!0});var mt=i(ue);k(Ve.$$.fragment,mt),gr=h(mt),K=d(mt,"P",{});var on=i(K);_r=r(on,"Serializes this instance to a Python dictionary. Override the default "),gn=d(on,"EM",{});var dd=i(gn);br=r(dd,"to_dict()"),dd.forEach(o),vr=r(on," from "),_n=d(on,"EM",{});var id=i(_n);yr=r(id,"PretrainedConfig"),id.forEach(o),kr=r(on,"."),on.forEach(o),mt.forEach(o),L.forEach(o),nt=h(n),Q=d(n,"H2",{class:!0});var ht=i(Q);ge=d(ht,"A",{id:!0,class:!0,href:!0});var cd=i(ge);bn=d(cd,"SPAN",{});var ld=i(bn);k(We.$$.fragment,ld),ld.forEach(o),cd.forEach(o),Tr=h(ht),vn=d(ht,"SPAN",{});var pd=i(vn);wr=r(pd,"EncoderDecoderModel"),pd.forEach(o),ht.forEach(o),tt=h(n),x=d(n,"DIV",{class:!0});var q=i(x);k(Re.$$.fragment,q),Er=h(q),X=d(q,"P",{});var nn=i(X);$r=r(nn,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ao=d(nn,"A",{href:!0});var md=i(Ao);xr=r(md,"from_pretrained()"),md.forEach(o),Mr=r(nn," function and the decoder is loaded via "),Co=d(nn,"A",{href:!0});var hd=i(Co);Dr=r(hd,"from_pretrained()"),hd.forEach(o),zr=r(nn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),nn.forEach(o),qr=h(q),Ge=d(q,"P",{});var ft=i(Ge);jr=r(ft,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ue=d(ft,"A",{href:!0,rel:!0});var fd=i(Ue);Fr=r(fd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fd.forEach(o),Pr=r(ft,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),ft.forEach(o),Ar=h(q),yn=d(q,"P",{});var ud=i(yn);Cr=r(ud,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ud.forEach(o),Sr=h(q),He=d(q,"P",{});var ut=i(He);Nr=r(ut,"This model inherits from "),So=d(ut,"A",{href:!0});var gd=i(So);Ir=r(gd,"PreTrainedModel"),gd.forEach(o),Lr=r(ut,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ut.forEach(o),Br=h(q),Ye=d(q,"P",{});var gt=i(Ye);Or=r(gt,"This model is also a PyTorch "),Je=d(gt,"A",{href:!0,rel:!0});var _d=i(Je);Vr=r(_d,"torch.nn.Module"),_d.forEach(o),Wr=r(gt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gt.forEach(o),Rr=h(q),R=d(q,"P",{});var ko=i(R);No=d(ko,"A",{href:!0});var bd=i(No);Gr=r(bd,"EncoderDecoderModel"),bd.forEach(o),Ur=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),kn=d(ko,"EM",{});var vd=i(kn);Hr=r(vd,"~transformers.AutoModel.from_pretrained"),vd.forEach(o),Yr=r(ko,` class method for the encoder and
:meth`),Tn=d(ko,"EM",{});var yd=i(Tn);Jr=r(yd,"~transformers.AutoModelForCausalLM.from_pretrained"),yd.forEach(o),Zr=r(ko," class method for the decoder."),ko.forEach(o),Kr=h(q),C=d(q,"DIV",{class:!0});var De=i(C);k(Ze.$$.fragment,De),Qr=h(De),ee=d(De,"P",{});var tn=i(ee);Xr=r(tn,"The "),Io=d(tn,"A",{href:!0});var kd=i(Io);ea=r(kd,"EncoderDecoderModel"),kd.forEach(o),oa=r(tn," forward method, overrides the "),wn=d(tn,"CODE",{});var Td=i(wn);na=r(Td,"__call__"),Td.forEach(o),ta=r(tn," special method."),tn.forEach(o),ra=h(De),k(_e.$$.fragment,De),aa=h(De),k(be.$$.fragment,De),De.forEach(o),sa=h(q),S=d(q,"DIV",{class:!0});var ze=i(S);k(Ke.$$.fragment,ze),da=h(ze),En=d(ze,"P",{});var wd=i(En);ia=r(wd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),wd.forEach(o),ca=h(ze),oe=d(ze,"P",{});var rn=i(oe);la=r(rn,"The model is set in evaluation mode by default using "),$n=d(rn,"CODE",{});var Ed=i($n);pa=r(Ed,"model.eval()"),Ed.forEach(o),ma=r(rn,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),xn=d(rn,"CODE",{});var $d=i(xn);ha=r($d,"model.train()"),$d.forEach(o),fa=r(rn,"."),rn.forEach(o),ua=h(ze),k(ve.$$.fragment,ze),ze.forEach(o),q.forEach(o),rt=h(n),ne=d(n,"H2",{class:!0});var _t=i(ne);ye=d(_t,"A",{id:!0,class:!0,href:!0});var xd=i(ye);Mn=d(xd,"SPAN",{});var Md=i(Mn);k(Qe.$$.fragment,Md),Md.forEach(o),xd.forEach(o),ga=h(_t),Dn=d(_t,"SPAN",{});var Dd=i(Dn);_a=r(Dd,"TFEncoderDecoderModel"),Dd.forEach(o),_t.forEach(o),at=h(n),M=d(n,"DIV",{class:!0});var j=i(M);k(Xe.$$.fragment,j),ba=h(j),te=d(j,"P",{});var an=i(te);va=r(an,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Lo=d(an,"A",{href:!0});var zd=i(Lo);ya=r(zd,"from_pretrained()"),zd.forEach(o),ka=r(an," function and the decoder is loaded via "),Bo=d(an,"A",{href:!0});var qd=i(Bo);Ta=r(qd,"from_pretrained()"),qd.forEach(o),wa=r(an,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),an.forEach(o),Ea=h(j),eo=d(j,"P",{});var bt=i(eo);$a=r(bt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),oo=d(bt,"A",{href:!0,rel:!0});var jd=i(oo);xa=r(jd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),jd.forEach(o),Ma=r(bt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),bt.forEach(o),Da=h(j),zn=d(j,"P",{});var Fd=i(zn);za=r(Fd,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Fd.forEach(o),qa=h(j),no=d(j,"P",{});var vt=i(no);ja=r(vt,"This model inherits from "),Oo=d(vt,"A",{href:!0});var Pd=i(Oo);Fa=r(Pd,"TFPreTrainedModel"),Pd.forEach(o),Pa=r(vt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vt.forEach(o),Aa=h(j),to=d(j,"P",{});var yt=i(to);Ca=r(yt,"This model is also a "),ro=d(yt,"A",{href:!0,rel:!0});var Ad=i(ro);Sa=r(Ad,"tf.keras.Model"),Ad.forEach(o),Na=r(yt,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yt.forEach(o),Ia=h(j),G=d(j,"P",{});var To=i(G);Vo=d(To,"A",{href:!0});var Cd=i(Vo);La=r(Cd,"TFEncoderDecoderModel"),Cd.forEach(o),Ba=r(To,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Wo=d(To,"A",{href:!0});var Sd=i(Wo);Oa=r(Sd,"from_pretrained()"),Sd.forEach(o),Va=r(To," class method for the encoder and "),Ro=d(To,"A",{href:!0});var Nd=i(Ro);Wa=r(Nd,"from_pretrained()"),Nd.forEach(o),Ra=r(To,` class
method for the decoder.`),To.forEach(o),Ga=h(j),N=d(j,"DIV",{class:!0});var qe=i(N);k(ao.$$.fragment,qe),Ua=h(qe),re=d(qe,"P",{});var sn=i(re);Ha=r(sn,"The "),Go=d(sn,"A",{href:!0});var Id=i(Go);Ya=r(Id,"TFEncoderDecoderModel"),Id.forEach(o),Ja=r(sn," forward method, overrides the "),qn=d(sn,"CODE",{});var Ld=i(qn);Za=r(Ld,"__call__"),Ld.forEach(o),Ka=r(sn," special method."),sn.forEach(o),Qa=h(qe),k(ke.$$.fragment,qe),Xa=h(qe),k(Te.$$.fragment,qe),qe.forEach(o),es=h(j),U=d(j,"DIV",{class:!0});var dn=i(U);k(so.$$.fragment,dn),os=h(dn),jn=d(dn,"P",{});var Bd=i(jn);ns=r(Bd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Bd.forEach(o),ts=h(dn),k(we.$$.fragment,dn),dn.forEach(o),j.forEach(o),st=h(n),ae=d(n,"H2",{class:!0});var kt=i(ae);Ee=d(kt,"A",{id:!0,class:!0,href:!0});var Od=i(Ee);Fn=d(Od,"SPAN",{});var Vd=i(Fn);k(io.$$.fragment,Vd),Vd.forEach(o),Od.forEach(o),rs=h(kt),Pn=d(kt,"SPAN",{});var Wd=i(Pn);as=r(Wd,"FlaxEncoderDecoderModel"),Wd.forEach(o),kt.forEach(o),dt=h(n),D=d(n,"DIV",{class:!0});var F=i(D);k(co.$$.fragment,F),ss=h(F),se=d(F,"P",{});var cn=i(se);ds=r(cn,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Uo=d(cn,"A",{href:!0});var Rd=i(Uo);is=r(Rd,"from_pretrained()"),Rd.forEach(o),cs=r(cn," function and the decoder is loaded via "),Ho=d(cn,"A",{href:!0});var Gd=i(Ho);ls=r(Gd,"from_pretrained()"),Gd.forEach(o),ps=r(cn,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),cn.forEach(o),ms=h(F),lo=d(F,"P",{});var Tt=i(lo);hs=r(Tt,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=d(Tt,"A",{href:!0,rel:!0});var Ud=i(po);fs=r(Ud,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ud.forEach(o),us=r(Tt,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Tt.forEach(o),gs=h(F),An=d(F,"P",{});var Hd=i(An);_s=r(Hd,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Hd.forEach(o),bs=h(F),mo=d(F,"P",{});var wt=i(mo);vs=r(wt,"This model inherits from "),Yo=d(wt,"A",{href:!0});var Yd=i(Yo);ys=r(Yd,"FlaxPreTrainedModel"),Yd.forEach(o),ks=r(wt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wt.forEach(o),Ts=h(F),ho=d(F,"P",{});var Et=i(ho);ws=r(Et,`This model is also a Flax Linen
`),fo=d(Et,"A",{href:!0,rel:!0});var Jd=i(fo);Es=r(Jd,"flax.nn.Module"),Jd.forEach(o),$s=r(Et,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Et.forEach(o),xs=h(F),H=d(F,"P",{});var wo=i(H);Jo=d(wo,"A",{href:!0});var Zd=i(Jo);Ms=r(Zd,"FlaxEncoderDecoderModel"),Zd.forEach(o),Ds=r(wo,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),Cn=d(wo,"EM",{});var Kd=i(Cn);zs=r(Kd,"~transformers.FlaxAutoModel.from_pretrained"),Kd.forEach(o),qs=r(wo,` class method for the
encoder and :meth`),Sn=d(wo,"EM",{});var Qd=i(Sn);js=r(Qd,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Qd.forEach(o),Fs=r(wo," class method for the decoder."),wo.forEach(o),Ps=h(F),I=d(F,"DIV",{class:!0});var je=i(I);k(uo.$$.fragment,je),As=h(je),de=d(je,"P",{});var ln=i(de);Cs=r(ln,"The "),Zo=d(ln,"A",{href:!0});var Xd=i(Zo);Ss=r(Xd,"FlaxEncoderDecoderModel"),Xd.forEach(o),Ns=r(ln," forward method, overrides the "),Nn=d(ln,"CODE",{});var ei=i(Nn);Is=r(ei,"__call__"),ei.forEach(o),Ls=r(ln," special method."),ln.forEach(o),Bs=h(je),k($e.$$.fragment,je),Os=h(je),k(xe.$$.fragment,je),je.forEach(o),Vs=h(F),Y=d(F,"DIV",{class:!0});var pn=i(Y);k(go.$$.fragment,pn),Ws=h(pn),In=d(pn,"P",{});var oi=i(In);Rs=r(oi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),oi.forEach(o),Gs=h(pn),k(Me.$$.fragment,pn),pn.forEach(o),F.forEach(o),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(bi)),l(p,"id","encoder-decoder-models"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#encoder-decoder-models"),l(u,"class","relative group"),l(xo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Pe,"href","https://arxiv.org/abs/1907.12461"),l(Pe,"rel","nofollow"),l(Mo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),l(Ae,"href","https://arxiv.org/abs/1908.08345"),l(Ae,"rel","nofollow"),l(Se,"href","https://github.com/thomwolf"),l(Se,"rel","nofollow"),l(Ne,"href","https://github.com/ydshieh"),l(Ne,"rel","nofollow"),l(pe,"id","transformers.EncoderDecoderConfig"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.EncoderDecoderConfig"),l(J,"class","relative group"),l(zo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(qo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(jo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Fo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(Po,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ge,"id","transformers.EncoderDecoderModel"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.EncoderDecoderModel"),l(Q,"class","relative group"),l(Ao,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Co,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ue,"href","https://arxiv.org/abs/1907.12461"),l(Ue,"rel","nofollow"),l(So,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(No,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Io,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ye,"id","transformers.TFEncoderDecoderModel"),l(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ye,"href","#transformers.TFEncoderDecoderModel"),l(ne,"class","relative group"),l(Lo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Bo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(oo,"href","https://arxiv.org/abs/1907.12461"),l(oo,"rel","nofollow"),l(Oo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(ro,"rel","nofollow"),l(Vo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(Wo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ro,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Go,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ee,"id","transformers.FlaxEncoderDecoderModel"),l(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ee,"href","#transformers.FlaxEncoderDecoderModel"),l(ae,"class","relative group"),l(Uo,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ho,"href","/docs/transformers/main/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(Yo,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(Jo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(Zo,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){e(document.head,c),b(n,v,g),b(n,u,g),e(u,p),e(p,_),T(a,_,null),e(u,f),e(u,A),e(A,$t),b(n,Hn,g),b(n,ie,g),e(ie,xt),e(ie,xo),e(xo,Mt),e(ie,Dt),b(n,Yn,g),b(n,ce,g),e(ce,zt),e(ce,Pe),e(Pe,qt),e(ce,jt),b(n,Jn,g),b(n,le,g),e(le,Ft),e(le,Mo),e(Mo,Pt),e(le,At),b(n,Zn,g),b(n,O,g),e(O,Ct),e(O,Do),e(Do,St),e(O,Nt),e(O,Ae),e(Ae,It),e(O,Lt),b(n,Kn,g),b(n,V,g),e(V,Bt),e(V,mn),e(mn,Ot),e(V,Vt),e(V,hn),e(hn,Wt),e(V,Rt),b(n,Qn,g),T(Ce,n,g),b(n,Xn,g),b(n,W,g),e(W,Gt),e(W,Se),e(Se,Ut),e(W,Ht),e(W,Ne),e(Ne,Yt),e(W,Jt),b(n,et,g),b(n,J,g),e(J,pe),e(pe,fn),T(Ie,fn,null),e(J,Zt),e(J,un),e(un,Kt),b(n,ot,g),b(n,P,g),T(Le,P,null),e(P,Qt),e(P,me),e(me,zo),e(zo,Xt),e(me,er),e(me,qo),e(qo,or),e(me,nr),e(P,tr),e(P,Z),e(Z,rr),e(Z,jo),e(jo,ar),e(Z,sr),e(Z,Fo),e(Fo,dr),e(Z,ir),e(P,cr),T(he,P,null),e(P,lr),e(P,fe),T(Be,fe,null),e(fe,pr),e(fe,Oe),e(Oe,mr),e(Oe,Po),e(Po,hr),e(Oe,fr),e(P,ur),e(P,ue),T(Ve,ue,null),e(ue,gr),e(ue,K),e(K,_r),e(K,gn),e(gn,br),e(K,vr),e(K,_n),e(_n,yr),e(K,kr),b(n,nt,g),b(n,Q,g),e(Q,ge),e(ge,bn),T(We,bn,null),e(Q,Tr),e(Q,vn),e(vn,wr),b(n,tt,g),b(n,x,g),T(Re,x,null),e(x,Er),e(x,X),e(X,$r),e(X,Ao),e(Ao,xr),e(X,Mr),e(X,Co),e(Co,Dr),e(X,zr),e(x,qr),e(x,Ge),e(Ge,jr),e(Ge,Ue),e(Ue,Fr),e(Ge,Pr),e(x,Ar),e(x,yn),e(yn,Cr),e(x,Sr),e(x,He),e(He,Nr),e(He,So),e(So,Ir),e(He,Lr),e(x,Br),e(x,Ye),e(Ye,Or),e(Ye,Je),e(Je,Vr),e(Ye,Wr),e(x,Rr),e(x,R),e(R,No),e(No,Gr),e(R,Ur),e(R,kn),e(kn,Hr),e(R,Yr),e(R,Tn),e(Tn,Jr),e(R,Zr),e(x,Kr),e(x,C),T(Ze,C,null),e(C,Qr),e(C,ee),e(ee,Xr),e(ee,Io),e(Io,ea),e(ee,oa),e(ee,wn),e(wn,na),e(ee,ta),e(C,ra),T(_e,C,null),e(C,aa),T(be,C,null),e(x,sa),e(x,S),T(Ke,S,null),e(S,da),e(S,En),e(En,ia),e(S,ca),e(S,oe),e(oe,la),e(oe,$n),e($n,pa),e(oe,ma),e(oe,xn),e(xn,ha),e(oe,fa),e(S,ua),T(ve,S,null),b(n,rt,g),b(n,ne,g),e(ne,ye),e(ye,Mn),T(Qe,Mn,null),e(ne,ga),e(ne,Dn),e(Dn,_a),b(n,at,g),b(n,M,g),T(Xe,M,null),e(M,ba),e(M,te),e(te,va),e(te,Lo),e(Lo,ya),e(te,ka),e(te,Bo),e(Bo,Ta),e(te,wa),e(M,Ea),e(M,eo),e(eo,$a),e(eo,oo),e(oo,xa),e(eo,Ma),e(M,Da),e(M,zn),e(zn,za),e(M,qa),e(M,no),e(no,ja),e(no,Oo),e(Oo,Fa),e(no,Pa),e(M,Aa),e(M,to),e(to,Ca),e(to,ro),e(ro,Sa),e(to,Na),e(M,Ia),e(M,G),e(G,Vo),e(Vo,La),e(G,Ba),e(G,Wo),e(Wo,Oa),e(G,Va),e(G,Ro),e(Ro,Wa),e(G,Ra),e(M,Ga),e(M,N),T(ao,N,null),e(N,Ua),e(N,re),e(re,Ha),e(re,Go),e(Go,Ya),e(re,Ja),e(re,qn),e(qn,Za),e(re,Ka),e(N,Qa),T(ke,N,null),e(N,Xa),T(Te,N,null),e(M,es),e(M,U),T(so,U,null),e(U,os),e(U,jn),e(jn,ns),e(U,ts),T(we,U,null),b(n,st,g),b(n,ae,g),e(ae,Ee),e(Ee,Fn),T(io,Fn,null),e(ae,rs),e(ae,Pn),e(Pn,as),b(n,dt,g),b(n,D,g),T(co,D,null),e(D,ss),e(D,se),e(se,ds),e(se,Uo),e(Uo,is),e(se,cs),e(se,Ho),e(Ho,ls),e(se,ps),e(D,ms),e(D,lo),e(lo,hs),e(lo,po),e(po,fs),e(lo,us),e(D,gs),e(D,An),e(An,_s),e(D,bs),e(D,mo),e(mo,vs),e(mo,Yo),e(Yo,ys),e(mo,ks),e(D,Ts),e(D,ho),e(ho,ws),e(ho,fo),e(fo,Es),e(ho,$s),e(D,xs),e(D,H),e(H,Jo),e(Jo,Ms),e(H,Ds),e(H,Cn),e(Cn,zs),e(H,qs),e(H,Sn),e(Sn,js),e(H,Fs),e(D,Ps),e(D,I),T(uo,I,null),e(I,As),e(I,de),e(de,Cs),e(de,Zo),e(Zo,Ss),e(de,Ns),e(de,Nn),e(Nn,Is),e(de,Ls),e(I,Bs),T($e,I,null),e(I,Os),T(xe,I,null),e(D,Vs),e(D,Y),T(go,Y,null),e(Y,Ws),e(Y,In),e(In,Rs),e(Y,Gs),T(Me,Y,null),it=!0},p(n,[g]){const _o={};g&2&&(_o.$$scope={dirty:g,ctx:n}),he.$set(_o);const Ln={};g&2&&(Ln.$$scope={dirty:g,ctx:n}),_e.$set(Ln);const Bn={};g&2&&(Bn.$$scope={dirty:g,ctx:n}),be.$set(Bn);const On={};g&2&&(On.$$scope={dirty:g,ctx:n}),ve.$set(On);const bo={};g&2&&(bo.$$scope={dirty:g,ctx:n}),ke.$set(bo);const Vn={};g&2&&(Vn.$$scope={dirty:g,ctx:n}),Te.$set(Vn);const vo={};g&2&&(vo.$$scope={dirty:g,ctx:n}),we.$set(vo);const Wn={};g&2&&(Wn.$$scope={dirty:g,ctx:n}),$e.$set(Wn);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:n}),xe.$set(yo);const Rn={};g&2&&(Rn.$$scope={dirty:g,ctx:n}),Me.$set(Rn)},i(n){it||(w(a.$$.fragment,n),w(Ce.$$.fragment,n),w(Ie.$$.fragment,n),w(Le.$$.fragment,n),w(he.$$.fragment,n),w(Be.$$.fragment,n),w(Ve.$$.fragment,n),w(We.$$.fragment,n),w(Re.$$.fragment,n),w(Ze.$$.fragment,n),w(_e.$$.fragment,n),w(be.$$.fragment,n),w(Ke.$$.fragment,n),w(ve.$$.fragment,n),w(Qe.$$.fragment,n),w(Xe.$$.fragment,n),w(ao.$$.fragment,n),w(ke.$$.fragment,n),w(Te.$$.fragment,n),w(so.$$.fragment,n),w(we.$$.fragment,n),w(io.$$.fragment,n),w(co.$$.fragment,n),w(uo.$$.fragment,n),w($e.$$.fragment,n),w(xe.$$.fragment,n),w(go.$$.fragment,n),w(Me.$$.fragment,n),it=!0)},o(n){E(a.$$.fragment,n),E(Ce.$$.fragment,n),E(Ie.$$.fragment,n),E(Le.$$.fragment,n),E(he.$$.fragment,n),E(Be.$$.fragment,n),E(Ve.$$.fragment,n),E(We.$$.fragment,n),E(Re.$$.fragment,n),E(Ze.$$.fragment,n),E(_e.$$.fragment,n),E(be.$$.fragment,n),E(Ke.$$.fragment,n),E(ve.$$.fragment,n),E(Qe.$$.fragment,n),E(Xe.$$.fragment,n),E(ao.$$.fragment,n),E(ke.$$.fragment,n),E(Te.$$.fragment,n),E(so.$$.fragment,n),E(we.$$.fragment,n),E(io.$$.fragment,n),E(co.$$.fragment,n),E(uo.$$.fragment,n),E($e.$$.fragment,n),E(xe.$$.fragment,n),E(go.$$.fragment,n),E(Me.$$.fragment,n),it=!1},d(n){o(c),n&&o(v),n&&o(u),$(a),n&&o(Hn),n&&o(ie),n&&o(Yn),n&&o(ce),n&&o(Jn),n&&o(le),n&&o(Zn),n&&o(O),n&&o(Kn),n&&o(V),n&&o(Qn),$(Ce,n),n&&o(Xn),n&&o(W),n&&o(et),n&&o(J),$(Ie),n&&o(ot),n&&o(P),$(Le),$(he),$(Be),$(Ve),n&&o(nt),n&&o(Q),$(We),n&&o(tt),n&&o(x),$(Re),$(Ze),$(_e),$(be),$(Ke),$(ve),n&&o(rt),n&&o(ne),$(Qe),n&&o(at),n&&o(M),$(Xe),$(ao),$(ke),$(Te),$(so),$(we),n&&o(st),n&&o(ae),$(io),n&&o(dt),n&&o(D),$(co),$(uo),$($e),$(xe),$(go),$(Me)}}}const bi={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function vi(z){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xi extends ni{constructor(c){super();ti(this,c,vi,_i,ri,{})}}export{xi as default,bi as metadata};
