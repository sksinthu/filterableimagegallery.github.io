(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3403],{52270:(e,o,i)=>{i.d(o,{Z:()=>_});var s=i(777918),t=i(542554),l=i(795152),r=i(941646),n=i(898781),a=i(313047),d=i(883119),c=i(785893);function _(e){const o=(0,n.ZP)(),{backButtonIcon:i,name:_,onNextButtonTouch:h,onNameChange:u,selectedPinIds:x=[],useRoundedCorners:b}=e,p=x.length>0?130:64;return(0,c.jsxs)(t.default,{hasFixedHeader:!0,children:[(0,c.jsxs)(a.FixedHeader,{height:p,paddingY:3,useRoundedCorners:b,children:[(0,c.jsxs)(d.kC,{alignItems:"center",justifyContent:"between",children:[(0,c.jsx)(s.Z,{color:"darkGray",icon:i||"cancel",padding:3,size:"sm"}),(0,c.jsx)(d.X6,{accessibilityLevel:1,size:"300",children:o._('Add section', 'for add board section page', 'for add board section page')}),(0,c.jsx)(r.Z,{id:"create-section-button",children:(0,c.jsx)(d.zx,{accessibilityLabel:o._('Add', 'boardSectionCreate.Add.Button.Text', 'Add button accessibility label for board section create page'),onClick:h,disabled:""===_.trim(),color:"red",size:"lg",text:o._('Next', 'Next button for board section create page', 'Next button for board section create page')})})]}),x&&(0,c.jsx)(l.Z,{selectedPinIds:x})]}),(0,c.jsx)(d.xu,{"data-test-id":"addSectionName",paddingX:2,paddingY:3,children:(0,c.jsx)(d.nv,{id:"section-name-input",label:o._('Name', 'boardSectionCreate.TextField.Name.Label', 'TextField label to Name on BoardSectionCreate'),onChange:e=>u(e.event),size:"lg",value:_})})]})}},279066:(e,o,i)=>{i.d(o,{Z:()=>_});var s=i(966338),t=i(433035),l=i(898781),r=i(989726),n=i(694325),a=i(479739),d=i(883119),c=i(785893);function _({excludeBoardId:e,onRepinToBoard:o}){const i=(0,l.ZP)(),_=(()=>{const{userId:e}=(0,s.useSelector)((e=>e.session));return(0,r.Z)({name:"BoardPickerBoardsResource",options:{field_set_key:"board_picker",user_id:e}}),(0,s.useSelector)((e=>(0,a.Is)(e)||[]))})();return _.length>0&&(0,c.jsxs)(d.xu,{children:[(0,c.jsx)(d.xu,{marginTop:3,children:(0,c.jsx)(d.xv,{children:i._('All boards', 'title for board picker all boards section', 'title for board picker all boards section')})}),(0,c.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{marginBottom:`${n.T}px`}},paddingY:3,children:_.filter((o=>o.id!==e)).map((e=>(0,c.jsx)(t.Z,{boardId:e.id,onBoardSelected:()=>o(e)},e.id)))})]})}},317786:(e,o,i)=>{i.d(o,{Wx:()=>P,ZP:()=>v});var s=i(667294),t=i(966338),l=i(777918),r=i(30700),n=i(542554),a=i(279066),d=i(855813),c=i(795152),_=i(499128),h=i(343341),u=i(898781),x=i(694325),b=i(883119),p=i(313047),g=i(789363),m=i(925927),j=i(785893);function f(e,o,i){return e?i._('Got it! Hang tight while we move all those Pins...', 'Toast message for bulk pins move.', 'Toast message for bulk pins move.'):o?i._('Saved to section!', ' - ', ' -- '):i._('Saved to board!', ' - ', ' -- ')}function P({onAddNewSection:e,useIconWithBackground:o}){const i=(0,u.ZP)();return(0,j.jsx)(p.FixedFooter,{height:o?x.y:x.T,alignCenter:o,children:(0,j.jsx)(r.Z,{onTouch:e,pressState:"none",children:(0,j.jsxs)(b.xu,{display:"flex",alignItems:"center",padding:o?0:1,"data-test-id":"addSectionButton",children:[o?(0,j.jsx)(b.xu,{color:"lightGray",rounding:2,dangerouslySetInlineStyle:{__style:{padding:"14px"}},children:(0,j.jsx)(b.JO,{icon:"add",color:"default",size:20,accessibilityLabel:i._('Create board button', 'RepinSection.CreateBoard.Button', 'accessibility label for create board button')})}):(0,j.jsx)(b.JO,{icon:"add-circle",color:"error",size:38,accessibilityLabel:i._('Add section button', ' - ', ' -- ')}),o?(0,j.jsx)(b.xu,{marginStart:2,children:(0,j.jsx)(b.xv,{size:"400",weight:"bold",children:i._('Add section', 'Add new section to Pin to', 'Add new section to Pin to')})}):(0,j.jsx)(b.xu,{marginStart:3,children:(0,j.jsx)(b.xv,{weight:"bold",children:i._('Add section', 'Add new section to Pin to', 'Add new section to Pin to')})})]})})})}class A extends s.PureComponent{constructor(...e){var o,i,s;super(...e),s=e=>{e.section_count?this.props.onRepinToBoardWithSections(e):this.props.repinToOtherBoard(e.id,this.props.i18n)},(i="onRepinToBoard")in(o=this)?Object.defineProperty(o,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[i]=s}render(){const{boardId:e,boardSectionId:o,orginalBoardId:i,onAddNewSection:s,repin:t,hideBoardPickerRow:r,selectedPinIds:_,isCollaborative:h}=this.props,u=i===e;return(0,j.jsxs)(n.default,{hasFixedHeader:!0,children:[(0,j.jsxs)(p.FixedHeader,{hasBorder:!0,height:130,children:[(0,j.jsxs)(b.kC,{alignItems:"center",justifyContent:"start",children:[(0,j.jsx)(b.xu,{column:2,children:(0,j.jsx)(l.Z,{})}),(0,j.jsx)(b.xu,{column:8,children:(0,j.jsx)(b.xv,{align:"center",weight:"bold",children:this.props.i18n._('Choose section', 'title for section selection in repin flow', 'title for section selection in repin flow')})}),(0,j.jsx)(b.xu,{column:2})]}),(0,j.jsx)(c.Z,{selectedPinIds:_})]}),e&&(0,j.jsx)(d.Z,{boardId:e,repin:t,originalBoardId:i,hideBoardPickerRow:u&&r,sectionId:o}),u&&(0,j.jsxs)(b.xu,{children:[!h&&(0,j.jsx)(a.Z,{excludeBoardId:e,onRepinToBoard:this.onRepinToBoard}),(0,j.jsx)(P,{onAddNewSection:s})]})]})}}const v=function(e){const{inSelectAll:o,pinIds:i,orginalBoardId:s,boardSectionId:l,onRefreshBoardSection:r,url:n}=e,{showToast:a}=(0,h.F9)(),d=(0,u.ZP)(),c=(0,m.k6)(),x=(0,t.useDispatch)();return(0,j.jsx)(A,{...e,i18n:d,repin:async(e,t,d)=>{const h=t&&t.id,u={boardId:s,sectionId:l},b={boardId:e,sectionId:h},p=o?(0,g.X_)({source:u,target:b,excludePinIds:i}):(0,g.ic)({source:u,target:b,pinIds:i});s!==e?(await x(p),c.push({pathname:n})):(await x(p),r&&await r()),a((({hideToast:e})=>(0,j.jsx)(_.ZP,{text:f(o,h,d),onHide:e})))},repinToOtherBoard:async(e,t)=>{const r={boardId:s,sectionId:l},n={boardId:e,sectionId:void 0};a((({hideToast:e})=>(0,j.jsx)(_.ZP,{text:f(o,void 0,t),onHide:e}))),await x(o?(0,g.X_)({source:r,target:n,excludePinIds:i}):(0,g.ic)({source:r,target:n,pinIds:i})),c.go(-2)}})}},795152:(e,o,i)=>{i.d(o,{Z:()=>a});var s=i(667294),t=i(966338),l=i(898781),r=i(883119),n=i(785893);const a=(0,t.connect)((({pins:e},o)=>({selectedPins:(o.selectedPinIds||[]).map((o=>e[o]))})),(()=>({})))((function({selectedPins:e}){const o=(0,l.ZP)(),i=(0,s.useRef)();(0,s.useEffect)((()=>{const e=i.current;e&&(e.scrollLeft=e.scrollWidth-e.offsetWidth)}),[e]);const t=e.map(((e,i)=>{var s,t,l,a;const{description:d,images:c}=e,_=null==c?void 0:c["236x"];return(0,n.jsx)(r.xu,{marginEnd:1,children:(0,n.jsx)(r.zd,{rounding:2,wash:!0,width:50,height:65,children:(0,n.jsx)(r.Ee,{alt:!(null==d||!d.trim())&&(null==d?void 0:d.trim())||o._('Selected Pin', 'SelectedPinsPreview.image.accessibilityLabel', 'Accessibility label for Pin image without description'),color:null!==(s=e.dominant_color)&&void 0!==s?s:"",naturalHeight:null!==(t=null==_?void 0:_.height)&&void 0!==t?t:1,naturalWidth:null!==(l=null==_?void 0:_.width)&&void 0!==l?l:1,src:null!==(a=null==_?void 0:_.url)&&void 0!==a?a:"",fit:"contain"})})},i)}));return(0,n.jsx)(r.xu,{display:"flex",overflow:"scroll",marginTop:2,ref:i,children:t})}))},694325:(e,o,i)=>{i.d(o,{T:()=>s,y:()=>t});const s=70,t=80},433035:(e,o,i)=>{i.d(o,{Z:()=>h});var s=i(667294),t=i(966338),l=i(794987),r=i(898781),n=i(728214),a=i(758127),d=i(349700),c=i(883119),_=i(785893);const h=(0,t.connect)(((e,o)=>({board:e.boards[o.boardId]})))((function({board:e,onBoardSelected:o,noArrowIcon:i,showSingleBoardRep:t}){const h=(0,r.ZP)(),u=(e.collaborating_users||[]).map((e=>{var o,i;return{name:null!==(o=e.username)&&void 0!==o?o:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(i=e.image_medium_url)&&void 0!==i?i:""}}));let x="";const b=u.slice(0,3).map((e=>e.name));switch(u.length){case 3:x=(0,d.Wc)(`${h._('{{ first }}, {{ second }}, and {{ last }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars', 'List of three usernames')}`,{first:`${b[0]}`,second:`${b[1]}`,last:`${b[2]}`});break;case 2:x=(0,d.Wc)(`${h._('{{ first }} and {{ second }}', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars', 'List of two usernames.')}`,{first:`${b[0]}`,second:`${b[1]}`});break;default:x=b.join(", ")}const p=u.length>3?(0,d.Wc)(h.ngettext('Collaborators: {{ userNames }} and {{ leftCount }} more.', 'Collaborators: {{ userNames }} and {{ leftCount }} more.', u.length - 3, 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree', 'Accessibility label that lists the names of collaborators and a final count of non-displayed avatars'),{userNames:x,leftCount:""+(u.length-3)}):(0,d.Wc)(`${h._('Collaborators: {{ userNames }}.', 'CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree', 'Accessibility label that lists the names of collaborators')}`,{userNames:x}),g=new c.Ry(0),m=(0,_.jsx)(s.Fragment,{children:(0,_.jsxs)(c.xu,{"data-test-id":"board-picker-row",display:"flex",alignItems:"center",rounding:2,column:12,marginBottom:t?4:0,children:[(0,_.jsx)(c.xu,{paddingY:t?0:2,children:t?(0,_.jsx)(c.xu,{height:48,overflow:"hidden",width:48,children:(0,_.jsx)(c.zd,{height:"100%",rounding:2,width:"100%",children:(0,_.jsx)(c.Ee,{alt:"",color:"lightGray",fit:"cover",naturalHeight:1,naturalWidth:1,src:e.image_cover_url||""})})}):(0,_.jsx)(c.xu,{height:60,overflow:"hidden",rounding:4,width:60,children:(0,_.jsx)(l.Z,{boardId:e.id,type:"thumbnail",fullSize:!0})})}),(0,_.jsxs)(c.kC,{alignItems:"center",flex:"grow",justifyContent:"between",children:[(0,_.jsx)(c.xu,{direction:"column",display:"flex",justifyContent:"center",marginStart:t?2:4,width:"100%",overflow:t?"hidden":"auto",children:(0,_.jsx)(c.xv,{size:"400",weight:"bold",lineClamp:t?1:void 0,children:e.name})}),(0,_.jsxs)(c.kC,{alignItems:t?"center":"start",justifyContent:"start",children:["secret"===e.privacy&&(0,_.jsx)(c.xu,{marginStart:t?3:1,children:(0,_.jsx)(c.JO,{color:t?"default":"subtle",icon:"lock",accessibilityLabel:h._('secret board icon', ' - ', ' -- ')})}),e.is_collaborative&&t&&u.length>0?(0,_.jsx)(c.xu,{zIndex:g,children:(0,_.jsx)(c.HE,{accessibilityLabel:a.U+p,collaborators:u,size:1===u.length?"sm":"xs"})}):e.is_collaborative&&(0,_.jsx)(c.xu,{marginStart:1,children:(0,_.jsx)(c.JO,{icon:"people",accessibilityLabel:h._('group board icon', ' - ', ' -- ')})}),!i&&!!e.section_count&&(0,_.jsx)(c.xu,{"data-test-id":"boardSectionPicker",marginStart:t?3:0,children:(0,_.jsx)(c.JO,{color:t?"default":"subtle",icon:"arrow-forward",accessibilityLabel:h._('board section board picker icon', ' - ', ' -- ')})})]})]})]})}),j=e.section_count,f=!!j&&j>0,P=(0,n.Z)();return(0,_.jsx)(c.iP,{rounding:2,onTap:P({fn:()=>o(f)}),accessibilityLabel:h._('Select this board', 'board.pickerRow', 'Button for saving a pin into a board'),tapStyle:"compress",children:m})}))},855813:(e,o,i)=>{i.d(o,{Z:()=>x});var s=i(966338),t=i(433035),l=i(30700),r=i(883119),n=i(785893);function a({onSectionSelected:e,sectionId:o,showSectionRep:i}){var t;const a=(0,s.useSelector)((({boardsections:e})=>e[o])),d=(0,s.useSelector)((({pins:e})=>{var o;return a&&a.preview_pins&&(null===(o=e[a.preview_pins[0]])||void 0===o?void 0:o.image_medium_url)}));return(0,n.jsx)(l.Z,{rounding:2,onTouch:e,pressState:"none",children:(0,n.jsxs)(r.xu,{"data-test-id":"sectionPickerRow",display:"flex",alignItems:"center",rounding:2,column:12,marginBottom:i?4:0,children:[i&&(0,n.jsx)(r.xu,{height:48,width:51,children:(0,n.jsx)(r.zd,{height:"100%",rounding:2,width:"100%",children:(0,n.jsx)(r.Ee,{alt:null!==(t=a.title)&&void 0!==t?t:"",color:"lightGray",fit:"cover",naturalHeight:1,naturalWidth:1,src:d||""})})}),!i&&(0,n.jsx)(r.xu,{column:1,paddingY:2}),(0,n.jsx)(r.xu,{column:11,display:"flex",flex:"grow",justifyContent:"between",paddingY:2,children:i?(0,n.jsx)(r.xu,{overflow:"hidden",width:"100%",marginStart:2,children:(0,n.jsx)(r.xv,{size:"400",lineClamp:1,weight:"bold",children:a.title})}):(0,n.jsx)(r.xu,{marginStart:2,children:(0,n.jsx)(r.xv,{weight:"bold",children:a.title})})})]})})}var d=i(989726),c=i(479739),_=i(904411),h=i(925927),u=i(898781);function x({boardId:e,originalBoardId:o,sectionId:i,repin:l,hideBoardPickerRow:x,showSectionRep:b}){const p=(0,u.ZP)(),{isFetching:g,boardSections:m,filteredBoardSections:j}=((e,o)=>{const{isFetching:i}=(0,d.Z)({name:"BoardSectionsRepinResource",options:{board_id:e}}),t=(0,s.useSelector)((o=>((0,c.T_)(o,{boardId:e})||[]).reduce(((e,o)=>{if("boardsection"===o.type){const i={type:"boardsection",id:o.id};e.push(i)}return e}),[]))),l=(0,s.useSelector)((i=>t.map((e=>e.id)).reduce(((s,t)=>{const l=i.boardsections[null!=t?t:""];return t!==o&&l&&s.push({board:{id:e},id:l.id,title:l.title,type:"boardsection",slug:l.slug}),s}),[])));return{isFetching:i,boardSections:t,filteredBoardSections:l}})(e,i),f=(0,h.k6)(),P=(0,_.gC)()(o||"");return(0,n.jsxs)(r.xu,{children:[m.length>0&&(0,n.jsxs)(r.xu,{paddingY:b?0:3,children:[b&&(0,n.jsx)(r.xu,{paddingY:2,children:(0,n.jsx)(r.xu,{marginBottom:2,children:(0,n.jsx)(r.xv,{children:p._('Board', 'RepinFlow.SectionPickerList.Board', 'Section picker board title')})})}),!x&&(0,n.jsx)(t.Z,{boardId:e,noArrowIcon:!0,onBoardSelected:()=>l(e,void 0,p),showSingleBoardRep:b},e),b&&(0,n.jsx)(r.xu,{paddingY:4,children:(0,n.jsx)(r.xv,{children:p._('Section', 'RepinFlow.SectionPickerList.Section', 'Section picker all sections title')})}),j.map((i=>{var s;return(0,n.jsx)(a,{onSectionSelected:()=>{var s;(l(e,i,p),o)&&f.push(null!==(s=null==P?void 0:P.url)&&void 0!==s?s:"")},sectionId:null!==(s=i.id)&&void 0!==s?s:"",showSectionRep:b},i.id)}))]}),(0,n.jsx)(r.$j,{accessibilityLabel:p._('Loading board section for repin flow', ' - ', ' -- '),show:g})]})}},176843:(e,o,i)=>{function s(e,o){let i;if(e.error){const{httpStatus:s,apiErrorCode:t,redirectUrl:l}=e.error;if(404===s||401===s&&7===t){i={pathname:o?"/ideas/":"/",state:{showError:!0}}}301===s&&l&&(i={pathname:l})}return i}i.d(o,{Z:()=>s})},989726:(e,o,i)=>{i.d(o,{Z:()=>a});var s=i(176843),t=i(965708),l=i(784590),r=i(53987),n=i(925927);function a(e){const o=(0,n.k6)(),i=(0,n.TH)(),a=!(0,t.Z)()&&(0,r.L6)(i),d=(0,l.Z)(e),c=(0,s.Z)(d,a);return c&&o.replace(c.pathname,c.state),d}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/3403-0393195820175f0f.mjs.map