import{S as xt,i as Lt,s as jt,e as n,k as l,w as g,t as c,M as Pt,c as s,d as a,m as i,a as r,x as _,h as p,b as d,G as e,g as L,y as b,L as Dt,q as y,o as $,B as w,v as Rt}from"../../chunks/vendor-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as At}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Mt(ot){let E,ie,x,j,H,k,$e,J,we,ce,F,Ee,pe,I,me,h,xe,K,Le,je,Q,Pe,De,X,Re,Te,Z,Ae,Me,de,o,S,Oe,z,ke,C,Ie,Se,P,q,Ce,ee,qe,Be,D,B,Ve,te,Ue,Ge,R,V,Ye,ae,Ne,Fe,T,U,ze,ne,We,He,f,G,Je,se,Ke,Qe,re,Xe,Ze,A,Y,et,oe,tt,at,M,N,nt,le,st,he;return k=new At({}),I=new Tt({props:{code:`def generate_map(index):
    root = sm.Asset(name=f"root_{index}")
    root += sm.Box(
        name=f"floor_{index}",
        position=[0, -0.05, 0],
        scaling=[10, 0.1, 10],
        material=sm.Material.BLUE,
        with_collider=True,
    )
    root += sm.Box(
        name=f"wall1_{index}",
        position=[-1, 0.5, 0],
        scaling=[0.1, 1, 5.1],
        material=sm.Material.GRAY75,
        with_collider=True,
    )
    root += sm.Box(
        name=f"wall2_{index}",
        position=[1, 0.5, 0],
        scaling=[0.1, 1, 5.1],
        material=sm.Material.GRAY75,
        with_collider=True,
    )
    root += sm.Box(
        name=f"wall3_{index}",
        position=[0, 0.5, 4.5],
        scaling=[5.9, 1, 0.1],
        material=sm.Material.GRAY75,
        with_collider=True,
    )

    # add actors, sensors, reward functions etc ...

    return root`,highlighted:`def generate_map(index):
    <span class="hljs-attr">root</span> = sm.Asset(<span class="hljs-attr">name=f&quot;root_{index}&quot;)</span>
    root += sm.Box(
        <span class="hljs-attr">name=f&quot;floor_{index}&quot;,</span>
        <span class="hljs-attr">position=[0,</span> -<span class="hljs-number">0.05</span>, <span class="hljs-number">0</span>],
        <span class="hljs-attr">scaling=[10,</span> <span class="hljs-number">0.1</span>, <span class="hljs-number">10</span>],
        <span class="hljs-attr">material=sm.Material.BLUE,</span>
        <span class="hljs-attr">with_collider=True,</span>
    )
    root += sm.Box(
        <span class="hljs-attr">name=f&quot;wall1_{index}&quot;,</span>
        <span class="hljs-attr">position=[-1,</span> <span class="hljs-number">0.5</span>, <span class="hljs-number">0</span>],
        <span class="hljs-attr">scaling=[0.1,</span> <span class="hljs-number">1</span>, <span class="hljs-number">5.1</span>],
        <span class="hljs-attr">material=sm.Material.GRAY75,</span>
        <span class="hljs-attr">with_collider=True,</span>
    )
    root += sm.Box(
        <span class="hljs-attr">name=f&quot;wall2_{index}&quot;,</span>
        <span class="hljs-attr">position=[1,</span> <span class="hljs-number">0.5</span>, <span class="hljs-number">0</span>],
        <span class="hljs-attr">scaling=[0.1,</span> <span class="hljs-number">1</span>, <span class="hljs-number">5.1</span>],
        <span class="hljs-attr">material=sm.Material.GRAY75,</span>
        <span class="hljs-attr">with_collider=True,</span>
    )
    root += sm.Box(
        <span class="hljs-attr">name=f&quot;wall3_{index}&quot;,</span>
        <span class="hljs-attr">position=[0,</span> <span class="hljs-number">0.5</span>, <span class="hljs-number">4.5</span>],
        <span class="hljs-attr">scaling=[5.9,</span> <span class="hljs-number">1</span>, <span class="hljs-number">0.1</span>],
        <span class="hljs-attr">material=sm.Material.GRAY75,</span>
        <span class="hljs-attr">with_collider=True,</span>
    )

    <span class="hljs-comment"># add actors, sensors, reward functions etc ...</span>

    return root`}}),S=new O({props:{name:"class simulate.ParallelRLEnv",anchor:"simulate.ParallelRLEnv",parameters:[{name:"scene_or_map_fn",val:": typing.Union[typing.Callable, simulate.scene.Scene]"},{name:"n_maps",val:": typing.Optional[int] = 1"},{name:"n_show",val:": typing.Optional[int] = 1"},{name:"time_step",val:": typing.Optional[float] = 0.03333333333333333"},{name:"frame_skip",val:": typing.Optional[int] = 4"},{name:"**engine_kwargs",val:""}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.env_fn",description:`<strong>env_fn</strong> (<code>Callable</code>) &#x2014;
