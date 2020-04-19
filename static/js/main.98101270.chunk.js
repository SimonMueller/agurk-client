(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{82:function(e,n,t){e.exports=t(99)},98:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(12),u=t.n(i),c=t(22),l=t(29),o=t(61),s=t(62),d=t(142),m=t(8),f=t(139),E=t(129),p=t(143),g=t(24),v=t(53),y=t(140),b=t(132),h=t(55),O=t.n(h),T=t(63),R=t(64),S=t.n(R);function C(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function j(e){return{type:"UNAUTHENTICATE_WITH_ERROR",message:e}}function A(e){return{type:"AUTHENTICATION_ERROR",message:e}}function _(e){return S()(e).sub}var I=t(10);function N(){var e=Object(I.a)(["\n  width: 100%;\n  color: white;\n  background-color: ",";\n"]);return N=function(){return e},e}var w=Object(m.b)(p.a)(N(),(function(e){var n=e.theme,t=e.severity;return n.palette[t].main}));function k(e){var n=e.children,t=e.severity;return a.a.createElement(w,{padding:1,severity:t},n)}var L=Object(c.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,i=Object(r.useState)(""),u=Object(g.a)(i,2),c=u[0],l=u[1],o=Object(r.useState)(""),s=Object(g.a)(o,2),d=s[0],m=s[1];return a.a.createElement(E.a,{maxWidth:"sm"},a.a.createElement(v.a,{variant:"h1",gutterBottom:!0},"Login"),a.a.createElement(p.a,{marginBottom:2},a.a.createElement("form",{onSubmit:function(e){var t;n((t={name:c,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(T.a)(O.a.mark((function n(t){var r,a,i;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,i=_(r.jwt),e(C(a,i)),e({type:"SET_PLAYER_ID",playerId:i}),n.next=11;break;case 10:e(A("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(A("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(p.a,{marginBottom:1},a.a.createElement(y.a,{variant:"outlined",label:"Player name",id:"name",value:c,onChange:function(e){l(e.target.value)},type:"text",name:"name",fullWidth:!0,margin:"dense",size:"medium",required:!0,autoFocus:!0}),a.a.createElement(y.a,{variant:"outlined",label:"Access token",id:"token",value:d,onChange:function(e){m(e.target.value)},type:"password",name:"token",fullWidth:!0,margin:"dense",size:"medium",required:!0})),a.a.createElement(b.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",type:"submit"},"Log in"))),t&&a.a.createElement(k,{severity:"error"},a.a.createElement(v.a,{variant:"body1"},t)))})),D=t(11),B=t(136),M=t(141);function P(e){return{type:"SET_IS_IN_GAME",isInGame:e}}function Y(e){return e.next({name:D.MessageName.START_GAME})}function U(e,n){return e.next({name:D.MessageName.PLAY_CARDS,data:n})}function x(e,n){return e.next({name:D.MessageName.AUTHENTICATE,data:n})}var G=t(133),H=t(134),W=t(131);function z(e){var n=e.playerIds.map((function(e){return a.a.createElement(G.a,{key:e},a.a.createElement(H.a,null,e))}));return a.a.createElement("div",null,a.a.createElement(v.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(W.a,null,n))}var q=Object(c.b)((function(e){return{playerIds:e.lobby.players}}))((function(e){var n=e.playerIds,t=e.startGame;return a.a.createElement("div",null,a.a.createElement(z,{playerIds:n}),a.a.createElement(b.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",onClick:t},"Start Game"))})),F=t(6),K=t(73),J=t(102);function Q(){var e=Object(I.a)(["\n  width: 100%;\n"]);return Q=function(){return e},e}function V(){var e=Object(I.a)(["\n  border-color: ",";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 6%;\n  margin: auto;\n  max-width: ",";\n  min-width: 4rem;\n"]);return V=function(){return e},e}var $=Object(m.b)(J.a)(V(),(function(e){var n=e.selected,t=e.theme;return n?"".concat(t.palette.primary.main):"transparent"}),(function(e){return"small"===e.size?"4rem":"6rem"})),X=m.b.img(Q());function Z(e){return e.kind===D.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function ee(e){var n=e.card.color.toLowerCase();return a.a.createElement(X,{src:"/agurk-client/images/joker.svg",alt:"joker card of color ".concat(n)})}function ne(e){var n=e.card,t=n.suit.toLowerCase(),r="/agurk-client/images/".concat(n.rank,"-").concat(t,".svg");return a.a.createElement(X,{src:r,alt:"card of rank ".concat(n.rank," and suit ").concat(t)})}function te(e){var n=e.size,t=void 0===n?"normal":n;return a.a.createElement($,{elevation:6,size:t},a.a.createElement(X,{src:"/agurk-client/images/placeholder.svg",alt:"card placeholder"}))}function re(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t,i=e.size,u=void 0===i?"normal":i;return a.a.createElement($,{elevation:6,selected:r,size:u},n.kind===D.JOKER_CARD_KIND?a.a.createElement(ee,{card:n}):a.a.createElement(ne,{card:n}))}function ae(){var e=Object(I.a)(["\n  margin-right: -","%;\n  width: ","%;\n"]);return ae=function(){return e},e}function ie(){var e=Object(I.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: ","%;\n"]);return ie=function(){return e},e}var ue=Math.floor(100/7),ce=Math.floor(100/7*2),le=100-ue,oe=Object(m.b)(p.a)(ie(),le),se=Object(m.b)(p.a)(ae(),ue,ce);function de(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(se,{key:Z(e),marginBottom:1},a.a.createElement(K.a,{onClick:function(){return t(e)}},a.a.createElement(re,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(oe,{marginBottom:1},r)}function me(e){var n=e.handlePlayClick;return a.a.createElement(b.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",onClick:n},"Play Cards")}function fe(e){var n=e.playCards,t=e.cardsInHand,i=e.isServerRequestingCards,u=Object(r.useState)([]),c=Object(g.a)(u,2),l=c[0],o=c[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(F.a)({},e,{isSelected:!1})}));o(e)}),[t]),a.a.createElement("div",null,a.a.createElement(v.a,{variant:"h2",gutterBottom:!0},"Your hand"),a.a.createElement(p.a,{marginBottom:2},a.a.createElement(de,{cards:l,handleSelect:function(e){o(l.map((function(n){return Object(D.cardEquals)(n,e)?Object(F.a)({},n,{isSelected:!n.isSelected}):n})))}})),i&&a.a.createElement(me,{handlePlayClick:function(){var e=l.filter((function(e){return e.isSelected}));n(e)}}))}function Ee(){var e=Object(I.a)(["\n  background-color: ",";\n  border-radius: 0.25rem;\n  font-size: ",";\n  margin: 0 ","px;\n  padding: 0.15rem 0.25rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: white;\n"]);return Ee=function(){return e},e}var pe=m.b.span(Ee(),(function(e){var n=e.theme,t=e.severity;return n.palette[t].main}),(function(e){return e.theme.typography.caption.fontSize}),(function(e){return e.theme.spacing(1)}));function ge(){var e=Object(I.a)(["\n  font-weight: normal;\n"]);return ge=function(){return e},e}function ve(){var e=Object(I.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return ve=function(){return e},e}function ye(){var e=Object(I.a)(["\n  text-decoration-line: ",";\n"]);return ye=function(){return e},e}function be(){var e=Object(I.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return be=function(){return e},e}var he=Object(m.c)(be()),Oe=m.b.span(ye(),(function(e){return e.isOut?"line-through":"none"})),Te=Object(m.b)(Oe)(ve(),he),Re=Object(m.b)(Oe)(ge());function Se(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,n.isServerRequestingCards?a.a.createElement(Te,{isOut:n.isOut},n.id):a.a.createElement(Re,{isOut:n.isOut},n.id),a.a.createElement(pe,{severity:"warning"},"Penalty"," ",t))}function Ce(e,n){return Math.sign(e.order-n.order)}function je(e){var n=e.players.filter((function(e){return!e.isOut})).sort(Ce).map((function(e){return a.a.createElement(G.a,{key:e.id},a.a.createElement(H.a,null,a.a.createElement(Se,{player:e})))}));return 0===n.length?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(v.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(W.a,null,n))}function Ae(e){var n=e.players.filter((function(e){return e.isOut})).map((function(e){return a.a.createElement(G.a,{key:e.id},a.a.createElement(H.a,{secondary:e.outReason},a.a.createElement(Se,{player:e})))}));return n.length?a.a.createElement(W.a,null,n):null}function _e(e){var n=e.players;return a.a.createElement("div",null,a.a.createElement(je,{players:n}),a.a.createElement(Ae,{players:n}))}var Ie,Ne=t(44);function we(e,n){return e.filter((function(e){return e.playerId===n}))}function ke(e,n){return e.some((function(e){return e.id===n}))}function Le(e,n){return e.some((function(e){return e===n}))}function De(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(D.cardEquals)(e,n)}))}))}function Be(e,n){return e.playerId===n&&e.valid}function Me(e,n){var t;return null===(t=e.find((function(e){return e.id===n})))||void 0===t?void 0:t.reason}function Pe(e,n){return e.findIndex((function(e){return e===n.id}))}!function(e){e[e.START=0]="START",e[e.END=1]="END",e[e.BETWEEN_ROUNDS=2]="BETWEEN_ROUNDS",e[e.BETWEEN_CYCLES=3]="BETWEEN_CYCLES",e[e.BEFORE_CYCLE=4]="BEFORE_CYCLE",e[e.IN_CYCLE=5]="IN_CYCLE"}(Ie||(Ie={}));var Ye={stage:Ie.START,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],isLastCycleOfRound:!1,turnTimeoutInMillis:void 0,turnRetriesLeft:0},Ue={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1,order:-1},xe=t(135);function Ge(e){var n=e.timeoutInSeconds,t=Object(r.useState)(n),i=Object(g.a)(t,2),u=i[0],c=i[1];return Object(r.useEffect)((function(){c(n)}),[n]),Object(r.useEffect)((function(){var e=setInterval((function(){return u-1<0?clearInterval(e):c(u-1)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,u)}function He(){var e=Object(I.a)(["\n  font-weight: bold;\n"]);return He=function(){return e},e}var We=Object(m.b)(v.a)(He());function ze(e){var n=e.turnTimeoutInSeconds,t=e.turnRetriesLeft;return a.a.createElement(xe.a,{container:!0,justify:"space-between",alignItems:"baseline"},a.a.createElement(v.a,{variant:"h2"},"Your turn"," "),n&&a.a.createElement(We,{variant:"subtitle1"},a.a.createElement(Ge,{timeoutInSeconds:n})," ","seconds and"," ",t," ",1===t?"retry left":"retries left"))}function qe(e){var n=e.players.find((function(e){return e.isServerRequestingCards}));return a.a.createElement(v.a,{variant:"h2"},null===n||void 0===n?void 0:n.id,"'s turn")}function Fe(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;return n?a.a.createElement(ze,{turnTimeoutInSeconds:r,turnRetriesLeft:i}):a.a.createElement(qe,{players:t})}function Ke(e){var n=e.players.filter((function(e){return e.isCycleHighestTurnPlayer})).map((function(e){return e.id}));return 0===n.length?a.a.createElement("h2",null,"No cycle winner"):a.a.createElement(v.a,{variant:"h2"},n.join(" and ")," ",1===n.length?"wins the cycle":"win the cycle")}function Je(e){var n=e.players.find((function(e){return e.isRoundWinner}));return a.a.createElement(v.a,{variant:"h2"},n?"".concat(n.id," wins the round"):"No round winner")}function Qe(e){var n=e.players.find((function(e){return e.isGameWinner}));return a.a.createElement(v.a,{variant:"h2"},n?"".concat(n.id," wins the game \ud83c\udf89\ud83c\udf89"):"No game winner")}function Ve(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;switch(e.gameStage){case Ie.IN_CYCLE:return a.a.createElement(Fe,{isServerRequestingCards:n,players:t,turnRetriesLeft:i,turnTimeoutInSeconds:r});case Ie.BETWEEN_CYCLES:return a.a.createElement(Ke,{players:t});case Ie.BETWEEN_ROUNDS:return a.a.createElement(Je,{players:t});case Ie.END:return a.a.createElement(Qe,{players:t});default:return null}}function $e(){var e=Object(I.a)(["\n  text-align: center;\n"]);return $e=function(){return e},e}var Xe=m.b.div($e());function Ze(e){return e.playerId+e.valid}function en(e){return e.cards.map((function(e){return a.a.createElement(p.a,{marginRight:1,key:Z(e)},a.a.createElement(re,{size:"small",card:e}))}))}function nn(e){var n=e.turn,t=en(n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{marginBottom:1},a.a.createElement(xe.a,{container:!0,justify:"center"},t)),a.a.createElement(Xe,null,a.a.createElement("span",null,n.playerId)))}function tn(e){var n=e.turn,t=en(n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{marginBottom:1},a.a.createElement(xe.a,{container:!0,justify:"center"},0===t.length?a.a.createElement(te,{size:"small"}):t)),a.a.createElement(Xe,null,a.a.createElement("span",null,n.playerId)),a.a.createElement(Xe,null,a.a.createElement(pe,{severity:"error"},n.invalidReason)))}function rn(e){var n=e.turn;return a.a.createElement(p.a,null,n.valid?a.a.createElement(nn,{turn:n}):a.a.createElement(tn,{turn:n}))}function an(e){var n=e.turns.reduceRight((function(e,n){return void 0===e.find((function(e){return e.playerId===n.playerId}))?[n].concat(Object(Ne.a)(e)):e}),[]).map((function(e){return a.a.createElement(p.a,{marginRight:1,marginBottom:1,key:Ze(e)},a.a.createElement(rn,{turn:e}))}));return a.a.createElement(xe.a,{container:!0},n)}function un(){var e=Object(I.a)(["\n  text-align: center;\n"]);return un=function(){return e},e}var cn=m.b.div(un());function ln(e,n){return Object(D.compareRanks)(e,n)>0?e:n}function on(e){var n=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),t=n.length>0?a.a.createElement(re,{size:"small",card:n.reduce(ln)}):a.a.createElement(te,{size:"small"});return a.a.createElement(p.a,null,a.a.createElement(p.a,{marginBottom:1},t),a.a.createElement(cn,null,a.a.createElement(pe,{severity:"info"},"Highest card")))}function sn(e){return e[e.length-1]}function dn(e){var n=e.playedTurns,t=Object(r.useState)(void 0),i=Object(g.a)(t,2),u=i[0],c=i[1];return Object(r.useEffect)((function(){var e=sn(n);if(c(e),e&&!e.valid){var t=sn(n.filter((function(e){return e.valid}))),r=setTimeout((function(){c(t)}),2e3);return function(){return clearTimeout(r)}}}),[n]),u?a.a.createElement(rn,{turn:u}):null}function mn(e){var n=e.playedTurns;return a.a.createElement(xe.a,{container:!0},a.a.createElement(p.a,{marginBottom:1,marginRight:2},a.a.createElement(on,{playedTurns:n})),a.a.createElement(p.a,{marginBottom:1},a.a.createElement(dn,{playedTurns:n})))}function fn(e){var n=e.playedTurns;return e.isLastCycleOfRound?a.a.createElement(an,{turns:n}):a.a.createElement(mn,{playedTurns:n})}function En(){var e=Object(I.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 6;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return En=function(){return e},e}function pn(){var e=Object(I.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 4;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 2;\n  }\n"]);return pn=function(){return e},e}function gn(){var e=Object(I.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 3;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return gn=function(){return e},e}function vn(){var e=Object(I.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 2;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 2;\n    grid-row-end: span 1;\n  }\n"]);return vn=function(){return e},e}function yn(){var e=Object(I.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 1;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 1;\n  }\n"]);return yn=function(){return e},e}function bn(){var e=Object(I.a)(["\n  display: grid;\n  row-gap: ","px;\n\n  @media(min-width: ","px) {\n    grid-template-columns: 30% 65%;\n    grid-template-rows: auto auto auto;\n    column-gap: 5%;\n    row-gap: 2em;\n  }\n"]);return bn=function(){return e},e}var hn=m.b.div(bn(),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.breakpoints.values.sm})),On=m.b.div(yn(),(function(e){return e.theme.breakpoints.values.sm})),Tn=m.b.div(vn(),(function(e){return e.theme.breakpoints.values.sm})),Rn=m.b.div(gn(),(function(e){return e.theme.breakpoints.values.sm})),Sn=m.b.div(pn(),(function(e){return e.theme.breakpoints.values.sm})),Cn=m.b.div(En(),(function(e){return e.theme.breakpoints.values.sm}));var jn=Object(c.b)((function(e,n){return{state:{cardsInHand:e.game.cardsInHand,players:e.game.players,stage:e.game.stage,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},isLastCycleOfRound:e.game.isLastCycleOfRound,turnTimeoutInSeconds:e.game.turnTimeoutInMillis?e.game.turnTimeoutInMillis/1e3:void 0,turnRetriesLeft:e.game.turnRetriesLeft},playCards:function(e){return n.serverApi.sendPlayCards(e)}}}),(function(e){return{closeGame:function(){e(P(!1))}}}))((function(e){var n=e.state,t=e.playCards,r=e.closeGame;return n.playerState?a.a.createElement(hn,null,a.a.createElement(On,null,a.a.createElement(Ve,{gameStage:n.stage,isServerRequestingCards:n.playerState.isServerRequestingCards,players:n.players,turnTimeoutInSeconds:n.turnTimeoutInSeconds,turnRetriesLeft:n.turnRetriesLeft})),a.a.createElement(Tn,null,a.a.createElement(fn,{playedTurns:n.playedTurns,isLastCycleOfRound:n.isLastCycleOfRound})),a.a.createElement(Rn,null,a.a.createElement(fe,{isServerRequestingCards:n.playerState.isServerRequestingCards,cardsInHand:n.cardsInHand,playCards:t})),a.a.createElement(Sn,null,a.a.createElement(_e,{players:n.players})),n.stage===Ie.END&&a.a.createElement(Cn,null,a.a.createElement(b.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:r},"Return to lobby"))):a.a.createElement("p",null,"Loading game...")}));function An(e,n,t){e.pipe(Object(B.a)((function(e){return e.name===D.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:x.bind(null,e)}})(e).sendAuthenticate(n)}),(function(){return t(j("Could not authenticate with the game server. Try to login again..."))}))}function _n(e,n){e.subscribe((function(e){return function(e,n){switch(e.name){case D.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case D.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players)),n(P(!0));case D.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error});case D.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case D.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case D.MessageName.BROADCAST_START_CYCLE:return n((i=e.data.orderedPlayers,u=e.data.isLastOfRound,{type:"START_CYCLE",orderedPlayerIds:i,isLastOfRound:u}));case D.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case D.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case D.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case D.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case D.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a,i,u}(e,n)}),(function(){return n(j("Could not contact the game server. Try again later..."))}))}var In=Object(c.b)((function(e){return{isInGame:e.lobby.isInGame,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,i=e.isInGame,u=Object(M.a)({url:"wss://agurk-server.herokuapp.com",closeObserver:{next:function(e){return n(j(e.reason))}}}),c=Object(r.useState)(u),l=Object(g.a)(c,1)[0],o=function(e){return{sendStartGame:Y.bind(null,e),sendPlayCards:U.bind(null,e)}}(l);return Object(r.useEffect)((function(){return _n(l,n),function(){return l.complete()}}),[l,n]),Object(r.useEffect)((function(){return An(l,t,n),function(){return l.complete()}}),[l,n,t]),a.a.createElement(a.a.Fragment,null,i?a.a.createElement(jn,{serverApi:o}):a.a.createElement(q,{startGame:o.sendStartGame}))})),Nn=t(137),wn=t(138);function kn(){return a.a.createElement("header",null,a.a.createElement(Nn.a,{position:"static"},a.a.createElement(wn.a,null,a.a.createElement(b.a,{color:"inherit",href:"./agurk-client"},a.a.createElement(v.a,{variant:"h5"},"Agurk")),a.a.createElement(b.a,{color:"inherit",target:"_blank",href:"https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"},a.a.createElement(v.a,{variant:"body1"},"Rules")))))}var Ln=Object(c.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(kn,null),a.a.createElement("main",null,a.a.createElement(E.a,{maxWidth:"md"},a.a.createElement(p.a,{paddingTop:2},n?a.a.createElement(In,null):a.a.createElement(L,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Dn={subject:"",isAuthenticated:!1,token:"",error:void 0},Bn={players:[],isInGame:!1},Mn=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(F.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(F.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(F.a)({},e,{},Dn,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(F.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(F.a)({},e,{stage:Ie.START,players:n.playerIds.map((function(e){return Object(F.a)({},Ue,{id:e})}))});case"END_GAME_SUCCESS":return Object(F.a)({},e,{stage:Ie.END,players:e.players.map((function(e){return Object(F.a)({},e,{isGameWinner:e.id===n.winner})}))});case"RESET_GAME":return Object(F.a)({},e,{players:e.players.map((function(e){return Object(F.a)({},e,{},Ue)}))},Ye,{playerId:e.playerId});case"END_GAME_ERROR":return Object(F.a)({},e,{stage:Ie.END});case"SET_CARDS_IN_HAND":return Object(F.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(F.a)({},e,{validatedTurns:[].concat(Object(Ne.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(F.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:Be(n.turn,e.playerId)?De(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return Object(F.a)({},e,{stage:Ie.BEFORE_CYCLE});case"END_ROUND":return Object(F.a)({},e,{stage:Ie.BETWEEN_ROUNDS,players:e.players.map((function(e){return Object(F.a)({},e,{penalties:[].concat(Object(Ne.a)(e.penalties),Object(Ne.a)(we(n.penalties,e.id))),isOut:ke(n.outPlayers,e.id),isRoundWinner:e.id===n.winner,outReason:Me(n.outPlayers,e.id)})}))});case"START_CYCLE":return Object(F.a)({},e,{players:e.players.map((function(e){return Object(F.a)({},e,{order:Pe(n.orderedPlayerIds,e)})})),stage:Ie.IN_CYCLE,validatedTurns:[],isLastCycleOfRound:n.isLastOfRound});case"END_CYCLE":return Object(F.a)({},e,{stage:Ie.BETWEEN_CYCLES,players:e.players.map((function(e){return Object(F.a)({},e,{isCycleHighestTurnPlayer:Le(n.highestTurnPlayerIds,e.id),isOut:ke(n.outPlayers,e.id),outReason:Me(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return Object(F.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(F.a)({},e,{players:e.players.map((function(e){return Object(F.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(F.a)({},e,{players:n.playerIds});case"SET_IS_IN_GAME":return Object(F.a)({},e,{isInGame:n.isInGame});default:return e}}}),Pn=(t(98),t(71)),Yn=t(145),Un=Object(Pn.a)({typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2.25rem"},h3:{fontSize:"1.75rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.25rem"},h6:{fontSize:"1rem"}}}),xn=Object(Yn.a)(Un),Gn=Object(l.createStore)(Mn,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(o.a)));u.a.render(a.a.createElement(c.a,{store:Gn},a.a.createElement(f.a,{theme:xn},a.a.createElement(m.a,{theme:xn},a.a.createElement(d.b,{injectFirst:!0},a.a.createElement(Ln,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[82,1,2]]]);
//# sourceMappingURL=main.98101270.chunk.js.map