(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{111:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(11),c=n.n(i),u=n(22),s=n(158),o=n(9),l=n(155),d=n(142),m=n(159),f=n(24),E=n(61),p=n(156),g=n(146),v=n(147),b=n(62),y=n.n(b),h=n(70),T=n(71);function O(e,t){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:t}}function R(e){return{type:"UNAUTHENTICATE_WITH_ERROR",message:e}}function S(e){return{type:"AUTHENTICATION_ERROR",message:e}}function A(e){return Object(T.a)(e).sub}var _=n(12);function C(){var e=Object(_.a)(["\n  width: 100%;\n  color: white;\n  background-color: ",";\n  border-radius: 2px;\n"]);return C=function(){return e},e}var j=Object(o.b)(m.a)(C(),(function(e){var t=e.theme,n=e.severity;return t.palette[n].main}));function N(e){var t=e.children,n=e.severity;return a.a.createElement(j,{padding:1,severity:n},t)}var I=Object(u.b)((function(e){return{error:e.authentication.error,isRequestingAuthentication:e.authentication.isRequesting}}))((function(e){var t=e.dispatch,n=e.error,i=e.isRequestingAuthentication,c=Object(r.useState)(""),u=Object(f.a)(c,2),s=u[0],o=u[1],l=Object(r.useState)(""),b=Object(f.a)(l,2),T=b[0],R=b[1];return a.a.createElement(d.a,{maxWidth:"xs"},a.a.createElement(E.a,{variant:"h1",gutterBottom:!0},"Login"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement("form",{onSubmit:function(e){var n;t((n={name:s,token:T},function(e){e({type:"REQUEST_AUTHENTICATION"}),fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(){var t=Object(h.a)(y.a.mark((function t(n){var r,a,i;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.ok){t.next=9;break}return t.next=3,n.json();case 3:r=t.sent,a=r.jwt,i=A(r.jwt),e(O(a,i)),t.next=10;break;case 9:e(S("Authentication failed"));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(){return e(S("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(m.a,{marginBottom:1},a.a.createElement(p.a,{variant:"outlined",label:"Player name",id:"name",value:s,onChange:function(e){o(e.target.value)},type:"text",name:"name",fullWidth:!0,margin:"dense",size:"medium",required:!0,autoFocus:!0}),a.a.createElement(p.a,{variant:"outlined",label:"Access token",id:"token",value:T,onChange:function(e){R(e.target.value)},type:"password",name:"token",fullWidth:!0,margin:"dense",size:"medium",required:!0})),a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:i?"outlined":"contained",disabled:i,color:"secondary",type:"submit"},i?a.a.createElement(v.a,{size:25,color:"secondary"}):"Log in"))),n&&a.a.createElement(N,{severity:"error"},a.a.createElement(E.a,{variant:"body1"},n)))})),w=n(15),k=n(152),L=n(157);function D(e){return{type:"SET_OUT_PLAYERS",outPlayers:e}}function M(e){return{type:"SET_IS_IN_GAME",isInGame:e}}function U(e){return e.next({name:w.MessageName.START_GAME})}function B(e,t){return e.next({name:w.MessageName.PLAY_CARDS,data:t})}function x(e,t){return e.next({name:w.MessageName.AUTHENTICATE,data:t})}var P=n(148),Y=n(149),G=n(145);function W(e){var t=e.playerIds.map((function(e){return a.a.createElement(P.a,{key:e},a.a.createElement(Y.a,null,e))}));return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(G.a,null,t))}var H=Object(u.b)((function(e){return{playerIds:e.lobby.players}}))((function(e){var t=e.playerIds,n=e.startGame;return a.a.createElement("div",null,a.a.createElement(W,{playerIds:t}),a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:"contained",color:"secondary",onClick:n},"Start Game"))})),q=n(10),z=n(25),F=n(85),K=n(115);function Q(){var e=Object(_.a)(["\n  width: 100%;\n"]);return Q=function(){return e},e}function J(){var e=Object(_.a)(["\n  border-color: ",";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 6%;\n  margin: auto;\n  width: ",";\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n"]);return J=function(){return e},e}var V=Object(o.b)(K.a)(J(),(function(e){var t=e.selected,n=e.theme;return t?"".concat(n.palette.primary.main):"transparent"}),(function(e){return"small"===e.size?"4.5rem":"5.5rem"}),(function(e){return e.theme.breakpoints.values.sm}),(function(e){return"small"===e.size?"5rem":"6rem"}),(function(e){return e.theme.breakpoints.values.md}),(function(e){return"small"===e.size?"5.5rem":"6.5rem"})),X=o.b.img(Q());function $(e){return e.kind===w.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function Z(e){var t=e.card,n=t.color.toLowerCase();return a.a.createElement(X,{src:"/agurk-client/images/joker.svg",alt:"joker of rank ".concat(t.rank," and color ").concat(n)})}function ee(e){var t=e.card,n=t.suit.toLowerCase(),r="/agurk-client/images/".concat(t.rank,"-").concat(n,".svg");return a.a.createElement(X,{src:r,alt:"card of rank ".concat(t.rank," and suit ").concat(n)})}function te(e){var t=e.size,n=void 0===t?"normal":t;return a.a.createElement(V,{elevation:6,size:n},a.a.createElement(X,{src:"/agurk-client/images/placeholder.svg",alt:"card placeholder"}))}function ne(e){var t=e.card,n=e.isSelected,r=void 0!==n&&n,i=e.size,c=void 0===i?"normal":i;return a.a.createElement(V,{elevation:6,selected:r,size:c},t.kind===w.JOKER_CARD_KIND?a.a.createElement(Z,{card:t}):a.a.createElement(ee,{card:t}))}function re(){var e=Object(_.a)(["\n  margin-right: -3.25rem;\n\n  @media(min-width: ","px) {\n    margin-right: -2.5rem;\n  }\n"]);return re=function(){return e},e}function ae(){var e=Object(_.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 3.25rem);\n\n @media(min-width: ","px) {\n    width: calc(100% - 2.5rem);\n  }\n"]);return ae=function(){return e},e}var ie=Object(o.b)(m.a)(ae(),(function(e){return e.theme.breakpoints.values.sm})),ce=Object(o.b)(m.a)(re(),(function(e){return e.theme.breakpoints.values.sm}));function ue(e,t){return Math.sign(e.rank-t.rank)}function se(e){var t=e.cards,n=e.handleSelect,r=Object(z.a)(t).sort(ue).map((function(e){return a.a.createElement(ce,{key:$(e),marginBottom:1},a.a.createElement(F.a,{onClick:function(){return n(e)}},a.a.createElement(ne,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(ie,{marginBottom:1},r)}function oe(e){var t=e.handlePlayClick;return a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:"contained",color:"secondary",onClick:t},"Play cards")}function le(e){var t=e.playCards,n=e.cardsInHand,i=e.isServerRequestingCards,c=Object(r.useState)([]),u=Object(f.a)(c,2),s=u[0],o=u[1];return Object(r.useEffect)((function(){var e=n.map((function(e){return Object(q.a)({},e,{isSelected:!1})}));o(e)}),[n]),a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Your hand"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement(se,{cards:s,handleSelect:function(e){o(s.map((function(t){return Object(w.cardEquals)(t,e)?Object(q.a)({},t,{isSelected:!t.isSelected}):t})))}})),i&&a.a.createElement(oe,{handlePlayClick:function(){var e=s.filter((function(e){return e.isSelected}));t(e)}}))}var de=n(150),me=n(162),fe=n(165);function Ee(){var e=Object(_.a)(["\n  background-color: ",";\n  border-radius: 0.25rem;\n  font-size: ",";\n  padding: 0.15rem 0.25rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: white;\n  display: inline-block;\n"]);return Ee=function(){return e},e}var pe=o.b.span(Ee(),(function(e){var t=e.theme,n=e.severity;return t.palette[n].main}),(function(e){return e.theme.typography.caption.fontSize}));function ge(){var e=Object(_.a)(["\n  font-weight: normal;\n"]);return ge=function(){return e},e}function ve(){var e=Object(_.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return ve=function(){return e},e}function be(){var e=Object(_.a)(["\n  text-decoration-line: ",";\n"]);return be=function(){return e},e}function ye(){var e=Object(_.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return ye=function(){return e},e}var he=Object(o.c)(ye()),Te=o.b.span(be(),(function(e){return e.isOut?"line-through":"none"})),Oe=Object(o.b)(Te)(ve(),he),Re=Object(o.b)(Te)(ge());function Se(e){var t=e.player,n=t.penalties.reduce((function(e,t){return t.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,t.isServerRequestingCards?a.a.createElement(Oe,{isOut:t.isOut},t.id):a.a.createElement(Re,{isOut:t.isOut},t.id),a.a.createElement(pe,{severity:"warning"},"Penalty"," ",n))}function Ae(e,t){return Math.sign(e.order-t.order)}function _e(e){var t=e.players.filter((function(e){return!e.isOut})),n=Object(z.a)(t).sort(Ae),r=n.findIndex((function(e){return e.isServerRequestingCards})),i=n.map((function(e){var t=r>e.order;return a.a.createElement(de.a,{active:e.isServerRequestingCards,completed:t,key:e.id},a.a.createElement(me.a,null,a.a.createElement(Se,{player:e})))}));return i.length?a.a.createElement(fe.a,{orientation:"vertical"},i):null}function Ce(e){var t=e.players.filter((function(e){return e.isOut})).map((function(e){return a.a.createElement(P.a,{key:e.id},a.a.createElement(Y.a,{secondary:e.outReason},a.a.createElement(Se,{player:e})))}));return t.length?a.a.createElement(G.a,null,t):null}function je(e){var t=e.players;return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(_e,{players:t}),a.a.createElement(Ce,{players:t}))}var Ne,Ie=n(151);function we(e){var t=e.timeoutInSeconds,n=Object(r.useState)(t),i=Object(f.a)(n,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){u(t)}),[t]),Object(r.useEffect)((function(){var e=setInterval((function(){return c-1<0?clearInterval(e):u((function(e){return e-1}))}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,c)}!function(e){e.START="START",e.END="END",e.BETWEEN_ROUNDS="BETWEEN_ROUNDS",e.BETWEEN_CYCLES="BETWEEN_CYCLES",e.BEFORE_CYCLE="BEFORE_CYCLE",e.IN_CYCLE="IN_CYCLE"}(Ne||(Ne={}));var ke={stage:Ne.START,validatedTurns:[],cardsInHand:[],isLastCycleOfRound:!1,turnTimeoutInMillis:void 0,turnRetriesLeft:0};function Le(){var e=Object(_.a)(["\n  font-weight: bold;\n"]);return Le=function(){return e},e}var De=Object(o.b)(E.a)(Le());function Me(e){var t=e.turnTimeoutInSeconds,n=e.turnRetriesLeft;return a.a.createElement(Ie.a,{container:!0,justify:"space-between",alignItems:"baseline"},a.a.createElement(E.a,{variant:"h2"},"Your turn"," "),t&&a.a.createElement(De,{variant:"subtitle1"},a.a.createElement(we,{timeoutInSeconds:t})," ","seconds and"," ",n," ",1===n?"retry left":"retries left"))}function Ue(e){var t=e.players.find((function(e){return e.isServerRequestingCards}));return a.a.createElement(E.a,{variant:"h2"},null===t||void 0===t?void 0:t.id,"'s turn")}function Be(e){var t=e.isServerRequestingCards,n=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;return t?a.a.createElement(Me,{turnTimeoutInSeconds:r,turnRetriesLeft:i}):a.a.createElement(Ue,{players:n})}function xe(e){var t=e.players.filter((function(e){return e.isCycleHighestTurnPlayer})).map((function(e){return e.id}));return 0===t.length?a.a.createElement(E.a,{variant:"h2"},"No cycle winner"):a.a.createElement(E.a,{variant:"h2"},t.join(" and ")," ",1===t.length?"wins the cycle":"win the cycle")}function Pe(e){var t=e.players.find((function(e){return e.isRoundWinner}));return a.a.createElement(E.a,{variant:"h2"},t?"".concat(t.id," wins the round"):"No round winner")}function Ye(e){var t=e.players.find((function(e){return e.isGameWinner}));return a.a.createElement(E.a,{variant:"h2"},t?"".concat(t.id," wins the game \ud83c\udf89\ud83c\udf89"):"No game winner")}function Ge(e){var t=e.isServerRequestingCards,n=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;switch(e.gameStage){case Ne.IN_CYCLE:return a.a.createElement(Be,{isServerRequestingCards:t,players:n,turnRetriesLeft:i,turnTimeoutInSeconds:r});case Ne.BETWEEN_CYCLES:return a.a.createElement(xe,{players:n});case Ne.BETWEEN_ROUNDS:return a.a.createElement(Pe,{players:n});case Ne.END:return a.a.createElement(Ye,{players:n});default:return null}}var We=n(163);function He(){var e=Object(_.a)(["\n  max-width: ",";\n"]);return He=function(){return e},e}var qe=o.b.div(He(),(function(e){var t=e.cardCount;return"".concat(6*t,"rem")}));function ze(e){return e.playerId+e.valid}function Fe(e){return e.cards.map((function(e){return a.a.createElement(Ie.a,{item:!0,key:$(e)},a.a.createElement(ne,{size:"small",card:e}))}))}function Ke(e){var t=e.turn,n=Fe(t);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(Ie.a,{container:!0,spacing:1},n)),a.a.createElement(qe,{cardCount:n.length},a.a.createElement(We.a,{title:t.playerId},a.a.createElement(E.a,{variant:"body1",align:"center",noWrap:!0},t.playerId))))}function Qe(e){var t=e.turn,n=Fe(t);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(Ie.a,{container:!0,spacing:1},0===n.length?a.a.createElement(te,{size:"small"}):n)),a.a.createElement(E.a,{variant:"body1",align:"center"},t.playerId),a.a.createElement(E.a,{variant:"body1",align:"center"},a.a.createElement(pe,{severity:"error"},t.invalidReason)))}function Je(e){var t=e.turn;return a.a.createElement(m.a,null,t.valid?a.a.createElement(Ke,{turn:t}):a.a.createElement(Qe,{turn:t}))}function Ve(e){var t=e.turns.reduceRight((function(e,t){return void 0===e.find((function(e){return e.playerId===t.playerId}))?[t].concat(Object(z.a)(e)):e}),[]).map((function(e){return a.a.createElement(Ie.a,{item:!0,key:ze(e)},a.a.createElement(Je,{turn:e}))}));return a.a.createElement(Ie.a,{container:!0,spacing:2},t)}function Xe(){var e=Object(_.a)(["\n  text-align: center;\n"]);return Xe=function(){return e},e}var $e=o.b.div(Xe());function Ze(e,t){return Object(w.compareRanks)(e,t)>0?e:t}function et(e){var t=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),n=t.length>0?a.a.createElement(ne,{size:"small",card:t.reduce(Ze)}):a.a.createElement(te,{size:"small"});return a.a.createElement(m.a,null,a.a.createElement(m.a,{marginBottom:1},n),a.a.createElement($e,null,a.a.createElement(pe,{severity:"info"},"Highest card")))}var tt,nt=(tt=2e3,function(e){return function(t){var n=Object(r.useState)(!1),i=Object(f.a)(n,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){u(!1);var e=setTimeout((function(){return u(!0)}),tt);return function(){return clearTimeout(e)}}),[t]),c?null:a.a.createElement(e,t)}})(Je);function rt(e){var t=e.playedTurns,n=t[t.length-1];return n?n.valid?a.a.createElement(Je,{turn:n}):a.a.createElement(nt,{turn:n}):null}function at(e){var t=e.playedTurns;return a.a.createElement(Ie.a,{container:!0,spacing:4},a.a.createElement(Ie.a,{item:!0},a.a.createElement(et,{playedTurns:t})),a.a.createElement(Ie.a,{item:!0},a.a.createElement(rt,{playedTurns:t})))}function it(e){var t=e.playedTurns;return e.isLastCycleOfRound?a.a.createElement(Ve,{turns:t}):a.a.createElement(at,{playedTurns:t})}function ct(){var e=Object(_.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 6;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return ct=function(){return e},e}function ut(){var e=Object(_.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 4;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 2;\n  }\n"]);return ut=function(){return e},e}function st(){var e=Object(_.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 3;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return st=function(){return e},e}function ot(){var e=Object(_.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 2;\n  grid-row-end: span 1;\n  min-height: 25vh;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 2;\n    grid-row-end: span 1;\n  }\n"]);return ot=function(){return e},e}function lt(){var e=Object(_.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 1;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 1;\n  }\n"]);return lt=function(){return e},e}function dt(){var e=Object(_.a)(["\n  display: grid;\n  row-gap: ","px;\n  margin-bottom: ","px;\n\n  @media(min-width: ","px) {\n    grid-template-columns: 30% 65%;\n    grid-template-rows: auto auto auto;\n    column-gap: 5%;\n    row-gap: 2em;\n  }\n"]);return dt=function(){return e},e}function mt(){var e=Object(_.a)(["\n  display: flex;\n  justify-content: center;\n"]);return mt=function(){return e},e}var ft=o.b.div(mt()),Et=o.b.div(dt(),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.breakpoints.values.md})),pt=Object(o.b)(m.a)(lt(),(function(e){return e.theme.breakpoints.values.md})),gt=Object(o.b)(m.a)(ot(),(function(e){return e.theme.breakpoints.values.md})),vt=Object(o.b)(m.a)(st(),(function(e){return e.theme.breakpoints.values.md})),bt=Object(o.b)(m.a)(ut(),(function(e){return e.theme.breakpoints.values.md})),yt=Object(o.b)(m.a)(ct(),(function(e){return e.theme.breakpoints.values.md}));var ht=Object(u.b)((function(e,t){return{state:{cardsInHand:e.game.state.cardsInHand,players:e.game.players,stage:e.game.state.stage,playedTurns:e.game.state.validatedTurns,playerState:e.game.players.find((function(e){return e.id===t.playerId})),playCards:function(e){return t.serverApi.sendPlayCards(e)},isLastCycleOfRound:e.game.state.isLastCycleOfRound,turnTimeoutInSeconds:e.game.state.turnTimeoutInMillis?e.game.state.turnTimeoutInMillis/1e3:void 0,turnRetriesLeft:e.game.state.turnRetriesLeft},playCards:function(e){return t.serverApi.sendPlayCards(e)}}}),(function(e){return{closeGame:function(){e({type:"RESET_GAME"}),e(M(!1))}}}))((function(e){var t=e.state,n=e.playCards,i=e.closeGame;return Object(r.useEffect)((function(){return i}),[i]),t.playerState?a.a.createElement(Et,null,a.a.createElement(pt,null,a.a.createElement(Ge,{gameStage:t.stage,isServerRequestingCards:t.playerState.isServerRequestingCards,players:t.players,turnTimeoutInSeconds:t.turnTimeoutInSeconds,turnRetriesLeft:t.turnRetriesLeft})),a.a.createElement(gt,null,a.a.createElement(it,{playedTurns:t.playedTurns,isLastCycleOfRound:t.isLastCycleOfRound})),a.a.createElement(vt,null,a.a.createElement(le,{isServerRequestingCards:t.playerState.isServerRequestingCards,cardsInHand:t.cardsInHand,playCards:n})),a.a.createElement(bt,null,a.a.createElement(je,{players:t.players})),t.stage===Ne.END&&a.a.createElement(yt,null,a.a.createElement(g.a,{fullWidth:!0,variant:"contained",color:"secondary",onClick:i},"Return to lobby"))):a.a.createElement(ft,null,a.a.createElement(v.a,null))}));function Tt(e,t,n){e.pipe(Object(k.a)((function(e){return e.name===w.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:x.bind(null,e)}})(e).sendAuthenticate(t)}),(function(){return n(R("Could not authenticate with the game server. Try to login again..."))}))}function Ot(e,t){e.subscribe((function(e){return function(e,t){switch(e.name){case w.MessageName.BROADCAST_LOBBY_PLAYERS:return t({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case w.MessageName.BROADCAST_START_GAME:return t(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players)),t(M(!0));case w.MessageName.BROADCAST_END_GAME:return e.data.isValid?t({type:"END_GAME_SUCCESS",winner:e.data.winner}):t({type:"END_GAME_ERROR",errorMessage:e.data.errorMessage});case w.MessageName.BROADCAST_START_ROUND:return t(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case w.MessageName.BROADCAST_END_ROUND:return t(D(e.data.outPlayers)),t(function(e,t){return{type:"END_ROUND",winner:e,penalties:t}}(e.data.winner,e.data.penalties));case w.MessageName.BROADCAST_START_CYCLE:return t((a=e.data.orderedPlayers,i=e.data.isLastOfRound,{type:"START_CYCLE",orderedPlayerIds:a,isLastOfRound:i}));case w.MessageName.BROADCAST_END_CYCLE:return t(D(e.data.outPlayers)),t({type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers});case w.MessageName.BROADCAST_PLAYER_TURN:return t({type:"ADD_PLAYER_TURN",turn:e.data});case w.MessageName.AVAILABLE_CARDS_IN_HAND:return t({type:"SET_CARDS_IN_HAND",cards:e.data});case w.MessageName.REQUEST_CARDS:return t((n=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:n,turnRetriesLeft:r}));case w.MessageName.BROADCAST_START_PLAYER_TURN:return t({type:"START_PLAYER_TURN",playerId:e.data});case w.MessageName.BROADCAST_OUT_PLAYER_AFTER_TURN:return t(D([e.data]))}var n,r,a,i}(e,t)}),(function(){return t(R("Could not contact the game server. Try again later..."))}))}var Rt=Object(u.b)((function(e){return{authenticatedSubject:e.authentication.subject,isInGame:e.lobby.isInGame,authenticationToken:e.authentication.token}}))((function(e){var t=e.dispatch,n=e.authenticationToken,i=e.isInGame,c=e.authenticatedSubject,u=Object(L.a)({url:"wss://agurk-server.herokuapp.com",closeObserver:{next:function(e){return t(R(e.reason))}}}),s=Object(r.useState)(u),o=Object(f.a)(s,1)[0],l=function(e){return{sendStartGame:U.bind(null,e),sendPlayCards:B.bind(null,e)}}(o);return Object(r.useEffect)((function(){return Ot(o,t),function(){return o.complete()}}),[o,t]),Object(r.useEffect)((function(){return Tt(o,n,t),function(){return o.complete()}}),[o,t,n]),a.a.createElement(a.a.Fragment,null,i?a.a.createElement(ht,{playerId:c,serverApi:l}):a.a.createElement(H,{startGame:l.sendStartGame}))})),St=n(153),At=n(154);function _t(){return a.a.createElement("header",null,a.a.createElement(St.a,{position:"static"},a.a.createElement(At.a,null,a.a.createElement(g.a,{color:"inherit",href:"./"},a.a.createElement(E.a,{variant:"h5"},"Agurk")),a.a.createElement(g.a,{color:"inherit",target:"_blank",href:"https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"},a.a.createElement(E.a,{variant:"body1"},"Rules")))))}var Ct=Object(u.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var t=e.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(_t,null),a.a.createElement("main",null,a.a.createElement(d.a,{maxWidth:"md"},a.a.createElement(m.a,{paddingTop:2},t?a.a.createElement(Rt,null):a.a.createElement(I,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(111),n(112);var jt=n(81),Nt=n(164),It=Object(jt.a)({typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2.25rem"},h3:{fontSize:"1.75rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.25rem"},h6:{fontSize:"1rem"}},palette:{primary:{light:"#48a999",main:"#00695c",dark:"#004c40",contrastText:"#fff"},secondary:{light:"#9162e4",main:"#5e35b1",dark:"#280680",contrastText:"#fff"},error:{light:"#ff5131",main:"#d50000",dark:"#9b0000",contrastText:"#fff"},warning:{light:"#ff7539",main:"#ff3d00",dark:"#c30000",contrastText:"#000"},info:{light:"#48a999",main:"#00695c",dark:"#004c40",contrastText:"#fff"},success:{light:"#5efc82",main:"#00c853",dark:"#009624",contrastText:"#000"}}}),wt=Object(Nt.a)(It),kt=n(32),Lt=n(79),Dt=n(80),Mt={subject:"",isAuthenticated:!1,isRequesting:!1,token:"",error:void 0},Ut=Number.MAX_SAFE_INTEGER;function Bt(e,t){return e.filter((function(e){return e.playerId===t}))}function xt(e,t){return e.some((function(e){return e===t}))}function Pt(e,t){return!!e.find((function(e){return e.id===t.id}))||t.isOut}function Yt(e,t){var n=e.find((function(e){return e.id===t.id}));return n?n.reason:t.outReason}function Gt(e,t){var n=e.findIndex((function(e){return e===t.id}));return-1===n?Ut:n}var Wt=[],Ht={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1,order:Ut},qt=Object(kt.combineReducers)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OUT_PLAYERS":return e.map((function(e){return Object(q.a)({},e,{isOut:Pt(t.outPlayers,e),outReason:Yt(t.outPlayers,e)})}));case"START_GAME":return t.playerIds.map((function(e){return Object(q.a)({},Ht,{id:e})}));case"END_GAME_SUCCESS":return e.map((function(e){return Object(q.a)({},e,{isGameWinner:e.id===t.winner})}));case"RESET_GAME":return Wt;case"ADD_PLAYER_TURN":return e.map((function(e){return Object(q.a)({},e,{isServerRequestingCards:t.turn.playerId!==e.id&&e.isServerRequestingCards})}));case"END_ROUND":return e.map((function(e){return Object(q.a)({},e,{penalties:[].concat(Object(z.a)(e.penalties),Object(z.a)(Bt(t.penalties,e.id))),isRoundWinner:e.id===t.winner})}));case"START_CYCLE":return e.map((function(e){return Object(q.a)({},e,{order:Gt(t.orderedPlayerIds,e)})}));case"END_CYCLE":return e.map((function(e){return Object(q.a)({},e,{isCycleHighestTurnPlayer:xt(t.highestTurnPlayerIds,e.id)})}));case"START_PLAYER_TURN":return e.map((function(e){return Object(q.a)({},e,{isServerRequestingCards:t.playerId===e.id})}));default:return e}},state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_OUT_PLAYERS":return e;case"START_GAME":return Object(q.a)({},e,{stage:Ne.START});case"END_GAME_SUCCESS":return Object(q.a)({},e,{stage:Ne.END});case"RESET_GAME":return ke;case"END_GAME_ERROR":return Object(q.a)({},e,{stage:Ne.END});case"SET_CARDS_IN_HAND":return Object(q.a)({},e,{cardsInHand:t.cards});case"ADD_PLAYER_TURN":return Object(q.a)({},e,{validatedTurns:[].concat(Object(z.a)(e.validatedTurns),[t.turn])});case"START_ROUND":return Object(q.a)({},e,{stage:Ne.BEFORE_CYCLE});case"END_ROUND":return Object(q.a)({},e,{stage:Ne.BETWEEN_ROUNDS});case"START_CYCLE":return Object(q.a)({},e,{stage:Ne.IN_CYCLE,validatedTurns:[],isLastCycleOfRound:t.isLastOfRound});case"END_CYCLE":return Object(q.a)({},e,{stage:e.isLastCycleOfRound?Ne.BETWEEN_ROUNDS:Ne.BETWEEN_CYCLES});case"REQUEST_CARDS":return Object(q.a)({},e,{turnTimeoutInMillis:t.turnTimeoutInMillis,turnRetriesLeft:t.turnRetriesLeft});default:return e}}}),zt={players:[],isInGame:!1},Ft=Object(kt.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTHENTICATE_WITH_TOKEN":return Object(q.a)({},e,{subject:t.subject,isAuthenticated:!0,token:t.token,isRequesting:!1,error:void 0});case"AUTHENTICATION_ERROR":return Object(q.a)({},e,{error:t.message,isRequesting:!1});case"UNAUTHENTICATE_WITH_ERROR":return Object(q.a)({},e,{},Mt,{error:t.message});case"REQUEST_AUTHENTICATION":return Object(q.a)({},e,{isRequesting:!0});default:return e}},game:qt,lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOBBY_PLAYERS":return Object(q.a)({},e,{players:t.playerIds});case"SET_IS_IN_GAME":return Object(q.a)({},e,{isInGame:t.isInGame});default:return e}}}),Kt=Object(kt.createStore)(Ft,Object(Lt.composeWithDevTools)(Object(kt.applyMiddleware)(Dt.a)));c.a.render(a.a.createElement(u.a,{store:Kt},a.a.createElement(l.a,{theme:wt},a.a.createElement(o.a,{theme:wt},a.a.createElement(s.b,{injectFirst:!0},a.a.createElement(Ct,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,n){e.exports=n(113)}},[[97,1,2]]]);
//# sourceMappingURL=main.b527c199.chunk.js.map