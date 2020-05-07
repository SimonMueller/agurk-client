(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{114:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(12),c=n.n(i),u=n(24),o=n(160),s=n(8),l=n(157),d=n(144),m=n(161),f=n(26),E=n(62),g=n(158),p=n(148),v=n(149),b=n(64),y=n.n(b),h=n(73),T=n(74),O=n.n(T);function R(e,t){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:t}}function S(e){return{type:"UNAUTHENTICATE_WITH_ERROR",message:e}}function A(e){return{type:"AUTHENTICATION_ERROR",message:e}}function _(e){return O()(e).sub}var C=n(10);function j(){var e=Object(C.a)(["\n  width: 100%;\n  color: white;\n  background-color: ",";\n  border-radius: 2px;\n"]);return j=function(){return e},e}var N=Object(s.b)(m.a)(j(),(function(e){var t=e.theme,n=e.severity;return t.palette[n].main}));function I(e){var t=e.children,n=e.severity;return a.a.createElement(N,{padding:1,severity:n},t)}var w=Object(u.b)((function(e){return{error:e.authentication.error,isRequestingAuthentication:e.authentication.isRequesting}}))((function(e){var t=e.dispatch,n=e.error,i=e.isRequestingAuthentication,c=Object(r.useState)(""),u=Object(f.a)(c,2),o=u[0],s=u[1],l=Object(r.useState)(""),b=Object(f.a)(l,2),T=b[0],O=b[1];return a.a.createElement(d.a,{maxWidth:"sm"},a.a.createElement(E.a,{variant:"h1",gutterBottom:!0},"Login"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement("form",{onSubmit:function(e){var n;t((n={name:o,token:T},function(e){e({type:"REQUEST_AUTHENTICATION"}),fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(){var t=Object(h.a)(y.a.mark((function t(n){var r,a,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=9;break}return t.next=3,n.json();case 3:r=t.sent,a=r.jwt,i=_(r.jwt),e(R(a,i)),t.next=10;break;case 9:e(A("Authentication failed"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(){return e(A("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(m.a,{marginBottom:1},a.a.createElement(g.a,{variant:"outlined",label:"Player name",id:"name",value:o,onChange:function(e){s(e.target.value)},type:"text",name:"name",fullWidth:!0,margin:"dense",size:"medium",required:!0,autoFocus:!0}),a.a.createElement(g.a,{variant:"outlined",label:"Access token",id:"token",value:T,onChange:function(e){O(e.target.value)},type:"password",name:"token",fullWidth:!0,margin:"dense",size:"medium",required:!0})),a.a.createElement(p.a,{size:"large",fullWidth:!0,variant:i?"outlined":"contained",disabled:i,color:"secondary",type:"submit"},i?a.a.createElement(v.a,{size:25,color:"secondary"}):"Log in"))),n&&a.a.createElement(I,{severity:"error"},a.a.createElement(E.a,{variant:"body1"},n)))})),k=n(15),L=n(154),D=n(159);function M(e){return{type:"SET_OUT_PLAYERS",outPlayers:e}}function B(e){return{type:"SET_IS_IN_GAME",isInGame:e}}function U(e){return e.next({name:k.MessageName.START_GAME})}function x(e,t){return e.next({name:k.MessageName.PLAY_CARDS,data:t})}function P(e,t){return e.next({name:k.MessageName.AUTHENTICATE,data:t})}var Y=n(150),G=n(151),W=n(147);function H(e){var t=e.playerIds.map((function(e){return a.a.createElement(Y.a,{key:e},a.a.createElement(G.a,null,e))}));return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(W.a,null,t))}var q=Object(u.b)((function(e){return{playerIds:e.lobby.players}}))((function(e){var t=e.playerIds,n=e.startGame;return a.a.createElement("div",null,a.a.createElement(H,{playerIds:t}),a.a.createElement(p.a,{size:"large",fullWidth:!0,variant:"contained",color:"secondary",onClick:n},"Start Game"))})),z=n(9),F=n(27),K=n(87),Q=n(118);function J(){var e=Object(C.a)(["\n  width: 100%;\n"]);return J=function(){return e},e}function V(){var e=Object(C.a)(["\n  border-color: ",";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 6%;\n  margin: auto;\n  width: ",";\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n"]);return V=function(){return e},e}var X=Object(s.b)(Q.a)(V(),(function(e){var t=e.selected,n=e.theme;return t?"".concat(n.palette.primary.main):"transparent"}),(function(e){return"small"===e.size?"4.5rem":"5.5rem"}),(function(e){return e.theme.breakpoints.values.sm}),(function(e){return"small"===e.size?"5rem":"6rem"}),(function(e){return e.theme.breakpoints.values.md}),(function(e){return"small"===e.size?"5.5rem":"6.5rem"})),$=s.b.img(J());function Z(e){return e.kind===k.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function ee(e){var t=e.card,n=t.color.toLowerCase();return a.a.createElement($,{src:"/agurk-client/images/joker.svg",alt:"joker of rank ".concat(t.rank," and color ").concat(n)})}function te(e){var t=e.card,n=t.suit.toLowerCase(),r="/agurk-client/images/".concat(t.rank,"-").concat(n,".svg");return a.a.createElement($,{src:r,alt:"card of rank ".concat(t.rank," and suit ").concat(n)})}function ne(e){var t=e.size,n=void 0===t?"normal":t;return a.a.createElement(X,{elevation:6,size:n},a.a.createElement($,{src:"/agurk-client/images/placeholder.svg",alt:"card placeholder"}))}function re(e){var t=e.card,n=e.isSelected,r=void 0!==n&&n,i=e.size,c=void 0===i?"normal":i;return a.a.createElement(X,{elevation:6,selected:r,size:c},t.kind===k.JOKER_CARD_KIND?a.a.createElement(ee,{card:t}):a.a.createElement(te,{card:t}))}function ae(){var e=Object(C.a)(["\n  margin-right: -3.25rem;\n\n  @media(min-width: ","px) {\n    margin-right: -2.5rem;\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 3.25rem);\n\n @media(min-width: ","px) {\n    width: calc(100% - 2.5rem);\n  }\n"]);return ie=function(){return e},e}var ce=Object(s.b)(m.a)(ie(),(function(e){return e.theme.breakpoints.values.sm})),ue=Object(s.b)(m.a)(ae(),(function(e){return e.theme.breakpoints.values.sm}));function oe(e,t){return Math.sign(e.rank-t.rank)}function se(e){var t=e.cards,n=e.handleSelect,r=Object(F.a)(t).sort(oe).map((function(e){return a.a.createElement(ue,{key:Z(e),marginBottom:1},a.a.createElement(K.a,{onClick:function(){return n(e)}},a.a.createElement(re,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(ce,{marginBottom:1},r)}function le(e){var t=e.handlePlayClick;return a.a.createElement(p.a,{size:"large",fullWidth:!0,variant:"contained",color:"secondary",onClick:t},"Play cards")}function de(e){var t=e.playCards,n=e.cardsInHand,i=e.isServerRequestingCards,c=Object(r.useState)([]),u=Object(f.a)(c,2),o=u[0],s=u[1];return Object(r.useEffect)((function(){var e=n.map((function(e){return Object(z.a)({},e,{isSelected:!1})}));s(e)}),[n]),a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Your hand"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement(se,{cards:o,handleSelect:function(e){s(o.map((function(t){return Object(k.cardEquals)(t,e)?Object(z.a)({},t,{isSelected:!t.isSelected}):t})))}})),i&&a.a.createElement(le,{handlePlayClick:function(){var e=o.filter((function(e){return e.isSelected}));t(e)}}))}var me=n(152),fe=n(164),Ee=n(167);function ge(){var e=Object(C.a)(["\n  background-color: ",";\n  border-radius: 0.25rem;\n  font-size: ",";\n  padding: 0.15rem 0.25rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: white;\n  display: inline-block;\n"]);return ge=function(){return e},e}var pe=s.b.span(ge(),(function(e){var t=e.theme,n=e.severity;return t.palette[n].main}),(function(e){return e.theme.typography.caption.fontSize}));function ve(){var e=Object(C.a)(["\n  font-weight: normal;\n"]);return ve=function(){return e},e}function be(){var e=Object(C.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return be=function(){return e},e}function ye(){var e=Object(C.a)(["\n  text-decoration-line: ",";\n"]);return ye=function(){return e},e}function he(){var e=Object(C.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return he=function(){return e},e}var Te=Object(s.c)(he()),Oe=s.b.span(ye(),(function(e){return e.isOut?"line-through":"none"})),Re=Object(s.b)(Oe)(be(),Te),Se=Object(s.b)(Oe)(ve());function Ae(e){var t=e.player,n=t.penalties.reduce((function(e,t){return t.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,t.isServerRequestingCards?a.a.createElement(Re,{isOut:t.isOut},t.id):a.a.createElement(Se,{isOut:t.isOut},t.id),a.a.createElement(pe,{severity:"warning"},"Penalty"," ",n))}function _e(e,t){return Math.sign(e.order-t.order)}function Ce(e){var t=e.players.filter((function(e){return!e.isOut})),n=Object(F.a)(t).sort(_e),r=n.findIndex((function(e){return e.isServerRequestingCards})),i=n.map((function(e){var t=r>e.order;return a.a.createElement(me.a,{active:e.isServerRequestingCards,completed:t,key:e.id},a.a.createElement(fe.a,null,a.a.createElement(Ae,{player:e})))}));return i.length?a.a.createElement(Ee.a,{orientation:"vertical"},i):null}function je(e){var t=e.players.filter((function(e){return e.isOut})).map((function(e){return a.a.createElement(Y.a,{key:e.id},a.a.createElement(G.a,{secondary:e.outReason},a.a.createElement(Ae,{player:e})))}));return t.length?a.a.createElement(W.a,null,t):null}function Ne(e){var t=e.players;return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(Ce,{players:t}),a.a.createElement(je,{players:t}))}var Ie,we=n(153);function ke(e){var t=e.timeoutInSeconds,n=Object(r.useState)(t),i=Object(f.a)(n,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){u(t)}),[t]),Object(r.useEffect)((function(){var e=setInterval((function(){return c-1<0?clearInterval(e):u((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,c)}!function(e){e.START="START",e.END="END",e.BETWEEN_ROUNDS="BETWEEN_ROUNDS",e.BETWEEN_CYCLES="BETWEEN_CYCLES",e.BEFORE_CYCLE="BEFORE_CYCLE",e.IN_CYCLE="IN_CYCLE"}(Ie||(Ie={}));var Le={stage:Ie.START,validatedTurns:[],cardsInHand:[],isLastCycleOfRound:!1,turnTimeoutInMillis:void 0,turnRetriesLeft:0};function De(){var e=Object(C.a)(["\n  font-weight: bold;\n"]);return De=function(){return e},e}var Me=Object(s.b)(E.a)(De());function Be(e){var t=e.turnTimeoutInSeconds,n=e.turnRetriesLeft;return a.a.createElement(we.a,{container:!0,justify:"space-between",alignItems:"baseline"},a.a.createElement(E.a,{variant:"h2"},"Your turn"," "),t&&a.a.createElement(Me,{variant:"subtitle1"},a.a.createElement(ke,{timeoutInSeconds:t})," ","seconds and"," ",n," ",1===n?"retry left":"retries left"))}function Ue(e){var t=e.players.find((function(e){return e.isServerRequestingCards}));return a.a.createElement(E.a,{variant:"h2"},null===t||void 0===t?void 0:t.id,"'s turn")}function xe(e){var t=e.isServerRequestingCards,n=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;return t?a.a.createElement(Be,{turnTimeoutInSeconds:r,turnRetriesLeft:i}):a.a.createElement(Ue,{players:n})}function Pe(e){var t=e.players.filter((function(e){return e.isCycleHighestTurnPlayer})).map((function(e){return e.id}));return 0===t.length?a.a.createElement(E.a,{variant:"h2"},"No cycle winner"):a.a.createElement(E.a,{variant:"h2"},t.join(" and ")," ",1===t.length?"wins the cycle":"win the cycle")}function Ye(e){var t=e.players.find((function(e){return e.isRoundWinner}));return a.a.createElement(E.a,{variant:"h2"},t?"".concat(t.id," wins the round"):"No round winner")}function Ge(e){var t=e.players.find((function(e){return e.isGameWinner}));return a.a.createElement(E.a,{variant:"h2"},t?"".concat(t.id," wins the game \ud83c\udf89\ud83c\udf89"):"No game winner")}function We(e){var t=e.isServerRequestingCards,n=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;switch(e.gameStage){case Ie.IN_CYCLE:return a.a.createElement(xe,{isServerRequestingCards:t,players:n,turnRetriesLeft:i,turnTimeoutInSeconds:r});case Ie.BETWEEN_CYCLES:return a.a.createElement(Pe,{players:n});case Ie.BETWEEN_ROUNDS:return a.a.createElement(Ye,{players:n});case Ie.END:return a.a.createElement(Ge,{players:n});default:return null}}var He=n(165);function qe(){var e=Object(C.a)(["\n  max-width: ",";\n"]);return qe=function(){return e},e}var ze=Object(s.b)(m.a)(qe(),(function(e){var t=e.cardCount;return"".concat(6*t,"rem")}));function Fe(e){return e.playerId+e.valid}function Ke(e){return e.cards.map((function(e){return a.a.createElement(m.a,{marginRight:1,key:Z(e)},a.a.createElement(re,{size:"small",card:e}))}))}function Qe(e){var t=e.turn,n=Ke(t);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(we.a,{container:!0,justify:"center"},n)),a.a.createElement(ze,{cardCount:n.length},a.a.createElement(He.a,{title:t.playerId},a.a.createElement(E.a,{variant:"body1",align:"center",noWrap:!0},t.playerId))))}function Je(e){var t=e.turn,n=Ke(t);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(we.a,{container:!0,justify:"center"},0===n.length?a.a.createElement(ne,{size:"small"}):n)),a.a.createElement(E.a,{variant:"body1",align:"center"},t.playerId),a.a.createElement(E.a,{variant:"body1",align:"center"},a.a.createElement(pe,{severity:"error"},t.invalidReason)))}function Ve(e){var t=e.turn;return a.a.createElement(m.a,null,t.valid?a.a.createElement(Qe,{turn:t}):a.a.createElement(Je,{turn:t}))}function Xe(e){var t=e.turns.reduceRight((function(e,t){return void 0===e.find((function(e){return e.playerId===t.playerId}))?[t].concat(Object(F.a)(e)):e}),[]).map((function(e){return a.a.createElement(m.a,{marginRight:1,marginBottom:1,key:Fe(e)},a.a.createElement(Ve,{turn:e}))}));return a.a.createElement(we.a,{container:!0},t)}function $e(){var e=Object(C.a)(["\n  text-align: center;\n"]);return $e=function(){return e},e}var Ze=s.b.div($e());function et(e,t){return Object(k.compareRanks)(e,t)>0?e:t}function tt(e){var t=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),n=t.length>0?a.a.createElement(re,{size:"small",card:t.reduce(et)}):a.a.createElement(ne,{size:"small"});return a.a.createElement(m.a,null,a.a.createElement(m.a,{marginBottom:1},n),a.a.createElement(Ze,null,a.a.createElement(pe,{severity:"info"},"Highest card")))}function nt(e){return e[e.length-1]}function rt(e){var t=e.playedTurns,n=Object(r.useState)(void 0),i=Object(f.a)(n,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){var e=nt(t);if(u(e),e&&!e.valid){var n=nt(t.filter((function(e){return e.valid}))),r=setTimeout((function(){u(n)}),2e3);return function(){return clearTimeout(r)}}}),[t]),c?a.a.createElement(Ve,{turn:c}):null}function at(e){var t=e.playedTurns;return a.a.createElement(we.a,{container:!0},a.a.createElement(m.a,{marginBottom:1,marginRight:2},a.a.createElement(tt,{playedTurns:t})),a.a.createElement(m.a,{marginBottom:1},a.a.createElement(rt,{playedTurns:t})))}function it(e){var t=e.playedTurns;return e.isLastCycleOfRound?a.a.createElement(Xe,{turns:t}):a.a.createElement(at,{playedTurns:t})}function ct(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 6;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return ct=function(){return e},e}function ut(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 4;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 2;\n  }\n"]);return ut=function(){return e},e}function ot(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 3;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return ot=function(){return e},e}function st(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 2;\n  grid-row-end: span 1;\n  min-height: 25vh;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 2;\n    grid-row-end: span 1;\n  }\n"]);return st=function(){return e},e}function lt(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 1;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 1;\n  }\n"]);return lt=function(){return e},e}function dt(){var e=Object(C.a)(["\n  display: grid;\n  row-gap: ","px;\n  margin-bottom: ","px;\n\n  @media(min-width: ","px) {\n    grid-template-columns: 30% 65%;\n    grid-template-rows: auto auto auto;\n    column-gap: 5%;\n    row-gap: 2em;\n  }\n"]);return dt=function(){return e},e}function mt(){var e=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n"]);return mt=function(){return e},e}var ft=s.b.div(mt()),Et=s.b.div(dt(),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.breakpoints.values.md})),gt=Object(s.b)(m.a)(lt(),(function(e){return e.theme.breakpoints.values.md})),pt=Object(s.b)(m.a)(st(),(function(e){return e.theme.breakpoints.values.md})),vt=Object(s.b)(m.a)(ot(),(function(e){return e.theme.breakpoints.values.md})),bt=Object(s.b)(m.a)(ut(),(function(e){return e.theme.breakpoints.values.md})),yt=Object(s.b)(m.a)(ct(),(function(e){return e.theme.breakpoints.values.md}));var ht=Object(u.b)((function(e,t){return{state:{cardsInHand:e.game.state.cardsInHand,players:e.game.players,stage:e.game.state.stage,playedTurns:e.game.state.validatedTurns,playerState:e.game.players.find((function(e){return e.id===t.playerId})),playCards:function(e){return t.serverApi.sendPlayCards(e)},isLastCycleOfRound:e.game.state.isLastCycleOfRound,turnTimeoutInSeconds:e.game.state.turnTimeoutInMillis?e.game.state.turnTimeoutInMillis/1e3:void 0,turnRetriesLeft:e.game.state.turnRetriesLeft},playCards:function(e){return t.serverApi.sendPlayCards(e)}}}),(function(e){return{closeGame:function(){e({type:"RESET_GAME"}),e(B(!1))}}}))((function(e){var t=e.state,n=e.playCards,i=e.closeGame;return Object(r.useEffect)((function(){return i}),[i]),t.playerState?a.a.createElement(Et,null,a.a.createElement(gt,null,a.a.createElement(We,{gameStage:t.stage,isServerRequestingCards:t.playerState.isServerRequestingCards,players:t.players,turnTimeoutInSeconds:t.turnTimeoutInSeconds,turnRetriesLeft:t.turnRetriesLeft})),a.a.createElement(pt,null,a.a.createElement(it,{playedTurns:t.playedTurns,isLastCycleOfRound:t.isLastCycleOfRound})),a.a.createElement(vt,null,a.a.createElement(de,{isServerRequestingCards:t.playerState.isServerRequestingCards,cardsInHand:t.cardsInHand,playCards:n})),a.a.createElement(bt,null,a.a.createElement(Ne,{players:t.players})),t.stage===Ie.END&&a.a.createElement(yt,null,a.a.createElement(p.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:i},"Return to lobby"))):a.a.createElement(ft,null,a.a.createElement(v.a,null))}));function Tt(e,t,n){e.pipe(Object(L.a)((function(e){return e.name===k.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:P.bind(null,e)}})(e).sendAuthenticate(t)}),(function(){return n(S("Could not authenticate with the game server. Try to login again..."))}))}function Ot(e,t){e.subscribe((function(e){return function(e,t){switch(e.name){case k.MessageName.BROADCAST_LOBBY_PLAYERS:return t({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case k.MessageName.BROADCAST_START_GAME:return t(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players)),t(B(!0));case k.MessageName.BROADCAST_END_GAME:return e.data.isValid?t({type:"END_GAME_SUCCESS",winner:e.data.winner}):t({type:"END_GAME_ERROR",errorMessage:e.data.errorMessage});case k.MessageName.BROADCAST_START_ROUND:return t(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case k.MessageName.BROADCAST_END_ROUND:return t(M(e.data.outPlayers)),t(function(e,t){return{type:"END_ROUND",winner:e,penalties:t}}(e.data.winner,e.data.penalties));case k.MessageName.BROADCAST_START_CYCLE:return t((a=e.data.orderedPlayers,i=e.data.isLastOfRound,{type:"START_CYCLE",orderedPlayerIds:a,isLastOfRound:i}));case k.MessageName.BROADCAST_END_CYCLE:return t(M(e.data.outPlayers)),t({type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers});case k.MessageName.BROADCAST_PLAYER_TURN:return t({type:"ADD_PLAYER_TURN",turn:e.data});case k.MessageName.AVAILABLE_CARDS_IN_HAND:return t({type:"SET_CARDS_IN_HAND",cards:e.data});case k.MessageName.REQUEST_CARDS:return t((n=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:n,turnRetriesLeft:r}));case k.MessageName.BROADCAST_START_PLAYER_TURN:return t({type:"START_PLAYER_TURN",playerId:e.data});case k.MessageName.BROADCAST_OUT_PLAYER_AFTER_TURN:return t(M([e.data]))}var n,r,a,i}(e,t)}),(function(){return t(S("Could not contact the game server. Try again later..."))}))}var Rt=Object(u.b)((function(e){return{authenticatedSubject:e.authentication.subject,isInGame:e.lobby.isInGame,authenticationToken:e.authentication.token}}))((function(e){var t=e.dispatch,n=e.authenticationToken,i=e.isInGame,c=e.authenticatedSubject,u=Object(D.a)({url:"wss://agurk-server.herokuapp.com",closeObserver:{next:function(e){return t(S(e.reason))}}}),o=Object(r.useState)(u),s=Object(f.a)(o,1)[0],l=function(e){return{sendStartGame:U.bind(null,e),sendPlayCards:x.bind(null,e)}}(s);return Object(r.useEffect)((function(){return Ot(s,t),function(){return s.complete()}}),[s,t]),Object(r.useEffect)((function(){return Tt(s,n,t),function(){return s.complete()}}),[s,t,n]),a.a.createElement(a.a.Fragment,null,i?a.a.createElement(ht,{playerId:c,serverApi:l}):a.a.createElement(q,{startGame:l.sendStartGame}))})),St=n(155),At=n(156);function _t(){return a.a.createElement("header",null,a.a.createElement(St.a,{position:"static"},a.a.createElement(At.a,null,a.a.createElement(p.a,{color:"inherit",href:"./"},a.a.createElement(E.a,{variant:"h5"},"Agurk")),a.a.createElement(p.a,{color:"inherit",target:"_blank",href:"https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"},a.a.createElement(E.a,{variant:"body1"},"Rules")))))}var Ct=Object(u.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(_t,null),a.a.createElement("main",null,a.a.createElement(d.a,{maxWidth:"md"},a.a.createElement(m.a,{paddingTop:2},t?a.a.createElement(Rt,null):a.a.createElement(w,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(114),n(115);var jt=n(84),Nt=n(166),It=Object(jt.a)({typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2.25rem"},h3:{fontSize:"1.75rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.25rem"},h6:{fontSize:"1rem"}},palette:{primary:{light:"#48a999",main:"#00695c",dark:"#004c40",contrastText:"#fff"},secondary:{light:"#9162e4",main:"#5e35b1",dark:"#280680",contrastText:"#fff"},error:{light:"#ff5131",main:"#d50000",dark:"#9b0000",contrastText:"#fff"},warning:{light:"#ff7539",main:"#ff3d00",dark:"#c30000",contrastText:"#000"},info:{light:"#48a999",main:"#00695c",dark:"#004c40",contrastText:"#fff"},success:{light:"#5efc82",main:"#00c853",dark:"#009624",contrastText:"#000"}}}),wt=Object(Nt.a)(It),kt=n(29),Lt=n(82),Dt=n(83),Mt={subject:"",isAuthenticated:!1,isRequesting:!1,token:"",error:void 0},Bt=Number.MAX_SAFE_INTEGER;function Ut(e,t){return e.filter((function(e){return e.playerId===t}))}function xt(e,t){return e.some((function(e){return e===t}))}function Pt(e,t){return!!e.find((function(e){return e.id===t.id}))||t.isOut}function Yt(e,t){var n=e.find((function(e){return e.id===t.id}));return n?n.reason:t.outReason}function Gt(e,t){var n=e.findIndex((function(e){return e===t.id}));return-1===n?Bt:n}var Wt=[],Ht={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1,order:Bt},qt=Object(kt.combineReducers)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OUT_PLAYERS":return e.map((function(e){return Object(z.a)({},e,{isOut:Pt(t.outPlayers,e),outReason:Yt(t.outPlayers,e)})}));case"START_GAME":return t.playerIds.map((function(e){return Object(z.a)({},Ht,{id:e})}));case"END_GAME_SUCCESS":return e.map((function(e){return Object(z.a)({},e,{isGameWinner:e.id===t.winner})}));case"RESET_GAME":return Wt;case"ADD_PLAYER_TURN":return e.map((function(e){return Object(z.a)({},e,{isServerRequestingCards:t.turn.playerId!==e.id&&e.isServerRequestingCards})}));case"END_ROUND":return e.map((function(e){return Object(z.a)({},e,{penalties:[].concat(Object(F.a)(e.penalties),Object(F.a)(Ut(t.penalties,e.id))),isRoundWinner:e.id===t.winner})}));case"START_CYCLE":return e.map((function(e){return Object(z.a)({},e,{order:Gt(t.orderedPlayerIds,e)})}));case"END_CYCLE":return e.map((function(e){return Object(z.a)({},e,{isCycleHighestTurnPlayer:xt(t.highestTurnPlayerIds,e.id)})}));case"START_PLAYER_TURN":return e.map((function(e){return Object(z.a)({},e,{isServerRequestingCards:t.playerId===e.id})}));default:return e}},state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OUT_PLAYERS":return e;case"START_GAME":return Object(z.a)({},e,{stage:Ie.START});case"END_GAME_SUCCESS":return Object(z.a)({},e,{stage:Ie.END});case"RESET_GAME":return Le;case"END_GAME_ERROR":return Object(z.a)({},e,{stage:Ie.END});case"SET_CARDS_IN_HAND":return Object(z.a)({},e,{cardsInHand:t.cards});case"ADD_PLAYER_TURN":return Object(z.a)({},e,{validatedTurns:[].concat(Object(F.a)(e.validatedTurns),[t.turn])});case"START_ROUND":return Object(z.a)({},e,{stage:Ie.BEFORE_CYCLE});case"END_ROUND":return Object(z.a)({},e,{stage:Ie.BETWEEN_ROUNDS});case"START_CYCLE":return Object(z.a)({},e,{stage:Ie.IN_CYCLE,validatedTurns:[],isLastCycleOfRound:t.isLastOfRound});case"END_CYCLE":return Object(z.a)({},e,{stage:Ie.BETWEEN_CYCLES});case"REQUEST_CARDS":return Object(z.a)({},e,{turnTimeoutInMillis:t.turnTimeoutInMillis,turnRetriesLeft:t.turnRetriesLeft});default:return e}}}),zt={players:[],isInGame:!1},Ft=Object(kt.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE_WITH_TOKEN":return Object(z.a)({},e,{subject:t.subject,isAuthenticated:!0,token:t.token,isRequesting:!1,error:void 0});case"AUTHENTICATION_ERROR":return Object(z.a)({},e,{error:t.message,isRequesting:!1});case"UNAUTHENTICATE_WITH_ERROR":return Object(z.a)({},e,{},Mt,{error:t.message});case"REQUEST_AUTHENTICATION":return Object(z.a)({},e,{isRequesting:!0});default:return e}},game:qt,lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOBBY_PLAYERS":return Object(z.a)({},e,{players:t.playerIds});case"SET_IS_IN_GAME":return Object(z.a)({},e,{isInGame:t.isInGame});default:return e}}}),Kt=Object(kt.createStore)(Ft,Object(Lt.composeWithDevTools)(Object(kt.applyMiddleware)(Dt.a)));c.a.render(a.a.createElement(u.a,{store:Kt},a.a.createElement(l.a,{theme:wt},a.a.createElement(s.a,{theme:wt},a.a.createElement(o.b,{injectFirst:!0},a.a.createElement(Ct,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},99:function(e,t,n){e.exports=n(116)}},[[99,1,2]]]);
//# sourceMappingURL=main.6f5ec0c5.chunk.js.map