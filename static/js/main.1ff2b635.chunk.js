(this["webpackJsonpagurk-client"]=this["webpackJsonpagurk-client"]||[]).push([[0],{32:function(e,n,t){e.exports=t(50)},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),u=t(18),c=t.n(u),i=t(10),l=t(11),o=t(24),s=t(25),d=t(1),m=t(2),f=t(9),p=t(5),b=t(53),E=t(54);function y(){var e=Object(m.a)(["\n  width: 100%;\n"]);return y=function(){return e},e}function v(){var e=Object(m.a)(["\n  display: inline-block;\n  padding: 0.5rem;\n  width: 10rem;\n  background-color: transparent;\n  border: 2px solid ",";\n  font-weight: bold;\n  color: ",";\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    cursor: pointer;\n  }\n"]);return v=function(){return e},e}var O=d.b.button(v(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),T=Object(d.b)(O)(y()),g=t(4);function R(){var e=Object(m.a)(["\n  outline: ",";\n  width: 4.5em;\n  height: 7em;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return e},e}function h(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 0.7em;\n  margin: 0;\n"]);return h=function(){return e},e}function A(){var e=Object(m.a)(["\n  font-weight: bold;\n  flex-basis: 100%;\n  text-align: center;\n  display: block;\n  font-size: 3em;\n  margin: 0;\n"]);return A=function(){return e},e}var j=d.b.p(A()),S=d.b.p(h()),_=d.b.div(R(),(function(e){var n=e.isSelected,t=e.theme;return n?"2px solid ".concat(t.colors.accent):"1px solid ".concat(t.colors.text)}));function I(e){return e.kind===p.JOKER_CARD_KIND?e.color+e.rank:e.suit+e.rank}function C(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,"J"),a.a.createElement(S,null,n.color))}function N(e){var n=e.card;return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,n.rank),a.a.createElement(S,null,n.suit))}function k(e){var n=e.card,t=e.isSelected,r=void 0!==t&&t;return a.a.createElement(_,{isSelected:r},n.kind===p.JOKER_CARD_KIND?a.a.createElement(C,{card:n}):a.a.createElement(N,{card:n}))}function w(){var e=Object(m.a)(["\n  all: unset;\n  cursor: pointer;\n"]);return w=function(){return e},e}function D(){var e=Object(m.a)(["\n  padding: 0.75em;\n"]);return D=function(){return e},e}function M(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n"]);return M=function(){return e},e}var L=d.b.div(M()),x=d.b.div(D()),P=d.b.button(w());function H(e){var n=e.cards,t=e.handleSelect,r=n.map((function(e){return a.a.createElement(x,{key:I(e)},a.a.createElement(P,{onClick:function(){return t(e)}},a.a.createElement(k,{card:e,isSelected:e.isSelected})))}));return a.a.createElement(L,null,r)}function U(e){var n=e.timeoutInMillis,t=Object(r.useState)(n),u=Object(f.a)(t,2),c=u[0],i=u[1],l=Math.floor(c/1e3);return Object(r.useEffect)((function(){var e=setInterval((function(){return c-1e3<0?clearInterval(e):i(c-1e3)}),1e3);return function(){return clearInterval(e)}})),a.a.createElement("span",null,"(",l,")")}function Y(){var e=Object(m.a)(["\n  color: ",";\n"]);return Y=function(){return e},e}function B(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return B=function(){return e},e}var G=d.b.div(B()),q=d.b.p(Y(),(function(e){return e.theme.colors.muted}));function F(e){var n=e.handlePlayClick,t=e.turnTimeoutInMillis,r=e.turnRetriesLeft;return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{type:"button",onClick:n},"Play Cards"," ",t&&a.a.createElement(U,{timeoutInMillis:t})),a.a.createElement(q,null,r," ",1===r?"Retry left":"Retries left"))}function W(e){var n=e.playCards,t=e.cardsInHand,u=e.isServerRequestingCards,c=e.turnTimeoutInMillis,i=e.turnRetriesLeft,l=Object(r.useState)([]),o=Object(f.a)(l,2),s=o[0],d=o[1];return Object(r.useEffect)((function(){var e=t.map((function(e){return Object(g.a)({},e,{isSelected:!1})}));d(e)}),[t]),a.a.createElement("div",null,a.a.createElement("h2",null,"Hand"),a.a.createElement(H,{cards:s,handleSelect:function(e){d(s.map((function(n){return Object(p.cardEquals)(n,e)?Object(g.a)({},n,{isSelected:!n.isSelected}):n})))}}),u&&a.a.createElement(G,null,a.a.createElement(F,{handlePlayClick:function(){var e=s.filter((function(e){return e.isSelected}));n(e)},turnTimeoutInMillis:c,turnRetriesLeft:i})))}function J(){var e=Object(m.a)(["\n  background-color: transparent;\n  border-radius: 0.2em;\n  font-size: 0.75em;\n  padding: 0.1rem 0.2rem;\n  font-weight: bold;\n"]);return J=function(){return e},e}var K=d.b.span(J());function Q(){var e=Object(m.a)(["\n  text-decoration-line: ",";\n"]);return Q=function(){return e},e}function z(){var e=Object(m.a)(["\n  background-color: rgba(227, 38, 54, 0.9);\n  color: white;\n"]);return z=function(){return e},e}var V=Object(d.b)(K)(z()),$=d.b.span(Q(),(function(e){return e.isOut?"line-through":"none"}));function X(e){var n=e.player,t=n.penalties.reduce((function(e,n){return n.card.rank+e}),0);return a.a.createElement(a.a.Fragment,null,a.a.createElement($,{isOut:n.isOut},n.isServerRequestingCards&&a.a.createElement("span",null,"--\x3e")," ",n.id," ",a.a.createElement(V,null,t)))}function Z(){var e=Object(m.a)(["\n  padding: 0;\n  list-style-type: none;\n"]);return Z=function(){return e},e}var ee=d.b.ul(Z());function ne(e){var n=e.players.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(X,{player:e}))}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement(ee,null,n))}function te(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  text-transform: uppercase;\n"]);return te=function(){return e},e}function re(){var e=Object(m.a)(["\n  background-color: ",";\n  color: white;\n  text-transform: uppercase;\n"]);return re=function(){return e},e}function ae(){var e=Object(m.a)(["\n  text-align: center;\n"]);return ae=function(){return e},e}function ue(){var e=Object(m.a)(["\n  padding: 1em;\n"]);return ue=function(){return e},e}function ce(){var e=Object(m.a)(["\n  color: ",";\n"]);return ce=function(){return e},e}function ie(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return ie=function(){return e},e}var le=d.b.div(ie()),oe=Object(d.b)(le)(ce(),(function(e){return e.theme.colors.muted})),se=d.b.div(ue()),de=d.b.p(ae()),me=Object(d.b)(K)(re(),(function(e){return e.theme.colors.error})),fe=Object(d.b)(K)(te(),(function(e){return e.theme.colors.success}));function pe(e){return e.playerId+e.valid}function be(e){var n=e.turn,t=n.cards.map((function(e){return a.a.createElement(se,{key:I(e)},a.a.createElement(k,{card:e}))}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(le,null,t),a.a.createElement(de,null,n.playerId),a.a.createElement(de,null,a.a.createElement(fe,null,"Valid turn")))}function Ee(e){var n=e.turn,t=Object(r.useState)(!0),u=Object(f.a)(t,2),c=u[0],i=u[1],l=n.cards.map((function(e){return a.a.createElement(se,{key:I(e)},a.a.createElement(k,{card:e}))}));return Object(r.useEffect)((function(){var e=setTimeout((function(){i(!1)}),2e3);return function(){return clearTimeout(e)}})),c?a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,null,l),a.a.createElement(de,null,n.playerId),a.a.createElement(de,null,a.a.createElement(me,null,n.invalidReason))):null}function ye(e){var n=e.turn;return a.a.createElement(a.a.Fragment,null,n.valid?a.a.createElement(be,{turn:n}):a.a.createElement(Ee,{turn:n}))}function ve(){var e=Object(m.a)(["\n  padding: 0 0.5em;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1em;\n"]);return Oe=function(){return e},e}var Te=d.b.div(Oe()),ge=d.b.div(ve());function Re(e){var n=e.turns.map((function(e){return a.a.createElement(ge,{key:pe(e)},a.a.createElement(ye,{turn:e}))}));return a.a.createElement(Te,null,n)}function he(e){var n=e.playedTurns;return a.a.createElement("div",null,a.a.createElement("h2",null,"Stack"),a.a.createElement(Re,{turns:n}))}var Ae=Object(i.b)((function(e,n){return{cardsInHand:e.game.cardsInHand,players:e.game.players,playedTurns:e.game.validatedTurns,playerState:e.game.players.find((function(n){return n.id===e.game.playerId})),playCards:function(e){return n.serverApi.sendPlayCards(e)},turnTimeoutInMillis:e.game.turnTimeoutInMillis,turnRetriesLeft:e.game.turnRetriesLeft}}))((function(e){var n=e.players,t=e.playedTurns,r=e.cardsInHand,u=e.playCards,c=e.playerState,i=e.turnTimeoutInMillis,l=e.turnRetriesLeft;return a.a.createElement("div",null,a.a.createElement(ne,{players:n}),a.a.createElement(he,{playedTurns:t}),a.a.createElement(W,{isServerRequestingCards:c.isServerRequestingCards,turnTimeoutInMillis:i,turnRetriesLeft:l,cardsInHand:r,playCards:u}))})),je=t(19);function Se(e,n){return e.filter((function(e){return e.playerId===n}))}function _e(e,n){return e.some((function(e){return e.id===n}))}function Ie(e,n){return e.some((function(e){return e===n}))}function Ce(e,n){return e.filter((function(e){return void 0===n.cards.find((function(n){return Object(p.cardEquals)(e,n)}))}))}var Ne={isRunning:!1,playerId:void 0,players:[],validatedTurns:[],cardsInHand:[],turnTimeoutInMillis:void 0,turnRetriesLeft:0},ke={isGameWinner:!1,isRoundWinner:!1,isCycleHighestTurnPlayer:!1,penalties:[],isOut:!1,isServerRequestingCards:!1};var we={players:[]};function De(e){return e.next({name:p.MessageName.START_GAME})}function Me(e,n){return e.next({name:p.MessageName.PLAY_CARDS,data:n})}function Le(e,n){return e.next({name:p.MessageName.AUTHENTICATE,data:n})}function xe(e){var n=e.playerIds.map((function(e){return a.a.createElement("li",{key:e},e)}));return a.a.createElement("div",null,a.a.createElement("h2",null,"Players"),a.a.createElement(ee,null,n))}var Pe=t(21),He=t.n(Pe),Ue=t(29),Ye=t(30),Be=t.n(Ye);function Ge(e,n){return{type:"AUTHENTICATE_WITH_TOKEN",token:e,subject:n}}function qe(e){return{type:"AUTHENTICATION_ERROR",message:e}}function Fe(e){return Be()(e).sub}var We={subject:"",isAuthenticated:!1,token:"",error:void 0};var Je=Object(i.b)((function(e){return{isGameStarted:e.game.isRunning,players:e.lobby.players,authenticationToken:e.authentication.token}}))((function(e){var n=e.dispatch,t=e.authenticationToken,u=e.isGameStarted,c=e.players,i=Object(r.useState)(Object(E.a)("wss://agurk-server.herokuapp.com")),l=Object(f.a)(i,1)[0],o=function(e){return{sendStartGame:De.bind(null,e),sendPlayCards:Me.bind(null,e)}}(l);return Object(r.useEffect)((function(){return l.subscribe((function(e){return function(e,n){switch(e.name){case p.MessageName.BROADCAST_LOBBY_PLAYERS:return n({type:"SET_LOBBY_PLAYERS",playerIds:e.data});case p.MessageName.BROADCAST_START_GAME:return n(function(e){return{type:"START_GAME",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_GAME:return e.data.isValid?n({type:"END_GAME_SUCCESS",winner:e.data.winner}):n({type:"END_GAME_ERROR",error:e.data.error}),n({type:"RESET_GAME"});case p.MessageName.BROADCAST_START_ROUND:return n(function(e){return{type:"START_ROUND",playerIds:e}}(e.data.players));case p.MessageName.BROADCAST_END_ROUND:return n(function(e,n,t){return{type:"END_ROUND",winner:e,penalties:n,outPlayers:t}}(e.data.winner,e.data.penalties,e.data.outPlayers));case p.MessageName.BROADCAST_START_CYCLE:return n({type:"START_CYCLE",orderedPlayerIds:e.data.orderedPlayers});case p.MessageName.BROADCAST_END_CYCLE:return n((a=e.data.outPlayers,{type:"END_CYCLE",highestTurnPlayerIds:e.data.highestTurnPlayers,outPlayers:a}));case p.MessageName.BROADCAST_PLAYER_TURN:return n({type:"ADD_PLAYER_TURN",turn:e.data});case p.MessageName.AVAILABLE_CARDS_IN_HAND:return n({type:"SET_CARDS_IN_HAND",cards:e.data});case p.MessageName.REQUEST_CARDS:return n((t=e.data.timeoutInMillis,r=e.data.retriesLeft,{type:"REQUEST_CARDS",turnTimeoutInMillis:t,turnRetriesLeft:r}));case p.MessageName.BROADCAST_START_PLAYER_TURN:return n({type:"START_PLAYER_TURN",playerId:e.data})}var t,r,a}(e,n)}),(function(){return n({type:"UNAUTHENTICATE_WITH_ERROR",message:"Could not contact the game server. Try again later..."})})),function(){return l.complete()}}),[l,n]),Object(r.useEffect)((function(){return l.pipe(Object(b.a)((function(e){return e.name===p.MessageName.REQUEST_AUTHENTICATION}))).subscribe((function(){(function(e){return{sendAuthenticate:Le.bind(null,e)}})(l).sendAuthenticate(t)})),function(){return l.complete()}}),[l,t]),a.a.createElement("div",{className:"Lobby"},u?a.a.createElement(Ae,{serverApi:o}):a.a.createElement(a.a.Fragment,null,a.a.createElement(xe,{playerIds:c}),a.a.createElement(O,{type:"button",onClick:o.sendStartGame},"Start Game")))}));function Ke(){var e=Object(m.a)(["\n  background-color: ",";\n  padding: 0.5rem;\n  width: 100%;\n  color: white;\n  font-weight: bold;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(m.a)(["\n  display: block;\n  font-style: italic;\n  margin-bottom: 0.25rem;\n"]);return Qe=function(){return e},e}function ze(){var e=Object(m.a)(["\n  padding: 0.5rem;\n  width: 100%;\n  margin-bottom: 1rem;\n  display: block;\n"]);return ze=function(){return e},e}var Ve=d.b.input(ze()),$e=d.b.label(Qe()),Xe=d.b.div(Ke(),(function(e){return e.theme.colors.error}));var Ze=Object(i.b)((function(e){return{error:e.authentication.error}}))((function(e){var n=e.dispatch,t=e.error,u=Object(r.useState)(""),c=Object(f.a)(u,2),i=c[0],l=c[1],o=Object(r.useState)(""),s=Object(f.a)(o,2),d=s[0],m=s[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Login"),a.a.createElement("form",{onSubmit:function(e){var t;n((t={name:i,token:d},function(e){fetch("".concat("https://agurk-server.herokuapp.com","/authenticate"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){var n=Object(Ue.a)(He.a.mark((function n(t){var r,a,u;return He.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.ok){n.next=10;break}return n.next=3,t.json();case 3:r=n.sent,a=r.jwt,u=Fe(r.jwt),e(Ge(a,u)),e({type:"SET_PLAYER_ID",playerId:u}),n.next=11;break;case 10:e(qe("Authentication failed"));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),(function(){return e(qe("Could not contact server. Try again later..."))}))})),e.preventDefault()}},a.a.createElement($e,{htmlFor:"name"},"Player name"),a.a.createElement(Ve,{id:"name",value:i,onChange:function(e){l(e.currentTarget.value)},type:"text",name:"name",required:!0}),a.a.createElement($e,{htmlFor:"name"},"Access token"),a.a.createElement(Ve,{id:"token",value:d,onChange:function(e){m(e.currentTarget.value)},type:"password",name:"token",required:!0}),a.a.createElement(T,{type:"submit"},"Log in")),a.a.createElement("br",null),t&&a.a.createElement(Xe,null,t))}));function en(){var e=Object(m.a)(["\n  max-width: 50rem;\n  margin: auto;\n  padding: 2rem;\n"]);return en=function(){return e},e}var nn=d.b.div(en());var tn=Object(i.b)((function(e){return{isAuthenticated:e.authentication.isAuthenticated}}))((function(e){var n=e.isAuthenticated;return a.a.createElement(nn,{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Agurk")),a.a.createElement("main",null,n?a.a.createElement(Je,null):a.a.createElement(Ze,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rn=Object(l.combineReducers)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"AUTHENTICATE_WITH_TOKEN":return Object(g.a)({},e,{subject:n.subject,isAuthenticated:!0,token:n.token,error:void 0});case"AUTHENTICATION_ERROR":return Object(g.a)({},e,{error:n.message});case"UNAUTHENTICATE_WITH_ERROR":return Object(g.a)({},e,{},We,{error:n.message});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_PLAYER_ID":return Object(g.a)({},e,{playerId:n.playerId});case"START_GAME":return Object(g.a)({},e,{isRunning:!0,players:n.playerIds.map((function(e){return Object(g.a)({},ke,{id:e})}))});case"END_GAME_SUCCESS":return Object(g.a)({},e,{players:e.players.map((function(e){return Object(g.a)({},e,{isGameWinner:e.id===n.winner,isServerRequestingCards:!1})})),validatedTurns:[],cardsInHand:[]});case"RESET_GAME":return Object(g.a)({},e,{players:e.players.map((function(e){return Object(g.a)({},e,{},ke)}))},Ne,{playerId:e.playerId});case"END_GAME_ERROR":return e;case"SET_CARDS_IN_HAND":return Object(g.a)({},e,{cardsInHand:n.cards});case"ADD_PLAYER_TURN":return Object(g.a)({},e,{validatedTurns:[].concat(Object(je.a)(e.validatedTurns),[n.turn]),players:e.players.map((function(e){return Object(g.a)({},e,{isServerRequestingCards:n.turn.playerId!==e.id&&e.isServerRequestingCards})})),cardsInHand:n.turn.playerId===e.playerId&&n.turn.valid?Ce(e.cardsInHand,n.turn):e.cardsInHand});case"START_ROUND":return e;case"END_ROUND":return Object(g.a)({},e,{players:e.players.map((function(e){return Object(g.a)({},e,{penalties:[].concat(Object(je.a)(e.penalties),Object(je.a)(Se(n.penalties,e.id))),isOut:_e(n.outPlayers,e.id),isRoundWinner:e.id===n.winner})}))});case"START_CYCLE":return Object(g.a)({},e,{validatedTurns:[]});case"END_CYCLE":return Object(g.a)({},e,{players:e.players.map((function(e){return Object(g.a)({},e,{isCycleHighestTurnPlayer:Ie(n.highestTurnPlayerIds,e.id),isOut:_e(n.outPlayers,e.id)})}))});case"REQUEST_CARDS":return Object(g.a)({},e,{turnTimeoutInMillis:n.turnTimeoutInMillis,turnRetriesLeft:n.turnRetriesLeft});case"START_PLAYER_TURN":return Object(g.a)({},e,{players:e.players.map((function(e){return Object(g.a)({},e,{isServerRequestingCards:n.playerId===e.id})}))});default:return e}},lobby:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_LOBBY_PLAYERS":return Object(g.a)({},e,{players:n.playerIds});default:return e}}}),an=(t(49),{colors:{primary:"#007fff",accent:"#ff007f",muted:"#737373",text:"#000",error:"rgba(227, 38, 54, 0.9)",success:"rgba(0, 140, 0, 0.9)"}}),un=Object(l.createStore)(rn,Object(s.composeWithDevTools)(Object(l.applyMiddleware)(o.a)));c.a.render(a.a.createElement(i.a,{store:un},a.a.createElement(d.a,{theme:an},a.a.createElement(tn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.1ff2b635.chunk.js.map