import{S as Bn,i as Hn,s as Jn,e as r,k as s,w as f,t as p,M as jn,c as a,d as n,m as i,a as o,x as h,h as m,b as l,G as e,g as R,y as v,L as zn,q as g,o as b,B as _,v as Kn}from"../../chunks/vendor-hf-doc-builder.js";import{D as y}from"../../chunks/Docstring-hf-doc-builder.js";import{I as Qn}from"../../chunks/IconCopyLink-hf-doc-builder.js";function Xn(bn){let P,Ge,x,T,be,B,st,_e,it,Ne,c,H,lt,ye,ct,pt,I,J,mt,$e,dt,ut,O,j,ft,Ee,ht,vt,A,z,gt,Le,bt,_t,S,K,yt,we,$t,Et,w,Q,Lt,De,wt,Dt,Re,Rt,Pt,V,X,xt,Pe,Tt,It,k,Y,Ot,xe,At,St,U,Z,Vt,Te,kt,We,d,ee,Ut,de,Ct,te,Mt,Gt,C,ne,Nt,Ie,Wt,Ft,M,re,qt,Oe,Bt,Ht,G,ae,Jt,Ae,jt,zt,N,oe,Kt,Se,Qt,Xt,D,se,Yt,Ve,Zt,en,ke,tn,nn,W,ie,rn,Ue,an,on,F,le,sn,Ce,ln,Fe,L,ce,cn,ue,pn,pe,mn,dn,q,me,un,Me,fn,qe,fe,hn,Be;return B=new Qn({}),H=new y({props:{name:"class simulate.RLEnv",anchor:"simulate.RLEnv",parameters:[{name:"scene",val:": Scene"},{name:"time_step",val:": typing.Optional[float] = 0.03333333333333333"},{name:"frame_skip",val:": typing.Optional[int] = 4"}],parametersDescription:[{anchor:"simulate.RLEnv.scene",description:`<strong>scene</strong> (<code>Scene</code>) &#x2014;
The Simulate scene to be wrapped.`,name:"scene"},{anchor:"simulate.RLEnv.time_step",description:`<strong>time_step</strong> (<code>float</code>, <em>optional</em>, defaults to <code>1/30.0</code>) &#x2014;
The physics timestep of the environment.`,name:"time_step"},{anchor:"simulate.RLEnv.frame_skip",description:`<strong>frame_skip</strong> (<code>int</code>, <em>optional</em>, defaults to <code>4</code>) &#x2014;
The number of times an action is repeated in the backend simulation before the next observation is returned.`,name:"frame_skip"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L23"}}),J=new y({props:{name:"close",anchor:"simulate.RLEnv.close",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L255"}}),j=new y({props:{name:"get_attr",anchor:"simulate.RLEnv.get_attr",parameters:[{name:"attr_name",val:": str"},{name:"indices",val:": typing.Any = None"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L284"}}),z=new y({props:{name:"reset",anchor:"simulate.RLEnv.reset",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L205",returnDescription:`
<p>the observation of the environment after reset.</p>
`,returnType:`
<p>obs (<code>Dict</code>)</p>
`}}),K=new y({props:{name:"sample_action",anchor:"simulate.RLEnv.sample_action",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L259",returnDescription:`
<p>Lists of the actions, dimensions are n-maps, n-actors, action-dim.</p>
`,returnType:`
<p>action (<code>list[list[list[float]]]</code>)</p>
`}}),Q=new y({props:{name:"step",anchor:"simulate.RLEnv.step",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.RLEnv.step.action",description:`<strong>action</strong> (<code>Dict</code> or <code>List</code>) &#x2014;
The action to be taken by the environment.`,name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L82",returnDescription:`
<p>A dictionary of observations from the environment.
reward (<code>float</code>):
The reward for the action.
done (<code>bool</code>):
Whether the episode has ended.
info (<code>Dict</code>):
A dictionary of additional information.</p>
`,returnType:`
<p>observation (<code>Dict</code>)</p>
`}}),X=new y({props:{name:"step_async",anchor:"simulate.RLEnv.step_async",parameters:[{name:"actions",val:": ndarray"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L280"}}),Y=new y({props:{name:"step_recv_async",anchor:"simulate.RLEnv.step_recv_async",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L160",returnDescription:`
<p>A dictionary containing the observation from the environment.
reward (<code>float</code>):
The reward for the action.
done (<code>bool</code>):
Whether the episode has ended.
info (<code>Dict</code>):
A dictionary of additional information.</p>
`,returnType:`
<p>observation (<code>Dict</code>)</p>
`}}),Z=new y({props:{name:"step_send_async",anchor:"simulate.RLEnv.step_send_async",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.RLEnv.step_send_async.action",description:"<strong>action</strong> (<code>Dict</code> or <code>List</code> or <code>ndarray</code>) &#x2014; The action to be executed in the environment.",name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/rl_env.py#L106"}}),ee=new y({props:{name:"class simulate.ParallelRLEnv",anchor:"simulate.ParallelRLEnv",parameters:[{name:"map_fn",val:": typing.Union[typing.Callable, simulate.scene.Scene]"},{name:"n_maps",val:": typing.Optional[int] = 1"},{name:"n_show",val:": typing.Optional[int] = 1"},{name:"time_step",val:": typing.Optional[float] = 0.03333333333333333"},{name:"frame_skip",val:": typing.Optional[int] = 4"},{name:"**engine_kwargs",val:""}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.map_fn",description:`<strong>map_fn</strong> (<code>Callable</code>) &#x2014;
a generator function that returns a RLEnv for generating instances of the desired environment.`,name:"map_fn"},{anchor:"simulate.ParallelRLEnv.n_parallel",description:`<strong>n_parallel</strong> (<code>int</code>) &#x2014;
the number of executable instances to create.`,name:"n_parallel"},{anchor:"simulate.ParallelRLEnv.starting_port",description:`<strong>starting_port</strong> (<code>int</code>, <em>optional</em>, defaults to <code>55001</code>) &#x2014;
initial communication port for spawned executables.`,name:"starting_port"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L52"}}),ne=new y({props:{name:"close",anchor:"simulate.ParallelRLEnv.close",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L299"}}),re=new y({props:{name:"env_is_wrapped",anchor:"simulate.ParallelRLEnv.env_is_wrapped",parameters:[{name:"wrapper_class",val:": typing.Type[gym.core.Wrapper]"},{name:"indices",val:": typing.Union[NoneType, int, typing.Iterable[int]] = None"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L322"}}),ae=new y({props:{name:"reset",anchor:"simulate.ParallelRLEnv.reset",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L226",returnDescription:`
<p>the observation of the environment after reset.</p>
`,returnType:`
<p>obs (<code>Dict</code>)</p>
`}}),oe=new y({props:{name:"sample_action",anchor:"simulate.ParallelRLEnv.sample_action",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L303",returnDescription:`
<p>Lists of the actions, dimensions are n-maps, n-actors, action-dim.</p>
`,returnType:`
<p>action (<code>list[list[list[float]]]</code>)</p>
`}}),se=new y({props:{name:"step",anchor:"simulate.ParallelRLEnv.step",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.step.action",description:`<strong>action</strong> (<code>Dict</code> or <code>List</code>) &#x2014;
a dict or list of actions for each actuator.`,name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L125",returnDescription:`
<p>a list of dict of observations for each sensor.
all_reward (<code>List[float]</code>):
all the rewards for the current step.
all_done (<code>List[bool]</code>):
whether each episode is done.
all_info (<code>List[Dict]</code>):
a list of dict of additional information.</p>
`,returnType:`
<p>all_observation (<code>List[Dict]</code>)</p>
`}}),ie=new y({props:{name:"step_recv_async",anchor:"simulate.ParallelRLEnv.step_recv_async",parameters:[],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L195",returnDescription:`
<p>A dict of observations for each sensor.
reward (<code>float</code>):
The reward for the current step.
done (<code>bool</code>):
Whether the episode is done.
info (<code>Dict</code>):
A dict of additional information.</p>
`,returnType:`
<p>obs (<code>Dict</code>)</p>
`}}),le=new y({props:{name:"step_send_async",anchor:"simulate.ParallelRLEnv.step_send_async",parameters:[{name:"action",val:": typing.Union[typing.Dict, typing.List, numpy.ndarray]"}],parametersDescription:[{anchor:"simulate.ParallelRLEnv.step_send_async.action",description:`<strong>action</strong> (<code>Dict</code> or <code>List</code> or <code>np.ndarray</code>) &#x2014;
A dict or list of actions for each actuator.`,name:"action"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/parallel_rl_env.py#L148"}}),ce=new y({props:{name:"class simulate.MultiProcessRLEnv",anchor:"simulate.MultiProcessRLEnv",parameters:[{name:"env_fn",val:": typing.Callable"},{name:"n_parallel",val:": int"},{name:"starting_port",val:": int = 55001"}],parametersDescription:[{anchor:"simulate.MultiProcessRLEnv.env_fn",description:`<strong>env_fn</strong> (<code>Callable</code>) &#x2014; a generator function that returns a RLEnv / ParallelRLEnv for generating instances
of the desired environment.`,name:"env_fn"},{anchor:"simulate.MultiProcessRLEnv.n_parallel",description:"<strong>n_parallel</strong> (<code>int</code>) &#x2014; the number of executable instances to create.",name:"n_parallel"},{anchor:"simulate.MultiProcessRLEnv.starting_port",description:"<strong>starting_port</strong> (<code>int</code>) &#x2014; initial communication port for spawned executables.",name:"starting_port"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/multi_proc_rl_env.py#L41"}}),me=new y({props:{name:"step",anchor:"simulate.MultiProcessRLEnv.step",parameters:[{name:"actions",val:": typing.Union[list, <built-in function array>, NoneType] = None"}],parametersDescription:[{anchor:"simulate.MultiProcessRLEnv.step.actions",description:"<strong>actions</strong> (<code>Dict</code> or <code>List</code>) &#x2014; TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)",name:"actions"}],source:"https://github.com/huggingface/simulate/blob/main/src/simulate/rl/multi_proc_rl_env.py#L72",returnDescription:`
<p>TODO
all_reward (<code>float</code>): TODO
all_done (<code>bool</code>): TODO
all_info: TODO</p>
`,returnType:`
<p>all_observation (<code>Dict</code>)</p>
`}}),{c(){P=r("meta"),Ge=s(),x=r("h1"),T=r("a"),be=r("span"),f(B.$$.fragment),st=s(),_e=r("span"),it=p("RL Environment Wrappers"),Ne=s(),c=r("div"),f(H.$$.fragment),lt=s(),ye=r("p"),ct=p("The basic RL environment wrapper for Simulate scene following the Gym API."),pt=s(),I=r("div"),f(J.$$.fragment),mt=s(),$e=r("p"),dt=p("Close the scene."),ut=s(),O=r("div"),f(j.$$.fragment),ft=s(),Ee=r("p"),ht=p("Return a class attribute by name."),vt=s(),A=r("div"),f(z.$$.fragment),gt=s(),Le=r("p"),bt=p("Resets the actors and the scene of the environment."),_t=s(),S=r("div"),f(K.$$.fragment),yt=s(),we=r("p"),$t=p(`Samples an action from the actors in the environment. This function loads the configuration of maps and actors
to return the correct shape across multiple configurations.`),Et=s(),w=r("div"),f(Q.$$.fragment),Lt=s(),De=r("p"),wt=p("The step function for the environment, follows the API from OpenAI Gym."),Dt=s(),Re=r("p"),Rt=p("TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),Pt=s(),V=r("div"),f(X.$$.fragment),xt=s(),Pe=r("p"),Tt=p("Step the environment asynchronously."),It=s(),k=r("div"),f(Y.$$.fragment),Ot=s(),xe=r("p"),At=p("Receive the response from the environment asynchronously."),St=s(),U=r("div"),f(Z.$$.fragment),Vt=s(),Te=r("p"),kt=p("Send action for execution asynchronously."),We=s(),d=r("div"),f(ee.$$.fragment),Ut=s(),de=r("p"),Ct=p(`RL environment wrapper for Simulate scene. Uses functionality from the VecEnv in stable baselines 3
For more information on VecEnv, see the source
`),te=r("a"),Mt=p("https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),Gt=s(),C=r("div"),f(ne.$$.fragment),Nt=s(),Ie=r("p"),Wt=p("Close the environment."),Ft=s(),M=r("div"),f(re.$$.fragment),qt=s(),Oe=r("p"),Bt=p("Check if the environment is wrapped."),Ht=s(),G=r("div"),f(ae.$$.fragment),Jt=s(),Ae=r("p"),jt=p("Resets the actors and the scene of the environment."),zt=s(),N=r("div"),f(oe.$$.fragment),Kt=s(),Se=r("p"),Qt=p("Samples an action from the actors in the environment. This function loads the configuration of maps and actors to return the correct shape across multiple configurations."),Xt=s(),D=r("div"),f(se.$$.fragment),Yt=s(),Ve=r("p"),Zt=p("The step function for the environment, follows the API from OpenAI Gym."),en=s(),ke=r("p"),tn=p("TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),nn=s(),W=r("div"),f(ie.$$.fragment),rn=s(),Ue=r("p"),an=p("Receive the response of a step from the environment asynchronously."),on=s(),F=r("div"),f(le.$$.fragment),sn=s(),Ce=r("p"),ln=p("Send a step to the environment asynchronously."),Fe=s(),L=r("div"),f(ce.$$.fragment),cn=s(),ue=r("p"),pn=p(`Multi-process RL environment wrapper for Simulate scene. Spawns multiple backend executables to run in parallel,
in addition to the optionality of multiple maps.
Uses functionality from the VecEnv in stable baselines 3. For more information on VecEnv, see the source
`),pe=r("a"),mn=p("https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),dn=s(),q=r("div"),f(me.$$.fragment),un=s(),Me=r("p"),fn=p("The step function for the environment, follows the API from OpenAI Gym."),qe=s(),fe=r("p"),hn=p("Under construction \u{1F6A7}."),this.h()},l(t){const E=jn('[data-svelte="svelte-1phssyn"]',document.head);P=a(E,"META",{name:!0,content:!0}),E.forEach(n),Ge=i(t),x=a(t,"H1",{class:!0});var He=o(x);T=a(He,"A",{id:!0,class:!0,href:!0});var _n=o(T);be=a(_n,"SPAN",{});var yn=o(be);h(B.$$.fragment,yn),yn.forEach(n),_n.forEach(n),st=i(He),_e=a(He,"SPAN",{});var $n=o(_e);it=m($n,"RL Environment Wrappers"),$n.forEach(n),He.forEach(n),Ne=i(t),c=a(t,"DIV",{class:!0});var u=o(c);h(H.$$.fragment,u),lt=i(u),ye=a(u,"P",{});var En=o(ye);ct=m(En,"The basic RL environment wrapper for Simulate scene following the Gym API."),En.forEach(n),pt=i(u),I=a(u,"DIV",{class:!0});var Je=o(I);h(J.$$.fragment,Je),mt=i(Je),$e=a(Je,"P",{});var Ln=o($e);dt=m(Ln,"Close the scene."),Ln.forEach(n),Je.forEach(n),ut=i(u),O=a(u,"DIV",{class:!0});var je=o(O);h(j.$$.fragment,je),ft=i(je),Ee=a(je,"P",{});var wn=o(Ee);ht=m(wn,"Return a class attribute by name."),wn.forEach(n),je.forEach(n),vt=i(u),A=a(u,"DIV",{class:!0});var ze=o(A);h(z.$$.fragment,ze),gt=i(ze),Le=a(ze,"P",{});var Dn=o(Le);bt=m(Dn,"Resets the actors and the scene of the environment."),Dn.forEach(n),ze.forEach(n),_t=i(u),S=a(u,"DIV",{class:!0});var Ke=o(S);h(K.$$.fragment,Ke),yt=i(Ke),we=a(Ke,"P",{});var Rn=o(we);$t=m(Rn,`Samples an action from the actors in the environment. This function loads the configuration of maps and actors
to return the correct shape across multiple configurations.`),Rn.forEach(n),Ke.forEach(n),Et=i(u),w=a(u,"DIV",{class:!0});var he=o(w);h(Q.$$.fragment,he),Lt=i(he),De=a(he,"P",{});var Pn=o(De);wt=m(Pn,"The step function for the environment, follows the API from OpenAI Gym."),Pn.forEach(n),Dt=i(he),Re=a(he,"P",{});var xn=o(Re);Rt=m(xn,"TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),xn.forEach(n),he.forEach(n),Pt=i(u),V=a(u,"DIV",{class:!0});var Qe=o(V);h(X.$$.fragment,Qe),xt=i(Qe),Pe=a(Qe,"P",{});var Tn=o(Pe);Tt=m(Tn,"Step the environment asynchronously."),Tn.forEach(n),Qe.forEach(n),It=i(u),k=a(u,"DIV",{class:!0});var Xe=o(k);h(Y.$$.fragment,Xe),Ot=i(Xe),xe=a(Xe,"P",{});var In=o(xe);At=m(In,"Receive the response from the environment asynchronously."),In.forEach(n),Xe.forEach(n),St=i(u),U=a(u,"DIV",{class:!0});var Ye=o(U);h(Z.$$.fragment,Ye),Vt=i(Ye),Te=a(Ye,"P",{});var On=o(Te);kt=m(On,"Send action for execution asynchronously."),On.forEach(n),Ye.forEach(n),u.forEach(n),We=i(t),d=a(t,"DIV",{class:!0});var $=o(d);h(ee.$$.fragment,$),Ut=i($),de=a($,"P",{});var vn=o(de);Ct=m(vn,`RL environment wrapper for Simulate scene. Uses functionality from the VecEnv in stable baselines 3
For more information on VecEnv, see the source
`),te=a(vn,"A",{href:!0,rel:!0});var An=o(te);Mt=m(An,"https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),An.forEach(n),vn.forEach(n),Gt=i($),C=a($,"DIV",{class:!0});var Ze=o(C);h(ne.$$.fragment,Ze),Nt=i(Ze),Ie=a(Ze,"P",{});var Sn=o(Ie);Wt=m(Sn,"Close the environment."),Sn.forEach(n),Ze.forEach(n),Ft=i($),M=a($,"DIV",{class:!0});var et=o(M);h(re.$$.fragment,et),qt=i(et),Oe=a(et,"P",{});var Vn=o(Oe);Bt=m(Vn,"Check if the environment is wrapped."),Vn.forEach(n),et.forEach(n),Ht=i($),G=a($,"DIV",{class:!0});var tt=o(G);h(ae.$$.fragment,tt),Jt=i(tt),Ae=a(tt,"P",{});var kn=o(Ae);jt=m(kn,"Resets the actors and the scene of the environment."),kn.forEach(n),tt.forEach(n),zt=i($),N=a($,"DIV",{class:!0});var nt=o(N);h(oe.$$.fragment,nt),Kt=i(nt),Se=a(nt,"P",{});var Un=o(Se);Qt=m(Un,"Samples an action from the actors in the environment. This function loads the configuration of maps and actors to return the correct shape across multiple configurations."),Un.forEach(n),nt.forEach(n),Xt=i($),D=a($,"DIV",{class:!0});var ve=o(D);h(se.$$.fragment,ve),Yt=i(ve),Ve=a(ve,"P",{});var Cn=o(Ve);Zt=m(Cn,"The step function for the environment, follows the API from OpenAI Gym."),Cn.forEach(n),en=i(ve),ke=a(ve,"P",{});var Mn=o(ke);tn=m(Mn,"TODO verify, a dict with actuator tags as keys and as values a Tensor of shape (n_show, n_actors, n_actions)"),Mn.forEach(n),ve.forEach(n),nn=i($),W=a($,"DIV",{class:!0});var rt=o(W);h(ie.$$.fragment,rt),rn=i(rt),Ue=a(rt,"P",{});var Gn=o(Ue);an=m(Gn,"Receive the response of a step from the environment asynchronously."),Gn.forEach(n),rt.forEach(n),on=i($),F=a($,"DIV",{class:!0});var at=o(F);h(le.$$.fragment,at),sn=i(at),Ce=a(at,"P",{});var Nn=o(Ce);ln=m(Nn,"Send a step to the environment asynchronously."),Nn.forEach(n),at.forEach(n),$.forEach(n),Fe=i(t),L=a(t,"DIV",{class:!0});var ge=o(L);h(ce.$$.fragment,ge),cn=i(ge),ue=a(ge,"P",{});var gn=o(ue);pn=m(gn,`Multi-process RL environment wrapper for Simulate scene. Spawns multiple backend executables to run in parallel,
in addition to the optionality of multiple maps.
Uses functionality from the VecEnv in stable baselines 3. For more information on VecEnv, see the source
`),pe=a(gn,"A",{href:!0,rel:!0});var Wn=o(pe);mn=m(Wn,"https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),Wn.forEach(n),gn.forEach(n),dn=i(ge),q=a(ge,"DIV",{class:!0});var ot=o(q);h(me.$$.fragment,ot),un=i(ot),Me=a(ot,"P",{});var Fn=o(Me);fn=m(Fn,"The step function for the environment, follows the API from OpenAI Gym."),Fn.forEach(n),ot.forEach(n),ge.forEach(n),qe=i(t),fe=a(t,"P",{});var qn=o(fe);hn=m(qn,"Under construction \u{1F6A7}."),qn.forEach(n),this.h()},h(){l(P,"name","hf:doc:metadata"),l(P,"content",JSON.stringify(Yn)),l(T,"id","simulate.RLEnv"),l(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(T,"href","#simulate.RLEnv"),l(x,"class","relative group"),l(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"href","https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),l(te,"rel","nofollow"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(pe,"href","https://stable-baselines3.readthedocs.io/en/master/guide/vec_envs.html"),l(pe,"rel","nofollow"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,E){e(document.head,P),R(t,Ge,E),R(t,x,E),e(x,T),e(T,be),v(B,be,null),e(x,st),e(x,_e),e(_e,it),R(t,Ne,E),R(t,c,E),v(H,c,null),e(c,lt),e(c,ye),e(ye,ct),e(c,pt),e(c,I),v(J,I,null),e(I,mt),e(I,$e),e($e,dt),e(c,ut),e(c,O),v(j,O,null),e(O,ft),e(O,Ee),e(Ee,ht),e(c,vt),e(c,A),v(z,A,null),e(A,gt),e(A,Le),e(Le,bt),e(c,_t),e(c,S),v(K,S,null),e(S,yt),e(S,we),e(we,$t),e(c,Et),e(c,w),v(Q,w,null),e(w,Lt),e(w,De),e(De,wt),e(w,Dt),e(w,Re),e(Re,Rt),e(c,Pt),e(c,V),v(X,V,null),e(V,xt),e(V,Pe),e(Pe,Tt),e(c,It),e(c,k),v(Y,k,null),e(k,Ot),e(k,xe),e(xe,At),e(c,St),e(c,U),v(Z,U,null),e(U,Vt),e(U,Te),e(Te,kt),R(t,We,E),R(t,d,E),v(ee,d,null),e(d,Ut),e(d,de),e(de,Ct),e(de,te),e(te,Mt),e(d,Gt),e(d,C),v(ne,C,null),e(C,Nt),e(C,Ie),e(Ie,Wt),e(d,Ft),e(d,M),v(re,M,null),e(M,qt),e(M,Oe),e(Oe,Bt),e(d,Ht),e(d,G),v(ae,G,null),e(G,Jt),e(G,Ae),e(Ae,jt),e(d,zt),e(d,N),v(oe,N,null),e(N,Kt),e(N,Se),e(Se,Qt),e(d,Xt),e(d,D),v(se,D,null),e(D,Yt),e(D,Ve),e(Ve,Zt),e(D,en),e(D,ke),e(ke,tn),e(d,nn),e(d,W),v(ie,W,null),e(W,rn),e(W,Ue),e(Ue,an),e(d,on),e(d,F),v(le,F,null),e(F,sn),e(F,Ce),e(Ce,ln),R(t,Fe,E),R(t,L,E),v(ce,L,null),e(L,cn),e(L,ue),e(ue,pn),e(ue,pe),e(pe,mn),e(L,dn),e(L,q),v(me,q,null),e(q,un),e(q,Me),e(Me,fn),R(t,qe,E),R(t,fe,E),e(fe,hn),Be=!0},p:zn,i(t){Be||(g(B.$$.fragment,t),g(H.$$.fragment,t),g(J.$$.fragment,t),g(j.$$.fragment,t),g(z.$$.fragment,t),g(K.$$.fragment,t),g(Q.$$.fragment,t),g(X.$$.fragment,t),g(Y.$$.fragment,t),g(Z.$$.fragment,t),g(ee.$$.fragment,t),g(ne.$$.fragment,t),g(re.$$.fragment,t),g(ae.$$.fragment,t),g(oe.$$.fragment,t),g(se.$$.fragment,t),g(ie.$$.fragment,t),g(le.$$.fragment,t),g(ce.$$.fragment,t),g(me.$$.fragment,t),Be=!0)},o(t){b(B.$$.fragment,t),b(H.$$.fragment,t),b(J.$$.fragment,t),b(j.$$.fragment,t),b(z.$$.fragment,t),b(K.$$.fragment,t),b(Q.$$.fragment,t),b(X.$$.fragment,t),b(Y.$$.fragment,t),b(Z.$$.fragment,t),b(ee.$$.fragment,t),b(ne.$$.fragment,t),b(re.$$.fragment,t),b(ae.$$.fragment,t),b(oe.$$.fragment,t),b(se.$$.fragment,t),b(ie.$$.fragment,t),b(le.$$.fragment,t),b(ce.$$.fragment,t),b(me.$$.fragment,t),Be=!1},d(t){n(P),t&&n(Ge),t&&n(x),_(B),t&&n(Ne),t&&n(c),_(H),_(J),_(j),_(z),_(K),_(Q),_(X),_(Y),_(Z),t&&n(We),t&&n(d),_(ee),_(ne),_(re),_(ae),_(oe),_(se),_(ie),_(le),t&&n(Fe),t&&n(L),_(ce),_(me),t&&n(qe),t&&n(fe)}}}const Yn={local:"simulate.RLEnv",title:"RL Environment Wrappers"};function Zn(bn){return Kn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rr extends Bn{constructor(P){super();Hn(this,P,Zn,Xn,Jn,{})}}export{rr as default,Yn as metadata};
