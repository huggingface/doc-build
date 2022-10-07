import{S as zr,i as Nr,s as Tr,e as n,k as c,w as u,t as i,M as qr,c as r,d as a,m,a as o,x as d,h as p,b as w,G as t,g as l,y as _,q as b,o as $,B as g,v as xr}from"../../chunks/vendor-hf-doc-builder.js";import{T as za}from"../../chunks/Tip-hf-doc-builder.js";import{I as Na}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ur(P){let f,y,h,v;return{c(){f=n("p"),y=i("This tutorial is also available as a Jupyter Notebook "),h=n("a"),v=i("here"),this.h()},l(E){f=r(E,"P",{});var k=o(f);y=p(k,"This tutorial is also available as a Jupyter Notebook "),h=r(k,"A",{href:!0,rel:!0});var A=o(h);v=p(A,"here"),A.forEach(a),k.forEach(a),this.h()},h(){w(h,"href","https://github.com/huggingface/notebooks/blob/main/examples/accelerate_examples/simple_cv_example.ipynb"),w(h,"rel","nofollow")},m(E,k){l(E,f,k),t(f,y),t(f,h),t(h,v)},d(E){E&&a(f)}}}function Cr(P){let f,y;return{c(){f=n("p"),y=i("CUDA can\u2019t be initialized more than once on a multi-node system. It\u2019s fine to debug in the notebook and have calls to CUDA, but in order to finally train a full cleanup and restart will need to be performed.")},l(h){f=r(h,"P",{});var v=o(f);y=p(v,"CUDA can\u2019t be initialized more than once on a multi-node system. It\u2019s fine to debug in the notebook and have calls to CUDA, but in order to finally train a full cleanup and restart will need to be performed."),v.forEach(a)},m(h,v){l(h,f,v),t(f,y)},d(h){h&&a(f)}}}function Dr(P){let f,y;return{c(){f=n("p"),y=i("The code has been split up to allow for explainations on each section. A full version that can be copy and pasted will be available at the end")},l(h){f=r(h,"P",{});var v=o(f);y=p(v,"The code has been split up to allow for explainations on each section. A full version that can be copy and pasted will be available at the end"),v.forEach(a)},m(h,v){l(h,f,v),t(f,y)},d(h){h&&a(f)}}}function Ir(P){let f,y,h,v,E;return{c(){f=n("p"),y=i(`If training on the TPU, your training loop should take in the model as a parameter and it should be instantiated
outside of the training loop function. See the `),h=n("a"),v=i("TPU best practices"),E=i(`
to learn why`),this.h()},l(k){f=r(k,"P",{});var A=o(f);y=p(A,`If training on the TPU, your training loop should take in the model as a parameter and it should be instantiated
outside of the training loop function. See the `),h=r(A,"A",{href:!0});var L=o(h);v=p(L,"TPU best practices"),L.forEach(a),E=p(A,`
to learn why`),A.forEach(a),this.h()},h(){w(h,"href","../concept_guides/training_tpu")},m(k,A){l(k,f,A),t(f,y),t(f,h),t(h,v),t(f,E)},d(k){k&&a(f)}}}function Lr(P){let f,y;return{c(){f=n("p"),y=i("You build the model here so that the seed also controls the new weight initialization")},l(h){f=r(h,"P",{});var v=o(f);y=p(v,"You build the model here so that the seed also controls the new weight initialization"),v.forEach(a)},m(h,v){l(h,f,v),t(f,y)},d(h){h&&a(f)}}}function Rr(P){let f,y;return{c(){f=n("p"),y=i("There is no specific order to remember, you just need to unpack the objects in the same order you gave them to the prepare method.")},l(h){f=r(h,"P",{});var v=o(f);y=p(v,"There is no specific order to remember, you just need to unpack the objects in the same order you gave them to the prepare method."),v.forEach(a)},m(h,v){l(h,f,v),t(f,y)},d(h){h&&a(f)}}}function Sr(P){let f,y,h,v,E,k,A,L,Ft,es,Je,Gt,as,R,ss,x,S,Ta,ne,Ot,qa,Mt,ts,He,Bt,ls,re,ns,N,Jt,xa,Ht,Yt,Ye,Wt,Kt,rs,We,Qt,os,F,is,oe,ps,U,G,Ua,ie,Vt,Ca,Xt,cs,z,Zt,Da,el,al,Ia,sl,tl,La,ll,nl,ms,Ke,rl,fs,pe,ol,ce,il,hs,me,us,Qe,pl,ds,fe,_s,he,bs,O,cl,Ra,ml,fl,$s,ue,gs,de,ws,Ve,hl,vs,_e,js,M,ul,Sa,dl,_l,ys,be,ks,Xe,bl,Es,$e,Ps,Ze,$l,As,ge,zs,T,gl,Fa,wl,vl,Ga,jl,yl,Ns,we,Ts,ea,kl,qs,ve,xs,C,B,Oa,je,El,Ma,Pl,Us,J,Al,aa,zl,Nl,Cs,sa,Tl,Ds,H,Is,ye,Ls,Y,ql,ta,xl,Ul,Rs,W,Ss,la,Cl,Fs,ke,Gs,K,Os,na,Dl,Ms,Ee,Bs,ra,Il,Js,Pe,Hs,oa,Ll,Ys,Ae,Ws,ia,Rl,Ks,ze,Qs,Q,Sl,pa,Fl,Gl,Vs,V,Xs,Ne,Zs,ca,Ol,et,Te,at,ma,Ml,st,qe,tt,fa,Bl,lt,xe,nt,ha,Jl,rt,X,Hl,ua,Yl,Wl,ot,Ue,it,Z,Kl,da,Ql,Vl,pt,Ce,ct,_a,Xl,mt,De,ft,D,ee,Ba,Ie,Zl,Ja,en,ht,ae,an,ba,sn,tn,ut,se,ln,$a,nn,rn,dt,Le,_t,Re,bt,ga,on,$t,Se,gt,wa,pn,wt,Fe,vt,va,cn,jt,I,te,Ha,Ge,mn,Ya,fn,yt,ja,hn,kt,q,ya,un,ka,dn,_n,Oe,bn,Wa,$n,gn,wn,Ka,vn,Et;return k=new Na({}),R=new za({props:{$$slots:{default:[Ur]},$$scope:{ctx:P}}}),ne=new Na({}),re=new j({props:{code:"accelerate config",highlighted:"accelerate config"}}),F=new za({props:{warning:!0,$$slots:{default:[Cr]},$$scope:{ctx:P}}}),oe=new j({props:{code:`import os
from accelerate.utils import write_basic_config

write_basic_config()  # Write a config file
os._exit(00)  # Restart the notebook`,highlighted:`<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> write_basic_config

write_basic_config()  <span class="hljs-comment"># Write a config file</span>
os._exit(<span class="hljs-number">00</span>)  <span class="hljs-comment"># Restart the notebook</span>`}}),ie=new Na({}),me=new j({props:{code:`import os, re, torch, PIL
import numpy as np

from torch.optim.lr_scheduler import OneCycleLR
from torch.utils.data import DataLoader, Dataset
from torchvision.transforms import Compose, RandomResizedCrop, Resize, ToTensor

from accelerate import Accelerator
from accelerate.utils import set_seed
from timm import create_model`,highlighted:`<span class="hljs-keyword">import</span> os, re, torch, PIL
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> torch.optim.lr_scheduler <span class="hljs-keyword">import</span> OneCycleLR
<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader, Dataset
<span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> Compose, RandomResizedCrop, Resize, ToTensor

<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> set_seed
<span class="hljs-keyword">from</span> timm <span class="hljs-keyword">import</span> create_model`}}),fe=new j({props:{code:`import os

data_dir = "../../images"
fnames = os.listdir(data_dir)
fname = fnames[0]
print(fname)`,highlighted:`<span class="hljs-keyword">import</span> os

data_dir = <span class="hljs-string">&quot;../../images&quot;</span>
fnames = os.listdir(data_dir)
fname = fnames[<span class="hljs-number">0</span>]
<span class="hljs-built_in">print</span>(fname)`}}),he=new j({props:{code:"beagle_32.jpg",highlighted:"beagle_32.jpg"}}),ue=new j({props:{code:`import re


def extract_label(fname):
    stem = fname.split(os.path.sep)[-1]
    return re.search(r"^(.*)_\\d+\\.jpg$", stem).groups()[0]`,highlighted:`<span class="hljs-keyword">import</span> re


<span class="hljs-keyword">def</span> <span class="hljs-title function_">extract_label</span>(<span class="hljs-params">fname</span>):
    stem = fname.split(os.path.sep)[-<span class="hljs-number">1</span>]
    <span class="hljs-keyword">return</span> re.search(<span class="hljs-string">r&quot;^(.*)_\\d+\\.jpg$&quot;</span>, stem).groups()[<span class="hljs-number">0</span>]`}}),de=new j({props:{code:"extract_label(fname)",highlighted:"extract_label(fname)"}}),_e=new j({props:{code:'"beagle"',highlighted:'<span class="hljs-string">&quot;beagle&quot;</span>'}}),be=new j({props:{code:`class PetsDataset(Dataset):
    def __init__(self, file_names, image_transform=None, label_to_id=None):
        self.file_names = file_names
        self.image_transform = image_transform
        self.label_to_id = label_to_id

    def __len__(self):
        return len(self.file_names)

    def __getitem__(self, idx):
        fname = self.file_names[idx]
        raw_image = PIL.Image.open(fname)
        image = raw_image.convert("RGB")
        if self.image_transform is not None:
            image = self.image_transform(image)
        label = extract_label(fname)
        if self.label_to_id is not None:
            label = self.label_to_id[label]
        return {"image": image, "label": label}`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">PetsDataset</span>(<span class="hljs-title class_ inherited__">Dataset</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, file_names, image_transform=<span class="hljs-literal">None</span>, label_to_id=<span class="hljs-literal">None</span></span>):
        self.file_names = file_names
        self.image_transform = image_transform
        self.label_to_id = label_to_id

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.file_names)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
        fname = self.file_names[idx]
        raw_image = PIL.Image.<span class="hljs-built_in">open</span>(fname)
        image = raw_image.convert(<span class="hljs-string">&quot;RGB&quot;</span>)
        <span class="hljs-keyword">if</span> self.image_transform <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
            image = self.image_transform(image)
        label = extract_label(fname)
        <span class="hljs-keyword">if</span> self.label_to_id <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
            label = self.label_to_id[label]
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;image&quot;</span>: image, <span class="hljs-string">&quot;label&quot;</span>: label}`}}),$e=new j({props:{code:'fnames = [os.path.join("../../images", fname) for fname in fnames if fname.endswith(".jpg")]',highlighted:'fnames = [os.path.join(<span class="hljs-string">&quot;../../images&quot;</span>, fname) <span class="hljs-keyword">for</span> fname <span class="hljs-keyword">in</span> fnames <span class="hljs-keyword">if</span> fname.endswith(<span class="hljs-string">&quot;.jpg&quot;</span>)]'}}),ge=new j({props:{code:`all_labels = [extract_label(fname) for fname in fnames]
id_to_label = list(set(all_labels))
id_to_label.sort()
label_to_id = {lbl: i for i, lbl in enumerate(id_to_label)}`,highlighted:`all_labels = [extract_label(fname) <span class="hljs-keyword">for</span> fname <span class="hljs-keyword">in</span> fnames]
id_to_label = <span class="hljs-built_in">list</span>(<span class="hljs-built_in">set</span>(all_labels))
id_to_label.sort()
label_to_id = {lbl: i <span class="hljs-keyword">for</span> i, lbl <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(id_to_label)}`}}),we=new j({props:{code:`def get_dataloaders(batch_size: int = 64):
    "Builds a set of dataloaders with a batch_size"
    random_perm = np.random.permutation(len(fnames))
    cut = int(0.8 * len(fnames))
    train_split = random_perm[:cut]
    eval_split = random_perm[:cut]

    # For training a simple RandomResizedCrop will be used
    train_tfm = Compose([RandomResizedCrop((224, 224), scale=(0.5, 1.0)), ToTensor()])
    train_dataset = PetsDataset([fnames[i] for i in train_split], image_transform=train_tfm, label_to_id=label_to_id)

    # For evaluation a deterministic Resize will be used
    eval_tfm = Compose([Resize((224, 224)), ToTensor()])
    eval_dataset = PetsDataset([fnames[i] for i in eval_split], image_transform=eval_tfm, label_to_id=label_to_id)

    # Instantiate dataloaders
    train_dataloader = DataLoader(train_dataset, shuffle=True, batch_size=batch_size, num_workers=4)
    eval_dataloader = DataLoader(eval_dataset, shuffle=False, batch_size=batch_size * 2, num_workers=4)
    return train_dataloader, eval_dataloader`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_dataloaders</span>(<span class="hljs-params">batch_size: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span></span>):
    <span class="hljs-string">&quot;Builds a set of dataloaders with a batch_size&quot;</span>
    random_perm = np.random.permutation(<span class="hljs-built_in">len</span>(fnames))
    cut = <span class="hljs-built_in">int</span>(<span class="hljs-number">0.8</span> * <span class="hljs-built_in">len</span>(fnames))
    train_split = random_perm[:cut]
    eval_split = random_perm[:cut]

    <span class="hljs-comment"># For training a simple RandomResizedCrop will be used</span>
    train_tfm = Compose([RandomResizedCrop((<span class="hljs-number">224</span>, <span class="hljs-number">224</span>), scale=(<span class="hljs-number">0.5</span>, <span class="hljs-number">1.0</span>)), ToTensor()])
    train_dataset = PetsDataset([fnames[i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> train_split], image_transform=train_tfm, label_to_id=label_to_id)

    <span class="hljs-comment"># For evaluation a deterministic Resize will be used</span>
    eval_tfm = Compose([Resize((<span class="hljs-number">224</span>, <span class="hljs-number">224</span>)), ToTensor()])
    eval_dataset = PetsDataset([fnames[i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> eval_split], image_transform=eval_tfm, label_to_id=label_to_id)

    <span class="hljs-comment"># Instantiate dataloaders</span>
    train_dataloader = DataLoader(train_dataset, shuffle=<span class="hljs-literal">True</span>, batch_size=batch_size, num_workers=<span class="hljs-number">4</span>)
    eval_dataloader = DataLoader(eval_dataset, shuffle=<span class="hljs-literal">False</span>, batch_size=batch_size * <span class="hljs-number">2</span>, num_workers=<span class="hljs-number">4</span>)
    <span class="hljs-keyword">return</span> train_dataloader, eval_dataloader`}}),ve=new j({props:{code:"from torch.optim.lr_scheduler import CosineAnnealingLR",highlighted:'<span class="hljs-keyword">from</span> torch.optim.lr_scheduler <span class="hljs-keyword">import</span> CosineAnnealingLR'}}),je=new Na({}),H=new za({props:{$$slots:{default:[Dr]},$$scope:{ctx:P}}}),ye=new j({props:{code:`def training_loop(mixed_precision="fp16", seed: int = 42, batch_size: int = 64):
    set_seed(seed)
    accelerator = Accelerator(mixed_precision=mixed_precision)`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">training_loop</span>(<span class="hljs-params">mixed_precision=<span class="hljs-string">&quot;fp16&quot;</span>, seed: <span class="hljs-built_in">int</span> = <span class="hljs-number">42</span>, batch_size: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span></span>):
    set_seed(seed)
    accelerator = Accelerator(mixed_precision=mixed_precision)`}}),W=new za({props:{warning:!0,$$slots:{default:[Ir]},$$scope:{ctx:P}}}),ke=new j({props:{code:`    train_dataloader, eval_dataloader = get_dataloaders(batch_size)
    model = create_model("resnet50d", pretrained=True, num_classes=len(label_to_id))`,highlighted:`    train_dataloader, eval_dataloader = get_dataloaders(batch_size)
    model = create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=<span class="hljs-built_in">len</span>(label_to_id))`}}),K=new za({props:{$$slots:{default:[Lr]},$$scope:{ctx:P}}}),Ee=new j({props:{code:`    for param in model.parameters():
        param.requires_grad = False
    for param in model.get_classifier().parameters():
        param.requires_grad = True`,highlighted:`    <span class="hljs-keyword">for</span> param <span class="hljs-keyword">in</span> model.parameters():
        param.requires_grad = <span class="hljs-literal">False</span>
    <span class="hljs-keyword">for</span> param <span class="hljs-keyword">in</span> model.get_classifier().parameters():
        param.requires_grad = <span class="hljs-literal">True</span>`}}),Pe=new j({props:{code:`    mean = torch.tensor(model.default_cfg["mean"])[None, :, None, None]
    std = torch.tensor(model.default_cfg["std"])[None, :, None, None]`,highlighted:`    mean = torch.tensor(model.default_cfg[<span class="hljs-string">&quot;mean&quot;</span>])[<span class="hljs-literal">None</span>, :, <span class="hljs-literal">None</span>, <span class="hljs-literal">None</span>]
    std = torch.tensor(model.default_cfg[<span class="hljs-string">&quot;std&quot;</span>])[<span class="hljs-literal">None</span>, :, <span class="hljs-literal">None</span>, <span class="hljs-literal">None</span>]`}}),Ae=new j({props:{code:`    mean = mean.to(accelerator.device)
    std = std.to(accelerator.device)`,highlighted:`    mean = mean.to(accelerator.device)
    std = std.to(accelerator.device)`}}),ze=new j({props:{code:`    optimizer = torch.optim.Adam(params=model.parameters(), lr=3e-2 / 25)
    lr_scheduler = OneCycleLR(optimizer=optimizer, max_lr=3e-2, epochs=5, steps_per_epoch=len(train_dataloader))`,highlighted:`    optimizer = torch.optim.Adam(params=model.parameters(), lr=<span class="hljs-number">3e-2</span> / <span class="hljs-number">25</span>)
    lr_scheduler = OneCycleLR(optimizer=optimizer, max_lr=<span class="hljs-number">3e-2</span>, epochs=<span class="hljs-number">5</span>, steps_per_epoch=<span class="hljs-built_in">len</span>(train_dataloader))`}}),V=new za({props:{$$slots:{default:[Rr]},$$scope:{ctx:P}}}),Ne=new j({props:{code:`    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )`,highlighted:`    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )`}}),Te=new j({props:{code:`    for epoch in range(5):
        model.train()
        for batch in train_dataloader:
            inputs = (batch["image"] - mean) / std
            outputs = model(inputs)
            loss = torch.nn.functional.cross_entropy(outputs, batch["label"])
            accelerator.backward(loss)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()`,highlighted:`    <span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        model.train()
        <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
            inputs = (batch[<span class="hljs-string">&quot;image&quot;</span>] - mean) / std
            outputs = model(inputs)
            loss = torch.nn.functional.cross_entropy(outputs, batch[<span class="hljs-string">&quot;label&quot;</span>])
            accelerator.backward(loss)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()`}}),qe=new j({props:{code:`        model.eval()
        accurate = 0
        num_elems = 0`,highlighted:`        model.<span class="hljs-built_in">eval</span>()
        accurate = <span class="hljs-number">0</span>
        num_elems = <span class="hljs-number">0</span>`}}),xe=new j({props:{code:`        for batch in eval_dataloader:
            inputs = (batch["image"] - mean) / std
            with torch.no_grad():
                outputs = model(inputs)
            predictions = outputs.argmax(dim=-1)`,highlighted:`        <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> eval_dataloader:
            inputs = (batch[<span class="hljs-string">&quot;image&quot;</span>] - mean) / std
            <span class="hljs-keyword">with</span> torch.no_grad():
                outputs = model(inputs)
            predictions = outputs.argmax(dim=-<span class="hljs-number">1</span>)`}}),Ue=new j({props:{code:`            accurate_preds = accelerator.gather(predictions) == accelerator.gather(batch["label"])
            num_elems += accurate_preds.shape[0]
            accurate += accurate_preds.long().sum()`,highlighted:`            accurate_preds = accelerator.gather(predictions) == accelerator.gather(batch[<span class="hljs-string">&quot;label&quot;</span>])
            num_elems += accurate_preds.shape[<span class="hljs-number">0</span>]
            accurate += accurate_preds.long().<span class="hljs-built_in">sum</span>()`}}),Ce=new j({props:{code:`        eval_metric = accurate.item() / num_elems
        accelerator.print(f"epoch {epoch}: {100 * eval_metric:.2f}")`,highlighted:`        eval_metric = accurate.item() / num_elems
        accelerator.<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;epoch <span class="hljs-subst">{epoch}</span>: <span class="hljs-subst">{<span class="hljs-number">100</span> * eval_metric:<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),De=new j({props:{code:`def training_loop(mixed_precision="fp16", seed: int = 42, batch_size: int = 64):
    set_seed(seed)
    # Initialize accelerator
    accelerator = Accelerator(mixed_precision=mixed_precision)
    # Build dataloaders
    train_dataloader, eval_dataloader = get_dataloaders(batch_size)

    # Instantiate the model (you build the model here so that the seed also controls new weight initaliziations)
    model = create_model("resnet50d", pretrained=True, num_classes=len(label_to_id))

    # Freeze the base model
    for param in model.parameters():
        param.requires_grad = False
    for param in model.get_classifier().parameters():
        param.requires_grad = True

    # You can normalize the batches of images to be a bit faster
    mean = torch.tensor(model.default_cfg["mean"])[None, :, None, None]
    std = torch.tensor(model.default_cfg["std"])[None, :, None, None]

    # To make this constant available on the active device, set it to the accelerator device
    mean = mean.to(accelerator.device)
    std = std.to(accelerator.device)

    # Intantiate the optimizer
    optimizer = torch.optim.Adam(params=model.parameters(), lr=3e-2 / 25)

    # Instantiate the learning rate scheduler
    lr_scheduler = OneCycleLR(optimizer=optimizer, max_lr=3e-2, epochs=5, steps_per_epoch=len(train_dataloader))

    # Prepare everything
    # There is no specific order to remember, you just need to unpack the objects in the same order you gave them to the
    # prepare method.
    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )

    # Now you train the model
    for epoch in range(5):
        model.train()
        for batch in train_dataloader:
            inputs = (batch["image"] - mean) / std
            outputs = model(inputs)
            loss = torch.nn.functional.cross_entropy(outputs, batch["label"])
            accelerator.backward(loss)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()

        model.eval()
        accurate = 0
        num_elems = 0
        for batch in eval_dataloader:
            inputs = (batch["image"] - mean) / std
            with torch.no_grad():
                outputs = model(inputs)
            predictions = outputs.argmax(dim=-1)
            accurate_preds = accelerator.gather(predictions) == accelerator.gather(batch["label"])
            num_elems += accurate_preds.shape[0]
            accurate += accurate_preds.long().sum()

        eval_metric = accurate.item() / num_elems
        # Use accelerator.print to print only on the main process.
        accelerator.print(f"epoch {epoch}: {100 * eval_metric:.2f}")`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">training_loop</span>(<span class="hljs-params">mixed_precision=<span class="hljs-string">&quot;fp16&quot;</span>, seed: <span class="hljs-built_in">int</span> = <span class="hljs-number">42</span>, batch_size: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span></span>):
    set_seed(seed)
    <span class="hljs-comment"># Initialize accelerator</span>
    accelerator = Accelerator(mixed_precision=mixed_precision)
    <span class="hljs-comment"># Build dataloaders</span>
    train_dataloader, eval_dataloader = get_dataloaders(batch_size)

    <span class="hljs-comment"># Instantiate the model (you build the model here so that the seed also controls new weight initaliziations)</span>
    model = create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=<span class="hljs-built_in">len</span>(label_to_id))

    <span class="hljs-comment"># Freeze the base model</span>
    <span class="hljs-keyword">for</span> param <span class="hljs-keyword">in</span> model.parameters():
        param.requires_grad = <span class="hljs-literal">False</span>
    <span class="hljs-keyword">for</span> param <span class="hljs-keyword">in</span> model.get_classifier().parameters():
        param.requires_grad = <span class="hljs-literal">True</span>

    <span class="hljs-comment"># You can normalize the batches of images to be a bit faster</span>
    mean = torch.tensor(model.default_cfg[<span class="hljs-string">&quot;mean&quot;</span>])[<span class="hljs-literal">None</span>, :, <span class="hljs-literal">None</span>, <span class="hljs-literal">None</span>]
    std = torch.tensor(model.default_cfg[<span class="hljs-string">&quot;std&quot;</span>])[<span class="hljs-literal">None</span>, :, <span class="hljs-literal">None</span>, <span class="hljs-literal">None</span>]

    <span class="hljs-comment"># To make this constant available on the active device, set it to the accelerator device</span>
    mean = mean.to(accelerator.device)
    std = std.to(accelerator.device)

    <span class="hljs-comment"># Intantiate the optimizer</span>
    optimizer = torch.optim.Adam(params=model.parameters(), lr=<span class="hljs-number">3e-2</span> / <span class="hljs-number">25</span>)

    <span class="hljs-comment"># Instantiate the learning rate scheduler</span>
    lr_scheduler = OneCycleLR(optimizer=optimizer, max_lr=<span class="hljs-number">3e-2</span>, epochs=<span class="hljs-number">5</span>, steps_per_epoch=<span class="hljs-built_in">len</span>(train_dataloader))

    <span class="hljs-comment"># Prepare everything</span>
    <span class="hljs-comment"># There is no specific order to remember, you just need to unpack the objects in the same order you gave them to the</span>
    <span class="hljs-comment"># prepare method.</span>
    model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
    )

    <span class="hljs-comment"># Now you train the model</span>
    <span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">5</span>):
        model.train()
        <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
            inputs = (batch[<span class="hljs-string">&quot;image&quot;</span>] - mean) / std
            outputs = model(inputs)
            loss = torch.nn.functional.cross_entropy(outputs, batch[<span class="hljs-string">&quot;label&quot;</span>])
            accelerator.backward(loss)
            optimizer.step()
            lr_scheduler.step()
            optimizer.zero_grad()

        model.<span class="hljs-built_in">eval</span>()
        accurate = <span class="hljs-number">0</span>
        num_elems = <span class="hljs-number">0</span>
        <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> eval_dataloader:
            inputs = (batch[<span class="hljs-string">&quot;image&quot;</span>] - mean) / std
            <span class="hljs-keyword">with</span> torch.no_grad():
                outputs = model(inputs)
            predictions = outputs.argmax(dim=-<span class="hljs-number">1</span>)
            accurate_preds = accelerator.gather(predictions) == accelerator.gather(batch[<span class="hljs-string">&quot;label&quot;</span>])
            num_elems += accurate_preds.shape[<span class="hljs-number">0</span>]
            accurate += accurate_preds.long().<span class="hljs-built_in">sum</span>()

        eval_metric = accurate.item() / num_elems
        <span class="hljs-comment"># Use accelerator.print to print only on the main process.</span>
        accelerator.<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;epoch <span class="hljs-subst">{epoch}</span>: <span class="hljs-subst">{<span class="hljs-number">100</span> * eval_metric:<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),Ie=new Na({}),Le=new j({props:{code:"from accelerate import notebook_launcher",highlighted:'<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> notebook_launcher'}}),Re=new j({props:{code:`args = ("fp16", 42, 64)
notebook_launcher(training_loop, args, num_processes=2)`,highlighted:`args = (<span class="hljs-string">&quot;fp16&quot;</span>, <span class="hljs-number">42</span>, <span class="hljs-number">64</span>)
notebook_launcher(training_loop, args, num_processes=<span class="hljs-number">2</span>)`}}),Se=new j({props:{code:`model = create_model("resnet50d", pretrained=True, num_classes=len(label_to_id))

args = (model, "fp16", 42, 64)
notebook_launcher(training_loop, args, num_processes=8)`,highlighted:`model = create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>, num_classes=<span class="hljs-built_in">len</span>(label_to_id))

args = (model, <span class="hljs-string">&quot;fp16&quot;</span>, <span class="hljs-number">42</span>, <span class="hljs-number">64</span>)
notebook_launcher(training_loop, args, num_processes=<span class="hljs-number">8</span>)`}}),Fe=new j({props:{code:`Launching training on 2 GPUs.
epoch 0: 88.12
epoch 1: 91.73
epoch 2: 92.58
epoch 3: 93.90
epoch 4: 94.71`,highlighted:`Launching training on <span class="hljs-number">2</span> GPUs.
epoch <span class="hljs-number">0</span>: <span class="hljs-number">88.12</span>
epoch <span class="hljs-number">1</span>: <span class="hljs-number">91.73</span>
epoch <span class="hljs-number">2</span>: <span class="hljs-number">92.58</span>
epoch <span class="hljs-number">3</span>: <span class="hljs-number">93.90</span>
epoch <span class="hljs-number">4</span>: <span class="hljs-number">94.71</span>`}}),Ge=new Na({}),{c(){f=n("meta"),y=c(),h=n("h1"),v=n("a"),E=n("span"),u(k.$$.fragment),A=c(),L=n("span"),Ft=i("Launching Multi-Node Training from a Jupyter Environment"),es=c(),Je=n("p"),Gt=i(`This tutorial teaches you how to fine tune a computer vision model with \u{1F917} Accelerate from a Jupyter Notebook on a distributed system.
You will also learn how to setup a few requirements needed for ensuring your environment is configured properly, your data has been prepared properly, and finally how to launch training.`),as=c(),u(R.$$.fragment),ss=c(),x=n("h2"),S=n("a"),Ta=n("span"),u(ne.$$.fragment),Ot=c(),qa=n("span"),Mt=i("Configuring the Environment"),ts=c(),He=n("p"),Bt=i("Before any training can be performed, a \u{1F917} Accelerate config file must exist in the system. Usually this can be done by running the following in a terminal and answering the prompts:"),ls=c(),u(re.$$.fragment),ns=c(),N=n("p"),Jt=i("However, if general defaults are fine and you are "),xa=n("em"),Ht=i("not"),Yt=i(" running on a TPU, \u{1F917}Accelerate has a utility to quickly write your GPU configuration into a config file via "),Ye=n("a"),Wt=i("utils.write_basic_config()"),Kt=i("."),rs=c(),We=n("p"),Qt=i("The following code will restart Jupyter after writing the configuration, as CUDA code was called to perform this."),os=c(),u(F.$$.fragment),is=c(),u(oe.$$.fragment),ps=c(),U=n("h2"),G=n("a"),Ua=n("span"),u(ie.$$.fragment),Vt=c(),Ca=n("span"),Xt=i("Preparing the Dataset and Model"),cs=c(),z=n("p"),Zt=i("Next you should prepare your dataset. As mentioned at earlier, great care should be taken when preparing the "),Da=n("code"),el=i("DataLoaders"),al=i(" and model to make sure that "),Ia=n("strong"),sl=i("nothing"),tl=i(" is put on "),La=n("em"),ll=i("any"),nl=i(" GPU."),ms=c(),Ke=n("p"),rl=i("If you do, it is recommended to put that specific code into a function and call that from within the notebook launcher interface, which will be shown later."),fs=c(),pe=n("p"),ol=i("Make sure the dataset is downloaded based on the directions "),ce=n("a"),il=i("here"),hs=c(),u(me.$$.fragment),us=c(),Qe=n("p"),pl=i("First you need to create a function to extract the class name based on a filename:"),ds=c(),u(fe.$$.fragment),_s=c(),u(he.$$.fragment),bs=c(),O=n("p"),cl=i("In the case here, the label is "),Ra=n("code"),ml=i("beagle"),fl=i(". Using regex you can extract the label from the filename:"),$s=c(),u(ue.$$.fragment),gs=c(),u(de.$$.fragment),ws=c(),Ve=n("p"),hl=i("And you can see it properly returned the right name for our file:"),vs=c(),u(_e.$$.fragment),js=c(),M=n("p"),ul=i("Next a "),Sa=n("code"),dl=i("Dataset"),_l=i(" class should be made to handle grabbing the image and the label:"),ys=c(),u(be.$$.fragment),ks=c(),Xe=n("p"),bl=i(`Now to build the dataset. Outside the training function you can find and declare all the filenames and labels and use them as references inside the
launched function:`),Es=c(),u($e.$$.fragment),Ps=c(),Ze=n("p"),$l=i("Next gather all the labels:"),As=c(),u(ge.$$.fragment),zs=c(),T=n("p"),gl=i("Next, you should make a "),Fa=n("code"),wl=i("get_dataloaders"),vl=i(` function that will return your built dataloaders for you. As mentioned earlier, if data is automatically
sent to the GPU or a TPU device when building your `),Ga=n("code"),jl=i("DataLoaders"),yl=i(", they must be built using this method."),Ns=c(),u(we.$$.fragment),Ts=c(),ea=n("p"),kl=i("Finally, you should import the scheduler to be used later:"),qs=c(),u(ve.$$.fragment),xs=c(),C=n("h2"),B=n("a"),Oa=n("span"),u(je.$$.fragment),El=c(),Ma=n("span"),Pl=i("Writing the Training Function"),Us=c(),J=n("p"),Al=i("Now you can build the training loop. "),aa=n("a"),zl=i("notebook_launcher()"),Nl=i(" works by passing in a function to call that will be ran across the distributed system."),Cs=c(),sa=n("p"),Tl=i("Here is a basic training loop for the animal classification problem:"),Ds=c(),u(H.$$.fragment),Is=c(),u(ye.$$.fragment),Ls=c(),Y=n("p"),ql=i("First you should set the seed and create an "),ta=n("a"),xl=i("Accelerator"),Ul=i(" object as early in the training loop as possible."),Rs=c(),u(W.$$.fragment),Ss=c(),la=n("p"),Cl=i("Next you should build your dataloaders and create your model:"),Fs=c(),u(ke.$$.fragment),Gs=c(),u(K.$$.fragment),Os=c(),na=n("p"),Dl=i(`As you are performing transfer learning in this example, the encoder of the model starts out frozen so the head of the model can be
trained only initially:`),Ms=c(),u(Ee.$$.fragment),Bs=c(),ra=n("p"),Il=i("Normalizing the batches of images will make training a little faster:"),Js=c(),u(Pe.$$.fragment),Hs=c(),oa=n("p"),Ll=i("To make these constants available on the active device, you should set it to the Accelerator\u2019s device:"),Ys=c(),u(Ae.$$.fragment),Ws=c(),ia=n("p"),Rl=i("Next instantiate the rest of the PyTorch classes used for training:"),Ks=c(),u(ze.$$.fragment),Qs=c(),Q=n("p"),Sl=i("Before passing everything to "),pa=n("a"),Fl=i("prepare()"),Gl=i("."),Vs=c(),u(V.$$.fragment),Xs=c(),u(Ne.$$.fragment),Zs=c(),ca=n("p"),Ol=i("Now train the model:"),et=c(),u(Te.$$.fragment),at=c(),ma=n("p"),Ml=i(`The evaluation loop will look slightly different compared to the training loop. The number of elements passed as well as the overall
total accuracy of each batch will be added to two constants:`),st=c(),u(qe.$$.fragment),tt=c(),fa=n("p"),Bl=i("Next you have the rest of your standard PyTorch loop:"),lt=c(),u(xe.$$.fragment),nt=c(),ha=n("p"),Jl=i("Before finally the last major difference."),rt=c(),X=n("p"),Hl=i(`When performing distributed evaluation, the predictions and labels need to be passed through
`),ua=n("a"),Yl=i("gather()"),Wl=i(" so that all of the data is available on the current device and a properly calculated metric can be achieved:"),ot=c(),u(Ue.$$.fragment),it=c(),Z=n("p"),Kl=i("Now you just need to calculate the actual metric for this problem, and you can print it on the main process using "),da=n("a"),Ql=i("print()"),Vl=i(":"),pt=c(),u(Ce.$$.fragment),ct=c(),_a=n("p"),Xl=i("A full version of this training loop is available below:"),mt=c(),u(De.$$.fragment),ft=c(),D=n("h2"),ee=n("a"),Ba=n("span"),u(Ie.$$.fragment),Zl=c(),Ja=n("span"),en=i("Using the notebook_launcher"),ht=c(),ae=n("p"),an=i("All that\u2019s left is to use the "),ba=n("a"),sn=i("notebook_launcher()"),tn=i("."),ut=c(),se=n("p"),ln=i("You pass in the function, the arguments (as a tuple), and the number of processes to train on. (See the "),$a=n("a"),nn=i("documentation"),rn=i(" for more information)"),dt=c(),u(Le.$$.fragment),_t=c(),u(Re.$$.fragment),bt=c(),ga=n("p"),on=i("In the case of running on the TPU, it would look like so:"),$t=c(),u(Se.$$.fragment),gt=c(),wa=n("p"),pn=i("As it\u2019s running it will print the progress as well as state how many devices you ran on. This tutorial was ran with two GPUs:"),wt=c(),u(Fe.$$.fragment),vt=c(),va=n("p"),cn=i("And that\u2019s it!"),jt=c(),I=n("h2"),te=n("a"),Ha=n("span"),u(Ge.$$.fragment),mn=c(),Ya=n("span"),fn=i("Conclusion"),yt=c(),ja=n("p"),hn=i("This notebook showed how to perform distributed training from inside of a Jupyter Notebook. Some key notes to remember:"),kt=c(),q=n("ul"),ya=n("li"),un=i("Make sure to save any code that use CUDA (or CUDA imports) for the function passed to "),ka=n("a"),dn=i("notebook_launcher()"),_n=c(),Oe=n("li"),bn=i("Set the "),Wa=n("code"),$n=i("num_processes"),gn=i(" to be the number of devices used for training (such as number of GPUs, CPUs, TPUs, etc)"),wn=c(),Ka=n("li"),vn=i("If using the TPU, declare your model outside the training loop function"),this.h()},l(e){const s=qr('[data-svelte="svelte-1phssyn"]',document.head);f=r(s,"META",{name:!0,content:!0}),s.forEach(a),y=m(e),h=r(e,"H1",{class:!0});var Me=o(h);v=r(Me,"A",{id:!0,class:!0,href:!0});var Qa=o(v);E=r(Qa,"SPAN",{});var Va=o(E);d(k.$$.fragment,Va),Va.forEach(a),Qa.forEach(a),A=m(Me),L=r(Me,"SPAN",{});var Xa=o(L);Ft=p(Xa,"Launching Multi-Node Training from a Jupyter Environment"),Xa.forEach(a),Me.forEach(a),es=m(e),Je=r(e,"P",{});var Za=o(Je);Gt=p(Za,`This tutorial teaches you how to fine tune a computer vision model with \u{1F917} Accelerate from a Jupyter Notebook on a distributed system.
You will also learn how to setup a few requirements needed for ensuring your environment is configured properly, your data has been prepared properly, and finally how to launch training.`),Za.forEach(a),as=m(e),d(R.$$.fragment,e),ss=m(e),x=r(e,"H2",{class:!0});var Be=o(x);S=r(Be,"A",{id:!0,class:!0,href:!0});var kn=o(S);Ta=r(kn,"SPAN",{});var En=o(Ta);d(ne.$$.fragment,En),En.forEach(a),kn.forEach(a),Ot=m(Be),qa=r(Be,"SPAN",{});var Pn=o(qa);Mt=p(Pn,"Configuring the Environment"),Pn.forEach(a),Be.forEach(a),ts=m(e),He=r(e,"P",{});var An=o(He);Bt=p(An,"Before any training can be performed, a \u{1F917} Accelerate config file must exist in the system. Usually this can be done by running the following in a terminal and answering the prompts:"),An.forEach(a),ls=m(e),d(re.$$.fragment,e),ns=m(e),N=r(e,"P",{});var Ea=o(N);Jt=p(Ea,"However, if general defaults are fine and you are "),xa=r(Ea,"EM",{});var zn=o(xa);Ht=p(zn,"not"),zn.forEach(a),Yt=p(Ea," running on a TPU, \u{1F917}Accelerate has a utility to quickly write your GPU configuration into a config file via "),Ye=r(Ea,"A",{href:!0});var Nn=o(Ye);Wt=p(Nn,"utils.write_basic_config()"),Nn.forEach(a),Kt=p(Ea,"."),Ea.forEach(a),rs=m(e),We=r(e,"P",{});var Tn=o(We);Qt=p(Tn,"The following code will restart Jupyter after writing the configuration, as CUDA code was called to perform this."),Tn.forEach(a),os=m(e),d(F.$$.fragment,e),is=m(e),d(oe.$$.fragment,e),ps=m(e),U=r(e,"H2",{class:!0});var Pt=o(U);G=r(Pt,"A",{id:!0,class:!0,href:!0});var qn=o(G);Ua=r(qn,"SPAN",{});var xn=o(Ua);d(ie.$$.fragment,xn),xn.forEach(a),qn.forEach(a),Vt=m(Pt),Ca=r(Pt,"SPAN",{});var Un=o(Ca);Xt=p(Un,"Preparing the Dataset and Model"),Un.forEach(a),Pt.forEach(a),cs=m(e),z=r(e,"P",{});var le=o(z);Zt=p(le,"Next you should prepare your dataset. As mentioned at earlier, great care should be taken when preparing the "),Da=r(le,"CODE",{});var Cn=o(Da);el=p(Cn,"DataLoaders"),Cn.forEach(a),al=p(le," and model to make sure that "),Ia=r(le,"STRONG",{});var Dn=o(Ia);sl=p(Dn,"nothing"),Dn.forEach(a),tl=p(le," is put on "),La=r(le,"EM",{});var In=o(La);ll=p(In,"any"),In.forEach(a),nl=p(le," GPU."),le.forEach(a),ms=m(e),Ke=r(e,"P",{});var Ln=o(Ke);rl=p(Ln,"If you do, it is recommended to put that specific code into a function and call that from within the notebook launcher interface, which will be shown later."),Ln.forEach(a),fs=m(e),pe=r(e,"P",{});var jn=o(pe);ol=p(jn,"Make sure the dataset is downloaded based on the directions "),ce=r(jn,"A",{href:!0,rel:!0});var Rn=o(ce);il=p(Rn,"here"),Rn.forEach(a),jn.forEach(a),hs=m(e),d(me.$$.fragment,e),us=m(e),Qe=r(e,"P",{});var Sn=o(Qe);pl=p(Sn,"First you need to create a function to extract the class name based on a filename:"),Sn.forEach(a),ds=m(e),d(fe.$$.fragment,e),_s=m(e),d(he.$$.fragment,e),bs=m(e),O=r(e,"P",{});var At=o(O);cl=p(At,"In the case here, the label is "),Ra=r(At,"CODE",{});var Fn=o(Ra);ml=p(Fn,"beagle"),Fn.forEach(a),fl=p(At,". Using regex you can extract the label from the filename:"),At.forEach(a),$s=m(e),d(ue.$$.fragment,e),gs=m(e),d(de.$$.fragment,e),ws=m(e),Ve=r(e,"P",{});var Gn=o(Ve);hl=p(Gn,"And you can see it properly returned the right name for our file:"),Gn.forEach(a),vs=m(e),d(_e.$$.fragment,e),js=m(e),M=r(e,"P",{});var zt=o(M);ul=p(zt,"Next a "),Sa=r(zt,"CODE",{});var On=o(Sa);dl=p(On,"Dataset"),On.forEach(a),_l=p(zt," class should be made to handle grabbing the image and the label:"),zt.forEach(a),ys=m(e),d(be.$$.fragment,e),ks=m(e),Xe=r(e,"P",{});var Mn=o(Xe);bl=p(Mn,`Now to build the dataset. Outside the training function you can find and declare all the filenames and labels and use them as references inside the
launched function:`),Mn.forEach(a),Es=m(e),d($e.$$.fragment,e),Ps=m(e),Ze=r(e,"P",{});var Bn=o(Ze);$l=p(Bn,"Next gather all the labels:"),Bn.forEach(a),As=m(e),d(ge.$$.fragment,e),zs=m(e),T=r(e,"P",{});var Pa=o(T);gl=p(Pa,"Next, you should make a "),Fa=r(Pa,"CODE",{});var Jn=o(Fa);wl=p(Jn,"get_dataloaders"),Jn.forEach(a),vl=p(Pa,` function that will return your built dataloaders for you. As mentioned earlier, if data is automatically
sent to the GPU or a TPU device when building your `),Ga=r(Pa,"CODE",{});var Hn=o(Ga);jl=p(Hn,"DataLoaders"),Hn.forEach(a),yl=p(Pa,", they must be built using this method."),Pa.forEach(a),Ns=m(e),d(we.$$.fragment,e),Ts=m(e),ea=r(e,"P",{});var Yn=o(ea);kl=p(Yn,"Finally, you should import the scheduler to be used later:"),Yn.forEach(a),qs=m(e),d(ve.$$.fragment,e),xs=m(e),C=r(e,"H2",{class:!0});var Nt=o(C);B=r(Nt,"A",{id:!0,class:!0,href:!0});var Wn=o(B);Oa=r(Wn,"SPAN",{});var Kn=o(Oa);d(je.$$.fragment,Kn),Kn.forEach(a),Wn.forEach(a),El=m(Nt),Ma=r(Nt,"SPAN",{});var Qn=o(Ma);Pl=p(Qn,"Writing the Training Function"),Qn.forEach(a),Nt.forEach(a),Us=m(e),J=r(e,"P",{});var Tt=o(J);Al=p(Tt,"Now you can build the training loop. "),aa=r(Tt,"A",{href:!0});var Vn=o(aa);zl=p(Vn,"notebook_launcher()"),Vn.forEach(a),Nl=p(Tt," works by passing in a function to call that will be ran across the distributed system."),Tt.forEach(a),Cs=m(e),sa=r(e,"P",{});var Xn=o(sa);Tl=p(Xn,"Here is a basic training loop for the animal classification problem:"),Xn.forEach(a),Ds=m(e),d(H.$$.fragment,e),Is=m(e),d(ye.$$.fragment,e),Ls=m(e),Y=r(e,"P",{});var qt=o(Y);ql=p(qt,"First you should set the seed and create an "),ta=r(qt,"A",{href:!0});var Zn=o(ta);xl=p(Zn,"Accelerator"),Zn.forEach(a),Ul=p(qt," object as early in the training loop as possible."),qt.forEach(a),Rs=m(e),d(W.$$.fragment,e),Ss=m(e),la=r(e,"P",{});var er=o(la);Cl=p(er,"Next you should build your dataloaders and create your model:"),er.forEach(a),Fs=m(e),d(ke.$$.fragment,e),Gs=m(e),d(K.$$.fragment,e),Os=m(e),na=r(e,"P",{});var ar=o(na);Dl=p(ar,`As you are performing transfer learning in this example, the encoder of the model starts out frozen so the head of the model can be
trained only initially:`),ar.forEach(a),Ms=m(e),d(Ee.$$.fragment,e),Bs=m(e),ra=r(e,"P",{});var sr=o(ra);Il=p(sr,"Normalizing the batches of images will make training a little faster:"),sr.forEach(a),Js=m(e),d(Pe.$$.fragment,e),Hs=m(e),oa=r(e,"P",{});var tr=o(oa);Ll=p(tr,"To make these constants available on the active device, you should set it to the Accelerator\u2019s device:"),tr.forEach(a),Ys=m(e),d(Ae.$$.fragment,e),Ws=m(e),ia=r(e,"P",{});var lr=o(ia);Rl=p(lr,"Next instantiate the rest of the PyTorch classes used for training:"),lr.forEach(a),Ks=m(e),d(ze.$$.fragment,e),Qs=m(e),Q=r(e,"P",{});var xt=o(Q);Sl=p(xt,"Before passing everything to "),pa=r(xt,"A",{href:!0});var nr=o(pa);Fl=p(nr,"prepare()"),nr.forEach(a),Gl=p(xt,"."),xt.forEach(a),Vs=m(e),d(V.$$.fragment,e),Xs=m(e),d(Ne.$$.fragment,e),Zs=m(e),ca=r(e,"P",{});var rr=o(ca);Ol=p(rr,"Now train the model:"),rr.forEach(a),et=m(e),d(Te.$$.fragment,e),at=m(e),ma=r(e,"P",{});var or=o(ma);Ml=p(or,`The evaluation loop will look slightly different compared to the training loop. The number of elements passed as well as the overall
total accuracy of each batch will be added to two constants:`),or.forEach(a),st=m(e),d(qe.$$.fragment,e),tt=m(e),fa=r(e,"P",{});var ir=o(fa);Bl=p(ir,"Next you have the rest of your standard PyTorch loop:"),ir.forEach(a),lt=m(e),d(xe.$$.fragment,e),nt=m(e),ha=r(e,"P",{});var pr=o(ha);Jl=p(pr,"Before finally the last major difference."),pr.forEach(a),rt=m(e),X=r(e,"P",{});var Ut=o(X);Hl=p(Ut,`When performing distributed evaluation, the predictions and labels need to be passed through
`),ua=r(Ut,"A",{href:!0});var cr=o(ua);Yl=p(cr,"gather()"),cr.forEach(a),Wl=p(Ut," so that all of the data is available on the current device and a properly calculated metric can be achieved:"),Ut.forEach(a),ot=m(e),d(Ue.$$.fragment,e),it=m(e),Z=r(e,"P",{});var Ct=o(Z);Kl=p(Ct,"Now you just need to calculate the actual metric for this problem, and you can print it on the main process using "),da=r(Ct,"A",{href:!0});var mr=o(da);Ql=p(mr,"print()"),mr.forEach(a),Vl=p(Ct,":"),Ct.forEach(a),pt=m(e),d(Ce.$$.fragment,e),ct=m(e),_a=r(e,"P",{});var fr=o(_a);Xl=p(fr,"A full version of this training loop is available below:"),fr.forEach(a),mt=m(e),d(De.$$.fragment,e),ft=m(e),D=r(e,"H2",{class:!0});var Dt=o(D);ee=r(Dt,"A",{id:!0,class:!0,href:!0});var hr=o(ee);Ba=r(hr,"SPAN",{});var ur=o(Ba);d(Ie.$$.fragment,ur),ur.forEach(a),hr.forEach(a),Zl=m(Dt),Ja=r(Dt,"SPAN",{});var dr=o(Ja);en=p(dr,"Using the notebook_launcher"),dr.forEach(a),Dt.forEach(a),ht=m(e),ae=r(e,"P",{});var It=o(ae);an=p(It,"All that\u2019s left is to use the "),ba=r(It,"A",{href:!0});var _r=o(ba);sn=p(_r,"notebook_launcher()"),_r.forEach(a),tn=p(It,"."),It.forEach(a),ut=m(e),se=r(e,"P",{});var Lt=o(se);ln=p(Lt,"You pass in the function, the arguments (as a tuple), and the number of processes to train on. (See the "),$a=r(Lt,"A",{href:!0});var br=o($a);nn=p(br,"documentation"),br.forEach(a),rn=p(Lt," for more information)"),Lt.forEach(a),dt=m(e),d(Le.$$.fragment,e),_t=m(e),d(Re.$$.fragment,e),bt=m(e),ga=r(e,"P",{});var $r=o(ga);on=p($r,"In the case of running on the TPU, it would look like so:"),$r.forEach(a),$t=m(e),d(Se.$$.fragment,e),gt=m(e),wa=r(e,"P",{});var gr=o(wa);pn=p(gr,"As it\u2019s running it will print the progress as well as state how many devices you ran on. This tutorial was ran with two GPUs:"),gr.forEach(a),wt=m(e),d(Fe.$$.fragment,e),vt=m(e),va=r(e,"P",{});var wr=o(va);cn=p(wr,"And that\u2019s it!"),wr.forEach(a),jt=m(e),I=r(e,"H2",{class:!0});var Rt=o(I);te=r(Rt,"A",{id:!0,class:!0,href:!0});var vr=o(te);Ha=r(vr,"SPAN",{});var jr=o(Ha);d(Ge.$$.fragment,jr),jr.forEach(a),vr.forEach(a),mn=m(Rt),Ya=r(Rt,"SPAN",{});var yr=o(Ya);fn=p(yr,"Conclusion"),yr.forEach(a),Rt.forEach(a),yt=m(e),ja=r(e,"P",{});var kr=o(ja);hn=p(kr,"This notebook showed how to perform distributed training from inside of a Jupyter Notebook. Some key notes to remember:"),kr.forEach(a),kt=m(e),q=r(e,"UL",{});var Aa=o(q);ya=r(Aa,"LI",{});var yn=o(ya);un=p(yn,"Make sure to save any code that use CUDA (or CUDA imports) for the function passed to "),ka=r(yn,"A",{href:!0});var Er=o(ka);dn=p(Er,"notebook_launcher()"),Er.forEach(a),yn.forEach(a),_n=m(Aa),Oe=r(Aa,"LI",{});var St=o(Oe);bn=p(St,"Set the "),Wa=r(St,"CODE",{});var Pr=o(Wa);$n=p(Pr,"num_processes"),Pr.forEach(a),gn=p(St," to be the number of devices used for training (such as number of GPUs, CPUs, TPUs, etc)"),St.forEach(a),wn=m(Aa),Ka=r(Aa,"LI",{});var Ar=o(Ka);vn=p(Ar,"If using the TPU, declare your model outside the training loop function"),Ar.forEach(a),Aa.forEach(a),this.h()},h(){w(f,"name","hf:doc:metadata"),w(f,"content",JSON.stringify(Fr)),w(v,"id","launching-multinode-training-from-a-jupyter-environment"),w(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(v,"href","#launching-multinode-training-from-a-jupyter-environment"),w(h,"class","relative group"),w(S,"id","configuring-the-environment"),w(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(S,"href","#configuring-the-environment"),w(x,"class","relative group"),w(Ye,"href","/docs/accelerate/v0.13.1/en/package_reference/utilities#accelerate.utils.write_basic_config"),w(G,"id","preparing-the-dataset-and-model"),w(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(G,"href","#preparing-the-dataset-and-model"),w(U,"class","relative group"),w(ce,"href","https://github.com/huggingface/accelerate/tree/main/examples#simple-vision-example"),w(ce,"rel","nofollow"),w(B,"id","writing-the-training-function"),w(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(B,"href","#writing-the-training-function"),w(C,"class","relative group"),w(aa,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher"),w(ta,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator"),w(pa,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.prepare"),w(ua,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.gather"),w(da,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.print"),w(ee,"id","using-the-notebooklauncher"),w(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ee,"href","#using-the-notebooklauncher"),w(D,"class","relative group"),w(ba,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher"),w($a,"href","../package_reference/launchers"),w(te,"id","conclusion"),w(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(te,"href","#conclusion"),w(I,"class","relative group"),w(ka,"href","/docs/accelerate/v0.13.1/en/package_reference/launchers#accelerate.notebook_launcher")},m(e,s){t(document.head,f),l(e,y,s),l(e,h,s),t(h,v),t(v,E),_(k,E,null),t(h,A),t(h,L),t(L,Ft),l(e,es,s),l(e,Je,s),t(Je,Gt),l(e,as,s),_(R,e,s),l(e,ss,s),l(e,x,s),t(x,S),t(S,Ta),_(ne,Ta,null),t(x,Ot),t(x,qa),t(qa,Mt),l(e,ts,s),l(e,He,s),t(He,Bt),l(e,ls,s),_(re,e,s),l(e,ns,s),l(e,N,s),t(N,Jt),t(N,xa),t(xa,Ht),t(N,Yt),t(N,Ye),t(Ye,Wt),t(N,Kt),l(e,rs,s),l(e,We,s),t(We,Qt),l(e,os,s),_(F,e,s),l(e,is,s),_(oe,e,s),l(e,ps,s),l(e,U,s),t(U,G),t(G,Ua),_(ie,Ua,null),t(U,Vt),t(U,Ca),t(Ca,Xt),l(e,cs,s),l(e,z,s),t(z,Zt),t(z,Da),t(Da,el),t(z,al),t(z,Ia),t(Ia,sl),t(z,tl),t(z,La),t(La,ll),t(z,nl),l(e,ms,s),l(e,Ke,s),t(Ke,rl),l(e,fs,s),l(e,pe,s),t(pe,ol),t(pe,ce),t(ce,il),l(e,hs,s),_(me,e,s),l(e,us,s),l(e,Qe,s),t(Qe,pl),l(e,ds,s),_(fe,e,s),l(e,_s,s),_(he,e,s),l(e,bs,s),l(e,O,s),t(O,cl),t(O,Ra),t(Ra,ml),t(O,fl),l(e,$s,s),_(ue,e,s),l(e,gs,s),_(de,e,s),l(e,ws,s),l(e,Ve,s),t(Ve,hl),l(e,vs,s),_(_e,e,s),l(e,js,s),l(e,M,s),t(M,ul),t(M,Sa),t(Sa,dl),t(M,_l),l(e,ys,s),_(be,e,s),l(e,ks,s),l(e,Xe,s),t(Xe,bl),l(e,Es,s),_($e,e,s),l(e,Ps,s),l(e,Ze,s),t(Ze,$l),l(e,As,s),_(ge,e,s),l(e,zs,s),l(e,T,s),t(T,gl),t(T,Fa),t(Fa,wl),t(T,vl),t(T,Ga),t(Ga,jl),t(T,yl),l(e,Ns,s),_(we,e,s),l(e,Ts,s),l(e,ea,s),t(ea,kl),l(e,qs,s),_(ve,e,s),l(e,xs,s),l(e,C,s),t(C,B),t(B,Oa),_(je,Oa,null),t(C,El),t(C,Ma),t(Ma,Pl),l(e,Us,s),l(e,J,s),t(J,Al),t(J,aa),t(aa,zl),t(J,Nl),l(e,Cs,s),l(e,sa,s),t(sa,Tl),l(e,Ds,s),_(H,e,s),l(e,Is,s),_(ye,e,s),l(e,Ls,s),l(e,Y,s),t(Y,ql),t(Y,ta),t(ta,xl),t(Y,Ul),l(e,Rs,s),_(W,e,s),l(e,Ss,s),l(e,la,s),t(la,Cl),l(e,Fs,s),_(ke,e,s),l(e,Gs,s),_(K,e,s),l(e,Os,s),l(e,na,s),t(na,Dl),l(e,Ms,s),_(Ee,e,s),l(e,Bs,s),l(e,ra,s),t(ra,Il),l(e,Js,s),_(Pe,e,s),l(e,Hs,s),l(e,oa,s),t(oa,Ll),l(e,Ys,s),_(Ae,e,s),l(e,Ws,s),l(e,ia,s),t(ia,Rl),l(e,Ks,s),_(ze,e,s),l(e,Qs,s),l(e,Q,s),t(Q,Sl),t(Q,pa),t(pa,Fl),t(Q,Gl),l(e,Vs,s),_(V,e,s),l(e,Xs,s),_(Ne,e,s),l(e,Zs,s),l(e,ca,s),t(ca,Ol),l(e,et,s),_(Te,e,s),l(e,at,s),l(e,ma,s),t(ma,Ml),l(e,st,s),_(qe,e,s),l(e,tt,s),l(e,fa,s),t(fa,Bl),l(e,lt,s),_(xe,e,s),l(e,nt,s),l(e,ha,s),t(ha,Jl),l(e,rt,s),l(e,X,s),t(X,Hl),t(X,ua),t(ua,Yl),t(X,Wl),l(e,ot,s),_(Ue,e,s),l(e,it,s),l(e,Z,s),t(Z,Kl),t(Z,da),t(da,Ql),t(Z,Vl),l(e,pt,s),_(Ce,e,s),l(e,ct,s),l(e,_a,s),t(_a,Xl),l(e,mt,s),_(De,e,s),l(e,ft,s),l(e,D,s),t(D,ee),t(ee,Ba),_(Ie,Ba,null),t(D,Zl),t(D,Ja),t(Ja,en),l(e,ht,s),l(e,ae,s),t(ae,an),t(ae,ba),t(ba,sn),t(ae,tn),l(e,ut,s),l(e,se,s),t(se,ln),t(se,$a),t($a,nn),t(se,rn),l(e,dt,s),_(Le,e,s),l(e,_t,s),_(Re,e,s),l(e,bt,s),l(e,ga,s),t(ga,on),l(e,$t,s),_(Se,e,s),l(e,gt,s),l(e,wa,s),t(wa,pn),l(e,wt,s),_(Fe,e,s),l(e,vt,s),l(e,va,s),t(va,cn),l(e,jt,s),l(e,I,s),t(I,te),t(te,Ha),_(Ge,Ha,null),t(I,mn),t(I,Ya),t(Ya,fn),l(e,yt,s),l(e,ja,s),t(ja,hn),l(e,kt,s),l(e,q,s),t(q,ya),t(ya,un),t(ya,ka),t(ka,dn),t(q,_n),t(q,Oe),t(Oe,bn),t(Oe,Wa),t(Wa,$n),t(Oe,gn),t(q,wn),t(q,Ka),t(Ka,vn),Et=!0},p(e,[s]){const Me={};s&2&&(Me.$$scope={dirty:s,ctx:e}),R.$set(Me);const Qa={};s&2&&(Qa.$$scope={dirty:s,ctx:e}),F.$set(Qa);const Va={};s&2&&(Va.$$scope={dirty:s,ctx:e}),H.$set(Va);const Xa={};s&2&&(Xa.$$scope={dirty:s,ctx:e}),W.$set(Xa);const Za={};s&2&&(Za.$$scope={dirty:s,ctx:e}),K.$set(Za);const Be={};s&2&&(Be.$$scope={dirty:s,ctx:e}),V.$set(Be)},i(e){Et||(b(k.$$.fragment,e),b(R.$$.fragment,e),b(ne.$$.fragment,e),b(re.$$.fragment,e),b(F.$$.fragment,e),b(oe.$$.fragment,e),b(ie.$$.fragment,e),b(me.$$.fragment,e),b(fe.$$.fragment,e),b(he.$$.fragment,e),b(ue.$$.fragment,e),b(de.$$.fragment,e),b(_e.$$.fragment,e),b(be.$$.fragment,e),b($e.$$.fragment,e),b(ge.$$.fragment,e),b(we.$$.fragment,e),b(ve.$$.fragment,e),b(je.$$.fragment,e),b(H.$$.fragment,e),b(ye.$$.fragment,e),b(W.$$.fragment,e),b(ke.$$.fragment,e),b(K.$$.fragment,e),b(Ee.$$.fragment,e),b(Pe.$$.fragment,e),b(Ae.$$.fragment,e),b(ze.$$.fragment,e),b(V.$$.fragment,e),b(Ne.$$.fragment,e),b(Te.$$.fragment,e),b(qe.$$.fragment,e),b(xe.$$.fragment,e),b(Ue.$$.fragment,e),b(Ce.$$.fragment,e),b(De.$$.fragment,e),b(Ie.$$.fragment,e),b(Le.$$.fragment,e),b(Re.$$.fragment,e),b(Se.$$.fragment,e),b(Fe.$$.fragment,e),b(Ge.$$.fragment,e),Et=!0)},o(e){$(k.$$.fragment,e),$(R.$$.fragment,e),$(ne.$$.fragment,e),$(re.$$.fragment,e),$(F.$$.fragment,e),$(oe.$$.fragment,e),$(ie.$$.fragment,e),$(me.$$.fragment,e),$(fe.$$.fragment,e),$(he.$$.fragment,e),$(ue.$$.fragment,e),$(de.$$.fragment,e),$(_e.$$.fragment,e),$(be.$$.fragment,e),$($e.$$.fragment,e),$(ge.$$.fragment,e),$(we.$$.fragment,e),$(ve.$$.fragment,e),$(je.$$.fragment,e),$(H.$$.fragment,e),$(ye.$$.fragment,e),$(W.$$.fragment,e),$(ke.$$.fragment,e),$(K.$$.fragment,e),$(Ee.$$.fragment,e),$(Pe.$$.fragment,e),$(Ae.$$.fragment,e),$(ze.$$.fragment,e),$(V.$$.fragment,e),$(Ne.$$.fragment,e),$(Te.$$.fragment,e),$(qe.$$.fragment,e),$(xe.$$.fragment,e),$(Ue.$$.fragment,e),$(Ce.$$.fragment,e),$(De.$$.fragment,e),$(Ie.$$.fragment,e),$(Le.$$.fragment,e),$(Re.$$.fragment,e),$(Se.$$.fragment,e),$(Fe.$$.fragment,e),$(Ge.$$.fragment,e),Et=!1},d(e){a(f),e&&a(y),e&&a(h),g(k),e&&a(es),e&&a(Je),e&&a(as),g(R,e),e&&a(ss),e&&a(x),g(ne),e&&a(ts),e&&a(He),e&&a(ls),g(re,e),e&&a(ns),e&&a(N),e&&a(rs),e&&a(We),e&&a(os),g(F,e),e&&a(is),g(oe,e),e&&a(ps),e&&a(U),g(ie),e&&a(cs),e&&a(z),e&&a(ms),e&&a(Ke),e&&a(fs),e&&a(pe),e&&a(hs),g(me,e),e&&a(us),e&&a(Qe),e&&a(ds),g(fe,e),e&&a(_s),g(he,e),e&&a(bs),e&&a(O),e&&a($s),g(ue,e),e&&a(gs),g(de,e),e&&a(ws),e&&a(Ve),e&&a(vs),g(_e,e),e&&a(js),e&&a(M),e&&a(ys),g(be,e),e&&a(ks),e&&a(Xe),e&&a(Es),g($e,e),e&&a(Ps),e&&a(Ze),e&&a(As),g(ge,e),e&&a(zs),e&&a(T),e&&a(Ns),g(we,e),e&&a(Ts),e&&a(ea),e&&a(qs),g(ve,e),e&&a(xs),e&&a(C),g(je),e&&a(Us),e&&a(J),e&&a(Cs),e&&a(sa),e&&a(Ds),g(H,e),e&&a(Is),g(ye,e),e&&a(Ls),e&&a(Y),e&&a(Rs),g(W,e),e&&a(Ss),e&&a(la),e&&a(Fs),g(ke,e),e&&a(Gs),g(K,e),e&&a(Os),e&&a(na),e&&a(Ms),g(Ee,e),e&&a(Bs),e&&a(ra),e&&a(Js),g(Pe,e),e&&a(Hs),e&&a(oa),e&&a(Ys),g(Ae,e),e&&a(Ws),e&&a(ia),e&&a(Ks),g(ze,e),e&&a(Qs),e&&a(Q),e&&a(Vs),g(V,e),e&&a(Xs),g(Ne,e),e&&a(Zs),e&&a(ca),e&&a(et),g(Te,e),e&&a(at),e&&a(ma),e&&a(st),g(qe,e),e&&a(tt),e&&a(fa),e&&a(lt),g(xe,e),e&&a(nt),e&&a(ha),e&&a(rt),e&&a(X),e&&a(ot),g(Ue,e),e&&a(it),e&&a(Z),e&&a(pt),g(Ce,e),e&&a(ct),e&&a(_a),e&&a(mt),g(De,e),e&&a(ft),e&&a(D),g(Ie),e&&a(ht),e&&a(ae),e&&a(ut),e&&a(se),e&&a(dt),g(Le,e),e&&a(_t),g(Re,e),e&&a(bt),e&&a(ga),e&&a($t),g(Se,e),e&&a(gt),e&&a(wa),e&&a(wt),g(Fe,e),e&&a(vt),e&&a(va),e&&a(jt),e&&a(I),g(Ge),e&&a(yt),e&&a(ja),e&&a(kt),e&&a(q)}}}const Fr={local:"launching-multinode-training-from-a-jupyter-environment",sections:[{local:"configuring-the-environment",title:"Configuring the Environment"},{local:"preparing-the-dataset-and-model",title:"Preparing the Dataset and Model"},{local:"writing-the-training-function",title:"Writing the Training Function"},{local:"using-the-notebooklauncher",title:"Using the notebook_launcher"},{local:"conclusion",title:"Conclusion"}],title:"Launching Multi-Node Training from a Jupyter Environment"};function Gr(P){return xr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hr extends zr{constructor(f){super();Nr(this,f,Gr,Sr,Tr,{})}}export{Hr as default,Fr as metadata};
