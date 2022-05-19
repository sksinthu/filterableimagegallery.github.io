(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[53845],{217508:(e,i,o)=>{o.d(i,{Z:()=>n});var l=o(898781),t=o(883119),r=o(785893);function n({backgroundColor:e="darkGray",iconColor:i="inverse",iconSize:o,size:n=20}){const a=(0,l.ZP)();return(0,r.jsx)(t.xu,{display:"flex",direction:"column",alignItems:"center",color:e,width:n,height:n,rounding:"circle",justifyContent:"center",children:(0,r.jsx)(t.JO,{accessibilityLabel:a._('Secret board icon', 'Icon indicating that a board is secret', 'Icon indicating that a board is secret'),color:i,icon:"lock",size:null!=o?o:n/2})})}},391254:(e,i,o)=>{o.d(i,{Z:()=>r});o(441143);var l=o(785893);class t{static factory(e){return e instanceof t?e:new t(String(e))}constructor(e){this._private_safe_value=e.trim().replace(">",">").replace("<","<").replace("&","&").replace('"','"').replace("'","'")}toString(){return this._private_safe_value}}function r(e){const{css:i,unsafeCSS:o,...r}=e,n=String(i||"")||o||"";return!!n?(0,l.jsx)("style",{...r,dangerouslySetInnerHTML:{__html:String(t.factory(n))}}):null}},758127:(e,i,o)=>{o.d(i,{U:()=>r,Z:()=>n});var l=o(883119),t=o(785893);const r=", ";function n(){return(0,t.jsx)(l.xu,{display:"visuallyHidden",children:r})}},904411:(e,i,o)=>{o.d(i,{bn:()=>r,fJ:()=>t,gC:()=>n});var l=o(425288);const{Provider:t,useHook:r}=(0,l.Z)("Boards");function n(){const e=r();return i=>e[i]}},14254:(e,i,o)=>{o.d(i,{Z:()=>w});var l=o(667294),t=o(948618),r=o(70598),n=o(298361),a=o(112690),s=o(892819),d=o(19121),c=o(349700),u=o(867820),_=o(217468),h=o(50286),g=o(758127),x=o(322937),v=o(898781),m=o(808058),p=o(883119),f=o(785893);function b(e,i){const{full_name:o,username:l}=e,t=(0,f.jsx)(p.rU,{href:`/${l}`,inline:!0,underline:"hover",children:o});return(0,c.nk)(i._('{{ linkToUser }} invited you to join this board', 'boardRep.invite.invitationText', 'Indicating that another user invited the viewer to this board'),{linkToUser:t})}const y=({children:e})=>{const i=(0,d.Z)(),o=(0,h.HG)(),l=i&&i.isAuth;return o&&l?(0,f.jsx)(p.X6,{accessibilityLevel:2,size:"400",lineClamp:1,children:e}):(0,f.jsx)(p.xv,{lineClamp:1,weight:"bold",children:e})};function w({archivedDate:e,boardUrl:i,canEdit:o,collaborators:d,collaboratorsCount:w=0,containerBackgroundColor:j,coverPhoto:C,followedByMe:z,fullSizeDrawer:P,sensitivityScreen:A,handleInviteResponse:S,hideMeta:B,id:I,invite:k,imagesLego:Z=[],isBoardInviteAccepted:T,isActive:E,isAuthenticated:F,isCollaborative:D,isCollaborator:L,isOwner:U,isSecret:H,lastModifiedDate:O,layout:G,locale:R,name:W,numCols:M,onEditClick:N,onFollow:X,onUnfollow:q,owner:$,pinCount:J=0,sectionCount:Y,showFollowButton:K,viewParameter:Q,viewType:V,viewerId:ee}){const ie=(0,v.ZP)(),oe=(0,n.Z)(),le=(0,s.Z)(),te=(0,a.Z)(),re=(0,h.HG)()&&F,ne="square"===G?m.M0:m.z9,ae=Z.map((e=>({url:e.url,name:W}))),se=!!$&&!o&&K,de=(0,_.t)("mweb_board_sensitivity_screen"),ce=!U&&!L&&de().anyEnabled,ue=!(null==A||!A.show_warning)&&ce,_e={board_id:I,reason:null==A?void 0:A.reason};(0,l.useEffect)((()=>{ue&&te({event_type:13,component:13861,view_type:215,aux_data:_e})}),[]);const he=$?$.id:void 0,ge=[...d.filter((({id:e})=>e===he)),...d.filter((({id:e})=>e===ee&&e!==he)),...d.filter((({id:e})=>![he,ee].includes(e)))].map((e=>{var i,o;return{name:null!==(i=re?e.full_name:e.username)&&void 0!==i?i:"",src:"https://s.pinimg.com/images/user/default_75.png"===e.image_medium_url?"":null!==(o=e.image_medium_url)&&void 0!==o?o:""}}));let xe=w>=ge.length?w-ge.length:0;xe=xe>99?100:xe;const ve=[...ge,...Array(xe).fill({name:"",src:""})],me=re?24:16,pe=me/3*(2*(ge.length>2?3:ge.length)+1);return(0,f.jsxs)(p.xu,{"data-test-id":`boardCard-${W}`,height:se?220:"100%",position:"relative",width:re?ne:"100%",children:[(0,f.jsx)(x.Z,{canEdit:o,containerBackgroundColor:j,coverPhoto:C,images:ae,isSecret:H,fullSize:P,showSensitivityScreen:ue,isActive:E,onEditClick:N,layout:G}),!B&&(0,f.jsx)(l.Fragment,{children:k?(0,f.jsxs)(l.Fragment,{children:[(0,f.jsxs)(p.xu,{padding:2,alignItems:"start","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,f.jsxs)(p.xu,{width:"100%",children:[(0,f.jsx)(p.rU,{href:null!=i?i:"",children:(0,f.jsx)(p.xu,{marginTop:0,marginBottom:1,children:(0,f.jsx)(y,{children:W})})}),T?(0,f.jsx)(p.xv,{size:"200",lineClamp:1,children:ie._('You\u2019ve joined', 'boardRep.invite.invitationAcceptedText', 'Text shown after accepting collaborator board invitations')}):(0,f.jsx)(p.xv,{size:"200",children:b(k.invited_by_user,ie)})]}),(0,f.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:pe,minWidth:pe,height:me,children:(0,f.jsx)(p.HE,{accessibilityLabel:g.U+(ie._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:ve})})]}),T?(0,f.jsx)(p.xu,{direction:"row",display:"flex",paddingX:2,children:(0,f.jsx)(p.xu,{flex:"grow",marginBottom:3,paddingX:1,children:(0,f.jsx)(p.zx,{role:"link",href:null!=i?i:"",fullWidth:!0,size:"lg",text:ie._('See board', 'boardRep.invite.seeBoardButton', 'Button text to see board after accepting collaborator invite')})})}):(0,f.jsxs)(p.kC,{direction:"row",flex:"grow",justifyContent:"start",wrap:!0,children:[(0,f.jsx)(p.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,f.jsx)(p.zx,{fullWidth:!0,onClick:()=>{null==S||S(!1)},size:"lg",text:ie._('Decline', 'boardRep.invite.declineButton', 'Button text to decline board collaborator invite or request')})}),(0,f.jsx)(p.xu,{marginBottom:3,paddingX:1,flex:"grow",children:(0,f.jsx)(p.zx,{fullWidth:!0,color:"red",onClick:()=>{null==S||S(!0)},size:"lg",text:ie._('Accept', 'boardRep.invite.acceptButton', 'Button text to accept board collaborator invite or request')})})]})]}):(0,f.jsxs)(p.xu,{height:re?void 0:m.s0,marginTop:re?0:1,paddingX:2,paddingY:re?2:0,children:[(0,f.jsxs)(p.xu,{alignItems:"center","data-test-id":"board-card-title",display:"flex",flex:"grow",justifyContent:"between",children:[(0,f.jsx)(y,{children:W}),D&&(0,f.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{marginTop:-1}},marginStart:2,width:pe,minWidth:pe,height:me,children:(0,f.jsx)(p.HE,{accessibilityLabel:g.U+(ie._('Board has collaborators', 'BoardCard.AvatarGroup.Collaborators', 'Board description: title, number of pins, date, and it has collaborators or not.')),collaborators:ve})})]}),(0,f.jsx)(p.xu,{alignItems:"center",direction:"row",display:"flex",marginTop:1,children:(0,f.jsxs)(p.xv,{size:"100",lineClamp:1,children:[(0,f.jsx)(g.Z,{}),(0,c.nk)(ie.ngettext('{{ count }} Pin', '{{ count }} Pins', J, 'profile.ProfilePage.board.BoardCard.PinsCount', 'label for n amount of pins'),{count:le(R,J,{})}),!!Y&&(0,f.jsxs)(l.Fragment,{children:[(0,f.jsx)(t.Z,{ariaHidden:!0}),(0,f.jsx)(g.Z,{}),(0,c.nk)(ie.ngettext('{{ count }} section', '{{ count }} sections', Y, 'profile.ProfilePage.board.BoardCard.SectionsCount', 'label for n amount of sections'),{count:Y})]}),!e&&(0,f.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{display:re?"inline-flex":"inline",paddingLeft:7}},children:(0,f.jsxs)(p.xv,{color:"subtle",inline:!0,size:"100",lineClamp:1,children:[(0,f.jsx)(g.Z,{}),oe(O,!0)]})})]})}),!!e&&(0,f.jsxs)(p.xu,{marginTop:1,children:[(0,f.jsx)(g.Z,{}),(0,f.jsx)(p.xv,{color:"subtle",size:"100",lineClamp:1,children:ie._('Archived', 'profile.ProfilePage.board.BoardCard.ArchivedBoardText', 'subtitle for archived boards on profile page')})]}),se&&(0,f.jsx)(p.xu,{marginTop:2===M?3:void 0,column:2===M?12:void 0,flex:"none",children:(0,f.jsx)(r.Z,{disabled:null==$?void 0:$.blocked_by_me,followEventType:26,id:I,isFollowed:z,onFollow:e=>{F||(0,u.NC)("press_follow_board"),X&&X(e)},onUnfollow:e=>{F||(0,u.NC)("press_unfollow_board"),q&&q(e)},shouldUseLegoColors:!0,size:"md",unfollowEventType:27,viewParameter:Q,viewType:V})})]})})]})}},794987:(e,i,o)=>{o.d(i,{Z:()=>v});var l=o(966338),t=o(14254),r=o(851850),n=o(19121),a=o(904411),s=o(925927),d=o(780280),c=o(286268),u=o(867820),_=o(883119),h=o(628358),g=o(785893);const x=["thumbnail","imageOnly"];function v({boardId:e,containerBackgroundColor:i,forwardedRef:o,fullSize:v,showFollowButton:m=!0,showPinCount:p=!0,type:f,viewParameter:b,viewType:y}){var w,j,C;const z=(0,n.Z)(),P=z&&z.isAuth,A=(0,l.useDispatch)(),S=(0,s.TH)(),{locale:B}=(0,d.B)(),I=(0,a.gC)()(e),k=(0,r.Z)(),Z=z.isAuth?z.id:"";if(!I)return null;const T=I.owner,E=[T,...I.collaborating_users||[]].filter(Boolean).map((({id:e,image_medium_url:i,username:o})=>({id:e,image_medium_url:i,username:o}))),F=(null==T?void 0:T.id)===Z,D=E.filter((({id:e})=>e===Z)).length>0;if("secret"===I.privacy&&!D)return null;const L="grid"===f||"thumbnail"===f?2:4,U=k(I,L),H={isCustom:I.has_custom_cover,url:U,position:(0,c.Bw)(I.cover_pin)},O=(0,c.Jx)(I,U).map((({url:e})=>({name:(0,c.po)(e),url:e}))),G=(0,g.jsx)(t.Z,{archivedDate:null!==(w=I.archived_by_me_at)&&void 0!==w?w:void 0,canEdit:!!I.access&&I.access.includes("write"),collaborators:E,collaboratorsCount:I.collaborator_count,containerBackgroundColor:i,coverPhoto:U?H:null,followedByMe:I.followed_by_me,fullSizeDrawer:v,hideMeta:x.includes(f),id:I.id,imagesLego:O,isAuthenticated:P,isCollaborative:I.is_collaborative,isCollaborator:D,isOwner:F,isSecret:"secret"===I.privacy,lastModifiedDate:"full"===f?I.board_order_modified_at:"",locale:B,name:null!==(j=I.name)&&void 0!==j?j:"",numCols:L,onFollow:e=>A((0,h.Z)(e)),onUnfollow:e=>A((0,h.f)(e)),owner:T,pinCount:p&&I.pin_count?I.pin_count:void 0,sectionCount:null!==(C=I.section_count)&&void 0!==C?C:0,sensitivityScreen:I.sensitivity_screen,showFollowButton:m,viewParameter:b,viewType:y,viewerId:Z});return!x.includes(f)&&I.url?(0,g.jsx)(_.iP,{role:"link",href:I.url,rounding:2,tapStyle:"compress",onTap:()=>{P||((0,u.NC)("click_go_to_board"),(0,u.LW)({action:"click",pageLocation:S,item:"board-card"}))},children:(0,g.jsx)(_.xu,{ref:o,paddingY:3,children:G})}):G}},371918:(e,i,o)=>{o.d(i,{Z:()=>r});var l=o(883119),t=o(785893);function r({customCover:e,height:i,imgUrl:o,imgPos:r,width:n}){const a=i/n;let s="center center";if(e&&r){let e=1;e=r.height/r.width>a?n/r.width:i/r.height;s=`-${r.x*e}px -${r.y*e}px`}const d={backgroundImage:`url(${o})`,backgroundPosition:s,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF",position:"relative"};return(0,t.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:{height:i,width:n}},children:(0,t.jsx)(l.xu,{dangerouslySetInlineStyle:{__style:d},children:(0,t.jsx)("div",{className:"imageWash",style:{position:"absolute"}})})})}},322937:(e,i,o)=>{o.d(i,{Z:()=>_});var l=o(371918),t=o(217508),r=o(898781),n=o(50286),a=o(780280),s=o(808058),d=o(883119),c=o(785893);const u="100%";function _(e){var i,o,_,h;const g=(0,r.ZP)(),{containerBackgroundColor:x="white",coverPhoto:v,fullSize:m,images:p,isSecret:f,showSensitivityScreen:b,isActive:y,canEdit:w,onEditClick:j,layout:C}=e,z=(0,n.HG)(),{isRTL:P,isAuthenticated:A}=(0,a.B)(),S=z&&A,B=p[0],I=!v&&(null===(i=p[0])||void 0===i?void 0:i.name)||g._('Cover image', 'DrawerImageGroup', 'Alt text for the main image of a board'),k=Array(2).fill(),Z=new d.Ry(1),T="square"===C?s.M0:s.z9,E="square"===C?s.FP:s.FC,F=b?{filter:"blur(20px)"}:{};return(0,c.jsx)(d.zd,{height:m?"100%":void 0,rounding:4,width:"100%",wash:y,children:(0,c.jsxs)(d.xu,{"aria-hidden":!0,display:"flex",height:S?E:"100%",direction:"row",children:[(0,c.jsx)(d.sg,{span:8,children:(0,c.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:F},position:"relative",height:m?"100%":void 0,children:(0,c.jsx)(d.xu,{color:"lightGray",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,c.jsxs)(d.xu,{dangerouslySetInlineStyle:{__style:{borderColor:x,borderStyle:"solid",borderWidth:"1px 0 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:[f&&(0,c.jsx)(d.xu,{left:!P,right:P,margin:2,position:"absolute",top:!0,zIndex:Z,children:(0,c.jsx)(t.Z,{backgroundColor:"white",iconColor:"default",size:S?32:24})}),S&&null!=v&&v.url?(0,c.jsx)(l.Z,{customCover:v.isCustom,imgPos:v.position||{width:0,height:0,x:0,y:0},imgUrl:null!==(o=v.url)&&void 0!==o?o:"",width:Math.floor(T/3*2),height:E}):(0,c.jsx)(d.Ee,{alt:I,color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:null!==(_=null!==(h=null==v?void 0:v.url)&&void 0!==h?h:null==B?void 0:B.url)&&void 0!==_?_:""})]})})})}),(0,c.jsx)(d.sg,{span:4,children:(0,c.jsxs)(d.xu,{dangerouslySetInlineStyle:{__style:F},height:"100%",children:[w&&y&&(0,c.jsx)(d.xu,{left:P,right:!P,margin:2,position:"absolute",bottom:!0,zIndex:Z,children:(0,c.jsx)(d.hU,{accessibilityLabel:g._('Edit', 'DrawerImageGroup.edit', 'Icon indicating that a board is editable'),bgColor:"white",icon:"edit",iconColor:"darkGray",onClick:({event:e})=>null==j?void 0:j(e),size:"sm"})}),k.map(((e,i)=>{var o,l;const t=p[S?i:i+1];return(0,c.jsx)(d.xu,{position:"relative",height:m?"50%":void 0,children:(0,c.jsx)(d.xu,{color:"lightGray",dangerouslySetInlineStyle:{__style:{paddingBottom:u}},overflow:"hidden",width:"100%",children:(0,c.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{borderColor:x,borderStyle:"solid",borderWidth:0===i?1:"0 1px 1px 1px"}},overflow:"hidden",position:"absolute",top:!0,bottom:!0,right:!0,left:!0,children:(0,c.jsx)(d.Ee,{alt:null!==(o=null==t?void 0:t.name)&&void 0!==o?o:"placeholder",color:"#efefef",fit:"cover",naturalHeight:133,naturalWidth:133,src:null!==(l=null==t?void 0:t.url)&&void 0!==l?l:""})})})},i)}))]})}),b&&(0,c.jsx)(d.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,c.jsx)(d.X6,{align:"center",color:"light",size:"400",children:g._('This board may contain sensitive content', 'drawerImageGroup.sensitivityScreen.heading', 'Warning text for a board that may have sensitive content')})})]})})}},808058:(e,i,o)=>{o.d(i,{FC:()=>a,FP:()=>r,M0:()=>t,s0:()=>l,z9:()=>n});const l=34,t=236,r=157,n=320,a=213},851850:(e,i,o)=>{o.d(i,{Z:()=>r});var l=o(19121),t=o(50286);function r(){const e=(0,t.HG)(),i=(0,l.Z)(),o=i&&i.isAuth;if(e&&o){return e=>{var i,o;const l=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,t=null!==(i=null===(o=e.cover_pin)||void 0===o?void 0:o.image_url)&&void 0!==i?i:l,r=e.images&&e.images["170x"]&&e.images["170x"].length?e.images["170x"][0].url:"";return t||r}}return(e,i)=>{var o,l;const t=e.has_custom_cover?e.image_cover_hd_url||e.image_cover_url:"";if(!t)return"";const r=e.cover_images&&e.cover_images["400x300"]?e.cover_images["400x300"].url:void 0,n=e.cover_images&&e.cover_images["222x"]?e.cover_images["222x"].url:void 0,a=e.cover_images&&e.cover_images["216x146"]?e.cover_images["216x146"].url:void 0,s=null!==(o=null!==(l=null!=r?r:n)&&void 0!==l?l:a)&&void 0!==o?o:"",d=e.image_cover_url||"";return t||(i&&i>2&&s?s:"")||d}}},286268:(e,i,o)=>{o.d(i,{Bw:()=>a,Jx:()=>n,po:()=>l});const l=(e="")=>(null!=e?e:"").substring((null!=e?e:"").lastIndexOf("/")+1),t=e=>({dominant_color:"#FFFFFF",height:1,url:e,width:1}),r=e=>{if(!e)return()=>!0;const i=l(e);return e=>{var o;return"string"==typeof e?l(e)!==i:l(null!==(o=e.url)&&void 0!==o?o:"")!==i}},n=(e,i)=>e.images&&e.images["170x"]?e.images["170x"].filter(r(i)):e.pin_thumbnail_urls?e.pin_thumbnail_urls.filter(r(i)).map(t):[],a=e=>{var i;return null!==(i=e&&e.crop&&e.size&&{x:e.crop[0],y:e.crop[1],width:e.size[0],height:e.size[1]})&&void 0!==i?i:{x:0,y:0,width:0,height:0}}},935409:(e,i,o)=>{function l(e){return{type:"BOARD_UPDATE_COMPLETE",payload:{board:e}}}function t(e){return{type:"BOARD_PIN_COUNT_CHANGED",payload:e}}function r(e,i){return{type:"BOARD_FOLLOW",payload:{boardId:e,value:i}}}o.d(i,{Br:()=>t,md:()=>r,yT:()=>l})},628358:(e,i,o)=>{o.d(i,{Z:()=>n,f:()=>a});var l=o(6637),t=o(935409);function r(e){return l.ZP.create("BoardFollowResource",{board_id:e})}function n(e){return i=>{r(e).callCreate().catch((()=>{i((0,t.md)(e,!1))})),i((0,t.md)(e,!0))}}function a(e){return i=>{r(e).callDelete().catch((()=>{i((0,t.md)(e,!0))})),i((0,t.md)(e,!1))}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/53845-a54852b147d45529.mjs.map