a generator function that returns a RLEnv for generating instances of the desired environment.`,name:"env_fn"},{anchor:"simulate.ParallelRLEnv.n_parallel",description:`<strong>n_parallel</strong> (<code>int</code>) &#x2014;
the number of executable instances to create.`,name:"n_parallel"},{anchor:"simulate.ParallelRLEnv.starting_port",description:`<strong>starting_port</strong> (<code>int</code>, <em>optional</em>, defaults to <code>55001</code>) &#x2014;
initial communication port for spawned executables.`,name:"starting_port"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L52"}}),q=new O({props:{name:"close",anchor:"simulate.ParallelRLEnv.close",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L300"}}),B=new O({props:{name:"env_is_wrapped",anchor:"simulate.ParallelRLEnv.env_is_wrapped",parameters:[{name:"wrapper_class",val:": typing.Type[gym.core.Wrapper]"},{name:"indices",val:": typing.Union[NoneType, int, typing.Iterable[int]] = None"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L317"}}),V=new O({props:{name:"reset",anchor:"simulate.ParallelRLEnv.reset",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L227",returnDescription:`
<p>the observation of the environment after reset.</p>
`,returnType:`
<p>obs (<code>Dict</code>)</p>
`}}),U=new O({props:{name:"sample_action",anchor:"simulate.ParallelRLEnv.sample_action",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L304",returnDescription:`
<p>TODO</p>
`,returnType:`
<p>action</p>
`}}),G=new O({props:{name:"step",anchor:"simulate.ParallelRLEnv.step",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.step.action",description:`<strong>action</strong> (<code>Dict</code> or <code>List</code>) &#x2014;
a dict or list of actions for each actuator.`,name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L126",returnDescription:`
<p>a list of dict of observations for each sensor.
all_reward (<code>List[float]</code>):
all the rewards for the current step.
all_done (<code>List[bool]</code>):
whether each episode is done.
all_info (<code>List[Dict]</code>):
a list of dict of additional information.</p>
`,returnType:`
<p>all_observation (<code>List[Dict]</code>)</p>
`}}),Y=new O({props:{name:"step_recv_async",anchor:"simulate.ParallelRLEnv.step_recv_async",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L196",returnDescription:`
<p>A dict of observations for each sensor.
reward (<code>float</code>):
The reward for the current step.
done (<code>bool</code>):
Whether the episode is done.
info (<code>Dict</code>):
A dict of additional information.</p>
`,returnType:`
<p>obs (<code>Dict</code>)</p>
`}}),N=new O({props:{name:"step_send_async",anchor:"simulate.ParallelRLEnv.step_send_async",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.step_send_async.action",description:`<strong>action</strong> (<code>Dict</code> or <code>List</code> or <code>np.ndarray</code>) &#x2014;
A dict or list of actions for each actuator.`,name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L149"}}),{c(){E=n("meta"),ie=l(),x=n("h1"),j=n("a"),H=n("span"),g(k.$$.fragment),$e=l(),J=n("span"),we=c("Map pools"),ce=l(),F=n("p"),Ee=c(`Map pools allow you to instantiate multiple versions of your environment on the backend, the enables higher
throughput with parallization of interaction in simulations and embodied environments.
Using map pools is simple with \u{1F917} Simulate. First define a function that will generate your environment, we call each environment instance a \u201Cmap\u201D.`),pe=l(),g(I.$$.fragment),me=l(),h=n("p"),xe=c("You can then provide the "),K=n("code"),Le=c("generate_map"),je=c(" method as an argument to the "),Q=n("code"),Pe=c("sm.ParallelRLEnv"),De=c(" class, which will instantiate "),X=n("code"),Re=c("n_maps"),Te=c(`.
Training with a subset of the maps is possible using the `),Z=n("code"),Ae=c("n_show"),Me=c(" option. At each environment reset, it cycles through to the next map."),de=l(),o=n("div"),g(S.$$.fragment),Oe=l(),z=n("p"),ke=c(`RL environment wrapper for Simulate scene. Uses functionality from the VecEnv in stable baselines 3
For more information on VecEnv, see the source
`),C=n("a"),Ie=c("https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),Se=l(),P=n("div"),g(q.$$.fragment),Ce=l(),ee=n("p"),qe=c("Close the environment."),Be=l(),D=n("div"),g(B.$$.fragment),Ve=l(),te=n("p"),Ue=c("Check if the environment is wrapped."),Ge=l(),R=n("div"),g(V.$$.fragment),Ye=l(),ae=n("p"),Ne=c("Resets the actors and the scene of the environment."),Fe=l(),T=n("div"),g(U.$$.fragment),ze=l(),ne=n("p"),We=c("Samples an action from the actors in the environment. This function loads the configuration of maps and actors to return the correct shape across multiple configurations."),He=l(),f=n("div"),g(G.$$.fragment),Je=l(),se=n("p"),Ke=c("The step function for the environment, follows the API from OpenAI Gym."),Qe=l(),re=n("p"),Xe=c("TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),Ze=l(),A=n("div"),g(Y.$$.fragment),et=l(),oe=n("p"),tt=c("Receive the response of a step from the environment asynchronously."),at=l(),M=n("div"),g(N.$$.fragment),nt=l(),le=n("p"),st=c("Send a step to the environment asynchronously."),this.h()},l(t){const u=Pt('[data-svelte="svelte-1phssyn"]',document.head);E=s(u,"META",{name:!0,content:!0}),u.forEach(a),ie=i(t),x=s(t,"H1",{class:!0});var ue=r(x);j=s(ue,"A",{id:!0,class:!0,href:!0});var lt=r(j);H=s(lt,"SPAN",{});var it=r(H);_(k.$$.fragment,it),it.forEach(a),lt.forEach(a),$e=i(ue),J=s(ue,"SPAN",{});var ct=r(J);we=p(ct,"Map pools"),ct.forEach(a),ue.forEach(a),ce=i(t),F=s(t,"P",{});var pt=r(F);Ee=p(pt,`Map pools allow you to instantiate multiple versions of your environment on the backend, the enables higher
throughput with parallization of interaction in simulations and embodied environments.
Using map pools is simple with \u{1F917} Simulate. First define a function that will generate your environment, we call each environment instance a \u201Cmap\u201D.`),pt.forEach(a),pe=i(t),_(I.$$.fragment,t),me=i(t),h=s(t,"P",{});var v=r(h);xe=p(v,"You can then provide the "),K=s(v,"CODE",{});var mt=r(K);Le=p(mt,"generate_map"),mt.forEach(a),je=p(v," method as an argument to the "),Q=s(v,"CODE",{});var dt=r(Q);Pe=p(dt,"sm.ParallelRLEnv"),dt.forEach(a),De=p(v," class, which will instantiate "),X=s(v,"CODE",{});var ht=r(X);Re=p(ht,"n_maps"),ht.forEach(a),Te=p(v,`.
Training with a subset of the maps is possible using the `),Z=s(v,"CODE",{});var ut=r(Z);Ae=p(ut,"n_show"),ut.forEach(a),Me=p(v," option. At each environment reset, it cycles through to the next map."),v.forEach(a),de=i(t),o=s(t,"DIV",{class:!0});var m=r(o);_(S.$$.fragment,m),Oe=i(m),z=s(m,"P",{});var rt=r(z);ke=p(rt,`RL environment wrapper for Simulate scene. Uses functionality from the VecEnv in stable baselines 3
For more information on VecEnv, see the source
`),C=s(rt,"A",{href:!0,rel:!0});var ft=r(C);Ie=p(ft,"https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),ft.forEach(a),rt.forEach(a),Se=i(m),P=s(m,"DIV",{class:!0});var fe=r(P);_(q.$$.fragment,fe),Ce=i(fe),ee=s(fe,"P",{});var vt=r(ee);qe=p(vt,"Close the environment."),vt.forEach(a),fe.forEach(a),Be=i(m),D=s(m,"DIV",{class:!0});var ve=r(D);_(B.$$.fragment,ve),Ve=i(ve),te=s(ve,"P",{});var gt=r(te);Ue=p(gt,"Check if the environment is wrapped."),gt.forEach(a),ve.forEach(a),Ge=i(m),R=s(m,"DIV",{class:!0});var ge=r(R);_(V.$$.fragment,ge),Ye=i(ge),ae=s(ge,"P",{});var _t=r(ae);Ne=p(_t,"Resets the actors and the scene of the environment."),_t.forEach(a),ge.forEach(a),Fe=i(m),T=s(m,"DIV",{class:!0});var _e=r(T);_(U.$$.fragment,_e),ze=i(_e),ne=s(_e,"P",{});var bt=r(ne);We=p(bt,"Samples an action from the actors in the environment. This function loads the configuration of maps and actors to return the correct shape across multiple configurations."),bt.forEach(a),_e.forEach(a),He=i(m),f=s(m,"DIV",{class:!0});var W=r(f);_(G.$$.fragment,W),Je=i(W),se=s(W,"P",{});var yt=r(se);Ke=p(yt,"The step function for the environment, follows the API from OpenAI Gym."),yt.forEach(a),Qe=i(W),re=s(W,"P",{});var $t=r(re);Xe=p($t,"TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),$t.forEach(a),W.forEach(a),Ze=i(m),A=s(m,"DIV",{class:!0});var be=r(A);_(Y.$$.fragment,be),et=i(be),oe=s(be,"P",{});var wt=r(oe);tt=p(wt,"Receive the response of a step from the environment asynchronously."),wt.forEach(a),be.forEach(a),at=i(m),M=s(m,"DIV",{class:!0});var ye=r(M);_(N.$$.fragment,ye),nt=i(ye),le=s(ye,"P",{});var Et=r(le);st=p(Et,"Send a step to the environment asynchronously."),Et.forEach(a),ye.forEach(a),m.forEach(a),this.h()},h(){d(E,"name","hf:doc:metadata"),d(E,"content",JSON.stringify(Ot)),d(j,"id","simulate.ParallelRLEnv"),d(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(j,"href","#simulate.ParallelRLEnv"),d(x,"class","relative group"),d(C,"href","https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),d(C,"rel","nofollow"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,E),L(t,ie,u),L(t,x,u),e(x,j),e(j,H),b(k,H,null),e(x,$e),e(x,J),e(J,we),L(t,ce,u),L(t,F,u),e(F,Ee),L(t,pe,u),b(I,t,u),L(t,me,u),L(t,h,u),e(h,xe),e(h,K),e(K,Le),e(h,je),e(h,Q),e(Q,Pe),e(h,De),e(h,X),e(X,Re),e(h,Te),e(h,Z),e(Z,Ae),e(h,Me),L(t,de,u),L(t,o,u),b(S,o,null),e(o,Oe),e(o,z),e(z,ke),e(z,C),e(C,Ie),e(o,Se),e(o,P),b(q,P,null),e(P,Ce),e(P,ee),e(ee,qe),e(o,Be),e(o,D),b(B,D,null),e(D,Ve),e(D,te),e(te,Ue),e(o,Ge),e(o,R),b(V,R,null),e(R,Ye),e(R,ae),e(ae,Ne),e(o,Fe),e(o,T),b(U,T,null),e(T,ze),e(T,ne),e(ne,We),e(o,He),e(o,f),b(G,f,null),e(f,Je),e(f,se),e(se,Ke),e(f,Qe),e(f,re),e(re,Xe),e(o,Ze),e(o,A),b(Y,A,null),e(A,et),e(A,oe),e(oe,tt),e(o,at),e(o,M),b(N,M,null),e(M,nt),e(M,le),e(le,st),he=!0},p:Dt,i(t){he||(y(k.$$.fragment,t),y(I.$$.fragment,t),y(S.$$.fragment,t),y(q.$$.fragment,t),y(B.$$.fragment,t),y(V.$$.fragment,t),y(U.$$.fragment,t),y(G.$$.fragment,t),y(Y.$$.fragment,t),y(N.$$.fragment,t),he=!0)},o(t){$(k.$$.fragment,t),$(I.$$.fragment,t),$(S.$$.fragment,t),$(q.$$.fragment,t),$(B.$$.fragment,t),$(V.$$.fragment,t),$(U.$$.fragment,t),$(G.$$.fragment,t),$(Y.$$.fragment,t),$(N.$$.fragment,t),he=!1},d(t){a(E),t&&a(ie),t&&a(x),w(k),t&&a(ce),t&&a(F),t&&a(pe),w(I,t),t&&a(me),t&&a(h),t&&a(de),t&&a(o),w(S),w(q),w(B),w(V),w(U),w(G),w(Y),w(N)}}}const Ot={local:"simulate.ParallelRLEnv",title:"Map pools"};function kt(ot){return Rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bt extends xt{constructor(E){super();Lt(this,E,kt,Mt,jt,{})}}export{Bt as default,Ot as metadata};
