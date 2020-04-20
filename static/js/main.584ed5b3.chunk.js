(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{82:function(e,n,t){e.exports=t(99)},98:function(e,n,t){},99:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(12),u=t.n(i),c=t(22),o=t(142),l=t(8),s=t(139),d=t(129),m=t(143),f=t(24),E=t(53),p=t(140),g=t(132),v=t(55),y=t.n(v),b=t(61),h=t(62),O=t.n(h);function T(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function R(e){return{type:"UNAUTHENTICATE_WITH_ERROR",message:e}}function S(e){return{type:"AUTHENTICATION_ERROR",message:e}}function j(e){return O()(e).sub}var C=t(10);function A(){var e=Object(C.a)(["\n  width: 100%;\n  color: white;\n  background-color: ",";\n"]);return A=function(){return e},e}var _=Object(l.b)(m.a)(A(),(function(e){var n=e.theme,t=e.severity;return n.palette[t].main}));function I(e){var n=e.children,t=e.severity;return a.a.createElement(_,{padding:1,severity:t},n)}var N=Object(c.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,i=Object(r.useState)(""),u=Object(f.a)(i,2),c=u[0],o=u[1],l=Object(r.useState)(""),s=Object(f.a)(l,2),v=s[0],h=s[1];return a.a.createElement(d.a,{maxWidth:"sm"},a.a.createElement(E.a,{variant:"h1",gutterBottom:!0},"Login"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement("form",{onSubmit:function(e){var t;n((t={name:c,token:v},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(b.a)(y.a.mark((function n(t){var r,a,i;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,i=j(r.jwt),e(T(a,i)),e({type:"SET_PLAYER_ID",playerId:i}),n.next=11;break;case 10:e(S("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(S("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(m.a,{marginBottom:1},a.a.createElement(p.a,{variant:"outlined",label:"Player name",id:"name",value:c,onChange:function(e){o(e.target.value)},type:"text",name:"name",fullWidth:!0,margin:"dense",size:"medium",required:!0,autoFocus:!0}),a.a.createElement(p.a,{variant:"outlined",label:"Access token",id:"token",value:v,onChange:function(e){h(e.target.value)},type:"password",name:"token",fullWidth:!0,margin:"dense",size:"medium",required:!0})),a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",type:"submit"},"Log in"))),t&&a.a.createElement(I,{severity:"error"},a.a.createElement(E.a,{variant:"body1"},t)))})),w=t(11),k=t(136),L=t(141);function D(e){return{type:"SET_IS_IN_GAME",isInGame:e}}function B(e){return e.next({name:w.MessageName.START_GAME})}function P(e,n){return e.next({name:w.MessageName.PLAY_CARDS,data:n})}function M(e,n){return e.next({name:w.MessageName.AUTHENTICATE,data:n})}var Y=t(133),x=t(134),U=t(131);function G(e){var n=e.playerIds.map((function(e){return a.a.createElement(Y.a,{key:e},a.a.createElement(x.a,null,e))}));return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(U.a,null,n))}var H=Object(c.b)((function(e){return{playerIds:e.lobby.players}}))((function(e){var n=e.playerIds,t=e.startGame;return a.a.createElement("div",null,a.a.createElement(G,{playerIds:n}),a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",onClick:t},"Start Game"))})),W=t(6),z=t(73),q=t(102);function F(){var e=Object(C.a)(["\n  width: 100%;\n"]);return F=function(){return e},e}function K(){var e=Object(C.a)(["\n  border-color: ",";\n  border-width: 2px;\n  border-style: solid;\n  border-radius: 6%;\n  margin: auto;\n  width: ",";\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n\n  @media(min-width: ","px) {\n    width: ",";\n  }\n"]);return K=function(){return e},e}var J=Object(l.b)(q.a)(K(),(function(e){var n=e.selected,t=e.theme;return n?"".concat(t.palette.primary.main):"transparent"}),(function(e){return"small"===e.size?"4.5rem":"5.5rem"}),(function(e){return e.theme.breakpoints.values.sm}),(function(e){return"small"===e.size?"5rem":"6rem"}),(function(e){return e.theme.breakpoints.values.md}),(function(e){return"small"===e.size?"5.5rem":"6.5rem"})),Q=l.b.img(F());function V(e){return e.kind===w.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function $(e){var n=e.card.color.toLowerCase();return a.a.createElement(Q,{src:"/agurk-client/images/joker.svg",alt:"joker card of color ".concat(n)})}function X(e){var n=e.card,t=n.suit.toLowerCase(),r="/agurk-client/images/".concat(n.rank,"-").concat(t,".svg");return a.a.createElement(Q,{src:r,alt:"card of rank ".concat(n.rank," and suit ").concat(t)})}function Z(e){var n=e.size,t=void 0===n?"normal":n;return a.a.createElement(J,{elevation:6,size:t},a.a.createElement(Q,{src:"/agurk-client/images/placeholder.svg",alt:"card placeholder"}))}function ee(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t,i=e.size,u=void 0===i?"normal":i;return a.a.createElement(J,{elevation:6,selected:r,size:u},n.kind===w.JOKER_CARD_KIND?a.a.createElement($,{card:n}):a.a.createElement(X,{card:n}))}function ne(){var e=Object(C.a)(["\n  margin-right: -3.25rem;\n\n  @media(min-width: ","px) {\n    margin-right: -2.5rem;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(C.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% - 3.25rem);\n\n @media(min-width: ","px) {\n    width: calc(100% - 2.5rem);\n  }\n"]);return te=function(){return e},e}var re=Object(l.b)(m.a)(te(),(function(e){return e.theme.breakpoints.values.sm})),ae=Object(l.b)(m.a)(ne(),(function(e){return e.theme.breakpoints.values.sm}));function ie(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(ae,{key:V(e),marginBottom:1},a.a.createElement(z.a,{onClick:function(){return t(e)}},a.a.createElement(ee,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(re,{marginBottom:1},r)}function ue(e){var n=e.handlePlayClick;return a.a.createElement(g.a,{size:"large",fullWidth:!0,variant:"contained",color:"primary",onClick:n},"Play Cards")}function ce(e){var n=e.playCards,t=e.cardsInHand,i=e.isServerRequestingCards,u=Object(r.useState)([]),c=Object(f.a)(u,2),o=c[0],l=c[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(W.a)({},e,{isSelected:!1})}));l(e)}),[t]),a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Your hand"),a.a.createElement(m.a,{marginBottom:2},a.a.createElement(ie,{cards:o,handleSelect:function(e){l(o.map((function(n){return Object(w.cardEquals)(n,e)?Object(W.a)({},n,{isSelected:!n.isSelected}):n})))}})),i&&a.a.createElement(ue,{handlePlayClick:function(){var e=o.filter((function(e){return e.isSelected}));n(e)}}))}function oe(){var e=Object(C.a)(["\n  background-color: ",";\n  border-radius: 0.25rem;\n  font-size: ",";\n  margin: 0 ","px;\n  padding: 0.15rem 0.25rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: white;\n"]);return oe=function(){return e},e}var le=l.b.span(oe(),(function(e){var n=e.theme,t=e.severity;return n.palette[t].main}),(function(e){return e.theme.typography.caption.fontSize}),(function(e){return e.theme.spacing(1)}));function se(){var e=Object(C.a)(["\n  font-weight: normal;\n"]);return se=function(){return e},e}function de(){var e=Object(C.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return de=function(){return e},e}function me(){var e=Object(C.a)(["\n  text-decoration-line: ",";\n"]);return me=function(){return e},e}function fe(){var e=Object(C.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return fe=function(){return e},e}var Ee=Object(l.c)(fe()),pe=l.b.span(me(),(function(e){return e.isOut?"line-through":"none"})),ge=Object(l.b)(pe)(de(),Ee),ve=Object(l.b)(pe)(se());function ye(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,n.isServerRequestingCards?a.a.createElement(ge,{isOut:n.isOut},n.id):a.a.createElement(ve,{isOut:n.isOut},n.id),a.a.createElement(le,{severity:"warning"},"Penalty"," ",t))}function be(e,n){return Math.sign(e.order-n.order)}function he(e){var n=e.players.filter((function(e){return!e.isOut})).sort(be).map((function(e){return a.a.createElement(Y.a,{key:e.id},a.a.createElement(x.a,null,a.a.createElement(ye,{player:e})))}));return n.length?a.a.createElement(U.a,null,n):null}function Oe(e){var n=e.players.filter((function(e){return e.isOut})).map((function(e){return a.a.createElement(Y.a,{key:e.id},a.a.createElement(x.a,{secondary:e.outReason},a.a.createElement(ye,{player:e})))}));return n.length?a.a.createElement(U.a,null,n):null}function Te(e){var n=e.players;return a.a.createElement("div",null,a.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"Players"),a.a.createElement(he,{players:n}),a.a.createElement(Oe,{players:n}))}var Re,Se=t(44);function je(e,n){return e.filter((function(e){return e.playerId===n}))}function Ce(e,n){return e.some((function(e){return e.id===n}))}function Ae(e,n){return e.some((function(e){return e===n}))}function _e(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(w.cardEquals)(e,n)}))}))}function Ie(e,n){return e.playerId===n&&e.valid}function Ne(e,n){var t;return null===(t=e.find((function(e){return e.id===n})))||void 0===t?void 0:t.reason}function we(e,n){return e.findIndex((function(e){return e===n.id}))}!function(e){e[e.START=0]="START",e[e.END=1]="END",e[e.BETWEEN_ROUNDS=2]="BETWEEN_ROUNDS",e[e.BETWEEN_CYCLES=3]="BETWEEN_CYCLES",e[e.BEFORE_CYCLE=4]="BEFORE_CYCLE",e[e.IN_CYCLE=5]="IN_CYCLE"}(Re||(Re={}));var ke={stage:Re.START,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],isLastCycleOfRound:!1,turnTimeoutInMillis:void 0,turnRetriesLeft:0},Le={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1,order:-1},De=t(135);function Be(e){var n=e.timeoutInSeconds,t=Object(r.useState)(n),i=Object(f.a)(t,2),u=i[0],c=i[1];return Object(r.useEffect)((function(){c(n)}),[n]),Object(r.useEffect)((function(){var e=setInterval((function(){return u-1<0?clearInterval(e):c(u-1)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,u)}function Pe(){var e=Object(C.a)(["\n  font-weight: bold;\n"]);return Pe=function(){return e},e}var Me=Object(l.b)(E.a)(Pe());function Ye(e){var n=e.turnTimeoutInSeconds,t=e.turnRetriesLeft;return a.a.createElement(De.a,{container:!0,justify:"space-between",alignItems:"baseline"},a.a.createElement(E.a,{variant:"h2"},"Your turn"," "),n&&a.a.createElement(Me,{variant:"subtitle1"},a.a.createElement(Be,{timeoutInSeconds:n})," ","seconds and"," ",t," ",1===t?"retry left":"retries left"))}function xe(e){var n=e.players.find((function(e){return e.isServerRequestingCards}));return a.a.createElement(E.a,{variant:"h2"},null===n||void 0===n?void 0:n.id,"'s turn")}function Ue(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;return n?a.a.createElement(Ye,{turnTimeoutInSeconds:r,turnRetriesLeft:i}):a.a.createElement(xe,{players:t})}function Ge(e){var n=e.players.filter((function(e){return e.isCycleHighestTurnPlayer})).map((function(e){return e.id}));return 0===n.length?a.a.createElement("h2",null,"No cycle winner"):a.a.createElement(E.a,{variant:"h2"},n.join(" and ")," ",1===n.length?"wins the cycle":"win the cycle")}function He(e){var n=e.players.find((function(e){return e.isRoundWinner}));return a.a.createElement(E.a,{variant:"h2"},n?"".concat(n.id," wins the round"):"No round winner")}function We(e){var n=e.players.find((function(e){return e.isGameWinner}));return a.a.createElement(E.a,{variant:"h2"},n?"".concat(n.id," wins the game \ud83c\udf89\ud83c\udf89"):"No game winner")}function ze(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,i=e.turnRetriesLeft;switch(e.gameStage){case Re.IN_CYCLE:return a.a.createElement(Ue,{isServerRequestingCards:n,players:t,turnRetriesLeft:i,turnTimeoutInSeconds:r});case Re.BETWEEN_CYCLES:return a.a.createElement(Ge,{players:t});case Re.BETWEEN_ROUNDS:return a.a.createElement(He,{players:t});case Re.END:return a.a.createElement(We,{players:t});default:return null}}function qe(){var e=Object(C.a)(["\n  text-align: center;\n"]);return qe=function(){return e},e}var Fe=l.b.div(qe());function Ke(e){return e.playerId+e.valid}function Je(e){return e.cards.map((function(e){return a.a.createElement(m.a,{marginRight:1,key:V(e)},a.a.createElement(ee,{size:"small",card:e}))}))}function Qe(e){var n=e.turn,t=Je(n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(De.a,{container:!0,justify:"center"},t)),a.a.createElement(Fe,null,a.a.createElement("span",null,n.playerId)))}function Ve(e){var n=e.turn,t=Je(n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{marginBottom:1},a.a.createElement(De.a,{container:!0,justify:"center"},0===t.length?a.a.createElement(Z,{size:"small"}):t)),a.a.createElement(Fe,null,a.a.createElement("span",null,n.playerId)),a.a.createElement(Fe,null,a.a.createElement(le,{severity:"error"},n.invalidReason)))}function $e(e){var n=e.turn;return a.a.createElement(m.a,null,n.valid?a.a.createElement(Qe,{turn:n}):a.a.createElement(Ve,{turn:n}))}function Xe(e){var n=e.turns.reduceRight((function(e,n){return void 0===e.find((function(e){return e.playerId===n.playerId}))?[n].concat(Object(Se.a)(e)):e}),[]).map((function(e){return a.a.createElement(m.a,{marginRight:1,marginBottom:1,key:Ke(e)},a.a.createElement($e,{turn:e}))}));return a.a.createElement(De.a,{container:!0},n)}function Ze(){var e=Object(C.a)(["\n  text-align: center;\n"]);return Ze=function(){return e},e}var en=l.b.div(Ze());function nn(e,n){return Object(w.compareRanks)(e,n)>0?e:n}function tn(e){var n=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),t=n.length>0?a.a.createElement(ee,{size:"small",card:n.reduce(nn)}):a.a.createElement(Z,{size:"small"});return a.a.createElement(m.a,null,a.a.createElement(m.a,{marginBottom:1},t),a.a.createElement(en,null,a.a.createElement(le,{severity:"info"},"Highest card")))}function rn(e){return e[e.length-1]}function an(e){var n=e.playedTurns,t=Object(r.useState)(void 0),i=Object(f.a)(t,2),u=i[0],c=i[1];return Object(r.useEffect)((function(){var e=rn(n);if(c(e),e&&!e.valid){var t=rn(n.filter((function(e){return e.valid}))),r=setTimeout((function(){c(t)}),2e3);return function(){return clearTimeout(r)}}}),[n]),u?a.a.createElement($e,{turn:u}):null}function un(e){var n=e.playedTurns;return a.a.createElement(De.a,{container:!0},a.a.createElement(m.a,{marginBottom:1,marginRight:2},a.a.createElement(tn,{playedTurns:n})),a.a.createElement(m.a,{marginBottom:1},a.a.createElement(an,{playedTurns:n})))}function cn(e){var n=e.playedTurns;return e.isLastCycleOfRound?a.a.createElement(Xe,{turns:n}):a.a.createElement(un,{playedTurns:n})}function on(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 6;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return on=function(){return e},e}function ln(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 4;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 1;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 2;\n  }\n"]);return ln=function(){return e},e}function sn(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 3;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 3;\n    grid-row-end: span 1;\n  }\n"]);return sn=function(){return e},e}function dn(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 2;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 2;\n    grid-row-end: span 1;\n  }\n"]);return dn=function(){return e},e}function mn(){var e=Object(C.a)(["\n  grid-column-start: 1;\n  grid-column-end: span 1;\n  grid-row-start: 1;\n  grid-row-end: span 1;\n\n  @media(min-width: ","px) {\n    grid-column-start: 2;\n    grid-column-end: span 1;\n    grid-row-start: 1;\n    grid-row-end: span 1;\n  }\n"]);return mn=function(){return e},e}function fn(){var e=Object(C.a)(["\n  display: grid;\n  row-gap: ","px;\n  margin-bottom: ","px;\n\n  @media(min-width: ","px) {\n    grid-template-columns: 30% 65%;\n    grid-template-rows: auto auto auto;\n    column-gap: 5%;\n    row-gap: 2em;\n  }\n"]);return fn=function(){return e},e}var En=l.b.div(fn(),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.spacing(2)}),(function(e){return e.theme.breakpoints.values.md})),pn=Object(l.b)(m.a)(mn(),(function(e){return e.theme.breakpoints.values.md})),gn=Object(l.b)(m.a)(dn(),(function(e){return e.theme.breakpoints.values.md})),vn=Object(l.b)(m.a)(sn(),(function(e){return e.theme.breakpoints.values.md})),yn=Object(l.b)(m.a)(ln(),(function(e){return e.theme.breakpoints.values.md})),bn=Object(l.b)(m.a)(on(),(function(e){return e.theme.breakpoints.values.md}));var hn=Object(c.b)((function(e,n){return{state:{cardsInHand:e.game.cardsInHand,players:e.game.players,stage:e.game.stage,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},isLastCycleOfRound:e.game.isLastCycleOfRound,turnTimeoutInSeconds:e.game.turnTimeoutInMillis?e.game.turnTimeoutInMillis/1e3:void 0,turnRetriesLeft:e.game.turnRetriesLeft},playCards:function(e){return n.serverApi.sendPlayCards(e)}}}),(function(e){return{closeGame:function(){e(D(!1))}}}))((function(e){var n=e.state,t=e.playCards,r=e.closeGame;return n.playerState?a.a.createElement(En,null,a.a.createElement(pn,null,a.a.createElement(ze,{gameStage:n.stage,isServerRequestingCards:n.playerState.isServerRequestingCards,players:n.players,turnTimeoutInSeconds:n.turnTimeoutInSeconds,turnRetriesLeft:n.turnRetriesLeft})),a.a.createElement(gn,null,a.a.createElement(cn,{playedTurns:n.playedTurns,isLastCycleOfRound:n.isLastCycleOfRound})),a.a.createElement(vn,null,a.a.createElement(ce,{isServerRequestingCards:n.playerState.isServerRequestingCards,cardsInHand:n.cardsInHand,playCards:t})),a.a.createElement(yn,null,a.a.createElement(Te,{players:n.players})),n.stage===Re.END&&a.a.createElement(bn,null,a.a.createElement(g.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:r},"Return to lobby"))):a.a.createElement("p",null,"Loading game...")}));function On(e,n,t){e.pipe(Object(k.a)((function(e){return e.name===w.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:M.bind(null,e)}})(e).sendAuthenticate(n)}),(function(){return t(R("Could not authenticate with the game server. Try to login again..."))}))}function Tn(e,n){e.subscribe((function(e){return function(e,n){switch(e.name){case w.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case w.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players)),n(D(!0));case w.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error});case w.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case w.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case w.MessageName.BROADCAST_START_CYCLE:return n((i=e.data.orderedPlayers,u=e.data.isLastOfRound,{type:"START_CYCLE",orderedPlayerIds:i,isLastOfRound:u}));case w.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case w.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case w.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case w.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case w.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a,i,u}(e,n)}),(function(){return n(R("Could not contact the game server. Try again later..."))}))}var Rn=Object(c.b)((function(e){return{isInGame:e.lobby.isInGame,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,i=e.isInGame,u=Object(L.a)({url:"wss://agurk-server.herokuapp.com",closeObserver:{next:function(e){return n(R(e.reason))}}}),c=Object(r.useState)(u),o=Object(f.a)(c,1)[0],l=function(e){return{sendStartGame:B.bind(null,e),sendPlayCards:P.bind(null,e)}}(o);return Object(r.useEffect)((function(){return Tn(o,n),function(){return o.complete()}}),[o,n]),Object(r.useEffect)((function(){return On(o,t,n),function(){return o.complete()}}),[o,n,t]),a.a.createElement(a.a.Fragment,null,i?a.a.createElement(hn,{serverApi:l}):a.a.createElement(H,{startGame:l.sendStartGame}))})),Sn=t(137),jn=t(138);function Cn(){return a.a.createElement("header",null,a.a.createElement(Sn.a,{position:"static"},a.a.createElement(jn.a,null,a.a.createElement(g.a,{color:"inherit",href:"./"},a.a.createElement(E.a,{variant:"h5"},"Agurk")),a.a.createElement(g.a,{color:"inherit",target:"_blank",href:"https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"},a.a.createElement(E.a,{variant:"body1"},"Rules")))))}var An=Object(c.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Cn,null),a.a.createElement("main",null,a.a.createElement(d.a,{maxWidth:"md"},a.a.createElement(m.a,{paddingTop:2},n?a.a.createElement(Rn,null):a.a.createElement(N,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(98);var _n=t(71),In=t(145),Nn=Object(_n.a)({typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2.25rem"},h3:{fontSize:"1.75rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.25rem"},h6:{fontSize:"1rem"}}}),wn=Object(In.a)(Nn),kn=t(29),Ln=t(69),Dn=t(70),Bn={subject:"",isAuthenticated:!1,token:"",error:void 0},Pn={players:[],isInGame:!1},Mn=Object(kn.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(W.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(W.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(W.a)({},e,{},Bn,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(W.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(W.a)({},e,{stage:Re.START,players:n.playerIds.map((function(e){return Object(W.a)({},Le,{id:e})}))});case"END_GAME_SUCCESS":return Object(W.a)({},e,{stage:Re.END,players:e.players.map((function(e){return Object(W.a)({},e,{isGameWinner:e.id===n.winner})}))});case"RESET_GAME":return Object(W.a)({},e,{players:e.players.map((function(e){return Object(W.a)({},e,{},Le)}))},ke,{playerId:e.playerId});case"END_GAME_ERROR":return Object(W.a)({},e,{stage:Re.END});case"SET_CARDS_IN_HAND":return Object(W.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(W.a)({},e,{validatedTurns:[].concat(Object(Se.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(W.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:Ie(n.turn,e.playerId)?_e(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return Object(W.a)({},e,{stage:Re.BEFORE_CYCLE});case"END_ROUND":return Object(W.a)({},e,{stage:Re.BETWEEN_ROUNDS,players:e.players.map((function(e){return Object(W.a)({},e,{penalties:[].concat(Object(Se.a)(e.penalties),Object(Se.a)(je(n.penalties,e.id))),isOut:Ce(n.outPlayers,e.id),isRoundWinner:e.id===n.winner,outReason:Ne(n.outPlayers,e.id)})}))});case"START_CYCLE":return Object(W.a)({},e,{players:e.players.map((function(e){return Object(W.a)({},e,{order:we(n.orderedPlayerIds,e)})})),stage:Re.IN_CYCLE,validatedTurns:[],isLastCycleOfRound:n.isLastOfRound});case"END_CYCLE":return Object(W.a)({},e,{stage:Re.BETWEEN_CYCLES,players:e.players.map((function(e){return Object(W.a)({},e,{isCycleHighestTurnPlayer:Ae(n.highestTurnPlayerIds,e.id),isOut:Ce(n.outPlayers,e.id),outReason:Ne(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return Object(W.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(W.a)({},e,{players:e.players.map((function(e){return Object(W.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(W.a)({},e,{players:n.playerIds});case"SET_IS_IN_GAME":return Object(W.a)({},e,{isInGame:n.isInGame});default:return e}}}),Yn=Object(kn.createStore)(Mn,Object(Ln.composeWithDevTools)(Object(kn.applyMiddleware)(Dn.a)));u.a.render(a.a.createElement(c.a,{store:Yn},a.a.createElement(s.a,{theme:wn},a.a.createElement(l.a,{theme:wn},a.a.createElement(o.b,{injectFirst:!0},a.a.createElement(An,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[82,1,2]]]);
//# sourceMappingURL=main.584ed5b3.chunk.js.map