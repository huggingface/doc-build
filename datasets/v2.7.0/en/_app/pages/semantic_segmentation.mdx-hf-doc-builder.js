import{S as Qe,i as Xe,s as Ze,e as l,k as m,w as _,t as i,M as st,c as o,d as a,m as c,a as p,x as j,h as r,b as f,N as Ss,G as e,g as n,y as v,q as y,o as b,B as k,v as at}from"../chunks/vendor-hf-doc-builder.js";import{T as et}from"../chunks/Tip-hf-doc-builder.js";import{I as tt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as z}from"../chunks/CodeBlock-hf-doc-builder.js";function nt(Ls){let g,C,h,d,P;return{c(){g=l("p"),C=i(`Now that you know how to process a dataset for semantic segmentation, learn
`),h=l("a"),d=i("how to train a semantic segmentation model"),P=i(`
and use it for inference.`),this.h()},l(u){g=o(u,"P",{});var $=p(g);C=r($,`Now that you know how to process a dataset for semantic segmentation, learn
`),h=o($,"A",{href:!0,rel:!0});var I=p(h);d=r(I,"how to train a semantic segmentation model"),I.forEach(a),P=r($,`
and use it for inference.`),$.forEach(a),this.h()},h(){f(h,"href","https://huggingface.co/docs/transformers/tasks/semantic_segmentation"),f(h,"rel","nofollow")},m(u,$){n(u,g,$),e(g,C),e(g,h),e(h,d),e(g,P)},d(u){u&&a(g)}}}function lt(Ls){let g,C,h,d,P,u,$,I,ya,Rs,ns,ba,Bs,x,ka,js,$a,xa,vs,wa,Ea,Os,O,Ts,T,N,qa,za,Ns,A,Pa,G,Ca,Ia,Gs,D,Aa,ys,Da,Sa,Ms,M,Js,ls,La,Us,w,os,bs,Ra,Ba,Oa,is,ks,Ta,Na,Ga,rs,$s,Ma,Ja,Vs,ps,Ua,Fs,J,Ys,U,xs,_e,Ws,ms,Va,Hs,V,Ks,F,ws,je,Qs,S,Fa,Y,Ya,Wa,Xs,cs,Ha,Zs,W,sa,H,Es,ve,aa,L,Ka,qs,Qa,Xa,ea,K,ta,fs,Za,na,Q,la,R,se,gs,ae,ee,oa,X,ia,E,te,zs,ne,le,Ps,oe,ie,ra,Z,pa,ss,Cs,ye,ma,q,re,Is,pe,me,As,ce,fe,ca,as,fa,es,Ds,be,ga,B,ha;return u=new tt({}),O=new z({props:{code:"pip install -U albumentations opencv-python",highlighted:"pip install -U albumentations opencv-python"}}),M=new z({props:{code:`from datasets import load_dataset

dataset = load_dataset("scene_parse_150", split="train")
index = 10
dataset[index]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;scene_parse_150&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>index = <span class="hljs-number">10</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=683x512 at <span class="hljs-number">0x7FB37B0EC810</span>&gt;,
 <span class="hljs-string">&#x27;annotation&#x27;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=L size=683x512 at <span class="hljs-number">0x7FB37B0EC9D0</span>&gt;,
 <span class="hljs-string">&#x27;scene_category&#x27;</span>: <span class="hljs-number">927</span>}`}}),J=new z({props:{code:'dataset[index]["image"]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index][<span class="hljs-string">&quot;image&quot;</span>]'}}),V=new z({props:{code:'dataset[index]["annotation"]',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[index][<span class="hljs-string">&quot;annotation&quot;</span>]'}}),W=new z({props:{code:`import matplotlib.pyplot as plt

def visualize_seg_mask(image: np.ndarray, mask: np.ndarray):
   color_seg = np.zeros((mask.shape[0], mask.shape[1], 3), dtype=np.uint8)
   palette = np.array(create_ade20k_label_colormap())
   for label, color in enumerate(palette):
       color_seg[mask == label, :] = color
   color_seg = color_seg[..., ::-1]  # convert to BGR

   img = np.array(image) * 0.5 + color_seg * 0.5  # plot the image with the segmentation map
   img = img.astype(np.uint8)

   plt.figure(figsize=(15, 10))
   plt.imshow(img)
   plt.axis("off")
   plt.show()


visualize_seg_mask(
    np.array(dataset[index]["image"]),
    np.array(dataset[index]["annotation"])
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">visualize_seg_mask</span>(<span class="hljs-params">image: np.ndarray, mask: np.ndarray</span>):
<span class="hljs-meta">... </span>   color_seg = np.zeros((mask.shape[<span class="hljs-number">0</span>], mask.shape[<span class="hljs-number">1</span>], <span class="hljs-number">3</span>), dtype=np.uint8)
<span class="hljs-meta">... </span>   palette = np.array(create_ade20k_label_colormap())
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> label, color <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(palette):
<span class="hljs-meta">... </span>       color_seg[mask == label, :] = color
<span class="hljs-meta">... </span>   color_seg = color_seg[..., ::-<span class="hljs-number">1</span>]  <span class="hljs-comment"># convert to BGR</span>

<span class="hljs-meta">... </span>   img = np.array(image) * <span class="hljs-number">0.5</span> + color_seg * <span class="hljs-number">0.5</span>  <span class="hljs-comment"># plot the image with the segmentation map</span>
<span class="hljs-meta">... </span>   img = img.astype(np.uint8)

<span class="hljs-meta">... </span>   plt.figure(figsize=(<span class="hljs-number">15</span>, <span class="hljs-number">10</span>))
<span class="hljs-meta">... </span>   plt.imshow(img)
<span class="hljs-meta">... </span>   plt.axis(<span class="hljs-string">&quot;off&quot;</span>)
<span class="hljs-meta">... </span>   plt.show()


<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(
<span class="hljs-meta">... </span>    np.array(dataset[index][<span class="hljs-string">&quot;image&quot;</span>]),
<span class="hljs-meta">... </span>    np.array(dataset[index][<span class="hljs-string">&quot;annotation&quot;</span>])
<span class="hljs-meta">... </span>)`}}),K=new z({props:{code:`import albumentations as A

transform = A.Compose(
    [
        A.Resize(256, 256),
        A.RandomBrightnessContrast(brightness_limit=0.3, contrast_limit=0.3, p=0.5),
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> albumentations <span class="hljs-keyword">as</span> A

<span class="hljs-meta">&gt;&gt;&gt; </span>transform = A.Compose(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        A.Resize(<span class="hljs-number">256</span>, <span class="hljs-number">256</span>),
<span class="hljs-meta">... </span>        A.RandomBrightnessContrast(brightness_limit=<span class="hljs-number">0.3</span>, contrast_limit=<span class="hljs-number">0.3</span>, p=<span class="hljs-number">0.5</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),Q=new z({props:{code:`def transforms(examples):
    transformed_images, transformed_masks = [], []
    for image, seg_mask in zip(examples["image"], examples["annotation"]):
        image, seg_mask = np.array(image), np.array(seg_mask)
        transformed = transform(image=image, mask=seg_mask)
        transformed_images.append(transformed["image"])
        transformed_masks.append(transformed["mask"])
    examples["pixel_values"] = transformed_images
    examples["label"] = transformed_masks
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    transformed_images, transformed_masks = [], []
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> image, seg_mask <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(examples[<span class="hljs-string">&quot;image&quot;</span>], examples[<span class="hljs-string">&quot;annotation&quot;</span>]):
<span class="hljs-meta">... </span>        image, seg_mask = np.array(image), np.array(seg_mask)
<span class="hljs-meta">... </span>        transformed = transform(image=image, mask=seg_mask)
<span class="hljs-meta">... </span>        transformed_images.append(transformed[<span class="hljs-string">&quot;image&quot;</span>])
<span class="hljs-meta">... </span>        transformed_masks.append(transformed[<span class="hljs-string">&quot;mask&quot;</span>])
...
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = transformed_images
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;label&quot;</span>] = transformed_masks
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),X=new z({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),Z=new z({props:{code:`image = np.array(dataset[index]["pixel_values"])
mask = np.array(dataset[index]["label"])

visualize_seg_mask(image, mask)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.array(dataset[index][<span class="hljs-string">&quot;pixel_values&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>mask = np.array(dataset[index][<span class="hljs-string">&quot;label&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(image, mask)`}}),as=new z({props:{code:`from torchvision.transforms import Resize, ColorJitter, Compose

transformation_chain = Compose([
    Resize((256, 256)),
    ColorJitter(brightness=0.25, contrast=0.25, saturation=0.25, hue=0.1)
])
resize = Resize((256, 256))

def train_transforms(example_batch):
    example_batch["pixel_values"] = [transformation_chain(x) for x in example_batch["image"]]
    example_batch["label"] = [resize(x) for x in example_batch["annotation"]]
    return example_batch

dataset.set_transform(train_transforms)

image = np.array(dataset[index]["pixel_values"])
mask = np.array(dataset[index]["label"])

visualize_seg_mask(image, mask)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> Resize, ColorJitter, Compose

<span class="hljs-meta">&gt;&gt;&gt; </span>transformation_chain = Compose([
<span class="hljs-meta">... </span>    Resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>)),
<span class="hljs-meta">... </span>    ColorJitter(brightness=<span class="hljs-number">0.25</span>, contrast=<span class="hljs-number">0.25</span>, saturation=<span class="hljs-number">0.25</span>, hue=<span class="hljs-number">0.1</span>)
<span class="hljs-meta">... </span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>resize = Resize((<span class="hljs-number">256</span>, <span class="hljs-number">256</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">train_transforms</span>(<span class="hljs-params">example_batch</span>):
<span class="hljs-meta">... </span>    example_batch[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [transformation_chain(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example_batch[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    example_batch[<span class="hljs-string">&quot;label&quot;</span>] = [resize(x) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> example_batch[<span class="hljs-string">&quot;annotation&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> example_batch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(train_transforms)

<span class="hljs-meta">&gt;&gt;&gt; </span>image = np.array(dataset[index][<span class="hljs-string">&quot;pixel_values&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>mask = np.array(dataset[index][<span class="hljs-string">&quot;label&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>visualize_seg_mask(image, mask)`}}),B=new et({props:{$$slots:{default:[nt]},$$scope:{ctx:Ls}}}),{c(){g=l("meta"),C=m(),h=l("h1"),d=l("a"),P=l("span"),_(u.$$.fragment),$=m(),I=l("span"),ya=i("Semantic segmentation"),Rs=m(),ns=l("p"),ba=i(`Semantic segmentation datasets are used to train a model to classify every pixel in an image. There are
a wide variety of applications enabled by these datasets such as background removal from images, stylizing
images, or scene understanding for autonomous driving. This guide will show you how to apply transformations
to an image segmentation dataset.`),Bs=m(),x=l("p"),ka=i("Before you start, make sure you have up-to-date versions of "),js=l("code"),$a=i("albumentations"),xa=i(" and "),vs=l("code"),wa=i("cv2"),Ea=i(" installed:"),Os=m(),_(O.$$.fragment),Ts=m(),T=l("p"),N=l("a"),qa=i("Albumentations"),za=i(` is a Python library for performing data augmentation
for computer vision. It supports various computer vision tasks such as image classification, object
detection, segmentation, and keypoint estimation.`),Ns=m(),A=l("p"),Pa=i("This guide uses the "),G=l("a"),Ca=i("Scene Parsing"),Ia=i(` dataset for segmenting
and parsing an image into different image regions associated with semantic categories, such as sky, road, person, and bed.`),Gs=m(),D=l("p"),Aa=i("Load the "),ys=l("code"),Da=i("train"),Sa=i(" split of the dataset and take a look at an example:"),Ms=m(),_(M.$$.fragment),Js=m(),ls=l("p"),La=i("The dataset has three fields:"),Us=m(),w=l("ul"),os=l("li"),bs=l("code"),Ra=i("image"),Ba=i(": a PIL image object."),Oa=m(),is=l("li"),ks=l("code"),Ta=i("annotation"),Na=i(": segmentation mask of the image."),Ga=m(),rs=l("li"),$s=l("code"),Ma=i("scene_category"),Ja=i(": the label or scene category of the image (like \u201Ckitchen\u201D or \u201Coffice\u201D)."),Vs=m(),ps=l("p"),Ua=i("Next, check out an image with:"),Fs=m(),_(J.$$.fragment),Ys=m(),U=l("div"),xs=l("img"),Ws=m(),ms=l("p"),Va=i("Similarly, you can check out the respective segmentation mask:"),Hs=m(),_(V.$$.fragment),Ks=m(),F=l("div"),ws=l("img"),Qs=m(),S=l("p"),Fa=i("We can also add a "),Y=l("a"),Ya=i("color palette"),Wa=i(` on the
segmentation mask and overlay it on top of the original image to visualize the dataset:`),Xs=m(),cs=l("p"),Ha=i("After defining the color palette, you should be ready to visualize some overlays."),Zs=m(),_(W.$$.fragment),sa=m(),H=l("div"),Es=l("img"),aa=m(),L=l("p"),Ka=i("Now apply some augmentations with "),qs=l("code"),Qa=i("albumentations"),Xa=i(". You\u2019ll first resize the image and adjust its brightness."),ea=m(),_(K.$$.fragment),ta=m(),fs=l("p"),Za=i("Create a function to apply the transformation to the images:"),na=m(),_(Q.$$.fragment),la=m(),R=l("p"),se=i("Use the "),gs=l("a"),ae=i("set_transform()"),ee=i(" function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),oa=m(),_(X.$$.fragment),ia=m(),E=l("p"),te=i("You can verify the transformation worked by indexing into the "),zs=l("code"),ne=i("pixel_values"),le=i(" and "),Ps=l("code"),oe=i("label"),ie=i(" of an example:"),ra=m(),_(Z.$$.fragment),pa=m(),ss=l("div"),Cs=l("img"),ma=m(),q=l("p"),re=i("In this guide, you have used "),Is=l("code"),pe=i("albumentations"),me=i(" for augmenting the dataset. It\u2019s also possible to use "),As=l("code"),ce=i("torchvision"),fe=i(" to apply some similar transforms."),ca=m(),_(as.$$.fragment),fa=m(),es=l("div"),Ds=l("img"),ga=m(),_(B.$$.fragment),this.h()},l(s){const t=st('[data-svelte="svelte-1phssyn"]',document.head);g=o(t,"META",{name:!0,content:!0}),t.forEach(a),C=c(s),h=o(s,"H1",{class:!0});var ts=p(h);d=o(ts,"A",{id:!0,class:!0,href:!0});var ke=p(d);P=o(ke,"SPAN",{});var $e=p(P);j(u.$$.fragment,$e),$e.forEach(a),ke.forEach(a),$=c(ts),I=o(ts,"SPAN",{});var xe=p(I);ya=r(xe,"Semantic segmentation"),xe.forEach(a),ts.forEach(a),Rs=c(s),ns=o(s,"P",{});var we=p(ns);ba=r(we,`Semantic segmentation datasets are used to train a model to classify every pixel in an image. There are
a wide variety of applications enabled by these datasets such as background removal from images, stylizing
images, or scene understanding for autonomous driving. This guide will show you how to apply transformations
to an image segmentation dataset.`),we.forEach(a),Bs=c(s),x=o(s,"P",{});var hs=p(x);ka=r(hs,"Before you start, make sure you have up-to-date versions of "),js=o(hs,"CODE",{});var Ee=p(js);$a=r(Ee,"albumentations"),Ee.forEach(a),xa=r(hs," and "),vs=o(hs,"CODE",{});var qe=p(vs);wa=r(qe,"cv2"),qe.forEach(a),Ea=r(hs," installed:"),hs.forEach(a),Os=c(s),j(O.$$.fragment,s),Ts=c(s),T=o(s,"P",{});var ge=p(T);N=o(ge,"A",{href:!0,rel:!0});var ze=p(N);qa=r(ze,"Albumentations"),ze.forEach(a),za=r(ge,` is a Python library for performing data augmentation
for computer vision. It supports various computer vision tasks such as image classification, object
detection, segmentation, and keypoint estimation.`),ge.forEach(a),Ns=c(s),A=o(s,"P",{});var ua=p(A);Pa=r(ua,"This guide uses the "),G=o(ua,"A",{href:!0,rel:!0});var Pe=p(G);Ca=r(Pe,"Scene Parsing"),Pe.forEach(a),Ia=r(ua,` dataset for segmenting
and parsing an image into different image regions associated with semantic categories, such as sky, road, person, and bed.`),ua.forEach(a),Gs=c(s),D=o(s,"P",{});var da=p(D);Aa=r(da,"Load the "),ys=o(da,"CODE",{});var Ce=p(ys);Da=r(Ce,"train"),Ce.forEach(a),Sa=r(da," split of the dataset and take a look at an example:"),da.forEach(a),Ms=c(s),j(M.$$.fragment,s),Js=c(s),ls=o(s,"P",{});var Ie=p(ls);La=r(Ie,"The dataset has three fields:"),Ie.forEach(a),Us=c(s),w=o(s,"UL",{});var us=p(w);os=o(us,"LI",{});var he=p(os);bs=o(he,"CODE",{});var Ae=p(bs);Ra=r(Ae,"image"),Ae.forEach(a),Ba=r(he,": a PIL image object."),he.forEach(a),Oa=c(us),is=o(us,"LI",{});var ue=p(is);ks=o(ue,"CODE",{});var De=p(ks);Ta=r(De,"annotation"),De.forEach(a),Na=r(ue,": segmentation mask of the image."),ue.forEach(a),Ga=c(us),rs=o(us,"LI",{});var de=p(rs);$s=o(de,"CODE",{});var Se=p($s);Ma=r(Se,"scene_category"),Se.forEach(a),Ja=r(de,": the label or scene category of the image (like \u201Ckitchen\u201D or \u201Coffice\u201D)."),de.forEach(a),us.forEach(a),Vs=c(s),ps=o(s,"P",{});var Le=p(ps);Ua=r(Le,"Next, check out an image with:"),Le.forEach(a),Fs=c(s),j(J.$$.fragment,s),Ys=c(s),U=o(s,"DIV",{class:!0});var Re=p(U);xs=o(Re,"IMG",{src:!0}),Re.forEach(a),Ws=c(s),ms=o(s,"P",{});var Be=p(ms);Va=r(Be,"Similarly, you can check out the respective segmentation mask:"),Be.forEach(a),Hs=c(s),j(V.$$.fragment,s),Ks=c(s),F=o(s,"DIV",{class:!0});var Oe=p(F);ws=o(Oe,"IMG",{src:!0}),Oe.forEach(a),Qs=c(s),S=o(s,"P",{});var _a=p(S);Fa=r(_a,"We can also add a "),Y=o(_a,"A",{href:!0,rel:!0});var Te=p(Y);Ya=r(Te,"color palette"),Te.forEach(a),Wa=r(_a,` on the
segmentation mask and overlay it on top of the original image to visualize the dataset:`),_a.forEach(a),Xs=c(s),cs=o(s,"P",{});var Ne=p(cs);Ha=r(Ne,"After defining the color palette, you should be ready to visualize some overlays."),Ne.forEach(a),Zs=c(s),j(W.$$.fragment,s),sa=c(s),H=o(s,"DIV",{class:!0});var Ge=p(H);Es=o(Ge,"IMG",{src:!0}),Ge.forEach(a),aa=c(s),L=o(s,"P",{});var ja=p(L);Ka=r(ja,"Now apply some augmentations with "),qs=o(ja,"CODE",{});var Me=p(qs);Qa=r(Me,"albumentations"),Me.forEach(a),Xa=r(ja,". You\u2019ll first resize the image and adjust its brightness."),ja.forEach(a),ea=c(s),j(K.$$.fragment,s),ta=c(s),fs=o(s,"P",{});var Je=p(fs);Za=r(Je,"Create a function to apply the transformation to the images:"),Je.forEach(a),na=c(s),j(Q.$$.fragment,s),la=c(s),R=o(s,"P",{});var va=p(R);se=r(va,"Use the "),gs=o(va,"A",{href:!0});var Ue=p(gs);ae=r(Ue,"set_transform()"),Ue.forEach(a),ee=r(va," function to apply the transformation on-the-fly to batches of the dataset to consume less disk space:"),va.forEach(a),oa=c(s),j(X.$$.fragment,s),ia=c(s),E=o(s,"P",{});var ds=p(E);te=r(ds,"You can verify the transformation worked by indexing into the "),zs=o(ds,"CODE",{});var Ve=p(zs);ne=r(Ve,"pixel_values"),Ve.forEach(a),le=r(ds," and "),Ps=o(ds,"CODE",{});var Fe=p(Ps);oe=r(Fe,"label"),Fe.forEach(a),ie=r(ds," of an example:"),ds.forEach(a),ra=c(s),j(Z.$$.fragment,s),pa=c(s),ss=o(s,"DIV",{class:!0});var Ye=p(ss);Cs=o(Ye,"IMG",{src:!0}),Ye.forEach(a),ma=c(s),q=o(s,"P",{});var _s=p(q);re=r(_s,"In this guide, you have used "),Is=o(_s,"CODE",{});var We=p(Is);pe=r(We,"albumentations"),We.forEach(a),me=r(_s," for augmenting the dataset. It\u2019s also possible to use "),As=o(_s,"CODE",{});var He=p(As);ce=r(He,"torchvision"),He.forEach(a),fe=r(_s," to apply some similar transforms."),_s.forEach(a),ca=c(s),j(as.$$.fragment,s),fa=c(s),es=o(s,"DIV",{class:!0});var Ke=p(es);Ds=o(Ke,"IMG",{src:!0}),Ke.forEach(a),ga=c(s),j(B.$$.fragment,s),this.h()},h(){f(g,"name","hf:doc:metadata"),f(g,"content",JSON.stringify(ot)),f(d,"id","semantic-segmentation"),f(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(d,"href","#semantic-segmentation"),f(h,"class","relative group"),f(N,"href","https://albumentations.ai/"),f(N,"rel","nofollow"),f(G,"href","https://huggingface.co/datasets/scene_parse_150"),f(G,"rel","nofollow"),Ss(xs.src,_e="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/image_seg.png")||f(xs,"src",_e),f(U,"class","flex justify-center"),Ss(ws.src,je="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/seg_mask.png")||f(ws,"src",je),f(F,"class","flex justify-center"),f(Y,"href","https://github.com/tensorflow/models/blob/3f1ca33afe3c1631b733ea7e40c294273b9e406d/research/deeplab/utils/get_dataset_colormap.py#L51"),f(Y,"rel","nofollow"),Ss(Es.src,ve="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/seg_overlay.png")||f(Es,"src",ve),f(H,"class","flex justify-center"),f(gs,"href","/docs/datasets/v2.7.0/en/package_reference/main_classes#datasets.Dataset.set_transform"),Ss(Cs.src,ye="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/albumentations_seg.png")||f(Cs,"src",ye),f(ss,"class","flex justify-center"),Ss(Ds.src,be="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/torchvision_seg.png")||f(Ds,"src",be),f(es,"class","flex justify-center")},m(s,t){e(document.head,g),n(s,C,t),n(s,h,t),e(h,d),e(d,P),v(u,P,null),e(h,$),e(h,I),e(I,ya),n(s,Rs,t),n(s,ns,t),e(ns,ba),n(s,Bs,t),n(s,x,t),e(x,ka),e(x,js),e(js,$a),e(x,xa),e(x,vs),e(vs,wa),e(x,Ea),n(s,Os,t),v(O,s,t),n(s,Ts,t),n(s,T,t),e(T,N),e(N,qa),e(T,za),n(s,Ns,t),n(s,A,t),e(A,Pa),e(A,G),e(G,Ca),e(A,Ia),n(s,Gs,t),n(s,D,t),e(D,Aa),e(D,ys),e(ys,Da),e(D,Sa),n(s,Ms,t),v(M,s,t),n(s,Js,t),n(s,ls,t),e(ls,La),n(s,Us,t),n(s,w,t),e(w,os),e(os,bs),e(bs,Ra),e(os,Ba),e(w,Oa),e(w,is),e(is,ks),e(ks,Ta),e(is,Na),e(w,Ga),e(w,rs),e(rs,$s),e($s,Ma),e(rs,Ja),n(s,Vs,t),n(s,ps,t),e(ps,Ua),n(s,Fs,t),v(J,s,t),n(s,Ys,t),n(s,U,t),e(U,xs),n(s,Ws,t),n(s,ms,t),e(ms,Va),n(s,Hs,t),v(V,s,t),n(s,Ks,t),n(s,F,t),e(F,ws),n(s,Qs,t),n(s,S,t),e(S,Fa),e(S,Y),e(Y,Ya),e(S,Wa),n(s,Xs,t),n(s,cs,t),e(cs,Ha),n(s,Zs,t),v(W,s,t),n(s,sa,t),n(s,H,t),e(H,Es),n(s,aa,t),n(s,L,t),e(L,Ka),e(L,qs),e(qs,Qa),e(L,Xa),n(s,ea,t),v(K,s,t),n(s,ta,t),n(s,fs,t),e(fs,Za),n(s,na,t),v(Q,s,t),n(s,la,t),n(s,R,t),e(R,se),e(R,gs),e(gs,ae),e(R,ee),n(s,oa,t),v(X,s,t),n(s,ia,t),n(s,E,t),e(E,te),e(E,zs),e(zs,ne),e(E,le),e(E,Ps),e(Ps,oe),e(E,ie),n(s,ra,t),v(Z,s,t),n(s,pa,t),n(s,ss,t),e(ss,Cs),n(s,ma,t),n(s,q,t),e(q,re),e(q,Is),e(Is,pe),e(q,me),e(q,As),e(As,ce),e(q,fe),n(s,ca,t),v(as,s,t),n(s,fa,t),n(s,es,t),e(es,Ds),n(s,ga,t),v(B,s,t),ha=!0},p(s,[t]){const ts={};t&2&&(ts.$$scope={dirty:t,ctx:s}),B.$set(ts)},i(s){ha||(y(u.$$.fragment,s),y(O.$$.fragment,s),y(M.$$.fragment,s),y(J.$$.fragment,s),y(V.$$.fragment,s),y(W.$$.fragment,s),y(K.$$.fragment,s),y(Q.$$.fragment,s),y(X.$$.fragment,s),y(Z.$$.fragment,s),y(as.$$.fragment,s),y(B.$$.fragment,s),ha=!0)},o(s){b(u.$$.fragment,s),b(O.$$.fragment,s),b(M.$$.fragment,s),b(J.$$.fragment,s),b(V.$$.fragment,s),b(W.$$.fragment,s),b(K.$$.fragment,s),b(Q.$$.fragment,s),b(X.$$.fragment,s),b(Z.$$.fragment,s),b(as.$$.fragment,s),b(B.$$.fragment,s),ha=!1},d(s){a(g),s&&a(C),s&&a(h),k(u),s&&a(Rs),s&&a(ns),s&&a(Bs),s&&a(x),s&&a(Os),k(O,s),s&&a(Ts),s&&a(T),s&&a(Ns),s&&a(A),s&&a(Gs),s&&a(D),s&&a(Ms),k(M,s),s&&a(Js),s&&a(ls),s&&a(Us),s&&a(w),s&&a(Vs),s&&a(ps),s&&a(Fs),k(J,s),s&&a(Ys),s&&a(U),s&&a(Ws),s&&a(ms),s&&a(Hs),k(V,s),s&&a(Ks),s&&a(F),s&&a(Qs),s&&a(S),s&&a(Xs),s&&a(cs),s&&a(Zs),k(W,s),s&&a(sa),s&&a(H),s&&a(aa),s&&a(L),s&&a(ea),k(K,s),s&&a(ta),s&&a(fs),s&&a(na),k(Q,s),s&&a(la),s&&a(R),s&&a(oa),k(X,s),s&&a(ia),s&&a(E),s&&a(ra),k(Z,s),s&&a(pa),s&&a(ss),s&&a(ma),s&&a(q),s&&a(ca),k(as,s),s&&a(fa),s&&a(es),s&&a(ga),k(B,s)}}}const ot={local:"semantic-segmentation",title:"Semantic segmentation"};function it(Ls){return at(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ft extends Qe{constructor(g){super();Xe(this,g,it,lt,Ze,{})}}export{ft as default,ot as metadata};
