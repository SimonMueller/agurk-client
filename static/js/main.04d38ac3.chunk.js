(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(19),u=t.n(c),i=t(10),o=t(12),l=t(24),s=t(25),d=t(1),m=t(2),f=t(11);function E(){var e=Object(m.a)(["\n  display: inline-block;\n  font-size: 1em;\n  height: 3em;\n  padding: 0.75em;\n  width: 100%;\n  background-color: transparent;\n  border: 2px solid ",";\n  font-weight: bold;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    cursor: pointer;\n  }\n"]);return E=function(){return e},e}var p=d.b.button(E(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),b=t(21),v=t.n(b),y=t(29),g=t(30),O=t.n(g);function h(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function T(e){return{type:"UNAUTHENTICATE_WITH_ERROR",message:e}}function j(e){return{type:"AUTHENTICATION_ERROR",message:e}}function R(e){return O()(e).sub}function S(){var e=Object(m.a)(["\n  background-color: ",";\n  padding: 0.5em;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n"]);return S=function(){return e},e}function A(){var e=Object(m.a)(["\n  margin-bottom: 1em;\n"]);return A=function(){return e},e}function C(){var e=Object(m.a)(["\n  padding: 0.5em;\n  width: 100%;\n  height: 3em;\n  margin-bottom: 1em;\n  display: block;\n  font-size: 1em;\n"]);return C=function(){return e},e}function _(){var e=Object(m.a)(["\n  max-width: 500px;\n  margin: auto;\n"]);return _=function(){return e},e}var I=d.b.div(_()),N=d.b.input(C()),w=d.b.form(A()),k=d.b.div(S(),(function(e){return e.theme.colors.error}));var x=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,c=Object(r.useState)(""),u=Object(f.a)(c,2),i=u[0],o=u[1],l=Object(r.useState)(""),s=Object(f.a)(l,2),d=s[0],m=s[1];return a.a.createElement(I,null,a.a.createElement("h2",null,"Login"),a.a.createElement(w,{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(y.a)(v.a.mark((function n(t){var r,a,c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,c=R(r.jwt),e(h(a,c)),e({type:"SET_PLAYER_ID",playerId:c}),n.next=11;break;case 10:e(j("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(j("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement(N,{placeholder:"Player name",id:"name",value:i,onChange:function(e){o(e.currentTarget.value)},type:"text",name:"name",required:!0}),a.a.createElement(N,{placeholder:"Access token",id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),a.a.createElement(p,{type:"submit"},"Log in")),t&&a.a.createElement(k,null,t))})),D=t(5),L=t(53),P=t(54);function M(e){return e.next({name:D.MessageName.START_GAME})}function Y(e,n){return e.next({name:D.MessageName.PLAY_CARDS,data:n})}function U(e,n){return e.next({name:D.MessageName.AUTHENTICATE,data:n})}function B(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return B=function(){return e},e}var H=d.b.li(B());function G(e){var n=e.playerIds.map((function(e){return a.a.createElement(H,{key:e},e)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}var W=Object(i.b)((function(e){return{playerIds:e.lobby.players}}))((function(e){var n=e.playerIds,t=e.startGame;return a.a.createElement("div",null,a.a.createElement(G,{playerIds:n}),a.a.createElement(p,{type:"button",onClick:t},"Start Game"))})),q=t(3);function F(){var e=Object(m.a)(["\n  border: ",";\n"]);return F=function(){return e},e}function z(){var e=Object(m.a)(["\n  color: ",";\n  border: 1px solid;\n  border-radius: 4px;\n  width: max(4em, 4vmax);\n  height: max(6em, 6vmax);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n"]);return z=function(){return e},e}function J(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: max(0.6em, 0.6vmax);\n  margin: 0;\n"]);return J=function(){return e},e}function K(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: max(2.5em, 2.5vmax);\n  margin: 0;\n"]);return K=function(){return e},e}var Q=d.b.p(K()),V=d.b.p(J()),$=d.b.div(z(),(function(e){var n=e.isSelected,t=e.theme;return n?"".concat(t.colors.primary):" ".concat(t.colors.text)})),X=Object(d.b)($)(F(),(function(e){var n=e.theme;return"1px dotted ".concat(n.colors.text)}));function Z(e){return e.kind===D.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function ee(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null,"J"),a.a.createElement(V,null,n.color))}function ne(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null,n.rank),a.a.createElement(V,null,n.suit))}function te(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t;return a.a.createElement($,{isSelected:r},n.kind===D.JOKER_CARD_KIND?a.a.createElement(ee,{card:n}):a.a.createElement(ne,{card:n}))}function re(){return a.a.createElement(X,{isSelected:!1})}function ae(){var e=Object(m.a)(["\n  all: unset;\n  cursor: pointer;\n"]);return ae=function(){return e},e}function ce(){var e=Object(m.a)(["\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n"]);return ce=function(){return e},e}function ue(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n"]);return ue=function(){return e},e}var ie=d.b.div(ue()),oe=d.b.div(ce()),le=d.b.button(ae());function se(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(oe,{key:Z(e)},a.a.createElement(le,{onClick:function(){return t(e)}},a.a.createElement(te,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(ie,null,r)}function de(e){var n=e.handlePlayClick;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,{type:"button",onClick:n},"Play Cards"))}function me(e){var n=e.playCards,t=e.cardsInHand,c=e.isServerRequestingCards,u=Object(r.useState)([]),i=Object(f.a)(u,2),o=i[0],l=i[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(q.a)({},e,{isSelected:!1})}));l(e)}),[t]),a.a.createElement("div",null,a.a.createElement("h2",null,"Your hand"),a.a.createElement(se,{cards:o,handleSelect:function(e){l(o.map((function(n){return Object(D.cardEquals)(n,e)?Object(q.a)({},n,{isSelected:!n.isSelected}):n})))}}),c&&a.a.createElement(de,{handlePlayClick:function(){var e=o.filter((function(e){return e.isSelected}));n(e)}}))}function fe(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return fe=function(){return e},e}function Ee(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return Ee=function(){return e},e}function pe(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n"]);return pe=function(){return e},e}function be(){var e=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 0.25em;\n  font-size: 0.7em;\n  margin: 0 0.5em;\n  padding: 0.15em 0.25em;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return be=function(){return e},e}var ve=d.b.span(be()),ye=Object(d.b)(ve)(pe(),(function(e){return e.theme.colors.primary})),ge=Object(d.b)(ve)(Ee(),(function(e){return e.theme.colors.accent})),Oe=Object(d.b)(ve)(fe(),(function(e){return e.theme.colors.error}));function he(){var e=Object(m.a)(["\n  font-weight: normal;\n"]);return he=function(){return e},e}function Te(){var e=Object(m.a)(["\n  animation: "," 2s infinite;\n  font-weight: bold;\n"]);return Te=function(){return e},e}function je(){var e=Object(m.a)(["\n  text-decoration-line: ",";\n"]);return je=function(){return e},e}function Re(){var e=Object(m.a)(["\n  0% {\n    opacity: 0.6;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.6;\n  }\n"]);return Re=function(){return e},e}var Se=Object(d.c)(Re()),Ae=d.b.span(je(),(function(e){return e.isOut?"line-through":"none"})),Ce=Object(d.b)(Ae)(Te(),Se),_e=Object(d.b)(Ae)(he());function Ie(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,n.isServerRequestingCards?a.a.createElement(Ce,{isOut:n.isOut},n.id):a.a.createElement(_e,{isOut:n.isOut},n.id),a.a.createElement(ge,null,"Penalty"," ",t))}function Ne(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return Ne=function(){return e},e}var we=d.b.li(Ne());function ke(e){var n=e.players.map((function(e){return a.a.createElement(we,{key:e.id},a.a.createElement(Ie,{player:e}))}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement("ul",null,n))}function xe(){var e=Object(m.a)(["\n  margin-right: 1em;\n  margin-bottom: 1em;\n"]);return xe=function(){return e},e}function De(){var e=Object(m.a)(["\n  text-align: center;\n"]);return De=function(){return e},e}function Le(){var e=Object(m.a)(["\n  margin-right: 0.5em;\n  margin-bottom: 0.5em;\n"]);return Le=function(){return e},e}function Pe(){var e=Object(m.a)(["\n  color: ",";\n"]);return Pe=function(){return e},e}function Me(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Me=function(){return e},e}var Ye=d.b.div(Me()),Ue=Object(d.b)(Ye)(Pe(),(function(e){return e.theme.colors.muted})),Be=d.b.div(Le()),He=d.b.div(De()),Ge=d.b.div(xe());function We(e){return e.playerId+e.valid}function qe(e){var n=e.turn,t=n.cards.map((function(e){return a.a.createElement(Be,{key:Z(e)},a.a.createElement(te,{card:e}))}));return a.a.createElement(Ge,null,a.a.createElement(Ye,null,t),a.a.createElement(He,null,a.a.createElement("span",null,n.playerId)))}function Fe(e){var n=e.turn,t=Object(r.useState)(!0),c=Object(f.a)(t,2),u=c[0],i=c[1],o=n.cards.map((function(e){return a.a.createElement(Be,{key:Z(e)},a.a.createElement(te,{key:Z(e),card:e}))}));return Object(r.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){return clearTimeout(e)}})),u?a.a.createElement(Ge,null,a.a.createElement(Ue,null,0===o.length?a.a.createElement(re,null):o),a.a.createElement(He,null,a.a.createElement("span",null,n.playerId)),a.a.createElement(He,null,a.a.createElement(Oe,null,n.invalidReason))):null}function ze(e){var n=e.turn;return n.valid?a.a.createElement(qe,{turn:n}):a.a.createElement(Fe,{turn:n})}function Je(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Je=function(){return e},e}var Ke=d.b.div(Je());function Qe(e){var n=e.turns.map((function(e){return a.a.createElement(ze,{key:We(e),turn:e})}));return a.a.createElement(Ke,null,n)}function Ve(){var e=Object(m.a)(["\n  margin-bottom: 0.5em;\n"]);return Ve=function(){return e},e}function $e(){var e=Object(m.a)(["\n  text-align: center;\n"]);return $e=function(){return e},e}function Xe(){var e=Object(m.a)(["\n  margin-right: 1em;\n  margin-bottom: 1em;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Ze=function(){return e},e}var en=d.b.div(Ze()),nn=d.b.div(Xe()),tn=d.b.div($e()),rn=d.b.div(Ve());function an(e){var n=e.playedTurns.filter((function(e){return e.valid})).flatMap((function(e){return e.cards})),t=n.length>0?a.a.createElement(te,{card:n.reduce((function(e,n){return Object(D.compareRanks)(e,n)>0?e:n}))}):a.a.createElement(re,null);return a.a.createElement(nn,null,a.a.createElement(rn,null,t),a.a.createElement(tn,null,a.a.createElement(ye,null,"Highest card")))}function cn(e){var n=e.playedTurns;return a.a.createElement("div",null,a.a.createElement(en,null,a.a.createElement(nn,null,a.a.createElement(an,{playedTurns:n})),a.a.createElement(nn,null,a.a.createElement(Qe,{turns:n}))))}function un(){var e=Object(m.a)(["\n  overflow-y: auto;\n  max-height: 25vh;\n"]);return un=function(){return e},e}var on=d.b.ul(un());function ln(e){var n=e.entries.map((function(e){return a.a.createElement("li",null,e.message)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Protocol"),a.a.createElement(on,null,n))}var sn,dn=t(9);function mn(e,n){return e.filter((function(e){return e.playerId===n}))}function fn(e,n){return e.some((function(e){return e.id===n}))}function En(e,n){return e.some((function(e){return e===n}))}function pn(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(D.cardEquals)(e,n)}))}))}function bn(e){return{message:e}}function vn(e,n){return e.playerId===n&&e.valid}!function(e){e[e.START=0]="START",e[e.END=1]="END",e[e.BETWEEN_ROUNDS=2]="BETWEEN_ROUNDS",e[e.BETWEEN_CYCLES=3]="BETWEEN_CYCLES",e[e.BEFORE_CYCLE=4]="BEFORE_CYCLE",e[e.IN_CYCLE=5]="IN_CYCLE"}(sn||(sn={}));var yn={isRunning:!1,stage:sn.START,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],turnTimeoutInMillis:void 0,turnRetriesLeft:0,protocol:[]},gn={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};function On(e){var n=e.timeoutInSeconds,t=Object(r.useState)(n),c=Object(f.a)(t,2),u=c[0],i=c[1];return Object(r.useEffect)((function(){i(n)}),[n]),Object(r.useEffect)((function(){var e=setInterval((function(){return u-1<0?clearInterval(e):i(u-1)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement(a.a.Fragment,null,u)}function hn(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n"]);return hn=function(){return e},e}var Tn=d.b.div(hn());function jn(e){var n=e.turnTimeoutInSeconds,t=e.turnRetriesLeft;return a.a.createElement(Tn,null,a.a.createElement("h2",null,"Your turn"," "),a.a.createElement("p",null,a.a.createElement("b",null,a.a.createElement(On,{timeoutInSeconds:n})," ","seconds and"," ",t," ",1===t?"retry left":"retries left")))}function Rn(e){var n=e.players.find((function(e){return e.isServerRequestingCards}));return a.a.createElement("h2",null,null===n||void 0===n?void 0:n.id,"'s turn")}function Sn(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,c=e.turnRetriesLeft;return n?a.a.createElement(jn,{turnTimeoutInSeconds:r,turnRetriesLeft:c}):a.a.createElement(Rn,{players:t})}function An(e){var n=e.players.filter((function(e){return e.isCycleHighestTurnPlayer})).map((function(e){return e.id}));return a.a.createElement("h2",null,n.join(", ")," ","played the highest cards in cycle")}function Cn(e){var n=e.players.find((function(e){return e.isRoundWinner}));return a.a.createElement("h2",null,n?"".concat(n.id," wins the game"):"No round winner")}function _n(e){var n=e.players.find((function(e){return e.isGameWinner}));return a.a.createElement("h2",null,n?"".concat(n.id," wins the game"):"No game winner")}function In(e){var n=e.isServerRequestingCards,t=e.players,r=e.turnTimeoutInSeconds,c=e.turnRetriesLeft;switch(e.gameStage){case sn.IN_CYCLE:return a.a.createElement(Sn,{isServerRequestingCards:n,players:t,turnRetriesLeft:c,turnTimeoutInSeconds:r});case sn.BETWEEN_CYCLES:return a.a.createElement(An,{players:t});case sn.BETWEEN_ROUNDS:return a.a.createElement(Cn,{players:t});case sn.END:return a.a.createElement(_n,{players:t});default:return null}}function Nn(){var e=Object(m.a)(["\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: 300px;\n"]);return Nn=function(){return e},e}function wn(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return wn=function(){return e},e}var kn=d.b.div(wn()),xn=d.b.div(Nn());var Dn=Object(i.b)((function(e,n){return{state:{cardsInHand:e.game.cardsInHand,players:e.game.players,stage:e.game.stage,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},turnTimeoutInSeconds:e.game.turnTimeoutInMillis/1e3,turnRetriesLeft:e.game.turnRetriesLeft,protocolEntries:e.game.protocol},playCards:function(e){return n.serverApi.sendPlayCards(e)}}}),(function(e){return{reset:function(){return e({type:"RESET_GAME"})}}}))((function(e){var n=e.state,t=e.playCards,c=e.reset;return Object(r.useEffect)((function(){return c}),[c]),a.a.createElement("div",null,a.a.createElement(In,{gameStage:n.stage,isServerRequestingCards:n.playerState.isServerRequestingCards,players:n.players,turnTimeoutInSeconds:n.turnTimeoutInSeconds,turnRetriesLeft:n.turnRetriesLeft}),a.a.createElement(cn,{playedTurns:n.playedTurns}),a.a.createElement(me,{isServerRequestingCards:n.playerState.isServerRequestingCards,cardsInHand:n.cardsInHand,playCards:t}),a.a.createElement(kn,null,a.a.createElement(xn,null,a.a.createElement(ke,{players:n.players})),a.a.createElement(xn,null,a.a.createElement(ln,{entries:n.protocolEntries}))))}));function Ln(e,n,t){e.pipe(Object(L.a)((function(e){return e.name===D.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:U.bind(null,e)}})(e).sendAuthenticate(n)}),(function(){return t(T("Could not authenticate with the game server. Try to login again..."))}))}function Pn(e,n){e.subscribe((function(e){return function(e,n){switch(e.name){case D.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case D.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case D.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case D.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case D.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case D.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case D.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case D.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case D.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case D.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case D.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a}(e,n)}),(function(){return n(T("Could not contact the game server. Try again later..."))}))}var Mn=Object(i.b)((function(e){return{isGameRunning:e.game.isRunning,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,c=e.isGameRunning,u=Object(r.useState)(Object(P.a)("wss://agurk-server.herokuapp.com")),i=Object(f.a)(u,1)[0],o=function(e){return{sendStartGame:M.bind(null,e),sendPlayCards:Y.bind(null,e)}}(i);return Object(r.useEffect)((function(){return Pn(i,n),function(){return i.complete()}}),[i,n]),Object(r.useEffect)((function(){return Ln(i,t,n),function(){return i.complete()}}),[i,n,t]),a.a.createElement(a.a.Fragment,null,c?a.a.createElement(Dn,{serverApi:o}):a.a.createElement(W,{startGame:o.sendStartGame}))}));function Yn(){var e=Object(m.a)(["\n  color: ",";\n  text-decoration: none;\n\n  &:hover {\n    color: ",";\n    text-decoration: underline;\n  }\n"]);return Yn=function(){return e},e}function Un(){var e=Object(m.a)(["\n  margin-bottom: 2em;\n"]);return Un=function(){return e},e}function Bn(){var e=Object(m.a)(["\n  text-align: center;\n  margin-bottom: 2em;\n"]);return Bn=function(){return e},e}function Hn(){var e=Object(m.a)(["\n  display: inline-block;\n  text-decoration: none;\n"]);return Hn=function(){return e},e}function Gn(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Gn=function(){return e},e}function Wn(){var e=Object(m.a)(["\n  max-width: 800px;\n  margin: auto;\n  padding: 2em;\n"]);return Wn=function(){return e},e}function qn(){var e=Object(m.a)(["\n  color: white;\n  margin: 0;\n  text-align: center;\n  padding: 0.5em;\n  font-size: 1.5em;\n  font-weight: bold;\n"]);return qn=function(){return e},e}function Fn(){var e=Object(m.a)(["\n  background-color: ",";\n"]);return Fn=function(){return e},e}var zn=d.b.header(Fn(),(function(e){return e.theme.colors.primary})),Jn=d.b.h1(qn()),Kn=d.b.div(Wn()),Qn=d.b.a(Gn()),Vn=d.b.a(Hn()),$n=d.b.footer(Bn()),Xn=d.b.main(Un()),Zn=d.b.a(Yn(),(function(e){return e.theme.colors.muted}),(function(e){return e.theme.colors.text}));var et=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(a.a.Fragment,null,a.a.createElement(zn,null,a.a.createElement(Qn,null,a.a.createElement(Vn,{href:"/agurk-client"},a.a.createElement(Jn,null,"Agurk")))),a.a.createElement(Kn,null,a.a.createElement(Xn,null,n?a.a.createElement(Mn,null):a.a.createElement(x,null)),a.a.createElement($n,null,a.a.createElement(Zn,{target:"_blank",href:"https://github.com/SimonMueller/agurk-server/blob/master/README.md#rules"},"Read the rules"))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var nt={subject:"",isAuthenticated:!1,token:"",error:void 0},tt={players:[]},rt=Object(o.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(q.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(q.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(q.a)({},e,{},nt,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yn,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(q.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(q.a)({},e,{stage:sn.START,isRunning:!0,players:n.playerIds.map((function(e){return Object(q.a)({},gn,{id:e})}))});case"END_GAME_SUCCESS":return Object(q.a)({},e,{stage:sn.END,players:e.players.map((function(e){return Object(q.a)({},e,{isGameWinner:e.id===n.winner})})),protocol:[bn("".concat(n.winner," wins the game"))].concat(Object(dn.a)(e.protocol))});case"RESET_GAME":return Object(q.a)({},e,{players:e.players.map((function(e){return Object(q.a)({},e,{},gn)}))},yn,{playerId:e.playerId});case"END_GAME_ERROR":return Object(q.a)({},e,{stage:sn.END,protocol:[bn("".concat(n.error.message))].concat(Object(dn.a)(e.protocol))});case"SET_CARDS_IN_HAND":return Object(q.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(q.a)({},e,{validatedTurns:[].concat(Object(dn.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(q.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:vn(n.turn,e.playerId)?pn(e.cardsInHand,n.turn):e.cardsInHand,protocol:n.turn.valid?[bn("\n                ".concat(n.turn.playerId," plays\n                ").concat(n.turn.cards.length>1?"cards":"card","\n                with\n                ").concat(n.turn.cards.length>1?"ranks":"rank","\n                ").concat(n.turn.cards.map((function(e){return e.rank})).join(", ")))].concat(Object(dn.a)(e.protocol)):e.protocol});case"START_ROUND":return Object(q.a)({},e,{stage:sn.BEFORE_CYCLE});case"END_ROUND":return Object(q.a)({},e,{stage:sn.BETWEEN_ROUNDS,players:e.players.map((function(e){return Object(q.a)({},e,{penalties:[].concat(Object(dn.a)(e.penalties),Object(dn.a)(mn(n.penalties,e.id))),isOut:fn(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})})),protocol:[bn("".concat(n.winner," wins the current round"))].concat(Object(dn.a)(n.penalties.map((function(e){return bn("".concat(e.playerId," gets a penalty of ").concat(e.card.rank))}))),Object(dn.a)(n.outPlayers.map((function(e){return bn("".concat(e.id," is out because ").concat(e.reason))}))),Object(dn.a)(e.protocol))});case"START_CYCLE":return Object(q.a)({},e,{stage:sn.IN_CYCLE,validatedTurns:[]});case"END_CYCLE":return Object(q.a)({},e,{stage:sn.BETWEEN_CYCLES,players:e.players.map((function(e){return Object(q.a)({},e,{isCycleHighestTurnPlayer:En(n.highestTurnPlayerIds,e.id),isOut:fn(n.outPlayers,e.id)})})),protocol:[].concat(Object(dn.a)(n.highestTurnPlayerIds.map((function(e){return bn("".concat(e," played the highest card in cycle"))}))),Object(dn.a)(n.outPlayers.map((function(e){return bn("".concat(e.id," is out because ").concat(e.reason))}))),Object(dn.a)(e.protocol))});case"REQUEST_CARDS":return Object(q.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(q.a)({},e,{players:e.players.map((function(e){return Object(q.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(q.a)({},e,{players:n.playerIds});default:return e}}}),at=(t(49),{colors:{primary:"#006a4e",muted:"#737373",text:"#000",error:"#ff033e",accent:"#ff2400"}}),ct=Object(o.createStore)(rt,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(l.a)));u.a.render(a.a.createElement(i.a,{store:ct},a.a.createElement(d.a,{theme:at},a.a.createElement(et,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.04d38ac3.chunk.js.map