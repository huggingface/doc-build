import{S as ti,i as ni,s as ri,e as s,k as m,w as y,t as n,M as ai,c as d,d as o,m as h,a as i,x as k,h as r,b as l,G as e,g as b,y as T,q as w,o as E,B as $,v as si,L as $o}from"../../chunks/vendor-hf-doc-builder.js";import{T as Us}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Gt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Eo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function di(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import BertConfig, EncoderDecoderConfig, EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){c=s("p"),v=n("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function ii(z){let c,v,u,p,_;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=n("Module"),_=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids)`}}),{c(){c=s("p"),v=n("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function li(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import EncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = EncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2bert&quot;</span>)`}}),{c(){c=s("p"),v=n("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function pi(z){let c,v,u,p,_;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=n("Module"),_=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(input_ids, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){c=s("p"),v=n("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function hi(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import TFEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){c=s("p"),v=n("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function fi(z){let c,v,u,p,_;return{c(){c=s("p"),v=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=n("Module"),_=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> summary == <span class="hljs-string">&quot;SAS Alpha Epsilon suspended Sigma Alpha Epsilon members&quot;</span>`}}),{c(){c=s("p"),v=n("Examples:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Examples:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function gi(z){let c,v,u,p,_;return p=new Fe({props:{code:`from transformers import FlaxEncoderDecoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./bert2gpt2&quot;</span>)`}}),{c(){c=s("p"),v=n("Example:"),u=m(),y(p.$$.fragment)},l(a){c=d(a,"P",{});var f=i(c);v=r(f,"Example:"),f.forEach(o),u=h(a),k(p.$$.fragment,a)},m(a,f){b(a,c,f),e(c,v),b(a,u,f),T(p,a,f),_=!0},p:$o,i(a){_||(w(p.$$.fragment,a),_=!0)},o(a){E(p.$$.fragment,a),_=!1},d(a){a&&o(c),a&&o(u),$(p,a)}}}function _i(z){let c,v,u,p,_,a,f,A,$n,Ut,ie,xn,xo,Mn,Dn,Ht,ce,zn,Pe,qn,jn,Yt,le,Fn,Mo,Pn,An,Jt,B,Cn,Do,Sn,Nn,Ae,In,Ln,Zt,V,On,pt,Bn,Vn,mt,Wn,Rn,Kt,Ce,Qt,W,Gn,Se,Un,Hn,Ne,Yn,Jn,Xt,J,pe,ht,Ie,Zn,ft,Kn,en,P,Le,Qn,me,zo,Xn,er,qo,or,tr,nr,Z,rr,jo,ar,sr,Fo,dr,ir,cr,he,lr,fe,Oe,pr,Be,mr,Po,hr,fr,ur,ue,Ve,gr,K,_r,ut,br,vr,gt,yr,kr,on,Q,ge,_t,We,Tr,bt,wr,tn,x,Re,Er,X,$r,Ao,xr,Mr,Co,Dr,zr,qr,Ge,jr,Ue,Fr,Pr,Ar,vt,Cr,Sr,He,Nr,So,Ir,Lr,Or,Ye,Br,Je,Vr,Wr,Rr,R,No,Gr,Ur,yt,Hr,Yr,kt,Jr,Zr,Kr,C,Ze,Qr,ee,Xr,Io,ea,oa,Tt,ta,na,ra,_e,aa,be,sa,S,Ke,da,wt,ia,ca,oe,la,Et,pa,ma,$t,ha,fa,ua,ve,nn,te,ye,xt,Qe,ga,Mt,_a,rn,M,Xe,ba,ne,va,Lo,ya,ka,Oo,Ta,wa,Ea,eo,$a,oo,xa,Ma,Da,Dt,za,qa,to,ja,Bo,Fa,Pa,Aa,no,Ca,ro,Sa,Na,Ia,G,Vo,La,Oa,Wo,Ba,Va,Ro,Wa,Ra,Ga,N,ao,Ua,re,Ha,Go,Ya,Ja,zt,Za,Ka,Qa,ke,Xa,Te,es,U,so,os,qt,ts,ns,we,an,ae,Ee,jt,io,rs,Ft,as,sn,D,co,ss,se,ds,Uo,is,cs,Ho,ls,ps,ms,lo,hs,po,fs,us,gs,Pt,_s,bs,mo,vs,Yo,ys,ks,Ts,ho,ws,fo,Es,$s,xs,H,Jo,Ms,Ds,At,zs,qs,Ct,js,Fs,Ps,I,uo,As,de,Cs,Zo,Ss,Ns,St,Is,Ls,Os,$e,Bs,xe,Vs,Y,go,Ws,Nt,Rs,Gs,Me,dn;return a=new Gt({}),Ce=new Fe({props:{code:`# a workaround to load from pytorch checkpoint
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
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config = _model.config`}}),Ie=new Gt({}),Le=new O({props:{name:"class transformers.EncoderDecoderConfig",anchor:"transformers.EncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L26"}}),he=new Eo({props:{anchor:"transformers.EncoderDecoderConfig.example",$$slots:{default:[di]},$$scope:{ctx:z}}}),Oe=new O({props:{name:"from_encoder_decoder_configs",anchor:"transformers.EncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L91",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),Ve=new O({props:{name:"to_dict",anchor:"transformers.EncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/configuration_encoder_decoder.py#L108",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),We=new Gt({}),Re=new O({props:{name:"class transformers.EncoderDecoderModel",anchor:"transformers.EncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L165"}}),Ze=new O({props:{name:"forward",anchor:"transformers.EncoderDecoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.EncoderDecoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.EncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L430",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_e=new Us({props:{$$slots:{default:[ii]},$$scope:{ctx:z}}}),be=new Eo({props:{anchor:"transformers.EncoderDecoderModel.forward.example",$$slots:{default:[ci]},$$scope:{ctx:z}}}),Ke=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_encoder_decoder.py#L280"}}),ve=new Eo({props:{anchor:"transformers.EncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[li]},$$scope:{ctx:z}}}),Qe=new Gt({}),Xe=new O({props:{name:"class transformers.TFEncoderDecoderModel",anchor:"transformers.TFEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L186"}}),ao=new O({props:{name:"call",anchor:"transformers.TFEncoderDecoderModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFEncoderDecoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
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
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L495",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ke=new Us({props:{$$slots:{default:[pi]},$$scope:{ctx:z}}}),Te=new Eo({props:{anchor:"transformers.TFEncoderDecoderModel.call.example",$$slots:{default:[mi]},$$scope:{ctx:z}}}),so=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
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
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_tf_encoder_decoder.py#L332"}}),we=new Eo({props:{anchor:"transformers.TFEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[hi]},$$scope:{ctx:z}}}),io=new Gt({}),co=new O({props:{name:"class transformers.FlaxEncoderDecoderModel",anchor:"transformers.FlaxEncoderDecoderModel",parameters:[{name:"config",val:": EncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L302"}}),uo=new O({props:{name:"__call__",anchor:"transformers.FlaxEncoderDecoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L628",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
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
  href="/docs/transformers/v4.20.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$e=new Us({props:{$$slots:{default:[fi]},$$scope:{ctx:z}}}),xe=new Eo({props:{anchor:"transformers.FlaxEncoderDecoderModel.__call__.example",$$slots:{default:[ui]},$$scope:{ctx:z}}}),go=new O({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.0/src/transformers/models/encoder_decoder/modeling_flax_encoder_decoder.py#L760"}}),Me=new Eo({props:{anchor:"transformers.FlaxEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[gi]},$$scope:{ctx:z}}}),{c(){c=s("meta"),v=m(),u=s("h1"),p=s("a"),_=s("span"),y(a.$$.fragment),f=m(),A=s("span"),$n=n("Encoder Decoder Models"),Ut=m(),ie=s("p"),xn=n("The "),xo=s("a"),Mn=n("EncoderDecoderModel"),Dn=n(` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),Ht=m(),ce=s("p"),zn=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Pe=s("a"),qn=n("Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),jn=n(` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),Yt=m(),le=s("p"),Fn=n("After such an "),Mo=s("a"),Pn=n("EncoderDecoderModel"),An=n(` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),Jt=m(),B=s("p"),Cn=n("An application of this architecture could be to leverage two pretrained "),Do=s("a"),Sn=n("BertModel"),Nn=n(` as the encoder
and decoder for a summarization model as was shown in: `),Ae=s("a"),In=n("Text Summarization with Pretrained Encoders"),Ln=n(" by Yang Liu and Mirella Lapata."),Zt=m(),V=s("p"),On=n("The "),pt=s("code"),Bn=n("from_pretrained()"),Vn=n(` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),mt=s("code"),Wn=n("from_pt=True"),Rn=n(` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Kt=m(),y(Ce.$$.fragment),Qt=m(),W=s("p"),Gn=n("This model was contributed by "),Se=s("a"),Un=n("thomwolf"),Hn=n(`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Ne=s("a"),Yn=n("ydshieh"),Jn=n("."),Xt=m(),J=s("h2"),pe=s("a"),ht=s("span"),y(Ie.$$.fragment),Zn=m(),ft=s("span"),Kn=n("EncoderDecoderConfig"),en=m(),P=s("div"),y(Le.$$.fragment),Qn=m(),me=s("p"),zo=s("a"),Xn=n("EncoderDecoderConfig"),er=n(" is the configuration class to store the configuration of a "),qo=s("a"),or=n("EncoderDecoderModel"),tr=n(`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),nr=m(),Z=s("p"),rr=n("Configuration objects inherit from "),jo=s("a"),ar=n("PretrainedConfig"),sr=n(` and can be used to control the model outputs. Read the
documentation from `),Fo=s("a"),dr=n("PretrainedConfig"),ir=n(" for more information."),cr=m(),y(he.$$.fragment),lr=m(),fe=s("div"),y(Oe.$$.fragment),pr=m(),Be=s("p"),mr=n("Instantiate a "),Po=s("a"),hr=n("EncoderDecoderConfig"),fr=n(` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),ur=m(),ue=s("div"),y(Ve.$$.fragment),gr=m(),K=s("p"),_r=n("Serializes this instance to a Python dictionary. Override the default "),ut=s("em"),br=n("to_dict()"),vr=n(" from "),gt=s("em"),yr=n("PretrainedConfig"),kr=n("."),on=m(),Q=s("h2"),ge=s("a"),_t=s("span"),y(We.$$.fragment),Tr=m(),bt=s("span"),wr=n("EncoderDecoderModel"),tn=m(),x=s("div"),y(Re.$$.fragment),Er=m(),X=s("p"),$r=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ao=s("a"),xr=n("from_pretrained()"),Mr=n(" function and the decoder is loaded via "),Co=s("a"),Dr=n("from_pretrained()"),zr=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),qr=m(),Ge=s("p"),jr=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ue=s("a"),Fr=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Pr=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ar=m(),vt=s("p"),Cr=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Sr=m(),He=s("p"),Nr=n("This model inherits from "),So=s("a"),Ir=n("PreTrainedModel"),Lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or=m(),Ye=s("p"),Br=n("This model is also a PyTorch "),Je=s("a"),Vr=n("torch.nn.Module"),Wr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr=m(),R=s("p"),No=s("a"),Gr=n("EncoderDecoderModel"),Ur=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),yt=s("em"),Hr=n("~transformers.AutoModel.from_pretrained"),Yr=n(` class method for the encoder and
:meth`),kt=s("em"),Jr=n("~transformers.AutoModelForCausalLM.from_pretrained"),Zr=n(" class method for the decoder."),Kr=m(),C=s("div"),y(Ze.$$.fragment),Qr=m(),ee=s("p"),Xr=n("The "),Io=s("a"),ea=n("EncoderDecoderModel"),oa=n(" forward method, overrides the "),Tt=s("code"),ta=n("__call__"),na=n(" special method."),ra=m(),y(_e.$$.fragment),aa=m(),y(be.$$.fragment),sa=m(),S=s("div"),y(Ke.$$.fragment),da=m(),wt=s("p"),ia=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ca=m(),oe=s("p"),la=n("The model is set in evaluation mode by default using "),Et=s("code"),pa=n("model.eval()"),ma=n(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),$t=s("code"),ha=n("model.train()"),fa=n("."),ua=m(),y(ve.$$.fragment),nn=m(),te=s("h2"),ye=s("a"),xt=s("span"),y(Qe.$$.fragment),ga=m(),Mt=s("span"),_a=n("TFEncoderDecoderModel"),rn=m(),M=s("div"),y(Xe.$$.fragment),ba=m(),ne=s("p"),va=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Lo=s("a"),ya=n("from_pretrained()"),ka=n(" function and the decoder is loaded via "),Oo=s("a"),Ta=n("from_pretrained()"),wa=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),Ea=m(),eo=s("p"),$a=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),oo=s("a"),xa=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ma=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Da=m(),Dt=s("p"),za=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),qa=m(),to=s("p"),ja=n("This model inherits from "),Bo=s("a"),Fa=n("TFPreTrainedModel"),Pa=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Aa=m(),no=s("p"),Ca=n("This model is also a "),ro=s("a"),Sa=n("tf.keras.Model"),Na=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ia=m(),G=s("p"),Vo=s("a"),La=n("TFEncoderDecoderModel"),Oa=n(` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Wo=s("a"),Ba=n("from_pretrained()"),Va=n(" class method for the encoder and "),Ro=s("a"),Wa=n("from_pretrained()"),Ra=n(` class
method for the decoder.`),Ga=m(),N=s("div"),y(ao.$$.fragment),Ua=m(),re=s("p"),Ha=n("The "),Go=s("a"),Ya=n("TFEncoderDecoderModel"),Ja=n(" forward method, overrides the "),zt=s("code"),Za=n("__call__"),Ka=n(" special method."),Qa=m(),y(ke.$$.fragment),Xa=m(),y(Te.$$.fragment),es=m(),U=s("div"),y(so.$$.fragment),os=m(),qt=s("p"),ts=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ns=m(),y(we.$$.fragment),an=m(),ae=s("h2"),Ee=s("a"),jt=s("span"),y(io.$$.fragment),rs=m(),Ft=s("span"),as=n("FlaxEncoderDecoderModel"),sn=m(),D=s("div"),y(co.$$.fragment),ss=m(),se=s("p"),ds=n(`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Uo=s("a"),is=n("from_pretrained()"),cs=n(" function and the decoder is loaded via "),Ho=s("a"),ls=n("from_pretrained()"),ps=n(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),ms=m(),lo=s("p"),hs=n(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=s("a"),fs=n(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),us=n(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gs=m(),Pt=s("p"),_s=n(`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),bs=m(),mo=s("p"),vs=n("This model inherits from "),Yo=s("a"),ys=n("FlaxPreTrainedModel"),ks=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ts=m(),ho=s("p"),ws=n(`This model is also a Flax Linen
`),fo=s("a"),Es=n("flax.nn.Module"),$s=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xs=m(),H=s("p"),Jo=s("a"),Ms=n("FlaxEncoderDecoderModel"),Ds=n(` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),At=s("em"),zs=n("~transformers.FlaxAutoModel.from_pretrained"),qs=n(` class method for the
encoder and :meth`),Ct=s("em"),js=n("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Fs=n(" class method for the decoder."),Ps=m(),I=s("div"),y(uo.$$.fragment),As=m(),de=s("p"),Cs=n("The "),Zo=s("a"),Ss=n("FlaxEncoderDecoderModel"),Ns=n(" forward method, overrides the "),St=s("code"),Is=n("__call__"),Ls=n(" special method."),Os=m(),y($e.$$.fragment),Bs=m(),y(xe.$$.fragment),Vs=m(),Y=s("div"),y(go.$$.fragment),Ws=m(),Nt=s("p"),Rs=n(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Gs=m(),y(Me.$$.fragment),this.h()},l(t){const g=ai('[data-svelte="svelte-1phssyn"]',document.head);c=d(g,"META",{name:!0,content:!0}),g.forEach(o),v=h(t),u=d(t,"H1",{class:!0});var _o=i(u);p=d(_o,"A",{id:!0,class:!0,href:!0});var It=i(p);_=d(It,"SPAN",{});var Lt=i(_);k(a.$$.fragment,Lt),Lt.forEach(o),It.forEach(o),f=h(_o),A=d(_o,"SPAN",{});var Ot=i(A);$n=r(Ot,"Encoder Decoder Models"),Ot.forEach(o),_o.forEach(o),Ut=h(t),ie=d(t,"P",{});var bo=i(ie);xn=r(bo,"The "),xo=d(bo,"A",{href:!0});var Bt=i(xo);Mn=r(Bt,"EncoderDecoderModel"),Bt.forEach(o),Dn=r(bo,` can be used to initialize a sequence-to-sequence model with any
pretrained autoencoding model as the encoder and any pretrained autoregressive model as the decoder.`),bo.forEach(o),Ht=h(t),ce=d(t,"P",{});var vo=i(ce);zn=r(vo,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation tasks
was shown in `),Pe=d(vo,"A",{href:!0,rel:!0});var Vt=i(Pe);qn=r(Vt,"Leveraging Pre-trained Checkpoints for Sequence Generation Tasks"),Vt.forEach(o),jn=r(vo,` by
Sascha Rothe, Shashi Narayan, Aliaksei Severyn.`),vo.forEach(o),Yt=h(t),le=d(t,"P",{});var yo=i(le);Fn=r(yo,"After such an "),Mo=d(yo,"A",{href:!0});var Wt=i(Mo);Pn=r(Wt,"EncoderDecoderModel"),Wt.forEach(o),An=r(yo,` has been trained/fine-tuned, it can be saved/loaded just like
any other models (see the examples for more information).`),yo.forEach(o),Jt=h(t),B=d(t,"P",{});var Ko=i(B);Cn=r(Ko,"An application of this architecture could be to leverage two pretrained "),Do=d(Ko,"A",{href:!0});var Hs=i(Do);Sn=r(Hs,"BertModel"),Hs.forEach(o),Nn=r(Ko,` as the encoder
and decoder for a summarization model as was shown in: `),Ae=d(Ko,"A",{href:!0,rel:!0});var Ys=i(Ae);In=r(Ys,"Text Summarization with Pretrained Encoders"),Ys.forEach(o),Ln=r(Ko," by Yang Liu and Mirella Lapata."),Ko.forEach(o),Zt=h(t),V=d(t,"P",{});var Qo=i(V);On=r(Qo,"The "),pt=d(Qo,"CODE",{});var Js=i(pt);Bn=r(Js,"from_pretrained()"),Js.forEach(o),Vn=r(Qo,` currently doesn\u2019t support initializing the model from a
pytorch checkpoint. Passing `),mt=d(Qo,"CODE",{});var Zs=i(mt);Wn=r(Zs,"from_pt=True"),Zs.forEach(o),Rn=r(Qo,` to this method will throw an exception. If there are only pytorch
checkpoints for a particular encoder-decoder model, a workaround is:`),Qo.forEach(o),Kt=h(t),k(Ce.$$.fragment,t),Qt=h(t),W=d(t,"P",{});var Xo=i(W);Gn=r(Xo,"This model was contributed by "),Se=d(Xo,"A",{href:!0,rel:!0});var Ks=i(Se);Un=r(Ks,"thomwolf"),Ks.forEach(o),Hn=r(Xo,`. This model\u2019s TensorFlow and Flax versions
were contributed by `),Ne=d(Xo,"A",{href:!0,rel:!0});var Qs=i(Ne);Yn=r(Qs,"ydshieh"),Qs.forEach(o),Jn=r(Xo,"."),Xo.forEach(o),Xt=h(t),J=d(t,"H2",{class:!0});var cn=i(J);pe=d(cn,"A",{id:!0,class:!0,href:!0});var Xs=i(pe);ht=d(Xs,"SPAN",{});var ed=i(ht);k(Ie.$$.fragment,ed),ed.forEach(o),Xs.forEach(o),Zn=h(cn),ft=d(cn,"SPAN",{});var od=i(ft);Kn=r(od,"EncoderDecoderConfig"),od.forEach(o),cn.forEach(o),en=h(t),P=d(t,"DIV",{class:!0});var L=i(P);k(Le.$$.fragment,L),Qn=h(L),me=d(L,"P",{});var Rt=i(me);zo=d(Rt,"A",{href:!0});var td=i(zo);Xn=r(td,"EncoderDecoderConfig"),td.forEach(o),er=r(Rt," is the configuration class to store the configuration of a "),qo=d(Rt,"A",{href:!0});var nd=i(qo);or=r(nd,"EncoderDecoderModel"),nd.forEach(o),tr=r(Rt,`. It is
used to instantiate an Encoder Decoder model according to the specified arguments, defining the encoder and decoder
configs.`),Rt.forEach(o),nr=h(L),Z=d(L,"P",{});var et=i(Z);rr=r(et,"Configuration objects inherit from "),jo=d(et,"A",{href:!0});var rd=i(jo);ar=r(rd,"PretrainedConfig"),rd.forEach(o),sr=r(et,` and can be used to control the model outputs. Read the
documentation from `),Fo=d(et,"A",{href:!0});var ad=i(Fo);dr=r(ad,"PretrainedConfig"),ad.forEach(o),ir=r(et," for more information."),et.forEach(o),cr=h(L),k(he.$$.fragment,L),lr=h(L),fe=d(L,"DIV",{class:!0});var ln=i(fe);k(Oe.$$.fragment,ln),pr=h(ln),Be=d(ln,"P",{});var pn=i(Be);mr=r(pn,"Instantiate a "),Po=d(pn,"A",{href:!0});var sd=i(Po);hr=r(sd,"EncoderDecoderConfig"),sd.forEach(o),fr=r(pn,` (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`),pn.forEach(o),ln.forEach(o),ur=h(L),ue=d(L,"DIV",{class:!0});var mn=i(ue);k(Ve.$$.fragment,mn),gr=h(mn),K=d(mn,"P",{});var ot=i(K);_r=r(ot,"Serializes this instance to a Python dictionary. Override the default "),ut=d(ot,"EM",{});var dd=i(ut);br=r(dd,"to_dict()"),dd.forEach(o),vr=r(ot," from "),gt=d(ot,"EM",{});var id=i(gt);yr=r(id,"PretrainedConfig"),id.forEach(o),kr=r(ot,"."),ot.forEach(o),mn.forEach(o),L.forEach(o),on=h(t),Q=d(t,"H2",{class:!0});var hn=i(Q);ge=d(hn,"A",{id:!0,class:!0,href:!0});var cd=i(ge);_t=d(cd,"SPAN",{});var ld=i(_t);k(We.$$.fragment,ld),ld.forEach(o),cd.forEach(o),Tr=h(hn),bt=d(hn,"SPAN",{});var pd=i(bt);wr=r(pd,"EncoderDecoderModel"),pd.forEach(o),hn.forEach(o),tn=h(t),x=d(t,"DIV",{class:!0});var q=i(x);k(Re.$$.fragment,q),Er=h(q),X=d(q,"P",{});var tt=i(X);$r=r(tt,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Ao=d(tt,"A",{href:!0});var md=i(Ao);xr=r(md,"from_pretrained()"),md.forEach(o),Mr=r(tt," function and the decoder is loaded via "),Co=d(tt,"A",{href:!0});var hd=i(Co);Dr=r(hd,"from_pretrained()"),hd.forEach(o),zr=r(tt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),tt.forEach(o),qr=h(q),Ge=d(q,"P",{});var fn=i(Ge);jr=r(fn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Ue=d(fn,"A",{href:!0,rel:!0});var fd=i(Ue);Fr=r(fd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),fd.forEach(o),Pr=r(fn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),fn.forEach(o),Ar=h(q),vt=d(q,"P",{});var ud=i(vt);Cr=r(ud,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),ud.forEach(o),Sr=h(q),He=d(q,"P",{});var un=i(He);Nr=r(un,"This model inherits from "),So=d(un,"A",{href:!0});var gd=i(So);Ir=r(gd,"PreTrainedModel"),gd.forEach(o),Lr=r(un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),un.forEach(o),Or=h(q),Ye=d(q,"P",{});var gn=i(Ye);Br=r(gn,"This model is also a PyTorch "),Je=d(gn,"A",{href:!0,rel:!0});var _d=i(Je);Vr=r(_d,"torch.nn.Module"),_d.forEach(o),Wr=r(gn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gn.forEach(o),Rr=h(q),R=d(q,"P",{});var ko=i(R);No=d(ko,"A",{href:!0});var bd=i(No);Gr=r(bd,"EncoderDecoderModel"),bd.forEach(o),Ur=r(ko,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
:meth`),yt=d(ko,"EM",{});var vd=i(yt);Hr=r(vd,"~transformers.AutoModel.from_pretrained"),vd.forEach(o),Yr=r(ko,` class method for the encoder and
:meth`),kt=d(ko,"EM",{});var yd=i(kt);Jr=r(yd,"~transformers.AutoModelForCausalLM.from_pretrained"),yd.forEach(o),Zr=r(ko," class method for the decoder."),ko.forEach(o),Kr=h(q),C=d(q,"DIV",{class:!0});var De=i(C);k(Ze.$$.fragment,De),Qr=h(De),ee=d(De,"P",{});var nt=i(ee);Xr=r(nt,"The "),Io=d(nt,"A",{href:!0});var kd=i(Io);ea=r(kd,"EncoderDecoderModel"),kd.forEach(o),oa=r(nt," forward method, overrides the "),Tt=d(nt,"CODE",{});var Td=i(Tt);ta=r(Td,"__call__"),Td.forEach(o),na=r(nt," special method."),nt.forEach(o),ra=h(De),k(_e.$$.fragment,De),aa=h(De),k(be.$$.fragment,De),De.forEach(o),sa=h(q),S=d(q,"DIV",{class:!0});var ze=i(S);k(Ke.$$.fragment,ze),da=h(ze),wt=d(ze,"P",{});var wd=i(wt);ia=r(wd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),wd.forEach(o),ca=h(ze),oe=d(ze,"P",{});var rt=i(oe);la=r(rt,"The model is set in evaluation mode by default using "),Et=d(rt,"CODE",{});var Ed=i(Et);pa=r(Ed,"model.eval()"),Ed.forEach(o),ma=r(rt,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),$t=d(rt,"CODE",{});var $d=i($t);ha=r($d,"model.train()"),$d.forEach(o),fa=r(rt,"."),rt.forEach(o),ua=h(ze),k(ve.$$.fragment,ze),ze.forEach(o),q.forEach(o),nn=h(t),te=d(t,"H2",{class:!0});var _n=i(te);ye=d(_n,"A",{id:!0,class:!0,href:!0});var xd=i(ye);xt=d(xd,"SPAN",{});var Md=i(xt);k(Qe.$$.fragment,Md),Md.forEach(o),xd.forEach(o),ga=h(_n),Mt=d(_n,"SPAN",{});var Dd=i(Mt);_a=r(Dd,"TFEncoderDecoderModel"),Dd.forEach(o),_n.forEach(o),rn=h(t),M=d(t,"DIV",{class:!0});var j=i(M);k(Xe.$$.fragment,j),ba=h(j),ne=d(j,"P",{});var at=i(ne);va=r(at,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Lo=d(at,"A",{href:!0});var zd=i(Lo);ya=r(zd,"from_pretrained()"),zd.forEach(o),ka=r(at," function and the decoder is loaded via "),Oo=d(at,"A",{href:!0});var qd=i(Oo);Ta=r(qd,"from_pretrained()"),qd.forEach(o),wa=r(at,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),at.forEach(o),Ea=h(j),eo=d(j,"P",{});var bn=i(eo);$a=r(bn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),oo=d(bn,"A",{href:!0,rel:!0});var jd=i(oo);xa=r(jd,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),jd.forEach(o),Ma=r(bn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),bn.forEach(o),Da=h(j),Dt=d(j,"P",{});var Fd=i(Dt);za=r(Fd,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Fd.forEach(o),qa=h(j),to=d(j,"P",{});var vn=i(to);ja=r(vn,"This model inherits from "),Bo=d(vn,"A",{href:!0});var Pd=i(Bo);Fa=r(Pd,"TFPreTrainedModel"),Pd.forEach(o),Pa=r(vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vn.forEach(o),Aa=h(j),no=d(j,"P",{});var yn=i(no);Ca=r(yn,"This model is also a "),ro=d(yn,"A",{href:!0,rel:!0});var Ad=i(ro);Sa=r(Ad,"tf.keras.Model"),Ad.forEach(o),Na=r(yn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yn.forEach(o),Ia=h(j),G=d(j,"P",{});var To=i(G);Vo=d(To,"A",{href:!0});var Cd=i(Vo);La=r(Cd,"TFEncoderDecoderModel"),Cd.forEach(o),Oa=r(To,` is a generic model class that will be instantiated as a transformer architecture with one
of the base model classes of the library as encoder and another one as decoder when created with the
`),Wo=d(To,"A",{href:!0});var Sd=i(Wo);Ba=r(Sd,"from_pretrained()"),Sd.forEach(o),Va=r(To," class method for the encoder and "),Ro=d(To,"A",{href:!0});var Nd=i(Ro);Wa=r(Nd,"from_pretrained()"),Nd.forEach(o),Ra=r(To,` class
method for the decoder.`),To.forEach(o),Ga=h(j),N=d(j,"DIV",{class:!0});var qe=i(N);k(ao.$$.fragment,qe),Ua=h(qe),re=d(qe,"P",{});var st=i(re);Ha=r(st,"The "),Go=d(st,"A",{href:!0});var Id=i(Go);Ya=r(Id,"TFEncoderDecoderModel"),Id.forEach(o),Ja=r(st," forward method, overrides the "),zt=d(st,"CODE",{});var Ld=i(zt);Za=r(Ld,"__call__"),Ld.forEach(o),Ka=r(st," special method."),st.forEach(o),Qa=h(qe),k(ke.$$.fragment,qe),Xa=h(qe),k(Te.$$.fragment,qe),qe.forEach(o),es=h(j),U=d(j,"DIV",{class:!0});var dt=i(U);k(so.$$.fragment,dt),os=h(dt),qt=d(dt,"P",{});var Od=i(qt);ts=r(Od,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Od.forEach(o),ns=h(dt),k(we.$$.fragment,dt),dt.forEach(o),j.forEach(o),an=h(t),ae=d(t,"H2",{class:!0});var kn=i(ae);Ee=d(kn,"A",{id:!0,class:!0,href:!0});var Bd=i(Ee);jt=d(Bd,"SPAN",{});var Vd=i(jt);k(io.$$.fragment,Vd),Vd.forEach(o),Bd.forEach(o),rs=h(kn),Ft=d(kn,"SPAN",{});var Wd=i(Ft);as=r(Wd,"FlaxEncoderDecoderModel"),Wd.forEach(o),kn.forEach(o),sn=h(t),D=d(t,"DIV",{class:!0});var F=i(D);k(co.$$.fragment,F),ss=h(F),se=d(F,"P",{});var it=i(se);ds=r(it,`This class can be used to initialize a sequence-to-sequence model with any pretrained autoencoding model as the
encoder and any pretrained autoregressive model as the decoder. The encoder is loaded via
`),Uo=d(it,"A",{href:!0});var Rd=i(Uo);is=r(Rd,"from_pretrained()"),Rd.forEach(o),cs=r(it," function and the decoder is loaded via "),Ho=d(it,"A",{href:!0});var Gd=i(Ho);ls=r(Gd,"from_pretrained()"),Gd.forEach(o),ps=r(it,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like summarization.`),it.forEach(o),ms=h(F),lo=d(F,"P",{});var Tn=i(lo);hs=r(Tn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),po=d(Tn,"A",{href:!0,rel:!0});var Ud=i(po);fs=r(Ud,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ud.forEach(o),us=r(Tn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Tn.forEach(o),gs=h(F),Pt=d(F,"P",{});var Hd=i(Pt);_s=r(Hd,`After such an Encoder Decoder model has been trained/fine-tuned, it can be saved/loaded just like any other models
(see the examples for more information).`),Hd.forEach(o),bs=h(F),mo=d(F,"P",{});var wn=i(mo);vs=r(wn,"This model inherits from "),Yo=d(wn,"A",{href:!0});var Yd=i(Yo);ys=r(Yd,"FlaxPreTrainedModel"),Yd.forEach(o),ks=r(wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wn.forEach(o),Ts=h(F),ho=d(F,"P",{});var En=i(ho);ws=r(En,`This model is also a Flax Linen
`),fo=d(En,"A",{href:!0,rel:!0});var Jd=i(fo);Es=r(Jd,"flax.nn.Module"),Jd.forEach(o),$s=r(En,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),En.forEach(o),xs=h(F),H=d(F,"P",{});var wo=i(H);Jo=d(wo,"A",{href:!0});var Zd=i(Jo);Ms=r(Zd,"FlaxEncoderDecoderModel"),Zd.forEach(o),Ds=r(wo,` is a generic model class that will be instantiated as a transformer architecture with
the module (flax.nn.Module) of one of the base model classes of the library as encoder module and another one as
decoder module when created with the :meth`),At=d(wo,"EM",{});var Kd=i(At);zs=r(Kd,"~transformers.FlaxAutoModel.from_pretrained"),Kd.forEach(o),qs=r(wo,` class method for the
encoder and :meth`),Ct=d(wo,"EM",{});var Qd=i(Ct);js=r(Qd,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),Qd.forEach(o),Fs=r(wo," class method for the decoder."),wo.forEach(o),Ps=h(F),I=d(F,"DIV",{class:!0});var je=i(I);k(uo.$$.fragment,je),As=h(je),de=d(je,"P",{});var ct=i(de);Cs=r(ct,"The "),Zo=d(ct,"A",{href:!0});var Xd=i(Zo);Ss=r(Xd,"FlaxEncoderDecoderModel"),Xd.forEach(o),Ns=r(ct," forward method, overrides the "),St=d(ct,"CODE",{});var ei=i(St);Is=r(ei,"__call__"),ei.forEach(o),Ls=r(ct," special method."),ct.forEach(o),Os=h(je),k($e.$$.fragment,je),Bs=h(je),k(xe.$$.fragment,je),je.forEach(o),Vs=h(F),Y=d(F,"DIV",{class:!0});var lt=i(Y);k(go.$$.fragment,lt),Ws=h(lt),Nt=d(lt,"P",{});var oi=i(Nt);Rs=r(oi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),oi.forEach(o),Gs=h(lt),k(Me.$$.fragment,lt),lt.forEach(o),F.forEach(o),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(bi)),l(p,"id","encoder-decoder-models"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#encoder-decoder-models"),l(u,"class","relative group"),l(xo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Pe,"href","https://arxiv.org/abs/1907.12461"),l(Pe,"rel","nofollow"),l(Mo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Do,"href","/docs/transformers/v4.20.0/en/model_doc/bert#transformers.BertModel"),l(Ae,"href","https://arxiv.org/abs/1908.08345"),l(Ae,"rel","nofollow"),l(Se,"href","https://github.com/thomwolf"),l(Se,"rel","nofollow"),l(Ne,"href","https://github.com/ydshieh"),l(Ne,"rel","nofollow"),l(pe,"id","transformers.EncoderDecoderConfig"),l(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(pe,"href","#transformers.EncoderDecoderConfig"),l(J,"class","relative group"),l(zo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(qo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(jo,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(Fo,"href","/docs/transformers/v4.20.0/en/main_classes/configuration#transformers.PretrainedConfig"),l(Po,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),l(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ge,"id","transformers.EncoderDecoderModel"),l(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ge,"href","#transformers.EncoderDecoderModel"),l(Q,"class","relative group"),l(Ao,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Co,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ue,"href","https://arxiv.org/abs/1907.12461"),l(Ue,"rel","nofollow"),l(So,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.PreTrainedModel"),l(Je,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Je,"rel","nofollow"),l(No,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(Io,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ye,"id","transformers.TFEncoderDecoderModel"),l(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ye,"href","#transformers.TFEncoderDecoderModel"),l(te,"class","relative group"),l(Lo,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Oo,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(oo,"href","https://arxiv.org/abs/1907.12461"),l(oo,"rel","nofollow"),l(Bo,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.TFPreTrainedModel"),l(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(ro,"rel","nofollow"),l(Vo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(Wo,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ro,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Go,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.TFEncoderDecoderModel"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ee,"id","transformers.FlaxEncoderDecoderModel"),l(Ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ee,"href","#transformers.FlaxEncoderDecoderModel"),l(ae,"class","relative group"),l(Uo,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(Ho,"href","/docs/transformers/v4.20.0/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),l(po,"href","https://arxiv.org/abs/1907.12461"),l(po,"rel","nofollow"),l(Yo,"href","/docs/transformers/v4.20.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(fo,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),l(fo,"rel","nofollow"),l(Jo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(Zo,"href","/docs/transformers/v4.20.0/en/model_doc/encoder-decoder#transformers.FlaxEncoderDecoderModel"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),b(t,v,g),b(t,u,g),e(u,p),e(p,_),T(a,_,null),e(u,f),e(u,A),e(A,$n),b(t,Ut,g),b(t,ie,g),e(ie,xn),e(ie,xo),e(xo,Mn),e(ie,Dn),b(t,Ht,g),b(t,ce,g),e(ce,zn),e(ce,Pe),e(Pe,qn),e(ce,jn),b(t,Yt,g),b(t,le,g),e(le,Fn),e(le,Mo),e(Mo,Pn),e(le,An),b(t,Jt,g),b(t,B,g),e(B,Cn),e(B,Do),e(Do,Sn),e(B,Nn),e(B,Ae),e(Ae,In),e(B,Ln),b(t,Zt,g),b(t,V,g),e(V,On),e(V,pt),e(pt,Bn),e(V,Vn),e(V,mt),e(mt,Wn),e(V,Rn),b(t,Kt,g),T(Ce,t,g),b(t,Qt,g),b(t,W,g),e(W,Gn),e(W,Se),e(Se,Un),e(W,Hn),e(W,Ne),e(Ne,Yn),e(W,Jn),b(t,Xt,g),b(t,J,g),e(J,pe),e(pe,ht),T(Ie,ht,null),e(J,Zn),e(J,ft),e(ft,Kn),b(t,en,g),b(t,P,g),T(Le,P,null),e(P,Qn),e(P,me),e(me,zo),e(zo,Xn),e(me,er),e(me,qo),e(qo,or),e(me,tr),e(P,nr),e(P,Z),e(Z,rr),e(Z,jo),e(jo,ar),e(Z,sr),e(Z,Fo),e(Fo,dr),e(Z,ir),e(P,cr),T(he,P,null),e(P,lr),e(P,fe),T(Oe,fe,null),e(fe,pr),e(fe,Be),e(Be,mr),e(Be,Po),e(Po,hr),e(Be,fr),e(P,ur),e(P,ue),T(Ve,ue,null),e(ue,gr),e(ue,K),e(K,_r),e(K,ut),e(ut,br),e(K,vr),e(K,gt),e(gt,yr),e(K,kr),b(t,on,g),b(t,Q,g),e(Q,ge),e(ge,_t),T(We,_t,null),e(Q,Tr),e(Q,bt),e(bt,wr),b(t,tn,g),b(t,x,g),T(Re,x,null),e(x,Er),e(x,X),e(X,$r),e(X,Ao),e(Ao,xr),e(X,Mr),e(X,Co),e(Co,Dr),e(X,zr),e(x,qr),e(x,Ge),e(Ge,jr),e(Ge,Ue),e(Ue,Fr),e(Ge,Pr),e(x,Ar),e(x,vt),e(vt,Cr),e(x,Sr),e(x,He),e(He,Nr),e(He,So),e(So,Ir),e(He,Lr),e(x,Or),e(x,Ye),e(Ye,Br),e(Ye,Je),e(Je,Vr),e(Ye,Wr),e(x,Rr),e(x,R),e(R,No),e(No,Gr),e(R,Ur),e(R,yt),e(yt,Hr),e(R,Yr),e(R,kt),e(kt,Jr),e(R,Zr),e(x,Kr),e(x,C),T(Ze,C,null),e(C,Qr),e(C,ee),e(ee,Xr),e(ee,Io),e(Io,ea),e(ee,oa),e(ee,Tt),e(Tt,ta),e(ee,na),e(C,ra),T(_e,C,null),e(C,aa),T(be,C,null),e(x,sa),e(x,S),T(Ke,S,null),e(S,da),e(S,wt),e(wt,ia),e(S,ca),e(S,oe),e(oe,la),e(oe,Et),e(Et,pa),e(oe,ma),e(oe,$t),e($t,ha),e(oe,fa),e(S,ua),T(ve,S,null),b(t,nn,g),b(t,te,g),e(te,ye),e(ye,xt),T(Qe,xt,null),e(te,ga),e(te,Mt),e(Mt,_a),b(t,rn,g),b(t,M,g),T(Xe,M,null),e(M,ba),e(M,ne),e(ne,va),e(ne,Lo),e(Lo,ya),e(ne,ka),e(ne,Oo),e(Oo,Ta),e(ne,wa),e(M,Ea),e(M,eo),e(eo,$a),e(eo,oo),e(oo,xa),e(eo,Ma),e(M,Da),e(M,Dt),e(Dt,za),e(M,qa),e(M,to),e(to,ja),e(to,Bo),e(Bo,Fa),e(to,Pa),e(M,Aa),e(M,no),e(no,Ca),e(no,ro),e(ro,Sa),e(no,Na),e(M,Ia),e(M,G),e(G,Vo),e(Vo,La),e(G,Oa),e(G,Wo),e(Wo,Ba),e(G,Va),e(G,Ro),e(Ro,Wa),e(G,Ra),e(M,Ga),e(M,N),T(ao,N,null),e(N,Ua),e(N,re),e(re,Ha),e(re,Go),e(Go,Ya),e(re,Ja),e(re,zt),e(zt,Za),e(re,Ka),e(N,Qa),T(ke,N,null),e(N,Xa),T(Te,N,null),e(M,es),e(M,U),T(so,U,null),e(U,os),e(U,qt),e(qt,ts),e(U,ns),T(we,U,null),b(t,an,g),b(t,ae,g),e(ae,Ee),e(Ee,jt),T(io,jt,null),e(ae,rs),e(ae,Ft),e(Ft,as),b(t,sn,g),b(t,D,g),T(co,D,null),e(D,ss),e(D,se),e(se,ds),e(se,Uo),e(Uo,is),e(se,cs),e(se,Ho),e(Ho,ls),e(se,ps),e(D,ms),e(D,lo),e(lo,hs),e(lo,po),e(po,fs),e(lo,us),e(D,gs),e(D,Pt),e(Pt,_s),e(D,bs),e(D,mo),e(mo,vs),e(mo,Yo),e(Yo,ys),e(mo,ks),e(D,Ts),e(D,ho),e(ho,ws),e(ho,fo),e(fo,Es),e(ho,$s),e(D,xs),e(D,H),e(H,Jo),e(Jo,Ms),e(H,Ds),e(H,At),e(At,zs),e(H,qs),e(H,Ct),e(Ct,js),e(H,Fs),e(D,Ps),e(D,I),T(uo,I,null),e(I,As),e(I,de),e(de,Cs),e(de,Zo),e(Zo,Ss),e(de,Ns),e(de,St),e(St,Is),e(de,Ls),e(I,Os),T($e,I,null),e(I,Bs),T(xe,I,null),e(D,Vs),e(D,Y),T(go,Y,null),e(Y,Ws),e(Y,Nt),e(Nt,Rs),e(Y,Gs),T(Me,Y,null),dn=!0},p(t,[g]){const _o={};g&2&&(_o.$$scope={dirty:g,ctx:t}),he.$set(_o);const It={};g&2&&(It.$$scope={dirty:g,ctx:t}),_e.$set(It);const Lt={};g&2&&(Lt.$$scope={dirty:g,ctx:t}),be.$set(Lt);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:t}),ve.$set(Ot);const bo={};g&2&&(bo.$$scope={dirty:g,ctx:t}),ke.$set(bo);const Bt={};g&2&&(Bt.$$scope={dirty:g,ctx:t}),Te.$set(Bt);const vo={};g&2&&(vo.$$scope={dirty:g,ctx:t}),we.$set(vo);const Vt={};g&2&&(Vt.$$scope={dirty:g,ctx:t}),$e.$set(Vt);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:t}),xe.$set(yo);const Wt={};g&2&&(Wt.$$scope={dirty:g,ctx:t}),Me.$set(Wt)},i(t){dn||(w(a.$$.fragment,t),w(Ce.$$.fragment,t),w(Ie.$$.fragment,t),w(Le.$$.fragment,t),w(he.$$.fragment,t),w(Oe.$$.fragment,t),w(Ve.$$.fragment,t),w(We.$$.fragment,t),w(Re.$$.fragment,t),w(Ze.$$.fragment,t),w(_e.$$.fragment,t),w(be.$$.fragment,t),w(Ke.$$.fragment,t),w(ve.$$.fragment,t),w(Qe.$$.fragment,t),w(Xe.$$.fragment,t),w(ao.$$.fragment,t),w(ke.$$.fragment,t),w(Te.$$.fragment,t),w(so.$$.fragment,t),w(we.$$.fragment,t),w(io.$$.fragment,t),w(co.$$.fragment,t),w(uo.$$.fragment,t),w($e.$$.fragment,t),w(xe.$$.fragment,t),w(go.$$.fragment,t),w(Me.$$.fragment,t),dn=!0)},o(t){E(a.$$.fragment,t),E(Ce.$$.fragment,t),E(Ie.$$.fragment,t),E(Le.$$.fragment,t),E(he.$$.fragment,t),E(Oe.$$.fragment,t),E(Ve.$$.fragment,t),E(We.$$.fragment,t),E(Re.$$.fragment,t),E(Ze.$$.fragment,t),E(_e.$$.fragment,t),E(be.$$.fragment,t),E(Ke.$$.fragment,t),E(ve.$$.fragment,t),E(Qe.$$.fragment,t),E(Xe.$$.fragment,t),E(ao.$$.fragment,t),E(ke.$$.fragment,t),E(Te.$$.fragment,t),E(so.$$.fragment,t),E(we.$$.fragment,t),E(io.$$.fragment,t),E(co.$$.fragment,t),E(uo.$$.fragment,t),E($e.$$.fragment,t),E(xe.$$.fragment,t),E(go.$$.fragment,t),E(Me.$$.fragment,t),dn=!1},d(t){o(c),t&&o(v),t&&o(u),$(a),t&&o(Ut),t&&o(ie),t&&o(Ht),t&&o(ce),t&&o(Yt),t&&o(le),t&&o(Jt),t&&o(B),t&&o(Zt),t&&o(V),t&&o(Kt),$(Ce,t),t&&o(Qt),t&&o(W),t&&o(Xt),t&&o(J),$(Ie),t&&o(en),t&&o(P),$(Le),$(he),$(Oe),$(Ve),t&&o(on),t&&o(Q),$(We),t&&o(tn),t&&o(x),$(Re),$(Ze),$(_e),$(be),$(Ke),$(ve),t&&o(nn),t&&o(te),$(Qe),t&&o(rn),t&&o(M),$(Xe),$(ao),$(ke),$(Te),$(so),$(we),t&&o(an),t&&o(ae),$(io),t&&o(sn),t&&o(D),$(co),$(uo),$($e),$(xe),$(go),$(Me)}}}const bi={local:"encoder-decoder-models",sections:[{local:"transformers.EncoderDecoderConfig",title:"EncoderDecoderConfig"},{local:"transformers.EncoderDecoderModel",title:"EncoderDecoderModel"},{local:"transformers.TFEncoderDecoderModel",title:"TFEncoderDecoderModel"},{local:"transformers.FlaxEncoderDecoderModel",title:"FlaxEncoderDecoderModel"}],title:"Encoder Decoder Models"};function vi(z){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xi extends ti{constructor(c){super();ni(this,c,vi,_i,ri,{})}}export{xi as default,bi as metadata};
