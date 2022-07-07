import{S as Fi,i as zi,s as Pi,e as s,k as m,w as T,t,M as Ci,c as d,d as o,m as h,a as i,x as w,h as n,b as c,G as e,g as b,y,q as E,o as k,B as x,v as Ai,L as wo}from"../../chunks/vendor-hf-doc-builder.js";import{T as gd}from"../../chunks/Tip-hf-doc-builder.js";import{D as R}from"../../chunks/Docstring-hf-doc-builder.js";import{C as yo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Si(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

# Initializing a ViT & BERT style configuration
config_encoder = ViTConfig()
config_decoder = BertConfig()

config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

# Initializing a ViTBert model from a ViT & bert-base-uncased style configurations
model = VisionEncoderDecoderModel(config=config)

# Accessing the model configuration
config_encoder = model.config.encoder
config_decoder = model.config.decoder
# set decoder config to causal lm
config_decoder.is_decoder = True
config_decoder.add_cross_attention = True

# Saving the model, including its configuration
model.save_pretrained("my-model")

# loading model and config from pretrained folder
encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained("my-model")
model = VisionEncoderDecoderModel.from_pretrained("my-model", config=encoder_decoder_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, ViTConfig, VisionEncoderDecoderConfig, VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViT &amp; BERT style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = ViTConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span>config = VisionEncoderDecoderConfig.from_encoder_decoder_configs(config_encoder, config_decoder)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViTBert model from a ViT &amp; bert-base-uncased style configurations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel(config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_encoder = model.config.encoder
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder = model.config.decoder
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set decoder config to causal lm</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config_decoder.add_cross_attention = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Saving the model, including its configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading model and config from pretrained folder</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_decoder_config = VisionEncoderDecoderConfig.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;my-model&quot;</span>, config=encoder_decoder_config)`}}),{c(){l=s("p"),v=t("Examples:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Examples:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Ii(q){let l,v,u,p,g;return{c(){l=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),g=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=n(A,"Module"),A.forEach(o),g=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,l,f),e(l,v),e(l,u),e(u,p),e(l,g)},d(a){a&&o(l)}}}function Li(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import TrOCRProcessor, VisionEncoderDecoderModel
import requests
from PIL import Image
import torch

processor = TrOCRProcessor.from_pretrained("microsoft/trocr-base-handwritten")
model = VisionEncoderDecoderModel.from_pretrained("microsoft/trocr-base-handwritten")

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
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrOCRProcessor, VisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = TrOCRProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;microsoft/trocr-base-handwritten&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]`}}),{c(){l=s("p"),v=t("Examples:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Examples:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Ni(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import VisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = VisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){l=s("p"),v=t("Example:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Example:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Oi(q){let l,v,u,p,g;return{c(){l=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),g=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=n(A,"Module"),A.forEach(o),g=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,l,f),e(l,v),e(l,u),e(u,p),e(l,g)},d(a){a&&o(l)}}}function Ri(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
from PIL import Image
import requests

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")
decoder_tokenizer = AutoTokenizer.from_pretrained("gpt2")

# initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
img = Image.open(requests.get(url, stream=True).raw)

# forward
pixel_values = feature_extractor(images=img, return_tensors="tf").pixel_values  # Batch size 1
decoder_input_ids = decoder_tokenizer("Linda Davis", return_tensors="tf").input_ids  # Batch size 1
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

# training
outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
loss, logits = outputs.loss, outputs.logits

# save and load from pretrained
model.save_pretrained("vit-gpt2")
model = TFVisionEncoderDecoderModel.from_pretrained("vit-gpt2")

# generation
generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, AutoTokenizer, TFVisionEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a bert2gpt2 from a pretrained BERT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>img = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=img, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = decoder_tokenizer(<span class="hljs-string">&quot;Linda Davis&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values=pixel_values, decoder_input_ids=decoder_input_ids, labels=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># save and load from pretrained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;vit-gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(pixel_values, decoder_start_token_id=model.config.decoder.bos_token_id)`}}),{c(){l=s("p"),v=t("Examples:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Examples:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Bi(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import TFVisionEncoderDecoderModel

# initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized
model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "bert-base-uncased"
)
# saving model after fine-tuning
model.save_pretrained("./vit-bert")
# load fine-tuned model
model = TFVisionEncoderDecoderModel.from_pretrained("./vit-bert")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-bert from a pretrained ViT and a pretrained BERT model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-bert&quot;</span>)`}}),{c(){l=s("p"),v=t("Example:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Example:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Gi(q){let l,v,u,p,g;return{c(){l=s("p"),v=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=s("code"),p=t("Module"),g=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=d(f,"CODE",{});var A=i(u);p=n(A,"Module"),A.forEach(o),g=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(a,f){b(a,l,f),e(l,v),e(l,u),e(u,p),e(l,g)},d(a){a&&o(l)}}}function Wi(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
from PIL import Image
import requests

url = "http://images.cocodataset.org/val2017/000000039769.jpg"
image = Image.open(requests.get(url, stream=True).raw)

feature_extractor = ViTFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")

# load output tokenizer
tokenizer_output = GPT2Tokenizer.from_pretrained("gpt2")

# initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)

pixel_values = feature_extractor(images=image, return_tensors="np").pixel_values

# use GPT2's eos_token as the pad as well as eos token
model.config.eos_token_id = model.config.decoder.eos_token_id
model.config.pad_token_id = model.config.eos_token_id

# generation
sequences = model.generate(pixel_values, num_beams=4, max_length=12).sequences

captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel, ViTFeatureExtractor, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = ViTFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load output tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer_output = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from pretrained ViT and GPT2 models. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).pixel_values

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use GPT2&#x27;s eos_token as the pad as well as eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.eos_token_id = model.config.decoder.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(pixel_values, num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">12</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>captions = tokenizer_output.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){l=s("p"),v=t("Examples:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Examples:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Ui(q){let l,v,u,p,g;return p=new yo({props:{code:`from transformers import FlaxVisionEncoderDecoderModel

# initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized
model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
    "google/vit-base-patch16-224-in21k", "gpt2"
)
# saving model after fine-tuning
model.save_pretrained("./vit-gpt2")
# load fine-tuned model
model = FlaxVisionEncoderDecoderModel.from_pretrained("./vit-gpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxVisionEncoderDecoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize a vit-gpt2 from a pretrained ViT and a pretrained GPT2 model. Note that the cross-attention layers will be randomly initialized</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>, <span class="hljs-string">&quot;gpt2&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saving model after fine-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load fine-tuned model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxVisionEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;./vit-gpt2&quot;</span>)`}}),{c(){l=s("p"),v=t("Example:"),u=m(),T(p.$$.fragment)},l(a){l=d(a,"P",{});var f=i(l);v=n(f,"Example:"),f.forEach(o),u=h(a),w(p.$$.fragment,a)},m(a,f){b(a,l,f),e(l,v),b(a,u,f),y(p,a,f),g=!0},p:wo,i(a){g||(E(p.$$.fragment,a),g=!0)},o(a){k(p.$$.fragment,a),g=!1},d(a){a&&o(l),a&&o(u),x(p,a)}}}function Hi(q){let l,v,u,p,g,a,f,A,Dn,Kt,$,qn,Eo,Fn,zn,ft,Pn,Cn,ko,An,Sn,xo,In,Ln,$o,Nn,On,Mo,Rn,Bn,ut,Gn,Wn,jo,Un,Hn,Vo,Zn,Yn,Do,Jn,Kn,qo,Qn,Xn,Qt,ie,er,De,or,tr,Xt,B,nr,Fo,rr,ar,zo,sr,dr,en,Y,ce,gt,qe,ir,_t,cr,on,C,Fe,lr,le,Po,pr,mr,Co,hr,fr,ur,J,gr,Ao,_r,vr,So,br,Tr,wr,pe,yr,me,ze,Er,Pe,kr,Io,xr,$r,Mr,he,Ce,jr,K,Vr,vt,Dr,qr,bt,Fr,zr,tn,Q,fe,Tt,Ae,Pr,wt,Cr,nn,j,Se,Ar,X,Sr,Lo,Ir,Lr,No,Nr,Or,Rr,Ie,Br,Le,Gr,Wr,Ur,Ne,Hr,Oe,Zr,Yr,Jr,yt,Kr,Qr,Re,Xr,Oo,ea,oa,ta,Be,na,Ge,ra,aa,sa,G,Ro,da,ia,Et,ca,la,kt,pa,ma,ha,S,We,fa,ee,ua,Bo,ga,_a,xt,va,ba,Ta,ue,wa,ge,ya,I,Ue,Ea,$t,ka,xa,oe,$a,Mt,Ma,ja,jt,Va,Da,qa,_e,rn,te,ve,Vt,He,Fa,Dt,za,an,V,Ze,Pa,ne,Ca,Go,Aa,Sa,Wo,Ia,La,Na,Ye,Oa,Je,Ra,Ba,Ga,Ke,Wa,Qe,Ua,Ha,Za,qt,Ya,Ja,Xe,Ka,Uo,Qa,Xa,es,eo,os,oo,ts,ns,rs,W,Ho,as,ss,Zo,ds,is,Yo,cs,ls,ps,L,to,ms,re,hs,Jo,fs,us,Ft,gs,_s,vs,be,bs,Te,Ts,U,no,ws,zt,ys,Es,we,sn,ae,ye,Pt,ro,ks,Ct,xs,dn,D,ao,$s,se,Ms,Ko,js,Vs,Qo,Ds,qs,Fs,so,zs,io,Ps,Cs,As,co,Ss,lo,Is,Ls,Ns,At,Os,Rs,po,Bs,Xo,Gs,Ws,Us,mo,Hs,ho,Zs,Ys,Js,H,et,Ks,Qs,St,Xs,ed,It,od,td,nd,N,fo,rd,de,ad,ot,sd,dd,Lt,id,cd,ld,Ee,pd,ke,md,Z,uo,hd,Nt,fd,ud,xe,cn;return a=new Jt({}),qe=new Jt({}),Fe=new R({props:{name:"class transformers.VisionEncoderDecoderConfig",anchor:"transformers.VisionEncoderDecoderConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderConfig.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Dictionary of keyword arguments. Notably:</p>
<ul>
<li><strong>encoder</strong> (<a href="/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the encoder config.</li>
<li><strong>decoder</strong> (<a href="/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>, <em>optional</em>) &#x2014; An instance of a configuration object that defines
the decoder config.</li>
</ul>`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L27"}}),pe=new To({props:{anchor:"transformers.VisionEncoderDecoderConfig.example",$$slots:{default:[Si]},$$scope:{ctx:q}}}),ze=new R({props:{name:"from_encoder_decoder_configs",anchor:"transformers.VisionEncoderDecoderConfig.from_encoder_decoder_configs",parameters:[{name:"encoder_config",val:": PretrainedConfig"},{name:"decoder_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L93",returnDescription:`
<p>An instance of a configuration object</p>
`,returnType:`
<p><a
  href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a></p>
`}}),Ce=new R({props:{name:"to_dict",anchor:"transformers.VisionEncoderDecoderConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/configuration_vision_encoder_decoder.py#L110",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, any]</code></p>
`}}),Ae=new Jt({}),Se=new R({props:{name:"class transformers.VisionEncoderDecoderModel",anchor:"transformers.VisionEncoderDecoderModel",parameters:[{name:"config",val:": typing.Optional[transformers.configuration_utils.PretrainedConfig] = None"},{name:"encoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"},{name:"decoder",val:": typing.Optional[transformers.modeling_utils.PreTrainedModel] = None"}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L148"}}),We=new R({props:{name:"forward",anchor:"transformers.VisionEncoderDecoderModel.forward",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using a feature extractor (e.g. if you use ViT as the encoder,
you should use <a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>). See <a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For training, <code>decoder_input_ids</code> are automatically created by the model by shifting the <code>labels</code> to the
right, replacing -100 by the <code>pad_token_id</code> and prepending them with the <code>decoder_start_token_id</code>.`,name:"decoder_input_ids"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.VisionEncoderDecoderModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor
of hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the
decoder.`,name:"encoder_outputs"},{anchor:"transformers.VisionEncoderDecoderModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.VisionEncoderDecoderModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.VisionEncoderDecoderModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisionEncoderDecoderModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisionEncoderDecoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisionEncoderDecoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L401",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new gd({props:{$$slots:{default:[Ii]},$$scope:{ctx:q}}}),ge=new To({props:{anchor:"transformers.VisionEncoderDecoderModel.forward.example",$$slots:{default:[Li]},$$scope:{ctx:q}}}),Ue=new R({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the image encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the text decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>tensorflow index checkpoint file</em> (e.g, <code>./tf_model/model.ckpt.index</code>). In
this case, <code>from_tf</code> should be set to <code>True</code> and a configuration object should be provided as
<code>config</code> argument. This loading path is slower than converting the TensorFlow checkpoint in a
PyTorch model using the provided conversion scripts and loading the PyTorch model afterwards.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_vision_encoder_decoder.py#L247"}}),_e=new To({props:{anchor:"transformers.VisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Ni]},$$scope:{ctx:q}}}),He=new Jt({}),Ze=new R({props:{name:"class transformers.TFVisionEncoderDecoderModel",anchor:"transformers.TFVisionEncoderDecoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L176"}}),to=new R({props:{name:"call",anchor:"transformers.TFVisionEncoderDecoderModel.call",parameters:[{name:"pixel_values",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision&#x2019;s model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>Provide for sequence to sequence training to the decoder. Indices can be obtained using
<a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for
details.`,name:"decoder_input_ids"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
This tuple must consist of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) is a tensor of hidden-states at the output
of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. This is useful if you want more control over how to convert <code>decoder_input_ids</code> indices
into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss for the decoder. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>Seq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFVisionEncoderDecoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).
kwargs &#x2014; (<em>optional</em>) Remaining dictionary of keyword arguments. Keyword arguments come in two flavors:</p>
<ul>
<li>Without a prefix which will be input as <code>**encoder_kwargs</code> for the encoder forward function.</li>
<li>With a <em>decoder_</em> prefix which will be input as <code>**decoder_kwargs</code> for the decoder forward function.</li>
</ul>`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L514",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),be=new gd({props:{$$slots:{default:[Oi]},$$scope:{ctx:q}}}),Te=new To({props:{anchor:"transformers.TFVisionEncoderDecoderModel.call.example",$$slots:{default:[Ri]},$$scope:{ctx:q}}}),no=new R({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": str = None"},{name:"decoder_pretrained_model_name_or_path",val:": str = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch index checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>encoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <em>None</em>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
<li>A path or url to a <em>pytorch checkpoint file</em> (e.g, <code>./pt_model/</code>). In this case,
<code>decoder_from_pt</code> should be set to <code>True</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_tf_vision_encoder_decoder.py#L350"}}),we=new To({props:{anchor:"transformers.TFVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Bi]},$$scope:{ctx:q}}}),ro=new Jt({}),ao=new R({props:{name:"class transformers.FlaxVisionEncoderDecoderModel",anchor:"transformers.FlaxVisionEncoderDecoderModel",parameters:[{name:"config",val:": VisionEncoderDecoderConfig"},{name:"input_shape",val:": typing.Optional[typing.Tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig">VisionEncoderDecoderConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L268"}}),fo=new R({props:{name:"__call__",anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__",parameters:[{name:"pixel_values",val:": ndarray"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.pixel_values",description:`<strong>pixel_values</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using the vision model&#x2019;s feature extractor. For example, using
<a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor">ViTFeatureExtractor</a>. See <a href="/docs/transformers/v4.20.1/en/model_doc/vit#transformers.ViTFeatureExtractor.__call__">ViTFeatureExtractor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a>`,name:"decoder_input_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.decoder.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <code>FlaxSeq2SeqLMOutput</code> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L599",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"
>VisionEncoderDecoderConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new gd({props:{$$slots:{default:[Gi]},$$scope:{ctx:q}}}),ke=new To({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.__call__.example",$$slots:{default:[Wi]},$$scope:{ctx:q}}}),uo=new R({props:{name:"from_encoder_decoder_pretrained",anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained",parameters:[{name:"encoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"decoder_pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike, NoneType] = None"},{name:"*model_args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.encoder_pretrained_model_name_or_path",description:`<strong>encoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Information necessary to initiate the encoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co. An
example is <code>google/vit-base-patch16-224-in21k</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"encoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.decoder_pretrained_model_name_or_path",description:`<strong>decoder_pretrained_model_name_or_path</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Information necessary to initiate the decoder. Can be either:</p>
<ul>
<li>A string, the <em>model id</em> of a pretrained model hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>A path to a <em>directory</em> containing model weights saved using
<a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel.save_pretrained">save_pretrained()</a>, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"decoder_pretrained_model_name_or_path"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.model_args",description:`<strong>model_args</strong> (remaining positional arguments, <em>optional</em>) &#x2014;
All remaning positional arguments will be passed to the underlying model&#x2019;s <code>__init__</code> method.`,name:"model_args"},{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.kwargs",description:`<strong>kwargs</strong> (remaining dictionary of keyword arguments, <em>optional</em>) &#x2014;
Can be used to update the configuration object (after it being loaded) and initiate the model (e.g.,
<code>output_attentions=True</code>).</p>
<ul>
<li>To update the encoder configuration, use the prefix <em>encoder_</em> for each configuration parameter.</li>
<li>To update the decoder configuration, use the prefix <em>decoder_</em> for each configuration parameter.</li>
<li>To update the parent model configuration, do not use a prefix for each configuration parameter.</li>
</ul>
<p>Behaves differently depending on whether a <code>config</code> is provided or automatically loaded.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/vision_encoder_decoder/modeling_flax_vision_encoder_decoder.py#L724"}}),xe=new To({props:{anchor:"transformers.FlaxVisionEncoderDecoderModel.from_encoder_decoder_pretrained.example",$$slots:{default:[Ui]},$$scope:{ctx:q}}}),{c(){l=s("meta"),v=m(),u=s("h1"),p=s("a"),g=s("span"),T(a.$$.fragment),f=m(),A=s("span"),Dn=t("Vision Encoder Decoder Models"),Kt=m(),$=s("p"),qn=t("The "),Eo=s("a"),Fn=t("VisionEncoderDecoderModel"),zn=t(` can be used to initialize an image-to-text-sequence model with any
pretrained Transformer-based vision autoencoding model as the encoder (`),ft=s("em"),Pn=t("e.g."),Cn=m(),ko=s("a"),An=t("ViT"),Sn=t(", "),xo=s("a"),In=t("BEiT"),Ln=t(", "),$o=s("a"),Nn=t("DeiT"),On=t(", "),Mo=s("a"),Rn=t("Swin"),Bn=t(`)
and any pretrained language model as the decoder (`),ut=s("em"),Gn=t("e.g."),Wn=m(),jo=s("a"),Un=t("RoBERTa"),Hn=t(", "),Vo=s("a"),Zn=t("GPT2"),Yn=t(", "),Do=s("a"),Jn=t("BERT"),Kn=t(", "),qo=s("a"),Qn=t("DistilBERT"),Xn=t(")."),Qt=m(),ie=s("p"),er=t(`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),De=s("a"),or=t("TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),tr=t(` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),Xt=m(),B=s("p"),nr=t("An example of how to use a "),Fo=s("a"),rr=t("VisionEncoderDecoderModel"),ar=t(" for inference can be seen in "),zo=s("a"),sr=t("TrOCR"),dr=t("."),en=m(),Y=s("h2"),ce=s("a"),gt=s("span"),T(qe.$$.fragment),ir=m(),_t=s("span"),cr=t("VisionEncoderDecoderConfig"),on=m(),C=s("div"),T(Fe.$$.fragment),lr=m(),le=s("p"),Po=s("a"),pr=t("VisionEncoderDecoderConfig"),mr=t(` is the configuration class to store the configuration of a
`),Co=s("a"),hr=t("VisionEncoderDecoderModel"),fr=t(`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),ur=m(),J=s("p"),gr=t("Configuration objects inherit from "),Ao=s("a"),_r=t("PretrainedConfig"),vr=t(` and can be used to control the model outputs. Read the
documentation from `),So=s("a"),br=t("PretrainedConfig"),Tr=t(" for more information."),wr=m(),T(pe.$$.fragment),yr=m(),me=s("div"),T(ze.$$.fragment),Er=m(),Pe=s("p"),kr=t("Instantiate a "),Io=s("a"),xr=t("VisionEncoderDecoderConfig"),$r=t(` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),Mr=m(),he=s("div"),T(Ce.$$.fragment),jr=m(),K=s("p"),Vr=t("Serializes this instance to a Python dictionary. Override the default "),vt=s("em"),Dr=t("to_dict()"),qr=t(" from "),bt=s("em"),Fr=t("PretrainedConfig"),zr=t("."),tn=m(),Q=s("h2"),fe=s("a"),Tt=s("span"),T(Ae.$$.fragment),Pr=m(),wt=s("span"),Cr=t("VisionEncoderDecoderModel"),nn=m(),j=s("div"),T(Se.$$.fragment),Ar=m(),X=s("p"),Sr=t(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Lo=s("a"),Ir=t("from_pretrained()"),Lr=t(" function and the decoder is loaded via "),No=s("a"),Nr=t("from_pretrained()"),Or=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),Rr=m(),Ie=s("p"),Br=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Le=s("a"),Gr=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Wr=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ur=m(),Ne=s("p"),Hr=t("Additionally, in "),Oe=s("a"),Zr=t(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Yr=t(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Jr=m(),yt=s("p"),Kr=t(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Qr=m(),Re=s("p"),Xr=t("This model inherits from "),Oo=s("a"),ea=t("PreTrainedModel"),oa=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta=m(),Be=s("p"),na=t("This model is also a PyTorch "),Ge=s("a"),ra=t("torch.nn.Module"),aa=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sa=m(),G=s("p"),Ro=s("a"),da=t("VisionEncoderDecoderModel"),ia=t(` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Et=s("em"),ca=t("~transformers.AutoModel.from_pretrained"),la=t(` class method for the encoder and
:meth`),kt=s("em"),pa=t("~transformers.AutoModelForCausalLM.from_pretrained"),ma=t(" class method for the decoder."),ha=m(),S=s("div"),T(We.$$.fragment),fa=m(),ee=s("p"),ua=t("The "),Bo=s("a"),ga=t("VisionEncoderDecoderModel"),_a=t(" forward method, overrides the "),xt=s("code"),va=t("__call__"),ba=t(" special method."),Ta=m(),T(ue.$$.fragment),wa=m(),T(ge.$$.fragment),ya=m(),I=s("div"),T(Ue.$$.fragment),Ea=m(),$t=s("p"),ka=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),xa=m(),oe=s("p"),$a=t("The model is set in evaluation mode by default using "),Mt=s("code"),Ma=t("model.eval()"),ja=t(` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),jt=s("code"),Va=t("model.train()"),Da=t("."),qa=m(),T(_e.$$.fragment),rn=m(),te=s("h2"),ve=s("a"),Vt=s("span"),T(He.$$.fragment),Fa=m(),Dt=s("span"),za=t("TFVisionEncoderDecoderModel"),an=m(),V=s("div"),T(Ze.$$.fragment),Pa=m(),ne=s("p"),Ca=t(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Go=s("a"),Aa=t("from_pretrained()"),Sa=t(" function and the decoder is loaded via "),Wo=s("a"),Ia=t("from_pretrained()"),La=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),Na=m(),Ye=s("p"),Oa=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Je=s("a"),Ra=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Ba=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),Ga=m(),Ke=s("p"),Wa=t("Additionally, in "),Qe=s("a"),Ua=t(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Ha=t(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Za=m(),qt=s("p"),Ya=t(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Ja=m(),Xe=s("p"),Ka=t("This model inherits from "),Uo=s("a"),Qa=t("TFPreTrainedModel"),Xa=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),es=m(),eo=s("p"),os=t("This model is also a "),oo=s("a"),ts=t("tf.keras.Model"),ns=t(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rs=m(),W=s("p"),Ho=s("a"),as=t("TFVisionEncoderDecoderModel"),ss=t(` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Zo=s("a"),ds=t("from_pretrained()"),is=t(` class method for the encoder and
`),Yo=s("a"),cs=t("from_pretrained()"),ls=t(" class method for the decoder."),ps=m(),L=s("div"),T(to.$$.fragment),ms=m(),re=s("p"),hs=t("The "),Jo=s("a"),fs=t("TFVisionEncoderDecoderModel"),us=t(" forward method, overrides the "),Ft=s("code"),gs=t("__call__"),_s=t(" special method."),vs=m(),T(be.$$.fragment),bs=m(),T(Te.$$.fragment),Ts=m(),U=s("div"),T(no.$$.fragment),ws=m(),zt=s("p"),ys=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Es=m(),T(we.$$.fragment),sn=m(),ae=s("h2"),ye=s("a"),Pt=s("span"),T(ro.$$.fragment),ks=m(),Ct=s("span"),xs=t("FlaxVisionEncoderDecoderModel"),dn=m(),D=s("div"),T(ao.$$.fragment),$s=m(),se=s("p"),Ms=t(`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Ko=s("a"),js=t("from_pretrained()"),Vs=t(" function and the decoder is loaded via "),Qo=s("a"),Ds=t("from_pretrained()"),qs=t(`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),Fs=m(),so=s("p"),zs=t(`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),io=s("a"),Ps=t(`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Cs=t(` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),As=m(),co=s("p"),Ss=t("Additionally, in "),lo=s("a"),Is=t(`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Ls=t(` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Ns=m(),At=s("p"),Os=t(`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Rs=m(),po=s("p"),Bs=t("This model inherits from "),Xo=s("a"),Gs=t("FlaxPreTrainedModel"),Ws=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Us=m(),mo=s("p"),Hs=t(`This model is also a Flax Linen
`),ho=s("a"),Zs=t("flax.nn.Module"),Ys=t(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Js=m(),H=s("p"),et=s("a"),Ks=t("FlaxVisionEncoderDecoderModel"),Qs=t(` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),St=s("em"),Xs=t("~transformers.FlaxAutoModel.from_pretrained"),ed=t(` class method
for the encoder and :meth`),It=s("em"),od=t("~transformers.FlaxAutoModelForCausalLM.from_pretrained"),td=t(" class method for the decoder."),nd=m(),N=s("div"),T(fo.$$.fragment),rd=m(),de=s("p"),ad=t("The "),ot=s("a"),sd=t("FlaxVisionEncoderDecoderModel"),dd=t(" forward method, overrides the "),Lt=s("code"),id=t("__call__"),cd=t(" special method."),ld=m(),T(Ee.$$.fragment),pd=m(),T(ke.$$.fragment),md=m(),Z=s("div"),T(uo.$$.fragment),hd=m(),Nt=s("p"),fd=t(`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ud=m(),T(xe.$$.fragment),this.h()},l(r){const _=Ci('[data-svelte="svelte-1phssyn"]',document.head);l=d(_,"META",{name:!0,content:!0}),_.forEach(o),v=h(r),u=d(r,"H1",{class:!0});var go=i(u);p=d(go,"A",{id:!0,class:!0,href:!0});var Ot=i(p);g=d(Ot,"SPAN",{});var Rt=i(g);w(a.$$.fragment,Rt),Rt.forEach(o),Ot.forEach(o),f=h(go),A=d(go,"SPAN",{});var Bt=i(A);Dn=n(Bt,"Vision Encoder Decoder Models"),Bt.forEach(o),go.forEach(o),Kt=h(r),$=d(r,"P",{});var M=i($);qn=n(M,"The "),Eo=d(M,"A",{href:!0});var Gt=i(Eo);Fn=n(Gt,"VisionEncoderDecoderModel"),Gt.forEach(o),zn=n(M,` can be used to initialize an image-to-text-sequence model with any
pretrained Transformer-based vision autoencoding model as the encoder (`),ft=d(M,"EM",{});var Wt=i(ft);Pn=n(Wt,"e.g."),Wt.forEach(o),Cn=h(M),ko=d(M,"A",{href:!0});var Ut=i(ko);An=n(Ut,"ViT"),Ut.forEach(o),Sn=n(M,", "),xo=d(M,"A",{href:!0});var Ht=i(xo);In=n(Ht,"BEiT"),Ht.forEach(o),Ln=n(M,", "),$o=d(M,"A",{href:!0});var Zt=i($o);Nn=n(Zt,"DeiT"),Zt.forEach(o),On=n(M,", "),Mo=d(M,"A",{href:!0});var _d=i(Mo);Rn=n(_d,"Swin"),_d.forEach(o),Bn=n(M,`)
and any pretrained language model as the decoder (`),ut=d(M,"EM",{});var vd=i(ut);Gn=n(vd,"e.g."),vd.forEach(o),Wn=h(M),jo=d(M,"A",{href:!0});var bd=i(jo);Un=n(bd,"RoBERTa"),bd.forEach(o),Hn=n(M,", "),Vo=d(M,"A",{href:!0});var Td=i(Vo);Zn=n(Td,"GPT2"),Td.forEach(o),Yn=n(M,", "),Do=d(M,"A",{href:!0});var wd=i(Do);Jn=n(wd,"BERT"),wd.forEach(o),Kn=n(M,", "),qo=d(M,"A",{href:!0});var yd=i(qo);Qn=n(yd,"DistilBERT"),yd.forEach(o),Xn=n(M,")."),M.forEach(o),Qt=h(r),ie=d(r,"P",{});var ln=i(ie);er=n(ln,`The effectiveness of initializing image-to-text-sequence models with pretrained checkpoints has been shown in (for
example) `),De=d(ln,"A",{href:!0,rel:!0});var Ed=i(De);or=n(Ed,"TrOCR: Transformer-based Optical Character Recognition with Pre-trained Models"),Ed.forEach(o),tr=n(ln,` by Minghao Li, Tengchao Lv, Lei Cui, Yijuan Lu, Dinei Florencio, Cha Zhang,
Zhoujun Li, Furu Wei.`),ln.forEach(o),Xt=h(r),B=d(r,"P",{});var tt=i(B);nr=n(tt,"An example of how to use a "),Fo=d(tt,"A",{href:!0});var kd=i(Fo);rr=n(kd,"VisionEncoderDecoderModel"),kd.forEach(o),ar=n(tt," for inference can be seen in "),zo=d(tt,"A",{href:!0});var xd=i(zo);sr=n(xd,"TrOCR"),xd.forEach(o),dr=n(tt,"."),tt.forEach(o),en=h(r),Y=d(r,"H2",{class:!0});var pn=i(Y);ce=d(pn,"A",{id:!0,class:!0,href:!0});var $d=i(ce);gt=d($d,"SPAN",{});var Md=i(gt);w(qe.$$.fragment,Md),Md.forEach(o),$d.forEach(o),ir=h(pn),_t=d(pn,"SPAN",{});var jd=i(_t);cr=n(jd,"VisionEncoderDecoderConfig"),jd.forEach(o),pn.forEach(o),on=h(r),C=d(r,"DIV",{class:!0});var O=i(C);w(Fe.$$.fragment,O),lr=h(O),le=d(O,"P",{});var Yt=i(le);Po=d(Yt,"A",{href:!0});var Vd=i(Po);pr=n(Vd,"VisionEncoderDecoderConfig"),Vd.forEach(o),mr=n(Yt,` is the configuration class to store the configuration of a
`),Co=d(Yt,"A",{href:!0});var Dd=i(Co);hr=n(Dd,"VisionEncoderDecoderModel"),Dd.forEach(o),fr=n(Yt,`. It is used to instantiate a Vision-Encoder-Text-Decoder model according to the
specified arguments, defining the encoder and decoder configs.`),Yt.forEach(o),ur=h(O),J=d(O,"P",{});var nt=i(J);gr=n(nt,"Configuration objects inherit from "),Ao=d(nt,"A",{href:!0});var qd=i(Ao);_r=n(qd,"PretrainedConfig"),qd.forEach(o),vr=n(nt,` and can be used to control the model outputs. Read the
documentation from `),So=d(nt,"A",{href:!0});var Fd=i(So);br=n(Fd,"PretrainedConfig"),Fd.forEach(o),Tr=n(nt," for more information."),nt.forEach(o),wr=h(O),w(pe.$$.fragment,O),yr=h(O),me=d(O,"DIV",{class:!0});var mn=i(me);w(ze.$$.fragment,mn),Er=h(mn),Pe=d(mn,"P",{});var hn=i(Pe);kr=n(hn,"Instantiate a "),Io=d(hn,"A",{href:!0});var zd=i(Io);xr=n(zd,"VisionEncoderDecoderConfig"),zd.forEach(o),$r=n(hn,` (or a derived class) from a pre-trained encoder model
configuration and decoder model configuration.`),hn.forEach(o),mn.forEach(o),Mr=h(O),he=d(O,"DIV",{class:!0});var fn=i(he);w(Ce.$$.fragment,fn),jr=h(fn),K=d(fn,"P",{});var rt=i(K);Vr=n(rt,"Serializes this instance to a Python dictionary. Override the default "),vt=d(rt,"EM",{});var Pd=i(vt);Dr=n(Pd,"to_dict()"),Pd.forEach(o),qr=n(rt," from "),bt=d(rt,"EM",{});var Cd=i(bt);Fr=n(Cd,"PretrainedConfig"),Cd.forEach(o),zr=n(rt,"."),rt.forEach(o),fn.forEach(o),O.forEach(o),tn=h(r),Q=d(r,"H2",{class:!0});var un=i(Q);fe=d(un,"A",{id:!0,class:!0,href:!0});var Ad=i(fe);Tt=d(Ad,"SPAN",{});var Sd=i(Tt);w(Ae.$$.fragment,Sd),Sd.forEach(o),Ad.forEach(o),Pr=h(un),wt=d(un,"SPAN",{});var Id=i(wt);Cr=n(Id,"VisionEncoderDecoderModel"),Id.forEach(o),un.forEach(o),nn=h(r),j=d(r,"DIV",{class:!0});var F=i(j);w(Se.$$.fragment,F),Ar=h(F),X=d(F,"P",{});var at=i(X);Sr=n(at,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Lo=d(at,"A",{href:!0});var Ld=i(Lo);Ir=n(Ld,"from_pretrained()"),Ld.forEach(o),Lr=n(at," function and the decoder is loaded via "),No=d(at,"A",{href:!0});var Nd=i(No);Nr=n(Nd,"from_pretrained()"),Nd.forEach(o),Or=n(at,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),at.forEach(o),Rr=h(F),Ie=d(F,"P",{});var gn=i(Ie);Br=n(gn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Le=d(gn,"A",{href:!0,rel:!0});var Od=i(Le);Gr=n(Od,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),Od.forEach(o),Wr=n(gn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),gn.forEach(o),Ur=h(F),Ne=d(F,"P",{});var _n=i(Ne);Hr=n(_n,"Additionally, in "),Oe=d(_n,"A",{href:!0,rel:!0});var Rd=i(Oe);Zr=n(Rd,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),Rd.forEach(o),Yr=n(_n,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),_n.forEach(o),Jr=h(F),yt=d(F,"P",{});var Bd=i(yt);Kr=n(Bd,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Bd.forEach(o),Qr=h(F),Re=d(F,"P",{});var vn=i(Re);Xr=n(vn,"This model inherits from "),Oo=d(vn,"A",{href:!0});var Gd=i(Oo);ea=n(Gd,"PreTrainedModel"),Gd.forEach(o),oa=n(vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vn.forEach(o),ta=h(F),Be=d(F,"P",{});var bn=i(Be);na=n(bn,"This model is also a PyTorch "),Ge=d(bn,"A",{href:!0,rel:!0});var Wd=i(Ge);ra=n(Wd,"torch.nn.Module"),Wd.forEach(o),aa=n(bn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bn.forEach(o),sa=h(F),G=d(F,"P",{});var _o=i(G);Ro=d(_o,"A",{href:!0});var Ud=i(Ro);da=n(Ud,"VisionEncoderDecoderModel"),Ud.forEach(o),ia=n(_o,` is a generic model class that will be instantiated as a transformer architecture with
one of the base vision model classes of the library as encoder and another one as decoder when created with the
:meth`),Et=d(_o,"EM",{});var Hd=i(Et);ca=n(Hd,"~transformers.AutoModel.from_pretrained"),Hd.forEach(o),la=n(_o,` class method for the encoder and
:meth`),kt=d(_o,"EM",{});var Zd=i(kt);pa=n(Zd,"~transformers.AutoModelForCausalLM.from_pretrained"),Zd.forEach(o),ma=n(_o," class method for the decoder."),_o.forEach(o),ha=h(F),S=d(F,"DIV",{class:!0});var $e=i(S);w(We.$$.fragment,$e),fa=h($e),ee=d($e,"P",{});var st=i(ee);ua=n(st,"The "),Bo=d(st,"A",{href:!0});var Yd=i(Bo);ga=n(Yd,"VisionEncoderDecoderModel"),Yd.forEach(o),_a=n(st," forward method, overrides the "),xt=d(st,"CODE",{});var Jd=i(xt);va=n(Jd,"__call__"),Jd.forEach(o),ba=n(st," special method."),st.forEach(o),Ta=h($e),w(ue.$$.fragment,$e),wa=h($e),w(ge.$$.fragment,$e),$e.forEach(o),ya=h(F),I=d(F,"DIV",{class:!0});var Me=i(I);w(Ue.$$.fragment,Me),Ea=h(Me),$t=d(Me,"P",{});var Kd=i($t);ka=n(Kd,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),Kd.forEach(o),xa=h(Me),oe=d(Me,"P",{});var dt=i(oe);$a=n(dt,"The model is set in evaluation mode by default using "),Mt=d(dt,"CODE",{});var Qd=i(Mt);Ma=n(Qd,"model.eval()"),Qd.forEach(o),ja=n(dt,` (Dropout modules are deactivated). To train
the model, you need to first set it back in training mode with `),jt=d(dt,"CODE",{});var Xd=i(jt);Va=n(Xd,"model.train()"),Xd.forEach(o),Da=n(dt,"."),dt.forEach(o),qa=h(Me),w(_e.$$.fragment,Me),Me.forEach(o),F.forEach(o),rn=h(r),te=d(r,"H2",{class:!0});var Tn=i(te);ve=d(Tn,"A",{id:!0,class:!0,href:!0});var ei=i(ve);Vt=d(ei,"SPAN",{});var oi=i(Vt);w(He.$$.fragment,oi),oi.forEach(o),ei.forEach(o),Fa=h(Tn),Dt=d(Tn,"SPAN",{});var ti=i(Dt);za=n(ti,"TFVisionEncoderDecoderModel"),ti.forEach(o),Tn.forEach(o),an=h(r),V=d(r,"DIV",{class:!0});var z=i(V);w(Ze.$$.fragment,z),Pa=h(z),ne=d(z,"P",{});var it=i(ne);Ca=n(it,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Go=d(it,"A",{href:!0});var ni=i(Go);Aa=n(ni,"from_pretrained()"),ni.forEach(o),Sa=n(it," function and the decoder is loaded via "),Wo=d(it,"A",{href:!0});var ri=i(Wo);Ia=n(ri,"from_pretrained()"),ri.forEach(o),La=n(it,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),it.forEach(o),Na=h(z),Ye=d(z,"P",{});var wn=i(Ye);Oa=n(wn,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),Je=d(wn,"A",{href:!0,rel:!0});var ai=i(Je);Ra=n(ai,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),ai.forEach(o),Ba=n(wn,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),wn.forEach(o),Ga=h(z),Ke=d(z,"P",{});var yn=i(Ke);Wa=n(yn,"Additionally, in "),Qe=d(yn,"A",{href:!0,rel:!0});var si=i(Qe);Ua=n(si,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),si.forEach(o),Ha=n(yn,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),yn.forEach(o),Za=h(z),qt=d(z,"P",{});var di=i(qt);Ya=n(di,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),di.forEach(o),Ja=h(z),Xe=d(z,"P",{});var En=i(Xe);Ka=n(En,"This model inherits from "),Uo=d(En,"A",{href:!0});var ii=i(Uo);Qa=n(ii,"TFPreTrainedModel"),ii.forEach(o),Xa=n(En,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),En.forEach(o),es=h(z),eo=d(z,"P",{});var kn=i(eo);os=n(kn,"This model is also a "),oo=d(kn,"A",{href:!0,rel:!0});var ci=i(oo);ts=n(ci,"tf.keras.Model"),ci.forEach(o),ns=n(kn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kn.forEach(o),rs=h(z),W=d(z,"P",{});var vo=i(W);Ho=d(vo,"A",{href:!0});var li=i(Ho);as=n(li,"TFVisionEncoderDecoderModel"),li.forEach(o),ss=n(vo,` is a generic model class that will be instantiated as a transformer architecture
with one of the base vision model classes of the library as encoder and another one of the base model classes as
decoder when created with the `),Zo=d(vo,"A",{href:!0});var pi=i(Zo);ds=n(pi,"from_pretrained()"),pi.forEach(o),is=n(vo,` class method for the encoder and
`),Yo=d(vo,"A",{href:!0});var mi=i(Yo);cs=n(mi,"from_pretrained()"),mi.forEach(o),ls=n(vo," class method for the decoder."),vo.forEach(o),ps=h(z),L=d(z,"DIV",{class:!0});var je=i(L);w(to.$$.fragment,je),ms=h(je),re=d(je,"P",{});var ct=i(re);hs=n(ct,"The "),Jo=d(ct,"A",{href:!0});var hi=i(Jo);fs=n(hi,"TFVisionEncoderDecoderModel"),hi.forEach(o),us=n(ct," forward method, overrides the "),Ft=d(ct,"CODE",{});var fi=i(Ft);gs=n(fi,"__call__"),fi.forEach(o),_s=n(ct," special method."),ct.forEach(o),vs=h(je),w(be.$$.fragment,je),bs=h(je),w(Te.$$.fragment,je),je.forEach(o),Ts=h(z),U=d(z,"DIV",{class:!0});var lt=i(U);w(no.$$.fragment,lt),ws=h(lt),zt=d(lt,"P",{});var ui=i(zt);ys=n(ui,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),ui.forEach(o),Es=h(lt),w(we.$$.fragment,lt),lt.forEach(o),z.forEach(o),sn=h(r),ae=d(r,"H2",{class:!0});var xn=i(ae);ye=d(xn,"A",{id:!0,class:!0,href:!0});var gi=i(ye);Pt=d(gi,"SPAN",{});var _i=i(Pt);w(ro.$$.fragment,_i),_i.forEach(o),gi.forEach(o),ks=h(xn),Ct=d(xn,"SPAN",{});var vi=i(Ct);xs=n(vi,"FlaxVisionEncoderDecoderModel"),vi.forEach(o),xn.forEach(o),dn=h(r),D=d(r,"DIV",{class:!0});var P=i(D);w(ao.$$.fragment,P),$s=h(P),se=d(P,"P",{});var pt=i(se);Ms=n(pt,`This class can be used to initialize an image-to-text-sequence model with any pretrained vision autoencoding model
as the encoder and any pretrained text autoregressive model as the decoder. The encoder is loaded via
`),Ko=d(pt,"A",{href:!0});var bi=i(Ko);js=n(bi,"from_pretrained()"),bi.forEach(o),Vs=n(pt," function and the decoder is loaded via "),Qo=d(pt,"A",{href:!0});var Ti=i(Qo);Ds=n(Ti,"from_pretrained()"),Ti.forEach(o),qs=n(pt,`
function. Cross-attention layers are automatically added to the decoder and should be fine-tuned on a downstream
generative task, like image captioning.`),pt.forEach(o),Fs=h(P),so=d(P,"P",{});var $n=i(so);zs=n($n,`The effectiveness of initializing sequence-to-sequence models with pretrained checkpoints for sequence generation
tasks was shown in `),io=d($n,"A",{href:!0,rel:!0});var wi=i(io);Ps=n(wi,`Leveraging Pre-trained Checkpoints for Sequence Generation
Tasks`),wi.forEach(o),Cs=n($n,` by Sascha Rothe, Shashi Narayan, Aliaksei Severyn. Michael Matena, Yanqi
Zhou, Wei Li, Peter J. Liu.`),$n.forEach(o),As=h(P),co=d(P,"P",{});var Mn=i(co);Ss=n(Mn,"Additionally, in "),lo=d(Mn,"A",{href:!0,rel:!0});var yi=i(lo);Is=n(yi,`TrOCR: Transformer-based Optical Character Recognition with Pre-trained
Models`),yi.forEach(o),Ls=n(Mn,` it is shown how leveraging large pretrained vision models for optical
character recognition (OCR) yields a significant performance improvement.`),Mn.forEach(o),Ns=h(P),At=d(P,"P",{});var Ei=i(At);Os=n(Ei,`After such a Vision-Encoder-Text-Decoder model has been trained/fine-tuned, it can be saved/loaded just like any
other models (see the examples for more information).`),Ei.forEach(o),Rs=h(P),po=d(P,"P",{});var jn=i(po);Bs=n(jn,"This model inherits from "),Xo=d(jn,"A",{href:!0});var ki=i(Xo);Gs=n(ki,"FlaxPreTrainedModel"),ki.forEach(o),Ws=n(jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jn.forEach(o),Us=h(P),mo=d(P,"P",{});var Vn=i(mo);Hs=n(Vn,`This model is also a Flax Linen
`),ho=d(Vn,"A",{href:!0,rel:!0});var xi=i(ho);Zs=n(xi,"flax.nn.Module"),xi.forEach(o),Ys=n(Vn,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Vn.forEach(o),Js=h(P),H=d(P,"P",{});var bo=i(H);et=d(bo,"A",{href:!0});var $i=i(et);Ks=n($i,"FlaxVisionEncoderDecoderModel"),$i.forEach(o),Qs=n(bo,` is a generic model class that will be instantiated as a transformer architecture
with the module (flax.nn.Module) of one of the base vision model classes of the library as encoder module and
another one as decoder module when created with the :meth`),St=d(bo,"EM",{});var Mi=i(St);Xs=n(Mi,"~transformers.FlaxAutoModel.from_pretrained"),Mi.forEach(o),ed=n(bo,` class method
for the encoder and :meth`),It=d(bo,"EM",{});var ji=i(It);od=n(ji,"~transformers.FlaxAutoModelForCausalLM.from_pretrained"),ji.forEach(o),td=n(bo," class method for the decoder."),bo.forEach(o),nd=h(P),N=d(P,"DIV",{class:!0});var Ve=i(N);w(fo.$$.fragment,Ve),rd=h(Ve),de=d(Ve,"P",{});var mt=i(de);ad=n(mt,"The "),ot=d(mt,"A",{href:!0});var Vi=i(ot);sd=n(Vi,"FlaxVisionEncoderDecoderModel"),Vi.forEach(o),dd=n(mt," forward method, overrides the "),Lt=d(mt,"CODE",{});var Di=i(Lt);id=n(Di,"__call__"),Di.forEach(o),cd=n(mt," special method."),mt.forEach(o),ld=h(Ve),w(Ee.$$.fragment,Ve),pd=h(Ve),w(ke.$$.fragment,Ve),Ve.forEach(o),md=h(P),Z=d(P,"DIV",{class:!0});var ht=i(Z);w(uo.$$.fragment,ht),hd=h(ht),Nt=d(ht,"P",{});var qi=i(Nt);fd=n(qi,`Instantiate an encoder and a decoder from one or two base classes of the library from pretrained model
checkpoints.`),qi.forEach(o),ud=h(ht),w(xe.$$.fragment,ht),ht.forEach(o),P.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Zi)),c(p,"id","vision-encoder-decoder-models"),c(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(p,"href","#vision-encoder-decoder-models"),c(u,"class","relative group"),c(Eo,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(ko,"href","vit"),c(xo,"href","beit"),c($o,"href","deit"),c(Mo,"href","swin"),c(jo,"href","roberta"),c(Vo,"href","gpt2"),c(Do,"href","bert"),c(qo,"href","distilbert"),c(De,"href","https://arxiv.org/abs/2109.10282"),c(De,"rel","nofollow"),c(Fo,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(zo,"href","trocr"),c(ce,"id","transformers.VisionEncoderDecoderConfig"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#transformers.VisionEncoderDecoderConfig"),c(Y,"class","relative group"),c(Po,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(Co,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Ao,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(So,"href","/docs/transformers/v4.20.1/en/main_classes/configuration#transformers.PretrainedConfig"),c(Io,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderConfig"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"id","transformers.VisionEncoderDecoderModel"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#transformers.VisionEncoderDecoderModel"),c(Q,"class","relative group"),c(Lo,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(No,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Le,"href","https://arxiv.org/abs/1907.12461"),c(Le,"rel","nofollow"),c(Oe,"href","https://arxiv.org/abs/2109.10282"),c(Oe,"rel","nofollow"),c(Oo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel"),c(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ge,"rel","nofollow"),c(Ro,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(Bo,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.VisionEncoderDecoderModel"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ve,"id","transformers.TFVisionEncoderDecoderModel"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.TFVisionEncoderDecoderModel"),c(te,"class","relative group"),c(Go,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Wo,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Je,"href","https://arxiv.org/abs/1907.12461"),c(Je,"rel","nofollow"),c(Qe,"href","https://arxiv.org/abs/2109.10282"),c(Qe,"rel","nofollow"),c(Uo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),c(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(oo,"rel","nofollow"),c(Ho,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(Zo,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Yo,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Jo,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.TFVisionEncoderDecoderModel"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.FlaxVisionEncoderDecoderModel"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.FlaxVisionEncoderDecoderModel"),c(ae,"class","relative group"),c(Ko,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(Qo,"href","/docs/transformers/v4.20.1/en/model_doc/auto#transformers.FlaxAutoModelForVision2Seq.from_pretrained"),c(io,"href","https://arxiv.org/abs/1907.12461"),c(io,"rel","nofollow"),c(lo,"href","https://arxiv.org/abs/2109.10282"),c(lo,"rel","nofollow"),c(Xo,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ho,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ho,"rel","nofollow"),c(et,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(ot,"href","/docs/transformers/v4.20.1/en/model_doc/vision-encoder-decoder#transformers.FlaxVisionEncoderDecoderModel"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){e(document.head,l),b(r,v,_),b(r,u,_),e(u,p),e(p,g),y(a,g,null),e(u,f),e(u,A),e(A,Dn),b(r,Kt,_),b(r,$,_),e($,qn),e($,Eo),e(Eo,Fn),e($,zn),e($,ft),e(ft,Pn),e($,Cn),e($,ko),e(ko,An),e($,Sn),e($,xo),e(xo,In),e($,Ln),e($,$o),e($o,Nn),e($,On),e($,Mo),e(Mo,Rn),e($,Bn),e($,ut),e(ut,Gn),e($,Wn),e($,jo),e(jo,Un),e($,Hn),e($,Vo),e(Vo,Zn),e($,Yn),e($,Do),e(Do,Jn),e($,Kn),e($,qo),e(qo,Qn),e($,Xn),b(r,Qt,_),b(r,ie,_),e(ie,er),e(ie,De),e(De,or),e(ie,tr),b(r,Xt,_),b(r,B,_),e(B,nr),e(B,Fo),e(Fo,rr),e(B,ar),e(B,zo),e(zo,sr),e(B,dr),b(r,en,_),b(r,Y,_),e(Y,ce),e(ce,gt),y(qe,gt,null),e(Y,ir),e(Y,_t),e(_t,cr),b(r,on,_),b(r,C,_),y(Fe,C,null),e(C,lr),e(C,le),e(le,Po),e(Po,pr),e(le,mr),e(le,Co),e(Co,hr),e(le,fr),e(C,ur),e(C,J),e(J,gr),e(J,Ao),e(Ao,_r),e(J,vr),e(J,So),e(So,br),e(J,Tr),e(C,wr),y(pe,C,null),e(C,yr),e(C,me),y(ze,me,null),e(me,Er),e(me,Pe),e(Pe,kr),e(Pe,Io),e(Io,xr),e(Pe,$r),e(C,Mr),e(C,he),y(Ce,he,null),e(he,jr),e(he,K),e(K,Vr),e(K,vt),e(vt,Dr),e(K,qr),e(K,bt),e(bt,Fr),e(K,zr),b(r,tn,_),b(r,Q,_),e(Q,fe),e(fe,Tt),y(Ae,Tt,null),e(Q,Pr),e(Q,wt),e(wt,Cr),b(r,nn,_),b(r,j,_),y(Se,j,null),e(j,Ar),e(j,X),e(X,Sr),e(X,Lo),e(Lo,Ir),e(X,Lr),e(X,No),e(No,Nr),e(X,Or),e(j,Rr),e(j,Ie),e(Ie,Br),e(Ie,Le),e(Le,Gr),e(Ie,Wr),e(j,Ur),e(j,Ne),e(Ne,Hr),e(Ne,Oe),e(Oe,Zr),e(Ne,Yr),e(j,Jr),e(j,yt),e(yt,Kr),e(j,Qr),e(j,Re),e(Re,Xr),e(Re,Oo),e(Oo,ea),e(Re,oa),e(j,ta),e(j,Be),e(Be,na),e(Be,Ge),e(Ge,ra),e(Be,aa),e(j,sa),e(j,G),e(G,Ro),e(Ro,da),e(G,ia),e(G,Et),e(Et,ca),e(G,la),e(G,kt),e(kt,pa),e(G,ma),e(j,ha),e(j,S),y(We,S,null),e(S,fa),e(S,ee),e(ee,ua),e(ee,Bo),e(Bo,ga),e(ee,_a),e(ee,xt),e(xt,va),e(ee,ba),e(S,Ta),y(ue,S,null),e(S,wa),y(ge,S,null),e(j,ya),e(j,I),y(Ue,I,null),e(I,Ea),e(I,$t),e($t,ka),e(I,xa),e(I,oe),e(oe,$a),e(oe,Mt),e(Mt,Ma),e(oe,ja),e(oe,jt),e(jt,Va),e(oe,Da),e(I,qa),y(_e,I,null),b(r,rn,_),b(r,te,_),e(te,ve),e(ve,Vt),y(He,Vt,null),e(te,Fa),e(te,Dt),e(Dt,za),b(r,an,_),b(r,V,_),y(Ze,V,null),e(V,Pa),e(V,ne),e(ne,Ca),e(ne,Go),e(Go,Aa),e(ne,Sa),e(ne,Wo),e(Wo,Ia),e(ne,La),e(V,Na),e(V,Ye),e(Ye,Oa),e(Ye,Je),e(Je,Ra),e(Ye,Ba),e(V,Ga),e(V,Ke),e(Ke,Wa),e(Ke,Qe),e(Qe,Ua),e(Ke,Ha),e(V,Za),e(V,qt),e(qt,Ya),e(V,Ja),e(V,Xe),e(Xe,Ka),e(Xe,Uo),e(Uo,Qa),e(Xe,Xa),e(V,es),e(V,eo),e(eo,os),e(eo,oo),e(oo,ts),e(eo,ns),e(V,rs),e(V,W),e(W,Ho),e(Ho,as),e(W,ss),e(W,Zo),e(Zo,ds),e(W,is),e(W,Yo),e(Yo,cs),e(W,ls),e(V,ps),e(V,L),y(to,L,null),e(L,ms),e(L,re),e(re,hs),e(re,Jo),e(Jo,fs),e(re,us),e(re,Ft),e(Ft,gs),e(re,_s),e(L,vs),y(be,L,null),e(L,bs),y(Te,L,null),e(V,Ts),e(V,U),y(no,U,null),e(U,ws),e(U,zt),e(zt,ys),e(U,Es),y(we,U,null),b(r,sn,_),b(r,ae,_),e(ae,ye),e(ye,Pt),y(ro,Pt,null),e(ae,ks),e(ae,Ct),e(Ct,xs),b(r,dn,_),b(r,D,_),y(ao,D,null),e(D,$s),e(D,se),e(se,Ms),e(se,Ko),e(Ko,js),e(se,Vs),e(se,Qo),e(Qo,Ds),e(se,qs),e(D,Fs),e(D,so),e(so,zs),e(so,io),e(io,Ps),e(so,Cs),e(D,As),e(D,co),e(co,Ss),e(co,lo),e(lo,Is),e(co,Ls),e(D,Ns),e(D,At),e(At,Os),e(D,Rs),e(D,po),e(po,Bs),e(po,Xo),e(Xo,Gs),e(po,Ws),e(D,Us),e(D,mo),e(mo,Hs),e(mo,ho),e(ho,Zs),e(mo,Ys),e(D,Js),e(D,H),e(H,et),e(et,Ks),e(H,Qs),e(H,St),e(St,Xs),e(H,ed),e(H,It),e(It,od),e(H,td),e(D,nd),e(D,N),y(fo,N,null),e(N,rd),e(N,de),e(de,ad),e(de,ot),e(ot,sd),e(de,dd),e(de,Lt),e(Lt,id),e(de,cd),e(N,ld),y(Ee,N,null),e(N,pd),y(ke,N,null),e(D,md),e(D,Z),y(uo,Z,null),e(Z,hd),e(Z,Nt),e(Nt,fd),e(Z,ud),y(xe,Z,null),cn=!0},p(r,[_]){const go={};_&2&&(go.$$scope={dirty:_,ctx:r}),pe.$set(go);const Ot={};_&2&&(Ot.$$scope={dirty:_,ctx:r}),ue.$set(Ot);const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:r}),ge.$set(Rt);const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:r}),_e.$set(Bt);const M={};_&2&&(M.$$scope={dirty:_,ctx:r}),be.$set(M);const Gt={};_&2&&(Gt.$$scope={dirty:_,ctx:r}),Te.$set(Gt);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:r}),we.$set(Wt);const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:r}),Ee.$set(Ut);const Ht={};_&2&&(Ht.$$scope={dirty:_,ctx:r}),ke.$set(Ht);const Zt={};_&2&&(Zt.$$scope={dirty:_,ctx:r}),xe.$set(Zt)},i(r){cn||(E(a.$$.fragment,r),E(qe.$$.fragment,r),E(Fe.$$.fragment,r),E(pe.$$.fragment,r),E(ze.$$.fragment,r),E(Ce.$$.fragment,r),E(Ae.$$.fragment,r),E(Se.$$.fragment,r),E(We.$$.fragment,r),E(ue.$$.fragment,r),E(ge.$$.fragment,r),E(Ue.$$.fragment,r),E(_e.$$.fragment,r),E(He.$$.fragment,r),E(Ze.$$.fragment,r),E(to.$$.fragment,r),E(be.$$.fragment,r),E(Te.$$.fragment,r),E(no.$$.fragment,r),E(we.$$.fragment,r),E(ro.$$.fragment,r),E(ao.$$.fragment,r),E(fo.$$.fragment,r),E(Ee.$$.fragment,r),E(ke.$$.fragment,r),E(uo.$$.fragment,r),E(xe.$$.fragment,r),cn=!0)},o(r){k(a.$$.fragment,r),k(qe.$$.fragment,r),k(Fe.$$.fragment,r),k(pe.$$.fragment,r),k(ze.$$.fragment,r),k(Ce.$$.fragment,r),k(Ae.$$.fragment,r),k(Se.$$.fragment,r),k(We.$$.fragment,r),k(ue.$$.fragment,r),k(ge.$$.fragment,r),k(Ue.$$.fragment,r),k(_e.$$.fragment,r),k(He.$$.fragment,r),k(Ze.$$.fragment,r),k(to.$$.fragment,r),k(be.$$.fragment,r),k(Te.$$.fragment,r),k(no.$$.fragment,r),k(we.$$.fragment,r),k(ro.$$.fragment,r),k(ao.$$.fragment,r),k(fo.$$.fragment,r),k(Ee.$$.fragment,r),k(ke.$$.fragment,r),k(uo.$$.fragment,r),k(xe.$$.fragment,r),cn=!1},d(r){o(l),r&&o(v),r&&o(u),x(a),r&&o(Kt),r&&o($),r&&o(Qt),r&&o(ie),r&&o(Xt),r&&o(B),r&&o(en),r&&o(Y),x(qe),r&&o(on),r&&o(C),x(Fe),x(pe),x(ze),x(Ce),r&&o(tn),r&&o(Q),x(Ae),r&&o(nn),r&&o(j),x(Se),x(We),x(ue),x(ge),x(Ue),x(_e),r&&o(rn),r&&o(te),x(He),r&&o(an),r&&o(V),x(Ze),x(to),x(be),x(Te),x(no),x(we),r&&o(sn),r&&o(ae),x(ro),r&&o(dn),r&&o(D),x(ao),x(fo),x(Ee),x(ke),x(uo),x(xe)}}}const Zi={local:"vision-encoder-decoder-models",sections:[{local:"transformers.VisionEncoderDecoderConfig",title:"VisionEncoderDecoderConfig"},{local:"transformers.VisionEncoderDecoderModel",title:"VisionEncoderDecoderModel"},{local:"transformers.TFVisionEncoderDecoderModel",title:"TFVisionEncoderDecoderModel"},{local:"transformers.FlaxVisionEncoderDecoderModel",title:"FlaxVisionEncoderDecoderModel"}],title:"Vision Encoder Decoder Models"};function Yi(q){return Ai(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tc extends Fi{constructor(l){super();zi(this,l,Yi,Hi,Pi,{})}}export{tc as default,Zi as metadata};
